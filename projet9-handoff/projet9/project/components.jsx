// Shared FERROUS primitives — globals on window for cross-file use.

const FERR_NAV_ITEMS = [
  { label: 'Platform', href: '#' },
  { label: 'Projects', href: '#' },
  { label: 'Estimator', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'About', href: '#' },
];

function FerrousLogo({ size = 22, color = 'var(--text)' }) {
  return (
    <div style={{ display:'inline-flex', alignItems:'center', gap: 10 }}>
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
        <path d="M2 4 L26 4 L20 14 L26 24 L2 24 Z" stroke={color} strokeWidth="1.4" fill="none" />
        <path d="M2 14 L20 14" stroke="var(--accent)" strokeWidth="1.4" />
        <circle cx="20" cy="14" r="2.2" fill="var(--accent)" />
      </svg>
      <span style={{
        fontFamily: 'var(--display)', fontWeight: 600, letterSpacing: '0.16em',
        fontSize: 13, color
      }}>FERROUS</span>
    </div>
  );
}

function NavBar({ active = 'Platform' }) {
  return (
    <header style={{
      display:'flex', alignItems:'center', justifyContent:'space-between',
      height: 72, padding: '0 56px',
      borderBottom: '1px solid var(--line)',
      background: 'rgba(11,12,13,0.6)',
      backdropFilter: 'blur(20px)',
      position: 'relative', zIndex: 10
    }}>
      <div style={{ display:'flex', alignItems:'center', gap: 48 }}>
        <FerrousLogo />
        <nav style={{ display:'flex', gap: 28 }}>
          {FERR_NAV_ITEMS.map(n => (
            <a key={n.label} href={n.href} style={{
              fontSize: 13, fontWeight: 500,
              color: active === n.label ? 'var(--text)' : 'var(--muted)',
              borderBottom: active === n.label ? '1px solid var(--accent)' : '1px solid transparent',
              paddingBottom: 4, transition: 'color .2s'
            }}>{n.label}</a>
          ))}
        </nav>
      </div>
      <div style={{ display:'flex', alignItems:'center', gap: 16 }}>
        <div className="mono" style={{
          fontSize: 11, color:'var(--muted)', display:'flex', alignItems:'center', gap: 8
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background:'var(--success)', boxShadow:'0 0 8px var(--success)' }} />
          MILL ONLINE · 24/7
        </div>
        <div style={{ width:1, height: 18, background:'var(--line-2)' }} />
        <button className="btn btn-ghost" style={{ height: 36, padding: '0 14px', fontSize: 12 }}>Sign in</button>
        <button className="btn btn-primary" style={{ height: 36, padding: '0 14px', fontSize: 12 }}>
          Request quote <span className="arrow" />
        </button>
      </div>
    </header>
  );
}

function Kicker({ children, label = 'SECTION', num }) {
  return (
    <div className="kicker">
      <span className="dot" />
      <span>{label}</span>
      {num && <><span style={{ opacity:0.4 }}>/</span><span style={{ color:'var(--text-dim)' }}>{num}</span></>}
      {children}
    </div>
  );
}

function DimLine({ children, width = 200, vertical = false }) {
  // little dimension annotation
  if (vertical) {
    return (
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', height: width, color:'var(--muted)' }}>
        <div style={{ width:1, flex:1, background:'var(--line-3)' }} />
        <span className="mono" style={{ fontSize: 10, padding: '4px 0', writingMode:'vertical-rl', transform:'rotate(180deg)' }}>{children}</span>
        <div style={{ width:1, flex:1, background:'var(--line-3)' }} />
      </div>
    );
  }
  return (
    <div style={{ display:'flex', alignItems:'center', gap: 8, width, color:'var(--muted)' }}>
      <div style={{ height:1, flex:1, background:'var(--line-3)' }} />
      <span className="mono" style={{ fontSize: 10, whiteSpace:'nowrap' }}>{children}</span>
      <div style={{ height:1, flex:1, background:'var(--line-3)' }} />
    </div>
  );
}

// Iconographic SVGs (geometric)
const Icons = {
  beam: <svg viewBox="0 0 32 32" fill="none"><path d="M4 8 H28 V12 H18 V20 H28 V24 H4 V20 H14 V12 H4 Z" stroke="currentColor" strokeWidth="1.4" /></svg>,
  weld: <svg viewBox="0 0 32 32" fill="none"><path d="M4 16 Q8 8 16 16 T28 16" stroke="currentColor" strokeWidth="1.4" /><path d="M4 22 Q8 18 16 22 T28 22" stroke="currentColor" strokeWidth="1.4" opacity=".5" /></svg>,
  truss: <svg viewBox="0 0 32 32" fill="none"><path d="M2 22 L16 6 L30 22 Z M2 22 L9 14 M16 6 L16 22 M30 22 L23 14 M9 14 L23 14" stroke="currentColor" strokeWidth="1.4" /></svg>,
  facade: <svg viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="24" height="24" stroke="currentColor" strokeWidth="1.4" /><path d="M10 4 V28 M16 4 V28 M22 4 V28 M4 10 H28 M4 16 H28 M4 22 H28" stroke="currentColor" strokeWidth="1" opacity=".6" /></svg>,
  cnc: <svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.4" /><path d="M16 6 V12 M16 20 V26 M6 16 H12 M20 16 H26" stroke="currentColor" strokeWidth="1.4" /><circle cx="16" cy="16" r="2" fill="currentColor" /></svg>,
  bolt: <svg viewBox="0 0 32 32" fill="none"><path d="M18 2 L6 18 H14 L12 30 L26 12 H18 L20 2 Z" stroke="currentColor" strokeWidth="1.4" /></svg>,
  bridge: <svg viewBox="0 0 32 32" fill="none"><path d="M2 22 H30 M6 22 V14 L10 18 L14 12 L18 18 L22 12 L26 18 V22" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>,
  shield: <svg viewBox="0 0 32 32" fill="none"><path d="M16 3 L28 8 V16 C28 22 22 28 16 30 C10 28 4 22 4 16 V8 Z" stroke="currentColor" strokeWidth="1.4" /><path d="M11 16 L15 20 L22 12" stroke="currentColor" strokeWidth="1.4" /></svg>,
  upload: <svg viewBox="0 0 32 32" fill="none"><path d="M16 22 V6 M9 13 L16 6 L23 13 M4 24 V28 H28 V24" stroke="currentColor" strokeWidth="1.4" /></svg>,
  doc: <svg viewBox="0 0 32 32" fill="none"><path d="M8 3 H20 L26 9 V29 H8 Z M20 3 V9 H26 M12 16 H22 M12 21 H22 M12 11 H16" stroke="currentColor" strokeWidth="1.4" /></svg>,
  chat: <svg viewBox="0 0 32 32" fill="none"><path d="M4 6 H28 V22 H14 L8 28 V22 H4 Z" stroke="currentColor" strokeWidth="1.4" /><circle cx="11" cy="14" r="1.2" fill="currentColor" /><circle cx="16" cy="14" r="1.2" fill="currentColor" /><circle cx="21" cy="14" r="1.2" fill="currentColor" /></svg>,
  bell: <svg viewBox="0 0 32 32" fill="none"><path d="M16 4 C11 4 8 8 8 14 L8 20 L5 24 H27 L24 20 V14 C24 8 21 4 16 4 Z M13 27 C13 29 14 30 16 30 C18 30 19 29 19 27" stroke="currentColor" strokeWidth="1.4" /></svg>,
  search: <svg viewBox="0 0 32 32" fill="none"><circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.4" /><path d="M21 21 L28 28" stroke="currentColor" strokeWidth="1.4" /></svg>,
  grid: <svg viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="10" height="10" stroke="currentColor" strokeWidth="1.4" /><rect x="18" y="4" width="10" height="10" stroke="currentColor" strokeWidth="1.4" /><rect x="4" y="18" width="10" height="10" stroke="currentColor" strokeWidth="1.4" /><rect x="18" y="18" width="10" height="10" stroke="currentColor" strokeWidth="1.4" /></svg>,
  layers: <svg viewBox="0 0 32 32" fill="none"><path d="M16 4 L28 11 L16 18 L4 11 Z M4 17 L16 24 L28 17 M4 23 L16 30 L28 23" stroke="currentColor" strokeWidth="1.4" /></svg>,
  cube: <svg viewBox="0 0 32 32" fill="none"><path d="M16 3 L28 9 V23 L16 29 L4 23 V9 Z M4 9 L16 15 L28 9 M16 15 V29" stroke="currentColor" strokeWidth="1.4" /></svg>,
  flame: <svg viewBox="0 0 32 32" fill="none"><path d="M16 3 C14 8 8 10 8 18 C8 24 12 29 16 29 C20 29 24 24 24 18 C24 14 22 12 20 14 C20 9 18 6 16 3 Z" stroke="currentColor" strokeWidth="1.4" /></svg>,
  pulse: <svg viewBox="0 0 32 32" fill="none"><path d="M2 16 H8 L11 8 L15 24 L19 12 L22 18 L25 16 H30" stroke="currentColor" strokeWidth="1.4" /></svg>,
};

function Icon({ name, size = 22, color = 'currentColor', style }) {
  return (
    <div style={{ width: size, height: size, color, display:'inline-flex', ...style }}>
      {Icons[name] || Icons.cube}
    </div>
  );
}

// SVG of an industrial I-beam / truss for hero
function TrussSVG({ width = 720, height = 280 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 720 280" fill="none" style={{ overflow:'visible' }}>
      <defs>
        <linearGradient id="steel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4A5360" />
          <stop offset="0.5" stopColor="#2A2F35" />
          <stop offset="1" stopColor="#1A1C1E" />
        </linearGradient>
        <linearGradient id="steelTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6B7280" />
          <stop offset="1" stopColor="#3A4048" />
        </linearGradient>
      </defs>
      {/* Top chord */}
      <rect x="20" y="40" width="680" height="14" fill="url(#steelTop)" stroke="#5E646B" />
      {/* Bottom chord */}
      <rect x="20" y="220" width="680" height="14" fill="url(#steel)" stroke="#5E646B" />
      {/* Web members (alternating diagonals + verticals) */}
      {Array.from({length: 12}).map((_,i) => {
        const x1 = 20 + i*56;
        const x2 = 20 + (i+1)*56;
        return (
          <g key={i} stroke="#3A4048" strokeWidth="6" fill="none">
            <line x1={x1+28} y1="54" x2={x1+28} y2="220" />
            <line x1={x1} y1="54" x2={x2} y2="220" opacity={i%2 ? 0.8 : 0.4} />
            <line x1={x2} y1="54" x2={x1} y2="220" opacity={i%2 ? 0.4 : 0.8} />
            <circle cx={x1+28} cy="54" r="3" fill="#94A3B8" />
            <circle cx={x1+28} cy="220" r="3" fill="#94A3B8" />
          </g>
        );
      })}
      {/* dimension top */}
      <g stroke="#94A3B8" strokeWidth="1">
        <line x1="20" y1="20" x2="700" y2="20" />
        <line x1="20" y1="14" x2="20" y2="26" />
        <line x1="700" y1="14" x2="700" y2="26" />
      </g>
      <text x="360" y="14" textAnchor="middle" fill="#94A3B8" fontFamily="JetBrains Mono" fontSize="10">42 800 mm · TYPE TR-IV · S355JR</text>
    </svg>
  );
}

// Cinematic, schematic-style steel column rendered in CSS
function ColumnSchematic({ height = 520 }) {
  return (
    <div style={{
      position:'relative', width: 200, height,
      display:'flex', alignItems:'center', justifyContent:'center'
    }}>
      {/* Central I-beam */}
      <div style={{ position:'absolute', inset: 0, display:'flex', justifyContent:'center' }}>
        <div style={{
          width: 36, height: '100%',
          background:'linear-gradient(180deg, #4A5360 0%, #2A2F35 50%, #1A1C1E 100%)',
          borderLeft:'1px solid #5E646B', borderRight:'1px solid #5E646B',
          position:'relative'
        }}>
          <div style={{ position:'absolute', top: 0, bottom: 0, left:'50%', width: 2, background:'rgba(0,0,0,0.4)', transform:'translateX(-50%)' }} />
        </div>
      </div>
      {/* flanges */}
      <div style={{
        position:'absolute', top: 0, left:'50%', transform:'translateX(-50%)',
        width: 120, height: 12,
        background:'linear-gradient(180deg, #6B7280, #3A4048)',
        boxShadow:'0 1px 0 #1A1C1E'
      }} />
      <div style={{
        position:'absolute', bottom: 0, left:'50%', transform:'translateX(-50%)',
        width: 120, height: 12,
        background:'linear-gradient(0deg, #6B7280, #3A4048)',
        boxShadow:'0 -1px 0 #1A1C1E'
      }} />
      {/* rivet rows */}
      {[60, 140, 220, 300, 380, 460].filter(y=>y<height-40).map(y => (
        <div key={y} style={{ position:'absolute', top: y, left:'50%', transform:'translateX(-50%)',
          display:'flex', gap: 18 }}>
          <div style={{ width:6, height:6, borderRadius:'50%', background:'#94A3B8', boxShadow:'inset 0 0 2px #000' }} />
          <div style={{ width: 28 }} />
          <div style={{ width:6, height:6, borderRadius:'50%', background:'#94A3B8', boxShadow:'inset 0 0 2px #000' }} />
        </div>
      ))}
      {/* dimension lines */}
      <div style={{ position:'absolute', left:-30, top:0, bottom:0, display:'flex', flexDirection:'column', alignItems:'center' }}>
        <div style={{ width:1, flex:1, background:'var(--line-3)' }} />
        <span className="mono" style={{ fontSize: 10, color:'var(--muted)', writingMode:'vertical-rl', transform:'rotate(180deg)', padding:'8px 0' }}>H = 6 400 mm</span>
        <div style={{ width:1, flex:1, background:'var(--line-3)' }} />
      </div>
    </div>
  );
}

Object.assign(window, {
  FerrousLogo, NavBar, Kicker, DimLine, Icon, Icons, TrussSVG, ColumnSchematic
});
