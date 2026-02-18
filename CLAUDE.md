# ISG Website Project

## Overview
Website for **Insurance Specialty Group (ISG)** - a collective of 11 independent insurance brokerages across Canada. Includes their collectively owned MGA, M-JAK.

## Tech Stack
- React 19 + TypeScript
- Vite 7
- Tailwind CSS
- Framer Motion (animations)
- React Router DOM
- Leaflet (interactive map)
- Lucide React (icons)

## Development
```bash
cd /c/Users/rroughley/isg-site
npm run dev    # Starts on http://localhost:5173 (or next available port)
npm run build  # Production build
```

## Project Structure
```
src/
├── components/
│   ├── auth/           # ProtectedRoute
│   ├── brokerages/     # BrokerageCard, DetailModal, SearchFilter
│   ├── home/           # Hero, InteractiveMap, StatsSection
│   └── layout/         # Navbar, Footer, Layout
├── context/
│   └── AuthContext.tsx # Partner portal authentication
├── data/
│   └── brokerages.ts   # All 11 brokerage data
├── pages/
│   ├── Home.tsx
│   ├── Brokerages.tsx
│   ├── Mjak.tsx        # M-JAK MGA page
│   ├── Philosophy.tsx
│   ├── Contact.tsx
│   ├── PartnerLogin.tsx
│   └── PartnerPortal.tsx
└── index.css           # Tailwind + custom styles
```

## Pages
| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, interactive map, stats |
| `/brokerages` | Brokerages | Search/filter 11 member brokerages |
| `/mjak` | M-JAK | ISG's collectively owned MGA |
| `/philosophy` | Philosophy | Company values and philosophy |
| `/contact` | Contact | Contact information |
| `/partner-login` | Partner Login | Password-protected entry |
| `/partner` | Partner Portal | Protected area for ISG partners |

## Member Brokerages (11)
1. BrokerTeam Insurance (Richmond Hill, GTA)
2. Caldwell Roach Insurance (Truro, Nova Scotia)
3. Darling Insurance (Peterborough)
4. Josslin Insurance (Kitchener) - Founded 1880
5. Martin Merry & Reid (Toronto)
6. Orr Insurance (Stratford)
7. Roughley Insurance (Oshawa)
8. Rozon Insurance (Lancaster, Eastern ON)
9. Olsen-Sottile Insurance (St. Catharines, Niagara)
10. Stan Darling Insurance (Parry Sound/Muskoka)
11. Tanner Insurance (Ottawa)

## Partner Portal
- **Password:** `ISGinsure!`
- Auth uses SHA-256 hash stored in `.env`
- Session persists 24 hours via localStorage

## Environment Variables
```
VITE_PARTNER_PASSWORD_HASH=<sha256 hash of password>
```

## Git
- Initialized with baseline commit `b1ee4f3`
- To revert: `git reset --hard b1ee4f3`

## Color Scheme
- Royal blue (`royal-*`) - Primary brand color
- Gold (`gold-*`) - Accent color

## Key Files
- `src/data/brokerages.ts` - All brokerage data with coordinates, specializations, leadership
- `src/context/AuthContext.tsx` - Partner portal authentication logic
- `tailwind.config.js` - Custom colors and fonts
- `.env` - Partner password hash
