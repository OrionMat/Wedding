# Content to confirm

Everything below is currently a placeholder or a guess on the live pages. Text lives in `src/content.ts`, settings in `src/config.ts`.

## Must do before launch
- [ ] **RSVP deadline**: not shown anywhere yet; add it to the RSVP popup intro (`rsvp.intro`) if you want one
- [ ] **Timings**: all six times and events (`timings.items`)
- [ ] **Transport between church and reception**: shuttle or drive yourselves? (`timings.transportNote`, FAQ)
- [ ] **Hotels**: real recommendations by price band, plus any room blocks or discount codes (`travel.stay`)
- [ ] **FAQ answers**: dress code, plus-ones, children, gift list (`faqs.items`, the Q&A at the bottom of the Details page)
- [ ] **RSVP provider**: deploy on Netlify (nothing to do) or set up Formspree
- [ ] **French copy**: a first draft; have Josephine or family check it (including the image labels, e.g. “Chez les grands-parents de Josephine”)

## Please check
- [ ] Travel times and airport/station choices (`travel.getting`)
- [ ] Reception map link: currently a Google Maps search for "Salle du Recatadou Labeaume" (`MAPS.reception`)
- [ ] Guests number field allows 1–6; adjust if needed (`src/components/RsvpDialog.astro`)

## Nice to have
- [ ] Commission or generate watercolour vignettes to replace the placeholder line drawings:
  bell tower/clock (Schedule), vintage train or car (Travel), envelope (Q&A and Registry)
- [ ] Separate layers of the save-the-date collage (denim, envelope, letter, postcard, photo strip) for a layered/parallax version
- [ ] Phase 2: personal RSVP links emailed to each guest (as on the reference site)
- [ ] Any other languages besides EN/FR?
- [ ] Registry: add the gift list or links when ready (`registry` in `src/content.ts`, `src/views/Registry.astro`)
