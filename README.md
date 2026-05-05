# Wieczór Panieński Wiktorii

Static site for the hen do — Bergamo & Lago di Garda, 1–5 sierpnia 2026.
Built with Next.js, deploys to Vercel.

## Local development

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Build

```bash
npm run build
```

Produces a fully static site in `out/`.

## Deploy to Vercel

Push this folder to a GitHub repo, then in the Vercel dashboard click _Add New → Project_ and import. Vercel auto-detects Next.js. Or from the command line:

```bash
npx vercel        # preview deploy
npx vercel --prod # production deploy
```

## Project layout

- `app/page.tsx` — the main itinerary page
- `app/layout.tsx` — fonts (DM Serif Display, Cormorant Garamond, EB Garamond) and metadata
- `app/globals.css` — all styling (paper / terracotta / brass palette, design tokens at the top)
- `app/not-found.tsx` — Polish 404

## Adding pages later

Create `app/<route>/page.tsx` and the route appears automatically. Likely candidates:

- `app/galeria/page.tsx` — photo gallery (memento for Wiktoria after the trip)
- `app/informacje/page.tsx` — practical info (flights, packing, money split)

## Customizing

- **Colors** — edit the `:root` variables at the top of `app/globals.css`
- **Itinerary content** — edit `app/page.tsx`. Each day is its own `<section className="day">` block, easy to copy and modify
- **Photos** — currently using Coco Beach / VisitSirmione / VisitBergamo / Airbnb stock images. Swap the `src` URLs in the `.collage` and `.stay-cover` images for your own once you have them
- **External images** — `next.config.mjs` has `images.unoptimized: true` so plain `<img>` tags work everywhere
