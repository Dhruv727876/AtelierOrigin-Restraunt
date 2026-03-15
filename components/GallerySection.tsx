"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ProgressiveImage } from "./ProgressiveImage";
import { galleryItems } from "@/data/site";

interface GallerySectionProps {
    reducedMotion: boolean;
}
function GalleryCard({ item, index, reducedMotion, onClick }: { item: any, index: number, reducedMotion: boolean, onClick: () => void }) {
    const cardRef = useRef<HTMLButtonElement>(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <motion.button
            ref={cardRef}
            type="button"
            className="gallery-card"
            initial={reducedMotion ? false : { 
                opacity: 0, 
                y: 32,
                x: index % 3 === 0 ? -40 : index % 3 === 2 ? 40 : 0
            }}
            whileInView={reducedMotion ? {} : { opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            onClick={onClick}
            data-cursor="interactive"
        >
            <div className="gallery-card__image-container" style={{ overflow: "hidden", borderRadius: "1.2rem" }}>
                <motion.div style={{ y: reducedMotion ? 0 : y, scale: 1.2 }}>
                    <ProgressiveImage src={item.image} alt={item.title} className="gallery-card__image" />
                </motion.div>
            </div>
            <span className="gallery-card__title">{item.title}</span>
        </motion.button>
    );
}

export function GallerySection({ reducedMotion }: GallerySectionProps) {
    const [selectedGallery, setSelectedGallery] = useState<string | null>(null);

    useEffect(() => {
        if (!selectedGallery) {
            return;
        }

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSelectedGallery(null);
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [selectedGallery]);

    useEffect(() => {
        document.body.style.overflow = selectedGallery ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedGallery]);

    const selectedGalleryItem = galleryItems.find((item) => item.id === selectedGallery);

    return (
        <>
            <section className="gallery section" id="gallery">
                <div className="section-heading section-heading--split">
                    <div>
                        <span className="eyebrow">Gallery</span>
                        <h2>Four rooms. One quiet obsession with light.</h2>
                    </div>
                    <p className="section-heading__body">
                        From the candlelit salon to the open chef's counter — each space is designed to disappear, leaving only the meal.
                    </p>
                </div>
                <div className="gallery-grid">
                    {galleryItems.map((item, index) => (
                        <GalleryCard
                            key={item.id}
                            item={item}
                            index={index}
                            reducedMotion={reducedMotion}
                            onClick={() => setSelectedGallery(item.id)}
                        />
                    ))}
                </div>
            </section>

            <AnimatePresence>
                {selectedGalleryItem && (
                    <motion.div
                        className="lightbox"
                        initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.28 }}
                        role="dialog"
                        aria-modal="true"
                        aria-label={selectedGalleryItem.title}
                        onClick={() => setSelectedGallery(null)}
                    >
                        <motion.div
                            className="lightbox__panel"
                            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.88, y: 24 }}
                            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
                            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
                            transition={{ type: "spring", stiffness: 260, damping: 24 }}
                            onClick={(event) => event.stopPropagation()}
                        >
                            <ProgressiveImage src={selectedGalleryItem.image} alt={selectedGalleryItem.title} className="lightbox__image" />
                            <div className="lightbox__copy">
                                <h3>{selectedGalleryItem.title}</h3>
                                <p>{selectedGalleryItem.description}</p>
                                <button type="button" className="button button--ghost" onClick={() => setSelectedGallery(null)}>
                                    Close view
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
