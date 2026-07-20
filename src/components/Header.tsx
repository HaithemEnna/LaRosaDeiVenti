/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Compass, Menu } from 'lucide-react';
import { PageType } from '../types';
import { useLanguage } from '../LanguageContext';

// Import Vite per ottimizzazione con hash e caching
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
      className="sticky top-0 z-40 w-full bg-brand-cream/90 border-b border-brand-sand/20 backdrop-blur-md py-3 md:py-4 px-4 sm:px-6 md:px-12 flex items-center justify-between gap-2"
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
          {/* Logo: above the fold → fetchPriority=high, NO lazy */}
          <img
            src={logoImg}
            alt="La Rosa dei Venti"
            className="w-full h-full object-cover rounded-full"
            fetchPriority="high"
            width="40"
            height="40"
          />
        </div>
        <div className="flex flex-col min-w-0">
          {/* Nome completo solo da sm in su */}
          <span className="font-serif italic text-lg sm:text-xl md:text-2xl text-brand-charcoal tracking-wide group-hover:text-brand-coral transition-colors duration-300 truncate">
            La Rosa dei Venti
          </span>
          <span className="hidden sm:block font-mono text-[9px] uppercase tracking-[0.25em] text-brand-sand">
            {t('nav.subtitle')}
          </span>
        </div>
      </div>

      {/* Navigation & Menu controller */}
      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
        {/* Desktop quick nav – visibile solo da lg */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-brand-charcoal/70">
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
            onClick={() => onPageSelect('storia')}
            className={`hover:text-brand-coral transition-colors cursor-pointer ${activePage === 'storia' ? 'text-brand-coral font-bold' : ''}`}
          >
            {t('nav.story')}
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

        {/* Language Selector – compatto su mobile */}
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
