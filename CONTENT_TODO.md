# Content to confirm

Everything below is currently a placeholder or a guess on the live pages. Text lives in `src/content.ts`, settings in `src/config.ts`.

## Must do before launch
- [ ] **RSVP deadline**: currently "1st March 2027" (`info.ctaText`)
- [ ] **Timings**: all six times and events (`timings.items`)
- [ ] **Transport between church and reception**: shuttle or drive yourselves? (`timings.transportNote`, FAQ)
- [ ] **Hotels**: real recommendations by price band, plus any room blocks or discount codes (`travel.stay`)
- [ ] **FAQ answers**: dress code, plus-ones, children, gift list (`faqs.items`)
- [ ] **RSVP provider**: deploy on Netlify (nothing to do) or set up Formspree
- [ ] **French copy**: a first draft; have Josephine or family check it

## Please check
- [ ] Travel times and airport/station choices (`travel.getting`)
- [ ] Things to Do list: add your personal picks and why you love them (`things.items`)
- [ ] Reception map link: currently a Google Maps search for "Salle du Recatadou Labeaume" (`MAPS.reception`)
- [ ] "To Josephine's Grandparents" was on the old Wix home page. Is it a dedication or a separate event? Not used yet.
- [ ] Guests number field allows 1–6; adjust if needed (`src/views/Rsvp.astro`)

## Nice to have
- [ ] Commission or generate watercolour vignettes to replace the placeholder line drawings:
  wildflower (RSVP), bell tower/clock (Timings), vintage train or car (Travel), canoe on the river (Things to Do), envelope (FAQs)
- [ ] Separate layers of the save-the-date collage (denim, envelope, letter, postcard, photo strip) for a layered/parallax version
- [ ] Phase 2: personal RSVP links emailed to each guest (as on the reference site)
- [ ] Any other languages besides EN/FR?
