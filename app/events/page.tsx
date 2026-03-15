import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Private Events — Atelier Origine",
    description: "Hire the entire room. Bespoke tasting menus, dedicated sommelier, and 14 seats entirely yours — Atelier Origine private dining enquiries.",
};

export default function EventsPage() {
    return (
        <div className="page-layout">
            <header className="page-header">
                <Link href="/" className="page-back">← Atelier Origine</Link>
                <div className="page-header__content">
                    <span className="eyebrow">Private Dining</span>
                    <h1>Hold the entire room.</h1>
                    <p className="page-header__sub">Available Sundays and select Mondays for exclusive private hire.</p>
                </div>
            </header>

            <main className="page-main">
                <section className="events-page">
                    <div className="events-page__grid">
                        {[
                            { title: "The Salon", cap: "6 guests", desc: "The intimate candlelit room, separated from the kitchen. Ideal for milestone dinners, proposals, and small gatherings that warrant an unhurried atmosphere." },
                            { title: "Chef's Counter", cap: "8 guests", desc: "Eight seats along the open kitchen. The chef works directly in front of your guests — introducing each course as it is plated, in real time." },
                            { title: "Full Venue", cap: "Up to 14 guests", desc: "The entire Atelier — both rooms, the cellar corridor, and the private entrance. Our most complete private experience." },
                        ].map(room => (
                            <div key={room.title} className="glass-panel events-room-card">
                                <h2>{room.title}</h2>
                                <span className="eyebrow" style={{ marginTop: "0.25rem" }}>{room.cap}</span>
                                <p style={{ marginTop: "1rem" }}>{room.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="glass-panel events-page__enquiry">
                        <h2>Make an enquiry</h2>
                        <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                            All private events include a bespoke tasting menu, dedicated sommelier, optional floral coordination, and exclusive use of the selected space. Pricing from €220 per person, minimum 6 guests.
                        </p>
                        <a
                            href="mailto:events@atelierorigine.com?subject=Private%20Dining%20Enquiry"
                            className="button button--primary"
                            style={{ marginTop: "1.5rem", display: "inline-block" }}
                        >
                            Email events@atelierorigine.com →
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}
