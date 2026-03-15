"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { navigation } from "@/data/site";

const navImages: Record<string, string> = {
    story: "/images/chef.png",
    chef: "/images/chef.png",
    tasting: "/images/scallop_main.png",
    menu: "/images/scallop_main.png",
    gallery: "/images/salon.png",
    cellar: "/images/wine_main.png",
    events: "/images/private_dining.png",
    reserve: "/images/wine_main.png",
};

export function DesktopNav({ activeSection }: { activeSection: string | null }) {
    const [hovered, setHovered] = useState<string | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    return (
        <nav
            className="desktop-nav"
            aria-label="Primary"
            onMouseMove={handleMouseMove}
        >
            {navigation.map((item) => {
                const isCurrent = hovered ? hovered === item.id : activeSection === item.id;
                return (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`nav-link ${isCurrent ? "is-active" : ""}`}
                        onMouseEnter={() => setHovered(item.id)}
                        onMouseLeave={() => setHovered(null)}
                        data-cursor="interactive"
                    >
                        {isCurrent && (
                            <motion.div
                                layoutId="nav-pill"
                                className="nav-pill"
                                initial={false}
                                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                            />
                        )}
                        <span className="nav-link__text">{item.label}</span>
                    </a>
                );
            })}

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        className="nav-hover-image"
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            rotate: 0,
                            x: mousePos.x - 100, // Offset to center over cursor or offset from it
                            y: mousePos.y - 140
                        }}
                        exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            pointerEvents: "none",
                            zIndex: 9999,
                            width: "200px",
                            aspectRatio: "3/4",
                            borderRadius: "var(--radius-sm)",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src={navImages[hovered]}
                            alt=""
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
