// FERROUS — Admin "Mission Control" dashboard
// Width: 1440. Industrial mission control.

function MissionHeader() {
  return (
    <header style={{
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'14px 28px',
      borderBottom:'1px solid var(--line)',
      background:'linear-gradient(180deg, #131517, #0E0F11)'
    }}>
      <div style={{ display:'flex', alignItems:'center', gap: 28 }}>
        <FerrousLogo size={20} />
        <span style={{ width:1, height: 18, background:'var(--line-2)' }} />
        <div className="mono" style={{ fontSize: 11, letterSpacing:'0.16em', color:'var(--text-dim)' }}>
          MISSION CONTROL
        </div>
        <span className="tag on">● 34 ACTIVE PROJECTS</span>
      </div>
      <div style={{ display:'flex', alignItems:'center', gap: 18 }}>
        <ClockBlock label="LIÈGE" t="14:24:08" tz="CET" />
        <ClockBlock label="MILL" t="ONLINE" tz="24/7" />
        <ClockBlock label="SHIFT" t="2 / 3" tz="14:00–22:00" />
        <span style={{ width:1, height: 28, background:'var(--line-2)' }} />
        <button style={{ padding: 9, border:'1px solid var(--line-2)', position:'relative', color:'var(--text-dim)' }}>
          <Icon name="bell" size={14} />
          <span style={{ position:'absolute', top:-3, right:-3, minWidth: 16, height: 16, padding:'0 4px',
            background:'var(--accent)', color:'#120A04', fontSize: 9, fontWeight: 700,
            display:'flex', alignItems:'center', justifyContent:'center' }}>12</span>
        </button>
        <div style={{ display:'flex', alignItems:'center', gap: 10, padding:'6px 10px', border:'1px solid var(--line-2)' }}>
          <div style={{ width: 24, height: 24, background:'linear-gradient(135deg, #2A2F35, #1A1C1E)',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontFamily:'var(--mono)', fontSize: 10 }}>JB</div>
          <div className="mono" style={{ fontSize: 10, color:'var(--text-dim)' }}>
            J. BERG <span style={{ color:'var(--muted)' }}>· ADMIN</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function ClockBlock({ label, t, tz }) {
  return (
    <div>
      <div className="mono" style={{ fontSize: 9, color:'var(--muted)', letterSpacing:'0.16em' }}>{label}</div>
      <div className="mono tnum" style={{ fontSize: 13, color:'var(--text)' }}>{t} <span style={{ color:'var(--muted)' }}>{tz}</span></div>
    </div>
  );
}

function MissionNav() {
  const items = ['Overview','Projects','Quotes','CMS','Suppliers','Personnel','Mill','Reports','Audit'];
  return (
    <nav style={{ display:'flex', borderBottom:'1px solid var(--line)', background:'var(--bg-1)' }}>
      {items.map((it, i) => (
        <button key={it} style={{
          padding:'14px 22px', fontFamily:'var(--display)', fontSize: 13, fontWeight: 500,
          color: i===0 ? 'var(--text)' : 'var(--muted)',
          borderBottom: i===0 ? '2px solid var(--accent)' : '2px solid transparent',
          borderRight: '1px solid var(--line)'
        }}>{it}</button>
      ))}
      <div style={{ marginLeft:'auto', display:'flex', alignItems:'center', gap: 14, padding:'0 22px' }}>
        <span className="mono" style={{ fontSize: 10, color:'var(--muted)', letterSpacing:'0.14em' }}>Q3 · 2026  ⌄</span>
        <button className="btn btn-ghost" style={{ height: 28, padding:'0 12px', fontSize: 11 }}>Export</button>
      </div>
    </nav>
  );
}

function MissionGrid() {
  return (
    <div style={{ padding: 20, display:'grid', gridTemplateColumns:'1.4fr 2fr 1fr', gap: 12, gridAutoRows:'min-content' }}>
      {/* Col 1 */}
      <div style={{ display:'flex', flexDirection:'column', gap: 12 }}>
        <KpiTile big label="Tonnage MTD" v="8 412" unit="t" delta="+12% vs plan" trend="up" />
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 12 }}>
          <KpiTile label="Revenue" v="€ 24.8M" delta="+8%" trend="up" />
          <KpiTile label="Backlog" v="€ 318M" delta="14 mo" />
          <KpiTile label="Margin" v="22.4%" delta="+1.2pt" trend="up" />
          <KpiTile label="On-time" v="98.1%" delta="—" />
        </div>

        {/* Mill bays */}
        <div className="surface" style={{ padding: 18 }}>
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom: 14 }}>
            <span className="mono" style={{ fontSize: 10, color:'var(--muted)', letterSpacing:'0.16em' }}>● MILL · 5 BAYS</span>
            <span className="mono" style={{ fontSize: 10, color:'var(--text-dim)' }}>UTILISATION 84%</span>
          </div>
          {[
            ['BAY 01 · Welding','HEAVY · TR-12','94%','var(--accent)'],
            ['BAY 02 · Cutting','PLASMA · PL-04','78%','var(--accent)'],
            ['BAY 03 · Drilling','CNC · DR-02','62%','var(--accent)'],
            ['BAY 04 · Welding','ROBO · TM-2500','92%','var(--accent)'],
            ['BAY 05 · Coating','HDG · L1','0%','var(--dim)'],
          ].map((b,i)=>(
            <div key={i} style={{ display:'grid', gridTemplateColumns:'160px 120px 1fr 50px', gap: 10, alignItems:'center', padding:'8px 0', borderBottom: i<4?'1px solid var(--line)':'none' }}>
              <span style={{ fontSize: 12 }}>{b[0]}</span>
              <span className="mono" style={{ fontSize: 10, color:'var(--muted)' }}>{b[1]}</span>
              <div className="bar"><i style={{ width: b[2], background: b[3] }} /></div>
              <span className="mono" style={{ fontSize: 10, color: b[2]==='0%'?'var(--muted)':'var(--accent)', textAlign:'right' }}>{b[2]}</span>
            </div>
          ))}
        </div>

        {/* Quote moderation */}
        <div className="surface" style={{ padding: 18 }}>
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom: 12 }}>
            <span className="mono" style={{ fontSize: 10, color:'var(--muted)', letterSpacing:'0.16em' }}>● QUOTE MODERATION QUEUE</span>
            <span className="tag warn">7 PENDING</span>
          </div>
          {[
            ['Q-2026-714','Drewer Bau','€ 8.4M','REVIEW','warn'],
            ['Q-2026-712','Port of Antwerp','€ 14.2M','AI FLAG · MARGIN','danger'],
            ['Q-2026-708','Foster + P.','€ 6.8M','PENDING SIG','warn'],
          ].map((r,i)=>(
            <div key={i} style={{ display:'flex', alignItems:'center', gap: 10, padding:'10px 0', borderTop: i>0?'1px solid var(--line)':'none' }}>
              <div style={{ flex: 1 }}>
                <div className="mono" style={{ fontSize: 11, color:'var(--accent)' }}>{r[0]}</div>
                <div style={{ fontSize: 12, color:'var(--text-dim)' }}>{r[1]} · {r[2]}</div>
              </div>
              <span className={`tag ${r[4]==='danger'?'':r[4]}`} style={r[4]==='danger'?{
                color:'var(--danger)', borderColor:'rgba(239,68,68,0.4)', background:'rgba(239,68,68,0.06)'
              }:{}}>{r[3]}</span>
              <button className="mono" style={{ fontSize: 10, color:'var(--accent)', padding:'4px 8px', border:'1px solid var(--line-2)' }}>OPEN</button>
            </div>
          ))}
        </div>
      </div>

      {/* Col 2: MAP + chart */}
      <div style={{ display:'flex', flexDirection:'column', gap: 12 }}>
        {/* World map */}
        <div className="surface" style={{ padding: 22, position:'relative', overflow:'hidden' }}>
          <div className="corner tl" /><div className="corner tr" /><div className="corner br" /><div className="corner bl" />
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom: 18 }}>
            <div>
              <span className="mono" style={{ fontSize: 10, color:'var(--muted)', letterSpacing:'0.16em' }}>● GLOBAL OPERATIONS</span>
              <h3 style={{ fontFamily:'var(--display)', fontSize: 18, fontWeight: 600, marginTop: 4 }}>34 active sites · 27 countries</h3>
            </div>
            <div style={{ display:'flex', gap: 6 }}>
              {['ACTIVE','FAB','SHIP','RISK'].map((k,i)=>(
                <span key={k} className="mono" style={{
                  padding:'3px 8px', fontSize: 9, letterSpacing:'0.14em',
                  border:'1px solid var(--line-2)',
                  color: ['var(--accent)','var(--warn)','var(--success)','var(--danger)'][i]
                }}>● {k}</span>
              ))}
            </div>
          </div>
          <WorldMap />
          <div style={{ marginTop: 10, display:'flex', justifyContent:'space-between',
            fontFamily:'var(--mono)', fontSize: 10, color:'var(--muted)', letterSpacing:'0.12em' }}>
            <span>FERROUS MILL · LIÈGE, BE</span>
            <span>SUPPLIERS: 142  ·  IN-TRANSIT: 24</span>
          </div>
        </div>

        {/* Revenue / Tonnage chart */}
        <div className="surface" style={{ padding: 22, position:'relative' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom: 18 }}>
            <div>
              <span className="mono" style={{ fontSize: 10, color:'var(--muted)', letterSpacing:'0.16em' }}>● REVENUE / TONNAGE · 12 MO</span>
              <h3 style={{ fontFamily:'var(--display)', fontSize: 18, fontWeight: 600, marginTop: 4 }}>€ 248.6M booked · 32.8K t</h3>
            </div>
            <div style={{ display:'flex', gap: 14, fontFamily:'var(--mono)', fontSize: 10 }}>
              <span style={{ color:'var(--accent)' }}>● REVENUE</span>
              <span style={{ color:'var(--muted)' }}>● TONNAGE</span>
              <span style={{ color:'var(--text-dim)' }}>·  ⌄  MONTH</span>
            </div>
          </div>
          <RevenueChart />
        </div>

        {/* Projects table */}
        <div className="surface" style={{ padding: 22 }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom: 14 }}>
            <h3 style={{ fontFamily:'var(--display)', fontSize: 18, fontWeight: 600 }}>Active projects</h3>
            <span className="mono" style={{ fontSize: 10, color:'var(--muted)' }}>34 RUNNING · SORT: MILESTONE</span>
          </div>
          <table style={{ width:'100%', fontFamily:'var(--mono)', fontSize: 11, borderCollapse:'collapse' }}>
            <thead>
              <tr style={{ color:'var(--muted)' }}>
                {['ID','PROJECT','CLIENT','TONS','PHASE','PROGRESS','RISK','PM'].map(h=>(
                  <th key={h} style={{ textAlign:'left', padding:'8px 8px', fontWeight: 400, letterSpacing:'0.12em' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['P-203','Vertex Tower','Drewer Bau','8 400','Erection','62','low','EW'],
                ['P-318','Helix Stadium','Lyon SAEM','3 120','Trusses','68','low','MR'],
                ['P-612','Solenne Tower','MA Holdings','5 240','Fab.','24','med','SY'],
                ['P-507','Aurora Atrium','Lindqvist Ark.','188','Fab.','41','low','EW'],
                ['P-714','Halberd Hangar v2','Airbus','2 480','Quote','3','high','JB'],
              ].map((r,i)=>(
                <tr key={i} style={{ borderTop:'1px solid var(--line)' }}>
                  <td style={{ padding:'10px 8px', color:'var(--accent)' }}>{r[0]}</td>
                  <td style={{ padding:'10px 8px', color:'var(--text)' }}>{r[1]}</td>
                  <td style={{ padding:'10px 8px', color:'var(--text-dim)' }}>{r[2]}</td>
                  <td style={{ padding:'10px 8px' }}>{r[3]}</td>
                  <td style={{ padding:'10px 8px', color:'var(--text-dim)' }}>{r[4]}</td>
                  <td style={{ padding:'10px 8px', width: 140 }}>
                    <div style={{ display:'flex', alignItems:'center', gap: 8 }}>
                      <div className="bar" style={{ flex: 1 }}><i style={{ width: `${r[5]}%`, background: r[6]==='high'?'var(--danger)':r[6]==='med'?'var(--warn)':'var(--accent)' }} /></div>
                      <span>{r[5]}%</span>
                    </div>
                  </td>
                  <td style={{ padding:'10px 8px' }}>
                    <span style={{
                      width: 8, height: 8, borderRadius:'50%', display:'inline-block', marginRight: 6,
                      background: r[6]==='high'?'var(--danger)':r[6]==='med'?'var(--warn)':'var(--success)'
                    }} />
                    <span style={{ color: r[6]==='high'?'var(--danger)':r[6]==='med'?'var(--warn)':'var(--success)', textTransform:'uppercase' }}>{r[6]}</span>
                  </td>
                  <td style={{ padding:'10px 8px', color:'var(--text-dim)' }}>{r[7]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Col 3: Activity */}
      <div style={{ display:'flex', flexDirection:'column', gap: 12 }}>
        <div className="surface" style={{ padding: 18 }}>
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom: 14 }}>
            <span className="mono" style={{ fontSize: 10, color:'var(--muted)', letterSpacing:'0.16em' }}>● ALERTS</span>
            <span className="mono" style={{ fontSize: 10, color:'var(--accent)' }}>5 NEW</span>
          </div>
          {[
            ['danger','Heat 4421 outside spec','BAY 03 · 8 min ago'],
            ['warn','Convoi held at customs','Lyon · 22 min ago'],
            ['warn','Margin <18% on Q-712','Drewer Bau · 1h'],
            ['success','EXC4 audit passed','Bureau Veritas · 3h'],
          ].map((a,i)=>(
            <div key={i} style={{ display:'flex', gap: 10, padding:'10px 0', borderTop: i>0?'1px solid var(--line)':'none' }}>
              <span style={{
                width: 6, height: 6, borderRadius:'50%', marginTop: 6,
                background: a[0]==='danger'?'var(--danger)':a[0]==='warn'?'var(--warn)':'var(--success)',
                boxShadow:`0 0 8px ${a[0]==='danger'?'var(--danger)':a[0]==='warn'?'var(--warn)':'var(--success)'}`
              }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12 }}>{a[1]}</div>
                <div className="mono" style={{ fontSize: 10, color:'var(--muted)', marginTop: 2 }}>{a[2]}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Activity timeline */}
        <div className="surface" style={{ padding: 18 }}>
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom: 14 }}>
            <span className="mono" style={{ fontSize: 10, color:'var(--muted)', letterSpacing:'0.16em' }}>● ACTIVITY · TODAY</span>
            <span className="mono" style={{ fontSize: 10, color:'var(--text-dim)' }}>248 EVENTS</span>
          </div>
          {[
            ['14:24','Truss TR-12 cleared QC','BAY 04','accent'],
            ['14:08','Convoi cleared customs','LYON','success'],
            ['13:51','Quote Q-712 published','EW','text'],
            ['13:14','Heat 4421 logged','BAY 03','muted'],
            ['12:42','Welder license renewed','M. Ruiz','muted'],
            ['11:30','Drawing rev. C sealed','P-318','accent'],
            ['10:14','Mill shift change · 2/3','—','muted'],
          ].map((a,i)=>(
            <div key={i} style={{ display:'grid', gridTemplateColumns:'40px 1fr', gap: 10, padding:'8px 0', borderTop: i>0?'1px solid var(--line)':'none' }}>
              <span className="mono tnum" style={{ fontSize: 10, color:'var(--muted)' }}>{a[0]}</span>
              <div>
                <div style={{ fontSize: 12, color: a[3]==='accent'?'var(--accent)':a[3]==='success'?'var(--success)':'var(--text)' }}>{a[1]}</div>
                <div className="mono" style={{ fontSize: 9, color:'var(--muted)', marginTop: 1 }}>{a[2]}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CMS quick edit */}
        <div className="surface" style={{ padding: 18 }}>
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom: 14 }}>
            <span className="mono" style={{ fontSize: 10, color:'var(--muted)', letterSpacing:'0.16em' }}>● CMS · DRAFTS</span>
            <span className="mono" style={{ fontSize: 10, color:'var(--accent)' }}>+ NEW</span>
          </div>
          {[
            ['Hero copy — EN','/ landing','12m'],
            ['Service: CNC fab','/ services/cnc','2h'],
            ['News: P-401 win','/ news','1d'],
            ['Career: Welder L3','/ careers','3d'],
          ].map((c,i)=>(
            <div key={i} style={{ display:'flex', alignItems:'center', gap: 10, padding:'8px 0', borderTop: i>0?'1px solid var(--line)':'none' }}>
              <Icon name="doc" size={12} color="var(--muted)" />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{c[0]}</div>
                <div className="mono" style={{ fontSize: 10, color:'var(--muted)' }}>{c[1]}</div>
              </div>
              <span className="mono" style={{ fontSize: 10, color:'var(--muted)' }}>{c[2]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function KpiTile({ big, label, v, unit, delta, trend }) {
  return (
    <div className="surface" style={{
      padding: big ? 24 : 16, position:'relative',
      minHeight: big ? 160 : 90,
      background: big ? 'linear-gradient(180deg, rgba(249,115,22,0.08), var(--bg-1))' : 'linear-gradient(180deg, var(--bg-2), var(--bg-1))',
      borderColor: big ? 'rgba(249,115,22,0.3)' : 'var(--line)'
    }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
        <span className="mono" style={{ fontSize: 10, color:'var(--muted)', letterSpacing:'0.14em', textTransform:'uppercase' }}>{label}</span>
        {trend==='up' && <span className="mono" style={{ fontSize: 10, color:'var(--success)' }}>▲</span>}
      </div>
      <div style={{ display:'flex', alignItems:'baseline', gap: 6, marginTop: big ? 24 : 10 }}>
        <span className="stencil tnum" style={{ fontSize: big ? 64 : 26, color: big ? 'var(--accent)' : 'var(--text)' }}>{v}</span>
        {unit && <span className="mono" style={{ fontSize: 14, color:'var(--muted)' }}>{unit}</span>}
      </div>
      <div className="mono" style={{ fontSize: 10, color:'var(--muted)', marginTop: 6, letterSpacing:'0.1em' }}>{delta}</div>

      {big && (
        <div style={{ marginTop: 18 }}>
          <svg width="100%" height="40" viewBox="0 0 280 40">
            <defs>
              <linearGradient id="kpi-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#F97316" stopOpacity="0.5" />
                <stop offset="1" stopColor="#F97316" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M 0 32 L 30 24 L 60 28 L 90 18 L 120 20 L 150 14 L 180 16 L 210 8 L 240 12 L 280 4 L 280 40 L 0 40 Z" fill="url(#kpi-area)" />
            <path d="M 0 32 L 30 24 L 60 28 L 90 18 L 120 20 L 150 14 L 180 16 L 210 8 L 240 12 L 280 4" stroke="#F97316" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      )}
    </div>
  );
}

function WorldMap() {
  // simple dotted world silhouette using grid dots + project pins
  const pins = [
    {x:48, y:46, c:'accent', name:'LIÈGE · HQ', big: true},
    {x:50, y:43, c:'accent', name:'OSLO'},
    {x:54, y:48, c:'accent', name:'BERLIN'},
    {x:45, y:51, c:'warn', name:'LYON'},
    {x:42, y:48, c:'accent', name:'LONDON'},
    {x:58, y:65, c:'success', name:'RIYADH'},
    {x:42, y:64, c:'success', name:'CASABLANCA'},
    {x:78, y:52, c:'accent', name:'SHANGHAI'},
    {x:88, y:74, c:'warn', name:'SYDNEY'},
    {x:22, y:48, c:'accent', name:'NYC'},
    {x:26, y:62, c:'success', name:'MEX'},
  ];
  return (
    <div style={{ position:'relative', height: 240, background:'#0E0F11', overflow:'hidden' }} className="dotgrid">
      {/* faux continents using soft blobs */}
      <svg viewBox="0 0 100 50" preserveAspectRatio="none" style={{ position:'absolute', inset: 0, width:'100%', height:'100%' }}>
        <g fill="rgba(148,163,184,0.10)" stroke="rgba(148,163,184,0.18)" strokeWidth="0.15">
          {/* very loose blobs as continent silhouettes */}
          <path d="M 18 18 Q 22 12 28 14 L 32 22 L 28 28 L 24 26 Q 16 28 14 22 Z" /> {/* N. America */}
          <path d="M 24 30 Q 28 28 30 32 L 30 42 Q 26 46 24 42 Z" /> {/* S. America */}
          <path d="M 42 16 Q 50 12 56 14 L 60 18 L 56 24 Q 50 22 44 22 Z" /> {/* Europe */}
          <path d="M 46 24 Q 54 24 56 30 L 50 40 Q 44 38 44 30 Z" /> {/* Africa */}
          <path d="M 56 18 Q 70 14 82 20 L 84 28 L 78 32 Q 66 30 58 26 Z" /> {/* Asia */}
          <path d="M 80 36 Q 88 34 90 40 L 86 44 L 80 42 Z" /> {/* Australia */}
        </g>
        {/* pins */}
        {pins.map((p,i)=>{
          const col = p.c==='accent' ? '#F97316' : p.c==='warn' ? '#F59E0B' : p.c==='success' ? '#10B981' : '#94A3B8';
          return (
            <g key={i} transform={`translate(${p.x},${p.y})`}>
              {p.big && <circle r="3" fill="none" stroke={col} strokeWidth="0.3" opacity="0.6">
                <animate attributeName="r" values="3;6;3" dur="2.4s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.6;0;0.6" dur="2.4s" repeatCount="indefinite"/>
              </circle>}
              <circle r={p.big?1.2:0.7} fill={col} />
            </g>
          );
        })}
        {/* connecting lines from HQ to active */}
        {pins.slice(1).map((p,i) => (
          <path key={i} d={`M 48 46 Q ${(48+p.x)/2} ${Math.min(p.y,46)-10} ${p.x} ${p.y}`}
            stroke="rgba(249,115,22,0.25)" strokeWidth="0.18" fill="none" strokeDasharray="0.8 0.8" />
        ))}
      </svg>
    </div>
  );
}

function RevenueChart() {
  const months = ['JUL','AUG','SEP','OCT','NOV','DEC','JAN','FEB','MAR','APR','MAY','JUN'];
  const revenue = [16, 18, 22, 19, 24, 26, 22, 28, 30, 28, 32, 34];
  const tonnage = [12, 14, 16, 18, 20, 22, 20, 24, 28, 25, 28, 30];
  return (
    <div style={{ height: 180 }}>
      <svg viewBox="0 0 720 180" style={{ width:'100%', height:'100%' }}>
        <defs>
          <linearGradient id="rev-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#F97316" stopOpacity="0.35" />
            <stop offset="1" stopColor="#F97316" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g stroke="rgba(255,255,255,0.05)">
          {[0,40,80,120,160].map(y => <line key={y} x1="0" y1={y} x2="720" y2={y} />)}
        </g>
        {/* tonnage bars */}
        {tonnage.map((t,i) => {
          const w = 720/months.length;
          const h = (t/35) * 140;
          return (
            <rect key={i} x={i*w + 12} y={160 - h} width={w-24} height={h} fill="rgba(148,163,184,0.15)" stroke="rgba(148,163,184,0.4)" strokeWidth="0.5" />
          );
        })}
        {/* revenue line */}
        <path d={revenue.map((v,i) => {
          const x = (i + 0.5) * (720/months.length);
          const y = 170 - (v/35) * 150;
          return `${i?'L':'M'} ${x} ${y}`;
        }).join(' ')} stroke="#F97316" strokeWidth="2" fill="none" />
        <path d={revenue.map((v,i) => {
          const x = (i + 0.5) * (720/months.length);
          const y = 170 - (v/35) * 150;
          return `${i?'L':'M'} ${x} ${y}`;
        }).join(' ') + ` L 720 180 L 0 180 Z`} fill="url(#rev-area)" />
        {revenue.map((v,i) => {
          const x = (i + 0.5) * (720/months.length);
          const y = 170 - (v/35) * 150;
          return <circle key={i} cx={x} cy={y} r="3" fill={i===revenue.length-1?'#F97316':'#1A1C1E'} stroke="#F97316" strokeWidth="1.5" />;
        })}
        {/* labels */}
        {months.map((m,i) => (
          <text key={m} x={(i+0.5)*(720/months.length)} y="178" textAnchor="middle" fill="#5E646B" fontFamily="JetBrains Mono" fontSize="9">{m}</text>
        ))}
      </svg>
    </div>
  );
}

function AdminArtboard() {
  return (
    <div className="ferrous" data-screen-label="Admin" style={{ width: 1440, minHeight: 1400, background:'var(--bg-0)' }}>
      <MissionHeader />
      <MissionNav />
      <MissionGrid />
    </div>
  );
}

Object.assign(window, { AdminArtboard });
