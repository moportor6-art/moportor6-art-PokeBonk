/* Subversión propia: tu rival, Azul.
   En las partidas clásicas (no cooperativo, duelo, Supervivencia, torre ni expedición), a mitad de la zona 2 aparece Azul
   con su inicial de Kanto: el primero elige el que le gana al tipo de tu Pokémon y se queda con él.
   Evoluciona según las veces que os habéis visto (3 → 1.ª evolución, 7 → 2.ª) y es más duro cuanto más avanzas.
   Es un élite muy resistente; si lo derrotas: +150 ₽ en la partida y +100 de Polvo.
   Se guarda en profile.pbRival = { inicial, n: encuentros, v: victorias }. */
(() => {
  const LINEAS = { 1: [1, 2, 3], 4: [4, 5, 6], 7: [7, 8, 9] };
  // Contra qué tipo va cada inicial: Charmander (Fuego) contra Planta/Bicho/Hielo/Acero, Squirtle (Agua) contra
  // Fuego/Roca/Tierra, Bulbasaur (Planta) contra Agua/Tierra/Eléctrico.
  const CONTRA = { grass: 4, bug: 4, ice: 4, steel: 4, fire: 7, rock: 7, ground: 7, water: 1, electric: 1 };
  const R = () => window.PB_REGIONES;
  const nombre = sp => R()?.todos?.find(p => p.id === sp)?.name ?? '#' + sp;
  const tipos = sp => R()?.todos?.find(p => p.id === sp)?.types ?? [];

  let ultima = null;
  setInterval(() => {
    const run = window.__pbRun, meta = window.__pbMeta;
    if (!run || !meta || run.state !== 'play') return;
    try {
      if (run !== ultima) { ultima = run; run.__rival = null; }
      const E = run.enemies;
      // Seguimiento del rival en curso.
      if (run.__rival && !run.__rival.fin) {
        const r = run.__rival, i = r.i;
        const vivo = E.alive[i] && !(E.dying[i] > 0) && E.species[i] === r.sp && E.gen?.[i] === r.gen;
        if (vivo) { r.frac = E.hp[i] / E.maxHp[i]; return; }
        {
          r.fin = true;
          // Si se fue con poca vida (o sigue su hueco cayendo), cuenta como derrotado.
          if ((E.species[i] === r.sp && (E.dying[i] > 0 || E.hp[i] <= 0)) || (r.frac ?? 1) < 0.35) {
            const p = meta.profile.pbRival;
            p.v = (p.v ?? 0) + 1;
            meta.profile.stardust = (meta.profile.stardust ?? 0) + 100;
            meta.profile.totalStardust = (meta.profile.totalStardust ?? 0) + 100;
            try { meta.save(); } catch {}
            run.gold += 150;
            run.ui.banner('¡Has vencido a Azul!', `+150 ₽ y +100 de Polvo. Victorias contra Azul: ${p.v}.`, '#3a7bd5', { species: r.sp });
          }
        }
        return;
      }
      if (run.__rival || run.coop || run.endless || run.tower || run.expedition || run.mode === 'duel' || run.__gym) return;
      if (run.stage !== 2 || (run.stageTime ?? 0) < 240) return;
      const p = meta.profile;
      const pr = p.pbRival ??= { inicial: 0, n: 0, v: 0 };
      if (!pr.inicial) {
        const tu = tipos(run.player.speciesId ?? run.startSpecies)[0];
        pr.inicial = CONTRA[tu] ?? [1, 4, 7][Math.random() * 3 | 0];
      }
      pr.n = (pr.n ?? 0) + 1;
      try { meta.save(); } catch {}
      const linea = LINEAS[pr.inicial], fase = pr.n > 7 ? 2 : pr.n > 3 ? 1 : 0, sp = linea[fase];
      const pp = run.player.pos, a = Math.random() * Math.PI * 2;
      const d = run.director, avance = window.PB_CURA?.avance?.(run) ?? 0;
      // Unas 3 veces un élite de la zona (hasta ~7 en los mapas finales).
      const vida = (d.hpMult?.() ?? 1) * (3 + avance * 0.1), dano = (d.dmgMult?.() ?? 1) * 1.3;
      const i = E.spawn(sp, pp.x + Math.cos(a) * 14, pp.z + Math.sin(a) * 14, vida, dano, 1, 1);
      if (i < 0) return;
      run.__rival = { i, sp, gen: E.gen?.[i] };
      run.ui.banner('¡Tu rival Azul te desafía!', `Su ${nombre(sp)} viene a por ti. Derrótalo: +150 ₽ y +100 de Polvo.`, '#3a7bd5', { species: sp });
      try { run.cry(sp); } catch {}
    } catch {}
  }, 500);
})();
