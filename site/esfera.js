/* Subversión propia (moportor6, 1.42): «Esfera elemental», mejora de pago del Laboratorio para todos los Pokémon,
   solo en PokéBonk Lite. 8 niveles; cada uno:
   - +5 % de daño a todos tus ataques (stats.damage, tras cada recompute del jugador);
   - +8 % de probabilidad de que tus ataques con estado lo apliquen (quemar, envenenar, dormir, paralizar, congelar…),
     así Typhlosion quema más a menudo con sus llamas;
   - una esfera gira a tu alrededor y cambia de elemento: Fuego (quema), Veneno (envenena), Psíquico (duerme),
     Eléctrico (paraliza) y Hielo (congela); con nivel 5 o más añade también tu propio tipo. Su daño usa la fórmula
     normal de ataques especiales (escala con tu Pokémon) y crece un 12 % por nivel.
   Ganchos: PB_LAB.defs (como lab-extra.js), player.recompute y combat.hit (instancias). */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const ID = 'pb-esfera', MAX = 8;
  const DEF = { id: ID, name: 'Esfera elemental', desc: '+5 % de daño a todo y +8 % de aplicar estados por nivel. Una esfera gira a tu alrededor y quema, envenena, duerme, paraliza y congela.', icon: 'life-orb', max: MAX, cost: n => Math.round(500 * 1.6 ** n) };
  const EL = [['fire', 'burn', 0xff7a3a], ['poison', 'poison', 0xb05ad8], ['psychic', 'sleep', 0xff5a9a], ['electric', 'paralysis', 0xffd23a], ['ice', 'freeze', 0x8ae8ff]];
  const COL = { normal: 0xe8e8d0, fire: 0xff7a3a, water: 0x4a9aff, grass: 0x6ad84a, electric: 0xffd23a, ice: 0x8ae8ff, fighting: 0xd84a3a, poison: 0xb05ad8, ground: 0xd8b05a, flying: 0xa8a8ff, psychic: 0xff5a9a, bug: 0xa8c83a, rock: 0xb8a04a, ghost: 0x7a5ab8, dragon: 0x7a4aff, dark: 0x5a4a6a, steel: 0xb8b8d0, fairy: 0xffa8e8 };
  let TIPOS = {};
  fetch('./data/pokemon.json').then(r => r.json()).then(l => { for (const x of l) TIPOS[x.id] = x.types; }).catch(() => {});
  const nivel = run => { try { const sp = run?.startSpecies; return sp == null ? 0 : window.__pbMeta?.lab?.(ID, sp) ?? 0; } catch { return 0; } };

  setInterval(() => {
    const L = window.PB_LAB;
    if (L?.defs?.length && !L.defs.some(x => x.id === ID)) L.defs.push(DEF);
    const run = window.__pbRun, p = run?.player;
    if (!p || run.mode === 'duel') return;
    const n = nivel(run);
    if (!n) return;
    if (!p.__pbEsf) {
      p.__pbEsf = true;
      const rc = p.recompute.bind(p);
      p.recompute = (...a) => { const r = rc(...a); try { p.stats.damage *= 1 + 0.05 * nivel(run); } catch {} return r; };
      try { p.recompute(); } catch {}
    }
    const C = run.combat;
    if (C && !C.__pbEsf) {
      C.__pbEsf = true;
      const hit = C.hit.bind(C);
      C.hit = (j, d, o, ...x) => {
        if (o?.status && o.statusChance > 0 && !o.__pbEsf) { const k = nivel(run); if (k) o = { ...o, statusChance: Math.min(1, o.statusChance * (1 + 0.08 * k)) }; }
        return hit(j, d, o, ...x);
      };
    }
  }, 500);

  // La esfera: gira a 2,2 m, golpea lo que toca (cada enemigo, como mucho cada 0,6 s) y cambia de elemento en cada golpe.
  let ang = 0, idx = 0, ult = 0;
  const golpeados = new Map();
  setInterval(() => {
    const run = window.__pbRun, p = run?.player;
    if (!p || run.state !== 'play' || p.dead || run.mode === 'duel') return;
    const n = nivel(run); if (!n) return;
    const now = run.time ?? 0, dt = Math.min(0.2, Math.max(0, now - ult)); ult = now;
    ang += dt * 2.6;
    const x = p.pos.x + Math.cos(ang) * 2.2, z = p.pos.z + Math.sin(ang) * 2.2, y = p.pos.y + 1.1;
    const lista = n >= 5 ? [...EL, ...((TIPOS[p.speciesId] ?? []).slice(0, 1).map(t => [t, null, COL[t] ?? 0xffffff]))] : EL;
    const [tipo, estado, col] = lista[idx % lista.length];
    try { run.vfx.burst(x, y, z, col, 5, 0.8, 32, 0.6, 0.4); } catch {}
    const E = run.enemies;
    for (let j = 0; j < (E?.alive?.length ?? 0); j++) {
      if (!E.alive[j] || E.dying?.[j] > 0) continue;
      const dx = E.x[j] - x, dz = E.z[j] - z;
      if (dx * dx + dz * dz > 2.9) continue;
      const k = `${j}:${E.gen[j]}`; if ((golpeados.get(k) ?? -9) > now - 0.6) continue;
      golpeados.set(k, now);
      try { run.combat.hit(j, 2.2 * (1 + 0.12 * n), { type: tipo, cls: 'special', status: estado ?? undefined, statusChance: estado ? 0.35 + 0.05 * n : 0, knock: 0.5, __pbEsf: true }); } catch {}
      idx++;
    }
    if (golpeados.size > 400) for (const [k, t] of golpeados) if (t < now - 2) golpeados.delete(k);
  }, 50);
})();
