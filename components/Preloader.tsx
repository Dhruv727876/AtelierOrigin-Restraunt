"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Atelier Origine Preloading Ritual
 * A premium circular animation refined for reliable visibility.
 */
export function Preloader({ onComplete }: { onComplete?: () => void }) {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(true);
    const [mounted, setMounted] = useState(false);
    const onCompleteRef = useRef(onComplete);

    useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
        setMounted(true);
        console.info("Atelier Ritual: Commencing Opening...");
        
        const duration = 2200; // Ritual duration
        const startTime = Date.now();

        const timer = setInterval(() => {
            const now = Date.now();
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out progress for premium feel
            const easedProgress = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easedProgress * 100));

            if (progress >= 1) {
                clearInterval(timer);
                console.info("Atelier Ritual: Complete.");
                onCompleteRef.current?.();
                // Brief pause at 100% for impact before fade
                setTimeout(() => setVisible(false), 800);
            }
        }, 16);

        return () => clearInterval(timer);
    }, []);

    if (!visible) return null;

    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (count / 100) * circumference;

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#0d0c0b',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#f2ede3',
            pointerEvents: 'all',
            overflow: 'hidden',
            margin: 0,
            padding: 0,
            border: 'none',
            outline: 'none',
            opacity: mounted ? 1 : 0,
            zIndex: 999999,
            transition: 'opacity 0.5s ease'
        }}>
            {/* Ambient Glow */}
            <div style={{
                position: 'absolute',
                width: '600px',
                height: '600px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(214, 166, 107, 0.08) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2.5rem',
                    position: 'relative',
                    zIndex: 10
                }}
            >
                {/* Brandmark */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem'
                }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        border: '1px solid rgba(214, 166, 107, 0.5)',
                        display: 'grid',
                        placeItems: 'center',
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1rem',
                        color: '#d6a66b',
                        background: 'rgba(214, 166, 107, 0.03)'
                    }}>AO</div>
                    <h1 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '0.9rem',
                        letterSpacing: '0.5em',
                        textTransform: 'uppercase',
                        color: '#f2ede3',
                        margin: 0
                    }}>Atelier Origine</h1>
                </div>

                {/* Circular Progress */}
                <div style={{ 
                    position: 'relative',
                    width: '200px',
                    height: '200px',
                    display: 'grid',
                    placeItems: 'center'
                }}>
                    <svg viewBox="0 0 160 160" style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        transform: 'rotate(-90deg)'
                    }}>
                        <circle
                            cx="80"
                            cy="80"
                            r={radius}
                            fill="none"
                            stroke="rgba(214, 166, 107, 0.1)"
                            strokeWidth="1"
                        />
                        <circle
                            cx="80"
                            cy="80"
                            r={radius}
                            fill="none"
                            stroke="#d6a66b"
                            strokeWidth="2"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            strokeLinecap="round"
                            style={{ transition: 'stroke-dashoffset 0.15s linear' }}
                        />
                    </svg>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <div style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '3.5rem',
                            color: '#f2ede3',
                            lineHeight: 1,
                            fontWeight: 400
                        }}>
                            {count}<span style={{ fontSize: '1.2rem', color: '#d6a66b', marginLeft: '2px' }}>%</span>
                        </div>
                        <p style={{
                            fontSize: '0.6rem',
                            letterSpacing: '0.4em',
                            textTransform: 'uppercase',
                            color: 'rgba(242, 237, 227, 0.4)',
                            margin: '0.5rem 0 0'
                        }}>
                            Opening Ritual
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Subtle Progress Bar (Bottom) */}
            <div style={{
                position: 'absolute',
                bottom: '3rem',
                width: '120px',
                height: '1px',
                background: 'rgba(214, 166, 107, 0.1)',
                overflow: 'hidden'
            }}>
                <div style={{
                    height: '100%',
                    background: '#d6a66b',
                    width: `${count}%`,
                    opacity: 0.5,
                    transition: 'width 0.15s linear'
                }} />
            </div>
        </div>
    );
}
