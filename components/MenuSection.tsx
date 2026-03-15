"use client";

import { useState, useEffect, useMemo, CSSProperties } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ProgressiveImage } from "./ProgressiveImage";
import { menuCategories, menuItems } from "@/data/site";

const entranceEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

function MenuSkeleton() {
    return (
        <div className="menu-grid" aria-hidden>
            {Array.from({ length: 4 }).map((_, index) => (
                <div className="menu-card menu-card--skeleton" key={index}>
                    <div className="skeleton skeleton__image" />
                    <div className="skeleton skeleton__line skeleton__line--title" />
                    <div className="skeleton skeleton__line" />
                    <div className="skeleton skeleton__line skeleton__line--short" />
                </div>
            ))}
        </div>
    );
}

interface MenuSectionProps {
    reducedMotion: boolean;
}

export function MenuSection({ reducedMotion }: MenuSectionProps) {
    const [activeCategory, setActiveCategory] = useState<(typeof menuCategories)[number]>("All");
    const [menuReady, setMenuReady] = useState(false);

    const filteredItems = useMemo(
        () => menuItems.filter((item) => activeCategory === "All" || item.category === activeCategory),
        [activeCategory]
    );

    useEffect(() => {
        const timer = window.setTimeout(() => setMenuReady(true), 680);
        return () => window.clearTimeout(timer);
    }, []);

    return (
        <section className="menu section" id="menu">
            <div className="section-heading">
                <div>
                    <span className="eyebrow">Interactive menu</span>
                    <div className="mask-text">
                        <motion.h2
                            initial={reducedMotion ? { opacity: 1 } : { y: "100%" }}
                            whileInView={reducedMotion ? { opacity: 1 } : { y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            Ritual reveals, spatial continuity, and a tactile hover peel.
                        </motion.h2>
                    </div>
                </div>
            </div>

            {/* Two-column layout */}
            <div className="menu-split">

                {/* LEFT — sticky printed menu card */}
                <div className="menu-split__sidebar">
                    <motion.div
                        className="menu-split__card glass-panel"
                        initial={reducedMotion ? false : { opacity: 0, x: -24 }}
                        whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="menu-split__image-wrap">
                            <ProgressiveImage
                                src="/images/printed_menu.png"
                                alt="Atelier Origine Printed Menu"
                                priority={true}
                            />
                        </div>
                        <div className="menu-split__caption">
                            <span className="eyebrow" style={{ fontSize: "0.6rem" }}>Season Menu</span>
                            <p style={{ fontSize: "0.78rem", marginTop: "0.5rem", color: "var(--muted)", lineHeight: 1.5 }}>
                                All dishes are prepared à la minute with seasonal provenance.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT — filter + scrollable cards */}
                <motion.div 
                    className="menu-split__main"
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: 40 }}
                    whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Filter row */}
                    <div className="filter-row" role="tablist" aria-label="Menu categories" style={{ marginBottom: "1.5rem" }}>
                        {menuCategories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                role="tab"
                                aria-selected={activeCategory === category}
                                className={`filter-chip ${activeCategory === category ? "is-active" : ""}`}
                                onClick={() => setActiveCategory(category)}
                                data-cursor="interactive"
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Cards */}
                    {!menuReady ? (
                        <MenuSkeleton />
                    ) : (
                        <LayoutGroup>
                            <motion.div layout className="menu-grid">
                                <AnimatePresence mode="popLayout">
                                    {filteredItems.map((item, index) => (
                                        <motion.article
                                            layout
                                            key={item.id}
                                            className="menu-card"
                                            initial={
                                                reducedMotion
                                                    ? { opacity: 1 }
                                                    : { opacity: 0, y: 24, clipPath: "inset(0 100% 0 0 round 32px)" }
                                            }
                                            animate={
                                                reducedMotion
                                                    ? { opacity: 1 }
                                                    : { opacity: 1, y: 0, clipPath: "inset(0 0% 0 0 round 32px)" }
                                            }
                                            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -18 }}
                                            transition={{ duration: 0.44, delay: index * 0.05, ease: entranceEase, layout: { duration: 0.46 } }}
                                            style={{ "--menu-accent": item.accent } as CSSProperties}
                                        >
                                            <div className="menu-card__image-wrap" data-cursor="interactive">
                                                <ProgressiveImage src={item.image} alt={item.title} className="menu-card__image" />
                                                <div className="menu-card__peel">
                                                    <ProgressiveImage src={item.peelImage} alt="Alternate plated angle" className="menu-card__image" />
                                                </div>
                                            </div>
                                            <div className="menu-card__copy">
                                                <div className="menu-card__header">
                                                    <div>
                                                        <span className="menu-card__category">{item.category}</span>
                                                        <h3>{item.title}</h3>
                                                    </div>
                                                    <strong>{item.price}</strong>
                                                </div>
                                                <p className="menu-card__subtitle">{item.subtitle}</p>
                                                <p>{item.description}</p>
                                            </div>
                                        </motion.article>
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        </LayoutGroup>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
