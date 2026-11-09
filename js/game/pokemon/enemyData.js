import { moveData } from './moveData.js'

export const enemyData = {
	// NORMAL 1
	'caterpie': {
		name: 'caterpie',
		image: './assets/images/pokemon/enemy/caterpie.png',
		shiny: './assets/images/pokemon/enemy-shiny/caterpie.png',
		stats: {
			hp: 55,
			atk: 8,
			spa: 8,
			spe: 8,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 5,
		points: 1,
		actions: [
			[moveData['tackle'], moveData['stringShot']],
			[moveData['tackle']],
		]
	},
	'weedle': {
		name: 'weedle',
		image: './assets/images/pokemon/enemy/weedle.png',
		shiny: './assets/images/pokemon/enemy-shiny/weedle.png',
		stats: {
			hp: 55,
			atk: 8,
			spa: 8,
			spe: 8,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 5,
		points: 1,
		actions: [
			[moveData['stringShot'], moveData['poisonSting']],
			[moveData['poisonSting']],
		]
	},
	'wurmple': {
		name: 'wurmple',
		image: './assets/images/pokemon/enemy/wurmple.png',
		shiny: './assets/images/pokemon/enemy-shiny/wurmple.png',
		stats: {
			hp: 55,
			atk: 8,
			spa: 8,
			spe: 8,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 5,
		points: 1,
		actions: [
			[moveData['tackle'], moveData['stringShot']],
			[moveData['poisonSting']],
		]
	},
	'kakuna': {
		name: 'kakuna',
		image: './assets/images/pokemon/enemy/kakuna.png',
		shiny: './assets/images/pokemon/enemy-shiny/kakuna.png',
		stats: {
			hp: 60,
			atk: 5,
			spa: 8,
			spe: 8,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 6,
		points: 2,
		actions: [
			[moveData['harden'], moveData['poisonSting']],
			[moveData['poisonSting']],
			[moveData['tackle'], moveData['poisonSting']],
			[moveData['poisonSting']],
		]
	},
	'metapod': {
		name: 'metapod',
		image: './assets/images/pokemon/enemy/metapod.png',
		shiny: './assets/images/pokemon/enemy-shiny/metapod.png',
		stats: {
			hp: 60,
			atk: 6,
			spa: 8,
			spe: 8,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 6,
		points: 2,
		actions: [
			[moveData['tackle'], moveData['tackle']],
			[moveData['harden']],
			[moveData['tackle']],
			[moveData['tackle'], moveData['tackle']],
		]
	},
	'kricketot': {
		name: 'kricketot',
		image: './assets/images/pokemon/enemy/kricketot.png',
		shiny: './assets/images/pokemon/enemy-shiny/kricketot.png',
		stats: {
			hp: 60,
			atk: 8,
			spa: 10,
			spe: 8,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 7,
		points: 2,
		actions: [
			[moveData['absorb'], moveData['absorb']],
			[moveData['cut'], moveData['absorb']],
		]
	},
	'paras': {
		name: 'paras',
		image: './assets/images/pokemon/enemy/paras.png',
		shiny: './assets/images/pokemon/enemy-shiny/paras.png',
		stats: {
			hp: 60,
			atk: 6,
			spa: 6,
			spe: 6,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 7,
		points: 2,
		actions: [
			[moveData['cut'], moveData['cut']],
			[moveData['absorb'], moveData['stunSpore']],
			[moveData['cut'], moveData['cut']],
		]
	},
	'bellsprout': {
		name: 'bellsprout',
		image: './assets/images/pokemon/enemy/bellsprout.png',
		shiny: './assets/images/pokemon/enemy-shiny/bellsprout.png',
		stats: {
			hp: 65,
			atk: 5,
			spa: 25,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 11,
		points: 2,
		actions: [
			[moveData['smog']],
			[moveData['absorb'], moveData['vineWhip']],
			[moveData['vineWhip']],
			[moveData['vineWhip'], moveData['absorb']],
		]
	},
	'seedot': {
		name: 'seedot',
		image: './assets/images/pokemon/enemy/seedot.png',
		shiny: './assets/images/pokemon/enemy-shiny/seedot.png',
		stats: {
			hp: 60,
			atk: 15,
			spa: 15,
			spe: 8,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 8,
		points: 1,
		actions: [
			[moveData['growth'], moveData['bulletSeed'], moveData['bulletSeed']],
			[moveData['harden'], moveData['absorb']],
			[moveData['absorb'], moveData['absorb']],

		]
	},
	'hoothoot': {
		name: 'hoothoot',
		image: './assets/images/pokemon/enemy/hoothoot.png',
		shiny: './assets/images/pokemon/enemy-shiny/hoothoot.png',
		stats: {
			hp: 60,
			atk: 8,
			spa: 8,
			spe: 8,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 9,
		points: 1,
		actions: [
			[moveData['gust'], moveData['gust']],
			[moveData['wingAttack']],
		]
	},
	'shroomish': {
		name: 'shroomish',
		image: './assets/images/pokemon/enemy/shroomish.png',
		shiny: './assets/images/pokemon/enemy-shiny/shroomish.png',
		stats: {
			hp: 60,
			atk: 5,
			spa: 20,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 9,
		points: 2,
		actions: [
			[moveData['absorb'], moveData['stunSpore']],
			[moveData['growth'], moveData['absorb']],
		]
	},
	'oddish': {
		name: 'oddish',
		image: './assets/images/pokemon/enemy/oddish.png',
		shiny: './assets/images/pokemon/enemy-shiny/oddish.png',
		stats: {
			hp: 60,
			atk: 6,
			spa: 15,
			spe: 8,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 9,
		points: 3,
		actions: [
			[moveData['absorb'], moveData['growth']],
			[moveData['vineWhip'], moveData['stunSpore']],
			[moveData['absorb'], moveData['absorb']],
		]
	},
	'cherubi': {
		name: 'cherubi',
		image: './assets/images/pokemon/enemy/cherubi.png',
		shiny: './assets/images/pokemon/enemy-shiny/cherubi.png',
		stats: {
			hp: 60,
			atk: 8,
			spa: 8,
			spe: 8,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 9,
		points: 2,
		actions: [
			[moveData['growth'], moveData['tackle']],
			[moveData['absorb'], moveData['absorb']],
			[moveData['absorb'], moveData['absorb']],
		]
	},
	// BOSS 1
	'heracross': {
		name: 'heracross',
		image: './assets/images/pokemon/enemy/heracross.png',
		shiny: './assets/images/pokemon/enemy-shiny/heracross.png',
		isBoss: true,
		stats: {
			hp: 190,
			atk: 7,
			spa: 7,
			spe: 7,
			res: 0,
			crt: 0,
			crtDmg: 50
		},
		gold: 33,
		points: 10,
		actions: [
			[moveData['brickBreak']],
			[moveData['hornAttack'], moveData['hornAttack'], moveData['hornAttack']],
		]
	},
	'pinsir': {
		name: 'pinsir',
		image: './assets/images/pokemon/enemy/pinsir.png',
		shiny: './assets/images/pokemon/enemy-shiny/pinsir.png',
		isBoss: true,
		stats: {
			hp: 190,
			atk: 20,
			spa: 18,
			spe: 10,
			res: 0,
			crt: 0,
			crtDmg: 50
		},
		gold: 33,
		points: 10,
		actions: [
			[moveData['swordsDance']],
			[moveData['viseGrip'], moveData['viseGrip'], moveData['viseGrip']],
		]
	},
	'beedrill': {
		name: 'beedrill',
		image: './assets/images/pokemon/enemy/beedrill.png',
		shiny: './assets/images/pokemon/enemy-shiny/beedrill.png',
		isBoss: true,
		stats: {
			hp: 190,
			atk: 15,
			spa: 18,
			spe: 10,
			res: 0,
			crt: 0,
			crtDmg: 50
		},
		gold: 33,
		points: 10,
		actions: [
			[moveData['fellStinger'], moveData['bugBite'], moveData['bugBite'], moveData['bugBite']],
			[moveData['poisonSting'], moveData['poisonSting']],
			[moveData['bugBite'], moveData['bugBite'], moveData['bugBite'], moveData['bugBite']],
			[moveData['poisonSting'], moveData['poisonSting']],
		]
	},
	'butterfree': {
		name: 'butterfree',
		image: './assets/images/pokemon/enemy/butterfree.png',
		shiny: './assets/images/pokemon/enemy-shiny/butterfree.png',
		isBoss: true,
		stats: {
			hp: 190,
			atk: 5,
			spa: 14,
			spe: 10,
			res: 0,
			crt: 0,
			crtDmg: 50
		},
		gold: 33,
		points: 10,
		actions: [
			[moveData['stunSpore'], moveData['gust'], moveData['stringShot']],
			[moveData['confusion'], moveData['stunSpore']],
			[moveData['stunSpore'], moveData['gust']],
			[moveData['gust'], moveData['gust']],
		]
	},
	'vespiquen': {
		name: 'vespiquen',
		image: './assets/images/pokemon/enemy/vespiquen.png',
		shiny: './assets/images/pokemon/enemy-shiny/vespiquen.png',
		isBoss: true,
		stats: {
			hp: 185,
			atk: 16,
			spa: 16,
			spe: 10,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 33,
		points: 10,
		actions: [
			[moveData['defendOrder'], moveData['fellStinger']],
			[moveData['gust'], moveData['bugBite'], moveData['bugBite']],
			[moveData['attackOrder']],
			[moveData['bugBite'], moveData['bugBite'], moveData['bugBite'], moveData['bugBite']],
			[moveData['gust'], moveData['gust']],
			[moveData['gust'], moveData['gust']],
		]
	},
	// NORMAL 2
	'poliwag': {
		name: 'poliwag',
		image: './assets/images/pokemon/enemy/poliwag.png',
		shiny: './assets/images/pokemon/enemy-shiny/poliwag.png',
		stats: {
			hp: 145,
			atk: 5,
			spa: 10,
			spe: 10,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 8,
		points: 3,
		actions: [
			[moveData['mudSlap'], moveData['bubble'], moveData['whirlpool']],
		]
	},
	'lotad': {
		name: 'lotad',
		image: './assets/images/pokemon/enemy/lotad.png',
		shiny: './assets/images/pokemon/enemy-shiny/lotad.png',
		stats: {
			hp: 135,
			atk: 12,
			spa: 22,
			spe: 12,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 8,
		points: 2,
		actions: [
			[moveData['growl'], moveData['bubble']],
			[moveData['absorb'], moveData['absorb']],
			[moveData['razorLeaf'], moveData['razorLeaf']],
		]
	},
	'gloom': {
		name: 'gloom',
		image: './assets/images/pokemon/enemy/gloom.png',
		shiny: './assets/images/pokemon/enemy-shiny/gloom.png',
		stats: {
			hp: 135,
			atk: 7,
			spa: 9,
			spe: 9,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 8,
		points: 4,
		actions: [
			[moveData['vineWhip'], moveData['stunSpore'], moveData['poisonSting']],
			[moveData['poisonSting'], moveData['poisonSting'], moveData['razorLeaf']],
		]
	},
	'wooper': {
		name: 'wooper',
		image: './assets/images/pokemon/enemy/wooper.png',
		shiny: './assets/images/pokemon/enemy-shiny/wooper.png',
		stats: {
			hp: 140,
			atk: 13,
			spa: 16,
			spe: 13,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 8,
		points: 2,
		actions: [
			[moveData['bubble'], moveData['bubble']],
			[moveData['growl'], moveData['mudSlap'], moveData['mudSlap']],
		]
	},
	'gulpin': {
		name: 'gulpin',
		image: './assets/images/pokemon/enemy/gulpin.png',
		shiny: './assets/images/pokemon/enemy-shiny/gulpin.png',
		stats: {
			hp: 155,
			atk: 13,
			spa: 13,
			spe: 13,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 9,
		points: 3,
		actions: [
			[moveData['poisonSting'], moveData['smog']],
			[moveData['poisonSting'], moveData['poisonSting']],
		]
	},
	'grimer': {
		name: 'grimer',
		image: './assets/images/pokemon/enemy/grimer.png',
		shiny: './assets/images/pokemon/enemy-shiny/grimer.png',
		stats: {
			hp: 125,
			atk: 11,
			spa: 13,
			spe: 13,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 9,
		points: 2,
		actions: [
			[moveData['minimize'], moveData['tackle']],
			[moveData['tackle'], moveData['tackle']],
		]
	},
	'budew': {
		name: 'budew',
		image: './assets/images/pokemon/enemy/budew.png',
		shiny: './assets/images/pokemon/enemy-shiny/budew.png',
		stats: {
			hp: 150,
			atk: 11,
			spa: 11,
			spe: 11,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 9,
		points: 3,
		actions: [
			[moveData['razorLeaf'], moveData['ingrain'], moveData['growth']],
			[moveData['poisonSting'], moveData['vineWhip']],
			[moveData['poisonSting'], moveData['razorLeaf']],
			[moveData['poisonSting'], moveData['vineWhip']],
			[moveData['poisonSting'], moveData['razorLeaf']],
		]
	},
	'zubat': {
		name: 'zubat',
		image: './assets/images/pokemon/enemy/zubat.png',
		shiny: './assets/images/pokemon/enemy-shiny/zubat.png',
		stats: {
			hp: 135,
			atk: 11,
			spa: 11,
			spe: 11,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 10,
		points: 2,
		actions: [
			[moveData['poisonSting'], moveData['wingAttack']],
			[moveData['poisonSting'], moveData['poisonSting']],
		]
	},
	'weepinbell': {
		name: 'weepinbell',
		image: './assets/images/pokemon/enemy/weepinbell.png',
		shiny: './assets/images/pokemon/enemy-shiny/weepinbell.png',
		stats: {
			hp: 130,
			atk: 9,
			spa: 30,
			spe: 9,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 10,
		points: 3,
		actions: [
			[moveData['smog'], moveData['vineWhip']],
			[moveData['absorb'], moveData['absorb']],
			[moveData['absorb'], moveData['absorb']],
			[moveData['absorb'], moveData['absorb']],
		]
	},
	'dustox': {
		name: 'dustox',
		image: './assets/images/pokemon/enemy/dustox.png',
		shiny: './assets/images/pokemon/enemy-shiny/dustox.png',
		stats: {
			hp: 130,
			atk: 13,
			spa: 13,
			spe: 13,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 10,
		points: 4,
		actions: [
			[moveData['smog'], moveData['stringShot'], moveData['stringShot']],
			[moveData['poisonSting'], moveData['poisonSting'], moveData['stringShot']],
			[moveData['gust'], moveData['poisonSting'], moveData['stringShot']],
			[moveData['poisonSting'], moveData['poisonSting'], moveData['stringShot']],
		]
	},
	'ekans': {
		name: 'ekans',
		image: './assets/images/pokemon/enemy/ekans.png',
		shiny: './assets/images/pokemon/enemy-shiny/ekans.png',
		stats: {
			hp: 150,
			atk: 13,
			spa: 14,
			spe: 13,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 11,
		points: 2,
		actions: [
			[moveData['poisonSting'], moveData['poisonSting']],
			[moveData['poisonSting'], moveData['poisonSting'], moveData['poisonSting']],
		]
	},
	'gastly': {
		name: 'gastly',
		image: './assets/images/pokemon/enemy/gastly.png',
		shiny: './assets/images/pokemon/enemy-shiny/gastly.png',
		stats: {
			hp: 115,
			atk: 12,
			spa: 30,
			spe: 13,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 11,
		points: 2,
		actions: [
			[moveData['lick'], moveData['lick']],
			[moveData['lick'], moveData['poisonSting'], moveData['poisonSting']],
			[moveData['lick'], moveData['poisonSting'], moveData['poisonSting']],
		]
	},
	'koffing': {
		name: 'koffing',
		image: './assets/images/pokemon/enemy/koffing.png',
		shiny: './assets/images/pokemon/enemy-shiny/koffing.png',
		stats: {
			hp: 135,
			atk: 8,
			spa: 13,
			spe: 13,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 11,
		points: 3,
		actions: [
			[moveData['smog']],
			[moveData['poisonFang'], moveData['poisonFang']],
			[moveData['poisonFang'], moveData['poisonFang']],
		]
	},
	// BOSS 2
	'drapion': {
		name: 'drapion',
		image: './assets/images/pokemon/enemy/drapion.png',
		shiny: './assets/images/pokemon/enemy-shiny/drapion.png',
		isBoss: true,
		stats: {
			hp: 550,
			atk: 20,
			spa: 20,
			spe: 20,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 40,
		points: 12,
		actions: [
			[moveData['furyCutter'], moveData['furyCutter'], moveData['furyCutter'], moveData['furyCutter']],
			[moveData['furyCutter'], moveData['furyCutter'], moveData['furyCutter'], moveData['furyCutter']],
			[moveData['focusEnergy'], moveData['honeClaws'], moveData['swordsDance']],
			[moveData['furyCutter'], moveData['furyCutter'], moveData['furyCutter'], moveData['furyCutter']],
		]
	},
	'muk': {
		name: 'muk',
		image: './assets/images/pokemon/enemy/muk.png',
		shiny: './assets/images/pokemon/enemy-shiny/muk.png',
		isBoss: true,
		stats: {
			hp: 500,
			atk: 15,
			spa: 15,
			spe: 15,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 40,
		points: 12,
		actions: [
			[moveData['minimize'], moveData['poisonJab'], moveData['poisonJab']],
			[moveData['poisonJab'], moveData['poisonJab']],
			[moveData['poisonJab'], moveData['poisonJab']],
		]
	},
	'swalot': {
		name: 'swalot',
		image: './assets/images/pokemon/enemy/swalot.png',
		shiny: './assets/images/pokemon/enemy-shiny/swalot.png',
		isBoss: true,
		stats: {
			hp: 520,
			atk: 7,
			spa: 7,
			spe: 7,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 40,
		points: 12,
		actions: [
			[moveData['smog'], moveData['poisonFang'], moveData['poisonFang']],
			[moveData['poisonFang'], moveData['sludgeBomb']],
			[moveData['poisonFang'], moveData['poisonFang'], moveData['purify']],
			[moveData['poisonFang'], moveData['poisonFang']],
		]
	},
	'vileplume': {
		name: 'vileplume',
		image: './assets/images/pokemon/enemy/vileplume.png',
		shiny: './assets/images/pokemon/enemy-shiny/vileplume.png',
		isBoss: true,
		stats: {
			hp: 500,
			atk: 10,
			spa: 12,
			spe: 10,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 40,
		points: 12,
		actions: [
			[moveData['stunSpore'], moveData['magicalLeaf']],
			[moveData['sludgeWave'], moveData['sludgeWave'], moveData['toxic']],
			[moveData['magicalLeaf'], moveData['magicalLeaf'], moveData['magicalLeaf']],
			[moveData['stunSpore'], moveData['magicalLeaf'], moveData['magicalLeaf']],
			[moveData['magicalLeaf'], moveData['magicalLeaf']],
		]
	},
	// NORMAL 3
	'stantler': {
		name: 'stantler',
		image: './assets/images/pokemon/enemy/stantler.png',
		shiny: './assets/images/pokemon/enemy-shiny/stantler.png',
		stats: {
			hp: 345,
			atk: 16,
			spa: 5,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 11,
		points: 5,
		actions: [
			[moveData['hornAttack'], moveData['growl']],
			[moveData['hornAttack'], moveData['hornAttack']],
			[moveData['hornAttack']],
		]
	},
	'graveler': {
		name: 'graveler',
		image: './assets/images/pokemon/enemy/graveler.png',
		shiny: './assets/images/pokemon/enemy-shiny/graveler.png',
		stats: {
			hp: 360,
			atk: 20,
			spa: 8,
			spe: 8,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 11,
		points: 4,
		actions: [
			[moveData['defenseCurl'], moveData['defenseCurl'], moveData['rockThrow']],
			[moveData['defenseCurl'], moveData['defenseCurl'], moveData['defenseCurl']],
			[moveData['defenseCurl'], moveData['defenseCurl'], moveData['rockThrow']],
			[moveData['rockThrow']],
			[moveData['rockThrow']],
			[moveData['rockThrow']],
			[moveData['rockThrow']],
			[moveData['rockThrow']],
			[moveData['rockThrow']],
		]
	},
	'corsola': {
		name: 'corsola',
		image: './assets/images/pokemon/enemy/corsola.png',
		shiny: './assets/images/pokemon/enemy-shiny/corsola.png',
		stats: {
			hp: 335,
			atk: 12,
			spa: 10,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 12,
		points: 3,
		actions: [
			[moveData['bubble'], moveData['bubble'], moveData['bubble']],
			[moveData['rockThrow'], moveData['bubble']],
			[moveData['rockThrow'], moveData['bubble']],
		]
	},
	'ariados': {
		name: 'ariados',
		image: './assets/images/pokemon/enemy/ariados.png',
		shiny: './assets/images/pokemon/enemy-shiny/ariados.png',
		stats: {
			hp: 345,
			atk: 21,
			spa: 18,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 10,
		points: 3,
		actions: [
			[moveData['stickyWeb'], moveData['poisonSting'], moveData['poisonSting']],
			[moveData['fellStinger'], moveData['bugBite'], moveData['bugBite']],
			[moveData['poisonSting'], moveData['bugBite'], moveData['bugBite']],
			[moveData['fellStinger'], moveData['bugBite'], moveData['bugBite']],
		]
	},
	'lickitung': {
		name: 'lickitung',
		image: './assets/images/pokemon/enemy/lickitung.png',
		shiny: './assets/images/pokemon/enemy-shiny/lickitung.png',
		stats: {
			hp: 340,
			atk: 18,
			spa: 5,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 11,
		points: 4,
		actions: [
			[moveData['defenseCurl'],  moveData['lick']],
			[moveData['lick'], moveData['tackle']],
			[moveData['defenseCurl'], moveData['headbutt']],
			[moveData['lick'], moveData['lick']],
		]
	},
	'rapidash': {
		name: 'rapidash',
		image: './assets/images/pokemon/enemy/rapidash.png',
		shiny: './assets/images/pokemon/enemy-shiny/rapidash.png',
		stats: {
			hp: 330,
			atk: 5,
			spa: 20,
			spe: 8,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 12,
		points: 4,
		actions: [
			[moveData['ember'], moveData['quickAttack']],
			[moveData['agility'], moveData['quickAttack']],
		]
	},
	'primeape': {
		name: 'primeape',
		image: './assets/images/pokemon/enemy/primeape.png',
		shiny: './assets/images/pokemon/enemy-shiny/primeape.png',
		stats: {
			hp: 360,
			atk: 15,
			spa: 5,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 10,
		points: 3,
		actions: [
			[moveData['firePunch'], moveData['powerUpPunch']],
			[moveData['focusEnergy'], moveData['powerUpPunch'], moveData['powerUpPunch']],
			[moveData['powerUpPunch'], moveData['powerUpPunch']],
			[moveData['powerUpPunch'], moveData['powerUpPunch']],
		]
	},
	'fearow': {
		name: 'fearow',
		image: './assets/images/pokemon/enemy/fearow.png',
		shiny: './assets/images/pokemon/enemy-shiny/fearow.png',
		stats: {
			hp: 345,
			atk: 13,
			spa: 5,
			spe: 23,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 11,
		points: 3,
		actions: [
			[moveData['peck'], moveData['peck']],
			[moveData['gust'], moveData['peck']],
			[moveData['peck'], moveData['peck']],
		]
	},
	'pidgeotto': {
		name: 'pidgeotto',
		image: './assets/images/pokemon/enemy/pidgeotto.png',
		shiny: './assets/images/pokemon/enemy-shiny/pidgeotto.png',
		stats: {
			hp: 325,
			atk: 5,
			spa: 16,
			spe: 16,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 10,
		points: 5,
		actions: [
			[moveData['fly'], moveData['gust']],
			[moveData['gust'], moveData['gust']],
			[moveData['gust'], moveData['gust']],
			[moveData['gust'], moveData['roost']],
		]
	},
	'staravia': {
		name: 'staravia',
		image: './assets/images/pokemon/enemy/staravia.png',
		shiny: './assets/images/pokemon/enemy-shiny/staravia.png',
		stats: {
			hp: 350,
			atk: 5,
			spa: 5,
			spe: 15,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 11,
		points: 4,
		actions: [
			[moveData['quickAttack'], moveData['quickAttack']],
			[moveData['focusEnergy'], moveData['honeClaws']],
			[moveData['roost'], moveData['quickAttack']],
			[moveData['quickAttack'], moveData['quickAttack']],
		]
	},
	'luxio': {
		name: 'luxio',
		image: './assets/images/pokemon/enemy/luxio.png',
		shiny: './assets/images/pokemon/enemy-shiny/luxio.png',
		stats: {
			hp: 330,
			atk: 5,
			spa: 17,
			spe: 13,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 11,
		points: 3,
		actions: [
			[moveData['quickAttack'], moveData['thunderShock']],
			[moveData['quickAttack'], moveData['thunderShock']],
			[moveData['quickAttack'], moveData['thunderShock']],
			[moveData['quickAttack'], moveData['discharge']],
		]
	},
	'zangoose': {
		name: 'zangoose',
		image: './assets/images/pokemon/enemy/zangoose.png',
		shiny: './assets/images/pokemon/enemy-shiny/zangoose.png',
		stats: {
			hp: 350,
			atk: 20,
			spa: 5,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 12,
		points: 4,
		actions: [
			[moveData['furyCutter'], moveData['furyCutter'], moveData['cut']],
			[moveData['honeClaws'], moveData['furyCutter'], moveData['furyCutter']],
			[moveData['furyCutter'], moveData['furyCutter'], moveData['cut']],
		]
	},
	'jumpluff': {
		name: 'jumpluff',
		image: './assets/images/pokemon/enemy/jumpluff.png',
		shiny: './assets/images/pokemon/enemy-shiny/jumpluff.png',
		stats: {
			hp: 375,
			atk: 5,
			spa: 25,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 10,
		points: 4,
		actions: [
			[moveData['growth'], moveData['megaDrain']],
			[moveData['absorb'], moveData['absorb']],
			[moveData['stunSpore'], moveData['magicalLeaf']],
			[moveData['absorb'], moveData['absorb']],
		]
	},
	// BOSS 3 -- BUFF
	'onix': {
		name: 'onix',
		image: './assets/images/pokemon/enemy/onix.png',
		shiny: './assets/images/pokemon/enemy-shiny/onix.png',
		isBoss: true,
		stats: {
			hp: 855,
			atk: 15,
			spa: 5,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 50,
		points: 16,
		actions: [
			[moveData['stealthRock'], moveData['spikes']],
			[moveData['defenseCurl'], moveData['defenseCurl'], moveData['rockThrow']],
			[moveData['defenseCurl'], moveData['ironHead']],
			[moveData['defenseCurl'], moveData['defenseCurl'], moveData['rockThrow']],
			[moveData['defenseCurl'], moveData['ironHead']],
			[moveData['ironTail']],
		]
	},
	'ursaring': {
		name: 'ursaring',
		image: './assets/images/pokemon/enemy/ursaring.png',
		shiny: './assets/images/pokemon/enemy-shiny/ursaring.png',
		isBoss: true,
		stats: {
			hp: 720,
			atk: 14,
			spa: 5,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 50,
		points: 16,
		actions: [
			[moveData['honeClaws']],
			[moveData['furyCutter'], moveData['furyCutter'], moveData['slash']],
			[moveData['furyCutter'], moveData['furyCutter'], moveData['cut']],
			[moveData['furyCutter'], moveData['furyCutter'], moveData['slash']],
			[moveData['rest']],
		]
	},
	'sudowoodo': {
		name: 'sudowoodo',
		image: './assets/images/pokemon/enemy/sudowoodo.png',
		shiny: './assets/images/pokemon/enemy-shiny/sudowoodo.png',
		isBoss: true,
		stats: {
			hp: 750,
			atk: 12,
			spa: 10,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 50,
		points: 16,
		actions: [
			[moveData['stealthRock'], moveData['trailblaze']],
			[moveData['ingrain'], moveData['trailblaze']],
			[moveData['rockThrow'], moveData['rockThrow']],
			[moveData['trailblaze'], moveData['trailblaze']],
			[moveData['rockThrow'], moveData['rockThrow']],
			[moveData['ingrain'], moveData['trailblaze']],
		]
	},
	'skarmory': {
		name: 'skarmory',
		image: './assets/images/pokemon/enemy/skarmory.png',
		shiny: './assets/images/pokemon/enemy-shiny/skarmory.png',
		isBoss: true,
		stats: {
			hp: 745,
			atk: 17,
			spa: 5,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 50,
		points: 16,
		actions: [
			[moveData['honeClaws'], moveData['fly']],
			[moveData['ironDefense'], moveData['spikes']],
			[moveData['steelWing'], moveData['steelWing']],
			[moveData['steelWing'], moveData['roost']],
			[moveData['steelWing'], moveData['steelWing']],

		]
	},
	// NORMAL 4
	'espeon': {
		name: 'espeon',
		image: './assets/images/pokemon/enemy/espeon.png',
		shiny: './assets/images/pokemon/enemy-shiny/espeon.png',
		stats: {
			hp: 520,
			atk: 5,
			spa: 18,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 14,
		points: 6,
		actions: [
			[moveData['psybeam'], moveData['charm']],
			[moveData['confusion'], moveData['confusion']],
			[moveData['calmMind'], moveData['charm']],
		]
	},
	'flareon': {
		name: 'flareon',
		image: './assets/images/pokemon/enemy/flareon.png',
		shiny: './assets/images/pokemon/enemy-shiny/flareon.png',
		stats: {
			hp: 480,
			atk: 5,
			spa: 15,
			spe: 15,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 15,
		points: 5,
		actions: [
			[moveData['ember'], moveData['ember'], moveData['growl']],
			[moveData['quickAttack'], moveData['quickAttack']],
			[moveData['howl'], moveData['quickAttack']],
		]
	},
	'machoke': {
		name: 'machoke',
		image: './assets/images/pokemon/enemy/machoke.png',
		shiny: './assets/images/pokemon/enemy-shiny/machoke.png',
		stats: {
			hp: 510,
			atk: 18,
			spa: 5,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 15,
		points: 5,
		actions: [
			[moveData['focusEnergy'], moveData['brickBreak']],
			[moveData['coaching'], moveData['powerUpPunch']],
			[moveData['powerUpPunch'], moveData['powerUpPunch']],
		]
	},
	'exeggutor': {
		name: 'exeggutor',
		image: './assets/images/pokemon/enemy/exeggutor.png',
		shiny: './assets/images/pokemon/enemy-shiny/exeggutor.png',
		stats: {
			hp: 550,
			atk: 5,
			spa: 15,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 14,
		points: 4,
		actions: [
			[moveData['confusion'], moveData['absorb']],
			[moveData['gigaDrain'], moveData['absorb'], moveData['absorb']],
			[moveData['ingrain'], moveData['absorb'], moveData['absorb']],
		]
	},
	'banette': {
		name: 'banette',
		image: './assets/images/pokemon/enemy/banette.png',
		shiny: './assets/images/pokemon/enemy-shiny/banette.png',
		stats: {
			hp: 520,
			atk: 12,
			spa: 5,
			spe: 20,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 13,
		points: 5,
		actions: [
			[moveData['willOWisp'], moveData['screech'], moveData['lick']],
			[moveData['phantomForce'], moveData['screech']],
			[moveData['lick'], moveData['lick']],
			[moveData['lick'], moveData['lick']],
		]
	},
	'hitmontop': {
		name: 'hitmontop',
		image: './assets/images/pokemon/enemy/hitmontop.png',
		shiny: './assets/images/pokemon/enemy-shiny/hitmontop.png',
		stats: {
			hp: 530,
			atk: 20,
			spa: 5,
			spe: 15,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 15,
		points: 6,
		actions: [
			[moveData['fakeOut'], moveData['dig']],
			[moveData['fakeOut'], moveData['bulletPunch'], moveData['blazeKick']],
			[moveData['fakeOut'], moveData['bulletPunch'], moveData['blazeKick']],
		]
	},
	'hitmonlee': {
		name: 'hitmonlee',
		image: './assets/images/pokemon/enemy/hitmonlee.png',
		shiny: './assets/images/pokemon/enemy-shiny/hitmonlee.png',
		stats: {
			hp: 510,
			atk: 12,
			spa: 5,
			spe: 12,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 14,
		points: 4,
		actions: [
			[moveData['blazeKick'], moveData['lowSweep']],
			[moveData['quickAttack'], moveData['quickAttack'], moveData['agility']],
		]
	},
	'hitmonchan': {
		name: 'hitmonchan',
		image: './assets/images/pokemon/enemy/hitmonchan.png',
		shiny: './assets/images/pokemon/enemy-shiny/hitmonchan.png',
		stats: {
			hp: 530,
			atk: 11,
			spa: 5,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 13,
		points: 5,
		actions: [
			[moveData['powerUpPunch'], moveData['bulletPunch'], moveData['bulletPunch'], moveData['bulletPunch'], moveData['bulletPunch']],
			[moveData['coaching'], moveData['drainPunch'], moveData['drainPunch']],
			[moveData['powerUpPunch'], moveData['powerUpPunch']],
		]
	},
	'ninetales': {
		name: 'ninetales',
		image: './assets/images/pokemon/enemy/ninetales.png',
		shiny: './assets/images/pokemon/enemy-shiny/ninetales.png',
		stats: {
			hp: 510,
			atk: 5,
			spa: 17,
			spe: 14,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 15,
		points: 5,
		actions: [
			[moveData['agility'], moveData['ember']],
			[moveData['quickAttack'], moveData['ember']],
			[moveData['ember'], moveData['ember']],
			[moveData['quickAttack'], moveData['ember']],
		]
	},
	// BOSS 4
	'venusaur': {
		name: 'venusaur',
		image: './assets/images/pokemon/enemy/venusaur.png',
		shiny: './assets/images/pokemon/enemy-shiny/venusaur.png',
		isBoss: true,
		stats: {
			hp: 1200,
			atk: 14,
			spa: 24,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 80,
		points: 19,
		actions: [
			[moveData['vineWhip'], moveData['vineWhip'], moveData['smog']],
			[moveData['razorLeaf'], moveData['megaDrain'], moveData['stunSpore']],
			[moveData['razorLeaf'], moveData['megaDrain'], moveData['growth']],
			[moveData['razorLeaf'], moveData['megaDrain'], moveData['stunSpore']],
		]
	},
	'meganium': {
		name: 'meganium',
		image: './assets/images/pokemon/enemy/meganium.png',
		shiny: './assets/images/pokemon/enemy-shiny/meganium.png',
		isBoss: true,
		stats: {
			hp: 1200,
			atk: 19,
			spa: 19,
			spe: 22,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 80,
		points: 19,
		actions: [
			[moveData['ingrain'], moveData['growth'], moveData['megaDrain']],
			[moveData['magicalLeaf'], moveData['magicalLeaf']],
			[moveData['synthesis']],
			[moveData['magicalLeaf'], moveData['magicalLeaf']],
			[moveData['magicalLeaf'], moveData['magicalLeaf']],
		]
	},
	'sceptile': {
		name: 'sceptile',
		image: './assets/images/pokemon/enemy/sceptile.png',
		shiny: './assets/images/pokemon/enemy-shiny/sceptile.png',
		isBoss: true,
		stats: {
			hp: 1100,
			atk: 15,
			spa: 5,
			spe: 15,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 80,
		points: 19,
		actions: [
			[moveData['needleArm']],
			[moveData['trailblaze'], moveData['trailblaze']],
			[moveData['trailblaze'], moveData['trailblaze']],
			[moveData['trailblaze'], moveData['trailblaze']],
		]
	},
	'torterra': {
		name: 'torterra',
		image: './assets/images/pokemon/enemy/torterra.png',
		shiny: './assets/images/pokemon/enemy-shiny/torterra.png',
		isBoss: true,
		stats: {
			hp: 1200,
			atk: 8,
			spa: 16,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 80,
		points: 19,
		actions: [
			[moveData['bulldoze'], moveData['bulldoze']],
			[moveData['growth'], moveData['synthesis']],
			[moveData['bulldoze'], moveData['megaDrain']],
			[moveData['bulldoze'], moveData['megaDrain']],
			[moveData['bulldoze'], moveData['bulldoze']],
		]
	},
	// NORMAL 5
	'crawdaunt': {
		name: 'crawdaunt',
		image: './assets/images/pokemon/enemy/crawdaunt.png',
		shiny: './assets/images/pokemon/enemy-shiny/crawdaunt.png',
		stats: {
			hp: 560,
			atk: 12,
			spa: 12,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 14,
		points: 5,
		actions: [
			[moveData['bubble'], moveData['bubble'], moveData['metalClaw']],
			[moveData['metalClaw'], moveData['metalClaw']],
		]
	},
	'kingler': {
		name: 'kingler',
		image: './assets/images/pokemon/enemy/kingler.png',
		shiny: './assets/images/pokemon/enemy-shiny/kingler.png',
		stats: {
			hp: 565,
			atk: 18,
			spa: 15,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 16,
		points: 6,
		actions: [
			[moveData['harden'], moveData['bubble'], moveData['bubble']],
			[moveData['metalClaw'], moveData['cut'], moveData['cut']],
			[moveData['metalClaw'], moveData['cut'], moveData['cut']],
		]
	},
	'pelipper': {
		name: 'pelipper',
		image: './assets/images/pokemon/enemy/pelipper.png',
		shiny: './assets/images/pokemon/enemy-shiny/pelipper.png',
		stats: {
			hp: 580,
			atk: 13,
			spa: 13,
			spe: 13,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 15,
		points: 7,
		actions: [
			[moveData['fly'], moveData['peck']],
			[moveData['wingAttack'], moveData['peck'], moveData['peck'], moveData['peck']],
			[moveData['roost'], moveData['bubble'], moveData['bubble']],
			[moveData['airSlash']],
		]
	},
	'vaporeon': {
		name: 'vaporeon',
		image: './assets/images/pokemon/enemy/vaporeon.png',
		shiny: './assets/images/pokemon/enemy-shiny/vaporeon.png',
		stats: {
			hp: 555,
			atk: 5,
			spa: 21,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 15,
		points: 5,
		actions: [
			[moveData['bubble'], moveData['aquaRing'], moveData['charm'], moveData['charm'], moveData['charm']],
			[moveData['bubble'], moveData['bubble'], moveData['bubble']],
			[moveData['hydroPump']],
			[moveData['bubble'], moveData['bubble'], moveData['bubble']],
		]
	},
	'whiscash': {
		name: 'whiscash',
		image: './assets/images/pokemon/enemy/whiscash.png',
		shiny: './assets/images/pokemon/enemy-shiny/whiscash.png',
		stats: {
			hp: 530,
			atk: 13,
			spa: 13,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 14,
		points: 5,
		actions: [
			[moveData['bubble'], moveData['mudSlap'], moveData['mudSlap']],
			[moveData['bulldoze'], moveData['bulldoze']],
		]
	},
	'lumineon': {
		name: 'lumineon',
		image: './assets/images/pokemon/enemy/lumineon.png',
		shiny: './assets/images/pokemon/enemy-shiny/lumineon.png',
		stats: {
			hp: 570,
			atk: 5,
			spa: 15,
			spe: 30,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 13,
		points: 6,
		actions: [
			[moveData['aquaRing'], moveData['bubble'], moveData['bubble']],
			[moveData['whirlpool'], moveData['whirlpool'], moveData['whirlpool']],
			[moveData['whirlpool'], moveData['whirlpool']],
		]
	},
	'floatzel': {
		name: 'floatzel',
		image: './assets/images/pokemon/enemy/floatzel.png',
		shiny: './assets/images/pokemon/enemy-shiny/floatzel.png',
		stats: {
			hp: 525,
			atk: 5,
			spa: 5,
			spe: 25,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 15,
		points: 5,
		actions: [
			[moveData['aquaJet'], moveData['aquaJet'], moveData['aquaJet']],
		]
	},
	'tropius': {
		name: 'tropius',
		image: './assets/images/pokemon/enemy/tropius.png',
		shiny: './assets/images/pokemon/enemy-shiny/tropius.png',
		stats: {
			hp: 560,
			atk: 5,
			spa: 15,
			spe: 25,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 16,
		points: 7,
		actions: [
			[moveData['razorLeaf'], moveData['razorLeaf'], moveData['synthesis']],
			[moveData['gigaDrain'], moveData['gust']],
			[moveData['gigaDrain'], moveData['gust']],
			[moveData['gigaDrain'], moveData['gust']],
		]
	},
	'cloyster': {
		name: 'cloyster',
		image: './assets/images/pokemon/enemy/cloyster.png',
		shiny: './assets/images/pokemon/enemy-shiny/cloyster.png',
		stats: {
			hp: 565,
			atk: 22,
			spa: 15,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 14,
		points: 6,
		actions: [
			[moveData['harden'], moveData['harden'], moveData['spikes'], moveData['iceFang']],
			[moveData['auroraBeam'], moveData['auroraBeam']],
			[moveData['harden'], moveData['iceFang'], moveData['iceFang']],
			[moveData['auroraBeam'], moveData['auroraBeam']],
			[moveData['harden'], moveData['iceFang'], moveData['iceFang']],
		]
	},
	'tentacruel': {
		name: 'tentacruel',
		image: './assets/images/pokemon/enemy/tentacruel.png',
		shiny: './assets/images/pokemon/enemy-shiny/tentacruel.png',
		stats: {
			hp: 570,
			atk: 20,
			spa: 40,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 15,
		points: 5,
		actions: [
			[moveData['poisonSting'], moveData['poisonSting'], moveData['poisonSting']],
			[moveData['defenseCurl'], moveData['viseGrip'], moveData['viseGrip'], moveData['viseGrip']],
			[moveData['poisonSting'], moveData['poisonSting'], moveData['poisonSting']],
		]
	},
	'slowbro': {
		name: 'slowbro',
		image: './assets/images/pokemon/enemy/slowbro.png',
		shiny: './assets/images/pokemon/enemy-shiny/slowbro.png',
		stats: {
			hp: 550,
			atk: 5,
			spa: 15,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 15,
		points: 5,
		actions: [
			[moveData['calmMind'], moveData['confusion']],
			[moveData['defenseCurl'], moveData['defenseCurl'], moveData['rest']],
			[moveData['bubble'], moveData['bubble'], moveData['bubble']],
			[moveData['bubble'], moveData['bubble'], moveData['bubble']],
			[moveData['bubble'], moveData['bubble'], moveData['bubble']],
		]
	},
	// BOSS 5
	'blastoise': {
		name: 'blastoise',
		image: './assets/images/pokemon/enemy/blastoise.png',
		shiny: './assets/images/pokemon/enemy-shiny/blastoise.png',
		isBoss: true,
		stats: {
			hp: 1600,
			atk: 21,
			spa: 25,
			spe: 20,
			res: 0,
			crt: 0,
			crtDmg: 50
		},
		gold: 105,
		points: 22,
		actions: [
			[moveData['withdraw'], moveData['hydroPump'], moveData['bite']],
			[moveData['withdraw'], moveData['bite'], moveData['bite'], moveData['bite']],
			[moveData['withdraw'], moveData['bite'], moveData['bite'], moveData['bite']],
			[moveData['withdraw'], moveData['hydroPump'], moveData['bite']],
			[moveData['shellSmash']],
		]
	},
	'feraligatr': {
		name: 'feraligatr',
		image: './assets/images/pokemon/enemy/feraligatr.png',
		shiny: './assets/images/pokemon/enemy-shiny/feraligatr.png',
		isBoss: true,
		stats: {
			hp: 1600,
			atk: 26,
			spa: 5,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 105,
		points: 22,
		actions: [
			[moveData['honeClaws'], moveData['bite'], moveData['bite']],
			[moveData['iceFang'], moveData['slash'], moveData['cut']],
			[moveData['iceFang'], moveData['cut'], moveData['cut']],
			[moveData['iceFang'], moveData['slash'], moveData['cut']],
		]
	},
	'swampert': {
		name: 'swampert',
		image: './assets/images/pokemon/enemy/swampert.png',
		shiny: './assets/images/pokemon/enemy-shiny/swampert.png',
		isBoss: true,
		stats: {
			hp: 1600,
			atk: 20,
			spa: 30,
			spe: 5,
			res: 0,
			crt: 0,
			crtDmg: 50
		},
		gold: 105,
		points: 22,
		actions: [
			[moveData['muddyWater'], moveData['muddyWater']],
			[moveData['bulldoze'], moveData['bulldoze']],
		]
	},
	'empoleon': {
		name: 'empoleon',
		image: './assets/images/pokemon/enemy/empoleon.png',
		shiny: './assets/images/pokemon/enemy-shiny/empoleon.png',
		isBoss: true,
		stats: {
			hp: 1600,
			atk: 22,
			spa: 22,
			spe: 22,
			res: 0,
			crt: 0,
			crtDmg: 50
		},
		gold: 105,
		points: 22,
		actions: [
			[moveData['roost'], moveData['ironDefense'], moveData['metalClaw']],
			[moveData['harden'], moveData['steelWing'], moveData['steelWing']],
			[moveData['bubble'], moveData['bubble'], moveData['bubble'], moveData['bubble']],
			[moveData['harden'], moveData['steelWing'], moveData['steelWing']],
			[moveData['bubble'], moveData['bubble'], moveData['bubble'], moveData['bubble']],
		]
	},
	// NORMAL 6
	'jolteon': {
		name: 'jolteon',
		image: './assets/images/pokemon/enemy/jolteon.png',
		shiny: './assets/images/pokemon/enemy-shiny/jolteon.png',
		stats: {
			hp: 740,
			atk: 5,
			spa: 18,
			spe: 18,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 16,
		points: 8,
		actions: [
			[moveData['quickAttack'], moveData['thunderShock']],
			[moveData['agility'], moveData['thunderShock'], moveData['thunderShock']],
			[moveData['quickAttack'], moveData['quickAttack']],
			[moveData['thunderShock'], moveData['discharge']],
		]
	},
	'crobat': {
		name: 'crobat',
		image: './assets/images/pokemon/enemy/crobat.png',
		shiny: './assets/images/pokemon/enemy-shiny/crobat.png',
		stats: {
			hp: 760,
			atk: 17,
			spa: 17,
			spe: 22,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 17,
		points: 6,
		actions: [
			[moveData['smog'], moveData['wingAttack']],
			[moveData['fly'], moveData['poisonSting'], moveData['poisonSting']],
			[moveData['wingAttack'], moveData['wingAttack']],
		]
	},
	'weezing': {
		name: 'weezing',
		image: './assets/images/pokemon/enemy/weezing.png',
		shiny: './assets/images/pokemon/enemy-shiny/weezing.png',
		stats: {
			hp: 740,
			atk: 5,
			spa: 20,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 15,
		points: 7,
		actions: [
			[moveData['sludgeWave'], moveData['sludgeWave']],
			[moveData['defenseCurl'], moveData['defenseCurl'], moveData['sludgeBomb']],
			[moveData['sludgeWave'], moveData['sludgeWave']],
		]
	},
	'sandslash': {
		name: 'sandslash',
		image: './assets/images/pokemon/enemy/sandslash.png',
		shiny: './assets/images/pokemon/enemy-shiny/sandslash.png',
		stats: {
			hp: 735,
			atk: 24,
			spa: 5,
			spe: 5,
			res: 0,
			crt: 5,
			crtDmg: 50
		},
		gold: 15,
		points: 8,
		actions: [
			[moveData['furyCutter'], moveData['furyCutter'], moveData['cut']],
			[moveData['furyCutter'], moveData['furyCutter'], moveData['slash']],
			[moveData['honeClaws'], moveData['furyCutter'], moveData['cut']],
			[moveData['furyCutter'], moveData['furyCutter'], moveData['slash']],
		]
	},
	'flygon': {
		name: 'flygon',
		image: './assets/images/pokemon/enemy/flygon.png',
		shiny: './assets/images/pokemon/enemy-shiny/flygon.png',
		stats: {
			hp: 760,
			atk: 18,
			spa: 18,
			spe: 18,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 16,
		points: 6,
		actions: [
			[moveData['quiverDance'], moveData['dig']],
			[moveData['bulldoze'], moveData['wingAttack'], moveData['wingAttack']],
			[moveData['aerialAce'], moveData['gust'], moveData['gust']],
		]
	},
	'lunatone': {
		name: 'lunatone',
		image: './assets/images/pokemon/enemy/lunatone.png',
		shiny: './assets/images/pokemon/enemy-shiny/lunatone.png',
		stats: {
			hp: 740,
			atk: 17,
			spa: 24,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 15,
		points: 7,
		actions: [
			[moveData['rockThrow'], moveData['confusion']],
			[moveData['calmMind'], moveData['rockThrow'], moveData['rockThrow']],
			[moveData['confusion'], moveData['confusion']],
			[moveData['rest']],
		]
	},
	'solrock': {
		name: 'solrock',
		image: './assets/images/pokemon/enemy/solrock.png',
		shiny: './assets/images/pokemon/enemy-shiny/solrock.png',
		stats: {
			hp: 740,
			atk: 24,
			spa: 17,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 15,
		points: 8,
		actions: [
			[moveData['rockThrow'], moveData['ember']],
			[moveData['calmMind'], moveData['rockThrow'], moveData['rockThrow']],
			[moveData['ember'], moveData['ember']],
			[moveData['rest']],
		]
	},
	'bronzong': {
		name: 'bronzong',
		image: './assets/images/pokemon/enemy/bronzong.png',
		shiny: './assets/images/pokemon/enemy-shiny/bronzong.png',
		stats: {
			hp: 750,
			atk: 5,
			spa: 18,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 15,
		points: 7,
		actions: [
			[moveData['ironDefense'], moveData['ironHead']],
			[moveData['defenseCurl'], moveData['defenseCurl'], moveData['defenseCurl']],
			[moveData['zenHeadbutt'], moveData['ironHead']],
			[moveData['zenHeadbutt'], moveData['ironHead']],
		]
	},
	'ambipom': {
		name: 'ambipom',
		image: './assets/images/pokemon/enemy/ambipom.png',
		shiny: './assets/images/pokemon/enemy-shiny/ambipom.png',
		stats: {
			hp: 760,
			atk: 20,
			spa: 5,
			spe: 24,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 14,
		points: 6,
		actions: [
			[moveData['fakeOut'], moveData['quickAttack'], moveData['quickAttack']],
			[moveData['fakeOut'], moveData['powerUpPunch'], moveData['powerUpPunch']],
			[moveData['fakeOut'], moveData['quickAttack'], moveData['quickAttack']],
			[moveData['fakeOut'], moveData['coaching']],
		]
	},
	'hariyama': {
		name: 'hariyama',
		image: './assets/images/pokemon/enemy/hariyama.png',
		shiny: './assets/images/pokemon/enemy-shiny/hariyama.png',
		stats: {
			hp: 745,
			atk: 24,
			spa: 5,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 16,
		points: 7,
		actions: [
			[moveData['coaching'], moveData['powerUpPunch'], moveData['powerUpPunch']],
			[moveData['brickBreak'], moveData['powerUpPunch'], moveData['powerUpPunch']],
			[moveData['powerUpPunch'], moveData['powerUpPunch'], moveData['powerUpPunch']],
			[moveData['fakeOut'], moveData['brickBreak']],
		]
	},
	'granbull': {
		name: 'granbull',
		image: './assets/images/pokemon/enemy/granbull.png',
		shiny: './assets/images/pokemon/enemy-shiny/granbull.png',
		stats: {
			hp: 740,
			atk: 22,
			spa: 5,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 15,
		points: 8,
		actions: [
			[moveData['screech'], moveData['playRough'], moveData['powerUpPunch']],
			[moveData['howl'], moveData['powerUpPunch'], moveData['powerUpPunch']],
			[moveData['howl'], moveData['bite']],
			[moveData['bite'], moveData['bite']],
			[moveData['playRough'], moveData['playRough']],
		]
	},
	'noctowl': {
		name: 'noctowl',
		image: './assets/images/pokemon/enemy/noctowl.png',
		shiny: './assets/images/pokemon/enemy-shiny/noctowl.png',
		stats: {
			hp: 740,
			atk: 12,
			spa: 20,
			spe: 12,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 14,
		points: 7,
		actions: [
			[moveData['fly'], moveData['confusion']],
			[moveData['gust'], moveData['gust']],
			[moveData['roost'], moveData['psybeam']],
			[moveData['calmMind'], moveData['pluck'], moveData['pluck'], moveData['pluck']],
			[moveData['confusion'], moveData['pluck'], moveData['pluck'], moveData['pluck']],
		]
	},
	'manectric': {
		name: 'manectric',
		image: './assets/images/pokemon/enemy/manectric.png',
		shiny: './assets/images/pokemon/enemy-shiny/manectric.png',
		stats: {
			hp: 730,
			atk: 5,
			spa: 22,
			spe: 17,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 14,
		points: 7,
		actions: [
			[moveData['extremeSpeed']],
			[moveData['agility'], moveData['howl']],
			[moveData['quickAttack'], moveData['thunderShock'], moveData['growl']],
			[moveData['thunderShock'], moveData['thunderShock']],
			[moveData['thunderShock'], moveData['thunderShock']],
			[moveData['discharge'], moveData['growl']],
		]
	},
	// BOSS 6
	'charizard': {
		name: 'charizard',
		image: './assets/images/pokemon/enemy/charizard.png',
		shiny: './assets/images/pokemon/enemy-shiny/charizard.png',
		isBoss: true,
		stats: {
			hp: 2400,
			atk: 20,
			spa: 28,
			spe: 25,
			res: 0,
			crt: 0,
			crtDmg: 50
		},
		gold: 110,
		points: 25,
		actions: [
			[moveData['dragonBreath'], moveData['flamethrower']],
			[moveData['flamethrower'], moveData['flamethrower'], moveData['ember']],
			[moveData['metalClaw'], moveData['metalClaw'], moveData['fly']],
			[moveData['heatWave'], moveData['ember'], moveData['slash']],
			[moveData['flamethrower'], moveData['flamethrower']],
			[moveData['metalClaw'], moveData['metalClaw'], moveData['fly']],
		]
	},
	'typhlosion': {
		name: 'typhlosion',
		image: './assets/images/pokemon/enemy/typhlosion.png',
		shiny: './assets/images/pokemon/enemy-shiny/typhlosion.png',
		isBoss: true,
		stats: {
			hp: 2400,
			atk: 20,
			spa: 35,
			spe: 5,
			res: 0,
			crt: 15,
			crtDmg: 50
		},
		gold: 110,
		points: 25,
		actions: [
			[moveData['dig'], moveData['flamethrower'], moveData['flamethrower']],
			[moveData['bulldoze'], moveData['slash'], moveData['ember'], moveData['ember']],
			[moveData['dig'], moveData['ember'], moveData['ember']],
			[moveData['bulldoze'], moveData['flamethrower'], moveData['ember']],
		]
	},
	'blaziken': {
		name: 'blaziken',
		image: './assets/images/pokemon/enemy/blaziken.png',
		shiny: './assets/images/pokemon/enemy-shiny/blaziken.png',
		isBoss: true,
		stats: {
			hp: 2400,
			atk: 31,
			spa: 31,
			spe: 20,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 110,
		points: 25,
		actions: [
			[moveData['blazeKick'], moveData['blazeKick'], moveData['bounce']],
			[moveData['coaching'], moveData['blazeKick'], moveData['blazeKick']],
			[moveData['agility'], moveData['blazeKick'], moveData['blazeKick'], moveData['bounce']],
			[moveData['blazeKick'], moveData['blazeKick'], moveData['bounce']],
		]
	},
	'infernape': {
		name: 'infernape',
		image: './assets/images/pokemon/enemy/infernape.png',
		shiny: './assets/images/pokemon/enemy-shiny/infernape.png',
		isBoss: true,
		stats: {
			hp: 2400,
			atk: 35,
			spa: 5,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 110,
		points: 25,
		actions: [
			[moveData['firePunch'], moveData['firePunch']],
			[moveData['powerUpPunch'], moveData['powerUpPunch'], moveData['firePunch']],
			[moveData['powerUpPunch'], moveData['powerUpPunch'], moveData['firePunch']],
			[moveData['coaching'], moveData['firePunch'], moveData['firePunch']],
			[moveData['powerUpPunch'], moveData['powerUpPunch'], moveData['firePunch']],
			[moveData['powerUpPunch'], moveData['powerUpPunch'], moveData['firePunch']],
		]
	},

	// NORMAL 7
	'exploud': {
		name: 'exploud',
		image: './assets/images/pokemon/enemy/exploud.png',
		shiny: './assets/images/pokemon/enemy-shiny/exploud.png',
		stats: {
			hp: 1250,
			atk: 5,
			spa: 22,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 14,
		points: 9,
		actions: [
			[moveData['screech'], moveData['disarmingVoice'], moveData['disarmingVoice'], moveData['disarmingVoice']],
			[moveData['hyperVoice'], moveData['disarmingVoice'], moveData['disarmingVoice'], moveData['disarmingVoice']],
			[moveData['hyperVoice'], moveData['disarmingVoice'], moveData['disarmingVoice'], moveData['disarmingVoice']],
		]
	},
	'torkoal': {
		name: 'torkoal',
		image: './assets/images/pokemon/enemy/torkoal.png',
		shiny: './assets/images/pokemon/enemy-shiny/torkoal.png',
		stats: {
			hp: 1250,
			atk: 5,
			spa: 25,
			spe: 25,
			res: 0,
			crt: 5,
			crtDmg: 50
		},
		gold: 13,
		points: 8,
		actions: [
			[moveData['flamethrower'], moveData['bulldoze'], moveData['defenseCurl']],
		]
	},
	'cradily': {
		name: 'cradily',
		image: './assets/images/pokemon/enemy/cradily.png',
		shiny: './assets/images/pokemon/enemy-shiny/cradily.png',
		stats: {
			hp: 950,
			atk: 27,
			spa: 30,
			spe: 5,
			res: 0,
			crt: 5,
			crtDmg: 50
		},
		gold: 14,
		points: 8,
		actions: [
			[moveData['ingrain'], moveData['gigaDrain'], moveData['megaDrain'], moveData['defenseCurl']],
			[moveData['rockThrow'], moveData['rockThrow'], moveData['megaDrain'], moveData['megaDrain']],
			[moveData['ingrain'], moveData['gigaDrain'], moveData['megaDrain'], moveData['synthesis']],
		]
	},
	'rampardos': {
		name: 'rampardos',
		image: './assets/images/pokemon/enemy/rampardos.png',
		shiny: './assets/images/pokemon/enemy-shiny/rampardos.png',
		stats: {
			hp: 850,
			atk: 35,
			spa: 5,
			spe: 5,
			res: 0,
			crt: 5,
			crtDmg: 50
		},
		gold: 15,
		points: 10,
		actions: [
			[moveData['headbutt'], moveData['headbutt']],
			[moveData['coaching'], moveData['headbutt']],
			[moveData['headbutt'], moveData['headbutt']],
		]
	},
	'bastiodon': {
		name: 'bastiodon',
		image: './assets/images/pokemon/enemy/bastiodon.png',
		shiny: './assets/images/pokemon/enemy-shiny/bastiodon.png',
		stats: {
			hp: 1250,
			atk: 10,
			spa: 5,
			spe: 5,
			res: 0,
			crt: 5,
			crtDmg: 50
		},
		gold: 14,
		points: 8,
		actions: [
			[moveData['ironDefense'], moveData['headbutt'], moveData['headbutt']],
		]
	},
	'mismagius': {
		name: 'mismagius',
		image: './assets/images/pokemon/enemy/mismagius.png',
		shiny: './assets/images/pokemon/enemy-shiny/mismagius.png',
		stats: {
			hp: 1150,
			atk: 5,
			spa: 20,
			spe: 5,
			res: 0,
			crt: 5,
			crtDmg: 50
		},
		gold: 14,
		points: 10,
		actions: [
			[moveData['magicalLeaf'], moveData['magicalLeaf'], moveData['shadowBall']],
			[moveData['calmMind'], moveData['shadowBall'], moveData['shadowBall']],
			[moveData['flamethrower'], moveData['shadowBall'], moveData['shadowBall']],
		]
	},
	'slaking': {
		name: 'slaking',
		image: './assets/images/pokemon/enemy/slaking.png',
		shiny: './assets/images/pokemon/enemy-shiny/slaking.png',
		stats: {
			hp: 1300,
			atk: 40,
			spa: 5,
			spe: 5,
			res: 0,
			crt: 5,
			crtDmg: 50
		},
		gold: 15,
		points: 8,
		actions: [
			[moveData['powerUpPunch'], moveData['powerUpPunch'], moveData['powerUpPunch']],
			[moveData['rest']],
		]
	},
	'dusknoir': {
		name: 'dusknoir',
		image: './assets/images/pokemon/enemy/dusknoir.png',
		shiny: './assets/images/pokemon/enemy-shiny/dusknoir.png',
		stats: {
			hp: 1230,
			atk: 5,
			spa: 15,
			spe: 30,
			res: 5,
			crt: 5,
			crtDmg: 50
		},
		gold: 13,
		points: 9,
		actions: [
			[moveData['phantomForce'], moveData['shadowBall'], moveData['shadowBall']],
			[moveData['shadowBall'], moveData['shadowBall'], moveData['shadowBall']],
			[moveData['shadowBall'], moveData['shadowBall'], moveData['shadowBall']],
		]
	},
	'drifblim': {
		name: 'drifblim',
		image: './assets/images/pokemon/enemy/drifblim.png',
		shiny: './assets/images/pokemon/enemy-shiny/drifblim.png',
		stats: {
			hp: 1250,
			atk: 5,
			spa: 20,
			spe: 20,
			res: 0,
			crt: 5,
			crtDmg: 50
		},
		gold: 14,
		points: 7,
		actions: [
			[moveData['minimize'], moveData['shadowBall'], moveData['shadowBall']],
			[moveData['phantomForce'], moveData['airSlash']],
			[moveData['shadowBall'], moveData['shadowBall'], moveData['shadowBall']],
			[moveData['phantomForce'], moveData['shadowBall']]
		]
	},
	'gallade': {
		name: 'gallade',
		image: './assets/images/pokemon/enemy/gallade.png',
		shiny: './assets/images/pokemon/enemy-shiny/gallade.png',
		stats: {
			hp: 1200,
			atk: 40,
			spa: 20,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 14,
		points: 10,
		actions: [
			[moveData['powerUpPunch'], moveData['powerUpPunch'], moveData['confusion'], moveData['confusion']],
			[moveData['coaching'], moveData['calmMind'], moveData['psybeam']],
			[moveData['powerUpPunch'], moveData['powerUpPunch'], moveData['confusion'], moveData['confusion']],
		]
	},
	'yanmega': {
		name: 'yanmega',
		image: './assets/images/pokemon/enemy/yanmega.png',
		shiny: './assets/images/pokemon/enemy-shiny/yanmega.png',
		stats: {
			hp: 1250,
			atk: 5,
			spa: 20,
			spe: 20,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 15,
		points: 7,
		actions: [
			[moveData['signalBeam'], moveData['signalBeam'], moveData['signalBeam']],
			[moveData['quiverDance'], moveData['signalBeam'], moveData['signalBeam']],
			[moveData['signalBeam'], moveData['signalBeam'], moveData['signalBeam']],
			[moveData['agility'], moveData['signalBeam'], moveData['signalBeam']],
		]
	},
	'umbreon': {
		name: 'umbreon',
		image: './assets/images/pokemon/enemy/umbreon.png',
		shiny: './assets/images/pokemon/enemy-shiny/umbreon.png',
		stats: {
			hp: 1250,
			atk: 25,
			spa: 5,
			spe: 20,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 14,
		points: 8,
		actions: [
			[moveData['bite'], moveData['bite'], moveData['growl'], moveData['growl']],
			[moveData['howl'], moveData['bite'], moveData['bite'], moveData['growl']],
			[moveData['pursuit'], moveData['pursuit'], moveData['pursuit'], moveData['bite']],
			[moveData['pursuit'], moveData['pursuit'], moveData['pursuit'], moveData['bite']],
		]
	},
	// BOSS 7
	'entei': {
		name: 'entei',
		image: './assets/images/pokemon/enemy/entei.png',
		shiny: './assets/images/pokemon/enemy-shiny/entei.png',
		isBoss: true,
		stats: {
			hp: 3300,
			atk: 20,
			spa: 40,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 130,
		points: 30,
		actions: [
			[moveData['sacredFire']],
			[moveData['howl'], moveData['bite'], moveData['bite']],
			[moveData['howl'], moveData['bite'], moveData['bite'], moveData['bite']],
			[moveData['flamethrower'], moveData['ember'], moveData['ember']],
			[moveData['howl'], moveData['bite'], moveData['bite']],
			[moveData['howl'], moveData['bite'], moveData['bite'], moveData['bite']],
			[moveData['flamethrower'], moveData['ember'], moveData['ember']],
			[moveData['howl'], moveData['bite'], moveData['bite']],
			[moveData['howl'], moveData['bite'], moveData['bite'], moveData['bite']],
		]
	},
	'suicune': {
		name: 'suicune',
		image: './assets/images/pokemon/enemy/suicune.png',
		shiny: './assets/images/pokemon/enemy-shiny/suicune.png',
		isBoss: true,
		stats: {
			hp: 3300,
			atk: 25,
			spa: 40,
			spe: 25,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 130,
		points: 30,
		actions: [
			[moveData['chillingWater'], moveData['iceFang'], moveData['iceFang'], moveData['extremeSpeed']],
			[moveData['chillingWater'], moveData['iceFang'], moveData['iceFang'], moveData['extremeSpeed']],
			[moveData['chillingWater'], moveData['calmMind'], moveData['hydroPump']],
		]
	},
	'raikou': {
		name: 'raikou',
		image: './assets/images/pokemon/enemy/raikou.png',
		shiny: './assets/images/pokemon/enemy-shiny/raikou.png',
		isBoss: true,
		stats: {
			hp: 3300,
			atk: 5,
			spa: 35,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 130,
		points: 30,
		actions: [
			[moveData['thunderShock'], moveData['thunderShock'], moveData['thunderShock']],
			[moveData['thunderShock'], moveData['thunderShock'], moveData['thunderShock']],
			[moveData['calmMind'], moveData['discharge']],
			[moveData['thunderbolt'], moveData['thunderbolt']],
			[moveData['thunderbolt'], moveData['thunderbolt']],
			[moveData['calmMind'], moveData['discharge']],
		]
	},
	'moltres': {
		name: 'moltres',
		image: './assets/images/pokemon/enemy/moltres.png',
		shiny: './assets/images/pokemon/enemy-shiny/moltres.png',
		isBoss: true,
		stats: {
			hp: 3150,
			atk: 35,
			spa: 28,
			spe: 30,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 130,
		points: 30,
		actions: [
			[moveData['fly'], moveData['gust'], moveData['gust']],
			[moveData['flamethrower'], moveData['flamethrower'], moveData['gust'], moveData['gust']],
			[moveData['flamethrower'], moveData['flamethrower'], moveData['gust'], moveData['gust']],
			[moveData['braveBird']],
		]
	},
	'articuno': {
		name: 'articuno',
		image: './assets/images/pokemon/enemy/articuno.png',
		shiny: './assets/images/pokemon/enemy-shiny/articuno.png',
		isBoss: true,
		stats: {
			hp: 3150,
			atk: 35,
			spa: 28,
			spe: 30,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 130,
		points: 30,
		actions: [
			[moveData['fly'], moveData['gust'], moveData['gust']],
			[moveData['chillingWater'], moveData['chillingWater'], moveData['gust'], moveData['gust']],
			[moveData['chillingWater'], moveData['chillingWater'], moveData['gust'], moveData['gust']],
			[moveData['braveBird']],
		]
	},
	'zapdos': {
		name: 'zapdos',
		image: './assets/images/pokemon/enemy/zapdos.png',
		shiny: './assets/images/pokemon/enemy-shiny/zapdos.png',
		isBoss: true,
		stats: {
			hp: 3150,
			atk: 30,
			spa: 25,
			spe: 25,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 130,
		points: 30,
		actions: [
			[moveData['fly'], moveData['gust'], moveData['gust']],
			[moveData['drillPeck'], moveData['drillPeck'], moveData['gust'], moveData['gust']],
			[moveData['drillPeck'], moveData['drillPeck'], moveData['gust'], moveData['gust']],
			[moveData['braveBird']],
		]
	},
	// NORMAL 8
	'lapras': {
		name: 'lapras',
		image: './assets/images/pokemon/enemy/lapras.png',
		shiny: './assets/images/pokemon/enemy-shiny/lapras.png',
		stats: {
			hp: 1600,
			atk: 25,
			spa: 35,
			spe: 25,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 15,
		points: 11,
		actions: [
			[moveData['chillingWater'], moveData['chillingWater'], moveData['whirlpool'], moveData['whirlpool'], moveData['whirlpool']],
			[moveData['auroraBeam'], moveData['auroraBeam'], moveData['whirlpool'], moveData['whirlpool']],
			[moveData['auroraBeam'], moveData['auroraBeam'], moveData['whirlpool'], moveData['whirlpool']],
		]
	},
	'gyarados': {
		name: 'gyarados',
		image: './assets/images/pokemon/enemy/gyarados.png',
		shiny: './assets/images/pokemon/enemy-shiny/gyarados.png',
		stats: {
			hp: 1600,
			atk: 28,
			spa: 28,
			spe: 28,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 14,
		points: 9,
		actions: [
			[moveData['fly'], moveData['twister'], moveData['twister']],
			[moveData['iceFang'], moveData['iceFang'], moveData['bite'], moveData['bite']],
			[moveData['iceFang'], moveData['iceFang'], moveData['twister'], moveData['twister']],
		]
	},
	'omastar': {
		name: 'omastar',
		image: './assets/images/pokemon/enemy/omastar.png',
		shiny: './assets/images/pokemon/enemy-shiny/omastar.png',
		stats: {
			hp: 1600,
			atk: 28,
			spa: 28,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 15,
		points: 10,
		actions: [
			[moveData['rockThrow'], moveData['rockThrow'], moveData['chillingWater'], moveData['chillingWater']],
			[moveData['shellSmash'], moveData['rockThrow'], moveData['rockThrow'], moveData['chillingWater']],
			[moveData['rockThrow'], moveData['rockThrow'], moveData['chillingWater'], moveData['chillingWater']],
		]
	},
	'kabutops': {
		name: 'kabutops',
		image: './assets/images/pokemon/enemy/kabutops.png',
		shiny: './assets/images/pokemon/enemy-shiny/kabutops.png',
		stats: {
			hp: 1600,
			atk: 26,
			spa: 18,
			spe: 26,
			res: 0,
			crt: 5,
			crtDmg: 50
		},
		gold: 15,
		points: 9,
		actions: [
			[moveData['focusEnergy'], moveData['honeClaws'], moveData['cut'], moveData['cut'], moveData['cut']],
			[moveData['cut'], moveData['cut'], moveData['cut'], moveData['slash']],
			[moveData['rockThrow'], moveData['rockThrow'], moveData['rockThrow'], moveData['bubble']],
			[moveData['swordsDance'], moveData['cut'], moveData['cut'], moveData['slash']],
			[moveData['rockThrow'], moveData['rockThrow'], moveData['rockThrow'], moveData['bubble']],
			[moveData['cut'], moveData['cut'], moveData['cut'], moveData['slash']],
		]
	},
	'gardevoir': {
		name: 'gardevoir',
		image: './assets/images/pokemon/enemy/gardevoir.png',
		shiny: './assets/images/pokemon/enemy-shiny/gardevoir.png',
		stats: {
			hp: 1450,
			atk: 5,
			spa: 30,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 13,
		points: 11,
		actions: [
			[moveData['confusion'], moveData['confusion'], moveData['psybeam']],
			[moveData['calmMind'], moveData['lifeDew'], moveData['confusion'], moveData['confusion']],
			[moveData['disarmingVoice'], moveData['disarmingVoice'], moveData['psybeam']],
			[moveData['confusion'], moveData['confusion'], moveData['psybeam']],
		]
	},
	'walrein': {
		name: 'walrein',
		image: './assets/images/pokemon/enemy/walrein.png',
		shiny: './assets/images/pokemon/enemy-shiny/walrein.png',
		stats: {
			hp: 1600,
			atk: 30,
			spa: 30,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 15,
		points: 10,
		actions: [
			[moveData['chillingWater'], moveData['auroraBeam'], moveData['auroraBeam'], moveData['muddyWater']],
			[moveData['muddyWater'], moveData['muddyWater'], moveData['iceFang'], moveData['bubble']],
			[moveData['muddyWater'], moveData['muddyWater'], moveData['auroraBeam'], moveData['bubble']],
		]
	},
	'magnezone': {
		name: 'magnezone',
		image: './assets/images/pokemon/enemy/magnezone.png',
		shiny: './assets/images/pokemon/enemy-shiny/magnezone.png',
		stats: {
			hp: 1500,
			atk: 5,
			spa: 30,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 14,
		points: 9,
		actions: [
			[moveData['thunderShock'], moveData['thunderShock'], moveData['thunderShock'], moveData['discharge']],
			[moveData['thunderbolt'], moveData['thunderbolt'], moveData['thunderShock']],
			[moveData['thunderShock'], moveData['thunderShock'], moveData['discharge']],
			[moveData['thunderShock'], moveData['thunderShock'], moveData['thunderShock'], moveData['thunderShock']],
		]
	},
	'glaceon': {
		name: 'glaceon',
		image: './assets/images/pokemon/enemy/glaceon.png',
		shiny: './assets/images/pokemon/enemy-shiny/glaceon.png',
		stats: {
			hp: 1600,
			atk: 21,
			spa: 30,
			spe: 21,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 14,
		points: 10,
		actions: [
			[moveData['aquaRing'], moveData['chillingWater'], moveData['chillingWater'], moveData['bubble'], moveData['bubble']],
			[moveData['iceFang'], moveData['iceFang'], moveData['auroraBeam']],
			[moveData['hydroPump'], moveData['bubble'], moveData['bubble']],
			[moveData['whirlpool'], moveData['whirlpool'], moveData['whirlpool'], moveData['bubble'], moveData['bubble']],
			[moveData['whirlpool'], moveData['whirlpool'], moveData['whirlpool'], moveData['bubble'], moveData['bubble']],
		]
	},
	'leafeon': {
		name: 'leafeon',
		image: './assets/images/pokemon/enemy/leafeon.png',
		shiny: './assets/images/pokemon/enemy-shiny/leafeon.png',
		stats: {
			hp: 1300,
			atk: 25,
			spa: 35,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 14,
		points: 9,
		actions: [
			[moveData['synthesis'], moveData['gigaDrain'], moveData['razorLeaf'], moveData['razorLeaf']],
			[moveData['magicalLeaf'], moveData['magicalLeaf'], moveData['megaDrain'], moveData['megaDrain']],
			[moveData['gigaDrain'], moveData['megaDrain'], moveData['megaDrain'], moveData['razorLeaf']],
			[moveData['magicalLeaf'], moveData['magicalLeaf'], moveData['razorLeaf'], moveData['razorLeaf']],
		]
	},
	'sharpedo': {
		name: 'sharpedo',
		image: './assets/images/pokemon/enemy/sharpedo.png',
		shiny: './assets/images/pokemon/enemy-shiny/sharpedo.png',
		stats: {
			hp: 1600,
			atk: 30,
			spa: 5,
			spe: 30,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 15,
		points: 10,
		actions: [
			[moveData['aquaJet'], moveData['aquaJet'], moveData['aquaJet'], moveData['bite']],
			[moveData['aquaJet'], moveData['aquaJet'], moveData['aquaJet'], moveData['iceFang']],
		]
	},
	'kingdra': {
		name: 'kingdra',
		image: './assets/images/pokemon/enemy/kingdra.png',
		shiny: './assets/images/pokemon/enemy-shiny/kingdra.png',
		stats: {
			hp: 1600,
			atk: 30,
			spa: 35,
			spe: 30,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 15,
		points: 9,
		actions: [
			[moveData['dragonBreath'], moveData['twister'], moveData['twister'], moveData['bubble']],
			[moveData['twister'], moveData['auroraBeam'], moveData['auroraBeam']],
		]
	},
	'altaria': {
		name: 'altaria',
		image: './assets/images/pokemon/enemy/altaria.png',
		shiny: './assets/images/pokemon/enemy-shiny/altaria.png',
		stats: {
			hp: 1600,
			atk: 25,
			spa: 40,
			spe: 25,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 14,
		points: 11,
		actions: [
			[moveData['dragonBreath'], moveData['twister'], moveData['fly']],
			[moveData['disarmingVoice'], moveData['disarmingVoice'], moveData['twister'], moveData['twister']],
			[moveData['twister'], moveData['twister'], moveData['twister']],
			[moveData['disarmingVoice'], moveData['disarmingVoice'], moveData['twister'], moveData['twister']],
		]
	},
	'armaldo': {
		name: 'armaldo',
		image: './assets/images/pokemon/enemy/armaldo.png',
		shiny: './assets/images/pokemon/enemy-shiny/armaldo.png',
		stats: {
			hp: 1700,
			atk: 30,
			spa: 5,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 15,
		points: 9,
		actions: [
			[moveData['defenseCurl'], moveData['defenseCurl'], moveData['metalClaw'], moveData['metalClaw']],
			[moveData['defenseCurl'], moveData['honeClaws'], moveData['furyCutter'], moveData['furyCutter'], moveData['furyCutter']],
			[moveData['metalClaw'], moveData['metalClaw'], moveData['furyCutter'], moveData['furyCutter']],
			[moveData['furyCutter'], moveData['furyCutter'], moveData['furyCutter'], moveData['slash']],

		]
	},
	// BOSS 8
	'hooh': {
		name: 'hooh',
		image: './assets/images/pokemon/enemy/hooh.png',
		shiny: './assets/images/pokemon/enemy-shiny/hooh.png',
		isBoss: true,
		stats: {
			hp: 4200,
			atk: 27,
			spa: 27,
			spe: 30,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 144,
		points: 40,
		actions: [
			[moveData['sacredFire'], moveData['fly']],
			[moveData['wingAttack'], moveData['wingAttack'], moveData['flamethrower']],
			[moveData['gust'], moveData['gust'], moveData['gust'], moveData['gust']],
			[moveData['gust'], moveData['gust'], moveData['gust'], moveData['gust'], moveData['gust']],
			[moveData['wingAttack'], moveData['wingAttack'], moveData['fly']],
			[moveData['gust'], moveData['gust'], moveData['gust'], moveData['gust'], moveData['gust']],
			[moveData['gust'], moveData['gust'], moveData['gust'], moveData['gust']],
			[moveData['wingAttack'], moveData['wingAttack'], moveData['flamethrower']],
			[moveData['gust'], moveData['gust'], moveData['gust'], moveData['gust']],
			[moveData['gust'], moveData['gust'], moveData['gust'], moveData['gust']],
		]
	},
	'lugia': {
		name: 'lugia',
		image: './assets/images/pokemon/enemy/lugia.png',
		shiny: './assets/images/pokemon/enemy-shiny/lugia.png',
		isBoss: true,
		stats: {
			hp: 4200,
			atk: 20,
			spa: 36,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 144,
		points: 40,
		actions: [
			[moveData['hydroPump'], moveData['fly']],
			[moveData['confusion'], moveData['confusion'], moveData['psybeam']],
			[moveData['gust'], moveData['gust'], moveData['gust'], moveData['gust']],
			[moveData['gust'], moveData['gust'], moveData['gust'], moveData['gust'], moveData['gust']],
			[moveData['confusion'], moveData['confusion'], moveData['fly']],
			[moveData['gust'], moveData['gust'], moveData['gust'], moveData['gust'], moveData['gust']],
			[moveData['gust'], moveData['gust'], moveData['gust'], moveData['gust']],
			[moveData['confusion'], moveData['confusion'], moveData['psybeam']],
		]
	},
	'groudon': {
		name: 'groudon',
		image: './assets/images/pokemon/enemy/groudon.png',
		shiny: './assets/images/pokemon/enemy-shiny/groudon.png',
		isBoss: true,
		stats: {
			hp: 3800,
			atk: 26,
			spa: 28,
			spe: 26,
			res: 0,
			crt: 0,
			crtDmg: 50
		},
		gold: 144,
		points: 40,
		actions: [
			[moveData['earthquake'], moveData['earthquake'], moveData['dig']],
			[moveData['earthquake'], moveData['earthquake'], moveData['ember']],
			[moveData['bulldoze'], moveData['bulldoze'], moveData['bulldoze']],
		]
	},
	'kyogre': {
		name: 'kyogre',
		image: './assets/images/pokemon/enemy/kyogre.png',
		shiny: './assets/images/pokemon/enemy-shiny/kyogre.png',
		isBoss: true,
		stats: {
			hp: 4200,
			atk: 22,
			spa: 36,
			spe: 26,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 144,
		points: 40,
		actions: [
			[moveData['bubble'], moveData['bubble'], moveData['chillingWater'], moveData['dive']],
			[moveData['bubble'], moveData['bubble'], moveData['chillingWater'], moveData['hydroPump']],
			[moveData['chillingWater'], moveData['chillingWater'], moveData['chillingWater'], moveData['chillingWater']],
		]
	},
	'dialga': {
		name: 'dialga',
		image: './assets/images/pokemon/enemy/dialga.png',
		shiny: './assets/images/pokemon/enemy-shiny/dialga.png',
		isBoss: true,
		stats: {
			hp: 3800,
			atk: 25,
			spa: 30,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 144,
		points: 40,
		actions: [
			[moveData['distorsion'], moveData['ironDefense']],
			[moveData['dragonBreath'], moveData['metalClaw'], moveData['metalClaw']],
			[moveData['metalClaw'], moveData['metalClaw'], moveData['metalClaw']],
			[moveData['auraSphere'], moveData['metalClaw'], moveData['metalClaw']],
			[moveData['metalClaw'], moveData['metalClaw'], moveData['metalClaw']],
			[moveData['dragonBreath'], moveData['ironDefense'], moveData['cut'], moveData['cut']],
			[moveData['metalClaw'], moveData['metalClaw'], moveData['metalClaw']],
		]
	},
	'palkia': {
		name: 'palkia',
		image: './assets/images/pokemon/enemy/palkia.png',
		shiny: './assets/images/pokemon/enemy-shiny/palkia.png',
		isBoss: true,
		stats: {
			hp: 4000,
			atk: 20,
			spa: 20,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 144,
		points: 40,
		actions: [
			[moveData['spacialRend'], moveData['lifeDew']],
			[moveData['dragonBreath'], moveData['metalClaw'], moveData['metalClaw']],
			[moveData['metalClaw'], moveData['metalClaw'], moveData['metalClaw']],
			[moveData['auraSphere'], moveData['metalClaw'], moveData['metalClaw']],
			[moveData['metalClaw'], moveData['metalClaw'], moveData['metalClaw']],
			[moveData['dragonBreath'], moveData['lifeDew'], moveData['cut'], moveData['cut']],
			[moveData['metalClaw'], moveData['metalClaw'], moveData['metalClaw']],
		]
	},
	// NORMAL 9
	'salamence': {
		name: 'salamence',
		image: './assets/images/pokemon/enemy/salamence.png',
		shiny: './assets/images/pokemon/enemy-shiny/salamence.png',
		stats: {
			hp: 2000,
			atk: 25,
			spa: 32,
			spe: 32,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 14,
		points: 10,
		actions: [
			[moveData['dragonBreath'], moveData['wingAttack'], moveData['wingAttack']],
			[moveData['metalClaw'], moveData['metalClaw'], moveData['wingAttack'], moveData['wingAttack']],
			[moveData['aerialAce'], moveData['gust'], moveData['gust'], moveData['gust']],
			[moveData['fly'], moveData['gust'], moveData['gust'], moveData['gust']],
		]
	},
	'tyranitar': {
		name: 'tyranitar',
		image: './assets/images/pokemon/enemy/tyranitar.png',
		shiny: './assets/images/pokemon/enemy-shiny/tyranitar.png',
		stats: {
			hp: 2000,
			atk: 35,
			spa: 25,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 15,
		points: 11,
		actions: [
			[moveData['spikes'], moveData['stealthRock'], moveData['ironDefense'], moveData['darkPulse'], moveData['dragonBreath']],
			[moveData['defenseCurl'], moveData['defenseCurl'], moveData['defenseCurl'], moveData['rockThrow'], moveData['rockThrow']],
			[moveData['metalClaw'], moveData['metalClaw'], moveData['earthquake']],
			[moveData['swordsDance'], moveData['metalClaw'], moveData['metalClaw']],
			[moveData['metalClaw'], moveData['metalClaw'], moveData['rockThrow']],
			[moveData['metalClaw'], moveData['metalClaw'], moveData['rockThrow']],
		]
	},
	'aerodactyl': {
		name: 'aerodactyl',
		image: './assets/images/pokemon/enemy/aerodactyl.png',
		shiny: './assets/images/pokemon/enemy-shiny/aerodactyl.png',
		stats: {
			hp: 2000,
			atk: 28,
			spa: 28,
			spe: 28,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 13,
		points: 10,
		actions: [
			[moveData['stealthRock'], moveData['wingAttack'], moveData['wingAttack']],
			[moveData['roost'], moveData['wingAttack'], moveData['wingAttack'], moveData['rockThrow']],
			[moveData['fly'], moveData['rockThrow'], moveData['rockThrow']],
			[moveData['wingAttack'], moveData['wingAttack'], moveData['dragonBreath']],
		]
	},
	'dragonite': {
		name: 'dragonite',
		image: './assets/images/pokemon/enemy/dragonite.png',
		shiny: './assets/images/pokemon/enemy-shiny/dragonite.png',
		stats: {
			hp: 2000,
			atk: 25,
			spa: 25,
			spe: 20,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 14,
		points: 12,
		actions: [
			[moveData['gust'], moveData['extremeSpeed'], moveData['extremeSpeed']],
			[moveData['agility'], moveData['dragonBreath'], moveData['metalClaw'], moveData['slash']],
			[moveData['gust'], moveData['quickAttack'], moveData['quickAttack']],
			[moveData['metalClaw'], moveData['metalClaw'], moveData['slash']],
		]
	},
	'metagross': {
		name: 'metagross',
		image: './assets/images/pokemon/enemy/metagross.png',
		shiny: './assets/images/pokemon/enemy-shiny/metagross.png',
		stats: {
			hp: 2000,
			atk: 25,
			spa: 25,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 15,
		points: 10,
		actions: [
			[moveData['confusion'], moveData['confusion'], moveData['metalClaw'], moveData['metalClaw'], moveData['bulletPunch']],
			[moveData['ironDefense'], moveData['calmMind'], moveData['bulletPunch'], moveData['bulletPunch'], moveData['bulletPunch']],
			[moveData['metalClaw'], moveData['confusion'], moveData['confusion'], moveData['bulletPunch']],
			[moveData['confusion'], moveData['psybeam'], moveData['bulletPunch'], moveData['bulletPunch']],
			[moveData['metalClaw'], moveData['confusion'], moveData['confusion'], moveData['bulletPunch']],
			[moveData['confusion'], moveData['psybeam'], moveData['bulletPunch'], moveData['bulletPunch']],
		]
	},
	'aggron': {
		name: 'aggron',
		image: './assets/images/pokemon/enemy/aggron.png',
		shiny: './assets/images/pokemon/enemy-shiny/aggron.png',
		stats: {
			hp: 2000,
			atk: 28,
			spa: 5,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 15,
		points: 11,
		actions: [
			[moveData['ironDefense'], moveData['metalClaw'], moveData['metalClaw'], moveData['slash']],
			[moveData['ironDefense'], moveData['metalClaw'], moveData['metalClaw'], moveData['ironHead']],
		]
	},
	'snorlax': {
		name: 'snorlax',
		image: './assets/images/pokemon/enemy/snorlax.png',
		shiny: './assets/images/pokemon/enemy-shiny/snorlax.png',
		stats: {
			hp: 2400,
			atk: 25,
			spa: 5,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 16,
		points: 10,
		actions: [
			[moveData['powerUpPunch'], moveData['powerUpPunch'], moveData['tackle'], moveData['tackle'], moveData['defenseCurl']],
			[moveData['defenseCurl'], moveData['defenseCurl'], moveData['defenseCurl'], moveData['rest']],
			[moveData['powerUpPunch'], moveData['brickBreak'], moveData['tackle']],
			[moveData['powerUpPunch'], moveData['powerUpPunch'], moveData['tackle'], moveData['tackle'], moveData['defenseCurl']],
			[moveData['powerUpPunch'], moveData['powerUpPunch'], moveData['tackle'], moveData['tackle'], moveData['defenseCurl']],
			[moveData['powerUpPunch'], moveData['brickBreak'], moveData['tackle']],
			[moveData['powerUpPunch'], moveData['powerUpPunch'], moveData['tackle'], moveData['tackle'], moveData['defenseCurl']],
		]
	},
	'garchomp': {
		name: 'garchomp',
		image: './assets/images/pokemon/enemy/garchomp.png',
		shiny: './assets/images/pokemon/enemy-shiny/garchomp.png',
		stats: {
			hp: 2000,
			atk: 33,
			spa: 5,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 15,
		points: 10,
		actions: [
			[moveData['coaching'], moveData['earthquake'], moveData['earthquake'], moveData['slash']],
			[moveData['honeClaws'], moveData['bulldoze'], moveData['bulldoze'], moveData['cut']],
			[moveData['swordsDance'], moveData['earthquake'], moveData['earthquake'], moveData['slash']],
			[moveData['focusEnergy'], moveData['bulldoze'], moveData['bulldoze'], moveData['cut']],
		]
	},
	'togekiss': {
		name: 'togekiss',
		image: './assets/images/pokemon/enemy/togekiss.png',
		shiny: './assets/images/pokemon/enemy-shiny/togekiss.png',
		stats: {
			hp: 2000,
			atk: 20,
			spa: 40,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 14,
		points: 12,
		actions: [
			[moveData['disarmingVoice'], moveData['disarmingVoice'], moveData['fly'], moveData['drainingKiss']],
			[moveData['disarmingVoice'], moveData['disarmingVoice'], moveData['hyperVoice'], moveData['drainingKiss']],
			[moveData['disarmingVoice'], moveData['disarmingVoice'], moveData['hyperVoice'], moveData['drainingKiss']],
		]
	},
	'gliscor': {
		name: 'gliscor',
		image: './assets/images/pokemon/enemy/gliscor.png',
		shiny: './assets/images/pokemon/enemy-shiny/gliscor.png',
		stats: {
			hp: 2000,
			atk: 35,
			spa: 40,
			spe: 15,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 14,
		points: 10,
		actions: [
			[moveData['focusEnergy'], moveData['nightSlash'], moveData['poisonSting'], moveData['poisonSting'], moveData['poisonSting']],
			[moveData['honeClaws'], moveData['direClaw'], moveData['poisonSting'], moveData['poisonSting'], moveData['poisonSting']],
			[moveData['poisonSting'], moveData['poisonSting'], moveData['poisonSting'], moveData['poisonSting'], moveData['poisonSting']],
			[moveData['poisonSting'], moveData['poisonSting'], moveData['poisonSting'], moveData['poisonSting'], moveData['poisonSting']],
			[moveData['poisonSting'], moveData['poisonSting'], moveData['poisonSting'], moveData['poisonSting'], moveData['poisonSting']],
		]
	},
	// BOSS 9
	'mewtwo': {
		name: 'mewtwo',
		image: './assets/images/pokemon/enemy/mewtwo.png',
		shiny: './assets/images/pokemon/enemy-shiny/mewtwo.png',
		isFinalBoss: true,
		stats: {
			hp: 5100,
			atk: 5,
			spa: 31,
			spe: 5,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 151,
		points: 200,
		actions: [
			[moveData['calmMind'], moveData['confusion'], moveData['confusion'], moveData['shadowBall']],
			[moveData['confusion'], moveData['confusion'], moveData['confusion'], moveData['psybeam']],
			[moveData['confusion'], moveData['confusion'], moveData['confusion'], moveData['psybeam']],
			[moveData['nastyPlot'], moveData['confusion'], moveData['confusion'], moveData['shadowBall']],
		]
	},
	'deoxys': {
		name: 'deoxys',
		image: './assets/images/pokemon/enemy/deoxys.png',
		shiny: './assets/images/pokemon/enemy-shiny/deoxys.png',
		isFinalBoss: true,
		stats: {
			hp: 5800,
			atk: 28,
			spa: 28,
			spe: 28,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 151,
		points: 200,
		actions: [
			[moveData['agility'], moveData['extremeSpeed'], moveData['extremeSpeed']],
			[moveData['calmMind'], moveData['confusion'], moveData['confusion']],
			[moveData['coaching'], moveData['meteorMash'], moveData['meteorMash'], moveData['meteorMash']],
			[moveData['focusEnergy'], moveData['auraSphere'], moveData['swift']],
			[moveData['swordsDance'], moveData['confusion'], moveData['confusion']],
			[moveData['nastyPlot'], moveData['meteorMash'], moveData['meteorMash'], moveData['meteorMash']],
		]
	},
	'darkrai': {
		name: 'darkrai',
		image: './assets/images/pokemon/enemy/darkrai.png',
		shiny: './assets/images/pokemon/enemy-shiny/darkrai.png',
		isFinalBoss: true,
		stats: {
			hp: 6000,
			atk: 33,
			spa: 33,
			spe: 33,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 151,
		points: 200,
		actions: [
			[moveData['darkVoid'], moveData['shadowBall']],
			[moveData['calmMind'], moveData['nightSlash'], moveData['nightSlash']],
			[moveData['darkVoid'], moveData['nightSlash'], moveData['shadowBall']],
			[moveData['darkPulse'], moveData['nightSlash'], moveData['nightSlash']],
			[moveData['darkVoid'], moveData['nightSlash'], moveData['shadowBall']],
			[moveData['darkPulse'], moveData['nightSlash'], moveData['nightSlash']],
		]
	},
	'giratina': {
		name: 'giratina',
		image: './assets/images/pokemon/enemy/giratina.png',
		shiny: './assets/images/pokemon/enemy-shiny/giratina.png',
		isFinalBoss: true,
		stats: {
			hp: 6000,
			atk: 33,
			spa: 33,
			spe: 33,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 151,
		points: 200,
		actions: [
			[moveData['distorsion'], moveData['shadowBall']],
			[moveData['shadowBall'], moveData['nightSlash'], moveData['nightSlash']],
			[moveData['calmMind'], moveData['nightSlash'], moveData['shadowBall']],
			[moveData['nightSlash'], moveData['nightSlash'], moveData['darkPulse']],
			[moveData['nastyPlot'], moveData['nightSlash'], moveData['shadowBall']],
			[moveData['shadowBall'], moveData['nightSlash'], moveData['nightSlash']],
		]
	},
	'rayquaza': {
		name: 'rayquaza',
		image: './assets/images/pokemon/enemy/rayquaza.png',
		shiny: './assets/images/pokemon/enemy-shiny/rayquaza.png',
		isFinalBoss: true,
		stats: {
			hp: 5750,
			atk: 34,
			spa: 34,
			spe: 34,
			res: 0,
			crt: 1,
			crtDmg: 200
		},
		gold: 151,
		points: 50,
		actions: [
			[moveData['fly'], moveData['agility'], moveData['dragonBreath'], moveData['dragonBreath']],
			[moveData['gust'], moveData['gust'], moveData['gust'], moveData['dragonBreath'], moveData['dragonBreath']],
			[moveData['metalClaw'], moveData['metalClaw'], moveData['metalClaw'], moveData['aerialAce'], moveData['dragonBreath']],
		]
	},
	'arceus': {
		name: 'arceus',
		image: './assets/images/pokemon/enemy/arceus.png',
		shiny: './assets/images/pokemon/enemy-shiny/arceus.png',
		isFinalBoss: true,
		stats: {
			hp: 5500,
			atk: 25,
			spa: 25,
			spe: 25,
			res: 0,
			crt: 1,
			crtDmg: 50
		},
		gold: 151,
		points: 200,
		actions: [
			[moveData['judgment']],
			[moveData['judgment'], moveData['judgment']],
			[moveData['judgment'], moveData['judgment'], moveData['judgment']],
			[moveData['judgment'], moveData['judgment'], moveData['judgment'], moveData['judgment']],
			[moveData['nastyPlot'], moveData['swordsDance'], moveData['rest']],
		]
	},
}