/* Subversión propia: Fiebre del oro, Fiebre del Polvo Estelar y Bonkoin doble.
   Son tres objetos (se consiguen como los demás, en Poké Balls y premios) y no ocupan huecos de
   movimiento ni de vitamina. Las definiciones están en defineProperty-…js (pb-fiebre-oro,
   pb-fiebre-polvo, pb-bonk-doble) y los nombres en data/items.json.
   - Fiebre del oro: cada ORO.cada s (menos por unidad extra) dura FIEBRE_SECS. Llueven monedas
     alrededor y todas las monedas que recoges valen ×1,5 a ×2,5 (run.goldMul), según la suerte.
   - Fiebre del Polvo Estelar: igual, pero cada derrota da ese múltiplo del Polvo normal por derrota
     (kills/10 por la dificultad). Va a stats.pbDust y se suma al Polvo al acabar la partida.
   - Bonkoin doble: al recoger una Bonkoin, probabilidad de que cuente dos (stats.bonks).
   La cuenta va con el tiempo de juego (run.time): en pausa o eligiendo mejora no corre. */
(() => {
  const FIEBRE_SECS = 15;
  const ORO = { item: 'pb-fiebre-oro', cada: 90, menos: 15 };
  const POLVO = { item: 'pb-fiebre-polvo', cada: 120, menos: 20 };
  const BONK = { item: 'pb-bonk-doble', base: .25, por: .25, tope: .75 };
  const MONEDAS_SEG = 3;          // lluvia de monedas durante la Fiebre del oro
  const ORO_COL = 16762938, ROSA = 16728008, AZUL = 9103615, BLANCO = 16777215;
  const STAR = 1, TWINKLE = 25;   // formas de partícula del juego

  const coma = n => String(n).replace('.', ',');
  const suerte = r => Math.max(0, r?.player?.stats?.luck ?? 0);
  // ×1,5 a ×2,5. Con suerte, la tirada se inclina hacia arriba (con 40 de suerte, la media pasa de ×2,0 a ×2,17).
  const tirada = r => {
    const k = 1 + suerte(r) / 40;
    const u = 1 - Math.pow(1 - Math.random(), k);
    return Math.round((1.5 + u) * 10) / 10;
  };
  const cuantos = (r, id) => r?.player?.items?.get?.(id) ?? 0;
  const activa = r => r && r.player && r.mode !== 'duel' && r.state !== 'over';

  const F = {
    run: null,
    st: null,

    nueva(r) {
      F.run = r;
      F.st = { oro: { next: 0, end: 0, n: 0, base: 1, g0: 0, lluvia: 0 }, polvo: { next: 0, end: 0, n: 0, k: 0, dust: 0 } };
      F.pinta();
    },

    // Cuándo toca la siguiente: desde que tienes el objeto, y luego cada «cada» segundos desde el inicio de la anterior.
    programa(f, def, n, t) {
      const intervalo = Math.max(30, def.cada - def.menos * (n - 1));
      if (!f.next) f.next = t + intervalo;
      else if (!f.end) f.next = Math.min(f.next, (f.start ?? t) + intervalo);
      f.intervalo = intervalo;
    },

    tick() {
      const r = window.__pbRun;
      if (r !== F.run) F.nueva(r);
      if (!activa(r)) { F.pinta(); return; }
      const t = r.time, s = F.st;
      // ---- Fiebre del oro ----
      const no = cuantos(r, ORO.item), o = s.oro;
      if (no && !o.end) { F.programa(o, ORO, no, t); if (t >= o.next) F.oroEmpieza(r, t); }
      if (o.end) {
        if (t >= o.end) F.oroAcaba(r, t);
        else if (r.state === 'play') F.oroLluvia(r, t);
      }
      // ---- Fiebre del Polvo Estelar ----
      const np = cuantos(r, POLVO.item), p = s.polvo;
      if (np && !p.end) { F.programa(p, POLVO, np, t); if (t >= p.next) F.polvoEmpieza(r, t); }
      if (p.end) {
        F.polvoCuenta(r);
        if (t >= p.end) F.polvoAcaba(r, t);
      }
      F.pinta();
    },

    oroEmpieza(r, t) {
      const o = F.st.oro;
      o.n = tirada(r); o.start = t; o.end = t + FIEBRE_SECS;
      o.base = r.goldMul ?? 1; r.goldMul = o.base * o.n;
      o.g0 = r.stats?.gold ?? 0; o.lluvia = t;
      const p = r.player.pos;
      try {
        r.ui.banner('¡Fiebre del oro!', `Los Pokédólares valen ×${coma(o.n)} durante ${FIEBRE_SECS} s`, '#ffc83a', { species: 52 });
        r.audio.power(); r.audio.coin();
        r.vfx.ring(p.x, p.y + .2, p.z, 7, ORO_COL, .6);
        r.vfx.burst(p.x, p.y + 1.5, p.z, ORO_COL, 30, 8, STAR, .5, .7);
      } catch {}
    },

    oroLluvia(r, t) {
      const o = F.st.oro, p = r.player.pos;
      const valor = Math.max(1, Math.ceil((2 + 2 * (r.stage ?? 1)) * (r.player.stats?.gold ?? 1)));
      while (o.lluvia <= t) {
        o.lluvia += 1 / MONEDAS_SEG;
        const a = Math.random() * Math.PI * 2, d = 2.5 + Math.random() * 3.5;
        const x = p.x + Math.cos(a) * d, z = p.z + Math.sin(a) * d;
        let y = p.y + 3;
        try { y = r.terrain.height(x, z) + 3; } catch {}
        try { r.pickups.spawn('coin', x, y, z, valor); } catch {}
      }
      try {
        for (let k = 0; k < 2; k++) r.vfx.add.spawn({ x: p.x + (Math.random() - .5) * 2.4, y: p.y + Math.random() * 2.6, z: p.z + (Math.random() - .5) * 2.4,
          vy: 1.2, life: .8, size: .45, endSize: 0, color: k ? ORO_COL : BLANCO, shape: TWINKLE, glow: 1 });
      } catch {}
    },

    oroAcaba(r, t) {
      const o = F.st.oro;
      // Deja el multiplicador como estaba (por si otra cosa lo cambió mientras, se divide en vez de pisarlo).
      r.goldMul = o.n ? (r.goldMul ?? o.base * o.n) / o.n : o.base;
      const ganado = Math.max(0, (r.stats?.gold ?? 0) - o.g0);
      o.end = 0; o.next = (o.start ?? t) + (o.intervalo ?? ORO.cada);
      try { r.ui.toast(`Fiebre del oro: +${ganado} ₽`, 'pb-fiebre-oro'); } catch {}
    },

    polvoEmpieza(r, t) {
      const p = F.st.polvo;
      p.n = tirada(r); p.start = t; p.end = t + FIEBRE_SECS; p.k = r.stats?.kills ?? 0; p.dust = 0;
      const q = r.player.pos;
      try {
        r.ui.banner('¡Fiebre del Polvo Estelar!', `Cada derrota da ×${coma(p.n)} de Polvo durante ${FIEBRE_SECS} s`, '#ff5ad0', { species: 35 });
        r.audio.power();
        r.vfx.ring(q.x, q.y + .2, q.z, 7, ROSA, .6);
        r.vfx.burst(q.x, q.y + 1.5, q.z, ROSA, 30, 8, STAR, .5, .7);
      } catch {}
    },

    // Polvo por derrota: el normal es 1/10 por la dificultad (×1, ×1,75 o ×2,5).
    polvoCuenta(r) {
      const p = F.st.polvo, k = r.stats?.kills ?? 0, dk = k - p.k;
      if (dk <= 0) return;
      p.k = k;
      const d = dk * .1 * (r.diff?.stardust ?? 1) * p.n;
      p.dust += d;
      r.stats.pbDust = (r.stats.pbDust ?? 0) + d;
      // Estrellas que vuelan hacia ti: una por derrota, hasta 6 por vuelta.
      const q = r.player.pos;
      try {
        for (let i = 0; i < Math.min(dk, 6); i++) {
          const a = Math.random() * Math.PI * 2, dd = 3 + Math.random() * 3;
          const x = q.x + Math.cos(a) * dd, z = q.z + Math.sin(a) * dd;
          r.vfx.add.spawn({ x, y: q.y + 1 + Math.random() * 2, z, vx: (q.x - x) * 1.6, vz: (q.z - z) * 1.6, vy: .6, life: .6, size: .55, endSize: .1,
            color: i % 3 ? ROSA : (i % 2 ? AZUL : BLANCO), shape: i % 2 ? STAR : TWINKLE, glow: 1 });
        }
      } catch {}
    },

    polvoAcaba(r, t) {
      const p = F.st.polvo;
      p.end = 0; p.next = (p.start ?? t) + (p.intervalo ?? POLVO.cada);
      try { r.ui.toast(`Fiebre del Polvo Estelar: +${Math.round(p.dust)} de Polvo al acabar la partida`, 'pb-fiebre-polvo'); } catch {}
    },

    // Lo llama el juego al recoger una Bonkoin (después de sumarla).
    bonk(r) {
      const n = cuantos(r, BONK.item);
      if (!n || !activa(r)) return;
      const prob = Math.min(BONK.tope, BONK.base + BONK.por * (n - 1) + suerte(r) * .002);
      if (Math.random() >= prob) return;
      r.stats.bonks++;
      const p = r.player.pos;
      try {
        r.ui.toast('¡Bonkoin doble! Cuenta por dos', 'bonk');
        r.audio.bonkGet();
        r.vfx.burst(p.x, p.y + 2, p.z, ORO_COL, 30, 8, STAR, .5, .7);
        r.vfx.ring(p.x, p.y + .5, p.z, 5, ROSA, .5);
      } catch {}
    },

    // ---- aviso en pantalla mientras dura una fiebre ----
    el: null,
    pinta() {
      const r = F.run, s = F.st;
      const on = activa(r) && s && (s.oro.end || s.polvo.end);
      if (!on) { if (F.el) F.el.hidden = true; return; }
      if (!F.el) {
        const st = document.createElement('style');
        st.textContent = `.pb-fiebre{position:fixed;left:50%;top:calc(env(safe-area-inset-top) + 66px);transform:translateX(-50%);z-index:29;display:flex;flex-direction:column;gap:5px;align-items:center;pointer-events:none}
.pb-fiebre[hidden]{display:none!important}
.pb-fiebre>div{display:grid;grid-template-columns:auto auto;grid-template-rows:auto auto;column-gap:5px;align-items:center;padding:3px 10px 3px 4px;border-radius:14px;font:900 14px/1.05 'Lexend',system-ui,sans-serif;color:#fff;white-space:nowrap;box-shadow:0 3px 0 rgba(0,0,0,.28);animation:pbfb 1.2s ease-in-out infinite}
.pb-fiebre>div[hidden]{display:none}
.pb-fiebre img{grid-row:1/3;width:26px;height:26px;image-rendering:pixelated}
.pb-fiebre .oro{background:linear-gradient(90deg,#e09a12,#ffcf3a);color:#3a2400}
.pb-fiebre .polvo{background:linear-gradient(90deg,#b93cff,#ff5ad0)}
.pb-fiebre small{font:800 11px/1.1 'Lexend',system-ui,sans-serif;opacity:.9}
@keyframes pbfb{50%{transform:scale(1.05)}}`;
        document.head.append(st);
        F.el = document.createElement('div'); F.el.className = 'pb-fiebre';
        F.el.innerHTML = `<div class="oro"><img src="assets/items/pb-fiebre-oro.png" alt=""><b></b><small></small></div>`
          + `<div class="polvo"><img src="assets/items/pb-fiebre-polvo.png" alt=""><b></b><small></small></div>`;
        document.body.append(F.el);
      }
      F.el.hidden = false;
      const [eo, ep] = F.el.children, t = r.time;
      eo.hidden = !s.oro.end;
      if (s.oro.end) {
        eo.querySelector('b').textContent = `+${Math.max(0, (r.stats?.gold ?? 0) - s.oro.g0)} ₽`;
        eo.querySelector('small').textContent = `×${coma(s.oro.n)} · ${Math.max(0, Math.ceil(s.oro.end - t))} s`;
      }
      ep.hidden = !s.polvo.end;
      if (s.polvo.end) {
        ep.querySelector('b').textContent = `+${Math.round(s.polvo.dust)} Polvo`;
        ep.querySelector('small').textContent = `×${coma(s.polvo.n)} · ${Math.max(0, Math.ceil(s.polvo.end - t))} s`;
      }
    }
  };
  setInterval(() => { try { F.tick(); } catch {} }, 100);
  window.PB_FIEBRE = F;
})();
