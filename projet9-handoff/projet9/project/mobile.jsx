// FERROUS — Mobile screens artboard
// Width: 1440 (presents 4 mobile screens side by side at 360w each)

function Phone({ label, children, num }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap: 14 }}>
      <div style={{ display:'flex', alignItems:'center', gap: 10 }}>
        <span className="mono" style={{ fontSize: 10, color:'var(--accent)', letterSpacing:'0.16em' }}>● {num}</span>
        <span style={{ fontFamily:'var(--display)', fontSize: 14, fontWeight: 500 }}>{label}</span>
      </div>
      {/* phone frame */}
      <div style={{
        width: 290, height: 600,
        border:'2px solid var(--line-3)',
        borderRadius: 38,
        padding: 6,
        background:'#000',
        boxShadow:'0 30px 80px -10px rgba(0,0,0,0.6), inset 0 0 0 1px var(--line)',
        position:'relative'
      }}>
        <div style={{ position:'absolute', top: 14, left:'50%', transform:'translateX(-50%)',
          width: 80, height: 18, borderRadius: 10, background:'#000', zIndex: 2 }} />
        <div style={{
          width:'100%', height:'100%',
          borderRadius: 32,
          overflow:'hidden',
          background:'var(--bg-0)',
          position:'relative'
        }} className="ferrous">
          {children}
        </div>
      </div>
    </div>
  );
}

function MStatusBar() {
  return (
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'14px 22px 6px', fontFamily:'var(--mono)', fontSize: 10 }}>
      <span>14:24</span>
      <div style={{ display:'flex', gap: 4, alignItems:'center' }}>
        <span style={{ width: 16, height: 8, border:'1px solid var(--text)', borderRadius: 2, position:'relative' }}>
          <span style={{ position:'absolute', left: 0, top: 0, bottom: 0, width:'82%', background:'var(--text)' }} />
        </span>
      </div>
    </div>
  );
}

function MNav() {
  return (
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'8px 18px 14px' }}>
      <FerrousLogo size={16} />
      <button style={{ width: 34, height: 34, border:'1px solid var(--line-2)',
        display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap: 4 }}>
        <span style={{ width: 14, height: 1.5, background:'var(--text)' }} />
        <span style={{ width: 14, height: 1.5, background:'var(--text)' }} />
      </button>
    </div>
  );
}

function MHomeScreen() {
  return (
    <>
      <MStatusBar />
      <MNav />
      <div style={{ padding:'12px 18px' }}>
        <Kicker label="MILL ONLINE" />
        <h2 style={{ fontFamily:'var(--display)', fontSize: 38, fontWeight: 600, letterSpacing:'-0.035em', marginTop: 14, lineHeight: 0.95 }}>
          Steel<br/>
          <span style={{ color:'var(--accent)' }}>&amp; software</span>.
        </h2>
        <p style={{ fontSize: 12, color:'var(--text-dim)', marginTop: 14 }}>
          The operating system for steel. 480 projects. 27 countries. One mill.
        </p>
        <button className="btn btn-primary" style={{ marginTop: 18, width:'100%', height: 44, fontSize: 12 }}>
          Get a quote in 90 s <span className="arrow" />
        </button>

        <div className="surface" style={{ marginTop: 18, padding: 14 }}>
          <div className="mono" style={{ fontSize: 9, color:'var(--muted)', letterSpacing:'0.16em', marginBottom: 8 }}>● LIVE TELEMETRY</div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 10 }}>
            <Mini2 v="284 t" l="today" />
            <Mini2 v="1 538°" l="furnace" hi />
            <Mini2 v="34" l="crews" />
            <Mini2 v="92%" l="bay 4" />
          </div>
        </div>

        {/* mini project card */}
        <div style={{ marginTop: 14, border:'1px solid var(--line-2)', background:'var(--bg-2)', overflow:'hidden', position:'relative' }}>
          <svg viewBox="0 0 260 100" style={{ width:'100%', height: 100, display:'block' }}>
            <g stroke="rgba(249,115,22,0.6)" strokeWidth="1" fill="none">
              <path d="M 0 80 L 60 50 L 130 80 L 200 50 L 260 80" />
              <path d="M 0 80 L 260 80" stroke="rgba(148,163,184,0.4)" />
            </g>
          </svg>
          <div style={{ padding: 12 }}>
            <div className="mono" style={{ fontSize: 9, color:'var(--muted)' }}>P-114 · ROTTERDAM</div>
            <div style={{ fontFamily:'var(--display)', fontSize: 15, fontWeight: 600, marginTop: 2 }}>Maelstrom Bridge</div>
          </div>
        </div>
      </div>
    </>
  );
}

function Mini2({ v, l, hi }) {
  return (
    <div>
      <div className="stencil tnum" style={{ fontSize: 22, color: hi?'var(--accent)':'var(--text)' }}>{v}</div>
      <div className="mono" style={{ fontSize: 9, color:'var(--muted)', letterSpacing:'0.14em', marginTop: 2 }}>{l.toUpperCase()}</div>
    </div>
  );
}

function MQuoteForm() {
  return (
    <>
      <MStatusBar />
      <MNav />
      <div style={{ padding:'10px 18px' }}>
        <div style={{ display:'flex', alignItems:'center', gap: 8 }}>
          <span className="mono" style={{ fontSize: 9, color:'var(--muted)' }}>STEP</span>
          <span className="mono stencil" style={{ fontSize: 20, color:'var(--accent)' }}>02</span>
          <span className="mono" style={{ fontSize: 9, color:'var(--muted)' }}>/ 04</span>
          <div style={{ flex: 1, marginLeft: 6 }}>
            <div className="bar"><i style={{ width:'50%' }} /></div>
          </div>
        </div>
        <h3 style={{ fontFamily:'var(--display)', fontSize: 28, fontWeight: 600, marginTop: 18, letterSpacing:'-0.025em', lineHeight: 1 }}>
          Tell us about<br/>your structure.
        </h3>

        <div style={{ marginTop: 22, display:'flex', flexDirection:'column', gap: 12 }}>
          <Field label="STRUCTURE TYPE" v="Industrial hall" />
          <Field label="ESTIMATED TONNAGE" v="240 t" />
          <Field label="SITE LOCATION" v="Lyon, France" />
          <div>
            <div className="mono" style={{ fontSize: 9, color:'var(--muted)', letterSpacing:'0.14em', marginBottom: 8 }}>UPLOAD DRAWINGS</div>
            <div style={{
              border:'1px dashed var(--line-3)', padding: 18, display:'flex', flexDirection:'column', alignItems:'center', gap: 6
            }}>
              <Icon name="upload" size={20} color="var(--muted)" />
              <span style={{ fontSize: 11, color:'var(--text-dim)' }}>Drop DWG · IFC · PDF</span>
              <span className="mono" style={{ fontSize: 9, color:'var(--accent)' }}>OR TAKE A PHOTO</span>
            </div>
          </div>
        </div>

        <button className="btn btn-primary" style={{ marginTop: 18, width:'100%', height: 44, fontSize: 12 }}>
          Continue · Step 03 <span className="arrow" />
        </button>
        <div className="mono" style={{ fontSize: 9, color:'var(--muted)', textAlign:'center', marginTop: 10, letterSpacing:'0.14em' }}>
          ● SEALED QUOTE IN ~90 SEC
        </div>
      </div>
    </>
  );
}

function Field({ label, v }) {
  return (
    <div>
      <div className="mono" style={{ fontSize: 9, color:'var(--muted)', letterSpacing:'0.14em', marginBottom: 6 }}>{label}</div>
      <div style={{
        padding:'12px 14px', border:'1px solid var(--line-2)',
        fontSize: 13, color:'var(--text)', display:'flex', justifyContent:'space-between'
      }}>
        <span>{v}</span>
        <span style={{ color:'var(--muted)' }}>⌄</span>
      </div>
    </div>
  );
}

function MProjectDetail() {
  return (
    <>
      <MStatusBar />
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'8px 18px 12px' }}>
        <button style={{ color:'var(--text)' }}>←</button>
        <span className="mono" style={{ fontSize: 10, color:'var(--muted)', letterSpacing:'0.14em' }}>P-318</span>
        <Icon name="bell" size={14} color="var(--muted)" />
      </div>
      {/* schematic banner */}
      <div style={{ height: 140, position:'relative', background:'linear-gradient(180deg, #1F2226, #0E0F11)' }} className="blueprint-fine">
        <svg viewBox="0 0 260 140" style={{ position:'absolute', inset: 0, width:'100%', height:'100%' }}>
          <g stroke="rgba(249,115,22,0.7)" strokeWidth="1" fill="none">
            <ellipse cx="130" cy="100" rx="110" ry="30" />
            <path d="M 40 70 L 130 20 L 220 70" />
            <line x1="80" y1="86" x2="180" y2="86" strokeDasharray="3 3" />
          </g>
          <circle cx="130" cy="20" r="3" fill="#F97316" />
        </svg>
        <div style={{ position:'absolute', top: 10, left: 14, right: 14, display:'flex', justifyContent:'space-between' }}>
          <span className="tag">STADIUM</span>
          <span className="tag warn">● 68%</span>
        </div>
      </div>
      <div style={{ padding:'16px 18px' }}>
        <h3 style={{ fontFamily:'var(--display)', fontSize: 26, fontWeight: 600, letterSpacing:'-0.03em' }}>Helix Stadium</h3>
        <div className="mono" style={{ fontSize: 10, color:'var(--muted)', marginTop: 4 }}>LYON · FR · 2024 →</div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 12, marginTop: 18 }}>
          <Mini2 v="3 120 t" l="Tonnage" hi />
          <Mini2 v="26 mo" l="Duration" />
          <Mini2 v="196 m" l="Span" />
          <Mini2 v="EXC4" l="Welds" />
        </div>

        <div style={{ marginTop: 18 }}>
          <div className="mono" style={{ fontSize: 9, color:'var(--muted)', letterSpacing:'0.14em', marginBottom: 8 }}>PHASES</div>
          {[['Foundation',100,'success'],['Columns',100,'success'],['Trusses',78,'accent'],['Cladding',0,'muted']].map((p,i)=>(
            <div key={i} style={{ padding:'8px 0', borderBottom:'1px solid var(--line)' }}>
              <div style={{ display:'flex', justifyContent:'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: 12 }}>{p[0]}</span>
                <span className="mono" style={{ fontSize: 10, color: p[2]==='success'?'var(--success)':p[2]==='accent'?'var(--accent)':'var(--muted)' }}>{p[1]}%</span>
              </div>
              <div className="bar"><i style={{ width:`${p[1]}%`, background: p[2]==='success'?'var(--success)':p[2]==='accent'?'var(--accent)':'transparent' }} /></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function MDashboard() {
  return (
    <>
      <MStatusBar />
      <div style={{ display:'flex', justifyContent:'space-between', padding:'10px 18px 14px', alignItems:'center' }}>
        <div>
          <div className="mono" style={{ fontSize: 9, color:'var(--muted)', letterSpacing:'0.16em' }}>● PORTAL</div>
          <div style={{ fontFamily:'var(--display)', fontSize: 18, fontWeight: 600, marginTop: 2 }}>Hi, Hannah</div>
        </div>
        <div style={{ width: 36, height: 36, background:'linear-gradient(135deg, var(--accent), var(--accent-dim))',
          display:'flex', alignItems:'center', justifyContent:'center',
          fontFamily:'var(--display)', fontWeight: 600, color:'#120A04' }}>H</div>
      </div>

      <div style={{ padding:'0 18px' }}>
        {/* active project */}
        <div className="surface" style={{ padding: 14, position:'relative' }}>
          <div className="corner tl" /><div className="corner br" />
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom: 8 }}>
            <span className="mono" style={{ fontSize: 9, color:'var(--muted)' }}>P-318 · HELIX</span>
            <span className="tag warn">68%</span>
          </div>
          <div style={{ fontFamily:'var(--display)', fontSize: 18, fontWeight: 600 }}>Phase 04 · Trusses</div>
          <div className="bar" style={{ marginTop: 12 }}><i style={{ width:'68%' }} /></div>
          <div className="mono" style={{ fontSize: 9, color:'var(--muted)', marginTop: 8, display:'flex', justifyContent:'space-between' }}>
            <span>2 121 / 3 120 t</span><span>Q3 · 2026</span>
          </div>
        </div>

        {/* messages */}
        <div className="surface" style={{ marginTop: 12, padding: 14 }}>
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom: 12 }}>
            <span className="mono" style={{ fontSize: 9, color:'var(--muted)', letterSpacing:'0.16em' }}>● MESSAGES · 3</span>
            <span className="mono" style={{ fontSize: 9, color:'var(--accent)' }}>+ NEW</span>
          </div>
          {[
            ['MR','Marc · Site','Truss 12 cleared QC.','12m'],
            ['EW','Elena · PM','Cladding samples ready.','1h'],
          ].map((m,i)=>(
            <div key={i} style={{ display:'flex', gap: 10, padding:'8px 0', borderTop: i>0?'1px solid var(--line)':'none' }}>
              <div style={{ width: 26, height: 26, border:'1px solid var(--line-2)', background:'var(--bg-3)',
                display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--mono)', fontSize: 9 }}>{m[0]}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display:'flex', justifyContent:'space-between' }}>
                  <span style={{ fontSize: 11 }}>{m[1]}</span>
                  <span className="mono" style={{ fontSize: 9, color:'var(--muted)' }}>{m[3]}</span>
                </div>
                <div style={{ fontSize: 11, color:'var(--text-dim)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{m[2]}</div>
              </div>
            </div>
          ))}
        </div>

        {/* quick actions */}
        <div style={{ marginTop: 12, display:'grid', gridTemplateColumns:'1fr 1fr', gap: 8 }}>
          {[['New quote','accent'],['Upload doc',''],['Site cams',''],['Pay invoice','']].map((a,i)=>(
            <button key={i} className={`btn ${a[1]==='accent'?'btn-primary':'btn-ghost'}`} style={{ height: 44, fontSize: 11 }}>{a[0]}</button>
          ))}
        </div>
      </div>

      {/* bottom tabs */}
      <div style={{ position:'absolute', bottom: 0, left: 0, right: 0,
        display:'grid', gridTemplateColumns:'repeat(4, 1fr)',
        padding:'10px 16px 22px', borderTop:'1px solid var(--line)', background:'rgba(11,12,13,0.92)', backdropFilter:'blur(20px)' }}>
        {[['grid','Home','accent'],['layers','Projects',''],['chat','Inbox','badge'],['shield','Account','']].map(([ic,l,m],i)=>(
          <div key={i} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap: 4, color: m==='accent'?'var(--accent)':'var(--muted)', position:'relative' }}>
            <Icon name={ic} size={16} />
            <span className="mono" style={{ fontSize: 9, letterSpacing:'0.12em' }}>{l.toUpperCase()}</span>
            {m==='badge' && <span style={{ position:'absolute', top:-2, right:'34%', width:6, height:6, borderRadius:'50%', background:'var(--accent)' }} />}
          </div>
        ))}
      </div>
    </>
  );
}

function MobileArtboard() {
  return (
    <div className="ferrous" data-screen-label="Mobile" style={{ width: 1440, minHeight: 820, padding:'56px 56px', background:'var(--bg-0)', position:'relative' }}>
      <div className="blueprint" style={{ position:'absolute', inset:0, opacity: 0.5 }} />
      <div style={{ position:'relative', display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom: 40 }}>
        <div>
          <Kicker label="MOBILE EXPERIENCE" num="06" />
          <h2 style={{ fontSize: 64, fontWeight: 600, letterSpacing:'-0.035em', marginTop: 12, lineHeight: 0.95 }}>
            Pocket-sized<br/>
            <span style={{ color:'var(--accent)' }}>mill control</span>.
          </h2>
        </div>
        <p style={{ fontSize: 14, color:'var(--text-dim)', maxWidth: 380 }}>
          Thumb-friendly. Touch-targets ≥ 44px. The same telemetry your site engineer sees on the gantry &mdash; in your jacket pocket.
        </p>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 30, position:'relative' }}>
        <Phone num="01 · LANDING" label="Hero & telemetry"><MHomeScreen /></Phone>
        <Phone num="02 · QUOTE" label="4-step form"><MQuoteForm /></Phone>
        <Phone num="03 · PROJECT" label="Live progress"><MProjectDetail /></Phone>
        <Phone num="04 · PORTAL" label="Dashboard"><MDashboard /></Phone>
      </div>
    </div>
  );
}

Object.assign(window, { MobileArtboard });
