# Orion and Josephine: wedding website

Static [Astro](https://astro.build) site for our wedding on **Saturday 3rd July 2027** in Labeaume, Ardèche.
Pages: Home (the save-the-date letter), Information, RSVP, Timings, Travel & Accommodation, Things to Do, FAQs, in English (`/`) and French (`/fr/`).

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs static site to dist/
npm run preview    # serve the built site
```

## Edit content

| What | Where |
|---|---|
| All page text (EN + FR) | `src/content.ts` |
| RSVP provider, map links | `src/config.ts` |
| Images | `src/assets/` (optimised automatically at build) |
| Colours, fonts, spacing | `src/styles/global.css` (`:root` tokens) |
| Page layouts | `src/views/*.astro` (each is used by both `src/pages/` and `src/pages/fr/`) |
| Menu and header | `src/layouts/Base.astro` |
| Placeholder page vignettes | `src/components/Vignette.astro` |

Outstanding details to fill in are listed in [CONTENT_TODO.md](CONTENT_TODO.md).

## Deploy

**Netlify (recommended):** connect this repo in Netlify; `netlify.toml` already sets the build.
RSVPs then appear under *Forms → rsvp* in the Netlify dashboard (turn on email notifications there).

**Vercel or anywhere else:** set `RSVP_PROVIDER = 'formspree'` and `FORMSPREE_ENDPOINT` in `src/config.ts`,
then deploy the `dist/` folder.

Finally, point the `orion-josephine.com` domain at the new host (and update `site` in `astro.config.mjs` if the domain changes).
