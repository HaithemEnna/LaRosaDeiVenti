/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, ChevronUp } from 'lucide-react';
import { PageType } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import CompassMenu from './components/CompassMenu';
import HomeView from './components/HomeView';
import MenuView from './components/MenuView';
import ContattiView from './components/ContattiView';
import GalleriaView from './components/GalleriaView';

export default function App() {
  const [activePage, setActivePage] = useState<PageType>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll handler to reveal Back-to-Top and optional floaters
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll back to top on page switches
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const renderActiveView = () => {
    switch (activePage) {
      case 'home':
        return <HomeView onPageSelect={setActivePage} onOpenMenu={() => setIsMenuOpen(true)} />;
      case 'menu':
        return <MenuView />;
      case 'galleria':
        return <GalleriaView />;
      case 'contatti':
        return <ContattiView />;
      default:
        return <HomeView onPageSelect={setActivePage} onOpenMenu={() => setIsMenuOpen(true)} />;
    }
  };

  return (
    <div id="restaurant-app-root" className="min-h-screen flex flex-col bg-brand-cream text-brand-charcoal selection:bg-brand-sand selection:text-brand-charcoal relative">
      {/* 1. Header Navigation */}
      <Header
        activePage={activePage}
        onPageSelect={setActivePage}
        onOpenMenu={() => setIsMenuOpen(true)}
      />

      {/* 2. Main Page Content with Animated Page Transitions */}
      <main className="flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="w-full"
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Footer Section */}
      <Footer onPageSelect={setActivePage} />

      {/* 4. Cardinal Compass Overlay Menu */}
      <CompassMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activePage={activePage}
        onPageSelect={setActivePage}
      />

      {/* 5. Floating Compass Button (appears in bottom corner for supreme micro-navigation) */}
      <motion.button
        id="floating-compass-trigger"
        onClick={() => setIsMenuOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-30 p-4 bg-brand-charcoal text-brand-sand border-2 border-brand-sand rounded-full shadow-[0_4px_25px_rgba(30,35,43,0.35)] cursor-pointer hover:bg-brand-sand hover:text-brand-charcoal active:scale-90 transition-all duration-300 group flex items-center justify-center"
        aria-label="Apri menu cardinale"
        title="Menu Navigazione Cardinale"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <Compass size={24} className="animate-[spin_20s_linear_infinite] group-hover:scale-105 transition-transform" />
      </motion.button>

      {/* 6. Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="back-to-top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-24 right-7 md:bottom-28 md:right-9 z-30 p-2.5 bg-brand-cream hover:bg-brand-sand-light text-brand-charcoal border border-brand-sand/35 rounded-full shadow-md cursor-pointer transition-colors flex items-center justify-center"
            aria-label="Torna in alto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            whileHover={{ scale: 1.05 }}
          >
            <ChevronUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
