/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Compass, Award, Heart, Anchor, Star, ChevronRight } from 'lucide-react';
import { PageType } from '../types';
import { useLanguage } from '../LanguageContext';

// Importa le immagini come moduli Vite: ottiene l'URL ottimizzato con hash per cache busting
import logoImg from '../assets/images/minimal_rose_logo_1783090656063.jpg';
import heroImg from '../assets/images/hero_image.jpg';
import foodExampleImg from '../assets/images/food_example.jpg';
import GalleryPreview from './GalleryPreview';

interface HomeViewProps {
  onPageSelect: (page: PageType) => void;
  onOpenMenu: () => void;
}

export default function HomeView({ onPageSelect, onOpenMenu }: HomeViewProps) {
  const { t, restaurantInfo, testimonials } = useLanguage();

  // Anim variant helpers
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      id="home-view-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full flex flex-col bg-brand-cream/40"
    >
      {/* 1. HERO BANNER – altezza adattiva per mobile */}
      <section id="home-hero" className="relative w-full h-[65vh] sm:h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden border-b border-brand-sand/20">
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* Hero bg: fetchpriority=high perché è above the fold, NO lazy loading */}
          <img
            src={heroImg}
            alt="La Rosa dei Venti Atmosfera"
            className="w-full h-full object-cover filter brightness-[1.05] opacity-30"
            fetchPriority="high"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/10 via-transparent to-brand-cream/95" />
        </div>

        {/* Content Box */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center z-10 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4 sm:mb-6 rounded-full border border-brand-sand/30 p-1 flex items-center justify-center bg-white shadow-sm"
          >
            {/* Logo above the fold: NO lazy, fetchpriority=high */}
            <img
              src={logoImg}
              alt="Logo La Rosa dei Venti"
              className="w-full h-full object-cover rounded-full"
              fetchPriority="high"
              width="96"
              height="96"
            />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif italic text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-brand-charcoal tracking-wide leading-tight text-center"
          >
            La Rosa dei Venti
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-brand-coral mt-3 sm:mt-4 mb-6 sm:mb-8 font-semibold text-center"
          >
            {restaurantInfo.tagline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto"
          >
            <button
              id="hero-btn-menu"
              onClick={() => onPageSelect('menu')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full bg-brand-charcoal text-white font-mono text-xs font-bold tracking-widest uppercase shadow-sm hover:bg-brand-slate active:scale-95 transition-all duration-300 cursor-pointer"
            >
              {t('home.discoverMenu')}
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. THE SIGN INSIGNIA INTRODUCTION */}
      <section id="home-concept" className="w-full py-12 md:py-20 px-4 sm:px-6 bg-white text-brand-charcoal border-b border-brand-sand/15">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

          <motion.div variants={itemVariants} className="md:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Anchor size={14} className="text-brand-coral" />
              <span className="font-mono text-xs uppercase tracking-widest text-brand-coral font-bold">{t('home.philosophy')}</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl tracking-tight leading-tight">
              {t('home.philosophyTitle')}
            </h2>

            <p className="text-brand-slate text-sm leading-relaxed md:text-base font-light">
              {t('home.philosophyP1')}
            </p>
            <p className="text-brand-slate text-sm leading-relaxed md:text-base font-light">
              {t('home.philosophyP2')}
            </p>

            <div className="mt-2 md:mt-4">
              <button
                id="btn-read-history"
                onClick={() => onPageSelect('storia')}
                className="font-mono text-xs font-bold uppercase tracking-widest text-brand-coral hover:text-brand-charcoal transition-colors duration-300 flex items-center gap-1 cursor-pointer group"
              >
                {t('home.readHistory')}
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-5 relative">
            <div className="relative p-6 sm:p-8 rounded-2xl bg-brand-cream border border-brand-sand/40 text-brand-charcoal shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-brand-sand/30 p-1 mb-4 sm:mb-6 bg-white shadow-sm">
                {/* Lazy: sotto la fold su mobile */}
                <img
                  src={logoImg}
                  alt="Rosa dei Venti"
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                  decoding="async"
                  width="80"
                  height="80"
                />
              </div>
              <h3 className="font-serif italic text-xl sm:text-2xl text-brand-charcoal tracking-wide mb-1">La Rosa dei Venti</h3>
              <p className="font-mono text-[9px] uppercase tracking-widest text-brand-sand mb-4 sm:mb-6">{t('nav.subtitle')}</p>

              <div className="w-full h-[1px] bg-brand-sand/20 my-2" />

              <div className="flex flex-col gap-3 font-mono text-[11px] text-brand-charcoal/80 text-left w-full px-2">
                <div className="flex justify-between border-b border-brand-sand/10 pb-2">
                  <span className="text-brand-coral/80 font-semibold">{t('home.card.kitchen')}</span>
                  <span>{t('home.card.kitchenVal')}</span>
                </div>
                <div className="flex justify-between border-b border-brand-sand/10 pb-2">
                  <span className="text-brand-coral/80 font-semibold">{t('home.card.opening')}</span>
                  <span>{t('home.card.openingVal')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-coral/80 font-semibold">{t('home.card.zone')}</span>
                  <span>{t('home.card.zoneVal')}</span>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-brand-sand/30 pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-brand-sand/30 pointer-events-none" />
          </motion.div>

        </div>
      </section>

      {/* 3. THREE CORE VALUES */}
      <section id="home-pillars" className="w-full py-12 md:py-16 px-4 sm:px-6 bg-brand-cream/30 text-brand-charcoal border-b border-brand-sand/15">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">

          <motion.div variants={itemVariants} className="bg-white p-6 sm:p-8 rounded-xl border border-brand-sand/20 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-brand-sand-light/50 flex items-center justify-center text-brand-coral">
              <Award size={20} />
            </div>
            <h3 className="font-serif text-xl font-medium">{t('home.pillars.p1.title')}</h3>
            <p className="text-brand-slate text-xs leading-relaxed">
              {t('home.pillars.p1.text')}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-6 sm:p-8 rounded-xl border border-brand-sand/20 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-brand-sand-light/50 flex items-center justify-center text-brand-coral">
              <Anchor size={18} />
            </div>
            <h3 className="font-serif text-xl font-medium">{t('home.pillars.p2.title')}</h3>
            <p className="text-brand-slate text-xs leading-relaxed">
              {t('home.pillars.p2.text')}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-6 sm:p-8 rounded-xl border border-brand-sand/20 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-brand-sand-light/50 flex items-center justify-center text-brand-coral">
              <Heart size={18} />
            </div>
            <h3 className="font-serif text-xl font-medium">{t('home.pillars.p3.title')}</h3>
            <p className="text-brand-slate text-xs leading-relaxed">
              {t('home.pillars.p3.text')}
            </p>
          </motion.div>

        </div>
      </section>

      {/* 4. DISH PROMO */}
      <section id="home-featured-dish" className="w-full py-12 md:py-20 px-4 sm:px-6 bg-white text-brand-charcoal border-b border-brand-sand/15">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

          <motion.div variants={itemVariants} className="md:col-span-5 aspect-4/3 rounded-2xl overflow-hidden border border-brand-sand/30 shadow-sm">
            {/* Lazy: fuori dalla fold iniziale */}
            <img
              src={foodExampleImg}
              alt="Gourmet Seafood Plate"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
              decoding="async"
              width="600"
              height="450"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-7 flex flex-col gap-5">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-coral font-bold">{t('home.promo.tag')}</span>
            <h2 className="font-serif italic text-2xl sm:text-3xl md:text-5xl text-brand-charcoal tracking-wide">
              {t('home.promo.title')}
            </h2>
            <p className="text-brand-slate text-sm leading-relaxed md:text-base font-light">
              {t('home.promo.text1')}
            </p>
            <p className="text-brand-slate text-sm leading-relaxed md:text-base font-light">
              {t('home.promo.text2')}
            </p>

            <div className="pt-2">
              <button
                id="btn-discover-menu-full"
                onClick={() => onPageSelect('menu')}
                className="px-6 py-3 rounded-full bg-brand-charcoal hover:bg-brand-slate text-white font-mono text-xs font-bold tracking-widest uppercase shadow-sm transition-all duration-300 cursor-pointer"
              >
                {t('home.promo.btn')}
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* GALLERY PREVIEW - DIARIO DI BORDO FOTOGRAFICO */}
      <GalleryPreview onPageSelect={onPageSelect} />

      {/* 5. TESTIMONIALS */}
      <section id="home-testimonials" className="w-full py-12 md:py-20 px-4 sm:px-6 bg-brand-cream/20 text-brand-charcoal">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-10 md:gap-12">

          <motion.div variants={itemVariants} className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-coral font-bold">{t('home.reviews.tag')}</span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-tight">{t('home.reviews.title')}</h2>
            <div className="w-12 h-[1px] bg-brand-sand mx-auto mt-2" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white p-6 rounded-2xl border border-brand-sand/15 flex flex-col justify-between text-left shadow-sm relative group hover:border-brand-sand/40 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="absolute top-4 right-4 text-brand-sand/40 font-serif text-4xl opacity-40 pointer-events-none">"</div>

                <div className="flex flex-col gap-4">
                  {/* Stars */}
                  <div className="flex gap-1 text-brand-gold">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={11} fill="currentColor" className="text-brand-sand" />
                    ))}
                  </div>

                  <p className="text-brand-slate text-xs italic leading-relaxed">
                    "{t.text}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-sand/10 flex justify-between items-center text-[11px] font-mono">
                  <span className="font-bold text-brand-charcoal">{t.author}</span>
                  <span className="text-brand-coral">{t.source}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-6 text-center">
            <p className="text-brand-slate text-xs font-mono">
              {t('home.reviews.footer')}
            </p>
            <a
              href={restaurantInfo.socials.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-brand-coral hover:text-brand-charcoal font-bold font-mono tracking-wider uppercase mt-2 transition-colors cursor-pointer"
            >
              {t('home.reviews.link')}
              <Star size={11} className="fill-brand-coral text-brand-coral" />
            </a>
          </motion.div>

        </div>
      </section>
    </motion.div>
  );
}
