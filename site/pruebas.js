/* Subversión propia: modo de pruebas TEMPORAL (se quitará en unas versiones).
   En la pantalla de elegir Pokémon (al darle a Jugar o Continuar) añade un botón para unir a la Liga a todos los
   Pokémon del juego, abrir todos los aspectos del Vestidor y las formas regionales, y probarlos. Antes guarda
   una copia de tu Liga y tus aspectos reales, y el botón «Restaurar mi Liga» los devuelve tal cual. */
(() => {
  const KEY = 'pb-pruebas-liga';
  const respaldo = () => { try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch { return null; } };
  // Aspectos del Vestidor de cada miembro (los ids que usa el juego): maestría 1-2, temporada 3-4 y legendarios 5-7.
  const aspectos = ids => ids.flatMap(m => [`look:${m}:1`, `look:${m}:2`, `tlook:${m}:3`, `tlook:${m}:4`, `look:${m}:5`, `look:${m}:6`, `look:${m}:7`]).concat('skin:spectral');
  window.PB_PRUEBAS = { activo: () => !!respaldo() };
  const todos = async () => {
    const f = [...document.querySelectorAll('link[rel=modulepreload],script[type=module]')].map(x => x.href || x.src).find(u => /defineProperty-/.test(u));
    const m = await import(f || './assets/defineProperty-5g46wf9l-mw3e1u3x.js');
    return [...new Set((m.fr ?? []).map(e => e.id))];
  };
  const boton = (txt, fondo, fn) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'pb-pruebas';
    b.textContent = txt;
    b.style.cssText = `font:800 12px/1.2 system-ui,sans-serif;padding:6px 10px;margin:4px;border-radius:10px;border:2px solid #fff;color:#fff;background:${fondo};box-shadow:0 3px 0 rgba(0,0,0,.25);cursor:pointer`;
    let armado = false;
    b.addEventListener('click', async (e) => {
      e.stopPropagation();
      if (!armado) { armado = true; b.textContent = '¿Seguro? Toca otra vez'; return; }
      b.disabled = true;
      try { await fn(); } catch (err) { b.textContent = 'Error: ' + err.message; return; }
      location.reload();
    });
    return b;
  };
  const pinta = () => {
    const ancla = document.querySelector('.ls-count');
    const meta = window.__pbMeta;
    if (!ancla || !meta?.profile || ancla.parentElement.querySelector('.pb-pruebas')) return;
    const caja = document.createElement('span');
    caja.style.cssText = 'display:inline-flex;flex-wrap:wrap;align-items:center';
    caja.append(boton('Desbloquear todos (pruebas)', '#c8306a', async () => {
      const p = meta.profile;
      if (!respaldo()) localStorage.setItem(KEY, JSON.stringify({ league: p.league || [], cosmetics: p.cosmetics || [] }));
      const ids = await todos();
      p.league = [...new Set([...(p.league || []), ...ids])];
      p.cosmetics = [...new Set([...(p.cosmetics || []), ...aspectos(ids)])];
      meta.save();
    }));
    if (respaldo()) {
      caja.append(boton('Restaurar mi Liga', '#3a7aff', async () => {
        const r = respaldo();
        // Copias viejas (solo la Liga, como lista) o nuevas (Liga y aspectos).
        meta.profile.league = Array.isArray(r) ? r : r.league;
        if (!Array.isArray(r)) meta.profile.cosmetics = r.cosmetics;
        meta.save();
        localStorage.removeItem(KEY);
      }));
    }
    ancla.after(caja);
  };
  setInterval(() => { try { pinta(); } catch {} }, 600);
})();
