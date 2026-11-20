/* Subversión propia (moportor6, 1.25): niveles extra del Laboratorio para Difícil, solo en PokéBonk Lite.
   Cada mejora de estadística del Laboratorio (daño, crítico, vida, armadura, velocidad, regeneración…) gana 3 niveles
   más, mucho más caros (×3 el Polvo de la curva normal). Esos niveles extra solo cuentan en partidas en Difícil o más
   (incluido el Difícil del modo historia); en Normal se usan solo los niveles de siempre.
   Ganchos: PB_LAB.defs (lista de mejoras), meta.labStats (lo que suma el Laboratorio al empezar) y __pbApp.startRun. */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const EXTRA = 3, PRECIO = 3;
  let tier = 0;
  const t = setInterval(() => {
    const L = window.PB_LAB, m = window.__pbMeta, a = window.__pbApp;
    if (L?.defs?.length && !L.__pbDif) {
      for (const d of L.defs) {
        if (!d.stat || !d.per || d.__pbBase != null) continue;
        d.__pbBase = d.max; d.max += EXTRA;
        const c = d.cost;
        d.cost = n => (n >= d.__pbBase ? Math.round(c(n) * PRECIO) : c(n));
        d.desc = `${d.desc} Niveles ${d.__pbBase + 1}-${d.max}: solo en Difícil.`;
      }
      L.__pbDif = true;
    }
    if (m?.labStats && !m.__pbDif) {
      const ls = m.labStats;
      m.labStats = function (s, ...r) {
        const e = ls.call(this, s, ...r);
        if (tier >= 1) return e;
        try {
          for (const d of window.PB_LAB?.defs ?? []) {
            if (d.__pbBase == null) continue;
            const lv = this.lab(d.id, s) ?? 0;
            if (lv > d.__pbBase) e[d.stat] = (e[d.stat] ?? 0) - d.per * (lv - d.__pbBase);
          }
        } catch {}
        return e;
      };
      m.__pbDif = true;
    }
    if (a?.startRun && !a.__pbDif) {
      const sr = a.startRun;
      a.startRun = function (cfg, ...r) { tier = cfg?.tier | 0; return sr.call(this, cfg, ...r); };
      a.__pbDif = true;
    }
    if (L?.__pbDif && m?.__pbDif && a?.__pbDif) clearInterval(t);
  }, 300);
})();
