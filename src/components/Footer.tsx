/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Compass, Instagram, Facebook, Anchor, ExternalLink, Music2, Award } from 'lucide-react';
import { PageType } from '../types';
import { useLanguage } from '../LanguageContext';

interface FooterProps {
  onPageSelect: (page: PageType) => void;
}

export default function Footer({ onPageSelect }: FooterProps) {
  const { t, language, restaurantInfo } = useLanguage();

  return (
    <footer
      id="main-footer"
      className="w-full bg-white text-brand-charcoal border-t border-brand-sand/20 pt-16 pb-8 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background design accents */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-sand/20 to-transparent" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12 relative z-10">

        {/* COL 1: BRANDING (4 Columns) */}
        <div className="md:col-span-4 flex flex-col gap-5">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onPageSelect('home')}>
            <Anchor size={24} className="text-brand-coral" />
            <h3 className="font-serif italic text-2xl tracking-wide group-hover:text-brand-coral transition-colors">{restaurantInfo.name}</h3>
          </div>
          <p className="text-brand-slate text-xs leading-relaxed max-w-sm font-light">
            {t('footer.description')}
          </p>
          {/* Socials */}
          <div className="flex gap-3 mt-2">
            <a
              href={restaurantInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-brand-sand/20 bg-brand-cream/50 flex items-center justify-center text-brand-charcoal hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all cursor-pointer"
              title="Instagram"
              aria-label="Instagram"
            >
              <Instagram size={14} />
            </a>
            <a
              href={restaurantInfo.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-brand-sand/20 bg-brand-cream/50 flex items-center justify-center text-brand-charcoal hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all cursor-pointer"
              title="Facebook"
              aria-label="Facebook"
            >
              <Facebook size={14} />
            </a>
            <a
              href={restaurantInfo.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-brand-sand/20 bg-brand-cream/50 flex items-center justify-center text-brand-charcoal hover:bg-black hover:text-[#25F4EE] hover:border-black transition-all cursor-pointer"
              title="TikTok"
              aria-label="TikTok"
            >
              <Music2 size={14} />
            </a>
            <a
              href={restaurantInfo.socials.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-brand-sand/20 bg-brand-cream/50 flex items-center justify-center text-brand-charcoal hover:bg-[#00AF87] hover:text-white hover:border-[#00AF87] transition-all cursor-pointer"
              title="TripAdvisor"
              aria-label="TripAdvisor"
            >
              TA
            </a>
          </div>
        </div>

        {/* COL 2: QUICK NAV (3 Columns) */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="font-mono text-[10px] uppercase tracking-widest text-brand-sand font-bold">{t('footer.navTitle')}</h4>
          <nav className="flex flex-col gap-2.5 text-xs font-mono uppercase tracking-widest text-brand-slate">
            <button
              onClick={() => onPageSelect('home')}
              className="hover:text-brand-coral text-left transition-colors cursor-pointer"
            >
              {t('footer.nav.home')}
            </button>
            <button
              onClick={() => onPageSelect('menu')}
              className="hover:text-brand-coral text-left transition-colors cursor-pointer"
            >
              {t('footer.nav.menu')}
            </button>
            <button
              onClick={() => onPageSelect('galleria')}
              className="hover:text-brand-coral text-left transition-colors cursor-pointer"
            >
              {t('footer.nav.gallery')}
            </button>
            <button
              onClick={() => onPageSelect('contatti')}
              className="hover:text-brand-coral text-left transition-colors cursor-pointer"
            >
              {t('footer.nav.contacts')}
            </button>
          </nav>
        </div>

        {/* COL 3: CONTACT INFOS (5 Columns) */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <h4 className="font-mono text-[10px] uppercase tracking-widest text-brand-sand font-bold">{t('footer.contactTitle')}</h4>
          <div className="flex flex-col gap-2.5 text-xs font-light text-brand-slate">
            <p className="flex items-start gap-2">
              <span className="font-semibold text-brand-charcoal">{t('footer.label.address')}</span>
              <span>{restaurantInfo.address}</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold text-brand-charcoal">{t('footer.label.phone')}</span>
              <a href={`tel:${restaurantInfo.phone}`} className="hover:text-brand-coral text-brand-charcoal font-medium transition-colors">
                {restaurantInfo.phone}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold text-brand-charcoal">{t('footer.label.email')}</span>
              <a href={`mailto:${restaurantInfo.email}`} className="hover:text-brand-coral text-brand-charcoal font-medium transition-colors">
                {restaurantInfo.email}
              </a>
            </p>
            <div className="mt-2 p-3 bg-brand-cream/50 border border-brand-sand/15 rounded-lg flex flex-col gap-2">
              <p className="text-[11px] font-semibold text-brand-coral uppercase tracking-wider">{t('footer.label.hours')}</p>
              <div className="flex flex-col gap-1.5 mt-1">
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-brand-slate font-medium">{language === 'it' ? 'Mar - Dom:' : 'Tue - Sun:'}</span>
                  <span className="text-brand-charcoal">{restaurantInfo.openingHours.weekdays}</span>
                </div>
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-brand-slate font-medium">{language === 'it' ? 'Lunedì:' : 'Monday:'}</span>
                  <span className="text-brand-coral font-bold">{restaurantInfo.openingHours.closed}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-6xl mx-auto border-t border-brand-sand/15 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono text-brand-slate/50">
        <p>© {new Date().getFullYear()} {t('footer.rights')}</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-brand-coral">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-brand-coral">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
