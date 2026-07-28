/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Utensils, Award, ShieldCheck, Soup, Cookie, Layers, Anchor, Fish, Leaf } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { MenuItemType } from '../types';

import logoImg from '../assets/images/minimal_rose_logo_1783090656063.jpg';
import foodExampleImg from '../assets/images/food_example.jpg';
import g2Img from '../assets/images/g_img_2d.jpg';

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
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'mare':
      case 'seafood':
        return 'bg-sky-50 text-sky-700 border-sky-200';
      case 'consigliato':
      case 'recommended':
        return 'bg-rose-50 text-rose-700 border-rose-200 font-semibold';
      case 'senza glutine':
      case 'gluten-free':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'specialità':
      case 'specialty':
        return 'bg-violet-50 text-violet-700 border-violet-200 font-semibold';
      case 'fatto in casa':
      case 'homemade':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      default:
        return 'bg-stone-50 text-stone-500 border-stone-200';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07 }
    }
  };

  const cardVariants = {
    hidden: { y: 16, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      id="menu-view-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-[#0F1318]"
    >
      {/* ── HERO HEADER – identità forte, stile carta di lusso ── */}
      <div
        id="menu-hero"
        className="relative w-full overflow-hidden"
        style={{ minHeight: '420px' }}
      >
        {/* Immagine di sfondo */}
        <img
          src={foodExampleImg}
          alt="La Rosa dei Venti cucina"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          fetchPriority="high"
        />
        {/* Overlay scuro elegante */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1318]/60 via-[#0F1318]/80 to-[#0F1318]" />

        {/* Texture sottile */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.4) 2px, rgba(255,255,255,0.4) 3px)'}} />

        {/* Bordo decorativo top */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-coral/60 to-transparent" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-16 pb-12">
          {/* Logo */}
          <div className="w-16 h-16 rounded-full overflow-hidden border border-white/20 p-0.5 mb-6 shadow-2xl">
            <img src={logoImg} alt="Logo" className="w-full h-full object-cover rounded-full" />
          </div>

          {/* Soprattitolo */}
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-coral/80 mb-3 font-medium">
            {language === 'it' ? 'Ristorante di Mare · Milano' : 'Seafood Restaurant · Milan'}
          </p>

          {/* Nome */}
          <h1 className="font-serif italic text-5xl md:text-7xl text-white tracking-wide mb-2 drop-shadow-2xl">
            La Rosa dei Venti
          </h1>

          {/* Separatore decorativo */}
          <div className="flex items-center gap-4 my-5">
            <div className="h-[1px] w-12 bg-white/20" />
            <Anchor size={14} className="text-brand-coral/70" />
            <div className="h-[1px] w-12 bg-white/20" />
          </div>

          <h2 className="font-serif text-xl md:text-2xl text-white/70 font-light tracking-wider mb-2">
            {language === 'it' ? '— Il Nostro Menu —' : '— Our Menu —'}
          </h2>
          <p className="text-white/40 text-xs font-mono tracking-wide max-w-md">
            {t('menu.subtitle')}
          </p>

          {/* Banner freschezza */}
          <div className="mt-8 flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <Fish size={12} className="text-brand-coral/80" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">
              {language === 'it' ? 'Pescato Fresco Ogni Giorno' : 'Fresh Catch Every Day'}
            </span>
            <Leaf size={12} className="text-emerald-400/60" />
          </div>
        </div>
      </div>

      {/* ── CORPO DEL MENU su sfondo quasi-nero elegante ── */}
      <div className="bg-[#0F1318] pb-20 pt-2">
        <div className="max-w-5xl mx-auto px-4 md:px-8">

          {/* Immagine decorativa laterale + nota freschezza */}
          <div className="flex flex-col md:flex-row gap-8 items-stretch mb-14 mt-8">
            {/* Immagine con clip creativo */}
            <div className="md:w-2/5 relative shrink-0 hidden md:block">
              <div
                className="w-full h-56 overflow-hidden rounded-xl"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }}
              >
                <img
                  src={g2Img}
                  alt="Piatti La Rosa dei Venti"
                  className="w-full h-full object-cover opacity-70"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0F1318]/60" />
              </div>
            </div>

            {/* Nota sulla freschezza */}
            <div className="flex-1 border border-white/8 rounded-xl p-6 bg-white/3 flex flex-col justify-center gap-3">
              <p className="font-mono text-[10px] uppercase tracking-widest text-brand-coral font-bold">
                {language === 'it' ? 'La nostra promessa' : 'Our Promise'}
              </p>
              <p className="text-white/55 text-sm font-light leading-relaxed">
                {t('menu.disclaimer')}
              </p>
            </div>
          </div>

          {/* ── TABS CATEGORIA ── */}
          <div id="menu-nav-tabs" className="flex flex-wrap gap-2.5 justify-start mb-12 border-b border-white/8 pb-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  id={`menu-tab-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-semibold tracking-wider uppercase border transition-all duration-300 cursor-pointer ${isActive
                    ? 'bg-brand-coral text-white border-brand-coral shadow-lg shadow-brand-coral/20'
                    : 'bg-transparent text-white/50 border-white/10 hover:border-white/30 hover:text-white/80'
                    }`}
                >
                  <Icon size={12} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* ── PIATTI ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
              className="flex flex-col gap-14"
            >
              {selectedCategory !== 'all' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredItems.map((item) => (
                    <MenuCard key={item.id} item={item} getTagStyle={getTagStyle} variants={cardVariants} t={t} />
                  ))}
                </div>
              ) : (
                categoriesList.map((catKey) => {
                  const categoryItems = menuItems.filter(item => item.category === catKey);
                  return (
                    <div key={catKey} id={`section-${catKey}`} className="flex flex-col gap-6 scroll-mt-24">
                      {/* Titolo sezione */}
                      <div className="flex items-center gap-4">
                        <div className="h-[1px] flex-1 bg-white/8" />
                        <div className="flex items-center gap-3 px-4">
                          <div className="w-2 h-2 rounded-full bg-brand-coral" />
                          <h2 className="font-serif italic text-2xl md:text-3xl font-light text-white/90 tracking-wide">
                            {categoryLabels[catKey]}
                          </h2>
                          <div className="w-2 h-2 rounded-full bg-brand-coral" />
                        </div>
                        <div className="h-[1px] flex-1 bg-white/8" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          {/* Footer del menu */}
          <div className="mt-16 border-t border-white/8 pt-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-white/20" />
              <Anchor size={14} className="text-brand-coral/50" />
              <div className="h-[1px] w-8 bg-white/20" />
            </div>
            <p className="font-serif italic text-white/30 text-sm">La Rosa dei Venti · Milano · Dal 1993</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/20 mt-2">
              Via Piero della Francesca, 34 · +39 02 345 37576
            </p>
          </div>
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
      className="bg-white/4 border border-white/8 hover:border-white/18 rounded-xl p-5 md:p-6 transition-all duration-300 flex flex-col justify-between gap-3 group hover:bg-white/7"
    >
      <div className="flex flex-col gap-2.5">
        {/* Header nome + prezzo */}
        <div className="flex justify-between items-start gap-4">
          <h3 className="font-serif text-base md:text-lg font-light text-white/90 group-hover:text-white transition-colors duration-300 leading-snug">
            {item.name}
          </h3>
          <span className="font-serif text-base font-semibold text-brand-coral shrink-0 whitespace-nowrap">
            € {item.price.toFixed(2).replace('.', ',')}
          </span>
        </div>

        {/* Linea divisoria sottile */}
        <div className="h-[1px] w-full bg-white/6" />

        {/* Descrizione */}
        {item.description && (
          <p className="text-white/40 text-xs leading-relaxed font-light">
            {item.description}
          </p>
        )}
      </div>

      {/* Tags */}
      {item.tags && item.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-1">
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
