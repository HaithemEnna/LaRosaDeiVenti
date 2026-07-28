import React from 'react';
import { motion } from 'motion/react';
import { Camera, Compass, Anchor, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { PageType } from '../types';

// Dynamic gallery loading using Vite's glob import
const globbed = (import.meta as any).glob('/src/assets/images/g_img_*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', { eager: true });

export const GALLERY_ITEMS = Object.keys(globbed)
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

interface GalleryPreviewProps {
    onPageSelect: (page: PageType) => void;
}

export default function GalleryPreview({ onPageSelect }: GalleryPreviewProps) {
    const { t } = useLanguage();

    // Show up to 4 items in the home preview
    const previewItems = GALLERY_ITEMS.slice(0, 4);

    return (
        <section
            id="home-gallery-preview"
            className="relative py-20 px-6 md:px-12 bg-brand-deep overflow-hidden"
        >
            {/* Decorative background elements */}
            <div className="absolute top-10 left-10 text-white/5 pointer-events-none select-none">
                <Compass size={240} className="animate-[spin_120s_linear_infinite]" />
            </div>
            <div className="absolute bottom-10 right-10 text-white/5 pointer-events-none select-none">
                <Anchor size={180} />
            </div>
            {/* Top border */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-coral/40 to-transparent" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="font-mono text-xs font-bold tracking-[0.2em] text-brand-coral uppercase block mb-3">
                        {t('gallery.tag')}
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl font-normal text-white tracking-wide mb-4">
                        {t('gallery.homeTitle')}
                    </h2>
                    <div className="w-16 h-[1px] bg-white/20 mx-auto mb-6" />
                    <p className="text-white/55 text-sm font-light leading-relaxed">
                        {t('gallery.homeSubtitle')}
                    </p>
                </div>

                {/* Polaroid Logbook Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 mb-14">
                    {previewItems.map((item, index) => {
                        return (
                            <motion.div
                                key={item.id}
                                id={`polaroid-preview-${item.id}`}
                                className="flex flex-col bg-white/8 border border-white/12 rounded-xl overflow-hidden shadow-[0_6px_30px_rgba(0,0,0,0.3)] cursor-pointer group backdrop-blur-sm"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                onClick={() => onPageSelect('galleria')}
                            >
                                {/* Image Frame */}
                                <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-cream/40 rounded-sm border border-brand-sand/10">
                                    <img
                                        src={item.src}
                                        alt={`La Rosa dei Venti Gallery Image ${item.index}`}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        loading="lazy"
                                        decoding="async"
                                        referrerPolicy="no-referrer"
                                    />
                                    {/* Soft overlay on hover */}
                                    <div className="absolute inset-0 bg-brand-charcoal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Tiny camera badge */}
                                    <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-full text-brand-coral shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Camera size={12} />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA Button */}
                <div className="text-center" id="gallery-preview-cta">
                    <motion.button
                        onClick={() => onPageSelect('galleria')}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-coral hover:bg-white hover:text-brand-charcoal text-white font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer border border-brand-coral"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>{t('gallery.exploreBtn')}</span>
                        <ArrowRight size={14} className="animate-pulse" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
