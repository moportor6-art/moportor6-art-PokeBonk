/* Subversión propia: editor del HUD.
   Desde la pausa de una partida, «Editar HUD» permite arrastrar cualquier elemento del HUD
   (retrato, tiempo, minimapa, ataques, joystick, botones, MEGA/DMAX) y cambiar su tamaño.
   Se guarda en este móvil (localStorage) y se aplica en todas las partidas.
   Las posiciones se guardan en % de pantalla para que aguanten cambios de tamaño. */
(() => {
  // Una disposición para horizontal y otra para vertical.
  const key = () => document.documentElement.classList.contains('pb-portrait') ? 'pb-hud-layout-v' : 'pb-hud-layout';
  const ITEMS = [
    { sel: '.hud-tl', css: '#hud .hud-tl', name: 'Retrato y nivel' },
    { sel: '.hud-top', css: '#hud .hud-top', name: 'Tiempo y barra' },
    { sel: '.hud-tr', css: '#hud .hud-tr', name: 'Minimapa' },
    { sel: '.hud-bl', css: '#hud .hud-bl', name: 'Ataques y objetos' },
    { sel: '.tc-stick', css: '.tc .tc-stick:not(.on), .tc .tc-stick.fixed', name: 'Joystick' },
    { sel: '.tc-jump', css: '.tc .tc-jump', name: 'Saltar' },
    { sel: '.tc-dash', css: '.tc .tc-dash', name: 'Deslizar' },
    { sel: '.tc-lock', css: '.tc .tc-lock', name: 'Fijar objetivo' },
    { sel: '.tc-ultb', css: '.tc .tc-ultb', name: 'Ultimate' },
    { sel: '.tc-inc', css: '.tc .tc-inc', name: 'Incienso' },
    { sel: '.tc-pause', css: '.tc .tc-pause', name: 'Pausa' },
    { sel: '.tc-aim', css: '.tc .tc-aim', name: 'Apuntado' },
    { sel: '.pb-mx .mg', css: '.pb-mx .mg', name: 'MEGA' },
    { sel: '.pb-mx .dx', css: '.pb-mx .dx', name: 'DMAX' }
  ];
  const load = () => { try { return JSON.parse(localStorage.getItem(key())) || {}; } catch { return {}; } };
  const save = () => { try { localStorage.setItem(key(), JSON.stringify(H.layout)); } catch {} };

  const style = document.createElement('style');
  style.id = 'pb-hud-layout';
  // Arreglo de la pausa en pantallas bajas (móvil en horizontal): las estadísticas en una sola fila
  // y botones algo más bajos, para que no se monten unos sobre otros.
  const pauseFix = document.createElement('style');
  pauseFix.textContent = `@media (max-height:560px){
html body #ui .pz > .pz-hero .pz-kpis{grid-template-columns:repeat(6,minmax(0,1fr))!important;gap:3px!important}
html body #ui .pz > .pz-hero .sm-kpi{grid-column:auto!important;padding:2px 2px!important}
html body #ui .pz > .pz-hero .sm-kpi b{font-size:12px!important}
html body #ui .pz > .pz-hero .sm-kpi span{font-size:7px!important;white-space:nowrap!important;overflow:hidden;text-overflow:ellipsis}
html body #ui .pz > .sm-foot .actions > .btn:not(.big){min-height:34px!important;padding-top:4px!important;padding-bottom:4px!important}
html body #ui .pz > .sm-foot .actions > .btn:nth-child(-n+2):not(.big){min-height:38px!important}
}`;
  document.head.append(pauseFix);

  const editCss = document.createElement('style');
  editCss.textContent = `
body.pb-hud-editing .modal{visibility:hidden!important}
body.pb-hud-editing #hud, body.pb-hud-editing .tc{visibility:visible!important;opacity:1!important}
body.pb-hud-editing.pb-hud-touch .tc{display:block!important;pointer-events:none!important}
.pb-he{position:fixed;inset:0;z-index:9999;touch-action:none;user-select:none;-webkit-user-select:none}
.pb-he-f{position:fixed;border:2px dashed rgba(255,255,255,.9);border-radius:10px;background:rgba(138,90,216,.18);box-sizing:border-box;touch-action:none}
.pb-he-f.on{border:3px solid #ffd23a;background:rgba(255,210,58,.22)}
.pb-he-f b{position:absolute;left:4px;top:-18px;font:800 11px system-ui,sans-serif;color:#fff;text-shadow:0 1px 2px #000;white-space:nowrap;pointer-events:none}
.pb-he-p{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);width:min(340px,86vw);padding:12px 14px;border-radius:16px;background:rgba(255,255,255,.96);color:#2a2340;font:700 14px system-ui,sans-serif;box-shadow:0 6px 0 rgba(0,0,0,.2);touch-action:auto}
.pb-he-p h3{margin:0 0 4px;font-size:16px}
.pb-he-p small{display:block;opacity:.7;margin-bottom:8px;font-weight:600}
.pb-he-p input[type=range]{width:100%}
.pb-he-p .row{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
.pb-he-p button{flex:1;min-width:90px;padding:9px 8px;border-radius:12px;border:0;font:800 13px system-ui,sans-serif;background:#ece8f6;color:#2a2340}
.pb-he-p button.go{background:#3ec26a;color:#fff}
.pb-he-p button.warn{background:#f2d4d4;color:#8a1f2a}`;
  document.head.append(style, editCss);

  // Hueco libre del centro de la franja de la pausa: ahí van "HUD y guía" y "Auto aprender", uno encima del otro.
  const chipsPausa = (hero) => {
    let c = hero.querySelector('.pb-pz-chips');
    if (!c) {
      if (!document.getElementById('pb-pz-css')) { const st = document.createElement('style'); st.id = 'pb-pz-css'; st.textContent = '.pb-pz-movil button{padding:1px 9px!important;font-size:10px!important;box-shadow:none!important}'; document.head.append(st); }
      if (getComputedStyle(hero).position === 'static') hero.style.position = 'relative';
      c = document.createElement('div');
      c.className = 'pb-pz-chips';
      // Los dos botones juntos, uno encima del otro, en un hueco de la franja donde no hay texto.
      const pc = hero.clientWidth >= 700;
      c.style.cssText = pc
        ? 'position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:2;display:flex;flex-direction:column;gap:6px;align-items:stretch;pointer-events:none'
        : 'position:absolute;right:8px;top:6px;z-index:2;display:flex;flex-direction:row;gap:6px;align-items:center;pointer-events:none';
      if (!pc) c.classList.add('pb-pz-movil');
      hero.append(c);
    }
    return c;
  };
  const CHIP = 'pointer-events:auto;padding:5px 14px;border-radius:99px;border:2px solid #fff;color:#fff;font:800 12px system-ui,sans-serif;letter-spacing:.3px;cursor:pointer;white-space:nowrap;box-shadow:0 2px 0 rgba(0,0,0,.25)';

  const H = {
    layout: load(),
    editing: false,

    apply() {
      let css = '';
      for (const it of ITEMS) {
        const v = H.layout[it.sel];
        if (!v) continue;
        const x = +v.x || 0, y = +v.y || 0, s = +v.s || 1, r = +v.r || 0;
        css += `${it.css}{translate:${x.toFixed(2)}vw ${y.toFixed(2)}vh!important;scale:${s.toFixed(2)}!important${r ? `;rotate:${r}deg!important` : ''}}\n`;
        // Oculto: no se ve ni se puede tocar. En el editor se ve medio transparente para poder volver a mostrarlo.
        if (v.h) css += `${it.css}{opacity:0!important;pointer-events:none!important}\nbody.pb-hud-editing ${it.css.split(',').join(',body.pb-hud-editing ')}{opacity:.3!important}\n`;
      }
      style.textContent = css;
    },

    // Zona del joystick: si lo moviste, la zona sigue al joystick.
    stickZone(x, stick) {
      const v = H.layout['.tc-stick'];
      if (!v || (!v.x && !v.y)) return x < innerWidth * .42;
      const r = stick.getBoundingClientRect(), cx = r.left + r.width / 2;
      return Math.abs(x - cx) < innerWidth * .25;
    },

    // ---- editor ----
    open() {
      if (H.editing) return;
      H.editing = true;
      document.body.classList.add('pb-hud-editing');
      if (window.PB_MEGA) PB_MEGA.forceShow = true;
      try { PB_MEGA?.paint(); } catch {}
      const root = document.createElement('div'); root.className = 'pb-he';
      const panel = document.createElement('div'); panel.className = 'pb-he-p';
      root.append(panel);
      document.body.append(root);
      H.root = root; H.panel = panel; H.sel = null; H.frames = [];
      requestAnimationFrame(() => { H.build(); H.renderPanel(); H.loop(); });
    },

    close() {
      H.editing = false;
      document.body.classList.remove('pb-hud-editing');
      if (window.PB_MEGA) PB_MEGA.forceShow = false;
      try { PB_MEGA?.paint(); } catch {}
      H.root?.remove(); H.root = null;
      save();
    },

    present() {
      const out = [];
      for (const it of ITEMS) {
        const el = document.querySelector(it.sel);
        if (!el) continue;
        const r = el.getBoundingClientRect(), cs = getComputedStyle(el);
        if (r.width < 4 || r.height < 4 || cs.display === 'none') continue;
        out.push({ it, el });
      }
      return out;
    },

    build() {
      for (const f of H.frames) f.box.remove();
      H.frames = [];
      for (const { it, el } of H.present()) {
        const box = document.createElement('div'); box.className = 'pb-he-f';
        const lb = document.createElement('b'); lb.textContent = it.name; box.append(lb);
        H.root.insertBefore(box, H.panel);
        const f = { it, el, box };
        H.frames.push(f);
        box.addEventListener('pointerdown', e => {
          e.preventDefault(); e.stopPropagation();
          box.setPointerCapture?.(e.pointerId);
          H.sel = it.sel; H.renderPanel();
          const v = H.layout[it.sel] ??= { x: 0, y: 0, s: 1 };
          const sx = e.clientX, sy = e.clientY, ox = v.x, oy = v.y;
          const mv = ev => {
            v.x = ox + (ev.clientX - sx) / innerWidth * 100;
            v.y = oy + (ev.clientY - sy) / innerHeight * 100;
            H.apply();
            H.clamp(f.el, v);
          };
          const up = () => { box.removeEventListener('pointermove', mv); box.removeEventListener('pointerup', up); box.removeEventListener('pointercancel', up); save(); };
          box.addEventListener('pointermove', mv); box.addEventListener('pointerup', up); box.addEventListener('pointercancel', up);
        });
      }
    },

    // Que nada se salga de la pantalla.
    clamp(el, v) {
      const r = el.getBoundingClientRect();
      let dx = 0, dy = 0;
      if (r.left < 0) dx = -r.left; else if (r.right > innerWidth) dx = innerWidth - r.right;
      if (r.top < 0) dy = -r.top; else if (r.bottom > innerHeight) dy = innerHeight - r.bottom;
      if (dx || dy) { v.x += dx / innerWidth * 100; v.y += dy / innerHeight * 100; H.apply(); }
    },

    loop() {
      if (!H.editing) return;
      for (const f of H.frames) {
        const r = f.el.getBoundingClientRect();
        Object.assign(f.box.style, { left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px' });
        f.box.classList.toggle('on', f.it.sel === H.sel);
      }
      requestAnimationFrame(H.loop);
    },

    renderPanel() {
      const p = H.panel; p.textContent = '';
      const it = ITEMS.find(i => i.sel === H.sel);
      const h = document.createElement('h3'); h.textContent = it ? it.name : 'Editar HUD';
      const sm = document.createElement('small');
      sm.textContent = it ? 'Arrástralo para moverlo. Abajo puedes cambiar su tamaño, girarlo u ocultarlo.' : 'Toca y arrastra cualquier elemento para moverlo. Toca uno para cambiar su tamaño, girarlo u ocultarlo.';
      p.append(h, sm);
      if (it) {
        const v = H.layout[it.sel] ??= { x: 0, y: 0, s: 1 };
        const lab = document.createElement('div'); lab.textContent = `Tamaño: ${Math.round(v.s * 100)}%`;
        const rg = document.createElement('input'); rg.type = 'range'; rg.min = '50'; rg.max = '200'; rg.step = '5'; rg.value = String(Math.round(v.s * 100));
        rg.addEventListener('input', () => { v.s = +rg.value / 100; lab.textContent = `Tamaño: ${rg.value}%`; H.apply(); const el = document.querySelector(it.sel); if (el) H.clamp(el, v); });
        rg.addEventListener('change', save);
        const labR = document.createElement('div'); labR.textContent = `Giro: ${Math.round(+v.r || 0)}°`;
        const rr = document.createElement('input'); rr.type = 'range'; rr.min = '-180'; rr.max = '180'; rr.step = '15'; rr.value = String(Math.round(+v.r || 0));
        rr.addEventListener('input', () => { v.r = +rr.value; labR.textContent = `Giro: ${rr.value}°`; H.apply(); });
        rr.addEventListener('change', save);
        const row = document.createElement('div'); row.className = 'row';
        const hd = document.createElement('button');
        const hdTxt = () => { hd.textContent = v.h ? 'Mostrar' : 'Ocultar'; hd.className = v.h ? 'go' : ''; };
        hdTxt();
        hd.addEventListener('click', () => { v.h = !v.h; H.apply(); save(); hdTxt(); });
        const rs = document.createElement('button'); rs.textContent = 'Restablecer este';
        rs.addEventListener('click', () => { delete H.layout[it.sel]; H.apply(); save(); H.renderPanel(); });
        row.append(hd, rs);
        p.append(lab, rg, labR, rr, row);
        if (it.sel === '.tc-stick' || it.sel === '.tc-pause') {
          const warn = document.createElement('small');
          warn.style.cssText = 'margin-top:6px;color:#b0392b';
          warn.textContent = it.sel === '.tc-stick' ? 'Si ocultas el joystick no podrás moverte con el dedo.' : 'Si ocultas Pausa, usa el botón Atrás del móvil para pausar.';
          p.append(warn);
        }
      }
      const row = document.createElement('div'); row.className = 'row';
      const all = document.createElement('button'); all.className = 'warn'; all.textContent = 'Restablecer todo';
      let armed = false;
      all.addEventListener('click', () => {
        if (!armed) { armed = true; all.textContent = '¿Seguro? Toca otra vez'; return; }
        H.layout = {}; H.apply(); save(); H.sel = null; H.renderPanel();
      });
      const ok = document.createElement('button'); ok.className = 'go'; ok.textContent = 'Listo';
      ok.addEventListener('click', () => H.close());
      row.append(all, ok);
      p.append(row);
    },

    // Un solo botón «HUD y guía» en la pausa (ocupa el hueco libre junto a Reiniciar, sin añadir filas).
    // Va como etiqueta pequeña junto a «Pausa», en la tarjeta del Pokémon, para no añadir filas de botones.
    inject() {
      const hero = document.querySelector('.modal.sm-modal .panel.sm.pz > .pz-hero');
      if (!hero || hero.querySelector('.pb-he-btn')) return;
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'pb-he-btn'; b.textContent = 'HUD y guía';
      b.style.cssText = CHIP + ';background:#7a3fd0';
      b.addEventListener('click', e => { e.stopPropagation(); H.menu(); });
      const ch = chipsPausa(hero);
      if (ch.classList.contains('pb-pz-movil')) b.textContent = 'HUD';
      ch.prepend(b);
    },

    menu() {
      if (document.querySelector('.pb-he-menu')) return;
      const m = document.createElement('div'); m.className = 'pb-he pb-he-menu';
      m.style.background = 'rgba(0,0,0,.45)';
      const p = document.createElement('div'); p.className = 'pb-he-p';
      const h = document.createElement('h3'); h.textContent = 'HUD y guía';
      const row = document.createElement('div'); row.className = 'row';
      const ed = document.createElement('button'); ed.className = 'go'; ed.textContent = 'Editar HUD';
      const gu = document.createElement('button');
      const gtxt = () => { gu.textContent = `Guía: ${window.PB_GUIA?.on ? 'Sí' : 'No'}`; };
      gtxt();
      const cl = document.createElement('button'); cl.textContent = 'Cerrar';
      const close = () => m.remove();
      ed.addEventListener('click', e => { e.stopPropagation(); close(); H.open(); });
      gu.addEventListener('click', e => { e.stopPropagation(); window.PB_GUIA?.set(!PB_GUIA.on); gtxt(); });
      cl.addEventListener('click', e => { e.stopPropagation(); close(); });
      m.addEventListener('click', e => { if (e.target === m) close(); });
      row.append(ed, gu);
      const row2 = document.createElement('div'); row2.className = 'row'; row2.append(cl);
      p.append(h, row, row2); m.append(p); document.body.append(m);
    }
  };

  H.apply();
  addEventListener('pb-orientation', () => { if (!H.editing) { H.layout = load(); H.apply(); } });
  // Fila «Editor del HUD» en Ajustes > Gráficos (debajo de Orientación). Solo abre el editor durante una partida.
  const settingsRow = () => {
    const body = document.querySelector('.jay-enemy-row')?.parentElement;
    if (!body || body.querySelector('.pb-he-row')) return;
    const r = document.createElement('div');
    r.className = 'st-row segrow wide pb-he-row';
    const label = document.createElement('span');
    label.append('Editor del HUD');
    const small = document.createElement('small');
    const run = window.__pbRun, inRun = run && run.state !== 'over' && run.player;
    small.textContent = inRun ? 'Mueve y cambia el tamaño de cada botón y barra de la partida' : 'Ábrelo durante una partida: Pausa > Ajustes, o la etiqueta «HUD y guía» de la pausa';
    label.append(small);
    const seg = document.createElement('div'); seg.className = 'seg';
    const b = document.createElement('button'); b.type = 'button'; b.className = 'pill on'; b.textContent = 'Editar HUD';
    b.disabled = !inRun;
    b.addEventListener('click', e => { e.stopPropagation(); if (window.__pbRun?.player) H.open(); });
    seg.append(b);
    r.append(label, seg, document.createElement('span'));
    const orient = body.querySelector('.pb-orient-row');
    if (orient) orient.after(r); else body.prepend(r);
  };
  setInterval(() => { try { if (document.querySelector('.tc.on') || matchMedia('(pointer:coarse)').matches) document.body.classList.add('pb-hud-touch'); H.inject(); settingsRow(); } catch {} }, 400);
  window.PB_HUD = H;
})();
