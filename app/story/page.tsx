import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Our Story — Atelier Origine",
    description: "The origin of Atelier Origine — from training under Alain Passard to opening a 14-seat room built on one principle: nothing without purpose.",
};

export default function StoryPage() {
    return (
        <div className="page-layout">
            <header className="page-header">
                <Link href="/" className="page-back">← Atelier Origine</Link>
                <div className="page-header__content">
                    <span className="eyebrow">The Origin</span>
                    <h1>A room built around one question.</h1>
                    <p className="page-header__sub">What happens when a chef stops cooking for applause?</p>
                </div>
            </header>

            <main className="page-main">
                <article className="story-article">
                    <div className="story-article__pull glass-panel">
                        <blockquote>"I wanted to cook for the person who wasn't sure why they were moved. That's the guest I opened this room for."</blockquote>
                        <cite>— Chef Laurent Moreau, 2019</cite>
                    </div>

                    <div className="story-article__body">
                        <h2>Seven years in Paris. One room in return.</h2>
                        <p>Laurent Moreau arrived at L'Arpège at 24 with a single bag and one sentence of French. He left seven years later with a discipline rooted in scarcity — the belief that cooking from fewer ingredients, fewer techniques, and fewer intentions produces something that the fuller approach never quite reaches.</p>
                        <p>He returned to open Atelier Origine not as a statement, but as a question: can a room of fourteen seats sustain itself entirely on the merit of what's served there each evening?</p>

                        <h2>One menu. Written daily.</h2>
                        <p>The menu at Atelier Origine is not decided the week before, nor assembled from a standing repertoire. It is written the morning of service, based on what arrives at the kitchen that day — from the seven farms within 80 kilometres that supply exclusively to Atelier Origine, and from the cellar that has been quietly composing itself since 2017.</p>
                        <p>There are no substitutions. There is no printed menu at the table. Guests are told, as each plate arrives, what they are eating — in as many or as few words as they wish to hear.</p>

                        <h2>The room itself.</h2>
                        <p>The dining room holds fourteen seats: eight around the chef's counter and six in the salon. It was designed without art on the walls — only the grain of the linen, the quality of the candlelight, and the smell of what is being cooked a few metres away. Nothing is meant to distract from the fact that you came here to eat.</p>

                        <div className="story-article__stats">
                            {[
                                { n: "2019", label: "Year of opening" },
                                { n: "14", label: "Seats each evening" },
                                { n: "1", label: "Menu, written daily" },
                                { n: "7", label: "Partner farms" },
                            ].map(item => (
                                <div key={item.n} className="chef-section__stat">
                                    <strong>{item.n}</strong>
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="story-article__cta">
                        <a href="/#reserve" className="button button--primary">Reserve a seat →</a>
                        <Link href="/menu" className="button button--ghost">View current menu</Link>
                    </div>
                </article>
            </main>
        </div>
    );
}
