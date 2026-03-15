"use client";

import { motion } from "framer-motion";
import { storyItems } from "@/data/site";

const entranceEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface StorySectionProps {
    reducedMotion: boolean;
}

export function StorySection({ reducedMotion }: StorySectionProps) {
    return (
        <section className="story section" id="story">
            <div className="section-heading">
                <span className="eyebrow">Our philosophy</span>
                <div className="mask-text">
                    <motion.h2
                        initial={reducedMotion ? { opacity: 1 } : { y: "100%" }}
                        whileInView={reducedMotion ? { opacity: 1 } : { y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Crafted slowly. Served with intention.
                    </motion.h2>
                </div>
            </div>
            <div className="story-grid">
                {storyItems.map((item, index) => (
                    <motion.article
                        key={item.title}
                        className="glass-panel"
                        initial={reducedMotion ? false : { opacity: 0, y: 24, x: item.x }}
                        whileInView={reducedMotion ? {} : { opacity: 1, y: 0, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.75, delay: index * 0.1, ease: entranceEase }}
                    >
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
