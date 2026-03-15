"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";

export function SectionDivider({ label }: { label?: string }) {
    return (
        <div className="section-divider">
            <motion.div 
                className="section-divider__line" 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 1 }}
            />
            {label && (
                <motion.span 
                    className="section-divider__label"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {label}
                </motion.span>
            )}
            <motion.div 
                className="section-divider__line" 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0 }}
            />
        </div>
    );
}

export function MapSection({ reducedMotion }: { reducedMotion?: boolean }) {
    const entranceEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

    return (
        <section className="map-section section" id="location">
            <div className="map-section__grid">
                <motion.div 
                    className="map-section__card glass-panel"
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: -40 }}
                    whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9, ease: entranceEase }}
                >
                    <span className="eyebrow">Location</span>
                    <h2>Find your way back.</h2>
                    <p dangerouslySetInnerHTML={{ __html: siteConfig.address.replace(", ", "<br />") }} />
                    <div className="map-section__info">
                        <div>
                            <strong>Metro</strong>
                            <p>{siteConfig.logistics.metro}</p>
                        </div>
                        <div>
                            <strong>Valet</strong>
                            <p>{siteConfig.logistics.valet}</p>
                        </div>
                    </div>
                    <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="button button--ghost" data-cursor="interactive">
                        Get directions →
                    </a>
                </motion.div>
                <motion.div 
                    className="map-section__visual glass-panel"
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: 40 }}
                    whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9, ease: entranceEase }}
                >
                    {/* Stylized dark-mode map placeholder or embed */}
                    <div className="map-placeholder">
                        <div className="map-placeholder__marker" />
                        <div className="map-placeholder__rings" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
