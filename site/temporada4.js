/* Subversión 1.63: Temporada 4 (pruebas). Zona aparte para probar el contenido de la Temporada 4 de PokéBonk (0.10.13,
   de Charcher, replicado con su permiso) antes de pasarlo al juego normal o al modo historia.
   - Lago de la Furia: forma `lake` portada al motor (menus-…js: pbLkGen, generateLake, placeLakeEnv y el sombreado LAKE),
     con sus texturas, atlas y modelos originales (assets/env/furia, assets/models/furia_*.glb) y los datos del mapa tal cual.
   - El santuario de Suicune usa por ahora la arena de la costa teñida (la arena `rage` original llega después).
   La región va desbloqueada desde el principio para poder probarla. */
(() => {
  const FURIA = {"size": 400, "shape": "lake", "types": ["water", "dragon", "poison"], "late": ["dark", "flying"], "residents": [129, 60, 118, 194, 183, 147, 116, 223, 170, 109, 88, 19, 41, 198, 228, 21, 54], "sky": [3824250, 10139848], "fog": 8034472, "fogNear": 50, "fogFar": 210, "light": 0.92, "sun": 15266047, "hemiGround": 3824202, "ground": [4885066, 5937746, 3832386, 3041850], "path": 10127978, "cliff": [6975608, 5528162, 8817812], "water": 0, "waterColor": 2779786, "props": ["tree", "bush", "rock", "tree"], "propDensity": 1, "weather": ["rain", "clear", "rain"], "morning": {"motes": "spray"}, "bosses": [195, 171, 230], "legendaries": [245], "guardians": [[195, 224], [171, 226], [130, 230, 169]], "totems": [[184, 186, 195, 119], [171, 224, 229, 198], [148, 199, 110, 226]], "summoners": [[184, 195], [224, 171], [130, 229]], "music": {"root": 52, "scale": [0, 2, 3, 5, 7, 8, 10], "bpm": 104, "mood": "tense"}, "tex": {"top": [4885066, 5937746, 3832386], "detail": "grass", "side": [6975608, 8817812, 3817544], "lip": 4885066, "path": [10127978, 6969922], "leaf": 3045962, "bark": 4864558, "rock": 6975608, "accent": 16726602, "deco": [0, 1, 2, 3, 4]}};
  const ZONAS = [{"sky": [2767450, 8030880], "fog": 5925504, "fogNear": 46, "fogFar": 190, "light": 0.86, "sun": 13688048, "hemiGround": 2767434, "sunDir": [0.6, 0.76, 0.2], "sunH": 0.4, "tint": [0.94, 0.97, 1.04], "clouds": [0.78, 0.82, 0.9], "cover": 0.25, "glow": 9085128, "glowK": 0.2, "stars": 0, "motes": "spray"}, {"sky": [658978, 3807790], "fog": 1710638, "fogNear": 40, "fogFar": 170, "light": 0.78, "sun": 16756912, "hemiGround": 1710634, "sunDir": [0.45, 0.8, -0.25], "sunH": 0.45, "tint": [1, 0.9, 0.96], "clouds": [0.6, 0.5, 0.62], "cover": 0.15, "glow": 16726602, "glowK": 0.3, "stars": 0.3, "motes": "drips"}];
  window.PB_REGIONES?.registrar({
    id: 't4', name: 'Temporada 4 (pruebas)', gen: 11, genLabel: 'Pruebas', especial: true, min: 1, max: 251,
    emblem: 245, c: '#16243a', c2: '#ff3a4a',
    liga: [],
    contadores: { derrotas: 't4', local: 't4_local', runs: 'runs_t4' },
    mapas: [{
      id: 'furia', base: 'iris', color: 0, k: 0,
      name: "Lago de la Furia", desc: "Un lago enorme bajo la tormenta. Una señal extraña enfurece a sus Pokémon... y algo rojo nada en el fondo.",
      unlock: 'Zona de pruebas de la Temporada 4', zonas: ["Tarde de tormenta", "Noche de la Furia"], zonasDatos: ZONAS,
      santuario: { de: 'coast', name: "El Ojo del Lago", heart: "Corazón de la tormenta", legendaries: [245], color: 16726602, k: .45, music: {"root": 50, "scale": [0, 2, 3, 5, 7, 8, 10], "bpm": 132, "mood": "tense"} },
      datos: FURIA
    }]
  });
  // Zona de pruebas: el mapa se puede jugar sin completar nada antes.
  const abrir = setInterval(() => {
    const P = window.__pbMeta?.profile; if (!P?.biomes) return;
    if ((P.biomes.furia ?? -1) < 0) P.biomes.furia = 0;
    clearInterval(abrir);
  }, 500);
})();
