/* Subversión propia: mando para juegos que solo se juegan con ratón o dedo (Pokelike, PokéPath TD, PokéPlunder)
   y para la ventana "Más juegos".
   - Stick izquierdo (o derecho): mueve un cursor por la pantalla. Más inclinado = más rápido.
   - Cruceta: salta al botón más cercano en esa dirección.
   - A: clic (mantenlo para arrastrar). X: clic derecho. B: Escape (atrás / cerrar).
   - LB / RB: rueda (subir / bajar listas). Start: Enter. Select dos veces: Volver a PokéBonk.
   El cursor se esconde al usar el ratón o el dedo y vuelve al tocar el mando. */
(() => {
  if (window.__pbMando) return;
  window.__pbMando = true;
  const solo = window.PB_MANDO_SOLO; // función opcional: el mando solo actúa cuando devuelve true
  // Se apunta qué elementos escuchan clics, para que la cruceta salte entre ellos (hay juegos con su propio cursor
  // y sin botones de verdad). Por eso este archivo se carga antes que el juego.
  const clicables = new WeakSet();
  const addEv = EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener = function (type, fn, o) {
    if (this instanceof Element && /^(click|pointerdown|mousedown|pointerup|mouseup|touchstart|touchend)$/.test(type)) clicables.add(this);
    return addEv.call(this, type, fn, o);
  };
  const DEAD = 0.18;
  let x = innerWidth / 2, y = innerHeight / 2, visible = false, held = false, prev = [], last = 0, selectAt = 0;
  let cur = null;
  const css = `.pb-cursor{position:fixed;left:0;top:0;width:26px;height:26px;margin:-3px 0 0 -3px;z-index:2147483646;pointer-events:none;
display:none;filter:drop-shadow(0 1px 2px rgba(0,0,0,.8))}
.pb-cursor.on{display:block}.pb-cursor svg{width:100%;height:100%}
.pb-cursor.down svg{transform:scale(.85);transform-origin:3px 3px}
.pb-mando-foco{outline:3px solid #ffd84a!important;outline-offset:2px!important}`;
  const make = () => {
    if (cur) return;
    const st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);
    cur = document.createElement('div');
    cur.className = 'pb-cursor';
    cur.innerHTML = '<svg viewBox="0 0 26 26"><path d="M3 3 L3 21 L8 16 L11.5 23.5 L15 22 L11.5 14.5 L18.5 14.5 Z" fill="#fff" stroke="#1a1630" stroke-width="2" stroke-linejoin="round"/></svg>';
    document.body.appendChild(cur);
  };
  const show = (v) => {
    visible = v;
    if (cur) cur.classList.toggle('on', v);
  };
  const place = () => {
    x = Math.max(0, Math.min(innerWidth - 1, x));
    y = Math.max(0, Math.min(innerHeight - 1, y));
    if (cur) cur.style.transform = `translate(${x}px,${y}px)`;
  };
  const target = () => {
    let el = document.elementFromPoint(x, y);
    if (el && el.shadowRoot) el = el.shadowRoot.elementFromPoint(x, y) || el;
    return el || document.body;
  };
  const opts = (extra) => Object.assign({ bubbles: true, cancelable: true, composed: true, view: window, clientX: x, clientY: y, screenX: x, screenY: y }, extra);
  const ptr = (type, el, extra) => {
    try { el.dispatchEvent(new PointerEvent(type, opts(Object.assign({ pointerId: 7, pointerType: 'mouse', isPrimary: true }, extra)))); } catch (e) {}
  };
  const mouse = (type, el, extra) => el.dispatchEvent(new MouseEvent(type, opts(extra)));
  let downEl = null;
  const press = () => {
    downEl = target();
    ptr('pointerdown', downEl, { button: 0, buttons: 1 });
    mouse('mousedown', downEl, { button: 0, buttons: 1 });
    if (downEl.focus && /^(INPUT|TEXTAREA|SELECT)$/.test(downEl.tagName)) downEl.focus();
    if (cur) cur.classList.add('down');
  };
  const release = () => {
    const el = target();
    ptr('pointerup', el, { button: 0, buttons: 0 });
    mouse('mouseup', el, { button: 0, buttons: 0 });
    if (downEl && (el === downEl || downEl.contains(el) || el.contains(downEl))) mouse('click', el, { button: 0, buttons: 0 });
    downEl = null;
    if (cur) cur.classList.remove('down');
  };
  const moveEvt = () => {
    const el = target();
    const b = held ? 1 : 0;
    ptr('pointermove', el, { buttons: b });
    mouse('mousemove', el, { buttons: b });
    mouse('mouseover', el, { buttons: b });
  };
  const key = (k, code) => {
    const t = document.activeElement && document.activeElement !== document.body ? document.activeElement : document;
    for (const type of ['keydown', 'keyup']) {
      const ev = new KeyboardEvent(type, { key: k, code: code || k, bubbles: true, cancelable: true });
      t.dispatchEvent(ev);
      if (t !== document) document.dispatchEvent(new KeyboardEvent(type, { key: k, code: code || k, bubbles: true, cancelable: true }));
    }
  };
  const wheel = (dy) => {
    const el = target();
    el.dispatchEvent(new WheelEvent('wheel', opts({ deltaY: dy, deltaMode: 0 })));
    let s = el;
    while (s && s !== document.body) {
      const cs = getComputedStyle(s);
      if (/(auto|scroll)/.test(cs.overflowY) && s.scrollHeight > s.clientHeight) { s.scrollBy(0, dy); return; }
      s = s.parentElement;
    }
    scrollBy(0, dy);
  };
  // Cruceta: el elemento pulsable más cercano en esa dirección.
  const pulsables = () => {
    const out = [];
    const all = document.body.querySelectorAll('*');
    for (const el of all) {
      if (el === cur || (cur && cur.contains(el))) continue;
      const r = el.getBoundingClientRect();
      if (r.width < 8 || r.height < 8 || r.width > innerWidth * 0.9 || r.bottom < 0 || r.top > innerHeight || r.right < 0 || r.left > innerWidth) continue;
      const tag = el.tagName;
      let ok = /^(BUTTON|A|INPUT|SELECT|TEXTAREA)$/.test(tag) || clicables.has(el) || el.onclick != null || el.getAttribute('role') === 'button';
      if (tag === 'CANVAS' || el.classList.contains('pb-cursor')) continue;
      if (!ok) {
        const cs = getComputedStyle(el);
        ok = cs.cursor === 'pointer' && (!el.parentElement || getComputedStyle(el.parentElement).cursor !== 'pointer');
      }
      if (!ok) continue;
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      const top = document.elementFromPoint(cx, cy);
      if (top && top !== el && !el.contains(top) && !top.contains(el)) continue;
      out.push({ el, cx, cy });
    }
    return out;
  };
  let foco = null;
  const salta = (dx, dy) => {
    let best = null, bs = Infinity;
    for (const p of pulsables()) {
      const vx = p.cx - x, vy = p.cy - y;
      const along = vx * dx + vy * dy;
      if (along < 6) continue;
      const side = Math.abs(vx * dy - vy * dx);
      const s = along + side * 2.2;
      if (s < bs) { bs = s; best = p; }
    }
    if (!best) return;
    x = best.cx; y = best.cy; place(); moveEvt();
    if (foco) foco.classList.remove('pb-mando-foco');
    foco = best.el; foco.classList.add('pb-mando-foco');
  };
  const volver = () => {
    const v = document.querySelector('.pb-volver');
    if (v) v.click();
  };
  const loop = (t) => {
    requestAnimationFrame(loop);
    const dt = Math.min(0.05, (t - last) / 1000 || 0.016); last = t;
    let pads = [];
    try { pads = navigator.getGamepads ? [...navigator.getGamepads()].filter(Boolean) : []; } catch (e) {}
    if (!pads.length) return;
    if (solo && !solo()) { prev = []; if (visible) show(false); return; }
    const g = pads[0];
    const b = (i) => !!(g.buttons[i] && g.buttons[i].pressed);
    const now = g.buttons.map((_, i) => b(i));
    const was = (i) => !!prev[i];
    const tap = (i) => now[i] && !was(i);
    let ax = g.axes[0] || 0, ay = g.axes[1] || 0;
    if (Math.hypot(ax, ay) < DEAD) { ax = g.axes[2] || 0; ay = g.axes[3] || 0; }
    const mag = Math.hypot(ax, ay);
    const any = mag > DEAD || now.some(Boolean);
    if (any) { make(); if (!visible) { show(true); place(); } }
    if (mag > DEAD) {
      const k = (mag - DEAD) / (1 - DEAD);
      const sp = (300 + 1300 * k * k) * dt;
      x += (ax / mag) * k * sp * 1.6; y += (ay / mag) * k * sp * 1.6;
      place(); moveEvt();
      if (foco) { foco.classList.remove('pb-mando-foco'); foco = null; }
    }
    if (tap(12)) salta(0, -1);
    if (tap(13)) salta(0, 1);
    if (tap(14)) salta(-1, 0);
    if (tap(15)) salta(1, 0);
    if (tap(0)) { held = true; press(); }
    if (!now[0] && was(0)) { held = false; release(); }
    if (tap(2)) { const el = target(); mouse('contextmenu', el, { button: 2, buttons: 2 }); }
    if (tap(1)) key('Escape');
    if (tap(9)) key('Enter');
    if (tap(4)) wheel(-160);
    if (tap(5)) wheel(160);
    if (now[4] && was(4)) wheel(-14);
    if (now[5] && was(5)) wheel(14);
    if (tap(8)) { if (t - selectAt < 700) { volver(); volver(); selectAt = 0; } else selectAt = t; }
    prev = now;
  };
  addEventListener('mousemove', (e) => { if (e.isTrusted && visible) show(false); }, true);
  addEventListener('touchstart', () => { if (visible) show(false); }, true);
  addEventListener('gamepadconnected', () => { make(); });
  requestAnimationFrame(loop);
})();
