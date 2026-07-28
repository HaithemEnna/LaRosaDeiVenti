/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Compass, Award, Heart, Anchor, Star, ChevronRight, ChevronDown, UtensilsCrossed, Camera, MapPin } from 'lucide-react';
import { PageType } from '../types';
import { useLanguage } from '../LanguageContext';

import logoImg from '../assets/images/minimal_rose_logo_1783090656063.jpg';
import heroImg from '../assets/images/hero_image.jpg';
import foodExampleImg from '../assets/images/food_example.jpg';
import GalleryPreview from './GalleryPreview';

import g2 from '../assets/images/g_img_2d.jpg';
import g4 from '../assets/images/g_img_4a.jpg';
import g1 from '../assets/images/g_img_1a.jpg';

interface HomeViewProps {
  onPageSelect: (page: PageType) => void;
  onOpenMenu: () => void;
}

export default function HomeView({ onPageSelect, onOpenMenu }: HomeViewProps) {
  const { t, restaurantInfo, testimonials } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.div
      id="home-view-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full flex flex-col bg-brand-cream/40"
    >
      {/* 1. HERO BANNER – si adatta perfettamente allo spazio rimanente dello schermo ma garantisce un margine minimo */}
      <section id="home-hero" className="relative w-full min-h-[calc(100dvh-4.5rem)] py-12 sm:py-16 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="La Rosa dei Venti Atmosfera"
            className="w-full h-full object-cover"
            fetchPriority="high"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/70 via-brand-deep/80 to-brand-deep/98" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")' }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center z-10 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="w-20 h-20 sm:w-24 sm:h-24 mb-6 rounded-full border-2 border-white/20 p-1 flex items-center justify-center bg-white/10 backdrop-blur-sm shadow-2xl"
          >
            <img src={logoImg} alt="Logo La Rosa dei Venti" className="w-full h-full object-cover rounded-full" fetchPriority="high" width="96" height="96" />
          </motion.div>

          <motion.p variants={itemVariants} className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.35em] text-white/60 mb-3 font-medium">
            {restaurantInfo.tagline}
          </motion.p>

          <motion.h1 variants={itemVariants} className="font-serif italic text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-white tracking-wide leading-tight text-center drop-shadow-2xl">
            La Rosa dei Venti
          </motion.h1>

          <motion.div variants={itemVariants} className="flex items-center gap-4 my-6 sm:my-8 w-full justify-center">
            <div className="h-[1px] w-16 bg-brand-coral/60" />
            <Anchor size={14} className="text-brand-coral/80" />
            <div className="h-[1px] w-16 bg-brand-coral/60" />
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto">
            <button
              id="hero-btn-menu"
              onClick={() => onPageSelect('menu')}
              className="w-full sm:w-auto px-8 sm:px-10 py-3.5 rounded-full bg-brand-coral text-white font-mono text-xs font-bold tracking-widest uppercase shadow-lg hover:bg-white hover:text-brand-coral active:scale-95 transition-all duration-300 cursor-pointer border border-brand-coral"
            >
              {t('home.discoverMenu')}
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. FILOSOFIA */}
      <section id="home-concept" className="w-full py-16 md:py-24 px-4 sm:px-6 bg-white text-brand-charcoal border-b border-brand-sand/15">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <motion.div variants={itemVariants} className="md:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Anchor size={14} className="text-brand-coral" />
              <span className="font-mono text-xs uppercase tracking-widest text-brand-coral font-bold">{t('home.philosophy')}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-brand-charcoal">{t('home.philosophyTitle')}</h2>
            <p className="text-brand-slate text-sm leading-relaxed md:text-base font-light">{t('home.philosophyP1')}</p>
            <p className="text-brand-slate text-sm leading-relaxed md:text-base font-light">{t('home.philosophyP2')}</p>
            <div className="mt-2 md:mt-4">
              <button id="btn-read-history" onClick={() => onPageSelect('galleria')} className="font-mono text-xs font-bold uppercase tracking-widest text-brand-coral hover:text-brand-charcoal transition-colors duration-300 flex items-center gap-1 cursor-pointer group">
                {t('home.readHistory')}
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-5 relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/5]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)' }}>
              <img src={foodExampleImg} alt="Piatto tipico La Rosa dei Venti" className="w-full h-full object-cover" loading="lazy" decoding="async" width="500" height="625" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-xl border border-brand-sand/20 flex flex-col">
              <span className="font-mono text-[9px] uppercase tracking-widest text-brand-coral font-bold">Dal</span>
              <span className="font-serif italic text-3xl text-brand-charcoal leading-none">1993</span>
            </div>
            <div className="absolute -top-3 -right-3 w-10 h-10 border-t-2 border-r-2 border-brand-coral/40 pointer-events-none rounded-tr-lg" />
          </motion.div>
        </div>
      </section>

      {/* 3. TRE VALORI */}
      <section id="home-pillars" className="w-full py-14 md:py-20 px-4 sm:px-6 bg-brand-deep text-white border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand-coral font-bold">La nostra promessa</span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mt-2 text-white tracking-wide">Tre Ragioni per Sceglierci</h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {[{ icon: Award, title: t('home.pillars.p1.title'), text: t('home.pillars.p1.text') }, { icon: Anchor, title: t('home.pillars.p2.title'), text: t('home.pillars.p2.text') }, { icon: Heart, title: t('home.pillars.p3.title'), text: t('home.pillars.p3.text') }].map(({ icon: Icon, title, text }, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl flex flex-col gap-4 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-brand-coral/15 flex items-center justify-center text-brand-coral border border-brand-coral/20 group-hover:bg-brand-coral group-hover:text-white transition-all duration-300">
                  <Icon size={20} />
                </div>
                <h3 className="font-serif text-xl font-medium text-white">{title}</h3>
                <p className="text-white/60 text-xs leading-relaxed font-light">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MICHELIN */}
      <section id="home-michelin-guide" className="w-full py-20 px-6 bg-white text-brand-charcoal border-b border-brand-sand/15">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div variants={itemVariants} className="md:col-span-5 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-brand-sand/20 shadow-xl relative group" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 12% 100%, 0 88%)' }}>
              <img src="https://prod-pics.guide.michelin.com/api/public/content/c9ea0827bac24b4bbe27d9b6e5bfee76.jpeg?w=800&h=800&format=webp&org_if_sml=1" alt="La Rosa dei Venti in Michelin Guide" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute top-4 left-4 bg-[#E1001A] text-white p-2.5 rounded-xl font-bold flex items-center gap-1 shadow-md text-xs tracking-wider uppercase font-mono">
                <span className="inline-block text-[14px] leading-none animate-[spin_10s_linear_infinite]">❃</span>
                MICHELIN
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="md:col-span-7 flex flex-col gap-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#E1001A]/10 text-[#E1001A] font-mono text-[10px] font-bold uppercase tracking-widest self-start border border-[#E1001A]/20">
              <span className="w-1.5 h-1.5 bg-[#E1001A] rounded-full animate-pulse" />
              {t('home.promo.tag')}
            </div>
            <div className="flex flex-col gap-1.5">
              <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide">{t('home.promo.title')}</h2>
              <p className="text-xs text-brand-slate font-mono tracking-wide">{t('home.promo.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-1">
              <div className="bg-brand-cream border border-brand-sand/20 rounded-xl p-3 text-left">
                <span className="block text-[10px] font-mono text-brand-coral uppercase tracking-wider font-semibold">{t('home.card.kitchen')}</span>
                <span className="text-xs text-brand-charcoal font-medium">{t('home.promo.cuisine')}</span>
              </div>
              <div className="bg-brand-cream border border-brand-sand/20 rounded-xl p-3 text-left">
                <span className="block text-[10px] font-mono text-brand-coral uppercase tracking-wider font-semibold">PREZZO / PRICE:</span>
                <span className="text-xs text-brand-charcoal font-bold tracking-wide">{t('home.promo.price')}</span>
              </div>
              <div className="bg-brand-cream border border-brand-sand/20 rounded-xl p-3 text-left">
                <span className="block text-[10px] font-mono text-brand-coral uppercase tracking-wider font-semibold">FEEDBACK:</span>
                <span className="text-xs text-brand-charcoal font-medium">{t('home.promo.likes')}</span>
              </div>
            </div>
            <p className="text-brand-slate text-xs sm:text-sm leading-relaxed font-light border-l-2 border-[#E1001A]/40 pl-4 py-1 italic">"{t('home.promo.text')}"</p>
            <div className="pt-2">
              <a id="btn-michelin-guide" href={t('home.promo.link')} target="_blank" rel="noopener noreferrer" className="inline-flex px-6 py-3.5 rounded-full bg-[#E1001A] hover:bg-[#c20016] text-white font-mono text-xs font-bold tracking-widest uppercase shadow-sm transition-all duration-300 cursor-pointer items-center justify-center gap-2 group hover:shadow-md">
                {t('home.promo.btn')}
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. GALLERY PREVIEW – usa blu nella sezione "Scorci e Sapori" */}
      <GalleryPreview onPageSelect={onPageSelect} />

      {/* 6. SEZIONE NAVIGAZIONE – solo Menu e Contatti (Galleria è già sopra) */}
      <section id="home-explore-nav" className="w-full py-16 md:py-24 px-4 sm:px-6 bg-brand-cream border-b border-brand-sand/15">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand-coral font-bold block mb-2">{t('home.explore.tag')}</span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-charcoal tracking-wide">{t('home.explore.title')}</h2>
            <div className="w-12 h-[1px] bg-brand-sand mx-auto mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card Menu */}
            <motion.div
              variants={itemVariants}
              id="nav-card-menu"
              onClick={() => onPageSelect('menu')}
              className="relative overflow-hidden rounded-2xl cursor-pointer group aspect-[4/3]"
            >
              <img src={g2} alt={t('home.explore.menu.title')} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="w-10 h-10 rounded-full bg-brand-coral/20 backdrop-blur-sm border border-brand-coral/40 flex items-center justify-center mb-4 group-hover:bg-brand-coral transition-colors duration-300">
                  <UtensilsCrossed size={18} className="text-white" />
                </div>
                <h3 className="font-serif italic text-2xl text-white mb-1">{t('home.explore.menu.title')}</h3>
                <p className="text-white/60 text-xs font-mono uppercase tracking-widest mb-3">{t('home.explore.menu.desc')}</p>
                <div className="flex items-center gap-1 text-brand-coral font-mono text-xs font-bold uppercase tracking-widest group-hover:gap-2 transition-all duration-300">
                  {t('home.explore.menu.btn')} <ChevronRight size={12} />
                </div>
              </div>
            </motion.div>

            {/* Card Contatti */}
            <motion.div
              variants={itemVariants}
              id="nav-card-contatti"
              onClick={() => onPageSelect('contatti')}
              className="relative overflow-hidden rounded-2xl cursor-pointer group aspect-[4/3]"
            >
              <img src={g4} alt={t('home.explore.contacts.title')} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="w-10 h-10 rounded-full bg-brand-coral/20 backdrop-blur-sm border border-brand-coral/40 flex items-center justify-center mb-4 group-hover:bg-brand-coral transition-colors duration-300">
                  <MapPin size={18} className="text-white" />
                </div>
                <h3 className="font-serif italic text-2xl text-white mb-1">{t('home.explore.contacts.title')}</h3>
                <p className="text-white/60 text-xs font-mono uppercase tracking-widest mb-3">{t('home.explore.contacts.desc')}</p>
                <div className="flex items-center gap-1 text-brand-coral font-mono text-xs font-bold uppercase tracking-widest group-hover:gap-2 transition-all duration-300">
                  {t('home.explore.contacts.btn')} <ChevronRight size={12} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIANZE */}
      <section id="home-testimonials" className="w-full py-12 md:py-20 px-4 sm:px-6 bg-white text-brand-charcoal">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-10 md:gap-12">
          <motion.div variants={itemVariants} className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-coral font-bold">{t('home.reviews.tag')}</span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-tight text-brand-charcoal">{t('home.reviews.title')}</h2>
            <div className="w-12 h-[1px] bg-brand-sand mx-auto mt-2" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, idx) => (
              <motion.div key={idx} variants={itemVariants} className="bg-brand-cream p-6 rounded-2xl border border-brand-sand/20 flex flex-col justify-between text-left shadow-sm relative group hover:border-brand-sand/50 hover:shadow-md transition-all duration-300" whileHover={{ y: -4 }}>
                <div className="absolute top-4 right-4 text-brand-sand/30 font-serif text-5xl opacity-40 pointer-events-none leading-none">"</div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" className="text-brand-gold" />
                    ))}
                  </div>
                  <p className="text-brand-slate text-xs italic leading-relaxed">"{t.text}"</p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-sand/20 flex justify-between items-center text-[11px] font-mono">
                  <span className="font-bold text-brand-charcoal">{t.author}</span>
                  <span className="text-brand-coral font-semibold">{t.source}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div variants={itemVariants} className="mt-6 text-center">
            <p className="text-brand-slate text-xs font-mono">{t('home.reviews.footer')}</p>
            <a href={restaurantInfo.socials.tripadvisor} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-brand-coral hover:text-brand-charcoal font-bold font-mono tracking-wider uppercase mt-2 transition-colors cursor-pointer">
              {t('home.reviews.link')}
              <Star size={11} className="fill-brand-coral text-brand-coral" />
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
