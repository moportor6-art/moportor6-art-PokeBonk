import { statusData } from './statusData.js';
import { text } from '../../file/text.js';

export const moveUpgradeData = {
	// BASICS
	tackle: {
		id: 'tackle',
		upgrade: true,
		name: ['Tackle +', 'Placaje +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
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
	cut: {
		id: 'cut',
		upgrade: true,
		name: ['Cut +', 'Corte +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1.1,
		},
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				crt: [5]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(110%<img src="./assets/images/icons/atk.png" class="icon">)</span> and increase
			<span class="crt">+5%<img src="./assets/images/icons/crt.png" class="icon"></span>`,
			`<span class="atk">(110%<img src="./assets/images/icons/atk.png" class="icon">)</span> y aumenta
			<span class="crt">+5%<img src="./assets/images/icons/crt.png" class="icon"></span>`
		],
		color: 'atk'
	},
	scratch: {
		id: 'scratch',
		upgrade: true,
		name: ['Scratch +', 'Arañazo +'],
		able: true,
		cost: { value: 2, type: 'ap'},
		uses: [3, 3],
		power: {
			atk: 0.8,
		},
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				crt: [3]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(80%<img src="./assets/images/icons/atk.png" class="icon">)</span> and increase
			<span class="crt">+3%<img src="./assets/images/icons/crt.png" class="icon"></span>`,
			`<span class="atk">(80%<img src="./assets/images/icons/atk.png" class="icon">)</span> y aumenta
			<span class="crt">+3%<img src="./assets/images/icons/crt.png" class="icon"></span>`
		],
		color: 'atk'
	},
	quickAttack: {
		id: 'quickAttack',
		upgrade: true,
		name: ['Quick Attack +', 'Ataque Rápido +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			spe: 1,
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
			`<span class="spe">(100%<img src="./assets/images/icons/spe.png" class="icon">)</span> and increase
			<span class="spe">+5<img src="./assets/images/icons/spe.png" class="icon"></span>`,
			`<span class="spe">(100%<img src="./assets/images/icons/spe.png" class="icon">)</span> y aumenta
			<span class="spe">+5<img src="./assets/images/icons/spe.png" class="icon"></span>`
		],
		color: 'spe'
	},
	peck: {
		id: 'peck',
		upgrade: true,
		name: ['Peck +', 'Picotazo +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 0.55,
			spe: 0.55,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">55%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">55%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>`,
			`
			<span class="mix">(<span class="atk">55%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">55%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			`	
		],
		color: 'mix'
	},
	sandAttack: {
		id: 'sandAttack',
		upgrade: true,
		name: ['Sand Attack +', 'Ataque Arena +'],
		able: true,
		cost: { value: 2, type: 'ap'},
		uses: [3, 3],
		power: {
			atk: 0.4,
			spa: 0.4,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">40%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">40%<img src="./assets/images/icons/spa.png" class="icon"></span>)</span>`,
			`
			<span class="mix">(<span class="atk">40%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">40%<img src="./assets/images/icons/spa.png" class="icon"></span>)</span>
			`	
		],
		color: 'mix'
	},
	takeDown: {
		id: 'takeDown',
		upgrade: true,
		name: ['Take Down +', 'Derribo +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			hp: 0.2,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="hp">(20%<img src="./assets/images/icons/hp.png" class="icon">)</span>`,
			`<span class="hp">(20%<img src="./assets/images/icons/hp.png" class="icon">)</span>`
		],
		color: 'hp'
	},
	poisonSting: {
		id: 'poisonSting',
		upgrade: true,
		name: ['Poison Sting +', 'Picotazo Ven. +'],
		able: true,
		cost: { value: 2, type: 'ap'},
		uses: [3, 3],
		power: {
			spa: 0.4,
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
			`<span class="spa">(40%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and apply <span class="poi">x6 POISON</span> <br>
			${text.status.poison.description[0]}`,
			`
			<span class="spa">(40%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y aplica <span class="poi">x6 VENENO</span> <br>
			${text.status.poison.description[1]}
			`
		],
		color: 'spa'
	},
	swift: {
		id: 'swift',
		upgrade: true,
		name: ['Swift +', 'Meteoros +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 0.4,
			spa: 0.4,
			spe: 0.4,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">40%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">40%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">40%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>`,
			`
			<span class="mix">(<span class="atk">40%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">40%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">40%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			`	
		],
		color: 'mix'
	},
	// BUFOS
	nastyPlot: {
		id: 'nastyPlot',
		upgrade: true, 
		name: ['Nasty Plot +', 'Maquinación +'],
		able: true,
		cost: { value: 2, type: 'mp'},
		cd: [0, 4],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			percent: true,
			value: {
				spa: [0.3]
			}
		},
		eludible: false,
		description: [
			`Increase base <img src="./assets/images/icons/spa.png" class="icon"> by <span class="spa">x1.3</span>`,
			`Aumenta el <img src="./assets/images/icons/spa.png" class="icon"> base en <span class="spa">x1.3</span>`
		]
	},
	agility: {
		id: 'agility',
		upgrade: true, 
		name: ['Agility +', 'Agilidad +'],
		able: true,
		cost: { value: 1, type: 'mp'},
		cd: [0, 2],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				spe: [16]
			}
		},
		eludible: false,
		description: [
			`
			Increase <span class="spe">+16<img src="./assets/images/icons/spe.png" class="icon"></span>
			`,
			`
			Aumenta <span class="spe">+16<img src="./assets/images/icons/spe.png" class="icon"></span>
			`
		],
	},
	sandstorm: {
		id: 'sandstorm',
		upgrade: true, 
		name: ['Sandstorm +', 'Tormenta Arena +'],
		able: true,
		cost: { value: 1, type: 'mp'},
		cd: [0, 4],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				atk: [5],
				spa: [5],
				res: [8],
			}
		},
		eludible: false,
		description: [
			`Increase <span class="atk">+5<img src="./assets/images/icons/atk.png" class="icon"></span>,
			<span class="spa">+5<img src="./assets/images/icons/spa.png" class="icon"></span> and
			<span class="res">+8%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`
			Aumenta <span class="atk">+5<img src="./assets/images/icons/atk.png" class="icon"></span>,
			<span class="spa">+5<img src="./assets/images/icons/spa.png" class="icon"></span> y
			<span class="res">+8%<img src="./assets/images/icons/res.png" class="icon"></span>
			`
		]
	},
	focusEnergy: {
		id: 'focusEnergy',
		upgrade: true, 
		name: ['Focus Energy +', 'Foco Energía +'],
		able: true,
		cost: { value: 1, type: 'mp'},
		cd: [0, 3],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				crt: [15]
			}
		},
		eludible: false,
		description: [
			`Increase <span class="crt">+15%<img src="./assets/images/icons/crt.png" class="icon"></span>`,
			`
			Aumenta <span class="crt">+15%<img src="./assets/images/icons/crt.png" class="icon"></span>
			`
		]
	},
	swordsDance: {
		id: 'swordsDance',
		upgrade: true, 
		name: ['Swords Dance +', 'Danza espada +'],
		able: true,
		cost: { value: 2, type: 'mp'},
		cd: [0, 4],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			percent: true,
			value: {
				atk: [0.3]
			}
		},
		eludible: false,
		description: [
			`Increase base <img src="./assets/images/icons/atk.png" class="icon"> by <span class="atk">x1.3</span>`,
			`Aumenta el <img src="./assets/images/icons/atk.png" class="icon"> base en <span class="atk">x1.3</span>`
		]
	},
	honeClaws: {
		id: 'honeClaws',
		upgrade: true, 
		name: ['Hone Claws +', 'Afilagarras +'],
		able: true,
		cost: { value: 2, type: 'mp'},
		cd: [0, 4],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				crt: [12],
				crtDmg: [25]
			}
		},
		eludible: false,
		description: [
			`
			Increase <span class="crt">+12%<img src="./assets/images/icons/crt.png" class="icon"></span> and
			<span class="crtDmg">+25%<img src="./assets/images/icons/crtDmg.png" class="icon"></span>
			`,
			`
			Aumenta <span class="crt">+12%<img src="./assets/images/icons/crt.png" class="icon"></span> y
			<span class="crtDmg">+25%<img src="./assets/images/icons/crtDmg.png" class="icon"></span>
			`
		]
	},
	ironDefense: {
		id: 'ironDefense',
		upgrade: true, 
		name: ['Iron Defense +', 'Defensa Férrea +'],
		able: true,
		cost: { value: 2, type: 'mp'},
		cd: [0, 8],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				res: [15]
			}
		},
		eludible: false,
		description: [
			`Increase <span class="res">+15%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`
			Aumenta <span class="res">+15%<img src="./assets/images/icons/res.png" class="icon"></span>
			`
		]
	},	
	calmMind: {
		id: 'calmMind',
		upgrade: true, 
		name: ['Calm Mind +', 'Paz Mental +'],
		able: true,
		cost: { value: 1, type: 'mp'},
		cd: [0, 4],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				spa: [15],
				res: [6],
			}
		},
		eludible: false,
		description: [
			`Increase <span class="spa">+15<img src="./assets/images/icons/spa.png" class="icon"></span> and
			<span class="res">+6%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`
			Aumenta <span class="spa">+15<img src="./assets/images/icons/spa.png" class="icon"></span> y
			<span class="res">+6%<img src="./assets/images/icons/res.png" class="icon"></span>
			`
		]
	},
	coaching: {
		id: 'coaching',
		upgrade: true, 
		name: ['Coaching +', 'Motivación +'],
		able: true,
		cost: { value: 1, type: 'mp'},
		cd: [0, 4],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				atk: [15],
				res: [6],
			}
		},
		eludible: false,
		description: [
			`Increase <span class="atk">+15<img src="./assets/images/icons/atk.png" class="icon"></span> and
			<span class="res">+6%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`
			Aumenta <span class="atk">+15<img src="./assets/images/icons/atk.png" class="icon"></span> y
			<span class="res">+6%<img src="./assets/images/icons/res.png" class="icon"></span>
			`
		]
	},
	growth: {
		id: 'growth',
		upgrade: true, 
		name: ['Growth +', 'Desarrollo +'],
		able: true,
		cost: { value: 2, type: 'mp'},
		cd: [0, 3],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				atk: [10],
				spa: [10],
				spe: [10]
			}
		},
		eludible: false,
		description: [
			`Increase <span class="atk">+10<img src="./assets/images/icons/atk.png" class="icon"></span>,
			<span class="spa">+10<img src="./assets/images/icons/spa.png" class="icon"></span> and
			<span class="spe">+10<img src="./assets/images/icons/spe.png" class="icon"></span>`,
			`
			Aumenta <span class="atk">+10<img src="./assets/images/icons/atk.png" class="icon"></span>,
			<span class="spa">+10<img src="./assets/images/icons/spa.png" class="icon"></span> y
			<span class="spe">+10<img src="./assets/images/icons/spe.png" class="icon"></span>
			`
		]
	},
	workUp: {
		id: 'workUp',
		upgrade: true, 
		name: ['Work Up +', 'Avivar +'],
		able: true,
		cost: { value: 1, type: 'mp'},
		uses: [2, 2],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				atk: [9],
				spa: [9]
			}
		},
		eludible: false,
		description: [
			`Increase <span class="atk">+9<img src="./assets/images/icons/atk.png" class="icon"></span> and
			<span class="spa">+9<img src="./assets/images/icons/spa.png" class="icon"></span>`,
			`
			Aumenta <span class="atk">+9<img src="./assets/images/icons/atk.png" class="icon"></span> y
			<span class="spa">+9<img src="./assets/images/icons/spa.png" class="icon"></span>
			`
		]
	},
	lifeDew: {
		id: 'lifeDew',
		upgrade: true, 
		name: ['Life Dew +', 'Gota Vital +'],
		able: true,
		cost: { value: 1, type: 'mp'},
		cd: [0, 3],
		type: 'status',
		heal: {
			atk: 0.1,
			spa: 0.1,
			spe: 0.1
		},
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				atk: [10],
				spa: [10],
				spe: [10]
			}
		},
		eludible: false,
		description: [
			`
			<span class="mix">(<span class="atk">10%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">10%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">10%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> and increase
			<span class="atk">+10<img src="./assets/images/icons/atk.png" class="icon"></span>,
			<span class="spa">+10<img src="./assets/images/icons/spa.png" class="icon"></span> and
			<span class="spe">+10<img src="./assets/images/icons/spe.png" class="icon"></span>
			`,
			`
			<span class="mix">(<span class="atk">10%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">10%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">10%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> y aumenta
			<span class="atk">+10<img src="./assets/images/icons/atk.png" class="icon"></span>,
			<span class="spa">+10<img src="./assets/images/icons/spa.png" class="icon"></span> y
			<span class="spe">+10<img src="./assets/images/icons/spe.png" class="icon"></span>
			`		
		],
		color: 'mix'
	},
	// STATUS
	doubleTeam: {
		id: 'doubleTeam',
		upgrade: true,
		name: ['Double Team +', 'Doble Equipo +'],
		able: true,
		cost: { value: 1, type: 'mp'},
		cd: [0, 5],
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
		upgrade: true, 
		name: ['Stealth Rock +', 'Trampa rocas +'],
		able: true,
		cost: { value: 1, type: 'mp'},
		cd: [0, 3],
		status: {
			data: statusData['erosion'],
			type: 'erosion',
			target: 'foe',
			value: 5,
		},
		type: 'status',
		eludible: true,
		description: [
			`Apply <span class="ero">x5 EROSION</span><br>
			${text.status.erosion.description[0]}`,
			`
			Aplica <span class="ero">x5 EROSIÓN</span><br>
			${text.status.erosion.description[1]}
			`
		]
	},
	spikes: {
		id: 'spikes',
		upgrade: true, 
		name: ['Spikes +', 'Púas +'],
		able: true,
		cost: { value: 2, type: 'mp'},
		cd: [0, 10],
		status: {
			data: statusData['frailty'],
			type: 'frailty',
			target: 'foe',
			value: 5,
		},
		type: 'status',
		eludible: true,
		description: [
			`Apply <span class="fra">x5 FRAILTY</span><br>
			${text.status.frailty.description[0]}`,
			`
			Aplica <span class="fra">x5 FLAQUEZA</span><br>
			${text.status.frailty.description[1]}
			`
		]
	},
	charge: {
		id: 'charge',
		upgrade: true, 
		name: ['Charge +', 'Carga +'],
		able: true,
		cost: { value: 1, type: 'mp'},
		uses: [2, 2],
		status: {
			data: statusData['charge'],
			type: 'charge',
			target: 'user',
			value: 4,
		},
		type: 'status',
		eludible: false,
		description: [
			`Gain <span class="cha">x4 CHARGE</span><br>
			${text.status.charge.description[0]}`,
			`
			Gana <span class="cha">x4 CARGA</span><br>
			${text.status.charge.description[1]}
			`
		],
	},
	aquaRing: {
		id: 'aquaRing',
		upgrade: true, 
		name: ['Aqua Ring +', 'Acua Aro +'],
		able: true,
		cost: { value: 1, type: 'mp'},
		cd: [0, 4],
		status: {
			data: statusData['restoration'],
			type: 'restoration',
			target: 'user',
			value: 5,
		},
		type: 'status',
		eludible: false,
		description: [
			`Apply <span class="hea">x5 RESTORATION</span><br>
			${text.status.restoration.description[0]}`,
			`
			Aplica <span class="hea">x5 RESTAURACIÓN</span><br>
			${text.status.restoration.description[1]}
			`
		],
	},
	rainDance: {
		id: 'rainDance',
		upgrade: true, 
		name: ['Rain Dance +', 'Danza Lluvia +'],
		able: true,
		cost: { value: 2, type: 'ap' },
		cd: [0, 6],
		heal: {
			spa: 0.5,
		},
		status: {
			data: statusData['wet'],
			type: 'wet',
			target: 'user',
			value: 5,
		},
		type: 'status',
		eludible: false,
		description: [
			`<span class="spa">(50%<img src="./assets/images/icons/spa.png" class="icon">)</span> and
			gain <span class="wet">x5 WET</span> <br>
			${text.status.wet.description[0]}`,
			`
			<span class="spa">(50%<img src="./assets/images/icons/spa.png" class="icon">)</span> y
			gana <span class="wet">x5 HUMEDAD</span> <br>
			${text.status.wet.description[1]}
			`
		],
		color: 'spa'
	},
	rest: {
		id: 'rest',
		upgrade: true, 
		name: ['Rest +', 'Descanso +'],
		able: true,
		cost: { value: 4, type: 'ap'},
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
		upgrade: true, 
		name: ['Roost +', 'Respiro +'],
		able: true,
		cost: { value: 1, type: 'mp'},
		cd: [0, 3],
		heal: {
			hp: 0.1,
			spe: 0.3
		},
		type: 'status',
		eludible: false,
		description: [
			`<span class="mix">(<span class="hp">10%<img src="./assets/images/icons/hp.png" class="icon"></span>+
			<span class="spe">30%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>`,
			`<span class="mix">(<span class="hp">10%<img src="./assets/images/icons/hp.png" class="icon"></span>+
			<span class="spe">30%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>`		
		],
		color: 'mix'
	},
	smog: {
		id: 'smog',
		upgrade: true, 
		name: ['Smog +', 'Polución +'],
		able: true,
		cost: { value: 2, type: 'mp'},
		uses: [1, 1],
		type: 'status',
		status: {
			data: statusData['poison'],
			type: 'poison',
			target: 'foe',
			value: 15,
		},
		eludible: true,
		description: [
			`Apply <span class="poi">x15 POISON</span> <br>
			${text.status.poison.description[0]}`,
			`
			Aplica <span class="poi">x15 VENENO</span> <br>
			${text.status.poison.description[1]}
			`
		],
	},
	purify: {
		id: 'purify',
		upgrade: true, 
		name: ['Purify +', 'Purificación +'],
		able: true,
		cost: { value: 1, type: 'mp'},
		cd: [0, 10],
		effect: {
			type: 'purifyUp',
			target: 'user',
		},
		type: 'status',
		eludible: false,
		description: [
			`Remove the <span class="poi">POISON</span> from the target and restore <img src="./assets/images/icons/hp.png" class="icon"></span> 
			equal to x2 <span class="poi">POISON</span> removed`,
			`Retira el <span class="poi">VENENO</span> del objetivo y recupera <img src="./assets/images/icons/hp.png" class="icon"></span> 
			igual al x2 <span class="poi">VENENO</span> retirado`
		]
	},
	toxic: {
		id: 'toxic',
		upgrade: true, 
		name: ['Toxic +', 'Tóxico +'],
		able: true,
		cost: { value: 2, type: 'mp'},
		cd: [0, 2],
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
		upgrade: true, 
		name: ['Ingrain +', 'Arraigo +'],
		able: true,
		cost: { value: 1, type: 'mp'},
		uses: [2, 2],
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
		upgrade: true,
		name: ['Thunder Shock +', 'Impactrueno +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 1,
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
			`<span class="spa">(100%<img src="./assets/images/icons/spa.png" class="icon">)</span> and gain <span class="cha">x2 CHARGE</span><br>
			${text.status.charge.description[0]}`,
			`
			<span class="spa">(100%<img src="./assets/images/icons/spa.png" class="icon">)</span> y gana <span class="cha">x2 CARGA</span><br>
			${text.status.charge.description[1]}
			`
		],
		color: 'spa'
	},
	zippyZap: {
		id: 'zippyZap',
		upgrade: true, 
		name: ['Zippy Zap +', 'Pikaturbo +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			spe: 1.1,
		},
		status: {
			data: statusData['charge'],
			type: 'charge',
			target: 'user',
			value: 4,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spe">(110%<img src="./assets/images/icons/spe.png" class="icon">)</span> and gain <span class="cha">x4 CHARGE</span><br>
			${text.status.charge.description[0]}`,
			`
			<span class="spe">(110%<img src="./assets/images/icons/spe.png" class="icon">)</span> y gana <span class="cha">x4 CARGA</span><br>
			${text.status.charge.description[1]}
			`
		],
		color: 'spe'
	},
	feint: {
		id: 'feint',
		upgrade: true,
		name: ['Feint +', 'Amago +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			spe: 0.7,
		},
		effect: {
			type: 'changeAP',
			target: 'user',
			value: [2]
		},
		type: 'damage',
		eludible: false,
		description: [
			`<span class="spe">(70%<img src="./assets/images/icons/spe.png" class="icon">)</span>, gain <span class="ap">2<img src="./assets/images/icons/ap.png" class="icon"></span>
			and can't be dodged`,
			`
			<span class="spe">(70%<img src="./assets/images/icons/spe.png" class="icon">)</span>, gana <span class="ap">2<img src="./assets/images/icons/ap.png" class="icon"></span>
			y no puede esquivarse
			`
		],
		color: 'spe'
	},
	headbutt: {
		id: 'headbutt',
		upgrade: true, 
		name: ['Headbutt +', 'Cabezazo +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1.4,
			res: 1.4,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">140%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="res">140%<img src="./assets/images/icons/res.png" class="icon"></span>)</span>`,
			`<span class="mix">(<span class="atk">140%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="res">140%<img src="./assets/images/icons/res.png" class="icon"></span>)</span>`
		],
		color: 'mix'
	},
	nuzzle: {
		id: 'nuzzle',
		upgrade: true, 
		name: ['Nuzzle +', 'Mof. Estático +'],
		able: true,
		cost: { value: 1, type: 'ap'},
		uses: [3, 3],
		power: {
			atk: 0.45,
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
			`<span class="atk">(45%<img src="./assets/images/icons/atk.png" class="icon">)</span> and gain <span class="cha">x2 CHARGE</span><br>
			${text.status.charge.description[0]}`,
			`
			<span class="atk">(45%<img src="./assets/images/icons/atk.png" class="icon">)</span> y gana <span class="cha">x2 CARGA</span><br>
			${text.status.charge.description[1]}
			`
		],
		color: 'atk'
	},
	thunderbolt : {
		id: 'thunderbolt',
		upgrade: true, 
		name: ['Thunderbolt +', 'Rayo +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 1.7,
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
			<span class="spa">(170%<img src="./assets/images/icons/spa.png" class="icon">)</span> and gain <span class="cha">x2 CHARGE</span><br>
			${text.status.charge.description[0]}
			`,
			`
			<span class="spa">(170%<img src="./assets/images/icons/spa.png" class="icon">)</span> y gana <span class="cha">x2 CARGA</span><br>
			${text.status.charge.description[1]}
			`
		],
		color: 'spa'
	},
	thunder: {
		id: 'thunder',
		upgrade: true, 
		name: ['Thunder +', 'Trueno +'],
		able: true,
		cost: { value: 5, type: 'ap'},
		cd: [0, 2],
		power: {
			spa: 2.8,
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
			`<span class="spa">(280%<img src="./assets/images/icons/spa.png" class="icon">)</span> and gain <span class="cha">x5 CHARGE</span><br>
			${text.status.charge.description[0]}`,
			`
			<span class="spa">(280%<img src="./assets/images/icons/spa.png" class="icon">)</span> y gana <span class="cha">x5 CARGA</span><br>
			${text.status.charge.description[1]}
			`
		],
		color: 'spa'
	},
	electroBall: {
		id: 'electroBall',
		upgrade: true, 
		name: ['Electro Ball +', 'Bola voltio +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [3, 3],
		power: {
			spa: 0.8,
			spe: 0.8,
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
			<span class="mix">(<span class="spa">80%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">80%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			and gain <span class="cha">x1 CHARGE</span><br>
			${text.status.charge.description[0]}
			`,
			`
			<span class="mix">(<span class="spa">80%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">80%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			y gana <span class="cha">x1 CARGA</span><br>
			${text.status.charge.description[1]}
			`
		],
		color: 'mix'
	},
	electroweb: {
		id: 'electroweb',
		upgrade: true, 
		name: ['Electroweb +', 'Electrotela +'],
		able: true,
		cost: { value: 1, type: 'ap'},
		uses: [1, 1],
		power: {
			spe: 0.8
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
			`<span class="spe">(80%<img src="./assets/images/icons/spe.png" class="icon">)</span> and 
			reduce <span class="spe">-3<img src="./assets/images/icons/spe.png" class="icon"></span>`,
			`
			<span class="spe">(80%<img src="./assets/images/icons/spe.png" class="icon">)</span> y 
			reduce <span class="spe">-3<img src="./assets/images/icons/spe.png" class="icon"></span>
			`
		],
		color: 'spe'
	},
	voltTackle: {
		id: 'voltTackle',
		upgrade: true, 
		name: ['Volt Tackle +', 'Plac. Eléctrico +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1.4,
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
			`<span class="atk">(140%<img src="./assets/images/icons/atk.png" class="icon">)</span> and gain <span class="cha">x3 CHARGE</span><br>
			${text.status.charge.description[0]}`,
			`
			<span class="atk">(140%<img src="./assets/images/icons/atk.png" class="icon">)</span> y gana <span class="cha">x3 CARGA</span><br>
			${text.status.charge.description[1]}
			`
		],
		color: 'atk'
	},
	discharge: {
		id: 'discharge',
		upgrade: true, 
		name: ['Discharge +', 'Chispazo +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		cd: [0, 2],
		power: {
			spa: 1.3,
		},
		booster: {
			type: 'discharge',
			target: 'user',
			value: 25
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(130%<img src="./assets/images/icons/spa.png" class="icon">)</span> and consumes all <span class="cha">CHARGES</span> 
			to increase it power by <span class="spa">25%</span> for each <span class="cha">CHARGE</span><br>`,
			`
			<span class="spa">(130%<img src="./assets/images/icons/spa.png" class="icon">)</span> y consume todas las <span class="cha">CARGAS</span> 
			para aumentar su daño un <span class="spa">25%</span> por cada <span class="cha">CARGA</span><br>
			`
		],
		color: 'spa'
	},
	voltSwitch: {
		id: 'voltSwitch',
		upgrade: true, 
		name: ['Volt Switch +', 'Voltiocambio +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 1.2,
			spe: 0.4,
		},
		status: {
			data: statusData['charge'],
			type: 'charge',
			target: 'user',
			value: 4,
		},
		type: 'damage',
		eludible: true,
		description: [
			`
			<span class="mix">(<span class="spa">120%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">40%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			and gain <span class="cha">x4 CHARGE</span><br>
			${text.status.charge.description[0]}
				`,
			`
			<span class="mix">(<span class="spa">120%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">40%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			y gana <span class="cha">x4 CARGA</span><br>
			${text.status.charge.description[1]}
			`
		],
		color: 'mix'
	},
	risingVoltage: {
		id: 'risingVoltage',
		upgrade: true, 
		name: ['Rising Voltage +', 'Alto Voltaje +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		cd: [0, 2],
		power: {
			spa: 1.4,
		},
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				spa: [12]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(140%<img src="./assets/images/icons/spa.png" class="icon">)</span> 
			and increase <span class="spa">+12<img src="./assets/images/icons/spa.png" class="icon"></span>`,
			`
			<span class="spa">(140%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y aumenta <span class="spa">+12<img src="./assets/images/icons/spa.png" class="icon"></span>
			`
		],
		color: 'spa'
	},
	chargeBeam: {
		id: 'chargeBeam',
		upgrade: true, 
		name: ['Charge Beam +', 'Rayo Carga +'],
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
				spa: [5],
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(20%<img src="./assets/images/icons/spa.png" class="icon">)</span> 
			and increase <span class="spa">+5<img src="./assets/images/icons/spa.png" class="icon"></span>`,
			`
			<span class="spa">(20%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y aumenta <span class="spa">+5<img src="./assets/images/icons/spa.png" class="icon"></span>
			`
		],
		color: 'spa'
	},
	thunderPunch: {
		id: 'thunderPunch',
		upgrade: true, 
		name: ['Thunder Punch +', 'Puño Trueno +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1.8
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
			`<span class="atk">(180%<img src="./assets/images/icons/atk.png" class="icon">)</span> and gain <span class="cha">x2 CHARGE</span><br>
			${text.status.charge.description[0]}`,
			`
			<span class="atk">(180%<img src="./assets/images/icons/atk.png" class="icon">)</span> y gana <span class="cha">x2 CARGA</span><br>
			${text.status.charge.description[1]}
			`
		],
		color: 'atk'
	},
	firePunch: {
		id: 'firePunch',
		upgrade: true, 
		name: ['Fire Punch +', 'Puño Fuego +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1.3
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
			`<span class="atk">(130%<img src="./assets/images/icons/atk.png" class="icon">)</span> and apply <span class="bur">x3 BURN</span><br>
			${text.status.burn.description[0]}`,
			`
			<span class="atk">(130%<img src="./assets/images/icons/atk.png" class="icon">)</span> y aplica <span class="bur">x3 QUEMADURA</span><br>
			${text.status.burn.description[1]}
			`
		],
		color: 'atk'
	},
	boneClub: {
		id: 'boneClub',
		upgrade: true, 
		name: ['Bone Club +', 'Hueso Palo +'],
		able: true,
		cost: { value: 3, type: 'ap' },
		uses: [2, 2],
		power: {
			atk: 1.3,
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
			`<span class="atk">(120%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			and apply <span class="ero">x2 EROSION</span> <br>
			${text.status.erosion.description[0]}`,
			`
			<span class="atk">(120%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			y aplica <span class="ero">x2 EROSIÓN</span> <br>
			${text.status.erosion.description[1]}
			`
		],
		color: 'atk'
	},
	boneRush: {
		id: 'boneRush',
		upgrade: true, 
		name: ['Bone Rush +', 'Ataque Óseo +'],
		able: true,
		cost: { value: 1, type: 'ap'},
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
		upgrade: true, 
		name: ['Bonemerang +', 'Huesomerang +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		cd: [0, 3],
		power: {
			atk: 2,
		},
		status: {
			data: statusData['erosion'],
			type: 'erosion',
			target: 'foe',
			value: 4,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(200%<img src="./assets/images/icons/atk.png" class="icon">)</span> and apply <span class="ero">x4 EROSION</span> <br>
			${text.status.erosion.description[0]}`,
			`
			<span class="atk">(200%<img src="./assets/images/icons/atk.png" class="icon">)</span> y aplica <span class="ero">x4 EROSIÓN</span> <br>
			${text.status.erosion.description[1]}
			`
		],
		color: 'atk'
	},
	shadowBone: {
		id: 'shadowBone',
		upgrade: true, 
		name: ['Shadow Bone +', 'Hueso Sombrío +'],
		able: true,
		cost: { value: 1, type: 'mp'},
		uses: [2, 2],
		power: {
			atk: 0.3,
			spa: 0.7,
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
			<span class="spa">70%<img src="./assets/images/icons/spa.png" class="icon"></span>)</span>
			and apply <span class="ero">x1 EROSION</span> <br>
			${text.status.erosion.description[0]}`,
			`
			<span class="mix">(<span class="atk">30%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">70%<img src="./assets/images/icons/spa.png" class="icon"></span>)</span>
			y aplica <span class="ero">x1 EROSIÓN</span> <br>
			${text.status.erosion.description[1]}
			`
		],
		color: 'mix'
	},
	dig: {
		id: 'dig',
		upgrade: true, 
		name: ['Dig +', 'Excavar +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		cd: [0, 5],
		power: {
			atk: 0.8,
		},
		status: {
			data: statusData['elusion'],
			type: 'elusion',
			target: 'user',
			value: 2,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(<span class="atk">80%<img src="./assets/images/icons/atk.png" class="icon"></span>)</span>
			and apply <span class="elu">x2 ELUSION</span> <br>
			${text.status.elusion.description[0]}`,
			`	
			<span class="atk">(<span class="atk">80%<img src="./assets/images/icons/atk.png" class="icon"></span>)</span>
			y aplica <span class="elu">x2 ELUSIÓN</span> <br>
			${text.status.elusion.description[1]}
			`
		],
		color: 'atk'
	},
	mudSlap: {
		id: 'mudSlap',
		upgrade: true, 
		name: ['Mud Slap +', 'Bofetón lodo +'],
		able: true,
		cost: { value: 2, type: 'ap'},
		uses: [3, 3],
		power: {
			spa: 0.9,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(90%<img src="./assets/images/icons/spa.png" class="icon">)</span>`,
			`
			<span class="spa">(90%<img src="./assets/images/icons/spa.png" class="icon">)</span>  
			`
		],
		color: 'spa'
	},
	ironHead: {
		id: 'ironHead',
		upgrade: true, 
		name: ['Iron Head +', 'Cabeza Hierro +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			res: 3.25,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="res">(325%<img src="./assets/images/icons/res.png" class="icon">)</span>`,
			`
			<span class="res">(325%<img src="./assets/images/icons/res.png" class="icon">)</span>  
			`
		],
		color: 'res'
	},
	rockClimb: {
		id: 'rockClimb',
		upgrade: true, 
		name: ['Rock Climb +', 'Treparocas +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1.2,
			spe: 0.6
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">120%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">60%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>`,
			`
			<span class="mix">(<span class="atk">120%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">60%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			`
		],
		color: 'mix'
	},
	sandTomb: {
		id: 'sandTomb',
		upgrade: true, 
		name: ['Sand Tomb +', 'Bucle Arena +'],
		able: true,
		cost: { value: 1, type: 'ap'},
		uses: [5, 5],
		power: {
			atk: 0.2,
			spe: 0.2
		},
		effect: {
			type: 'boost',
			target: 'foe',
			value: {
				res: [-4]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">20%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">20%<img src="./assets/images/icons/spa.png" class="icon"></span>)</span> and
			reduce <span class="res">-4%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`
			<span class="mix">(<span class="atk">20%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">20%<img src="./assets/images/icons/spa.png" class="icon"></span>)</span> y 
			reduce <span class="res">-4%<img src="./assets/images/icons/res.png" class="icon"></span>
			`
		],
		color: 'mix'
	},
	ironTail: {
		id: 'ironTail',
		upgrade: true, 
		name: ['Iron Tail +', 'Cola Férrea +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [1, 1],
		power: {
			atk: 1.1,
			res: 2
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
			`<span class="mix">(<span class="atk">110%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="res">200%<img src="./assets/images/icons/res.png" class="icon"></span>)</span> and 
			reduce <span class="res">-10%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`
			<span class="mix">(<span class="atk">110%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="res">200%<img src="./assets/images/icons/res.png" class="icon"></span>)</span> y 
			reduce <span class="res">-10%<img src="./assets/images/icons/res.png" class="icon"></span>
			`
		],
		color: 'mix'
	},
	bulldoze: {
		id: 'bulldoze',
		upgrade: true, 
		name: ['Bulldoze +', 'Terratemblor +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [1, 1],
		power: {
			atk: 1.6
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
			`<span class="atk">(160%<img src="./assets/images/icons/atk.png" class="icon">)</span> and 
			reduce <span class="spe">-5<img src="./assets/images/icons/spe.png" class="icon"></span>`,
			`
			<span class="atk">(160%<img src="./assets/images/icons/atk.png" class="icon">)</span> y 
			reduce <span class="spe">-5<img src="./assets/images/icons/spe.png" class="icon"></span>
			`
		],
		color: 'atk'
	},
	scorchingSands: {
		id: 'scorchingSands',
		upgrade: true, 
		name: ['Scorching Sands +', 'Arns. Ardientes +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		cd: [0, 4],
		power: {
			spa: 2.25
		},
		status: {
			data: statusData['burn'],
			type: 'burn',
			target: 'foe',
			value: 4,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(225%<img src="./assets/images/icons/spa.png" class="icon">)</span> and apply <span class="bur">x5 BURN</span><br>
			${text.status.burn.description[0]}`,
			`
			<span class="spa">(225%<img src="./assets/images/icons/spa.png" class="icon">)</span> y aplica <span class="bur">x5 QUEMADURA</span><br>
			${text.status.burn.description[1]}
			`
		],
		color: 'spa'
	},
	thief: {
		id: 'thief',
		upgrade: true, 
		name: ['Thief + ', 'Ladrón +'],
		able: true,
		cost: { value: 1, type: 'mp'},
		uses: [3, 3],
		power: {
			spe: 0.45,
		},
		effect: {
			type: 'earnGold',
			target: 'user',
			value: {
				min: 3,
				max: 6
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spe">(45%<img src="./assets/images/icons/spe.png" class="icon">)</span> and increase <span class="yellow">3-6 gold</span>.`,
			`<span class="spe">(45%<img src="./assets/images/icons/spe.png" class="icon">)</span> y genera <span class="yellow">3-6 oro</span>`
		],
		color: 'spe'
	},
	furyCutter: {
		id: 'furyCutter',
		upgrade: true, 
		name: ['Fury Cutter +', 'Corte Furia +'],
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
				atk: [3, 4, 5]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(20%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			and increase <img src="./assets/images/icons/atk.png" class="icon"> between <span class="atk">+3</span> and <span class="atk">+5</span>`,
			`
			<span class="atk">(20%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			y gana <img src="./assets/images/icons/atk.png" class="icon"> entre <span class="atk">+3</span> y <span class="atk">+5</span>
			`
		],
		color: 'atk'
	},
	wingAttack: {
		id: 'wingAttack',
		upgrade: true, 
		name: ['Wing Attack +', 'Ataque Ala +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1.5,
			spe: 0.4
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">150%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">40%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>`,
			`
			<span class="mix">(<span class="atk">150%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">40%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			`
		],
		color: 'mix'
	},
	steelWing: {
		id: 'steelWing',
		upgrade: true, 
		name: ['Steel Wing +', 'Ala Acero +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1.3,
			res: 1.3
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">130%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="res">130%<img src="./assets/images/icons/res.png" class="icon"></span>)</span>`,
			`
			<span class="mix">(<span class="atk">130%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="res">130%<img src="./assets/images/icons/res.png" class="icon"></span>)</span>
			`
		],
		color: 'mix'
	},
	slash: {
		id: 'slash',
		upgrade: true, 
		name: ['Slash +', 'Cuchillada +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		cd: [0, 2],
		power: {
			atk: 1.3,
		},
		effect: {
			type: 'boost',
			target: 'user',
			condition: 'critical',
			value: {
				atk: [10]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(130%<img src="./assets/images/icons/atk.png" class="icon">)</span> <br>
			<span class="crt">Critical:</span> Increase <span class="atk">+10<img src="./assets/images/icons/atk.png" class="icon"></span>`,
			`
			<span class="atk">(130%<img src="./assets/images/icons/atk.png" class="icon">)</span> <br>
			<span class="crt">Crítico:</span> Aumenta <span class="atk">+10<img src="./assets/images/icons/atk.png" class="icon"></span>
			`
		],
		color: 'atk'
	},
	airSlash: {
		id: 'airSlash',
		upgrade: true, 
		name: ['Air Slash +', 'Tajo Aéreo +'],
		able: true,
		cost: { value: 4, type: 'ap'},
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
		upgrade: true, 
		name: ['X Scissor +', 'Tijera X +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1.6,
		},
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				crt: [8]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(160%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			and increase <span class="crt">+8%<img src="./assets/images/icons/crt.png" class="icon"></span>`,
			`<span class="atk">(160%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			y gana <span class="crt">+8%<img src="./assets/images/icons/crt.png" class="icon"></span>`
		],
		color: 'atk'
	},
	trailblaze: {
		id: 'trailblaze',
		upgrade: true, 
		name: ['Trailblaze +', 'Abrecaminos +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 0.3,
			spe: 1
		},
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				spe: [8]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">30%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">100%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> and 
			increase <span class="spe">+8<img src="./assets/images/icons/spe.png" class="icon"></span>`,
			`	
			<span class="mix">(<span class="atk">30%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">100%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> y 
			gana <span class="spe">+8<img src="./assets/images/icons/spe.png" class="icon"></span>
			`
		],
		color: 'mix'
	},
	uTurn: {
		id: 'uTurn',
		upgrade: true, 
		name: ['U Turn +', 'Ida y Vuelta +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			spe: 1.5,
		},
		effect: {
			type: 'changeMP',
			target: 'user',
			value: [1]
		},
		type: 'damage',
		eludible: false,
		description: [
			`<span class="spe">(150%<img src="./assets/images/icons/spe.png" class="icon">)</span> 
			and increase <span class="mp">1<img src="./assets/images/icons/mp.png" class="icon"></span>`,
			`
			<span class="spe">(150%<img src="./assets/images/icons/spe.png" class="icon">)</span> 
			y gana <span class="mp">1<img src="./assets/images/icons/mp.png" class="icon"></span>
			`
		],
		color: 'spe'
	},
	pounce: {
		id: 'pounce',
		upgrade: true, 
		name: ['Pounce +', 'Brinco +'],
		able: true,
		cost: { value: 2, type: 'ap'},
		cd: [0, 3],
		power: {
			atk: 0.5,
			spe: 0.5
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
			`<span class="mix">(<span class="atk">50%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">50%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> and 
			increase <span class="elu">x1 ELUSION</span> <br>
			${text.status.elusion.description[0]}`,
			`	
			<span class="mix">(<span class="atk">50%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">50%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> y 
			gana <span class="elu">x1 ELUSIÓN</span> <br>
			${text.status.elusion.description[1]}
			`
		],
		color: 'mix'
	},
	bounce: {
		id: 'bounce',
		upgrade: true, 
		name: ['Bounce +', 'Bote +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [3, 3],
		power: {
			atk: 0.5,
			spe: 1.2
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">50%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">120%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>`,
			`	
			<span class="mix">(<span class="atk">50%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">120%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			`
		],
		color: 'mix'
	},
	dualWingbeat: {
		id: 'dualWingbeat',
		upgrade: true, 
		name: ['Dual Wingbeat +', 'Ala Bis +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 0.8,
			spe: 0.8
		},
		effect: {
			type: 'boost',
			target: 'user',
			condition: 'critical',
			value: {
				atk: [5],
				spe: [5]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`
			<span class="mix">(<span class="atk">80%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">80%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span><br>
			<span class="crt">Critical:</span> Increase <span class="atk">+5<img src="./assets/images/icons/atk.png" class="icon"></span> and 
			<span class="spe">+5<img src="./assets/images/icons/spe.png" class="icon"></span>
			`,
			`
			<span class="mix">(<span class="atk">80%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">80%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span><br>
			<span class="crt">Crítico:</span> Aumenta <span class="atk">+5<img src="./assets/images/icons/atk.png" class="icon"></span> y 
			<span class="spe">+5<img src="./assets/images/icons/spe.png" class="icon"></span>
			`
		],
		color: 'mix'
	},
	lunge: {
		id: 'lunge',
		upgrade: true, 
		name: ['Lunge +', 'Plancha +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1.1,
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
			`<span class="atk">(110%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			and reduce <span class="res">-8%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`<span class="atk">(110%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			y reduce <span class="res">-8%<img src="./assets/images/icons/res.png" class="icon"></span>
			`
		],
		color: 'atk'
	},
	bugBuzz: {
		id: 'bugBuzz',
		upgrade: true, 
		name: ['Bug Buzz +', 'Zumbido +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		cd: [0, 2],
		power: {
			spa: 2,
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
			`<span class="spa">(200%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and reduce <span class="res">-10%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`<span class="spa">(200%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y reduce <span class="res">-10%<img src="./assets/images/icons/res.png" class="icon"></span>
			`
		],
		color: 'spa'
	},
	bulletPunch: {
		id: 'bulletPunch',
		upgrade: true, 
		name: ['Bullet Punch +', 'Puño Bala +'],
		able: true,
		cost: { value: 1, type: 'ap'},
		uses: [4, 4],
		power: {
			atk: 0.45,
			spe: 0.3,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">45%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">30%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>`,
			`<span class="mix">(<span class="atk">45%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">30%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			`
		],
		color: 'mix'
	},
	metalClaw: {
		id: 'metalClaw',
		upgrade: true, 
		name: ['Metal Claw +', 'Garra Metal +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1.55,
		},
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				atk: [6]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(155%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			and increase <span class="atk">+6<img src="./assets/images/icons/atk.png" class="icon"></span>`,
			`
			<span class="atk">(155%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			y gana <span class="atk">+6<img src="./assets/images/icons/atk.png" class="icon"></span>
			`
		],
		color: 'atk'
	},
	airCutter: {
		id: 'airCutter',
		upgrade: true, 
		name: ['Air Cutter +', 'Aire Afilado +'],
		able: true,
		cost: { value: 2, type: 'ap'},
		uses: [3, 3],
		power: {
			spa: 0.8,
		},
		effect: {
			type: 'changeAP',
			target: 'user',
			condition: 'critical',
			value: [2]
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(80%<img src="./assets/images/icons/spa.png" class="icon">)</span><br>
			<span class="crt">Critical:</span> Gain <span class="ap">2<img src="./assets/images/icons/ap.png" class="icon"></span>`,
			`<span class="spa">(80%<img src="./assets/images/icons/spa.png" class="icon">)</span><br>
			<span class="crt">Crítico:</span> Gana <span class="ap">2<img src="./assets/images/icons/ap.png" class="icon"></span>`
		],
		color: 'spa'
	},
	waterGun: {
		id: 'waterGun',
		upgrade: true, 
		name: ['Water Gun +', 'Pistola Agua +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 1.2,
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
			`<span class="spa">(120%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and gain <span class="wet">x2 WET</span><br>
			${text.status.wet.description[0]}`,
			`<span class="spa">(120%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y gana <span class="wet">x2 HUMEDAD</span><br>
			${text.status.wet.description[1]}`
		],
		color: 'spa'
	},
	bubble: {
		id: 'bubble',
		upgrade: true, 
		name: ['Bubble +', 'Burbuja +'],
		able: true,
		cost: { value: 2, type: 'ap' },
		uses: [3, 3],
		power: {
			spa: 0.9,
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
			<span class="spa">(90%<img src="./assets/images/icons/spa.png" class="icon">)</span> 
 			and reduce <span class="spe">-2<img src="./assets/images/icons/spe.png" class="icon"></span>	
			`,
			`
			<span class="spa">(90%<img src="./assets/images/icons/spa.png" class="icon">)</span> 
 			y reduce <span class="spe">-2<img src="./assets/images/icons/spe.png" class="icon"></span>
			`
		],
		color: 'spa'
	},
	aquaTail: {
		id: 'aquaTail',
		upgrade: true, 
		name: ['Aqua Tail +', 'Acua Cola +'],
		able: true,
		cost: { value: 4, type: 'ap' },
		uses: [2, 2],
		power: {
			atk: 1.65,
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
			`<span class="atk">(165%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			and gain <span class="wet">x3 WET</span><br>
			${text.status.wet.description[0]}`,
			`<span class="atk">(165%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			y gana <span class="wet">x3 HUMEDAD</span><br>
			${text.status.wet.description[1]}`
		],
		color: 'atk'
	},
	iceBeam: {
		id: 'iceBeam',
		upgrade: true, 
		name: ['Ice Beam +', 'Rayo Hielo +'],
		able: true,
		cost: { value: 4, type: 'ap' },
		cd: [0, 2],
		power: {
			spa: 2.1,
		},
		status: {
			data: statusData['wet'],
			type: 'wet',
			target: 'user',
			value: 5,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(210%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and gain <span class="wet">x5 WET</span><br>
			${text.status.wet.description[0]}`,
			`<span class="spa">(210%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y gana <span class="wet">x5 HUMEDAD</span><br>
			${text.status.wet.description[1]}`
		],
		color: 'spa'
	},
	surf: {
		id: 'surf',
		upgrade: true, 
		name: ['Surf +', 'Surf +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 1.65,
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
			`<span class="spa">(165%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and gain <span class="wet">x3 WET</span><br>
			${text.status.wet.description[0]}`,
			`<span class="spa">(165%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y gana <span class="wet">x3 HUMEDAD</span><br>
			${text.status.wet.description[1]}`
		],
		color: 'spa'
	},
	playRough: {
		id: 'playRough',
		upgrade: true, 
		name: ['Play Rough +', 'Carantoña +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [3, 3],
		power: {
			atk: 1.6,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(160%<img src="./assets/images/icons/atk.png" class="icon">)</span>`,
			`<span class="atk">(160%<img src="./assets/images/icons/atk.png" class="icon">)</span>`
		],
		color: 'atk'
	},
	scald: {
		id: 'scald',
		upgrade: true, 
		name: ['Scald +', 'Escaldar +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		cd: [0, 2],
		power: {
			spa: 0.95,
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
			`<span class="spa">(95%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and apply <span class="bur">x2 BURN</span><br>
			${text.status.burn.description[0]}`,
			`<span class="spa">(95%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y aplica <span class="bur">x2 QUEMADURA</span><br>
			${text.status.burn.description[1]}`
		],
		color: 'spa'
	},
	drainingKiss: {
		id: 'drainingKiss',
		upgrade: true, 
		name: ['Draining Kiss +', 'Beso Drenaje +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [1, 1],
		power: {
			spa: 0.4,
		},
		effect: {
			type: 'restoreHP',
			target: 'user',
			value: 1.5
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(40%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and heals 150% of the damage dealt`,
			`
			<span class="spa">(40%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y cura el 150% del daño causado
			`
		],
		color: 'spa'
	},
	liquidation: {
		id: 'liquidation',
		upgrade: true, 
		name: ['Liquidation +', 'Hidroariete +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1.2,
			hp: 0.1
		},
		effect: {
			type: 'boost',
			target: 'foe',
			value: {
				res: [-6]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">120%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="hp">10%<img src="./assets/images/icons/hp.png" class="icon"></span>)</span>
			and reduce <span class="res">-6%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`<span class="mix">(<span class="atk">120%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="hp">10%<img src="./assets/images/icons/hp.png" class="icon"></span>)</span>
			y reduce <span class="res">-6%<img src="./assets/images/icons/res.png" class="icon"></span>`
		],
		color: 'mix'
	},
	icePunch: {
		id: 'icePunch',
		upgrade: true, 
		name: ['Ice Punch +', 'Puño Hielo +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1.8
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
			`<span class="atk">(180%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			and gain <span class="wet">x3 WET</span><br>
			${text.status.wet.description[0]}`,
			`
			<span class="atk">(180%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			y gana <span class="wet">x3 HUMEDAD</span><br>
			${text.status.wet.description[1]}
			`
		],
		color: 'atk'
	},
	waterfall: {
		id: 'waterfall',
		upgrade: true, 
		name: ['Waterfall +', 'Cascada +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [1, 1],
		power: {
			atk: 0.55,
			spa: 0.55,
			spe: 0.55
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
			`<span class="mix">(<span class="atk">55%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">55%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">55%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> and gain <span class="wet">x3 WET</span><br>
			${text.status.wet.description[0]}`,
			`	
			<span class="mix">(<span class="atk">55%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">55%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">55%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> y gana <span class="wet">x3 HUMEDAD</span><br>
			${text.status.wet.description[1]}`
		],
		color: 'mix'
	},
	bodySlam: {
		id: 'bodySlam',
		upgrade: true, 
		name: ['Body Slam +', 'Golpe Cuerpo +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1,
			hp: 0.2,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">100%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="hp">20%<img src="./assets/images/icons/hp.png" class="icon"></span>)</span>`,
			`<span class="mix">(<span class="atk">100%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="hp">20%<img src="./assets/images/icons/hp.png" class="icon"></span>)</span>`
		],
		color: 'mix'
	},
	reversal: {
		id: 'reversal',
		upgrade: true, 
		name: ['Reversal +', 'Inversión +'],
		able: true,
		cost: { value: 2, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 0.35,
			hp: 0.1,
		},
		type: 'damage',

		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">35%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="hp">10%<img src="./assets/images/icons/hp.png" class="icon"></span>)</span>`,
			`<span class="mix">(<span class="atk">35%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="hp">10%<img src="./assets/images/icons/hp.png" class="icon"></span>)</span>
			`
		],
		color: 'mix'
	},
	icyWind: {
		id: 'icyWind',
		upgrade: true, 
		name: ['Icy Wind +', 'Viento Hielo +'],
		able: true,
		cost: { value: 2, type: 'ap'},
		uses: [3, 3],
		power: {
			spa: 0.7,
			spe: 0.3
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
			`<span class="mix">(<span class="spa">70%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">30%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			and gain <span class="wet">x2 WET</span><br>
			${text.status.wet.description[0]}`,
			`<span class="mix">(<span class="spa">70%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">30%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			y gana <span class="wet">x2 HUMEDAD</span><br>
			${text.status.wet.description[1]}`
		],
		color: 'mix'
	},
	iceShard: {
		id: 'iceShard',
		upgrade: true, 
		name: ['Ice Shard +', 'Esquirla Helada +'],
		able: true,
		cost: { value: 1, type: 'mp'},
		uses: [4, 4],
		power: {
			atk: 0.2,
			spa: 0.2
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
			`<span class="mix">(<span class="atk">20%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">20%<img src="./assets/images/icons/spa.png" class="icon"></span>)</span>
			and gain <span class="wet">x1 WET</span><br>
			${text.status.wet.description[0]}`,
			`<span class="mix">(<span class="atk">20%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">20%<img src="./assets/images/icons/spa.png" class="icon"></span>)</span>
			y gana <span class="wet">x1 HUMEDAD</span><br>
			${text.status.wet.description[1]}`
		],
		color: 'mix'
	},
	darkPulse: {
		id: 'darkPulse',
		upgrade: true, 
		name: ['Dark Pulse +', 'Pulso Umbrío +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		cd: [0, 2],
		power: {
			spa: 1.8,
		},
		status: {
			data: statusData['fear'],
			type: 'fear',
			target: 'foe',
			value: 4,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(180%<img src="./assets/images/icons/spa.png" class="icon">)</span> 
			and apply <span class="fea">x4 FEAR</span><br>
			${text.status.fear.description[0]}`,
			`<span class="spa">(180%<img src="./assets/images/icons/spa.png" class="icon">)</span> 
			y aplica <span class="fea">x4 MIEDO</span><br>
			${text.status.fear.description[1]}`
		],
		color: 'spa'
	},
	nightSlash: {
		id: 'nightSlash',
		upgrade: true, 
		name: ['Night Slash +', 'Tajo Umbrío +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 0.7,
			spe: 0.5
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
			`<span class="mix">(<span class="atk">70%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">50%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> and apply <span class="fea">x3 FEAR</span><br>
			${text.status.fear.description[0]}`,
			`<span class="mix">(<span class="atk">70%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">50%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> y aplica <span class="fea">x3 MIEDO</span><br>
			${text.status.fear.description[1]}`
		],
		color: 'mix'
	},
	direClaw: {
		id: 'direClaw',
		upgrade: true, 
		name: ['Dire Claw +', 'Garra Nociva +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [1, 1],
		power: {
			atk: 1.1,
		},
		status: {
			data: statusData['poison'],
			type: 'poison',
			target: 'foe',
			value: 18,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(110%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			and apply <span class="poi">x18 POISON</span> <br>
			${text.status.poison.description[0]}`,
			`
			<span class="atk">(110%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			y aplica <span class="poi">x18 VENENO</span> <br>
			${text.status.poison.description[1]}
			`
		],
		color: 'atk'
	},
	shadowClaw: {
		id: 'shadowClaw',
		upgrade: true, 
		name: ['Shadow Claw +', 'Garra Umbría +'],
		able: true,
		cost: { value: 5, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 2.45,
		},
		status: {
			data: statusData['fear'],
			type: 'fear',
			target: 'foe',
			value: 5,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(245%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			and apply <span class="fea">x5 FEAR</span><br>
			${text.status.fear.description[0]}`,
			`<span class="atk">(245%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			y aplica <span class="fea">x5 MIEDO</span><br>
			${text.status.fear.description[1]}`
		],
		color: 'atk'
	},
	powerTrip: {
		id: 'powerTrip',
		upgrade: true, 
		name: ['Power Trip +', 'Chulería +'],
		able: true,
		cost: { value: 2, type: 'ap'},
		uses: [3, 3],
		power: {
			atk: 0.2,
			spa: 0.2,
			spe: 0.4,
		},
		effect: {
			type: 'boost',
			target: 'user',
			condition: 'critical',
			value: {
				atk: [4],
				spa: [4],
				spe: [4]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">20%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">20%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">40%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> <br>
			<span class="crt">Critical:</span> Increase <span class="atk">+4<img src="./assets/images/icons/atk.png" class="icon"></span>,
			<span class="spa">+4<img src="./assets/images/icons/spa.png" class="icon"></span> and <span class="spe">+4<img src="./assets/images/icons/spe.png" class="icon"></span>`,
			`
			<span class="mix">(<span class="atk">20%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">20%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">40%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> <br>
			<span class="crt">Crítico:</span> Aumenta <span class="atk">+4<img src="./assets/images/icons/atk.png" class="icon"></span>,
			<span class="spa">+4<img src="./assets/images/icons/spa.png" class="icon"></span> y <span class="spe">+4<img src="./assets/images/icons/spe.png" class="icon"></span>
			`
		],
		color: 'mix'
	},
	pluck: {
		id: 'pluck',
		upgrade: true, 
		name: ['Pluck +', 'Picoteo +'],
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
	fly: {
		id: 'fly',
		upgrade: true, 
		name: ['Fly +', 'Vuelo +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		cd: [0, 3],
		power: {
			atk: 0.7,
			spe: 0.4
		},
		status: {
			data: statusData['elusion'],
			type: 'elusion',
			target: 'user',
			value: 2,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">70%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">40%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> 
			and gain <span class="elu">x2 ELUSION</span> <br>
			${text.status.elusion.description[0]}`,
			`	
			<span class="mix">(<span class="atk">70%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">40%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> y 
			gana <span class="elu">x2 ELUSIÓN</span> <br>
			${text.status.elusion.description[1]}
			`
		],
		color: 'mix'
	},
	braveBird: {
		id: 'braveBird',
		upgrade: true, 
		name: ['Brave Bird +', 'Pájaro Osado +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		cd: [0, 3],
		power: {
			atk: 1.5,
			spe: 1.5
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">150%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">150%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>`,
			`	
			<span class="mix">(<span class="atk">150%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">150%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			`
		],
		color: 'mix'
	},
	aerialAce: {
		id: 'aerialAce',
		upgrade: true, 
		name: ['Aerial Ace +', 'Golpe Aéreo +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1,
			spe: 0.5
		},
		type: 'damage',
		eludible: false,
		description: [
			`<span class="mix">(<span class="atk">100%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">50%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			and can't be dodged`,
			`
			<span class="mix">(<span class="atk">100%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">50%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			y no puede esquivarse
			`
		],
		color: 'mix'
	},
	skyAttack: {
		id: 'skyAttack',
		upgrade: true, 
		name: ['Sky Attack +', 'Ataque Aéreo +'],
		able: true,
		cost: { value: 5, type: 'ap'},
		cd: [0, 3],
		power: {
			atk: 3.4,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(340%<img src="./assets/images/icons/atk.png" class="icon">)</span>`,
			`<span class="atk">(340%<img src="./assets/images/icons/atk.png" class="icon">)</span>`
		],
		color: 'atk'
	},
	twister: {
		id: 'twister',
		upgrade: true, 
		name: ['Twister +', 'Ciclón +'],
		able: true,
		cost: { value: 1, type: 'mp'},
		uses: [3, 3],
		power: {
			atk: 0.2,
			spa: 0.2,
			spe: 0.2,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">20%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">20%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">20%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>`,
			`
			<span class="mix">(<span class="atk">20%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">20%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">20%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			`
		],
		color: 'mix'
	},
	heatWave: {
		id: 'heatWave',
		upgrade: true, 
		name: ['Heat Wave +', 'Onda Ígnea +'],
		able: true,
		cost: { value: 3, type: 'mp'},
		uses: [1, 1],
		power: {
			spa: 1.6
		},
		status: {
			data: statusData['burn'],
			type: 'burn',
			target: 'foe',
			value: 5,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(160%<img src="./assets/images/icons/spa.png" class="icon">)</span> and apply <span class="bur">x5 BURN</span><br>
			${text.status.burn.description[0]}`,
			`
			<span class="spa">(160%<img src="./assets/images/icons/spa.png" class="icon">)</span> y aplica <span class="bur">x5 QUEMADURA</span><br>
			${text.status.burn.description[1]}
			`
		],
		color: 'spa'
	},
	pinMissile: {
		id: 'pinMissile',
		upgrade: true, 
		name: ['Pin Missile +', 'Pin Misil +'],
		able: true,
		cost: { value: 1, type: 'mp'},
		uses: [5, 5],
		power: {
			spe: 0.25,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spe">(25%<img src="./assets/images/icons/spe.png" class="icon">)</span>`,
			`
			<span class="spe">(25%<img src="./assets/images/icons/spe.png" class="icon">)</span>
			`
		],
		color: 'spe'
	},
	grassKnot: {
		id: 'grassKnot',
		upgrade: true, 
		name: ['Grass Knot +', 'Hierba Lazo +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 0.7,
			spa: 0.7
		},
		status: {
			data: statusData['frailty'],
			type: 'frailty',
			target: 'foe',
			value: 4,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">70%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">70%<img src="./assets/images/icons/spa.png" class="icon"></span>)</span> and apply <span class="fra">x4 FRAILTY</span><br>
			${text.status.frailty.description[0]}`,
			`
			<span class="mix">(<span class="atk">70%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">70%<img src="./assets/images/icons/spa.png" class="icon"></span>)</span> y aplica <span class="fra">x4 FLAQUEZA</span><br>
			${text.status.frailty.description[1]}
			`
		],
		color: 'mix'
	},
	magicalLeaf: {
		id: 'magicalLeaf',
		upgrade: true, 
		name: ['Magical Leaf +', 'Hoja Mágica +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 1.1,
		},
		effect: {
			type: 'boost',
			target: 'user',
			condition: 'critical',
			value: {
				spa: [12]
			}
		},
		type: 'damage',
		eludible: false,
		description: [
			`<span class="spa">(110%<img src="./assets/images/icons/spa.png" class="icon">)</span> and can't be dodged <br>
			<span class="crt">Critical:</span> Increase <span class="spa">+12<img src="./assets/images/icons/spa.png" class="icon"></span>`,
			`
			<span class="spa">(110%<img src="./assets/images/icons/spa.png" class="icon">)</span> y no puede esquivarse <br>
			<span class="crt">Crítico:</span> Aumenta <span class="spa">+12<img src="./assets/images/icons/spa.png" class="icon"></span>
			`
		],
		color: 'spa'
	},
	energyBall: {
		id: 'energyBall',
		upgrade: true, 
		name: ['Energy Ball +', 'Energibola +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [1, 1],
		power: {
			spa: 2,
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
			`<span class="spa">(200%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and reduce <span class="res">-8%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`<span class="spa">(200%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y reduce <span class="res">-8%<img src="./assets/images/icons/res.png" class="icon"></span>`
		],
		color: 'spa'
	},
	disarmingVoice: {
		id: 'disarmingVoice',
		upgrade: true, 
		name: ['Disarming Voice +', 'Voz Caut. +'],
		able: true,
		cost: { value: 2, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 1,
		},
		effect: {
			type: 'boost',
			target: 'foe',
			value: {
				res: [-4]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(100%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and reduce <span class="res">-4%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`<span class="spa">(100%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y reduce <span class="res">-4%<img src="./assets/images/icons/res.png" class="icon"></span>`
		],
		color: 'spa'
	},
	needleArm: {
		id: 'needleArm',
		upgrade: true, 
		name: ['Needle Arm +', 'Brazo Pincho +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1.1,
		},
		status: {
			data: statusData['frailty'],
			type: 'frailty',
			target: 'foe',
			value: 6,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(110%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			and apply <span class="fra">x6 FRAILTY</span><br>
			${text.status.frailty.description[0]}`,
			`
			<span class="atk">(110%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			y aplica <span class="fra">x6 FLAQUEZA</span><br>
			${text.status.frailty.description[1]}
			`
		],
		color: 'atk'
	},
	steamroller: {
		id: 'steamroller',
		upgrade: true, 
		name: ['Steamroller +', 'Rodillo Púas +'],
		able: true,
		cost: { value: 5, type: 'ap'},
		cd: [0, 4],
		power: {
			atk: 1.75,
		},
		status: {
			data: statusData['frailty'],
			type: 'frailty',
			target: 'foe',
			value: 12,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(175%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			and apply <span class="fra">x12 FRAILTY</span><br>
			${text.status.frailty.description[0]}`,
			`
			<span class="atk">(175%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			y aplica <span class="fra">x12 FLAQUEZA</span><br>
			${text.status.frailty.description[1]}
			`
		],
		color: 'atk'
	},
	bulletSeed: {
		id: 'bulletSeed',
		upgrade: true, 
		name: ['Bullet Seed +', 'Semilladora +'],
		able: true,
		cost: { value: 1, type: 'ap'},
		uses: [5, 5],
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
	poisonJab: {
		id: 'poisonJab',
		upgrade: true, 
		name: ['Poison Jab +', 'Puya nociva +'],
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
			value: 8,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(75%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			and apply <span class="poi">x8 POISON</span> <br>
			${text.status.poison.description[0]}`,
			`
			<span class="atk">(75%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			y aplica <span class="poi">x8 VENENO</span> <br>
			${text.status.poison.description[1]}
			`
		],
		color: 'atk'
	},
	gust: {
		id: 'gust',
		upgrade: true, 
		name: ['Gust +', 'Tornado +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 0.7,
			spe: 0.3
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
			<span class="spe">30%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> and 
			increase <span class="spe">+4<img src="./assets/images/icons/spe.png" class="icon"></span>`,
			`
			<span class="mix">(<span class="spa">70%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">30%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span> y 
			gana <span class="spe">+4<img src="./assets/images/icons/spe.png" class="icon"></span>
			`
		],
		color: 'mix'
	},
	absorb: {
		id: 'absorb',
		upgrade: true, 
		name: ['Absorb +', 'Absorber +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 0.5,
		},
		effect: {
			type: 'restoreHP',
			target: 'user',
			value: 1
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(50%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and heals 100% of the damage dealt`,
			`
			<span class="spa">(50%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y cura el 100% del daño causado
			`
		],
		color: 'spa'
	},
	megaDrain: {
		id: 'megaDrain',
		upgrade: true, 
		name: ['Mega Drain +', 'Megadrenado +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [1, 1],
		power: {
			spa: 0.9,
		},
		effect: {
			type: 'restoreHP',
			target: 'user',
			value: 1
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(90%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and heals 100% of the damage dealt`,
			`
			<span class="spa">(90%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y cura el 100% del daño causado
			`
		],
		color: 'spa'
	},
	gigaDrain: {
		id: 'gigaDrain',
		upgrade: true, 
		name: ['Giga Drain +', 'Gigadrenado +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		cd: [0, 2],
		power: {
			spa: 1.2,
		},
		effect: {
			type: 'restoreHP',
			target: 'user',
			value: 1.5
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(120%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and heals 150% of the damage dealt`,
			`
			<span class="spa">(120%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y cura el 150% del daño causado
			`
		],
		color: 'spa'
	},
	drainPunch: {
		id: 'drainPunch',
		upgrade: true, 
		name: ['Drain Punch +', 'Puño Drenaje +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 0.65,
		},
		effect: {
			type: 'restoreHP',
			target: 'user',
			value: 0.5
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(65%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			and heals 50% of the damage dealt`,
			`
			<span class="atk">(65%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			y cura el 50% del daño causado
			`
		],
		color: 'atk'
	},
	powerUpPunch: {
		id: 'powerUpPunch',
		upgrade: true, 
		name: ['PowerUp Punch +', 'Puño Incremento +'],
		able: true,
		cost: { value: 2, type: 'ap'},
		uses: [3, 3],
		power: {
			atk: 0.55,
		},
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				atk: [5]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(55%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			and increase <span class="atk">+5<img src="./assets/images/icons/atk.png" class="icon"></span>`,
			`
			<span class="atk">(55%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			y gana <span class="atk">+5<img src="./assets/images/icons/atk.png" class="icon"></span>
			`
		],
		color: 'atk'
	},
	sludgeBomb: {
		id: 'sludgeBomb',
		upgrade: true, 
		name: ['Sludge Bomb +', 'Bomba Lodo +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [1, 1],
		power: {
			spa: 1.7,
		},
		status: {
			data: statusData['poison'],
			type: 'poison',
			target: 'foe',
			value: 10,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(170%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and apply <span class="poi">x10 POISON</span> <br>
			${text.status.poison.description[0]}`,
			`
			<span class="spa">(170%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y aplica <span class="poi">x10 VENENO</span> <br>
			${text.status.poison.description[1]}
			`
		],
		color: 'spa'
	},
	sludgeWave: {
		id: 'sludgeWave',
		upgrade: true, 
		name: ['Sludge Wave +', 'Onda Tóxica +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 1.5,
		},
		status: {
			data: statusData['poison'],
			type: 'poison',
			target: 'foe',
			value: 4,
		},
		type: 'damage',
		eludible: true,
		description: [
			`
			<span class="spa">(150%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and apply <span class="poi">x4 POISON</span> <br>
			${text.status.poison.description[0]}
			`,
			`
			<span class="spa">(150%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y aplica <span class="poi">x4 VENENO</span> <br>
			${text.status.poison.description[1]}
			`
		],
		color: 'spa'
	},
	venoshock: {
		id: 'venoshock',
		upgrade: true, 
		name: ['Venoshock +', 'Carga Tóxica +'],
		able: true,
		cost: { value: 2, type: 'mp'},
		cd: [0, 2],
		power: {
			spa: 0.6,
		},
		effect: {
			type: 'applyPoison',
			target: 'foe',
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(60%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and activate the <span class="poi">POISON</span> charges without consuming them`,
			`
			<span class="spa">(60%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y activa las cargas de <span class="poi">VENENO</span> sin consumirlas
			`
		],
		color: 'spa'
	},
	poisonFang: {
		id: 'poisonFang',
		upgrade: true, 
		name: ['Poison Fang +', 'Colmillo Veneno +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [3, 3],
		power: {
			atk: 1.3,
		},
		status: {
			data: statusData['poison'],
			type: 'poison',
			target: 'foe',
			value: 4,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(130%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			and apply <span class="poi">x4 POISON</span> <br>
			${text.status.poison.description[0]}`,
			`
			<span class="atk">(130%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			y aplica <span class="poi">x4 VENENO</span> <br>
			${text.status.poison.description[1]}
			`
		],
		color: 'atk'
	},
	pursuit: {
		id: 'pursuit',
		upgrade: true, 
		name: ['Pursuit +', 'Persecución +'],
		able: true,
		cost: { value: 2, type: 'ap'},
		uses: [3, 3],
		power: {
			spe: 1.1,
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
			`<span class="spe">(110%<img src="./assets/images/icons/spe.png" class="icon">)</span> 
			and increase <span class="spe">+4<img src="./assets/images/icons/spe.png" class="icon"></span>`,
			`
			<span class="spe">(110%<img src="./assets/images/icons/spe.png" class="icon">)</span> 
			y gana <span class="spe">+4<img src="./assets/images/icons/spe.png" class="icon"></span>
			`
		],
		color: 'spe'
	},
	closeCombat: {
		id: 'closeCombat',
		upgrade: true, 
		name: ['Close Combat +', 'A Bocajarro +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		cd: [0, 2],
		power: {
			atk: 3.5,
		},
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				res: [-10]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(350%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			but reduce <span class="res">-10%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`
			<span class="atk">(350%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			pero reduce <span class="res">-10%<img src="./assets/images/icons/res.png" class="icon"></span>
			`
		],
		color: 'atk'
	},
	extremeSpeed: {
		id: 'extremeSpeed',
		upgrade: true, 
		name: ['Extreme Speed +', 'Vel. Extrema +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [1, 1],
		power: {
			spe: 2,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spe">(200%<img src="./assets/images/icons/spe.png" class="icon">)</span>`,
			`
			<span class="spe">(200%<img src="./assets/images/icons/spe.png" class="icon">)</span>
			`
		],
		color: 'spe'
	},
	drillPeck: {
		id: 'drillPeck',
		upgrade: true, 
		name: ['Drill Peck +', 'Pico Taladro +'],
		able: true,
		cost: { value: 3, type: 'ap'},
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
		upgrade: true, 
		name: ['Aura Sphere +', 'Esfera Aural +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		cd: [0, 2],
		power: {
			atk: 0.8,
			spa: 1.4,
			spe: 0.8,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">80%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">140%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">80%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>`,
			`<span class="mix">(<span class="atk">80%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">140%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">80%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>`
		],
		color: 'mix'
	},
	zenHeadbutt: {
		id: 'zenHeadbutt',
		upgrade: true, 
		name: ['Zen Headbutt +', 'Cabezazo Zen +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 0.4,
			spa: 1.2,
			res: 0.8,

		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="atk">40%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">120%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="res">80%<img src="./assets/images/icons/res.png" class="icon"></span>)</span>`,
			`<span class="mix">(<span class="atk">40%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">120%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="res">80%<img src="./assets/images/icons/res.png" class="icon"></span>)</span>`
		],
		color: 'mix'
	},
	forcePalm: {
		id: 'forcePalm',
		upgrade: true, 
		name: ['Force Palm +', 'Palmeo +'],
		able: true,
		cost: { value: 1, type: 'mp'},
		uses: [3, 3],
		power: {
			atk: 0.4,
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
			<span class="atk">(40%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			and gain <span class="ap">1<img src="./assets/images/icons/ap.png" class="icon"></span>
			`,
			`
			<span class="atk">(40%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
			y gana <span class="ap">1<img src="./assets/images/icons/ap.png" class="icon"></span>
			`
		],
		color: 'atk'
	},
	meteorMash: {
		id: 'meteorMash',
		upgrade: true, 
		name: ['Meteor Mash +', 'Puño Meteoro +'],
		able: true,
		cost: { value: 2, type: 'ap'},
		uses: [3, 3],
		power: {
			atk: 0.45,
			spe: 0.45
		},
		type: 'damage',
		eludible: false,
		description: [
			`
			<span class="mix">(<span class="atk">45%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">45%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			`,
			`
			<span class="mix">(<span class="atk">45%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spe">45%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			`	
		],
		color: 'mix'
	},
	flashCannon: {
		id: 'flashCannon',
		upgrade: true, 
		name: ['Flash Cannon +', 'Foco Resplandor +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 1.35,
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
			`<span class="spa">(135%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			and reduce <span class="res">-8%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`<span class="spa">(135%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y reduce <span class="res">-8%<img src="./assets/images/icons/res.png" class="icon"></span>`
		],
		color: 'spa'
	},
	// EXTRA
	rockPolish: {
		id: 'rockPolish',
		upgrade: true, 
		name: ['Rock Polish +', 'Pulimiento +'],
		able: true,
		cost: { value: 1, type: 'mp'},
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
		upgrade: true, 
		name: ['Defense Curl +', 'Rizo Defensa +'],
		able: true,
		cost: { value: 1, type: 'mp'},
		uses: [2, 2],
		type: 'status',
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				res: [5]
			}
		},
		eludible: false,
		description: [
			`Increase <span class="res">+5%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`Aumenta <span class="res">+5%<img src="./assets/images/icons/res.png" class="icon"></span>`
		],
	},
	wrap: {
		id: 'wrap',
		upgrade: true, 
		name: ['Wrap +', 'Constricción +'],
		able: true,
		cost: { value: 1, type: 'ap'},
		uses: [3, 3],
		power: {
			atk: 0.6,
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
			<span class="atk">(60%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
 			and reduce <span class="spe">-3<img src="./assets/images/icons/spe.png" class="icon"></span>	
			`,
			`
			<span class="atk">(60%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
 			y reduce <span class="spe">-3<img src="./assets/images/icons/spe.png" class="icon"></span>
			`
		],
		color: 'atk'
	},
	gyroBall: {
		id: 'gyroBall',
		upgrade: true, 
		name: ['Gyro Ball +', 'Giro Bola +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			spe: 0.8,
			res: 1.5,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="spe">80%<img src="./assets/images/icons/spe.png" class="icon"></span>+
			<span class="res">150%<img src="./assets/images/icons/res.png" class="icon"></span>)</span>`,
			`<span class="mix">(<span class="spe">80%<img src="./assets/images/icons/spe.png" class="icon"></span>+
			<span class="res">150%<img src="./assets/images/icons/res.png" class="icon"></span>)</span>`
		],
		color: 'mix'
	},
	rockSmash: {
		id: 'rockSmash',
		upgrade: true, 
		name: ['Rock Smash +', 'Golpe Roca +'],
		able: true,
		cost: { value: 3, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 1.2,
			res: 1.2,
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
			<span class="res">120%<img src="./assets/images/icons/res.png" class="icon"></span>)</span>
			and reduce <span class="res">-5%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`<span class="mix">(<span class="atk">120%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="res">120%<img src="./assets/images/icons/res.png" class="icon"></span>)</span>
			y reduce <span class="res">-5%<img src="./assets/images/icons/res.png" class="icon"></span>`
		],
		color: 'mix'
	},
	shellSmash: {
		id: 'shellSmash',
		upgrade: true, 
		name: ['Shell Smash +', 'Rompecoraza +'],
		cost: { value: 3, type: 'mp'},
		cd: [0, 10],
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				atk: [30],
				spe: [30],
				res: [-30],
			}
		},
		type: 'status',
		eludible: false,
		description: [
			`Increase <span class="atk">+30<img src="./assets/images/icons/atk.png" class="icon"></span> and
			<span class="spe">+30<img src="./assets/images/icons/spe.png" class="icon"></span> 
			but reduce <span class="res">-30%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`
			Aumenta <span class="atk">+30<img src="./assets/images/icons/atk.png" class="icon"></span> y
			<span class="spe">+30<img src="./assets/images/icons/spe.png" class="icon"></span>
			pero reduce <span class="res">-30%<img src="./assets/images/icons/res.png" class="icon"></span>
			`
		]
	},
	doubleEdge: {
		id: 'doubleEdge',
		upgrade: true, 
		name: ['Double-Edge +', 'Doble Filo +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		cd: [0, 3],
		power: {
			res: 5,
		},
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				res: [-12]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="res">(500%<img src="./assets/images/icons/res.png" class="icon">)</span>
			but reduce <span class="res">-12%<img src="./assets/images/icons/res.png" class="icon"></span>`,
			`
			<span class="res">(500%<img src="./assets/images/icons/res.png" class="icon">)</span> 
			pero reduce <span class="res">-12%<img src="./assets/images/icons/res.png" class="icon"></span> 
			`
		],
		color: 'res'
	},
	stealRoller: {
		id: 'stealRoller',
		upgrade: true, 
		name: ['Steel Roller +', 'A. Férreo +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		cd: [0, 3],
		power: {
			res: 1.65,
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
			`<span class="res">(165%<img src="./assets/images/icons/res.png" class="icon">)</span>
			and apply <span class="fra">x8 FRAILTY</span><br>
			${text.status.frailty.description[0]}`,
			`
			<span class="res">(165%<img src="./assets/images/icons/res.png" class="icon">)</span>
			y aplica <span class="fra">x8 FLAQUEZA</span><br>
			${text.status.frailty.description[1]}
			`
		],
		color: 'res'
	},
	struggleBug: {
		id: 'struggleBug',
		upgrade: true, 
		name: ['Struggle Bug +', 'Estoicismo +'],
		able: true,
		cost: { value: 2, type: 'ap'},
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
		upgrade: true, 
		name: ['Ancient Power +', 'Poder Pasado +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			spa: 1.5,
			res: 1
		},
		status: {
			data: statusData['erosion'],
			type: 'erosion',
			target: 'foe',
			value: 3,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="mix">(<span class="spa">150%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="res">100%<img src="./assets/images/icons/res.png" class="icon"></span>)</span>
			and apply <span class="ero">x3 EROSION</span> <br>
			${text.status.erosion.description[0]}`,
			`<span class="mix">(<span class="spa">150%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="res">100%<img src="./assets/images/icons/res.png" class="icon"></span>)</span>
			y aplica <span class="ero">x3 EROSIÓN</span> <br>
			${text.status.erosion.description[1]}`
		],
		color: 'mix'
	},
	shadowBall: {
		id: 'shadowBall',
		upgrade: true, 
		name: ['Shadow Ball +', 'Bola Sombra +'],
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
			spa: 1.2
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spa">(120%<img src="./assets/images/icons/spa.png" class="icon">)</span> 
			and increase <span class="spa">+6<img src="./assets/images/icons/spa.png" class="icon"></span>`,
			`
			<span class="spa">(120%<img src="./assets/images/icons/spa.png" class="icon">)</span>
			y aumenta <span class="spa">+6<img src="./assets/images/icons/spa.png" class="icon"></span>
			`
		],
		color: 'spa'
	},
	shadowSneak: {
		id: 'shadowSneak',
		upgrade: true, 
		name: ['Shadow Sneak +', 'Sombra Vil +'],
		able: true,
		cost: { value: 2, type: 'ap'},
		uses: [3, 3],
		power: {
			spe: 0.5,
		},
		effect: {
			type: 'boost',
			target: 'user',
			value: {
				spe: [2, 3, 4]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="spe">(50%<img src="./assets/images/icons/spe.png" class="icon">)</span>
			and increase <img src="./assets/images/icons/spe.png" class="icon"> between <span class="spe">+2</span> and <span class="spe">+4</span>`,
			`
			<span class="spe">(50%<img src="./assets/images/icons/spe.png" class="icon">)</span>
			y gana <img src="./assets/images/icons/spe.png" class="icon"> entre <span class="spe">+2</span> y <span class="spe">+4</span>
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
		uses: [2, 2],
		type: 'status',
		effect: {
			type: 'meanLookUp',
			target: 'user',
		},
		eludible: false,
		description: [
			`
			Increase one random stat by <span class="mix">15</span>, and reduce the remaining stats by <span class="mix">-5</span>
			<span class="mix">
			(<img src="./assets/images/icons/atk.png" class="icon">, <img src="./assets/images/icons/spa.png" class="icon"> or <img src="./assets/images/icons/spe.png" class="icon">)
			</span>
			`,
			`
			Aumenta en <span class="mix">15</span> un stat aleatorio, reduce en <span class="mix">-5</span> los stat restantes
			<span class="mix">
			(<img src="./assets/images/icons/atk.png" class="icon">, <img src="./assets/images/icons/spa.png" class="icon"> o <img src="./assets/images/icons/spe.png" class="icon">)
			</span>
			`
		],
	},
	powerGem: {
		id: 'powerGem',
		upgrade: true, 
		name: ['Power Gem +', 'Joya de Luz +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [2, 2],
		power: {
			atk: 0.7,
			spa: 0.7,
			spe: 0.7,
		},
		type: 'damage',
		eludible: true,
		description: [
			`
			<span class="mix">(<span class="atk">70%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">70%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">70%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			`,
			`
			<span class="mix">(<span class="atk">70%<img src="./assets/images/icons/atk.png" class="icon"></span>+
			<span class="spa">70%<img src="./assets/images/icons/spa.png" class="icon"></span>+
			<span class="spe">70%<img src="./assets/images/icons/spe.png" class="icon"></span>)</span>
			`	
		],
		color: 'mix'
	},
	willOWisp: {
		id: 'willOWisp',
		upgrade: true, 
		able: true,
		cost: { value: 1, type: 'mp'},
		cd: [0, 5],
		name: ['Will-O-Wisp +', 'Fuego Fatuo +'],
		status: {
			data: statusData['burn'],
			type: 'burn',
			target: 'foe',
			value: 8,
		},
		type: 'status',
		eludible: true,
		description: [
			`Apply <span class="bur">x8 BURN</span><br>
			${text.status.burn.description[0]}`,
			`
			Aplica <span class="bur">x8 QUEMADURA</span><br>
			${text.status.burn.description[1]}
			`
		],
	},
	crunch: {
		id: 'crunch',
		upgrade: true, 
		name: ['Crunch +', 'Triturar +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [1, 1],
		power: {
			atk: 1.5,
		},
		effect: {
			type: 'boost',
			target: 'foe',
			value: {
				res: [-12]
			}
		},
		type: 'damage',
		eludible: true,
		description: [
			`
			<span class="atk">(150%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
 			and reduce <span class="res">-12%<img src="./assets/images/icons/res.png" class="icon"></span>	
			`,
			`
			<span class="atk">(150%<img src="./assets/images/icons/atk.png" class="icon">)</span> 
 			y reduce <span class="res">-12%<img src="./assets/images/icons/res.png" class="icon"></span>
			`
		],
		color: 'atk'
	},
	fairyWind: {
		id: 'fairyWind',
		upgrade: true, 
		name: ['Fairy Wind +', 'Viento Feérico +'],
		able: true,
		cost: { value: 2, type: 'ap'},
		uses: [3, 3],
		power: {
			spa: 1,
		},
		type: 'damage',
		eludible: true,
		description: [
			`
			<span class="spa">(100%<img src="./assets/images/icons/spa.png" class="icon">)</span> 
			`,
			`
			<span class="spa">(100%<img src="./assets/images/icons/spa.png" class="icon">)</span> 
			`
		],
		color: 'spa'
	},
	astonish: {
		id: 'astonish',
		upgrade: true, 
		name: ['Astonish +', 'Impresionar +'],
		able: true,
		cost: { value: 1, type: 'mp'},
		uses: [1, 1],
		power: {
			atk: 0.45,
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(45%<img src="./assets/images/icons/atk.png" class="icon">)</span>`,
			`
			<span class="atk">(45%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			`
		],
		color: 'atk'
	},
	jawLock: {
		id: 'jawLock',
		upgrade: true, 
		name: ['Jaw Lock +', 'Presa Maxilar +'],
		able: true,
		cost: { value: 4, type: 'ap'},
		uses: [1, 1],
		power: {
			atk: 1.2,
		},
		effect: {
			type: 'jawLock',
			target: 'foe',
			value: 5
		},
		type: 'damage',
		eludible: true,
		description: [
			`<span class="atk">(120%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			and increase one random stat by <span class="mix">5</span>
			<span class="mix">
			(<img src="./assets/images/icons/atk.png" class="icon">, <img src="./assets/images/icons/spa.png" class="icon"> or <img src="./assets/images/icons/spe.png" class="icon">)
			</span> if it knocks out the target`,
			`
			<span class="atk">(120%<img src="./assets/images/icons/atk.png" class="icon">)</span>
			y aumenta en <span class="mix">5</span> un stat aleatorio
			<span class="mix">
			(<img src="./assets/images/icons/atk.png" class="icon">, <img src="./assets/images/icons/spa.png" class="icon"> o <img src="./assets/images/icons/spe.png" class="icon">)
			</span> si debilita al objetivo
			`
		],
		color: 'atk'
	},
}