import type { VercelRequest, VercelResponse } from '@vercel/node';
import { IncomingForm, type File } from 'formidable';
import { promises as fs } from 'node:fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseFormData = (req: VercelRequest) =>
  new Promise<{ fields: Record<string, string | string[]>; files: Record<string, File | File[]> }>(
    (resolve, reject) => {
      const form = new IncomingForm({ multiples: true, maxFileSize: 10 * 1024 * 1024 });
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

const collectFileArray = (fileOrFiles?: File | File[]): File[] => {
  if (!fileOrFiles) return [];
  return Array.isArray(fileOrFiles) ? fileOrFiles : [fileOrFiles];
};

interface ResendAttachment {
  filename: string;
  content: string;
  contentType?: string;
}

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
          `<tr><td style="padding:4px 8px;font-weight:600;">${label}</td><td style="padding:4px 8px;">${value || '—'}</td></tr>`
      ) //
      .join('');
    return `<h3 style="margin:16px 0 8px;font-size:16px;">${title}</h3><table style="width:100%;border-collapse:collapse;">${rows}</table>`;
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
        acc[key] = coerceToString(value);
        return acc;
      },
      {}
    );

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
      const errorBody = await response.text();
      console.error('Resend error', errorBody);
      res.status(502).json({ error: 'Email provider rejected the request' });
      return;
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact submission failed', error);
    res.status(500).json({ error: 'Failed to process submission' });
  }
}
