export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: 'var(--bg)',
      color: 'var(--accent)'
    }}>
      <div style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '2rem',
        animation: 'pulse 1.5s infinite ease-in-out'
      }}>
        AO
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse {
          0% { opacity: 0.3; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1); }
          100% { opacity: 0.3; transform: scale(0.95); }
        }
      `}} />
    </div>
  );
}
