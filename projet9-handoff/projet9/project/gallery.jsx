// FERROUS — Projects Gallery artboard
// Width: 1440. Filterable bento gallery with modal preview.

function GalleryFilters({ active, setActive, view, setView }) {
  const cats = ['ALL · 480', 'INFRA · 92', 'HIGH-RISE · 114', 'STADIUM · 18', 'ARCH · 156', 'INDUSTRIAL · 100'];
  return (
    <div style={{
      display:'flex', justifyContent:'space-between', alignItems:'center',
      padding:'24px 56px', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)',
      background:'var(--bg-1)', position:'sticky', top: 0, zIndex: 5
    }}>
      <div style={{ display:'flex', gap: 8 }}>
        {cats.map(c => {
          const [name, count] = c.split(' · ');
          const on = active === name;
          return (
            <button key={c} onClick={() => setActive(name)} style={{
              display:'inline-flex', alignItems:'center', gap: 8, padding:'8px 14px',
              fontFamily:'var(--mono)', fontSize: 11, letterSpacing:'0.1em',
              background: on ? 'rgba(249,115,22,0.1)' : 'rgba(255,255,255,0.02)',
              color: on ? 'var(--accent)' : 'var(--text-dim)',
              border:'1px solid ' + (on ? 'rgba(249,115,22,0.4)':'var(--line-2)'),
              cursor:'pointer', textTransform:'uppercase'
            }}>
              {name} <span style={{ opacity: 0.6 }}>{count}</span>
            </button>
          );
        })}
      </div>
      <div style={{ display:'flex', gap: 12, alignItems:'center' }}>
        <div style={{ display:'flex', alignItems:'center', gap: 8, padding:'8px 12px', border:'1px solid var(--line-2)' }}>
          <Icon name="search" size={14} color="var(--muted)" />
          <input placeholder="Search 480 projects..." style={{
            background:'none', border:0, outline:'none', color:'var(--text)',
            fontSize: 12, fontFamily:'var(--body)', width: 200
          }} />
          <span className="mono" style={{ fontSize: 9, color:'var(--muted)', border:'1px solid var(--line-2)', padding:'2px 6px' }}>⌘ K</span>
        </div>
        <div style={{ display:'flex', border:'1px solid var(--line-2)' }}>
          {['BENTO','GRID','MAP'].map(v => (
            <button key={v} onClick={()=>setView(v)} style={{
              padding:'8px 12px', fontFamily:'var(--mono)', fontSize: 10, letterSpacing:'0.1em',
              background: view===v ? 'var(--accent)' : 'transparent',
              color: view===v ? '#120A04' : 'var(--text-dim)',
              borderRight: v !== 'MAP' ? '1px solid var(--line-2)' : 'none'
            }}>{v}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

const GALLERY_PROJECTS = [
  { id:'P-114', name:'Maelstrom Bridge', loc:'Rotterdam · NL', cat:'INFRA', steel:'S355JR / Q420', tons:1240, duration:'18 mo', scale:'L', status:'COMPLETE', year:'2023' },
  { id:'P-203', name:'Vertex Tower', loc:'Riyadh · SA', cat:'HIGH-RISE', steel:'S460N', tons:8400, duration:'34 mo', scale:'XL', status:'ERECTING', year:'2026' },
  { id:'P-318', name:'Helix Stadium', loc:'Lyon · FR', cat:'STADIUM', steel:'S355 / TUBE', tons:3120, duration:'26 mo', scale:'XL', status:'COMPLETE', year:'2024' },
  { id:'P-401', name:'North Yard Crane', loc:'Antwerp · BE', cat:'INDUSTRIAL', steel:'S690 / Q345', tons:680, duration:'8 mo', scale:'M', status:'COMPLETE', year:'2025' },
  { id:'P-507', name:'Aurora Atrium', loc:'Oslo · NO', cat:'ARCH', steel:'COR-TEN', tons:188, duration:'10 mo', scale:'M', status:'FABRICATING', year:'2026' },
  { id:'P-612', name:'Solenne Tower', loc:'Casablanca · MA', cat:'HIGH-RISE', steel:'S355JR', tons:5240, duration:'30 mo', scale:'XL', status:'ERECTING', year:'2026' },
  { id:'P-704', name:'Glacier Footbridge', loc:'Innsbruck · AT', cat:'INFRA', steel:'DUPLEX 2205', tons:82, duration:'4 mo', scale:'S', status:'COMPLETE', year:'2025' },
  { id:'P-812', name:'Halberd Hangar', loc:'Toulouse · FR', cat:'INDUSTRIAL', steel:'S355JR', tons:2480, duration:'14 mo', scale:'L', status:'COMPLETE', year:'2024' },
  { id:'P-918', name:'Quay 14 Facade', loc:'Hamburg · DE', cat:'ARCH', steel:'ALU + SS304', tons:96, duration:'6 mo', scale:'S', status:'COMPLETE', year:'2025' },
];

function GalleryProjectCard({ p, onOpen, large = false, tall = false, wide = false }) {
  return (
    <div onClick={onOpen} style={{
      position:'relative', overflow:'hidden', cursor:'pointer',
      border:'1px solid var(--line-2)', background:'var(--bg-2)',
      transition: 'transform .25s, border-color .25s',
    }}>
      {/* Stylised schematic preview */}
      <div style={{ position:'absolute', inset: 0,
        background:'linear-gradient(180deg, #1F2226 0%, #0E0F11 100%)'
      }} />
      <svg style={{ position:'absolute', inset: 0, width:'100%', height:'100%' }} viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
        {p.cat === 'INFRA' && (
          <g stroke="rgba(249,115,22,0.55)" strokeWidth="1.2" fill="none">
            <path d="M 0 320 L 80 240 L 160 320 L 240 240 L 320 320 L 400 320" />
            <path d="M 0 320 L 400 320" stroke="rgba(148,163,184,0.5)" />
            <path d="M 80 240 L 80 100 M 160 320 L 160 100 M 240 240 L 240 100 M 320 320 L 320 100" strokeDasharray="3 3" opacity="0.5" />
          </g>
        )}
        {p.cat === 'HIGH-RISE' && (
          <g stroke="rgba(148,163,184,0.45)" strokeWidth="1.2" fill="none">
            <rect x="140" y="40" width="120" height="340" />
            {Array.from({length: 10}).map((_,i) => <line key={i} x1="140" y1={40 + i*34} x2="260" y2={40 + i*34} />)}
            <line x1="200" y1="40" x2="200" y2="380" stroke="rgba(249,115,22,0.5)" />
          </g>
        )}
        {p.cat === 'STADIUM' && (
          <g stroke="rgba(249,115,22,0.55)" strokeWidth="1.2" fill="none">
            <ellipse cx="200" cy="220" rx="180" ry="60" />
            <ellipse cx="200" cy="220" rx="140" ry="46" stroke="rgba(148,163,184,0.5)" />
            <path d="M 60 160 L 200 80 L 340 160" />
            <path d="M 100 200 L 200 100 L 300 200" strokeDasharray="3 3" opacity="0.5" />
          </g>
        )}
        {p.cat === 'INDUSTRIAL' && (
          <g stroke="rgba(148,163,184,0.45)" strokeWidth="1.2" fill="none">
            <rect x="40" y="120" width="320" height="200" />
            <path d="M 40 120 L 200 60 L 360 120" />
            <line x1="120" y1="60" x2="120" y2="320" />
            <line x1="200" y1="60" x2="200" y2="320" stroke="rgba(249,115,22,0.5)" />
            <line x1="280" y1="60" x2="280" y2="320" />
          </g>
        )}
        {p.cat === 'ARCH' && (
          <g stroke="rgba(249,115,22,0.55)" strokeWidth="1" fill="none">
            {Array.from({length: 6}).map((_,i) => Array.from({length:6}).map((__,j) => (
              <polygon key={`${i}-${j}`} points={`${60+i*60},${60+j*60} ${90+i*60},${50+j*60} ${120+i*60},${60+j*60} ${120+i*60},${90+j*60} ${90+i*60},${100+j*60} ${60+i*60},${90+j*60}`} opacity={(i+j)%2?0.4:0.8} />
            )))}
          </g>
        )}
      </svg>

      <div style={{ position:'absolute', top: 16, left: 16, right: 16, display:'flex', justifyContent:'space-between' }}>
        <span className="tag">{p.cat}</span>
        <span className={`tag ${p.status==='COMPLETE'?'success':p.status==='FABRICATING'?'warn':'on'}`}>● {p.status}</span>
      </div>

      <div style={{ position:'absolute', left: 0, right: 0, bottom: 0,
        background:'linear-gradient(0deg, rgba(0,0,0,0.92) 25%, transparent)',
        padding: large ? 24 : 18
      }}>
        <div className="mono" style={{ fontSize: 10, color:'var(--muted)', letterSpacing:'0.12em', marginBottom: 6 }}>
          {p.id} · {p.year} · {p.loc}
        </div>
        <div style={{
          fontFamily:'var(--display)', fontWeight: 600,
          fontSize: large ? 34 : tall ? 24 : 20,
          letterSpacing:'-0.02em', lineHeight: 1, marginBottom: 10
        }}>{p.name}</div>
        <div style={{ display:'flex', gap: 14, color:'var(--text-dim)', fontFamily:'var(--mono)', fontSize: 10 }}>
          <span>{p.tons.toLocaleString()} t</span>
          <span style={{ color:'var(--line-3)' }}>·</span>
          <span>{p.steel}</span>
          <span style={{ color:'var(--line-3)' }}>·</span>
          <span>{p.duration}</span>
        </div>
      </div>
      <div className="corner tl" /><div className="corner br" />
    </div>
  );
}

function ProjectModal({ p, onClose }) {
  if (!p) return null;
  return (
    <div style={{
      position:'absolute', inset: 0, zIndex: 20, background:'rgba(5,6,7,0.92)',
      backdropFilter:'blur(12px)', display:'flex', alignItems:'center', justifyContent:'center'
    }} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} className="surface" style={{
        width: 1240, height: 720, padding: 0, position:'relative',
        boxShadow:'0 50px 120px -20px rgba(0,0,0,0.9), 0 0 0 1px var(--line-3)'
      }}>
        <div className="corner tl" /><div className="corner tr" />
        <div className="corner bl" /><div className="corner br" />
        <button onClick={onClose} style={{
          position:'absolute', top: 16, right: 16, zIndex: 2,
          width: 36, height: 36, border:'1px solid var(--line-2)', color:'var(--text)',
          fontFamily:'var(--mono)', fontSize: 14
        }}>✕</button>
        <div style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr', height:'100%' }}>
          <div style={{ position:'relative', borderRight:'1px solid var(--line)', background:'#0E0F11' }} className="blueprint-fine">
            <svg viewBox="0 0 800 720" style={{ position:'absolute', inset: 0, width:'100%', height:'100%' }}>
              <g stroke="rgba(249,115,22,0.7)" strokeWidth="1.5" fill="none">
                <path d="M 80 580 L 400 200 L 720 580" />
                <path d="M 80 580 L 720 580" stroke="rgba(148,163,184,0.7)" />
                <path d="M 200 460 L 400 280 L 600 460" />
                <line x1="400" y1="200" x2="400" y2="580" strokeDasharray="4 4" />
                <line x1="240" y1="580" x2="240" y2="380" strokeDasharray="4 4" />
                <line x1="560" y1="580" x2="560" y2="380" strokeDasharray="4 4" />
              </g>
              <g fill="rgba(249,115,22,0.9)">
                <circle cx="400" cy="200" r="5" /><circle cx="80" cy="580" r="4" /><circle cx="720" cy="580" r="4" />
                <circle cx="200" cy="460" r="4" /><circle cx="600" cy="460" r="4" />
              </g>
              <g stroke="rgba(148,163,184,0.6)" strokeWidth="1">
                <line x1="80" y1="640" x2="720" y2="640" />
                <line x1="80" y1="630" x2="80" y2="650" />
                <line x1="720" y1="630" x2="720" y2="650" />
              </g>
              <text x="400" y="660" textAnchor="middle" fill="#94A3B8" fontFamily="JetBrains Mono" fontSize="10">SPAN · 196 000 mm</text>
            </svg>
            <div style={{ position:'absolute', top: 24, left: 24 }}>
              <span className="tag on">● ELEVATION · SOUTH</span>
            </div>
            <div style={{ position:'absolute', bottom: 24, left: 24, display:'flex', gap: 6 }}>
              {['ELEV S','ELEV N','PLAN','ISO','PHOTO'].map((v,i) => (
                <button key={v} className="mono" style={{
                  padding:'6px 10px', fontSize: 10, letterSpacing:'0.1em',
                  background: i===0?'rgba(249,115,22,0.12)':'rgba(255,255,255,0.04)',
                  color: i===0?'var(--accent)':'var(--text-dim)',
                  border:'1px solid '+(i===0?'rgba(249,115,22,0.4)':'var(--line-2)')
                }}>{v}</button>
              ))}
            </div>
          </div>
          <div style={{ padding: 32, display:'flex', flexDirection:'column' }}>
            <div className="mono" style={{ fontSize: 10, color:'var(--muted)', letterSpacing:'0.16em' }}>{p.id} · {p.year}</div>
            <h3 style={{ fontSize: 44, marginTop: 8, fontWeight: 600, letterSpacing:'-0.03em', lineHeight: 1 }}>{p.name}</h3>
            <div className="mono" style={{ fontSize: 11, color:'var(--text-dim)', marginTop: 10 }}>{p.loc}</div>

            <div style={{ marginTop: 28, display:'grid', gridTemplateColumns:'1fr 1fr', gap: 18 }}>
              <Spec label="Category" v={p.cat} />
              <Spec label="Status" v={p.status} />
              <Spec label="Steel grade" v={p.steel} />
              <Spec label="Duration" v={p.duration} />
              <Spec label="Tonnage" v={p.tons.toLocaleString() + ' t'} hi />
              <Spec label="Scale" v={p.scale} />
            </div>

            <p style={{ marginTop: 24, fontSize: 13, color:'var(--text-dim)', lineHeight: 1.6 }}>
              A {p.cat.toLowerCase()} project delivered through FERROUS&apos; integrated mill — from BIM model to bolted-up, every node traceable to its heat number. Project metadata streams live from the field.
            </p>

            <div style={{ marginTop: 24, padding: 16, border:'1px solid var(--line-2)', background:'rgba(255,255,255,0.02)' }}>
              <div className="mono" style={{ fontSize: 10, color:'var(--muted)', marginBottom: 10 }}>FAB SCHEDULE</div>
              <div style={{ display:'flex', gap: 8, marginBottom: 6 }}>
                {['Q1','Q2','Q3','Q4'].map((q,i) => (
                  <div key={q} style={{ flex: 1, padding:'8px 0', textAlign:'center',
                    background: i<2 ? 'rgba(16,185,129,0.12)' : i===2 ? 'rgba(249,115,22,0.12)' : 'rgba(255,255,255,0.02)',
                    border:'1px solid ' + (i<2 ? 'rgba(16,185,129,0.3)' : i===2 ? 'rgba(249,115,22,0.3)' : 'var(--line-2)'),
                    fontFamily:'var(--mono)', fontSize: 10,
                    color: i<2 ? 'var(--success)' : i===2 ? 'var(--accent)' : 'var(--muted)'
                  }}>{q}</div>
                ))}
              </div>
            </div>

            <div style={{ marginTop:'auto', display:'flex', gap: 10 }}>
              <button className="btn btn-primary" style={{ flex: 1 }}>Open in portal <span className="arrow" /></button>
              <button className="btn btn-ghost">Download spec PDF</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Spec({ label, v, hi }) {
  return (
    <div>
      <div className="mono" style={{ fontSize: 9, color:'var(--muted)', letterSpacing:'0.14em', textTransform:'uppercase' }}>{label}</div>
      <div className="stencil tnum" style={{ fontSize: 20, color: hi?'var(--accent)':'var(--text)', marginTop: 4 }}>{v}</div>
    </div>
  );
}

function GalleryArtboard() {
  const [active, setActive] = React.useState('ALL');
  const [view, setView] = React.useState('BENTO');
  const [selected, setSelected] = React.useState(null);
  const filtered = active === 'ALL' ? GALLERY_PROJECTS : GALLERY_PROJECTS.filter(p => p.cat === active);

  return (
    <div className="ferrous" data-screen-label="Gallery" style={{ width: 1440, minHeight: 1800, position:'relative' }}>
      <NavBar active="Projects" />

      {/* Hero strip */}
      <section style={{ padding:'80px 56px 60px', position:'relative', borderBottom:'1px solid var(--line)', background:'var(--bg-0)' }}>
        <div className="blueprint" style={{ position:'absolute', inset:0, opacity:0.4 }} />
        <div style={{ position:'relative', display:'flex', justifyContent:'space-between', alignItems:'flex-end' }}>
          <div>
            <Kicker label="ARCHIVE · 2009–2026" num="↳" />
            <h1 style={{ fontSize: 96, fontWeight: 600, letterSpacing:'-0.04em', marginTop: 16, lineHeight: 0.95 }}>
              480 projects.<br/>
              <span style={{ color:'var(--accent)' }}>1.2 M tons.</span>
            </h1>
            <p style={{ fontSize: 16, color:'var(--text-dim)', marginTop: 16, maxWidth: 540 }}>
              Every structure built by FERROUS &mdash; filter by typology, span, steel grade, or completion year.
            </p>
          </div>
          <div style={{ display:'flex', gap: 24 }}>
            {[['27','countries'],['480','projects'],['1.2M','tons']].map(([n,l],i)=>(
              <div key={i} style={{ borderLeft:'1px solid var(--line-2)', paddingLeft: 18 }}>
                <div className="stencil" style={{ fontSize: 36 }}>{n}</div>
                <div className="mono" style={{ fontSize: 10, color:'var(--muted)', letterSpacing:'0.14em', marginTop: 4, textTransform:'uppercase' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GalleryFilters active={active.split(' ')[0]} setActive={(c)=>setActive(c.split(' ')[0])} view={view} setView={setView} />

      <section style={{ padding:'40px 56px 80px', background:'var(--bg-0)' }}>
        <div className="mono" style={{ fontSize: 10, color:'var(--muted)', marginBottom: 24, letterSpacing:'0.14em' }}>
          SHOWING {filtered.length} OF 480 · SORT: RELEVANCE  ⌃  TYPOLOGY · YEAR · TONNAGE
        </div>
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(4, 1fr)',
          gridAutoRows: '300px',
          gap: 12
        }}>
          {filtered.map((p,i) => {
            // bento layout pattern
            const big = i === 0;
            const tall = i === 1 || i === 5;
            const wide = i === 4;
            return (
              <div key={p.id} style={{
                gridColumn: big ? 'span 2' : wide ? 'span 2' : 'span 1',
                gridRow: big ? 'span 2' : tall ? 'span 2' : 'span 1'
              }}>
                <GalleryProjectCard p={p} onOpen={()=>setSelected(p)} large={big} tall={tall} wide={wide} />
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 56, display:'flex', justifyContent:'center', gap: 14 }}>
          <button className="btn btn-ghost">Load 12 more</button>
          <button className="btn btn-ghost">Browse map view</button>
        </div>
      </section>

      <ProjectModal p={selected} onClose={()=>setSelected(null)} />
    </div>
  );
}

Object.assign(window, { GalleryArtboard });
