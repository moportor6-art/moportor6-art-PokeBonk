/* Subversión propia: todas las familias empiezan por su primera forma.
   Los miembros de la Liga que tienen un bebé antes (Pikachu, Clefairy, Jigglypuff, Jynx, Electabuzz, Magmar,
   Hitmonlee, Hitmonchan y Hitmontop) empiezan la partida como ese bebé, con SU kit, pasiva y Ultimate, y
   evolucionan a su forma al nivel NIVEL; después siguen como siempre (Pikachu -> Raichu...).
   El bebé solo se usa si su región está abierta (Pokédex hasta el tope de la temporada); Happiny, Munchlax,
   Azurill y compañía llegarán con su región. Los bebés de la Liga (Pichu, Cleffa...) siguen siendo miembros
   aparte, con su propio kit y reto. No se aplica en Duelos (deben ser iguales para los dos jugadores).
   Ganchos en main-…js: PB_BEBE.start(run, R) al crear al jugador, PB_BEBE.evo() en el cálculo de la
   siguiente evolución; y en menus-…js, PB_BEBE.pre() en la línea evolutiva de la ficha de la Liga. */
(() => {
  const NIVEL = 12;
  // miembro de la Liga -> su bebé
  const BEBE = { 25: 172, 35: 173, 39: 174, 106: 236, 107: 236, 237: 236, 124: 238, 125: 239, 126: 240 };
  const B = {
    NIVEL,
    BEBE,
    start(run, R) {
      run.__pbBebe = null;
      const p = run.player, ent = p?.roster;
      if (!ent || run.mode === 'duel' || p.speciesId !== ent.id) return;
      const bebe = BEBE[ent.id];
      const d = bebe && B.disponible(bebe) && R.get(bebe);
      if (!d || !(R.get(ent.id)?.id)) return;
      p.speciesId = bebe;
      p.data = d;
      p.types = d.types;
      p.evoStage = 0;
      p.recompute();
      p.hp = p.maxHp;
      run.__pbBebe = { bebe, forma: ent.id };
    },
    // Siguiente evolución mientras eres el bebé: a la forma del miembro elegido, al nivel NIVEL.
    evo(run, especie, min) {
      const b = run.__pbBebe;
      if (!b || especie !== b.bebe) return null;
      return { to: b.forma, level: Math.max(NIVEL, min ?? 1) };
    },
    // Para la ficha de la Liga: el bebé va primero en la línea evolutiva.
    pre(ent) {
      const bebe = ent && BEBE[ent.id];
      return bebe && B.disponible(bebe) ? [{ id: bebe, level: 1 }] : [];
    },
    disponible(id) {
      // Misma regla que la Liga: el bebé tiene que ser de una región abierta (Kanto y Johto: hasta el 251).
      return id <= 251;
    }
  };
  window.PB_BEBE = B;
})();
