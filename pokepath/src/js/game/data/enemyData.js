import { passiveData } from './passiveData.js';

export const enemyData = {
	// AREAS 1 - 3
	rattata: {
		id: 'rattata',
		isElite: false,
		isBoss: false,
		name: ['rattata', 'rattata', 'Rattata', 'rattata', 'rattata', 'Rattfratz', 'ラッタ', '꼬렛', '小拉达', 'rattata'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/rattata.png',
			image: './src/assets/images/pokemon/normal/rattata-walk.png',
			frames: 7
		},
		hp: 70,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 4,
	},
	raticate: {
		id: 'raticate',
		isElite: false,
		isBoss: false,
		name: ['raticate', 'raticate', 'Rattatac', 'raticate', 'raticate', 'Rattikarl', 'ラッタ', '레트라', '拉达', 'raticate'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/raticate.png',
			image: './src/assets/images/pokemon/normal/raticate-walk.png',
			frames: 6
		},
		hp: 700,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 8,
	},
	ledyba: {
		id: 'ledyba',
		isElite: false,
		isBoss: false,
		name: ['ledyba', 'ledyba', 'Coxy', 'ledyba', 'ledyba', 'Ledyba', 'レディバ', '레디바', '甜甜萤', 'ledyba'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/ledyba.png',
			image: './src/assets/images/pokemon/normal/ledyba-walk.png',
			frames: 6
		},
		hp: 60,
		speed: 1.5,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 4,
	},
	ledian: {
		id: 'ledian',
		isElite: false,
		isBoss: false,
		name: ['ledian', 'ledian', 'Coxyclaque', 'ledian', 'ledian', 'Ledian', 'レディアン', '레디안', '灯火虫', 'ledian'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/ledian.png',
			image: './src/assets/images/pokemon/normal/ledian-walk.png',
			frames: 6
		},
		hp: 600,
		speed: 1.5,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 8,
	},
	rookidee: {
		id: 'rookidee',
		isElite: false,
		isBoss: false,
		name: ['rookidee', 'rookidee', 'Minisange', 'rookidee', 'rookidee', 'Meikro', 'ココガラ', '루키디', '小卡比鸟', 'rookidee'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/rookidee.png',
			image: './src/assets/images/pokemon/normal/rookidee-walk.png',
			frames: 5
		},
		hp: 80,
		armor: 210,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 5,
	},
	corvisquire: {
		id: 'corvisquire',
		isElite: false,
		isBoss: false,
		name: ['corvisquire', 'corvisquire', 'Bleuseille', 'corvisquire', 'corvisquire', 'Kranoviz', 'アオガラス', '크로비스', '蓝鸦', 'corvisquire'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/corvisquire.png',
			image: './src/assets/images/pokemon/normal/corvisquire-walk.png',
			frames: 6,
		},
		hp: 510,
		armor: 1020,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 10,
	},
	corviknight: {
		id: 'corviknight',
		isElite: false,
		isBoss: false,
		name: ['corviknight', 'corviknight', 'Corvaillus', 'corviknight', 'corviknight', 'Krarmor', 'アーマーガア', '아머까마귀', '黑钢鸟', 'corviknight'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/corviknight.png',
			image: './src/assets/images/pokemon/normal/corviknight-walk.png',
			frames: 6
		},
		hp: 1550,
		armor: 4070,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 25,
	},
	doduo: {
		id: 'doduo',
		isElite: false,
		isBoss: false,
		name: ['doduo', 'doduo', 'Doduo', 'doduo', 'doduo', 'Dodu', 'ドードー', '두두', '嘟嘟', 'doduo'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/doduo.png',
			image: './src/assets/images/pokemon/normal/doduo-walk.png',
			frames: 4
		},
		hp: 80,
		speed: 2,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 7,
	},
	dodrio: {
		id: 'dodrio',
		isElite: false,
		isBoss: false,
		name: ['dodrio', 'dodrio', 'Dodrio', 'dodrio', 'dodrio', 'Dodri', 'ドードリオ', '두트리오', '嘟嘟利', 'dodrio'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/dodrio.png',
			image: './src/assets/images/pokemon/normal/dodrio-walk.png',
			frames: 6
		},
		hp: 780,
		speed: 2.5,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 14,
	},
	chingling: {
		id: 'chingling',
		isElite: false,
		isBoss: false,
		name: ['chingling', 'chingling', 'Korillon', 'chingling', 'chingling', 'Klingplim', 'チリーン', '치링', '铃铛响', 'chingling'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/chingling.png',
			image: './src/assets/images/pokemon/normal/chingling-walk.png',
			frames: 9
		},
		hp: 350,
		armor: 0,
		speed: 1.2,
		power: 1,
		regeneration: 5, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 8,
	},
	chimecho: {
		id: 'chimecho',
		isElite: false,
		isBoss: false,
		name: ['chimecho', 'chimecho', 'Éoko', 'chimecho', 'chimecho', 'Palimpalim', 'チャイム', '차임', '铃铛铃', 'chimecho'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/chimecho.png',
			image: './src/assets/images/pokemon/normal/chimecho-walk.png',
			frames: 4
		},
		hp: 1210,
		speed: 1.2,
		power: 1,
		regeneration: 10, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 16,
	},
	bonsly: {
		id: 'bonsly',
		isElite: false,
		isBoss: false,
		name: ['bonsly', 'bonsly', 'Manzaï', 'bonsly', 'bonsly', 'Mobai', 'ウソハチ', '봉슬리', '嘟嘟利', 'bonsly'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/bonsly.png',
			image: './src/assets/images/pokemon/normal/bonsly-walk.png',
			frames: 4
		},
		hp: 50,
		armor: 500,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 8,
	},
	sudowoodo: {
		id: 'sudowoodo',
		isElite: false,
		isBoss: false,
		name: ['sudowoodo', 'sudowoodo', 'Simularbre', 'sudowoodo', 'sudowoodo', 'Mogelbaum', 'ウソッキー', '우소키', '悬木熊', 'sudowoodo'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/sudowoodo.png',
			image: './src/assets/images/pokemon/normal/sudowoodo-walk.png',
			frames: 4
		},
		hp: 410,
		armor: 2220,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 16,
	},
	bellsprout: {
		id: 'bellsprout',
		isElite: false,
		isBoss: false,
		name: ['bellsprout', 'bellsprout', 'Chétiflor', 'bellsprout', 'bellsprout', 'Knofensa', 'マダツボミ', '냄새꼬', '喇叭芽', 'bellsprout'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/bellsprout.png',
			image: './src/assets/images/pokemon/normal/bellsprout-walk.png',
			frames: 4
		},
		hp: 450,
		speed: 1,
		power: 1,
		regeneration: 3, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 6,
	},
	weepinbell: {
		id: 'weepinbell',
		isElite: false,
		isBoss: false,
		name: ['weepinbell', 'weepinbell', 'Boustiflor', 'weepinbell', 'weepinbell', 'Ultrigaria', 'ウツドン', '우츠동', '口呆花', 'weepinbell'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/weepinbell.png',
			image: './src/assets/images/pokemon/normal/weepinbell-walk.png',
			frames: 4
		},
		hp: 920,
		speed: 1,
		power: 1,
		regeneration: 5, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 12,
	},
	victreebel: {
		id: 'victreebel',
		isElite: false,
		isBoss: false,
		name: ['victreebel', 'victreebel', 'Empiflor', 'victreebel', 'victreebel', 'Sarzenia', 'ウツボット', '우츠보트', '大食花', 'victreebel'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/victreebel.png',
			image: './src/assets/images/pokemon/normal/victreebel-walk.png',
			frames: 9
		},
		hp: 3050,
		speed: 1,
		power: 1,
		regeneration: 10, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 30,
	},
	delibird: {
		id: 'delibird',
		isElite: false,
		isBoss: false,
		name: ['delibird', 'delibird', 'Cadoizo', 'delibird', 'delibird', 'Botogel', 'デリバード', '델리버드', '速食鸟', 'delibird'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/delibird.png',
			image: './src/assets/images/pokemon/normal/delibird-walk.png',
			frames: 4
		},
		hp: 500,
		speed: 4,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 500,
	},
	ditto: {
		id: 'ditto',
		isElite: false,
		isBoss: false,
		name: ['ditto', 'ditto', 'Métamorph', 'ditto', 'ditto', 'Ditto', 'メタモン', '메타몽', '百变怪', 'ditto'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/ditto.png',
			image: './src/assets/images/pokemon/normal/ditto-walk.png',
			frames: 5
		},
		hp: 330,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: true,
		gold: 10,
	},
	chansey: {
		id: 'chansey',
		isElite: false,
		isBoss: false,
		name: ['chansey', 'chansey', 'Leveinard', 'chansey', 'chansey', 'Chaneira', 'ラッキー', '럭키', '幸运蛋', 'chansey'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/chansey.png',
			image: './src/assets/images/pokemon/normal/chansey-walk.png',
			frames: 4
		},
		hp: 5080,
		speed: 0.6,
		power: 1,
		regeneration: 5, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 75,
	},
	volbeat: {
		id: 'volbeat',
		isElite: false,
		isBoss: false,
		name: ['volbeat', 'volbeat', 'Muciole', 'volbeat', 'volbeat', 'Volbeat', 'バルビート', '볼비트', '亮闪虫', 'volbeat'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/volbeat.png',
			image: './src/assets/images/pokemon/normal/volbeat-walk.png',
			frames: 8
		},
		hp: 10220,
		speed: 1,
		power: 1,
		regeneration: 8, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 115,
	},
	illumise: {
		id: 'illumise',
		isElite: false,
		isBoss: false,
		name: ['illumise', 'illumise', 'Lumivole', 'illumise', 'illumise', 'Illumise', 'イルミーゼ', '일루미제', '蜜光虫', 'illumise'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/illumise.png',
			image: './src/assets/images/pokemon/normal/illumise-walk.png',
			frames: 2
		},
		hp: 2090,
		armor: 8010,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 115,
	},
	phantum: {
		id: 'phantum',
		isElite: false,
		isBoss: false,
		name: ['phantump', 'phantump', 'Brocélôme', 'phantump', 'phantump', 'Paragoni', 'ファントム', '팬텀', '幻影怪', 'phantump'],
			sprite: {
			base:  './src/assets/images/pokemon/normal/phantump.png',
			image: './src/assets/images/pokemon/normal/phantump-walk.png',
			frames: 6
		},
		hp: 3500,
		armor: 2700,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 80,
	},
	trevenant: {
		id: 'trevenant',
		isElite: false,
		isBoss: false,
		name: ['trevenant', 'trevenant', 'Desséliande', 'trevenant', 'Trevenenant', 'Trombork', 'トリミアン', '트리베난트', '树灵', 'trevenant'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/trevenant.png',
			image: './src/assets/images/pokemon/normal/trevenant-walk.png',
			frames: 4
		},
		hp: 3510,
		armor: 5170,
		speed: 1,
		power: 2,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 250,
	},
	caterpie: {
		id: 'caterpie',
		isElite: false,
		isBoss: false,
		name: ['caterpie', 'caterpie', 'Chenipan', 'caterpie', 'caterpie', 'Raupy', 'キャタピー', '캐터피', '波波', 'caterpie'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/caterpie.png',
			image: './src/assets/images/pokemon/normal/caterpie-walk.png',
			frames: 3
		},
		hp: 50,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 2,
	},
	superCaterpie: {
		id: 'superCaterpie',
		isElite: false,
		isBoss: false,
		name: ['caterpie', 'caterpie', 'Chenipan', 'caterpie', 'caterpie', 'Raupy', 'キャタピー', '캐터피', '绿毛虫', 'caterpie'],
		sprite: {
			base:  './src/assets/images/pokemon/shiny/caterpie.png',
			image: './src/assets/images/pokemon/shiny/caterpie-walk.png',
			frames: 3
		},
		hp: 100000,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 2500,
	},
	metapod: {
		id: 'metapod',
		isElite: false,
		isBoss: false,
		name: ['metapod', 'metapod', 'Chrysacier', 'metapod', 'metapod', 'Safcon', 'トランセル', '트란셀', '铁甲蛹', 'metapod'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/metapod.png',
			image: './src/assets/images/pokemon/normal/metapod-walk.png',
			frames: 4
		},
		hp: 90,
		armor: 300,
		speed: 0.5,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 4,
	},
	butterfree: {
		id: 'butterfree',
		isElite: false,
		isBoss: false,
		name: ['butterfree', 'butterfree', 'Papilusion', 'butterfree', 'butterfree', 'Smettbo', 'バタフリー', '버터플', '巴大蝶', 'butterfree'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/butterfree.png',
			image: './src/assets/images/pokemon/normal/butterfree-walk.png',
			frames: 4
		},
		hp: 820,
		speed: 1.3,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 8,
	},
	venonat: {
		id: 'venonat',
		isElite: false,
		isBoss: false,
		name: ['venonat', 'venonat', 'Mimitoss', 'venonat', 'venonat', 'Bluzuk', 'コンパン', '콘팡', '派拉蛾', 'venonat'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/venonat.png',
			image: './src/assets/images/pokemon/normal/venonat-walk.png',
			frames: 5
		},
		hp: 350,
		speed: 1.2,
		power: 1,
		regeneration: 4, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 9,
	},
	venomoth: {
		id: 'venomoth',
		isElite: false,
		isBoss: false,
		name: ['venomoth', 'venomoth', 'Aéromite', 'venomoth', 'venomoth', 'Omot', 'モルフォン', '몰폰', '毒粉蛾', 'venomoth'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/venomoth.png',
			image: './src/assets/images/pokemon/normal/venomoth-walk.png',
			frames: 8
		},
		hp: 820,
		speed: 1.2,
		power: 1,
		regeneration: 8, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 18,
	},
	growlitheHisui: {
		id: 'growlitheHisui',
		isElite: false,
		isBoss: false,
		name: ['growlithe', 'growlithe', 'Caninos', 'growlithe', 'growlithe', 'Fukano','ガーディ（ヒスイ）',  '가디 (히스이)', '小火狮（希斯伊）', 'growlithe'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/growlitheHisui.png',
			image: './src/assets/images/pokemon/normal/growlitheHisui-walk.png',
			frames: 4
		},
		hp: 2520,
		speed: 0.6,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 18,
	},
	arcanineHisui: {
		id: 'arcanineHisui',
		isElite: false,
		isBoss: false,
		name: ['arcanine', 'arcanine', 'Arcanin', 'arcanine', 'arcanine', 'Arkani', 'ウインディ',  '윈디', '烈焰犬', 'arcanine'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/arcanineHisui.png',
			image: './src/assets/images/pokemon/normal/arcanineHisui-walk.png',
			frames: 4
		},
		hp: 3120,
		armor: 5950,
		speed: 0.6,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 50,
	},
	drampa: {
		id: 'drampa',
		isElite: false,
		isBoss: false,
		name: ['drampa', 'drampa', 'Draïeul', 'drampa', 'drampa', 'Sen-Long', 'ジジーロン', '지지롱', '老翁龙', 'drampa'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/drampa.png',
			image: './src/assets/images/pokemon/normal/drampa-walk.png',
			frames: 4
		},
		hp: 6080,
		speed: 1.1,
		power: 1,
		regeneration: 15, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 95,
	},
	togedemaru: {
		id: 'togedemaru',
		isElite: false,
		isBoss: false,
		name: ['togedemaru', 'togedemaru', 'Togedemaru', 'togedemaru', 'togedemaru', 'Togedemaru', 'トゲデマル', '토게데마루', '稀奇栗鼠', 'togedemaru'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/togedemaru.png',
			image: './src/assets/images/pokemon/normal/togedemaru-walk.png',
			frames: 8
		},
		hp: 1720,
		armor: 1720,
		speed: 2,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 70,
	},
	axew: {
		id: 'axew',
		isElite: false,
		isBoss: false,
		name: ['axew', 'axew', 'Coupenotte', 'axew', 'axew', 'Milza', 'キバゴ', '덴트', '牙牙', 'axew'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/axew.png',
			image: './src/assets/images/pokemon/normal/axew-walk.png',
			frames: 4
		},
		hp: 450,
		armor: 1270,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 5,
	},
	fraxure: {
		id: 'fraxure',
		isElite: false,
		isBoss: false,
		name: ['fraxure', 'fraxure', 'Incisache', 'fraxure', 'fraxure', 'Sharfax', 'オノンド', '오노두', '双牙龙', 'fraxure'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/fraxure.png',
			image: './src/assets/images/pokemon/normal/fraxure-walk.png',
			frames: 4
		},
		hp: 1210,
		armor: 3920,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 50,
	},
	haxorus: {
		id: 'haxorus',
		isElite: false,
		isBoss: false,
		name: ['haxorus', 'haxorus', 'Tranchodon', 'haxorus', 'haxorus', 'Maxax', 'オノノクス', '오노노크스', '劈斧龙', 'haxorus'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/haxorus.png',
			image: './src/assets/images/pokemon/normal/haxorus-walk.png',
			frames: 4
		},
		hp: 23000,
		armor: 13000,
		speed: 1,
		power: 2,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 500,
	},
	poochyena: {
		id: 'poochyena',
		isElite: false,
		isBoss: false,
		name: ['poochyena', 'poochyena', 'Medhyèna', 'poochyena', 'poochyena', 'Fiffyen', 'ヨルノズク', '포챠이너', '小狼犬', 'poochyena'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/poochyena.png',
			image: './src/assets/images/pokemon/normal/poochyena-walk.png',
			frames: 5
		},
		hp: 1450,
		speed: 1.4,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 30,
	},
	mightyena: {
		id: 'mightyena',
		isElite: false,
		isBoss: false,
		name: ['mightyena', 'mightyena', 'Grahyèna', 'mightyena', 'mightyena', 'Magnayen', 'グラエナ', '마이티에나', '大狼犬', 'mightyena'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/mightyena.png',
			image: './src/assets/images/pokemon/normal/mightyena-walk.png',
			frames: 4
		},
		hp: 3850,
		speed: 2,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 70,
	},
	furfrou: {
		id: 'furfrou',
		isElite: false,
		isBoss: false,
		name: ['furfrou', 'furfrou', 'Couafarel', 'furfrou', 'furfrou', 'Coiffwaff', 'トリミアン', '푸푸리', '多丽米亚', 'furfrou'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/furfrou.png',
			image: './src/assets/images/pokemon/normal/furfrou-walk.png',
			frames: 4
		},
		hp: 15520,
		speed: 1.1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 225,
	},
	miltank: {
		id: 'miltank',
		isElite: false,
		isBoss: false,
		name: ['miltank', 'miltank', 'Écrémeuh', 'miltank', 'miltank', 'Miltank', 'ミルタンク', '밀탱크', '母牛怪', 'miltank'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/miltank.png',
			image: './src/assets/images/pokemon/normal/miltank-walk.png',
			frames: 4
		},
		hp: 19330,
		speed: 1,
		power: 1,
		regeneration: 15, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 392,
	},
	// AREAS 4 - 6
	silicobra: {
		id: 'silicobra',
		isElite: false,
		isBoss: false,
		name: ['silicobra', 'silicobra', 'Dunaja', 'silicobra', 'silicobra', 'Salanga', 'シロデスナ', '실코브라', '沙蚺', 'silicobra'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/silicobra.png',
			image: './src/assets/images/pokemon/normal/silicobra-walk.png',
			frames: 6
		},
		hp: 600,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 5,
	},
	sandaconda: {
		id: 'sandaconda',
		isElite: false,
		isBoss: false,
		name: ['sandaconda', 'sandaconda', 'Dunaconda', 'sandaconda', 'sandaconda', 'Sanaconda', 'サダイジャ', '샌드코브라', '沙蛇王', 'sandaconda'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/sandaconda.png',
			image: './src/assets/images/pokemon/normal/sandaconda-walk.png',
			frames: 6
		},
		hp: 1320,
		speed: 1.2,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 10,
	},
	larvitar: {
		id: 'larvitar',
		isElite: false,
		isBoss: false,
		name: ['larvitar', 'larvitar', 'Embrylex', 'larvitar', 'larvitar', 'Larvitar', 'ヨーギラス', '요가라스', '小岩蛇', 'larvitar'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/larvitar.png',
			image: './src/assets/images/pokemon/normal/larvitar-walk.png',
			frames: 12
		},
		hp: 95,
		armor: 710,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 8,
	},
	pupitar: {
		id: 'pupitar',
		isElite: false,
		isBoss: false,
		name: ['pupitar', 'pupitar', 'Ymphect', 'pupitar', 'pupitar', 'Pupitar', 'サナギラス', '사나기라스', '沙岩蛇', 'pupitar'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/pupitar.png',
			image: './src/assets/images/pokemon/normal/pupitar-walk.png',
			frames: 8,
		},
		hp: 870,
		armor: 1650,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 20,
	},
	tyranitar: {
		id: 'tyranitar',
		isElite: false,
		isBoss: false,
		name: ['tyranitar', 'tyranitar', 'Tyranocif', 'tyranitar', 'tyranitar', 'Despotar', 'バンギラス', '방기라스', '班基拉斯', 'tyranitar'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/tyranitar.png',
			image: './src/assets/images/pokemon/normal/tyranitar-walk.png',
			frames: 4
		},
		hp: 3040,
		armor: 7580,
		speed: 0.8,
		power: 2,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 120,
	},
	sandshrew: { 
		id: 'sandshrew',
		isElite: false,
		isBoss: false,
		name: ['sandshrew', 'sandshrew', 'Sabelette', 'sandshrew', 'sandshrew', 'Sandan', 'サンド', '샌드', '穿山鼠', 'sandshrew'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/sandshrew.png',
			image: './src/assets/images/pokemon/normal/sandshrew-walk.png',
			frames: 4
		},
		hp: 510,
		speed: 1.5,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 5,
	},
	sandslash: { 
		id: 'sandslash',
		isElite: false,
		isBoss: false,
		name: ['sandslash', 'sandslash', 'Sablaireau', 'sandslash', 'sandslash', 'Sandamer', 'サンドパン', '샌드팬', '穿山王', 'sandslash'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/sandslash.png',
			image: './src/assets/images/pokemon/normal/sandslash-walk.png',
			frames: 4
		},
		hp: 1810,
		speed: 1.5,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 10,
	},
	diglett: {
		id: 'diglett',
		isElite: false,
		isBoss: false,
		name: ['diglett', 'diglett', 'Taupiqueur', 'diglett', 'diglett', 'Digda', 'ディグダ', '디그다', '地鼠', 'diglett'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/diglett.png',
			image: './src/assets/images/pokemon/normal/diglett-idle.png',
			frames: 2
		},
		hp: 420,
		speed: 2,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 10,
	},
	dugtrio: {
		id: 'dugtrio',
		isElite: false,
		isBoss: false,
		name: ['dugtrio', 'dugtrio', 'Triopikeur', 'dugtrio', 'dugtrio', 'Digdri', 'ダグトリオ', '두그리오', '三地鼠', 'dugtrio'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/dugtrio.png',
			image: './src/assets/images/pokemon/normal/dugtrio-idle.png',
			frames: 2
		},
		hp: 1980,
		speed: 2.5,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 35,
	},
	hippopotas: {
		id: 'hippopotas',
		isElite: false,
		isBoss: false,
		name: ['hippopotas', 'hippopotas', 'Hippopotas', 'hippopotas', 'hippopotas', 'Hippopotas', 'ヒポポタス', '히포포타스', '沙河马', 'hippopotas'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/hippopotas.png',
			image: './src/assets/images/pokemon/normal/hippopotas-walk.png',
			frames: 4
		},
		hp: 920,
		armor: 0,
		speed: 0.8,
		power: 1,
		regeneration: 5, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 12,
	},
	hippowdon: {
		id: 'hippowdon',
		isElite: false,
		isBoss: false,
		name: ['hippowdon', 'hippowdon', 'Hippodocus', 'hippowdon', 'Hippowdon', 'Hippoterus', 'カバルドン', '히포도', '河马兽', 'hippowdon'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/hippowdon.png',
			image: './src/assets/images/pokemon/normal/hippowdon-walk.png',
			frames: 4
		},
		hp: 3210,
		speed: 1,
		power: 1,
		regeneration: 20, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 40,
	},
	golett: {
		id: 'golett',
		isElite: false,
		isBoss: false,
		name: ['golett', 'golett', 'Gringolem', 'golett', 'golett', 'Golbit', 'ゴビット', '골렛트', '固拉多', 'golett'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/golett.png',
			image: './src/assets/images/pokemon/normal/golett-walk.png',
			frames: 4
		},
		hp: 450,
		armor: 925,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 11,
	},
	golurk: {
		id: 'golurk',
		isElite: false,
		isBoss: false,
		name: ['golurk', 'golurk', 'Golemastoc', 'golurk', 'golurk', 'Golgantes', 'ゴルーグ', '골루그', '哥鲁冈', 'golurk'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/golurk.png',
			image: './src/assets/images/pokemon/normal/golurk-walk.png',
			frames: 4
		},
		hp: 990,
		armor: 4200,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 32,
	},
	kecleon: {
		id: 'kecleon',
		isElite: false,
		isBoss: false,
		name: ['kecleon', 'kecleon', 'Kecleon', 'kecleon', 'kecleon', 'Kecleon', 'カクレオン', '케크리온', '变隐龙', 'kecleon'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/kecleon.png',
			image: './src/assets/images/pokemon/normal/kecleon-walk.png',
			frames: 4
		},
		hp: 590,
		speed: 3,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: true,
		gold: 25,
	},
	sandile: {
		id: 'sandile',
		isElite: false,
		isBoss: false,
		name: ['sandile', 'sandile', 'Mascaïman', 'sandile', 'sandile', 'Ganovil', 'ワルビル', '샌다일', '沙河马', 'sandile'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/sandile.png',
			image: './src/assets/images/pokemon/normal/sandile-walk.png',
			frames: 4
		},
		hp: 930,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 8,
	},
	krokorok: {
		id: 'krokorok',
		isElite: false,
		isBoss: false,
		name: ['krokorok', 'krokorok', 'Escroco', 'krokorok', 'krokorok', 'Rokkaiman', 'ワルビアル', '크로코록', '沙漠蜥', 'krokorok'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/krokorok.png',
			image: './src/assets/images/pokemon/normal/krokorok-walk.png',
			frames: 4
		},
		hp: 1410,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 21,
	},
	krookodile: {
		id: 'krookodile',
		isElite: false,
		isBoss: false,
		name: ['krookodile', 'krookodile', 'Crocorible', 'krookodile', 'krookodile', 'Rabigator', 'ワルビアル', '크루코다일', '沙漠王', 'krookodile'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/krookodile.png',
			image: './src/assets/images/pokemon/normal/krookodile-walk.png',
			frames: 4
		},
		hp: 4980,
		speed: 1,
		power: 2,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 75,
	},
	maractus: {
		id: 'maractus',
		isElite: false,
		isBoss: false,
		name: ['maractus', 'maractus', 'Maracachi', 'maractus', 'maractus', 'Maracamba', 'マラカッチ', '마라카치', '仙人掌仙人', 'maractus'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/maractus.png',
			image: './src/assets/images/pokemon/normal/maractus-idle.png',
			frames: 5
		},
		hp: 12050,
		speed: 0.6,
		power: 1,
		regeneration: 20, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 155,
	},
	lunatone: {
		id: 'lunatone',
		isElite: false,
		isBoss: false,
		name: ['lunatone', 'lunatone', 'Séléroc', 'lunatone', 'lunatone', 'Lunastein', 'ルナトーン', '루나톤', '月石', 'lunatone'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/lunatone.png',
			image: './src/assets/images/pokemon/normal/lunatone-walk.png',
			frames: 8
		},
		hp: 7020,
		armor: 7000,
		speed: 0.8,
		power: 1,
		regeneration: 11, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 185,
	},
	solrock: {
		id: 'solrock',
		isElite: false,
		isBoss: false,
		name: ['solrock', 'solrock', 'Solaroc', 'solrock', 'solrock', 'Sonnfel', 'ソルロック', '솔록', '太阳岩', 'solrock'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/solrock.png',
			image: './src/assets/images/pokemon/normal/solrock-walk.png',
			frames: 6
		},
		hp: 7000,
		armor: 7020,
		speed: 0.8,
		power: 1,
		regeneration: 11, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 185,
	},
	cacnea: {
		id: 'cacnea',
		isElite: false,
		isBoss: false,
		name: ['cacnea', 'cacnea', 'Cacnea', 'cacnea', 'cacnea', 'Tuska', 'サボネア', '카크네아', '圆针仙人掌', 'cacnea'],

			sprite: {
			base:  './src/assets/images/pokemon/normal/cacnea.png',
			image: './src/assets/images/pokemon/normal/cacnea-walk.png',
			frames: 4
		},
		hp: 14070,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 240,
	},
	cacturne: {
		id: 'cacturne',
		isElite: false,
		isBoss: false,
		name: ['cacturne', 'cacturne', 'Cacturne', 'cacturne', 'cacturne', 'Noktuska', 'ノクタス', '캑터네', '刺球仙人掌', 'cacturne'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/cacturne.png',
			image: './src/assets/images/pokemon/normal/cacturne-walk.png',
			frames: 4
		},
		hp: 20190,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 445,
	},
	poliwag: {
		id: 'poliwag',
		isElite: false,
		isBoss: false,
		name: ['poliwag', 'poliwag', 'Ptitard', 'poliwag', 'poliwag', 'Quapsel', 'ニョロモ', '폴리와그', '蚊香蝌蚪', 'poliwag'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/poliwag.png',
			image: './src/assets/images/pokemon/normal/poliwag-walk.png',
			frames: 5
		},
		hp: 200,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 3,
	},
	poliwhirl: {
		id: 'poliwhirl',
		isElite: false,
		isBoss: false,
		name: ['poliwhirl', 'poliwhirl', 'Têtarte', 'poliwhirl', 'poliwhirl', 'Quaputzi', 'ニョロゾ', '폴리와르', '蚊香蛙', 'poliwhirl'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/poliwhirl.png',
			image: './src/assets/images/pokemon/normal/poliwhirl-walk.png',
			frames: 4
		},
		hp: 810,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 5,
	},
	poliwrath: {
		id: 'poliwrath',
		isElite: false,
		isBoss: false,
		name: ['poliwrath', 'poliwrath', 'Tartard', 'poliwrath', 'poliwrath', 'Quappo', 'ニョロボン', '폴리라스', '快泳蛙', 'poliwrath'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/poliwrath.png',
			image: './src/assets/images/pokemon/normal/poliwrath-walk.png',
			frames: 4
		},
		hp: 1450,
		speed: 1,
		power: 1,
		regeneration: 4, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 10,
	},
	politoed: {
		id: 'politoed',
		isElite: false,
		isBoss: false,
		name: ['politoed', 'politoed', 'Tarpaud', 'politoed', 'politoed', 'Quaxo', 'ニョロトノ', '폴리토드', '蚊香君', 'politoed'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/politoed.png',
			image: './src/assets/images/pokemon/normal/politoed-walk.png',
			frames: 7
		},
		hp: 880,
		speed: 1.2,
		power: 1,
		regeneration: 5, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 10,
	},
	gligar: {
		id: 'gligar',
		isElite: false,
		isBoss: false,
		name: ['gligar', 'gligar', 'Scorplane', 'gligar', 'gligar', 'Skorgla', 'グライガー', '글라이거', '天蝎', 'gligar'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/gligar.png',
			image: './src/assets/images/pokemon/normal/gligar-walk.png',
			frames: 8
		},
		hp: 1950,
		speed: 1.4,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 18,
	},
	darumaka: {
		id: 'darumaka',
		isElite: false,
		isBoss: false,
		name: ['darumaka', 'darumaka', 'Darumarond', 'darumaka', 'darumaka', 'Flampion', 'ダルマッカ', '다루마카', '火红不倒翁', 'darumaka'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/darumaka.png',
			image: './src/assets/images/pokemon/normal/darumaka-walk.png',
			frames: 8
		},
		hp: 4510,
		speed: 0.6,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 36,
	},
	darmanitan: {
		id: 'darmanitan',
		isElite: false,
		isBoss: false,
		name: ['darmanitan', 'darmanitan', 'Darumacho', 'darmanitan', 'darmanitan', 'Flampivian', 'ヒヒダルマ', '다만탄', '炎帝', 'darmanitan'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/darmanitan.png',
			image: './src/assets/images/pokemon/normal/darmanitan-walk.png',
			frames: 4
		},
		hp: 11060,
		armor: 6080,
		speed: 0.6,
		power: 1,
		regeneration: 5, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 180,
	},
	minior: {
		id: 'minior',
		isElite: false,
		isBoss: false,
		name: ['minior', 'minior', 'Météno', 'minior', 'minior', 'Meteno', 'ミノムッチ', '미노르', '小陨星', 'minior'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/minior.png',
			image: './src/assets/images/pokemon/normal/minior-walk.png',
			frames: 12
		},
		hp: 3110,
		armor: 24090,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 525,
	},
	kangaskhan: {
		id: 'kangaskhan',
		isElite: false,
		isBoss: false,
		name: ['kangaskhan', 'kangaskhan', 'Kangourex', 'kangaskhan', 'kangaskhan', 'Kangama', 'ガルーラ', '캥카', '卡拉卡拉', 'kangaskhan'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/kangaskhan.png',
			image: './src/assets/images/pokemon/normal/kangaskhan-walk.png',
			frames: 5
		},
		hp: 6150,
		speed: 2,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 145,
	},
	trapinch: {
		id: 'trapinch',
		isElite: false,
		isBoss: false,
		name: ['trapinch', 'trapinch', 'Kraknoix', 'trapinch', 'trapinch', 'Knacklion', 'ナックラー', '트라핀치', '龙蜻蜓', 'trapinch'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/trapinch.png',
			image: './src/assets/images/pokemon/normal/trapinch-idle.png',
			frames: 4
		},
		hp: 1500,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 6,
	},
	vibrava: {
		id: 'vibrava',
		isElite: false,
		isBoss: false,
		name: ['vibrava', 'vibrava', 'Vibraninf', 'vibrava', 'vibrava', 'Vibrava', 'ビブラーバ', '비브라바', '沙漠蜻蜓', 'vibrava'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/vibrava.png',
			image: './src/assets/images/pokemon/normal/vibrava-idle.png',
			frames: 9
		},
		hp: 5500,
		speed: 1,
		power: 1,
		regeneration: 4, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 60,
	},
	flygon: {
		id: 'flygon',
		isElite: false,
		isBoss: false,
		name: ['flygon', 'flygon', 'Libégon', 'flygon', 'flygon', 'Libelldra', 'フライゴン', '플라이곤', '沙漠之龙', 'flygon'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/flygon.png',
			image: './src/assets/images/pokemon/normal/flygon-idle.png',
			frames: 7
		},
		hp: 32500,
		speed: 1,
		power: 2,
		regeneration: 20, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 600,
	},
	baltoy: {
		id: 'baltoy',
		isElite: false,
		isBoss: false,
		name: ['baltoy', 'baltoy', 'Balbuto', 'baltoy', 'baltoy', 'Puppance', 'ヤジロン', '발토이', '天秤宝', 'baltoy'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/baltoy.png',
			image: './src/assets/images/pokemon/normal/baltoy-walk.png',
			frames: 6
		},
		hp: 2510,
		speed: 0.9,
		power: 1,
		regeneration: 5, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 35,
	},
	claydol: {
		id: 'claydol',
		isElite: false,
		isBoss: false,
		name: ['claydol', 'claydol', 'Kaorine', 'claydol', 'claydol', 'Lepumentas', 'ネンドール', '클레이돌', '塔克隆', 'claydol'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/claydol.png',
			image: './src/assets/images/pokemon/normal/claydol-walk.png',
			frames: 2
		},
		hp: 6060,
		speed: 0.9,
		power: 1,
		regeneration: 25, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 80,
	},
	sigilyph: {
		id: 'sigilyph',
		isElite: false,
		isBoss: false,
		name: ['sigilyph', 'sigilyph', 'Cryptéro', 'sigilyph', 'sigilyph', 'Symvolara', 'ヨノワール', '시질리프', '玄武怪', 'sigilyph'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/sigilyph.png',
			image: './src/assets/images/pokemon/normal/sigilyph-walk.png',
			frames: 4
		},
		hp: 12120,
		speed: 1,
		power: 1,
		regeneration: 10, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 215,
	},
	gliscor: {
		id: 'gliscor',
		isElite: false,
		isBoss: false,
		name: ['gliscor', 'gliscor', 'Scorvol', 'gliscor', 'gliscor', 'Skorgola', 'グライオン', '글라이거', '天蝎王', 'gliscor'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/gliscor.png',
			image: './src/assets/images/pokemon/normal/gliscor-walk.png',
			frames: 4
		},
		hp: 17140,
		speed: 1,
		power: 2,
		regeneration: 20, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 365,
	},

	
	// AREAS 7 - 9
	minccino: {
		id: 'minccino',
		isElite: false,
		isBoss: false,
		name: ['minccino', 'minccino', 'Chinchidou', 'minccino', 'minccino', 'Picochilla', 'チラーミィ', '민치노', '奇鲁莉安', 'minccino'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/minccino.png',
			image: './src/assets/images/pokemon/normal/minccino-walk.png',
			frames: 8
		},
		hp: 960,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 6,
	},
	cinccino: {
		id: 'cinccino',
		isElite: false,
		isBoss: false,
		name: ['cinccino', 'cinccino', 'Pashmilla', 'cinccino', 'cinccino', 'Chillabell', 'チェリミィ', '친치노', '奇鲁莉安进化', 'cinccino'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/cinccino.png',
			image: './src/assets/images/pokemon/normal/cinccino-walk.png',
			frames: 4
		},
		hp: 2010,
		speed: 1.5,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 15,
	},
	sneasel: {
		id: 'sneasel',
		isElite: false,
		isBoss: false,
		name: ['sneasel', 'sneasel', 'Farfuret', 'sneasel', 'sneasel', 'Sniebel', 'ニューラ', '스니젤', '劈爪', 'sneasel'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/sneasel.png',
			image: './src/assets/images/pokemon/normal/sneasel-walk.png',
			frames: 4
		},
		hp: 880,
		speed: 1.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 6,
	},
	weavile: {
		id: 'weavile',
		isElite: false,
		isBoss: false,
		name: ['weavile', 'weavile', 'Dimoret', 'weavile', 'weavile', 'Snibunna', 'マニューラ', '마뉴라', '月亮伊布进化', 'weavile'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/weavile.png',
			image: './src/assets/images/pokemon/normal/weavile-walk.png',
			frames: 4
		},
		hp: 2150,
		speed: 1.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 25,
	},
	swinub: {
		id: 'swinub',
		isElite: false,
		isBoss: false,
		name: ['swinub', 'swinub', 'Marcacrin', 'swinub', 'swinub', 'Quiekel', 'ウリムー', '스윈브', '小海猪', 'swinub'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/swinub.png',
			image: './src/assets/images/pokemon/normal/swinub-walk.png',
			frames: 7
		},
		hp: 1500,
		armor: 0,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 11,
	},
	piloswine: {
		id: 'piloswine',
		isElite: false,
		isBoss: false,
		name: ['piloswine', 'piloswine', 'Cochignon', 'piloswine', 'piloswine', 'Keifel', 'イノムー', '파일로스', '豪猪', 'piloswine'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/piloswine.png',
			image: './src/assets/images/pokemon/normal/piloswine-walk.png',
			frames: 5,
		},
		hp: 4940,
		armor: 920,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 42,
	},
	mamoswine: {
		id: 'mamoswine',
		isElite: false,
		isBoss: false,
		name: ['mamoswine', 'mamoswine', 'Mammochon', 'mamoswine', 'mamoswine', 'Mamutel', 'マンムー', '매머드', '猛犸象', 'mamoswine'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/mamoswine.png',
			image: './src/assets/images/pokemon/normal/mamoswine-walk.png',
			frames: 4
		},
		hp: 15290,
		armor: 8580,
		speed: 0.8,
		power: 2,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 180,
	},
	hoothoot: {
		id: 'hoothoot',
		isElite: false,
		isBoss: false,
		name: ['hoothoot', 'hoothoot', 'Hoothoot', 'hoothoot', 'hoothoot', 'Hoothoot', 'ホーホー', '후후', '咕咕', 'hoothoot'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/hoothoot.png',
			image: './src/assets/images/pokemon/normal/hoothoot-walk.png',
			frames: 5
		},
		hp: 1340,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 13,
	},
	noctowl: {
		id: 'noctowl',
		isElite: false,
		isBoss: false,
		name: ['noctowl', 'noctowl', 'Noarfang', 'noctowl', 'noctowl', 'Noctuh', 'ホーホー', '부우', '猫头鹰', 'noctowl'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/noctowl.png',
			image: './src/assets/images/pokemon/normal/noctowl-walk.png',
			frames: 4
		},
		hp: 4080,
		speed: 1.5,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 45,
	},
	swablu: {
		id: 'swablu',
		isElite: false,
		isBoss: false,
		name: ['swablu', 'swablu', 'Tylton', 'swablu', 'swablu', 'Wablu', 'チルット', '스왑블루', '小蓝鸟', 'swablu'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/swablu.png',
			image: './src/assets/images/pokemon/normal/swablu-walk.png',
			frames: 6
		},
		hp: 1120,
		speed: 1.2,
		power: 1,
		regeneration: 15, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 15,
	},
	altaria: {
		id: 'altaria',
		isElite: false,
		isBoss: false,
		name: ['altaria', 'altaria', 'Altaria', 'altaria', 'altaria', 'Altaria', 'チルタリス', '알타리아', '拉鲁拉丝', 'altaria'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/altaria.png',
			image: './src/assets/images/pokemon/normal/altaria-walk.png',
			frames: 4
		},
		hp: 3780,
		speed: 1.2,
		power: 1,
		regeneration: 25, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 72,
	},
	snover: {
		id: 'snover',
		isElite: false,
		isBoss: false,
		name: ['snover', 'snover', 'Blizzi', 'snover', 'snover', 'Shnebedeck', 'ユキカブリ', '스노버', '小雪怪', 'snover'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/snover.png',
			image: './src/assets/images/pokemon/normal/snover-walk.png',
			frames: 4
		},
		hp: 2510,
		armor: 620,
		speed: 0.8,
		power: 1,
		regeneration: 5, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 25,
	},
	abomasnow: {
		id: 'abomasnow',
		isElite: false,
		isBoss: false,
		name: ['abomasnow', 'abomasnow', 'Blizzaroi', 'abomasnow', 'abomasnow', 'Rexblisar', 'ユキノオー', '아보마', '冰雪巨龙', 'abomasnow'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/abomasnow.png',
			image: './src/assets/images/pokemon/normal/abomasnow-walk.png',
			frames: 4
		},
		hp: 9590,
		armor: 1200,
		speed: 0.8,
		power: 2,
		regeneration: 10, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 75,
	},
	tympole: {
		id: 'tympole',
		isElite: false,
		isBoss: false,
		name: ['tympole', 'tympole', 'Tritonde', 'tympole', 'tympole', 'Schallquap', 'ミズゴロウ', '팀폴', '水陆蛙', 'tympole'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/tympole.png',
			image: './src/assets/images/pokemon/normal/tympole-walk.png',
			frames: 6
		},
		hp: 2000,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 11,
	},
	palpitoad: {
		id: 'palpitoad',
		isElite: false,
		isBoss: false,
		name: ['palpitoad', 'palpitoad', 'Batracné', 'palpitoad', 'palpitoad', 'Mebrana', 'ヌマクロー', '팔피토드', '泥泥蛙', 'palpitoad'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/palpitoad.png',
			image: './src/assets/images/pokemon/normal/palpitoad-walk.png',
			frames: 4
		},
		hp: 3280,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 25,
	},
	seismitoad: {
		id: 'seismitoad',
		isElite: false,
		isBoss: false,
		name: ['seismitoad', 'seismitoad', 'Crapustule', 'seismitoad', 'seismitoad', 'Branawarz', 'ラグラージ', '세이즈토드', '巨沼怪', 'seismitoad'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/seismitoad.png',
			image: './src/assets/images/pokemon/normal/seismitoad-walk.png',
			frames: 4
		},
		hp: 11780,
		speed: 1,
		power: 1,
		regeneration: 40, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 140,
	},
	snorlax: {
		id: 'snorlax',
		isElite: false,
		isBoss: false,
		name: ['snorlax', 'snorlax', 'Ronflex', 'snorlax', 'snorlax', 'Relaxo', 'カビゴン', '잠만보', '卡比兽', 'snorlax'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/snorlax.png',
			image: './src/assets/images/pokemon/normal/snorlax-walk.png',
			frames: 4
		},
		hp: 30000,
		speed: 0.6,
		power: 1,
		regeneration: 50, 
		canStun: true,
		canSlow: false,
		canBurn: false,
		canPoison: false,
		invisible: false,
		gold: 300,
	},
	jynx: {
		id: 'jynx',
		isElite: false,
		isBoss: false,
		name: ['jynx', 'jynx', 'Lippoutou', 'jynx', 'jynx', 'Rossana', 'ルージュラ', '루주라', '迷唇姐', 'jynx'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/jynx.png',
			image: './src/assets/images/pokemon/normal/jynx-walk.png',
			frames: 4
		},
		hp: 16660,
		speed: 2,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 250,
	},
	lapras: {
		id: 'lapras',
		isElite: false,
		isBoss: false,
		name: ['lapras', 'lapras', 'Lokhlass', 'lapras', 'lapras', 'Lapras', 'ラプラス', '라프라스', '拉普拉斯', 'lapras'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/lapras.png',
			image: './src/assets/images/pokemon/normal/lapras-idle.png',
			frames: 4
		},
		hp: 20550,
		armor: 12000,
		speed: 0.8,
		power: 1,
		regeneration: 50, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 450,
	},
	slowpoke: {
		id: 'slowpoke',
		isElite: false,
		isBoss: false,
		name: ['slowpoke', 'slowpoke', 'Ramoloss', 'slowpoke', 'slowpoke', 'Flegmon', 'ヤドン', '야돈', '呆呆兽', 'slowpoke'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/slowpoke.png',
			image: './src/assets/images/pokemon/normal/slowpoke-walk.png',
			frames: 4
		},
		hp: 22770,
		speed: 0.5,
		power: 1,
		regeneration: 50, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 320,
	},
	slowbro: {
		id: 'slowbro',
		isElite: false,
		isBoss: false,
		name: ['slowbro', 'slowbro', 'Flagadoss', 'slowbro', 'slowbro', 'Lahmus', 'ヤドラン', '야도란', '呆河马', 'slowbro'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/slowbro.png',
			image: './src/assets/images/pokemon/normal/slowbro-walk.png',
			frames: 4
		},
		hp: 22770,
		armor: 22770,
		speed: 0.5,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 515,
	},
	vanillite: {
		id: 'vanillite',
		isElite: false,
		isBoss: false,
		name: ['vanillite', 'vanillite', 'Sorbébé', 'vanillite', 'vanillite', 'Gelatini', 'バニプッチ', '바닐라이트', '香雪糕', 'vanillite'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/vanillite.png',
			image: './src/assets/images/pokemon/normal/vanillite-walk.png',
			frames: 6
		},
		hp: 380,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 4,
	},
	vanillish: {
		id: 'vanillish',
		isElite: false,
		isBoss: false,
		name: ['vanillish', 'vanillish', 'Sorboul', 'vanillish', 'vanillish', 'Gelatroppo', 'バニリッチ', '바닐리시', '雪糕怪', 'vanillish'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/vanillish.png',
			image: './src/assets/images/pokemon/normal/vanillish-walk.png',
			frames: 8
		},
		hp: 250,
		armor: 1050,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 12,
	},
	vanilluxe: {
		id: 'vanilluxe',
		isElite: false,
		isBoss: false,
		name: ['vanilluxe', 'vanilluxe', 'Sorbouboul', 'vanilluxe', 'vanilluxe', 'Gelatwino', 'バイバニラ', '바닐럭스', '冰雪巨龙', 'vanilluxe'],
		sprite: {
			base: './src/assets/images/pokemon/normal/vanilluxe.png',
			image: './src/assets/images/pokemon/normal/vanilluxe-walk.png',
			frames: 4
		},
		hp: 2590,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 40,
	},
	shellos: {
		id: 'shellos',
		isElite: false,
		isBoss: false,
		name: ['shellos', 'shellos', 'Sancoki', 'shellos', 'shellos', 'Schalellos', 'ヌメラ', '쉘로스', '海兔兽', 'shellos'],
		sprite: {
			base: './src/assets/images/pokemon/normal/shellos.png',
			image: './src/assets/images/pokemon/normal/shellos-walk.png',
			frames: 6
		},
		hp: 2350,
		speed: 1.2,
		power: 1,
		regeneration: 4, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 30,
	},
	gastrodon: {
		id: 'gastrodon',
		isElite: false,
		isBoss: false,
		name: ['gastrodon', 'gastrodon', 'Tritosor', 'gastrodon', 'gastrodon', 'Gastrodon', 'ヌメイル', '가스트로드', '海星兽', 'gastrodon'],
		sprite: {
			base: './src/assets/images/pokemon/normal/gastrodon.png',
			image: './src/assets/images/pokemon/normal/gastrodon-walk.png',
			frames: 6
		},
		hp: 4820,
		speed: 1.2,
		power: 1,
		regeneration: 8, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 80,
	},
	absol: {
		id: 'absol',
		isElite: false,
		isBoss: false,
		name: ['absol', 'absol', 'Absol', 'absol', 'absol', 'Absol', 'アブソル', '압솔', '阿勃梭鲁', 'absol'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/absol.png',
			image: './src/assets/images/pokemon/normal/absol-walk.png',
			frames: 4
		},
		hp: 1650,
		speed: 2,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: true,
		gold: 50,
	},
	shellder: {
		id: 'shellder',
		isElite: false,
		isBoss: false,
		name: ['shellder', 'shellder', 'Kokiyas', 'shellder', 'shellder', 'Muschas', 'パルシェン', '셸더', '海刺龙', 'shellder'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/shellder.png',
			image: './src/assets/images/pokemon/normal/shellder-walk.png',
			frames: 4
		},
		hp: 7510,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 80,
	},
	cloyster: {
		id: 'cloyster',
		isElite: false,
		isBoss: false,
		name: ['cloyster', 'cloyster', 'Crustabri', 'cloyster', 'cloyster', 'Austos', 'パルシェン', '클로이스터', '刺甲贝', 'cloyster'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/cloyster.png',
			image: './src/assets/images/pokemon/normal/cloyster-walk.png',
			frames: 6
		},
		hp: 11870,
		armor: 11800,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 200,
	},
	froslass: {
		id: 'froslass',
		isElite: false,
		isBoss: false,
		name: ['froslass', 'froslass', 'Momartik', 'froslass', 'froslass', 'Frosdedje', 'ユキメノコ', '프로슬라스', '雪妖女', 'froslass'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/froslass.png',
			image: './src/assets/images/pokemon/normal/froslass-walk.png',
			frames: 8
		},
		hp: 21250,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: true,
		gold: 700,
	},
	glalie: {
		id: 'glalie',
		isElite: false,
		isBoss: false,
		name: ['glalie', 'glalie', 'Oniglali', 'glalie', 'glalie', 'Firnontor', 'オニゴーリ', '글래리', '冰鬼护', 'glalie'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/glalie.png',
			image: './src/assets/images/pokemon/normal/glalie-walk.png',
			frames: 8
		},
		hp: 12220,
		speed: 1.5,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 220,
	},
	spheal: {
		id: 'spheal',
		isElite: false,
		isBoss: false,
		name: ['spheal', 'spheal', 'Obalie', 'spheal', 'spheal', 'Seemops', 'タマザラシ', '스필', '海豹球', 'spheal'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/spheal.png',
			image: './src/assets/images/pokemon/normal/spheal-walk.png',
			frames: 6
		},
		hp: 350,
		armor: 2020,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 9,
	},
	sealeo: {
		id: 'sealeo',
		isElite: false,
		isBoss: false,
		name: ['sealeo', 'sealeo', 'Phogleur', 'sealeo', 'sealeo', 'Seejong', 'トドグラー', '씨리얼', '海豹王', 'sealeo'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/sealeo.png',
			image: './src/assets/images/pokemon/normal/sealeo-walk.png',
			frames: 4
		},
		hp: 1080,
		armor: 5570,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 90,
	},
	walrein: {
		id: 'walrein',
		isElite: false,
		isBoss: false,
		name: ['walrein', 'walrein', 'Kaimorse', 'walrein', 'walrein', 'Walraisa', 'トドゼルガ', '월레인', '帝王海豹', 'walrein'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/walrein.png',
			image: './src/assets/images/pokemon/normal/walrein-walk.png',
			frames: 8
		},
		hp: 26190,
		armor: 15650,
		speed: 0.8,
		power: 2,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 900,
	},

	cubchoo: {
		id: 'cubchoo',
		isElite: false,
		isBoss: false,
		name: ['cubchoo', 'cubchoo', 'Polarhume', 'cubchoo', 'cubchoo', 'Petznief', 'クマシュン', '큐브추', '小熊', 'cubchoo'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/cubchoo.png',
			image: './src/assets/images/pokemon/normal/cubchoo-walk.png',
			frames: 4
		},
		hp: 4880,
		speed: 1.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 118,
	},
	beartic: {
		id: 'beartic',
		isElite: false,
		isBoss: false,
		name: ['beartic', 'beartic', 'Polagriffe', 'beartic', 'beartic', 'Siberio', 'ツンベアー', '베어틱', '冰熊', 'beartic'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/beartic.png',
			image: './src/assets/images/pokemon/normal/beartic-walk.png',
			frames: 4
		},
		hp: 7980,
		speed: 2.1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 195,
	},
	cryogonal: {
		id: 'cryogonal',
		isElite: false,
		isBoss: false,
		name: ['cryogonal', 'cryogonal', 'Hexagel', 'cryogonal', 'cryogonal', 'Frigometri', 'フリージオ', '크라이오', '冰晶怪', 'cryogonal'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/cryogonal.png',
			image: './src/assets/images/pokemon/normal/cryogonal-idle.png',
			frames: 8
		},
		hp: 5510,
		armor: 11110,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 318,
	},
	aerodactyl: {
		id: 'aerodactyl',
		isElite: false,
		isBoss: false,
		name: ['aerodactyl', 'aerodactyl', 'Ptéra', 'aerodactyl', 'aerodactyl', 'Aerodactyl', 'プテラ', '에어로덕틸', '化石翼龙', 'aerodactyl'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/aerodactyl.png',
			image: './src/assets/images/pokemon/normal/aerodactyl-walk.png',
			frames: 8
		},
		hp: 16150,
		armor: 22350,
		speed: 1.2,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 582,
	},

	// AREA 4
	tentacool: {
		id: 'tentacool',
		isElite: false,
		isBoss: false,
		name: ['tentacool', 'tentacool', 'tentacool', 'tentacool', 'tentacool', 'tentacha', 'メノクラゲ', '왕눈해', '玛瑙水母', 'tentacool'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/tentacool.png',
			image: './src/assets/images/pokemon/normal/tentacool-walk.png',
			frames: 4
		},
		hp: 4000,
		speed: 0.8,
		power: 1,
		regeneration: 50, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: false,
		invisible: false,
		gold: 30,
	},
	tentacruel: {
		id: 'tentacruel',
		isElite: false,
		isBoss: false,
		name: ['tentacruel', 'tentacruel', 'tentacruel', 'tentacruel', 'tentacruel', 'tentoxxa', 'ドククラゲ', '독파리', '毒刺水母', 'tentacruel'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/tentacruel.png',
			image: './src/assets/images/pokemon/normal/tentacruel-walk.png',
			frames: 4
		},
		hp: 13500,
		speed: 1,
		power: 1,
		regeneration: 100, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: false,
		invisible: false,
		gold: 50,
	},
	staryu: {
		id: 'staryu',
		isElite: false,
		isBoss: false,
		name: ['staryu', 'staryu', 'stari', 'staryu', 'staryu', 'sterndu', 'ヒトデマン', '별가사리', '海星星', 'staryu'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/staryu.png',
			image: './src/assets/images/pokemon/normal/staryu-walk.png',
			frames: 4
		},
		hp: 3000,
		speed: 2,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: false,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 80,
	},
	starmie: {
		id: 'starmie',
		isElite: false,
		isBoss: false,
		name: ['starmie', 'starmie', 'staross', 'starmie', 'starmie', 'starmie', 'スターミー', '아쿠스타', '宝石海星', 'starmie'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/starmie.png',
			image: './src/assets/images/pokemon/normal/starmie-walk.png',
			frames: 4
		},
		hp: 3620,
		speed: 3,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: false,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 120,
	},
	horsea: {
		id: 'horsea',
		isElite: false,
		isBoss: false,
		name: ['horsea', 'horsea', 'hypotrempe', 'horsea', 'horsea', 'seeper', 'タッツー', '쏘드라', '墨海马', 'horsea'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/horsea.png',
			image: './src/assets/images/pokemon/normal/horsea-walk.png',
			frames: 4
		},
		hp: 6000,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 30,
	},
	seadra: {
		id: 'seadra',
		isElite: false,
		isBoss: false,
		name: ['seadra', 'seadra', 'hypocéan', 'seadra', 'seadra', 'Seemon', 'シードラ', '시드라', '海刺龙', 'seadra'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/seadra.png',
			image: './src/assets/images/pokemon/normal/seadra-walk.png',
			frames: 5,
		},
		hp: 8000,
		speed: 1.2,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 100,
	},
	kingdra: {
		id: 'kingdra',
		isElite: false,
		isBoss: false,
		name: ['kingdra', 'kingdra', 'hyporoi', 'kingdra', 'kingdra', 'seedraking', 'キングドラ', '킹드라', '刺龙王', 'kingdra'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/kingdra.png',
			image: './src/assets/images/pokemon/normal/kingdra-walk.png',
			frames: 4
		},
		hp: 16000,
		speed: 1.4,
		power: 2,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 370,
	},
	finneon: {
		id: 'finneon',
		isElite: false,
		isBoss: false,
		name: ['finneon', 'finneon', 'écayon', 'finneon', 'finneon', 'finneon', 'ケイコウオ', '형광어', '荧光鱼', 'finneon'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/finneon.png',
			image: './src/assets/images/pokemon/normal/finneon-walk.png',
			frames: 8
		},
		hp: 7000,
		speed: 1.2,
		power: 1,
		regeneration: 25, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 80,
	},
	lumineon: {
		id: 'lumineon',
		isElite: false,
		isBoss: false,
		name: ['lumineon', 'lumineon', 'lumivole', 'lumineon', 'lumineon', 'lumineon', 'ネオラント', '네오라이트', '霓虹鱼', 'lumineon'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/lumineon.png',
			image: './src/assets/images/pokemon/normal/lumineon-walk.png',
			frames: 4
		},
		hp: 13970,
		speed: 1.2,
		power: 1,
		regeneration: 50, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 120,
	},
	mantyke: {
		id: 'mantyke',
		isElite: false,
		isBoss: false,
		name: ['mantyke', 'mantyke', 'babimanta', 'mantyke', 'mantyke', 'mantirps', 'タマンタ', '타만타', '小曼泰蓝', 'mantyke'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/mantyke.png',
			image: './src/assets/images/pokemon/normal/mantyke-walk.png',
			frames: 10
		},
		hp: 5555,
		speed: 1,
		power: 1,
		regeneration: 30, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 30,
	},
	remoraid: {
		id: 'remoraid',
		isElite: false,
		isBoss: false,
		name: ['remoraid', 'remoraid', 'rémoraid', 'remoraid', 'remoraid', 'remoraid', 'テッポウオ', '총어', '铁炮鱼', 'remoraid'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/remoraid.png',
			image: './src/assets/images/pokemon/normal/remoraid-idle.png',
			frames: 8
		},
		hp: 5000,
		armor: 4000,
		speed: 1.2,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 50,
	},
	octillery: {
		id: 'octillery',
		isElite: false,
		isBoss: false,
		name: ['octillery', 'octillery', 'octillery', 'octillery', 'octillery', 'octillery', 'オクタン', '대포무노', '章鱼桶', 'octillery'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/octillery.png',
			image: './src/assets/images/pokemon/normal/octillery-idle.png',
			frames: 2
		},
		hp: 13650,
		armor: 3500,
		speed: 0.8,
		power: 2,
		regeneration: 50, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: true,
		gold: 200,
	},
	carvanha: {
		id: 'carvanha',
		isElite: false,
		isBoss: false,
		name: ['carvanha', 'carvanha', 'carvanha', 'carvanha', 'carvanha', 'kanivanha', 'キバニア', '샤프니아', '利牙鱼', 'carvanha'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/carvanha.png',
			image: './src/assets/images/pokemon/normal/carvanha-idle.png',
			frames: 4
		},
		hp: 3000,
		speed: 2.5,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 75,
	},
	sharpedo: {
		id: 'sharpedo',
		isElite: false,
		isBoss: false,
		name: ['sharpedo', 'sharpedo', 'sharpedo', 'sharpedo', 'sharpedo', 'tohaido', 'サメハダー', '샤크니아', '巨牙鲨', 'sharpedo'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/sharpedo.png',
			image: './src/assets/images/pokemon/normal/sharpedo-idle.png',
			frames: 4
		},
		hp: 5300,
		speed: 4,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 250,
	},
	feebas: {
		id: 'feebas',
		isElite: false,
		isBoss: false,
		name: ['feebas', 'feebas', 'barpau', 'feebas', 'feebas', 'barschwa', 'ヒンバス', '빈티나', '丑丑鱼', 'feebas'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/feebas.png',
			image: './src/assets/images/pokemon/normal/feebas-idle.png',
			frames: 4
		},
		hp: 5700,
		speed: 1.5,
		power: 1,
		regeneration: 20, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 250,
	},
	milotic: {
		id: 'milotic',
		isElite: false,
		isBoss: false,
		name: ['milotic', 'milotic', 'milobellus', 'milotic', 'milotic', 'milotic', 'ミロカロス', '밀로틱', '美纳斯', 'milotic'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/milotic.png',
			image: './src/assets/images/pokemon/normal/milotic-walk.png',
			frames: 6
		},
		hp: 29250,
		armor: 6000,
		speed: 1,
		power: 2,
		regeneration: 150, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 800,
	},
	barboach: {
		id: 'barboach',
		isElite: false,
		isBoss: false,
		name: ['barboach', 'barboach', 'barloche', 'barboach', 'barboach', 'schmerbe', 'ドジョッチ', '미꾸리', '泥泥鳅', 'barboach'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/barboach.png',
			image: './src/assets/images/pokemon/normal/barboach-idle.png',
			frames: 6
		},
		hp: 6000,
		armor: 12000,
		speed: 0.5,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 220,
	},
	whiscash: {
		id: 'whiscash',
		isElite: false,
		isBoss: false,
		name: ['whiscash', 'whiscash', 'Barbicha', 'whiscash', 'whiscash', 'welsar', 'ナマズン', '메깅', '鲶鱼王', 'whiscash'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/whiscash.png',
			image: './src/assets/images/pokemon/normal/whiscash-idle.png',
			frames: 10
		},
		hp: 12110,
		armor: 17500,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 900,
	},
	skrelp: {
		id: 'skrelp',
		isElite: false,
		isBoss: false,
		name: ['skrelp', 'skrelp', 'venalgue', 'skrelp', 'skrelp', 'algitt', 'クズモー', '수레기', '毒藻龙', 'skrelp'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/skrelp.png',
			image: './src/assets/images/pokemon/normal/skrelp-walk.png',
			frames: 4
		},
		hp: 6500,
		speed: 1,
		power: 1,
		regeneration: 30, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 80,
	},
	dragalge: {
		id: 'dragalge',
		isElite: false,
		isBoss: false,
		name: ['dragalge', 'dragalge', 'kravarech', 'dragalge', 'dragalge', 'tandrak', 'ドラミドロ', '드래캄', '毒藻龙', 'dragalge'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/dragalge.png',
			image: './src/assets/images/pokemon/normal/dragalge-walk.png',
			frames: 5
		},
		hp: 6500,
		armor: 10000,
		speed: 1,
		power: 1,
		regeneration: 50, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 150,
	},
	wailmer: {
		id: 'wailmer',
		isElite: false,
		isBoss: false,
		name: ['wailmer', 'wailmer', 'wailmer', 'wailmer', 'wailmer', 'wailmer', 'ホエルコ', '고래왕자', '吼吼鲸', 'wailmer'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/wailmer.png',
			image: './src/assets/images/pokemon/normal/wailmer-idle.png',
			frames: 7
		},
		hp: 29150,
		speed: 0.7,
		power: 1,
		regeneration: 50, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 140,
	},
	veluza: {
		id: 'veluza',
		isElite: false,
		isBoss: false,
		name: ['veluza', 'veluza', 'veluza', 'veluza', 'veluza', 'veluza', 'ミガルーサ', '가비루사', '大锅湖', 'veluza'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/veluza.png',
			image: './src/assets/images/pokemon/normal/veluza-idle.png',
			frames: 8
		},
		hp: 8120,
		speed: 1.5,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 400,
	},
	chinchou: {
		id: 'chinchou',
		isElite: false,
		isBoss: false,
		name: ['chinchou', 'chinchou', 'loupio', 'chinchou', 'chinchou', 'lampi', 'チョンチー', '초보리', '灯笼鱼', 'chinchou'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/chinchou.png',
			image: './src/assets/images/pokemon/normal/chinchou-idle.png',
			frames: 5
		},
		hp: 12000,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 160,
	},
	lanturn: {
		id: 'lanturn',
		isElite: false,
		isBoss: false,
		name: ['lanturn', 'lanturn', 'lanturn', 'lanturn', 'lanturn', 'lanturn', 'ランターン', '랜턴', '电灯怪', 'lanturn'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/lanturn.png',
			image: './src/assets/images/pokemon/normal/lanturn-idle.png',
			frames: 9
		},
		hp: 19850,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 240,
	},
	qwilfish: {
		id: 'qwilfish',
		isElite: false,
		isBoss: false,
		name: ['qwilfish', 'qwilfish', 'qwilfish', 'qwilfish', 'qwilfish', 'baldorfish', 'ハリーセン', '침바루', '千针鱼', 'qwilfish'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/qwilfish.png',
			image: './src/assets/images/pokemon/normal/qwilfish-idle.png',
			frames: 7
		},
		hp: 9120,
		armor: 13500,
		speed: 1.2,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 210,
	},
	clamperl: {
		id: 'clamperl',
		isElite: false,
		isBoss: false,
		name: ['clamperl', 'clamperl', 'coquiperl', 'clamperl', 'clamperl', 'perlu', 'パールル', '진주몽', '珍珠贝', 'clamperl'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/clamperl.png',
			image: './src/assets/images/pokemon/normal/clamperl-idle.png',
			frames: 4
		},
		hp: 500,
		armor: 10000,
		speed: 0.9,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 195,
	},
	// AREA 5
	wingull: {
		id: 'wingull',
		isElite: false,
		isBoss: false,
		name: ['Wingull', 'Wingull', 'Goélise', 'Wingull', 'Wingull', 'Wingull', 'キャモメ', '갈모매', '长翅鸥', 'Wingull'],
		sprite: {
			base: './src/assets/images/pokemon/normal/wingull.png',
			image: './src/assets/images/pokemon/normal/wingull-idle.png',
			frames: 18
		},
		hp: 4390,
		speed: 1.2,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: false,
		invisible: false,
		gold: 50,
	},
	pelipper: {
		id: 'pelipper',
		isElite: false,
		isBoss: false,
		name: ['Pelipper', 'Pelipper', 'Bekipan', 'Pelipper', 'Pelipper', 'Pelipper', 'ペリッパー', '패리퍼', '大嘴鸥', 'Pelipper'],
		sprite: {
			base: './src/assets/images/pokemon/normal/pelipper.png',
			image: './src/assets/images/pokemon/normal/pelipper-idle.png',
			frames: 2
		},
		hp: 13120,
		speed: 1.2,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: false,
		invisible: false,
		gold: 80,
	},
	krabby: {
		id: 'krabby',
		isElite: false,
		isBoss: false,
		name: ['Krabby', 'Krabby', 'Krabby', 'Krabby', 'Krabby', 'Krabby', 'クラブ', '크랩', '大钳蟹', 'Krabby'],
		sprite: {
			base: './src/assets/images/pokemon/normal/krabby.png',
			image: './src/assets/images/pokemon/normal/krabby-walk.png',
			frames: 4
		},
		hp: 5110,
		armor: 3880, 
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 100,
	},
	kingler: {
		id: 'kingler',
		isElite: false,
		isBoss: false,
		name: ['Kingler', 'Kingler', 'Krabboss', 'Kingler', 'Kingler', 'Kingler', 'キングラー', '킹크랩', '巨钳蟹', 'Kingler'],
		sprite: {
			base: './src/assets/images/pokemon/normal/kingler.png',
			image: './src/assets/images/pokemon/normal/kingler-walk.png',
			frames: 4
		},
		hp: 5800,
		armor: 13050, 
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 140,
	},
	wiglett: {
		id: 'wiglett',
		isElite: false,
		isBoss: false,
		name: ['Wiglett', 'Wiglett', 'Taupiqueur-W', 'Wiglett', 'Wiglett', 'Schligda', 'ウミディグダ', '우미디그다', '海地鼠', 'Wiglett'],
		sprite: {
			base: './src/assets/images/pokemon/normal/wiglett.png',
			image: './src/assets/images/pokemon/normal/wiglett-idle.png',
			frames: 2,
		},
		hp: 4170,
		speed: 2,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 200,
	},
	wugtrio: {
		id: 'wugtrio',
		isElite: false,
		isBoss: false,
		name: ['Wugtrio', 'Wugtrio', 'Triopikeau', 'Wugtrio', 'Wugtrio', 'Schligdri', 'ウミトリオ', '우미트리오', '海地三鼠', 'Wugtrio'],
		sprite: {
			base: './src/assets/images/pokemon/normal/wugtrio.png',
			image: './src/assets/images/pokemon/normal/wugtrio-idle.png',
			frames: 2
		},
		hp: 6180,
		speed: 2.5,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 400,
	},
	pincurchin: {
		id: 'pincurchin',
		isElite: false,
		isBoss: false,
		name: ['Pincurchin', 'Pincurchin', 'Wattapic', 'Pincurchin', 'Pincurchin', 'Gufaier', 'バチンウニ', '찌르성게', '啪嚓海胆', 'Pincurchin'],
		sprite: {
			base: './src/assets/images/pokemon/normal/pincurchin.png',
			image: './src/assets/images/pokemon/normal/pincurchin-walk.png',
			frames: 4
		},
		hp: 28270,
		speed: 0.5,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 150,
	},
	wattrel: {
		id: 'wattrel',
		isElite: false,
		isBoss: false,
		name: ['Wattrel', 'Wattrel', 'Piétasoc', 'Wattrel', 'Wattrel', 'Wattrel', 'カイデン', '찌리비', '电海燕', 'Wattrel'],
		sprite: {
			base: './src/assets/images/pokemon/normal/wattrel.png',
			image: './src/assets/images/pokemon/normal/wattrel-walk.png',
			frames: 5
		},
		hp: 3170,
		speed: 1.8,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 180,
	},
	kilowattrel: {
		id: 'kilowattrel',
		isElite: false,
		isBoss: false,
		name: ['Kilowattrel', 'Kilowattrel', 'Fulguliro', 'Kilowattrel', 'Kilowattrel', 'Kilowattrel', 'タイカイデン', '찌리배리', '大电海燕', 'Kilowattrel'],
		sprite: {
			base: './src/assets/images/pokemon/normal/kilowattrel.png',
			image: './src/assets/images/pokemon/normal/kilowattrel-walk.png',
			frames: 6
		},
		hp: 5530,
		speed: 2.4,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 350,
	},
	pyukumuku: {
		id: 'pyukumuku',
		isElite: false,
		isBoss: false,
		name: ['Pyukumuku', 'Pyukumuku', 'Concombaffe', 'Pyukumuku', 'Pyukumuku', 'Gufa', 'ナマコブ', '해무기', '拳海参', 'Pyukumuku'],
		sprite: {
			base: './src/assets/images/pokemon/normal/pyukumuku.png',
			image: './src/assets/images/pokemon/normal/pyukumuku-walk.png',
			frames: 4
		},
		hp: 10210,
		speed: 0.5,
		power: 1,
		regeneration: 500, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 150,
	},
	clobbopus: {
		id: 'clobbopus',
		isElite: false,
		isBoss: false,
		name: ['Clobbopus', 'Clobbopus', 'Poulpaf', 'Clobbopus', 'Clobbopus', 'Klopptopus', 'タタッコ', '때려눕히기', '拳拳蛸', 'Clobbopus'],
		sprite: {
			base: './src/assets/images/pokemon/normal/clobbopus.png',
			image: './src/assets/images/pokemon/normal/clobbopus-walk.png',
			frames: 5
		},
		hp: 4990,
		armor: 2010,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 160,
	},
	grapploct: {
		id: 'grapploct',
		isElite: false,
		isBoss: false,
		name: ['Grapploct', 'Grapploct', 'Krakos', 'Grapploct', 'Grapploct', 'Kaocto', 'オトスパス', '케오퍼스', '八爪武师', 'Grapploct'],
		sprite: {
			base: './src/assets/images/pokemon/normal/grapploct.png',
			image: './src/assets/images/pokemon/normal/grapploct-walk.png',
			frames: 4
		},
		hp: 12830,
		armor: 3510,
		speed: 1,
		power: 2,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 350,
	},
	cramorant: {
		id: 'cramorant',
		isElite: false,
		isBoss: false,
		name: ['Cramorant', 'Cramorant', 'Nigosier', 'Cramorant', 'Cramorant', 'Urgl', 'ウッウ', '윽우지', '古月鸟', 'Cramorant'],
		sprite: {
			base: './src/assets/images/pokemon/normal/cramorant.png',
			image: './src/assets/images/pokemon/normal/cramorant-walk.png',
			frames: 4
		},
		hp: 9850,
		speed: 1,
		power: 2,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 500,
	},
	corsola: {
		id: 'corsola',
		isElite: false,
		isBoss: false,
		name: ['Corsola', 'Corsola', 'Corayon', 'Corsola', 'Corsola', 'Corasonn', 'サニーゴ', '코산호', '太阳珊瑚', 'Corsola'],
		sprite: {
			base: './src/assets/images/pokemon/normal/corsola.png',
			image: './src/assets/images/pokemon/normal/corsola-idle.png',
			frames: 3
		},
		hp: 3050,
		armor: 14110,
		speed: 0.7,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 400,
	},
	chewtle: {
		id: 'chewtle',
		isElite: false,
		isBoss: false,
		name: ['Chewtle', 'Chewtle', 'Khélocrok', 'Chewtle', 'Chewtle', 'Kamehaps', 'カムカメ', '깨물부기', '咬咬龟', 'Chewtle'],
		sprite: {
			base: './src/assets/images/pokemon/normal/chewtle.png',
			image: './src/assets/images/pokemon/normal/chewtle-walk.png',
			frames: 4
		},
		hp: 3430,
		armor: 11120,
		speed: 0.5,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 350,
	},
	drednaw: {
		id: 'drednaw',
		isElite: false,
		isBoss: false,
		name: ['Drednaw', 'Drednaw', 'Torgamord', 'Drednaw', 'Drednaw', 'Kamalm', 'カジリガメ', '갈가부기', '暴噬龟', 'Drednaw'],
		sprite: {
			base: './src/assets/images/pokemon/normal/drednaw.png',
			image: './src/assets/images/pokemon/normal/drednaw-walk.png',
			frames: 4
		},
		hp: 4550,
		armor: 25240,
		speed: 0.5,
		power: 2,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 650,
	},
	clauncher: {
		id: 'clauncher',
		isElite: false,
		isBoss: false,
		name: ['Clauncher', 'Clauncher', 'Flingouste', 'Clauncher', 'Clauncher', 'Scampisto', 'ウデッポウ', '김바랜', '铁臂枪虾', 'Clauncher'],
		sprite: {
			base: './src/assets/images/pokemon/normal/clauncher.png',
			image: './src/assets/images/pokemon/normal/clauncher-walk.png',
			frames: 4
		},
		hp: 7850,
		armor: 4210,
		speed: 1.3,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 400,
	},
	clawitzer: {
		id: 'clawitzer',
		isElite: false,
		isBoss: false,
		name: ['Clawitzer', 'Clawitzer', 'Gamblast', 'Clawitzer', 'Clawitzer', 'Wummer', 'ブロスター', '블로스터', '钢炮臂虾', 'Clawitzer'],
		sprite: {
			base: './src/assets/images/pokemon/normal/clawitzer.png',
			image: './src/assets/images/pokemon/normal/clawitzer-idle.png',
			frames: 4
		},
		hp: 10220,
		armor: 10500,
		speed: 1.4,
		power: 2,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 970,
	},
	cutiefly: {
		id: 'cutiefly',
		isElite: false,
		isBoss: false,
		name: ['Cutiefly', 'Cutiefly', 'Bombydou', 'Cutiefly', 'Cutiefly', 'Wommel', 'アブリー', '에리본', '萌虻', 'Cutiefly'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/cutiefly.png',
			image: './src/assets/images/pokemon/normal/cutiefly-walk.png',
			frames: 6
		},
		hp: 6370,
		speed: 1,
		power: 1,
		regeneration: 25, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 100,
	},
	ribombee: {
		id: 'ribombee',
		isElite: false,
		isBoss: false,
		name: ['Ribombee', 'Ribombee', 'Rubombelle', 'Ribombee', 'Ribombee', 'Bandelby', 'アブリボン', '에리본', '蝶结萌虻', 'Ribombee'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/ribombee.png',
			image: './src/assets/images/pokemon/normal/ribombee-walk.png',
			frames: 6
		},
		hp: 15770,
		speed: 1,
		power: 1,
		regeneration: 50, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 170,
	},
	orthworm: {
		id: 'orthworm',
		isElite: false,
		isBoss: false,
		name: ['Orthworm', 'Orthworm', 'Ferdeter', 'Orthworm', 'Orthworm', 'Schligdri', 'ミミズズ', '꿈트렁', '拖拖蚓', 'Orthworm'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/orthworm.png',
			image: './src/assets/images/pokemon/normal/orthworm-walk.png',
			frames: 4
		},
		hp: 5210,
		armor: 24120,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 200,
	},
	tatsugiri: {
		id: 'tatsugiri',
		isElite: false,
		isBoss: false,
		name: ['Tatsugiri', 'Tatsugiri', 'Nigirigon', 'Tatsugiri', 'Tatsugiri', 'Nigiragi', 'シャリタツ', '싸리용', '米立龙', 'Tatsugiri'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/tatsugiri.png',
			image: './src/assets/images/pokemon/normal/tatsugiri-walk.png',
			frames: 6
		},
		hp: 10220,
		speed: 1.5,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 500,
	},
	jangmoO: {
		id: 'jangmoO',
		isElite: false,
		isBoss: false,
		name: ['jangmo-o', 'jangmo-o', 'bébécaille', 'jangmo-o', 'jangmo-o', 'jalaro', 'ジャラコ', '짜랑꼬', '心鳞宝', 'jangmo-o'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/jangmoO.png',
			image: './src/assets/images/pokemon/normal/jangmoO-walk.png',
			frames: 4
		},
		hp: 1010,
		armor: 4080,
		speed: 1,
		power: 1,
		regeneration: 15, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 200,
	},
	hakamoO: {
		id: 'hakamoO',
		isElite: false,
		isBoss: false,
		name: ['hakamo-o', 'hakamo-o', 'écaïd', 'hakamo-o', 'hakamo-o', 'jarako', 'ジャランゴ', '짜랑고', '鳞甲龙', 'hakamo-o'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/hakamoO.png',
			image: './src/assets/images/pokemon/normal/hakamoO-walk.png',
			frames: 4
		},
		hp: 3550,
		armor: 11520,
		speed: 1,
		power: 1,
		regeneration: 30, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 400,
	},
	
	

	// XL MAP
	cubone: {
		id: 'cubone',
		isElite: false,
		isBoss: false,
		name: ['cubone', 'cubone', 'Osselait', 'cubone', 'cubone', 'tragosso', 'カラカラ', '탕구리', '卡拉卡拉', 'cubone'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/cubone.png',
			image: './src/assets/images/pokemon/normal/cubone-walk.png',
			frames: 4
		},
		hp: 3000,
		armor: 3600,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 50,
	},
	marowak: {
		id: 'marowak',
		isElite: false,
		isBoss: false,
		name: ['marowak', 'marowak', 'Ossatueur', 'marowak', 'marowak', 'knogga', 'ガラガラ', '텅구리', '嘎拉嘎拉', 'marowak'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/marowak.png',
			image: './src/assets/images/pokemon/normal/marowak-walk.png',
			frames: 4
		},
		hp: 7000,
		armor: 3800,
		speed: 1.2,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 80,
	},
	drilbur: {
		id: 'drilbur',
		isElite: false,
		isBoss: false,
		name: ['Drilbur', 'Drilbur', 'Rototaupe', 'Drilbur', 'Drilbur', 'Rotomurf', 'モグリュー', '두더류', '螺釘地鼠', 'Drilbur'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/drilbur.png',
			image: './src/assets/images/pokemon/normal/drilbur-walk.png',
			frames: 4
		},
		hp: 4000,
		armor: 2700,
		speed: 1.5,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 40,
	},
	excadrill: {
		id: 'excadrill',
		isElite: false,
		isBoss: false,
		name: ['excadrill', 'excadrill', 'Minotaupe', 'excadrill', 'excadrill', 'stalobor', 'ドリュウズ', '몰드류', '長鼻鐵', 'excadrill'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/excadrill.png',
			image: './src/assets/images/pokemon/normal/excadrill-walk.png',
			frames: 4
		},
		hp: 6000,
		armor: 3200,
		speed: 2,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 320,
	},
	rhyhorn: {
		id: 'rhyhorn',
		isElite: false,
		isBoss: false,
		name: ['Rhyhorn', 'Rhyhorn', 'Rhinocorne', 'Rhyhorn', 'Rhyhorn', 'Rihorn', 'サイホーン', '뿔카노', '獨角犀牛', 'Rhyhorn'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/rhyhorn.png',
			image: './src/assets/images/pokemon/normal/rhyhorn-walk.png',
			frames: 4
		},
		hp: 4000,
		armor: 7000,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 60,
	},
	rhydon: {
		id: 'rhydon',
		isElite: false,
		isBoss: false,
		name: ['Rhydon', 'Rhydon', 'Rhinoféros', 'Rhydon', 'Rhydon', 'Rizeros', 'サイドン', '코뿌리', '鐵甲暴龍', 'Rhydon'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/rhydon.png',
			image: './src/assets/images/pokemon/normal/rhydon-walk.png',
			frames: 4,
		},
		hp: 5000,
		armor: 11000,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 400,
	},
	rhyperior: {
		id: 'rhyperior',
		isElite: false,
		isBoss: false,
		name: ['Rhyperior', 'Rhyperior', 'Rhinastoc', 'Rhyperior', 'Rhyperior', 'Rihornior', 'ドサイドン', '거대코뿌리', '超甲狂犀', 'Rhyperior'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/rhyperior.png',
			image: './src/assets/images/pokemon/normal/rhyperior-walk.png',
			frames: 4
		},
		hp: 6000,
		armor: 14200,
		speed: 0.8,
		power: 2,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 800,
	},
	timburr: {
		id: 'timburr',
		isElite: false,
		isBoss: false,
		name: ['Timburr', 'Timburr', 'Charpenti', 'Timburr', 'Timburr', 'Praktibalk', 'ドッコラー', '으랏차', '搬運小匠', 'Timburr'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/timburr.png',
			image: './src/assets/images/pokemon/normal/timburr-walk.png',
			frames: 4
		},
		hp: 6000,
		armor: 800,
		speed: 0.9,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 90,
	},
	gurdurr: {
		id: 'gurdurr',
		isElite: false,
		isBoss: false,
		name: ['Gurdurr', 'Gurdurr', 'Ouvrifier', 'Gurdurr', 'Gurdurr', 'Strepoli', 'ドテッコツ', '토쇠골', '鐵骨土人', 'Gurdurr'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/gurdurr.png',
			image: './src/assets/images/pokemon/normal/gurdurr-walk.png',
			frames: 4
		},
		hp: 12000,
		armor: 1800,
		speed: 0.9,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 200,
	},
	conkeldurr: {
		id: 'conkeldurr',
		isElite: false,
		isBoss: false,
		name: ['Conkeldurr', 'Conkeldurr', 'Bétochef', 'Conkeldurr', 'Conkeldurr', 'Meistagrif', 'ローブシン', '노보청', '修建老匠', 'Conkeldurr'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/conkeldurr.png',
			image: './src/assets/images/pokemon/normal/conkeldurr-walk.png',
			frames: 4
		},
		hp: 20500,
		armor: 2700,
		speed: 0.9,
		power: 2,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 660,
	},
	onix: {
		id: 'onix',
		isElite: false,
		isBoss: false,
		name: ['Onix', 'Onix', 'Onix', 'Onix', 'Onix', 'Onix', 'イワーク', '롱스톤', '大岩蛇', 'Onix'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/onix.png',
			image: './src/assets/images/pokemon/normal/onix-walk.png',
			frames: 4
		},
		hp: 500,
		armor: 30000,
		speed: 0.7,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 500,
	},
	mimeJr: {
		id: 'mimeJr',
		isElite: false,
		isBoss: false,
		name: ['Mime Jr.', 'Mime Jr.', 'Mime Jr.', 'Mime Jr.', 'Mime Jr.', 'Pantimimi', 'マネネ', '흉내내', '魔尼尼', 'Mime Jr.'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/mimeJr.png',
			image: './src/assets/images/pokemon/normal/mimeJr-walk.png',
			frames: 10
		},
		hp: 6000,
		armor: 3200,
		speed: 1,
		power: 1,
		regeneration: 50, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: true,
		gold: 150,
	},
	mrMime: {
		id: 'mrMime',
		isElite: false,
		isBoss: false,
		name: ['Mr. Mime', 'Mr. Mime', 'M. Mime', 'Mr. Mime', 'Mr. Mime', 'Pantimos', 'バリヤード', '마임맨', '魔牆人偶', 'Mr. Mime'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/mrMime.png',
			image: './src/assets/images/pokemon/normal/mrMime-walk.png',
			frames: 4
		},
		hp: 6000,
		armor: 3500,
		speed: 1.2,
		power: 1,
		regeneration: 100, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: true,
		gold: 500,
	},
	mudbray: {
		id: 'mudbray',
		isElite: false,
		isBoss: false,
		name: ['Mudbray', 'Mudbray', 'Tiboudet', 'Mudbray', 'Mudbray', 'Pampuli', 'ドロバンコ', '머드나기', '泥驢仔', 'Mudbray'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/mudbray.png',
			image: './src/assets/images/pokemon/normal/mudbray-walk.png',
			frames: 4
		},
		hp: 11500,
		armor: 4000,
		speed: 1.3,
		power: 1,
		regeneration: 25, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 175,
	},
	mudsdale: {
		id: 'mudsdale',
		isElite: false,
		isBoss: false,
		name: ['Mudsdale', 'Mudsdale', 'Bourrinos', 'Mudsdale', 'Mudsdale', 'Pampross', 'バンバドロ', '만마드', '重泥挽馬', 'Mudsdale'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/mudsdale.png',
			image: './src/assets/images/pokemon/normal/mudsdale-walk.png',
			frames: 4
		},
		hp: 15800,
		armor: 6000,
		speed: 1.5,
		power: 1,
		regeneration: 50, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 600,
	},
	tauros: {
		id: 'tauros',
		isElite: false,
		isBoss: false,
		name: ['Tauros', 'Tauros', 'Tauros', 'Tauros', 'Tauros', 'Tauros', 'ケンタロス', '켄타로스', '肯泰羅', 'Tauros'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/tauros.png',
			image: './src/assets/images/pokemon/normal/tauros-walk.png',
			frames: 7
		},
		hp: 28000,
		speed: 1.5,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 700,
	},
	zorua: {
		id: 'zorua',
		isElite: false,
		isBoss: false,
		name: ['Zorua', 'Zorua', 'Zorua', 'Zorua', 'Zorua', 'Zorua', 'ゾロア', '조로아', '索羅亞', 'Zorua'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/zorua.png',
			image: './src/assets/images/pokemon/normal/zorua-walk.png',
			frames: 5
		},
		hp: 4000,
		speed: 2,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: true,
		gold: 120,
	},
	zoroark: {
		id: 'zoroark',
		isElite: false,
		isBoss: false,
		name: ['Zoroark', 'Zoroark', 'Zoroark', 'Zoroark', 'Zoroark', 'Zoroark', 'ゾロアーク', '조로아크', '索羅亞克', 'Zoroark'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/zoroark.png',
			image: './src/assets/images/pokemon/normal/zoroark-walk.png',
			frames: 4
		},
		hp: 9500,
		speed: 2.8,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: true,
		gold: 500,
	},
	torkoal: {
		id: 'torkoal',
		isElite: false,
		isBoss: false,
		name: ['torkoal', 'torkoal', 'Chartor', 'torkoal', 'torkoal', 'qurtel', 'コータス', '코터스', '煤炭龜', 'torkoal'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/torkoal.png',
			image: './src/assets/images/pokemon/normal/torkoal-walk.png',
			frames: 4
		},
		hp: 20000,
		armor: 18000,
		speed: 0.6,
		power: 1,
		regeneration: 100, 
		canStun: false,
		canSlow: false,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 1200,
	},
	// RUTA 7
	sentret: {
		id: 'sentret',
		isElite: false,
		isBoss: false,
		name: ['Sentret', 'Sentret', 'Fouinette', 'Sentret', 'Sentret', 'Wiesor', 'オタチ', '꼬리선', '尾立', 'Sentret'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/sentret.png',
			image: './src/assets/images/pokemon/normal/sentret-walk.png',
			frames: 8
		},
		hp: 6600,
		armor: 0,
		speed: 1.2,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 50,
	},
	furret: {
		id: 'furret',
		isElite: false,
		isBoss: false,
		name: ['Furret', 'Furret', 'Fouinar', 'Furret', 'Furret', 'Wiesenior', 'オオタチ', '다꼬리', '大尾立', 'Furret'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/furret.png',
			image: './src/assets/images/pokemon/normal/furret-walk.png',
			frames: 8
		},
		hp: 9500,
		armor: 0,
		speed: 1.5,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 120,
	},
	numel: {
		id: 'numel',
		isElite: false,
		isBoss: false,
		name: ['Numel', 'Numel', 'Chamallot', 'Numel', 'Numel', 'Camaub', 'ドンメル', '둔타', '呆火駝', 'Numel'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/numel.png',
			image: './src/assets/images/pokemon/normal/numel-walk.png',
			frames: 4
		},
		hp: 4000,
		armor: 9000,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 80,
	},
	camerupt: {
		id: 'camerupt',
		isElite: false,
		isBoss: false,
		name: ['Camerupt', 'Camerupt', 'Camérupt', 'Camerupt', 'Camerupt', 'Camerupt', 'バクーダ', '폭타', '噴火駝', 'Camerupt'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/camerupt.png',
			image: './src/assets/images/pokemon/normal/camerupt-walk.png',
			frames: 4
		},
		hp: 4000,
		armor: 12000,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 150,
	},
	vullaby: {
		id: 'vullaby',
		isElite: false,
		isBoss: false,
		name: ['Vullaby', 'Vullaby', 'Vostourno', 'Vullaby', 'Vullaby', 'Skallyk', 'バルチャイ', '벌차이', '禿鷹丫頭', 'Vullaby'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/vullaby.png',
			image: './src/assets/images/pokemon/normal/vullaby-walk.png',
			frames: 4
		},
		hp: 1100,
		armor: 9500,
		speed: 1.1,
		power: 1,
		regeneration: 50, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 85,
	},
	mandibuzz: {
		id: 'mandibuzz',
		isElite: false,
		isBoss: false,
		name: ['Mandibuzz', 'Mandibuzz', 'Vaututrice', 'Mandibuzz', 'Mandibuzz', 'Grypheldis', 'バルジーナ', '버랜지나', '禿鷹娜', 'Mandibuzz'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/mandibuzz.png',
			image: './src/assets/images/pokemon/normal/mandibuzz-walk.png',
			frames: 4
		},
		hp: 2500,
		armor: 11000,
		speed: 1.1,
		power: 1,
		regeneration: 100, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 240,
	},
	komala: {
		id: 'komala',
		isElite: false,
		isBoss: false,
		name: ['Komala', 'Komala', 'Dodoala', 'Komala', 'Komala', 'Koalelu', 'ネッコアラ', '코알라', '樹枕尾熊', 'Komala'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/komala.png',
			image: './src/assets/images/pokemon/normal/komala-walk.png',
			frames: 6
		},
		hp: 5150,
		armor: 0,
		speed: 3,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: false,
		canBurn: false,
		canPoison: false,
		invisible: false,
		gold: 900,
	},
	skiddo: {
		id: 'skiddo',
		isElite: false,
		isBoss: false,
		name: ['Skiddo', 'Skiddo', 'Cabriolaine', 'Skiddo', 'Skiddo', 'Mähikel', 'メェークル', '메이클', '坐騎小羊', 'Skiddo'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/skiddo.png',
			image: './src/assets/images/pokemon/normal/skiddo-walk.png',
			frames: 5
		},
		hp: 8900,
		armor: 0,
		speed: 1.2,
		power: 1,
		regeneration: 50, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 320,
	},
	gogoat: {
		id: 'gogoat',
		isElite: false,
		isBoss: false,
		name: ['Gogoat', 'Gogoat', 'Chevroum', 'Gogoat', 'Gogoat', 'Chevrumm', 'ゴーゴート', '고고트', '坐騎山羊', 'Gogoat'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/gogoat.png',
			image: './src/assets/images/pokemon/normal/gogoat-walk.png',
			frames: 7
		},
		hp: 11250,
		armor: 0,
		speed: 1.4,
		power: 1,
		regeneration: 100, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 450,
	},
	salandit: {
		id: 'salandit',
		isElite: false,
		isBoss: false,
		name: ['Salandit', 'Salandit', 'Tritox', 'Salandit', 'Salandit', 'Molunk', 'ヤトウモリ', '야도뇽', '夜盜火蜥', 'Salandit'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/salandit.png',
			image: './src/assets/images/pokemon/normal/salandit-walk.png',
			frames: 4
		},
		hp: 12500,
		armor: 0,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: false,
		invisible: false,
		gold: 150,
	},
	salazzle: {
		id: 'salazzle',
		isElite: false,
		isBoss: false,
		name: ['Salazzle', 'Salazzle', 'Malamandre', 'Salazzle', 'Salazzle', 'Amfira', 'エンニュート', '염뉴트', '焰后蜥', 'Salazzle'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/salazzle.png',
			image: './src/assets/images/pokemon/normal/salazzle-walk.png',
			frames: 4
		},
		hp: 16800,
		armor: 0,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: false,
		invisible: false,
		gold: 280,
	},
	rufflet: {
		id: 'rufflet',
		isElite: false,
		isBoss: false,
		name: ['Rufflet', 'Rufflet', 'Furaiglon', 'Rufflet', 'Rufflet', 'Geronimatz', 'ワシボン', '수리둥보', '毛頭小鷹', 'Rufflet'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/rufflet.png',
			image: './src/assets/images/pokemon/normal/rufflet-walk.png',
			frames: 5
		},
		hp: 10900,
		armor: 0,
		speed: 1.1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 150,
	},
	braviary: {
		id: 'braviary',
		isElite: false,
		isBoss: false,
		name: ['Braviary', 'Braviary', 'Gueriaigle', 'Braviary', 'Braviary', 'Washakwil', 'ウォーグル', '워글', '勇士雄鷹', 'Braviary'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/braviary.png',
			image: './src/assets/images/pokemon/normal/braviary-walk.png',
			frames: 4
		},
		hp: 15700,
		speed: 1.1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 440,
	},
	ekans: {
		id: 'ekans',
		isElite: false,
		isBoss: false,
		name: ['Ekans', 'Ekans', 'Abo', 'Ekans', 'Ekans', 'Rettan', 'アーボ', '아보', '阿柏蛇', 'Ekans'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/ekans.png',
			image: './src/assets/images/pokemon/normal/ekans-idle.png',
			frames: 6
		},
		hp: 16200,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 150,
	},
	arbok: {
		id: 'arbok',
		isElite: false,
		isBoss: false,
		name: ['Arbok', 'Arbok', 'Arbok', 'Arbok', 'Arbok', 'Arbok', 'アーボック', '아보크', '阿柏怪', 'Arbok'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/arbok.png',
			image: './src/assets/images/pokemon/normal/arbok-idle.png',
			frames: 6
		},
		hp: 25850,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 320,
	},
	stonjourner: {
		id: 'stonjourner',
		isElite: false,
		isBoss: false,
		name: ['Stonjourner', 'Stonjourner', 'Dolman', 'Stonjourner', 'Stonjourner', 'Humanolith', 'イシヘンジン', '돌헨진', '巨石丁', 'Stonjourner'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/stonjourner.png',
			image: './src/assets/images/pokemon/normal/stonjourner-walk.png',
			frames: 4
		},
		hp: 45000,
		armor: 45000,
		speed: 0.6,
		power: 2,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: false,
		invisible: false,
		gold: 2500,
	},
	zubat: {
		id: 'zubat',
		isElite: false,
		isBoss: false,
		name: ['Zubat', 'Zubat', 'Nosferapti', 'Zubat', 'Zubat', 'Zubat', 'ズバット', '주뱃', '超音蝠', 'Zubat'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/zubat.png',
			image: './src/assets/images/pokemon/normal/zubat-walk.png',
			frames: 8
		},
		hp: 11400,
		speed: 1.2,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 210,
	},
	golbat: {
		id: 'golbat',
		isElite: false,
		isBoss: false,
		name: ['Golbat', 'Golbat', 'Nosferalto', 'Golbat', 'Golbat', 'Golbat', 'ゴルバット', '골뱃', '大嘴蝠', 'Golbat'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/golbat.png',
			image: './src/assets/images/pokemon/normal/golbat-walk.png',
			frames: 4
		},
		hp: 14900,
		speed: 1.4,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 550,
	},
	crobat: {
		id: 'crobat',
		isElite: false,
		isBoss: false,
		name: ['Crobat', 'Crobat', 'Nostenfer', 'Crobat', 'Crobat', 'Iksbat', 'クロバット', '크로뱃', '叉字蝠', 'Crobat'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/crobat.png',
			image: './src/assets/images/pokemon/normal/crobat-walk.png',
			frames: 8
		},
		hp: 16750,
		speed: 1.8,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 870,
	},
	scraggy: {
		id: 'scraggy',
		isElite: false,
		isBoss: false,
		name: ['Scraggy', 'Scraggy', 'Baggiguane', 'Scraggy', 'Scraggy', 'Zurrokex', 'ズルッグ', '곤율랭', '滑滑小子', 'Scraggy'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/scraggy.png',
			image: './src/assets/images/pokemon/normal/scraggy-walk.png',
			frames: 4
		},
		hp: 15400,
		speed: 1.2,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: true,
		gold: 600,
	},
	scrafty: {
		id: 'scrafty',
		isElite: false,
		isBoss: false,
		name: ['Scrafty', 'Scrafty', 'Baggaïd', 'Scrafty', 'Scrafty', 'Irokex', 'ズルズキン', '곤율거니', '頭巾混混', 'Scrafty'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/scrafty.png',
			image: './src/assets/images/pokemon/normal/scrafty-walk.png',
			frames: 4
		},
		hp: 18800,
		speed: 1.2,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: true,
		gold: 1200,
	},
	stunky: {
		id: 'stunky',
		isElite: false,
		isBoss: false,
		name: ['Stunky', 'Stunky', 'Moufouette', 'Stunky', 'Stunky', 'Skunkapuh', 'スカンプー', '스컹뿡', '臭鼬噗', 'Stunky'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/stunky.png',
			image: './src/assets/images/pokemon/normal/stunky-walk.png',
			frames: 4
		},
		hp: 43000,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 1700,
	},
	skuntank: {
		id: 'skuntank',
		isElite: false,
		isBoss: false,
		name: ['Skuntank', 'Skuntank', 'Moufflair', 'Skuntank', 'Skuntank', 'Skuntank', 'スカタンク', '스컹탱크', '坦克臭鼬', 'Skuntank'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/skuntank.png',
			image: './src/assets/images/pokemon/normal/skuntank-walk.png',
			frames: 4
		},
		hp: 55000,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 3500,
	},
	seedot: {
		id: 'seedot',
		isElite: false,
		isBoss: false,
		name: ['Seedot', 'Seedot', 'Grainipiot', 'Seedot', 'Seedot', 'Samurzel', 'タネボー', '도토링', '橡實果', 'Seedot'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/seedot.png',
			image: './src/assets/images/pokemon/normal/seedot-walk.png',
			frames: 8
		},
		hp: 14000,
		armor: 14000,
		speed: 1,
		power: 1,
		regeneration: 100, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 800,
	},
	nuzleaf: {
		id: 'nuzleaf',
		isElite: false,
		isBoss: false,
		name: ['Nuzleaf', 'Nuzleaf', 'Pifeuil', 'Nuzleaf', 'Nuzleaf', 'Blanas', 'コノハナ', '잎새코', '長鼻葉', 'Nuzleaf'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/nuzleaf.png',
			image: './src/assets/images/pokemon/normal/nuzleaf-walk.png',
			frames: 4
		},
		hp: 14000,
		armor: 18000,
		speed: 1,
		power: 1,
		regeneration: 150, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 1400,
	},
	bronzor: {
		id: 'bronzor',
		isElite: false,
		isBoss: false,
		name: ['Bronzor', 'Bronzor', 'Archéomire', 'Bronzor', 'Bronzor', 'Bronzel', 'ドーミラー', '동미러', '銅鏡怪', 'Bronzor'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/bronzor.png',
			image: './src/assets/images/pokemon/normal/bronzor-walk.png',
			frames: 6
		},
		hp: 5000,
		armor: 10000,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 1000,
	},
	// RUTA 8
	meowth: {
		id: 'meowth',
		isElite: false,
		isBoss: false,
		name: ['Meowth', 'Meowth', 'Miaouss', 'Meowth', 'Meowth', 'Mauzi', 'ニャース', '나옹', '喵喵', 'Meowth'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/meowth.png',
			image: './src/assets/images/pokemon/normal/meowth-walk.png',
			frames: 4
		},
		hp: 5750,
		armor: 0,
		speed: 1.3,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 250,
	},
	persian: {
		id: 'persian',
		isElite: false,
		isBoss: false,
		name: ['Persian', 'Persian', 'Persian', 'Persian', 'Persian', 'Snobilikat', 'ペルシアン', '페르시온', '貓老大', 'Persian'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/persian.png',
			image: './src/assets/images/pokemon/normal/persian-walk.png',
			frames: 4
		},
		hp: 8650,
		armor: 0,
		speed: 1.5,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 400,
	},
	snubbull: {
		id: 'snubbull',
		isElite: false,
		isBoss: false,
		name: ['Snubbull', 'Snubbull', 'Snubbull', 'Snubbull', 'Snubbull', 'Snubbull', 'ブルー', '블루', '布魯', 'Snubbull'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/snubbull.png',
			image: './src/assets/images/pokemon/normal/snubbull-walk.png',
			frames: 6
		},
		hp: 11100,
		armor: 0,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 110,
	},
	granbull: {
		id: 'granbull',
		isElite: false,
		isBoss: false,
		name: ['Granbull', 'Granbull', 'Granbull', 'Granbull', 'Granbull', 'Granbull', 'グランブル', '그랑블루', '布盧皇', 'Granbull'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/granbull.png',
			image: './src/assets/images/pokemon/normal/granbull-walk.png',
			frames: 2
		},
		hp: 14200,
		armor: 0,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 250,
	},
	grimer: {
		id: 'grimer',
		isElite: false,
		isBoss: false,
		name: ['Grimer', 'Grimer', 'Tadmorv', 'Grimer', 'Grimer', 'Sleima', 'ベトベター', '질퍽이', '臭泥', 'Grimer'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/grimer.png',
			image: './src/assets/images/pokemon/normal/grimer-walk.png',
			frames: 4
		},
		hp: 14500,
		armor: 0,
		speed: 1,
		power: 1,
		regeneration: 40, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 385,
	},
	muk: {
		id: 'muk',
		isElite: false,
		isBoss: false,
		name: ['Muk', 'Muk', 'Grotadmorv', 'Muk', 'Muk', 'Sleimok', 'ベトベトン', '질뻐기', '臭臭泥', 'Muk'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/muk.png',
			image: './src/assets/images/pokemon/normal/muk-walk.png',
			frames: 4
		},
		hp: 17200,
		armor: 0,
		speed: 1,
		power: 1,
		regeneration: 120, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 670,
	},
	smeargle: {
		id: 'smeargle',
		isElite: false,
		isBoss: false,
		name: ['Smeargle', 'Smeargle', 'Queulorior', 'Smeargle', 'Smeargle', 'Farbeagle', 'ドーブル', '루브도', '圖圖犬', 'Smeargle'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/smeargle.png',
			image: './src/assets/images/pokemon/normal/smeargle-idle.png',
			frames: 2
		},
		hp: 5000,
		armor: 0,
		speed: 3,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: false,
		canBurn: false,
		canPoison: false,
		invisible: false,
		gold: 600,
	},
	spearow: {
		id: 'spearow',
		isElite: false,
		isBoss: false,
		name: ['Spearow', 'Spearow', 'Piafabec', 'Spearow', 'Spearow', 'Habitak', 'オニスズメ', '깨비참', '烈雀', 'Spearow'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/spearow.png',
			image: './src/assets/images/pokemon/normal/spearow-walk.png',
			frames: 6
		},
		hp: 8150,
		armor: 0,
		speed: 1.5,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 170,
	},
	fearow: {
		id: 'fearow',
		isElite: false,
		isBoss: false,
		name: ['Fearow', 'Fearow', 'Rapasdepic', 'Fearow', 'Fearow', 'Ibitak', 'オニドリル', '깨비드릴조', '大嘴雀', 'Fearow'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/fearow.png',
			image: './src/assets/images/pokemon/normal/fearow-walk.png',
			frames: 10
		},
		hp: 9080,
		armor: 0,
		speed: 1.7,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 320,
	},
	nickit: {
		id: 'nickit',
		isElite: false,
		isBoss: false,
		name: ['Nickit', 'Nickit', 'Goupilou', 'Nickit', 'Nickit', 'Kleptifux', 'クスネ', '훔처우', '偷兒狐', 'Nickit'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/nickit.png',
			image: './src/assets/images/pokemon/normal/nickit-walk.png',
			frames: 5
		},
		hp: 10500,
		armor: 0,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: true,
		gold: 350,
	},
	thievul: {
		id: 'thievul',
		isElite: false,
		isBoss: false,
		name: ['Thievul', 'Thievul', 'Roublenard', 'Thievul', 'Thievul', 'Gaunux', 'フォクスライ', '폭슬라이', '狐大盜', 'Thievul'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/thievul.png',
			image: './src/assets/images/pokemon/normal/thievul-walk.png',
			frames: 4
		},
		hp: 14600,
		armor: 0,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: true,
		gold: 600,
	},
	lickitung: {
		id: 'lickitung',
		isElite: false,
		isBoss: false,
		name: ['Lickitung', 'Lickitung', 'Excelangue', 'Lickitung', 'Lickitung', 'Schlurp', 'ベロリンガ', '내루미', '大舌頭', 'Lickitung'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/lickitung.png',
			image: './src/assets/images/pokemon/normal/lickitung-walk.png',
			frames: 4
		},
		hp: 14150,
		armor: 0,
		speed: 1,
		power: 1,
		regeneration: 20, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 800,
	},
	lickilicky: {
		id: 'lickilicky',
		isElite: false,
		isBoss: false,
		name: ['Lickilicky', 'Lickilicky', 'Coudlangue', 'Lickilicky', 'Lickilicky', 'Schlurplek', 'ベロベルト', '내룸벨트', '大舌舔', 'Lickilicky'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/lickilicky.png',
			image: './src/assets/images/pokemon/normal/lickilicky-walk.png',
			frames: 4
		},
		hp: 20150,
		speed: 1,
		power: 2,
		regeneration: 50, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 1300,
	},
	carbink: {
		id: 'carbink',
		isElite: false,
		isBoss: false,
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
		sprite: {
			base:  './src/assets/images/pokemon/normal/carbink.png',
			image: './src/assets/images/pokemon/normal/carbink-idle.png',
			frames: 6
		},
		hp: 5000,
		armor: 10000,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: false,
		invisible: false,
		gold: 75,
		passive: passiveData.criticalAura
	},
	honedge: {
		id: 'honedge',
		isElite: false,
		isBoss: false,
		name: ['Honedge', 'Honedge', 'Monorpale', 'Honedge', 'Honedge', 'Gramokles', 'ヒトツキ', '단칼빙', '独剑鞘', 'Honedge'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/honedge.png',
			image: './src/assets/images/pokemon/normal/honedge-idle.png',
			frames: 8
		},
		hp: 2500, // 1500
		armor: 5000, // 4000
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 50
	},
	doublade: {
		id: 'doublade',
		isElite: false,
		isBoss: false,
		name: ['Doublade', 'Doublade', 'Dimoclès', 'Doublade', 'Doublade', 'Duokles', 'ニダンギル', '쌍검킬', '双剑鞘', 'Doublade'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/doublade.png',
			image: './src/assets/images/pokemon/normal/doublade-idle.png',
			frames: 8
		},
		hp: 9500,
		armor: 6300, // 5000
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 140
	},
	aegislash: {
		id: 'aegislash',
		isElite: false,
		isBoss: false,
		name: ['Aegislash', 'Aegislash', 'Exagide', 'Aegislash', 'Aegislash', 'Durengard', 'ギルガルド', '킬가르도', '坚盾剑怪', 'Aegislash'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/aegislashShield.png',
			image: './src/assets/images/pokemon/normal/aegislashShield-idle.png',
			frames: 8
		},
		hp: 9500,
		armor: 23500,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 650,
		passive: passiveData.stanceChange
	},
	spinda: {
		id: 'spinda',
		isElite: false,
		isBoss: false,
		name: ['spinda', 'spinda', 'Spinda', 'spinda', 'spinda', 'pandir', 'パッチール', '스핀다', '圓圓斑', 'spinda'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/spinda.png',
			image: './src/assets/images/pokemon/normal/spinda-idle.png',
			frames: 9
		},
		hp: 8000,
		speed: 1.2,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 1,
		passive: passiveData.ownTempo
	},
	sableye: {
		id: 'sableye',
		isElite: false,
		isBoss: false,
		name: ['sableye', 'sableye', 'Ténéfix', 'sableye', 'sableye', 'zobiris', 'ヤミラミ', '깜까미', '勾魂眼', 'sableye'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/sableye.png',
			image: './src/assets/images/pokemon/normal/sableye-idle.png',
			frames: 2
		},
		hp: 8900,
		speed: 0.7,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: true,
		gold: 80,
		passive: passiveData.stall 
	},
	audino: {
		id: 'audino',
		isElite: false,
		isBoss: false,
		name: [
			'Audino', // inglés
			'Audino', // español
			'Audino', // francés
			'Audino', // portugués
			'Audino', // italiano
			'Audino', // alemán
			'タブンネ', // japonés
			'다부니', // coreano
			'差不多娃娃', // chino
			'Audino' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/audino.png',
			image: './src/assets/images/pokemon/normal/audino-walk.png',
			frames: 4
		},
		hp: 25000, // 20000
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 500,
		passive: passiveData.healer 
	},
	snivy: {
		id: 'snivy',
		isElite: false,
		isBoss: false,
		name: ['Snivy', 'Snivy', 'Vipélierre', 'Snivy', 'Snivy', 'Serpifeu', 'ツタージャ', '주리비얀', '藤藤蛇', 'Snivy'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/snivy.png',
			image: './src/assets/images/pokemon/normal/snivy-walk.png',
			frames: 4
		},
		hp: 6000, //5000,
		speed: 1.4,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 66,
		passive: passiveData.contrary 
	},
	servine: {
		id: 'servine',
		isElite: false,
		isBoss: false,
		name: ['Servine', 'Servine', 'Lianaja', 'Servine', 'Servine', 'Efoserp', 'ジャノビー', '샤비', '青藤蛇', 'Servine'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/servine.png',
			image: './src/assets/images/pokemon/normal/servine-walk.png',
			frames: 4
		},
		hp: 7500, 
		speed: 1.6,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 266,
		passive: passiveData.contrary 
	},
	serperior: {
		id: 'serperior',
		isElite: false,
		isBoss: false,
		name: ['Serperior', 'Serperior', 'Majaspic', 'Serperior', 'Serperior', 'Serpiroyal', 'ジャローダ', '샤로다', '君主蛇', 'Serperior'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/serperior.png',
			image: './src/assets/images/pokemon/normal/serperior-walk.png',
			frames: 7
		},
		hp: 9500,
		speed: 1.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 466,
		passive: passiveData.contrary
	},
	solosis: {
		id: 'solosis',
		isElite: false,
		isBoss: false,
		name: [
			'Solosis', // inglés
			'Solosis', // español
			'Nucléos', // francés
			'Solosis', // portugués
			'Solosis', // italiano
			'Monozyto', // alemán
			'ユニラン', // japonés
			'유니란', // coreano
			'单卵细胞球', // chino
			'Solosis' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/solosis.png',
			image: './src/assets/images/pokemon/normal/solosis-walk.png',
			frames: 10
		},
		hp: 16000, //14000,
		speed: 0.8,
		power: 1,
		regeneration: 20, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 90,
		passive: passiveData.healBlock 
	},
	duosion: {
		id: 'duosion',
		isElite: false,
		isBoss: false,
		name: [
			'Duosion', // inglés
			'Duosion', // español
			'Méios', // francés
			'Duosion', // portugués
			'Duosion', // italiano
			'Mitodos', // alemán
			'ダブラン', // japonés
			'듀란', // coreano
			'双卵细胞球', // chino
			'Duosion' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/duosion.png',
			image: './src/assets/images/pokemon/normal/duosion-walk.png',
			frames: 10
		},
		hp: 22000, //20000,
		speed: 0.8,
		power: 1,
		regeneration: 40, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 260,
		passive: passiveData.healBlock 
	},
	reuniclus: {
		id: 'reuniclus',
		isElite: false,
		isBoss: false,
		name: [
			'Reuniclus', // inglés
			'Reuniclus', // español
			'Symbios', // francés
			'Reuniclus', // portugués
			'Reuniclus', // italiano
			'Zytomega', // alemán
			'ランクルス', // japonés
			'란쿨루스', // coreano
			'人造细胞卵', // chino
			'Reuniclus' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/reuniclus.png',
			image: './src/assets/images/pokemon/normal/reuniclus-walk.png',
			frames: 8
		},
		hp: 26000,
		speed: 0.8,
		power: 1,
		regeneration: 60, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 444,
		passive: passiveData.healBlock 
	},
	
	// RUTA 9
	wooloo: {
		id: 'wooloo',
		isElite: false,
		isBoss: false,
		name: [
			'Wooloo', // inglés
			'Wooloo', // español
			'Moumouton', // francés
			'Wooloo', // portugués
			'Wooloo', // italiano
			'Wolly', // alemán
			'ウールー', // japonés
			'우르', // coreano
			'毛辫羊', // chino
			'Wooloo' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/wooloo.png',
			image: './src/assets/images/pokemon/normal/wooloo-walk.png',
			frames: 4
		},
		hp: 10250,
		armor: 15500,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 50,
		passive: passiveData.fluffy 
	},
	dubwool: {
		id: 'dubwool',
		isElite: false,
		isBoss: false,
		name: [
			'Dubwool', // inglés
			'Dubwool', // español
			'Moumouflon', // francés
			'Dubwool', // portugués
			'Dubwool', // italiano
			'Zwollock', // alemán
			'バイウールー', // japonés
			'배우르', // coreano
			'毛毛角羊', // chino
			'Dubwool' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/dubwool.png',
			image: './src/assets/images/pokemon/normal/dubwool-walk.png',
			frames: 4
		},
		hp: 18000,
		armor: 25000,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 150,
		passive: passiveData.fluffy 
	},
	bounsweet: {
		id: 'bounsweet',
		isElite: false,
		isBoss: false,
		name: [
			'Bounsweet', // inglés
			'Bounsweet', // español
			'Croquine', // francés
			'Bounsweet', // portugués
			'Bounsweet', // italiano
			'Frubberl', // alemán
			'アマカジ', // japonés
			'달콤아', // coreano
			'甜竹竹', // chino
			'Bounsweet' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/bounsweet.png',
			image: './src/assets/images/pokemon/normal/bounsweet-walk.png',
			frames: 4
		},
		hp: 8000,
		armor: 0,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 20,
		passive: passiveData.leafGuard
	},
	steenee: {
		id: 'steenee',
		isElite: false,
		isBoss: false,
		name: [
			'Steenee', // inglés
			'Steenee', // español
			'Candine', // francés
			'Steenee', // portugués
			'Steenee', // italiano
			'Frubaila', // alemán
			'アママイコ', // japonés
			'달무리나', // coreano
			'甜舞妮', // chino
			'Steenee' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/steenee.png',
			image: './src/assets/images/pokemon/normal/steenee-walk.png',
			frames: 4
		},
		hp: 12000,
		armor: 0,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 70,
		passive: passiveData.leafGuard
	},
	tsareena: {
		id: 'tsareena',
		isElite: false,
		isBoss: false,
		name: [
			'Tsareena', // inglés
			'Tsareena', // español
			'Sucreine', // francés
			'Tsareena', // portugués
			'Tsareena', // italiano
			'Fruyal', // alemán
			'アマージョ', // japonés
			'달코퀸', // coreano
			'甜冷美后', // chino
			'Tsareena' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/tsareena.png',
			image: './src/assets/images/pokemon/normal/tsareena-walk.png',
			frames: 4
		},
		hp: 15000,
		armor: 0,
		speed: 1.2,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 180,
		passive: passiveData.leafGuard
	},
	smoliv: {
		id: 'smoliv',
		isElite: false,
		isBoss: false,
		name: [
			'Smoliv', // inglés
			'Smoliv', // español
			'Olivini', // francés
			'Smoliv', // portugués
			'Smoliv', // italiano
			'Olini', // alemán
			'ミニーブ', // japonés
			'미니브', // coreano
			'迷你芙', // chino
			'Smoliv' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/smoliv.png',
			image: './src/assets/images/pokemon/normal/smoliv-idle.png',
			frames: 8
		},
		hp: 11200,
		armor: 0,
		speed: 1,
		power: 1,
		regeneration: 50, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 44,
	},
	dolliv: {
		id: 'dolliv',
		isElite: false,
		isBoss: false,
		name: [
			'Dolliv', // inglés
			'Dolliv', // español
			'Olivado', // francés
			'Dolliv', // portugués
			'Dolliv', // italiano
			'Olivinio', // alemán
			'オリーニョ', // japonés
			'올리뇨', // coreano
			'奥利纽', // chino
			'Dolliv' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/dolliv.png',
			image: './src/assets/images/pokemon/normal/dolliv-idle.png',
			frames: 1
		},
		hp: 17600,
		armor: 0,
		speed: 1,
		power: 1,
		regeneration: 100, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 97,
	},
	arboliva: {
		id: 'arboliva',
		isElite: false,
		isBoss: false,
		name: [
			'Arboliva', // inglés
			'Arboliva', // español
			'Arboliva', // francés
			'Arboliva', // portugués
			'Arboliva', // italiano
			'Olithena', // alemán
			'オリーヴァ', // japonés
			'올리르바', // coreano
			'奥利瓦', // chino
			'Arboliva' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/arboliva.png',
			image: './src/assets/images/pokemon/normal/arboliva-idle.png',
			frames: 4
		},
		hp: 20200,
		armor: 0,
		speed: 1,
		power: 1,
		regeneration: 150, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 280,
	},

	skwovet: {
		id: 'skwovet',
		isElite: false,
		isBoss: false,
		name: [
			'Skwovet', // inglés
			'Skwovet', // español
			'Rongourmand', // francés
			'Skwovet', // portugués
			'Skwovet', // italiano
			'Raffel', // alemán
			'ホシガリス', // japonés
			'탐리스', // coreano
			'贪心栗鼠', // chino
			'Skwovet' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/skwovet.png',
			image: './src/assets/images/pokemon/normal/skwovet-walk.png',
			frames: 4
		},
		hp: 13200,
		armor: 0,
		speed: 1.2,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 90,
	},
	greedent: {
		id: 'greedent',
		isElite: false,
		isBoss: false,
		name: [
			'Greedent', // inglés
			'Greedent', // español
			'Rongrigou', // francés
			'Greedent', // portugués
			'Greedent', // italiano
			'Schlaraffel', // alemán
			'ヨクバリス', // japonés
			'요씽리스', // coreano
			'藏饱栗鼠', // chino
			'Greedent' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/greedent.png',
			image: './src/assets/images/pokemon/normal/greedent-walk.png',
			frames: 4
		},
		hp: 17600,
		armor: 0,
		speed: 1.2,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 125,
	},

	fomantis: {
		id: 'fomantis',
		isElite: false,
		isBoss: false,
		name: [
			'Fomantis', // inglés
			'Fomantis', // español
			'Mimantis', // francés
			'Fomantis', // portugués
			'Fomantis', // italiano
			'Imantis', // alemán
			'カリキリ', // japonés
			'짜랑랑', // coreano
			'伪螳草', // chino
			'Fomantis' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/fomantis.png',
			image: './src/assets/images/pokemon/normal/fomantis-walk.png',
			frames: 4
		},
		hp: 6000,
		armor: 5500,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 66,
	},

	cottonee: {
		id: 'cottonee',
		isElite: false,
		isBoss: false,
		name: ['cottonee', 'cottonee', 'Doudouvet', 'cottonee', 'cottonee', 'waumboll', 'モンメン', '소미안', '棉花怪', 'cottonee'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/cottonee.png',
			image: './src/assets/images/pokemon/normal/cottonee-walk.png',
			frames: 6
		},
		hp: 5000,
		armor: 0,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 200,
		passive: passiveData.tailWind
	},
	whimsicott: {
		id: 'whimsicott',
		isElite: false,
		isBoss: false,
		name: ['whimsicott', 'whimsicott', 'Farfaduvet', 'whimsicott', 'whimsicott', 'elfun', 'エルフーン', '엘풍', '風妖精', 'whimsicott'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/whimsicott.png',
			image: './src/assets/images/pokemon/normal/whimsicott-idle.png',
			frames: 8
		},
		hp: 10000,
		armor: 0,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 500,
		passive: passiveData.tailWind
	},

	petilil: {
		id: 'petilil',
		isElite: false,
		isBoss: false,
		name: ['petilil', 'petilil', 'Chlorobule', 'petilil', 'petilil', 'lilminip', 'チュリネ', '치릴리', '小肥花', 'petilil'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/petilil.png',
			image: './src/assets/images/pokemon/normal/petilil-walk.png',
			frames: 8
		},
		hp: 5000,
		armor: 5000,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 100,
	},
	lilligant: {
		id: 'lilligant',
		isElite: false,
		isBoss: false,
		name: ['lilligant', 'lilligant', 'Fragilady', 'lilligant', 'lilligant', 'dressella', 'ドレディア', '드레디어', '美麗花', 'lilligant'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/lilligant.png',
			image: './src/assets/images/pokemon/normal/lilligant-walk.png',
			frames: 4
		},
		hp: 10000,
		armor: 10000,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 300,
	},
	buneary: {
		id: 'buneary',
		isElite: false,
		isBoss: false,
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
		sprite: {
			base:  './src/assets/images/pokemon/normal/buneary.png',
			image: './src/assets/images/pokemon/normal/buneary-walk.png',
			frames: 6
		},
		hp: 8000,
		armor: 800,
		speed: 1.2,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 78,
	},
	combee: {
		id: 'combee',
		isElite: false,
		isBoss: false,
		name: ['Combee', 'Combee', 'Apitrini', 'Combee', 'Combee', 'Wadribie', 'ミツハニー', '세꿀버리', '三蜜蜂', 'Combee'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/combee.png',
			image: './src/assets/images/pokemon/normal/combee-idle.png',
			frames: 6
		},
		hp: 5000,
		armor: 0,
		speed: 2,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 144,
		passive: passiveData.honeyGather 
	},
	hoppip: {
		id: 'hoppip',
		isElite: false,
		isBoss: false,
		name: ['hoppip', 'hoppip', 'Granivol', 'hoppip', 'hoppip', 'hoppspross', 'ハネッコ', '두코', '風鈴鈴', 'hoppip'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/hoppip.png',
			image: './src/assets/images/pokemon/normal/hoppip-idle.png',
			frames: 15
		},
		hp: 5000,
		armor: 0,
		speed: 1.4,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 100,
		passive: passiveData.chlorophyll 
	},
	skiploom: {
		id: 'skiploom',
		isElite: false,
		isBoss: false,
		name: ['skiploom', 'skiploom', 'Floravol', 'skiploom', 'skiploom', 'hubelupf', 'ポポッコ', '두코리', '風鈴奈', 'skiploom'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/skiploom.png',
			image: './src/assets/images/pokemon/normal/skiploom-idle.png',
			frames: 2
		},
		hp: 6000,
		armor: 0,
		speed: 1.5,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 200,
		passive: passiveData.chlorophyll 
	},
	jumpluff: {
		id: 'jumpluff',
		isElite: false,
		isBoss: false,
		name: ['jumpluff', 'jumpluff', 'Cotovol', 'jumpluff', 'jumpluff', 'papungha', 'ワタッコ', '솜솜코', '風鈴花', 'jumpluff'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/jumpluff.png',
			image: './src/assets/images/pokemon/normal/jumpluff-idle.png',
			frames: 4
		},
		hp: 7000,
		armor: 0,
		speed: 1.6,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 300,
		passive: passiveData.chlorophyll 
	},
	sunkern: {
		id: 'sunkern',
		isElite: false,
		isBoss: false,
		name: ['sunkern', 'sunkern', 'Tournegrin', 'sunkern', 'sunkern', 'sonnkern', 'ヒマナッツ', '해너츠', '向日種子', 'sunkern'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sunkern.png',
			image: './src/assets/images/pokemon/normal/sunkern-idle.png',
			frames: 2
		},
		hp: 14900,
		armor: 0,
		speed: 0.8,
		power: 1,
		regeneration: 25, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 200,
	},
	sunflora: {
		id: 'sunflora',
		isElite: false,
		isBoss: false,
		name: ['sunflora', 'sunflora', 'Héliatronc', 'sunflora', 'sunflora', 'sonnflora', 'キマワリ', '해루미', '向日花怪', 'sunflora'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sunflora.png',
			image: './src/assets/images/pokemon/normal/sunflora-idle.png',
			frames: 16
		},
		hp: 26000,
		armor: 0,
		speed: 0.8,
		power: 1,
		regeneration: 50, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 500,
		passive: passiveData.sunnyDay 
	},
	
	// RUTA 10
	yamask: {
		id: 'yamask',
		isElite: false,
		isBoss: false,
		name: ['yamask', 'yamask', 'Tutafeh', 'yamask', 'yamask', 'makabaja', 'デスマス', '데스마스', '哭哭面具', 'yamask'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/yamask.png',
			image: './src/assets/images/pokemon/normal/yamask-idle.png',
			frames: 8
		},
		hp: 7000,
		armor: 3000,
		speed: 0.9,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 90,
		passive: passiveData.mummy 
	},
	cofagrigus: {
		id: 'cofagrigus',
		isElite: false,
		isBoss: false,
		name: ['cofagrigus', 'cofagrigus', 'Tutankafer', 'cofagrigus', 'cofagrigus', 'echnatoll', 'デスカーン', '데스니칸', '魂胸棺', 'cofagrigus'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/cofagrigus.png',
			image: './src/assets/images/pokemon/normal/cofagrigus-idle.png',
			frames: 4
		},
		hp: 15500,
		armor: 5000,
		speed: 0.9,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 650,
		passive: passiveData.mummy 
	},
	yamaskGalar: {
		id: 'yamaskGalar',
		isElite: false,
		isBoss: false,
		name: [
			'G.Yamask', // inglés
			'Yamask G.', // español
			'Tutafeh G.', // francés
			'Yamask G.', // portugués
			'Yamask G.', // italiano
			'G-Makabaja', // alemán
			'ガラルデスマス', // japonés
			'가라르 데스마스', // coreano
			'伽勒尔哭哭面具', // chino
			'G.Yamask' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/yamaskGalar.png',
			image: './src/assets/images/pokemon/normal/yamaskGalar-idle.png',
			frames: 8
		},
		hp: 4000,
		armor: 6000,
		speed: 0.9,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 110,
		passive: passiveData.mummy 
	},
	runerigus: {
		id: 'runerigus',
		isElite: false,
		isBoss: false,
		name: [
			'Runerigus', // inglés
			'Runerigus', // español
			'Tutétékri', // francés
			'Runerigus', // portugués
			'Runerigus', // italiano
			'Oghnatoll', // alemán
			'デスバーン', // japonés
			'데스판', // coreano
			'死神板', // chino
			'Runerigus' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/runerigus.png',
			image: './src/assets/images/pokemon/normal/runerigus-idle.png',
			frames: 3
		},
		hp: 5000,
		armor: 15500,
		speed: 0.9,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 700,
		passive: passiveData.mummy 
	},
	exeggcute: {
		id: 'exeggcute',
		isElite: false,
		isBoss: false,
		name: [
			'Exeggcute', // inglés
			'Exeggcute', // español
			'Noeunoeuf', // francés
			'Exeggcute', // portugués
			'Exeggcute', // italiano
			'Owei', // alemán
			'タマタマ', // japonés
			'아라리', // coreano
			'蛋蛋', // chino
			'Exeggcute' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/exeggcute.png',
			image: './src/assets/images/pokemon/normal/exeggcute-walk.png',
			frames: 4
		},
		hp: 17500,
		armor: 0,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 130,
	},
	exeggutor: {
		id: 'exeggutor',
		isElite: false,
		isBoss: false,
		name: [
			'Exeggutor', // inglés
			'Exeggutor', // español
			'Noadkoko', // francés
			'Exeggutor', // portugués
			'Exeggutor', // italiano
			'Kokowei', // alemán
			'ナッシー', // japonés
			'나시', // coreano
			'椰蛋树', // chino
			'Exeggutor' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/exeggutor.png',
			image: './src/assets/images/pokemon/normal/exeggutor-walk.png',
			frames: 4
		},
		hp: 25800,
		armor: 0,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 380,
	},
	aron: {
		id: 'aron',
		isElite: false,
		isBoss: false,
		name: ['aron', 'aron', 'Galekid', 'aron', 'aron', 'stollunior', 'ココドラ', '가보리', '可撓鋼', 'aron'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/aron.png',
			image: './src/assets/images/pokemon/normal/aron-idle.png',
			frames: 4
		},
		hp: 2000,
		armor: 9900,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 215,
	},
	lairon: {
		id: 'lairon',
		isElite: false,
		isBoss: false,
		name: ['lairon', 'lairon', 'Galegon', 'lairon', 'lairon', 'stollrak', 'コドラ', '갱도라', '可拉鋼', 'lairon'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/lairon.png',
			image: './src/assets/images/pokemon/normal/lairon-idle.png',
			frames: 4
		},
		hp: 5800,
		armor: 16000,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 440,
	},
	duskull: {
		id: 'duskull',
		isElite: false,
		isBoss: false,
		name: [
			'Duskull', // inglés
			'Duskull', // español
			'Skelénox', // francés
			'Duskull', // portugués
			'Duskull', // italiano
			'Zwirrlicht', // alemán
			'ヨマワル', // japonés
			'해골몽', // coreano
			'夜巡灵', // chino
			'Duskull' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/duskull.png',
			image: './src/assets/images/pokemon/normal/duskull-walk.png',
			frames: 8
		},
		hp: 10000,
		armor: 12000,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: true,
		gold: 370,
		passive: passiveData.mummy 
	},
	dusclops: {
		id: 'dusclops',
		isElite: false,
		isBoss: false,
		name: [
			'Dusclops', // inglés
			'Dusclops', // español
			'Teraclope', // francés
			'Dusclops', // portugués
			'Dusclops', // italiano
			'Dusclops', // alemán
			'サマヨール', // japonés
			'미라몽', // coreano
			'彷徨夜灵', // chino
			'Dusclops' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/dusclops.png',
			image: './src/assets/images/pokemon/normal/dusclops-walk.png',
			frames: 4
		},
		hp: 18000,
		armor: 25000,
		speed: 0.8,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: true,
		gold: 780,
		passive: passiveData.mummy 
	},
	// ELITES
	// MINIJEFES
	// MINIBOSSES
	
	mantine: {
		id: 'mantine',
		isElite: true,
		isBoss: false,
		name: ['mantine', 'mantine', 'manta', 'mantine', 'mantine', 'mantax', 'マンタイン', '만타인', '巨翅飞鱼', 'mantine'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/mantine.png',
			image: './src/assets/images/pokemon/normal/mantine-idle.png',
			frames: 8
		},
		hp: 70000,
		speed: 0.5,
		power: 5,
		regeneration: 500, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 4000,
		passive: passiveData.remoaid
	},
	wailord: {
		id: 'wailord',
		isElite: true,
		isBoss: false,
		name: ['wailord', 'wailord', 'wailord', 'wailord', 'wailord', 'wailord', 'ホエルオー', '고래왕', '吼鲸王', 'wailord'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/wailord.png',
			image: './src/assets/images/pokemon/normal/wailord-idle.png',
			frames: 6
		},
		hp: 3000000,
		speed: 0.3,
		power: 7,
		regeneration: 150, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 8000,
		passive: passiveData.waterVeil
	},
	wishiwashi: {
		id: 'wishiwashi',
		isElite: true,
		isBoss: false,
		name: ['wishiwashi', 'wishiwashi', 'froussardine', 'wishiwashi', 'wishiwashi', 'lusardin', 'ヨワシ', '약어리', '弱丁鱼', 'wishiwashi'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/wishiwashi.png',
			image: './src/assets/images/pokemon/normal/wishiwashi-idle.png',
			solo: './src/assets/images/pokemon/normal/wishiwashiSolo-idle.png',
			frames: 10,
			framesSolo: 8
		},
		hp: 52590,
		speed: 1,
		power: 5,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 12000,
		passive: passiveData.schooling
	},
	wishiwashiSolo: {
		id: 'wishiwashiSolo',
		isElite: true,
		isBoss: false,
		name: ['wishiwashi', 'wishiwashi', 'froussardine', 'wishiwashi', 'wishiwashi', 'lusardin', 'ヨワシ', '약어리', '弱丁鱼', 'wishiwashi'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/wishiwashiSolo.png',
			image: './src/assets/images/pokemon/normal/wishiwashiSolo-idle.png',
			frames: 8
		},
		hp: 5000,
		speed: 1,
		power: 1,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 5,
	},
	huntail: {
		id: 'huntail',
		isElite: true,
		isBoss: false,
		name: ['huntail', 'huntail', 'huntail', 'huntail', 'huntail', 'aelabyss', 'ハンテール', '헌테일', '猎斑鱼', 'huntail'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/huntail.png',
			image: './src/assets/images/pokemon/normal/huntail-idle.png',
			frames: 8
		},
		hp: 25000,
		speed: 1.5,
		power: 5,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: false,
		canPoison: true,
		invisible: true,
		gold: 10000,
		passive: passiveData['swiftSwim']
	},
	gorebyss: {
		id: 'gorebyss',
		isElite: true,
		isBoss: false,
		name: ['gorebyss', 'gorebyss', 'rosabyss', 'gorebyss', 'gorebyss', 'saganabyss', 'サクラビス', '분홍장이', '樱花鱼', 'gorebyss'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/gorebyss.png',
			image: './src/assets/images/pokemon/normal/gorebyss-idle.png',
			frames: 4
		},
		hp: 30000,
		speed: 1,
		power: 5,
		regeneration: 100, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 10000,
		passive: passiveData['swiftSwim']
	},
	slowking: {
		id: 'slowking',
		isElite: true,
		isBoss: false,
		name: ['Slowking', 'Slowking', 'Roigada', 'Slowking', 'Slowking', 'Laschoking', 'ヤドキング', '야도킹', '呆呆王', 'Slowking'],
		sprite: {
			base: './src/assets/images/pokemon/normal/slowking.png',
			image: './src/assets/images/pokemon/normal/slowking-walk.png',
			frames: 4
		},
		hp: 70000,
		armor: 70000,
		speed: 0.5,
		power: 7,
		regeneration: 50, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 6000,
		passive: passiveData.slackOff
	},
	mimikyu: {
		id: 'mimikyu',
		isElite: true,
		isBoss: false,
		name: ['Mimikyu', 'Mimikyu', 'Mimiqui', 'Mimikyu', 'Mimikyu', 'Mimigma', 'ミミッキュ', '따라큐', '谜拟丘', 'Mimikyu'],
		sprite: {
			base: './src/assets/images/pokemon/normal/mimikyu.png',
			image: './src/assets/images/pokemon/normal/mimikyu-walk.png',
			frames: 4
		},
		hp: 22000,
		armor: 11000,
		speed: 1,
		power: 7,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: true,
		gold: 10000,
		passive: passiveData.disguise
	},
	kommoO: {
		id: 'kommoO',
		isElite: true,
		isBoss: false,
		name: ['kommo-o', 'kommo-o', 'ékaïser', 'kommo-o', 'kommo-o', 'jararanga', 'ジャラランガ', '짜랑고우거', '杖尾鳞甲龙', 'kommo-o'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/kommoO.png',
			image: './src/assets/images/pokemon/normal/kommoO-walk.png',
			frames: 4
		},
		hp: 25000,
		armor: 250000,
		speed: 0.3,
		power: 7,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 14000,
		passive: passiveData.clangingScales
	},
	turtonator: {
	    id: 'turtonator',
	    isElite: true,
	    isBoss: false,
	    name: ['Turtonator', 'Turtonator', 'Boumata', 'Turtonator', 'Turtonator', 'Tortunator', 'バクガメス', '폭거북스', '爆焰龜獸', 'Turtonator'],
	    sprite: {
        	base: './src/assets/images/pokemon/normal/turtonator.png',
        	image: './src/assets/images/pokemon/normal/turtonator-walk.png',
			frames: 4
		},
		hp: 40000,
		armor: 200000,
		speed: 1,
		power: 10,
		regeneration: 100, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 18000,
		passive: passiveData.shellSmash
	},
	steelix: {
		id: 'steelix',
		isElite: true,
		isBoss: false,
		name: ['Steelix', 'Steelix', 'Steelix', 'Steelix', 'Steelix', 'Stahlos', 'ハガネール', '강철톤', '大鋼蛇', 'Steelix'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/steelix.png',
			image: './src/assets/images/pokemon/normal/steelix-walk.png',
			frames: 4
		},
		hp: 4000,
		armor: 125000,
		speed: 1,
		power: 7,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 20000,
		passive: passiveData.rockHead 
	},
	carnivine: {
		id: 'carnivine',
		isElite: true,
		isBoss: false,
		name: ['Carnivine', 'Carnivine', 'Vortente', 'Carnivine', 'Carnivine', 'Venuflibis', 'マスキッパ', '무스틈니', '尖牙籠', 'Carnivine'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/carnivine.png',
			image: './src/assets/images/pokemon/normal/carnivine-walk.png',
			frames: 9
		},
		hp: 200000,
		armor: 0,
		speed: 0.8,
		power: 7,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 24000,
		passive: passiveData.ingrain 
	},
	durant: {
		id: 'durant',
		isElite: true,
		isBoss: false,
		name: ['Durant', 'Durant', 'Fermite', 'Durant', 'Durant', 'Fermicula', 'アイアント', '아이앤트', '鐵蟻', 'Durant'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/durant.png',
			image: './src/assets/images/pokemon/normal/durant-walk.png',
			frames: 3
		},
		hp: 5500,
		armor: 70000,
		speed: 0.8,
		power: 7,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 28000,
		passive: passiveData.hustle 
	},
	heatmor: {
		id: 'heatmor',
		isElite: true,
		isBoss: false,
		name: ['Heatmor', 'Heatmor', 'Aflamanoir', 'Heatmor', 'Heatmor', 'Furnifraß', 'クイタラン', '앤티골', '熔蟻獸', 'Heatmor'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/heatmor.png',
			image: './src/assets/images/pokemon/normal/heatmor-walk.png',
			frames: 4
		},
		hp: 170000,
		armor: 25000,
		speed: 1,
		power: 7,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 32000,
		passive: passiveData.flashFire 
	},
	dhelmise: {
		id: 'dhelmise',
		isElite: true,
		isBoss: false,
		name: ['Dhelmise', 'Dhelmise', 'Sinistrail', 'Dhelmise', 'Dhelmise', 'Moruda', 'ダダリン', '타타륜', '破破舵輪', 'Dhelmise'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/dhelmise.png',
			image: './src/assets/images/pokemon/normal/dhelmise-walk.png',
			frames: 8
		},
		hp: 23000,
		armor: 80200,
		speed: 0.8,
		power: 7,
		regeneration: 500, 
		canStun: true,
		canSlow: false,
		canBurn: false,
		canPoison: false,
		invisible: false,
		gold: 34000,
		passive: passiveData.anchorShot
	},
	shiftry: {
		id: 'shiftry',
		isElite: true,
		isBoss: false,
		name: ['Shiftry', 'Shiftry', 'Tengalice', 'Shiftry', 'Shiftry', 'Tengulist', 'ダーテング', '다탱구', '狡猾天狗', 'Shiftry'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/shiftry.png',
			image: './src/assets/images/pokemon/normal/shiftry-walk.png',
			frames: 8
		},
		hp: 150000,
		armor: 250000,
		speed: 1,
		power: 7,
		regeneration: 300, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 38000,
		passive: passiveData.windRider
	},
	bronzong: {
		id: 'bronzong',
		isElite: true,
		isBoss: false,
		name: ['Bronzong', 'Bronzong', 'Archéodong', 'Bronzong', 'Bronzong', 'Bronzong', 'ドータクン', '동탁군', '青銅鐘', 'Bronzong'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/bronzong.png',
			image: './src/assets/images/pokemon/normal/bronzong-walk.png',
			frames: 8
		},
		hp: 100000,
		armor: 200000,
		speed: 1,
		power: 7,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 42000,
		passive: passiveData.soundproof
	},
	hawlucha: {
		id: 'hawlucha',
		isElite: true,
		isBoss: false,
		name: ['Hawlucha', 'Hawlucha', 'Brutalibré', 'Hawlucha', 'Hawlucha', 'Resladero', 'ルチャブル', '루차불', '摔角鷹人', 'Hawlucha'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/hawlucha.png',
			image: './src/assets/images/pokemon/normal/hawlucha-walk.png',
			frames: 4
		},
		hp: 8400,
		armor: 46000,
		speed: 1.1,
		power: 7,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 46000,
		passive: passiveData.luchadoro
	},
	klefki: {
		id: 'klefki',
		isElite: true,
		isBoss: false,
		name: ['Klefki', 'Klefki', 'Trousselin', 'Klefki', 'Klefki', 'Clavion', 'クレッフィ', '클레피', '鑰圈兒', 'Klefki'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/klefki.png',
			image: './src/assets/images/pokemon/normal/klefki-walk.png',
			frames: 6
		},
		hp: 60000,
		armor: 150000,
		speed: 1,
		power: 7,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 50000,
		passive: passiveData.fairyLock
	},
	superSpinda: {
		id: 'superSpinda',
		isElite: true,
		isBoss: false,
		name: ['spinda', 'spinda', 'Spinda', 'spinda', 'spinda', 'pandir', 'パッチール', '스핀다', '圓圓斑', 'spinda'],
		sprite: {
			base:  './src/assets/images/pokemon/shiny/spinda.png',
			image: './src/assets/images/pokemon/shiny/spinda-idle.png',
			frames: 9
		},
		hp: 355933,
		speed: 1.5,
		power: 7,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 50000,
		passive: passiveData.ownTempo
	},
	aegislashSword: {
		id: 'aegislashSword',
		isElite: true,
		isBoss: false,
		name: ['Aegislash', 'Aegislash', 'Exagide', 'Aegislash', 'Aegislash', 'Durengard', 'ギルガルド', '킬가르도', '坚盾剑怪', 'Aegislash'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/aegislashSword.png',
			image: './src/assets/images/pokemon/normal/aegislashSword-idle.png',
			frames: 8
		},
		hp: 50000,
		armor: 0,
		speed: 1,
		power: 7,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: false,
		invisible: false,
		gold: 50000,
		passive: passiveData.kingsShield
	},
	skarmory: {
		id: 'skarmory',
		isElite: true,
		isBoss: false,
		name: [
			'Skarmory', // inglés
			'Skarmory', // español
			'Airmure', // francés
			'Skarmory', // portugués
			'Skarmory', // italiano
			'Panzaeron', // alemán
			'エアームド', // japonés
			'무장조', // coreano
			'盔甲鸟', // chino
			'Skarmory' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/skarmory.png',
			image: './src/assets/images/pokemon/normal/skarmory-walk.png',
			frames: 7
		},
		hp: 30000,
		armor: 300000,
		speed: 1.2,
		power: 7,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 50000,
		passive: passiveData.weakArmor
	},
	tropius: {
		id: 'tropius',
		isElite: true,
		isBoss: false,
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
		sprite: {
			base:  './src/assets/images/pokemon/normal/tropius.png',
			image: './src/assets/images/pokemon/normal/tropius-idle.png',
			frames: 12
		},
		hp: 150000,
		speed: 1.5,
		power: 7,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 50000,
		passive: passiveData.synthesis
	},
	lurantis: {
		id: 'lurantis',
		isElite: true,
		isBoss: false,
		name: [
			'Lurantis', // inglés
			'Lurantis', // español
			'Floramantis', // francés
			'Lurantis', // portugués
			'Lurantis', // italiano
			'Mantidea', // alemán
			'ラランテス', // japonés
			'라란티스', // coreano
			'兰螳花', // chino
			'Lurantis' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/lurantis.png',
			image: './src/assets/images/pokemon/normal/lurantis-walk.png',
			frames: 4
		},
		hp: 190000,
		speed: 1,
		power: 7,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 50000,
		passive: passiveData.sweetScent
	},
	lopunny: {
		id: 'lopunny',
		isElite: true,
		isBoss: false,
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
		sprite: {
			base:  './src/assets/images/pokemon/normal/lopunny.png',
			image: './src/assets/images/pokemon/normal/lopunny-walk.png',
			frames: 9
		},
		hp: 200000,
		speed: 1.2,
		power: 7,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 50000,
		passive: passiveData.klutz
	},
	vespiquen: {
		id: 'vespiquen',
		isElite: true,
		isBoss: false,
		name: ['Vespiquen', 'Vespiquen', 'Apireine', 'Vespiquen', 'Vespiquen', 'Honweisel', 'ビークイン', '비퀸', '蜂女王', 'Vespiquen'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/vespiquen.png',
			image: './src/assets/images/pokemon/normal/vespiquen-idle.png',
			frames: 14
		},
		hp: 700000,
		speed: 1,
		power: 7,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 50000,
		passive: passiveData.honeyGatherBoss
	},
	shuckle: {
		id: 'shuckle',
		isElite: true,
		isBoss: false,
		name: ['shuckle', 'shuckle', 'Caratroc', 'shuckle', 'shuckle', 'pottrott', 'ツボツボ', '단단지', '盾甲蛹', 'shuckle'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/shuckle.png',
			image: './src/assets/images/pokemon/normal/shuckle-idle.png',
			frames: 4
		},
		hp: 1,
		armor: 215000,
		speed: 0.5,
		power: 7,
		regeneration: 0, 
		canStun: false,
		canSlow: false,
		canBurn: false,
		canPoison: false,
		invisible: false,
		gold: 50000,
		passive: passiveData.guardSplit
	},
	exeggutorAlola: {
		id: 'exeggutorAlola',
		isElite: true,
		isBoss: false,
		name: [
			'A. Exeggutor', // inglés
			'Exeggutor A.', // español
			'Noadkoko A.', // francés
			'Exeggutor A.', // portugués
			'Exeggutor A-', // italiano
			'A-Kokowei', // alemán
			'アローラのナッシー', // japonés
			'알로라 나시', // coreano
			'阿罗拉椰蛋树', // chino
			'A. Exeggutor' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/exeggutorAlola.png',
			image: './src/assets/images/pokemon/normal/exeggutorAlola-idle.png',
			frames: 4
		},
		hp: 145000,
		armor: 0,
		speed: 0.8,
		power: 7,
		regeneration: 0, 
		canStun: false,
		canSlow: false,
		canBurn: false,
		canPoison: false,
		invisible: false,
		gold: 50000,
		passive: passiveData.coconutDrop
	},
	aggron: {
		id: 'aggron',
		isElite: true,
		isBoss: false,
		name: ['aggron', 'aggron', 'Galeking', 'aggron', 'aggron', 'stolloss', 'ボスゴドラ', '보스로라', '銀甲怪', 'aggron'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/aggron.png',
			image: './src/assets/images/pokemon/normal/aggron-idle.png',
			frames: 6
		},
		hp: 40000,
		armor: 60000,
		speed: 0.8,
		power: 7,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 50000,
		passive: passiveData.heavyMetal
	},
	dusknoir: {
		id: 'dusknoir',
		isElite: true,
		isBoss: false,
		name: [
			'Dusknoir', // inglés
			'Dusknoir', // español
			'Noctunoir', // francés
			'Dusknoir', // portugués
			'Dusknoir', // italiano
			'Zwirrfinst', // alemán
			'ヨノワール', // japonés
			'야느와르몽', // coreano
			'黑夜魔灵', // chino
			'Dusknoir' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/dusknoir.png',
			image: './src/assets/images/pokemon/normal/dusknoir-walk.png',
			frames: 4
		},
		hp: 400000,
		armor: 60000,
		speed: 0.5,
		power: 7,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: true,
		gold: 50000,
		passive: passiveData.pressure
	},
	sirfetchd: {
		id: 'sirfetchd',
		isElite: true,
		isBoss: false,
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
		sprite: {
			base:  './src/assets/images/pokemon/normal/sirfetchd.png',
			image: './src/assets/images/pokemon/normal/sirfetchd-walk.png',
			frames: 4
		},
		hp: 100,
		speed: 1,
		power: 15,
		regeneration: 0, 
		canStun: false,
		canSlow: false,
		canBurn: false,
		canPoison: false,
		invisible: false,
		gold: 5000,
		passive: passiveData.criticalLearning
	},
	// JEFES
	// BOSSES
	shaymin: {
		id: 'shaymin',
		isElite: false,
		isBoss: true,
		name: ['shaymin', 'shaymin', 'Shaymin', 'shaymin', 'shaymin', 'Shaymin', 'シェイミ', '쉐이미', '仙子精灵', 'shaymin'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/shaymin.png',
			image: './src/assets/images/pokemon/normal/shaymin-idle.png',
			frames: 4
		},
		hp: 120000,
		speed: 0.8,
		power: 15,
		regeneration: 1000, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 5000,
		passive: passiveData.naturalCure
	},
	celebi: {
		id: 'celebi',
		isElite: false,
		isBoss: true,
		name: ['celebi', 'celebi', 'Célébi', 'celebi', 'celebi', 'Celebi', 'セレビィ', '세레비', '时拉比', 'celebi'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/celebi.png',
			image: './src/assets/images/pokemon/normal/celebi-idle.png',
			frames: 8
		},
		hp: 70000,
		speed: 1.4,
		power: 15,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 10000,
		passive: passiveData.timeTravel
	},
	lunala: {
		id: 'lunala',
		isElite: false,
		isBoss: true,
		name: ['lunala', 'lunala', 'Lunala', 'lunala', 'lunala', 'Lunala', 'ルナアラ', '루나라', '月亮伊布', 'lunala'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/lunala.png',
			image: './src/assets/images/pokemon/normal/lunala-idle.png',
			frames: 4
		},
		hp: 200000,
		armor: 3000, 
		speed: 0.8,
		power: 15,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: true,
		gold: 15000,
		passive: passiveData.shadowShield
	},
	zapdos: {
		id: 'zapdos',
		isElite: false,
		isBoss: true,
		name: ['zapdos', 'zapdos', 'Électhor', 'zapdos', 'zapdos', 'Zapdos', 'サンダー', '썬더', '闪电鸟', 'zapdos'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/zapdos.png',
			image: './src/assets/images/pokemon/normal/zapdos-idle.png',
			frames: 4
		},
		hp: 120000,
		armor: 80000,
		speed: 1.2,
		power: 15,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 20000,
		passive: passiveData.static
	},
	moltres: {
		id: 'moltres',
		isElite: false,
		isBoss: true,
		name: ['moltres', 'moltres', 'Sulfura', 'moltres', 'moltres', 'Lavados', 'ファイヤー', '파이어', '火焰鸟', 'moltres'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/moltres.png',
			image: './src/assets/images/pokemon/normal/moltres-idle.png',
			frames: 4
		},
		hp: 120000,
		armor: 60000,
		speed: 1.2,
		power: 15,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 6000,
		passive: passiveData.flameBody
	},
	regirock: {
		id: 'regirock',
		isElite: false,
		isBoss: true,
		name: ['regirock', 'regirock', 'Regirock', 'regirock', 'regirock', 'Regirock', 'レジロック', '레지락', '雷吉洛克', 'regirock'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/regirock.png',
			image: './src/assets/images/pokemon/normal/regirock-walk.png',
			frames: 4
		},
		hp: 100000,
		armor: 100000,
		speed: 0.5,
		power: 15,
		regeneration: 0, 
		canStun: false,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 24000,
		passive: passiveData.sturdy
	},
	groudon: {
		id: 'groudon',
		isElite: false,
		isBoss: true,
		name: ['groudon', 'groudon', 'Groudon', 'groudon', 'groudon', 'groudon', 'グラードン', '그라돈', '固拉多', 'groudon'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/groudon.png',
			image: './src/assets/images/pokemon/normal/groudon-walk.png',
			primal: './src/assets/images/pokemon/normal/groudonPrimal-walk.png',
			frames: 4
		},
		hp: 150000,
		speed: 0.8,
		power: 15,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: false,
		canPoison: false,
		invisible: false,
		gold: 18000,
		passive: passiveData.drought
	},
	hooh: {
		id: 'hooh',
		isElite: false,
		isBoss: true,
		name: ['Ho-Oh', 'Ho-Oh', 'Ho-Oh', 'Ho-Oh', 'Ho-Oh', 'Ho-Oh', 'ホウオウ', '칠색조', '凤凰', 'Ho-Oh'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/hooh.png',
			image: './src/assets/images/pokemon/normal/hooh-walk.png',
			frames: 5
		},
		hp: 130000,
		speed: 0.8,
		power: 15,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 12000,
		passive: passiveData.regenerator
	},
	regice: {
		id: 'regice',
		isElite: false,
		isBoss: true,
		name: ['regice', 'regice', 'Regice', 'regice', 'regice', 'Regice', 'レジアイス', '레지아이스', '雷吉艾斯', 'regice'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/regice.png',
			image: './src/assets/images/pokemon/normal/regice-walk.png',
			frames: 6
		},
		hp: 1,
		armor: 200000,
		speed: 1,
		power: 15,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 7000,
		passive: passiveData.iceBody
	},
	registeel: {
		id: 'registeel',
		isElite: false,
		isBoss: true,
		name: ['registeel', 'registeel', 'Registeel', 'registeel', 'registeel', 'Registeel', 'レジスチル', '레지스틸', '雷吉斯钢', 'registeel'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/registeel.png',
			image: './src/assets/images/pokemon/normal/registeel-walk.png',
			frames: 4
		},
		hp: 125000,
		armor: 125000,
		speed: 0.8,
		power: 15,
		regeneration: 10, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 14000,
		passive: passiveData.lightMetal
	},
	regigigas: {
		id: 'regigigas',
		isElite: false,
		isBoss: true,
		name: ['regigigas', 'regigigas', 'Regigigas', 'regigigas', 'regigigas', 'regigigas', 'レジギガス', '레지기가스', '雷吉奇卡斯', 'regigigas'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/regigigas.png',
			image: './src/assets/images/pokemon/normal/regigigas-walk.png',
			frames: 4
		},
		hp: 1000000000,
		armor: 1000000000,
		speed: 0.2,
		power: 15,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 21000,
		passive: passiveData.slowStart
	},
	articuno: {
		id: 'articuno',
		isElite: false,
		isBoss: true,
		name: ['articuno', 'articuno', 'Artikodin', 'articuno', 'articuno', 'Arktos', 'フリーザー', '프리저', '急冻鸟', 'articuno'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/articuno.png',
			image: './src/assets/images/pokemon/normal/articuno-idle.png',
			frames: 4
		},
		hp: 225000,
		speed: 0.8,
		power: 15,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 28000,
		passive: passiveData.snowCloak
	},
	kyogre: {
		id: 'kyogre',
		isElite: false,
		isBoss: true,
		name: ['kyogre', 'kyogre', 'kyogre', 'kyogre', 'kyogre', 'kyogre', 'カイオーガ', '가이오가', '盖欧卡', 'kyogre'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/kyogre.png',
			image: './src/assets/images/pokemon/normal/kyogre-idle.png',
			primal: './src/assets/images/pokemon/normal/kyogrePrimal-walk.png',
			frames: 10
		},
		hp: 150000,
		speed: 0.8,
		power: 15,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 35000,
		passive: passiveData.drizzle
	},
	thundurus: {
		id: 'thundurus',
		isElite: false,
		isBoss: true,
		name: ['thundurus', 'thundurus', 'fulguris', 'thundurus', 'thundurus', 'voltolos', 'ボルトロス', '볼트로스', '雷电云', 'thundurus'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/thundurus.png',
			image: './src/assets/images/pokemon/normal/thundurus-walk.png',
			frames: 9
		},
		hp: 150000,
		armor: 50000,
		speed: 1.4,
		power: 15,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 40000,
		passive: passiveData.prankster
	},
	tapuFini: {
		id: 'tapuFini',
		isElite: false,
		isBoss: true,
		name: ['tapu fini', 'tapu fini', 'tokopisco', 'tapu fini', 'tapu fini', 'kapu-kime', 'カプ・レヒレ', '카푸느지느', '卡璞・鳍鳍', 'tapu fini'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/tapuFini.png',
			image: './src/assets/images/pokemon/normal/tapuFini-idle.png',
			frames: 4
		},
		hp: 75000,
		armor: 175000,
		speed: 0.9,
		power: 15,
		regeneration: 350, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 45000,
		passive: passiveData.nebulogenesis
	},
	nihilego: {
		id: 'nihilego',
		isElite: false,
		isBoss: true,
		name: ['nihilego', 'nihilego', 'zéroïd', 'nihilego', 'nihilego', 'anego', 'ウツロイド', '텅비드', '虚吾伊德', 'nihilego'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/nihilego.png',
			image: './src/assets/images/pokemon/normal/nihilego-idle.png',
			frames: 7
		},
		hp: 125000,
		armor: 0,
		speed: 1.1,
		power: 15,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 50000,
		passive: passiveData.abyssalBound
	},
	tapuKoko: {
		id: 'tapuKoko',
		isElite: false,
		isBoss: true,
		name: ['Tapu Koko', 'Tapu Koko', 'Tokorico', 'Tapu Koko', 'Tapu Koko', 'Kapu-Riki', 'カプ・コケコ', '카푸꼬꼬꼭', '卡璞・鸣鸣', 'Tapu Koko'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/tapuKoko.png',
			image: './src/assets/images/pokemon/normal/tapuKoko-walk.png',
			frames: 4
		},
		hp: 50000,
		armor: 0,
		speed: 1,
		power: 15,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 55000,
		passive: passiveData.electrogenesis
	},
	tapuBulu: {
		id: 'tapuBulu',
		isElite: false,
		isBoss: true,
		name: ['Tapu Bulu', 'Tapu Bulu', 'Tokotoro', 'Tapu Bulu', 'Tapu Bulu', 'Kapu-Toro', 'カプ・ブルル', '카푸브루루', '卡璞・布鲁鲁', 'Tapu Bulu'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/tapuBulu.png',
			image: './src/assets/images/pokemon/normal/tapuBulu-walk.png',
			frames: 4
		},
		hp: 150000,
		armor: 35000,
		speed: 0.9,
		power: 15,
		regeneration: 20000, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 60000,
		passive: passiveData.herbogenesis
	},
	tapuLele: {
		id: 'tapuLele',
		isElite: false,
		isBoss: true,
		name: ['Tapu Lele', 'Tapu Lele', 'Tokopiyon', 'Tapu Lele', 'Tapu Lele', 'Kapu-Fala', 'カプ・テテフ', '카푸나비나', '卡璞・蝶蝶', 'Tapu Lele'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/tapuLele.png',
			image: './src/assets/images/pokemon/normal/tapuLele-walk.png',
			frames: 5
		},
		hp: 125000,
		armor: 25000,
		speed: 1,
		power: 15,
		regeneration: 100, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 65000,
		passive: passiveData.psychogenesis
	},
	keldeo: {
		id: 'keldeo',
		isElite: false,
		isBoss: true,
		name: ['Keldeo', 'Keldeo', 'Keldeo', 'Keldeo', 'Keldeo', 'Keldeo', 'ケルディオ', '케르디오', '凯路迪欧', 'Keldeo'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/keldeo.png',
			image: './src/assets/images/pokemon/normal/keldeo-walk.png',
			frames: 4
		},
		hp: 250000,
		speed: 1.2,
		power: 15,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 70000,
		passive: passiveData.justified
	},
	heatran: {
		id: 'heatran',
		isElite: false,
		isBoss: true,
		name: ['Heatran', 'Heatran', 'Heatran', 'Heatran', 'Heatran', 'Heatran', 'ヒードラン', '히드런', '席多藍恩', 'Heatran'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/heatran.png',
			image: './src/assets/images/pokemon/normal/heatran-idle.png',
			frames: 4
		},
		hp: 100000,
		armor: 175000,
		speed: 1,
		power: 15,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 75000,
		passive: passiveData.magmaStorm
	},
	landorus: {
		id: 'landorus',
		isElite: false,
		isBoss: true,
		name: ['Landorus', 'Landorus', 'Démétéros', 'Landorus', 'Landorus', 'Demeteros', 'ランドロス', '랜드로스', '土地雲', 'Landorus'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/landorus.png',
			image: './src/assets/images/pokemon/normal/landorus-idle.png',
			frames: 9
		},
		hp: 150000,
		armor: 100000,
		speed: 1,
		power: 15,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 80000,
		passive: passiveData.sheerForce
	},
	volcanion: {
		id: 'volcanion',
		isElite: false,
		isBoss: true,
		name: ['Volcanion', 'Volcanion', 'Volcanion', 'Volcanion', 'Volcanion', 'Volcanion', 'ボルケニオン', '볼케니온', '波爾凱尼恩', 'Volcanion'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/volcanion.png',
			image: './src/assets/images/pokemon/normal/volcanion-idle.png',
			frames: 4
		},
		hp: 150000,
		armor: 50000,
		speed: 1,
		power: 15,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: false,
		canPoison: false,
		invisible: false,
		gold: 85000,
		passive: passiveData.steamEngine
	},
	pheromosa: {
		id: 'pheromosa',
		isElite: false,
		isBoss: true,
		name: ['Pheromosa', 'Pheromosa', 'Cancrelove', 'Pheromosa', 'Pheromosa', 'Schabelle', 'フェローチェ', '페로코체', '費洛美螂', 'Pheromosa'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/pheromosa.png',
			image: './src/assets/images/pokemon/normal/pheromosa-idle.png',
			frames: 4
		},
		hp: 500000,
		armor: 0,
		speed: 1,
		power: 15,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 90000,
		passive: passiveData.pheromoneRush
	},
	cobalion: {
		id: 'cobalion',
		isElite: false,
		isBoss: true,
		name: ['Cobalion', 'Cobalion', 'Cobaltium', 'Cobalion', 'Cobalion', 'Kobalium', 'コバルオン', '코바르온', '勾帕路翁', 'Cobalion'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/cobalion.png',
			image: './src/assets/images/pokemon/normal/cobalion-walk.png',
			frames: 4
		},
		hp: 150000,
		armor: 50000,
		speed: 1,
		power: 15,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 95000,
		passive: passiveData.justified
	},
	tornadus: {
		id: 'tornadus',
		isElite: false,
		isBoss: true,
		name: ['Tornadus', 'Tornadus', 'Boréas', 'Tornadus', 'Tornadus', 'Boreos', 'トルネロス', '토네로스', '龍捲雲', 'Tornadus'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/tornadus.png',
			image: './src/assets/images/pokemon/normal/tornadus-idle.png',
			frames: 9
		},
		hp: 140000,
		armor: 100000,
		speed: 1,
		power: 15,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 100000,
		passive: passiveData.gust
	},
	stakataka: {
		id: 'stakataka',
		isElite: false,
		isBoss: true,
		name: ['Stakataka', 'Stakataka', 'Ama-Ama', 'Stakataka', 'Stakataka', 'Muramura', 'ツンデツンデ', '차곡차곡', '壘磊石', 'Stakataka'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/stakataka.png',
			image: './src/assets/images/pokemon/normal/stakataka-walk.png',
			frames: 4
		},
		hp: 10000,
		armor: 300000,
		speed: 0.5,
		power: 15,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: false,
		invisible: false,
		gold: 100000,
		passive: passiveData.ironDefense
	},
	terrakion: {
		id: 'terrakion',
		isElite: false,
		isBoss: true,
		name: ['Terrakion', 'Terrakion', 'Terrakium', 'Terrakion', 'Terrakion', 'Terrakium', 'テラキオン', '테라키온', '代拉基翁', 'Terrakion'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/terrakion.png',
			image: './src/assets/images/pokemon/normal/terrakion-walk.png',
			frames: 4
		},
		hp: 150000,
		armor: 50000,
		speed: 1,
		power: 15,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 100000,
		passive: passiveData.justified
	},
	magearna: {
		id: 'magearna',
		isElite: false,
		isBoss: true,
		name: ['Magearna', 'Magearna', 'Magearna', 'Magearna', 'Magearna', 'Magearna', 'マギアナ', '마기아나', '瑪機雅娜', 'Magearna'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/magearna.png',
			image: './src/assets/images/pokemon/normal/magearna-idle.png',
			frames: 4
		},
		hp: 300000,
		armor: 100000,
		speed: 0.5,
		power: 15,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 100000,
		passive: passiveData.soulHeart
	},
	diancie: {
		id: 'diancie',
		isElite: false,
		isBoss: true,
		name: ['Diancie', 'Diancie', 'Diancie', 'Diancie', 'Diancie', 'Diancie', 'ディアンシー', '디안시', '蒂安希', 'Diancie'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/diancie.png',
			image: './src/assets/images/pokemon/normal/diancie-idle.png',
			frames: 5
		},
		hp: 100000,
		armor: 50000,
		speed: 1,
		power: 15,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: false,
		invisible: false,
		gold: 100000,
		passive: passiveData.clearBody
	},
	zamazenta: {
		id: 'zamazenta',
		isElite: false,
		isBoss: true,
		name: ['Zamazenta', 'Zamazenta', 'Zamazenta', 'Zamazenta', 'Zamazenta', 'Zamazenta', 'ザマゼンタ', '자마젠타', '藏玛然特', 'Zamazenta'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/zamazentaShield.png',
			image: './src/assets/images/pokemon/normal/zamazentaShield-walk.png',
			shield: './src/assets/images/pokemon/normal/zamazenta-walk.png',
			frames: 4
		},
		hp: 30000,
		armor: 350000,
		speed: 0.4,
		power: 15,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 100000,
		passive: passiveData.dauntlessShield
	},
	zacian: {
		id: 'zacian',
		isElite: false,
		isBoss: true,
		name: ['Zacian', 'Zacian', 'Zacian', 'Zacian', 'Zacian', 'Zacian', 'ザシアン', '자시안', '响', 'Zacian'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/zacianSword.png',
			image: './src/assets/images/pokemon/normal/zacianSword-walk.png',
			sword: './src/assets/images/pokemon/normal/zacian-walk.png',
			frames: 4
		},
		hp: 200000,
		armor: 110000,
		speed: 0.8,
		power: 15,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 100000,
		passive: passiveData.intrepidSword
	},
	
	latios: {
		id: 'latios',
		isElite: false,
		isBoss: true,
		name: [
			'Latios', // inglés
			'Latios', // español
			'Latios', // francés
			'Latios', // portugués
			'Latios', // italiano
			'Latios', // alemán
			'ラティオス', // japonés
			'라티오스', // coreano
			'拉帝欧斯', // chino
			'Latios' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/latios.png',
			image: './src/assets/images/pokemon/normal/latios-idle.png',
			frames: 6
		},
		hp: 250000,
		armor: 250000,
		speed: 1.2,
		power: 15,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 50000,
		passive: passiveData.eonUnion
	},
	latias: {
		id: 'latias',
		isElite: false,
		isBoss: true,
		name: [
			'Latias', // inglés
			'Latias', // español
			'Latias', // francés
			'Latias', // portugués
			'Latias', // italiano
			'Latias', // alemán
			'ラティアス', // japonés
			'라티아스', // coreano
			'拉帝亚斯', // chino
			'Latias' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/latias.png',
			image: './src/assets/images/pokemon/normal/latias-idle.png',
			frames: 6
		},
		hp: 250000,
		armor: 250000,
		speed: 1.2,
		power: 15,
		regeneration: 0, 
		canStun: true,
		canSlow: false,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 50000,
		passive: passiveData.eonUnion
	},
	virizion: {
		id: 'virizion',
		isElite: false,
		isBoss: true,
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
		sprite: {
			base:  './src/assets/images/pokemon/normal/virizion.png',
			image: './src/assets/images/pokemon/normal/virizion-idle.png',
			frames: 4
		},
		hp: 250000,
		speed: 1.2,
		power: 15,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 100000,
		passive: passiveData.justified
	},
	meloetta: {
		id: 'meloetta',
		isElite: false,
		isBoss: true,
		name: [
			'Meloetta', // inglés
			'Meloetta', // español
			'Meloetta', // francés
			'Meloetta', // portugués
			'Meloetta', // italiano
			'Meloetta', // alemán
			'メロエッタ', // japonés
			'메로엣타', // coreano
			'美洛耶塔', // chino
			'Meloetta' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/meloetta.png',
			image: './src/assets/images/pokemon/normal/meloetta-idle.png',
			frames: 4
		},
		hp: 260000,
		speed: 1,
		power: 15,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 100000,
		passive: passiveData.relicSong
	},
	cresselia: {
		id: 'cresselia',
		isElite: false,
		isBoss: true,
		name: [
			'Cresselia', // inglés
			'Cresselia', // español
			'Cresselia', // francés
			'Cresselia', // portugués
			'Cresselia', // italiano
			'Cresselia', // alemán
			'クレセリア', // japonés
			'크레세리아', // coreano
			'克雷色利亚', // chino
			'Cresselia' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/cresselia.png',
			image: './src/assets/images/pokemon/normal/cresselia-walk.png',
			frames: 9
		},
		hp: 240000,
		speed: 1,
		power: 15,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 100000,
		passive: passiveData.lunarBlessing
	},
	solgaleo: {
		id: 'solgaleo',
		isElite: false,
		isBoss: true,
		name: [
			'Solgaleo', // inglés
			'Solgaleo', // español
			'Solgaleo', // francés
			'Solgaleo', // portugués
			'Solgaleo', // italiano
			'Solgaleo', // alemán
			'ソルガレオ', // japonés
			'솔가레오', // coreano
			'索尔迦雷欧', // chino
			'Solgaleo' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/solgaleo.png',
			image: './src/assets/images/pokemon/normal/solgaleo-idle.png',
			frames: 4
		},
		hp: 100000,
		speed: 0.8,
		power: 15,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: true,
		invisible: false,
		gold: 100000,
		passive: passiveData.fullMetalBody
	},
	regidrago: {
		id: 'regidrago',
		isElite: false,
		isBoss: true,
		name: [
			'Regidrago', // inglés
			'Regidrago', // español
			'Regidrago', // francés
			'Regidrago', // portugués
			'Regidrago', // italiano
			'Regidrago', // alemán
			'レジドラゴ', // japonés
			'레지드래고', // coreano
			'雷吉铎拉戈', // chino
			'Regidrago' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/regidrago.png',
			image: './src/assets/images/pokemon/normal/regidrago-idle.png',
			frames: 8
		},
		hp: 500000,
		speed: 0.8,
		power: 15,
		regeneration: 999999, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 100000,
		passive: passiveData.dragonsMaw
	},
	regieleki: {
		id: 'regieleki',
		isElite: false,
		isBoss: true,
		name: [
			'Regieleki', // inglés
			'Regieleki', // español
			'Regieleki', // francés
			'Regieleki', // portugués
			'Regieleki', // italiano
			'Regieleki', // alemán
			'レジエレキ', // japonés
			'레지에레키', // coreano
			'雷吉艾勒奇', // chino
			'Regieleki' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/regieleki.png',
			image: './src/assets/images/pokemon/normal/regieleki-idle.png',
			frames: 8
		},
		hp: 120000,
		speed: 10,
		power: 15,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: true,
		invisible: false,
		gold: 100000,
		passive: passiveData.transistor
	},
	reshiram: {
		id: 'reshiram',
		isElite: false,
		isBoss: true,
		name: [
			'Reshiram', // inglés
			'Reshiram', // español
			'Reshiram', // francés
			'Reshiram', // portugués
			'Reshiram', // italiano
			'Reshiram', // alemán
			'レシラム', // japonés
			'레시라무', // coreano
			'莱希拉姆', // chino
			'Reshiram' // polaco
		],
		sprite: {
			base:  './src/assets/images/pokemon/normal/reshiram.png',
			image: './src/assets/images/pokemon/normal/reshiram-idle.png',
			frames: 5
		},
		hp: 300000,
		speed: 0.8,
		power: 15,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: false,
		gold: 100000,
		passive: passiveData.turboblaze
	},
	mew: {
		id: 'mew',
		isElite: false,
		isBoss: true,
		name: ['Mew','Mew','Mew','Mew','Mew','Mew','ミュウ','뮤','夢幻','Mew'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/mew.png',
			image: './src/assets/images/pokemon/normal/mew-walk.png',
			frames: 6
		},
		hp: 10000000,
		speed: 1,
		power: 15,
		regeneration: 0, 
		canStun: false,
		canSlow: false,
		canBurn: false,
		canPoison: false,
		invisible: true,
		gold: 10000,
		passive: passiveData.mirage
	},
	manaphy: {
		id: 'manaphy',
		isElite: false,
		isBoss: true,
		name: ['Manaphy', 'Manaphy', 'Manaphy', 'Manaphy', 'Manaphy', 'Manaphy', 'マナフィ', '마나피', '玛纳霏', 'Manaphy'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/manaphy.png',
			image: './src/assets/images/pokemon/normal/manaphy-walk.png',
			frames: 8
		},
		hp: 55000,
		speed: 1,
		power: 15,
		regeneration: 1000, 
		canStun: false,
		canSlow: false,
		canBurn: false,
		canPoison: false,
		invisible: false,
		gold: 5000,
	},
	marshadow: {
		id: 'marshadow',
		isElite: false,
		isBoss: true,
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
		sprite: {
			base:  './src/assets/images/pokemon/normal/marshadow.png',
			image: './src/assets/images/pokemon/normal/marshadow-walk.png',
			frames: 4
		},
		hp: 200000,
		speed: 1.3,
		power: 15,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: true,
		gold: 5000,
		passive: passiveData.spectralThief
	},
	victini: {
		id: 'victini',
		isElite: false,
		isBoss: true,
		name: ['Victini','Victini','Victini','Victini','Victini','Victini','ビクティニ','비크티니','比克提尼','Victini'],
		sprite: {
			base:  './src/assets/images/pokemon/normal/victini.png',
			image: './src/assets/images/pokemon/normal/victini-walk.png',
			frames: 4
		},
		hp: 777777,
		speed: 7.7,
		power: 15,
		regeneration: 0, 
		canStun: true,
		canSlow: true,
		canBurn: false,
		canPoison: false,
		invisible: false,
		gold: 5000,
		passive: passiveData.vCrate
	},
	calyrex: {
		id: 'calyrex',
		isElite: false,
		isBoss: true,
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
		sprite: {
			base:  './src/assets/images/pokemon/normal/calyrex.png',
			image: './src/assets/images/pokemon/normal/calyrex-idle.png',
			frames: 8
		},
		hp: 5000000,
		speed: 1,
		power: 15,
		regeneration: 0, 
		canStun: false,
		canSlow: false,
		canBurn: false,
		canPoison: false,
		invisible: false,
		gold: 10000,
		passive: passiveData.asOne
	},
	spectrier: {
		id: 'spectrier',
		isElite: false,
		isBoss: true,
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
		sprite: {
			base:  './src/assets/images/pokemon/normal/spectrier.png',
			image: './src/assets/images/pokemon/normal/spectrier-idle.png',
			frames: 4
		},
		hp: 50000000,
		speed: 1.5,
		power: 3,
		regeneration: 0, 
		canStun: false,
		canSlow: true,
		canBurn: true,
		canPoison: false,
		invisible: true,
		gold: 50000,
		passive: passiveData.grimNeigh
	},
}	

