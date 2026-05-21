# TruClaims Advisory Group

Marketing website for **TruClaims Advisory Group** — an independent insurance appraisal and catastrophe loss valuation firm serving Texas, Louisiana, and nationwide for large-loss events.

## Tech Stack

| Concern         | Technology            |
| --------------- | --------------------- |
| Framework       | React 19 + TypeScript |
| Build tool      | Vite 7                |
| Styling         | Tailwind CSS v3       |
| Animation       | Framer Motion 11      |
| Icons           | Lucide React          |
| Routing         | React Router DOM v7   |
| Package manager | pnpm                  |

## Prerequisites

- **Node.js** 20 or later
- **pnpm** 9 or later (`npm install -g pnpm` or via [Corepack](https://nodejs.org/api/corepack.html))

## Local Development

```bash
# Install dependencies
pnpm install

# Start dev server (http://localhost:5173)
pnpm dev
```

## Available Scripts

| Script              | Description                                           |
| ------------------- | ----------------------------------------------------- |
| `pnpm dev`          | Start Vite dev server with HMR                        |
| `pnpm build`        | Type-check then produce a production build in `dist/` |
| `pnpm preview`      | Locally preview the production build                  |
| `pnpm lint`         | Run ESLint                                            |
| `pnpm lint:fix`     | Run ESLint and auto-fix violations                    |
| `pnpm typecheck`    | Run TypeScript compiler check without emitting files  |
| `pnpm format`       | Format all files with Prettier                        |
| `pnpm format:check` | Check formatting without writing files                |
| `pnpm depcheck`     | Check for unused or missing dependencies              |

## Deployment

### Vercel (recommended)

The project ships with a `vercel.json` that configures the build command, output directory, and SPA rewrites automatically.

1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import this repository.
3. Vercel will auto-detect the settings from `vercel.json`:
   - **Install command:** `pnpm install`
   - **Build command:** `pnpm run build`
   - **Output directory:** `dist`
4. Click **Deploy**. Every subsequent push to the default branch triggers a new deployment automatically.

To deploy manually from the CLI:

```bash
# Install Vercel CLI globally (once)
pnpm add -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### GitHub Pages (CI/CD)

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and publishes the site to GitHub Pages on every push to `main`.

**First-time setup:**

1. In your repository on GitHub, go to **Settings → Pages**.
2. Under **Source**, select **GitHub Actions**.
3. Push a commit to `main` (or run the workflow manually via **Actions → Deploy to GitHub Pages → Run workflow**).

The workflow will:

- Install dependencies with `pnpm install --frozen-lockfile`
- Build the project with `pnpm run build`
- Upload the `dist/` directory as a Pages artifact
- Deploy to the URL shown in the workflow run summary

### Manual / Self-hosted

To build a production bundle and serve it from any static host:

```bash
pnpm install --frozen-lockfile
pnpm build
# Upload the contents of dist/ to your host
```

Because the app uses client-side routing, configure your server to rewrite all requests to `index.html`. The equivalent Nginx directive is:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```


## Quality Baseline

Use `docs/quality-baseline.md` to track:

- Lighthouse and Core Web Vitals baseline measurements
- Contact funnel conversion baselines
- Pre-release quality checks for each deployment

## Project Structure

```text
src/
├── components/
│   ├── home/           # Hero, StatsSection, ServiceAreaSection
│   └── layout/         # Navbar, Footer, Layout, ScrollToTop
├── pages/
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   └── Contact.tsx
└── index.css           # Tailwind layers + reusable utility classes
```

## Environment Variables

No client-side environment variables are required for the marketing pages.

The contact API (`/api/contact`) requires server-side Vercel environment variables: `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL`.

## Contact Form Email Delivery

The contact form posts to `/api/contact`, a Vercel Serverless Function that relays submissions (including file uploads up to 10&nbsp;MB each) via [Resend](https://resend.com/).

1. Create a Resend account and add/verify your custom domain (DKIM/SPF records will be required in GoDaddy).
2. Generate an API key and add the following environment variables to your Vercel project (Project → Settings → Environment Variables):

- `RESEND_API_KEY` – the secret key you generated.
- `CONTACT_FROM_EMAIL` – the verified sender, e.g. `TruClaim Contact <contact@yourdomain.com>`.
- `CONTACT_TO_EMAIL` – the inbox that should receive submissions.

3. Redeploy (or trigger “Redeploy with existing build”) so the new env vars are available to the function.

> Local testing: add the same variables to a `.env.local` file and run `vercel dev` so `/api/contact` is available while you build locally.
