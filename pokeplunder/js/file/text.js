export const text = {
	menu: {
		prompt: ['- CLICK TO START -', '- CLICK PARA EMPEZAR -'],
		loading: ['Loading...', 'Cargando...'],
		newGame: ['New game', 'Nueva partida'],
		start: ['Start', 'Crear'],
		name: ['Name', 'Nombre'],
		settings: {
			title: ['Settings', 'Opciones'],
			language: ['Language', 'Idioma'],
			audio: {
				0: ['Master', 'General'],
				1: ['Music', 'Música'],
				2: ['Interface', 'Interfaz'],
				3: ['Effects', 'Efectos'],
			},
		},
		upgrades: {
			title: ['Upgrades', 'Mejoras'],
			points: ['Points', 'Puntos'],
			hp: ['Health', 'Salud'], 
			ap: ['AP', 'PA'], 
			mp: ['MP', 'PM'], 
			atk: ['Attack', 'Ataque'], 
			spa: ['Sp. Atk', 'At. Esp.'], 
			spe: ['Speed', 'Velocidad'],
			crt: ['Critical', 'Crítico'], 
			crtDmg: ['Crt. Damage', 'Daño Crt.'],
			gold: ['Gold', 'Oro']
		},
		credits: {
			title: ['Credits', 'Créditos'],
			section: {
				developer: ['Developer', 'Programación'],
				disclaimer: ['Disclaimer', 'Disclaimer'],
				testers: ['Testers', 'Testers'],
				assets: ['Assets', 'Assets'],
			},
		},
		profile: {
			title: ['Profile', 'Perfil'],
			stat: {
				title: ['Stats', 'Estadísticas']
			},
			record: {
				title: ['Records', 'Récords']
			},
			achievement: {
				title: ['Achievements', 'Logros'],
				unlocked: ['Achievements unlocked', 'Logros desbloqueados'],
			}
		},
	},
	stats: {
		hp: ['Health', 'Salud'], 
		ap: ['AP', 'PA'], 
		mp: ['MP', 'PM'], 
		atk: ['Attack', 'Ataque'], 
		spa: ['Sp. Atk', 'At. Esp.'], 
		spe: ['Speed', 'Velocidad'],
		res: ['Resistance', 'Resistencia'], 
		crt: ['Critical', 'Crítico'], 
		crtDmg: ['Crt. Damage', 'Daño Crt.'],
		short: {
			hp: ['Hp', 'Ps'], 
			pa: ['AP', 'PA'], 
			pm: ['MP', 'PM'], 
			atk: ['Atk', 'Atq'], 
			spa: ['SpA', 'AtE'], 
			res: ['Res', 'Res'], 
			spe: ['Spe', 'Vel'],
			crt: ['Crt', 'Crt'], 
			crtDmg: ['CrD', 'DCrt'],
		},
	},
	evolution: {
		0: ["<span class='yellow'>What's happening?</span>", '<span class="yellow">¿Qué está pasando?</span>'],
		1: ['has evolved into ', 'ha evolucionado en '],
		2: ['gained <span class="ap">+1 AP</span>', 'ha ganado <span class="ap">+1 PA</span>'],
		3: ['has restored its <span class="hp">HP</span>', 'recupera sus <span class="hp">PS</span>']
	},
	general: {
		exit: ['Exit', 'Salir'],
		floor: ['Floor', 'Piso'],
		room: ['Room', 'Sala'],
		goldEarn: ['You have earnerd', 'Has obtenido'],
		goldSpent: ['You have spent', 'Has perdido'],
		inventoryFull: ['<span class="red">INVENTORY FULL</span>', '<span class="red">INVENTARIO LLENO</span>'],
		win: ['Win', 'Victoria'],
		lose: ['Defeat', 'Derrota'],
		result: ['Result', 'Resultado'],
		gameOver: ['Game Over', 'Fin del juego']
	},
	battle: {
		endTurn: ['Finish turn', 'Terminar turno'],
		endBattle: ['The fight has ended', 'Fin del combate'],
		defeated: ['has been defeated', 'ha sido derrotado'],
		moves: ['Moves', 'Ataques'],
		usesPerTurn: ['Uses per turn', 'Usos por turno'],
		cooldown: ['Cooldown', 'Enfriamiento'],
		turns: ['turns', 'turnos'],
		deal: ['Deal', 'Causa'],
		heal: ['Heal', 'Cura'],
		turn: ['Turn', 'Turno'],
		wildPokemon: {
			0: ['A wild ', '¡Aparece un '],
			1: ['appears!', 'salvaje!']
		},
		uses: ['uses', 'usa'],
		crt: ['<span class="crt">(CRITICAL!)</span>', '<span class="crt">(¡GC!)</span>']
	},
	event: {
		continue: ['Continue', 'Continuar'],
		delibird: {
			selection: [
				'<span class="yellow">[CHOOSE A REWARD TO CONTINUE]</span><br>', 
				'<span class="yellow">[SELECCIONA UNA RECOMPENSA PARA CONTINUAR]</span><br>', 
			],
			announce: [
				`<span class="blue">DELIBIRD</span> comes to offer you a <span class="yellow">GIFT</span>!<br>`, 
				`¡<span class="blue">DELIBIRD</span> viene a ofrezerte un <span class="yellow">REGALO</span>!<br>`
			],
			welcome: [
				'<span class="blue">DELIBIRD:</span> One choice only... make it count!<br>', 
				'<span class="blue">DELIBIRD:</span> Elige sabiamente, solo uno puede ser tuyo.<br>', 
			],
			pick: [
				'<span class="blue">DELIBIRD:</span> Excellent pick!<br>', 
				'<span class="blue">DELIBIRD:</span> ¡Buena elección!<br>', 
			],
			getItem: [
				'You have obtained a ', 
				'Has obtenido ', 
			]
		},
		kecleon: {
			announce: [
				`<span class="blue">KECLEON</span> comes looking for your <span class="yellow">MONEY</span>!<br>`, 
				`¡<span class="blue">KECLEON</span> viene en busca de tu <span class="yellow">DINERO</span>!<br>`
			],
			welcome: [
				'<span class="blue">KECLEON:</span> Fresh stuff, best stuff!<br>', 
				'<span class="blue">KECLEON:</span> ¡Mercancía fresca, mercancía buena!<br>', 
			],
			sale: [
				'<span class="blue">KECLEON:</span> Special deal today: ', 
				'<span class="blue">KECLEON:</span> La ganga de hoy: ', 
			],
			buyItem: [
				'You bought a ', 
				'Has comprado ', 
			],
		},
		voltorb: {
			selection: [
				'<span class="yellow">[CHOOSE A REWARD TO CONTINUE]</span><br>', 
				'<span class="yellow">[SELECCIONA UNA RECOMPENSA PARA CONTINUAR]</span><br>', 
			],
			announce: [
				`<span class="blue">VOLTORB</span> comes to improve your <span class="yellow">POKEBALL</span>!<br>`, 
				`¡<span class="blue">VOLTORB</span> viene para mejorar tu <span class="yellow">POKEBALL</span>!<br>`
			],
			welcome: [
				'<span class="blue">VOLTORB:</span> Move it, I don’t have all day.<br>', 
				'<span class="blue">VOLTORB:</span> Vamos, no tengo todo el dia.<br>', 
			],
			pick: [
				'<span class="blue">VOLTORB:</span> What a disastrous pick.<br>', 
				'<span class="blue">VOLTORB:</span> Terrible elección.<br>', 
			],
		},
		smeargle: {
			announce: [
				`<span class="blue">SMEARGLE</span> comes to teach you a <span class="yellow">MOVE</span>!<br>`, 
				`¡<span class="blue">SMEARGLE</span> viene a enseñarte un <span class="yellow">MOVIMIENTO</span>!<br>`
			],
			welcome: [
				'<span class="blue">SMEARGLE:</span> Oh, a blank canvas!<br>', 
				'<span class="blue">SMEARGLE:</span> ¡Ah, un lienzo en blanco!<br>', 
			],
			pick: [
				'<span class="blue">SMEARGLE:</span> You’ve added a new color to your palette!<br>', 
				'<span class="blue">SMEARGLE:</span> ¡Has añadido un nuevo color a tu paleta!<br>', 
			],
			learnMove: [
				'You have learned ', 
				'Has aprendido ', 
			],
			selection: [
				'<span class="yellow">[LEARN A MOVE TO CONTINUE]</span><br>', 
				'<span class="yellow">[APRENDE UN MOVIMIENTO PARA CONTINUAR]</span><br>', 
			],
		},
		ditto: {
			announce: [
				`<span class="blue">DITTO</span> comes to upgrade you a <span class="yellow">MOVE</span>!<br>`, 
				`¡<span class="blue">DITTO</span> viene a mejorarte un <span class="yellow">MOVIMIENTO</span>!<br>`
			],
			welcome: [
				'<span class="blue">DITTO:</span> DIT-TO?<br>', 
				'<span class="blue">DITTO:</span> ¿DIT-TO?<br>', 
			],
			pick: [
				'<span class="blue">DITTO:</span> DITTO!<br>', 
				'<span class="blue">DITTO:</span> ¡DITTO!<br>', 
			],
			upgradeMove: [
				'You have learned ', 
				'Has aprendido ', 
			],
			selection: [
				'<span class="yellow">[LEARN A MOVE TO CONTINUE]</span><br>', 
				'<span class="yellow">[APRENDE UN MOVIMIENTO PARA CONTINUAR]</span><br>', 
			],
		},
		chansey: {
			selection: [
				'<span class="yellow">[MAKE A CHOICE TO CONTINUE]</span><br>', 
				'<span class="yellow">[HAZ UNA ELECCIÓN PARA CONTINUAR]</span><br>', 
			],
			announce: [
				`<span class="blue">CHANSEY</span> comes to give you a <span class="yellow">LITTLE HELP</span>!<br>`, 
				`¡<span class="blue">CHANSEY</span> viene para darte una <span class="yellow">AYUDITA</span>!<br>`
			],
			welcome: [
				'<span class="blue">CHANSEY:</span> How can I help you?<br>', 
				'<span class="blue">CHANSEY:</span> ¿Cómo puedo ayudarte?<br>', 
			],
			pick: [
				'<span class="blue">CHANSEY:</span> Whatever you wish, it shall be done!<br>', 
				'<span class="blue">CHANSEY:</span> ¡Tus deseos son ordenes!<br>', 
			],
			option: {
				0: {
					name: ['HEAL', 'CURAR'],
					description: ['Recovers all HP', 'Recupera todos los PS.']
				},
				1: {
					name: ['HP UP', 'PS MÁS'],
					description: ['Increases maximum HP by 11 to 20.', 'Aumenta entre 11 y 20 los PS máximos.']
				},
				2: {
					name: ['GREED', 'AVARICIA'],
					description: ['Earn between 25 and 50 gold.', 'Gana entre 25 y 50 de oro.']
				},
				3: {
					name: ['LUCKY EGG', 'HUEVO SUERTE'],
					description: ['Receive a Berry.', 'Recibe una Baya.']
				},
			},
			hpMax: [
				'Maximum HP increased by ', 
				'PS incrementados en', 
			],
		}
	},
	moves: {
		empty: ['Empty', 'Vacío'],
	},
	items: {
		focusBand: [
			`The <span class="yellow">FOCUS BAND</span> saves your life`,
			`La <span class="yellow">BANDA FOCUS</span> te salva la vida`
		],
		weaknessPolicy: [
			`<span class="yellow">WEAKNESS POLICY</span> returns your MP to its maximum value`,
			`<span class="yellow">SEGURO DEBILIDAD</span> devuelve tus PM a su valor máximo`
		],
		silverWing: [
			`Upgraded: `,
			`Se ha mejorado `
		]
	},
	status: {
		charge: {
			description: [
			`<br>
			<span class="cha">CHARGE:</span>
			When obtaining <span class="cha">10 CHARGES</span>, restore <span class="ap">3<img src="./assets/images/icons/ap.png" class="icon"></span>`,
			`<br>
			<span class="cha">CARGA:</span>
			Al obtener <span class="cha">10 CARGAS</span>, restaura <span class="ap">3<img src="./assets/images/icons/ap.png" class="icon"></span>
			`
			],
			0: ['CHARGE', 'CARGA'],
			1: ['consumes all its <span class="cha">CHARGES</span>', 'consume todas sus <span class="cha">CARGAS</span>']
		},
		elusion: {
			description: [
			`<br>
			<span class="elu">ELUSION:</span>
			15% chance to dodge attacks, reduces stacks by 1 at the start of the turn`,
			`<br>
			<span class="elu">ELUSIÓN:</span>
			15% de evitar ataques, al inicio del turno reduce en 1 las acumuluaciones
			`
			],
			0: ['ELUSION', 'ELUSIÓN'],
			1: ['prepares to dodge', 'se prepara para esquivar'],
			2: ['dodges the hit', 'esquiva el ataque'],
			3: ['stops dodging attacks', 'deja de esquivar ataques'],
		},
		poison: {
			description: [
			`<br>
			<span class="poi">POISON:</span>
			Deals <span class="poi">1</span> damage per <span class="poi">POISON</span> stack, then halves the stacks`,
			`<br>
			<span class="poi">VENENO:</span>
			Causa <span class="poi">1</span> por acumulación de <span class="poi">VENENO</span> y reduce a la mitad las acumuluaciones
			`
			],
			0: ['POISON', 'VENENO'],
			1: ['reduces its poison by', 'reduce su veneno en'],
			2: ['loses all its <span class="poi">POISON</span>', 'pierde todo su <span class="poi">VENENO</span>']
		},
		wet: {
			description: [
			`<br>
			<span class="wet">WET:</span> 
			When obtaining <span class="wet">x10 WET</span>, restore <span class="mp">1<img src="./assets/images/icons/mp.png" class="icon"></span>`,
			`<br>
			<span class="wet">HUMEDAD:</span> 
			Al obtener <span class="wet">x10 HUMEDAD</span>, gana <span class="mp">1<img src="./assets/images/icons/mp.png" class="icon"></span>
			`
			],
			0: ['WET', 'HUMEDAD'],
			1: ['consumes all its <span class="wet">WET</span>', 'consume toda su <span class="wet">HUMEDAD</span>']
		},
		burn: {
			description: [
			`<br>
			<span class="bur">BURN:</span>
			At the start of each turn, lose <span class="hp">5% HP</span> and reduce stacks by 1 <span class="red">(2% for bosses)</span>`,
			`<br>
			<span class="bur">QUEMADURA:</span>
			Al inicio de turno, pierde <span class="hp">5% PS</span> y reduce en 1 las acumuluaciones <span class="red">(2% contra jefes)</span>
			`
			],
			0: ['BURN', 'QUEMADURA'],
			1: ['reduces its burn by', 'reduce su quemadura en'],
		},
		erosion: {
			description: [
			`<br>
			<span class="ero">EROSION:</span>
			When acting, deal 3 damage per <span class="ero">EROSION</span> stack and reduce stacks by 1`,
			`<br>
			<span class="ero">EROSIÓN:</span>
			Al actuar causa 3 de daño por acumulación de <span class="ero">EROSIÓN</span> y las reduce en 1
			`
			],
			0: ['EROSION', 'EROSIÓN'],
			1: ['reduces its erosion by', 'reduce su erosión en'],
		},
		frailty: {
			description: [
			`<br>
			<span class="fra">FRAILTY:</span>
			When attacked, the target takes 1 damage for each <span class="fra">FRAILTY</span> stack.`,
			`<br>
			<span class="fra">FLAQUEZA:</span>
			Al ser atacado, el objetivo recibe 1 de daño por cada acumulación de <span class="fra">FLAQUEZA</span>
			`
			],
			0: ['FRAILTY', 'FLAQUEZA'],
			1: ['reduces its frailty by', 'reduce su flaqueza en'],
		},
		fear: {
			description: [
			`<br>
			<span class="fea">FEAR:</span>
			Takes 1% more damage per <span class="fea">FEAR</span> stack (3% on critical hits).`,
			`<br>
			<span class="fea">MIEDO:</span>
			Aumenta el daño recibido en 1% por cada acumulación de <span class="fea">MIEDO</span> (3% para críticos)
			`
			],
			0: ['FEAR', 'MIEDO'],
			1: ['reduces its fear by', 'reduce su miedo en'],
		},
		restoration: {
			description: [
			`<br>
			<span class="hea">RESTORATION:</span>
			Restore <span class="hp">3 HP</span> per <span class="hea">RESTORATION</span> stack at turn start, then reduce by 1`,
			`<br>
			<span class="hea">RESTAURACIÓN:</span> 
			Al inicio de turno, cura <span class="hp">3 PS</span> por <span class="hea">RESTAURACIÓN</span> aplicada y las reduce en 1
			`
			],
			0: ['RESTORATION', 'RESTAURACIÓN'],
			1: ['reduces its restoration by', 'reduce su restauración en'],
		},
	}
}

export function formatNumberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
