# Architecture

## Purpose

TruClaims Advisory Group is a Vite-built React marketing site for independent property-insurance appraisal and umpire services. It is a client-side single-page application with a Vercel Serverless Function for form delivery.

## Stack

- React 19 + TypeScript + React Router DOM 7
- Vite 8 and Tailwind CSS 4
- Framer Motion for interface motion; meaningful animations should respect reduced-motion preferences
- Vercel Analytics and Speed Insights in production builds
- Vercel Functions, Formidable, and Resend for `/api/contact`
- pnpm 11.24.0 (declared in `package.json`)

## Application structure

- `src/App.tsx` owns the router, lazy-loaded non-home routes, shared layout, and production analytics.
- `src/pages/` contains the seven public route components: Home, Services, Process, Texas, Louisiana, About, Contact, and a 404 page.
- `src/components/layout/` contains navigation, footer, skip-to-main link, scroll reset, and back-to-top control.
- `src/components/PageMetadata.tsx` updates route-level titles, canonical URL, Open Graph/Twitter metadata, and JSON-LD. Its default social asset is `public/og-image.jpg`.
- `src/lib/contact.ts` owns shared client/server form constants.
- `api/contact.ts` accepts multipart contact submissions, validates text and files, applies the in-memory rate limit and honeypot, and relays approved submissions to Resend.
- `public/` contains static assets, `robots.txt`, and `sitemap.xml`.

## Deployment

Vercel is the only supported preview and production target. `vercel.json` installs with the lockfile, builds `dist/`, and serves SPA routes. Vercel also maps `/api/contact` to the serverless function.

GitHub Pages is intentionally disabled because static Pages cannot run `/api/contact`; see `.github/workflows/deploy.yml`.

The Vercel project requires the following server-side values before form delivery can work:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL`

Use `.env.example` for key names only. Do not commit populated environment files.

## Quality gates

Local verification:

```bash
pnpm check
pnpm test
pnpm build
```

`.github/workflows/ci.yml` runs the frozen-lockfile install, `pnpm check`, production build, and the local test suite on pushes and pull requests. The Node built-in launch-readiness tests guard the shipped OG asset, CI commands, environment-template keys, optimized About portrait, and disabled Pages deployment.

## Operational limits and follow-up

The contact endpoint depends on Vercel and Resend configuration and cannot be fully exercised locally without approved credentials. Run a preview deployment submission test (including allowed and rejected file uploads) before launch. Browser accessibility and Lighthouse measurements must also be collected against a preview or production URL.
