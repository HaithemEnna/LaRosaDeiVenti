/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Info, Bus, Anchor } from 'lucide-react';
import { ContactFormType } from '../types';
import { useLanguage } from '../LanguageContext';

import logoImg from '../assets/images/minimal_rose_logo_1783090656063.jpg';
import g5Img from '../assets/images/g_img_5d.jpg';

export default function ContattiView() {
  const { t, language, restaurantInfo } = useLanguage();
  const [formData, setFormData] = useState<ContactFormType>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg(language === 'it' ? 'Per favore, compila tutti i campi obbligatori (*).' : 'Please, fill in all required fields (*).');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  // Orari giornalieri estesi
  const dailyHours = language === 'it'
    ? [
        { day: 'Lunedì',    hours: 'Chiuso', closed: true },
        { day: 'Martedì',   hours: '12:00 – 14:30 · 19:00 – 23:30', closed: false },
        { day: 'Mercoledì', hours: '12:00 – 14:30 · 19:00 – 23:30', closed: false },
        { day: 'Giovedì',   hours: '12:00 – 14:30 · 19:00 – 23:30', closed: false },
        { day: 'Venerdì',   hours: '12:00 – 14:30 · 19:00 – 23:30', closed: false },
        { day: 'Sabato',    hours: '12:00 – 14:30 · 19:00 – 23:30', closed: false },
        { day: 'Domenica',  hours: '12:00 – 14:30 · 19:00 – 23:30', closed: false },
      ]
    : [
        { day: 'Monday',    hours: 'Closed', closed: true },
        { day: 'Tuesday',   hours: '12:00 – 2:30 PM · 7:00 – 11:30 PM', closed: false },
        { day: 'Wednesday', hours: '12:00 – 2:30 PM · 7:00 – 11:30 PM', closed: false },
        { day: 'Thursday',  hours: '12:00 – 2:30 PM · 7:00 – 11:30 PM', closed: false },
        { day: 'Friday',    hours: '12:00 – 2:30 PM · 7:00 – 11:30 PM', closed: false },
        { day: 'Saturday',  hours: '12:00 – 2:30 PM · 7:00 – 11:30 PM', closed: false },
        { day: 'Sunday',    hours: '12:00 – 2:30 PM · 7:00 – 11:30 PM', closed: false },
      ];

  return (
    <motion.div
      id="contatti-view-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-[#0F1318]"
    >
      {/* ── HERO HEADER ── */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: '340px' }}>
        <img src={g5Img} alt="Contatti La Rosa dei Venti" className="absolute inset-0 w-full h-full object-cover opacity-20" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1318]/50 via-[#0F1318]/80 to-[#0F1318]" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-coral/60 to-transparent" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-16 pb-12">
          <div className="w-14 h-14 rounded-full overflow-hidden border border-white/20 p-0.5 mb-5 shadow-2xl">
            <img src={logoImg} alt="Logo" className="w-full h-full object-cover rounded-full" />
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-coral/80 mb-3 font-medium">
            {language === 'it' ? 'Ristorante di Mare · Milano' : 'Seafood Restaurant · Milan'}
          </p>
          <h1 className="font-serif italic text-4xl md:text-6xl text-white tracking-wide mb-3 drop-shadow-2xl">
            {language === 'it' ? 'Contattaci' : 'Contact Us'}
          </h1>
          <div className="flex items-center gap-4 my-4">
            <div className="h-[1px] w-10 bg-white/20" />
            <Anchor size={12} className="text-brand-coral/70" />
            <div className="h-[1px] w-10 bg-white/20" />
          </div>
          <p className="text-white/40 text-xs font-mono tracking-wide max-w-md">
            {language === 'it' ? 'Siamo a tua disposizione' : 'We are at your disposal'}
          </p>
        </div>
      </div>

      {/* ── CORPO ── */}
      <div className="pb-20 pt-2">
        <div className="max-w-6xl mx-auto px-4 md:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-start">

            {/* ── COLONNA SINISTRA: INFO ── */}
            <div className="lg:col-span-5 flex flex-col gap-6">

              {/* Contatti base */}
              <div className="bg-white/4 border border-white/8 p-6 rounded-2xl flex flex-col gap-5">
                {[
                  { icon: MapPin, label: language === 'it' ? 'Indirizzo' : 'Address', main: restaurantInfo.address, sub: language === 'it' ? 'Zona Sempione / Arco della Pace' : 'Sempione / Arco della Pace District', href: undefined },
                  { icon: Phone, label: language === 'it' ? 'Telefono' : 'Phone', main: restaurantInfo.phone, sub: language === 'it' ? 'Chiamaci per riservare un tavolo' : 'Call us to reserve a table', href: `tel:${restaurantInfo.phone}` },
                  { icon: Mail, label: 'Email', main: restaurantInfo.email, sub: language === 'it' ? 'Rispondiamo entro 24 ore' : 'We reply within 24 hours', href: `mailto:${restaurantInfo.email}` },
                ].map(({ icon: Icon, label, main, sub, href }) => (
                  <div key={label} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-brand-coral/15 flex items-center justify-center text-brand-coral border border-brand-coral/20 shrink-0">
                      <Icon size={16} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-white/30 font-bold">{label}</span>
                      {href
                        ? <a href={href} className="text-white/90 text-sm font-medium mt-1 hover:text-brand-coral transition-colors">{main}</a>
                        : <p className="text-white/90 text-sm font-medium mt-1">{main}</p>
                      }
                      <span className="text-white/35 text-xs font-light mt-0.5">{sub}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Orari estesi – giornalieri */}
              <div className="bg-white/4 border border-white/8 p-6 rounded-2xl flex flex-col gap-4">
                <h3 className="font-serif italic text-lg text-white/90 tracking-wide flex items-center gap-2 font-medium">
                  <Clock size={16} className="text-brand-coral" />
                  {language === 'it' ? 'Orari di Apertura' : 'Opening Hours'}
                </h3>
                <div className="flex flex-col divide-y divide-white/6">
                  {dailyHours.map(({ day, hours, closed }) => (
                    <div key={day} className="flex justify-between items-center py-2.5 gap-3">
                      <span className={`text-sm font-medium ${closed ? 'text-white/35' : 'text-white/80'}`}>
                        {day}
                      </span>
                      <span className={`font-mono text-xs font-semibold px-3 py-1 rounded-lg whitespace-nowrap ${
                        closed
                          ? 'text-brand-coral/80 bg-brand-coral/10 border border-brand-coral/20'
                          : 'text-white/70 bg-white/5 border border-white/8'
                      }`}>
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Come raggiungerci */}
              <div className="bg-white/4 border border-white/8 p-6 rounded-2xl flex flex-col gap-4">
                <h3 className="font-serif italic text-lg text-white/90 tracking-wide flex items-center gap-2 font-medium">
                  <Bus size={16} className="text-brand-coral" />
                  {language === 'it' ? 'Come Raggiungerci' : 'How to Reach Us'}
                </h3>
                <div className="text-xs flex flex-col gap-3 text-white/50">
                  <div className="flex gap-2">
                    <strong className="text-brand-coral shrink-0 font-mono">{language === 'it' ? 'METRO:' : 'METRO:'}</strong>
                    <span>{language === 'it' ? 'Linea M5 (Lilla) – Fermata "Gerusalemme" (4 min a piedi) o "Domodossola" (7 min).' : 'Line M5 (Purple) – "Gerusalemme" stop (4 min walk) or "Domodossola" (7 min).'}</span>
                  </div>
                  <div className="flex gap-2">
                    <strong className="text-brand-coral shrink-0 font-mono">TRAM:</strong>
                    <span>{language === 'it' ? 'Linee 1, 10, 19 – Fermata "Piazza Gramsci" o "Via Procaccini".' : 'Lines 1, 10, 19 – "Piazza Gramsci" or "Via Procaccini" stop.'}</span>
                  </div>
                  <div className="flex gap-2">
                    <strong className="text-brand-coral shrink-0 font-mono">{language === 'it' ? 'AUTO:' : 'CAR:'}</strong>
                    <span>{language === 'it' ? 'Parcheggio custodito convenzionato nelle vicinanze in Via Procaccini.' : 'Supervised parking garage nearby on Via Procaccini.'}</span>
                  </div>
                </div>

                {/* Mappa */}
                <div className="w-full h-48 rounded-xl overflow-hidden border border-white/8 mt-1 relative">
                  <iframe
                    title="La Rosa dei Venti Google Map"
                    src="https://maps.google.com/maps?q=La%20Rosa%20dei%20Venti%20Via%20Piero%20della%20Francesca%2034%20Milano&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* ── COLONNA DESTRA: FORM ── */}
            <div className="lg:col-span-7 bg-white/4 border border-white/8 p-6 md:p-8 rounded-2xl">
              <div className="flex flex-col gap-2 mb-8">
                <h2 className="font-serif text-2xl text-white/90">
                  {language === 'it' ? 'Scrivici un Messaggio' : 'Write Us a Message'}
                </h2>
                <p className="text-white/40 text-xs font-light leading-relaxed">
                  {language === 'it'
                    ? 'Utilizza il modulo per qualsiasi richiesta: prenotazioni speciali, eventi privati, banchetti aziendali.'
                    : 'Use the form for any request: special reservations, private events, corporate banquets.'}
                </p>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form-contatti"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {errorMsg && (
                      <div className="p-4 bg-brand-coral/10 border border-brand-coral/30 text-brand-coral/90 rounded-xl text-xs flex items-center gap-2">
                        <Info size={16} className="shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="form-name" className="font-mono text-[10px] uppercase tracking-widest text-white/40 font-semibold">
                          {language === 'it' ? 'Nome Completo *' : 'Full Name *'}
                        </label>
                        <input
                          id="form-name" type="text" name="name" value={formData.name} onChange={handleChange}
                          placeholder={language === 'it' ? 'Esempio: Mario Rossi' : 'Example: John Doe'}
                          className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-brand-coral focus:outline-none rounded-lg px-4 py-3 text-sm text-white/90 placeholder-white/20 transition-colors"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="form-email" className="font-mono text-[10px] uppercase tracking-widest text-white/40 font-semibold">
                          {language === 'it' ? 'Email *' : 'Email *'}
                        </label>
                        <input
                          id="form-email" type="email" name="email" value={formData.email} onChange={handleChange}
                          placeholder={language === 'it' ? 'mario.rossi@email.it' : 'john.doe@email.com'}
                          className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-brand-coral focus:outline-none rounded-lg px-4 py-3 text-sm text-white/90 placeholder-white/20 transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-subject" className="font-mono text-[10px] uppercase tracking-widest text-white/40 font-semibold">
                        {language === 'it' ? 'Oggetto' : 'Subject'}
                      </label>
                      <input
                        id="form-subject" type="text" name="subject" value={formData.subject} onChange={handleChange}
                        placeholder={language === 'it' ? 'Es: Evento privato, prenotazione speciale...' : 'E.g.: Private event, special booking...'}
                        className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-brand-coral focus:outline-none rounded-lg px-4 py-3 text-sm text-white/90 placeholder-white/20 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-message" className="font-mono text-[10px] uppercase tracking-widest text-white/40 font-semibold">
                        {language === 'it' ? 'Messaggio *' : 'Message *'}
                      </label>
                      <textarea
                        id="form-message" name="message" rows={6} value={formData.message} onChange={handleChange}
                        placeholder={language === 'it' ? 'Scrivi qui la tua richiesta...' : 'Write your detailed request here...'}
                        className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-brand-coral focus:outline-none rounded-lg px-4 py-3 text-sm text-white/90 placeholder-white/20 transition-colors resize-none"
                        required
                      />
                    </div>

                    <div className="mt-1 flex items-center justify-between gap-4">
                      <span className="text-[11px] text-white/30 font-light italic">
                        {language === 'it' ? '* Campi obbligatori' : '* Required fields'}
                      </span>
                      <button
                        id="btn-submit-contact"
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-3 rounded-full bg-brand-coral hover:bg-brand-coral/80 text-white font-mono text-xs font-bold tracking-widest uppercase active:scale-95 transition-all duration-300 cursor-pointer flex items-center gap-2 shadow-lg shadow-brand-coral/20 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /><span>{language === 'it' ? 'Invio...' : 'Sending...'}</span></>
                        ) : (
                          <><Send size={12} /><span>{language === 'it' ? 'Invia Messaggio' : 'Send Message'}</span></>
                        )}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="form-success"
                    className="flex flex-col items-center justify-center text-center py-16 px-4 gap-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-400 border border-emerald-500/30"
                    >
                      <CheckCircle size={36} />
                    </motion.div>
                    <h3 className="font-serif text-2xl text-white/90 mt-2">
                      {language === 'it' ? 'Messaggio Consegnato!' : 'Message Sent!'}
                    </h3>
                    <p className="text-white/40 text-sm max-w-md font-light leading-relaxed">
                      {language === 'it'
                        ? 'Grazie per averci contattato. Ti risponderemo entro poche ore.'
                        : 'Thank you for contacting us. We will reply within a few hours.'}
                    </p>
                    <button
                      id="btn-send-another"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 font-mono text-xs font-bold tracking-widest uppercase text-brand-coral hover:text-white transition-colors cursor-pointer"
                    >
                      {language === 'it' ? 'Invia un altro messaggio' : 'Send another message'}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-14 border-t border-white/8 pt-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[1px] w-8 bg-white/20" />
              <Anchor size={12} className="text-brand-coral/50" />
              <div className="h-[1px] w-8 bg-white/20" />
            </div>
            <p className="font-serif italic text-white/25 text-sm">La Rosa dei Venti · Milano · Dal 1993</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
