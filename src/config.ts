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
