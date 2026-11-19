/* Subversión propia (moportor6, 1.34): más automatismos y sistemas, solo en PokéBonk Lite.
   - Esquiva automática (Pausa → «HUD y guía», Sí por defecto): si estás dentro de la zona marcada de un ataque que está
     a punto de caer y puedes deslizarte, te deslizas solo hacia fuera.
   - Avisos de rarezas (Sí por defecto): cartel y sonido con variocolores, Dominantes y Poké Balls gratis cerca.
   - Cartas favoritas: al subir de nivel, cada carta lleva una ⭐; las marcadas se eligen solas cuando salen.
   - Movimientos Z: botón Z (junto a TERA) desde el Nv. 20, una vez por zona: ataque definitivo de tu tipo alrededor.
   - Logros con premio de Polvo, estadísticas por Pokémon (en su ficha de la Pokédex) y Tienda de Polvo (Laboratorio:
     consumibles para empezar con la bolsa llena y huevos para la Incubadora).
   Datos: profile.pbAuto.esq / .avisos, pbFav, pbZ (contador), pbLogros, pbCont (contadores), pbStatsPk, pbTienda. */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const meta = () => window.__pbMeta;
  const P = () => meta()?.profile;
  const guardar = () => { try { meta().save(); } catch {} };
  const A = () => { const p = P(); if (!p) return null; const a = p.pbAuto ??= {}; a.esq ??= true; a.avisos ??= true; return a; };
  const cont = (k, n = 1) => { const p = P(); if (!p) return; (p.pbCont ??= {})[k] = (p.pbCont[k] ?? 0) + n; };
  let NOM = {}, TIPOS = {};
  fetch('./data/pokemon.json').then(r => r.json()).then(l => { for (const x of l) { NOM[x.id] = x.name; TIPOS[x.id] = x.types; } }).catch(() => {});

  // ================= Esquiva automática =================
  setInterval(() => {
    const run = window.__pbRun, p = run?.player, a = A();
    if (!run || !p || !a) return;
    const v = run.vfx;
    if (v?.telegraph && !v.__pbEsq) {
      const tg = v.telegraph.bind(v);
      v.telegraph = (x, y, z, r, col, dur, ...rest) => { try { (run.__pbTel2 ??= []).push({ x, z, r, fin: (run.time ?? 0) + (dur ?? 1) }); } catch {} return tg(x, y, z, r, col, dur, ...rest); };
      v.__pbEsq = true;
    }
    if (!a.esq || run.state !== 'play' || p.dead) return;
    const t = run.time ?? 0, L = run.__pbTel2 ?? [];
    run.__pbTel2 = L.filter(o => o.fin > t);
    if (!(p.slideCd <= 0) || !p.grounded) return;
    for (const o of run.__pbTel2) {
      const dx = p.pos.x - o.x, dz = p.pos.z - o.z, d = Math.hypot(dx, dz);
      if (d > o.r + 0.4 || o.fin - t > 0.7) continue;
      let ux = dx / (d || 1), uz = dz / (d || 1);
      if (d < 0.3) { const ang = Math.random() * Math.PI * 2; ux = Math.cos(ang); uz = Math.sin(ang); }
      const vel = 6.3 * (p.stats.moveSpeed ?? 1) * 1.9;
      p.slideT = 0.55; p.slideCd = 0.9; p.vel.x = ux * vel; p.vel.z = uz * vel;
      try { run.vfx.ring(p.pos.x, p.pos.y + 0.3, p.pos.z, 1.4, 0xffffff, 0.25); } catch {}
      break;
    }
  }, 60);

  // ================= Avisos de rarezas =================
  const avisar = (run, txt, sub, col, sp) => { try { run.ui.banner(txt, sub, col, sp ? { species: sp } : undefined); run.audio?.power?.(); } catch {} };
  setInterval(() => {
    const run = window.__pbRun, p = run?.player, a = A();
    if (!run || !p || !a?.avisos || run.state !== 'play') return;
    const C = run.capture;
    if (C?.spawnShiny && !C.__pbAv) {
      const ss = C.spawnShiny.bind(C);
      C.spawnShiny = (...x) => { const r = ss(...x); if (A()?.avisos) avisar(run, '✨ ¡Un variocolor ha aparecido!', 'Busca la columna de luz arcoíris y captúralo', '#ff9aff'); return r; };
      C.__pbAv = true;
    }
    const vis = run.__pbAvisos ??= new Set(), E = run.enemies;
    for (let j = 0; j < (E?.alive?.length ?? 0); j++) {
      if (!E.alive[j] || !(E.flags[j] & 4096)) continue;
      const k = `d${j}:${E.gen[j]}`; if (vis.has(k)) continue; vis.add(k);
      avisar(run, '👑 ¡Un Dominante!', `${NOM[E.species[j]] ?? 'Un Pokémon gigante'} a ${Math.round(Math.hypot(E.x[j] - p.pos.x, E.z[j] - p.pos.z))} m: suelta Incienso al caer`, '#ffb83a', E.species[j]);
    }
    for (const o of run.interactables?.list ?? []) {
      if (o.kind !== 'freechest' || o.used) continue;
      const k = `f${Math.round(o.x)},${Math.round(o.z)}`, d = Math.hypot(o.x - p.pos.x, o.z - p.pos.z);
      if (d > 35 || vis.has(k)) continue; vis.add(k);
      try { run.ui.toast(`🎁 Poké Ball gratis a ${Math.round(d)} m`, 'poke-ball'); } catch {}
    }
  }, 500);

  // ================= Cartas favoritas =================
  const css = document.createElement('style');
  css.textContent = `.pb-fav{position:absolute;top:4px;right:4px;z-index:3;width:28px;height:28px;border-radius:50%;border:2px solid #fff;background:rgba(0,0,0,.45);color:#888;font:900 16px system-ui;line-height:22px;padding:0;cursor:pointer}.pb-fav.on{color:#ffd84a;background:rgba(80,60,0,.7)}
.pb-z{width:56px;height:56px;border-radius:50%;border:3px solid #fff;background:radial-gradient(circle at 35% 30%,#fff 0 10%,#ffcc33 11% 55%,#c86a00 100%);color:#fff;font:900 20px system-ui,sans-serif;text-shadow:0 1px 3px #000;box-shadow:0 3px 10px rgba(0,0,0,.4);margin-top:6px;touch-action:manipulation;cursor:pointer;pointer-events:auto}
.pb-z:disabled{filter:grayscale(.85) brightness(.75)}.pb-z small{display:block;font-size:8px}`;
  document.head.append(css);
  let vistaFav = null, desdeFav = 0;
  setInterval(() => {
    const run = window.__pbRun, m = run?.ui?.modalEl, p = P();
    if (!run || run.state !== 'modal' || !m?.isConnected || !p) { vistaFav = null; return; }
    const cartas = [...m.querySelectorAll('.card.offer')];
    if (!cartas.length) return;
    const fav = p.pbFav ??= [];
    for (const c of cartas) {
      if (c.querySelector('.pb-fav')) continue;
      const nom = c.querySelector('.bd h3')?.textContent?.trim(); if (!nom) continue;
      if (getComputedStyle(c).position === 'static') c.style.position = 'relative';
      const b = document.createElement('button'); b.type = 'button'; b.className = 'pb-fav' + (fav.includes(nom) ? ' on' : ''); b.textContent = '★'; b.title = 'Favorita: se elegirá sola cuando salga';
      const go = e => { e.stopPropagation(); e.preventDefault(); const i = fav.indexOf(nom); if (i >= 0) fav.splice(i, 1); else fav.push(nom); b.classList.toggle('on', i < 0); guardar(); vistaFav = null; };
      b.addEventListener('pointerdown', go, true); b.addEventListener('click', e => { e.stopPropagation(); e.preventDefault(); }, true);
      c.append(b);
    }
    const elegida = cartas.find(c => fav.includes(c.querySelector('.bd h3')?.textContent?.trim()));
    if (!elegida) { vistaFav = null; return; }
    if (vistaFav !== elegida) { vistaFav = elegida; desdeFav = performance.now(); return; }
    if (performance.now() - desdeFav > 900) { vistaFav = null; try { elegida.click(); } catch {} }
  }, 150);

  // ================= Movimientos Z =================
  const ZN = { normal: 'Carrera Arrolladora', fire: 'Hecatombe Pírica', water: 'Hidrovórtice Abisal', grass: 'Megatón Floral', electric: 'Gigavoltio Destructor', ice: 'Glaciación Apocalíptica', fighting: 'Ráfaga Demoledora', poison: 'Neblina Corrosiva', ground: 'Barrena Telúrica', flying: 'Picado Supersónico', psychic: 'Disruptor Psíquico', bug: 'Guadaña Sedosa', rock: 'Aplastamiento Gigalítico', ghost: 'Presa Espectral', dragon: 'Dracoaliento Devastador', dark: 'Agujero Negro Aniquilador', steel: 'Hiperderribo Calcinador', fairy: 'Arrebato Sideral' };
  const ZC = { normal: 0xe8e8d0, fire: 0xff7a3a, water: 0x4a9aff, grass: 0x6ad84a, electric: 0xffd23a, ice: 0x8ae8ff, fighting: 0xd84a3a, poison: 0xb05ad8, ground: 0xd8b05a, flying: 0xa8a8ff, psychic: 0xff5a9a, bug: 0xa8c83a, rock: 0xb8a04a, ghost: 0x7a5ab8, dragon: 0x7a4aff, dark: 0x5a4a6a, steel: 0xb8b8d0, fairy: 0xffa8e8 };
  const ZNV = 20, ZR = 15;
  const zPuede = run => run && run.state === 'play' && (run.player?.level ?? 1) >= ZNV && (run.__pbZ ?? -1) !== (run.stage ?? 1);
  const zLanzar = () => {
    const run = window.__pbRun; if (!zPuede(run)) return;
    const p = run.player, tipo = (TIPOS[p.speciesId] ?? ['normal'])[0], col = ZC[tipo] ?? 0xffffff, E = run.enemies;
    run.__pbZ = run.stage ?? 1; cont('z');
    try {
      run.ui.banner(`⚡ ¡${ZN[tipo] ?? 'Movimiento Z'}!`, 'Movimiento Z: ataque definitivo a tu alrededor', '#' + col.toString(16).padStart(6, '0'), { species: p.speciesId });
      run.vfx.ring(p.pos.x, p.pos.y + 0.3, p.pos.z, ZR, col, 0.9); run.vfx.ring(p.pos.x, p.pos.y + 0.3, p.pos.z, ZR * 0.6, 0xffffff, 0.7);
      for (let i = 0; i < 6; i++) run.vfx.burst(p.pos.x + (Math.random() - 0.5) * ZR, p.pos.y + 1, p.pos.z + (Math.random() - 0.5) * ZR, col, 30, 9, 29, 0.8, 0.9);
      run.shake?.(0.5, p.pos.x, p.pos.z); run.audio?.power?.();
    } catch {}
    for (let j = 0; j < (E?.alive?.length ?? 0); j++) {
      if (!E.alive[j] || E.dying?.[j] > 0 || Math.hypot(E.x[j] - p.pos.x, E.z[j] - p.pos.z) > ZR) continue;
      const jefe = E.flags[j] & (4 | 4096 | 8192);
      try { run.combat.hit(j, jefe ? E.maxHp[j] * 0.12 : E.maxHp[j] * 1.5, { type: tipo, cls: 'special', fixed: true }); } catch {}
    }
  };
  let zb = null;
  setInterval(() => {
    const run = window.__pbRun, mx = document.querySelector('.pb-mx');
    if (!run?.player || !mx) return;
    if (!zb || !zb.isConnected) {
      zb = document.createElement('button'); zb.className = 'pb-z';
      let last = 0;
      zb.addEventListener('pointerdown', e => { e.stopPropagation(); e.preventDefault?.(); const t = performance.now(); if (t - last < 400) return; last = t; zLanzar(); });
      zb.addEventListener('click', e => e.stopPropagation());
      mx.append(zb);
    }
    const lv = run.player.level ?? 1;
    zb.hidden = run.mode === 'duel';
    zb.disabled = !zPuede(run);
    zb.innerHTML = lv < ZNV ? `Z<small>Nv. ${ZNV}</small>` : (run.__pbZ === (run.stage ?? 1) ? 'Z<small>usado</small>' : 'Z<small>listo</small>');
  }, 300);
  addEventListener('keydown', e => { if (e.code === 'KeyZ' && !e.repeat) zLanzar(); }, true);

  // ================= Al terminar cada partida: estadísticas, logros, tienda =================
  const LOGROS = [
    ['gana1', 'Primeros pasos', 'Gana una partida', 200, p => (p.pbCont?.victorias ?? 0) >= 1],
    ['gana10pk', 'Diez caras', 'Gana con 10 Pokémon distintos', 1000, p => Object.values(p.pbStatsPk ?? {}).filter(s => s.v > 0).length >= 10],
    ['medallas8', 'Medallista', 'Consigue las 8 medallas de Kanto', 1500, p => (p.pbMedallas?.kanto?.length ?? 0) >= 8],
    ['bajas5000', 'Exterminador', '5.000 bajas en una partida', 500, p => Object.values(p.pbStatsPk ?? {}).some(s => s.k >= 5000)],
    ['intocable', 'Intocable', 'Gana sin bajar del 50 % de vida', 800, p => (p.pbCont?.intocable ?? 0) >= 1],
    ['tera10', 'Cristalino', 'Usa la Teracristalización 10 veces', 300, p => (p.pbCont?.tera ?? 0) >= 10],
    ['z5', 'Poder Z', 'Usa 5 movimientos Z', 300, p => (p.pbCont?.z ?? 0) >= 5],
    ['diario3', 'Constante', 'Supera 3 Desafíos diarios', 600, p => (p.pbCont?.diario ?? 0) >= 3],
    ['huevos3', 'Criador', 'Eclosiona 3 huevos', 500, p => (p.pbCont?.huevos ?? 0) >= 3],
    ['torre', 'Leyenda de la Torre', 'Supera la Torre de Líderes', 1500, p => (p.pbCont?.torre ?? 0) >= 1],
    ['bolsa30', 'Bolsa llena', 'Llega a 30 de un tipo de baya', 300, p => (p.pbCont?.bolsa30 ?? 0) >= 1],
    ['partidas25', 'Veterano', 'Juega 25 partidas', 700, p => Object.values(p.pbStatsPk ?? {}).reduce((a, s) => a + s.p, 0) >= 25]
  ];
  window.PB_LOGROS = { LOGROS, cont };
  const revisar = run => {
    const p = P(); if (!p) return;
    const hechos = p.pbLogros ??= [];
    for (const [id, nom, , premio, ok] of LOGROS) {
      if (hechos.includes(id)) continue;
      let si = false; try { si = ok(p); } catch {}
      if (!si) continue;
      hechos.push(id); p.stardust = (p.stardust ?? 0) + premio;
      try { (run?.ui ?? null)?.toast?.(`🏆 Logro: ${nom} (+${premio} de Polvo)`, null); window.__pbApp?.notice?.(`🏆 Logro: ${nom} · +${premio} de Polvo`); } catch {}
    }
    guardar();
  };
  let finVisto = null;
  setInterval(() => {
    const run = window.__pbRun, p = P(), pl = run?.player;
    if (!run || !p || !pl) return;
    // durante la partida: peor vida y bolsa llena
    if (run.state === 'play') {
      run.__pbMinHp = Math.min(run.__pbMinHp ?? 1, pl.hp / pl.maxHp);
      const b = run.__pbBolsa; if (b && Object.values(b.n).some(n => n >= 30) && !run.__pbB30) { run.__pbB30 = true; cont('bolsa30'); }
      if (run.__pbTera?.fin && run.__pbTeraVisto !== run.__pbTera.fin) { run.__pbTeraVisto = run.__pbTera.fin; cont('tera'); }
      if (run.__pbDiario?.ok && !run.__pbDiarioC) { run.__pbDiarioC = true; cont('diario'); }
      // Tienda: lo comprado entra en la bolsa al empezar.
      if (p.pbTienda && Object.keys(p.pbTienda).length && window.PB_BOLSA && !run.__pbTiendaHecha) {
        run.__pbTiendaHecha = true;
        for (const [k, n] of Object.entries(p.pbTienda)) window.PB_BOLSA.dar(k, n);
        p.pbTienda = {}; guardar();
        try { run.ui.toast('🛒 Tus compras de la Tienda de Polvo están en la bolsa', null); } catch {}
      }
    }
    if (run.state !== 'over' || finVisto === run || run.mode === 'duel' || run.__pbSala) return;
    finVisto = run;
    const sp = run.startSpecies, s = (p.pbStatsPk ??= {})[sp] ??= { p: 0, v: 0, t: 0, k: 0, d: 0 };
    s.p++; if (run.victory) { s.v++; cont('victorias'); if ((run.__pbMinHp ?? 0) >= 0.5) cont('intocable'); }
    s.t = Math.max(s.t, Math.round(run.time ?? 0)); s.k = Math.max(s.k, run.stats?.kills ?? 0); s.d = Math.max(s.d, Math.round(run.stats?.damage ?? 0));
    revisar(run);
  }, 500);
  // Logros que se cumplen fuera de partida (medallas, huevos…).
  setInterval(() => { if (!window.__pbRun || window.__pbRun.state === 'over') revisar(null); }, 5000);

  // Ficha de la Pokédex: estadísticas del Pokémon.
  setInterval(() => {
    const info = document.querySelector('.dx-info'), on = document.querySelector('.dx-tile.on img');
    if (!info || !on) return;
    const sp = +((on.getAttribute('src') ?? '').match(/portraits\/(\d+)\.png/)?.[1] ?? 0), s = P()?.pbStatsPk?.[sp];
    let d = info.querySelector('.pb-statpk'); const k = JSON.stringify([sp, s]);
    if (d?.dataset.k === k) return;
    if (!s) { d?.remove(); return; }
    if (!d) { d = document.createElement('div'); d.className = 'pb-statpk'; d.style.cssText = 'margin:8px 0;padding:6px 8px;border-radius:10px;background:rgba(80,140,255,.15);font:700 12px system-ui,sans-serif;line-height:1.5'; info.append(d); }
    d.dataset.k = k;
    const f = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    d.innerHTML = `📊 Récords con este Pokémon<br>Partidas: <b>${s.p}</b> · Victorias: <b>${s.v}</b> · Mejor tiempo: <b>${Math.floor(s.t / 60)}:${String(s.t % 60).padStart(2, '0')}</b><br>Más bajas: <b>${f(s.k)}</b> · Más daño: <b>${f(s.d)}</b>`;
  }, 700);

  // Laboratorio: Logros y Tienda de Polvo.
  const TIENDA = [
    ['bayas', 'Pack de bayas (5 Aranja + 3 Zidra)', 300, { oran: 5, sitrus: 3 }],
    ['hiper', '3 Hiperpociones', 450, { 'pb-hiper': 3 }],
    ['restaurar', '1 Restaurar Todo', 600, { 'pb-restaurar': 1 }],
    ['apuro', 'Pack de apuro (Lichi, Gonlan, Aslac, Zonlan)', 500, { liechi: 1, ganlon: 1, salac: 1, lansat: 1 }],
    ['huevo', 'Huevo para la Incubadora', 800, null]
  ];
  setInterval(() => {
    const lab = document.querySelector('.screen.lab'), p = P();
    if (!lab || !p) return;
    const k = JSON.stringify([p.stardust, p.pbTienda, p.pbLogros, p.pbHuevos?.cola?.length]);
    let caja = lab.querySelector('.pb-lab-tienda');
    if (caja?.dataset.k === k) return;
    if (!caja) {
      const ref = lab.querySelector('.pb-lab-auto') ?? lab.querySelector('.pb-lab-huevos') ?? lab.querySelector('.pb-lab-oro') ?? lab.querySelector('.scr-head');
      if (!ref) return;
      caja = document.createElement('div'); caja.className = 'pb-lab-oro pb-lab-tienda'; caja.style.cssText = 'background:#2a1a3a;color:#f0e0ff;flex-wrap:wrap;gap:6px';
      ref.after(caja);
    }
    caja.dataset.k = k; caja.replaceChildren();
    const s = document.createElement('span');
    const pend = Object.entries(p.pbTienda ?? {}).map(([x, n]) => `${n}× ${window.PB_BOLSA?.B?.[x]?.n ?? x}`).join(', ');
    s.innerHTML = `🛒 Tienda de Polvo <small>· lo comprado entra en tu bolsa al empezar la próxima partida${pend ? ` · pendiente: ${pend}` : ''}</small>`;
    caja.append(s);
    for (const [id, nom, precio, que] of TIENDA) {
      const b = document.createElement('button'); b.className = 'btn small'; b.textContent = `${nom} · ${precio}`;
      b.disabled = (p.stardust ?? 0) < precio;
      b.onclick = () => {
        if ((p.stardust ?? 0) < precio) return;
        if (que) { p.pbTienda ??= {}; for (const [x, n] of Object.entries(que)) p.pbTienda[x] = Math.min(30, (p.pbTienda[x] ?? 0) + n); }
        else { const h = p.pbHuevos ??= { h: [], cola: [] }; const regs = ['kanto', 'johto', 'hoenn', 'sinnoh']; const huevo = { reg: regs[Math.floor(Math.random() * regs.length)], need: 1500, k: 0 }; if (h.h.length < 3) h.h.push(huevo); else if (h.cola.length < 3) h.cola.push(huevo); else return; }
        p.stardust -= precio; guardar();
      };
      caja.append(b);
    }
    const hechos = p.pbLogros ?? [];
    const lg = document.createElement('details'); lg.style.cssText = 'width:100%;margin-top:4px';
    lg.innerHTML = `<summary>🏆 Logros (${hechos.length}/${LOGROS.length})</summary>` + LOGROS.map(([id, nom, desc, premio]) => `<div style="opacity:${hechos.includes(id) ? 1 : .7}">${hechos.includes(id) ? '✅' : '⬜'} <b>${nom}</b> — ${desc} <small>(+${premio})</small></div>`).join('');
    caja.append(lg);
  }, 700);
})();
