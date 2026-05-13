// FERROUS — Landing (editorial · v2)
// Restrained, confident, single-headline-led. 1440 wide.

const SERIF = { fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.015em' };

function Eyebrow({ label, n }) {
  return (
    <div style={{
      display:'inline-flex', alignItems:'center', gap: 14,
      fontFamily:'var(--mono)', fontSize: 11, letterSpacing:'0.22em',
      color:'var(--muted)', textTransform:'uppercase'
    }}>
      {n && <span style={{ color:'var(--accent)' }}>{n}</span>}
      <span style={{ width: 22, height: 1, background:'var(--line-3)' }} />
      <span>{label}</span>
    </div>
  );
}

/* ── 1 ─ HERO ──────────────────────────────────────────────────────── */
function LandingHero() {
  return (
    <section style={{
      position:'relative', minHeight: 880,
      background:'var(--bg-0)',
      borderBottom:'1px solid var(--line)',
      overflow:'hidden'
    }}>
      {/* one quiet ember accent, far bottom-right */}
      <div style={{
        position:'absolute', right:-280, bottom:-280, width: 760, height: 760,
        background:'radial-gradient(50% 50% at 50% 50%, rgba(249,115,22,0.16), transparent 70%)',
        filter:'blur(10px)', pointerEvents:'none'
      }} />

      <div style={{
        position:'relative', padding:'140px 88px 96px',
        display:'grid', gridTemplateColumns:'1fr', gap: 80
      }}>
        {/* Top meta row — quiet */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
          <Eyebrow label="A steel construction studio · Liège, BE" n="N° 01" />
          <span style={{ fontFamily:'var(--mono)', fontSize: 11, color:'var(--muted)', letterSpacing:'0.16em' }}>
            EST. 2009  ·  AUDITED Q4·25
          </span>
        </div>

        {/* Massive headline — editorial */}
        <h1 style={{
          fontFamily:'var(--display)', fontSize: 168, fontWeight: 500,
          letterSpacing:'-0.055em', lineHeight: 0.92, color:'var(--text)',
          maxWidth: 1180
        }}>
          We build<br/>
          with steel<br/>
          &amp; <span style={SERIF}>software</span>.
        </h1>

        {/* Lower row: subhead left, single CTA + signature right */}
        <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr 1fr', gap: 48, alignItems:'end' }}>
          <p style={{ fontSize: 18, color:'var(--text-dim)', maxWidth: 480, lineHeight: 1.55 }}>
            FERROUS is a vertically-integrated steel mill &mdash; fabrication, erection, and an operating system that traces every weld back to its heat number.
          </p>

          <div style={{ borderLeft:'1px solid var(--line-2)', paddingLeft: 28 }}>
            <div className="stencil tnum" style={{ fontSize: 56, color:'var(--text)', letterSpacing:'-0.04em' }}>1.2M<span style={{ color:'var(--accent)' }}>t</span></div>
            <div style={{ fontFamily:'var(--mono)', fontSize: 11, color:'var(--muted)', letterSpacing:'0.18em', marginTop: 8 }}>
              FABRICATED · 480 STRUCTURES · 27 COUNTRIES
            </div>
          </div>

          <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap: 16 }}>
            <button className="btn btn-primary">
              Request a sealed quote <span className="arrow" />
            </button>
            <button className="btn-link">
              Watch the mill &nbsp;·&nbsp; 02:14
            </button>
          </div>
        </div>
      </div>

      {/* Bottom datum line */}
      <div style={{
        position:'relative', borderTop:'1px solid var(--line)',
        padding:'18px 88px',
        display:'flex', justifyContent:'space-between',
        fontFamily:'var(--mono)', fontSize: 11, color:'var(--muted)', letterSpacing:'0.16em'
      }}>
        <span>FERROUS / INDUSTRIAL OS · MMXXVI</span>
        <span style={{ display:'inline-flex', alignItems:'center', gap: 10 }}>
          <span className="pulse" style={{ width: 6, height: 6, borderRadius:'50%', background:'var(--success)', boxShadow:'0 0 8px var(--success)' }} />
          MILL ONLINE — SHIFT 2 / 3
        </span>
        <span>SCROLL TO DESCEND ↓</span>
      </div>
    </section>
  );
}

/* ── 2 ─ NUMBERS ──────────────────────────────────────────────────── */
function NumbersStrip() {
  const items = [
    ['480', 'completed structures', '2009 — 2026'],
    ['27',  'countries served',     'on six continents'],
    ['99.97%', 'on-spec rate',      'audited Q4 · 2025'],
    ['1 538°C', 'furnace · live',   'updated every 4 s'],
  ];
  return (
    <section style={{ padding:'80px 88px', background:'var(--bg-0)', borderBottom:'1px solid var(--line)' }}>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', columnGap: 48 }}>
        {items.map((it,i)=>(
          <div key={i} style={{ paddingRight: 24 }}>
            <div className="stencil tnum" style={{ fontSize: 64, color: i===3?'var(--accent)':'var(--text)', letterSpacing:'-0.04em' }}>{it[0]}</div>
            <div style={{ fontFamily:'var(--display)', fontSize: 16, color:'var(--text)', marginTop: 14, letterSpacing:'-0.01em' }}>{it[1]}</div>
            <div style={{ fontFamily:'var(--mono)', fontSize: 11, color:'var(--muted)', marginTop: 6, letterSpacing:'0.12em' }}>{it[2]}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── 3 ─ CAPABILITIES ─────────────────────────────────────────────── */
function ServicesSection() {
  const services = [
    { n:'01', t:'Heavy structures', s:'Frames · halls · bridges · towers up to 8 400 t per project.' },
    { n:'02', t:'Architectural facades', s:'Curtain walls, mesh, COR-TEN cladding. LOD 400 fit.' },
    { n:'03', t:'Precision fabrication', s:'5-axis CNC, plasma, laser. ±0.1 mm tolerance, 24/7 shift.' },
    { n:'04', t:'Certified welding', s:'EXC4 · ISO 3834-2. Every weld traceable to its WPQR.' },
    { n:'05', t:'Coatings & protection', s:'HDG, paint to C5-M, fire rating R 120. In-house line.' },
    { n:'06', t:'BIM & engineering', s:'Tekla, Revit, SAP2000. Calc sealed by EUR ING staff.' },
  ];
  return (
    <section style={{ padding:'140px 88px', background:'var(--bg-0)', borderBottom:'1px solid var(--line)' }}>
      <div style={{ display:'grid', gridTemplateColumns:'320px 1fr', gap: 80, alignItems:'start' }}>
        <div style={{ position:'sticky', top: 88 }}>
          <Eyebrow label="What we make" n="N° 02" />
          <h2 style={{ fontFamily:'var(--display)', fontSize: 64, fontWeight: 500, letterSpacing:'-0.04em', marginTop: 24, lineHeight: 0.95 }}>
            Six<br/>capabilities.<br/><span style={SERIF}>One</span> mill.
          </h2>
          <p style={{ fontSize: 15, color:'var(--text-dim)', marginTop: 24, lineHeight: 1.55 }}>
            No subcontractors between the drawing and the bolt. Every gram of steel passes our floor.
          </p>
        </div>

        <div>
          {services.map((s,i)=>(
            <div key={s.n} style={{
              display:'grid', gridTemplateColumns:'80px 1fr 220px', gap: 32,
              padding:'40px 0', borderTop: i===0?'1px solid var(--line-2)':'1px solid var(--line)',
              alignItems:'baseline'
            }}>
              <span className="mono" style={{ fontSize: 12, color:'var(--accent)', letterSpacing:'0.2em' }}>— {s.n}</span>
              <div>
                <div style={{ fontFamily:'var(--display)', fontSize: 32, fontWeight: 500, letterSpacing:'-0.025em' }}>{s.t}</div>
                <p style={{ fontSize: 14, color:'var(--text-dim)', marginTop: 8, lineHeight: 1.55, maxWidth: 520 }}>{s.s}</p>
              </div>
              <div style={{ textAlign:'right' }}>
                <button className="btn-link" style={{ fontSize: 12 }}>Read brief →</button>
              </div>
            </div>
          ))}
          <div style={{ borderTop:'1px solid var(--line)' }} />
        </div>
      </div>
    </section>
  );
}

/* ── 4 ─ FEATURED PROJECTS · BENTO ────────────────────────────────── */
function FeaturedProjects() {
  const big   = { id:'P-114', name:'Maelstrom Bridge', meta:'Cable-stayed · 1 240 t · Rotterdam', year:'2023', cat:'INFRA' };
  const a     = { id:'P-203', name:'Vertex Tower',     meta:'42 fl · 8 400 t · Riyadh',           year:'2026', cat:'HIGH-RISE' };
  const b     = { id:'P-318', name:'Helix Stadium',    meta:'Roof span 196 m · Lyon',             year:'2024', cat:'STADIUM'   };
  const c     = { id:'P-507', name:'Aurora Atrium',    meta:'2 600 nodes · Oslo',                 year:'2026', cat:'ARCH'      };
  const d     = { id:'P-401', name:'North Yard Crane', meta:'80 t SWL · Antwerp',                 year:'2025', cat:'INDUSTRIAL'};

  return (
    <section style={{ padding:'140px 88px', background:'var(--bg-1)', borderBottom:'1px solid var(--line)' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom: 64 }}>
        <div>
          <Eyebrow label="Realisations" n="N° 03" />
          <h2 style={{ fontFamily:'var(--display)', fontSize: 80, fontWeight: 500, letterSpacing:'-0.04em', marginTop: 24, lineHeight: 0.95 }}>
            Built, <span style={SERIF}>standing</span>, signed.
          </h2>
        </div>
        <div style={{ textAlign:'right' }}>
          <p style={{ fontSize: 14, color:'var(--text-dim)', maxWidth: 360, marginBottom: 18, lineHeight: 1.55 }}>
            Five of four hundred and eighty. Filter the archive by typology, span, or completion year.
          </p>
          <button className="btn btn-ghost">Browse the archive (480) <span className="arrow" /></button>
        </div>
      </div>

      <div style={{
        display:'grid', gridTemplateColumns:'repeat(6, 1fr)', gridAutoRows:'260px',
        gap: 12
      }}>
        <BentoCard p={big} style={{ gridColumn:'1 / 4', gridRow:'1 / 3' }} large />
        <BentoCard p={a}   style={{ gridColumn:'4 / 6' }} />
        <BentoCard p={b}   style={{ gridColumn:'6 / 7', gridRow:'1 / 3' }} tall />
        <BentoCard p={c}   style={{ gridColumn:'4 / 5' }} />
        <BentoCard p={d}   style={{ gridColumn:'5 / 6' }} />
      </div>
    </section>
  );
}

function BentoCard({ p, style, large, tall }) {
  return (
    <div style={{
      position:'relative', overflow:'hidden',
      border:'1px solid var(--line)',
      background:'#0E0F11',
      ...style
    }}>
      {/* category-specific schematic (kept, but quieter than v1) */}
      <ProjectArt cat={p.cat} large={large} />
      <div style={{
        position:'absolute', left: 0, right: 0, bottom: 0,
        padding: large ? '28px 28px 24px' : '22px 22px 20px',
        background:'linear-gradient(0deg, rgba(0,0,0,0.92) 30%, transparent)',
      }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom: 8 }}>
          <span className="mono" style={{ fontSize: 10, color:'var(--muted)', letterSpacing:'0.16em' }}>{p.id} · {p.year}</span>
          <span className="mono" style={{ fontSize: 10, color:'var(--accent)', letterSpacing:'0.16em' }}>{p.cat}</span>
        </div>
        <div style={{
          fontFamily:'var(--display)', fontWeight: 500,
          fontSize: large ? 44 : tall ? 26 : 22,
          letterSpacing:'-0.025em', lineHeight: 1, marginBottom: 8
        }}>{p.name}</div>
        <div style={{ fontFamily:'var(--mono)', fontSize: 11, color:'var(--text-dim)' }}>{p.meta}</div>
      </div>
    </div>
  );
}

function ProjectArt({ cat, large }) {
  return (
    <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" style={{ position:'absolute', inset: 0, width:'100%', height:'100%' }}>
      <defs>
        <linearGradient id={`art-grad-${cat}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#22262A" />
          <stop offset="1" stopColor="#0B0C0D" />
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill={`url(#art-grad-${cat})`} />
      {cat === 'INFRA' && (
        <g stroke="rgba(249,115,22,0.7)" strokeWidth={large?1.5:1} fill="none">
          <path d="M 0 310 L 150 220 L 300 310 L 450 220 L 600 310" />
          <path d="M 0 310 L 600 310" stroke="rgba(148,163,184,0.6)" />
          <path d="M 150 220 L 150 80 M 300 310 L 300 80 M 450 220 L 450 80" strokeDasharray="3 4" opacity=".4" />
          <circle cx="150" cy="220" r="3" fill="rgba(249,115,22,0.9)" />
          <circle cx="300" cy="310" r="3" fill="rgba(249,115,22,0.9)" />
          <circle cx="450" cy="220" r="3" fill="rgba(249,115,22,0.9)" />
        </g>
      )}
      {cat === 'HIGH-RISE' && (
        <g stroke="rgba(148,163,184,0.5)" strokeWidth="1" fill="none">
          <rect x="220" y="40" width="160" height="360" />
          {Array.from({length:12}).map((_,i)=> <line key={i} x1="220" y1={40+i*30} x2="380" y2={40+i*30} />)}
          <line x1="300" y1="40" x2="300" y2="400" stroke="rgba(249,115,22,0.6)" />
        </g>
      )}
      {cat === 'STADIUM' && (
        <g stroke="rgba(249,115,22,0.65)" strokeWidth="1" fill="none">
          <ellipse cx="300" cy="280" rx="260" ry="80" />
          <ellipse cx="300" cy="280" rx="200" ry="60" stroke="rgba(148,163,184,0.5)" />
          <path d="M 80 200 L 300 100 L 520 200" />
          <path d="M 130 240 L 300 130 L 470 240" strokeDasharray="3 4" opacity=".5" />
        </g>
      )}
      {cat === 'ARCH' && (
        <g stroke="rgba(249,115,22,0.55)" strokeWidth="0.8" fill="none">
          {Array.from({length:8}).map((_,i)=>Array.from({length:8}).map((__,j)=>(
            <polygon key={`${i}-${j}`} points={`${60+i*72},${60+j*48} ${96+i*72},${48+j*48} ${132+i*72},${60+j*48} ${132+i*72},${84+j*48} ${96+i*72},${96+j*48} ${60+i*72},${84+j*48}`} opacity={(i+j)%2?0.3:0.7}/>
          )))}
        </g>
      )}
      {cat === 'INDUSTRIAL' && (
        <g stroke="rgba(148,163,184,0.5)" strokeWidth="1" fill="none">
          <rect x="40" y="160" width="520" height="220" />
          <path d="M 40 160 L 300 60 L 560 160" />
          <line x1="180" y1="60" x2="180" y2="380" />
          <line x1="300" y1="60" x2="300" y2="380" stroke="rgba(249,115,22,0.6)" />
          <line x1="420" y1="60" x2="420" y2="380" />
        </g>
      )}
    </svg>
  );
}

/* ── 5 ─ ESTIMATOR PREVIEW ────────────────────────────────────────── */
function EstimatorPreview() {
  return (
    <section style={{ padding:'140px 88px', background:'var(--bg-0)', borderBottom:'1px solid var(--line)', position:'relative', overflow:'hidden' }}>
      <div style={{
        position:'absolute', left:-200, top:'30%', width: 600, height: 600,
        background:'radial-gradient(50% 50% at 50% 50%, rgba(249,115,22,0.12), transparent 70%)',
        filter:'blur(20px)'
      }} />

      <div style={{ position:'relative', display:'grid', gridTemplateColumns:'1fr 1.1fr', gap: 88, alignItems:'center' }}>
        <div>
          <Eyebrow label="The platform" n="N° 04" />
          <h2 style={{ fontFamily:'var(--display)', fontSize: 80, fontWeight: 500, letterSpacing:'-0.04em', marginTop: 24, lineHeight: 0.95, marginBottom: 28 }}>
            From DWG to<br/>
            <span style={SERIF}>sealed quote</span>,<br/>
            in 90 seconds.
          </h2>
          <p style={{ fontSize: 17, color:'var(--text-dim)', maxWidth: 480, lineHeight: 1.6, marginBottom: 36 }}>
            Drop a drawing &mdash; DWG, IFC, STEP, even a phone photo. Our model returns tonnage, lead time, and a quote signed by a licensed engineer.
          </p>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', columnGap: 32, rowGap: 24, marginBottom: 40, maxWidth: 480 }}>
            {[
              ['90 s', 'avg turnaround'],
              ['± 2.4%', 'price accuracy'],
              ['EN 1993', 'code-checked'],
              ['EUR ING', 'engineer-sealed'],
            ].map(([a,b],i)=>(
              <div key={i}>
                <div className="stencil tnum" style={{ fontSize: 30, color: i===0?'var(--accent)':'var(--text)' }}>{a}</div>
                <div style={{ fontFamily:'var(--mono)', fontSize: 11, color:'var(--muted)', marginTop: 4, letterSpacing:'0.12em' }}>{b.toUpperCase()}</div>
              </div>
            ))}
          </div>

          <button className="btn btn-primary">Try the estimator <span className="arrow" /></button>
        </div>

        {/* Console — kept, but cleaner */}
        <div style={{
          background:'linear-gradient(180deg, var(--bg-2), var(--bg-1))',
          border:'1px solid var(--line-2)',
          boxShadow:'0 40px 100px -20px rgba(0,0,0,0.7)'
        }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 18px', borderBottom:'1px solid var(--line)' }}>
            <span className="mono" style={{ fontSize: 11, color:'var(--muted)', letterSpacing:'0.16em' }}>
              ESTIMATOR · ENGINE BOLT-9
            </span>
            <span className="mono" style={{ fontSize: 11, color:'var(--accent)', display:'inline-flex', alignItems:'center', gap: 8 }}>
              <span className="pulse" style={{ width: 6, height: 6, borderRadius:'50%', background:'var(--accent)' }} />
              ANALYZING · 142 NODES
            </span>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 0 }}>
            {/* Plan */}
            <div style={{ height: 360, position:'relative', borderRight:'1px solid var(--line)', background:'#0A0B0D' }} className="blueprint-fine">
              <svg viewBox="0 0 320 360" style={{ position:'absolute', inset: 0, width:'100%', height:'100%' }}>
                <g stroke="rgba(249,115,22,0.7)" strokeWidth="1" fill="none">
                  <rect x="40" y="60" width="240" height="240" />
                  <line x1="40" y1="140" x2="280" y2="140" />
                  <line x1="40" y1="220" x2="280" y2="220" />
                  <line x1="120" y1="60" x2="120" y2="300" />
                  <line x1="200" y1="60" x2="200" y2="300" strokeDasharray="3 4" />
                </g>
                <g fill="rgba(249,115,22,0.95)">
                  <circle cx="40" cy="60" r="3"/><circle cx="280" cy="60" r="3"/>
                  <circle cx="40" cy="300" r="3"/><circle cx="280" cy="300" r="3"/>
                  <circle cx="120" cy="140" r="3"/><circle cx="200" cy="220" r="3"/>
                </g>
              </svg>
              <div style={{ position:'absolute', top: 14, left: 14, right: 14, display:'flex', justifyContent:'space-between' }}>
                <span className="mono" style={{ fontSize: 10, color:'var(--muted)' }}>FLOOR 01 · GRID 24×18</span>
                <span className="mono" style={{ fontSize: 10, color:'var(--accent)' }}>SCALE 1:200</span>
              </div>
            </div>

            {/* Output */}
            <div style={{ padding: 24, display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
              <div>
                <Row label="Total steel"     v="284.6"   u="t"     hi />
                <Row label="Lead time"       v="8.4"     u="weeks" />
                <Row label="Welds"           v="2 318"   u=""      />
                <Row label="Connections"     v="612"     u=""      />
                <Row label="Stress · max"    v="74%"     u="node N-204"  />
              </div>
              <div style={{ marginTop: 24, padding:'18px 16px', borderTop:'1px solid var(--line-2)' }}>
                <div className="mono" style={{ fontSize: 11, color:'var(--accent)', letterSpacing:'0.18em' }}>SEALED QUOTE</div>
                <div className="stencil tnum" style={{ fontSize: 44, color:'var(--text)', marginTop: 6, letterSpacing:'-0.03em' }}>
                  € 1 284 600
                </div>
                <button className="btn btn-primary" style={{ marginTop: 14, height: 40, padding:'0 18px', fontSize: 12 }}>Sign &amp; send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, v, u, hi }) {
  return (
    <div style={{
      display:'flex', justifyContent:'space-between', alignItems:'baseline',
      padding:'12px 0', borderBottom:'1px solid var(--line)'
    }}>
      <span className="mono" style={{ fontSize: 11, color:'var(--muted)', letterSpacing:'0.14em', textTransform:'uppercase' }}>{label}</span>
      <span>
        <span className="stencil tnum" style={{ fontSize: hi?24:18, color: hi?'var(--accent)':'var(--text)' }}>{v}</span>
        <span className="mono" style={{ fontSize: 11, color:'var(--muted)', marginLeft: 6 }}>{u}</span>
      </span>
    </div>
  );
}

/* ── 6 ─ EDITORIAL PULL QUOTE ─────────────────────────────────────── */
function PullQuote() {
  return (
    <section style={{ padding:'160px 88px', background:'var(--bg-0)', borderBottom:'1px solid var(--line)' }}>
      <div style={{ maxWidth: 1100, margin:'0 auto' }}>
        <Eyebrow label="Words from site" n="N° 05" />
        <blockquote style={{
          marginTop: 36, fontFamily:'var(--serif)', fontWeight: 400,
          fontSize: 88, lineHeight: 1.05, color:'var(--text)',
          letterSpacing:'-0.02em', maxWidth: 1100
        }}>
          They didn&rsquo;t bid the job. They built the operating system <em style={{ color:'var(--accent)' }}>around it</em> &mdash; the mill streams to my phone, every weld traceable to its heat number.
        </blockquote>
        <div style={{ marginTop: 48, display:'flex', justifyContent:'space-between', alignItems:'baseline', borderTop:'1px solid var(--line-2)', paddingTop: 24 }}>
          <div>
            <div style={{ fontFamily:'var(--display)', fontSize: 18, fontWeight: 500 }}>Hannah Lindqvist</div>
            <div style={{ fontFamily:'var(--mono)', fontSize: 11, color:'var(--muted)', letterSpacing:'0.14em', marginTop: 4 }}>
              PRINCIPAL · LINDQVIST ARKITEKTER  ·  P-507 AURORA ATRIUM
            </div>
          </div>
          <div style={{ display:'flex', gap: 4, alignItems:'center' }}>
            <button className="dot-btn" />
            <button className="dot-btn dot-btn-active" />
            <button className="dot-btn" />
            <span style={{ fontFamily:'var(--mono)', fontSize: 11, color:'var(--muted)', letterSpacing:'0.14em', marginLeft: 16 }}>02 / 12</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 7 ─ FINAL CTA ────────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section style={{
      position:'relative', padding:'180px 88px',
      background:'var(--bg-0)',
      borderBottom:'1px solid var(--line)',
      overflow:'hidden'
    }}>
      <div style={{
        position:'absolute', left:'50%', top:'100%', transform:'translate(-50%, -50%)',
        width: 1200, height: 1200,
        background:'radial-gradient(50% 50% at 50% 50%, rgba(249,115,22,0.18), transparent 70%)',
        filter:'blur(20px)', pointerEvents:'none'
      }} />
      <div style={{ position:'relative' }}>
        <Eyebrow label="The next mill run" n="N° 06" />
        <h2 style={{
          fontFamily:'var(--display)', fontSize: 200, fontWeight: 500,
          letterSpacing:'-0.06em', lineHeight: 0.9, marginTop: 32,
          maxWidth: 1280
        }}>
          Bring us your<br/>
          <span style={SERIF}>impossible</span><br/>
          drawing.
        </h2>

        <div style={{
          marginTop: 64, display:'grid',
          gridTemplateColumns:'1.2fr auto auto', gap: 48,
          alignItems:'end'
        }}>
          <p style={{ fontSize: 18, color:'var(--text-dim)', maxWidth: 540, lineHeight: 1.5 }}>
            Drop a file. Receive a sealed quote, with engineer signature, in 90 seconds. The mill is online &mdash; pick your slot.
          </p>
          <div>
            <div className="stencil tnum" style={{ fontSize: 44, color:'var(--text)' }}>Q3 · 26</div>
            <div style={{ fontFamily:'var(--mono)', fontSize: 11, color:'var(--muted)', letterSpacing:'0.16em', marginTop: 6 }}>
              NEXT DELIVERY SLOT
            </div>
          </div>
          <div style={{ display:'flex', gap: 12 }}>
            <button className="btn btn-primary" style={{ height: 56, padding:'0 28px', fontSize: 14 }}>
              Upload drawing <span className="arrow" />
            </button>
            <button className="btn btn-ghost" style={{ height: 56, padding:'0 24px', fontSize: 14 }}>
              Book a mill tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 8 ─ FOOTER ───────────────────────────────────────────────────── */
function FerrousFooter() {
  return (
    <footer style={{ background:'var(--bg-0)', padding:'72px 88px 32px' }}>
      <div style={{ display:'grid', gridTemplateColumns:'1.6fr 1fr 1fr 1fr 1fr', gap: 48 }}>
        <div>
          <FerrousLogo size={26} />
          <p style={{ fontSize: 13, color:'var(--text-dim)', marginTop: 22, maxWidth: 280, lineHeight: 1.55 }}>
            The operating system for steel. Designed &amp; fabricated in Liège, Belgium &mdash; serving 27 countries since 2009.
          </p>
          <div style={{ marginTop: 24, fontFamily:'var(--mono)', fontSize: 10, color:'var(--muted)', letterSpacing:'0.16em', display:'flex', gap: 16 }}>
            <span>ISO 9001</span>
            <span>ISO 3834-2</span>
            <span>EN 1090 EXC4</span>
          </div>
        </div>
        {[
          ['Platform',['Estimator','Client Portal','Admin Console','API · BETA','Mobile']],
          ['Capabilities',['Heavy structures','Facades','CNC fabrication','Welding','Coatings']],
          ['Company',['About','Mill tour','Careers · 12 open','Press kit','Sustainability']],
          ['Contact',['hello@ferrous.os','+32 4 220 88 12','Rue de la Fonderie 41','4000 Liège · BE']],
        ].map(([title, items]) => (
          <div key={title}>
            <div className="mono" style={{ fontSize: 10, color:'var(--muted)', letterSpacing:'0.18em', marginBottom: 18 }}>
              {title.toUpperCase()}
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap: 12 }}>
              {items.map(it => <a key={it} href="#" style={{ fontSize: 13, color:'var(--text-dim)' }}>{it}</a>)}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 72, paddingTop: 22, borderTop:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div className="mono" style={{ fontSize: 10, color:'var(--muted)', letterSpacing:'0.14em' }}>
          © 2009–2026 FERROUS SA · LIÈGE · BE 0683.421.220
        </div>
        <div className="mono" style={{ fontSize: 10, color:'var(--muted)', letterSpacing:'0.14em', display:'flex', gap: 20 }}>
          <span>EN · FR · NL · DE</span>
          <span style={{ display:'inline-flex', alignItems:'center', gap: 8 }}>
            <span className="pulse" style={{ width:6, height:6, borderRadius:'50%', background:'var(--success)' }} />
            ALL SYSTEMS NOMINAL
          </span>
        </div>
      </div>

      <div style={{ marginTop: 64, overflow:'hidden' }}>
        <div className="stencil" style={{
          fontSize: 320, color:'transparent',
          WebkitTextStroke: '1px var(--line-2)',
          letterSpacing:'-0.05em', lineHeight: 0.85,
          whiteSpace:'nowrap', fontWeight: 500
        }}>FERROUS®</div>
      </div>
    </footer>
  );
}

/* ── NAV OVERRIDE (cleaner) ──────────────────────────────────────── */
function NavBarLanding() {
  const items = ['Capabilities','Projects','Estimator','Studio','Contact'];
  return (
    <header style={{
      display:'flex', alignItems:'center', justifyContent:'space-between',
      height: 72, padding:'0 88px',
      background:'var(--bg-0)',
      borderBottom:'1px solid var(--line)'
    }}>
      <FerrousLogo />
      <nav style={{ display:'flex', gap: 32 }}>
        {items.map((n,i)=>(
          <a key={n} href="#" style={{
            fontFamily:'var(--display)', fontSize: 13, fontWeight: 500,
            color: i===0?'var(--text)':'var(--muted)',
            letterSpacing:'0.01em'
          }}>{n}</a>
        ))}
      </nav>
      <div style={{ display:'flex', alignItems:'center', gap: 18 }}>
        <a href="#" style={{ fontFamily:'var(--display)', fontSize: 13, color:'var(--muted)' }}>Sign in</a>
        <button className="btn btn-primary" style={{ height: 38, padding:'0 18px', fontSize: 12 }}>
          Quote <span className="arrow" />
        </button>
      </div>
    </header>
  );
}

/* ── ASSEMBLY ────────────────────────────────────────────────────── */
function LandingArtboard() {
  return (
    <div className="ferrous" data-screen-label="Landing" style={{ width: 1440 }}>
      <NavBarLanding />
      <LandingHero />
      <NumbersStrip />
      <ServicesSection />
      <FeaturedProjects />
      <EstimatorPreview />
      <PullQuote />
      <FinalCTA />
      <FerrousFooter />
    </div>
  );
}

Object.assign(window, { LandingArtboard, NavBarLanding, Eyebrow });
