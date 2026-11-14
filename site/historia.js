/* Subversión propia: Modo historia (solo en PokéBonk Lite, PB_EDICION === 'lite').
   Un viaje por las 9 regiones en orden (Kanto → Paldea) con el Pokémon que eliges al empezar:
   - cada región: el profesor te presenta la región, luego sus líderes en orden (Alola: los 4 kahunas) y al final la Liga
     (su campeón). Cada capítulo es una partida normal en un mapa de la región: sobrevive y vence al líder (gimnasios.js
     pone su equipo como guardianes y salvajes) para ganar su medalla;
   - diálogos con retrato antes y después de cada combate; si pierdes, repites el capítulo;
   - 3 ranuras de guardado (profile.pbHistoria); la partida en curso se puede «Guardar y salir» como cualquier otra y
     seguir desde el menú;
   - al «Guardar y salir» una partida de la historia, el Polvo Estelar ganado hasta ese momento pasa ya al Laboratorio
     (stats.pbDust baja lo adelantado; main-…js lo descuenta al terminar la partida);
   - Laboratorio dentro de la historia: en la pantalla del capítulo y en la pausa de la partida (las mejoras son las de
     tu Pokémon, lab-individual.js, y las de estadísticas se aplican al momento).
   Retratos (assets/historia/<id>.png): líderes de Pokémon Reloaded (uso privado, con permiso) y los que faltan,
   profesores, Azul y campeones de Pokémon Showdown (acción «Historia», tools/historia_showdown.txt). */
(() => {
  if (window.PB_EDICION !== 'lite' || window.PB_HISTORIA) return;
  const meta = () => window.__pbMeta, app = () => window.__pbApp, GYM = () => window.PB_GYM, R = () => window.PB_REGIONES;
  const ORDEN = ['kanto', 'johto', 'hoenn', 'sinnoh', 'teselia', 'kalos', 'alola', 'galar', 'paldea'];
  const REG = { kanto: 'Kanto', johto: 'Johto', hoenn: 'Hoenn', sinnoh: 'Sinnoh', teselia: 'Teselia', kalos: 'Kalos', alola: 'Alola', galar: 'Galar', paldea: 'Paldea' };
  const COLOR = { kanto: ['#e8433a', '#ff8a4a'], johto: ['#c8901a', '#f2c94a'], hoenn: ['#2a8ad8', '#4ad8b0'], sinnoh: ['#5a5ad8', '#9a8af2'], teselia: ['#3a3a4a', '#8a8aa0'],
    kalos: ['#2a6ad8', '#d84a8a'], alola: ['#f2a03a', '#3ac8d8'], galar: ['#8a2ad8', '#d83a6a'], paldea: ['#d8402a', '#8a3ad8'] };
  const MAPAS_KJ = { kanto: [['forest', 'Bosque Verde'], ['desert', 'Desierto Rocoso'], ['coast', 'Costa Tormenta'], ['glacier', 'Glaciar Celeste'], ['canela', 'Isla Canela'], ['cave', 'Cueva Celeste']],
    johto: [['encina', 'Bosque Encina'], ['iris', 'Ciudad Iris']] };
  // Kanto: un mapa a juego con cada líder.
  const MAPA_LIDER = { brock: 'desert', misty: 'coast', surge: 'coast', erika: 'forest', koga: 'forest', sabrina: 'glacier', blaine: 'canela', giovanni: 'cave' };
  const INICIALES = [1, 4, 7, 25];

  // Diálogos: [ciudad, antes, después]. Las líneas «Nombre: texto» cambian de quien habla.
  const D = {
    brock: ['Ciudad Plateada', ['¡Soy Brock, el Líder del Gimnasio de Ciudad Plateada!', 'Mi defensa es dura como la roca. ¿Aguantarás 15 minutos frente a mi equipo?'], ['¡Vaya! Te había subestimado.', 'Toma la Medalla Roca: la prueba oficial de que me has vencido.']],
    misty: ['Ciudad Celeste', ['¡Hola! Soy Misty, la Líder de Ciudad Celeste.', 'Mi táctica es el ataque total con Pokémon de agua. ¡Prepárate a empaparte!'], ['¡Qué rabia! Eres muy bueno.', 'Aquí tienes la Medalla Cascada.']],
    surge: ['Ciudad Carmín', ['¡Eh, chaval! ¡Bienvenido a mi gimnasio!', '¡Los Pokémon eléctricos me salvaron en la guerra! ¡Te dejaré paralizado como a todos!'], ['¡Uau! ¡Eres electrizante!', 'Toma la Medalla Trueno, te la has ganado.']],
    erika: ['Ciudad Azulona', ['Hola… Hace un tiempo estupendo, ¿verdad?', 'Soy Erika, y entreno Pokémon de tipo Planta. No pienso perder.'], ['Oh… He perdido. Eres extraordinario.', 'Toma la Medalla Arcoíris.']],
    koga: ['Ciudad Fucsia', ['¡Ja! ¡Un mocoso se atreve a desafiarme!', 'Soy Koga, maestro ninja. ¡Conocerás el veneno y la confusión!'], ['¡Humm! Has demostrado tu valía.', 'Aquí tienes la Medalla Alma.']],
    sabrina: ['Ciudad Azafrán', ['Sabía que vendrías. Lo vi hace tres años.', 'Odio luchar, pero si insistes, te mostraré mis poderes psíquicos.'], ['Esta derrota… no la había previsto.', 'Toma la Medalla Pantano.']],
    blaine: ['Isla Canela', ['¡Hah! ¡Soy Blaine, el exaltado Líder de Isla Canela!', '¡Mis Pokémon de fuego reducen a cenizas a cualquiera! ¡Más te vale llevar Antiquemar!'], ['¡Me he quemado hasta los huesos!', 'Te has ganado la Medalla Volcán.']],
    giovanni: ['Ciudad Verde', ['Así que has llegado hasta aquí. Soy Giovanni, el Líder de Ciudad Verde…', '…y el jefe del Team Rocket. ¡Te enseñaré lo que es el poder de verdad!'], ['¡Ha! Ha sido un combate de verdad.', 'Toma la Medalla Tierra. El Team Rocket se disuelve… por ahora.']],
    falkner: ['Ciudad Malva', ['Soy Pegaso, el Líder de Ciudad Malva.', 'Dicen que a los Pokémon pájaro los tumba un rayo. ¡Te demostraré su verdadero poder!'], ['¡Por las plumas de mi padre! Has ganado.', 'Aquí tienes la Medalla Céfiro.']],
    bugsy: ['Pueblo Azalea', ['¡Soy Antón! Investigo a los Pokémon bicho y no pierdo nunca.', '¡Mira todo lo que he aprendido de ellos!'], ['¡Vaya! Tus Pokémon son increíbles.', 'Toma la Medalla Colmena.']],
    whitney: ['Ciudad Trigal', ['¡Hola! Soy Blanca. Todo el mundo tenía Pokémon, así que yo también.', '¡Son monísimos y fortísimos! ¡No te dejaré ganar!'], ['Snif… ¡Eso no vale! …Bueno, vale.', 'Toma la Medalla Planicie.']],
    morty: ['Ciudad Iris', ['Soy Morti. En Ciudad Iris se venera a los Pokémon.', 'He entrenado para ver lo que otros no ven. ¡Entra en mi mundo de fantasmas!'], ['No puedo creerlo… Has visto más allá que yo.', 'Toma la Medalla Niebla.']],
    chuck: ['Ciudad Orquídea', ['¡GRAAAH! ¡Soy Aníbal! ¡Entreno bajo la cascada día y noche!', '¡Mis Pokémon de lucha te harán papilla!'], ['¡Cielos! ¡Qué fuerza!', 'Toma la Medalla Tormenta.']],
    jasmine: ['Ciudad Olivo', ['Eh… Soy Yasmina. Gracias por ayudar en el faro.', 'Uso Pokémon de acero, duros y fríos… Empecemos.'], ['Eres un gran Entrenador…', 'Toma la Medalla Mineral.']],
    pryce: ['Pueblo Caoba', ['Soy Fredo. Los Pokémon viven muchas cosas, igual que las personas.', 'Yo también he vivido mucho. ¡Te enseñaré la dureza del invierno!'], ['Te admiro. Tu pasión es más fuerte que el hielo.', 'Toma la Medalla Glaciar.']],
    clair: ['Ciudad Endrino', ['Soy Débora, la mejor domadora de dragones del mundo.', '¡Puedo con cualquiera, incluso con el Alto Mando!'], ['No puede ser… ¡He perdido!', '…Está bien. Toma la Medalla Dragón.']],
    roxanne: ['Ciudad Férrica', ['Soy Petra, la Líder de Ciudad Férrica.', 'Pondré en práctica todo lo que aprendí en la Escuela Pokémon.'], ['Aún me queda mucho por aprender…', 'Toma la Medalla Piedra.']],
    brawly: ['Pueblo Azuliza', ['¡Soy Marcial! Me encantan las olas grandes y los combates intensos.', '¡A ver si aguantas mi oleaje de golpes!'], ['¡Uau, me has arrastrado como una ola!', 'Toma la Medalla Puño.']],
    wattson: ['Ciudad Malvalona', ['¡Wahahahah! Soy Erico, el Líder de Ciudad Malvalona.', '¡Te daré una buena descarga!'], ['¡Wahahahah! ¡Me has dejado sin chispa!', 'Toma la Medalla Dinamo.']],
    flannery: ['Pueblo Lavacalda', ['Soy Candela, la nueva Líder de Pueblo Lavacalda.', '¡Verás lo ardientes que son mis Pokémon!'], ['Me… me he pasado de la raya. Gracias por la lección.', 'Toma la Medalla Calor.']],
    norman: ['Ciudad Petalia', ['Soy Norman, el Líder de Ciudad Petalia.', 'Un Entrenador nunca debe contenerse. ¡Yo tampoco lo haré!'], ['He perdido… y estoy orgulloso.', 'Toma la Medalla Equilibrio.']],
    winona: ['Ciudad Arborada', ['Soy Alana. He vivido con los Pokémon pájaro en el cielo.', '¡Contempla nuestra elegante danza aérea!'], ['Nunca vi a nadie volar tan alto.', 'Toma la Medalla Pluma.']],
    tate: ['Ciudad Algaria', ['Vito: ¡Je, je! ¿Te sorprende?', 'Leti: ¡Somos Vito y Leti y luchamos juntos! ¡Nuestra conexión es perfecta!'], ['Vito: Nuestras mentes eran una…', 'Leti: …pero tu corazón era más fuerte. ¡Toma la Medalla Mente!']],
    juan: ['Ciudad Arrecípolis', ['Permíteme presentarme: soy Galano.', 'Te mostraré la elegancia del agua. ¡Admira esta ilusión!'], ['Ahhh, espléndido.', 'Te has ganado la Medalla Lluvia.']],
    roark: ['Ciudad Pirita', ['Soy Roco, el Líder de Ciudad Pirita.', 'Trabajo en la mina y mis Pokémon son duros como la roca.'], ['¡Has excavado más hondo que yo!', 'Toma la Medalla Lignito.']],
    gardenia: ['Ciudad Vetusta', ['¡Soy Gardenia! Mi equipo de tipo Planta te va a encantar…', '…y vas a perder, claro.'], ['¡Uf! Qué fuerte eres.', 'Toma la Medalla Bosque.']],
    maylene: ['Pueblo Rocavelo', ['Soy Brega. Entreno descalza junto a mis Pokémon.', '¡Lucharé con todas mis fuerzas!'], ['He perdido… pero lo he dado todo.', 'Toma la Medalla Adoquín.']],
    wake: ['Ciudad Pradera', ['¡Soy MANANTI, el luchador del agua!', '¡Prepárate para la ola gigante!'], ['¡Me has dejado K.O.!', '¡Toma la Medalla Ciénaga!']],
    fantina: ['Ciudad Corazón', ['Bonjour, soy Fantina. Mis Pokémon fantasma te harán bailar.', 'Non, non, ¡no perderé!'], ['Formidable…', 'Toma la Medalla Reliquia.']],
    byron: ['Ciudad Canal', ['¡Ja, ja! Soy Acerón, el padre de Roco.', '¡Mis Pokémon de acero son una muralla!'], ['¡Mi muralla ha caído!', 'Toma la Medalla Mina.']],
    candice: ['Ciudad Puntaneva', ['Soy Inverna. ¡Concentración y diversión!', '¡Mis Pokémon de hielo no se derriten!'], ['Uau, me has descongelado el corazón.', 'Toma la Medalla Carámbano.']],
    volkner: ['Ciudad Marina', ['Soy Lectro… Hacía tiempo que nadie me hacía sentir algo en un combate.', '¡Enciéndeme!'], ['Ha sido electrizante.', 'Toma la Medalla Faro.']],
    cilan: ['Ciudad Gres', ['Soy Millo, conocedor de Pokémon de tipo Planta.', '¡Permíteme servirte un combate de primera!'], ['Has saboreado la victoria.', 'Toma la Medalla Trío.']],
    lenora: ['Ciudad Esmalte', ['Soy Aloe, investigadora y Líder de Ciudad Esmalte.', '¡Investigaré lo fuerte que eres!'], ['¡Tu fuerza no sale en los libros!', 'Toma la Medalla Base.']],
    burgh: ['Ciudad Porcelana', ['Soy Camus, artista y Líder de Ciudad Porcelana.', '¡Mis Pokémon bicho son mi obra maestra!'], ['¡Qué inspiración!', 'Toma la Medalla Insecto.']],
    elesa: ['Ciudad Mayólica', ['Soy Camila, modelo y Líder de Ciudad Mayólica.', '¡Te deslumbraré con mis Pokémon eléctricos!'], ['Me has deslumbrado tú a mí.', 'Toma la Medalla Voltio.']],
    clay: ['Ciudad Fayenza', ['Soy Yakón, el rey de las minas de Fayenza.', '¡Mis Pokémon de tierra te enterrarán!'], ['¡Rayos! Ya está.', 'Toma la Medalla Temblor.']],
    skyla: ['Ciudad Loza', ['¡Hola! Soy Gerania, piloto y Líder de Ciudad Loza.', '¡Vamos a volar alto!'], ['Me has hecho aterrizar.', 'Toma la Medalla Jet.']],
    brycen: ['Ciudad Teja', ['Soy Junco. Fui actor; ahora entreno en el frío.', '¡Siente el hielo cortante!'], ['Tu espíritu ha derretido mi hielo.', 'Toma la Medalla Témpano.']],
    drayden: ['Ciudad Caolín', ['Soy Lirio, alcalde de Caolín y maestro dragón.', '¡Muéstrame tu verdadera fuerza!'], ['Excelente.', 'Toma la Medalla Leyenda.']],
    viola: ['Ciudad Novarte', ['Soy Violeta, fotógrafa y Líder de Ciudad Novarte.', '¡Quiero captar tu cara cuando pierdas!'], ['¡Qué foto tan bonita de tu victoria!', 'Toma la Medalla Insecto.']],
    grant: ['Ciudad Relieve', ['Soy Lino, escalador. Los muros se superan paso a paso.', '¡A ver si superas el mío!'], ['Has escalado mi muro.', 'Toma la Medalla Muro.']],
    korrina: ['Ciudad Yantra', ['¡Soy Corelia, la gran heredera de la Megaevolución!', '¡Lucha con todo lo que tengas!'], ['¡Uf! ¡Eres increíble!', 'Toma la Medalla Lucha.']],
    ramos: ['Ciudad Témpera', ['Soy Amaro, jardinero. Las plantas son fuertes, chaval.', '¡Ya verás!'], ['Ja, ja. Tienes buena mano.', 'Toma la Medalla Planta.']],
    clemont: ['Ciudad Luminalia', ['¡Soy Lem, inventor y Líder de Ciudad Luminalia!', '¡El futuro es ahora gracias a la ciencia!'], ['Mi invento ha fallado…', 'Toma la Medalla Voltio.']],
    valerie: ['Ciudad Romantis', ['Soy Valeria, diseñadora. Mis Pokémon hada son como mariposas…', '…bonitos, pero fuertes.'], ['Hermoso…', 'Toma la Medalla Hada.']],
    olympia: ['Ciudad Fluxus', ['Soy Ástrid. Las estrellas me dijeron que vendrías.', 'Que decida el destino.'], ['El destino te sonríe.', 'Toma la Medalla Psique.']],
    wulfric: ['Ciudad Fractal', ['¡Soy Édel! Me gusta el frío y los buenos combates.', '¡A por ello!'], ['¡Ja, ja! ¡Me has hecho entrar en calor!', 'Toma la Medalla Iceberg.']],
    hala: ['Isla Melemele', ['¡Soy Kaudan, kahuna de Melemele!', '¡Ven con todo lo que tengas!'], ['¡Gran combate!', 'Has superado el gran desafío de Melemele.']],
    olivia: ['Isla Akala', ['Soy Mayla, kahuna de Akala.', '¡Mis Pokémon de roca brillan como gemas!'], ['Brillas más tú.', 'Has superado el gran desafío de Akala.']],
    nanu: ['Isla Ula-Ula', ['…Soy Denio. No me gustan los combates.', 'Pero el deber es el deber.'], ['Bah…', 'Has superado el gran desafío de Ula-Ula.']],
    hapu: ['Isla Poni', ['Soy Hela, la nueva kahuna de Poni.', '¡Te mostraré la fuerza de la tierra!'], ['¡Eres digno!', 'Has superado el gran desafío de Poni.']],
    milo: ['Estadio de tipo Planta', ['¡Soy Percy! Cuido la granja y el estadio de tipo Planta.', '¡Vamos a sembrar un buen combate!'], ['¡Qué cosecha!', 'Toma la Medalla Planta.']],
    nessa: ['Estadio de tipo Agua', ['Soy Cathy, modelo y Líder de tipo Agua.', '¡Te hundiré en el estadio!'], ['Me has hundido a mí…', 'Toma la Medalla Agua.']],
    kabu: ['Estadio de tipo Fuego', ['Soy Naboru. El fuego me enseñó a no rendirme nunca.', '¡Arde!'], ['Has superado mis llamas.', 'Toma la Medalla Fuego.']],
    bea: ['Estadio de tipo Lucha', ['Soy Judith. Vivo para la lucha.', '¡Sin piedad!'], ['Mi entrenamiento no ha bastado.', 'Toma la Medalla Lucha.']],
    opal: ['Estadio de tipo Hada', ['Soy Sally. Busco a quien me suceda.', '¿Sabes cuál es mi color favorito? ¡Respuesta incorrecta!'], ['Eres muy rosa por dentro.', 'Toma la Medalla Hada.']],
    gordie: ['Estadio de tipo Roca', ['Soy Morris. Mis rocas no se rompen.', '¡Prepárate!'], ['Me has partido en dos.', 'Toma la Medalla Roca.']],
    piers: ['Estadio de tipo Siniestro', ['Soy Nerio… Aquí no hay Dinamax, solo actitud.', '¡Que suene la música!'], ['Buena canción.', 'Toma la Medalla Siniestro.']],
    raihan: ['Estadio de tipo Dragón', ['Soy Roy, el rival eterno del campeón.', '¡Voy a desatar la tormenta!'], ['Me has ganado. Esto merece una foto.', 'Toma la Medalla Dragón.']],
    katy: ['Gimnasio de tipo Bicho', ['Soy Araceli, pastelera y Líder de tipo Bicho.', '¡Mis Pokémon son dulces, pero pican!'], ['¡Qué combate tan rico!', 'Toma la Medalla Bicho.']],
    brassius: ['Gimnasio de tipo Planta', ['Soy Brais, artista. ¡El arte es explosión!', '¡Contempla mi obra viva!'], ['¡Tu victoria es una obra maestra!', 'Toma la Medalla Planta.']],
    iono: ['Gimnasio de tipo Eléctrico', ['¡Hola, Nigmatécnicos! ¡Soy e-Nigma!', '¡Este combate va directo al canal!'], ['¡Uaaah! ¡Me has electrizado!', 'Toma la Medalla Eléctrica.']],
    kofu: ['Gimnasio de tipo Agua', ['¡Soy Fuco, el rey del mercado de pescado!', '¡Un combate fresquísimo!'], ['¡Qué pesca!', 'Toma la Medalla Agua.']],
    larry: ['Gimnasio de tipo Normal', ['Soy Laureano. Un empleado normal.', 'Hagamos un combate normal.'], ['Lo normal es que ganaras.', 'Toma la Medalla Normal.']],
    ryme: ['Gimnasio de tipo Fantasma', ['¡Yo! ¡Soy Lima, la rapera fantasmal!', '¡Rima y combate!'], ['¡Tu ritmo es mejor!', 'Toma la Medalla Fantasma.']],
    tulip: ['Gimnasio de tipo Psíquico', ['Soy Tuli, maquilladora.', '¡Te dejaré preciosa… y derrotada!'], ['Qué belleza de combate.', 'Toma la Medalla Psíquica.']],
    grusha: ['Gimnasio de tipo Hielo', ['Soy Grusha. Fui snowboarder.', 'El frío me hizo fuerte.'], ['Has roto el hielo.', 'Toma la Medalla Hielo.']],
  };
  // Profesor de cada región: [retrato, nombre, líneas al llegar].
  const PROF = {
    kanto: ['prof-kanto', 'Prof. Oak', ['¡Hola! ¡Bienvenido al mundo de los Pokémon!', 'Me llamo Oak, pero todos me llaman el Profesor Pokémon.', 'Elige a tu compañero. Con él recorrerás todas las regiones, de Kanto a Paldea.']],
    johto: ['prof-johto', 'Prof. Elm', ['¡Hola! Soy el Profesor Elm, de Pueblo Primavera.', 'El Profesor Oak me ha hablado de ti: ¡has conquistado Kanto!', 'En Johto te esperan ocho gimnasios y Lance, el campeón.']],
    hoenn: ['prof-hoenn', 'Prof. Abedul', ['¡Ah, por fin llegas! Soy el Profesor Abedul.', 'Hoenn está lleno de mar y volcanes.', 'Ocho gimnasios y el campeón Máximo te esperan.']],
    sinnoh: ['prof-sinnoh', 'Prof. Serbal', ['Soy el Profesor Serbal. Sinnoh es una región antigua y mística.', 'Ocho gimnasios y la campeona Cintia. Demuestra tu valía.']],
    teselia: ['prof-teselia', 'Prof. Encina', ['¡Hola! Soy la Profesora Encina.', 'En Teselia, Pokémon y personas viven unidos.', 'Vence a sus ocho líderes y al campeón Mirto.']],
    kalos: ['prof-kalos', 'Prof. Ciprés', ['Bonjour! Soy el Profesor Ciprés y estudio la Megaevolución.', 'Kalos es la región de la belleza: ocho gimnasios y la campeona Dianta.']],
    alola: ['prof-alola', 'Prof. Kukui', ['¡Alola! Soy el Profesor Kukui.', 'Aquí no hay gimnasios: superarás el gran desafío de las cuatro islas.', 'Después… ¡yo mismo te espero en la Liga!']],
    galar: ['prof-galar', 'Prof. Magnolia', ['Soy la Profesora Magnolia, experta en el fenómeno Dinamax.', 'Galar vibra con sus estadios: ocho líderes y el invicto campeón Lionel.']],
    paldea: ['prof-paldea', 'Prof. Sada', ['Soy la Profesora Sada. Investigo el pasado de Paldea.', 'Tu búsqueda del tesoro: ocho gimnasios y la Liga, donde te espera la presidenta Ciruela.']],
  };
  // Campeón de la Liga de cada región: equipo (el último es su as) y diálogos.
  const CAMP = {
    kanto: { nombre: 'Azul', tipo: 'normal', equipo: [18, 65, 112, 103, 130, 6], antes: ['Azul: ¡Por fin llegas! Mientras tú te paseabas, yo me he hecho campeón.', '¡Soy el mejor Entrenador del mundo! ¡Prepárate a perder!'], despues: ['Azul: ¡NO! ¿Cómo he podido perder…?', 'Prof. Oak: ¡Enhorabuena! Eres el nuevo campeón de Kanto. Pero el mundo es grande: ¡Johto te espera!'] },
    johto: { nombre: 'Lance', tipo: 'dragon', equipo: [130, 142, 6, 149], antes: ['Te esperaba. Soy Lance, el campeón, maestro de dragones.', '¡Que empiece el combate final!'], despues: ['Ha terminado… Eres el nuevo campeón de Johto.', 'Tu vínculo con tu Pokémon es admirable.'] },
    hoenn: { nombre: 'Máximo', tipo: 'steel', equipo: [227, 344, 346, 348, 306, 376], antes: ['Soy Máximo, el campeón de Hoenn.', 'Muéstrame lo que has aprendido en tu viaje.'], despues: ['Tú, que te has ganado el título de campeón…', '¡Eres el nuevo campeón de Hoenn!'] },
    sinnoh: { nombre: 'Cintia', tipo: 'dragon', equipo: [442, 407, 350, 423, 448, 445], antes: ['Soy Cintia, la campeona de Sinnoh.', 'No me contendré. ¡Vamos allá!'], despues: ['Me has superado… Eres el nuevo campeón de Sinnoh.'] },
    teselia: { nombre: 'Mirto', tipo: 'bug', equipo: [617, 626, 621, 584, 589, 637], antes: ['¡Ja, ja! Soy Mirto, el campeón de Teselia.', '¡Disfrutemos de este combate!'], despues: ['¡Qué combate tan bonito! Eres el nuevo campeón de Teselia.'] },
    kalos: { nombre: 'Dianta', tipo: 'rock', equipo: [701, 697, 699, 711, 706, 282], antes: ['Soy Dianta, la campeona de Kalos.', 'Veamos si tu luz brilla más que la mía.'], despues: ['Brillas con luz propia. Eres el nuevo campeón de Kalos.'] },
    alola: { nombre: 'Prof. Kukui', tipo: 'rock', equipo: [745, 628, 462, 143], antes: ['¡Alola! Te dije que te esperaba en la Liga.', '¡Quiero ver la fuerza que has reunido en tu viaje!'], despues: ['¡Woo! Eres el primer campeón de la Liga de Alola.'] },
    galar: { nombre: 'Lionel', tipo: 'fire', equipo: [681, 887, 612, 464, 6], antes: ['Soy Lionel, el campeón invicto de Galar.', '¡Tengamos un combate de campeones!'], despues: ['Mi racha invicta… ha terminado. ¡Eres el nuevo campeón de Galar!'] },
    paldea: { nombre: 'Ciruela', tipo: 'psychic', equipo: [956, 713, 673, 976, 970, 983], antes: ['Soy Ciruela, presidenta de la Liga Pokémon de Paldea.', 'Te pondré a prueba como campeona.'], despues: ['Excelente. Eres el nuevo campeón de Paldea.'] },
  };
  const FINAL = [['prof-kanto', 'Prof. Oak', '¡Lo has conseguido! Has vencido en las nueve regiones.'], ['prof-kanto', 'Prof. Oak', 'Tu nombre y el de tu compañero ya están en el Salón de la Fama de todo el mundo Pokémon.'],
    ['azul', 'Azul', '…Está bien, lo admito. Eres el mejor. ¡Pero algún día te ganaré!'], ['prof-kanto', 'Prof. Oak', '¡Gracias por jugar al modo historia de PokéBonk Lite!']];

  const TIPO = { rock: 'Roca', water: 'Agua', electric: 'Eléctrico', grass: 'Planta', poison: 'Veneno', psychic: 'Psíquico', fire: 'Fuego', ground: 'Tierra', flying: 'Volador', bug: 'Bicho', normal: 'Normal', ghost: 'Fantasma', fighting: 'Lucha', steel: 'Acero', ice: 'Hielo', dragon: 'Dragón', fairy: 'Hada', dark: 'Siniestro' };
  const nombrePk = sp => R()?.todos?.find(p => p.id === sp)?.name ?? ({ 1: 'Bulbasaur', 4: 'Charmander', 7: 'Squirtle', 25: 'Pikachu' })[sp] ?? '#' + sp;
  const esc = t => String(t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

  // ---------- datos de la partida (profile.pbHistoria) ----------
  const H = () => { const p = meta()?.profile; if (!p) return null; p.pbHistoria ??= { slots: [null, null, null], activo: null }; return p.pbHistoria; };
  const guardar = () => { try { meta()?.save(); } catch {} };
  const lideres = reg => GYM()?.LIDERES?.[reg] ?? [];
  // Capítulo k de la región: 0..n-1 líderes, n = la Liga.
  const capitulo = s => {
    const reg = ORDEN[s.r], ls = lideres(reg);
    if (s.k >= ls.length) return { reg, liga: true, c: CAMP[reg], id: 'camp-' + reg, nombre: CAMP[reg].nombre, tipo: CAMP[reg].tipo, retrato: 'camp-' + reg, lugar: 'Liga Pokémon de ' + REG[reg] };
    const l = ls[s.k];
    return { reg, liga: false, l, id: l.id, nombre: l.nombre, tipo: l.tipo, retrato: l.id, lugar: D[l.id]?.[0] ?? REG[reg] };
  };
  const mapas = reg => MAPAS_KJ[reg] ?? (R()?.lista?.find(r => r.id === reg)?.mapas ?? []).map(m => [m.id, m.name]);
  const mapaDe = s => {
    const cap = capitulo(s), ms = mapas(cap.reg), n = lideres(cap.reg).length;
    if (!ms.length) return ['forest', 'Bosque Verde'];
    if (cap.liga) return ms[ms.length - 1];
    if (cap.reg === 'kanto') return ms.find(m => m[0] === MAPA_LIDER[cap.id]) ?? ms[0];
    return ms[Math.min(ms.length - 1, Math.floor(s.k * ms.length / n))];
  };

  // ---------- estilos ----------
  const st = document.createElement('style');
  st.textContent = `
.pb-h{position:fixed;inset:0;z-index:100050;display:flex;align-items:center;justify-content:center;color:#fff;font-family:var(--font-body,system-ui),sans-serif;-webkit-user-select:none;user-select:none;touch-action:manipulation;background:radial-gradient(circle at 50% 30%,var(--c2,#ff8a4a),var(--c1,#e8433a) 55%,#1a1030);overflow:hidden}
.pb-h::before{content:'';position:absolute;inset:0;background:repeating-linear-gradient(135deg,rgba(255,255,255,.05) 0 14px,transparent 14px 28px);pointer-events:none}
.pb-h .hb,.pb-h .caja,.pb-h .saltar{zoom:var(--z,1)}
.pb-h .hb{position:relative;width:min(760px,calc(94vw / var(--z,1)));max-height:calc(92vh / var(--z,1));overflow:auto;padding:16px;border-radius:20px;background:rgba(20,12,40,.82);border:3px solid rgba(255,255,255,.85);box-shadow:0 10px 40px rgba(0,0,0,.5)}
.pb-h h2{margin:0 0 4px;font:900 clamp(20px,4vw,30px) var(--font-title,system-ui);letter-spacing:1px}
.pb-h p.sub{margin:0 0 12px;opacity:.85;font-weight:700;font-size:13px}
.pb-h .hx{position:absolute;top:10px;right:10px;width:38px;height:38px;border-radius:12px;border:2px solid #fff;background:rgba(255,255,255,.12);color:#fff;font:900 18px system-ui}
.pb-h .hs-slots{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px}
.pb-h .hs-slot{display:flex;flex-direction:column;gap:6px;padding:12px;border-radius:14px;background:rgba(255,255,255,.1);border:2px solid rgba(255,255,255,.5)}
.pb-h .hs-slot .top{display:flex;align-items:center;gap:10px}.pb-h .hs-slot img{width:48px;height:48px;image-rendering:pixelated;border-radius:10px;background:rgba(255,255,255,.15)}
.pb-h .hs-slot b{font-size:16px}.pb-h .hs-slot small{display:block;opacity:.85;font-weight:700;font-size:12px}
.pb-h .med{display:flex;flex-wrap:wrap;gap:2px}.pb-h .med img{width:20px;height:20px;object-fit:contain;image-rendering:auto;border-radius:0;background:none}
.pb-h button.hbt{padding:10px 14px;border-radius:12px;border:2px solid #fff;background:rgba(255,255,255,.14);color:#fff;font:900 14px system-ui,sans-serif;cursor:pointer}
.pb-h button.hbt.go{background:linear-gradient(#ff5a4a,#d8302a);border-color:#ffd0c8}.pb-h button.hbt.lab{background:linear-gradient(#9a6ae8,#6a3ac8)}
.pb-h button.hbt:active{transform:scale(.97)}.pb-h .fila{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}
.pb-h .ini{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:10px}
.pb-h .ini button{display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px 4px;border-radius:14px;border:2px solid rgba(255,255,255,.6);background:rgba(255,255,255,.1);color:#fff;font:900 14px system-ui}
.pb-h .ini img{width:72px;height:72px;image-rendering:pixelated}
.pb-h .cap{display:flex;gap:16px;align-items:center;flex-wrap:wrap}.pb-h .cap>img{width:160px;height:160px;image-rendering:pixelated;filter:drop-shadow(0 6px 0 rgba(0,0,0,.35))}
.pb-h .cap .info{flex:1;min-width:220px}.pb-h .cap .info p{margin:4px 0;font-weight:700}
/* diálogo: barras de cine, retrato que entra y caja de texto clásica */
.pb-h.dlg{background:linear-gradient(180deg,#0008,#0000 30%,#0000 60%,#000a),radial-gradient(circle at 70% 40%,var(--c2),var(--c1) 60%,#120a24)}
.pb-h.dlg::after{content:'';position:absolute;left:0;right:0;top:0;height:9vh;background:#000;box-shadow:0 calc(91vh) 0 #000;animation:pbhcine .5s ease-out both}
@keyframes pbhcine{from{transform:translateY(-9vh)}to{transform:none}}
.pb-h .por{position:absolute;bottom:calc(9vh + 120px);right:8vw;height:min(46vh,320px);aspect-ratio:1;image-rendering:pixelated;object-fit:contain;filter:drop-shadow(0 8px 0 rgba(0,0,0,.35));animation:pbhin .45s cubic-bezier(.2,.9,.3,1.2) both}
.pb-h .por.izq{right:auto;left:8vw;animation-name:pbhinL}
@keyframes pbhin{from{transform:translateX(40vw);opacity:0}to{transform:none;opacity:1}}@keyframes pbhinL{from{transform:translateX(-40vw);opacity:0}to{transform:none;opacity:1}}
.pb-h .caja{position:absolute;left:50%;transform:translateX(-50%);bottom:calc((9vh + 8px) / var(--z,1));width:min(820px,calc(94vw / var(--z,1)));min-height:96px;padding:14px 18px 22px;border-radius:14px;background:#fff;color:#2a2340;border:4px solid #3a3060;box-shadow:inset 0 0 0 3px #c8c0e8,0 6px 0 rgba(0,0,0,.35);font:800 clamp(15px,2.6vw,20px)/1.4 system-ui,sans-serif}
.pb-h .caja .nom{position:absolute;top:-18px;left:16px;padding:3px 12px;border-radius:10px;background:#3a3060;color:#fff;font:900 14px system-ui;letter-spacing:.5px}
.pb-h .caja .mas{position:absolute;right:14px;bottom:6px;font-size:14px;animation:pbhbl .7s steps(2) infinite}@keyframes pbhbl{50%{opacity:0}}
.pb-h .saltar{position:absolute;top:calc((9vh + 8px) / var(--z,1));right:12px;padding:6px 12px;border-radius:10px;border:2px solid #fff;background:rgba(0,0,0,.35);color:#fff;font:900 13px system-ui;z-index:2}
.pb-h .vs{position:absolute;inset:0;display:flex;align-items:center;justify-content:space-around;pointer-events:none}
.pb-h .vs b{font:900 clamp(40px,10vw,96px) var(--font-title,system-ui);color:#ffd84a;text-shadow:0 4px 0 #a03a1a,0 0 30px #ff8a4a;animation:pbhvs .6s cubic-bezier(.2,.9,.3,1.4) both}
@keyframes pbhvs{from{transform:scale(3);opacity:0}to{transform:none;opacity:1}}
.pb-h .vs img{height:min(40vh,280px);aspect-ratio:1;image-rendering:pixelated;object-fit:contain;animation:pbhin .5s both}.pb-h .vs img.yo{animation-name:pbhinL}
.pb-h .lab-l{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:8px}
.pb-h .lab-i{padding:10px;border-radius:12px;background:rgba(255,255,255,.1);border:2px solid rgba(255,255,255,.4)}
.pb-h .lab-i b{display:block}.pb-h .lab-i small{display:block;opacity:.85;font-weight:700;font-size:12px;margin:3px 0 6px}
.pb-h .lab-i button{width:100%}.pb-h .lab-i.max{opacity:.6}
.pb-h .polvo{display:inline-flex;gap:6px;align-items:center;padding:4px 10px;border-radius:999px;background:#ffd84a;color:#4a2a00;font-weight:900}
.mm-item.pb-hist{grid-column:2!important;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0;padding:4px 8px;border-radius:14px;border:3px solid #fff;background:linear-gradient(135deg,#ffcf3a,#ff7a2a 55%,#d8302a)!important;color:#fff;text-shadow:0 2px 0 rgba(0,0,0,.3);min-width:0}\n.mm-item.pb-hist b{font:900 clamp(13px,1.9vw,17px) var(--font-title,system-ui);white-space:nowrap}.mm-item.pb-hist small{font:800 10px system-ui;opacity:.95;white-space:nowrap}\n.mm-item.tasks.pb-hist-par{grid-column:1!important;min-width:0;overflow:hidden}.mm-item.tasks.pb-hist-par *{min-width:0}
.pb-hist-pz{background:linear-gradient(#9a6ae8,#6a3ac8)!important;color:#fff!important;border-color:#e0d0ff!important}
@media (max-height:480px){.pb-h .por{height:38vh;bottom:calc(9vh + 104px)}.pb-h .caja{min-height:80px}.pb-h .cap>img{width:110px;height:110px}}`;
  document.head.append(st);

  // ---------- pantallas ----------
  let capa = null, alCerrar = null;
  const abrir = (reg, dlg) => {
    cerrar();
    capa = document.createElement('div');
    capa.className = 'pb-h' + (dlg ? ' dlg' : '');
    const c = COLOR[reg] ?? COLOR.kanto;
    capa.style.setProperty('--c1', c[0]); capa.style.setProperty('--c2', c[1]);
    capa.style.setProperty('--z', Math.max(1, Math.min(innerWidth / 915, innerHeight / 412)).toFixed(3)); // a la escala del menú en pantallas grandes
    document.body.append(capa);
    return capa;
  };
  const cerrar = () => { capa?.remove(); capa = null; teclas = null; };
  // Teclado y mando: Intro/Espacio/Z/A avanzan, Esc/B saltan.
  let teclas = null;
  addEventListener('keydown', e => {
    if (!capa || !teclas) return;
    if (['Enter', 'Space', 'KeyZ'].includes(e.code)) { e.preventDefault(); e.stopPropagation(); teclas.ok(); }
    else if (e.code === 'Escape') { e.preventDefault(); e.stopPropagation(); teclas.salir?.(); }
  }, true);
  let padPrev = [];
  const padLoop = () => {
    try {
      if (capa && teclas) {
        const g = [...(navigator.getGamepads?.() ?? [])].find(Boolean);
        if (g) {
          const a = g.buttons[0]?.pressed, b = g.buttons[1]?.pressed;
          if (a && !padPrev[0]) teclas.ok(); if (b && !padPrev[1]) teclas.salir?.();
          padPrev = [a, b];
        }
      }
    } catch {}
    requestAnimationFrame(padLoop);
  };
  requestAnimationFrame(padLoop);

  // Diálogo: lineas = [[retrato, nombre, texto, lado]]. Al acabar llama a fin().
  const dialogo = (reg, lineas, fin) => {
    const c = abrir(reg, true);
    let i = -1, tw = 0, completo = true, img = null;
    const caja = document.createElement('div'); caja.className = 'caja';
    const nom = document.createElement('div'); nom.className = 'nom';
    const txt = document.createElement('div');
    const mas = document.createElement('div'); mas.className = 'mas'; mas.textContent = '▼';
    caja.append(nom, txt, mas);
    const saltar = document.createElement('button'); saltar.className = 'saltar'; saltar.textContent = 'Saltar ▶▶';
    c.append(caja, saltar);
    const acabar = () => { clearInterval(tw); cerrar(); fin?.(); };
    const sig = () => {
      if (!completo) { clearInterval(tw); txt.textContent = lineas[i][2]; completo = true; return; }
      i++;
      if (i >= lineas.length) return acabar();
      const [ret, quien, texto, lado] = lineas[i];
      if (!img || img.dataset.r !== ret + lado) {
        img?.remove();
        img = document.createElement('img');
        img.className = 'por' + (lado === 'izq' ? ' izq' : '');
        img.dataset.r = ret + lado;
        img.src = ret.startsWith('pk:') ? `./assets/portraits/${ret.slice(3)}.png` : `./assets/historia/${ret}.png`;
        img.onerror = () => { img.style.visibility = 'hidden'; };
        c.insertBefore(img, caja);
      }
      nom.textContent = quien; nom.hidden = !quien;
      txt.textContent = ''; completo = false;
      let n = 0;
      tw = setInterval(() => { n += 2; txt.textContent = texto.slice(0, n); if (n >= texto.length) { clearInterval(tw); completo = true; } }, 22);
    };
    c.addEventListener('pointerup', e => { if (e.target === saltar) return; sig(); });
    saltar.onclick = e => { e.stopPropagation(); acabar(); };
    teclas = { ok: sig, salir: acabar };
    sig();
  };
  // Líneas «Nombre: texto» → [retrato, nombre, texto].
  const lineasDe = (ret, nombre, arr, extra = {}) => arr.map(t => {
    const m = /^([^:]{2,24}): (.*)$/.exec(t);
    if (!m) return [ret, nombre, t];
    const quien = m[1];
    const r = extra[quien] ?? (quien === 'Azul' ? 'azul' : /^Prof\. Oak/.test(quien) ? 'prof-kanto' : quien === 'Leti' ? 'liza' : ret);
    return [r, quien, m[2], quien === 'Leti' ? 'izq' : undefined];
  });

  const vs = (reg, ret, sp, fin) => {
    const c = abrir(reg, true);
    c.innerHTML = `<div class="vs"><img class="yo" src="./assets/portraits/${sp}.png" alt=""><b>VS</b><img src="./assets/historia/${ret}.png" alt=""></div>`;
    const t = setTimeout(() => { cerrar(); fin(); }, 1800);
    teclas = { ok: () => { clearTimeout(t); cerrar(); fin(); } };
  };

  // ---------- ranuras ----------
  const pantallaRanuras = () => {
    const h = H(); if (!h) return;
    const c = abrir('kanto');
    const b = document.createElement('div'); b.className = 'hb';
    b.innerHTML = `<button class="hx" aria-label="Cerrar">✕</button><h2>Modo historia</h2><p class="sub">Recorre las 9 regiones con tu compañero: sobrevive en cada mapa, vence a los líderes y a la Liga, y sigue a la siguiente región. Se guarda solo.</p><div class="hs-slots"></div>`;
    const sl = b.querySelector('.hs-slots');
    h.slots.forEach((s, i) => {
      const d = document.createElement('div'); d.className = 'hs-slot';
      if (!s) {
        d.innerHTML = `<div class="top"><b>Partida ${i + 1}</b></div><small>Vacía</small><div class="fila"><button class="hbt go">Nueva partida</button></div>`;
        d.querySelector('.go').onclick = () => nueva(i);
      } else {
        const cap = s.fin ? null : capitulo(s);
        const med = ORDEN.slice(0, s.r + 1).flatMap((reg, ri) => lideres(reg).slice(0, ri < s.r || s.fin ? 99 : s.k).map(l => reg === 'alola' ? `./assets/ui/types/${l.tipo}.png` : `./assets/medallas/${l.id}.png`));
        d.innerHTML = `<div class="top"><img src="./assets/portraits/${s.sp}.png" alt=""><div><b>${esc(nombrePk(s.sp))}</b><small>Partida ${i + 1} · ${s.fin ? '¡Historia completada!' : esc(REG[cap.reg] + ' · ' + (cap.liga ? 'Liga' : `Gimnasio ${s.k + 1}`))}</small></div></div>
          <div class="med">${med.map(u => `<img src="${u}" alt="">`).join('')}</div>
          <div class="fila"><button class="hbt go">${s.fin ? 'Ver final' : 'Continuar'}</button><button class="hbt del">Borrar</button></div>`;
        d.querySelector('.go').onclick = () => s.fin ? dialogo('kanto', FINAL, pantallaRanuras) : seguir(i);
        let armado = false;
        d.querySelector('.del').onclick = e => {
          if (!armado) { armado = true; e.target.textContent = '¿Seguro? Toca otra vez'; return; }
          h.slots[i] = null; if (h.activo === i) h.activo = null; guardar(); pantallaRanuras();
        };
      }
      sl.append(d);
    });
    b.querySelector('.hx').onclick = cerrar;
    teclas = { ok: () => {}, salir: cerrar };
    c.append(b);
  };

  const nueva = i => {
    const p = PROF.kanto;
    dialogo('kanto', lineasDe(p[0], p[1], p[2]), () => {
      const c = abrir('kanto');
      const b = document.createElement('div'); b.className = 'hb';
      b.innerHTML = `<h2>Elige a tu compañero</h2><p class="sub">Te acompañará en toda la historia. Sus mejoras del Laboratorio son solo suyas.</p><div class="ini">${INICIALES.map(sp => `<button data-sp="${sp}"><img src="./assets/portraits/${sp}.png" alt="">${esc(nombrePk(sp))}</button>`).join('')}</div><div class="fila"><button class="hbt vol">Volver</button></div>`;
      b.querySelectorAll('[data-sp]').forEach(x => x.onclick = () => {
        const sp = +x.dataset.sp, h = H();
        h.slots[i] = { sp, r: 0, k: 0, vistos: ['kanto'], creado: Date.now() };
        guardar();
        dialogo('kanto', [['prof-kanto', 'Prof. Oak', `¡Así que eliges a ${nombrePk(sp)}! Buena elección.`], ['azul', 'Azul', '¡Eh, abuelo! ¡Yo también quiero uno!'],
          ['azul', 'Azul', '¡Ja! Nos vemos en la Liga. ¡Seré campeón antes que tú!'], ['prof-kanto', 'Prof. Oak', 'Tu viaje empieza en Kanto: vence a los 8 líderes y después a la Liga. ¡Sobrevive y gana!']], () => seguir(i));
      });
      b.querySelector('.vol').onclick = pantallaRanuras;
      teclas = { ok: () => {}, salir: pantallaRanuras };
      c.append(b);
    });
  };

  // Presentación de la región (una vez) y pantalla del capítulo.
  const seguir = i => {
    const s = H()?.slots[i]; if (!s) return;
    if (s.fin) return dialogo('kanto', FINAL, pantallaRanuras);
    const reg = ORDEN[s.r];
    s.vistos ??= [];
    if (!s.vistos.includes(reg)) {
      s.vistos.push(reg); guardar();
      const p = PROF[reg];
      return dialogo(reg, lineasDe(p[0], p[1], p[2]), () => seguir(i));
    }
    pantallaCapitulo(i);
  };

  const pantallaCapitulo = i => {
    const s = H().slots[i], cap = capitulo(s), [mapa, mapaNom] = mapaDe(s);
    const c = abrir(cap.reg);
    const b = document.createElement('div'); b.className = 'hb';
    const eq = cap.liga ? cap.c.equipo : cap.l.equipo;
    b.innerHTML = `<button class="hx" aria-label="Volver">✕</button>
      <p class="sub">${esc(REG[cap.reg])} · ${cap.liga ? 'Liga Pokémon' : `${cap.reg === 'alola' ? 'Gran desafío' : 'Gimnasio'} ${s.k + 1} de ${lideres(cap.reg).length}`}</p>
      <div class="cap"><img src="./assets/historia/${cap.retrato}.png" alt=""><div class="info"><h2>${esc(cap.nombre)}</h2>
      <p>${esc(cap.lugar)} · Tipo ${esc(TIPO[cap.tipo] ?? cap.tipo)}</p><p>Mapa: ${esc(mapaNom)}. Sobrevive y vence a su equipo: ${eq.map(nombrePk).map(esc).join(', ')}.</p>
      <p>Tu compañero: <b>${esc(nombrePk(s.sp))}</b> · <span class="polvo">${Math.floor(meta()?.profile?.stardust ?? 0)} de Polvo</span></p></div></div>
      <div class="fila"><button class="hbt go">¡Al combate!</button><button class="hbt lab">Laboratorio</button><button class="hbt vol">Volver</button></div>`;
    const ir = () => {
      const fin = () => vs(cap.reg, cap.retrato, s.sp, () => empezar(i));
      const d = D[cap.id];
      if (cap.liga) dialogo(cap.reg, lineasDe(cap.retrato, cap.nombre, cap.c.antes), fin);
      else dialogo(cap.reg, lineasDe(cap.retrato, cap.nombre, d?.[1] ?? [`¡Soy ${cap.nombre}! ¡Prepárate!`]), fin);
    };
    b.querySelector('.go').onclick = ir;
    b.querySelector('.lab').onclick = () => laboratorio(cap.reg, s.sp, null, () => pantallaCapitulo(i));
    b.querySelector('.vol').onclick = b.querySelector('.hx').onclick = pantallaRanuras;
    teclas = { ok: ir, salir: pantallaRanuras };
    c.append(b);
  };

  // ---------- partida ----------
  let nuestroCfg = null;
  const empezar = i => {
    const h = H(), s = h.slots[i], cap = capitulo(s), [mapa] = mapaDe(s);
    h.activo = i; s.res = null; guardar();
    if (!cap.liga) GYM() && (GYM().sel = { reg: cap.reg, id: cap.id });
    nuestroCfg = { species: s.sp, biome: mapa, tier: 0, boosts: [], mode: 'standard' };
    const a = app();
    if (!a?.startRun) return;
    Promise.resolve(a.startRun(nuestroCfg)).then(ok => { if (!ok && !a.run) { GYM() && (GYM().sel = null); } });
  };
  // Una partida que no empieza desde aquí (ni «Reiniciar» la nuestra) deja la historia en pausa.
  const envolverApp = () => {
    const a = app();
    if (!a || a.__pbHist) return !!a;
    const orig = a.startRun;
    a.startRun = function (cfg, ...r) {
      try { if (cfg !== nuestroCfg && H()) H().activo = null; } catch {}
      return orig.call(this, cfg, ...r);
    };
    a.__pbHist = true;
    return true;
  };

  // Polvo de la partida hasta ahora (la misma cuenta que main-…js al terminar).
  const polvoHasta = run => {
    const st = run.stats, adel = st.pbAdel ?? 0;
    const base = Math.round((20 + (st.kills ?? 0) / 10 + ((run.stage ?? 1) - 1) * 30) * ([1, 1.75, 2.5][run.tier] ?? 1) * (R()?.polvo?.(run) ?? 1));
    return Math.max(0, base + Math.round((st.pbDust ?? 0) + adel) - adel);
  };
  const sumarPolvo = n => {
    const m = meta();
    for (const p of [m.profile, m.snap]) if (p) { p.stardust = (p.stardust ?? 0) + n; p.totalStardust = (p.totalStardust ?? 0) + n; }
  };
  const marcar = run => {
    const h = H();
    if (!h || h.activo == null || run.__hist != null || run.coop || run.mode !== 'standard') return;
    const s = h.slots[h.activo];
    if (!s || s.fin || run.startSpecies !== s.sp || run.biome?.id !== mapaDe(s)[0]) { return; }
    run.__hist = h.activo;
    const cap = capitulo(s);
    if (cap.liga) {
      run.__gym = { reg: cap.reg, id: cap.id, l: { id: cap.id, nombre: cap.nombre, tipo: cap.tipo, equipo: cap.c.equipo } };
      try { run.ui.banner(`Liga Pokémon de ${REG[cap.reg]}`, `Campeón: ${cap.nombre}. Sus guardianes son su equipo. ¡Gana para coronarte!`, '#ffd84a', { species: cap.c.equipo.at(-1) }); } catch {}
    } else if (!run.__gym) run.__gym = { reg: cap.reg, id: cap.id };
    // «Guardar y salir»: el Polvo ganado hasta ahora pasa ya al Laboratorio.
    const orig = run.saveAndQuitOnce;
    if (typeof orig === 'function') run.saveAndQuitOnce = async function (...a) {
      const n = polvoHasta(this), st = this.stats;
      if (n > 0) { st.pbDust = (st.pbDust ?? 0) - n; st.pbAdel = (st.pbAdel ?? 0) + n; sumarPolvo(n); }
      const r = await orig.apply(this, a);
      if (!r) this.__histGuardada = true; // guardada: el capítulo sigue en curso
      if (r && n > 0) { st.pbDust += n; st.pbAdel -= n; sumarPolvo(-n); }
      else if (n > 0) setTimeout(() => { try { guardar(); window.__pbApp?.notice?.(`+${n} de Polvo Estelar al Laboratorio (modo historia)`); } catch {} }, 800);
      return r;
    };
  };
  const resultado = run => {
    const h = H(), i = run.__hist, s = h?.slots[i];
    if (!s || run.__histHecho) return;
    run.__histHecho = true;
    if (run.endHow === 'restart' || run.__histGuardada) return; // «Reiniciar» o «Guardar y salir»: el capítulo sigue en curso
    if (run.victory) {
      const cap = capitulo(s);
      s.res = { gano: true, id: cap.id, liga: cap.liga, reg: cap.reg };
      s.k++;
      if (s.k > lideres(cap.reg).length) { s.k = 0; s.r++; if (s.r >= ORDEN.length) { s.r = ORDEN.length - 1; s.fin = true; } }
    } else s.res = { gano: false };
    h.activo = null;
    h.pendiente = i;
    guardar();
  };
  // Al volver al menú tras un capítulo: su diálogo y el siguiente.
  const enMenu = () => !!document.querySelector('.mm-item.play')?.offsetParent;
  const pendiente = () => {
    const h = H(), i = h?.pendiente;
    if (i == null || capa || !enMenu()) return;
    const s = h.slots[i]; h.pendiente = null; guardar();
    if (!s?.res) return;
    const r = s.res; s.res = null;
    if (!r.gano) {
      const reg = ORDEN[s.r], cap = capitulo(s);
      return dialogo(reg, [[cap.retrato, cap.nombre, '¡Ja! Todavía te falta entrenamiento.'], ['prof-kanto', 'Prof. Oak', 'No te rindas: mejora a tu compañero en el Laboratorio y vuelve a intentarlo.']], () => pantallaCapitulo(i));
    }
    const ret = r.liga ? 'camp-' + r.reg : r.id;
    const nom = r.liga ? CAMP[r.reg].nombre : lideres(r.reg).find(l => l.id === r.id)?.nombre ?? '';
    const lin = r.liga ? CAMP[r.reg].despues : D[r.id]?.[2] ?? ['¡Has ganado!'];
    dialogo(r.reg, lineasDe(ret, nom, lin), () => seguir(i));
  };

  setInterval(() => {
    try {
      envolverApp();
      const run = window.__pbRun;
      if (run && run.state === 'play') marcar(run);
      if (run && run.__hist != null && run.state === 'over') resultado(run);
      pendiente();
      boton();
      botonPausa(run);
    } catch {}
  }, 400);

  // ---------- Laboratorio de la historia (pantalla del capítulo y pausa) ----------
  const ESPECIALES = { reroll: r => { r.rerolls++; }, skip: r => { r.skips++; }, banish: r => { r.banishes++; }, 'slot-vit': r => { r.player.vitaminSlots++; },
    'slot-move': r => { r.player.moveSlots = 4; }, revive: r => { try { r.player.$1tj1qwd('max-revive'); } catch {} } };
  const laboratorio = (reg, sp, run, volver) => {
    const L = window.PB_LAB, m = meta();
    if (!L || !m) return;
    const pintar = () => {
      const c = abrir(reg);
      if (run) c.style.zIndex = 100060;
      const b = document.createElement('div'); b.className = 'hb';
      const defs = L.defs.filter(d => L.isInd(d.id));
      b.innerHTML = `<button class="hx" aria-label="Volver">✕</button><h2>Laboratorio</h2><p class="sub">Mejoras de <b>${esc(nombrePk(sp))}</b> · <span class="polvo">${Math.floor(m.profile.stardust)} de Polvo</span>${run ? ' · Las de estadísticas se notan al momento; las de inicio de partida (huecos, Revivir…) también se aplican ya.' : ''}</p><div class="lab-l"></div><div class="fila"><button class="hbt vol">Volver</button></div>`;
      const l = b.querySelector('.lab-l');
      for (const d of defs) {
        const lv = L.get(m.profile.lab, d.id, sp), max = lv >= d.max, cost = max ? 0 : d.cost(lv);
        const x = document.createElement('div'); x.className = 'lab-i' + (max ? ' max' : '');
        x.innerHTML = `<b>${esc(d.name)} · ${max ? 'MÁX.' : `Nv. ${lv}/${d.max}`}</b><small>${esc(d.desc ?? '')}</small><button class="hbt"${max || m.profile.stardust < cost ? ' disabled' : ''}>${max ? 'Al máximo' : `Mejorar · ${cost} de Polvo`}</button>`;
        x.querySelector('button').onclick = () => {
          L.scope(sp);
          if (!m.buyLab(d.id)) return;
          // Que la compra sobreviva a «Guardar y salir» (se guarda el perfil de antes de la partida).
          if (m.snap) { m.snap.lab = structuredClone(m.profile.lab); m.snap.stardust = Math.max(0, (m.snap.stardust ?? 0) - cost); }
          if (run && run.state !== 'over') { try { ESPECIALES[d.id]?.(run); run.player.recompute(); } catch {} }
          guardar();
          pintar();
        };
        l.append(x);
      }
      const salir = () => { cerrar(); volver?.(); };
      b.querySelector('.vol').onclick = b.querySelector('.hx').onclick = salir;
      teclas = { ok: () => {}, salir };
      c.append(b);
    };
    pintar();
  };

  // ---------- botones ----------
  // Menú principal: «Modo historia» comparte la fila de Encargos (las dos mitades).
  const boton = () => {
    const nav = document.querySelector('.mm-nav.jay-actions'), tasks = nav?.querySelector('.mm-item.tasks');
    if (!tasks || nav.querySelector('.pb-hist')) return;
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'mm-item pb-hist';
    b.innerHTML = '<b>Modo historia</b><small>De Kanto a Paldea</small>';
    tasks.classList.add('pb-hist-par');
    b.onclick = () => pantallaRanuras();
    tasks.after(b);
  };
  const botonPausa = run => {
    if (run?.__hist == null || run.state === 'over') return;
    const foot = document.querySelector('.pz .sm-foot');
    if (!foot || foot.querySelector('.pb-hist-pz')) return;
    const b = document.createElement('button');
    b.className = 'btn ghost pb-hist-pz';
    b.textContent = 'Laboratorio';
    b.title = 'Mejora a tu Pokémon sin salir de la partida';
    b.onclick = () => laboratorio(ORDEN[H()?.slots[run.__hist]?.r ?? 0], run.startSpecies, run, null);
    foot.prepend(b);
  };

  window.PB_HISTORIA = { abrir: pantallaRanuras, D, PROF, CAMP, capitulo, mapaDe, laboratorio };
})();
