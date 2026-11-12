/* Subversión propia: PokéIsaac sin cuenta.
   PokéIsaac trae dentro una simulación de su servidor (la usa su autor para probar, "mockauth"): cuentas, Gacha,
   fichas, Tickets, misiones, huevos y tienda guardados en este dispositivo. Desde PokéBonk se abre con ella
   (?mockauth=1) y se entra solo como invitado local: el Gacha funciona sin iniciar sesión y las fichas se ganan
   jugando. El modo online (cuenta real, Ranking, cooperativo, chat) se abre con "PokéIsaac online". */
(() => {
  const q = new URLSearchParams(location.search);
  const local = q.get('mockauth') === '1';
  window.PB_ISAAC_LOCAL = (P) => {
    if (!local) return;
    let tries = 0;
    const entrar = async () => {
      if (P.user) return;
      if (typeof P.signInAsGuest !== 'function' || tries++ > 40) return;
      try {
        await P.signInAsGuest();
      } catch (e) {
        setTimeout(entrar, 500);
        return;
      }
      // La ventana de cuenta se abre sola al empezar: se cierra si quedó abierta (se mira unos segundos).
      let n = 0;
      const cerrar = setInterval(() => {
        const x = document.querySelector('.au-x');
        if (x && x.offsetParent && P.user) x.click();
        if (++n > 20) clearInterval(cerrar);
      }, 250);
    };
    setTimeout(entrar, 600);
  };
})();
