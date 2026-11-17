/* Subversión propia (moportor6, 1.08): Teracristalización, solo en PokéBonk Lite (idea de Pokémon Survivors, de
   pedrobarretto, con su permiso para uso privado).
   - Desde el nivel 15, una vez por zona: botón TERA junto a MEGA y DYNAMAX. Dura 3 minutos y se puede combinar con ellas.
   - Teratipo: el primer tipo de tu Pokémon, o el que elijas en el Laboratorio (gratis, por Pokémon).
   - Efecto: +20 % de daño, +10 de armadura, y tus ataques de tu teratipo hacen ×1,25 más. Corona de cristal de su color.
   - Jefes finales (fases.js): se teracristalizan al bajar del 85 % de PS (+20 % daño).
   Ganchos: player.recompute y combat.hit (envueltos). */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const TIPOS = ['normal', 'fire', 'water', 'grass', 'electric', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'];
  const NOM = { normal: 'Normal', fire: 'Fuego', water: 'Agua', grass: 'Planta', electric: 'Eléctrico', ice: 'Hielo', fighting: 'Lucha', poison: 'Veneno', ground: 'Tierra', flying: 'Volador', psychic: 'Psíquico', bug: 'Bicho', rock: 'Roca', ghost: 'Fantasma', dragon: 'Dragón', dark: 'Siniestro', steel: 'Acero', fairy: 'Hada' };
  const COL = { normal: 0xc8c8a8, fire: 0xff7a3a, water: 0x4a9aff, grass: 0x6ad84a, electric: 0xffd23a, ice: 0x8ae8ff, fighting: 0xd84a3a, poison: 0xb05ad8, ground: 0xd8b05a, flying: 0xa8a8ff, psychic: 0xff5a9a, bug: 0xa8c83a, rock: 0xb8a04a, ghost: 0x7a5ab8, dragon: 0x7a4aff, dark: 0x5a4a3a, steel: 0xb8b8d0, fairy: 0xffa8e8 };
  const NV = 15, DURA = 180;
  const meta = () => window.__pbMeta;
  const elegido = sp => meta()?.profile?.pbTera?.[sp];
  const tipoDe = run => elegido(run.startSpecies) ?? run.player?.types?.[0] ?? TP[run.startSpecies]?.[0] ?? 'normal';
  const TP = {};
  fetch('./data/pokemon.json').then(r => r.json()).then(l => l.forEach(x => { TP[x.id] = x.types; })).catch(() => {});
  window.PB_TERA = { TIPOS, NOM, COL, tipos: sp => TP[sp] ?? [] };

  const st = run => run.__pbTera ??= { fin: 0, zona: -1 };
  const activo = run => !!run && (run.time ?? 0) < (run.__pbTera?.fin ?? 0);
  const puede = run => run && run.state === 'play' && (run.player?.level ?? 1) >= NV && !activo(run) && st(run).zona !== (run.stage ?? 1);

  const activar = () => {
    const run = window.__pbRun;
    if (!puede(run)) return;
    const s = st(run), t = tipoDe(run), p = run.player;
    s.zona = run.stage ?? 1; s.fin = (run.time ?? 0) + DURA; s.tipo = t;
    try { p.recompute(); } catch {}
    try {
      run.ui.banner('¡Teracristalización!', `Teratipo ${NOM[t] ?? t}: +20 % de daño, +10 armadura y ×1,25 a tus ataques ${NOM[t] ?? t}`, '#' + COL[t].toString(16).padStart(6, '0'), { species: p.speciesId });
      run.vfx.ring(p.pos.x, p.pos.y + 0.2, p.pos.z, 5, COL[t], 0.7);
      run.vfx.burst(p.pos.x, p.pos.y + 2.5, p.pos.z, COL[t], 30, 7, 0, 0.6, 0.8);
      run.audio.power();
    } catch {}
  };

  setInterval(() => {
    const run = window.__pbRun, p = run?.player;
    if (!run || !p) return;
    if (!p.__pbTera && typeof p.recompute === 'function') {
      const rc = p.recompute;
      p.recompute = function (...a) {
        const r = rc.apply(this, a);
        try { if (activo(run)) { this.stats.damage *= 1.2; this.stats.armor += 10; } } catch {}
        return r;
      };
      p.__pbTera = true;
    }
    const c = run.combat;
    if (c && !c.__pbTera) {
      const h = c.hit;
      c.hit = function (j, dmg, o) { try { if (activo(run) && o?.type && o.type === run.__pbTera?.tipo) dmg *= 1.25; } catch {} return h.call(this, j, dmg, o); };
      c.__pbTera = true;
    }
    const s = run.__pbTera;
    if (s?.fin && !activo(run) && !s.fuera) { s.fuera = true; try { p.recompute(); run.ui.toast('La teracristalización termina', null); } catch {} }
    if (activo(run)) s.fuera = false;
    // Corona de cristal: chispas de su color sobre la cabeza.
    if (activo(run) && run.state === 'play' && Math.random() < 0.5) try {
      const col = COL[s.tipo] ?? 0xffffff;
      run.vfx.burst(p.pos.x, p.pos.y + 2.4, p.pos.z, col, 3, 2, 0, 0.35, 0.4);
    } catch {}
    pintar(run);
  }, 150);

  // ---------- botón TERA (junto a MEGA y DYNAMAX) ----------
  const css = document.createElement('style');
  css.textContent = `.pb-tera{width:64px;height:64px;border-radius:50%;border:3px solid #fff;background:radial-gradient(circle at 35% 30%,#fff 0 12%,var(--tc,#8ae8ff) 13% 60%,#2a4a7a 100%);color:#fff;font:900 12px system-ui,sans-serif;text-shadow:0 1px 2px #000;box-shadow:0 3px 10px rgba(0,0,0,.4);touch-action:manipulation;cursor:pointer;margin-top:6px;pointer-events:auto}
.pb-tera:disabled{filter:grayscale(.85) brightness(.75)}.pb-tera.on{animation:pbtera 1s infinite}.pb-tera small{display:block;font-size:9px;font-weight:800}
@keyframes pbtera{50%{transform:scale(1.08);box-shadow:0 0 18px var(--tc,#8ae8ff)}}`;
  document.head.append(css);
  let btn = null;
  const pintar = run => {
    const mx = document.querySelector('.pb-mx');
    if (!mx) return;
    if (!btn || !btn.isConnected) {
      btn = document.createElement('button');
      btn.className = 'pb-tera';
      let last = 0;
      const go = e => { e.stopPropagation(); e.preventDefault?.(); const t = performance.now(); if (t - last < 400) return; last = t; activar(); };
      btn.addEventListener('pointerdown', go);
      btn.addEventListener('click', e => e.stopPropagation());
      mx.append(btn);
    }
    const t = tipoDe(run), lv = run.player?.level ?? 1;
    btn.style.setProperty('--tc', '#' + (COL[t] ?? 0x8ae8ff).toString(16).padStart(6, '0'));
    btn.hidden = run.duel || run.mode === 'duel';
    btn.disabled = !puede(run) && !activo(run);
    btn.classList.toggle('on', activo(run));
    const resto = Math.max(0, Math.ceil((run.__pbTera?.fin ?? 0) - (run.time ?? 0)));
    btn.innerHTML = activo(run) ? `TERA<small>${Math.floor(resto / 60)}:${String(resto % 60).padStart(2, '0')}</small>` : lv < NV ? `TERA<small>Nv. ${NV}</small>` : st(run).zona === (run.stage ?? 1) ? 'TERA<small>usada</small>' : `TERA<small>${NOM[t] ?? t}</small>`;
  };
  window.addEventListener('keydown', e => { if (e.code === 'KeyT' && !e.repeat) activar(); });

  // ---------- Laboratorio: elegir teratipo ----------
  setInterval(() => {
    const lab = document.querySelector('.screen.lab'), m = meta();
    if (!lab || !m) return;
    const sp = window.PB_LAB?.cur?.();
    let caja = lab.querySelector('.pb-lab-tera');
    const t = elegido(sp);
    const k = `${sp}|${t}`;
    if (caja && caja.dataset.k === k) return;
    if (!caja) {
      const ref = lab.querySelector('.pb-lab-mald') ?? lab.querySelector('.pb-lab-nat') ?? lab.querySelector('.pb-lab-oro') ?? lab.querySelector('.scr-head');
      if (!ref) return;
      caja = document.createElement('div');
      caja.className = 'pb-lab-oro pb-lab-tera';
      caja.style.cssText = 'background:#1a3a5a;color:#d8f4ff';
      ref.after(caja);
    }
    caja.dataset.k = k;
    caja.replaceChildren();
    const s = document.createElement('span');
    s.innerHTML = `💎 Teratipo: <b>${t ? NOM[t] : 'su primer tipo'}</b> <small>· TERA desde el Nv. ${NV}, una vez por zona, 3 min</small>`;
    const sel = document.createElement('select');
    sel.style.cssText = 'font:700 13px system-ui;border-radius:8px;padding:2px 4px';
    sel.innerHTML = `<option value="">Su primer tipo</option>` + TIPOS.map(x => `<option value="${x}" ${x === t ? 'selected' : ''}>${NOM[x]}</option>`).join('');
    sel.onchange = () => { const p = m.profile; p.pbTera ??= {}; if (sel.value) p.pbTera[sp] = sel.value; else delete p.pbTera[sp]; try { m.save(); } catch {} };
    caja.append(s, sel);
  }, 500);
})();
