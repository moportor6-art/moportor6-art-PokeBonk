# Cambios respecto al port original

## Dificultad Remaster, solo Lite (Subversión 0.84)
- `site/dificultad.js` (nuevo, solo con `PB_EDICION === 'lite'`, modo `standard` sin torre/sin fin/expedición): en `PB_REG_E` multiplica PS (×2·(1+0,08·min)) y daño (×1,8·(1+0,06·min)) de normales, élites y Alfas, ×(1+0,03·índice de mapa en el orden de la Liga) y ×presión; Alfas ×40/22 PS y ×3/1,8 daño con escolta de 3-5; 4 % de élites en tier 0; Alfa extra con `director.fire('alpha')` cada 2,5-4 min desde el minuto 2; embestida (`kx/kz`) con aviso en el suelo; presión adaptativa cada 30 s (×1,1 hasta ×3, o ÷1,1).
- `index.html`: carga `dificultad.js` tras `clima.js`.

## Curanderos y escuderos más duros (Subversión 0.83)
- `curanderos.js`: `mult` = min(2,4; 1,6 + 0,03·avance)·(1 + 0,15·tier); autocuración 15 %; escudo tope 40 % (+15 % por pulso, hasta 12 salvajes); aparecen desde los 12 s de zona, prob. 0,25, espera 9→4 s, tope 4/5/7 vivos por tipo; PS ×3 curanderos, ×2,5 escuderos.

## Avisos sin pisarse (Subversión 0.82)
- `legibilidad.js` (`apilar`, cada 250 ms): la racha y `.pb-mx` se apartan a la derecha de `.hud-party` (los botones, una sola vez por partida y no si el editor del HUD los movió); `.pb-fiebre` va debajo de `.bossbar`/`.minibars`/`.djh` y empuja `.toasts` por debajo.
- `guia.js`: la etiqueta del objetivo prueba debajo, encima y a los lados del Pokémon y elige el primer hueco libre.

## HUD y pausa en el móvil (Subversión 0.81)
- `legibilidad.js`: `--sl`/`--sr` = el mayor de los dos márgenes seguros (al girar el móvil 180° la cámara cambia de lado y desplazaba el HUD); el minimapa solo se aparta más durante la partida, nunca vuelve atrás.
- `mega-dynamax.js`: los botones usan `--sl`; un botón oculto guarda su hueco (`visibility`), así el otro no se mueve.
- `hud-editor.js` (arreglo de la pausa en pantallas bajas): filas `auto auto 1fr`, pie desplazable si no cabe y botones algo más bajos.
- `historia.js`: el botón Laboratorio de la pausa va en `.pz-tabs` (antes, al lado de los botones, los estrechaba).

## Modo historia y Lite para Windows (Subversión 0.80)
- `site/historia.js` (nuevo, solo con `PB_EDICION === 'lite'`): botón «Modo historia» en la fila de Encargos; ranuras en `profile.pbHistoria`; profesor de cada región, líderes en orden (`PB_GYM.sel`) y Liga con su campeón (`run.__gym.l`); diálogos, VS, resultado al volver al menú. Envuelve `__pbApp.startRun` (otra partida deja la historia en pausa) y `run.saveAndQuitOnce` (adelanta el Polvo: `stats.pbDust` negativo + `profile`/`snap`). Laboratorio propio en el capítulo y en la pausa (`PB_LAB`, `meta.buyLab`, copia en `meta.snap`).
- `main-…js`: `finishRun` acepta `pbDust` negativo (`stardust = max(0, stardust + pbDust)`). `gimnasios.js`: `run.__gym.l` (rival que no es líder, sin medalla).
- Retratos en `site/assets/historia/`: líderes de Pokémon Reloaded; el resto, de Pokémon Showdown con la acción «Historia» (`.github/workflows/historia.yml`, `tools/historia_showdown.txt`).
- Lite para Windows: trabajo `windows-lite` (sin los otros juegos; `package.json` como «PokeBonk Lite», appId `.lite`). `preload.js`/`main.js`: `pokebonkDesktop.edicion()`; `actualizador.js`: plataforma `windows-lite` y sin módulos de otros juegos; `contenido.py`: huella `windows-lite` y `--exe-lite`. `Actualizador.java`: la Lite ya no se queda con la versión vieja por los módulos que no tiene.

## Edición PokéBonk Lite (Subversión 0.79)
- `.github/workflows/compilar.yml`: trabajo `lite` (sin los otros juegos, `config.json` con paquete `….lite` y nombre «PokéBonk Lite») que publica `PokeBonk-Lite.apk` en la release; `contenido` lo espera y lo añade al manifiesto.
- `site/edicion.js` (nuevo): `PB_EDICION` = 'lite' o 'completa' según el paquete (`AndroidMenu.edicion()` en `MainActivity`). En la Lite: `pokeisaac-boton.js` no pone la Sala de juegos y `remaster.js` quita las insignias de los otros juegos (Maestro pide 1 juego).
- `Actualizador.java`: en el paquete `.lite` usa la plataforma `android-lite` (su APK completo) y no baja los módulos de otros juegos. `tools/contenido.py`: huella `android-lite` (sin `config.json`) y `--apk-lite`.

## Medallas oficiales con bonificaciones (Subversión 0.78)
- `assets/medallas/<lider>.png` (64): sprites de PokeAPI/sprites (`sprites/badges`); Alola usa `ui/types/<tipo>.png`. Créditos en `remaster.js`.
- `gimnasios.js`: tabla `BONO` (la de los Alfas de apoyo por tipo, a la mitad); al empezar cada partida (menos duelos) añade a `run.tempMods` una por medalla y +3 % de daño por región completa, y recalcula. La sección Gimnasio enseña las medallas (gris las que faltan, con su bono de título).

## Gimnasios y rival (Subversión 0.77)
- `gimnasios.js` (nuevo): 68 líderes (8 por región; 4 kahunas en Alola) con tipo y equipo. Sección «Gimnasio» en Preparar partida (líderes en orden); en la partida, `PB_GYM.jefe` cambia los 3 guardianes por su equipo (sin captura) y el 65 % de los salvajes normales pasa a su equipo (envolviendo `PB_REGIONES.remap`). Medallas en `profile.pbMedallas`; 300 de Polvo cada una y 1.000 al completar la región.
- `rival.js` (nuevo): Azul aparece una vez en la zona 2 (min. 4) como élite con unas 3-7 veces la vida de un élite; su inicial (Bulbasaur/Charmander/Squirtle) le gana al tipo de tu Pokémon y evoluciona con los encuentros (`profile.pbRival`). Derrotarlo: +150 ₽ y +100 de Polvo.
- `main-…` (`spawnBoss`): `PB_GYM.jefe(run)` puede cambiar la especie del guardián (y lo deja sin captura).

## Escuderos, clima, oro en el Laboratorio y Pokédex regional (Subversión 0.76)
- `curanderos.js`: papeles de apoyo en tabla (`ROLES`): curanderos (bit 32) y escuderos (bit 64, especies de `Rh`), cada uno con su tope, espera, marca, aviso y especies por avance o región; escuderos con +50 % de PS. `menus-…` (`$fjadv2`): el escudo de los escuderos también se multiplica por `PB_CURA.mult`.
- `clima.js` (nuevo): aviso del clima propio de cada zona y ±15 % al daño de los salvajes que aparecen con ese clima según su tipo (tabla igual que la del juego).
- `oro-guardado.js`: caja en el Laboratorio para cambiar oro guardado por Polvo (10 ₽ = 1).
- `remaster.js`: insignia `-h` «Explorador de X» (mitad de la Liga regional, 400) en todas las regiones; Kanto (1-151) y Johto (152-251) con `-h` y `-c` «Campeón».

## Curanderos con escudo y autocuración (Subversión 0.75)
- `curanderos.js`: tope 2/3/4 curanderos vivos (según avance), espera 18→8 s, probabilidad 10 %. `PB_CURA.pulso`: tras cada pulso de un curandero, +10 % de PS para él (× `mult`) y escudo +8 % de PS máx. (tope 20 %, × `mult`) a hasta 8 salvajes cercanos que no sean jefes ni capturas, con anillo azul.
- `menus-…` (`$fjadv2`): llama a `PB_CURA.pulso(run, i, cercanos)` tras el pulso de un curandero.

## Oro ahorrado solo fuera de la partida y curanderos más visibles (Subversión 0.74)
- `oro-guardado.js`: `take()` devuelve 0 (el ahorro no entra en la partida); `put(g)` suma lo de la partida a la hucha; `set(v)` para gastar fuera. `megas-tienda.js` usa `set`.
- `curanderos.js`: sin curanderos inyectados antes de 25 s de zona; los curanderos normales (no élites, Alfas, jefes ni remotos) con el doble de PS; el aviso (banner la primera vez, toast cada 45 s como mucho) salta cuando uno está a menos de 20 de distancia.

## Zonas de 15 minutos (Subversión 0.73)
- `zona.js` (nuevo, en `index.html` tras `curanderos.js`): `PB_ZONA(run)` = 900 s (600 en duelos) y `PB_ZONA_EXTRA` añade al guion del director los eventos de 600-900 s con su generador con semilla.
- `main-…`: el enjambre final (`stageTime>=600`) y el reloj (`600-stageTime`) usan `PB_ZONA`. `menus-…`: el guion llama a `PB_ZONA_EXTRA` antes de ordenarse; los límites de reintento (570/540) son `PB_ZONA-30/-60`; la guía muestra 15:00 y «15 minutos».

## Forma regional legible en tema oscuro (Subversión 0.72)
- `regionales.js` (`row`): el recuadro fija su color de texto (`#2a2340`, nota `#4a4366` sin opacidad, vista previa `#1a5a7a`) en vez de heredar el claro del panel oscuro.

## Curanderos en todos los mapas (Subversión 0.71)
- `curanderos.js` (nuevo, en `index.html` tras `lan.js`): envuelve `PB_REGIONES.remap` para que, en salvajes normales, de vez en cuando salga una especie curandera del juego (`Lh`: 35, 36, 113, 242, 301, 440, 531, 594, 700, 764, 856-858; primero las de la región), con tope de 1-3 vivas y espera de 28→12 s según el avance del mapa. Envuelve `PB_REG_E` para avisar (banner la primera vez, toast después). Cada 200 ms: anillo verde y cruces sobre los curanderos; los Alfas de apoyo curanderos curan al jugador (2 % cada 8 s de juego, +10 % por vínculo, +25 % por evolución).
- `menus-…`: en `$fjadv2` (pulso de apoyo de curanderos y escuderos) la cura se multiplica por `PB_CURA.mult(run)` (×1 en Bosque Verde, +0,02 por mapa hasta ×1,6; ×1/1,1/1,2 según dificultad) y `PB_CURA.curado` pinta el número verde en cada curado. El escudo de los escuderos no cambia.

## Cooperativo en tu Wi-Fi (Subversión 0.70)
- `lan.js` (nuevo, en `index.html` tras `legibilidad.js`): el móvil anfitrión imita la API `/coop` del servidor oficial (crear, unirse, sondeo, señales, listo, mapa, empezar, chat, echar, otra vez, salir) y los invitados se la piden por la red local. `PB_LAN.Link` sustituye a la conexión WebRTC (`rQ`) y viaja por la misma conexión (los invitados se hablan a través del anfitrión; las instantáneas binarias en base64). Pantalla «Cooperativo en tu Wi-Fi» con crear sala, salas encontradas y dirección a mano; chapita con la IP en la sala.
- `android/.../LanRed.java` (nuevo) y `MainActivity.java` (puente `PBLanNative`): servidor TCP 47321, búsqueda por difusión UDP 47322 (con `MulticastLock`) y cliente; mensajes en líneas JSON entregados por lotes con `evaluateJavascript`. Permisos `ACCESS_WIFI_STATE` y `CHANGE_WIFI_MULTICAST_STATE`.
- Bundles: en `menus-…` `iQ.link` crea `PB_LAN.Link` en modo LAN; el botón Cooperativo del menú sale si hay puente (sin «Necesita una cuenta»); `W$` abre la pantalla LAN; `IY` no cambia la URL en LAN. En `main-…`, el Proxy del backend local responde las llamadas `coop*` con `PB_LAN.api` y `startRun` devuelve la `party` y una semilla común sacada de ella.

## Repaso visual (Subversión 0.69)
- `legibilidad.js` (nuevo, en `index.html` tras `liga-scroll.js`): CSS de contraste (`.currency.bonk`, `.ic-buy.poor`, sombra en etiquetas blancas de color, `.rg-realm.locked`), desbordes (`.bd-foot` envuelve, `.ls-move-top` envuelve en vez de partir palabras, número de `.dx-tile`), elegir compañero (`.screen.sp`) en pantallas de hasta 520 px de alto y panel `.rg-side` en hasta 430 px. Los `.tt` que no caben se encogen (`scale`) y se suben (`translate`). El `.hud-tr` se mueve a la izquierda o se encoge si choca con un `.tc-btn`, salvo que el editor del HUD tenga posición guardada para alguno.
- `guia.js`: la etiqueta del objetivo pasa encima del Pokémon si choca con `.hud-bl`.
- `scroll-bars.js`: la barra se oculta si el punto de arriba o el del centro de su zona están tapados.

## Regiones deslizables e iconos de evolución (Subversión 0.68)
- `liga-scroll.js`: en Elige mapa, `.rg-realms` (regiones) y `.rg-regions` (mapas) llevan `touch-action:none` y un arrastre propio con eventos de puntero (dedo y ratón; a partir de 8 px, y entonces el toque no cuenta como pulsación), más la rueda en horizontal; al abrir se centra `.rg-realm.on`.
- `liga-scroll.js`: en la ficha de la Liga, cada `.ls-evo-mon` (especie leída de `portraits/<id>.png`) lleva el icono `botones/mega.png` si está en `PB_MEGA.MEGAS` y `botones/dmax.png` si está en `PB_MEGA.GMAX`, con el nombre de las formas como título.

## Forma regional en la Liga, lista y pruebas (Subversión 0.67)
- `regionales.js`: el selector de forma regional también sale en la ficha de la Liga (`.ls-hero .ls-id`, tras `.ls-namerow`; la especie se lee del «#NNN»), con vista previa (retrato de PMDCollab y tipos). En modo de pruebas (`PB_PRUEBAS.activo()`) todas las formas están abiertas.
- `liga-scroll.js`: `.ls-roster` se desplaza entera y `.ls-grid` crece a su altura natural (la lista no es virtual: tiene todas las tarjetas).
- `pruebas.js`: también añade a `profile.cosmetics` los aspectos de cada miembro (`look:<m>:1-2`, `tlook:<m>:3-4`, `look:<m>:5-7`, `skin:spectral`); la copia guarda `{ league, cosmetics }` (se aceptan copias viejas con solo la Liga).

## Modo de pruebas temporal (Subversión 0.66)
- `pruebas.js` (cargado en `index.html` antes de `remaster.js`): junto al contador de la Liga (`.ls-count`) de la pantalla de elegir Pokémon, botón «Desbloquear todos (pruebas)» que guarda `profile.league` en `localStorage['pb-pruebas-liga']` y une todos los miembros (`fr` de `defineProperty-…js`); «Restaurar mi Liga» la devuelve. **Temporal: quitar `pruebas.js` y su `<script>` cuando ya no haga falta.**

## Colores de las fusiones regionales y retrato regional (Subversión 0.65)
- `regionales.js`: las 13 fusiones de `RECOLOR` llaman al `cast` de su base con un `run` envuelto (Proxy, uno por partida y paleta) en el que todo lo que pasa por `vfx` y `projectiles` se repinta: números de color y campos `*col*` van a los colores de sus tipos con la misma luminosidad (los casi blancos se dejan); las partículas con dibujo de otro tipo (`FORMA_TIPO`: llamas, rayos, gotas, copos, hojas, rocas) pasan a Wisp o Spark teñidos; y el estado de la base pasa al de su tipo (`ESTADO`). Las fusiones del juego no se tocan.
- HUD (`main-…js`): la clave del retrato incluye la forma regional (`PB_REGIONALES.hud`) y el retrato se dibuja con su sid; así también se repintan sus tipos. `tools/regionales.py` baja los retratos (`portraits/` y `portraits-shiny/`, 40x40) de PMDCollab: 54 y 54.

## Fusiones de las formas regionales (Subversión 0.64)
- `regionales.js` (`FUS`): 37 fusiones de firma (`fu-<región>-<especie>`), cada una con los dos ataques fuertes de su kit (pareja única: la Máquina de Bill busca la fusión por la pareja de ataques). Clonan una fusión de firma del juego (su `cast`, `sfx`, potencia de `JR` e información de `qR`) con nombre, descripción y tipos propios.
- `menus-…js`: antes de registrar las fusiones (`$R.forEach`) añade `PB_REGIONALES.fusiones($R, qR, JR)` al final (los ids de las del juego no cambian), y la firma de un miembro (`rz`) pasa antes por `PB_REGIONALES.firma` (la regional si el jugador usa su forma). `player.kitKeys` lleva la clave de la fusión regional.

## Kits de las formas regionales (Subversión 0.63)
- `regionales.js`: `KITS[región][especie de la línea]` con 4 ataques del juego (todos existen y tienen potencia). `PB_REGIONALES.start(run)` (llamado desde `PB_REGIONES.start`, que corre en todas las partidas antes de dar el primer ataque) cambia `player.roster` por una copia con ese kit y rehace `player.kitKeys`. El pool de mejoras y la guía de movimientos leen `player.roster`, así que también lo usan.

## Formas regionales (Subversión 0.62)
- `regionales.js`: 55 formas con sus tipos (`FORMAS`). Jugador: `profile.pbRegional[familia]`, elegido en el Laboratorio (`lab-individual.js` llama a `PB_REGIONALES.row`); se abre con 1 partida en su región (Hisui = Sinnoh). Un intervalo pone los tipos de la forma (también tras evolucionar y al acabar la mega) y `main-…js` dibuja al jugador con `PB_REGIONALES.psid`. Los ataques no cambian.
- Enemigos: `regiones.js` añade a la lista de cada región sus especies con forma (`reg.extra`, sin `remap`); `menus-…js` llama a `PB_REG_E` al aparecer (pone `t1`/`t2` y `pbSid`) y el dibujo pasa por `PB_RETOS.sid(run, sp, i, E)`.
- `tools/regionales.py` + acción «Regionales»: monta las hojas desde PMDCollab con las funciones de `megas_hoenn.py`; sid = 10000 + 1000·región + especie (debe ser < 20000: el juego toma los ids >= 20000 como variocolor). 54 de 55: falta Stunfisk de Galar (incompleto en SpriteCollab).

## Pasaporte por regiones y tour (Subversión 0.61)
- `remaster.js`: insignias generadas desde `PB_REGIONES` (grupo «Regiones · X», marcadas `region` para no contar en el Maestro): Viajero (`runs_*`), Conquistador (sus mapas con `profile.biomes[mapa] >= 1`), Señor de las leyendas (miembros `legendary` en la Liga), Campeón (toda su Liga) y, en Retos, completar cada mapa y completarlo en Pesadilla. Enseñan el progreso. La ficha de entrenador añade el título «Campeón de X» de la última Liga completada.
- Desafío del Alfa: `MAPAS` incluye los mapas de las regiones nuevas (no los de Retos); sigue eligiendo solo entre los que tienes abiertos.
- Tour: pasos nuevos (regiones, unir a la Liga, megas por investigación o compra, formas extra y evoluciones con reto, Retos). `st.tour = 2`: quien vio el tour viejo lo ve una vez más.

## Retos: Torre Mega y Dominio Gigamax (Subversión 0.60)
- `retos.js`: región especial `retos` (pestaña «Extra», tras Paldea, sin Liga) con los mapas `torremega` y `dominio`. Sus enemigos se limitan a las familias con mega (o con Gigamax), y cada enemigo con mega/Gigamax se dibuja con esa hoja (`PB_RETOS.sid`). Santuarios: Rayquaza, Mewtwo y Zygarde (con su mega); Eternatus Eternamax, Urshifu y Melmetal (Gigamax). Dificultad +160% PS / +110% daño (Dominio +180% / +120%). Contadores `retos`, `retos_local`, `runs_r`.
- `regiones.js`: regiones `especial` (no cuentan en `regionDe`, sin bono de local), `familias(todos)` para limitar enemigos (la caché va por mapa), `alEmpezar(run)` (precarga de hojas) y `genLabel` para la pestaña.
- `menus-…js`: dos ganchos: la hoja de cada enemigo pasa por `window.PB_RETOS?.sid` (si no devuelve nada, la de siempre) y la etiqueta «Gen. N» de la pestaña admite `genLabel`.

## Paldea (Subversión 0.59)
- `paldea.js`: región `paldea` (#906-#1025, tras Galar; con Kitakami y Arándano) con las 72 familias nuevas (paradojas incluidas; Charcadet con rama Armarouge/Ceruledge), 4 mapas (`kitakami`, `glaseada`, `asado`, `zonacero`) con guardianes, jefes, tótems e invocadores de Paldea, y santuarios (Ogerpon y los Leales; los Tesoros Funestos; Pecharunt; Koraidon, Miraidon y Terapagos). Contadores `paldea`, `paldea_local`, `runs_p`. Dificultad +150% PS / +100% daño (Zona Cero +180% / +120%). `maxDex` llega a 1025.
- `formas.js`: Annihilape, Clodsire, Farigiraf, Dudunsparce, Kingambit y Archaludon como evoluciones alternativas con reto (`evo`), y Dipplin como rama de Applin (`eevee`, porque Applin ya tiene rama Flapple/Appletun); Hydrapple sale sola de Dipplin. Comprobado en el navegador que las líneas antiguas siguen como antes.
- Todos los Pokémon de Paldea ya tenían animaciones de PMD; Pecharunt no tiene variocolor (no está en el paquete de Reloaded).

## Galar (Subversión 0.58)
- `galar.js`: región `galar` (#810-#905, tras Alola) con las 48 familias nuevas (Enamorus incluido; Applin con rama Flapple/Appletun), 4 mapas (`lumirinto`, `tundra`, `armadura`, `torrerose`) con guardianes, jefes, tótems e invocadores de Galar, y santuarios (Zarude y Enamorus; Calyrex, Glastrier y Spectrier; Kubfu, Regieleki y Regidrago; Zacian, Zamazenta y Eternatus). Contadores `galar`, `galar_local`, `runs_g`. Dificultad +120% PS / +85% daño (Torre Rose +150% / +100%).
- `formas.js`: Obstagoon, Perrserker, Cursola, Sirfetch'd, Mr. Rime, Runerigus, Wyrdeer, Kleavor, Ursaluna, Basculegion, Sneasler y Overqwil como evoluciones alternativas con reto. Hace falta: al subir `maxDex` el juego añade como evolución normal cualquier especie con `evoFrom`, salvo las de `PB_FORMAS.ci`, y esas líneas habrían evolucionado solas (o al azar, como Meowth o Sneasel). Comprobado en el navegador que siguen como antes.
- `tools/megas_reloaded.py`: 17 Gigamax de Galar (Flapple y Appletun comparten el mismo, como en los juegos; Urshifu usa el Brusco) y Eternatus Eternamax como su Dynamax. Todos los Pokémon de Galar ya tenían animaciones y variocolor de PMD.

## Alola y botones (Subversión 0.57)
- `alola.js`: región `alola` (#722-#809, tras Kalos) con las 55 familias (Ultraentes, Código Cero, Meltan y singulares incluidos), 4 mapas (`jungla`, `wela`, `poni`, `ultraumbral`) con guardianes, jefes, tótems e invocadores de Alola, y santuarios (Tapu Lele y Tapu Bulu; Tapu Koko y Zeraora; Tapu Fini y Marshadow; Solgaleo, Lunala y Necrozma). Contadores `alola`, `alola_local`, `runs_a`. Dificultad +100% PS / +70% daño (Ultraumbral +125% / +80%). Pyukumuku no aprende ataques de daño: su kit usa ataques de Agua genéricos.
- `formas.js`: Lunala (792) como evolución alternativa de Cosmoem; se gana en el Ultraumbral con la línea de Cosmog.
- `tools/megas_reloaded.py`: Mega Crabominable (100919), Mega Drampa (100971) y Melmetal Gigamax (102061) del paquete `reloaded_megas_gigamax.zip`. Todos los Pokémon de Alola ya tenían animaciones y variocolor de PMD.
- Identificadas por el usuario en el paquete: Mega Zoroark (102050), Mega Falinks (102140, para Galar), Mega Scovillain (102330, para Paldea) y, como formas extra opcionales (diseños de fans de Reloaded), Mega Raichu (102001), Mega Tyranitar Negro (102247, sin variocolor) y Mega Steelix de Hielo (102425). Las formas extra van en `window.PB_MEGAS_ALT2` (lista por especie, sid 19000+especie) y `mega-dynamax.js` las suma a las elegibles del Laboratorio. El resto de las «sin identificar» quedan fuera.
- `mega-dynamax.js` + `site/assets/botones/`: botones MEGA y DMAX con las imágenes que aportó el usuario (sin fondo); DMAX gris mientras carga (`dmax-carga.png`) y rosa listo o activo (clase `on`). Los contadores siguen saliendo encima.

## Compilación sin cuota de artefactos
- `.github/workflows/compilar.yml`: los juegos extra (PokéSurvivor, PokéIsaac, Pokelike, PokéPath, Pokémon Survivors) y el contenido final pasan de un trabajo a otro por la caché de Actions (`actions/cache/save`/`restore`, clave por `run_id`, `enableCrossOsArchive` para Windows) en vez de por artefactos. Con el repositorio privado, los artefactos llenaban la cuota de almacenamiento y la compilación fallaba. Las copias del APK y del instalador en las ejecuciones sin etiqueta siguen siendo artefactos, pero ya no tumban la compilación si la cuota está llena.

## Kalos (Subversión 0.56)
- `kalos.js`: región `kalos` (#650-#721, tras Teselia) con las 37 familias (4 ataques que aprende la familia, pasiva, evolución, reto), 4 mapas (`novarte`, `reflejos`, `desolacion`, `desenlace`) con guardianes, jefes, tótems e invocadores de Kalos, y santuarios (Xerneas; Diancie; Hoopa y Volcanion; Yveltal y Zygarde). Contadores `kalos`, `kalos_local`, `runs_k`. Dificultad +80% PS / +55% daño (Cueva Desenlace +100% / +65%).
- `formas.js`: Sylveon (700) como rama de Eevee; se gana en el Bosque Novarte con la línea de Eevee.
- `tools/megas_reloaded.py`: 11 megas de Kalos del paquete `reloaded_megas_gigamax.zip` (códigos internos 100747...100996), revisadas a ojo. Si la carpeta no trae los archivos de una forma ya convertida, ahora la conserva en vez de quitarla de `megas-reloaded.js`.
- Las dos «sin confirmar» de LISTA.md las identificó el usuario: 100820 = Mega Butterfree (12) y 100898 = Mega Floette, el de AZ (670).
- Sin usar del paquete: Pyroar y Meowstic hembra (el juego solo admite una mega por especie más formas X/Y/Z) y los Gigamax de Galar (para Galar).

## Teselia (Subversión 0.55)
- `teselia.js`: región `teselia` (#494-#649, tras Sinnoh) con las 82 familias (4 ataques del juego, pasiva, evolución, reto), 4 mapas (`azulejo`, `resort`, `electrorroca`, `dragospiral`) con guardianes, jefes, tótems e invocadores propios, y santuarios. Contadores `teselia`, `teselia_local`, `runs_u`. Dificultad +60% PS / +40% daño (Torre Dragospiral +80% / +50%).
- El juego ya traía en `data/pokemon.json` y `data/learnsets.json` los 1025 Pokémon, y sprites PMD de casi todos; el límite era `maxDex`.
- `tools/especies_reloaded.py` + `tools/reloaded_numeros.json`: completa con Pokémon Reloaded los Pokémon sin animaciones PMD o sin variocolor. Reloaded solo usa la Pokédex nacional hasta el #493; después mete sus propios Pokémon, así que la tabla número nacional -> número de Reloaded sale de los nombres de su `txt_pkmn.dll` (cifrado por sustitución). Códigos: r < 1000, P<r>/P<1000+r>; r >= 1000, P<1000+r>/P<2000+r>. Si solo faltaba el variocolor, cambia también el sprite normal para que encajen.
- `tools/megas_reloaded.py`: megas de Teselia (Emboar, Excadrill, Audino, Scolipede, Scrafty, Eelektross, Chandelure, Golurk) y Garbodor Gigamax, con los códigos internos de Reloaded.
- `sinnoh.js`: guardianes, jefes, tótems e invocadores propios en sus 4 mapas (antes la ficha copiaba los de Kanto).

## Pokédex: Megas y Gigamax (Subversión 0.54)
- `dex-megas.js` (`window.PB_DEX_MEGA`): panel con todas las formas de `PB_MEGA` (megas, `forms()` y `GMAX`), miniatura del primer fotograma de su hoja PMD (`data/sprites.json`), Pokémon base, tipos y estado. Filtros Todas/Megas/Gigamax/Desbloqueadas y botón de variocolor. Solo informativo.
- `menus-…js`: la Pokédex añade la pestaña `pbmega` y la abre con `PB_DEX_MEGA.panel(i, {nombre, tipos})`.

## Megas de Pokémon Reloaded, formas X/Y/Z y Gigamax (Subversión 0.53)
- Sprites de Pokémon Reloaded 1.9.2.2, con permiso de sus autores, solo para este repositorio privado.
- `tools/megas_reloaded.py`: lee los `.gmspr` originales (zlib desde el byte 8; cabecera delay/origen/n.º de fotogramas; cada fotograma delay/ancho/alto/bytes + BGRA) y arma hojas con el formato de PMD: 5 direcciones de Reloaded + 3 en espejo (o las propias 7/4/1 si la forma las trae), `A` para attack/charge, `H` para hurt y `S` para faint. Variocolor desde los códigos +1000 (101xxx, 151xxx, 201xxx). Escribe `megas-reloaded.js` (`PB_MEGAS_RELOADED`, `PB_MEGAS_ALT`, `PB_GMAX`) y las entradas de `data/sprites.json` (sid 16000+, 17000+ y 18000+).
- `mega-dynamax.js`: une las megas de Reloaded y las de PMD (estas tienen prioridad) sin las que no tienen dibujo; `forms()`/`form()` para elegir forma (`profile.pbMegaForma`); `gmaxOn()`/`gmaxOff()` ponen el aspecto Gigamax durante el Dynamax sin dar las mejoras de la mega.
- `megas-tienda.js`: nombra todas las formas y, si hay más de una, deja elegir cuál usar.
- Mega Raichu X (150026) y Mega Raichu Y (200026), identificadas por el usuario.
- `tools/megas_hoenn.py`: ya no mete megas con el sprite del Pokémon normal; quitadas de `megas-extra.js`.

## Comprar megas en el Laboratorio (Subversión 0.52)
- `megas-tienda.js` (`window.PB_MEGA_TIENDA`): fila en la barra del Laboratorio individual con las megas de la familia del Pokémon elegido, el Polvo y el oro guardado (`PB_GOLD`). Comprar resta 3000 Polvo + 2000 oro (legendarias 5000 + 3000), apunta la familia en `profile.pbMegas` y guarda con `meta.save()`.
- `mega-dynamax.js`: `unlocked()` también da por desbloqueada la mega si la familia está en `profile.pbMegas`. La investigación al 100 % sigue valiendo.
- `lab-individual.js`: `bar()` añade la fila.

## Combates de Kyogre y Rayquaza (Subversión 0.51)
- `leyendas.js` (`window.PB_KITS`): clases `Kyogre` (382) y `Rayquaza` (384) que heredan de la clase base de jefes por fases del juego (`UN`), igual que Groudon o Shaymin. Se crean al primer uso con las dependencias que pasa el juego.
- `menus-…js`: el `default` de `ZN` (kits de legendarios) llama a `window.PB_KITS?.kit?.(e,t,{UN,c,k,A,Oa})`.
- Kyogre: Surf (ondas que se saltan), Hidrobomba, Salpicar (charcos), Rayo Hielo; fase 2 con lluvia y rayos, Trueno y Torbellino; fase 3 con Pulso Primigenio (tres olas gigantes).
- Rayquaza: Pulso Dragón, Ciclón, Velocidad Extrema, Hiperrayo; fase 2 con Enfado y Cometa Draco; fase 3 con Ascenso del Dragón (cuatro caídas y golpe final con cobertura). La embestida frena 3 m antes del jugador para no quedar entre la cámara y él.

## Santuarios de Hoenn y Sinnoh (Subversión 0.50)
- `regiones.js` `mapas()`: si el mapa tiene `santuario`, clona el `sanctuary` del bioma original indicado en `santuario.de`, lo tiñe (`color`, `k`) y le pone `name`, `heart`, `legendaries` y, si hay, `music`.
- `hoenn.js`: Claro del Deseo (encina, Jirachi), Cráter del Monte Cenizo (canela, Groudon), Cueva Ancestral (coast, Kyogre), Cima del Pilar Celeste (iris, Rayquaza).
- `sinnoh.js`: Jardín Floral (forest, Shaymin), Templo Puntaneva (glacier, Regigigas), Caverna del Lago (desert, Uxie/Mesprit/Azelf), Columna Lanza (cave, Dialga/Palkia/Giratina).
- Groudon (`qN`) y Shaymin (`KN`) usan su kit por fases del juego; los demás, el kit genérico de legendario.

## Mega Darkrai y Dialga Primigenio (Subversión 0.49)
- `tools/megas_hoenn.py`:
  - prueba todas las formas mega o primigenias de cada especie, sin las de color alternativo, sombra, bebé o alternativa, hasta que una tenga animaciones;
  - al acabar, lista las formas de SpriteCollab hasta el 493 que aún no se usan;
  - las megas de `SOLO_CON_SPRITE` (las nuevas de Leyendas Z-A, Mega Darkrai y Dialga Primigenio) solo entran si tienen animaciones, sin usar el sprite normal de reserva.
- Entraron Mega Darkrai y Dialga Primigenio.

## Otras evoluciones y más megas (Subversión 0.48)
- `formas.js` (`window.PB_FORMAS`):
  - `ci`: Gallade (475, miembro 280, desde 281), Froslass (478, desde 361), Leafeon (470) y Glaceon (471) con `at: eevee`. Van a la lista de formas de `defineProperty-…js` y a `si`, para que no salgan como evolución normal: si no, `runEvolution` elegía al azar entre Gardevoir y Gallade.
  - `vu`: descripción y meta de cada reto para la ficha (`VU` en `menus-…js`, con `Object.assign`).
  - `fin(run, res)`: lo llama `main-…js` justo después de `result()`. Suma el progreso de cada forma (`counters['jf:<forma>']`, con `meta.runGain` para lo ganado en la partida) cuando la familia del Pokémon de la partida es la del miembro, y al llegar a la meta la añade a `profile.johtoForms`.
  - El servidor local no contaba estos retos, así que las 11 formas de Johto tampoco se podían desbloquear: ahora usan las mismas reglas que enseña el juego.
- La ficha de la Liga dice «Otras evoluciones» en vez de «Evoluciones de Johto».
- `tools/megas_hoenn.py` (acción «Megas»): también Kanto y Johto (Venusaur, Blastoise, Beedrill, Pidgeot, Slowbro, Pinsir, Gyarados, Ampharos, Scizor, Heracross) y Sinnoh (Lopunny, Garchomp, Lucario, Abomasnow, Gallade).

## Sinnoh y motor de regiones (Subversión 0.47)
- `regiones.js` (`window.PB_REGIONES`): la lógica de `hoenn.js` pasa a un motor para varias regiones.
  - `registrar()` recibe cada región: rango, mapas, Liga, bebés, niveles, `oi`, dificultad y contadores.
  - `maxDex` es el mayor tope de las regiones registradas; `MAPAS`, `bebes` y `oi` juntan los de todas.
  - Funciones para el juego: `liga(D)`, `mapas(a)` y `regiones()`.
  - Durante la partida: `listaPokemon()` filtra por región y `remap()` cambia los Pokémon fijos de los sucesos.
  - `start()`, `mods()` y `polvo()` aplican la dificultad y los bonos de local y forastero.
  - `cuenta()` lleva los contadores de Pokémon derrotados y de bajas de local de cada región.
  - Los mapas llevan `region` en vez de `hoenn`. Las regiones van sin huecos de «Próximamente» (`slots: 0`).
- `hoenn.js` queda solo con los datos y se registra en el motor. Los ganchos de `defineProperty-…js`, `menus-…js` y `main-…js` usan `PB_REGIONES`:
  - la lista de bebés que salen de la Liga y `oi` se toman de las regiones;
  - el contador de bajas llama a `PB_REGIONES.cuenta`;
  - la forma Blissey (242) pasa a ser del miembro 440 si la Pokédex llega a Happiny.
- `sinnoh.js`: 45 fichas, más 7 bebés que sustituyen a 113, 143, 122, 185, 226, 315 y 358 (Budew con `[12, 36]`). Cuatro mapas clonados de Bosque Verde, Glaciar Celeste, Costa Tormenta y Cueva Celeste. Dificultad `[1,4, 1,25]` (Mundo Distorsión, `[1,6, 1,35]`) y contadores `sinnoh`, `sinnoh_local` y `runs_s`.
- Con la Pokédex hasta el 493, las evoluciones de 4.ª generación de familias antiguas entran solas en `O.evolutions`. Gallade, Froslass, Leafeon y Glaceon no: su familia sigue la primera evolución de los datos (Gardevoir, Glalie) o la rama de Eevee del juego.
- `bebes.js`: traspaso también a los bebés de Sinnoh.

## Megas de Hoenn (Subversión 0.46)
- `tools/megas_hoenn.py` (lo lanza `.github/workflows/megas.yml` al cambiar el script, o a mano) baja del PMD Sprite Repository las hojas de animación de cada mega de Hoenn y de Groudon/Kyogre primigenios. Busca la forma por su nombre en `tracker.json` y monta el atlas como los de las megas del juego: walk, idle, attack, hurt, faint (Sleep) y charge, una debajo de otra con 8 filas, repitiendo la fila en las de una sola dirección y con alternativas si falta alguna animación. Lo guarda en `pmd/15xxx.png` y `pmd-shiny/15xxx.png` (la variocolor sale de comparar colores), lo añade a `data/sprites.json` con un `?v=` nuevo y escribe `megas-extra.js` (`window.PB_MEGAS_EXTRA`).
- Las que no tienen dibujo en SpriteCollab (Blaziken, Swampert, Aggron, Salamence, Metagross) usan el sprite de la especie normal (`sinSprite`).
- `mega-dynamax.js` añade `PB_MEGAS_EXTRA` a `MEGAS`; `megas-extra.js` se carga antes.

## Hoenn (Subversión 0.45)
- `hoenn.js` (`window.PB_HOENN`), cargado antes de los módulos del juego:
  - `liga(D)`: 73 fichas de Hoenn (`pbHoenn: true`) más Azurill (298) y Wynaut (360), copiadas de las fichas de Marill (183) y Wobbuffet (202) con un primer nivel de evolución en el 12. Los kits usan ataques de `data/moves.json`, las pasivas son de las que ya existen y las ramas van con `branch`/`evoLevel` (Wurmple, Nincada, Clamperl).
  - Retos: contadores del juego (`league`, `kills_<mapa>`, `boss_<mapa>`, `tier_<mapa>`) y tres nuevos: `hoenn` (Pokémon de Hoenn derrotados), `hoenn_local` (bajas con un Pokémon de Hoenn en Hoenn) y `runs_h` (partidas en Hoenn).
  - `mapas(a)`: cuatro mapas clonados de Bosque Verde, Isla Canela, Costa Tormenta y Cueva Celeste, teñidos (`tinte`; el suelo del Fondo Marino, a arena) y sin santuario (3 zonas). En la zona 3, el jefe es el legendario de `legendaries`, como ya hacía el juego con los mapas sin santuario.
  - `region()`: región Hoenn (`gate: johto`). `lista()` filtra `O.pokemon` durante la partida por región. `remap()` cambia por uno de Hoenn del mismo tipo y fase a los Pokémon fijos de Kanto que traen algunos sucesos (niebla, estampidas…), salvo jefes y especiales.
  - `start()`: dificultad (`diff.enemyHp`, `diff.enemyDamage`), `goldMul` ×1,2 para forasteros y `runs_h`. `mods()`: +10 % daño local. `polvo()`: ×1,3 de Polvo para forasteros.
- `defineProperty-…js`:
  - `maxDex`/`nextDex` 386 si existe `PB_HOENN`, con los mapas en `biomes`.
  - Las fichas, los mapas y la región se añaden con `PB_HOENN`.
  - 183 y 202 salen de la Liga (su familia empieza en 298 y 360), con `oi` actualizado.
  - El reto de Mew cuenta solo los miembros hasta el 151.
- `menus-…js`:
  - `O.pokemon` es un getter con `PB_HOENN.lista`, y la lista completa queda en `pokemonAll`.
  - `kantoLeague` solo cuenta hasta el 151.
  - En las bajas se suman los contadores `hoenn` y `hoenn_local`.
  - `enemies.spawn` pasa por `PB_HOENN.remap`.
- `main-…js`:
  - `PB_HOENN.start` al crear al jugador y `PB_HOENN.mods` en `recompute`.
  - `pbMul` en el resultado, que multiplica el Polvo de la partida antes de sumar el de las fiebres.
- `bebes.js`: el traspaso también da Azurill y Wynaut a quien tenía a Marill y Wobbuffet.

## Empezar por la primera forma (Subversión 0.44)
- `defineProperty-…js`: tras quitar de la Liga lo que pasa del tope de la Pokédex, se quitan 25, 35, 39, 106, 107, 237, 124, 125 y 126 si su bebé (172, 173, 174, 236, 238, 239, 240) está en la Pokédex abierta. La Liga queda en 129 miembros, uno por familia. `oi` (especie → miembro) manda esas especies y 26, 36 y 40 a su bebé.
- `bebes.js` (`window.PB_BEBE`): traspaso. Si el perfil tiene a uno de los quitados en `league`, se añade su bebé (`meta.save()`). Se mira cada segundo durante el primer minuto, por si el perfil llega tarde.
- Ganchos que quedan en `main-…js` y `menus-…js`: `PB_BEBE.start(run, R)` al crear al jugador, `PB_BEBE.evo()` al principio de `$fgy9bf`, el primer `nextEvo` con `player.speciesId` y `PB_BEBE.pre()` en `$6`. Ahora no hacen nada (de una prueba anterior, en la que el intermedio empezaba como su bebé).

## Fiebres y Bonkoin doble (Subversión 0.43)
- Tres objetos nuevos en la lista de objetos de `defineProperty-…js` (antes de `gold-teeth`): `pb-fiebre-oro` (rareza 2, hasta 3), `pb-fiebre-polvo` (rareza 2, hasta 3) y `pb-bonk-doble` (rareza 3, hasta 2), con `mods: []`. Nombres en `data/items.json` (ids 9001-9003) y `data/i18n/en.json`; se cambia su `?v=` (`pbfiebr1`) para que no salga el JSON viejo de la caché. Iconos nuevos en `assets/items/pb-*.png`, hechos con los de Pepita, Maxipepita, Polvo Estelar, Trozo Estrella, Fragmento Cometa y Bonkoin.
- `fiebres.js` (`window.PB_FIEBRE`), cada 100 ms con `window.__pbRun` y el tiempo de juego (`run.time`), sin Duelos:
  - Fiebre del oro: cada 90 s menos 15 s por unidad extra (mínimo 30 s), 15 s con `run.goldMul` multiplicado (las monedas usan `goldMul`), 3 monedas por segundo alrededor con el valor normal `(2 + 2·zona)·oro`. Al acabar se divide `goldMul` por el mismo número.
  - Fiebre del Polvo Estelar: cada 120 s menos 20 s por unidad extra, 15 s en los que cada derrota suma `0,1 · diff.stardust · múltiplo` a `stats.pbDust`.
  - Múltiplo: `1,5 + u`, con `u = 1 − (1 − aleatorio)^(1 + suerte/40)`, redondeado a décimas.
  - Bonkoin doble: `menus-…js` llama a `PB_FIEBRE.bonk(run)` después de `stats.bonks++`; probabilidad `0,25 + 0,25·(unidades − 1) + 0,002·suerte`, como mucho 0,75.
- `main-…js`: `result()` y `leanResult()` llevan `pbDust` y el servidor local lo suma al Polvo de la partida.

## Un solo tower defense y optimización de espacio (Subversión 0.42)
- PokéPath TD original fuera: `pokepath/index.html` es ahora PokéBonk TD (lo que era `remaster.html`) y `remaster.html` solo redirige a `index.html` (para enlaces y `st.ult` antiguos). Fuera el `alt` «PokéPath TD original» de `pokeisaac-boton.js`; en la Sala, un `st.ult = 'pokepath'` antiguo cuenta como PokéBonk TD.
- `td.js`: fuera la vista clásica (`pb-td-vista`, que se borra al cargar), los botones «Vista clásica» y «Vista nueva» y el cambio de `src` de música y sonidos en marcha; solo queda el cambio a `boss.ogg` con jefe (vuelve al `src` que tenía). En el menú, «Salir» ocupa dos columnas.
- `tools/preparar_pokepath.py`: conserva `td/` al preparar una versión nueva, escribe `index.html` con el arranque de `td/arranque.js` y `remaster.html` de redirección, y `optimizar()` (también con `--optimizar DESTINO`) deja en `src/js/file/audio.js` la música de PokéSurvivor por mundo (calculada con node desde `routeData.js`, igual que antes en `td.js`) y los sonidos de interfaz y efectos equivalentes de `td/sonidos`; quita los disparos genéricos (ya silenciados: suenan por tipo desde `td.js`). Después borra los mp3/wav que `audio.js` ya no nombra, `src/js/bootstrap.js`, las letras sin referencia (Gaegu-Bold, Silkscreen) y en `assets.json` las entradas de archivos que no están (la pantalla de carga precargaba los 50 MB de música). `site/pokepath`: de 98,5 a 39,4 MB.
- `tools/preparar_pokemonsurvivors.py`: `podar()` (también con `--podar DESTINO`) quita las carpetas que solo tienen páginas html de su web (Pokédex, guías, tier list, novedades, legal, apoyo… en todos los idiomas), sus miniaturas de creadores, sitemap, robots, llms.txt, og.png, sim-build.json y la clave de IndexNow. Se queda el `index.html` de cada idioma con `assets/`, `icons/`, `fonts/` y manifiestos. Aplicado a la copia del repo: de 86,5 a 57,2 MB. CI lo hace en cada compilación (también con la compilación guardada en caché: `--podar` tras copiarla).
- `tools/contenido.py`: el módulo `pokepath` se llama PokéBonk TD.

## Sala de juegos y entrenador único (Subversión 0.41)
- `pokeisaac-boton.js`: lista de juegos con color, nombre en el Pasaporte y segundo botón (`alt`: PokéPath TD original, PokéIsaac online). El botón (ahora «Juegos», dorado) abre la pestaña Juegos de `remaster.js`; la lista antigua queda de respaldo.
- `remaster.js`: pestañas Juegos, Pasaporte, Desafíos, Traspaso, Actualizaciones, Acerca de. Juegos: tarjetas con progreso (de `leer()`) e insignias; la última jugada (`st.ult`) grande arriba. Entrenador: experiencia calculada de las partidas de todos los juegos, insignias y semanas del Desafío; nivel = floor(sqrt(xp/150))+1, cada nivel nuevo da 100×nivel de Polvo (`st.nivel`). Ficha en `localStorage` sin prefijo `pb-entrenador` (nombre, nivel, título y el dibujo del compañero copiado del canvas del menú como PNG). Juego de la semana: rota entre 7 juegos, cuenta desde la base al empezar la semana (`st.reto`), metas con 200/400/800 de Polvo. `#sala` al volver abre la Sala. Créditos y licencias en Acerca de.
- `volver-pokebonk.js` (el mismo en todos los juegos): cortina de 1,3 s con la marca, el juego y la ficha del entrenador; botón «REMASTER» que vuelve a `index.html#sala`. `pb-guardado.js` deja `window.__pbCrudo` para leer `pb-entrenador` sin prefijo. PokéBonk TD enseña el compañero en su barra.
- Donaciones: fuera `donate.js` (y de `porting/port099.py`).
- PokéSurvivor: `juegos/poke-survivor/LICENSE-NONCOMMERCIAL.md` con el Required Notice de JPTER78 (PolyForm Noncommercial 1.0.0 desde el 14-10-2026; el port 6.2 incluye contenido posterior), nota en `LICENSE` y `README.md`; también en `pokepath/td/musica/LEEME.txt`. El repositorio original ya no está publicado.

## PokéBonk TD: sonidos nuevos (Subversión 0.40)
- `td/sonidos/*.ogg`: efectos de PokéSurvivor (`juegos/poke-survivor/audio/sfx_*`, MIT). `td/pmd.json` lleva también el primer tipo (`t`) de 755 de los 779 Pokémon de PokéPath (de `data/pokemon.json`, también formas mega/regionales por nombre base).
- Interfaz y efectos del juego: se cambia el `src` de sus `Audio` (`soundUi`, `soundEffect`) por el equivalente de PokéSurvivor; los disparos genéricos (`projectileN`, `areaN`, `beamN`, `sword`, `ice`…) se silencian (`muted`) en la vista nueva y suenan desde `td.js`: `shot_<tipo>` al detectar el disparo, `hit` en golpes físicos o especiales (no en quemadura, veneno…), `faint` / `bossDown` al caer y `boss` al llegar el jefe. Tres reproductores por sonido, como mucho uno cada 70–90 ms; volumen de `config.audio` (master × efectos), respeta `mute[0]` (silenciar proyectiles).
- La vista clásica recupera los `src` y quita el silencio. Prueba de valores repetida: iguales.

## PokéBonk TD: música y jefes (Subversión 0.39)
- Música: `td/musica/*.ogg` son las pistas de PokéSurvivor (`juegos/poke-survivor/audio/mus_*`, MIT, JPTER78; `LEEME.txt`). `arranque.js` deja `soundMusic` y `routeData` en `window.__tdMusica`; cada canción de PokéPath se asigna a una pista según el mundo de la primera ruta que la usa (secretas: judgment; Halloween: halloween) y se cambia el `src` del propio `Audio` del juego (volumen, fundidos y pausa siguen siendo suyos). Con un enemigo `enemy.isBoss` vivo, la pista actual pasa a `boss.ogg`. La vista clásica recupera los `src` originales.
- Jefe: al aparecer un jefe con zoom 1, la cámara se acerca a ×1.8 y lo sigue con `requestAnimationFrame` hasta que cae; cualquier zoom manual (rueda, botones, dos dedos, arrastre) lo cancela. `navigator.vibrate` al perder vida (60 ms) y al llegar el jefe. Opciones en `localStorage` `pb-td-opciones` (con el prefijo de `pb-guardado.js`), botones en la barra de Ajustes. Android: permiso `VIBRATE` (cambia el hash de la app, así que el actualizador baja el APK).
- Botones de las ventanas del juego: mismos colores de fondo, sin borde negro, redondeados, sombra abajo y letra redondeada (td.css). «Reroll» (sin traducción en `text.js`) y «Route View» se traducen en `td.js`.
- Pasaporte (`remaster.js`): el juego se llama PokéBonk TD en las insignias (mismos ids); nuevas `pprt` (oleada 100 en una ruta, desde `player.records`), `pp5r` (en 5 rutas) y `pp500` (500 estrellas).
- Traspaso probado con una partida del TD: exportar, borrar, importar devuelve `pokepath:data` y `pokepath:pb-td-opciones` iguales.

## PokéBonk TD: combate con animaciones (Subversión 0.38)
- `td/pmd.json` (generado de `data/sprites.json` y `data/pokemon.json`): para los 651 Pokémon de PokéPath que tienen hoja en `assets/pmd`, la posición, tamaño y duración de sus animaciones de ataque, golpe y caída. Los sprites de PokéPath son las mismas hojas PMD (mismas 8 direcciones), así que la fila de dirección se reaprovecha.
- `arranque.js` deja `Tower` y `Enemy` en `window.__tdClases`. `td.js` envuelve `Tower.draw` (detecta el disparo cuando `attackCooldown` se recarga), `Enemy.draw` (caída cuando `dying`; destello del golpe) y `Enemy.getDamaged` (marca el golpe y si fue crítico, solo si bajó la vida), y en `drawImage` cambia el sprite por el fotograma de la hoja de PokéBonk mientras dura la animación. `Enemy.drawFloatingTexts` dibuja los números más grandes.
- Toque corto sobre un Pokémon del mapa: abre `UI.pokemon[i].info` (si no estás colocando uno, sin Bombardeo pendiente ni Patines y sin haber arrastrado). Arrastrar sigue moviéndolo.
- Prueba de valores repetida: iguales.

## PokéBonk TD: ventanas nuevas (Subversión 0.37)
- `colocar()` tiene tres modos: mapa (con zoom), sección abierta (Caja, Mochila, Tienda, Mapa, Pokédex, Perfil, Desafío, Ajustes) y ventana pequeña (`GameScene`: avisos, datos del Pokémon, tutorial…). Un `MutationObserver` sobre `#screen` recoloca al abrir o cerrar.
- Secciones: barra propia con el nombre y Cerrar (`sections.find(isOpen).close()`). En vertical (`tdr-rep`) el contenedor de la sección pasa a medir 440 de ancho lógico y el alto que quede (`--tdr-lw`, `--tdr-lh`), escalado al ancho del móvil; en horizontal (`tdr-reph`) se escala al alto con un alto lógico de unos 470 y hasta 1000 de ancho. Ajustes por ventana en `td.css` (Tienda en dos columnas, Mapa escalado y rutas de dos en dos, Perfil apilado, Mochila más alta).
- Ventanas pequeñas: centradas y escaladas para caber (hasta ×1.6), fondo oscuro a toda la pantalla; en vertical sube la letra pequeña de la ventana de datos del Pokémon.
- Colores: variables del tema del juego sobrescritas con `html.tdr-on[data-theme]`. Letra: `data-font="Lexend"` (para usar los ajustes de tamaño del juego) con Nunito; la vista clásica vuelve a llamar a `menuScene.applyFont()`.
- Textos: «WAVE $X | $Y/min» se enseña en español; los textos cortos que coinciden con la versión inglesa de `text.js` se cambian por la del idioma elegido (títulos que el juego pone al arrancar, antes de elegir idioma en una partida nueva).
- Prueba de valores repetida con la vista clásica de verdad activada (`.tdr-classic`): mismos resultados.

## PokéBonk TD: todas las rutas (Subversión 0.36)
- Recorrido automático de las 47 rutas de `routeData` (oleada 1 y oleada 100) con `area.loadArea`: cargan sin errores, se coloca un Pokémon tocando una casilla y empieza la oleada; en la vista clásica la misma secuencia da lo mismo. Mapas grandes (6-1 `xl`, 7-2 `xlv`, 10-4 `xlh`): el arrastre con un dedo del propio juego sigue funcionando con la pantalla escalada.
- Con zoom en mapas normales, un dedo sobre una zona sin Pokémon (y sin estar colocando uno) mueve el mapa; si hay un Pokémon, el toque es del juego (moverlo de casilla).
- `.tdr-wave.placing`: el juego desactiva "Siguiente oleada" mientras colocas; el botón lo dice y explica cómo cancelar.

## PokéBonk TD: mapa más claro (Subversión 0.35)
- `td.js` envuelve `drawImage` del contexto del mapa del juego: las imágenes de `/images/pokemon/` dibujadas con recorte (torres y enemigos) se agrandan ×1.65 desde su centro, solo en la vista nueva. No toca posiciones, casillas ni alcance.
- Zoom: el `transform` de `#screen-root` lleva el zoom y el centro; `#view-port` se recorta (`clip-path`) al hueco del mapa. Dos dedos (se capturan antes que el juego), rueda y botones + / − / Ver todo. Con una ventana del juego abierta, zoom 1 mientras está abierta. El juego sigue leyendo la posición real del mapa, así que tocar casillas con zoom funciona igual (prueba: con zoom ×1.96 la torre queda en la misma casilla que en la vista clásica).
- Próxima oleada: nombre, PS, armadura, velocidad, daño, oro y pasiva leídos del panel de información del juego. Huecos bloqueados en una tira; hasta 6 huecos, tarjetas anchas en 3 columnas.

## PokéBonk TD en pruebas (Subversión 0.34)
- `site/pokepath/remaster.html`: el mismo PokéPath TD (mismos CSS y módulos de `src/`, mismo guardado `pokepath:data` con `pb-guardado.js`) arrancado por `td/arranque.js`, que solo envuelve `Main.prototype.load` para dejar el objeto principal en `window.__pp`.
- `td/td.js` coloca la pantalla del juego (1238x674) con `translate` y `scale` para que la zona del mapa (259,25 720x624) quede donde toca y esconde (visibility) los paneles de escritorio. La interfaz nueva copia el estado (`player`, `area`, `team`, y lo que enseñan los botones originales) cada 150 ms y cada botón pulsa el botón original (`UI.pokemon[i].deploy/levelUp/item/info`, `nextWave`, `pauseWave`, `speedWave`, `autoWave`, `section[...]`), así que las reglas son las del juego. Las ventanas del juego (secciones de 720x624 y `GameScene`) caen centradas en el mapa. `textContent` en vez de `innerText` porque los paneles están ocultos.
- Prueba: la misma secuencia (subir de nivel dos veces, colocar en una casilla, Auto, velocidad, siguiente oleada) con los botones originales y con los nuevos da el mismo estado (oro, nivel, torres, auto, velocidad, oleada); con un botón mal enlazado la prueba falla.
- Partida nueva: el perfil empieza en español. Entrada "PokéBonk TD (en pruebas)" en Más juegos; PokéPath TD sigue igual.

## Vertical rediseñado (Subversión 0.33)
- Partida: `.hud-top` pasa a ser una barra de lado a lado (deja libre la pausa) con cuadrícula de 3 columnas y 2 filas; `.ht-c` y `.wallet` con `display:contents` para repartir zona y reloj (izquierda), cuenta atrás (centro, ocupa las dos filas) y dinero y precios (derecha). `.hud-tl` y `.hud-tr` debajo, con `zoom` (top/right divididos entre el zoom) para no pisar el `scale`/`translate` del Editor del HUD; contador de capturas a la izquierda del minimapa. `.bossbar` y `.minibars` dejan de usar el centro y ancho que calcula el juego (`--hc`, `--hw`, pensados para la barra en horizontal) y van a lo ancho debajo. Pausa, apuntado y MEGA/DMAX en la columna derecha.
- Menú: `.jay-actions` con filas automáticas; los eventos (había una regla `:has(.event + .event)` de 0.9.9 que los ponía a media anchura) y Encargos a todo el ancho. `.jay-sidebar` anclada abajo y `.jay-companion` ocupa el hueco que queda, así no se monta sobre el pie con pantallas de proporción 412x880 o más bajas.

## Modo vertical (Subversión 0.32)
- Todo en `site/vertical.js`, con selectores bajo `html.pb-portrait` (la clase que pone el propio archivo cuando la pantalla es más alta que ancha), así que en horizontal no cambia nada.
- Subir de nivel: `.modal .cards` en columna y cada `.card.offer` en fila (`.top` de 92 px a la izquierda con rareza arriba y tipo abajo, `.bd` a la derecha).
- La Liga: `.ls-hero` y `.ls-top` con `display:contents` para que sus partes sean celdas de la cuadrícula de `.ls-main` (sprite e identidad arriba, `.ls-roster` con altura máxima y su propio scroll, después `.ls-top-stats` y `.ls-body`). `.ls-cta` fijo abajo; en pantallas de menos de 400 px los botones Movimientos y Plan quedan solo con el icono.
- Elige mapa: `.rg-main` en columna, `.rg-headrow` en columna, `.rg-route` en cuadrícula y `.rg-go` fijo abajo (sin la animación de `.rg-side`, que lo descolocaba).
- Pausa (`.pz-tabs`), Ajustes (`.st-tabs` en dos filas), Encargos (`.tk-title` puede ocupar dos líneas) y Mutación del día (`.mu-poster`).
- También en horizontal: el chip de tipo de las cartas (`.card.offer .row .chip`) ya no se parte en dos líneas.

## Auto aprender (Subversión 0.31)
- PokéBonk: `site/autohab.js` puntúa las ofertas de subida de nivel según la especialidad (Ataque contra At. Esp. base de `data/pokemon.json`, o la clase de los movimientos que lleva): movimientos de esa clase y de su tipo, favoritos, repartir niveles, vitaminas por estadística (Proteína/Calcio según la clase) y nunca el Incienso Maldito. Parches: en `main-*.js`, `doLevelUp` pregunta a `PB_AUTOHAB.pick` y aplica la elegida como cuando solo hay una opción; en `menus-*.js`, `window.__pbOfferInfo` dice la clase y el tipo de cada movimiento y la estadística de cada vitamina. Botón en la pausa (localStorage `pb-autohab`), junto a "HUD y guía" en la franja de arriba.
- PokéSurvivor (`juegos/poke-survivor`): `_auto_pick` en `main.gd` (evoluciones, lo que desbloquea una, movimientos de su tipo, estadísticas según Ataque, vida y velocidad del Pokémon; cura solo con poca vida) y botón en Pausa > Opciones (`settings.autohab`).
- Pokémon Survivors: `tools/parche_pokemonsurvivors.py` añade `pbAutohab.ts` a su código antes de compilarlo y lo llama en la fase `levelup` (solo en partida individual); `pb-autohab-ps.js` pone el botón en su pausa con el mismo ajuste `pb-autohab`.

## Actualizador: archivos grandes y PokéSurvivor estable (Subversión 0.29)
- GitHub no admite archivos de más de 100 MB en un repositorio: la publicación de la v56/v57 falló por `pokesurvivor/index.pck` (141 MB). `tools/publicar_contenido.sh` (usado por el trabajo `contenido` y por el flujo manual "Publicar contenido") parte los de más de 95 MiB en trozos de 90 MiB (`archivo.pbparte.00`, `.01`...) y los dos actualizadores los juntan y comprueban el SHA-256 del archivo entero.
- La exportación web de Godot de PokéSurvivor cambiaba de bytes en cada compilación: ahora se guarda en caché por el hash de `juegos/poke-survivor/**`, así su módulo solo cambia cuando cambia el juego.

## Actualizador (Subversión 0.28)
- Mecanismo: el juego es la web de `site/` que la app sirve desde sus archivos (Android: assets del APK; Windows: carpeta del programa, protocolo `app://`). La actualización es una capa encima: los archivos que cambian se bajan a `files/contenido/vN-*/` (Android) o `%APPDATA%\PokeBonk\contenido\vN-*\` (Windows) y el servidor de la app los sirve antes que los suyos (o 404 si la versión nueva los quita). No cambia nada del juego.
- `tools/contenido.py base`: `site/contenido.json` (versión, subversión, huella del código nativo de cada plataforma y módulos con su hash) y `site/contenido/<módulo>.json` (tamaño y SHA-256 de cada archivo). Va dentro de la app. Módulos: `pokebonk` y una por cada juego de Más juegos.
- Trabajo `contenido` (solo con etiqueta vN): publica el juego tal cual va en la app en la rama `contenido` con la etiqueta `contenido-vN`, y `contenido.json` con el historial, la dirección de los archivos y el APK/instalador completos con su SHA-256. Se firma con la clave del APK (SHA256withRSA): Android lo comprueba con el certificado de la propia app, Windows con `desktop/clave.pem` (sacado del keystore al compilar).
- `android/.../Actualizador.java` y `desktop/actualizador.js` (misma lógica): buscar (manifiesto firmado; listas de los módulos con hash distinto), aplicar (carpeta nueva `.tmp` con lo que sigue valiendo + lo bajado, comprobado por SHA-256, 6 descargas a la vez; se renombra al final y `estado.json` se cambia de golpe), confirmar (el juego avisa al arrancar; tras 2 arranques sin confirmar se vuelve a lo anterior), restaurar y completo. Si la huella nativa cambia: Android baja el APK directamente a una sesión de `PackageInstaller` (SHA-256 comprobado antes de `commit`, permiso `REQUEST_INSTALL_PACKAGES`); Windows baja el instalador, lo comprueba y lo abre.
- Si la app instalada es otra (versión o huella distinta de la del estado), lo descargado se borra: lo nuevo ya viene dentro.
- `site/actualizaciones.js`: historial, módulos con tamaño, progreso y reinicio; pestaña Remaster > Actualizaciones. El aviso viejo (`updater.js`, solo enlazaba a GitHub) ya no se llama.
- `.gitattributes` con `eol=lf` y `core.autocrlf false` en Windows: los archivos tienen que ser los mismos bytes en las dos compilaciones. `config.json`: `appName` "PokéBonk Remaster" (build.py lo pone como nombre de la app).

## Traspaso, actualizaciones, Desafío, Overlord y gráficos (Subversión 0.27)
- `site/traspaso.js`: exporta `localStorage` (sin las claves propias del equipo: HUD, resolución, orientación...) y todas las bases IndexedDB (esquema, índices y registros; fechas y arrays con tipo en base64) a un JSON comprimido con gzip (`.pokebonk`). Al importar, borra y vuelve a crear las bases, sustituye `localStorage`, deja los `settings` del perfil de este equipo y bloquea las escrituras hasta recargar. Android: `AndroidMenu.saveFile` (MediaStore, Descargas/PokeBonk) y `AndroidMenu.pickFile` (ACTION_OPEN_DOCUMENT).
- Actualizaciones: `MainActivity.UPDATE_REPO` apunta a `moportor6-art/moportor6-art-PokeBonk` (el número del APK es el del tag). Windows: `checkUpdate()` en `desktop/main.js` compara el tag con `0.9.N` y llama a `window.pbUpdateFound`; `pokebonkDesktop.openUpdate` abre el instalador. `updater.js` acepta los dos y un texto propio.
- Desafío del Alfa: rachas (`st.rachas`, metas 3/5/10 semanas) y tabla de récords.
- Pasaporte: lee `user://pokemon_overlord.save` de Pokémon Overlord (IndexedDB `/userfs`, `PokemonOverlord/`) con un lector del formato de `store_var` de Godot 4 (probado con un archivo de Godot 4.5.1); usa `decks_cleared` y `mewtwo_cleared`.
- Gráficos: `tools/completar_graficos.py` (flujo "Completar gráficos") crea los `pmd-shiny` que faltaban cambiando la paleta del atlas normal con los colores de la hoja variocolor de SpriteCollab (`sprite/NNNN/0000/0001/`), y baja los retratos que faltaban (`portrait/NNNN/Normal.png` y `0000/0001/`). Android y Windows sirven el sprite normal, el retrato normal o el icono si aún falta alguno.

## Windows: Electron 44 (Subversión 0.26)
- El segundo volcado, leído entero, mostraba la caída en `StyleResolver::CreateCompositorKeyframeValueSnapshot` (al empezar una animación de `element.animate()` con `transform` y `calc()`), `StyleResolverState::UpdateLengthConversionData` y `CSSPrimitiveValue::ConvertToLength`: un fallo de Chromium 130. Se pasa a Electron ^44.7.0 (y electron-builder ^26). `console-message` acepta la firma nueva (objeto con `level`, `message`, `lineNumber`, `sourceUrl`).

## Windows: cierre al llegar al menú (Subversión 0.25)
- El volcado (Electron 33.4.11, símbolos de breakpad) daba un acceso a memoria nula en `blink::CSSMathExpressionOperation::CreateArithmeticOperationSimplified`, llamado desde `CSSPrimitiveValue::ConvertToLength` por una llamada de JavaScript. La única lectura así era `getComputedStyle(stage, '::before')` en `site/companion.js`: la plataforma usa `calc(n * var(--u))` con `--u: min(calc(100vw / 853), calc(100vh / 480))`. Ahora `--u` se mide con un elemento oculto (`height: calc(1000 * var(--u))`) y el suelo es `alto - 2u - 13,5u`, el mismo valor que antes.

## Windows: volcados de fallos (Subversión 0.24)
- El modo seguro de la 0.23 no sirvió (con `disable-gpu` también se caía, justo al llegar al menú), así que se quitó y `pantalla.json` vuelve a `seguro: 0`. `crashReporter.start({ uploadToServer: false })` hace que Windows deje volcados en la carpeta Crashpad; al caerse la página, el más reciente se copia a `%APPDATA%\PokeBonk\ultimo-fallo.dmp` y se anota en `registro.txt`. Como mucho dos recargas.

## Windows: modo seguro automático (Subversión 0.23)
- En el PC del usuario el proceso de la página se caía al arrancar (`render-process-gone`: `crashed`, código -36861, que solo dice que no había gestor de volcados). `desktop/main.js` guarda `seguro` en `pantalla.json`: si la página se cae en los primeros 90 s, sube el nivel y reinicia con `--pb-reintento` (el registro se sigue escribiendo). Nivel 1: `no-sandbox`, `sandbox: false` y `disable-features=RendererCodeIntegrity`. Nivel 2: además `use-angle=gl`. Nivel 3: además `disable-gpu`.

## Windows: pantalla morada y registro (Subversión 0.22)
- `desktop/main.js` ya no pone `enable-zero-copy` ni `enable-gpu-rasterization`: con una RX 7800 XT la ventana se quedaba con el color de fondo aunque el menú estaba cargado.
- Registro en `%APPDATA%\PokeBonk\registro.txt` (avisos y errores de la consola, fallos de carga, archivos que no existen y caídas del proceso). Ctrl+Mayús+I además de F12. Los archivos que no existen responden 404 en vez de un error de red.
- El trabajo `windows` de `compilar.yml` abre la app 45 s con `PB_DIAG_DIR`: deja en el registro de la compilación el `registro.txt`, el estado de la página y una captura en base64.

## Windows: aviso de copia no oficial (Subversión 0.21)
- `main-DfdwqtE9-*.js` comprueba `location.hostname` y, si no es una dirección conocida (pokebonk.com, `appassets.androidplatform.net` del APK, localhost o red local), tapa el juego con "Esta copia de PokéBonk no es la oficial". La app de Windows carga `app://pokebonk/`, cuyo hostname es `pokebonk`: se añade a esa lista. No se cambia la dirección para no cambiar el origen (y perder lo guardado).

## PokéBonk Remaster (Subversión 0.20)
- `site/remaster.js`: marca "REMASTER" bajo el logo (oculta `.com`) y en el título, botón **Remaster** en la barra del menú con tres pestañas, y tour de bienvenida la primera vez (`localStorage` `pb-remaster`, campo `tour`).
- Pasaporte de entrenador: lee `pokeisaac.save.v1`, `ps:save` (Pokémon Survivors), `poke_*` (Pokelike), `pokepath:data`, `pokeplunder:data` (o la clave antigua `data`, según su contenido) y el `save.json` de PokéSurvivor en IndexedDB (`/userfs`, almacén `FILE_DATA`). Cada insignia da Polvo Estelar una vez (`meta.profile.stardust`, `meta.save()`), nunca durante una partida.
- Desafío del Alfa: semana desde el lunes 5 de enero de 2026 (UTC); Pokémon de la Liga, mapa desbloqueado y dificultad sacados con una semilla de la semana. Se empieza con `App.startRun({species, biome, tier, boosts: [], mode: 'standard'})`; el resultado se lee envolviendo `run.result` de la partida (solo cuando `state` es `over` y las reglas coinciden).
- Parche en `main-*.js`: `applySettings()` deja `window.__pbMeta` y `window.__pbApp` para estos módulos.
- Nombre de la app: `android:label` "PokéBonk Remaster" y título de la ventana de Windows. `productName` sigue siendo "PokeBonk" para no cambiar la carpeta de datos (y no perder partidas).
- `site/pb-guardado.js`: PokéPath TD y PokéPlunder usaban la misma clave `data` de `localStorage`. Ahora cada juego pone un prefijo a sus claves (`window.PB_GUARDADO`) y la clave antigua se pasa al juego que corresponde por su contenido. Lo añade también `tools/preparar_pokepath.py`.

## Soporte extendido: mando y PC (Subversión 0.19)
- `desktop/preload.js` expone `window.pokebonkDesktop` (`display`, `setDisplay`, `relaunch`), el puente que el juego espera de su versión de escritorio oficial: así aparece la pestaña **Pantalla** de Ajustes. `desktop/main.js` guarda los ajustes en `pantalla.json` (carpeta de datos de la app), aplica modo, tamaño y monitor al momento, y al arrancar pone `use-angle` (d3d11/gl/vulkan) y, con "FPS sin tope", `disable-gpu-vsync` y `disable-frame-rate-limit`. Siempre: `force_high_performance_gpu`, `ignore-gpu-blocklist`, `enable-gpu-rasterization` y `enable-zero-copy`. Se responde `vsyncNext: true` porque el juego reactiva el V-Sync al arrancar si no; "FPS sin tope" va con sus propias claves (`fpsFree`, `fpsFreeNext`).
- Parches del juego: resolución "Súper 1,5×/2×" (`fixedRes` -3 y -2: `pixelRatio` = `devicePixelRatio` × 1,5 o × 2, en `resize()` de `main-*.js`), fila "FPS sin tope" en la pestaña Pantalla y Límite de FPS con 165 y 240 (`menus-*.js`).
- `site/pb-mando.js`: mando con cursor para juegos de ratón (Pokelike, PokéPath TD, PokéPlunder) y la ventana Más juegos (con `window.PB_MANDO_SOLO`). Va lo primero del `<head>`: apunta qué elementos escuchan clics para que la cruceta salte entre ellos. Lo añaden también `tools/actualizar_pokelike.py` y `tools/preparar_pokepath.py`.

## Pokémon Survivors (Subversión 0.18)
- `site/pokemonsurvivors/`: Pokémon Survivors de pedrobarretto (código MIT, github.com/pedrobarretto/pokemon-survivors). En GitHub Actions se clona su último commit, se compila con Node 24 (`npx vite build --base /pokemonsurvivors/`, sin claves de sus servicios: modo invitado, sin cuentas, ranking ni cooperativo) y se prepara con `tools/preparar_pokemonsurvivors.py` (botón Volver, que vuelve a `/index.html` con `window.PB_VOLVER_URL`). Caché por commit y respaldo en la rama `respaldo-pokemon-survivors` (etiqueta `pokemonsurvivors-<commit>`). La copia del repo es la compilación del commit 30e56a906fa1.

## Pokémon Overlord (Subversión 0.17)
- `site/pokeoverlord/`: Pokémon Overlord de jab_lao, juego de Godot 4 (sin hilos) que en itch.io solo se juega en el navegador. Copiado con el flujo "Copia de un juego web", que ahora lee `GODOT_CONFIG` para bajar `index.pck` (64 MB) e `index.wasm` (38 MB), y reintenta si itch.io responde 429. En el APK, esos dos archivos se sirven a trozos (`serveBig`) y van sin comprimir. Se quitó el script de itch.io y se añadió el botón Volver (arriba a la izquierda).

## PokéIsaac: disparo automático (Subversión 0.16)
- `tools/parche_pokeisaac.py` (función `auto_siempre`) añade el ajuste `touchAutoAlways` ("Modo AUTO": AL MANTENER / SIEMPRE). En el cálculo del disparo táctil con "Disparar con: AUTO", si no se mantiene el botón y el ajuste está en SIEMPRE, se usa la dirección al enemigo vivo más cercano (la misma función que usa el juego para el AUTO al mantener). Si una versión nueva no encaja, solo se avisa: el resto del parche sigue.

## PokéPlunder (Subversión 0.15)
- `site/pokeplunder/`: PokéPlunder 1.1.6 de Khydra. En itch.io solo se juega en el navegador: el flujo "Copia de un juego web" (`.github/workflows/revisar-juego.yml`) busca en la página de itch.io el juego de `html-classic.itch.zone` y lo copia entero en la rama `respaldo-pokeplunder-web` (los 603 archivos de su `assets/assets.json` están). Se quitó el script de itch.io, se bajó la música a 96 kbps y se añadió el botón Volver (abajo a la izquierda).

## PokéPath TD (Subversión 0.14)
- `site/pokepath/`: PokéPath TD 1.7 de Khydra, sacado de su instalador de Windows (electron-builder: 7z dentro del instalador NSIS y `resources/app.asar`). Es un juego web sin servidor que guarda en `localStorage`. `tools/preparar_pokepath.py` copia la parte web, añade `pb-pokepath.js` (pantalla completa sin Electron) y el botón Volver, y baja la música a 96 kbps.
- Su instalador busca actualizaciones en Khydra/PokePath-TD-Electron, pero ese repositorio no es público: para actualizar, se saca `app.asar` del instalador nuevo y se pasa por `tools/preparar_pokepath.py`.

## Juegos sin cuenta (Subversión 0.13)
- PokéIsaac trae dentro una simulación completa de su servidor (Supabase), "mockauth", que guarda cuentas, Gacha, fichas, Tickets, misiones, huevos y tienda en `localStorage` (`pokeisaac.mock.db`). La versión publicada borra los parámetros de la dirección, así que `tools/parche_pokeisaac.py` deja pasar `mockauth`/`mockdelay`/`mockanon`, llama a `window.PB_ISAAC_LOCAL(cuenta, juego)` y carga `site/pokeisaac/pb-local.js`, que entra solo como invitado local y cierra la ventana de cuenta. El parche se aplica en cada compilación tras bajar PokéIsaac; si ya no encaja, se usa la copia del repo.
- Más juegos abre `pokeisaac/index.html?mockauth=1&mockdelay=0` (sin cuenta) y, aparte, "PokéIsaac online" sin parámetros.
- Revisados: PokéBonk (backend local PBLocal), PokéSurvivor (cuenta local en `save_data.gd`; solo consulta GitHub para avisar de versiones) y Pokelike 2.0 (cuenta solo para clasificatorias y nube).

## Pokelike y Más juegos (Subversión 0.12)
- La app trae **Pokelike 2.0** de pokelike.xyz (versión del juego 3.6.3). Su código viene ofuscado, pero la lista de textos está en claro: `tools/actualizar_pokelike.py web` baja la página, el `js/bundle.<hash>.js`, los estilos, la música y todos los archivos que el código nombra (unos 1,800, más los nombres sueltos probados en cada carpeta conocida). Quita la publicidad (Publift/Fuse, Google) y las estadísticas, pone las fuentes de Google en local y el botón Volver (abajo a la izquierda, `window.PB_VOLVER_BL`).
- En GitHub Actions se baja solo cuando cambia el nombre del bundle (caché `pokelike-v1-<bundle>`) y cada versión se respalda en la rama `respaldo-pokelike` (etiqueta `pokelike-<versión>-<hash>`; la 1.6 queda en `pokelike-1.6-72ca3c0e`).
- Lo que falte (imágenes que el juego arma por nombre): Android (`MainActivity.fetchPokelike`) y Windows (`pokelikeOnline` en `desktop/main.js`) lo piden a pokelike.xyz y lo guardan en el dispositivo.
- `site/pokelike/` del repo es la 1.6 (copia de pcasaspere/pokelike_v2, preparada con `actualizar_pokelike.py preparar`): se usa si la descarga falla.
- `site/pokeisaac-boton.js`: un solo botón "Más juegos" que abre una ventana con PokéIsaac, PokéSurvivor y Pokelike.

## PokéSurvivor (Subversión 0.12)
- Copia completa del código de JayElDragon/poke-survivor (Godot 4.7, juego 6.2) en `juegos/poke-survivor/`, como respaldo por si el original desaparece. Se añadió el preset de exportación "Web" (sin hilos).
- En GitHub Actions, el trabajo `survivor` descarga Godot 4.7.2, exporta el juego a `site/pokesurvivor/` y lo pasa a los trabajos del APK y de Windows. No se sube al repo (el .pck pesa unos 148 MB).
- Botón PokéSurvivor en la barra del menú (`site/pokeisaac-boton.js`, icono `site/pokesurvivor-icono.png`). Botón "Volver a PokéBonk" (dos toques), igual que en PokéIsaac.
- Android: `MainActivity.serveBig()` sirve los archivos grandes (.pck, .wasm) por streaming, sin cargarlos en memoria; `build.py` los guarda sin comprimir en el APK.
- PokéIsaac: quitado un `if(this === o.player) return;` añadido en `hurt()` del jugador (`site/pokeisaac/js/pokeisaac.js`) que lo hacía invencible.
- PokéIsaac al día: `tools/actualizar_pokeisaac.py` baja el núcleo de pokeisaac.com en cada compilación (trabajo `survivor`), conserva `volver-pokebonk.js` y la fuente local, genera `hosts.txt` (servidores que la app de Android deja salir) y se niega a usar una copia con la trampa de invencibilidad. Cada versión nueva se respalda en la rama `respaldo-pokeisaac` (etiqueta `pokeisaac-<versión>`). Basado en el script de prometheus-lumen/pokeisaac-ios (MIT).
- Créditos: juego original de JPTER78, port de JayElDragon. Código MIT, sprites CC BY-NC.

## Compañeros (Alfas de apoyo) con más libertad
- **Se alejan más:** van a por el enemigo más cercano (hasta 18 m de ti) en vez de pegarse a tu lado; solo vuelven de golpe si se quedan a más de 40 m (antes 28 m).
- **Sus ataques mejoran solos:** el área de su ataque especial crece un 10% por cada nivel de vínculo.
- **Fusión de ataques:** con vínculo 2 o más y dos tipos, tras su ataque especial lanzan el de su segundo tipo al 60% de daño (sale «Fusión» encima).
- **Evolucionan antes:** con vínculo 1 (25 bajas) y vínculo 3 (150 bajas); antes era con vínculo 2 y 4.
- **Mismo poder que en el original:** el daño base de los compañeros es el de siempre (se quitó el tope de la versión anterior).

Todo está en `site/assets/menus-1ZFEe0vd-mw3e1u3x.js` (clase de los compañeros).

## Windows y editor del HUD (Subversión 0.11)
- `desktop/`: versión de Windows con Electron. `main.js` sirve `site/` por el protocolo `app://` (para que los módulos funcionen), F11 pantalla completa, enlaces externos al navegador y guardado automático al cerrar la ventana. El trabajo `windows` de `.github/workflows/compilar.yml` copia `site/`, compila con electron-builder (instalador NSIS y .zip) y lo sube a la release de cada etiqueta. También se compila si el mensaje del commit lleva `[windows]`.
- `site/hud-editor.js`: cada elemento se puede girar (`rotate`) y ocultar (opacidad 0 y sin toques; medio visible en el editor).

## Textos que caben (Subversión 0.11)
- `site/ajuste-textos.js`: encoge la letra de los textos del menú principal del port (botón grande, modos, eventos, Encargos, barra lateral, compañero) hasta que caben. En horizontal, la barra lateral oculta «Inicio» y reparte el alto entre los botones.

## Guardado automático (Subversión 0.11)
- `site/autoguardado.js`: al ocultarse la app (`visibilitychange`/`pagehide`) en mitad de una partida, hace lo mismo que «Guardar y salir» (`run.$9sojcp()` y `run.ui.onSuspend()`). Si la app sigue abierta al volver, pulsa «Continuar» en el aviso de partida guardada. No actúa en Duelos, Cooperativo ni cuando el juego no deja guardar.

## Modo vertical (Subversión 0.10)
- `site/vertical.js`: fila «Orientación» en Ajustes > Gráficos (`localStorage` `pb-orient`), clase `pb-portrait` en `<html>` cuando la pantalla es más alta que ancha, estilos del menú principal (unidades de 412 x 880), HUD y pausa en vertical, y salto automático del aviso de girar.
- `MainActivity.java`: `AndroidMenu.setOrientation("landscape"|"portrait"|"auto")`, guardado en SharedPreferences y aplicado en `onCreate`.
- `site/hud-editor.js`: disposición separada para vertical (`pb-hud-layout-v`).

## Mega temporal y vitaminas (Subversión 0.9)
- Mega: dura 40 s (`MEGA_SECS`) y se recarga con bajas como el Dynamax (150 si la recarga empieza antes de los 5 min, 300 después). Al acabar vuelven el sprite, los tipos y las estadísticas. En `site/mega-dynamax.js`.
- Laboratorio: «Huecos de vitamina» con 4 niveles (de 3 a 7 huecos; costes 1200, 3000, 6000, 10000 antes del descuento del juego). En `defineProperty-…js`.

## PokéIsaac (Subversión 0.8)
- PokéIsaac 1.0.11 (de @SrBatai), sacado de su APK (`assets/webroot/pokeisaac.com`), en `site/pokeisaac/`. Fuente Press Start 2P local en `site/pokeisaac/fonts/`.
- Botón en el menú: `site/pokeisaac-boton.js`. Botón para volver: `site/pokeisaac/volver-pokebonk.js` (cargado desde su `index.html`).
- `MainActivity.java`: deja salir a internet solo los servidores de PokéIsaac (`bfwnvevcyrwwukokooty.supabase.co` y `*.up.railway.app`), que su APK original también usa para sprites, objetos, cuenta y cooperativo.
- Para actualizar PokéIsaac: reemplazar `site/pokeisaac/` con el `pokeisaac.com` de su APK nuevo y volver a aplicar los dos cambios de su `index.html` (fuente local y `volver-pokebonk.js`).

## Reliquias con imagen (Subversión 0.7)
- El APK solo traía `ui/relics/r-comet.png`. Las otras 31 imágenes (`site/assets/ui/relics/*.png`) se crearon a partir de iconos de objetos del juego (`assets/items/`), centrados en 32x32. Sin cambios de código.

## Guía de objetivos (Subversión 0.6)
- Flecha alrededor del jugador hacia el siguiente objetivo, por pasos: Poké Balls gratis, NPC de mejoras, desafíos/altares, guardián, portal. Dentro de cada paso, el más cercano.
- Tocar la etiqueta salta el objetivo; botón «Guía: Sí/No» en la pausa (`localStorage` `pb-guia`).
- Código: `site/guia.js`; `window.__pbRun` se fija al empezar la partida (parche en `main-Cx4tF-…js`).

## Editor del HUD (Subversión 0.5)
- Botón «Editar HUD» en la pausa: arrastrar y cambiar tamaño (50-200%) de los elementos del HUD y los controles táctiles. Se guarda en `localStorage` (`pb-hud-layout`) en % de pantalla y se aplica con las propiedades CSS `translate` y `scale`.
- La zona táctil del joystick fijo sigue al joystick si se mueve (parche en `main-Cx4tF-…js`).
- Código: `site/hud-editor.js`.

## Megas y Dynamax (Subversión 0.4)
- 10 megas con sprites del PMD Sprite Repository convertidos al formato del juego (`site/assets/pmd/150NN.png`, `pmd-shiny/150NN.png`, entradas `150NN` en `site/data/sprites.json`; NN = número de la Pokédex). Créditos en `CREDITOS-SPRITES.md`.
- Se desbloquean con la investigación de la familia al 100%. En partida: botón MEGA a las 150 bajas (permanente en esa partida). Tipos como en los juegos: solo Mega Charizard X cambia (Fuego/Dragón).
- Dynamax: botón DMAX recargable con bajas (100 si la recarga empieza en los primeros 5 min, 300 después; cuentan desde que acaba el anterior), 20 s (escala x1,9, tinte rojo, +50% daño/PS, +30% área).
- Código: `site/mega-dynamax.js`; parches en `main-Cx4tF-…js` (arranque de partida, `recompute()` y `render()` del jugador).

## Laboratorio individual (Subversión 0.3)
- Cada mejora del Laboratorio se compra para un Pokémon concreto y solo le afecta a él (en sus partidas). Se guarda en `profile.lab.by[especie]`.
- Excepción: el **Archivo** sigue siendo de toda la cuenta.
- Selector «Mejoras de:» y botón «Devolver mejoras» en el Laboratorio: devuelve todo el Polvo gastado en ese Pokémon.
- Lo comprado antes (global) se devolvió una vez como Polvo Estelar.
- Mejoras nuevas: Contundencia (+5% daño crítico, 5 niv.), Alteración (+6% estados, 5 niv.), Persistencia (+4% duración, 5 niv.), Absorción (+0,5% robo de vida, 4 niv.).
- Código: `site/lab-individual.js` y parches en `defineProperty-…js` (lista de mejoras y lectura del lab), `menus-…js` (compra, `lab()`, `labStats()`, pantalla del Laboratorio) y `main-Cx4tF-…js` (especie de la partida).

## Pokédólares guardados (Subversión 0.2)
- Lo que sobra de oro al terminar una partida se guarda y se suma al empezar la siguiente (sale un aviso con la cantidad).
- Si la app se cierra a mitad de partida, el oro guardado que llevabas vuelve a la reserva.
- No se aplica en Duelos ni en Cooperativo.
- Código: `site/oro-guardado.js` y dos ganchos en `site/assets/main-Cx4tF-jA-mw3e1u3x.js` (inicio de partida y `finish`).

## Versión oficial y subversión propia
La versión oficial del juego **no se toca**: `site/version.json` y la lista oficial de «Novedades» siguen diciendo 0.9.9.
Nuestros cambios van como **subversión** encima de la oficial (ahora: **0.9.9 oficial - Subversión 0.12**) y se ven en dos sitios:
- **Noticias** (icono del periódico): una noticia «Versión 0.9.9 oficial - Subversión 0.x» con el detalle, firmada como «Actualización hecha por moportor6 (no oficial)».
- **Novedades** (botón de la versión junto al logo): un bloque propio arriba con la etiqueta «No oficial»; las notas oficiales siguen debajo, sin cambios.

Todo el texto está en `site/subversion.js`. Para una nueva subversión (p. ej. 0.2) añade una entrada al principio de `items` y de `changelog` y cambia `SUB`.
Si llega una versión oficial nueva, cambia `OFICIAL` y vuelve a empezar en Subversión 0.1.

Archivos tocados para esto: `site/index.html` (carga `subversion.js`), `site/assets/main-Cx4tF-jA-mw3e1u3x.js` (las noticias del modo sin conexión incluyen las propias) y `site/assets/menus-1ZFEe0vd-mw3e1u3x.js` (bloque en «Novedades» y firma de la noticia).
