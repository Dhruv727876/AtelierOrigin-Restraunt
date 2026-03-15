import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import Link from "next/link";

export function MegaFooter({ reducedMotion }: { reducedMotion?: boolean }) {
    const entranceEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

    return (
        <footer className="mega-footer">
            <div className="mega-footer__top">
                <motion.div 
                    className="mega-footer__info"
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: -40 }}
                    whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: entranceEase }}
                >
                    <h4>{siteConfig.name}</h4>
                    <p dangerouslySetInnerHTML={{ __html: siteConfig.address.replace(", ", "<br />") }} />
                    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                    <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} style={{ display: "block", marginTop: "0.25rem" }}>{siteConfig.phone}</a>
                </motion.div>

                <motion.div 
                    className="mega-footer__hours"
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                    whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: entranceEase }}
                >
                    <h4>Hours</h4>
                    <div className="mega-footer__hours-grid">
                        {siteConfig.openingHours.map((item, i) => (
                            <React.Fragment key={i}>
                                <span>{item.days}</span><span>{item.time}</span>
                            </React.Fragment>
                        ))}
                    </div>
                </motion.div>

                <motion.div 
                    className="mega-footer__newsletter"
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                    whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: entranceEase }}
                >
                    <h4>Join the Vanguard</h4>
                    <p>Invitations to special pours, seasonal menu debuts, and cellar evenings.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Your email address" required aria-label="Email address" />
                        <button type="submit" aria-label="Subscribe">→</button>
                    </form>
                </motion.div>

                <motion.div 
                    className="mega-footer__social"
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: 40 }}
                    whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: entranceEase }}
                >
                    <h4>Discover</h4>
                    <Link href="#story">Our Story</Link>
                    <Link href="#menu">The Menu</Link>
                    <Link href="#tasting">The Ritual</Link>
                    <Link href="#gallery">Gallery</Link>
                    <Link href="#reserve">Reservations</Link>
                    <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
                </motion.div>
            </div>

            <div className="mega-footer__divider" />

            <div className="mega-footer__bottom">
                <p className="mega-footer__tagline">{siteConfig.tagline}</p>
                <h2 className="mega-footer__logotype" aria-hidden>{siteConfig.name}</h2>
                <div className="mega-footer__legal">
                    <span>© {new Date().getFullYear()} Designed &amp; Developed by {siteConfig.designer}</span>
                    <span className="mega-footer__legal-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms</a>
                        <a href="#">Accessibility</a>
                    </span>
                    <span style={{ textAlign: "right" }}>Powered by <strong style={{ color: "var(--accent)", fontWeight: 500 }}>{siteConfig.poweredBy}</strong></span>
                </div>
            </div>
        </footer>
    );
}
