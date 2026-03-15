import type { Metadata } from "next";
import Link from "next/link";
import { menuItems } from "@/data/site";

export const metadata: Metadata = {
    title: "The Menu — Atelier Origine",
    description: "Six courses written fresh each morning. Seasonal, rooted, and without repetition — Atelier Origine's current tasting menu.",
};

export default function MenuPage() {
    return (
        <div className="page-layout">
            <header className="page-header">
                <Link href="/" className="page-back">← Atelier Origine</Link>
                <div className="page-header__content">
                    <span className="eyebrow">The Table</span>
                    <h1>Our Current Menu</h1>
                    <p className="page-header__sub">Rewritten each morning. Served once. All sourced within 80 miles.</p>
                </div>
            </header>

            <main className="page-main">
                <section className="full-menu">
                    <div className="full-menu__intro glass-panel">
                        <p>
                            The tasting menu at Atelier Origine is a single sequence of six courses, composed by Chef Laurent Moreau the morning of service. It is not printed in advance. Below is the current week's offering — subject to change without notice based on what arrives at the kitchen door.
                        </p>
                        <p style={{ marginTop: "0.75rem" }}>
                            <strong>€185 per person</strong> · Sommelier pairing <strong>+€65</strong> · Non-alcoholic pairing <strong>+€42</strong>
                        </p>
                    </div>

                    <div className="full-menu__courses">
                        {[
                            { course: "Amuse-Bouche", dish: "Oyster Leaf Mignonette", desc: "A single bite: the leaf that tastes of the sea, set with a cold beurre blanc mignonette and caviar grain." },
                            { course: "Entrée", dish: "Heirloom Carrot & Black Garlic", desc: "Charred heirloom carrot, cultured cream, buckwheat crumble. Harvested from Domaine Vidal, 12 miles north." },
                            { course: "Poisson", dish: "Ember Scallop", desc: "Line-caught Day Boat scallop, brown butter emulsion, kaffir oil, preserved citrus zest — finished tableside." },
                            { course: "Intermezzo", dish: "Verjus Sorbet", desc: "Pressed grape must from the Domaine, frozen with lemon verbena. A small, cold, luminous reset." },
                            { course: "Viande", dish: "Côte de Bœuf — Slow Coal", desc: "Heritage Black Angus, rested 40 minutes. Coal-roasted with marrow jus that takes three days to reduce." },
                            { course: "Mignardises", dish: "Midnight Tarte & Four Sweets", desc: "Single-origin chocolate tarte, smoked cream. Followed by a tray of four changing sweets — the chef's farewell." },
                        ].map((item, i) => (
                            <div key={i} className="full-menu__course glass-panel">
                                <div className="full-menu__course-num">0{i + 1}</div>
                                <div className="full-menu__course-body">
                                    <span className="eyebrow">{item.course}</span>
                                    <h2>{item.dish}</h2>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="full-menu__note glass-panel">
                        <p>Dietary requirements &amp; allergies are accommodated with advance notice at time of reservation. The kitchen is entirely gluten-free capable.</p>
                        <a href="/#reserve" className="button button--primary" style={{ marginTop: "1.5rem", display: "inline-block" }}>Reserve your table →</a>
                    </div>
                </section>
            </main>
        </div>
    );
}
