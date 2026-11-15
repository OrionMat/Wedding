// Site-wide settings. Change these in one place.

/**
 * Where RSVP submissions go.
 * - 'netlify':   Netlify Forms (works automatically when deployed on Netlify)
 * - 'formspree': posts to FORMSPREE_ENDPOINT (use this on Vercel or elsewhere)
 */
export const RSVP_PROVIDER: 'netlify' | 'formspree' = 'netlify';
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-form-id'; // [CONFIRM] if using Formspree

export const MAPS = {
  ceremony: 'https://maps.app.goo.gl/7r2QKQpbyEQeE7LU9',
  reception: 'https://www.google.com/maps/search/?api=1&query=Salle+du+Recatadou+Labeaume',
};

/**
 * Details-page sections that are built but not live yet. A section that's off is left
 * out of the built site entirely (no HTML, images or script), not just hidden.
 * Every section is always on in `npm run dev`, so you can keep working on them. In
 * `npm run build` they're off unless built with PUBLIC_SHOW_ALL=true, or one at a time
 * with PUBLIC_SHOW_SCHEDULE / PUBLIC_SHOW_VENUES / PUBLIC_SHOW_QA=true.
 * To make one live, set it to `true`.
 */
const showAll = import.meta.env.DEV || import.meta.env.PUBLIC_SHOW_ALL === 'true';
export const FEATURES = {
  schedule: showAll || import.meta.env.PUBLIC_SHOW_SCHEDULE === 'true',
  venues: showAll || import.meta.env.PUBLIC_SHOW_VENUES === 'true',
  qa: showAll || import.meta.env.PUBLIC_SHOW_QA === 'true',
};
