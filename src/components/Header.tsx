/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Anchor, CalendarCheck } from 'lucide-react';
import { PageType } from '../types';
import { useLanguage } from '../LanguageContext';

import logoImg from '../assets/images/minimal_rose_logo_1783090656063.jpg';

interface HeaderProps {
  onOpenMenu: () => void;
  activePage: PageType;
  onPageSelect: (page: PageType) => void;
}

export default function Header({ onOpenMenu, activePage, onPageSelect }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <motion.header
      id="main-header"
      className="sticky top-0 z-50 w-full bg-brand-cream/95 border-b border-brand-sand/20 backdrop-blur-md py-3 md:py-4 px-4 sm:px-6 md:px-10 flex items-center justify-between gap-2"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 50, damping: 15 }}
    >
      {/* Brand Logo & Name */}
      <div
        id="header-brand-container"
        className="flex items-center gap-2 sm:gap-3 cursor-pointer group select-none min-w-0"
        onClick={() => onPageSelect('home')}
      >
        <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-brand-sand/40 overflow-hidden bg-white flex items-center justify-center p-0.5 group-hover:border-brand-sand group-hover:scale-105 transition-all duration-300 shrink-0">
          <img src={logoImg} alt="La Rosa dei Venti" className="w-full h-full object-cover rounded-full" fetchPriority="high" width="40" height="40" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="font-serif italic text-lg sm:text-xl md:text-2xl text-brand-charcoal tracking-wide group-hover:text-brand-coral transition-colors duration-300 truncate">
            La Rosa dei Venti
          </span>
          <span className="hidden sm:block font-mono text-[9px] uppercase tracking-[0.25em] text-brand-sand">
            {t('nav.subtitle')}
          </span>
        </div>
      </div>

      {/* Right side: nav + prenota + lingua */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">

        {/* Desktop quick nav */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-mono uppercase tracking-widest text-brand-charcoal/70 mr-2">
          <button
            onClick={() => onPageSelect('home')}
            className={`hover:text-brand-coral transition-colors cursor-pointer ${activePage === 'home' ? 'text-brand-coral font-bold' : ''}`}
          >
            {t('nav.home')}
          </button>
          <span className="text-brand-sand/30">•</span>
          <button
            onClick={() => onPageSelect('menu')}
            className={`hover:text-brand-coral transition-colors cursor-pointer ${activePage === 'menu' ? 'text-brand-coral font-bold' : ''}`}
          >
            {t('nav.menu')}
          </button>
          <span className="text-brand-sand/30">•</span>
          <button
            onClick={() => onPageSelect('galleria')}
            className={`hover:text-brand-coral transition-colors cursor-pointer ${activePage === 'galleria' ? 'text-brand-coral font-bold' : ''}`}
          >
            {t('nav.gallery')}
          </button>
          <span className="text-brand-sand/30">•</span>
          <button
            onClick={() => onPageSelect('contatti')}
            className={`hover:text-brand-coral transition-colors cursor-pointer ${activePage === 'contatti' ? 'text-brand-coral font-bold' : ''}`}
          >
            {t('nav.contacts')}
          </button>
        </nav>

        {/* ── PULSANTE PRENOTA TAVOLO ── */}
        <motion.button
          id="header-btn-prenota"
          onClick={() => onPageSelect('contatti')}
          className="flex items-center gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-brand-coral text-white font-mono text-[9px] sm:text-xs font-bold tracking-widest uppercase shadow-md hover:bg-brand-charcoal active:scale-95 transition-all duration-300 cursor-pointer border border-brand-coral hover:border-brand-charcoal whitespace-nowrap"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          title={language === 'it' ? 'Prenota un tavolo' : 'Book a table'}
        >
          <CalendarCheck size={14} className="shrink-0" />
          <span className="whitespace-nowrap">
            {language === 'it' ? 'Prenota un Tavolo' : 'Book a Table'}
          </span>
        </motion.button>

        {/* Language Selector */}
        <button
          onClick={() => setLanguage(language === 'it' ? 'en' : 'it')}
          className="px-2 sm:px-3 py-1.5 rounded-full border border-brand-sand/30 hover:border-brand-coral hover:text-brand-coral font-mono text-[10px] font-bold tracking-wider text-brand-charcoal/80 transition-all duration-300 cursor-pointer flex items-center gap-1 bg-white/60 shadow-sm"
          title={language === 'it' ? 'Switch to English' : 'Passa in Italiano'}
        >
          <span className={language === 'it' ? 'text-brand-coral' : 'text-brand-charcoal/40'}>IT</span>
          <span className="text-brand-sand/35">|</span>
          <span className={language === 'en' ? 'text-brand-coral' : 'text-brand-charcoal/40'}>EN</span>
        </button>
      </div>
    </motion.header>
  );
}
