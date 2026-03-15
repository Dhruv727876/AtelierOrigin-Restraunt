import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';

export const metadata = {
  title: 'Component Styleguide | Atelier Template',
  description: 'An index of typographic scales, colors, and core components inside the Atelier Origine template.',
};

export default function Styleguide() {
  return (
    <main className="site-shell" style={{ 
      padding: '8rem 2rem', 
      maxWidth: '1200px', 
      margin: '0 auto',
      backgroundColor: 'var(--bg)',
      color: 'var(--text)'
    }}>
      <header style={{ marginBottom: '4rem', paddingBottom: '2rem', borderBottom: '1px solid currentColor', opacity: 0.9 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: 0, fontWeight: 400 }}>Atelier Styleguide</h1>
            <p style={{ opacity: 0.7, marginTop: '1rem', fontSize: '1.125rem', maxWidth: '600px' }}>
              A visual index of the design tokens, typography, and core components available in this premium template.
            </p>
          </div>
          <ThemeToggle />
        </div>
        <Link href="/" className="button button--ghost" style={{ marginTop: '2rem', display: 'inline-flex' }}>
          &larr; Live Experience
        </Link>
      </header>

      <section style={{ marginBottom: '6rem' }}>
        <h2 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem', opacity: 0.6 }}>Typography — Playfair Display & Manrope</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', opacity: 0.5, textTransform: 'uppercase' }}>Text Hero (var(--text-hero))</span>
            <div style={{ fontSize: 'var(--text-hero)', fontFamily: 'var(--font-serif)', lineHeight: 1.1 }}>Boutique Tasting</div>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', opacity: 0.5, textTransform: 'uppercase' }}>Heading 1 (var(--text-h1))</span>
            <div style={{ fontSize: 'var(--text-h1)', fontFamily: 'var(--font-serif)', lineHeight: 1.2 }}>Chapter One: Fire</div>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', opacity: 0.5, textTransform: 'uppercase' }}>Heading 2 (var(--text-h2))</span>
            <div style={{ fontSize: 'var(--text-h2)', fontFamily: 'var(--font-serif)', lineHeight: 1.3 }}>Our Philosophy</div>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', opacity: 0.5, textTransform: 'uppercase' }}>Body Large (var(--text-lg))</span>
            <div style={{ fontSize: 'var(--text-lg)', lineHeight: 1.5, maxWidth: '800px' }}>
              We source meticulously from independent farmers across the Île-de-France region, focusing on rare varieties and sustainable practices to bring unparalleled purity to the table.
            </div>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', opacity: 0.5, textTransform: 'uppercase' }}>Body Base (1rem / 16px)</span>
            <div style={{ lineHeight: 1.6, maxWidth: '800px', opacity: 0.8 }}>
              Experience Chef Moreau's daily fourteen-course tasting menu, an homage to seasonal provenance and the elemental science of slow fire.
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '6rem' }}>
        <h2 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem', opacity: 0.6 }}>Color Palette</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}>
          <ColorSwatch name="Background Base" variable="var(--bg)" border />
          <ColorSwatch name="Background Offset" variable="var(--bg-offset)" border />
          <ColorSwatch name="Text Primary" variable="var(--text)" border />
          <ColorSwatch name="Accent (Gold/Rust)" variable="var(--accent)" border />
        </div>
      </section>

      <section style={{ marginBottom: '6rem' }}>
        <h2 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem', opacity: 0.6 }}>Interactive Elements</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
          <div>
            <span style={{ display: 'block', fontSize: '0.75rem', opacity: 0.5, textTransform: 'uppercase', marginBottom: '1rem' }}>Primary Button</span>
            <button className="button button--primary" data-cursor="interactive">Reserve a table</button>
          </div>
          <div>
            <span style={{ display: 'block', fontSize: '0.75rem', opacity: 0.5, textTransform: 'uppercase', marginBottom: '1rem' }}>Ghost Button</span>
            <button className="button button--ghost" data-cursor="interactive">Explore Menu</button>
          </div>
          <div style={{ padding: '2rem', background: 'var(--text)', color: 'var(--bg)', borderRadius: '4px' }}>
            <span style={{ display: 'block', fontSize: '0.75rem', opacity: 0.5, textTransform: 'uppercase', marginBottom: '1rem' }}>Inverted Context</span>
            <button className="button button--ghost" data-cursor="interactive" style={{ borderColor: 'var(--bg)', color: 'var(--bg)' }}>View Gallery</button>
          </div>
        </div>
      </section>

      <footer style={{ paddingTop: '4rem', borderTop: '1px solid currentColor', opacity: 0.5, fontSize: '0.875rem' }}>
        <p>Atelier Origine Template. Designed for independent hospitality concepts.</p>
      </footer>
    </main>
  );
}

function ColorSwatch({ name, variable, border = false }: { name: string, variable: string, border?: boolean }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <div style={{ 
        width: '100%', 
        aspectRatio: '1', 
        backgroundColor: variable,
        borderRadius: '8px',
        border: border ? '1px solid rgba(128,128,128,0.2)' : 'none'
      }} />
      <div>
        <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>{name}</div>
        <div style={{ fontSize: '0.75rem', opacity: 0.6, fontFamily: 'monospace' }}>{variable}</div>
      </div>
    </div>
  );
}
