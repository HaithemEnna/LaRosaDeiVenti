/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUp, ArrowRight, ArrowDown, ArrowLeft } from 'lucide-react';
import { PageType } from '../types';
import { useLanguage } from '../LanguageContext';

// Import Vite per caching ottimizzato
import logoImg from '../assets/images/minimal_rose_logo_1783090656063.jpg';

interface CompassMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activePage: PageType;
  onPageSelect: (page: PageType) => void;
}

export default function CompassMenu({ isOpen, onClose, activePage, onPageSelect }: CompassMenuProps) {
  const { t } = useLanguage();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle keypress to close (Esc)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Le translate sono calibrate per non uscire dallo schermo su mobile (375px+)
  // Su mobile: ~80px di offset; su sm: ~96px; su md: ~112px
  const menuItems = [
    {
      page: 'home' as PageType,
      label: t('nav.home'),
      sublabel: t('compass.north.sub'),
      direction: 'N',
      cardinalLabel: t('compass.north'),
      icon: ArrowUp,
      positionClass: 'top-0 left-1/2 -translate-x-1/2 -translate-y-[12vmin]',
      arrowClass: 'mb-1 text-brand-coral',
    },
    {
      page: 'menu' as PageType,
      label: t('nav.menu'),
      sublabel: t('compass.east.sub'),
      direction: 'E',
      cardinalLabel: t('compass.east'),
      icon: ArrowRight,
      positionClass: 'right-0 top-1/2 translate-x-[12vmin] -translate-y-1/2 text-right',
      arrowClass: 'ml-1 text-brand-coral inline-block',
    },
    {
      page: 'storia' as PageType,
      label: t('nav.story'),
      sublabel: t('compass.south.sub'),
      direction: 'S',
      cardinalLabel: t('compass.south'),
      icon: ArrowDown,
      positionClass: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-[12vmin]',
      arrowClass: 'mt-1 text-brand-coral',
    },
    {
      page: 'contatti' as PageType,
      label: t('nav.contacts'),
      sublabel: t('compass.west.sub'),
      direction: 'W',
      cardinalLabel: t('compass.west'),
      icon: ArrowLeft,
      positionClass: 'left-0 top-1/2 -translate-x-[12vmin] -translate-y-1/2 text-left',
      arrowClass: 'mr-1 text-brand-coral inline-block',
    },
  ];

  const handleSelect = (page: PageType) => {
    onPageSelect(page);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="compass-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/95 backdrop-blur-md overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(196,162,135,0.06)_0%,transparent_70%)] pointer-events-none" />

          {/* Close button */}
          <button
            id="btn-close-compass"
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 sm:p-3 text-brand-charcoal hover:text-brand-coral hover:scale-110 active:scale-95 border border-brand-sand/20 rounded-full bg-brand-cream/50 transition-all duration-300 group cursor-pointer shadow-sm"
            aria-label={t('compass.close')}
          >
            <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* MAIN COMPASS INTERACTIVE GRID */}
          {/* Scala ridotta su mobile per far stare i pulsanti nella viewport */}
          <div className="flex items-center justify-center origin-center z-10">
            <div className="relative w-[60vmin] h-[60vmin] flex items-center justify-center select-none">

              {/* Outer dotted compass rings */}
              <motion.div
                className="absolute inset-0 rounded-full border border-dashed border-brand-sand/35 scale-105 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
              />
              <div
                className="absolute inset-3 rounded-full border border-brand-sand/15 pointer-events-none"
              />

              {/* Cross lines (N-S, E-W) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[100%] h-[1px] bg-gradient-to-r from-transparent via-brand-sand/25 to-transparent" />
                <div className="h-[150%] w-[1px] bg-gradient-to-b from-transparent via-brand-sand/25 to-transparent absolute" />
              </div>

              {/* CENTRAL LOGO ROSE */}
              <motion.div
                id="central-compass-rose"
                className="relative w-[40vmin] h-[40vmin] rounded-full bg-white border-2 border-brand-sand/40 shadow-[0_4px_20px_rgba(196,162,135,0.15)] z-10 flex items-center justify-center overflow-hidden cursor-pointer group"
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 45 }}
                transition={{ type: 'spring', stiffness: 80, damping: 15 }}
                onClick={onClose}
                whileHover={{ scale: 1.05 }}
              >
                {/* Lazy: l'overlay è nascosto al caricamento iniziale */}
                <img
                  src={logoImg}
                  alt="La Rosa dei Venti Logo"
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-30 transition-all duration-700 ease-out brightness-105"
                  loading="lazy"
                  decoding="async"
                  width="112"
                  height="112"
                />

                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/80 transition-all duration-300 flex items-center justify-center">
                  <span className="text-brand-coral font-mono text-[10px] font-bold tracking-wider opacity-0 group-hover:opacity-100 uppercase transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    {t('compass.close')}
                  </span>
                </div>
              </motion.div>

              {/* CARDINAL NAV LINKS */}
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const isSelected = activePage === item.page;

                return (
                  <motion.button
                    key={item.page}
                    id={`compass-nav-${item.page}`}
                    onClick={() => handleSelect(item.page)}
                    className={`absolute ${item.positionClass} z-20 flex flex-col items-center justify-center text-center p-1 focus:outline-none cursor-pointer group`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{
                      type: 'spring',
                      stiffness: 70,
                      damping: 12,
                      delay: 0.15 + index * 0.05,
                    }}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-[10px] sm:text-xs font-mono font-bold text-brand-coral tracking-widest uppercase mb-0.5">
                        {item.direction}
                      </span>
                      <div className="w-1 h-1 rounded-full bg-brand-coral/40 mb-1 group-hover:bg-brand-coral group-hover:scale-125 transition-all duration-300" />
                    </div>

                    {/* Main label */}
                    <span className={`font-serif text-xs sm:text-sm md:text-base font-medium tracking-wide transition-all duration-300 block whitespace-nowrap ${isSelected
                      ? 'text-brand-coral border-b border-brand-coral pb-0.5'
                      : 'text-brand-charcoal group-hover:text-brand-coral'
                      }`}>
                      {item.label}
                    </span>

                    {/* Secondary description – solo da sm */}
                    <span className="hidden sm:block text-[8px] sm:text-[9px] font-mono uppercase tracking-[0.2em] text-brand-slate mt-0.5 group-hover:text-brand-charcoal transition-colors duration-300">
                      {item.sublabel}
                    </span>

                    <div className="absolute -inset-1 border border-transparent rounded-lg scale-95 group-hover:scale-100 group-hover:border-brand-sand/15 transition-all duration-500" />
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
