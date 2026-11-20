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
  // 1.57: el modo vertical se retira a petición (no era jugable): siempre horizontal, sin la fila de Ajustes ni el
  // reordenado vertical. El resto del archivo se conserva por si se recupera.
  try { localStorage.setItem(KEY, 'landscape'); } catch {}
  native('landscape');
  document.documentElement.classList.remove('pb-portrait');
  if (true) return;

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
${P} .jay-home .jay-actions{position:absolute!important;left:calc(12 * var(--u))!important;top:calc(150 * var(--u))!important;width:calc(388 * var(--u))!important;height:calc(370 * var(--u))!important;grid-template-rows:calc(104 * var(--u)) calc(90 * var(--u))!important;grid-auto-rows:calc(48 * var(--u))!important;gap:calc(8 * var(--u))!important}
/* Eventos y Encargos: uno por fila a todo el ancho, para que el nombre y la cuenta atrás quepan en una línea. */
${P} .jay-home .jay-actions .event,${P} .jay-home .jay-actions .tasks{grid-column:1/-1!important;grid-row:auto!important}
${P} .jay-home .jay-actions .event{padding:calc(4 * var(--u)) calc(26 * var(--u)) calc(4 * var(--u)) calc(8 * var(--u))!important}
${P} .jay-home .jay-actions .event .mm-tx{flex-direction:row-reverse!important;align-items:center;justify-content:space-between;gap:calc(8 * var(--u));width:100%;padding-right:calc(10 * var(--u))}
${P} .jay-home .jay-actions .event .mm-tx b{font-size:calc(14.5 * var(--u))!important;line-height:1.08!important;white-space:normal!important;display:-webkit-box!important;-webkit-box-orient:vertical;-webkit-line-clamp:2!important;overflow:hidden;min-width:0;flex:1 1 auto}
${P} .jay-home .jay-actions .event .mm-tx small{font-size:calc(10.5 * var(--u))!important;margin:0!important;flex:none;text-align:right;white-space:normal!important;max-width:calc(120 * var(--u));line-height:1.15}
${P} .jay-home .jay-actions .tasks{padding-right:calc(16 * var(--u))!important}
${P} .jay-home .jay-actions .tasks .mm-tx small{font-size:calc(11 * var(--u))!important;white-space:nowrap;overflow:visible!important;text-overflow:clip!important;flex:none}
${P} .jay-home .jay-companion{position:absolute!important;left:calc(12 * var(--u))!important;right:auto!important;top:calc(530 * var(--u))!important;width:calc(388 * var(--u))!important;height:auto!important;bottom:calc(196 * var(--u))!important}
${P} .jay-sidebar{position:absolute!important;left:calc(12 * var(--u))!important;top:auto!important;bottom:calc(60 * var(--u))!important;width:calc(388 * var(--u))!important;height:auto!important;flex-direction:row!important;flex-wrap:wrap!important;gap:calc(6 * var(--u))!important;padding:calc(8 * var(--u))!important}
${P} .jay-sidebar .mm-item{width:calc((100% - 24 * var(--u)) / 5)!important;height:calc(50 * var(--u))!important;min-height:0!important;padding:calc(3 * var(--u)) calc(2 * var(--u))!important;gap:calc(2 * var(--u))!important;flex-direction:column!important;justify-content:center!important;align-items:center!important}
${P} .jay-sidebar .mm-item .mm-tx{min-width:0!important;max-width:100%!important;text-align:center!important}
${P} .jay-sidebar .mm-item .mm-tx b{font-size:calc(9.5 * var(--u))!important;white-space:nowrap!important;overflow:visible!important;text-overflow:clip!important;letter-spacing:-.02em}
${P} .jay-sidebar .mm-item .mm-tx small{display:none!important}
${P} .jay-sidebar .jay-home-button,${P} .jay-sidebar .jay-watermark{display:none!important}
${P} .jay-home .mm-foot{position:absolute!important;left:0!important;right:0!important;bottom:calc(4 * var(--u))!important;display:flex;justify-content:center}

/* Partida en vertical. En horizontal todo cabe en una línea; en vertical no, así que se reparte:
   - Arriba, una barra propia con fondo oscuro: zona y reloj de la partida a la izquierda, la cuenta atrás grande
     en el centro, el dinero y los precios a la derecha (dos líneas por lado en vez de seis cosas en una fila).
     Deja libre la esquina de la pausa.
   - Debajo, el retrato a la izquierda y el minimapa a la derecha, a la misma altura.
   - MEGA/DMAX debajo del botón de apuntado y las barras de jefe a lo ancho.
   - Ataques a la izquierda por encima del joystick.
   Los tamaños van con zoom (por eso top/right se dividen entre el zoom) para que el Editor del HUD (translate y scale) siga funcionando encima. */
${P} #hud .hud-top{top:calc(8px + env(safe-area-inset-top))!important;left:calc(8px + env(safe-area-inset-left))!important;right:calc(66px + env(safe-area-inset-right))!important;margin:0!important;width:auto!important;max-width:none!important;transform:none!important;
  display:grid!important;grid-template-columns:auto minmax(0,1fr) auto!important;grid-template-areas:"z t g" "c t p";align-items:center!important;gap:1px 10px!important;
  padding:5px 12px!important;border-radius:16px!important;background:rgba(22,14,44,.62)!important;box-shadow:0 2px 0 rgba(0,0,0,.25),inset 0 0 0 1.5px rgba(255,255,255,.14)!important;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}
${P} #hud .hud-top:before{display:none!important}
${P} #hud .hud-top .ht-c,${P} #hud .hud-top .wallet{display:contents!important}
${P} #hud .hud-top .ht-l{grid-area:z;justify-self:start;min-width:0}
${P} #hud .hud-top .ht-r{grid-area:c;justify-self:start}
${P} #hud .hud-top .timer{grid-area:t;justify-self:center;font-size:34px!important;line-height:1!important;letter-spacing:1.5px!important}
${P} #hud .hud-top .wl-gold{grid-area:g;justify-self:end}
${P} #hud .hud-top .wl-prices{grid-area:p;justify-self:end;gap:6px!important}
${P} #hud .hud-top .ht-zone{font-size:13px!important;letter-spacing:.3px}
${P} #hud .hud-top .runclock b{font-size:13px!important;opacity:.8}
${P} #hud .hud-top .wl-gold b{font-size:18px!important}
${P} #hud .hud-top .wl-chip{font-size:13px!important}
${P} #hud .hud-top .wallet img,${P} #hud .hud-top .wl-chip img{width:16px!important;height:16px!important}
${P} #hud .hud-tl{top:calc((62px + env(safe-area-inset-top)) / .86)!important;left:calc((8px + env(safe-area-inset-left)) / .86)!important;transform-origin:top left;zoom:.86}
@media (max-width:380px){${P} #hud .hud-tl{zoom:.76;top:calc((62px + env(safe-area-inset-top)) / .76)!important;left:calc((8px + env(safe-area-inset-left)) / .76)!important}}
${P} #hud .hud-tr{top:calc((64px + env(safe-area-inset-top)) / .62)!important;right:calc((66px + env(safe-area-inset-right)) / .62)!important;transform-origin:top right;zoom:.62}
${P} #hud .hud-tr{flex-direction:row-reverse!important;align-items:flex-end!important}
${P} #hud .hud-tr .counters{zoom:1.4}
${P} .tc .tc-pause{top:calc(8px + env(safe-area-inset-top))!important}
${P} .tc .tc-aim{top:calc(64px + env(safe-area-inset-top))!important}
${P} .pb-mx{left:auto!important;right:max(8px,env(safe-area-inset-right))!important;top:calc(136px + env(safe-area-inset-top))!important;flex-direction:column!important;gap:8px!important}
${P} .pb-mx button{width:52px!important;height:52px!important}
${P} #hud .bossbar{top:calc(146px + env(safe-area-inset-top))!important;left:calc(10px + env(safe-area-inset-left))!important;width:calc(100vw - 86px)!important;transform:none!important;transform-origin:top left}
${P} #hud .minibars{top:calc(146px + env(safe-area-inset-top))!important;left:calc(10px + env(safe-area-inset-left))!important;width:calc(100vw - 86px)!important;transform:none!important}
${P} #hud .minibars.below{top:calc(222px + env(safe-area-inset-top))!important}
${P} .run-hint{top:calc(240px + env(safe-area-inset-top))!important}
${P} #hud .hud-bl{left:calc(8px + env(safe-area-inset-left))!important;right:auto!important;bottom:calc(180px + env(safe-area-inset-bottom))!important;margin:0!important;transform:none!important;transform-origin:bottom left;scale:.85}

/* Subir de nivel: las cartas en filas a todo el ancho (icono a la izquierda, texto a la derecha) en vez de
   tres columnas estrechas donde el texto no cabe. */
${P} .modal .cards{flex-direction:column!important;flex-wrap:nowrap!important;align-items:stretch!important;width:min(420px,calc(100vw - 20px))!important;max-width:none!important;gap:8px!important;overflow:visible!important}
${P} .modal .cards>.card.offer{width:auto!important;min-width:0!important;flex:none!important;min-height:0!important;flex-direction:row!important;border-radius:16px!important}
${P} .card.offer .top{width:92px!important;height:auto!important;min-height:86px;flex:none!important}
${P} .card.offer .top img{margin-top:0!important}
${P} .card.offer .rar{left:50%!important;translate:-50% 0;top:6px!important;padding:1px 7px!important;font-size:10px!important;white-space:nowrap;max-width:84px;overflow:hidden;text-overflow:ellipsis}
${P} .card.offer .kind{top:auto!important;bottom:6px!important;right:auto!important;left:50%!important;translate:-50% 0;padding:1px 7px!important;font-size:10px!important;white-space:nowrap}
${P} .card.offer .bd{min-width:0!important;padding:8px 12px!important;gap:3px!important}
${P} .card.offer .bd h3{margin:0;font-size:17px}
${P} .card.offer .bd p{margin:0;font-size:12.5px;line-height:1.25}
.card.offer .row .chip{white-space:nowrap;flex:none}

/* La Liga (elegir Pokémon): arriba el elegido en pequeño, debajo la lista para elegir, y luego sus datos.
   El botón «¡Te elijo a ti!» queda fijo abajo para no tener que bajar hasta el final. */
${P} .screen.ls .scr-head{position:relative}
${P} .screen.ls .scr-head .gl-btn{position:absolute!important;right:0;top:0}
${P} .screen.ls .scr-head .grow{display:none}
${P} .ls-main{display:grid!important;grid-template-columns:128px minmax(0,1fr)!important;grid-template-rows:none!important;grid-auto-rows:auto!important;gap:10px!important;padding-bottom:calc(150px + env(safe-area-inset-bottom))!important;position:relative}
${P} .ls-main>.ls-hero,${P} .ls-main .ls-top{display:contents!important}
${P} .ls-main .ls-show{order:1;grid-column:1;min-height:0!important;width:128px!important;height:128px!important;align-self:start}
${P} .ls-main .ls-show .ls-stage{height:100%!important}
${P} .ls-main .ls-id{order:1;grid-column:2;background:var(--w97);border-radius:var(--radius);box-shadow:var(--shadow);padding:10px 12px;gap:5px!important;align-self:stretch}
${P} .ls-main .ls-id h1{font-size:26px!important}
${P} .ls-main .ls-evo{display:none!important}
${P} .ls-main .ls-roster{order:2;grid-column:1/-1;max-height:min(62vh,560px);padding:10px!important}
${P} .ls-main .ls-grid{overflow-y:auto!important;grid-template-columns:repeat(auto-fill,minmax(68px,1fr))!important}
${P} .ls-main .ls-top-stats{order:3;grid-column:1/-1;grid-template-columns:minmax(0,1fr)!important;gap:10px!important;background:var(--w97);border-radius:var(--radius);box-shadow:var(--shadow);padding:12px}
${P} .ls-main .ls-body{order:4;grid-column:1/-1;grid-template-columns:minmax(0,1fr)!important;border-radius:var(--radius);box-shadow:var(--shadow);padding:10px!important}
${P} .ls-main .ls-flash{display:none}
${P} .ls-main .ls-stamp{position:fixed!important;left:50%!important;top:40%!important;translate:-50% 0}
${P} .ls-main .ls-cta{position:fixed!important;z-index:20;left:10px;right:10px;bottom:calc(10px + env(safe-area-inset-bottom));flex-wrap:wrap!important;gap:6px!important;padding:8px!important;border:none!important;border-radius:20px;box-shadow:0 6px 24px #0006,var(--shadow)}
${P} .ls-main .ls-cta>:is(.ls-rec,.ls-cta-tx){flex:1 1 100%!important;min-width:0;font-size:11px!important;line-height:1.2;white-space:nowrap!important;overflow:hidden;text-overflow:ellipsis;display:block!important;margin:0 4px}
${P} .ls-main .ls-cta>:is(.ls-rec,.ls-cta-tx) *{white-space:nowrap!important;display:inline!important}
${P} .ls-main .ls-cta .mp-open{padding:8px 10px!important;font-size:13px!important}
@media (max-width:400px){${P} .ls-main .ls-cta .mp-open{font-size:0!important;padding:10px 12px!important;gap:0!important}}
${P} .ls-main .ls-cta .ls-go{flex:1 1 auto!important;width:auto!important;min-width:0;padding:10px 12px!important;font-size:18px!important}

/* Elige mapa: nombre y descripción a todo el ancho, guardianes de dos en dos y «¡Empezar!» fijo abajo. */
${P} .rg-main{display:flex!important;flex-direction:column!important;gap:12px!important;padding-bottom:calc(100px + env(safe-area-inset-bottom))}
${P} .rg-main>*{min-width:0!important;width:auto!important}
${P} .rg-headrow{flex-direction:column-reverse!important;align-items:stretch!important;gap:10px!important}
${P} .rg-name h1{font-size:34px!important}
${P} .rg-about{max-width:none!important}
${P} .rg-window .rg-partner{align-self:flex-end}
${P} .rg-window .rg-boss{align-self:stretch!important}
${P} .rg-route{display:grid!important;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:6px!important}
${P} .rg-route .rg-chev{display:none!important}
${P} .rg-route .rg-stop{min-width:0}
${P} .rg-side,${P} .rg-side-body{overflow:visible!important;animation:none!important;transform:none!important}
${P} .rg-side .rg-go{position:fixed!important;z-index:20;left:10px;right:10px;bottom:calc(10px + env(safe-area-inset-bottom));padding:0!important;border:none!important}
${P} .rg-side .rg-go .btn{box-shadow:0 6px 24px #0006}

/* Pestañas que se salían por la derecha: Ajustes en dos filas y la pausa repartida a partes iguales. */
${P} .st-tabs{flex-wrap:wrap!important;overflow:visible!important;gap:6px!important}
${P} .st-tabs .st-tab{flex:1 1 calc(50% - 6px)!important;min-width:0!important;padding:4px 8px!important;height:auto!important}
${P} .st-tabs .st-ic{width:34px!important;height:34px!important}
${P} .pz-tabs{gap:4px!important;overflow:visible!important}
${P} .pz-tabs .pz-tab{flex:1 1 0!important;min-width:0!important;padding:6px 6px!important;justify-content:center}
${P} .pz-tabs .pz-tab{gap:4px!important}
${P} .pz-tabs .pz-tab span{font-size:13px;letter-spacing:-.01em;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}

/* Encargos: el nombre del encargo entero, sin «Poder d…». */
${P} .tk-card{gap:10px!important;margin:0 4px!important}
${P} .tk-ball{width:44px!important;height:44px!important}
${P} .tk-title{flex-wrap:wrap!important;gap:2px 6px!important}
${P} .tk-title>*{white-space:normal!important;overflow:visible!important;text-overflow:clip!important;min-width:0}

/* Mutación del día: la medalla ya no tapa la primera letra del título. */
${P} .mu-poster{grid-template-columns:96px minmax(0,1fr)!important}
${P} .mu-medal{scale:.85;transform-origin:top left}
${P} .mu-name{font-size:30px!important}

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
