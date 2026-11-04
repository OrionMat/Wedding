// All the words on the site live here. Edit freely: the pages read from this file.
// Anything marked [CONFIRM] is a placeholder; see CONTENT_TODO.md.
// French copy is a first draft [CONFIRM: have Josephine / family check it].

import type { Lang } from './i18n';

export type Entry = { meta?: string; title: string; note?: string; link?: string };
export type Group = { label: string; entries: Entry[] };

const en = {
  names: 'Orion and Josephine',
  meta: {
    description: 'Orion and Josephine are getting married on Saturday 3rd July 2027 in Labeaume, Ardèche.',
  },
  nav: {
    menu: 'Menu',
    close: 'Close',
    pages: {
      '': 'Home',
      information: 'Information',
      rsvp: 'RSVP',
      timings: 'Timings',
      travel: 'Travel & Accommodation',
      'things-to-do': 'Things to Do in the Ardèche',
    },
  },
  home: {
    collageAlt:
      'Our save-the-date: a handwritten letter on denim, with a "Greetings from London" postcard, a kraft envelope and a photo-booth strip of the two of us. The letter reads: Hello Rafifio, It’s been a short, sweet decade since Josephine mistook a guy at her university bar as being French. Then, a mere year after that, she mistook him again for his housemate. Now after graduating, moving countries, moving in together, we’re asking you to save this date: July 3rd 2027 in Labeaume, Ardèche. Because we’re getting married! It’s beside a beautiful village where Josephine spent her summers growing up. If you can’t make it, hakuna matata, just let us know. Full details to follow. Merci! Josephine and Orion.',
    rsvp: 'RSVP',
  },
  info: {
    title: 'Information',
    date: 'Saturday 3rd July 2027',
    place: 'Labeaume · Ardèche',
    venuesEyebrow: 'The day',
    venuesTitle: 'Where we’ll be',
    ceremony: { label: 'Ceremony', name: 'Église Notre-Dame des Pommiers', town: 'Largentière' },
    reception: { label: 'Reception', name: 'Salle du Recatadou', town: 'Labeaume' },
    directions: 'Directions',
  },
  rsvp: {
    title: 'RSVP',
    intro: 'We’d love to know if you can make it. It only takes a minute.',
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
    dietary: 'Dietary requirements',
    dietaryPh: 'Vegetarian, allergies, anything we should know',
    song: 'A song that’ll get you dancing',
    message: 'A message for us',
    submit: 'Send RSVP',
    sending: 'Sending…',
    thanksYes: 'Merci! We can’t wait to celebrate with you.',
    thanksNo: 'Thank you for letting us know. You’ll be missed!',
    error: 'Something went wrong. Please try again, or just email us.',
  },
  timings: {
    title: 'Timings',
    items: [
      { time: '14:00', title: 'Ceremony', place: 'Église Notre-Dame des Pommiers, Largentière' },
      { time: '15:00', title: 'Head to Labeaume', place: 'About 25 minutes by car' },
      { time: '16:00', title: 'Drinks & canapés', place: 'Salle du Recatadou' },
      { time: '19:00', title: 'Dinner', place: 'Salle du Recatadou' },
      { time: '21:30', title: 'Dancing', place: 'Salle du Recatadou' },
      { time: '01:00', title: 'Carriages', place: 'Back to bed' },
    ],
    transportNote:
      'Getting between the church and the reception: details coming soon.', // [CONFIRM] shuttle?
  },
  travel: {
    title: 'Travel & Accommodation',
    gettingEyebrow: 'Getting to the Ardèche',
    gettingTitle: 'Arriving in Labeaume',
    gettingIntro:
      'Labeaume is a small village in the south of the Ardèche. Public transport around here is limited, so we strongly recommend hiring a car.',
    getting: [
      {
        label: 'By plane',
        entries: [
          { meta: '~2 hr drive', title: 'Montpellier (MPL)', note: 'Hire a car at the airport' },
          { meta: '~2 hr drive', title: 'Nîmes (FNI)', note: 'Smaller airport, mostly Ryanair' },
          { meta: '~2.5 hr drive', title: 'Lyon (LYS)', note: 'Hire a car at the airport' },
          { meta: '~2.5 hr drive', title: 'Marseille (MRS)', note: 'Hire a car at the airport' },
        ],
      },
      {
        label: 'By train',
        entries: [
          { meta: '~1 hr drive', title: 'Montélimar', note: 'TGV from Paris, then hire a car' },
          { meta: '~1.5 hr drive', title: 'Avignon TGV', note: 'Direct TGV from Paris and Eurostar connections' },
          { meta: '~1.5 hr drive', title: 'Valence TGV', note: 'TGV from Paris or Lyon, then hire a car' },
        ],
      },
    ] as Group[],
    stayEyebrow: 'Staying in the Ardèche',
    stayTitle: 'Where to Stay',
    stayIntro:
      'We recommend staying in or near Labeaume, Ruoms, Vallon-Pont-d’Arc or Largentière. You’ll be close to both the church and the reception, and right by the river.',
    stay: [
      // [CONFIRM] real recommendations, room blocks or discount codes
      { label: '€', entries: [{ title: 'Hotel to be confirmed' }, { title: 'Hotel to be confirmed' }] },
      { label: '€€', entries: [{ title: 'Hotel to be confirmed' }, { title: 'Hotel to be confirmed' }] },
      { label: '€€€', entries: [{ title: 'Hotel to be confirmed' }] },
    ] as Group[],
    stayOutro:
      'These are just a starting point. Gîtes, Airbnbs and campsites nearby are all great choices too. It’s peak season in July, so book early!',
  },
  things: {
    title: 'Things to Do in the Ardèche',
    intro: 'A few of our favourite spots, all within half an hour or so of Labeaume.',
    mapLink: 'Map',
    items: [
      { title: 'Labeaume village', note: 'Stone lanes, a riverside beach and the best spot for a swim.' },
      { title: 'Pont d’Arc', note: 'The huge natural stone arch over the river. Go early to beat the crowds.' },
      { title: 'Canoeing the Gorges de l’Ardèche', note: 'Hire a canoe in Vallon and paddle through the gorges.' },
      { title: 'Grotte Chauvet 2', note: 'A replica of some of the oldest cave paintings in the world.' },
      { title: 'Balazuc', note: 'One of the most beautiful villages in France, perched above the river.' },
      { title: 'Ruoms market', note: 'Local cheese, chestnuts and wine. Perfect for picnic supplies.' },
    ] as Entry[],
  },
  faqs: {
    title: 'FAQs',
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
};

export type Content = typeof en;

const fr: Content = {
  names: 'Orion et Josephine',
  meta: {
    description: 'Orion et Josephine se marient le samedi 3 juillet 2027 à Labeaume, en Ardèche.',
  },
  nav: {
    menu: 'Menu',
    close: 'Fermer',
    pages: {
      '': 'Accueil',
      information: 'Informations',
      rsvp: 'RSVP',
      timings: 'Programme',
      travel: 'Voyage & Hébergement',
      'things-to-do': 'À faire en Ardèche',
    },
  },
  home: {
    collageAlt: en.home.collageAlt,
    rsvp: 'RSVP',
  },
  info: {
    title: 'Informations',
    date: 'Samedi 3 juillet 2027',
    place: 'Labeaume · Ardèche',
    venuesEyebrow: 'Le jour J',
    venuesTitle: 'Où nous trouver',
    ceremony: { label: 'Cérémonie', name: 'Église Notre-Dame des Pommiers', town: 'Largentière' },
    reception: { label: 'Réception', name: 'Salle du Recatadou', town: 'Labeaume' },
    directions: 'Itinéraire',
  },
  rsvp: {
    title: 'RSVP',
    intro: 'Dites-nous si vous pourrez venir, cela ne prend qu’une minute.',
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
    dietary: 'Régime alimentaire',
    dietaryPh: 'Végétarien, allergies, tout ce qu’il faut savoir',
    song: 'Une chanson pour vous faire danser',
    message: 'Un petit mot pour nous',
    submit: 'Envoyer',
    sending: 'Envoi…',
    thanksYes: 'Merci ! Nous avons hâte de faire la fête avec vous.',
    thanksNo: 'Merci de nous avoir prévenus. Vous nous manquerez !',
    error: 'Une erreur est survenue. Réessayez, ou écrivez-nous directement.',
  },
  timings: {
    title: 'Programme',
    items: [
      { time: '14h00', title: 'Cérémonie', place: 'Église Notre-Dame des Pommiers, Largentière' },
      { time: '15h00', title: 'Route vers Labeaume', place: 'Environ 25 minutes en voiture' },
      { time: '16h00', title: 'Vin d’honneur', place: 'Salle du Recatadou' },
      { time: '19h00', title: 'Dîner', place: 'Salle du Recatadou' },
      { time: '21h30', title: 'Soirée dansante', place: 'Salle du Recatadou' },
      { time: '01h00', title: 'Fin de soirée', place: 'Au lit !' },
    ],
    transportNote: 'Pour aller de l’église à la réception : détails à venir.',
  },
  travel: {
    title: 'Voyage & Hébergement',
    gettingEyebrow: 'Venir en Ardèche',
    gettingTitle: 'Arriver à Labeaume',
    gettingIntro:
      'Labeaume est un petit village du sud de l’Ardèche. Les transports en commun sont rares ici : nous vous conseillons vivement de louer une voiture.',
    getting: [
      {
        label: 'En avion',
        entries: [
          { meta: '~2 h de route', title: 'Montpellier (MPL)', note: 'Location de voiture à l’aéroport' },
          { meta: '~2 h de route', title: 'Nîmes (FNI)', note: 'Petit aéroport, surtout Ryanair' },
          { meta: '~2 h 30 de route', title: 'Lyon (LYS)', note: 'Location de voiture à l’aéroport' },
          { meta: '~2 h 30 de route', title: 'Marseille (MRS)', note: 'Location de voiture à l’aéroport' },
        ],
      },
      {
        label: 'En train',
        entries: [
          { meta: '~1 h de route', title: 'Montélimar', note: 'TGV depuis Paris, puis location de voiture' },
          { meta: '~1 h 30 de route', title: 'Avignon TGV', note: 'TGV direct depuis Paris' },
          { meta: '~1 h 30 de route', title: 'Valence TGV', note: 'TGV depuis Paris ou Lyon, puis location de voiture' },
        ],
      },
    ],
    stayEyebrow: 'Séjourner en Ardèche',
    stayTitle: 'Où dormir',
    stayIntro:
      'Nous vous conseillons de loger à Labeaume, Ruoms, Vallon-Pont-d’Arc ou Largentière : tout près de l’église, de la réception et de la rivière.',
    stay: [
      { label: '€', entries: [{ title: 'Hôtel à confirmer' }, { title: 'Hôtel à confirmer' }] },
      { label: '€€', entries: [{ title: 'Hôtel à confirmer' }, { title: 'Hôtel à confirmer' }] },
      { label: '€€€', entries: [{ title: 'Hôtel à confirmer' }] },
    ],
    stayOutro:
      'Ce n’est qu’un point de départ : gîtes, Airbnb et campings des environs sont aussi de très bonnes options. Juillet est en pleine saison, réservez tôt !',
  },
  things: {
    title: 'À faire en Ardèche',
    intro: 'Quelques-uns de nos coins préférés, tous à une demi-heure environ de Labeaume.',
    mapLink: 'Carte',
    items: [
      { title: 'Le village de Labeaume', note: 'Ruelles de pierre, plage au bord de la rivière et baignade idéale.' },
      { title: 'Le Pont d’Arc', note: 'L’immense arche naturelle au-dessus de la rivière. Allez-y tôt.' },
      { title: 'Descendre les Gorges de l’Ardèche', note: 'Louez un canoë à Vallon et pagayez dans les gorges.' },
      { title: 'La Grotte Chauvet 2', note: 'Réplique de certaines des plus anciennes peintures rupestres au monde.' },
      { title: 'Balazuc', note: 'L’un des plus beaux villages de France, perché au-dessus de la rivière.' },
      { title: 'Le marché de Ruoms', note: 'Fromages, châtaignes et vins locaux : parfait pour un pique-nique.' },
    ],
  },
  faqs: {
    title: 'FAQ',
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
};

export const content: Record<Lang, Content> = { en, fr };
export const t = (lang: Lang) => content[lang];
