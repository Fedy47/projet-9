// FERROUS — Smart Steel Estimator full screen
// Width: 1440, height: ~1100

function EstimatorArtboard() {
  return (
    <div className="ferrous" data-screen-label="Estimator" style={{ width: 1440, position:'relative' }}>
      <NavBar active="Estimator" />

      <section style={{ position:'relative', padding:'56px 56px 0', background:'var(--bg-0)', overflow:'hidden' }}>
        <div className="blueprint-fine" style={{ position:'absolute', inset:0, opacity:0.45 }} />
        <div style={{ position:'absolute', right:-200, top:-100, width:700, height:700,
          background:'radial-gradient(50% 50% at 50% 50%, rgba(249,115,22,0.18), transparent 70%)' }} />

        <div style={{ position:'relative', display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom: 32 }}>
          <div>
            <Kicker label="SMART STEEL ESTIMATOR™" num="ENGINE: BOLT-9" />
            <h1 style={{ fontSize: 84, fontWeight: 600, letterSpacing:'-0.04em', marginTop: 16, lineHeight: 0.95 }}>
              From DWG to<br/>
              <span style={{ color:'var(--accent)' }}>sealed quote</span> in 90 seconds.
            </h1>
          </div>
          <div style={{ display:'flex', gap: 18 }}>
            <span className="tag on">● ENGINE ONLINE · 142ms LATENCY</span>
            <span className="tag">12 487 PROFILES INDEXED</span>
          </div>
        </div>

        {/* Stepper */}
        <div style={{ display:'flex', gap: 0, borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)' }}>
          {[
            ['01','Upload','complete'],
            ['02','Detect','complete'],
            ['03','Analyze','active'],
            ['04','Quote','pending'],
            ['05','Sign','pending'],
          ].map(([n,l,s],i)=>(
            <div key={n} style={{
              flex: 1, padding:'18px 22px', borderRight: i<4?'1px solid var(--line)':'none',
              display:'flex', alignItems:'center', gap: 14, position:'relative',
              background: s==='active' ? 'rgba(249,115,22,0.04)' : 'transparent'
            }}>
              <span className="mono stencil" style={{
                fontSize: 24, color: s==='complete'?'var(--success)':s==='active'?'var(--accent)':'var(--dim)'
              }}>{n}</span>
              <div>
                <div className="mono" style={{ fontSize: 10, color:'var(--muted)', letterSpacing:'0.14em' }}>STEP · {n}</div>
                <div style={{ fontSize: 14, fontFamily:'var(--display)', fontWeight: 500 }}>{l}</div>
              </div>
              {s==='active' && <div style={{ position:'absolute', left:0, right:0, bottom:-1, height:2, background:'var(--accent)' }} />}
              {s==='complete' && <span style={{ marginLeft:'auto', color:'var(--success)', fontSize: 18 }}>✓</span>}
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding:'40px 56px', background:'var(--bg-0)', position:'relative' }}>
        <div style={{ display:'grid', gridTemplateColumns:'2.2fr 1fr', gap: 16, height: 720 }}>
          {/* MAIN VIEWPORT */}
          <div className="surface" style={{ position:'relative', overflow:'hidden' }}>
            <div className="corner tl" /><div className="corner tr" /><div className="corner bl" /><div className="corner br" />
            {/* Toolbar */}
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 18px', borderBottom:'1px solid var(--line)' }}>
              <div style={{ display:'flex', gap: 12, alignItems:'center' }}>
                <div className="mono" style={{ fontSize: 10, color:'var(--muted)' }}>DWG-FE-2026-001.dwg · 4.2MB · 24 SHEETS</div>
                <span className="tag on">● ANALYZING · 73%</span>
              </div>
              <div style={{ display:'flex', gap: 6 }}>
                {['ISO','PLAN','ELEV','SECTION','BOM'].map((v,i)=>(
                  <button key={v} className="mono" style={{
                    padding:'6px 12px', fontSize: 10, letterSpacing:'0.1em',
                    background: i===0?'rgba(249,115,22,0.12)':'transparent',
                    color: i===0?'var(--accent)':'var(--text-dim)',
                    border:'1px solid '+(i===0?'rgba(249,115,22,0.4)':'var(--line-2)')
                  }}>{v}</button>
                ))}
              </div>
            </div>

            {/* 3D viewport-like canvas */}
            <div className="blueprint-fine" style={{ position:'absolute', top: 49, bottom: 60, left: 0, right: 0, background:'#0A0B0D' }}>
              <svg viewBox="0 0 800 580" preserveAspectRatio="xMidYMid meet" style={{ width:'100%', height:'100%' }}>
                <defs>
                  <linearGradient id="emberX" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0" stopColor="#F97316" stopOpacity="0.7" />
                    <stop offset="1" stopColor="#F97316" stopOpacity="0.15" />
                  </linearGradient>
                </defs>
                {/* Iso warehouse / hall */}
                <g transform="translate(120,80)">
                  <g stroke="rgba(148,163,184,0.35)" strokeWidth="1" fill="none">
                    {/* Ground grid (iso) */}
                    {Array.from({length: 9}).map((_,i) => (
                      <g key={i}>
                        <line x1={i*60} y1={400} x2={i*60+200} y2={300} />
                      </g>
                    ))}
                    {Array.from({length: 6}).map((_,i)=> (
                      <line key={i} x1={0+i*40} y1={400-i*20} x2={480+i*40} y2={400-i*20} />
                    ))}
                  </g>
                  {/* Columns and beams */}
                  {Array.from({length: 5}).map((_,col)=>(
                    <g key={col} stroke="url(#emberX)" strokeWidth="2.5" fill="none">
                      <line x1={col*120} y1={400} x2={col*120} y2={150} />
                      <line x1={col*120+200} y1={300} x2={col*120+200} y2={50} />
                    </g>
                  ))}
                  {/* Roof trusses */}
                  {Array.from({length: 5}).map((_,col)=>(
                    <g key={col} stroke="rgba(249,115,22,0.85)" strokeWidth="2" fill="none">
                      <line x1={col*120} y1={150} x2={col*120+100} y2={70} />
                      <line x1={col*120+100} y1={70} x2={col*120+200} y2={50} />
                      <line x1={col*120} y1={150} x2={col*120+200} y2={50} />
                    </g>
                  ))}
                  {/* Highlighted detected node */}
                  <g>
                    <circle cx="240" cy="150" r="14" fill="none" stroke="#F97316" strokeWidth="1.5">
                      <animate attributeName="r" values="14;22;14" dur="2.4s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="1;0;1" dur="2.4s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="240" cy="150" r="4" fill="#F97316" />
                    <line x1="260" y1="150" x2="340" y2="100" stroke="#F97316" strokeDasharray="3 3" />
                    <rect x="340" y="80" width="180" height="40" fill="rgba(0,0,0,0.7)" stroke="#F97316" />
                    <text x="350" y="98" fill="#F97316" fontFamily="JetBrains Mono" fontSize="10">NODE N-204</text>
                    <text x="350" y="112" fill="#94A3B8" fontFamily="JetBrains Mono" fontSize="9">HEA240 · 4 × M24 · σ=74%</text>
                  </g>
                </g>
              </svg>

              {/* Scan beam */}
              <div className="scan-line" style={{ top:'45%' }} />
            </div>

            {/* Bottom telemetry strip */}
            <div style={{ position:'absolute', bottom: 0, left: 0, right: 0, height: 60,
              borderTop:'1px solid var(--line)', display:'flex', alignItems:'center', padding:'0 18px', gap: 30 }}>
              {[
                ['NODES','142','/ 142'],
                ['PROFILES','12','types'],
                ['MAX SPAN','24 000','mm'],
                ['DETECTED LOAD','1 240','kN/m'],
                ['UTILISATION','74%','peak'],
              ].map(([l,v,u],i)=>(
                <div key={i} style={{ display:'flex', flexDirection:'column' }}>
                  <span className="mono" style={{ fontSize: 9, color:'var(--muted)', letterSpacing:'0.14em' }}>{l}</span>
                  <div style={{ display:'flex', alignItems:'baseline', gap: 4 }}>
                    <span className="stencil tnum" style={{ fontSize: 18 }}>{v}</span>
                    <span className="mono" style={{ fontSize: 10, color:'var(--muted)' }}>{u}</span>
                  </div>
                </div>
              ))}
              <div style={{ marginLeft:'auto' }}>
                <span className="mono" style={{ fontSize: 10, color:'var(--accent)' }}>● LIVE</span>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div style={{ display:'flex', flexDirection:'column', gap: 12 }}>
            {/* Upload dropzone — completed state */}
            <div className="surface" style={{ padding: 18, position:'relative' }}>
              <div className="mono" style={{ fontSize: 10, color:'var(--muted)', letterSpacing:'0.14em', marginBottom: 10 }}>● INPUT FILES</div>
              {[
                ['DWG-FE-2026-001.dwg','4.2 MB','DWG'],
                ['model.ifc','12.1 MB','IFC'],
                ['site-photo.jpg','2.4 MB','IMG'],
              ].map(([n,s,t],i)=>(
                <div key={i} style={{ display:'flex', alignItems:'center', gap: 10, padding:'6px 0' }}>
                  <span className="mono" style={{ fontSize: 9, color:'var(--accent)', width: 32 }}>{t}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{n}</div>
                    <div className="mono" style={{ fontSize: 10, color:'var(--muted)' }}>{s}</div>
                  </div>
                  <span style={{ color:'var(--success)', fontSize: 12 }}>✓</span>
                </div>
              ))}
              <button style={{
                marginTop: 8, width:'100%', padding: 10,
                border:'1px dashed var(--line-3)', background:'transparent',
                color:'var(--muted)', fontFamily:'var(--mono)', fontSize: 10,
                letterSpacing:'0.16em'
              }}>+ DROP MORE · DWG IFC STEP PDF</button>
            </div>

            {/* Tunable parameters */}
            <div className="surface" style={{ padding: 18 }}>
              <div className="mono" style={{ fontSize: 10, color:'var(--muted)', letterSpacing:'0.14em', marginBottom: 14 }}>PARAMETERS</div>
              <Param label="Steel grade" v="S355JR" choices={['S275','S355JR','S460N','S690']} active="S355JR" />
              <Param label="Code" v="EN 1993-1-1" choices={['EN 1993','AISC 360','GB 50017']} active="EN 1993" />
              <Param label="Coating" v="HDG · 85 µm" />
              <Param label="Fire rating" v="R 120" />
              <Param label="Delivery target" v="Q3 · 2026" />
            </div>

            {/* Quote summary */}
            <div className="surface" style={{
              padding: 18, position:'relative',
              border:'1px solid rgba(249,115,22,0.35)',
              background:'linear-gradient(180deg, rgba(249,115,22,0.08), rgba(249,115,22,0.02))'
            }}>
              <div className="mono" style={{ fontSize: 10, color:'var(--accent)', letterSpacing:'0.16em', marginBottom: 12 }}>● SEALED QUOTE PREVIEW</div>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
                <div className="stencil tnum" style={{ fontSize: 46, color:'var(--accent)' }}>€ 1.28M</div>
                <span className="mono" style={{ fontSize: 11, color:'var(--muted)' }}>± 2.4%</span>
              </div>
              <div style={{ marginTop: 14, display:'grid', gridTemplateColumns:'1fr 1fr', gap: 10, fontSize: 11 }}>
                <Mini label="Steel" v="€ 824 100" />
                <Mini label="Fab" v="€ 312 000" />
                <Mini label="Coatings" v="€ 84 500" />
                <Mini label="Logistics" v="€ 64 000" />
              </div>
              <div style={{ marginTop: 16, display:'flex', gap: 8 }}>
                <button className="btn btn-primary" style={{ flex: 1, height: 40, fontSize: 12 }}>Sign &amp; send <span className="arrow" /></button>
                <button className="btn btn-ghost" style={{ height: 40, padding:'0 14px', fontSize: 12 }}>PDF</button>
              </div>
              <div className="mono" style={{ fontSize: 9, color:'var(--muted)', marginTop: 14, letterSpacing:'0.1em' }}>
                ENGINEER · J. BERG, EUR ING · WPQR-204 · COUNTERSIGN REQUIRED
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOM table */}
      <section style={{ padding:'40px 56px 80px', background:'var(--bg-1)', borderTop:'1px solid var(--line)' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom: 24 }}>
          <div>
            <Kicker label="BILL OF MATERIAL" num="GENERATED · 00:01:24" />
            <h3 style={{ fontSize: 36, marginTop: 10, fontWeight: 600 }}>Auto-detected line items</h3>
          </div>
          <div className="mono" style={{ fontSize: 10, color:'var(--muted)' }}>
            EXPORT: CSV · XLSX · PDF · IFC
          </div>
        </div>
        <div className="surface" style={{ overflow:'hidden' }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontFamily:'var(--mono)', fontSize: 11 }}>
            <thead>
              <tr style={{ background:'var(--bg-2)', borderBottom:'1px solid var(--line-2)' }}>
                {['#','PART','PROFILE','GRADE','QTY','LEN (mm)','MASS (kg)','TREATMENT','LEAD'].map(h=>(
                  <th key={h} style={{ textAlign:'left', padding:'12px 16px', color:'var(--muted)', fontWeight: 400, letterSpacing:'0.14em' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['001','Main column', 'HEA 320', 'S355JR', '24', '6 400', '32 256', 'HDG · 85µm', '6 wk'],
                ['002','Roof truss', 'TUBE □180×8', 'S355JR', '18', '24 000', '54 432', 'HDG · paint', '8 wk'],
                ['003','Secondary beam', 'IPE 240', 'S275', '96', '6 000', '23 904', 'HDG · 85µm', '5 wk'],
                ['004','Bracing', 'L100×100×10', 'S275', '144', '4 800', '10 627', 'paint C5-M', '4 wk'],
                ['005','Base plate', 'PL30 · 600×600', 'S355J2', '24', '—', '2 540', 'HDG · 120µm', '4 wk'],
                ['006','Connection plates', 'PL12–20', 'S355JR', '480', '—', '6 218', 'paint C5-M', '4 wk'],
              ].map((row,i) => (
                <tr key={i} style={{ borderBottom:'1px solid var(--line)' }}>
                  {row.map((c,j) => (
                    <td key={j} style={{ padding:'12px 16px', color: j===0?'var(--accent)':j===6?'var(--text-dim)':'var(--text)' }}>{c}</td>
                  ))}
                </tr>
              ))}
              <tr style={{ background:'rgba(249,115,22,0.06)' }}>
                <td colSpan="5" style={{ padding:'14px 16px', color:'var(--accent)', letterSpacing:'0.14em' }}>TOTAL · 6 LINE ITEMS</td>
                <td style={{ padding:'14px 16px', color:'var(--accent)' }}>—</td>
                <td style={{ padding:'14px 16px', color:'var(--accent)' }}>129 977 kg</td>
                <td colSpan="2" style={{ padding:'14px 16px', color:'var(--accent)', textAlign:'right' }}>LEAD · 8 wk</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function Param({ label, v, choices, active }) {
  return (
    <div style={{ padding:'10px 0', borderBottom:'1px solid var(--line)' }}>
      <div style={{ display:'flex', justifyContent:'space-between', marginBottom: 6 }}>
        <span className="mono" style={{ fontSize: 10, color:'var(--muted)', letterSpacing:'0.14em', textTransform:'uppercase' }}>{label}</span>
        <span className="mono" style={{ fontSize: 11, color:'var(--text)' }}>{v}</span>
      </div>
      {choices && (
        <div style={{ display:'flex', gap: 4 }}>
          {choices.map(c => (
            <span key={c} className="mono" style={{
              padding:'3px 8px', fontSize: 9, letterSpacing:'0.1em',
              border:'1px solid '+(active===c?'rgba(249,115,22,0.4)':'var(--line-2)'),
              background: active===c ? 'rgba(249,115,22,0.1)' : 'transparent',
              color: active===c ? 'var(--accent)' : 'var(--muted)'
            }}>{c}</span>
          ))}
        </div>
      )}
    </div>
  );
}

function Mini({ label, v }) {
  return (
    <div style={{ display:'flex', justifyContent:'space-between', padding:'4px 0', borderBottom:'1px solid var(--line)' }}>
      <span className="mono" style={{ color:'var(--muted)' }}>{label}</span>
      <span className="mono" style={{ color:'var(--text)' }}>{v}</span>
    </div>
  );
}

Object.assign(window, { EstimatorArtboard });
