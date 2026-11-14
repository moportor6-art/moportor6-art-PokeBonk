/* Subversión propia: legibilidad y choques visuales (auditoría de la 0.69). Solo cambia cómo se ven las cosas.
   - Textos claros sobre fondos claros: Bonkoins, botón «Te faltan…» de la Tienda, etiquetas de tipo y de dificultad.
   - Cosas que se salían o se partían: botón «Editar» de Builds, nombres de ataque («Lanzallama/s»), número de la Pokédex
     encima del retrato, pantalla de elegir compañero y panel «Preparar partida» en pantallas bajas.
   - Tooltips más altos que la pantalla: se encogen lo justo para verse enteros.
   - Partida: si el minimapa choca con los botones de la derecha (Incienso, Ultimate...), se aparta o se encoge un poco.
     Si el jugador movió esas piezas con el editor del HUD, se respeta su posición. Durante la partida solo se aparta más,
     nunca vuelve atrás (antes saltaba cada vez que un botón aparecía o desaparecía).
   - Márgenes de la cámara del móvil (0.81): el mismo a los dos lados. Al girar el móvil 180° la cámara cambia de lado y
     antes todo el HUD (botones Mega/Dynamax, minimapa…) se desplazaba de lado, también lo colocado con el editor. */
(() => {
  const st = document.createElement('style');
  st.textContent = `html:root{--sl:max(env(safe-area-inset-left,0px),env(safe-area-inset-right,0px));--sr:max(env(safe-area-inset-left,0px),env(safe-area-inset-right,0px))}
.currency.bonk{color:#5b3a00!important;text-shadow:none!important}
.chip[style*="background"],.jay-companion-type,.mp-tag,.tk-lv,.mv-badge,.bd-go,.ls-plate .chip{text-shadow:0 1px 1px rgba(0,0,0,.45),0 0 2px rgba(0,0,0,.3)}
.ic-buy.poor,.ic-buy.poor *{color:#4a4366!important;text-shadow:none!important}
.bd-foot{flex-wrap:wrap;row-gap:6px}.bd-foot .bd-go{margin-left:auto}
.ls-move-top{flex-wrap:wrap}.ls-move-top b{overflow-wrap:break-word!important;flex:1 1 auto}
.dx-tile small{background:rgba(255,255,255,.85);border-radius:6px;padding:0 4px;color:var(--ink)!important}
.rg-realm.locked b,.rg-realm.locked small,.rg-item.locked b{color:#6b6589!important}
@media (max-height:520px){
.screen.sp{gap:8px!important;padding:10px 24px!important;justify-content:flex-start!important;overflow-y:auto}
.sp-head h1{font-size:30px!important;margin:2px 0 4px!important}
.sp-head p{font-size:13px!important}
.sp-show{height:min(52vh,calc(100vh - 200px))!important;min-height:150px!important}
.sp-show .ls-plate{padding:4px 14px 6px 10px!important;bottom:8px!important;left:8px!important;gap:3px!important}
.sp-show .ls-plate h1{font-size:18px!important}.sp-show .ls-plate small{font-size:10px!important}
}
@media (max-height:430px){
.rg-side-head{padding:5px 12px!important;align-items:center!important}
.rg-side-head b{font-size:17px!important;white-space:nowrap}
.rg-name h1{font-size:28px!important}
}`;
  document.head.append(st);

  // Tooltips: si no caben de alto, se encogen (sin moverse de su sitio) y se suben lo necesario.
  const tooltip = () => {
    const t = document.querySelector('.tt');
    if (t) {
      t.style.scale = ''; t.style.translate = '';
      const r = t.getBoundingClientRect(), H = innerHeight - 8;
      if (r.height && (r.height > H || r.bottom > innerHeight - 4 || r.top < 4)) {
        const s = Math.min(1, H / r.height), alto = r.height * s, top = Math.min(Math.max(r.top, 4), innerHeight - 4 - alto);
        t.style.transformOrigin = 'top left';
        t.style.scale = String(s);
        t.style.translate = `0 ${top - r.top}px`;
      }
    }
    requestAnimationFrame(tooltip);
  };
  requestAnimationFrame(tooltip);

  // Minimapa contra los botones táctiles de la derecha.
  const fijo = { run: null, clave: '', need: 0 };
  const minimapa = () => {
    const tr = document.querySelector('#hud .hud-tr, .hud-tr');
    if (!tr || !tr.offsetParent || document.body.classList.contains('pb-hud-editing')) return;
    const L = window.PB_HUD?.layout ?? {};
    tr.style.translate = ''; tr.style.scale = '';
    if (L['.hud-tr']) return;
    const r = tr.getBoundingClientRect();
    let need = 0;
    for (const b of document.querySelectorAll('.tc .tc-btn')) {
      if (!b.offsetParent) continue;
      const k = [...b.classList].find(c => c.startsWith('tc-') && c !== 'tc-btn' && c !== 'tc-sm');
      if (k && L['.' + k]) continue;
      const q = b.getBoundingClientRect();
      if (q.left < r.right && q.right > r.left && q.top < r.bottom && q.bottom > r.top && q.left > r.left + r.width / 2) need = Math.max(need, r.right - q.left + 4);
    }
    // Misma partida y misma pantalla: no vuelve atrás (que no salte al aparecer o desaparecer un botón).
    const clave = innerWidth + 'x' + innerHeight;
    if (fijo.run === window.__pbRun && fijo.clave === clave) need = Math.max(need, fijo.need); else { fijo.run = window.__pbRun; fijo.clave = clave; }
    fijo.need = need;
    if (!need) return;
    const top = document.querySelector('.hud-top')?.getBoundingClientRect();
    const libre = Math.max(0, top && top.bottom > r.top ? r.left - top.right - 6 : r.left - 8);
    const mover = Math.min(need, libre), falta = need - mover;
    if (mover) tr.style.translate = `${-mover}px 0`;
    if (falta > 0) { tr.style.transformOrigin = 'top left'; tr.style.scale = String(Math.max(0.6, (r.width - falta) / r.width)); }
  };
  setInterval(() => { try { minimapa(); } catch {} }, 400);

  // Avisos que se pisan (0.82):
  // - la racha (×N) y los botones MEGA/DYNAMAX contra la lista de aliados de la izquierda: se apartan a su derecha;
  // - el cartel de las fiebres (fiebres.js, «+749 ₽ ×1,9 · 4 s») va debajo de la barra del jefe y empuja los avisos
  //   (toasts) por debajo de él.
  const vis = e => {
    if (!e) return null;
    const r = e.getBoundingClientRect(), c = getComputedStyle(e);
    return r.width && r.height && c.visibility !== 'hidden' && c.display !== 'none' && +c.opacity > 0.05 ? r : null;
  };
  const choca = (a, b) => a && b && a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
  const fijoMx = { run: null, dx: 0 };
  const apilar = () => {
    const tarjetas = [...document.querySelectorAll('#hud .hud-party > *')].map(vis).filter(Boolean);
    const derecha = (el, otros, fijo) => {
      // Mueve el elemento a la derecha de lo que pise (tarjetas de aliados, botones MEGA/DYNAMAX). Con «fijo», en la
      // misma partida no vuelve atrás (que los botones no bailen cada vez que entra o sale un aliado).
      el.style.translate = '';
      let a = vis(el), dx = 0;
      for (let k = 0; a && k < 4; k++) {
        const b = otros.filter(t => choca({ left: a.left + dx, right: a.right + dx, top: a.top, bottom: a.bottom }, t));
        if (!b.length) break;
        dx = Math.ceil(Math.max(...b.map(t => t.right)) - a.left + 10);
      }
      if (fijo) { if (fijo.run !== window.__pbRun) { fijo.run = window.__pbRun; fijo.dx = 0; } dx = fijo.dx = Math.max(dx, fijo.dx); }
      if (dx) el.style.translate = `${dx}px 0`;
    };
    // MEGA/DYNAMAX (si no los colocó el jugador con el editor del HUD) contra las tarjetas de aliados.
    const mx = document.querySelector('.pb-mx'), L = window.PB_HUD?.layout ?? {};
    if (mx && !L['.pb-mx .mg'] && !L['.pb-mx .dx']) derecha(mx, tarjetas, fijoMx); else if (mx) mx.style.translate = '';
    const st = document.querySelector('#hud .streak');
    if (st) derecha(st, [...tarjetas, ...[...document.querySelectorAll('.pb-mx button')].map(vis).filter(Boolean)]);
    const fi = document.querySelector('.pb-fiebre'), to = document.querySelector('#hud .toasts');
    if (to) to.style.translate = '';
    if (fi) {
      fi.style.translate = '';
      const f = [...fi.children].map(vis).filter(Boolean);
      if (f.length) {
        const top = Math.min(...f.map(r => r.top)), izq = Math.min(...f.map(r => r.left)), der = Math.max(...f.map(r => r.right));
        let bajo = 0;
        for (const e of document.querySelectorAll('#hud .bossbar, #hud .minibars, #hud .djh, #hud .hud-top')) {
          const r = vis(e);
          if (r && r.left < der && r.right > izq && r.top < top + 40) bajo = Math.max(bajo, r.bottom);
        }
        const dy = bajo + 6 > top ? Math.ceil(bajo + 6 - top) : 0;
        if (dy) fi.style.translate = `0 ${dy}px`;
        const fin = Math.max(...f.map(r => r.bottom)) + dy, t = vis(to);
        if (t && t.left < der && t.right > izq && t.top < fin + 6) to.style.translate = `0 ${Math.ceil(fin + 6 - t.top)}px`;
      }
    }
  };
  setInterval(() => { try { apilar(); } catch {} }, 250);
})();
