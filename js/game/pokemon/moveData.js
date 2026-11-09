import { statusData } from './statusData.js';
import { text } from '../../file/text.js';

export const moveData = {
	// BASICS
	tackle: {
		id: 'tackle',
		upgrade: false, 
		name: ['Tackle', 'Placaje'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(100%<img src="./assets/images/icons/atk.png" class="icon">)</span>`,
			`<span class="atk">(100%<img src="./assets/images/icons/atk.png" class="icon">)</span>`
		],
		color: 'atk'
	},
	cut: {
		id: 'cut',
		upgrade: false, 
		name: ['Cut', 'Corte'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(100%<img src="./assets/images/icons/atk.png" class="icon">)</span>`,
			`<span class="atk">(100%<img src="./assets/images/icons/atk.png" class="icon">)</span>`
		],
		color: 'atk'
	},
	scratch: {
		id: 'scratch',
		upgrade: false, 
		name: ['Scratch', 'Arañazo'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(100%<img src="./assets/images/icons/atk.png" class="icon">)</span>`,
			`<span class="atk">(100%<img src="./assets/images/icons/atk.png" class="icon">)</span>`
		],
		color: 'atk'
	},
	quickAttack: {
		id: 'quickAttack',
		upgrade: false, 
		name: ['Quick Attack', 'Ataque Rápido'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			spe: 1,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spe">(100%<img src="./assets/images/icons/spe.png" class="icon">)</span>`,
			`<span class="spe">(100%<img src="./assets/images/icons/spe.png" class="icon">)</span>`
		],
		color: 'spe'
	},
	peck: {
		id: 'peck',
		upgrade: false, 
		name: ['Peck', 'Picotazo'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 0.4,
			spe: 0.4,
		},
		type: 'damage',
		eludible: true,
		description: [
			`
			<span class="mix">(<span class="atk">40%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">40%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			`,
			`
			<span class="mix">(<span class="atk">40%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">40%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			`	
		],
		color: 'mix'
	},
	sandAttack: {
		id: 'sandAttack',
		upgrade: false, 
		name: ['Sand Attack', 'Ataque Arena'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 0.4,
			spa: 0.4,
		},
		type: 'damage',
		eludible: true,
		description: [
			`
			<span class="mix">(<span class="atk">40%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">40%<img src="./assets/images/icons/spa.png" class="icon"></span>)</span>
			`,
			`
			<span class="mix">(<span class="atk">40%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">40%<img src="./assets/images/icons/spa.png" class="icon"></span>)</span>
			`	
		],
		color: 'mix'
	},
	takeDown: {
		id: 'takeDown',
		upgrade: false, 
		name: ['Take Down', 'Derribo'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			hp: 0.15,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="hp">(15%<img src="./assets/images/icons/hp.png" class="icon">)</span>`,
			`<span class="hp">(15%<img src="./assets/images/icons/hp.png" class="icon">)</span>`
		],
		color: 'hp'
	},
	poisonSting: {
		id: 'poisonSting',
		upgrade: false, 
		name: ['Poison Sting', 'Picotazo veneno'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 0.2,
		},
		status: {
			data: statusData['poison'],
			type: 'poison',
			target: 'foe',
			value: 3,
		},
		type: 'damage',
		eludible: true,
		description: [
			`
			<span class="spa">(20%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and apply <span class="poi">x3 POISON</span> <br>
			${text.status.poison.description[0]}
			`,
			`
			<span class="spa">(20%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y aplica <span class="poi">x3 VENENO</span> <br>
			${text.status.poison.description[1]}
			`
		],
		color: 'spa'
	},
	swift: {
		id: 'swift',
		upgrade: false, 
		name: ['Swift', 'Meteoros'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 0.3,
			spa: 0.3,
			spe: 0.3,
		},
		type: 'damage',
		eludible: true,
		description: [
			`
			<span class="mix">(<span class="atk">30%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">30%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">30%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			`,
			`
			<span class="mix">(<span class="atk">30%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">30%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">30%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			`	
		],
		color: 'mix'
	},
	// BUFOS
	nastyPlot: {
		id: 'nastyPlot',
		upgrade: false, 
		name: ['Nasty Plot', 'Maquinación'],
		able: true,
		cost: { value: 3, type: 'mp'},
		cd: [0, 4],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			percent: true,
			value: {
				spa: [0.2]
			}
		},
		eludible: false,
		description: [
			`Increase base <img src="./assets/images/icons/spa.png" class="icon"> by <span class="spa">x1.2</span>`,
			`Aumenta el <img src="./assets/images/icons/spa.png" class="icon"> base en <span class="spa">x1.2</span>`
		]
	},
	agility: {
		id: 'agility',
		upgrade: false, 
		name: ['Agility', 'Agilidad'],
		able: true,
		cost: { value: 1, type: 'mp'},
		cd: [0, 3],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				spe: [10]
			}
		},
		eludible: false,
		description: [
			`
			Increase <span class="spe">+10<img src="./assets/images/icons/spe.png" class="icon"></span>
			`,
			`
			Aumenta <span class="spe">+10<img src="./assets/images/icons/spe.png" class="icon"></span>
			`
		],
	},
	sandstorm: {
		id: 'sandstorm',
		upgrade: false, 
		name: ['Sandstorm', 'Tormenta Arena'],
		able: true,
		cost: { value: 1, type: 'mp'},
		cd: [0, 4],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				atk: [3],
				spa: [3],
				res: [3],
			}
		},
		eludible: false,
		description: [
			`Increase <span class="atk">+3<img src="./assets/images/icons/atk.png" class="icon"></span>,
			<span class="spa">+3<img src="./assets/images/icons/spa.png" class="icon"></span> and
			<span class="res">+3%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`
			Aumenta <span class="atk">+3<img src="./assets/images/icons/atk.png" class="icon"></span>,
			<span class="spa">+3<img src="./assets/images/icons/spa.png" class="icon"></span> y
			<span class="res">+3%<img src="./assets/images/icons/res.png" class="icon"></span>
			`
		]
	},
	focusEnergy: {
		id: 'focusEnergy',
		upgrade: false, 
		name: ['Focus Energy', 'Foco Energía'],
		able: true,
		cost: { value: 1, type: 'mp'},
		cd: [0, 3],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				crt: [10]
			}
		},
		eludible: false,
		description: [
			`Increase <span class="crt">+10%<img src="./assets/images/icons/crt.png" class="icon"></span>`,
			`Aumenta <span class="crt">+10%<img src="./assets/images/icons/crt.png" class="icon"></span>`
		]
	},
	swordsDance: {
		id: 'swordsDance',
		upgrade: false, 
		name: ['Swords Dance', 'Danza espada'],
		able: true,
		cost: { value: 3, type: 'mp'},
		cd: [0, 4],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			percent: true,
			value: {
				atk: [0.2]
			}
		},
		eludible: false,
		description: [
			`Increase base <img src="./assets/images/icons/atk.png" class="icon"> by <span class="atk">x1.2</span>`,
			`Aumenta el <img src="./assets/images/icons/atk.png" class="icon"> base en <span class="atk">x1.2</span>`
		]
	},
	honeClaws: {
		id: 'honeClaws',
		upgrade: false, 
		name: ['Hone Claws', 'Afilagarras'],
		able: true,
		cost: { value: 3, type: 'mp'},
		cd: [0, 4],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				crt: [8],
				crtDmg: [15]
			}
		},
		eludible: false,
		description: [
			`
			Increase <span class="crt">+8%<img src="./assets/images/icons/crt.png" class="icon"></span> and
			<span class="crtDmg">+15%<img src="./assets/images/icons/crtDmg.png" class="icon"></span>
			`,
			`
			Aumenta <span class="crt">+8%<img src="./assets/images/icons/crt.png" class="icon"></span> y
			<span class="crtDmg">+15%<img src="./assets/images/icons/crtDmg.png" class="icon"></span>
			`
		]
	},
	ironDefense: {
		id: 'ironDefense',
		upgrade: false, 
		name: ['Iron Defense', 'Defensa Férrea'],
		able: true,
		cost: { value: 3, type: 'mp'},
		cd: [0, 8],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				res: [10]
			}
		},
		eludible: false,
		description: [
			`Increase <span class="res">+10%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`
			Aumenta <span class="res">+10%<img src="./assets/images/icons/res.png" class="icon"></span>
			`
		]
	},	
	calmMind: {
		id: 'calmMind',
		upgrade: false, 
		name: ['Calm Mind', 'Paz Mental'],
		able: true,
		cost: { value: 2, type: 'mp'},
		cd: [0, 4],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				spa: [10],
				res: [4],
			}
		},
		eludible: false,
		description: [
			`Increase <span class="spa">+10<img src="./assets/images/icons/spa.png" class="icon"></span> and
			<span class="res">+4%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`
			Aumenta <span class="spa">+10<img src="./assets/images/icons/spa.png" class="icon"></span> y
			<span class="res">+4%<img src="./assets/images/icons/res.png" class="icon"></span>
			`
		]
	},
	coaching: {
		id: 'coaching',
		upgrade: false, 
		name: ['Coaching', 'Motivación'],
		able: true,
		cost: { value: 2, type: 'mp'},
		cd: [0, 4],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				atk: [10],
				res: [4],
			}
		},
		eludible: false,
		description: [
			`Increase <span class="atk">+10<img src="./assets/images/icons/atk.png" class="icon"></span> and
			<span class="res">+4%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`
			Aumenta <span class="atk">+10<img src="./assets/images/icons/atk.png" class="icon"></span> y
			<span class="res">+4%<img src="./assets/images/icons/res.png" class="icon"></span>
			`
		]
	},
	growth: {
		id: 'growth',
		upgrade: false, 
		name: ['Growth', 'Desarrollo'],
		able: true,
		cost: { value: 2, type: 'mp'},
		cd: [0, 4],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				atk: [4],
				spa: [4],
				spe: [4]
			}
		},
		eludible: false,
		description: [
			`Increase <span class="atk">+4<img src="./assets/images/icons/atk.png" class="icon"></span>,
			<span class="spa">+4<img src="./assets/images/icons/spa.png" class="icon"></span> and
			<span class="spe">+4<img src="./assets/images/icons/spe.png" class="icon"></span>`,
			`
			Aumenta <span class="atk">+4<img src="./assets/images/icons/atk.png" class="icon"></span>,
			<span class="spa">+4<img src="./assets/images/icons/spa.png" class="icon"></span> y
			<span class="spe">+4<img src="./assets/images/icons/spe.png" class="icon"></span>
			`
		]
	},
	workUp: {
		id: 'workUp',
		upgrade: false, 
		name: ['Work Up', 'Avivar'],
		able: true,
		cost: { value: 1, type: 'mp'},
		uses: [1, 1],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				atk: [6],
				spa: [6]
			}
		},
		eludible: false,
		description: [
			`Increase <span class="atk">+6<img src="./assets/images/icons/atk.png" class="icon"></span> and
			<span class="spa">+6<img src="./assets/images/icons/spa.png" class="icon"></span>`,
			`
			Aumenta <span class="atk">+6<img src="./assets/images/icons/atk.png" class="icon"></span> y
			<span class="spa">+6<img src="./assets/images/icons/spa.png" class="icon"></span>
			`
		]
	},
	lifeDew: {
		id: 'lifeDew',
		upgrade: false, 
		name: ['Life Dew', 'Gota Vital'],
		able: true,
		cost: { value: 1, type: 'mp'},
		cd: [0, 3],
		type: 'status',
		heal: {
			atk: 0.1,
			spa: 0.1
		},
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				atk: [6],
				spa: [6]
			}
		},
		eludible: false,
		description: [
			`<span class="mix">(<span class="atk">10%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">10%<img src="./assets/images/icons/spa.png" class="icon"></span>)</span> and increase
			<span class="atk">+6<img src="./assets/images/icons/atk.png" class="icon"></span> and
			<span class="spa">+6<img src="./assets/images/icons/spa.png" class="icon"></span>`,
			`<span class="mix">(<span class="atk">10%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">10%<img src="./assets/images/icons/spa.png" class="icon"></span>)</span> y aumenta
			<span class="atk">+6<img src="./assets/images/icons/atk.png" class="icon"></span> y
			<span class="spa">+6<img src="./assets/images/icons/spa.png" class="icon"></span>`		
		],
		color: 'mix'
	},
	// STATUS
	doubleTeam: {
		id: 'doubleTeam',
		upgrade: false, 
		name: ['Double Team', 'Doble Equipo'],
		able: true,
		cost: { value: 2, type: 'mp'},
		cd: [0, 6],
		status: {
			data: statusData['elusion'],
			type: 'elusion',
			target: 'user',
			value: 2,
		},
		type: 'status',
		eludible: false,
		description: [
			`Apply <span class="elu">x2 ELUSION</span> <br>
			${text.status.elusion.description[0]}`,
			`
			Aplica <span class="elu">x2 ELUSIÓN</span> <br>
			${text.status.elusion.description[1]}
			`
		]
	},
	stealthRock: {
		id: 'stealthRock',
		upgrade: false, 
		name: ['Stealth Rock', 'Trampa rocas'],
		able: true,
		cost: { value: 2, type: 'mp'},
		cd: [0, 6],
		status: {
			data: statusData['erosion'],
			type: 'erosion',
			target: 'foe',
			value: 3,
		},
		type: 'status',
		eludible: true,
		description: [
			`Apply <span class="ero">x3 EROSION</span><br>
			${text.status.erosion.description[0]}`,
			`
			Aplica <span class="ero">x3 EROSIÓN</span><br>
			${text.status.erosion.description[1]}
			`
		]
	},
	spikes: {
		id: 'spikes',
		upgrade: false, 
		name: ['Spikes', 'Púas'],
		able: true,
		cost: { value: 2, type: 'mp'},
		cd: [0, 10],
		status: {
			data: statusData['frailty'],
			type: 'frailty',
			target: 'foe',
			value: 2,
		},
		type: 'status',
		eludible: true,
		description: [
			`Apply <span class="fra">x2 FRAILTY</span><br>
			${text.status.frailty.description[0]}`,
			`
			Aplica <span class="fra">x2 FLAQUEZA</span><br>
			${text.status.frailty.description[1]}
			`
		]
	},
	charge: {
		id: 'charge',
		upgrade: false, 
		name: ['Charge', 'Carga'],
		able: true,
		cost: { value: 1, type: 'mp'},
		uses: [1, 1],
		status: {
			data: statusData['charge'],
			type: 'charge',
			target: 'user',
			value: 3,
		},
		type: 'status',
		eludible: false,
		description: [
			`Gain <span class="cha">x3 CHARGE</span><br>
			${text.status.charge.description[0]}`,
			`
			Gana <span class="cha">x3 CARGA</span><br>
			${text.status.charge.description[1]}
			`
		],
	},
	aquaRing: {
		id: 'aquaRing',
		upgrade: false, 
		name: ['Aqua Ring', 'Acua Aro'],
		able: true,
		cost: { value: 2, type: 'mp'},
		cd: [0, 5],
		status: {
			data: statusData['restoration'],
			type: 'restoration',
			target: 'user',
			value: 3,
		},
		type: 'status',
		eludible: false,
		description: [
			`apply <span class="hea">x3 RESTORATION</span><br>
			${text.status.restoration.description[0]}`,
			`
			Aplica <span class="hea">x3 RESTAURACIÓN</span><br>
			${text.status.restoration.description[1]}
			`
		],
	},
	rainDance: {
		id: 'rainDance',
		upgrade: false, 
		name: ['Rain Dance', 'Danza Lluvia'],
		able: true,
		cost: { value: 2, type: 'ap' },
		cd: [0, 6],
		heal: {
			spa: 0.2,
		},
		status: {
			data: statusData['wet'],
			type: 'wet',
			target: 'user',
			value: 3,
		},
		type: 'status',
		eludible: false,
		description: [
			`<span class="spa">(20%<img src="./assets/images/icons/spa.png" class="icon">)</span> and
			gain <span class="wet">x3 WET</span> <br>
			${text.status.wet.description[0]}`,
			`
			<span class="spa">(20%<img src="./assets/images/icons/spa.png" class="icon">)</span> y
			gana <span class="wet">x3 HUMEDAD</span> <br>
			${text.status.wet.description[1]}
			`
		],
		color: 'spa'
	},
	rest: {
		id: 'rest',
		upgrade: false, 
		name: ['Rest', 'Descanso'],
		able: true,
		cost: { value: 6, type: 'ap'},
		cd: [0, 10],
		heal: {
			hp: 0.3,
		},
		type: 'status',
		eludible: false,
		description: [
			`<span class="hp">(30%<img src="./assets/images/icons/hp.png" class="icon">)</span>`,
			`
			<span class="hp">(30%<img src="./assets/images/icons/hp.png" class="icon">)</span>
			`
		],
		color: 'hp'
	},
	roost: {
		id: 'roost',
		upgrade: false, 
		name: ['Roost', 'Respiro'],
		able: true,
		cost: { value: 1, type: 'mp'},
		cd: [0, 3],
		heal: {
			hp: 0.1,
			spe: 0.1
		},
		type: 'status',
		eludible: false,
		description: [
			`<span class="mix">(<span class="hp">10%<img src="./assets/images/icons/hp.png" class="icon"></span>+
			<span class="spe">10%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>`,
			`<span class="mix">(<span class="hp">10%<img src="./assets/images/icons/hp.png" class="icon"></span>+
			<span class="spe">10%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>`		
		],
		color: 'mix'
	},
	smog: {
		id: 'smog',
		upgrade: false, 
		name: ['Smog', 'Polución'],
		able: true,
		cost: { value: 3, type: 'mp'},
		uses: [1, 1],
		type: 'status',
		status: {
			data: statusData['poison'],
			type: 'poison',
			target: 'foe',
			value: 10,
		},
		eludible: true,
		description: [
			`Apply <span class="poi">x10 POISON</span> <br>
			${text.status.poison.description[0]}`,
			`
			Aplica <span class="poi">x10 VENENO</span> <br>
			${text.status.poison.description[1]}
			`
		],
	},
	purify: {
		id: 'purify',
		upgrade: false, 
		name: ['Purify', 'Purificación'],
		able: true,
		cost: { value: 1, type: 'mp'},
		cd: [0, 10],
		effect: {
			type: 'purify',
			target: 'user',
		},
		type: 'status',
		eludible: false,
		description: [
			`Remove the <span class="poi">POISON</span> from the target and restore <img src="./assets/images/icons/hp.png" class="icon"></span> 
			equal to <span class="poi">POISON</span> removed`,
			`Retira el <span class="poi">VENENO</span> del objetivo y recupera <img src="./assets/images/icons/hp.png" class="icon"></span> 
			igual al <span class="poi">VENENO</span> retirado`
		]
	},
	toxic: {
		id: 'toxic',
		upgrade: false, 
		name: ['Toxic', 'Tóxico'],
		able: true,
		cost: { value: 4, type: 'mp'},
		cd: [0, 5],
		effect: {
			type: 'toxic',
			target: 'foe',
		},
		type: 'status',
		eludible: true,
		description: [
			`
			Duplicates <span class="poi">POISON</span> of the target
			`,
			`
			Duplica el <span class="poi">VENENO</span> del objetivo
			`
		]
	},
	ingrain: {
		id: 'ingrain',
		upgrade: false, 
		name: ['Ingrain', 'Arraigo'],
		able: true,
		cost: { value: 1, type: 'mp'},
		cd: [0, 2],
		status: {
			data: statusData['restoration'],
			type: 'restoration',
			target: 'user',
			value: 3,
		},
		type: 'status',
		eludible: false,
		description: [
			`apply <span class="hea">x3 RESTORATION</span><br>
			${text.status.restoration.description[0]}`,
			`
			Aplica <span class="hea">x3 RESTAURACIÓN</span><br>
			${text.status.restoration.description[1]}
			`
		],
	},
	// GENERAL
	thunderShock: {
		id: 'thunderShock',
		upgrade: false, 
		name: ['Thunder Shock', 'Impactrueno'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 0.95,
		},
		status: {
			data: statusData['charge'],
			type: 'charge',
			target: 'user',
			value: 1,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(95%<img src="./assets/images/icons/spa.png" class="icon">)</span> and gain <span class="cha">x1 CHARGE</span><br>
			${text.status.charge.description[0]}`,
			`
			<span class="spa">(95%<img src="./assets/images/icons/spa.png" class="icon">)</span> y gana <span class="cha">x1 CARGA</span><br>
			${text.status.charge.description[1]}
			`
		],
		color: 'spa'
	},
	zippyZap: {
		id: 'zippyZap',
		upgrade: false, 
		name: ['Zippy Zap', 'Pikaturbo'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			spe: 0.9,
		},
		status: {
			data: statusData['charge'],
			type: 'charge',
			target: 'user',
			value: 3,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spe">(90%<img src="./assets/images/icons/spe.png" class="icon">)</span> and gain <span class="cha">x3 CHARGE</span><br>
			${text.status.charge.description[0]}`,
			`
			<span class="spe">(90%<img src="./assets/images/icons/spe.png" class="icon">)</span> y gana <span class="cha">x3 CARGA</span><br>
			${text.status.charge.description[1]}
			`
		],
		color: 'spe'
	},
	feint: {
		id: 'feint',
		upgrade: false, 
		name: ['Feint', 'Amago'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			spe: 0.6,
		},
		effect: {
			type: 'changeAP',
			target: 'user',
			value: [1]
		},
		type: 'damage',
		eludible: false,
		description: [
			`
			<span class="spe">(60%<img src="./assets/images/icons/spe.png" class="icon">)</span>, gain <span class="ap">1<img src="./assets/images/icons/ap.png" class="icon"></span>
			and can't be dodged
			`,
			`
			<span class="spe">(60%<img src="./assets/images/icons/spe.png" class="icon">)</span>, gana <span class="ap">1<img src="./assets/images/icons/ap.png" class="icon"></span>
			y no puede esquivarse
			`
		],
		color: 'spe'
	},
	headbutt: {
		id: 'headbutt',
		upgrade: false, 
		name: ['Headbutt', 'Cabezazo'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1.4,
			res: 0.8,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">140%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="res">80%<img src="./assets/images/icons/res.png" class="icon"></span>)</span>`,
			`<span class="mix">(<span class="atk">140%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="res">80%<img src="./assets/images/icons/res.png" class="icon"></span>)</span>`
		],
		color: 'mix'
	},
	nuzzle: {
		id: 'nuzzle',
		upgrade: false, 
		name: ['Nuzzle', 'Mof. Estático'],
		able: true,
		cost: { value: 1, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 0.3,
		},
		status: {
			data: statusData['charge'],
			type: 'charge',
			target: 'user',
			value: 1,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(30%<img src="./assets/images/icons/atk.png" class="icon">)</span> and gain <span class="cha">x1 CHARGE</span><br>
			${text.status.charge.description[0]}`,
			`
			<span class="atk">(30%<img src="./assets/images/icons/atk.png" class="icon">)</span> y gana <span class="cha">x1 CARGA</span><br>
			${text.status.charge.description[1]}
			`
		],
		color: 'atk'
	},
	thunderbolt : {
		id: 'thunderbolt',
		upgrade: false, 
		name: ['Thunderbolt', 'Rayo'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 1.35,
		},
		status: {
			data: statusData['charge'],
			type: 'charge',
			target: 'user',
			value: 2,
		},
		type: 'damage',
		eludible: true,
		description: [
			`
			<span class="spa">(135%<img src="./assets/images/icons/spa.png" class="icon">)</span> and gain <span class="cha">x2 CHARGE</span><br>
			${text.status.charge.description[0]}
			`,
			`
			<span class="spa">(135%<img src="./assets/images/icons/spa.png" class="icon">)</span> y gana <span class="cha">x2 CARGA</span><br>
			${text.status.charge.description[1]}
			`
		],
		color: 'spa'
	},
	thunder: {
		id: 'thunder',
		upgrade: false, 
		name: ['Thunder', 'Trueno'],
		able: true,
		cost: { value: 6, type: 'ap'},
		cd: [0, 3],
		power: {
			spa: 2.65,
		},
		status: {
			data: statusData['charge'],
			type: 'charge',
			target: 'user',
			value: 5,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(265%<img src="./assets/images/icons/spa.png" class="icon">)</span> and gain <span class="cha">x5 CHARGE</span><br>
			${text.status.charge.description[0]}`,
			`
			<span class="spa">(265%<img src="./assets/images/icons/spa.png" class="icon">)</span> y gana <span class="cha">x5 CARGA</span><br>
			${text.status.charge.description[1]}
			`
		],
		color: 'spa'
	},
	electroBall: {
		id: 'electroBall',
		upgrade: false, 
		name: ['Electro Ball', 'Bola voltio'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [3, 3],
		power: {
			spa: 0.55,
			spe: 0.55,
		},
		status: {
			data: statusData['charge'],
			type: 'charge',
			target: 'user',
			value: 1,
		},
		type: 'damage',
		eludible: true,
		description: [
			`
			<span class="mix">(<span class="spa">55%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">55%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			and gain <span class="cha">x1 CHARGE</span><br>
			${text.status.charge.description[0]}
			`,
			`
			<span class="mix">(<span class="spa">55%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">55%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			y gana <span class="cha">x1 CARGA</span><br>
			${text.status.charge.description[1]}
			`
		],
		color: 'mix'
	},
	electroweb: {
		id: 'electroweb',
		upgrade: false, 
		name: ['Electroweb', 'Electrotela'],
		able: true,
		cost: { value: 1, type: 'ap'},
		uses: [1, 1],
		power: {
			spe: 0.5
		},
		effect: {
			type: 'boost',
			target: 'foe',
			value: {
				spe: [-3]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spe">(50%<img src="./assets/images/icons/spe.png" class="icon">)</span> and 
			reduce <span class="spe">-3<img src="./assets/images/icons/spe.png" class="icon"></span>`,
			`
			<span class="spe">(50%<img src="./assets/images/icons/spe.png" class="icon">)</span> y 
			reduce <span class="spe">-3<img src="./assets/images/icons/spe.png" class="icon"></span>
			`
		],
		color: 'spe'
	},
	voltTackle: {
		id: 'voltTackle',
		upgrade: false, 
		name: ['Volt Tackle', 'Plac. Eléctrico'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1.25,
		},
		status: {
			data: statusData['charge'],
			type: 'charge',
			target: 'user',
			value: 2,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(125%<img src="./assets/images/icons/atk.png" class="icon">)</span> and gain <span class="cha">x2 CHARGE</span><br>
			${text.status.charge.description[0]}`,
			`
			<span class="atk">(125%<img src="./assets/images/icons/atk.png" class="icon">)</span> y gana <span class="cha">x2 CARGA</span><br>
			${text.status.charge.description[1]}
			`
		],
		color: 'atk'
	},
	discharge: {
		id: 'discharge',
		upgrade: false, 
		name: ['Discharge', 'Chispazo'],
		able: true,
		cost: { value: 4, type: 'ap'},
		cd: [0, 2],
		power: {
			spa: 1.2,
		},
		booster: {
			type: 'discharge',
			target: 'user',
			value: 20
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(120%<img src="./assets/images/icons/spa.png" class="icon">)</span> and consumes all <span class="cha">CHARGES</span> 
			to increase it power by <span class="spa">20%</span> for each <span class="cha">CHARGE</span><br>`,
			`
			<span class="spa">(120%<img src="./assets/images/icons/spa.png" class="icon">)</span> y consume todas las <span class="cha">CARGAS</span> 
			para aumentar su daño un <span class="spa">20%</span> por cada <span class="cha">CARGA</span><br>
			`
		],
		color: 'spa'
	},
	voltSwitch: {
		id: 'voltSwitch',
		upgrade: false, 
		name: ['Volt Switch', 'Voltiocambio'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 0.9,
			spe: 0.3,
		},
		status: {
			data: statusData['charge'],
			type: 'charge',
			target: 'user',
			value: 3,
		},
		type: 'damage',
		eludible: true,
		description: [
			`
			<span class="mix">(<span class="spa">90%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">30%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			and gain <span class="cha">x3 CHARGE</span><br>
			${text.status.charge.description[0]}
				`,
			`
			<span class="mix">(<span class="spa">90%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">30%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			y gana <span class="cha">x3 CARGA</span><br>
			${text.status.charge.description[1]}
			`
		],
		color: 'mix'
	},
	risingVoltage: {
		id: 'risingVoltage',
		upgrade: false, 
		name: ['Rising Voltage', 'Alto Voltaje'],
		able: true,
		cost: { value: 4, type: 'ap'},
		cd: [0, 2],
		power: {
			spa: 1.15,
		},
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				spa: [8]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(115%<img src="./assets/images/icons/spa.png" class="icon">)</span> 
			and increase <span class="spa">+8<img src="./assets/images/icons/spa.png" class="icon"></span>`,
			`
			<span class="spa">(115%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y aumenta <span class="spa">+8<img src="./assets/images/icons/spa.png" class="icon"></span>
			`
		],
		color: 'spa'
	},
	chargeBeam: {
		id: 'chargeBeam',
		upgrade: false, 
		name: ['Charge Beam', 'Rayo Carga'],
		able: true,
		cost: { value: 1, type: 'ap'},
		uses: [3, 3],
		power: {
			spa: 0.2,
		},
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				spa: [3],
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(20%<img src="./assets/images/icons/spa.png" class="icon">)</span> 
			and increase <span class="spa">+3<img src="./assets/images/icons/spa.png" class="icon"></span>`,
			`
			<span class="spa">(20%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y aumenta <span class="spa">+3<img src="./assets/images/icons/spa.png" class="icon"></span>
			`
		],
		color: 'spa'
	},
	thunderPunch: {
		id: 'thunderPunch',
		upgrade: false, 
		name: ['Thunder Punch', 'Puño Trueno'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1.35
		},
		status: {
			data: statusData['charge'],
			type: 'charge',
			target: 'user',
			value: 1,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(135%<img src="./assets/images/icons/atk.png" class="icon">)</span> and gain <span class="cha">x1 CHARGE</span><br>
			${text.status.charge.description[0]}`,
			`
			<span class="atk">(135%<img src="./assets/images/icons/atk.png" class="icon">)</span> y gana <span class="cha">x1 CARGA</span><br>
			${text.status.charge.description[1]}
			`
		],
		color: 'atk'
	},
	firePunch: {
		id: 'firePunch',
		upgrade: false, 
		name: ['Fire Punch', 'Puño Fuego'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1.15
		},
		status: {
			data: statusData['burn'],
			type: 'burn',
			target: 'foe',
			value: 2,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(115%<img src="./assets/images/icons/atk.png" class="icon">)</span> and apply <span class="bur">x2 BURN</span><br>
			${text.status.burn.description[0]}`,
			`
			<span class="atk">(115%<img src="./assets/images/icons/atk.png" class="icon">)</span> y aplica <span class="bur">x2 QUEMADURA</span><br>
			${text.status.burn.description[1]}
			`
		],
		color: 'atk'
	},
	boneClub: {
		id: 'boneClub',
		upgrade: false, 
		name: ['Bone Club', 'Hueso Palo'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1.2,
		},
		status: {
			data: statusData['erosion'],
			type: 'erosion',
			target: 'foe',
			value: 1,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(120%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			and apply <span class="ero">x1 EROSION</span> <br>
			${text.status.erosion.description[0]}`,
			`
			<span class="atk">(120%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			y aplica <span class="ero">x1 EROSIÓN</span> <br>
			${text.status.erosion.description[1]}
			`
		],
		color: 'atk'
	},
	boneRush: {
		id: 'boneRush',
		upgrade: false, 
		name: ['Bone Rush', 'Ataque Óseo'],
		able: true,
		cost: { value: 2, type: 'ap'},
		uses: [4, 4],
		power: {
			atk: 0.4,
		},
		status: {
			data: statusData['erosion'],
			type: 'erosion',
			target: 'foe',
			value: 1,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(40%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			and apply <span class="ero">x1 EROSION</span><br>
			${text.status.erosion.description[0]}`,
			`
			<span class="atk">(40%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			y aplica <span class="ero">x1 EROSIÓN</span><br>
			${text.status.erosion.description[1]}
			`
		],
		color: 'atk'
	},
	bonemerang: {
		id: 'bonemerang',
		upgrade: false, 
		name: ['Bonemerang', 'Huesomerang'],
		able: true,
		cost: { value: 4, type: 'ap'},
		cd: [0, 3],
		power: {
			atk: 1.6,
		},
		status: {
			data: statusData['erosion'],
			type: 'erosion',
			target: 'foe',
			value: 2,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(160%<img src="./assets/images/icons/atk.png" class="icon">)</span> and apply <span class="ero">x2 EROSION</span> <br>
			${text.status.erosion.description[0]}`,
			`
			<span class="atk">(160%<img src="./assets/images/icons/atk.png" class="icon">)</span> y aplica <span class="ero">x2 EROSIÓN</span> <br>
			${text.status.erosion.description[1]}
			`
		],
		color: 'atk'
	},
	shadowBone: {
		id: 'shadowBone',
		upgrade: false, 
		name: ['Shadow Bone', 'Hueso Sombrío'],
		able: true,
		cost: { value: 1, type: 'mp'},
		uses: [1, 1],
		power: {
			atk: 0.3,
			spa: 0.3,
		},
		status: {
			data: statusData['erosion'],
			type: 'erosion',
			target: 'foe',
			value: 1,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">30%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">30%<img src="./assets/images/icons/spa.png" class="icon"></span>)</span>
			and apply <span class="ero">x1 EROSION</span> <br>
			${text.status.erosion.description[0]}`,
			`
			<span class="mix">(<span class="atk">30%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">30%<img src="./assets/images/icons/spa.png" class="icon"></span>)</span>
			y aplica <span class="ero">x1 EROSIÓN</span> <br>
			${text.status.erosion.description[1]}
			`
		],
		color: 'mix'
	},
	dig: {
		id: 'dig',
		upgrade: false, 
		name: ['Dig', 'Excavar'],
		able: true,
		cost: { value: 4, type: 'ap'},
		cd: [0, 6],
		power: {
			atk: 0.65,
		},
		status: {
			data: statusData['elusion'],
			type: 'elusion',
			target: 'user',
			value: 1,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(<span class="atk">65%<img src="./assets/images/icons/atk.png" class="icon"></span>)</span>
			and apply <span class="elu">x1 ELUSION</span> <br>
			${text.status.elusion.description[0]}`,
			`	
			<span class="atk">(<span class="atk">65%<img src="./assets/images/icons/atk.png" class="icon"></span>)</span>
			y aplica <span class="elu">x1 ELUSIÓN</span> <br>
			${text.status.elusion.description[1]}
			`
		],
		color: 'atk'
	},
	mudSlap: {
		id: 'mudSlap',
		upgrade: false, 
		name: ['Mud Slap', 'Bofetón lodo'],
		able: true,
		cost: { value: 2, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 0.55,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(55%<img src="./assets/images/icons/spa.png" class="icon">)</span>`,
			`
			<span class="spa">(55%<img src="./assets/images/icons/spa.png" class="icon">)</span>  
			`
		],
		color: 'spa'
	},
	ironHead: {
		id: 'ironHead',
		upgrade: false, 
		name: ['Iron Head', 'Cabeza Hierro'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			res: 2.5,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="res">(250%<img src="./assets/images/icons/res.png" class="icon">)</span>`,
			`
			<span class="res">(250%<img src="./assets/images/icons/res.png" class="icon">)</span>  
			`
		],
		color: 'res'
	},
	rockClimb: {
		id: 'rockClimb',
		upgrade: false, 
		name: ['Rock Climb', 'Treparocas'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 0.9,
			spe: 0.3
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">90%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">30%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>`,
			`
			<span class="mix">(<span class="atk">90%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">30%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			`
		],
		color: 'mix'
	},
	sandTomb: {
		id: 'sandTomb',
		upgrade: false, 
		name: ['Sand Tomb', 'Bucle Arena'],
		able: true,
		cost: { value: 1, type: 'ap'},
		uses: [5, 5],
		power: {
			atk: 0.15,
			spe: 0.15
		},
		effect: {
			type: 'boost',
			target: 'foe',
			value: {
				res: [-2]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">15%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">15%<img src="./assets/images/icons/spa.png" class="icon"></span>)</span> and
			reduce <span class="res">-2%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`
			<span class="mix">(<span class="atk">15%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">15%<img src="./assets/images/icons/spa.png" class="icon"></span>)</span> y 
			reduce <span class="res">-2%<img src="./assets/images/icons/res.png" class="icon"></span>
			`
		],
		color: 'mix'
	},
	ironTail: {
		id: 'ironTail',
		upgrade: false, 
		name: ['Iron Tail', 'Cola Férrea'],
		able: true,
		cost: { value: 5, type: 'ap'},
		uses: [1, 1],
		power: {
			atk: 0.8,
			res: 1.5
		},
		effect: {
			type: 'boost',
			target: 'foe',
			value: {
				res: [-10]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">80%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="res">150%<img src="./assets/images/icons/res.png" class="icon"></span>)</span> and 
			reduce <span class="res">-10%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`
			<span class="mix">(<span class="atk">80%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="res">150%<img src="./assets/images/icons/res.png" class="icon"></span>)</span> y 
			reduce <span class="res">-10%<img src="./assets/images/icons/res.png" class="icon"></span>
			`
		],
		color: 'mix'
	},
	bulldoze: {
		id: 'bulldoze',
		upgrade: false, 
		name: ['Bulldoze', 'Terratemblor'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [1, 1],
		power: {
			atk: 1.45
		},
		effect: {
			type: 'boost',
			target: 'foe',
			value: {
				spe: [-5]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(145%<img src="./assets/images/icons/atk.png" class="icon">)</span> and 
			reduce <span class="spe">-5<img src="./assets/images/icons/spe.png" class="icon"></span>`,
			`
			<span class="atk">(145%<img src="./assets/images/icons/atk.png" class="icon">)</span> y 
			reduce <span class="spe">-5<img src="./assets/images/icons/spe.png" class="icon"></span>
			`
		],
		color: 'atk'
	},
	scorchingSands: {
		id: 'scorchingSands',
		upgrade: false, 
		name: ['Scorching Sands', 'Arns. Ardientes'],
		able: true,
		cost: { value: 5, type: 'ap'},
		cd: [0, 6],
		power: {
			spa: 2.1
		},
		status: {
			data: statusData['burn'],
			type: 'burn',
			target: 'foe',
			value: 3,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(210%<img src="./assets/images/icons/spa.png" class="icon">)</span> and apply <span class="bur">x3 BURN</span><br>
			${text.status.burn.description[0]}`,
			`
			<span class="spa">(210%<img src="./assets/images/icons/spa.png" class="icon">)</span> y aplica <span class="bur">x3 QUEMADURA</span><br>
			${text.status.burn.description[1]}
			`
		],
		color: 'spa'
	},
	thief: {
		id: 'thief',
		upgrade: false, 
		name: ['Thief', 'Ladrón'],
		able: true,
		cost: { value: 1, type: 'mp'},
		uses: [2, 2],
		power: {
			spe: 0.3,
		},
		effect: {
			type: 'earnGold',
			target: 'user',
			value: {
				min: 1,
				max: 3
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spe">(30%<img src="./assets/images/icons/spe.png" class="icon">)</span> and increase <span class="yellow">1-3 gold</span>.`,
			`<span class="spe">(30%<img src="./assets/images/icons/spe.png" class="icon">)</span> y genera <span class="yellow">1-3 oro</span>`
		],
		color: 'spe'
	},
	furyCutter: {
		id: 'furyCutter',
		upgrade: false, 
		name: ['Fury Cutter', 'Corte Furia'],
		able: true,
		cost: { value: 2, type: 'ap'},
		uses: [5, 5],
		power: {
			atk: 0.2,
		},
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				atk: [1, 2, 3]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(20%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			and increase <img src="./assets/images/icons/atk.png" class="icon"> between <span class="atk">+1</span> and <span class="atk">+3</span>`,
			`
			<span class="atk">(20%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			y gana <img src="./assets/images/icons/atk.png" class="icon"> entre <span class="atk">+1</span> y <span class="atk">+3</span>
			`
		],
		color: 'atk'
	},
	wingAttack: {
		id: 'wingAttack',
		upgrade: false, 
		name: ['Wing Attack', 'Ataque Ala'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1.35,
			spe: 0.1
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">135%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">10%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>`,
			`
			<span class="mix">(<span class="atk">135%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">10%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			`
		],
		color: 'mix'
	},
	steelWing: {
		id: 'steelWing',
		upgrade: false, 
		name: ['Steel Wing', 'Ala Acero'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1,
			res: 1
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">100%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="res">100%<img src="./assets/images/icons/res.png" class="icon"></span>)</span>`,
			`
			<span class="mix">(<span class="atk">100%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="res">100%<img src="./assets/images/icons/res.png" class="icon"></span>)</span>
			`
		],
		color: 'mix'
	},
	slash: {
		id: 'slash',
		upgrade: false, 
		name: ['Slash', 'Cuchillada'],
		able: true,
		cost: { value: 3, type: 'ap'},
		cd: [0, 2],
		power: {
			atk: 1.15,
		},
		effect: {
			type: 'boost',
			target: 'user',
			condition: 'critical',
			value: {
				atk: [5]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(115%<img src="./assets/images/icons/atk.png" class="icon">)</span> <br>
			<span class="crt">Critical:</span> Increase <span class="atk">+5<img src="./assets/images/icons/atk.png" class="icon"></span>`,
			`
			<span class="atk">(115%<img src="./assets/images/icons/atk.png" class="icon">)</span> <br>
			<span class="crt">Crítico:</span> Aumenta <span class="atk">+5<img src="./assets/images/icons/atk.png" class="icon"></span>
			`
		],
		color: 'atk'
	},
	airSlash: {
		id: 'airSlash',
		upgrade: false, 
		name: ['Air Slash', 'Tajo Aéreo'],
		able: true,
		cost: { value: 5, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 1.75,
			spe: 0.8
		},
		type: 'damage',
		eludible: false,
		description: [
			`<span class="mix">(<span class="spa">175%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">80%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> and can't be dodged`,
			`
			<span class="mix">(<span class="spa">175%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">80%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> y no puede esquivarse
			`
		],
		color: 'mix'
	},
	xScissor: {
		id: 'xScissor',
		upgrade: false, 
		name: ['X Scissor', 'Tijera X'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1.3,
		},
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				crt: [4]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(130%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			and increase <span class="crt">+4%<img src="./assets/images/icons/crt.png" class="icon"></span>`,
			`<span class="atk">(130%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			y gana <span class="crt">+4%<img src="./assets/images/icons/crt.png" class="icon"></span>`
		],
		color: 'atk'
	},
	trailblaze: {
		id: 'trailblaze',
		upgrade: false, 
		name: ['Trailblaze', 'Abrecaminos'],
		able: true,
		cost: { value: 3, type: 'ap'},
		cd: [0, 2],
		power: {
			atk: 0.3,
			spe: 1
		},
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				spe: [5]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">30%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">100%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> and 
			increase <span class="spe">+5<img src="./assets/images/icons/spe.png" class="icon"></span>`,
			`	
			<span class="mix">(<span class="atk">30%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">100%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> y 
			gana <span class="spe">+5<img src="./assets/images/icons/spe.png" class="icon"></span>
			`
		],
		color: 'mix'
	},
	uTurn: {
		id: 'uTurn',
		upgrade: false, 
		name: ['U Turn', 'Ida y Vuelta'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			spe: 1.1,
		},
		effect: {
			type: 'changeMP',
			target: 'user',
			value: [1]
		},
		type: 'damage',
		eludible: false,
		description: [
			`<span class="spe">(110%<img src="./assets/images/icons/spe.png" class="icon">)</span> 
			and increase <span class="mp">1<img src="./assets/images/icons/mp.png" class="icon"></span>`,
			`
			<span class="spe">(110%<img src="./assets/images/icons/spe.png" class="icon">)</span> 
			y gana <span class="mp">1<img src="./assets/images/icons/mp.png" class="icon"></span>
			`
		],
		color: 'spe'
	},
	pounce: {
		id: 'pounce',
		upgrade: false, 
		name: ['Pounce', 'Brinco'],
		able: true,
		cost: { value: 3, type: 'ap'},
		cd: [0, 4],
		power: {
			atk: 0.3,
			spe: 0.3
		},
		status: {
			data: statusData['elusion'],
			type: 'elusion',
			target: 'user',
			value: 1,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">30%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">30%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> and 
			increase <span class="elu">x1 ELUSION</span> <br>
			${text.status.elusion.description[0]}`,
			`	
			<span class="mix">(<span class="atk">30%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">30%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> y 
			gana <span class="elu">x1 ELUSIÓN</span> <br>
			${text.status.elusion.description[1]}
			`
		],
		color: 'mix'
	},
	bounce: {
		id: 'bounce',
		upgrade: false, 
		name: ['Bounce', 'Bote'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [3, 3],
		power: {
			atk: 0.25,
			spe: 0.95
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">25%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">95%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>`,
			`	
			<span class="mix">(<span class="atk">25%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">95%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			`
		],
		color: 'mix'
	},
	dualWingbeat: {
		id: 'dualWingbeat',
		upgrade: false, 
		name: ['Dual Wingbeat', 'Ala Bis'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 0.4,
			spe: 0.4
		},
		effect: {
			type: 'boost',
			target: 'user',
			condition: 'critical',
			value: {
				atk: [3],
				spe: [3]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`
			<span class="mix">(<span class="atk">40%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">40%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span><br>
			<span class="crt">Critical:</span> Increase <span class="atk">+3<img src="./assets/images/icons/atk.png" class="icon"></span> and 
			<span class="spe">+3<img src="./assets/images/icons/spe.png" class="icon"></span>
			`,
			`
			<span class="mix">(<span class="atk">40%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">40%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span><br>
			<span class="crt">Crítico:</span> Aumenta <span class="atk">+3<img src="./assets/images/icons/atk.png" class="icon"></span> y 
			<span class="spe">+3<img src="./assets/images/icons/spe.png" class="icon"></span>
			`
		],
		color: 'mix'
	},
	lunge: {
		id: 'lunge',
		upgrade: false, 
		name: ['Lunge', 'Plancha'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 0.8,
		},
		effect: {
			type: 'boost',
			target: 'foe',
			value: {
				res: [-5]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(80%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			and reduce <span class="res">-5%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`<span class="atk">(80%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			y reduce <span class="res">-5%<img src="./assets/images/icons/res.png" class="icon"></span>
			`
		],
		color: 'atk'
	},
	bugBuzz: {
		id: 'bugBuzz',
		upgrade: false, 
		name: ['Bug Buzz', 'Zumbido'],
		able: true,
		cost: { value: 4, type: 'ap'},
		cd: [0, 3],
		power: {
			spa: 1.6,
		},
		effect: {
			type: 'boost',
			target: 'foe',
			value: {
				res: [-5]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(160%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and reduce <span class="res">-5%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`<span class="spa">(160%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y reduce <span class="res">-5%<img src="./assets/images/icons/res.png" class="icon"></span>
			`
		],
		color: 'spa'
	},
	bulletPunch: {
		id: 'bulletPunch',
		upgrade: false, 
		name: ['Bullet Punch', 'Puño Bala'],
		able: true,
		cost: { value: 1, type: 'ap'},
		uses: [4, 4],
		power: {
			atk: 0.45,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(45%<img src="./assets/images/icons/atk.png" class="icon">)</span>`,
			`<span class="atk">(45%<img src="./assets/images/icons/atk.png" class="icon">)</span>`
		],
		color: 'atk'
	},
	metalClaw: {
		id: 'metalClaw',
		upgrade: false, 
		name: ['Metal Claw', 'Garra Metal'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1.4,
		},
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				atk: [3]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(140%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			and increase <span class="atk">+3<img src="./assets/images/icons/atk.png" class="icon"></span>`,
			`
			<span class="atk">(140%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			y gana <span class="atk">+3<img src="./assets/images/icons/atk.png" class="icon"></span>
			`
		],
		color: 'atk'
	},
	airCutter: {
		id: 'airCutter',
		upgrade: false, 
		name: ['Air Cutter', 'Aire Afilado'],
		able: true,
		cost: { value: 2, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 0.8,
		},
		effect: {
			type: 'changeAP',
			target: 'user',
			condition: 'critical',
			value: [1]
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(80%<img src="./assets/images/icons/spa.png" class="icon">)</span><br>
			<span class="crt">Critical:</span> Gain <span class="ap">1<img src="./assets/images/icons/ap.png" class="icon"></span>`,
			`<span class="spa">(80%<img src="./assets/images/icons/spa.png" class="icon">)</span><br>
			<span class="crt">Crítico:</span> Gana <span class="ap">1<img src="./assets/images/icons/ap.png" class="icon"></span>`
		],
		color: 'spa'
	},
	waterGun: {
		id: 'waterGun',
		upgrade: false, 
		name: ['Water Gun', 'Pistola Agua'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 0.9,
		},
		status: {
			data: statusData['wet'],
			type: 'wet',
			target: 'user',
			value: 1,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(90%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and gain <span class="wet">x1 WET</span><br>
			${text.status.wet.description[0]}`,
			`<span class="spa">(90%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y gana <span class="wet">x1 HUMEDAD</span><br>
			${text.status.wet.description[1]}`
		],
		color: 'spa'
	},
	bubble: {
		id: 'bubble',
		upgrade: false, 
		name: ['Bubble', 'Burbuja'],
		able: true,
		cost: { value: 2, type: 'ap'},
		uses: [3, 3],
		power: {
			spa: 0.65,
		},
		effect: {
			type: 'boost',
			target: 'foe',
			value: {
				spe: [-2]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`
			<span class="spa">(65%<img src="./assets/images/icons/spa.png" class="icon">)</span> 
 			and reduce <span class="spe">-2<img src="./assets/images/icons/spe.png" class="icon"></span>	
			`,
			`
			<span class="spa">(65%<img src="./assets/images/icons/spa.png" class="icon">)</span> 
 			y reduce <span class="spe">-2<img src="./assets/images/icons/spe.png" class="icon"></span>
			`
		],
		color: 'spa'
	},
	aquaTail: {
		id: 'aquaTail',
		upgrade: false, 
		name: ['Aqua Tail', 'Acua Cola'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [1, 1],
		power: {
			atk: 1.4,
		},
		status: {
			data: statusData['wet'],
			type: 'wet',
			target: 'user',
			value: 2,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(140%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			and gain <span class="wet">x2 WET</span><br>
			${text.status.wet.description[0]}`,
			`<span class="atk">(140%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			y gana <span class="wet">x2 HUMEDAD</span><br>
			${text.status.wet.description[1]}`
		],
		color: 'atk'
	},
	iceBeam: {
		id: 'iceBeam',
		upgrade: false, 
		name: ['Ice Beam', 'Rayo Hielo'],
		able: true,
		cost: { value: 4, type: 'ap'},
		cd: [0, 4],
		power: {
			spa: 2.1,
		},
		status: {
			data: statusData['wet'],
			type: 'wet',
			target: 'user',
			value: 4,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(210%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and gain <span class="wet">x4 WET</span><br>
			${text.status.wet.description[0]}`,
			`<span class="spa">(210%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y gana <span class="wet">x4 HUMEDAD</span><br>
			${text.status.wet.description[1]}`
		],
		color: 'spa'
	},
	surf: {
		id: 'surf',
		upgrade: false, 
		name: ['Surf', 'Surf'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 1.3,
		},
		status: {
			data: statusData['wet'],
			type: 'wet',
			target: 'user',
			value: 3,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(130%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and gain <span class="wet">x3 WET</span><br>
			${text.status.wet.description[0]}`,
			`<span class="spa">(130%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y gana <span class="wet">x3 HUMEDAD</span><br>
			${text.status.wet.description[1]}`
		],
		color: 'spa'
	},
	playRough: {
		id: 'playRough',
		upgrade: false, 
		name: ['Play Rough', 'Carantoña'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [3, 3],
		power: {
			atk: 1.3,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(130%<img src="./assets/images/icons/atk.png" class="icon">)</span>`,
			`<span class="atk">(130%<img src="./assets/images/icons/atk.png" class="icon">)</span>`
		],
		color: 'atk'
	},
	scald: {
		id: 'scald',
		upgrade: false, 
		name: ['Scald', 'Escaldar'],
		able: true,
		cost: { value: 4, type: 'ap'},
		cd: [0, 2],
		power: {
			spa: 0.8,
		},
		status: {
			data: statusData['burn'],
			type: 'burn',
			target: 'foe',
			value: 2,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(80%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and apply <span class="bur">x2 BURN</span><br>
			${text.status.burn.description[0]}`,
			`<span class="spa">(80%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y aplica <span class="bur">x2 QUEMADURA</span><br>
			${text.status.burn.description[1]}`
		],
		color: 'spa'
	},
	drainingKiss: {
		id: 'drainingKiss',
		upgrade: false, 
		name: ['Draining Kiss', 'Beso Drenaje'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [1, 1],
		power: {
			spa: 0.4,
		},
		effect: {
			type: 'restoreHP',
			target: 'user',
			value: 1
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(40%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and heals 100% of the damage dealt`,
			`
			<span class="spa">(40%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y cura el 100% del daño causado
			`
		],
		color: 'spa'
	},
	liquidation: {
		id: 'liquidation',
		upgrade: false, 
		name: ['Liquidation', 'Hidroariete'],
		able: true,
		cost: { value: 5, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1.2,
			hp: 0.05
		},
		effect: {
			type: 'boost',
			target: 'foe',
			value: {
				res: [-5]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">120%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="hp">5%<img src="./assets/images/icons/hp.png" class="icon"></span>)</span>
			and reduce <span class="res">-5%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`<span class="mix">(<span class="atk">120%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="hp">5%<img src="./assets/images/icons/hp.png" class="icon"></span>)</span>
			y reduce <span class="res">-5%<img src="./assets/images/icons/res.png" class="icon"></span>`
		],
		color: 'mix'
	},
	icePunch: {
		id: 'icePunch',
		upgrade: false, 
		name: ['Ice Punch', 'Puño Hielo'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1.35
		},
		status: {
			data: statusData['wet'],
			type: 'wet',
			target: 'user',
			value: 2,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(135%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			and gain <span class="wet">x2 WET</span><br>
			${text.status.wet.description[0]}`,
			`
			<span class="atk">(135%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			y gana <span class="wet">x2 HUMEDAD</span><br>
			${text.status.wet.description[1]}
			`
		],
		color: 'atk'
	},
	waterfall: {
		id: 'waterfall',
		upgrade: false, 
		name: ['Waterfall', 'Cascada'],
		able: true,
		cost: { value: 3, type: 'ap'},
		cd: [0, 3],
		power: {
			atk: 0.35,
			spa: 0.35,
			spe: 0.35
		},
		status: {
			data: statusData['wet'],
			type: 'wet',
			target: 'user',
			value: 2,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">35%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">35%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">35%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> and gain <span class="wet">x2 WET</span><br>
			${text.status.wet.description[0]}`,
			`	
			<span class="mix">(<span class="atk">35%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">35%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">35%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> y gana <span class="wet">x2 HUMEDAD</span><br>
			${text.status.wet.description[1]}`
		],
		color: 'mix'
	},
	bodySlam: {
		id: 'bodySlam',
		upgrade: false, 
		name: ['Body Slam', 'Golpe Cuerpo'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [1, 1],
		power: {
			atk: 0.8,
			hp: 0.2,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">80%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="hp">20%<img src="./assets/images/icons/hp.png" class="icon"></span>)</span>`,
			`<span class="mix">(<span class="atk">80%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="hp">20%<img src="./assets/images/icons/hp.png" class="icon"></span>)</span>`
		],
		color: 'mix'
	},
	reversal: {
		id: 'reversal',
		upgrade: false, 
		name: ['Reversal', 'Inversión'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 0.2,
			hp: 0.1,
		},
		type: 'damage',

		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">20%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="hp">10%<img src="./assets/images/icons/hp.png" class="icon"></span>)</span>`,
			`<span class="mix">(<span class="atk">20%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="hp">10%<img src="./assets/images/icons/hp.png" class="icon"></span>)</span>
			`
		],
		color: 'mix'
	},
	icyWind: {
		id: 'icyWind',
		upgrade: false, 
		name: ['Icy Wind', 'Viento Hielo'],
		able: true,
		cost: { value: 2, type: 'ap'},
		uses: [3, 3],
		power: {
			spa: 0.55,
			spe: 0.2
		},
		status: {
			data: statusData['wet'],
			type: 'wet',
			target: 'user',
			value: 1,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="spa">55%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">20%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			and gain <span class="wet">x1 WET</span><br>
			${text.status.wet.description[0]}`,
			`<span class="mix">(<span class="spa">55%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">20%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			y gana <span class="wet">x1 HUMEDAD</span><br>
			${text.status.wet.description[1]}`
		],
		color: 'mix'
	},
	iceShard: {
		id: 'iceShard',
		upgrade: false, 
		name: ['Ice Shard', 'Esquirla Helada'],
		able: true,
		cost: { value: 1, type: 'mp'},
		uses: [4, 4],
		power: {
			atk: 0.2,
		},
		status: {
			data: statusData['wet'],
			type: 'wet',
			target: 'user',
			value: 1,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(20%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			and gain <span class="wet">x1 WET</span><br>
			${text.status.wet.description[0]}`,
			`<span class="atk">(20%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			y gana <span class="wet">x1 HUMEDAD</span><br>
			${text.status.wet.description[1]}`
		],
		color: 'atk'
	},
	darkPulse: {
		id: 'darkPulse',
		upgrade: false, 
		name: ['Dark Pulse', 'Pulso Umbrío'],
		able: true,
		cost: { value: 5, type: 'ap'},
		cd: [0, 3],
		power: {
			spa: 1.8,
		},
		status: {
			data: statusData['fear'],
			type: 'fear',
			target: 'foe',
			value: 3,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(180%<img src="./assets/images/icons/spa.png" class="icon">)</span> 
			and apply <span class="fea">x3 FEAR</span><br>
			${text.status.fear.description[0]}`,
			`<span class="spa">(180%<img src="./assets/images/icons/spa.png" class="icon">)</span> 
			y aplica <span class="fea">x3 MIEDO</span><br>
			${text.status.fear.description[1]}`
		],
		color: 'spa'
	},
	nightSlash: {
		id: 'nightSlash',
		upgrade: false, 
		name: ['Night Slash', 'Tajo Umbrío'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 0.7,
			spe: 0.1
		},
		status: {
			data: statusData['fear'],
			type: 'fear',
			target: 'foe',
			value: 1,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">70%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">10%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> and apply <span class="fea">x1 FEAR</span><br>
			${text.status.fear.description[0]}`,
			`<span class="mix">(<span class="atk">70%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">10%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> y aplica <span class="fea">x1 MIEDO</span><br>
			${text.status.fear.description[1]}`
		],
		color: 'mix'
	},
	direClaw: {
		id: 'direClaw',
		upgrade: false, 
		name: ['Dire Claw', 'Garra Nociva'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [1, 1],
		power: {
			atk: 0.8,
		},
		status: {
			data: statusData['poison'],
			type: 'poison',
			target: 'foe',
			value: 7,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(80%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			and apply <span class="poi">x7 POISON</span> <br>
			${text.status.poison.description[0]}`,
			`
			<span class="atk">(80%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			y aplica <span class="poi">x7 VENENO</span> <br>
			${text.status.poison.description[1]}
			`
		],
		color: 'atk'
	},
	shadowClaw: {
		id: 'shadowClaw',
		upgrade: false, 
		name: ['Shadow Claw', 'Garra Umbría'],
		able: true,
		cost: { value: 5, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 2.1,
		},
		status: {
			data: statusData['fear'],
			type: 'fear',
			target: 'foe',
			value: 3,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(210%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			and apply <span class="fea">x3 FEAR</span><br>
			${text.status.fear.description[0]}`,
			`<span class="atk">(210%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			y aplica <span class="fea">x3 MIEDO</span><br>
			${text.status.fear.description[1]}`
		],
		color: 'atk'
	},
	powerTrip: {
		id: 'powerTrip',
		upgrade: false, 
		name: ['Power Trip', 'Chulería'],
		able: true,
		cost: { value: 2, type: 'ap'},
		uses: [3, 3],
		power: {
			spe: 0.4,
		},
		effect: {
			type: 'boost',
			target: 'user',
			condition: 'critical',
			value: {
				atk: [3],
				spa: [3],
				spe: [3]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spe">(40%<img src="./assets/images/icons/spe.png" class="icon">)</span> <br>
			<span class="crt">Critical:</span> Increase <span class="atk">+3<img src="./assets/images/icons/atk.png" class="icon"></span>,
			<span class="spa">+3<img src="./assets/images/icons/spa.png" class="icon"></span> and <span class="spe">+3<img src="./assets/images/icons/spe.png" class="icon"></span>`,
			`
			<span class="spe">(40%<img src="./assets/images/icons/spe.png" class="icon">)</span> <br>
			<span class="crt">Crítico:</span> Aumenta <span class="atk">+3<img src="./assets/images/icons/atk.png" class="icon"></span>,
			<span class="spa">+3<img src="./assets/images/icons/spa.png" class="icon"></span> y <span class="spe">+3<img src="./assets/images/icons/spe.png" class="icon"></span>
			`
		],
		color: 'spe'
	},
	pluck: {
		id: 'pluck',
		upgrade: false, 
		name: ['Pluck', 'Picoteo'],
		able: true,
		cost: { value: 1, type: 'ap'},
		uses: [3, 3],
		power: {
			atk: 0.3,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(30%<img src="./assets/images/icons/atk.png" class="icon">)</span>`,
			`<span class="atk">(30%<img src="./assets/images/icons/atk.png" class="icon">)</span>`
		],
		color: 'atk'
	},	
	fly: {
		id: 'fly',
		upgrade: false, 
		name: ['Fly', 'Vuelo'],
		able: true,
		cost: { value: 3, type: 'ap'},
		cd: [0, 4],
		power: {
			atk: 0.7,
			spe: 0.4
		},
		status: {
			data: statusData['elusion'],
			type: 'elusion',
			target: 'user',
			value: 1,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">70%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">40%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> 
			and gain <span class="elu">x1 ELUSION</span> <br>
			${text.status.elusion.description[0]}`,
			`	
			<span class="mix">(<span class="atk">70%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">40%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> y 
			gana <span class="elu">x1 ELUSIÓN</span> <br>
			${text.status.elusion.description[1]}
			`
		],
		color: 'mix'
	},
	braveBird: {
		id: 'braveBird',
		upgrade: false, 
		name: ['Brave Bird', 'Pájaro Osado'],
		able: true,
		cost: { value: 4, type: 'ap'},
		cd: [0, 3],
		power: {
			atk: 1.2,
			spe: 1.2
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">120%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">120%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>`,
			`	
			<span class="mix">(<span class="atk">120%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">120%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			`
		],
		color: 'mix'
	},
	aerialAce: {
		id: 'aerialAce',
		upgrade: false, 
		name: ['Aerial Ace', 'Golpe Aéreo'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1,
			spe: 0.2
		},
		type: 'damage',
		eludible: false,
		description: [
			`<span class="mix">(<span class="atk">100%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">20%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			and can't be dodged`,
			`
			<span class="mix">(<span class="atk">100%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">20%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			y no puede esquivarse
			`
		],
		color: 'mix'
	},
	skyAttack: {
		id: 'skyAttack',
		upgrade: false, 
		name: ['Sky Attack', 'Ataque Aéreo'],
		able: true,
		cost: { value: 5, type: 'ap'},
		cd: [0, 6],
		power: {
			atk: 3.1,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(310%<img src="./assets/images/icons/atk.png" class="icon">)</span>`,
			`<span class="atk">(310%<img src="./assets/images/icons/atk.png" class="icon">)</span>`
		],
		color: 'atk'
	},
	twister: {
		id: 'twister',
		upgrade: false, 
		name: ['Twister', 'Ciclón'],
		able: true,
		cost: { value: 1, type: 'mp'},
		uses: [3, 3],
		power: {
			atk: 0.1,
			spa: 0.1,
			spe: 0.1,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">10%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">10%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">10%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>`,
			`
			<span class="mix">(<span class="atk">10%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">10%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">10%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			`
		],
		color: 'mix'
	},
	heatWave: {
		id: 'heatWave',
		upgrade: false, 
		name: ['Heat Wave', 'Onda Ígnea'],
		able: true,
		cost: { value: 3, type: 'mp'},
		uses: [1, 1],
		power: {
			spa: 1.5
		},
		status: {
			data: statusData['burn'],
			type: 'burn',
			target: 'foe',
			value: 3,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(150%<img src="./assets/images/icons/spa.png" class="icon">)</span> and apply <span class="bur">x3 BURN</span><br>
			${text.status.burn.description[0]}`,
			`
			<span class="spa">(150%<img src="./assets/images/icons/spa.png" class="icon">)</span> y aplica <span class="bur">x3 QUEMADURA</span><br>
			${text.status.burn.description[1]}
			`
		],
		color: 'spa'
	},
	pinMissile: {
		id: 'pinMissile',
		upgrade: false, 
		name: ['Pin Missile', 'Pin Misil'],
		able: true,
		cost: { value: 1, type: 'mp'},
		uses: [5, 5],
		power: {
			spe: 0.1,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spe">(10%<img src="./assets/images/icons/spe.png" class="icon">)</span>`,
			`
			<span class="spe">(10%<img src="./assets/images/icons/spe.png" class="icon">)</span>
			`
		],
		color: 'spe'
	},
	grassKnot: {
		id: 'grassKnot',
		upgrade: false, 
		name: ['Grass Knot', 'Hierba Lazo'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 0.6,
			spa: 0.6
		},
		status: {
			data: statusData['frailty'],
			type: 'frailty',
			target: 'foe',
			value: 1,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">60%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">60%<img src="./assets/images/icons/spa.png" class="icon"></span>)</span> and apply <span class="fra">x1 FRAILTY</span><br>
			${text.status.frailty.description[0]}`,
			`
			<span class="mix">(<span class="atk">60%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">60%<img src="./assets/images/icons/spa.png" class="icon"></span>)</span> y aplica <span class="fra">x1 FLAQUEZA</span><br>
			${text.status.frailty.description[1]}
			`
		],
		color: 'mix'
	},
	magicalLeaf: {
		id: 'magicalLeaf',
		upgrade: false, 
		name: ['Magical Leaf', 'Hoja Mágica'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 0.9,
		},
		effect: {
			type: 'boost',
			target: 'user',
			condition: 'critical',
			value: {
				spa: [5]
			}
		},
		type: 'damage',
		eludible: false,
		description: [
			`<span class="spa">(90%<img src="./assets/images/icons/spa.png" class="icon">)</span> and can't be dodged <br>
			<span class="crt">Critical:</span> Increase <span class="spa">+5<img src="./assets/images/icons/spa.png" class="icon"></span>`,
			`
			<span class="spa">(90%<img src="./assets/images/icons/spa.png" class="icon">)</span> y no puede esquivarse <br>
			<span class="crt">Crítico:</span> Aumenta <span class="spa">+5<img src="./assets/images/icons/spa.png" class="icon"></span>
			`
		],
		color: 'spa'
	},
	energyBall: {
		id: 'energyBall',
		upgrade: false, 
		name: ['Energy Ball', 'Energibola'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [1, 1],
		power: {
			spa: 1.7,
		},
		effect: {
			type: 'boost',
			target: 'foe',
			value: {
				res: [-5]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(170%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and reduce <span class="res">-5%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`<span class="spa">(170%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y reduce <span class="res">-5%<img src="./assets/images/icons/res.png" class="icon"></span>`
		],
		color: 'spa'
	},
	disarmingVoice: {
		id: 'disarmingVoice',
		upgrade: false, 
		name: ['Disarming Voice', 'Voz Cautivadora'],
		able: true,
		cost: { value: 2, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 0.7,
		},
		effect: {
			type: 'boost',
			target: 'foe',
			value: {
				res: [-3]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(70%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and reduce <span class="res">-3%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`<span class="spa">(70%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y reduce <span class="res">-3%<img src="./assets/images/icons/res.png" class="icon"></span>`
		],
		color: 'spa'
	},
	needleArm: {
		id: 'needleArm',
		upgrade: false, 
		name: ['Needle Arm', 'Brazo Pincho'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 0.8,
		},
		status: {
			data: statusData['frailty'],
			type: 'frailty',
			target: 'foe',
			value: 2,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(80%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			and apply <span class="fra">x2 FRAILTY</span><br>
			${text.status.frailty.description[0]}`,
			`
			<span class="atk">(80%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			y aplica <span class="fra">x2 FLAQUEZA</span><br>
			${text.status.frailty.description[1]}
			`
		],
		color: 'atk'
	},
	steamroller: {
		id: 'steamroller',
		upgrade: false, 
		name: ['Steamroller', 'Rodillo Púas'],
		able: true,
		cost: { value: 6, type: 'ap'},
		cd: [0, 6],
		power: {
			atk: 1.4,
		},
		status: {
			data: statusData['frailty'],
			type: 'frailty',
			target: 'foe',
			value: 8,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(140%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			and apply <span class="fra">x8 FRAILTY</span><br>
			${text.status.frailty.description[0]}`,
			`
			<span class="atk">(140%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			y aplica <span class="fra">x8 FLAQUEZA</span><br>
			${text.status.frailty.description[1]}
			`
		],
		color: 'atk'
	},
	bulletSeed: {
		id: 'bulletSeed',
		upgrade: false, 
		name: ['Bullet Seed', 'Semilladora'],
		able: true,
		cost: { value: 1, type: 'ap'},
		uses: [5, 5],
		power: {
			atk: 0.1,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(10%<img src="./assets/images/icons/atk.png" class="icon">)</span>`,
			`
			<span class="atk">(10%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			`
		],
		color: 'atk'
	},
	poisonJab: {
		id: 'poisonJab',
		upgrade: false, 
		name: ['Poison Jab', 'Puya nociva'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [3, 3],
		power: {
			atk: 0.75,
		},
		type: 'damage',
		status: {
			data: statusData['poison'],
			type: 'poison',
			target: 'foe',
			value: 2,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(75%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			and apply <span class="poi">x2 POISON</span> <br>
			${text.status.poison.description[0]}`,
			`
			<span class="atk">(75%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			y aplica <span class="poi">x2 VENENO</span> <br>
			${text.status.poison.description[1]}
			`
		],
		color: 'atk'
	},
	gust: {
		id: 'gust',
		upgrade: false, 
		name: ['Gust', 'Tornado'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 0.7,
			spe: 0.15
		},
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				spe: [4]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="spa">70%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">15%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> and 
			increase <span class="spe">+4<img src="./assets/images/icons/spe.png" class="icon"></span>`,
			`
			<span class="mix">(<span class="spa">70%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">15%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> y 
			gana <span class="spe">+4<img src="./assets/images/icons/spe.png" class="icon"></span>
			`
		],
		color: 'mix'
	},
	absorb: {
		id: 'absorb',
		upgrade: false, 
		name: ['Absorb', 'Absorber'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 0.3,
		},
		effect: {
			type: 'restoreHP',
			target: 'user',
			value: 0.5
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(30%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and heals 50% of the damage dealt`,
			`
			<span class="spa">(30%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y cura el 50% del daño causado
			`
		],
		color: 'spa'
	},
	megaDrain: {
		id: 'megaDrain',
		upgrade: false, 
		name: ['Mega Drain', 'Megadrenado'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [1, 1],
		power: {
			spa: 0.6,
		},
		effect: {
			type: 'restoreHP',
			target: 'user',
			value: 0.5
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(60%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and heals 50% of the damage dealt`,
			`
			<span class="spa">(60%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y cura el 50% del daño causado
			`
		],
		color: 'spa'
	},
	gigaDrain: {
		id: 'gigaDrain',
		upgrade: false, 
		name: ['Giga Drain', 'Gigadrenado'],
		able: true,
		cost: { value: 5, type: 'ap'},
		cd: [0, 3],
		power: {
			spa: 1.1,
		},
		effect: {
			type: 'restoreHP',
			target: 'user',
			value: 1
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(110%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and heals 100% of the damage dealt`,
			`
			<span class="spa">(110%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y cura el 100% del daño causado
			`
		],
		color: 'spa'
	},
	drainPunch: {
		id: 'drainPunch',
		upgrade: false, 
		name: ['Drain Punch', 'Puño Drenaje'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 0.5,
		},
		effect: {
			type: 'restoreHP',
			target: 'user',
			value: 0.25
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(50%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			and heals 25% of the damage dealt`,
			`
			<span class="atk">(50%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			y cura el 25% del daño causado
			`
		],
		color: 'atk'
	},
	powerUpPunch: {
		id: 'powerUpPunch',
		upgrade: false, 
		name: ['PowerUp Punch', 'Puño Incremento'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [3, 3],
		power: {
			atk: 0.4,
		},
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				atk: [3]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(40%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			and increase <span class="atk">+3<img src="./assets/images/icons/atk.png" class="icon"></span>`,
			`
			<span class="atk">(40%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			y gana <span class="atk">+3<img src="./assets/images/icons/atk.png" class="icon"></span>
			`
		],
		color: 'atk'
	},
	sludgeBomb: {
		id: 'sludgeBomb',
		upgrade: false, 
		name: ['Sludge Bomb', 'Bomba Lodo'],
		able: true,
		cost: { value: 4, type: 'ap'},
		cd: [0, 2],
		power: {
			spa: 1.5,
		},
		status: {
			data: statusData['poison'],
			type: 'poison',
			target: 'foe',
			value: 6,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(150%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and apply <span class="poi">x6 POISON</span> <br>
			${text.status.poison.description[0]}`,
			`
			<span class="spa">(150%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y aplica <span class="poi">x6 VENENO</span> <br>
			${text.status.poison.description[1]}
			`
		],
		color: 'spa'
	},
	sludgeWave: {
		id: 'sludgeWave',
		upgrade: false, 
		name: ['Sludge Wave', 'Onda Tóxica'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 1.5,
		},
		status: {
			data: statusData['poison'],
			type: 'poison',
			target: 'foe',
			value: 2,
		},
		type: 'damage',
		eludible: true,
		description: [
			`
			<span class="spa">(150%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and apply <span class="poi">x2 POISON</span> <br>
			${text.status.poison.description[0]}
			`,
			`
			<span class="spa">(150%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y aplica <span class="poi">x2 VENENO</span> <br>
			${text.status.poison.description[1]}
			`
		],
		color: 'spa'
	},
	venoshock: {
		id: 'venoshock',
		upgrade: false, 
		name: ['Venoshock', 'Carga Tóxica'],
		able: true,
		cost: { value: 2, type: 'mp'},
		cd: [0, 3],
		power: {
			spa: 0.4,
		},
		effect: {
			type: 'applyPoison',
			target: 'foe',
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(40%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and activate the <span class="poi">POISON</span> charges without consuming them`,
			`
			<span class="spa">(40%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y activa las cargas de <span class="poi">VENENO</span> sin consumirlas
			`
		],
		color: 'spa'
	},
	poisonFang: {
		id: 'poisonFang',
		upgrade: false, 
		name: ['Poison Fang', 'Colmillo Veneno'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [3, 3],
		power: {
			atk: 1.15,
		},
		status: {
			data: statusData['poison'],
			type: 'poison',
			target: 'foe',
			value: 1,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(115%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			and apply <span class="poi">x1 POISON</span> <br>
			${text.status.poison.description[0]}`,
			`
			<span class="atk">(115%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			y aplica <span class="poi">x1 VENENO</span> <br>
			${text.status.poison.description[1]}
			`
		],
		color: 'atk'
	},
	pursuit: {
		id: 'pursuit',
		upgrade: false, 
		name: ['Pursuit', 'Persecución'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			spe: 1.1,
		},
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				spe: [2]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spe">(110%<img src="./assets/images/icons/spe.png" class="icon">)</span> 
			and increase <span class="spe">+2<img src="./assets/images/icons/spe.png" class="icon"></span>`,
			`
			<span class="spe">(110%<img src="./assets/images/icons/spe.png" class="icon">)</span> 
			y gana <span class="spe">+2<img src="./assets/images/icons/spe.png" class="icon"></span>
			`
		],
		color: 'spe'
	},
	closeCombat: {
		id: 'closeCombat',
		upgrade: false, 
		name: ['Close Combat', 'A Bocajarro'],
		able: true,
		cost: { value: 4, type: 'ap'},
		cd: [0, 2],
		power: {
			atk: 3.5,
		},
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				res: [-20]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(350%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			but reduce <span class="res">-20%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`
			<span class="atk">(350%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			pero reduce <span class="res">-20%<img src="./assets/images/icons/res.png" class="icon"></span>
			`
		],
		color: 'atk'
	},
	extremeSpeed: {
		id: 'extremeSpeed',
		upgrade: false, 
		name: ['Extreme Speed', 'Vel. Extrema'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [1, 1],
		power: {
			spe: 1.7,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spe">(170%<img src="./assets/images/icons/spe.png" class="icon">)</span>`,
			`
			<span class="spe">(170%<img src="./assets/images/icons/spe.png" class="icon">)</span>
			`
		],
		color: 'spe'
	},
	drillPeck: {
		id: 'drillPeck',
		upgrade: false, 
		name: ['Drill Peck', 'Pico Taladro'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1.5
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(150%<img src="./assets/images/icons/atk.png" class="icon">)</span>`,
			`
			<span class="atk">(150%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			`
		],
		color: 'atk'
	},
	auraSphere: {
		id: 'auraSphere',
		upgrade: false, 
		name: ['Aura Sphere', 'Esfera Aural'],
		able: true,
		cost: { value: 4, type: 'ap'},
		cd: [0, 2],
		power: {
			atk: 0.65,
			spa: 1.3,
			spe: 0.65,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">65%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">130%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">65%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>`,
			`<span class="mix">(<span class="atk">65%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">130%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">65%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>`
		],
		color: 'mix'
	},
	zenHeadbutt: {
		id: 'zenHeadbutt',
		upgrade: false, 
		name: ['Zen Headbutt', 'Cabezazo Zen'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 0.3,
			spa: 1.1,
			res: 0.5,

		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">30%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">110%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="res">50%<img src="./assets/images/icons/res.png" class="icon"></span>)</span>`,
			`<span class="mix">(<span class="atk">30%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">110%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="res">50%<img src="./assets/images/icons/res.png" class="icon"></span>)</span>`
		],
		color: 'mix'
	},
	forcePalm: {
		id: 'forcePalm',
		upgrade: false, 
		name: ['Force Palm', 'Palmeo'],
		able: true,
		cost: { value: 1, type: 'mp'},
		uses: [2, 2],
		power: {
			atk: 0.15,
		},
		effect: {
			type: 'changeAP',
			target: 'user',
			value: [1]
		},
		type: 'damage',
		eludible: false,
		description: [
			`
			<span class="atk">(15%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			and gain <span class="ap">1<img src="./assets/images/icons/ap.png" class="icon"></span>
			`,
			`
			<span class="atk">(15%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			y gana <span class="ap">1<img src="./assets/images/icons/ap.png" class="icon"></span>
			`
		],
		color: 'atk'
	},
	meteorMash: {
		id: 'meteorMash',
		upgrade: false, 
		name: ['Meteor Mash', 'Puño Meteoro'],
		able: true,
		cost: { value: 2, type: 'ap'},
		uses: [3, 3],
		power: {
			atk: 0.3,
			spe: 0.3
		},
		type: 'damage',
		eludible: false,
		description: [
			`
			<span class="mix">(<span class="atk">30%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">30%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			`,
			`
			<span class="mix">(<span class="atk">30%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">30%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			`	
		],
		color: 'mix'
	},
	flashCannon: {
		id: 'flashCannon',
		upgrade: false, 
		name: ['Flash Cannon', 'Foco Resplandor'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 1.2,
		},
		effect: {
			type: 'boost',
			target: 'foe',
			value: {
				res: [-5]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(120%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and reduce <span class="res">-5%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`<span class="spa">(120%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y reduce <span class="res">-5%<img src="./assets/images/icons/res.png" class="icon"></span>`
		],
		color: 'spa'
	},
	// EXTRA
	rockPolish: {
		id: 'rockPolish',
		upgrade: false, 
		name: ['Rock Polish', 'Pulimiento'],
		able: true,
		cost: { value: 2, type: 'mp'},
		uses: [2, 2],
		type: 'status',
		effect: {
			type: 'changeAP',
			target: 'user',
			value: [2]
		},
		eludible: false,
		description: [
			`
			Gain <span class="ap">2<img src="./assets/images/icons/ap.png" class="icon"></span>
			`,
			`
			Gana <span class="ap">2<img src="./assets/images/icons/ap.png" class="icon"></span>
			`
		],
	},
	defenseCurl: {
		id: 'defenseCurl',
		upgrade: false, 
		name: ['Defense Curl', 'Rizo Defensa'],
		able: true,
		cost: { value: 1, type: 'mp'},
		uses: [2, 2],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				res: [3]
			}
		},
		eludible: false,
		description: [
			`Increase <span class="res">+3%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`Aumenta <span class="res">+3%<img src="./assets/images/icons/res.png" class="icon"></span>`
		],
	},
	wrap: {
		id: 'wrap',
		upgrade: false, 
		name: ['Wrap', 'Constricción'],
		able: true,
		cost: { value: 1, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 0.4,
		},
		effect: {
			type: 'boost',
			target: 'foe',
			value: {
				spe: [-3]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`
			<span class="atk">(40%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
 			and reduce <span class="spe">-3<img src="./assets/images/icons/spe.png" class="icon"></span>	
			`,
			`
			<span class="atk">(40%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
 			y reduce <span class="spe">-3<img src="./assets/images/icons/spe.png" class="icon"></span>
			`
		],
		color: 'atk'
	},
	gyroBall: {
		id: 'gyroBall',
		upgrade: false, 
		name: ['Gyro Ball', 'Giro Bola'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			spe: 0.5,
			res: 1.5,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="spe">50%<img src="./assets/images/icons/spe.png" class="icon"></span>+
			<span class="res">150%<img src="./assets/images/icons/res.png" class="icon"></span>)</span>`,
			`<span class="mix">(<span class="spe">50%<img src="./assets/images/icons/spe.png" class="icon"></span>+
			<span class="res">150%<img src="./assets/images/icons/res.png" class="icon"></span>)</span>`
		],
		color: 'mix'
	},
	rockSmash: {
		id: 'rockSmash',
		upgrade: false, 
		name: ['Rock Smash', 'Golpe Roca'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1.2,
			res: 0.5,
		},
		effect: {
			type: 'boost',
			target: 'foe',
			value: {
				res: [-5]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">120%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="res">50%<img src="./assets/images/icons/res.png" class="icon"></span>)</span>
			and reduce <span class="res">-5%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`<span class="mix">(<span class="atk">120%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="res">50%<img src="./assets/images/icons/res.png" class="icon"></span>)</span>
			y reduce <span class="res">-5%<img src="./assets/images/icons/res.png" class="icon"></span>`
		],
		color: 'mix'
	},
	shellSmash: {
		id: 'shellSmash',
		upgrade: false, 
		name: ['Shell Smash', 'Rompecoraza'],
		cost: { value: 3, type: 'mp'},
		cd: [0, 10],
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				atk: [30],
				spe: [30],
				res: [-50],
			}
		},
		type: 'status',
		eludible: false,
		description: [
			`Increase <span class="atk">+30<img src="./assets/images/icons/atk.png" class="icon"></span> and
			<span class="spe">+30<img src="./assets/images/icons/spe.png" class="icon"></span> 
			but reduce <span class="res">-50%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`
			Aumenta <span class="atk">+30<img src="./assets/images/icons/atk.png" class="icon"></span> y
			<span class="spe">+30<img src="./assets/images/icons/spe.png" class="icon"></span>
			pero reduce <span class="res">-50%<img src="./assets/images/icons/res.png" class="icon"></span>
			`
		]
	},
	doubleEdge: {
		id: 'doubleEdge',
		upgrade: false, 
		name: ['Double-Edge', 'Doble Filo'],
		able: true,
		cost: { value: 5, type: 'ap'},
		cd: [0, 3],
		power: {
			res: 5,
		},
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				res: [-15]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="res">(500%<img src="./assets/images/icons/res.png" class="icon">)</span>
			but reduce <span class="res">-15%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`
			<span class="res">(500%<img src="./assets/images/icons/res.png" class="icon">)</span> 
			pero reduce <span class="res">-15%<img src="./assets/images/icons/res.png" class="icon"></span> 
			`
		],
		color: 'res'
	},
	stealRoller: {
		id: 'stealRoller',
		upgrade: false, 
		name: ['Steel Roller', 'A. Férreo'],
		able: true,
		cost: { value: 4, type: 'ap'},
		cd: [0, 3],
		power: {
			res: 1.1,
		},
		status: {
			data: statusData['frailty'],
			type: 'frailty',
			target: 'foe',
			value: 5,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="res">(110%<img src="./assets/images/icons/res.png" class="icon">)</span>
			and apply <span class="fra">x5 FRAILTY</span><br>
			${text.status.frailty.description[0]}`,
			`
			<span class="res">(110%<img src="./assets/images/icons/res.png" class="icon">)</span>
			y aplica <span class="fra">x5 FLAQUEZA</span><br>
			${text.status.frailty.description[1]}
			`
		],
		color: 'res'
	},
	struggleBug: {
		id: 'struggleBug',
		upgrade: false, 
		name: ['Struggle Bug', 'Estoicismo'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 1,
		},
		status: {
			data: statusData['frailty'],
			type: 'frailty',
			target: 'foe',
			value: 2,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(100%<img src="./assets/images/icons/spa.png" class="icon">)</span> 
			and apply <span class="fra">x2 FRAILTY</span> <br>
			${text.status.frailty.description[0]}`,
			`
			<span class="spa">(100%<img src="./assets/images/icons/spa.png" class="icon">)</span> 
			y aplica <span class="fra">x2 FLAQUEZA</span> <br>
			${text.status.frailty.description[1]}
			`
		],
		color: 'spa'
	},
	ancientPower: {
		id: 'ancientPower',
		upgrade: false, 
		name: ['Ancient Power', 'Poder Pasado'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 1.5,
			res: 0.75
		},
		status: {
			data: statusData['erosion'],
			type: 'erosion',
			target: 'foe',
			value: 2,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="spa">150%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="res">75%<img src="./assets/images/icons/res.png" class="icon"></span>)</span>
			and apply <span class="ero">x2 EROSION</span> <br>
			${text.status.erosion.description[0]}`,
			`<span class="mix">(<span class="spa">150%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="res">75%<img src="./assets/images/icons/res.png" class="icon"></span>)</span>
			y aplica <span class="ero">x2 EROSIÓN</span> <br>
			${text.status.erosion.description[1]}`
		],
		color: 'mix'
	},
	shadowBall: {
		id: 'shadowBall',
		upgrade: false, 
		name: ['Shadow Ball', 'Bola Sombra'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				spa: [6],
			}
		},
		power: {
			spa: 0.8
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(80%<img src="./assets/images/icons/spa.png" class="icon">)</span> 
			and increase <span class="spa">+6<img src="./assets/images/icons/spa.png" class="icon"></span>`,
			`
			<span class="spa">(80%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y aumenta <span class="spa">+6<img src="./assets/images/icons/spa.png" class="icon"></span>
			`
		],
		color: 'spa'
	},
	shadowSneak: {
		id: 'shadowSneak',
		upgrade: false, 
		name: ['Shadow Sneak', 'Sombra Vil'],
		able: true,
		cost: { value: 2, type: 'ap'},
		uses: [3, 3],
		power: {
			spe: 0.3,
		},
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				spe: [1, 2, 3]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spe">(30%<img src="./assets/images/icons/spe.png" class="icon">)</span>
			and increase <img src="./assets/images/icons/spe.png" class="icon"> between <span class="spe">+1</span> and <span class="spe">+3</span>`,
			`
			<span class="spe">(30%<img src="./assets/images/icons/spe.png" class="icon">)</span>
			y gana <img src="./assets/images/icons/spe.png" class="icon"> entre <span class="spe">+1</span> y <span class="spe">+3</span>
			`
		],
		color: 'spe'
	},
	meanLook: {
		id: 'meanLook',
		upgrade: false, 
		name: ['Mean Look', 'Mal de Ojo'],
		able: true,
		cost: { value: 1, type: 'mp'},
		uses: [1, 1],
		type: 'status',
		effect: {
			type: 'meanLook',
			target: 'user',
		},
		eludible: false,
		description: [
			`
			Increase one random stat by <span class="mix">10</span>, and reduce the remaining stats by <span class="mix">-5</span>
			<span class="mix">
			(<img src="./assets/images/icons/atk.png" class="icon">, <img src="./assets/images/icons/spa.png" class="icon"> or <img src="./assets/images/icons/spe.png" class="icon">)
			</span>
			`,
			`
			Aumenta en <span class="mix">10</span> un stat aleatorio, reduce en <span class="mix">-5</span> los stat restantes
			<span class="mix">
			(<img src="./assets/images/icons/atk.png" class="icon">, <img src="./assets/images/icons/spa.png" class="icon"> o <img src="./assets/images/icons/spe.png" class="icon">)
			</span>
			`
		],
	},
	powerGem: {
		id: 'powerGem',
		upgrade: false, 
		name: ['Power Gem', 'Joya de Luz'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 0.55,
			spa: 0.55,
			spe: 0.55,
		},
		type: 'damage',
		eludible: true,
		description: [
			`
			<span class="mix">(<span class="atk">55%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">55%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">55%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			`,
			`
			<span class="mix">(<span class="atk">55%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">55%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">55%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			`	
		],
		color: 'mix'
	},
	willOWisp: {
		id: 'willOWisp',
		upgrade: false, 
		able: true,
		cost: { value: 1, type: 'mp'},
		cd: [0, 5],
		name: ['Will-O-Wisp', 'Fuego Fatuo'],
		status: {
			data: statusData['burn'],
			type: 'burn',
			target: 'foe',
			value: 5,
		},
		type: 'status',
		eludible: true,
		description: [
			`Apply <span class="bur">x5 BURN</span><br>
			${text.status.burn.description[0]}`,
			`
			Aplica <span class="bur">x5 QUEMADURA</span><br>
			${text.status.burn.description[1]}
			`
		],
	},
	crunch: {
		id: 'crunch',
		upgrade: false, 
		name: ['Crunch', 'Triturar'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [1, 1],
		power: {
			atk: 1.4,
		},
		effect: {
			type: 'boost',
			target: 'foe',
			value: {
				res: [-8]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`
			<span class="atk">(140%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
 			and reduce <span class="res">-8%<img src="./assets/images/icons/res.png" class="icon"></span>	
			`,
			`
			<span class="atk">(140%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
 			y reduce <span class="res">-8%<img src="./assets/images/icons/res.png" class="icon"></span>
			`
		],
		color: 'atk'
	},
	fairyWind: {
		id: 'fairyWind',
		upgrade: false, 
		name: ['Fairy Wind', 'Viento Feérico'],
		able: true,
		cost: { value: 2, type: 'ap'},
		uses: [3, 3],
		power: {
			spa: 0.7,
		},
		type: 'damage',
		eludible: true,
		description: [
			`
			<span class="spa">(70%<img src="./assets/images/icons/spa.png" class="icon">)</span> 
			`,
			`
			<span class="spa">(70%<img src="./assets/images/icons/spa.png" class="icon">)</span> 
			`
		],
		color: 'spa'
	},
	astonish: {
		id: 'astonish',
		upgrade: false, 
		name: ['Astonish', 'Impresionar'],
		able: true,
		cost: { value: 1, type: 'mp'},
		uses: [1, 1],
		power: {
			atk: 0.3,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(30%<img src="./assets/images/icons/atk.png" class="icon">)</span>`,
			`
			<span class="atk">(30%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			`
		],
		color: 'atk'
	},
	jawLock: {
		id: 'jawLock',
		upgrade: false, 
		name: ['Jaw Lock', 'Presa Maxilar'],
		able: true,
		cost: { value: 5, type: 'ap'},
		uses: [1, 1],
		power: {
			atk: 1.2,
		},
		effect: {
			type: 'jawLock',
			target: 'foe',
			value: 3
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(120%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			and increase one random stat by <span class="mix">3</span>
			<span class="mix">
			(<img src="./assets/images/icons/atk.png" class="icon">, <img src="./assets/images/icons/spa.png" class="icon"> or <img src="./assets/images/icons/spe.png" class="icon">)
			</span> if it knocks out the target`,
			`
			<span class="atk">(120%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			y aumenta en <span class="mix">3</span> un stat aleatorio
			<span class="mix">
			(<img src="./assets/images/icons/atk.png" class="icon">, <img src="./assets/images/icons/spa.png" class="icon"> o <img src="./assets/images/icons/spe.png" class="icon">)
			</span> si debilita al objetivo
			`
		],
		color: 'atk'
	},
	// ENEMIES ONLY
	stringShot: {
		id: 'stringShot',
		upgrade: false, 
		name: ['String Shot', 'Disparo Demora'],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'foe',
			value: {
				spe: [-6]
			}
		},
		eludible: true,
	},
	harden: {
		id: 'harden',
		upgrade: false, 
		name: ['Harden', 'Fortaleza'],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				res: [5]
			}
		},
		eludible: false,
	},
	stunSpore: {
		id: 'stunSpore',
		upgrade: false, 
		name: ['Stun Spore', 'Paralizador'],
		type: 'status',
		effect: {
			type: 'changeAP',
			target: 'foe',
			value: [-1, -2]
		},
		eludible: true,
	},
	stickyWeb: {
		id: 'stickyWeb',
		upgrade: false, 
		name: ['Sticky Web', 'Red viscosa'],
		type: 'status',
		effect: {
			type: 'changeMP',
			target: 'foe',
			value: [-1]
		},
		eludible: true,
	},
	vineWhip: {
		id: 'vineWhip',
		upgrade: false, 
		name: ['Vine Whip', 'Latigo Cepa'],
		power: {
			atk: 1.2,
		},
		type: 'damage',
		eludible: true,
	},
	whirlpool: {
		id: 'whirlpool',
		upgrade: false, 
		name: ['Whirlpool', 'Torbellino'],
		power: {
			spa: 0.2,
			spe: 0.3,
		},
		type: 'damage',
		eludible: true,
	},
	hornAttack: {
		id: 'hornAttack',
		upgrade: false, 
		name: ['Horn Attack', 'Cornada'],
		power: {
			atk: 1.15,
		},
		type: 'damage',
		eludible: true,
	},
	brickBreak: {
		id: 'brickBreak',
		upgrade: false, 
		name: ['Brick Break', 'Demolición'],
		power: {
			atk: 1.8,
		},
		effect: {
			type: 'boost',
			target: 'foe',
			value: {
				res: [-5]
			}
		},
		type: 'damage',
		eludible: true,
	},
	viseGrip: {
		id: 'viseGrip',
		upgrade: false, 
		name: ['Vise Grip', 'Agarre'],
		effect: {
			type: 'changeMP',
			target: 'foe',
			value: [-1]
		},
		power: {
			atk: 0.6,
		},
		type: 'damage',
		eludible: true,
	},
	fellStinger: {
		id: 'fellStinger',
		upgrade: false, 
		name: ['Fell Stinger', 'Aguijón Letal'],
		power: {
			atk: 0.8,
		},
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				atk: [3]
			}
		},
		type: 'damage',
		eludible: true,
	},
	aquaJet: {
		id: 'aquaJet',
		upgrade: false, 
		name: ['Aqua Jet', 'Acua Jet'],
		power: {
			spe: 0.4,
		},
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				spe: [5]
			}
		},
		type: 'damage',
		eludible: true,
	},
	bugBite: {
		id: 'bugBite',
		upgrade: false, 
		name: ['Bug Bite', 'Picadura'],
		power: {
			atk: 0.15,
		},
		type: 'damage',
		eludible: true,
	},
	bite: {
		id: 'bite',
		upgrade: false, 
		name: ['Bite', 'Mordisco'],
		power: {
			atk: 1,
		},
		type: 'damage',
		eludible: true,
	},
	confusion: {
		id: 'confusion',
		upgrade: false, 
		name: ['Confusion', 'Confusión'],
		power: {
			spa: 1.35,
		},
		type: 'damage',
		eludible: true,
	},
	psybeam: {
		id: 'psybeam',
		upgrade: false, 
		name: ['Psybeam', 'Psicorrayo'],
		power: {
			spa: 1.7,
		},
		type: 'damage',
		eludible: true,
	},
	defendOrder: {
		id: 'defendOrder',
		upgrade: false, 
		name: ['Defend Order', 'A Defender'],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				res: [10]
			}
		},
		eludible: false,
	},
	attackOrder: {
		id: 'attackOrder',
		upgrade: false, 
		name: ['Attack Order', 'Al Ataque'],
		power: {
			atk: 1.5,
		},
		type: 'damage',
		eludible: true,
	},
	withdraw: {
		id: 'withdraw',
		upgrade: false, 
		name: ['Withdraw', 'Refugio'],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				atk: [2],
				spa: [2],
				res: [2],
			}
		},
		eludible: false,
	},
	rockThrow: {
		id: 'rockThrow',
		upgrade: false, 
		name: ['Rock Throw', 'Lanzarrocas'],
		power: {
			atk: 1.2,
		},
		effect: {
			type: 'boost',
			target: 'foe',
			value: {
				spe: [-5]
			}
		},
		type: 'damage',
		eludible: true,
	},
	lick: {
		id: 'lick',
		upgrade: false, 
		name: ['Lick', 'Lengüetazo'],
		effect: {
			type: 'changeAP',
			target: 'foe',
			value: [-1]
		},
		power: {
			atk: 0.8,
		},
		type: 'damage',
		eludible: true,
	},
	chillingWater: {
		id: 'chillingWater',
		upgrade: false, 
		name: ['Chilling Water', 'Agua Fría'],
		effect: {
			type: 'changeAP',
			target: 'foe',
			value: [-1, -2, -3]
		},
		power: {
			atk: 0.8,
		},
		type: 'damage',
		eludible: true,
	},
	fakeOut: {
		id: 'fakeOut',
		upgrade: false, 
		name: ['Fake Out', 'Sorpresa'],
		effect: {
			type: 'changeAP',
			target: 'foe',
			value: [-1, -2]
		},
		power: {
			atk: 0.5,
		},
		type: 'damage',
		eludible: true,
	},
	lowSweep: {
		id: 'lowSweep',
		upgrade: false, 
		name: ['Low Sweep', 'Puntapié'],
		effect: {
			type: 'changeMP',
			target: 'foe',
			value: [-1]
		},
		power: {
			spe: 0.5,
		},
		type: 'damage',
		eludible: true,
	},
	dragonBreath: {
		id: 'dragonBreath',
		upgrade: false, 
		name: ['Dragon Breath', 'Dragoaliento'],
		effect: {
			type: 'changeMP',
			target: 'foe',
			value: [-1]
		},
		power: {
			spa: 0.9,
		},
		type: 'damage',
		eludible: true,
	},
	razorLeaf: {
		id: 'razorLeaf',
		upgrade: false, 
		name: ['Razor Leaf', 'Hoja Afilada'],
		power: {
			atk: 1,
		},
		type: 'damage',
		eludible: true,
	},
	hydroPump: {
		id: 'hydroPump',
		upgrade: false, 
		name: ['Hydro Pump', 'Hidrobomba'],
		power: {
			spa: 2,
		},
		type: 'damage',
		eludible: true,
	},
	minimize: {
		id: 'minimize',
		upgrade: false, 
		name: ['Minimize', 'Reducción'],
		status: {
			data: statusData['elusion'],
			type: 'elusion',
			target: 'user',
			value: 1,
		},
		type: 'status',
		eludible: false,
	},
	ember: {
		id: 'ember',
		upgrade: false, 
		name: ['Ember', 'Ascuas'],
		power: {
			spa: 0.8
		},
		status: {
			data: statusData['burn'],
			type: 'burn',
			target: 'foe',
			value: 2,
		},
		type: 'damage',
		eludible: true,
	},
	flamethrower : {
		id: 'flamethrower',
		upgrade: false, 
		name: ['Flamethrower', 'Lanzallamas'],
		power: {
			spa: 1.2
		},
		status: {
			data: statusData['burn'],
			type: 'burn',
			target: 'foe',
			value: 3,
		},
		type: 'damage',
		eludible: true,
	},
	blazeKick: {
		id: 'blazeKick',
		upgrade: false, 
		name: ['Blaze Kick', 'Patada ígnea'],
		power: {
			atk: 0.9,
			spe: 0.3
		},
		status: {
			data: statusData['burn'],
			type: 'burn',
			target: 'foe',
			value: 3,
		},
		type: 'damage',
		eludible: true,
	},
	growl: {
		id: 'growl',
		upgrade: false, 
		name: ['Growl', 'Gruñido'],
		able: true,
		cost: { value: 1, type: 'mp'},
		cd: [0, 3],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'foe',
			value: {
				atk: [-5],
				spa: [-5],
			}
		},
		eludible: false,
		description: [
			`
			Reduce <span class="atk">-5<img src="./assets/images/icons/atk.png" class="icon"></span> and
			<span class="spa">-5<img src="./assets/images/icons/spa.png" class="icon"></span> to the target
			`,
			`
			Reduce <span class="atk">-5<img src="./assets/images/icons/atk.png" class="icon"></span> y
			<span class="spa">-5<img src="./assets/images/icons/spa.png" class="icon"></span> al objetivo
			`
		]
	},
	screech: {
		id: 'screech',
		upgrade: false, 
		name: ['Screech', 'Chirrido'],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'foe',
			value: {
				res: [-10]
			}
		},
		eludible: true,
	},
	howl: {
		id: 'howl',
		upgrade: false, 
		name: ['Howl', 'Aullido'],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				atk: [8],
				spe: [8]
			}
		},
		eludible: false,
	},
	phantomForce: {
		id: 'phantomForce',
		upgrade: false, 
		name: ['Phantom Force', 'Golpe Fantasma'],
		power: {
			spe: 1.1
		},
		status: {
			data: statusData['elusion'],
			type: 'elusion',
			target: 'user',
			value: 1,
		},
		type: 'damage',
		eludible: true,
	},
	synthesis : {
		id: 'synthesis',
		upgrade: false, 
		name: ['Synthesis', 'Síntesis'],
		heal: {
			hp: 0.2,
		},
		type: 'status',
		eludible: false,
	},
	auroraBeam: {
		id: 'auroraBeam',
		upgrade: false, 
		name: ['Aurora Beam', 'Rayo Aurora'],
		power: {
			spa: 1.2
		},
		type: 'damage',
		eludible: true,
	},
	signalBeam: {
		id: 'signalBeam',
		upgrade: false, 
		name: ['Signal Beam', 'Rayo Señal'],
		power: {
			spa: 0.7,
			spe: 0.7
		},
		type: 'damage',
		eludible: true,
	},
	iceFang: {
		id: 'iceFang',
		upgrade: false, 
		name: ['Ice Fang', 'Colmillo Hielo'],
		power: {
			atk: 1.2
		},
		type: 'damage',
		eludible: true,
	},
	hyperVoice : {
		id: 'hyperVoice',
		upgrade: false, 
		name: ['Hyper Voice', 'Vozarrón'],
		power: {
			spa: 2
		},
		type: 'damage',
		eludible: true,
	},
	muddyWater: {
		id: 'muddyWater',
		upgrade: false, 
		name: ['Muddy Water', 'Agua Lodosa'],
		effect: {
			type: 'boost',
			target: 'foe',
			value: {
				atk: [-3],
				spa: [-3],
				spe: [-3]
			}
		},
		power: {
			spa: 0.8
		},
		type: 'damage',
		eludible: true,
	},
	spacialRend: {
		id: 'spacialRend',
		upgrade: false, 
		name: ['Spacial Rend', 'Corte Vacío'],
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				crt: [15],
				crtDmg: [25],
			}
		},
		power: {
			atk: 1,
			spa: 1,
		},
		type: 'damage',
		eludible: false,
	},
	earthquake: {
		id: 'earthquake',
		upgrade: false, 
		name: ['Earthquake', 'Terremoto'],
		effect: {
			type: 'boost',
			target: 'target',
			value: {
				res: [-5],
			}
		},
		power: {
			atk: 1.65
		},
		type: 'damage',
		eludible: true,
	},
	quiverDance: {
		id: 'quiverDance',
		upgrade: false, 
		name: ['Quiver Dance', 'Danza Aleteo'],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				spa: [8],
				spe: [8],
			}
		},
		eludible: false,
	},
	sacredFire: {
		id: 'sacredFire',
		upgrade: false, 
		name: ['Sacred Fire', 'Fuego Sagrado'],
		power: {
			spa: 1.5
		},
		status: {
			data: statusData['burn'],
			type: 'burn',
			target: 'foe',
			value: 99,
		},
		type: 'damage',
		eludible: false,
	},
	distorsion: {
		id: 'distorsion',
		upgrade: false, 
		name: ['Distorsion', 'Distorsion'],
		effect: {
			type: 'changeAP',
			target: 'foe',
			value: [-5]
		},
		power: {
			spa: 2,
		},
		type: 'damage',
		eludible: false,
	},
	darkVoid: {
		id: 'darkVoid',
		upgrade: false, 
		name: ['Dark Void', 'Brecha Negra'],
		effect: {
			type: 'changeAP',
			target: 'foe',
			value: [-2, -3, -4]
		},
		power: {
			atk: 0.2,
			spa: 0.2,
			spe: 0.2,
		},
		type: 'damage',
		eludible: true,
	},
	dive: {
		id: 'dive',
		upgrade: false, 
		name: ['Dive', 'Buceo'],
		power: {
			spa: 0.6,
			spe: 0.6
		},
		status: {
			data: statusData['elusion'],
			type: 'elusion',
			target: 'user',
			value: 3,
		},
		type: 'damage',
		eludible: true,
	},
	judgment: {
		id: 'judgment',
		upgrade: false, 
		name: ['Judgment', 'Sentencia'],
		power: {
			atk: 0.35,
			spa: 0.35,
			spe: 0.35
		},
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				atk: [5],
				spa: [5],
				spe: [5],
			}
		},
		type: 'damage',
		eludible: true,
	},
	charm: {
		id: 'charm',
		upgrade: false, 
		name: ['Charm', 'Encanto'],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'foe',
			value: {
				atk: [-3],
				spa: [-3],
			}
		},
		eludible: false,
	},
}