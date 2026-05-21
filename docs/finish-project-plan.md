# TruClaims Appraisal Group — Production-Readiness Plan

> **Date:** May 2026 | **Status:** Active planning artifact  
> **Brand:** TruClaims Appraisal Group | **Domain:** truclaimsadvisorygroup.com

---

## 1. Current State Assessment

### What Is Complete

| Area | Status | Notes |
|---|---|---|
| All 7 routes | ✅ Done | Home, Services, Process, About, Contact, Texas, Louisiana, 404 |
| Layout shell | ✅ Done | Navbar, Footer, Layout, ScrollToTop, BackToTop |
| Brand design system | ✅ Done | Tailwind custom palette, Inter + Merriweather fonts |
| Self-hosted fonts | ✅ Done | Preloaded in `index.html` with `font-display: swap` |
| Hero image | ✅ Done | `.webp` served, `fetchpriority="high"` preload in `<head>` |
| SEO foundations | ✅ Done | `PageMetadata` component, canonical, OG/Twitter, LD+JSON structured data |
| `robots.txt` + `sitemap.xml` | ✅ Done | Covers all 7 routes |
| Contact form + file upload | ✅ Done | Vercel serverless function via Resend |
| Code splitting | ✅ Done | All non-home routes use `React.lazy` + `Suspense` |
| Vercel Analytics + Speed Insights | ✅ Done | `@vercel/analytics` and `@vercel/speed-insights` in `App.tsx` |
| Carrier logo grid | ✅ Done | 13 logos present in `public/logos/` with `loading="lazy"` |
| Reduced-motion support | ✅ Done | Framer Motion `useReducedMotion` used in Hero and About |
| Shared contact constants | ✅ Done | `src/lib/contact.ts` (`PHONE_DISPLAY`, `PHONE_TEL`) |
| Custom 404 page | ✅ Done | Animated, includes quick-links |
| CI pipeline | ✅ Done | GitHub Actions: lint + typecheck on every push |
| Dual deployment docs | ✅ Done | README documents Vercel (primary) and GitHub Pages paths |

### What Is Incomplete or Broken

| Area | Severity | Issue |
|---|---|---|
| Missing `og-image.jpg` | 🔴 Critical | `PageMetadata` defaults to `/og-image.jpg` but the file does not exist in `public/`. Social shares will show a broken image. |
| Image optimization | 🔴 Critical | `larryon-truman.jpg` is **3.5 MB** — a massive LCP hit on the About page. `hero-house.jpg`, `family-home.jpg`, and `texas-home-new-braunfels.jpg` are also 517–650 KB JPEGs with no WebP alternatives. |
| Missing `vercel.json` | 🔴 Critical | `README.md` documents a `vercel.json` that **does not exist**. Vercel will still deploy, but SPA rewrites and other config are not guaranteed. |
| CI uses `actions/checkout@v6` | 🔴 Critical | `v6` does not exist; GitHub Actions will fail. Should be `@v4`. |
| No tests | 🟠 High | Zero test files. No Playwright, no Vitest, no unit tests. The CI only runs lint + typecheck. |
| Deployment conflict | 🟠 High | The `api/contact.ts` Vercel serverless function is **incompatible** with the GitHub Pages deploy path. Contact form will silently 404 on Pages builds. The primary deploy target must be Vercel. |
| `pnpm.overrides` deprecated | 🟠 High | `package.json` uses the old `"pnpm": { "overrides": … }` field which current pnpm ignores. Dependency override intentions are silently skipped. Must migrate to `pnpm-workspace.yaml` `catalog:` or `.npmrc` `overrides.`. |
| Contact form accessibility | 🟠 High | Form inputs lack `aria-required`, `aria-invalid`, and `aria-describedby` for error messages. Error/success states are not announced to screen readers. |
| Skip-navigation link | 🟠 High | No skip-to-main-content link. Keyboard-only and screen-reader users cannot bypass the navigation. |
| Stats counter ignores `prefers-reduced-motion` | 🟡 Medium | `StatsSection` drives animated counters via `requestAnimationFrame` — not gated by `useReducedMotion`. Should fall back to static final values when motion is reduced. |
| Large-image `width`/`height` missing | 🟡 Medium | `larryon-truman.jpg`, `family-home.jpg`, and `texas-home-new-braunfels.jpg` are used in `<img>` tags without explicit `width` and `height` attributes on some pages. This causes CLS. |
| Color-contrast audit needed | 🟡 Medium | Some `steel-blue-400` on `parchment-50` and `gray-500` on white combinations may not meet WCAG AA (4.5:1). Needs automated audit. |
| `architecture.md` is an empty template | 🟡 Medium | `docs/architecture.md` contains only placeholder headings. No actual architecture is documented. |
| Sitemap lacks `<lastmod>` and `<priority>` | 🟡 Medium | Plain URL list only. Helps crawlers understand freshness and relative importance. |
| `vite.svg` in `public/` | 🟢 Low | Leftover Vite scaffold artifact — should be removed to avoid confusion. |
| `pnpm-workspace.yaml` has unused workspace patterns | 🟢 Low | `packages/*` and `apps/*` are listed but this is a single-package repo. |
| `og-image.jpg` social preview | 🟢 Low | Even once created, the OG image should be resized to 1200×630 px and ≤ 100 KB. |
| No `<meta name="theme-color">` | 🟢 Low | Improves appearance in mobile browser chrome and PWA install prompts. |
| Env vars not in `.env.example` | 🟢 Low | `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` should have an `.env.example` template for contributors. |

---

## 2. Prioritized Task Backlog

### Area: Bugs & Broken Config (P0 — Fix Immediately)

1. **Fix `actions/checkout@v6` → `@v4`** in `.github/workflows/ci.yml`
2. **Create `vercel.json`** with SPA rewrite rules and build config
3. **Create `public/og-image.jpg`** (1200×630 px, ≤ 100 KB) — or a branded placeholder until a designed image is ready
4. **Document primary deployment target** — add a clear "deploy to Vercel" note to README and disable/annotate the GitHub Pages workflow to prevent accidental static-only deploys that break the contact form

### Area: Performance / Core Web Vitals (P1)

5. **Optimize `larryon-truman.jpg`** → convert to WebP, resize to ≤ 800 px wide, target ≤ 150 KB
6. **Optimize remaining large images** (`family-home.jpg`, `texas-home-new-braunfels.jpg`, `hero-house.jpg`) → WebP + srcset
7. **Add `width` / `height` attributes** to every `<img>` that is missing them to eliminate CLS
8. **Gate stats counter animation** behind `useReducedMotion` in `StatsSection`

### Area: Accessibility (P1)

9. **Add skip-navigation link** in `Layout.tsx` — visually hidden, revealed on focus, anchors to `#main-content`
10. **Audit and fix form accessibility** in `Contact.tsx`:
    - Add `aria-required="true"` to required fields
    - Add `aria-invalid` and `aria-describedby` on error
    - Use a live region (`role="status"` or `aria-live="polite"`) for success/error messages
11. **Run automated color-contrast audit** (axe-core or Lighthouse) and fix any AA failures

### Area: Contact Flow (P1)

12. **Add honeypot field** to the contact form to reduce spam (hidden input, rejected server-side)
13. **Add confirmation email to submitter** — Resend supports a second `to:` or a separate API call

### Area: Dependency/Config Hygiene (P1)

14. **Migrate `pnpm.overrides`** from `package.json` to `pnpm-workspace.yaml` `overrides:` block (or remove if no longer needed)
15. **Create `.env.example`** documenting the three required Vercel env vars
16. **Remove `vite.svg`** from `public/`
17. **Clean up `pnpm-workspace.yaml`** — remove unused `packages/*` and `apps/*` entries

### Area: Testing (P2)

18. **Set up Playwright** for E2E smoke tests:
    - Navigation to each of the 7 routes renders without error
    - Contact form renders and validates client-side
    - 404 page displays for unknown routes
19. **Add Vitest** (or use Playwright component testing) for `PageMetadata`, `lib/contact.ts` constants

### Area: SEO (P2)

20. **Enrich `sitemap.xml`** — add `<lastmod>` for each URL (use last-commit date or a fixed release date)
21. **Add `<meta name="theme-color">`** to `index.html`
22. **Verify LD+JSON output** with Google's Rich Results Test for each page

### Area: Documentation (P2)

23. **Fill in `docs/architecture.md`** — document stack decisions, deployment flow, API function, env vars, and agent/CI workflow
24. **Add `CONTRIBUTING.md`** with setup steps, branch naming, and PR checklist
25. **Update `README.md`** — fix Framer Motion version (README still says "Framer Motion 11"; current is 12)

### Area: UX / UI Polish (P3)

26. **Lazy-load below-fold images** — `family-home.jpg` and `texas-home-new-braunfels.jpg` should use `loading="lazy"` where not already set
27. **Test mobile layouts** on 375 px viewport — confirm no horizontal overflow on Contact form and Process page
28. **Add `<meta name="robots" content="noindex">` to `/contact` confirmation state** (optional) if a separate thank-you page is introduced

### Area: Analytics (P3)

29. **Define conversion events** — log a Vercel Analytics custom event when the contact form is submitted successfully
30. **Set up Google Search Console** property for `truclaimsadvisorygroup.com` and submit the sitemap

---

## 3. Dependencies and Critical Path

```
[P0 Bugs fixed] ─────────────────────────────────────────────────┐
  └─ CI passes (checkout@v4)                                       │
  └─ vercel.json exists → Vercel deploy reliable                   │
  └─ og-image.jpg exists → Social sharing works                    │
                                                                    ▼
[P1 Performance + A11y] ──────────────────────────────────────────┤
  └─ Image optimization (larryon, hero, family, texas)             │
  └─ Skip-nav + form a11y fixes                                    │
  └─ Honeypot spam protection                                      │
                                                                    ▼
[P1 Contact flow complete] ────────────────────────────────────────┤
  └─ Confirmation email to submitter                               │
  └─ .env.example + Vercel env vars documented                     │
                                                                    ▼
[P2 Testing + SEO] ────────────────────────────────────────────────┤
  └─ Playwright smoke tests (unblocked after P0/P1)                │
  └─ Sitemap enrichment + Search Console setup                     │
                                                                    ▼
[P3 Polish] ───────────────────────────────────────────────────────┘
  └─ Analytics events, UX review, docs
```

**Blocking dependencies:**
- The contact form confirmation email (task 13) requires Vercel env vars to be set — coordinate with the site owner.
- The og-image (task 3) should be reviewed by the designer/owner before publishing.
- Playwright E2E tests (task 18) require a preview URL or a running dev server — easiest after `vercel.json` is in place.

---

## 4. Milestone Phases

### Phase 1 — Critical Fixes (Week 1) · ~8–12 h

**Goal:** Site is deployable, social-share-ready, and CI is green.

| # | Task | Effort |
|---|---|---|
| 1 | Fix `actions/checkout@v6` → `@v4` in ci.yml | 15 min |
| 2 | Create `vercel.json` with SPA rewrites | 30 min |
| 3 | Create `public/og-image.jpg` (branded placeholder) | 2–4 h (design) |
| 4 | Clarify deployment target in README; annotate GitHub Pages workflow | 30 min |
| 14 | Migrate `pnpm.overrides` to `pnpm-workspace.yaml` | 30 min |
| 15 | Create `.env.example` | 15 min |
| 16 | Remove `vite.svg` from `public/` | 5 min |
| 17 | Clean up `pnpm-workspace.yaml` | 10 min |

**Acceptance criteria:**
- CI workflow passes on a clean push (lint + typecheck succeed, no `checkout@v6` error)
- `vercel.json` exists; Vercel preview deploy builds successfully
- Social share of the home page URL shows a real OG image (not a broken link)
- `.env.example` documents all required env vars with placeholder values

---

### Phase 2 — Performance & Accessibility (Week 1–2) · ~12–16 h

**Goal:** Core Web Vitals pass "Good" thresholds on mobile; site meets WCAG 2.1 AA.

| # | Task | Effort |
|---|---|---|
| 5 | Optimize `larryon-truman.jpg` → WebP ≤ 150 KB | 1 h |
| 6 | Optimize other large images → WebP + srcset | 2 h |
| 7 | Add missing `width`/`height` to `<img>` tags | 1 h |
| 8 | Gate stats counter animation behind `useReducedMotion` | 1 h |
| 9 | Add skip-navigation link in `Layout.tsx` | 1 h |
| 10 | Fix Contact form aria attributes + live region | 2 h |
| 11 | Automated a11y audit + fix contrast failures | 2 h |

**Acceptance criteria:**
- Lighthouse mobile score: Performance ≥ 85, Accessibility = 100 (or 0 critical failures)
- LCP ≤ 2.5 s on a 4G throttled mobile simulation
- CLS < 0.1 (no layout shift from unsized images)
- `axe-core` reports 0 critical or serious violations across all 7 routes
- Contact form success/error messages are announced by screen readers (verified with VoiceOver or NVDA)
- Tab order through the entire page reaches all interactive elements without a keyboard trap

---

### Phase 3 — Contact Flow & Spam Protection (Week 2) · ~4–6 h

**Goal:** Contact form is production-hardened, submitters get a confirmation.

| # | Task | Effort |
|---|---|---|
| 12 | Add honeypot field (hidden input + server-side rejection) | 1 h |
| 13 | Add confirmation email to submitter via Resend | 2 h |

**Acceptance criteria:**
- A test submission from a real email address receives a confirmation reply within 1 minute
- Honeypot-triggered submissions return 200 (silent discard) and do not appear in the inbox
- The API handler returns a useful error message (not a generic 500) when required env vars are missing

---

### Phase 4 — Testing & SEO (Week 2–3) · ~8–12 h

**Goal:** Automated test coverage prevents regressions; site is indexed correctly.

| # | Task | Effort |
|---|---|---|
| 18 | Set up Playwright + write smoke tests for all 7 routes | 4–6 h |
| 19 | Add unit tests for `PageMetadata` and `lib/contact.ts` (Vitest) | 2 h |
| 20 | Enrich `sitemap.xml` with `<lastmod>` | 30 min |
| 21 | Add `<meta name="theme-color">` | 15 min |
| 22 | Verify LD+JSON with Google Rich Results Test | 1 h |

**Acceptance criteria:**
- `pnpm test` runs and all Playwright smoke tests pass
- CI pipeline extended: lint → typecheck → build → Playwright tests (in order)
- Sitemap validates at `https://www.xml-sitemaps.com`
- Google Rich Results Test shows valid structured data for at least the Home and Services pages
- Google Search Console property verified and sitemap submitted

---

### Phase 5 — Documentation & Polish (Week 3–4) · ~6–8 h

**Goal:** Codebase is understandable to new contributors; UX is smooth on all viewports.

| # | Task | Effort |
|---|---|---|
| 23 | Fill in `docs/architecture.md` | 2 h |
| 24 | Add `CONTRIBUTING.md` | 1 h |
| 25 | Update `README.md` (Framer Motion version, project structure) | 30 min |
| 26 | Verify lazy-loading on below-fold images | 30 min |
| 27 | Mobile layout QA (375 px) on all pages | 2 h |
| 29 | Add Vercel Analytics custom event on form submit | 1 h |
| 30 | Set up Google Search Console | 1 h |

**Acceptance criteria:**
- `docs/architecture.md` describes the stack, deployment flow, API function, and env var requirements
- `CONTRIBUTING.md` covers setup, dev server, branch naming, and PR submission
- No horizontal overflow on any page at 375 px viewport width
- Form submission logs a custom `contact_form_submitted` event visible in Vercel Analytics

---

## 5. Acceptance Criteria Summary

| Phase | Gate |
|---|---|
| Phase 1 | CI green, Vercel deploy succeeds, OG image renders in social preview |
| Phase 2 | Lighthouse ≥ 85 perf / 100 a11y, CLS < 0.1, 0 critical axe violations |
| Phase 3 | Confirmation email delivered, honeypot blocks spam, env var error message clear |
| Phase 4 | `pnpm test` passes, CI includes Playwright, Search Console verified |
| Phase 5 | Architecture docs complete, mobile QA passed, analytics events firing |

The site is considered **production-ready** when all Phase 1–3 criteria pass and Phase 4 CI tests are green.

---

## 6. Risks and Mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| OG image design takes longer than expected | Medium | Medium | Use a simple branded placeholder (navy background + logo + tagline) to unblock social sharing immediately; replace with polished design later |
| `larryon-truman.jpg` is a client-provided photo — resizing may need approval | Medium | Low | Compress and convert to WebP without cropping; confirm with client before going live |
| Vercel env vars not configured — contact form silently broken in production | High | High | Add a clear health-check log in the API handler that emits a warning if env vars are absent; document setup in README |
| Google Search Console domain verification delayed | Low | Low | Submit sitemap as soon as console is verified; organic traffic not affected during setup |
| Playwright tests flaky on CI due to animation timings | Medium | Medium | Use `page.waitForSelector` and disable Framer Motion in the test environment via a `?noMotion=1` query param or `VITE_DISABLE_MOTION=true` env var |
| `pnpm-workspace.yaml` `minimumReleaseAge` policy blocks very recent package versions in CI | Medium | Low | This is an environment-specific pnpm policy (24-hour minimum age). Either relax the policy or pin package versions and avoid same-day upgrades |
| Resend free tier limits (100 emails/day) | Low | Low | Monitor usage in Resend dashboard; upgrade plan before launch if expected volume exceeds limit |

---

## 7. Recommended Execution Sequence (Next 2–4 Weeks)

```
Week 1 (Days 1–5)
├── Day 1:  Fix ci.yml (checkout@v4), create vercel.json, clean up pnpm config, remove vite.svg
├── Day 2:  Create og-image.jpg placeholder; create .env.example; clarify README deployment section
├── Day 3:  Optimize all images (larryon → WebP, hero/family/texas srcset); fix <img> width/height
├── Day 4:  Add skip-nav link; audit and fix contact form aria attributes + live regions
└── Day 5:  Run Lighthouse + axe audit; fix color-contrast violations

Week 2 (Days 6–10)
├── Day 6:  Add honeypot to contact form (frontend + API); gate stats counter on useReducedMotion
├── Day 7:  Add submitter confirmation email via Resend; enrich sitemap.xml
├── Day 8:  Set up Playwright; write smoke tests for all 7 routes + form validation
├── Day 9:  Add Vitest; add unit tests for PageMetadata + lib/contact; add test step to CI
└── Day 10: Verify LD+JSON with Rich Results Test; add theme-color meta; analytics custom event

Week 3 (Days 11–15)
├── Day 11: Write docs/architecture.md; write CONTRIBUTING.md
├── Day 12: Mobile QA at 375 px on all pages; fix any overflow or layout issues
├── Day 13: Google Search Console setup + sitemap submission
├── Day 14: Full regression run (pnpm lint, typecheck, test, build)
└── Day 15: Stakeholder review; production deploy sign-off
```

---

## Appendix: Key Files Reference

| Purpose | Path |
|---|---|
| Brand colors + fonts | `tailwind.config.js` |
| Global styles + utility classes | `src/index.css` |
| Route layout + Analytics | `src/App.tsx` |
| SEO head management | `src/components/PageMetadata.tsx` |
| Contact form + file upload | `src/pages/Contact.tsx` |
| Email delivery API function | `api/contact.ts` |
| Shared phone/contact constants | `src/lib/contact.ts` |
| Hero image preload | `index.html` |
| Static assets | `public/` |
| CI workflow | `.github/workflows/ci.yml` |
| Deploy workflow | `.github/workflows/deploy.yml` |
| Dependency overrides (needs migration) | `package.json` → `pnpm` field |
