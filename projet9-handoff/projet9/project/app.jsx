// FERROUS — Main app: assembles all artboards into a DesignCanvas with Tweaks panel.

const FERR_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#F97316",
  "background": "#0B0C0D",
  "density": "balanced",
  "showBlueprintGrid": true,
  "displayFont": "Space Grotesk",
  "monoFont": "JetBrains Mono"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(FERR_DEFAULTS);

  // Push tweaks to CSS vars
  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--accent', t.accent);
    // derive accent-dim (mix with black) and accent-2 (lighten) crudely
    r.style.setProperty('--accent-2', t.accent);
    r.style.setProperty('--bg-0', t.background);
    r.style.setProperty('--display', `'${t.displayFont}', ui-sans-serif, system-ui, sans-serif`);
    r.style.setProperty('--mono', `'${t.monoFont}', ui-monospace, monospace`);
    // grid visibility
    r.style.setProperty('--grid', t.showBlueprintGrid ? 'rgba(255,255,255,0.035)' : 'rgba(255,255,255,0)');
  }, [t]);

  return (
    <React.Fragment>
      <DesignCanvas>
        <DCSection id="overview" title="FERROUS — Industrial OS"
          subtitle="A futuristic operating system for steel. 6 surfaces · 1 design system · cinematic detail.">
          <DCArtboard id="landing" label="01 · Landing — long-scroll cinematic" width={1440} height={5200}>
            <LandingArtboard />
          </DCArtboard>
          <DCArtboard id="gallery" label="02 · Projects Gallery — bento + filters + modal" width={1440} height={1800}>
            <GalleryArtboard />
          </DCArtboard>
        </DCSection>

        <DCSection id="platform" title="The Platform"
          subtitle="Smart Steel Estimator deep dive. From DWG to sealed quote in 90 seconds.">
          <DCArtboard id="estimator" label="03 · Smart Steel Estimator™" width={1440} height={1480}>
            <EstimatorArtboard />
          </DCArtboard>
        </DCSection>

        <DCSection id="dashboards" title="Dashboards"
          subtitle="Two dark-mode futuristic consoles. Client portal & admin mission control.">
          <DCArtboard id="client" label="04 · Client Portal — live project console" width={1440} height={1100}>
            <ClientPortalArtboard />
          </DCArtboard>
          <DCArtboard id="admin" label="05 · Admin · Mission Control" width={1440} height={1400}>
            <AdminArtboard />
          </DCArtboard>
        </DCSection>

        <DCSection id="responsive" title="Responsive"
          subtitle="Mobile experience. Thumb-friendly. Same fidelity, smaller frame.">
          <DCArtboard id="mobile" label="06 · Mobile — landing · quote · project · portal" width={1440} height={820}>
            <MobileArtboard />
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel>
        <TweakSection label="Visual identity">
          <TweakColor
            value={t.accent} onChange={(v)=>setTweak('accent', v)}
            label="Accent — ember"
            options={['#F97316','#22D3EE','#A855F7','#10B981']}
          />
          <TweakColor
            value={t.background} onChange={(v)=>setTweak('background', v)}
            label="Background base"
            options={['#0B0C0D','#0A0F14','#0F0B08','#13110D']}
          />
        </TweakSection>

        <TweakSection label="Type system">
          <TweakSelect
            value={t.displayFont} onChange={(v)=>setTweak('displayFont', v)}
            label="Display"
            options={['Space Grotesk','Archivo','Manrope','Syne']}
          />
          <TweakSelect
            value={t.monoFont} onChange={(v)=>setTweak('monoFont', v)}
            label="Technical mono"
            options={['JetBrains Mono','IBM Plex Mono','Space Mono']}
          />
        </TweakSection>

        <TweakSection label="Surface">
          <TweakToggle
            value={t.showBlueprintGrid} onChange={(v)=>setTweak('showBlueprintGrid', v)}
            label="Blueprint grid"
          />
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
