"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const themes = [
    { id: "dark", label: "Onyx" },
    { id: "sand", label: "Sand" },
    { id: "forest", label: "Forest" }
];

export function ThemeToggle() {
    const [theme, setTheme] = useState("dark");
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsMounted(true);
        const savedTheme = window.localStorage.getItem("site-theme") || "dark";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme === "dark" ? "" : savedTheme);
    }, []);

    // Click outside to close
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const toggleTheme = (newTheme: string) => {
        setTheme(newTheme);
        window.localStorage.setItem("site-theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme === "dark" ? "" : newTheme);
        setIsOpen(false); // Close menu after selection
    };

    if (!isMounted) {
        return (
            <div className="theme-toggle" style={{ position: 'relative' }}>
                <button
                    className="theme-toggle__btn"
                    aria-label="Change theme"
                    style={{
                        backgroundColor: 'transparent',
                        color: 'var(--muted)',
                        borderColor: 'transparent',
                        transition: 'all 0.3s ease'
                    }}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </svg>
                </button>
            </div>
        );
    }

    return (
        <div
            ref={containerRef}
            className="theme-toggle"
            style={{ position: 'relative' }} // ensure positioning context
        >
            <button
                className={`theme-toggle__btn ${isOpen ? 'is-active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Change theme"
                aria-expanded={isOpen}
                data-cursor="interactive"
                style={{
                    backgroundColor: isOpen ? 'var(--text)' : 'transparent',
                    color: isOpen ? 'var(--bg)' : 'var(--muted)',
                    borderColor: isOpen ? 'var(--text)' : 'var(--line)',
                    transition: 'all 0.3s ease'
                }}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="theme-toggle__dropdown"
                        initial={{ opacity: 0, y: -8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -4, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        style={{
                            pointerEvents: "auto",
                            display: "flex",
                            flexDirection: "column",
                            overflow: "visible",
                            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                            background: 'var(--surface-strong)'
                        }}
                    >
                        {themes.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => toggleTheme(t.id)}
                                className={`theme-toggle__option ${theme === t.id ? "is-active" : ""}`}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                {t.label}
                                {theme === t.id && (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '1rem' }}>
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                )}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
