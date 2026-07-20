/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Info, Bus } from 'lucide-react';
import { ContactFormType } from '../types';
import { useLanguage } from '../LanguageContext';

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

    // Quick client-side check
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg(
        language === 'it'
          ? 'Per favore, compila tutti i campi obbligatori (*).'
          : 'Please, fill in all required fields (*).'
      );
      return;
    }

    setIsSubmitting(true);

    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <motion.div
      id="contatti-view-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-brand-cream/30 py-12 md:py-16 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">

        {/* EDITORIAL HEADER */}
        <div id="contatti-header" className="flex flex-col gap-3 max-w-2xl mb-16 border-b border-brand-sand/20 pb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-coral font-bold">
            {language === 'it' ? 'Siamo a tua disposizione' : 'We are at your disposal'}
          </span>
          <h1 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-brand-charcoal tracking-wide">
            {language === 'it' ? 'Contattaci e Vieni a Trovarci' : 'Contact Us & Visit Us'}
          </h1>
          <p className="text-brand-slate text-sm font-light leading-relaxed">
            {language === 'it'
              ? 'Siamo situati in una delle zone più storiche e affascinanti di Milano, nei pressi di Corso Sempione. Per domande, collaborazioni o richieste particolari, scrivici o chiamaci direttamente.'
              : 'We are located in one of the most historic and charming areas of Milan, near Corso Sempione. For questions, collaborations, or special requests, write or call us directly.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT: INFO & DIRECTIONS (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-8">

            {/* Quick Cards - Light Styled */}
            <div className="bg-white p-8 rounded-2xl border border-brand-sand/20 flex flex-col gap-6 shadow-sm">

              {/* Indirizzo */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-coral border border-brand-sand/20 shrink-0">
                  <MapPin size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-brand-sand font-bold">
                    {language === 'it' ? 'Indirizzo' : 'Address'}
                  </span>
                  <p className="text-brand-charcoal text-sm font-medium mt-1">
                    {restaurantInfo.address}
                  </p>
                  <span className="text-brand-slate text-xs font-light mt-0.5">
                    {language === 'it' ? 'Zona Sempione / Arco della Pace' : 'Sempione / Arco della Pace District'}
                  </span>
                </div>
              </div>

              {/* Telefono */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-coral border border-brand-sand/20 shrink-0">
                  <Phone size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-brand-sand font-bold">
                    {language === 'it' ? 'Telefono' : 'Phone'}
                  </span>
                  <a href={`tel:${restaurantInfo.phone}`} className="text-brand-charcoal text-sm font-bold mt-1 hover:text-brand-coral transition-colors">
                    {restaurantInfo.phone}
                  </a>
                  <span className="text-brand-slate text-xs font-light mt-0.5">
                    {language === 'it' ? 'Chiamaci per riservare un tavolo' : 'Call us to reserve a table'}
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-coral border border-brand-sand/20 shrink-0">
                  <Mail size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-brand-sand font-bold">Email</span>
                  <a href={`mailto:${restaurantInfo.email}`} className="text-brand-charcoal text-sm font-medium mt-1 hover:text-brand-coral transition-colors">
                    {restaurantInfo.email}
                  </a>
                  <span className="text-brand-slate text-xs font-light mt-0.5">
                    {language === 'it' ? 'Rispondiamo entro 24 ore' : 'We reply within 24 hours'}
                  </span>
                </div>
              </div>
            </div>

            {/* DEDICATED BOX FOR OPENING HOURS */}
            <div className="bg-white p-6 rounded-2xl border border-brand-sand/20 shadow-sm flex flex-col gap-4">
              <h3 className="font-serif italic text-lg text-brand-coral tracking-wide flex items-center gap-2 font-medium">
                <Clock size={18} className="text-brand-coral" />
                {language === 'it' ? 'Orari di Apertura' : 'Opening Hours'}
              </h3>

              <div className="flex flex-col gap-3 font-light text-brand-charcoal">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 border-b border-brand-cream pb-3 text-sm">
                  <span className="font-medium text-brand-slate">
                    {language === 'it' ? 'Martedì - Domenica' : 'Tuesday - Sunday'}
                  </span>
                  <span className="font-mono text-xs font-semibold text-brand-charcoal bg-brand-cream/60 border border-brand-sand/15 px-3 py-1.5 rounded-lg self-start sm:self-auto">
                    {restaurantInfo.openingHours.weekdays}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm pt-1">
                  <span className="font-medium text-brand-slate">
                    {language === 'it' ? 'Lunedì' : 'Monday'}
                  </span>
                  <span className="font-mono text-xs font-bold text-brand-coral bg-rose-50/70 border border-rose-100 px-3 py-1.5 rounded-lg">
                    {restaurantInfo.openingHours.closed}
                  </span>
                </div>
              </div>
            </div>

            {/* ARTISTIC SCHEMATIC LOCAL MAP & DIRECTIONS - LIGHT STYLE */}
            <div className="bg-white text-brand-charcoal p-6 rounded-2xl border border-brand-sand/20 shadow-sm flex flex-col gap-4">
              <h3 className="font-serif italic text-lg text-brand-coral tracking-wide flex items-center gap-2 font-medium">
                <Bus size={16} />
                {language === 'it' ? 'Come Raggiungerci:' : 'How to Reach Us:'}
              </h3>

              <div className="text-xs flex flex-col gap-3 font-light text-brand-slate">
                <div className="flex gap-2">
                  <strong className="text-brand-coral shrink-0 font-mono">
                    {language === 'it' ? 'METROPOLITANA:' : 'METRO:'}
                  </strong>
                  <span>
                    {language === 'it'
                      ? 'Linea M5 (Lilla) – Fermata "Gerusalemme" (a soli 4 minuti a piedi) oppure "Domodossola" (7 minuti).'
                      : 'Line M5 (Purple) – "Gerusalemme" stop (just 4 minutes walk) or "Domodossola" (7 minutes).'}
                  </span>
                </div>
                <div className="flex gap-2">
                  <strong className="text-brand-coral shrink-0 font-mono">TRAM:</strong>
                  <span>
                    {language === 'it'
                      ? 'Linea 1, 10, 19 – Fermata "Piazza Gramsci" o "Via Procaccini".'
                      : 'Lines 1, 10, 19 – "Piazza Gramsci" or "Via Procaccini" stop.'}
                  </span>
                </div>
                <div className="flex gap-2">
                  <strong className="text-brand-coral shrink-0 font-mono">
                    {language === 'it' ? 'AUTO:' : 'BY CAR:'}
                  </strong>
                  <span>
                    {language === 'it'
                      ? 'Ci troviamo all\'inizio di Via Piero della Francesca. Parcheggio custodito convenzionato nelle vicinanze in Via Procaccini.'
                      : 'We are located at the beginning of Via Piero della Francesca. Supervised parking garage nearby on Via Procaccini.'}
                  </span>
                </div>
              </div>

              {/* Graphical illustration schematic map - Lighter details */}
              <div className="w-full h-36 bg-brand-cream rounded-lg border border-brand-sand/20 mt-2 relative overflow-hidden flex flex-col items-center justify-center text-center p-4">
                <div className="absolute inset-0 bg-[radial-gradient(#C4A287_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

                {/* Visual marker */}
                <div className="w-3 h-3 rounded-full bg-brand-coral animate-ping absolute" />
                <div className="w-3 h-3 rounded-full bg-brand-coral border border-white relative z-10 flex items-center justify-center" />

                <span className="font-serif italic text-sm text-brand-charcoal font-bold mt-2 relative z-10">La Rosa dei Venti</span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-brand-sand relative z-10 mt-1">Via Piero della Francesca, 4</span>

                {/* Compass degree markings around the card */}
                <div className="absolute top-2 left-2 text-[8px] font-mono text-brand-sand/50">45° N</div>
                <div className="absolute bottom-2 right-2 text-[8px] font-mono text-brand-sand/50">9° E</div>
              </div>
            </div>

          </div>

          {/* RIGHT: INTERACTIVE CONTACT FORM - CLEAN CONTRAST */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-brand-sand/20 shadow-sm">

            <div className="flex flex-col gap-2 mb-8">
              <h2 className="font-serif text-2xl text-brand-charcoal">
                {language === 'it' ? 'Scrivici un Messaggio' : 'Write Us a Message'}
              </h2>
              <p className="text-brand-slate text-xs font-light">
                {language === 'it'
                  ? 'Utilizza il modulo sottostante per qualsiasi richiesta d’informazioni o comunicazione per banchetti privati ed eventi aziendali.'
                  : 'Use the form below for any request for information or inquiries about private banquets and corporate events.'}
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form-contatti"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {errorMsg && (
                    <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-xs flex items-center gap-2">
                      <Info size={16} className="shrink-0 text-rose-600" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Nome */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-name" className="font-mono text-[10px] uppercase tracking-widest text-brand-charcoal font-semibold">
                        {language === 'it' ? 'Nome Completo *' : 'Full Name *'}
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={language === 'it' ? 'Esempio: Mario Rossi' : 'Example: John Doe'}
                        className="w-full bg-brand-cream/30 border border-brand-sand/35 hover:border-brand-sand focus:border-brand-coral focus:outline-none rounded-lg px-4 py-3 text-sm text-brand-charcoal transition-colors"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-email" className="font-mono text-[10px] uppercase tracking-widest text-brand-charcoal font-semibold">
                        {language === 'it' ? 'Indirizzo Email *' : 'Email Address *'}
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={language === 'it' ? 'mario.rossi@email.it' : 'john.doe@email.com'}
                        className="w-full bg-brand-cream/30 border border-brand-sand/35 hover:border-brand-sand focus:border-brand-coral focus:outline-none rounded-lg px-4 py-3 text-sm text-brand-charcoal transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Oggetto */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-subject" className="font-mono text-[10px] uppercase tracking-widest text-brand-charcoal font-semibold">
                      {language === 'it' ? 'Oggetto del Messaggio' : 'Message Subject'}
                    </label>
                    <input
                      id="form-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={
                        language === 'it'
                          ? 'Esempio: Info eventi privati, banchetti...'
                          : 'Example: Info on private events, banquets...'
                      }
                      className="w-full bg-brand-cream/30 border border-brand-sand/35 hover:border-brand-sand focus:border-brand-coral focus:outline-none rounded-lg px-4 py-3 text-sm text-brand-charcoal transition-colors"
                    />
                  </div>

                  {/* Messaggio */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-message" className="font-mono text-[10px] uppercase tracking-widest text-brand-charcoal font-semibold">
                      {language === 'it' ? 'Il Tuo Messaggio *' : 'Your Message *'}
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={
                        language === 'it'
                          ? 'Scrivi qui la tua richiesta in dettaglio...'
                          : 'Write your detailed request here...'
                      }
                      className="w-full bg-brand-cream/30 border border-brand-sand/35 hover:border-brand-sand focus:border-brand-coral focus:outline-none rounded-lg px-4 py-3 text-sm text-brand-charcoal transition-colors resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="mt-2 flex items-center justify-between gap-4">
                    <span className="text-[11px] text-brand-slate font-light italic">
                      {language === 'it'
                        ? 'I campi contrassegnati da * sono obbligatori.'
                        : 'Fields marked with * are required.'}
                    </span>

                    <button
                      id="btn-submit-contact"
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 rounded-full bg-brand-charcoal text-white font-mono text-xs font-bold tracking-widest uppercase hover:bg-brand-slate active:scale-95 transition-all duration-300 cursor-pointer flex items-center gap-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>{language === 'it' ? 'Invio...' : 'Sending...'}</span>
                        </>
                      ) : (
                        <>
                          <Send size={12} />
                          <span>{language === 'it' ? 'Invia Messaggio' : 'Send Message'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="form-success"
                  className="flex flex-col items-center justify-center text-center py-12 px-4 gap-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 border border-emerald-200"
                  >
                    <CheckCircle size={36} />
                  </motion.div>

                  <h3 className="font-serif text-2xl text-brand-charcoal mt-2">
                    {language === 'it' ? 'Messaggio Consegnato!' : 'Message Sent Successfully!'}
                  </h3>
                  <p className="text-brand-slate text-sm max-w-md font-light leading-relaxed">
                    {language === 'it'
                      ? 'Grazie per averci contattato. Abbiamo ricevuto la tua richiesta e ti risponderemo all’indirizzo email fornito nel più breve tempo possibile (solitamente entro poche ore).'
                      : 'Thank you for contacting us. We have received your request and we will respond to your email address as soon as possible (usually within a few hours).'}
                  </p>

                  <button
                    id="btn-send-another"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 font-mono text-xs font-bold tracking-widest uppercase text-brand-coral hover:text-brand-charcoal transition-colors cursor-pointer"
                  >
                    {language === 'it' ? 'Invia un altro messaggio' : 'Send another message'}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </motion.div>
  );
}
