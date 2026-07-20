/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItemType } from './types';

export const RESTAURANT_INFO = {
  name: 'La Rosa dei Venti',
  tagline: 'L’Autentica Cucina di Mare a Milano dal 1993',
  address: 'Via Piero della Francesca, 4, 20154 Milano MI',
  phone: '+39 02 345 37576',
  email: 'info@larosadeiventimilano.it',
  openingHours: {
    weekdays: 'Martedì – Domenica: 12:00 – 14:30 | 19:00 – 23:30',
    closed: 'Lunedì: Chiuso tutto il giorno',
  },
  socials: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    tripadvisor: 'https://www.tripadvisor.it/Restaurant_Review-g187849-d1215297-Reviews-La_Rosa_dei_Venti-Milan_Lombardy.html',
  }
};

export const MENU_ITEMS: MenuItemType[] = [
  // Antipasti
  {
    id: 'ant-1',
    name: 'Carpaccio di Polpo della Gallura',
    description: 'Polpo verace cotto a bassa temperatura, tagliato sottile e marinato con agrumi, sedano croccante, patate viola al vapore e finocchietto selvatico.',
    price: 18.00,
    category: 'antipasti',
    tags: ['Mare', 'Senza Glutine', 'Consigliato']
  },
  {
    id: 'ant-2',
    name: 'Impepata di Cozze al Vermentino',
    description: 'Cozze sarde saltate con aglio, peperoncino fresco, prezzemolo, sfumate con pregiato Vermentino di Gallura DOCG e servite con crostoni caldi di pane carasau.',
    price: 16.00,
    category: 'antipasti',
    tags: ['Mare', 'Sardo']
  },
  {
    id: 'ant-3',
    name: 'Culurgiones Dorati alla Crema di Pecorino',
    description: 'Tortelli sardi artigianali fatti a mano, ripieni di patate, menta fresca e pecorino, leggermente dorati e adagiati su una vellutata tiepida di Pecorino Sardo DOP e gocce di miele di corbezzolo.',
    price: 17.00,
    category: 'antipasti',
    tags: ['Sardo', 'Vegetariano', 'Consigliato']
  },
  {
    id: 'ant-4',
    name: 'Gran Crudo di Mare "Rosa dei Venti"',
    description: 'Pregiata selezione di ostriche della Sardegna, gamberi rossi di Mazara, scampi nostrani e tartare di tonno rosso pinna gialla marinato agli agrumi di Sardegna.',
    price: 28.00,
    category: 'antipasti',
    tags: ['Mare', 'Crudo', 'Senza Glutine']
  },

  // Primi Piatti
  {
    id: 'pr-1',
    name: 'Fregola Sarda Risottata ai Frutti di Mare',
    description: 'Fregola sarda tostata artigianale, risottata lentamente con calamari, gamberi freschi, cozze, vongole veraci, pomodorini datterini ed un tocco aromatico di zafferano sardo biologico.',
    price: 22.00,
    category: 'primi',
    tags: ['Mare', 'Sardo', 'Specialità']
  },
  {
    id: 'pr-2',
    name: 'Spaghetti alle Vongole Veraci e Bottarga',
    description: 'Spaghetti di Gragnano IGP trafilati al bronzo con vongole veraci, aglio dorato, peperoncino fresco, sfumati al Vermentino e cosparsi di bottarga di muggine sarda grattugiata al momento.',
    price: 24.00,
    category: 'primi',
    tags: ['Mare', 'Sardo', 'Consigliato']
  },
  {
    id: 'pr-3',
    name: 'Linguine all’Astice Blu del Mediterraneo',
    description: 'Linguine all’uovo artigianali saltate con mezzo astice fresco, pomodorini ciliegino canditi, sfumate al Cognac e profumate al prezzemolo fresco.',
    price: 28.00,
    category: 'primi',
    tags: ['Mare', 'Specialità']
  },
  {
    id: 'pr-4',
    name: 'Malloreddus con Ragù di Scorfano e Zafferano',
    description: 'Gnocchetti sardi fatti in casa con farina di semola sarda, conditi con un delicato ragù bianco di scorfano selvaggio, finocchietto selvatico, zafferano di San Gavino e zucchine novelle grattugiate.',
    price: 19.00,
    category: 'primi',
    tags: ['Mare', 'Sardo']
  },

  // Secondi Piatti
  {
    id: 'sec-1',
    name: 'Grigliata Imperiale "Rosa dei Venti"',
    description: 'Sinfonia di mare cotta sulla brace: gamberoni rossi reali, calamari freschi nostrani, filetto di spigola selvaggia del Mediterraneo e scampi, serviti con olio EVO alle erbe aromatiche sarde.',
    price: 32.00,
    category: 'secondi',
    tags: ['Mare', 'Senza Glutine', 'Specialità']
  },
  {
    id: 'sec-2',
    name: 'Catalana di Crostacei e Camone Sardo',
    description: 'Pregiati crostacei (mezzo astice, scampi e mazzancolle) cotti al vapore, serviti tiepidi con julienne di cipolla rossa di Tropea marinata, pomodorini Camone sardi croccanti, sedano e leggera vinaigrette al limone.',
    price: 35.00,
    category: 'secondi',
    tags: ['Mare', 'Sardo', 'Senza Glutine']
  },
  {
    id: 'sec-3',
    name: 'Filetto di Rombo in Crosta di Patate e Timo',
    description: 'Rombo fresco del giorno cotto al forno, ricoperto da scaglie croccanti di patate e zucchine novelle profumate al timo selvatico, su vellutata calda di carciofi.',
    price: 26.00,
    category: 'secondi',
    tags: ['Mare', 'Senza Glutine']
  },
  {
    id: 'sec-4',
    name: 'Fritto Misto di Paranza e Verdure in Tempura',
    description: 'Triglie, calamari freschi, code di gambero e verdurine croccanti dell’orto infarinati nella semola fine di grano duro sardo, fritti al momento in olio profondo e serviti asciutti con maionese artigianale al lime.',
    price: 22.00,
    category: 'secondi',
    tags: ['Mare', 'Consigliato']
  },

  // Dolci
  {
    id: 'dol-1',
    name: 'Seada Tradizionale Sarda al Miele di Corbezzolo',
    description: 'Il dessert iconico sardo: disco di sfoglia artigianale tirata a mano ripieno di formaggio pecorino fresco acidulo fuso e scorza grattugiata di limone, fritto e guarnito con miele biologico di corbezzolo amaro o miele di fior d’arancio tiepido.',
    price: 9.50,
    category: 'dolci',
    tags: ['Sardo', 'Fatto in Casa', 'Consigliato']
  },
  {
    id: 'dol-2',
    name: 'Tiramisù al Caffè Sardo e Mirto',
    description: 'Golosità al cucchiaio con soffice mascarpone fresco montato, uova biologiche e savoiardi sardi artigianali bagnati nel caffè espresso con un tocco delicato di liquore al Mirto Rosso.',
    price: 8.50,
    category: 'dolci',
    tags: ['Fatto in Casa']
  },
  {
    id: 'dol-3',
    name: 'Semifreddo al Torrone di Tonara',
    description: 'Morbido semifreddo preparato con il celebre torrone sardo artigianale di Tonara al miele e mandorle tostate, servito con cioccolato fondente fuso all’80% e granella di pistacchi.',
    price: 8.00,
    category: 'dolci',
    tags: ['Sardo', 'Fatto in Casa']
  },
  {
    id: 'dol-4',
    name: 'Sorbetto Cremoso al Limone e Zenzero o al Mirto',
    description: 'Sorbetto artigianale mantecato al momento, rinfrescante ed aromatico, ideale per pulire il palato dopo un pasto di mare.',
    price: 6.00,
    category: 'dolci',
    tags: ['Senza Glutine', 'Fresco']
  }
];

export const HISTORY_BLOCKS = [
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

export const TESTIMONIALS = [
  {
    author: 'Giuseppe R.',
    source: 'TripAdvisor',
    rating: 5,
    text: 'Il miglior fritto misto e la fregola più saporita di tutta Milano! Ingredienti di una freschezza disarmante e servizio impeccabile. Si sente il profumo della Sardegna in ogni piatto. Da ritornarci assolutamente!'
  },
  {
    author: 'Elena M.',
    source: 'Google Recensioni',
    rating: 5,
    text: 'Un locale storico che non delude mai. Spaghetti alle vongole spettacolari, arricchiti con una bottarga sarda squisita. L’atmosfera è accogliente e calda, proprio come i proprietari. Una vera garanzia in zona Sempione.'
  },
  {
    author: 'Marco F.',
    source: 'TripAdvisor',
    rating: 5,
    text: 'Non c’è un posto migliore a Milano se si vuole mangiare pesce cucinato secondo tradizione. La Seada finale era superlativa, fritta alla perfezione e con un miele di corbezzolo fantastico. Complimenti davvero!'
  }
];
