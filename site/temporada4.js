/* Subversión 1.63: Temporada 4 (pruebas). Zona aparte para probar el contenido de la Temporada 4 de PokéBonk (0.10.13,
   de Charcher, replicado con su permiso) antes de pasarlo al juego normal o al modo historia.
   - Lago de la Furia: forma `lake` portada al motor (menus-…js: pbLkGen, generateLake, placeLakeEnv y el sombreado LAKE),
     con sus texturas, atlas y modelos originales (assets/env/furia, assets/models/furia_*.glb) y los datos del mapa tal cual.
   - El santuario de Suicune usa por ahora la arena de la costa teñida (la arena `rage` original llega después).
   La región va desbloqueada desde el principio para poder probarla. */
(() => {
  const FURIA = {"size": 400, "shape": "lake", "types": ["water", "dragon", "poison"], "late": ["dark", "flying"], "residents": [129, 60, 118, 194, 183, 147, 116, 223, 170, 109, 88, 19, 41, 198, 228, 21, 54], "sky": [3824250, 10139848], "fog": 8034472, "fogNear": 50, "fogFar": 210, "light": 0.92, "sun": 15266047, "hemiGround": 3824202, "ground": [4885066, 5937746, 3832386, 3041850], "path": 10127978, "cliff": [6975608, 5528162, 8817812], "water": 0, "waterColor": 2779786, "props": ["tree", "bush", "rock", "tree"], "propDensity": 1, "weather": ["rain", "clear", "rain"], "morning": {"motes": "spray"}, "bosses": [195, 171, 230], "legendaries": [245], "guardians": [[195, 224], [171, 226], [130, 230, 169]], "totems": [[184, 186, 195, 119], [171, 224, 229, 198], [148, 199, 110, 226]], "summoners": [[184, 195], [224, 171], [130, 229]], "music": {"root": 52, "scale": [0, 2, 3, 5, 7, 8, 10], "bpm": 104, "mood": "tense"}, "tex": {"top": [4885066, 5937746, 3832386], "detail": "grass", "side": [6975608, 8817812, 3817544], "lip": 4885066, "path": [10127978, 6969922], "leaf": 3045962, "bark": 4864558, "rock": 6975608, "accent": 16726602, "deco": [0, 1, 2, 3, 4]}};
  const ZONAS = [{"sky": [2767450, 8030880], "fog": 5925504, "fogNear": 46, "fogFar": 190, "light": 0.86, "sun": 13688048, "hemiGround": 2767434, "sunDir": [0.6, 0.76, 0.2], "sunH": 0.4, "tint": [0.94, 0.97, 1.04], "clouds": [0.78, 0.82, 0.9], "cover": 0.25, "glow": 9085128, "glowK": 0.2, "stars": 0, "motes": "spray"}, {"sky": [658978, 3807790], "fog": 1710638, "fogNear": 40, "fogFar": 170, "light": 0.78, "sun": 16756912, "hemiGround": 1710634, "sunDir": [0.45, 0.8, -0.25], "sunH": 0.45, "tint": [1, 0.9, 0.96], "clouds": [0.6, 0.5, 0.62], "cover": 0.15, "glow": 16726602, "glowK": 0.3, "stars": 0.3, "motes": "drips"}];
  window.PB_REGIONES?.registrar({
    id: 't4', name: 'Temporada 4 (pruebas)', gen: 11, genLabel: 'Pruebas', especial: true, min: 1, max: 251,
    emblem: 245, c: '#16243a', c2: '#ff3a4a',
    liga: [],
    contadores: { derrotas: 't4', local: 't4_local', runs: 'runs_t4' },
    mapas: [{
      id: 'furia', base: 'iris', color: 0, k: 0,
      name: "Lago de la Furia", desc: "Un lago enorme bajo la tormenta. Una señal extraña enfurece a sus Pokémon... y algo rojo nada en el fondo.",
      unlock: 'Zona de pruebas de la Temporada 4', zonas: ["Tarde de tormenta", "Noche de la Furia"], zonasDatos: ZONAS,
      santuario: { de: 'coast', name: "El Ojo del Lago", heart: "Corazón de la tormenta", legendaries: [245], color: 16726602, k: .45, music: {"root": 50, "scale": [0, 2, 3, 5, 7, 8, 10], "bpm": 132, "mood": "tense"} },
      datos: FURIA
    }]
  });
  // Zona de pruebas: el mapa se puede jugar sin completar nada antes.
  const abrir = setInterval(() => {
    const P = window.__pbMeta?.profile; if (!P?.biomes) return;
    if ((P.biomes.furia ?? -1) < 0) P.biomes.furia = 0;
    clearInterval(abrir);
  }, 500);
})();

/* Subversión 1.64: mecánica del Lago de la Furia portada casi línea a línea de la clase original de la 0.10.13
   (antenas Rocket, furia y evolución de los salvajes, Apagón, La Gran Pesca de Magikarp y Gyarados enfurecido).
   El bucle de la partida (main-…js) llama a PB_T4.update justo después del Valle Iris, como en el original, y
   PB_T4.limpiar al cerrar. Las luces de las antenas se dibujan con partículas en vez de esferas. */
(() => {
  const bm = 34, xm = 2.5, Sm = 45, Cm = 20, wm = 10, Tm = 1.35, Em = 8, Dm = [109, 88, 19, 41], Om = [110, 89], km = .5, Am = 90, jm = 420,
    Mm = 30, Nm = 24, Pm = [8, 12], Fm = 2.6, Im = [5.5, 8], Lm = 129, Rm = 130, zm = 4, Bm = 16726602, Vm = 4897023, Hm = 10132136;
  const K = { Elite: 1, Alpha: 2, Boss: 4, Capture: 128, Shiny: 2048, Totem: 4096, Summoner: 8192, Treasure: 16384, Object: 32768, Remote: 65536 };
  const L = () => window.__pbT4lib;
  class Furia {
    constructor(run) { this.run = run; this.terrainRef = null; this.plan = null; this.ants = []; this.egen = new Int32Array(); this.enr = new Uint8Array(); this.dwell = new Float32Array(); this.tickT = 0; this.fxT = 0; this.blackT = 0; this.tuneHurtHp = -1; this.ballGiven = false; this.fishAt = Infinity; this.fishT = 0; this.fish = []; this.flockT = 0; this.goldDone = false; this.gyra = 0; }
    get N() { return L().F; }
    setup() {
      const e = this.run, t = e.terrain;
      this.clear(); this.plan = t.lake;
      if (!this.plan || e.sanctuary) { this.fishAt = Infinity; return; }
      const N = this.N;
      this.ants = this.plan.antennas.map(a => ({ x: a.x, z: a.z, y: a.y, state: 'rocket', t: 0, cd: 0, tune: 0, wave: N.range(0, 6) }));
      this.fishAt = e.endless ? e.stageTime + 300 * N.range(.6, 1.2) : N.chance(km) ? N.range(Am, jm) : Infinity;
      this.ensure();
    }
    ensure() { const e = this.run.enemies.alive.length; if (this.egen.length !== e) { this.egen = new Int32Array(e); this.enr = new Uint8Array(e); this.dwell = new Float32Array(e); } }
    update(e) {
      const t = this.run;
      if (t.biome?.id !== 'furia' || t.rifts?.isInside) return;
      if (this.terrainRef !== t.terrain) { this.terrainRef = t.terrain; this.setup(); }
      if (!this.plan || t.sanctuary) return;
      const n = !t.boss?.alive && !t.mewtwo?.active && !t.events?.active && t.state === 'play';
      if (t.stageTime >= this.fishAt && n && this.fishT <= 0) this.startFishing();
      this.tickLamps(e); this.tickTuning(e); this.tickFishing(e);
      this.tickT -= e; if (this.tickT <= 0) { this.tickT = .25; this.tickHorde(.25); }
    }
    get blackout() { return this.blackT > 0; }
    tickLamps(e) {
      const t = this.run, n = t.stage >= 3, S = L().N;
      this.blackT -= e;
      for (const r of this.ants) {
        r.cd -= e;
        if (r.state === 'tuned') { r.t -= e; if (r.t <= 0) { r.state = 'rocket'; r.cd = Cm; t.ui.toast('Una antena vuelve a emitir la señal del Rocket', null); } }
        const vis = r.state === 'tuned' || this.blackout || Math.sin(t.time * (n ? 5 : 3) + r.x) > -.4;
        if (vis) t.vfx.add.spawn({ x: r.x, y: r.y + 14.5, z: r.z, life: .05, size: 1.6, endSize: 1.6, color: this.blackout ? Hm : r.state === 'tuned' ? Vm : Bm, shape: S.Soft, glow: .9 });
      }
      this.fxT -= e; if (this.fxT > 0) return; this.fxT = .25;
      const r = t.player.pos, i = t.terrain;
      for (const a of this.ants) {
        if (Math.hypot(a.x - r.x, a.z - r.z) > 94) continue;
        const c = this.blackout ? Hm : a.state === 'tuned' ? Vm : Bm;
        for (let k = 0; k < 36; k++) { const o = k / 36 * Math.PI * 2, s = a.x + Math.cos(o) * bm, z = a.z + Math.sin(o) * bm; if ((s - r.x) ** 2 + (z - r.z) ** 2 > 4900 || !i.inBounds(s, z, 1)) continue; t.vfx.groundN.spawn({ x: s, y: i.surface(s, z) + .12, z, life: .32, size: 1.3, endSize: 1.3, color: c, shape: S.Soft, rot: 0 }); }
        a.wave += .25; const w = a.wave % 6;
        if (w < 3 && !this.blackout) { const o = w / 3 * bm; for (let k = 0; k < 24; k++) { const s = k / 24 * Math.PI * 2 + a.x, x = a.x + Math.cos(s) * o, z = a.z + Math.sin(s) * o; if ((x - r.x) ** 2 + (z - r.z) ** 2 > 3600 || !i.inBounds(x, z, 1)) continue; t.vfx.groundN.spawn({ x, y: i.surface(x, z) + .14, z, life: .3, size: .9, endSize: .9, color: c, shape: S.Soft, rot: 0 }); } }
      }
    }
    tickTuning(e) {
      const t = this.run, n = t.player, r = n.pos; let i = null;
      for (const a of this.ants) if ((a.x - r.x) ** 2 + (a.z - r.z) ** 2 < 5.2 * 5.2 && Math.abs(r.y - a.y) < 4) i = a;
      for (const a of this.ants) if (a !== i) a.tune = 0;
      if (!i || t.state !== 'play' || n.dead) { this.tuneHurtHp = -1; return; }
      const P = s => t.ui.$6n01od(s);
      if (i.state === 'tuned') return P(`Antena en tu frecuencia: ${Math.ceil(i.t)} s`);
      if (i.cd > 0) return P(`La antena se está recalentando (${Math.ceil(i.cd)} s)`);
      const a = t.input.down('KeyE');
      if (!a || i.tune <= 0) { if (!a && i.tune > 0) i.tune = 0; if (!a) { P('[E] Mantén pulsado para sintonizar la antena'); this.tuneHurtHp = -1; return; } }
      if (this.tuneHurtHp < 0) this.tuneHurtHp = n.hp;
      if (this.tuneHurtHp - n.hp > n.maxHp * .08) { i.tune = 0; this.tuneHurtHp = -1; t.ui.popup(r.x, r.y + 2.4, r.z, '¡Interrumpido!', '#ff8a8a', .9); return; }
      this.tuneHurtHp = Math.max(this.tuneHurtHp, n.hp); i.tune += e;
      t.vfx.staticRing(i.x, i.y + .1, i.z, 3 + i.tune / xm * 2.2, Vm, .8);
      P(`Sintonizando… ${Math.min(99, Math.round(i.tune / xm * 100))} %`);
      if (i.tune >= xm) { i.tune = 0; this.tuneHurtHp = -1; this.setTuned(i, true); }
    }
    setTuned(e, t) {
      const n = this.run, N = this.N, S = L().N;
      e.state = 'tuned'; e.t = Sm; e.tune = 0;
      n.vfx.ring(e.x, e.y + .2, e.z, bm * .5, Vm, .8); n.vfx.flash(e.x, e.y + 14, e.z, 10148095, 10, .3); n.audio.power();
      n.ui.banner('¡Antena sintonizada!', 'Los Pokémon salvajes de su zona quedan confusos: llévalos hasta ella', '#4ab8ff');
      if (!t) { this.checkBlackout(); return; }
      const i = n.stage >= 2 ? Dm.concat(Om) : Dm, a = N.int(2, 4), o = n.terrain;
      for (let k = 0; k < a; k++) { const g = N.range(0, Math.PI * 2), x = e.x + Math.cos(g) * 4, z = e.z + Math.sin(g) * 4; if (o.inBounds(x, z, 2) && n.enemies.spawn(N.pick(i), x, z, n.director.hpMult(), n.director.dmgMult(), K.Elite) >= 0) n.vfx.burst(x, o.height(x, z) + 1, z, Bm, 10, 5, S.Soft, .5, .5); }
      n.ui.toast('¡El Equipo Rocket contraataca!', null); this.checkBlackout();
    }
    checkBlackout() {
      const e = this.run, N = this.N;
      if (this.blackout || !this.ants.length || !this.ants.every(a => a.state === 'tuned')) return;
      this.blackT = wm;
      e.ui.banner('¡Apagón!', 'La señal del Rocket se ha cortado: nadie está enfurecido y han caído orbes de experiencia', '#c8c8d8'); e.audio.alarm();
      const t = e.player.pos, n = e.terrain;
      for (let r = 0; r < 3; r++) { const i = r / 3 * Math.PI * 2 + N.range(0, 1), x = t.x + Math.cos(i) * 6, z = t.z + Math.sin(i) * 6; e.pickups.$1hzn9kq(x, n.height(x, z) + .8, z, Math.round(e.player.xpNext * .3)); }
    }
    tickHorde(e) {
      const t = this.run, n = t.enemies, r = t.player.pos, N = this.N, S = L().N;
      this.ensure();
      const i = 1156, b = this.blackout, o = this.ants.filter(a => a.state === 'rocket' && !b), s = this.ants.filter(a => a.state === 'tuned'); let c = 0;
      const ign = K.Boss | K.Object | K.Capture | K.Treasure | K.Remote;
      for (let a = 0; a < n.n; a++) {
        if (!n.alive[a]) continue;
        if (this.egen[a] !== n.gen[a]) { this.egen[a] = n.gen[a]; this.enr[a] = 0; this.dwell[a] = 0; }
        const l = n.flags[a]; if (l & ign) continue;
        const u = n.x[a], d = n.z[a]; let f = false, p = false;
        for (const w of o) if ((w.x - u) ** 2 + (w.z - d) ** 2 < i) { f = true; break; }
        if (!f) for (const w of s) if ((w.x - u) ** 2 + (w.z - d) ** 2 < i) { p = true; break; }
        if (f && n.dying[a] <= 0) {
          if (!this.enr[a] && n.veil[a] === 0) this.enrage(a);
          this.dwell[a] += e; if (this.dwell[a] >= Em) { this.dwell[a] = 0; this.evolve(a); }
          if (this.enr[a] && Math.random() < .1 && (u - r.x) ** 2 + (d - r.z) ** 2 < 1600) t.vfx.add.spawn({ x: u + N.range(-.4, .4), y: n.y[a] + n.hgt[a] + .3, z: d, vy: .8, life: .45, size: .4, endSize: 0, color: Bm, shape: S.Soft, glow: .6 });
        } else { if (this.enr[a]) this.calm(a); this.dwell[a] = Math.max(0, this.dwell[a] - e * 2); }
        if (p && n.dying[a] <= 0 && !(l & (K.Alpha | K.Totem | K.Summoner))) {
          n.confuse[a] = Math.max(n.confuse[a], .6); n.curse[a] = Math.max(n.curse[a], .6);
          if (c < 24 && (u - r.x) ** 2 + (d - r.z) ** 2 < 1296) { c++; for (const q of n.within(u, d, 1.3)) if (!(q === a || n.flags[q] & ign)) { t.combat.hit(a, n.maxHp[a] * .01, { type: 'normal', cls: 'physical', fixed: true, silent: true }); break; } }
        }
      }
    }
    enrage(e) { const t = this.run.enemies; this.enr[e] = 1; t.veil[e] = 5; t.speed[e] *= Tm; t.dmg[e] *= Tm; t.xp[e] *= 2; t.mass += t.wt[e]; t.wt[e] *= 2; }
    calm(e) { const t = this.run.enemies; this.enr[e] = 0; if (t.veil[e] === 5) t.veil[e] = 0; t.speed[e] /= Tm; t.dmg[e] /= Tm; t.xp[e] /= 2; t.wt[e] /= 2; t.mass -= t.wt[e]; }
    evolve(e) {
      const t = this.run, n = t.enemies, D = L().R, N = this.N, S = L().N;
      const r = D.get(n.species[e]), ev = D.evolutionsOf(r.id); if (!ev.length) return;
      const a = D.get(N.pick(ev).id), o = t.sprites.get(a.id);
      const hp = x => 12 + x.bst * .055, dm = x => 5 + x.stats.atk / 16 + x.stats.spa / 24, sp = x => 3 + x.stats.spe / 55, u = hp(a) / hp(r) * 1.2;
      n.hp[e] *= u; n.maxHp[e] *= u; n.dmg[e] *= dm(a) / dm(r) * 1.15; n.speed[e] = Math.min(6.2 * Tm, n.speed[e] * (sp(a) / sp(r))); n.scale[e] *= 1.12;
      n.species[e] = a.id; n.t1[e] = n.typeIdx.get(a.types[0]) ?? 0; n.t2[e] = a.types[1] ? n.typeIdx.get(a.types[1]) ?? 0 : 0;
      const w = o.ready ? o.bodyWidth(n.scale[e]) : 1.4 * n.scale[e], h = o.ready ? o.bodyHeight(n.scale[e]) : 1.6 * n.scale[e];
      n.radius[e] = Math.max(.45, Math.min(4, w * .42)); n.hgt[e] = Math.max(.8, h); n.sized[e] = +!!o.ready;
      t.meta.markSeen?.(a.id);
      t.vfx.burst(n.x[e], n.y[e] + 1, n.z[e], 16777215, 18, 7, S.Star, .6, .6); t.vfx.ring(n.x[e], n.y[e] + .2, n.z[e], 3, Bm, .5);
      if (a.id === Rm && (n.x[e] - t.player.pos.x) ** 2 + (n.z[e] - t.player.pos.z) ** 2 < 2025) t.cry(Rm, .7);
    }
    startFishing() {
      const e = this.run, N = this.N;
      if (!this.plan || e.sanctuary || this.fishT > 0) return;
      this.fishAt = e.endless ? e.stageTime + 300 * N.range(.8, 1.3) : Infinity;
      this.fishT = Mm; this.flockT = .5; this.goldDone = false; this.gyra = 0;
      e.ui.banner('¡La Gran Pesca de Magikarp!', 'Los Magikarp saltan a la orilla: golpéalos para sacarles monedas y busca el dorado', '#ff9a4a', { species: Lm }); e.audio.alarm();
    }
    tickFishing(e) {
      const t = this.run, n = t.enemies, N = this.N, S = L().N;
      for (let k = this.fish.length - 1; k >= 0; k--) {
        const r = this.fish[k];
        if (n.gen[r.i] !== r.g || !n.alive[r.i]) this.fish.splice(k, 1);
        else if (n.dying[r.i] > 0 || n.hp[r.i] <= 0) { this.caught(r); this.fish.splice(k, 1); }
        else { r.t -= e; if (r.t <= 0) { this.dive(r); this.fish.splice(k, 1); } }
      }
      if (this.fishT <= 0) return;
      this.fishT -= e; this.flockT -= e;
      if (this.flockT > 0 || t.state !== 'play') { if (this.fishT <= 0) this.endFishing(); return; }
      this.flockT = Fm;
      const r = t.terrain, i = t.player.pos, a = N.int(Pm[0], Pm[1]); let o = i.x, s = i.z, c = false;
      for (let k = 0; k < 120 && !c; k++) { const g = N.range(0, Math.PI * 2), d = N.range(10, 12 + k * .27), x = i.x + Math.cos(g) * d, z = i.z + Math.sin(g) * d; if (r.inBounds(x, z, 4) && r.inWater(x, z)) { o = x; s = z; c = true; } }
      if (c) {
        for (let k = 0; k < a && this.fish.length < Nm; k++) {
          const x = o + N.range(-5, 5), z = s + N.range(-5, 5); if (!r.inBounds(x, z, 2)) continue;
          const g = !this.goldDone && this.fishT < 24 && N.chance(.2), q = n.spawn(Lm, x, z, .4, 0, K.Treasure | (g ? K.Shiny : 0));
          if (q < 0) break;
          if (g) this.goldDone = true;
          n.dmg[q] = 0; n.xp[q] = 0; n.speed[q] = g ? 4.5 : 2.6; n.vx[q] = n.vz[q] = 0;
          if (g) { n.hp[q] = n.maxHp[q] = Math.max(1, n.maxHp[q]); t.ui.banner('¡Un Magikarp dorado!', 'Tócalo antes de que vuelva al agua', '#ffd23a', { species: Lm }); t.cry(Lm); }
          t.vfx.burst(x, r.surface(x, z) + .4, z, 14677247, 8, 5, S.Drop, .3, .5, 12);
          this.fish.push({ i: q, g: n.gen[q], t: N.range(Im[0], Im[1]) * (g ? 1.2 : 1), gold: g });
        }
        if (this.fishT <= 0) this.endFishing();
      }
    }
    caught(e) {
      const t = this.run, n = t.enemies, r = e.i, i = t.player.stats, N = this.N, S = L().N, a = Math.max(1, Math.round(2 * (t.stage >= 1 ? 2.2 ** (t.stage - 1) : 1)));
      t.pickups.$17qigu8(n.x[r], n.y[r] + .5, n.z[r], Math.ceil(a * i.gold));
      if (e.gold) {
        t.ui.banner('¡Magikarp dorado!', 'Suelta un orbe de experiencia, monedas y un regalo', '#ffd23a', { species: Lm });
        t.vfx.burst(n.x[r], n.y[r] + 1, n.z[r], 16765498, 40, 10, S.Star, .7, .8);
        t.pickups.$1hzn9kq(n.x[r], n.y[r] + .8, n.z[r], Math.round(t.player.xpNext * .35));
        for (let k = 0; k < 8; k++) t.pickups.$17qigu8(n.x[r] + N.range(-2, 2), n.y[r] + .5, n.z[r] + N.range(-2, 2), Math.ceil(a * 2 * i.gold));
        if (!this.ballGiven) { this.ballGiven = true; t.interactables.spawnChest(n.x[r], n.z[r], true, true); }
        t.audio.power();
      }
    }
    dive(e) {
      const t = this.run, n = t.enemies, r = e.i, i = n.x[r], a = n.z[r], o = n.y[r], S = L().N;
      t.vfx.burst(i, o + .4, a, 14677247, 8, 5, S.Drop, .3, .5, 12); n.kill(r);
      if (this.blackout || this.gyra >= zm) return;
      for (const w of this.ants) {
        if (w.state !== 'rocket' || (w.x - i) ** 2 + (w.z - a) ** 2 > 1156) continue;
        if (n.spawn(Rm, i, a, t.director.hpMult(), t.director.dmgMult(), 0) >= 0) { this.gyra++; t.ui.popup(i, o + 2, a, '¡Gyarados enfurecido!', '#ff5a4a', 1); t.vfx.ring(i, o + .2, a, 4, Bm, .5); }
        break;
      }
    }
    endFishing() { this.fishT = 0; this.run.ui.toast('La pesca ha terminado: los Magikarp vuelven al lago', null); }
    clear() {
      const e = this.run.enemies;
      for (const f of this.fish) if (e.gen[f.i] === f.g && e.alive[f.i]) e.kill(f.i);
      this.fish = []; this.fishT = 0; this.blackT = 0;
      for (let k = 0; k < e.n && k < this.enr.length; k++) if (this.enr[k] && this.egen[k] === e.gen[k] && e.alive[k]) this.calm(k);
      this.enr.fill(0); this.ants = [];
    }
  }
  const inst = new WeakMap();
  window.PB_T4 = {
    update(run, dt) { if (run.biome?.id !== 'furia' || !window.__pbT4lib) return; let f = inst.get(run); if (!f) inst.set(run, f = new Furia(run)); try { f.update(dt); } catch (err) { if (!f.err) { f.err = 1; console.warn('[T4 Furia]', err); } } },
    limpiar(run) { const f = inst.get(run); if (f) { try { f.clear(); } catch {} f.terrainRef = null; f.ballGiven = false; } },
    furia: run => inst.get(run)
  };
})();
