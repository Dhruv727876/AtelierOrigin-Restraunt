"use client";

import { motion } from "framer-motion";

const ingredients = [
    "White Truffle", "Oyster Leaf", "Hand-dived Scallop", "Cultured Butter", "Black Garlic",
    "Elderberry", "Kohlrabi", "Wild Sorrel", "Heritage Beet", "Smoked Cream", "Juniper Smoke"
];

// Duplicate for loop
const doubled = [...ingredients, ...ingredients, ...ingredients];

export function ProvisionsStrip() {
    return (
        <div className="provisions-strip">
            <motion.div
                className="provisions-strip__track"
                animate={{ x: ["0%", "-33.33%"] }}
                transition={{ duration: 24, ease: "linear", repeat: Infinity }}
            >
                {doubled.map((item, i) => (
                    <span key={i} className="provisions-strip__item">
                        {item} <span className="provisions-strip__sep">/</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
