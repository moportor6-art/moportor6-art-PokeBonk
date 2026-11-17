/* Subversión propia (moportor6, 1.10): contador de los retos de evolución, solo en PokéBonk Lite.
   Durante la partida, una etiqueta muestra los retos pendientes de las evoluciones especiales de tu línea (Blissey,
   Crobat, Espeon, Steelix, Gallade… las de formas.js) y cuánto llevas: lo guardado + lo de esta partida (meta.runGain).
   Solo se ve jugando (no tapa la pausa ni las ventanas; 1.11). Se mueve, agranda u oculta en «Editar HUD» (hud-editor.js). Tocarla la pliega o despliega. */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const DESC = {
    169: 'Recupera 20.000 PS', 182: 'Gana en el Bosque Encina', 186: 'Derrota a 5.000 Pokémon con lluvia', 196: 'Gana en Ciudad Iris',
    197: 'Gana en Pesadilla', 199: 'Confunde a 5.000 Pokémon', 208: 'Rompe 40 rocas', 212: 'Asesta 50.000 críticos',
    230: 'Moja a 15.000 Pokémon', 233: 'Provoca 3.000 reacciones', 242: 'Recupera 80.000 PS'
  };
  let NOM = {};
  fetch('./data/pokemon.json').then(r => r.json()).then(l => { NOM = Object.fromEntries(l.map(x => [x.id, x.name])); }).catch(() => {});
  const meta = () => window.__pbMeta;
  const fmt = n => String(Math.floor(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const css = document.createElement('style');
  css.textContent = `.pb-evoreto{position:fixed;left:calc(10px + var(--sl,0px));top:112px;z-index:30;max-width:260px;background:rgba(20,16,40,.78);color:#fff;border:2px solid rgba(255,255,255,.35);border-radius:10px;padding:3px 8px;font:700 11px system-ui,sans-serif;line-height:1.3;pointer-events:auto;cursor:pointer;touch-action:manipulation}
.pb-evoreto b{color:#ffd84a}.pb-evoreto .bar{height:4px;border-radius:2px;background:rgba(255,255,255,.2);margin:1px 0 3px}.pb-evoreto .bar i{display:block;height:100%;border-radius:2px;background:linear-gradient(90deg,#7af07a,#ffd84a)}
.pb-evoreto.plegado .det{display:none}`;
  document.head.append(css);
  let el = null, plegado = false, ultimo = '';
  setInterval(() => {
    const run = window.__pbRun, m = meta(), F = window.PB_FORMAS, p = m?.profile;
    const vivo = run && run.player && run.state !== 'over' && run.mode !== 'duel';
    let html = '';
    if (vivo && F && p) {
      const fam = id => { try { return m.family(id); } catch { return id; } };
      const linea = fam(run.player.speciesId ?? run.startSpecies);
      const filas = [];
      for (const [form, x] of Object.entries(F.REGLAS)) {
        const f = +form;
        if ((p.johtoForms ?? []).includes(f) || fam(x.member) !== linea) continue;
        const goal = x.rule.goal, guard = p.counters?.['jf:' + f] ?? 0;
        let ahora = 0;
        try { ahora = x.rule.v({ r: { biome: run.biome?.id, tier: run.tier, reactions: run.stats?.reactions ?? 0 }, d: new Proxy({}, { get: (_, k) => { try { return m.runGain(k); } catch { return 0; } } }), gana: false }); } catch {}
        const v = Math.min(goal, guard + ahora), desc = DESC[f] ?? F.vu?.[f]?.desc?.replace(/ con (la línea de |)[^.]*\.$/, '') ?? 'Reto especial';
        filas.push(`<div><b>${NOM[f] ?? '#' + f}</b>: ${desc}${goal > 1 ? ` · ${fmt(v)}/${fmt(goal)}` : ' · pendiente'}</div>${goal > 1 ? `<div class="bar"><i style="width:${(v / goal * 100).toFixed(1)}%"></i></div>` : ''}`);
      }
      if (filas.length) html = `<div>🧬 Retos de evolución${plegado ? ` (${filas.length}) ▸` : ''}</div><div class="det">${filas.join('')}</div>`;
    }
    if (!html) { el?.remove(); el = null; ultimo = ''; return; }
    if (!el || !el.isConnected) {
      el = document.createElement('div');
      el.className = 'pb-evoreto';
      el.addEventListener('click', e => { e.stopPropagation(); plegado = !plegado; ultimo = ''; });
      document.body.append(el);
    }
    el.classList.toggle('plegado', plegado);
    el.style.visibility = run.state === 'play' || document.body.classList.contains('pb-hud-editing') ? '' : 'hidden';
    if (html !== ultimo) { el.innerHTML = html; ultimo = html; }
  }, 500);
})();
