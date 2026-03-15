"use client";

import { useEffect, useState } from "react";

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId: number;
    let lastScrollY = window.scrollY;

    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScrollY = window.scrollY || document.documentElement.scrollTop;
      
      if (currentScrollY !== lastScrollY) {
        lastScrollY = currentScrollY;
        const currentProgress = scrollHeight > 0 ? (currentScrollY / scrollHeight) * 100 : 0;
        setProgress(currentProgress);
      }
      rafId = requestAnimationFrame(updateProgress);
    };

    rafId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "2px",
        width: `${progress}%`,
        background: "linear-gradient(to right, transparent, var(--accent))",
        zIndex: 2147483647, 
        pointerEvents: "none",
        willChange: "width", // Optimize for frequent updates
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          height: "2px",
          width: "15px",
          backgroundColor: "var(--accent)",
          boxShadow: "0 0 10px 2px var(--accent), 0 0 20px 4px var(--accent)",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}
