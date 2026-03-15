"use client";

import { motion, MotionValue } from "framer-motion";
import dynamic from "next/dynamic";
import { ProgressiveImage } from "./ProgressiveImage";
import steamLottie from "@/data/steam-lottie.json";
import { heroLines, siteConfig } from "@/data/site";
import { CounterTicker } from "./CounterTicker";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const entranceEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

function HeroSteam({ reducedMotion }: { reducedMotion: boolean }) {
    if (reducedMotion) {
        return <div className="steam-static" aria-hidden />;
    }

    return (
        <div className="steam-wrap" aria-hidden>
            <Lottie animationData={steamLottie} loop className="steam-lottie" />
        </div>
    );
}

interface HeroSectionProps {
    reducedMotion: boolean;
    heroLayerSlow: MotionValue<number>;
    heroLayerMid: MotionValue<number>;
    heroLayerFast: MotionValue<number>;
}

export function HeroSection({ reducedMotion, heroLayerSlow, heroLayerMid, heroLayerFast }: HeroSectionProps) {
    return (
        <section className="hero">
            <motion.div className="hero__vignette" style={{ y: reducedMotion ? 0 : heroLayerSlow }} />
            <motion.div className="hero__texture" style={{ y: reducedMotion ? 0 : heroLayerMid }} />
            <motion.div className="hero__plate hero__plate--back" style={{ y: reducedMotion ? 0 : heroLayerMid }} />
            <motion.div className="hero__plate hero__plate--front" style={{ y: reducedMotion ? 0 : heroLayerFast }} />

            <div className="hero__content">
                <div className="eyebrow">{siteConfig.tagline}</div>
                <div className="hero__title-wrap">
                    {heroLines.map((line, index) => (
                        <div key={line} className="mask-text">
                            <motion.span
                                className="hero__line"
                                initial={reducedMotion ? { opacity: 1 } : { y: "100%", skewY: 7 }}
                                animate={reducedMotion ? { opacity: 1 } : { y: 0, skewY: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {line}
                            </motion.span>
                        </div>
                    ))}
                </div>
                <div className="mask-text">
                    <motion.p
                        className="hero__lede"
                        initial={reducedMotion ? { opacity: 1 } : { y: "100%" }}
                        animate={reducedMotion ? { opacity: 1 } : { y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {siteConfig.metadata.description}
                    </motion.p>
                </div>
                <motion.div
                    className="hero__actions"
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                    animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.68, delay: 0.36, ease: entranceEase }}
                >
                    <a href="#reserve" className="button button--primary" data-cursor="interactive">
                        <span>Reserve a seat</span>
                        <small>NO CARD REQUIRED</small>
                    </a>
                    <a href="#menu" className="button button--ghost" data-cursor="interactive">
                        Explore the menu
                    </a>
                </motion.div>
            </div>

            <div className="hero__visual">
                <div className="hero-card hero-card--main">
                    <ProgressiveImage src="/images/salon.png" alt="Atelier Origine Dining Room" priority={true} />
                    <HeroSteam reducedMotion={reducedMotion} />
                </div>
                
                <motion.div 
                    className="hero-card hero-card--detail" 
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
                    animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: entranceEase }}
                >
                    <div className="metric-card">
                        <span className="metric-card__label">Tonight's pacing</span>
                        <strong>
                            <CounterTicker value={14} />
                            <small>seats</small>
                        </strong>
                        <p>One seating cadence. Layered service. <CounterTicker value={80} suffix="mi" /> provenance.</p>
                        <div className="metric-card__icon" aria-hidden>
                            <div className="metric-card__dot"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
