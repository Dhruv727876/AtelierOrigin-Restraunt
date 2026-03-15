"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface CounterTickerProps {
    value: number;
    direction?: "up" | "down";
    prefix?: string;
    suffix?: string;
    duration?: number;
}

export function CounterTicker({ value, direction = "up", prefix = "", suffix = "", duration = 2 }: CounterTickerProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const spring = useSpring(direction === "up" ? 0 : value, {
        stiffness: 25,
        damping: 15,
        mass: 0.5,
        restDelta: 0.001
    });

    const displayValue = useTransform(spring, (latest) => Math.round(latest).toLocaleString());

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, spring, value]);

    return (
        <span ref={ref} className="counter-ticker">
            {prefix}
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </span>
    );
}
