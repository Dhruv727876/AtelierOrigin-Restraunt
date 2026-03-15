"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function InteractiveCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  // Raw pointer metrics linked to hardware cursor
  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);

  // Fast, low-latency spring for the main dot
  const dotX = useSpring(pointerX, { stiffness: 800, damping: 35, mass: 0.1 });
  const dotY = useSpring(pointerY, { stiffness: 800, damping: 35, mass: 0.1 });

  // Fluid trailing spring for the outer halo
  const haloX = useSpring(pointerX, { stiffness: 200, damping: 30, mass: 0.5 });
  const haloY = useSpring(pointerY, { stiffness: 200, damping: 30, mass: 0.5 });

  // Adjust coordinates for the CSS width/height native offsets
  const finalDotX = useTransform(dotX, (v) => v - 4);
  const finalDotY = useTransform(dotY, (v) => v - 4);
  const finalHaloX = useTransform(haloX, (v) => v - 18);
  const finalHaloY = useTransform(haloY, (v) => v - 18);

  // State targets
  const targetScale = useMotionValue(1);
  const targetHaloScale = useMotionValue(1);
  const targetOpacity = useMotionValue(0);

  // Smooth UI states
  const scale = useSpring(targetScale, { stiffness: 400, damping: 30 });
  const haloScale = useSpring(targetHaloScale, { stiffness: 400, damping: 30 });
  const opacity = useSpring(targetOpacity, { stiffness: 300, damping: 30 });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(pointer: fine)");
    const updateEnabled = () => setEnabled(mediaQuery.matches && !prefersReducedMotion);
    updateEnabled();
    mediaQuery.addEventListener("change", updateEnabled);

    return () => mediaQuery.removeEventListener("change", updateEnabled);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handleMove = (event: PointerEvent) => {
      // Extremely performant raw value sets (no new animations instantiated)
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
      
      if (targetOpacity.get() === 0) {
        targetOpacity.set(1);
      }
    };

    const handleLeave = () => {
      targetOpacity.set(0);
    };

    const handleOver = (event: Event) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [data-cursor='interactive'], input, textarea");
      
      if (interactive) {
        targetScale.set(1.4);
        targetHaloScale.set(1.7);
      } else {
        targetScale.set(1);
        targetHaloScale.set(1);
      }
    };

    // Use passive listeners to avoid main-thread blocking
    window.addEventListener("pointermove", handleMove, { passive: true });
    document.addEventListener("pointerover", handleOver, { passive: true });
    document.addEventListener("mouseleave", handleLeave, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerover", handleOver);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [enabled, pointerX, pointerY, targetOpacity, targetScale, targetHaloScale]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <motion.div aria-hidden className="cursor-dot" style={{ x: finalDotX, y: finalDotY, scale, opacity }} />
      <motion.div aria-hidden className="cursor-halo" style={{ x: finalHaloX, y: finalHaloY, scale: haloScale, opacity }} />
    </>
  );
}
