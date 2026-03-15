"use client";

import { motion } from "framer-motion";

const pressItems = [
    { name: "Michelin Guide", note: "⭑⭑ Two Stars" },
    { name: "The New York Times", note: "\"Quietly extraordinary\"" },
    { name: "Bon Appétit", note: "Best New Restaurant" },
    { name: "Le Figaro", note: "\"Une expérience rare\"" },
    { name: "Food & Wine", note: "Chef to Watch 2024" },
    { name: "The World's 50 Best", note: "#38 — Europe" },
    { name: "GQ France", note: "Table of the Year" },
    { name: "Condé Nast Traveller", note: "Unmissable in Paris" },
];

// Duplicate for seamless loop
const doubled = [...pressItems, ...pressItems];

export function PressStrip() {
    return (
        <div className="press-strip" aria-label="Press and awards">
            <div className="press-strip__track-wrap">
                <motion.div
                    className="press-strip__track"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 50, ease: "linear", repeat: Infinity }}
                >
                    {doubled.map((item, i) => (
                        <div key={`fw-${i}`} className="press-strip__item">
                            <span className="press-strip__name">{item.name}</span>
                            <span className="press-strip__note">{item.note}</span>
                            <span className="press-strip__dot" aria-hidden>✦</span>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    className="press-strip__track press-strip__track--reverse"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ duration: 50, ease: "linear", repeat: Infinity }}
                >
                    {doubled.map((item, i) => (
                        <div key={`rev-${i}`} className="press-strip__item">
                            <span className="press-strip__name">{item.name}</span>
                            <span className="press-strip__note">{item.note}</span>
                            <span className="press-strip__dot" aria-hidden>✦</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
