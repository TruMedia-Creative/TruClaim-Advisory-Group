import type { VercelRequest, VercelResponse } from '@vercel/node';
import { IncomingForm, type File } from 'formidable';
import { promises as fs } from 'node:fs';
import { MAX_DAMAGE_PHOTOS } from '../src/lib/contact';

export const config = {
  api: {
    bodyParser: false,
  },
};

const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_TRACKED_IPS = 2000;

const requestTimestampsByIp = new Map<string, number[]>();

const REQUIRED_FIELDS = [
  'name',
  'phone',
  'email',
  'propertyAddress',
  'state',
  'insuranceCompany',
  'claimNumber',
  'dateOfLoss',
  'typeOfLoss',
  'carrierIssuedPayment',
  'whatWasMissed',
  'appraisalInvoked',
  'hasRepresentation',
] as const;

const allowedMimeTypesByField: Record<string, Set<string>> = {
  carrierEstimate: new Set(['application/pdf']),
  settlementLetter: new Set(['application/pdf', 'image/jpeg', 'image/png']),
  damagePhotos: new Set(['image/jpeg', 'image/png']),
  contractorEstimate: new Set(['application/pdf', 'image/jpeg', 'image/png']),
};

const parseFormData = (req: VercelRequest) =>
  new Promise<{ fields: Record<string, string | string[]>; files: Record<string, File | File[]> }>(
    (resolve, reject) => {
      const form = new IncomingForm({
        multiples: true,
        maxFileSize: MAX_FILE_SIZE_BYTES,
      });
      form.parse(req, (err, fields, files) => {
        if (err) {
          reject(err);
          return;
        }
        resolve({ fields, files: files as Record<string, File | File[]> });
      });
    }
  );

const coerceToString = (value: string | string[] | undefined): string => {
  if (Array.isArray(value)) return value[0] ?? '';
  return value ?? '';
};

const sanitizeInput = (value: string): string => value.replace(/\s+/g, ' ').trim();

const escapeHtml = (value: string): string =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const collectFileArray = (fileOrFiles?: File | File[]): File[] => {
  if (!fileOrFiles) return [];
  return Array.isArray(fileOrFiles) ? fileOrFiles : [fileOrFiles];
};

const getClientIp = (req: VercelRequest): string => {
  const xForwardedFor = req.headers['x-forwarded-for'];
  if (typeof xForwardedFor === 'string' && xForwardedFor.length > 0) {
    return xForwardedFor.split(',')[0]?.trim() || 'unknown';
  }
  return req.socket.remoteAddress ?? 'unknown';
};

const pruneRateLimitEntries = (now: number) => {
  for (const [ip, timestamps] of requestTimestampsByIp.entries()) {
    const recent = timestamps.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);
    if (recent.length === 0) {
      requestTimestampsByIp.delete(ip);
      continue;
    }
    requestTimestampsByIp.set(ip, recent);
  }

  if (requestTimestampsByIp.size <= MAX_TRACKED_IPS) return;

  const ipsByOldestRecentActivity = [...requestTimestampsByIp.entries()]
    .sort(([, timestampsA], [, timestampsB]) => {
      const lastSeenA = timestampsA[timestampsA.length - 1] ?? 0;
      const lastSeenB = timestampsB[timestampsB.length - 1] ?? 0;
      return lastSeenA - lastSeenB;
    })
    .map(([ip]) => ip);

  for (const ip of ipsByOldestRecentActivity) {
    requestTimestampsByIp.delete(ip);
    if (requestTimestampsByIp.size <= MAX_TRACKED_IPS) break;
  }
};

const isRateLimited = (ip: string, now: number): boolean => {
  pruneRateLimitEntries(now);

  const history = requestTimestampsByIp.get(ip) ?? [];
  const recent = history.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestTimestampsByIp.set(ip, recent);
    return true;
  }

  recent.push(now);
  requestTimestampsByIp.set(ip, recent);
  return false;
};

interface ResendAttachment {
  filename: string;
  content: string;
  contentType?: string;
}

const validateFiles = (files: Record<string, File | File[]>) => {
  const damagePhotos = collectFileArray(files.damagePhotos);
  if (collectFileArray(files.carrierEstimate).length === 0) {
    throw new Error('Missing required files: carrierEstimate');
  }
  if (damagePhotos.length === 0) {
    throw new Error('Missing required files: damagePhotos');
  }
  if (damagePhotos.length > MAX_DAMAGE_PHOTOS) {
    throw new Error('Too many damage photos attached');
  }

  for (const [fieldName, allowedMimeTypes] of Object.entries(allowedMimeTypesByField)) {
    for (const file of collectFileArray(files[fieldName])) {
      if (!file.mimetype || !allowedMimeTypes.has(file.mimetype)) {
        throw new Error(`Invalid file type received for ${fieldName}`);
      }

      if (file.size > MAX_FILE_SIZE_BYTES) {
        throw new Error(`File size exceeds limit for ${fieldName}`);
      }
    }
  }
};

const validateFields = (fields: Record<string, string>) => {
  const missing = REQUIRED_FIELDS.filter((key) => !fields[key]);
  if (missing.length > 0) {
    throw new Error(`Missing required fields: ${missing.join(', ')}`);
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(fields.email)) {
    throw new Error('Invalid email format');
  }

  if (fields.state.length !== 2) {
    throw new Error('Invalid state code');
  }
};

const buildAttachments = async (files: Record<string, File | File[]>) => {
  const attachmentFields: Array<[string, string]> = [
    ['carrierEstimate', 'carrier-estimate'],
    ['settlementLetter', 'settlement-letter'],
    ['damagePhotos', 'damage-photo'],
    ['contractorEstimate', 'contractor-estimate'],
  ];

  const attachments: ResendAttachment[] = [];

  for (const [fieldName, prefix] of attachmentFields) {
    const fieldFiles = collectFileArray(files[fieldName]);
    for (const [index, file] of fieldFiles.entries()) {
      if (!file.filepath) continue;
      const buffer = await fs.readFile(file.filepath);
      attachments.push({
        filename: `${prefix}${fieldFiles.length > 1 ? `-${index + 1}` : ''}-${file.originalFilename ?? 'document'}`,
        content: buffer.toString('base64'),
        contentType: file.mimetype ?? 'application/octet-stream',
      });
    }
  }

  return attachments;
};

const buildHtmlBody = (fields: Record<string, string>) => {
  const section = (title: string, entries: Array<[string, string]>) => {
    const rows = entries
      .map(
        ([label, value]) =>
          `<tr><td style="padding:4px 8px;font-weight:600;">${escapeHtml(label)}</td><td style="padding:4px 8px;">${escapeHtml(value || '—')}</td></tr>`
      )
      .join('');
    return `<h3 style="margin:16px 0 8px;font-size:16px;">${escapeHtml(title)}</h3><table style="width:100%;border-collapse:collapse;">${rows}</table>`;
  };

  const contactSection = section('Contact Information', [
    ['Name', fields.name],
    ['Phone', fields.phone],
    ['Email', fields.email],
    ['Property Address', fields.propertyAddress],
    ['State', fields.state],
  ]);

  const claimSection = section('Claim Information', [
    ['Insurance Company', fields.insuranceCompany],
    ['Claim Number', fields.claimNumber],
    ['Date of Loss', fields.dateOfLoss],
    ['Type of Loss', fields.typeOfLoss],
    ['Carrier Issued Payment', fields.carrierIssuedPayment],
    ['Settlement Amount', fields.settlementAmount],
  ]);

  const qualificationSection = section('Qualification Details', [
    ['What Was Missed', fields.whatWasMissed],
    ['Appraisal Invoked', fields.appraisalInvoked],
    ['Has Representation', fields.hasRepresentation],
    ['Deadline', fields.deadline],
    ['Inspection Availability', fields.inspectionAvailability],
    ['Referral Source', fields.referralSource],
  ]);

  return `
    <div style="font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,sans-serif;font-size:14px;color:#111827;">
      <p>A new appraisal request was submitted via the TruClaim Advisory Group contact form.</p>
      ${contactSection}
      ${claimSection}
      ${qualificationSection}
    </div>
  `;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const clientIp = getClientIp(req);
  if (isRateLimited(clientIp, Date.now())) {
    res.status(429).json({ error: 'Too many submissions. Please try again later.' });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    res.status(500).json({ error: 'Missing email configuration' });
    return;
  }

  try {
    const { fields, files } = await parseFormData(req);

    const normalizedFields = Object.entries(fields).reduce<Record<string, string>>(
      (acc, [key, value]) => {
        acc[key] = sanitizeInput(coerceToString(value));
        return acc;
      },
      {}
    );

    if (normalizedFields.companyWebsite) {
      res.status(202).json({ success: true });
      return;
    }

    validateFields(normalizedFields);
    validateFiles(files);

    const attachments = await buildAttachments(files);

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: normalizedFields.email || undefined,
        subject: `New appraisal request from ${normalizedFields.name || 'website visitor'}`,
        html: buildHtmlBody(normalizedFields),
        attachments: attachments.length ? attachments : undefined,
      }),
    });

    if (!response.ok) {
      res.status(502).json({ error: 'Email provider rejected the request' });
      return;
    }

    res.status(200).json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process submission';
    const statusCode = message.startsWith('Missing required') || message.startsWith('Invalid') || message.startsWith('Too many') ? 400 : 500;
    res.status(statusCode).json({ error: message });
  }
}
