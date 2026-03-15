"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TestimonialsSectionProps {
    reducedMotion: boolean;
}

const testimonials = [
    {
        quote: "We arrived expecting dinner. We left having experienced something altogether different — a kind of ceremony around the table.",
        author: "Isabelle V.",
        detail: "Guest, October 2024",
    },
    {
        quote: "The scallop course alone warranted the entire journey from London. Chef Moreau has a gift for restraint that most chefs spend a lifetime chasing.",
        author: "James T.",
        detail: "Guest, September 2024",
    },
    {
        quote: "Fourteen seats, zero compromise. Every element — the pacing, the pours, the lighting — felt deliberate and unhurried.",
        author: "Camille & Étienne R.",
        detail: "Guests, August 2024",
    },
    {
        quote: "A masterclass in spatial continuity. The transition from the salon to the counter is as choreographed as the menu itself.",
        author: "Marcus L.",
        detail: "Design Critic, November 2024",
    },
    {
        quote: "Finally, a restaurant that understands the value of silence. No background noise, just the sound of fire and the scent of wild sorrel.",
        author: "Elena G.",
        detail: "Food Writer, December 2024",
    },
    {
        quote: "The wine pairings are not just complementary; they are additive. A mineral-heavy Chenin that changed how I understood the carrot dish.",
        author: "Simon P.",
        detail: "Somm Journal, January 2025",
    },
];

export function TestimonialsSection({ reducedMotion }: TestimonialsSectionProps) {
    const [active, setActive] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const next = useCallback(() => {
        setActive((a) => (a + 1) % testimonials.length);
    }, []);

    const prev = useCallback(() => {
        setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
    }, []);

    useEffect(() => {
        if (isPaused || reducedMotion) return;
        const timer = setInterval(next, 3000);
        return () => clearInterval(timer);
    }, [next, isPaused, reducedMotion]);

    return (
        <section
            className="testimonials section"
            id="testimonials"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="testimonials__inner">
                <motion.span
                    className="eyebrow"
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                    whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    Guest Notes
                </motion.span>

                <div className="testimonials__quote-wrap">
                    <span className="testimonials__open-mark" aria-hidden>"</span>
                    <AnimatePresence mode="wait">
                        <motion.blockquote
                            key={active}
                            className="testimonials__quote"
                            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98, y: 12 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 1.02, y: -10 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {testimonials[active].quote}
                        </motion.blockquote>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`author-${active}`}
                            className="testimonials__author"
                            initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <strong>{testimonials[active].author}</strong>
                            <span>{testimonials[active].detail}</span>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="testimonials__controls">
                    <button
                        type="button"
                        className="testimonials__nav"
                        onClick={() => { prev(); setIsPaused(true); }}
                        aria-label="Previous testimonial"
                        data-cursor="interactive"
                    >
                        ←
                    </button>
                    <div className="testimonials__dots">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                className={`testimonials__dot ${i === active ? "is-active" : ""}`}
                                onClick={() => { setActive(i); setIsPaused(true); }}
                                aria-label={`View testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        type="button"
                        className="testimonials__nav"
                        onClick={() => { next(); setIsPaused(true); }}
                        aria-label="Next testimonial"
                        data-cursor="interactive"
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
}
