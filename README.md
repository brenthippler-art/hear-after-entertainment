# Hear After Entertainment — Website

Freelance client project: marketing site for Hear After Entertainment, a wedding DJ and event-coordination business. Built to a provided brand kit (ink/wine/brass palette, Fraunces + Public Sans typography

React + Vite version of the marketing site, matching the brand kit
(ink / wine / brass palette, Fraunces + Public Sans).

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/` — deploy that folder to any static host
(Netlify, Vercel, GitHub Pages, etc.).

## Structure

- `src/components/` — one component + stylesheet per section
  (Nav, Hero, Mission, Services, Packages, About, Quote, Contact, Footer)
- `src/data/` — content as plain JS objects (services, packages/pricing)
  so copy and pricing changes don't require touching component code
- `src/utils.js` — waveform bar-height generator used by the brand's
  signature mark throughout the site

## Notes

- Gallery/hero images are placeholders from LoremFlickr (free, tag-based
  stock photos) — swap the `src` URLs in `src/data/services.js`,
  `Hero.jsx`, and `About.jsx` for real event photos when ready.
- The contact form (`Contact.jsx`) sends via EmailJS. Service/template/
  public key IDs live in `.env` (not committed) as `VITE_EMAILJS_*`
  vars — see `.env` for the current values or your EmailJS dashboard
  to rotate them.
