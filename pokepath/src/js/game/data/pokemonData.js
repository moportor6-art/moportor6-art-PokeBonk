import { projectileData } from './projectileData.js';
import { abilityData } from './abilityData.js';

export const pokemonData = {
	charmander: {
		id: 0,
		key: 'charmander',
		name: ['charmander', 'charmander', 'Salamèche', 'charmander', 'charmander', 'glumanda', 'ヒトカゲ', '파이리', '小火龍', 'charmander'],
		color: '#ff8463',
		ability: abilityData['burn'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/charmander.png',
			image: './src/assets/images/pokemon/normal/charmander-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1100,
			scale: 0
		},
		power: {
			base: 13,
			scale: 2,
		},
		critical: {
			base: 0.5,
			scale: 0.1
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'charmeleon',
			level: 16
		},	
	},
	charmeleon: {
		id: 0,
		key: 'charmeleon',
		name: ['charmeleon', 'charmeleon', 'Reptincel', 'charmeleon', 'charmeleon', 'glutexo', 'リザード', '리자드', '火恐龍', 'charmeleon'],
		color: '#d63900',
		ability: abilityData['burn'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/charmeleon.png',
			image: './src/assets/images/pokemon/normal/charmeleon-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 950,
			scale: -2
		},
		power: {
			base: 25,
			scale: 2.4,
		},
		critical: {
			base: 2,
			scale: 0.1
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'charizard',
			level: 36
		},	
	},
	charizard: {
		id: 0,
		key: 'charizard',
		name: ['charizard', 'charizard', 'Dracaufeu', 'charizard', 'charizard', 'glurak', 'リザードン', '리자몽', '噴火龍', 'charizard'],
		color: '#d63801',
		ability: abilityData['flamethrower'],
		projectileSound: 'projectile1',
		streamAngle: 0.25,
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/charizard.png',
			image: './src/assets/images/pokemon/normal/charizard-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 50,
			scale: 6,
		},
		critical: {
			base: 2,
			scale: 0.1
		},
		range: {
			base: 165,
			scale: 0.15,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'stream',
		costScale: 'mid',
		tiles: [1, 4],	
		mega: ['megaCharizardX', 'megaCharizardY']
	},
	megaCharizardX: {
		id: 0,
		key: 'megaCharizardX',
		name: ['M-chard X', 'M-chard X', 'M-Drac X', 'M-chard X', 'M-chard X', 'M-glurak X', 'メガリザードンX', '메가리자몽 X', '超进化喷火龙X', 'M-chard X'],
		color: '#37aee7',
		ability: abilityData['fireBlast'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue2'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaCharizardX.png',
			image: './src/assets/images/pokemon/normal/megaCharizardX-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 900,
			scale: -2
		},
		power: {
			base: 270,
			scale: 4.3,
		},
		critical: {
			base: 10,
			scale: 0.3
		},
		range: {
			base: 180,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],	
		base: 'charizard'
	},
	megaCharizardY: {
		id: 0,
		key: 'megaCharizardY',
		name: ['M-chard Y', 'M-chard Y', 'M-Drac Y', 'M-chard Y', 'M-chard Y', 'M-glurak Y', 'メガリザードンY', '메가리자몽 Y', '超进化喷火龙Y', 'M-chard Y'],
		color: '#f87838',
		ability: abilityData['drought'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		streamAngle: 0.3,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaCharizardY.png',
			image: './src/assets/images/pokemon/normal/megaCharizardY-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 155,
			scale: 6.3,
		},
		critical: {
			base: 2,
			scale: 0.1
		},
		range: {
			base: 165,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'stream',
		costScale: 'mid',
		tiles: [1, 4],	
		base: 'charizard'
	},
	treecko: {
		id: 1,
		key: 'treecko',
		name: ['treecko', 'treecko', 'Arcko', 'treecko', 'treecko', 'geckarbor', 'キモリ', '나무지기', '木守宮', 'treecko'],
		color: '#b7d667',
		ability: abilityData['ambusher'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/treecko.png',
			image: './src/assets/images/pokemon/normal/treecko-idle.png',
			frames: 3,
			hold: 15
		},
		speed: {
			base: 1200,
			scale: -2
		},
		power: {
			base: 10,
			scale: 2,
		},
		critical: {
			base: 0,
			scale: 0.2
		},
		range: {
			base: 95,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'grovyle',
			level: 16,
		},	
	},
	grovyle: {
		id: 1,
		key: 'grovyle',
		name: ['grovyle', 'grovyle', 'Massko', 'grovyle', 'grovyle', 'reptain', 'ジュプトル', '나무돌이', '森林蜥蜴', 'grovyle'],
		color: '#368f0e',
		ability: abilityData['ambusher'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/grovyle.png',
			image: './src/assets/images/pokemon/normal/grovyle-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 1200,
			scale: -3
		},
		power: {
			base: 27,
			scale: 2.2,
		},
		critical: {
			base: 0,
			scale: 0.25
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'sceptile',
			level: 36,
		},	
	},
	sceptile: {
		id: 1,
		key: 'sceptile',
		name: ['sceptile', 'sceptile', 'Jungko', 'sceptile', 'sceptile', 'gewaldro', 'ジュカイン', '나무킹', '蜥蜴王', 'sceptile'],
		color: '#9fcf6f',
		ability: abilityData['ambusher'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sceptile.png',
			image: './src/assets/images/pokemon/normal/sceptile-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 1150,
			scale: -3
		},
		power: {
			base: 50,
			scale: 5.5, //Changelog: 4.9->5
		},
		critical: {
			base: 0,
			scale: 0.45 //Changelog: 0.3->0.45
		},
		range: {
			base: 145,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		mega: ['megaSceptile']
	},
	megaSceptile: {
		id: 1,
		key: 'megaSceptile',
		name: ['M-sceptile', 'M-sceptile', 'M-Jungko', 'M-sceptile', 'M-sceptile', 'M-gewaldro', "メガジュカイン", "메가쟈카인", "超进化蜥蜴王", 'M-sceptile'],
		color: '#62b52f',
		ability: abilityData['lightningRod'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaSceptile.png',
			image: './src/assets/images/pokemon/normal/megaSceptile-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 1050,
			scale: -3
		},
		power: {
			base: 450,
			scale: 6.5, 
		},
		critical: {
			base: 0,
			scale: 0.45 
		},
		range: {
			base: 160,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		base: 'sceptile'
	},
	froaki: {
		id: 2,
		key: 'froaki',
		name: ['froakie', 'froakie', 'Grenousse', 'froakie', 'froakie', 'froxy', 'ケロマツ', '개구마르', '呱呱泡蛙', 'froakie'],
		color: '#20adbc',
		ability: abilityData['ninja'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		ricochet: 3,
		projectile: projectileData['blue7'],
		sprite: {
			base: './src/assets/images/pokemon/normal/froaki.png',
			image: './src/assets/images/pokemon/normal/froaki-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -1
		},
		power: {
			base: 5,
			scale: 1,
		},
		critical: {
			base: 0.5,
			scale: 0.1
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'frogadier',
			level: 16,
		},	
	},
	frogadier: {
		id: 2,
		key: 'frogadier',
		name: ['frogadier', 'frogadier', 'Croâporal', 'frogadier', 'frogadier', 'amphizel', 'ゲコガシラ', '개굴반장', '呱頭蛙', 'frogadier'],
		color: '#4366b7',
		ability: abilityData['ninja'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		ricochet: 4,
		projectile: projectileData['blue7'],
		sprite: {
			base: './src/assets/images/pokemon/normal/frogadier.png',
			image: './src/assets/images/pokemon/normal/frogadier-idle.png',
			frames: 15,
			hold: 5
		},
		speed: {
			base: 900,
			scale: -2
		},
		power: {
			base: 8,
			scale: 1.2,
		},
		critical: {
			base: 1.5,
			scale: 0.2
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'greninja',
			level: 36,
		},	
	},
	greninja: {
		id: 2,
		key: 'greninja',
		name: ['greninja', 'greninja', 'Amphinobi', 'greninja', 'greninja', 'quajutsu', 'ゲッコウガ', '개굴닌자', '甲賀忍蛙', 'greninja'],
		color: '#2657ba',
		ability: abilityData['ninja'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		ricochet: 5,
		projectile: projectileData['blue7'],
		sprite: {
			base: './src/assets/images/pokemon/normal/greninja.png',
			image: './src/assets/images/pokemon/normal/greninja-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 850,
			scale: -5
		},
		power: {
			base: 18,
			scale: 1.55,
		},
		critical: {
			base: 5,
			scale: 0.45 //Changelog: 0.4->0.45
		},
		range: {
			base: 145, //Changelog: 130->145
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
	},
	spoink: {
		id: 3,
		key: 'spoink',
		name: ['spoink', 'spoink', 'Spoink', 'spoink', 'spoink', 'spoink', 'バネブー', '피그점프', '跳跳猪', 'spoink'],
		color: '#aeb6bf',
		ability: abilityData['frisk'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/spoink.png',
			image: './src/assets/images/pokemon/normal/spoink-idle.png',
			frames: 8,
			hold: 10
		},
		speed: {
			base: 1800,
			scale: -2
		},
		power: {
			base: 30,
			scale: 7,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'grumpig',
			level: 32
		},	
	},
	grumpig: {
		id: 3,
		key: 'grumpig',
		name: ['grumpig', 'grumpig', 'Groret', 'grumpig', 'grumpig', 'groink', 'ブーピッグ', '피그킹', '胖彈豬', 'grumpig'],
		color: '#c797de',
		ability: abilityData['frisk'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/grumpig.png',
			image: './src/assets/images/pokemon/normal/grumpig-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1600,
			scale: -8.5
		},
		power: {
			base: 120,
			scale: 10.7,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 145,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2, 4],	
	},
	natu: {
		id: 4,
		key: 'natu',
		name: ['natu', 'natu', 'Natu', 'natu', 'natu', 'natu', 'ネイティ', '네이티', '小果然鳥', 'natu'],
		color: '#9fcf6f',
		ability: abilityData['frisk'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/natu.png',
			image: './src/assets/images/pokemon/normal/natu-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1400,
			scale: -3
		},
		power: {
			base: 20,
			scale: 2.7,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'xatu',
			level: 25
		},	
	},
	xatu: {
		id: 4,
		key: 'xatu',
		name: ['xatu', 'xatu', 'Xatu', 'xatu', 'xatu', 'xatu', 'ネイティオ', '네이티오', '奇異鳥', 'xatu'],
		color: '#5fb727',
		ability: abilityData['vigilantFrisk'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/xatu.png',
			image: './src/assets/images/pokemon/normal/xatu-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 1350,
			scale: -5.5
		},
		power: {
			base: 35,
			scale: 4.4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 160,
			scale: 0.5,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],	
	},
	voltorb: {
		id: 5,
		key: 'voltorb',
		name: ['voltorb', 'voltorb', 'Voltorbe', 'voltorb', 'voltorb', 'voltobal', 'ビリリダマ', '찌리리공', '電球', 'voltorb'],
		color: '#d63901',
		ability: abilityData['stunMonoNerf'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/voltorb.png',
			image: './src/assets/images/pokemon/normal/voltorb-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 650,
			scale: -2
		},
		power: {
			base: 4,
			scale: 2,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'electrode',
			level: 30
		},	
	},
	electrode: {
		id: 5,
		key: 'electrode',
		name: ['electrode', 'electrode', 'Électrode', 'electrode', 'electrode', 'lektrobal', 'マルマイン', '붐볼', '電擊球', 'electrode'],
		color: '#adb4bc',
		ability: abilityData['stunMonoNerf'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/electrode.png',
			image: './src/assets/images/pokemon/normal/electrode-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 650,
			scale: -3
		},
		power: {
			base: 35,
			scale: 2.9,
		},
		critical: {
			base: 15,
			scale: 0.1
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],	
	},
	ekans: {
		id: 6,
		key: 'ekans',
		name: ['ekans', 'ekans', 'Abo', 'ekans', 'ekans', 'rettan', 'アーボ', '아보', '阿柏蛇', 'ekans'],
		color: '#b594df',
		ability: abilityData['toxic'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/ekans.png',
			image: './src/assets/images/pokemon/normal/ekans-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1800,
			scale: -2
		},
		power: {
			base: 12,
			scale: 2.2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2], 
		evolution: {
			pokemon: 'arbok',
			level: 22
		},	
	},
	arbok: {
		id: 6,
		key: 'arbok',
		name: ['arbok', 'arbok', 'Arbok', 'arbok', 'arbok', 'arbok', 'アーボック', '아보크', '阿柏怪', 'arbok'],
		color: '#8c62bc',
		ability: abilityData['toxic'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/arbok.png',
			image: './src/assets/images/pokemon/normal/arbok-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1800,
			scale: -4
		},
		power: {
			base: 75,
			scale: 10.2,
		},
		critical: {
			base: 10, 
			scale: 0.2 
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2], 
	},
	machop: {
		id: 7,
		key: 'machop',
		name: ['machop', 'machop', 'Machoc', 'machop', 'machop', 'machollo', 'ワンリキー', '알통몬', '腕力', 'machop'],
		color: '#8cacb5',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/machop.png',
			image: './src/assets/images/pokemon/normal/machop-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1650,
			scale: -1
		},
		power: {
			base: 9,
			scale: 4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'machoke',
			level: 28
		},	
	},
	machoke: {
		id: 7,
		key: 'machoke',
		name: ['machoke', 'machoke', 'Machopeur', 'machoke', 'machoke', 'maschock', 'ゴーリキー', '근육몬', '豪力', 'machoke'],
		color: '#b595de',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/machoke.png',
			image: './src/assets/images/pokemon/normal/machoke-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1600,
			scale: -1
		},
		power: {
			base: 30,
			scale: 6.5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'machamp',
			level: 42
		},	
	},
	machamp: {
		id: 7,
		key: 'machamp',
		name: ['machamp', 'machamp', 'Mackogneur', 'machamp', 'machamp', 'machomei', 'カイリキー', '괴력몬', '怪力', 'machamp'],
		color: '#d7e6df',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/machamp.png',
			image: './src/assets/images/pokemon/normal/machamp-idle.png',
			frames: 10,
			hold: 7
		},
		speed: {
			base: 1600,
			scale: -1
		},
		power: {
			base: 200,
			scale: 18.3,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 135,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],	
	},
	mankey: {
		id: 8,
		key: 'mankey',
		name: ['mankey', 'mankey', 'Férosinge', 'mankey', 'mankey', 'menki', 'マンキー', '망키', '猴怪', 'mankey'],
		color: '#fff79c',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/mankey.png',
			image: './src/assets/images/pokemon/normal/mankey-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1300,
			scale: -2
		},
		power: {
			base: 12,
			scale: 3.8,
		},
		critical: {
			base: 0,
			scale: 0.5 //Changelog: 0.3->0.5
		},
		range: {
			base: 100,
			scale: 0.1, //Changelog: 0->0.1
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'primeape',
			level: 28
		},	
	},
	primeape: {
		id: 8,
		key: 'primeape',
		name: ['primeape', 'primeape', 'Colossinge', 'primeape', 'primeape', 'rasaff', 'オコリザル', '성원숭', '火爆猴', 'primeape'],
		color: '#fe845a',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/primeape.png',
			image: './src/assets/images/pokemon/normal/primeape-idle.png',
			frames: 8,
			hold: 12
		},
		speed: {
			base: 1150,
			scale: -3
		},
		power: {
			base: 55,
			scale: 6.5,
		},
		critical: {
			base: 0,
			scale: 0.5 //Changelog: 0.3->0.5
		},
		range: {
			base: 100,
			scale: 0.2, //Changelog: 0->0.2
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'annihilape',
			level: 70
		},	
	},
	annihilape: {
		id: 8,
		key: 'annihilape',
		name: ['Annihilape', 'Annihilape', 'Courrousinge', 'Annihilape', 'Annihilape', 'Epitaff', 'コノヨザル', '저승갓숭', '棄世猴', 'Annihilape'],
		color: '#a5abb2',
		ability: abilityData['rageFist'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/annihilape.png',
			image: './src/assets/images/pokemon/normal/annihilape-idle.png',
			frames: 3,
			hold: 12
		},
		speed: {
			base: 1150,
			scale: -3
		},
		power: {
			base: 55,
			scale: 7.6,
		},
		critical: {
			base: 0,
			scale: 0.5 //Changelog: 0.3->0.5
		},
		range: {
			base: 115,
			scale: 0.2, //Changelog: 0->0.2
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
	},
	chimchar: {
		id: 9,
		key: 'chimchar',
		name: ['chimchar', 'chimchar', 'Ouisticram', 'chimchar', 'chimchar', 'panflam', 'ヒコザル', '불꽃숭이', '小火焰猴', 'chimchar'],
		color: '#df771e',
		ability: abilityData['burn'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red2'],
		sprite: {
			base: './src/assets/images/pokemon/normal/chimchar.png',
			image: './src/assets/images/pokemon/normal/chimchar-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1150,
			scale: -2
		},
		power: {
			base: 15,
			scale: 2,
		},
		critical: {
			base: 0,
			scale: 0.2
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'monferno',
			level: 16,
		},	
	},
	monferno: {
		id: 9,
		key: 'monferno',
		name: ['monferno', 'monferno', 'Chimpenfeu', 'monferno', 'monferno', 'panpyro', 'モウカザル', '파이숭이', '猛火猴', 'monferno'],
		color: '#ff962f',
		ability: abilityData['burn'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red2'],
		sprite: {
			base: './src/assets/images/pokemon/normal/monferno.png',
			image: './src/assets/images/pokemon/normal/monferno-idle.png',
			frames: 11,
			hold: 7
		},
		speed: {
			base: 1050,
			scale: -3
		},
		power: {
			base: 25,
			scale: 4.2,
		},
		critical: {
			base: 0,
			scale: 0.3
		},
		range: {
			base: 115,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'infernape',
			level: 36,
		},	
	},
	infernape: {
		id: 9,
		key: 'infernape',
		name: ['infernape', 'infernape', 'Simiabraz', 'infernape', 'infernape', 'panferno', 'ゴウカザル', '초염몽', '烈焰猴', 'infernape'],
		color: '#df8626',
		ability: abilityData['burn'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red2'],
		sprite: {
			base: './src/assets/images/pokemon/normal/infernape.png',
			image: './src/assets/images/pokemon/normal/infernape-idle.png',
			frames: 15,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -5
		},
		power: {
			base: 60,
			scale: 6.4,
		},
		critical: {
			base: 0,
			scale: 0.4
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
	yamask: {
		id: 10,
		key: 'yamask',
		name: ['yamask', 'yamask', 'Tutafeh', 'yamask', 'yamask', 'makabaja', 'デスマス', '데스마스', '哭哭面具', 'yamask'],
		color: '#708088',
		ability: abilityData['curse'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/yamask.png',
			image: './src/assets/images/pokemon/normal/yamask-idle.png',
			frames: 8,
			hold: 12
		},
		speed: {
			base: 2770,
			scale: -1
		},
		power: {
			base: 20,
			scale: 2.6,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 220,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'cofagrigus',
			level: 34
		},	
	},
	cofagrigus: {
		id: 10,
		key: 'cofagrigus',
		name: ['cofagrigus', 'cofagrigus', 'Tutankafer', 'cofagrigus', 'cofagrigus', 'echnatoll', 'デスカーン', '데스니칸', '魂胸棺', 'cofagrigus'],
		color: '#ffef47',
		ability: abilityData['curse'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/cofagrigus.png',
			image: './src/assets/images/pokemon/normal/cofagrigus-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2550,
			scale: -9
		},
		power: {
			base: 40,
			scale: 4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 280,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],	
	},
	riolu: {
		id: 11,
		key: 'riolu',
		name: ['riolu', 'riolu', 'Riolu', 'riolu', 'riolu', 'riolu', 'リオル', '리오르', '利歐路', 'riolu'],
		color: '#1e9ee6',
		ability: abilityData['splash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue2'],
		sprite: {
			base: './src/assets/images/pokemon/normal/riolu.png',
			image: './src/assets/images/pokemon/normal/riolu-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1300,
			scale: -2
		},
		power: {
			base: 7,
			scale: 2.2,
		},
		critical: {
			base: 1,
			scale: 0.1
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'lucario',
			level: 20
		},	
	},
	lucario: {
		id: 11,
		key: 'lucario',
		name: ['lucario', 'lucario', 'Lucario', 'lucario', 'lucario', 'lucario', 'ルカリオ', '루카리오', '路卡利歐', 'lucario'],
		color: '#1fa7e7',
		ability: abilityData['splash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue2'],
		sprite: {
			base: './src/assets/images/pokemon/normal/lucario.png',
			image: './src/assets/images/pokemon/normal/lucario-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 800,
			scale: -1
		},
		power: {
			base: 55,
			scale: 4.2,
		},
		critical: {
			base: 25,
			scale: 0.2
		},
		range: {
			base: 160,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		mega: ['megaLucario']
	},
	megaLucario: {
		id: 11,
		key: 'megaLucario',
		name: [
			'M-Lucario',
			'M-Lucario',
			'M-Lucario',
			'M-Lucario',
			'M-Lucario',
			'M-Lucario',
			'メガメガルカリオ',
			'메가루카리오',
			'超級路卡利歐',
			'M-Lucario'
		],
		color: '#1fa7e7',
		ability: abilityData['auraSphere'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue2'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaLucario.png',
			image: './src/assets/images/pokemon/normal/megaLucario-idle.png',
			frames: 10,
			hold: 11
		},
		speed: {
			base: 900,
			scale: -2
		},
		power: {
			base: 115,
			scale: 4.1,
		},
		critical: {
			base: 25,
			scale: 0.2
		},
		range: {
			base: 160,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],	
		base: 'lucario'
	},
	bidoof: {
		id: 12, 
		key: 'bidoof',
		name: [
		  	"Bidoof",
		  	"Bidoof",
		  	"Keunotor",
		  	"Bidoof",
		  	"Bidoof",
		  	"Bidiza",
		  	"ビッパ",
		  	"비버니",
		  	"大牙狸",
		  	"Bidoof"
		],
		color: '#a75e1f',
		ability: abilityData['simple'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/bidoof.png',
			image: './src/assets/images/pokemon/normal/bidoof-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3000, 
			scale: -5
		},
		power: {
			base: 5, 
			scale: 2,
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 115, 
			scale: 0, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2, 3],
		evolution: {
			pokemon: 'bibarel',
			level: 15
		},	
	},
	bibarel: {
		id: 12,
		key: 'bibarel',
		name: [
		  	"Bibarel",
		  	"Bibarel",
		  	"Castorno",
		  	"Bibarel",
		  	"Bibarel",
		  	"Bidifas",
		  	"ビーダル",
		  	"비버통",
		  	"大尾狸",
		  	"Bibarel"
		],
		color: '#bf772e',
		ability: abilityData['simple'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/bibarel.png',
			image: './src/assets/images/pokemon/normal/bibarel-idle.png',
			frames: 6,
			hold: 10
		},
		speed: {
			base: 3000, 
			scale: -13
		},
		power: {
			base: 34, 
			scale: 12,
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 130, 
			scale: 0, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2, 3],
	},
	mareep: {
		id: 13,
		key: 'mareep',
		name: ['mareep', 'mareep', 'Wattouat', 'mareep', 'mareep', 'voltilamm', 'メリープ', '메리프', '咩利羊', 'mareep'],
		color: '#ffe69e',
		ability: abilityData['stunArea'],
		projectileSound: 'area3',
		projectileSpeed: 7,
		projectile: projectileData['yellow4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/mareep.png',
			image: './src/assets/images/pokemon/normal/mareep-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 3945, //Changelog: 3945->3445
			scale: -1
		},
		power: {
			base: 5, 
			scale: 2,
		},
		critical: {
			base: 0, //Changelog: 1->0
			scale: 0
		},
		range: {
			base: 120, //Changelog: 130->120
			scale: 0.2, //Changelog: 0->0.2
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'flaaffy',
			level: 15
		},	
	},
	flaaffy: {
		id: 13,
		key: 'flaaffy',
		name: ['flaaffy', 'flaaffy', 'Lainergie', 'flaaffy', 'flaaffy', 'waaty', 'モココ', '보송송', '麦蛙', 'flaaffy'],
		color: '#fe8faf',
		ability: abilityData['stunArea'],
		projectileSound: 'area3',
		projectileSpeed: 7,
		projectile: projectileData['yellow4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/flaaffy.png',
			image: './src/assets/images/pokemon/normal/flaaffy-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 3000, //Changelog: 3700->3200
			scale: -1
		},
		power: {
			base: 8,
			scale: 2.2,
		},
		critical: {
			base: 3, //Changelog: 3->0
			scale: 0
		},
		range: {
			base: 130, //Changelog: 150->130
			scale: 0.3, //Changelog: 0->0.3
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'ampharos',
			level: 30
		},	
	},
	ampharos: {
		id: 13,
		key: 'ampharos',
		name: ['ampharos', 'ampharos', 'Pharamp', 'ampharos', 'ampharos', 'ampharos', 'デンリュウ', '전룡', '電龍', 'ampharos'],
		color: '#fff600',
		ability: abilityData['stunArea'],
		projectileSound: 'area3',
		projectileSpeed: 7,
		projectile: projectileData['yellow4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/ampharos.png',
			image: './src/assets/images/pokemon/normal/ampharos-idle.png',
			frames: 7,
			hold: 11
		},
		speed: {
			base: 3000, 
			scale: -2 
		},
		power: {
			base: 15, 
			scale: 3.1, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 140, 
			scale: 0.4, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1],	
		mega: ['megaAmpharos']
	},
	megaAmpharos: {
		id: 13,
		key: 'megaAmpharos',
		name: [
			'M-Ampharos',
			'M-Ampharos',
			'M-Pharamp',
			'M-Ampharos',
			'M-Ampharos',
			'M-Ampharos',
			'メガデンリュウ',
			'메가전룡',
			'超級電龍',
			'M-Ampharos'
		],
		color: '#dfb700',
		ability: abilityData['moldBreaker'],
		projectileSound: 'area3',
		projectileSpeed: 7,
		projectile: projectileData['yellow4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaAmpharos.png',
			image: './src/assets/images/pokemon/normal/megaAmpharos-idle.png',
			frames: 7,
			hold: 11
		},
		speed: {
			base: 1800, 
			scale: -2 
		},
		power: {
			base: 50, 
			scale: 3.1, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 140, 
			scale: 0.4, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1],	
		base: 'ampharos'
	},
	gulpin: {
		id: 14,
		key: 'gulpin',
		name: ['gulpin', 'gulpin', 'Gloupti', 'gulpin', 'gulpin', 'schluppuck', 'ゴクリン', '꼴깍몬', '嘟嘟利', 'gulpin'],
		color: '#8fff67',
		ability: abilityData['poison'],
		projectileSound: 'area2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/gulpin.png',
			image: './src/assets/images/pokemon/normal/gulpin-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 3500,
			scale: -10 
		},
		power: {
			base: 0, //Changelog: 13->0
			scale: 0, //Changelog: 0.5->0
		},
		critical: {
			base: 0, //Changelog: 0.5->0
			scale: 0
		},
		range: {
			base: 100, 
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'swalot',
			level: 26
		},	
	},
	swalot: {
		id: 14,
		key: 'swalot',
		name: ['swalot', 'swalot', 'Avaltout', 'swalot', 'swalot', 'schlukwech', 'マルノーム', '꿀꺽몬', '吞食獸', 'swalot'],
		color: '#b796df',
		ability: abilityData['poison'],
		projectileSound: 'area2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/swalot.png',
			image: './src/assets/images/pokemon/normal/swalot-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 3000, 
			scale: -18 
		},
		power: {
			base: 23, //Changelog: 20->25
			scale: 0.5, //Changelog: 1->0
		},
		critical: {
			base: 0, //Changelog: 1->0 (universal AoE removal of crit)
			scale: 0
		},
		range: {
			base: 140, 
			scale: 0, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1],	
	},
	cryogonal: {
		id: 15,
		key: 'cryogonal',
		name: ['cryogonal', 'cryogonal', 'Hexagel', 'cryogonal', 'cryogonal', 'frigometri', 'フリージオ', '프리지오', '冰雪巨龍', 'cryogonal'],
		color: '#607dcb',
		ability: abilityData['stunMono'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/cryogonal.png',
			image: './src/assets/images/pokemon/normal/cryogonal-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 2450,
			scale: -11
		},
		power: {
			base: 30,
			scale: 12.1,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 148,
			scale: 2,
			inner: 0,
		},
		rangeType: 'xShape',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3, 4], //Changelog: Added Mountain tile, it makes sense and it need to diff itself with others stun.	
	},
	sableye: {
		id: 16,
		key: 'sableye',
		name: ['sableye', 'sableye', 'Ténéfix', 'sableye', 'sableye', 'zobiris', 'ヤミラミ', '깜까미', '勾魂眼', 'sableye'],
		color: '#8e67bf',
		ability: abilityData['curse'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sableye.png',
			image: './src/assets/images/pokemon/normal/sableye-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 1800,
			scale: -10 
		},
		power: {
			base: 15,
			scale: 1.25, 
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],	
		mega: ['megaSableye']
	},
	megaSableye: {
	    id: 16, 
	    key: 'megaSableye',
	    name: [
	        "M-Sableye",
	        "M-Sableye",
	        "M-Ténéfix",
	        "M-Sableye",
	        "M-Sableye",
	        "M-Zobiris",
	        "メガヤミラミ",
	        "메가깜까미",
	        "超级勾魂眼",
	        "M-Sableye"
	    ],
	    color: '#db1f35',
	    ability: abilityData['magicBounce'], 
	    projectileSound: 'projectile4',
		projectileSpeed: 7,
		ricochet: 2,
		projectile: projectileData['purple6'],
	    sprite: {
			base: './src/assets/images/pokemon/normal/megaSableye.png',
			image: './src/assets/images/pokemon/normal/megaSableye-idle.png',
			frames: 2,
			hold: 40
		},
		speed: {
			base: 1800,
			scale: -8 
		},
		power: {
			base: 25,
			scale: 1, 
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],	
	    base: 'sableye'
	},
	drudiggon: {
		id: 17,
		key: 'drudiggon',
		name: ['Druddigon', 'Druddigon', 'Drakkarmin', 'Druddigon', 'Druddigon', 'shardrago', 'クリムガン', '크리만', '龍頭地鼠', 'Druddigon'],
		color: '#a42530',
		ability: abilityData['splash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/drudiggon.png',
			image: './src/assets/images/pokemon/normal/drudiggon-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 3000,
			scale: -10
		},
		power: {
			base: 10,
			scale: 12.9,
		},
		critical: {
			base: 5,
			scale: 0.1
		},
		range: {
			base: 100,
			scale: 1.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],	
	},
	meowth: {
		id: 18,
		key: 'meowth',
		name: ['meowth', 'meowth', 'Miaouss', 'meowth', 'meowth', 'mauzi', 'ニャース', '나옹', '喵喵', 'meowth'],
		color: '#d6bd62',
		ability: abilityData['greed'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/meowth.png',
			image: './src/assets/images/pokemon/normal/meowth-idle.png',
			frames: 4,
			hold: 10
		},
		speed: {
			base: 1700,
			scale: -5
		},
		power: {
			base: 18,
			scale: 1.4,
		},
		critical: {
			base: 10,
			scale: 0.3
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'persian',
			level: 28
		},	
	},
	persian: {
		id: 18,
		key: 'persian',
		name: ['persian', 'persian', 'Persian', 'persian', 'persian', 'snobilikat', 'ペルシアン', '페르시온', '貓老大', 'persian'],
		color: '#fff79d',
		ability: abilityData['greed'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/persian.png',
			image: './src/assets/images/pokemon/normal/persian-idle.png',
			frames: 1,
			hold: 15
		},
		speed: {
			base: 1600,
			scale: -10
		},
		power: {
			base: 35,
			scale: 2.7,
		},
		critical: {
			base: 25,
			scale: 0.5
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],	
	},
	sunkern: {
		id: 19,
		key: 'sunkern',
		name: ['sunkern', 'sunkern', 'Tournegrin', 'sunkern', 'sunkern', 'sonnkern', 'ヒマナッツ', '해너츠', '向日種子', 'sunkern'],
		color: '#fff700',
		ability: abilityData['powerAura'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sunkern.png',
			image: './src/assets/images/pokemon/normal/sunkern-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 0,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'aura',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'sunflora',
			level: 25,
		},	
	},
	sunflora: {
		id: 19,
		key: 'sunflora',
		name: ['sunflora', 'sunflora', 'Héliatronc', 'sunflora', 'sunflora', 'sonnflora', 'キマワリ', '해루미', '向日花怪', 'sunflora'],
		color: '#dfb700',
		ability: abilityData['powerAura'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sunflora.png',
			image: './src/assets/images/pokemon/normal/sunflora-idle.png',
			frames: 16,
			hold: 4
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 0,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0.7,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'aura',
		costScale: 'mid',
		tiles: [1, 2],
	},
	tangela: {
		id: 20,
		key: 'tangela',
		name: ['tangela', 'tangela', 'Saquedeneu', 'tangela', 'tangela', 'tangela', 'モンジャラ', '덩쿠리', '猜藤', 'tangela'],
		color: '#6285ac',
		ability: abilityData['slow'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/tangela.png',
			image: './src/assets/images/pokemon/normal/tangela-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1850,
			scale: -4
		},
		power: {
			base: 16,
			scale: 4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'tangrowth',
			level: 36,
		},	
	},
	tangrowth: {
		id: 20,
		key: 'tangrowth',
		name: ['tangrowth', 'tangrowth', 'Bouldeneu', 'tangrowth', 'tangrowth', 'tangoloss', 'モジャンボ', '덩쿠림보', '叢林藤王', 'tangrowth'],
		color: '#679fef',
		ability: abilityData['slow'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/tangrowth.png',
			image: './src/assets/images/pokemon/normal/tangrowth-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1500,
			scale: -7
		},
		power: {
			base: 140,
			scale: 9.6,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
	chikorita: {
		id: 21,
		key: 'chikorita',
		name: ['chikorita', 'chikorita', 'Germignon', 'chikorita', 'chikorita', 'endivie', 'チコリータ', '치코리타', '菊草葉', 'chikorita'],
		color: '#d7efa6',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/chikorita.png',
			image: './src/assets/images/pokemon/normal/chikorita-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 2500,
			scale: -2
		},
		power: {
			base: 14,
			scale: 2.1,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'bayleef',
			level: 16,
		},	
	},
	bayleef: {
		id: 21,
		key: 'bayleef',
		name: ['bayleef', 'bayleef', 'Macronium', 'bayleef', 'bayleef', 'lorblatt', 'ベイリーフ', '베이리프', '月桂葉', 'bayleef'],
		color: '#fff700',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/bayleef.png',
			image: './src/assets/images/pokemon/normal/bayleef-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2300,
			scale: -3
		},
		power: {
			base: 40,
			scale: 5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'meganium',
			level: 32,
		},	
	},
	meganium: {
		id: 21,
		key: 'meganium',
		name: ['meganium', 'meganium', 'Méganium', 'meganium', 'meganium', 'meganie', 'メガニウム', '메가니움', '大菊花', 'meganium'],
		color: '#d7efa7',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/meganium.png',
			image: './src/assets/images/pokemon/normal/meganium-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -3.5
		},
		power: {
			base: 90,
			scale: 10.6,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
	hoppip: {
		id: 22,
		key: 'hoppip',
		name: ['hoppip', 'hoppip', 'Granivol', 'hoppip', 'hoppip', 'hoppspross', 'ハネッコ', '두코', '風鈴鈴', 'hoppip'],
		color: '#e73f67',
		ability: abilityData['ambusher'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/hoppip.png',
			image: './src/assets/images/pokemon/normal/hoppip-idle.png',
			frames: 15,
			hold: 5
		},
		speed: {
			base: 900,
			scale: -1
		},
		power: {
			base: 15,
			scale: 1.3,
		},
		critical: {
			base: 1,
			scale: 0.1
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'skiploom',
			level: 18,
		},	
	},
	skiploom: {
		id: 22,
		key: 'skiploom',
		name: ['skiploom', 'skiploom', 'Floravol', 'skiploom', 'skiploom', 'hubelupf', 'ポポッコ', '두코리', '風鈴奈', 'skiploom'],
		color: '#5fb627',
		ability: abilityData['ambusher'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/skiploom.png',
			image: './src/assets/images/pokemon/normal/skiploom-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 800,
			scale: -1
		},
		power: {
			base: 20,
			scale: 1.5,
		},
		critical: {
			base: 3,
			scale: 0.1
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'jumpluff',
			level: 27,
		},	
	},
	jumpluff: {
		id: 22,
		key: 'jumpluff',
		name: ['jumpluff', 'jumpluff', 'Cotovol', 'jumpluff', 'jumpluff', 'papungha', 'ワタッコ', '솜솜코', '風鈴花', 'jumpluff'],
		color: '#4f9ed6',
		ability: abilityData['ambusher'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/jumpluff.png',
			image: './src/assets/images/pokemon/normal/jumpluff-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 600,
			scale: -1
		},
		power: {
			base: 60,
			scale: 2.4,
		},
		critical: {
			base: 8,
			scale: 0.1
		},
		range: {
			base: 170,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
	},
	cottonee: {
		id: 23,
		key: 'cottonee',
		name: ['cottonee', 'cottonee', 'Doudouvet', 'cottonee', 'cottonee', 'waumboll', 'モンメン', '소미안', '棉花怪', 'cottonee'],
		color: '#bee293',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/cottonee.png',
			image: './src/assets/images/pokemon/normal/cottonee-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1270,
			scale: -5
		},
		power: {
			base: 11,
			scale: 1,
		},
		critical: {
			base: 2,
			scale: 0
		},
		range: {
			base: 125,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'whimsicott',
			level: 28,
		},	
	},
	whimsicott: {
		id: 23,
		key: 'whimsicott',
		name: ['whimsicott', 'whimsicott', 'Farfaduvet', 'whimsicott', 'whimsicott', 'elfun', 'エルフーン', '엘풍', '風妖精', 'whimsicott'],
		color: '#b7d667',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/whimsicott.png',
			image: './src/assets/images/pokemon/normal/whimsicott-idle.png',
			frames: 8,
			hold: 12
		},
		speed: {
			base: 1200, //Changelog: 1190->1200
			scale: -4.5 //Changelog: -6->-4.5
		},
		power: {
			base: 25,
			scale: 2,
		},
		critical: {
			base: 0, //Changelog: 2->0
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2, 4], //Changelog: Make it able to go on Mountain tiles to make it a good terrain availability mon
	},
	petilil: {
		id: 24,
		key: 'petilil',
		name: ['petilil', 'petilil', 'Chlorobule', 'petilil', 'petilil', 'lilminip', 'チュリネ', '치릴리', '小肥花', 'petilil'],
		color: '#aed162',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/petilil.png',
			image: './src/assets/images/pokemon/normal/petilil-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3000,
			scale: -2
		},
		power: {
			base: 12,
			scale: 3,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0.5,
			inner: 100,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'lilligant',
			level: 28,
		},	
	},
	lilligant: {
		id: 24,
		key: 'lilligant',
		name: ['lilligant', 'lilligant', 'Fragilady', 'lilligant', 'lilligant', 'dressella', 'ドレディア', '드레디어', '美麗花', 'lilligant'],
		color: '#fe6b39',
		ability: abilityData['tripleShot'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/lilligant.png',
			image: './src/assets/images/pokemon/normal/lilligant-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -3
		},
		power: {
			base: 50,
			scale: 6.5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 150,
			scale: 1,
			inner: 100,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
	},
	spinarak: {
		id: 25,
		key: 'spinarak',
		name: ['spinarak', 'spinarak', 'Mimigal', 'spinarak', 'spinarak', 'webarak', 'イトマル', '페이검', '小蜘蛛', 'spinarak'],
		color: '#9fce6f',
		ability: abilityData['poison'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['green3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/spinarak.png',
			image: './src/assets/images/pokemon/normal/spinarak-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1900,
			scale: -1
		},
		power: {
			base: 9,
			scale: 1.5,
		},
		critical: {
			base: 5,
			scale: 0.1
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'ariados',
			level: 22,
		},	
	},
	ariados: {
		id: 25,
		key: 'ariados',
		name: ['ariados', 'ariados', 'Migalos', 'ariados', 'ariados', 'ariados', 'アリアドス', '아리아도스', '阿利多斯', 'ariados'],
		color: '#d73f01',
		ability: abilityData['poison'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['green3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/ariados.png',
			image: './src/assets/images/pokemon/normal/ariados-idle.png',
			frames: 10,
			hold: 7
		},
		speed: {
			base: 1150,
			scale: -4
		},
		power: {
			base: 13,
			scale: 3, //Changelog: 2.7->3
		},
		critical: {
			base: 10,
			scale: 0 //Changelog: 0.2->0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
	},
	maractus: {
		id: 26,
		key: 'maractus',
		name: ['maractus', 'maractus', 'Maracachi', 'maractus', 'maractus', 'maracamba', 'マラカッチ', '마라카치', '鬥蓮草', 'maractus'],
		color: '#5ff051',
		ability: abilityData['ambusher'],
		projectileSound: 'area2',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/maractus.png',
			image: './src/assets/images/pokemon/normal/maractus-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 3450,
			scale: -19.5 //Changelog:-21->-19.5
		},
		power: {
			base: 6,  
			scale: 2.84, //Changelog: 2.9->2.64 
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 115,
			scale: 0.3, //Changelog : 0.5->0.3
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 2],
	},
	shroomish: {
		id: 27,
		key: 'shroomish',
		name: ['shroomish', 'shroomish', 'Balignon', 'shroomish', 'shroomish', 'knilz', 'キノココ', '버섯꼬', '小菇菇', 'shroomish'],
		color: '#fee79f',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/shroomish.png',
			image: './src/assets/images/pokemon/normal/shroomish-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1930,
			scale: -2
		},
		power: {
			base: 12,
			scale: 5,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'breloom',
			level: 23
		},	
	},
	breloom: {
		id: 27,
		key: 'breloom',
		name: ['breloom', 'breloom', 'Chapignon', 'breloom', 'breloom', 'kapilz', 'キノガッサ', '버섯모', '蘑菇拳師', 'breloom'],
		color: '#8fff67',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/breloom.png',
			image: './src/assets/images/pokemon/normal/breloom-idle.png',
			frames: 12,
			hold: 15
		},
		speed: {
			base: 1850,
			scale: -3
		},
		power: {
			base: 70,
			scale: 12.3,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 125,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
	barboach: {
		id: 28,
		key: 'barboach',
		name: ['barboach', 'barboach', 'Barloche', 'barboach', 'barboach', 'schmerbe', 'ドジョッチ', '미꾸리', '泥魚子', 'barboach'],
		color: '#1f9ee7',
		ability: abilityData['slow'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/barboach.png',
			image: './src/assets/images/pokemon/normal/barboach-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 3000,
			scale: -2
		},
		power: {
			base: 27,
			scale: 3.1,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 180,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
		evolution: {
			pokemon: 'whiscash',
			level: 30
		},	
	},
	whiscash: {
		id: 28,
		key: 'whiscash',
		name: ['whiscash', 'whiscash', 'Barbicha', 'whiscash', 'whiscash', 'welsar', 'ナマズン', '메깅', '泥巴魚', 'whiscash'],
		color: '#4f5f97',
		ability: abilityData['slowSplash'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/whiscash.png',
			image: './src/assets/images/pokemon/normal/whiscash-idle.png',
			frames: 10,
			hold: 5
		},
		speed: {
			base: 2800,
			scale: -4
		},
		power: {
			base: 53,
			scale: 5,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 280,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
	},
	clauncher: {
		id: 29,
		key: 'clauncher',
		name: ['clauncher', 'clauncher', 'Flingouste', 'clauncher', 'clauncher', 'scampisto', 'ウデッポウ', '완철포', '砲嘴巴', 'clauncher'],
		color: '#81e1ff',
		ability: abilityData['superCritical'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/clauncher.png',
			image: './src/assets/images/pokemon/normal/clauncher-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 6000,
			scale: 0
		},
		power: {
			base: 50,
			scale: 25,
		},
		critical: {
			base: 50, //Changelog: 25->50
			scale: 0
		},
		range: {
			base: 265,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3],
		evolution: {
			pokemon: 'clawitzer',
			level: 37
		},	
	},
	clawitzer: {
		id: 29,
		key: 'clawitzer',
		name: ['clawitzer', 'clawitzer', 'Gamblast', 'clawitzer', 'clawitzer', 'wummer', 'ブロスター', '블로스터', '砲爪龍蝦', 'clawitzer'],
		color: '#4090f9',
		ability: abilityData['superCritical'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/clawitzer.png',
			image: './src/assets/images/pokemon/normal/clawitzer-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 6000,
			scale: 0
		},
		power: {
			base: 100,
			scale: 70,
		},
		critical: {
			base: 85, //Changelog: 50->85
			scale: 0
		},
		range: {
			base: 300,
			scale: 0.5,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3],
	},
	remoraid: {
		id: 30,
		key: 'remoraid',
		name: ['remoraid', 'remoraid', 'Rémoraid', 'remoraid', 'remoraid', 'remoraid', 'テッポウオ', '총어', '小小海', 'remoraid'],
		color: '#afb7bf',
		ability: abilityData['splash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/remoraid.png',
			image: './src/assets/images/pokemon/normal/remoraid-idle.png',
			frames: 8,
			hold: 12
		},
		speed: {
			base: 3600,
			scale: -1
		},
		power: {
			base: 23,
			scale: 2.6,
		},
		critical: {
			base: 3,
			scale: 0.1
		},
		range: {
			base: 280,
			scale: 1,
			inner: 200,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
		evolution: {
			pokemon: 'octillery',
			level: 25
		},	
	},
	octillery: {
		id: 30,
		key: 'octillery',
		name: ['octillery', 'octillery', 'Octillery', 'octillery', 'octillery', 'octillery', 'オクタン', '대포무노', '大力海獅', 'octillery'],
		color: '#fe875e',
		ability: abilityData['splash'],
		projectileSound: 'projectile2',
		projectileSpeed: 10,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/octillery.png',
			image: './src/assets/images/pokemon/normal/octillery-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 2950,
			scale: -7
		},
		power: {
			base: 190,
			scale: 14.1
		},
		critical: {
			base: 20,
			scale: 0.3
		},
		range: {
			base: 280,
			scale: 2,
			inner: 200,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
	},
	oshawott: {
		id: 31,
		key: 'oshawott',
		name: ['oshawott', 'oshawott', 'Moustillon', 'oshawott', 'oshawott', 'ottaro', 'ミジュマル', '수댕이', '水水獺', 'oshawott'],
		color: '#70d8f0',
		ability: abilityData['focus'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/oshawott.png',
			image: './src/assets/images/pokemon/normal/oshawott-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1200,
			scale: -1
		},
		power: {
			base: 12,
			scale: 2.5,
		},
		critical: {
			base: 1.5,
			scale: 0.1
		},
		range: {
			base: 115,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'dewott',
			level: 17,
		},	
	},
	dewott: {
		id: 31,
		key: 'dewott',
		name: ['dewott', 'dewott', 'Mateloutre', 'dewott', 'dewott', 'zwottronin', 'フタチマル', '쌍검자비', '洗澡獺', 'dewott'],
		color: '#84d6ee',
		ability: abilityData['focus'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/dewott.png',
			image: './src/assets/images/pokemon/normal/dewott-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1100,
			scale: -1
		},
		power: {
			base: 20,
			scale: 2.7,
		},
		critical: {
			base: 2,
			scale: 0.2
		},
		range: {
			base: 130,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'samurott',
			level: 36,
		},	
	},
	samurott: {
		id: 31,
		key: 'samurott',
		name: ['samurott', 'samurott', 'Clamiral', 'samurott', 'samurott', 'admurai', 'ダイケンキ', '대검귀', '武裝獺', 'samurott'],
		color: '#20adbc',
		ability: abilityData['focus'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/samurott.png',
			image: './src/assets/images/pokemon/normal/samurott-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 900,
			scale: -4
		},
		power: {
			base: 80,
			scale: 4.5,
		},
		critical: {
			base: 3,
			scale: 0.3
		},
		range: {
			base: 140,
			scale: 0.15,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
	},
	staryu: {
		id: 32,
		key: 'staryu',
		name: ['staryu', 'staryu', 'Stari', 'staryu', 'staryu', 'sterndu', 'ヒトデマン', '별가사리', '海星星', 'staryu'],
		color: '#de7318',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/staryu.png',
			image: './src/assets/images/pokemon/normal/staryu-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 800,
			scale: -2
		},
		power: {
			base: 13,
			scale: 1,
		},
		critical: {
			base: 55, //Changelog: 5->55
			scale: 0
		},
		range: {
			base: 185, //Changelog: 165->185
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'star',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'starmie',
			level: 33,
		},	
	},
	starmie: {
		id: 32,
		key: 'starmie',
		name: ['starmie', 'starmie', 'Staross', 'starmie', 'starmie', 'starmie', 'スターミー', '아쿠스타', '宝石海星', 'starmie'],
		color: '#8d62bd',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/starmie.png',
			image: './src/assets/images/pokemon/normal/starmie-idle.png',
			frames: 8,
			hold: 12
		},
		speed: {
			base: 700,
			scale: -2
		},
		power: {
			base: 55,
			scale: 3,
		},
		critical: {
			base: 55,
			scale: 0
		},
		range: {
			base: 220, 
			scale: 0.55,
			inner: 0,
		},
		rangeType: 'star',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		mega: ['megaStarmie']
	},
	megaStarmie: {
		id: 32,
		key: 'megaStarmie',
		name: [
			`M-Starmie`, // inglés
			`M-Starmie`, // español
			`M-Staross`, // francés
			`M-Starmie`, // portugués
			`M-Starmie`, // italiano
			`M-Starmie`, // alemán
			`メガスターミー`, // japonés
			`메가 아쿠스타`, // coreano
			`超级宝石海星`, // chino
			`M-Starmie` // polaco
		],
		color: '#ad8bd7',
		ability: abilityData['hugePower'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaStarmie.png',
			image: './src/assets/images/pokemon/normal/megaStarmie-idle.png',
			frames: 4,
			hold: 12
		},
		speed: {
			base: 700,
			scale: -2
		},
		power: {
			base: 90,
			scale: 3.5,
		},
		critical: {
			base: 55,
			scale: 0.1
		},
		range: {
			base: 220, 
			scale: 0.8,
			inner: 0,
		},
		rangeType: 'star',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		base: 'starmie'
	},
	lapras: {
		id: 33,
		key: 'lapras',
		name: ['lapras', 'lapras', 'Lokhlass', 'lapras', 'lapras', 'lapras', 'ラプラス', '라프라스', '拉普拉斯', 'lapras'],
		color: '#7acfff',
		ability: abilityData['stunArea'],
		projectileSound: 'area3',
		projectileSpeed: 7,
		projectile: projectileData['blue3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/lapras.png',
			image: './src/assets/images/pokemon/normal/lapras-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3450, //Changelog: 6300->3450
			scale: -6.5 
		},
		power: {
			base: 10,
			scale: 3.4, //Changelog: 6.6->3.4 
		},
		critical: {
			base: 0, //Changelog: 3->0 (universal AoE removal of crit)
			scale: 0
		},
		range: {
			base: 130, //Changelog: 150->130
			scale: 0.5,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [3], //Changelog: removed field tile from his possibility
	},
	seel: {
		id: 34,
		key: 'seel',
		name: ['seel', 'seel', 'Otaria', 'seel', 'seel', 'jurob', 'パウワウ', '쥬쥬', '小海獅', 'seel'],
		color: '#d7dfde',
		ability: abilityData['stunMono'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/seel.png',
			image: './src/assets/images/pokemon/normal/seel-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 1550,
			scale: -1
		},
		power: {
			base: 15,
			scale: 5,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 260,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 3],
		evolution: {
			pokemon: 'dewgong',
			level: 34,
		},	
	},
	dewgong: {
		id: 34,
		key: 'dewgong',
		name: ['dewgong', 'dewgong', 'Lamantine', 'dewgong', 'dewgong', 'jugong', 'ジュゴン', '쥬레곤', '白海獅', 'dewgong'],
		color: '#adb4bd',
		ability: abilityData['stunMono'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/dewgong.png',
			image: './src/assets/images/pokemon/normal/dewgong-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1350,
			scale: -2
		},
		power: {
			base: 80,
			scale: 8.7,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 400,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 3],
	},
	psyduck: {
		id: 35,
		key: 'psyduck',
		name: ['psyduck', 'psyduck', 'Psykokwak', 'psyduck', 'psyduck', 'enton', 'コダック', '고라파덕', '可達鴨', 'psyduck'],
		color: '#dfb501',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/psyduck.png',
			image: './src/assets/images/pokemon/normal/psyduck-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1850,
			scale: -2
		},
		power: {
			base: 14,
			scale: 2,
		},
		critical: {
			base: 1,
			scale: 0.1
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'golduck',
			level: 33,
		},	
	},
	golduck: {
		id: 35,
		key: 'golduck',
		name: ['golduck', 'golduck', 'Akwakwak', 'golduck', 'golduck', 'entoron', 'ゴルダック', '골덕', '哥達鴨', 'golduck'],
		color: '#199de7',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/golduck.png',
			image: './src/assets/images/pokemon/normal/golduck-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1350,
			scale: -5
		},
		power: {
			base: 45,
			scale: 4.5,
		},
		critical: {
			base: 5,
			scale: 0.1
		},
		range: {
			base: 155,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
	},
	murkrow: {
		id: 36,
		key: 'murkrow',
		name: ['murkrow', 'murkrow', 'Cornèbre', 'murkrow', 'murkrow', 'kramurx', 'ヤミカラス', '니로우', '長翅鴉', 'murkrow'],
		color: '#deb600',
		ability: abilityData['frisk'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['purple5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/murkrow.png',
			image: './src/assets/images/pokemon/normal/murkrow-idle.png',
			frames: 3,
			hold: 15
		},
		speed: {
			base: 950,
			scale: -1
		},
		power: {
			base: 10,
			scale: 2.5,
		},
		critical: {
			base: 25,
			scale: 0.2
		},
		range: {
			base: 160,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'honchkrow',
			level: 40,
		},	
	},
	honchkrow: {
		id: 36,
		key: 'honchkrow',
		name: ['honchkrow', 'honchkrow', 'Corboss', 'honchkrow', 'honchkrow', 'kramshef', 'ドンカラス', '돈크로우', '烏鴉頭領', 'honchkrow'],
		color: '#d7d7de',
		ability: abilityData['frisk'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['purple5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/honchkrow.png',
			image: './src/assets/images/pokemon/normal/honchkrow-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 890,
			scale: -2
		},
		power: {
			base: 50,
			scale: 4.5,
		},
		critical: {
			base: 45,
			scale: 0.2
		},
		range: {
			base: 190,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	sandshrew: {
		id: 37,
		key: 'sandshrew',
		name: ['sandshrew', 'sandshrew', 'Sabelette', 'sandshrew', 'sandshrew', 'sandan', 'サンド', '모래두지', '穿山鼠', 'sandshrew'],
		color: '#dfb500',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sandshrew.png',
			image: './src/assets/images/pokemon/normal/sandshrew-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1550,
			scale: -1
		},
		power: {
			base: 8,
			scale: 4,
		},
		critical: {
			base: 15,
			scale: 0.1
		},
		range: {
			base: 105,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'sandslash',
			level: 22,
		},	
	},
	sandslash: {
		id: 37,
		key: 'sandslash',
		name: ['sandslash', 'sandslash', 'Sablaireau', 'sandslash', 'sandslash', 'sandamer', 'サンドパン', '고지', '穿山王', 'sandslash'],
		color: '#de7318',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sandslash.png',
			image: './src/assets/images/pokemon/normal/sandslash-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 950, //Changelog: 1050->1000
			scale: -1 //Changelog: -1->-1.5
		},
		power: {
			base: 75, //Changelog: 30->25
			scale: 6.5, //Changelog: 5.7->6
		},
		critical: {
			base: 20, //Changelog: 15->20
			scale: 0.3 
		},
		range: {
			base: 140, //Changelog: 115->120
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
	},
	trapinch: {
		id: 38,
		key: 'trapinch',
		name: ['trapinch', 'trapinch', 'Kraknoix', 'trapinch', 'trapinch', 'knacklion', 'ナックラー', '톱치', '圈圈蟲', 'trapinch'],
		color: '#ff9746',
		ability: abilityData['vigilant'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/trapinch.png',
			image: './src/assets/images/pokemon/normal/trapinch-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -1
		},
		power: {
			base: 12,
			scale: 1,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 90,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'vibrava',
			level: 35,
		},	
	},
	vibrava: {
		id: 38,
		key: 'vibrava',
		name: ['vibrava', 'vibrava', 'Vibraninf', 'vibrava', 'vibrava', 'vibrava', 'ビブラーバ', '비브라바', '沙漠蜻蜓', 'vibrava'],
		color: '#deb700',
		ability: abilityData['vigilant'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/vibrava.png',
			image: './src/assets/images/pokemon/normal/vibrava-idle.png',
			frames: 9,
			hold: 11
		},
		speed: {
			base: 1700,
			scale: -2.5
		},
		power: {
			base: 50,
			scale: 4.6,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'flygon',
			level: 45,
		},	
	},
	flygon: {
		id: 38,
		key: 'flygon',
		name: ['flygon', 'flygon', 'Libégon', 'flygon', 'flygon', 'libelldra', 'フライゴン', '플라이곤', '翔龍', 'flygon'],
		color: '#5fb726',
		ability: abilityData['vigilant'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/flygon.png',
			image: './src/assets/images/pokemon/normal/flygon-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 1070,
			scale: -3.2
		},
		power: {
			base: 60,
			scale: 7.9,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 180,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		mega: ['megaFlygon']
	},
	megaFlygon: {
		id: 38,
		key: 'megaFlygon',
		name: ['M-flygon', 'M-flygon', 'M-Libégon', 'M-flygon', 'M-flygon', 'M-libelldra', 'メガフライゴン', '메가플라이곤', '超级沙漠蜻蜓', 'M-flygon'],
		color: '#c5350b',
		ability: abilityData['sandRush'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaFlygon.png',
			image: './src/assets/images/pokemon/normal/megaFlygon-idle.png',
			frames: 7,
			hold: 7
		},
		speed: {
			base: 1320,
			scale: -5.7 
		},
		power: {
			base: 260,
			scale: 6.9, 
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 360,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		base: 'flygon'
	},
	noibat: {
		id: 39,
		key: 'noibat',
		name: ['noibat', 'noibat', 'Sonistrelle', 'noibat', 'noibat', 'em', 'オンバット', '음뱃', '吼吶蝠', 'noibat'],
		color: '#863f86',
		ability: abilityData['focus'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['purple5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/noibat.png',
			image: './src/assets/images/pokemon/normal/noibat-idle.png',
			frames: 10,
			hold: 7
		},
		speed: {
			base: 1850,
			scale: 0
		},
		power: {
			base: 14,
			scale: 3,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 300,
			scale: 0.5,
			inner: 200,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'noivern',
			level: 48
		},	
	},
	noivern: {
		id: 39,
		key: 'noivern',
		name: ['noivern', 'noivern', 'Bruyverne', 'noivern', 'noivern', 'uhafnir', 'オンバーン', '음번', '吼吶王', 'noivern'],
		color: '#6cc5bb',
		ability: abilityData['focus'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['purple5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/noivern.png',
			image: './src/assets/images/pokemon/normal/noivern-idle.png',
			frames: 8,
			hold: 12
		},
		speed: {
			base: 1550,
			scale: -2
		},
		power: {
			base: 65,
			scale: 12.3,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 300,
			scale: 1,
			inner: 200,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	sneasel: {
		id: 40,
		key: 'sneasel',
		name: ['sneasel', 'sneasel', 'Farfuret', 'sneasel', 'sneasel', 'sniebel', 'ニューラ', '포푸니', '狃拉', 'sneasel'],
		color: '#4f5f96',
		ability: abilityData['superCritical'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sneasel.png',
			image: './src/assets/images/pokemon/normal/sneasel-idle.png',
			frames: 7,
			hold: 13
		},
		speed: {
			base: 900,
			scale: -3
		},
		power: {
			base: 7,
			scale: 1.8,
		},
		critical: {
			base: 5,
			scale: 0.5
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'weavile',
			level: 25
		},	
	},
	weavile: {
		id: 40,
		key: 'weavile',
		name: ['weavile', 'weavile', 'Dimoret', 'weavile', 'weavile', 'snibunna', 'マニューラ', '포푸니라', '玛狃拉', 'weavile'],
		color: '#d73f01',
		ability: abilityData['superCritical'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/weavile.png',
			image: './src/assets/images/pokemon/normal/weavile-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 700,
			scale: -3
		},
		power: {
			base: 25,
			scale: 4.25,
		},
		critical: {
			base: 5,
			scale: 0.8
		},
		range: {
			base: 115,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	drilbur: {
		id: 41,
		key: 'drilbur',
		name: ['drilbur', 'drilbur', 'Rototaupe', 'drilbur', 'drilbur', 'rotomurf', 'モグリュー', '두더류', '掘地鼠', 'drilbur'],
		color: '#8d7b6d',
		ability: abilityData['armorBreak'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/drilbur.png',
			image: './src/assets/images/pokemon/normal/drilbur-idle.png',
			frames: 3,
			hold: 15
		},
		speed: {
			base: 2600,
			scale: -2
		},
		power: {
			base: 8,
			scale: 1,
		},
		critical: {
			base: 5,
			scale: 0.1
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'excadrill',
			level: 31
		},	
	},
	excadrill: {
		id: 41,
		key: 'excadrill',
		name: ['excadrill', 'excadrill', 'Minotaupe', 'excadrill', 'excadrill', 'stalobor', 'ドリュウズ', '몰드류', '長鼻鐵', 'excadrill'],
		color: '#bc4342',
		ability: abilityData['armorBreak'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/excadrill.png',
			image: './src/assets/images/pokemon/normal/excadrill-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1100,
			scale: -4 //Changelog: -6->-4
		},
		power: {
			base: 30,
			scale: 0.95, //Changelog: 1.6->0.95
		},
		critical: {
			base: 10, 
			scale: 0.15 //Changelog: 0.1->0.15
		},
		range: {
			base: 120, //Changelog: 130->120
			scale: 0.2, //Changelog: 0->0.2
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
		mega: ['megaExcadrill']
	},
	megaExcadrill: {
		id: 41,
		key: 'megaExcadrill',
		name: [
			`M-Excadrill`, // inglés
			`M-Excadrill`, // español
			`M-Minotaupe`, // francés
			`M-Excadrill`, // portugués
			`M-Excadrill`, // italiano
			`M-Stalobor`, // alemán
			`メガドリュウズ`, // japonés
			`메가 몰드류`, // coreano
			`超级龙头地鼠`, // chino
			`M-Excadrill` // polaco
		],
		color: '#a4383b',
		ability: abilityData['piercingDrill'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaExcadrill.png',
			image: './src/assets/images/pokemon/normal/megaExcadrill-idle.png',
			frames: 4,
			hold: 8
		},
		speed: {
			base: 1000,
			scale: -3 
		},
		power: {
			base: 75,
			scale: 1.1,
		},
		critical: {
			base: 10, 
			scale: 0.4 
		},
		range: {
			base: 120,
			scale: 0.4, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
		base: 'excadrill'
	},
	shuckle: {
		id: 42,
		key: 'shuckle',
		name: ['shuckle', 'shuckle', 'Caratroc', 'shuckle', 'shuckle', 'pottrott', 'ツボツボ', '단단지', '盾甲蛹', 'shuckle'],
		color: '#d73f00',
		ability: abilityData['slow'],
		projectileSound: 'area2',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/shuckle.png',
			image: './src/assets/images/pokemon/normal/shuckle-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 7000,
			scale: -50
		},
		power: {
			base: 40, //Changelog: 50->40 (A nerf of his damage overall, was the best slow of the game and still did 2/3 of the damage of a AoE DPS, was just too insane)
			scale: 0.1, //Changelog: 1->0.1 ( ~ ~ ~ )
		},
		critical: {
			base: 0, //Changelog: 1->0 (universal AoE removal of crit)
			scale: 0
		},
		range: {
			base: 120, //Changelog: 140->120 (Making that leveling shuckle as a purpose, before that change a level 1 shuckle and a level 100 was basically the same)
			scale: 0.2, //Changelog: 0->0.2 ( ~ ~ ~ )
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 4],
	},
	hawlucha: {
		id: 43,
		key: 'hawlucha',
		name: ['hawlucha', 'hawlucha', 'Brutalibré', 'hawlucha', 'hawlucha', 'resladero', 'ルチャブル', '루차불', '鬥雞鷹', 'hawlucha'],
		color: '#01bd93',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/hawlucha.png',
			image: './src/assets/images/pokemon/normal/hawlucha-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1600, //Changelog: 1630->1600
			scale: -8.5 //Changelog: -8->-8.5
		},
		power: {
			base: 25, //Changelog: 12->25
			scale: 6, //Changelog: 6.3->6
		},
		critical: {
			base: 30, //Changelog: 5->30
			scale: 0
		},
		range: {
			base: 135,
			scale: 1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
	},
	aron: {
		id: 44,
		key: 'aron',
		name: ['aron', 'aron', 'Galekid', 'aron', 'aron', 'stollunior', 'ココドラ', '가보리', '可撓鋼', 'aron'],
		color: '#afb6bf',
		ability: abilityData['vigilant'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/aron.png',
			image: './src/assets/images/pokemon/normal/aron-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1500, //Changelog: 2500-> 1500
			scale: 0.1 //Changelog: 0->0.1
		},
		power: {
			base: 14,
			scale: 0.5, //Changelog: 0.7->0.5
		},
		critical: {
			base: 0, //Changelog: 3->0 (universal AoE removal crit)
			scale: 0
		},
		range: {
			base: 110, //Changelog: 90->110
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'lairon',
			level: 32,
		},	
	},
	lairon: {
		id: 44,
		key: 'lairon',
		name: ['lairon', 'lairon', 'Galegon', 'lairon', 'lairon', 'stollrak', 'コドラ', '갱도라', '可拉鋼', 'lairon'],
		color: '#7f8e97',
		ability: abilityData['vigilant'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/lairon.png',
			image: './src/assets/images/pokemon/normal/lairon-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1400, //Changelog: 2400->1400
			scale: 0.1 //Changelog: 0->0.1
		},
		power: {
			base: 18,
			scale: 1.2, //Changelog: 1.7->1.2
		},
		critical: {
			base: 0, //Changelog: 4->0 (universal AoE removal crit)
			scale: 0
		},
		range: {
			base: 120,
			scale: 0.1, //Changelog: 0->0.1
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'aggron',
			level: 42,
		},	
	},
	aggron: {
		id: 44,
		key: 'aggron',
		name: ['aggron', 'aggron', 'Galeking', 'aggron', 'aggron', 'stolloss', 'ボスゴドラ', '보스로라', '銀甲怪', 'aggron'],
		color: '#c7cfd2',
		ability: abilityData['vigilant'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/aggron.png',
			image: './src/assets/images/pokemon/normal/aggron-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1200, //Changelog: 2250->1200
			scale: 2  //Changelog: 0->2
		},
		power: {
			base: 35,
			scale: 2.17, //Changelog: 3.3->2.17
		},
		critical: {
			base: 0, //Changelog: 5->0 (universal AoE removal crit)
			scale: 0
		},
		range: {
			base: 130, //Changelog: 145->120
			scale: 0.2, //Changelog: 0->0.2
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 4],
	},
	cubone: {
		id: 45,
		key: 'cubone',
		name: ['cubone', 'cubone', 'Osselait', 'cubone', 'cubone', 'tragosso', 'カラカラ', '탕구리', '卡拉卡拉', 'cubone'],
		color: '#ac6218',
		ability: abilityData['bonemerang'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		projectile: projectileData['bone'],
		sprite: {
			base: './src/assets/images/pokemon/normal/cubone.png',
			image: './src/assets/images/pokemon/normal/cubone-idle.png',
			frames: 6,
			hold: 13
		},
		speed: {
			base: 2700,
			scale: -1
		},
		power: {
			base: 18,
			scale: 4,
		},
		critical: {
			base: 3,
			scale: 0.1
		},
		range: {
			base: 270,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'marowak',
			level: 28,
		},	
	},
	marowak: {
		id: 45,
		key: 'marowak',
		name: ['marowak', 'marowak', 'Ossatueur', 'marowak', 'marowak', 'knogga', 'ガラガラ', '텅구리', '嘎拉嘎拉', 'marowak'],
		color: '#de7319',
		ability: abilityData['bonemerang'],
		projectileSound: 'projectile4',
		projectileSpeed: 5,
		projectile: projectileData['bone'],
		sprite: {
			base: './src/assets/images/pokemon/normal/marowak.png',
			image: './src/assets/images/pokemon/normal/marowak-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2700,
			scale: -11
		},
		power: {
			base: 50, // 730
			scale: 5,
		},
		critical: {
			base: 15,
			scale: 0.6
		},
		range: {
			base: 350,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	pidgey: {
		id: 46,
		key: 'pidgey',
		name: ['pidgey', 'pidgey', 'Roucool', 'pidgey', 'pidgey', 'taubsi', 'ポッポ', '구구', '波波', 'pidgey'],
		color: '#e63963',
		ability: abilityData['vigilant'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/pidgey.png',
			image: './src/assets/images/pokemon/normal/pidgey-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1250,
			scale: -1
		},
		power: {
			base: 9,
			scale: 2,
		},
		critical: {
			base: 1,
			scale: 0.1
		},
		range: {
			base: 125,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'pidgeotto',
			level: 18,
		},	
	},
	pidgeotto: {
		id: 46,
		key: 'pidgeotto',
		name: ['pidgeotto', 'pidgeotto', 'Roucoups', 'pidgeotto', 'pidgeotto', 'tauboga', 'ピジョン', '피죤', '比比鳥', 'pidgeotto'],
		color: '#fe8dad',
		ability: abilityData['vigilant'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/pidgeotto.png',
			image: './src/assets/images/pokemon/normal/pidgeotto-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1100,
			scale: -1
		},
		power: {
			base: 45,
			scale: 2.4,
		},
		critical: {
			base: 3,
			scale: 0.1
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'pidgeot',
			level: 36,
		},	
	},
	pidgeot: {
		id: 46,
		key: 'pidgeot',
		name: ['pidgeot', 'pidgeot', 'Roucarnage', 'pidgeot', 'pidgeot', 'tauboss', 'ピジョット', '피죤투', '大比鳥', 'pidgeot'],
		color: '#fe9542',
		ability: abilityData['vigilant'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/pidgeot.png',
			image: './src/assets/images/pokemon/normal/pidgeot-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 800,
			scale: -2 
		},
		power: {
			base: 90,
			scale: 4, 
		},
		critical: {
			base: 5,
			scale: 0.15
		},
		range: {
			base: 180,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		mega: ['megaPidgeot']
	},
	megaPidgeot: {
		id: 46,
		key: 'megaPidgeot',
		name: [
			"M-Pidgeot",
			"M-Pidgeot",
			"M-Roucarnage",
			"M-Pidgeot",
			"M-Pidgeot",
			"M-Tauboss",
			"メガピジョット",
			"메가피조투",
			"超进化大比鸟",
			"M-Pidgeot"
		],
		color: '#a73f3f',
		ability: abilityData['noGuard'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaPidgeot.png',
			image: './src/assets/images/pokemon/normal/megaPidgeot-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -5 
		},
		power: {
			base: 185,
			scale: 4.5, 
		},
		critical: {
			base: 10,
			scale: 0.35
		},
		range: {
			base: 220,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		base: 'pidgeot'
	},
	binacle: {
		id: 47,
		key: 'binacle',
		name: ['binacle', 'binacle', 'Opermine', 'binacle', 'binacle', 'bithora', 'カメテテ', '거북손손', '雙殼盔', 'binacle'],
		color: '#9b7547',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/binacle.png',
			image: './src/assets/images/pokemon/normal/binacle-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 2400,
			scale: -4
		},
		power: {
			base: 13,
			scale: 3, //Changelog: 2.8->3
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 120, //Changelog: 110->120
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3, 4],
		evolution: {
			pokemon: 'barbaracle',
			level: 39,
		},	
	},
	barbaracle: {
		id: 47,
		key: 'barbaracle',
		name: ['barbaracle', 'barbaracle', 'Golgopathe', 'barbaracle', 'barbaracle', 'thanathora', 'ガメノデス', '거북손데스', '獨島殼王', 'barbaracle'],
		color: '#c8cbda',
		ability: abilityData['quadraShot'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/barbaracle.png',
			image: './src/assets/images/pokemon/normal/barbaracle-idle.png',
			frames: 10,
			hold: 7
		},
		speed: {
			base: 2300,
			scale: -5.7 
		},
		power: {
			base: 34,
			scale: 4.4, 
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3, 4],
		mega: ['megaBarbacle']
	},
	megaBarbacle: {
		id: 47,
		key: 'megaBarbacle',
		name: ['M-barbarc.', 'M-barbaracle', 'M-Golgopathe', 'M-barbaracle', 'M-barbaracle', 'M-thanathora', 'メガガメノデス', '메가거북손데스', '超级獨島殼王', 'M-barbaracle'],
		color: '#696c8e',
		ability: abilityData['octaShot'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaBarbaracle.png',
			image: './src/assets/images/pokemon/normal/megaBarbaracle-idle.png',
			frames: 2,
			hold: 25
		},
		speed: {
			base: 2080,
			scale: -6 
		},
		power: {
			base: 448,
			scale: 4.4, 
		},
		critical: {
			base: 8.8,
			scale: 0
		},
		range: {
			base: 188,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3, 4],
		base: 'barbaracle'
	},
	surskit: {
		id: 48,
		key: 'surskit',
		name: ['surskit', 'surskit', 'Arakdo', 'surskit', 'surskit', 'gehweiher', 'アメタマ', '비구술', '水蛛', 'surskit'],
		color: '#1e9ee7',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/surskit.png',
			image: './src/assets/images/pokemon/normal/surskit-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -5
		},
		power: {
			base: 12,
			scale: 1,
		},
		critical: {
			base: 4, //Changelog: 3->4
			scale: 0.1 //Changelog: 0->0.1
		},
		range: {
			base: 135, //Changelog: 115->135
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 3], //Changelog: Same as Masquerain
		evolution: {
			pokemon: 'masquerain',
			level: 22,
		},	
	},
	masquerain: {
		id: 48,
		key: 'masquerain',
		name: ['masquerain', 'masquerain', 'Maskadra', 'masquerain', 'masquerain', 'maskeregen', 'アメモース', '비나방', '虛擬蝶', 'masquerain'],
		color: '#ff875f',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/masquerain.png',
			image: './src/assets/images/pokemon/normal/masquerain-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 950,
			scale: -5.5 
		},
		power: {
			base: 45,
			scale: 2.4, 
		},
		critical: {
			base: 8,
			scale: 0.1 
		},
		range: {
			base: 170,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 3], 
	},
	ferroseed: {
		id: 49,
		key: 'ferroseed',
		name: ['ferroseed', 'ferroseed', 'Grindur', 'ferroseed', 'ferroseed', 'kastadur', 'テッシード', '철시드', '鐵炮子', 'ferroseed'],
		color: '#5eb727',
		ability: abilityData['slow'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/ferroseed.png',
			image: './src/assets/images/pokemon/normal/ferroseed-idle.png',
			frames: 9,
			hold: 15
		},
		speed: {
			base: 2800,
			scale: -2
		},
		power: {
			base: 9,
			scale: 1.5, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 110, 
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 2],
		evolution: {
			pokemon: 'ferrothorn',
			level: 40,
		},	
	},
	ferrothorn: {
		id: 49,
		key: 'ferrothorn',
		name: ['ferrothorn', 'ferrothorn', 'Noacier', 'ferrothorn', 'ferrothorn', 'tentantel', 'ナットレイ', '너트령', '鐵刺球', 'ferrothorn'],
		color: '#208c52',
		ability: abilityData['slow'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/ferrothorn.png',
			image: './src/assets/images/pokemon/normal/ferrothorn-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 2450,
			scale: -2.46 
		},
		power: {
			base: 47,
			scale: 1.63, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 2], 
	},
	absol: {
		id: 50,
		key: 'absol',
		name: ['absol', 'absol', 'Absol', 'absol', 'absol', 'absol', 'アブソル', '앱솔', '阿勃梭魯', 'absol'],
		color: '#d7dedf',
		ability: abilityData['focus'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/absol.png',
			image: './src/assets/images/pokemon/normal/absol-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 820, //Changelog: 1270->820
			scale: -4.5 //Changelog: -9->-4.5
		},
		power: {
			base: 5,
			scale: 3.3,
		},
		critical: {
			base: 50, //Changelog: 0->50
			scale: 0.5 //Changelog: 1->0.5
		},
		range: {
			base: 130, //Changelog: 100->130
			scale: 0, //Changelog: 0.3->0
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
		mega: ['megaAbsol']
	},
	megaAbsol: {
		id: 50,
		key: 'megaAbsol',
		name: ['M-absol', 'M-absol', 'M-Absol', 'M-absol', 'M-absol', 'M-absol', 'メガアブソル', '메가앱솔', '超进化阿勃梭鲁', 'M-absol'],
		color: '#d7dedf',
		ability: abilityData['focus'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaAbsol.png',
			image: './src/assets/images/pokemon/normal/megaAbsol-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 700, 
			scale: -4.5 
		},
		power: {
			base: 5,
			scale: 3.3,
		},
		critical: {
			base: 50, 
			scale: 0.5 
		},
		range: {
			base: 145, 
			scale: 0, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
		base: 'absol'
	},
	// NEW
	girafarig: {
		id: 51,
		key: 'girafarig',
		name: ['girafarig', 'girafarig', 'Girafarig', 'girafarig', 'girafarig', 'girafarig', 'キリンリキ', '키링키', '長頸鹿背反', 'girafarig'],
		color: '#dfb700',
		ability: abilityData['curseDoubleShot'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/girafarig.png',
			image: './src/assets/images/pokemon/normal/girafarig-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 2050,
			scale: -2
		},
		power: {
			base: 3,
			scale: 1.6,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0.35,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'farigiraf',
			level: 60,
		},
	},
	farigiraf: {
		id: 51,
		key: 'farigiraf',
		name: ['farigiraf', 'farigiraf', 'farigiraf', 'farigiraf', 'farigiraf', 'farigiraf', 'リキキリン', '키키링', '奇麒麟', 'farigiraf'],
		color: '#a26129',
		ability: abilityData['curseDoubleShot'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/farigiraf.png',
			image: './src/assets/images/pokemon/normal/farigiraf-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -2
		},
		power: {
			base: 10,
			scale: 1.7,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0.5,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
	torkoal: {
		id: 52,
		key: 'torkoal',
		name: ['torkoal', 'torkoal', 'Chartor', 'torkoal', 'torkoal', 'qurtel', 'コータス', '코터스', '煤炭龜', 'torkoal'],
		color: '#df761e',
		ability: abilityData['burnNerf'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/torkoal.png',
			image: './src/assets/images/pokemon/normal/torkoal-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 5000,
			scale: -24
		},
		power: {
			base: 10, 
			scale: 7.3, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 140, 
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
	},
	spinda: {
		id: 53,
		key: 'spinda',
		name: ['spinda', 'spinda', 'Spinda', 'spinda', 'spinda', 'pandir', 'パッチール', '스핀다', '圓圓斑', 'spinda'],
		color: '#ff875f',
		ability: abilityData['spinda'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/spinda.png',
			image: './src/assets/images/pokemon/normal/spinda-idle.png',
			frames: 9,
			hold: 15
		},
		speed: {
			base: 200,
			scale: 0
		},
		power: {
			base: 1,
			scale: 1,
		},
		critical: {
			base: 0,
			scale: 0.2
		},
		range: {
			base: 300,
			scale: 1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
	},
	dunsparce: {
		id: 54,
		key: 'dunsparce',
		name: ['dunsparce', 'dunsparce', 'Insolourdo', 'dunsparce', 'dunsparce', 'dummisel', 'ノコッチ', '노고치', '土龍弟弟', 'dunsparce'],
		color: '#1f9fe7',
		ability: abilityData['slowSplash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/dunsparce.png',
			image: './src/assets/images/pokemon/normal/dunsparce-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 2900,
			scale: -12
		},
		power: {
			base: 15,
			scale: 7,
		},
		critical: {
			base: 5,
			scale: 0.2
		},
		range: {
			base: 200,
			scale: 3,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'dudunsparce',
			level: 60,
		},
	},
	dudunsparce: {
		id: 54,
		key: 'dudunsparce',
		name: ['dudunsparce', 'dudunsparce', 'Deusolourdo', 'dudunsparce', 'dudunsparce', 'dummimisel', 'ノコッチ', '노고치', '土龍弟弟', 'dudunsparce'],
		color: '#598fa2',
		ability: abilityData['hyperDrill'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/dudunsparce.png',
			image: './src/assets/images/pokemon/normal/dudunsparce-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 2900,
			scale: -12
		},
		power: {
			base: 50,
			scale: 2.5,
		},
		critical: {
			base: 5,
			scale: 0.2
		},
		range: {
			base: 200,
			scale: 3,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	ralts: {
		id: 55,
		key: 'ralts',
		name: ['ralts', 'ralts', 'Tarsal', 'ralts', 'ralts', 'trasla', 'ラルトス', '랄토스', '拉魯拉絲', 'ralts'],
		color: '#5ec636',
		ability: abilityData['synchronySplash'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/ralts.png',
			image: './src/assets/images/pokemon/normal/ralts-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -1
		},
		power: {
			base: 1,
			scale: 1,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 90,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'kirlia',
			level: 20,
		},
	},
	kirlia: {
		id: 55,
		key: 'kirlia',
		name: ['kirlia', 'kirlia', 'Kirlia', 'kirlia', 'kirlia', 'kirlia', 'キルリア', '킬리아', '奇魯莉安', 'kirlia'],
		color: '#e63f67',
		ability: abilityData['synchronySplash'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/kirlia.png',
			image: './src/assets/images/pokemon/normal/kirlia-idle.png',
			frames: 9,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -2
		},
		power: {
			base: 10,
			scale: 3,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'gardevoir',
			level: 30,
		},
	},
	gardevoir: {
		id: 55,
		key: 'gardevoir',
		name: ['gardevoir', 'gardevoir', 'Gardevoir', 'gardevoir', 'gardevoir', 'gardevoir', 'サーナイト', '가디안', '沙奈朵', 'gardevoir'],
		color: '#69cb44',
		ability: abilityData['synchronySplash'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/gardevoir.png',
			image: './src/assets/images/pokemon/normal/gardevoir-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -6
		},
		power: {
			base: 40,
			scale: 6.35, 
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		form: true,
		mega: ['megaGardevoir']
	},
	megaGardevoir: {
		id: 55,
		key: 'megaGardevoir',
		name: [
			`M-Gardevoir`, // inglés
			`M-Gardevoir`, // español
			`M-Gardevoir`, // francés
			`M-Gardevoir`, // portugués
			`M-Gardevoir`, // italiano
			`M-Gardevoir`, // alemán
			`メガサーナイト`, // japonés
			`메가 가디안`, // coreano
			`超级沙奈朵`, // chino
			`M-Gardevoir` // polaco
		],
		color: '#c36788',
		ability: abilityData['fairySingularity'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaGardevoir.png',
			image: './src/assets/images/pokemon/normal/megaGardevoir-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 4500,
			scale: 0
		},
		power: {
			base: 100,
			scale: 15,
		},
		critical: {
			base: 0,
			scale: 0.2
		},
		range: {
			base: 165,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		base: 'gardevoir'
	},
	gallade: {
		id: 55,
		key: 'gallade',
		name: [
			`Gallade`, // inglés
			`Gallade`, // español
			`Gallame`, // francés
			`Gallade`, // portugués
			`Gallade`, // italiano
			`Galagladi`, // alemán
			`エルレイド`, // japonés
			`엘레이드`, // coreano
			`艾路雷朵`, // chino
			`Gallade` // polaco
		],
		color: '#42a381',
		ability: abilityData['psychoCut'],
		projectileSound: 'hit4',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/gallade.png',
			image: './src/assets/images/pokemon/normal/gallade-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1500,
			scale: -7
		},
		power: {
			base: 50,
			scale: 4.6, 
		},
		critical: {
			base: 30,
			scale: 0.4
		},
		range: {
			base: 160,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		form: true,
		mega: ['megaGallade']
	},
	megaGallade: {
		id: 55,
		key: 'megaGallade',
		name: [
			`M-Gallade`, // inglés
			`M-Gallade`, // español
			`M-Gallame`, // francés
			`M-Gallade`, // portugués
			`M-Gallade`, // italiano
			`M-Galagladi`, // alemán
			`メガエルレイド`, // japonés
			`메가 엘레이드`, // coreano
			`超级艾路雷朵`, // chino
			`M-Gallade` // polaco
		],
		color: '#ce5454',
		ability: abilityData['psychoCutMega'],
		projectileSound: 'hit4',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaGallade.png',
			image: './src/assets/images/pokemon/normal/megaGallade-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1300,
			scale: -6
		},
		power: {
			base: 110,
			scale: 5, 
		},
		critical: {
			base: 50,
			scale: 0.25
		},
		range: {
			base: 180,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		base: 'gallade'
	},
	koffing: {
		id: 56,
		key: 'koffing',
		name: ['koffing', 'koffing', 'Smogo', 'koffing', 'koffing', 'smogon', 'ドガース', '또가스', '臭臭泥', 'koffing'],
		color: '#b595df',
		ability: abilityData['poison'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/koffing.png',
			image: './src/assets/images/pokemon/normal/koffing-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 2700,
			scale: -2
		},
		power: {
			base: 16,
			scale: 4,
		},
		critical: {
			base: 2,
			scale: 0
		},
		range: {
			base: 125,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'weezing',
			level: 35,
		},
	},
	weezing: {
		id: 56,
		key: 'weezing',
		name: ['weezing', 'weezing', 'Smogogo', 'weezing', 'weezing', 'smogmog', 'マタドガス', '또도가스', '瓦斯彈王', 'weezing'],
		color: '#ad6bb4',
		ability: abilityData['poisonDoubleShot'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/weezing.png',
			image: './src/assets/images/pokemon/normal/weezing-idle.png',
			frames: 11,
			hold: 15
		},
		speed: {
			base: 2320,
			scale: -5
		},
		power: {
			base: 50,
			scale: 8.1,
		},
		critical: {
			base: 4,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0.15,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	farfetchd: {
		id: 57,
		key: 'farfetchd',
		name: ['farfetch’d', 'farfetch’d', 'Canarticho', 'farfetch’d', 'farfetch’d', 'porenta', 'カモネギ', '파오리', '大蔥鴨', 'farfetch’d'],
		color: '#ad621b',
		ability: abilityData['criticalDamageAura'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/farfetchd.png',
			image: './src/assets/images/pokemon/normal/farfetchd-idle.png',
			frames: 4,
			hold: 14
		},
		speed: {
			base: 2000,
			scale: -10
		},
		power: {
			base: 10,
			scale: 3.8,
		},
		critical: {
			base: 0,
			scale: 0.5
		},
		range: {
			base: 110,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2, 4],
	},
	omanyte: {
		id: 58,
		key: 'omanyte',
		name: ['omanyte', 'omanyte', 'Amonita', 'omanyte', 'omanyte', 'amonitas', 'オムナイト', '암나이트', '化石盔', 'omanyte'],
		color: '#8cdffe',
		ability: abilityData['swimmer'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/omanyte.png',
			image: './src/assets/images/pokemon/normal/omanyte-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 5700,
			scale: -12 //Changelog: -10->-12
		},
		power: {
			base: 27,
			scale: 3, //Changelog: 4->3
		},
		critical: {
			base: 0, //Changelog: 5->0 (universal AoE removal of crit)
			scale: 0
		},
		range: {
			base: 130, 
			scale: 0, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 3],
		evolution: {
			pokemon: 'omastar',
			level: 40,
		},
	},
	omastar: {
		id: 58,
		key: 'omastar',
		name: ['omastar', 'omastar', 'Amonistar', 'omastar', 'omastar', 'amoroso', 'オムスター', '암스타', '菊石獸', 'omastar'],
		color: '#189ce6',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/omastar.png',
			image: './src/assets/images/pokemon/normal/omastar-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 3300,
			scale: -5 //Changelog : -10->-12
		},
		power: {
			base: 75, 
			scale: 4.6, //Changelog : 8.5->4.65
		},
		critical: {
			base: 0, //Changelog : 5->0 (universal AoE removal of crit)
			scale: 0
		},
		range: {
			base: 145, //Changelog : 155->130
			scale: 0, //Changelog: 0->0.1
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 3], //Changelog : Cannot go into mountain anymore (no one used that anyway and another AoE DPS will take that spot)
	},
	kabuto: {
		id: 59,
		key: 'kabuto',
		name: ['kabuto', 'kabuto', 'Kabuto', 'kabuto', 'kabuto', 'kabuto', 'カブト', '투구', '化石盔', 'kabuto'],
		color: '#de7318',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/kabuto.png',
			image: './src/assets/images/pokemon/normal/kabuto-idle.png',
			frames: 3,
			hold: 15
		},
		speed: {
			base: 1500,
			scale: -2
		},
		power: {
			base: 10,
			scale: 2.5,
		},
		critical: {
			base: 5,
			scale: 0.3
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3, 4],
		evolution: {
			pokemon: 'kabutops',
			level: 40,
		},
	},
	kabutops: {
		id: 59,
		key: 'kabutops',
		name: ['kabutops', 'kabutops', 'Kabutops', 'kabutops', 'kabutops', 'kabutops', 'カブトプス', '투구푸스', '盔甲刀龍', 'kabutops'],
		color: '#a55b19',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/kabutops.png',
			image: './src/assets/images/pokemon/normal/kabutops-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1100, //Changelog: 1120->1100
			scale: -4
		},
		power: {
			base: 25,
			scale: 5.5, //Changelog: 4.3->5
		},
		critical: {
			base: 5,
			scale: 0.4
		},
		range: {
			base: 130, //Changelog: 115->130
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3, 4],
	},
	corsola: {
		id: 60,
		key: 'corsola',
		name: ['corsola', 'corsola', 'Corayon', 'corsola', 'corsola', 'corasonn', 'サニーゴ', '코산호', '珊瑚獸', 'corsola'],
		color: '#ff8faf',
		ability: abilityData['slowSplash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/corsola.png',
			image: './src/assets/images/pokemon/normal/corsola-idle.png',
			frames: 3,
			hold: 15
		},
		speed: {
			base: 2500,
			scale: -2
		},
		power: {
			base: 10,
			scale: 4.5,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 200,
			scale: 1,
			inner: 125,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3, 4],
	},
	castform: {
		id: 61,
		key: 'castform',
		name: ['castform', 'castform', 'Morphéo', 'castform', 'castform', 'formeo', 'ポワルン', '캐스퐁', '變化怪', 'castform'],
		color: '#aeb7bf',
		ability: abilityData['castform'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		projectileGrass: projectileData['red1'],
		projectileWater: projectileData['blue5'],
		projectileMountain: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/castform.png',
			image: './src/assets/images/pokemon/normal/castform-idle.png',
			imageGrass: './src/assets/images/pokemon/normal/castform-grass-idle.png',
			imageWater: './src/assets/images/pokemon/normal/castform-water-idle.png',
			imageMountain: './src/assets/images/pokemon/normal/castform-mountain-idle.png',
			frames: 6,
			framesGrass: 9,
			framesWater: 8,
			framesMountain: 4,
			hold: 14
		},
		speed: {
			base: 2100,
			scale: -12 //Changelog: -12->-12.5
		},
		power: {
			base: 10,
			scale: 6.9,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 3, 4],
	},
	clefairy: {
		id: 62,
		key: 'clefairy',
		name: ['clefairy', 'clefairy', 'Mélofée', 'clefairy', 'clefairy', 'Piepi', 'ピッピ', '삐삐', '皮皮', 'clefairy'],
		color: '#ffc7d7',
		ability: abilityData['star'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/clefairy.png',
			image: './src/assets/images/pokemon/normal/clefairy-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1200,
			scale: -2
		},
		power: {
			base: 5,
			scale: 1,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'clefable',
			level: 25,
		},
	},
	clefable: {
		id: 62,
		key: 'clefable',
		name: ['clefable', 'clefable', 'Mélodelfe', 'clefable', 'clefable', 'Pixi', 'ピクシー', '픽시', '皮可西', 'clefable'],
		color: '#fe8dad',
		ability: abilityData['star'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/clefable.png',
			image: './src/assets/images/pokemon/normal/clefable-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1200,
			scale: -3
		},
		power: {
			base: 25,
			scale: 4.3,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
	},
	anorith: {
		id: 63,
		key: 'anorith',
		name: ['anorith', 'anorith', 'Anorith', 'anorith', 'anorith', 'anorith', 'アノプス', '아노딥스', '始祖小獸', 'anorith'],
		color: '#47676f',
		ability: abilityData['armaldo'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/anorith.png',
			image: './src/assets/images/pokemon/normal/anorith-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1600,
			scale: -2
		},
		power: {
			base: 8,
			scale: 2,
		},
		critical: {
			base: 25,
			scale: 0.1
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 3, 4],
		evolution: {
			pokemon: 'armaldo',
			level: 40,
		},
	},
	armaldo: {
		id: 63,
		key: 'armaldo',
		name: ['armaldo', 'armaldo', 'Armaldo', 'armaldo', 'armaldo', 'armaldo', 'アーマルド', '아말도', '甲冑龍', 'armaldo'],
		color: '#1f9fe7',
		ability: abilityData['armaldo'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/armaldo.png',
			image: './src/assets/images/pokemon/normal/armaldo-idle.png',
			frames: 14,
			hold: 15
		},
		speed: {
			base: 1600,
			scale: -7
		},
		power: {
			base: 35,
			scale: 4,
		},
		critical: {
			base: 55, //Changelog: 50->55
			scale: 0.2
		},
		range: {
			base: 130, //Changelog: 115->130
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 3, 4],
	},
	lileep: {
		id: 64,
		key: 'lileep',
		name: ['lileep', 'lileep', 'Lilia', 'lileep', 'lileep', 'liliep', 'リリーラ', '릴링', '始祖小草', 'lileep'],
		color: '#c697de',
		ability: abilityData['cradily'],
		projectileSound: 'projectile2',
		projectileSpeed: 4,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/lileep.png',
			image: './src/assets/images/pokemon/normal/lileep-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2500,
			scale: -2
		},
		power: {
			base: 10,
			scale: 2.3,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'cradily',
			level: 40,
		},
	},
	cradily: {
		id: 64,
		key: 'cradily',
		name: ['cradily', 'cradily', 'Vacilys', 'cradily', 'cradily', 'wielie', 'ユレイドル', '릴리요', '始祖大草', 'cradily'],
		color: '#a75e67',
		ability: abilityData['cradily'],
		projectileSound: 'projectile2',
		projectileSpeed: 14,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/cradily.png',
			image: './src/assets/images/pokemon/normal/cradily-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 2500, //changelog:2320->2400 (Make it perma slow, it could already do that but only at lvl 80)
			scale: -4
		},
		power: {
			base: 55,
			scale: 3.7,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 160,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
	},
	shieldon: {
		id: 65,
		key: 'shieldon',
		name: ['shieldon', 'shieldon', 'Dinoclier', 'shieldon', 'shieldon', 'schilterus', 'タテトプス', '방패톱스', '盾甲龍', 'shieldon'],
		color: '#efbe36',
		ability: abilityData['bastiodon'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/shieldon.png',
			image: './src/assets/images/pokemon/normal/shieldon-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 9800, //Changelog: 10000->9800
			scale: -10
		},
		power: {
			base: 50,
			scale: 3.2, //Changelog: 5->3.2 
		},
		critical: {
			base: 0, //Changelog: 1->0 (universal AoE removal crit)
			scale: 0
		},
		range: {
			base: 120, //Changelog: 110->120
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'bastiodon',
			level: 30,
		},
	},
	bastiodon: {
		id: 65,
		key: 'bastiodon',
		name: ['bastiodon', 'bastiodon', 'Bastiodon', 'bastiodon', 'bastiodon', 'bollterus', 'トリデプス', '바리톱스', '盔甲龍王', 'bastiodon'],
		color: '#c7971f',
		ability: abilityData['bastiodon'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/bastiodon.png',
			image: './src/assets/images/pokemon/normal/bastiodon-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 8500, //Changelog: 8000->7800
			scale: -15
		},
		power: {
			base: 320,
			scale: 9.6, //Changelog: 15->9.6
		},
		critical: {
			base: 0, //Changelog: 3->0 (universal AoE removal crit)
			scale: 0
		},
		range: {
			base: 145,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
	},
	cranidos: {
		id: 66,
		key: 'cranidos',
		name: ['cranidos', 'cranidos', 'Kranidos', 'cranidos', 'cranidos', 'koknodon', 'ズガイドス', '두개도스', '頭蓋獸', 'cranidos'],
		color: '#1f9fe7',
		ability: abilityData['rampardos'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/cranidos.png',
			image: './src/assets/images/pokemon/normal/cranidos-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3000,
			scale: -5
		},
		power: {
			base: 30,
			scale: 9,
		},
		critical: {
			base: 15,
			scale: 0.1
		},
		range: {
			base: 95,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'rampardos',
			level: 30,
		},
	},
	rampardos: {
		id: 66,
		key: 'rampardos',
		name: ['rampardos', 'rampardos', 'Charkos', 'rampardos', 'rampardos', 'rameidon', 'ラムパルド', '램펄드', '頭蓋巨獸', 'rampardos'],
		color: '#d72701',
		ability: abilityData['rampardos'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/rampardos.png',
			image: './src/assets/images/pokemon/normal/rampardos-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2600,
			scale: -7
		},
		power: {
			base: 100,
			scale: 25.5,
		},
		critical: {
			base: 20,
			scale: 0.15
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
	},
	starly: {
		id: 67,
		key: 'starly',
		name: ['starly', 'starly', 'Étourmi', 'starly', 'starly', 'staralili', 'ムックル', '찌르꼬', '小星雀', 'starly'],
		color: '#7e6f6e',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/starly.png',
			image: './src/assets/images/pokemon/normal/starly-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1250,
			scale: -1
		},
		power: {
			base: 4,
			scale: 1,
		},
		critical: {
			base: 1,
			scale: 0.2
		},
		range: {
			base: 175,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'staravia',
			level: 14,
		},
	},
	staravia: {
		id: 67,
		key: 'staravia',
		name: ['staravia', 'staravia', 'Étourvol', 'staravia', 'staravia', 'staravia', 'ムクバード', '찌르버드', '星羽鳥', 'staravia'],
		color: '#b7bfc7',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/staravia.png',
			image: './src/assets/images/pokemon/normal/staravia-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1100,
			scale: -1
		},
		power: {
			base: 12,
			scale: 1.8,
		},
		critical: {
			base: 3,
			scale: 0.1
		},
		range: {
			base: 210,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'staraptor',
			level: 31,
		},
	},
	staraptor: {
		id: 67,
		key: 'staraptor',
		name: ['staraptor', 'staraptor', 'Étouraptor', 'staraptor', 'staraptor', 'staraptor', 'ムクホーク', '찌르호크', '蓮蓬鳥', 'staraptor'],
		color: '#df6c56',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/staraptor.png',
			image: './src/assets/images/pokemon/normal/staraptor-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -3.5 //Changelog: -3->-3.5
		},
		power: {
			base: 50,
			scale: 3.8, //Changelog: 2.2->2.3
		},
		critical: {
			base: 5,
			scale: 0.45 //Changelog: 0.1->0.2
		},
		range: {
			base: 280,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
	},
	abra: {
		id: 68,
		key: 'abra',
		name: ['abra', 'abra', 'Abra', 'abra', 'abra', 'abra', 'ケーシィ', '캐이시', '凱西', 'abra'],
		color: '#deb500',
		ability: abilityData['teleport'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/abra.png',
			image: './src/assets/images/pokemon/normal/abra-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 850,
			scale: 0
		},
		power: {
			base: 1,
			scale: 1,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 90,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'kadabra',
			level: 16,
		},
	},
	kadabra: {
		id: 68,
		key: 'kadabra',
		name: ['kadabra', 'kadabra', 'Kadabra', 'kadabra', 'kadabra', 'kadabra', 'ユンゲラー', '윤겔라', '勇基拉', 'kadabra'],
		color: '#a55a19',
		ability: abilityData['teleport'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/kadabra.png',
			image: './src/assets/images/pokemon/normal/kadabra-idle.png',
			frames: 9,
			hold: 15
		},
		speed: {
			base: 800,
			scale: 0
		},
		power: {
			base: 15,
			scale: 3,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'alakazam',
			level: 50,
		},
	},
	alakazam: {
		id: 68,
		key: 'alakazam',
		name: ['alakazam', 'alakazam', 'Alakazam', 'alakazam', 'alakazam', 'simsala', 'フーディン', '후딘', '胡地', 'alakazam'],
		color: '#dfb401',
		ability: abilityData['teleport'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/alakazam.png',
			image: './src/assets/images/pokemon/normal/alakazam-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 700,
			scale: 0
		},
		power: {
			base: 80,
			scale: 4.2,
		},
		critical: {
			base: 20,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
		mega: ['megaAlakazam']
	},
	megaAlakazam: {
		id: 68,
		key: 'megaAlakazam',
		name: [
			"M-Alakazam",
			"M-Alakazam",
			"M-Alakazam",
			"M-Alakazam",
			"M-Alakazam",
			"M-Simsala",
			"メガフーディン",
			"메가후디닌",
			"超进化胡地",
			"M-Alakazam"
		],
		color: '#d87118',
		ability: abilityData['synchronySplash'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaAlakazam.png',
			image: './src/assets/images/pokemon/normal/megaAlakazam-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 600,
			scale: 0
		},
		power: {
			base: 100,
			scale: 4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
		base: 'alakazam'
	},
	gastly: {
		id: 69,
		key: 'gastly',
		name: ['gastly', 'gastly', 'Fantominus', 'gastly', 'gastly', 'nebulak', 'ゴース', '고오스', '鬼斯', 'gastly'],
		color: '#b595de',
		ability: abilityData['nightmare'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/gastly.png',
			image: './src/assets/images/pokemon/normal/gastly-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -1
		},
		power: {
			base: 9,
			scale: 1,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1],
		evolution: {
			pokemon: 'haunter',
			level: 25,
		},
	},
	haunter: {
		id: 69,
		key: 'haunter',
		name: ['haunter', 'haunter', 'Spectrum', 'haunter', 'haunter', 'alpollo', 'ゴースト', '고우스트', '鬼斯通', 'haunter'],
		color: '#8c62bc',
		ability: abilityData['nightmare'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/haunter.png',
			image: './src/assets/images/pokemon/normal/haunter-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -4
		},
		power: {
			base: 30,
			scale: 2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1],
		evolution: {
			pokemon: 'gengar',
			level: 50,
		},
	},
	gengar: {
		id: 69,
		key: 'gengar',
		name: ['gengar', 'gengar', 'Ectoplasma', 'gengar', 'gengar', 'gengar', 'ゲンガー', '팬텀', '耿鬼', 'gengar'],
		color: '#b494de',
		ability: abilityData['nightmare'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/gengar.png',
			image: './src/assets/images/pokemon/normal/gengar-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -8
		},
		power: {
			base: 40,
			scale: 6.6,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1],
		mega: ['megaGengar']
	},
	megaGengar: {
		id: 69,
		key: 'megaGengar',
		name: [
			`M-Gengar`, // inglés
			`M-Gengar`, // español
			`M-Ectoplasma`, // francés
			`M-Gengar`, // portugués
			`M-Gengar`, // italiano
			`M-Gengar`, // alemán
			`メガゲンガー`, // japonés
			`메가 팬텀`, // coreano
			`超级耿鬼`, // chino
			`M-Gengar` // polaco
		],
		color: '#b494de',
		ability: abilityData['shadowTag'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaGengar.png',
			image: './src/assets/images/pokemon/normal/megaGengar-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 3100,
			scale: -3
		},
		power: {
			base: 40,
			scale: 6.6,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0.45,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1],
		base: 'gengar'
	},
	ditto: {
		id: 70,
		key: 'ditto',
		name: ['ditto', 'ditto', 'Métamorph', 'ditto', 'ditto', 'ditto', 'メタモン', '메타몽', '變隻', 'ditto'],
		color: '#d794de',
		ability: abilityData['transform'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/ditto.png',
			image: './src/assets/images/pokemon/normal/ditto-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 0,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'veryHigh',
		tiles: [1, 2],
	},
	magikarp: {
		id: 71,
		key: 'magikarp',
		name: ['Magikarp', 'Magikarp', 'Magicarpe', 'Magikarp', 'Magikarp', 'Karpador', 'コイキング', '잉어킹', '鲤鱼王', 'Magikarp'],
		color: '#d63801',
		ability: abilityData['armorBreakSplash'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/magikarp.png',
			image: './src/assets/images/pokemon/normal/magikarp-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 4000,
			scale: -1
		},
		power: {
			base: 10,
			scale: 1,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 210,
			scale: 0,
			inner: 145,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'high',
		tiles: [3],
		evolution: {
			pokemon: 'gyarados',
			level: 20,
		},
	},
	gyarados: {
		id: 71,
		key: 'gyarados',
		name: ['Gyarados', 'Gyarados', 'Léviator', 'Gyarados', 'Gyarados', 'Garados', 'ギャラドス', '갸라도스', '暴鲤龙', 'Gyarados'],
		color: '#189ce7',
		ability: abilityData['armorBreakSplash'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/gyarados.png',
			image: './src/assets/images/pokemon/normal/gyarados-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3900,
			scale: -2
		},
		power: {
			base: 100,
			scale: 23.5,
		},
		critical: {
			base: 10,
			scale: 0.1
		},
		range: {
			base: 230,
			scale: 0.4,
			inner: 145,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'high',
		tiles: [3],
	},
	pikachu: {
		id: 72,
		key: 'pikachu',
		name: ['Pikachu', 'Pikachu', 'Pikachu', 'Pikachu', 'Pikachu', 'Pikachu', 'ピカチュウ', '피카츄', '皮卡丘', 'Pikachu'],
		color: '#fef800',
		ability: abilityData['static'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		ricochet: 3,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/pikachu.png',
			image: './src/assets/images/pokemon/normal/pikachu-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1450,
			scale: -2
		},
		power: {
			base: 8,
			scale: 3,
		},
		critical: {
			base: 5,
			scale: 0.1
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'raichu',
			level: 30,
		},
	},
	raichu: {
		id: 72,
		key: 'raichu',
		name: ['Raichu', 'Raichu', 'Raichu', 'Raichu', 'Raichu', 'Raichu', 'ライチュウ', '라이츄', '雷丘', 'Raichu'],
		color: '#ff9443',
		ability: abilityData['static'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		ricochet: 4,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/raichu.png',
			image: './src/assets/images/pokemon/normal/raichu-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1245,
			scale: -4.7
		},
		power: {
			base: 50,
			scale: 3,
		},
		critical: {
			base: 10,
			scale: 0 
		},
		range: {
			base: 135,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
	fuecoco: {
		id: 73,
		key: 'fuecoco',
		name: ['Fuecoco', 'Fuecoco', 'Chochodile', 'Fuecoco', 'Fuecoco', 'Krokel', 'フエココ', '뜨아거', '呆火鳄', 'Fuecoco'],
		color: '#b81000',
		ability: abilityData['willOWisp'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red2'],
		sprite: {
			base: './src/assets/images/pokemon/normal/fuecoco.png',
			image: './src/assets/images/pokemon/normal/fuecoco-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3420,
			scale: -2
		},
		power: {
			base: 10,
			scale: 2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'crocalor',
			level: 16,
		},	
	},
	crocalor: {
		id: 73,
		key: 'crocalor',
		name: ['Crocalor', 'Crocalor', 'Crocogril', 'Crocalor', 'Crocalor', 'Lokroko', 'クロカロール', '악뜨거', '炙烫鳄', 'Crocalor'],
		color: '#de3b2e',
		ability: abilityData['willOWisp'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red2'],
		sprite: {
			base: './src/assets/images/pokemon/normal/crocalor.png',
			image: './src/assets/images/pokemon/normal/crocalor-idle.png',
			frames: 2,
			hold: 7
		},
		speed: {
			base: 3250,
			scale: -3
		},
		power: {
			base: 20,
			scale: 3,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 115,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'skeledirge',
			level: 36,
		},	
	},
	skeledirge: {
		id: 73,
		key: 'skeledirge',
		name: ['Skeledirge', 'Skeledirge', 'Flâmigator', 'Skeledirge', 'Skeledirge', 'Skelokrok', 'スケルディルガ', '라우드본', '骨纹巨声鳄', 'Skeledirge'],
		color: '#d74e40',
		ability: abilityData['willOWisp'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red2'],
		sprite: {
			base: './src/assets/images/pokemon/normal/skeledirge.png',
			image: './src/assets/images/pokemon/normal/skeledirge-idle.png',
			frames: 14,
			hold: 15
		},
		speed: {
			base: 2900,
			scale: -4
		},
		power: {
			base: 50,
			scale: 3.9,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	larvesta: {
		id: 74,
		key: 'larvesta',
		name: ['Larvesta', 'Larvesta', 'Pyronille', 'Larvesta', 'Larvesta', 'Ignivor', 'モノズ', '모노즈', '燃烧虫', 'Larvesta'],
		color: '#df9d00',
		ability: abilityData['fieryDance'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/larvesta.png',
			image: './src/assets/images/pokemon/normal/larvesta-idle.png',
			frames: 10,
			hold: 15
		},
		speed: {
			base: 4150,
			scale: -27
		},
		power: {
			base: 5,
			scale: 1.1,
		},
		critical: {
			base: 1,
			scale: 0.1
		},
		range: {
			base: 95,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 2],
		evolution: {
			pokemon: 'volcarona',
			level: 59,
		}
	},
	volcarona: {
		id: 74,
		key: 'volcarona',
		name: ['Volcarona', 'Volcarona', 'Pyrax', 'Volcarona', 'Volcarona', 'Ramoth', 'ウルガモス', '불카모스', '火神蛾', 'Volcarona'],
		color: '#e32929',
		ability: abilityData['fieryDance'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/volcarona.png',
			image: './src/assets/images/pokemon/normal/volcarona-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 5550, //Changelog: 4150->5550
			scale: -27
		},
		power: {
			base: 25,
			scale: 5, //Changelog: 2.2->5
		},
		critical: {
			base: 15, //Changelog: 8->15
			scale: 0.2
		},
		range: {
			base: 140, //Changelog: 100->140
			scale: 0.2, //Changelog: 1->0.2
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 2],
	},
	cherubi: {
		id: 75,
		key: 'cherubi',
		name: ['Cherubi', 'Cherubi', 'Ceribou', 'Cherubi', 'Cherubi', 'Kikugi', 'チェリンボ', '체리버', '樱花宝', 'Cherubi'],
		color: '#fc5492',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/cherubi.png',
			image: './src/assets/images/pokemon/normal/cherubi-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2800,
			scale: -2
		},
		power: {
			base: 8,
			scale: 2.5,
		},
		critical: {
			base: 0,
			scale: 0.2
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'cherrim',
			level: 25,
		},
	},
	cherrim: {
		id: 75,
		key: 'cherrim',
		name: ['Cherrim', 'Cherrim', 'Ceriflor', 'Cherrim', 'Cherrim', 'Kinoso', 'チェリム', '체리꼬', '樱花儿', 'Cherrim'],
		color: '#9e5fc6',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/cherrim1.png',
			image: './src/assets/images/pokemon/normal/cherrim1-idle.png',
			transform: './src/assets/images/pokemon/normal/cherrim2-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2400, 
			scale: -8
		},
		power: {
			base: 30,
			scale: 8.4,
		},
		critical: {
			base: 0,
			scale: 0.3
		},
		range: {
			base: 135,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
	},
	rockruff: {
		id: 76,
		key: 'rockruff',
		name: ['Rockruff', 'Rockruff', 'Rocabot', 'Rockruff', 'Rockruff', 'Rockruff', 'イワンコ', '암멍이', '岩狗狗', 'Rockruff'],
		color: '#ab6a5a',
		ability: abilityData['toughClaws'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/rockruff.png',
			image: './src/assets/images/pokemon/normal/rockruff-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 2500,
			scale: -2
		},
		power: {
			base: 10,
			scale: 2,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 95,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'lycanrocDay',
			level: 25,
		},
	},
	lycanrocDay: {
		id: 76,
		key: 'lycanrocDay',
		name: ['Lycanroc', 'Lycanroc', 'Lougaroc', 'Lycanroc', 'Lycanroc', 'Wolwerock', 'ルガルガン', '루가루암', '鬃岩狼人', 'Lycanroc'],
		color: '#a17e6f',
		ability: abilityData['toughClawsDay'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/lycanroc1.png',
			image: './src/assets/images/pokemon/normal/lycanroc1-idle.png',
			frames: 14,
			hold: 15
		},
		speed: {
			base: 1900,
			scale: -10
		},
		power: {
			base: 20,
			scale: 6.5,
		},
		critical: {
			base: 20,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0.15,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		form: true
	},
	lycanrocNight: {
		id: 76,
		key: 'lycanrocNight',
		name: ['Lycanroc', 'Lycanroc', 'Lougaroc', 'Lycanroc', 'Lycanroc', 'Wolwerock', 'ルガルガン', '루가루암', '鬃岩狼人', 'Lycanroc'],
		color: '#c42f00',
		ability: abilityData['toughClawsNight'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/lycanroc2.png',
			image: './src/assets/images/pokemon/normal/lycanroc2-idle.png',
			frames: 2,
			hold: 30
		},
		speed: {
			base: 1950,
			scale: -15
		},
		power: {
			base: 30,
			scale: 3.05,
		},
		critical: {
			base: 20,
			scale: 0
		},
		range: {
			base: 125,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		form: true
	},
	pawniard: {
		id: 77,
		key: 'pawniard',
		name: ['Pawniard', 'Pawniard', 'Scalpion', 'Pawniard', 'Pawniard', 'Gladiantri', 'コマタナ', '자망칼', '驹刀小兵', 'Pawniard'],
		color: '#ad4042',
		ability: abilityData['defiant'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/pawniard.png',
			image: './src/assets/images/pokemon/normal/pawniard-idle.png',
			frames: 3,
			hold: 20
		},
		speed: {
			base: 2200,
			scale: 0
		},
		power: {
			base: 16,
			scale: 4.5,
		},
		critical: {
			base: 15,
			scale: 0
		},
		range: {
			base: 170,
			scale: 0,
			inner: 0,
		},
		rangeType: 'xShape',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'bisharp',
			level: 52,
		},
	},
	bisharp: {
		id: 77,
		key: 'bisharp',
		name: ['Bisharp', 'Bisharp', 'Scalproie', 'Bisharp', 'Bisharp', 'Caesurio', 'キリキザン', '절각참', '劈斩司令', 'Bisharp'],
		color: '#a13f2b',
		ability: abilityData['defiant'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/bisharp.png',
			image: './src/assets/images/pokemon/normal/bisharp-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1700,
			scale: 0
		},
		power: {
			base: 125,
			scale: 12.6,
		},
		critical: {
			base: 23,
			scale: 0.17
		},
		range: {
			base: 255,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'xShape',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'kingambit',
			level: 70
		},	
	},
	kingambit: {
		id: 77,
		key: 'kingambit',
		name: [
			'Kingambit', // inglés
			'Kingambit', // español
			'Scalpereur', // francés
			'Kingambit', // portugués
			'Kingambit', // italiano
			'Gladimperio', // alemán
			'ドドゲザン', // japonés
			'대도각참', // coreano
			'仆斩将军', // chino
			'Kingambit' // polaco
		],
		color: '#a13f2b',
		ability: abilityData['supremeOverlord'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/kingambit.png',
			image: './src/assets/images/pokemon/normal/kingambit-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1700,
			scale: 0
		},
		power: {
			base: 100,
			scale: 19,
		},
		critical: {
			base: 23,
			scale: 0.17
		},
		range: {
			base: 255,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'star',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	sandile: {
		id: 78,
		key: 'sandile',
		name: ['Sandile', 'Sandile', 'Mascaïman', 'Sandile', 'Sandile', 'Ganovil', 'メグロコ', '깜눈크', '黑眼鳄', 'Sandile'],
		color: '#9c865b',
		ability: abilityData['moxie'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sandile.png',
			image: './src/assets/images/pokemon/normal/sandile-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -1
		},
		power: {
			base: 10,
			scale: 2,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'krokorok',
			level: 29,
		},
	},
	krokorok: {
		id: 78,
		key: 'krokorok',
		name: ['Krokorok', 'Krokorok', 'Escroco', 'Krokorok', 'Krokorok', 'Rokkaiman', 'ワルビル', '악비르', '混混鳄', 'Krokorok'],
		color: '#99673e',
		ability: abilityData['moxie'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/krokorok.png',
			image: './src/assets/images/pokemon/normal/krokorok-idle.png',
			frames: 14,
			hold: 15
		},
		speed: {
			base: 1900,
			scale: -1
		},
		power: {
			base: 20,
			scale: 4,
		},
		critical: {
			base: 10,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'krookodile',
			level: 40,
		},
	},
	krookodile: {
		id: 78,
		key: 'krookodile',
		name: ['Krookodile', 'Krookodile', 'Crocorible', 'Krookodile', 'Krookodile', 'Rabigator', 'ワルビアル', '악비아르', '流氓鳄', 'Krookodile'],
		color: '#954350',
		ability: abilityData['moxie'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/krookodile.png',
			image: './src/assets/images/pokemon/normal/krookodile-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1920,
			scale: -10 
		},
		power: {
			base: 50,
			scale: 11.2, 
		},
		critical: {
			base: 20,
			scale: 0
		},
		range: {
			base: 145, 
			scale: 0.2, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	wimpod: {
		id: 79,
		key: 'wimpod',
		name: ['Wimpod', 'Wimpod', 'Sovkipou', 'Wimpod', 'Wimpod', 'Reißlaus', 'コソクムシ', '꼬시레', '胆小虫', 'Wimpod'],
		color: '#a48ba7',
		ability: abilityData['firstImpression'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/wimpod.png',
			image: './src/assets/images/pokemon/normal/wimpod-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2600,
			scale: -5
		},
		power: {
			base: 20,
			scale: 6.3,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 95, 
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 3],
		evolution: {
			pokemon: 'golisopod',
			level: 30,
		},
	},
	golisopod: {
		id: 79,
		key: 'golisopod',
		name: ['Golisopod', 'Golisopod', 'Sarmuraï', 'Golisopod', 'Golisopod', 'Tectass', 'グソクムシャ', '갑주무사', '具甲武者', 'Golisopod'],
		color: '#8855ab',
		ability: abilityData['firstImpression'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/golisopod.png',
			image: './src/assets/images/pokemon/normal/golisopod-idle.png',
			frames: 10,
			hold: 15
		},
		speed: {
			base: 2500,
			scale: -7
		},
		power: {
			base: 50,
			scale: 16.5,
		},
		critical: {
			base: 0,
			scale: 0.12
		},
		range: {
			base: 95,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 3],
	},
	honedge: {
		id: 80,
		key: 'honedge',
		name: ['Honedge', 'Honedge', 'Monorpale', 'Honedge', 'Honedge', 'Gramokles', 'ヒトツキ', '단칼빙', '独剑鞘', 'Honedge'],
		color: '#2e7596',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/honedge.png',
			image: './src/assets/images/pokemon/normal/honedge-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -1
		},
		power: {
			base: 5,
			scale: 2,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'doublade',
			level: 35,
		},
	},
	doublade: {
		id: 80,
		key: 'doublade',
		name: ['Doublade', 'Doublade', 'Dimoclès', 'Doublade', 'Doublade', 'Duokles', 'ニダンギル', '쌍검킬', '双剑鞘', 'Doublade'],
		color: '#af4a8d',
		ability: abilityData['armorBreakDoubleShot'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/doublade.png',
			image: './src/assets/images/pokemon/normal/doublade-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 950,
			scale: -1
		},
		power: {
			base: 15,
			scale: 2,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'aegislash',
			level: 60,
		},
	},
	aegislash: { // SHIELD
		id: 80,
		key: 'aegislash',
		name: ['Aegislash', 'Aegislash', 'Exagide', 'Aegislash', 'Aegislash', 'Durengard', 'ギルガルド', '킬가르도', '坚盾剑怪', 'Aegislash'],
		color: '#967bd2',
		ability: abilityData['slow'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/aegislashShield.png',
			image: './src/assets/images/pokemon/normal/aegislashShield-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 1800,
			scale: -0.5
		},
		power: {
			base: 50,
			scale: 2.5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
		form: true
	},
	aegislashSword: { // SWORD
		id: 80,
		key: 'aegislashSword',
		name: ['Aegislash', 'Aegislash', 'Exagide', 'Aegislash', 'Aegislash', 'Durengard', 'ギルガルド', '킬가르도', '坚盾剑怪', 'Aegislash'],
		color: '#967bd2',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/aegislashSword.png',
			image: './src/assets/images/pokemon/normal/aegislashSword-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 900,
			scale: -1.5
		},
		power: {
			base: 50,
			scale: 5.5,
		},
		critical: {
			base: 35, 
			scale: 0.4
		},
		range: {
			base: 150,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		form: true,
	},
	sobble: {
		id: 81,
		key: 'sobble',
		name: ['Sobble', 'Sobble', 'Larméléon', 'Sobble', 'Sobble', 'Memmeon', 'メッソン', '울머기', '泪眼蜥', 'Sobble'],
		color: '#84d4fd',
		ability: abilityData['sniper'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sobble.png',
			image: './src/assets/images/pokemon/normal/sobble-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 4500,
			scale: -3
		},
		power: {
			base: 20,
			scale: 3,
		},
		critical: {
			base: 5,
			scale: 0.3
		},
		range: {
			base: 150,
			scale: 1,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'drizzile',
			level: 16,
		},	
	},
	drizzile: {
		id: 81,
		key: 'drizzile',
		name: ['Drizzile', 'Drizzile', 'Arrozard', 'Drizzile', 'Drizzile', 'Phlegleon', 'ジメレオン', '누겔레온', '变涩蜥', 'Drizzile'],
		color: '#a2cdec',
		ability: abilityData['sniper'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/drizzile.png',
			image: './src/assets/images/pokemon/normal/drizzile-idle.png',
			frames: 5,
			hold: 7
		},
		speed: {
			base: 4500,
			scale: -4
		},
		power: {
			base: 50,
			scale: 4,
		},
		critical: {
			base: 10,
			scale: 0.5
		},
		range: {
			base: 150,
			scale: 2,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'inteleon',
			level: 36,
		},	
	},
	inteleon: {
		id: 81,
		key: 'inteleon',
		name: ['Inteleon', 'Inteleon', 'Lézargus', 'Inteleon', 'Inteleon', 'Intelleon', 'インテレオン', '인텔리레온', '千面避役', 'Inteleon'],
		color: '#216ea0',
		ability: abilityData['sniper'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/inteleon.png',
			image: './src/assets/images/pokemon/normal/inteleon-idle.png',
			frames: 11,
			hold: 15
		},
		speed: {
			base: 4500,
			scale: -5
		},
		power: {
			base: 100, // 20 -> 100
			scale: 11, //Changelog: 2.8 -> 8
		},
		critical: {
			base: 15, 
			scale: 0.6 
		},
		range: {
			base: 200,
			scale: 5,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3, 4],
	},
	rowlet: {
		id: 82,
		key: 'rowlet',
		name: ['Rowlet', 'Rowlet', 'Brindibou', 'Rowlet', 'Rowlet', 'Bauz', 'モクロー', '나몰빼미', '木木枭', 'Rowlet'],
		color: '#c9703b',
		ability: abilityData['spiritShackle'],
		projectileSound: 'sword',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/rowlet.png',
			image: './src/assets/images/pokemon/normal/rowlet-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 2250,
			scale: -2
		},
		power: {
			base: 5,
			scale: 1,
		},
		critical: {
			base: 2,
			scale: 0.1
		},
		range: {
			base: 230,
			scale: 0.2,
			inner: 150,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'dartrix',
			level: 17,
		},	
	},
	dartrix: {
		id: 82,
		key: 'dartrix',
		name: ['Dartrix', 'Dartrix', 'Efflèche', 'Dartrix', 'Dartrix', 'Arboretoss', 'フクスロー', '빼미스로우', '投羽枭', 'Dartrix'],
		color: '#8be060',
		ability: abilityData['spiritShackle'],
		projectileSound: 'sword',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/dartrix.png',
			image: './src/assets/images/pokemon/normal/dartrix-idle.png',
			frames: 4,
			hold: 7
		},
		speed: {
			base: 1850,
			scale: -2
		},
		power: {
			base: 15,
			scale: 2,
		},
		critical: {
			base: 5,
			scale: 0.12
		},
		range: {
			base: 230,
			scale: 0.5,
			inner: 150,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'decidueye',
			level: 34,
		},	
	},
	decidueye: {
		id: 82,
		key: 'decidueye',
		name: ['Decidueye', 'Decidueye', 'Archéduc', 'Decidueye', 'Decidueye', 'Silvarro', 'ジュナイパー', '모크나이퍼', '狙射树枭', 'Decidueye'],
		color: '#0b7f52',
		ability: abilityData['spiritShackle'],
		projectileSound: 'sword',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/decidueye.png',
			image: './src/assets/images/pokemon/normal/decidueye-idle.png',
			frames: 10,
			hold: 15
		},
		speed: {
			base: 1650,
			scale: -2
		},
		power: {
			base: 40,
			scale: 4.4,
		},
		critical: {
			base: 8,
			scale: 0.14
		},
		range: {
			base: 230,
			scale: 0.7,
			inner: 150,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
	},
	comfey: {
		id: 83,
		key: 'comfey',
		name: ['Comfey', 'Comfey', 'Guérilande', 'Comfey', 'Comfey', 'Curelei', 'キュワワー', '큐아링', '花疗环环', 'Comfey'],
		color: '#a7af4e',
		ability: abilityData['triage'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/comfey.png',
			image: './src/assets/images/pokemon/normal/comfey-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 0,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 80,
			scale: 0.7, //Changelog: 0.5 -> 0.7
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'aura',
		costScale: 'low',
		tiles: [1, 2],
	},
	smeargle: {
		id: 84,
		key: 'smeargle',
		name: ['Smeargle', 'Smeargle', 'Queulorior', 'Smeargle', 'Smeargle', 'Farbeagle', 'ドーブル', '루브도', '图图犬', 'Smeargle'],
		color: '#c2c3b6',
		ability: abilityData['scheme'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/smeargle.png',
			image: './src/assets/images/pokemon/normal/smeargle-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 5000,
			scale: -30
		},
		power: {
			base: 5,
			scale: 3.45,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0.15,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
	},
	cacnea: {
		id: 85,
		key: 'cacnea',
		name: ['Cacnea', 'Cacnea', 'Cacnea', 'Cacnea', 'Cacnea', 'Tuska', 'サボネア', '선인왕', '刺球仙人掌', 'Cacnea'],
		color: '#a4d276',
		ability: abilityData['doubleShotSand'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/cacnea.png',
			image: './src/assets/images/pokemon/normal/cacnea-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -3
		},
		power: {
			base: 8,
			scale: 3.1,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0.4,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'cacturne',
			level: 32,
		},
	},
	cacturne: {
		id: 85,
		key: 'cacturne',
		name: ['Cacturne', 'Cacturne', 'Cacturne', 'Cacturne', 'Cacturne', 'Noktuska', 'ノクタス', '밤선인', '梦歌仙人掌', 'Cacturne'],
		color: '#4ea51c',
		ability: abilityData['quadraShotSand'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/cacturne.png',
			image: './src/assets/images/pokemon/normal/cacturne-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -6
		},
		power: {
			base: 25,
			scale: 3.9,
		},
		critical: {
			base: 15,
			scale: 0
		},
		range: {
			base: 200,
			scale: 0.6, 
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
	},
	greavard: {
		id: 86,
		key: 'greavard',
		name: ['Greavard', 'Greavard', 'Toutombe', 'Greavard', 'Greavard', 'Gruff', 'ボチ', '망망이', '墓仔狗', 'Greavard'],
		color: '#aabacb',
		ability: abilityData['curse'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/greavard.png',
			image: './src/assets/images/pokemon/normal/greavard-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 4000,
			scale: -1
		},
		power: {
			base: 16,
			scale: 2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'houndstone',
			level: 30,
		},
	},
	houndstone: {
		id: 86,
		key: 'houndstone',
		name: ['Houndstone', 'Houndstone', 'Tomberro', 'Houndstone', 'Houndstone', 'Friedwuff', 'ハカドッグ', '묘두기', '墓扬犬', 'Houndstone'],
		color: '#7c759f',
		ability: abilityData['curse'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/houndstone.png',
			image: './src/assets/images/pokemon/normal/houndstone-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3200,
			scale: -8
		},
		power: {
			base: 60,
			scale: 5.65,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
	},
	stakataka: {
		id: 87,
		key: 'stakataka',
		name: ['Stakataka', 'Stakataka', 'Ama-Ama', 'Stakataka', 'Stakataka', 'Muramura', 'ツンデツンデ', '차곡차곡', '垒磊石', 'Stakataka'],
		color: '#5fa8b5',
		ability: abilityData['autotomize'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/stakataka.png',
			image: './src/assets/images/pokemon/normal/stakataka-idle.png',
			frames: 12,
			hold: 15
		},
		speed: {
			base: 10000,
			scale: -15
		},
		power: {
			base: 200,
			scale: 53, //Changelog: 33->53
		},
		critical: {
			base: 50, //Changelog: 5->50
			scale: 0
		},
		range: {
			base: 200,
			scale: 1,
			inner: 180,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],	
	},
	luvdisc: {
		id: 88,
		key: 'luvdisc',
		name: ['Luvdisc', 'Luvdisc', 'Lovdisc', 'Luvdisc', 'Luvdisc', 'Liebiskus', 'ラブカス', '러브카스', '爱心鱼', 'Luvdisc'],
		color: '#fe8faf',
		ability: abilityData['heal'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/luvdisc.png',
			image: './src/assets/images/pokemon/normal/luvdisc-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 700, //Changelog: 710->700
			scale: -1 //Changelog: -0.9->-1
		},
		power: {
			base: 5,
			scale: 2.95, //Changelog: 3.28->2.95
		},
		critical: {
			base: 0, //Changelog: 3.3->0
			scale: 0
		},
		range: {
			base: 120, //Changelog: 120->140
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3], //Changelog: Removed the field tile, doesn't make sense and will act as a little nerf. Will also diff him from the others healing option.
	},
	chatot: {
		id: 89,
		key: 'chatot',
		name: ['Chatot', 'Chatot', 'Pijako', 'Chatot', 'Chatot', 'Plaudagei', 'ペラップ', '페라페', '聒噪鸟', 'Chatot'],
		color: '#dfb701',
		ability: abilityData['chatter'],
		projectileSound: 'chatot',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/chatot.png',
			image: './src/assets/images/pokemon/normal/chatot-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 4710,
			scale: -3
		},
		power: {
			base: 21,
			scale: 4.2,
		},
		critical: {
			base: 4.1,
			scale: 0
		},
		range: {
			base: 101,
			scale: 3.4,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	carvanha: {
		id: 90,
		key: 'carvanha',
		name: ['Carvanha', 'Carvanha', 'Carvanha', 'Carvanha', 'Carvanha', 'Kanivanha', 'キバニア', '샤프니아', '利牙鱼', 'Carvanha'],
		color: '#fe865f',
		ability: abilityData['speedBoost'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/carvanha.png',
			image: './src/assets/images/pokemon/normal/carvanha-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 5000,
			scale: -2 //Changelog: -1->-2
		},
		power: {
			base: 7,
			scale: 3,
		},
		critical: {
			base: 0,
			scale: 0.2
		},
		range: {
			base: 125,
			scale: 0.15,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
		evolution: {
			pokemon: 'sharpedo',
			level: 30,
		},
	},
	sharpedo: {
		id: 90,
		key: 'sharpedo',
		name: ['Sharpedo', 'Sharpedo', 'Sharpedo', 'Sharpedo', 'Sharpedo', 'Tohaido', 'サメハダー', '샤크니아', '巨牙鲨', 'Sharpedo'],
		color: '#6687ae',
		ability: abilityData['speedBoost'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sharpedo.png',
			image: './src/assets/images/pokemon/normal/sharpedo-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3700,
			scale: -2
		},
		power: {
			base: 50,
			scale: 11.5,
		},
		critical: {
			base: 0,
			scale: 0.4
		},
		range: {
			base: 170, 
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
		mega: ['megaSharpedo']
	},
	megaSharpedo: {
		id: 90,
		key: 'megaSharpedo',
		name: ['M-Sharpedo', 'M-Sharpedo', 'M-Sharpedo', 'M-Sharpedo', 'M-Sharpedo', 'M-Tohaido', 'メガサメハダー', '메가샤크니아', '超級巨牙鯊', 'M-Sharpedo'],
		color: '#e4c204',
		ability: abilityData['strongJaw'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaSharpedo.png',
			image: './src/assets/images/pokemon/normal/megaSharpedo-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3700,
			scale: -2
		},
		power: {
			base: 150,
			scale: 11.5,
		},
		critical: {
			base: 0,
			scale: 0.4
		},
		range: {
			base: 170, 
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
		base: 'sharpedo'
	},
	munna: {
		id: 91,
		key: 'munna',
		name: [
		  	"Munna",
		  	"Munna",
		  	"Munna",
		  	"Munna",
		  	"Munna",
		  	"Somniam",
		  	"ムンナ",
		  	"몽나",
		  	"食梦梦",
		  	"Munna"
		],
		color: '#f9d0d2',
		ability: abilityData['dreamEater'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/munna.png',
			image: './src/assets/images/pokemon/normal/munna-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 3800,
			scale: -8
		},
		power: {
			base: 16,
			scale: 1.2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 105,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'musharna',
			level: 40
		},	
	},
	musharna: {
		id: 91,
		key: 'musharna',
		name: [
		  	"Musharna",
		  	"Musharna",
		  	"Mushana",
		  	"Musharna",
		  	"Musharna",
		  	"Somnivora",
		  	"ムシャーナ",
		  	"몽얌나",
		  	"梦梦蚀",
		  	"Musharna"
		],
		color: '#8761b8',
		ability: abilityData['dreamEater'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['yellow4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/musharna.png',
			image: './src/assets/images/pokemon/normal/musharna-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 3000, 
			scale: -11
		},
		power: {
			base: 37, 
			scale: 3.28,
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 170, 
			scale: 0.2, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 4],
	},
	hoothoot: {
		id: 92,
		key: 'hoothoot',
		name: [
		  	"Hoothoot",
		  	"Hoothoot",
		  	"Hoothoot",
		  	"Hoothoot",
		  	"Hoothoot",
		  	"Hoothoot",
		  	"ホーホー",
		  	"부우부",
		  	"咕咕",
		  	"Hoothoot"
		],
		color: '#a75e1f',
		ability: abilityData['frisk'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/hoothoot.png',
			image: './src/assets/images/pokemon/normal/hoothoot-idle.png',
			frames: 4,
			hold: 12
		},
		speed: {
			base: 1870,
			scale: -4
		},
		power: {
			base: 10,
			scale: 2.5,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 180,
			scale: 0,
			inner: 100,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'noctowl',
			level: 20
		},	
	},
	noctowl: {
		id: 92,
		key: 'noctowl',
		name: [
		  	"Noctowl",
		  	"Noctowl",
		  	"Noarfang",
		  	"Noctowl",
		  	"Noctowl",
		  	"Noctuh",
		  	"ヨルノズク",
		  	"야부엉",
		  	"猫头夜鹰",
		  	"Noctowl"
		],
		color: '#be8f5f',
		ability: abilityData['frisk'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/noctowl.png',
			image: './src/assets/images/pokemon/normal/noctowl-idle.png',
			frames: 16,
			hold: 5
		},
		speed: {
			base: 1500,
			scale: -6.5
		},
		power: {
			base: 45,
			scale: 6.3,
		},
		critical: {
			base: 10,
			scale: 0
		},
		range: {
			base: 360,
			scale: 0,
			inner: 150,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	wingull: {
		id: 93,
		key: 'wingull',
		name: [
		  	"Wingull",
		  	"Wingull",
		  	"Goélise",
		  	"Wingull",
		  	"Wingull",
		  	"Wingull",
		  	"キャモメ",
		  	"갈모매",
		  	"长翅鸥",
		  	"Wingull"
		],
		color: '#7fcfff',
		ability: abilityData['drizzle'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/wingull.png',
			image: './src/assets/images/pokemon/normal/wingull-idle.png',
			frames: 18,
			hold: 4
		},
		speed: {
			base: 2800,
			scale: -2
		},
		power: {
			base: 12,
			scale: 2,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'pelipper',
			level: 25
		},	
	},
	pelipper: {
		id: 93,
		key: 'pelipper',
		name:  [
			"Pelipper",
			"Pelipper",
			"Bekipan",
			"Pelipper",
			"Pelipper",
			"Pelipper",
			"ペリッパー",
			"패리퍼",
			"大嘴鹈鹕",
			"Pelipper"
		],
		color: '#1e9ee7',
		ability: abilityData['drizzle'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/pelipper.png',
			image: './src/assets/images/pokemon/normal/pelipper-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 2450, 
			scale: -8
		},
		power: {
			base: 25, 
			scale: 6.7,
		},
		critical: {
			base: 5, 
			scale: 0
		},
		range: {
			base: 170, 
			scale: 0.2, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
	},
	archen: {
		id: 94,
		key: 'archen',
		name: [
		  	"Archen",
		  	"Archen",
		  	"Arkéapti",
		  	"Archen",
		  	"Archen",
		  	"Flapteryx",
		  	"アーケン",
		  	"아켄",
		  	"始祖小鸟",
		  	"Archen"
		],
		color: '#df524b',
		ability: abilityData['defeatist'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/archen.png',
			image: './src/assets/images/pokemon/normal/archen-idle.png',
			frames: 4,
			hold: 10
		},
		speed: {
			base: 2800,
			scale: -1
		},
		power: {
			base: 40,
			scale: 3.5,
		},
		critical: {
			base: 0,
			scale: 0.4
		},
		range: {
			base: 130,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'archeops',
			level: 37
		},	
	},
	archeops: {
		id: 94,
		key: 'archeops',
		name: [
		  	"Archeops",
		  	"Archeops",
		  	"Aéroptéryx",
		  	"Archeops",
		  	"Archeops",
		  	"Aeropteryx",
		  	"アーケオス",
		  	"아케오스",
		  	"始祖大鸟",
		  	"Archeops"
		],
		color: '#1bbebe',
		ability: abilityData['defeatist'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/archeops.png',
			image: './src/assets/images/pokemon/normal/archeops-idle.png',
			frames: 8,
			hold: 10
		},
		speed: {
			base: 2350,
			scale: -12.5
		},
		power: {
			base: 300, 
			scale: 18.4,
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 155, 
			scale: 0.3, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
	},
	inkay: {
		id: 95,
		key: 'inkay',
		name: [
		  	"Inkay",
		  	"Inkay",
		  	"Sepiatop",
		  	"Inkay",
		  	"Inkay",
		  	"Iscalar",
		  	"マーイーカ",
		  	"오케이징",
		  	"好啦鱿",
		  	"Inkay"
		],
		color: '#e98286',
		ability: abilityData['contrary'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/inkay.png',
			image: './src/assets/images/pokemon/normal/inkay-idle.png',
			frames: 7,
			hold: 4
		},
		speed: {
			base: 4000,
			scale: -5
		},
		power: {
			base: 15,
			scale: 2.1,
		},
		critical: {
			base: 6,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3],
		evolution: {
			pokemon: 'malamar',
			level: 30
		},	
	},
	malamar: {
		id: 95,
		key: 'malamar',
		name: [
		  	"Malamar",
		  	"Malamar",
		  	"Sepiatroce",
		  	"Malamar",
		  	"Malamar",
		  	"Calamanero",
		  	"カラマネロ",
		  	"칼라마네로",
		  	"乌贼王",
		  	"Malamar"
		],
		color: '#746080',
		ability: abilityData['contrary'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/malamar.png',
			image: './src/assets/images/pokemon/normal/malamar-idle.png',
			frames: 5,
			hold: 15
		},	
		speed: {
			base: 3400,
			scale: -12
		},
		power: {
			base: 46,
			scale: 6.2,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3],
	},
	vulpix: {
		id: 96,
		key: 'vulpix',
		name: [
		  	"Vulpix",
		  	"Vulpix",
		  	"Goupix",
		  	"Vulpix",
		  	"Vulpix",
		  	"Vulpix",
		  	"ロコン",
		  	"식스테일",
		  	"六尾",
		  	"Vulpix"
		],
		color: '#ff9442',
		ability: abilityData['burnSplash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/vulpix.png',
			image: './src/assets/images/pokemon/normal/vulpix-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1750,
			scale: 0
		},
		power: {
			base: 25,
			scale: 1.8,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 130,
			scale: 1,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'ninetales',
			level: 30
		},	
	},
	ninetales: {
		id: 96,
		key: 'ninetales',
		name: [
		  	"Ninetales",
		  	"Ninetales",
		  	"Feunard",
		  	"Ninetales",
		  	"Ninetales",
		  	"Vulnona",
		  	"キュウコン",
		  	"나인테일",
		  	"九尾",
		  	"Ninetales"
		],
		color: '#efe797',
		ability: abilityData['burnSplash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/ninetales.png',
			image: './src/assets/images/pokemon/normal/ninetales-idle.png',
			frames: 14,
			hold: 6
		},
		speed: {
			base: 1300,
			scale: -3
		},
		power: {
			base: 40,
			scale: 4.4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 150,
			scale: 2,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
	tarountula: {
		id: 97,
		key: 'tarountula',
		name: [
		  	"Tarountula",
		  	"Tarountula",
		  	"Tissenboule",
		  	"Tarountula",
		  	"Tarountula",
		  	"Tarundel",
		  	"タマンチュラ",
		  	"타랜툴라",
		  	"团珠蛛",
		  	"Tarountula"
		],
		color: '#bea706',
		ability: abilityData['stickyWeb'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/tarountula.png',
			image: './src/assets/images/pokemon/normal/tarountula-idle.png',
			frames: 7,
			hold: 4
		},
		speed: {
			base: 4500,
			scale: -2
		},
		power: {
			base: 8,
			scale: 2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 140,
			scale: 1.5,
			inner: 0,
		},
		rangeType: 'xShape',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'spidops',
			level: 15
		},	
	},
	spidops: {
		id: 97,
		key: 'spidops',
		name: [
		  	"Spidops",
		  	"Spidops",
		  	"Filentrappe",
		  	"Spidops",
		  	"Spidops",
		  	"Spinsidias",
		  	"ワナイダー",
		  	"트래피더",
		  	"操陷蛛",
		  	"Spidops"
		],
		color: '#90c04d',
		ability: abilityData['stickyWeb'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/spidops.png',
			image: './src/assets/images/pokemon/normal/spidops-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 4300,
			scale: -5
		},
		power: {
			base: 20,
			scale: 4.3,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 185,
			scale: 2.9,
			inner: 0,
		},
		rangeType: 'xShape',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
	},
	totodile: {
		id: 98,
		key: 'totodile',
		name: [
		  	"Totodile",
		  	"Totodile",
		  	"Kaiminus",
		  	"Totodile",
		  	"Totodile",
		  	"Karnimani",
		  	"ワニノコ",
		  	"리아코",
		  	"小锯鳄",
		  	"Totodile"
		],
		color: '#1e9ee7',
		ability: abilityData['torrent'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/totodile.png',
			image: './src/assets/images/pokemon/normal/totodile-idle.png',
			frames: 7,
			hold: 10
		},
		speed: {
			base: 2500,
			scale: -4
		},
		power: {
			base: 12,
			scale: 6,
		},
		critical: {
			base: 6,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'croconaw',
			level: 18,
		},	
	},
	croconaw: {
		id: 98,
		key: 'croconaw',
		name: [
		  	"Croconaw",
		  	"Croconaw",
		  	"Crocrodil",
		  	"Croconaw",
		  	"Croconaw",
		  	"Feuerkroko",
		  	"アリゲイツ",
		  	"엘리게이",
		  	"蓝鳄",
		  	"Croconaw"
		],
		color: '#deb700',
		ability: abilityData['torrent'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/croconaw.png',
			image: './src/assets/images/pokemon/normal/croconaw-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 1900,
			scale: -4
		},
		power: {
			base: 25,
			scale: 9.3,
		},
		critical: {
			base: 12,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'feraligatr',
			level: 30,
		},	
	},
	feraligatr: {
		id: 98,
		key: 'feraligatr',
		name: [
		  	"Feraligatr",
		  	"Feraligatr",
		  	"Aligatueur",
		  	"Feraligatr",
		  	"Feraligatr",
		  	"Impergator",
		  	"オーダイル",
		  	"장크로다일",
		  	"大力鳄",
		  	"Feraligatr"
		],
		color: '#1c7fc2',
		ability: abilityData['torrent'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/feraligatr.png',
			image: './src/assets/images/pokemon/normal/feraligatr-idle.png',
			frames: 6,
			hold: 10
		},
		speed: {
			base: 1500,
			scale: -4
		},
		power: {
			base: 100,
			scale: 14,
		},
		critical: {
			base: 20,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
	},
	fennekin: {
		id: 99,
		key: 'fennekin',
		name: [
		    "Fennekin",
		    "Fennekin",
		    "Feunnec",
		    "Fennekin",
		    "Fennekin",
		    "Fynx",
		    "フォッコ",
		    "푸호꼬",
		    "火狐狸",
		    "Fennekin"
		],
		color: '#ff764c',
		ability: abilityData['magician'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/fennekin.png',
			image: './src/assets/images/pokemon/normal/fennekin-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3800,
			scale: -9
		},
		power: {
			base: 20,
			scale: 3.2,
		},
		critical: {
			base: 5,
			scale: 0.1
		},
		range: {
			base: 120,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'braixen',
			level: 16,
		},	
	},
	braixen: {
		id: 99,
		key: 'braixen',
		name: [
		    "Braixen",
		    "Braixen",
		    "Roussil",
		    "Braixen",
		    "Braixen",
		    "Fynx",
		    "フォッコ",
		    "폭시",
		    "火狐狸",
		    "Braixen"
		],
		color: '#dea73b',
		ability: abilityData['magician'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/braixen.png',
			image: './src/assets/images/pokemon/normal/braixen-idle.png',
			frames: 14,
			hold: 8
		},
		speed: {
			base: 3500,
			scale: -12
		},
		power: {
			base: 40,
			scale: 7.2,
		},
		critical: {
			base: 10,
			scale: 0.2
		},
		range: {
			base: 130,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'delphox',
			level: 36,
		},	
	},
	delphox: {
		id: 99,
		key: 'delphox',
		name: [
		    "Delphox",
		    "Delphox",
		    "Goupelin",
		    "Delphox",
		    "Delphox",
		    "Fennexis",
		    "テールナー",
		    "테르나",
		    "炎兔儿",
		    "Delphox"
		],
		color: '#c73e40',
		ability: abilityData['magician'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/delphox.png',
			image: './src/assets/images/pokemon/normal/delphox-idle.png',
			frames: 4,
			hold: 10
		},
		speed: {
			base: 3000,
			scale: -20
		},
		power: {
			base: 80,
			scale: 14.2,
		},
		critical: {
			base: 15,
			scale: 0.35
		},
		range: {
			base: 140,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
	},
	turtwig: {
		id: 100,
		key: 'turtwig',
		name: [
		    "Turtwig",
		    "Turtwig",
		    "Tortipouss",
		    "Turtwig",
		    "Turtwig",
		    "Chelast",
		    "ナエトル",
		    "모부기",
		    "草苗龟",
		    "Turtwig"
		],
		color: '#7fde56',
		ability: abilityData['grassPlatform'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/turtwig.png',
			image: './src/assets/images/pokemon/normal/turtwig-idle.png',
			frames: 4,
			hold: 10
		},
		speed: {
			base: 3400,
			scale: -2 
		},
		power: {
			base: 12,
			scale: 1.8,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 115, 
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'grotle',
			level: 18,
		},	
	},
	grotle: {
		id: 100,
		key: 'grotle',
		name: [
		    "Grotle",
		    "Grotle",
		    "Boskara",
		    "Grotle",
		    "Grotle",
		    "Chelcarain",
		    "ハヤシガメ",
		    "대짱이",
		    "树林龟",
		    "Grotle"
		],
		color: '#67ae37',
		ability: abilityData['grassPlatform'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/grotle.png',
			image: './src/assets/images/pokemon/normal/grotle-idle.png',
			frames: 8,
			hold: 9
		},
		speed: {
			base: 3200,
			scale: -2 
		},
		power: {
			base: 15,
			scale: 2.5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 130, 
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'torterra',
			level: 32,
		},	
	},
	torterra: {
		id: 100,
		key: 'torterra',
		name: [
		    "Torterra",
		    "Torterra",
		    "Torterra",
		    "Torterra",
		    "Torterra",
		    "Chelterrar",
		    "ドダイトス",
		    "덩쿠리",
		    "土台龟",
		    "Torterra"
		],
		color: '#c69e5f',
		ability: abilityData['grassPlatform'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/torterra.png',
			image: './src/assets/images/pokemon/normal/torterra-idle.png',
			frames: 5,
			hold: 30
		},
		speed: {
			base: 2800,
			scale: -3
		},
		power: {
			base: 30,
			scale: 3.2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 155, 
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 2],
	},
	carbink: {
		id: 101,
		key: 'carbink',
		name: [
		  	"Carbink",
		  	"Carbink",
		  	"Strassie",
		  	"Carbink",
		  	"Carbink",
		  	"Rocara",
		  	"メレシー",
		  	"멜리시",
		  	"小碎鑽",
		  	"Carbink"
		],
		color: '#84a7c5',
		ability: abilityData['criticalAura'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/carbink.png',
			image: './src/assets/images/pokemon/normal/carbink-idle.png',
			frames: 6,
			hold: 10
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 0,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0.8,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'aura',
		costScale: 'mid',
		tiles: [1, 4],
	},
	gholdengo: {
		id: 102,
		key: 'gholdengo',
		name: [
		  	"Gholdengo",
		  	"Gholdengo",
		  	"Gromago",
		  	"Gholdengo",
		  	"Gholdengo",
		  	"Monetigo",
		  	"サーフゴー",
		  	"타부자고",
		  	"赛富豪",
		  	"Gholdengo"
		],
		color: '#efcf00',
		ability: abilityData['makeItRain'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/gholdengo.png',
			image: './src/assets/images/pokemon/normal/gholdengo-idle.png',
			imageWater: './src/assets/images/pokemon/normal/gholdengo-water-idle.png',
			frames: 7,
			framesWater: 4,
			hold: 10
		},
		speed: {
			base: 1500,
			scale: -5
		},
		power: {
			base: 50, 
			scale: 9.5,
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 140, 
			scale: 0.2, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3, 4],
	},
	missingNo: {
		id: 404,
		key: 'missingNo',
		name: [
		  	"MissingNo.",
		  	"MissingNo.",
		  	"MissingNo.",
		  	"MissingNo.",
		  	"MissingNo.",
		  	"MissingNo.",
		  	"MissingNo.",
		  	"MissingNo.",
		  	"MissingNo.",
		  	"MissingNo."
		],
		color: '#9fcf6f',
		ability: abilityData['invalidState'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/missingNo.png',
			image: './src/assets/images/pokemon/normal/missingNo-idle.png',
			frames: 9,
			hold: 10
		},
		speed: {
			base: 1000,
			scale: -9,
		},
		power: {
			base: 1, 
			scale: 1,
		},
		critical: {
			base: 0.1,
			scale: 0.1,
		},
		range: {
			base: 110,
			scale: 0, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 3, 4],
	},
	phione: {
		id: 103,
		key: 'phione',
		name: [
			"Phione",
			"Phione",
			"Phione",
			"Phione",
			"Phione",
			"Phione",
			"フィオネ",
			"피오네",
			"霏歐納",
			"Phione"
		],
		color: '#5cb0fa',
		ability: abilityData['takeHeart'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/phione.png',
			image: './src/assets/images/pokemon/normal/phione-idle.png',
			frames: 16,
			hold: 6
		},
		speed: {
			base: 2000,
			scale: -12
		},
		power: {
			base: 100,
			scale: 3.8,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0,
			inner: 75,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'high',
		tiles: [3],
	},
	manaphy: {
		id: 104,
		key: 'manaphy',
		name: [
			"Manaphy",
			"Manaphy",
			"Manaphy",
			"Manaphy",
			"Manaphy",
			"Manaphy",
			"マナフィ",
			"마나피",
			"瑪納霏",
			"Manaphy"
		],
		color: '#7fd7e7',
		ability: abilityData['tailGlow'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/manaphy.png',
			image: './src/assets/images/pokemon/normal/manaphy-idle.png',
			frames: 10,
			hold: 10
		},
		speed: {
			base: 2000,
			scale: -10
		},
		power: {
			base: 100,
			scale: 9,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 250,
			scale: 0,
			inner: 125,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3],	
	},
	nickit: {
		id: 105,
		key: 'nickit',
		name: ['Nickit', 'Nickit', 'Goupilou', 'Nickit', 'Nickit', 'Kleptifux', 'クスネ', '훔치고', '偷儿狐', 'Nickit'],
		color: '#bf6737',
		ability: abilityData['greed'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/nickit.png',
			image: './src/assets/images/pokemon/normal/nickit-idle.png',
			frames: 4,
			hold: 10
		},
		speed: {
			base: 2700,
			scale: -6
		},
		power: {
			base: 20,
			scale: 4,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 125,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'thievul',
			level: 18
		},	
	},
	thievul: {
		id: 105,
		key: 'thievul',
		name: ['Thievul', 'Thievul', 'Roublenard', 'Thievul', 'Thievul', 'Gaunux', 'フォクスライ', '폭슬라이', '狐大盗', 'Thievul'],
		color: '#a1512f',
		ability: abilityData['greed'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/thievul.png',
			image: './src/assets/images/pokemon/normal/thievul-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 2500,
			scale: -12
		},
		power: {
			base: 50,
			scale: 8.3,
		},
		critical: {
			base: 10,
			scale: 0.2
		},
		range: {
			base: 140,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],	
	},
	bulbasaur: {
		id: 106,
		key: 'bulbasaur',
		name: ['bulbasaur', 'bulbasaur', 'Bulbizarre', 'bulbasaur', 'bulbasaur', 'bisasam', 'フシギダネ', '이상해씨', '妙蛙種子', 'bulbasaur'],
		color: '#96d3c7',
		ability: abilityData['solarBeam'],
		projectileSound: 'beam1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/bulbasaur.png',
			image: './src/assets/images/pokemon/normal/bulbasaur-idle.png',
			frames: 3,
			hold: 15
		},
		speed: {
			base: 4000,
			scale: -1
		},
		power: {
			base: 13,
			scale: 2.5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'ivysaur',
			level: 16
		},	
	},
	ivysaur: {
		id: 106,
		key: 'ivysaur',
		name: ['ivysaur', 'ivysaur', 'Herbizarre', 'ivysaur', 'ivysaur', 'bisaknosp', 'フシギソウ', '이상해풀', '妙蛙草', 'ivysaur'],
		color: '#7e99b2',
		ability: abilityData['solarBeam'],
		projectileSound: 'beam1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/ivysaur.png',
			image: './src/assets/images/pokemon/normal/ivysaur-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 4000,
			scale: -4
		},
		power: {
			base: 25,
			scale: 4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'venusaur',
			level: 32
		},	
	},
	venusaur: {
		id: 106,
		key: 'venusaur',
		name: ['venusaur', 'venusaur', 'Florizarre', 'venusaur', 'venusaur', 'Bisaflor', 'フシギバナ', '이상해꽃', '妙蛙花', 'venusaur'],
		color: '#58ab28',
		ability: abilityData['solarBeam'],
		projectileSound: 'beam1',
		projectileSpeed: 7,
		projectile: projectileData['green2'],
		sprite: {
			base: './src/assets/images/pokemon/normal/venusaur.png',
			image: './src/assets/images/pokemon/normal/venusaur-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 4000,
			scale: -10
		},
		power: {
			base: 300,
			scale: 12,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],	
	},
	cyndaquil: {
		id: 107,
		key: 'cyndaquil',
		name: ['cyndaquil', 'cyndaquil', 'Héricendre', 'cyndaquil', 'cyndaquil', 'feurigel', 'ヒノアラシ', '브참견', '火球鼠', 'cyndaquil'],
		color: '#d4b474',
		ability: abilityData['flameWheel'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		orbital: 3,
		projectile: projectileData['red2'],
		sprite: {
			base: './src/assets/images/pokemon/normal/cyndaquil.png',
			image: './src/assets/images/pokemon/normal/cyndaquil-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 5,
			scale: 1.5,
		},
		critical: {
			base: 5, 
			scale: 0.1
		},
		range: {
			base: 80,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'orbital',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'quilava',
			level: 14
		},	
	},
	quilava: {
		id: 107,
		key: 'quilava',
		name: ['quilava', 'quilava', 'Feurisson', 'quilava', 'quilava', 'igelavar', 'マグマラシ', '마그마베', '火岩鼠', 'quilava'],
		color: '#53659b',
		ability: abilityData['flameWheel'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		orbital: 4,
		projectile: projectileData['red2'],
		sprite: {
			base: './src/assets/images/pokemon/normal/quilava.png',
			image: './src/assets/images/pokemon/normal/quilava-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 15,
			scale: 2.4,
		},
		critical: {
			base: 5, 
			scale: 0.1
		},
		range: {
			base: 80,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'orbital',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'typhlosion',
			level: 36
		},	
	},
	typhlosion: {
		id: 107,
		key: 'typhlosion',
		name: ['typhlosion', 'typhlosion', 'Typhlosion', 'typhlosion', 'typhlosion', 'tornupto', 'バクフーン', '블레이범', '火暴獸', 'typhlosion'],
		color: '#5f7aa7',
		ability: abilityData['flameWheel'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		orbital: 5,
		projectile: projectileData['red2'],
		sprite: {
			base: './src/assets/images/pokemon/normal/typhlosion.png',
			image: './src/assets/images/pokemon/normal/typhlosion-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 35,
			scale: 6.5,
		},
		critical: {
			base: 5, 
			scale: 0.1
		},
		range: {
			base: 80,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'orbital',
		costScale: 'mid',
		tiles: [1],	
	},
	mawile: {
		id: 108,
		key: 'mawile',
		name: ['Mawile', 'Mawile', 'Mysdibule', 'Mawile', 'Mawile', 'Flunkifer', 'クチート', '입치트', '大嘴娃', 'Mawile'],
		color: '#5e777f',
		ability: abilityData['hyperCutter'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/mawile.png',
			image: './src/assets/images/pokemon/normal/mawile-idle.png',
			frames: 13,
			hold: 8
		},
		speed: {
			base: 1600,
			scale: -8
		},
		power: {
			base: 20,
			scale: 9.8,
		},
		critical: {
			base: 15, 
			scale: 0.1
		},
		range: {
			base: 120,
			scale: 0.25,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		mega: ['megaMawile']	
	},
	megaMawile: {
		id: 108,
		key: 'megaMawile',
		name: [
			`M-Mawile`, // inglés
			`M-Mawile`, // español
			`M-Mysdibule`, // francés
			`M-Mawile`, // portugués
			`M-Mawile`, // italiano
			`M-Flunkifer`, // alemán
			`メガクチート`, // japonés
			`메가 입치트`, // coreano
			`超级大嘴娃`, // chino
			`M-Mawile` // polaco
		],
		color: '#f375a3',
		ability: abilityData['destructiveMaw'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaMawile.png',
			image: './src/assets/images/pokemon/normal/megaMawile-idle.png',
			frames: 13,
			hold: 8
		},
		speed: {
			base: 1600,
			scale: -9
		},
		power: {
			base: 30,
			scale: 11.7,
		},
		critical: {
			base: 25, 
			scale: 0.1
		},
		range: {
			base: 130,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		base: 'mawile'
	},
	charcadet: {
		id: 109,
		key: 'charcadet',
		name: ['Charcadet', 'Charcadet', 'Charbambin', 'Charcadet', 'Charcadet', 'Knarbon', 'カルボウ', '카르본', '炭小侍', 'Charcadet'],
		color: '#ff4d4d',
		ability: abilityData['splash'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/charcadet.png',
			image: './src/assets/images/pokemon/normal/charcadet-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1400,
			scale: 0
		},
		power: {
			base: 22,
			scale: 2.8,
		},
		critical: {
			base: 5,
			scale: 0.5
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'armarouge',
			level: 40
		},	
	},
	armarouge: {
		id: 109,
		key: 'armarouge',
		name: ['Armarouge', 'Armarouge', 'Carmadura', 'Armarouge', 'Armarouge', 'Crimanzo', 'グレンアルマ', '카르본소', '红莲铠骑', 'Armarouge'],
		color: '#ff4d4d',
		ability: abilityData['armorCannon'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/armarouge.png',
			image: './src/assets/images/pokemon/normal/armarouge-idle.png',
			frames: 15,
			hold: 10
		},
		speed: {
			base: 4100,
			scale: -10
		},
		power: {
			base: 200,
			scale: 12,
		},
		critical: {
			base: 15,
			scale: 0
		},
		range: {
			base: 190,
			scale: 0.5,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		form: true
	},
	ceruledge: {
		id: 109,
		key: 'ceruledge',
		name: ['Ceruledge', 'Ceruledge', 'Malvalame', 'Ceruledge', 'Ceruledge', 'Azugladis', 'ソウブレイズ', '파라블레이즈', '苍炎刃鬼', 'Ceruledge'],
		color: '#7a4dff',
		ability: abilityData['bitterBlade'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/ceruledge.png',
			image: './src/assets/images/pokemon/normal/ceruledge-idle.png',
			frames: 15,
			hold: 10
		},
		speed: {
			base: 950,
			scale: -4
		},
		power: {
			base: 100,
			scale: 0.85,
		},
		critical: {
			base: 30, 
			scale: 0.15
		},
		range: {
			base: 135,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		form: true
	},
	mudkip: {
		id: 110,
		key: 'mudkip',
		name: ['Mudkip', 'Mudkip', 'Gobou', 'Mudkip', 'Mudkip', 'Hydropi', 'ミズゴロウ', '물짱이', '水跃鱼', 'Mudkip'],
		color: '#4db2ff',
		ability: abilityData['slow'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/mudkip.png',
			image: './src/assets/images/pokemon/normal/mudkip-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 3000,
			scale: -1
		},
		power: {
			base: 8,
			scale: 1.2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 3],	
		evolution: {
			pokemon: 'marshtomp',
			level: 16
		},	
	},
	marshtomp: {
		id: 110,
		key: 'marshtomp',
		name: ['Marshtomp', 'Marshtomp', 'Flobio', 'Marshtomp', 'Marshtomp', 'Moorabbel', 'ヌマクロー', '늪짱이', '沼跃鱼', 'Marshtomp'],
		color: '#5e94b3',
		ability: abilityData['slow'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/marshtomp.png',
			image: './src/assets/images/pokemon/normal/marshtomp-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2800,
			scale: -2
		},
		power: {
			base: 10,
			scale: 1.4,
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 3],	
		evolution: {
			pokemon: 'swampert',
			level: 36
		},	
	},
	swampert: {
		id: 110,
		key: 'swampert',
		name: ['Swampert', 'Swampert', 'Laggron', 'Swampert', 'Swampert', 'Sumpex', 'ラグラージ', '대짱이', '巨沼怪', 'Swampert'],
		color: '#4468a3',
		ability: abilityData['slow'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/swampert.png',
			image: './src/assets/images/pokemon/normal/swampert-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 2600,
			scale: -4
		},
		power: {
			base: 30,
			scale: 1.7,
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 3],	
	},
	patrat: {
		id: 111,
		key: 'patrat',
		name: ['patrat', 'patrat', 'Ratentif', 'patrat', 'patrat', 'Nagelotz', 'ミネズミ', '보르쥐', '探探鼠', 'patrat'],
		color: '#ab783e',
		ability: abilityData['illuminate'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/patrat.png',
			image: './src/assets/images/pokemon/normal/patrat-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 0,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'aura',
		costScale: 'low',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'watchog',
			level: 20
		},	
	},
	watchog: {
		id: 111,
		key: 'watchog',
		name: ['watchog', 'watchog', 'Miradar', 'watchog', 'watchog', 'Kukmarda', 'ミルホッグ', '보르그', '步哨鼠', 'watchog'],
		color: '#9e564c',
		ability: abilityData['illuminate'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/watchog.png',
			image: './src/assets/images/pokemon/normal/watchog-idle.png',
			frames: 6,
			hold: 25
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 0,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'aura',
		costScale: 'low',
		tiles: [1, 2, 4],	
	},
	drifloon: {
		id: 112,
		key: 'drifloon',
		name: ['drifloon', 'drifloon', 'Baudrive', 'drifloon', 'drifloon', 'driftlon', 'フワンテ', '흔들풍손', '飘飘球', 'drifloon'],
		color: '#a680ba',
		ability: abilityData['unburden'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/drifloon.png',
			image: './src/assets/images/pokemon/normal/drifloon-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 1700,
			scale: -3
		},
		power: {
			base: 16,
			scale: 4.1,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 145,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2, 3, 4], 
		evolution: {
			pokemon: 'drifblim',
			level: 28
		},	
	},
	drifblim: {
		id: 112,
		key: 'drifblim',
		name: ['drifblim', 'drifblim', 'Grodrive', 'drifblim', 'drifblim', 'drifzepeli', 'フワライド', '둥실라이드', '随风球', 'drifblim'],
		color: '#8c60a8',
		ability: abilityData['unburden'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/drifblim.png',
			image: './src/assets/images/pokemon/normal/drifblim-idle.png',
			frames: 12,
			hold: 15
		},
		speed: {
			base: 1550,
			scale: -4
		},
		power: {
			base: 50,
			scale: 17.5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 180,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 3, 4], 
	},
	snivy: {
		id: 113,
		key: 'snivy',
		name: ['Snivy', 'Snivy', 'Vipélierre', 'Snivy', 'Snivy', 'Serpifeu', 'ツタージャ', '주리비얀', '藤藤蛇', 'Snivy'],
		color: '#9fcf6f',
		ability: abilityData['contrary'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/snivy.png',
			image: './src/assets/images/pokemon/normal/snivy-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1500,
			scale: -1
		},
		power: {
			base: 18,
			scale: 2,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],	
		evolution: {
			pokemon: 'servine',
			level: 17
		},	
	},
	servine: {
		id: 113,
		key: 'servine',
		name: ['Servine', 'Servine', 'Lianaja', 'Servine', 'Servine', 'Efoserp', 'ジャノビー', '샤비', '青藤蛇', 'Servine'],
		color: '#7cbe49',
		ability: abilityData['contrary'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/servine.png',
			image: './src/assets/images/pokemon/normal/servine-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1400,
			scale: -2
		},
		power: {
			base: 25,
			scale: 4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 125,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],	
		evolution: {
			pokemon: 'serperior',
			level: 36
		},	
	},
	serperior: {
		id: 113,
		key: 'serperior',
		name: ['Serperior', 'Serperior', 'Majaspic', 'Serperior', 'Serperior', 'Serpiroyal', 'ジャローダ', '샤로다', '君主蛇', 'Serperior'],
		color: '#a0cc70',
		ability: abilityData['contrary'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/serperior.png',
			image: './src/assets/images/pokemon/normal/serperior-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 1350,
			scale: -3
		},
		power: {
			base: 55,
			scale: 7.7,
		},
		critical: {
			base: 15,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],	
	},
	dondozo: {
		id: 114,
		key: 'dondozo',
		name: ['Dondozo', 'Dondozo', 'Oyacata', 'Dondozo', 'Dondozo', 'Heerashai', 'ヘイラッシャ', '어써러셔', '吃吼霸', 'Dondozo'],
		color: '#5cb7cb',
		ability: abilityData['mount'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/dondozo.png',
			image: './src/assets/images/pokemon/normal/dondozo-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 7650,
			scale: -20
		},
		power: {
			base: 50,
			scale: 17,
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 135,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [3],	
	},
	tatsugiri: {
		id: 115,
		key: 'tatsugiri',
		name: ['Tatsugiri', 'Tatsugiri', 'Nigirigon', 'Tatsugiri', 'Tatsugiri', 'Nigiragi', 'シャリタツ', '싸리용', '米立龙', 'Tatsugiri'],
		color: '#d98255',
		ability: abilityData['commander'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/tatsugiri.png',
			image: './src/assets/images/pokemon/normal/tatsugiri-idle.png',
			frames: 3,
			hold: 12
		},
		speed: {
			base: 1500,
			scale: -10
		},
		power: {
			base: 10,
			scale: 0.9,
		},
		critical: {
			base: 5, 
			scale: 0.1
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],	
		mega: ['megaTatsugiri']
	},
	megaTatsugiri: {
		id: 115,
		key: 'megaTatsugiri',
		name: [
			`M-Tatsugiri`, // inglés
			`M-Tatsugiri`, // español
			`M-Nigirigon`, // francés
			`M-Tatsugiri`, // portugués
			`M-Tatsugiri`, // italiano
			`M-Nigiragi`, // alemán
			`メガシャリタツ`, // japonés
			`메가 싸리용`, // coreano
			`超级米立龙`, // chino
			`M-Tatsugiri` // polaco
		],
		color: '#fb0664',
		ability: abilityData['supremeCommanders'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaTatsugiri.png',
			image: './src/assets/images/pokemon/normal/megaTatsugiri-idle.png',
			frames: 8,
			hold: 12
		},
		speed: {
			base: 1250,
			scale: -8
		},
		power: {
			base: 50,
			scale: 2.5,
		},
		critical: {
			base: 5, 
			scale: 0.2
		},
		range: {
			base: 135,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
		base: 'tatsugiri'	
	},
	plusle: {
		id: 116,
		key: 'plusle',
		name: ['Plusle', 'Plusle', 'Posipi', 'Plusle', 'Plusle', 'Plusle', 'プラスル', '플러스ル', '负电拍拍', 'Plusle'],
		color: '#ff6b4d',
		ability: abilityData['plus'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/plusle.png',
			image: './src/assets/images/pokemon/normal/plusle-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -15
		},
		power: {
			base: 15,
			scale: 4.5,
		},
		critical: {
			base: 5, 
			scale: 0
		},
		range: {
			base: 110,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'low',
		tiles: [1]	
	},
	minun: {
		id: 117,
		key: 'minun',
		name: ['Minun', 'Minun', 'Négapi', 'Minun', 'Minun', 'Minun', 'マイナン', '마이농', '正电拍拍', 'Minun'],
		color: '#4db2ff',
		ability: abilityData['minus'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/minun.png',
			image: './src/assets/images/pokemon/normal/minun-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -15
		},
		power: {
			base: 15,
			scale: 4.5,
		},
		critical: {
			base: 5, 
			scale: 0
		},
		range: {
			base: 110,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'horizontalLine',
		attackType: 'single',
		costScale: 'low',
		tiles: [1],	
	},
	hippopotas: {
		id: 118,
		key: 'hippopotas',
		name: ['Hippopotas', 'Hippopotas', 'Hippopotas', 'Hippopotas', 'Hippopotas', 'Hippopotas', 'ヒポポタス', '히포포타스', '沙河马', 'Hippopotas'],
		color: '#dfcf77',
		ability: abilityData['sandStream'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['yellow1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/hippopotas.png',
			image: './src/assets/images/pokemon/normal/hippopotas-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 3000,
			scale: -4
		},
		power: {
			base: 10,
			scale: 2, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 120, 
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'hippowdon',
			level: 34
		},	
	},
	hippowdon: {
		id: 118,
		key: 'hippowdon',
		name: ['Hippowdon', 'Hippowdon', 'Hippodocus', 'Hippowdon', 'Hippowdon', 'Hippoterus', 'カバルドン', '하마돈', '河马兽', 'Hippowdon'],
		color: '#a39363',
		ability: abilityData['sandStream'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/hippowdon.png',
			image: './src/assets/images/pokemon/normal/hippowdon-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 2850,
			scale: -5
		},
		power: {
			base: 25,
			scale: 3, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 140,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 4],
	},
	tepig: {
		id: 119,
		key: 'tepig',
		name: ['Tepig', 'Tepig', 'Gruikui', 'Tepig', 'Tepig', 'Floink', 'ポカブ', '뚜꾸리', '暖暖猪', 'Tepig'],
		color: '#e48222',
		ability: abilityData['heatCrash'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/tepig.png',
			image: './src/assets/images/pokemon/normal/tepig-idle.png',
			frames: 6,
			hold: 10
		},
		speed: {
			base: 2300,
			scale: -2
		},
		power: {
			base: 14,
			scale: 4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 115,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],	
		evolution: {
			pokemon: 'pignite',
			level: 17
		},	
	},
	pignite: {
		id: 119,
		key: 'pignite',
		name: ['Pignite', 'Pignite', 'Grotichon', 'Pignite', 'Pignite', 'Ferkokel', 'チャオブー', '차오꿀', '炒炒猪', 'Pignite'],
		color: '#ff6b4d',
		ability: abilityData['heatCrash'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/pignite.png',
			image: './src/assets/images/pokemon/normal/pignite-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -2
		},
		power: {
			base: 40,
			scale: 10,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 125,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],	
		evolution: {
			pokemon: 'emboar',
			level: 36
		},	
	},
	emboar: {
		id: 119,
		key: 'emboar',
		name: ['Emboar', 'Emboar', 'Roitiflam', 'Emboar', 'Emboar', 'Flambirex', 'エンブオー', '염무왕', '炎武王', 'Emboar'],
		color: '#e7ac06',
		ability: abilityData['heatCrash'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/emboar.png',
			image: './src/assets/images/pokemon/normal/emboar-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 1550,
			scale: -2
		},
		power: {
			base: 105,
			scale: 17.7,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 135,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],	
	},
	houndour: {
		id: 120,
		key: 'houndour',
		name: ['Houndour', 'Houndour', 'Malosse', 'Houndour', 'Houndour', 'Hunduster', 'デルビル', '데빌로', '戴鲁比', 'Houndour'],
		color: '#536f77',
		ability: abilityData['flashFire'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/houndour.png',
			image: './src/assets/images/pokemon/normal/houndour-idle.png',
			frames: 14,
			hold: 10
		},
		speed: {
			base: 1300,
			scale: -1
		},
		power: {
			base: 12,
			scale: 2.8,
		},
		critical: {
			base: 5,
			scale: 0.1
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'houndoom',
			level: 24
		},	
	},
	houndoom: {
		id: 120,
		key: 'houndoom',
		name: ['Houndoom', 'Houndoom', 'Démolosse', 'Houndoom', 'Houndoom', 'Hundemon', 'ヘルガー', '헬가', '黑鲁加', 'Houndoom'],
		color: '#647c84',
		ability: abilityData['flashFire'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/houndoom.png',
			image: './src/assets/images/pokemon/normal/houndoom-idle.png',
			frames: 14,
			hold: 10
		},
		speed: {
			base: 1050,
			scale: -1
		},
		power: {
			base: 60,
			scale: 6,
		},
		critical: {
			base: 20, 
			scale: 0.2
		},
		range: {
			base: 120,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		mega: ['megaHoundoom']
	},
	megaHoundoom: {
		id: 120,
		key: 'megaHoundoom',
		name: [
			`M-Houndoom`, // inglés
			`M-Houndoom`, // español
			`M-Démolosse`, // francés
			`M-Houndoom`, // portugués
			`M-Houndoom`, // italiano
			`M-Hundemon`, // alemán
			`メガヘルガー`, // japonés
			`메가 헬가`, // coreano
			`超级黑鲁加`, // chino
			`M-Houndoom` // polaco
		],
		color: '#d06132',
		ability: abilityData['solarPower'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaHoundoom.png',
			image: './src/assets/images/pokemon/normal/megaHoundoom-idle.png',
			frames: 14,
			hold: 10
		},
		speed: {
			base: 1150,
			scale: -3
		},
		power: {
			base: 100,
			scale: 8,
		},
		critical: {
			base: 25, 
			scale: 0.3
		},
		range: {
			base: 120,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		base: 'houndoom'
	},
	squirtle: {
		id: 121,
		key: 'squirtle',
		name: ['squirtle', 'squirtle', 'Carapuce', 'squirtle', 'squirtle', 'schiggy', 'ゼニガメ', '꼬부기', '傑尼龜', 'squirtle'],
		color: '#89bdc6',
		ability: abilityData['hydroCannon'], 
		projectileSound: 'beam2',
		projectileSpeed: 7,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/squirtle.png',
			image: './src/assets/images/pokemon/normal/squirtle-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 12000,
			scale: -5
		},
		power: {
			base: 10,
			scale: 1.5,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 200,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'wartortle',
			level: 16
		},	
	},
	wartortle: {
		id: 121,
		key: 'wartortle',
		name: ['wartortle', 'wartortle', 'Carabaffe', 'wartortle', 'wartortle', 'schillok', 'カメール', '어니부기', '卡咪龜', 'wartortle'],
		color: '#7a9ecb',
		ability: abilityData['hydroCannon'],
		projectileSound: 'beam2',
		projectileSpeed: 7,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/wartortle.png',
			image: './src/assets/images/pokemon/normal/wartortle-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 10000,
			scale: -8
		},
		power: {
			base: 20,
			scale: 2.4,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 250,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'blastoise',
			level: 36
		},	
	},
	blastoise: {
		id: 121,
		key: 'blastoise',
		name: ['blastoise', 'blastoise', 'Tortank', 'blastoise', 'blastoise', 'turtok', 'カメックス', '거북왕', '水箭龜', 'blastoise'],
		color: '#51649a',
		ability: abilityData['hydroCannon'],
		projectileSound: 'beam2',
		projectileSpeed: 7,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/blastoise.png',
			image: './src/assets/images/pokemon/normal/blastoise-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 8000,
			scale: -12
		},
		power: {
			base: 65,
			scale: 3.55,
		},
		critical: {
			base: 15,
			scale: 0.2
		},
		range: {
			base: 300,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],	
	},
	tentacool: {
		id: 122,
		key: 'tentacool',
		name: ['tentacool', 'tentacool', 'Tentacool', 'tentacool', 'tentacool', 'tentacha', 'メノクラゲ', '왕눈해', '瑪瑙水母', 'tentacool'],
		color: '#4880b8',
		ability: abilityData['poison'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/tentacool.png',
			image: './src/assets/images/pokemon/normal/tentacool-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -2
		},
		power: {
			base: 20,
			scale: 2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [3],
		evolution: {
			pokemon: 'tentacruel',
			level: 30
		},	
	},
	tentacruel: {
		id: 122,
		key: 'tentacruel',
		name: ['tentacruel', 'tentacruel', 'Tentacruel', 'tentacruel', 'tentacruel', 'tentoxxa', 'ドククラゲ', '독파리', '毒刺水母', 'tentacruel'],
		color: '#d65640',
		ability: abilityData['poison'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/tentacruel.png',
			image: './src/assets/images/pokemon/normal/tentacruel-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -4
		},
		power: {
			base: 69,
			scale: 8.2, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 145,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [3],
	},
	snover: {
		id: 123,
		key: 'snover',
		name: ['snover', 'snover', 'Blizzi', 'snover', 'snover', 'shnebedeck', 'ユキカブリ', '눈쓰개', '雪笠怪', 'snover'],
		color: '#60a484',
		ability: abilityData['snowWarning'],
		projectileSound: 'area1',
		projectileSpeed: 5,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/snover.png',
			image: './src/assets/images/pokemon/normal/snover-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 3350,
			scale: -2
		},
		power: {
			base: 12,
			scale: 3, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 110, 
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 2, 4], 
		evolution: {
			pokemon: 'abomasnow',
			level: 40
		},	
	},
	abomasnow: {
		id: 123,
		key: 'abomasnow',
		name: ['abomasnow', 'abomasnow', 'Blizzaroi', 'abomasnow', 'abomasnow', 'rexblisar', 'ユキノオー', '눈설왕', '暴雪王', 'abomasnow'],
		color: '#4d8a7c',
		ability: abilityData['snowWarning'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/abomasnow.png',
			image: './src/assets/images/pokemon/normal/abomasnow-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 3000,
			scale: -4 
		},
		power: {
			base: 90,
			scale: 4, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 155,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 2, 4], 
		//mega: ['megaAbomasnow']
	},
	nincada: {
		id: 124,
		key: 'nincada',
		name: ['nincada', 'nincada', 'Ningale', 'nincada', 'nincada', 'nincada', 'ツチニン', '토치닌', '土居忍士', 'nincada'],
		color: '#467f31',
		ability: abilityData['speedBoost'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/nincada.png',
			image: './src/assets/images/pokemon/normal/nincada-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 3500,
			scale: -1
		},
		power: {
			base: 15,
			scale: 2,
		},
		critical: {
			base: 1,
			scale: 0.1
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'ninjask', 
			level: 20
		},	
	},
	ninjask: {
		id: 124,
		key: 'ninjask',
		name: ['ninjask', 'ninjask', 'Ninjask', 'ninjask', 'ninjask', 'ninjask', 'テッカニン', '아이스크', '铁面忍者', 'ninjask'],
		color: '#cd9044',
		ability: abilityData['speedBoost'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/ninjask.png',
			image: './src/assets/images/pokemon/normal/ninjask-idle.png',
			frames: 4,
			hold: 10
		},
		speed: {
			base: 3400,
			scale: -2
		},
		power: {
			base: 35,
			scale: 4,
		},
		critical: {
			base: 15,
			scale: 0.5
		},
		range: {
			base: 130,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2, 4],
	},
	shedinja: {
		id: 125,
		key: 'shedinja',
		name: ['shedinja', 'shedinja', 'Munja', 'shedinja', 'shedinja', 'ninjatom', 'ヌケニン', '껍질몬', '脱壳忍者', 'shedinja'],
		color: '#9e8e6d',
		ability: abilityData['curse'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/shedinja.png',
			image: './src/assets/images/pokemon/normal/shedinja-idle.png',
			frames: 12,
			hold: 12
		},
		speed: {
			base: 1900,
			scale: -3
		},
		power: {
			base: 40,
			scale: 2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 160,
			scale: 0.4,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2, 4],
	},
	pineco: {
	    id: 126,
	    key: 'pineco',
	    name: ['Pineco', 'Pineco', 'Pomdepik', 'Pineco', 'Pineco', 'Tannza', 'クヌギダマ', '피콘', '榛果球', 'Pineco'],
	    color: '#839276',
	    ability: abilityData['spikes'], 
	    projectileSound: 'area1',
	    projectileSpeed: 7,
	    projectile: projectileData['green1'],
	    sprite: {
	        base: './src/assets/images/pokemon/normal/pineco.png',
	        image: './src/assets/images/pokemon/normal/pineco-idle.png',
	        frames: 2,
	        hold: 15
	    },
	    speed: {
	        base: 10500,
	        scale: -5
	    },
	    power: {
	        base: 15,
	        scale: 1, 
	    },
	    critical: {
	        base: 0, 
	        scale: 0
	    },
	    range: {
	        base: 120, 
	        scale: 0.1,
	        inner: 0,
	    },
	    rangeType: 'circle',
	    attackType: 'area',
	    costScale: 'mid',
	    tiles: [1, 2, 4],
	    evolution: {
	        pokemon: 'forretress',
	        level: 31,
	    },	
	},
	forretress: {
	    id: 126,
	    key: 'forretress',
	    name: ['Forretress', 'Forretress', 'Foretress', 'Forretress', 'Forretress', 'Forstellka', 'フォレトス', '쏘콘', '佛烈托斯', 'Forretress'],
	    color: '#a39294',
	    ability: abilityData['spikes'],
	    projectileSound: 'area1',
	    projectileSpeed: 7,
	    projectile: projectileData['green1'],
	    sprite: {
	        base: './src/assets/images/pokemon/normal/forretress.png',
	        image: './src/assets/images/pokemon/normal/forretress-idle.png',
	        frames: 4,
	        hold: 15
	    },
	   speed: {
	        base: 9500,
	        scale: -10
	    },
	    power: {
	        base: 50,
	        scale: 1.7, 
	    },
	    critical: {
	        base: 0, 
	        scale: 0
	    },
	    range: {
	        base: 130,
	        scale: 0.2,
	        inner: 0,
	    },
	    rangeType: 'circle',
	    attackType: 'area',
	    costScale: 'mid',
	    tiles: [1, 2, 4],
	},
	chespin: {
	    id: 127,
	    key: 'chespin',
	    name: ['Chespin', 'Chespin', 'Marrisson', 'Chespin', 'Chespin', 'Igamaro', 'ハリマロン', '도치마론', '哈力栗', 'Chespin'],
	    color: '#76a048',
	    ability: abilityData['spikyShield'], 
	    projectileSound: 'projectile5',
	    projectileSpeed: 7,
	    projectile: projectileData['green1'],
	    sprite: {
	        base: './src/assets/images/pokemon/normal/chespin.png',
	        image: './src/assets/images/pokemon/normal/chespin-idle.png',
	        frames: 6,
	        hold: 15
	    },
	    speed: {
	        base: 2250,
	        scale: -4.5
	    },
	    power: {
	        base: 10,
	        scale: 1.5, 
	    },
	    critical: {
	        base: 0, 
	        scale: 0
	    },
	    range: {
	        base: 110, 
	        scale: 0.1,
	        inner: 0,
	    },
	    rangeType: 'circle',
	    attackType: 'single',
	    costScale: 'mid',
	    tiles: [1, 2],
	    evolution: {
	        pokemon: 'quilladin',
	        level: 16,
	    },	
	},
	quilladin: {
		id: 127,
		key: 'quilladin',
		name: ['Quilladin', 'Quilladin', 'Boguérisse', 'Quilladin', 'Quilladin', 'Igastarnish', 'ハリボーグ', '도치보구', '胖胖哈力', 'Quilladin'],
		color: '#9de62b',
		ability: abilityData['spikyShield'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/quilladin.png',
			image: './src/assets/images/pokemon/normal/quilladin-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2100,
			scale: -4.8 
		},
		power: {
			base: 25,
			scale: 3.2, 
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'chesnaught',
			level: 36,
		},	
	},
	chesnaught: {
		id: 127,
		key: 'chesnaught',
		name: ['Chesnaught', 'Chesnaught', 'Blindépique', 'Chesnaught', 'Chesnaught', 'Brigaron', 'ブリガロン', '브리그론', '布里卡隆', 'Chesnaught'],
		color: '#c4b484',
		ability: abilityData['spikyShield'], 
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/chesnaught.png',
			image: './src/assets/images/pokemon/normal/chesnaught-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 2050,
			scale: -5.5 
		},
		power: {
			base: 60,
			scale: 6.3, 
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 160,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
	dewpider: {
		id: 128,
		key: 'dewpider',
		name: ['Dewpider', 'Dewpider', 'Araqua', 'Dewpider', 'Dewpider', 'Araqua', 'シズクモ', '물거미', '滴蛛', 'Dewpider'],
		color: '#62939b',
		ability: abilityData['waterBubble'], 
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		orbital: 5,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/dewpider.png',
			image: './src/assets/images/pokemon/normal/dewpider-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 8,
			scale: 1, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 95,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'orbital',
		costScale: 'mid',
		tiles: [1, 2, 3],
		evolution: {
			pokemon: 'araquanid',
			level: 22,
		},	
	},
	araquanid: {
		id: 128,
		key: 'araquanid',
		name: ['Araquanid', 'Araquanid', 'Tarenbulle', 'Araquanid', 'Araquanid', 'Aranestro', 'オニシズクモ', '깨비물거미', '滴蛛霸', 'Araquanid'],
		color: '#51cbf2',
		ability: abilityData['waterBubble'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		orbital: 8,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/araquanid.png',
			image: './src/assets/images/pokemon/normal/araquanid-idle.png',
			frames: 10,
			hold: 15
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 50,
			scale: 1.3, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 95,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'orbital',
		costScale: 'mid',
		tiles: [1, 2, 3],
	},
	capsakid: {
		id: 129,
		key: 'capsakid',
		name: ['Capsakid', 'Capsakid', 'Pimito', 'Capsakid', 'Capsakid', 'Chilingel', 'カプサイジ', '캡싸이', '红豆鹿', 'Capsakid'],
		color: '#84ac44',
		ability: abilityData['burn'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/capsakid.png',
			image: './src/assets/images/pokemon/normal/capsakid-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1400,
			scale: -2
		},
		power: {
			base: 15,
			scale: 2.8,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'scovillain',
			level: 30,
		},	
	},
	scovillain: {
		id: 129,
		key: 'scovillain',
		name: ['Scovillain', 'Scovillain', 'Scovilain', 'Scovillain', 'Scovillain', 'Halupenjo', 'スコヴィラン', '스코빌런', '狠辣椒', 'Scovillain'],
		color: '#fd6138',
		ability: abilityData['burnDoubleShot'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/scovillain.png',
			image: './src/assets/images/pokemon/normal/scovillain-idle.png',
			frames: 10,
			hold: 15
		},
		speed: {
			base: 1400,
			scale: -5
		},
		power: {
			base: 60,
			scale: 6.4, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 130,
			scale: 0.25,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		mega: ['megaScovillain']
	},
	megaScovillain: {
		id: 129,
		key: 'megaScovillain',
		name: [
			`M-Scovillain`, // inglés
			`M-Scovillain`, // español
			`M-Scovilain`, // francés
			`M-Scovillain`, // portugués
			`M-Scovillain`, // italiano
			`M-Halupenjo`, // alemán
			`メガスコヴィラン`, // japonés
			`메가 스코빌런`, // coreano
			`超级狠辣椒`, // chino
			`M-Scovillain` // polaco
		],
		color: '#e75433',
		ability: abilityData['spicySpray'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaScovillain.png',
			image: './src/assets/images/pokemon/normal/megaScovillain-idle.png',
			frames: 2,
			hold: 14
		},
		speed: {
			base: 1250,
			scale: -5
		},
		power: {
			base: 60,
			scale: 6.4, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 130,
			scale: 0.25,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		base: 'scovillain'
	},
	budew: {
		id: 130,
		key: 'budew',
		name: ['Budew', 'Budew', 'Rozbouton', 'Budew', 'Budew', 'Knospi', 'スボミー', '꼬몽울', '含羞苞', 'Budew'],
		color: '#46a048',
		ability: abilityData['technician'], 
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/budew.png',
			image: './src/assets/images/pokemon/normal/budew-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 1800,
			scale: -1
		},
		power: {
			base: 10,
			scale: 2, 
		},
		critical: {
			base: 5, 
			scale: 0.1
		},
		range: {
			base: 120,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'roselia',
			level: 20, 
		},	
	},
	roselia: {
		id: 130,
		key: 'roselia',
		name: ['Roselia', 'Roselia', 'Rosélia', 'Roselia', 'Roselia', 'Roselia', 'ロゼリア', '로젤리아', '毒蔷薇', 'Roselia'],
		color: '#7184d9',
		ability: abilityData['technician'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/roselia.png',
			image: './src/assets/images/pokemon/normal/roselia-idle.png',
			frames: 9,
			hold: 15
		},
		speed: {
			base: 1700,
			scale: -2
		},
		power: {
			base: 45,
			scale: 6.5, 
		},
		critical: {
			base: 10, 
			scale: 0.2
		},
		range: {
			base: 140,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'roserade',
			level: 36, 
		},	
	},
	roserade: {
		id: 130,
		key: 'roserade',
		name: ['Roserade', 'Roserade', 'Roserade', 'Roserade', 'Roserade', 'Roserade', 'ロズレイド', '로즈레이드', '罗丝雷朵', 'Roserade'],
		color: '#c62f06',
		ability: abilityData['technician'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/roserade.png',
			image: './src/assets/images/pokemon/normal/roserade-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1400,
			scale: -2
		},
		power: {
			base: 70,
			scale: 12.3, 
		},
		critical: {
			base: 20, 
			scale: 0.2
		},
		range: {
			base: 155,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
	sewaddle: {
		id: 131,
		key: 'sewaddle',
		name: ['Sewaddle', 'Sewaddle', 'Larveyette', 'Sewaddle', 'Sewaddle', 'Strawickl', 'クルミル', '두르보', '虫宝包', 'Sewaddle'],
		color: '#91be31',
		ability: abilityData['chlorophyll'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sewaddle.png',
			image: './src/assets/images/pokemon/normal/sewaddle-idle.png',
			frames: 10,
			hold: 15
		},
		speed: {
			base: 1750,
			scale: 0
		},
		power: {
			base: 17,
			scale: 3,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'xShape',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'swadloon',
			level: 20,
		},	
	},
	swadloon: {
		id: 131,
		key: 'swadloon',
		name: ['Swadloon', 'Swadloon', 'Couverdure', 'Swadloon', 'Swadloon', 'Folikon', 'クルマユ', '두르쿤', '宝包茧', 'Swadloon'],
		color: '#5a8c31',
		ability: abilityData['chlorophyll'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/swadloon.png',
			image: './src/assets/images/pokemon/normal/swadloon-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1650,
			scale: -2
		},
		power: {
			base: 40,
			scale: 6,
		},
		critical: {
			base: 0,
			scale: 0.25
		},
		range: {
			base: 150,
			scale: 0,
			inner: 0,
		},
		rangeType: 'xShape',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'leavanny',
			level: 40, 
		},	
	},
	leavanny: {
		id: 131,
		key: 'leavanny',
		name: ['Leavanny', 'Leavanny', 'Manternel', 'Leavanny', 'Leavanny', 'Matrifol', 'ハハコモリ', '모아머', '保姆虫', 'Leavanny'],
		color: '#91be31',
		ability: abilityData['chlorophyll'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/leavanny.png',
			image: './src/assets/images/pokemon/normal/leavanny-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1600,
			scale: -3
		},
		power: {
			base: 50,
			scale: 9, 
		},
		critical: {
			base: 25, 
			scale: 0.25
		},
		range: {
			base: 195,
			scale: 0,
			inner: 0,
		},
		rangeType: 'xShape',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
	sprigatito: {
		id: 132,
		key: 'sprigatito',
		name: ['Sprigatito', 'Sprigatito', 'Poussacha', 'Sprigatito', 'Sprigatito', 'Felori', 'ニャオハ', '나오하', '新叶喵', 'Sprigatito'],
		color: '#7fbf74',
		ability: abilityData['flowerTrick'],
		projectileSound: 'projectile5',
		projectileSpeed: 10,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sprigatito.png',
			image: './src/assets/images/pokemon/normal/sprigatito-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 3000,
			scale: 0
		},
		power: {
			base: 8,
			scale: 1.2, 
		},
		critical: {
			base: 24.9, 
			scale: 0.1
		},
		range: {
			base: 160,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'floragato',
			level: 16,
		},	
	},
	floragato: {
		id: 132,
		key: 'floragato',
		name: ['Floragato', 'Floragato', 'Matourgeon', 'Floragato', 'Floragato', 'Feliospa', 'ニャローテ', '나로테', '蒂蕾喵', 'Floragato'],
		color: '#659c63',
		ability: abilityData['flowerTrick'],
		projectileSound: 'projectile5',
		projectileSpeed: 10,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/floragato.png',
			image: './src/assets/images/pokemon/normal/floragato-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2500,
			scale: 0
		},
		power: {
			base: 28,
			scale: 2.2, 
		},
		critical: {
			base: 40, 
			scale: 0.1
		},
		range: {
			base: 160,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'meowscarada',
			level: 36,
		},	
	},
	meowscarada: {
		id: 132,
		key: 'meowscarada',
		name: ['Meowscarada', 'Meowscarada', 'Miascarade', 'Meowscarada', 'Meowscarada', 'Maskagato', 'マスカーニャ', '마스카나', '魔幻假面喵', 'Meowscarada'],
		color: '#466c44',
		ability: abilityData['flowerTrick'],
		projectileSound: 'projectile5',
		projectileSpeed: 10,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/meowscarada.png',
			image: './src/assets/images/pokemon/normal/meowscarada-idle.png',
			frames: 9,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: 0
		},
		power: {
			base: 60,
			scale: 3.2, 
		},
		critical: {
			base: 60, 
			scale: 0.1
		},
		range: {
			base: 160,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
	magnemite: {
		id: 133,
		key: 'magnemite',
		name: ['Magnemite', 'Magnemite', 'Magnéti', 'Magnemite', 'Magnemite', 'Magnetilo', 'コイル', '코일', '小磁怪', 'Magnemite'],
		color: '#9ba1a9',
		ability: abilityData['zapCannon'],
		projectileSound: 'beam1',
		projectileSpeed: 7,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/magnemite.png',
			image: './src/assets/images/pokemon/normal/magnemite-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3800,
			scale: -1
		},
		power: {
			base: 15,
			scale: 2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 115,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'magneton',
			level: 30,
		},	
	},
	magneton: {
		id: 133,
		key: 'magneton',
		name: ['Magneton', 'Magneton', 'Magnéton', 'Magneton', 'Magneton', 'Magneton', 'レアコイル', '레어코일', '三合一磁怪', 'Magneton'],
		color: '#7a92bd',
		ability: abilityData['zapCannon'],
		projectileSound: 'beam1',
		projectileSpeed: 7,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/magneton.png',
			image: './src/assets/images/pokemon/normal/magneton-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3700,
			scale: -2
		},
		power: {
			base: 30,
			scale: 7,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'magnezone',
			level: 40,
		},	
	},
	magnezone: {
		id: 133,
		key: 'magnezone',
		name: ['Magnezone', 'Magnezone', 'Magnézone', 'Magnezone', 'Magnezone', 'Magnezone', 'ジバコイル', '자포코일', '自爆磁怪', 'Magnezone'],
		color: '#e5bf15',
		ability: abilityData['zapCannon'],
		projectileSound: 'beam1',
		projectileSpeed: 7,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/magnezone.png',
			image: './src/assets/images/pokemon/normal/magnezone-idle.png',
			frames: 13,
			hold: 15
		},
		speed: {
			base: 3150,
			scale: -5
		},
		power: {
			base: 110,
			scale: 9.2,
		},
		critical: {
			base: 10,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0.5,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	klink: {
	    id: 134,
	    key: 'klink',
	    name: ['Klink', 'Klink', 'Tic', 'Klink', 'Klink', 'Klikk', 'ギアル', '기어르', '齿轮儿', 'Klink'],
	    color: '#9ba1a3',
	    ability: abilityData['shiftGear'],
	    projectileSound: 'projectile1',
	    projectileSpeed: 7,
	    orbital: 2,
	    projectile: projectileData['gray4'], 
	    sprite: {
	        base: './src/assets/images/pokemon/normal/klink.png',
	        image: './src/assets/images/pokemon/normal/klink-idle.png',
	        frames: 10,
	        hold: 10
	    },
	    speed: {
	        base: 0,
	        scale: 0
	    },
	    power: {
	        base: 5,
	        scale: 2,
	    },
	    critical: {
	        base: 5, 
	        scale: 0.1
	    },
	    range: {
	        base: 70,
	        scale: 0,
	        inner: 0,
	    },
	    rangeType: 'circle',
	    attackType: 'orbital',
	    costScale: 'mid',
	    tiles: [1, 4],
	    evolution: {
	        pokemon: 'klang',
	        level: 38,
	    },	
	},
	klang: {
	    id: 134,
	    key: 'klang',
	    name: ['Klang', 'Klang', 'Clic', 'Klang', 'Klang', 'Kliklak', 'ギギアル', '기기어르', '齿轮组', 'Klang'],
	    color: '#8c9193',
	    ability: abilityData['shiftGear'],
	    projectileSound: 'projectile1',
	    projectileSpeed: 7,
	    orbital: 3,
	    projectile: projectileData['gray4'],
	    sprite: {
	        base: './src/assets/images/pokemon/normal/klang.png',
	        image: './src/assets/images/pokemon/normal/klang-idle.png',
	        frames: 10,
	        hold: 10
	    },
	    speed: {
	        base: 0,
	        scale: 0
	    },
	   	power: {
	        base: 25,
	        scale: 2.5,
	    },
	    critical: {
	        base: 10, 
	        scale: 0.1
	    },
	    range: {
	        base: 70,
	        scale: 0,
	        inner: 0,
	    },
	    rangeType: 'circle',
	    attackType: 'orbital',
	    costScale: 'mid',
	    tiles: [1, 4],
	    evolution: {
	        pokemon: 'klinklang',
	        level: 49,
	    },	
	},
	klinklang: {
	    id: 134,
	    key: 'klinklang',
	    name: ['Klinklang', 'Klinklang', 'Cliticlic', 'Klinklang', 'Klinklang', 'Klikdiklak', 'ギギギアル', '기기기어르', '三合一齿轮', 'Klinklang'],
	    color: '#7a8082',
	    ability: abilityData['shiftGear'],
	    projectileSound: 'projectile2',
	    projectileSpeed: 7,
	    orbital: 4, 
	    projectile: projectileData['gray4'],
	    sprite: {
	        base: './src/assets/images/pokemon/normal/klinklang.png',
	        image: './src/assets/images/pokemon/normal/klinklang-idle.png',
	        frames: 10,
	        hold: 10
	    },
	    speed: {
	        base: 0,
	        scale: 0
	    },
	    power: {
	        base: 25,
	        scale: 3,
	    },
	    critical: {
	        base: 10, 
	        scale: 0.15
	    },
	    range: {
	        base: 70,
	        scale: 0,
	        inner: 0,
	    },
	    rangeType: 'circle',
	    attackType: 'orbital',
	    costScale: 'mid',
	    tiles: [1, 4],
	},
	horsea: {
		id: 135,
		key: 'horsea',
		name: ['Horsea', 'Horsea', 'Hypotrempe', 'Horsea', 'Horsea', 'Seeper', 'タッツー', '쏘드라', '墨海马', 'Horsea'],
		color: '#5090d0',
		ability: abilityData['bubbleBeam'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/horsea.png',
			image: './src/assets/images/pokemon/normal/horsea-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 7800,
			scale: -3
		},
		power: {
			base: 10,
			scale: 2, 
		},
		critical: {
			base: 2.9, 
			scale: 0.1
		},
		range: {
			base: 150, 
			scale: 0.4,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
		evolution: {
			pokemon: 'seadra',
			level: 32,
		},	
	},
	seadra: {
		id: 135,
		key: 'seadra',
		name: ['Seadra', 'Seadra', 'Hypocéan', 'Seadra', 'Seadra', 'Seemon', 'シードラ', '시드라', '海刺龙', 'Seadra'],
		color: '#4080c0',
		ability: abilityData['bubbleBeam'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/seadra.png',
			image: './src/assets/images/pokemon/normal/seadra-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 6500,
			scale: -3
		},
		power: {
			base: 25,
			scale: 4.5, 
		},
		critical: {
			base: 8, 
			scale: 0.2
		},
		range: {
			base: 180,
			scale: 0.6,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
		evolution: {
			pokemon: 'kingdra',
			level: 55,
		},	
	},
	kingdra: {
		id: 135,
		key: 'kingdra',
		name: ['Kingdra', 'Kingdra', 'Hyporoi', 'Kingdra', 'Kingdra', 'Seedraking', 'キングドラ', '킹드라', '刺龙王', 'Kingdra'],
		color: '#23a0e7',
		ability: abilityData['bubbleBeam'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/kingdra.png',
			image: './src/assets/images/pokemon/normal/kingdra-idle.png',
			frames: 12,
			hold: 15
		},
		speed: {
			base: 6150,
			scale: -2
		},
		power: {
			base: 150,
			scale: 8, 
		},
		critical: {
			base: 15, 
			scale: 0.35
		},
		range: {
			base: 200,
			scale: 1.1,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
	},
	amaura: {
		id: 136,
		key: 'amaura',
		name: ['Amaura', 'Amaura', 'Amagara', 'Amaura', 'Amaura', 'Amarino', 'アマルス', '아마루스', '冰雪龙', 'Amaura'],
		color: '#a0dae0',
		ability: abilityData['refrigerate'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/amaura.png',
			image: './src/assets/images/pokemon/normal/amaura-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 4000, 
			scale: -7
		},
		power: {
			base: 10, 
			scale: 1.5, 
		},
		critical: {
			base: 10, 
			scale: 0
		},
		range: {
			base: 120, 
			scale: 0.2, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'aurorus',
			level: 39,
		},	
	},
	aurorus: {
		id: 136,
		key: 'aurorus',
		name: ['Aurorus', 'Aurorus', 'Dragmara', 'Aurorus', 'Aurorus', 'Amagarga', 'アマルルガ', '아마루르가', '冰雪巨龙', 'Aurorus'],
		color: '#a8d8e8',
		ability: abilityData['refrigerate'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['blue2'],
		sprite: {
			base: './src/assets/images/pokemon/normal/aurorus.png',
			image: './src/assets/images/pokemon/normal/aurorus-idle.png',
			frames: 14,
			hold: 15
		},
		speed: {
			base: 4000, 
			scale: -12 
		},
		power: {
			base: 50, 
			scale: 2.3, 
		},
		critical: {
			base: 15, 
			scale: 0
		},
		range: {
			base: 140, 
			scale: 0.2, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
	},
	sandygast: {
	    id: 137,
	    key: 'sandygast',
	    name: ['Sandygast', 'Sandygast', 'Bacabouh', 'Sandygast', 'Sandygast', 'Sankabuh', 'スナバァ', '모래꿍', '沙丘娃', 'Sandygast'],
	    color: '#f0d0a0', 
	    ability: abilityData['waterCompaction'],
	    projectileSound: 'area1',
	    projectileSpeed: 7,
	    projectile: projectileData['green1'], 
	    sprite: {
	        base: './src/assets/images/pokemon/normal/sandygast.png',
	        image: './src/assets/images/pokemon/normal/sandygast-idle.png',
	        frames: 2,
	        hold: 12
	    },
	    speed: {
	        base: 3000,
	        scale: -7
	    },
	    power: {
	        base: 14,
	        scale: 1.6, 
	    },
	    critical: {
	        base: 10, 
	        scale: 0
	    },
	    range: {
	        base: 105, 
	        scale: 0.15,
	        inner: 0,
	    },
	    rangeType: 'circle',
	    attackType: 'area', 
	    costScale: 'mid',
	    tiles: [1],
	    evolution: {
	        pokemon: 'palossand',
	        level: 42,
	    },	
	},
	palossand: {
	    id: 137,
	    key: 'palossand',
	    name: ['Palossand', 'Palossand', 'Trépassable', 'Palossand', 'Palossand', 'Colossand', 'シロデスナ', '모래성이당', '噬沙堡爷', 'Palossand'],
	    color: '#e0c090',
	    ability: abilityData['waterCompaction'],
	    projectileSound: 'area1',
	    projectileSpeed: 7,
	    projectile: projectileData['green1'], 
	    sprite: {
	        base: './src/assets/images/pokemon/normal/palossand.png',
	        image: './src/assets/images/pokemon/normal/palossand-idle.png',
	        frames: 4,
	        hold: 15
	    },
	    speed: {
	        base: 2500,
	        scale: -7
	    },
	    power: {
	        base: 95,
	        scale: 3.4, 
	    },
	    critical: {
	        base: 20, 
	        scale: 0
	    },
	    range: {
	        base: 125, 
	        scale: 0.2,
	        inner: 0,
	    },
	    rangeType: 'circle',
	    attackType: 'area', 
	    costScale: 'mid',
	    tiles: [1],
	},
	skrelp: {
		id: 138,
		key: 'skrelp',
		name: ['Skrelp', 'Skrelp', 'Venalgue', 'Skrelp', 'Skrelp', 'Algitt', 'クズモー', '수레기', '海刺龙', 'Skrelp'],
		color: '#906060',
		ability: abilityData['corrosion'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/skrelp.png',
			image: './src/assets/images/pokemon/normal/skrelp-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1180,
			scale: 0
		},
		power: {
			base: 8,
			scale: 3, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 130, 
			scale: 0.5,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
		evolution: {
			pokemon: 'dragalge',
			level: 48,
		},	
	},
	dragalge: {
		id: 138,
		key: 'dragalge',
		name: ['Dragalge', 'Dragalge', 'Kravarech', 'Dragalge', 'Dragalge', 'Tandrak', 'ドラミドロ', '드래캄', '毒藻龙', 'Dragalge'],
		color: '#7b9243',
		ability: abilityData['corrosion'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/dragalge.png',
			image: './src/assets/images/pokemon/normal/dragalge-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 850,
			scale: 0
		},
		power: {
			base: 80,
			scale: 8.9, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 140,
			scale: 1,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
		mega: ['megaDragalge']
	},
	megaDragalge: {
		id: 138,
		key: 'megaDragalge',
		name: [
			`M-Dragalge`, // inglés
			`M-Dragalge`, // español
			`M-Kravarech`, // francés
			`M-Dragalge`, // portugués
			`M-Dragalge`, // italiano
			`M-Tandrak`, // alemán
			`メガドラミドロ`, // japonés
			`메가 드래캄`, // coreano
			`超级毒藻龙`, // chino
			`M-Dragalge` // polaco
		],
		color: '#6b5ab5',
		ability: abilityData['corrosionMega'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaDragalge.png',
			image: './src/assets/images/pokemon/normal/megaDragalge-idle.png',
			frames: 10,
			hold: 15
		},
		speed: {
			base: 700,
			scale: 0
		},
		power: {
			base: 180,
			scale: 9.9, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 165,
			scale: 1,
			inner: 0,
		},
		rangeType: 'star',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
		base: 'dragalge'
	},
	deino: {
		id: 139,
		key: 'deino',
		name: ['Deino', 'Deino', 'Solochi', 'Deino', 'Deino', 'Kapuno', 'モノズ', '모노두', '单首龙', 'Deino'],
		color: '#3b61a6',
		ability: abilityData['focus'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/deino.png',
			image: './src/assets/images/pokemon/normal/deino-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 3000,
			scale: -5
		},
		power: {
			base: 13,
			scale: 2, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 120, 
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'zweilous',
			level: 50,
		},	
	},
	zweilous: {
		id: 139,
		key: 'zweilous',
		name: ['Zweilous', 'Zweilous', 'Diamat', 'Zweilous', 'Zweilous', 'Duodino', 'ジヘッド', '디헤드', '双首龙', 'Zweilous'],
		color: '#5485d2',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/zweilous.png',
			image: './src/assets/images/pokemon/normal/zweilous-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2500,
			scale: -8
		},
		power: {
			base: 40,
			scale: 5, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 130,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'hydreigon',
			level: 64,
		},	
	},
	hydreigon: {
		id: 139,
		key: 'hydreigon',
		name: ['Hydreigon', 'Hydreigon', 'Trioxhydre', 'Hydreigon', 'Hydreigon', 'Trikephalo', 'サザンドラ', '삼삼드래', '三首恶龙', 'Hydreigon'],
		color: '#742b4d',
		ability: abilityData['tripleShot'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/hydreigon.png',
			image: './src/assets/images/pokemon/normal/hydreigon-idle.png',
			frames: 6,
			hold: 12
		},
		speed: {
			base: 2450,
			scale: -12
		},
		power: {
			base: 73,
			scale: 6.6, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 165,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
	},
	tirtouga: {
	    id: 140,
	    key: 'tirtouga',
	    name: ['Tirtouga', 'Tirtouga', 'Carapagos', 'Tirtouga', 'Tirtouga', 'Galapaflos', 'プロトーガ', '프로토가', '原盖海龟', 'Tirtouga'],
	    color: '#5890A0',
	    ability: abilityData['shellSmash'],
	    projectileSound: 'projectile1',
	    projectileSpeed: 7,
	    projectile: projectileData['blue5'],
	    sprite: {
	        base: './src/assets/images/pokemon/normal/tirtouga.png',
	        image: './src/assets/images/pokemon/normal/tirtouga-idle.png',
	        frames: 4,
	        hold: 15
	    },
	    speed: {
	        base: 4000,
	        scale: -9
	    },
	    power: {
	        base: 12,
	        scale: 8, 
	    },
	    critical: {
	        base: 10, 
	        scale: 0
	    },
	    range: {
	        base: 130, 
	        scale: 0.1,
	        inner: 0,
	    },
	    rangeType: 'circle',
	    attackType: 'single',
	    costScale: 'high',
	    tiles: [1, 3],
	    evolution: {
	        pokemon: 'carracosta',
	        level: 37,
	    },	
	},
	carracosta: {
	    id: 140,
	    key: 'carracosta',
	    name: ['Carracosta', 'Carracosta', 'Mégapagos', 'Carracosta', 'Carracosta', 'Karippas', 'アバゴーラ', '늑골라', '肋骨海龟', 'Carracosta'],
	    color: '#385880',
	    ability: abilityData['shellSmash'],
	    projectileSound: 'projectile1',
	    projectileSpeed: 7,
	    projectile: projectileData['blue5'],
	    sprite: {
	        base: './src/assets/images/pokemon/normal/carracosta.png',
	        image: './src/assets/images/pokemon/normal/carracosta-idle.png',
	        frames: 4,
	        hold: 15
	    },
	    speed: {
	        base: 3500,
	        scale: -13
	    },
	    power: {
	        base: 70,
	        scale: 17.3, 
	    },
	    critical: {
	        base: 25, 
	        scale: 0
	    },
	    range: {
	        base: 140, 
	        scale: 0.2,
	        inner: 0,
	    },
	    rangeType: 'circle',
	    attackType: 'single',
	    costScale: 'high',
	    tiles: [1, 3],
	},
	ducklett: {
	    id: 141,
	    key: 'ducklett',
	    name: ['Ducklett', 'Ducklett', 'Couaneton', 'Ducklett', 'Ducklett', 'Piccolente', 'コアルヒー', '꼬지보리', '鸭宝宝', 'Ducklett'],
	    color: '#A8D8F0',
	    ability: abilityData['featherDance'],
	    projectileSound: 'projectile1',
	    projectileSpeed: 7,
	    projectile: projectileData['blue5'],
	    sprite: {
	        base: './src/assets/images/pokemon/normal/ducklett.png',
	        image: './src/assets/images/pokemon/normal/ducklett-idle.png',
	        frames: 3,
	        hold: 15
	    },
	    speed: {
	        base: 2500,
	        scale: -8.6
	    },
	    power: {
	        base: 18,
	        scale: 2, 
	    },
	    critical: {
	        base: 2.9, 
	        scale: 0.1
	    },
	    range: {
	        base: 135, 
	        scale: 0,
	        inner: 0,
	    },
	    rangeType: 'circle',
	    attackType: 'single',
	    costScale: 'mid',
	    tiles: [1, 3, 4],
	    evolution: {
	        pokemon: 'swanna',
	        level: 35,
	    },    
	},
	swanna: {
	    id: 141,
	    key: 'swanna',
	    name: ['Swanna', 'Swanna', 'Lakmécigne', 'Swanna', 'Swanna', 'Swaron', 'スワンナ', '스완나', '舞天鹅', 'Swanna'],
	    color: '#D0E8F8',
	    ability: abilityData['featherDance'],
	    projectileSound: 'projectile1',
	    projectileSpeed: 7,
	    projectile: projectileData['blue5'],
	    sprite: {
	        base: './src/assets/images/pokemon/normal/swanna.png',
	        image: './src/assets/images/pokemon/normal/swanna-idle.png',
	        frames: 5,
	        hold: 15
	    },
	    speed: {
	        base: 2190,
	        scale: -15.6
	    },
	    power: {
	        base: 60,
	        scale: 5.9, 
	    },
	    critical: {
	        base: 13, 
	        scale: 0.2
	    },
	    range: {
	        base: 150, 
	        scale: 0,
	        inner: 0,
	    },
	    rangeType: 'circle',
	    attackType: 'single',
	    costScale: 'mid',
	    tiles: [1, 3, 4],
	},
	buneary: {
		id: 142, 
		key: 'buneary',
		name: [
	        'Buneary',       // Inglés
	        'Buneary',       // Español
	        'Laporeille',    // Francés
	        'Buneary',       // Portugués
	        'Buneary',       // Italiano
	        'Haspiror',      // Alemán
	        'ミミロル',        // Japonés (Mimirol)
	        '이어롤',          // Coreano (Ieorol)
	        '卷卷耳',         // Chino (Juǎnjuǎněr)
	        'Buneary'        // Polaco
	    ],
		color: '#b76f2f',
		ability: abilityData['klutz'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/buneary.png',
			image: './src/assets/images/pokemon/normal/buneary-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 1800, 
			scale: -1
		},
		power: {
			base: 14, 
			scale: 2,
		},
		critical: {
			base: 10, 
			scale: 0
		},
		range: {
			base: 130, 
			scale: 0, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'lopunny',
			level: 30
		},	
	},
	lopunny: {
		id: 142,
		key: 'lopunny',
		name: [
	        'Lopunny',       // Inglés
	        'Lopunny',       // Español
	        'Lockpin',       // Francés
	        'Lopunny',       // Portugués
	        'Lopunny',       // Italiano
	        'Schlapor',      // Alemán
	        'ミミロップ',       // Japonés (Mimilop)
	        '이어롭',          // Coreano (Ieorop)
	        '長耳兔',         // Chino (Cháng'ěrtù)
	        'Lopunny'        // Polaco
	    ],
		color: '#d7bf67',
		ability: abilityData['klutz'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/lopunny.png',
			image: './src/assets/images/pokemon/normal/lopunny-idle.png',
			frames: 7,
			hold: 10
		},
		speed: {
			base: 1300,
			scale: -5
		},
		power: {
			base: 80,
			scale: 15.2,
		},
		critical: {
			base: 15, 
			scale: 0
		},
		range: {
			base: 130,
			scale: 0.2, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		mega: ['megaLopunny']
	},
	megaLopunny: {
		id: 142,
		key: 'megaLopunny',
		name: [
			`M-Lopunny`, // inglés
			`M-Lopunny`, // español
			`M-Lockpin`, // francés
			`M-Lopunny`, // portugués
			`M-Lopunny`, // italiano
			`M-Schlapor`, // alemán
			`メガミミロップ`, // japonés
			`메가 이어롭`, // coreano
			`超级长耳兔`, // chino
			`M-Lopunny` // polaco
		],
		color: '#f8ed96',
		ability: abilityData['scrappy'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaLopunny.png',
			image: './src/assets/images/pokemon/normal/megaLopunny-idle.png',
			frames: 7,
			hold: 9
		},
		speed: {
			base: 1300,
			scale: -7
		},
		power: {
			base: 80,
			scale: 16.2,
		},
		critical: {
			base: 15, 
			scale: 0
		},
		range: {
			base: 130,
			scale: 0.2, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		base: 'lopunny'
	},
	dratini: {
		id: 143, 
		key: 'dratini',
		name: [
	        'Dratini',       // Inglés
	        'Dratini',       // Español
	        'Minidraco',     // Francés
	        'Dratini',       // Portugués
	        'Dratini',       // Italiano
	        'Dratini',       // Alemán
	        'ミニリュウ',       // Japonés (Miniryu)
	        '미뇽',           // Coreano (Minyong)
	        '迷你龍',         // Chino (Mínǐlóng)
	        'Dratini'        // Polaco
	    ],
		color: '#189ce7',
		ability: abilityData['hyperBeam'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/dratini.png',
			image: './src/assets/images/pokemon/normal/dratini-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1600,
			scale: 0
		},
		power: {
			base: 11,
			scale: 1.8,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3],
		evolution: {
			pokemon: 'dragonair',
			level: 30
		},	
	},
	dragonair: {
		id: 143, 
		key: 'dragonair',
		name: [
	       'Dragonair',     // Inglés
	        'Dragonair',     // Español
	        'Draco',         // Francés
	        'Dragonair',     // Portugués
	        'Dragonair',     // Italiano
	        'Dragonir',      // Alemán
	        'ハクリュー',       // Japonés (Hakuryu)
	        '신용',           // Coreano (Sinyong)
	        '哈克龍',         // Chino (Hākèlóng)
	        'Dragonair'      // Polaco
	    ],
		color: '#a5abb2',
		ability: abilityData['hyperBeam'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/dragonair.png',
			image: './src/assets/images/pokemon/normal/dragonair-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 1350,
			scale: -1
		},
		power: {
			base: 20,
			scale: 3.4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 145,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3],
		evolution: {
			pokemon: 'dragonite',
			level: 55
		},	
	},
	dragonite: {
		id: 143, 
		key: 'dragonite',
		name: [
	        'Dragonite',     // Inglés
			'Dragonite',     // Español
			'Dracolosse',    // Francés
			'Dragonite',     // Portugués
			'Dragonite',     // Italiano
			'Dragoran',      // Alemán
			'カイリュー',      // Japonés (Kairyū)
			'망나뇽',          // Coreano (Mangnanyong)
			'快龍',            // Chino (Kuàilóng)
			'Dragonite'      // Polaco
	    ],
		color: '#de7318',
		ability: abilityData['hyperBeam'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/dragonite.png',
			image: './src/assets/images/pokemon/normal/dragonite-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 1200,
			scale: -1
		},
		power: {
			base: 50,
			scale: 5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 175,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3, 4],
	},
	chinchou: {
		id: 144,
		key: 'chinchou',
		name: [
		  'Chinchou',
		  'Chinchou',
		  'Loupio',
		  'Chinchou',
		  'Chinchou',
		  'Lampi',
		  'チョンチー',
		  '초라기',
		  '燈籠魚',
		  'Chinchou'
		],
		color: '#21a0e7',
		ability: abilityData['illuminateBuff'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/chinchou.png',
			image: './src/assets/images/pokemon/normal/chinchou-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 0,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'aura',
		costScale: 'low',
		tiles: [3],
		evolution: {
			pokemon: 'lanturn',
			level: 27
		},	
	},
	lanturn: {
		id: 144,
		key: 'lanturn',
		name: [
		  'Lanturn',
		  'Lanturn',
		  'Lanturn',
		  'Lanturn',
		  'Lanturn',
		  'Lanturn',
		  'ランターン',
		  '랜턴',
		  '電燈怪',
		  'Lanturn'
		],
		color: '#e3c003',
		ability: abilityData['illuminateBuff'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/lanturn.png',
			image: './src/assets/images/pokemon/normal/lanturn-idle.png',
			frames: 9,
			hold: 25
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 0,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 145,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'aura',
		costScale: 'mid',
		tiles: [3],	
	},
	swablu: {
		id: 145,
		key: 'swablu',
		name: [
		  'Swablu',
		  'Swablu',
		  'Tylton',
		  'Swablu',
		  'Swablu',
		  'Wablu',
		  'チルット',
		  '파비코',
		  '青綿鳥',
		  'Swablu'
		],
		color: '#21a0e7',
		ability: abilityData['cloudNine'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/swablu.png',
			image: './src/assets/images/pokemon/normal/swablu-idle.png',
			frames: 9,
			hold: 12
		},
		speed: {
			base: 3500,
			scale: -7
		},
		power: {
			base: 20,
			scale: 4.5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0.4,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3, 4],
		evolution: {
			pokemon: 'altaria',
			level: 35
		},	
	},
	altaria: {
		id: 145,
		key: 'altaria',
		name: [
		  'Altaria',
		  'Altaria',
		  'Altaria',
		  'Altaria',
		  'Altaria',
		  'Altaria',
		  'チルタリス',
		  '파비코리',
		  '七夕青鳥',
		  'Altaria'
		],
		color: '#459fdd',
		ability: abilityData['cloudNine'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/altaria.png',
			image: './src/assets/images/pokemon/normal/altaria-idle.png',
			frames: 14,
			hold: 15
		},
		speed: {
			base: 2500,
			scale: -12.5
		},
		power: {
			base: 120,
			scale: 10.8,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0.7,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3, 4],
		mega: ['megaAltaria']
	},
	megaAltaria: {
		id: 145,
		key: 'megaAltaria',
		name: [
			'M-Altaria',
			'M-Altaria',
			'M-Altaria',
			'M-Altaria',
			'M-Altaria',
			'M-Altaria',
			'メガチルタリス',
			'메가파비코리',
			'超級七夕青鳥',
			'M-Altaria'
		],
		color: '#edf1fb',
		ability: abilityData['pixilate'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaAltaria.png',
			image: './src/assets/images/pokemon/normal/megaAltaria-idle.png',
			frames: 8,
			hold: 11
		},
		speed: {
			base: 2200,
			scale: -12
		},
		power: {
			base: 250,
			scale: 11,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0.5,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3, 4],
		base: 'altaria'
	},
	paras: {
		id: 146,
		key: 'paras',
		name: [
		  'Paras',
		  'Paras',
		  'Paras',
		  'Paras',
		  'Paras',
		  'Paras',
		  'パラス',
		  '파라스',
		  '派拉斯',
		  'Paras'
		],
		color: '#e1501e',
		ability: abilityData['drySkin'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/paras.png',
			image: './src/assets/images/pokemon/normal/paras-idle.png',
			frames: 4,
			hold: 7
		},
		speed: {
			base: 2500,
			scale: -5
		},
		power: {
			base: 12,
			scale: 3,
		},
		critical: {
			base: 10,
			scale: 0.1
		},
		range: {
			base: 120,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'parasect',
			level: 24
		},	
	},
	parasect: {
		id: 146,
		key: 'parasect',
		name: [
		  'Parasect',
		  'Parasect',
		  'Parasect',
		  'Parasect',
		  'Parasect',
		  'Parasek',
		  'パラセクト',
		  '파라섹트',
		  '派拉斯特',
		  'Parasect'
		],
		color: '#d63900',
		ability: abilityData['drySkin'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/parasect.png',
			image: './src/assets/images/pokemon/normal/parasect-idle.png',
			frames: 4,
			hold: 7
		},
		speed: {
			base: 2450,
			scale: -7
		},
		power: {
			base: 50,
			scale: 13.7,
		},
		critical: {
			base: 15,
			scale: 0.1
		},
		range: {
			base: 135,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
	makuhita: {
		id: 147,
		key: 'makuhita',
		name: [
		  	'Makuhita',
		  	'Makuhita',
		  	'Makuhita',
		  	'Makuhita',
		  	'Makuhita',
		  	'Makuhita',
		  	'マクノシタ',
		  	'마크탕',
		  	'幕下力士',
		  	'Makuhita'
		],
		color: '#e2d916',
		ability: abilityData['bulkUp'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/makuhita.png',
			image: './src/assets/images/pokemon/normal/makuhita-idle.png',
			frames: 16,
			hold: 5
		},
		speed: {
			base: 3150,
			scale: -5
		},
		power: {
			base: 12,
			scale: 6.4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'hariyama',
			level: 24
		},	
	},
	hariyama: {
		id: 147,
		key: 'hariyama',
		name: [
		  	'Hariyama',
		  	'Hariyama',
		  	'Hariyama',
		  	'Hariyama',
		  	'Hariyama',
		  	'Hariyama',
		  	'ハリテヤマ',
		  	'하리뭉',
		  	'鐵掌力士',
		  	'Hariyama'
		],
		color: '#f08834',
		ability: abilityData['bulkUp'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/hariyama.png',
			image: './src/assets/images/pokemon/normal/hariyama-idle.png',
			frames: 12,
			hold: 7
		},
		speed: {
			base: 2200,
			scale: -5.5
		},
		power: {
			base: 50,
			scale: 25.5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],	
	},
	solrock: {
		id: 148,
		key: 'solrock',
		name: [
		  	'Solrock',
		  	'Solrock',
		  	'Solaroc',
		  	'Solrock',
		  	'Solrock',
		  	'Sonnfel',
		  	'ソルロック',
		  	'솔록',
		  	'太陽岩',
		  	'Solrock'
		],
		color: '#ce7021',
		ability: abilityData['diurnal'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/solrock.png',
			image: './src/assets/images/pokemon/normal/solrock-idle.png',
			frames: 6,
			hold: 7
		},
		speed: {
			base: 2800,
			scale: -16
		},
		power: {
			base: 10,
			scale: 14.9,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],	
	},
	lunatone: {
		id: 149,
		key: 'lunatone',
		name: [
		  	'Lunatone',
		  	'Lunatone',
		  	'Séléroc',
		  	'Lunatone',
		  	'Lunatone',
		  	'Lunastein',
		  	'ルナトーン',
		  	'루나톤',
		  	'月石',
		  	'Lunatone'
		],
		color: '#ecc67f',
		ability: abilityData['nocturnal'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/lunatone.png',
			image: './src/assets/images/pokemon/normal/lunatone-idle.png',
			frames: 8,
			hold: 7
		},
		speed: {
			base: 2600,
			scale: -18
		},
		power: {
			base: 10,
			scale: 9.9,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],	
	},
	minior: {
		id: 150,
		key: 'minior',
		name: [
		  	'Minior',
		  	'Minior',
		  	'Météno',
		  	'Minior',
		  	'Minior',
		  	'Meteno',
		  	'メテノ',
		  	'메테노',
		  	'小隕星',
		  	'Minior'
		],
		color: '#956a5b',
		ability: abilityData['meteorBeam'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/minior.png',
			image: './src/assets/images/pokemon/normal/minior-idle.png',
			imageRed: './src/assets/images/pokemon/normal/minior-red-idle.png',
			imageOrange: './src/assets/images/pokemon/normal/minior-orange-idle.png',
			imageYellow: './src/assets/images/pokemon/normal/minior-yellow-idle.png',
			imageGreen: './src/assets/images/pokemon/normal/minior-green-idle.png',
			imageBlue: './src/assets/images/pokemon/normal/minior-blue-idle.png',
			imageIndigo: './src/assets/images/pokemon/normal/minior-indigo-idle.png',
			imageViolet: './src/assets/images/pokemon/normal/minior-violet-idle.png',
			frames: 12,
			hold: 7
		},
		speed: {
			base: 4000,
			scale: -18
		},
		power: {
			base: 10,
			scale: 7.9,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 155,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],	
	},
	aerodactyl: {
		id: 151,
		key: 'aerodactyl',
		name: [
		  	'Aerodactyl',
		  	'Aerodactyl',
		  	'Ptéra',
		  	'Aerodactyl',
		  	'Aerodactyl',
		  	'Aerodactyl',
		  	'プテラ',
		  	'프테라',
		  	'化石翼龍',
		  	'Aerodactyl'
		],
		color: '#8497b9',
		ability: abilityData['ancientPower'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['purple5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/aerodactyl.png',
			image: './src/assets/images/pokemon/normal/aerodactyl-idle.png',
			frames: 8,
			hold: 7
		},
		speed: {
			base: 1250,
			scale: -6
		},
		power: {
			base: 20,
			scale: 5.3
		},
		critical: {
			base: 30,
			scale: 0
		},
		range: {
			base: 160,
			scale: 1.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],	
		mega: ['megaAerodactyl']
	},
	megaAerodactyl: {
		id: 151,
		key: 'megaAerodactyl',
		name: [
		  	'M-Aerodactyl',
		  	'M-Aerodactyl',
		  	'M-Ptéra',
		  	'M-Aerodactyl',
		  	'M-Aerodactyl',
		  	'M-Aerodactyl',
		  	'メガプテラ', // japonés
			'메가프테라', // coreano
			'超级化石翼龙', // chino
		  	'M-Aerodactyl'
		],
		color: '#654f9a',
		ability: abilityData['ancientPowerPlus'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaAerodactyl.png',
			image: './src/assets/images/pokemon/normal/megaAerodactyl-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 1250,
			scale: -6
		},
		power: {
			base: 20,
			scale: 7.3
		},
		critical: {
			base: 30,
			scale: 0
		},
		range: {
			base: 160,
			scale: 1.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		base: 'aerodactyl'
	},
	aipom: {
		id: 152,
		key: 'aipom',
		name: ['Aipom', 'Aipom', 'Capumain', 'Aipom', 'Aipom', 'Griffel', 'エイパム', '에이팜', '長尾怪手', 'Aipom'],
		color: '#bf80c7',
		ability: abilityData['helpingHand'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/aipom.png',
			image: './src/assets/images/pokemon/normal/aipom-idle.png',
			frames: 2,
			hold: 8
		},
		speed: {
			base: 1800,
			scale: -6
		},
		power: {
			base: 10,
			scale: 6,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 125,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'ambipom',
			level: 22
		},	
	},
	ambipom: {
		id: 152,
		key: 'ambipom',
		name: ['Ambipom', 'Ambipom', 'Capidextre', 'Ambipom', 'Ambipom', 'Ambidiffel', 'エテボース', '겟핸보숭', '雙尾怪手', 'Ambipom'],
		color: '#914c92',
		ability: abilityData['helpingHand'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/ambipom.png',
			image: './src/assets/images/pokemon/normal/ambipom-idle.png',
			frames: 6,
			hold: 7
		},
		speed: {
			base: 1650,
			scale: -9
		},
		power: {
			base: 70,
			scale: 9.8,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],	
	},
	beldum: {
		id: 153,
		key: 'beldum',
		name: ['Beldum', 'Beldum', 'Terhal', 'Beldum', 'Beldum', 'Tanhel', 'ダンバル', '메탕', '鐵啞鈴', 'Beldum'],
		color: '#6787af',
		ability: abilityData['meteorMash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/beldum.png',
			image: './src/assets/images/pokemon/normal/beldum-idle.png',
			frames: 8,
			hold: 8
		},
		speed: {
			base: 2800,
			scale: -2
		},
		power: {
			base: 20,
			scale: 5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'metang',
			level: 20
		},	
	},
	metang: {
		id: 153,
		key: 'metang',
		name: ['Metang', 'Metang', 'Métang', 'Metang', 'Metang', 'Metang', 'メタング', '메탕구', '金屬怪', 'Metang'],
		color: '#5c75a4',
		ability: abilityData['meteorMash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/metang.png',
			image: './src/assets/images/pokemon/normal/metang-idle.png',
			frames: 8,
			hold: 8
		},
		speed: {
			base: 2800,
			scale: -4
		},
		power: {
			base: 50,
			scale: 8,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 125,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'metagross',
			level: 45
		},	
	},
	metagross: {
		id: 153,
		key: 'metagross',
		name: ['Metagross', 'Metagross', 'Métalosse', 'Metagross', 'Metagross', 'Metagross', 'メタグロス', '메타그로스', '巨金怪', 'Metagross'],
		color: '#52649a',
		ability: abilityData['meteorMash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/metagross.png',
			image: './src/assets/images/pokemon/normal/metagross-idle.png',
			frames: 2,
			hold: 8
		},
		speed: {
			base: 2500,
			scale: -7
		},
		power: {
			base: 200,
			scale: 21,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 125,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
	},
	spiritomb: {
		id: 154,
		key: 'spiritomb',
		name: ['Spiritomb', 'Spiritomb', 'Spiritomb', 'Spiritomb', 'Spiritomb', 'Kryppuk', 'ミカルゲ', '화강돌', '花岩怪', 'Spiritomb'],
		color: '#ce8db5',
		ability: abilityData['shadowBall'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		orbital: 5,
		projectile: projectileData['purple7'],
		sprite: {
			base: './src/assets/images/pokemon/normal/spiritomb.png',
			image: './src/assets/images/pokemon/normal/spiritomb-idle.png',
			frames: 3,
			hold: 7
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 50,
			scale: 2.1,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 108,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'orbital',
		costScale: 'high',
		tiles: [1, 4],	
	},
	bronzor: {
		id: 155,
		key: 'bronzor',
		name: ['Bronzor', 'Bronzor', 'Archéomire', 'Bronzor', 'Bronzor', 'Bronzel', 'ドーミラー', '동미러', '銅鏡怪', 'Bronzor'],
		color: '#5792d6',
		ability: abilityData['heavyMetal'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/bronzor.png',
			image: './src/assets/images/pokemon/normal/bronzor-idle.png',
			frames: 10,
			hold: 8
		},
		speed: {
			base: 2800,
			scale: -2
		},
		power: {
			base: 10,
			scale: 3,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'bronzong',
			level: 33
		},	
	},
	bronzong: {
		id: 155,
		key: 'bronzong',
		name: ['Bronzong', 'Bronzong', 'Archéodong', 'Bronzong', 'Bronzong', 'Bronzong', 'ドータクン', '동탁군', '青銅鐘', 'Bronzong'],
		color: '#06aa96',
		ability: abilityData['heavyMetal'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/bronzong.png',
			image: './src/assets/images/pokemon/normal/bronzong-idle.png',
			frames: 8,
			hold: 8
		},
		speed: {
			base: 2800,
			scale: -8
		},
		power: {
			base: 50,
			scale: 5.5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
	},
	heracross: {
		id: 156,
		key: 'heracross',
		name: ['Heracross', 'Heracross', 'Scarhino', 'Heracross', 'Heracross', 'Skaraborn', 'ヘラクロス', '헤라크로스', '赫拉克羅斯', 'Heracross'],
		color: '#6988b0',
		ability: abilityData['moxie'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/heracross.png',
			image: './src/assets/images/pokemon/normal/heracross-idle.png',
			frames: 6,
			hold: 20
		},
		speed: {
			base: 1750,
			scale: -9
		},
		power: {
			base: 45,
			scale: 9.8,
		},
		critical: {
			base: 0,
			scale: 0.3
		},
		range: {
			base: 140,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2]
	},
	doduo: {
		id: 157,
		key: 'doduo',
		name: ['Doduo', 'Doduo', 'Doduo', 'Doduo', 'Doduo', 'Dodu', 'ドードー', '두두', '嘟嘟', 'Doduo'],
		color: '#ff9442',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/doduo.png',
			image: './src/assets/images/pokemon/normal/doduo-idle.png',
			frames: 4,
			hold: 12
		},
		speed: {
			base: 800,
			scale: -2
		},
		power: {
			base: 5,
			scale: 1,
		},
		critical: {
			base: 10,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'dodrio',
			level: 31
		},	
	},
	dodrio: {
		id: 157,
		key: 'dodrio',
		name: ['Dodrio', 'Dodrio', 'Dodrio', 'Dodrio', 'Dodrio', 'Dodri', 'ドードリオ', '두트리오', '嘟嘟利', 'Dodrio'],
		color: '#9d5615',
		ability: abilityData['tripleShot'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/dodrio.png',
			image: './src/assets/images/pokemon/normal/dodrio-idle.png',
			frames: 6,
			hold: 12
		},
		speed: {
			base: 650,
			scale: -3
		},
		power: {
			base: 25,
			scale: 1.5,
		},
		critical: {
			base: 20,
			scale: 0
		},
		range: {
			base: 155,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],	
	},
	combee: {
		id: 158,
		key: 'combee',
		name: ['Combee', 'Combee', 'Apitrini', 'Combee', 'Combee', 'Wadribie', 'ミツハニー', '세꿀버리', '三蜜蜂', 'Combee'],
		color: '#ef9f31',
		ability: abilityData['honeyGather'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/combee.png',
			image: './src/assets/images/pokemon/normal/combee-idle.png',
			frames: 6,
			hold: 12
		},
		speed: {
			base: 2600,
			scale: -4
		},
		power: {
			base: 7,
			scale: 3,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'vespiquen',
			level: 21
		},	
	},
	vespiquen: {
		id: 158,
		key: 'vespiquen',
		name: ['Vespiquen', 'Vespiquen', 'Apireine', 'Vespiquen', 'Vespiquen', 'Honweisel', 'ビークイン', '비퀸', '蜂女王', 'Vespiquen'],
		color: '#d55b2d',
		ability: abilityData['honeyGather'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/vespiquen.png',
			image: './src/assets/images/pokemon/normal/vespiquen-idle.png',
			frames: 14,
			hold: 9
		},
		speed: {
			base: 1850,
			scale: -6.5
		},
		power: {
			base: 25,
			scale: 7.5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 160,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],	
	},
	feebas: {
		id: 159,
		key: 'feebas',
		name: [
		  	'Feebas',
		  	'Feebas',
		  	'Barpau',
		  	'Feebas',
		  	'Feebas',
		  	'Barschwa',
		  	'ヒンバス',
		  	'빈티나',
		  	'醜醜魚',
		  	'Feebas'
		],
		color: '#c2a273',
		ability: abilityData['marvelScale'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/feebas.png',
			image: './src/assets/images/pokemon/normal/feebas-idle.png',
			frames: 4,
			hold: 12
		},
		speed: {
			base: 3100,
			scale: -2
		},
		power: {
			base: 5,
			scale: 4.8,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [3],
		evolution: {
			pokemon: 'milotic',
			level: 40
		},	
	},
	milotic: {
		id: 159,
		key: 'milotic',
		name: [
		  	'Milotic',
		  	'Milotic',
		  	'Milobellus',
		  	'Milotic',
		  	'Milotic',
		  	'Milotic',
		  	'ミロカロス',
		  	'밀로틱',
		  	'美納斯',
		  	'Milotic'
		],
		color: '#e2786d',
		ability: abilityData['marvelScale'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/milotic.png',
			image: './src/assets/images/pokemon/normal/milotic-idle.png',
			frames: 4,
			hold: 9
		},
		speed: {
			base: 1150,
			scale: -3
		},
		power: {
			base: 45,
			scale: 9.8,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 160,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [3],	
	},
	zangoose: {
		id: 160,
		key: 'zangoose',
		name: [
		  	'Zangoose',
		  	'Zangoose',
		  	'Mangriff',
		  	'Zangoose',
		  	'Zangoose',
		  	'Sengo',
		  	'ザングース',
		  	'쟝고',
		  	'貓鼬斬',
		  	'Zangoose'
		],
		color: '#d94c12',
		ability: abilityData['rivalrySpeed'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/zangoose.png',
			image: './src/assets/images/pokemon/normal/zangoose-idle.png',
			frames: 6,
			hold: 7
		},
		speed: {
			base: 2700,
			scale: -15
		},
		power: {
			base: 10,
			scale: 12.9
		},
		critical: {
			base: 25,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],	
	},
	seviper: {
		id: 161,
		key: 'seviper',
		name: [
		  	'Seviper',
		  	'Seviper',
		  	'Séviper',
		  	'Seviper',
		  	'Seviper',
		  	'Vipitis',
		  	'ハブネーク',
		  	'세비퍼',
		  	'飯匙蛇',
		  	'Seviper'
		],
		color: '#67679e',
		ability: abilityData['rivalryPower'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/seviper.png',
			image: './src/assets/images/pokemon/normal/seviper-idle.png',
			frames: 4,
			hold: 7
		},
		speed: {
			base: 2700,
			scale: -15
		},
		power: {
			base: 10,
			scale: 12.9
		},
		critical: {
			base: 10,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],	
	},
	chingling: {
		id: 162,
		key: 'chingling',
		name: ['Chingling', 'Chingling', 'Korillon', 'Chingling', 'Chingling', 'Klingplim', 'リーシャン', '랑딸랑', '鈴鐺響', 'Chingling'],
		color: '#e6cd00',
		ability: abilityData['boomburst'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/chingling.png',
			image: './src/assets/images/pokemon/normal/chingling-idle.png',
			frames: 2,
			hold: 7
		},
		speed: {
			base: 4600,
			scale: -5
		},
		power: {
			base: 8,
			scale: 2
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'low',
		tiles: [1, 4],	
		evolution: {
			pokemon: 'chimecho',
			level: 22
		},
	},
	chimecho: {
		id: 162,
		key: 'chimecho',
		name: [
		  	'Chimecho',
		  	'Chimecho',
		  	'Éoko',
		  	'Chimecho',
		  	'Chimecho',
		  	'Palimpalim',
		  	'チリーン',
		  	'치렁',
		  	'風鈴鈴',
		  	'Chimecho'
		],
		color: '#e85e29',
		ability: abilityData['boomburst'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/chimecho.png',
			image: './src/assets/images/pokemon/normal/chimecho-idle.png',
			frames: 4,
			hold: 7
		},
		speed: {
			base: 4500,
			scale: -10
		},
		power: {
			base: 10,
			scale: 1.7
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'low',
		tiles: [1, 4],
		mega: ['megaChimecho']
	},
	megaChimecho: {
		id: 162,
		key: 'megaChimecho',
		name: [
			`M-Chimecho`, // inglés
			`M-Chimecho`, // español
			`M-Éoko`, // francés
			`M-Chimecho`, // portugués
			`M-Chimecho`, // italiano
			`M-Palimpalim`, // alemán
			`メガチリーン`, // japonés
			`메가 치렁`, // coreano
			`超级风铃铃`, // chino
			`M-Chimecho` // polaco
		],
		color: '#c9b200',
		ability: abilityData['supersonic'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['yellow8'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaChimecho.png',
			image: './src/assets/images/pokemon/normal/megaChimecho-idle.png',
			frames: 9,
			hold: 7
		},
		speed: {
			base: 4000,
			scale: -5
		},
		power: {
			base: 20,
			scale: 4.6
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0.5,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		base: 'chimecho'
	},
	frillishM: {
		id: 163,
		key: 'frillishM',
		name: [
		  'Frillish',
		  'Frillish',
		  'Viskuse',
		  'Frillish',
		  'Frillish',
		  'Quabbel',
		  'プルリル',
		  '탱그릴',
		  '輕飄飄',
		  'Frillish'
		],
		color: '#60b2d2',
		ability: abilityData['frisk'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/frillishM.png',
			image: './src/assets/images/pokemon/normal/frillishM-idle.png',
			frames: 4,
			hold: 7
		},
		speed: {
			base: 3050,
			scale: -4
		},
		power: {
			base: 10,
			scale: 5.5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 180,
			scale: 0.4,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],	
		evolution: {
			pokemon: 'jellicentM',
			level: 40
		},
	},
	jellicentM: {
		id: 163,
		key: 'jellicentM',
		name: [
		  'Jellicent',
		  'Jellicent',
		  'Moyade',
		  'Jellicent',
		  'Jellicent',
		  'Apoquallyp',
		  'ブルンゲル',
		  '탱탱겔',
		  '胖嘟嘟',
		  'Jellicent'
		],
		color: '#77d7ff',
		ability: abilityData['frisk'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/jellicentM.png',
			image: './src/assets/images/pokemon/normal/jellicentM-idle.png',
			frames: 7,
			hold: 7
		},
		speed: {
			base: 2050,
			scale: -5
		},
		power: {
			base: 20,
			scale: 15.8,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 205,
			scale: 0.8,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
	},
	frillishF: {
		id: 163,
		key: 'frillishF',
		name: [
		  'Frillish',
		  'Frillish',
		  'Viskuse',
		  'Frillish',
		  'Frillish',
		  'Quabbel',
		  'プルリル',
		  '탱그릴',
		  '輕飄飄',
		  'Frillish'
		],
		color: '#f9ddec',
		ability: abilityData['frisk'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/frillishF.png',
			image: './src/assets/images/pokemon/normal/frillishF-idle.png',
			frames: 4,
			hold: 7
		},
		speed: {
			base: 2200,
			scale: -8
		},
		power: {
			base: 11,
			scale: 5.2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],	
		evolution: {
			pokemon: 'jellicentF',
			level: 40
		},
	},
	jellicentF: {
		id: 163,
		key: 'jellicentF',
		name: [
		  'Jellicent',
		  'Jellicent',
		  'Moyade',
		  'Jellicent',
		  'Jellicent',
		  'Apoquallyp',
		  'ブルンゲル',
		  '탱탱겔',
		  '胖嘟嘟',
		  'Jellicent'
		],
		color: '#f0b4d4',
		ability: abilityData['frisk'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/jellicentF.png',
			image: './src/assets/images/pokemon/normal/jellicentF-idle.png',
			frames: 7,
			hold: 7
		},
		speed: {
			base: 1800,
			scale: -10
		},
		power: {
			base: 20,
			scale: 9.2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 170,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
	},
	keldeo: {
		id: 165,
		key: 'keldeo',
		name: [
		  'Keldeo',
		  'Keldeo',
		  'Keldeo',
		  'Keldeo',
		  'Keldeo',
		  'Keldeo',
		  'ケルディオ',
		  '케르디오',
		  '凱路迪歐',
		  'Keldeo'
		],
		color: '#4f8bb2',
		ability: abilityData['secretSword'],
		projectileSound: 'sword',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/keldeo.png',
			image: './src/assets/images/pokemon/normal/keldeo-idle.png',
			frames: 14,
			hold: 7
		},
		speed: {
			base: 1700,
			scale: -8.5
		},
		power: {
			base: 10,
			scale: 3.9,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 180,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3, 4],
	},
	corsolaGalar: {
		id: 166,
		key: 'corsolaGalar',
		name: [
		  'G.Corsola',
		  'Corsola G.',
		  'Corayon G.',
		  'Corsola G.',
		  'Corsola G.',
		  'G-Corasonn',
		  'ガラルサニーゴ',
		  '가라르 코산호',
		  '伽勒爾 太陽珊瑚',
		  'Corsola G.'
		],
		color: '#e1dbdf',
		ability: abilityData['curse'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple8'],
		sprite: {
			base: './src/assets/images/pokemon/normal/corsolaGalar.png',
			image: './src/assets/images/pokemon/normal/corsolaGalar-idle.png',
			frames: 3,
			hold: 15
		},
		speed: {
			base: 9500,
			scale: -2
		},
		power: {
			base: 25,
			scale: 12,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 200,
			scale: 1,
			inner: 125,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3, 4],
		evolution: {
			pokemon: 'cursola',
			level: 38,
		},
	},
	cursola: {
		id: 166,
		key: 'cursola',
		name: [
		  'Cursola',
		  'Cursola',
		  'Corayôme',
		  'Cursola',
		  'Cursola',
		  'Gorgasonn',
		  'サニーゴ',
		  '산호르곤',
		  '魔靈珊瑚',
		  'Cursola'
		],
		color: '#c9d1d4',
		ability: abilityData['curse'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple8'],
		sprite: {
			base: './src/assets/images/pokemon/normal/cursola.png',
			image: './src/assets/images/pokemon/normal/cursola-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 9000,
			scale: -7
		},
		power: {
			base: 50,
			scale: 14,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 200,
			scale: 1,
			inner: 125,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3, 4],
	},
	bergmite: {
		id: 167,
		key: 'bergmite',
		name: [
		  'Bergmite',
		  'Bergmite',
		  'Grelaçon',
		  'Bergmite',
		  'Bergmite',
		  'Arktip',
		  'カチコール',
		  '꽁어름',
		  '冰寶',
		  'Bergmite'
		],
		color: '#6a97ad',
		ability: abilityData['icePlatform'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple8'],
		sprite: {
			base: './src/assets/images/pokemon/normal/bergmite.png',
			image: './src/assets/images/pokemon/normal/bergmite-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 4200,
			scale: -2
		},
		power: {
			base: 10,
			scale: 2.2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 140, 
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'avalugg',
			level: 37,
		},
	},
	avalugg: {
		id: 167,
		key: 'avalugg',
		name: [
		  'Avalugg',
		  'Avalugg',
		  'Séracrawl',
		  'Avalugg',
		  'Avalugg',
		  'Arktilas',
		  'クレベース',
		  '크레베이스',
		  '冰岩怪',
		  'Avalugg'
		],
		color: '#e1dbdf',
		ability: abilityData['icePlatform'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple8'],
		sprite: {
			base: './src/assets/images/pokemon/normal/avalugg.png',
			image: './src/assets/images/pokemon/normal/avalugg-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3800,
			scale: -3
		},
		power: {
			base: 30,
			scale: 5.2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 155, 
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 3],
	},
	alomomola: {
		id: 168,
		key: 'alomomola',
		name: [
		  'Alomomola',
		  'Alomomola',
		  'Mamanbo',
		  'Alomomola',
		  'Alomomola',
		  'Mamolida',
		  'ママンボウ',
		  '맘복치',
		  '保母曼波',
		  'Alomomola'
		],
		color: '#fc6b87',
		ability: abilityData['heal'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/alomomola.png',
			image: './src/assets/images/pokemon/normal/alomomola-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 3700, 
			scale: -11 
		},
		power: {
			base: 30,
			scale: 18.2, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 135,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
	},
	pyukumuku: {
		id: 169,
		key: 'pyukumuku',
		name: [
		  'Pyukumuku',
		  'Pyukumuku',
		  'Concombaffe',
		  'Pyukumuku',
		  'Pyukumuku',
		  'Gufa',
		  'ナマコブシ',
		  '해무기',
		  '拳海參',
		  'Pyukumuku'
		],
		color: '#cf5691',
		ability: abilityData['venomDrench'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple8'],
		sprite: {
			base: './src/assets/images/pokemon/normal/pyukumuku.png',
			image: './src/assets/images/pokemon/normal/pyukumuku-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 2500,
			scale: -1.5
		},
		power: {
			base: 20,
			scale: 4.5,
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 120,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 3],
	},
	popplio: {
		id: 170,
		key: 'popplio',
		name: [
		  'Popplio',
		  'Popplio',
		  'Otaquin',
		  'Popplio',
		  'Popplio',
		  'Robball',
		  'アシマリ',
		  '냐오불',
		  '球球海獅',
		  'Popplio'
		],
		color: '#0686f7',
		ability: abilityData['liquidVoice'], 
		projectileSound: 'beam2',
		projectileSpeed: 7,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/popplio.png',
			image: './src/assets/images/pokemon/normal/popplio-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 4500,
			scale: -4
		},
		power: {
			base: 10,
			scale: 1
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [3],
		evolution: {
			pokemon: 'brionne',
			level: 17
		},	
	},
	brionne: {
		id: 170,
		key: 'brionne',
		name: [
		  'Brionne',
		  'Brionne',
		  'Otarlette',
		  'Brionne',
		  'Brionne',
		  'Marikeck',
		  'オシャマリ',
		  '키요공',
		  '花漾海獅',
		  'Brionne'
		],
		color: '#39b0ea',
		ability: abilityData['liquidVoice'],
		projectileSound: 'beam2',
		projectileSpeed: 7,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/brionne.png',
			image: './src/assets/images/pokemon/normal/brionne-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 4500,
			scale: -6
		},
		power: {
			base: 20,
			scale: 2
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 160,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [3],
		evolution: {
			pokemon: 'primarina',
			level: 34
		},	
	},
	primarina: {
		id: 170,
		key: 'primarina',
		name: [
		  'Primarina',
		  'Primarina',
		  'Oratoria',
		  'Primarina',
		  'Primarina',
		  'Primarene',
		  'アシレーヌ',
		  '누리레느',
		  '西獅海壬',
		  'Primarina'
		],
		color: '#7788c7',
		ability: abilityData['liquidVoice'],
		projectileSound: 'beam2',
		projectileSpeed: 7,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/primarina.png',
			image: './src/assets/images/pokemon/normal/primarina-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 4500,
			scale: -7
		},
		power: {
			base: 30,
			scale: 2.9
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 170,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [3],	
	},
	corphish: {
		id: 171,
		key: 'corphish',
		name: [
		  'Corphish',
		  'Corphish',
		  'Écrapince',
		  'Corphish',
		  'Corphish',
		  'Krebscorps',
		  'ヘイガニ',
		  '가재군',
		  '龍蝦小兵',
		  'Corphish'
		],
		color: '#fa7e53',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/corphish.png',
			image: './src/assets/images/pokemon/normal/corphish-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 1950,
			scale: -1
		},
		power: {
			base: 15,
			scale: 3,
		},
		critical: {
			base: 20,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'crawdaunt',
			level: 30
		},	
	},
	crawdaunt: {
		id: 171,
		key: 'crawdaunt',
		name: [
		  'Crawdaunt',
		  'Crawdaunt',
		  'Colhomard',
		  'Crawdaunt',
		  'Crawdaunt',
		  'Krebutack',
		  'シザリガー',
		  '가재장군',
		  '鐵螯龍蝦',
		  'Crawdaunt'
		],
		color: '#dd4a0e',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/crawdaunt.png',
			image: './src/assets/images/pokemon/normal/crawdaunt-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1550,
			scale: -2
		},
		power: {
			base: 50,
			scale: 15,
		},
		critical: {
			base: 20,
			scale: 0.1
		},
		range: {
			base: 145,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],	
	},
	victini: {
		id: 172,
		key: 'victini',
		name: [
		  'Victini',
		  'Victini',
		  'Victini',
		  'Victini',
		  'Victini',
		  'Victini',
		  'ビクティニ',
		  '비크티니',
		  '比克提尼',
		  'Victini'
		],
		color: '#eb6011',
		ability: abilityData['victoryStar'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/victini.png',
			image: './src/assets/images/pokemon/normal/victini-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1400,
			scale: -7
		},
		power: {
			base: 7,
			scale: 7.7
		},
		critical: {
			base: 0,
			scale: 0.77
		},
		range: {
			base: 240,
			scale: 0,
			inner: 0,
		},
		rangeType: 'vShape',
		attackType: 'single',
		costScale: 'high',
		tiles: [1],	
	},
	mew: {
		id: 173,
		key: 'mew',
		name: [
		  'Mew',
		  'Mew',
		  'Mew',
		  'Mew',
		  'Mew',
		  'Mew',
		  'ミュウ',
		  '뮤',
		  '夢幻',
		  'Mew'
		],
		color: '#fda6bf',
		ability: abilityData['genesisAura'],
		projectileSound: 'beam2',
		projectileSpeed: 7,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/mew.png',
			image: './src/assets/images/pokemon/normal/mew-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 0,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 101,
			scale: 0.5,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 3, 4],	
	},
	marshadow: {
		id: 174,
		key: 'marshadow',
		name: [
		  'Marshadow',
		  'Marshadow',
		  'Marshadow',
		  'Marshadow',
		  'Marshadow',
		  'Marshadow',
		  'マーシャドー',
		  '마샤도',
		  '瑪夏多',
		  'Marshadow'
		],
		color: '#6a6a6e',
		ability: abilityData['technician'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/marshadow.png',
			image: './src/assets/images/pokemon/normal/marshadow-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -4
		},
		power: {
			base: 100,
			scale: 7
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],	
	},
	terrakion: {
		id: 175,
		key: 'terrakion',
		name: ['Terrakion', 'Terrakion', 'Terrakium', 'Terrakion', 'Terrakion', 'Terrakium', 'テラキオン', '테라키온', '代拉基翁', 'Terrakion'],
		color: '#cc682f',
		ability: abilityData['swordsDance'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['red4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/terrakion.png',
			image: './src/assets/images/pokemon/normal/terrakion-idle.png',
			frames: 8,
			hold: 7
		},
		speed: {
			base: 3250,
			scale: -10
		},
		power: {
			base: 10,
			scale: 6.5,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 135,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
	},
	cobalion: {
		id: 176,
		key: 'cobalion',
		name: ['Cobalion', 'Cobalion', 'Cobaltium', 'Cobalion', 'Cobalion', 'Kobalium', 'コバルオン', '코바르온', '勾帕路翁', 'Cobalion'],
		color: '#317b8b',
		ability: abilityData['heartOfSteel'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/cobalion.png',
			image: './src/assets/images/pokemon/normal/cobalion-idle.png',
			frames: 14,
			hold: 7
		},
		speed: {
			base: 4050,
			scale: -13
		},
		power: {
			base: 10,
			scale: 7.6,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 115,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
	},
	farfetchdGalar: {
		id: 177,
		key: 'farfetchdGalar',
		name: [
		  	'G.Farfetch’d',
		  	'Farfetch’d G.',
		  	'Canarticho G.',
		  	'Farfetch’d G.',
		  	'Farfetch’d G.',
		    'G-Porenta',
		    "ガラルのカモネギ",
			"가라르 파오리",
			"伽勒尔大葱鸭",
		  	'Farfetch’d G.',
		],
		color: '#e1dbdf',
		ability: abilityData['superCritical'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/farfetchdGalar.png',
			image: './src/assets/images/pokemon/normal/farfetchdGalar-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -10
		},
		power: {
			base: 7,
			scale: 2,
		},
		critical: {
			base: 0,
			scale: 0.5
		},
		range: {
			base: 110,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'sirfetchd',
			level: 50,
		},
	},
	sirfetchd: {
		id: 177,
		key: 'sirfetchd',
		name: [
		    "Sirfetch'd",
			"Sirfetch'd",
			"Palarticho",
			"Sirfetch'd",
			"Sirfetch'd",
			"Lauchzelot",
			"ネギガナイト",
			"창파나이트",
			"葱游兵",
			"Sirfetch'd"
		],
		color: '#c9d1d4',
		ability: abilityData['superCritical'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sirfetchd.png',
			image: './src/assets/images/pokemon/normal/sirfetchd-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1600,
			scale: -10
		},
		power: {
			base: 50,
			scale: 3.5,
		},
		critical: {
			base: 0,
			scale: 0.5
		},
		range: {
			base: 130,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
	},
	ironThorns: { // iman, siricha y fuego
		id: 178,
		key: 'ironThorns',
		name: [
			'Iron Thorns',
			'Ferropúas',
			'ÉpineDeFer',
			'Iron Thorns',
			'Spineferree',
			'Eisendorn',
			'テツノイバラ',
			'무쇠가시',
			'铁荆棘',
			'Iron Thorns',
		],
		color: '#70c04c',
		ability: abilityData['voltSurge'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/ironThorns.png',
			image: './src/assets/images/pokemon/normal/ironThorns-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 4000,
			scale: -25
		},
		power: {
			base: 10,
			scale: 4.9,
		},
		critical: {
			base: 5,
			scale: 0.45 
		},
		range: {
			base: 120,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
	},
	sandyShocks: {
		id: 179,
		key: 'sandyShocks',
		name: [
			'Sandy Shocks',
			'Pelarena',
			'PelageSablé',
			'Sandy Shocks',
			'Peldisabbia',
			'Sandfell',
			'スナノケガワ',
			'모래털가죽',
			'沙铁皮',
			'Sandy Shocks'
		],
		color: '#6c888d',
		ability: abilityData['aggressiveNature'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sandyShocks.png',
			image: './src/assets/images/pokemon/normal/sandyShocks-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 60000,
			scale: 0
		},
		power: {
			base: 10,
			scale: 2.4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0.4,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
	},
	dhelmise: {
		id: 180,
		key: 'dhelmise',
		name: [
		    'Dhelmise',
			'Dhelmise',
			'Sinistrail',
			'Dhelmise',
			'Dhelmise',
			'Moruda',
			'ダダリン',
			'타타륜',
			'破破舵轮',
			'Dhelmise'
		],
		color: '#499c91',
		ability: abilityData['anchorShot'],
		projectileSound: 'chain',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/dhelmise.png',
			image: './src/assets/images/pokemon/normal/dhelmise-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 3000, 
			scale: -10 
		},
		power: {
			base: 30,
			scale: 3.7, 
		},
		critical: {
			base: 10, 
			scale: 0
		},
		range: {
			base: 145,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [2, 3],
	},
	numel: {
		id: 181,
		key: 'numel',
		name: [
		    'Numel',
			'Numel',
			'Chamallot',
			'Numel',
			'Numel',
			'Camaub',
			'ドンメル',
			'둔타',
			'呆火驼',
			'Numel'
		],
		color: '#6dc34f',
		ability: abilityData['lavaPlume'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['red5'],
		bombardmentArea: 70,
		bombardmentSplash: 30,
		sprite: {
			base: './src/assets/images/pokemon/normal/numel.png',
			image: './src/assets/images/pokemon/normal/numel-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3500, 
			scale: -10 
		},
		power: {
			base: 25,
			scale: 3.7, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 150,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'bombardment',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'camerupt',
			level: 33
		},
	},
	camerupt: {
		id: 181,
		key: 'camerupt',
		name: [
		    'Camerupt',
			'Camerupt',
			'Camérupt',
			'Camerupt',
			'Camerupt',
			'Camerupt',
			'バクーダ',
			'폭타',
			'喷火驼',
			'Camerupt'
		],
		color: '#db5231',
		ability: abilityData['lavaPlume'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['red5'],
		bombardmentArea: 100,
		bombardmentSplash: 60,
		sprite: {
			base: './src/assets/images/pokemon/normal/camerupt.png',
			image: './src/assets/images/pokemon/normal/camerupt-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3200, 
			scale: -15 
		},
		power: {
			base: 100,
			scale: 16.5, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 180,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'bombardment',
		costScale: 'mid',
		tiles: [1, 4],
		mega: ['megaCamerupt']
	},
	megaCamerupt: {
		id: 181,
		key: 'megaCamerupt',
		name: ['M-camerupt', 'M-camerupt', 'M-camerupt', 'M-camerupt', 'M-camerupt', 'M-camerupt', "メガバクーダ", "메가 폭타", "超级喷火驼`", 'M-camerupt'],
		color: '#f0b620',
		ability: abilityData['volcanicKaboom'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		bombardmentArea: 400,
		bombardmentSplash: 90,
		projectile: projectileData['red5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaCamerupt.png',
			image: './src/assets/images/pokemon/normal/megaCamerupt-idle.png',
			frames: 4,
			hold: 9
		},
		speed: {
			base: 3200, 
			scale: -20
		},
		power: {
			base: 200,
			scale: 18, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 10,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'bombardment',
		costScale: 'mid',
		tiles: [1, 4],
		base: 'camerupt'
	},
	dreepy: {
		id: 182,
		key: 'dreepy',
		name: [
		    'Dreepy',
			'Dreepy',
			'Fantyrm',
			'Dreepy',
			'Dreepy',
			'Grolldra',
			'ドラメシヤ',
			'드라꼰',
			'多龙梅西亚',
			'Dreepy'
		],
		color: '#498477',
		ability: abilityData['dragonDarts'],
		projectileSound: 'area2',
		projectileSpeed: 7,
		projectile: projectileData['dreepy'],
		bombardmentArea: 45,
		bombardmentSplash: 12,
		sprite: {
			base: './src/assets/images/pokemon/normal/dreepy.png',
			image: './src/assets/images/pokemon/normal/dreepy-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 1500, 
			scale: -6 
		},
		power: {
			base: 5,
			scale: 1, 
		},
		critical: {
			base: 10, 
			scale: 0
		},
		range: {
			base: 150,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'bombardment',
		costScale: 'high',
		tiles: [1, 3, 4],
		evolution: {
			pokemon: 'drakloak',
			level: 50
		},
	},
	drakloak: {
		id: 182,
		key: 'drakloak',
		name: [
		    'Drakloak',
			'Drakloak',
			'Dispareptil',
			'Drakloak',
			'Drakloak',
			'Phandra',
			'ドロンチ',
			'드래런치',
			'多龙奇',
			'Drakloak'
		],
		color: '#dd556c',
		ability: abilityData['dragonDarts'],
		projectileSound: 'area2',
		projectileSpeed: 7,
		projectile: projectileData['dreepy'],
		bombardmentArea: 45,
		bombardmentSplash: 12,
		sprite: {
			base: './src/assets/images/pokemon/normal/drakloak.png',
			image: './src/assets/images/pokemon/normal/drakloak-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 1500, 
			scale: -10 
		},
		power: {
			base: 15,
			scale: 3, 
		},
		critical: {
			base: 15, 
			scale: 0
		},
		range: {
			base: 180,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'bombardment',
		costScale: 'high',
		tiles: [1, 3, 4],
		evolution: {
			pokemon: 'dragapult',
			level: 60
		},
	},
	dragapult: {
		id: 182,
		key: 'dragapult',
		name: [
		    'Dragapult',
			'Dragapult',
			'Lanssorien',
			'Dragapult',
			'Dragapult',
			'Katapuldra',
			'ドラパルト',
			'드래펄트',
			'多龙巴鲁托',
			'Dragapult'
		],
		color: '#58c0c1',
		ability: abilityData['dragonDarts'],
		projectileSound: 'area2',
		projectileSpeed: 7,
		projectile: projectileData['dreepy'],
		bombardmentArea: 45,
		bombardmentSplash: 12,
		sprite: {
			base: './src/assets/images/pokemon/normal/dragapult.png',
			image: './src/assets/images/pokemon/normal/dragapult-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1500, 
			scale: -10 
		},
		power: {
			base: 20,
			scale: 3.8, 
		},
		critical: {
			base: 20, 
			scale: 0
		},
		range: {
			base: 230,
			scale: 0.4,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'bombardment',
		costScale: 'high',
		tiles: [1, 3, 4],
	},
	porygon: {
		id: 183,
		key: 'porygon',
		name: [
			'Porygon', // inglés
			'Porygon', // español
			'Porygon', // francés
			'Porygon', // portugués
			'Porygon', // italiano
			'Porygon', // alemán
			'ポリゴン', // japonés
			'폴리곤', // coreano
			'多边兽', // chino
			'Porygon' // polaco
		],
		color: '#5bc2f5',
		ability: abilityData['triAttack'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		orbital: 3,
		projectile: projectileData['all1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/porygon.png',
			image: './src/assets/images/pokemon/normal/porygon-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 10,
			scale: 4,
		},
		critical: {
			base: 5, 
			scale: 0
		},
		range: {
			base: 90,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'orbital',
		costScale: 'high',
		tiles: [1],
		evolution: {
			pokemon: 'porygon2',
			level: 40
		}

	},
	porygon2: {
		id: 183,
		key: 'porygon2',
		name: [
			'Porygon2', // inglés
			'Porygon2', // español
			'Porygon2', // francés
			'Porygon2', // portugués
			'Porygon2', // italiano
			'Porygon2', // alemán
			'ポリゴン2', // japonés
			'폴리곤2', // coreano
			'多边兽Ⅱ', // chino
			'Porygon2' // polaco
		],
		color: '#f05e83',
		ability: abilityData['triAttack'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		orbital: 3,
		projectile: projectileData['all1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/porygon2.png',
			image: './src/assets/images/pokemon/normal/porygon2-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 50,
			scale: 7,
		},
		critical: {
			base: 15, 
			scale: 0
		},
		range: {
			base: 90,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'orbital',
		costScale: 'high',
		tiles: [1],
		evolution: {
			pokemon: 'porygonZ',
			level: 60
		}
	},
	porygonZ: {
		id: 183,
		key: 'porygonZ',
		name: [
			'Porygon-Z', // inglés
			'Porygon-Z', // español
			'Porygon-Z', // francés
			'Porygon-Z', // portugués
			'Porygon-Z', // italiano
			'Porygon-Z', // alemán
			'ポリゴンZ', // japonés
			'폴리곤Z', // coreano
			'多边兽乙型', // chino
			'Porygon-Z' // polaco
		],
		color: '#e0395d',
		ability: abilityData['triAttack'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		orbital: 3,
		projectile: projectileData['all1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/porygonZ.png',
			image: './src/assets/images/pokemon/normal/porygonZ-idle.png',
			frames: 16,
			hold: 5
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 50,
			scale: 9.5,
		},
		critical: {
			base: 20, 
			scale: 0
		},
		range: {
			base: 90,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'orbital',
		costScale: 'high',
		tiles: [1],
	},
	grubbin: {
		id: 184,
		key: 'grubbin',
		name: [
			'Grubbin', // inglés
			'Grubbin', // español
			'Larvibule', // francés
			'Grubbin', // portugués
			'Grubbin', // italiano
			'Mabula', // alemán
			'アゴジムシ', // japonés
			'턱지충이', // coreano
			'强颚鸡母虫', // chino
			'Grubbin' // polaco
		],
		color: '#ca6141',
		ability: abilityData['stickyWeb'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/grubbin.png',
			image: './src/assets/images/pokemon/normal/grubbin-idle.png',
			frames: 4,
			hold: 12
		},
		speed: {
			base: 6550,
			scale: -2 
		},
		power: {
			base: 5,
			scale: 0.5, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 90, 
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'charjabug',
			level: 20
		}
	},
	charjabug: {
		id: 184,
		key: 'charjabug',
		name: [
			'Charjabug', // inglés
			'Charjabug', // español
			'Chrysapile', // francés
			'Charjabug', // portugués
			'Charjabug', // italiano
			'Akkup', // alemán
			'デンヂムシ', // japonés
			'전지충이', // coreano
			'虫电宝', // chino
			'Charjabug' // polaco
		],
		color: '#659954',
		ability: abilityData['stickyWeb'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/charjabug.png',
			image: './src/assets/images/pokemon/normal/charjabug-idle.png',
			frames: 2,
			hold: 12
		},
		speed: {
			base: 6213,
			scale: -4 
		},
		power: {
			base: 28,
			scale: 3, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'vikavolt',
			level: 55
		}
	},
	vikavolt: {
		id: 184,
		key: 'vikavolt',
		name: [
			'Vikavolt', // inglés
			'Vikavolt', // español
			'Vikavolt', // francés
			'Vikavolt', // portugués
			'Vikavolt', // italiano
			'Donarion', // alemán
			'クワガノン', // japonés
			'투구뿌논', // coreano
			'锹农炮虫', // chino
			'Vikavolt ' // polaco
		],
		color: '#275f89',
		ability: abilityData['electroBall'],
		projectileSound: 'projectile1',
		projectileSpeed: 2,
		projectile: projectileData['yellow4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/vikavolt.png',
			image: './src/assets/images/pokemon/normal/vikavolt-idle.png',
			frames: 12,
			hold: 12
		},
		speed: {
			base: 6500,
			scale: -4
		},
		power: {
			base: 300,
			scale: 12,
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 370,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
	},
	calyrex: {
		id: 185,
		key: 'calyrex',
		name: [
			'Calyrex', // inglés
			'Calyrex', // español
			'Sylveroy', // francés
			'Calyrex', // portugués
			'Calyrex', // italiano
			'Coronospa', // alemán
			'バドレックス', // japonés
			'버드렉스', // coreano
			'蕾 冠王', // chino
			'Calyrex' // polaco
		],
		color: '#007766',
		ability: abilityData['unnerve'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/calyrex.png',
			image: './src/assets/images/pokemon/normal/calyrex-idle.png',
			frames: 8,
			hold: 12
		},
		speed: {
			base: 2000,
			scale: -5
		},
		power: {
			base: 100,
			scale: 8,
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2],
	},
	tropius: {
		id: 186,
		key: 'tropius',
		name: [
			'Tropius', // inglés
			'Tropius', // español
			'Tropius', // francés
			'Tropius', // portugués
			'Tropius', // italiano
			'Tropius', // alemán
			'トロピウス', // japonés
			'トロ피우스', // coreano
			'热带龙', // chino
			'Tropius' // polaco
		],
		color: '#5cb525',
		ability: abilityData['harvest'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/tropius.png',
			image: './src/assets/images/pokemon/normal/tropius-idle.png',
			frames: 12,
			hold: 12
		},
		speed: {
			base: 1500,
			scale: -6
		},
		power: {
			base: 20,
			scale: 9.75,
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 160,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
	},
	applin: {
		id: 187,
		key: 'applin',
		name: [
			'Applin', // inglés
			'Applin', // español
			'Verpom', // francés
			'Applin', // portugués
			'Applin', // italiano
			'Knapfel', // alemán
			'カジッチュ', // japonés
			'과사삭벌레', // coreano
			'啃果虫', // chino
			'Applin' // polaco
		],
		color: '#ea706e',
		ability: abilityData['gluttony'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/applin.png',
			image: './src/assets/images/pokemon/normal/applin-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 4000,
			scale: -2
		},
		power: {
			base: 10,
			scale: 2,
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'flapple',
			level: 60,
		},
	},
	flapple: { 
		id: 187,
		key: 'flapple',
		name: [
			'Flapple', // inglés
			'Flapple', // español
			'Pomdrapi', // francés
			'Flapple', // portugués
			'Flapple', // italiano
			'Drapfel', // alemán
			'アップリュー', // japonés
			'애프룡', // coreano
			'苹裹龙', // chino
			'Flapple' // polaco
		],
		color: '#c13330',
		ability: abilityData['ripen'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/flapple.png',
			image: './src/assets/images/pokemon/normal/flapple-idle.png',
			frames: 4,
			hold: 8
		},
		speed: {
			base: 2500,
			scale: -17
		},
		power: {
			base: 85,
			scale: 9,
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 180,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
		form: true
	},
	appletun: { 
		id: 187,
		key: 'appletun',
		name: [
			'Appletun', // inglés
			'Appletun', // español
			'Dratatin', // francés
			'Appletun', // portugués
			'Appletun', // italiano
			'Schlapfel', // alemán
			'タルップル', // japonés
			'단지래플', // coreano
			'丰蜜龙', // chino
			'Appletun' // polaco
		],
		color: '#5b8257',
		ability: abilityData['gluttony'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/appletun.png',
			image: './src/assets/images/pokemon/normal/appletun-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3600,
			scale: -15
		},
		power: {
			base: 50,
			scale: 18,
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 180,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
		form: true,
	},
	cutiefly: {
		id: 188,
		key: 'cutiefly',
		name: [
			'Cutiefly', // inglés
			'Cutiefly', // español
			'Bombydou', // francés
			'Cutiefly', // portugués
			'Cutiefly', // italiano
			'Wommel', // alemán
			'アブリー', // japonés
			'에블리', // coreano
			'萌虻', // chino
			'Cutiefly' // polaco
		],
		color: '#c5aa5d',
		ability: abilityData['honeyGather'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['yellow8'],
		sprite: {
			base: './src/assets/images/pokemon/normal/cutiefly.png',
			image: './src/assets/images/pokemon/normal/cutiefly-idle.png',
			frames: 12,
			hold: 12
		},
		speed: {
			base: 2200,
			scale: -4
		},
		power: {
			base: 5,
			scale: 2.5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'ribombee',
			level: 25
		},	
	},
	ribombee: {
		id: 188,
		key: 'ribombee',
		name: [
			'Ribombee', // inglés
			'Ribombee', // español
			'Rubombelle', // francés
			'Ribombee', // portugués
			'Ribombee', // italiano
			'Bandelby', // alemán
			'アブリボン', // japonés
			'에리본', // coreano
			'蝶结萌虻', // chino
			'Ribombee' // polaco
		],
		color: '#ddc153',
		ability: abilityData['honeyGather'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['yellow8'],
		sprite: {
			base: './src/assets/images/pokemon/normal/ribombee.png',
			image: './src/assets/images/pokemon/normal/ribombee-idle.png',
			frames: 12,
			hold: 9
		},
		speed: {
			base: 1800,
			scale: -8.5
		},
		power: {
			base: 20,
			scale: 6.4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],	
	},
	gossifleur: {
		id: 189,
		key: 'gossifleur',
		name: [
			'Gossifleur', // inglés
			'Gossifleur', // español
			'Tournicoton', // francés
			'Gossifleur', // portugués
			'Gossifleur', // italiano
			'Cottini', // alemán
			'ヒメンカ', // japonés
			'꼬모카', // coreano
			'幼棉棉', // chino
			'Gossifleur' // polaco
		],
		color: '#bb4335',
		ability: abilityData['pollenPuff'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['yellow7'],
		sprite: {
			base: './src/assets/images/pokemon/normal/gossifleur.png',
			image: './src/assets/images/pokemon/normal/gossifleur-idle.png',
			frames: 2,
			hold: 12
		},
		speed: {
			base: 3000,
			scale: -5.5
		},
		power: {
			base: 10,
			scale: 2.5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'eldegoss',
			level: 20
		},	
	},
	eldegoss: {
		id: 189,
		key: 'eldegoss',
		name: [
			'Eldegoss', // inglés
			'Eldegoss', // español
			'Blancoton', // francés
			'Eldegoss', // portugués
			'Eldegoss', // italiano
			'Bellcanto', // alemán
			'ワタシラガ', // japonés
			'백솜모카', // coreano
			'白蓬蓬', // chino
			'Eldegoss' // polaco
		],
		color: '#c6c44a',
		ability: abilityData['pollenPuff'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['yellow7'],
		sprite: {
			base: './src/assets/images/pokemon/normal/eldegoss.png',
			image: './src/assets/images/pokemon/normal/eldegoss-idle.png',
			frames: 4,
			hold: 9
		},
		speed: {
			base: 3000,
			scale: -8.5
		},
		power: {
			base: 40,
			scale: 5.6,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 160,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],	
	},
	volbeat: {
		id: 190,
		key: 'volbeat',
		name: ['volbeat', 'volbeat', 'Muciole', 'volbeat', 'volbeat', 'Volbeat', 'バルビート', '볼비트', '亮闪虫', 'volbeat'],
		color: '#c22a01',
		ability: abilityData['signalBeam'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['yellow7'],
		sprite: {
			base: './src/assets/images/pokemon/normal/volbeat.png',
			image: './src/assets/images/pokemon/normal/volbeat-idle.png',
			frames: 8,
			hold: 9
		},
		speed: {
			base: 2000,
			scale: -5
		},
		power: {
			base: 10,
			scale: 3.9,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0.5,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],	
	},
	illumise: {
		id: 191,
		key: 'illumise',
		name: ['illumise', 'illumise', 'Lumivole', 'illumise', 'illumise', 'Illumise', 'イルミーゼ', '일루미제', '蜜光虫', 'illumise'],
		color: '#b57dbb',
		ability: abilityData['signalBeam'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['yellow7'],
		sprite: {
			base: './src/assets/images/pokemon/normal/illumise.png',
			image: './src/assets/images/pokemon/normal/illumise-idle.png',
			frames: 2,
			hold: 9
		},
		speed: {
			base: 3000,
			scale: 0
		},
		power: {
			base: 10,
			scale: 4.9,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],	
	},
	spheal: {
		id: 192,
		key: 'spheal',
		name: [
			'Spheal', // inglés
			'Spheal', // español
			'Obalie', // francés
			'Spheal', // portugués
			'Spheal', // italiano
			'Seemops', // alemán
			'タマザラシ', // japonés
			'대굴레오', // coreano
			'海豹球', // chino
			'Spheal' // polaco
		],
		color: '#80cfff',
		ability: abilityData['iceBeam'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/spheal.png',
			image: './src/assets/images/pokemon/normal/spheal-idle.png',
			frames: 6,
			hold: 9
		},
		speed: {
			base: 1950,
			scale: -2
		},
		power: {
			base: 10,
			scale: 4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],	
		evolution: {
			pokemon: 'sealeo',
			level: 32
		},
	},
	sealeo: {
		id: 192,
		key: 'sealeo',
		name: [
			'Sealeo', // inglés
			'Sealeo', // español
			'Phogleur', // francés
			'Sealeo', // portugués
			'Sealeo', // italiano
			'Seejong', // alemán
			'トドグラー', // japonés
			'씨레오', // coreano
			'海魔狮', // chino
			'Sealeo' // polaco
		],
		color: '#22a0e7',
		ability: abilityData['iceBeam'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sealeo.png',
			image: './src/assets/images/pokemon/normal/sealeo-idle.png',
			frames: 4,
			hold: 9
		},
		speed: {
			base: 1750,
			scale: -2
		},
		power: {
			base: 20,
			scale: 4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],	
		evolution: {
			pokemon: 'walrein',
			level: 44
		},
	},
	walrein: {
		id: 192,
		key: 'walrein',
		name: [
			'Walrein', // inglés
			'Walrein', // español
			'Kaimorse', // francés
			'Walrein', // portugués
			'Walrein', // italiano
			'Walraisa', // alemán
			'トドゼルガ', // japonés
			'씨카이저', // coreano
			'帝牙海狮', // chino
			'Walrein' // polaco
		],
		color: '#0166b4',
		ability: abilityData['iceBeam'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/walrein.png',
			image: './src/assets/images/pokemon/normal/walrein-idle.png',
			frames: 8,
			hold: 9
		},
		speed: {
			base: 1550,
			scale: -2
		},
		power: {
			base: 50,
			scale: 5.9,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 160,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],	
	},
	piplup: {
		id: 193,
		key: 'piplup',
		name: [
			'Piplup', // inglés
			'Piplup', // español
			'Tiplouf', // francés
			'Piplup', // portugués
			'Piplup', // italiano
			'Plinfa', // alemán
			'ポッチャマ', // japonés
			'팽도리', // coreano
			'波加曼', // chino
			'Piplup' // polaco
		],
		color: '#8095b3',
		ability: abilityData['waterSpout'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/piplup.png',
			image: './src/assets/images/pokemon/normal/piplup-idle.png',
			frames: 6,
			hold: 9
		},
		speed: {
			base: 3000,
			scale: -3
		},
		power: {
			base: 10,
			scale: 2.6,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 3],	
		evolution: {
			pokemon: 'prinplup',
			level: 16
		},
	},
	prinplup: {
		id: 193,
		key: 'prinplup',
		name: [
			'Prinplup', // inglés
			'Prinplup', // español
			'Prinplouf', // francés
			'Prinplup', // portugués
			'Prinplup', // italiano
			'Pliprin', // alemán
			'ポッタイシ', // japonés
			'팽태자', // coreano
			'波皇子', // chino
			'Prinplup' // polaco
		],
		color: '#669ada',
		ability: abilityData['waterSpout'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/prinplup.png',
			image: './src/assets/images/pokemon/normal/prinplup-idle.png',
			frames: 8,
			hold: 9
		},
		speed: {
			base: 3000,
			scale: -5.5
		},
		power: {
			base: 20,
			scale: 3.6,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 145,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 3],	
		evolution: {
			pokemon: 'empoleon',
			level: 36
		},
	},
	empoleon: {
		id: 193,
		key: 'empoleon',
		name: [
			'Empoleon', // inglés
			'Empoleon', // español
			'Pingoléon', // francés
			'Empoleon', // portugués
			'Empoleon', // italiano
			'Impoleon', // alemán
			'エンペルト', // japonés
			'엠페르트', // coreano
			'帝王拿波', // chino
			'Empoleon' // polaco
		],
		color: '#4a9dc2',
		ability: abilityData['waterSpout'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/empoleon.png',
			image: './src/assets/images/pokemon/normal/empoleon-idle.png',
			frames: 4,
			hold: 9
		},
		speed: {
			base: 3000,
			scale: -11
		},
		power: {
			base: 40,
			scale: 8.6,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 160,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 3],	
	},
	gible: {
		id: 194,
		key: 'gible',
		name: [
			'Gible', // inglés
			'Gible', // español
			'Griknot', // francés
			'Gible', // portugués
			'Gible', // italiano
			'Kaumalat', // alemán
			'フカマル', // japonés
			'딥상어동', // coreano
			'圆陆鲨', // chino
			'Gible' // polaco
		],
		color: '#7dbcc4',
		ability: abilityData['sandVeil'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/gible.png',
			image: './src/assets/images/pokemon/normal/gible-idle.png',
			frames: 4,
			hold: 9
		},
		speed: {
			base: 3200,
			scale: -5
		},
		power: {
			base: 10,
			scale: 4,
		},
		critical: {
			base: 10,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],	
		evolution: {
			pokemon: 'gabite',
			level: 24
		},
	},
	gabite: {
		id: 194,
		key: 'gabite',
		name: [
			'Gabite', // inglés
			'Gabite', // español
			'Carmache', // francés
			'Gabite', // portugués
			'Gabite', // italiano
			'Knarksel', // alemán
			'ガバイト', // japonés
			'한바이트', // coreano
			'尖牙陆鲨', // chino
			'Gabite' // polaco
		],
		color: '#3f77c7',
		ability: abilityData['sandVeil'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/gabite.png',
			image: './src/assets/images/pokemon/normal/gabite-idle.png',
			frames: 6,
			hold: 9
		},
		speed: {
			base: 3200,
			scale: -10
		},
		power: {
			base: 20,
			scale: 7,
		},
		critical: {
			base: 10,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],	
		evolution: {
			pokemon: 'garchomp',
			level: 48
		},
	},
	garchomp: {
		id: 194,
		key: 'garchomp',
		name: [
			'Garchomp', // inglés
			'Garchomp', // español
			'Carchacrok', // francés
			'Garchomp', // portugués
			'Garchomp', // italiano
			'Knakrack', // alemán
			'ガブリアス', // japonés
			'한카리아스', // coreano
			'烈咬陆鲨', // chino
			'Garchomp' // polaco
		],
		color: '#618ad2',
		ability: abilityData['sandVeil'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/garchomp.png',
			image: './src/assets/images/pokemon/normal/garchomp-idle.png',
			frames: 6,
			hold: 9
		},
		speed: {
			base: 3200,
			scale: -20
		},
		power: {
			base: 100,
			scale: 14.6,
		},
		critical: {
			base: 30,
			scale: 0
		},
		range: {
			base: 155,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],	
	},
	grookey: {
		id: 195,
		key: 'grookey',
		name: [
			'Grookey', // inglés
			'Grookey', // español
			'Ouistempo', // francés
			'Grookey', // portugués
			'Grookey', // italiano
			'Chimpep', // alemán
			'サルノリ', // japonés
			'흥나숭', // coreano
			'敲音猴', // chino
			'Grookey' // polaco
		],
		color: '#9cdb76',
		ability: abilityData['drumBeating'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/grookey.png',
			image: './src/assets/images/pokemon/normal/grookey-idle.png',
			frames: 2,
			hold: 9
		},
		speed: {
			base: 4650,
			scale: -1
		},
		power: {
			base: 10,
			scale: 2.5
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],	
		evolution: {
			pokemon: 'thwackey',
			level: 16
		},
	},
	thwackey: {
		id: 195,
		key: 'thwackey',
		name: [
			'Thwackey', // inglés
			'Thwackey', // español
			'Badabouin', // francés
			'Thwackey', // portugués
			'Thwackey', // italiano
			'Chimstix', // alemán
			'バチンキー', // japonés
			'채키몽', // coreano
			'啪咚猴', // chino
			'Thwackey' // polaco
		],
		color: '#8f9737',
		ability: abilityData['drumBeating'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/thwackey.png',
			image: './src/assets/images/pokemon/normal/thwackey-idle.png',
			frames: 11,
			hold: 9
		},
		speed: {
			base: 4500,
			scale: -2
		},
		power: {
			base: 30,
			scale: 3
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],	
		evolution: {
			pokemon: 'rillaboom',
			level: 35
		},
	},
	rillaboom: {
		id: 195,
		key: 'rillaboom',
		name: [
			'Rillaboom', // inglés
			'Rillaboom', // español
			'Gorythmic', // francés
			'Rillaboom', // portugués
			'Rillaboom', // italiano
			'Gortrom', // alemán
			'ゴリランダー', // japonés
			'고릴타', // coreano
			'轰擂金刚猩', // chino
			'Rillaboom' // polaco
		],
		color: '#58a05e',
		ability: abilityData['drumBeating'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/rillaboom.png',
			image: './src/assets/images/pokemon/normal/rillaboom-idle.png',
			frames: 16,
			hold: 9
		},
		speed: {
			base: 4000,
			scale: -10
		},
		power: {
			base: 50,
			scale: 3.5
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],	
	},
	sneaselHisui: {
		id: 196,
		key: 'sneaselHisui',
		name: [
			'H. Sneasel', // inglés
			'Sneasel H.', // español
			'Farfuret H.', // francés
			'Sneasel H.', // portugués
			'Sneasel H.', // italiano
			'H-Sniebel', // alemán
			'ニューラ H.', // japonés
			'포푸니 H.', // coreano
			'狃拉 H.', // chino
			'H. Sneasel' // polaco
		],
		color: '#9c5ee0',
		ability: abilityData['direClaw'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sneaselHisui.png',
			image: './src/assets/images/pokemon/normal/sneaselHisui-idle.png',
			frames: 7,
			hold: 13
		},
		speed: {
			base: 1500,
			scale: -1
		},
		power: {
			base: 7,
			scale: 3,
		},
		critical: {
			base: 5,
			scale: 0.5
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'sneasler',
			level: 40
		},	
	},
	sneasler: {
		id: 196,
		key: 'sneasler',
		name: [
			'Sneasler', // inglés
			'Sneasler', // español
			'Farfurex', // francés
			'Sneasler', // portugués
			'Sneasler', // italiano
			'Snieboss', // alemán
			'オオニューラ', // japonés
			'포푸니크', // coreano
			'大狃拉', // chino
			'Sneasler' // polaco
		],
		color: '#c63770',
		ability: abilityData['direClaw'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sneasler.png',
			image: './src/assets/images/pokemon/normal/sneasler-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1300,
			scale: -2
		},
		power: {
			base: 25,
			scale: 4,
		},
		critical: {
			base: 5,
			scale: 0.8
		},
		range: {
			base: 115,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	heatmor: {
		id: 197,
		key: 'heatmor',
		name: ['Heatmor', 'Heatmor', 'Aflamanoir', 'Heatmor', 'Heatmor', 'Furnifraß', 'クイタラン', '앤티골', '熔蟻獸', 'Heatmor'],
		color: '#a44421',
		ability: abilityData['fireLash'],
		projectileSound: 'area2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/heatmor.png',
			image: './src/assets/images/pokemon/normal/heatmor-idle.png',
			imageBonus: './src/assets/images/pokemon/normal/heatmor-bonus.png',
			frames: 6,
			framesBonus: 10,
			hold: 8
		},
		speed: {
			base: 3400,
			scale: -4
		},
		power: {
			base: 20,
			scale: 10.8,
		},
		critical: {
			base: 5,
			scale: 0.2
		},
		range: {
			base: 115,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	durant: {
		id: 198,
		key: 'durant',
		name: ['Durant', 'Durant', 'Fermite', 'Durant', 'Durant', 'Fermicula', 'アイアント', '아이앤트', '鐵蟻', 'Durant'],
		color: '#b8b6b6',
		ability: abilityData['bugBite'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/durant.png',
			image: './src/assets/images/pokemon/normal/durant-idle.png',
			imageBonus: './src/assets/images/pokemon/normal/durant-bonus.png',
			frames: 4,
			framesBonus: 10,
			hold: 8
		},
		speed: {
			base: 600,
			scale: -3
		},
		power: {
			base: 10,
			scale: 3.4,
		},
		critical: {
			base: 10,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	scyther: {
		id: 199,
		key: 'scyther',
		name: [
			'Scyther', // inglés
			'Scyther', // español
			'Insécateur', // francés
			'Scyther', // portugués
			'Scyther', // italiano
			'Sichlor', // alemán
			'ストライク', // japonés
			'스라크', // coreano
			'飞天螳螂', // chino
			'Scyther' // polaco
		],
		color: '#62b43e',
		ability: abilityData['uTurn'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/scyther.png',
			image: './src/assets/images/pokemon/normal/scyther-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -2
		},
		power: {
			base: 10,
			scale: 7.4,
		},
		critical: {
			base: 15,
			scale: 0.6
		},
		range: {
			base: 155,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
		form: true
	},
	scizor: {
		id: 199,
		key: 'scizor',
		name: [
			`Scizor`, // inglés
			`Scizor`, // español
			`Cizayox`, // francés
			`Scizor`, // portugués
			`Scizor`, // italiano
			`Scherox`, // alemán
			`ハッサム`, // japonés
			`핫삼`, // coreano
			`巨钳螳螂`, // chino
			`Scizor` // polaco
		],
		color: '#bc2206',
		ability: abilityData['bulletPunch'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/scizor.png',
			image: './src/assets/images/pokemon/normal/scizor-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -2
		},
		power: {
			base: 10,
			scale: 7.4,
		},
		critical: {
			base: 10,
			scale: 0.3
		},
		range: {
			base: 155,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
		form: true,
		mega: ['megaScizor']
	},
	megaScizor: {
		id: 199,
		key: 'megaScizor',
		name: [
			`M-Scizor`, // inglés
			`M-Scizor`, // español
			`M-Cizayox`, // francés
			`M-Scizor`, // portugués
			`M-Scizor`, // italiano
			`M-Scherox`, // alemán
			`メガハッサム`, // japonés
			`메가 핫삼`, // coreano
			`超级巨钳螳螂`, // chino
			`M-Scizor` // polaco
		],
		color: '#cd3c00',
		ability: abilityData['bulletPunchMega'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaScizor.png',
			image: './src/assets/images/pokemon/normal/megaScizor-idle.png',
			frames: 6,
			hold: 10
		},
		speed: {
			base: 1000,
			scale: -2
		},
		power: {
			base: 100,
			scale: 7.5,
		},
		critical: {
			base: 10,
			scale: 0.4
		},
		range: {
			base: 155,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
		form: true,
		base: 'scizor'
	},
	diglett: {
		id: 200,
		key: 'diglett',
		name: [
			'Diglett', // inglés
			'Diglett', // español
			'Taupiqueur', // francés
			'Diglett', // portugués
			'Diglett', // italiano
			'Digda', // alemán
			'ディグダ', // japonés
			'디그다', // coreano
			'地鼠', // chino
			'Diglett' // polaco
		],
		color: '#9f581c',
		ability: abilityData['sandForce'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/diglett.png',
			image: './src/assets/images/pokemon/normal/diglett-idle.png',
			frames: 2,
			hold: 5
		},
		speed: {
			base: 1150,
			scale: -5
		},
		power: {
			base: 5,
			scale: 1,
		},
		critical: {
			base: 0,
			scale: 0.2
		},
		range: {
			base: 100,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'dugtrio',
			level: 26,
		},	
	},
	dugtrio: {
		id: 200,
		key: 'dugtrio',
		name: [
			'Dugtrio', // inglés
			'Dugtrio', // español
			'Triopikeur', // francés
			'Dugtrio', // portugués
			'Dugtrio', // italiano
			'Digdri', // alemán
			'ダグトリオ', // japonés
			'닥트리오', // coreano
			'三地鼠', // chino
			'Dugtrio' // polaco
		],
		color: '#b96318',
		ability: abilityData['sandForce'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/dugtrio.png',
			image: './src/assets/images/pokemon/normal/dugtrio-idle.png',
			frames: 2,
			hold: 5
		},
		speed: {
			base: 1050,
			scale: -8
		},
		power: {
			base: 0,
			scale: 3,
		},
		critical: {
			base: 0,
			scale: 0.3
		},
		range: {
			base: 115,
			scale: 0.15,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	snorlax: {
		id: 201,
		key: 'snorlax',
		name: [
			'Snorlax', // inglés
			'Snorlax', // español
			'Ronflex', // francés
			'Snorlax', // portugués
			'Snorlax', // italiano
			'Relaxo', // alemán
			'カビゴン', // japonés
			'잠만보', // coreano
			'卡比兽', // chino
			'Snorlax' // polaco
		],
		color: '#7e8e96',
		ability: abilityData['rest'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red2'],
		sprite: {
			base: './src/assets/images/pokemon/normal/snorlax.png',
			image: './src/assets/images/pokemon/normal/snorlax-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 10000,
			scale: 0
		},
		power: {
			base: 0,
			scale: 25,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 140, 
			scale: 0.6,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1],
	},
	weedle: {
		id: 202,
		key: 'weedle',
		name: [
			'Weedle', // inglés
			'Weedle', // español
			'Aspicot', // francés
			'Weedle', // portugués
			'Weedle', // italiano
			'Hornliu', // alemán
			'ビードル', // japonés
			'뿔충이', // coreano
			'独角虫', // chino
			'Weedle' // polaco
		],
		color: '#c0671b',
		ability: abilityData['twineedle'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/weedle.png',
			image: './src/assets/images/pokemon/normal/weedle-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3000,
			scale: -3
		},
		power: {
			base: 1,
			scale: 1,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 140, 
			scale: 0,
			inner: 0,
		},
		rangeType: 'xShape',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'kakuna',
			level: 7,
		},	
	},
	kakuna: {
		id: 202,
		key: 'kakuna',
		name: [
			'Kakuna', // inglés
			'Kakuna', // español
			'Coconfort', // francés
			'Kakuna', // portugués
			'Kakuna', // italiano
			'Kokuna', // alemán
			'コクーン', // japonés
			'딱충이', // coreano
			'铁壳蛹', // chino
			'Kakuna' // polaco
		],
		color: '#ddb201',
		ability: abilityData['twineedle'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/kakuna.png',
			image: './src/assets/images/pokemon/normal/kakuna-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 3000,
			scale: -4
		},
		power: {
			base: 1,
			scale: 2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 160, 
			scale: 0,
			inner: 0,
		},
		rangeType: 'xShape',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'beedrill',
			level: 10,
		},	
	},
	beedrill: {
		id: 202,
		key: 'beedrill',
		name: [
			'Beedrill', // inglés
			'Beedrill', // español
			'Dardargnan', // francés
			'Beedrill', // portugués
			'Beedrill', // italiano
			'Bibor', // alemán
			'スピアー', // japonés
			'독침붕', // coreano
			'大针蜂', // chino
			'Beedrill' // polaco
		],
		color: '#b9caf2',
		ability: abilityData['twineedle'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/beedrill.png',
			image: './src/assets/images/pokemon/normal/beedrill-idle.png',
			frames: 12,
			hold: 15
		},
		speed: {
			base: 900,
			scale: -1
		},
		power: {
			base: 30,
			scale: 3.2,
		},
		critical: {
			base: 50,
			scale: 0
		},
		range: {
			base: 250, 
			scale: 0.5,
			inner: 0,
		},
		rangeType: 'xShape',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		mega: ['megaBeedrill']
	},
	megaBeedrill: {
		id: 202,
		key: 'megaBeedrill',
		name: [
			`M-Beedrill`, // inglés
			`M-Beedrill`, // español
			`M-Dardargnan`, // francés
			`M-Beedrill`, // portugués
			`M-Beedrill`, // italiano
			`M-Bibor`, // alemán
			`メガスピアー`, // japonés
			`메가 독침붕`, // coreano
			`超级大针蜂`, // chino
			`M-Beedrill` // polaco
		],
		color: '#c1aa00',
		ability: abilityData['twineedleMega'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaBeedrill.png',
			image: './src/assets/images/pokemon/normal/megaBeedrill-idle.png',
			frames: 4,
			hold: 10
		},
		speed: {
			base: 900,
			scale: -1
		},
		power: {
			base: 80,
			scale: 3.2,
		},
		critical: {
			base: 50,
			scale: 0
		},
		range: {
			base: 250, 
			scale: 0.5,
			inner: 0,
		},
		rangeType: 'star',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		base: 'beedrill'
	},
	bellsprout: {
		id: 203,
		key: 'bellsprout',
		name: [
			'Bellsprout', // inglés
			'Bellsprout', // español
			'Chétiflor', // francés
			'Bellsprout', // portugués
			'Bellsprout', // italiano
			'Knofensa', // alemán
			'マダツボミ', // japonés
			'모다피', // coreano
			'喇叭芽', // chino
			'Bellsprout' // polaco
		],
		color: '#65b333',
		ability: abilityData['sludgeBomb'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['green6'],
		bombardmentArea: 85,
		bombardmentSplash: 40,
		sprite: {
			base: './src/assets/images/pokemon/normal/bellsprout.png',
			image: './src/assets/images/pokemon/normal/bellsprout-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 4500, 
			scale: -8 
		},
		power: {
			base: 25,
			scale: 3.7, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'bombardment',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'weepinbell',
			level: 21,
		},	
	},
	weepinbell: {
		id: 203,
		key: 'weepinbell',
		name: [
			'Weepinbell', // inglés
			'Weepinbell', // español
			'Boustiflor', // francés
			'Weepinbell', // portugués
			'Weepinbell', // italiano
			'Ultrigaria', // alemán
			'ウツドン', // japonés
			'우츠동', // coreano
			'口呆花', // chino
			'Weepinbell' // polaco
		],
		color: '#e0ba12',
		ability: abilityData['sludgeBomb'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['green6'],
		bombardmentArea: 85,
		bombardmentSplash: 50,
		sprite: {
			base: './src/assets/images/pokemon/normal/weepinbell.png',
			image: './src/assets/images/pokemon/normal/weepinbell-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3900,
			scale: -10
		},
		power: {
			base: 30,
			scale: 14.7,
		},
		critical: {
			base: 0,
			scale: 0.25
		},
		range: {
			base: 120, 
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'bombardment',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'victreebel',
			level: 40,
		},	
	},
	victreebel: {
		id: 203,
		key: 'victreebel',
		name: [
			'Victreebel', // inglés
			'Victreebel', // español
			'Empiflor', // francés
			'Victreebel', // portugués
			'Victreebel', // italiano
			'Sarzenia', // alemán
			'ウツボット', // japonés
			'우츠보트', // coreano
			'大食花', // chino
			'Victreebel' // polaco
		],
		color: '#3a990f',
		ability: abilityData['sludgeBomb'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['green6'],
		bombardmentArea: 85,
		bombardmentSplash: 60,
		sprite: {
			base: './src/assets/images/pokemon/normal/victreebel.png',
			image: './src/assets/images/pokemon/normal/victreebel-idle.png',
			frames: 9,
			hold: 15
		},
		speed: {
			base: 3500, 
			scale: -12 
		},
		power: {
			base: 100,
			scale: 14.5, 
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 120,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'bombardment',
		costScale: 'mid',
		tiles: [1, 2],	
	},
	shellder: {
		id: 204,
		key: 'shellder',
		name: [
			'Shellder', // inglés
			'Shellder', // español
			'Kokiyas', // francés
			'Shellder', // portugués
			'Shellder', // italiano
			'Muschas', // alemán
			'シェルダー', // japonés
			'셀러', // coreano
			'大舌贝', // chino
			'Shellder' // polaco
		],
		color: '#ab88d5',
		ability: abilityData['icicleSpear'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		projectile: projectileData['blue7'],
		sprite: {
			base: './src/assets/images/pokemon/normal/shellder.png',
			image: './src/assets/images/pokemon/normal/shellder-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 4200,
			scale: -2
		},
		power: {
			base: 5,
			scale: 2.7,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 140, 
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [3],
		evolution: {
			pokemon: 'cloyster',
			level: 45,
		},	
	},
	cloyster: {
		id: 204,
		key: 'cloyster',
		name: [
			'Cloyster', // inglés
			'Cloyster', // español
			'Crustabri', // francés
			'Cloyster', // portugués
			'Cloyster', // italiano
			'Austos', // alemán
			'パルシェン', // japonés
			'파르셀', // coreano
			'刺甲贝', // chino
			'Cloyster' // polaco
		],
		color: '#914c94',
		ability: abilityData['icicleSpear'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		projectile: projectileData['blue7'],
		sprite: {
			base: './src/assets/images/pokemon/normal/cloyster.png',
			image: './src/assets/images/pokemon/normal/cloyster-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 4000,
			scale: -15
		},
		power: {
			base: 30,
			scale: 8.7,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 140, 
			scale: 0.4,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [3],
	},
	rattata: {
		id: 205,
		key: 'rattata',
		name: [
			'Rattata', // inglés
			'Rattata', // español
			'Rattata', // francés
			'Rattata', // portugués
			'Rattata', // italiano
			'Rattfratz', // alemán
			'コラッタ', // japonés
			'꼬렛', // coreano
			'小拉达', // chino
			'Rattata' // polaco
		],
		color: '#8d64be',
		ability: abilityData['focusEnergy'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/rattata.png',
			image: './src/assets/images/pokemon/normal/rattata-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -5
		},
		power: {
			base: 5,
			scale: 2,
		},
		critical: {
			base: 0,
			scale: 0.
		},
		range: {
			base: 120, 
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'raticate',
			level: 20,
		},	
	},
	raticate: {
		id: 205,
		key: 'raticate',
		name: [
			'Raticate', // inglés
			'Raticate', // español
			'Rattatac', // francés
			'Raticate', // portugués
			'Raticate', // italiano
			'Rattikarl', // alemán
			'ラッタ', // japonés
			'레트라', // coreano
			'拉达', // chino
			'Raticate' // polaco
		],
		color: '#ca6916',
		ability: abilityData['focusEnergy'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/raticate.png',
			image: './src/assets/images/pokemon/normal/raticate-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1500,
			scale: -9
		},
		power: {
			base: 15,
			scale: 4.6,
		},
		critical: {
			base: 0,
			scale: 0.
		},
		range: {
			base: 160, 
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],	
	},
	pumpkaboo: {
		id: 206,
		key: 'pumpkaboo',
		name: [
			'Pumpkaboo', // inglés
			'Pumpkaboo', // español
			'Pitrouille', // francés
			'Pumpkaboo', // portugués
			'Pumpkaboo', // italiano
			'Irrbis', // alemán
			'バケッチャ', // japonés
			'호바귀', // coreano
			'南瓜精', // chino
			'Pumpkaboo' // polaco
		],
		color: '#cf6b3b',
		ability: abilityData['trickOrTreat'],
		projectileSound: 'projectile1',
		projectileSpeed: 5,
		projectile: projectileData['candy'],
		sprite: {
			base: './src/assets/images/pokemon/normal/pumpkaboo.png',
			image: './src/assets/images/pokemon/normal/pumpkaboo-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 4500,
			scale: -3
		},
		power: {
			base: 15,
			scale: 5.5,
		},
		critical: {
			base: 0,
			scale: 0.15
		},
		range: {
			base: 120, 
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'gourgeist',
			level: 66,
		},	
	},
	gourgeist: {
		id: 206,
		key: 'gourgeist',
		name: [
			'Gourgeist', // inglés
			'Gourgeist', // español
			'Banshitrouye', // francés
			'Gourgeist', // portugués
			'Gourgeist', // italiano
			'Pumpdjinn', // alemán
			'パンプジン', // japonés
			'펌킨인', // coreano
			'南瓜怪人', // chino
			'Gourgeist' // polaco
		],
		color: '#bf6f65',
		ability: abilityData['trickOrTreat'],
		projectileSound: 'projectile1',
		projectileSpeed: 5,
		projectile: projectileData['spinarak'],
		sprite: {
			base: './src/assets/images/pokemon/normal/gourgeist.png',
			image: './src/assets/images/pokemon/normal/gourgeist-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 3600,
			scale: -8
		},
		power: {
			base: 50,
			scale: 14.5,
		},
		critical: {
			base: 0,
			scale: 0.25
		},
		range: {
			base: 140, 
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],	
	},
	shaymin: {
		id: 207,
		key: 'shaymin',
		name: ['shaymin', 'shaymin', 'Shaymin', 'shaymin', 'shaymin', 'Shaymin', 'シェイミ', '쉐이미', '仙子精灵', 'shaymin'],
		color: '#d98c9e',
		ability: abilityData['seedFlare'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/shaymin.png',
			image: './src/assets/images/pokemon/normal/shaymin-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -10
		},
		power: {
			base: 20,
			scale: 2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 145, 
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2],	
	},
	celebi: {
		id: 208,
		key: 'celebi',
		name: ['celebi', 'celebi', 'Célébi', 'celebi', 'celebi', 'Celebi', 'セレビィ', '세레비', '时拉比', 'celebi'],
		color: '#80c04f',
		ability: abilityData['timeWarp'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/celebi.png',
			image: './src/assets/images/pokemon/normal/celebi-idle.png',
			frames: 8,
			hold: 6
		},
		speed: {
			base: 1000,
			scale: -4
		},
		power: {
			base: 50,
			scale: 11,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100, 
			scale: 0.4,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2],	
	},
	lunala: {
		id: 209,
		key: 'lunala',
		name: ['lunala', 'lunala', 'Lunala', 'lunala', 'lunala', 'Lunala', 'ルナアラ', '루나라', '月亮伊布', 'lunala'],
		color: '#b589d1',
		ability: abilityData['moongeistBeam'],
		projectileSound: 'beam3',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/lunala.png',
			image: './src/assets/images/pokemon/normal/lunala-idle.png',
			frames: 4,
			hold: 8
		},
		speed: {
			base: 7000,
			scale: -1
		},
		power: {
			base: 30,
			scale: 2.2,
		},
		critical: {
			base: 20,
			scale: 0
		},
		range: {
			base: 300,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],	
	},
	zapdos: {
		id: 210,
		key: 'zapdos',
		name: ['zapdos', 'zapdos', 'Électhor', 'zapdos', 'zapdos', 'Zapdos', 'サンダー', '썬더', '闪电鸟', 'zapdos'],
		color: '#c29d0b',
		ability: abilityData['discharge'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/zapdos.png',
			image: './src/assets/images/pokemon/normal/zapdos-idle.png',
			frames: 4,
			hold: 8
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 0,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0.4,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'aura',
		costScale: 'high',
		tiles: [1, 4],	
	},
	moltres: {
		id: 211,
		key: 'moltres',
		name: ['moltres', 'moltres', 'Sulfura', 'moltres', 'moltres', 'Lavados', 'ファイヤー', '파이어', '火焰鸟', 'moltres'],
		color: '#d23906',
		ability: abilityData['flameBody'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/moltres.png',
			image: './src/assets/images/pokemon/normal/moltres-idle.png',
			frames: 4,
			hold: 8
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 0,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0.4,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'aura',
		costScale: 'high',
		tiles: [1, 4],	
	},
	articuno: {
		id: 212,
		key: 'articuno',
		name: ['articuno', 'articuno', 'Artikodin', 'articuno', 'articuno', 'Arktos', 'フリーザー', '프리저', '急冻鸟', 'articuno'],
		color: '#189ce7',
		ability: abilityData['blizzard'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/articuno.png',
			image: './src/assets/images/pokemon/normal/articuno-idle.png',
			frames: 4,
			hold: 8
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 0,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0.4,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'aura',
		costScale: 'high',
		tiles: [1, 3, 4],	
	},
	regirock: {
		id: 213,
		key: 'regirock',
		name: ['regirock', 'regirock', 'Regirock', 'regirock', 'regirock', 'Regirock', 'レジロック', '레지락', '雷吉洛克', 'regirock'],
		color: '#d5a25e',
		ability: abilityData['sturdy'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/regirock.png',
			image: './src/assets/images/pokemon/normal/regirock-idle.png',
			frames: 7,
			hold: 8
		},
		speed: {
			base: 3000,
			scale: -5
		},
		power: {
			base: 10,
			scale: 6.5,
		},
		critical: {
			base: 25,
			scale: 0.25
		},
		range: {
			base: 100,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],	
	},
	groudon: {
		id: 214,
		key: 'groudon',
		name: ['groudon', 'groudon', 'Groudon', 'groudon', 'groudon', 'groudon', 'グラードン', '그라돈', '固拉多', 'groudon'],
		color: '#c73828',
		ability: abilityData['precipiceBlades'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/groudon.png',
			image: './src/assets/images/pokemon/normal/groudon-idle.png',
			frames: 14,
			hold: 8
		},
		speed: {
			base: 8000,
			scale: -20
		},
		power: {
			base: 50,
			scale: 5.5,
		},
		critical: {
			base: 35,
			scale: 0
		},
		range: {
			base: 280,
			scale: 0,
			inner: 150,
		},
		rangeType: 'donut',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],	
	},
	hooh: {
		id: 215,
		key: 'hooh',
		name: ['Ho-Oh', 'Ho-Oh', 'Ho-Oh', 'Ho-Oh', 'Ho-Oh', 'Ho-Oh', 'ホウオウ', '칠색조', '凤凰', 'Ho-Oh'],
		color: '#cd3806',
		ability: abilityData['sacredFire'],
		projectileSound: 'beam4',
		projectileSpeed: 7,
		projectile: projectileData['red3'],
		orbital: 1,
		sprite: {
			base: './src/assets/images/pokemon/normal/hooh.png',
			image: './src/assets/images/pokemon/normal/hooh-idle.png',
			frames: 5,
			hold: 8
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 10,
			scale: 5.4,
		},
		critical: {
			base: 15,
			scale: 0.1
		},
		range: {
			base: 160,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'orbital',
		costScale: 'high',
		tiles: [1, 4],	
	},
	registeel: {
		id: 216,
		key: 'registeel',
		name: ['registeel', 'registeel', 'Registeel', 'registeel', 'registeel', 'Registeel', 'レジスチル', '레지스틸', '雷吉斯钢', 'registeel'],
		color: '#c2cace',
		ability: abilityData['steelBeam'],
		projectileSound: 'beam1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/registeel.png',
			image: './src/assets/images/pokemon/normal/registeel-idle.png',
			frames: 2,
			hold: 8
		},
		speed: {
			base: 8000,
			scale: -30
		},
		power: {
			base: 50,
			scale: 30.1,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0.4,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],	
	},
	regice: {
		id: 217,
		key: 'regice',
		name: ['regice', 'regice', 'Regice', 'regice', 'regice', 'Regice', 'レジアイス', '레지아이스', '雷吉艾斯', 'regice'],
		color: '#b7cfff',
		ability: abilityData['iceBody'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/regice.png',
			image: './src/assets/images/pokemon/normal/regice-idle.png',
			frames: 3,
			hold: 8
		},
		speed: {
			base: 1200,
			scale: -4
		},
		power: {
			base: 20,
			scale: 8.3,
		},
		critical: {
			base: 0,
			scale: 0.7
		},
		range: {
			base: 200,
			scale: 1,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3, 4],	
	},
	regigigas: {
		id: 218,
		key: 'regigigas',
		name: ['regigigas', 'regigigas', 'Regigigas', 'regigigas', 'regigigas', 'regigigas', 'レジギガス', '레지기가스', '雷吉奇卡斯', 'regigigas'],
		color: '#d7a700',
		ability: abilityData['slowStart'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/regigigas.png',
			image: './src/assets/images/pokemon/normal/regigigas-idle.png',
			frames: 8,
			hold: 8
		},
		speed: {
			base: 5000,
			scale: -15
		},
		power: {
			base: 30,
			scale: 5,
		},
		critical: {
			base: 10,
			scale: 0.2
		},
		range: {
			base: 80,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 2, 4],	
	},
	kyogre: {
		id: 219,
		key: 'kyogre',
		name: ['kyogre', 'kyogre', 'kyogre', 'kyogre', 'kyogre', 'kyogre', 'カイオーガ', '가이오가', '盖欧卡', 'kyogre'],
		color: '#26a2e7',
		ability: abilityData['originPulse'],
		projectileSound: 'beam2',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/kyogre.png',
			image: './src/assets/images/pokemon/normal/kyogre-idle.png',
			frames: 10,
			hold: 8
		},
		speed: {
			base: 7800,
			scale: -10
		},
		power: {
			base: 10,
			scale: 4.8,
		},
		critical: {
			base: 20,
			scale: 0
		},
		range: {
			base: 180,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [3],	
	},
	thundurus: {
		id: 220,
		key: 'thundurus',
		name: ['thundurus', 'thundurus', 'fulguris', 'thundurus', 'thundurus', 'voltolos', 'ボルトロス', '볼트로스', '雷电云', 'thundurus'],
		color: '#5f95a5',
		ability: abilityData['wildboltStorm'],
		bombardmentArea: 200,
		bombardmentSplash: 25,
		projectileSound: 'thunder',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/thundurus.png',
			image: './src/assets/images/pokemon/normal/thundurus-idle.png',
			frames: 9,
			hold: 8
		},
		speed: {
			base: 4000,
			scale: 0
		},
		power: {
			base: 400,
			scale: 40,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 300,
			scale: 3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'bombardment',
		costScale: 'high',
		tiles: [1, 3, 4],	
	},
	tapuFini: {
		id: 221,
		key: 'tapuFini',
		name: ['tapu fini', 'tapu fini', 'tokopisco', 'tapu fini', 'tapu fini', 'kapu-kime', 'カプ・レヒレ', '카푸느지느', '卡璞・鳍鳍', 'tapu fini'],
		color: '#92a5c3',
		orbital: 4,
		ability: abilityData['spiralDrain'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue2'],
		sprite: {
			base: './src/assets/images/pokemon/normal/tapuFini.png',
			image: './src/assets/images/pokemon/normal/tapuFini-idle.png',
			frames: 4,
			hold: 8
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 10,
			scale: 2,
		},
		critical: {
			base: 15,
			scale: 0
		},
		range: {
			base: 85,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'orbital',
		costScale: 'high',
		tiles: [1, 3],	
	},
	nihilego: {
		id: 222,
		key: 'nihilego',
		name: ['nihilego', 'nihilego', 'zéroïd', 'nihilego', 'nihilego', 'anego', 'ウツロイド', '텅비드', '虚吾伊德', 'nihilego'],
		color: '#5eb3d6',
		ability: abilityData['emptyLight'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/nihilego.png',
			image: './src/assets/images/pokemon/normal/nihilego-idle.png',
			frames: 7,
			hold: 8
		},
		speed: {
			base: 5500,
			scale: -10
		},
		power: {
			base: 20,
			scale: 4.1
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 155,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [3],	
	},
	tapuKoko: {
		id: 223,
		key: 'tapuKoko',
		name: ['Tapu Koko', 'Tapu Koko', 'Tokorico', 'Tapu Koko', 'Tapu Koko', 'Kapu-Riki', 'カプ・コケコ', '카푸꼬꼬꼭', '卡璞・鸣鸣', 'Tapu Koko'],
		color: '#cebe4f',
		ability: abilityData['machBolt'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['yellow4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/tapuKoko.png',
			image: './src/assets/images/pokemon/normal/tapuKoko-idle.png',
			frames: 4,
			hold: 8
		},
		speed: {
			base: 1000,
			scale: -8
		},
		power: {
			base: 10,
			scale: 2.4,
		},
		critical: {
			base: 0,
			scale: 0.6
		},
		range: {
			base: 100,
			scale: 0.4,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2],	
	},
	tapuBulu: {
		id: 224,
		key: 'tapuBulu',
		name: ['Tapu Bulu', 'Tapu Bulu', 'Tokotoro', 'Tapu Bulu', 'Tapu Bulu', 'Kapu-Toro', 'カプ・ブルル', '카푸브루루', '卡璞・布鲁鲁', 'Tapu Bulu'],
		color: '#b42125',
		ability: abilityData['naturesJudgement'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/tapuBulu.png',
			image: './src/assets/images/pokemon/normal/tapuBulu-idle.png',
			frames: 4,
			hold: 8
		},
		speed: {
			base: 2000,
			scale: -7
		},
		power: {
			base: 20,
			scale: 8.3,
		},
		critical: {
			base: 0,
			scale: 0.5
		},
		range: {
			base: 100,
			scale: 1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],	
	},
	tapuLele: {
		id: 225,
		key: 'tapuLele',
		name: ['Tapu Lele', 'Tapu Lele', 'Tokopiyon', 'Tapu Lele', 'Tapu Lele', 'Kapu-Fala', 'カプ・テテフ', '카푸나비나', '卡璞・蝶蝶', 'Tapu Lele'],
		color: '#f84586',
		ability: abilityData['charmedCharm'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/tapuLele.png',
			image: './src/assets/images/pokemon/normal/tapuLele-idle.png',
			frames: 8,
			hold: 8
		},
		speed: {
			base: 2350,
			scale: -2
		},
		power: {
			base: 20,
			scale: 2.2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0.6,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],	
	},
	heatran: {
		id: 226,
		key: 'heatran',
		name: ['Heatran', 'Heatran', 'Heatran', 'Heatran', 'Heatran', 'Heatran', 'ヒードラン', '히드런', '席多藍恩', 'Heatran'],
		color: '#e99926',
		ability: abilityData['magmaStorm'],
		projectileSound: 'beam4',
		projectileSpeed: 7,
		projectile: projectileData['red3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/heatran.png',
			image: './src/assets/images/pokemon/normal/heatran-idle.png',
			frames: 4,
			hold: 8
		},
		speed: {
			base: 3550,
			scale: -10
		},
		power: {
			base: 20,
			scale: 8.3,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 165,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],	
	},
	landorus: {
		id: 227,
		key: 'landorus',
		name: ['Landorus', 'Landorus', 'Démétéros', 'Landorus', 'Landorus', 'Demeteros', 'ランドロス', '랜드로스', '土地雲', 'Landorus'],
		color: '#d6792b',
		ability: abilityData['sandsearStorm'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/landorus.png',
			image: './src/assets/images/pokemon/normal/landorus-idle.png',
			frames: 9,
			hold: 8
		},
		speed: {
			base: 12000,
			scale: -20
		},
		power: {
			base: 50,
			scale: 13.5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 300,
			scale: 3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],	
	},
	volcanion: {
		id: 228,
		key: 'volcanion',
		name: ['Volcanion', 'Volcanion', 'Volcanion', 'Volcanion', 'Volcanion', 'Volcanion', 'ボルケニオン', '볼케니온', '波爾凱尼恩', 'Volcanion'],
		color: '#952733',
		ability: abilityData['steamEruption'],
		projectileSound: 'beam4',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/volcanion.png',
			image: './src/assets/images/pokemon/normal/volcanion-idle.png',
			frames: 4,
			hold: 8
		},
		speed: {
			base: 7300,
			scale: -28
		},
		power: {
			base: 30,
			scale: 14.7,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 200,
			scale: 0.5,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3, 4],	
	},
	pheromosa: {
		id: 229,
		key: 'pheromosa',
		name: ['Pheromosa', 'Pheromosa', 'Cancrelove', 'Pheromosa', 'Pheromosa', 'Schabelle', 'フェローチェ', '페로코체', '費洛美螂', 'Pheromosa'],
		color: '#d2bda8',
		ability: abilityData['whiteRay'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/pheromosa.png',
			image: './src/assets/images/pokemon/normal/pheromosa-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1400,
			scale: -10
		},
		power: {
			base: 20,
			scale: 2.8,
		},
		critical: {
			base: 15,
			scale: 0.7
		},
		range: {
			base: 110,
			scale: 0.4,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],	
	},
	tornadus: {
		id: 230,
		key: 'tornadus',
		name: ['Tornadus', 'Tornadus', 'Boréas', 'Tornadus', 'Tornadus', 'Boreos', 'トルネロス', '토네로스', '龍捲雲', 'Tornadus'],
		color: '#5baf3c',
		ability: abilityData['bleakwindStorm'],
		projectileSound: 'projectile6',
		projectileSpeed: 1,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/tornadus.png',
			image: './src/assets/images/pokemon/normal/tornadus-idle.png',
			frames: 9,
			hold: 8
		},
		speed: {
			base: 5000,
			scale: -10
		},
		power: {
			base: 100,
			scale: 11,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 300,
			scale: 3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],	
	},
	magearna: {
		id: 231,
		key: 'magearna',
		name: ['Magearna', 'Magearna', 'Magearna', 'Magearna', 'Magearna', 'Magearna', 'マギアナ', '마기아나', '瑪機雅娜', 'Magearna'],
		color: '#d0c4c9',
		ability: abilityData['soulHeartReactor'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/magearna.png',
			image: './src/assets/images/pokemon/normal/magearna-idle.png',
			frames: 4,
			hold: 8
		},
		speed: {
			base: 4000,
			scale: -10
		},
		power: {
			base: 0,
			scale: 6,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],	
	},
	diancie: {
		id: 232,
		key: 'diancie',
		name: ['Diancie', 'Diancie', 'Diancie', 'Diancie', 'Diancie', 'Diancie', 'ディアンシー', '디안시', '蒂安希', 'Diancie'],
		color: '#e79cc5',
		ability: abilityData['diamondStorm'],
		projectileSound: 'beam1',
		projectileSpeed: 7,
		bombardmentArea: 75,
		bombardmentSplash: 25,
		projectile: projectileData['purple9'],
		sprite: {
			base: './src/assets/images/pokemon/normal/diancie.png',
			image: './src/assets/images/pokemon/normal/diancie-idle.png',
			frames: 5,
			hold: 8
		},
		speed: {
			base: 2000,
			scale: -1
		},
		power: {
			base: 0,
			scale: 18,
		},
		critical: {
			base: 20,
			scale: 0.25
		},
		range: {
			base: 320,
			scale: 0,
			inner: 145,
		},
		rangeType: 'donut',
		attackType: 'bombardment',
		costScale: 'high',
		tiles: [1, 4],	
	},
	virizion: {
		id: 233,
		key: 'virizion',
		name: [
			'Virizion', // inglés
			'Virizion', // español
			'Viridium', // francés
			'Virizion', // portugués
			'Virizion', // italiano
			'Viridium', // alemán
			'ビリジオン', // japonés
			'비리디온', // coreano
			'毕力吉翁', // chino
			'Virizion' // polaco
		],
		color: '#83cb30',
		ability: abilityData['sacredSword'],
		projectileSound: 'area2',
		projectileSpeed: 7,
		projectile: projectileData['red4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/virizion.png',
			image: './src/assets/images/pokemon/normal/virizion-idle.png',
			frames: 4,
			hold: 7
		},
		speed: {
			base: 1250,
			scale: -6
		},
		power: {
			base: 10,
			scale: 1.5,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 135,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 2],
	},
	spectrier: {
		id: 234,
		key: 'spectrier',
		name: [
			'Spectrier', // inglés
			'Spectrier', // español
			'Spectreval', // francés
			'Spectrier', // portugués
			'Spectrier', // italiano
			'Phantoross', // alemán
			'レイスポス', // japonés
			'레이스포스', // coreano
			'灵幽马', // chino
			'Spectrier' // polaco
		],
		color: '#674aa6',
		ability: abilityData['grimNeigh'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/spectrier.png',
			image: './src/assets/images/pokemon/normal/spectrier-idle.png',
			frames: 4,
			hold: 7
		},
		speed: {
			base: 1400,
			scale: -5
		},
		power: {
			base: 20,
			scale: 7.3,
		},
		critical: {
			base: 35,
			scale: 0.2
		},
		range: {
			base: 130,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
	},
	samurottHisui: {
		id: 235,
		key: 'samurottHisui',
		name: ['H. Samurott', 'Samurott H.', 'Clamiral H.', 'Samurott H.', 'Samurott H.', 'H-admurai', 'ダイケンキ H.', '대검귀 H.', '武裝獺 H.', 'H. Samurott'],
		color: '#c94955',
		ability: abilityData['ceaselessEdge'],
		projectileSound: 'sword',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/samurottHisui.png',
			image: './src/assets/images/pokemon/normal/samurottHisui-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1950,
			scale: -5
		},
		power: {
			base: 10,
			scale: 1.9,
		},
		critical: {
			base: 50,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3, 4],
	},
	baltoy: {
		id: 236,
		key: 'baltoy',
		name: ['baltoy', 'baltoy', 'Balbuto', 'baltoy', 'baltoy', 'Puppance', 'ヤジロン', '발토이', '天秤宝', 'baltoy'],
		color: '#deaf64',
		ability: abilityData['psybeam'],
		projectileSound: 'beam1',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/baltoy.png',
			image: './src/assets/images/pokemon/normal/baltoy-idle.png',
			frames: 6,
			hold: 9
		},
		speed: {
			base: 3500,
			scale: -3
		},
		power: {
			base: 20,
			scale: 5.5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],	
		evolution: {
			pokemon: 'claydol',
			level: 36
		},
	},
	claydol: {
		id: 236,
		key: 'claydol',
		name: ['claydol', 'claydol', 'Kaorine', 'claydol', 'claydol', 'Lepumentas', 'ネンドール', '클레이돌', '塔克隆', 'claydol'],
		color: '#ce4d19',
		ability: abilityData['psybeam'],
		projectileSound: 'beam1',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/claydol.png',
			image: './src/assets/images/pokemon/normal/claydol-idle.png',
			frames: 2,
			hold: 9
		},
		speed: {
			base: 3000,
			scale: -5
		},
		power: {
			base: 50,
			scale: 11.5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0.5,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],	
	},
	larvitar: {
		id: 237,
		key: 'larvitar',
		name: ['larvitar', 'larvitar', 'Embrylex', 'larvitar', 'larvitar', 'Larvitar', 'ヨーギラス', '요가라스', '小岩蛇', 'larvitar'],
		color: '#5eb230',
		ability: abilityData['sandStreamTyranitar'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/larvitar.png',
			image: './src/assets/images/pokemon/normal/larvitar-idle.png',
			frames: 12,
			hold: 9
		},
		speed: {
			base: 4200,
			scale: -3
		},
		power: {
			base: 5,
			scale: 3,
		},
		critical: {
			base: 10,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],	
		evolution: {
			pokemon: 'pupitar',
			level: 30
		},
	},
	pupitar: {
		id: 237,
		key: 'pupitar',
		name: ['pupitar', 'pupitar', 'Ymphect', 'pupitar', 'pupitar', 'Pupitar', 'サナギラス', '사나기라스', '沙岩蛇', 'pupitar'],
		color: '#50baf1',
		ability: abilityData['sandStreamTyranitar'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/pupitar.png',
			image: './src/assets/images/pokemon/normal/pupitar-idle.png',
			frames: 8,
			hold: 9
		},
		speed: {
			base: 4000,
			scale: -7
		},
		power: {
			base: 14,
			scale: 4.4,
		},
		critical: {
			base: 10,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],	
		evolution: {
			pokemon: 'tyranitar',
			level: 55
		},
	},
	tyranitar: {
		id: 237,
		key: 'tyranitar',
		name: ['tyranitar', 'tyranitar', 'Tyranocif', 'tyranitar', 'tyranitar', 'Despotar', 'バンギラス', '방기라스', '班基拉斯', 'tyranitar'],
		color: '#99ac70',
		ability: abilityData['sandStreamTyranitar'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/tyranitar.png',
			image: './src/assets/images/pokemon/normal/tyranitar-idle.png',
			frames: 4,
			hold: 9
		},
		speed: {
			base: 3850,
			scale: -10
		},
		power: {
			base: 500,
			scale: 27,
		},
		critical: {
			base: 15,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],	
		mega: ['megaTyranitar']
	},
	megaTyranitar: {
		id: 237,
		key: 'megaTyranitar',
		name: ['M-tyranitar', 'M-tyranitar', 'M-Tyranocif', 'M-tyranitar', 'M-tyranitar', 'M-despotar', "メガバンギラス", "메가마기라스", "超级班基拉斯", 'M-tyranitar'],
		color: '#535f3c',
		ability: abilityData['sandStreamMegaTyranitar'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaTyranitar.png',
			image: './src/assets/images/pokemon/normal/megaTyranitar-idle.png',
			frames: 4,
			hold: 9
		},
		speed: {
			base: 3400,
			scale: -10
		},
		power: {
			base: 900,
			scale: 27,
		},
		critical: {
			base: 15,
			scale: 0
		},
		range: {
			base: 160,
			scale: 0.4,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		base: 'tyranitar'
	},
	ironBundle: {
		id: 238,
		key: 'ironBundle',
		name: [
			`Iron Bundle`, // inglés
			`Ferrosaco`, // español
			`Hotte-de-Fer`, // francés
			`Ferrosaco`, // portugués
			`saccoferreo`, // italiano
			`Eisenbündel`, // alemán
			`テツノツツミ`, // japonés
			`テツノツツミ`, // coreano
			`铁包袱`, // chino
			`Iron Bundle`, // polcao
		],
		color: '#aa341f',
		ability: abilityData['cryogenicCannon'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/ironBundle.png',
			image: './src/assets/images/pokemon/normal/ironBundle-idle.png',
			frames: 4,
			hold: 9
		},
		speed: {
			base: 10000,
			scale: -14
		},
		power: {
			base: 10,
			scale: 8.9,
		},
		critical: {
			base: 30,
			scale: 0
		},
		range: {
			base: 100,
			scale: 1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3, 4],	
	},
	flutterMane: {
		id: 239,
		key: 'flutterMane',
		name: [
			`Flutter Mane`, // inglés
			`Melenaleteo`, // español
			`Flotte-Mèche`, // francés
			`Melenaleteo`, // portugués
			`crinealato`, // italiano
			`Flatterhaar`, // alemán
			`ハバタクカミ`, // japonés
			`날개치는머리`, // coreano
			`振翼发`, // chino
			`Flutter Mane` // polaco
		],
		color: '#5fa7a1',
		ability: abilityData['dazzlingGleam'],
		projectileSound: 'area5',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/flutterMane.png',
			image: './src/assets/images/pokemon/normal/flutterMane-idle.png',
			frames: 8,
			hold: 9
		},
		speed: {
			base: 5500,
			scale: -35
		},
		power: {
			base: 10,
			scale: 8.65,
		},
		critical: {
			base: 0,
			scale: 0.3
		},
		range: {
			base: 120,
			scale: 0.8,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],	
	},
	snorunt: {
		id: 240,
		key: 'snorunt',
		name: [
			`Snorunt`, // inglés
			`Snorunt`, // español
			`Stalgamin`, // francés
			`Snorunt`, // portugués
			`Snorunt`, // italiano
			`Schneppke`, // alemán
			`ユキワラシ`, // japonés
			`눈꼬마`, // coreano
			`雪童子`, // chino
			`Snorunt`, // polaco
		],
		color: '#46656d',
		ability: abilityData['icyWind'],
		projectileSound: 'ice',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/snorunt.png',
			image: './src/assets/images/pokemon/normal/snorunt-idle.png',
			frames: 4,
			hold: 9
		},
		speed: {
			base: 3500,
			scale: -1
		},
		power: {
			base: 10,
			scale: 2.4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3, 4],	
		evolution: {
			pokemon: 'glalie',
			level: 42
		},
	},
	glalie: {
		id: 240,
		key: 'glalie',
		name: [
			`Glalie`, // inglés
			`Glalie`, // español
			`Oniglali`, // francés
			`Glalie`, // portugués
			`Glalie`, // italiano
			`Firnontor`, // alemán
			`オニゴーリ`, // japonés
			`얼음귀신`, // coreano
			`冰鬼护`, // chino
			`Glalie` // polaco
		],
		color: '#d2d5d7',
		ability: abilityData['icyWind'],
		projectileSound: 'ice',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/glalie.png',
			image: './src/assets/images/pokemon/normal/glalie-idle.png',
			frames: 8,
			hold: 9
		},
		speed: {
			base: 3500,
			scale: -7
		},
		power: {
			base: 60,
			scale: 7.4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 180,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3, 4],	
		mega: ['megaGlalie'],
		form: true
	},
	megaGlalie: {
		id: 240,
		key: 'megaGlalie',
		name: [
			`M-Glalie`, // inglés
			`M-Glalie`, // español
			`M-Oniglali`, // francés
			`M-Glalie`, // portugués
			`M-Glalie`, // italiano
			`M-Firnontor`, // alemán
			`メガオニゴーリ`, // japonés
			`메가 얼음귀신`, // coreano
			`超级冰鬼护`, // chino
			`M-Glalie` // polaco
		],
		color: '#0359a2',
		ability: abilityData['explosion'],
		projectileSound: 'ice',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaGlalie.png',
			image: './src/assets/images/pokemon/normal/megaGlalie-idle.png',
			frames: 8,
			hold: 9
		},
		speed: {
			base: 14000,
			scale: -20
		},
		power: {
			base: 550,
			scale: 79.5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 190,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 3, 4],	
		base: 'glalie'
	},
	froslass: {
		id: 240,
		key: 'froslass',
		name: [
			`Froslass`, // inglés
			`Froslass`, // español
			`Momartik`, // francés
			`Froslass`, // portugués
			`Froslass`, // italiano
			`Frosdedje`, // alemán
			`ユキメノコ`, // japonés
			`눈여아`, // coreano
			`雪妖女`, // chino
			`Froslass` // polaco
		],
		color: '#d2d5d7',
		ability: abilityData['auroraVeil'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/froslass.png',
			image: './src/assets/images/pokemon/normal/froslass-idle.png',
			frames: 14,
			hold: 9
		},
		speed: {
			base: 1400,
			scale: -6.5
		},
		power: {
			base: 20,
			scale: 8.75,
		},
		critical: {
			base: 30,
			scale: 0.3
		},
		range: {
			base: 120,
			scale: 0.4,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3, 4],	
		form: true
	},
	wooper: {
		id: 241,
		key: 'wooper',
		name: [
			`Wooper`, // inglés
			`Wooper`, // español
			`Axoloto`, // francés
			`Wooper`, // portugués
			`Wooper`, // italiano
			`Felino`, // alemán
			`ウパー`, // japonés
			`우파`, // coreano
			`乌波`, // chino
			`Wooper` // polaco
		],
		color: '#768ade',
		ability: abilityData['damp'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/wooper.png',
			image: './src/assets/images/pokemon/normal/wooper-idle.png',
			frames: 2,
			hold: 9
		},
		speed: {
			base: 2550,
			scale: -2
		},
		power: {
			base: 25,
			scale: 4.7,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 145,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 3],	
		evolution: {
			pokemon: 'quagsire',
			level: 20
		},
	},
	quagsire: {
		id: 241,
		key: 'quagsire',
		name: [
			`Quagsire`, // inglés
			`Quagsire`, // español
			`Maraiste`, // francés
			`Quagsire`, // portugués
			`Quagsire`, // italiano
			`Morlord`, // alemán
			`ヌオー`, // japonés
			`누오`, // coreano
			`沼王`, // chino
			`Quagsire` // polaco
		],
		color: '#8ea6ff',
		ability: abilityData['damp'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/quagsire.png',
			image: './src/assets/images/pokemon/normal/quagsire-idle.png',
			frames: 7,
			hold: 9
		},
		speed: {
			base: 2150,
			scale: -5.5
		},
		power: {
			base: 100,
			scale: 15.8,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 165,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 3],	
	},
	skarmory: {
		id: 242,
		key: 'skarmory',
		name: [
			`Skarmory`, // inglés
			`Skarmory`, // español
			`Airmure`, // francés
			`Skarmory`, // portugués
			`Skarmory`, // italiano
			`Panzaeron`, // alemán
			`エアームド`, // japonés
			`무장조`, // coreano
			`盔甲鸟`, // chino
			`Skarmory` // polaco
		],
		color: '#adbbbe',
		ability: abilityData['aerialAce'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['gray5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/skarmory.png',
			image: './src/assets/images/pokemon/normal/skarmory-idle.png',
			frames: 9,
			hold: 8
		},
		speed: {
			base: 3800,
			scale: -30
		},
		power: {
			base: 10,
			scale: 13.9,
		},
		critical: {
			base: 5, 
			scale: 0
		},
		range: {
			base: 120,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		mega: ['megaSkarmory']	
	},
	megaSkarmory: {
		id: 242,
		key: 'megaSkarmory',
		name: [
			`M-Skarmory`, // inglés
			`M-Skarmory`, // español
			`M-Airmure`, // francés
			`M-Skarmory`, // portugués
			`M-Skarmory`, // italiano
			`M-Panzaeron`, // alemán
			`メガエアームド`, // japonés
			`메가 무장조`, // coreano
			`超级盔甲鸟`, // chino
			`M-Skarmory` // polaco
		],
		color: '#4d6a78',
		ability: abilityData['stalwart'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['gray5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaSkarmory.png',
			image: './src/assets/images/pokemon/normal/megaSkarmory-idle.png',
			frames: 9,
			hold: 8
		},
		speed: {
			base: 1800,
			scale: -10
		},
		power: {
			base: 150,
			scale: 13,
		},
		critical: {
			base: 0, 
			scale: 0.5
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		base: 'skarmory'
	},
	scraggy: {
		id: 243,
		key: 'scraggy',
		name: ['Scraggy', 'Scraggy', 'Baggiguane', 'Scraggy', 'Scraggy', 'Zurrokex', 'ズルッグ', '곤율랭', '滑滑小子', 'Scraggy'],
		color: '#d77d1f',
		ability: abilityData['knockOff'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/scraggy.png',
			image: './src/assets/images/pokemon/normal/scraggy-idle.png',
			frames: 2,
			hold: 9
		},
		speed: {
			base: 2500,
			scale: -5
		},
		power: {
			base: 10,
			scale: 3.5,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],	
		evolution: {
			pokemon: 'scrafty',
			level: 39
		},
	},
	scrafty: {
		id: 243,
		key: 'scrafty',
		name: ['Scrafty', 'Scrafty', 'Baggaïd', 'Scrafty', 'Scrafty', 'Irokex', 'ズルズキン', '곤율거니', '頭巾混混', 'Scrafty'],
		color: '#cf3a30',
		ability: abilityData['knockOff'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/scrafty.png',
			image: './src/assets/images/pokemon/normal/scrafty-idle.png',
			frames: 6,
			hold: 9
		},
		speed: {
			base: 2000,
			scale: -8
		},
		power: {
			base: 50,
			scale: 15,
		},
		critical: {
			base: 0,
			scale: 0.15
		},
		range: {
			base: 145,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],	
		mega: ['megaScrafty']
	},
	megaScrafty: {
		id: 243,
		key: 'megaScrafty',
		name: [
			`M-Scrafty`, // inglés
			`M-Scrafty`, // español
			`M-Baggaïd`, // francés
			`M-Scrafty`, // portugués
			`M-Scrafty`, // italiano
			`M-Irokex`, // alemán
			`メガズルズキン`, // japonés
			`메가 곤율거니`, // coreano
			`超级头巾混混`, // chino
			`M-Scrafty` // polaco
		],
		color: '#e4e1da',
		ability: abilityData['moxie'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaScrafty.png',
			image: './src/assets/images/pokemon/normal/megaScrafty-idle.png',
			frames: 4,
			hold: 9
		},
		speed: {
			base: 1000,
			scale: -2
		},
		power: {
			base: 200,
			scale: 12.5,
		},
		critical: {
			base: 25,
			scale: 0
		},
		range: {
			base: 180,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],		
		base: 'scrafty'
	},
	onix: {
		id: 244,
		key: 'onix',
		name: ['Onix', 'Onix', 'Onix', 'Onix', 'Onix', 'Onix', 'イワーク', '롱스톤', '大岩蛇', 'Onix'],
		color: '#7b8c94',
		ability: abilityData['stoneEdge'],
		orbital: 5,
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['gray7'],
		sprite: {
			base: './src/assets/images/pokemon/normal/onix.png',
			image: './src/assets/images/pokemon/normal/onix-idle.png',
			frames: 4,
			hold: 9
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 4,
			scale: 2,
		},
		critical: {
			base: 9.5, 
			scale: 0
		},
		range: {
			base: 80,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'orbital',
		costScale: 'mid',
		tiles: [1, 4],	
		evolution: {
			pokemon: 'steelix',
			level: 40
		},
	},
	steelix: {
		id: 244,
		key: 'steelix',
		name: ['Steelix', 'Steelix', 'Steelix', 'Steelix', 'Steelix', 'Stahlos', 'ハガネール', '강철톤', '大鋼蛇', 'Steelix'],
		color: '#496870',
		ability: abilityData['stoneEdge'],
		orbital: 5,
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['gray7'],
		sprite: {
			base: './src/assets/images/pokemon/normal/steelix.png',
			image: './src/assets/images/pokemon/normal/steelix-idle.png',
			frames: 4,
			hold: 9
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 50,
			scale: 6,
		},
		critical: {
			base: 20.8, 
			scale: 0
		},
		range: {
			base: 80,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'orbital',
		costScale: 'mid',
		tiles: [1, 4],	
		mega: ['megaSteelix']
	},
	megaSteelix: {
		id: 244,
		key: 'megaSteelix',
		name: [
			`M-Steelix`, // inglés
			`M-Steelix`, // español
			`M-Steelix`, // francés
			`M-Steelix`, // portugués
			`M-Steelix`, // italiano
			`M-Stahlos`, // alemán
			`メガハガネール`, // japonés
			`메가 강철톤`, // coreano
			`超级大钢蛇`, // chino
			`M-Steelix` // polaco
		],
		color: '#d3d3d4',
		orbital: 7,
		ability: abilityData['stoneEdgeMega'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['gray7'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaSteelix.png',
			image: './src/assets/images/pokemon/normal/megaSteelix-idle.png',
			frames: 4,
			hold: 9
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 100,
			scale: 6,
		},
		critical: {
			base: 35, 
			scale: 0
		},
		range: {
			base: 80,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'orbital',
		costScale: 'mid',
		tiles: [1, 4],	
		base: 'steelix'
	},
	drampa: {
		id: 245,
		key: 'drampa',
		name: ['drampa', 'drampa', 'Draïeul', 'drampa', 'drampa', 'Sen-Long', 'ジジーロン', '지지롱', '老翁龙', 'drampa'],
		color: '#64a2a1',
		ability: abilityData['berserk'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		streamAngle: 0.25,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/drampa.png',
			image: './src/assets/images/pokemon/normal/drampa-idle.png',
			frames: 4,
			hold: 9
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 10,
			scale: 5.4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0.5,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'stream',
		costScale: 'high',
		tiles: [1, 2, 3, 4],	
		mega: ['megaDrampa']
	},
	megaDrampa: {
		id: 245,
		key: 'megaDrampa',
		name: [
			`M-Drampa`, // inglés
			`M-Drampa`, // español
			`M-Draïeul`, // francés
			`M-Drampa`, // portugués
			`M-Drampa`, // italiano
			`M-Sen-Long`, // alemán
			`メガジジーロン`, // japonés
			`메가 할비롱`, // coreano
			`超级老翁龙`, // chino
			`M-Drampa` // polaco
		],
		color: '#3bb597',
		ability: abilityData['berserkMega'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		streamAngle: 0.25,
		sprite: {
			base: './src/assets/images/pokemon/normal/megaDrampa.png',
			image: './src/assets/images/pokemon/normal/megaDrampa-idle.png',
			frames: 10,
			hold: 9
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 40,
			scale: 6,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 220,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'stream',
		costScale: 'high',
		tiles: [1, 2, 3, 4],
		base: 'drampa'
	},
	slowpoke: {
		id: 246,
		key: 'slowpoke',
		name: ['slowpoke', 'slowpoke', 'Ramoloss', 'slowpoke', 'slowpoke', 'Flegmon', 'ヤドン', '야돈', '呆呆兽', 'slowpoke'],
		color: '#fd875f',
		ability: abilityData['slow'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/slowpoke.png',
			image: './src/assets/images/pokemon/normal/slowpoke-idle.png',
			frames: 4,
			hold: 9
		},
		speed: {
			base: 6000,
			scale: -10
		},
		power: {
			base: 50,
			scale: 5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],	
		evolution: {
			pokemon: 'slowbro',
			level: 37
		},
	},
	slowbro: {
		id: 246,
		key: 'slowbro',
		name: ['slowbro', 'slowbro', 'Flagadoss', 'slowbro', 'slowbro', 'Lahmus', 'ヤドラン', '야도란', '呆河马', 'slowbro'],
		color: '#f16a3b',
		ability: abilityData['slow'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/slowbro.png',
			image: './src/assets/images/pokemon/normal/slowbro-idle.png',
			frames: 2,
			hold: 9
		},
		speed: {
			base: 5000,
			scale: -10
		},
		power: {
			base: 100,
			scale: 19,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 160,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],	
		mega: ['megaSlowbro']
	},
	megaSlowbro: {
		id: 246,
		key: 'megaSlowbro',
		name: [
			`M-Slowbro`, // inglés
			`M-Slowbro`, // español
			`M-Flagadoss`, // francés
			`M-Slowbro`, // portugués
			`M-Slowbro`, // italiano
			`M-Lahmus`, // alemán
			`メガヤドラン`, // japonés
			`메가 야도란`, // coreano
			`超级呆壳兽`, // chino
			`M-Slowbro` // polaco
		],
		color: '#e4b76e',
		ability: abilityData['laundryGoRound'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaSlowbro.png',
			image: './src/assets/images/pokemon/normal/megaSlowbro-idle.png',
			frames: 5,
			hold: 9
		},
		speed: {
			base: 3000,
			scale: -12
		},
		power: {
			base: 250,
			scale: 0,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 180,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 3],
		base: 'slowbro'
	},
	tyrunt: {
		id: 247,
		key: 'tyrunt',
		name: [
			`Tyrunt`, // inglés
			`Tyrunt`, // español
			`Ptyranidur`, // francés
			`Tyrunt`, // portugués
			`Tyrunt`, // italiano
			`Balgoras`, // alemán
			`チゴラス`, // japonés
			`티고라스`, // coreano
			`宝宝暴龙`, // chino
			`Tyrunt` // polaco
		],
		color: '#9d836f',
		ability: abilityData['rockThrow'],
		projectileSound: 'rockThrow',
		projectileSpeed: 7,
		projectile: projectileData['gray8'],
		bombardmentArea: 80,
		bombardmentSplash: 30,
		sprite: {
			base: './src/assets/images/pokemon/normal/tyrunt.png',
			image: './src/assets/images/pokemon/normal/tyrunt-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 5000,
			scale: -2
		},
		power: {
			base: 10,
			scale: 5,
		},
		critical: {
			base: 10,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'bombardment',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'tyrantrum',
			level: 39,
		},
	},
	tyrantrum: {
		id: 247,
		key: 'tyrantrum',
		name: [
			`Tyrantrum`, // inglés
			`Tyrantrum`, // español
			`Rexillius`, // francés
			`Tyrantrum`, // portugués
			`Tyrantrum`, // italiano
			`Monargoras`, // alemán
			`ガチゴラス`, // japonés
			`견고라스`, // coreano
			`怪颚龙`, // chino
			`Tyrantrum` // polaco
		],
		color: '#be555e',
		ability: abilityData['rockThrow'],
		projectileSound: 'rockThrow',
		projectileSpeed: 7,
		projectile: projectileData['gray8'],
		bombardmentArea: 80,
		bombardmentSplash: 30,
		sprite: {
			base: './src/assets/images/pokemon/normal/tyrantrum.png',
			image: './src/assets/images/pokemon/normal/tyrantrum-idle.png',
			frames: 14,
			hold: 10
		},
		speed: {
			base: 5000,
			scale: -4
		},
		power: {
			base: 40,
			scale: 11.4,
		},
		critical: {
			base: 20,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'bombardment',
		costScale: 'high',
		tiles: [1, 4],
	},
	unown: {
		id: 248,
		key: 'unown',
		name: [
			`Unown`, // inglés
			`Unown`, // español
			`Zarbi`, // francés
			`Unown`, // portugués
			`Unown`, // italiano
			`Icognito`, // alemán
			`アンノーン`, // japonés
			`안농`, // coreano
			`未知图腾`, // chino
			`Unown` // polaco
		],
		color: '#b2bec1',
		ability: abilityData['hiddenPower'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		orbital: 10,
		sprite: {
			base: './src/assets/images/pokemon/normal/unown-a.png',
			image: './src/assets/images/pokemon/normal/unown-a-idle.png',
			frames: 4,
			hold: 10
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 1,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'orbital',
		costScale: 'high',
		tiles: [1, 2, 3, 4],
	},
	mantyke: {
		id: 249,
		key: 'mantyke',
		name: [
			`Mantyke`, // inglés
			`Mantyke`, // español
			`Mantyke`, // francés
			`Mantyke`, // portugués
			`Mantyke`, // italiano
			`Mantirps`, // alemán
			`タマンタ`, // japonés
			`타만타`, // coreano
			`小球飞鱼`, // chino
			`Mantyke` // polaco
		],
		color: '#4580be',
		ability: abilityData['slowRicochet'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		ricochet: 2,
		projectile: projectileData['remoraid'],
		sprite: {
			base: './src/assets/images/pokemon/normal/mantyke.png',
			image: './src/assets/images/pokemon/normal/mantyke-idle.png',
			frames: 7,
			hold: 4
		},
		speed: {
			base: 3000,
			scale: -2
		},
		power: {
			base: 5,
			scale: 2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 250,
			scale: 0,
			inner: 135,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
		evolution: {
			pokemon: 'mantine',
			level: 30
		},	
	},
	mantine: {
		id: 249,
		key: 'mantine',
		name: [
			`Mantine`, // inglés
			`Mantine`, // español
			`Mantine`, // francés
			`Mantine`, // portugués
			`Mantine`, // italiano
			`Mantax`, // alemán
			`マンタイン`, // japonés
			`만타인`, // coreano
			`巨翅飞鱼`, // chino
			`Mantine` // polaco
		],
		color: '#4a73de',
		ability: abilityData['slowRicochet'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		ricochet: 4,
		projectile: projectileData['remoraid'],
		sprite: {
			base: './src/assets/images/pokemon/normal/mantine.png',
			image: './src/assets/images/pokemon/normal/mantine-idle.png',
			frames: 8,
			hold: 4
		},
		speed: {
			base: 2600,
			scale: -8
		},
		power: {
			base: 30,
			scale: 7.2,
		},
		critical: {
			base: 10,
			scale: 0
		},
		range: {
			base: 280,
			scale: 0,
			inner: 135,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
	},
	sizzlipede: {
		id: 250,
		key: 'sizzlipede',
		name: [
			`Sizzlipede`, // inglés
			`Sizzlipede`, // español
			`Grillepattes`, // francés
			`Sizzlipede`, // portugués
			`Sizzlipede`, // italiano
			`Thermopod`, // alemán
			`ヤクデ`, // japonés
			`태우지네`, // coreano
			`烧火蚣`, // chino
			`Sizzlipede` // polaco
		],
		color: '#f8694e',
		ability: abilityData['burnRicochet'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		ricochet: 3,
		projectile: projectileData['red7'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sizzlipede.png',
			image: './src/assets/images/pokemon/normal/sizzlipede-idle.png',
			frames: 2,
			hold: 10
		},
		speed: {
			base: 3000,
			scale: -5
		},
		power: {
			base: 5,
			scale: 3,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 160,
			scale: 0,
			inner: 0,
		},
		rangeType: 'star',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'centiscorch',
			level: 28
		},	
	},
	centiscorch: {
		id: 250,
		key: 'centiscorch',
		name: [
			`Centiskorch`, // inglés
			`Centiskorch`, // español
			`Scolocendre`, // francés
			`Centiskorch`, // portugués
			`Centiskorch`, // italiano
			`Infernopod`, // alemán
			`マルヤクデ`, // japonés
			`다태우지네`, // coreano
			`焚焰蚣`, // chino
			`Centiskorch` // polaco
		],
		color: '#ff4147',
		ability: abilityData['burnRicochet'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		ricochet: 5,
		projectile: projectileData['red7'],
		sprite: {
			base: './src/assets/images/pokemon/normal/centiscorch.png',
			image: './src/assets/images/pokemon/normal/centiscorch-idle.png',
			frames: 4,
			hold: 10
		},
		speed: {
			base: 1500,
			scale: -6
		},
		power: {
			base: 25,
			scale: 4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 200,
			scale: 0,
			inner: 0,
		},
		rangeType: 'star',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
	},
	sandshrewAlola: {
		id: 251,
		key: 'sandshrewAlola',
		name: ['A. sandshrew', 'sandshrew A.', 'Sabelette A.', 'sandshrew A.', 'sandshrew A.', 'A-sandan', 'サンド A.', '모래두지 A.', '穿山鼠 A.', 'A. sandshrew'],
		color: '#89a0b2',
		ability: abilityData['tripleAxel'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		ricochet: 2,
		projectile: projectileData['blue8'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sandshrewAlola.png',
			image: './src/assets/images/pokemon/normal/sandshrewAlola-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2450, 
			scale: -2 
		},
		power: {
			base: 10, 
			scale: 2.2,
		},
		critical: {
			base: 0, 
			scale: 0 
		},
		range: {
			base: 105,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'sandslashAlola',
			level: 22,
		},	
	},
	sandslashAlola: {
		id: 251,
		key: 'sandslashAlola',
		name: ['A. sandslash', 'sandslash A.', 'Sablaireau A.', 'sandslash A.', 'sandslash A.', 'A-sandamer', 'サンドパン A.', '고지 A.', '穿山王 A.', 'A. sandslash'],
		color: '#4d8ec7',
		ability: abilityData['tripleAxel'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		ricochet: 2,
		projectile: projectileData['blue8'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sandslashAlola.png',
			image: './src/assets/images/pokemon/normal/sandslashAlola-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1900, 
			scale: -2 
		},
		power: {
			base: 30, 
			scale: 4.2,
		},
		critical: {
			base: 0, 
			scale: 0 
		},
		range: {
			base: 140, 
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
	},
	wynaut: {
		id: 252,
		key: 'wynaut',
		name: ['Wynaut', 'Wynaut', 'Okéoké', 'Wynaut', 'Wynaut', 'Isso', 'ソーナノ', '마자', '小果然', 'Wynaut'],
		color: '#64c7f5',
		ability: abilityData['squishyToy'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/wynaut.png',
			image: './src/assets/images/pokemon/normal/wynaut-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 0
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 0,
			scale: 0,
			inner: 0
		},
		rangeType: 'circle',
		attackType: 'aura',
		costScale: 'low',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'wobbuffet',
			level: 15
		}
	},
	wobbuffet: {
		id: 252,
		key: 'wobbuffet',
		name: ['Wobbuffet', 'Wobbuffet', 'Qulbutoké', 'Wobbuffet', 'Wobbuffet', 'Woingenau', 'ソーナンス', '마자용', '果然翁', 'Wobbuffet'],
		color: '#38b8f5',
		ability: abilityData['squishyToy'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/wobbuffet.png',
			image: './src/assets/images/pokemon/normal/wobbuffet-idle.png',
			frames: 9,
			hold: 15
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 0
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 0,
			scale: 0,
			inner: 0
		},
		rangeType: 'circle',
		attackType: 'aura',
		costScale: 'low',
		tiles: [1, 2, 4],
	},
	passimian: {
		id: 253,
		key: 'passimian',
		name: [
			`Passimian`, // inglés
			`Passimian`, // español
			`Quartermac`, // francés
			`Passimian`, // portugués
			`Passimian`, // italiano
			`Quartermak`, // alemán
			`ナゲツケサル`, // japonés
			`내던숭이`, // coreano
			`投掷猴`, // chino
			`Passimian` // polaco
		],
		color: '#e0f691',
		ability: abilityData['defiant'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['green6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/passimian.png',
			image: './src/assets/images/pokemon/normal/passimian-idle.png',
			frames: 2,
			hold: 20
		},
		speed: {
			base: 3000,
			scale: -13.5
		},
		power: {
			base: 20,
			scale: 8.8
		},
		critical: {
			base: 0,
			scale: 0.75
		},
		range: {
			base: 145,
			scale: 0,
			inner: 0
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
}

export const eggListData = [
	'charmander', 'treecko', 'froaki', 

	'natu', 'spoink', 'murkrow',
	'voltorb', 'machop', 'mankey', 'chimchar', 
	'yamask', 'cryogonal', 'sableye', 'meowth', 'tangela', 'chikorita', 
	'spinarak', 'shroomish', 'barboach', 'drudiggon', 'remoraid', 'clauncher', 
	'seel', 'staryu', 'psyduck', 'gulpin', 'lapras', 
	'ferroseed', 'shuckle', 'maractus', 'sunkern', 'aron', 'hawlucha', 
	'cubone', 'binacle', 'absol', 'oshawott', 'sandshrew', 'sneasel', 
	'trapinch', 'pidgey', 'noibat', 'riolu', 'mareep', 'surskit', 
	'cottonee', 'petilil', 'hoppip', 'drilbur', 'ekans',
	'girafarig', 'torkoal', 'spinda', 'dunsparce', 'ralts', 'koffing', 
	'farfetchd', 'omanyte', 'kabuto', 'corsola', 
	'castform', 'clefairy', 'anorith', 'lileep', 'shieldon', 'cranidos', 
	'starly',  'gastly', 'ditto', 

	'magikarp', 'pikachu', 'fuecoco',  'cherubi',
	'rockruff', 'pawniard', 'wimpod', 'honedge', 
	'sobble', 'rowlet', 'comfey', 'smeargle', 'carvanha', 

	'nickit','bulbasaur', 'cyndaquil', 'mawile','mudkip', 'patrat', 'snivy', 
	'dondozo', 'plusle', 'minun', 'hippopotas', 'tepig', 'squirtle', 'tentacool', 'snover', 
	'chespin',  'budew',  'sewaddle', 'sprigatito', 'magnemite', 
	'horsea', 'amaura', 'tirtouga', 'buneary', 
	'makuhita', 'solrock', 'lunatone', 'zangoose', 'seviper', 'frillishM', 'alomomola', 
	'corphish', 'doduo', 'swablu', 'aerodactyl', 
	'porygon', 

	'wingull', 'inkay', 'totodile',  'tarountula', 'vulpix', 'fennekin',
	'houndour', 'pineco', 'chinchou',
	'aipom',   'combee',  'tropius', 'weedle',

	'volbeat', 'illumise', 'piplup', 'grookey', 'heatmor', 'durant', 
	'bellsprout', 'shellder', 'rattata', 'diglett', 
	'skarmory', 'scraggy', 'onix', 'drampa', 'slowpoke',
	'mantyke', 'sizzlipede', 'wynaut', 'passimian'
]

const challengePokemon = [ 
	'bidoof', 'hoothoot', 'nincada', 'turtwig', 'capsakid', 'larvesta', 'numel', 'dratini', 'beldum', 'snorunt', 
	'spheal', 'bergmite', 'feebas', 'dreepy', 'skrelp', 'tatsugiri', 'dewpider', 'grubbin', 'pyukumuku', 'abra', 
	'deino', 'paras', 'gible', 'sandile', 'popplio', 'drifloon', 'chingling', 'cutiefly', 'charcadet', 'carbink', 
	'munna', 'heracross', 'applin', 'snorlax', 'gossifleur', 'scyther', 'baltoy', 'larvitar', 'klink', 'archen', 
]

const secretPokemon = [
	//achievements
	'shaymin', 'celebi', 'lunala', 'zapdos', 'moltres', 'articuno', 'regirock', 'groudon', 'hooh', 'registeel', 'regice', 'regigigas', 
	'kyogre', 'thundurus', 'tapuFini', 'nihilego', 'tapuKoko', 'tapuBulu', 'tapuLele', 'keldeo', 'heatran', 'landorus', 'volcanion', 'pheromosa', 
	'cobalion', 'stakataka', 'tornadus', 'magearna', 'diancie', 'terrakion', 'virizion', 

	'shedinja', 'gholdengo', 'unown',

	'greavard', 'cacnea', 'dhelmise', 'manaphy', 'phione', 'marshadow', 'ducklett', 'sandygast', 'victini', 'bronzor', 'spiritomb', 'farfetchdGalar', 'calyrex',

	'chatot', 'luvdisc', 'tyrunt', 
	'corsolaGalar', 'sneaselHisui', 'samurottHisui', 'sandshrewAlola', 'wooper', 'minior', 'mew',

	'pumpkaboo', 'spectrier', 
	// codes
	'ironThorns', 'sandyShocks', 'ironBundle', 'flutterMane', 'missingNo',
]

export const allPokemon = [
	...eggListData, ...challengePokemon, ...secretPokemon, 
]

export const pokemonDataById = {};
for (const key in pokemonData) {
    const specie = pokemonData[key];
    pokemonDataById[specie.id] = specie;
}

export const forcedInitialPool = [
	'murkrow', 'nickit', 'sunkern', 'mudkip', 'ferroseed', 'machop', 'spinarak', 'chimchar', 'pikachu', 'mareep', 'surskit', 
	'hoppip', 'sandshrew', 'corphish', 'spoink', 'pidgey', 'chikorita', 'omanyte', 'maractus', 'aron',
]

export const forcedSecondaryPool = [
	'gastly', 'noibat', 'spinda', 'comfey', 'drilbur', 'petilil', 'trapinch', 'ekans', 'clefairy', 'riolu', 'remoraid', 
	'shroomish', 'farfetchd', 'cubone', 'clauncher', 'castform', 'ditto', 'treecko', 'froaki', 'charmander', 'rattata',
]
