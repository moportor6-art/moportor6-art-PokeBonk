export const abilityData = {
	ambusher: {
		id: 'ambusher',
		name: ['Ambusher', 'Acechador', 'Guetteur', 'Emboscador', 'Agguato', 'Lauerer', '待ち伏せ者', '매복꾼', '伏擊者', "Zamachowiec"],
		description: [
			`Increases [POWER]power[/POWER] by 100% if located on [GRASS]grass[/GRASS].`, // inglés
			`Aumenta el [POWER]poder[/POWER] un 100% si está situado sobre [GRASS]hierba[/GRASS].`, // español
			`Augmente la [POWER]puissance[/POWER] de 100 % s'il est placé sur de l'[GRASS]herbe[/GRASS].`, // francés
			`Aumenta o [POWER]poder[/POWER] em 100% se estiver na [GRASS]grama[/GRASS].`, // portugués
			`Aumenta la [POWER]potenza[/POWER] del 100% se si trova sull'[GRASS]erba[/GRASS].`, // italiano
			`Erhöht die [POWER]Kraft[/POWER] um 100 %, wenn es auf [GRASS]Gras[/GRASS] steht.`, // alemán
			`[GRASS]草むら[/GRASS]にいると、[POWER]威力[/POWER]が100%上がる。`, // japonés
			`[GRASS]풀[/GRASS] 위에 배치하면 [POWER]위력[/POWER]이 100% 증가합니다.`, // coreano
			`位于[GRASS]草地[/GRASS]时，[POWER]威力[/POWER]提高100%。`, // chino
			`Zwiększa [POWER]moc[/POWER] o 100%, gdy znajduje się na [GRASS]trawie[/GRASS].` // polaco
		]
	},
	flowerTrick: {
	    id: 'flowerTrick',
	    name: [
	        'Flower Trick',
	        'Truco Floral', 
	        'Magie Florale',
	        'Truque Floral',
	        'Prestigiafiore',
	        'Blumtrick',
	        'トリックフラワー',
	        '트릭플라워',
	        '千变万花',
	        'Kwiecisty Triki'
	    ],
	    description: [
		    `After a [CRITICAL]critical hit[/CRITICAL], it immediately attacks again. This unit's [CRITICAL]critical hit[/CRITICAL] chance is capped at 95%.`, // inglés
			`Después de un [CRITICAL]golpe crítico[/CRITICAL], ataca de nuevo inmediatamente. La probabilidad de [CRITICAL]golpe crítico[/CRITICAL] de esta unidad está limitada al 95%.`, // español
			`Après un [CRITICAL]coup critique[/CRITICAL], il attaque immédiatement à nouveau. Les chances de [CRITICAL]coup critique[/CRITICAL] de cette unité sont limitées à 95 %.`, // francés
			`Após um [CRITICAL]golpe crítico[/CRITICAL], ataca novamente imediatamente. A chance de [CRITICAL]golpe crítico[/CRITICAL] desta unidade é limitada a 95%.`, // portugués
			`Dopo un [CRITICAL]colpo critico[/CRITICAL], attacca nuovamente all'istante. La probabilità di [CRITICAL]colpo critico[/CRITICAL] di questa unità è limitata al 95%.`, // italiano
			`Nach einem [CRITICAL]Volltreffer[/CRITICAL] greift es sofort erneut an. Die [CRITICAL]Volltreffer[/CRITICAL]-Chance dieser Einheit ist auf 95 % begrenzt.`, // alemán
			`[CRITICAL]急所に当たった[/CRITICAL]後、すぐにもう一度攻撃する。このユニットの[CRITICAL]急所率[/CRITICAL]は95%が上限。`, // japonés
			`[CRITICAL]급소에 맞힌[/CRITICAL] 후 즉시 다시 공격합니다. 이 유닛의 [CRITICAL]급소율[/CRITICAL]은 95%로 제한됩니다.`, // coreano
			`[CRITICAL]命中要害[/CRITICAL]后，会立即再次攻击。该单位的[CRITICAL]暴击率[/CRITICAL]上限为95%。`, // chino
			`Po [CRITICAL]trafieniu krytycznym[/CRITICAL] natychmiast atakuje ponownie. Szansa na [CRITICAL]trafienie krytyczne[/CRITICAL] tej jednostki jest ograniczona do 95%.` // polaco
		]
	},
	swimmer: {
		id: 'swimmer',
		name: ['Swift Swim', 'Nado Rápido', 'Nage Rapide', 'Nado Rápido', 'Nuoto Veloce', 'Wassertempo', 'すいすい', '쾌속 수영', '悠游自如', "Pływak"],
		description: [
			`Reduces [SPEED]recharge time[/SPEED] by 50% if located on [WATER]water[/WATER].`, // inglés
			`Reduce un 50% el [SPEED]tiempo de recarga[/SPEED] si está situado sobre [WATER]agua[/WATER].`, // español
			`Réduit le [SPEED]temps de recharge[/SPEED] de 50 % s'il est placé sur l'[WATER]eau[/WATER].`, // francés
			`Reduz o [SPEED]tempo de recarga[/SPEED] em 50% se estiver na [WATER]água[/WATER].`, // portugués
			`Riduce il [SPEED]tempo di ricarica[/SPEED] del 50% se si trova sull'[WATER]acqua[/WATER].`, // italiano
			`Reduziert die [SPEED]Aufladezeit[/SPEED] um 50 %, wenn es sich auf [WATER]Wasser[/WATER] befindet.`, // alemán
			`[WATER]水[/WATER]にいる場合、[SPEED]再使用時間[/SPEED]が50%短くなる。`, // japonés
			`[WATER]물[/WATER] 위에 배치하면 [SPEED]재사용 대기 시간[/SPEED]이 50% 감소합니다.`, // coreano
			`位于[WATER]水[/WATER]上时，[SPEED]冷却时间[/SPEED]缩短50%。`, // chino
			`Skraca [SPEED]czas odnowienia[/SPEED] o 50%, gdy znajduje się na [WATER]wodzie[/WATER].` // polaco
		]
	},
	vigilant: {
		id: 'vigilant',
		name: ['Vigilant', 'Vigilante', 'Vigilant', 'Vigilante', 'Vigile', 'Wachsamkeit', 'ヴィジラント', '경계병', `警戒者`, "Czujny"],
		description: [
		  	`Increases [RANGE]range[/RANGE] by 100% if located on [MOUNTAIN]mountain[/MOUNTAIN].`, // inglés
			`Aumenta el [RANGE]rango[/RANGE] un 100% si está situado en una [MOUNTAIN]montaña[/MOUNTAIN].`, // español
			`Augmente la [RANGE]portée[/RANGE] de 100 % s'il est placé sur une [MOUNTAIN]montagne[/MOUNTAIN].`, // francés
			`Aumenta o [RANGE]alcance[/RANGE] em 100% se estiver em uma [MOUNTAIN]montanha[/MOUNTAIN].`, // portugués
			`Aumenta la [RANGE]portata[/RANGE] del 100% se si trova su una [MOUNTAIN]montagna[/MOUNTAIN].`, // italiano
			`Erhöht die [RANGE]Reichweite[/RANGE] um 100 %, wenn es auf einem [MOUNTAIN]Berg[/MOUNTAIN] steht.`, // alemán
			`[MOUNTAIN]山[/MOUNTAIN]にいると、[RANGE]射程[/RANGE]が100%上がる。`, // japonés
			`[MOUNTAIN]산[/MOUNTAIN]에 배치하면 [RANGE]사거리[/RANGE]가 100% 증가합니다.`, // coreano
			`位于[MOUNTAIN]山地[/MOUNTAIN]时，[RANGE]攻击范围[/RANGE]提高100%。`, // chino
			`Zwiększa [RANGE]zasięg[/RANGE] o 100%, gdy znajduje się na [MOUNTAIN]górze[/MOUNTAIN].` // polaco
		]
	},
	vigilantFrisk: {
		id: 'vigilantFrisk',
		name: [
			'Vigilant-Frisk', 
			'Cacheo-Vigilante', 
			'Fouille-Vigilant', 
			'Revistar-Vigilante', 
			'Perquisizione-Wachsamkeit', 
			'Filzen-Wachsamkeit', 
			'ヴィジラント-フリスク', 
			'경계병-수색', 
			'察觉-警戒者', 
			'Rewizja-Czujny'
		],
		description: [
			`Increases [RANGE]range[/RANGE] by 100% if located on [MOUNTAIN]mountain[/MOUNTAIN]. Can hit [ENEMY]invisible enemies[/ENEMY].`, // inglés
			`Aumenta el [RANGE]rango[/RANGE] un 100% si está situado en una [MOUNTAIN]montaña[/MOUNTAIN]. Puede golpear a [ENEMY]enemigos invisibles[/ENEMY].`, // español
			`Augmente la [RANGE]portée[/RANGE] de 100 % s'il est placé sur une [MOUNTAIN]montagne[/MOUNTAIN]. Peut toucher les [ENEMY]ennemis invisibles[/ENEMY].`, // francés
			`Aumenta o [RANGE]alcance[/RANGE] em 100% se estiver em uma [MOUNTAIN]montanha[/MOUNTAIN]. Pode atingir [ENEMY]inimigos invisíveis[/ENEMY].`, // portugués
			`Aumenta la [RANGE]portata[/RANGE] del 100% se si trova su una [MOUNTAIN]montagna[/MOUNTAIN]. Può colpire i [ENEMY]nemici invisibili[/ENEMY].`, // italiano
			`Erhöht die [RANGE]Reichweite[/RANGE] um 100 %, wenn es auf einem [MOUNTAIN]Berg[/MOUNTAIN] steht. Kann [ENEMY]unsichtbare Gegner[/ENEMY] treffen.`, // alemán
			`[MOUNTAIN]山[/MOUNTAIN]にいると、[RANGE]射程[/RANGE]が100%上がる。[ENEMY]見えない敵[/ENEMY]にも攻撃できる。`, // japonés
			`[MOUNTAIN]산[/MOUNTAIN]에 배치하면 [RANGE]사거리[/RANGE]가 100% 증가합니다. [ENEMY]투명한 적[/ENEMY]을 공격할 수 있습니다.`, // coreano
			`位于[MOUNTAIN]山地[/MOUNTAIN]时，[RANGE]攻击范围[/RANGE]提高100%。可以攻击[ENEMY]隐形敌人[/ENEMY]。`, // chino
			`Zwiększa [RANGE]zasięg[/RANGE] o 100%, gdy znajduje się na [MOUNTAIN]górze[/MOUNTAIN]. Może trafiać [ENEMY]niewidzialnych wrogów[/ENEMY].` // polaco
		]
	},
	burn: {
		id: 'burn',
		name: ['Burn', 'Quemadura', 'Brulure', 'Queimadura', 'Bruciatura', 'Verbrennung', 'やけど', '화상', '灼伤', 'Oparzenie'],
		description: [
		  	`Attacks inflict [BURN]burn[/BURN].`, // inglés
			`Los ataques infligen [BURN]quemadura[/BURN].`, // español
			`Les attaques infligent [BURN]brûlure[/BURN].`, // francés
			`Os ataques causam [BURN]queimadura[/BURN].`, // portugués
			`Gli attacchi infliggono [BURN]bruciatura[/BURN].`, // italiano
			`Die Angriffe verursachen [BURN]Verbrennung[/BURN].`, // alemán
			`攻撃で[BURN]やけど[/BURN]を負わせる。`, // japonés
			`공격이 [BURN]화상[/BURN]을 입힙니다.`, // coreano
			`攻击会造成[BURN]灼伤[/BURN]。`, // chino
			`Ataki wywołują [BURN]podpalenie[/BURN].` // polaco
		]
	},
	burnNerf: {
		id: 'burnNerf',
		name: [
		  	'Drought',       // Inglés
			'Sequía',        // Español
			'Sécheresse',    // Francés
			'Seca',          // Portugués
			'Siccità',       // Italiano
			'Dürre',         // Alemán
			'ひでり',          // Japonés (Hideri)
			'가뭄',            // Coreano (Gamum)
			'乾旱',            // Chino tradicional
			'Susza'          // Polaco
		],
		description: [
			`Attacks have a 50% chance to inflict [BURN]burn[/BURN]. Applies [SUN]Harsh Sunlight[/SUN] weather.`, // inglés
			`Los ataques tienen un 50% de probabilidad de causar [BURN]quemaduras[/BURN]. Activa el clima [SUN]Sol Abrasador[/SUN].`, // español
			`Les attaques ont 50 % de chances d'infliger des [BURN]brûlures[/BURN]. Déclenche la météo [SUN]Soleil Intense[/SUN].`, // francés
			`Os ataques têm 50% de chance de causar [BURN]queimaduras[/BURN]. Ativa o clima [SUN]Sol Intenso[/SUN].`, // portugués
			`Gli attacchi hanno il 50% di probabilità di infliggere [BURN]scottature[/BURN]. Attiva il meteo [SUN]Sole Intenso[/SUN].`, // italiano
			`Angriffe haben eine Chance von 50 %, [BURN]Verbrennungen[/BURN] zu verursachen. Aktiviert das Wetter [SUN]greller Sonnenschein[/SUN].`, // alemán
			`攻撃時、50%の確率で[BURN]やけど[/BURN]を負わせる。[SUN]強い日差し[/SUN]の天候を発生させる。`, // japonés
			`공격 시 50% 확률로 [BURN]화상[/BURN]을 입힌다. [SUN]쾌청[/SUN] 날씨를 발생시킨다.`, // coreano
			`攻击有50%的概率造成[BURN]灼伤[/BURN]。触发[SUN]大晴天[/SUN]天气。`, // chino
			`Ataki mają 50% szans na nałożenie [BURN]podpalenia[/BURN]. Wywołuje pogodę [SUN]ostrego światła słonecznego[/SUN].` // polaco
		]
	},
	burnDoubleShot: {
	    id: 'burnDoubleShot',
	    name: [
	        'Burn DoubleShot',
	        'Doble Quemadura',
	        'Double Brûlure',
	        'Dupla Queimadura',
	        'Doppia Bruciatura',
	        'Brand-Doppelschuss',
	        'やけどダブルショット',
	        '화상 더블샷',
	        '灼烧双重射击',
	        'Podwójny strzał oparzenia'
	    ],
	   	description: [
			`Shoots [PROJECTILE]projectiles[/PROJECTILE] at up to 2 targets at once and inflicts [BURN]burns[/BURN].`, // inglés
			`Dispara [PROJECTILE]proyectiles[/PROJECTILE] a un máximo de 2 objetivos a la vez e inflige [BURN]quemaduras[/BURN].`, // español
			`Tire des [PROJECTILE]projectiles[/PROJECTILE] sur jusqu'à 2 cibles à la fois et inflige des [BURN]brûlures[/BURN].`, // francés
			`Dispara [PROJECTILE]projéteis[/PROJECTILE] contra até 2 alvos ao mesmo tempo e causa [BURN]queimaduras[/BURN].`, // portugués
			`Spara [PROJECTILE]proiettili[/PROJECTILE] contro un massimo di 2 bersagli alla volta e infligge [BURN]bruciature[/BURN].`, // italiano
			`Schießt [PROJECTILE]Projektile[/PROJECTILE] auf bis zu 2 Ziele gleichzeitig und fügt ihnen [BURN]Verbrennungen[/BURN] zu.`, // alemán
			`最大2体の対象に同時に[PROJECTILE]投射物[/PROJECTILE]を発射し、[BURN]やけど[/BURN]を負わせる。`, // japonés
			`최대 2명의 대상에게 동시에 [PROJECTILE]투사체[/PROJECTILE]를 발사하고 [BURN]화상[/BURN]을 입힙니다.`, // coreano
			`同时向最多2个目标发射[PROJECTILE]投射物[/PROJECTILE]，并使其[BURN]灼伤[/BURN]。`, // chino
			`Wystrzeliwuje [PROJECTILE]pociski[/PROJECTILE] w maksymalnie 2 cele jednocześnie i powoduje [BURN]podpalenie[/BURN].` // polaco
		]
	},
	poison: {
		id: 'poison',
		name: ['Poison', 'Veneno', 'Poison', 'Veneno', 'Veleno', 'Gift', 'どく', '독', '中毒', "Trucizna"],
		description: [
			`Attacks apply 1 stack of [POISON]poison[/POISON].`, // inglés
			`Los ataques aplican 1 carga de [POISON]veneno[/POISON].`, // español
			`Les attaques appliquent 1 cumul de [POISON]poison[/POISON].`, // francés
			`Os ataques aplicam 1 acúmulo de [POISON]veneno[/POISON].`, // portugués
			`Gli attacchi applicano 1 accumulo di [POISON]veleno[/POISON].`, // italiano
			`Angriffe verursachen 1 Stapel [POISON]Gift[/POISON].`, // alemán
			`攻撃で[POISON]どく[/POISON]を1回蓄積させる。`, // japonés
			`공격으로 [POISON]독[/POISON]을 1중첩 부여합니다.`, // coreano
			`攻击会施加1层[POISON]中毒[/POISON]。`, // chino
			`Ataki nakładają 1 kumulację [POISON]Trucizny[/POISON].` // polaco
		]
	},
	toxic: {
		id: 'toxic',
		name: [
			`Toxic`, // inglés
			`Tóxico`, // español
			`Toxik`, // francés
			`Tóxico`, // portugués
			`Tossina`, // italiano
			`Toxin`, // alemán
			`どくどく`, // japonés
			`맹독`, // coreano
			`剧毒`, // chino
			`Toxic` // polaco
		],
		description: [
			`Attacks apply 2 stack of [POISON]poison[/POISON].`, // inglés
			`Los ataques aplican 2 carga de [POISON]veneno[/POISON].`, // español
			`Les attaques appliquent 2 cumul de [POISON]poison[/POISON].`, // francés
			`Os ataques aplicam 2 acúmulo de [POISON]veneno[/POISON].`, // portugués
			`Gli attacchi applicano 2 accumulo di [POISON]veleno[/POISON].`, // italiano
			`Angriffe verursachen 2 Stapel [POISON]Gift[/POISON].`, // alemán
			`攻撃で[POISON]どく[/POISON]を2回蓄積させる。`, // japonés
			`공격으로 [POISON]독[/POISON]을 2중첩 부여합니다.`, // coreano
			`攻击会施加2层[POISON]中毒[/POISON]。`, // chino
			`Ataki nakładają 2 kumulację [POISON]Trucizny[/POISON].` // polaco
		]
	},
	frisk: {
		id: 'frisk',
		name: ['Frisk', 'Cacheo', 'Fouille', 'Revistar', 'Perquisizione', 'Filzen', 'フリスク', '수색', '察觉', 'Rewizja'],
		description: [
			`Can hit [ENEMY]invisible enemies[/ENEMY].`, // inglés
			`Puede golpear a [ENEMY]enemigos invisibles[/ENEMY].`, // español
			`Peut toucher les [ENEMY]ennemis invisibles[/ENEMY].`, // francés
			`Pode atingir [ENEMY]inimigos invisíveis[/ENEMY].`, // portugués
			`Può colpire i [ENEMY]nemici invisibili[/ENEMY].`, // italiano
			`Kann [ENEMY]unsichtbare Gegner[/ENEMY] treffen.`, // alemán
			`[ENEMY]見えない敵[/ENEMY]にも攻撃できる。`, // japonés
			`[ENEMY]투명한 적[/ENEMY]을 공격할 수 있습니다.`, // coreano
			`可以攻击[ENEMY]隐形敌人[/ENEMY]。`, // chino
			`Może trafiać [ENEMY]niewidzialnych wrogów[/ENEMY].` // polaco
		]
	},
	slow: {
		id: 'slow',
		name: ['Slow', 'Ralentizar', 'Lenteur', 'Retardar', 'Rallentare', 'Verlangsamen', 'スロウ', '느리게 하기', '减速', 'Spowolnienie'],
		description: [
			`Attacks cause [SLOW]slow[/SLOW] for 2 seconds.`, // inglés
			`Los ataques causan [SLOW]ralentización[/SLOW] durante 2 segundos.`, // español
			`Les attaques provoquent un [SLOW]ralentissement[/SLOW] pendant 2 secondes.`, // francés
			`Os ataques causam [SLOW]lentidão[/SLOW] por 2 segundos.`, // portugués
			`Gli attacchi causano [SLOW]rallentamento[/SLOW] per 2 secondi.`, // italiano
			`Angriffe verursachen 2 Sekunden lang [SLOW]Verlangsamung[/SLOW].`, // alemán
			`攻撃で対象を2秒間[SLOW]遅く[/SLOW]する。`, // japonés
			`공격으로 대상을 2초 동안 [SLOW]느려지게[/SLOW] 합니다.`, // coreano
			`攻击会使目标[SLOW]减速[/SLOW]2秒。`, // chino
			`Ataki powodują [SLOW]spowolnienie[/SLOW] na 2 sekundy.` // polaco
		]
	},
	stunMono: {
		id: 'stunMono',
		name: ['Stun', 'Aturdir', 'Étourdissement', 'Atordoar', 'Stordire', 'Betäuben', 'スタン', '기절', '眩暈', 'Ogłuszenie'],
		description: [
		    `Attacks have a 30% chance to [STUN]stun[/STUN] for 2 seconds.`, // inglés
			`Los ataques tienen un 30% de probabilidad de [STUN]aturdir[/STUN] durante 2 segundos.`, // español
			`Les attaques ont 30 % de chances d'[STUN]étourdir[/STUN] pendant 2 secondes.`, // francés
			`Os ataques têm 30% de chance de [STUN]atordoar[/STUN] por 2 segundos.`, // portugués
			`Gli attacchi hanno una probabilità del 30% di [STUN]stordire[/STUN] per 2 secondi.`, // italiano
			`Angriffe haben eine Chance von 30 %, das Ziel 2 Sekunden lang [STUN]zu betäuben[/STUN].`, // alemán
			`攻撃で30%の確率で2秒間[STUN]ひるみ[/STUN]を与える。`, // japonés
			`공격 시 30% 확률로 2초 동안 [STUN]기절[/STUN]시킵니다.`, // coreano
			`攻击有30%的概率使目标[STUN]眩晕[/STUN]2秒。`, // chino
			`Ataki mają 30% szans na [STUN]ogłuszenie[/STUN] na 2 sekundy.` // polaco
		]
	},
	stunMonoNerf: {
		id: 'stunMonoNerf',
		name: ['Stun', 'Aturdir', 'Étourdissement', 'Atordoar', 'Stordire', 'Betäuben', 'スタン', '기절', '眩暈', 'Ogłuszenie'],
		description: [
		    `Attacks have a 5% chance to [STUN]stun[/STUN] for 1.5 seconds.`, // inglés
			`Los ataques tienen un 5% de probabilidad de [STUN]aturdir[/STUN] durante 1,5 segundos.`, // español
			`Les attaques ont 5 % de chances d'[STUN]étourdir[/STUN] pendant 1,5 secondes.`, // francés
			`Os ataques têm 5% de chance de [STUN]atordoar[/STUN] por 1,5 segundos.`, // portugués
			`Gli attacchi hanno una probabilità del 30% di [STUN]stordire[/STUN] per 1,5 secondi.`, // italiano
			`Angriffe haben eine Chance von 5 %, das Ziel 1,5 Sekunden lang [STUN]zu betäuben[/STUN].`, // alemán
			`攻撃で5%の確率で1.5秒間[STUN]ひるみ[/STUN]を与える。`, // japonés
			`공격 시 5% 확률로 1.5초 동안 [STUN]기절[/STUN]시킵니다.`, // coreano
			`攻击有5%的概率使目标[STUN]眩晕[/STUN]1.5秒。`, // chino
			`Ataki mają 5% szans na [STUN]ogłuszenie[/STUN] na 1,5 sekundy.` // polaco
		]
	},
	stunArea: {
		id: 'stunArea',
		name: ['Stun', 'Aturdir', 'Étourdissement', 'Atordoar', 'Stordire', 'Betäuben', 'スタン', '기절', '眩暈', 'Ogłuszenie'],
		description: [
		 	`Attacks have a 30% chance to [STUN]stun[/STUN] for 1.5 seconds.`, // inglés
			`Los ataques tienen un 30% de probabilidad de [STUN]aturdir[/STUN] durante 1,5 segundos.`, // español
			`Les attaques ont 30 % de chances d'[STUN]étourdir[/STUN] pendant 1,5 secondes.`, // francés
			`Os ataques têm 30% de chance de [STUN]atordoar[/STUN] por 1,5 segundos.`, // portugués
			`Gli attacchi hanno una probabilità del 30% di [STUN]stordire[/STUN] per 1,5 secondi.`, // italiano
			`Angriffe haben eine Chance von 30 %, das Ziel 1,5 Sekunden lang [STUN]zu betäuben[/STUN].`, // alemán
			`攻撃で30%の確率で1.5秒間[STUN]ひるみ[/STUN]を与える。`, // japonés
			`공격 시 30% 확률로 1.5초 동안 [STUN]기절[/STUN]시킵니다.`, // coreano
			`攻击有30%的概率使目标[STUN]眩晕[/STUN]1.5秒。`, // chino
			`Ataki mają 30% szans na [STUN]ogłuszenie[/STUN] na 1,5 sekundy.` // polaco
		]
	},	
	armorBreak: {
		id: 'armorBreak',
		name: [
		  	'Armor Break',
		  	'Rompearmadura',
		  	'Brise-Armure',
		  	'Quebra-Armadura',
		  	'Rompicolpo',
		  	'Rüstungsbrecher',
		  	'アーマーブレイク',
		  	'아머 브레이크',
		  	'破甲',
			'Przebicie Pancerza'
		],
		description: [
			`Causes double damage to [ARMOR]armored[/ARMOR] [ENEMY]enemies[/ENEMY].`, // inglés
			`Inflige el doble de daño a los [ENEMY]enemigos[/ENEMY] con [ARMOR]armadura[/ARMOR].`, // español
			`Inflige deux fois plus de dégâts aux [ENEMY]ennemis[/ENEMY] [ARMOR]blindés[/ARMOR].`, // francés
			`Causa o dobro de dano aos [ENEMY]inimigos[/ENEMY] [ARMOR]blindados[/ARMOR].`, // portugués
			`Infligge il doppio dei danni agli [ENEMY]nemici[/ENEMY] [ARMOR]corazzati[/ARMOR].`, // italiano
			`Verursacht doppelten Schaden bei [ARMOR]gepanzerten[/ARMOR] [ENEMY]Gegnern[/ENEMY].`, // alemán
			`[ARMOR]アーマー[/ARMOR]を持つ[ENEMY]敵[/ENEMY]には2倍のダメージを与える。`, // japonés
			`[ARMOR]방어구[/ARMOR]를 가진 [ENEMY]적[/ENEMY]에게 2배의 피해를 줍니다.`, // coreano
			`对具有[ARMOR]护甲[/ARMOR]的[ENEMY]敌人[/ENEMY]造成双倍伤害。`, // chino
			`Zadaje podwójne obrażenia [ARMOR]opancerzonym[/ARMOR] [ENEMY]wrogom[/ENEMY].` // polaco
		]
	},
	ninja: {
		id: 'ninja',
		name: [
			'Ricochet', // inglés
			'Ricochet', // español
			'Ricochet', // francés
			'Ricochete', // portugués
			'Rimbalzo', // italiano
			'Abpraller', // alemán
			'リコシェ', // japonés
			'리코셰', // coreano
			'弹射', // chino
			'Rykoszet' // polaco
		],
		description: [
			`Attacks [RICOCHET]ricochet[/RICOCHET] between [ENEMY]enemies[/ENEMY].`, // inglés
			`Los ataques [RICOCHET]rebotan[/RICOCHET] entre [ENEMY]enemigos[/ENEMY].`, // español
			`Les attaques [RICOCHET]ricochent[/RICOCHET] entre les [ENEMY]ennemis[/ENEMY].`, // francés
			`Os ataques [RICOCHET]ricocheteiam[/RICOCHET] entre os [ENEMY]inimigos[/ENEMY].`, // portugués
			`Gli attacchi [RICOCHET]rimbalzano[/RICOCHET] tra i [ENEMY]nemici[/ENEMY].`, // italiano
			`Angriffe [RICOCHET]prallen[/RICOCHET] zwischen [ENEMY]Gegnern[/ENEMY] ab.`, // alemán
			`攻撃が[ENEMY]敵[/ENEMY]の間を[RICOCHET]跳ね返る[/RICOCHET]。`, // japonés
			`공격이 [ENEMY]적[/ENEMY] 사이에서 [RICOCHET]튕겨 나갑니다[/RICOCHET].`, // coreano
			`攻击会在[ENEMY]敌人[/ENEMY]之间[RICOCHET]弹射[/RICOCHET]。`, // chino
			`Ataki [RICOCHET]rykoszetują[/RICOCHET] między [ENEMY]wrogami[/ENEMY].` // polaco
		]
	},
	tripleAxel: {
		id: 'tripleAxel',
		name: [
			`Triple Axel`, // inglés
			`Triple Axel`, // español
			`Triple Axel`, // francés
			`Pinote Triplo`, // portugués
			`Triplo Axel`, // italiano
			`Dreifach-Axel`, // alemán
			`トリプルアクセル`, // japonés
			`트리플악셀`, // coreano
			`三旋击`, // chino
			`Potrójny Axel` // polaco
		],
		description: [
			`Attacks [RICOCHET]ricochet[/RICOCHET] between [ENEMY]enemies[/ENEMY]. It does not suffer the [RICOCHET]ricochet[/RICOCHET] damage penalty, instead, each [RICOCHET]ricochet[/RICOCHET] increases its damage by 50%.`, // inglés
			`Los ataques [RICOCHET]rebotan[/RICOCHET] entre [ENEMY]enemigos[/ENEMY]. No sufre la disminución de daño del [RICOCHET]rebote[/RICOCHET], en su lugar, cada [RICOCHET]rebote[/RICOCHET] aumenta su daño un 50%.`, // español
			`Les attaques [RICOCHET]ricochent[/RICOCHET] entre les [ENEMY]ennemis[/ENEMY]. Elles ne subissent pas la pénalité de dégâts du [RICOCHET]ricochet[/RICOCHET] , au contraire, chaque [RICOCHET]ricochet[/RICOCHET] augmente leurs dégâts de 50 %.`, // francés
			`Os ataques [RICOCHET]ricocheteiam[/RICOCHET] entre os [ENEMY]inimigos[/ENEMY]. Não sofrem a penalização de dano do [RICOCHET]ricochete[/RICOCHET], em vez disso, cada [RICOCHET]ricochete[/RICOCHET] aumenta o seu dano em 50%.`, // portugués
			`Gli attacchi [RICOCHET]rimbalzano[/RICOCHET] tra i [ENEMY]nemici[/ENEMY]. Non subiscono la penalità ai danni del [RICOCHET]rimbalzo[/RICOCHET], al contrario, ogni [RICOCHET]rimbalzo[/RICOCHET] aumenta i loro danni del 50%.`, // italiano
			`Angriffe [RICOCHET]springen[/RICOCHET] zwischen [ENEMY]Gegnern[/ENEMY] hin und her. Sie erleiden keinen Schadensabzug durch [RICOCHET]Abprallen[/RICOCHET], stattdessen erhöht jeder [RICOCHET]Abpraller[/RICOCHET] ihren Schaden um 50 %.`, // alemán
			`攻撃が[ENEMY]敵[/ENEMY]の間を[RICOCHET]跳弾[/RICOCHET]する。[RICOCHET]跳弾[/RICOCHET]によるダメージ減少を受けず、代わりに跳弾するたびにダメージが50%増加する。`, // japonés
			`공격이 [ENEMY]적[/ENEMY] 사이를 [RICOCHET]도탄[/RICOCHET]한다. [RICOCHET]도탄[/RICOCHET]으로 인한 피해 감소가 적용되지 않으며, 대신 도탄할 때마다 피해가 50% 증가한다.`, // coreano
			`攻击会在[ENEMY]敌人[/ENEMY]之间[RICOCHET]弹射[/RICOCHET]。不会受到[RICOCHET]弹射[/RICOCHET]造成的伤害衰减；相反，每次[RICOCHET]弹射[/RICOCHET]都会使伤害提高50%。`, // chino
			`Ataki [RICOCHET]rykoszetują[/RICOCHET] między [ENEMY]wrogami[/ENEMY]. Nie otrzymują kary do obrażeń za [RICOCHET]rykoszet[/RICOCHET], zamiast tego każdy [RICOCHET]rykoszet[/RICOCHET] zwiększa zadawane obrażenia o 50%.` // polaco
		]
	},
	heal: {
		id: 'heal',
		name: ['Heal', 'Curación', 'Soin', 'Cura', 'Cura', 'Heilen', 'ヒール', '회복', '治疗', 'Leczenie'],
		description: [
			`Attacks have a 5% chance to restore 1 [HEART]heart[/HEART]. Halves the chance with each use (3 uses per wave).`, // inglés
			`Los ataques tienen un 5% de probabilidad de restaurar 1 [HEART]corazón[/HEART]. La probabilidad se reduce a la mitad con cada uso (3 usos por oleada).`, // español
			`Les attaques ont 5 % de chances de restaurer 1 [HEART]cœur[/HEART]. Les chances sont réduites de moitié à chaque utilisation (3 utilisations par vague).`, // francés
			`Os ataques têm 5% de chance de restaurar 1 [HEART]coração[/HEART]. A chance é reduzida pela metade a cada uso (3 usos por onda).`, // portugués
			`Gli attacchi hanno una probabilità del 5% di ripristinare 1 [HEART]cuore[/HEART]. La probabilità si dimezza a ogni utilizzo (3 utilizzi per ondata).`, // italiano
			`Angriffe haben eine Chance von 5 %, 1 [HEART]Herz[/HEART] wiederherzustellen. Die Chance halbiert sich bei jeder Nutzung (3 Nutzungen pro Welle).`, // alemán
			`攻撃で5%の確率で[HEART]ハート[/HEART]を1つ回復する。使用するたびに確率が半分になる（1ウェーブにつき3回使用可能）。`, // japonés
			`공격 시 5% 확률로 [HEART]하트[/HEART] 1개를 회복합니다. 사용할 때마다 확률이 절반으로 감소합니다 (웨이브당 3회 사용).`, // coreano
			`攻击有5%的概率恢复1个[HEART]心[/HEART]。每次使用后概率减半（每波可使用3次）。`, // chino
			`Ataki mają 5% szans na przywrócenie 1 [HEART]serca[/HEART]. Szansa zmniejsza się o połowę przy każdym użyciu (3 użycia na falę).` // polaco
		]
	},
	greed: {
		id: 'greed',
		name: ['Greed', 'Codicia', 'Avidité', 'Ganância', 'Avidità', 'Gier', 'グリード', '탐욕', '貪婪', 'Chciwość'],
		description: [
			`Attacks grant [MONEY]$[/MONEY] equal to 10% of the target’s [MONEY]gold[/MONEY].`, // inglés
			`Los ataques otorgan [MONEY]$[/MONEY] equivalente al 10% del [MONEY]oro[/MONEY] del objetivo.`, // español
			`Les attaques rapportent [MONEY]$[/MONEY] équivalant à 10 % de l'[MONEY]or[/MONEY] de la cible.`, // francés
			`Os ataques concedem [MONEY]$[/MONEY] equivalente a 10% do [MONEY]ouro[/MONEY] do alvo.`, // portugués
			`Gli attacchi forniscono [MONEY]$[/MONEY] pari al 10% dell'[MONEY]oro[/MONEY] del bersaglio.`, // italiano
			`Angriffe gewähren [MONEY]$[/MONEY] in Höhe von 10 % des [MONEY]Goldes[/MONEY] des Ziels.`, // alemán
			`攻撃すると、対象の[MONEY]ゴールド[/MONEY]の10%に相当する[MONEY]$[/MONEY]を獲得する。`, // japonés
			`공격 시 대상의 [MONEY]골드[/MONEY]의 10%에 해당하는 [MONEY]$[/MONEY]를 획득합니다.`, // coreano
			`攻击会获得相当于目标[MONEY]金币[/MONEY]10%的[MONEY]$[/MONEY]。`, // chino
			`Ataki zapewniają [MONEY]$[/MONEY] w wysokości 10% [MONEY]złota[/MONEY] celu.` // polaco
		]
	},
	focus: {
		id: 'focus',
		name: ['Focus', 'Focus', 'Concentration', 'Foco', 'Concentrazione', 'Fokus', 'フォーカス', '집중', '专注', 'Skupienie'],
		description: [
		  	"Each consecutive attack against the same target increases the damage dealt by 7.5%.",
		  	"Cada ataque a un mismo objetivo aumenta el daño ocasionado en un 7.5%.",
		  	"Chaque attaque contre une même cible augmente les dégâts infligés de 7,5 %.",
		  	"Cada ataque contra o mesmo alvo aumenta o dano causado em 7,5%.",
		  	"Ogni attacco contro lo stesso bersaglio aumenta i danni inflitti del 7,5%.",
		  	"Jeder Angriff gegen dasselbe Ziel erhöht den verursachten Schaden um 7,5%.",
		  	"同じ対象への攻撃ごとに、与えるダメージが7.5％増加します。",
		  	"같은 대상에게 공격할 때마다 가하는 피해가 7.5% 증가합니다.",
		  	"对同一目标的每次攻击都会使造成的伤害提高7.5%。",
			"Każdy kolejny atak w ten sam cel zwiększa zadawane obrażenia o 7,5%.",
		]
	},
	curse: {
		id: 'curse',
		name: ['Curse', 'Maldición', 'Malédiction', 'Maldição', 'Maledizione', 'Fluch', 'カース', '저주', '诅咒', 'Klątwa'],
		description: [
			`Attacks [CURSE]curse[/CURSE] the target and deal damage to all [ENEMY]cursed enemies[/ENEMY].`, // inglés
			`Los ataques [CURSE]maldicen[/CURSE] al objetivo e infligen daño a todos los [ENEMY]enemigos malditos[/ENEMY].`, // español
			`Les attaques [CURSE]maudissent[/CURSE] la cible et infligent des dégâts à tous les [ENEMY]ennemis maudits[/ENEMY].`, // francés
			`Os ataques [CURSE]amaldiçoam[/CURSE] o alvo e causam dano a todos os [ENEMY]inimigos amaldiçoados[/ENEMY].`, // portugués
			`Gli attacchi [CURSE]maledicono[/CURSE] il bersaglio e infliggono danni a tutti i [ENEMY]nemici maledetti[/ENEMY].`, // italiano
			`Angriffe [CURSE]verfluchen[/CURSE] das Ziel und fügen allen [ENEMY]verfluchten Gegnern[/ENEMY] Schaden zu.`, // alemán
			`攻撃で対象を[CURSE]のろい[/CURSE]状態にし、すべての[ENEMY]のろい状態の敵[/ENEMY]にダメージを与える。`, // japonés
			`공격으로 대상에게 [CURSE]저주[/CURSE]를 걸고 모든 [ENEMY]저주받은 적[/ENEMY]에게 피해를 줍니다.`, // coreano
			`攻击会对目标施加[CURSE]诅咒[/CURSE]，并对所有[ENEMY]被诅咒的敌人[/ENEMY]造成伤害。`, // chino
			`Ataki [CURSE]przeklinają[/CURSE] cel i zadają obrażenia wszystkim [ENEMY]przeklętym wrogom[/ENEMY].` // polaco
		]
	},
	curseSplash: {
		id: 'curseSplash',
		name: ['Curse Splash', 'Maldición', 'Malédiction', 'Maldição', 'Maledizione', 'Fluch', 'カース', '저주', '诅咒', 'Klątwa'],
		description: [
		  'Projectiles explode in an area, dealing half damage to nearby enemies and cursing them. Deals damage to all cursed enemies.',
		  'Los proyectiles explotan en área, causando la mitad de daño a los enemigos cercanos y maldiciéndolos. Causa daño a todos los enemigos malditos.',
		  'Les projectiles explosent dans une zone, infligeant la moitié des dégâts aux ennemis proches et les maudissant. Inflige des dégâts à tous les ennemis maudits.',
		  'Os projéteis explodem em área, causando metade do dano aos inimigos próximos e amaldiçoando-os. Causa dano a todos os inimigos amaldiçoados.',
		  'I proiettili esplodono ad area, infliggendo metà dei danni ai nemici vicini e maledicendoli. Infligge danni a tutti i nemici maledetti.',
		  'Geschosse explodieren in einem Bereich, verursachen halben Schaden an nahegelegenen Gegnern und verfluchen sie. Fügt allen verfluchten Gegnern Schaden zu.',
		  '弾が範囲爆発し、周囲の敵に半分のダメージを与えて呪い状態にする。呪われた敵全員にダメージを与える。',
		  '투사체가 범위 폭발을 일으켜 주변 적에게 절반의 피해를 주고 저주를 겁니다. 저주받은 모든 적에게 피해를 줍니다.',
		  '投射物會範圍爆炸，對附近敵人造成一半傷害並施加詛咒。對所有被詛咒的敵人造成傷害。',
		  'Pociski eksplodują obszarowo, zadając pobliskim przeciwnikom połowę obrażeń i nakładając na nich Klątwę. Zadaje obrażenia wszystkim przeklętym przeciwnikom.'
		]
	},
	doubleShot: {
		id: 'doubleShot',
		name: ['Double Shot', 'Disparo Doble', 'Tir Double', 'Tiro Duplo', 'Doppio Colpo', 'Doppelschuss', 'ダブルショット', '더블 샷', '双重射击', 'Podwójny Strzał'],
		description: [
			`Shoots [PROJECTILE]projectiles[/PROJECTILE] at up to 2 targets at once.`, // inglés
			`Dispara [PROJECTILE]proyectiles[/PROJECTILE] a un máximo de 2 objetivos a la vez.`, // español
			`Tire des [PROJECTILE]projectiles[/PROJECTILE] sur jusqu'à 2 cibles à la fois.`, // francés
			`Dispara [PROJECTILE]projéteis[/PROJECTILE] contra até 2 alvos ao mesmo tempo.`, // portugués
			`Spara [PROJECTILE]proiettili[/PROJECTILE] contro un massimo di 2 bersagli alla volta.`, // italiano
			`Schießt [PROJECTILE]Projektile[/PROJECTILE] auf bis zu 2 Ziele gleichzeitig.`, // alemán
			`最大2体の対象に同時に[PROJECTILE]投射物[/PROJECTILE]を発射する。`, // japonés
			`최대 2명의 대상을 동시에 [PROJECTILE]투사체[/PROJECTILE]로 공격합니다.`, // coreano
			`同时向最多2个目标发射[PROJECTILE]投射物[/PROJECTILE]。`, // chino
			`Wystrzeliwuje [PROJECTILE]pociski[/PROJECTILE] w maksymalnie 2 cele jednocześnie.` // polaco
		]
	},
	tripleShot: {
		id: 'tripleShot',
		name: ['Triple Shot', 'Disparo Triple', 'Tir Triple', 'Tiro Triplo', 'Triplo Colpo', 'Dreifachschuss', 'トリプルショット', '트리플 샷', '三重射击', 'Potrójny Strzał'],
		description: [
			`Shoots [PROJECTILE]projectiles[/PROJECTILE] at up to 3 targets at once.`, // inglés
			`Dispara [PROJECTILE]proyectiles[/PROJECTILE] a un máximo de 3 objetivos a la vez.`, // español
			`Tire des [PROJECTILE]projectiles[/PROJECTILE] sur jusqu'à 3 cibles à la fois.`, // francés
			`Dispara [PROJECTILE]projéteis[/PROJECTILE] contra até 3 alvos ao mesmo tempo.`, // portugués
			`Spara [PROJECTILE]proiettili[/PROJECTILE] contro un massimo di 3 bersagli alla volta.`, // italiano
			`Schießt [PROJECTILE]Projektile[/PROJECTILE] auf bis zu 3 Ziele gleichzeitig.`, // alemán
			`最大3体の対象に同時に[PROJECTILE]投射物[/PROJECTILE]を発射する。`, // japonés
			`최대 3명의 대상을 동시에 [PROJECTILE]투사체[/PROJECTILE]로 공격합니다.`, // coreano
			`同时向最多3个目标发射[PROJECTILE]投射物[/PROJECTILE]。`, // chino
			`Wystrzeliwuje [PROJECTILE]pociski[/PROJECTILE] w maksymalnie 3 cele jednocześnie.` // polaco
		]
	},
	quadraShot: {
		id: 'quadraShot',
		name: ['Quadra Shot', 'Disparo Cuádruple', 'Tir Quadruple', 'Tiro Quádruplo', 'Quadruplo Colpo', 'Vierfachschuss', 'クアドラショット', '쿼드라 샷', '四重射击', 'Poczwórny Strzał'],
		description: [
			`Shoots [PROJECTILE]projectiles[/PROJECTILE] at up to 4 targets at once.`, // inglés
			`Dispara [PROJECTILE]proyectiles[/PROJECTILE] a un máximo de 4 objetivos a la vez.`, // español
			`Tire des [PROJECTILE]projectiles[/PROJECTILE] sur jusqu'à 4 cibles à la fois.`, // francés
			`Dispara [PROJECTILE]projéteis[/PROJECTILE] contra até 4 alvos ao mesmo tempo.`, // portugués
			`Spara [PROJECTILE]proiettili[/PROJECTILE] contro un massimo di 4 bersagli alla volta.`, // italiano
			`Schießt [PROJECTILE]Projektile[/PROJECTILE] auf bis zu 4 Ziele gleichzeitig.`, // alemán
			`最大4体の対象に同時に[PROJECTILE]投射物[/PROJECTILE]を発射する。`, // japonés
			`최대 4명의 대상을 동시에 [PROJECTILE]투사체[/PROJECTILE]로 공격합니다.`, // coreano
			`同时向最多4个目标发射[PROJECTILE]投射物[/PROJECTILE]。`, // chino
			`Wystrzeliwuje [PROJECTILE]pociski[/PROJECTILE] w maksymalnie 4 cele jednocześnie.` // polaco
		]
	},
	octaShot: {
	    id: 'octaShot',
	    name: [
	        'Octa Shot',
	        'Disparo Óctuple',
	        'Tir Octuple',
	        'Tiro Óctuplo',
	        'Ottuplo Colpo',
	        'Achtfachschuss',
	        'オクタショット',
	        '옥타 샷',
	        '八重射击',
	        'Ośmiokrotny Strzał'
	    ],
	    description: [
	        `Shoots [PROJECTILE]projectiles[/PROJECTILE] at up to 8 targets at once.`, // inglés
			`Dispara [PROJECTILE]proyectiles[/PROJECTILE] a un máximo de 8 objetivos a la vez.`, // español
			`Tire des [PROJECTILE]projectiles[/PROJECTILE] sur jusqu'à 8 cibles à la fois.`, // francés
			`Dispara [PROJECTILE]projéteis[/PROJECTILE] contra até 8 alvos ao mesmo tempo.`, // portugués
			`Spara [PROJECTILE]proiettili[/PROJECTILE] contro un massimo di 8 bersagli alla volta.`, // italiano
			`Schießt [PROJECTILE]Projektile[/PROJECTILE] auf bis zu 8 Ziele gleichzeitig.`, // alemán
			`最大8体の対象に同時に[PROJECTILE]投射物[/PROJECTILE]を発射する。`, // japonés
			`최대 8명의 대상을 동시에 [PROJECTILE]투사체[/PROJECTILE]로 공격합니다.`, // coreano
			`同时向最多8个目标发射[PROJECTILE]投射物[/PROJECTILE]。`, // chino
			`Wystrzeliwuje [PROJECTILE]pociski[/PROJECTILE] w maksymalnie 8 cele jednocześnie.` // polaco
	    ]
	},
	splash: {
		id: 'splash',
		name: ['Splash', 'Splash', 'Éclaboussure', 'Splash', 'Splash', 'Platscher', 'スプラッシュ', '스플래시', '溅射', 'Plusk'],
		description: [
			`[PROJECTILE]Projectiles[/PROJECTILE] explode in an [SHAPE]area[/SHAPE], causing half damage to nearby [ENEMY]enemies[/ENEMY].`, // inglés
			`Los [PROJECTILE]proyectiles[/PROJECTILE] explotan en un [SHAPE]área[/SHAPE], infligiendo la mitad de daño a los [ENEMY]enemigos[/ENEMY] cercanos.`, // español
			`Les [PROJECTILE]projectiles[/PROJECTILE] explosent dans une [SHAPE]zone[/SHAPE], infligeant la moitié des dégâts aux [ENEMY]ennemis[/ENEMY] proches.`, // francés
			`Os [PROJECTILE]projéteis[/PROJECTILE] explodem em uma [SHAPE]área[/SHAPE], causando metade do dano aos [ENEMY]inimigos[/ENEMY] próximos.`, // portugués
			`I [PROJECTILE]proiettili[/PROJECTILE] esplodono in un'[SHAPE]area[/SHAPE], infliggendo metà dei danni ai [ENEMY]nemici[/ENEMY] vicini.`, // italiano
			`[PROJECTILE]Projektile[/PROJECTILE] explodieren in einem [SHAPE]Bereich[/SHAPE] und verursachen bei [ENEMY]Gegnern[/ENEMY] in der Nähe halben Schaden.`, // alemán
			`[PROJECTILE]投射物[/PROJECTILE]は[SHAPE]範囲[/SHAPE]で爆発し、近くの[ENEMY]敵[/ENEMY]に半分のダメージを与える。`, // japonés
			`[PROJECTILE]투사체[/PROJECTILE]가 [SHAPE]범위[/SHAPE]에서 폭발하여 주변 [ENEMY]적[/ENEMY]에게 절반의 피해를 줍니다.`, // coreano
			`[PROJECTILE]投射物[/PROJECTILE]会在[SHAPE]范围[/SHAPE]内爆炸，对附近的[ENEMY]敌人[/ENEMY]造成一半伤害。`, // chino
			`[PROJECTILE]Pociski[/PROJECTILE] eksplodują na [SHAPE]obszarze[/SHAPE], zadając połowę obrażeń pobliskim [ENEMY]wrogom[/ENEMY].` // polaco
		]
	},
	superCritical: {
		id: 'superCritical',
		name: [
			'Super Luck', // inglés
			'Afortunado', // español
			'Super-Chance', // francés
			'Sorte Grande', // portugués
			'Superfortuna', // italiano
			'Glückspilz', // alemán
			'きょううん', // japonés
			'대운', // coreano
			'超幸运', // chino
			'Super Luck' // polaco
		],
		description: [
			`[CRITICAL]Critical Hits[/CRITICAL] deal 2x damage rather than 1.5x.`, // inglés
			`Los [CRITICAL]golpes críticos[/CRITICAL] infligen 2x de daño en lugar de 1,5x.`, // español
			`Les [CRITICAL]coups critiques[/CRITICAL] infligent 2x dégâts au lieu de 1,5x.`, // francés
			`Os [CRITICAL]golpes críticos[/CRITICAL] causam 2x de dano em vez de 1,5x.`, // portugués
			`I [CRITICAL]colpi critici[/CRITICAL] infliggono 2x danni invece di 1,5x.`, // italiano
			`[CRITICAL]Kritische Treffer[/CRITICAL] verursachen 2x Schaden statt 1,5x.`, // alemán
			`[CRITICAL]急所に当たった攻撃[/CRITICAL]のダメージが1.5倍ではなく2倍になる。`, // japonés
			`[CRITICAL]급소에 맞은 공격[/CRITICAL]이 1.5배가 아닌 2배의 피해를 줍니다.`, // coreano
			`[CRITICAL]击中要害[/CRITICAL]时造成2倍伤害，而不是1.5倍。`, // chino
			`[CRITICAL]Trafienia krytyczne[/CRITICAL] zadają 2x obrażeń zamiast 1,5x.` // polaco
		]
	},
	powerAura: {
		id: 'powerAura',
		name: [
			`Morning Sun`, // inglés
			`Sol Matinal`, // español
			`Aurore`, // francés
			`Sol Matinal`, // portugués
			`Mattinata`, // italiano
			`Morgengrauen`, // alemán
			`あさのひざし`, // japonés
			`아침햇살`, // coreano
			`晨光`, // chino
			`Poranny Blask` // polaco
		],
		description: [
			`Increases the [POWER]power[/POWER] of nearby [TOWER]towers[/TOWER] by 20%.`, // inglés
			`Aumenta un 20% el [POWER]poder[/POWER] de las [TOWER]torres[/TOWER] cercanas.`, // español
			`Augmente de 20 % la [POWER]puissance[/POWER] des [TOWER]tours[/TOWER] proches.`, // francés
			`Aumenta em 20% o [POWER]poder[/POWER] das [TOWER]torres[/TOWER] próximas.`, // portugués
			`Aumenta del 20% la [POWER]potenza[/POWER] delle [TOWER]torri[/TOWER] vicine.`, // italiano
			`Erhöht die [POWER]Kraft[/POWER] benachbarter [TOWER]Türme[/TOWER] um 20 %.`, // alemán
			`近くの[TOWER]タワー[/TOWER]の[POWER]威力[/POWER]を20%上げる。`, // japonés
			`주변 [TOWER]타워[/TOWER]의 [POWER]위력[/POWER]을 20% 증가시킵니다.`, // coreano
			`使附近[TOWER]塔[/TOWER]的[POWER]威力[/POWER]提高20%。`, // chino
			`Zwiększa [POWER]moc[/POWER] pobliskich [TOWER]wież[/TOWER] o 20%.` // polaco
		]
	},
	criticalDamageAura: {
		id: 'criticalDamageAura',
		name: [
			'Critical Aura',
			'Aura de Crítico',
			'Aura Critique',
			'Aura Crítica',
			'Aura Critica',
			'Kritische Aura',
			'クリティカルオーラ',
			'크리티컬 오라',
			'暴击光环',
			'Aura Krytyczna'
		],
		description: [
			`Increases the [CRITICAL]critical damage[/CRITICAL] of nearby [TOWER]towers[/TOWER] by 50%.`, // inglés
			`Aumenta un 50% el [CRITICAL]daño crítico[/CRITICAL] de las [TOWER]torres[/TOWER] cercanas.`, // español
			`Augmente de 50 % les [CRITICAL]dégâts critiques[/CRITICAL] des [TOWER]tours[/TOWER] proches.`, // francés
			`Aumenta em 50% o [CRITICAL]dano crítico[/CRITICAL] das [TOWER]torres[/TOWER] próximas.`, // portugués
			`Aumenta del 50% i [CRITICAL]danni critici[/CRITICAL] delle [TOWER]torri[/TOWER] vicine.`, // italiano
			`Erhöht den [CRITICAL]kritischen Schaden[/CRITICAL] benachbarter [TOWER]Türme[/TOWER] um 50 %.`, // alemán
			`近くの[TOWER]タワー[/TOWER]の[CRITICAL]急所ダメージ[/CRITICAL]を50%増加させる。`, // japonés
			`주변 [TOWER]타워[/TOWER]의 [CRITICAL]치명타 피해[/CRITICAL]를 50% 증가시킵니다.`, // coreano
			`使附近[TOWER]塔[/TOWER]的[CRITICAL]暴击伤害[/CRITICAL]提高50%。`, // chino
			`Zwiększa [CRITICAL]obrażenia krytyczne[/CRITICAL] pobliskich [TOWER]wież[/TOWER] o 50%.` // polaco
		]
	},
	criticalAura: {
		id: 'criticalAura',
		name: [
			'Critical Aura',
			'Aura de Crítico',
			'Aura Critique',
			'Aura Crítica',
			'Aura Critica',
			'Kritische Aura',
			'クリティカルオーラ',
			'크리티컬 오라',
			'暴击光环',
			'Aura Krytyczna'
		],
		description: [
			`Increases the [CRITICAL]critical hit chance[/CRITICAL] of nearby [TOWER]towers[/TOWER] by 20%.`, // inglés
			`Aumenta un 20% la [CRITICAL]probabilidad de golpe crítico[/CRITICAL] de las [TOWER]torres[/TOWER] cercanas.`, // español
			`Augmente de 20 % les [CRITICAL]chances de coup critique[/CRITICAL] des [TOWER]tours[/TOWER] proches.`, // francés
			`Aumenta em 20% a [CRITICAL]chance de golpe crítico[/CRITICAL] das [TOWER]torres[/TOWER] próximas.`, // portugués
			`Aumenta del 20% la [CRITICAL]probabilità di colpo critico[/CRITICAL] delle [TOWER]torri[/TOWER] vicine.`, // italiano
			`Erhöht die [CRITICAL]Chance auf kritische Treffer[/CRITICAL] benachbarter [TOWER]Türme[/TOWER] um 20 %.`, // alemán
			`近くの[TOWER]タワー[/TOWER]の[CRITICAL]急所率[/CRITICAL]を20%上げる。`, // japonés
			`주변 [TOWER]타워[/TOWER]의 [CRITICAL]치명타 확률[/CRITICAL]을 20% 증가시킵니다.`, // coreano
			`使附近[TOWER]塔[/TOWER]的[CRITICAL]暴击率[/CRITICAL]提高20%。`, // chino
			`Zwiększa [CRITICAL]szansę na trafienie krytyczne[/CRITICAL] pobliskich [TOWER]wież[/TOWER] o 20%.` // polaco
		]
	},
	// NEW
	curseDoubleShot: {
		id: 'curseDoubleShot',
		name: ['Curse DoubleShot', 'Disparo Doble Maldito', 'Double Tir Maudit', 'Disparo Duplo Amaldiçoado', 'Doppio Colpo Maledetto', 'Fluch-Doppelschuss', 'カースダブルショット', '커스 더블샷', '詛咒雙重射擊', 'Podwójny strzał klątwy'],
		description: [
			`Shoots [PROJECTILE]projectiles[/PROJECTILE] at up to 2 targets at once. Attacks [CURSE]curse[/CURSE] the target and deal damage to all [ENEMY]cursed enemies[/ENEMY].`, // inglés
			`Dispara [PROJECTILE]proyectiles[/PROJECTILE] a un máximo de 2 objetivos a la vez. Los ataques [CURSE]maldicen[/CURSE] al objetivo e infligen daño a todos los [ENEMY]enemigos malditos[/ENEMY].`, // español
			`Tire des [PROJECTILE]projectiles[/PROJECTILE] sur jusqu'à 2 cibles à la fois. Les attaques [CURSE]maudissent[/CURSE] la cible et infligent des dégâts à tous les [ENEMY]ennemis maudits[/ENEMY].`, // francés
			`Dispara [PROJECTILE]projéteis[/PROJECTILE] contra até 2 alvos ao mesmo tempo. Os ataques [CURSE]amaldiçoam[/CURSE] o alvo e causam dano a todos os [ENEMY]inimigos amaldiçoados[/ENEMY].`, // portugués
			`Spara [PROJECTILE]proiettili[/PROJECTILE] contro un massimo di 2 bersagli alla volta. Gli attacchi [CURSE]maledicono[/CURSE] il bersaglio e infliggono danni a tutti i [ENEMY]nemici maledetti[/ENEMY].`, // italiano
			`Schießt [PROJECTILE]Projektile[/PROJECTILE] auf bis zu 2 Ziele gleichzeitig. Angriffe [CURSE]verfluchen[/CURSE] das Ziel und fügen allen [ENEMY]verfluchten Gegnern[/ENEMY] Schaden zu.`, // alemán
			`最大2体の対象に同時に[PROJECTILE]投射物[/PROJECTILE]を発射する。攻撃で対象を[CURSE]のろい[/CURSE]状態にし、すべての[ENEMY]のろい状態の敵[/ENEMY]にダメージを与える。`, // japonés
			`최대 2명의 대상을 동시에 [PROJECTILE]투사체[/PROJECTILE]로 공격합니다. 공격으로 대상에게 [CURSE]저주[/CURSE]를 걸고 모든 [ENEMY]저주받은 적[/ENEMY]에게 피해를 줍니다.`, // coreano
			`同时向最多2个目标发射[PROJECTILE]投射物[/PROJECTILE]。攻击会对目标施加[CURSE]诅咒[/CURSE]，并对所有[ENEMY]被诅咒的敌人[/ENEMY]造成伤害。`, // chino
			`Wystrzeliwuje [PROJECTILE]pociski[/PROJECTILE] w maksymalnie 2 cele jednocześnie. Ataki [CURSE]przeklinają[/CURSE] cel i zadają obrażenia wszystkim [ENEMY]przeklętym wrogom[/ENEMY].` // polaco
		]
	},
	poisonDoubleShot: {
		id: 'poisonDoubleShot',
		name: ['Poison DoubleShot', 'Doble Veneno', 'Double Poison', 'Duplo Veneno', 'Doppio Veleno', 'Gift-Doppelschuss', 'どくダブルショット', '독 더블샷', '毒雙重射擊', 'Podwójny strzał trucizny'],
		description: [
			`Shoots [PROJECTILE]projectiles[/PROJECTILE] at up to 2 targets at once and applies 1 stack of [POISON]poison[/POISON].`, // inglés
			`Dispara [PROJECTILE]proyectiles[/PROJECTILE] a un máximo de 2 objetivos a la vez y aplica 1 carga de [POISON]veneno[/POISON].`, // español
			`Tire des [PROJECTILE]projectiles[/PROJECTILE] sur jusqu'à 2 cibles à la fois et applique 1 cumul de [POISON]poison[/POISON].`, // francés
			`Dispara [PROJECTILE]projéteis[/PROJECTILE] contra até 2 alvos ao mesmo tempo e aplica 1 acúmulo de [POISON]veneno[/POISON].`, // portugués
			`Spara [PROJECTILE]proiettili[/PROJECTILE] contro un massimo di 2 bersagli alla volta e applica 1 accumulo di [POISON]veleno[/POISON].`, // italiano
			`Schießt [PROJECTILE]Projektile[/PROJECTILE] auf bis zu 2 Ziele gleichzeitig und verursacht 1 Stapel [POISON]Gift[/POISON].`, // alemán
			`最大2体の対象に同時に[PROJECTILE]投射物[/PROJECTILE]を発射し、[POISON]どく[/POISON]を1回蓄積させる。`, // japonés
			`최대 2명의 대상에게 동시에 [PROJECTILE]투사체[/PROJECTILE]를 발사하고 [POISON]독[/POISON]을 1중첩 부여합니다.`, // coreano
			`同时向最多2个目标发射[PROJECTILE]投射物[/PROJECTILE]，并施加1层[POISON]中毒[/POISON]。`, // chino
			`Wystrzeliwuje [PROJECTILE]pociski[/PROJECTILE] w maksymalnie 2 cele jednocześnie i nakłada 1 kumulację [POISON]Trucizny[/POISON].` // polaco
		]
	},
	spinda: {
		id: 'spinda',
		name: ['Own Tempo', 'Tumbos', 'Tempo Perso', 'Ritmo Próprio', 'Ritmo Proprio', 'Eigenes Tempo', 'マイペース', '마이페이스', '我行我素', 'Własne Tempo'],
		description: [
			'[ADMIN]Has trouble focusing.[/ADMIN]', 
			'[ADMIN]Tiene problemas para mantener el foco.[/ADMIN]', 
			'[ADMIN]A du mal à rester concentré.[/ADMIN]', 
			'[ADMIN]Tem problemas para manter o foco.[/ADMIN]', 
			'[ADMIN]Ha difficoltà a mantenere la concentrazione.[/ADMIN]', 
			'[ADMIN]Hat Probleme, sich zu konzentrieren.[/ADMIN]', 
			'[ADMIN]集中力を保つのが難しい。[/ADMIN]', 
			'[ADMIN]집중하는 데 어려움이 있다.[/ADMIN]',
			'[ADMIN]难以保持专注。[/ADMIN]',
			'[ADMIN]Ma problem ze skupieniem.[/ADMIN]',
		]
	},
	slowSplash: {
		id: 'slowSplash',
		name: ['Slow Splash', 'Slow Splash', 'Slow Splash', 'Slow Splash', 'Slow Splash', 'Langsamer Platscher', 'ゆっくりはねる', '느린 첨벙', '緩慢飛濺', 'Spowalniający Plusk'],
		description: [
			`[PROJECTILE]Projectiles[/PROJECTILE] explode in an [SHAPE]area[/SHAPE], causing half damage to nearby [ENEMY]enemies[/ENEMY] and [SLOW]slow[/SLOW] for 2 seconds.`, // inglés
			`Los [PROJECTILE]proyectiles[/PROJECTILE] explotan en un [SHAPE]área[/SHAPE], causando la mitad de daño a los [ENEMY]enemigos[/ENEMY] cercanos y aplicando [SLOW]ralentización[/SLOW] durante 2 segundos.`, // español
			`Les [PROJECTILE]projectiles[/PROJECTILE] explosent dans une [SHAPE]zone[/SHAPE], infligeant la moitié des dégâts aux [ENEMY]ennemis[/ENEMY] proches et les [SLOW]ralentissant[/SLOW] pendant 2 secondes.`, // francés
			`Os [PROJECTILE]projéteis[/PROJECTILE] explodem numa [SHAPE]área[/SHAPE], causando metade do dano aos [ENEMY]inimigos[/ENEMY] próximos e aplicando [SLOW]abrandamento[/SLOW] durante 2 segundos.`, // portugués
			`I [PROJECTILE]proiettili[/PROJECTILE] esplodono in un'[SHAPE]area[/SHAPE], infliggendo metà dei danni ai [ENEMY]nemici[/ENEMY] vicini e applicando [SLOW]rallentamento[/SLOW] per 2 secondi.`, // italiano
			`[PROJECTILE]Projektile[/PROJECTILE] explodieren in einem [SHAPE]Bereich[/SHAPE], verursachen bei nahen [ENEMY]Gegnern[/ENEMY] halben Schaden und [SLOW]verlangsamen[/SLOW] sie 2 Sekunden lang.`, // alemán
			`[PROJECTILE]弾[/PROJECTILE]が[SHAPE]範囲[/SHAPE]内で爆発し、近くの[ENEMY]敵[/ENEMY]に半分のダメージを与え、2秒間[SLOW]スロウ[/SLOW]状態にする。`, // japonés
			`[PROJECTILE]투사체[/PROJECTILE]가 [SHAPE]범위[/SHAPE] 내에서 폭발해 주변 [ENEMY]적[/ENEMY]에게 절반의 피해를 주고 2초 동안 [SLOW]둔화[/SLOW]시킨다.`, // coreano
			`[PROJECTILE]投射物[/PROJECTILE]会在一个[SHAPE]区域[/SHAPE]内爆炸，对附近的[ENEMY]敌人[/ENEMY]造成一半伤害，并使其[SLOW]减速[/SLOW]2秒。`, // chino
			`[PROJECTILE]Pociski[/PROJECTILE] wybuchają na [SHAPE]obszarze[/SHAPE], zadając pobliskim [ENEMY]wrogom[/ENEMY] połowę obrażeń i nakładając [SLOW]spowolnienie[/SLOW] na 2 sekundy.` // polaco
		]
	},
	armorBreakSplash: {
		id: 'armorBreakSplash',
		name: ['Armor Break Splash', 'Splash Rompearmadura', 'Splash Brise-Armure', 'Splash Quebra-Armadura', 'Splash Rompicolpo', 'Rüstungsbrecher-Splash', 'アーマーブレイクスプラッシュ', '아머 브레이크 스플래시', '破甲溅射', 'Rozprysk przełamania pancerza'],
		description: [
			`[PROJECTILE]Projectiles[/PROJECTILE] explode in an [SHAPE]area[/SHAPE], causing half damage to nearby [ENEMY]enemies[/ENEMY]. Causes double damage to [ARMOR]armored[/ARMOR] [ENEMY]enemies[/ENEMY].`, // inglés
			`Los [PROJECTILE]proyectiles[/PROJECTILE] explotan en un [SHAPE]área[/SHAPE], causando la mitad de daño a los [ENEMY]enemigos[/ENEMY] cercanos. Inflige el doble de daño a los [ENEMY]enemigos[/ENEMY] con [ARMOR]armadura[/ARMOR].`, // español
			`Les [PROJECTILE]projectiles[/PROJECTILE] explosent dans une [SHAPE]zone[/SHAPE], infligeant la moitié des dégâts aux [ENEMY]ennemis[/ENEMY] proches. Inflige deux fois plus de dégâts aux [ENEMY]ennemis[/ENEMY] [ARMOR]blindés[/ARMOR].`, // francés
			`Os [PROJECTILE]projéteis[/PROJECTILE] explodem em uma [SHAPE]área[/SHAPE], causando metade do dano aos [ENEMY]inimigos[/ENEMY] próximos. Causam o dobro de dano aos [ENEMY]inimigos[/ENEMY] [ARMOR]blindados[/ARMOR].`, // portugués
			`I [PROJECTILE]proiettili[/PROJECTILE] esplodono in un'[SHAPE]area[/SHAPE], infliggendo metà dei danni agli [ENEMY]nemici[/ENEMY] vicini. Infliggono il doppio dei danni agli [ENEMY]nemici[/ENEMY] [ARMOR]corazzati[/ARMOR].`, // italiano
			`[PROJECTILE]Projektile[/PROJECTILE] explodieren in einem [SHAPE]Bereich[/SHAPE] und verursachen bei nahen [ENEMY]Gegnern[/ENEMY] halben Schaden. Sie verursachen doppelten Schaden bei [ARMOR]gepanzerten[/ARMOR] [ENEMY]Gegnern[/ENEMY].`, // alemán
			`[PROJECTILE]弾[/PROJECTILE]が[SHAPE]範囲[/SHAPE]で爆発し、近くの[ENEMY]敵[/ENEMY]に半分のダメージを与える。[ARMOR]アーマー[/ARMOR]を持つ[ENEMY]敵[/ENEMY]には2倍のダメージを与える。`, // japonés
			`[PROJECTILE]투사체[/PROJECTILE]가 [SHAPE]범위[/SHAPE]에서 폭발하여 주변 [ENEMY]적[/ENEMY]에게 절반의 피해를 줍니다. [ARMOR]방어구[/ARMOR]를 가진 [ENEMY]적[/ENEMY]에게는 2배의 피해를 줍니다.`, // coreano
			`[PROJECTILE]投射物[/PROJECTILE]在[SHAPE]范围[/SHAPE]内爆炸，对附近的[ENEMY]敌人[/ENEMY]造成一半伤害。对具有[ARMOR]护甲[/ARMOR]的[ENEMY]敌人[/ENEMY]造成双倍伤害。`, // chino
			`[PROJECTILE]Pociski[/PROJECTILE] wybuchają na [SHAPE]obszarze[/SHAPE], zadając pobliskim [ENEMY]wrogom[/ENEMY] połowę obrażeń. Zadają podwójne obrażenia [ARMOR]opancerzonym[/ARMOR] [ENEMY]wrogom[/ENEMY].` // polaco
		]
	},
	synchronySplash: {
		id: 'synchronySplash',
		name: ['Synchrony', 'Sincronía', 'Synchro', 'Sincronia', 'Sincronia', 'Synchronisation', 'シンクロ', '싱크로', '同步', 'Synchronia'] ,
		description: [
			`[PROJECTILE]Projectiles[/PROJECTILE] explode in an [SHAPE]area[/SHAPE], causing half damage to nearby [ENEMY]enemies[/ENEMY]. [SPREAD]Spreads[/SPREAD] the primary target's [STATUS]status effects[/STATUS].`, // inglés
			`Los [PROJECTILE]proyectiles[/PROJECTILE] explotan en un [SHAPE]área[/SHAPE], causando la mitad de daño a los [ENEMY]enemigos[/ENEMY] cercanos. [SPREAD]Propaga[/SPREAD] los [STATUS]efectos de estado[/STATUS] del objetivo principal.`, // español
			`Les [PROJECTILE]projectiles[/PROJECTILE] explosent dans une [SHAPE]zone[/SHAPE], infligeant la moitié des dégâts aux [ENEMY]ennemis[/ENEMY] proches. [SPREAD]Propage[/SPREAD] les [STATUS]effets de statut[/STATUS] de la cible principale.`, // francés
			`Os [PROJECTILE]projéteis[/PROJECTILE] explodem em uma [SHAPE]área[/SHAPE], causando metade do dano aos [ENEMY]inimigos[/ENEMY] próximos. [SPREAD]Propaga[/SPREAD] os [STATUS]efeitos de estado[/STATUS] do alvo principal.`, // portugués
			`I [PROJECTILE]proiettili[/PROJECTILE] esplodono in un'[SHAPE]area[/SHAPE], infliggendo metà dei danni agli [ENEMY]nemici[/ENEMY] vicini. [SPREAD]Diffonde[/SPREAD] gli [STATUS]effetti di stato[/STATUS] del bersaglio principale.`, // italiano
			`[PROJECTILE]Projektile[/PROJECTILE] explodieren in einem [SHAPE]Bereich[/SHAPE] und verursachen bei nahen [ENEMY]Gegnern[/ENEMY] halben Schaden. [SPREAD]Verbreitet[/SPREAD] die [STATUS]Statuseffekte[/STATUS] des Hauptziels.`, // alemán
			`[PROJECTILE]弾[/PROJECTILE]が[SHAPE]範囲[/SHAPE]で爆発し、近くの[ENEMY]敵[/ENEMY]に半分のダメージを与える。[SPREAD]メインターゲット[/SPREAD]の[STATUS]状態異常[/STATUS]を拡散する。`, // japonés
			`[PROJECTILE]투사체[/PROJECTILE]가 [SHAPE]범위[/SHAPE]에서 폭발하여 주변 [ENEMY]적[/ENEMY]에게 절반의 피해를 줍니다. 주 대상의 [STATUS]상태 이상[/STATUS]을 [SPREAD]퍼뜨립니다[/SPREAD].`, // coreano
			`[PROJECTILE]投射物[/PROJECTILE]在[SHAPE]范围[/SHAPE]内爆炸，对附近的[ENEMY]敌人[/ENEMY]造成一半伤害。[SPREAD]扩散[/SPREAD]主要目标的[STATUS]状态效果[/STATUS]。`, // chino
			`[PROJECTILE]Pociski[/PROJECTILE] wybuchają na [SHAPE]obszarze[/SHAPE], zadając pobliskim [ENEMY]wrogom[/ENEMY] połowę obrażeń. [SPREAD]Rozprzestrzenia[/SPREAD] [STATUS]efekty statusu[/STATUS] głównego celu.` // polaco
		]
	},
	castform: {
		id: 'castform',
		name: ['Forecast', 'Cambio Climático', 'Météo', 'Previsão', 'Previsioni', 'Wettervorhersage', 'てんきや', '기후조절', '天气预报', 'Prognoza'],
		description: [
			`Increases [POWER]power[/POWER] by 100% if located on [GRASS]grass[/GRASS]. Reduces [SPEED]recharge time[/SPEED] by 50% if located on [WATER]water[/WATER]. Increases [RANGE]range[/RANGE] by 100% if located on [MOUNTAIN]mountain[/MOUNTAIN].`, // inglés
			`Aumenta el [POWER]poder[/POWER] un 100% si está situado sobre [GRASS]hierba[/GRASS]. Reduce un 50% el [SPEED]tiempo de recarga[/SPEED] si está situado sobre [WATER]agua[/WATER]. Aumenta el [RANGE]rango[/RANGE] un 100% si está situado en una [MOUNTAIN]montaña[/MOUNTAIN].`, // español
			`Augmente la [POWER]puissance[/POWER] de 100 % s'il est placé sur de l'[GRASS]herbe[/GRASS]. Réduit le [SPEED]temps de recharge[/SPEED] de 50 % s'il est placé sur l'[WATER]eau[/WATER]. Augmente la [RANGE]portée[/RANGE] de 100 % s'il est placé sur une [MOUNTAIN]montagne[/MOUNTAIN].`, // francés
			`Aumenta o [POWER]poder[/POWER] em 100% se estiver na [GRASS]grama[/GRASS]. Reduz o [SPEED]tempo de recarga[/SPEED] em 50% se estiver na [WATER]água[/WATER]. Aumenta o [RANGE]alcance[/RANGE] em 100% se estiver em uma [MOUNTAIN]montanha[/MOUNTAIN].`, // portugués
			`Aumenta la [POWER]potenza[/POWER] del 100% se si trova sull'[GRASS]erba[/GRASS]. Riduce il [SPEED]tempo di ricarica[/SPEED] del 50% se si trova sull'[WATER]acqua[/WATER]. Aumenta la [RANGE]portata[/RANGE] del 100% se si trova su una [MOUNTAIN]montagna[/MOUNTAIN].`, // italiano
			`Erhöht die [POWER]Kraft[/POWER] um 100 %, wenn es auf [GRASS]Gras[/GRASS] steht. Reduziert die [SPEED]Aufladezeit[/SPEED] um 50 %, wenn es sich auf [WATER]Wasser[/WATER] befindet. Erhöht die [RANGE]Reichweite[/RANGE] um 100 %, wenn es auf einem [MOUNTAIN]Berg[/MOUNTAIN] steht.`, // alemán
			`[GRASS]草むら[/GRASS]にいると、[POWER]威力[/POWER]が100%上がる。[WATER]水[/WATER]にいる場合、[SPEED]再使用時間[/SPEED]が50%短くなる。[MOUNTAIN]山[/MOUNTAIN]にいると、[RANGE]射程[/RANGE]が100%上がる。`, // japonés
			`[GRASS]풀[/GRASS] 위에 배치하면 [POWER]위력[/POWER]이 100% 증가합니다. [WATER]물[/WATER] 위에 배치하면 [SPEED]재사용 대기 시간[/SPEED]이 50% 감소합니다. [MOUNTAIN]산[/MOUNTAIN]에 배치하면 [RANGE]사거리[/RANGE]가 100% 증가합니다.`, // coreano
			`位于[GRASS]草地[/GRASS]时，[POWER]威力[/POWER]提高100%。位于[WATER]水[/WATER]上时，[SPEED]冷却时间[/SPEED]缩短50%。位于[MOUNTAIN]山地[/MOUNTAIN]时，[RANGE]攻击范围[/RANGE]提高100%。`, // chino
			`Zwiększa [POWER]moc[/POWER] o 100%, gdy znajduje się na [GRASS]trawie[/GRASS]. Skraca [SPEED]czas odnowienia[/SPEED] o 50%, gdy znajduje się na [WATER]wodzie[/WATER]. Zwiększa [RANGE]zasięg[/RANGE] o 100%, gdy znajduje się na [MOUNTAIN]górze[/MOUNTAIN].` // polaco
		]
	},
	star: {
		id: 'star',
		name: [
			'Moonblast', // inglés
			'Fuerza Lunar', // español
			'Pouvoir Lunaire', // francés
			'Força Lunar', // portugués
			'Lunalunare', // italiano
			'Mondgewalt', // alemán
			'ムーンフォース', // japonés
			'문포스', // coreano
			'月亮之力', // chino
			'Moonblast' // polaco
		],
		description: [
			`Increases [POWER]power[/POWER] by 0.33 for each [STAR]star[/STAR] obtained. The [POWER]power[/POWER] gained with this [ABILITY]ability[/ABILITY] cannot be modified by [PROJECTILE]auras[/PROJECTILE] or [ITEM]items[/ITEM].`, // inglés
			`Aumenta el [POWER]poder[/POWER] en 0,33 por cada [STAR]estrella[/STAR] obtenida. El [POWER]poder[/POWER] obtenido con esta [ABILITY]habilidad[/ABILITY] no puede modificarse mediante [PROJECTILE]auras[/PROJECTILE] ni [ITEM]objetos[/ITEM].`, // español
			`Augmente la [POWER]puissance[/POWER] de 0,33 pour chaque [STAR]étoile[/STAR] obtenue. La [POWER]puissance[/POWER] gagnée grâce à cette [ABILITY]capacité[/ABILITY] ne peut pas être modifiée par les [PROJECTILE]auras[/PROJECTILE] ou les [ITEM]objets[/ITEM].`, // francés
			`Aumenta o [POWER]poder[/POWER] em 0,33 por cada [STAR]estrela[/STAR] obtida. O [POWER]poder[/POWER] obtido com esta [ABILITY]habilidade[/ABILITY] não pode ser modificado por [PROJECTILE]auras[/PROJECTILE] ou [ITEM]itens[/ITEM].`, // portugués
			`Aumenta la [POWER]potenza[/POWER] di 0,33 per ogni [STAR]stella[/STAR] ottenuta. La [POWER]potenza[/POWER] ottenuta con questa [ABILITY]abilità[/ABILITY] non può essere modificata da [PROJECTILE]aure[/PROJECTILE] o [ITEM]strumenti[/ITEM].`, // italiano
			`Erhöht die [POWER]Stärke[/POWER] um 0,33 für jeden erhaltenen [STAR]Stern[/STAR]. Die durch diese [ABILITY]Fähigkeit[/ABILITY] erhaltene [POWER]Stärke[/POWER] kann weder durch [PROJECTILE]Auren[/PROJECTILE] noch durch [ITEM]Items[/ITEM] verändert werden.`, // alemán
			`獲得した[STAR]スター[/STAR]1個につき、[POWER]威力[/POWER]が0.33増加する。この[ABILITY]能力[/ABILITY]で得た[POWER]威力[/POWER]は、[PROJECTILE]オーラ[/PROJECTILE]や[ITEM]アイテム[/ITEM]によって変更されない。`, // japonés
			`획득한 [STAR]별[/STAR] 하나당 [POWER]위력[/POWER]이 0.33 증가한다. 이 [ABILITY]능력[/ABILITY]으로 얻은 [POWER]위력[/POWER]은 [PROJECTILE]오라[/PROJECTILE]나 [ITEM]아이템[/ITEM]으로 변경할 수 없다.`, // coreano
			`每获得一颗[STAR]星星[/STAR]，[POWER]威力[/POWER]就增加0.33。通过此[ABILITY]能力[/ABILITY]获得的[POWER]威力[/POWER]不会受到[PROJECTILE]光环[/PROJECTILE]或[ITEM]道具[/ITEM]的影响。`, // chino
			`Zwiększa [POWER]moc[/POWER] o 0,33 za każdą zdobytą [STAR]gwiazdkę[/STAR]. [POWER]Moc[/POWER] uzyskana dzięki tej [ABILITY]umiejętności[/ABILITY] nie może być modyfikowana przez [PROJECTILE]aury[/PROJECTILE] ani [ITEM]przedmioty[/ITEM].` // polaco
		]
	},
	teleport: {
		id: 'teleport',
		name: ['teleport', 'teleport', 'teleport', 'teleport', 'teleport', 'Teleport', 'テレポート', '텔레포트', '瞬間移動', 'Teleport'],
		description: [
			'Teleports periodically whenever possible. Each teleport grants 100% stackable damage to the next attack.',
			'Se teleporta periódicamente cuando sea posible. Cada teleport otorga 100% de daño acumulable para el siguiente ataque.',
			'Se téléporte périodiquement lorsque c’est possible, Chaque téléportation confère 100 % de dégâts cumulables à la prochaine attaque.',
			'Teleporta-se periodicamente quando possível. Cada teleporte concede 100% de dano acumulável ao próximo ataque.',
			'Si teletrasporta periodicamente quando possibile. Ogni teletrasporto garantisce il 100% di danno cumulabile al prossimo attacco.',
			'Teleportiert sich periodisch, wann immer möglich. Jede Teleportation verleiht 100% stapelbaren Schaden für den nächsten Angriff.',
			'可能な場合に定期的にテレポートし、テレポート1回ごとに次の攻撃のダメージが100％ずつ累積で増加する。',
			'가능할 때 주기적으로 텔레포트하며, 텔레포트할 때마다 다음 공격에 100%의 누적 피해가 부여됩니다.',
			'在可行時會定期瞬間移動。每次瞬間移動都會使下一次攻擊的傷害提高 100%，且可疊加。',
			'Okresowo teleportuje się, gdy to możliwe. Każdy teleport daje +100% kumulujących się obrażeń do następnego ataku.',
		]
	},
	nightmare: {
		id: 'nightmare',
		name: ['nightmare', 'pesadilla', 'cauchemar', 'pesadelo', 'incubo', 'Albtraum', 'ナイトメア', '악몽', '惡夢', 'Koszmar'],
		description: [
			`Attacks apply 1 stack of [NIGHTMARE]nightmare[/NIGHTMARE].`, // inglés
			`Los ataques aplican 1 carga de [NIGHTMARE]pesadilla[/NIGHTMARE].`, // español
			`Les attaques appliquent 1 cumul de [NIGHTMARE]cauchemar[/NIGHTMARE].`, // francés
			`Os ataques aplicam 1 acúmulo de [NIGHTMARE]pesadelo[/NIGHTMARE].`, // portugués
			`Gli attacchi applicano 1 accumulo di [NIGHTMARE]incubo[/NIGHTMARE].`, // italiano
			`Angriffe verursachen 1 Stapel [NIGHTMARE]Albtraum[/NIGHTMARE].`, // alemán
			`攻撃で[NIGHTMARE]あくむ[/NIGHTMARE]を1回蓄積させる。`, // japonés
			`공격으로 [NIGHTMARE]악몽[/NIGHTMARE]을 1중첩 부여합니다.`, // coreano
			`攻击会施加1层[NIGHTMARE]噩梦[/NIGHTMARE]。`, // chino
			`Ataki nakładają 1 kumulację [NIGHTMARE]Koszmaru[/NIGHTMARE].` // polaco
		]
	},
	bastiodon: {
		id: 'bastiodon',
		name: ['Fossil Speed', 'Velocidad Fósil', 'Vitesse Fossile', 'Velocidade Fóssil', 'Velocità Fossile', 'Fossilgeschwindigkeit', '化石の速さ', '화석 속도', '化石速度', 'Szybkość Skamieniałości'],
		description: [
			`Reduces [SPEED]recharge time[/SPEED] by 0.5s for each [POKEMON]Fossil Pokémon[/POKEMON] on the [TEAM]team[/TEAM].`, // inglés
			`Reduce el [SPEED]tiempo de recarga[/SPEED] en 0,5 s por cada [POKEMON]Pokémon Fósil[/POKEMON] en el [TEAM]equipo[/TEAM].`, // español
			`Réduit le [SPEED]temps de recharge[/SPEED] de 0,5 s pour chaque [POKEMON]Pokémon Fossile[/POKEMON] dans l'[TEAM]équipe[/TEAM].`, // francés
			`Reduz o [SPEED]tempo de recarga[/SPEED] em 0,5 s para cada [POKEMON]Pokémon Fóssil[/POKEMON] na [TEAM]equipe[/TEAM].`, // portugués
			`Riduce il [SPEED]tempo di ricarica[/SPEED] di 0,5 s per ogni [POKEMON]Pokémon Fossile[/POKEMON] nella [TEAM]squadra[/TEAM].`, // italiano
			`Reduziert die [SPEED]Aufladezeit[/SPEED] um 0,5 s für jedes [POKEMON]Fossil-Pokémon[/POKEMON] im [TEAM]Team[/TEAM].`, // alemán
			`[TEAM]チーム[/TEAM]にいる[POKEMON]化石ポケモン[/POKEMON]1体につき、[SPEED]再使用時間[/SPEED]が0.5秒短くなる。`, // japonés
			`[TEAM]팀[/TEAM]에 있는 [POKEMON]화석 포켓몬[/POKEMON] 1마리당 [SPEED]재사용 대기 시간[/SPEED]이 0.5초 감소합니다.`, // coreano
			`[TEAM]队伍[/TEAM]中每有1只[POKEMON]化石宝可梦[/POKEMON]，[SPEED]冷却时间[/SPEED]缩短0.5秒。`, // chino
			`Skraca [SPEED]czas odnowienia[/SPEED] o 0,5 s za każdego [POKEMON]Pokémona Skamielinę[/POKEMON] w [TEAM]drużynie[/TEAM].` // polaco
		]
	},
	rampardos: {
		id: 'rampardos',
		name: ['Rock Head', 'Cabeza de Roca', 'Tête de Roc', 'Cabeça de Pedra', 'Testa di Roccia', 'Felskopf', 'いしあたま', '바위 머리', '堅硬腦袋', 'Twarda Głowa'],
		description: [
			`Increases [POWER]power[/POWER] by 5% for each missing [HEART]heart[/HEART].`, // inglés
			`Aumenta el [POWER]poder[/POWER] un 5% por cada [HEART]corazón[/HEART] perdido.`, // español
			`Augmente la [POWER]puissance[/POWER] de 5 % pour chaque [HEART]cœur[/HEART] manquant.`, // francés
			`Aumenta o [POWER]poder[/POWER] em 5% para cada [HEART]coração[/HEART] perdido.`, // portugués
			`Aumenta la [POWER]potenza[/POWER] del 5% per ogni [HEART]cuore[/HEART] mancante.`, // italiano
			`Erhöht die [POWER]Kraft[/POWER] um 5 % für jedes fehlende [HEART]Herz[/HEART].`, // alemán
			`失われた[HEART]ハート[/HEART]1個につき、[POWER]威力[/POWER]が5%上がる。`, // japonés
			`잃은 [HEART]하트[/HEART] 1개당 [POWER]위력[/POWER]이 5% 증가합니다.`, // coreano
			`每失去1个[HEART]心[/HEART]，[POWER]威力[/POWER]提高5%。`, // chino
			`Zwiększa [POWER]moc[/POWER] o 5% za każde utracone [HEART]serce[/HEART].` // polaco
		]
	},
	armaldo: {
		id: 'armaldo',
		name: ['Critical Ricochet', 'Rebote Critico', 'Ricochet critique', 'Ricochete crítico', 'Rimbalzo critico', 'Kritischer Querschläger', 'クリティカルリコシェ', '크리티컬 리코셰', '暴擊反彈', 'Krytyczny Rykoszet'],
		description: [
		    `[CRITICAL]Critical projectiles[/CRITICAL] [RICOCHET]ricochet[/RICOCHET] between [ENEMY]enemies[/ENEMY] and keep [RICOCHET]ricocheting[/RICOCHET] as long as they remain [CRITICAL]critical[/CRITICAL]. This unit's [CRITICAL]critical hit[/CRITICAL] chance is capped at 95%.`, // inglés
			`Los [CRITICAL]proyectiles críticos[/CRITICAL] [RICOCHET]rebotan[/RICOCHET] entre [ENEMY]enemigos[/ENEMY] y siguen [RICOCHET]rebotando[/RICOCHET] mientras sigan siendo [CRITICAL]críticos[/CRITICAL]. La probabilidad de [CRITICAL]golpe crítico[/CRITICAL] de esta unidad está limitada al 95%.`, // español
			`Les [CRITICAL]projectiles critiques[/CRITICAL] [RICOCHET]ricochent[/RICOCHET] entre les [ENEMY]ennemis[/ENEMY] et continuent de [RICOCHET]ricocher[/RICOCHET] tant qu'ils restent [CRITICAL]critiques[/CRITICAL]. Les chances de [CRITICAL]coup critique[/CRITICAL] de cette unité sont limitées à 95 %.`, // francés
			`Os [CRITICAL]projéteis críticos[/CRITICAL] [RICOCHET]ricocheteiam[/RICOCHET] entre os [ENEMY]inimigos[/ENEMY] e continuam [RICOCHET]ricocheteando[/RICOCHET] enquanto permanecerem [CRITICAL]críticos[/CRITICAL]. A chance de [CRITICAL]golpe crítico[/CRITICAL] desta unidade é limitada a 95%.`, // portugués
			`I [CRITICAL]proiettili critici[/CRITICAL] [RICOCHET]rimbalzano[/RICOCHET] tra i [ENEMY]nemici[/ENEMY] e continuano a [RICOCHET]rimbalzare[/RICOCHET] finché rimangono [CRITICAL]critici[/CRITICAL]. La probabilità di [CRITICAL]colpo critico[/CRITICAL] di questa unità è limitata al 95%.`, // italiano
			`[CRITICAL]Kritische Projektile[/CRITICAL] [RICOCHET]prallen[/RICOCHET] zwischen [ENEMY]Gegnern[/ENEMY] ab und [RICOCHET]prallen[/RICOCHET] weiter ab, solange sie [CRITICAL]kritisch[/CRITICAL] bleiben. Die [CRITICAL]Volltreffer[/CRITICAL]-Chance dieser Einheit ist auf 95 % begrenzt.`, // alemán
			`[CRITICAL]急所に当たった投射物[/CRITICAL]は[ENEMY]敵[/ENEMY]の間を[RICOCHET]跳ね返り[/RICOCHET]、[CRITICAL]急所[/CRITICAL]である限り[RICOCHET]跳ね返り続ける[/RICOCHET]。このユニットの[CRITICAL]急所率[/CRITICAL]は95%が上限。`, // japonés
			`[CRITICAL]급소에 맞은 투사체[/CRITICAL]가 [ENEMY]적[/ENEMY] 사이에서 [RICOCHET]튕겨 나가며[/RICOCHET], [CRITICAL]급소 공격[/CRITICAL]인 동안 계속 [RICOCHET]튕겨 나갑니다[/RICOCHET]. 이 유닛의 [CRITICAL]치명타 확률[/CRITICAL]은 95%로 제한됩니다.`, // coreano
			`[CRITICAL]暴击投射物[/CRITICAL]会在[ENEMY]敌人[/ENEMY]之间[RICOCHET]弹射[/RICOCHET]，只要保持[CRITICAL]暴击[/CRITICAL]就会继续[RICOCHET]弹射[/RICOCHET]。该单位的[CRITICAL]暴击率[/CRITICAL]上限为95%。`, // chino
			`[CRITICAL]Krytyczne pociski[/CRITICAL] [RICOCHET]rykoszetują[/RICOCHET] między [ENEMY]wrogami[/ENEMY] i nadal [RICOCHET]rykoszetują[/RICOCHET], dopóki pozostają [CRITICAL]krytyczne[/CRITICAL]. Szansa na [CRITICAL]trafienie krytyczne[/CRITICAL] tej jednostki jest ograniczona do 95%.` // polaco
		]
	},
	cradily: {
		id: 'cradily',
		name: ['Fossil Projectile', 'Proyectil Fósil', 'Projectile Fossile', 'Projétil Fóssil', 'Proiettile Fossile', 'Fossiliengeschoss', '化石の弾', '화석 투사체', '化石投射物', 'Skamieniały Pocisk'],
		description: [
			`Shoots one [PROJECTILE]projectile[/PROJECTILE] for each [POKEMON]Fossil Pokémon[/POKEMON] on the [TEAM]team[/TEAM]. Attacks cause [SLOW]slow[/SLOW] for 2 seconds.`, // inglés
			`Dispara un [PROJECTILE]proyectil[/PROJECTILE] por cada [POKEMON]Pokémon Fósil[/POKEMON] del [TEAM]equipo[/TEAM]. Sus ataques aplican [SLOW]ralentización[/SLOW] durante 2 segundos.`, // español
			`Tire un [PROJECTILE]projectile[/PROJECTILE] pour chaque [POKEMON]Pokémon Fossile[/POKEMON] de l'[TEAM]équipe[/TEAM]. Ses attaques appliquent un [SLOW]ralentissement[/SLOW] pendant 2 secondes.`, // francés
			`Dispara um [PROJECTILE]projétil[/PROJECTILE] para cada [POKEMON]Pokémon Fóssil[/POKEMON] da [TEAM]equipe[/TEAM]. Seus ataques causam [SLOW]lentidão[/SLOW] por 2 segundos.`, // portugués
			`Spara un [PROJECTILE]proiettile[/PROJECTILE] per ogni [POKEMON]Pokémon Fossile[/POKEMON] della [TEAM]squadra[/TEAM]. I suoi attacchi applicano [SLOW]rallentamento[/SLOW] per 2 secondi.`, // italiano
			`Schießt ein [PROJECTILE]Projektil[/PROJECTILE] für jedes [POKEMON]Fossil-Pokémon[/POKEMON] im [TEAM]Team[/TEAM]. Seine Angriffe verursachen 2 Sekunden lang [SLOW]Verlangsamung[/SLOW].`, // alemán
			`[TEAM]チーム[/TEAM]にいる[POKEMON]化石ポケモン[/POKEMON]1匹につき、[PROJECTILE]弾[/PROJECTILE]を1発発射する。攻撃は2秒間の[SLOW]遅延[/SLOW]を付与する。`, // japonés
			`[TEAM]팀[/TEAM]에 있는 [POKEMON]화석 포켓몬[/POKEMON] 한 마리당 [PROJECTILE]투사체[/PROJECTILE]를 하나 발사합니다. 공격은 2초 동안 [SLOW]느려짐[/SLOW]을 적용합니다.`, // coreano
			`每有一只[TEAM]队伍[/TEAM]中的[POKEMON]化石宝可梦[/POKEMON]，就发射一枚[PROJECTILE]投射物[/PROJECTILE]。攻击会造成持续2秒的[SLOW]减速[/SLOW]。`, // chino
			`Wystrzeliwuje jeden [PROJECTILE]pocisk[/PROJECTILE] za każdego [POKEMON]Pokémona Skamielinę[/POKEMON] w [TEAM]drużynie[/TEAM]. Ataki powodują [SLOW]spowolnienie[/SLOW] na 2 sekundy.` // polaco
		]
	},
	transform: {
		id: 'transform',
		name: ['Transform', 'Transform', 'Transform', 'Transform', 'Transform', 'Verwandlung', 'へんしん', '변신', '變身', 'Transformacja'],
		description: [
			`[ABILITY]Transforms[/ABILITY] into the first [POKEMON]Pokémon[/POKEMON] in the [TEAM]team[/TEAM], copying its [STATS]stats[/STATS] and [ABILITY]ability[/ABILITY] adjusted to [POKEMON]Ditto’s[/POKEMON] [TEAM]level[/TEAM].`, // inglés
			`Se [ABILITY]transforma[/ABILITY] en el primer [POKEMON]Pokémon[/POKEMON] del [TEAM]equipo[/TEAM], copiando sus [STATS]estadísticas[/STATS] y [ABILITY]habilidad[/ABILITY] ajustadas al [TEAM]nivel[/TEAM] de [POKEMON]Ditto[/POKEMON].`, // español
			`Se [ABILITY]transforme[/ABILITY] en le premier [POKEMON]Pokémon[/POKEMON] de l'[TEAM]équipe[/TEAM], en copiant ses [STATS]statistiques[/STATS] et sa [ABILITY]capacité[/ABILITY] adaptées au [TEAM]niveau[/TEAM] de [POKEMON]Métamorph[/POKEMON].`, // francés
			`[ABILITY]Transforma-se[/ABILITY] no primeiro [POKEMON]Pokémon[/POKEMON] da [TEAM]equipe[/TEAM], copiando seus [STATS]atributos[/STATS] e [ABILITY]habilidade[/ABILITY] ajustados ao [TEAM]nível[/TEAM] de [POKEMON]Ditto[/POKEMON].`, // portugués
			`Si [ABILITY]trasforma[/ABILITY] nel primo [POKEMON]Pokémon[/POKEMON] della [TEAM]squadra[/TEAM], copiandone le [STATS]statistiche[/STATS] e l'[ABILITY]abilità[/ABILITY] adattate al [TEAM]livello[/TEAM] di [POKEMON]Ditto[/POKEMON].`, // italiano
			`[ABILITY]Verwandelt sich[/ABILITY] in das erste [POKEMON]Pokémon[/POKEMON] im [TEAM]Team[/TEAM] und kopiert dessen [STATS]Werte[/STATS] und [ABILITY]Fähigkeit[/ABILITY], angepasst an das [TEAM]Level[/TEAM] von [POKEMON]Ditto[/POKEMON].`, // alemán
			`[ABILITY]変身する[/ABILITY]と、[TEAM]チーム[/TEAM]の先頭の[POKEMON]ポケモン[/POKEMON]に変身し、その[STATS]ステータス[/STATS]と[ABILITY]とくせい[/ABILITY]を[POKEMON]メタモン[/POKEMON]の[TEAM]レベル[/TEAM]に合わせてコピーする。`, // japonés
			`[ABILITY]변신합니다[/ABILITY]. [TEAM]팀[/TEAM]의 첫 번째 [POKEMON]포켓몬[/POKEMON]으로 변신하여 해당 [STATS]능력치[/STATS]와 [ABILITY]특성[/ABILITY]을 [POKEMON]메타몽[/POKEMON]의 [TEAM]레벨[/TEAM]에 맞게 복사합니다.`, // coreano
			`[ABILITY]变身[/ABILITY]为[TEAM]队伍[/TEAM]中的第一只[POKEMON]宝可梦[/POKEMON]，复制其[STATS]属性[/STATS]和[ABILITY]特性[/ABILITY]，并根据[POKEMON]百变怪[/POKEMON]的[TEAM]等级[/TEAM]进行调整。`, // chino
			`[ABILITY]Przemienia się[/ABILITY] w pierwszego [POKEMON]Pokémona[/POKEMON] w [TEAM]drużynie[/TEAM], kopiując jego [STATS]statystyki[/STATS] i [ABILITY]zdolność[/ABILITY] dostosowane do [TEAM]poziomu[/TEAM] [POKEMON]Ditto[/POKEMON].` // polaco
		]
	},
	fieryDance: {
		id: 'fieryDance',
		name: ['Fiery Dance', 'Danza Llama', 'Danse du Feu', 'Dança Ardente', 'Voldifuoco', 'Feuerreigen', 'ほのおのまい', '불꽃춤', '火焰之舞', 'Ognisty Taniec'],
		description: [
			`If the target is [BURN]burned[/BURN], it deals 35% additional damage. It detonates the target's [BURN]burn[/BURN], dealing 0.3% of [HP]max HP[/HP] for each remaining second of [BURN]burn[/BURN].`, // inglés
			`Si el objetivo está [BURN]quemado[/BURN], inflige un 35% de daño adicional. Detona la [BURN]quemadura[/BURN] del objetivo, infligiendo un 0,3% de [HP]salud máxima[/HP] por cada segundo restante de [BURN]quemadura[/BURN].`, // español
			`Si la cible est [BURN]brûlée[/BURN], inflige 35 % de dégâts supplémentaires. Fait exploser la [BURN]brûlure[/BURN] de la cible, infligeant 0,3 % des [HP]PV max[/HP] pour chaque seconde restante de [BURN]brûlure[/BURN].`, // francés
			`Se o alvo estiver [BURN]queimado[/BURN], causa 35% de dano adicional. Detona a [BURN]queimadura[/BURN] do alvo, causando 0,3% do [HP]HP máximo[/HP] para cada segundo restante de [BURN]queimadura[/BURN].`, // portugués
			`Se il bersaglio è [BURN]bruciato[/BURN], infligge il 35% di danni aggiuntivi. Fa detonare la [BURN]bruciatura[/BURN] del bersaglio, infliggendo lo 0,3% degli [HP]HP massimi[/HP] per ogni secondo rimanente di [BURN]bruciatura[/BURN].`, // italiano
			`Wenn das Ziel [BURN]verbrannt[/BURN] ist, verursacht es 35 % zusätzlichen Schaden. Lässt die [BURN]Verbrennung[/BURN] des Ziels explodieren und verursacht für jede verbleibende Sekunde [BURN]Verbrennung[/BURN] 0,3 % der [HP]maximalen KP[/HP].`, // alemán
			`対象が[BURN]やけど[/BURN]状態なら、35%追加ダメージを与える。対象の[BURN]やけど[/BURN]を爆発させ、[BURN]やけど[/BURN]の残り1秒ごとに[HP]最大HP[/HP]の0.3%のダメージを与える。`, // japonés
			`대상이 [BURN]화상[/BURN] 상태라면 35%의 추가 피해를 줍니다. 대상의 [BURN]화상[/BURN]을 폭발시켜, [BURN]화상[/BURN]이 남은 1초마다 [HP]최대 HP[/HP]의 0.3%에 해당하는 피해를 줍니다.`, // coreano
			`如果目标处于[BURN]灼伤[/BURN]状态，则造成35%的额外伤害。引爆目标的[BURN]灼伤[/BURN]，每剩余1秒[BURN]灼伤[/BURN]造成相当于[HP]最大生命值[/HP]0.3%的伤害。`, // chino
			`Jeśli cel jest [BURN]podpalony[/BURN], zadaje 35% dodatkowych obrażeń. Detonuje [BURN]podpalenie[/BURN] celu, zadając 0,3% [HP]maks. HP[/HP] za każdą pozostałą sekundę [BURN]podpalenia[/BURN].` // polaco
		]
	},
	static: {
		id: 'static',
		name: ['Static', 'Electricidad estática', 'Électricité statique', 'Eletricidade Estática', 'Statico', 'Statik', 'せいでんき', '정전기', '静电', 'Statyczność'],
		description: [
			`Attacks [RICOCHET]ricochet[/RICOCHET] between [ENEMY]enemies[/ENEMY] and have a 7.5% chance to cause [STUN]stun[/STUN] for 1.5 seconds.`, // inglés
			`Los ataques [RICOCHET]rebotan[/RICOCHET] entre [ENEMY]enemigos[/ENEMY] y tienen un 7,5% de probabilidad de causar [STUN]aturdimiento[/STUN] durante 1,5 segundos.`, // español
			`Les attaques [RICOCHET]ricochent[/RICOCHET] entre les [ENEMY]ennemis[/ENEMY] et ont 7,5 % de chances de provoquer un [STUN]étourdissement[/STUN] pendant 1,5 seconde.`, // francés
			`Os ataques [RICOCHET]ricocheteiam[/RICOCHET] entre os [ENEMY]inimigos[/ENEMY] e têm 7,5% de chance de causar [STUN]atordoamento[/STUN] por 1,5 segundo.`, // portugués
			`Gli attacchi [RICOCHET]rimbalzano[/RICOCHET] tra i [ENEMY]nemici[/ENEMY] e hanno una probabilità del 7,5% di causare [STUN]stordimento[/STUN] per 1,5 secondi.`, // italiano
			`Angriffe [RICOCHET]prallen[/RICOCHET] zwischen [ENEMY]Gegnern[/ENEMY] ab und haben eine Chance von 7,5 %, 1,5 Sekunden lang [STUN]Betäubung[/STUN] zu verursachen.`, // alemán
			`攻撃が[ENEMY]敵[/ENEMY]の間を[RICOCHET]跳ね返り[/RICOCHET]、7.5%の確率で1.5秒間[STUN]ひるみ[/STUN]を与える。`, // japonés
			`공격이 [ENEMY]적[/ENEMY] 사이에서 [RICOCHET]튕겨 나가며[/RICOCHET] 7.5% 확률로 1.5초 동안 [STUN]기절[/STUN]시킵니다.`, // coreano
			`攻击会在[ENEMY]敌人[/ENEMY]之间[RICOCHET]弹射[/RICOCHET]，并有7.5%的概率造成[STUN]眩晕[/STUN]1.5秒。`, // chino
			`Ataki [RICOCHET]rykoszetują[/RICOCHET] między [ENEMY]wrogami[/ENEMY] i mają 7,5% szans na wywołanie [STUN]ogłuszenia[/STUN] na 1,5 sekundy.` // polaco
		]
	},
	contrary: {
		id: 'contrary',
		name: [
			"Contrary",
			"Respondón",
			"Contestation",
			"Contrário",
			"Inversione",
			"Umkehrung",
			"あまのじゃく",
			"심술꾸러기",
			"唱反调",
			"Przekora"
	    ],
		description: [
			`Turns negative effects of [ITEM]items[/ITEM] into positive effects.`, // inglés
			`Convierte los efectos negativos de los [ITEM]objetos[/ITEM] en efectos positivos.`, // español
			`Transforme les effets négatifs des [ITEM]objets[/ITEM] en effets positifs.`, // francés
			`Transforma os efeitos negativos dos [ITEM]itens[/ITEM] em efeitos positivos.`, // portugués
			`Trasforma gli effetti negativi degli [ITEM]strumenti[/ITEM] in effetti positivi.`, // italiano
			`Wandelt negative Effekte von [ITEM]Items[/ITEM] in positive Effekte um.`, // alemán
			`[ITEM]どうぐ[/ITEM]のマイナス効果をプラス効果に変える。`, // japonés
			`[ITEM]도구[/ITEM]의 부정적인 효과를 긍정적인 효과로 바꿉니다.`, // coreano
			`将[ITEM]道具[/ITEM]的负面效果转化为正面效果。`, // chino
			`Zmienia negatywne efekty [ITEM]przedmiotów[/ITEM] na pozytywne efekty.` // polaco
		]
	},
	defiant: {
		id: 'defiant',
		name: [
			"Defiant",
			"Competitivo",
			"Acharné",
			"Tenacidade",
			"Agonismo",
			"Siegeswille",
			"まけんき",
			"오기",
			"不屈之心",
			"Uparty"
		],
		description: [
			`If suffering a negative effect from an [ITEM]item[/ITEM], increases [POWER]power[/POWER] by 500. [ITEM]Items[/ITEM] cannot reduce its [POWER]power[/POWER].`, // inglés
			`Si sufre un efecto negativo de un [ITEM]objeto[/ITEM], aumenta el [POWER]poder[/POWER] en 500. Los [ITEM]objetos[/ITEM] no pueden reducir su [POWER]poder[/POWER].`, // español
			`Si elle subit un effet négatif d'un [ITEM]objet[/ITEM], augmente la [POWER]puissance[/POWER] de 500. Les [ITEM]objets[/ITEM] ne peuvent pas réduire sa [POWER]puissance[/POWER].`, // francés
			`Se sofrer um efeito negativo de um [ITEM]item[/ITEM], aumenta o [POWER]poder[/POWER] em 500. Os [ITEM]itens[/ITEM] não podem reduzir seu [POWER]poder[/POWER].`, // portugués
			`Se subisce un effetto negativo da uno [ITEM]strumento[/ITEM], aumenta la [POWER]potenza[/POWER] di 500. Gli [ITEM]strumenti[/ITEM] non possono ridurre la sua [POWER]potenza[/POWER].`, // italiano
			`Wenn es unter einem negativen Effekt eines [ITEM]Items[/ITEM] leidet, erhöht es die [POWER]Kraft[/POWER] um 500. [ITEM]Items[/ITEM] können seine [POWER]Kraft[/POWER] nicht verringern.`, // alemán
			`[ITEM]どうぐ[/ITEM]によるマイナス効果を受けている場合、[POWER]威力[/POWER]が500上がる。[ITEM]どうぐ[/ITEM]によって[POWER]威力[/POWER]が下がらない。`, // japonés
			`[ITEM]도구[/ITEM]의 부정적인 효과를 받고 있으면 [POWER]위력[/POWER]이 500 증가합니다. [ITEM]도구[/ITEM]로 인해 [POWER]위력[/POWER]이 감소하지 않습니다.`, // coreano
			`如果受到[ITEM]道具[/ITEM]的负面效果，[POWER]威力[/POWER]提高500。[ITEM]道具[/ITEM]无法降低其[POWER]威力[/POWER]。`, // chino
			`Jeśli cierpi z powodu negatywnego efektu [ITEM]przedmiotu[/ITEM], zwiększa [POWER]moc[/POWER] o 500. [ITEM]Przedmioty[/ITEM] nie mogą zmniejszyć jego [POWER]mocy[/POWER].` // polaco
		]
	},
	firstImpression: {
		id: 'firstImpression',
		name: ['First Impression', 'Escaramuza', 'Escarmouche', 'Primeira Impressão', 'Schermaglia', 'Überrumpler', 'であいがしら', '만나자마자', '迎头一击', 'Pierwsze Wrażenie'],
		description: [
			`The first attack on an [ENEMY]enemy[/ENEMY] deals triple damage. [SHAKE]Golisopod has a really bad memory, so swapping targets resets it.[/SHAKE]`, // inglés
			`El primer ataque contra un [ENEMY]enemigo[/ENEMY] inflige el triple de daño. [SHAKE]Golisopod tiene muy mala memoria, así que cambiar de objetivo reinicia el efecto.[/SHAKE]`, // español
			`La première attaque contre un [ENEMY]ennemi[/ENEMY] inflige trois fois plus de dégâts. [SHAKE]Sarmuraï a une très mauvaise mémoire, donc changer de cible réinitialise l'effet.[/SHAKE]`, // francés
			`O primeiro ataque contra um [ENEMY]inimigo[/ENEMY] causa o triplo de dano. [SHAKE]Golisopod tem uma memória péssima, então trocar de alvo reinicia o efeito.[/SHAKE]`, // portugués
			`Il primo attacco contro un [ENEMY]nemico[/ENEMY] infligge il triplo dei danni. [SHAKE]Golisopod ha una pessima memoria, quindi cambiare bersaglio ne reimposta l'effetto.[/SHAKE]`, // italiano
			`Der erste Angriff auf einen [ENEMY]Gegner[/ENEMY] verursacht dreifachen Schaden. [SHAKE]Golisopod hat ein wirklich schlechtes Gedächtnis, daher setzt ein Zielwechsel den Effekt zurück.[/SHAKE]`, // alemán
			`[ENEMY]敵[/ENEMY]への最初の攻撃は3倍のダメージを与える。[SHAKE]グソクムシャは本当に記憶力が悪いので、対象を変えるとリセットされる。[/SHAKE]`, // japonés
			`[ENEMY]적[/ENEMY]에 대한 첫 번째 공격은 3배의 피해를 줍니다. [SHAKE]갑주무사는 기억력이 정말 나빠서 대상을 바꾸면 초기화됩니다.[/SHAKE]`, // coreano
			`对[ENEMY]敌人[/ENEMY]的第一次攻击造成三倍伤害。[SHAKE]具甲武者的记性非常差，所以更换目标后会重置。[/SHAKE]`, // chino
			`Pierwszy atak na [ENEMY]wroga[/ENEMY] zadaje potrójne obrażenia. [SHAKE]Golisopod ma naprawdę słabą pamięć, więc zmiana celu resetuje efekt.[/SHAKE]` // polaco
		]
	},
	moxie: {
		id: 'moxie',
		name: ['Moxie', 'Autoestima', 'Impudence', 'Arrogância', 'Arroganza', 'Hochmut', 'じしんかじょう', '자기과신', '自信过剩', 'Zuchwałość'],
		description: [
			`During the current wave, each time this [POKEMON]Pokémon[/POKEMON] defeats an [ENEMY]enemy[/ENEMY], its [POWER]power[/POWER] increases by 5%.`, // inglés
			`Durante la oleada actual, cada vez que este [POKEMON]Pokémon[/POKEMON] derrota a un [ENEMY]enemigo[/ENEMY], su [POWER]poder[/POWER] aumenta un 5%.`, // español
			`Pendant la vague actuelle, chaque fois que ce [POKEMON]Pokémon[/POKEMON] bat un [ENEMY]ennemi[/ENEMY], sa [POWER]puissance[/POWER] augmente de 5 %.`, // francés
			`Durante a onda atual, cada vez que este [POKEMON]Pokémon[/POKEMON] derrota um [ENEMY]inimigo[/ENEMY], seu [POWER]poder[/POWER] aumenta em 5%.`, // portugués
			`Durante l'ondata attuale, ogni volta che questo [POKEMON]Pokémon[/POKEMON] sconfigge un [ENEMY]nemico[/ENEMY], la sua [POWER]potenza[/POWER] aumenta del 5%.`, // italiano
			`Während der aktuellen Welle erhöht sich seine [POWER]Kraft[/POWER] jedes Mal um 5 %, wenn dieses [POKEMON]Pokémon[/POKEMON] einen [ENEMY]Gegner[/ENEMY] besiegt.`, // alemán
			`現在のウェーブ中、この[POKEMON]ポケモン[/POKEMON]が[ENEMY]敵[/ENEMY]を倒すたびに、[POWER]威力[/POWER]が5%上がる。`, // japonés
			`현재 웨이브 동안 이 [POKEMON]포켓몬[/POKEMON]이 [ENEMY]적[/ENEMY]을 쓰러뜨릴 때마다 [POWER]위력[/POWER]이 5% 증가합니다.`, // coreano
			`在当前波次中，该[POKEMON]宝可梦[/POKEMON]每击败一个[ENEMY]敌人[/ENEMY]，[POWER]威力[/POWER]提高5%。`, // chino
			`Podczas bieżącej fali, za każdym razem, gdy ten [POKEMON]Pokémon[/POKEMON] pokona [ENEMY]wroga[/ENEMY], jego [POWER]moc[/POWER] wzrasta o 5%.` // polaco
		]
	},
	armorBreakDoubleShot: {
		id: 'armorBreakDoubleShot',
		name: ['Armor Break DoubleShot', 'Disparo Doble Rompearmadura', 'Double Tir Brise-Armure', 'Disparo Duplo Quebra-Armadura', 'Doppio Colpo Rompicolpo', 'Doppelschuss Rüstungsbrecher', 'アーマーブレイクダブルショット', '방어력파괴 더블샷', '破甲双射', 'Podwójny strzał przebicia pancerza'],
		description: [
			`Shoots [PROJECTILE]projectiles[/PROJECTILE] at up to 2 targets at once. Causes double damage to [ARMOR]armored[/ARMOR] [ENEMY]enemies[/ENEMY].`, // inglés
			`Dispara [PROJECTILE]proyectiles[/PROJECTILE] a un máximo de 2 objetivos a la vez. Inflige el doble de daño a los [ENEMY]enemigos[/ENEMY] con [ARMOR]armadura[/ARMOR].`, // español
			`Tire des [PROJECTILE]projectiles[/PROJECTILE] sur jusqu'à 2 cibles à la fois. Inflige deux fois plus de dégâts aux [ENEMY]ennemis[/ENEMY] [ARMOR]blindés[/ARMOR].`, // francés
			`Dispara [PROJECTILE]projéteis[/PROJECTILE] contra até 2 alvos ao mesmo tempo. Causa o dobro de dano aos [ENEMY]inimigos[/ENEMY] [ARMOR]blindados[/ARMOR].`, // portugués
			`Spara [PROJECTILE]proiettili[/PROJECTILE] contro un massimo di 2 bersagli alla volta. Infligge il doppio dei danni agli [ENEMY]nemici[/ENEMY] [ARMOR]corazzati[/ARMOR].`, // italiano
			`Schießt [PROJECTILE]Projektile[/PROJECTILE] auf bis zu 2 Ziele gleichzeitig. Verursacht doppelten Schaden bei [ARMOR]gepanzerten[/ARMOR] [ENEMY]Gegnern[/ENEMY].`, // alemán
			`最大2体の対象に同時に[PROJECTILE]弾[/PROJECTILE]を発射する。[ARMOR]アーマー[/ARMOR]を持つ[ENEMY]敵[/ENEMY]には2倍のダメージを与える。`, // japonés
			`최대 2개의 대상에게 동시에 [PROJECTILE]투사체[/PROJECTILE]를 발사합니다. [ARMOR]방어구[/ARMOR]를 가진 [ENEMY]적[/ENEMY]에게는 2배의 피해를 줍니다.`, // coreano
			`同时向最多2个目标发射[PROJECTILE]投射物[/PROJECTILE]。对具有[ARMOR]护甲[/ARMOR]的[ENEMY]敌人[/ENEMY]造成双倍伤害。`, // chino
			`Strzela [PROJECTILE]pociskami[/PROJECTILE] do maksymalnie 2 celów jednocześnie. Zadaje podwójne obrażenia [ARMOR]opancerzonym[/ARMOR] [ENEMY]wrogom[/ENEMY].` // polaco
		]
	},
	willOWisp: {
		id: 'willOWisp',
		name: ["Will-O-Wisp", "Fuego Fatuo", "Feu Follet", "Fogo-Fátuo", "Fuoco Fatuo", "Irrlicht", "おにび", "위험불꽃", "鬼火", "Ognik"],
		description: [
			`If the target is [CURSE]cursed[/CURSE], deals damage to all [ENEMY]cursed enemies[/ENEMY] and [BURN]burns[/BURN] them.`, // inglés
			`Si el objetivo está [CURSE]maldito[/CURSE], inflige daño a todos los [ENEMY]enemigos malditos[/ENEMY] y los [BURN]quema[/BURN].`, // español
			`Si la cible est [CURSE]maudite[/CURSE], inflige des dégâts à tous les [ENEMY]ennemis maudits[/ENEMY] et les [BURN]brûle[/BURN].`, // francés
			`Se o alvo estiver [CURSE]amaldiçoado[/CURSE], causa dano a todos os [ENEMY]inimigos amaldiçoados[/ENEMY] e os [BURN]queima[/BURN].`, // portugués
			`Se il bersaglio è [CURSE]maledetto[/CURSE], infligge danni a tutti i [ENEMY]nemici maledetti[/ENEMY] e li [BURN]brucia[/BURN].`, // italiano
			`Wenn das Ziel [CURSE]verflucht[/CURSE] ist, fügt es allen [ENEMY]verfluchten Gegnern[/ENEMY] Schaden zu und [BURN]verbrennt[/BURN] sie.`, // alemán
			`対象が[CURSE]のろい[/CURSE]状態なら、すべての[ENEMY]のろい状態の敵[/ENEMY]にダメージを与え、[BURN]やけど[/BURN]させる。`, // japonés
			`대상이 [CURSE]저주[/CURSE] 상태라면 모든 [ENEMY]저주받은 적[/ENEMY]에게 피해를 주고 [BURN]화상[/BURN]을 입힙니다.`, // coreano
			`如果目标处于[CURSE]诅咒[/CURSE]状态，则对所有[ENEMY]被诅咒的敌人[/ENEMY]造成伤害并使其[BURN]灼伤[/BURN]。`, // chino
			`Jeśli cel jest [CURSE]przeklęty[/CURSE], zadaje obrażenia wszystkim [ENEMY]przeklętym wrogom[/ENEMY] i [BURN]podpala[/BURN] ich.` // polaco
		]
	},
	sniper: {
		id: 'sniper',
		name: ["Sniper", "Francotirador", "Sniper", "Atirador de Elite", "Cecchino", "Scharfschütze", "スナイパー", "저격수", "狙击手", "Snajper"],
		description: [
			`The [PROJECTILE]projectile[/PROJECTILE] multiplies its damage by 2 for every 150 units of distance traveled.`, // inglés
			`El [PROJECTILE]proyectil[/PROJECTILE] multiplica su daño por 2 por cada 150 unidades de distancia recorridas.`, // español
			`Le [PROJECTILE]projectile[/PROJECTILE] multiplie ses dégâts par 2 pour chaque tranche de 150 unités de distance parcourue.`, // francés
			`O [PROJECTILE]projétil[/PROJECTILE] multiplica seu dano por 2 a cada 150 unidades de distância percorridas.`, // portugués
			`Il [PROJECTILE]proiettile[/PROJECTILE] moltiplica i suoi danni per 2 ogni 150 unità di distanza percorsa.`, // italiano
			`Das [PROJECTILE]Projektil[/PROJECTILE] multipliziert seinen Schaden für jeweils 150 zurückgelegte Distanzeinheiten mit 2.`, // alemán
			`[PROJECTILE]投射物[/PROJECTILE]は、移動した距離150単位ごとにダメージが2倍になる。`, // japonés
			`[PROJECTILE]투사체[/PROJECTILE]는 이동한 거리 150 단위마다 피해량이 2배가 됩니다.`, // coreano
			`[PROJECTILE]投射物[/PROJECTILE]每移动150单位距离，造成的伤害就会翻倍。`, // chino
			`[PROJECTILE]Pocisk[/PROJECTILE] podwaja swoje obrażenia za każde 150 jednostek przebytej odległości.` // polaco
		]
	},
	toughClaws: {
		id: 'toughClaws',
		name: ["Tough Claws", "Garra Dura", "Griffe Dure", "Garras Firmes", "Unghiedure", "Krallenwucht", "かたいツメ", "단단한발톱", "硬爪", "Twarde Pazury"],
		description: [
			`Increases [POWER]power[/POWER] by 50% if located on [MOUNTAIN]mountain[/MOUNTAIN]. Sets its [CRITICAL]critical chance[/CRITICAL] to 100% if located on [GRASS]grass[/GRASS].`, // inglés
			`Aumenta el [POWER]poder[/POWER] un 50% si está situado en una [MOUNTAIN]montaña[/MOUNTAIN]. Establece su [CRITICAL]probabilidad de golpe crítico[/CRITICAL] en un 100% si está situado sobre [GRASS]hierba[/GRASS].`, // español
			`Augmente la [POWER]puissance[/POWER] de 50 % s'il est placé sur une [MOUNTAIN]montagne[/MOUNTAIN]. Fixe ses [CRITICAL]chances de coup critique[/CRITICAL] à 100 % s'il est placé sur de l'[GRASS]herbe[/GRASS].`, // francés
			`Aumenta o [POWER]poder[/POWER] em 50% se estiver em uma [MOUNTAIN]montanha[/MOUNTAIN]. Define sua [CRITICAL]chance de golpe crítico[/CRITICAL] em 100% se estiver na [GRASS]grama[/GRASS].`, // portugués
			`Aumenta la [POWER]potenza[/POWER] del 50% se si trova su una [MOUNTAIN]montagna[/MOUNTAIN]. Imposta la sua [CRITICAL]probabilità di colpo critico[/CRITICAL] al 100% se si trova sull'[GRASS]erba[/GRASS].`, // italiano
			`Erhöht die [POWER]Kraft[/POWER] um 50 %, wenn es auf einem [MOUNTAIN]Berg[/MOUNTAIN] steht. Setzt seine [CRITICAL]Chance auf kritische Treffer[/CRITICAL] auf 100 %, wenn es auf [GRASS]Gras[/GRASS] steht.`, // alemán
			`[MOUNTAIN]山[/MOUNTAIN]にいると、[POWER]威力[/POWER]が50%上がる。[GRASS]草むら[/GRASS]にいると、[CRITICAL]急所率[/CRITICAL]が100%になる。`, // japonés
			`[MOUNTAIN]산[/MOUNTAIN]에 배치하면 [POWER]위력[/POWER]이 50% 증가합니다. [GRASS]풀[/GRASS] 위에 배치하면 [CRITICAL]치명타 확률[/CRITICAL]이 100%가 됩니다.`, // coreano
			`位于[MOUNTAIN]山地[/MOUNTAIN]时，[POWER]威力[/POWER]提高50%。位于[GRASS]草地[/GRASS]时，[CRITICAL]暴击率[/CRITICAL]变为100%。`, // chino
			`Zwiększa [POWER]moc[/POWER] o 50%, gdy znajduje się na [MOUNTAIN]górze[/MOUNTAIN]. Ustawia [CRITICAL]szansę na trafienie krytyczne[/CRITICAL] na 100%, gdy znajduje się na [GRASS]trawie[/GRASS].` // polaco
		]
	},
	toughClawsDay: {
		id: 'toughClawsDay',
		name: ["Tough Claws", "Garra Dura", "Griffe Dure", "Garras Firmes", "Unghiedure", "Krallenwucht", "かたいツメ", "단단한발톱", "硬爪", "Twarde Pazury"],
		description: [
			`Increases [POWER]power[/POWER] by 50% and sets its [CRITICAL]critical chance[/CRITICAL] to 100% if located on [MOUNTAIN]mountain[/MOUNTAIN].`, // inglés
			`Aumenta el [POWER]poder[/POWER] un 50% y establece su [CRITICAL]probabilidad de golpe crítico[/CRITICAL] en un 100% si está situado en una [MOUNTAIN]montaña[/MOUNTAIN].`, // español
			`Augmente la [POWER]puissance[/POWER] de 50 % et fixe ses [CRITICAL]chances de coup critique[/CRITICAL] à 100 % s'il est placé sur une [MOUNTAIN]montagne[/MOUNTAIN].`, // francés
			`Aumenta o [POWER]poder[/POWER] em 50% e define sua [CRITICAL]chance de golpe crítico[/CRITICAL] em 100% se estiver em uma [MOUNTAIN]montanha[/MOUNTAIN].`, // portugués
			`Aumenta la [POWER]potenza[/POWER] del 50% e imposta la sua [CRITICAL]probabilità di colpo critico[/CRITICAL] al 100% se si trova su una [MOUNTAIN]montagna[/MOUNTAIN].`, // italiano
			`Erhöht die [POWER]Kraft[/POWER] um 50 % und setzt seine [CRITICAL]Chance auf kritische Treffer[/CRITICAL] auf 100 %, wenn es auf einem [MOUNTAIN]Berg[/MOUNTAIN] steht.`, // alemán
			`[MOUNTAIN]山[/MOUNTAIN]にいると、[POWER]威力[/POWER]が50%上がり、[CRITICAL]急所率[/CRITICAL]が100%になる。`, // japonés
			`[MOUNTAIN]산[/MOUNTAIN]에 배치하면 [POWER]위력[/POWER]이 50% 증가하고 [CRITICAL]치명타 확률[/CRITICAL]이 100%가 됩니다.`, // coreano
			`位于[MOUNTAIN]山地[/MOUNTAIN]时，[POWER]威力[/POWER]提高50%，并将[CRITICAL]暴击率[/CRITICAL]设为100%。`, // chino
			`Zwiększa [POWER]moc[/POWER] o 50% i ustawia [CRITICAL]szansę na trafienie krytyczne[/CRITICAL] na 100%, gdy znajduje się na [MOUNTAIN]górze[/MOUNTAIN].` // polaco
		]
	},
	toughClawsNight: {
		id: 'toughClawsNight',
		name: ["Tough Claws", "Garra Dura", "Griffe Dure", "Garras Firmes", "Unghiedure", "Krallenwucht", "かたいツメ", "단단한발톱", "硬爪", "Twarde Pazury"],
		description: [
			`Increases [POWER]power[/POWER] by 50% and sets its [CRITICAL]critical chance[/CRITICAL] to 100% if located on [GRASS]grass[/GRASS].`, // inglés
			`Aumenta el [POWER]poder[/POWER] un 50% y establece su [CRITICAL]probabilidad de golpe crítico[/CRITICAL] en un 100% si está situado sobre [GRASS]hierba[/GRASS].`, // español
			`Augmente la [POWER]puissance[/POWER] de 50 % et fixe ses [CRITICAL]chances de coup critique[/CRITICAL] à 100 % s'il est placé sur de l'[GRASS]herbe[/GRASS].`, // francés
			`Aumenta o [POWER]poder[/POWER] em 50% e define sua [CRITICAL]chance de golpe crítico[/CRITICAL] em 100% se estiver na [GRASS]grama[/GRASS].`, // portugués
			`Aumenta la [POWER]potenza[/POWER] del 50% e imposta la sua [CRITICAL]probabilità di colpo critico[/CRITICAL] al 100% se si trova sull'[GRASS]erba[/GRASS].`, // italiano
			`Erhöht die [POWER]Kraft[/POWER] um 50 % und setzt seine [CRITICAL]Chance auf kritische Treffer[/CRITICAL] auf 100 %, wenn es auf [GRASS]Gras[/GRASS] steht.`, // alemán
			`[GRASS]草むら[/GRASS]にいると、[POWER]威力[/POWER]が50%上がり、[CRITICAL]急所率[/CRITICAL]が100%になる。`, // japonés
			`[GRASS]풀[/GRASS] 위에 배치하면 [POWER]위력[/POWER]이 50% 증가하고 [CRITICAL]치명타 확률[/CRITICAL]이 100%가 됩니다.`, // coreano
			`位于[GRASS]草地[/GRASS]时，[POWER]威力[/POWER]提高50%，并将[CRITICAL]暴击率[/CRITICAL]设为100%。`, // chino
			`Zwiększa [POWER]moc[/POWER] o 50% i ustawia [CRITICAL]szansę na trafienie krytyczne[/CRITICAL] na 100%, gdy znajduje się na [GRASS]trawie[/GRASS].` // polaco
		]
	},
	triage: {
		id: 'triage',
		name: ["Triage", "Primer Auxilio", "Prioguérison", "Triagem", "Primacura", "Heilwandel", "ヒーリングシフト", "힐링시프트", "先制治疗", "Pierwsza Pomoc"],
		description: [
			`Reduces the [SPEED]recharge time[/SPEED] of nearby [TOWER]towers[/TOWER] by 15%. At the end of the wave, has a 5% chance to recover 1 [HEART]heart[/HEART].`, // inglés
			`Reduce el [SPEED]tiempo de recarga[/SPEED] de las [TOWER]torres[/TOWER] cercanas un 15%. Al final de la oleada, tiene un 5% de probabilidad de recuperar 1 [HEART]corazón[/HEART].`, // español
			`Réduit le [SPEED]temps de recharge[/SPEED] des [TOWER]tours[/TOWER] proches de 15 %. À la fin de la vague, a 5 % de chances de récupérer 1 [HEART]cœur[/HEART].`, // francés
			`Reduz o [SPEED]tempo de recarga[/SPEED] das [TOWER]torres[/TOWER] próximas em 15%. No final da vaga, tem 5% de chance de recuperar 1 [HEART]coração[/HEART].`, // portugués
			`Riduce il [SPEED]tempo di ricarica[/SPEED] delle [TOWER]torri[/TOWER] vicine del 15%. Alla fine dell'ondata, ha il 5% di probabilità di recuperare 1 [HEART]cuore[/HEART].`, // italiano
			`Verringert die [SPEED]Aufladezeit[/SPEED] nahegelegener [TOWER]Türme[/TOWER] um 15 %. Am Ende der Welle besteht eine Chance von 5 %, 1 [HEART]Herz[/HEART] zurückzugewinnen.`, // alemán
			`近くの[TOWER]タワー[/TOWER]の[SPEED]再チャージ時間[/SPEED]が15%短縮される。ウェーブ終了時に、5%の確率で[HEART]ハート[/HEART]を1つ回復する。`, // japonés
			`주변 [TOWER]타워[/TOWER]의 [SPEED]재충전 시간[/SPEED]이 15% 감소한다. 웨이브 종료 시 5% 확률로 [HEART]하트[/HEART]를 1개 회복한다.`, // coreano
			`附近[TOWER]塔[/TOWER]的[SPEED]充能时间[/SPEED]缩短15%。波次结束时，有5%的概率恢复1颗[HEART]心心[/HEART]。`, // chino
			`Skraca [SPEED]czas odnowienia[/SPEED] pobliskich [TOWER]wież[/TOWER] o 15%. Na koniec fali ma 5% szans na odzyskanie 1 [HEART]serca[/HEART].` // polaco
		]
	},
	scheme: {
		id: 'scheme',
		name: ["Sketch", "Esbozo", "Gribouille", "Esboço", "Schizzo", "Nachahmer", "スケッチ", "스케치", "写生", "Intryga"],
		description: [
			`Each [PROJECTILE]projectile[/PROJECTILE] has a 1/9000 chance to turn a [POKEMON]Pokémon[/POKEMON] that is in its final evolutionary stage [ADMIN]shiny[/ADMIN].`, // inglés
			`Cada [PROJECTILE]proyectil[/PROJECTILE] tiene una probabilidad de 1 entre 9000 de convertir en [ADMIN]variocolor[/ADMIN] a un [POKEMON]Pokémon[/POKEMON] que se encuentre en su etapa evolutiva final.`, // español
			`Chaque [PROJECTILE]projectile[/PROJECTILE] a une chance sur 9000 de rendre [ADMIN]chromatique[/ADMIN] un [POKEMON]Pokémon[/POKEMON] ayant atteint son stade évolutif final.`, // francés
			`Cada [PROJECTILE]projétil[/PROJECTILE] tem uma probabilidade de 1 em 9000 de tornar [ADMIN]brilhante[/ADMIN] um [POKEMON]Pokémon[/POKEMON] que esteja na sua fase evolutiva final.`, // portugués
			`Ogni [PROJECTILE]proiettile[/PROJECTILE] ha una probabilità su 9000 di rendere [ADMIN]cromatico[/ADMIN] un [POKEMON]Pokémon[/POKEMON] che si trova nella sua fase evolutiva finale.`, // italiano
			`Jedes [PROJECTILE]Projektil[/PROJECTILE] hat eine Chance von 1 zu 9000, ein [POKEMON]Pokémon[/POKEMON] in seiner letzten Entwicklungsstufe [ADMIN]schillernd[/ADMIN] zu machen.`, // alemán
			`[PROJECTILE]弾[/PROJECTILE]が、最終進化段階にある[POKEMON]ポケモン[/POKEMON]を[ADMIN]色違い[/ADMIN]にする確率は1/9000。`, // japonés
			`각 [PROJECTILE]투사체[/PROJECTILE]는 최종 진화 단계에 있는 [POKEMON]포켓몬[/POKEMON]을 [ADMIN]색이 다른 포켓몬[/ADMIN]으로 만들 확률이 1/9000이다.`, // coreano
			`每个[PROJECTILE]投射物[/PROJECTILE]都有1/9000的概率将处于最终进化阶段的[POKEMON]宝可梦[/POKEMON]变为[ADMIN]闪光[/ADMIN]宝可梦。`, // chino
			`Każdy [PROJECTILE]pocisk[/PROJECTILE] ma szansę 1 na 9000, by zmienić [POKEMON]Pokémona[/POKEMON] w ostatnim stadium ewolucji w [ADMIN]błyszczącego[/ADMIN] Pokémona.` // polaco
		]
	},
	doubleShotSand: {
		id: 'doubleShotSand',
		name: ['Double Shot', 'Disparo Doble', 'Tir Double', 'Tiro Duplo', 'Doppio Colpo', 'Doppelschuss', 'ダブルショット', '더블 샷', '雙重射擊', 'Podwójny Strzał'],
		description: [
			`Shoots [PROJECTILE]projectiles[/PROJECTILE] at up to 2 targets at once. Increases [RANGE]range[/RANGE] by 100% in [MAP]Routes 2, 6 and 10[/MAP].`, // inglés
			`Dispara [PROJECTILE]proyectiles[/PROJECTILE] a un máximo de 2 objetivos a la vez. Aumenta el [RANGE]rango[/RANGE] un 100% en las [MAP]Rutas 2, 6 y 10[/MAP].`, // español
			`Tire des [PROJECTILE]projectiles[/PROJECTILE] sur jusqu'à 2 cibles à la fois. Augmente la [RANGE]portée[/RANGE] de 100 % sur les [MAP]Routes 2, 6 et 10[/MAP].`, // francés
			`Dispara [PROJECTILE]projéteis[/PROJECTILE] contra até 2 alvos ao mesmo tempo. Aumenta o [RANGE]alcance[/RANGE] em 100% nas [MAP]Rotas 2, 6 e 10[/MAP].`, // portugués
			`Spara [PROJECTILE]proiettili[/PROJECTILE] contro un massimo di 2 bersagli alla volta. Aumenta la [RANGE]portata[/RANGE] del 100% nei [MAP]Percorsi 2, 6 e 10[/MAP].`, // italiano
			`Schießt [PROJECTILE]Projektile[/PROJECTILE] auf bis zu 2 Ziele gleichzeitig. Erhöht die [RANGE]Reichweite[/RANGE] auf den [MAP]Routen 2, 6 und 10[/MAP] um 100 %.`, // alemán
			`最大2体の対象に同時に[PROJECTILE]投射物[/PROJECTILE]を発射する。[MAP]ルート2、6、10[/MAP]では[RANGE]射程[/RANGE]が100%上がる。`, // japonés
			`최대 2명의 대상에게 동시에 [PROJECTILE]투사체[/PROJECTILE]를 발사합니다. [MAP]루트 2, 6, 10[/MAP]에서 [RANGE]사거리[/RANGE]가 100% 증가합니다.`, // coreano
			`同时向最多2个目标发射[PROJECTILE]投射物[/PROJECTILE]。在[MAP]路线2、6、10[/MAP]中，[RANGE]攻击范围[/RANGE]提高100%。`, // chino
			`Wystrzeliwuje [PROJECTILE]pociski[/PROJECTILE] w maksymalnie 2 cele jednocześnie. Zwiększa [RANGE]zasięg[/RANGE] o 100% na [MAP]Trasach 2, 6 i 10[/MAP].` // polaco
		]
	},
	quadraShotSand: {
		id: 'quadraShotSand',
		name: ['Quadra Shot', 'Disparo Cuádruple', 'Tir Quadruple', 'Tiro Quádruplo', 'Quadruplo Colpo', 'Vierfachschuss', 'クアドラショット', '쿼드라 샷', '四重射击', 'Poczwórny Strzał'],
		description: [
			`Shoots [PROJECTILE]projectiles[/PROJECTILE] at up to 4 targets at once. Increases [RANGE]range[/RANGE] by 100% in [MAP]Routes 2, 6 and 10[/MAP].`, // inglés
			`Dispara [PROJECTILE]proyectiles[/PROJECTILE] a un máximo de 4 objetivos a la vez. Aumenta el [RANGE]rango[/RANGE] un 100% en las [MAP]Rutas 2, 6 y 10[/MAP].`, // español
			`Tire des [PROJECTILE]projectiles[/PROJECTILE] sur jusqu'à 4 cibles à la fois. Augmente la [RANGE]portée[/RANGE] de 100 % sur les [MAP]Routes 2, 6 et 10[/MAP].`, // francés
			`Dispara [PROJECTILE]projéteis[/PROJECTILE] contra até 4 alvos ao mesmo tempo. Aumenta o [RANGE]alcance[/RANGE] em 100% nas [MAP]Rotas 2, 6 e 10[/MAP].`, // portugués
			`Spara [PROJECTILE]proiettili[/PROJECTILE] contro un massimo di 4 bersagli alla volta. Aumenta la [RANGE]portata[/RANGE] del 100% nei [MAP]Percorsi 2, 6 e 10[/MAP].`, // italiano
			`Schießt [PROJECTILE]Projektile[/PROJECTILE] auf bis zu 4 Ziele gleichzeitig. Erhöht die [RANGE]Reichweite[/RANGE] auf den [MAP]Routen 2, 6 und 10[/MAP] um 100 %.`, // alemán
			`最大4体の対象に同時に[PROJECTILE]投射物[/PROJECTILE]を発射する。[MAP]ルート2、6、10[/MAP]では[RANGE]射程[/RANGE]が100%上がる。`, // japonés
			`최대 4명의 대상에게 동시에 [PROJECTILE]투사체[/PROJECTILE]를 발사합니다. [MAP]루트 2, 6, 10[/MAP]에서 [RANGE]사거리[/RANGE]가 100% 증가합니다.`, // coreano
			`同时向最多4个目标发射[PROJECTILE]投射物[/PROJECTILE]。在[MAP]路线2、6、10[/MAP]中，[RANGE]攻击范围[/RANGE]提高100%。`, // chino
			`Wystrzeliwuje [PROJECTILE]pociski[/PROJECTILE] w maksymalnie 4 cele jednocześnie. Zwiększa [RANGE]zasięg[/RANGE] o 100% na [MAP]Trasach 2, 6 i 10[/MAP].` // polaco
		]
	},
	chatter: {
		id: 'chatter',
		name: ["Chatter", "Cháchara", "Babil", "Tagarelice", "Schiamazzo", "Geschwätz", "おしゃべり", "수다", "聒噪", "Gadanina"],
		description: [
			`Deals 5% less damage for each volume point reduced in the sound effects settings.`, // inglés
			`Causa un 5% menos de daño por cada punto de volumen reducido en los efectos de sonido.`, // español
			`Inflige 5 % de dégâts en moins pour chaque point de volume réduit dans les effets sonores.`, // francés
			`Causa 5% menos de dano para cada ponto de volume reduzido nos efeitos sonoros.`, // portugués
			`Infligge il 5% di danni in meno per ogni punto di volume ridotto negli effetti sonori.`, // italiano
			`Verursacht 5 % weniger Schaden für jeden reduzierten Lautstärkepunkt bei den Soundeffekten.`, // alemán
			`サウンドエフェクトの音量を1ポイント下げるごとに、与えるダメージが5%減少する。`, // japonés
			`사운드 효과의 볼륨을 1포인트 낮출 때마다 주는 피해가 5% 감소합니다.`, // coreano
			`音效音量每降低1点，造成的伤害就降低5%。`, // chino
			`Zadaje o 5% mniej obrażeń za każdy punkt zmniejszenia głośności efektów dźwiękowych.` // polaco
		]
	},
	speedBoost: {
		id: 'speedBoost',
		name: ["Speed Boost", "Impulso", "Turbo", "Impulso", "Velocità +", "Tempomacher", "スピードブースト", "스피드 부스트", "加速", "Przyśpieszenie"],
		description: [
		    `Each attack reduces [SPEED]recharge time[/SPEED] by 0.3 seconds, stackable up to 10 times per wave.`, // inglés
			`Cada ataque reduce el [SPEED]tiempo de recarga[/SPEED] en 0,3 segundos, acumulable hasta 10 veces por oleada.`, // español
			`Chaque attaque réduit le [SPEED]temps de recharge[/SPEED] de 0,3 seconde, cumulable jusqu'à 10 fois par vague.`, // francés
			`Cada ataque reduz o [SPEED]tempo de recarga[/SPEED] em 0,3 segundos, acumulável até 10 vezes por onda.`, // portugués
			`Ogni attacco riduce il [SPEED]tempo di ricarica[/SPEED] di 0,3 secondi, cumulabile fino a 10 volte per ondata.`, // italiano
			`Jeder Angriff reduziert die [SPEED]Aufladezeit[/SPEED] um 0,3 Sekunden, bis zu 10-mal pro Welle stapelbar.`, // alemán
			`攻撃するたびに[SPEED]再使用時間[/SPEED]が0.3秒短くなる。ウェーブごとに最大10回まで蓄積する。`, // japonés
			`공격할 때마다 [SPEED]재사용 대기 시간[/SPEED]이 0.3초 감소하며, 웨이브당 최대 10회까지 중첩됩니다.`, // coreano
			`每次攻击使[SPEED]冷却时间[/SPEED]缩短0.3秒，每个波次最多可叠加10次。`, // chino
			`Każdy atak skraca [SPEED]czas odnowienia[/SPEED] o 0,3 sekundy, kumulując się do 10 razy na falę.` // polaco
		]
	},
	simple: {
		id: 'simple',
		name: [
		  	"Simple",
		  	"Simple",
		  	"Simple",
		  	"Simple",
		  	"Disinvoltura",
		  	"Wankelmut",
		  	"たんじゅん",
		  	"단순",
		  	"单纯",
		  	"Simple"
		],
		description: [
		    `Boosts the positive and negative effects of [ITEM]items[/ITEM] by 75%.`, // inglés
			`Aumenta un 75% los efectos positivos y negativos de los [ITEM]objetos[/ITEM].`, // español
			`Augmente de 75 % les effets positifs et négatifs des [ITEM]objets[/ITEM].`, // francés
			`Aumenta em 75% os efeitos positivos e negativos dos [ITEM]itens[/ITEM].`, // portugués
			`Aumenta del 75% gli effetti positivi e negativi degli [ITEM]strumenti[/ITEM].`, // italiano
			`Verstärkt die positiven und negativen Effekte von [ITEM]Items[/ITEM] um 75 %.`, // alemán
			`[ITEM]どうぐ[/ITEM]のプラス効果とマイナス効果を75%上げる。`, // japonés
			`[ITEM]도구[/ITEM]의 긍정적인 효과와 부정적인 효과를 75% 증가시킵니다.`, // coreano
			`使[ITEM]道具[/ITEM]的正面和负面效果提高75%。`, // chino
			`Zwiększa pozytywne i negatywne efekty [ITEM]przedmiotów[/ITEM] o 75%.` // polaco
		]
	},
	drizzle: {
		id: 'drizzle',
		name: [
		  	"Drizzle",
			"Llovizna",
			"Crachin",
			"Chuvisco",
			"Piovischio",
			"Niesel",
			"あめふらし",
			"잔비",
			"降雨",
			"Drizzle"
		],
		description: [
		    `Applies [RAIN]Rain weather[/RAIN].`, // inglés
			`Aplica el [RAIN]clima de lluvia[/RAIN].`, // español
			`Applique le [RAIN]climat pluvieux[/RAIN].`, // francés
			`Aplica o [RAIN]clima de chuva[/RAIN].`, // portugués
			`Applica il [RAIN]meteo piovoso[/RAIN].`, // italiano
			`Verursacht [RAIN]Regenwetter[/RAIN].`, // alemán
			`[RAIN]雨[/RAIN]の天候にする。`, // japonés
			`[RAIN]비[/RAIN] 날씨를 적용합니다.`, // coreano
			`施加[RAIN]下雨[/RAIN]天气。`, // chino
			`Ustawia [RAIN]deszczową pogodę[/RAIN].` // polaco
		]
	},
	drought: {
		id: 'drought',
		name: [
		  	'Drought',       // Inglés
			'Sequía',        // Español
			'Sécheresse',    // Francés
			'Seca',          // Portugués
			'Siccità',       // Italiano
			'Dürre',         // Alemán
			'ひでり',          // Japonés (Hideri)
			'가뭄',            // Coreano (Gamum)
			'乾旱',            // Chino tradicional
			'Susza'          // Polaco
		],
		description: [
			`Deals [PERS]damage over time[/PERS] in a [SHAPE]cone[/SHAPE], hitting multiple [ENEMY]enemies[/ENEMY] and having a 10% chance to inflict [BURN]burn[/BURN]. Applies [SUN]Harsh Sunlight weather[/SUN].`, // inglés
			`Causa [PERS]daño persistente[/PERS] en un [SHAPE]cono[/SHAPE], golpeando a varios [ENEMY]enemigos[/ENEMY] y con un 10% de probabilidad de causar [BURN]quemadura[/BURN]. Activa el clima [SUN]Sol Abrasador[/SUN].`, // español
			`Inflige des [PERS]dégâts sur la durée[/PERS] dans un [SHAPE]cône[/SHAPE], touchant plusieurs [ENEMY]ennemis[/ENEMY] avec 10 % de chances d'infliger une [BURN]brûlure[/BURN]. Déclenche la météo [SUN]Soleil Intense[/SUN].`, // francés
			`Causa [PERS]dano contínuo[/PERS] em um [SHAPE]cone[/SHAPE], atingindo vários [ENEMY]inimigos[/ENEMY] e tendo 10% de chance de causar [BURN]queimadura[/BURN]. Ativa o clima [SUN]Sol Intenso[/SUN].`, // portugués
			`Infligge [PERS]danni nel tempo[/PERS] in un [SHAPE]cono[/SHAPE], colpendo più [ENEMY]nemici[/ENEMY] e avendo il 10% di probabilità di infliggere [BURN]scottatura[/BURN]. Attiva il meteo [SUN]Sole Intenso[/SUN].`, // italiano
			`Verursacht [PERS]Schaden über Zeit[/PERS] in einem [SHAPE]Kegel[/SHAPE], trifft mehrere [ENEMY]Gegner[/ENEMY] und hat eine Chance von 10 %, [BURN]Verbrennung[/BURN] zu verursachen. Aktiviert das Wetter [SUN]greller Sonnenschein[/SUN].`, // alemán
			`[SHAPE]円錐状[/SHAPE]の範囲内にいる複数の[ENEMY]敵[/ENEMY]に[PERS]継続ダメージ[/PERS]を与え、10%の確率で[BURN]やけど[/BURN]を負わせる。[SUN]強い日差し[/SUN]の天候を発生させる。`, // japonés
			`[SHAPE]원뿔형[/SHAPE] 범위 내 여러 [ENEMY]적[/ENEMY]에게 [PERS]지속 피해[/PERS]를 주며, 10% 확률로 [BURN]화상[/BURN]을 입힌다. [SUN]쾌청[/SUN] 날씨를 발생시킨다.`, // coreano
			`对[SHAPE]锥形[/SHAPE]范围内的多个[ENEMY]敌人[/ENEMY]造成[PERS]持续伤害[/PERS]，并有10%的概率施加[BURN]灼伤[/BURN]。触发[SUN]大晴天[/SUN]天气。`, // chino
			`Zadaje [PERS]obrażenia w czasie[/PERS] w [SHAPE]stożku[/SHAPE], trafiając wielu [ENEMY]wrogów[/ENEMY] i mając 10% szans na nałożenie [BURN]podpalenia[/BURN]. Wywołuje pogodę [SUN]ostrego światła słonecznego[/SUN].` // polaco
		]
	},
	defeatist: {
		id: 'defeatist',
		name: [
		  	"Defeatist",
		  	"Flaqueza",
		  	"Défaitiste",
		  	"Chuvisco",  
		  	"Sconforto",
		  	"Schwächling",
		  	"よわき",
		  	"무기력",
		  	"软弱",
		  	"Defeatist"
		],
		description: [
			`Reduces [POWER]power[/POWER] by 50% if [HEART]hearts[/HEART] are 7 or fewer.`, // inglés
			`Reduce el [POWER]poder[/POWER] un 50% si hay 7 [HEART]corazones[/HEART] o menos.`, // español
			`Réduit la [POWER]puissance[/POWER] de 50 % si le nombre de [HEART]cœurs[/HEART] est inférieur ou égal à 7.`, // francés
			`Reduz o [POWER]poder[/POWER] em 50% se houver 7 [HEART]corações[/HEART] ou menos.`, // portugués
			`Riduce la [POWER]potenza[/POWER] del 50% se ci sono 7 [HEART]cuori[/HEART] o meno.`, // italiano
			`Reduziert die [POWER]Kraft[/POWER] um 50 %, wenn 7 oder weniger [HEART]Herzen[/HEART] vorhanden sind.`, // alemán
			`[HEART]ハート[/HEART]が7個以下の場合、[POWER]威力[/POWER]が50%下がる。`, // japonés
			`[HEART]하트[/HEART]가 7개 이하라면 [POWER]위력[/POWER]이 50% 감소합니다.`, // coreano
			`当[HEART]心[/HEART]数量为7个或更少时，[POWER]威力[/POWER]降低50%。`, // chino
			`Zmniejsza [POWER]moc[/POWER] o 50%, jeśli liczba [HEART]serc[/HEART] wynosi 7 lub mniej.` // polaco
		]
	},
	dreamEater: {
		id: 'dreamEater',
		name: [
		  	"Dream Eater",
		  	"Comesueños",
		  	"Dévorêve",
		  	"Chuvisco",  
		  	"Mangiasogni",
		  	"Traumfresser",
		  	"ゆめくい",
		  	"꿈먹기",
		  	"食梦",
		  	"Dream Eater"
		],
		description: [
		    `Deals 100% more damage to [ENEMY]enemies[/ENEMY] suffering from [NIGHTMARE]Nightmare[/NIGHTMARE].`, // inglés
			`Inflige un 100% más de daño a los [ENEMY]enemigos[/ENEMY] afectados por [NIGHTMARE]Pesadilla[/NIGHTMARE].`, // español
			`Inflige 100 % de dégâts supplémentaires aux [ENEMY]ennemis[/ENEMY] affectés par [NIGHTMARE]Cauchemar[/NIGHTMARE].`, // francés
			`Causa 100% mais dano aos [ENEMY]inimigos[/ENEMY] afetados por [NIGHTMARE]Pesadelo[/NIGHTMARE].`, // portugués
			`Infligge il 100% di danni in più ai [ENEMY]nemici[/ENEMY] affetti da [NIGHTMARE]Incubo[/NIGHTMARE].`, // italiano
			`Verursacht 100 % mehr Schaden an [ENEMY]Gegnern[/ENEMY], die von [NIGHTMARE]Albtraum[/NIGHTMARE] betroffen sind.`, // alemán
			`[NIGHTMARE]あくむ[/NIGHTMARE]状態の[ENEMY]敵[/ENEMY]に100%多くのダメージを与える。`, // japonés
			`[NIGHTMARE]악몽[/NIGHTMARE] 상태인 [ENEMY]적[/ENEMY]에게 100% 더 많은 피해를 줍니다.`, // coreano
			`对受到[NIGHTMARE]噩梦[/NIGHTMARE]影响的[ENEMY]敌人[/ENEMY]造成额外100%的伤害。`, // chino
			`Zadaje o 100% więcej obrażeń [ENEMY]wrogom[/ENEMY] dotkniętym [NIGHTMARE]Koszmarem[/NIGHTMARE].` // polaco
		]
	},
	burnSplash: {
		id: 'burnSplash',
		name: [
			'Burn Splash', 
			'Quemadura Splash', 
			'Brulure Splash', 
			'Queimadura Splash', 
			'Verbrennung Splash', 
			'Langsamer Platscher', 
			'ゆっくりはねる', 
			'느린 첨벙', 
			'緩慢飛濺', 
			'Spowalniający Plusk'
		],

		description: [
			`[PROJECTILE]Projectiles[/PROJECTILE] explode in an [SHAPE]area[/SHAPE], causing half damage to nearby [ENEMY]enemies[/ENEMY] and inflicting [BURN]burns[/BURN].`, // inglés
			`Los [PROJECTILE]proyectiles[/PROJECTILE] explotan en un [SHAPE]área[/SHAPE], infligiendo la mitad de daño a los [ENEMY]enemigos[/ENEMY] cercanos y aplicando [BURN]quemaduras[/BURN].`, // español
			`Les [PROJECTILE]projectiles[/PROJECTILE] explosent dans une [SHAPE]zone[/SHAPE], infligeant la moitié des dégâts aux [ENEMY]ennemis[/ENEMY] proches et infligeant des [BURN]brûlures[/BURN].`, // francés
			`Os [PROJECTILE]projéteis[/PROJECTILE] explodem em uma [SHAPE]área[/SHAPE], causando metade do dano aos [ENEMY]inimigos[/ENEMY] próximos e causando [BURN]queimaduras[/BURN].`, // portugués
			`I [PROJECTILE]proiettili[/PROJECTILE] esplodono in un'[SHAPE]area[/SHAPE], infliggendo metà dei danni ai [ENEMY]nemici[/ENEMY] vicini e infliggendo [BURN]bruciature[/BURN].`, // italiano
			`[PROJECTILE]Projektile[/PROJECTILE] explodieren in einem [SHAPE]Bereich[/SHAPE], verursachen bei [ENEMY]Gegnern[/ENEMY] in der Nähe halben Schaden und fügen ihnen [BURN]Verbrennungen[/BURN] zu.`, // alemán
			`[PROJECTILE]投射物[/PROJECTILE]は[SHAPE]範囲[/SHAPE]で爆発し、近くの[ENEMY]敵[/ENEMY]に半分のダメージを与え、[BURN]やけど[/BURN]を負わせる。`, // japonés
			`[PROJECTILE]투사체[/PROJECTILE]가 [SHAPE]범위[/SHAPE]에서 폭발하여 주변 [ENEMY]적[/ENEMY]에게 절반의 피해를 주고 [BURN]화상[/BURN]을 입힙니다.`, // coreano
			`[PROJECTILE]投射物[/PROJECTILE]会在[SHAPE]范围[/SHAPE]内爆炸，对附近的[ENEMY]敌人[/ENEMY]造成一半伤害并使其[BURN]灼伤[/BURN]。`, // chino
			`[PROJECTILE]Pociski[/PROJECTILE] eksplodują na [SHAPE]obszarze[/SHAPE], zadając połowę obrażeń pobliskim [ENEMY]wrogom[/ENEMY] i wywołując [BURN]podpalenie[/BURN].` // polaco
		]
	},
	fireBlast: {
		id: 'fireBlast',
		name: [
			`Fire Blast`, // inglés
			`Llamarada`, // español
			`Déflagration`, // francés
			`Rajada de Fogo`, // portugués
			`Fuocobomba`, // italiano
			`Feuersturm`, // alemán
			`だいもんじ`, // japonés
			`불대문자`, // coreano
			`大字爆炎`, // chino
			`Ognisty Podmuch` // polaco
		],
		description: [
			`[PROJECTILE]Projectiles[/PROJECTILE] explode in an [SHAPE]area[/SHAPE], causing half damage to nearby [ENEMY]enemies[/ENEMY] and inflicting [BURN]burns[/BURN]. Can [BURN]burn[/BURN] [ENEMY]burn-resistant enemies[/ENEMY].`, // inglés
			`Los [PROJECTILE]proyectiles[/PROJECTILE] explotan en un [SHAPE]área[/SHAPE], infligen la mitad de daño a los [ENEMY]enemigos[/ENEMY] cercanos y causan [BURN]quemaduras[/BURN]. También pueden [BURN]quemar[/BURN] a los [ENEMY]enemigos resistentes a las quemaduras[/ENEMY].`, // español
			`Les [PROJECTILE]projectiles[/PROJECTILE] explosent dans une [SHAPE]zone[/SHAPE], infligeant la moitié des dégâts aux [ENEMY]ennemis[/ENEMY] proches et provoquant des [BURN]brûlures[/BURN]. Ils peuvent aussi [BURN]brûler[/BURN] les [ENEMY]ennemis résistants aux brûlures[/ENEMY].`, // francés
			`Os [PROJECTILE]projéteis[/PROJECTILE] explodem numa [SHAPE]área[/SHAPE], causando metade do dano aos [ENEMY]inimigos[/ENEMY] próximos e provocando [BURN]queimaduras[/BURN]. Também podem [BURN]queimar[/BURN] [ENEMY]inimigos resistentes a queimaduras[/ENEMY].`, // portugués
			`I [PROJECTILE]proiettili[/PROJECTILE] esplodono in un'[SHAPE]area[/SHAPE], infliggendo metà dei danni ai [ENEMY]nemici[/ENEMY] vicini e causando [BURN]scottature[/BURN]. Possono anche [BURN]scottare[/BURN] i [ENEMY]nemici resistenti alle scottature[/ENEMY].`, // italiano
			`[PROJECTILE]Projektile[/PROJECTILE] explodieren in einem [SHAPE]Bereich[/SHAPE], verursachen halben Schaden bei nahegelegenen [ENEMY]Gegnern[/ENEMY] und lösen [BURN]Verbrennungen[/BURN] aus. Sie können auch [ENEMY]gegen Verbrennungen resistente Gegner[/ENEMY] [BURN]verbrennen[/BURN].`, // alemán
			`[PROJECTILE]弾[/PROJECTILE]は[SHAPE]範囲[/SHAPE]内で爆発し、近くの[ENEMY]敵[/ENEMY]に半分のダメージを与えて[BURN]やけど[/BURN]を負わせる。[BURN]やけど[/BURN]に耐性のある[ENEMY]敵[/ENEMY]にもやけどを負わせることができる。`, // japonés
			`[PROJECTILE]투사체[/PROJECTILE]는 [SHAPE]범위[/SHAPE] 안에서 폭발해 주변 [ENEMY]적[/ENEMY]에게 절반의 피해를 주고 [BURN]화상[/BURN]을 입힌다. [BURN]화상[/BURN]에 저항하는 [ENEMY]적[/ENEMY]에게도 화상을 입힐 수 있다.`, // coreano
			`[PROJECTILE]投射物[/PROJECTILE]会在[SHAPE]范围[/SHAPE]内爆炸，对附近的[ENEMY]敌人[/ENEMY]造成一半伤害并施加[BURN]灼伤[/BURN]。也能使对灼伤有抗性的[ENEMY]敌人[/ENEMY]受到[BURN]灼伤[/BURN]。`, // chino
			`[PROJECTILE]Pociski[/PROJECTILE] wybuchają na [SHAPE]obszarze[/SHAPE], zadając połowę obrażeń pobliskim [ENEMY]wrogom[/ENEMY] i nakładając [BURN]podpalenie[/BURN]. Mogą również [BURN]podpalić[/BURN] [ENEMY]wrogów odpornych na podpalenie[/ENEMY].` // polaco
		]
	},
	slowRicochet: {
		id: 'slowRicochet',
		name: [
    		'Slow Ricochet',
    		'Rebote Lento',
    		'Ricochet Lent',
    		'Ricochete Lento',
    		'Rimbalzo Lento',
    		'Langsamer Abpraller',
    		'スローリコシェ',
    		'슬로 리코셰',
    		'緩速跳彈',
    		'Powolny Rykoszet',
		],
		description: [
		    `Attacks [RICOCHET]ricochet[/RICOCHET] between [ENEMY]enemies[/ENEMY] and cause [SLOW]slow[/SLOW] for 2 seconds.`, // inglés
			`Los ataques [RICOCHET]rebotan[/RICOCHET] entre [ENEMY]enemigos[/ENEMY] y causan [SLOW]ralentización[/SLOW] durante 2 segundos.`, // español
			`Les attaques [RICOCHET]ricochent[/RICOCHET] entre les [ENEMY]ennemis[/ENEMY] et provoquent un [SLOW]ralentissement[/SLOW] pendant 2 secondes.`, // francés
			`Os ataques [RICOCHET]ricocheteiam[/RICOCHET] entre os [ENEMY]inimigos[/ENEMY] e causam [SLOW]lentidão[/SLOW] por 2 segundos.`, // portugués
			`Gli attacchi [RICOCHET]rimbalzano[/RICOCHET] tra i [ENEMY]nemici[/ENEMY] e causano [SLOW]rallentamento[/SLOW] per 2 secondi.`, // italiano
			`Angriffe [RICOCHET]prallen[/RICOCHET] zwischen [ENEMY]Gegnern[/ENEMY] ab und verursachen 2 Sekunden lang [SLOW]Verlangsamung[/SLOW].`, // alemán
			`攻撃が[ENEMY]敵[/ENEMY]の間を[RICOCHET]跳ね返り[/RICOCHET]、対象を2秒間[SLOW]遅く[/SLOW]する。`, // japonés
			`공격이 [ENEMY]적[/ENEMY] 사이에서 [RICOCHET]튕겨 나가며[/RICOCHET] 대상을 2초 동안 [SLOW]느려지게[/SLOW] 합니다.`, // coreano
			`攻击会在[ENEMY]敌人[/ENEMY]之间[RICOCHET]弹射[/RICOCHET]，并使目标[SLOW]减速[/SLOW]2秒。`, // chino
			`Ataki [RICOCHET]rykoszetują[/RICOCHET] między [ENEMY]wrogami[/ENEMY] i powodują [SLOW]spowolnienie[/SLOW] na 2 sekundy.` // polaco
		]
	},
	burnRicochet: {
		id: 'burnRicochet',
		name: [
			`Burn Ricochet`, // inglés
			`Rebote ígneo`, // español
			`Ricochet brûlant`, // francés
			`Ricochete flamejante`, // portugués
			`Rimbalzo ardente`, // italiano
			`Brandungs-Abpraller`, // alemán
			`やけどの跳弾`, // japonés
			`화상 도탄`, // coreano
			`灼伤弹射`, // chino
			`Ognisty rykoszet` // polaco
		],
		description: [
			`Attacks [RICOCHET]ricochet[/RICOCHET] between [ENEMY]enemies[/ENEMY] and inflict [BURN]burn[/BURN].`, // inglés
			`Los ataques rebotan entre los [ENEMY]enemigos[/ENEMY] e infligen [BURN]quemadura[/BURN].`, // español
			`Les attaques ricochent entre les [ENEMY]ennemis[/ENEMY] et infligent [BURN]brûlure[/BURN].`, // francés
			`Os ataques ricocheteiam entre os [ENEMY]inimigos[/ENEMY] e provocam [BURN]queimadura[/BURN].`, // portugués
			`Gli attacchi rimbalzano tra i [ENEMY]nemici[/ENEMY] e infliggono [BURN]scottatura[/BURN].`, // italiano
			`Angriffe prallen zwischen [ENEMY]Gegnern[/ENEMY] ab und verursachen [BURN]Verbrennung[/BURN].`, // alemán
			`攻撃が[ENEMY]敵[/ENEMY]の間を[RICOCHET]跳弾[/RICOCHET]し、[BURN]やけど[/BURN]を負わせる。`, // japonés
			`공격이 [ENEMY]적[/ENEMY] 사이를 [RICOCHET]도탄[/RICOCHET]하며 [BURN]화상[/BURN]을 입힌다.`, // coreano
			`攻击会在[ENEMY]敌人[/ENEMY]之间[RICOCHET]弹射[/RICOCHET]，并造成[BURN]灼伤[/BURN]。`, // chino
			`Ataki rykoszetują między [ENEMY]wrogami[/ENEMY] i powodują [BURN]oparzenia[/BURN].` // polaco
		]
	},
	torrent: {
		id: 'torrent',
		name: [
		  	"Torrent",
		  	"Torrente",
		  	"Torrent",
		  	"Torrent",
		  	"Acquaiuto",
		  	"Sturzbach",
		  	"げきりゅう",
		  	"급류",
		  	"激流",
		  	"Strumień"
		],
		description: [
		  	`Increases [POWER]power[/POWER] by 75% if the user is in [WATER]water[/WATER] and has less than [HEART]7 hearts[/HEART].`, // inglés
			`Aumenta el [POWER]poder[/POWER] un 75% si está situado en [WATER]agua[/WATER] y tiene menos de [HEART]7 corazones[/HEART].`, // español
			`Augmente la [POWER]puissance[/POWER] de 75 % s'il est dans l'[WATER]eau[/WATER] et possède moins de [HEART]7 cœurs[/HEART].`, // francés
			`Aumenta o [POWER]poder[/POWER] em 75% se estiver na [WATER]água[/WATER] e tiver menos de [HEART]7 corações[/HEART].`, // portugués
			`Aumenta la [POWER]potenza[/POWER] del 75% se si trova nell'[WATER]acqua[/WATER] e ha meno di [HEART]7 cuori[/HEART].`, // italiano
			`Erhöht die [POWER]Kraft[/POWER] um 75 %, wenn es sich auf [WATER]Wasser[/WATER] befindet und weniger als [HEART]7 Herzen[/HEART] hat.`, // alemán
			`[WATER]水[/WATER]にいて、[HEART]ハート[/HEART]が7個未満の場合、[POWER]威力[/POWER]が75%上がる。`, // japonés
			`[WATER]물[/WATER] 위에 배치되어 있고 [HEART]하트[/HEART]가 7개 미만이면 [POWER]위력[/POWER]이 75% 증가합니다.`, // coreano
			`如果位于[WATER]水[/WATER]中且拥有少于[HEART]7个心[/HEART]，[POWER]威力[/POWER]提高75%。`, // chino
			`Zwiększa [POWER]moc[/POWER] o 75%, gdy znajduje się na [WATER]wodzie[/WATER] i ma mniej niż [HEART]7 serc[/HEART].` // polaco
		]
	},
	overgrow: {
		id: 'overgrow',
		name: [
		    "Overgrow",
		    "Espesura",
		    "Engrais",
		    "Espessaço",
		    "Erbaiuto",
		    "Notdünger",
		    "しんりょく",
		    "잎숨기",
		    "茂盛",
		    "Overgrow"
		],
		description: [
			`Increases [POWER]power[/POWER] dealt by 75% if the user is on [GRASS]grass[/GRASS] and has less than [HEART]7 hearts[/HEART].`, // inglés
			`Aumenta el [POWER]poder[/POWER] infligido un 75% si está situado sobre [GRASS]hierba[/GRASS] y tiene menos de [HEART]7 corazones[/HEART].`, // español
			`Augmente la [POWER]puissance[/POWER] infligée de 75 % s'il est placé sur de l'[GRASS]herbe[/GRASS] et possède moins de [HEART]7 cœurs[/HEART].`, // francés
			`Aumenta o [POWER]poder[/POWER] causado em 75% se estiver na [GRASS]grama[/GRASS] e tiver menos de [HEART]7 corações[/HEART].`, // portugués
			`Aumenta la [POWER]potenza[/POWER] inflitta del 75% se si trova sull'[GRASS]erba[/GRASS] e ha meno di [HEART]7 cuori[/HEART].`, // italiano
			`Erhöht die verursachte [POWER]Kraft[/POWER] um 75 %, wenn es auf [GRASS]Gras[/GRASS] steht und weniger als [HEART]7 Herzen[/HEART] hat.`, // alemán
			`[GRASS]草むら[/GRASS]にいて、[HEART]ハート[/HEART]が7個未満の場合、与える[POWER]威力[/POWER]が75%上がる。`, // japonés
			`[GRASS]풀[/GRASS] 위에 배치되어 있고 [HEART]하트[/HEART]가 7개 미만이면 가하는 [POWER]위력[/POWER]이 75% 증가합니다.`, // coreano
			`如果位于[GRASS]草地[/GRASS]且拥有少于[HEART]7个心[/HEART]，造成的[POWER]威力[/POWER]提高75%。`, // chino
			`Zwiększa zadaną [POWER]moc[/POWER] o 75%, gdy znajduje się na [GRASS]trawie[/GRASS] i ma mniej niż [HEART]7 serc[/HEART].` // polaco
		]
	},
	grassPlatform: {
		id: 'grassPlatform',
		name: [
		    "Grass Platform",      // Inglés
		    "Plataforma de Hierba", // Español
		    "Plateforme Herbe",    // Francés
		    "Plataforma de Grama", // Portugués
		    "Piattaforma Erbosa",  // Italiano
		    "Grasplattform",       // Alemán
		    "くさの足場",             // Japonés
		    "풀 발판",              // Coreano
		    "草平台",               // Chino simplificado
		    "Trawiasta Platforma"  // Polaco
		],
		description: [
			`[FIELD]Field[/FIELD]/[GRASS]Grass[/GRASS] [POKEMON]Pokémon[/POKEMON] can be placed on top of this [POKEMON]Pokémon[/POKEMON]. Carried [POKEMON]Pokémon[/POKEMON] reduces its [SPEED]recharge time[/SPEED] by 15% and gains [GRASS]Grass[/GRASS] bonuses.`, // inglés
			`Los [POKEMON]Pokémon[/POKEMON] de [FIELD]campo[/FIELD]/[GRASS]hierba[/GRASS] pueden colocarse encima de este [POKEMON]Pokémon[/POKEMON]. El [POKEMON]Pokémon[/POKEMON] que lleva reduce su [SPEED]tiempo de recarga[/SPEED] un 15% y obtiene bonificaciones de [GRASS]hierba[/GRASS].`, // español
			`Les [POKEMON]Pokémon[/POKEMON] de [FIELD]champ[/FIELD]/[GRASS]herbe[/GRASS] peuvent être placés sur ce [POKEMON]Pokémon[/POKEMON]. Le [POKEMON]Pokémon[/POKEMON] porté réduit son [SPEED]temps de recharge[/SPEED] de 15 % et bénéficie des bonus d'[GRASS]herbe[/GRASS].`, // francés
			`[POKEMON]Pokémon[/POKEMON] de [FIELD]campo[/FIELD]/[GRASS]grama[/GRASS] podem ser colocados sobre este [POKEMON]Pokémon[/POKEMON]. O [POKEMON]Pokémon[/POKEMON] carregado reduz seu [SPEED]tempo de recarga[/SPEED] em 15% e recebe bônus de [GRASS]grama[/GRASS].`, // portugués
			`I [POKEMON]Pokémon[/POKEMON] di [FIELD]campo[/FIELD]/[GRASS]erba[/GRASS] possono essere posizionati sopra questo [POKEMON]Pokémon[/POKEMON]. Il [POKEMON]Pokémon[/POKEMON] trasportato riduce il suo [SPEED]tempo di ricarica[/SPEED] del 15% e ottiene bonus [GRASS]erba[/GRASS].`, // italiano
			`[FIELD]Feld[/FIELD]/[GRASS]Gras[/GRASS]-[POKEMON]Pokémon[/POKEMON] können auf diesem [POKEMON]Pokémon[/POKEMON] platziert werden. Das getragene [POKEMON]Pokémon[/POKEMON] reduziert seine [SPEED]Aufladezeit[/SPEED] um 15 % und erhält [GRASS]Gras[/GRASS]-Boni.`, // alemán
			`[FIELD]フィールド[/FIELD]/[GRASS]くさ[/GRASS]の[POKEMON]ポケモン[/POKEMON]をこの[POKEMON]ポケモン[/POKEMON]の上に配置できる。乗せた[POKEMON]ポケモン[/POKEMON]は[SPEED]再使用時間[/SPEED]が15%短縮され、[GRASS]くさ[/GRASS]のボーナスを得る。`, // japonés
			`[FIELD]필드[/FIELD]/[GRASS]풀[/GRASS] [POKEMON]포켓몬[/POKEMON]을 이 [POKEMON]포켓몬[/POKEMON] 위에 배치할 수 있습니다. 태운 [POKEMON]포켓몬[/POKEMON]은 [SPEED]재사용 대기시간[/SPEED]이 15% 감소하고 [GRASS]풀[/GRASS] 보너스를 얻습니다.`, // coreano
			`可以放置在[FIELD]原野[/FIELD]/[GRASS]草地[/GRASS]上的[POKEMON]宝可梦[/POKEMON]也可以放在这只[POKEMON]宝可梦[/POKEMON]上方。被携带的[POKEMON]宝可梦[/POKEMON]的[SPEED]充能时间[/SPEED]缩短15%，并获得[GRASS]草地[/GRASS]加成。`, // chino
			`[POKEMON]Pokémony[/POKEMON] z [FIELD]pola[/FIELD]/[GRASS]trawy[/GRASS] mogą być umieszczane na tym [POKEMON]Pokémonie[/POKEMON]. Przenoszony [POKEMON]Pokémon[/POKEMON] skraca swój [SPEED]czas odnowienia[/SPEED] o 15% i otrzymuje bonusy [GRASS]trawy[/GRASS].` // polaco
		]
	},
	icePlatform: {
		id: 'icePlatform',
		name: [
		  'Ice Platform',
		  'Plataforma de Hielo',
		  'Plateforme de Glace',
		  'Plataforma de Gelo',
		  'Piattaforma di Ghiaccio',
		  'Eisplattform',
		  '氷の足場',
		  '얼음 발판',
		  '冰之平台',
		  'Lodowa Platforma'
		],
		description: [
			`[FIELD]Field[/FIELD]/[WATER]Water[/WATER] [POKEMON]Pokémon[/POKEMON] can be placed on top of this [POKEMON]Pokémon[/POKEMON]. Carried [POKEMON]Pokémon[/POKEMON] reduces its [SPEED]recharge time[/SPEED] by 15% and gains [WATER]Water[/WATER] bonuses.`, // inglés
			`Los [POKEMON]Pokémon[/POKEMON] de [FIELD]campo[/FIELD]/[WATER]agua[/WATER] pueden colocarse encima de este [POKEMON]Pokémon[/POKEMON]. El [POKEMON]Pokémon[/POKEMON] que lleva reduce su [SPEED]tiempo de recarga[/SPEED] un 15% y obtiene bonificaciones de [WATER]agua[/WATER].`, // español
			`Les [POKEMON]Pokémon[/POKEMON] de [FIELD]champ[/FIELD]/[WATER]eau[/WATER] peuvent être placés sur ce [POKEMON]Pokémon[/POKEMON]. Le [POKEMON]Pokémon[/POKEMON] porté réduit son [SPEED]temps de recharge[/SPEED] de 15 % et bénéficie des bonus d'[WATER]eau[/WATER].`, // francés
			`[POKEMON]Pokémon[/POKEMON] de [FIELD]campo[/FIELD]/[WATER]água[/WATER] podem ser colocados sobre este [POKEMON]Pokémon[/POKEMON]. O [POKEMON]Pokémon[/POKEMON] carregado reduz seu [SPEED]tempo de recarga[/SPEED] em 15% e recebe bônus de [WATER]água[/WATER].`, // portugués
			`I [POKEMON]Pokémon[/POKEMON] di [FIELD]campo[/FIELD]/[WATER]acqua[/WATER] possono essere posizionati sopra questo [POKEMON]Pokémon[/POKEMON]. Il [POKEMON]Pokémon[/POKEMON] trasportato riduce il suo [SPEED]tempo di ricarica[/SPEED] del 15% e ottiene bonus [WATER]acqua[/WATER].`, // italiano
			`[FIELD]Feld[/FIELD]/[WATER]Wasser[/WATER]-[POKEMON]Pokémon[/POKEMON] können auf diesem [POKEMON]Pokémon[/POKEMON] platziert werden. Das getragene [POKEMON]Pokémon[/POKEMON] reduziert seine [SPEED]Aufladezeit[/SPEED] um 15 % und erhält [WATER]Wasser[/WATER]-Boni.`, // alemán
			`[FIELD]フィールド[/FIELD]/[WATER]みず[/WATER]タイプの[POKEMON]ポケモン[/POKEMON]をこの[POKEMON]ポケモン[/POKEMON]の上に配置できる。乗せた[POKEMON]ポケモン[/POKEMON]は[SPEED]再使用時間[/SPEED]が15%短縮され、[WATER]みず[/WATER]のボーナスを得る。`, // japonés
			`[FIELD]필드[/FIELD]/[WATER]물[/WATER] [POKEMON]포켓몬[/POKEMON]을 이 [POKEMON]포켓몬[/POKEMON] 위에 배치할 수 있습니다. 태운 [POKEMON]포켓몬[/POKEMON]은 [SPEED]재사용 대기시간[/SPEED]이 15% 감소하고 [WATER]물[/WATER] 보너스를 얻습니다.`, // coreano
			`[FIELD]场地[/FIELD]/[WATER]水[/WATER]属性[POKEMON]宝可梦[/POKEMON]可以放置在这只[POKEMON]宝可梦[/POKEMON]上。被携带的[POKEMON]宝可梦[/POKEMON]使自身[SPEED]冷却时间[/SPEED]缩短15%，并获得[WATER]水[/WATER]属性加成。`, // chino
			`[POKEMON]Pokémony[/POKEMON] z [FIELD]pola[/FIELD]/[WATER]wody[/WATER] mogą być umieszczane na tym [POKEMON]Pokémonie[/POKEMON]. Przenoszony [POKEMON]Pokémon[/POKEMON] skraca swój [SPEED]czas odnowienia[/SPEED] o 15% i otrzymuje bonusy [WATER]wody[/WATER].` // polaco
		]
	},
	magician: {
		id: 'magician',
		name: [
		    "Magician",
		    "Prestidigitador",
		    "Magicien",
		    "Mágico",
		    "Prestigiatore",
		    "Zauberer",
		    "マジシャン",
		    "매지션",
		    "魔术师",
		    "Magician"
		],
		description: [
			`Can hold an [ITEM]item[/ITEM] that is already being used by another [POKEMON]Pokémon[/POKEMON].`, // inglés
			`Puede llevar un [ITEM]objeto[/ITEM] que ya esté siendo utilizado por otro [POKEMON]Pokémon[/POKEMON].`, // español
			`Peut tenir un [ITEM]objet[/ITEM] déjà utilisé par un autre [POKEMON]Pokémon[/POKEMON].`, // francés
			`Pode carregar um [ITEM]item[/ITEM] que já esteja sendo usado por outro [POKEMON]Pokémon[/POKEMON].`, // portugués
			`Può tenere uno [ITEM]strumento[/ITEM] già utilizzato da un altro [POKEMON]Pokémon[/POKEMON].`, // italiano
			`Kann ein [ITEM]Item[/ITEM] tragen, das bereits von einem anderen [POKEMON]Pokémon[/POKEMON] verwendet wird.`, // alemán
			`他の[POKEMON]ポケモン[/POKEMON]がすでに使っている[ITEM]どうぐ[/ITEM]を持つことができる。`, // japonés
			`다른 [POKEMON]포켓몬[/POKEMON]이 이미 사용 중인 [ITEM]도구[/ITEM]를 지닐 수 있습니다.`, // coreano
			`可以携带另一个[POKEMON]宝可梦[/POKEMON]已经使用的[ITEM]道具[/ITEM]。`, // chino
			`Może trzymać [ITEM]przedmiot[/ITEM], który jest już używany przez innego [POKEMON]Pokémona[/POKEMON].` // polaco
		]
	},
	makeItRain: {
		id: 'makeItRain',
		name: [
		  	"Make It Rain",
		  	"Fiebre Dorada",
		  	"Ruée d’Or",
		  	"Chuva de Dinheiro",
		  	"Corsa all’Oro",
		  	"Goldrausch",
		  	"ゴールドラッシュ",
		  	"골드러시",
		  	"淘金潮",
		  	"Make It Rain"
		],
		description: [
				`Increases [POWER]power[/POWER] by 7.5% for each digit in your [MONEY]all-time total amount of money[/MONEY].`, // inglés
				`Aumenta el [POWER]poder[/POWER] un 7,5% por cada dígito de tu [MONEY]cantidad total de dinero acumulada[/MONEY].`, // español
				`Augmente la [POWER]puissance[/POWER] de 7,5 % pour chaque chiffre de votre [MONEY]montant total d'argent accumulé[/MONEY].`, // francés
				`Aumenta o [POWER]poder[/POWER] em 7,5% para cada dígito do seu [MONEY]valor total de dinheiro acumulado[/MONEY].`, // portugués
				`Aumenta la [POWER]potenza[/POWER] del 7,5% per ogni cifra della tua [MONEY]quantità totale di denaro accumulata[/MONEY].`, // italiano
				`Erhöht die [POWER]Kraft[/POWER] um 7,5 % für jede Ziffer deines [MONEY]insgesamt angesammelten Geldbetrags[/MONEY].`, // alemán
				`[MONEY]これまでに獲得した総所持金[/MONEY]の桁数1つにつき、[POWER]威力[/POWER]が7.5%上がる。`, // japonés
				`[MONEY]지금까지 모은 총 금액[/MONEY]의 자릿수마다 [POWER]위력[/POWER]이 7.5% 증가합니다.`, // coreano
				`[MONEY]累计总金额[/MONEY]的每一位数字都会使[POWER]威力[/POWER]提高7.5%。`, // chino
				`Zwiększa [POWER]moc[/POWER] o 7,5% za każdą cyfrę w [MONEY]łącznej kwocie zgromadzonych pieniędzy[/MONEY].` // polaco
			]
	},
  	invalidState: {
	    id: "invalidState",
	    name: [
		  	"Invalid State",
		  	"Estado Inválido",
		  	"État Invalide",
		  	"Estado Inválido",
		  	"Stato Non Valido",
		  	"Ungültiger Zustand",
		  	"無効状態",
		  	"잘못된 상태",
		  	"无效状态",
		  	"Nieprawidłowy Stan"
	    ],
    	description: [
	      	`Attacks have a 5% chance to apply a [RANDOMSTATUS]random status[/RANDOMSTATUS].`, // inglés
			`Los ataques tienen un 5% de probabilidad de aplicar un [RANDOMSTATUS]estado alterado aleatorio[/RANDOMSTATUS].`, // español
			`Les attaques ont 5 % de chances d'appliquer une [RANDOMSTATUS]altération de statut aléatoire[/RANDOMSTATUS].`, // francés
			`Os ataques têm 5% de chance de aplicar um [RANDOMSTATUS]efeito de estado aleatório[/RANDOMSTATUS].`, // portugués
			`Gli attacchi hanno una probabilità del 5% di applicare un [RANDOMSTATUS]effetto di stato casuale[/RANDOMSTATUS].`, // italiano
			`Angriffe haben eine Chance von 5 %, einen [RANDOMSTATUS]zufälligen Statuseffekt[/RANDOMSTATUS] anzuwenden.`, // alemán
			`攻撃で5%の確率で[RANDOMSTATUS]ランダムな状態異常[/RANDOMSTATUS]を付与する。`, // japonés
			`공격 시 5% 확률로 [RANDOMSTATUS]무작위 상태 이상[/RANDOMSTATUS]을 부여합니다.`, // coreano
			`攻击有5%的概率施加[RANDOMSTATUS]随机状态异常[/RANDOMSTATUS]。`, // chino
			`Ataki mają 5% szans na nałożenie [RANDOMSTATUS]losowego efektu statusu[/RANDOMSTATUS].` // polaco
	    ]
  	},
  	solarBeam: {
	    id: "solarBeam",
	    name: [
			"Solar Beam",
			"Rayo Solar",
			"Lance-Soleil",
			"Raio Solar",
			"Solarraggio",
			"Solarstrahl",
			"ソーラービーム",
			"솔라빔",
			"阳光烈焰",
			"Promień Solarny"
	    ],
    	description: [
			`Fires a [PROJECTILE]beam[/PROJECTILE] in a straight line, hitting all targets it passes through. Reduces [SPEED]recharge time[/SPEED] by 10% in [SUN]Harsh Sunlight[/SUN] or [BADSUN]Extremely Harsh Sunlight[/BADSUN].`, // inglés
			`Dispara un [PROJECTILE]rayo[/PROJECTILE] en línea recta que golpea a todos los objetivos que atraviesa. Reduce el [SPEED]tiempo de recarga[/SPEED] un 10% bajo [SUN]Sol Abrasador[/SUN] o [BADSUN]Sol Abrasador Extremo[/BADSUN].`, // español
			`Tire un [PROJECTILE]rayon[/PROJECTILE] en ligne droite, touchant toutes les cibles qu'il traverse. Réduit le [SPEED]temps de recharge[/SPEED] de 10 % sous un [SUN]Soleil Intense[/SUN] ou un [BADSUN]Soleil Extrêmement Intense[/BADSUN].`, // francés
			`Dispara um [PROJECTILE]raio[/PROJECTILE] em linha reta, atingindo todos os alvos por onde passa. Reduz o [SPEED]tempo de recarga[/SPEED] em 10% sob [SUN]Sol Intenso[/SUN] ou [BADSUN]Sol Extremamente Intenso[/BADSUN].`, // portugués
			`Spara un [PROJECTILE]raggio[/PROJECTILE] in linea retta, colpendo tutti i bersagli che attraversa. Riduce il [SPEED]tempo di ricarica[/SPEED] del 10% con [SUN]Sole Intenso[/SUN] o [BADSUN]Sole Estremamente Intenso[/BADSUN].`, // italiano
			`Feuert einen [PROJECTILE]Strahl[/PROJECTILE] in gerader Linie ab und trifft alle Ziele, die er durchquert. Verkürzt die [SPEED]Aufladezeit[/SPEED] bei [SUN]greller Sonne[/SUN] oder [BADSUN]extrem greller Sonne[/BADSUN] um 10 %.`, // alemán
			`直線状に[PROJECTILE]ビーム[/PROJECTILE]を発射し、通過したすべての対象に命中する。[SUN]強い日差し[/SUN]または[BADSUN]日差しがとても強い[/BADSUN]とき、[SPEED]再チャージ時間[/SPEED]が10%短縮される。`, // japonés
			`직선으로 [PROJECTILE]광선[/PROJECTILE]을 발사해 지나가는 모든 대상을 공격한다. [SUN]쾌청[/SUN] 또는 [BADSUN]극심한 햇살[/BADSUN] 상태에서 [SPEED]재충전 시간[/SPEED]이 10% 감소한다.`, // coreano
			`沿直线发射一道[PROJECTILE]光束[/PROJECTILE]，击中其穿过的所有目标。在[SUN]大晴天[/SUN]或[BADSUN]极巨烈日[/BADSUN]天气下，[SPEED]充能时间[/SPEED]缩短10%。`, // chino
			`Wystrzeliwuje [PROJECTILE]promień[/PROJECTILE] w linii prostej, trafiając we wszystkie cele na swojej drodze. Skraca [SPEED]czas odnowienia[/SPEED] o 10% podczas [SUN]ostrego światła słonecznego[/SUN] lub [BADSUN]wyjątkowo ostrego światła słonecznego[/BADSUN].` // polaco
		]
  	},
  	hydroCannon: {
	    id: "hydroCannon",
	    name: [
			"Hydro Cannon",
			"Hidrocañón",
			"Hydroblast",
			"Hidrocanhão",
			"Idrocannone",
			"Aquahaubitze",
			"ハイドロカノン",
			"하이드로캐논",
			"加农水炮",
			"Hydrodziało"
		],
    	description: [
			`Fires a [PROJECTILE]water jet[/PROJECTILE] that chases the target for 4 seconds, dealing damage to all [ENEMY]enemies[/ENEMY] in its path.`, // inglés
			`Dispara un [PROJECTILE]chorro de agua[/PROJECTILE] que persigue al objetivo durante 4 segundos, infligiendo daño a todos los [ENEMY]enemigos[/ENEMY] a su paso.`, // español
			`Tire un [PROJECTILE]jet d'eau[/PROJECTILE] qui poursuit la cible pendant 4 secondes, infligeant des dégâts à tous les [ENEMY]ennemis[/ENEMY] sur son passage.`, // francés
			`Dispara um [PROJECTILE]jato de água[/PROJECTILE] que persegue o alvo por 4 segundos, causando dano a todos os [ENEMY]inimigos[/ENEMY] em seu caminho.`, // portugués
			`Spara un [PROJECTILE]getto d'acqua[/PROJECTILE] che insegue il bersaglio per 4 secondi, infliggendo danni a tutti i [ENEMY]nemici[/ENEMY] sul suo percorso.`, // italiano
			`Schießt einen [PROJECTILE]Wasserstrahl[/PROJECTILE] ab, der das Ziel 4 Sekunden lang verfolgt und allen [ENEMY]Gegnern[/ENEMY] auf seinem Weg Schaden zufügt.`, // alemán
			`[PROJECTILE]水流[/PROJECTILE]を発射し、4秒間対象を追いかけながら、通り道にいるすべての[ENEMY]敵[/ENEMY]にダメージを与える。`, // japonés
			`[PROJECTILE]물줄기[/PROJECTILE]를 발사하여 4초 동안 대상을 추적하고, 이동 경로에 있는 모든 [ENEMY]적[/ENEMY]에게 피해를 줍니다.`, // coreano
			`发射一道[PROJECTILE]水柱[/PROJECTILE]追踪目标4秒，对路径上的所有[ENEMY]敌人[/ENEMY]造成伤害。`, // chino
			`Wystrzeliwuje [PROJECTILE]strumień wody[/PROJECTILE], który ściga cel przez 4 sekundy, zadając obrażenia wszystkim [ENEMY]wrogom[/ENEMY] na swojej drodze.` // polaco
		]
  	},
  	flameWheel: {
	    id: "flameWheel",
	    name: [
			"Flame Wheel",
			"Rueda Fuego",
			"Roue de Feu",
			"Roda de Fogo",
			"Ruotafuoco",
			"Flammenrad",
			"かえんぐるま",
			"화염자동차",
			"火焰轮",
			"Ogniste Koło"
	    ],
    	description: [
			`[PROJECTILE]Projectiles orbit[/PROJECTILE] the user and have a 50% chance to inflict [BURN]burn[/BURN].`, // inglés
			`Los [PROJECTILE]proyectiles orbitan[/PROJECTILE] al usuario y tienen un 50% de probabilidad de infligir [BURN]quemadura[/BURN].`, // español
			`Les [PROJECTILE]projectiles orbitent[/PROJECTILE] autour de l'utilisateur et ont 50 % de chances d'infliger [BURN]brûlure[/BURN].`, // francés
			`Os [PROJECTILE]projéteis orbitam[/PROJECTILE] o usuário e têm 50% de chance de causar [BURN]queimadura[/BURN].`, // portugués
			`I [PROJECTILE]proiettili orbitano[/PROJECTILE] attorno all'utilizzatore e hanno una probabilità del 50% di infliggere [BURN]bruciatura[/BURN].`, // italiano
			`[PROJECTILE]Projektile umkreisen[/PROJECTILE] den Anwender und haben eine Chance von 50 %, [BURN]Verbrennung[/BURN] zu verursachen.`, // alemán
			`[PROJECTILE]投射物は使用者の周りを回り[/PROJECTILE]、50%の確率で[BURN]やけど[/BURN]を負わせる。`, // japonés
			`[PROJECTILE]투사체가 사용자의 주위를 공전하며[/PROJECTILE] 50% 확률로 [BURN]화상[/BURN]을 입힙니다.`, // coreano
			`[PROJECTILE]投射物环绕[/PROJECTILE]使用者，并有50%的概率造成[BURN]灼伤[/BURN]。`, // chino
			`[PROJECTILE]Pociski orbitują[/PROJECTILE] wokół użytkownika oraz mają 50% szans na wywołanie [BURN]podpalenia[/BURN].` // polaco
		]
  	},
  	mount: {
	    id: "mount",
	    name: [
			"Order Up",
	        "Oído Cocina",
	        "Plat du Jour",
	        "Prato do Dia",
	        "Alta Cucina",
	        "Auftischen",
	        "いっちょうあがり",
	        "한판내기",
	        "上菜",
	        "Gotowe"
	    ],
    	description: [
			`Allows itself to be commanded by [POKEMON]Tatsugiri[/POKEMON] to increase its [STATS]stats[/STATS].`, // inglés
			`Permite que [POKEMON]Tatsugiri[/POKEMON] le dé órdenes para aumentar sus [STATS]estadísticas[/STATS].`, // español
			`Permet à [POKEMON]Tatsugiri[/POKEMON] de lui donner des ordres afin d'augmenter ses [STATS]statistiques[/STATS].`, // francés
			`Permite que [POKEMON]Tatsugiri[/POKEMON] dê ordens para aumentar seus [STATS]atributos[/STATS].`, // portugués
			`Permette a [POKEMON]Tatsugiri[/POKEMON] di impartirgli ordini per aumentare le sue [STATS]statistiche[/STATS].`, // italiano
			`Lässt sich von [POKEMON]Tatsugiri[/POKEMON] Befehle geben, um seine [STATS]Werte[/STATS] zu erhöhen.`, // alemán
			`[POKEMON]シャリタツ[/POKEMON]から指示を受けることで、自分の[STATS]ステータス[/STATS]を上げる。`, // japonés
			`[POKEMON]싸리용[/POKEMON]의 명령을 받아 자신의 [STATS]능력치[/STATS]를 증가시킵니다.`, // coreano
			`接受[POKEMON]米立龙[/POKEMON]的指挥来提高自己的[STATS]属性[/STATS]。`, // chino
			`Pozwala [POKEMON]Tatsugiri[/POKEMON] wydawać sobie polecenia, aby zwiększyć swoje [STATS]statystyki[/STATS].` // polaco
		]
  	},
  	commander: {
	    id: "commander",
	    name: [
			"Commander",
			"Comandante",
			"Commandant",
			"Comandante",
			"Comandante",
			"Kommandant",
			"しれいとう",
			"사령탑",
			"司令塔",
			"Dowódca"
	    ],
    	description: [
	      	`Can increase [POKEMON]Dondozo's[/POKEMON] [STATS]stats[/STATS] if it is on top of it.`, // inglés
			`Puede aumentar las [STATS]estadísticas[/STATS] de [POKEMON]Dondozo[/POKEMON] si está encima de él.`, // español
			`Peut augmenter les [STATS]statistiques[/STATS] de [POKEMON]Dondozo[/POKEMON] s'il est placé sur lui.`, // francés
			`Pode aumentar os [STATS]atributos[/STATS] de [POKEMON]Dondozo[/POKEMON] se estiver sobre ele.`, // portugués
			`Può aumentare le [STATS]statistiche[/STATS] di [POKEMON]Dondozo[/POKEMON] se si trova sopra di lui.`, // italiano
			`Kann die [STATS]Werte[/STATS] von [POKEMON]Dondozo[/POKEMON] erhöhen, wenn es auf ihm steht.`, // alemán
			`上に乗っている場合、[POKEMON]ヘイラッシャ[/POKEMON]の[STATS]ステータス[/STATS]を上げることができる。`, // japonés
			`위에 배치되어 있으면 [POKEMON]어써러셔[/POKEMON]의 [STATS]능력치[/STATS]를 증가시킬 수 있습니다.`, // coreano
			`如果位于[POKEMON]吃吼霸[/POKEMON]上方，可以提高[POKEMON]吃吼霸[/POKEMON]的[STATS]属性[/STATS]。`, // chino
			`Może zwiększyć [STATS]statystyki[/STATS] [POKEMON]Dondozo[/POKEMON], jeśli znajduje się na nim.` // polaco
	    ]
  	},
  	plus: {
	    id: "plus",
	    name: [
			"Plus",
			"Más",
			"Plus",
			"Mais",
			"Più",
			"Plus",
			"プラス",
			"플러스",
			"正电",
			"Plus"
	    ],
    	description: [
			`Links with other [POKEMON]Pokémon[/POKEMON] with a negative charge.`, // inglés
			`Se conecta con otros [POKEMON]Pokémon[/POKEMON] con carga negativa.`, // español
			`Se lie à d'autres [POKEMON]Pokémon[/POKEMON] ayant une charge négative.`, // francés
			`Conecta-se a outros [POKEMON]Pokémon[/POKEMON] com carga negativa.`, // portugués
			`Si collega ad altri [POKEMON]Pokémon[/POKEMON] con carica negativa.`, // italiano
			`Verbindet sich mit anderen [POKEMON]Pokémon[/POKEMON] mit negativer Ladung.`, // alemán
			`負の電荷を持つ他の[POKEMON]ポケモン[/POKEMON]とつながる。`, // japonés
			`음전하를 가진 다른 [POKEMON]포켓몬[/POKEMON]과 연결됩니다.`, // coreano
			`与其他带有负电荷的[POKEMON]宝可梦[/POKEMON]连接。`, // chino
			`Łączy się z innymi [POKEMON]Pokémonami[/POKEMON] o ujemnym ładunku.` // polaco
		]
  	},
  	minus: {
	    id: "minus",
	    name: [
			"Minus",
			"Menos",
			"Moins",
			"Menos",
			"Meno",
			"Minus",
			"マイナス",
			"마이너스",
			"负电",
			"Minus"
	    ],
    	description: [
			`Links with other [POKEMON]Pokémon[/POKEMON] with a positive charge.`, // inglés
			`Se conecta con otros [POKEMON]Pokémon[/POKEMON] con carga positiva.`, // español
			`Se lie à d'autres [POKEMON]Pokémon[/POKEMON] ayant une charge positive.`, // francés
			`Conecta-se a outros [POKEMON]Pokémon[/POKEMON] com carga positiva.`, // portugués
			`Si collega ad altri [POKEMON]Pokémon[/POKEMON] con carica positiva.`, // italiano
			`Verbindet sich mit anderen [POKEMON]Pokémon[/POKEMON] mit positiver Ladung.`, // alemán
			`正の電荷を持つ他の[POKEMON]ポケモン[/POKEMON]とつながる。`, // japonés
			`양전하를 가진 다른 [POKEMON]포켓몬[/POKEMON]과 연결됩니다.`, // coreano
			`与其他带有正电荷的[POKEMON]宝可梦[/POKEMON]连接。`, // chino
			`Łączy się z innymi [POKEMON]Pokémonami[/POKEMON] o dodatnim ładunku.` // polaco
		]
  	},
  	sandStream: {
	    id: "sandStream",
	    name: [
			"Sand Stream",
			"Chorro Arena",
			"Sable Volant",
			"Jato de Areia",
			"Sabbiafune",
			"Sandsturm",
			"すなおこし",
			"모래날리기",
			"扬沙",
			"Strumień Piasku"
	    ],
    	description: [
	        `Applies [SANDSTORM]Sandstorm weather[/SANDSTORM].`, // inglés
			`Aplica el [SANDSTORM]clima de tormenta de arena[/SANDSTORM].`, // español
			`Applique le [SANDSTORM]climat de tempête de sable[/SANDSTORM].`, // francés
			`Aplica o [SANDSTORM]clima de tempestade de areia[/SANDSTORM].`, // portugués
			`Applica il [SANDSTORM]meteo di tempesta di sabbia[/SANDSTORM].`, // italiano
			`Verursacht [SANDSTORM]Sandsturmwetter[/SANDSTORM].`, // alemán
			`[SANDSTORM]すなあらし[/SANDSTORM]の天候にする。`, // japonés
			`[SANDSTORM]모래바람[/SANDSTORM] 날씨를 적용합니다.`, // coreano
			`施加[SANDSTORM]沙暴[/SANDSTORM]天气。`, // chino
			`Ustawia pogodę [SANDSTORM]burzy piaskowej[/SANDSTORM].` // polaco
	    ]
  	},
  	sandStreamTyranitar: {
	    id: "sandStreamTyranitar",
	    name: [
			"Sand Stream",
			"Chorro Arena",
			"Sable Volant",
			"Jato de Areia",
			"Sabbiafune",
			"Sandsturm",
			"すなおこし",
			"모래날리기",
			"扬沙",
			"Strumień Piasku"
	    ],
    	description: [
			`Applies [SANDSTORM]Sandstorm weather[/SANDSTORM]. [SANDSTORM]Sandstorm[/SANDSTORM] deals 50% more damage to [ENEMY]enemies[/ENEMY] in [RANGE]range[/RANGE].`, // inglés
			`Aplica el clima [SANDSTORM]tormenta de arena[/SANDSTORM]. La [SANDSTORM]tormenta de arena[/SANDSTORM] inflige un 50% más de daño a los [ENEMY]enemigos[/ENEMY] dentro del [RANGE]alcance[/RANGE].`, // español
			`Applique le climat [SANDSTORM]tempête de sable[/SANDSTORM]. La [SANDSTORM]tempête de sable[/SANDSTORM] inflige 50 % de dégâts supplémentaires aux [ENEMY]ennemis[/ENEMY] dans le [RANGE]rayon[/RANGE].`, // francés
			`Aplica o clima [SANDSTORM]tempestade de areia[/SANDSTORM]. A [SANDSTORM]tempestade de areia[/SANDSTORM] causa 50% mais dano aos [ENEMY]inimigos[/ENEMY] dentro do [RANGE]alcance[/RANGE].`, // portugués
			`Applica il clima [SANDSTORM]tempesta di sabbia[/SANDSTORM]. La [SANDSTORM]tempesta di sabbia[/SANDSTORM] infligge il 50% di danni in più ai [ENEMY]nemici[/ENEMY] nel [RANGE]raggio[/RANGE].`, // italiano
			`Verursacht das Wetter [SANDSTORM]Sandsturm[/SANDSTORM]. Der [SANDSTORM]Sandsturm[/SANDSTORM] verursacht bei [ENEMY]Gegnern[/ENEMY] in [RANGE]Reichweite[/RANGE] 50 % mehr Schaden.`, // alemán
			`[SANDSTORM]すなあらし[/SANDSTORM]状態にする。[RANGE]範囲[/RANGE]内の[ENEMY]敵[/ENEMY]に対する[SANDSTORM]すなあらし[/SANDSTORM]のダメージが50%増加する。`, // japonés
			`[SANDSTORM]모래바람[/SANDSTORM] 날씨를 발생시킵니다. [RANGE]범위[/RANGE] 내의 [ENEMY]적[/ENEMY]에게 [SANDSTORM]모래바람[/SANDSTORM]이 주는 피해가 50% 증가합니다.`, // coreano
			`施加[SANDSTORM]沙暴[/SANDSTORM]天气。[RANGE]范围[/RANGE]内的[ENEMY]敌人[/ENEMY]受到的[SANDSTORM]沙暴[/SANDSTORM]伤害提高50%。`, // chino
			`Wywołuje pogodę [SANDSTORM]burzy piaskowej[/SANDSTORM]. [SANDSTORM]Burza piaskowa[/SANDSTORM] zadaje o 50% więcej obrażeń [ENEMY]wrogom[/ENEMY] w [RANGE]zasięgu[/RANGE].` // polaco
		]
  	},
  	sandStreamMegaTyranitar: {
	    id: "sandStreamMegaTyranitar",
	    name: [
			"Sand Stream",
			"Chorro Arena",
			"Sable Volant",
			"Jato de Areia",
			"Sabbiafune",
			"Sandsturm",
			"すなおこし",
			"모래날리기",
			"扬沙",
			"Strumień Piasku"
	    ],
    	description: [
			`Applies [SANDSTORM]Sandstorm weather[/SANDSTORM]. [SANDSTORM]Sandstorm[/SANDSTORM] deals 50% more damage to [ENEMY]enemies[/ENEMY] in [RANGE]range[/RANGE].`, // inglés
			`Aplica el clima [SANDSTORM]tormenta de arena[/SANDSTORM]. La [SANDSTORM]tormenta de arena[/SANDSTORM] inflige un 50% más de daño a los [ENEMY]enemigos[/ENEMY] dentro del [RANGE]alcance[/RANGE].`, // español
			`Applique le climat [SANDSTORM]tempête de sable[/SANDSTORM]. La [SANDSTORM]tempête de sable[/SANDSTORM] inflige 50 % de dégâts supplémentaires aux [ENEMY]ennemis[/ENEMY] dans le [RANGE]rayon[/RANGE].`, // francés
			`Aplica o clima [SANDSTORM]tempestade de areia[/SANDSTORM]. A [SANDSTORM]tempestade de areia[/SANDSTORM] causa 50% mais dano aos [ENEMY]inimigos[/ENEMY] dentro do [RANGE]alcance[/RANGE].`, // portugués
			`Applica il clima [SANDSTORM]tempesta di sabbia[/SANDSTORM]. La [SANDSTORM]tempesta di sabbia[/SANDSTORM] infligge il 50% di danni in più ai [ENEMY]nemici[/ENEMY] nel [RANGE]raggio[/RANGE].`, // italiano
			`Verursacht das Wetter [SANDSTORM]Sandsturm[/SANDSTORM]. Der [SANDSTORM]Sandsturm[/SANDSTORM] verursacht bei [ENEMY]Gegnern[/ENEMY] in [RANGE]Reichweite[/RANGE] 50 % mehr Schaden.`, // alemán
			`[SANDSTORM]すなあらし[/SANDSTORM]状態にする。[RANGE]範囲[/RANGE]内の[ENEMY]敵[/ENEMY]に対する[SANDSTORM]すなあらし[/SANDSTORM]のダメージが50%増加する。`, // japonés
			`[SANDSTORM]모래바람[/SANDSTORM] 날씨를 발생시킵니다. [RANGE]범위[/RANGE] 내의 [ENEMY]적[/ENEMY]에게 [SANDSTORM]모래바람[/SANDSTORM]이 주는 피해가 50% 증가합니다.`, // coreano
			`施加[SANDSTORM]沙暴[/SANDSTORM]天气。[RANGE]范围[/RANGE]内的[ENEMY]敌人[/ENEMY]受到的[SANDSTORM]沙暴[/SANDSTORM]伤害提高50%。`, // chino
			`Wywołuje pogodę [SANDSTORM]burzy piaskowej[/SANDSTORM]. [SANDSTORM]Burza piaskowa[/SANDSTORM] zadaje o 50% więcej obrażeń [ENEMY]wrogom[/ENEMY] w [RANGE]zasięgu[/RANGE].` // polaco
		]
  	},
  	snowWarning: {
	    id: "snowWarning",
	    name: [
			"Snow Warning",
			"Nevada",
			"Alerte Neige",
			"Nevada",
			"Scendineve",
			"Hagelalarm",
			"ゆきふらし",
			"눈퍼붓기",
			"降雪",
			"Opady Śniegu"
	    ],
    	description: [
	        `Applies [HAIL]Hail weather[/HAIL].`, // inglés
			`Aplica el [HAIL]clima de granizo[/HAIL].`, // español
			`Applique le [HAIL]climat de grêle[/HAIL].`, // francés
			`Aplica o [HAIL]clima de granizo[/HAIL].`, // portugués
			`Applica il [HAIL]meteo di grandine[/HAIL].`, // italiano
			`Verursacht [HAIL]Hagelwetter[/HAIL].`, // alemán
			`[HAIL]あられ[/HAIL]の天候にする。`, // japonés
			`[HAIL]싸라기눈[/HAIL] 날씨를 적용합니다.`, // coreano
			`施加[HAIL]冰雹[/HAIL]天气。`, // chino
			`Ustawia pogodę [HAIL]gradu[/HAIL].` // polaco
	    ]
  	},
  	heatCrash: {
	    id: "heatCrash",
	    name: [
			"Heat Crash",
			"Golpe Calor",
			"Tacle Feu",
			"Golpe de Calor",
			"Marchiafoco",
			"Brandstempel",
			"ヘビーボンバー",
			"헤비봄버",
			"高温重压",
			"Ciepły Buch"
	    ],
    	description: [
	        `Multiplies the damage caused by the target's [SPEED]speed[/SPEED] value.`, // inglés
			`Multiplica el daño infligido por el valor de [SPEED]velocidad[/SPEED] del objetivo.`, // español
			`Multiplie les dégâts infligés par la valeur de [SPEED]vitesse[/SPEED] de la cible.`, // francés
			`Multiplica o dano causado pelo valor de [SPEED]velocidade[/SPEED] do alvo.`, // portugués
			`Moltiplica i danni inflitti per il valore di [SPEED]velocità[/SPEED] del bersaglio.`, // italiano
			`Multipliziert den verursachten Schaden mit dem [SPEED]Geschwindigkeitswert[/SPEED] des Ziels.`, // alemán
			`対象の[SPEED]素早さ[/SPEED]の値をダメージに掛ける。`, // japonés
			`대상의 [SPEED]속도[/SPEED] 수치만큼 피해량을 배율로 적용합니다.`, // coreano
			`将造成的伤害乘以目标的[SPEED]速度[/SPEED]数值。`, // chino
			`Mnoży zadawane obrażenia przez wartość [SPEED]prędkości[/SPEED] celu.` // polaco
	    ]
  	},
  	flashFire: {
	    id: "flashFire",
	    name: [
			"Flash Fire",
			"Absorbe Fuego",
			"Torche",
			"Tocha",
			"Fuocoardore",
			"Feuerfänger",
			"もらいび",
			"타오르는불꽃",
			"引火",
			"Błysk Ognia"
	    ],
    	description: [
			`Deals double damage to [BURN]burned[/BURN] [ENEMY]enemies[/ENEMY]. Reduces [SPEED]recharge time[/SPEED] by 20% in [SUN]Harsh Sunlight[/SUN] or [BADSUN]Extremely Harsh Sunlight[/BADSUN].`, // inglés
			`Inflige el doble de daño a los [ENEMY]enemigos[/ENEMY] [BURN]quemados[/BURN]. Reduce el [SPEED]tiempo de recarga[/SPEED] un 20% bajo [SUN]Sol Abrasador[/SUN] o [BADSUN]Sol Abrasador Extremo[/BADSUN].`, // español
			`Inflige le double de dégâts aux [ENEMY]ennemis[/ENEMY] [BURN]brûlés[/BURN]. Réduit le [SPEED]temps de recharge[/SPEED] de 20 % sous un [SUN]Soleil Intense[/SUN] ou un [BADSUN]Soleil Extrêmement Intense[/BADSUN].`, // francés
			`Causa o dobro do dano a [ENEMY]inimigos[/ENEMY] [BURN]queimados[/BURN]. Reduz o [SPEED]tempo de recarga[/SPEED] em 20% sob [SUN]Sol Intenso[/SUN] ou [BADSUN]Sol Extremamente Intenso[/BADSUN].`, // portugués
			`Infligge il doppio dei danni ai [ENEMY]nemici[/ENEMY] [BURN]scottati[/BURN]. Riduce il [SPEED]tempo di ricarica[/SPEED] del 20% con [SUN]Sole Intenso[/SUN] o [BADSUN]Sole Estremamente Intenso[/BADSUN].`, // italiano
			`Verursacht doppelten Schaden bei [BURN]verbrannten[/BURN] [ENEMY]Gegnern[/ENEMY]. Verkürzt die [SPEED]Aufladezeit[/SPEED] bei [SUN]greller Sonne[/SUN] oder [BADSUN]extrem greller Sonne[/BADSUN] um 20 %.`, // alemán
			`[BURN]やけど[/BURN]状態の[ENEMY]敵[/ENEMY]に2倍のダメージを与える。[SUN]強い日差し[/SUN]または[BADSUN]日差しがとても強い[/BADSUN]とき、[SPEED]再チャージ時間[/SPEED]が20%短縮される。`, // japonés
			`[BURN]화상[/BURN] 상태인 [ENEMY]적[/ENEMY]에게 두 배의 피해를 준다. [SUN]쾌청[/SUN] 또는 [BADSUN]극심한 햇살[/BADSUN] 상태에서 [SPEED]재충전 시간[/SPEED]이 20% 감소한다.`, // coreano
			`对处于[BURN]灼伤[/BURN]状态的[ENEMY]敌人[/ENEMY]造成双倍伤害。在[SUN]大晴天[/SUN]或[BADSUN]极巨烈日[/BADSUN]天气下，[SPEED]充能时间[/SPEED]缩短20%。`, // chino
			`Zadaje podwójne obrażenia [ENEMY]wrogom[/ENEMY] objętym [BURN]podpaleniem[/BURN]. Skraca [SPEED]czas odnowienia[/SPEED] o 20% podczas [SUN]ostrego światła słonecznego[/SUN] lub [BADSUN]wyjątkowo ostrego światła słonecznego[/BADSUN].` // polaco
		]
  	},
  	solarPower: {
	    id: "solarPower",
	    name: [
			`Solar Power`, // inglés
			`Poder Solar`, // español
			`Force Soleil`, // francés
			`Poder Solar`, // portugués
			`Solarpotere`, // italiano
			`Solarkraft`, // alemán
			`サンパワー`, // japonés
			`선파워`, // coreano
			`太阳之力`, // chino
			`Solar Power` // polaco
		],
    	description: [
			`Causes double damage to [ENEMY]burned enemies[/ENEMY]. All [BURN]burn-related[/BURN] [POKEMON]Pokémon[/POKEMON] causes 25% more damage to [BURN]burned[/BURN] [ENEMY]enemies[/ENEMY] in [SUN]Harsh Sunlight[/SUN] or [BADSUN]Extremely Harsh Sunlight[/BADSUN].`, // inglés
			`Inflige el doble de daño a los [ENEMY]enemigos quemados[/ENEMY]. Todos los [POKEMON]Pokémon[/POKEMON] relacionados con [BURN]quemaduras[/BURN] infligen un 25% más de daño a los [BURN]quemados[/BURN] [ENEMY]enemigos[/ENEMY] bajo [SUN]Sol Intenso[/SUN] o [BADSUN]Sol Extremadamente Intenso[/BADSUN].`, // español
			`Inflige deux fois plus de dégâts aux [ENEMY]ennemis brûlés[/ENEMY]. Tous les [POKEMON]Pokémon[/POKEMON] liés aux [BURN]brûlures[/BURN] infligent 25 % de dégâts supplémentaires aux [ENEMY]ennemis[/ENEMY] [BURN]brûlés[/BURN] sous [SUN]Soleil Intense[/SUN] ou [BADSUN]Soleil Extrêmement Intense[/BADSUN].`, // francés
			`Causa o dobro de dano aos [ENEMY]inimigos queimados[/ENEMY]. Todos os [POKEMON]Pokémon[/POKEMON] relacionados a [BURN]queimaduras[/BURN] causam 25% a mais de dano aos [BURN]inimigos queimados[/BURN] sob [SUN]Sol Intenso[/SUN] ou [BADSUN]Sol Extremamente Intenso[/BADSUN].`, // portugués
			`Infligge il doppio dei danni agli [ENEMY]nemici scottati[/ENEMY]. Tutti i [POKEMON]Pokémon[/POKEMON] legati alle [BURN]scottature[/BURN] infliggono il 25% di danni in più agli [BURN]nemici[/BURN] [ENEMY]scottati[/ENEMY] sotto [SUN]Sole Intenso[/SUN] o [BADSUN]Sole Estremamente Intenso[/BADSUN].`, // italiano
			`Verursacht doppelten Schaden bei [ENEMY]verbrannten Gegnern[/ENEMY]. Alle [POKEMON]Pokémon[/POKEMON], die mit [BURN]Verbrennungen[/BURN] zusammenhängen, verursachen bei [BURN]verbrannten[/BURN] [ENEMY]Gegnern[/ENEMY] unter [SUN]intensivem Sonnenlicht[/SUN] oder [BADSUN]extrem intensivem Sonnenlicht[/BADSUN] 25 % mehr Schaden.`, // alemán
			`[ENEMY]やけど状態の敵[/ENEMY]に2倍のダメージを与える。[BURN]やけど[/BURN]に関連するすべての[POKEMON]ポケモン[/POKEMON]は、[SUN]強い日差し[/SUN]または[BADSUN]極端に強い日差し[/BADSUN]のとき、[BURN]やけど状態の[/BURN][ENEMY]敵[/ENEMY]に25%多くダメージを与える。`, // japonés
			`[ENEMY]화상 상태의 적[/ENEMY]에게 2배의 피해를 줍니다. [BURN]화상[/BURN]과 관련된 모든 [POKEMON]포켓몬[/POKEMON]은 [SUN]강한 햇빛[/SUN] 또는 [BADSUN]극도로 강한 햇빛[/BADSUN]일 때 [BURN]화상 상태의[/BURN] [ENEMY]적[/ENEMY]에게 25% 더 많은 피해를 줍니다.`, // coreano
			`对[ENEMY]灼伤敌人[/ENEMY]造成双倍伤害。所有与[BURN]灼伤[/BURN]相关的[POKEMON]宝可梦[/POKEMON]在[SUN]强烈阳光[/SUN]或[BADSUN]极其强烈的阳光[/BADSUN]下，会对[BURN]灼伤的[/BURN][ENEMY]敌人[/ENEMY]造成额外25%的伤害。`, // chino
			`Zadaje podwójne obrażenia [ENEMY]oparzonym wrogom[/ENEMY]. Wszystkie [POKEMON]Pokémony[/POKEMON] związane z [BURN]podpaleniem[/BURN] zadają o 25% więcej obrażeń [BURN]oparzonym[/BURN] [ENEMY]wrogom[/ENEMY] podczas [SUN]Intensywnego Światła Słonecznego[/SUN] lub [BADSUN]Niezwykle Silnego Światła Słonecznego[/BADSUN].` // polaco
		]
  	},
  	venomDrench: {
	    id: "venomDrench",
	    name: [
		  'Venom Drench',
		  'Trampa Venenosa',
		  'Purge',
		  'Poça Venenosa',
		  'Velenotrappola',
		  'Giftfalle',
		  'ベノムトラップ',
		  '베놈트랩',
		  '毒液陷阱',
		  'Jadowa Pułapka'
		],
    	description: [
		  	`Deals double damage to [ENEMY]poisoned enemies[/ENEMY].`, // inglés
			`Inflige el doble de daño a los [ENEMY]enemigos envenenados[/ENEMY].`, // español
			`Inflige deux fois plus de dégâts aux [ENEMY]ennemis empoisonnés[/ENEMY].`, // francés
			`Causa o dobro de dano aos [ENEMY]inimigos envenenados[/ENEMY].`, // portugués
			`Infligge il doppio dei danni ai [ENEMY]nemici avvelenati[/ENEMY].`, // italiano
			`Verursacht doppelten Schaden an [ENEMY]vergifteten Gegnern[/ENEMY].`, // alemán
			`[ENEMY]どく状態の敵[/ENEMY]に2倍のダメージを与える。`, // japonés
			`[ENEMY]중독[/ENEMY] 상태인 적에게 2배의 피해를 줍니다.`, // coreano
			`对[ENEMY]中毒状态的敌人[/ENEMY]造成双倍伤害。`, // chino
			`Zadaje podwójne obrażenia [ENEMY]zatrutym wrogom[/ENEMY].` // polaco
		]
  	},
  	unburden: {
	    id: "unburden",
	    name: [
	        "Unburden",
	        "Liviano",
	        "Délestage",
	        "Desoneração",
	        "Agiltecnica",
	        "Entlastung",
	        "かるわざ",
	        "곡예",
	        "轻装",
	        "Ulżenie"
	    ],
    	description: [
	        "It is very light.",
        	"Es muy ligero.",
        	"Il est très léger.",
		    "É muito leve.",
		    "È molto leggero.",
		    "Es ist sehr leicht.",
		    "とても軽い。",
		    "매우 가볍다.",
		    "它非常轻盈。",
		    "Jest bardzo lekki."
	    ]
  	},
  	spikes: {
	    id: "spikes",
	    name: [
	        "Spikes",
	        "Púas",
	        "Picots",
	        "Tachinhas",
	        "Punte",
	        "Stachler",
	        "まきびし",
	        "압정뿌리기",
	        "撒菱",
	        "Kolce"
	    ],
	    description: [
			`Summons an [SHAPE]aura[/SHAPE] for 5 seconds that deals damage every 0.5 seconds.`, // inglés
			`Invoca un [SHAPE]aura[/SHAPE] durante 5 segundos que inflige daño cada 0,5 segundos.`, // español
			`Invoque une [SHAPE]aura[/SHAPE] pendant 5 secondes qui inflige des dégâts toutes les 0,5 secondes.`, // francés
			`Invoca uma [SHAPE]aura[/SHAPE] por 5 segundos que causa dano a cada 0,5 segundo.`, // portugués
			`Evoca un'[SHAPE]aura[/SHAPE] per 5 secondi che infligge danni ogni 0,5 secondi.`, // italiano
			`Beschwört 5 Sekunden lang eine [SHAPE]Aura[/SHAPE], die alle 0,5 Sekunden Schaden verursacht.`, // alemán
			`5秒間[SHAPE]オーラ[/SHAPE]を展開し、0.5秒ごとにダメージを与える。`, // japonés
			`5초 동안 [SHAPE]오라[/SHAPE]를 소환하여 0.5초마다 피해를 줍니다.`, // coreano
			`召唤一个持续5秒的[SHAPE]光环[/SHAPE]，每0.5秒造成一次伤害。`, // chino
			`Przywołuje [SHAPE]aurę[/SHAPE] na 5 sekund, która zadaje obrażenia co 0,5 sekundy.` // polaco
		]
	},
	spikyShield: {
	    id: "spikyShield",
	    name: [
	        "Spiky Shield",
	        "Barrera Espinosa",
	        "Pico-Défense",
	        "Escudo Espinhoso",
	        "Agodifesa",
	        "Schutzstacheln",
	        "ニードルガード",
	        "니들가드",
	        "尖刺防守",
	        "Cierniowa Tarcza"
	    ],
	    description: [
			`[PROJECTILE]Projectiles[/PROJECTILE] have a 25% chance to summon an [SHAPE]aura[/SHAPE] for 2.5 seconds that deals damage every 0.5 seconds.`, // inglés
			`Los [PROJECTILE]proyectiles[/PROJECTILE] tienen un 25% de probabilidad de invocar un [SHAPE]aura[/SHAPE] durante 2,5 segundos que inflige daño cada 0,5 segundos.`, // español
			`Les [PROJECTILE]projectiles[/PROJECTILE] ont 25 % de chances d'invoquer une [SHAPE]aura[/SHAPE] pendant 2,5 secondes qui inflige des dégâts toutes les 0,5 secondes.`, // francés
			`Os [PROJECTILE]projéteis[/PROJECTILE] têm 25% de chance de invocar uma [SHAPE]aura[/SHAPE] por 2,5 segundos que causa dano a cada 0,5 segundo.`, // portugués
			`I [PROJECTILE]proiettili[/PROJECTILE] hanno una probabilità del 25% di evocare un'[SHAPE]aura[/SHAPE] per 2,5 secondi che infligge danni ogni 0,5 secondi.`, // italiano
			`[PROJECTILE]Projektile[/PROJECTILE] haben eine Chance von 25 %, 2,5 Sekunden lang eine [SHAPE]Aura[/SHAPE] zu beschwören, die alle 0,5 Sekunden Schaden verursacht.`, // alemán
			`[PROJECTILE]投射物[/PROJECTILE]は25%の確率で2.5秒間[SHAPE]オーラ[/SHAPE]を展開し、0.5秒ごとにダメージを与える。`, // japonés
			`[PROJECTILE]투사체[/PROJECTILE]는 25% 확률로 2.5초 동안 [SHAPE]오라[/SHAPE]를 소환하여 0.5초마다 피해를 줍니다.`, // coreano
			`[PROJECTILE]投射物[/PROJECTILE]有25%的概率召唤一个持续2.5秒的[SHAPE]光环[/SHAPE]，每0.5秒造成一次伤害。`, // chino
			`[PROJECTILE]Pociski[/PROJECTILE] mają 25% szans na przywołanie [SHAPE]aury[/SHAPE] na 2,5 sekundy, która zadaje obrażenia co 0,5 sekundy.` // polaco
		]
	},
	waterBubble: {
	    id: "waterBubble",
	    name: [
			"Water Bubble",
			"Rueda Fuego",
			"Roue de Feu",
			"Roda de Fogo",
			"Ruotafuoco",
			"Flammenrad",
			"かえんぐるま",
			"화염자동차",
			"火焰轮",
			"Ogniste Koło"
	    ],
    	description: [
	        `[PROJECTILE]Projectiles orbit[/PROJECTILE] the user and cause [SLOW]slow[/SLOW] for 2 seconds.`, // inglés
			`Los [PROJECTILE]proyectiles orbitan[/PROJECTILE] al usuario y causan [SLOW]ralentización[/SLOW] durante 2 segundos.`, // español
			`Les [PROJECTILE]projectiles orbitent[/PROJECTILE] autour de l'utilisateur et provoquent un [SLOW]ralentissement[/SLOW] pendant 2 secondes.`, // francés
			`Os [PROJECTILE]projéteis orbitam[/PROJECTILE] o usuário e causam [SLOW]lentidão[/SLOW] por 2 segundos.`, // portugués
			`I [PROJECTILE]proiettili orbitano[/PROJECTILE] attorno all'utilizzatore e causano [SLOW]rallentamento[/SLOW] per 2 secondi.`, // italiano
			`[PROJECTILE]Projektile umkreisen[/PROJECTILE] den Anwender und verursachen 2 Sekunden lang [SLOW]Verlangsamung[/SLOW].`, // alemán
			`[PROJECTILE]投射物は使用者の周りを回り[/PROJECTILE]、2秒間[SLOW]遅く[/SLOW]する。`, // japonés
			`[PROJECTILE]투사체가 사용자의 주위를 공전하며[/PROJECTILE] 2초 동안 [SLOW]느려지게[/SLOW] 합니다.`, // coreano
			`[PROJECTILE]投射物环绕[/PROJECTILE]使用者，并使其[SLOW]减速[/SLOW]2秒。`, // chino
			`[PROJECTILE]Pociski orbitują[/PROJECTILE] wokół użytkownika i powodują [SLOW]spowolnienie[/SLOW] na 2 sekundy.` // polaco
	    ]
  	},
  	technician: {
	    id: "technician",
	    name: [
	        "Technician",
	        "Experto",
	        "Technicien",
	        "Técnico",
	        "Tecnico",
	        "Techniker",
	        "テクニシャン",
	        "테크니션",
	        "技术高手",
	        "Technik"
	    ],
	    description: [
	        'Its attacks that would deal 1000 damage or less multiply their damage by x1.5.', // Inglés
			'Sus ataques que fueran a infligir 1000 de daño o menos multiplican su daño por x1.5.', // Español
			'Les attaques qui devraient infliger 1000 dégâts ou moins multiplient leurs dégâts par x1.5.', // Francés
			'Os ataques que causariam 1000 de dano ou menos multiplicam seu dano por x1.5.', // Portugués
			'Gli attacchi che infliggerebbero 1000 danni o meno moltiplicano il loro danno per x1.5.', // Italiano
			'Angriffe, die 1000 Schaden oder weniger verursachen würden, multiplizieren ihren Schaden mit x1.5.', // Alemán
	        "1000ダメージ以下の攻撃は、威力が1.5倍になる。",
	        "1000 데미지 이하의 공격은 위력이 1.5배가 됩니다.",
	        "造成 1000 点或更少伤害的攻击，其威力将乘以 1.5。",
	        "Ataki, które zadałyby 1000 obrażeń lub mniej, zwiększają swoją moc x1,5."
	    ]
	},
	chlorophyll: {
		id: "chlorophyll",
		name: [
			"Chlorophyll",
			"Clorofila",
			"Chlorophylle",
			"Clorofila",
			"Clorofilla",
			"Chlorophyll",
			"ようりょくそ",
			"엽록소",
			"叶绿素",
			"Chlorofil"
		],
		description: [
			`Reduces [SPEED]recharge time[/SPEED] by 50% in [SUN]Harsh Sunlight[/SUN] or [BADSUN]Extremely Harsh Sunlight[/BADSUN].`, // inglés
			`Reduce el [SPEED]tiempo de recarga[/SPEED] un 50% bajo [SUN]Sol Abrasador[/SUN] o [BADSUN]Sol Extremadamente Abrasador[/BADSUN].`, // español
			`Réduit le [SPEED]temps de recharge[/SPEED] de 50 % sous [SUN]Soleil Ardent[/SUN] ou [BADSUN]Soleil Extrêmement Ardent[/BADSUN].`, // francés
			`Reduz o [SPEED]tempo de recarga[/SPEED] em 50% sob [SUN]Sol Abrasador[/SUN] ou [BADSUN]Sol Extremamente Abrasador[/BADSUN].`, // portugués
			`Riduce il [SPEED]tempo di ricarica[/SPEED] del 50% sotto [SUN]Sole Cocente[/SUN] o [BADSUN]Sole Estremamente Cocente[/BADSUN].`, // italiano
			`Reduziert die [SPEED]Aufladezeit[/SPEED] bei [SUN]greller Sonne[/SUN] oder [BADSUN]extrem greller Sonne[/BADSUN] um 50 %.`, // alemán
			`[SUN]強い日差し[/SUN]または[BADSUN]非常に強い日差し[/BADSUN]のとき、[SPEED]再使用時間[/SPEED]が50%短くなる。`, // japonés
			`[SUN]강한 햇빛[/SUN] 또는 [BADSUN]매우 강한 햇빛[/BADSUN]일 때 [SPEED]재사용 대기 시간[/SPEED]이 50% 감소합니다.`, // coreano
			`在[SUN]强烈阳光[/SUN]或[BADSUN]极强烈阳光[/BADSUN]下，[SPEED]冷却时间[/SPEED]缩短50%。`, // chino
			`Skraca [SPEED]czas odnowienia[/SPEED] o 50% podczas [SUN]Silnego Słońca[/SUN] lub [BADSUN]Ekstremalnie Silnego Słońca[/BADSUN].` // polaco
		]
	},
	hyperCutter: {
	    id: 'hyperCutter',
	    name: [
	        'Hyper Cutter',
	        'Corte Fuerte',
	        'Hyper Cutter',
	        'Hipercorte',
	        'Ipertaglio',
	        'Scherenmacht',
	        'かいりきバサミ',
	        '괴력집게',
	        '怪力钳',
	        'Hyper Cutter'
	    ],
	   	description: [
			`Deals 50% more damage to [ENEMY]enemies[/ENEMY] with less than 50% [HP]HP[/HP].`, // inglés
			`Inflige un 50% más de daño a los [ENEMY]enemigos[/ENEMY] con menos del 50% de [HP]salud[/HP].`, // español
			`Inflige 50 % de dégâts supplémentaires aux [ENEMY]ennemis[/ENEMY] ayant moins de 50 % de [HP]PV[/HP].`, // francés
			`Causa 50% a mais de dano aos [ENEMY]inimigos[/ENEMY] com menos de 50% de [HP]HP[/HP].`, // portugués
			`Infligge il 50% di danni in più ai [ENEMY]nemici[/ENEMY] con meno del 50% di [HP]PS[/HP].`, // italiano
			`Verursacht 50 % mehr Schaden an [ENEMY]Gegnern[/ENEMY] mit weniger als 50 % [HP]KP[/HP].`, // alemán
			`[HP]HP[/HP]が50%未満の[ENEMY]敵[/ENEMY]に与えるダメージが50%増える。`, // japonés
			`[HP]HP[/HP]가 50% 미만인 [ENEMY]적[/ENEMY]에게 50% 더 많은 피해를 줍니다.`, // coreano
			`对[ENEMY]敌人[/ENEMY]的[HP]HP[/HP]低于50%时造成的伤害提高50%。`, // chino
			`Zadaje o 50% więcej obrażeń [ENEMY]wrogom[/ENEMY], którzy mają mniej niż 50% [HP]HP[/HP].` // polaco
		]
	},
	shellSmash: {
		id: 'shellSmash',
		name: [
		  	'Shell Smash',
	        'Rompecoraza',
	        'Exuviation',
	        'Gettaguscio',
	        'Quebrar Shell',
	        'Hausbruch',
	        'からをやぶる',
	        '껍질깨기',
	        '破殼',
	        'Rozbicie Skorupy'
		],
	    description:[
			`At the start of each [PROJECTILE]wave[/PROJECTILE], if [HEART]hearts[/HEART] are above 1, lose 1 [HEART]heart[/HEART]. If a [HEART]heart[/HEART] is lost this way, increases [POWER]power[/POWER] by 50% and reduces [SPEED]recharge time[/SPEED] by 25% for the rest of the [PROJECTILE]wave[/PROJECTILE].`, // inglés
			`Al comienzo de cada [PROJECTILE]oleada[/PROJECTILE], si tienes más de 1 [HEART]corazón[/HEART], pierdes 1 [HEART]corazón[/HEART]. Si pierdes un [HEART]corazón[/HEART] de esta forma, aumenta el [POWER]poder[/POWER] en un 50% y reduce el [SPEED]tiempo de recarga[/SPEED] en un 25% durante el resto de la [PROJECTILE]oleada[/PROJECTILE].`, // español
			`Au début de chaque [PROJECTILE]vague[/PROJECTILE], si le nombre de [HEART]cœurs[/HEART] est supérieur à 1, vous perdez 1 [HEART]cœur[/HEART]. Si un [HEART]cœur[/HEART] est perdu de cette manière, la [POWER]puissance[/POWER] augmente de 50 % et le [SPEED]temps de recharge[/SPEED] est réduit de 25 % pour le reste de la [PROJECTILE]vague[/PROJECTILE].`, // francés
			`No início de cada [PROJECTILE]onda[/PROJECTILE], se você tiver mais de 1 [HEART]coração[/HEART], perde 1 [HEART]coração[/HEART]. Se um [HEART]coração[/HEART] for perdido dessa forma, o [POWER]poder[/POWER] aumenta em 50% e o [SPEED]tempo de recarga[/SPEED] é reduzido em 25% pelo restante da [PROJECTILE]onda[/PROJECTILE].`, // portugués
			`All'inizio di ogni [PROJECTILE]ondata[/PROJECTILE], se i [HEART]cuori[/HEART] sono più di 1, perdi 1 [HEART]cuore[/HEART]. Se un [HEART]cuore[/HEART] viene perso in questo modo, il [POWER]potere[/POWER] aumenta del 50% e il [SPEED]tempo di ricarica[/SPEED] si riduce del 25% per il resto dell'[PROJECTILE]ondata[/PROJECTILE].`, // italiano
			`Zu Beginn jeder [PROJECTILE]Welle[/PROJECTILE] verlierst du 1 [HEART]Herz[/HEART], wenn du mehr als 1 [HEART]Herz[/HEART] hast. Wenn auf diese Weise ein [HEART]Herz[/HEART] verloren geht, erhöht sich die [POWER]Kraft[/POWER] um 50 % und die [SPEED]Aufladezeit[/SPEED] wird für den Rest der [PROJECTILE]Welle[/PROJECTILE] um 25 % reduziert.`, // alemán
			`各[PROJECTILE]ウェーブ[/PROJECTILE]の開始時に、[HEART]ハート[/HEART]が1個より多い場合、[HEART]ハート[/HEART]を1個失う。この方法で[HEART]ハート[/HEART]を失うと、その[PROJECTILE]ウェーブ[/PROJECTILE]の残りの間、[POWER]パワー[/POWER]が50%増加し、[SPEED]再使用時間[/SPEED]が25%短縮される。`, // japonés
			`각 [PROJECTILE]웨이브[/PROJECTILE] 시작 시 [HEART]하트[/HEART]가 1개보다 많으면 [HEART]하트[/HEART]를 1개 잃습니다. 이 방법으로 [HEART]하트[/HEART]를 잃으면 해당 [PROJECTILE]웨이브[/PROJECTILE]가 끝날 때까지 [POWER]위력[/POWER]이 50% 증가하고 [SPEED]재사용 대기시간[/SPEED]이 25% 감소합니다.`, // coreano
			`每个[PROJECTILE]波次[/PROJECTILE]开始时，如果[HEART]心[/HEART]超过1个，就失去1个[HEART]心[/HEART]。如果以这种方式失去[HEART]心[/HEART]，则在该[PROJECTILE]波次[/PROJECTILE]剩余时间内，[POWER]攻击力[/POWER]提高50%，[SPEED]冷却时间[/SPEED]缩短25%。`, // chino
			`Na początku każdej [PROJECTILE]fali[/PROJECTILE], jeśli masz więcej niż 1 [HEART]serce[/HEART], tracisz 1 [HEART]serce[/HEART]. Jeśli [HEART]serce[/HEART] zostanie utracone w ten sposób, [POWER]siła[/POWER] wzrasta o 50%, a [SPEED]czas odnowienia[/SPEED] zostaje skrócony o 25% do końca [PROJECTILE]fali[/PROJECTILE].` // polaco
		]
	},
	refrigerate: {
		id: 'refrigerate',
		name: [
	        'Refrigerate',
	        'Piel Helada',
	        'Peau Gelée',
	        'Pele Gelada',
	        'Prestigelo',
	        'Frostschicht',
	        'フリーズスキン',
	        '프리즈스킨',
	        '冰冻皮肤',
	        'Lodowata Skóra'
	    ],
	    description: [
			`Attacks have a 20% chance to cause [STUN]stun[/STUN] for 2 seconds. Increases the chance by 2% for each [POKEMON]Fossil Pokémon[/POKEMON] on the [TEAM]team[/TEAM].`, // inglés
			`Los ataques tienen un 20% de probabilidad de causar [STUN]aturdimiento[/STUN] durante 2 segundos. Aumenta la probabilidad un 2% por cada [POKEMON]Pokémon Fósil[/POKEMON] en el [TEAM]equipo[/TEAM].`, // español
			`Les attaques ont 20 % de chances de provoquer un [STUN]étourdissement[/STUN] pendant 2 secondes. Augmente les chances de 2 % pour chaque [POKEMON]Pokémon Fossile[/POKEMON] dans l'[TEAM]équipe[/TEAM].`, // francés
			`Os ataques têm 20% de chance de causar [STUN]atordoamento[/STUN] por 2 segundos. Aumenta a chance em 2% para cada [POKEMON]Pokémon Fóssil[/POKEMON] na [TEAM]equipe[/TEAM].`, // portugués
			`Gli attacchi hanno una probabilità del 20% di causare [STUN]stordimento[/STUN] per 2 secondi. Aumenta la probabilità del 2% per ogni [POKEMON]Pokémon Fossile[/POKEMON] nella [TEAM]squadra[/TEAM].`, // italiano
			`Angriffe haben eine Chance von 20 %, für 2 Sekunden [STUN]Betäubung[/STUN] zu verursachen. Die Chance erhöht sich um 2 % für jedes [POKEMON]Fossil-Pokémon[/POKEMON] im [TEAM]Team[/TEAM].`, // alemán
			`攻撃は20%の確率で2秒間[STUN]ひるみ[/STUN]を引き起こす。[TEAM]チーム[/TEAM]にいる[POKEMON]化石ポケモン[/POKEMON]1体につき、確率が2%上がる。`, // japonés
			`공격 시 20% 확률로 2초 동안 [STUN]기절[/STUN]시킵니다. [TEAM]팀[/TEAM]에 있는 [POKEMON]화석 포켓몬[/POKEMON] 한 마리당 확률이 2% 증가합니다.`, // coreano
			`攻击有20%的概率造成持续2秒的[STUN]眩晕[/STUN]。[TEAM]队伍[/TEAM]中每有一只[POKEMON]化石宝可梦[/POKEMON]，该概率提高2%。`, // chino
			`Ataki mają 20% szans na wywołanie [STUN]ogłuszenia[/STUN] na 2 sekundy. Szansa wzrasta o 2% za każdego [POKEMON]Fosylnego Pokémona[/POKEMON] w [TEAM]drużynie[/TEAM].` // polaco
		]
	},
	corrosion: {
	    id: 'corrosion',
	    name: [
	        'Corrosion',
	        'Corrosión',
	        'Corrosion',
	        'Corrosão',
	        'Corrosione',
	        'Korrosion',
	        'ふしょく',
	        '부식',
	        '腐蚀',
	        'Korozja'
	    ],
	    description: [
	        `Attacks remove 5% of the target's [ARMOR]armor[/ARMOR].`, // inglés
			`Los ataques eliminan un 5% de la [ARMOR]armadura[/ARMOR] del objetivo.`, // español
			`Les attaques retirent 5 % de l'[ARMOR]armure[/ARMOR] de la cible.`, // francés
			`Os ataques removem 5% da [ARMOR]armadura[/ARMOR] do alvo.`, // portugués
			`Gli attacchi rimuovono il 5% dell'[ARMOR]armatura[/ARMOR] del bersaglio.`, // italiano
			`Angriffe entfernen 5 % der [ARMOR]Rüstung[/ARMOR] des Ziels.`, // alemán
			`攻撃は対象の[ARMOR]アーマー[/ARMOR]を5%減少させる。`, // japonés
			`공격 시 대상의 [ARMOR]방어력[/ARMOR]을 5% 감소시킵니다.`, // coreano
			`攻击会移除目标5%的[ARMOR]护甲[/ARMOR]。`, // chino
			`Ataki usuwają 5% [ARMOR]pancerza[/ARMOR] celu.` // polaco
	    ]
	},
	corrosionMega: {
	    id: 'corrosionMega',
	    name: [
	        'Corrosion',
	        'Corrosión',
	        'Corrosion',
	        'Corrosão',
	        'Corrosione',
	        'Korrosion',
	        'ふしょく',
	        '부식',
	        '腐蚀',
	        'Korozja'
	    ],
	    description: [
			`Attacks remove 7.5% of the target's [ARMOR]armor[/ARMOR]. Summons [VR]Virulent Reef[/VR].`, // inglés
			`Los ataques eliminan un 7,5% de la [ARMOR]armadura[/ARMOR] del objetivo. Invoca [VR]Arrecife Virulento[/VR].`, // español
			`Les attaques retirent 7,5 % de l'[ARMOR]armure[/ARMOR] de la cible. Invoque [VR]Récif Virulent[/VR].`, // francés
			`Os ataques removem 7,5% da [ARMOR]armadura[/ARMOR] do alvo. Invoca [VR]Recife Virulento[/VR].`, // portugués
			`Gli attacchi rimuovono il 7,5% dell'[ARMOR]armatura[/ARMOR] del bersaglio. Evoca [VR]Scogliera Virulenta[/VR].`, // italiano
			`Angriffe entfernen 7,5 % der [ARMOR]Rüstung[/ARMOR] des Ziels. Beschwört [VR]Virulentes Riff[/VR].`, // alemán
			`攻撃はターゲットの[ARMOR]アーマー[/ARMOR]を7.5%減少させる。[VR]猛毒の礁[/VR]を召喚する。`, // japonés
			`공격은 대상의 [ARMOR]방어력[/ARMOR]의 7.5%를 제거합니다. [VR]맹독의 암초[/VR]를 소환합니다.`, // coreano
			`攻击会移除目标[ARMOR]护甲[/ARMOR]的7.5%。召唤[VR]剧毒礁石[/VR]。`, // chino
			`Ataki usuwają 7,5% [ARMOR]pancerza[/ARMOR] celu. Przywołuje [VR]Jadowitą Rafę[/VR].` // polaco
		]
	},
	bubbleBeam: {
	    id: 'bubbleBeam',
	    name: [
	        'Bubble Beam',
	        'Rayo Burbuja',
	        `Bulles d'O`,
	        'Jato de Bolhas',
	        'Bollarraggio',
	        'Blubbstrahl',
	        'バブルこうせん',
	        '거품광선',
	        '泡沫光線',
	        'Bąbelkowy Promień'
	    ],
	    description: [
	    	`Fires bursts of 8 [PROJECTILE]projectiles[/PROJECTILE].`, // inglés
			`Dispara ráfagas de 8 [PROJECTILE]proyectiles[/PROJECTILE].`, // español
			`Tire des salves de 8 [PROJECTILE]projectiles[/PROJECTILE].`, // francés
			`Dispara rajadas de 8 [PROJECTILE]projéteis[/PROJECTILE].`, // portugués
			`Spara raffiche di 8 [PROJECTILE]proiettili[/PROJECTILE].`, // italiano
			`Feuert Salven aus 8 [PROJECTILE]Projektilen[/PROJECTILE] ab.`, // alemán
			`8[PROJECTILE]発の投射物[/PROJECTILE]を連続して発射する。`, // japonés
			`8[PROJECTILE]개의 투사체[/PROJECTILE]를 연속으로 발사합니다.`, // coreano
			`连续发射8[PROJECTILE]枚投射物[/PROJECTILE]。`, // chino
			`Wystrzeliwuje salwy po 8 [PROJECTILE]pocisków[/PROJECTILE].` // polaco
	    ]
	},
	hyperDrill: {
	    id: 'hyperDrill',
	    name: [
	        'Hyper Drill',        // Inglés
        	'Hipertaladro',      // Español
        	'Hyperceuse',        // Francés
        	'Broca de Hiper',    // Portugués
        	'Iperperforatrice',  // Italiano
        	'Hyperbohrer',       // Alemán
        	'ハイパードリル',      // Japonés
        	'하이퍼드릴',          // Coreano
       	 	'強力鑽',             // Chino
       	 	'Hiperwiertło'       // Polaco
	    ],
	    description: [
			`Fires bursts of [PROJECTILE]3 projectiles[/PROJECTILE]. [PROJECTILE]Projectiles[/PROJECTILE] explode in an [SHAPE]area[/SHAPE], causing half damage to nearby [ENEMY]enemies[/ENEMY] and [SLOW]slow[/SLOW] for 2 seconds.`, // inglés
			`Dispara ráfagas de [PROJECTILE]3 proyectiles[/PROJECTILE]. Los [PROJECTILE]proyectiles[/PROJECTILE] explotan en un [SHAPE]área[/SHAPE], causando la mitad de daño a los [ENEMY]enemigos[/ENEMY] cercanos y aplicando [SLOW]ralentización[/SLOW] durante 2 segundos.`, // español
			`Tire des rafales de [PROJECTILE]3 projectiles[/PROJECTILE]. Les [PROJECTILE]projectiles[/PROJECTILE] explosent dans une [SHAPE]zone[/SHAPE], infligeant la moitié des dégâts aux [ENEMY]ennemis[/ENEMY] proches et les [SLOW]ralentissant[/SLOW] pendant 2 secondes.`, // francés
			`Dispara rajadas de [PROJECTILE]3 projéteis[/PROJECTILE]. Os [PROJECTILE]projéteis[/PROJECTILE] explodem numa [SHAPE]área[/SHAPE], causando metade do dano aos [ENEMY]inimigos[/ENEMY] próximos e aplicando [SLOW]abrandamento[/SLOW] durante 2 segundos.`, // portugués
			`Spara raffiche di [PROJECTILE]3 proiettili[/PROJECTILE]. I [PROJECTILE]proiettili[/PROJECTILE] esplodono in un'[SHAPE]area[/SHAPE], infliggendo metà dei danni ai [ENEMY]nemici[/ENEMY] vicini e applicando [SLOW]rallentamento[/SLOW] per 2 secondi.`, // italiano
			`Feuert Salven aus [PROJECTILE]3 Projektilen[/PROJECTILE]. Die [PROJECTILE]Projektile[/PROJECTILE] explodieren in einem [SHAPE]Bereich[/SHAPE], verursachen bei nahen [ENEMY]Gegnern[/ENEMY] halben Schaden und [SLOW]verlangsamen[/SLOW] sie 2 Sekunden lang.`, // alemán
			`[PROJECTILE]3発の弾[/PROJECTILE]を連続して発射する。[PROJECTILE]弾[/PROJECTILE]は[SHAPE]範囲[/SHAPE]内で爆発し、近くの[ENEMY]敵[/ENEMY]に半分のダメージを与え、2秒間[SLOW]スロウ[/SLOW]状態にする。`, // japonés
			`[PROJECTILE]투사체 3개[/PROJECTILE]를 연속으로 발사한다. [PROJECTILE]투사체[/PROJECTILE]가 [SHAPE]범위[/SHAPE] 내에서 폭발해 주변 [ENEMY]적[/ENEMY]에게 절반의 피해를 주고 2초 동안 [SLOW]둔화[/SLOW]시킨다.`, // coreano
			`连续发射一连串[PROJECTILE]3枚投射物[/PROJECTILE]。[PROJECTILE]投射物[/PROJECTILE]会在一个[SHAPE]区域[/SHAPE]内爆炸，对附近的[ENEMY]敌人[/ENEMY]造成一半伤害，并使其[SLOW]减速[/SLOW]2秒。`, // chino
			`Wystrzeliwuje serie po [PROJECTILE]3 pociski[/PROJECTILE]. [PROJECTILE]Pociski[/PROJECTILE] wybuchają na [SHAPE]obszarze[/SHAPE], zadając pobliskim [ENEMY]wrogom[/ENEMY] połowę obrażeń i nakładając [SLOW]spowolnienie[/SLOW] na 2 sekundy.` // polaco
		]
	},
	zapCannon: {
	    id: "zapCannon",
	    name: [
	        "Zap Cannon",
	        "Electrocañón",
	        "Élecanon",
	        "Canhão Zap",
	        "Falcecannone",
	        "Blitzkanone",
	        "でんじほう",
	        "전자포",
	        "电磁炮",
	        "Działo Zap"
	    ],
	    description: [
	        `Fires a [PROJECTILE]beam[/PROJECTILE] in a straight line with a 30% chance to [STUN]stun[/STUN] targets for 2 seconds.`, // inglés
			`Dispara un [PROJECTILE]rayo[/PROJECTILE] en línea recta con un 30% de probabilidad de [STUN]aturdir[/STUN] a los objetivos durante 2 segundos.`, // español
			`Tire un [PROJECTILE]rayon[/PROJECTILE] en ligne droite avec 30 % de chances d'[STUN]étourdir[/STUN] les cibles pendant 2 seconde.`, // francés
			`Dispara um [PROJECTILE]raio[/PROJECTILE] em linha reta com 30% de chance de [STUN]atordoar[/STUN] os alvos por 2 segundo.`, // portugués
			`Spara un [PROJECTILE]raggio[/PROJECTILE] in linea retta con una probabilità del 30% di [STUN]stordire[/STUN] i bersagli per 2 secondi.`, // italiano
			`Feuert einen [PROJECTILE]Strahl[/PROJECTILE] in einer geraden Linie ab, mit einer Chance von 30 %, Ziele 2 Sekunden lang zu [STUN]betäuben[/STUN].`, // alemán
			`[PROJECTILE]ビーム[/PROJECTILE]を一直線に発射し、30%の確率で対象を2秒間[STUN]ひるませる[/STUN]。`, // japonés
			`[PROJECTILE]빔[/PROJECTILE]을 직선으로 발사하여 30% 확률로 대상을 2초 동안 [STUN]기절[/STUN]시킵니다.`, // coreano
			`沿直线发射[PROJECTILE]光束[/PROJECTILE]，有30%的概率使目标[STUN]眩晕[/STUN]2秒。`, // chino
			`Wystrzeliwuje [PROJECTILE]wiązkę[/PROJECTILE] w linii prostej z 30% szans na [STUN]ogłuszenie[/STUN] celów na 2 sekundy.` // polaco
	    ]
	},
	waterCompaction: {
	    id: 'waterCompaction',
	    name: [
	        'Water Compaction',
	        'Hidrorrefuerzo',
	        'Sable Humide',
	        'Compactação de Água',
	        'Idrorinforzo',
	        'Wasser-Verfestigung',
	        'みずがため',
	        '수분굳기',
	        '遇水凝固',
	        'Wodne Zagęszczenie'
	    ],
	    description: [
			`Increases [POWER]power[/POWER], [CRITICAL]critical hit chance[/CRITICAL], and [CRITICAL]critical damage[/CRITICAL] by 30% in [RAIN]rain[/RAIN] or [SANDSTORM]sandstorm[/SANDSTORM].`, // inglés
			`Aumenta el [POWER]poder[/POWER], la [CRITICAL]probabilidad de golpe crítico[/CRITICAL] y el [CRITICAL]daño crítico[/CRITICAL] un 30% bajo [RAIN]lluvia[/RAIN] o [SANDSTORM]tormenta de arena[/SANDSTORM].`, // español
			`Augmente la [POWER]puissance[/POWER], les [CRITICAL]chances de coup critique[/CRITICAL] et les [CRITICAL]dégâts critiques[/CRITICAL] de 30 % sous la [RAIN]pluie[/RAIN] ou la [SANDSTORM]tempête de sable[/SANDSTORM].`, // francés
			`Aumenta o [POWER]poder[/POWER], a [CRITICAL]chance de acerto crítico[/CRITICAL] e o [CRITICAL]dano crítico[/CRITICAL] em 30% durante a [RAIN]chuva[/RAIN] ou a [SANDSTORM]tempestade de areia[/SANDSTORM].`, // portugués
			`Aumenta la [POWER]potenza[/POWER], la [CRITICAL]probabilità di colpo critico[/CRITICAL] e il [CRITICAL]danno critico[/CRITICAL] del 30% durante la [RAIN]pioggia[/RAIN] o la [SANDSTORM]tempesta di sabbia[/SANDSTORM].`, // italiano
			`Erhöht [POWER]Stärke[/POWER], [CRITICAL]Volltrefferchance[/CRITICAL] und [CRITICAL]Volltrefferschaden[/CRITICAL] bei [RAIN]Regen[/RAIN] oder [SANDSTORM]Sandsturm[/SANDSTORM] um 30 %.`, // alemán
			`[RAIN]雨[/RAIN]または[SANDSTORM]砂嵐[/SANDSTORM]のとき、[POWER]威力[/POWER]、[CRITICAL]急所率[/CRITICAL]、[CRITICAL]急所ダメージ[/CRITICAL]が30%上昇する。`, // japonés
			`[RAIN]비[/RAIN] 또는 [SANDSTORM]모래바람[/SANDSTORM] 상태에서 [POWER]위력[/POWER], [CRITICAL]급소 확률[/CRITICAL], [CRITICAL]급소 피해량[/CRITICAL]이 30% 증가한다.`, // coreano
			`在[RAIN]雨天[/RAIN]或[SANDSTORM]沙暴[/SANDSTORM]天气下，[POWER]威力[/POWER]、[CRITICAL]会心率[/CRITICAL]和[CRITICAL]会心伤害[/CRITICAL]提高30%。`, // chino
			`Zwiększa [POWER]moc[/POWER], [CRITICAL]szansę na cios krytyczny[/CRITICAL] i [CRITICAL]obrażenia krytyczne[/CRITICAL] o 30% podczas [RAIN]deszczu[/RAIN] lub [SANDSTORM]burzy piaskowej[/SANDSTORM].` // polaco
		]
	},
	shiftGear: {
	    id: 'shiftGear',
	    name: [
		    'Shift Gear',
	        'Cambio de Marcha',
	        'Change Vitesse',
	        'Troca de Marcha',
	        'Cambiomarcia',
	        'Gangwechsel',
	        'ギアチェンジ',
	        '기어체인지',
	        '换挡',
	        'Zmiana Biegu'
	    ],
	    description: [
			`[PROJECTILE]Projectiles orbit[/PROJECTILE] the user. Each time they hit, their [SPEED]orbital speed[/SPEED] increases.`, // inglés
			`Los [PROJECTILE]proyectiles orbitan[/PROJECTILE] al usuario. Cada vez que impactan, aumenta su [SPEED]velocidad orbital[/SPEED].`, // español
			`Les [PROJECTILE]projectiles orbitent[/PROJECTILE] autour de l'utilisateur. À chaque impact, leur [SPEED]vitesse orbitale[/SPEED] augmente.`, // francés
			`Os [PROJECTILE]projéteis orbitam[/PROJECTILE] o usuário. Cada vez que acertam, sua [SPEED]velocidade orbital[/SPEED] aumenta.`, // portugués
			`I [PROJECTILE]proiettili orbitano[/PROJECTILE] attorno all'utilizzatore. Ogni volta che colpiscono, la loro [SPEED]velocità orbitale[/SPEED] aumenta.`, // italiano
			`[PROJECTILE]Projektile umkreisen[/PROJECTILE] den Anwender. Jedes Mal, wenn sie treffen, erhöht sich ihre [SPEED]Orbitgeschwindigkeit[/SPEED].`, // alemán
			`[PROJECTILE]投射物は使用者の周りを回る[/PROJECTILE]。命中するたびに[SPEED]公転速度[/SPEED]が上がる。`, // japonés
			`[PROJECTILE]투사체가 사용자의 주위를 공전합니다[/PROJECTILE]. 적중할 때마다 [SPEED]공전 속도[/SPEED]가 증가합니다.`, // coreano
			`[PROJECTILE]投射物环绕[/PROJECTILE]使用者。每次命中时，其[SPEED]环绕速度[/SPEED]都会提高。`, // chino
			`[PROJECTILE]Pociski orbitują[/PROJECTILE] wokół użytkownika. Za każdym razem, gdy trafią, ich [SPEED]prędkość orbitalna[/SPEED] wzrasta.` // polaco
		]
	},
	armorCannon: {
	    id: 'armorCannon',
	    name: [
	        'Armor Cannon',
	        'Cañón Armadura',
	        'Canon Armure',
	        'Canhão de Armadura',
	        'Armocannone',
	        'Rüstungskanone',
	        'アーマーキャノン',
	        '아머캐논',
	        '铠甲炮',
	        'Pancerne Działo'
	    ],
	    description: [
			`[PROJECTILE]Projectiles[/PROJECTILE] explode in an [SHAPE]area[/SHAPE], causing half damage to nearby [ENEMY]enemies[/ENEMY]. Reduces [SPEED]recharge time[/SPEED] by 0.1s for each [HEART]missing heart[/HEART].`, // inglés
			`Los [PROJECTILE]proyectiles[/PROJECTILE] explotan en un [SHAPE]área[/SHAPE], infligiendo la mitad de daño a los [ENEMY]enemigos[/ENEMY] cercanos. Reduce el [SPEED]tiempo de recarga[/SPEED] en 0,1 s por cada [HEART]corazón perdido[/HEART].`, // español
			`Les [PROJECTILE]projectiles[/PROJECTILE] explosent dans une [SHAPE]zone[/SHAPE], infligeant la moitié des dégâts aux [ENEMY]ennemis[/ENEMY] proches. Réduit le [SPEED]temps de recharge[/SPEED] de 0,1 s pour chaque [HEART]cœur manquant[/HEART].`, // francés
			`Os [PROJECTILE]projéteis[/PROJECTILE] explodem em uma [SHAPE]área[/SHAPE], causando metade do dano aos [ENEMY]inimigos[/ENEMY] próximos. Reduz o [SPEED]tempo de recarga[/SPEED] em 0,1 s para cada [HEART]coração perdido[/HEART].`, // portugués
			`I [PROJECTILE]proiettili[/PROJECTILE] esplodono in un'[SHAPE]area[/SHAPE], infliggendo metà dei danni ai [ENEMY]nemici[/ENEMY] vicini. Riduce il [SPEED]tempo di ricarica[/SPEED] di 0,1 s per ogni [HEART]cuore mancante[/HEART].`, // italiano
			`[PROJECTILE]Projektile[/PROJECTILE] explodieren in einem [SHAPE]Bereich[/SHAPE] und verursachen bei [ENEMY]Gegnern[/ENEMY] in der Nähe halben Schaden. Reduziert die [SPEED]Aufladezeit[/SPEED] für jedes [HEART]fehlende Herz[/HEART] um 0,1 s.`, // alemán
			`[PROJECTILE]投射物[/PROJECTILE]は[SHAPE]範囲[/SHAPE]で爆発し、近くの[ENEMY]敵[/ENEMY]に半分のダメージを与える。[HEART]失ったハート[/HEART]1個につき、[SPEED]再使用時間[/SPEED]が0.1秒短くなる。`, // japonés
			`[PROJECTILE]투사체[/PROJECTILE]가 [SHAPE]범위[/SHAPE]에서 폭발하여 주변 [ENEMY]적[/ENEMY]에게 절반의 피해를 줍니다. [HEART]잃은 하트[/HEART] 하나당 [SPEED]재사용 대기 시간[/SPEED]이 0.1초 감소합니다.`, // coreano
			`[PROJECTILE]投射物[/PROJECTILE]会在[SHAPE]范围[/SHAPE]内爆炸，对附近的[ENEMY]敌人[/ENEMY]造成一半伤害。每缺少一个[HEART]心[/HEART]，[SPEED]冷却时间[/SPEED]缩短0.1秒。`, // chino
			`[PROJECTILE]Pociski[/PROJECTILE] eksplodują na [SHAPE]obszarze[/SHAPE], zadając połowę obrażeń pobliskim [ENEMY]wrogom[/ENEMY]. Skraca [SPEED]czas odnowienia[/SPEED] o 0,1 s za każde [HEART]brakujące serce[/HEART].` // polaco
		]
	},
	bitterBlade: {
	    id: 'bitterBlade',
	    name: [
	        'Bitter Blade',
	        'Espada Lamento',
	        'Lame Envoûtée',
	        'Espada Amarga',
	        'Lama del Rimorso',
	        'Bitterklinge',
	        'むねんのつるぎ',
	        '원한의칼',
	        '悔念剑',
	        'Gorzkie Ostrze'
	    ],
	    description: [
			`Shoots [PROJECTILE]projectiles[/PROJECTILE] at up to 2 targets at once and has 1% chance to restore [HEART]1 heart[/HEART] (1 use per wave).`, // inglés
			`Dispara [PROJECTILE]proyectiles[/PROJECTILE] a un máximo de 2 objetivos a la vez y tiene un 1% de probabilidad de restaurar [HEART]1 corazón[/HEART] (1 uso por oleada).`, // español
			`Tire des [PROJECTILE]projectiles[/PROJECTILE] sur jusqu'à 2 cibles à la fois et a 1 % de chances de restaurer [HEART]1 cœur[/HEART] (1 utilisation par vague).`, // francés
			`Dispara [PROJECTILE]projéteis[/PROJECTILE] contra até 2 alvos ao mesmo tempo e tem 1% de chance de restaurar [HEART]1 coração[/HEART] (1 uso por onda).`, // portugués
			`Spara [PROJECTILE]proiettili[/PROJECTILE] contro un massimo di 2 bersagli alla volta e ha una probabilità dell'1% di ripristinare [HEART]1 cuore[/HEART] (1 utilizzo per ondata).`, // italiano
			`Schießt [PROJECTILE]Projektile[/PROJECTILE] auf bis zu 2 Ziele gleichzeitig und hat eine Chance von 1 %, [HEART]1 Herz[/HEART] wiederherzustellen (1 Nutzung pro Welle).`, // alemán
			`最大2体の対象に同時に[PROJECTILE]投射物[/PROJECTILE]を発射し、1%の確率で[HEART]ハート[/HEART]を1個回復する（1ウェーブにつき1回）。`, // japonés
			`최대 2명의 대상에게 동시에 [PROJECTILE]투사체[/PROJECTILE]를 발사하며 1% 확률로 [HEART]하트[/HEART] 1개를 회복합니다 (웨이브당 1회).`, // coreano
			`同时向最多2个目标发射[PROJECTILE]投射物[/PROJECTILE]，并有1%的概率恢复[HEART]1个心[/HEART]（每波次1次）。`, // chino
			`Wystrzeliwuje [PROJECTILE]pociski[/PROJECTILE] w maksymalnie 2 cele jednocześnie i ma 1% szans na przywrócenie [HEART]1 serca[/HEART] (1 użycie na falę).` // polaco
		]
	},
	noGuard: {
		id: "noGuard",
		name: [
			"No Guard",
			"Indefenso",
			"Annule Garde",
			"Sem Guarda",
			"Nullodifesa",
			"Schildlos",
			"ノーガード",
			"노가드",
			"无防守",
			"No Guard"
		],
		description: [
		  	`Has [RANGE]unlimited range[/RANGE] if located on [MOUNTAIN]mountain[/MOUNTAIN]. Increases the damage of its [PROJECTILE]projectiles[/PROJECTILE] by 5% for every 100 units traveled.`, // inglés
			`Tiene [RANGE]alcance ilimitado[/RANGE] si está situado en [MOUNTAIN]montaña[/MOUNTAIN]. Aumenta el daño de sus [PROJECTILE]proyectiles[/PROJECTILE] un 5% por cada 100 unidades recorridas.`, // español
			`A une [RANGE]portée illimitée[/RANGE] s'il est situé sur une [MOUNTAIN]montagne[/MOUNTAIN]. Augmente les dégâts de ses [PROJECTILE]projectiles[/PROJECTILE] de 5 % pour chaque 100 unités parcourues.`, // francés
			`Tem [RANGE]alcance ilimitado[/RANGE] se estiver localizado em [MOUNTAIN]montanha[/MOUNTAIN]. Aumenta o dano de seus [PROJECTILE]projéteis[/PROJECTILE] em 5% a cada 100 unidades percorridas.`, // portugués
			`Ha [RANGE]gittata illimitata[/RANGE] se si trova su una [MOUNTAIN]montagna[/MOUNTAIN]. Aumenta i danni dei suoi [PROJECTILE]proiettili[/PROJECTILE] del 5% ogni 100 unità percorse.`, // italiano
			`Hat [RANGE]unbegrenzte Reichweite[/RANGE], wenn es sich auf einem [MOUNTAIN]Berg[/MOUNTAIN] befindet. Erhöht den Schaden seiner [PROJECTILE]Projektile[/PROJECTILE] für jeweils 100 zurückgelegte Einheiten um 5 %.`, // alemán
			`[MOUNTAIN]山[/MOUNTAIN]にいる場合、[RANGE]射程が無限[/RANGE]になる。移動した距離100ごとに、[PROJECTILE]投射物[/PROJECTILE]のダメージが5%上がる。`, // japonés
			`[MOUNTAIN]산[/MOUNTAIN]에 배치되어 있으면 [RANGE]사거리가 무제한[/RANGE]이 됩니다. 이동한 거리 100마다 [PROJECTILE]투사체[/PROJECTILE]의 피해량이 5% 증가합니다.`, // coreano
			`如果位于[MOUNTAIN]山地[/MOUNTAIN]上，则拥有[RANGE]无限射程[/RANGE]。其[PROJECTILE]投射物[/PROJECTILE]每飞行100单位距离，造成的伤害提高5%。`, // chino
			`Ma [RANGE]nieograniczony zasięg[/RANGE], gdy znajduje się na [MOUNTAIN]górze[/MOUNTAIN]. Zwiększa obrażenia zadawane przez jego [PROJECTILE]pociski[/PROJECTILE] o 5% za każde przebyte 100 jednostek.` // polaco
		]
	},
	magicBounce: {
		id: 'magicBounce',
		name: [
			'Magic Bounce',
			'Espejo Mágico',
			'Miroir Magik',
			'Espelho Mágico',
			'Magicscudo',
			'Magiespiegel',
			'マジックミラー',
			'매직미러',
			'魔法镜',
			'Magic Bounce'
		],
		description: [
			`Attacks [RICOCHET]ricochet[/RICOCHET] between [ENEMY]enemies[/ENEMY], [CURSE]curses[/CURSE] them and deal damage to all [ENEMY]cursed enemies[/ENEMY].`, // inglés
			`Los ataques [RICOCHET]rebotan[/RICOCHET] entre los [ENEMY]enemigos[/ENEMY], les aplican [CURSE]maldición[/CURSE] y causan daño a todos los [ENEMY]enemigos malditos[/ENEMY].`, // español
			`Les attaques [RICOCHET]ricochent[/RICOCHET] entre les [ENEMY]ennemis[/ENEMY], les [CURSE]maudissent[/CURSE] et infligent des dégâts à tous les [ENEMY]ennemis maudits[/ENEMY].`, // francés
			`Os ataques [RICOCHET]ricocheteiam[/RICOCHET] entre os [ENEMY]inimigos[/ENEMY], aplicam [CURSE]maldição[/CURSE] neles e causam dano a todos os [ENEMY]inimigos amaldiçoados[/ENEMY].`, // portugués
			`Gli attacchi [RICOCHET]rimbalzano[/RICOCHET] tra i [ENEMY]nemici[/ENEMY], li [CURSE]maledicono[/CURSE] e infliggono danni a tutti i [ENEMY]nemici maledetti[/ENEMY].`, // italiano
			`Angriffe [RICOCHET]prallen[/RICOCHET] zwischen [ENEMY]Gegnern[/ENEMY] ab, [CURSE]verfluchen[/CURSE] sie und fügen allen [ENEMY]verfluchten Gegnern[/ENEMY] Schaden zu.`, // alemán
			`攻撃が[ENEMY]敵[/ENEMY]の間を[RICOCHET]跳ね返り[/RICOCHET]、[CURSE]のろい[/CURSE]をかけ、すべての[ENEMY]のろわれた敵[/ENEMY]にダメージを与える。`, // japonés
			`공격이 [ENEMY]적[/ENEMY] 사이를 [RICOCHET]튕겨 다니며[/RICOCHET] [CURSE]저주[/CURSE]를 걸고 모든 [ENEMY]저주받은 적[/ENEMY]에게 피해를 줍니다.`, // coreano
			`攻击会在[ENEMY]敌人[/ENEMY]之间[RICOCHET]弹射[/RICOCHET]，对其施加[CURSE]诅咒[/CURSE]，并对所有[ENEMY]被诅咒的敌人[/ENEMY]造成伤害。`, // chino
			`Ataki [RICOCHET]odbijają się[/RICOCHET] między [ENEMY]wrogami[/ENEMY], nakładają na nich [CURSE]klątwę[/CURSE] i zadają obrażenia wszystkim [ENEMY]przeklętym wrogom[/ENEMY].` // polaco
		]
	},
	moldBreaker: {
		id: 'moldBreaker',
		name: [
			'Mold Breaker',
			'Rompemoldes',
			'Brise-Moule',
			'Quebra-Molde',
			'Rompiforma',
			'Überbrückung',
			'かたやぶり',
			'틀깨기',
			'破格',
			'Mocny Atak'
		],
		description: [
			`Attacks have a 30% chance to [STUN]stun[/STUN] for 1.5 seconds. Can [STUN]stun[/STUN] [ENEMY]stun-resistant enemies[/ENEMY] with half duration.`, // inglés
			`Los ataques tienen un 30% de probabilidad de [STUN]aturdir[/STUN] durante 1,5 segundos. Puede [STUN]aturdir[/STUN] a [ENEMY]enemigos resistentes al aturdimiento[/ENEMY] durante la mitad de tiempo.`, // español
			`Les attaques ont 30 % de chances d'[STUN]étourdir[/STUN] pendant 1,5 seconde. Peut [STUN]étourdir[/STUN] les [ENEMY]ennemis résistants à l'étourdissement[/ENEMY] pendant la moitié de la durée.`, // francés
			`Os ataques têm 30% de chance de [STUN]atordoar[/STUN] por 1,5 segundo. Pode [STUN]atordoar[/STUN] [ENEMY]inimigos resistentes a atordoamento[/ENEMY] pela metade da duração.`, // portugués
			`Gli attacchi hanno una probabilità del 30% di [STUN]stordire[/STUN] per 1,5 secondi. Può [STUN]stordire[/STUN] i [ENEMY]nemici resistenti allo stordimento[/ENEMY] per metà della durata.`, // italiano
			`Angriffe haben eine Chance von 30 %, 1,5 Sekunden lang [STUN]zu betäuben[/STUN]. Kann [ENEMY]betäubungsresistente Gegner[/ENEMY] mit halber Dauer [STUN]betäuben[/STUN].`, // alemán
			`攻撃は30%の確率で1.5秒間[STUN]ひるませる[/STUN]。 [ENEMY]ひるみに耐性のある敵[/ENEMY]も[STUN]ひるませる[/STUN]ことができるが、効果時間は半分になる。`, // japonés
			`공격 시 30% 확률로 1.5초 동안 [STUN]기절[/STUN]시킵니다. [ENEMY]기절 내성이 있는 적[/ENEMY]도 [STUN]기절[/STUN]시킬 수 있지만 지속시간은 절반입니다.`, // coreano
			`攻击有30%的概率造成持续1.5秒的[STUN]眩晕[/STUN]。可以[STUN]眩晕[/STUN][ENEMY]抗眩晕的敌人[/ENEMY]，但持续时间减半。`, // chino
			`Ataki mają 30% szans na [STUN]ogłuszenie[/STUN] na 1,5 sekundy. Może [STUN]ogłuszać[/STUN] [ENEMY]wrogów odpornych na ogłuszenie[/ENEMY] przez połowę czasu.` // polaco
		]
	},
	sandRush: {
		id: 'sandRush',
		name: [
			'Sand Rush',
			'Ímpetu Arena',
			'Baigne Sable',
			'Ímpeto de Areia',
			'Remasabbia',
			'Sandscharrer',
			'すなかき',
			'쓱쓱',
			'泼沙',
			'Piaskowy Pęd'
		],
		description: [
			`Reduces [SPEED]recharge time[/SPEED] by 50% in [SANDSTORM]sandstorm[/SANDSTORM].`, // inglés
			`Reduce el [SPEED]tiempo de recarga[/SPEED] un 50% bajo [SANDSTORM]tormenta de arena[/SANDSTORM].`, // español
			`Réduit le [SPEED]temps de recharge[/SPEED] de 50 % sous [SANDSTORM]tempête de sable[/SANDSTORM].`, // francés
			`Reduz o [SPEED]tempo de recarga[/SPEED] em 50% sob [SANDSTORM]tempestade de areia[/SANDSTORM].`, // portugués
			`Riduce il [SPEED]tempo di ricarica[/SPEED] del 50% durante la [SANDSTORM]tempesta di sabbia[/SANDSTORM].`, // italiano
			`Reduziert die [SPEED]Aufladezeit[/SPEED] bei [SANDSTORM]Sandsturm[/SANDSTORM] um 50 %.`, // alemán
			`[SANDSTORM]すなあらし[/SANDSTORM]のとき、[SPEED]再使用時間[/SPEED]が50%短くなる。`, // japonés
			`[SANDSTORM]모래바람[/SANDSTORM]일 때 [SPEED]재사용 대기 시간[/SPEED]이 50% 감소합니다.`, // coreano
			`在[SANDSTORM]沙暴[/SANDSTORM]天气下，[SPEED]冷却时间[/SPEED]缩短50%。`, // chino
			`Skraca [SPEED]czas odnowienia[/SPEED] o 50% podczas [SANDSTORM]burzy piaskowej[/SANDSTORM].` // polaco
		]
	},
	featherDance: {
		id: 'featherDance',
		name: [
			'Feather Dance',
			'Danza Pluma', 
			'Danse Plumes',
			'Dança das Penas',
			'Cinèsi',
			'Daunentanz',
			'フェザーダンス',
			'깃털댄스',
			'羽毛舞',
			'Taniec Piór'
		],
		description: [
			`If no target is in range, it stores [PROJECTILE]projectiles[/PROJECTILE] (max 20). When attacking, it launches all [PROJECTILE]stored projectiles[/PROJECTILE].`, // inglés
			`Si no hay ningún objetivo en su alcance, almacena [PROJECTILE]proyectiles[/PROJECTILE] (máximo 20). Al atacar, lanza todos los [PROJECTILE]proyectiles almacenados[/PROJECTILE].`, // español
			`Si aucune cible n'est à portée, stocke des [PROJECTILE]projectiles[/PROJECTILE] (20 maximum). Lorsqu'il attaque, il lance tous les [PROJECTILE]projectiles stockés[/PROJECTILE].`, // francés
			`Se não houver nenhum alvo ao alcance, armazena [PROJECTILE]projéteis[/PROJECTILE] (máximo de 20). Ao atacar, lança todos os [PROJECTILE]projéteis armazenados[/PROJECTILE].`, // portugués
			`Se non ci sono bersagli a portata, accumula [PROJECTILE]proiettili[/PROJECTILE] (massimo 20). Quando attacca, lancia tutti gli [PROJECTILE]proiettili accumulati[/PROJECTILE].`, // italiano
			`Wenn sich kein Ziel in Reichweite befindet, speichert es [PROJECTILE]Projektile[/PROJECTILE] (maximal 20). Beim Angriff feuert es alle [PROJECTILE]gespeicherten Projektile[/PROJECTILE] ab.`, // alemán
			`射程内に対象がいない場合、[PROJECTILE]投射物[/PROJECTILE]を最大20個まで蓄える。攻撃時、蓄えたすべての[PROJECTILE]投射物[/PROJECTILE]を発射する。`, // japonés
			`사거리 내에 대상이 없으면 [PROJECTILE]투사체[/PROJECTILE]를 최대 20개까지 저장합니다. 공격할 때 저장된 모든 [PROJECTILE]투사체[/PROJECTILE]를 발사합니다.`, // coreano
			`如果射程内没有目标，则储存[PROJECTILE]投射物[/PROJECTILE]（最多20个）。攻击时，会发射所有[PROJECTILE]储存的投射物[/PROJECTILE]。`, // chino
			`Jeśli w zasięgu nie ma celu, przechowuje [PROJECTILE]pociski[/PROJECTILE] (maks. 20). Podczas ataku wystrzeliwuje wszystkie [PROJECTILE]przechowywane pociski[/PROJECTILE].` // polaco
		]
	},
	tailGlow: {
		id: 'tailGlow',
		name: [
			'Tail Glow',
			'Luminicola', 
			'Lumiéclat',
			'Cauda Brilhante',
			'Codaluce',
			'Schweifglanz',
			'ほたるび',
			'반딧불',
			'萤火',
			'Rozbłysk Ogona'
		],
		description: [
			`Increases [POWER]power[/POWER] by 75% if any [HEART]heart[/HEART] has been restored during this wave.`, // inglés
			`Aumenta el [POWER]poder[/POWER] un 75% si se ha restaurado algún [HEART]corazón[/HEART] durante esta oleada.`, // español
			`Augmente la [POWER]puissance[/POWER] de 75 % si un [HEART]cœur[/HEART] a été restauré pendant cette vague.`, // francés
			`Aumenta o [POWER]poder[/POWER] em 75% se algum [HEART]coração[/HEART] tiver sido restaurado durante esta onda.`, // portugués
			`Aumenta la [POWER]potenza[/POWER] del 75% se un [HEART]cuore[/HEART] è stato ripristinato durante questa ondata.`, // italiano
			`Erhöht die [POWER]Kraft[/POWER] um 75 %, wenn während dieser Welle ein [HEART]Herz[/HEART] wiederhergestellt wurde.`, // alemán
			`このウェーブ中に[HEART]ハート[/HEART]が1個でも回復している場合、[POWER]威力[/POWER]が75%上がる。`, // japonés
			`이번 웨이브 동안 [HEART]하트[/HEART]가 하나라도 회복되었다면 [POWER]위력[/POWER]이 75% 증가합니다.`, // coreano
			`如果在本波次期间恢复过任何[HEART]心[/HEART]，[POWER]威力[/POWER]提高75%。`, // chino
			`Zwiększa [POWER]moc[/POWER] o 75%, jeśli podczas tej fali przywrócono choć jedno [HEART]serce[/HEART].` // polaco
		]
	},
	takeHeart: {
		id: 'takeHeart',
		name: [
			'Take Heart',
			'Anclaje', 
			'Cœur de Lion',
			'Coração Valente',
			'Cuordileone',
			'Mut fassen',
			'たけりたてる',
			'기개더하기',
			'振奋士气',
			'Nabranie Otuchy'
		],
		description: [
			`Attacks have a 5% chance to restore 1 [HEART]heart[/HEART] (2 uses per wave).`, // inglés
			`Los ataques tienen un 5% de probabilidad de restaurar 1 [HEART]corazón[/HEART] (2 usos por oleada).`, // español
			`Les attaques ont 5 % de chances de restaurer 1 [HEART]cœur[/HEART] (2 utilisations par vague).`, // francés
			`Os ataques têm 5% de chance de restaurar 1 [HEART]coração[/HEART] (2 usos por onda).`, // portugués
			`Gli attacchi hanno una probabilità del 5% di ripristinare 1 [HEART]cuore[/HEART] (2 utilizzi per ondata).`, // italiano
			`Angriffe haben eine Chance von 5 %, 1 [HEART]Herz[/HEART] wiederherzustellen (2 Nutzungen pro Welle).`, // alemán
			`攻撃は5%の確率で[HEART]ハート[/HEART]を1個回復する（1ウェーブにつき2回）。`, // japonés
			`공격 시 5% 확률로 [HEART]하트[/HEART] 1개를 회복합니다 (웨이브당 2회).`, // coreano
			`攻击有5%的概率恢复1[HEART]个心[/HEART]（每波次2次）。`, // chino
			`Ataki mają 5% szans na przywrócenie 1 [HEART]serca[/HEART] (2 użycia na falę).` // polaco
		]
	},
	rageFist: {
	    id: 'rageFist',
	    name: [
	        'Rage Fist',         // Inglés
	        'Puño Furia',        // Español
	        'Poing de Colère',   // Francés
	        'Punho de Fúria',    // Portugués
	        'Pugno Furibondo',   // Italiano
	        'Zornfaust',         // Alemán
	        'ふんどのこぶし',      // Japonés (Funno no Kobushi)
	        '분노의주먹',          // Coreano (Bunno-ui Jumeok)
	        '憤怒之拳',           // Chino (Fènnù zhī Quán)
	        'Gniewna Pięść'      // Polaco
	    ],
	    description: [
			`Causes double damage to [ARMOR]armored[/ARMOR] [ENEMY]enemies[/ENEMY]. When damage is received during this wave, increases [POWER]power[/POWER] by 50.`, // inglés
			`Inflige el doble de daño a los [ENEMY]enemigos[/ENEMY] con [ARMOR]armadura[/ARMOR]. Cuando recibe daño durante esta oleada, aumenta su [POWER]poder[/POWER] en 50.`, // español
			`Inflige deux fois plus de dégâts aux [ENEMY]ennemis[/ENEMY] [ARMOR]blindés[/ARMOR]. Lorsqu'il subit des dégâts pendant cette vague, sa [POWER]puissance[/POWER] augmente de 50.`, // francés
			`Causa o dobro de dano aos [ENEMY]inimigos[/ENEMY] [ARMOR]blindados[/ARMOR]. Ao receber dano durante esta onda, seu [POWER]poder[/POWER] aumenta em 50.`, // portugués
			`Infligge il doppio dei danni agli [ENEMY]nemici[/ENEMY] [ARMOR]corazzati[/ARMOR]. Quando subisce danni durante questa ondata, la sua [POWER]potenza[/POWER] aumenta di 50.`, // italiano
			`Verursacht doppelten Schaden bei [ARMOR]gepanzerten[/ARMOR] [ENEMY]Gegnern[/ENEMY]. Wenn während dieser Welle Schaden erlitten wird, erhöht sich die [POWER]Kraft[/POWER] um 50.`, // alemán
			`[ARMOR]アーマー[/ARMOR]を持つ[ENEMY]敵[/ENEMY]には2倍のダメージを与える。このウェーブ中にダメージを受けると、[POWER]パワー[/POWER]が50増加する。`, // japonés
			`[ARMOR]방어구[/ARMOR]를 가진 [ENEMY]적[/ENEMY]에게 2배의 피해를 줍니다. 이 웨이브 동안 피해를 받으면 [POWER]위력[/POWER]이 50 증가합니다.`, // coreano
			`对具有[ARMOR]护甲[/ARMOR]的[ENEMY]敌人[/ENEMY]造成双倍伤害。在本次波次中受到伤害时，[POWER]威力[/POWER]提高50。`, // chino
			`Zadaje podwójne obrażenia [ARMOR]opancerzonym[/ARMOR] [ENEMY]wrogom[/ENEMY]. Gdy otrzyma obrażenia podczas tej fali, zwiększa [POWER]siłę[/POWER] o 50.` // polaco
		]
	},
	auraSphere: {
	    id: 'auraSphere',
	    name: [
	        'Aura Sphere',       // Inglés
	        'Esfera Aural',      // Español
	        'Aurasphère',        // Francés
	        'Esfera de Aura',    // Portugués
	        'Forzasfera',        // Italiano
	        'Aurasphäre',        // Alemán
	        'はどうだん',          // Japonés (波動弾)
	        '파동탄',             // Coreano
	        '波導彈',             // Chino
	        'Aura Sfera'         // Polaco
	    ],
	    description: [
	        `[PROJECTILE]Projectiles[/PROJECTILE] explode in an [SHAPE]area[/SHAPE], dealing full damage to nearby [ENEMY]enemies[/ENEMY]. The size of the [SHAPE]area[/SHAPE] increases by 10% for each [HEART]missing heart[/HEART].`, // inglés
			`Los [PROJECTILE]proyectiles[/PROJECTILE] explotan en un [SHAPE]área[/SHAPE], infligiendo todo el daño a los [ENEMY]enemigos[/ENEMY] cercanos. El tamaño del [SHAPE]área[/SHAPE] aumenta un 10% por cada [HEART]corazón perdido[/HEART].`, // español
			`Les [PROJECTILE]projectiles[/PROJECTILE] explosent dans une [SHAPE]zone[/SHAPE], infligeant tous les dégâts aux [ENEMY]ennemis[/ENEMY] proches. La taille de la [SHAPE]zone[/SHAPE] augmente de 10 % pour chaque [HEART]cœur manquant[/HEART].`, // francés
			`Os [PROJECTILE]projéteis[/PROJECTILE] explodem em uma [SHAPE]área[/SHAPE], causando dano total aos [ENEMY]inimigos[/ENEMY] próximos. O tamanho da [SHAPE]área[/SHAPE] aumenta em 10% para cada [HEART]coração perdido[/HEART].`, // portugués
			`I [PROJECTILE]proiettili[/PROJECTILE] esplodono in un'[SHAPE]area[/SHAPE], infliggendo danni completi ai [ENEMY]nemici[/ENEMY] vicini. Le dimensioni dell'[SHAPE]area[/SHAPE] aumentano del 10% per ogni [HEART]cuore mancante[/HEART].`, // italiano
			`[PROJECTILE]Projektile[/PROJECTILE] explodieren in einem [SHAPE]Bereich[/SHAPE] und verursachen bei [ENEMY]Gegnern[/ENEMY] in der Nähe vollen Schaden. Die Größe des [SHAPE]Bereichs[/SHAPE] erhöht sich für jedes [HEART]fehlende Herz[/HEART] um 10 %.`, // alemán
			`[PROJECTILE]投射物[/PROJECTILE]は[SHAPE]範囲[/SHAPE]で爆発し、近くの[ENEMY]敵[/ENEMY]にすべてのダメージを与える。[HEART]失ったハート[/HEART]1個につき、[SHAPE]範囲[/SHAPE]の大きさが10%増加する。`, // japonés
			`[PROJECTILE]투사체[/PROJECTILE]가 [SHAPE]범위[/SHAPE]에서 폭발하여 주변 [ENEMY]적[/ENEMY]에게 피해를 모두 줍니다. [HEART]잃은 하트[/HEART] 하나당 [SHAPE]범위[/SHAPE]의 크기가 10% 증가합니다.`, // coreano
			`[PROJECTILE]投射物[/PROJECTILE]会在[SHAPE]范围[/SHAPE]内爆炸，对附近的[ENEMY]敌人[/ENEMY]造成完整伤害。[SHAPE]范围[/SHAPE]的大小会根据每缺少一个[HEART]心[/HEART]提高10%。`, // chino
			`[PROJECTILE]Pociski[/PROJECTILE] eksplodują na [SHAPE]obszarze[/SHAPE], zadając pełne obrażenia pobliskim [ENEMY]wrogom[/ENEMY]. Rozmiar [SHAPE]obszaru[/SHAPE] zwiększa się o 10% za każde [HEART]brakujące serce[/HEART].` // polaco
	    ]
	},
	klutz: {
	    id: 'klutz',
	    name: [
	        'Klutz',            // Inglés
	        'Zoquete',            // Español
	        'Maladresse',       // Francés
	        'Trapalhão',        // Portugués
	        'Impaccio',         // Italiano
	        'Tollpatsch',       // Alemán
	        'ぶきよう',           // Japonés (Bukiyō)
	        '서투름',            // Coreano (Seotureum)
	        '笨拙',              // Chino (Bènzhuō)
	        'Klutz'          // Polaco
	    ],
	    description: [
	        `This [POKEMON]pokémon[/POKEMON] cannot hold any [ITEM]ITEM[/ITEM].`, // inglés
			`Este [POKEMON]Pokémon[/POKEMON] no puede llevar ningún [ITEM]OBJETO[/ITEM].`, // español
			`Ce [POKEMON]Pokémon[/POKEMON] ne peut tenir aucun [ITEM]OBJET[/ITEM].`, // francés
			`Este [POKEMON]Pokémon[/POKEMON] não pode segurar nenhum [ITEM]ITEM[/ITEM].`, // portugués
			`Questo [POKEMON]Pokémon[/POKEMON] non può tenere alcuno [ITEM]STRUMENTO[/ITEM].`, // italiano
			`Dieses [POKEMON]Pokémon[/POKEMON] kann kein [ITEM]ITEM[/ITEM] tragen.`, // alemán
			`この[POKEMON]ポケモン[/POKEMON]は[ITEM]どうぐ[/ITEM]を持てない。`, // japonés
			`이 [POKEMON]포켓몬[/POKEMON]은 [ITEM]도구[/ITEM]를 지닐 수 없습니다.`, // coreano
			`这个[POKEMON]宝可梦[/POKEMON]无法携带任何[ITEM]道具[/ITEM]。`, // chino
			`Ten [POKEMON]Pokémon[/POKEMON] nie może trzymać żadnego [ITEM]PRZEDMIOTU[/ITEM].` // polaco
	    ]
	},
	hyperBeam: {
	    id: 'hyperBeam',
	    name: [
	        'Hyper Beam',     // Inglés
	        'Hiperrayo',      // Español
	        'Ultralaser',     // Francés
	        'Hiper-raio',     // Portugués
	        'Iperraggio',     // Italiano
	        'Hyperstrahl',    // Alemán
	        'はかいこうせん',    // Japonés (Hakai Kōsen)
	        '파괴광선',        // Coreano (Paguigwangseon)
	        '破壞光線',        // Chino (Pòhuài Guāngxiàn)
	        'Hiperpromień'    // Polaco
	    ],
	    description: [
	        `Every 5th attack is a piercing [PROJECTILE]beam[/PROJECTILE] that deals triple damage.`, // inglés
			`Cada 5.º ataque es un [PROJECTILE]rayo[/PROJECTILE] perforante que inflige el triple de daño.`, // español
			`Toutes les 5 attaques, une [PROJECTILE]attaque perforante[/PROJECTILE] est lancée et inflige trois fois plus de dégâts.`, // francés
			`A cada 5 ataques, um [PROJECTILE]raio[/PROJECTILE] perfurante é disparado e causa o triplo de dano.`, // portugués
			`Ogni 5° attacco è un [PROJECTILE]raggio[/PROJECTILE] perforante che infligge il triplo dei danni.`, // italiano
			`Jeder 5. Angriff ist ein durchdringender [PROJECTILE]Strahl[/PROJECTILE], der dreifachen Schaden verursacht.`, // alemán
			`5回目の攻撃は貫通する[PROJECTILE]ビーム[/PROJECTILE]となり、3倍のダメージを与える。`, // japonés
			`5번째 공격마다 관통하는 [PROJECTILE]빔[/PROJECTILE]을 발사하여 3배의 피해를 줍니다.`, // coreano
			`每第5次攻击会发射一道穿透性的[PROJECTILE]光束[/PROJECTILE]，造成三倍伤害。`, // chino
			`Co piąty atak jest przebijającym [PROJECTILE]promieniem[/PROJECTILE], który zadaje potrójne obrażenia.` // polaco
	    ]
	},
	illuminate: {
	    id: 'illuminate',
	    name: [
	        'Illuminate',
		  	'Iluminación',
		  	'Lumiattirance',
		  	'Iluminar',
		  	'Risplendi',
		  	'Erleuchtung',
		  	'はっこう',
		  	'발광',
		  	'發光',
		  	'Illuminate'
	    ],
	    description: [
	    	`Increases the [RANGE]range[/RANGE] of nearby [TOWER]towers[/TOWER] by 15 and allows them to hit [POKEMON]invisible enemies[/POKEMON].`, // inglés
			`Aumenta el [RANGE]alcance[/RANGE] de las [TOWER]torres[/TOWER] cercanas en 15 y les permite golpear a [POKEMON]enemigos invisibles[/POKEMON].`, // español
			`Augmente la [RANGE]portée[/RANGE] des [TOWER]tours[/TOWER] à proximité de 15 et leur permet de toucher les [POKEMON]ennemis invisibles[/POKEMON].`, // francés
			`Aumenta o [RANGE]alcance[/RANGE] das [TOWER]torres[/TOWER] próximas em 15 e permite que elas atinjam [POKEMON]inimigos invisíveis[/POKEMON].`, // portugués
			`Aumenta la [RANGE]gittata[/RANGE] delle [TOWER]torri[/TOWER] vicine di 15 e permette loro di colpire i [POKEMON]nemici invisibili[/POKEMON].`, // italiano
			`Erhöht die [RANGE]Reichweite[/RANGE] nahegelegener [TOWER]Türme[/TOWER] um 15 und ermöglicht ihnen, [POKEMON]unsichtbare Gegner[/POKEMON] zu treffen.`, // alemán
			`近くの[TOWER]タワー[/TOWER]の[RANGE]射程[/RANGE]を15増加させ、[POKEMON]見えない敵[/POKEMON]にも攻撃できるようにする。`, // japonés
			`주변 [TOWER]타워[/TOWER]의 [RANGE]사거리[/RANGE]를 15 증가시키고 [POKEMON]투명한 적[/POKEMON]을 공격할 수 있게 합니다.`, // coreano
			`使附近的[TOWER]塔[/TOWER]的[RANGE]射程[/RANGE]提高15，并使其能够攻击[POKEMON]隐形敌人[/POKEMON]。`, // chino
			`Zwiększa [RANGE]zasięg[/RANGE] pobliskich [TOWER]wież[/TOWER] o 15 i pozwala im atakować [POKEMON]niewidzialnych wrogów[/POKEMON].` // polaco
		]
	},
	illuminateBuff: {
	    id: 'illuminateBuff',
	    name: [
	        'Illuminate',
		  	'Iluminación',
		  	'Lumiattirance',
		  	'Iluminar',
		  	'Risplendi',
		  	'Erleuchtung',
		  	'はっこう',
		  	'발광',
		  	'發光',
		  	'Illuminate'
	    ],
	    description: [
		  	`Increases the [RANGE]range[/RANGE] of nearby [TOWER]towers[/TOWER] by 25 and allows them to hit [POKEMON]invisible enemies[/POKEMON].`, // inglés
			`Aumenta el [RANGE]alcance[/RANGE] de las [TOWER]torres[/TOWER] cercanas en 25 y les permite golpear a [POKEMON]enemigos invisibles[/POKEMON].`, // español
			`Augmente la [RANGE]portée[/RANGE] des [TOWER]tours[/TOWER] à proximité de 25 et leur permet de toucher les [POKEMON]ennemis invisibles[/POKEMON].`, // francés
			`Aumenta o [RANGE]alcance[/RANGE] das [TOWER]torres[/TOWER] próximas em 25 e permite que elas atinjam [POKEMON]inimigos invisíveis[/POKEMON].`, // portugués
			`Aumenta la [RANGE]gittata[/RANGE] delle [TOWER]torri[/TOWER] vicine di 25 e permette loro di colpire i [POKEMON]nemici invisibili[/POKEMON].`, // italiano
			`Erhöht die [RANGE]Reichweite[/RANGE] nahegelegener [TOWER]Türme[/TOWER] um 25 und ermöglicht ihnen, [POKEMON]unsichtbare Gegner[/POKEMON] zu treffen.`, // alemán
			`近くの[TOWER]タワー[/TOWER]の[RANGE]射程[/RANGE]を25増加させ、[POKEMON]見えない敵[/POKEMON]にも攻撃できるようにする。`, // japonés
			`주변 [TOWER]타워[/TOWER]의 [RANGE]사거리[/RANGE]를 25 증가시키고 [POKEMON]투명한 적[/POKEMON]을 공격할 수 있게 합니다.`, // coreano
			`使附近的[TOWER]塔[/TOWER]的[RANGE]射程[/RANGE]提高25，并使其能够攻击[POKEMON]隐形敌人[/POKEMON]。`, // chino
			`Zwiększa [RANGE]zasięg[/RANGE] pobliskich [TOWER]wież[/TOWER] o 25 i pozwala im atakować [POKEMON]niewidzialnych wrogów[/POKEMON].` // polaco
		]
	},
	cloudNine: {
	    id: 'cloudNine',
	    name: [
		  	'Cloud Nine',
		  	'Aclimatación',
		  	'Météo',
		  	'Aclimatação',
		  	'Antimeteo',
		  	'Wolke Sieben',
		  	'ノーてんき',
		  	'날씨부정',
		  	'無關天氣',
		  	'Cloud Nine'
		],
	    description: [
			`Reduces the negative effects of [WEATHER]weather[/WEATHER]. Prevents regular [ENEMY]enemies[/ENEMY] from benefiting from [WEATHER]weather[/WEATHER].`, // inglés
			`Reduce los efectos negativos del [WEATHER]clima[/WEATHER]. Evita que los [ENEMY]enemigos[/ENEMY] normales se beneficien del [WEATHER]clima[/WEATHER].`, // español
			`Réduit les effets négatifs du [WEATHER]climat[/WEATHER]. Empêche les [ENEMY]ennemis[/ENEMY] normaux de bénéficier du [WEATHER]climat[/WEATHER].`, // francés
			`Reduz os efeitos negativos do [WEATHER]clima[/WEATHER]. Impede que os [ENEMY]inimigos[/ENEMY] comuns se beneficiem do [WEATHER]clima[/WEATHER].`, // portugués
			`Riduce gli effetti negativi del [WEATHER]meteo[/WEATHER]. Impedisce ai [ENEMY]nemici[/ENEMY] normali di beneficiare del [WEATHER]meteo[/WEATHER].`, // italiano
			`Verringert die negativen Effekte des [WEATHER]Wetters[/WEATHER]. Verhindert, dass normale [ENEMY]Gegner[/ENEMY] vom [WEATHER]Wetter[/WEATHER] profitieren.`, // alemán
			`[WEATHER]天候[/WEATHER]による悪影響を軽減する。通常の[ENEMY]敵[/ENEMY]が[WEATHER]天候[/WEATHER]の恩恵を受けるのを防ぐ。`, // japonés
			`[WEATHER]날씨[/WEATHER]의 부정적인 효과를 감소시킵니다. 일반 [ENEMY]적[/ENEMY]이 [WEATHER]날씨[/WEATHER]의 효과를 받지 못하게 합니다.`, // coreano
			`降低[WEATHER]天气[/WEATHER]的负面效果。阻止普通[ENEMY]敌人[/ENEMY]从[WEATHER]天气[/WEATHER]中受益。`, // chino
			`Zmniejsza negatywne efekty [WEATHER]pogody[/WEATHER]. Uniemożliwia zwykłym [ENEMY]wrogom[/ENEMY] korzystanie z [WEATHER]pogody[/WEATHER].` // polaco
		]
	},
	pixilate: {
	    id: 'pixilate',
	    name: [
			`Pixilate`, // inglés
			`Piel Feérica`, // español
			`Peau Féerique`, // francés
			`Pele Fada`, // portugués
			`Pellefolletto`, // italiano
			`Feenschicht`, // alemán
			`フェアリースキン`, // japonés
			`페어리 스킨`, // coreano
			`妖精皮肤`, // chino
			`Naskórka` // polaco
		],
	    description: [
			`If [WEATHER]weather[/WEATHER] is active, override it with [STARRY]Starry Night[/STARRY].`, // inglés
			`Si el [WEATHER]clima[/WEATHER] está activo, reemplázalo por [STARRY]Noche Estrellada[/STARRY].`, // español
			`Si un [WEATHER]climat[/WEATHER] est actif, remplacez-le par [STARRY]Nuit Étoilée[/STARRY].`, // francés
			`Se o [WEATHER]clima[/WEATHER] estiver ativo, substitua-o por [STARRY]Noite Estrelada[/STARRY].`, // portugués
			`Se il [WEATHER]meteo[/WEATHER] è attivo, sostituiscilo con [STARRY]Notte Stellata[/STARRY].`, // italiano
			`Wenn [WEATHER]Wetter[/WEATHER] aktiv ist, wird es durch [STARRY]Sternennacht[/STARRY] ersetzt.`, // alemán
			`[WEATHER]天候[/WEATHER]が発生している場合、[STARRY]星月夜[/STARRY]に上書きする。`, // japonés
			`[WEATHER]날씨[/WEATHER]가 활성화되어 있다면 [STARRY]별밤[/STARRY]으로 덮어씁니다.`, // coreano
			`如果[WEATHER]天气[/WEATHER]处于激活状态，则将其覆盖为[STARRY]繁星之夜[/STARRY]。`, // chino
			`Jeśli [WEATHER]pogoda[/WEATHER] jest aktywna, zastępuje ją [STARRY]Gwiaździsta Noc[/STARRY].` // polaco
		]
	},
	drySkin: {
	    id: 'drySkin',
	    name: [
		  	'Dry Skin',
		  	'Piel Seca',
		  	'Peau Sèche',
		  	'Pele Seca',
		  	'Pellearsa',
		  	'Trockenheit',
		  	'かんそうはだ',
		  	'건조피부',
		  	'乾燥皮膚',
		  	'Sucha Skóra'
		],
	    description: [
			`Increases [POWER]power[/POWER] by 100% in [SUN]Harsh Sunlight[/SUN], increasing up an additional 100% in [BADSUN]Extremely Harsh Sunlight[/BADSUN], if located on [GRASS]grass[/GRASS].`, // inglés
			`Aumenta el [POWER]poder[/POWER] un 100% con [SUN]sol abrasador[/SUN], aumentando un 100% adicional con [BADSUN]sol extremadamente abrasador[/BADSUN], si está ubicado sobre [GRASS]hierba[/GRASS].`, // español
			`Augmente la [POWER]puissance[/POWER] de 100 % sous [SUN]soleil brûlant[/SUN], puis de 100 % supplémentaires sous [BADSUN]soleil extrêmement brûlant[/BADSUN], s'il est placé sur de l'[GRASS]herbe[/GRASS].`, // francés
			`Aumenta o [POWER]poder[/POWER] em 100% sob [SUN]sol intenso[/SUN], aumentando mais 100% sob [BADSUN]sol extremamente intenso[/BADSUN], se estiver localizado em [GRASS]grama[/GRASS].`, // portugués
			`Aumenta la [POWER]potenza[/POWER] del 100% sotto [SUN]sole cocente[/SUN], aumentando di un ulteriore 100% sotto [BADSUN]sole estremamente cocente[/BADSUN], se si trova sull'[GRASS]erba[/GRASS].`, // italiano
			`Erhöht die [POWER]Kraft[/POWER] bei [SUN]grellem Sonnenschein[/SUN] um 100 % und bei [BADSUN]extrem grellem Sonnenschein[/BADSUN] um weitere 100 %, wenn es auf [GRASS]Gras[/GRASS] steht.`, // alemán
			`[GRASS]くさ[/GRASS]の上にいる場合、[SUN]ひざしがつよい[/SUN]状態で[POWER]威力[/POWER]が100%上昇し、[BADSUN]ひざしがとてもつよい[/BADSUN]状態ではさらに100%上昇する。`, // japonés
			`[GRASS]풀[/GRASS] 위에 있을 경우, [SUN]강한 햇빛[/SUN]에서 [POWER]위력[/POWER]이 100% 증가하고, [BADSUN]매우 강한 햇빛[/BADSUN]에서는 추가로 100% 증가합니다.`, // coreano
			`如果位于[GRASS]草地[/GRASS]上，在[SUN]大晴天[/SUN]下[POWER]威力[/POWER]提高100%，在[BADSUN]极强烈的阳光[/BADSUN]下再额外提高100%。`, // chino
			`Zwiększa [POWER]moc[/POWER] o 100% podczas [SUN]silnego słońca[/SUN], a podczas [BADSUN]ekstremalnie silnego słońca[/BADSUN] zwiększa ją o kolejne 100%, jeśli znajduje się na [GRASS]trawie[/GRASS].` // polaco
		]
	},
	marvelScale: {
		id: 'marvelScale',
	    name: [
		  	'Marvel Scale',
		  	'Escama Especial',
		  	'Écaille Spéciale',
		  	'Escama Especial',
		  	'Pelledura',
		  	'Notschutz',
		  	'ふしぎなうろこ',
		  	'이상한비늘',
		  	'神奇鱗片',
		  	'Cudowna Łuska'
		],
	    description: [
		  	`Increases [POWER]power[/POWER] by 1 for each [RIBBON]Ribbon[/RIBBON] obtained. This effect is tripled in [RIBBON]Challenges[/RIBBON].`, // inglés
			`Aumenta el [POWER]poder[/POWER] en 1 por cada [RIBBON]Cinta[/RIBBON] obtenida. Este efecto se triplica en los [RIBBON]Desafíos[/RIBBON].`, // español
			`Augmente la [POWER]puissance[/POWER] de 1 pour chaque [RIBBON]Ruban[/RIBBON] obtenu. Cet effet est triplé dans les [RIBBON]Défis[/RIBBON].`, // francés
			`Aumenta o [POWER]poder[/POWER] em 1 para cada [RIBBON]Fita[/RIBBON] obtida. Este efeito é triplicado nos [RIBBON]Desafios[/RIBBON].`, // portugués
			`Aumenta la [POWER]potenza[/POWER] di 1 per ogni [RIBBON]Fiocco[/RIBBON] ottenuto. Questo effetto è triplicato nelle [RIBBON]Sfide[/RIBBON].`, // italiano
			`Erhöht die [POWER]Kraft[/POWER] um 1 für jedes erhaltene [RIBBON]Band[/RIBBON]. Dieser Effekt wird in den [RIBBON]Herausforderungen[/RIBBON] verdreifacht.`, // alemán
			`獲得した[RIBBON]リボン[/RIBBON]1個につき[POWER]威力[/POWER]が1上がる。[RIBBON]チャレンジ[/RIBBON]ではこの効果が3倍になる。`, // japonés
			`획득한 [RIBBON]리본[/RIBBON] 하나당 [POWER]위력[/POWER]이 1 증가합니다. [RIBBON]도전 과제[/RIBBON]에서는 이 효과가 3배가 됩니다.`, // coreano
			`每获得一个[RIBBON]缎带[/RIBBON]，[POWER]威力[/POWER]提高1。在[RIBBON]挑战[/RIBBON]中，该效果变为3倍。`, // chino
			`Zwiększa [POWER]moc[/POWER] o 1 za każdą zdobytą [RIBBON]Wstążkę[/RIBBON]. W [RIBBON]Wyzwaniach[/RIBBON] efekt ten jest potrojony.` // polaco
		]
	},
	diurnal: {
		id: 'diurnal',
	    name: [
		  	'Diurnal',
		  	'Diurno',
		  	'Diurne',
		  	'Diurno',
		  	'Diurno',
		  	'Tagaktiv',
		  	'昼行性',
		  	'주행성',
		  	'晝行性',
		  	'Dzienny'
		],
	    description: [
		  	`Increases its [POWER]power[/POWER] by 50% during the day.`, // inglés
			`Aumenta su [POWER]poder[/POWER] un 50% durante el día.`, // español
			`Augmente sa [POWER]puissance[/POWER] de 50 % pendant la journée.`, // francés
			`Aumenta seu [POWER]poder[/POWER] em 50% durante o dia.`, // portugués
			`Aumenta la sua [POWER]potenza[/POWER] del 50% durante il giorno.`, // italiano
			`Erhöht seine [POWER]Kraft[/POWER] tagsüber um 50 %.`, // alemán
			`昼間は[POWER]威力[/POWER]が50%上がる。`, // japonés
			`낮 동안 [POWER]위력[/POWER]이 50% 증가합니다.`, // coreano
			`白天[POWER]威力[/POWER]提高50%。`, // chino
			`Zwiększa swoją [POWER]moc[/POWER] o 50% w ciągu dnia.` // polaco
		]
	},
	nocturnal: {
		id: 'nocturnal',
	    name: [
		  	'Nocturnal',
		  	'Nocturno',
		  	'Nocturne',
		  	'Noturno',
		  	'Notturno',
		  	'Nachtaktiv',
		  	'夜行性',
		  	'야행성',
		  	'夜行性',
		  	'Nocny'
		],
	    description: [
		    `Reduces [SPEED]recharge time[/SPEED] by 25% during the night.`, // inglés
			`Reduce el [SPEED]tiempo de recarga[/SPEED] un 25% durante la noche.`, // español
			`Réduit le [SPEED]temps de recharge[/SPEED] de 25 % pendant la nuit.`, // francés
			`Reduz o [SPEED]tempo de recarga[/SPEED] em 25% durante a noite.`, // portugués
			`Riduce il [SPEED]tempo di ricarica[/SPEED] del 25% durante la notte.`, // italiano
			`Reduziert die [SPEED]Aufladezeit[/SPEED] nachts um 25 %.`, // alemán
			`夜間は[SPEED]再使用時間[/SPEED]が25%短くなる。`, // japonés
			`밤에는 [SPEED]재사용 대기 시간[/SPEED]이 25% 감소합니다.`, // coreano
			`夜间[SPEED]冷却时间[/SPEED]缩短25%。`, // chino
			`Skraca [SPEED]czas odnowienia[/SPEED] o 25% w nocy.` // polaco
		]
	},
	helpingHand: {
		id: 'helpingHand',
	    name: [
		  	'Helping Hand',
		  	'Refuerzo',
		  	`Coup d'Main`,
		  	'Mão Amiga',
		  	'Altruismo',
		  	'Zugabe',
		  	'てだすけ',
		  	'도우미',
		  	'幫助',
		  	'Pomocna Dłoń'
		],
	    description: [
		  	`Increases the [POWER]power[/POWER] of [POKEMON]Pokémon[/POKEMON] with no [ITEM]held item[/ITEM] by 50.`, // inglés
			`Aumenta en 50 el [POWER]poder[/POWER] de los [POKEMON]Pokémon[/POKEMON] que no llevan ningún [ITEM]objeto[/ITEM].`, // español
			`Augmente de 50 la [POWER]puissance[/POWER] des [POKEMON]Pokémon[/POKEMON] sans [ITEM]objet tenu[/ITEM].`, // francés
			`Aumenta em 50 o [POWER]poder[/POWER] dos [POKEMON]Pokémon[/POKEMON] que não possuem [ITEM]item equipado[/ITEM].`, // portugués
			`Aumenta di 50 la [POWER]potenza[/POWER] dei [POKEMON]Pokémon[/POKEMON] senza [ITEM]strumento tenuto[/ITEM].`, // italiano
			`Erhöht die [POWER]Kraft[/POWER] von [POKEMON]Pokémon[/POKEMON] ohne [ITEM]getragenes Item[/ITEM] um 50.`, // alemán
			`[ITEM]持たせたどうぐ[/ITEM]がない[POKEMON]ポケモン[/POKEMON]の[POWER]威力[/POWER]が50上がる。`, // japonés
			`[ITEM]지닌 도구[/ITEM]가 없는 [POKEMON]포켓몬[/POKEMON]의 [POWER]위력[/POWER]이 50 증가합니다.`, // coreano
			`使没有[ITEM]携带道具[/ITEM]的[POKEMON]宝可梦[/POKEMON]的[POWER]威力[/POWER]提高50。`, // chino
			`Zwiększa [POWER]moc[/POWER] [POKEMON]Pokémonów[/POKEMON] bez [ITEM]trzymanego przedmiotu[/ITEM] o 50.` // polaco
		]
	},
	meteorMash: {
		id: 'meteorMash',
		name: [ 'Meteor Mash', 'Puño Meteoro', 'Poing Météore', 'Soco Meteoro', 'Meteorpugno', 'Meteor Mash', 'コメットパンチ', '코멧펀치', '彗星拳', 'Meteor Mash'],
		description: [
		  	`Every 4 attacks, increases its [POWER]power[/POWER] by 20%, up to 6 times.`, // inglés
			`Cada 4 ataques, aumenta su [POWER]poder[/POWER] un 20%, hasta 6 veces.`, // español
			`Toutes les 4 attaques, augmente sa [POWER]puissance[/POWER] de 20 %, jusqu'à 6 fois.`, // francés
			`A cada 4 ataques, aumenta seu [POWER]poder[/POWER] em 20%, até 6 vezes.`, // portugués
			`Ogni 4 attacchi, aumenta la sua [POWER]potenza[/POWER] del 20%, fino a 6 volte.`, // italiano
			`Alle 4 Angriffe erhöht es seine [POWER]Kraft[/POWER] um 20 %, bis zu 6-mal.`, // alemán
			`4回攻撃するごとに[POWER]威力[/POWER]が20%上がり、最大6回まで上昇する。`, // japonés
			`4번 공격할 때마다 [POWER]위력[/POWER]이 20% 증가하며, 최대 6번까지 증가합니다.`, // coreano
			`每攻击4次，[POWER]威力[/POWER]提高20%，最多叠加6次。`, // chino
			`Co 4 ataki zwiększa swoją [POWER]moc[/POWER] o 20%, maksymalnie 6 razy.` // polaco
		]
	},
	shadowBall: {
		id: 'shadowBall',
		name: [
		  	'Shadow Ball',
		  	'Bola Sombra',
		  	'Ball’Ombre',
		  	'Bola Sombria',
		  	'Palla Ombra',
		  	'Spukball',
		  	'シャドーボール',
		  	'섀도볼',
		  	'暗影球',
		  	'Cienista Kula'
		],
		description: [
		  	`[PROJECTILE]Projectiles orbit[/PROJECTILE] the user and apply 1 stack of [NIGHTMARE]Nightmare[/NIGHTMARE].`, // inglés
			`Los [PROJECTILE]proyectiles orbitan[/PROJECTILE] al usuario y aplican 1 carga de [NIGHTMARE]Pesadilla[/NIGHTMARE].`, // español
			`Les [PROJECTILE]projectiles orbitent[/PROJECTILE] autour de l'utilisateur et appliquent 1 cumul de [NIGHTMARE]Cauchemar[/NIGHTMARE].`, // francés
			`Os [PROJECTILE]projéteis orbitam[/PROJECTILE] o usuário e aplicam 1 acúmulo de [NIGHTMARE]Pesadelo[/NIGHTMARE].`, // portugués
			`I [PROJECTILE]proiettili orbitano[/PROJECTILE] attorno all'utilizzatore e applicano 1 carica di [NIGHTMARE]Incubo[/NIGHTMARE].`, // italiano
			`[PROJECTILE]Projektile umkreisen[/PROJECTILE] den Benutzer und verursachen 1 Stapel [NIGHTMARE]Albtraum[/NIGHTMARE].`, // alemán
			`[PROJECTILE]投射物が周囲を回り[/PROJECTILE]、[NIGHTMARE]あくむ[/NIGHTMARE]を1つ付与する。`, // japonés
			`[PROJECTILE]투사체가 주위를 돌며[/PROJECTILE] [NIGHTMARE]악몽[/NIGHTMARE]을 1회 중첩시킵니다.`, // coreano
			`[PROJECTILE]投射物环绕[/PROJECTILE]使用者，并施加1层[NIGHTMARE]噩梦[/NIGHTMARE]。`, // chino
			`[PROJECTILE]Pociski krążą[/PROJECTILE] wokół użytkownika i nakładają 1 ładunek [NIGHTMARE]Koszmaru[/NIGHTMARE].` // polaco
		]
	},
	ancientPower: {
		id: 'ancientPower',
		name: [
		  	'Ancient Power',
		  	'Poder Pasado',
		  	'Pouvoir Antique',
		  	'Poder Ancestral',
		  	'Forzantica',
		  	'Antik-Kraft',
		  	'げんしのちから',
		  	'원시의힘',
		  	'原始之力',
		  	'Pradawna Moc'
		],
		description: [
			`Causes 15% more damage to [ARMOR]armored[/ARMOR] [ENEMY]enemies[/ENEMY] for each [POKEMON]Fossil Pokémon[/POKEMON] on the [TEAM]team[/TEAM].`, // inglés
			`Inflige un 15% más de daño a los [ENEMY]enemigos[/ENEMY] con [ARMOR]armadura[/ARMOR] por cada [POKEMON]Pokémon Fósil[/POKEMON] en el [TEAM]equipo[/TEAM].`, // español
			`Inflige 15 % de dégâts supplémentaires aux [ENEMY]ennemis[/ENEMY] [ARMOR]blindés[/ARMOR] pour chaque [POKEMON]Pokémon Fossile[/POKEMON] dans l'[TEAM]équipe[/TEAM].`, // francés
			`Causa 15% a mais de dano aos [ENEMY]inimigos[/ENEMY] [ARMOR]blindados[/ARMOR] para cada [POKEMON]Pokémon Fóssil[/POKEMON] na [TEAM]equipe[/TEAM].`, // portugués
			`Infligge il 15% di danni in più agli [ENEMY]nemici[/ENEMY] [ARMOR]corazzati[/ARMOR] per ogni [POKEMON]Pokémon Fossile[/POKEMON] nella [TEAM]squadra[/TEAM].`, // italiano
			`Verursacht 15 % mehr Schaden bei [ARMOR]gepanzerten[/ARMOR] [ENEMY]Gegnern[/ENEMY] für jedes [POKEMON]Fossil-Pokémon[/POKEMON] im [TEAM]Team[/TEAM].`, // alemán
			`[ARMOR]アーマー[/ARMOR]を持つ[ENEMY]敵[/ENEMY]に、[TEAM]チーム[/TEAM]にいる[POKEMON]化石ポケモン[/POKEMON]1匹につき15%多くダメージを与える。`, // japonés
			`[ARMOR]방어구[/ARMOR]를 가진 [ENEMY]적[/ENEMY]에게 [TEAM]팀[/TEAM]에 있는 [POKEMON]화석 포켓몬[/POKEMON] 한 마리당 15% 더 많은 피해를 줍니다.`, // coreano
			`对[ARMOR]有护甲[/ARMOR]的[ENEMY]敌人[/ENEMY]造成的伤害会根据[TEAM]队伍[/TEAM]中的每只[POKEMON]化石宝可梦[/POKEMON]提高15%。`, // chino
			`Zadaje o 15% więcej obrażeń [ARMOR]opancerzonym[/ARMOR] [ENEMY]wrogom[/ENEMY] za każdego [POKEMON]Pokémona Kopalnego[/POKEMON] w [TEAM]drużynie[/TEAM].` // polaco
		]
	},
	ancientPowerPlus: {
		id: 'ancientPowerPlus',
		name: [
		  	'Ancient Power',
		  	'Poder Pasado',
		  	'Pouvoir Antique',
		  	'Poder Ancestral',
		  	'Forzantica',
		  	'Antik-Kraft',
		  	'げんしのちから',
		  	'원시의힘',
		  	'原始之力',
		  	'Pradawna Moc'
		],
		description: [
			`Causes 20% more damage to [ARMOR]armored[/ARMOR] [ENEMY]enemies[/ENEMY] for each [POKEMON]Fossil Pokémon[/POKEMON] on the [TEAM]team[/TEAM].`, // inglés
			`Inflige un 20% más de daño a los [ENEMY]enemigos[/ENEMY] con [ARMOR]armadura[/ARMOR] por cada [POKEMON]Pokémon Fósil[/POKEMON] en el [TEAM]equipo[/TEAM].`, // español
			`Inflige 20 % de dégâts supplémentaires aux [ENEMY]ennemis[/ENEMY] [ARMOR]blindés[/ARMOR] pour chaque [POKEMON]Pokémon Fossile[/POKEMON] dans l'[TEAM]équipe[/TEAM].`, // francés
			`Causa 20% a mais de dano aos [ENEMY]inimigos[/ENEMY] [ARMOR]blindados[/ARMOR] para cada [POKEMON]Pokémon Fóssil[/POKEMON] na [TEAM]equipe[/TEAM].`, // portugués
			`Infligge il 20% di danni in più agli [ENEMY]nemici[/ENEMY] [ARMOR]corazzati[/ARMOR] per ogni [POKEMON]Pokémon Fossile[/POKEMON] nella [TEAM]squadra[/TEAM].`, // italiano
			`Verursacht 20 % mehr Schaden bei [ARMOR]gepanzerten[/ARMOR] [ENEMY]Gegnern[/ENEMY] für jedes [POKEMON]Fossil-Pokémon[/POKEMON] im [TEAM]Team[/TEAM].`, // alemán
			`[ARMOR]アーマー[/ARMOR]を持つ[ENEMY]敵[/ENEMY]に、[TEAM]チーム[/TEAM]にいる[POKEMON]化石ポケモン[/POKEMON]1匹につき20%多くダメージを与える。`, // japonés
			`[ARMOR]방어구[/ARMOR]를 가진 [ENEMY]적[/ENEMY]에게 [TEAM]팀[/TEAM]에 있는 [POKEMON]화석 포켓몬[/POKEMON] 한 마리당 20% 더 많은 피해를 줍니다.`, // coreano
			`对[ARMOR]有护甲[/ARMOR]的[ENEMY]敌人[/ENEMY]造成的伤害会根据[TEAM]队伍[/TEAM]中的每只[POKEMON]化石宝可梦[/POKEMON]提高20%。`, // chino
			`Zadaje o 20% więcej obrażeń [ARMOR]opancerzonym[/ARMOR] [ENEMY]wrogom[/ENEMY] za każdego [POKEMON]Pokémona Kopalnego[/POKEMON] w [TEAM]drużynie[/TEAM].` // polaco
		]
	},
	heavyMetal: {
		id: 'heavyMetal',
		name: [
		  	'Heavy Metal',
		  	'Metal Pesado',
		  	'Heavy Metal',
		  	'Metal Pesado',
		  	'Metalpesante',
		  	'Schwermetall',
		  	'ヘヴィメタル',
		  	'헤비메탈',
		  	'重金屬',
		  	'Ciężki Metal'
		],
		description: [
			`Once per wave, [STUN]stuns[/STUN] [ENEMY]all enemies[/ENEMY] for 2 seconds when deployed. After this effect, no [POKEMON]Pokémon[/POKEMON] can be moved or swapped.`, // inglés
			`Una vez por oleada, [STUN]aturde[/STUN] a todos los [ENEMY]enemigos[/ENEMY] durante 2 segundos al ser desplegado. Después de este efecto, ningún [POKEMON]Pokémon[/POKEMON] puede ser movido ni intercambiado.`, // español
			`Une fois par vague, [STUN]étourdit[/STUN] tous les [ENEMY]ennemis[/ENEMY] pendant 2 secondes lors de son déploiement. Après cet effet, aucun [POKEMON]Pokémon[/POKEMON] ne peut être déplacé ou échangé.`, // francés
			`Uma vez por onda, [STUN]atordoa[/STUN] todos os [ENEMY]inimigos[/ENEMY] por 2 segundos ao ser implantado. Após esse efeito, nenhum [POKEMON]Pokémon[/POKEMON] pode ser movido ou trocado.`, // portugués
			`Una volta per ondata, [STUN]stordisce[/STUN] tutti i [ENEMY]nemici[/ENEMY] per 2 secondi quando viene schierato. Dopo questo effetto, nessun [POKEMON]Pokémon[/POKEMON] può essere spostato o scambiato.`, // italiano
			`Einmal pro Welle [STUN]betäubt[/STUN] es beim Einsatz alle [ENEMY]Gegner[/ENEMY] 2 Sekunden lang. Nach diesem Effekt kann kein [POKEMON]Pokémon[/POKEMON] mehr bewegt oder ausgetauscht werden.`, // alemán
			`ウェーブごとに1回、配置時にすべての[ENEMY]敵[/ENEMY]を2秒間[STUN]ひるませる[/STUN]。この効果の後は、どの[POKEMON]ポケモン[/POKEMON]も移動や入れ替えができなくなる。`, // japonés
			`웨이브당 한 번, 배치될 때 모든 [ENEMY]적[/ENEMY]을 2초 동안 [STUN]기절[/STUN]시킵니다. 이 효과가 발동한 후에는 어떤 [POKEMON]포켓몬[/POKEMON]도 이동하거나 교체할 수 없습니다.`, // coreano
			`每波次一次，部署时使所有[ENEMY]敌人[/ENEMY][STUN]眩晕[/STUN]2秒。该效果结束后，任何[POKEMON]宝可梦[/POKEMON]都无法移动或交换。`, // chino
			`Raz na falę podczas wystawienia [STUN]ogłusza[/STUN] wszystkich [ENEMY]wrogów[/ENEMY] na 2 sekundy. Po tym efekcie żadnego [POKEMON]Pokémona[/POKEMON] nie można przesuwać ani zamieniać.` // polaco
		]
	},
	bulkUp: {
		id: 'bulkUp',
		name: [
		  	'Bulk Up',
		  	'Corpulencia',
		  	'Gonflette',
		  	'Vitamina',
		  	'Granfisico',
		  	'Protzer',
		  	'ビルドアップ',
		  	'벌크업',
		  	'健美',
		  	'Siła'
		],
		description: [
			`Increases [POWER]power[/POWER] by 15 each second it goes without attacking during this wave. [POWER]power[/POWER] stops increasing while attacking.`, // inglés
			`Aumenta el [POWER]poder[/POWER] en 15 por cada segundo que pasa sin atacar durante esta oleada. El [POWER]poder[/POWER] deja de aumentar mientras ataca.`, // español
			`Augmente la [POWER]puissance[/POWER] de 15 chaque seconde passée sans attaquer pendant cette vague. La [POWER]puissance[/POWER] cesse d'augmenter lorsqu'il attaque.`, // francés
			`Aumenta o [POWER]poder[/POWER] em 15 a cada segundo que passa sem atacar durante esta onda. O [POWER]poder[/POWER] deixa de aumentar enquanto ataca.`, // portugués
			`Aumenta la [POWER]potenza[/POWER] di 15 per ogni secondo trascorso senza attaccare durante questa ondata. La [POWER]potenza[/POWER] smette di aumentare mentre attacca.`, // italiano
			`Erhöht die [POWER]Kraft[/POWER] um 15 für jede Sekunde, die es während dieser Welle nicht angreift. Die [POWER]Kraft[/POWER] erhöht sich während des Angriffs nicht weiter.`, // alemán
			`このウェーブ中、攻撃せずに1秒経過するごとに[POWER]威力[/POWER]が15上がる。攻撃中は[POWER]威力[/POWER]が上がらなくなる。`, // japonés
			`이번 웨이브 동안 공격하지 않고 1초가 지날 때마다 [POWER]위력[/POWER]이 15 증가합니다. 공격하는 동안에는 [POWER]위력[/POWER]이 증가하지 않습니다.`, // coreano
			`在本波次期间，每秒未进行攻击，[POWER]威力[/POWER]提高15。攻击时，[POWER]威力[/POWER]不再提高。`, // chino
			`Zwiększa [POWER]moc[/POWER] o 15 za każdą sekundę bez ataku podczas tej fali. [POWER]Moc[/POWER] przestaje rosnąć podczas ataku.` // polaco
		]
	},
	squishyToy: {
		id: 'squishyToy',
		name: [
			'Squishy Toy',
			'Muñeco blandito',
			'Jouet tout mou',
			'Brinquedo molenga',
			'Giocattolo morbido',
			'Quetschspielzeug',
			'ぷにぷにおもちゃ',
			'말랑말랑 장난감',
			'软软玩具',
			'Miękka zabawka'
		],
		description: [
			`[TOWER]Towers[/TOWER] with no valid [ENEMY]enemies[/ENEMY] in [RANGE]range[/RANGE] will attack [TOWER]this[/TOWER].`, // inglés
			`Las [TOWER]torres[/TOWER] que no tengan [ENEMY]enemigos[/ENEMY] válidos a [RANGE]su alcance[/RANGE] atacarán a [TOWER]esta[/TOWER].`, // español
			`Les [TOWER]tours[/TOWER] qui n'ont aucun [ENEMY]ennemi[/ENEMY] valide à [RANGE]portée[/RANGE] attaqueront [TOWER]celle-ci[/TOWER].`, // francés
			`As [TOWER]torres[/TOWER] que não tiverem [ENEMY]inimigos[/ENEMY] válidos ao [RANGE]alcance[/RANGE] atacarão [TOWER]esta[/TOWER].`, // portugués
			`Le [TOWER]torri[/TOWER] senza [ENEMY]nemici[/ENEMY] validi a [RANGE]portata[/RANGE] attaccheranno [TOWER]questa[/TOWER].`, // italiano
			`[TOWER]Türme[/TOWER], die keine gültigen [ENEMY]Gegner[/ENEMY] in [RANGE]Reichweite[/RANGE] haben, werden [TOWER]diesen[/TOWER] angreifen.`, // alemán
			`[RANGE]射程[/RANGE]内に有効な[ENEMY]敵[/ENEMY]がいない[TOWER]タワー[/TOWER]は、[TOWER]これ[/TOWER]を攻撃する。`, // japonés
			`[RANGE]사거리[/RANGE] 내에 유효한 [ENEMY]적[/ENEMY]이 없는 [TOWER]타워[/TOWER]는 [TOWER]이 타워[/TOWER]를 공격한다.`, // coreano
			`[RANGE]范围[/RANGE]内没有有效[ENEMY]敌人[/ENEMY]的[TOWER]防御塔[/TOWER]会攻击[TOWER]这座防御塔[/TOWER]。`, // chino
			`[TOWER]Wieże[/TOWER], które nie mają prawidłowych [ENEMY]wrogów[/ENEMY] w [RANGE]zasięgu[/RANGE], zaatakują [TOWER]tę wieżę[/TOWER].` // polaco
		]
	},
	honeyGather:  {
		id: 'honeyGather',
		name: [
		  	'Honey Gather',
		  	'Recogemiel',
		  	'Cherche Miel',
		  	'Coleta Mel',
		  	'Mielincetta',
		  	'Honigmaul',
		  	'みつあつめ',
		  	'꿀모으기',
		  	'採蜜',
		  	'Zbieranie Miodu'
		],
		description: [
			`Each attack grants a stack of [HONEY]honey[/HONEY].`, // inglés
			`Cada ataque otorga una carga de [HONEY]miel[/HONEY].`, // español
			`Chaque attaque confère un cumul de [HONEY]miel[/HONEY].`, // francés
			`Cada ataque concede um acúmulo de [HONEY]mel[/HONEY].`, // portugués
			`Ogni attacco conferisce una carica di [HONEY]miele[/HONEY].`, // italiano
			`Jeder Angriff gewährt einen Stapel [HONEY]Honig[/HONEY].`, // alemán
			`攻撃するたびに、[HONEY]ハチミツ[/HONEY]を1つ獲得する。`, // japonés
			`공격할 때마다 [HONEY]꿀[/HONEY]을 1회 중첩합니다.`, // coreano
			`每次攻击获得1层[HONEY]蜂蜜[/HONEY]。`, // chino
			`Każdy atak zapewnia 1 ładunek [HONEY]miodu[/HONEY].` // polaco
		]
	},
	strongJaw:  {
		id: 'strongJaw',
		name: [
		  	'Strong Jaw',
		  	'Mandíbula Fuerte',
		  	'Prognathe',
		  	'Mandíbula Forte',
		  	'Ferromascella',
		  	'Titankiefer',
		  	'がんじょうあご',
		  	'강한턱',
		  	'強壯之顎',
		  	'Mocne Szczęki'
		],
		description: [
			`Deals double damage to targets that have lost their [ARMOR]armor[/ARMOR]. If the target still has [ARMOR]armor[/ARMOR], all attacks against it are guaranteed [CRITICAL]critical hits[/CRITICAL]. [POKEMON]Mega Sharpedo[/POKEMON] retains its [ABILITY]Speed Boost[/ABILITY] stacks when [ADMIN]Mega Evolving[/ADMIN].`, // inglés
			`Inflige el doble de daño a los objetivos que han perdido su [ARMOR]armadura[/ARMOR]. Si el objetivo aún tiene [ARMOR]armadura[/ARMOR], todos los ataques contra él son [CRITICAL]golpes críticos[/CRITICAL] garantizados. [POKEMON]Mega Sharpedo[/POKEMON] conserva sus cargas de [ABILITY]Impulso[/ABILITY] al [ADMIN]Megaevolucionar[/ADMIN].`, // español
			`Inflige le double de dégâts aux cibles qui ont perdu leur [ARMOR]armure[/ARMOR]. Si la cible possède encore son [ARMOR]armure[/ARMOR], toutes les attaques contre elle sont des [CRITICAL]coups critiques[/CRITICAL] garantis. [POKEMON]Méga-Sharpedo[/POKEMON] conserve ses cumuls de [ABILITY]Turbo[/ABILITY] lors de la [ADMIN]Méga-Évolution[/ADMIN].`, // francés
			`Causa o dobro de dano aos alvos que perderam sua [ARMOR]armadura[/ARMOR]. Se o alvo ainda tiver [ARMOR]armadura[/ARMOR], todos os ataques contra ele são [CRITICAL]acertos críticos[/CRITICAL] garantidos. [POKEMON]Mega Sharpedo[/POKEMON] mantém seus acúmulos de [ABILITY]Impulso[/ABILITY] ao [ADMIN]Mega Evoluir[/ADMIN].`, // portugués
			`Infligge il doppio dei danni ai bersagli che hanno perso la loro [ARMOR]armatura[/ARMOR]. Se il bersaglio possiede ancora la [ARMOR]armatura[/ARMOR], tutti gli attacchi contro di esso sono [CRITICAL]colpi critici[/CRITICAL] garantiti. [POKEMON]Mega Sharpedo[/POKEMON] mantiene le sue cariche di [ABILITY]Acceleratore[/ABILITY] quando [ADMIN]MegaEvolve[/ADMIN].`, // italiano
			`Verursacht doppelten Schaden bei Zielen, die ihre [ARMOR]Rüstung[/ARMOR] verloren haben. Wenn das Ziel noch [ARMOR]Rüstung[/ARMOR] besitzt, sind alle Angriffe gegen es garantiert [CRITICAL]kritische Treffer[/CRITICAL]. [POKEMON]Mega-Tohaido[/POKEMON] behält seine [ABILITY]Temposchub[/ABILITY]-Stapel bei der [ADMIN]Mega-Entwicklung[/ADMIN].`, // alemán
			`[ARMOR]アーマー[/ARMOR]を失った対象には2倍のダメージを与える。対象にまだ[ARMOR]アーマー[/ARMOR]が残っている場合、その対象への攻撃はすべて[CRITICAL]必ず急所に当たる[/CRITICAL]。[POKEMON]メガサメハダー[/POKEMON]は[ADMIN]メガシンカ[/ADMIN]しても[ABILITY]かそく[/ABILITY]のチャージを維持する。`, // japonés
			`[ARMOR]방어력[/ARMOR]을 잃은 대상에게 2배의 피해를 줍니다. 대상에게 [ARMOR]방어력[/ARMOR]이 남아 있다면 해당 대상에 대한 모든 공격이 [CRITICAL]반드시 급소에 맞습니다[/CRITICAL]. [POKEMON]메가 샤크니아[/POKEMON]는 [ADMIN]메가진화[/ADMIN]할 때 [ABILITY]가속[/ABILITY] 중첩을 유지합니다.`, // coreano
			`对失去[ARMOR]护甲[/ARMOR]的目标造成双倍伤害。如果目标仍有[ARMOR]护甲[/ARMOR]，对其发动的所有攻击必定造成[CRITICAL]暴击[/CRITICAL]。[POKEMON]超级巨牙鲨[/POKEMON]在[ADMIN]超级进化[/ADMIN]时保留[ABILITY]加速[/ABILITY]的层数。`, // chino
			`Zadaje podwójne obrażenia celom, które straciły swój [ARMOR]pancerz[/ARMOR]. Jeśli cel nadal ma [ARMOR]pancerz[/ARMOR], wszystkie ataki przeciwko niemu są gwarantowanymi [CRITICAL]trafieniami krytycznymi[/CRITICAL]. [POKEMON]Mega Sharpedo[/POKEMON] zachowuje swoje ładunki [ABILITY]Przyspieszenia[/ABILITY] podczas [ADMIN]Megaewolucji[/ADMIN].` // polaco
		]
	},
	meteorBeam:  {
		id: 'meteorBeam',
		name: [
		  	'Meteor Beam', // Inglés
		  	'Rayo Meteórico', // Español
		  	'Laser Météore', // Francés
		  	'Raio Meteórico', // Portugués
		  	'Raggiometeora', // Italiano
		  	'Meteorstrahl', // Alemán
		  	'メテオビーム', // Japonés
		  	'메테오빔', // Coreano
		  	'流星光束', //Chino simplificado
		  	'Meteor Beam' // Polaco
		],
		description: [
			`Fires a [PROJECTILE]beam[/PROJECTILE] in a straight line that hits all targets it passes through. Its [POWER]power[/POWER] is doubled while [PROJECTILE]orbiting[/PROJECTILE].`, // inglés
			`Dispara un [PROJECTILE]rayo[/PROJECTILE] en línea recta que golpea a todos los objetivos que atraviesa. Su [POWER]poder[/POWER] se duplica mientras está [PROJECTILE]orbitando[/PROJECTILE].`, // español
			`Tire un [PROJECTILE]rayon[/PROJECTILE] en ligne droite qui touche toutes les cibles qu'il traverse. Sa [POWER]puissance[/POWER] est doublée lorsqu'il est en [PROJECTILE]orbite[/PROJECTILE].`, // francés
			`Dispara um [PROJECTILE]raio[/PROJECTILE] em linha reta que atinge todos os alvos que atravessa. Seu [POWER]poder[/POWER] é dobrado enquanto está [PROJECTILE]orbitando[/PROJECTILE].`, // portugués
			`Spara un [PROJECTILE]raggio[/PROJECTILE] in linea retta che colpisce tutti i bersagli che attraversa. La sua [POWER]potenza[/POWER] raddoppia mentre è in [PROJECTILE]orbita[/PROJECTILE].`, // italiano
			`Feuert einen [PROJECTILE]Strahl[/PROJECTILE] in einer geraden Linie ab, der alle Ziele trifft, die er durchquert. Seine [POWER]Kraft[/POWER] wird verdoppelt, während er [PROJECTILE]orbitiert[/PROJECTILE].`, // alemán
			`一直線に[PROJECTILE]ビーム[/PROJECTILE]を放ち、通過したすべての対象に命中する。[PROJECTILE]周回中[/PROJECTILE]は[POWER]威力[/POWER]が2倍になる。`, // japonés
			`직선으로 [PROJECTILE]빔[/PROJECTILE]을 발사하여 통과하는 모든 대상을 공격합니다. [PROJECTILE]궤도[/PROJECTILE]를 도는 동안 [POWER]위력[/POWER]이 2배가 됩니다.`, // coreano
			`沿直线发射一道[PROJECTILE]光束[/PROJECTILE]，命中经过的所有目标。[PROJECTILE]环绕[/PROJECTILE]时，[POWER]威力[/POWER]翻倍。`, // chino
			`Wystrzeliwuje [PROJECTILE]promień[/PROJECTILE] w linii prostej, trafiając wszystkie cele, przez które przechodzi. Jego [POWER]moc[/POWER] jest podwojona podczas [PROJECTILE]orbitowania[/PROJECTILE].` // polaco
		]
	},
	rivalryPower:  {
		id: 'rivalryPower',
		name: [
		  	'Rivalry',
		  	'Rivalidad',
		  	'Rivalité',
		  	'Rivalidade',
		  	'Antagonismo',
		  	'Rivalität',
		  	'とうそうしん',
		  	'투쟁심',
		  	'鬥爭心',
		  	'Rywalizacja'
		],
		description: [
			`When deployed, increases [POWER]power[/POWER] by 50% if there is another [POKEMON]Pokémon[/POKEMON] with [ABILITY]Rivalry[/ABILITY] on the field.`, // inglés
			`Al desplegarse, aumenta el [POWER]poder[/POWER] un 50% si hay otro [POKEMON]Pokémon[/POKEMON] con [ABILITY]Rivalidad[/ABILITY] en el campo.`, // español
			`Lorsqu'il est déployé, augmente la [POWER]puissance[/POWER] de 50 % s'il y a un autre [POKEMON]Pokémon[/POKEMON] avec [ABILITY]Rivalité[/ABILITY] sur le terrain.`, // francés
			`Ao ser implantado, aumenta o [POWER]poder[/POWER] em 50% se houver outro [POKEMON]Pokémon[/POKEMON] com [ABILITY]Rivalidade[/ABILITY] no campo.`, // portugués
			`Quando viene schierato, aumenta la [POWER]potenza[/POWER] del 50% se c'è un altro [POKEMON]Pokémon[/POKEMON] con [ABILITY]Agonismo[/ABILITY] sul campo.`, // italiano
			`Beim Einsatz wird die [POWER]Kraft[/POWER] um 50 % erhöht, wenn sich ein anderes [POKEMON]Pokémon[/POKEMON] mit [ABILITY]Rivalität[/ABILITY] auf dem Feld befindet.`, // alemán
			`場に出ると、場に[ABILITY]とうそうしん[/ABILITY]を持つ別の[POKEMON]ポケモン[/POKEMON]がいる場合、[POWER]威力[/POWER]が50%上がる。`, // japonés
			`배치될 때 필드에 [ABILITY]투쟁심[/ABILITY]을 가진 다른 [POKEMON]포켓몬[/POKEMON]이 있으면 [POWER]위력[/POWER]이 50% 증가합니다.`, // coreano
			`部署时，如果场上有另一只拥有[ABILITY]斗争心[/ABILITY]的[POKEMON]宝可梦[/POKEMON]，[POWER]威力[/POWER]提高50%。`, // chino
			`Po wystawieniu zwiększa [POWER]moc[/POWER] o 50%, jeśli na polu znajduje się inny [POKEMON]Pokémon[/POKEMON] ze zdolnością [ABILITY]Rywalizacja[/ABILITY].` // polaco
		]
	},
	rivalrySpeed:  {
		id: 'rivalrySpeed',
		name: [
		  	'Rivalry',
		  	'Rivalidad',
		  	'Rivalité',
		  	'Rivalidade',
		  	'Antagonismo',
		  	'Rivalität',
		  	'とうそうしん',
		  	'투쟁심',
		  	'鬥爭心',
		  	'Rywalizacja'
		],
		description: [
			`When deployed, reduces [SPEED]recharge time[/SPEED] by 30% if there is another [POKEMON]Pokémon[/POKEMON] with [ABILITY]Rivalry[/ABILITY] on the field.`, // inglés
			`Al desplegarse, reduce el [SPEED]tiempo de recarga[/SPEED] un 30% si hay otro [POKEMON]Pokémon[/POKEMON] con [ABILITY]Rivalidad[/ABILITY] en el campo.`, // español
			`Lorsqu'il est déployé, réduit le [SPEED]temps de recharge[/SPEED] de 30 % s'il y a un autre [POKEMON]Pokémon[/POKEMON] avec [ABILITY]Rivalité[/ABILITY] sur le terrain.`, // francés
			`Ao ser implantado, reduz o [SPEED]tempo de recarga[/SPEED] em 30% se houver outro [POKEMON]Pokémon[/POKEMON] com [ABILITY]Rivalidade[/ABILITY] no campo.`, // portugués
			`Quando viene schierato, riduce il [SPEED]tempo di ricarica[/SPEED] del 30% se c'è un altro [POKEMON]Pokémon[/POKEMON] con [ABILITY]Agonismo[/ABILITY] sul campo.`, // italiano
			`Beim Einsatz wird die [SPEED]Aufladezeit[/SPEED] um 30 % reduziert, wenn sich ein anderes [POKEMON]Pokémon[/POKEMON] mit [ABILITY]Rivalität[/ABILITY] auf dem Feld befindet.`, // alemán
			`場に出ると、場に[ABILITY]とうそうしん[/ABILITY]を持つ別の[POKEMON]ポケモン[/POKEMON]がいる場合、[SPEED]再使用時間[/SPEED]が30%短くなる。`, // japonés
			`배치될 때 필드에 [ABILITY]투쟁심[/ABILITY]을 가진 다른 [POKEMON]포켓몬[/POKEMON]이 있으면 [SPEED]재사용 대기 시간[/SPEED]이 30% 감소합니다.`, // coreano
			`部署时，如果场上有另一只拥有[ABILITY]斗争心[/ABILITY]的[POKEMON]宝可梦[/POKEMON]，[SPEED]冷却时间[/SPEED]缩短30%。`, // chino
			`Po wystawieniu skraca [SPEED]czas odnowienia[/SPEED] o 30%, jeśli na polu znajduje się inny [POKEMON]Pokémon[/POKEMON] ze zdolnością [ABILITY]Rywalizacja[/ABILITY].` // polaco
		]
	},
	boomburst:  {
		id: 'boomburst',
		name: [
		  	'Boomburst',
		  	'Estruendo',
		  	'Bang Sonique',
		  	'Explosão Sônica',
		  	'Ondaboato',
		  	'Überschallknall',
		  	'ばくおんぱ',
		  	'폭음파',
		  	'爆音波',
		  	'Boomburst'
		],
		description: [
			`Fires 3 [PROJECTILE]waves[/PROJECTILE], each has a 10% chance to [STUN]stun[/STUN] for 1.5 seconds.`, // inglés
			`Dispara 3 [PROJECTILE]ondas[/PROJECTILE], cada una con un 10% de probabilidad de [STUN]aturdir[/STUN] durante 1,5 segundos.`, // español
			`Tire 3 [PROJECTILE]vagues[/PROJECTILE], chacune ayant 10 % de chances d'[STUN]étourdir[/STUN] pendant 1,5 seconde.`, // francés
			`Dispara 3 [PROJECTILE]ondas[/PROJECTILE], cada uma com 10% de chance de [STUN]atordoar[/STUN] por 1,5 segundo.`, // portugués
			`Spara 3 [PROJECTILE]ondate[/PROJECTILE], ognuna con una probabilità del 10% di [STUN]stordire[/STUN] per 1,5 secondi.`, // italiano
			`Feuert 3 [PROJECTILE]Wellen[/PROJECTILE] ab, von denen jede eine Chance von 10 % hat, 1,5 Sekunden lang [STUN]zu betäuben[/STUN].`, // alemán
			`3つの[PROJECTILE]波[/PROJECTILE]を放ち、それぞれ10%の確率で1.5秒間[STUN]ひるませる[/STUN]。`, // japonés
			`3개의 [PROJECTILE]파동[/PROJECTILE]을 발사하며, 각 파동은 10% 확률로 1.5초 동안 [STUN]기절[/STUN]시킵니다.`, // coreano
			`发射3道[PROJECTILE]波[/PROJECTILE]，每道有10%的概率造成持续1.5秒的[STUN]眩晕[/STUN]。`, // chino
			`Wystrzeliwuje 3 [PROJECTILE]fale[/PROJECTILE], z których każda ma 10% szans na [STUN]ogłuszenie[/STUN] na 1,5 sekundy.` // polaco
		]
	},
	liquidVoice:  {
		id: 'liquidVoice',
		name: [
		  	'Liquid Voice',
		  	'Voz Fluida',
		  	'Hydrata-Son',
		  	'Voz Fluida',
		  	'Idrovoce',
		  	'Plätscherstimme',
		  	'うるおいボイス',
		  	'촉촉보이스',
		  	'濕潤之聲',
		  	'Płynny Głos'
		],
		description: [
			`Fires 2 [PROJECTILE]waves[/PROJECTILE], each has a 25% chance to [SLOW]slow[/SLOW] for 2 seconds.`, // inglés
			`Dispara 2 [PROJECTILE]ondas[/PROJECTILE], cada una con un 25% de probabilidad de [SLOW]ralentizar[/SLOW] durante 2 segundos.`, // español
			`Tire 2 [PROJECTILE]vagues[/PROJECTILE], chacune ayant 25 % de chances de [SLOW]ralentir[/SLOW] pendant 2 secondes.`, // francés
			`Dispara 2 [PROJECTILE]ondas[/PROJECTILE], cada uma com 25% de chance de [SLOW]desacelerar[/SLOW] por 2 segundos.`, // portugués
			`Spara 2 [PROJECTILE]ondate[/PROJECTILE], ognuna con una probabilità del 25% di [SLOW]rallentare[/SLOW] per 2 secondi.`, // italiano
			`Feuert 2 [PROJECTILE]Wellen[/PROJECTILE] ab, von denen jede eine Chance von 25 % hat, 2 Sekunden lang [SLOW]zu verlangsamen[/SLOW].`, // alemán
			`2つの[PROJECTILE]波[/PROJECTILE]を放ち、それぞれ25%の確率で2秒間[SLOW]遅くする[/SLOW]。`, // japonés
			`2개의 [PROJECTILE]파동[/PROJECTILE]을 발사하며, 각 파동은 25% 확률로 2초 동안 [SLOW]느려지게[/SLOW] 합니다.`, // coreano
			`发射2道[PROJECTILE]波[/PROJECTILE]，每道有25%的概率造成持续2秒的[SLOW]减速[/SLOW]。`, // chino
			`Wystrzeliwuje 2 [PROJECTILE]fale[/PROJECTILE], z których każda ma 25% szans na [SLOW]spowolnienie[/SLOW] na 2 sekundy.` // polaco
		]
	},
	secretSword:  {
		id: 'secretSword',
		name: [
		    'Secret Sword',
			'Sable Místico',
			'Lame Ointe',
			'Espada Mística',
			'Spadamistica',
			'Mystoschwert',
			'しんぴのつるぎ',
			'비밀의칼',
			'神秘之剑',
			'Tajemny Miecz'
		],
		description: [
			`Alternates [PROJECTILE]sword sweeps[/PROJECTILE], hitting [ENEMY]multiple enemies[/ENEMY] and reducing their [HP]HP regeneration[/HP] by 10 with each hit.`, // inglés
			`Alterna [PROJECTILE]barridos de espada[/PROJECTILE], golpeando a varios [ENEMY]enemigos[/ENEMY] y reduciendo su [HP]regeneración de PS[/HP] en 10 con cada golpe.`, // español
			`Alterne des [PROJECTILE]coups d'épée[/PROJECTILE], touchant plusieurs [ENEMY]ennemis[/ENEMY] et réduisant leur [HP]régénération de PV[/HP] de 10 à chaque coup.`, // francés
			`Alterna [PROJECTILE]golpes de espada[/PROJECTILE], atingindo vários [ENEMY]inimigos[/ENEMY] e reduzindo sua [HP]regeneração de HP[/HP] em 10 a cada golpe.`, // portugués
			`Alterna [PROJECTILE]fendenti di spada[/PROJECTILE], colpendo più [ENEMY]nemici[/ENEMY] e riducendo la loro [HP]rigenerazione dei PS[/HP] di 10 a ogni colpo.`, // italiano
			`Wechselt zwischen [PROJECTILE]Schwertstreichen[/PROJECTILE], trifft mehrere [ENEMY]Gegner[/ENEMY] und verringert ihre [HP]KP-Regeneration[/HP] mit jedem Treffer um 10.`, // alemán
			`[PROJECTILE]剣の斬撃[/PROJECTILE]を交互に繰り出し、複数の[ENEMY]敵[/ENEMY]に命中させ、命中するたびに相手の[HP]HP回復量[/HP]を10減少させる。`, // japonés
			`[PROJECTILE]검 휘두르기[/PROJECTILE]를 번갈아 사용하여 여러 [ENEMY]적[/ENEMY]을 공격하고, 적중할 때마다 대상의 [HP]HP 회복량[/HP]을 10 감소시킵니다.`, // coreano
			`交替进行[PROJECTILE]剑刃横扫[/PROJECTILE]，命中多个[ENEMY]敌人[/ENEMY]，每次命中使其[HP]生命值回复[/HP]降低10。`, // chino
			`Wykonuje naprzemienne [PROJECTILE]cięcia mieczem[/PROJECTILE], trafiając wielu [ENEMY]wrogów[/ENEMY] i zmniejszając ich [HP]regenerację PŻ[/HP] o 10 przy każdym trafieniu.` // polaco
		]
	},
	swordsDance:  {
		id: 'swordsDance',
		name: [
		    "Swords Dance",
			"Danza Espada",
			"Danse-Lames",
			"Dança Espada",
			"Danzaspada",
			"Schwerttanz",
			"つるぎのまい",
			"칼춤",
			"剑舞",
			"Taniec Mieczy"
		],
		description: [
			`Increases the [POWER]power[/POWER] of the [POKEMON]Swords of Justice[/POKEMON] by 20%.`, // inglés
			`Aumenta el [POWER]poder[/POWER] de los [POKEMON]Espadachines místicos[/POKEMON] un 20%.`, // español
			`Augmente la [POWER]puissance[/POWER] des [POKEMON]Lames de la Justice[/POKEMON] de 20 %.`, // francés
			`Aumenta o [POWER]poder[/POWER] das [POKEMON]Espadas da Justiça[/POKEMON] em 20%.`, // portugués
			`Aumenta la [POWER]potenza[/POWER] degli [POKEMON]Solenni spadaccini[/POKEMON] del 20%.`, // italiano
			`Erhöht die [POWER]Kraft[/POWER] der [POKEMON]Ritter der Redlichkeit[/POKEMON] um 20 %.`, // alemán
			`[POKEMON]聖剣士[/POKEMON]の[POWER]威力[/POWER]が20%上がる。`, // japonés
			`[POKEMON]성검사[/POKEMON]의 [POWER]위력[/POWER]이 20% 증가합니다.`, // coreano
			`[POKEMON]圣剑士[/POKEMON]的[POWER]威力[/POWER]提高20%。`, // chino
			`Zwiększa [POWER]moc[/POWER] [POKEMON]Mieczy Sprawiedliwości[/POKEMON] o 20%.` // polaco
		]
	},
	heartOfSteel: {
		id: 'heartOfSteel',
		name: [
		    "Heart of Steel",
			"Corazón de Acero",
			"Cœur d'Acier",
			"Coração de Aço",
			"Cuore d'Acciaio",
			"Herz aus Stahl",
			"鋼の心",
			"강철의 심장",
			"钢铁之心",
			"Serce ze Stali"
		],
		description: [
			`Increases the [POWER]power[/POWER] of the [POKEMON]Swords of Justice[/POKEMON] by 25 and their [CRITICAL]critical chance[/CRITICAL] by 5%. If damage is taken during the [PROJECTILE]wave[/PROJECTILE], the effect is tripled.`, // inglés
			`Aumenta el [POWER]poder[/POWER] de los [POKEMON]Espadachines místicos[/POKEMON] en 25 y su [CRITICAL]probabilidad de golpe crítico[/CRITICAL] un 5%. Si recibe daño durante la [PROJECTILE]oleada[/PROJECTILE], el efecto se triplica.`, // español
			`Augmente la [POWER]puissance[/POWER] des [POKEMON]Lames de la Justice[/POKEMON] de 25 et leur [CRITICAL]taux de coups critiques[/CRITICAL] de 5 %. Si des dégâts sont subis pendant la [PROJECTILE]vague[/PROJECTILE], l'effet est triplé.`, // francés
			`Aumenta o [POWER]poder[/POWER] das [POKEMON]Espadas da Justiça[/POKEMON] em 25 e sua [CRITICAL]chance de acerto crítico[/CRITICAL] em 5%. Se sofrer dano durante a [PROJECTILE]onda[/PROJECTILE], o efeito é triplicado.`, // portugués
			`Aumenta la [POWER]potenza[/POWER] degli [POKEMON]Solenni spadaccini[/POKEMON] di 25 e la loro [CRITICAL]probabilità di brutto colpo[/CRITICAL] del 5%. Se subiscono danni durante l'[PROJECTILE]ondata[/PROJECTILE], l'effetto viene triplicato.`, // italiano
			`Erhöht die [POWER]Kraft[/POWER] der [POKEMON]Ritter der Redlichkeit[/POKEMON] um 25 und ihre [CRITICAL]Chance auf kritische Treffer[/CRITICAL] um 5 %. Wenn während der [PROJECTILE]Welle[/PROJECTILE] Schaden erlitten wird, wird der Effekt verdreifacht.`, // alemán
			`[POKEMON]聖剣士[/POKEMON]の[POWER]威力[/POWER]が25、[CRITICAL]急所率[/CRITICAL]が5%上がる。[PROJECTILE]ウェーブ[/PROJECTILE]中にダメージを受けると、効果が3倍になる。`, // japonés
			`[POKEMON]성검사[/POKEMON]의 [POWER]위력[/POWER]이 25 증가하고 [CRITICAL]급소율[/CRITICAL]이 5% 증가합니다. [PROJECTILE]웨이브[/PROJECTILE] 동안 피해를 받으면 효과가 3배가 됩니다.`, // coreano
			`使[POKEMON]圣剑士[/POKEMON]的[POWER]威力[/POWER]提高25，[CRITICAL]暴击率[/CRITICAL]提高5%。如果在[PROJECTILE]波次[/PROJECTILE]期间受到伤害，该效果变为3倍。`, // chino
			`Zwiększa [POWER]moc[/POWER] [POKEMON]Mieczy Sprawiedliwości[/POKEMON] o 25 oraz ich [CRITICAL]szansę na trafienie krytyczne[/CRITICAL] o 5%. Jeśli podczas [PROJECTILE]fali[/PROJECTILE] otrzymają obrażenia, efekt zostaje potrojony.` // polaco
		]
	},
	sacredSword: {
		id: 'sacredSword',
		name: [
		    'Sacred Sword', // inglés
			'Espada Santa', // español
			'Lame Sainte', // francés
			'Espada Sagrada', // portugués
			'Sacropunta', // italiano
			'Sanctoklinge', // alemán
			'せいなるつるぎ', // japonés
			'성스러운칼', // coreano
			'圣剑', // chino
			'Sacred Sword' // polaco
		],
		description: [
			`Increases the [RANGE]range[/RANGE] of the [POKEMON]Swords of Justice[/POKEMON] by 20%.`, // inglés
			`Aumenta el [RANGE]alcance[/RANGE] de los [POKEMON]Espadachines místicos[/POKEMON] un 20%.`, // español
			`Augmente la [RANGE]portée[/RANGE] des [POKEMON]Lames de la Justice[/POKEMON] de 20 %.`, // francés
			`Aumenta o [RANGE]alcance[/RANGE] das [POKEMON]Espadas da Justiça[/POKEMON] em 20%.`, // portugués
			`Aumenta la [RANGE]portata[/RANGE] degli [POKEMON]Solenni spadaccini[/POKEMON] del 20%.`, // italiano
			`Erhöht die [RANGE]Reichweite[/RANGE] der [POKEMON]Ritter der Redlichkeit[/POKEMON] um 20 %.`, // alemán
			`[POKEMON]聖剣士[/POKEMON]の[RANGE]射程[/RANGE]が20%上がる。`, // japonés
			`[POKEMON]성검사[/POKEMON]의 [RANGE]사거리[/RANGE]가 20% 증가합니다.`, // coreano
			`[POKEMON]圣剑士[/POKEMON]的[RANGE]射程[/RANGE]提高20%。`, // chino
			`Zwiększa [RANGE]zasięg[/RANGE] [POKEMON]Mieczy Sprawiedliwości[/POKEMON] o 20%.` // polaco
		]
	},
	victoryStar:  {
		id: 'victoryStar',
		name: [
		    "Victory Star",      // Inglés
		    "Tinovictoria",      // Español
		    "Étoile Victoire",   // Francés
		    "Estrela da Vitória", // Portugués
		    "Stella Vittoria",   // Italiano
		    "Triumphstern",      // Alemán
		    "しょうりのほし",        // Japonés
		    "승리의별",            // Coreano
		    "胜利之星",            // Chino simplificado
		    "Gwiazda Zwycięstwa" // Polaco
		],
		description: [
			`Increases the [SHAPE]width[/SHAPE] of all [SHAPE]Cross[/SHAPE] and [SHAPE]X-Shape[/SHAPE] [POKEMON]Pokémon[/POKEMON] by 50%.`, // inglés
			`Aumenta el [SHAPE]ancho[/SHAPE] de todos los [POKEMON]Pokémon[/POKEMON] con forma de [SHAPE]Cruz[/SHAPE] y [SHAPE]X[/SHAPE] un 50%.`, // español
			`Augmente la [SHAPE]largeur[/SHAPE] de tous les [POKEMON]Pokémon[/POKEMON] en forme de [SHAPE]Croix[/SHAPE] et de [SHAPE]X[/SHAPE] de 50 %.`, // francés
			`Aumenta a [SHAPE]largura[/SHAPE] de todos os [POKEMON]Pokémon[/POKEMON] com forma de [SHAPE]Cruz[/SHAPE] e [SHAPE]X[/SHAPE] em 50%.`, // portugués
			`Aumenta la [SHAPE]larghezza[/SHAPE] di tutti i [POKEMON]Pokémon[/POKEMON] con forma a [SHAPE]Croce[/SHAPE] e [SHAPE]X[/SHAPE] del 50%.`, // italiano
			`Erhöht die [SHAPE]Breite[/SHAPE] aller [POKEMON]Pokémon[/POKEMON] mit [SHAPE]Kreuz[/SHAPE]- und [SHAPE]X-Form[/SHAPE] um 50 %.`, // alemán
			`すべての[SHAPE]十字[/SHAPE]型および[SHAPE]X型[/SHAPE]の[POKEMON]ポケモン[/POKEMON]の[SHAPE]幅[/SHAPE]が50%増加する。`, // japonés
			`모든 [SHAPE]십자[/SHAPE] 및 [SHAPE]X자[/SHAPE] 형태의 [POKEMON]포켓몬[/POKEMON]의 [SHAPE]너비[/SHAPE]가 50% 증가합니다.`, // coreano
			`所有[SHAPE]十字[/SHAPE]和[SHAPE]X形[/SHAPE]的[POKEMON]宝可梦[/POKEMON]的[SHAPE]宽度[/SHAPE]提高50%。`, // chino
			`Zwiększa [SHAPE]szerokość[/SHAPE] wszystkich [POKEMON]Pokémonów[/POKEMON] o kształcie [SHAPE]Krzyża[/SHAPE] i [SHAPE]X[/SHAPE] o 50%.` // polaco
		]
	},
	genesisAura:  {
		id: 'genesisAura',
		name: [
		    "Genesis Aura",
			"Aura Génesis",
			"Aura Genèse",
			"Aura Gênese",
			"Aura Genesi",
			"Genesis-Aura",
			"ジェネシスオーラ",
			"제네시스 오라",
			"创世光环",
			"Aura Genezy"
		],
		description: [
			`Floats near [TOWER]allied towers[/TOWER], granting [POWER]15% power[/POWER], [CRITICAL]5% critical chance[/CRITICAL], and [SPEED]-10% recharge time[/SPEED].`, // inglés
			`Flota cerca de las [TOWER]torres aliadas[/TOWER], otorgando un 15% de [POWER]poder[/POWER], un 5% de [CRITICAL]probabilidad de golpe crítico[/CRITICAL] y un -10% de [SPEED]tiempo de recarga[/SPEED].`, // español
			`Flotte près des [TOWER]tours alliées[/TOWER], accordant 15 % de [POWER]puissance[/POWER], 5 % de [CRITICAL]chance de coup critique[/CRITICAL] et -10 % de [SPEED]temps de recharge[/SPEED].`, // francés
			`Flutua perto das [TOWER]torres aliadas[/TOWER], concedendo 15% de [POWER]poder[/POWER], 5% de [CRITICAL]chance de acerto crítico[/CRITICAL] e -10% de [SPEED]tempo de recarga[/SPEED].`, // portugués
			`Fluttua vicino alle [TOWER]torri alleate[/TOWER], conferendo il 15% di [POWER]potenza[/POWER], il 5% di [CRITICAL]probabilità di brutto colpo[/CRITICAL] e -10% di [SPEED]tempo di ricarica[/SPEED].`, // italiano
			`Schwebt in der Nähe verbündeter [TOWER]Türme[/TOWER] und gewährt 15 % [POWER]Kraft[/POWER], 5 % [CRITICAL]Chance auf kritische Treffer[/CRITICAL] und -10 % [SPEED]Aufladezeit[/SPEED].`, // alemán
			`[TOWER]味方のタワー[/TOWER]の近くを浮遊し、[POWER]威力[/POWER]を15%、[CRITICAL]急所率[/CRITICAL]を5%、[SPEED]再使用時間[/SPEED]を10%短縮する。`, // japonés
			`[TOWER]아군 타워[/TOWER] 근처에 떠다니며 [POWER]위력[/POWER] 15%, [CRITICAL]급소율[/CRITICAL] 5%, [SPEED]재사용 대기 시간[/SPEED] -10%를 부여합니다.`, // coreano
			`漂浮在[TOWER]友方塔[/TOWER]附近，使其[POWER]威力[/POWER]提高15%、[CRITICAL]暴击率[/CRITICAL]提高5%，并使[SPEED]冷却时间[/SPEED]缩短10%。`, // chino
			`Unosi się w pobliżu [TOWER]sojuszniczych wież[/TOWER], zapewniając 15% [POWER]mocy[/POWER], 5% [CRITICAL]szansy na trafienie krytyczne[/CRITICAL] oraz -10% [SPEED]czasu odnowienia[/SPEED].` // polaco
		]
	},
	voltSurge:  {
		id: 'voltSurge',
		name: [
			'Volt Surge',
			'Sobretensión',
			'Surtension',
			'Sobretensão',
			'Sovratensione',
			'Spannungsschub',
			'ボルトサージ',
			'볼트 서지',
			'电涌',
			'Przepięcie'
		],
		description: [
			`Attacks trigger [PROJECTILE]electric discharges[/PROJECTILE] that chain to up to [ENEMY]3 additional enemies[/ENEMY]. Chains to [ENEMY]1 extra enemy[/ENEMY] for each [POKEMON]Past Paradox Pokémon[/POKEMON] on the [PROJECTILE]team[/PROJECTILE].`, // inglés
			`Los ataques activan [PROJECTILE]descargas eléctricas[/PROJECTILE] que se encadenan a un máximo de [ENEMY]3 enemigos adicionales[/ENEMY]. Se encadena a [ENEMY]1 enemigo adicional[/ENEMY] por cada [POKEMON]Pokémon Paradoja del pasado[/POKEMON] en el [PROJECTILE]equipo[/PROJECTILE].`, // español
			`Les attaques déclenchent des [PROJECTILE]décharges électriques[/PROJECTILE] qui se propagent jusqu'à [ENEMY]3 ennemis supplémentaires[/ENEMY]. Se propage à [ENEMY]1 ennemi supplémentaire[/ENEMY] pour chaque [POKEMON]Pokémon Paradoxe du passé[/POKEMON] dans l'[PROJECTILE]équipe[/PROJECTILE].`, // francés
			`Os ataques ativam [PROJECTILE]descargas elétricas[/PROJECTILE] que se encadeiam a até [ENEMY]3 inimigos adicionais[/ENEMY]. Encadeia-se a [ENEMY]1 inimigo adicional[/ENEMY] para cada [POKEMON]Pokémon Paradoxo do passado[/POKEMON] no [PROJECTILE]time[/PROJECTILE].`, // portugués
			`Gli attacchi attivano [PROJECTILE]scariche elettriche[/PROJECTILE] che si concatenano fino a [ENEMY]3 nemici aggiuntivi[/ENEMY]. Si concatena a [ENEMY]1 nemico aggiuntivo[/ENEMY] per ogni [POKEMON]Pokémon Paradosso del passato[/POKEMON] nella [PROJECTILE]squadra[/PROJECTILE].`, // italiano
			`Angriffe lösen [PROJECTILE]elektrische Entladungen[/PROJECTILE] aus, die auf bis zu [ENEMY]3 weitere Gegner[/ENEMY] überspringen. Für jedes [POKEMON]Pokémon aus der Vergangenheit[/POKEMON] im [PROJECTILE]Team[/PROJECTILE] springt die Entladung auf [ENEMY]1 weiteren Gegner[/ENEMY] über.`, // alemán
			`攻撃すると[PROJECTILE]電撃[/PROJECTILE]が発生し、最大[ENEMY]3体の追加の敵[/ENEMY]に連鎖する。[PROJECTILE]チーム[/PROJECTILE]にいる[POKEMON]古代のパラドックスポケモン[/POKEMON]1体につき、さらに[ENEMY]1体の敵[/ENEMY]に連鎖する。`, // japonés
			`공격 시 [PROJECTILE]전기 방전[/PROJECTILE]을 일으켜 최대 [ENEMY]추가 적 3마리[/ENEMY]에게 연쇄됩니다. [PROJECTILE]팀[/PROJECTILE]에 있는 [POKEMON]과거 패러독스 포켓몬[/POKEMON] 하나당 [ENEMY]적 1마리[/ENEMY]에게 추가로 연쇄됩니다.`, // coreano
			`攻击会触发[PROJECTILE]电击[/PROJECTILE]，最多连锁至[ENEMY]3个额外敌人[/ENEMY]。队伍中每有一只[POKEMON]过去悖论宝可梦[/POKEMON]，就会额外连锁至[ENEMY]1个敌人[/ENEMY]。`, // chino
			`Ataki wywołują [PROJECTILE]wyładowania elektryczne[/PROJECTILE], które mogą przeskoczyć na maksymalnie [ENEMY]3 dodatkowych wrogów[/ENEMY]. Za każdego [POKEMON]Pokémona Paradoksu z przeszłości[/POKEMON] w [PROJECTILE]drużynie[/PROJECTILE] łańcuch obejmuje [ENEMY]1 dodatkowego wroga[/ENEMY].` // polaco
		]
	},
	aggressiveNature:  {
		id: 'aggressiveNature',
		name: [
			'Aggressive Nature',
			'Naturaleza Agresiva',
			'Nature Agressive',
			'Natureza Agressiva',
			'Natura Aggressiva',
			'Aggressives Wesen',
			'こうげきてきなせいしつ',
			'공격적인 본성',
			'攻击性本能',
			'Agresywna Natura'
		],
		description: [
			`If it has targets in [RANGE]range[/RANGE], it attacks whenever a [POKEMON]Future Paradox Pokémon[/POKEMON] attacks.`, // inglés
			`Si tiene objetivos a su [RANGE]alcance[/RANGE], ataca cada vez que un [POKEMON]Pokémon Paradoja del futuro[/POKEMON] ataca.`, // español
			`S'il a des cibles à [RANGE]portée[/RANGE], il attaque chaque fois qu'un [POKEMON]Pokémon Paradoxe du futur[/POKEMON] attaque.`, // francés
			`Se tiver alvos ao [RANGE]alcance[/RANGE], ataca sempre que um [POKEMON]Pokémon Paradoxo do futuro[/POKEMON] atacar.`, // portugués
			`Se ha bersagli a [RANGE]portata[/RANGE], attacca ogni volta che un [POKEMON]Pokémon Paradosso del futuro[/POKEMON] attacca.`, // italiano
			`Wenn es Ziele in [RANGE]Reichweite[/RANGE] hat, greift es jedes Mal an, wenn ein [POKEMON]Pokémon aus der Zukunft[/POKEMON] angreift.`, // alemán
			`射程内に対象がいる場合、[POKEMON]未来のパラドックスポケモン[/POKEMON]が攻撃するたびに攻撃する。`, // japonés
			`사거리 내에 대상이 있으면 [POKEMON]미래 패러독스 포켓몬[/POKEMON]이 공격할 때마다 공격합니다.`, // coreano
			`如果射程内有目标，则每当一只[POKEMON]未来悖论宝可梦[/POKEMON]攻击时，它也会发动攻击。`, // chino
			`Jeśli w zasięgu znajdują się cele, atakuje za każdym razem, gdy [POKEMON]Pokémon Paradoksu z przyszłości[/POKEMON] atakuje.` // polaco
		]
	},
	anchorShot: {
		id: 'anchorShot',
		name: [
		  	'Anchor Shot',
			'Anclaje',
			'Ancrage',
			'Ancoragem',
			'Colpo d’Ancora',
			'Ankerschuss',
			'アンカーショット',
			'앵커샷',
			'掷锚',
			'Kotwiczny Strzał'
		],
		description: [
			`Hooks the target, dealing damage while it remains near its [RANGE]range[/RANGE]. If the target is [CURSE]cursed[/CURSE], the release [RANGE]range[/RANGE] is increased. A maximum of 6 [ENEMY]enemies[/ENEMY] can be hooked at the same time.`, // inglés
			`Engancha al objetivo e inflige daño mientras permanece cerca del [RANGE]alcance[/RANGE]. Si el objetivo está [CURSE]maldito[/CURSE], aumenta el [RANGE]alcance[/RANGE] de liberación. Puede enganchar a un máximo de 6 [ENEMY]enemigos[/ENEMY] al mismo tiempo.`, // español
			`Accroche la cible et lui inflige des dégâts tant qu'elle reste près de la [RANGE]portée[/RANGE]. Si la cible est [CURSE]maudite[/CURSE], la [RANGE]portée[/RANGE] de libération augmente. Un maximum de 6 [ENEMY]ennemis[/ENEMY] peuvent être accrochés simultanément.`, // francés
			`Prende o alvo e causa dano enquanto ele permanecer perto do [RANGE]alcance[/RANGE]. Se o alvo estiver [CURSE]amaldiçoado[/CURSE], o [RANGE]alcance[/RANGE] de libertação aumenta. É possível prender até 6 [ENEMY]inimigos[/ENEMY] ao mesmo tempo.`, // portugués
			`Aggancia il bersaglio e gli infligge danni finché rimane vicino alla [RANGE]portata[/RANGE]. Se il bersaglio è [CURSE]maledetto[/CURSE], la [RANGE]portata[/RANGE] di rilascio aumenta. È possibile agganciare un massimo di 6 [ENEMY]nemici[/ENEMY] contemporaneamente.`, // italiano
			`Hakt das Ziel ein und verursacht Schaden, solange es sich in der Nähe der [RANGE]Reichweite[/RANGE] befindet. Ist das Ziel [CURSE]verflucht[/CURSE], erhöht sich die [RANGE]Reichweite[/RANGE] beim Loslassen. Es können gleichzeitig höchstens 6 [ENEMY]Gegner[/ENEMY] eingehakt werden.`, // alemán
			`対象をフックで捕らえ、[RANGE]射程[/RANGE]付近にいる間ダメージを与える。対象が[CURSE]呪い[/CURSE]状態の場合、解放時の[RANGE]射程[/RANGE]が増加する。同時にフックで捕らえられる[ENEMY]敵[/ENEMY]は最大6体。`, // japonés
			`대상을 갈고리로 걸어 [RANGE]사거리[/RANGE] 근처에 있는 동안 피해를 준다. 대상이 [CURSE]저주[/CURSE] 상태라면 놓아주는 [RANGE]거리[/RANGE]가 증가한다. 동시에 최대 6마리의 [ENEMY]적[/ENEMY]을 걸 수 있다.`, // coreano
			`钩住目标，并在目标停留于[RANGE]射程[/RANGE]附近时持续造成伤害。如果目标处于[CURSE]诅咒[/CURSE]状态，释放时的[RANGE]距离[/RANGE]会增加。最多可同时钩住6个[ENEMY]敌人[/ENEMY]。`, // chino
			`Chwyta cel hakiem i zadaje mu obrażenia, dopóki pozostaje on w pobliżu [RANGE]zasięgu[/RANGE]. Jeśli cel jest [CURSE]przeklęty[/CURSE], zwiększa się [RANGE]zasięg[/RANGE] zwolnienia chwytu. Można jednocześnie zahaczyć maksymalnie 6 [ENEMY]wrogów[/ENEMY].` // polaco
		]
	},
	dragonDarts: {
		id: 'dragonDarts',
		name: [
		    'Dragon Darts',
			'Dracoflechas',
			'Flèches Draconiques',
			'Dardos de Dragão',
			'Dardi di Drago',
			'Drachenpfeile',
			'ドラゴンアロー',
			'드래곤애로',
			'龙箭',
			'Smocze Strzały'
		],
		description: [
			`Select an [SHAPE]area[/SHAPE] to [PROJECTILE]bombard[/PROJECTILE] continuously. Fires 2 [PROJECTILE]projectiles[/PROJECTILE] at once.`, // inglés
			`Selecciona un [SHAPE]área[/SHAPE] para [PROJECTILE]bombardearla[/PROJECTILE] continuamente. Dispara 2 [PROJECTILE]proyectiles[/PROJECTILE] a la vez.`, // español
			`Sélectionne une [SHAPE]zone[/SHAPE] à [PROJECTILE]bombarder[/PROJECTILE] en continu. Tire 2 [PROJECTILE]projectiles[/PROJECTILE] à la fois.`, // francés
			`Seleciona uma [SHAPE]área[/SHAPE] para [PROJECTILE]bombardear[/PROJECTILE] continuamente. Dispara 2 [PROJECTILE]projéteis[/PROJECTILE] de cada vez.`, // portugués
			`Seleziona un'[SHAPE]area[/SHAPE] da [PROJECTILE]bombardare[/PROJECTILE] continuamente. Spara 2 [PROJECTILE]proiettili[/PROJECTILE] alla volta.`, // italiano
			`Wähle einen [SHAPE]Bereich[/SHAPE] aus, der kontinuierlich [PROJECTILE]bombardiert[/PROJECTILE] werden soll. Feuert jeweils 2 [PROJECTILE]Projektile[/PROJECTILE] gleichzeitig ab.`, // alemán
			`継続的に[PROJECTILE]爆撃する[/PROJECTILE][SHAPE]範囲[/SHAPE]を選択する。一度に2発の[PROJECTILE]弾[/PROJECTILE]を発射する。`, // japonés
			`지속적으로 [PROJECTILE]폭격할[/PROJECTILE] [SHAPE]범위[/SHAPE]를 선택한다. 한 번에 [PROJECTILE]투사체[/PROJECTILE] 2개를 발사한다.`, // coreano
			`选择一个[SHAPE]区域[/SHAPE]进行持续[PROJECTILE]轰炸[/PROJECTILE]。每次同时发射2枚[PROJECTILE]投射物[/PROJECTILE]。`, // chino
			`Wybierz [SHAPE]obszar[/SHAPE] do ciągłego [PROJECTILE]bombardowania[/PROJECTILE]. Wystrzeliwuje jednocześnie 2 [PROJECTILE]pociski[/PROJECTILE].` // polaco
		]
	},
	lavaPlume: {
		id: 'lavaPlume',
		name: [
			'Lava Plume',
			'Humareda',
			'Ébullilave',
			'Pluma de Lava',
			'Lavasbuffo',
			'Lavasturm',
			'ふんえん',
			'분연',
			'喷烟',
			'Lawowy Pióropusz'
		],
		description: [
			`Select an [SHAPE]area[/SHAPE] to [PROJECTILE]bombard[/PROJECTILE] continuously. [PROJECTILE]Projectiles[/PROJECTILE] explode in an [SHAPE]area[/SHAPE] inflicting [BURN]burn[/BURN].`, // inglés
			`Selecciona un [SHAPE]área[/SHAPE] para [PROJECTILE]bombardear[/PROJECTILE] continuamente. Los [PROJECTILE]proyectiles[/PROJECTILE] explotan en un [SHAPE]área[/SHAPE] provocando [BURN]quemaduras[/BURN].`, // español
			`Sélectionne une [SHAPE]zone[/SHAPE] à [PROJECTILE]bombarder[/PROJECTILE] en continu. Les [PROJECTILE]projectiles[/PROJECTILE] explosent dans une [SHAPE]zone[/SHAPE] et infligent des [BURN]brûlures[/BURN].`, // francés
			`Seleciona uma [SHAPE]área[/SHAPE] para [PROJECTILE]bombardear[/PROJECTILE] continuamente. Os [PROJECTILE]projéteis[/PROJECTILE] explodem numa [SHAPE]área[/SHAPE] causando [BURN]queimaduras[/BURN].`, // portugués
			`Seleziona un'[SHAPE]area[/SHAPE] da [PROJECTILE]bombardare[/PROJECTILE] continuamente. I [PROJECTILE]proiettili[/PROJECTILE] esplodono in un'[SHAPE]area[/SHAPE] infliggendo [BURN]ustioni[/BURN].`, // italiano
			`Wähle einen [SHAPE]Bereich[/SHAPE] aus, der kontinuierlich [PROJECTILE]bombardiert[/PROJECTILE] werden soll. [PROJECTILE]Projektile[/PROJECTILE] explodieren in einem [SHAPE]Bereich[/SHAPE] und verursachen [BURN]Verbrennungen[/BURN].`, // alemán
			`[SHAPE]範囲[/SHAPE]を選択して、継続的に[PROJECTILE]砲撃[/PROJECTILE]する。[PROJECTILE]弾[/PROJECTILE]が[SHAPE]範囲[/SHAPE]内で爆発し、[BURN]やけど[/BURN]を負わせる。`, // japonés
			`[SHAPE]범위[/SHAPE]를 선택하여 지속적으로 [PROJECTILE]포격[/PROJECTILE]한다. [PROJECTILE]탄환[/PROJECTILE]이 [SHAPE]범위[/SHAPE] 내에서 폭발하여 [BURN]화상[/BURN]을 입힌다.`, // coreano
			`选择一个[SHAPE]区域[/SHAPE]进行持续[PROJECTILE]轰炸[/PROJECTILE]。[PROJECTILE]投射物[/PROJECTILE]在[SHAPE]区域[/SHAPE]内爆炸，使目标陷入[BURN]灼伤[/BURN]状态。`, // chino
			`Wybierz [SHAPE]obszar[/SHAPE] do ciągłego [PROJECTILE]bombardowania[/PROJECTILE]. [PROJECTILE]Pociski[/PROJECTILE] wybuchają na [SHAPE]obszarze[/SHAPE], powodując [BURN]podpalenie[/BURN].` // polaco
		]
	},
	volcanicKaboom: {
		id: 'volcanicKaboom',
		name: [
			`Volcanic Kaboom`, // inglés
			`Explosión Volcánica`, // español
			`Kaboom Volcanique`, // francés
			`Explosão Vulcânica`, // portugués
			`Esplosione Vulcanica`, // italiano
			`Vulkanische Explosion`, // alemán
			`ボルケーノカブーン`, // japonés
			`볼케이노 카붐`, // coreano
			`火山爆炸`, // chino
			`Volcanic Kaboom` // polaco
		],
		description: [ 
			`Select an [SHAPE]area[/SHAPE] to [PROJECTILE]bombard[/PROJECTILE] continuously. Fire [PROJECTILE]three projectiles[/PROJECTILE] that explode in an [SHAPE]area[/SHAPE], [BURN]burning[/BURN] and having a 30% chance to [STUN]stun[/STUN] [ENEMY]enemies[/ENEMY] for 1.5 seconds.`, // inglés
			`Selecciona un [SHAPE]área[/SHAPE] para [PROJECTILE]bombardear[/PROJECTILE] continuamente. Dispara [PROJECTILE]tres proyectiles[/PROJECTILE] que explotan en un [SHAPE]área[/SHAPE], [BURN]quemando[/BURN] a los [ENEMY]enemigos[/ENEMY] y con un 30% de probabilidad de [STUN]aturdirlos[/STUN] durante 1,5 segundos.`, // español
			`Sélectionne une [SHAPE]zone[/SHAPE] à [PROJECTILE]bombarder[/PROJECTILE] en continu. Tire [PROJECTILE]trois projectiles[/PROJECTILE] qui explosent dans une [SHAPE]zone[/SHAPE], [BURN]brûlant[/BURN] les [ENEMY]ennemis[/ENEMY] et ayant 30 % de chances de les [STUN]étourdir[/STUN] pendant 1,5 seconde.`, // francés
			`Seleciona uma [SHAPE]área[/SHAPE] para [PROJECTILE]bombardear[/PROJECTILE] continuamente. Dispara [PROJECTILE]três projéteis[/PROJECTILE] que explodem numa [SHAPE]área[/SHAPE], [BURN]queimando[/BURN] os [ENEMY]inimigos[/ENEMY] e tendo 30% de chance de os [STUN]atordoar[/STUN] durante 1,5 segundo.`, // portugués
			`Seleziona un'[SHAPE]area[/SHAPE] da [PROJECTILE]bombardare[/PROJECTILE] continuamente. Spara [PROJECTILE]tre proiettili[/PROJECTILE] che esplodono in un'[SHAPE]area[/SHAPE], [BURN]bruciando[/BURN] i [ENEMY]nemici[/ENEMY] e con una probabilità del 30% di [STUN]stordirli[/STUN] per 1,5 secondi.`, // italiano
			`Wähle einen [SHAPE]Bereich[/SHAPE] aus, der kontinuierlich [PROJECTILE]bombardiert[/PROJECTILE] werden soll. Feuert [PROJECTILE]drei Projektile[/PROJECTILE] ab, die in einem [SHAPE]Bereich[/SHAPE] explodieren, [BURN]Gegner verbrennen[/BURN] und eine Chance von 30 % haben, [ENEMY]Gegner[/ENEMY] 1,5 Sekunden lang zu [STUN]betäuben[/STUN].`, // alemán
			`[SHAPE]範囲[/SHAPE]を選択して、継続的に[PROJECTILE]砲撃[/PROJECTILE]する。[PROJECTILE]3発の弾[/PROJECTILE]を発射し、[SHAPE]範囲[/SHAPE]内で爆発して、[ENEMY]敵[/ENEMY]を[BURN]やけど状態[/BURN]にし、30%の確率で1.5秒間[STUN]ひるませる[/STUN]。`, // japonés
			`[SHAPE]범위[/SHAPE]를 선택하여 지속적으로 [PROJECTILE]포격[/PROJECTILE]한다. [PROJECTILE]3개의 탄환[/PROJECTILE]을 발사하여 [SHAPE]범위[/SHAPE] 내에서 폭발시키고, [ENEMY]적[/ENEMY]을 [BURN]화상[/BURN] 상태로 만들며 30% 확률로 1.5초 동안 [STUN]기절[/STUN]시킨다.`, // coreano
			`选择一个[SHAPE]区域[/SHAPE]进行持续[PROJECTILE]轰炸[/PROJECTILE]。发射[PROJECTILE]3枚投射物[/PROJECTILE]，在[SHAPE]区域[/SHAPE]内爆炸，使[ENEMY]敌人[/ENEMY][BURN]陷入灼伤状态[/BURN]，并有30%的概率使其[STUN]眩晕[/STUN]1.5秒。`, // chino
			`Wybierz [SHAPE]obszar[/SHAPE] do ciągłego [PROJECTILE]bombardowania[/PROJECTILE]. Wystrzeliwuje [PROJECTILE]trzy pociski[/PROJECTILE], które wybuchają na [SHAPE]obszarze[/SHAPE], [BURN]podpalając[/BURN] [ENEMY]wrogów[/ENEMY] i mając 30% szans na ich [STUN]ogłuszenie[/STUN] przez 1,5 sekundy.` // polaco
		]
	},
	sludgeBomb: {
		id: 'sludgeBomb',
		name: [
			'Sludge Bomb', // inglés
			'Bomba Lodo', // español
			'Bomb-Beurk', // francés
			'Bomba de Lodo', // portugués
			'Fangobomba', // italiano
			'Schlammbombe', // alemán
			'ヘドロばくだん', // japonés
			'오물폭탄', // coreano
			'污泥炸弹', // chino
			'Sludge Bomb' // polaco
		],
		description: [
			`Select an [SHAPE]area[/SHAPE] to [PROJECTILE]bombard[/PROJECTILE] continuously. [PROJECTILE]Projectiles[/PROJECTILE] explode in an [SHAPE]area[/SHAPE], inflicting 1 stack of [POISON]poison[/POISON].`, // inglés
			`Selecciona un [SHAPE]área[/SHAPE] para [PROJECTILE]bombardearla[/PROJECTILE] continuamente. Los [PROJECTILE]proyectiles[/PROJECTILE] explotan en un [SHAPE]área[/SHAPE] e infligen 1 acumulación de [POISON]veneno[/POISON].`, // español
			`Sélectionne une [SHAPE]zone[/SHAPE] à [PROJECTILE]bombarder[/PROJECTILE] en continu. Les [PROJECTILE]projectiles[/PROJECTILE] explosent dans une [SHAPE]zone[/SHAPE] et appliquent 1 cumul de [POISON]poison[/POISON].`, // francés
			`Seleciona uma [SHAPE]área[/SHAPE] para [PROJECTILE]bombardear[/PROJECTILE] continuamente. Os [PROJECTILE]projéteis[/PROJECTILE] explodem numa [SHAPE]área[/SHAPE], aplicando 1 acumulação de [POISON]veneno[/POISON].`, // portugués
			`Seleziona un'[SHAPE]area[/SHAPE] da [PROJECTILE]bombardare[/PROJECTILE] continuamente. I [PROJECTILE]proiettili[/PROJECTILE] esplodono in un'[SHAPE]area[/SHAPE], applicando 1 accumulo di [POISON]veleno[/POISON].`, // italiano
			`Wähle einen [SHAPE]Bereich[/SHAPE] aus, der kontinuierlich [PROJECTILE]bombardiert[/PROJECTILE] werden soll. [PROJECTILE]Projektile[/PROJECTILE] explodieren in einem [SHAPE]Bereich[/SHAPE] und verursachen 1 Stapel [POISON]Gift[/POISON].`, // alemán
			`[PROJECTILE]爆撃[/PROJECTILE]を続ける[SHAPE]範囲[/SHAPE]を選択する。[PROJECTILE]弾[/PROJECTILE]は[SHAPE]範囲[/SHAPE]内で爆発し、[POISON]どく[/POISON]を1段階付与する。`, // japonés
			`지속적으로 [PROJECTILE]폭격할[/PROJECTILE] [SHAPE]범위[/SHAPE]를 선택한다. [PROJECTILE]투사체[/PROJECTILE]는 [SHAPE]범위[/SHAPE] 내에서 폭발해 [POISON]독[/POISON]을 1중첩 부여한다.`, // coreano
			`选择一个[SHAPE]区域[/SHAPE]进行持续[PROJECTILE]轰炸[/PROJECTILE]。[PROJECTILE]投射物[/PROJECTILE]会在[SHAPE]区域[/SHAPE]内爆炸，并施加1层[POISON]中毒[/POISON]效果。`, // chino
			`Wybierz [SHAPE]obszar[/SHAPE] do ciągłego [PROJECTILE]bombardowania[/PROJECTILE]. [PROJECTILE]Pociski[/PROJECTILE] wybuchają na [SHAPE]obszarze[/SHAPE], nakładając 1 ładunek [POISON]trucizny[/POISON].` // polaco
		]
	},
	triAttack: {
	    id: "triAttack",
	    name: [
			'Tri Attack', // inglés
			'Triataque', // español
			'Triplattaque', // francés
			'Triataque', // portugués
			'Triattacco', // italiano
			'Dreifach-Angriff', // alemán
			'トライアタック', // japonés
			'트라이어택', // coreano
			'三重攻击', // chino
			'Tri Atak' // polaco
	    ],
    	description: [
			`[PROJECTILE]Projectiles orbit[/PROJECTILE] the user and have a 30% chance to apply [BURN]burn[/BURN], [SLOW]slow[/SLOW] or [STUN]stun[/STUN].`, // inglés
			`Los [PROJECTILE]proyectiles orbitan[/PROJECTILE] alrededor del usuario y tienen un 30% de probabilidad de causar [BURN]quemadura[/BURN], [SLOW]ralentización[/SLOW] o [STUN]aturdimiento[/STUN].`, // español
			`Les [PROJECTILE]projectiles gravitent en orbite[/PROJECTILE] autour de l'utilisateur et ont 30 % de chances d'infliger une [BURN]brûlure[/BURN], un [SLOW]ralentissement[/SLOW] ou un [STUN]étourdissement[/STUN].`, // francés
			`Os [PROJECTILE]projéteis orbitam[/PROJECTILE] à volta do utilizador e têm 30% de probabilidade de causar [BURN]queimadura[/BURN], [SLOW]lentidão[/SLOW] ou [STUN]atordoamento[/STUN].`, // portugués
			`I [PROJECTILE]proiettili orbitano[/PROJECTILE] attorno all'utilizzatore e hanno il 30% di probabilità di infliggere [BURN]scottatura[/BURN], [SLOW]rallentamento[/SLOW] o [STUN]stordimento[/STUN].`, // italiano
			`[PROJECTILE]Projektile umkreisen[/PROJECTILE] den Anwender und haben eine Chance von 30 %, [BURN]Verbrennung[/BURN], [SLOW]Verlangsamung[/SLOW] oder [STUN]Betäubung[/STUN] zu verursachen.`, // alemán
			`[PROJECTILE]弾[/PROJECTILE]が使用者の周囲を回り、30%の確率で[BURN]やけど[/BURN]、[SLOW]減速[/SLOW]、または[STUN]ひるみ[/STUN]を与える。`, // japonés
			`[PROJECTILE]투사체가 사용자의 주위를 돈다[/PROJECTILE]. 30% 확률로 [BURN]화상[/BURN], [SLOW]느려짐[/SLOW] 또는 [STUN]기절[/STUN]을 부여한다.`, // coreano
			`[PROJECTILE]投射物环绕使用者旋转[/PROJECTILE]，有30%的概率施加[BURN]灼伤[/BURN]、[SLOW]减速[/SLOW]或[STUN]眩晕[/STUN]。`, // chino
			`[PROJECTILE]Pociski krążą[/PROJECTILE] wokół użytkownika i mają 30% szans na nałożenie [BURN]podpalenia[/BURN], [SLOW]spowolnienia[/SLOW] lub [STUN]ogłuszenia[/STUN].` // polaco
		]
  	},
  	stickyWeb: {
		id: 'stickyWeb',
		name: [
		  	'Sticky Web', // inglés
			'Red Viscosa', // español
			'Toile Gluante', // francés
			'Teia Pegajosa', // portugués
			'Ragnatela', // italiano
			'Netz', // alemán
			'ねばねばネット', // japonés
			'끈적끈적네트', // coreano
			'黏黏网', // chino
			'Sieć Lepka' // polaco
		],
		description: [
			`[PROJECTILE]Projectiles[/PROJECTILE] leave a [WEB]web[/WEB] that reduces [SPEED]speed[/SPEED] and deals damage over time to [ENEMY]enemies[/ENEMY] that remain on it.`, // inglés
			`Los [PROJECTILE]proyectiles[/PROJECTILE] dejan una [WEB]telaraña[/WEB] que reduce la [SPEED]velocidad[/SPEED] e inflige daño persistente a los [ENEMY]enemigos[/ENEMY] que permanecen sobre ella.`, // español
			`Les [PROJECTILE]projectiles[/PROJECTILE] laissent une [WEB]toile d'araignée[/WEB] qui réduit la [SPEED]vitesse[/SPEED] et inflige des dégâts sur la durée aux [ENEMY]ennemis[/ENEMY] qui restent dessus.`, // francés
			`Os [PROJECTILE]projéteis[/PROJECTILE] deixam uma [WEB]teia de aranha[/WEB] que reduz a [SPEED]velocidade[/SPEED] e causa dano ao longo do tempo aos [ENEMY]inimigos[/ENEMY] que permanecem sobre ela.`, // portugués
			`I [PROJECTILE]proiettili[/PROJECTILE] lasciano una [WEB]ragnatela[/WEB] che riduce la [SPEED]velocità[/SPEED] e infligge danni nel tempo ai [ENEMY]nemici[/ENEMY] che vi rimangono sopra.`, // italiano
			`[PROJECTILE]Projektile[/PROJECTILE] hinterlassen ein [WEB]Spinnennetz[/WEB], das die [SPEED]Geschwindigkeit[/SPEED] verringert und [ENEMY]Gegnern[/ENEMY], die darauf bleiben, über Zeit Schaden zufügt.`, // alemán
			`[PROJECTILE]弾[/PROJECTILE]は[WEB]クモの巣[/WEB]を残し、その上に留まった[ENEMY]敵[/ENEMY]の[SPEED]速度[/SPEED]を低下させ、継続ダメージを与える。`, // japonés
			`[PROJECTILE]투사체[/PROJECTILE]는 [WEB]거미줄[/WEB]을 남기며, 거미줄 위에 머무는 [ENEMY]적[/ENEMY]의 [SPEED]속도[/SPEED]를 감소시키고 지속 피해를 준다.`, // coreano
			`[PROJECTILE]投射物[/PROJECTILE]会留下[WEB]蛛网[/WEB]，降低[SPEED]速度[/SPEED]，并对停留在蛛网上的[ENEMY]敌人[/ENEMY]持续造成伤害。`, // chino
			`[PROJECTILE]Pociski[/PROJECTILE] pozostawiają [WEB]pajęczynę[/WEB], która zmniejsza [SPEED]prędkość[/SPEED] i zadaje obrażenia w czasie [ENEMY]wrogom[/ENEMY], którzy pozostają na jej powierzchni.` // polaco
		]
	},
	electroBall: {
	    id: "electroBall",
	    name: [
			'Electro Ball', // inglés
			'Bola Voltio', // español
			'Électro Ball', // francés
			'Electro Bola', // portugués
			'Energisfera', // italiano
			'Elektroball', // alemán
			'エレキボール', // japonés
			'일렉트릭볼', // coreano
			'电球', // chino
			'Electro Ball' // polaco
	    ],
    	description: [
			`Fires a very slow [PROJECTILE]projectile[/PROJECTILE] that increases its damage by 50% for every second it travels after the first second. It explodes in an [SHAPE]area[/SHAPE], dealing half damage to nearby [ENEMY]enemies[/ENEMY] and [STUN]stunning[/STUN] them for 2 seconds.`, // inglés
			`Dispara un [PROJECTILE]proyectil[/PROJECTILE] muy lento cuyo daño aumenta un 50% por cada segundo que viaja después del primero. Explota en un [SHAPE]área[/SHAPE], inflige la mitad de daño a los [ENEMY]enemigos[/ENEMY] cercanos y los [STUN]aturde[/STUN] durante 2 segundos.`, // español
			`Tire un [PROJECTILE]projectile[/PROJECTILE] très lent dont les dégâts augmentent de 50 % pour chaque seconde de déplacement après la première. Il explose dans une [SHAPE]zone[/SHAPE], infligeant la moitié des dégâts aux [ENEMY]ennemis[/ENEMY] proches et les [STUN]étourdissant[/STUN] pendant 2 secondes.`, // francés
			`Dispara um [PROJECTILE]projétil[/PROJECTILE] muito lento cujo dano aumenta em 50% por cada segundo que percorre após o primeiro. Explode numa [SHAPE]área[/SHAPE], causando metade do dano aos [ENEMY]inimigos[/ENEMY] próximos e [STUN]atordoando-os[/STUN] durante 2 segundos.`, // portugués
			`Spara un [PROJECTILE]proiettile[/PROJECTILE] molto lento che aumenta i propri danni del 50% per ogni secondo di viaggio dopo il primo. Esplode in un'[SHAPE]area[/SHAPE], infliggendo metà dei danni ai [ENEMY]nemici[/ENEMY] vicini e [STUN]stordendoli[/STUN] per 2 secondi.`, // italiano
			`Feuert ein sehr langsames [PROJECTILE]Projektil[/PROJECTILE] ab, dessen Schaden für jede Flugsekunde nach der ersten um 50 % steigt. Es explodiert in einem [SHAPE]Bereich[/SHAPE], verursacht bei nahegelegenen [ENEMY]Gegnern[/ENEMY] halben Schaden und [STUN]betäubt[/STUN] sie für 2 Sekunden.`, // alemán
			`非常に遅い[PROJECTILE]弾[/PROJECTILE]を発射する。弾は最初の1秒が経過した後、飛行時間が1秒増えるごとにダメージが50%増加する。[SHAPE]範囲[/SHAPE]内で爆発し、近くの[ENEMY]敵[/ENEMY]に半分のダメージを与え、2秒間[STUN]ひるみ[/STUN]状態にする。`, // japonés
			`매우 느린 [PROJECTILE]투사체[/PROJECTILE]를 발사한다. 투사체는 첫 1초가 지난 뒤 이동 시간이 1초 늘어날 때마다 피해량이 50% 증가한다. [SHAPE]범위[/SHAPE] 내에서 폭발해 주변 [ENEMY]적[/ENEMY]에게 절반의 피해를 주고 2초 동안 [STUN]기절[/STUN]시킨다.`, // coreano
			`发射一枚速度极慢的[PROJECTILE]投射物[/PROJECTILE]。经过最初的1秒后，投射物每飞行1秒，造成的伤害就增加50%。它会在[SHAPE]范围[/SHAPE]内爆炸，对附近的[ENEMY]敌人[/ENEMY]造成一半伤害，并使其[STUN]眩晕[/STUN]2秒。`, // chino
			`Wystrzeliwuje bardzo powolny [PROJECTILE]pocisk[/PROJECTILE], którego obrażenia wzrastają o 50% za każdą sekundę lotu po pierwszej sekundzie. Pocisk wybucha na [SHAPE]obszarze[/SHAPE], zadając połowę obrażeń pobliskim [ENEMY]wrogom[/ENEMY] i [STUN]ogłuszając[/STUN] ich na 2 sekundy.` // polaco
		]
  	},
  	unnerve: {
	    id: 'unnerve',
	    name: [
		  	'Unnerve', // inglés
			'Inervación', // español
			'Prévention', // francés
			'Unnerve', // portugués
			'Agitazione', // italiano
			'Anspannung', // alemán
			'きんちょうかん', // japonés
			'긴장감', // coreano
			'紧张感', // chino
			'Nerwowa Atmosfera' // polaco
		],
	    description: [
			`Increases the effect of all [ITEM]Berries[/ITEM] by 10%. Applies to all [TOWER]Towers[/TOWER].`, // inglés
			`Aumenta un 10% el efecto de todas las [ITEM]bayas[/ITEM]. Se aplica a todas las [TOWER]torres[/TOWER].`, // español
			`Augmente de 10 % l'effet de toutes les [ITEM]Baies[/ITEM]. S'applique à toutes les [TOWER]tours[/TOWER].`, // francés
			`Aumenta em 10% o efeito de todas as [ITEM]frutas[/ITEM]. Aplica-se a todas as [TOWER]torres[/TOWER].`, // portugués
			`Aumenta del 10% l'effetto di tutte le [ITEM]bacche[/ITEM]. Si applica a tutte le [TOWER]torri[/TOWER].`, // italiano
			`Erhöht die Wirkung aller [ITEM]Beeren[/ITEM] um 10 %. Gilt für alle [TOWER]Türme[/TOWER].`, // alemán
			`すべての[ITEM]きのみ[/ITEM]の効果が10%上昇する。すべての[TOWER]タワー[/TOWER]に適用される。`, // japonés
			`모든 [ITEM]나무열매[/ITEM]의 효과가 10% 증가한다. 모든 [TOWER]타워[/TOWER]에 적용된다.`, // coreano
			`所有[ITEM]树果[/ITEM]的效果提高10%。适用于所有[TOWER]塔[/TOWER]。`, // chino
			`Zwiększa działanie wszystkich [ITEM]jagód[/ITEM] o 10%. Dotyczy wszystkich [TOWER]wież[/TOWER].` // polaco
		]
	},
	harvest: {
	    id: 'harvest',
	    name: [
		  	'Harvest', // inglés
			'Cosecha', // español
			'Récolte', // francés
			'Colheita', // portugués
			'Coglibacche', // italiano
			'Reiche Ernte', // alemán
			'しゅうかく', // japonés
			'수확', // coreano
			'收获', // chino
			'Harvest' // polaco
		],
	    description: [
			`Doubles the duration of all [ITEM]Berries[/ITEM]. Applies to all [TOWER]Towers[/TOWER].`, // inglés
			`Duplica la duración de todas las [ITEM]bayas[/ITEM]. Se aplica a todas las [TOWER]torres[/TOWER].`, // español
			`Double la durée de toutes les [ITEM]Baies[/ITEM]. S'applique à toutes les [TOWER]tours[/TOWER].`, // francés
			`Duplica a duração de todas as [ITEM]frutas[/ITEM]. Aplica-se a todas as [TOWER]torres[/TOWER].`, // portugués
			`Raddoppia la durata di tutte le [ITEM]bacche[/ITEM]. Si applica a tutte le [TOWER]torri[/TOWER].`, // italiano
			`Verdoppelt die Dauer aller [ITEM]Beeren[/ITEM]. Gilt für alle [TOWER]Türme[/TOWER].`, // alemán
			`すべての[ITEM]きのみ[/ITEM]の持続時間が2倍になる。すべての[TOWER]タワー[/TOWER]に適用される。`, // japonés
			`모든 [ITEM]나무열매[/ITEM]의 지속 시간이 두 배가 된다. 모든 [TOWER]타워[/TOWER]에 적용된다.`, // coreano
			`所有[ITEM]树果[/ITEM]的持续时间翻倍。适用于所有[TOWER]塔[/TOWER]。`, // chino
			`Podwaja czas działania wszystkich [ITEM]jagód[/ITEM]. Dotyczy wszystkich [TOWER]wież[/TOWER].` // polaco
		]
	},
	ripen: {
	    id: 'ripen',
	    name: [
		  	'Ripen', // inglés
			'Maduración', // español
			'Mûrissement', // francés
			'Amadurecimento', // portugués
			'Maturazione', // italiano
			'Heranreifen', // alemán
			'じゅくせい', // japonés
			'숙성', // coreano
			'熟成', // chino
			'Ripen' // polaco
		],
	    description: [
			`Increases the effect of [ITEM]Berries[/ITEM] consumed by this [POKEMON]Pokémon[/POKEMON] by 100%.`, // inglés
			`Aumenta un 100% el efecto de las [ITEM]bayas[/ITEM] consumidas por este [POKEMON]Pokémon[/POKEMON].`, // español
			`Augmente de 100 % l'effet des [ITEM]Baies[/ITEM] consommées par ce [POKEMON]Pokémon[/POKEMON].`, // francés
			`Aumenta em 100% o efeito das [ITEM]frutas[/ITEM] consumidas por este [POKEMON]Pokémon[/POKEMON].`, // portugués
			`Aumenta del 100% l'effetto delle [ITEM]bacche[/ITEM] consumate da questo [POKEMON]Pokémon[/POKEMON].`, // italiano
			`Erhöht die Wirkung der von diesem [POKEMON]Pokémon[/POKEMON] verzehrten [ITEM]Beeren[/ITEM] um 100 %.`, // alemán
			`この[POKEMON]ポケモン[/POKEMON]が食べた[ITEM]きのみ[/ITEM]の効果が100%上昇する。`, // japonés
			`이 [POKEMON]포켓몬[/POKEMON]이 먹은 [ITEM]나무열매[/ITEM]의 효과가 100% 증가한다.`, // coreano
			`此[POKEMON]宝可梦[/POKEMON]食用的[ITEM]树果[/ITEM]效果提高100%。`, // chino
			`Zwiększa o 100% działanie [ITEM]jagód[/ITEM] zjedzonych przez tego [POKEMON]Pokémona[/POKEMON].` // polaco
		]
	},
	gluttony: {
	    id: 'gluttony',
	    name: [
		  	'Gluttony', // inglés
			'Gula', // español
			'Gloutonnerie', // francés
			'Gulodice', // portugués
			'Voracità', // italiano
			'Völlerei', // alemán
			'くいしんぼう', // japonés
			'먹보', // coreano
			'贪吃鬼', // chino
			'Obżarstwo' // polaco
		],
	    description: [
			`[ITEM]Berries[/ITEM] also activate at the start of the wave. Applies to all [TOWER]Towers[/TOWER].`, // inglés
			`Las [ITEM]bayas[/ITEM] también se activan al comienzo de la oleada. Se aplica a todas las [TOWER]torres[/TOWER].`, // español
			`Les [ITEM]Baies[/ITEM] s'activent également au début de la vague. S'applique à toutes les [TOWER]tours[/TOWER].`, // francés
			`As [ITEM]frutas[/ITEM] também são ativadas no início da vaga. Aplica-se a todas as [TOWER]torres[/TOWER].`, // portugués
			`Le [ITEM]bacche[/ITEM] si attivano anche all'inizio dell'ondata. Si applica a tutte le [TOWER]torri[/TOWER].`, // italiano
			`[ITEM]Beeren[/ITEM] werden auch zu Beginn der Welle aktiviert. Gilt für alle [TOWER]Türme[/TOWER].`, // alemán
			`[ITEM]きのみ[/ITEM]はウェーブ開始時にも発動する。すべての[TOWER]タワー[/TOWER]に適用される。`, // japonés
			`[ITEM]나무열매[/ITEM]가 웨이브 시작 시에도 발동한다. 모든 [TOWER]타워[/TOWER]에 적용된다.`, // coreano
			`[ITEM]树果[/ITEM]也会在波次开始时触发。适用于所有[TOWER]塔[/TOWER]。`, // chino
			`[ITEM]Jagody[/ITEM] aktywują się również na początku fali. Dotyczy wszystkich [TOWER]wież[/TOWER].` // polaco
		]
	},
	pollenPuff: {
	    id: 'pollenPuff',
	    name: [
		  	'Pollen Puff', // inglés
			'Bola de Polen', // español
			'Boule Pollen', // francés
			'Bola de Pólen', // portugués
			'Palla di Polline', // italiano
			'Pollenknödel', // alemán
			'かふんだんご', // japonés
			'화분경단', // coreano
			'花粉团', // chino
			'Pyłkowa Kulka' // polaco
		],
	    description: [
		  	'The projectiles explode in an area, dealing half damage to nearby enemies. Size increases with Honey Gather stacks.', // inglés
			'Los proyectiles explotan en un área, infligiendo la mitad del daño a los enemigos cercanos. El tamaño aumenta según las cargas de Recogemiel.', // español
			'Les projectiles explosent dans une zone, infligeant la moitié des dégâts aux ennemis proches. La taille augmente selon les charges de Récolte Miel.', // francés
			'Os projéteis explodem em uma área, causando metade do dano aos inimigos próximos. O tamanho aumenta de acordo com as cargas de Coleta de Mel.', // portugués
			'I proiettili esplodono in un’area, infliggendo metà dei danni ai nemici vicini. Le dimensioni aumentano in base alle cariche di Mielincetta.', // italiano
			'Die Projektile explodieren in einem Bereich und verursachen bei nahegelegenen Gegnern halben Schaden. Die Größe steigt mit den Stapeln von Honigsammler.', // alemán
			'弾は範囲内で爆発し、近くの敵に半分のダメージを与える。サイズはみつあつめの蓄積に応じて大きくなる。', // japonés
			'투사체가 범위 내에서 폭발하여 주변 적에게 절반의 피해를 준다. 크기는 꿀모으기의 중첩에 따라 증가한다.', // coreano
			'投射物会在范围内爆炸，对附近敌人造成一半伤害。大小会根据采蜜的层数增加。', // chino
			'Pociski eksplodują na obszarze, zadając pobliskim wrogom połowę obrażeń. Rozmiar zwiększa się wraz z ładunkami Zbierania Miodu.' // polaco
		]
	},
	supremeOverlord: {
		id: 'supremeOverlord',
		name: [
		  	'Supreme Overlord', // inglés
			'General Supremo', // español
			'Général Suprême', // francés
			'General Supremo', // portugués
			'Generale Supremo', // italiano
			'Feldherr', // alemán
			'そうだいしょう', // japonés
			'총대장', // coreano
			'大将', // chino
			'Supreme Overlord' // polaco
		],
		description: [
			`Increases [POWER]power[/POWER] by 10% and [CRITICAL]critical chance[/CRITICAL] by 5% for each missing [POKEMON]Pokémon[/POKEMON] in the [TEAM]team[/TEAM].`, // inglés
			`Aumenta el [POWER]poder[/POWER] un 10% y la [CRITICAL]probabilidad de crítico[/CRITICAL] un 5% por cada [POKEMON]Pokémon[/POKEMON] que falte en el [TEAM]equipo[/TEAM].`, // español
			`Augmente la [POWER]puissance[/POWER] de 10 % et les [CRITICAL]chances de coup critique[/CRITICAL] de 5 % pour chaque [POKEMON]Pokémon[/POKEMON] manquant dans l'[TEAM]équipe[/TEAM].`, // francés
			`Aumenta o [POWER]poder[/POWER] em 10% e a [CRITICAL]chance de crítico[/CRITICAL] em 5% por cada [POKEMON]Pokémon[/POKEMON] em falta na [TEAM]equipe[/TEAM].`, // portugués
			`Aumenta la [POWER]potenza[/POWER] del 10% e la [CRITICAL]probabilità di critico[/CRITICAL] del 5% per ogni [POKEMON]Pokémon[/POKEMON] mancante nella [TEAM]squadra[/TEAM].`, // italiano
			`Erhöht die [POWER]Stärke[/POWER] um 10 % und die [CRITICAL]Volltrefferchance[/CRITICAL] um 5 % für jedes fehlende [POKEMON]Pokémon[/POKEMON] im [TEAM]Team[/TEAM].`, // alemán
			`[TEAM]チーム[/TEAM]に不足している[POKEMON]ポケモン[/POKEMON]1匹につき、[POWER]威力[/POWER]が10%、[CRITICAL]急所率[/CRITICAL]が5%上昇する。`, // japonés
			`[TEAM]팀[/TEAM]에 부족한 [POKEMON]포켓몬[/POKEMON] 한 마리당 [POWER]위력[/POWER]이 10%, [CRITICAL]급소 확률[/CRITICAL]이 5% 증가한다.`, // coreano
			`[TEAM]队伍[/TEAM]中每缺少一只[POKEMON]宝可梦[/POKEMON]，[POWER]威力[/POWER]就提高10%，[CRITICAL]会心率[/CRITICAL]提高5%。`, // chino
			`Zwiększa [POWER]moc[/POWER] o 10% i [CRITICAL]szansę na cios krytyczny[/CRITICAL] o 5% za każdego brakującego [POKEMON]Pokémona[/POKEMON] w [TEAM]drużynie[/TEAM].` // polaco
		]
	},
	bonemerang: {
		id: 'bonemerang',
		name: [
		  	'Bonemerang', // inglés
			'Huesomerang', // español
			'Osmerang', // francés
			'Ossomerangue', // portugués
			'Ossomerang', // italiano
			'Knochmerang', // alemán
			'ホネブーメラン', // japonés
			'뼈다귀부메랑', // coreano
			'骨头回力镖', // chino
			'Kościorang' // polaco
		],
		description: [
			`[PROJECTILE]Projectiles[/PROJECTILE] deal damage to all [ENEMY]enemies[/ENEMY] they pass through and return to the user.`, // inglés
			`Los [PROJECTILE]proyectiles[/PROJECTILE] dañan a todos los [ENEMY]enemigos[/ENEMY] que atraviesan y regresan al usuario.`, // español
			`Les [PROJECTILE]projectiles[/PROJECTILE] infligent des dégâts à tous les [ENEMY]ennemis[/ENEMY] qu'ils traversent, puis retournent vers l'utilisateur.`, // francés
			`Os [PROJECTILE]projéteis[/PROJECTILE] causam dano a todos os [ENEMY]inimigos[/ENEMY] que atravessam e regressam ao utilizador.`, // portugués
			`I [PROJECTILE]proiettili[/PROJECTILE] infliggono danni a tutti i [ENEMY]nemici[/ENEMY] che attraversano e tornano all'utilizzatore.`, // italiano
			`[PROJECTILE]Projektile[/PROJECTILE] fügen allen [ENEMY]Gegnern[/ENEMY], die sie durchqueren, Schaden zu und kehren zum Anwender zurück.`, // alemán
			`[PROJECTILE]弾[/PROJECTILE]は通過したすべての[ENEMY]敵[/ENEMY]にダメージを与え、使用者のもとに戻る。`, // japonés
			`[PROJECTILE]투사체[/PROJECTILE]는 지나가는 모든 [ENEMY]적[/ENEMY]에게 피해를 주고 사용자에게 돌아온다.`, // coreano
			`[PROJECTILE]投射物[/PROJECTILE]会对穿过的所有[ENEMY]敌人[/ENEMY]造成伤害，然后返回使用者身边。`, // chino
			`[PROJECTILE]Pociski[/PROJECTILE] zadają obrażenia wszystkim [ENEMY]wrogom[/ENEMY], przez których przelatują, po czym wracają do użytkownika.` // polaco
		]
	},
	direClaw: {
		id: 'direClaw',
		name: [
		  	'Dire Claw', // inglés
			'Garra Nociva', // español
			'Griffe Funeste', // francés
			'Garra Nefasta', // portugués
			'Artigli Fatali', // italiano
			'Unheilspranke', // alemán
			'どくづき', // japonés
			'독발톱', // coreano
			'毒爪', // chino
			'Dire Claw' // polaco
		],
		description: [
			`Attacks apply 1 stack of [POISON]Poison[/POISON]. [CRITICAL]Critical hits[/CRITICAL] apply an additional stack.`, // inglés
			`Los ataques aplican 1 acumulación de [POISON]Veneno[/POISON]. Los [CRITICAL]golpes críticos[/CRITICAL] aplican una acumulación adicional.`, // español
			`Les attaques appliquent 1 cumul de [POISON]Poison[/POISON]. Les [CRITICAL]coups critiques[/CRITICAL] appliquent un cumul supplémentaire.`, // francés
			`Os ataques aplicam 1 acumulação de [POISON]Veneno[/POISON]. Os [CRITICAL]golpes críticos[/CRITICAL] aplicam uma acumulação adicional.`, // portugués
			`Gli attacchi applicano 1 accumulo di [POISON]Veleno[/POISON]. I [CRITICAL]colpi critici[/CRITICAL] applicano un accumulo aggiuntivo.`, // italiano
			`Angriffe wenden 1 Stapel [POISON]Gift[/POISON] an. [CRITICAL]Volltreffer[/CRITICAL] wenden einen zusätzlichen Stapel an.`, // alemán
			`攻撃時に[POISON]どく[/POISON]を1段階付与する。[CRITICAL]急所に当たると[/CRITICAL]、さらに1段階付与する。`, // japonés
			`공격 시 [POISON]독[/POISON]을 1중첩 부여한다. [CRITICAL]급소 공격[/CRITICAL]은 중첩을 추가로 1회 부여한다.`, // coreano
			`攻击会施加1层[POISON]中毒[/POISON]效果。[CRITICAL]会心一击[/CRITICAL]会额外施加1层。`, // chino
			`Ataki nakładają 1 ładunek [POISON]Trucizny[/POISON]. [CRITICAL]Ciosy krytyczne[/CRITICAL] nakładają dodatkowy ładunek.` // polaco
		]
	},
	signalBeam: {
		id: 'signalBeam',
		name: [
		  	'Signal Beam', // inglés
			'Psicorrayo', // español
			'Rayon Signal', // francés
			'Raio Sinalizador', // portugués
			'Segnoraggio', // italiano
			'Strahlspruch', // alemán
			'シグナルビーム', // japonés
			'시그널빔', // coreano
			'信号光束', // chino
			'Signal Beam' // polaco
		],
		description: [
			`Maintains a [PROJECTILE]beam[/PROJECTILE] on its target, dealing damage every 0.25 seconds while it remains in [RANGE]range[/RANGE].`, // inglés
			`Mantiene un [PROJECTILE]rayo[/PROJECTILE] sobre su objetivo, infligiendo daño cada 0,25 segundos mientras permanezca dentro del [RANGE]alcance[/RANGE].`, // español
			`Maintient un [PROJECTILE]rayon[/PROJECTILE] sur sa cible, infligeant des dégâts toutes les 0,25 secondes tant qu'elle reste à [RANGE]portée[/RANGE].`, // francés
			`Mantém um [PROJECTILE]feixe[/PROJECTILE] no alvo, causando dano a cada 0,25 segundos enquanto ele permanecer dentro do [RANGE]alcance[/RANGE].`, // portugués
			`Mantiene un [PROJECTILE]raggio[/PROJECTILE] sul bersaglio, infliggendo danni ogni 0,25 secondi finché rimane nella [RANGE]portata[/RANGE].`, // italiano
			`Hält einen [PROJECTILE]Strahl[/PROJECTILE] auf das Ziel gerichtet und verursacht alle 0,25 Sekunden Schaden, solange es sich in [RANGE]Reichweite[/RANGE] befindet.`, // alemán
			`対象に[PROJECTILE]光線[/PROJECTILE]を維持し、[RANGE]射程[/RANGE]内にいる間、0.25秒ごとにダメージを与える。`, // japonés
			`대상에게 [PROJECTILE]광선[/PROJECTILE]을 유지하며, 대상이 [RANGE]사거리[/RANGE] 안에 있는 동안 0.25초마다 피해를 줍니다.`, // coreano
			`持续对目标维持一道[PROJECTILE]光束[/PROJECTILE]，只要目标处于[Range]射程[/Range]内，就每0.25秒造成一次伤害。`, // chino
			`Utrzymuje [PROJECTILE]wiązkę[/PROJECTILE] na celu, zadając obrażenia co 0,25 sekundy, dopóki pozostaje on w [RANGE]zasięgu[/RANGE].` // polaco
		]
	},
	uTurn: {
		id: 'uTurn',
		name: [
		  	'U-turn', // inglés
			'Ida y Vuelta', // español
			'Demi-Tour', // francés
			'Ida e Volta', // portugués
			'Retromarcia', // italiano
			'Kehrtwende', // alemán
			'とんぼがえり', // japonés
			'유턴', // coreano
			'急速折返', // chino
			'U-turn' // polaco
		],
		description: [
			`Charges at an [ENEMY]enemy[/ENEMY] and increases its damage by 5%. If there is another [ENEMY]enemy[/ENEMY] nearby, it repeats the attack. It cannot target the same [ENEMY]enemy[/ENEMY] twice.`, // inglés
			`Se lanza contra un [ENEMY]enemigo[/ENEMY] y aumenta su daño un 5%. Si hay otro [ENEMY]enemigo[/ENEMY] cerca, repite el ataque. No puede atacar al mismo [ENEMY]enemigo[/ENEMY] dos veces.`, // español
			`Se précipite sur un [ENEMY]ennemi[/ENEMY] et augmente ses dégâts de 5 %. S'il y a un autre [ENEMY]ennemi[/ENEMY] à proximité, il répète l'attaque. Il ne peut pas cibler le même [ENEMY]ennemi[/ENEMY] deux fois.`, // francés
			`Avança contra um [ENEMY]inimigo[/ENEMY] e aumenta seu dano em 5%. Se houver outro [ENEMY]inimigo[/ENEMY] por perto, repete o ataque. Não pode atacar o mesmo [ENEMY]inimigo[/ENEMY] duas vezes.`, // portugués
			`Si lancia contro un [ENEMY]nemico[/ENEMY] e aumenta i suoi danni del 5%. Se c'è un altro [ENEMY]nemico[/ENEMY] nelle vicinanze, ripete l'attacco. Non può attaccare lo stesso [ENEMY]nemico[/ENEMY] due volte.`, // italiano
			`Stürmt auf einen [ENEMY]Gegner[/ENEMY] zu und erhöht seinen Schaden um 5 %. Wenn sich ein weiterer [ENEMY]Gegner[/ENEMY] in der Nähe befindet, wiederholt es den Angriff. Es kann denselben [ENEMY]Gegner[/ENEMY] nicht zweimal als Ziel wählen.`, // alemán
			`[ENEMY]敵[/ENEMY]に突進してダメージを2%増加させる。近くに別の[ENEMY]敵[/ENEMY]がいる場合、攻撃を繰り返す。同じ[ENEMY]敵[/ENEMY]を5回攻撃することはできない。`, // japonés
			`[ENEMY]적[/ENEMY]에게 돌진하여 피해량을 5% 증가시킵니다. 근처에 다른 [ENEMY]적[/ENEMY]이 있으면 공격을 반복합니다. 같은 [ENEMY]적[/ENEMY]을 두 번 공격할 수 없습니다.`, // coreano
			`冲向一名[ENEMY]敌人[/ENEMY]，并使其伤害提高5%。如果附近还有其他[ENEMY]敌人[/ENEMY]，则重复攻击。无法两次攻击同一个[ENEMY]敌人[/ENEMY]。`, // chino
			`Szarżuje na [ENEMY]wroga[/ENEMY] i zwiększa jego obrażenia o 5%. Jeśli w pobliżu znajduje się inny [ENEMY]wróg[/ENEMY], powtarza atak. Nie może zaatakować tego samego [ENEMY]wroga[/ENEMY] dwa razy.` // polaco
		]
	},
	fireLash: {
		id: 'fireLash',
		name: [
		  	'Fire Lash', // inglés
			'Látigo Ígneo', // español
			'Fouet de Feu', // francés
			'Chicote de Fogo', // portugués
			'Frusta di Fuoco', // italiano
			'Feuerpeitsche', // alemán
			'ほのおのムチ', // japonés
			'불꽃채찍', // coreano
			'火焰鞭', // chino
			'Fire Lash' // polaco
		],
		description: [
			`Attacks in a [SHAPE]semicircle[/SHAPE], striking multiple [ENEMY]enemies[/ENEMY] and inflicting [BURN]Burns[/BURN].`, // inglés
			`Ataca en un [SHAPE]semicírculo[/SHAPE], golpeando a varios [ENEMY]enemigos[/ENEMY] e infligiendo [BURN]quemaduras[/BURN].`, // español
			`Attaque dans un [SHAPE]demi-cercle[/SHAPE], touchant plusieurs [ENEMY]ennemis[/ENEMY] et infligeant des [BURN]Brûlures[/BURN].`, // francés
			`Ataca em um [SHAPE]semicírculo[/SHAPE], atingindo vários [ENEMY]inimigos[/ENEMY] e causando [BURN]Queimaduras[/BURN].`, // portugués
			`Attacca in un [SHAPE]semicerchio[/SHAPE], colpendo più [ENEMY]nemici[/ENEMY] e infliggendo [BURN]ustioni[/BURN].`, // italiano
			`Greift in einem [SHAPE]Halbkreis[/SHAPE] an, trifft mehrere [ENEMY]Gegner[/ENEMY] und verursacht [BURN]Verbrennungen[/BURN].`, // alemán
			`[SHAPE]半円[/SHAPE]状に攻撃し、複数の[ENEMY]敵[/ENEMY]に命中して[BURN]やけど[/BURN]を負わせる。`, // japonés
			`[SHAPE]반원[/SHAPE] 범위로 공격하여 여러 [ENEMY]적[/ENEMY]을 공격하고 [BURN]화상[/BURN]을 입힙니다.`, // coreano
			`以[SHAPE]半圆[/SHAPE]范围进行攻击，命中多个[ENEMY]敌人[/ENEMY]并造成[BURN]灼伤[/BURN]。`, // chino
			`Atakuje w [SHAPE]półkolu[/SHAPE], trafiając wielu [ENEMY]wrogów[/ENEMY] i zadając [BURN]oparzenia[/BURN].` // polaco
		]
	},
	bugBite: {
		id: 'bugBite',
		name: [
		  	'Bug Bite', // inglés
			'Picadura', // español
			'Piqûre', // francés
			'Picada', // portugués
			'Coleomorso', // italiano
			'Käferbiss', // alemán
			'むしくい', // japonés
			'벌레먹기', // coreano
			'虫咬', // chino
			'Bug Bite' // polaco
		],
		description: [
			`Activates the [ITEM]equipped Berry[/ITEM] after attacking.`, // inglés
			`Activa la [ITEM]Baya equipada[/ITEM] después de atacar.`, // español
			`Active la [ITEM]Baie tenue[/ITEM] après avoir attaqué.`, // francés
			`Ativa a [ITEM]Fruta equipada[/ITEM] após atacar.`, // portugués
			`Attiva la [ITEM]Bacca equipaggiata[/ITEM] dopo aver attaccato.`, // italiano
			`Aktiviert die [ITEM]getragene Beere[/ITEM] nach dem Angriff.`, // alemán
			`攻撃した後、[ITEM]持たせたきのみ[/ITEM]を発動する。`, // japonés
			`공격 후 [ITEM]지니고 있는 열매[/ITEM]를 발동합니다.`, // coreano
			`攻击后激活[ITEM]所携带的树果[/ITEM]。`, // chino
			`Aktywuje [ITEM]trzymaną Jagodę[/ITEM] po ataku.` // polaco
		]
	},
	waterSpout: {
		id: 'waterSpout',
		name: [
		  	'Water Spout', // inglés
			'Salpicar', // español
			'Giclédo', // francés
			'Jato d’Água', // portugués
			'Zampillo', // italiano
			'Fontränen', // alemán
			'しおふき', // japonés
			'해수스파우팅', // coreano
			'喷水', // chino
			'Water Spout' // polaco
		],
		description: [
			`Reduces damage dealt by 1% for every 1% of [HP]HP[/HP] the target is missing.`, // inglés
			`Reduce el daño infligido un 1% por cada 1% de [HP]salud[/HP] que le falte al objetivo.`, // español
			`Réduit les dégâts infligés de 1 % pour chaque 1 % de [HP]PV[/HP] manquants à la cible.`, // francés
			`Reduz o dano causado em 1% para cada 1% de [HP]HP[/HP] que faltar ao alvo.`, // portugués
			`Riduce i danni inflitti dell'1% per ogni 1% di [HP]PS[/HP] mancanti al bersaglio.`, // italiano
			`Reduziert den verursachten Schaden um 1 % für jedes fehlende 1 % der [HP]KP[/HP] des Ziels.`, // alemán
			`対象の[HP]HP[/HP]が1%減るごとに、与えるダメージが1%減少する。`, // japonés
			`대상의 [HP]HP[/HP]가 1% 감소할 때마다 주는 피해량이 1% 감소합니다.`, // coreano
			`目标每缺少1%的[HP]生命值[/HP]，造成的伤害就降低1%。`, // chino
			`Zmniejsza zadawane obrażenia o 1% za każdy brakujący 1% [HP]PŻ[/HP] celu.` // polaco
		]
	},
	iceBeam: {
		id: 'iceBeam',
		name: [
		 	'Ice Beam', // inglés
			'Rayo Hielo', // español
			'Laser Glace', // francés
			'Raio de Gelo', // portugués
			'Geloraggio', // italiano
			'Eisstrahl', // alemán
			'れいとうビーム', // japonés
			'냉동빔', // coreano
			'冰冻光束', // chino
			'Ice Beam' // polaco
		],
		description: [
			`Every 5th attack is a [PROJECTILE]piercing beam[/PROJECTILE] that [STUN]stuns[/STUN] [ENEMY]all enemies[/ENEMY] it hits for 2 seconds.`, // inglés
			`Cada 5.º ataque es un [PROJECTILE]rayo perforante[/PROJECTILE] que [STUN]aturde[/STUN] durante 2 segundos a todos los [ENEMY]enemigos[/ENEMY] que golpea.`, // español
			`Toutes les 5 attaques, un [PROJECTILE]rayon perforant[/PROJECTILE] est lancé et [STUN]étourdit[/STUN] pendant 2 secondes tous les [ENEMY]ennemis[/ENEMY] qu'il touche.`, // francés
			`A cada 5 ataques, um [PROJECTILE]raio perfurante[/PROJECTILE] é disparado e [STUN]atordoa[/STUN] por 2 segundos todos os [ENEMY]inimigos[/ENEMY] atingidos.`, // portugués
			`Ogni 5° attacco è un [PROJECTILE]raggio perforante[/PROJECTILE] che [STUN]stordisce[/STUN] per 2 secondi tutti i [ENEMY]nemici[/ENEMY] che colpisce.`, // italiano
			`Jeder 5. Angriff ist ein durchdringender [PROJECTILE]Strahl[/PROJECTILE], der alle [ENEMY]Gegner[/ENEMY], die er trifft, 2 Sekunden lang [STUN]betäubt[/STUN].`, // alemán
			`5回目の攻撃は貫通する[PROJECTILE]ビーム[/PROJECTILE]となり、命中したすべての[ENEMY]敵[/ENEMY]を2秒間[STUN]ひるませる[/STUN]。`, // japonés
			`5번째 공격마다 관통하는 [PROJECTILE]빔[/PROJECTILE]을 발사하여 적중한 모든 [ENEMY]적[/ENEMY]을 2초 동안 [STUN]기절[/STUN]시킵니다.`, // coreano
			`每第5次攻击会发射一道[PROJECTILE]穿透光束[/PROJECTILE]，使其命中的所有[ENEMY]敌人[/ENEMY]眩晕2秒。`, // chino
			`Co piąty atak jest przebijającym [PROJECTILE]promieniem[/PROJECTILE], który [STUN]ogłusza[/STUN] na 2 sekundy wszystkich trafionych [ENEMY]wrogów[/ENEMY].` // polaco
		]
	},
	icicleSpear: {
		id: 'icicleSpear',
		name: [
		 	'Icicle Spear', // inglés
			'Carámbano', // español
			'Stalactite', // francés
			'Lança de Gelo', // portugués
			'Gelolancia', // italiano
			'Eisspeer', // alemán
			'つららばり', // japonés
			'고드름침', // coreano
			'冰柱针', // chino
			'Icicle Spear' // polaco
		],
		description: [
			`Fires a burst of 2 to 5 [PROJECTILE]projectiles[/PROJECTILE], each with a 30% chance to [STUN]stun[/STUN] for 2 seconds. If the [ENEMY]enemy[/ENEMY] is already [STUN]stunned[/STUN], it deals a [CRITICAL]critical hit[/CRITICAL].`, // inglés
			`Dispara una ráfaga de 2 a 5 [PROJECTILE]proyectiles[/PROJECTILE], cada uno con un 30% de probabilidad de [STUN]aturdir[/STUN] durante 2 segundos. Si el [ENEMY]enemigo[/ENEMY] ya está [STUN]aturdido[/STUN], inflige un [CRITICAL]golpe crítico[/CRITICAL].`, // español
			`Tire une salve de 2 à 5 [PROJECTILE]projectiles[/PROJECTILE], chacun ayant 30 % de chances d'[STUN]étourdir[/STUN] pendant 2 secondes. Si l'[ENEMY]ennemi[/ENEMY] est déjà [STUN]étourdi[/STUN], il inflige un [CRITICAL]coup critique[/CRITICAL].`, // francés
			`Dispara uma rajada de 2 a 5 [PROJECTILE]projéteis[/PROJECTILE], cada um com 30% de chance de [STUN]atordoar[/STUN] durante 2 segundos. Se o [ENEMY]inimigo[/ENEMY] já estiver [STUN]atordoado[/STUN], causa um [CRITICAL]golpe crítico[/CRITICAL].`, // portugués
			`Spara una raffica da 2 a 5 [PROJECTILE]proiettili[/PROJECTILE], ciascuno con il 30% di probabilità di [STUN]stordire[/STUN] per 2 secondi. Se il [ENEMY]nemico[/ENEMY] è già [STUN]stordito[/STUN], infligge un [CRITICAL]colpo critico[/CRITICAL].`, // italiano
			`Feuert eine Salve aus 2 bis 5 [PROJECTILE]Projektilen[/PROJECTILE] ab, von denen jedes eine Chance von 30 % hat, das Ziel 2 Sekunden lang zu [STUN]betäuben[/STUN]. Ist der [ENEMY]Gegner[/ENEMY] bereits [STUN]betäubt[/STUN], verursacht der Angriff einen [CRITICAL]Volltreffer[/CRITICAL].`, // alemán
			`2～5発の[PROJECTILE]弾[/PROJECTILE]を連射し、それぞれが30%の確率で2秒間[STUN]まひ[/STUN]させる。[ENEMY]敵[/ENEMY]がすでに[STUN]まひ[/STUN]状態の場合、[CRITICAL]急所攻撃[/CRITICAL]になる。`, // japonés
			`2~5개의 [PROJECTILE]투사체[/PROJECTILE]를 연속으로 발사하며, 각 투사체는 30% 확률로 2초 동안 [STUN]기절[/STUN]시킨다. [ENEMY]적[/ENEMY]이 이미 [STUN]기절[/STUN] 상태라면 [CRITICAL]급소 공격[/CRITICAL]을 가한다.`, // coreano
			`连续发射2至5枚[PROJECTILE]投射物[/PROJECTILE]，每枚都有30%的概率使目标[STUN]眩晕[/STUN]2秒。如果[ENEMY]敌人[/ENEMY]已经处于[STUN]眩晕[/STUN]状态，则造成一次[CRITICAL]会心一击[/CRITICAL]。`, // chino
			`Wystrzeliwuje serię od 2 do 5 [PROJECTILE]pocisków[/PROJECTILE], z których każdy ma 30% szans na [STUN]ogłuszenie[/STUN] na 2 sekundy. Jeśli [ENEMY]wróg[/ENEMY] jest już [STUN]ogłuszony[/STUN], atak zadaje [CRITICAL]cios krytyczny[/CRITICAL].` // polaco
		]
	},
	twineedle: {
		id: 'twineedle',
		name: [
		  	'Twineedle', // inglés
			'Doble Ataque', // español
			'Double Dard', // francés
			'Dupla Picada', // portugués
			'Doppio Ago', // italiano
			'Duonadel', // alemán
			'ダブルニードル', // japonés
			'더블니들', // coreano
			'双针', // chino
			'Twineedle' // polaco
		],
		description: [
			`Fires a burst of 2 [PROJECTILE]projectiles[/PROJECTILE], each with a 50% chance to apply 1 stack of [POISON]poison[/POISON].`, // inglés
			`Dispara una ráfaga de 2 [PROJECTILE]proyectiles[/PROJECTILE], cada uno con un 50% de probabilidad de aplicar 1 acumulación de [POISON]veneno[/POISON].`, // español
			`Tire une salve de 2 [PROJECTILE]projectiles[/PROJECTILE], chacun ayant 50 % de chances d'appliquer 1 cumul de [POISON]poison[/POISON].`, // francés
			`Dispara uma rajada de 2 [PROJECTILE]projéteis[/PROJECTILE], cada um com 50% de chance de aplicar 1 acumulação de [POISON]veneno[/POISON].`, // portugués
			`Spara una raffica di 2 [PROJECTILE]proiettili[/PROJECTILE], ciascuno con il 50% di probabilità di applicare 1 accumulo di [POISON]veleno[/POISON].`, // italiano
			`Feuert eine Salve aus 2 [PROJECTILE]Projektilen[/PROJECTILE] ab, von denen jedes eine Chance von 50 % hat, 1 Stapel [POISON]Gift[/POISON] anzuwenden.`, // alemán
			`2発の[PROJECTILE]弾[/PROJECTILE]を連射し、それぞれが50%の確率で[POISON]どく[/POISON]を1段階付与する。`, // japonés
			`2개의 [PROJECTILE]투사체[/PROJECTILE]를 연속으로 발사하며, 각 투사체는 50% 확률로 [POISON]독[/POISON]을 1중첩 부여한다.`, // coreano
			`连续发射2枚[PROJECTILE]投射物[/PROJECTILE]，每枚都有50%的概率施加1层[POISON]中毒[/POISON]效果。`, // chino
			`Wystrzeliwuje serię 2 [PROJECTILE]pocisków[/PROJECTILE], z których każdy ma 50% szans na nałożenie 1 ładunku [POISON]trucizny[/POISON].` // polaco
		]
	},
	twineedleMega: {
		id: 'twineedleMega',
		name: [
		  	'Twineedle', // inglés
			'Doble Ataque', // español
			'Double Dard', // francés
			'Dupla Picada', // portugués
			'Doppio Ago', // italiano
			'Duonadel', // alemán
			'ダブルニードル', // japonés
			'더블니들', // coreano
			'双针', // chino
			'Twineedle' // polaco
		],
		description: [
			`Fires a burst of 3 [PROJECTILE]projectiles[/PROJECTILE], each with a 33% chance to apply 1 stack of [POISON]poison[/POISON].`, // inglés
			`Dispara una ráfaga de 3 [PROJECTILE]proyectiles[/PROJECTILE], cada uno con un 33% de probabilidad de aplicar 1 acumulación de [POISON]veneno[/POISON].`, // español
			`Tire une salve de 3 [PROJECTILE]projectiles[/PROJECTILE], chacun ayant 33 % de chances d'appliquer 1 cumul de [POISON]poison[/POISON].`, // francés
			`Dispara uma rajada de 3 [PROJECTILE]projéteis[/PROJECTILE], cada um com 33% de chance de aplicar 1 acumulação de [POISON]veneno[/POISON].`, // portugués
			`Spara una raffica di 3 [PROJECTILE]proiettili[/PROJECTILE], ciascuno con il 33% di probabilità di applicare 1 accumulo di [POISON]veleno[/POISON].`, // italiano
			`Feuert eine Salve aus 3 [PROJECTILE]Projektilen[/PROJECTILE] ab, von denen jedes eine Chance von 33 % hat, 1 Stapel [POISON]Gift[/POISON] anzuwenden.`, // alemán
			`3発の[PROJECTILE]弾[/PROJECTILE]を連射し、それぞれが33%の確率で[POISON]どく[/POISON]を1段階付与する。`, // japonés
			`3개의 [PROJECTILE]투사체[/PROJECTILE]를 연속으로 발사하며, 각 투사체는 33% 확률로 [POISON]독[/POISON]을 1중첩 부여한다.`, // coreano
			`连续发射3枚[PROJECTILE]投射物[/PROJECTILE]，每枚都有33%的概率施加1层[POISON]中毒[/POISON]效果。`, // chino
			`Wystrzeliwuje serię 3 [PROJECTILE]pocisków[/PROJECTILE], z których każdy ma 33% szans na nałożenie 1 ładunku [POISON]trucizny[/POISON].` // polaco
		]
	},
	focusEnergy: {
		id: 'focusEnergy',
		name: [
		  	'Focus Energy', // inglés
			'Foco Energía', // español
			'Puissance', // francés
			'Foco de Energia', // portugués
			'Focalenergia', // italiano
			'Energiefokus', // alemán
			'きあいだめ', // japonés
			'기충전', // coreano
			'聚气', // chino
			'Focus Energy' // polaco
		],
		description: [
			`Each attack increases the [CRITICAL]critical hit chance[/CRITICAL] by 5%.`, // inglés
			`Cada ataque aumenta la [CRITICAL]probabilidad de crítico[/CRITICAL] un 5%.`, // español
			`Chaque attaque augmente les [CRITICAL]chances de coup critique[/CRITICAL] de 5 %.`, // francés
			`Cada ataque aumenta a [CRITICAL]chance de crítico[/CRITICAL] em 5%.`, // portugués
			`Ogni attacco aumenta la [CRITICAL]probabilità di critico[/CRITICAL] del 5%.`, // italiano
			`Jeder Angriff erhöht die [CRITICAL]Volltrefferchance[/CRITICAL] um 5 %.`, // alemán
			`攻撃するたびに[CRITICAL]急所率[/CRITICAL]が5%上昇する。`, // japonés
			`공격할 때마다 [CRITICAL]급소 확률[/CRITICAL]이 5% 증가한다.`, // coreano
			`每次攻击都会使[CRITICAL]会心率[/CRITICAL]提高5%。`, // chino
			`Każdy atak zwiększa [CRITICAL]szansę na cios krytyczny[/CRITICAL] o 5%.` // polaco
		]
	},
	rest: {
		id: 'rest',
		name: [
		  	'Rest', // inglés
			'Descanso', // español
			'Repos', // francés
			'Descanso', // portugués
			'Riposo', // italiano
			'Erholung', // alemán
			'ねむる', // japonés
			'잠자기', // coreano
			'睡觉', // chino
			'Rest' // polaco
		],
		description: [
			`Any [POKEMON]Pokémon[/POKEMON] can be placed on top of this [POKEMON]Pokémon[/POKEMON].`, // inglés
			`Se puede colocar cualquier [POKEMON]Pokémon[/POKEMON] encima de este [POKEMON]Pokémon[/POKEMON].`, // español
			`N'importe quel [POKEMON]Pokémon[/POKEMON] peut être placé au-dessus de ce [POKEMON]Pokémon[/POKEMON].`, // francés
			`Qualquer [POKEMON]Pokémon[/POKEMON] pode ser colocado em cima deste [POKEMON]Pokémon[/POKEMON].`, // portugués
			`Qualsiasi [POKEMON]Pokémon[/POKEMON] può essere posizionato sopra questo [POKEMON]Pokémon[/POKEMON].`, // italiano
			`Jedes [POKEMON]Pokémon[/POKEMON] kann auf diesem [POKEMON]Pokémon[/POKEMON] platziert werden.`, // alemán
			`この[POKEMON]ポケモン[/POKEMON]の上には、どの[POKEMON]ポケモン[/POKEMON]でも配置できる。`, // japonés
			`이 [POKEMON]포켓몬[/POKEMON] 위에는 어떤 [POKEMON]포켓몬[/POKEMON]이든 배치할 수 있다.`, // coreano
			`任何[POKEMON]宝可梦[/POKEMON]都可以放置在这只[POKEMON]宝可梦[/POKEMON]上方。`, // chino
			`Dowolnego [POKEMON]Pokémona[/POKEMON] można umieścić na tym [POKEMON]Pokémonie[/POKEMON].` // polaco
		]
	},
	drumBeating: {
		id: 'drumBeating',
		name: [
		  	'Drum Beating', // inglés
			'Batería Asalto', // español
			'Tambour Battant', // francés
			'Batida de Tambor', // portugués
			'Tamburattacco', // italiano
			'Trommelschläge', // alemán
			'ドラムビート', // japonés
			'드럼어택', // coreano
			'鼓击', // chino
			'Bicie w Bęben' // polaco
		],
		description: [
			`Fires 1 [PROJECTILE]wave[/PROJECTILE] that [SLOW]slows[/SLOW] targets for 2 seconds.`, // inglés
			`Dispara 1 [PROJECTILE]onda[/PROJECTILE] que [SLOW]ralentiza[/SLOW] a los objetivos durante 2 segundos.`, // español
			`Lance 1 [PROJECTILE]onde[/PROJECTILE] qui [SLOW]ralentit[/SLOW] les cibles pendant 2 secondes.`, // francés
			`Dispara 1 [PROJECTILE]onda[/PROJECTILE] que [SLOW]abranda[/SLOW] os alvos durante 2 segundos.`, // portugués
			`Spara 1 [PROJECTILE]onda[/PROJECTILE] che [SLOW]rallenta[/SLOW] i bersagli per 2 secondi.`, // italiano
			`Feuert 1 [PROJECTILE]Welle[/PROJECTILE] ab, die Ziele 2 Sekunden lang [SLOW]verlangsamt[/SLOW].`, // alemán
			`[SLOW]減速[/SLOW]させる[PROJECTILE]波[/PROJECTILE]を1発放ち、対象を2秒間[SLOW]遅くする[/SLOW]。`, // japonés
			`대상을 2초 동안 [SLOW]느려지게[/SLOW] 하는 [PROJECTILE]파동[/PROJECTILE]을 1회 발사한다.`, // coreano
			`发射1道[PROJECTILE]波浪[/PROJECTILE]，使目标[SLOW]减速[/SLOW]2秒。`, // chino
			`Wystrzeliwuje 1 [PROJECTILE]falę[/PROJECTILE], która [SLOW]spowalnia[/SLOW] cele na 2 sekundy.` // polaco
		]
	},
	sandForce: {
		id: 'sandForce',
		name: [
		  	'Sand Force', // inglés
			'Ímpetu Arena', // español
			'Force Sable', // francés
			'Força Arenosa', // portugués
			'Silicoforza', // italiano
			'Sandscharrer', // alemán
			'すなのちから', // japonés
			'모래의힘', // coreano
			'沙之力', // chino
			'Piaskowa Siła' // polaco
		],
		description: [
			`Increases [POWER]power[/POWER] by 50% in [SANDSTORM]sandstorm[/SANDSTORM].`, // inglés
			`Aumenta el [POWER]poder[/POWER] un 50% bajo [SANDSTORM]tormenta de arena[/SANDSTORM].`, // español
			`Augmente la [POWER]puissance[/POWER] de 50 % sous [SANDSTORM]tempête de sable[/SANDSTORM].`, // francés
			`Aumenta o [POWER]poder[/POWER] em 50% sob [SANDSTORM]tempestade de areia[/SANDSTORM].`, // portugués
			`Aumenta la [POWER]potenza[/POWER] del 50% durante la [SANDSTORM]tempesta di sabbia[/SANDSTORM].`, // italiano
			`Erhöht die [POWER]Kraft[/POWER] bei [SANDSTORM]Sandsturm[/SANDSTORM] um 50 %.`, // alemán
			`[SANDSTORM]すなあらし[/SANDSTORM]のとき、[POWER]威力[/POWER]が50%上がる。`, // japonés
			`[SANDSTORM]모래바람[/SANDSTORM]일 때 [POWER]위력[/POWER]이 50% 증가합니다.`, // coreano
			`在[SANDSTORM]沙暴[/SANDSTORM]天气下，[POWER]威力[/POWER]提高50%。`, // chino
			`Zwiększa [POWER]moc[/POWER] o 50% podczas [SANDSTORM]burzy piaskowej[/SANDSTORM].` // polaco
		]
	},
	sandVeil: {
		id: 'sandVeil',
		name: [
		  	'Sand Veil', // inglés
			'Velo Arena', // español
			'Voile Sable', // francés
			'Véu de Areia', // portugués
			'Velopolvere', // italiano
			'Sandschleier', // alemán
			'すながくれ', // japonés
			'모래숨기', // coreano
			'沙隐', // chino
			'Sand Veil' // polaco
		],
		description: [
			`Increases [STATS]all stats[/STATS] by 15% in [SANDSTORM]sandstorm[/SANDSTORM].`, // inglés
			`Aumenta todas las [STATS]estadísticas[/STATS] un 15% bajo [SANDSTORM]tormenta de arena[/SANDSTORM].`, // español
			`Augmente toutes les [STATS]statistiques[/STATS] de 15 % sous [SANDSTORM]tempête de sable[/SANDSTORM].`, // francés
			`Aumenta todas as [STATS]estatísticas[/STATS] em 15% sob [SANDSTORM]tempestade de areia[/SANDSTORM].`, // portugués
			`Aumenta tutte le [STATS]statistiche[/STATS] del 15% durante la [SANDSTORM]tempesta di sabbia[/SANDSTORM].`, // italiano
			`Erhöht alle [STATS]Werte[/STATS] bei [SANDSTORM]Sandsturm[/SANDSTORM] um 15 %.`, // alemán
			`[SANDSTORM]すなあらし[/SANDSTORM]のとき、[STATS]すべてのステータス[/STATS]が15%上がる。`, // japonés
			`[SANDSTORM]모래바람[/SANDSTORM]일 때 모든 [STATS]능력치[/STATS]가 15% 증가합니다.`, // coreano
			`在[SANDSTORM]沙暴[/SANDSTORM]天气下，所有[STATS]属性[/STATS]提高15%。`, // chino
			`Zwiększa wszystkie [STATS]statystyki[/STATS] o 15% podczas [SANDSTORM]burzy piaskowej[/SANDSTORM].` // polaco
		]
	},
	seedFlare: {
		id: 'seedFlare',
		name: [
		  	'Seed Flare', // inglés
			'Fulgor Semilla', // español
			'Fulmigraine', // francés
			'Tempestade de Sementes', // portugués
			'Verdebufera', // italiano
			'Kraftreserve', // alemán
			'シードフレア', // japonés
			'시드플레어', // coreano
			'种子闪光', // chino
			'Seed Flare' // polaco
		],
		description: [
			`[PROJECTILE]Projectiles[/PROJECTILE] have a 2% chance to restore 1 [HEART]heart[/HEART] (3 uses per wave). Fires an additional [PROJECTILE]projectile[/PROJECTILE] for each [HEART]heart[/HEART] restored this wave (max 2).`, // inglés
			`Los [PROJECTILE]proyectiles[/PROJECTILE] tienen un 2% de probabilidad de recuperar 1 [HEART]corazón[/HEART] (3 usos por oleada). Dispara un [PROJECTILE]proyectil[/PROJECTILE] adicional por cada [HEART]corazón[/HEART] recuperado durante esta oleada (máximo 2).`, // español
			`Les [PROJECTILE]projectiles[/PROJECTILE] ont 2 % de chances de restaurer 1 [HEART]cœur[/HEART] (3 utilisations par vague). Tire un [PROJECTILE]projectile[/PROJECTILE] supplémentaire pour chaque [HEART]cœur[/HEART] récupéré pendant cette vague (maximum 2).`, // francés
			`Os [PROJECTILE]projéteis[/PROJECTILE] têm 2% de probabilidade de restaurar 1 [HEART]coração[/HEART] (3 utilizações por vaga). Dispara um [PROJECTILE]projétil[/PROJECTILE] adicional por cada [HEART]coração[/HEART] recuperado durante esta vaga (máximo de 2).`, // portugués
			`I [PROJECTILE]proiettili[/PROJECTILE] hanno il 2% di probabilità di ripristinare 1 [HEART]cuore[/HEART] (3 utilizzi per ondata). Spara un [PROJECTILE]proiettile[/PROJECTILE] aggiuntivo per ogni [HEART]cuore[/HEART] recuperato durante questa ondata (massimo 2).`, // italiano
			`[PROJECTILE]Projektile[/PROJECTILE] haben eine Chance von 2 %, 1 [HEART]Herz[/HEART] wiederherzustellen (3 Anwendungen pro Welle). Feuert für jedes in dieser Welle wiederhergestellte [HEART]Herz[/HEART] ein zusätzliches [PROJECTILE]Projektil[/PROJECTILE] ab (maximal 2).`, // alemán
			`[PROJECTILE]弾[/PROJECTILE]は2%の確率で[HEART]ハート[/HEART]を1つ回復する（1ウェーブにつき3回まで）。このウェーブ中に回復した[HEART]ハート[/HEART]1つにつき、[PROJECTILE]弾[/PROJECTILE]を追加で1発発射する（最大2発）。`, // japonés
			`[PROJECTILE]투사체[/PROJECTILE]는 2% 확률로 [HEART]하트[/HEART] 1개를 회복한다(웨이브당 3회 사용 가능). 이번 웨이브에서 회복한 [HEART]하트[/HEART] 하나당 [PROJECTILE]투사체[/PROJECTILE]를 1개 추가로 발사한다(최대 2개).`, // coreano
			`[PROJECTILE]投射物[/PROJECTILE]有2%的概率恢复1颗[HEART]心心[/HEART]（每波可触发3次）。本波每恢复1颗[HEART]心心[/HEART]，就额外发射1枚[PROJECTILE]投射物[/PROJECTILE]（最多2枚）。`, // chino
			`[PROJECTILE]Pociski[/PROJECTILE] mają 2% szans na odzyskanie 1 [HEART]serca[/HEART] (3 użycia na falę). Za każde [HEART]serce[/HEART] odzyskane podczas tej fali wystrzeliwuje dodatkowy [PROJECTILE]pocisk[/PROJECTILE] (maksymalnie 2).` // polaco
		]
	},
	timeWarp: {
		id: 'timeWarp',
		name: [
		  	'Time Warp', // inglés
			'Trampa Temporal', // español
			'Distorsion Temporelle', // francés
			'Laço Temporal', // portugués
			'Fascia Temporale', // italiano
			'Zeitschleife', // alemán
			'タイムラップ', // japonés
			'타임랩', // coreano
			'时间缠绕', // chino 
			'Time Wrap' // polaco
		],
		description: [
			`Can move and modify its [ITEM]held item[/ITEM] while the game is paused, as long as it does not interact with other [POKEMON]Pokémon[/POKEMON].`, // inglés
			`Puede moverse y modificar su [ITEM]objeto equipado[/ITEM] mientras el juego está en pausa, siempre que no interactúe con otros [POKEMON]Pokémon[/POKEMON].`, // español
			`Peut être déplacé et modifier son [ITEM]objet tenu[/ITEM] pendant que le jeu est en pause, à condition de ne pas interagir avec d'autres [POKEMON]Pokémon[/POKEMON].`, // francés
			`Pode mover-se e alterar o seu [ITEM]item equipado[/ITEM] enquanto o jogo está em pausa, desde que não interaja com outros [POKEMON]Pokémon[/POKEMON].`, // portugués
			`Può essere spostato e modificare il proprio [ITEM]strumento assegnato[/ITEM] mentre il gioco è in pausa, purché non interagisca con altri [POKEMON]Pokémon[/POKEMON].`, // italiano
			`Kann während der Spielpause bewegt werden und sein [ITEM]getragenes Item[/ITEM] ändern, solange es nicht mit anderen [POKEMON]Pokémon[/POKEMON] interagiert.`, // alemán
			`ゲームの一時停止中に移動したり、[ITEM]持ち物[/ITEM]を変更したりできる。ただし、他の[POKEMON]ポケモン[/POKEMON]と相互作用していない場合に限る。`, // japonés
			`게임이 일시 정지된 동안 이동하거나 [ITEM]지닌 아이템[/ITEM]을 변경할 수 있다. 단, 다른 [POKEMON]포켓몬[/POKEMON]과 상호작용하지 않아야 한다.`, // coreano
			`游戏暂停时，可以移动并更换其[ITEM]携带道具[/ITEM]，但不能与其他[POKEMON]宝可梦[/POKEMON]互动。`, // chino
			`Można go przemieszczać i zmieniać jego [ITEM]trzymany przedmiot[/ITEM] podczas pauzy w grze, o ile nie wchodzi w interakcję z innymi [POKEMON]Pokémonami[/POKEMON].` // polaco
		]
	},
	moongeistBeam: {
		id: 'moongeistBeam',
		name: [
		  	'Moongeist Beam', // inglés
			'Rayo Umbrío', // español
			'Rayon Spectral', // francés
			'Feixe Espectral', // portugués
			'Raggio d’Ombra', // italiano
			'Luxtraum', // alemán
			'シャドーレイ', // japonés
			'섀도레이', // coreano
			'暗影之光', // chino
			'Moongeist Beam' // polaco
		],
		description: [
			`Fires a [PROJECTILE]beam[/PROJECTILE] that follows the target for 4 seconds and damages all targets it passes through. Deals triple damage to [ENEMY]invisible enemies[/ENEMY].`, // inglés
			`Dispara un [PROJECTILE]rayo[/PROJECTILE] que sigue al objetivo durante 4 segundos e inflige daño a todos los objetivos que atraviesa. Inflige el triple de daño a los [ENEMY]enemigos invisibles[/ENEMY].`, // español
			`Tire un [PROJECTILE]rayon[/PROJECTILE] qui suit la cible pendant 4 secondes et inflige des dégâts à toutes les cibles qu'il traverse. Inflige trois fois plus de dégâts aux [ENEMY]ennemis invisibles[/ENEMY].`, // francés
			`Dispara um [PROJECTILE]raio[/PROJECTILE] que segue o alvo durante 4 segundos e causa dano a todos os alvos por onde passa. Causa o triplo do dano a [ENEMY]inimigos invisíveis[/ENEMY].`, // portugués
			`Spara un [PROJECTILE]raggio[/PROJECTILE] che segue il bersaglio per 4 secondi e infligge danni a tutti i bersagli che attraversa. Infligge il triplo dei danni ai [ENEMY]nemici invisibili[/ENEMY].`, // italiano
			`Feuert einen [PROJECTILE]Strahl[/PROJECTILE] ab, der dem Ziel 4 Sekunden lang folgt und allen Zielen, die er durchquert, Schaden zufügt. Verursacht dreifachen Schaden bei [ENEMY]unsichtbaren Gegnern[/ENEMY].`, // alemán
			`対象を4秒間追尾する[PROJECTILE]ビーム[/PROJECTILE]を発射し、通過したすべての対象にダメージを与える。[ENEMY]見えない敵[/ENEMY]には3倍のダメージを与える。`, // japonés
			`4초 동안 대상을 따라가는 [PROJECTILE]광선[/PROJECTILE]을 발사해 지나가는 모든 대상에게 피해를 준다. [ENEMY]투명한 적[/ENEMY]에게는 세 배의 피해를 준다.`, // coreano
			`发射一道持续追踪目标4秒的[PROJECTILE]光束[/PROJECTILE]，对其穿过的所有目标造成伤害。对[ENEMY]隐形敌人[/ENEMY]造成三倍伤害。`, // chino
			`Wystrzeliwuje [PROJECTILE]promień[/PROJECTILE], który podąża za celem przez 4 sekundy i zadaje obrażenia wszystkim celom, przez które przechodzi. Zadaje potrójne obrażenia [ENEMY]niewidzialnym wrogom[/ENEMY].` // polaco
		]
	},
	discharge: {
		id: 'discharge',
		name: [
		  	'Discharge', // inglés
			'Chispazo', // español
			'Fatal-Foudre', // francés
			'Disparo', // portugués
			'Scarica', // italiano
			'Entladung', // alemán
			'ほうでん', // japonés
			'방전', // coreano
			'放电', // chino
			'Discharge' // polaco
		],
		description: [
			`[ENEMY]Enemies[/ENEMY] that remain in [RANGE]range[/RANGE] for 3 seconds are [STUN]stunned[/STUN] for 2 seconds, once per [ENEMY]enemy[/ENEMY].`, // inglés
			`Los [ENEMY]enemigos[/ENEMY] que permanezcan en el [RANGE]alcance[/RANGE] durante 3 segundos quedan [STUN]aturdidos[/STUN] durante 2 segundos. Solo se activa una vez por [ENEMY]enemigo[/ENEMY].`, // español
			`Les [ENEMY]ennemis[/ENEMY] qui restent à [RANGE]portée[/RANGE] pendant 3 secondes sont [STUN]étourdis[/STUN] pendant 2 seconde. Cet effet ne s'active qu'une fois par [ENEMY]ennemi[/ENEMY].`, // francés
			`Os [ENEMY]inimigos[/ENEMY] que permanecerem ao [RANGE]alcance[/RANGE] durante 3 segundos ficam [STUN]atordoados[/STUN] durante 2 segundos. Só é ativado uma vez por [ENEMY]inimigo[/ENEMY].`, // portugués
			`I [ENEMY]nemici[/ENEMY] che rimangono nel [RANGE]raggio d'azione[/RANGE] per 3 secondi vengono [STUN]storditi[/STUN] per 2 secondi. Si attiva una sola volta per [ENEMY]nemico[/ENEMY].`, // italiano
			`[ENEMY]Gegner[/ENEMY], die 3 Sekunden lang in [RANGE]Reichweite[/RANGE] bleiben, werden 2 Sekunden lang [STUN]betäubt[/STUN]. Wird nur einmal pro [ENEMY]Gegner[/ENEMY] ausgelöst.`, // alemán
			`[RANGE]射程[/RANGE]内に3秒間とどまった[ENEMY]敵[/ENEMY]を2秒間[STUN]ひるみ[/STUN]状態にする。この効果は[ENEMY]敵[/ENEMY]1体につき1回のみ発動する。`, // japonés
			`[RANGE]사거리[/RANGE] 안에 3초 동안 머무른 [ENEMY]적[/ENEMY]을 2초 동안 [STUN]기절[/STUN]시킨다. [ENEMY]적[/ENEMY] 한 마리당 한 번만 발동한다.`, // coreano
			`在[RANGE]射程[/RANGE]内停留3秒的[ENEMY]敌人[/ENEMY]会被[STUN]眩晕[/STUN]2秒。每个[ENEMY]敌人[/ENEMY]只能触发一次。`, // chino
			`[ENEMY]Wrogowie[/ENEMY], którzy pozostają w [RANGE]zasięgu[/RANGE] przez 3 sekundy, zostają [STUN]ogłuszeni[/STUN] na 2 sekundy. Efekt aktywuje się tylko raz na [ENEMY]wroga[/ENEMY].` // polaco
		]
	},
	flameBody: {
		id: 'flameBody',
		name: [
		  	'Flame Body', // inglés
			'Cuerpo Llama', // español
			'Corps Ardent', // francés
			'Corpo Flamejante', // portugués
			'Corpodifuoco', // italiano
			'Flammkörper', // alemán
			'ほのおのからだ', // japonés
			'불꽃몸', // coreano
			'火焰之躯', // chino
			'Ciało Ognia' // polaco
		],
		description: [
			`[BURN]Burns[/BURN] all [ENEMY]enemies[/ENEMY] in [RANGE]range[/RANGE]. [BURN]Burned[/BURN] [ENEMY]enemies[/ENEMY] in [RANGE]range[/RANGE] cannot receive [HP]healing[/HP] from any source.`, // inglés
			`[BURN]Quema[/BURN] a todos los [ENEMY]enemigos[/ENEMY] dentro del [RANGE]alcance[/RANGE]. Los [ENEMY]enemigos[/ENEMY] [BURN]quemados[/BURN] dentro del [RANGE]alcance[/RANGE] no pueden recibir [HP]curación[/HP] de ninguna fuente.`, // español
			`[BURN]Brûle[/BURN] tous les [ENEMY]ennemis[/ENEMY] à [RANGE]portée[/RANGE]. Les [ENEMY]ennemis[/ENEMY] [BURN]brûlés[/BURN] à [RANGE]portée[/RANGE] ne peuvent recevoir aucun [HP]soin[/HP], quelle qu'en soit la source.`, // francés
			`[BURN]Queima[/BURN] todos os [ENEMY]inimigos[/ENEMY] ao [RANGE]alcance[/RANGE]. Os [ENEMY]inimigos[/ENEMY] [BURN]queimados[/BURN] ao [RANGE]alcance[/RANGE] não podem receber [HP]cura[/HP] de nenhuma fonte.`, // portugués
			`[BURN]Scotta[/BURN] tutti i [ENEMY]nemici[/ENEMY] nel [RANGE]raggio d'azione[/RANGE]. I [ENEMY]nemici[/ENEMY] [BURN]scottati[/BURN] nel [RANGE]raggio d'azione[/RANGE] non possono ricevere [HP]cure[/HP] da nessuna fonte.`, // italiano
			`[BURN]Verbrennt[/BURN] alle [ENEMY]Gegner[/ENEMY] in [RANGE]Reichweite[/RANGE]. [BURN]Verbrannte[/BURN] [ENEMY]Gegner[/ENEMY] in [RANGE]Reichweite[/RANGE] können aus keiner Quelle [HP]geheilt[/HP] werden.`, // alemán
			`[RANGE]射程[/RANGE]内のすべての[ENEMY]敵[/ENEMY]を[BURN]やけど状態にする[/BURN]。[RANGE]射程[/RANGE]内の[BURN]やけど状態の[/BURN][ENEMY]敵[/ENEMY]は、いかなる手段でも[HP]回復[/HP]できなくなる。`, // japonés
			`사거리 내 모든 [ENEMY]적[/ENEMY]에게 [BURN]화상[/BURN]을 입힌다. 사거리 내 [BURN]화상[/BURN] 상태인 [ENEMY]적[/ENEMY]은 어떤 수단으로도 [HP]회복[/HP]할 수 없다.`, // coreano
			`使[RANGE]射程[/RANGE]内的所有[ENEMY]敌人[/ENEMY]陷入[BURN]灼伤[/BURN]状态。处于[RANGE]射程[/RANGE]内的[BURN]灼伤[/BURN][ENEMY]敌人[/ENEMY]无法通过任何方式恢复[HP]生命值[/HP]。`, // chino
			`[BURN]Podpala[/BURN] wszystkich [ENEMY]wrogów[/ENEMY] w [RANGE]zasięgu[/RANGE]. [BURN]Podpaleni[/BURN] [ENEMY]wrogowie[/ENEMY] w [RANGE]zasięgu[/RANGE] nie mogą otrzymywać [HP]leczenia[/HP] z żadnego źródła.` // polaco
		]
	},
	blizzard: {
		id: 'blizzard',
		name: [
		  	'Blizzard', // inglés
			'Ventisca', // español
			'Blizzard', // francés
			'Nevasca', // portugués
			'Geloraggio', // italiano
			'Blizzard', // alemán
			'ふぶき', // japonés
			'눈보라', // coreano
			'暴风雪', // chino
			'Blizzard' // polaco
		],
		description: [
			`[ENEMY]Enemies[/ENEMY] in [RANGE]range[/RANGE] have their [SPEED]speed[/SPEED] reduced by 20%.`, // inglés
			`Los [ENEMY]enemigos[/ENEMY] dentro del [RANGE]alcance[/RANGE] ven reducida su [SPEED]velocidad[/SPEED] un 20%.`, // español
			`La [SPEED]vitesse[/SPEED] des [ENEMY]ennemis[/ENEMY] à [RANGE]portée[/RANGE] est réduite de 20 %.`, // francés
			`A [SPEED]velocidade[/SPEED] dos [ENEMY]inimigos[/ENEMY] ao [RANGE]alcance[/RANGE] é reduzida em 20%.`, // portugués
			`La [SPEED]velocità[/SPEED] dei [ENEMY]nemici[/ENEMY] nel [RANGE]raggio d'azione[/RANGE] è ridotta del 20%.`, // italiano
			`Die [SPEED]Geschwindigkeit[/SPEED] der [ENEMY]Gegner[/ENEMY] in [RANGE]Reichweite[/RANGE] wird um 20 % verringert.`, // alemán
			`[RANGE]射程[/RANGE]内の[ENEMY]敵[/ENEMY]の[SPEED]速度[/SPEED]が20%低下する。`, // japonés
			`[RANGE]사거리[/RANGE] 내 [ENEMY]적[/ENEMY]의 [SPEED]속도[/SPEED]가 20% 감소한다.`, // coreano
			`[RANGE]射程[/RANGE]内的[ENEMY]敌人[/ENEMY]的[SPEED]速度[/SPEED]降低20%。`, // chino
			`[RANGE]Zasięg[/RANGE] działania zmniejsza [SPEED]prędkość[/SPEED] [ENEMY]wrogów[/ENEMY] o 20%.` // polaco
		]
	},
	sturdy: {
		id: 'sturdy',
		name: [
		  	"Sturdy",
		  	"Robustez",
		  	"Fermeté",
		  	"Robustez",
		  	"Vigore",
		  	"Robustheit",
		  	"がんじょう",
		  	"옹골참",
		  	"結實",
		  	"Wytrzymałość"
		],
		description: [
			`The first time you take damage each wave, reduce [HEART]hearts[/HEART] lost by 1.`, // inglés
			`La primera vez que recibas daño en cada oleada, reduce en 1 los [HEART]corazones[/HEART] perdidos.`, // español
			`La première fois que vous subissez des dégâts à chaque vague, réduisez de 1 le nombre de [HEART]cœurs[/HEART] perdus.`, // francés
			`Na primeira vez que sofreres dano em cada vaga, reduz em 1 o número de [HEART]corações[/HEART] perdidos.`, // portugués
			`La prima volta che subisci danni in ogni ondata, riduci di 1 il numero di [HEART]cuori[/HEART] persi.`, // italiano
			`Beim ersten erlittenen Schaden jeder Welle wird die Anzahl der verlorenen [HEART]Herzen[/HEART] um 1 reduziert.`, // alemán
			`各ウェーブで初めてダメージを受けたとき、失う[HEART]ハート[/HEART]の数が1減少する。`, // japonés
			`각 웨이브에서 처음으로 피해를 받으면 잃는 [HEART]하트[/HEART] 수가 1 감소한다.`, // coreano
			`每波首次受到伤害时，失去的[HEART]心心[/HEART]数量减少1。`, // chino
			`Przy pierwszym otrzymaniu obrażeń w każdej fali liczba utraconych [HEART]serc[/HEART] zmniejsza się o 1.` // polaco
		]
	},
	iceBody: {
		id: 'iceBody',
		name: [
		  	"Ice Body",
		  	"Cuerpo Gélido",
		  	"Corps Gel",
		  	"Corpo Gelado",
		  	"Corpogelo",
		  	"Eishaut",
		  	"アイスボディ",
		  	"아이스바디",
		  	"冰凍之軀",
		  	"Lodowe Ciało"
		],
		description: [
			`Each wave, the first time a [HEART]heart[/HEART] is lost, double the effects of [HAIL]Hail[/HAIL].`, // inglés
			`En cada oleada, la primera vez que se pierde un [HEART]corazón[/HEART], se duplican los efectos de [HAIL]Granizo[/HAIL].`, // español
			`À chaque vague, la première fois qu'un [HEART]cœur[/HEART] est perdu, les effets de la [HAIL]Grêle[/HAIL] sont doublés.`, // francés
			`A cada vaga, na primeira vez que um [HEART]coração[/HEART] é perdido, os efeitos do [HAIL]Granizo[/HAIL] são duplicados.`, // portugués
			`A ogni ondata, la prima volta che si perde un [HEART]cuore[/HEART], gli effetti di [HAIL]Grandine[/HAIL] raddoppiano.`, // italiano
			`Bei jeder Welle werden die Effekte von [HAIL]Hagel[/HAIL] verdoppelt, wenn zum ersten Mal ein [HEART]Herz[/HEART] verloren geht.`, // alemán
			`各ウェーブで初めて[HEART]ハート[/HEART]を失ったとき、[HAIL]あられ[/HAIL]の効果が2倍になる。`, // japonés
			`웨이브마다 처음으로 [HEART]하트[/HEART]를 잃으면 [HAIL]싸라기눈[/HAIL]의 효과가 두 배가 된다.`, // coreano
			`每波中首次失去一颗[HEART]心心[/HEART]时，[HAIL]冰雹[/HAIL]的效果翻倍。`, // chino
			`Podczas każdej fali, gdy po raz pierwszy zostanie utracone [HEART]serce[/HEART], efekty [HAIL]Gradu[/HAIL] zostają podwojone.` // polaco
		]
	},
	slowStart: {
		id: 'slowStart',
		name: [
		  	"Slow Start",
		  	"Inicio lento",
		  	"Début Calme",
		  	"Início Lento",
		  	"Lentoinizio",
		  	"Saumselig",
		  	"スロースタート",
		  	"슬로스타트",
		  	"慢启动",
		  	"Slow Start"
		],
		description: [
			`Increases [POWER]Power[/POWER] and [RANGE]Range[/RANGE] by 100% and [SPEED]reduces Recharge[/SPEED] by 50% after being deployed for 60 seconds. The time required to activate this effect is reduced by 20 seconds when taking damage.`, // inglés
			`Aumenta el [POWER]poder[/POWER] y el [RANGE]alcance[/RANGE] un 100% y reduce el [SPEED]tiempo de recarga[/SPEED] un 50% tras permanecer desplegado durante 60 segundos. El tiempo necesario para activar este efecto se reduce en 20 segundos al recibir daño.`, // español
			`Augmente la [POWER]puissance[/POWER] et la [RANGE]portée[/RANGE] de 100 % et réduit le [SPEED]temps de recharge[/SPEED] de 50 % après 60 secondes de déploiement. Le temps nécessaire à l'activation de cet effet est réduit de 20 secondes lorsque le porteur subit des dégâts.`, // francés
			`Aumenta o [POWER]poder[/POWER] e o [RANGE]alcance[/RANGE] em 100% e reduz o [SPEED]tempo de recarga[/SPEED] em 50% após permanecer colocado durante 60 segundos. O tempo necessário para ativar este efeito é reduzido em 20 segundos ao sofrer dano.`, // portugués
			`Aumenta la [POWER]potenza[/POWER] e la [RANGE]portata[/RANGE] del 100% e riduce il [SPEED]tempo di ricarica[/SPEED] del 50% dopo essere rimasto schierato per 60 secondi. Il tempo necessario per attivare questo effetto si riduce di 20 secondi quando si subiscono danni.`, // italiano
			`Erhöht [POWER]Stärke[/POWER] und [RANGE]Reichweite[/RANGE] um 100 % und verringert die [SPEED]Aufladezeit[/SPEED] um 50 %, nachdem es 60 Sekunden lang eingesetzt wurde. Die benötigte Aktivierungszeit dieses Effekts verkürzt sich bei erlittenem Schaden um 20 Sekunden.`, // alemán
			`配置されてから60秒経過すると、[POWER]威力[/POWER]と[RANGE]射程[/RANGE]が100%上昇し、[SPEED]再チャージ時間[/SPEED]が50%短縮される。ダメージを受けると、この効果の発動に必要な時間が20秒短縮される。`, // japonés
			`배치된 지 60초가 지나면 [POWER]위력[/POWER]과 [RANGE]사거리[/RANGE]가 100% 증가하고 [SPEED]재충전 시간[/SPEED]이 50% 감소한다. 피해를 받으면 이 효과의 발동에 필요한 시간이 20초 단축된다.`, // coreano
			`部署60秒后，[POWER]威力[/POWER]和[RANGE]射程[/RANGE]提高100%，[SPEED]充能时间[/SPEED]缩短50%。受到伤害时，激活此效果所需的时间缩短20秒。`, // chino
			`Zwiększa [POWER]moc[/POWER] i [RANGE]zasięg[/RANGE] o 100% oraz skraca [SPEED]czas odnowienia[/SPEED] o 50% po 60 sekundach od rozstawienia. Otrzymanie obrażeń skraca czas wymagany do aktywacji tego efektu o 20 sekund.` // polaco
		]
	},
	precipiceBlades: {
		id: 'precipiceBlades',
		name: [
		  	'Precipice Blades', // inglés
			'Filo del Abismo', // español
			'Lame Pangéenne', // francés
			'Lâminas do Precipício', // portugués
			'Spade Telluriche', // italiano
			'Abgrundsklinge', // alemán
			'だんがいのつるぎ', // japonés
			'단애의칼', // coreano
			'断崖之剑', // chino
			'Ostrza Czeluści' // polaco
		],
		description: [
			`Summons an [PROJECTILE]aura[/PROJECTILE] for 1.5 seconds that deals damage every 0.5 seconds and [BURN]burns[/BURN] [ENEMY]enemies[/ENEMY] for 10 seconds.`, // inglés
			`Invoca un [PROJECTILE]aura[/PROJECTILE] durante 1,5 segundos que inflige daño cada 0,5 segundos y [BURN]quema[/BURN] a los [ENEMY]enemigos[/ENEMY] durante 10 segundos.`, // español
			`Invoque une [PROJECTILE]aura[/PROJECTILE] pendant 1,5 secondes, qui inflige des dégâts toutes les 0,5 seconde et [BURN]brûle[/BURN] les [ENEMY]ennemis[/ENEMY] pendant 10 secondes.`, // francés
			`Invoca uma [PROJECTILE]aura[/PROJECTILE] durante 1,5 segundos que causa dano a cada 0,5 segundos e [BURN]queima[/BURN] os [ENEMY]inimigos[/ENEMY] durante 10 segundos.`, // portugués
			`Evoca un'[PROJECTILE]aura[/PROJECTILE] per 1,5 secondi, che infligge danni ogni 0,5 secondi e [BURN]scotta[/BURN] i [ENEMY]nemici[/ENEMY] per 10 secondi.`, // italiano
			`Beschwört für 1,5 Sekunden eine [PROJECTILE]Aura[/PROJECTILE], die alle 0,5 Sekunden Schaden verursacht und [ENEMY]Gegner[/ENEMY] 10 Sekunden lang [BURN]verbrennt[/BURN].`, // alemán
			`1.5秒間[PROJECTILE]オーラ[/PROJECTILE]を発生させ、0.5秒ごとにダメージを与え、[ENEMY]敵[/ENEMY]を10秒間[BURN]やけど[/BURN]状態にする。`, // japonés
			`1.5초 동안 [PROJECTILE]오라[/PROJECTILE]를 생성해 0.5초마다 피해를 주고, [ENEMY]적[/ENEMY]에게 10초 동안 [BURN]화상[/BURN]을 입힌다.`, // coreano
			`召唤持续1.5秒的[PROJECTILE]光环[/PROJECTILE]，每0.5秒造成一次伤害，并使[ENEMY]敌人[/ENEMY]陷入持续10秒的[BURN]灼伤[/BURN]状态。`, // chino
			`Przywołuje [PROJECTILE]aurę[/PROJECTILE] na 1,5 sekundy, która zadaje obrażenia co 0,5 sekundy i [BURN]podpala[/BURN] [ENEMY]wrogów[/ENEMY] na 10 sekund.` // polaco
		]
	},
	originPulse: {
		id: 'originPulse',
		name: [
		  	`Origin Pulse`, // inglés
			`Pulso Primigenio`, // español
			`Onde Originelle`, // francés
			`Pulso Original`, // portugués
			`Primopulsar`, // italiano
			`Ursprungswoge`, // alemán
			`こんげんのはどう`, // japonés
			`근원의파동`, // coreano
			`根源波动`, // chino
			`Puls Prapoczątku` // polaco
		],
		description: [
			`Fires 3 [PROJECTILE]waves[/PROJECTILE], each with a 50% chance to [SLOW]slow[/SLOW] for 2 seconds. If the [ENEMY]enemy[/ENEMY] is already [SLOW]slowed[/SLOW], it has a 50% chance to [STUN]stun[/STUN] for 1 second.`, // inglés
			`Dispara 3 [PROJECTILE]ondas[/PROJECTILE], cada una con un 50% de probabilidad de [SLOW]ralentizar[/SLOW] durante 2 segundos. Si el [ENEMY]enemigo[/ENEMY] ya está [SLOW]ralentizado[/SLOW], tiene un 50% de probabilidad de [STUN]aturdir[/STUN] durante 1 segundo.`, // español
			`Tire 3 [PROJECTILE]ondes[/PROJECTILE], chacune ayant 50 % de chances de [SLOW]ralentir[/SLOW] pendant 2 secondes. Si l'[ENEMY]ennemi[/ENEMY] est déjà [SLOW]ralenti[/SLOW], il a 50 % de chances de l'[STUN]étourdir[/STUN] pendant 1 seconde.`, // francés
			`Dispara 3 [PROJECTILE]ondas[/PROJECTILE], cada uma com 50% de probabilidade de [SLOW]abrandar[/SLOW] durante 2 segundos. Se o [ENEMY]inimigo[/ENEMY] já estiver [SLOW]abrandado[/SLOW], tem 50% de probabilidade de o [STUN]atordoar[/STUN] durante 1 segundo.`, // portugués
			`Lancia 3 [PROJECTILE]onde[/PROJECTILE], ognuna con il 50% di probabilità di [SLOW]rallentare[/SLOW] per 2 secondi. Se il [ENEMY]nemico[/ENEMY] è già [SLOW]rallentato[/SLOW], ha il 50% di probabilità di [STUN]stordirlo[/STUN] per 1 secondo.`, // italiano
			`Feuert 3 [PROJECTILE]Wellen[/PROJECTILE] ab, die jeweils eine Chance von 50 % haben, 2 Sekunden lang zu [SLOW]verlangsamen[/SLOW]. Ist der [ENEMY]Gegner[/ENEMY] bereits [SLOW]verlangsamt[/SLOW], besteht eine Chance von 50 %, ihn 1 Sekunde lang [STUN]zu betäuben[/STUN].`, // alemán
			`[PROJECTILE]波[/PROJECTILE]を3発放ち、それぞれ50%の確率で2秒間[SLOW]スロウ[/SLOW]状態にする。[ENEMY]敵[/ENEMY]がすでに[SLOW]スロウ[/SLOW]状態の場合、50%の確率で1秒間[STUN]スタン[/STUN]させる。`, // japonés
			`[PROJECTILE]파동[/PROJECTILE]을 3번 발사하며, 각각 50% 확률로 2초 동안 [SLOW]둔화[/SLOW]시킨다. [ENEMY]적[/ENEMY]이 이미 [SLOW]둔화[/SLOW] 상태라면 50% 확률로 1초 동안 [STUN]기절[/STUN]시킨다.`, // coreano
			`发射3道[PROJECTILE]波动[/PROJECTILE]，每道都有50%的概率使敌人[SLOW]减速[/SLOW]2秒。如果[ENEMY]敌人[/ENEMY]已经处于[SLOW]减速[/SLOW]状态，则有50%的概率使其[STUN]眩晕[/STUN]1秒。`, // chino
			`Wystrzeliwuje 3 [PROJECTILE]fale[/PROJECTILE], z których każda ma 50% szans na [SLOW]spowolnienie[/SLOW] na 2 sekundy. Jeśli [ENEMY]wróg[/ENEMY] jest już [SLOW]spowolniony[/SLOW], istnieje 50% szans na [STUN]ogłuszenie[/STUN] go na 1 sekundę.` // polaco
		]
	},
	bulletPunch: {
		id: 'bulletPunch',
		name: [
		    `Bullet Punch`, // inglés
			`Puño Bala`, // español
			`Pisto-Poing`, // francés
			`Soco Projétil`, // portugués
			`Pugnoscarica`, // italiano
			`Patronenhieb`, // alemán
			`バレットパンチ`, // japonés
			`불릿펀치`, // coreano
			`子弹拳`, // chino
			`Kulocios` // polaco
		],
		description: [
			`When its [SPEED]recharge time[/SPEED] is completed, regardless of attacking, it gains one [ABILITY]charge[/ABILITY] of [ABILITY]Bullet Punch[/ABILITY], up to a maximum of 10. Upon reaching the [ABILITY]maximum charges[/ABILITY], it unleashes a violent [ABILITY]barrage of projectiles[/ABILITY] against nearby [ENEMY]enemies[/ENEMY].`, // inglés
			`Al completar su [SPEED]tiempo de recarga[/SPEED], independientemente de atacar, acumula una [ABILITY]carga[/ABILITY] de [ABILITY]Bullet Punch[/ABILITY], hasta un máximo de 10. Al alcanzar el [ABILITY]máximo de cargas[/ABILITY], desata una violenta [ABILITY]ráfaga de proyectiles[/ABILITY] contra los [ENEMY]enemigos[/ENEMY] cercanos.`, // español
			`À la fin de son [SPEED]temps de recharge[/SPEED], qu'il attaque ou non, il accumule une [ABILITY]charge[/ABILITY] de [ABILITY]Bullet Punch[/ABILITY], jusqu'à un maximum de 10. Lorsqu'il atteint le [ABILITY]nombre maximum de charges[/ABILITY], il déclenche une violente [ABILITY]rafale de projectiles[/ABILITY] contre les [ENEMY]ennemis[/ENEMY] proches.`, // francés
			`Ao completar seu [SPEED]tempo de recarga[/SPEED], independentemente de atacar, acumula uma [ABILITY]carga[/ABILITY] de [ABILITY]Bullet Punch[/ABILITY], até um máximo de 10. Ao atingir o [ABILITY]máximo de cargas[/ABILITY], desfere uma violenta [ABILITY]rajada de projéteis[/ABILITY] contra os [ENEMY]inimigos[/ENEMY] próximos.`, // portugués
			`Al completamento del [SPEED]tempo di ricarica[/SPEED], indipendentemente dall'attacco, accumula una [ABILITY]carica[/ABILITY] di [ABILITY]Bullet Punch[/ABILITY], fino a un massimo di 10. Al raggiungimento del [ABILITY]numero massimo di cariche[/ABILITY], scatena una violenta [ABILITY]raffica di proiettili[/ABILITY] contro i [ENEMY]nemici[/ENEMY] vicini.`, // italiano
			`Nach Ablauf seiner [SPEED]Aufladezeit[/SPEED] erhält es unabhängig davon, ob es angreift, eine [ABILITY]Ladung[/ABILITY] von [ABILITY]Bullet Punch[/ABILITY], bis zu maximal 10. Sobald die [ABILITY]maximale Anzahl an Ladungen[/ABILITY] erreicht ist, entfesselt es eine heftige [ABILITY]Geschoss-Salve[/ABILITY] gegen nahe [ENEMY]Gegner[/ENEMY].`, // alemán
			`[SPEED]再使用時間[/SPEED]が完了すると、攻撃しているかどうかに関係なく[ABILITY]バレットパンチ[/ABILITY]の[ABILITY]チャージ[/ABILITY]を1つ獲得する。最大10個まで蓄積できる。[ABILITY]最大チャージ数[/ABILITY]に達すると、近くの[ENEMY]敵[/ENEMY]に激しい[ABILITY]投射物の連射[/ABILITY]を放つ。`, // japonés
			`[SPEED]재사용 대기 시간[/SPEED]이 완료되면 공격 여부와 관계없이 [ABILITY]불릿펀치[/ABILITY]의 [ABILITY]충전[/ABILITY]을 1개 획득하며, 최대 10개까지 저장할 수 있습니다. [ABILITY]최대 충전[/ABILITY]에 도달하면 주변 [ENEMY]적[/ENEMY]에게 강력한 [ABILITY]투사체 난사[/ABILITY]를 퍼붓습니다.`, // coreano
			`[SPEED]冷却时间[/SPEED]结束后，无论是否进行攻击，都会获得1层[ABILITY]子弹拳[/ABILITY]的[ABILITY]蓄力[/ABILITY]，最多可叠加10层。达到[ABILITY]最大蓄力[/ABILITY]后，会向附近的[ENEMY]敌人[/ENEMY]发动猛烈的[ABILITY]投射物弹幕[/ABILITY]。`, // chino
			`Po zakończeniu [SPEED]czasu odnowienia[/SPEED], niezależnie od tego, czy atakuje, zyskuje jedną [ABILITY]ładunek[/ABILITY] [ABILITY]Bullet Punch[/ABILITY], maksymalnie do 10. Po osiągnięciu [ABILITY]maksymalnej liczby ładunków[/ABILITY] wykonuje gwałtowną [ABILITY]salwę pocisków[/ABILITY] przeciwko pobliskim [ENEMY]wrogom[/ENEMY].` // polaco
		]
	},
	bulletPunchMega: {
		id: 'bulletPunchMega',
		name: [
		    `Bullet Punch`, // inglés
			`Puño Bala`, // español
			`Pisto-Poing`, // francés
			`Soco Projétil`, // portugués
			`Pugnoscarica`, // italiano
			`Patronenhieb`, // alemán
			`バレットパンチ`, // japonés
			`불릿펀치`, // coreano
			`子弹拳`, // chino
			`Kulocios` // polaco
		],
		description: [
			`When its [SPEED]recharge time[/SPEED] is completed, regardless of whether it is attacking, it gains one [ABILITY]charge[/ABILITY] of [ABILITY]Bullet Punch[/ABILITY], up to a maximum of 5. Upon reaching the [ABILITY]maximum charges[/ABILITY], it unleashes a violent [ABILITY]barrage of projectiles[/ABILITY] against nearby [ENEMY]enemies[/ENEMY]. Upon defeating an [ENEMY]enemy[/ENEMY], it restores all [ABILITY]charges[/ABILITY].`, // inglés
			`Cuando se completa su [SPEED]tiempo de recarga[/SPEED], independientemente de si está atacando, obtiene una [ABILITY]carga[/ABILITY] de [ABILITY]Puño Bala[/ABILITY], hasta un máximo de 5. Al alcanzar las [ABILITY]cargas máximas[/ABILITY], desata un violento [ABILITY]bombardeo de proyectiles[/ABILITY] contra los [ENEMY]enemigos[/ENEMY] cercanos. Al derrotar a un [ENEMY]enemigo[/ENEMY], recupera todas las [ABILITY]cargas[/ABILITY].`, // español
			`Lorsque son [SPEED]temps de recharge[/SPEED] est terminé, qu'il attaque ou non, il gagne une [ABILITY]charge[/ABILITY] de [ABILITY]Pisto-Poing[/ABILITY], jusqu'à un maximum de 5. Lorsqu'il atteint le [ABILITY]maximum de charges[/ABILITY], il déchaîne une violente [ABILITY]salve de projectiles[/ABILITY] contre les [ENEMY]ennemis[/ENEMY] proches. Lorsqu'il élimine un [ENEMY]ennemi[/ENEMY], il récupère toutes les [ABILITY]charges[/ABILITY].`, // francés
			`Quando seu [SPEED]tempo de recarga[/SPEED] é concluído, independentemente de estar atacando, ele ganha uma [ABILITY]carga[/ABILITY] de [ABILITY]Soco de Bala[/ABILITY], até um máximo de 5. Ao atingir o [ABILITY]máximo de cargas[/ABILITY], libera uma violenta [ABILITY]rajada de projéteis[/ABILITY] contra os [ENEMY]inimigos[/ENEMY] próximos. Ao derrotar um [ENEMY]inimigo[/ENEMY], recupera todas as [ABILITY]cargas[/ABILITY].`, // portugués
			`Quando il suo [SPEED]tempo di ricarica[/SPEED] è completato, indipendentemente dal fatto che stia attaccando, ottiene una [ABILITY]carica[/ABILITY] di [ABILITY]Pugnoscarica[/ABILITY], fino a un massimo di 5. Al raggiungimento delle [ABILITY]cariche massime[/ABILITY], scatena una violenta [ABILITY]raffica di proiettili[/ABILITY] contro gli [ENEMY]nemici[/ENEMY] vicini. Quando sconfigge un [ENEMY]nemico[/ENEMY], recupera tutte le [ABILITY]cariche[/ABILITY].`, // italiano
			`Wenn seine [SPEED]Aufladezeit[/SPEED] abgeschlossen ist, unabhängig davon, ob es angreift, erhält es eine [ABILITY]Ladung[/ABILITY] von [ABILITY]Patronenhieb[/ABILITY], bis zu einem Maximum von 5. Sobald es die [ABILITY]maximale Anzahl an Ladungen[/ABILITY] erreicht, entfesselt es eine heftige [ABILITY]Salve aus Projektilen[/ABILITY] gegen nahe [ENEMY]Gegner[/ENEMY]. Beim Besiegen eines [ENEMY]Gegners[/ENEMY] stellt es alle [ABILITY]Ladungen[/ABILITY] wieder her.`, // alemán
			`[SPEED]再使用時間[/SPEED]が完了すると、攻撃中かどうかに関係なく、[ABILITY]バレットパンチ[/ABILITY]の[ABILITY]チャージ[/ABILITY]を1つ獲得する。最大5つまで蓄積できる。[ABILITY]最大チャージ[/ABILITY]に達すると、近くの[ENEMY]敵[/ENEMY]に激しい[ABILITY]弾丸の猛攻[/ABILITY]を放つ。[ENEMY]敵[/ENEMY]を倒すと、すべての[ABILITY]チャージ[/ABILITY]を回復する。`, // japonés
			`[SPEED]재사용 대기시간[/SPEED]이 완료되면 공격 중인지 여부와 관계없이 [ABILITY]불릿펀치[/ABILITY] [ABILITY]충전[/ABILITY]을 1개 얻으며, 최대 5개까지 충전할 수 있습니다. [ABILITY]최대 충전[/ABILITY]에 도달하면 주변 [ENEMY]적[/ENEMY]에게 강력한 [ABILITY]탄환 세례[/ABILITY]를 퍼붓습니다. [ENEMY]적[/ENEMY]을 처치하면 모든 [ABILITY]충전[/ABILITY]을 회복합니다.`, // coreano
			`当[SPEED]冷却时间[/SPEED]结束时，无论是否正在攻击，都会获得1层[ABILITY]子弹拳[/ABILITY]的[ABILITY]蓄力[/ABILITY]，最多可积累5层。达到[ABILITY]最大蓄力[/ABILITY]后，会向附近的[ENEMY]敌人[/ENEMY]释放猛烈的[ABILITY]投射物弹幕[/ABILITY]。击败一名[ENEMY]敌人[/ENEMY]后，恢复全部[ABILITY]蓄力[/ABILITY]。`, // chino
			`Po zakończeniu [SPEED]czasu odnowienia[/SPEED], niezależnie od tego, czy atakuje, zyskuje jedną [ABILITY]szarżę[/ABILITY] [ABILITY]Ciosu Pociskiem[/ABILITY], maksymalnie do 5. Po osiągnięciu [ABILITY]maksymalnej liczby szarż[/ABILITY] uwalnia gwałtowną [ABILITY]nawałnicę pocisków[/ABILITY] przeciwko pobliskim [ENEMY]wrogom[/ENEMY]. Po pokonaniu [ENEMY]wroga[/ENEMY] przywraca wszystkie [ABILITY]szarże[/ABILITY].` // polaco
		]
	},
	steelBeam: {
		id: 'steelBeam',
		name: [
		    `Steel Beam`, // inglés
			`Metaláser`, // español
			`Métalaser`, // francés
			`Metal Bruto`, // portugués
			`Raggio d’Acciaio`, // italiano
			`Stahlstrahl`, // alemán
			`てっていこうせん`, // japonés
			`철제광선`, // coreano
			`铁蹄光线`, // chino
			`Stalowy Promień` // polaco
		],
		description: [
			`Fires a [PROJECTILE]piercing beam[/PROJECTILE]. Whenever the [PROJECTILE]beam[/PROJECTILE] hits more than 5 [ENEMY]enemies[/ENEMY] at the same time, you lose 1 [HEART]heart[/HEART]. This effect cannot kill you.`, // inglés
			`Dispara un [PROJECTILE]rayo perforante[/PROJECTILE]. Cada vez que el [PROJECTILE]rayo[/PROJECTILE] golpea a más de 5 [ENEMY]enemigos[/ENEMY] al mismo tiempo, pierdes 1 [HEART]corazón[/HEART]. Este efecto no puede matarte.`, // español
			`Tire un [PROJECTILE]rayon perforant[/PROJECTILE]. Chaque fois que le [PROJECTILE]rayon[/PROJECTILE] touche plus de 5 [ENEMY]ennemis[/ENEMY] simultanément, vous perdez 1 [HEART]cœur[/HEART]. Cet effet ne peut pas vous tuer.`, // francés
			`Dispara um [PROJECTILE]raio perfurante[/PROJECTILE]. Sempre que o [PROJECTILE]raio[/PROJECTILE] atingir mais de 5 [ENEMY]inimigos[/ENEMY] ao mesmo tempo, perdes 1 [HEART]coração[/HEART]. Este efeito não te pode matar.`, // portugués
			`Spara un [PROJECTILE]raggio perforante[/PROJECTILE]. Ogni volta che il [PROJECTILE]raggio[/PROJECTILE] colpisce più di 5 [ENEMY]nemici[/ENEMY] contemporaneamente, perdi 1 [HEART]cuore[/HEART]. Questo effetto non può ucciderti.`, // italiano
			`Feuert einen [PROJECTILE]durchdringenden Strahl[/PROJECTILE] ab. Immer wenn der [PROJECTILE]Strahl[/PROJECTILE] mehr als 5 [ENEMY]Gegner[/ENEMY] gleichzeitig trifft, verlierst du 1 [HEART]Herz[/HEART]. Dieser Effekt kann dich nicht töten.`, // alemán
			`[PROJECTILE]貫通ビーム[/PROJECTILE]を発射する。[PROJECTILE]ビーム[/PROJECTILE]が5体を超える[ENEMY]敵[/ENEMY]に同時に命中するたびに、[HEART]ハート[/HEART]を1つ失う。この効果で倒されることはない。`, // japonés
			`[PROJECTILE]관통 광선[/PROJECTILE]을 발사한다. [PROJECTILE]광선[/PROJECTILE]이 5마리를 초과하는 [ENEMY]적[/ENEMY]에게 동시에 명중할 때마다 [HEART]하트[/HEART]를 1개 잃는다. 이 효과로 죽지는 않는다.`, // coreano
			`发射一道[PROJECTILE]贯穿光束[/PROJECTILE]。每当[PROJECTILE]光束[/PROJECTILE]同时击中超过5个[ENEMY]敌人[/ENEMY]时，你会失去1颗[HEART]心心[/HEART]。此效果不会使你死亡。`, // chino
			`Wystrzeliwuje [PROJECTILE]przebijający promień[/PROJECTILE]. Za każdym razem, gdy [PROJECTILE]promień[/PROJECTILE] trafi jednocześnie więcej niż 5 [ENEMY]wrogów[/ENEMY], tracisz 1 [HEART]serce[/HEART]. Ten efekt nie może cię zabić.` // polaco
		]
	},
	sacredFire: {
		id: 'sacredFire',
		name: [
		 	`Sacred Fire`, // inglés
			`Fuego Sagrado`, // español
			`Feu Sacré`, // francés
			`Fogo Sagrado`, // portugués
			`Magifuoco`, // italiano
			`Läuterfeuer`, // alemán
			`せいなるほのお`, // japonés
			`성스러운불꽃`, // coreano
			`神圣之火`, // chino
			`Święty Ogień` // polaco
		],
		description: [
			`Summons an [PROJECTILE]orbital flame[/PROJECTILE] that pursues [ENEMY]enemies[/ENEMY]. Deals damage every 0.5 seconds and inflicts [BURN]burn[/BURN]. If the target is afflicted with [NIGHTMARE]NIGHTMARE[/NIGHTMARE], consumes a stack to multiply the damage dealt by the amount of stacks on the target.`, // inglés
			`Invoca una [PROJECTILE]llama orbital[/PROJECTILE] que persigue a los [ENEMY]enemigos[/ENEMY]. Inflige daño cada 0,5 segundos y aplica [BURN]quemadura[/BURN]. Si el objetivo está afectado por [NIGHTMARE]PESADILLA[/NIGHTMARE], consume una carga para multiplicar el daño infligido por la cantidad de cargas que tiene el objetivo.`, // español
			`Invoque une [PROJECTILE]flamme orbitale[/PROJECTILE] qui poursuit les [ENEMY]ennemis[/ENEMY]. Inflige des dégâts toutes les 0,5 secondes et applique [BURN]brûlure[/BURN]. Si la cible est affectée par [NIGHTMARE]CAUCHEMAR[/NIGHTMARE], consomme une charge pour multiplier les dégâts infligés par le nombre de charges sur la cible.`, // francés
			`Invoca uma [PROJECTILE]chama orbital[/PROJECTILE] que persegue [ENEMY]inimigos[/ENEMY]. Causa dano a cada 0,5 segundo e aplica [BURN]queimadura[/BURN]. Se o alvo estiver afetado por [NIGHTMARE]PESADELO[/NIGHTMARE], consome uma carga para multiplicar o dano causado pela quantidade de cargas no alvo.`, // portugués
			`Evoca una [PROJECTILE]fiamma orbitale[/PROJECTILE] che insegue i [ENEMY]nemici[/ENEMY]. Infligge danni ogni 0,5 secondi e applica [BURN]scottatura[/BURN]. Se il bersaglio è affetto da [NIGHTMARE]INCUBO[/NIGHTMARE], consuma una carica per moltiplicare i danni inflitti per il numero di cariche presenti sul bersaglio.`, // italiano
			`Beschwört eine [PROJECTILE]umlaufende Flamme[/PROJECTILE], die [ENEMY]Gegner[/ENEMY] verfolgt. Verursacht alle 0,5 Sekunden Schaden und fügt [BURN]Verbrennung[/BURN] zu. Ist das Ziel von [NIGHTMARE]ALPTRAUM[/NIGHTMARE] betroffen, wird eine Ladung verbraucht, um den verursachten Schaden mit der Anzahl der Ladungen auf dem Ziel zu multiplizieren.`, // alemán
			`[PROJECTILE]旋回する炎[/PROJECTILE]を呼び出し、[ENEMY]敵[/ENEMY]を追跡する。0.5秒ごとにダメージを与え、[BURN]やけど[/BURN]状態にする。対象が[NIGHTMARE]悪夢[/NIGHTMARE]状態の場合、蓄積を1つ消費し、対象の蓄積数に応じて与えるダメージを倍増させる。`, // japonés
			`[PROJECTILE]궤도 화염[/PROJECTILE]을 소환하여 [ENEMY]적[/ENEMY]을 추적합니다. 0.5초마다 피해를 주고 [BURN]화상[/BURN]을 입힙니다. 대상이 [NIGHTMARE]악몽[/NIGHTMARE]에 걸려 있다면, 중첩을 하나 소모하여 대상의 중첩 수만큼 가하는 피해를 배율로 증가시킵니다.`, // coreano
			`召唤一道[PROJECTILE]环绕火焰[/PROJECTILE]追踪[ENEMY]敌人[/ENEMY]。每0.5秒造成一次伤害并施加[BURN]灼伤[/BURN]。如果目标受到[NIGHTMARE]梦魇[/NIGHTMARE]影响，则消耗一层梦魇，使造成的伤害乘以目标当前的梦魇层数。`, // chino
			`Przywołuje [PROJECTILE]ognisty orbital[/PROJECTILE], który ściga [ENEMY]wrogów[/ENEMY]. Zadaje obrażenia co 0,5 sekundy i nakłada [BURN]oparzenie[/BURN]. Jeśli cel jest objęty efektem [NIGHTMARE]KOSZMAR[/NIGHTMARE], zużywa jedną warstwę, aby pomnożyć zadawane obrażenia przez liczbę warstw na celu.` // polaco
		]
	},
	lightningRod: {
		id: 'lightningRod',
		name: [
			"Lightning Rod",
			"Pararrayos",
			"Paratonnerre",
			"Binding Polygon",
			"Parafulmine",
			"Blitzfänger",
			"ひらいしん",
			"피뢰침",
			"避雷针",
			"Lightning Rod"
		],
		description: [
			`Gains one [ABILITY]charge[/ABILITY] whenever an [ENEMY]enemy[/ENEMY] within [RANGE]range[/RANGE] is [STUN]stunned[/STUN]. Increases [POWER]power[/POWER] by 10% for each [ABILITY]charge[/ABILITY]. Upon reaching [ABILITY]10 charges[/ABILITY], its next [PROJECTILE]PROJECTILE[/PROJECTILE] explodes in an [SHAPE]area[/SHAPE], dealing half damage to nearby [ENEMY]enemies[/ENEMY] and losing all [ABILITY]charges[/ABILITY].`, // inglés
			`Gana una [ABILITY]carga[/ABILITY] cada vez que un [ENEMY]enemigo[/ENEMY] dentro del [RANGE]alcance[/RANGE] es [STUN]aturdido[/STUN]. Aumenta el [POWER]poder[/POWER] en 10% por cada [ABILITY]carga[/ABILITY]. Al alcanzar [ABILITY]10 cargas[/ABILITY], su siguiente [PROJECTILE]PROYECTIL[/PROJECTILE] explota en [SHAPE]área[/SHAPE], infligiendo la mitad de daño a los [ENEMY]enemigos[/ENEMY] cercanos y pierde todas las [ABILITY]cargas[/ABILITY].`, // español
			`Gagne une [ABILITY]charge[/ABILITY] chaque fois qu'un [ENEMY]ennemi[/ENEMY] à portée est [STUN]étourdi[/STUN]. Augmente la [POWER]puissance[/POWER] de 10 % pour chaque [ABILITY]charge[/ABILITY]. Lorsqu'il atteint [ABILITY]10 charges[/ABILITY], son prochain [PROJECTILE]PROJECTILE[/PROJECTILE] explose dans une [SHAPE]zone[/SHAPE], infligeant la moitié des dégâts aux [ENEMY]ennemis[/ENEMY] proches et faisant perdre toutes les [ABILITY]charges[/ABILITY].`, // francés
			`Ganha uma [ABILITY]carga[/ABILITY] sempre que um [ENEMY]inimigo[/ENEMY] dentro do [RANGE]alcance[/RANGE] for [STUN]atordoado[/STUN]. Aumenta o [POWER]poder[/POWER] em 10% para cada [ABILITY]carga[/ABILITY]. Ao atingir [ABILITY]10 cargas[/ABILITY], seu próximo [PROJECTILE]PROJÉTIL[/PROJECTILE] explode em uma [SHAPE]área[/SHAPE], causando metade do dano aos [ENEMY]inimigos[/ENEMY] próximos e perdendo todas as [ABILITY]cargas[/ABILITY].`, // portugués
			`Ottiene una [ABILITY]carica[/ABILITY] ogni volta che un [ENEMY]nemico[/ENEMY] entro la [RANGE]gittata[/RANGE] viene [STUN]stordito[/STUN]. Aumenta la [POWER]potenza[/POWER] del 10% per ogni [ABILITY]carica[/ABILITY]. Al raggiungimento di [ABILITY]10 cariche[/ABILITY], il suo prossimo [PROJECTILE]PROIETTILE[/PROJECTILE] esplode in un'[SHAPE]area[/SHAPE], infliggendo metà dei danni ai [ENEMY]nemici[/ENEMY] vicini e facendo perdere tutte le [ABILITY]cariche[/ABILITY].`, // italiano
			`Erhält eine [ABILITY]Ladung[/ABILITY], wenn ein [ENEMY]Gegner[/ENEMY] in [RANGE]Reichweite[/RANGE] [STUN]betäubt[/STUN] wird. Erhöht die [POWER]Kraft[/POWER] für jede [ABILITY]Ladung[/ABILITY] um 10 %. Bei [ABILITY]10 Ladungen[/ABILITY] explodiert das nächste [PROJECTILE]GESCHOSS[/PROJECTILE] in einem [SHAPE]Bereich[/SHAPE], verursacht halben Schaden bei nahegelegenen [ENEMY]Gegnern[/ENEMY] und verliert alle [ABILITY]Ladungen[/ABILITY].`, // alemán
			`[RANGE]射程[/RANGE]内の[ENEMY]敵[/ENEMY]が[STUN]ひるむ[/STUN]たびに[ABILITY]チャージ[/ABILITY]を1つ獲得する。チャージ]1つにつき[POWER]威力[/POWER]が10%上がる。[ABILITY]10チャージ[/ABILITY]に達すると、次の[PROJECTILE]投射物[/PROJECTILE]が[SHAPE]範囲[/SHAPE]で爆発し、近くの[ENEMY]敵[/ENEMY]に半分のダメージを与え、[ABILITY]チャージ[/ABILITY]をすべて失う。`, // japonés
			`[RANGE]사거리[/RANGE] 내 [ENEMY]적[/ENEMY]이 [STUN]기절[/STUN]할 때마다 [ABILITY]충전[/ABILITY]을 1개 얻습니다. [ABILITY]충전[/ABILITY] 1개당 [POWER]위력[/POWER]이 10% 증가합니다. [ABILITY]10충전[/ABILITY]에 도달하면 다음 [PROJECTILE]투사체[/PROJECTILE]가 [SHAPE]범위[/SHAPE]에서 폭발하여 주변 [ENEMY]적[/ENEMY]에게 절반의 피해를 주고 모든 [ABILITY]충전[/ABILITY]을 잃습니다.`, // coreano
			`每当[RANGE]射程[/RANGE]内的[ENEMY]敌人[/ENEMY]被[STUN]眩晕[/STUN]时，获得1层[ABILITY]蓄力[/ABILITY]。每层 蓄力使[POWER]威力[/POWER]提高10%。达到[ABILITY]10层蓄力[/ABILITY]后，下一个[PROJECTILE]投射物[/PROJECTILE]会在[SHAPE]范围[/SHAPE]内爆炸，对附近的[ENEMY]敌人[/ENEMY]造成一半伤害，并失去所有[ABILITY]蓄力[/ABILITY]。`, // chino
			`Zyskuje jeden [ABILITY]ładunek[/ABILITY] za każdym razem, gdy [ENEMY]wróg[/ENEMY] w [RANGE]zasięgu[/RANGE] zostanie [STUN]ogłuszony[/STUN]. Zwiększa [POWER]moc[/POWER] o 10% za każdy [ABILITY]ładunek[/ABILITY]. Po osiągnięciu [ABILITY]10 ładunków[/ABILITY] następny [PROJECTILE]POCISK[/PROJECTILE] eksploduje na [SHAPE]obszarze[/SHAPE], zadając pobliskim [ENEMY]wrogom[/ENEMY] połowę obrażeń i tracąc wszystkie [ABILITY]ładunki[/ABILITY].` // polaco
		]
	},
	steamEruption: {
		id: 'steamEruption',
		name: [
		  	`Steam Eruption`, // inglés
			`Chorro de Vapor`, // español
			`Jet de Vapeur`, // francés
			`Jato de Vapor`, // portugués
			`Vaporscoppio`, // italiano
			`Dampfschwall`, // alemán
			`スチームバースト`, // japonés
			`스팀버스트`, // coreano
			`喷火`, // chino
			`Erupcja Parowa` // polaco
		],
		description: [
			`Fires a [PROJECTILE]beam[/PROJECTILE] in a straight line, hitting all targets it passes through, inflicting [BURN]burn[/BURN] and leaving a [STEAM]cloud of hot steam[/STEAM] for 3 seconds.`, // inglés
			`Dispara un [PROJECTILE]rayo[/PROJECTILE] en línea recta que golpea a todos los objetivos que atraviesa, les causa [BURN]quemaduras[/BURN] y deja una [STEAM]nube de vapor caliente[/STEAM] durante 3 segundos.`, // español
			`Tire un [PROJECTILE]rayon[/PROJECTILE] en ligne droite, touchant toutes les cibles qu'il traverse, leur infligeant des [BURN]brûlures[/BURN] et laissant un [STEAM]nuage de vapeur chaude[/STEAM] pendant 3 secondes.`, // francés
			`Dispara um [PROJECTILE]raio[/PROJECTILE] em linha reta, atingindo todos os alvos que atravessa, causando [BURN]queimaduras[/BURN] e deixando uma [STEAM]nuvem de vapor quente[/STEAM] durante 3 segundos.`, // portugués
			`Spara un [PROJECTILE]raggio[/PROJECTILE] in linea retta, colpendo tutti i bersagli che attraversa, infliggendo [BURN]scottature[/BURN] e lasciando una [STEAM]nube di vapore caldo[/STEAM] per 3 secondi.`, // italiano
			`Feuert einen [PROJECTILE]Strahl[/PROJECTILE] in gerader Linie ab, der alle Ziele trifft, die er durchquert, ihnen [BURN]Verbrennungen[/BURN] zufügt und 3 Sekunden lang eine [STEAM]Wolke aus heißem Dampf[/STEAM] hinterlässt.`, // alemán
			`一直線に[PROJECTILE]ビーム[/PROJECTILE]を放ち、通過したすべての対象に命中して[BURN]やけど[/BURN]を負わせ、3秒間[STEAM]高温の蒸気の雲[/STEAM]を残す。`, // japonés
			`직선으로 [PROJECTILE]광선[/PROJECTILE]을 발사해 지나가는 모든 대상에게 명중하고 [BURN]화상[/BURN]을 입히며, 3초 동안 [STEAM]뜨거운 증기 구름[/STEAM]을 남긴다.`, // coreano
			`沿直线发射一道[PROJECTILE]光束[/PROJECTILE]，击中所有穿过的目标，使其陷入[BURN]灼伤[/BURN]状态，并留下持续3秒的[STEAM]热蒸汽云[/STEAM]。`, // chino
			`Wystrzeliwuje [PROJECTILE]promień[/PROJECTILE] w linii prostej, trafiając wszystkie napotkane cele, powodując [BURN]oparzenia[/BURN] i pozostawiając [STEAM]chmurę gorącej pary[/STEAM] na 3 sekundy.` // polaco
		]
	},
	soulHeartReactor: {
		id: 'soulHeartReactor',
		name: [
		  	`Soul-Heart Reactor`, // inglés
			`Reactor Alma-Corazón`, // español
			`Réacteur Âme-Cœur`, // francés
			`Reator Alma-Coração`, // portugués
			`Reattore Anima-Cuore`, // italiano
			`Seelenherz-Reaktor`, // alemán
			`ソウルハートリアクター`, // japonés
			`소울하트 리액터`, // coreano
			`灵魂之心反应堆`, // chino
			`Reaktor Duszy-Serca` // polaco
		],
		description: [
			`Fires a [PROJECTILE]beam[/PROJECTILE] in a straight line that has a 1% chance to restore 1 [HEART]heart[/HEART] (2 uses per wave). For every [HEART]heart[/HEART] restored this [PROJECTILE]wave[/PROJECTILE], increases [POWER]power[/POWER] by 10%. Each time an [ENEMY]enemy[/ENEMY] dies, reduces [SPEED]recharge time[/SPEED] by 0.3%.`, // inglés
			`Dispara un [PROJECTILE]rayo[/PROJECTILE] en línea recta que tiene un 1% de probabilidad de restaurar 1 [HEART]corazón[/HEART] (2 usos por oleada). Por cada [HEART]corazón[/HEART] restaurado durante esta [PROJECTILE]oleada[/PROJECTILE], aumenta el [POWER]poder[/POWER] un 10%. Cada vez que un [ENEMY]enemigo[/ENEMY] muere, reduce el [SPEED]tiempo de recarga[/SPEED] un 0,3%.`, // español
			`Lance un [PROJECTILE]rayon[/PROJECTILE] en ligne droite avec 1 % de chance de restaurer 1 [HEART]cœur[/HEART] (2 utilisations par vague). Pour chaque [HEART]cœur[/HEART] restauré pendant cette [PROJECTILE]vague[/PROJECTILE], augmente la [POWER]puissance[/POWER] de 10 %. Chaque fois qu'un [ENEMY]ennemi[/ENEMY] meurt, réduit le [SPEED]temps de recharge[/SPEED] de 0,3 %.`, // francés
			`Dispara um [PROJECTILE]raio[/PROJECTILE] em linha reta que tem 1% de chance de restaurar 1 [HEART]coração[/HEART] (2 usos por onda). Para cada [HEART]coração[/HEART] restaurado durante esta [PROJECTILE]onda[/PROJECTILE], aumenta o [POWER]poder[/POWER] em 10%. Cada vez que um [ENEMY]inimigo[/ENEMY] morre, reduz o [SPEED]tempo de recarga[/SPEED] em 0,3%.`, // portugués
			`Spara un [PROJECTILE]raggio[/PROJECTILE] in linea retta che ha l'1% di probabilità di ripristinare 1 [HEART]cuore[/HEART] (2 utilizzi per ondata). Per ogni [HEART]cuore[/HEART] ripristinato durante questa [PROJECTILE]ondata[/PROJECTILE], aumenta la [POWER]potenza[/POWER] del 10%. Ogni volta che un [ENEMY]nemico[/ENEMY] muore, riduce il [SPEED]tempo di ricarica[/SPEED] dello 0,3%.`, // italiano
			`Feuert einen [PROJECTILE]Strahl[/PROJECTILE] in gerader Linie ab, der eine Chance von 1 % hat, 1 [HEART]Herz[/HEART] wiederherzustellen (2 Anwendungen pro Welle). Für jedes während dieser [PROJECTILE]Welle[/PROJECTILE] wiederhergestellte [HEART]Herz[/HEART] wird die [POWER]Kraft[/POWER] um 10 % erhöht. Jedes Mal, wenn ein [ENEMY]Gegner[/ENEMY] stirbt, wird die [SPEED]Aufladezeit[/SPEED] um 0,3 % reduziert.`, // alemán
			`一直線に[PROJECTILE]ビーム[/PROJECTILE]を放ち、1%の確率で[HEART]ハート[/HEART]を1個回復する（1ウェーブにつき2回まで）。この[PROJECTILE]ウェーブ[/PROJECTILE]中に[HEART]ハート[/HEART]を1個回復するごとに、[POWER]威力[/POWER]が10%上がる。[ENEMY]敵[/ENEMY]が1体倒れるたびに、[SPEED]再チャージ時間[/SPEED]が0.3%短くなる。`, // japonés
			`직선으로 [PROJECTILE]빔[/PROJECTILE]을 발사하며 1% 확률로 [HEART]하트[/HEART] 1개를 회복합니다 (웨이브당 2회 사용). 이번 [PROJECTILE]웨이브[/PROJECTILE] 동안 [HEART]하트[/HEART]를 회복할 때마다 [POWER]위력[/POWER]이 10% 증가합니다. [ENEMY]적[/ENEMY]이 쓰러질 때마다 [SPEED]재충전 시간[/SPEED]이 0.3% 감소합니다.`, // coreano
			`沿直线发射一道[PROJECTILE]光束[/PROJECTILE]，有1%的几率恢复1个[HEART]心[/HEART]（每波最多使用2次）。本[PROJECTILE]波次[/PROJECTILE]期间每恢复一个[HEART]心[/HEART]，[POWER]威力[/POWER]提高10%。每当[ENEMY]敌人[/ENEMY]死亡，[SPEED]冷却时间[/SPEED]缩短0.3%。`, // chino
			`Wystrzeliwuje [PROJECTILE]promień[/PROJECTILE] w linii prostej, który ma 1% szansy na przywrócenie 1 [HEART]serca[/HEART] (2 użycia na falę). Za każde [HEART]przywrócone serce[/HEART] podczas tej [PROJECTILE]fali[/PROJECTILE] zwiększa [POWER]moc[/POWER] o 10%. Za każdym razem, gdy [ENEMY]wróg[/ENEMY] ginie, skraca [SPEED]czas odnowienia[/SPEED] o 0,3%.` // polaco
		]
	},
	diamondStorm: {
		id: 'diamondStorm',
		name: [
		  	`Diamond Storm`, // inglés
			`Tormenta de Diamantes`, // español
			`Orage Adamantin`, // francés
			`Tempestade de Diamantes`, // portugués
			`Diamantempesta`, // italiano
			`Diamantsturm`, // alemán
			`ダイヤストーム`, // japonés
			`다이아스톰`, // coreano
			`钻石风暴`, // chino
			`Diamentowa Burza` // polaco
		],
		description: [
			`Select an [SHAPE]area[/SHAPE] to [PROJECTILE]bombard[/PROJECTILE] continuously. [PROJECTILE]Projectiles[/PROJECTILE] explode in an [SHAPE]area[/SHAPE] that increases by 40% for each [HEART]heart restored[/HEART] (up to 200%). The bonus is always 200% if [POKEMON]Carbink[/POKEMON] is on the [PROJECTILE]team[/PROJECTILE].`, // inglés
			`Selecciona un [SHAPE]área[/SHAPE] para [PROJECTILE]bombardear[/PROJECTILE] continuamente. Los [PROJECTILE]proyectiles[/PROJECTILE] explotan en un [SHAPE]área[/SHAPE] que aumenta un 40% por cada [HEART]corazón restaurado[/HEART] (hasta un 200%). La bonificación es siempre del 200% si [POKEMON]Carbink[/POKEMON] está en el [PROJECTILE]equipo[/PROJECTILE].`, // español
			`Sélectionne une [SHAPE]zone[/SHAPE] à [PROJECTILE]bombarder[/PROJECTILE] en continu. Les [PROJECTILE]projectiles[/PROJECTILE] explosent dans une [SHAPE]zone[/SHAPE] qui augmente de 40 % pour chaque [HEART]cœur restauré[/HEART] (jusqu'à 200 %). Le bonus est toujours de 200 % si [POKEMON]Carbink[/POKEMON] est dans l'[PROJECTILE]équipe[/PROJECTILE].`, // francés
			`Selecione uma [SHAPE]área[/SHAPE] para [PROJECTILE]bombardear[/PROJECTILE] continuamente. Os [PROJECTILE]projéteis[/PROJECTILE] explodem em uma [SHAPE]área[/SHAPE] que aumenta em 40% para cada [HEART]coração restaurado[/HEART] (até 200%). O bônus é sempre de 200% se [POKEMON]Carbink[/POKEMON] estiver no [PROJECTILE]time[/PROJECTILE].`, // portugués
			`Seleziona un'[SHAPE]area[/SHAPE] da [PROJECTILE]bombardare[/PROJECTILE] continuamente. I [PROJECTILE]proiettili[/PROJECTILE] esplodono in un'[SHAPE]area[/SHAPE] che aumenta del 40% per ogni [HEART]cuore ripristinato[/HEART] (fino al 200%). Il bonus è sempre del 200% se [POKEMON]Carbink[/POKEMON] è nella [PROJECTILE]squadra[/PROJECTILE].`, // italiano
			`Wähle einen [SHAPE]Bereich[/SHAPE] aus, der kontinuierlich [PROJECTILE]bombardiert[/PROJECTILE] wird. [PROJECTILE]Projektile[/PROJECTILE] explodieren in einem [SHAPE]Bereich[/SHAPE], der sich für jedes [HEART]wiederhergestellte Herz[/HEART] um 40 % vergrößert (bis zu 200 %). Der Bonus beträgt immer 200 %, wenn [POKEMON]Carbink[/POKEMON] im [PROJECTILE]Team[/PROJECTILE] ist.`, // alemán
			`[SHAPE]範囲[/SHAPE]を選択して、継続的に[PROJECTILE]爆撃[/PROJECTILE]する。[PROJECTILE]投射物[/PROJECTILE]は[SHAPE]範囲[/SHAPE]で爆発し、[HEART]回復したハート[/HEART]1個につき40%ずつ大きくなる（最大200%）。[POKEMON]メレシー[/POKEMON]が[PROJECTILE]チーム[/PROJECTILE]にいる場合、ボーナスは常に200%になる。`, // japonés
			`[SHAPE]범위[/SHAPE]를 선택하여 지속적으로 [PROJECTILE]폭격[/PROJECTILE]합니다. [PROJECTILE]투사체[/PROJECTILE]가 [SHAPE]범위[/SHAPE]에서 폭발하며, [HEART]회복한 하트[/HEART] 하나당 40%씩 범위가 증가합니다 (최대 200%). [POKEMON]메레시[/POKEMON]가 [PROJECTILE]팀[/PROJECTILE]에 있으면 보너스는 항상 200%가 됩니다.`, // coreano
			`选择一个[SHAPE]区域[/SHAPE]进行持续[PROJECTILE]轰炸[/PROJECTILE]。[PROJECTILE]投射物[/PROJECTILE]会在[SHAPE]范围[/SHAPE]内爆炸，每恢复一个[HEART]心[/HEART]，范围扩大40%（最多200%）。如果[POKEMON]小碎钻[/POKEMON]在[PROJECTILE]队伍[/PROJECTILE]中，奖励始终为200%。`, // chino
			`Wybierz [SHAPE]obszar[/SHAPE] do ciągłego [PROJECTILE]bombardowania[/PROJECTILE]. [PROJECTILE]Pociski[/PROJECTILE] eksplodują na [SHAPE]obszarze[/SHAPE], który zwiększa się o 40% za każde [HEART]przywrócone serce[/HEART] (maksymalnie 200%). Bonus zawsze wynosi 200%, jeśli [POKEMON]Carbink[/POKEMON] znajduje się w [PROJECTILE]drużynie[/PROJECTILE].` // polaco
		]
	},
	wildboltStorm: {
		id: 'wildboltStorm',
		name: [
			`Wildbolt Storm`, // inglés
			`Electormenta`, // español
			`Typhon Fulgurant`, // francés
			`Tempestade Trovejante`, // portugués
			`Tempesta Tonante`, // italiano
			`Donnerorkan`, // alemán
			`かみなりあらし`, // japonés
			`번개폭풍`, // coreano
			`鸣雷风暴`, // chino
			`Burza Piorunów` // polaco
		],
		description: [
			`If [RAIN]Rain[/RAIN] or [BADRAIN]Heavy Rain[/BADRAIN] is active, override it with [GOODRAIN]Thunder Storm[/GOODRAIN]. If [GOODRAIN]Thunder Storm[/GOODRAIN] is active, it summons a [PROJECTILE]storm[/PROJECTILE] in an [SHAPE]area[/SHAPE] that strikes with 3 to 7 [PROJECTILE]lightning bolts[/PROJECTILE]. [SHAKE]Otherwise, it will not attack[/SHAKE].`, // inglés
			`Si está activa [RAIN]Lluvia[/RAIN] o [BADRAIN]Lluvia Intensa[/BADRAIN], la sustituye por [GOODRAIN]Tormenta Eléctrica[/GOODRAIN]. Si [GOODRAIN]Tormenta Eléctrica[/GOODRAIN] está activa, invoca una [PROJECTILE]tormenta[/PROJECTILE] en un [SHAPE]área[/SHAPE] que lanza de 3 a 7 [PROJECTILE]rayos[/PROJECTILE]. [SHAKE]De lo contrario, no atacará[/SHAKE].`, // español
			`Si [RAIN]Pluie[/RAIN] ou [BADRAIN]Pluie Intense[/BADRAIN] est active, elle est remplacée par [GOODRAIN]Tempête Électrique[/GOODRAIN]. Si [GOODRAIN]Tempête Électrique[/GOODRAIN] est active, elle invoque une [PROJECTILE]tempête[/PROJECTILE] dans une [SHAPE]zone[/SHAPE] qui frappe avec 3 à 7 [PROJECTILE]éclairs[/PROJECTILE]. [SHAKE]Sinon, elle n'attaquera pas[/SHAKE].`, // francés
			`Se [RAIN]Chuva[/RAIN] ou [BADRAIN]Chuva Intensa[/BADRAIN] estiver ativa, ela será substituída por [GOODRAIN]Tempestade Elétrica[/GOODRAIN]. Se [GOODRAIN]Tempestade Elétrica[/GOODRAIN] estiver ativa, invoca uma [PROJECTILE]tempestade[/PROJECTILE] em uma [SHAPE]área[/SHAPE] que atinge com 3 a 7 [PROJECTILE]raios[/PROJECTILE]. [SHAKE]Caso contrário, não atacará[/SHAKE].`, // portugués
			`Se [RAIN]Pioggia[/RAIN] o [BADRAIN]Pioggia Intensa[/BADRAIN] è attiva, la sostituisce con [GOODRAIN]Tempesta Elettrica[/GOODRAIN]. Se [GOODRAIN]Tempesta Elettrica[/GOODRAIN] è attiva, evoca una [PROJECTILE]tempesta[/PROJECTILE] in un'[SHAPE]area[/SHAPE] che colpisce con 3-7 [PROJECTILE]fulmini[/PROJECTILE]. [SHAKE]Altrimenti, non attaccherà[/SHAKE].`, // italiano
			`Wenn [RAIN]Regen[/RAIN] oder [BADRAIN]Starker Regen[/BADRAIN] aktiv ist, wird er durch [GOODRAIN]Gewittersturm[/GOODRAIN] ersetzt. Wenn [GOODRAIN]Gewittersturm[/GOODRAIN] aktiv ist, beschwört es einen [PROJECTILE]Sturm[/PROJECTILE] in einem [SHAPE]Bereich[/SHAPE], der mit 3 bis 7 [PROJECTILE]Blitzen[/PROJECTILE] einschlägt. [SHAKE]Andernfalls greift es nicht an[/SHAKE].`, // alemán
			`[RAIN]雨[/RAIN]または[BADRAIN]大雨[/BADRAIN]が発生している場合、それを[GOODRAIN]雷雨[/GOODRAIN]に上書きする。[GOODRAIN]雷雨[/GOODRAIN]が発生している場合、[SHAPE]範囲[/SHAPE]に[PROJECTILE]嵐[/PROJECTILE]を発生させ、3～7本の[PROJECTILE]雷[/PROJECTILE]を落とす。[SHAKE]それ以外の場合は攻撃しない[/SHAKE]。`, // japonés
			`[RAIN]비[/RAIN] 또는 [BADRAIN]폭우[/BADRAIN]가 활성화되어 있으면 [GOODRAIN]번개폭풍[/GOODRAIN]으로 덮어씁니다. [GOODRAIN]번개폭풍[/GOODRAIN]이 활성화되어 있으면 [SHAPE]범위[/SHAPE]에 [PROJECTILE]폭풍[/PROJECTILE]을 소환하여 3~7개의 [PROJECTILE]번개[/PROJECTILE]를 내리칩니다. [SHAKE]그렇지 않으면 공격하지 않습니다[/SHAKE].`, // coreano
			`如果[RAIN]下雨[/RAIN]或[BADRAIN]暴雨[/BADRAIN]天气正在生效，则将其覆盖为[GOODRAIN]雷暴风暴[/GOODRAIN]。如果[GOODRAIN]雷暴风暴[/GOODRAIN]正在生效，则会在[SHAPE]范围[/SHAPE]内召唤一场[PROJECTILE]暴风雨[/PROJECTILE]，降下3至7道[PROJECTILE]闪电[/PROJECTILE]。[SHAKE]否则不会攻击[/SHAKE]。`, // chino
			`Jeśli aktywny jest [RAIN]Deszcz[/RAIN] lub [BADRAIN]Ulewny Deszcz[/BADRAIN], zastępuje go [GOODRAIN]Burzą Elektryczną[/GOODRAIN]. Jeśli aktywna jest [GOODRAIN]Burza Elektryczna[/GOODRAIN], przywołuje [PROJECTILE]burzę[/PROJECTILE] na [SHAPE]obszarze[/SHAPE], która uderza od 3 do 7 [PROJECTILE]piorunami[/PROJECTILE]. [SHAKE]W przeciwnym razie nie atakuje[/SHAKE].` // polaco
		]
	},
	sandsearStorm: {
		id: 'sandsearStorm',
		name: [
			`Sandsear Storm`, // inglés
			`Simún de Arena`, // español
			`Sable Tempête`, // francés
			`Tempestade de Areia Escaldante`, // portugués
			`Tempesta Sabbiosa`, // italiano
			`Sandorkan`, // alemán
			`ねっさのあらし`, // japonés
			`열사의폭풍`, // coreano
			`热沙风暴`, // chino
			`Burza Piasków` // polaco
		],
		description: [
			`If [SANDSTORM]sandstorm[/SANDSTORM] is active, override it with [SANDAVALANCHE]Sand Avalanche[/SANDAVALANCHE]. If [SANDAVALANCHE]Sand Avalanche[/SANDAVALANCHE] is active, it summons a [PROJECTILE]wide dune[/PROJECTILE] that hits all [ENEMY]enemies[/ENEMY] it passes through. [SHAKE]Otherwise, it will not attack[/SHAKE].`, // inglés
			`Si hay [SANDSTORM]tormenta de arena[/SANDSTORM], la sustituye por [SANDAVALANCHE]Avalancha de Arena[/SANDAVALANCHE]. Si hay [SANDAVALANCHE]Avalancha de Arena[/SANDAVALANCHE], invoca una [PROJECTILE]duna ancha[/PROJECTILE] que golpea a todos los [ENEMY]enemigos[/ENEMY] que atraviesa. [SHAKE]De lo contrario, no atacará[/SHAKE].`, // español
			`Si une [SANDSTORM]tempête de sable[/SANDSTORM] est active, elle la remplace par [SANDAVALANCHE]Avalanche de Sable[/SANDAVALANCHE]. Si [SANDAVALANCHE]Avalanche de Sable[/SANDAVALANCHE] est active, elle invoque une [PROJECTILE]large dune[/PROJECTILE] qui touche tous les [ENEMY]ennemis[/ENEMY] qu’elle traverse. [SHAKE]Sinon, elle n’attaquera pas[/SHAKE].`, // francés
			`Se [SANDSTORM]tempestade de areia[/SANDSTORM] estiver ativa, substitui-a por [SANDAVALANCHE]Avalanche de Areia[/SANDAVALANCHE]. Se [SANDAVALANCHE]Avalanche de Areia[/SANDAVALANCHE] estiver ativa, invoca uma [PROJECTILE]duna larga[/PROJECTILE] que atinge todos os [ENEMY]inimigos[/ENEMY] que atravessa. [SHAKE]Caso contrário, não atacará[/SHAKE].`, // portugués
			`Se [SANDSTORM]tempesta di sabbia[/SANDSTORM] è attiva, la sostituisce con [SANDAVALANCHE]Valanga di Sabbia[/SANDAVALANCHE]. Se [SANDAVALANCHE]Valanga di Sabbia[/SANDAVALANCHE] è attiva, evoca una [PROJECTILE]grande duna[/PROJECTILE] che colpisce tutti i [ENEMY]nemici[/ENEMY] che attraversa. [SHAKE]Altrimenti, non attaccherà[/SHAKE].`, // italiano
			`Wenn [SANDSTORM]Sandsturm[/SANDSTORM] aktiv ist, wird er durch [SANDAVALANCHE]Sandlawine[/SANDAVALANCHE] ersetzt. Wenn [SANDAVALANCHE]Sandlawine[/SANDAVALANCHE] aktiv ist, beschwört sie eine [PROJECTILE]breite Düne[/PROJECTILE], die alle [ENEMY]Gegner[/ENEMY] trifft, durch die sie hindurchgeht. [SHAKE]Andernfalls greift sie nicht an[/SHAKE].`, // alemán
			`［SANDSTORM］すなあらし［/SANDSTORM］が発生している場合、［SANDAVALANCHE］すなあらしなだれ［/SANDAVALANCHE］に上書きする。［SANDAVALANCHE］すなあらしなだれ［/SANDAVALANCHE］が発生している場合、通過したすべての［ENEMY］敵［/ENEMY］に命中する［PROJECTILE］幅広い砂丘［/PROJECTILE］を呼び出す。［SHAKE］それ以外の場合は攻撃しない。［/SHAKE］`, // japonés
			`［SANDSTORM］모래바람［/SANDSTORM］이 활성화되어 있다면 [SANDAVALANCHE]모래 눈사태[/SANDAVALANCHE]로 덮어씁니다. [SANDAVALANCHE]모래 눈사태[/SANDAVALANCHE]가 활성화되어 있다면 지나가는 모든 [ENEMY]적[/ENEMY]을 공격하는 [PROJECTILE]넓은 모래 언덕[/PROJECTILE]을 소환합니다. [SHAKE]그렇지 않으면 공격하지 않습니다.[/SHAKE]`, // coreano
			`如果[SANDSTORM]沙暴[/SANDSTORM]处于激活状态，则将其替换为[SANDAVALANCHE]沙尘雪崩[/SANDAVALANCHE]。如果[SANDAVALANCHE]沙尘雪崩[/SANDAVALANCHE]处于激活状态，则召唤一道[PROJECTILE]宽阔沙丘[/PROJECTILE]，攻击其经过的所有[ENEMY]敌人[/ENEMY]。[SHAKE]否则不会攻击。[/SHAKE]`, // chino
			`Jeśli aktywna jest [SANDSTORM]burza piaskowa[/SANDSTORM], zastępuje ją [SANDAVALANCHE]Lawiną Piaskową[/SANDAVALANCHE]. Jeśli aktywna jest [SANDAVALANCHE]Lawina Piaskowa[/SANDAVALANCHE], przywołuje [PROJECTILE]szeroką wydmę[/PROJECTILE], która trafia wszystkich [ENEMY]wrogów[/ENEMY], przez których przechodzi. [SHAKE]W przeciwnym razie nie zaatakuje.[/SHAKE].` // polaco
		]
	},
	bleakwindStorm: {
		id: 'bleakwindStorm',
		name: [
			`Bleakwind Storm`, // inglés
			`Vendaval Gélido`, // español
			`Typhon Hivernal`, // francés
			`Tempestade de Inverno`, // portugués
			`Tempesta Boreale`, // italiano
			`Polarorkan`, // alemán
			`こがらしあらし`, // japonés
			`찬바람폭풍`, // coreano
			`枯叶风暴`, // chino
			`Zimowa Burza` // polaco
		],
		description: [
			`Applies [STRONGWINDS]Strong Winds[/STRONGWINDS]. If [STRONGWINDS]Strong Winds[/STRONGWINDS] is active, it summons [PROJECTILE]tornadoes[/PROJECTILE] that travel in an [SHAPE]oscillating pattern[/SHAPE], dealing damage to and displacing all [ENEMY]enemies[/ENEMY] they pass through. [SHAKE]Otherwise, it will not attack[/SHAKE].`, // inglés
			`Aplica [STRONGWINDS]Turbulencias[/STRONGWINDS]. Si [STRONGWINDS]Turbulencias[/STRONGWINDS] está activo, invoca [PROJECTILE]tornados[/PROJECTILE] que se desplazan siguiendo un [SHAPE]patrón oscilante[/SHAPE], dañando y desplazando a todos los [ENEMY]enemigos[/ENEMY] que atraviesan. [SHAKE]De lo contrario, no atacará[/SHAKE].`, // español
			`Applique [STRONGWINDS]Vents Forts[/STRONGWINDS]. Si [STRONGWINDS]Vents Forts[/STRONGWINDS] est actif, invoque des [PROJECTILE]tornades[/PROJECTILE] qui se déplacent selon un [SHAPE]mouvement oscillant[/SHAPE], infligeant des dégâts et repoussant tous les [ENEMY]ennemis[/ENEMY] qu'elles traversent. [SHAKE]Sinon, elle n'attaquera pas[/SHAKE].`, // francés
			`Aplica [STRONGWINDS]Ventos Fortes[/STRONGWINDS]. Se [STRONGWINDS]Ventos Fortes[/STRONGWINDS] estiver ativo, invoca [PROJECTILE]tornados[/PROJECTILE] que se deslocam em um [SHAPE]padrão oscilante[/SHAPE], causando dano e deslocando todos os [ENEMY]inimigos[/ENEMY] que atravessarem. [SHAKE]Caso contrário, não atacará[/SHAKE].`, // portugués
			`Applica [STRONGWINDS]Venti Forti[/STRONGWINDS]. Se [STRONGWINDS]Venti Forti[/STRONGWINDS] è attivo, evoca [PROJECTILE]tornado[/PROJECTILE] che si muovono secondo uno [SHAPE]schema oscillante[/SHAPE], infliggendo danni e spostando tutti i [ENEMY]nemici[/ENEMY] che attraversano. [SHAKE]Altrimenti, non attaccherà[/SHAKE].`, // italiano
			`Verursacht [STRONGWINDS]Starken Wind[/STRONGWINDS]. Wenn [STRONGWINDS]Starker Wind[/STRONGWINDS] aktiv ist, beschwört es [PROJECTILE]Tornados[/PROJECTILE], die sich in einem [SHAPE]oszillierenden Muster[/SHAPE] bewegen, allen [ENEMY]Gegnern[/ENEMY], die sie durchqueren, Schaden zufügen und sie verdrängen. [SHAKE]Andernfalls greift es nicht an[/SHAKE].`, // alemán
			`[STRONGWINDS]らんきりゅう[/STRONGWINDS]を発生させる。[STRONGWINDS]らんきりゅう[/STRONGWINDS]が発生している場合、[SHAPE]揺れ動く軌道[/SHAPE]で移動する[PROJECTILE]竜巻[/PROJECTILE]を発生させ、通過したすべての[ENEMY]敵[/ENEMY]にダメージを与えて押し流す。[SHAKE]それ以外の場合は攻撃しない[/SHAKE]。`, // japonés
			`[STRONGWINDS]강풍[/STRONGWINDS]을 발생시킵니다. [STRONGWINDS]강풍[/STRONGWINDS]이 활성화되어 있으면 [SHAPE]진동하는 패턴[/SHAPE]으로 이동하는 [PROJECTILE]토네이도[/PROJECTILE]를 소환하여 지나가는 모든 [ENEMY]적[/ENEMY]에게 피해를 주고 밀어냅니다. [SHAKE]그렇지 않으면 공격하지 않습니다[/SHAKE].`, // coreano
			`施加[STRONGWINDS]乱流[/STRONGWINDS]。如果[STRONGWINDS]乱流[/STRONGWINDS]正在生效，则会召唤以[SHAPE]摆动轨迹[/SHAPE]移动的[PROJECTILE]龙卷风[/PROJECTILE]，对其经过的所有[ENEMY]敌人[/ENEMY]造成伤害并将其击退。[SHAKE]否则不会攻击[/SHAKE]。`, // chino
			`Nakłada [STRONGWINDS]Silne Wiatry[/STRONGWINDS]. Jeśli [STRONGWINDS]Silne Wiatry[/STRONGWINDS] są aktywne, przywołuje [PROJECTILE]tornada[/PROJECTILE], które poruszają się po [SHAPE]oscylującym torze[/SHAPE], zadając obrażenia i przemieszczając wszystkich [ENEMY]wrogów[/ENEMY], przez których przechodzą. [SHAKE]W przeciwnym razie nie atakuje[/SHAKE].` // polaco
		]
	},
	trickOrTreat: {
		id: 'trickOrTreat',
		name: [
			`Trick-or-Treat`, // inglés
			`Truco o Trato`, // español
			`Halloween`, // francés
			`Travessura ou Gostosura`, // portugués
			`Dolcetto o Scherzetto`, // italiano
			`Süßes oder Saures`, // alemán
			`ハロウィン`, // japonés
			`트릭 오어 트릿`, // coreano
			`不给糖就捣蛋`, // chino
			`Cukierek albo psikus` // polaco
		],
		description: [
			`[PROJECTILE]Projectiles[/PROJECTILE] are [ADMIN]randomly[/ADMIN] selected from [CANDY]candies[/CANDY], [SPIDER]spiders[/SPIDER], and... [APPLE]apples[/APPLE]? [SHAKE]Gross...[/SHAKE]`, // inglés
			`Los [PROJECTILE]proyectiles[/PROJECTILE] se eligen [ADMIN]aleatoriamente[/ADMIN] entre [CANDY]caramelos[/CANDY], [SPIDER]arañas[/SPIDER] y... ¿[APPLE]manzanas[/APPLE]? [SHAKE]Qué asco...[/SHAKE]`, // español
			`Les [PROJECTILE]projectiles[/PROJECTILE] sont choisis [ADMIN]aléatoirement[/ADMIN] parmi des [CANDY]bonbons[/CANDY], des [SPIDER]araignées[/SPIDER] et... des [APPLE]pommes[/APPLE] ? [SHAKE]Beurk...[/SHAKE]`, // francés
			`Os [PROJECTILE]projéteis[/PROJECTILE] são escolhidos [ADMIN]aleatoriamente[/ADMIN] entre [CANDY]doces[/CANDY], [SPIDER]aranhas[/SPIDER] e... [APPLE]maçãs[/APPLE]? [SHAKE]Que nojo...[/SHAKE]`, // portugués
			`I [PROJECTILE]proiettili[/PROJECTILE] vengono scelti [ADMIN]casualmente[/ADMIN] tra [CANDY]caramelle[/CANDY], [SPIDER]ragni[/SPIDER] e... [APPLE]mele[/APPLE]? [SHAKE]Che schifo...[/SHAKE]`, // italiano
			`[PROJECTILE]Projektile[/PROJECTILE] werden [ADMIN]zufällig[/ADMIN] aus [CANDY]Süßigkeiten[/CANDY], [SPIDER]Spinnen[/SPIDER] und ... [APPLE]Äpfeln[/APPLE] ausgewählt? [SHAKE]Igitt ...[/SHAKE]`, // alemán
			`[PROJECTILE]弾[/PROJECTILE]は[CANDY]キャンディー[/CANDY]、[SPIDER]クモ[/SPIDER]、そして……[APPLE]リンゴ[/APPLE]？から[ADMIN]ランダムに[/ADMIN]選ばれる。[SHAKE]うわっ……[/SHAKE]`, // japonés
			`[PROJECTILE]투사체[/PROJECTILE]는 [CANDY]사탕[/CANDY], [SPIDER]거미[/SPIDER], 그리고... [APPLE]사과[/APPLE] 중에서 [ADMIN]무작위로[/ADMIN] 선택된다? [SHAKE]으... 징그러워...[/SHAKE]`, // coreano
			`[PROJECTILE]投射物[/PROJECTILE]会从[CANDY]糖果[/CANDY]、[SPIDER]蜘蛛[/SPIDER]和……[APPLE]苹果[/APPLE]中[ADMIN]随机[/ADMIN]选出？[SHAKE]好恶心……[/SHAKE]`, // chino
			`[PROJECTILE]Pociski[/PROJECTILE] są wybierane [ADMIN]losowo[/ADMIN] spośród [CANDY]cukierków[/CANDY], [SPIDER]pająków[/SPIDER] i... [APPLE]jabłek[/APPLE]? [SHAKE]Fuj...[/SHAKE]` // polaco
		]
	},
	magmaStorm: {
		id: 'magmaStorm',
		name: [
			`Magma Storm`, // inglés
			`Lluvia Ígnea`, // español
			`Vortex Magma`, // francés
			`Tempestade de Magma`, // portugués
			`Magmaclisma`, // italiano
			`Lavasturm`, // alemán
			`マグマストーム`, // japonés
			`마그마스톰`, // coreano
			`熔岩风暴`, // chino
			`Magma Storm` // polaco
		],
		description: [
			`[PROJECTILE]Projectiles[/PROJECTILE] explode in an [SHAPE]area[/SHAPE], causing half damage to nearby [ENEMY]enemies[/ENEMY] and inflicting [BURN]burns[/BURN]. When a burning enemy dies, it triggers a [MAGMA]magma explosion[/MAGMA].`, // inglés
			`Los [PROJECTILE]proyectiles[/PROJECTILE] explotan en un [SHAPE]área[/SHAPE], causando la mitad de daño a los [ENEMY]enemigos[/ENEMY] cercanos e infligiendo [BURN]quemaduras[/BURN]. Cuando un enemigo quemado muere, provoca una [MAGMA]explosión de magma[/MAGMA].`, // español
			`Les [PROJECTILE]projectiles[/PROJECTILE] explosent dans une [SHAPE]zone[/SHAPE], infligeant la moitié des dégâts aux [ENEMY]ennemis[/ENEMY] proches et leur infligeant des [BURN]brûlures[/BURN]. Lorsqu'un ennemi brûlé meurt, il déclenche une [MAGMA]explosion de magma[/MAGMA].`, // francés
			`Os [PROJECTILE]projéteis[/PROJECTILE] explodem em uma [SHAPE]área[/SHAPE], causando metade do dano aos [ENEMY]inimigos[/ENEMY] próximos e causando [BURN]queimaduras[/BURN]. Quando um inimigo queimado morre, ele desencadeia uma [MAGMA]explosão de magma[/MAGMA].`, // portugués
			`I [PROJECTILE]proiettili[/PROJECTILE] esplodono in un'[SHAPE]area[/SHAPE], infliggendo metà dei danni ai [ENEMY]nemici[/ENEMY] vicini e infliggendo [BURN]bruciature[/BURN]. Quando un nemico bruciato muore, innesca un'[MAGMA]esplosione di magma[/MAGMA].`, // italiano
			`[PROJECTILE]Projektile[/PROJECTILE] explodieren in einem [SHAPE]Bereich[/SHAPE], verursachen bei nahegelegenen [ENEMY]Gegnern[/ENEMY] halben Schaden und fügen ihnen [BURN]Verbrennungen[/BURN] zu. Wenn ein verbrannter Gegner stirbt, löst er eine [MAGMA]Magmaexplosion[/MAGMA] aus.`, // alemán
			`[PROJECTILE]投射物[/PROJECTILE]は[SHAPE]範囲[/SHAPE]で爆発し、近くの[ENEMY]敵[/ENEMY]に半分のダメージを与えて[BURN]やけど[/BURN]を負わせる。やけどした敵が倒れると、[MAGMA]マグマ爆発[/MAGMA]を引き起こす。`, // japonés
			`[PROJECTILE]투사체[/PROJECTILE]가 [SHAPE]범위[/SHAPE]에서 폭발하여 주변 [ENEMY]적[/ENEMY]에게 절반의 피해를 주고 [BURN]화상[/BURN]을 입힙니다. 화상을 입은 적이 쓰러지면 [MAGMA]마그마 폭발[/MAGMA]을 일으킵니다.`, // coreano
			`[PROJECTILE]投射物[/PROJECTILE]会在[SHAPE]范围[/SHAPE]内爆炸，对附近的[ENEMY]敌人[/ENEMY]造成一半伤害并施加[BURN]灼伤[/BURN]。被灼伤的敌人死亡时，会触发[MAGMA]岩浆爆炸[/MAGMA]。`, // chino
			`[PROJECTILE]Pociski[/PROJECTILE] eksplodują na [SHAPE]obszarze[/SHAPE], zadając pobliskim [ENEMY]wrogom[/ENEMY] połowę obrażeń i nakładając [BURN]podpalenie[/BURN]. Gdy podpalony wróg zginie, wywołuje [MAGMA]eksplozję magmy[/MAGMA].` // polaco
		]
	},
	charmedCharm: {
		id: 'charmedCharm',
		name:[
			`Charmed Charm`, // inglés
			`Amuleto Encantado`, // español
			`Talisman Charme`, // francés
			`Amuleto Encantado`, // portugués
			`Amuleto Incantato`, // italiano
			`Verzauberter Talisman`, // alemán
			`チャームチャーム`, // japonés
			`참드 참`, // coreano
			`魅惑护符`, // chino
			`Urokliwy Amulet` // polaco
		],
		description: [
			`Fires 2 [PROJECTILE]waves[/PROJECTILE] and increases [POWER]power[/POWER] by 5% for each [HEART]heart restored[/HEART] during this [PROJECTILE]wave[/PROJECTILE]. Summons [RB]Raging Blossom[/RB].`, // inglés
			`Dispara 2 [PROJECTILE]ondas[/PROJECTILE] y aumenta el [POWER]poder[/POWER] un 5% por cada [HEART]corazón recuperado[/HEART] durante esta [PROJECTILE]onda[/PROJECTILE]. Invoca [RB]Floración Furiosa[/RB].`, // español
			`Lance 2 [PROJECTILE]ondes[/PROJECTILE] et augmente la [POWER]puissance[/POWER] de 5 % pour chaque [HEART]cœur récupéré[/HEART] pendant cette [PROJECTILE]onde[/PROJECTILE]. Invoque [RB]Floraison Furieuse[/RB].`, // francés
			`Dispara 2 [PROJECTILE]ondas[/PROJECTILE] e aumenta o [POWER]poder[/POWER] em 5% por cada [HEART]coração recuperado[/HEART] durante esta [PROJECTILE]onda[/PROJECTILE]. Invoca [RB]Floração Furiosa[/RB].`, // portugués
			`Lancia 2 [PROJECTILE]onde[/PROJECTILE] e aumenta la [POWER]potenza[/POWER] del 5% per ogni [HEART]cuore recuperato[/HEART] durante quest'[PROJECTILE]onda[/PROJECTILE]. Evoca [RB]Fioritura Furiosa[/RB].`, // italiano
			`Feuert 2 [PROJECTILE]Wellen[/PROJECTILE] ab und erhöht die [POWER]Stärke[/POWER] um 5 % für jedes [HEART]wiederhergestellte Herz[/HEART] während dieser [PROJECTILE]Welle[/PROJECTILE]. Beschwört [RB]Wutblüte[/RB].`, // alemán
			`[PROJECTILE]波[/PROJECTILE]を2回放ち、この[PROJECTILE]波[/PROJECTILE]の間に回復した[HEART]ハート[/HEART]1個につき、[POWER]威力[/POWER]が5%上昇する。[RB]怒りの花[/RB]を召喚する。`, // japonés
			`[PROJECTILE]파동[/PROJECTILE]을 2회 발사하고, 이 [PROJECTILE]파동[/PROJECTILE] 동안 회복한 [HEART]하트[/HEART] 하나당 [POWER]위력[/POWER]이 5% 증가한다. [RB]분노의 꽃[/RB]을 소환한다.`, // coreano
			`发射2道[PROJECTILE]波[/PROJECTILE]，并在这道[PROJECTILE]波[/PROJECTILE]期间每恢复一颗[HEART]心心[/HEART]，[POWER]威力[/POWER]就提高5%。召唤[RB]狂怒之花[/RB]。`, // chino
			`Wystrzeliwuje 2 [PROJECTILE]fale[/PROJECTILE] i zwiększa [POWER]moc[/POWER] o 5% za każde [HEART]odzyskane serce[/HEART] podczas tej [PROJECTILE]fali[/PROJECTILE]. Przywołuje [RB]Gniewny Kwiat[/RB].` // polaco
		]
	},
	naturesJudgement: {
		id: 'naturesJudgement',
		name: [
			`Nature's Judgement`, // inglés
			`Sentencia de la Naturaleza`, // español
			`Jugement de la Nature`, // francés
			`Julgamento da Natureza`, // portugués
			`Giudizio della Natura`, // italiano
			`Urteil der Natur`, // alemán
			`しぜんのさばき`, // japonés
			`자연의심판`, // coreano
			`自然之判`, // chino
			`Osąd Natury` // polaco
		],
		description: [
			`[PROJECTILE]Projectiles[/PROJECTILE] explode in an [SHAPE]area[/SHAPE], causing half damage to nearby [ENEMY]enemies[/ENEMY]. Summons [BF]Brutal Fauna[/BF].`, // inglés
			`Los [PROJECTILE]proyectiles[/PROJECTILE] explotan en un [SHAPE]área[/SHAPE], causando la mitad de daño a los [ENEMY]enemigos[/ENEMY] cercanos. Invoca [BF]Fauna Brutal[/BF].`, // español
			`Les [PROJECTILE]projectiles[/PROJECTILE] explosent dans une [SHAPE]zone[/SHAPE], infligeant la moitié des dégâts aux [ENEMY]ennemis[/ENEMY] proches. Invoque [BF]Faune Brutale[/BF].`, // francés
			`Os [PROJECTILE]projéteis[/PROJECTILE] explodem em uma [SHAPE]área[/SHAPE], causando metade do dano aos [ENEMY]inimigos[/ENEMY] próximos. Invoca [BF]Fauna Brutal[/BF].`, // portugués
			`I [PROJECTILE]proiettili[/PROJECTILE] esplodono in un'[SHAPE]area[/SHAPE], infliggendo metà dei danni ai [ENEMY]nemici[/ENEMY] vicini. Evoca [BF]Fauna Brutale[/BF].`, // italiano
			`[PROJECTILE]Projektile[/PROJECTILE] explodieren in einem [SHAPE]Bereich[/SHAPE] und verursachen bei nahegelegenen [ENEMY]Gegnern[/ENEMY] halben Schaden. Beschwört [BF]Brutale Fauna[/BF].`, // alemán
			`[PROJECTILE]投射物[/PROJECTILE]は[SHAPE]範囲[/SHAPE]で爆発し、近くの[ENEMY]敵[/ENEMY]に半分のダメージを与える。[BF]残酷な野生[/BF]を呼び出す。`, // japonés
			`[PROJECTILE]투사체[/PROJECTILE]가 [SHAPE]범위[/SHAPE]에서 폭발하여 주변 [ENEMY]적[/ENEMY]에게 절반의 피해를 줍니다. [BF]잔혹한 야생[/BF]을 소환합니다.`, // coreano
			`[PROJECTILE]投射物[/PROJECTILE]会在[SHAPE]范围[/SHAPE]内爆炸，对附近的[ENEMY]敌人[/ENEMY]造成一半伤害。召唤[BF]残暴野性[/BF]。`, // chino
			`[PROJECTILE]Pociski[/PROJECTILE] eksplodują na [SHAPE]obszarze[/SHAPE], zadając pobliskim [ENEMY]wrogom[/ENEMY] połowę obrażeń. Przywołuje [BF]Brutalną Faunę[/BF].` // polaco
		]
	},
	machBolt: {
		id: 'machBolt',
		name: [
			`Mach Bolt`, // inglés
			`Rayo Mach`, // español
			`Éclair Mach`, // francés
			`Raio Mach`, // portugués
			`Fulmine Mach`, // italiano
			`Mach-Blitz`, // alemán
			`マッハボルト`, // japonés
			`마하볼트`, // coreano
			`马赫电击`, // chino
			`Machowy Piorun` // polaco
		],
		description: [
			`Every 40th attack is a [PROJECTILE]piercing beam[/PROJECTILE] that [STUN]stuns[/STUN] [ENEMY]all enemies[/ENEMY] it hits for 2 seconds. Summons [ER]Erratic Static[/ER].`, // inglés
			`Cada 40.º ataque es un [PROJECTILE]rayo perforante[/PROJECTILE] que [STUN]aturde[/STUN] durante 2 segundos a todos los [ENEMY]enemigos[/ENEMY] que golpea. Invoca [ER]Estática Errática[/ER].`, // español
			`Toutes les 40 attaques, un [PROJECTILE]rayon perforant[/PROJECTILE] est lancé et [STUN]étourdit[/STUN] pendant 2 secondes tous les [ENEMY]ennemis[/ENEMY] qu'il touche. Invoque [ER]Électricité Erratique[/ER].`, // francés
			`A cada 40 ataques, um [PROJECTILE]raio perfurante[/PROJECTILE] é disparado e [STUN]atordoa[/STUN] por 2 segundos todos os [ENEMY]inimigos[/ENEMY] atingidos. Invoca [ER]Eletricidade Errática[/ER].`, // portugués
			`Ogni 40° attacco è un [PROJECTILE]raggio perforante[/PROJECTILE] che [STUN]stordisce[/STUN] per 2 secondi tutti i [ENEMY]nemici[/ENEMY] che colpisce. Evoca [ER]Elettricità Erratica[/ER].`, // italiano
			`Jeder 40. Angriff ist ein durchdringender [PROJECTILE]Strahl[/PROJECTILE], der alle [ENEMY]Gegner[/ENEMY], die er trifft, 2 Sekunden lang [STUN]betäubt[/STUN]. Beschwört [ER]Unbeständige Elektrizität[/ER].`, // alemán
			`40回目の攻撃は貫通する[PROJECTILE]ビーム[/PROJECTILE]となり、命中したすべての[ENEMY]敵[/ENEMY]を2秒間[STUN]ひるませる[/STUN]。[ER]不安定な静電気[/ER]を呼び出す。`, // japonés
			`40번째 공격마다 관통하는 [PROJECTILE]빔[/PROJECTILE]을 발사하여 적중한 모든 [ENEMY]적[/ENEMY]을 2초 동안 [STUN]기절[/STUN]시킵니다. [ER]불안정한 정전기[/ER]를 소환합니다.`, // coreano
			`每第40次攻击会发射一道[PROJECTILE]穿透光束[/PROJECTILE]，使其命中的所有[ENEMY]敌人[/ENEMY]眩晕2秒。召唤[ER]不稳定静电[/ER]。`, // chino
			`Co 40. atak jest przebijającym [PROJECTILE]promieniem[/PROJECTILE], który [STUN]ogłusza[/STUN] na 2 sekundy wszystkich trafionych [ENEMY]wrogów[/ENEMY]. Przywołuje [ER]Niestabilną Elektryczność[/ER].` // polaco
		]
	},
	spiralDrain: {
		id: 'spiralDrain',
		name: [
			`Spiral Drain`, // inglés
			`Drenaje Espiral`, // español
			`Drainage Spiral`, // francés
			`Drenagem Espiral`, // portugués
			`Drenaggio a Spirale`, // italiano
			`Spiraldrain`, // alemán
			`スパイラルドレイン`, // japonés
			`스파이럴 드레인`, // coreano
			`螺旋吸取`, // chino
			`Spiralny Drenaż` // polaco
		],
		description: [
			`[PROJECTILE]Projectiles orbit[/PROJECTILE] and deal additional damage equal to [HP]3% MAX HP[/HP] of the [ENEMY]enemy[/ENEMY]. Does not work against [ENEMY]bosses[/ENEMY]. Summons [SW]Serene Waves[/SW].`, // inglés
			`Los [PROJECTILE]proyectiles orbitan[/PROJECTILE] y causan daño adicional igual al [HP]3% de la vida máxima[/HP] del [ENEMY]enemigo[/ENEMY]. No funciona contra [ENEMY]jefes[/ENEMY]. Invoca [SW]Ondas Serenas[/SW].`, // español
			`Les [PROJECTILE]projectiles orbitent[/PROJECTILE] et infligent des dégâts supplémentaires équivalents à [HP]3 % des PV max[/HP] de l'[ENEMY]ennemi[/ENEMY]. Ne fonctionne pas contre les [ENEMY]boss[/ENEMY]. Invoque [SW]Vagues Sereines[/SW].`, // francés
			`Os [PROJECTILE]projéteis orbitam[/PROJECTILE] e causam dano adicional igual a [HP]3% do HP máximo[/HP] do [ENEMY]inimigo[/ENEMY]. Não funciona contra [ENEMY]chefes[/ENEMY]. Invoca [SW]Ondas Serenas[/SW].`, // portugués
			`I [PROJECTILE]proiettili orbitano[/PROJECTILE] e infliggono danni aggiuntivi pari al [HP]3% degli HP massimi[/HP] del [ENEMY]nemico[/ENEMY]. Non funziona contro i [ENEMY]boss[/ENEMY]. Evoca [SW]Onde Sereno[/SW].`, // italiano
			`[PROJECTILE]Projektile kreisen[/PROJECTILE] und verursachen zusätzlichen Schaden in Höhe von [HP]3 % der maximalen KP[/HP] des [ENEMY]Gegners[/ENEMY]. Funktioniert nicht gegen [ENEMY]Bosse[/ENEMY]. Beschwört [SW]Sanfte Wellen[/SW].`, // alemán
			`[PROJECTILE]投射物が周囲を回り[/PROJECTILE]、[ENEMY]敵[/ENEMY]の[HP]最大HPの3%[/HP]に相当する追加ダメージを与える。[ENEMY]ボス[/ENEMY]には効果がない。[SW]穏やかな波[/SW]を呼び出す。`, // japonés
			`[PROJECTILE]투사체가 주위를 회전하며[/PROJECTILE] [ENEMY]적[/ENEMY]의 [HP]최대 HP의 3%[/HP]에 해당하는 추가 피해를 줍니다. [ENEMY]보스[/ENEMY]에게는 효과가 없습니다. [SW]고요한 파동[/SW]을 소환합니다.`, // coreano
			`[PROJECTILE]投射物环绕[/PROJECTILE]并造成额外伤害，伤害值相当于[ENEMY]敌人[/ENEMY][HP]最大生命值的3%[/HP]。对[ENEMY]首领[/ENEMY]无效。召唤[SW]宁静波浪[/SW]。`, // chino
			`[PROJECTILE]Pociski orbitują[/PROJECTILE] i zadają dodatkowe obrażenia równe [HP]3% maksymalnego HP[/HP] [ENEMY]wroga[/ENEMY]. Nie działa na [ENEMY]bossów[/ENEMY]. Przywołuje [SW]Spokojne Fale[/SW].` // polaco
		]
	},
	grimNeigh: {
		id: 'grimNeigh',
		name: [
		    'Grim Neigh', // inglés
			'Relincho Negro', // español
			'Présence Faucheuse', // francés
			'Neigh Sinistro', // portugués
			'Peronero', // italiano
			'Phantomschweif', // alemán
			'くろのいななき', // japonés
			'혼의울음', // coreano
			'흑마의 울음', // chino
			'Grim Neigh' // polaco
		],
		description: [
			`Can hit [ENEMY]invisible enemies[/ENEMY]. Each time an [ENEMY]enemy[/ENEMY] dies, increases [POWER]Power[/POWER] by 3 and [CRITICAL]Critical Chance[/CRITICAL] by 1%.`, // inglés
			`Puede golpear a [ENEMY]enemigos invisibles[/ENEMY]. Cada vez que un [ENEMY]enemigo[/ENEMY] muere, aumenta el [POWER]Poder[/POWER] en 3 y la [CRITICAL]Probabilidad de Crítico[/CRITICAL] en un 1%.`, // español
			`Peut toucher les [ENEMY]ennemis invisibles[/ENEMY]. Chaque fois qu'un [ENEMY]ennemi[/ENEMY] meurt, augmente la [POWER]Puissance[/POWER] de 3 et la [CRITICAL]Chance de Coup Critique[/CRITICAL] de 1 %.`, // francés
			`Pode atingir [ENEMY]inimigos invisíveis[/ENEMY]. Cada vez que um [ENEMY]inimigo[/ENEMY] morre, aumenta o [POWER]Poder[/POWER] em 3 e a [CRITICAL]Chance de Acerto Crítico[/CRITICAL] em 1%.`, // portugués
			`Può colpire i [ENEMY]nemici invisibili[/ENEMY]. Ogni volta che un [ENEMY]nemico[/ENEMY] muore, aumenta la [POWER]Potenza[/POWER] di 3 e la [CRITICAL]Probabilità di Critico[/CRITICAL] dell'1%.`, // italiano
			`Kann [ENEMY]unsichtbare Gegner[/ENEMY] treffen. Jedes Mal, wenn ein [ENEMY]Gegner[/ENEMY] stirbt, erhöht es [POWER]Kraft[/POWER] um 3 und die [CRITICAL]Kritische Trefferchance[/CRITICAL] um 1 %.`, // alemán
			`[ENEMY]見えない敵[/ENEMY]にも攻撃できる。[ENEMY]敵[/ENEMY]が1体倒れるたびに、[POWER]パワー[/POWER]が3、[CRITICAL]急所率[/CRITICAL]が1%増加する。`, // japonés
			`[ENEMY]투명한 적[/ENEMY]을 공격할 수 있습니다. [ENEMY]적[/ENEMY]이 쓰러질 때마다 [POWER]위력[/POWER]이 3 증가하고 [CRITICAL]급소 확률[/CRITICAL]이 1% 증가합니다.`, // coreano
			`可以攻击[ENEMY]隐形敌人[/ENEMY]。[ENEMY]敌人[/ENEMY]每次死亡时，[POWER]威力[/POWER]增加3，[CRITICAL]暴击率[/CRITICAL]增加1%。`, // chino
			`Może trafiać [ENEMY]niewidzialnych wrogów[/ENEMY]. Za każdym razem, gdy [ENEMY]wróg[/ENEMY] ginie, zwiększa [POWER]Moc[/POWER] o 3 i [CRITICAL]Szansę na Trafienie Krytyczne[/CRITICAL] o 1%.` // polaco
		]
	},
	ceaselessEdge: {
		id: 'ceaselessEdge',
		name: [
		    `Ceaseless Edge`, // inglés
			`Tajo Metralla`, // español
			`Vagues à Lames`, // francés
			`Lâmina Incessante`, // portugués
			`Lama Milleflutti`, // italiano
			`Klingenschwall`, // alemán
			`ひけん・ちえなみ`, // japonés
			`비검천중파`, // coreano
			`秘劍・千重濤`, // chino
			`Nieustanne Ostrze` // polaco
		],
		description: [
			`Alternates [PROJECTILE]sword sweeps[/PROJECTILE], hitting [ENEMY]multiple enemies[/ENEMY]. After a [CRITICAL]critical hit[/CRITICAL], it immediately attacks again. This unit's [CRITICAL]critical hit chance[/CRITICAL] is capped at 90%.`, // inglés
			`Alterna [PROJECTILE]barridos de espada[/PROJECTILE], golpeando a [ENEMY]varios enemigos[/ENEMY]. Después de un [CRITICAL]golpe crítico[/CRITICAL], vuelve a atacar inmediatamente. La [CRITICAL]probabilidad de golpe crítico[/CRITICAL] de esta unidad está limitada al 90%.`, // español
			`Alterne des [PROJECTILE]coups d'épée[/PROJECTILE], touchant [ENEMY]plusieurs ennemis[/ENEMY]. Après un [CRITICAL]coup critique[/CRITICAL], elle attaque immédiatement à nouveau. La [CRITICAL]chance de coup critique[/CRITICAL] de cette unité est plafonnée à 90 %.`, // francés
			`Alterna [PROJECTILE]golpes de espada[/PROJECTILE], atingindo [ENEMY]vários inimigos[/ENEMY]. Após um [CRITICAL]acerto crítico[/CRITICAL], ataca novamente imediatamente. A [CRITICAL]chance de acerto crítico[/CRITICAL] desta unidade é limitada a 90%.`, // portugués
			`Alterna [PROJECTILE]fendenti di spada[/PROJECTILE], colpendo [ENEMY]più nemici[/ENEMY]. Dopo un [CRITICAL]colpo critico[/CRITICAL], attacca nuovamente e immediatamente. La [CRITICAL]probabilità di colpo critico[/CRITICAL] di questa unità è limitata al 90%.`, // italiano
			`Wechselt zwischen [PROJECTILE]Schwertschwüngen[/PROJECTILE] und trifft [ENEMY]mehrere Gegner[/ENEMY]. Nach einem [CRITICAL]Volltreffer[/CRITICAL] greift es sofort erneut an. Die [CRITICAL]Volltrefferchance[/CRITICAL] dieser Einheit ist auf 90 % begrenzt.`, // alemán
			`[PROJECTILE]剣を振り回す攻撃[/PROJECTILE]を交互に繰り出し、[ENEMY]複数の敵[/ENEMY]に命中する。[CRITICAL]急所[/CRITICAL]に当たると、すぐにもう一度攻撃する。このユニットの[CRITICAL]急所率[/CRITICAL]は90%が上限。`, // japonés
			`[PROJECTILE]검을 휘두르는 공격[/PROJECTILE]을 번갈아 사용하여 [ENEMY]여러 적[/ENEMY]을 공격합니다. [CRITICAL]급소[/CRITICAL]에 맞히면 즉시 다시 공격합니다. 이 유닛의 [CRITICAL]급소율[/CRITICAL]은 90%로 제한됩니다.`, // coreano
			`交替使用[PROJECTILE]剑刃横扫[/PROJECTILE]，攻击[ENEMY]多个敌人[/ENEMY]。[CRITICAL]击中要害[/CRITICAL]后会立即再次攻击。该单位的[CRITICAL]击中要害率[/CRITICAL]上限为90%。`, // chino
			`Wykonuje naprzemiennie [PROJECTILE]cięcia mieczem[/PROJECTILE], trafiając [ENEMY]wielu wrogów[/ENEMY]. Po [CRITICAL]trafieniu krytycznym[/CRITICAL] natychmiast atakuje ponownie. [CRITICAL]Szansa na trafienie krytyczne[/CRITICAL] tej jednostki jest ograniczona do 90%.` // polaco
		]
	},
	psybeam: {
		id: 'psybeam',
		name: [
			`Psybeam`, // inglés
			`Psicorrayo`, // español
			`Choc Psy`, // francés
			`Confusão`, // portugués
			`Psicoraggio`, // italiano
			`Psystrahl`, // alemán
			`サイケこうせん`, // japonés
			`환상빔`, // coreano
			`幻象光线`, // chino
			`Promień Psy`, // polaco
		],
		description: [
			`Fires a [PROJECTILE]beam[/PROJECTILE] in a straight line and 3 additional [PROJECTILE]beams[/PROJECTILE] in orthogonal directions.`, // inglés
			`Dispara un [PROJECTILE]rayo[/PROJECTILE] en línea recta y 3 [PROJECTILE]rayos[/PROJECTILE] adicionales en direcciones ortogonales.`, // español
			`Tire un [PROJECTILE]rayon[/PROJECTILE] en ligne droite et 3 [PROJECTILE]rayons[/PROJECTILE] supplémentaires dans des directions orthogonales.`, // francés
			`Dispara um [PROJECTILE]raio[/PROJECTILE] em linha reta e 3 [PROJECTILE]raios[/PROJECTILE] adicionais em direções ortogonais.`, // portugués
			`Spara un [PROJECTILE]raggio[/PROJECTILE] in linea retta e 3 [PROJECTILE]raggi[/PROJECTILE] aggiuntivi in direzioni ortogonali.`, // italiano
			`Feuert einen [PROJECTILE]Strahl[/PROJECTILE] in einer geraden Linie und 3 zusätzliche [PROJECTILE]Strahlen[/PROJECTILE] in orthogonale Richtungen ab.`, // alemán
			`一直線に[PROJECTILE]ビーム[/PROJECTILE]を放ち、直交する方向に追加で3本の[PROJECTILE]ビーム[/PROJECTILE]を放つ。`, // japonés
			`직선으로 [PROJECTILE]빔[/PROJECTILE]을 발사하고 직교하는 방향으로 추가 [PROJECTILE]빔[/PROJECTILE] 3개를 발사합니다.`, // coreano
			`沿直线发射一道[PROJECTILE]光束[/PROJECTILE]，并向正交方向额外发射3道[PROJECTILE]光束[/PROJECTILE]。`, // chino
			`Wystrzeliwuje [PROJECTILE]wiąz­kę[/PROJECTILE] w linii prostej oraz 3 dodatkowe [PROJECTILE]wiązki[/PROJECTILE] w kierunkach prostopadłych.` // polaco
		]
	},
	scrappy: {
		id: 'scrappy',
		name: [
		 	'Scrappy', // inglés
			'Intrépido', // español
			'Querelleur', // francés
			'Foco Interno', // portugués
			'Nervisaldi', // italiano
			'Rauflust', // alemán
			'きもったま', // japonés
			'근성', // coreano
			'胆量', // chino
			'Scrappy' // polaco
		],
		description: [
		 	`Can hit [ENEMY]invisible enemies[/ENEMY] and does not count as holding an [ITEM]item[/ITEM].`, // inglés
			`Puede golpear a [ENEMY]enemigos invisibles[/ENEMY] y no cuenta como si tuviera un [ITEM]objeto[/ITEM] equipado.`, // español
			`Peut toucher les [ENEMY]ennemis invisibles[/ENEMY] et ne compte pas comme portant un [ITEM]objet[/ITEM].`, // francés
			`Pode atingir [ENEMY]inimigos invisíveis[/ENEMY] e não conta como estando com um [ITEM]item[/ITEM] equipado.`, // portugués
			`Può colpire i [ENEMY]nemici invisibili[/ENEMY] e non conta come se avesse uno [ITEM]strumento[/ITEM] equipaggiato.`, // italiano
			`Kann [ENEMY]unsichtbare Gegner[/ENEMY] treffen und zählt nicht als Träger eines [ITEM]Items[/ITEM].`, // alemán
			`[ENEMY]透明な敵[/ENEMY]にも攻撃でき、[ITEM]道具[/ITEM]を持っている扱いにならない。`, // japonés
			`[ENEMY]투명한 적[/ENEMY]을 공격할 수 있으며 [ITEM]아이템[/ITEM]을 지닌 것으로 취급되지 않는다.`, // coreano
			`可以攻击[ENEMY]隐形敌人[/ENEMY]，且不计为持有[ITEM]道具[/ITEM]。`, // chino
			`Może atakować [ENEMY]niewidzialnych wrogów[/ENEMY] i nie jest uznawany za posiadacza [ITEM]przedmiotu[/ITEM].` // polaco
		]
	},
	icyWind: {
		id: 'icyWind',
		name: [
		 	`Icy Wind`, // inglés
			`Viento Hielo`, // español
			`Vent Glace`, // francés
			`Vento Gelado`, // portugués
			`Ventogelato`, // italiano
			`Eissturm`, // alemán
			`こごえるかぜ`, // japonés
			`얼어붙은바람`, // coreano
			`冰冻之风`, // chino
			`Lodowaty Wiatr` // polaco
		],
		description: [
			`Attacks in a [SHAPE]cone[/SHAPE], hitting multiple [ENEMY]enemies[/ENEMY] and inflicting [SLOW]slow[/SLOW] for 2 seconds.`, // inglés
			`Ataca en un [SHAPE]cono[/SHAPE], golpeando a varios [ENEMY]enemigos[/ENEMY] e infligiendo [SLOW]ralentización[/SLOW] durante 2 segundos.`, // español
			`Attaque dans un [SHAPE]cône[/SHAPE], touchant plusieurs [ENEMY]ennemis[/ENEMY] et leur infligeant un [SLOW]ralentissement[/SLOW] pendant 2 secondes.`, // francés
			`Ataca em um [SHAPE]cone[/SHAPE], atingindo vários [ENEMY]inimigos[/ENEMY] e causando [SLOW]lentidão[/SLOW] por 2 segundos.`, // portugués
			`Attacca in un [SHAPE]cono[/SHAPE], colpendo più [ENEMY]nemici[/ENEMY] e infliggendo [SLOW]rallentamento[/SLOW] per 2 secondi.`, // italiano
			`Greift in einem [SHAPE]Kegel[/SHAPE] an, trifft mehrere [ENEMY]Gegner[/ENEMY] und verlangsamt sie 2 Sekunden lang.`, // alemán
			`[SHAPE]扇状[/SHAPE]に攻撃し、複数の[ENEMY]敵[/ENEMY]に命中して2秒間[SLOW]すばやさを下げる[/SLOW]。`, // japonés
			`[SHAPE]부채꼴[/SHAPE]로 공격하여 여러 [ENEMY]적[/ENEMY]을 타격하고 2초 동안 [SLOW]느려지게[/SLOW] 합니다.`, // coreano
			`以[SHAPE]锥形[/SHAPE]范围攻击，命中多个[ENEMY]敌人[/ENEMY]并使其[SLOW]减速[/SLOW]2秒。`, // chino
			`Atakuje w [SHAPE]stożku[/SHAPE], trafiając wielu [ENEMY]wrogów[/ENEMY] i nakładając [SLOW]spowolnienie[/SLOW] na 2 sekundy.` // polaco
		]
	},
	fairySingularity: {
		id: 'fairySingularity',
		name: [
		  	`Fairy Singularity`, // inglés
			`Singularidad Feérica`, // español
			`Singularité Féerique`, // francés
			`Singularidade Feérica`, // portugués
			`Singolarità Fatata`, // italiano
			`Feen-Singularität`, // alemán
			`フェアリー・シンギュラリティ`, // japonés
			`페어리 싱귤래리티`, // coreano
			`妖精奇点`, // chino
			`Baśniowa Osobliwość` // polaco
		],
		description: [
			`Fires a [PROJECTILE]projectile[/PROJECTILE] that, after 1 second, pulls in [ENEMY]nearby enemies[/ENEMY] and explodes in an [SHAPE]area[/SHAPE].`, // inglés
			`Dispara un [PROJECTILE]proyectil[/PROJECTILE] que, tras 1 segundo, atrae a los [ENEMY]enemigos cercanos[/ENEMY] y explota en un [SHAPE]área[/SHAPE].`, // español
			`Tire un [PROJECTILE]projectile[/PROJECTILE] qui, après 1 seconde, attire les [ENEMY]ennemis proches[/ENEMY] et explose dans une [SHAPE]zone[/SHAPE].`, // francés
			`Dispara um [PROJECTILE]projétil[/PROJECTILE] que, após 1 segundo, atrai os [ENEMY]inimigos próximos[/ENEMY] e explode em uma [SHAPE]área[/SHAPE].`, // portugués
			`Lancia un [PROJECTILE]proiettile[/PROJECTILE] che, dopo 1 secondo, attira i [ENEMY]nemici vicini[/ENEMY] ed esplode in un'[SHAPE]area[/SHAPE].`, // italiano
			`Feuert ein [PROJECTILE]Projektil[/PROJECTILE] ab, das nach 1 Sekunde nahe [ENEMY]Gegner[/ENEMY] anzieht und in einem [SHAPE]Bereich[/SHAPE] explodiert.`, // alemán
			`[PROJECTILE]弾[/PROJECTILE]を発射し、1秒後に[ENEMY]周囲の敵[/ENEMY]を引き寄せて[SHAPE]範囲[/SHAPE]で爆発する。`, // japonés
			`[PROJECTILE]투사체[/PROJECTILE]를 발사하여 1초 후 [ENEMY]주변의 적[/ENEMY]을 끌어당기고 [SHAPE]범위[/SHAPE]에서 폭발합니다.`, // coreano
			`发射一个[PROJECTILE]投射物[/PROJECTILE]，1秒后将[ENEMY]附近的敌人[/ENEMY]吸引过来，并在[SHAPE]范围[/SHAPE]内爆炸。`, // chino
			`Wystrzeliwuje [PROJECTILE]pocisk[/PROJECTILE], który po 1 sekundzie przyciąga pobliskich [ENEMY]wrogów[/ENEMY] i wybucha na [SHAPE]obszarze[/SHAPE].` // polaco
		]
	},
	psychoCut: {
		id: 'psychoCut',
		name: [
			`Psycho Cut`, // inglés
			`Psicocorte`, // español
			`Psykoud'Boul`, // francés
			`Corte Psíquico`, // portugués
			`Psicotaglio`, // italiano
			`Psychoklinge`, // alemán
			`サイコカッター`, // japonés
			`사이코커터`, // coreano
			`精神利刃`, // chino
			`Psychoostrze` // polaco
		],
		description: [
			`Fires [PROJECTILE]energy waves[/PROJECTILE] at short range that hit multiple [ENEMY]enemies[/ENEMY].`, // inglés
			`Lanza [PROJECTILE]olas de energía[/PROJECTILE] a corta distancia que golpean a varios [ENEMY]enemigos[/ENEMY].`, // español
			`Lance des [PROJECTILE]ondes d'énergie[/PROJECTILE] à courte portée qui touchent plusieurs [ENEMY]ennemis[/ENEMY].`, // francés
			`Lança [PROJECTILE]ondas de energia[/PROJECTILE] a curta distância que atingem vários [ENEMY]inimigos[/ENEMY].`, // portugués
			`Lancia [PROJECTILE]onde di energia[/PROJECTILE] a corta distanza che colpiscono più [ENEMY]nemici[/ENEMY].`, // italiano
			`Feuert [PROJECTILE]Energiewellen[/PROJECTILE] auf kurze Distanz ab, die mehrere [ENEMY]Gegner[/ENEMY] treffen.`, // alemán
			`近距離に[PROJECTILE]エネルギーの波[/PROJECTILE]を放ち、複数の[ENEMY]敵[/ENEMY]に命中する。`, // japonés
			`근거리에서 [PROJECTILE]에너지 파동[/PROJECTILE]을 발사하여 여러 [ENEMY]적[/ENEMY]을 공격합니다.`, // coreano
			`向近距离发射[PROJECTILE]能量波[/PROJECTILE]，命中多个[ENEMY]敌人[/ENEMY]。`, // chino
			`Wystrzeliwuje z bliskiej odległości [PROJECTILE]fale energii[/PROJECTILE], które trafiają wielu [ENEMY]wrogów[/ENEMY].` // polaco
		]
	},
	psychoCutMega: {
		id: 'psychoCutMega',
		name: [
			`Psycho Cut`, // inglés
			`Psicocorte`, // español
			`Psykoud'Boul`, // francés
			`Corte Psíquico`, // portugués
			`Psicotaglio`, // italiano
			`Psychoklinge`, // alemán
			`サイコカッター`, // japonés
			`사이코커터`, // coreano
			`精神利刃`, // chino
			`Psychoostrze` // polaco
		],
		description: [
			`Fires [PROJECTILE]energy waves[/PROJECTILE] that hit multiple [ENEMY]enemies[/ENEMY] and increase their [RANGE]range[/RANGE] for each [ENEMY]enemy[/ENEMY] hit.`, // inglés
			`Lanza [PROJECTILE]ondas de energía[/PROJECTILE] que golpean a varios [ENEMY]enemigos[/ENEMY] y aumentan su [RANGE]alcance[/RANGE] por cada [ENEMY]enemigo[/ENEMY] golpeado.`, // español
			`Lance des [PROJECTILE]ondes d'énergie[/PROJECTILE] qui touchent plusieurs [ENEMY]ennemis[/ENEMY] et augmentent leur [RANGE]portée[/RANGE] pour chaque [ENEMY]ennemi[/ENEMY] touché.`, // francés
			`Lança [PROJECTILE]ondas de energia[/PROJECTILE] que atingem vários [ENEMY]inimigos[/ENEMY] e aumentam seu [RANGE]alcance[/RANGE] para cada [ENEMY]inimigo[/ENEMY] atingido.`, // portugués
			`Lancia [PROJECTILE]onde di energia[/PROJECTILE] che colpiscono più [ENEMY]nemici[/ENEMY] e ne aumentano la [RANGE]portata[/RANGE] per ogni [ENEMY]nemico[/ENEMY] colpito.`, // italiano
			`Feuert [PROJECTILE]Energiewellen[/PROJECTILE] ab, die mehrere [ENEMY]Gegner[/ENEMY] treffen und ihre [RANGE]Reichweite[/RANGE] für jeden getroffenen [ENEMY]Gegner[/ENEMY] erhöhen.`, // alemán
			`[PROJECTILE]エネルギーの波[/PROJECTILE]を放ち、複数の[ENEMY]敵[/ENEMY]に命中する。命中した[ENEMY]敵[/ENEMY]1体につき、[RANGE]範囲[/RANGE]が広がる。`, // japonés
			`[PROJECTILE]에너지 파동[/PROJECTILE]을 발사하여 여러 [ENEMY]적[/ENEMY]을 공격하고, 적중한 [ENEMY]적[/ENEMY]마다 [RANGE]범위[/RANGE]가 증가합니다.`, // coreano
			`发射[PROJECTILE]能量波[/PROJECTILE]，命中多个[ENEMY]敌人[/ENEMY]，并且每命中一个[ENEMY]敌人[/ENEMY]都会增加其[RANGE]范围[/RANGE]。`, // chino
			`Wystrzeliwuje [PROJECTILE]fale energii[/PROJECTILE], które trafiają wielu [ENEMY]wrogów[/ENEMY] i zwiększają swój [RANGE]zasięg[/RANGE] za każdego trafionego [ENEMY]wroga[/ENEMY].` // polaco
		]
	},
	// splash: {
	// 	id: 'splash',
	// 	name: ['Splash', 'Splash', 'Éclaboussure', 'Splash', 'Splash', 'Platscher', 'スプラッシュ', '스플래시', '溅射', 'Plusk'],
	// 	description: [
	// 		`[PROJECTILE]Projectiles[/PROJECTILE] explode in an [SHAPE]area[/SHAPE], causing half damage to nearby [ENEMY]enemies[/ENEMY].`, // inglés
	// 		`Los [PROJECTILE]proyectiles[/PROJECTILE] explotan en un [SHAPE]área[/SHAPE], infligiendo la mitad de daño a los [ENEMY]enemigos[/ENEMY] cercanos.`, // español
	// 		`Les [PROJECTILE]projectiles[/PROJECTILE] explosent dans une [SHAPE]zone[/SHAPE], infligeant la moitié des dégâts aux [ENEMY]ennemis[/ENEMY] proches.`, // francés
	// 		`Os [PROJECTILE]projéteis[/PROJECTILE] explodem em uma [SHAPE]área[/SHAPE], causando metade do dano aos [ENEMY]inimigos[/ENEMY] próximos.`, // portugués
	// 		`I [PROJECTILE]proiettili[/PROJECTILE] esplodono in un'[SHAPE]area[/SHAPE], infliggendo metà dei danni ai [ENEMY]nemici[/ENEMY] vicini.`, // italiano
	// 		`[PROJECTILE]Projektile[/PROJECTILE] explodieren in einem [SHAPE]Bereich[/SHAPE] und verursachen bei [ENEMY]Gegnern[/ENEMY] in der Nähe halben Schaden.`, // alemán
	// 		`[PROJECTILE]投射物[/PROJECTILE]は[SHAPE]範囲[/SHAPE]で爆発し、近くの[ENEMY]敵[/ENEMY]に半分のダメージを与える。`, // japonés
	// 		`[PROJECTILE]투사체[/PROJECTILE]가 [SHAPE]범위[/SHAPE]에서 폭발하여 주변 [ENEMY]적[/ENEMY]에게 절반의 피해를 줍니다.`, // coreano
	// 		`[PROJECTILE]投射物[/PROJECTILE]会在[SHAPE]范围[/SHAPE]内爆炸，对附近的[ENEMY]敌人[/ENEMY]造成一半伤害。`, // chino
	// 		`[PROJECTILE]Pociski[/PROJECTILE] eksplodują na [SHAPE]obszarze[/SHAPE], zadając połowę obrażeń pobliskim [ENEMY]wrogom[/ENEMY].` // polaco
	// 	]
	// },
	autotomize: {
		id: 'autotomize',
		name: [
			`Autotomize`, // inglés
			`Aligerar`, // español
			`Allègement`, // francés
			`Polimento`, // portugués
			`Autotomia`, // italiano
			`Autotomie`, // alemán
			`ボディパージ`, // japonés
			`고속이동`, // coreano
			`身体轻量化`, // chino
			`Automatyzacja`, // polaco
		],
		description: [
			`[PROJECTILE]Projectiles[/PROJECTILE] explode in an [SHAPE]area[/SHAPE], dealing half damage to nearby [ENEMY]enemies[/ENEMY]. The [SHAPE]area[/SHAPE] size increases by 1% for each [ENEMY]enemy[/ENEMY] defeated by an [POKEMON]ultra beast[/POKEMON] during the wave.`, // inglés
			`Los [PROJECTILE]proyectiles[/PROJECTILE] explotan en un [SHAPE]área[/SHAPE], infligiendo la mitad de daño a los [ENEMY]enemigos[/ENEMY] cercanos. El tamaño del [SHAPE]área[/SHAPE] aumenta un 1% por cada [ENEMY]enemigo[/ENEMY] derrotado por un [POKEMON]ultraente[/POKEMON] durante la oleada.`, // español
			`Les [PROJECTILE]projectiles[/PROJECTILE] explosent dans une [SHAPE]zone[/SHAPE], infligeant la moitié des dégâts aux [ENEMY]ennemis[/ENEMY] proches. La taille de la [SHAPE]zone[/SHAPE] augmente de 1 % pour chaque [ENEMY]ennemi[/ENEMY] vaincu par une [POKEMON]Ultra-Chimère[/POKEMON] pendant la vague.`, // francés
			`Os [PROJECTILE]projéteis[/PROJECTILE] explodem em uma [SHAPE]área[/SHAPE], causando metade do dano aos [ENEMY]inimigos[/ENEMY] próximos. O tamanho da [SHAPE]área[/SHAPE] aumenta em 1% para cada [ENEMY]inimigo[/ENEMY] derrotado por uma [POKEMON]Ultra Criatura[/POKEMON] durante a onda.`, // portugués
			`I [PROJECTILE]proiettili[/PROJECTILE] esplodono in un'[SHAPE]area[/SHAPE], infliggendo metà dei danni agli [ENEMY]nemici[/ENEMY] vicini. La dimensione dell'[SHAPE]area[/SHAPE] aumenta dell'1% per ogni [ENEMY]nemico[/ENEMY] sconfitto da un [POKEMON]Ultracreatura[/POKEMON] durante l'ondata.`, // italiano
			`[PROJECTILE]Projektile[/PROJECTILE] explodieren in einem [SHAPE]Bereich[/SHAPE] und verursachen bei nahen [ENEMY]Gegnern[/ENEMY] halben Schaden. Die Größe des [SHAPE]Bereichs[/SHAPE] erhöht sich um 1 % für jeden [ENEMY]Gegner[/ENEMY], der während der Welle von einem [POKEMON]Ultrabestie[/POKEMON] besiegt wird.`, // alemán
			`[PROJECTILE]弾[/PROJECTILE]が[SHAPE]範囲[/SHAPE]で爆発し、近くの[ENEMY]敵[/ENEMY]に半分のダメージを与える。[SHAPE]範囲[/SHAPE]の大きさは、ウェーブ中に[POKEMON]ウルトラビースト[/POKEMON]が倒した[ENEMY]敵[/ENEMY]1体につき1%増加する。`, // japonés
			`[PROJECTILE]투사체[/PROJECTILE]가 [SHAPE]범위[/SHAPE]에서 폭발하여 주변 [ENEMY]적[/ENEMY]에게 절반의 피해를 줍니다. [SHAPE]범위[/SHAPE]의 크기는 웨이브 동안 [POKEMON]울트라비스트[/POKEMON]가 쓰러뜨린 [ENEMY]적[/ENEMY] 한 마리당 1% 증가합니다.`, // coreano
			`[PROJECTILE]投射物[/PROJECTILE]在[SHAPE]范围[/SHAPE]内爆炸，对附近的[ENEMY]敌人[/ENEMY]造成一半伤害。[SHAPE]范围[/SHAPE]的大小在波次期间每有一只[POKEMON]究极异兽[/POKEMON]击败一名[ENEMY]敌人[/ENEMY]就提高1%。`, // chino
			`[PROJECTILE]Pociski[/PROJECTILE] wybuchają na [SHAPE]obszarze[/SHAPE], zadając pobliskim [ENEMY]wrogom[/ENEMY] połowę obrażeń. Rozmiar [SHAPE]obszaru[/SHAPE] zwiększa się o 1% za każdego [ENEMY]wroga[/ENEMY] pokonanego przez [POKEMON]Ultra Bestię[/POKEMON] podczas fali.` // polaco
		]
	},
	whiteRay: {
		id: 'whiteRay',
		name: [
			`White Ray`, // inglés
			`Rayo Blanco`, // español
			`Rayon Blanc`, // francés
			`Raio Branco`, // portugués
			`Raggio Bianco`, // italiano
			`Weißer Strahl`, // alemán
			`ホワイトレイ`, // japonés
			`화이트레이`, // coreano
			`白光`, // chino
			`Biały Promień` // polaco
		],
		description: [
			`Shoots [PROJECTILE]projectiles[/PROJECTILE] at up to 2 targets at once. Increases [POWER]power[/POWER] by 1% for each [ENEMY]enemy[/ENEMY] defeated by an [POKEMON]ultra beast[/POKEMON] during the wave.`, // inglés
			`Dispara [PROJECTILE]proyectiles[/PROJECTILE] a un máximo de 2 objetivos a la vez. Aumenta el [POWER]poder[/POWER] un 1% por cada [ENEMY]enemigo[/ENEMY] derrotado por un [POKEMON]ultraente[/POKEMON] durante la oleada.`, // español
			`Tire des [PROJECTILE]projectiles[/PROJECTILE] sur jusqu'à 2 cibles à la fois. Augmente la [POWER]puissance[/POWER] de 1 % pour chaque [ENEMY]ennemi[/ENEMY] vaincu par une [POKEMON]Ultra-Chimère[/POKEMON] pendant la vague.`, // francés
			`Dispara [PROJECTILE]projéteis[/PROJECTILE] contra até 2 alvos de uma vez. Aumenta o [POWER]poder[/POWER] em 1% para cada [ENEMY]inimigo[/ENEMY] derrotado por uma [POKEMON]Ultra Criatura[/POKEMON] durante a onda.`, // portugués
			`Spara [PROJECTILE]proiettili[/PROJECTILE] contro un massimo di 2 bersagli alla volta. Aumenta il [POWER]potere[/POWER] dell'1% per ogni [ENEMY]nemico[/ENEMY] sconfitto da un [POKEMON]Ultracreatura[/POKEMON] durante l'ondata.`, // italiano
			`Schießt [PROJECTILE]Projektile[/PROJECTILE] auf bis zu 2 Ziele gleichzeitig. Erhöht die [POWER]Kraft[/POWER] um 1 % für jeden [ENEMY]Gegner[/ENEMY], der während der Welle von einer [POKEMON]Ultrabestie[/POKEMON] besiegt wird.`, // alemán
			`一度に最大2体の対象に[PROJECTILE]弾[/PROJECTILE]を発射する。ウェーブ中に[POKEMON]ウルトラビースト[/POKEMON]が倒した[ENEMY]敵[/ENEMY]1体につき、[POWER]パワー[/POWER]が1%増加する。`, // japonés
			`한 번에 최대 2개의 대상에게 [PROJECTILE]투사체[/PROJECTILE]를 발사합니다. 웨이브 동안 [POKEMON]울트라비스트[/POKEMON]가 쓰러뜨린 [ENEMY]적[/ENEMY] 한 마리당 [POWER]위력[/POWER]이 1% 증가합니다.`, // coreano
			`同时向最多2个目标发射[PROJECTILE]投射物[/PROJECTILE]。在波次期间，[POKEMON]究极异兽[/POKEMON]每击败一名[ENEMY]敌人[/ENEMY]，[POWER]攻击力[/POWER]提高1%。`, // chino
			`Wystrzeliwuje [PROJECTILE]pociski[/PROJECTILE] w maksymalnie 2 cele jednocześnie. Zwiększa [POWER]siłę[/POWER] o 1% za każdego [ENEMY]wroga[/ENEMY] pokonanego przez [POKEMON]Ultra Bestię[/POKEMON] podczas fali.` // polaco
		]
	},
	emptyLight: {
		id: 'emptyLight',
		name: [
		  	`Empty Light`, // inglés
			`Luz Vacía`, // español
			`Lumière Vide`, // francés
			`Luz Vazia`, // portugués
			`Luce Vuota`, // italiano
			`Leeres Licht`, // alemán
			`空虚な光`, // japonés
			`공허한 빛`, // coreano
			`空洞之光`, // chino
			`Puste Światło` // polaco
		],
		description: [
			`Fires 3 [PROJECTILE]waves[/PROJECTILE], each has a 20% chance to apply 1 stack of [POISON]poison[/POISON]. The [PROJECTILE]waves[/PROJECTILE] have a 2% chance to [STUN]stun[/STUN] for 1 second for each [ENEMY]enemy[/ENEMY] defeated by an [POKEMON]ultra beast[/POKEMON] during the wave.`, // inglés
			`Dispara 3 [PROJECTILE]ondas[/PROJECTILE], cada una con un 20% de probabilidad de aplicar 1 acumulación de [POISON]veneno[/POISON]. Las [PROJECTILE]ondas[/PROJECTILE] tienen un 2% de probabilidad de [STUN]aturdir[/STUN] durante 1 segundo por cada [ENEMY]enemigo[/ENEMY] derrotado por un [POKEMON]ultraente[/POKEMON] durante la oleada.`, // español
			`Tire 3 [PROJECTILE]vagues[/PROJECTILE], chacune ayant 20 % de chances d'appliquer 1 cumul de [POISON]poison[/POISON]. Les [PROJECTILE]vagues[/PROJECTILE] ont 2 % de chances d'[STUN]étourdir[/STUN] pendant 1 seconde pour chaque [ENEMY]ennemi[/ENEMY] vaincu par une [POKEMON]Ultra-Chimère[/POKEMON] pendant la vague.`, // francés
			`Dispara 3 [PROJECTILE]ondas[/PROJECTILE], cada uma com 20% de chance de aplicar 1 acúmulo de [POISON]veneno[/POISON]. As [PROJECTILE]ondas[/PROJECTILE] têm 2% de chance de [STUN]atordoar[/STUN] por 1 segundo para cada [ENEMY]inimigo[/ENEMY] derrotado por uma [POKEMON]Ultra Criatura[/POKEMON] durante a onda.`, // portugués
			`Spara 3 [PROJECTILE]onde[/PROJECTILE], ognuna con il 20% di probabilità di applicare 1 accumulo di [POISON]veleno[/POISON]. Le [PROJECTILE]onde[/PROJECTILE] hanno l'2% di probabilità di [STUN]stordire[/STUN] per 1 secondo per ogni [ENEMY]nemico[/ENEMY] sconfitto da un [POKEMON]Ultracreatura[/POKEMON] durante l'ondata.`, // italiano
			`Feuert 3 [PROJECTILE]Wellen[/PROJECTILE] ab, die jeweils eine Chance von 20 % haben, 1 Stapel [POISON]Gift[/POISON] anzuwenden. Die [PROJECTILE]Wellen[/PROJECTILE] haben für jeden [ENEMY]Gegner[/ENEMY], der während der Welle von einer [POKEMON]Ultrabestie[/POKEMON] besiegt wird, eine Chance von 2 %, 1 Sekunde lang zu [STUN]betäuben[/STUN].`, // alemán
			`3つの[PROJECTILE]波[/PROJECTILE]を放ち、それぞれ20%の確率で[POISON]どく[/POISON]を1スタック付与する。[PROJECTILE]波[/PROJECTILE]は、ウェーブ中に[POKEMON]ウルトラビースト[/POKEMON]が倒した[ENEMY]敵[/ENEMY]1体につき、2%の確率で1秒間[STUN]まひ[/STUN]させる。`, // japonés
			`3개의 [PROJECTILE]파동[/PROJECTILE]을 발사하며, 각각 20% 확률로 [POISON]독[/POISON]을 1스택 부여합니다. [PROJECTILE]파동[/PROJECTILE]은 웨이브 동안 [POKEMON]울트라비스트[/POKEMON]가 쓰러뜨린 [ENEMY]적[/ENEMY] 한 마리당 2% 확률로 1초 동안 [STUN]기절[/STUN]시킵니다.`, // coreano
			`发射3道[PROJECTILE]波[/PROJECTILE]，每道有20%的几率施加1层[POISON]中毒[/POISON]。[PROJECTILE]波[/PROJECTILE]在波次期间每有一名[POKEMON]究极异兽[/POKEMON]击败[ENEMY]敌人[/ENEMY]，就有2%的几率使其[STUN]眩晕[/STUN]1秒。`, // chino
			`Wystrzeliwuje 3 [PROJECTILE]fale[/PROJECTILE], z których każda ma 20% szans na nałożenie 1 kumulacji [POISON]trucizny[/POISON]. [PROJECTILE]Fale[/PROJECTILE] mają 2% szans na [STUN]ogłuszenie[/STUN] na 1 sekundę za każdego [ENEMY]wroga[/ENEMY] pokonanego przez [POKEMON]Ultra Bestię[/POKEMON] podczas fali.` // polaco
		]
	},
	dazzlingGleam: {
		id: 'dazzlingGleam',
		name: [
		  	`Dazzling Gleam`, // inglés
			`Brillo Mágico`, // español
			`Éclat Magique`, // francés
			`Brilho Mágico`, // portugués
			`Magibrillio`, // italiano
			`Zauberschein`, // alemán
			`マジカルシャイン`, // japonés
			`매지컬샤인`, // coreano
			`魔法闪耀`, // chino
			`Magiczny Blask` // polaco
		],
		description: [
			`Attacks in a [SHAPE]cone[/SHAPE], hitting multiple [ENEMY]enemies[/ENEMY] and have a 25% chance to [STUN]stun[/STUN] for 1 seconds. Gains 50 [POWER]power[/POWER] for each [POKEMON]Future Paradox Pokémon[/POKEMON] on the [TEAM]team[/TEAM].`, // inglés
			`Ataca en un [SHAPE]cono[/SHAPE], golpeando a múltiples [ENEMY]enemigos[/ENEMY] y tiene un 25% de probabilidad de [STUN]aturdir[/STUN] durante 1 segundo. Gana 50 de [POWER]poder[/POWER] por cada [POKEMON]Pokémon Paradoja del futuro[/POKEMON] en el [TEAM]equipo[/TEAM].`, // español
			`Attaque en [SHAPE]cône[/SHAPE], touchant plusieurs [ENEMY]ennemis[/ENEMY] et ayant 25 % de chances d'[STUN]étourdir[/STUN] pendant 1 seconde. Gagne 50 de [POWER]puissance[/POWER] pour chaque [POKEMON]Pokémon Paradoxe du futur[/POKEMON] dans l'[TEAM]équipe[/TEAM].`, // francés
			`Ataca em [SHAPE]cone[/SHAPE], atingindo vários [ENEMY]inimigos[/ENEMY] e tendo 25% de chance de [STUN]atordoar[/STUN] por 1 segundo. Ganha 50 de [POWER]poder[/POWER] para cada [POKEMON]Pokémon Paradoxo do futuro[/POKEMON] na [TEAM]equipe[/TEAM].`, // portugués
			`Attacca a [SHAPE]cono[/SHAPE], colpendo più [ENEMY]nemici[/ENEMY] e avendo il 25% di probabilità di [STUN]stordire[/STUN] per 1 secondo. Guadagna 50 [POWER]potere[/POWER] per ogni [POKEMON]Pokémon Paradosso del futuro[/POKEMON] nella [TEAM]squadra[/TEAM].`, // italiano
			`Greift in einem [SHAPE]Kegel[/SHAPE] an, trifft mehrere [ENEMY]Gegner[/ENEMY] und hat eine Chance von 25 %, sie 1 Sekunde lang zu [STUN]betäuben[/STUN]. Erhält 50 [POWER]Kraft[/POWER] für jedes [POKEMON]Pokémon aus der Zukunft[/POKEMON] im [TEAM]Team[/TEAM].`, // alemán
			`[SHAPE]円錐状[/SHAPE]に攻撃し、複数の[ENEMY]敵[/ENEMY]に命中して、25%の確率で1秒間[STUN]まひ[/STUN]させる。[TEAM]チーム[/TEAM]にいる[POKEMON]未来のパラドックスポケモン[/POKEMON]1匹につき、[POWER]パワー[/POWER]を50得る。`, // japonés
			`[SHAPE]원뿔 범위[/SHAPE]로 공격하여 여러 [ENEMY]적[/ENEMY]을 타격하고 25% 확률로 1초 동안 [STUN]기절[/STUN]시킵니다. [TEAM]팀[/TEAM]에 있는 [POKEMON]미래 패러독스 포켓몬[/POKEMON] 한 마리당 [POWER]위력[/POWER]을 50 얻습니다.`, // coreano
			`以[SHAPE]锥形[/SHAPE]范围进行攻击，命中多个[ENEMY]敌人[/ENEMY]，并有25%的几率使其[STUN]眩晕[/STUN]1秒。[TEAM]队伍[/TEAM]中每有一只[POKEMON]未来悖论宝可梦[/POKEMON]，获得50点[POWER]攻击力[/POWER]。`, // chino
			`Atakuje w [SHAPE]stożku[/SHAPE], trafiając wielu [ENEMY]wrogów[/ENEMY] i ma 25% szans na [STUN]ogłuszenie[/STUN] ich na 1 sekundę. Zyskuje 50 [POWER]siły[/POWER] za każdego [POKEMON]Pokémona Paradoksu z przyszłości[/POKEMON] w [TEAM]drużynie[/TEAM].` // polaco
		]
	},
	cryogenicCannon: {
		id: 'cryogenicCannon',
		name: [
			`Cryogenic Cannon`, // inglés
			`Cañón Criogénico`, // español
			`Canon Cryogénique`, // francés
			`Canhão Criogênico`, // portugués
			`Cannone Criogenico`, // italiano
			`Kryokanone`, // alemán
			`クライオジェニックキャノン`, // japonés
			`극저온 캐논`, // coreano
			`低温炮`, // chino
			`Działo Kriogeniczne` // polaco
		],
		description: [
			`Maintains a [PROJECTILE]beam[/PROJECTILE] on its target, dealing damage every 0.5 seconds while it remains in [RANGE]range[/RANGE]. While it remains on the same [ENEMY]enemy[/ENEMY], it increases the damage of the [PROJECTILE]beam[/PROJECTILE] by 50 for each [POKEMON]Past Paradox Pokémon[/POKEMON] on the [TEAM]team[/TEAM].`, // inglés
			`Mantiene un [PROJECTILE]rayo[/PROJECTILE] sobre su objetivo, infligiendo daño cada 0,5 segundos mientras permanezca dentro del [RANGE]alcance[/RANGE]. Mientras permanezca sobre el mismo [ENEMY]enemigo[/ENEMY], aumenta el daño del [PROJECTILE]rayo[/PROJECTILE] en 50 por cada [POKEMON]Pokémon Paradoja del pasado[/POKEMON] en el [TEAM]equipo[/TEAM].`, // español
			`Maintient un [PROJECTILE]rayon[/PROJECTILE] sur sa cible, infligeant des dégâts toutes les 0,5 secondes tant qu'elle reste à [RANGE]portée[/RANGE]. Tant qu'il reste sur le même [ENEMY]ennemi[/ENEMY], les dégâts du [PROJECTILE]rayon[/PROJECTILE] augmentent de 50 pour chaque [POKEMON]Pokémon Paradoxe du passé[/POKEMON] dans l'[TEAM]équipe[/TEAM].`, // francés
			`Mantém um [PROJECTILE]feixe[/PROJECTILE] no alvo, causando dano a cada 0,5 segundos enquanto ele permanecer dentro do [RANGE]alcance[/RANGE]. Enquanto permanecer no mesmo [ENEMY]inimigo[/ENEMY], aumenta o dano do [PROJECTILE]feixe[/PROJECTILE] em 50 para cada [POKEMON]Pokémon Paradoxo do passado[/POKEMON] na [TEAM]equipe[/TEAM].`, // portugués
			`Mantiene un [PROJECTILE]raggio[/PROJECTILE] sul bersaglio, infliggendo danni ogni 0,5 secondi finché rimane nella [RANGE]portata[/RANGE]. Finché rimane sullo stesso [ENEMY]nemico[/ENEMY], aumenta i danni del [PROJECTILE]raggio[/PROJECTILE] di 50 per ogni [POKEMON]Pokémon Paradosso del passato[/POKEMON] nella [TEAM]squadra[/TEAM].`, // italiano
			`Hält einen [PROJECTILE]Strahl[/PROJECTILE] auf das Ziel gerichtet und verursacht alle 0,5 Sekunden Schaden, solange es sich in [RANGE]Reichweite[/RANGE] befindet. Solange er auf demselben [ENEMY]Gegner[/ENEMY] bleibt, erhöht sich der Schaden des [PROJECTILE]Strahls[/PROJECTILE] um 50 für jedes [POKEMON]Pokémon aus der Vergangenheit[/POKEMON] im [TEAM]Team[/TEAM].`, // alemán
			`対象に[PROJECTILE]光線[/PROJECTILE]を維持し、[RANGE]射程[/RANGE]内にいる間、0.5秒ごとにダメージを与える。同じ[ENEMY]敵[/ENEMY]を攻撃し続けている間、[PROJECTILE]光線[/PROJECTILE]のダメージが、[TEAM]チーム[/TEAM]にいる[POKEMON]古代のパラドックスポケモン[/POKEMON]1匹につき50増加する。`, // japonés
			`대상에게 [PROJECTILE]광선[/PROJECTILE]을 유지하며, 대상이 [RANGE]사거리[/RANGE] 안에 있는 동안 0.5초마다 피해를 줍니다. 같은 [ENEMY]적[/ENEMY]을 계속 공격하는 동안 [PROJECTILE]광선[/PROJECTILE]의 피해가 [TEAM]팀[/TEAM]에 있는 [POKEMON]과거 패러독스 포켓몬[/POKEMON] 한 마리당 50 증가합니다.`, // coreano
			`持续对目标维持一道[PROJECTILE]光束[/PROJECTILE]，只要目标处于[RANGE]射程[/RANGE]内，就每0.5秒造成一次伤害。在持续攻击同一名[ENEMY]敌人[/ENEMY]时，[PROJECTILE]光束[/PROJECTILE]的伤害会根据[TEAM]队伍[/TEAM]中每有一只[POKEMON]过去悖论宝可梦[/POKEMON]提高50。`, // chino
			`Utrzymuje [PROJECTILE]wiązkę[/PROJECTILE] na celu, zadając obrażenia co 0,5 sekundy, dopóki pozostaje on w [RANGE]zasięgu[/RANGE]. Dopóki atakuje tego samego [ENEMY]wroga[/ENEMY], obrażenia [PROJECTILE]wiązki[/PROJECTILE] zwiększają się o 50 za każdego [POKEMON]Pokémona Paradoksu z przeszłości[/POKEMON] w [TEAM]rużynie[/TEAM].` // polaco
		]
	},
	explosion: {
		id: 'explosion',
		name: [
			`Explosion`, // inglés
			`Explosión`, // español
			`Explosion`, // francés
			`Explosão`, // portugués
			`Esplosione`, // italiano
			`Explosion`, // alemán
			`だいばくはつ`, // japonés
			`대폭발`, // coreano
			`大爆炸`, // chino
			`Eksplozja` // polaco
		],
		description: [
			`Starts a countdown. When it reaches 0, it [SHAKE]explodes[/SHAKE] if there are at least 5 [ENEMY]enemies[/ENEMY] in its [RANGE]range[/RANGE], dealing damage and causing [STUN]stun[/STUN] for 3 seconds. When it [SHAKE]explodes[/SHAKE], lose 2 [HEART]hearts[/HEART].`, // inglés
			`Inicia una cuenta atrás. Cuando llega a 0, [SHAKE]explota[/SHAKE] si hay al menos 5 [ENEMY]enemigos[/ENEMY] dentro de su [RANGE]alcance[/RANGE], infligiendo daño y causando [STUN]aturdimiento[/STUN] durante 3 segundos. Cuando [SHAKE]explota[/SHAKE], pierdes 2 [HEART]corazones[/HEART].`, // español
			`Lance un compte à rebours. Lorsqu'il atteint 0, il [SHAKE]explose[/SHAKE] s'il y a au moins 5 [ENEMY]ennemis[/ENEMY] à sa [RANGE]portée[/RANGE], infligeant des dégâts et provoquant un [STUN]étourdissement[/STUN] de 3 secondes. Lorsqu'il [SHAKE]explose[/SHAKE], vous perdez 2 [HEART]cœurs[/HEART].`, // francés
			`Inicia uma contagem decrescente. Quando chega a 0, [SHAKE]explode[/SHAKE] se houver pelo menos 5 [ENEMY]inimigos[/ENEMY] ao seu [RANGE]alcance[/RANGE], causando dano e [STUN]atordoamento[/STUN] durante 3 segundos. Quando [SHAKE]explode[/SHAKE], perdes 2 [HEART]corações[/HEART].`, // portugués
			`Avvia un conto alla rovescia. Quando raggiunge 0, [SHAKE]esplode[/SHAKE] se ci sono almeno 5 [ENEMY]nemici[/ENEMY] nel suo [RANGE]raggio d'azione[/RANGE], infliggendo danni e causando [STUN]stordimento[/STUN] per 3 secondi. Quando [SHAKE]esplode[/SHAKE], perdi 2 [HEART]cuori[/HEART].`, // italiano
			`Startet einen Countdown. Bei 0 [SHAKE]explodiert[/SHAKE] es, wenn sich mindestens 5 [ENEMY]Gegner[/ENEMY] in seiner [RANGE]Reichweite[/RANGE] befinden. Dabei verursacht es Schaden und [STUN]betäubt[/STUN] die Gegner für 3 Sekunden. Bei der [SHAKE]Explosion[/SHAKE] verlierst du 2 [HEART]Herzen[/HEART].`, // alemán
			`カウントダウンを開始する。0になると、[RANGE]射程[/RANGE]内に5体以上の[ENEMY]敵[/ENEMY]がいる場合、[SHAKE]爆発[/SHAKE]してダメージを与え、3秒間[STUN]ひるみ[/STUN]状態にする。[SHAKE]爆発[/SHAKE]すると、[HEART]ハート[/HEART]を2つ失う。`, // japonés
			`카운트다운을 시작한다. 0이 되면 [RANGE]사거리[/RANGE] 내에 [ENEMY]적[/ENEMY]이 5마리 이상 있을 경우 [SHAKE]폭발[/SHAKE]해 피해를 주고 3초 동안 [STUN]기절[/STUN]시킨다. [SHAKE]폭발[/SHAKE]하면 [HEART]하트[/HEART]를 2개 잃는다.`, // coreano
			`开始倒计时。倒计时归零时，如果[RANGE]射程[/RANGE]内至少有5个[ENEMY]敌人[/ENEMY]，就会[SHAKE]爆炸[/SHAKE]，造成伤害并使敌人[STUN]眩晕[/STUN]3秒。[SHAKE]爆炸[/SHAKE]时会失去2颗[HEART]心心[/HEART]。`, // chino
			`Rozpoczyna odliczanie. Gdy osiągnie 0, [SHAKE]wybucha[/SHAKE], jeśli w jego [RANGE]zasięgu[/RANGE] znajduje się co najmniej 5 [ENEMY]wrogów[/ENEMY], zadając obrażenia i [STUN]ogłuszając[/STUN] ich na 3 sekundy. Po [SHAKE]wybuchu[/SHAKE] tracisz 2 [HEART]serca[/HEART].` // polaco
		]
	},
	damp: {
		id: 'damp',
		name: [
			`Damp`, // inglés
			`Humedad`, // español
			`Humidité`, // francés
			`Umidade`, // portugués
			`Umidità`, // italiano
			`Feuchtigkeit`, // alemán
			`しめりけ`, // japonés
			`습기`, // coreano
			`湿气`, // chino
			`Wilgoć` // polaco
		],
		description: [
			`Prevents [ABILITY]Explosion[/ABILITY] from damaging you.`, // inglés
			`Evita que la [ABILITY]Explosión[/ABILITY] te haga daño.`, // español
			`Empêche l'[ABILITY]Explosion[/ABILITY] de vous infliger des dégâts.`, // francés
			`Impede que a [ABILITY]Explosão[/ABILITY] te cause dano.`, // portugués
			`Impedisce all'[ABILITY]Esplosione[/ABILITY] di infliggerti danni.`, // italiano
			`Verhindert, dass dich [ABILITY]Explosion[/ABILITY] verletzt.`, // alemán
			`[ABILITY]ばくはつ[/ABILITY]によるダメージを受けなくなる。`, // japonés
			`[ABILITY]폭발[/ABILITY]로 피해를 입지 않는다.`, // coreano
			`免疫[ABILITY]爆炸[/ABILITY]造成的伤害。`, // chino
			`Zapobiega otrzymywaniu obrażeń od [ABILITY]Eksplozji[/ABILITY].` // polaco
		]
	},
	piercingDrill: {
		id: 'piercingDrill',
		name: [
			`Piercing Drill`, // inglés
			`Taladro Perforante`, // español
			`Foreuse Perforante`, // francés
			`Broca Perfurante`, // portugués
			`Trapano Perforante`, // italiano
			`Durchbohrbohrer`, // alemán
			`ピアシングドリル`, // japonés
			`피어싱 드릴`, // coreano
			`穿刺钻`, // chino
			`Wiertło Przebijające` // polaco
		],
		description: [
			`Causes double damage to [ARMOR]armored[/ARMOR] [ENEMY]enemies[/ENEMY]. [CRITICAL]Critical Hits[/CRITICAL] deal 2x damage rather than 1.5x.`, // inglés
			`Inflige el doble de daño a los [ENEMY]enemigos[/ENEMY] con [ARMOR]armadura[/ARMOR]. Los [CRITICAL]Golpes Críticos[/CRITICAL] infligen 2x de daño en lugar de 1,5x.`, // español
			`Inflige deux fois plus de dégâts aux [ENEMY]ennemis[/ENEMY] [ARMOR]blindés[/ARMOR]. Les [CRITICAL]coups critiques[/CRITICAL] infligent 2x les dégâts au lieu de 1,5x.`, // francés
			`Causa o dobro de dano aos [ENEMY]inimigos[/ENEMY] [ARMOR]blindados[/ARMOR]. Os [CRITICAL]Acertos Críticos[/CRITICAL] causam 2x de dano em vez de 1,5x.`, // portugués
			`Infligge il doppio dei danni agli [ENEMY]nemici[/ENEMY] [ARMOR]corazzati[/ARMOR]. I [CRITICAL]Colpi Critici[/CRITICAL] infliggono 2x i danni invece di 1,5x.`, // italiano
			`Verursacht doppelten Schaden bei [ARMOR]gepanzerten[/ARMOR] [ENEMY]Gegnern[/ENEMY]. [CRITICAL]Kritische Treffer[/CRITICAL] verursachen 2x Schaden statt 1,5x.`, // alemán
			`[ARMOR]アーマー[/ARMOR]を持つ[ENEMY]敵[/ENEMY]には2倍のダメージを与える。[CRITICAL]急所に当たった攻撃[/CRITICAL]は1.5倍ではなく2倍のダメージを与える。`, // japonés
			`[ARMOR]방어구[/ARMOR]를 가진 [ENEMY]적[/ENEMY]에게 2배의 피해를 줍니다. [CRITICAL]급소에 맞은 공격[/CRITICAL]은 1.5배가 아닌 2배의 피해를 줍니다.`, // coreano
			`对具有[ARMOR]护甲[/ARMOR]的[ENEMY]敌人[/ENEMY]造成双倍伤害。[CRITICAL]暴击[/CRITICAL]造成2倍伤害，而不是1.5倍。`, // chino
			`Zadaje podwójne obrażenia [ARMOR]opancerzonym[/ARMOR] [ENEMY]wrogom[/ENEMY]. [CRITICAL]Krytyczne trafienia[/CRITICAL] zadają 2x obrażeń zamiast 1,5x.` // polaco
		]
	},
	auroraVeil: {
		id: 'auroraVeil',
		name: [
			`Aurora Veil`, // inglés
			`Velo Aurora`, // español
			`Voile Aurore`, // francés
			`Véu Aurora`, // portugués
			`Velo Aurorale`, // italiano
			`Auroraschleier`, // alemán
			`オーロラベール`, // japonés
			`오로라베일`, // coreano
			`极光幕`, // chino
			`Aurora Veil` // polaco
		],
		description: [
		    `Increases [RANGE]range[/RANGE] by 40 and gains +40% [CRITICAL]critical chance[/CRITICAL] in [HAIL]hail[/HAIL].`, // inglés
			`Aumenta el [RANGE]rango[/RANGE] en 40 y obtiene +40% de [CRITICAL]probabilidad de crítico[/CRITICAL] con [HAIL]granizo[/HAIL].`, // español
			`Augmente la [RANGE]portée[/RANGE] de 40 et gagne +40 % de [CRITICAL]chance de coup critique[/CRITICAL] sous [HAIL]grêle[/HAIL].`, // francés
			`Aumenta o [RANGE]alcance[/RANGE] em 40 e ganha +40% de [CRITICAL]chance de crítico[/CRITICAL] durante [HAIL]granizo[/HAIL].`, // portugués
			`Aumenta la [RANGE]portata[/RANGE] di 40 e ottiene +40% di [CRITICAL]probabilità di critico[/CRITICAL] durante la [HAIL]grandine[/HAIL].`, // italiano
			`Erhöht die [RANGE]Reichweite[/RANGE] um 40 und erhält bei [HAIL]Hagel[/HAIL] +40 % [CRITICAL]Kritische-Treffer-Chance[/CRITICAL].`, // alemán
			`[RANGE]射程[/RANGE]が40増加し、[HAIL]あられ[/HAIL]のとき[CRITICAL]急所率[/CRITICAL]が+40%される。`, // japonés
			`[RANGE]사거리[/RANGE]가 40 증가하고 [HAIL]싸라기눈[/HAIL]일 때 [CRITICAL]급소 확률[/CRITICAL]이 +40% 증가합니다.`, // coreano
			`[RANGE]射程[/RANGE]增加40，并在[HAIL]冰雹[/HAIL]天气下获得+40%的[CRITICAL]暴击率[/CRITICAL]。`, // chino
			`Zwiększa [RANGE]zasięg[/RANGE] o 40 i zyskuje +40% [CRITICAL]szansy na trafienie krytyczne[/CRITICAL] podczas [HAIL]gradu[/HAIL].` // polaco
		]
	},
	spicySpray: {
		id: 'spicySpray',
		name: [
			`Spicy Spray`, // inglés
			`Spray Picante`, // español
			`Spray Épicé`, // francés
			`Spray Picante`, // portugués
			`Spray Piccante`, // italiano
			`Scharfes Spray`, // alemán
			`スパイシースプレー`, // japonés
			`스파이시 스프레이`, // coreano
			`辛辣喷雾`, // chino
			`Pikantny Spray` // polaco
		],
		description: [
			`Shoots [PROJECTILE]projectiles[/PROJECTILE] at up to 2 targets at once and inflicts [BURN]burns[/BURN]. If a target is already [BURN]burned[/BURN], it also becomes [SCORCH]scorched[/SCORCH].`, // inglés
			`Dispara [PROJECTILE]proyectiles[/PROJECTILE] a un máximo de 2 objetivos a la vez y provoca [BURN]quemaduras[/BURN]. Si un objetivo ya está [BURN]quemado[/BURN], también queda [SCORCH]abrasado[/SCORCH].`, // español
			`Tire des [PROJECTILE]projectiles[/PROJECTILE] sur jusqu'à 2 cibles à la fois et inflige des [BURN]brûlures[/BURN]. Si une cible est déjà [BURN]brûlée[/BURN], elle devient également [SCORCH]calcinée[/SCORCH].`, // francés
			`Dispara [PROJECTILE]projéteis[/PROJECTILE] contra até 2 alvos ao mesmo tempo e causa [BURN]queimaduras[/BURN]. Se um alvo já estiver [BURN]queimado[/BURN], ele também fica [SCORCH]chamuscado[/SCORCH].`, // portugués
			`Spara [PROJECTILE]proiettili[/PROJECTILE] contro un massimo di 2 bersagli alla volta e infligge [BURN]scottature[/BURN]. Se un bersaglio è già [BURN]ustionato[/BURN], diventa anche [SCORCH]bruciacchiato[/SCORCH].`, // italiano
			`Schießt [PROJECTILE]Projektile[/PROJECTILE] auf bis zu 2 Ziele gleichzeitig und verursacht [BURN]Verbrennungen[/BURN]. Wenn ein Ziel bereits [BURN]verbrannt[/BURN] ist, wird es außerdem [SCORCH]versengt[/SCORCH].`, // alemán
			`最大2体のターゲットに同時に[PROJECTILE]projectiles[/PROJECTILE]を撃ち、[BURN]やけど[/BURN]を負わせる。すでに[BURN]やけど[/BURN]を負っているターゲットは、さらに[SCORCH]焦げてしまう[/SCORCH]。`, // japonés
			`최대 2개의 대상에게 동시에 [PROJECTILE]projectiles[/PROJECTILE]을 발사하여 [BURN]화상[/BURN]을 입힙니다. 대상이 이미 [BURN]화상[/BURN] 상태라면 추가로 [SCORCH]그을린[/SCORCH] 상태가 됩니다.`, // coreano
			`同时向最多2个目标发射[PROJECTILE]投射物[/PROJECTILE]并造成[BURN]灼伤[/BURN]。如果目标已经处于[BURN]灼伤[/BURN]状态，还会进一步变为[SCORCH]焦灼[/SCORCH]。`, // chino
			`Wystrzeliwuje [PROJECTILE]pociski[/PROJECTILE] w maksymalnie 2 cele jednocześnie i powoduje [BURN]oparzenia[/BURN]. Jeśli cel jest już [BURN]oparzony[/BURN], zostaje również [SCORCH]zwęglony[/SCORCH].` // polaco
		]
	},
	stoneEdge: {
	    id: 'stoneEdge',
	    name: [
			`Stone Edge`, // inglés
			`Roca Afilada`, // español
			`Lame de Roc`, // francés
			`Gume de Pedra`, // portugués
			`Pietrataglio`, // italiano
			`Steinkante`, // alemán
			`ストーンエッジ`, // japonés
			`스톤에지`, // coreano
			`尖石攻击`, // chino
			`Stone Edge` // polaco
		],
	    description: [
			`[PROJECTILE]Projectiles orbit[/PROJECTILE] the user. Increases [POWER]power[/POWER] by 20% in [SANDSTORM]sandstorm[/SANDSTORM].`, // inglés
			`Los [PROJECTILE]proyectiles orbitan[/PROJECTILE] al usuario. Aumenta el [POWER]poder[/POWER] un 20% durante la [SANDSTORM]tormenta de arena[/SANDSTORM].`, // español
			`Les [PROJECTILE]projectiles orbitent[/PROJECTILE] autour de l'utilisateur. Augmente la [POWER]puissance[/POWER] de 20 % pendant la [SANDSTORM]tempête de sable[/SANDSTORM].`, // francés
			`Os [PROJECTILE]projéteis orbitam[/PROJECTILE] o usuário. Aumenta o [POWER]poder[/POWER] em 20% durante a [SANDSTORM]tempestade de areia[/SANDSTORM].`, // portugués
			`I [PROJECTILE]proiettili orbitano[/PROJECTILE] attorno all'utilizzatore. Aumenta la [POWER]potenza[/POWER] del 20% durante la [SANDSTORM]tempesta di sabbia[/SANDSTORM].`, // italiano
			`[PROJECTILE]Projektile umkreisen[/PROJECTILE] den Benutzer. Erhöht die [POWER]Stärke[/POWER] während eines [SANDSTORM]Sandsturms[/SANDSTORM] um 20 %.`, // alemán
			`[PROJECTILE]プロジェクタイルが[/PROJECTILE]使用者の周囲を回る。[SANDSTORM]すなあらし[/SANDSTORM]の間、[POWER]威力[/POWER]が20%上昇する。`, // japonés
			`[PROJECTILE]투사체가[/PROJECTILE] 사용자의 주위를 돕니다. [SANDSTORM]모래바람[/SANDSTORM]에서 [POWER]위력[/POWER]이 20% 증가합니다.`, // coreano
			`[PROJECTILE]投射物环绕[/PROJECTILE]使用者。处于[SANDSTORM]沙暴[/SANDSTORM]时，[POWER]威力[/POWER]提高20%。`, // chino
			`[PROJECTILE]Pociski orbitują[/PROJECTILE] wokół użytkownika. Zwiększa [POWER]moc[/POWER] o 20% podczas [SANDSTORM]burzy piaskowej[/SANDSTORM].` // polaco
		]
	},
	stoneEdgeMega: {
	    id: 'stoneEdgeMega',
	    name: [
			`Stone Edge`, // inglés
			`Roca Afilada`, // español
			`Lame de Roc`, // francés
			`Gume de Pedra`, // portugués
			`Pietrataglio`, // italiano
			`Steinkante`, // alemán
			`ストーンエッジ`, // japonés
			`스톤에지`, // coreano
			`尖石攻击`, // chino
			`Stone Edge` // polaco
		],
	    description: [
			`[PROJECTILE]Projectiles orbit[/PROJECTILE] the user. Increases [POWER]power[/POWER] by 25% and [SPEED]orbital speed[/SPEED] by 50% in [SANDSTORM]sandstorm[/SANDSTORM].`, // inglés
			`Los [PROJECTILE]proyectiles orbitan[/PROJECTILE] al usuario. Aumenta el [POWER]poder[/POWER] un 25% y la [SPEED]velocidad orbital[/SPEED] un 50% durante la [SANDSTORM]tormenta de arena[/SANDSTORM].`, // español
			`Les [PROJECTILE]projectiles orbitent[/PROJECTILE] autour de l'utilisateur. Augmente la [POWER]puissance[/POWER] de 25 % et la [SPEED]vitesse orbitale[/SPEED] de 50 % pendant la [SANDSTORM]tempête de sable[/SANDSTORM].`, // francés
			`Os [PROJECTILE]projéteis orbitam[/PROJECTILE] o usuário. Aumenta o [POWER]poder[/POWER] em 25% e a [SPEED]velocidade orbital[/SPEED] em 50% durante a [SANDSTORM]tempestade de areia[/SANDSTORM].`, // portugués
			`I [PROJECTILE]proiettili orbitano[/PROJECTILE] attorno all'utilizzatore. Aumenta la [POWER]potenza[/POWER] del 25% e la [SPEED]velocità orbitale[/SPEED] del 50% durante la [SANDSTORM]tempesta di sabbia[/SANDSTORM].`, // italiano
			`[PROJECTILE]Projektile umkreisen[/PROJECTILE] den Anwender. Erhöht [POWER]Kraft[/POWER] um 25 % und die [SPEED]Orbitgeschwindigkeit[/SPEED] um 50 % bei [SANDSTORM]Sandsturm[/SANDSTORM].`, // alemán
			`[PROJECTILE]プロジェクタイルが[/PROJECTILE]使用者の周囲を周回する。[SANDSTORM]すなあらし[/SANDSTORM]のとき、[POWER]威力[/POWER]が25%、[SPEED]周回速度[/SPEED]が50%上昇する。`, // japonés
			`[PROJECTILE]투사체가[/PROJECTILE] 사용자를 중심으로 회전합니다. [SANDSTORM]모래바람[/SANDSTORM]에서 [POWER]위력[/POWER]이 25%, [SPEED]공전 속도[/SPEED]가 50% 증가합니다.`, // coreano
			`[PROJECTILE]投射物围绕[/PROJECTILE]使用者旋转。[SANDSTORM]沙暴[/SANDSTORM]天气下，[POWER]威力[/POWER]提高25%，[SPEED]环绕速度[/SPEED]提高50%。`, // chino
			`[PROJECTILE]Pociski orbitują[/PROJECTILE] wokół użytkownika. Zwiększa [POWER]moc[/POWER] o 25% i [SPEED]prędkość orbitalną[/SPEED] o 50% podczas [SANDSTORM]burzy piaskowej[/SANDSTORM].` // polaco
		]
	},
	hugePower: {
		id: 'hugePower',
		name: [
			`Huge Power`, // inglés
			`Potencia Bruta`, // español
			`Coloforce`, // francés
			`Potência Bruta`, // portugués
			`Macroforza`, // italiano
			`Kraftkoloss`, // alemán
			`ちからもち`, // japonés
			`천하장사`, // coreano
			`大力士`, // chino
			`Huge Power` // polaco
		],
		description:[
			`Increases [POWER]power[/POWER] by 100% and increases [POWER]power[/POWER] of all [SHAPE]Star-shape[/SHAPE] [POKEMON]Pokémon[/POKEMON] by 15%.`, // inglés
			`Aumenta el [POWER]poder[/POWER] un 100% y aumenta el [POWER]poder[/POWER] de todos los [POKEMON]Pokémon[/POKEMON] con forma de [SHAPE]estrella[/SHAPE] un 15%.`, // español
			`Augmente la [POWER]puissance[/POWER] de 100 % et augmente de 15 % la [POWER]puissance[/POWER] de tous les [POKEMON]Pokémon[/POKEMON] en forme d'[SHAPE]étoile[/SHAPE].`, // francés
			`Aumenta o [POWER]poder[/POWER] em 100% e aumenta em 15% o [POWER]poder[/POWER] de todos os [POKEMON]Pokémon[/POKEMON] com formato de [SHAPE]estrela[/SHAPE].`, // portugués
			`Aumenta la [POWER]potenza[/POWER] del 100% e aumenta del 15% la [POWER]potenza[/POWER] di tutti i [POKEMON]Pokémon[/POKEMON] a forma di [SHAPE]stella[/SHAPE].`, // italiano
			`Erhöht die [POWER]Stärke[/POWER] um 100 % und erhöht die [POWER]Stärke[/POWER] aller [POKEMON]Pokémon[/POKEMON] mit [SHAPE]Sternform[/SHAPE] um 15 %.`, // alemán
			`[POWER]威力[/POWER]が100%上昇し、[SHAPE]星型[/SHAPE]の[POKEMON]ポケモン[/POKEMON]の[POWER]威力[/POWER]が15%上昇する。`, // japonés
			`[POWER]위력[/POWER]이 100% 증가하고 [SHAPE]별 모양[/SHAPE]의 모든 [POKEMON]포켓몬[/POKEMON]의 [POWER]위력[/POWER]이 15% 증가합니다.`, // coreano
			`[POWER]威力[/POWER]提高100%，所有[SHAPE]星形[/SHAPE]的[POKEMON]宝可梦[/POKEMON]的[POWER]威力[/POWER]提高15%。`, // chino
			`Zwiększa [POWER]moc[/POWER] o 100% oraz zwiększa o 15% [POWER]moc[/POWER] wszystkich [POKEMON]Pokémonów[/POKEMON] o [SHAPE]kształcie gwiazdy[/SHAPE].` // polaco
		]
	},
	knockOff: {
		id: 'knockOff',
		name: [
			`Knock Off`, // inglés
			`Desarme`, // español
			`Sabotage`, // francés
			`Desarme`, // portugués
			`Privazione`, // italiano
			`Abschlag`, // alemán
			`はたきおとす`, // japonés
			`탁쳐서떨구기`, // coreano
			`拍落`, // chino
			`Knock Off` // polaco
		],
		description: [
			`Deals double damage to [ENEMY]enemies[/ENEMY] with a [ABILITY]passive[/ABILITY].`, // inglés
			`Inflige el doble de daño a los [ENEMY]enemigos[/ENEMY] con una [ABILITY]pasiva[/ABILITY].`, // español
			`Inflige deux fois plus de dégâts aux [ENEMY]ennemis[/ENEMY] dotés d'un [ABILITY]passif[/ABILITY].`, // francés
			`Causa o dobro de dano a [ENEMY]inimigos[/ENEMY] com uma [ABILITY]passiva[/ABILITY].`, // portugués
			`Infligge il doppio dei danni ai [ENEMY]nemici[/ENEMY] con una [ABILITY]passiva[/ABILITY].`, // italiano
			`Verursacht doppelten Schaden bei [ENEMY]Gegnern[/ENEMY] mit einer [ABILITY]Passivfähigkeit[/ABILITY].`, // alemán
			`[ABILITY]特性[/ABILITY]を持つ[ENEMY]敵[/ENEMY]に2倍のダメージを与える。`, // japonés
			`[ABILITY]패시브[/ABILITY]를 가진 [ENEMY]적[/ENEMY]에게 2배의 피해를 줍니다.`, // coreano
			`对拥有[ABILITY]被动技能[/ABILITY]的[ENEMY]敌人[/ENEMY]造成双倍伤害。`, // chino
			`Zadaje podwójne obrażenia [ENEMY]wrogom[/ENEMY] z [ABILITY]pasywną[/ABILITY].` // polaco
		]
	},
	berserk: {
		id: 'berserk',
		name: [
			`Berserk`, // inglés
			`Frenesí`, // español
			`Impétuosité`, // francés
			`Frenesi`, // portugués
			`Furore`, // italiano
			`Wutausbruch`, // alemán
			`ぎゃくじょう`, // japonés
			`발끈`, // coreano
			`怒火冲天`, // chino
			`Berserk` // polaco
		],
		description: [
			`Deals [PERS]persistent damage[/PERS] in a [SHAPE]cone[/SHAPE], hitting multiple [ENEMY]enemies[/ENEMY]. Increases [POWER]power[/POWER] by 50% if [HEART]hearts[/HEART] are 7 or fewer.`, // inglés
			`Inflige daño [PERS]persistente[/PERS] en un [SHAPE]cono[/SHAPE], golpeando a varios [ENEMY]enemigos[/ENEMY]. Aumenta el [POWER]poder[/POWER] un 50% si quedan 7 [HEART]corazones[/HEART] o menos.`, // español
			`Inflige des dégâts [PERS]persistants[/PERS] dans un [SHAPE]cône[/SHAPE], touchant plusieurs [ENEMY]ennemis[/ENEMY]. Augmente la [POWER]puissance[/POWER] de 50 % si vous avez 7 [HEART]cœurs[/HEART] ou moins.`, // francés
			`Causa dano [PERS]persistente[/PERS] em um [SHAPE]cone[/SHAPE], atingindo vários [ENEMY]inimigos[/ENEMY]. Aumenta o [POWER]poder[/POWER] em 50% se houver 7 [HEART]corações[/HEART] ou menos.`, // portugués
			`Infligge danni [PERS]persistenti[/PERS] in un [SHAPE]cono[/SHAPE], colpendo più [ENEMY]nemici[/ENEMY]. Aumenta la [POWER]potenza[/POWER] del 50% se ci sono 7 [HEART]cuori[/HEART] o meno.`, // italiano
			`Verursacht [PERS]anhaltenden Schaden[/PERS] in einem [SHAPE]Kegel[/SHAPE] und trifft mehrere [ENEMY]Gegner[/ENEMY]. Erhöht die [POWER]Kraft[/POWER] um 50 %, wenn 7 [HEART]Herzen[/HEART] oder weniger vorhanden sind.`, // alemán
			`[SHAPE]扇形[/SHAPE]の範囲に[ENEMY]複数の敵[/ENEMY]を巻き込み、[PERS]持続ダメージ[/PERS]を与える。[HEART]ハート[/HEART]が7個以下の場合、[POWER]威力[/POWER]が50%上昇する。`, // japonés
			`[SHAPE]부채꼴[/SHAPE] 범위에 여러 [ENEMY]적[/ENEMY]을 공격하여 [PERS]지속 피해[/PERS]를 줍니다. [HEART]하트[/HEART]가 7개 이하이면 [POWER]위력[/POWER]이 50% 증가합니다.`, // coreano
			`在[SHAPE]扇形[/SHAPE]范围内造成[PERS]持续伤害[/PERS]，攻击多个[ENEMY]敌人[/ENEMY]。[HEART]心[/HEART]在7个或以下时，[POWER]威力[/POWER]提高50%。`, // chino
			`Zadaje [PERS]obrażenia ciągłe[/PERS] w [SHAPE]stożku[/SHAPE], trafiając wielu [ENEMY]wrogów[/ENEMY]. Zwiększa [POWER]moc[/POWER] o 50%, jeśli pozostało 7 [HEART]serc[/HEART] lub mniej.` // polaco
		]
	},
	berserkMega: {
		id: 'berserkMega',
		name: [
			`Berserk`, // inglés
			`Frenesí`, // español
			`Impétuosité`, // francés
			`Frenesi`, // portugués
			`Furore`, // italiano
			`Wutausbruch`, // alemán
			`ぎゃくじょう`, // japonés
			`발끈`, // coreano
			`怒火冲天`, // chino
			`Berserk` // polaco
		],
		description: [
			`Deals [PERS]persistent damage[/PERS] in a [SHAPE]cone[/SHAPE], hitting multiple [ENEMY]enemies[/ENEMY]. Increases [POWER]power[/POWER] and [RANGE]range[/RANGE] by 20% for each [HEART]heart[/HEART] lost this wave. Applies [RAIN]Rain weather[/RAIN].`, // inglés
			`Inflige daño [PERS]persistente[/PERS] en un [SHAPE]cono[/SHAPE], golpeando a varios [ENEMY]enemigos[/ENEMY]. Aumenta el [POWER]poder[/POWER] y el [RANGE]alcance[/RANGE] un 20% por cada [HEART]corazón[/HEART] perdido durante esta oleada. Aplica el [RAIN]clima de lluvia[/RAIN].`, // español
			`Inflige des dégâts [PERS]persistants[/PERS] dans un [SHAPE]cône[/SHAPE], touchant plusieurs [ENEMY]ennemis[/ENEMY]. Augmente la [POWER]puissance[/POWER] et la [RANGE]portée[/RANGE] de 20 % pour chaque [HEART]cœur[/HEART] perdu pendant cette vague. Applique le [RAIN]climat Pluie[/RAIN].`, // francés
			`Causa dano [PERS]persistente[/PERS] em um [SHAPE]cone[/SHAPE], atingindo vários [ENEMY]inimigos[/ENEMY]. Aumenta o [POWER]poder[/POWER] e o [RANGE]alcance[/RANGE] em 20% para cada [HEART]coração[/HEART] perdido nesta onda. Aplica o [RAIN]clima de chuva[/RAIN].`, // portugués
			`Infligge danni [PERS]persistenti[/PERS] in un [SHAPE]cono[/SHAPE], colpendo più [ENEMY]nemici[/ENEMY]. Aumenta la [POWER]potenza[/POWER] e la [RANGE]portata[/RANGE] del 20% per ogni [HEART]cuore[/HEART] perso durante questa ondata. Applica il [RAIN]tempo Pioggia[/RAIN].`, // italiano
			`Verursacht [PERS]anhaltenden Schaden[/PERS] in einem [SHAPE]Kegel[/SHAPE] und trifft mehrere [ENEMY]Gegner[/ENEMY]. Erhöht [POWER]Kraft[/POWER] und [RANGE]Reichweite[/RANGE] um 20 % für jedes [HEART]Herz[/HEART], das in dieser Welle verloren wurde. Verursacht das [RAIN]Regenwetter[/RAIN].`, // alemán
			`[SHAPE]扇形[/SHAPE]の範囲に[ENEMY]複数の敵[/ENEMY]を巻き込み、[PERS]持続ダメージ[/PERS]を与える。このウェーブで失った[HEART]ハート[/HEART]1個につき、[POWER]威力[/POWER]と[RANGE]範囲[/RANGE]が20%上昇する。[RAIN]雨[/RAIN]の天候にする。`, // japonés
			`[SHAPE]부채꼴[/SHAPE] 범위에 여러 [ENEMY]적[/ENEMY]을 공격하여 [PERS]지속 피해[/PERS]를 줍니다. 이번 웨이브에서 잃은 [HEART]하트[/HEART] 하나당 [POWER]위력[/POWER]과 [RANGE]사거리[/RANGE]가 20% 증가합니다. [RAIN]비 날씨[/RAIN]를 적용합니다.`, // coreano
			`在[SHAPE]扇形[/SHAPE]范围内造成[PERS]持续伤害[/PERS]，攻击多个[ENEMY]敌人[/ENEMY]。本波次每失去1个[HEART]心[/HEART]，[POWER]威力[/POWER]和[RANGE]射程[/RANGE]提高20%。施加[RAIN]下雨天气[/RAIN]。`, // chino
			`Zadaje [PERS]obrażenia ciągłe[/PERS] w [SHAPE]stożku[/SHAPE], trafiając wielu [ENEMY]wrogów[/ENEMY]. Zwiększa [POWER]moc[/POWER] i [RANGE]zasięg[/RANGE] o 20% za każde [HEART]serce[/HEART] utracone w tej fali. Wywołuje [RAIN]deszczową pogodę[/RAIN].` // polaco
		]
	},
	flamethrower: {
		id: 'flamethrower',
		name: [
			`Flamethrower`, // inglés
			`Lanzallamas`, // español
			`Lance-Flammes`, // francés
			`Lança-Chamas`, // portugués
			`Lanciafiamme`, // italiano
			`Flammenwurf`, // alemán
			`かえんほうしゃ`, // japonés
			`화염방사`, // coreano
			`喷射火焰`, // chino
			`Flamethrower` // polaco
		],
		description: [
			`Deals [PERS]damage over time[/PERS] in a [SHAPE]cone[/SHAPE], hitting multiple [ENEMY]enemies[/ENEMY] and having a 10% chance to inflict [BURN]burn[/BURN].`, // inglés
			`Causa [PERS]daño persistente[/PERS] en un [SHAPE]cono[/SHAPE], golpeando a varios [ENEMY]enemigos[/ENEMY] y tiene un 10% de probabilidad de causar [BURN]quemadura[/BURN].`, // español
			`Inflige des [PERS]dégâts sur la durée[/PERS] dans un [SHAPE]cône[/SHAPE], touchant plusieurs [ENEMY]ennemis[/ENEMY] avec 10 % de chances d'infliger une [BURN]brûlure[/BURN].`, // francés
			`Causa [PERS]dano contínuo[/PERS] em um [SHAPE]cone[/SHAPE], atingindo vários [ENEMY]inimigos[/ENEMY] e tendo 10% de chance de causar [BURN]queimadura[/BURN].`, // portugués
			`Infligge [PERS]danni nel tempo[/PERS] in un [SHAPE]cono[/SHAPE], colpendo più [ENEMY]nemici[/ENEMY] e avendo il 10% di probabilità di infliggere [BURN]scottatura[/BURN].`, // italiano
			`Verursacht [PERS]Schaden über Zeit[/PERS] in einem [SHAPE]Kegel[/SHAPE], trifft mehrere [ENEMY]Gegner[/ENEMY] und hat eine Chance von 10 %, [BURN]Verbrennung[/BURN] zu verursachen.`, // alemán
			`[SHAPE]円錐状[/SHAPE]の範囲内にいる複数の[ENEMY]敵[/ENEMY]に[PERS]継続ダメージ[/PERS]10%の確率で[BURN]やけど[/BURN]を負わせる。`, // japonés
			`[SHAPE]원뿔형[/SHAPE] 범위 내 여러 [ENEMY]적[/ENEMY]에게 [PERS]지속 피해[/PERS]를 주며, 10% 확률로 [BURN]화상[/BURN]을 입힌다.`, // coreano
			`对[SHAPE]锥形[/SHAPE]范围内的多个[ENEMY]敌人[/ENEMY]造成[PERS]持续伤害[/PERS]，并有10%的概率施加[BURN]灼伤[/BURN]。`, // chino
			`Zadaje [PERS]obrażenia w czasie[/PERS] w [SHAPE]stożku[/SHAPE], trafiając wielu [ENEMY]wrogów[/ENEMY] i mając 10% szans na nałożenie [BURN]podpalenia[/BURN].` // polaco
		]
	},
	destructiveMaw: {
		id: 'destructiveMaw',
		name: [
			`Destructive Maw`, // inglés
			`Mandíbula Destructiva`, // español
			`Mâchoire Destructrice`, // francés
			`Mandíbula Destrutiva`, // portugués
			`Mascella Distruttiva`, // italiano
			`Zerstörerischer Kiefer`, // alemán
			`破壊のあご`, // japonés
			`파괴의 턱`, // coreano
			`毁灭之颚`, // chino
			`Niszczycielska Szczęka` // polaco
		],
		description: [
			`Deals 100% more damage to [ENEMY]enemies[/ENEMY] with less than 50% [HP]HP[/HP]. When an [ENEMY]enemy[/ENEMY] in [RANGE]range[/RANGE] has 50% [HP]HP[/HP] or less, it automatically receives an attack that deals half damage.`, // inglés
			`Inflige un 100% más de daño a los [ENEMY]enemigos[/ENEMY] con menos del 50% de [HP]PS[/HP]. Cuando un [ENEMY]enemigo[/ENEMY] dentro del [RANGE]alcance[/RANGE] tiene un 50% de [HP]PS[/HP] o menos, recibe automáticamente un ataque que inflige la mitad de daño.`, // español
			`Inflige 100 % de dégâts supplémentaires aux [ENEMY]ennemis[/ENEMY] ayant moins de 50 % de [HP]PV[/HP]. Lorsqu'un [ENEMY]ennemi[/ENEMY] à portée a 50 % de [HP]PV[/HP] ou moins, il subit automatiquement une attaque qui inflige la moitié des dégâts.`, // francés
			`Causa 100% de dano adicional aos [ENEMY]inimigos[/ENEMY] com menos de 50% de [HP]PS[/HP]. Quando um [ENEMY]inimigo[/ENEMY] dentro do [RANGE]alcance[/RANGE] tem 50% de [HP]PS[/HP] ou menos, recebe automaticamente um ataque que causa metade do dano.`, // portugués
			`Infligge il 100% di danni in più ai [ENEMY]nemici[/ENEMY] con meno del 50% dei [HP]PS[/HP]. Quando un [ENEMY]nemico[/ENEMY] entro la [RANGE]portata[/RANGE] ha il 50% dei [HP]PS[/HP] o meno, subisce automaticamente un attacco che infligge metà dei danni.`, // italiano
			`Verursacht 100 % mehr Schaden bei [ENEMY]Gegnern[/ENEMY] mit weniger als 50 % [HP]KP[/HP]. Wenn ein [ENEMY]Gegner[/ENEMY] in [RANGE]Reichweite[/RANGE] höchstens 50 % [HP]KP[/HP] hat, wird er automatisch von einem Angriff getroffen, der halben Schaden verursacht.`, // alemán
			`[HP]HP[/HP]が50%未満の[ENEMY]敵[/ENEMY]に与えるダメージが100%増加する。[RANGE]射程[/RANGE]内の[ENEMY]敵[/ENEMY]の[HP]HP[/HP]が50%以下になると、自動的に半分のダメージを与える攻撃を受ける。`, // japonés
			`[HP]HP[/HP]가 50% 미만인 [ENEMY]적[/ENEMY]에게 주는 피해가 100% 증가한다. [RANGE]사거리[/RANGE] 안에 있는 [ENEMY]적[/ENEMY]의 [HP]HP[/HP]가 50% 이하가 되면, 절반의 피해를 주는 공격을 자동으로 받는다.`, // coreano
			`对[HP]HP[/HP]低于50%的[ENEMY]敌人[/ENEMY]造成的伤害提高100%。当[RANGE]射程[/RANGE]内的[ENEMY]敌人[/ENEMY]的[HP]HP[/HP]不高于50%时，会自动受到一次造成半额伤害的攻击。`, // chino
			`Zadaje o 100% więcej obrażeń [ENEMY]wrogom[/ENEMY] mającym mniej niż 50% [HP]PŻ[/HP]. Gdy [ENEMY]wróg[/ENEMY] w [RANGE]zasięgu[/RANGE] ma 50% [HP]PŻ[/HP] lub mniej, automatycznie otrzymuje atak zadający połowę obrażeń.` // polaco
		]
	},
	supremeCommanders: {
		id: 'supremeCommanders',
		name: [
			`Supreme Commanders`, // inglés
			`Comandantes Supremos`, // español
			`Commandants Suprêmes`, // francés
			`Comandantes Supremos`, // portugués
			`Comandanti Supremi`, // italiano
			`Oberste Befehlshaber`, // alemán
			`最高司令官`, // japonés
			`최고 지휘관`, // coreano
			`最高指挥官`, // chino
			`Naczelni Dowódcy` // polaco
		],
		description: [
			`Can increase its own [STATS]stats[/STATS] and those of [POKEMON]Dondozo[/POKEMON] if it is on top of it. Shoots [PROJECTILE]projectiles[/PROJECTILE] at up to 3 targets at once.`, // inglés
			`Puede aumentar sus [STATS]estadísticas[/STATS] y las de [POKEMON]Dondozo[/POKEMON] si está encima de él. Dispara [PROJECTILE]proyectiles[/PROJECTILE] a un máximo de 3 objetivos a la vez.`, // español
			`Peut augmenter ses propres [STATS]statistiques[/STATS] et celles de [POKEMON]Dondozo[/POKEMON] s'il est placé au-dessus de lui. Tire des [PROJECTILE]projectiles[/PROJECTILE] sur un maximum de 3 cibles à la fois.`, // francés
			`Pode aumentar suas [STATS]estatísticas[/STATS] e as de [POKEMON]Dondozo[/POKEMON] se estiver em cima dele. Dispara [PROJECTILE]projéteis[/PROJECTILE] contra até 3 alvos ao mesmo tempo.`, // portugués
			`Può aumentare le proprie [STATS]statistiche[/STATS] e quelle di [POKEMON]Dondozo[/POKEMON] se si trova sopra di lui. Spara [PROJECTILE]proiettili[/PROJECTILE] contro un massimo di 3 bersagli alla volta.`, // italiano
			`Kann seine eigenen [STATS]Werte[/STATS] und die von [POKEMON]Dondozo[/POKEMON] erhöhen, wenn es auf ihm platziert ist. Schießt [PROJECTILE]Projektilen[/PROJECTILE] auf bis zu 3 Ziele gleichzeitig.`, // alemán
			`自分の[STATS]能力値[/STATS]と、上に乗っている場合は[POKEMON]ヘイラッシャ[/POKEMON]の[STATS]能力値[/STATS]を上げられる。最大3体のターゲットに同時に[PROJECTILE]プロジェクタイル[/PROJECTILE]を発射する。`, // japonés
			`자신의 [STATS]능력치[/STATS]와 자신 위에 있을 경우 [POKEMON]어써러셔[/POKEMON]의 [STATS]능력치[/STATS]를 올릴 수 있습니다. 최대 3개의 대상에게 동시에 [PROJECTILE]투사체[/PROJECTILE]를 발사합니다.`, // coreano
			`可以提高自身的[STATS]能力[/STATS]，以及位于自己上方时提高[POKEMON]吃吼霸[/POKEMON]的[STATS]能力[/STATS]。同时向最多3个目标发射[PROJECTILE]投射物[/PROJECTILE]。`, // chino
			`Może zwiększać własne [STATS]statystyki[/STATS] oraz statystyki [POKEMON]Dondozo[/POKEMON], jeśli znajduje się na nim. Wystrzeliwuje [PROJECTILE]pociski[/PROJECTILE] w maksymalnie 3 cele jednocześnie.` // polaco
		]
	},
	aerialAce: {
		id: 'aerialAce',
		name: [
			`Aerial Ace`, // inglés
			`Golpe Aéreo`, // español
			`Aéropique`, // francés
			`Golpe Aéreo`, // portugués
			`Aeroassalto`, // italiano
			`Aero-Ass`, // alemán
			`つばめがえし`, // japonés
			`제비반환`, // coreano
			`燕返`, // chino
			`Aerial Ace`, // inglés
		],
		description: [
			`Flies around its original location in a [SHAPE]circle[/SHAPE], attacking [ENEMY]enemies[/ENEMY] in its [RANGE]range[/RANGE].`, // inglés
			`Vuela alrededor de su ubicación original en un [SHAPE]círculo[/SHAPE], atacando a los [ENEMY]enemigos[/ENEMY] que están dentro de su [RANGE]alcance[/RANGE].`, // español
			`Vole autour de son emplacement d'origine en formant un [SHAPE]cercle[/SHAPE], attaquant les [ENEMY]ennemis[/ENEMY] dans sa [RANGE]portée[/RANGE].`, // francés
			`Voa ao redor de sua localização original em um [SHAPE]círculo[/SHAPE], atacando [ENEMY]inimigos[/ENEMY] dentro de seu [RANGE]alcance[/RANGE].`, // portugués
			`Vola intorno alla sua posizione originale formando un [SHAPE]cerchio[/SHAPE], attaccando i [ENEMY]nemici[/ENEMY] nella sua [RANGE]portata[/RANGE].`, // italiano
			`Fliegt in einem [SHAPE]Kreis[/SHAPE] um seinen ursprünglichen Standort und greift [ENEMY]Gegner[/ENEMY] in seiner [RANGE]Reichweite[/RANGE] an.`, // alemán
			`元の場所を中心に[SHAPE]円[/SHAPE]を描いて飛び回り、[RANGE]範囲[/RANGE]内の[ENEMY]敵[/ENEMY]を攻撃する。`, // japonés
			`원래 위치를 중심으로 [SHAPE]원[/SHAPE]을 그리며 날아다니며 [RANGE]범위[/RANGE] 내의 [ENEMY]적[/ENEMY]을 공격합니다.`, // coreano
			`围绕原位置呈[SHAPE]圆形[/SHAPE]飞行，攻击[RANGE]范围[/RANGE]内的[ENEMY]敌人[/ENEMY]。`, // chino
			`Lata wokół swojej pierwotnej pozycji po [SHAPE]okręgu[/SHAPE], atakując [ENEMY]wrogów[/ENEMY] w swoim [RANGE]zasięgu[/RANGE].` // polaco
		]
	},
	stalwart: {
		id: 'stalwart',
		name: [
			`Stalwart`, // inglés
			`Tenaz`, // español
			`Inébranlable`, // francés
			`Resoluto`, // portugués
			`Impavido`, // italiano
			`Unerschütterlich`, // alemán
			`ふくつのこころ`, // japonés
			`불굴의마음`, // coreano
			`坚毅`, // chino
			`Stalwart` // polaco
		],
		description: [
			`Flies around [ENEMY]enemies[/ENEMY], pursuing and attacking them.`, // inglés
			`Vuela alrededor de los [ENEMY]enemigos[/ENEMY], persiguiéndolos y atacándolos.`, // español
			`Vole autour des [ENEMY]ennemis[/ENEMY], les poursuivant et les attaquant.`, // francés
			`Voa ao redor dos [ENEMY]inimigos[/ENEMY], perseguindo-os e atacando-os.`, // portugués
			`Vola intorno ai [ENEMY]nemici[/ENEMY], inseguendoli e attaccandoli.`, // italiano
			`Fliegt um [ENEMY]Gegner[/ENEMY] herum, verfolgt sie und greift sie an.`, // alemán
			`[ENEMY]敵[/ENEMY]の周囲を飛び回り、追いかけながら攻撃する。`, // japonés
			`[ENEMY]적[/ENEMY]의 주변을 날아다니며 추적하고 공격합니다.`, // coreano
			`围绕[ENEMY]敌人[/ENEMY]飞行，追踪并攻击它们。`, // chino
			`Lata wokół [ENEMY]wrogów[/ENEMY], ścigając ich i atakując.` // polaco
		]
	},
	supersonic: {
		id: 'supersonic',
		name: [
			`Supersonic`, // inglés
			`Supersónico`, // español
			`Ultrason`, // francés
			`Supersônico`, // portugués
			`Supersuono`, // italiano
			`Superschall`, // alemán
			`ちょうおんぱ`, // japonés
			`초음파`, // coreano
			`超音波`, // chino
			`Supersonic` // polaco
		],
		description: [
			`Its [PROJECTILE]projectiles[/PROJECTILE] create 3 [PROJECTILE]waves[/PROJECTILE], each with a 10% chance to [STUN]stun[/STUN] for 1.5 seconds.`, // inglés
			`Sus [PROJECTILE]proyectiles[/PROJECTILE] crean 3 [PROJECTILE]ondas[/PROJECTILE], cada una con un 10% de probabilidad de causar [STUN]aturdimiento[/STUN] durante 1,5 segundos.`, // español
			`Ses [PROJECTILE]projectiles[/PROJECTILE] créent 3 [PROJECTILE]vagues[/PROJECTILE], chacune ayant 10 % de chances d'infliger un [STUN]étourdissement[/STUN] pendant 1,5 seconde.`, // francés
			`Seus [PROJECTILE]projéteis[/PROJECTILE] criam 3 [PROJECTILE]ondas[/PROJECTILE], cada uma com 10% de chance de causar [STUN]atordoamento[/STUN] por 1,5 segundo.`, // portugués
			`I suoi [PROJECTILE]proiettili[/PROJECTILE] creano 3 [PROJECTILE]onde[/PROJECTILE], ognuna con una probabilità del 10% di causare [STUN]stordimento[/STUN] per 1,5 secondi.`, // italiano
			`Seine [PROJECTILE]Projektile[/PROJECTILE] erzeugen 3 [PROJECTILE]Wellen[/PROJECTILE], von denen jede eine Chance von 10 % hat, für 1,5 Sekunden [STUN]zu betäuben[/STUN].`, // alemán
			`[PROJECTILE]プロジェクタイル[/PROJECTILE]が3つの[PROJECTILE]波[/PROJECTILE]を生み出し、それぞれ10%の確率で1.5秒間[STUN]まひ[/STUN]させる。`, // japonés
			`[PROJECTILE]투사체[/PROJECTILE]가 3개의 [PROJECTILE]파동[/PROJECTILE]을 생성하며, 각각 10%의 확률로 1.5초 동안 [STUN]기절[/STUN]시킵니다.`, // coreano
			`[PROJECTILE]投射物[/PROJECTILE]会产生3个[PROJECTILE]波[/PROJECTILE]，每个都有10%的几率造成[STUN]眩晕[/STUN]，持续1.5秒。`, // chino
			`Jego [PROJECTILE]pociski[/PROJECTILE] tworzą 3 [PROJECTILE]fale[/PROJECTILE], z których każda ma 10% szans na [STUN]ogłuszenie[/STUN] na 1,5 sekundy.` // polaco
		]
	},
	amnesia: {
		id: 'amnesia',
		name: [
			`Amnesia`, // inglés
			`Amnesia`, // español
			`Amnésie`, // francés
			`Amnésia`, // portugués
			`Amnesia`, // italiano
			`Amnesie`, // alemán
			`ドわすれ`, // japonés
			`망각`, // coreano
			`瞬间失忆`, // chino
			`Amnesia` // polaco
		],
		description: [
			`It forgets to attack 50% of the time, increasing its [POWER]power[/POWER] by 100% for its next attack as long as it is not disturbed. [ABILITY]Amnesia[/ABILITY] can stack and persists between waves. It will never attack while holding [ITEM]Lagging Tail[/ITEM].`, // inglés
			`Se le olvida atacar el 50% de las veces, lo que aumenta su [POWER]poder[/POWER] un 100% para su próximo ataque mientras no se le moleste. [ABILITY]Amnesia[/ABILITY] es acumulable y se mantiene entre oleadas. Nunca atacará mientras lleve [ITEM]Cola Plúmbea[/ITEM].`, // español
			`Il oublie d'attaquer 50 % du temps, ce qui augmente sa [POWER]puissance[/POWER] de 100 % pour sa prochaine attaque tant qu'il n'est pas dérangé. [ABILITY]Amnésie[/ABILITY] est cumulable et persiste entre les vagues. Il n'attaquera jamais s'il tient [ITEM]Ralentiqueue[/ITEM].`, // francés
			`Ele se esquece de atacar 50% das vezes, aumentando seu [POWER]poder[/POWER] em 100% para seu próximo ataque enquanto não for incomodado. [ABILITY]Amnésia[/ABILITY] é acumulável e permanece entre as ondas. Ele nunca atacará enquanto estiver segurando [ITEM]Cauda Lenta[/ITEM].`, // portugués
			`Si dimentica di attaccare il 50% delle volte, aumentando la sua [POWER]potenza[/POWER] del 100% per il prossimo attacco finché non viene disturbato. [ABILITY]Amnesia[/ABILITY] è cumulabile e persiste tra le ondate. Non attaccherà mai mentre tiene [ITEM]Rallentocoda[/ITEM].`, // italiano
			`Es vergisst in 50 % der Fälle anzugreifen, wodurch seine [POWER]Kraft[/POWER] für seinen nächsten Angriff um 100 % steigt, solange es nicht gestört wird. [ABILITY]Amnesie[/ABILITY] ist stapelbar und bleibt zwischen den Wellen erhalten. Es greift niemals an, solange es [ITEM]Schwerschweif[/ITEM] trägt.`, // alemán
			`50%の確率で攻撃するのを忘れ、邪魔されない限り次の攻撃の[POWER]威力[/POWER]が100%上昇する。[ABILITY]ドわすれ[/ABILITY]は累積し、ウェーブ間でも維持される。[ITEM]こうこうのしっぽ[/ITEM]を持っている間は決して攻撃しない。`, // japonés
			`50% 확률로 공격하는 것을 잊어버려, 방해받지 않는 한 다음 공격의 [POWER]위력[/POWER]이 100% 증가합니다. [ABILITY]망각[/ABILITY]은 중첩되며 웨이브가 바뀌어도 유지됩니다. [ITEM]느림보꼬리[/ITEM]를 지니고 있는 동안에는 절대 공격하지 않습니다.`, // coreano
			`有50%的概率忘记攻击，只要不受干扰，下次攻击的[POWER]威力[/POWER]就会提高100%。[ABILITY]瞬间失忆[/ABILITY]可以叠加，并会在波次之间保持。持有[ITEM]拖后腿尾[/ITEM]时绝不会攻击。`, // chino
			`Zapomina o ataku w 50% przypadków, zwiększając [POWER]moc[/POWER] swojego następnego ataku o 100%, dopóki nie zostanie zakłócony. [ABILITY]Amnezja[/ABILITY] kumuluje się i utrzymuje między falami. Nigdy nie zaatakuje, gdy trzyma [ITEM]Lagging Tail[/ITEM].` // polaco
		]
	},
	laundryGoRound: {
		id: 'laundryGoRound',
		name: [
			`Laundry-Go-Round`, // inglés
			`Lavado Giratorio`, // español
			`Tourbillon Lavoir`, // francés
			`Lavanderia Giratória`, // portugués
			`Girobucato`, // italiano
			`Wasch-Rundum`, // alemán
			`ランドリーゴーラウンド`, // japonés
			`세탁고라운드`, // coreano
			`洗衣回旋`, // chino
			`Pralniczy Wir` // polaco
		],
		description: [
			`Fires 1 [PROJECTILE]wave[/PROJECTILE] and increases its [POWER]power[/POWER] by 25.`, // inglés
			`Dispara 1 [PROJECTILE]onda[/PROJECTILE] y aumenta su [POWER]poder[/POWER] en 25.`, // español
			`Lance 1 [PROJECTILE]vague[/PROJECTILE] et augmente sa [POWER]puissance[/POWER] de 25.`, // francés
			`Dispara 1 [PROJECTILE]onda[/PROJECTILE] e aumenta seu [POWER]poder[/POWER] em 25.`, // portugués
			`Lancia 1 [PROJECTILE]onda[/PROJECTILE] e aumenta la sua [POWER]potenza[/POWER] di 25.`, // italiano
			`Feuert 1 [PROJECTILE]Welle[/PROJECTILE] ab und erhöht seine [POWER]Kraft[/POWER] um 25.`, // alemán
			`1つの[PROJECTILE]波[/PROJECTILE]を発射し、[POWER]威力[/POWER]が25上昇する。`, // japonés
			`[PROJECTILE]파동[/PROJECTILE] 1개를 발사하고 [POWER]위력[/POWER]이 25 증가합니다.`, // coreano
			`发射1个[PROJECTILE]波[/PROJECTILE]，并使[POWER]威力[/POWER]提高25。`, // chino
			`Wystrzeliwuje 1 [PROJECTILE]falę[/PROJECTILE] i zwiększa swoją [POWER]moc[/POWER] o 25.` // polaco
		]
	},
	shadowTag: {
		id: 'shadowTag',
		name: [
			`Shadow Tag`, // inglés
			`Sombra Trampa`, // español
			`Marque Ombre`, // francés
			`Sombra Traiçoeira`, // portugués
			`Pedinombra`, // italiano
			`Wegsperre`, // alemán
			`かげふみ`, // japonés
			`그림자밟기`, // coreano
			`踩影`, // chino
			`Shadow Tag` // polaco
		],
		description: [
			`Fires a harmless [PROJECTILE]projectile[/PROJECTILE] that leaves a shadow on an [ENEMY]enemy[/ENEMY]. [ENEMY]Enemies[/ENEMY] standing on the shadow are [SLOW]slowed[/SLOW]. The shadow grows for 2 seconds, after which it explodes, dealing damage and applying 2 stacks of [NIGHTMARE]nightmare[/NIGHTMARE] to all [ENEMY]enemies[/ENEMY] within it.`, // inglés
			`Dispara un [PROJECTILE]proyectil[/PROJECTILE] inocuo que deja una sombra sobre un [ENEMY]enemigo[/ENEMY]. Los [ENEMY]enemigos[/ENEMY] que están sobre la sombra se ven [SLOW]ralentizados[/SLOW]. La sombra crece durante 2 segundos, tras lo cual explota, causando daño y aplicando 2 cargas de [NIGHTMARE]pesadilla[/NIGHTMARE] a todos los [ENEMY]enemigos[/ENEMY] que estén dentro.`, // español
			`Tire un [PROJECTILE]projectile[/PROJECTILE] inoffensif qui laisse une ombre sur un [ENEMY]ennemi[/ENEMY]. Les [ENEMY]ennemis[/ENEMY] sur l'ombre sont [SLOW]ralentis[/SLOW]. L'ombre grandit pendant 2 secondes, puis explose, infligeant des dégâts et appliquant 2 cumuls de [NIGHTMARE]cauchemar[/NIGHTMARE] à tous les [ENEMY]ennemis[/ENEMY] qui se trouvent à l'intérieur.`, // francés
			`Dispara um [PROJECTILE]projétil[/PROJECTILE] inofensivo que deixa uma sombra sobre um [ENEMY]inimigo[/ENEMY]. Os [ENEMY]inimigos[/ENEMY] sobre a sombra ficam [SLOW]lentos[/SLOW]. A sombra cresce por 2 segundos, após o que explode, causando dano e aplicando 2 cargas de [NIGHTMARE]pesadelo[/NIGHTMARE] a todos os [ENEMY]inimigos[/ENEMY] dentro dela.`, // portugués
			`Spara un [PROJECTILE]proiettile[/PROJECTILE] innocuo che lascia un'ombra su un [ENEMY]nemico[/ENEMY]. Gli [ENEMY]nemici[/ENEMY] sopra l'ombra vengono [SLOW]rallentati[/SLOW]. L'ombra cresce per 2 secondi, dopodiché esplode, infliggendo danni e applicando 2 accumuli di [NIGHTMARE]incubo[/NIGHTMARE] a tutti gli [ENEMY]nemici[/ENEMY] al suo interno.`, // italiano
			`Feuert ein harmloses [PROJECTILE]Projektil[/PROJECTILE] ab, das einen [ENEMY]Gegner[/ENEMY] mit einem Schatten belegt. [ENEMY]Gegner[/ENEMY] auf dem Schatten werden [SLOW]verlangsamt[/SLOW]. Der Schatten wächst 2 Sekunden lang und explodiert danach, verursacht Schaden und fügt allen [ENEMY]Gegnern[/ENEMY] darin 2 Stapel [NIGHTMARE]Alptraum[/NIGHTMARE] zu.`, // alemán
			`無害な[PROJECTILE]プロジェクタイル[/PROJECTILE]を発射し、[ENEMY]敵[/ENEMY]に影を残す。影の上にいる[ENEMY]敵[/ENEMY]は[SLOW]遅延[/SLOW]する。影は2秒間成長した後に爆発し、ダメージを与え、範囲内のすべての[ENEMY]敵[/ENEMY]に[NIGHTMARE]あくむ[/NIGHTMARE]を2段階付与する。`, // japonés
			`무해한 [PROJECTILE]투사체[/PROJECTILE]를 발사하여 [ENEMY]적[/ENEMY]에게 그림자를 남깁니다. 그림자 위에 있는 [ENEMY]적[/ENEMY]은 [SLOW]느려집니다[/SLOW]. 그림자는 2초 동안 커진 후 폭발하여 피해를 주고, 그 안의 모든 [ENEMY]적[/ENEMY]에게 [NIGHTMARE]악몽[/NIGHTMARE] 2중첩을 부여합니다.`, // coreano
			`发射无害的[PROJECTILE]投射物[/PROJECTILE]，在一名[ENEMY]敌人[/ENEMY]身上留下阴影。位于阴影上的[ENEMY]敌人[/ENEMY]会被[SLOW]减速[/SLOW]。阴影持续扩大2秒，随后爆炸，造成伤害，并对其中所有[ENEMY]敌人[/ENEMY]施加2层[NIGHTMARE]梦魇[/NIGHTMARE]。`, // chino
			`Wystrzeliwuje nieszkodliwy [PROJECTILE]pocisk[/PROJECTILE], który pozostawia cień na [ENEMY]wrogu[/ENEMY]. [ENEMY]Wrogowie[/ENEMY] znajdujący się na cieniu są [SLOW]spowolnieni[/SLOW]. Cień rośnie przez 2 sekundy, po czym eksploduje, zadając obrażenia i nakładając 2 kumulacje [NIGHTMARE]koszmaru[/NIGHTMARE] na wszystkich [ENEMY]wrogów[/ENEMY] znajdujących się w jego obrębie.` // polaco
		]
	},
	rockThrow: {
		id: 'rockThrow',
		name: [
			`Rock Throw`, // inglés
			`Lanzarrocas`, // español
			`Jet-Pierres`, // francés
			`Arremesso de Pedras`, // portugués
			`Sassata`, // italiano
			`Steinwurf`, // alemán
			`いわおとし`, // japonés
			`돌떨구기`, // coreano
			`落石`, // chino
			`Rock Throw` // polaco
		],
		description: [
			`Select an [SHAPE]area[/SHAPE] to [PROJECTILE]bombard[/PROJECTILE] continuously. [PROJECTILE]Projectiles[/PROJECTILE] explode in an [SHAPE]area[/SHAPE], and one is fired for each [POKEMON]Fossil Pokémon[/POKEMON] on the [TEAM]team[/TEAM].`, // inglés
			`Selecciona un [SHAPE]área[/SHAPE] para [PROJECTILE]bombardearla[/PROJECTILE] continuamente. Los [PROJECTILE]proyectiles[/PROJECTILE] explotan en un [SHAPE]área[/SHAPE] y se dispara uno por cada [POKEMON]Pokémon Fósil[/POKEMON] del [TEAM]equipo[/TEAM].`, // español
			`Sélectionne une [SHAPE]zone[/SHAPE] à [PROJECTILE]bombarder[/PROJECTILE] en continu. Les [PROJECTILE]projectiles[/PROJECTILE] explosent dans une [SHAPE]zone[/SHAPE], et un projectile est tiré pour chaque [POKEMON]Pokémon Fossile[/POKEMON] de l'[TEAM]équipe[/TEAM].`, // francés
			`Selecione uma [SHAPE]área[/SHAPE] para [PROJECTILE]bombardeá-la[/PROJECTILE] continuamente. Os [PROJECTILE]projéteis[/PROJECTILE] explodem em uma [SHAPE]área[/SHAPE], e um é disparado para cada [POKEMON]Pokémon Fóssil[/POKEMON] da [TEAM]equipe[/TEAM].`, // portugués
			`Seleziona un'[SHAPE]area[/SHAPE] da [PROJECTILE]bombardare[/PROJECTILE] continuamente. I [PROJECTILE]proiettili[/PROJECTILE] esplodono in un'[SHAPE]area[/SHAPE] e ne viene sparato uno per ogni [POKEMON]Pokémon Fossile[/POKEMON] della [TEAM]squadra[/TEAM].`, // italiano
			`Wähle einen [SHAPE]Bereich[/SHAPE] aus, der kontinuierlich [PROJECTILE]bombardiert[/PROJECTILE] werden soll. Die [PROJECTILE]Projektile[/PROJECTILE] explodieren in einem [SHAPE]Bereich[/SHAPE], und für jedes [POKEMON]Fossil-Pokémon[/POKEMON] im [TEAM]Team[/TEAM] wird eines abgefeuert.`, // alemán
			`[PROJECTILE]砲撃[/PROJECTILE]を継続して行う[SHAPE]範囲[/SHAPE]を選択する。[PROJECTILE]弾[/PROJECTILE]は[SHAPE]範囲[/SHAPE]内で爆発し、[TEAM]チーム[/TEAM]にいる[POKEMON]化石ポケモン[/POKEMON]1匹につき1発発射する。`, // japonés
			`지속적으로 [PROJECTILE]포격[/PROJECTILE]할 [SHAPE]범위[/SHAPE]를 선택합니다. [PROJECTILE]투사체[/PROJECTILE]는 [SHAPE]범위[/SHAPE] 내에서 폭발하며, [TEAM]팀[/TEAM]에 있는 [POKEMON]화석 포켓몬[/POKEMON] 한 마리당 하나씩 발사합니다.`, // coreano
			`选择一个要持续进行[PROJECTILE]轰炸[/PROJECTILE]的[SHAPE]区域[/SHAPE]。[PROJECTILE]投射物[/PROJECTILE]会在[SHAPE]范围[/SHAPE]内爆炸，并且队伍中每有一只[POKEMON]化石宝可梦[/POKEMON]，就会发射一枚。`, // chino
			`Wybierz [SHAPE]obszar[/SHAPE], który ma być nieustannie [PROJECTILE]bombardowany[/PROJECTILE]. [PROJECTILE]Pociski[/PROJECTILE] wybuchają na [SHAPE]obszarze[/SHAPE], a jeden pocisk jest wystrzeliwany za każdego [POKEMON]Pokémona Skamielinę[/POKEMON] w [TEAM]drużynie[/TEAM].` // polaco
		]
	},
	hiddenPower: {
		id: 'hiddenPower',
		name: [
			`Hidden Power`, // inglés
			`Poder Oculto`, // español
			`Puissance Cachée`, // francés
			`Poder Oculto`, // portugués
			`Introforza`, // italiano
			`Kraftreserve`, // alemán
			`めざめるパワー`, // japonés
			`잠재파워`, // coreano
			`觉醒力量`, // chino
			`Hidden Power` // polaco
		],
		description: [
			`[PROJECTILE]Projectiles[/PROJECTILE] orbit the user and can hit [ENEMY]invisible enemies[/ENEMY].`, // inglés
			`Los [PROJECTILE]proyectiles[/PROJECTILE] orbitan alrededor del usuario y pueden golpear a [ENEMY]enemigos invisibles[/ENEMY].`, // español
			`Les [PROJECTILE]projectiles[/PROJECTILE] orbitent autour de l'utilisateur et peuvent toucher les [ENEMY]ennemis invisibles[/ENEMY].`, // francés
			`Os [PROJECTILE]projéteis[/PROJECTILE] orbitam ao redor do usuário e podem atingir [ENEMY]inimigos invisíveis[/ENEMY].`, // portugués
			`I [PROJECTILE]proiettili[/PROJECTILE] orbitano attorno all'utilizzatore e possono colpire i [ENEMY]nemici invisibili[/ENEMY].`, // italiano
			`[PROJECTILE]Projektile[/PROJECTILE] umkreisen den Anwender und können [ENEMY]unsichtbare Gegner[/ENEMY] treffen.`, // alemán
			`[PROJECTILE]弾[/PROJECTILE]は使用者の周りを回り、[ENEMY]見えない敵[/ENEMY]にも命中する。`, // japonés
			`[PROJECTILE]투사체[/PROJECTILE]는 사용자 주위를 회전하며 [ENEMY]보이지 않는 적[/ENEMY]도 공격할 수 있다.`, // coreano
			`[PROJECTILE]投射物[/PROJECTILE]围绕使用者旋转，并能击中[ENEMY]隐形敌人[/ENEMY]。`, // chino
			`[PROJECTILE]Pociski[/PROJECTILE] krążą wokół użytkownika i mogą trafiać [ENEMY]niewidzialnych wrogów[/ENEMY].` // polaco
		]
	},
	spiritShackle: {
		id: 'spiritShackle',
		name: [
			`Spirit Shackle`, // inglés
			`Puntada Sombría`, // español
			`Tisse Ombre`, // francés
			`Sombra Presa`, // portugués
			`Cucitura d’Ombra`, // italiano
			`Schattenfessel`, // alemán
			`かげぬい`, // japonés
			`그림자꿰매기`, // coreano
			`缝影`, // chino
			`Pęta Ducha` // polaco
		],
		description: [
			`Fires a [PROJECTILE]shadow arrow[/PROJECTILE] at an [ENEMY]enemy[/ENEMY]. After impact, 3 [PROJECTILE]shadow arrows[/PROJECTILE] fall from the sky, dealing [SHAPE]area[/SHAPE] damage to nearby [ENEMY]enemies[/ENEMY].`, // inglés
			`Dispara una [PROJECTILE]flecha sombría[/PROJECTILE] a un [ENEMY]enemigo[/ENEMY]. Tras impactar, caen 3 [PROJECTILE]flechas sombrías[/PROJECTILE] del cielo, causando daño en [SHAPE]área[/SHAPE] a los [ENEMY]enemigos cercanos[/ENEMY].`, // español
			`Tire une [PROJECTILE]flèche d'ombre[/PROJECTILE] sur un [ENEMY]ennemi[/ENEMY]. Après l'impact, 3 [PROJECTILE]flèches d'ombre[/PROJECTILE] tombent du ciel et infligent des dégâts de [SHAPE]zone[/SHAPE] aux [ENEMY]ennemis proches[/ENEMY].`, // francés
			`Dispara uma [PROJECTILE]flecha sombria[/PROJECTILE] contra um [ENEMY]inimigo[/ENEMY]. Após o impacto, caem 3 [PROJECTILE]flechas sombrias[/PROJECTILE] do céu, causando dano em [SHAPE]área[/SHAPE] aos [ENEMY]inimigos próximos[/ENEMY].`, // portugués
			`Scaglia una [PROJECTILE]freccia d'ombra[/PROJECTILE] contro un [ENEMY]nemico[/ENEMY]. Dopo l'impatto, 3 [PROJECTILE]frecce d'ombra[/PROJECTILE] cadono dal cielo, infliggendo danni ad [SHAPE]area[/SHAPE] ai [ENEMY]nemici vicini[/ENEMY].`, // italiano
			`Schießt einen [PROJECTILE]Schattenpfeil[/PROJECTILE] auf einen [ENEMY]Gegner[/ENEMY]. Nach dem Treffer fallen 3 [PROJECTILE]Schattenpfeile[/PROJECTILE] vom Himmel und verursachen [SHAPE]Flächenschaden[/SHAPE] bei nahen [ENEMY]Gegnern[/ENEMY].`, // alemán
			`[ENEMY]敵[/ENEMY]に[PROJECTILE]影の矢[/PROJECTILE]を放つ。命中すると、空から3本の[PROJECTILE]影の矢[/PROJECTILE]が降り注ぎ、近くの[ENEMY]敵[/ENEMY]に[SHAPE]範囲[/SHAPE]ダメージを与える。`, // japonés
			`[ENEMY]적[/ENEMY]에게 [PROJECTILE]그림자 화살[/PROJECTILE]을 발사한다. 명중하면 하늘에서 [PROJECTILE]그림자 화살[/PROJECTILE] 3개가 떨어져 주변 [ENEMY]적[/ENEMY]에게 [SHAPE]범위[/SHAPE] 피해를 준다.`, // coreano
			`向一名[ENEMY]敌人[/ENEMY]射出一支[PROJECTILE]暗影箭[/PROJECTILE]。命中后，天空中会落下3支[PROJECTILE]暗影箭[/PROJECTILE]，对附近的[ENEMY]敌人[/ENEMY]造成[SHAPE]范围[/SHAPE]伤害。`, // chino
			`Wystrzeliwuje [PROJECTILE]strzałę cienia[/PROJECTILE] w [ENEMY]wroga[/ENEMY]. Po trafieniu z nieba spadają 3 [PROJECTILE]strzały cienia[/PROJECTILE], zadając [ENEMY]pobliskim wrogom[/ENEMY] obrażenia obszarowe ([SHAPE]obszar[/SHAPE]).` // polaco
		]
	},
	placeholder: {
		id: 'placeholder',
		name: [
		  'placeholder',
		  'placeholder',
		  'placeholder',
		  'placeholder',
		  'placeholder',
		  'placeholder',
		  'placeholder',
		  'placeholder',
		  'placeholder',
		  'placeholder'
		],
		description: [
		  'placeholder',
		  'placeholder',
		  'placeholder',
		  'placeholder',
		  'placeholder',
		  'placeholder',
		  'placeholder',
		  'placeholder',
		  'placeholder',
		  'placeholder'
		]
	},
}
