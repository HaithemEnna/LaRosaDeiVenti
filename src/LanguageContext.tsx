/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { PageType, MenuItemType } from './types';

export type LanguageType = 'it' | 'en';

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: (key: string) => string;
  menuItems: MenuItemType[];
  historyBlocks: { year: string; title: string; text: string }[];
  testimonials: { author: string; source: string; rating: number; text: string }[];
  restaurantInfo: typeof RESTAURANT_INFO_IT;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// ITALIAN DATA DEFINITIONS
const RESTAURANT_INFO_IT = {
  name: 'La Rosa dei Venti',
  tagline: 'Cucina di Mare a Milano dal 1993',
  address: 'Via Piero della Francesca, 34, 20154 Milano MI',
  phone: '+39 02 345 37576',
  email: 'info@larosadeiventimilano.it',
  openingHours: {
    weekdays: '12:00 – 14:30 | 19:00 – 23:30',
    closed: 'Chiuso tutto il giorno',
  },
  socials: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    tiktok: 'https://tiktok.com',
    tripadvisor: 'https://www.tripadvisor.it/Restaurant_Review-g187849-d1215297-Reviews-La_Rosa_de_Venti-Milan_Lombardy.html',
  }
};

const MENU_ITEMS_IT: MenuItemType[] = [
  {
    id: 'ant-1',
    name: 'Carpaccio di polpo con emulsione di limone e senape dolce',
    description: "",
    price: 18.00,
    category: 'antipasti',
    tags: []
  },
  {
    id: 'ant-2',
    name: 'Code di gamberi, salsa cocktail, melone e arance',
    description: "",
    price: 18.00,
    category: 'antipasti',
    tags: []
  },
  {
    id: 'ant-3',
    name: 'Capesante gratinate al verde (3pz.)',
    description: "",
    price: 18.00,
    category: 'antipasti',
    tags: []
  },
  {
    id: 'ant-4',
    name: 'Insalata di seppie alla catalana',
    description: "",
    price: 16.00,
    category: 'antipasti',
    tags: []
  },
  {
    id: 'ant-5',
    name: 'Lecca lecca di gamberi con guanciale di norcia (3pz.)',
    description: "",
    price: 18.00,
    category: 'antipasti',
    tags: []
  },
  {
    id: 'ant-6',
    name: 'Moscardini con pesto e patate',
    description: "",
    price: 16.00,
    category: 'antipasti',
    tags: []
  },
  {
    id: 'ant-7',
    name: 'Ostrica Sarda e gin o/Gambero rosso Sicilia, olio agrumi',
    description: "",
    price: 6.00,
    category: 'antipasti',
    tags: []
  },
  {
    id: 'pr-1',
    name: 'Chitarra alla carbonara di mare (25anni)',
    description: "",
    price: 19.00,
    category: 'primi',
    tags: []
  },
  {
    id: 'pr-2',
    name: 'Spaghetti alle vongole veraci, zucchine e limone',
    description: "",
    price: 18.00,
    category: 'primi',
    tags: []
  },
  {
    id: 'pr-3',
    name: 'Risotto, radicchio, gambero rosso e pistacchi di Bronte (min. x 2)',
    description: "",
    price: 17.00,
    category: 'primi',
    tags: []
  },
  {
    id: 'pr-4',
    name: 'Paccheri di Gragnano, aragostella e crostacei',
    description: "",
    price: 24.00,
    category: 'primi',
    tags: []
  },
  {
    id: 'pr-5',
    name: 'Giuggiole con farina di riso, polpo e pesto leggero',
    description: "",
    price: 17.00,
    category: 'primi',
    tags: []
  },
  {
    id: 'sec-1',
    name: 'Soppressa di polpo alla plancia su patate ai mirtilli',
    description: "",
    price: 25.00,
    category: 'secondi',
    tags: []
  },
  {
    id: 'sec-2',
    name: 'Seppia cotta a 60 gradi con crema di zucca e zucchine',
    description: "",
    price: 20.00,
    category: 'secondi',
    tags: []
  },
  {
    id: 'sec-3',
    name: 'Pescato del giorno, in base agli arrivi, alla primavera',
    description: "",
    price: 26.00,
    category: 'secondi',
    tags: []
  },
  {
    id: 'sec-4',
    name: 'Tagliata di tonno rosso in crosta di pistacchi',
    description: "",
    price: 25.00,
    category: 'secondi',
    tags: []
  },
  {
    id: 'sec-5',
    name: 'Rombo chiodato al forno con fiori di zucca e zucchine',
    description: "",
    price: 28.00,
    category: 'secondi',
    tags: []
  },
  {
    id: 'sec-6',
    name: 'Frittura di calamari, gamberi, scampi e patate chips',
    description: "",
    price: 25.00,
    category: 'secondi',
    tags: []
  }
];

const HISTORY_BLOCKS_IT = [
  {
    year: '1993',
    title: 'La Nascita',
    text: 'Nel cuore di Milano, in Via Piero della Francesca, apre "La Rosa dei Venti". L’idea nasce dal desiderio di portare nel capoluogo lombardo i sapori autentici, schietti e generosi del mare, uniti alla ricchissima tradizione culinaria sarda, dove la freschezza della materia prima è considerata sacra.'
  },
  {
    year: '2005',
    title: 'La Rosa Diventa un Punto di Riferimento',
    text: 'Con il passare degli anni, il ristorante si afferma come uno dei ritrovi preferiti dai milanesi amanti del pesce fresco. Grazie a spedizioni quotidiane dai mercati ittici sardi e ad una cantina curata nei minimi dettagli, ricca di Vermentino e Cannonau, il locale si riempie ogni sera della calda accoglienza tipica dell’isola.'
  },
  {
    year: 'Oggi',
    title: 'La Tradizione Continua',
    text: 'Condotto con passione e cura familiare, "La Rosa dei Venti" continua a difendere i valori della cucina di mare tradizionale, rifiutando scorciatoie e mode passeggere. Ogni piatto è preparato sul momento, rispettando i tempi di cottura e esaltando i profumi originari del Mediterraneo.'
  }
];

const TESTIMONIALS_IT = [
  {
    author: 'Q5520TXrobertaa',
    source: 'TripAdvisor',
    rating: 5,
    text: 'Eccezionale. Esperienza superlativa. Personale cortese e molto simpatico. Ottimo rapporto qualità- prezzo. Da tornare sicuramente.'
  },
  {
    author: '822manuelag',
    source: 'TripAdvisor',
    rating: 4,
    text: 'Contenti! Ci sono stata a cena con il mio compagno ed una coppia di amici. Locale carino, anche se nel complesso semplice. Servizio attento e mai invadente. Abbiamo preso antipasti misti, nel complesso buoni. Davvero notevoli i secondi. Una bella esperienza, e abbiamo anche usufruito dello sconto "the fork". Indirizzo da prendere in considerazione in una Milano di locali basati più sulla apparenza che sulla sostanza.'
  },
  {
    author: 'And_Pask',
    source: 'TripAdvisor',
    rating: 5,
    text: 'I sapori del mare. Sant’Agostino diceva “...dammi castità e continenza, ma non subito”. Parafrasando il grande santo, se venite alla Rosa è opportuno rimandare ogni buon proposito di austerità, e abbandonarsi alle coccole culinarie che vi accompagneranno dall’antipasto al dessert. I sapori del mare comandano sempre, con la delicatezza e la semplicità di prodotti sempre frescissimi, impreziositi da mani esperte che vi presenteranno piatti elegantemente preparati, con un tocco di fantasia e originalità.'
  }
];


// ENGLISH DATA DEFINITIONS
const RESTAURANT_INFO_EN = {
  name: 'La Rosa dei Venti',
  tagline: 'Seafood Cuisine in Milan since 1993',
  address: 'Via Piero della Francesca, 34, 20154 Milano MI',
  phone: '+39 02 345 37576',
  email: 'info@larosadeiventimilano.it',
  openingHours: {
    weekdays: '12:00 – 14:30 | 19:00 – 23:30',
    closed: 'Closed all day',
  },
  socials: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    tiktok: 'https://tiktok.com',
    tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g187849-d1215297-Reviews-La_Rosa_dei_Venti-Milan_Lombardy.html',
  }
};

const MENU_ITEMS_EN: MenuItemType[] = [
  {
    id: 'ant-1',
    name: 'Octopus carpaccio with lemon and sweet mustard',
    description: "",
    price: 18.00,
    category: 'antipasti',
    tags: []
  },
  {
    id: 'ant-2',
    name: 'Prawns tails, cocktail sauce, melon, and oranges',
    description: "",
    price: 18.00,
    category: 'antipasti',
    tags: []
  },
  {
    id: 'ant-3',
    name: 'Gratinating scallops (3pcs.)',
    description: "",
    price: 18.00,
    category: 'antipasti',
    tags: []
  },
  {
    id: 'ant-4',
    name: 'Catalan cuttlefish salad',
    description: "",
    price: 16.00,
    category: 'antipasti',
    tags: []
  },
  {
    id: 'ant-5',
    name: 'Our "shrimp lollipop" (3pcs.)',
    description: "",
    price: 18.00,
    category: 'antipasti',
    tags: []
  },
  {
    id: 'ant-6',
    name: 'Baby octopus with pesto and potatoes',
    description: "",
    price: 16.00,
    category: 'antipasti',
    tags: []
  },
  {
    id: 'ant-7',
    name: 'Sardinian oyster & gin OR Sicilian red prawn, citrus oil (each)',
    description: "",
    price: 6.00,
    category: 'antipasti',
    tags: []
  },
  {
    id: 'pr-1',
    name: 'Fresh spaghetti to the carbonara sea (25 years)',
    description: "",
    price: 19.00,
    category: 'primi',
    tags: []
  },
  {
    id: 'pr-2',
    name: 'Spaghetti clams, courgettes and lemon',
    description: "",
    price: 18.00,
    category: 'primi',
    tags: []
  },
  {
    id: 'pr-3',
    name: 'Risotto with radicchio, red prawns and pistachios (min. x 2)',
    description: "",
    price: 17.00,
    category: 'primi',
    tags: []
  },
  {
    id: 'pr-4',
    name: 'Paccheri with crab meat and lobsters',
    description: "",
    price: 24.00,
    category: 'primi',
    tags: []
  },
  {
    id: 'pr-5',
    name: 'Fresh rice flour pasta with octopus and basil pesto',
    description: "",
    price: 17.00,
    category: 'primi',
    tags: []
  },
  {
    id: 'sec-1',
    name: 'Grilled octopus slice with blueberry potatoes',
    description: "",
    price: 25.00,
    category: 'secondi',
    tags: []
  },
  {
    id: 'sec-2',
    name: 'Cuttlefish cooked at 60degrees with pumpkin and courgettes',
    description: "",
    price: 20.00,
    category: 'secondi',
    tags: []
  },
  {
    id: 'sec-3',
    name: 'Fish of the day, cherry tomatoes, olives and oranges',
    description: "",
    price: 26.00,
    category: 'secondi',
    tags: []
  },
  {
    id: 'sec-4',
    name: 'Sliced red tuna in white pistachio crust',
    description: "",
    price: 25.00,
    category: 'secondi',
    tags: []
  },
  {
    id: 'sec-5',
    name: 'Baked turbot fish with courgette flowers',
    description: "",
    price: 28.00,
    category: 'secondi',
    tags: []
  },
  {
    id: 'sec-6',
    name: 'Fried squid, shrimp, langoustines and potato chips',
    description: "",
    price: 25.00,
    category: 'secondi',
    tags: []
  }
];

const HISTORY_BLOCKS_EN = [
  {
    year: '1993',
    title: 'The Birth',
    text: 'In the heart of Milan, in Via Piero della Francesca, "La Rosa dei Venti" opens its doors. The idea stems from the desire to bring the authentic, direct, and generous flavors of the sea to the Lombard capital, paired with the rich Sardinian culinary tradition, where the freshness of the raw ingredients is sacred.'
  },
  {
    year: '2005',
    title: 'A True Milestone',
    text: 'Over the years, the restaurant has established itself as a favorite gathering spot for Milanese lovers of fresh fish. Thanks to daily shipments from Sardinian seafood markets and a wine cellar curated down to the finest detail, rich in Vermentino and Cannonau, the place is filled every evening with the warm, typical hospitality of the island.'
  },
  {
    year: 'Today',
    title: 'The Legacy Continues',
    text: 'Led with passion and family care, "La Rosa dei Venti" continues to defend the values of traditional maritime cuisine, rejecting shortcuts and passing trends. Each dish is prepared to order, respecting cooking times and enhancing the original fragrances of the Mediterranean.'
  }
];

const TESTIMONIALS_EN = [
  {
    author: 'Q5520TXrobertaa',
    source: 'TripAdvisor',
    rating: 5,
    text: 'Outstanding. Superb experience. Friendly and very pleasant staff. Excellent value for money. Definitely to return.'
  },
  {
    author: '822manuelag',
    source: 'TripAdvisor',
    rating: 4,
    text: 'Happy! I had dinner here with my partner and a couple of friends. Nice place, simple overall. Attentive and never intrusive service. The starters were good. The mains were truly remarkable. A great experience, and we also took advantage of the "the fork" discount. An address to keep in mind in a Milan where venues focus more on appearance than substance.'
  },
  {
    author: 'And_Pask',
    source: 'TripAdvisor',
    rating: 5,
    text: 'The flavors of the sea. St. Augustine said "...give me chastity and continence, but not yet". Paraphrasing the great saint, if you come to La Rosa, you should postpone any good intentions of austerity and surrender to the culinary pampering that will accompany you from appetizer to dessert. Sincere sea flavors rule, with the delicacy and simplicity of very fresh ingredients, embellished by expert hands...'
  }
];


// Translation dictionary for general UI strings
const TRANSLATIONS: Record<LanguageType, Record<string, string>> = {
  it: {
    // Header & Navigation
    'nav.home': 'Home',
    'nav.menu': 'Il Menu',
    'nav.story': 'La Storia',
    'nav.contacts': 'Contatti',
    'nav.explore': 'Esplora',
    'nav.navigate': 'Naviga',
    'nav.subtitle': 'Ristorante a Milano',

    // Compass Overlay Menu
    'compass.close': 'CHIUDI',
    'compass.tagline': 'RISTORANTE LA ROSA DEI VENTI MILANO',
    'compass.north.sub': 'TORNA ALLA HOME',
    'compass.east.sub': 'GUSTA I PIATTI',
    'compass.south.sub': 'SCATTI E SAPORI',
    'compass.west.sub': 'ORARI E ROTTE',
    'compass.north': 'Nord',
    'compass.east': 'Est',
    'compass.south': 'Sud',
    'compass.west': 'Ovest',

    // Home View
    'home.discoverMenu': 'Scopri il Menu',
    'home.exploreRoute': 'Esplora la Rotta',
    'home.scroll': 'Scorri',
    'home.philosophy': 'La Nostra Filosofia',
    'home.philosophyTitle': 'Dove il mare incontra la tradizione sarda nel cuore di Milano.',
    'home.philosophyP1': 'Dal 1993, accogliamo i nostri ospiti in un ambiente raffinato e confortevole. Il nostro nome, La Rosa dei Venti, incarna il nostro spirito: una guida fidata per esplorare le più ricche rotte gastronomiche del Mediterraneo.',
    'home.philosophyP2': 'La nostra proposta gastronomica si distingue per la scrupolosa selezione quotidiana del pescato più fresco, cucinato e arricchito con la sapiente e verace cucina sarda.',
    'home.readHistory': 'Guarda la Nostra Galleria',
    'home.card.kitchen': 'CUCINA:',
    'home.card.kitchenVal': 'Pesce e Tradizione Sarda',
    'home.card.opening': 'APERTURA:',
    'home.card.openingVal': 'Dal 1993',
    'home.card.zone': 'ZONA:',
    'home.card.zoneVal': 'Sempione / Milano',
    'home.pillars.p1.title': 'Qualità Senza Compromessi',
    'home.pillars.p1.text': 'Il nostro pescato arriva fresco ogni mattina dai migliori mercati ittici della Sardegna e del Mediterraneo. Ogni piatto è preparato al momento per garantire una freschezza e un sapore immacolati.',
    'home.pillars.p2.title': 'L’Anima Sarda',
    'home.pillars.p2.text': 'Dai culurgiones fatti a mano alla fregola risottata, dalle seppie alla catalana alla seada con miele di corbezzolo: portiamo a Milano l’orgoglio dell’antica sapienza culinaria sarda.',
    'home.pillars.p3.title': 'Ospitalità Familiare',
    'home.pillars.p3.text': 'I nostri ospiti sono accolti come vecchi amici di famiglia. Un servizio caldo e sincero, in linea con l’autenticità della nostra terra d’origine, rende ogni cena un momento speciale.',
    
    // Home Explore Section
    'home.explore.tag': 'Esplora',
    'home.explore.title': 'Scopri il Ristorante',
    'home.explore.menu.title': 'Il Menu',
    'home.explore.menu.desc': 'Scopri i nostri piatti',
    'home.explore.menu.btn': 'Vai al Menu',
    'home.explore.contacts.title': 'Contatti',
    'home.explore.contacts.desc': 'Orari e prenotazioni',
    'home.explore.contacts.btn': 'Contattaci',

    'home.promo.tag': 'GUIDA MICHELIN',
    'home.promo.title': 'La Rosa dei Venti',
    'home.promo.subtitle': 'via Piero della Francesca 34, Milano, 20154, Italia',
    'home.promo.cuisine': 'Cucina: Pesce e frutti di mare, Classica',
    'home.promo.price': 'Prezzo: €€',
    'home.promo.likes': 'A 403 persone piace questo posto',
    'home.promo.text': 'Cucina di mare semplice, autentica, ancorata alla tradizione: emblematico il rombo chiodato al forno, che in stagione viene servito con funghi porcini e patate, a testimoniare una filosofia che punta tutto sulla freschezza e sulla pulizia dei sapori. Le ricette guardano alla Sardegna e, più in generale, alla cucina italiana, senza sovrastrutture né virtuosismi. Il suggerimento è di affidarsi al titolare e lasciarsi guidare tra i fuori carta del giorno, spesso legati ai prodotti appena arrivati dal mercato e capaci di raccontare al meglio l’anima del locale.',
    'home.promo.btn': 'Sfoglia la Guida MICHELIN',
    'home.promo.link': 'https://guide.michelin.com/it/it/lombardia/milano/ristorante/la-rosa-dei-venti?utm_source=tripadvisor&utm_medium=partner&utm_campaign=restaurants',
    'home.reviews.tag': 'Dicono Di Noi',
    'home.reviews.title': 'Le Recensioni dei Nostri Ospiti',
    'home.reviews.footer': 'Siamo orgogliosi di mantenere un punteggio eccellente su TripAdvisor e Google.',
    'home.reviews.link': 'Vedi tutte le recensioni su TripAdvisor',

    // Menu View
    'menu.title': 'Il Nostro Menu',
    'menu.subtitle': 'Un viaggio gastronomico tra i sapori del mare e della Sardegna',
    'menu.disclaimer': 'Tutti i nostri piatti di pesce sono preparati con pescato selvaggio giornaliero. Eventuali variazioni sono legate alle condizioni del mare.',
    'menu.search': 'Cerca un piatto...',
    'menu.empty': 'Nessun piatto trovato con i criteri di ricerca selezionati.',
    'menu.cat.all': 'Tutti i piatti',
    'menu.cat.antipasti': 'Antipasti',
    'menu.cat.primi': 'Primi Piatti',
    'menu.cat.secondi': 'Secondi Piatti',
    'menu.cat.dolci': 'I Dolci',
    'menu.tag.Mare': 'Mare',
    'menu.tag.Seafood': 'Mare',
    'menu.tag.Senza Glutine': 'Senza Glutine',
    'menu.tag.Gluten-Free': 'Senza Glutine',
    'menu.tag.Consigliato': 'Consigliato',
    'menu.tag.Recommended': 'Consigliato',
    'menu.tag.Sardo': 'Sardo',
    'menu.tag.Sardinian': 'Sardo',
    'menu.tag.Vegetariano': 'Vegetariano',
    'menu.tag.Vegetarian': 'Vegetariano',
    'menu.tag.Crudo': 'Crudo',
    'menu.tag.Raw': 'Crudo',
    'menu.tag.Specialità': 'Specialità',
    'menu.tag.Specialty': 'Specialità',
    'menu.tag.Fatto in Casa': 'Fatto in Casa',
    'menu.tag.Homemade': 'Fatto in Casa',
    'menu.tag.Fresco': 'Fresco',
    'menu.tag.Fresh': 'Fresco',

    // Story View
    'story.title': 'La Nostra Storia',
    'story.subtitle': 'Un legame sincero con le sponde della Sardegna, la passione di una famiglia e la ricerca costante della perfezione culinaria a Milano.',
    'story.quote': '“La nostra cucina è una carta nautica: segue il vento della freschezza, rispetta le maree della stagione e non perde mai di vista la stella polare dell\'autenticità sarda.”',
    'story.quoteAuthor': '— Chef Pietro',
    'story.valuesTitle': 'I Nostri Valori Fondanti',
    'story.v1.title': 'Sostenibilità',
    'story.v1.text': 'Peschiamo in modo etico, rispettando i cicli di riproduzione marina e collaborando solo con piccoli pescatori locali della Sardegna.',
    'story.v2.title': 'Cura del Personale',
    'story.v2.text': 'La nostra cucina è guidata dal rispetto reciproco e da una crescita professionale costante. Una ciurma affiatata garantisce un’esperienza indimenticabile.',
    'story.v3.title': 'Rotte Future',
    'story.v3.text': 'Guardiamo avanti con l’ambizione di continuare a portare l’identità e la sincera ospitalità della nostra terra a nuove generazioni di buongustai.',
    'story.timeline.tag': 'TAPPA',

    // Contacts View
    'contacts.tag': 'Siamo a tua disposizione',
    'contacts.title': 'Contattaci e Vieni a Trovarci',
    'contacts.subtitle': 'Hai domande, desideri prenotare un tavolo speciale o organizzare un evento privato? Compila il form qui sotto o chiamaci direttamente. Il nostro equipaggio ti risponderà nel minor tempo possibile.',
    'contacts.card.address': 'Indirizzo',
    'contacts.card.phone': 'Telefono',
    'contacts.card.email': 'Email',
    'contacts.card.hours': 'Orari di Apertura',
    'contacts.reach.title': 'Come Raggiungerci:',
    'contacts.reach.subway': 'METROPOLITANA:',
    'contacts.reach.subwayVal': 'Linea M5 (Lilla) – Fermata "Gerusalemme" (a soli 4 minuti a piedi) oppure "Domodossola" (7 minuti).',
    'contacts.reach.tram': 'TRAM:',
    'contacts.reach.tramVal': 'Linea 1, 10, 19 – Fermata "Piazza Gramsci" o "Via Procaccini".',
    'contacts.reach.car': 'AUTO:',
    'contacts.reach.carVal': 'Ci troviamo all\'inizio di Via Piero della Francesca. Parcheggio custodito convenzionato nelle vicinanze in Via Procaccini.',
    'contacts.form.title': 'Scrivici un Messaggio',
    'contacts.form.subtitle': 'Invia la tua richiesta o feedback direttamente alla nostra cucina e staff',
    'contacts.form.name': 'Il Tuo Nome',
    'contacts.form.namePlaceholder': 'Esempio: Mario Rossi',
    'contacts.form.email': 'La Tua Email',
    'contacts.form.emailPlaceholder': 'mario.rossi@email.it',
    'contacts.form.subject': 'Oggetto della richiesta',
    'contacts.form.subjectPlaceholder': 'Esempio: Info eventi privati, banchetti...',
    'contacts.form.message': 'Il Tuo Messaggio',
    'contacts.form.messagePlaceholder': 'Scrivi qui la tua richiesta in dettaglio...',
    'contacts.form.success': 'Messaggio Inviato con Successo!',
    'contacts.form.successSub': 'Grazie, ti risponderemo al più presto.',
    'contacts.form.error': 'Errore durante l\'invio',
    'contacts.form.errorSub': 'Si prega di compilare tutti i campi.',
    'contacts.form.sending': 'Invio...',
    'contacts.form.submit': 'Invia Messaggio',

    // Footer
    'footer.description': 'Dal 1993, guidiamo i palati milanesi alla scoperta dei più autentici sapori del Mediterraneo e della generosa tradizione sarda. Un porto sicuro per gli amanti del pesce fresco.',
    'footer.navTitle': 'Rotte del Sito',
    'footer.nav.home': 'Home',
    'footer.nav.menu': 'Il Nostro Menu',
    'footer.nav.gallery': 'Galleria',
    'footer.nav.story': 'La Nostra Storia',
    'footer.nav.contacts': 'Contatti e Orari',
    'footer.contactTitle': 'Riferimenti & Orari',
    'footer.label.address': 'Indirizzo:',
    'footer.label.phone': 'Telefono:',
    'footer.label.email': 'Email:',
    'footer.label.hours': 'Apertura:',
    'footer.rights': 'La Rosa dei Venti Milano. Tutti i diritti riservati.',

    // Galleria
    'nav.gallery': 'Galleria',
    'gallery.tag': 'I Nostri Momenti',
    'gallery.title': 'Diario di Bordo Fotografico',
    'gallery.subtitle': 'Scatti della nostra accoglienza, delle nostre specialità di mare e dell’atmosfera marinara della Rosa dei Venti.',
    'gallery.homeTitle': 'Scorci e Sapori della Rosa dei Venti',
    'gallery.homeSubtitle': 'Un piccolo diario visivo della nostra cucina di mare e dell’atmosfera che vi aspetta nel nostro ristorante.',
    'gallery.exploreBtn': 'Sfoglia il Diario Fotografico',
    'gallery.all': 'Tutti gli scatti',
    'gallery.dishes': 'Piatti e Sapori',
    'gallery.ambience': 'Atmosfera e Dettagli',
    'gallery.lightbox.close': 'Chiudi'
  },
  en: {
    // Header & Navigation
    'nav.home': 'Home',
    'nav.menu': 'The Menu',
    'nav.story': 'Our Story',
    'nav.contacts': 'Contact',
    'nav.explore': 'Explore',
    'nav.navigate': 'Navigate',
    'nav.subtitle': 'Restaurant in Milan',

    // Compass Overlay Menu
    'compass.close': 'CLOSE',
    'compass.tagline': 'LA ROSA DEI VENTI RESTAURANT MILAN',
    'compass.north.sub': 'BACK TO HOME',
    'compass.east.sub': 'TASTE OUR DISHES',
    'compass.south.sub': 'PHOTOS & AMBIANCE',
    'compass.west.sub': 'HOURS & ROUTE',
    'compass.north': 'North',
    'compass.east': 'East',
    'compass.south': 'South',
    'compass.west': 'West',

    // Home View
    'home.discoverMenu': 'Discover the Menu',
    'home.exploreRoute': 'Explore the Course',
    'home.scroll': 'Scroll',
    'home.philosophy': 'Our Philosophy',
    'home.philosophyTitle': 'Where the sea meets Sardinian tradition in the heart of Milan.',
    'home.philosophyP1': 'Since 1993, we have welcomed our guests in a refined and comfortable environment. Our name, La Rosa dei Venti (The Wind Rose), embodies our spirit: a trusted guide for exploring the richest culinary routes of the Mediterranean.',
    'home.philosophyP2': 'Our culinary offer stands out for the scrupulous daily selection of the freshest catch, cooked and enriched with wise and authentic Sardinian cuisine. We offer our customers a genuine experience.',
    'home.readHistory': 'Browse our Photo Gallery',
    'home.card.kitchen': 'CUISINE:',
    'home.card.kitchenVal': 'Seafood & Sardinian Tradition',
    'home.card.opening': 'OPENING:',
    'home.card.openingVal': 'Since 1993',
    'home.card.zone': 'AREA:',
    'home.card.zoneVal': 'Sempione / Milan',
    'home.pillars.p1.title': 'Uncompromising Quality',
    'home.pillars.p1.text': 'Our fish arrives fresh every morning from the best fish markets in Sardinia and the Mediterranean. We prepare every single dish to order to guarantee pristine freshness and flavor.',
    'home.pillars.p2.title': 'The Sardinian Soul',
    'home.pillars.p2.text': 'From traditional handmade Culurgiones to risottata fregola and sweet seada with bitter strawberry-tree honey: we bring the pride of ancient Sardinian culinary wisdom to Milan.',
    'home.pillars.p3.title': 'Family Hospitality',
    'home.pillars.p3.text': 'We believe in genuine hospitality. Our guests are welcomed like old family friends, with a caring and warm service, in line with the authenticity of our native land.',
    
    // Home Explore Section
    'home.explore.tag': 'Explore',
    'home.explore.title': 'Discover the Restaurant',
    'home.explore.menu.title': 'The Menu',
    'home.explore.menu.desc': 'Discover our dishes',
    'home.explore.menu.btn': 'Go to Menu',
    'home.explore.contacts.title': 'Contacts',
    'home.explore.contacts.desc': 'Hours and reservations',
    'home.explore.contacts.btn': 'Contact Us',

    'home.promo.tag': 'MICHELIN GUIDE',
    'home.promo.title': 'La Rosa dei Venti',
    'home.promo.subtitle': 'via Piero della Francesca 34, Milan, 20154, Italy',
    'home.promo.cuisine': 'Cuisine: Seafood, Classic',
    'home.promo.price': 'Price: €€',
    'home.promo.likes': '403 people like this place',
    'home.promo.text': 'Simple, authentic seafood cuisine anchored in tradition: the baked turbot is emblematic, served with porcini mushrooms and potatoes in season, testifying to a philosophy that relies entirely on freshness and clean flavors. The recipes look to Sardinia and, more generally, to Italian cuisine, without superstructures or virtuosity. The suggestion is to trust the owner and let yourself be guided through the daily specials, often linked to products freshly arrived from the market and capable of best telling the local soul.',
    'home.promo.btn': 'Browse the MICHELIN Guide',
    'home.promo.link': 'https://guide.michelin.com/it/it/lombardia/milano/ristorante/la-rosa-dei-venti?utm_source=tripadvisor&utm_medium=partner&utm_campaign=restaurants',
    'home.reviews.tag': 'Guest Reviews',
    'home.reviews.title': 'What Our Guests Say',
    'home.reviews.footer': 'We are proud to maintain an excellent rating on TripAdvisor and Google Reviews.',
    'home.reviews.link': 'View all reviews on TripAdvisor',

    // Menu View
    'menu.title': 'Our Menu',
    'menu.subtitle': 'A culinary journey through the flavors of the sea and Sardinia',
    'menu.disclaimer': 'All of our seafood dishes are prepared with daily wild catch. Any variations are subject to weather and sea conditions.',
    'menu.search': 'Search for a dish...',
    'menu.empty': 'No dishes found matching the selected search criteria.',
    'menu.cat.all': 'All Dishes',
    'menu.cat.antipasti': 'Appetizers',
    'menu.cat.primi': 'First Courses',
    'menu.cat.secondi': 'Second Courses',
    'menu.cat.dolci': 'Desserts',
    'menu.tag.Mare': 'Seafood',
    'menu.tag.Seafood': 'Seafood',
    'menu.tag.Senza Glutine': 'Gluten-Free',
    'menu.tag.Gluten-Free': 'Gluten-Free',
    'menu.tag.Consigliato': 'Recommended',
    'menu.tag.Recommended': 'Recommended',
    'menu.tag.Sardo': 'Sardinian',
    'menu.tag.Sardinian': 'Sardinian',
    'menu.tag.Vegetariano': 'Vegetarian',
    'menu.tag.Vegetarian': 'Vegetarian',
    'menu.tag.Crudo': 'Raw',
    'menu.tag.Raw': 'Raw',
    'menu.tag.Specialità': 'Specialty',
    'menu.tag.Specialty': 'Specialty',
    'menu.tag.Fatto in Casa': 'Homemade',
    'menu.tag.Homemade': 'Homemade',
    'menu.tag.Fresco': 'Fresh',
    'menu.tag.Fresh': 'Fresh',

    // Story View
    'story.title': 'Our Story',
    'story.subtitle': 'A sincere bond with the shores of Sardinia, the passion of a family, and the constant search for culinary perfection in Milan.',
    'story.quote': '“Our kitchen is a nautical chart: it follows the wind of freshness, respects the tides of the season, and never loses sight of the polar star of Sardinian authenticity.”',
    'story.quoteAuthor': '— Chef Pietro',
    'story.valuesTitle': 'Our Founding Values',
    'story.v1.title': 'Sustainability',
    'story.v1.text': 'We fish ethically, respecting marine breeding cycles and collaborating only with small local fishermen in Sardinia.',
    'story.v2.title': 'Staff Care',
    'story.v2.text': 'Our kitchen is guided by mutual respect and constant professional growth. A close-knit crew guarantees an unforgettable experience.',
    'story.v3.title': 'Future Horizons',
    'story.v3.text': 'We look forward with the ambition to keep bringing the identity and sincere hospitality of our land to new generations of gourmands.',
    'story.timeline.tag': 'STAGE',

    // Contacts View
    'contacts.tag': 'We are at your disposal',
    'contacts.title': 'Contact & Find Us',
    'contacts.subtitle': 'Do you have questions, wish to book a special table, or organize a private event? Fill out the form below or call us directly. Our crew will respond to you as soon as possible.',
    'contacts.card.address': 'Address',
    'contacts.card.phone': 'Phone',
    'contacts.card.email': 'Email',
    'contacts.card.hours': 'Opening Hours',
    'contacts.reach.title': 'How to Reach Us:',
    'contacts.reach.subway': 'SUBWAY:',
    'contacts.reach.subwayVal': 'Line M5 (Purple) – "Gerusalemme" stop (just a 4-minute walk) or "Domodossola" (7 minutes).',
    'contacts.reach.tram': 'TRAM:',
    'contacts.reach.tramVal': 'Lines 1, 10, 19 – "Piazza Gramsci" or "Via Procaccini" stop.',
    'contacts.reach.car': 'BY CAR:',
    'contacts.reach.carVal': 'We are located at the beginning of Via Piero della Francesca. Convened guarded parking nearby on Via Procaccini.',
    'contacts.form.title': 'Send Us a Message',
    'contacts.form.subtitle': 'Send your request or feedback directly to our kitchen and staff',
    'contacts.form.name': 'Your Name',
    'contacts.form.namePlaceholder': 'e.g., John Smith',
    'contacts.form.email': 'Your Email',
    'contacts.form.emailPlaceholder': 'john.smith@email.com',
    'contacts.form.subject': 'Subject of Inquiry',
    'contacts.form.subjectPlaceholder': 'e.g., Private event info, banquets...',
    'contacts.form.message': 'Your Message',
    'contacts.form.messagePlaceholder': 'Write your request in detail here...',
    'contacts.form.success': 'Message Sent Successfully!',
    'contacts.form.successSub': 'Thank you, we will reply as soon as possible.',
    'contacts.form.error': 'Error Sending Message',
    'contacts.form.errorSub': 'Please fill in all fields.',
    'contacts.form.sending': 'Sending...',
    'contacts.form.submit': 'Send Message',

    // Footer
    'footer.description': 'Since 1993, we have guided Milanese palates to discover the most authentic flavors of the Mediterranean and the generous Sardinian tradition. A safe harbor for fresh fish lovers.',
    'footer.navTitle': 'Site Map',
    'footer.nav.home': 'Home',
    'footer.nav.menu': 'Our Menu',
    'footer.nav.gallery': 'Gallery',
    'footer.nav.story': 'Our Story',
    'footer.nav.contacts': 'Contact & Hours',
    'footer.contactTitle': 'References & Hours',
    'footer.label.address': 'Address:',
    'footer.label.phone': 'Phone:',
    'footer.label.email': 'Email:',
    'footer.label.hours': 'Opening:',
    'footer.rights': 'La Rosa dei Venti Milan. All rights reserved.',

    // Gallery
    'nav.gallery': 'Gallery',
    'gallery.tag': 'Our Moments',
    'gallery.title': 'Photographic Logbook',
    'gallery.subtitle': 'Shots of our hospitality, seafood specialties, and the nautical atmosphere of La Rosa dei Venti.',
    'gallery.homeTitle': 'Glimpses and Flavors of La Rosa dei Venti',
    'gallery.homeSubtitle': 'A small visual journal of our seafood cuisine and the atmosphere that awaits you in our restaurant.',
    'gallery.exploreBtn': 'Browse the Photo Journal',
    'gallery.all': 'All Photos',
    'gallery.dishes': 'Dishes & Flavors',
    'gallery.ambience': 'Atmosphere & Details',
    'gallery.lightbox.close': 'Close'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageType>('it');

  const t = (key: string): string => {
    return TRANSLATIONS[language][key] || key;
  };

  const menuItems = language === 'it' ? MENU_ITEMS_IT : MENU_ITEMS_EN;
  const historyBlocks = language === 'it' ? HISTORY_BLOCKS_IT : HISTORY_BLOCKS_EN;
  const testimonials = language === 'it' ? TESTIMONIALS_IT : TESTIMONIALS_EN;
  const restaurantInfo = language === 'it' ? RESTAURANT_INFO_IT : RESTAURANT_INFO_EN;

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      t,
      menuItems,
      historyBlocks,
      testimonials,
      restaurantInfo
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
