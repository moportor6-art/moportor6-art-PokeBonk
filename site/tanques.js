/* Subversión propia (moportor6, 1.14): identidad de tanque y Vida Esfera nueva, solo en PokéBonk Lite.
   - Tanques: familias (de todas las generaciones) cuya forma final tiene, en los juegos originales, mucho de su total
     de estadísticas en PS + Defensa + Def. Especial (≥ 56,5 % «Tanque», ≥ 66 % «Muralla»). Las etapas previas lo son si
     evolucionan en un tanque (Happiny, Munchlax, Wooper…).
       Tanque: +15 % PS, +8 armadura y regeneras un 0,15 % de tus PS máx. por segundo.
       Muralla: +25 % PS, +15 armadura y 0,25 %/s.
     Sinergia por tipo (como los muros del competitivo):
       Veneno → Desgaste tóxico: quien te golpea queda envenenado.
       Acero / Roca → Púas: devuelves daño a quien te golpea (armadura de púas del juego).
       Planta → Drenadoras: +2 % (Muralla +3 %) de robo de vida.
       Resto → Restos: +10 % (Muralla +20 %) a toda tu curación.
   - Vida Esfera (el dato está en defineProperty-…js): ya no quita PS máximos; mientras golpeas pierdes un 0,2 % de tus
     PS máx. por segundo por cada copia, sin bajar de 1 PS.
   Ganchos: player.recompute, player.hurt, combat.$xj1ewj (estado por contacto, como las habilidades de contacto). */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const TIER = new Map(), TIPOS = {};
  fetch('./data/pokemon.json').then(r => r.json()).then(l => {
    // Cada especie cuenta con sus formas finales (si se ramifica, la más resistente); una forma final, consigo misma.
    const hijos = new Map(), bulk = new Map();
    for (const x of l) {
      TIPOS[x.id] = x.types;
      const st = x.stats, b = Object.values(st).reduce((a, v) => a + v, 0);
      bulk.set(x.id, (st.hp + st.def + st.spd) / b);
      if (x.evoFrom) (hijos.get(x.evoFrom) ?? hijos.set(x.evoFrom, []).get(x.evoFrom)).push(x.id);
    }
    const fin = (id, n = 0) => { const h = hijos.get(id); return !h?.length || n > 4 ? bulk.get(id) ?? 0 : Math.max(...h.map(c => fin(c, n + 1))); };
    for (const x of l) { const v = fin(x.id); if (v >= 0.565) TIER.set(x.id, v >= 0.66 ? 2 : 1); }
  }).catch(() => {});
  const NOM = ['', 'Tanque', 'Muralla'];
  const sin = sp => { const t = TIPOS[sp] ?? []; return t.includes('poison') ? 'veneno' : t.includes('steel') || t.includes('rock') ? 'puas' : t.includes('grass') ? 'planta' : 'restos'; };
  const TXT = { veneno: 'Desgaste tóxico: quien te golpea queda envenenado', puas: 'Púas: devuelves daño a quien te golpea', planta: 'Drenadoras: robo de vida', restos: 'Restos: más curación' };
  window.PB_TANQUE = sp => TIER.get(sp) ?? 0;

  setInterval(() => {
    const run = window.__pbRun, p = run?.player;
    if (!run || !p || run.mode === 'duel') return;
    if (!p.__pbTanque && typeof p.recompute === 'function') {
      const rc = p.recompute;
      p.recompute = function (...a) {
        const r = rc.apply(this, a);
        try {
          const t = TIER.get(this.speciesId) ?? 0;
          if (t) {
            const s = this.stats, k = sin(this.speciesId);
            s.maxHp *= t === 2 ? 1.25 : 1.15; s.armor += t === 2 ? 15 : 8;
            if (k === 'puas') s.thorns = (s.thorns ?? 0) + (t === 2 ? 8 : 4);
            if (k === 'planta') s.lifesteal = (s.lifesteal ?? 0) + (t === 2 ? 0.03 : 0.02);
            if (k === 'restos') s.healing = (s.healing ?? 1) * (t === 2 ? 1.2 : 1.1);
            this.maxHp = s.maxHp; if (this.hp > this.maxHp) this.hp = this.maxHp;
          }
        } catch {}
        return r;
      };
      const h = p.hurt;
      p.hurt = function (dmg, tipo, src, ...a) {
        const r = h.call(this, dmg, tipo, src, ...a);
        try {
          if (r && src >= 0 && (TIER.get(this.speciesId) ?? 0) && sin(this.speciesId) === 'veneno') {
            const st = run.__pbTq ??= new Map(), t = run.time ?? 0;
            if (!(st.get(src) > t)) { st.set(src, t + 1); run.combat.$xj1ewj?.(src, 'poison', Math.max(dmg, 10) * 2); }
          }
        } catch {}
        return r;
      };
      p.__pbTanque = true;
      try { p.recompute(); } catch {}
    }
    // Aviso al empezar.
    const t = TIER.get(p.speciesId) ?? 0;
    if (t && run.__pbTqAviso !== p.speciesId && run.state === 'play') {
      run.__pbTqAviso = p.speciesId;
      try { run.ui.toast(`🛡️ ${NOM[t]}: +${t === 2 ? 25 : 15}% PS, +${t === 2 ? 15 : 8} armadura, regeneras ${t === 2 ? '0,25' : '0,15'}%/s · ${TXT[sin(p.speciesId)]}`, null); } catch {}
      try { p.recompute(); } catch {}
    }
  }, 300);

  // Regeneración de tanque y retroceso de la Vida Esfera (cada 0,25 s de juego).
  let ult = 0, dano = 0;
  setInterval(() => {
    const run = window.__pbRun, p = run?.player;
    if (!run || !p || run.state !== 'play' || p.dead) return;
    const ahora = run.time ?? 0, dt = Math.min(0.5, Math.max(0, ahora - ult)); ult = ahora;
    if (!dt) return;
    const t = TIER.get(p.speciesId) ?? 0;
    if (t && p.hp < p.maxHp) try { p.heal(p.maxHp * (t === 2 ? 0.0025 : 0.0015) * dt); } catch {}
    const n = p.items?.get?.('life-orb') ?? 0, d = run.stats?.damage ?? 0;
    if (n && d > dano && p.hp > 1) p.hp = Math.max(1, p.hp - p.maxHp * 0.002 * n * dt);
    dano = d;
  }, 250);
})();
