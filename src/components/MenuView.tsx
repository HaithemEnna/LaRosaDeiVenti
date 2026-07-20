/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Utensils, Award, ShieldCheck, Soup, Cookie, Layers } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { MenuItemType } from '../types';

export default function MenuView() {
  const { t, language, menuItems } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'antipasti' | 'primi' | 'secondi'>('all');

  const categories = [
    { id: 'all', label: language === 'it' ? 'Tutto il Menu' : 'All Dishes', icon: Utensils },
    { id: 'antipasti', label: language === 'it' ? 'Per cominciare' : 'Per cominciare (To begin)', icon: Layers },
    { id: 'primi', label: language === 'it' ? 'Primi Piatti' : 'Primi Piatti (First Courses)', icon: Soup },
    { id: 'secondi', label: language === 'it' ? 'Il Pesce' : 'Il Pesce (Fish Dishes)', icon: Award },
  ];

  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  // Group items by category if "all" is selected
  const categoriesList: ('antipasti' | 'primi' | 'secondi')[] = ['antipasti', 'primi', 'secondi'];
  const categoryLabels = {
    antipasti: language === 'it' ? 'Per cominciare' : 'Per cominciare (To Begin)',
    primi: language === 'it' ? 'Primi Piatti' : 'Primi Piatti (First Courses)',
    secondi: language === 'it' ? 'Il Pesce' : 'Il Pesce (Fish)',
  };

  // Tag color helper
  const getTagStyle = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'sardo':
      case 'sardinian':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'mare':
      case 'seafood':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'consigliato':
      case 'recommended':
        return 'bg-rose-100 text-rose-800 border-rose-200 font-semibold';
      case 'senza glutine':
      case 'gluten-free':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'specialità':
      case 'specialty':
        return 'bg-purple-100 text-purple-800 border-purple-200 font-semibold';
      case 'fatto in casa':
      case 'homemade':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-brand-cream text-brand-charcoal/70 border-brand-sand/15';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      id="menu-view-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-brand-cream/30 py-16 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER SECTION */}
        <div id="menu-header" className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 border-b border-brand-sand/20 pb-8">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-coral font-bold">
              {language === 'it' ? "Un'esperienza Gourmet" : "A Gourmet Experience"}
            </span>
            <h1 className="font-serif italic text-4xl md:text-5xl text-brand-charcoal tracking-wide">
              {t('menu.title')}
            </h1>
            <p className="text-brand-slate text-sm font-light leading-relaxed">
              {t('menu.subtitle')}
            </p>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-xs bg-white border border-brand-sand/20 text-brand-charcoal px-4 py-2 rounded-lg">
            <ShieldCheck size={14} className="text-brand-coral" />
            <span>
              {language === 'it' ? 'Pescato tracciato e freschezza giornaliera garantita' : 'Tracked catch and daily freshness guaranteed'}
            </span>
          </div>
        </div>

        {/* COMPREHENSIVE CATEGORY NAVIGATION */}
        <div id="menu-nav-tabs" className="flex flex-wrap gap-2.5 justify-start mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                id={`menu-tab-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-semibold tracking-wider uppercase border transition-all duration-300 cursor-pointer ${isActive
                    ? 'bg-brand-charcoal text-white border-brand-charcoal shadow-sm scale-102'
                    : 'bg-white text-brand-charcoal border-brand-sand/20 hover:border-brand-coral hover:bg-brand-sand-light/50'
                  }`}
              >
                <Icon size={12} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* MAIN MENU DISHES DISPLAY */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="flex flex-col gap-12"
          >
            {/* If a single category is selected, or if 'all' is selected */}
            {selectedCategory !== 'all' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredItems.map((item) => (
                  <MenuCard key={item.id} item={item} getTagStyle={getTagStyle} variants={cardVariants} t={t} />
                ))}
              </div>
            ) : (
              // Display clustered categories
              categoriesList.map((catKey) => {
                const categoryItems = menuItems.filter(item => item.category === catKey);
                return (
                  <div key={catKey} id={`section-${catKey}`} className="flex flex-col gap-6 scroll-mt-24">
                    <div className="flex items-center gap-3 border-b border-brand-sand/20 pb-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-coral" />
                      <h2 className="font-serif italic text-2xl md:text-3xl font-medium text-brand-charcoal">
                        {categoryLabels[catKey]}
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {categoryItems.map((item) => (
                        <MenuCard key={item.id} item={item} getTagStyle={getTagStyle} variants={cardVariants} t={t} />
                      ))}
                    </div>
                  </div>
                );
              })
            )}
          </motion.div>
        </AnimatePresence>

        {/* INGREDIENTS FOOTER NOTES */}
        <div className="mt-16 bg-white border border-brand-sand/20 rounded-2xl p-8 text-xs text-brand-slate flex flex-col gap-4 shadow-sm">
          <p className="font-bold font-mono uppercase tracking-wider text-brand-charcoal">
            {language === 'it' ? 'Informativa per gli Ospiti:' : 'Guest Information:'}
          </p>
          {language === 'it' ? (
            <ul className="list-disc list-inside flex flex-col gap-2 font-light">
              <li>Il pesce destinato ad essere consumato crudo o praticamente crudo ha subito un trattamento di bonifica preventiva (abbattimento rapido di temperatura) conforme alla normativa europea CE 853/2004.</li>
              <li>Per qualsiasi informazione su sostanze e allergeni che possono provocare allergie o intolleranze, è possibile consultare la documentazione scritta che verrà fornita, a richiesta, dal personale di servizio.</li>
              <li>I nostri piatti possono contenere ingredienti surgelati all'origine qualora la reperibilità sul mercato del prodotto fresco non sia garantita, sempre segnalato con asterisco dal personale.</li>
            </ul>
          ) : (
            <ul className="list-disc list-inside flex flex-col gap-2 font-light">
              <li>Fish intended to be consumed raw or practically raw has undergone a preventive sanitization treatment (rapid temperature blast chilling) in compliance with European regulation EC 853/2004.</li>
              <li>For any information regarding substances and allergens that may cause allergies or intolerances, you can consult the written documentation that will be provided, upon request, by the service staff.</li>
              <li>Our dishes may contain originally frozen ingredients in cases where the availability of the fresh product on the market is not guaranteed, which will always be pointed out with an asterisk by our staff.</li>
            </ul>
          )}
        </div>

      </div>
    </motion.div>
  );
}

interface MenuCardProps {
  key?: React.Key;
  item: MenuItemType;
  getTagStyle: (tag: string) => string;
  variants: any;
  t: (key: string) => string;
}

function MenuCard({ item, getTagStyle, variants, t }: MenuCardProps) {
  return (
    <motion.div
      variants={variants}
      className="bg-white p-6 rounded-xl border border-brand-sand/20 hover:border-brand-sand/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between gap-4 group"
    >
      <div className="flex flex-col gap-3">
        {/* Header containing name and price */}
        <div className="flex justify-between items-start gap-4">
          <h3 className="font-serif text-lg md:text-xl font-medium text-brand-charcoal group-hover:text-brand-coral transition-colors duration-300">
            {item.name}
          </h3>
          <span className="font-serif text-base md:text-lg font-semibold text-brand-coral shrink-0 whitespace-nowrap bg-brand-cream border border-brand-sand/25 px-2.5 py-0.5 rounded-md">
            € {item.price.toFixed(2).replace('.', ',')}
          </span>
        </div>

        {/* Dish Description */}
        <p className="text-brand-slate text-xs leading-relaxed font-light">
          {item.description}
        </p>
      </div>

      {/* Tags footer */}
      {item.tags && item.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border ${getTagStyle(tag)}`}
            >
              {t(`menu.tag.${tag}`)}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

