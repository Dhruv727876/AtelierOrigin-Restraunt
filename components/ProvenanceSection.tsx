"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ProgressiveImage } from "./ProgressiveImage";

interface ProvenanceSectionProps {
    reducedMotion: boolean;
}

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const provenanceStories = [
    {
        id: "soil",
        category: "Terra",
        title: "Heirloom\nLineage",
        description: "Our vegetables are harvested within 60 miles, honoring the regenerative farms that nurture the soil. Every plate carries the living pulse of the earth.",
        image: "/images/provenance_farm.png",
        stat: "60mi",
        label: "Radius",
        aspect: "portrait", // taller card
    },
    {
        id: "cellar",
        category: "Vigne",
        title: "Liquid\nNarrative",
        description: "A curated map of regional low-intervention wines. We champion producers who listen to the land, letting the terroir speak through every pour.",
        image: "/images/provenance_cellar.png",
        stat: "280+",
        label: "Labels",
        aspect: "landscape", // shorter card — offset upward on right col
    },
    {
        id: "forage",
        category: "Cueillette",
        title: "Wild\nHarvest",
        description: "Beyond the farm, we look to the forest floor. Wild sorrel, oyster leaf, and seasonal fungi are foraged by hand each morning for that evening's service.",
        image: "/images/provenance_forage.png",
        stat: "Daily",
        label: "Foraged",
        aspect: "landscape",
    },
    {
        id: "hands",
        category: "Savoir-Faire",
        title: "The Human\nElement",
        description: "Provenance isn't just a place; it's people. We know every farmer by name and participate in the labor of the season before the first flame is lit.",
        image: "/images/provenance_harvest.png",
        stat: "12",
        label: "Partners",
        aspect: "portrait",
    }
];

export function ProvenanceSection({ reducedMotion }: ProvenanceSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const rightColY = useTransform(scrollYProgress, [0, 1], [80, -80]);

    return (
        <section className="provenance-section section" id="provenance" ref={containerRef}>

            {/* ── Header ── */}
            <div className="provenance-header">
                <motion.span
                    className="eyebrow"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    Lineage & Legacy
                </motion.span>
                <div className="mask-text">
                    <motion.h2
                        initial={reducedMotion ? { opacity: 1 } : { y: "100%" }}
                        whileInView={reducedMotion ? { opacity: 1 } : { y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease }}
                    >
                        Honoring the source of every pulse.
                    </motion.h2>
                </div>
                <motion.p
                    className="provenance-lede"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    Four pillars of provenance — soil, vine, forest, and hand — that anchor every dish on the menu.
                </motion.p>
            </div>

            {/* ── 2-column staggered grid ── */}
            <div className="provenance-grid">
                {/* Left column: cards 1 & 3 */}
                <motion.div 
                    className="provenance-col"
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: -40 }}
                    whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.9, ease }}
                >
                    {[provenanceStories[0], provenanceStories[2]].map((story, i) => (
                        <motion.div
                            key={story.id}
                            className={`prov-card prov-card--${story.aspect}`}
                            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                            whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.85, delay: i * 0.1, ease }}
                        >
                            <div className="prov-card__image" style={{ position: "relative" }}>
                                <motion.div
                                    className="image-reveal-curtain"
                                    initial={reducedMotion ? { height: 0 } : { height: "100%" }}
                                    whileInView={{ height: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{ duration: 0.9, delay: i * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: "var(--bg)",
                                        zIndex: 5,
                                        transformOrigin: "top"
                                    }}
                                />
                                <ProgressiveImage src={story.image} alt={story.title} className="prov-card__img" />
                                <div className="prov-card__num" aria-hidden>0{provenanceStories.indexOf(story) + 1}</div>
                            </div>
                            <div className="prov-card__body">
                                <span className="prov-card__cat">{story.category}</span>
                                <h3 className="prov-card__title">{story.title}</h3>
                                <p className="prov-card__text">{story.description}</p>
                                <div className="prov-card__stat">
                                    <strong>{story.stat}</strong>
                                    <span>{story.label}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Right column: cards 2 & 4 — offset downward for rhythm */}
                <motion.div
                    className="provenance-col provenance-col--offset"
                    style={{ y: reducedMotion ? 0 : rightColY }}
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: 40 }}
                    whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.9, ease }}
                >
                    {[provenanceStories[1], provenanceStories[3]].map((story, i) => (
                        <motion.div
                            key={story.id}
                            className={`prov-card prov-card--${story.aspect}`}
                            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                            whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.85, delay: 0.15 + i * 0.1, ease }}
                        >
                            <div className="prov-card__image" style={{ position: "relative" }}>
                                <motion.div
                                    className="image-reveal-curtain"
                                    initial={reducedMotion ? { height: 0 } : { height: "100%" }}
                                    whileInView={{ height: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{ duration: 0.9, delay: 0.15 + i * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: "var(--bg)",
                                        zIndex: 5,
                                        transformOrigin: "top"
                                    }}
                                />
                                <ProgressiveImage src={story.image} alt={story.title} className="prov-card__img" />
                                <div className="prov-card__num" aria-hidden>0{provenanceStories.indexOf(story) + 1}</div>
                            </div>
                            <div className="prov-card__body">
                                <span className="prov-card__cat">{story.category}</span>
                                <h3 className="prov-card__title">{story.title}</h3>
                                <p className="prov-card__text">{story.description}</p>
                                <div className="prov-card__stat">
                                    <strong>{story.stat}</strong>
                                    <span>{story.label}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* ── Closing quote ── */}
            <motion.div
                className="provenance-quote"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <blockquote>
                    "The kitchen is merely a translator. The true authorship belongs to the soil."
                </blockquote>
                <cite>— Chef Raphaël Petit</cite>
            </motion.div>
        </section>
    );
}
