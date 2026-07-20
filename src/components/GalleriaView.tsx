import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, ChevronLeft, ChevronRight, X, Compass, Anchor, Grid, Layers, Wine } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const globbed = (import.meta as any).glob('/src/assets/images/g_img_*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', { eager: true });

export const ALL_GALLERY_ITEMS = Object.keys(globbed)
    .map((path) => {
        const filename = path.split('/').pop() || '';
        const match = filename.match(/g_img_(\d+)_?([da]?)/i);
        const index = match ? parseInt(match[1], 10) : 999;
        const categoryLetter = match && match[2] ? match[2].toLowerCase() : '';
        const category = categoryLetter === 'a' ? 'ambience' : 'dishes';
        const src = (globbed[path] as any)?.default || globbed[path];

        return {
            id: `gal-${index}`,
            src,
            index,
            category
        };
    })
    .sort((a, b) => a.index - b.index);

export default function GalleriaView() {
    const { language, t } = useLanguage();
    const [activeFilter, setActiveFilter] = useState<'all' | 'dishes' | 'ambience'>('all');
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

    // Filter items
    const filteredItems = ALL_GALLERY_ITEMS.filter(
        (item) => activeFilter === 'all' || item.category === activeFilter
    );

    // Lightbox handlers
    const openLightbox = (id: string) => {
        const index = filteredItems.findIndex((item) => item.id === id);
        if (index !== -1) {
            setSelectedPhotoIndex(index);
        }
    };

    const closeLightbox = () => {
        setSelectedPhotoIndex(null);
    };

    const showNext = () => {
        if (selectedPhotoIndex !== null) {
            setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredItems.length);
        }
    };

    const showPrev = () => {
        if (selectedPhotoIndex !== null) {
            setSelectedPhotoIndex(
                (selectedPhotoIndex - 1 + filteredItems.length) % filteredItems.length
            );
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedPhotoIndex === null) return;
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'Escape') closeLightbox();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedPhotoIndex, filteredItems]);

    return (
        <div id="galleria-view" className="min-h-screen bg-brand-cream/15 pt-28 pb-20 px-6 md:px-12 relative">
            {/* Decorative anchors and ropes */}
            <div className="absolute top-24 right-12 text-brand-sand/10 pointer-events-none select-none hidden lg:block">
                <Anchor size={120} />
            </div>

            <div className="max-w-6xl mx-auto">
                {/* Page Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="font-mono text-xs font-bold tracking-[0.2em] text-brand-coral uppercase block mb-3">
                        {t('gallery.tag')}
                    </span>
                    <h1 className="font-serif text-4xl md:text-5xl font-normal text-brand-charcoal tracking-wide mb-4">
                        {t('gallery.title')}
                    </h1>
                    <div className="w-24 h-[1px] bg-brand-sand/40 mx-auto mb-6" />
                    <p className="text-brand-slate text-sm sm:text-base font-light leading-relaxed">
                        {t('gallery.subtitle')}
                    </p>
                </div>

                {/* Category Filters */}
                <div className="flex justify-center flex-wrap gap-2.5 md:gap-4 mb-16" id="gallery-filters">
                    <button
                        onClick={() => setActiveFilter('all')}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer border ${activeFilter === 'all'
                            ? 'bg-brand-coral border-brand-coral text-white shadow-md'
                            : 'bg-white border-brand-sand/20 text-brand-charcoal hover:border-brand-coral hover:text-brand-coral'
                            }`}
                    >
                        <Grid size={12} />
                        <span>{t('gallery.all')}</span>
                    </button>

                    <button
                        onClick={() => setActiveFilter('dishes')}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer border ${activeFilter === 'dishes'
                            ? 'bg-brand-coral border-brand-coral text-white shadow-md'
                            : 'bg-white border-brand-sand/20 text-brand-charcoal hover:border-brand-coral hover:text-brand-coral'
                            }`}
                    >
                        <Wine size={12} />
                        <span>{t('gallery.dishes')}</span>
                    </button>

                    <button
                        onClick={() => setActiveFilter('ambience')}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer border ${activeFilter === 'ambience'
                            ? 'bg-brand-coral border-brand-coral text-white shadow-md'
                            : 'bg-white border-brand-sand/20 text-brand-charcoal hover:border-brand-coral hover:text-brand-coral'
                            }`}
                    >
                        <Layers size={12} />
                        <span>{t('gallery.ambience')}</span>
                    </button>
                </div>

                {/* Polaroid Grid Layout */}
                <motion.div
                    id="gallery-masonry-grid"
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => {
                            // Give a subtle, varied rotation to each card to mimic a scattered logbook on wood
                            const rotations = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2', '-rotate-1.5', 'rotate-1.5'];
                            const currentRotation = rotations[index % rotations.length];

                            return (
                                <motion.div
                                    layout
                                    key={item.id}
                                    id={`gallery-polaroid-card-${item.id}`}
                                    className={`bg-white p-5 border border-brand-sand/25 rounded-xs shadow-[0_8px_30px_rgba(196,162,135,0.08)] cursor-pointer group select-none ${currentRotation} hover:rotate-0 hover:scale-[1.02] transition-all duration-300`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    onClick={() => openLightbox(item.id)}
                                >
                                    {/* Photo container */}
                                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-cream/30 rounded-xs border border-brand-sand/15">
                                        <img
                                            src={item.src}
                                            alt={`La Rosa dei Venti Gallery Image ${item.index}`}
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            loading="lazy"
                                            decoding="async"
                                            referrerPolicy="no-referrer"
                                        />
                                        <div className="absolute inset-0 bg-brand-charcoal/5 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                            <div className="w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-brand-coral transform translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                <Camera size={16} />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* Empty Search / Filter state */}
                {filteredItems.length === 0 && (
                    <div className="text-center py-24 text-brand-slate font-light">
                        <Compass className="mx-auto text-brand-sand/30 mb-4 animate-[spin_10s_linear_infinite]" size={48} />
                        <p className="text-sm font-mono uppercase tracking-widest">Nessun elemento trovato</p>
                    </div>
                )}
            </div>

            {/* LIGHTBOX MODAL */}
            <AnimatePresence>
                {selectedPhotoIndex !== null && (
                    <motion.div
                        id="gallery-lightbox-modal"
                        className="fixed inset-0 z-50 bg-brand-charcoal/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Click-outside background closer */}
                        <div className="absolute inset-0 cursor-zoom-out" onClick={closeLightbox} />

                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 md:top-8 md:right-8 z-55 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
                            title={t('gallery.lightbox.close')}
                            aria-label={t('gallery.lightbox.close')}
                        >
                            <X size={20} />
                        </button>

                        {/* Navigation controls (Left / Right) - absolute layout for fast touch targeting */}
                        <button
                            onClick={showPrev}
                            className="absolute left-2 md:left-6 z-55 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer border border-white/25 active:scale-95"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <button
                            onClick={showNext}
                            className="absolute right-2 md:right-6 z-55 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer border border-white/25 active:scale-95"
                            aria-label="Next image"
                        >
                            <ChevronRight size={24} />
                        </button>

                        {/* Main Lightbox Frame */}
                        <motion.div
                            id="lightbox-photo-card"
                            className="relative max-w-4xl w-full max-h-[75vh] flex flex-col items-center justify-center z-10"
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        >
                            <img
                                src={filteredItems[selectedPhotoIndex].src}
                                alt={`La Rosa dei Venti Gallery Image ${filteredItems[selectedPhotoIndex].index}`}
                                className="max-w-full max-h-[65vh] object-contain rounded-xs shadow-2xl border-4 border-white"
                                referrerPolicy="no-referrer"
                            />

                            {/* Photo Description Panel inside Lightbox */}
                            <div className="text-center mt-6 text-white max-w-xl px-4 pointer-events-none select-none">
                                {/* Index Indicator */}
                                <div className="mt-3 text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">
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
