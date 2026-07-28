import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, ChevronLeft, ChevronRight, X, Compass, Anchor, Grid, Layers, Wine } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

import logoImg from '../assets/images/minimal_rose_logo_1783090656063.jpg';
import heroImg from '../assets/images/hero_image.jpg';

const globbed = (import.meta as any).glob('/src/assets/images/g_img_*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', { eager: true });

export const ALL_GALLERY_ITEMS = Object.keys(globbed)
    .map((path) => {
        const filename = path.split('/').pop() || '';
        const match = filename.match(/g_img_(\d+)_?([da]?)/i);
        const index = match ? parseInt(match[1], 10) : 999;
        const categoryLetter = match && match[2] ? match[2].toLowerCase() : '';
        const category = categoryLetter === 'a' ? 'ambience' : 'dishes';
        const src = (globbed[path] as any)?.default || globbed[path];
        return { id: `gal-${index}`, src, index, category };
    })
    .sort((a, b) => a.index - b.index);

export default function GalleriaView() {
    const { language, t } = useLanguage();
    const [activeFilter, setActiveFilter] = useState<'all' | 'dishes' | 'ambience'>('all');
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

    const filteredItems = ALL_GALLERY_ITEMS.filter(
        (item) => activeFilter === 'all' || item.category === activeFilter
    );

    const openLightbox = (id: string) => {
        const index = filteredItems.findIndex((item) => item.id === id);
        if (index !== -1) setSelectedPhotoIndex(index);
    };
    const closeLightbox = () => setSelectedPhotoIndex(null);
    const showNext = () => { if (selectedPhotoIndex !== null) setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredItems.length); };
    const showPrev = () => { if (selectedPhotoIndex !== null) setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredItems.length) % filteredItems.length); };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedPhotoIndex === null) return;
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedPhotoIndex, filteredItems]);

    return (
        <div id="galleria-view" className="min-h-screen bg-[#0F1318]">
            {/* ── HERO HEADER ── */}
            <div className="relative w-full overflow-hidden" style={{ minHeight: '360px' }}>
                <img src={heroImg} alt="Galleria" className="absolute inset-0 w-full h-full object-cover opacity-15" fetchPriority="high" />
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
                        {t('gallery.title')}
                    </h1>
                    <div className="flex items-center gap-4 my-4">
                        <div className="h-[1px] w-10 bg-white/20" />
                        <Anchor size={12} className="text-brand-coral/70" />
                        <div className="h-[1px] w-10 bg-white/20" />
                    </div>
                    <p className="text-white/40 text-xs font-mono tracking-wide max-w-md">{t('gallery.subtitle')}</p>
                </div>
            </div>

            {/* ── CORPO GALLERIA ── */}
            <div className="pb-20 pt-4">
                <div className="max-w-6xl mx-auto px-4 md:px-8">

                    {/* Filtri categoria */}
                    <div className="flex justify-center flex-wrap gap-2.5 md:gap-4 mb-14 mt-6 border-b border-white/8 pb-8" id="gallery-filters">
                        {[
                            { id: 'all', label: t('gallery.all'), icon: Grid },
                            { id: 'dishes', label: t('gallery.dishes'), icon: Wine },
                            { id: 'ambience', label: t('gallery.ambience'), icon: Layers },
                        ].map(({ id, label, icon: Icon }) => (
                            <button
                                key={id}
                                onClick={() => setActiveFilter(id as any)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer border ${activeFilter === id
                                    ? 'bg-brand-coral border-brand-coral text-white shadow-lg shadow-brand-coral/20'
                                    : 'bg-transparent text-white/50 border-white/10 hover:border-white/30 hover:text-white/80'
                                    }`}
                            >
                                <Icon size={12} />
                                <span>{label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Griglia foto */}
                    <motion.div id="gallery-masonry-grid" layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredItems.map((item, index) => (
                                <motion.div
                                    layout
                                    key={item.id}
                                    id={`gallery-polaroid-card-${item.id}`}
                                    className="relative overflow-hidden rounded-xl border border-white/8 cursor-pointer group aspect-[4/3] bg-white/4"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4 }}
                                    onClick={() => openLightbox(item.id)}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <img
                                        src={item.src}
                                        alt={`La Rosa dei Venti Gallery Image ${item.index}`}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        loading="lazy"
                                        decoding="async"
                                        referrerPolicy="no-referrer"
                                    />
                                    {/* Overlay hover */}
                                    <div className="absolute inset-0 bg-brand-deep/0 group-hover:bg-brand-deep/40 transition-all duration-300 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/30">
                                            <Camera size={18} />
                                        </div>
                                    </div>
                                    {/* Numero foto */}
                                    <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full px-2 py-0.5 font-mono text-[9px] text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {index + 1} / {filteredItems.length}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Stato vuoto */}
                    {filteredItems.length === 0 && (
                        <div className="text-center py-24 text-white/30 font-light">
                            <Compass className="mx-auto text-white/10 mb-4 animate-[spin_10s_linear_infinite]" size={48} />
                            <p className="text-sm font-mono uppercase tracking-widest">Nessun elemento trovato</p>
                        </div>
                    )}

                    {/* Footer galleria */}
                    <div className="mt-16 border-t border-white/8 pt-10 text-center">
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <div className="h-[1px] w-8 bg-white/20" />
                            <Anchor size={12} className="text-brand-coral/50" />
                            <div className="h-[1px] w-8 bg-white/20" />
                        </div>
                        <p className="font-serif italic text-white/25 text-sm">La Rosa dei Venti · Milano · Dal 1993</p>
                    </div>
                </div>
            </div>

            {/* LIGHTBOX */}
            <AnimatePresence>
                {selectedPhotoIndex !== null && (
                    <motion.div
                        id="gallery-lightbox-modal"
                        className="fixed inset-0 z-50 bg-black/96 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="absolute inset-0 cursor-zoom-out" onClick={closeLightbox} />
                        <button onClick={closeLightbox} className="absolute top-4 right-4 md:top-8 md:right-8 z-55 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20" title={t('gallery.lightbox.close')} aria-label={t('gallery.lightbox.close')}>
                            <X size={20} />
                        </button>
                        <button onClick={showPrev} className="absolute left-2 md:left-6 z-55 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 active:scale-95" aria-label="Previous image">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={showNext} className="absolute right-2 md:right-6 z-55 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 active:scale-95" aria-label="Next image">
                            <ChevronRight size={24} />
                        </button>
                        <motion.div id="lightbox-photo-card" className="relative max-w-4xl w-full max-h-[75vh] flex flex-col items-center justify-center z-10" initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 300, damping: 25 }}>
                            <img src={filteredItems[selectedPhotoIndex].src} alt={`La Rosa dei Venti Gallery Image ${filteredItems[selectedPhotoIndex].index}`} className="max-w-full max-h-[65vh] object-contain rounded-xl shadow-2xl border border-white/10" referrerPolicy="no-referrer" />
                            <div className="text-center mt-4 text-white pointer-events-none select-none">
                                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">
                                    {selectedPhotoIndex + 1} / {filteredItems.length}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
