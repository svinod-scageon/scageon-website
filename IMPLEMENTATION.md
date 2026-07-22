# Scageon Website — Implementation Plan (Build v1)

Scope of v1: **2 industries (Healthcare, Banking & Finance) + 3 services + Home/About/Contact.**
Other 4 industries plug in later as data files — no re-architecture.

## Stack
- Next.js 15 (App Router) · React 19 · TypeScript
- Tailwind CSS · Framer Motion · Lenis (smooth scroll)
- Radix UI (accordion for "View case study") · lucide-react (icons)
- React Bits components, added per-component
- Deploy: Vercel (later)

## Content model (data-driven)
- `content/services.ts` — 3 services
- `content/industries.ts` — registry (6 slugs; only healthcare + banking populated in v1)
- `content/industries/*.md` — authored copy (source of truth for the .ts data)
- `content/caseStudies.ts` — case studies, referenced by industry + service
- Adding an industry later = add its object; page renders automatically.

## Progressive + scroll-based loading
- Route-level code splitting + `loading.tsx` (Suspense streaming) per route
- `next/dynamic` + skeleton fallback for heavy below-fold blocks (RB backgrounds, case panels)
- `useInView` lazy-mount gate for heavy client components
- `next/image` blur-up, explicit dims (no CLS), lazy below fold
- Skeleton/shimmer for >300ms; `whileInView` scroll reveals
- `prefers-reduced-motion` honored everywhere

## Signature
Connecting-thread SVG that draws on scroll (node-network / aperture motif), linking home sections.

## Milestones — v1 COMPLETE ✅
1. ✅ Foundation — Next 16 + Tailwind v4, tokens, fonts (Fraunces/Manrope/Space Grotesk), primitives, Lenis, nav/footer
2. ✅ Home — guided flow + connecting-thread signature + Aurora hero + CountUp + progressive loading
3. ✅ Services — overview + 3 detail pages
4. ✅ Industries — overview + Healthcare + Banking (solution cards + expandable, deep-linkable case studies)
5. ✅ About + Contact — form (mailto fallback; backend TBD)
6. ✅ Polish + QA — reduced-motion fixed (hydration-safe via MotionConfig), responsive verified 390/1280/1440, 0 console errors on all routes, no-JS reveal fallback

## How to run
```bash
npm run dev     # http://localhost:3000
npm run build   # production build (all 13 routes prerender static)
npm start       # serve production build
```

## Verified
- All 13 routes build & prerender as static HTML/SSG
- 0 console/hydration errors (normal + reduced-motion)
- Responsive at 390 (mobile), 1280, 1440
- React Bits: Aurora (hero, lazy WebGL), CountUp (stats), SpotlightCard (service cards) via shadcn registry CLI

## Deferred
- Remote Patient Monitoring (Healthcare) content
- Client naming (currently anonymized)
- Contact form backend (Formspree/Resend/API)
- Retail, Automotive, Media & Entertainment, OTT content
- High-res logo / favicon assets
