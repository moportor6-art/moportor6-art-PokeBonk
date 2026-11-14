/* Subversión propia: edición del juego. 'completa' = PokéBonk Remaster con la Sala de juegos (PokéIsaac, PokéSurvivor,
   Pokémon Survivors, PokéBonk TD, PokéPlunder, Pokémon Overlord y Pokelike); 'lite' = solo PokéBonk.
   La decide el APK (PokéBonk Lite es el paquete «.lite») o el programa de Windows («PokeBonk Lite»), así las actualizaciones por archivos no la cambian. */
window.PB_EDICION = (() => { try { return window.AndroidMenu?.edicion?.() || window.pokebonkDesktop?.edicion?.() || 'completa'; } catch { return 'completa'; } })();
