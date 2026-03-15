import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";

interface TastingJourneyProps {
    reducedMotion: boolean;
}

export function TastingJourney({ reducedMotion }: TastingJourneyProps) {
    return (
        <section className="tasting-journey section" id="tasting">
            <div className="section-heading">
                <span className="eyebrow">The Tasting Menu</span>
                <div className="mask-text">
                    <motion.h2
                        initial={reducedMotion ? { opacity: 1 } : { y: "100%" }}
                        whileInView={reducedMotion ? { opacity: 1 } : { y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Six courses. One evening. No repeats.
                    </motion.h2>
                </div>
            </div>

            <div className="tasting-journey__courses">
                {siteConfig.tastingCourses.map((course, index) => (
                    <motion.div
                        key={course.number}
                        className="tasting-course"
                        style={{ "--course-accent": course.accent } as React.CSSProperties}
                        initial={reducedMotion ? false : { 
                            opacity: 0, 
                            y: 28,
                            x: index % 2 === 0 ? -40 : 40 
                        }}
                        whileInView={reducedMotion ? {} : { opacity: 1, y: 0, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="tasting-course__number">{course.number}</div>
                        <div className="tasting-course__connector" aria-hidden />
                        <div className="tasting-course__content">
                            <span className="tasting-course__french">{course.french}</span>
                            <h3 className="tasting-course__english">{course.english}</h3>
                            <p>{course.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="tasting-journey__footer"
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
                <p>Six courses · Sommelier pairing available · {siteConfig.pricing}</p>
                <a href="#reserve" className="button button--primary">Reserve tonight's table</a>
            </motion.div>
        </section>
    );
}
