/* Subversión propia: guía de objetivos en la partida.
   Una flecha alrededor de tu Pokémon apunta al siguiente objetivo, por orden:
   1) Poké Balls gratis  2) NPC de mejoras (tienda, Ditto, Hypno, fósiles, jaulas...)
   3) Desafíos y altares  4) Guardián / legendario y, al vencerlo, el portal al siguiente mapa.
   Dentro de cada paso va al más cercano. Tocar la etiqueta salta ese objetivo.
   Se puede apagar desde la pausa («Guía: Sí/No»). */
(() => {
  const KEY = 'pb-guia';
  const STEPS = [
    { name: 'Poké Balls gratis', kinds: { freechest: 'Super Ball gratis', chest: 'Poké Ball gratis' }, test: e => e.kind === 'freechest' || (e.kind === 'chest' && e.data?.gift) },
    { name: 'Mejoras', kinds: { meowth: 'Tienda de Meowth', ditto: 'Ditto (clona un objeto)', hypno: 'Hypno (movimientos)', fossil: 'Ruinas del Fósil', cage: 'Pokémon enjaulado', snorlax: 'Snorlax', magnet: 'Magnemite (experiencia)', porygon: 'Porygon', bill: 'PC de Bill' } },
    { name: 'Desafíos', kinds: { challenge: 'Altar de desafío', altar: 'Altar' } },
    { name: 'Guardián', kinds: { boss: 'Guardián del mapa', shrine: 'Santuario' } },
    { name: 'Siguiente mapa', kinds: { portal: 'Portal al siguiente mapa' } }
  ];
  // NPC que se pueden usar muchas veces: cuentan como hechos al acercarte.
  const REUSABLE = new Set(['meowth', 'hypno', 'porygon', 'bill', 'magnet']);
  const NEAR = 4;

  const G = {
    on: (() => { try { return localStorage.getItem(KEY) !== '0'; } catch { return true; } })(),
    done: new WeakSet(),
    run: null,
    target: null,

    set(v) { G.on = v; try { localStorage.setItem(KEY, v ? '1' : '0'); } catch {} G.draw(); },

    pending(r, e) {
      if (G.done.has(e) || e.used) return false;
      if (e.kind === 'boss') return !r.bossSpawned;
      if (e.kind === 'shrine') return !r.bossSpawned;
      if (e.kind === 'portal') return e.data?.rift == null && (r.stageCleared || !r.interactables.list.some(x => x.kind === 'boss'));
      return true;
    },

    pick(r) {
      const p = r.player.pos, L = r.interactables?.list ?? [];
      for (const st of STEPS) {
        let best = null, bd = 1e9;
        for (const e of L) {
          if (!(e.kind in st.kinds)) continue;
          if (st.test && !st.test(e)) continue;
          if (!G.pending(r, e)) continue;
          const d = Math.hypot(e.x - p.x, e.z - p.z);
          if (REUSABLE.has(e.kind) && d < NEAR) { G.done.add(e); continue; }
          if (d < bd) { bd = d; best = e; }
        }
        if (best) return { e: best, d: bd, label: st.kinds[best.kind], step: st.name };
      }
      return null;
    },

    el: null,
    ui() {
      if (G.el) return;
      const st = document.createElement('style');
      st.textContent = `.pb-guia{position:fixed;left:0;top:0;z-index:20;pointer-events:none}
.pb-guia .ar{position:absolute;width:0;height:0;border-left:13px solid transparent;border-right:13px solid transparent;border-bottom:26px solid #ffd23a;filter:drop-shadow(0 2px 2px rgba(0,0,0,.55));transform-origin:50% 50%}
.pb-guia .lb{position:absolute;transform:translate(-50%,0);padding:4px 10px;border-radius:12px;background:rgba(30,22,48,.82);color:#fff;font:800 12px system-ui,sans-serif;white-space:nowrap;pointer-events:auto;border:2px solid #ffd23a}
.pb-guia .lb small{opacity:.75;font-weight:700;margin-left:6px}
.pb-guia .pin{position:absolute;transform:translate(-50%,-100%);width:0;height:0;border-left:11px solid transparent;border-right:11px solid transparent;border-top:18px solid #ffd23a;filter:drop-shadow(0 2px 2px rgba(0,0,0,.55));animation:pbg .8s ease-in-out infinite}
@keyframes pbg{50%{margin-top:-8px}}`;
      document.head.append(st);
      G.el = document.createElement('div'); G.el.className = 'pb-guia';
      G.ar = document.createElement('div'); G.ar.className = 'ar';
      G.lb = document.createElement('div'); G.lb.className = 'lb';
      G.pin = document.createElement('div'); G.pin.className = 'pin';
      G.el.append(G.ar, G.lb, G.pin);
      G.lb.addEventListener('pointerdown', e => { e.stopPropagation(); if (G.target) { G.done.add(G.target.e); G.target = null; } });
      document.body.append(G.el);
    },

    draw() {
      const r = window.__pbRun;
      G.ui();
      const show = G.on && r && r.state === 'play' && r.player && !r.player.dead && !document.body.classList.contains('pb-hud-editing');
      if (!show) { G.el.hidden = true; return; }
      const t = G.pick(r);
      G.target = t;
      if (!t) { G.el.hidden = true; return; }
      G.el.hidden = false;
      const p = r.player.pos, ui = r.ui;
      const a = ui.project(r, p.x, p.y + 1, p.z);
      const dx = t.e.x - p.x, dz = t.e.z - p.z, dl = Math.hypot(dx, dz) || 1;
      const b = ui.project(r, p.x + dx / dl * 2, p.y + 1, p.z + dz / dl * 2);
      const ang = Math.atan2(b.y - a.y, b.x - a.x);
      const R = 62;
      const ax = a.x + Math.cos(ang) * R, ay = a.y + Math.sin(ang) * R;
      G.ar.style.left = (ax - 13) + 'px'; G.ar.style.top = (ay - 13) + 'px';
      G.ar.style.transform = `rotate(${ang + Math.PI / 2}rad)`;
      G.lb.innerHTML = '';
      G.lb.append(t.label);
      const sm = document.createElement('small'); sm.textContent = `${Math.round(t.d)} m`; G.lb.append(sm);
      G.lb.style.left = a.x + 'px'; G.lb.style.top = (a.y + 92) + 'px';
      // marcador encima del objetivo si se ve en pantalla
      const c = ui.project(r, t.e.x, (t.e.y ?? p.y) + 3, t.e.z);
      const onScreen = c.vis && c.x > 0 && c.y > 0 && c.x < innerWidth && c.y < innerHeight && t.d > 3;
      G.pin.hidden = !onScreen;
      if (onScreen) { G.pin.style.left = c.x + 'px'; G.pin.style.top = c.y + 'px'; }
    },

    // Botón «Guía: Sí/No» en la pausa.
    inject() {
      const acts = document.querySelector('.modal.sm-modal .panel.sm .sm-foot .actions');
      if (!acts) return;
      let b = acts.querySelector('.pb-guia-btn');
      if (!b) {
        b = document.createElement('button');
        b.type = 'button'; b.className = 'btn ghost pb-guia-btn';
        b.addEventListener('click', e => { e.stopPropagation(); G.set(!G.on); b.textContent = `Guía: ${G.on ? 'Sí' : 'No'}`; });
        acts.append(b);
      }
      b.textContent = `Guía: ${G.on ? 'Sí' : 'No'}`;
    }
  };

  const loop = () => { try { G.draw(); } catch {} requestAnimationFrame(loop); };
  requestAnimationFrame(loop);
  setInterval(() => { try { G.inject(); } catch {} }, 400);
  window.PB_GUIA = G;
})();
