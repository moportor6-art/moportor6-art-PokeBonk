/* Subversión propia: cada familia empieza por su primera forma.
   Pikachu, Clefairy, Jigglypuff, Jynx, Electabuzz, Magmar, Hitmonlee, Hitmonchan y Hitmontop ya no son
   miembros de la Liga: su familia es la de su bebé (Pichu, Cleffa, Igglybuff, Smoochum, Elekid, Magby y
   Tyrogue), que es el que se investiga, se desbloquea y se elige, y evoluciona en la partida hasta ellos.
   Los quita la lista de la Liga en defineProperty-…js (junto al tope de la Pokédex), solo si su bebé está
   en la Pokédex abierta; los bebés de otras regiones (Happiny, Munchlax, Azurill...) llegarán con su región.
   Aquí solo queda el traspaso: quien ya tenía al intermedio en su Liga recibe a su bebé.
   Los ganchos start/evo/pre de la Subversión 0.44 siguen en el juego, pero ya no hacen nada. */
(() => {
  const BEBE = { 25: 172, 35: 173, 39: 174, 106: 236, 107: 236, 237: 236, 124: 238, 125: 239, 126: 240, 183: 298, 202: 360 };
  const B = {
    BEBE,
    NIVEL: 12,
    start() {},
    evo() { return null; },
    pre() { return []; },
    traspaso() {
      const m = window.__pbMeta, pr = m?.profile;
      if (!pr || !Array.isArray(pr.league)) return false;
      let cambia = false;
      for (const [k, b] of Object.entries(BEBE)) {
        if (pr.league.includes(+k) && !pr.league.includes(b)) { pr.league.push(b); cambia = true; }
      }
      if (cambia) try { m.save(); } catch {}
      return true;
    }
  };
  window.PB_BEBE = B;
  // El perfil puede cargarse (o cambiar al iniciar sesión) un poco después: se mira durante el primer minuto.
  let n = 0;
  const t = setInterval(() => { try { B.traspaso(); } catch {} if (++n >= 60) clearInterval(t); }, 1000);
})();
