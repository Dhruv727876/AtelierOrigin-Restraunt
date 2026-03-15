"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { InteractiveCursor } from "@/components/InteractiveCursor";

export default function NotFound() {
  return (
    <div className="error-page">
      <InteractiveCursor />
      <div className="page-noise" aria-hidden />
      
      <main className="error-page__content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", maxWidth: "500px" }}
        >
          <span className="eyebrow" style={{ display: "block", marginBottom: "1.5rem" }}>Error 404</span>
          <h1 className="serif" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            The ritual was interrupted.
          </h1>
          <p style={{ fontSize: "1.1rem", opacity: 0.7, marginBottom: "3rem" }}>
            The page you are looking for has drifted from our provenance.
          </p>
          <Link href="/" className="button button--primary">
            Return to {siteConfig.name}
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
