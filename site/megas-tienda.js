/* Subversión propia: comprar la megaevolución en el Laboratorio (mejoras por Pokémon).
   Alternativa a completar la investigación de la familia, que sigue funcionando igual.
   Se paga con Polvo Estelar y con el oro guardado de las partidas (oro-guardado.js).
   Lo comprado se guarda por familia en profile.pbMegas. */
(() => {
  const PRECIO = { polvo: 3000, oro: 2000 };
  const PRECIO_LEYENDA = { polvo: 5000, oro: 3000 };
  const LEYENDAS = new Set([150, 380, 381, 382, 383, 384, 483, 491]);
  const fmt = n => Math.round(n).toLocaleString('es-MX');

  const T = {
    comprada(meta, sp) {
      try { return !!meta?.profile?.pbMegas?.includes(meta.family(sp)); } catch { return false; }
    },

    // Megas de la familia del Pokémon elegido en el Laboratorio.
    megas(meta, s) {
      const M = window.PB_MEGA?.MEGAS ?? {};
      let fam;
      try { fam = meta.family(s); } catch { return []; }
      return Object.keys(M).map(Number).filter(k => { try { return meta.family(k) === fam; } catch { return false; } });
    },

    precio(lista) {
      return lista.some(k => LEYENDAS.has(k)) ? PRECIO_LEYENDA : PRECIO;
    },

    // Fila de la barra del Laboratorio.
    row(meta, s, redraw) {
      const lista = T.megas(meta, s);
      const box = document.createElement('div');
      box.className = 'pb-megatienda';
      box.style.cssText = 'flex-basis:100%;display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;padding:8px 10px;border-radius:12px;background:linear-gradient(90deg,#f3eaff,#fff3e0)';
      const oro = window.PB_GOLD?.saved?.() ?? 0, polvo = meta.profile.stardust ?? 0;
      const caja = document.createElement('span');
      caja.style.cssText = 'font-weight:800';
      caja.textContent = `Tienes: ${fmt(polvo)} Polvo · ${fmt(oro)} oro guardado`;
      if (!lista.length) {
        const n = document.createElement('small');
        n.style.cssText = 'font-weight:700;opacity:.7';
        n.textContent = 'Este Pokémon no tiene megaevolución.';
        box.append(caja, n);
        return box;
      }
      const M = window.PB_MEGA, nombres = lista.flatMap(k => M.forms(k).map(f => f.name)).join(', ').replace(/, ([^,]*)$/, ' y $1');
      const abierta = lista.every(k => M.unlocked(meta, k));
      const t = document.createElement('span');
      t.style.cssText = 'font-weight:900;color:#6a2ab8';
      t.textContent = nombres;
      if (abierta) {
        const ok = document.createElement('span');
        ok.style.cssText = 'font-weight:800;color:#2a9a4a';
        ok.textContent = '✓ Desbloqueada';
        box.append(t, ok, caja);
        // Especies con más de una mega (Charizard X/Y, Mewtwo X/Y, megas Z): elegir cuál usar en la partida.
        for (const k of lista) {
          const fs = M.forms(k);
          if (fs.length < 2) continue;
          const sel = document.createElement('select');
          sel.style.cssText = 'font:inherit;font-weight:800;padding:4px 8px;border-radius:10px;border:2px solid #8a5ad8;background:#fff;color:#2a2340';
          fs.forEach((f, i) => {
            const o = document.createElement('option');
            o.value = String(i); o.textContent = f.name;
            if (i === (meta.profile.pbMegaForma?.[k] ?? 0)) o.selected = true;
            sel.append(o);
          });
          sel.addEventListener('change', () => {
            (meta.profile.pbMegaForma ??= {})[k] = Number(sel.value);
            try { meta.save(); } catch {}
          });
          const l = document.createElement('span');
          l.style.cssText = 'font-weight:800';
          l.textContent = 'Usar en la partida:';
          box.append(l, sel);
        }
        return box;
      }
      const p = T.precio(lista);
      const falta = polvo < p.polvo || oro < p.oro;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn small';
      btn.disabled = falta;
      btn.textContent = `Comprar mega: ${fmt(p.polvo)} Polvo + ${fmt(p.oro)} oro`;
      let armed = false;
      btn.addEventListener('click', () => {
        if (!armed) { armed = true; btn.textContent = `¿Seguro? Toca otra vez`; return; }
        T.comprar(meta, s, lista);
        redraw();
      });
      const n = document.createElement('small');
      n.style.cssText = 'flex-basis:100%;font-weight:700;opacity:.75';
      n.textContent = falta
        ? `Te falta ${polvo < p.polvo ? fmt(p.polvo - polvo) + ' de Polvo' : ''}${polvo < p.polvo && oro < p.oro ? ' y ' : ''}${oro < p.oro ? fmt(p.oro - oro) + ' de oro' : ''}. El oro es el que te sobra al terminar las partidas. También se desbloquea completando su investigación.`
        : 'El oro es el que te sobra al terminar las partidas. También se desbloquea completando su investigación.';
      box.append(t, btn, caja, n);
      return box;
    },

    comprar(meta, s, lista) {
      const p = T.precio(lista), pr = meta.profile, oro = window.PB_GOLD?.saved?.() ?? 0;
      if ((pr.stardust ?? 0) < p.polvo || oro < p.oro) return false;
      const fam = meta.family(s);
      pr.stardust -= p.polvo;
      window.PB_GOLD.put(oro - p.oro);
      pr.pbMegas ??= [];
      pr.pbMegas.includes(fam) || pr.pbMegas.push(fam);
      try { meta.save(); } catch {}
      return true;
    }
  };
  window.PB_MEGA_TIENDA = T;
})();
