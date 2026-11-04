// Site-wide settings. Change these in one place.

export const WEDDING_DATE = '2027-07-03T14:00:00+02:00'; // [CONFIRM] ceremony start time

/**
 * Where RSVP submissions go.
 * - 'netlify':   Netlify Forms (works automatically when deployed on Netlify)
 * - 'formspree': posts to FORMSPREE_ENDPOINT (use this on Vercel or elsewhere)
 */
export const RSVP_PROVIDER: 'netlify' | 'formspree' = 'netlify';
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-form-id'; // [CONFIRM] if using Formspree

export const CONTACT_EMAIL = 'hello@orion-josephine.com'; // [CONFIRM] which address guests should use

export const MAPS = {
  ceremony: 'https://maps.app.goo.gl/7r2QKQpbyEQeE7LU9',
  reception: 'https://www.google.com/maps/search/?api=1&query=Salle+du+Recatadou+Labeaume',
};
