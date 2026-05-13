// FERROUS — Client Portal artboard
// Width: 1440. Dark futuristic client dashboard.

function ClientSidebar({ active = 'Overview' }) {
  const items = [
    ['Overview','grid'],
    ['Projects','layers'],
    ['Quotes','doc'],
    ['Documents','doc'],
    ['Invoices','doc'],
    ['Messages','chat'],
    ['Site cams','pulse'],
    ['Team','shield'],
  ];
  return (
    <aside style={{
      width: 240, background:'var(--bg-1)', borderRight:'1px solid var(--line)',
      padding:'24px 0', display:'flex', flexDirection:'column', flexShrink: 0
    }}>
      <div style={{ padding:'0 22px 18px', borderBottom:'1px solid var(--line)' }}>
        <FerrousLogo size={20} />
      </div>
      <div style={{ padding:'18px 14px 0' }}>
        <div className="mono" style={{ fontSize: 9, color:'var(--muted)', letterSpacing:'0.16em', padding:'0 8px 10px' }}>CLIENT WORKSPACE</div>
        <div style={{ padding:'8px 10px', background:'var(--bg-2)', border:'1px solid var(--line)', display:'flex', alignItems:'center', gap: 10, marginBottom: 18 }}>
          <div style={{ width: 28, height: 28, background:'linear-gradient(135deg, var(--accent), var(--accent-dim))', display:'flex', alignItems:'center', justifyContent:'center',
            fontFamily:'var(--display)', fontSize: 13, fontWeight: 600, color:'#120A04' }}>LB</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12 }}>Lindqvist Bau</div>
            <div className="mono" style={{ fontSize: 9, color:'var(--muted)' }}>● 4 LIVE PROJECTS</div>
          </div>
        </div>
      </div>
      <nav style={{ display:'flex', flexDirection:'column', padding:'0 14px' }}>
        {items.map(([n,ic])=>(
          <button key={n} style={{
            display:'flex', alignItems:'center', gap: 12, padding:'10px 12px',
            background: active===n ? 'rgba(249,115,22,0.08)' : 'transparent',
            color: active===n ? 'var(--accent)' : 'var(--text-dim)',
            border:'1px solid '+(active===n?'rgba(249,115,22,0.25)':'transparent'),
            marginBottom: 2, position:'relative'
          }}>
            <Icon name={ic} size={14} />
            <span style={{ fontSize: 13, fontFamily:'var(--display)', fontWeight: 500 }}>{n}</span>
            {n==='Messages' && <span className="mono" style={{
              marginLeft:'auto', fontSize: 9, padding:'2px 6px',
              background:'var(--accent)', color:'#120A04'
            }}>3</span>}
            {active===n && <span style={{ position:'absolute', left:-14, top:0, bottom:0, width:2, background:'var(--accent)' }} />}
          </button>
        ))}
      </nav>
      <div style={{ marginTop:'auto', padding: 14 }}>
        <div className="surface" style={{ padding: 14, position:'relative' }}>
          <div className="mono" style={{ fontSize: 9, color:'var(--muted)', letterSpacing:'0.14em', marginBottom: 6 }}>● MILL STATUS</div>
          <div style={{ fontSize: 12 }}>Bay 04 — Truss 12</div>
          <div className="mono" style={{ fontSize: 10, color:'var(--accent)', marginTop: 4 }}>WELDING · 92%</div>
          <div className="bar shimmer" style={{ marginTop: 6 }}><i style={{ width:'92%' }} /></div>
        </div>
      </div>
    </aside>
  );
}

function ClientTopbar() {
  return (
    <header style={{
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'16px 32px', borderBottom:'1px solid var(--line)', background:'var(--bg-1)'
    }}>
      <div>
        <div className="mono" style={{ fontSize: 10, color:'var(--muted)', letterSpacing:'0.16em' }}>● PORTAL · v 3.14</div>
        <div style={{ fontFamily:'var(--display)', fontSize: 22, fontWeight: 600, marginTop: 4 }}>Good morning, Hannah.</div>
      </div>
      <div style={{ display:'flex', gap: 14, alignItems:'center' }}>
        <div style={{ display:'flex', alignItems:'center', gap: 8, padding:'8px 12px', border:'1px solid var(--line-2)' }}>
          <Icon name="search" size={14} color="var(--muted)" />
          <input placeholder="Search projects, docs, messages..." style={{
            background:'none', border:0, outline:'none', color:'var(--text)', fontSize: 12, width: 260
          }} />
          <span className="mono" style={{ fontSize: 9, color:'var(--muted)', border:'1px solid var(--line-2)', padding:'2px 6px' }}>⌘ K</span>
        </div>
        <button style={{ padding: 9, border:'1px solid var(--line-2)', color:'var(--text-dim)', position:'relative' }}>
          <Icon name="bell" size={14} />
          <span style={{ position:'absolute', top:-2, right:-2, width:8, height:8, borderRadius:'50%', background:'var(--accent)' }} />
        </button>
        <button className="btn btn-primary" style={{ height: 36, padding:'0 14px', fontSize: 12 }}>+ New quote</button>
      </div>
    </header>
  );
}

function ClientPortalArtboard() {
  return (
    <div className="ferrous" data-screen-label="ClientPortal" style={{ width: 1440, minHeight: 1100, display:'flex', background:'var(--bg-0)' }}>
      <ClientSidebar active="Overview" />
      <main style={{ flex: 1, minWidth: 0 }}>
        <ClientTopbar />

        <div style={{ padding: 32 }}>
          {/* Greeting strip & KPIs */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 12, marginBottom: 16 }}>
            <Kpi label="Active projects" v="4" sub="of 6 total" trend="●" color="accent" />
            <Kpi label="Tonnage committed" v="11 240" unit="t" sub="this quarter" trend="+8%" />
            <Kpi label="Outstanding balance" v="€ 284 600" sub="due Q3 · 2026" trend="—" />
            <Kpi label="Open documents" v="24" sub="3 require signature" trend="● 3" color="warn" />
          </div>

          {/* Main grid */}
          <div style={{ display:'grid', gridTemplateColumns:'1.6fr 1fr', gap: 16 }}>
            {/* LEFT: Active project card */}
            <div className="surface" style={{ padding: 28, position:'relative' }}>
              <div className="corner tl" /><div className="corner tr" />
              <div style={{ display:'flex', justifyContent:'space-between' }}>
                <div>
                  <div className="mono" style={{ fontSize: 10, color:'var(--muted)', letterSpacing:'0.14em' }}>FEATURED PROJECT · P-318</div>
                  <h3 style={{ fontSize: 32, marginTop: 8, fontWeight: 600 }}>Helix Stadium</h3>
                  <div style={{ display:'flex', gap: 14, marginTop: 8, fontFamily:'var(--mono)', fontSize: 11, color:'var(--text-dim)' }}>
                    <span>Lyon · FR</span><span style={{ color:'var(--line-3)' }}>·</span>
                    <span>3 120 t</span><span style={{ color:'var(--line-3)' }}>·</span>
                    <span>26 mo</span><span style={{ color:'var(--line-3)' }}>·</span>
                    <span style={{ color:'var(--accent)' }}>PHASE 4 · TRUSSES</span>
                  </div>
                </div>
                <span className="tag warn">● 68% · ON SCHEDULE</span>
              </div>

              {/* Progress chart */}
              <div style={{ marginTop: 28, height: 180, position:'relative' }} className="blueprint">
                <svg width="100%" height="100%" viewBox="0 0 740 180" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="cli-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#F97316" stopOpacity="0.4" />
                      <stop offset="1" stopColor="#F97316" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g stroke="rgba(255,255,255,0.05)">
                    {[0,1,2,3].map(i => <line key={i} x1="0" y1={i*45} x2="740" y2={i*45} />)}
                  </g>
                  {/* Plan line (steel) */}
                  <path d="M 0 160 L 90 140 L 180 110 L 270 90 L 360 70 L 450 50 L 540 30 L 740 20" stroke="rgba(148,163,184,0.6)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
                  {/* Actual line (ember) */}
                  <path d="M 0 160 L 90 138 L 180 105 L 270 80 L 360 56 L 450 56 L 540 56 L 740 56" stroke="#F97316" strokeWidth="2" fill="none" />
                  <path d="M 0 160 L 90 138 L 180 105 L 270 80 L 360 56 L 450 56 L 540 56 L 740 56 L 740 180 L 0 180 Z" fill="url(#cli-area)" />
                  <circle cx="450" cy="56" r="4" fill="#F97316" />
                  <line x1="450" y1="0" x2="450" y2="180" stroke="rgba(249,115,22,0.4)" strokeDasharray="2 4" />
                  <text x="458" y="14" fill="#F97316" fontFamily="JetBrains Mono" fontSize="10">TODAY · 68%</text>
                </svg>
              </div>

              <div style={{ display:'flex', justifyContent:'space-between', marginTop: 16, fontSize: 11, fontFamily:'var(--mono)', color:'var(--muted)' }}>
                <span><span style={{ display:'inline-block', width: 10, height: 2, background:'#94A3B8', verticalAlign:'middle', marginRight: 6 }} />PLAN</span>
                <span><span style={{ display:'inline-block', width: 10, height: 2, background:'#F97316', verticalAlign:'middle', marginRight: 6 }} />ACTUAL</span>
              </div>

              {/* Sub stats */}
              <div style={{ marginTop: 24, display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 24, paddingTop: 24, borderTop:'1px solid var(--line)' }}>
                {[
                  ['Erected','2 121 t','of 3 120'],
                  ['Welded','78%','EXC4 cert'],
                  ['Crews on site','34','3 bays'],
                  ['Days to handover','94','Q3 · 2026'],
                ].map(([l,v,s],i)=>(
                  <div key={i}>
                    <div className="mono" style={{ fontSize: 9, color:'var(--muted)', letterSpacing:'0.14em' }}>{l.toUpperCase()}</div>
                    <div className="stencil tnum" style={{ fontSize: 24, marginTop: 4 }}>{v}</div>
                    <div className="mono" style={{ fontSize: 10, color:'var(--muted)', marginTop: 2 }}>{s}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Live cam / mill view */}
            <div className="surface" style={{ padding: 0, position:'relative', overflow:'hidden' }}>
              <div style={{ position:'absolute', top: 12, left: 12, right: 12, zIndex: 2, display:'flex', justifyContent:'space-between' }}>
                <span className="tag on">● LIVE · BAY 04</span>
                <span className="mono" style={{ fontSize: 10, color:'var(--text-dim)' }}>14:24:08 CET</span>
              </div>
              {/* Faux camera view */}
              <div style={{
                height: 280,
                background:'radial-gradient(60% 60% at 40% 40%, #2E1F12 0%, #0F0908 80%)',
                position:'relative', overflow:'hidden'
              }}>
                <svg viewBox="0 0 480 280" style={{ position:'absolute', inset: 0, width:'100%', height:'100%' }} preserveAspectRatio="xMidYMid slice">
                  {/* Sparks */}
                  <g>
                    {Array.from({length: 12}).map((_,i) => (
                      <circle key={i} cx={180+Math.cos(i)*30} cy={140+Math.sin(i*2)*20} r="1.5" fill="#FFB347" opacity="0.9" />
                    ))}
                  </g>
                  {/* Robotic arm silhouette */}
                  <g stroke="#1F2226" strokeWidth="14" strokeLinecap="round" fill="none">
                    <path d="M 100 280 L 100 180" />
                    <path d="M 100 180 L 200 100" />
                    <path d="M 200 100 L 280 140" />
                  </g>
                  <g stroke="#3A4048" strokeWidth="2" fill="none">
                    <path d="M 100 280 L 100 180 L 200 100 L 280 140" />
                  </g>
                  {/* Weld arc */}
                  <circle cx="290" cy="142" r="6" fill="#FFB347">
                    <animate attributeName="r" values="6;9;6" dur="0.9s" repeatCount="indefinite" />
                    <animate attributeName="fill-opacity" values="1;0.6;1" dur="0.9s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="290" cy="142" r="20" fill="#F97316" opacity="0.3" />
                  {/* Workpiece */}
                  <rect x="240" y="150" width="240" height="20" fill="#3A4048" />
                  <rect x="240" y="150" width="240" height="2" fill="#6B7280" />
                </svg>
                {/* corners */}
                <div className="corner tl" /><div className="corner tr" />
                <div className="corner bl" /><div className="corner br" />
                {/* HUD */}
                <div style={{ position:'absolute', bottom: 12, left: 12, right: 12,
                  display:'flex', justifyContent:'space-between',
                  fontFamily:'var(--mono)', fontSize: 10, color:'var(--accent)' }}>
                  <span>● REC · 02:14:22</span>
                  <span>WELD · MIG · 188 A · 24 V</span>
                </div>
              </div>
              <div style={{ padding: 20 }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
                  <span style={{ fontFamily:'var(--display)', fontSize: 18, fontWeight: 600 }}>Truss member TR-12</span>
                  <span className="mono" style={{ fontSize: 10, color:'var(--muted)' }}>HEAT · 4421-B</span>
                </div>
                <div className="mono" style={{ fontSize: 10, color:'var(--muted)', marginTop: 4 }}>
                  ROBOT · ROBO-PANASONIC TM-2500
                </div>
                <div style={{ marginTop: 14 }}>
                  <div className="mono" style={{ fontSize: 10, color:'var(--muted)', display:'flex', justifyContent:'space-between', marginBottom: 6 }}>
                    <span>WELD PROGRESS</span><span style={{ color:'var(--accent)' }}>92%</span>
                  </div>
                  <div className="bar"><i style={{ width:'92%' }} /></div>
                </div>
                <div style={{ display:'flex', gap: 8, marginTop: 14 }}>
                  {['BAY 01','BAY 02','BAY 03','BAY 04','YARD'].map((b,i)=>(
                    <span key={b} className="mono" style={{
                      padding:'4px 8px', fontSize: 9,
                      background: i===3?'rgba(249,115,22,0.12)':'transparent',
                      color: i===3?'var(--accent)':'var(--muted)',
                      border:'1px solid '+(i===3?'rgba(249,115,22,0.4)':'var(--line-2)')
                    }}>{b}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Lower row: Documents · Quotes · Messages */}
          <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr 1fr', gap: 16, marginTop: 16 }}>
            {/* Quote tracking */}
            <div className="surface" style={{ padding: 24 }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom: 18 }}>
                <h4 style={{ fontFamily:'var(--display)', fontSize: 18, fontWeight: 600 }}>Quote pipeline</h4>
                <span className="mono" style={{ fontSize: 10, color:'var(--muted)' }}>● 6 OPEN · 2 AWAITING</span>
              </div>
              <table style={{ width:'100%', fontFamily:'var(--mono)', fontSize: 11, borderCollapse:'collapse' }}>
                <thead>
                  <tr style={{ color:'var(--muted)' }}>
                    {['QUOTE','PROJECT','VALUE','STATUS',''].map(h=>(<th key={h} style={{ textAlign:'left', padding:'8px 0', fontWeight: 400, letterSpacing:'0.14em' }}>{h}</th>))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Q-2026-114', 'Maelstrom B.', '€ 12.4M', 'SIGNED', 'success'],
                    ['Q-2026-203', 'Vertex Tower', '€ 84.0M', 'NEGOTIATING', 'warn'],
                    ['Q-2026-318', 'Helix Stadium', '€ 32.1M', 'IN FAB', 'on'],
                    ['Q-2026-507', 'Aurora Atrium','€ 4.6M',  'AWAITING SIG', 'warn'],
                    ['Q-2026-612', 'Solenne Tower','€ 54.2M', 'DRAFT', null],
                  ].map((r,i)=>(
                    <tr key={i} style={{ borderTop:'1px solid var(--line)' }}>
                      <td style={{ padding:'12px 0', color:'var(--accent)' }}>{r[0]}</td>
                      <td style={{ padding:'12px 0', color:'var(--text)' }}>{r[1]}</td>
                      <td style={{ padding:'12px 0', color:'var(--text)' }}>{r[2]}</td>
                      <td style={{ padding:'12px 0' }}><span className={`tag ${r[4]||''}`}>{r[3]}</span></td>
                      <td style={{ padding:'12px 0', textAlign:'right', color:'var(--muted)' }}>→</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Documents */}
            <div className="surface" style={{ padding: 24 }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom: 18 }}>
                <h4 style={{ fontFamily:'var(--display)', fontSize: 18, fontWeight: 600 }}>Recent documents</h4>
                <span className="mono" style={{ fontSize: 10, color:'var(--muted)' }}>VAULT · 248</span>
              </div>
              {[
                ['DWG','DWG-FE-318-021 rev. C','sealed · 14 May','accent'],
                ['PDF','WPQR-204 EXC4','approved · 12 May','success'],
                ['MTR','MTR-S355JR · heat 4421','traceable','text'],
                ['INV','INVOICE-04-2026','€ 284 600 · due','warn'],
                ['CERT','EN 1090-2 attestation','rev. 2','text'],
              ].map((r,i)=>(
                <div key={i} style={{ display:'flex', gap: 12, padding:'12px 0', borderTop: i>0?'1px solid var(--line)':'none', alignItems:'center' }}>
                  <span className="mono" style={{ fontSize: 9, color: 'var(--accent)', width: 32 }}>{r[0]}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12 }}>{r[1]}</div>
                    <div className="mono" style={{ fontSize: 10, color: r[3]==='warn'?'var(--warn)':r[3]==='success'?'var(--success)':'var(--muted)' }}>{r[2]}</div>
                  </div>
                  <span style={{ color:'var(--muted)' }}>↓</span>
                </div>
              ))}
            </div>

            {/* Messages */}
            <div className="surface" style={{ padding: 24, display:'flex', flexDirection:'column' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom: 18 }}>
                <h4 style={{ fontFamily:'var(--display)', fontSize: 18, fontWeight: 600 }}>Site comms</h4>
                <span className="tag on">● 3 NEW</span>
              </div>
              {[
                ['MR','Marc Ruiz · Site Eng.','Truss 12 cleared QC. Lifting at 14:00. Crane scheduled.','12m','accent'],
                ['EW','Elena Wirth · PM','Cladding samples ready for sign-off. Vault ↗','1h','text'],
                ['JB','Jonas Berg · QA','WPQR-204 attached. EN 3834-2 OK.','3h','text'],
                ['SY','Solenne Yousfi · Logistics','Convoi exceptionnel cleared customs at Lyon.','6h','text'],
              ].map((m,i)=>(
                <div key={i} style={{ display:'flex', gap: 10, padding:'10px 0', borderTop: i>0?'1px solid var(--line)':'none' }}>
                  <div style={{ width: 28, height: 28, border:'1px solid '+(m[4]==='accent'?'rgba(249,115,22,0.4)':'var(--line-2)'),
                    color: m[4]==='accent'?'var(--accent)':'var(--text-dim)',
                    background:'var(--bg-3)', display:'flex', alignItems:'center', justifyContent:'center',
                    fontFamily:'var(--mono)', fontSize: 10 }}>{m[0]}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display:'flex', justifyContent:'space-between' }}>
                      <span style={{ fontSize: 12 }}>{m[1]}</span>
                      <span className="mono" style={{ fontSize: 9, color:'var(--muted)' }}>{m[3]}</span>
                    </div>
                    <div style={{ fontSize: 12, color:'var(--text-dim)', marginTop: 2, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{m[2]}</div>
                  </div>
                </div>
              ))}
              <div style={{ marginTop:'auto', paddingTop: 14, borderTop:'1px solid var(--line)', display:'flex', gap: 8 }}>
                <input placeholder="Reply to project channel..." style={{
                  flex: 1, background:'var(--bg-2)', border:'1px solid var(--line-2)', padding:'10px 12px',
                  color:'var(--text)', fontSize: 12, outline:'none'
                }} />
                <button className="btn btn-primary" style={{ height: 40, padding:'0 14px', fontSize: 11 }}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Kpi({ label, v, unit, sub, trend, color = 'text' }) {
  const c = color==='accent'?'var(--accent)':color==='warn'?'var(--warn)':'var(--text)';
  return (
    <div className="surface" style={{ padding: 20, position:'relative' }}>
      <div style={{ display:'flex', justifyContent:'space-between' }}>
        <span className="mono" style={{ fontSize: 10, color:'var(--muted)', letterSpacing:'0.14em' }}>{label.toUpperCase()}</span>
        <span className="mono" style={{ fontSize: 10, color: c }}>{trend}</span>
      </div>
      <div style={{ display:'flex', alignItems:'baseline', gap: 4, marginTop: 12 }}>
        <span className="stencil tnum" style={{ fontSize: 38, color: c }}>{v}</span>
        {unit && <span className="mono" style={{ fontSize: 13, color:'var(--muted)' }}>{unit}</span>}
      </div>
      <div className="mono" style={{ fontSize: 10, color:'var(--muted)', marginTop: 4, letterSpacing:'0.1em' }}>{sub}</div>
    </div>
  );
}

Object.assign(window, { ClientPortalArtboard, Kpi });
