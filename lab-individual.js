/* Subversión propia: Laboratorio individual por Pokémon.
   Cada mejora del Laboratorio se compra para UN Pokémon y solo le afecta a él.
   Excepción: el Archivo (lista de objetos ocultos) sigue siendo de toda la cuenta.
   Los niveles se guardan dentro del propio perfil, en profile.lab.by[especie][mejora].
   Lo comprado antes de esta subversión se devuelve como Polvo Estelar una sola vez. */
(() => {
  const GLOBAL = new Set(['archive']);
  const L = {
    defs: [],          // lista de mejoras del juego (la rellena el juego al cargar)
    prof: null,        // perfil actual
    runCur: null,      // especie de la partida en curso
    tmp: null,         // especie elegida en el Laboratorio (solo mientras se dibuja)
    selected: null,    // especie elegida en el selector del Laboratorio
    isInd: id => !GLOBAL.has(id),

    cur() {
      return L.tmp ?? L.runCur ?? L.prof?.lastSpecies ?? 0;
    },

    by(lab, s = L.cur()) {
      lab.by ??= {};
      return lab.by[s] ??= {};
    },

    get(lab, id, s = L.cur()) {
      if (!lab) return 0;
      if (!L.isInd(id)) return lab[id] ?? 0;
      return lab.by?.[s]?.[id] ?? 0;
    },

    set(lab, id, v, s = L.cur()) {
      if (!L.isInd(id)) { lab[id] = v; return; }
      L.by(lab, s)[id] = v;
    },

    // Objeto «lab» visto desde un Pokémon (para las funciones del juego que leen profile.lab directamente).
    view(lab, s = L.cur()) {
      if (!lab || typeof lab !== 'object') return lab;
      const out = {};
      for (const k in lab) if (k !== 'by' && k !== 'migrated') out[k] = lab[k];
      for (const d of L.defs) if (L.isInd(d.id)) out[d.id] = lab.by?.[s]?.[d.id] ?? 0;
      return out;
    },

    // Polvo gastado en las mejoras de un Pokémon.
    spent(lab, s) {
      let t = 0;
      for (const d of L.defs) {
        if (!L.isInd(d.id)) continue;
        const lv = lab?.by?.[s]?.[d.id] ?? 0;
        for (let l = 0; l < lv; l++) t += d.cost(l);
      }
      return t;
    },

    levels(lab, s) {
      let t = 0;
      for (const d of L.defs) if (L.isInd(d.id)) t += lab?.by?.[s]?.[d.id] ?? 0;
      return t;
    },

    // Devuelve el Polvo de un Pokémon y deja sus mejoras a cero.
    refund(profile, s) {
      const n = L.spent(profile.lab, s);
      if (profile.lab.by) delete profile.lab.by[s];
      profile.stardust += n;
      return n;
    },

    // Una sola vez: lo comprado antes (que valía para todos) vuelve como Polvo para repartirlo.
    migrate(profile) {
      if (!profile?.lab || profile.lab.migrated || !L.defs.length) return 0;
      let n = 0;
      for (const d of L.defs) {
        if (!L.isInd(d.id)) continue;
        const lv = profile.lab[d.id] ?? 0;
        for (let l = 0; l < lv; l++) n += d.cost(l);
        delete profile.lab[d.id];
      }
      profile.lab.by ??= {};
      profile.lab.migrated = 1;
      profile.stardust += n;
      if (n > 0) L.migratedDust = n;
      return n;
    },

    sel(meta) {
      const p = meta.profile, lg = p.league ?? [];
      if (L.selected != null && lg.includes(L.selected)) return L.selected;
      return lg.includes(p.lastSpecies) ? p.lastSpecies : (lg[0] ?? p.lastSpecies);
    },

    // Usa la especie elegida en el Laboratorio solo durante el dibujo actual.
    scope(s) {
      L.tmp = s;
      queueMicrotask(() => { L.tmp = null; });
    },

    // Barra del Laboratorio: elegir Pokémon y devolver sus mejoras.
    bar(meta, nameOf, redraw) {
      const p = meta.profile, s = L.sel(meta);
      const wrap = document.createElement('div');
      wrap.className = 'pb-labsel';
      wrap.style.cssText = 'display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin:0 0 14px;padding:10px 14px;border-radius:16px;background:rgba(255,255,255,.92);color:#2a2340;font-weight:800;box-shadow:0 3px 0 rgba(0,0,0,.12)';
      const lab = document.createElement('span');
      lab.textContent = 'Mejoras de:';
      const sel = document.createElement('select');
      sel.style.cssText = 'font:inherit;font-weight:800;padding:6px 10px;border-radius:10px;border:2px solid #8a5ad8;background:#fff;color:#2a2340;max-width:60vw';
      const list = [...(p.league ?? [])].sort((a, b) => String(nameOf(a)).localeCompare(String(nameOf(b))));
      for (const id of list) {
        const o = document.createElement('option');
        const lv = L.levels(p.lab, id);
        o.value = String(id);
        o.textContent = nameOf(id) + (lv ? ` (${lv} niv.)` : '');
        if (id === s) o.selected = true;
        sel.append(o);
      }
      sel.addEventListener('change', () => { L.selected = Number(sel.value); redraw(); });
      const dust = L.spent(p.lab, s);
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn small ghost';
      btn.disabled = !dust;
      btn.textContent = dust ? `Devolver mejoras (+${dust} Polvo)` : 'Sin mejoras que devolver';
      let armed = false;
      btn.addEventListener('click', () => {
        if (!dust) return;
        if (!armed) { armed = true; btn.textContent = `¿Seguro? Toca otra vez (+${dust} Polvo)`; return; }
        L.refund(p, s);
        try { meta.act({ k: 'lab', id: 'refund', lv: 0 }, () => meta.backend.buyLab(meta.account, 'refund')); } catch {}
        redraw();
      });
      const note = document.createElement('small');
      note.style.cssText = 'flex-basis:100%;font-weight:700;opacity:.75';
      note.textContent = 'Cada Pokémon tiene sus propias mejoras. Devolverlas te regresa todo el Polvo para repartirlo como quieras. El Archivo es de toda la cuenta.';
      wrap.append(lab, sel, btn, note);
      try { const m = window.PB_MEGA_TIENDA?.row(meta, s, redraw); m && wrap.append(m); } catch {}
      if (L.migratedDust) {
        const m = document.createElement('small');
        m.style.cssText = 'flex-basis:100%;font-weight:800;color:#2a9a4a';
        m.textContent = `Te devolvimos ${L.migratedDust} de Polvo por las mejoras que tenías antes, que valían para todos.`;
        wrap.append(m);
      }
      return wrap;
    }
  };
  window.PB_LAB = L;
})();
