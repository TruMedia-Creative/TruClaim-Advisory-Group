# Launch-Readiness Audit — 2026-09-05

## Repository

`/Users/larryontruman/ArryoRuma/3_Clients/TruClaim-Advisory-Group`

## Scope and finding

Read the project log at `/Users/larryontruman/ArryoRuma/0_Projects/Efforts/Active/TruMedia Creative - V/Projects/Client Projects/TruClaims Advisory Group - Project Log.md` and the repository documentation. The prior May plan is now historical: `vercel.json`, a skip link, required-field ARIA, honeypot handling, and current GitHub Action majors already exist. The active P0/P1 gaps were a missing shipped social image and crawlable static social metadata, incomplete CI coverage, an unsafe automatic GitHub Pages path, missing contributor environment guidance, no automated regression checks, and the 3.59 MB About portrait.

## Implemented locally (uncommitted)

- Generated `public/og-image.jpg` from the existing TruClaims horizontal logo: 1200 × 630 px, 24,005 bytes.
- Added canonical, Open Graph, and Twitter fallback tags to `index.html` so non-JavaScript crawlers can discover the homepage social card.
- Added Node built-in launch-readiness tests and a `pnpm test` command.
- Hardened CI: push and pull-request coverage, frozen-lockfile install, `pnpm check`, production build, and tests.
- Disabled automatic GitHub Pages publishing. Static Pages cannot run `/api/contact`; the manual workflow now explains the Vercel-only production requirement and exits without publishing.
- Added a non-secret `.env.example` for the three Vercel contact-function variables and ignore rules for future local environment files.
- Converted the About portrait from the 3,588,219-byte JPG to an 800 × 1067 WebP (100,226 bytes) and updated the page plus Person JSON-LD to use it.
- Updated the README, architecture documentation, release checklist, and marked the stale May readiness plan as superseded.

## Verification

- `pnpm check` — passed (ESLint, TypeScript build-mode check, Prettier).
- `pnpm test` — passed: 7 launch-readiness tests.
- `pnpm build` — passed: Vite production build completed.
- Generated asset checks — OG image is 1200 × 630; About WebP is 800 × 1067 and under 200 KB.

No deployment, message, form submission, or public change was performed.

## Remaining launch blockers / required follow-up

1. **P0 — Contact delivery:** Configure `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL` in the Vercel project, then submit a real preview test with permitted and rejected uploads. This could not be verified without approved credentials and must not be inferred from a successful static build.
2. **P0 — Tracked environment file:** `.env` is currently tracked. The new ignore rule does not untrack existing files. Review it locally, then remove it from Git tracking (`git rm --cached .env`) and rotate any credential that may have appeared in repository history before committing. Its protected contents were not read during this audit.
3. **P1 — External quality audit:** Run Lighthouse and an automated accessibility audit against a Vercel preview for all routes; validate keyboard flow, mobile layout, contact success/error announcements, canonical output, `robots.txt`, and `sitemap.xml` on the deployed host.
4. **P1 — Remaining image work:** The source JPG is retained locally as the client-provided master; decide whether it belongs outside `public/` before release. The hero WebP is still 450,654 bytes and other legacy public JPGs need a route-by-route usage review before compression or deletion.
5. **P1 — Content/claims approval:** Confirm credentials, service claims, testimonials, and contact-flow wording with the client before launch. The audit did not invent or alter client-facing claim copy.
6. **P2 — Per-route social metadata:** Static homepage metadata now protects non-JavaScript crawlers, but distinct social cards for every route require a Vite prerender/SSR decision.
7. **P2 — Protected instruction file:** `CLAUDE.md` still says Vite 7. The local patch was not applied because protected agent-instruction files require separate user consent; update that single reference during the next approved documentation pass.
