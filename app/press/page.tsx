import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Press — Atelier Origine",
    description: "Michelin-starred, New York Times recommended, and Bon Appétit's Best New Restaurant. Media coverage and press resources for Atelier Origine.",
};

const coverage = [
    { pub: "Michelin Guide", badge: "⭑⭑", headline: "Two Stars — Exceptional Cooking, Worth a Detour", year: "2024", quote: "Chef Moreau has built something rare: a room that feels inevitable, and plates that justify the journey." },
    { pub: "The New York Times", badge: "★★★", headline: "Quietly Extraordinary", year: "2023", quote: "Few restaurants anywhere manage to hold the attention so completely with so little visual noise. Atelier Origine is the best kind of distraction from distraction." },
    { pub: "Bon Appétit", badge: "Best New Restaurant", headline: "The Room That Changed How We Think About Tasting Menus", year: "2022", quote: "A 14-seat tasting room that managed, somehow, to be both thrilling and profoundly calm. We ate here three times before we stopped taking notes." },
    { pub: "Le Figaro", headline: "Une expérience rare, à la fois intime et grandiose", year: "2023", quote: "\"Ce n'est pas un restaurant. C'est un argument.\" Chef Laurent Moreau réinvente le silence de la table gastronomique." },
    { pub: "Food & Wine", badge: "Chef to Watch 2024", headline: "The Chef Who Writes the Menu Every Morning", year: "2024", quote: "Moreau's discipline reads as almost provocative. No printed menus. No fixed repertoire. Just faith that what arrived from the farms that morning will be enough — and it always is." },
    { pub: "The World's 50 Best", badge: "#38 Europe", headline: "Extraordinary: Atelier Origine Enters at 38", year: "2024", quote: "A first entry and an immediate statement. Fourteen seats, one sitting per evening, and a kitchen running at a level that defies its size." },
];

export default function PressPage() {
    return (
        <div className="page-layout">
            <header className="page-header">
                <Link href="/" className="page-back">← Atelier Origine</Link>
                <div className="page-header__content">
                    <span className="eyebrow">Press & Recognition</span>
                    <h1>What the world wrote.</h1>
                    <p className="page-header__sub">Media enquiries: press@atelierorigine.com</p>
                </div>
            </header>

            <main className="page-main">
                <section className="press-page">
                    {coverage.map(item => (
                        <div key={item.pub} className="press-card glass-panel">
                            <div className="press-card__header">
                                <div>
                                    <span className="eyebrow">{item.pub} · {item.year}</span>
                                    {item.badge && <span className="press-card__badge">{item.badge}</span>}
                                    <h2>{item.headline}</h2>
                                </div>
                            </div>
                            <blockquote className="press-card__quote">{item.quote}</blockquote>
                        </div>
                    ))}

                    <div className="glass-panel press-page__kit">
                        <h2>Press Kit</h2>
                        <p style={{ color: "var(--muted)", lineHeight: 1.7, marginTop: "0.5rem" }}>
                            High-resolution images, approved quotes, chef biography, and fact sheet are available on request. For interview requests and media enquiries, please contact our communications team.
                        </p>
                        <a href="mailto:press@atelierorigine.com" className="button button--ghost" style={{ marginTop: "1.5rem", display: "inline-block" }}>
                            press@atelierorigine.com →
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}
