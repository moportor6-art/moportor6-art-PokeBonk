/* Subversión propia: modo vertical.
   - Ajustes → Gráficos: «Orientación» Horizontal / Vertical / Automática. En Android se aplica al momento
     (MainActivity.setOrientation) y se recuerda al abrir la app.
   - Cuando la pantalla está en vertical, <html> lleva la clase pb-portrait y se reordenan el menú principal,
     el HUD de la partida y la pausa. El resto de pantallas del juego ya se adapta solo a pantallas estrechas.
   - En vertical no sale el aviso del juego de «gira el móvil». */
(() => {
  const KEY = 'pb-orient';
  const CHOICES = [['landscape', 'Horizontal'], ['portrait', 'Vertical'], ['auto', 'Automática']];
  const read = () => { try { const v = localStorage.getItem(KEY); return CHOICES.some(c => c[0] === v) ? v : 'landscape'; } catch { return 'landscape'; } };
  const native = v => { try { window.AndroidMenu?.setOrientation?.(v); } catch {} };
  native(read());

  const root = document.documentElement;
  const isPortrait = () => innerHeight > innerWidth * 1.05;
  const update = () => {
    const v = isPortrait();
    if (root.classList.contains('pb-portrait') !== v) {
      root.classList.toggle('pb-portrait', v);
      window.dispatchEvent(new Event('pb-orientation'));
    }
  };
  update();
  addEventListener('resize', update);
  addEventListener('orientationchange', () => setTimeout(update, 200));

  // En vertical el aviso «gira el móvil» del juego no hace falta.
  setInterval(() => {
    if (!root.classList.contains('pb-portrait') || read() === 'landscape') return;
    document.querySelector('.rotate-skip')?.click();
  }, 600);

  // ---- fila en Ajustes ----
  const row = () => {
    const r = document.createElement('div');
    r.className = 'st-row segrow wide pb-orient-row';
    const label = document.createElement('span');
    label.append('Orientación');
    const small = document.createElement('small');
    small.textContent = 'Horizontal, vertical o que gire con el móvil';
    label.append(small);
    const seg = document.createElement('div');
    seg.className = 'seg';
    const cur = read();
    for (const [v, name] of CHOICES) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'pill' + (v === cur ? ' on' : '');
      b.setAttribute('aria-pressed', String(v === cur));
      b.textContent = name;
      b.addEventListener('click', () => {
        try { localStorage.setItem(KEY, v); } catch {}
        native(v);
        for (const x of seg.children) { const on = x === b; x.classList.toggle('on', on); x.setAttribute('aria-pressed', String(on)); }
      });
      seg.append(b);
    }
    r.append(label, seg, document.createElement('span'));
    return r;
  };
  setInterval(() => {
    // Pestaña «Gráficos»: la que tiene la fila de enemigos del port. Va la primera.
    const body = document.querySelector('.jay-enemy-row')?.parentElement;
    if (!body || body.querySelector('.pb-orient-row')) return;
    body.prepend(row());
  }, 500);

  // ---- estilos en vertical ----
  const P = 'html.pb-portrait';
  const css = `
/* Menú principal: todo en columna, en unidades de una pantalla de 412 x 880 */
${P} .mm.jay-home{--u:min(calc(100vw / 412),calc(100vh / 880))}
${P} .jay-home>.mm-top{position:absolute!important;--u:min(calc(100vw / 480),calc(100vh / 1000));right:calc(8 * var(--u))!important;top:calc(8 * var(--u))!important;max-width:calc(100vw - 16px)!important}
${P} .jay-home .mm-left{position:absolute!important;left:calc(16 * var(--u))!important;top:calc(58 * var(--u))!important;width:calc(380 * var(--u))!important}
${P} .jay-home .jay-actions{position:absolute!important;left:calc(12 * var(--u))!important;top:calc(150 * var(--u))!important;width:calc(388 * var(--u))!important;height:calc(326 * var(--u))!important}
${P} .jay-home .jay-companion{position:absolute!important;left:calc(12 * var(--u))!important;right:auto!important;top:calc(488 * var(--u))!important;width:calc(388 * var(--u))!important;height:calc(240 * var(--u))!important;bottom:auto!important}
${P} .jay-sidebar{position:absolute!important;left:calc(12 * var(--u))!important;top:calc(740 * var(--u))!important;width:calc(388 * var(--u))!important;height:auto!important;flex-direction:row!important;flex-wrap:wrap!important;gap:calc(6 * var(--u))!important;padding:calc(8 * var(--u))!important}
${P} .jay-sidebar .mm-item{width:calc((100% - 18 * var(--u)) / 4)!important;height:calc(42 * var(--u))!important;min-height:0!important;padding:0 calc(4 * var(--u))!important;gap:calc(3 * var(--u))!important}
${P} .jay-sidebar .mm-item .mm-tx b{font-size:calc(11 * var(--u))!important}
${P} .jay-sidebar .mm-item .mm-tx small{display:none!important}
${P} .jay-sidebar .jay-home-button,${P} .jay-sidebar .jay-watermark{display:none!important}
${P} .jay-home .mm-foot{position:absolute!important;left:0!important;right:0!important;bottom:calc(4 * var(--u))!important;display:flex;justify-content:center}

/* Partida: ataques y vitaminas por encima de los botones táctiles */
${P} #hud .hud-bl{bottom:calc(200px + env(safe-area-inset-bottom))!important}
${P} #hud .hud-tr{transform-origin:top right;scale:.85}
${P} #hud .hud-top{top:calc(172px + env(safe-area-inset-top))!important;left:0!important;right:0!important;margin:0 auto!important;width:max-content!important;max-width:96vw!important;transform:none!important}

/* Pausa: una sola columna */
html.pb-portrait body #ui .sm.pz{grid-template:"hero" auto "tabs" auto "body" minmax(0,1fr) "foot" auto / minmax(0,1fr)!important;gap:6px!important}
html.pb-portrait body #ui .pz>.sm-foot{max-height:none!important}
`;
  const st = document.createElement('style');
  st.id = 'pb-vertical';
  st.textContent = css;
  (document.head || root).append(st);

  window.PB_ORIENT = { read, isPortrait };
})();
