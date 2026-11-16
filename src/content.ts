// All the words on the site live here. Edit freely: the pages read from this file.
// Anything marked [CONFIRM] is a placeholder; see CONTENT_TODO.md.
// French copy is a first draft [CONFIRM: have Josephine / family check it].

import type { Lang } from './i18n';
import { MAPS } from './config';

export type Entry = { meta?: string; title: string; note?: string; link?: string };
export type Group = { label: string; entries: Entry[] };
/** a line of HTML text, optionally followed by an indented list (bulleted, or numbered) */
export type Block = { text: string; list?: string[]; numbered?: boolean };

// links used in the travel bullets
const a = (label: string, url: string) => `<a href="${url}" target="_blank" rel="noopener">${label}</a>`;
const BOOKING = 'https://www.booking.com';
const AIRBNB = 'https://www.airbnb.com';
const CAR_HIRE = [
  a('Europcar', 'https://www.europcar.com'),
  a('Hertz', 'https://www.hertz.com'),
  a('Turo', 'https://turo.com'),
  a('Getaround', 'https://getaround.com'),
].join(', ');
export type StageArt = 'church' | 'car' | 'reception' | 'dinner' | 'dance' | 'stars';
export type Stage = {
  time: string;
  until?: string;
  /** the time may still move: shows a small note under it */
  provisional?: boolean;
  title: string;
  place?: string;
  map?: 'ceremony' | 'reception';
  note?: string;
  art: StageArt;
};

const en = {
  names: 'Orion & Josephine',
  meta: {
    description: 'Orion & Josephine are getting married on Saturday 3rd July 2027 in Labeaume, Ardèche.',
  },
  nav: {
    menu: 'Menu',
    close: 'Close',
    pages: {
      '': 'Home',
      details: 'Details',
      registry: 'Registry',
    },
  },
  home: {
    collageAlt:
      'Our save-the-date on denim: a letter with a "Greetings from London" postcard, a kraft envelope and a photo-booth strip of the two of us.',
    rsvp: 'RSVP',
    // short labels for the paper-card buttons on the letter
    cards: { details: 'Details', registry: 'Registry' },
    // the two family lines are staggered; `name` is set large, `before`/`after` small
    families: [
      { before: 'The', name: 'Latreille', after: 'and' },
      { before: '', name: 'Mathews', after: 'families' },
    ],
    invite: 'invite you to celebrate the marriage of',
  },
  info: {
    title: 'Details',
    church: 'Église Notre-Dame des Pommiers, Largentière',
    date: 'Saturday 3rd July 2027',
    notes: {
      grandparents: ['To Josephine’s', 'Grandparents'],
    },
    venuesTitle: 'Where we’ll be',
    ceremony: { label: 'Ceremony', name: 'Église Notre-Dame des Pommiers', town: 'Largentière' },
    reception: { label: 'Reception', name: 'Salle du Récatadou', town: 'Labeaume' },
    directions: 'Directions',
  },
  rsvp: {
    title: 'RSVP',
    name: 'Name',
    namePh: 'e.g. Maximus Decimus',
    email: 'Email',
    emailPh: 'maximus@decimus.com',
    address: 'Address',
    addressHint: 'So we can post you the proper invitation.',
    attending: 'Can you make it?',
    yes: 'I’ll be there!',
    no: 'Sadly can’t attend',
    guests: 'Number of guests (including you)',
    plusOne: 'Guest name(s)',
    submit: 'Send RSVP',
    sending: 'Sending…',
    thanksYes: 'Merci! We can’t wait to celebrate with you.',
    thanksNo: 'Thank you for letting us know. You’ll be missed!',
    error: 'Something went wrong. Please try again, or just message us.',
  },
  timings: {
    title: 'Schedule',
    // One stage per slide in the schedule carousel. `art` picks the illustration;
    // `map` ('ceremony' | 'reception') adds a Directions link. [CONFIRM] all times and notes
    items: [
      { time: '4 p.m.', provisional: true, title: 'We get married', place: 'Église Notre-Dame des Pommiers', map: 'ceremony', note: 'Please arrive at ten to four.', art: 'church' },
      { time: '5 p.m.', title: 'On the road', map: 'reception', note: 'About 25 minutes by car to Labeaume.', art: 'car' },
      { time: '6 p.m.', title: 'Dawa’s and chill', place: 'Salle du Récatadou', note: 'Drinks and canapés in the evening sunshine.', art: 'reception' },
      { time: '8 p.m.', title: 'Dinner', note: 'Fun tables, good food and a few short speeches.', art: 'dinner' },
      { time: '10 p.m.', title: 'Hit the dance floor', place: 'Salle du Récatadou', note: 'Get out the dancing shoes.', art: 'dance' },
      { time: '6 a.m.', title: 'And then… till sunset', note: 'We can’t wait to celebrate all night with you.', art: 'stars' },
    ] as Stage[],
    until: 'until',
    provisional: 'May change closer to the day.',
    map: 'Map',
    prev: 'Previous',
    next: 'Next',
    of: 'of',
  },
  travel: {
    title: 'Travel & Accommodation',
    // Plain text, each line optionally followed by an indented list (bulleted, or
    // numbered with `numbered: true`). Text can hold links, written with a() above.
    blocks: [
      {
        text: 'Our wedding is in Ardèche!',
        list: [
          `The ceremony will be in Largentière (${a('map', MAPS.ceremony)}).`,
          `The reception will be in Labeaume (${a('map', MAPS.reception)}).`,
        ],
      },
      { text: 'These are rural French villages, so we strongly recommend hiring a car, or finding a seat in someone else’s car.' },
      {
        text: `For accommodation ${a('booking.com', BOOKING)}, ${a('airbnb.com', AIRBNB)} are your friends. Look for places in these areas:`,
        list: [
          'Labeaume - this is the ideal area. The closer you can get to here the better, since it’ll mean a shorter trip back from the reception!',
          'Ruoms',
          'Largentière',
          'Hotels, Gîtes, Airbnbs and campsites nearby are all great choices. It’s peak season in July, so book early.',
        ],
      },
      {
        text: 'Travel options',
        numbered: true,
        list: [
          'Fly to Lyon and hire a car (most convenient for internationals). Then ~2 hours 30 minutes drive to Largentière or Labeaume.',
          `Fly or Eurostar to Paris, then TGV train to Montélimar. Collect a hire car in Montélimar and drive ~1 hour to Largentière or Labeaume. Car hire options: ${CAR_HIRE}. You may have to request a Sunday drop-off.`,
        ],
      },
    ] as Block[],
  },
  faqs: {
    title: 'Q&A',
    intro: 'Answers to the things you might be wondering. If something’s missing, just ask.',
    items: [
      // [CONFIRM] all answers
      { q: 'What should I wear?', a: 'Details to follow. Think summer wedding in the south of France: light fabrics and shoes you can dance in.' },
      { q: 'Can I bring a plus-one?', a: 'Your invitation will say who’s invited. If you’re unsure, just ask us.' },
      { q: 'Are children welcome?', a: 'Details to follow.' },
      { q: 'Will there be transport between the ceremony and reception?', a: 'Details to follow.' },
      { q: 'What will the weather be like?', a: 'Early July in the Ardèche is usually hot and sunny, often above 30°C. Bring sunglasses and sunscreen!' },
      { q: 'Is there parking?', a: 'Yes, there will be parking near both the church and the reception.' },
      { q: 'Do you have a gift list?', a: 'Having you there is the best gift. Details to follow.' },
      { q: 'Who do I contact with questions?', a: 'Just message either of us and we’ll get back to you.' },
    ],
  },
  registry: {
    title: 'Registry',
    text: 'We’re still putting this together. Check back closer to the day!',
  },
};

export type Content = typeof en;

const fr: Content = {
  names: 'Orion & Josephine',
  meta: {
    description: 'Orion & Josephine se marient le samedi 3 juillet 2027 à Labeaume, en Ardèche.',
  },
  nav: {
    menu: 'Menu',
    close: 'Fermer',
    pages: {
      '': 'Accueil',
      details: 'Détails',
      registry: 'Liste de mariage',
    },
  },
  home: {
    collageAlt: en.home.collageAlt,
    rsvp: 'RSVP',
    cards: { details: 'Détails', registry: 'Cadeaux' },
    families: [
      { before: 'Les familles', name: 'Latreille', after: 'et' },
      { before: '', name: 'Mathews', after: '' },
    ],
    invite: 'vous invitent à célébrer le mariage de',
  },
  info: {
    title: 'Détails',
    church: 'Église Notre-Dame des Pommiers, Largentière',
    date: 'Samedi 3 juillet 2027',
    notes: {
      grandparents: ['Chez les grands-parents', 'de Josephine'],
    },
    venuesTitle: 'Où nous trouver',
    ceremony: { label: 'Cérémonie', name: 'Église Notre-Dame des Pommiers', town: 'Largentière' },
    reception: { label: 'Réception', name: 'Salle du Récatadou', town: 'Labeaume' },
    directions: 'Itinéraire',
  },
  rsvp: {
    title: 'RSVP',
    name: 'Nom',
    namePh: 'ex. Maximus Decimus',
    email: 'E-mail',
    emailPh: 'maximus@decimus.com',
    address: 'Adresse',
    addressHint: 'Pour vous envoyer le vrai faire-part.',
    attending: 'Serez-vous là ?',
    yes: 'Je serai là !',
    no: 'Hélas, je ne pourrai pas venir',
    guests: 'Nombre de personnes (vous compris)',
    plusOne: 'Nom(s) des invités',
    submit: 'Envoyer',
    sending: 'Envoi…',
    thanksYes: 'Merci ! Nous avons hâte de faire la fête avec vous.',
    thanksNo: 'Merci de nous avoir prévenus. Vous nous manquerez !',
    error: 'Une erreur est survenue. Réessayez, ou écrivez-nous directement.',
  },
  timings: {
    title: 'Programme',
    items: [
      { time: '16h', provisional: true, title: 'Nous nous marions', place: 'Église Notre-Dame des Pommiers', map: 'ceremony', note: 'Merci d’arriver à 15h50.', art: 'church' },
      { time: '17h', title: 'En route', map: 'reception', note: 'Environ 25 minutes en voiture jusqu’à Labeaume.', art: 'car' },
      { time: '18h', title: 'Dawa et détente', place: 'Salle du Récatadou', note: 'Boissons et canapés au soleil du soir.', art: 'reception' },
      { time: '20h', title: 'Dîner', note: 'Des tables joyeuses, un bon repas et quelques courts discours.', art: 'dinner' },
      { time: '22h', title: 'Tous sur la piste', place: 'Salle du Récatadou', note: 'Sortez vos chaussures de danse.', art: 'dance' },
      { time: '6h', title: 'Et puis… jusqu’au coucher du soleil', note: 'Nous avons hâte de faire la fête toute la nuit avec vous.', art: 'stars' },
    ],
    until: 'jusqu’à',
    provisional: 'Susceptible de changer à l’approche du jour J.',
    map: 'Carte',
    prev: 'Précédent',
    next: 'Suivant',
    of: 'sur',
  },
  travel: {
    title: 'Voyage & Hébergement',
    blocks: [
      {
        text: 'Notre mariage a lieu en Ardèche !',
        list: [
          `La cérémonie aura lieu à Largentière (${a('carte', MAPS.ceremony)}).`,
          `La réception aura lieu à Labeaume (${a('carte', MAPS.reception)}).`,
        ],
      },
      { text: 'Ce sont des villages ruraux : nous vous conseillons vivement de louer une voiture, ou de trouver une place dans celle de quelqu’un d’autre.' },
      {
        text: `Pour l’hébergement, ${a('booking.com', BOOKING)} et ${a('airbnb.com', AIRBNB)} sont vos amis. Cherchez dans ces coins :`,
        list: [
          'Labeaume - c’est le coin idéal. Plus vous serez près, mieux ce sera : le retour après la réception n’en sera que plus court !',
          'Ruoms',
          'Largentière',
          'Hôtels, gîtes, Airbnb et campings des environs sont tous de très bons choix. Juillet est en pleine saison : réservez tôt.',
        ],
      },
      {
        text: 'Comment venir',
        numbered: true,
        list: [
          'En avion jusqu’à Lyon, puis location de voiture (le plus pratique depuis l’étranger). Puis environ 2 h 30 de route jusqu’à Largentière ou Labeaume.',
          `En avion ou en Eurostar jusqu’à Paris, puis TGV jusqu’à Montélimar. Récupérez une voiture de location à Montélimar, puis environ 1 h de route jusqu’à Largentière ou Labeaume. Location de voiture : ${CAR_HIRE}. Il faudra peut-être demander un retour le dimanche.`,
        ],
      },
    ],
  },
  faqs: {
    title: 'Questions & réponses',
    intro: 'Les réponses à vos questions. S’il manque quelque chose, demandez-nous.',
    items: [
      { q: 'Quelle tenue porter ?', a: 'Détails à venir. Pensez mariage d’été dans le sud : tissus légers et chaussures pour danser.' },
      { q: 'Puis-je venir accompagné(e) ?', a: 'Votre faire-part indiquera qui est invité. En cas de doute, demandez-nous.' },
      { q: 'Les enfants sont-ils les bienvenus ?', a: 'Détails à venir.' },
      { q: 'Y aura-t-il un transport entre la cérémonie et la réception ?', a: 'Détails à venir.' },
      { q: 'Quel temps fera-t-il ?', a: 'Début juillet, il fait généralement chaud et beau en Ardèche, souvent plus de 30 °C. Lunettes de soleil et crème solaire !' },
      { q: 'Y a-t-il un parking ?', a: 'Oui, il y aura un parking près de l’église et de la réception.' },
      { q: 'Avez-vous une liste de mariage ?', a: 'Votre présence est le plus beau des cadeaux. Détails à venir.' },
      { q: 'Qui contacter en cas de question ?', a: 'Écrivez à l’un de nous deux, nous vous répondrons.' },
    ],
  },
  registry: {
    title: 'Liste de mariage',
    text: 'Nous y travaillons encore. Revenez un peu plus près du jour J !',
  },
};

export const content: Record<Lang, Content> = { en, fr };
export const t = (lang: Lang) => content[lang];
