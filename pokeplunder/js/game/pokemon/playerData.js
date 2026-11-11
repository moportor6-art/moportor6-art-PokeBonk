import { moveData } from './moveData.js'
import { moveUpgradeData } from './moveUpgradeData.js'

export const playerData = {
	'pikachu': {
		specie: 'pikachu',
		image: './assets/images/pokemon/player/pikachu.png',
		portrait: './assets/images/pokemon/player/pikachuPortrait.png',
		stats: {
			hp: 80, 
			ap: 6,
			mp: 3,
			atk: 10,
			spa: 12,
			spe: 10,
			res: 0, 
			crt: 0,
			crtDmg: 50
		},
		moves: [
			moveData['quickAttack'], moveData['doubleTeam'], moveData['thunderShock'], moveData['feint'],
		],
		movesPool: [
			moveData['nuzzle'], moveData['thunderbolt'], moveData['thunder'], moveData['electroBall'],
			moveData['voltTackle'], moveData['discharge'], moveData['charge'], moveData['nastyPlot'],
			moveData['thief'], moveData['voltSwitch'], moveData['thunderPunch'], moveData['agility'],
			moveData['chargeBeam'], moveData['electroweb'], moveData['zippyZap'], moveData['risingVoltage'],
		]
	},
	'cubone': {
		specie: 'cubone',
		image: './assets/images/pokemon/player/cubone.png',
		portrait: './assets/images/pokemon/player/cubonePortrait.png',
		stats: {
			hp: 80,
			ap: 6,
			mp: 3,
			atk: 11,
			spa: 9,
			spe: 6,
			res: 0,
			crt: 0,
			crtDmg: 50
		},
		moves: [ 
			moveData['tackle'], moveData['sandstorm'], moveData['boneClub'], moveData['mudSlap'],
		],
		movesPool: [
			moveData['bonemerang'], moveData['shadowBone'], moveData['dig'], moveData['stealthRock'],
			moveData['swordsDance'], moveData['focusEnergy'], moveData['ironHead'], moveData['rockClimb'],
			moveData['sandTomb'], moveData['ironTail'], moveData['thief'], moveData['ironDefense'],
			moveData['bulldoze'], moveData['scorchingSands'], moveData['headbutt'], moveData['firePunch'],
			moveData['boneRush'],
		]
	},
	'scyther': {
		specie: 'scyther',
		image: './assets/images/pokemon/player/scyther.png',
		portrait: './assets/images/pokemon/player/scytherPortrait.png',
		stats: {
			hp: 75,
			ap: 6,
			mp: 4,
			atk: 11,
			spa: 5,
			spe: 11,
			res: 0,
			crt: 0,
			crtDmg: 50
		},
		moves: [
			moveData['cut'], moveData['focusEnergy'], moveData['slash'], moveData['furyCutter'],			
		],
		movesPool: [
			moveData['airSlash'], moveData['xScissor'], moveData['trailblaze'], moveData['uTurn'],
			moveData['doubleTeam'], moveData['wingAttack'], moveData['agility'], moveData['swordsDance'],
			moveData['pounce'], moveData['bulletPunch'], moveData['metalClaw'], moveData['airCutter'],
			moveData['bounce'], moveData['dualWingbeat'], moveData['lunge'], moveData['bugBuzz'],
		]
	},
	'marill': {
		specie: 'marill',
		image: './assets/images/pokemon/player/marill.png',
		portrait: './assets/images/pokemon/player/marillPortrait.png',
		stats: {
			hp: 80,
			ap: 6,
			mp: 3,
			atk: 6,
			spa: 11,
			spe: 4,
			res: 0,
			crt: 0,
			crtDmg: 50
		},
		moves: [
			moveData['takeDown'], moveData['aquaRing'], moveData['waterGun'], moveData['bubble'],		
		],
		movesPool: [
			moveData['aquaTail'], moveData['iceBeam'], moveData['playRough'], moveData['scald'],
			moveData['drainingKiss'], moveData['liquidation'], moveData['icePunch'], moveData['waterfall'],
			moveData['bodySlam'], moveData['calmMind'], moveData['disarmingVoice'], moveData['rainDance'],
			moveData['rest'], moveData['headbutt'], moveData['bounce'], moveData['surf'],
		]
	},
	'sneasel': {
		specie: 'sneasel',
		image: './assets/images/pokemon/player/sneasel.png',
		portrait: './assets/images/pokemon/player/sneaselPortrait.png',
		stats: {
			hp: 75,
			ap: 6,
			mp: 3,
			atk: 11,
			spa: 8,
			spe: 14,
			res: 0,
			crt: 10,
			crtDmg: 50
		},
		moves: [
			moveData['scratch'], moveData['honeClaws'], moveData['icyWind'], moveData['iceShard'],			
		],
		movesPool: [
			moveData['darkPulse'], moveData['nightSlash'], moveData['poisonJab'], moveData['direClaw'],
			moveData['doubleTeam'], moveData['shadowClaw'], moveData['agility'], moveData['swordsDance'],
			moveData['powerTrip'], moveData['trailblaze'], moveData['metalClaw'], moveData['icePunch'],
			moveData['focusEnergy'], moveData['slash'], moveData['furyCutter'], moveData['dig']
		]
	},
	'taillow': {
		specie: 'taillow',
		image: './assets/images/pokemon/player/taillow.png',
		portrait: './assets/images/pokemon/player/taillowPortrait.png',
		stats: {
			hp: 80,
			ap: 6,
			mp: 3,
			atk: 11,
			spa: 11,
			spe: 11,
			res: 0,
			crt: 0,
			crtDmg: 50
		},
		moves: [
			moveData['peck'], moveData['roost'], moveData['gust'], moveData['wingAttack'],	
		],
		movesPool: [
			moveData['steelWing'], moveData['airSlash'], moveData['airCutter'], moveData['uTurn'],
			moveData['pluck'], moveData['fly'], moveData['braveBird'], moveData['aerialAce'],
			moveData['workUp'], moveData['honeClaws'], moveData['agility'], moveData['doubleTeam'],
			moveData['dualWingbeat'], moveData['skyAttack'], moveData['twister'], moveData['heatWave'],
			moveData['drillPeck'],
		]
	},
	'cacnea': {
		specie: 'cacnea',
		image: './assets/images/pokemon/player/cacnea.png',
		portrait: './assets/images/pokemon/player/cacneaPortrait.png',
		stats: {
			hp: 80,
			ap: 6,
			mp: 3,
			atk: 14,
			spa: 14,
			spe: 6,
			res: 0,
			crt: 0,
			crtDmg: 50
		},
		moves: [
			moveData['sandAttack'], moveData['growth'], moveData['absorb'], moveData['pinMissile'],
		],
		movesPool: [
			moveData['grassKnot'], moveData['megaDrain'], moveData['gigaDrain'], moveData['poisonJab'],
			moveData['magicalLeaf'], moveData['energyBall'], moveData['needleArm'], moveData['bulldoze'],
			moveData['steamroller'], moveData['ingrain'], moveData['furyCutter'], moveData['nightSlash'],
			moveData['spikes'], moveData['trailblaze'], moveData['bulletSeed'], moveData['scorchingSands'],
		]
	},
	'croagunk': {
		specie: 'croagunk',
		image: './assets/images/pokemon/player/croagunk.png',
		portrait: './assets/images/pokemon/player/croagunkPortrait.png',
		stats: {
			hp: 75,
			ap: 6,
			mp: 3,
			atk: 8,
			spa: 9,
			spe: 8,
			res: 0,
			crt: 0,
			crtDmg: 50
		},
		moves: [
			moveData['poisonSting'], moveData['smog'], moveData['poisonJab'], moveData['thief'],
		],
		movesPool: [
			moveData['purify'], moveData['mudSlap'], moveData['venoshock'], moveData['sludgeBomb'],
			moveData['feint'], moveData['pursuit'], moveData['poisonFang'], moveData['drainPunch'],
			moveData['toxic'], moveData['nastyPlot'], moveData['swordsDance'], moveData['xScissor'],
			moveData['shadowClaw'], moveData['closeCombat'], moveData['sludgeWave'], moveData['coaching'],
		]
	},
	'riolu': {
		specie: 'riolu',
		image: './assets/images/pokemon/player/riolu.png',
		portrait: './assets/images/pokemon/player/rioluPortrait.png',
		stats: {
			hp: 75,
			ap: 6,
			mp: 3,
			atk: 11,
			spa: 9,
			spe: 10,
			res: 0,
			crt: 0,
			crtDmg: 50
		},
		moves: [
			moveData['swift'], moveData['lifeDew'], moveData['reversal'], moveData['powerUpPunch'],
		],
		movesPool: [
			moveData['drainPunch'], moveData['closeCombat'], moveData['bulletPunch'], moveData['auraSphere'],
			moveData['extremeSpeed'], moveData['forcePalm'], moveData['meteorMash'], moveData['metalClaw'],
			moveData['swordsDance'], moveData['calmMind'], moveData['agility'], moveData['ironDefense'],
			moveData['feint'], moveData['ironHead'], moveData['zenHeadbutt'], moveData['flashCannon'],
		]
	},
	'shuckle': {
		specie: 'shuckle',
		image: './assets/images/pokemon/player/shuckle.png',
		portrait: './assets/images/pokemon/player/shucklePortrait.png',
		stats: {
			hp: 80,
			ap: 6,
			mp: 3,
			atk: 3,
			spa: 3,
			spe: 3,
			res: 0,
			crt: 0,
			crtDmg: 50
		},
		moves: [
			moveData['gyroBall'], moveData['wrap'], moveData['struggleBug'], moveData['defenseCurl'],
		],
		movesPool: [
			moveData['stealthRock'], moveData['spikes'], moveData['ingrain'], moveData['rest'],
			moveData['bodySlam'], moveData['ironDefense'], moveData['ironHead'], moveData['headbutt'],
			moveData['dig'], moveData['shellSmash'], moveData['bugBuzz'], moveData['rockSmash'],
			moveData['rockPolish'], moveData['doubleEdge'], moveData['stealRoller'], moveData['ancientPower'],
		]
	},
	'sableye': {
		specie: 'sableye',
		image: './assets/images/pokemon/player/sableye.png',
		portrait: './assets/images/pokemon/player/sableyePortrait.png',
		stats: {
			hp: 70,
			ap: 6,
			mp: 3,
			atk: 6,
			spa: 7,
			spe: 6,
			res: 0,
			crt: 0,
			crtDmg: 50
		},
		moves: [
			moveData['shadowBall'], moveData['shadowSneak'], moveData['powerUpPunch'], moveData['meanLook'],
		],
		movesPool: [
			moveData['slash'], moveData['direClaw'], moveData['furyCutter'], moveData['poisonJab'],
			moveData['astonish'], moveData['shadowClaw'], moveData['feint'], moveData['pursuit'],
			moveData['powerGem'], moveData['darkPulse'], moveData['powerTrip'], moveData['honeClaws'],
			moveData['willOWisp'], moveData['energyBall'], moveData['crunch'], moveData['magicalLeaf'],
		]
	},
	'mawile': {
		specie: 'mawile',
		image: './assets/images/pokemon/player/mawile.png',
		portrait: './assets/images/pokemon/player/mawilePortrait.png',
		stats: {
			hp: 75,
			ap: 6,
			mp: 3,
			atk: 12,
			spa: 7,
			spe: 7,
			res: 0,
			crt: 0,
			crtDmg: 50
		},
		moves: [
			moveData['jawLock'], moveData['fairyWind'], moveData['astonish'], moveData['workUp'],
		],
		movesPool: [
			moveData['ironHead'], moveData['playRough'], moveData['powerUpPunch'], moveData['drainPunch'],
			moveData['ironDefense'], moveData['ironTail'], moveData['zenHeadbutt'], moveData['rockSmash'],
			moveData['bulletPunch'], moveData['forcePalm'], moveData['swordsDance'], moveData['crunch'],
			moveData['metalClaw'], moveData['flashCannon'], moveData['focusEnergy'], moveData['firePunch'],
		]
	},
}