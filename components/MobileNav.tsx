"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navigation, siteConfig } from "@/data/site";

export function MobileNavToggle({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
    return (
        <button
            className={`mobile-nav-toggle ${isOpen ? "is-open" : ""}`}
            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
            style={{ 
                pointerEvents: 'auto'
            }}
        >
            <span className="mobile-nav-toggle__line" style={{ background: isOpen ? 'var(--text)' : 'var(--text)' }} />
            <span className="mobile-nav-toggle__line" style={{ background: isOpen ? 'var(--text)' : 'var(--text)' }} />
        </button>
    );
}

export function MobileNavOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen, mounted]);

    if (!mounted) return null;

    const portalContent = (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ 
                        position: 'fixed',
                        inset: 0,
                        zIndex: 1000000,
                        backgroundColor: 'var(--surface-strong)',
                        backdropFilter: 'blur(30px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        flexDirection: 'column',
                        padding: '5rem 2rem',
                        color: 'var(--text)',
                        overflowY: 'auto',
                        WebkitOverflowScrolling: 'touch'
                    }}
                >
                    {/* Close Button inside Portal */}
                    <button
                        onClick={onClose}
                        aria-label="Close Menu"
                        style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '0.75rem',
                            width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            border: '1px solid var(--line)',
                            background: 'var(--surface-strong)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '6px',
                            cursor: 'pointer',
                            zIndex: 1000001
                        }}
                    >
                        <span style={{ width: '18px', height: '1.5px', background: 'currentColor', transform: 'translateY(3.75px) rotate(45deg)' }} />
                        <span style={{ width: '18px', height: '1.5px', background: 'currentColor', transform: 'translateY(-3.75px) rotate(-45deg)' }} />
                    </button>

                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        style={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center',
                            gap: '1.5rem',
                            textAlign: 'center',
                            width: '100%',
                            maxWidth: '400px'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div>
                           <span style={{ letterSpacing: '0.45em', textTransform: 'uppercase', fontSize: '0.6rem', opacity: 0.35 }}>Ritual Menu</span>
                        </div>

                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {navigation.map((item, i) => (
                                <motion.a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={onClose}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + i * 0.04 }}
                                    style={{ 
                                        fontSize: '1.25rem', 
                                        fontFamily: 'var(--font-serif)', 
                                        color: 'inherit',
                                        textDecoration: 'none',
                                        fontWeight: 400,
                                        letterSpacing: '0.01em',
                                        padding: '0.4rem 0'
                                    }}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                        </nav>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            style={{ marginTop: '1.5rem', borderTop: '1px solid var(--line)', paddingTop: '1.5rem', width: '80%' }}
                        >
                            <div style={{ marginBottom: '1rem' }}>
                                <p style={{ opacity: 0.35, fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.3rem' }}>Location</p>
                                <p style={{ fontSize: '0.75rem', opacity: 0.85 }}>{siteConfig.address}</p>
                            </div>
                            <div>
                                <p style={{ opacity: 0.35, fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.3rem' }}>Reservations</p>
                                <p style={{ fontSize: '0.75rem' }}>
                                    <a href={`mailto:${siteConfig.email}`} style={{ color: 'var(--accent)', opacity: 0.9 }}>{siteConfig.email}</a>
                                    <br />
                                    <span style={{ display: 'block', marginTop: '0.3rem', opacity: 0.85 }}>{siteConfig.phone}</span>
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    return createPortal(portalContent, document.body);
}

export function MobileNav() { return null; }
