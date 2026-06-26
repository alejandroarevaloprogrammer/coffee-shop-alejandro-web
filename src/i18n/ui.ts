export const languages = {
  es: 'Castellano',
  ca: 'Català',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const contact = {
  email: 'contact@cafealejandro.com',
  phoneDisplay: '+34 935 891 179',
  phoneHref: 'tel:+34935891179',
} as const;

export const ui = {
  es: {
    navMenu: 'Carta',
    navStory: 'Historia',
    navHours: 'Horarios',
    navContact: 'Contacto',

    title: 'Café Alejandro',
    description:
      'Café de especialidad, desayunos artesanales y repostería casera en un ambiente cálido y acogedor.',

    eyebrow: 'Café artesanal · desayuno · brunch',
    headline: 'Un café con nombre propio.',
    intro: 'Una web cálida, moderna y cercana para una cafetería con identidad personal.',
    heroImageAlt: 'Café con el nombre Alejandro escrito sobre la espuma',
    quote: 'Cada taza cuenta una historia.',
    primaryCta: 'Ver carta',
    secondaryCta: 'Contacto',

    logoAria: 'Ir al inicio de Café Alejandro',
    backToTopAria: 'Volver arriba',
    languageSelectorAria: 'Selector de idioma',
    languageAria: 'Cambiar idioma a',
    mainNavAria: 'Navegación principal',
    footerNavAria: 'Navegación del pie de página',

    heroBadgeCoffee: 'Café de especialidad',
    heroBadgeBreakfast: 'Desayunos recién hechos',
    heroBadgeLocal: 'Ingredientes locales',

    valueCoffeeTitle: 'Café de especialidad',
    valueCoffeeText:
      'Seleccionamos cafés con carácter para ofrecer una experiencia auténtica en cada taza.',
    valueBreakfastTitle: 'Desayunos artesanales',
    valueBreakfastText:
      'Bollería, tostadas y opciones sencillas preparadas para acompañar tu café.',
    valueLocalTitle: 'Producto local',
    valueLocalText:
      'Apostamos por ingredientes cercanos y de calidad para cuidar cada detalle.',

    storyEyebrow: 'Café Alejandro',
    storyTitle: 'Hecho con calma',
    storyText:
      'Café Alejandro nace de una idea sencilla: buen café, buen pan y un espacio amable para empezar el día.',

    menuEyebrow: 'Nuestra carta',
    menuTitle: 'Nuestra carta',
    menuIntro:
      'Una selección sencilla de cafés, desayunos y dulces pensada para acompañar cualquier momento del día.',
    menuCards: [
      {
        title: 'Cafés',
        items: [
          { name: 'Espresso', description: 'Intenso, corto y aromático.', price: '1,80€' },
          { name: 'Americano', description: 'Suave, largo y equilibrado.', price: '2,20€' },
          { name: 'Cappuccino', description: 'Café, leche cremosa y espuma.', price: '2,90€' },
          { name: 'Latte', description: 'Suave, cremoso y equilibrado.', price: '3,20€' },
          { name: 'Flat white', description: 'Doble espresso con leche sedosa.', price: '3,40€' },
        ],
      },
      {
        title: 'Desayunos',
        items: [
          { name: 'Tostada con tomate', description: 'Pan crujiente, tomate y aceite.', price: '3,50€' },
          { name: 'Tostada de aguacate', description: 'Aguacate, lima y semillas.', price: '6,20€' },
          { name: 'Bocadillo pequeño', description: 'Opción sencilla para media mañana.', price: '4,20€' },
          { name: 'Yogur con fruta', description: 'Ligero, fresco y natural.', price: '4,80€' },
          { name: 'Zumo de naranja', description: 'Exprimido al momento.', price: '3,20€' },
        ],
      },
      {
        title: 'Dulces',
        items: [
          { name: 'Croissant', description: 'Clásico, dorado y mantecoso.', price: '1,90€' },
          { name: 'Pain au chocolat', description: 'Hojaldre con chocolate.', price: '2,60€' },
          { name: 'Tarta casera', description: 'Pregunta por la tarta del día.', price: '4,50€' },
          { name: 'Cookie artesanal', description: 'Crujiente por fuera, tierna por dentro.', price: '2,50€' },
          { name: 'Cinnamon roll', description: 'Canela, glaseado y masa tierna.', price: '3,80€' },
        ],
      },
    ],

    hoursTitle: 'Horarios',
    hoursText: 'Lunes a sábado · 07:00 — 21:00\nDomingo · 07:00 — 15:00',

    contactTitle: 'Contacto',
    contactLocation: 'Barcelona',
    contactEmailAria: 'Enviar un correo a Café Alejandro',
    contactPhoneAria: 'Llamar a Café Alejandro',
  },

  ca: {
    navMenu: 'Carta',
    navStory: 'Història',
    navHours: 'Horaris',
    navContact: 'Contacte',

    title: 'Cafè Alejandro',
    description:
      'Cafè d’especialitat, esmorzars artesanals i rebosteria casolana en un ambient càlid i acollidor.',

    eyebrow: 'Cafè artesanal · esmorzar · brunch',
    headline: 'Un cafè amb nom propi.',
    intro: 'Una web càlida, moderna i propera per a una cafeteria amb identitat personal.',
    heroImageAlt: 'Cafè amb el nom Alejandro escrit sobre l’escuma',
    quote: 'Cada tassa explica una història.',
    primaryCta: 'Veure carta',
    secondaryCta: 'Contacte',

    logoAria: "Anar a l'inici de Cafè Alejandro",
    backToTopAria: 'Tornar a dalt',
    languageSelectorAria: 'Selector d’idioma',
    languageAria: 'Canviar idioma a',
    mainNavAria: 'Navegació principal',
    footerNavAria: 'Navegació del peu de pàgina',

    heroBadgeCoffee: "Cafè d'especialitat",
    heroBadgeBreakfast: 'Esmorzars acabats de fer',
    heroBadgeLocal: 'Ingredients locals',

    valueCoffeeTitle: "Cafè d'especialitat",
    valueCoffeeText:
      'Seleccionem cafès amb caràcter per oferir una experiència autèntica a cada tassa.',
    valueBreakfastTitle: 'Esmorzars artesanals',
    valueBreakfastText:
      'Brioixeria, torrades i opcions senzilles preparades per acompanyar el teu cafè.',
    valueLocalTitle: 'Producte local',
    valueLocalText:
      'Apostem per ingredients propers i de qualitat per cuidar cada detall.',

    storyEyebrow: 'Cafè Alejandro',
    storyTitle: 'Fet amb calma',
    storyText:
      'Cafè Alejandro neix d’una idea senzilla: bon cafè, bon pa i un espai amable per començar el dia.',

    menuEyebrow: 'La nostra carta',
    menuTitle: 'La nostra carta',
    menuIntro:
      'Una selecció senzilla de cafès, esmorzars i dolços pensada per acompanyar qualsevol moment del dia.',
    menuCards: [
      {
        title: 'Cafès',
        items: [
          { name: 'Espresso', description: 'Intens, curt i aromàtic.', price: '1,80€' },
          { name: 'Americà', description: 'Suau, llarg i equilibrat.', price: '2,20€' },
          { name: 'Cappuccino', description: 'Cafè, llet cremosa i escuma.', price: '2,90€' },
          { name: 'Latte', description: 'Suau, cremós i equilibrat.', price: '3,20€' },
          { name: 'Flat white', description: 'Doble espresso amb llet sedosa.', price: '3,40€' },
        ],
      },
      {
        title: 'Esmorzars',
        items: [
          { name: 'Torrada amb tomàquet', description: 'Pa cruixent, tomàquet i oli.', price: '3,50€' },
          { name: "Torrada d'alvocat", description: 'Alvocat, llima i llavors.', price: '6,20€' },
          { name: 'Entrepà petit', description: 'Opció senzilla per a mig matí.', price: '4,20€' },
          { name: 'Iogurt amb fruita', description: 'Lleuger, fresc i natural.', price: '4,80€' },
          { name: 'Suc de taronja', description: 'Espremut al moment.', price: '3,20€' },
        ],
      },
      {
        title: 'Dolços',
        items: [
          { name: 'Croissant', description: 'Clàssic, daurat i mantegós.', price: '1,90€' },
          { name: 'Pain au chocolat', description: 'Pasta de full amb xocolata.', price: '2,60€' },
          { name: 'Pastís casolà', description: 'Pregunta pel pastís del dia.', price: '4,50€' },
          { name: 'Cookie artesanal', description: 'Cruixent per fora, tendra per dins.', price: '2,50€' },
          { name: 'Cinnamon roll', description: 'Canyella, glaça i massa tendra.', price: '3,80€' },
        ],
      },
    ],

    hoursTitle: 'Horaris',
    hoursText: 'Dilluns a dissabte · 07:00 — 21:00\nDiumenge · 07:00 — 15:00',

    contactTitle: 'Contacte',
    contactLocation: 'Barcelona',
    contactEmailAria: 'Enviar un correu a Cafè Alejandro',
    contactPhoneAria: 'Trucar a Cafè Alejandro',
  },

  en: {
    navMenu: 'Menu',
    navStory: 'Story',
    navHours: 'Hours',
    navContact: 'Contact',

    title: 'Café Alejandro',
    description:
      'Specialty coffee, artisan breakfasts and homemade pastries in a warm and welcoming atmosphere.',

    eyebrow: 'Craft coffee · breakfast · brunch',
    headline: 'Coffee with a personal touch.',
    intro: 'A warm, modern and friendly website for a coffee shop with a personal identity.',
    heroImageAlt: 'Coffee with the name Alejandro written on the foam',
    quote: 'Every cup tells a story.',
    primaryCta: 'View menu',
    secondaryCta: 'Contact',

    logoAria: 'Go to Café Alejandro home',
    backToTopAria: 'Back to top',
    languageSelectorAria: 'Language selector',
    languageAria: 'Change language to',
    mainNavAria: 'Main navigation',
    footerNavAria: 'Footer navigation',

    heroBadgeCoffee: 'Specialty Coffee',
    heroBadgeBreakfast: 'Fresh Breakfast',
    heroBadgeLocal: 'Local Ingredients',

    valueCoffeeTitle: 'Specialty Coffee',
    valueCoffeeText:
      'We select characterful coffees to offer an authentic experience in every cup.',
    valueBreakfastTitle: 'Artisan Breakfasts',
    valueBreakfastText:
      'Pastries, toast and simple options prepared to pair beautifully with your coffee.',
    valueLocalTitle: 'Local Ingredients',
    valueLocalText: 'We choose nearby, quality ingredients to take care of every detail.',

    storyEyebrow: 'Café Alejandro',
    storyTitle: 'Made slowly',
    storyText:
      'Café Alejandro starts from a simple idea: good coffee, good bread and a welcoming place to begin the day.',

    menuEyebrow: 'Our menu',
    menuTitle: 'Our menu',
    menuIntro:
      'A simple selection of coffee, breakfasts and sweets designed for any moment of the day.',
    menuCards: [
      {
        title: 'Coffee',
        items: [
          { name: 'Espresso', description: 'Intense, short and aromatic.', price: '1,80€' },
          { name: 'Americano', description: 'Smooth, long and balanced.', price: '2,20€' },
          { name: 'Cappuccino', description: 'Coffee, creamy milk and foam.', price: '2,90€' },
          { name: 'Latte', description: 'Soft, creamy and balanced.', price: '3,20€' },
          { name: 'Flat white', description: 'Double espresso with silky milk.', price: '3,40€' },
        ],
      },
      {
        title: 'Breakfast',
        items: [
          { name: 'Tomato toast', description: 'Crunchy bread, tomato and olive oil.', price: '3,50€' },
          { name: 'Avocado toast', description: 'Avocado, lime and seeds.', price: '6,20€' },
          { name: 'Small sandwich', description: 'A simple mid-morning option.', price: '4,20€' },
          { name: 'Yogurt with fruit', description: 'Light, fresh and natural.', price: '4,80€' },
          { name: 'Orange juice', description: 'Freshly squeezed.', price: '3,20€' },
        ],
      },
      {
        title: 'Sweets',
        items: [
          { name: 'Croissant', description: 'Classic, golden and buttery.', price: '1,90€' },
          { name: 'Pain au chocolat', description: 'Flaky pastry with chocolate.', price: '2,60€' },
          { name: 'Homemade cake', description: 'Ask for the cake of the day.', price: '4,50€' },
          { name: 'Artisan cookie', description: 'Crisp outside, soft inside.', price: '2,50€' },
          { name: 'Cinnamon roll', description: 'Cinnamon, glaze and soft dough.', price: '3,80€' },
        ],
      },
    ],

    hoursTitle: 'Opening hours',
    hoursText: 'Monday to Saturday · 07:00 — 21:00\nSunday · 07:00 — 15:00',

    contactTitle: 'Contact',
    contactLocation: 'Barcelona, Spain',
    contactEmailAria: 'Send an email to Café Alejandro',
    contactPhoneAria: 'Call Café Alejandro',
  },
} as const;
