"use client";

import { ReactLenis, useLenis } from 'lenis/react';
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";
import { useActiveSection } from "@/components/scroll-utils";

import { InteractiveCursor } from "@/components/InteractiveCursor";
import { navigation, siteConfig } from "@/data/site";
import { ThemeToggle } from "@/components/ThemeToggle";
import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import { PressStrip } from "@/components/PressStrip";
import { ChefSection } from "@/components/ChefSection";
import { TastingJourney } from "@/components/TastingJourney";
import { MenuSection } from "@/components/MenuSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { GallerySection } from "@/components/GallerySection";
import { ProvenanceSection } from "@/components/ProvenanceSection";
import { PrivateDiningSection } from "@/components/PrivateDiningSection";
import { ReservationSection } from "@/components/ReservationSection";
import { MapSection, SectionDivider } from "@/components/MapSection";
import { ProvisionsStrip } from "@/components/ProvisionsStrip";
import { Preloader } from "@/components/Preloader";
import { MegaFooter } from "@/components/MegaFooter";
import { DesktopNav } from "@/components/DesktopNav";
import { MobileNavToggle, MobileNavOverlay } from "@/components/MobileNav";
import { ScrollToTop } from "@/components/ScrollToTop";

const sectionIds = ["story", "chef", "tasting", "menu", "gallery", "cellar", "events"];

export function SiteExperience() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  // Fix hydration mismatch by safely evaluating reduced motion only after mount
  const [reducedMotion, setReducedMotion] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  
  useEffect(() => {
    if (prefersReducedMotion !== null) {
      setReducedMotion(Boolean(prefersReducedMotion));
    }
  }, [prefersReducedMotion]);

  const { scrollYProgress } = useScroll();
  const heroLayerSlow = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const heroLayerMid = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const heroLayerFast = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const handlePreloadComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ position: 'fixed', inset: 0, zIndex: 999999999, pointerEvents: 'all' }}
          >
            <Preloader onComplete={handlePreloadComplete} />
          </motion.div>
        )}
      </AnimatePresence>
      <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>

      {/* Fixed-position UI — must live OUTSIDE motion.main to avoid transform containing-block trap */}
      <div className="page-noise" aria-hidden />
      
      <MobileNavOverlay isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />

      <motion.main
        id="top"
        className="site-shell"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="topbar">
          <Link href="#top" className="brandmark" data-cursor="interactive">
            <span className="brandmark__crest">AO</span>
            <span className="brandmark__copy">
              {siteConfig.name}
              <small>{siteConfig.tagline}</small>
            </span>
          </Link>

          <div className="topbar__center">
            <DesktopNav activeSection={activeSection} />
          </div>

          <div className="topbar__actions">
            <a href="#reserve" className="button button--ghost desktop-only" data-cursor="interactive">
              Reserve a seat
            </a>
            <ThemeToggle />
            <MobileNavToggle isOpen={isMobileNavOpen} onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} />
          </div>
        </header>

        <HeroSection
          reducedMotion={reducedMotion}
          heroLayerSlow={heroLayerSlow}
          heroLayerMid={heroLayerMid}
          heroLayerFast={heroLayerFast}
        />

        <PressStrip />

        <StorySection reducedMotion={reducedMotion} />

        <SectionDivider label="Manifesto" />

        <ChefSection reducedMotion={reducedMotion} />

        <SectionDivider label="Ritual" />

        <TastingJourney reducedMotion={reducedMotion} />

        <SectionDivider label="Carte" />

        <MenuSection reducedMotion={reducedMotion} />

        <SectionDivider label="Acclaim" />

        <TestimonialsSection reducedMotion={reducedMotion} />

        <GallerySection reducedMotion={reducedMotion} />

        <ProvisionsStrip />

        <SectionDivider label="Provenance" />

        <ProvenanceSection reducedMotion={reducedMotion} />

        <PrivateDiningSection reducedMotion={reducedMotion} />

        <SectionDivider label="Arrival" />

        <MapSection reducedMotion={reducedMotion} />

        <ReservationSection reducedMotion={reducedMotion} />

        <MegaFooter reducedMotion={reducedMotion} />
      </motion.main>
      <ScrollToTop />
    </ReactLenis>
    </>
  );
}
