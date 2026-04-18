# Maven Kitchen — PRD

## Original Problem Statement
Frontend-only marketing website for **Maven Kitchen** (ಮೇವನ್ ಕಿಚನ್), a North Eastern Indian restaurant on 1st floor, 163, Ejipura Main Rd, Viveknagar Further Extension, Ejipura, Bengaluru 560047. Phone +91 83103 60483, rated 4.6★ with 1200+ Google reviews. Warm rustic vibe, terracotta + forest green + warm wood tones, Northeast Indian tribal motifs. Sections: Header, Hero, About, Menu Highlights (5 categories, INR pricing), What Makes Us Special, Gallery (6 images), Testimonials, Visit Us, Footer.

## Architecture
- React 19 + Tailwind 3 + Shadcn tokens (earthy palette)
- No backend — fully static single-page site
- Libraries: framer-motion, react-fast-marquee, @phosphor-icons/react
- Fonts: Cormorant Garamond (serif headings), Manrope (body), Noto Sans Kannada (subtitle)
- Routing: React Router, single Home route with anchor navigation

## User Personas
- **Food discoverer** in Bengaluru Googling for authentic Northeast Indian cuisine
- **Neighbourhood regular** looking for menu/hours/phone
- **Diaspora** searching for home-style Naga/Manipuri food

## Core Requirements (static)
- Clickable tel: link to +91 83103 60483
- Google Maps deep link to Ejipura address
- Menu with 5 categories and INR (₹) pricing
- 6-image gallery (Northeast Indian food + interior)
- 4 testimonials in editorial marquee
- Swiggy/Zomato placeholder buttons (non-functional per brief)

## What's Implemented (2025-12)
- Header (fixed, with Kannada subtitle + Call-to-Order)
- Hero with full-bleed image, 4.6★ badge, dual CTAs
- About with asymmetric image stack + stats
- Menu with animated tab switcher, dotted leader pricing
- Features (4 blocks with Phosphor icons)
- Gallery (Bento/Tetris grid)
- Testimonials (react-fast-marquee editorial ribbon)
- Contact (dark section, 4 info blocks, embedded Google Maps)
- Footer (social placeholders, address, hours)

## Backlog
### P1
- Real Swiggy/Zomato delivery URLs
- Instagram/Facebook real handles
- Reservation form (if needed)

### P2
- Photo lightbox for gallery
- Blog/stories section
- Multi-language toggle (English ↔ Kannada)

## Next Action Items
- Collect real delivery platform URLs and social handles
- Add reservation CTA if walk-in traffic is high
