/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Compass, Instagram, Facebook, Anchor, ExternalLink } from 'lucide-react';
import { PageType } from '../types';
import { useLanguage } from '../LanguageContext';

interface FooterProps {
  onPageSelect: (page: PageType) => void;
}

export default function Footer({ onPageSelect }: FooterProps) {
  const { t, restaurantInfo } = useLanguage();

  return (
    <footer
      id="main-footer"
      className="w-full bg-white text-brand-charcoal border-t border-brand-sand/20 pt-16 pb-8 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background design accents */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-sand/20 to-transparent" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">

        {/* COL 1: BRAND DETAIL (4 Columns) */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onPageSelect('home')}>
            <Anchor size={18} className="text-brand-coral" />
            <span className="font-serif italic text-xl text-brand-charcoal tracking-wide group-hover:text-brand-coral transition-colors">
              La Rosa dei Venti
            </span>
          </div>
          <p className="text-brand-slate text-xs font-light leading-relaxed">
            {t('footer.description')}
          </p>
          <div className="flex gap-3 mt-2">
            <a
              href={restaurantInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-brand-sand/20 bg-brand-cream/50 flex items-center justify-center text-brand-charcoal hover:text-brand-coral hover:border-brand-coral transition-all cursor-pointer"
              aria-label="Instagram"
            >
              <Instagram size={14} />
            </a>
            <a
              href={restaurantInfo.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-brand-sand/20 bg-brand-cream/50 flex items-center justify-center text-brand-charcoal hover:text-brand-coral hover:border-brand-coral transition-all cursor-pointer"
              aria-label="Facebook"
            >
              <Facebook size={14} />
            </a>
            <a
              href={restaurantInfo.socials.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-brand-sand/20 bg-brand-cream/50 flex items-center justify-center text-brand-charcoal hover:text-brand-coral hover:border-brand-coral transition-all cursor-pointer font-bold text-xs"
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
          <nav className="flex flex-col gap-2 text-xs font-light text-brand-slate">
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
              onClick={() => onPageSelect('storia')}
              className="hover:text-brand-coral text-left transition-colors cursor-pointer"
            >
              {t('footer.nav.story')}
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
            <div className="mt-2 p-3 bg-brand-cream/50 border border-brand-sand/15 rounded-lg flex flex-col gap-1">
              <p className="text-[11px] font-semibold text-brand-coral uppercase tracking-wider">{t('footer.label.hours')}</p>
              <p className="text-[10px] text-brand-charcoal">{restaurantInfo.openingHours.weekdays}</p>
              <p className="text-[10px] text-brand-coral font-bold">{restaurantInfo.openingHours.closed}</p>
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
