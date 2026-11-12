/* Subversión propia de PokéBonk Remaster: botón "Auto aprender" en la pausa de Pokémon Survivors.
   Es el mismo ajuste que en PokéBonk (localStorage 'pb-autohab'): lo que eliges en uno vale para los dos.
   Lo que hace al subir de nivel está en pbAutohab.ts (parche al compilar). */
(() => {
  const leer = () => { try { return localStorage.getItem('pb-autohab') === '1'; } catch { return false; } };
  const pintar = (b) => { b.textContent = 'Auto aprender: ' + (leer() ? 'Sí' : 'No'); };
  setInterval(() => {
    const p = document.querySelector('.pause-screen:not(.hidden)');
    if (!p || p.querySelector('.pb-ah-ps')) return;
    const primero = p.querySelector('button.btn');
    if (!primero) return;
    const b = document.createElement('button');
    b.className = 'btn pb-ah-ps';
    b.title = 'Al subir de nivel se elige sola la mejor carta para tu Pokémon';
    pintar(b);
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      try { localStorage.setItem('pb-autohab', leer() ? '0' : '1'); } catch {}
      pintar(b);
    });
    primero.after(b);
  }, 400);
})();
