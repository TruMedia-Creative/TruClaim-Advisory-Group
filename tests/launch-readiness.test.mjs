import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const fromRoot = (...segments) => path.join(repoRoot, ...segments);

test('the metadata default social image is shipped in public assets', async () => {
  const metadataSource = await readFile(fromRoot('src/components/PageMetadata.tsx'), 'utf8');

  assert.match(metadataSource, /\/og-image\.jpg/);
  await access(fromRoot('public/og-image.jpg'));
});

test('CI runs deterministic install plus the full local quality gate on pushes and pull requests', async () => {
  const workflow = await readFile(fromRoot('.github/workflows/ci.yml'), 'utf8');

  assert.match(workflow, /pull_request:/);
  assert.match(workflow, /pnpm install --frozen-lockfile/);
  assert.match(workflow, /pnpm run check/);
  assert.match(workflow, /pnpm run build/);
});

test('CI invokes the repository test command', async () => {
  const packageJson = JSON.parse(await readFile(fromRoot('package.json'), 'utf8'));
  const workflow = await readFile(fromRoot('.github/workflows/ci.yml'), 'utf8');

  assert.equal(packageJson.scripts.test, 'node --test');
  assert.match(workflow, /pnpm test/);
});

test('contributors have a non-secret contact API environment template', async () => {
  const envExample = await readFile(fromRoot('.env.example'), 'utf8');

  assert.match(envExample, /^RESEND_API_KEY=$/m);
  assert.match(envExample, /^CONTACT_FROM_EMAIL=$/m);
  assert.match(envExample, /^CONTACT_TO_EMAIL=$/m);
});

test('the About portrait uses a resized WebP asset', async () => {
  const aboutSource = await readFile(fromRoot('src/pages/About.tsx'), 'utf8');

  assert.match(aboutSource, /larryon-truman\.webp/);
  const portrait = await readFile(fromRoot('public/larryon-truman.webp'));
  assert.ok(portrait.byteLength < 200_000, 'portrait should not exceed 200 KB');
});

test('GitHub Pages cannot automatically publish a contact-form-less production site', async () => {
  const workflow = await readFile(fromRoot('.github/workflows/deploy.yml'), 'utf8');

  assert.doesNotMatch(workflow, /^\s*push:/m);
  assert.match(workflow, /^\s*workflow_dispatch:/m);
});

test('the static HTML ships crawlable default social metadata', async () => {
  const html = await readFile(fromRoot('index.html'), 'utf8');

  assert.match(html, /rel="canonical" href="https:\/\/www\.truclaimsadvisorygroup\.com\/"/);
  assert.match(
    html,
    /property="og:image" content="https:\/\/www\.truclaimsadvisorygroup\.com\/og-image\.jpg"/
  );
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
});
