# Prompt: Build the Orion & Josephine wedding website

> Paste everything below the line into Claude Code (from this repo's root) to build the site.
> Anything marked **[CONFIRM]** is a guess or placeholder. Fill it in first, or let the build use the placeholder and fix it later.

---

## Goal

Build a static, mobile-first wedding website for **Orion & Josephine**, who are getting married on **Saturday 3rd July 2027** in **Labeaume, Ardèche, France**. Build it in this repository. It replaces our current Wix site (orion-josephine.com).

Copy the **page structure and information architecture** of a reference site (xavandclaudia.com/wedding), and use the **visual style, assets and voice** of our existing Wix site. Do not copy the reference site's text, illustrations or branding. Only its structure and UX patterns.

## Tech stack

- **Astro** (static output), plain CSS with custom properties, no UI framework. Keep it simple and fast.
- One shared layout plus one page per route. Content lives in easy-to-edit files (Markdown or a `src/content/` data file), so we can update hotels, FAQs and similar without touching components.
- Deploy target: Netlify or Vercel (static). Add a short `README.md` covering how to run, edit content and deploy.
- RSVP form backend: use **Netlify Forms** (or Formspree if not on Netlify). Make the provider a single config value. No custom server.
- Must score well on Lighthouse: responsive images (`astro:assets`), lazy-loading, no layout shift, accessible labels and focus states, `prefers-reduced-motion` respected.

## Site structure (taken from the reference site)

The reference site has a quiet, single-column, centred layout with these routes. Reproduce the same set, adapted to us:

| Route | Page | Reference behaviour to copy |
|---|---|---|
| `/` | **Home** | Full-viewport hero: a centred illustration of the venue, couple's names in a large serif, then a small letter-spaced uppercase line with the date and venue/location. Nothing else above the fold. |
| `/rsvp` | **RSVP** | Small illustration above the page title, a short friendly intro, then the form. |
| `/timings` | **Timings** | The day's schedule as a vertical timeline (time, event, place). |
| `/travel` | **Travel & Accommodation** | Section eyebrow (small caps label) + serif heading. "Getting here" grouped by mode (plane / train / car). Each option is a small entry with a thin left rule: duration on top, place name, then a muted one-line how-to. Then "Where to Stay": an intro paragraph and hotels grouped by price band (€ / €€ / €€€) in the same thin-left-rule list style, closing with a "these are a starting point" note. |
| `/things-to-do` | **Things to Do in the Ardèche** | Short intro line, then a list or cards of favourite places nearby, each with a one-line description and a map link. |
| `/faqs` | **FAQs** | Accordion of questions and answers. |

**Global UI patterns to copy from the reference:**
- A **floating pill "Menu" button**, fixed top-left on every page. It opens a **full-screen overlay menu** that blurs and dims the page behind it, with large centred serif links and a "Close" pill in the same spot. Esc closes it. It traps focus while open.
- A small **monogram** ("O&J") centred at the top of each page. It links to Home.
- A **language switcher** top-right (EN / FR). Build i18n in from the start (`/` = EN, `/fr/` = FR). Placeholder French copy is fine **[CONFIRM: do we want FR? any other language?]**.
- Each inner page opens with a **small hand-drawn/watercolour vignette above the page title** (a different one per page), then the title in a large light serif.
- **Gentle fade-up-on-scroll** reveals for sections (disabled under `prefers-reduced-motion`).
- Content column ~640px max width, generous vertical spacing, thin hairline dividers between sections.

## Visual style (taken from our Wix site)

Our current site has two looks. Blend them:

1. **The save-the-date "letter" page** (current RSVP page): a tactile, scrapbook collage. Blue **denim fabric** background, a kraft-paper **envelope with a string tie**, a **handwritten letter** on lined paper in blue ink, a **vintage Piccadilly Circus postcard** tucked behind it, a **black-and-white photo-booth strip** of the two of us, and a little kraft **"RSVP" luggage tag** that opens the RSVP form.
2. **The Home page**: clean warm off-white background, a big **classic serif** title ("Orion & Josephine"), and soft **watercolour illustrations** of the venues (a stone-stair village street with a church spire, and a house on a clifftop above the gorge).

**Direction:** the clean, off-white and serif look is the base for every page. Watercolour illustrations are the decorative language (hero and per-page vignettes). Bring back the denim and letter collage as a **special moment**: a "Our Story / Save the Date" section on Home (below the hero), with the collage composed from layered images and a clickable kraft RSVP tag that links to `/rsvp`.

**Design tokens** (sampled from the Wix site):

```css
--color-bg:        #FDFBF7;  /* warm off-white page background */
--color-ink:       #2C2C2C;  /* body text and primary button fill */
--color-ink-muted: rgba(44,44,44,.6);  /* field borders, secondary text */
--color-paper:     #E6D5B8;  /* RSVP modal / card background (kraft-cream) */
--color-on-ink:    #FDFBF7;  /* text on dark buttons */
--color-denim:     #6F86A6;  /* [CONFIRM] accent pulled from the denim texture */
--radius-field:    15px;
--radius-pill:     999px;
--radius-card:     16px;
```

**Typography:**
- Display/headings: **Adobe Caslon** (semibold) on the Wix site. Use **"Libre Caslon Display" / "Libre Caslon Text"** from Google Fonts as the free equivalent.
- Secondary serif (used on the Wix site too): **Fraunces**.
- UI/body: **Public Sans**.
- Small labels and eyebrows: Public Sans, uppercase, letter-spacing ~0.2em, ~12px.
- Optional handwritten accent for the letter section only: a script font such as "Homemade Apple" or "Caveat" **[CONFIRM]**.

**Buttons and forms:** the primary button is a full-width dark pill (`--color-ink` fill, off-white text). Inputs are pill/rounded with a thin muted border, labels sit above, and the radio options are styled as circles. Copy the Wix RSVP modal: cream card, rounded corners, close "×" top-right.

## Assets

Download these from the Wix CDN into `src/assets/` (they're ours). Use the base URLs below; they serve the originals:

| File | Source | Use |
|---|---|---|
| `illus-church-street.jpg` (880×490, watercolour stone stairs + church spire, "ardeche-church") | https://static.wixstatic.com/media/a53563_86242bf3bae14fa29deef13904b62358~mv2.jpg | Ceremony illustration; Timings/Travel vignette |
| `illus-recatadou.png` (788×632, watercolour clifftop house over the gorge, "sall-du-recatado") | https://static.wixstatic.com/media/a53563_074bb4b11baa4d2d97ceda8fd4de0618~mv2.png | **Home hero illustration** (reception venue) |
| `save-the-date-collage.jpg` (2022×1944, full denim + letter + postcard + photo-booth collage) | https://static.wixstatic.com/media/a53563_8e742f73294240b9ae3bae14718d513d~mv2.jpeg | Save-the-date section on Home |
| `save-the-date-intro.jpg` (900×900) | https://static.wixstatic.com/media/a53563_616f182ae1c44d95892b9e4c896ea561~mv2.jpeg | Intro/teaser crop of the letter. Use as the social share (OG) image |

The collage is a single flattened image. If we later supply the layers separately (denim, envelope, letter, postcard, photo strip, RSVP tag), restructure the section so the pieces sit in absolutely-positioned layers with a subtle parallax/hover tilt. For now, use the flat image with an **absolutely-positioned invisible link over the RSVP tag** (bottom-right of the letter) plus a visible "RSVP" button under it for accessibility.

For the per-page vignettes we don't have yet, use simple placeholder watercolour-style SVGs (or crops of the two illustrations) and leave a `TODO` noting which illustration each page needs **[CONFIRM: commission/generate matching watercolour vignettes: e.g. a canoe on the river for Things to Do, a vintage car/train for Travel, a wildflower for RSVP, a clock or bell tower for Timings]**.

The handwritten letter text (for alt text and a screen-reader transcript):

> Hello Rafifio, It's been a short, sweet decade since Josephine mistook a guy at her university bar as being French. Then, a mere year after that, she mistook him again for his housemate. Now after graduating, moving countries, moving in together, we're asking you to save this date: July 3rd 2027 in LABEAUME, Ardèche. Because we're getting married! It's beside a beautiful village where Josephine spent her summers growing up. If you can't make it, hakuna matata, just let us know. Full details to follow. Merci! Josephine and Orion

Use this as the collage's long alt/transcript and as the source for the "Our Story" copy. The salutation varies per guest, so drop "Hello Rafifio" from the public version.

## Content

**Known facts (from the current site):**
- Couple: Orion & Josephine
- Date: Saturday 3rd July 2027
- Ceremony: **Église Notre-Dame des Pommiers, Largentière** (Ardèche). Map: https://maps.app.goo.gl/7r2QKQpbyEQeE7LU9
- Reception: **Salle du Recatadou, Labeaume**
- The current home page mentions "To Josephine's Grandparents". **[CONFIRM: is this a dedication, or a third location/event?]**

**Home:** hero (illustration, names, `SATURDAY 3RD JULY 2027`, `LABEAUME · ARDÈCHE`), then a countdown (days to go), then the Save-the-Date / Our Story collage section, then two venue cards (Ceremony and Reception, each with its watercolour, name, town and a "Directions" link), then a final RSVP call-to-action with the RSVP-by date **[CONFIRM: RSVP deadline]**.

**RSVP:** keep the fields from the Wix form: **Name, Email, Address, Attending ("I'll be there!" / "Sadly can't attend")**. Add: number of guests / plus-one name, dietary requirements, a song request, and a message to the couple. Show conditional fields only when attending. Show a warm thank-you state on success. (The reference site sends each guest a personal link by email instead. Note that as a possible phase-2 upgrade, but build the simple open form now.)

**Timings [CONFIRM all times]:** placeholder timeline, for example: 14:00 Ceremony at Église Notre-Dame des Pommiers, Largentière → 15:30 travel to Labeaume → 16:30 drinks and canapés at Salle du Recatadou → 19:00 dinner → 21:30 dancing → 01:00 carriages. Include a note about transport between ceremony and reception **[CONFIRM: shuttle provided?]**.

**Travel & Accommodation** (draft content, mark as to-verify):
- *Getting to the Ardèche.* By plane: Lyon (LYS), Marseille (MRS), Montpellier (MPL) or Nîmes (FNI). Each is roughly 2 to 3 hrs' drive. By train: TGV to Montélimar, Valence TGV or Avignon TGV, then a hire car. By car: note that a car is strongly recommended because public transport in the area is limited.
- *Where to stay.* Recommend staying in or near Labeaume, Ruoms, Vallon-Pont-d'Arc or Largentière. Hotels grouped by € / €€ / €€€ as placeholders **[CONFIRM: actual recommended hotels/gîtes, any room blocks or discount codes]**, plus a closing note that gîtes, Airbnbs and campsites nearby are all good options.

**Things to Do in the Ardèche** (draft): Labeaume village and its riverside beach; Pont d'Arc and the Gorges de l'Ardèche scenic road; canoeing/kayaking the gorges; Grotte Chauvet 2; Balazuc (one of "Les Plus Beaux Villages de France"); Vallon-Pont-d'Arc market; Josephine's personal favourites **[CONFIRM: add your own picks with a line on why you love each]**.

**FAQs** (draft Q&As with placeholder answers **[CONFIRM]**): Dress code? Can I bring a plus-one? Are children welcome? Will there be transport between the ceremony and reception? What will the weather be like? (Early July in the Ardèche is hot, so bring sunglasses and sunscreen.) Is there parking? Do you have a gift list? Who do I contact with questions?

## Voice

Warm, playful, a bit cheeky, like the handwritten letter ("hakuna matata", "Merci!"). Short sentences. Use British English spelling. Sprinkle in occasional French.

## Deliverables and done criteria

1. Running Astro project with all six pages in EN (and FR scaffolding), shared layout, overlay menu, language switcher and monogram.
2. Assets downloaded and optimised. The hero, collage section and venue cards use the real images.
3. A working RSVP form wired to the chosen form provider, with validation and success/error states.
4. All `[CONFIRM]` placeholders collected in one `CONTENT_TODO.md` so we can fill them in.
5. Checked at 375px, 768px and 1280px widths. No horizontal scroll. Keyboard-navigable menu and form.
6. `README.md` with run, edit-content and deploy steps.
