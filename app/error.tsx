"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error("Template Render Error:", error);
  }, [error]);

  return (
    <main className="error-wrapper site-shell" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      textAlign: 'center',
      padding: '2rem' 
    }}>
      <header className="topbar" style={{ position: 'absolute', top: 0, width: '100%' }}>
        <Link href="/" className="brandmark">
          <span className="brandmark__crest">AO</span>
        </Link>
        <ThemeToggle />
      </header>

      <div style={{ maxWidth: '600px', zIndex: 1 }}>
        <h1 style={{ fontSize: 'var(--text-hero)', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>
          Ah. Une Erreur.
        </h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '2rem' }}>
          It seems there was a problem assembling this specific experience. We apologize for the interruption to your ritual.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button
            onClick={() => reset()}
            className="button button--primary"
          >
            Try Again
          </button>
          <Link href="/" className="button button--ghost">
            Return Home
          </Link>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <div style={{ marginTop: '3rem', padding: '1rem', background: 'rgba(255,0,0,0.1)', border: '1px solid rgba(255,0,0,0.3)', textAlign: 'left', fontSize: '0.875rem', borderRadius: '4px' }}>
            <p style={{ fontWeight: 600, color: 'red', textTransform: 'uppercase' }}>Development Error:</p>
            <p style={{ fontFamily: 'monospace' }}>{error.message || "Unknown rendering error occurred."}</p>
          </div>
        )}
      </div>
    </main>
  );
}
