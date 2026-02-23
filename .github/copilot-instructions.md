# Copilot Instructions — TruClaim Advisory Group

## Product Context

TruClaim Advisory Group is an independent insurance appraisal and catastrophe loss valuation firm. The website is a pure marketing presence; there is no authentication, member portal, or backend.

**Primary goals of the site:**
- Clearly communicate services: insurance appraisal, umpire services, catastrophic loss valuation, litigation support, residential and commercial property claims.
- Establish professional credibility through experience, specialties, and service area coverage.
- Convert visitors into inquiries via phone, email, or the contact form.

**Audience:** Insureds, insurance carriers, and attorneys who need independent, objective, evidence-based appraisal and dispute resolution services.

**Tone:** Professional, neutral, authoritative. Avoid contractor or roofing-shop framing. Emphasize independence, objectivity, and defensible valuation methodology.

## Tech Constraints

| Concern | Decision |
|---------|----------|
| Framework | React 19 with TypeScript (strict mode) |
| Build tool | Vite 7 |
| Styling | Tailwind CSS v3 — utility-first, no CSS-in-JS |
| Animation | Framer Motion 11 only — no other animation libraries |
| Icons | Lucide React only — no other icon sets |
| Routing | React Router DOM v7 — `<BrowserRouter>` with nested `<Routes>` |
| Package manager | **pnpm** — never use npm or yarn |
| Environment variables | None required; do not add `.env` secrets to source |
| Deployment target | Vercel (see `vercel.json`) |
| No backend | No API routes, authentication, databases, or server-side logic |

**Dependency rule:** Do not add new runtime dependencies without explicit approval. Prefer the libraries already installed.

## Architecture Rules

1. **Pages live in `src/pages/`** (`Home.tsx`, `Services.tsx`, `About.tsx`, `Contact.tsx`). Each page is a default export.
2. **Reusable components live in `src/components/`**, organized by concern:
   - `layout/` — `Navbar`, `Footer`, `Layout`, `ScrollToTop`
   - `home/` — components used only on the Home page (`Hero`, `StatsSection`, `ServiceAreaSection`)
   - `services/` — components used only on the Services page (optional, currently unused)
3. **`Layout` wraps every page** and renders `<Navbar>`, `{children}`, and `<Footer>`.
4. **`ScrollToTop`** must remain inside `<Router>` and above `<Routes>` to reset scroll on every navigation.
5. **Routing** is declared in `src/App.tsx` only. Do not define routes inside pages or components.
6. **Global styles** belong in `src/index.css` using Tailwind `@layer base` and `@layer components`. Avoid inline `<style>` tags.
7. **Custom Tailwind tokens** (`royal`, `gold` color palettes; `sans`/`serif`/`display` font families) are defined in `tailwind.config.js`. Use these tokens; do not hard-code hex values.
8. **No prop-drilling more than two levels deep.** If data needs to travel further, co-locate it or lift it to the page level.
9. **No global state library** (Redux, Zustand, Context) is needed. Keep state local with `useState`/`useRef`.

## Coding Style

- **TypeScript:** Always type component props with an explicit `interface` or `type`. Avoid `any`.
- **Components:** Use named function declarations for pages (`export default function Services() {}`); use `const` arrow functions for sub-components and hooks (`const Navbar = () => {}`).
- **Imports:** Group in order — React core → third-party → internal components → internal pages → assets/styles. Separate groups with a blank line.
- **Tailwind classes:** Apply via `className` string literals. Use `cn()` or template literals for conditional classes; avoid creating separate CSS classes for one-off utilities.
- **Reusable utility classes** (`.btn-primary`, `.btn-secondary`, `.btn-outline`, `.card`, `.section-title`, `.gradient-text`) are defined in `index.css` — use them instead of repeating long Tailwind strings.
- **Animation patterns:**
  - Above-the-fold content: use `animate` (not `whileInView`) so animations fire immediately on mount.
  - Below-the-fold content: use `whileInView` with `viewport={{ once: true, amount: 0 }}` to trigger on first pixel visibility.
  - Card grids: use a container-level `variants` with `staggerChildren: 0.08` rather than per-item `delay` props.
  - Standard timing: `duration: 0.4` for individual items; `duration: 0.6` for hero/header sections.
- **Layering:** Use absolutely-positioned overlay `<div>`s with explicit `z-index` classes (`z-10` for content, `z-20` for bottom transitions) rather than relying on stacking-context side effects.
- **No `console.log`** in committed code. Use TypeScript types and ESLint to catch issues during development.
- **Accessibility:** Always include `alt` text on images, `aria-label` on icon-only buttons, and semantic HTML elements (`<nav>`, `<main>`, `<section>`, `<footer>`).

## Output Expectations from Copilot

- **Be minimal and surgical.** Change as few lines as possible. Prefer editing existing files over creating new ones unless the task clearly requires a new file.
- **Match existing patterns exactly.** Before generating new code, identify the pattern used in the closest existing file and replicate it (animation variants, className ordering, component structure).
- **Include helpful inline comments only where behavior is non-obvious.** Do not comment every line; comment complex animation logic, non-trivial z-index stacking, or math-heavy layout calculations.
- **Take screenshots when done and when reviewing code** *(Copilot Coding Agent)*. After completing a UI change, start the dev server and take a screenshot of the affected page(s) so the visual impact is visible to the reviewer.
- **Do not introduce new dependencies.** Use the libraries already in `package.json`.
- **TypeScript first.** All generated code must be valid TypeScript. Do not use `.js` or `.jsx` extensions for new source files.
- **Keep pages self-contained.** Page-level data (service lists, stat counters, nav links) should be defined as `const` arrays at the top of the relevant file, not in a separate data file, unless reuse across multiple pages requires it.
- **Respect the brand voice.** Content suggestions should be professional, neutral, and emphasize independence and evidence-based methodology. Avoid promotional hyperbole.
- **Run `pnpm build`** to verify there are no TypeScript or Vite build errors after making changes.
- **Run `pnpm lint`** to verify ESLint passes before finalizing any code suggestion.
