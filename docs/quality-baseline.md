# Quality Baseline and Release Checklist

## Baseline Metrics (to capture before optimization work)

Record these from a production deployment using Chrome Lighthouse and Core Web Vitals:

- Home page mobile Lighthouse score
- Contact page mobile Lighthouse score
- Largest Contentful Paint (LCP)
- Interaction to Next Paint (INP)
- Cumulative Layout Shift (CLS)
- Conversion baseline:
  - Contact form submission success count
  - Contact form error count
  - Contact form abandonment rate (start vs submit)

## Measurement Procedure

1. Run Lighthouse on `/`, `/services`, and `/contact` (mobile + desktop).
2. Record Core Web Vitals from Vercel Speed Insights.
3. Record form funnel events from Vercel Analytics custom events.
4. Store weekly snapshots in this file under a dated section.

## Release Readiness Checklist

- [ ] `pnpm lint` passes
- [ ] `pnpm build` passes
- [ ] Contact form submission test succeeds in preview
- [ ] Contact form upload validation rejects oversized/invalid files
- [ ] Metadata/canonical tags verified on all routes
- [ ] `robots.txt` and `sitemap.xml` are accessible
- [ ] Lighthouse mobile score reviewed for `/`, `/services`, `/contact`
- [ ] Critical CTA buttons route to `/contact` and `/process` as intended
- [ ] Copy and brand naming are consistent (`TruClaim Advisory Group`)
