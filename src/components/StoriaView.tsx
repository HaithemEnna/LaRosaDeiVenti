/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Clock, ShieldCheck, Heart, Users, Compass, BookOpen } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function StoriaView() {
  const { t, language, historyBlocks } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const blockVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      id="storia-view-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-brand-cream/30 py-12 md:py-16 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* EDITORIAL HEADER */}
        <div id="storia-header" className="text-center max-w-2xl mx-auto mb-10 md:mb-16 flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-coral font-bold">
            {language === 'it' ? 'Un Viaggio nel Tempo' : 'A Journey in Time'}
          </span>
          <h1 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-brand-charcoal tracking-wide">
            {t('nav.story')}
          </h1>
          <div className="w-12 h-[1px] bg-brand-sand mx-auto mt-2" />
          <p className="text-brand-slate text-sm font-light leading-relaxed mt-4">
            {language === 'it'
              ? 'Un legame sincero con le sponde della Sardegna, la passione di una famiglia e la ricerca costante della perfezione culinaria a Milano.'
              : 'A sincere bond with the shores of Sardinia, a family’s passion, and the constant search for culinary perfection in Milan.'}
          </p>
        </div>

        {/* CHEF'S QUOTE BOX */}
        <motion.div
          id="storia-quote"
          className="bg-white p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl border border-brand-sand/20 italic text-center text-brand-charcoal font-serif text-base sm:text-lg md:text-xl leading-relaxed mb-12 md:mb-20 relative shadow-sm"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl text-brand-sand font-serif">“</span>
          <p className="font-light">
            {language === 'it'
              ? '"Siamo guidati dallo stesso vento che spingeva i pescatori sardi a sfidare le onde. Per noi, cucinare significa onorare il mare, rispettare i tempi della natura e regalare ai nostri ospiti un porto sicuro dove riscoprire i sapori veri dell’infanzia."'
              : '"We are guided by the same wind that drove Sardinian fishermen to brave the waves. For us, cooking means honoring the sea, respecting nature\'s rhythm, and offering our guests a safe harbor to rediscover the authentic flavors of childhood."'}
          </p>
          <p className="mt-6 font-mono text-xs not-italic uppercase tracking-widest text-brand-coral font-bold">
            {language === 'it' ? '— La Famiglia della Rosa dei Venti' : '— The Family of La Rosa dei Venti'}
          </p>
        </motion.div>

        {/* VERTICAL TIMELINE SECTION */}
        <div className="relative border-l border-brand-sand/20 ml-4 md:ml-24 pl-6 md:pl-10 flex flex-col gap-10 md:gap-16 py-4 mb-12 md:mb-20">
          
          {historyBlocks.map((block, index) => (
            <motion.div
              key={index}
              variants={blockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="relative flex flex-col gap-3 group"
            >
              {/* Year badge positioned on the left side (desktop only, otherwise absolute card heading) */}
              <div className="hidden md:flex absolute -left-36 top-0 w-24 text-right flex-col">
                <span className="font-serif italic text-3xl font-bold text-brand-coral">
                  {block.year}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-brand-sand font-bold">
                  {language === 'it' ? 'TAPPA' : 'STEP'} {index + 1}
                </span>
              </div>

              {/* Central node on the timeline line */}
              <div className="absolute -left-[33px] md:-left-[41px] top-2.5 w-3 h-3 rounded-full bg-white border border-brand-coral group-hover:bg-brand-coral transition-colors duration-300" />
              
              {/* Card content */}
              <div className="bg-white p-6 rounded-2xl border border-brand-sand/15 shadow-sm hover:shadow-md transition-all duration-300">
                {/* Year tag for mobile only */}
                <span className="md:hidden font-serif italic text-2xl font-bold text-brand-coral block mb-2">
                  {block.year}
                </span>
                
                <h3 className="font-serif text-xl font-medium text-brand-charcoal mb-2">
                  {block.title}
                </h3>
                
                <p className="text-brand-slate text-xs md:text-sm font-light leading-relaxed">
                  {block.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CORE HISTORIC VALUES */}
        <div id="storia-values" className="border-t border-brand-sand/15 pt-16">
          <div className="text-center mb-12">
            <h2 className="font-serif italic text-2xl md:text-3xl font-medium text-brand-charcoal">
              {language === 'it' ? 'I Nostri Valori Fondanti' : 'Our Founding Values'}
            </h2>
            <p className="text-brand-slate text-xs font-mono uppercase tracking-widest mt-1">
              {language === 'it' ? 'Sulle rotte della qualità' : 'Sailing on quality courses'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full border border-brand-sand/30 flex items-center justify-center text-brand-coral bg-white shadow-sm">
                <ShieldCheck size={18} />
              </div>
              <h3 className="font-serif text-lg font-medium text-brand-charcoal">
                {language === 'it' ? 'Sostenibilità' : 'Sustainability'}
              </h3>
              <p className="text-brand-slate text-xs leading-relaxed font-light">
                {language === 'it'
                  ? 'Collaboriamo solo con fornitori locali e barche da pesca certificate, che promuovono pratiche di pesca responsabili e stagionali per proteggere l\'ecosistema marino.'
                  : 'We partner only with local suppliers and certified fishing boats that promote responsible and seasonal fishing practices to protect the marine ecosystem.'}
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full border border-brand-sand/30 flex items-center justify-center text-brand-coral bg-white shadow-sm">
                <Users size={18} />
              </div>
              <h3 className="font-serif text-lg font-medium text-brand-charcoal">
                {language === 'it' ? 'Cura del Personale' : 'Staff Welfare'}
              </h3>
              <p className="text-brand-slate text-xs leading-relaxed font-light">
                {language === 'it'
                  ? 'I nostri collaboratori storici sono parte integrante della nostra famiglia. Coltiviamo un clima sereno e coeso per garantire la massima passione e cura in ogni servizio.'
                  : 'Our long-standing staff are an integral part of our family. We cultivate a serene and cohesive environment to ensure maximum passion and care in every service.'}
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full border border-brand-sand/30 flex items-center justify-center text-brand-coral bg-white shadow-sm">
                <Compass size={18} />
              </div>
              <h3 className="font-serif text-lg font-medium text-brand-charcoal">
                {language === 'it' ? 'Rotte Future' : 'Future Routes'}
              </h3>
              <p className="text-brand-slate text-xs leading-relaxed font-light">
                {language === 'it'
                  ? 'Guardiamo al futuro perfezionando costantemente le nostre tecniche di cottura e abbattimento, garantendo standard igienico-sanitari d\'eccellenza culinaria moderna.'
                  : 'We look to the future by constantly perfecting our cooking and chilling techniques, guaranteeing hygiene and health standards of modern culinary excellence.'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
