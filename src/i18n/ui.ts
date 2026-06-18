export const languages = {
  es: 'Castellano',
  ca: 'Català',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    navMenu: 'Carta', navStory: 'Historia', navHours: 'Horarios', navContact: 'Contacto',
    title: 'Café Alejandro', eyebrow: 'Café artesanal · desayuno · brunch',
    headline: 'Un café con nombre propio.',
    intro: 'Una web cálida, moderna y cercana para una cafetería con identidad personal.',
    primaryCta: 'Ver carta', secondaryCta: 'Contacto',
    storyTitle: 'Hecho con calma',
    storyText: 'Café Alejandro nace de una idea sencilla: buen café, buen pan y un espacio amable para empezar el día.',
    menuTitle: 'Nuestra carta', coffee: 'Cafés', breakfast: 'Desayunos', sweets: 'Dulces',
    hoursTitle: 'Horarios', hoursText: 'Lunes a sábado · 8:00 — 18:00',
    contactTitle: 'Contacto', contactText: 'Barcelona · info@cafealejandro.local'
  },
  ca: {
    navMenu: 'Carta', navStory: 'Història', navHours: 'Horaris', navContact: 'Contacte',
    title: 'Cafè Alejandro', eyebrow: 'Cafè artesanal · esmorzar · brunch',
    headline: 'Un cafè amb nom propi.',
    intro: 'Una web càlida, moderna i propera per a una cafeteria amb identitat personal.',
    primaryCta: 'Veure carta', secondaryCta: 'Contacte',
    storyTitle: 'Fet amb calma',
    storyText: 'Cafè Alejandro neix d’una idea senzilla: bon cafè, bon pa i un espai amable per començar el dia.',
    menuTitle: 'La nostra carta', coffee: 'Cafès', breakfast: 'Esmorzars', sweets: 'Dolços',
    hoursTitle: 'Horaris', hoursText: 'Dilluns a dissabte · 8:00 — 18:00',
    contactTitle: 'Contacte', contactText: 'Barcelona · info@cafealejandro.local'
  },
  en: {
    navMenu: 'Menu', navStory: 'Story', navHours: 'Hours', navContact: 'Contact',
    title: 'Café Alejandro', eyebrow: 'Craft coffee · breakfast · brunch',
    headline: 'Coffee with a personal touch.',
    intro: 'A warm, modern and friendly website for a coffee shop with a personal identity.',
    primaryCta: 'View menu', secondaryCta: 'Contact',
    storyTitle: 'Made slowly',
    storyText: 'Café Alejandro starts from a simple idea: good coffee, good bread and a welcoming place to begin the day.',
    menuTitle: 'Our menu', coffee: 'Coffee', breakfast: 'Breakfast', sweets: 'Sweets',
    hoursTitle: 'Opening hours', hoursText: 'Monday to Saturday · 8:00 — 18:00',
    contactTitle: 'Contact', contactText: 'Barcelona · info@cafealejandro.local'
  }
} as const;
