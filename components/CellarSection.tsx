"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ProgressiveImage } from "./ProgressiveImage";

interface CellarSectionProps {
    reducedMotion: boolean;
}

const cellarHighlights = [
    { label: "280+", sublabel: "Labels curated personally" },
    { label: "80mi", sublabel: "Maximum origin radius" },
    { label: "1962", sublabel: "Oldest bottle on list" },
    { label: "3", sublabel: "Full-time sommeliers" },
];

export function CellarSection({ reducedMotion }: CellarSectionProps) {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

    return (
        <section className="cellar-section section" id="cellar" ref={ref}>
            {/* Parallax background */}
            <div className="cellar-section__bg-wrap">
                <motion.div style={{ y: reducedMotion ? 0 : bgY, height: "120%", width: "100%" }}>
                    <ProgressiveImage
                        src="/images/wine_cellar_bg.png"
                        alt="Atelier Origine private wine cellar"
                        className="cellar-section__bg-img"
                    />
                </motion.div>
                <div className="cellar-section__overlay" />
            </div>

            {/* Content */}
            <div className="cellar-section__content">
                <motion.span
                    className="eyebrow"
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                    whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    The Wine Cellar
                </motion.span>

                <div className="mask-text">
                    <motion.h2
                        initial={reducedMotion ? { opacity: 1 } : { y: "100%" }}
                        whileInView={reducedMotion ? { opacity: 1 } : { y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Every bottle has a story. We know them all.
                    </motion.h2>
                </div>

                <motion.p
                    className="cellar-section__body"
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                    whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                    Our cellar is drawn within 80 miles of Atelier Origine. Natural, biodynamic, and low-intervention wines selected by three resident sommeliers who visit every producer by hand. An optional pairing adds four to six perfectly matched pours to your tasting menu.
                </motion.p>

                <motion.div
                    className="cellar-section__stats"
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                    whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                    {cellarHighlights.map((item) => (
                        <div key={item.label} className="cellar-stat">
                            <strong>{item.label}</strong>
                            <span>{item.sublabel}</span>
                        </div>
                    ))}
                </motion.div>

                <motion.a
                    href="/cellar"
                    className="button button--ghost"
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                    whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    data-cursor="interactive"
                >
                    Explore the cellar list →
                </motion.a>
            </div>
        </section>
    );
}
