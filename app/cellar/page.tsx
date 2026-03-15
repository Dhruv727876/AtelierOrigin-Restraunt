import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "The Cellar — Atelier Origine",
    description: "280+ natural and biodynamic wines sourced within 80 miles. Explore the Atelier Origine cellar list — curated by three resident sommeliers.",
};

const wines = [
    {
        region: "Champagne & Pétillant", items: [
            { name: "Laherte Frères — Ultradition", year: "NV", style: "Pét-nat, multi-vintage blend", price: "€74" },
            { name: "Bénédicte & Stéphane Tissot", year: "2020", style: "Cerdon du Bugey, Gamay, pétillant", price: "€58" },
        ]
    },
    {
        region: "White — Burgundy & Loire", items: [
            { name: "Domaine Valette — Mâcon-Chaintré", year: "2021", style: "Chardonnay, biodynamic mineral", price: "€88" },
            { name: "Mark Angeli — La Lune", year: "2022", style: "Chenin Blanc, oxidative, saline", price: "€96" },
            { name: "Olivier Lemasson — Vin du Pays", year: "2021", style: "Chenin Blanc, low sulphur", price: "€62" },
        ]
    },
    {
        region: "Red — Rhône & Beaujolais", items: [
            { name: "Jean Foillard — Morgon", year: "2022", style: "Gamay, whole cluster, earthy depth", price: "€92" },
            { name: "Domaine Gramenon — Mémé", year: "2019", style: "Grenache, organic, ethereal", price: "€110" },
        ]
    },
    {
        region: "Cellar Selections — Aged", items: [
            { name: "Huet — Vouvray Le Mont Moelleux", year: "1989", style: "Late harvest Chenin, legendary", price: "€420" },
            { name: "Noël Verset — Cornas", year: "1998", style: "Syrah, stone fruit, iron finish", price: "€380" },
        ]
    },
];

export default function CellarPage() {
    return (
        <div className="page-layout">
            <header className="page-header">
                <Link href="/" className="page-back">← Atelier Origine</Link>
                <div className="page-header__content">
                    <span className="eyebrow">The Cellar</span>
                    <h1>Every bottle has a story.</h1>
                    <p className="page-header__sub">Natural, biodynamic, within 80 miles. Curated by three resident sommeliers.</p>
                </div>
            </header>

            <main className="page-main">
                <section className="cellar-page">
                    {wines.map(group => (
                        <div key={group.region} className="cellar-group">
                            <h2 className="cellar-group__region">{group.region}</h2>
                            <div className="cellar-group__list">
                                {group.items.map(wine => (
                                    <div key={wine.name} className="cellar-wine glass-panel">
                                        <div className="cellar-wine__info">
                                            <strong>{wine.name}</strong>
                                            <span className="eyebrow">{wine.year} · {wine.style}</span>
                                        </div>
                                        <span className="cellar-wine__price">{wine.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="glass-panel cellar-page__note">
                        <p>This represents a selection from the current list. The full cellar is available at the table with your sommelier on the evening of your visit. Pairing menus (+€65) are composed personally for each seating.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
