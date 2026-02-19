# TruClaim Advisory Group Website Project

## Overview
Website for **TruClaim Advisory Group** — an independent insurance appraisal and catastrophe loss valuation firm. The site is a simple marketing presence (no portal, no authentication, no member network).

Primary goals:
- Clearly explain services (appraisal, umpire, loss valuation)
- Establish credibility (experience, specialties, service area)
- Convert visitors into inquiries (call / email / contact form)

## Tech Stack
- React 19 + TypeScript
- Vite 7
- Tailwind CSS
- Framer Motion (animations)
- React Router DOM
- Lucide React (icons)

## Package Manager
This project uses **pnpm**.

## Development
```bash
# Install dependencies
pnpm install

# Run dev server (http://localhost:5173 or next available port)
pnpm dev

# Production build
pnpm build

# Preview production build
pnpm preview
```

## Project Structure
```text
src/
├── components/
│   ├── home/           # Hero, ServiceAreaSection, StatsSection
│   ├── services/       # Service cards/sections (optional)
│   └── layout/         # Navbar, Footer, Layout
├── pages/
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   └── Contact.tsx
└── index.css           # Tailwind + custom styles
```

## Pages
| Route | Page | Description |
|------:|------|-------------|
| `/` | Home | Hero, core services, credibility, CTA |
| `/services` | Services | Appraisal, umpire, loss valuation, litigation support (if offered) |
| `/about` | About | Bio, experience, credentials, approach |
| `/contact` | Contact | Contact form + phone/email + service area |

## Content Notes
- Keep language neutral and professional (works with insured, carrier, attorneys)
- Emphasize: independent, objective, evidence-based, defensible valuation
- Avoid contractor/roofing framing

## Environment Variables
None required for the base marketing site.

## Color Scheme
- Navy (primary) + charcoal (secondary)
- Optional precision blue as an accent

## Key Files
- `src/pages/Home.tsx` — primary conversion page
- `src/pages/Services.tsx` — service detail sections
- `src/pages/About.tsx` — credibility + positioning
- `src/pages/Contact.tsx` — contact CTA + form
- `tailwind.config.js` — custom colors and fonts