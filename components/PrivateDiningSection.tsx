"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ProgressiveImage } from "./ProgressiveImage";

interface PrivateDiningSectionProps {
    reducedMotion: boolean;
}

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function PrivateDiningSection({ reducedMotion }: PrivateDiningSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yImg = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section className="private-dining" id="events" ref={containerRef}>
            <div className="private-dining__wrapper">

                {/* Content Panel (Left Side) */}
                <div className="private-dining__content-wrap">
                    <motion.div
                        className="private-dining__panel"
                        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: -40 }}
                        whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.85, ease }}
                    >
                        <motion.span
                            className="eyebrow eyebrow--gold"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Private Dining & Events
                        </motion.span>

                        <div className="mask-text">
                            <motion.h2
                                className="private-dining__title"
                                initial={reducedMotion ? { opacity: 1 } : { y: "100%" }}
                                whileInView={reducedMotion ? { opacity: 1 } : { y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.85, delay: 0.1, ease }}
                            >
                                Hold the entire room.
                            </motion.h2>
                        </div>

                        <motion.p
                            className="private-dining__text"
                            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                            whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.25, ease }}
                        >
                            Atelier Origine is available for exclusive private hire on Sundays and select Mondays. From intimate dinners to landmark celebrations — experience a fully bespoke menu, and the room entirely yours.
                        </motion.p>

                        <motion.div
                            className="private-dining__grid"
                            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                            whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.35, ease }}
                        >
                            {[
                                "Up to 14 guests",
                                "Custom tasting menu",
                                "Dedicated sommelier",
                                "Décor coordination"
                            ].map((f, i) => (
                                <span key={f} className="private-dining__perk">
                                    <span className="private-dining__perk-num">0{i + 1}</span>
                                    <span>{f}</span>
                                </span>
                            ))}
                        </motion.div>

                        <motion.a
                            href="mailto:events@atelierorigine.com"
                            className="button button--ghost private-dining__cta"
                            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                            whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.45, ease }}
                            data-cursor="interactive"
                        >
                            Enquire about private hire →
                        </motion.a>
                    </motion.div>
                </div>

                {/* Framed Image (Right Side) */}
                <motion.div 
                    className="private-dining__frame"
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: 40 }}
                    whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.85, ease }}
                >
                    <motion.div
                        className="private-dining__parallax"
                        style={{ y: reducedMotion ? 0 : yImg }}
                    >
                        <ProgressiveImage
                            src="/images/private_dining.png"
                            alt="Private dining room at Atelier Origine"
                            className="private-dining__img"
                        />
                    </motion.div>
                    <div className="private-dining__overlay" />
                </motion.div>

            </div>
        </section>
    );
}
