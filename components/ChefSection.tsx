"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ProgressiveImage } from "./ProgressiveImage";
import { chefData } from "@/data/site";

interface ChefSectionProps {
    reducedMotion: boolean;
}

export function ChefSection({ reducedMotion }: ChefSectionProps) {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

    return (
        <section className="chef-section section" id="chef" ref={ref}>
            <div className="chef-section__grid">
                {/* Left — portrait */}
                <div className="chef-section__image-col">
                    <motion.div
                        className="chef-section__image-wrap"
                        initial={reducedMotion ? false : { opacity: 0, x: -40 }}
                        whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.div style={{ y: reducedMotion ? 0 : bgY, scale: 1.08, height: "100%" }}>
                            <ProgressiveImage
                                src="/images/chef.png"
                                alt="Chef Laurent Moreau — Executive Chef, Atelier Origine"
                                className="chef-section__image"
                            />
                        </motion.div>
                        <div className="chef-section__image-overlay" />
                    </motion.div>
                </div>

                {/* Right — copy */}
                <motion.div 
                    className="chef-section__copy"
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: 40 }}
                    whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.span
                        className="eyebrow"
                        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                        whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        The Hand Behind the Plate
                    </motion.span>

                    <div className="mask-text">
                        <motion.h2
                            initial={reducedMotion ? { opacity: 1 } : { y: "100%" }}
                            whileInView={reducedMotion ? { opacity: 1 } : { y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            Chef {chefData.name}
                        </motion.h2>
                    </div>

                    <motion.p
                        className="chef-section__role"
                        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                        whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {chefData.role}
                    </motion.p>

                    <motion.blockquote
                        className="chef-section__quote"
                        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                        whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {chefData.quote}
                    </motion.blockquote>

                    <motion.div
                        className="chef-section__bio"
                        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                        whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {chefData.bio.map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                        ))}
                    </motion.div>

                    <motion.div
                        className="chef-section__credentials"
                        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                        whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {chefData.stats.map((item) => (
                            <div key={item.label} className="chef-section__stat">
                                <strong>{item.label}</strong>
                                <span>{item.caption}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
