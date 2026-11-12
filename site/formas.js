/* Subversión propia: evoluciones alternativas («Evoluciones de Johto» en la ficha de la Liga).
   El juego deja elegir otra evolución (Crobat, Bellossom, Espeon, Steelix, Blissey...) cuando su reto está
   cumplido, pero en la versión sin servidor nadie contaba esos retos: nunca se desbloqueaban. Aquí se cuentan
   al acabar cada partida, con las mismas reglas que enseña el juego, y se añaden las de Sinnoh:
   Gallade (desde Kirlia), Froslass (desde Snorunt), Leafeon y Glaceon (desde Eevee), la de Kalos: Sylveon, y la de Alola: Lunala (desde Cosmoem).
   - ci: formas nuevas para la lista del juego (defineProperty-…js): forma, miembro de la Liga, desde qué
     especie y cuándo se ofrece (evo = al evolucionar, eevee = con las ramas de Eevee).
   - vu: descripción y meta de cada reto nuevo para la ficha (menus-…js).
   - fin(run, res): main-…js lo llama al acabar la partida. Suma el progreso en counters['jf:<forma>'] y, al
     llegar a la meta, la añade a profile.johtoForms. Cuenta si la partida era de la línea del miembro. */
(() => {
  const sum = (contador, meta) => ({ kind: 'add', goal: meta, v: c => Math.max(0, Math.floor(c.d[contador] ?? 0)) });
  const ganaEn = (mapa) => ({ kind: 'add', goal: 1, v: c => c.gana && c.r.biome === mapa ? 1 : 0 });
  const ganaTier = (t) => ({ kind: 'add', goal: 1, v: c => c.gana && c.r.tier >= t ? 1 : 0 });
  const reacciones = (meta) => ({ kind: 'add', goal: meta, v: c => Math.max(0, Math.floor(c.r.reactions ?? 0)) });

  // Las 11 de Johto, con las reglas que ya describe el juego.
  const REGLAS = {
    169: { member: 41, rule: sum('healed', 2e4) },
    182: { member: 43, rule: ganaEn('encina') },
    186: { member: 60, rule: sum('rainKills', 5e3) },
    196: { member: 133, rule: ganaEn('iris') },
    197: { member: 133, rule: ganaTier(2) },
    199: { member: 79, rule: sum('confused', 5e3) },
    208: { member: 95, rule: sum('rocks', 40) },
    212: { member: 123, rule: sum('crits', 5e4) },
    230: { member: 116, rule: sum('soaked', 15e3) },
    233: { member: 137, rule: reacciones(3e3) },
    242: { member: 113, rule: sum('healed', 8e4) }
  };
  // Sinnoh
  const NUEVAS = [
    { form: 475, member: 280, from: 281, at: 'evo', desc: 'Derrota a 3.000 Pokémon de Sinnoh con la línea de Ralts.', rule: sum('sinnoh', 3e3) },
    { form: 478, member: 361, from: 361, at: 'evo', desc: 'Gana en la Ruta Nevada con la línea de Snorunt.', rule: ganaEn('nevada') },
    { form: 470, member: 133, from: 133, at: 'eevee', desc: 'Gana en el Bosque Vetusto con la línea de Eevee.', rule: ganaEn('eterna') },
    { form: 471, member: 133, from: 133, at: 'eevee', desc: 'Congela a 5.000 Pokémon con la línea de Eevee.', rule: sum('frozen', 5e3) },
    // Kalos
    { form: 700, member: 133, from: 133, at: 'eevee', desc: 'Gana en el Bosque Novarte con la línea de Eevee.', rule: ganaEn('novarte') },
    // Alola
    { form: 792, member: 789, from: 790, at: 'evo', desc: 'Gana en el Ultraumbral con la línea de Cosmog.', rule: ganaEn('ultraumbral') }
  ];
  for (const n of NUEVAS) REGLAS[n.form] = { member: n.member, rule: n.rule };

  const F = {
    ci: NUEVAS.map(({ form, member, from, at }) => ({ form, member, from, at })),
    vu: Object.fromEntries(NUEVAS.map(n => [n.form, { desc: n.desc, rule: { kind: n.rule.kind, goal: n.rule.goal } }])),
    REGLAS,

    fin(run, res) {
      const meta = run?.meta, p = meta?.profile;
      if (!p || !res || run.mode === 'duel') return;
      p.johtoForms ??= [];
      const fam = id => { try { return meta.family(id); } catch { return id; } };
      const linea = fam(res.species ?? run.startSpecies);
      const gana = !res.mode || res.mode === 'standard' ? !!res.victory : false;
      const d = new Proxy({}, { get: (_, k) => { try { return meta.runGain(k); } catch { return 0; } } });
      const nuevas = [];
      for (const [form, x] of Object.entries(REGLAS)) {
        const f = +form;
        if (p.johtoForms.includes(f)) continue;
        // La línea del miembro: la familia del Pokémon de la partida (Chansey cuenta con Happiny, etc.).
        if (fam(x.member) !== linea) continue;
        let v = 0;
        try { v = x.rule.v({ r: res, d, gana }); } catch {}
        if (!v) continue;
        const k = 'jf:' + f;
        p.counters[k] = Math.min(x.rule.goal, (p.counters[k] ?? 0) + v);
        if (p.counters[k] >= x.rule.goal) { p.johtoForms.push(f); nuevas.push(f); }
      }
      if (nuevas.length) {
        try { meta.save(); } catch {}
        F.ultimas = nuevas;
      }
    }
  };
  window.PB_FORMAS = F;
})();
