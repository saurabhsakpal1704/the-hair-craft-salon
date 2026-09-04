# THE HAIR CRAFT — Production Website

A premium React + TypeScript + Vite salon website for The Hair Craft Unisex Professional Salon, Neral.

## Included
- Responsive premium design
- Sticky navigation + mobile booking bar
- Service filtering and service-level booking CTA
- Booking form that validates input and opens a WhatsApp request
- Clear non-fake confirmation state
- Call / WhatsApp / Directions / Instagram / Facebook / YouTube links
- Gallery lightbox
- Reviews/trust section
- SEO meta tags, Open Graph, Twitter card, canonical
- BeautySalon JSON-LD structured data
- robots.txt, sitemap.xml, favicon and manifest
- Accessible focusable controls and reduced-motion support

## Run locally
1. Install Node.js 18+ (20+ recommended).
2. Open a terminal in this folder.
3. Run `npm install`
4. Run `npm run dev`
5. Open the localhost URL printed by Vite.

## Production build
`npm run build`

Preview:
`npm run preview`

## Netlify
Build command: `npm run build`
Publish directory: `dist`

## Vercel
Framework preset: Vite
Build command: `npm run build`
Output directory: `dist`

## Custom domain
After buying/owning `thehaircraftsalon.in`, add it in your Netlify/Vercel project settings and follow the DNS records the provider gives you. The site already uses the proposed canonical URL, but update it if the final domain differs.

## Gallery
The included gallery uses temporary high-quality editorial images so the layout is immediately presentable. For the owner's actual Instagram photos, place approved/downloaded images in `public/gallery/` and replace the `gallery` array in `src/App.tsx`. The live Instagram profile is linked directly.

## Services
Edit the `services` array in `src/App.tsx`. Exact prices are intentionally not invented; the UI says "Price on consultation".

## Booking
The booking flow is intentionally WhatsApp-based and does NOT claim an appointment is confirmed. To change the WhatsApp number, edit `WHATSAPP` near the top of `src/App.tsx`.

## Contact/social links
Edit `PHONE`, `WHATSAPP`, `IG`, `YOUTUBE`, and the social card links near the top of `src/App.tsx`.

## Facebook
The supplied business name was "The hair craft unisex salon", but an exact Facebook page URL was not supplied. The site therefore links to Facebook generically rather than inventing a page URL. Replace that link once the exact official page URL is known.

## Important source note
Public business information supports the salon's 4.9 rating, reviews, services and opening hours. The website does not fabricate awards, prices, staff profiles, certifications or testimonials.
