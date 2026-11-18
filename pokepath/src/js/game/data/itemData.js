export const itemData = {
	ringTarget: {
		id: 'ringTarget',
		name: ['Ring Target', 'Blanco', 'Point de Mire', 'Alvo', 'Facilsaglio', 'Zielscheibe', 'ねらいのまと', '겨냥표적', '目標環', 'Ring Target'],
		tags: ['utility'],
		sprite: './src/assets/images/items/ring-target.png',
		price: 1,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Allows [POKEMON]Spinda[/POKEMON] to choose attack target.`, // inglés
			`Permite a [POKEMON]Spinda[/POKEMON] elegir el objetivo de ataque.`, // español
			`Permet à [POKEMON]Spinda[/POKEMON] de choisir la cible de l'attaque.`, // francés
			`Permite ao [POKEMON]Spinda[/POKEMON] escolher o alvo do ataque.`, // portugués
			`Permette a [POKEMON]Spinda[/POKEMON] di scegliere il bersaglio dell'attacco.`, // italiano
			`Ermöglicht es [POKEMON]Pandir[/POKEMON], das Angriffsziel auszuwählen.`, // alemán
			`[POKEMON]パッチール[/POKEMON]が攻撃対象を選べるようになる。`, // japonés
			`[POKEMON]판짱[/POKEMON]이 공격 대상을 선택할 수 있게 됩니다.`, // coreano
			`允许[POKEMON]晃晃斑[/POKEMON]选择攻击目标。`, // chino
			`Pozwala [POKEMON]Spinda[/POKEMON] wybrać cel ataku.` // polaco
		],
		condition: {
			id: [53]
		},
	},
	protein: { 
		id: 'protein',
		name: [
			"Protein",
			"Proteína",
			"Protéine",
			"Proteína",
			"Proteina",
			"Protein",
			"プロテイン",
			"타우린",
			"蛋白質",
			"Protein",
		],
		tags: ['power'],
		sprite: './src/assets/images/items/protein.png',
		price: 5500,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases [POWER]power[/POWER] by 15.`, // inglés
			`Aumenta el [POWER]poder[/POWER] en 15.`, // español
			`Augmente la [POWER]puissance[/POWER] de 15.`, // francés
			`Aumenta o [POWER]poder[/POWER] em 15.`, // portugués
			`Aumenta la [POWER]potenza[/POWER] di 15.`, // italiano
			`Erhöht die [POWER]Kraft[/POWER] um 15.`, // alemán
			`[POWER]威力[/POWER]が15上がる。`, // japonés
			`[POWER]위력[/POWER]이 15 증가합니다.`, // coreano
			`[POWER]威力[/POWER]提高15。`, // chino
			`Zwiększa [POWER]moc[/POWER] o 15.` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173],
			attackType: 'aura'
		},
	},
	carbos: { 
		id: 'carbos',
		name: [
			"Carbos",
			"Carburante",
			"Carbone",
			"Carbos",
			"Carbos",
			"Carbon",
			"カルボス",
			"알칼로이드",
			"速度強化劑",
			"Carbos",
		],
		tags: ['speed'],
		sprite: './src/assets/images/items/carbos.png',
		price: 5500,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Reduces [SPEED]recharge time[/SPEED] by 10%.`, // inglés
			`Reduce el [SPEED]tiempo de recarga[/SPEED] un 10%.`, // español
			`Réduit le [SPEED]temps de recharge[/SPEED] de 10 %.`, // francés
			`Reduz o [SPEED]tempo de recarga[/SPEED] em 10%.`, // portugués
			`Riduce il [SPEED]tempo di ricarica[/SPEED] del 10%.`, // italiano
			`Reduziert die [SPEED]Aufladezeit[/SPEED] um 10 %.`, // alemán
			`[SPEED]再使用時間[/SPEED]が10%短くなる。`, // japonés
			`[SPEED]재사용 대기 시간[/SPEED]이 10% 감소합니다.`, // coreano
			`[SPEED]冷却时间[/SPEED]缩短10%。`, // chino
			`Skraca [SPEED]czas odnowienia[/SPEED] o 10%.` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173],
			orbital: true,
			attackType: ['aura', 'stream', 'orbital']
		},
	},
	iron: { 
		id: 'iron',
		name: [
			`Iron`, // inglés
			`Hierro`, // español
			`Fer`, // francés
			`Ferro`, // portugués
			`Ferro`, // italiano
			`Eisen`, // alemán
			`ブロムヘキシン`, // japonés
			`사포닌`, // coreano
			`防御增强剂`, // chino
			`Żelazo` // polaco
		],
		tags: ['critical'],
		sprite: './src/assets/images/items/iron.png',
		price: 5500,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases [CRITICAL]critical chance[/CRITICAL] by 10%.`, // inglés
			`Aumenta un 10% la [CRITICAL]probabilidad de crítico[/CRITICAL].`, // español
			`Augmente de 10 % la [CRITICAL]chance de coup critique[/CRITICAL].`, // francés
			`Aumenta em 10% a [CRITICAL]chance de crítico[/CRITICAL].`, // portugués
			`Aumenta del 10% la [CRITICAL]probabilità di critico[/CRITICAL].`, // italiano
			`Erhöht die [CRITICAL]Kritische-Treffer-Chance[/CRITICAL] um 10 %.`, // alemán
			`[CRITICAL]急所率[/CRITICAL]が10%上昇する。`, // japonés
			`[CRITICAL]급소율[/CRITICAL]이 10% 증가합니다.`, // coreano
			`[CRITICAL]暴击率[/CRITICAL]提高10%。`, // chino
			`Zwiększa o 10% [CRITICAL]szansę na trafienie krytyczne[/CRITICAL].` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173],
			orbital: true,
			attackType: 'aura'
		},
	},
	zinc: { 
		id: 'zinc',
		name: [
			`Zinc`, // inglés
			`Zinc`, // español
			`Zinc`, // francés
			`Zinco`, // portugués
			`Zinco`, // italiano
			`Zink`, // alemán
			`亜鉛`, // japonés
			`아연`, // coreano
			`锌`, // chino
			`Cynk` // polaco
		],
		tags: ['range'],
		sprite: './src/assets/images/items/zinc.png',
		price: 5500,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases [RANGE]range[/RANGE] by 10%.`, // inglés
			`Aumenta un 10% el [RANGE]alcance[/RANGE].`, // español
			`Augmente de 10 % la [RANGE]portée[/RANGE].`, // francés
			`Aumenta em 10% o [RANGE]alcance[/RANGE].`, // portugués
			`Aumenta del 10% la [RANGE]portata[/RANGE].`, // italiano
			`Erhöht die [RANGE]Reichweite[/RANGE] um 10 %.`, // alemán
			`[RANGE]射程[/RANGE]が10%上昇する。`, // japonés
			`[RANGE]사거리[/RANGE]가 10% 증가합니다.`, // coreano
			`[RANGE]攻击范围[/RANGE]提高10%。`, // chino
			`Zwiększa o 10% [RANGE]zasięg[/RANGE].` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173],
			orbital: true,
			attackType: 'aura'
		},
	},
	lifeOrb: {
		id: 'lifeOrb',
		name: [
			"Life Orb",
			"Vidaesfera",
			"Orbe Vie",
			"Orbe da Vida",
			"Assorbisfera",
			"Leben-Orb",
			"いのちのたま",
			"생명의구슬",
			"生命寶珠",
			"Life Orb",
		],
		tags: ['power', 'speed'],
		sprite: './src/assets/images/items/life-orb.png',
		price: 20000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Attacks no longer restore [HEART]hearts[/HEART]. The holder gains +50% [POWER]power[/POWER] and -50% [SPEED]recharge time[/SPEED]. Only [POKEMON]Pokémon[/POKEMON] that restore [HEART]hearts[/HEART] can hold it.`, // inglés
			`Los ataques ya no restauran [HEART]corazones[/HEART]. El portador obtiene un +50% de [POWER]poder[/POWER] y un -50% de [SPEED]tiempo de recarga[/SPEED]. Solo los [POKEMON]Pokémon[/POKEMON] que restauran [HEART]corazones[/HEART] pueden llevarlo.`, // español
			`Les attaques ne restaurent plus les [HEART]cœurs[/HEART]. Le porteur gagne +50 % de [POWER]puissance[/POWER] et -50 % de [SPEED]temps de recharge[/SPEED]. Seuls les [POKEMON]Pokémon[/POKEMON] qui restaurent des [HEART]cœurs[/HEART] peuvent le tenir.`, // francés
			`Os ataques não restauram mais [HEART]corações[/HEART]. O portador recebe +50% de [POWER]poder[/POWER] e -50% de [SPEED]tempo de recarga[/SPEED]. Apenas [POKEMON]Pokémon[/POKEMON] que restauram [HEART]corações[/HEART] podem segurá-lo.`, // portugués
			`Gli attacchi non ripristinano più i [HEART]cuori[/HEART]. Il portatore ottiene +50% di [POWER]potenza[/POWER] e -50% di [SPEED]tempo di ricarica[/SPEED]. Solo i [POKEMON]Pokémon[/POKEMON] che ripristinano i [HEART]cuori[/HEART] possono tenerlo.`, // italiano
			`Angriffe stellen keine [HEART]Herzen[/HEART] mehr wieder her. Der Träger erhält +50 % [POWER]Kraft[/POWER] und -50 % [SPEED]Aufladezeit[/SPEED]. Nur [POKEMON]Pokémon[/POKEMON], die [HEART]Herzen[/HEART] wiederherstellen, können es tragen.`, // alemán
			`攻撃では[HEART]ハート[/HEART]を回復しなくなる。持たせたポケモンは[POWER]威力[/POWER]が50%上がり、[SPEED]再使用時間[/SPEED]が50%短くなる。[HEART]ハート[/HEART]を回復できる[POKEMON]ポケモン[/POKEMON]のみ持たせられる。`, // japonés
			`공격으로 더 이상 [HEART]하트[/HEART]를 회복하지 않습니다. 소지자는 [POWER]위력[/POWER]이 50% 증가하고 [SPEED]재사용 대기 시간[/SPEED]이 50% 감소합니다. [HEART]하트[/HEART]를 회복하는 [POKEMON]포켓몬[/POKEMON]만 지닐 수 있습니다.`, // coreano
			`攻击不再恢复[HEART]心[/HEART]。持有者的[POWER]威力[/POWER]提高50%，[SPEED]冷却时间[/SPEED]缩短50%。只有能够恢复[HEART]心[/HEART]的[POKEMON]宝可梦[/POKEMON]可以携带。`, // chino
			`Ataki nie przywracają już [HEART]serc[/HEART]. Posiadacz otrzymuje +50% [POWER]mocy[/POWER] i -50% [SPEED]czasu odnowienia[/SPEED]. Tylko [POKEMON]Pokémon[/POKEMON], które przywracają [HEART]serca[/HEART], mogą go trzymać.` // polaco
		],
		condition: {
			ability: ['heal', 'bitterBlade', 'takeHeart', 'seedFlare', 'soulHeartReactor']
		},
		restriction: {
			id: [19, 70, 83, 101, 404, 142, 144, 173]
		},
	},
	lightClay: {
		id: 'lightClay',
		name: ['Light Clay', 'Refleluz', 'Lumargile', 'Argila Luminosa', 'Creta Luce', 'Lichtlehm', 'ひかりのねんど', '빛의점토', '光之黏土', 'Light Clay'],
		tags: ['utility'],
		sprite: './src/assets/images/items/light-clay.png',
		price: 8000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases the duration of [STUN]stuns[/STUN] and [SLOW]slows[/SLOW] by 10%.`, // inglés
			`Aumenta la duración de los [STUN]aturdimientos[/STUN] y las [SLOW]ralentizaciones[/SLOW] un 10%.`, // español
			`Augmente la durée des [STUN]étourdissements[/STUN] et des [SLOW]ralentissements[/SLOW] de 10 %.`, // francés
			`Aumenta a duração dos [STUN]atordoamentos[/STUN] e das [SLOW]lentidões[/SLOW] em 10%.`, // portugués
			`Aumenta la durata degli [STUN]stordimenti[/STUN] e dei [SLOW]rallentamenti[/SLOW] del 10%.`, // italiano
			`Erhöht die Dauer von [STUN]Betäubungen[/STUN] und [SLOW]Verlangsamungen[/SLOW] um 10 %.`, // alemán
			`[STUN]まひ[/STUN]と[SLOW]遅延[/SLOW]の持続時間が10%長くなる。`, // japonés
			`[STUN]기절[/STUN]과 [SLOW]느려짐[/SLOW]의 지속시간이 10% 증가합니다.`, // coreano
			`使[STUN]眩晕[/STUN]和[SLOW]减速[/SLOW]的持续时间延长10%。`, // chino
			`Zwiększa czas trwania [STUN]ogłuszeń[/STUN] i [SLOW]spowolnień[/SLOW] o 10%.` // polaco
		],
		condition: {
			ability: [
				'slow', 'slowSplash', 'slowRicochet', 'stunArea', 'stunMono', 'stunMonoNerf', 'static', 'icicleSpear', 'drumBeating', 'icyWind',
				'waterBubble', 'zapCannon', 'hyperDrill', 'boomburst', 'liquidVoice', 'triAttack', 'electroBall', 'discharge', 'originPulse', 'emptyLight'
			],
			id: [64]
		},
		restriction: {
			id: [70]
		},
	},
	twistedSpoon: {
		id: 'twistedSpoon',
		name: ['Twisted Spoon', 'Cuchara Torcida', 'Cuillère Tordue', 'Colher Torta', 'Cucchiaio Torto', 'Krummöffel', 'まがったスプーン', '휘어진스푼', '彎曲的湯匙', 'Twisted Spoon'],
		tags: ['utility'],
		sprite: './src/assets/images/items/twisted-spoon.png',
		price: 20000,
		tier: 'epic',
		isEquipable: true,
		isRetirable: false,
		description: [
			`[POKEMON]Alakazam[/POKEMON] focuses on [ABILITY]teleporting[/ABILITY] in place, at the cost of reducing stacking damage by 75%.`, // inglés
			`[POKEMON]Alakazam[/POKEMON] se centra en [ABILITY]teletransportarse[/ABILITY] en el sitio, a cambio de reducir el daño acumulado en un 75%.`, // español
			`[POKEMON]Alakazam[/POKEMON] se concentre sur la [ABILITY]téléportation[/ABILITY] sur place, au prix d'une réduction de 75 % des dégâts cumulés.`, // francés
			`[POKEMON]Alakazam[/POKEMON] se concentra em [ABILITY]teleportar-se[/ABILITY] no local, ao custo de reduzir o dano acumulado em 75%.`, // portugués
			`[POKEMON]Alakazam[/POKEMON] si concentra sul [ABILITY]teletrasportarsi[/ABILITY] sul posto, al costo di ridurre i danni cumulativi del 75%.`, // italiano
			`[POKEMON]Alakazam[/POKEMON] konzentriert sich darauf, sich an Ort und Stelle zu [ABILITY]teleportieren[/ABILITY], wodurch der kumulierte Schaden um 75 % reduziert wird.`, // alemán
			`[POKEMON]フーディン[/POKEMON]はその場での[ABILITY]テレポート[/ABILITY]に集中し、代わりに蓄積ダメージが75%減少する。`, // japonés
			`[POKEMON]후딘[/POKEMON]은 제자리에서 [ABILITY]텔레포트[/ABILITY]하는 데 집중하는 대신, 누적 피해가 75% 감소합니다.`, // coreano
			`[POKEMON]胡地[/POKEMON]专注于原地[ABILITY]瞬间移动[/ABILITY]，代价是叠加伤害降低75%。`, // chino
			`[POKEMON]Alakazam[/POKEMON] skupia się na [ABILITY]teleportowaniu się[/ABILITY] w miejscu, kosztem zmniejszenia kumulowanych obrażeń o 75%.` // polaco
		],
		condition: {
			id: [68]
		},
	},
	clefairyDoll: { 
		id: 'clefairyDoll',
		name: [
			"Clefairy Doll",
			"Muñeca de Clefairy",
			"Poupée Mélofée",
			"Boneca Clefairy",
			"Bambola Clefairy",
			"Piepi-Puppe",
			"ピッピの人形",
			"삐삐 인형",
			"皮皮玩偶",
			"Clefairy Doll",
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/poke-doll.png',
		price: 500000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`When held by [POKEMON]Clefairy[/POKEMON], restores 1 [HEART]heart[/HEART] when it deals 25,000 damage during a wave.`, // inglés
			`Al llevarlo [POKEMON]Clefairy[/POKEMON], restaurará 1 [HEART]corazón[/HEART] al causar 25.000 de daño durante una oleada.`, // español
			`Lorsqu'il est tenu par [POKEMON]Mélofée[/POKEMON], restaure 1 [HEART]cœur[/HEART] lorsqu'il inflige 25 000 dégâts pendant une vague.`, // francés
			`Quando segurado por [POKEMON]Clefairy[/POKEMON], restaura 1 [HEART]coração[/HEART] ao causar 25.000 de dano durante uma onda.`, // portugués
			`Se tenuto da [POKEMON]Clefairy[/POKEMON], ripristina 1 [HEART]cuore[/HEART] quando infligge 25.000 danni durante un'ondata.`, // italiano
			`Wenn es von [POKEMON]Piepi[/POKEMON] getragen wird, stellt es 1 [HEART]Herz[/HEART] wieder her, wenn es während einer Welle 25.000 Schaden verursacht.`, // alemán
			`[POKEMON]ピッピ[/POKEMON]に持たせると、ウェーブ中に25,000ダメージを与えると[HEART]ハート[/HEART]を1つ回復する。`, // japonés
			`[POKEMON]삐삐[/POKEMON]가 지니면, 웨이브 중 25,000의 피해를 입혔을 때 [HEART]하트[/HEART] 1개를 회복합니다.`, // coreano
			`由[POKEMON]皮皮[/POKEMON]携带时，在一波中造成25,000点伤害时恢复1个[HEART]心[/HEART]。`, // chino
			`Gdy jest trzymany przez [POKEMON]Clefairy[/POKEMON], przywraca 1 [HEART]serce[/HEART], gdy zada 25 000 obrażeń podczas fali.` // polaco
		],
		condition: {
			id: [62]
		},
	},
	amuletCoin: {
		id: 'amuletCoin',
		name: ['Amulet Coin', 'Moneda Amuleto', 'Pièce Rune', 'Moeda Amuleto', 'Moneta Amuleto', 'Münzamulett', 'おまもりこばん', '부적금화', '護符金幣', 'Amulet Coin',],
		tags: ['utility'],
		sprite: './src/assets/images/items/amulet-coin.png',
		price: 25000,
		tier: 'luxury',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Attacks grant [MONEY]money[/MONEY] equal to 0.05% of the damage dealt per [STAR]star[/STAR] obtained.`, // inglés
			`Los ataques otorgan [MONEY]dinero[/MONEY] equivalente al 0,05% del daño infligido por cada [STAR]estrella[/STAR] obtenida.`, // español
			`Les attaques rapportent de l'[MONEY]argent[/MONEY] à hauteur de 0,05 % des dégâts infligés par [STAR]étoile[/STAR] obtenue.`, // francés
			`Os ataques concedem [MONEY]dinheiro[/MONEY] equivalente a 0,05% do dano causado por cada [STAR]estrela[/STAR] obtida.`, // portugués
			`Gli attacchi forniscono [MONEY]denaro[/MONEY] pari allo 0,05% dei danni inflitti per ogni [STAR]stella[/STAR] ottenuta.`, // italiano
			`Angriffe gewähren [MONEY]Geld[/MONEY] in Höhe von 0,05 % des verursachten Schadens pro erhaltenem [STAR]Stern[/STAR].`, // alemán
			`攻撃で与えたダメージの0.05%に、獲得した[STAR]スター[/STAR]1個につき相当する[MONEY]お金[/MONEY]を得る。`, // japonés
			`공격 시 획득한 [STAR]별[/STAR] 하나당 입힌 피해량의 0.05%에 해당하는 [MONEY]돈[/MONEY]을 얻는다.`, // coreano
			`攻击会获得相当于每颗已获得[STAR]星星[/STAR]所造成伤害的0.05%的[MONEY]金钱[/MONEY]。`, // chino
			`Ataki zapewniają [MONEY]pieniądze[/MONEY] w ilości równej 0,05% zadanych obrażeń za każdą zdobytą [STAR]gwiazdkę[/STAR].` // polaco
		],
		condition: {
			attackType: ['single', 'bombardment']
		},
		restriction: {
			id: [19, 70, 83, 101, 404, 142, 144, 173],
			ability: [
				'solarBeam', 'hydroCannon', 'zapCannon', 'hyperBeam', 'meteorBeam', 'secretSword', 'anchorShot', 'iceBeam', 'machBolt',
				'steelBeam', 'steamEruption', 'soulHeartReactor', 'ceaselessEdge', 'psybeam', 'icyWind',
				'boomburst', 'liquidVoice', 'drumBeating', 'originPulse', 'charmedCharm', 'emptyLight'
			],
			attackType: 'aura'
		},
	},
	fertiliser: { 
		id: 'fertiliser',
		name: [
			"Fertilizer",
			"Fertilizante",
			"Engrais",
			"Fertilizante",
			"Fertilizzante",
			"Dünger",
			"肥料",
			"비료",
			"肥料",
			"Fertilizer",
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/rich.png',
		price: 15000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`[FIELD]Field[/FIELD] instead behaves as [GRASS]grass[/GRASS].`, // inglés
			`El [FIELD]campo[/FIELD] se comporta en su lugar como [GRASS]hierba[/GRASS].`, // español
			`Le [FIELD]champ[/FIELD] se comporte à la place comme de l'[GRASS]herbe[/GRASS].`, // francés
			`O [FIELD]campo[/FIELD] passa a se comportar como [GRASS]grama[/GRASS].`, // portugués
			`Il [FIELD]campo[/FIELD] si comporta invece come [GRASS]erba[/GRASS].`, // italiano
			`Das [FIELD]Feld[/FIELD] verhält sich stattdessen wie [GRASS]Gras[/GRASS].`, // alemán
			`[FIELD]フィールド[/FIELD]が[GRASS]くさ[/GRASS]として扱われるようになる。`, // japonés
			`[FIELD]필드[/FIELD]가 대신 [GRASS]풀[/GRASS]로 취급됩니다.`, // coreano
			`[FIELD]场地[/FIELD]改为视为[GRASS]草地[/GRASS]。`, // chino
			`[FIELD]Pole[/FIELD] zamiast tego zachowuje się jak [GRASS]trawa[/GRASS].` // polaco
		],
		condition: {
			tile: [2],
			ability: ['ambusher'],
			id: [61, 76]
		},
		restriction: {
			id: [19, 70, 83, 101, 404, 142, 144, 173, 180, 252],
		},
	},
	heartScale: {
		id: 'heartScale',
		name: ["Heart Scale", "Escama Corazón", "Écaille Cœur", "Escama Coração", "Squama Cuore", "Herzschuppe", "ハートのウロコ", "하트비늘", "心之鱗片", "Heart Scale"],
		tags: ['speed'],
		sprite: './src/assets/images/items/heart-scale.png',
		price: 50000,
		tier: 'legendary',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Reduces [SPEED]recharge speed[/SPEED] by 10% for each [HEART]heart healed[/HEART] during this wave, up to a maximum of 5 times.`, // inglés
			`Reduce la [SPEED]velocidad de recarga[/SPEED] en un 10% por cada [HEART]corazón sanado[/HEART] durante esta oleada, hasta un máximo de 5 veces.`, // español
			`Réduit la [SPEED]vitesse de recharge[/SPEED] de 10 % pour chaque [HEART]cœur soigné[/HEART] pendant cette vague, jusqu'à un maximum de 5 fois.`, // francés
			`Reduz a [SPEED]velocidade de recarga[/SPEED] em 10% para cada [HEART]coração curado[/HEART] durante esta onda, até um máximo de 5 vezes.`, // portugués
			`Riduce la [SPEED]velocità di ricarica[/SPEED] del 10% per ogni [HEART]cuore curato[/HEART] durante quest'ondata, fino a un massimo di 5 volte.`, // italiano
			`Verringert die [SPEED]Aufladegeschwindigkeit[/SPEED] um 10 % für jedes während dieser Welle geheilte [HEART]Herz[/HEART], bis zu maximal 5-mal.`, // alemán
			`このウェーブ中に[HEART]ハート[/HEART]を1つ回復するごとに[SPEED]再使用時間[/SPEED]が10%短くなる。最大5回まで。`, // japonés
			`이번 웨이브에서 [HEART]하트[/HEART]를 회복할 때마다 [SPEED]재사용 대기시간[/SPEED]이 10% 감소하며, 최대 5회까지 적용됩니다.`, // coreano
			`在本波中每恢复1个[HEART]心[/HEART]，[SPEED]冷却时间[/SPEED]缩短10%，最多生效5次。`, // chino
			`Zmniejsza [SPEED]czas odnowienia[/SPEED] o 10% za każde uleczone [HEART]serce[/HEART] podczas tej fali, maksymalnie 5 razy.` // polaco
		],
		restriction: {
			id: [70, 19, 83, 101, 111, 404, 142, 144, 173],
			orbital: true,
			attackType: ['aura', 'stream', 'orbital']
		}
	},
	squirtBottle: { 
		id: 'squirtBottle',
		name: [
			"Squirt Bottle",
			"Botella pulverizadora",
			"Carapuce à O",
			"Garrafa pulverizadora",
			"Bottiglia a spruzzo",
			"Schiggykanne",
			"スプレーボトル",
			"꼬부기물뿌리개",
			"噴水瓶",
			"Squirt Bottle",
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/squirt-bottle.png',
		price: 15000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`[FIELD]Field[/FIELD] instead behaves as [WATER]water[/WATER].`, // inglés
			`El [FIELD]campo[/FIELD] se comporta en su lugar como [WATER]agua[/WATER].`, // español
			`Le [FIELD]champ[/FIELD] se comporte à la place comme de l'[WATER]eau[/WATER].`, // francés
			`O [FIELD]campo[/FIELD] passa a se comportar como [WATER]água[/WATER].`, // portugués
			`Il [FIELD]campo[/FIELD] si comporta invece come [WATER]acqua[/WATER].`, // italiano
			`Das [FIELD]Feld[/FIELD] verhält sich stattdessen wie [WATER]Wasser[/WATER].`, // alemán
			`[FIELD]フィールド[/FIELD]が[WATER]みず[/WATER]として扱われるようになる。`, // japonés
			`[FIELD]필드[/FIELD]가 대신 [WATER]물[/WATER]로 취급됩니다.`, // coreano
			`[FIELD]场地[/FIELD]改为视为[WATER]水[/WATER]。`, // chino
			`[FIELD]Pole[/FIELD] zamiast tego zachowuje się jak [WATER]woda[/WATER].` // polaco
		],
		condition: {
			tile: [3],
			ability: ['swimmer', 'torrent'],
			id: [61, 93]
		},
		restriction: {
			id: [19, 70, 83, 101, 404, 142, 144, 173],
			ability: ['blizzard']
		},
	},
	wideLens: {
		id: 'wideLens',
		name: ['Wide Lens', 'Lupa', 'Loupe', 'Lente Ampla', 'Grandelente', 'Großlinse', 'こうかくレンズ', '광각렌즈', '廣角鏡', 'Wide Lens'],
		tags: ['range'],
		sprite: './src/assets/images/items/wide-lens.png',
		price: 30000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`[RANGE]Range[/RANGE] is 100% wider.`, // inglés
			`El [RANGE]alcance[/RANGE] es un 100% más amplio.`, // español
			`La [RANGE]portée[/RANGE] est 100 % plus large.`, // francés
			`O [RANGE]alcance[/RANGE] é 100% mais amplo.`, // portugués
			`La [RANGE]portata[/RANGE] è più ampia del 100%.`, // italiano
			`Die [RANGE]Reichweite[/RANGE] ist 100 % größer.`, // alemán
			`[RANGE]射程[/RANGE]が100%広くなる。`, // japonés
			`[RANGE]사거리[/RANGE]가 100% 넓어집니다.`, // coreano
			`[RANGE]攻击范围[/RANGE]扩大100%。`, // chino
			`[RANGE]Zasięg[/RANGE] jest o 100% większy.` // polaco
		],
		condition: {
			rangeType: ['cross', 'xShape', 'horizontalLine']
		},
		restriction: {
			id: [19, 70, 83, 101, 404, 142, 144, 173]
		},
	},
	choiceScarf: { 
		id: 'choiceScarf',
		name: ['Choice Scarf', 'Pañuelo Elegido', 'Mouchoir Choix', 'Lenço Escolha', 'Sciarpa Scelta', 'Wahlschal', 'こだわりスカーフ', '구애스카프', '拘束圍巾', 'Choice Scarf'],
		tags: ['speed'],
		sprite: './src/assets/images/items/choice-scarf.png',
		price: 150000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Reduces the number of [PROJECTILE]projectiles[/PROJECTILE] to one, but decreases [SPEED]recharge time[/SPEED] by 50% for each [PROJECTILE]lost projectile[/PROJECTILE].`, // inglés
			`Reduce el número de [PROJECTILE]proyectiles[/PROJECTILE] a uno, pero reduce el [SPEED]tiempo de recarga[/SPEED] un 50% por cada [PROJECTILE]proyectil perdido[/PROJECTILE].`, // español
			`Réduit le nombre de [PROJECTILE]projectiles[/PROJECTILE] à un, mais réduit le [SPEED]temps de recharge[/SPEED] de 50 % pour chaque [PROJECTILE]projectile perdu[/PROJECTILE].`, // francés
			`Reduz o número de [PROJECTILE]projéteis[/PROJECTILE] para um, mas reduz o [SPEED]tempo de recarga[/SPEED] em 50% para cada [PROJECTILE]projétil perdido[/PROJECTILE].`, // portugués
			`Riduce il numero di [PROJECTILE]proiettili[/PROJECTILE] a uno, ma riduce il [SPEED]tempo di ricarica[/SPEED] del 50% per ogni [PROJECTILE]proiettile perso[/PROJECTILE].`, // italiano
			`Reduziert die Anzahl der [PROJECTILE]Projektile[/PROJECTILE] auf eins, verringert aber die [SPEED]Aufladezeit[/SPEED] für jedes [PROJECTILE]verlorene Projektil[/PROJECTILE] um 50 %.`, // alemán
			`[PROJECTILE]弾[/PROJECTILE]の数を1つに減らす代わりに、[PROJECTILE]失った弾[/PROJECTILE]1つにつき[SPEED]再使用時間[/SPEED]が50%短くなる。`, // japonés
			`[PROJECTILE]투사체[/PROJECTILE] 수를 1개로 줄이는 대신, [PROJECTILE]잃은 투사체[/PROJECTILE] 하나당 [SPEED]재사용 대기시간[/SPEED]이 50% 감소합니다.`, // coreano
			`将[PROJECTILE]投射物[/PROJECTILE]数量减少至1个，但每减少一个[PROJECTILE]投射物[/PROJECTILE]，[SPEED]冷却时间[/SPEED]缩短50%。`, // chino
			`Zmniejsza liczbę [PROJECTILE]pocisków[/PROJECTILE] do jednego, ale skraca [SPEED]czas odnowienia[/SPEED] o 50% za każdy [PROJECTILE]utracony pocisk[/PROJECTILE].` // polaco
		],
		condition: {
			ability: [
				'doubleShot', 'tripleShot', 'quadraShot', 'octaShot', 'curseDoubleShot', 'poisonDoubleShot', 'quadraShotSand', 
				'doubleShotSand', 'burnDoubleShot', 'bitterBlade', 'dragonDarts', 'whiteRay', 'spicySpray',
			]
		},
		restriction: {
			id: [19, 70, 83, 101, 404, 142, 144, 173]
		},
	},
	airBalloon: {
		id: 'airBalloon',
		name: ['Air Balloon', 'Globo Helio', 'Ballon', 'Balão de Ar', 'Palloncino', 'Luftballon', 'ふうせん', '풍선', '氣球', "Air Balloon"],
		tags: ['utility'],
		sprite: './src/assets/images/items/air-balloon.png',
		price: 50000,
		tier: 'common',
		isEquipable: true,
		isRetirable: false,
		description: [
			`Allows [FIELD]Field[/FIELD] and [GRASS]Grass[/GRASS] [POKEMON]POKÉMON[/POKEMON] to be placed in [MOUNTAIN]Mountain[/MOUNTAIN].`, // inglés
			`Permite colocar [POKEMON]POKÉMON[/POKEMON] de [FIELD]Campo[/FIELD] y [GRASS]Hierba[/GRASS] en [MOUNTAIN]Montaña[/MOUNTAIN].`, // español
			`Permet de placer les [POKEMON]POKÉMON[/POKEMON] de [FIELD]Champ[/FIELD] et de [GRASS]Herbe[/GRASS] sur [MOUNTAIN]Montagne[/MOUNTAIN].`, // francés
			`Permite colocar [POKEMON]POKÉMON[/POKEMON] de [FIELD]Campo[/FIELD] e [GRASS]Grama[/GRASS] em [MOUNTAIN]Montanha[/MOUNTAIN].`, // portugués
			`Permette di posizionare i [POKEMON]POKÉMON[/POKEMON] di [FIELD]Campo[/FIELD] e [GRASS]Erba[/GRASS] su [MOUNTAIN]Montagna[/MOUNTAIN].`, // italiano
			`Ermöglicht es, [FIELD]Feld[/FIELD]- und [GRASS]Gras[/GRASS]-[POKEMON]POKÉMON[/POKEMON] auf [MOUNTAIN]Berg[/MOUNTAIN] zu platzieren.`, // alemán
			`[FIELD]フィールド[/FIELD]と[GRASS]くさ[/GRASS]の[POKEMON]ポケモン[/POKEMON]を[MOUNTAIN]やま[/MOUNTAIN]に配置できるようになる。`, // japonés
			`[FIELD]필드[/FIELD]와 [GRASS]풀[/GRASS] [POKEMON]포켓몬[/POKEMON]을 [MOUNTAIN]산[/MOUNTAIN]에 배치할 수 있게 됩니다.`, // coreano
			`允许将[FIELD]场地[/FIELD]和[GRASS]草地[/GRASS]的[POKEMON]宝可梦[/POKEMON]放置在[MOUNTAIN]山地[/MOUNTAIN]上。`, // chino
			`Pozwala umieszczać [POKEMON]POKÉMONY[/POKEMON] z [FIELD]Pola[/FIELD] i [GRASS]Trawy[/GRASS] na [MOUNTAIN]Górze[/MOUNTAIN].` // polaco
		],
		restriction: {
			tile: [3, 4],
			id: [70, 142]
		}
	},
	oldRod: { 
		id: 'oldRod',
		name: [
			"Old Rod",
			"Caña Vieja",
			"Canne",
			"Vara Velha",
			"Vecchia Canna",
			"Alte Angel",
			"ボロのつりざお",
			"낡은 낚싯대",
			"破舊釣竿",
			"Old Rod",
		],
		tags: ['range'],
		sprite: './src/assets/images/items/old-rod.png',
		price: 100000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Only catches [POKEMON]Magikarps[/POKEMON]... increases its [RANGE]range[/RANGE] by 75.`, // inglés
			`Solo pesca [POKEMON]Magikarps[/POKEMON]... aumenta su [RANGE]alcance[/RANGE] en 75.`, // español
			`Ne pêche que des [POKEMON]Magicarpe[/POKEMON]... augmente sa [RANGE]portée[/RANGE] de 75.`, // francés
			`Só pesca [POKEMON]Magikarps[/POKEMON]... aumenta o seu [RANGE]alcance[/RANGE] em 75.`, // portugués
			`Pesca solo [POKEMON]Magikarp[/POKEMON]... aumenta la sua [RANGE]portata[/RANGE] di 75.`, // italiano
			`Fängt nur [POKEMON]Karpadors[/POKEMON]... erhöht seine [RANGE]Reichweite[/RANGE] um 75.`, // alemán
			`[POKEMON]コイキング[/POKEMON]しか釣れない……[RANGE]射程[/RANGE]が75増加する。`, // japonés
			`[POKEMON]잉어킹[/POKEMON]만 낚습니다... [RANGE]사거리[/RANGE]가 75 증가합니다.`, // coreano
			`只能钓到[POKEMON]鲤鱼王[/POKEMON]……使其[RANGE]攻击范围[/RANGE]增加75。`, // chino
			`Łowi tylko [POKEMON]Magikarpie[/POKEMON]... zwiększa jego [RANGE]zasięg[/RANGE] o 75.` // polaco
		],
		condition: {
			id: [71]
		},
	},
	heatRock: {
		id: 'heatRock',
		name: [
			"Lava Cookie",
			"Galleta Lava",
			"Vieux Gâteau",
			"Biscoito de Lava",
			"Lavaboletta",
			"Lava-Keks",
			"フエンせんべい",
			"용암전병",
			"釜炎仙贝",
			"Ciastko Lawowe"
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/lava-cookie.png',
		price: 100000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`[POKEMON]Torkoal[/POKEMON] loves it. When held, its [ABILITY]ability[/ABILITY] always [BURN]burns[/BURN].`, // inglés
			`A [POKEMON]Torkoal[/POKEMON] le encanta. Cuando la lleva, su [ABILITY]habilidad[/ABILITY] siempre [BURN]quema[/BURN].`, // español
			`[POKEMON]Chartor[/POKEMON] l'adore. Lorsqu'il la tient, son [ABILITY]talent[/ABILITY] [BURN]brûle[/BURN] toujours.`, // francés
			`[POKEMON]Torkoal[/POKEMON] adora isso. Quando a segura, sua [ABILITY]habilidade[/ABILITY] sempre [BURN]queima[/BURN].`, // portugués
			`[POKEMON]Torkoal[/POKEMON] lo adora. Quando lo tiene, la sua [ABILITY]abilità[/ABILITY] [BURN]brucia[/BURN] sempre.`, // italiano
			`[POKEMON]Qurtel[/POKEMON] liebt es. Wenn es ihn trägt, [BURN]verbrennt[/BURN] seine [ABILITY]Fähigkeit[/ABILITY] immer.`, // alemán
			`[POKEMON]コータス[/POKEMON]はこれが大好き。持たせると、その[ABILITY]とくせい[/ABILITY]は必ず[BURN]やけど[/BURN]させる。`, // japonés
			`[POKEMON]코터스[/POKEMON]는 이것을 아주 좋아합니다. 지니게 하면 [ABILITY]특성[/ABILITY]이 항상 [BURN]화상[/BURN]을 입힙니다.`, // coreano
			`[POKEMON]煤炭龟[/POKEMON]非常喜欢它。携带时，其[ABILITY]特性[/ABILITY]总是会造成[BURN]灼伤[/BURN]。`, // chino
			`[POKEMON]Torkoal[/POKEMON] bardzo to lubi. Gdy je trzyma, jego [ABILITY]umiejętność[/ABILITY] zawsze [BURN]podpala[/BURN].` // polaco
		],
		condition: {
			id: [52]
		}
	},
	dampMulch: { 
		id: 'dampMulch',
		name: [
			"Damp Mulch",
			"Mantillo Húmedo",
			"Fertihumide",
			"Cobertura Úmida",
			"Pacciamanto Umido",
			"Feuchtmulch",
			"しめりけのマルチ",
			"축축이비료",
			"濕潤覆蓋物",
			"Damp Mulch",
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/damp.png',
		price: 50000,
		tier: 'common',
		isEquipable: true,
		isRetirable: false,
		description: [
			`Only for [POKEMON]Pokémon[/POKEMON] that are strictly placed in [WATER]water[/WATER], allows them to be placed in [FIELD]Field[/FIELD].`, // inglés
			`Solo para [POKEMON]Pokémon[/POKEMON] que están estrictamente posicionados en [WATER]agua[/WATER], permite que sean posicionados en [FIELD]Campo[/FIELD].`, // español
			`Uniquement pour les [POKEMON]Pokémon[/POKEMON] qui sont strictement placés dans [WATER]l'eau[/WATER], permet de les placer sur [FIELD]Champ[/FIELD].`, // francés
			`Apenas para [POKEMON]Pokémon[/POKEMON] que são estritamente posicionados em [WATER]água[/WATER], permite que sejam posicionados em [FIELD]Campo[/FIELD].`, // portugués
			`Solo per i [POKEMON]Pokémon[/POKEMON] che sono posizionati esclusivamente in [WATER]acqua[/WATER], permette di posizionarli su [FIELD]Campo[/FIELD].`, // italiano
			`Nur für [POKEMON]Pokémon[/POKEMON], die ausschließlich in [WATER]Wasser[/WATER] platziert werden, ermöglicht es, sie auf [FIELD]Feld[/FIELD] zu platzieren.`, // alemán
			`[WATER]みず[/WATER]にしか配置できない[POKEMON]ポケモン[/POKEMON]に限り、[FIELD]フィールド[/FIELD]に配置できるようになる。`, // japonés
			`[WATER]물[/WATER]에만 배치할 수 있는 [POKEMON]포켓몬[/POKEMON]에 한해 [FIELD]필드[/FIELD]에 배치할 수 있게 됩니다.`, // coreano
			`仅限只能放置在[WATER]水[/WATER]上的[POKEMON]宝可梦[/POKEMON]，允许将其放置在[FIELD]场地[/FIELD]上。`, // chino
			`Tylko dla [POKEMON]Pokémonów[/POKEMON], które mogą być umieszczane wyłącznie na [WATER]wodzie[/WATER], pozwala umieszczać je na [FIELD]Polu[/FIELD].` // polaco
		],
		restriction: {
			tile: [1, 2, 4],
			id: [70, 142, 173]
		}
	},
	softSand: { 
		id: 'softSand',
		name: [
			"Soft Sand",
			"Arena Fina",
			"Sable Doux",
			"Pudersand",
			"Sabbia Soffice",
			"Pudersand",
			"やわらかいすな",
			"부드러운모래",
			"柔软沙子",
			"Soft Sand",
		],
		tags: ['power'],
		sprite: './src/assets/images/items/soft-sand.png',
		price: 150000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases damage dealt by 400%, but is reduced by half for each [ENEMY]enemy[/ENEMY] hit. Only for [SHAPE]area[/SHAPE] [POKEMON]POKÉMON[/POKEMON].`, // inglés
			`Aumenta el daño infligido un 400%, pero se reduce a la mitad por cada [ENEMY]enemigo[/ENEMY] golpeado. Solo para [POKEMON]POKÉMON[/POKEMON] de [SHAPE]área[/SHAPE].`, // español
			`Augmente les dégâts infligés de 400 %, mais ceux-ci sont réduits de moitié pour chaque [ENEMY]ennemi[/ENEMY] touché. Uniquement pour les [POKEMON]POKÉMON[/POKEMON] de [SHAPE]zone[/SHAPE].`, // francés
			`Aumenta o dano causado em 400%, mas ele é reduzido pela metade para cada [ENEMY]inimigo[/ENEMY] atingido. Apenas para [POKEMON]POKÉMON[/POKEMON] de [SHAPE]área[/SHAPE].`, // portugués
			`Aumenta i danni inflitti del 400%, ma vengono dimezzati per ogni [ENEMY]nemico[/ENEMY] colpito. Solo per [POKEMON]POKÉMON[/POKEMON] ad [SHAPE]area[/SHAPE].`, // italiano
			`Erhöht den verursachten Schaden um 400 %, aber er wird für jeden getroffenen [ENEMY]Gegner[/ENEMY] halbiert. Nur für [SHAPE]Flächen[/SHAPE]-[POKEMON]POKÉMON[/POKEMON].`, // alemán
			`与えるダメージが400%増加するが、[ENEMY]敵[/ENEMY]に命中するたびに半減する。[SHAPE]範囲[/SHAPE]攻撃の[POKEMON]ポケモン[/POKEMON]専用。`, // japonés
			`가하는 피해가 400% 증가하지만, [ENEMY]적[/ENEMY]을 하나 명중할 때마다 절반으로 감소합니다. [SHAPE]범위[/SHAPE] [POKEMON]포켓몬[/POKEMON] 전용입니다.`, // coreano
			`造成的伤害增加400%，但每命中一个[ENEMY]敌人[/ENEMY]就会减半。仅限[SHAPE]范围[/SHAPE]攻击的[POKEMON]宝可梦[/POKEMON]。`, // chino
			`Zwiększa zadawane obrażenia o 400%, ale są one zmniejszane o połowę za każdego trafionego [ENEMY]wroga[/ENEMY]. Tylko dla [POKEMON]POKÉMONÓW[/POKEMON] [SHAPE]obszarowych[/SHAPE].` // polaco
		],
		condition: {
			attackType: 'area'
		},
		restriction: {
			id: [19, 70, 83, 101, 404, 126, 142, 144, 162, 170, 173],
			ability: [
				'drumBeating', 'originPulse', 'boomburst', 'liquidVoice', 'charmedCharm', 'emptyLight', 'precipiceBlades',
			]
		},
	},
	heavyDutyBoots: {
		id: 'heavyDutyBoots',
		name: ['Heavy-Duty Boots', 'Botas Gruesas', 'Grosses Bottes', 'Botas Grossas', 'Scarponi robusti', 'Plateauschuhe', 'あつぞこブーツ', '통굽부츠', '厚底靴', 'Heavy-Duty Boots',],
		tags: ['utility'],
		sprite: './src/assets/images/items/heavy-duty-boots.png',
		price: 50000,
		tier: 'common',
		isEquipable: true,
		isRetirable: false,
		description: [
			`Allows [FIELD]Field[/FIELD] and [MOUNTAIN]Mountain[/MOUNTAIN] [POKEMON]POKÉMON[/POKEMON] to be placed in [GRASS]Grass[/GRASS].`, // inglés
			`Permite colocar [POKEMON]POKÉMON[/POKEMON] de [FIELD]Campo[/FIELD] y [MOUNTAIN]Montaña[/MOUNTAIN] en [GRASS]Hierba[/GRASS].`, // español
			`Permet de placer les [POKEMON]POKÉMON[/POKEMON] de [FIELD]Champ[/FIELD] et de [MOUNTAIN]Montagne[/MOUNTAIN] sur [GRASS]Herbe[/GRASS].`, // francés
			`Permite colocar [POKEMON]POKÉMON[/POKEMON] de [FIELD]Campo[/FIELD] e [MOUNTAIN]Montanha[/MOUNTAIN] em [GRASS]Grama[/GRASS].`, // portugués
			`Permette di posizionare i [POKEMON]POKÉMON[/POKEMON] di [FIELD]Campo[/FIELD] e [MOUNTAIN]Montagna[/MOUNTAIN] su [GRASS]Erba[/GRASS].`, // italiano
			`Ermöglicht es, [FIELD]Feld[/FIELD]- und [MOUNTAIN]Berg[/MOUNTAIN]-[POKEMON]POKÉMON[/POKEMON] auf [GRASS]Gras[/GRASS] zu platzieren.`, // alemán
			`[FIELD]フィールド[/FIELD]と[MOUNTAIN]やま[/MOUNTAIN]の[POKEMON]ポケモン[/POKEMON]を[GRASS]くさ[/GRASS]に配置できるようになる。`, // japonés
			`[FIELD]필드[/FIELD]와 [MOUNTAIN]산[/MOUNTAIN] [POKEMON]포켓몬[/POKEMON]을 [GRASS]풀[/GRASS]에 배치할 수 있게 됩니다.`, // coreano
			`允许将[FIELD]场地[/FIELD]和[MOUNTAIN]山地[/MOUNTAIN]的[POKEMON]宝可梦[/POKEMON]放置在[GRASS]草地[/GRASS]上。`, // chino
			`Pozwala umieszczać [POKEMON]POKÉMONY[/POKEMON] z [FIELD]Pola[/FIELD] i [MOUNTAIN]Góry[/MOUNTAIN] na [GRASS]Trawie[/GRASS].` // polaco
		],
		restriction: {
			tile: [2, 3],
			id: [70, 142, 173]
		}
	},
	shieldBreakerBullet: { 
		id: 'shieldBreakerBullet',
		name: ['Shield Breaker Bullet', 'Bala Rompeescudos', 'Balle Perçante', 'Projétil Quebrador de Escudo', 'Proiettile Spaccascudo', 'Schildbrecher-Kugel', 'シールドブレイカーバレット', '실드 브레이커 탄환', '破盾子彈', 'Shield Breaker Bullet'],
		tags: ['power'],
		sprite: './src/assets/images/items/iron-ball.png',
		price: 300000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Only [POKEMON]Clawitzer[/POKEMON] can fire it with the necessary force. Increases [SPEED]recharge time[/SPEED] by 2 seconds and the damage against [ARMOR]armor[/ARMOR] by 100%.`, // inglés
			`Tan solo [POKEMON]Clawitzer[/POKEMON] puede lanzarlo con la fuerza necesaria. Aumenta el [SPEED]tiempo de recarga[/SPEED] en 2 segundos y el daño contra la [ARMOR]armadura[/ARMOR] un 100%.`, // español
			`Seul [POKEMON]Gamblast[/POKEMON] peut le lancer avec la force nécessaire. Augmente le [SPEED]temps de recharge[/SPEED] de 2 secondes et les dégâts contre l'[ARMOR]armure[/ARMOR] de 100 %.`, // francés
			`Apenas [POKEMON]Clawitzer[/POKEMON] consegue lançá-lo com a força necessária. Aumenta o [SPEED]tempo de recarga[/SPEED] em 2 segundos e o dano contra a [ARMOR]armadura[/ARMOR] em 100%.`, // portugués
			`Solo [POKEMON]Clawitzer[/POKEMON] può lanciarlo con la forza necessaria. Aumenta il [SPEED]tempo di ricarica[/SPEED] di 2 secondi e i danni contro l'[ARMOR]armatura[/ARMOR] del 100%.`, // italiano
			`Nur [POKEMON]Krawell[/POKEMON] kann es mit der nötigen Kraft abfeuern. Erhöht die [SPEED]Aufladezeit[/SPEED] um 2 Sekunden und den Schaden gegen [ARMOR]Rüstung[/ARMOR] um 100 %.`, // alemán
			`[POKEMON]ブロスター[/POKEMON]だけが必要な力で発射できる。[SPEED]再使用時間[/SPEED]が2秒増加し、[ARMOR]アーマー[/ARMOR]に対するダメージが100%増加する。`, // japonés
			`[POKEMON]블로스터[/POKEMON]만이 필요한 힘으로 발사할 수 있습니다. [SPEED]재사용 대기시간[/SPEED]이 2초 증가하고 [ARMOR]방어구[/ARMOR]에 대한 피해가 100% 증가합니다.`, // coreano
			`只有[POKEMON]章鱼桶[/POKEMON]能以所需的力量发射它。[SPEED]冷却时间[/SPEED]增加2秒，并且对[ARMOR]护甲[/ARMOR]造成的伤害增加100%。`, // chino
			`Tylko [POKEMON]Clawitzer[/POKEMON] może wystrzelić go z odpowiednią siłą. Zwiększa [SPEED]czas odnowienia[/SPEED] o 2 sekundy i obrażenia zadawane [ARMOR]pancerzowi[/ARMOR] o 100%.` // polaco
		],
		condition: {
			id: [29]
		}
	},
	shellBell: { 
		id: 'shellBell', 
		name: ['Shell Bell', 'Cascabel Concha', 'Grelot Coque', 'Sino de Concha', 'Conchinella', 'Muschelglocke', 'かいがらのすず', '조개껍질방울', '貝殼鈴', 'Shell Bell',],
		tags: ['utility'],
		sprite: './src/assets/images/items/shell-bell.png',
		price: 15000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Restores 1 [HEART]heart[/HEART] when the holder deals 50,000 damage during a wave.`, // inglés
			`Restaura 1 [HEART]corazón[/HEART] cuando el portador inflige 50.000 de daño durante una oleada.`, // español
			`Restaure 1 [HEART]cœur[/HEART] lorsque le porteur inflige 50 000 dégâts pendant une vague.`, // francés
			`Restaura 1 [HEART]coração[/HEART] quando o portador causar 50.000 de dano durante uma onda.`, // portugués
			`Ripristina 1 [HEART]cuore[/HEART] quando chi lo tiene infligge 50.000 danni durante un'ondata.`, // italiano
			`Stellt 1 [HEART]Herz[/HEART] wieder her, wenn der Träger während einer Welle 50.000 Schaden verursacht.`, // alemán
			`ウェーブ中に持ち主が50,000ダメージを与えると、[HEART]ハート[/HEART]を1つ回復する。`, // japonés
			`웨이브에서 소지자가 50,000의 피해를 입히면 [HEART]하트[/HEART]를 1개 회복합니다.`, // coreano
			`持有者在一波中造成50,000点伤害时，恢复1个[HEART]心[/HEART]。`, // chino
			`Odnawia 1 [HEART]serce[/HEART], gdy posiadacz zada 50 000 obrażeń podczas fali.` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173],
			attackType: 'aura'
		},
	},
	stickyBarb: { 
		id: 'stickyBarb',
		name: [
			"Sticky Barb",
			"Pincho pegajoso",
			"Piquants",
			"Espinho pegajoso",
			"Aculeo appiccicoso",
			"Klettdorn",
			"スティッキーバーブ",
			"끈적끈적바늘",
			"黏黏刺",
			'Sticky Barb',
		],
		tags: ['power'],
		sprite: './src/assets/images/items/sticky-barb.png',
		price: 8000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases damage by 30% to [SLOW]slowed[/SLOW] or [STUN]stunned[/STUN] [ENEMY]enemies[/ENEMY]. Only for [POKEMON]Pokémon[/POKEMON] that can be deployed in [WATER]water[/WATER].`, // inglés
			`Aumenta el daño un 30% contra [ENEMY]enemigos[/ENEMY] [SLOW]ralentizados[/SLOW] o [STUN]aturdidos[/STUN]. Solo para [POKEMON]Pokémon[/POKEMON] que pueden desplegarse en [WATER]agua[/WATER].`, // español
			`Augmente les dégâts de 30 % contre les [ENEMY]ennemis[/ENEMY] [SLOW]ralentis[/SLOW] ou [STUN]étourdis[/STUN]. Uniquement pour les [POKEMON]Pokémon[/POKEMON] pouvant être déployés dans [WATER]l'eau[/WATER].`, // francés
			`Aumenta o dano em 30% contra [ENEMY]inimigos[/ENEMY] [SLOW]lentificados[/SLOW] ou [STUN]atordoados[/STUN]. Apenas para [POKEMON]Pokémon[/POKEMON] que podem ser colocados em [WATER]água[/WATER].`, // portugués
			`Aumenta i danni del 30% contro i [ENEMY]nemici[/ENEMY] [SLOW]rallentati[/SLOW] o [STUN]storditi[/STUN]. Solo per [POKEMON]Pokémon[/POKEMON] che possono essere schierati in [WATER]acqua[/WATER].`, // italiano
			`Erhöht den Schaden gegen [SLOW]verlangsamte[/SLOW] oder [STUN]betäubte[/STUN] [ENEMY]Gegner[/ENEMY] um 30 %. Nur für [POKEMON]Pokémon[/POKEMON], die auf [WATER]Wasser[/WATER] eingesetzt werden können.`, // alemán
			`[SLOW]遅くなった[/SLOW]または[STUN]ひるんだ[/STUN][ENEMY]敵[/ENEMY]へのダメージが30%増加する。[WATER]みず[/WATER]に配置できる[POKEMON]ポケモン[/POKEMON]専用。`, // japonés
			`[SLOW]느려진[/SLOW] 또는 [STUN]기절한[/STUN] [ENEMY]적[/ENEMY]에게 주는 피해가 30% 증가합니다. [WATER]물[/WATER]에 배치할 수 있는 [POKEMON]포켓몬[/POKEMON] 전용입니다.`, // coreano
			`对[SLOW]减速[/SLOW]或[STUN]眩晕[/STUN]的[ENEMY]敌人[/ENEMY]造成的伤害增加30%。仅限可以部署在[WATER]水[/WATER]上的[POKEMON]宝可梦[/POKEMON]。`, // chino
			`Zwiększa obrażenia o 30% zadawane [ENEMY]wrogom[/ENEMY] [SLOW]spowolnionym[/SLOW] lub [STUN]ogłuszonym[/STUN]. Tylko dla [POKEMON]Pokémonów[/POKEMON], które mogą być rozmieszczane na [WATER]wodzie[/WATER].` // polaco
		],
		condition: {
			tile: [3]
		},
		restriction: {
			id: [70, 404, 111, 142, 144, 173],
			attackType: 'aura'
		},
	},
	starCandy: { 
		id: 'starCandy',
		name: ["Star Candy", "Caramelo Estrella", "Bonbon Étoile", "Doce Estrela", "Caramella Stella", "Sternbonbon", "スターキャンディ", "스타사탕공예", "星星糖果", "Star Candy"],
		tags: ['range'],
		sprite: './src/assets/images/items/star-sweet.png',
		price: 500000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Gain 0.035 additional [RANGE]range[/RANGE] for each [STAR]star[/STAR] obtained. It's a little [STAR]star[/STAR] from [POKEMON]Clefairy[/POKEMON].`, // inglés
			`Obtiene 0,035 de [RANGE]alcance[/RANGE] adicional por cada [STAR]estrella[/STAR] conseguida. Es una estrellita de [POKEMON]Clefairy[/POKEMON].`, // español
			`Gagne 0,035 de [RANGE]portée[/RANGE] supplémentaire pour chaque [STAR]étoile[/STAR] obtenue. C'est une petite [STAR]étoile[/STAR] de [POKEMON]Mélofée[/POKEMON].`, // francés
			`Ganha 0,035 de [RANGE]alcance[/RANGE] adicional por cada [STAR]estrela[/STAR] obtida. É uma estrelinha da [POKEMON]Clefairy[/POKEMON].`, // portugués
			`Ottiene 0,035 di [RANGE]portata[/RANGE] aggiuntiva per ogni [STAR]stella[/STAR] ottenuta. È una stellina di [POKEMON]Clefairy[/POKEMON].`, // italiano
			`Erhält 0,035 zusätzliche [RANGE]Reichweite[/RANGE] für jeden erhaltenen [STAR]Stern[/STAR]. Es ist ein kleiner [STAR]Stern[/STAR] von [POKEMON]Piepi[/POKEMON].`, // alemán
			`獲得した[STAR]スター[/STAR]1個につき、[RANGE]射程[/RANGE]がさらに0.035増加する。[POKEMON]ピッピ[/POKEMON]の小さな[STAR]星[/STAR]。`, // japonés
			`획득한 [STAR]별[/STAR] 하나당 [RANGE]사거리[/RANGE]가 0.035 추가로 증가한다. [POKEMON]삐삐[/POKEMON]의 작은 [STAR]별[/STAR]이다.`, // coreano
			`每获得一颗[STAR]星星[/STAR]，[RANGE]射程[/RANGE]额外增加0.035。这是[POKEMON]皮皮[/POKEMON]的一颗小[STAR]星星[/STAR]。`, // chino
			`Zyskuje dodatkowe 0,035 [RANGE]zasięgu[/RANGE] za każdą zdobytą [STAR]gwiazdkę[/STAR]. To mała [STAR]gwiazdka[/STAR] od [POKEMON]Clefairy[/POKEMON].` // polaco
		],
		condition: {
			id: [62]
		}
	},
	electirizer: { 
		id: 'electirizer',
		name: [
			"Electirizer",
			"Electrizador",
			"Électriseur",
			"Electrizer",
			"Elettrizzatore",
			"Stromisierer",
			"エレクトライザー",
			"에레키부스터",
			"電力增幅器",
			"Electirizer",
		],
		tags: ['power'],
		sprite: './src/assets/images/items/electirizer.png',
		price: 25000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Deals 30% extra damage to [STUN]stunned[/STUN] [ENEMY]enemies[/ENEMY]. Only [STUN]stun[/STUN]-related [POKEMON]Pokémon[/POKEMON] can equip it.`, // inglés
			`Inflige un 30% más de daño a los [ENEMY]enemigos[/ENEMY] [STUN]aturdidos[/STUN]. Solo pueden equiparlo los [POKEMON]Pokémon[/POKEMON] relacionados con el [STUN]aturdimiento[/STUN].`, // español
			`Inflige 30 % de dégâts supplémentaires aux [ENEMY]ennemis[/ENEMY] [STUN]étourdis[/STUN]. Seuls les [POKEMON]Pokémon[/POKEMON] liés à l'[STUN]étourdissement[/STUN] peuvent l'équiper.`, // francés
			`Causa 30% de dano adicional a [ENEMY]inimigos[/ENEMY] [STUN]atordoados[/STUN]. Apenas [POKEMON]Pokémon[/POKEMON] relacionados com o [STUN]atordoamento[/STUN] podem equipá-lo.`, // portugués
			`Infligge il 30% di danni in più ai [ENEMY]nemici[/ENEMY] [STUN]storditi[/STUN]. Solo i [POKEMON]Pokémon[/POKEMON] legati allo [STUN]stordimento[/STUN] possono equipaggiarlo.`, // italiano
			`Verursacht 30 % mehr Schaden bei [STUN]betäubten[/STUN] [ENEMY]Gegnern[/ENEMY]. Nur [POKEMON]Pokémon[/POKEMON], die mit [STUN]Betäubung[/STUN] in Verbindung stehen, können es ausrüsten.`, // alemán
			`[STUN]まひ[/STUN]状態の[ENEMY]敵[/ENEMY]に与えるダメージが30%増加する。[STUN]まひ[/STUN]に関連する[POKEMON]ポケモン[/POKEMON]のみ装備できる。`, // japonés
			`[STUN]기절[/STUN] 상태인 [ENEMY]적[/ENEMY]에게 30% 추가 피해를 준다. [STUN]기절[/STUN]과 관련된 [POKEMON]포켓몬[/POKEMON]만 장착할 수 있다.`, // coreano
			`对处于[STUN]眩晕[/STUN]状态的[ENEMY]敌人[/ENEMY]造成的伤害提高30%。只有与[STUN]眩晕[/STUN]相关的[POKEMON]宝可梦[/POKEMON]才能装备。`, // chino
			`Zadaje o 30% więcej obrażeń [ENEMY]ogłuszonym[/ENEMY] [STUN]wrogom[/STUN]. Mogą go wyposażyć tylko [POKEMON]Pokémony[/POKEMON] związane z [STUN]ogłuszeniem[/STUN].` // polaco
		],
		condition: {
			ability: ['stunArea', 'stunMono', 'stunMonoNerf', 'static', 'zapCannon', 'boomburst', 'icicleSpear', 'machBolt']
		},
		restriction: {
			id: [70, 142, 173],
			attackType: 'aura'
		},
	},
	cellBattery: { 
		id: 'cellBattery',
		name: [
		    "Cell Battery",
		    "Batería Celular",
		    "Pile",
		    "Bateria Celular",
		    "Batteria Cellulare",
		    "Akku",
		    "セルバッテリー",
		    "충전지",
		    "電池組",
			"Cell Battery",
		],
		tags: ['power', 'utility'],
		sprite: './src/assets/images/items/cell-battery.png',
		price: 500000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Used to raise [POKEMON]Electrode[/POKEMON] tension, increases its [POWER]power[/POWER] by 50% and all attacks cause [STUN]stun[/STUN], but with 95% less effectiveness.`, // inglés
			`Sirve para subir la tensión de [POKEMON]Electrode[/POKEMON], aumenta su [POWER]poder[/POWER] en 50% y todos los ataques causan [STUN]aturdimiento[/STUN], pero con un 95% menos de eficacia.`, // español
			`Sert à augmenter la tension de [POKEMON]Électrode[/POKEMON], augmente sa [POWER]puissance[/POWER] de 50 % et toutes ses attaques provoquent des [STUN]étourdissements[/STUN], mais avec 95 % d'efficacité en moins.`, // francés
			`Serve para aumentar a tensão de [POKEMON]Electrode[/POKEMON], aumenta seu [POWER]poder[/POWER] em 50% e todos os ataques causam [STUN]atordoamento[/STUN], mas com 95% menos eficácia.`, // portugués
			`Serve ad aumentare la tensione di [POKEMON]Electrode[/POKEMON], aumenta il suo [POWER]potere[/POWER] del 50% e tutti gli attacchi causano [STUN]stordimento[/STUN], ma con il 95% di efficacia in meno.`, // italiano
			`Dient dazu, die Spannung von [POKEMON]Voltobal[/POKEMON] zu erhöhen, steigert seine [POWER]Kraft[/POWER] um 50 % und alle Angriffe verursachen [STUN]Betäubung[/STUN], jedoch mit 95 % weniger Effektivität.`, // alemán
			`[POKEMON]マルマイン[/POKEMON]の緊張感を高めるために使われる。 [POWER]パワー[/POWER]が50%増加し、すべての攻撃が[STUN]ひるみ[/STUN]を与えるようになるが、効果が95%低下する。`, // japonés
			`[POKEMON]붐볼[/POKEMON]의 긴장감을 높이는 데 사용됩니다. [POWER]위력[/POWER]이 50% 증가하고 모든 공격이 [STUN]기절[/STUN]을 일으키지만, 효과가 95% 감소합니다.`, // coreano
			`用于提高[POKEMON]顽皮雷弹[/POKEMON]的紧张感，使其[POWER]攻击力[/POWER]提高50%，并使所有攻击造成[STUN]眩晕[/STUN]，但效果降低95%。`, // chino
			`Służy do zwiększania napięcia [POKEMON]Electrode'a[/POKEMON], zwiększa jego [POWER]siłę[/POWER] o 50% i sprawia, że wszystkie ataki powodują [STUN]ogłuszenie[/STUN], ale ich skuteczność jest zmniejszona o 95%.` // polaco
		],
		condition: {
			id: [5]
		}
	},
	leek: {
		id: 'leek',
		name: ['Leek', 'Puerro', 'Poireau', 'Alho-poró', 'Porro', 'Lauch', 'ネギ', '대파', '大蔥', "Leek"],
		tags: ['critical'],
		sprite: './src/assets/images/items/leek.png',
		price: 100000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`An [ITEM]old Leek[/ITEM] that belongs to [POKEMON]Farfetch'd[/POKEMON]. When held, it doubles [CRITICAL]critical chance[/CRITICAL] and [CRITICAL]critical damage[/CRITICAL].`, // inglés
			`El [ITEM]puerro oficial[/ITEM] de [POKEMON]Farfetch'd[/POKEMON], cuando lo lleva, duplica la [CRITICAL]probabilidad de crítico[/CRITICAL] y el [CRITICAL]daño crítico[/CRITICAL].`, // español
			`Le [ITEM]poireau officiel[/ITEM] de [POKEMON]Canarticho[/POKEMON]. Lorsqu'il le tient, il double les [CRITICAL]chances de coup critique[/CRITICAL] et les [CRITICAL]dégâts critiques[/CRITICAL].`, // francés
			`O [ITEM]alho-poró oficial[/ITEM] de [POKEMON]Farfetch'd[/POKEMON]. Quando o segura, dobra a [CRITICAL]chance de crítico[/CRITICAL] e o [CRITICAL]dano crítico[/CRITICAL].`, // portugués
			`Il [ITEM]porro ufficiale[/ITEM] di [POKEMON]Farfetch'd[/POKEMON]. Quando lo tiene, raddoppia la [CRITICAL]probabilità di brutto colpo[/CRITICAL] e i [CRITICAL]danni critici[/CRITICAL].`, // italiano
			`Der offizielle [ITEM]Lauch[/ITEM] von [POKEMON]Porenta[/POKEMON]. Wenn es ihn trägt, verdoppelt er die [CRITICAL]Volltrefferchance[/CRITICAL] und den [CRITICAL]Volltrefferschaden[/CRITICAL].`, // alemán
			`[POKEMON]カモネギ[/POKEMON]の公式の[ITEM]ネギ[/ITEM]。持たせると、[CRITICAL]急所率[/CRITICAL]と[CRITICAL]急所ダメージ[/CRITICAL]が2倍になる。`, // japonés
			`[POKEMON]파오리[/POKEMON]의 공식 [ITEM]대파[/ITEM]입니다. 지니게 하면 [CRITICAL]급소 확률[/CRITICAL]과 [CRITICAL]급소 대미지[/CRITICAL]가 2배가 됩니다.`, // coreano
			`[POKEMON]大葱鸭[/POKEMON]的官方[ITEM]大葱[/ITEM]。携带时，[CRITICAL]暴击率[/CRITICAL]和[CRITICAL]暴击伤害[/CRITICAL]翻倍。`, // chino
			`Oficjalny [ITEM]por[/ITEM] [POKEMON]Farfetch'd[/POKEMON]. Gdy go trzyma, podwaja [CRITICAL]szansę na trafienie krytyczne[/CRITICAL] oraz [CRITICAL]obrażenia krytyczne[/CRITICAL].` // polaco
		],
		condition: { 
			id: [57, 177]
		}
	},
	thickClub: {
		id: 'thickClub',
		name: ['Thick Club', 'Hueso Grueso', 'Masse Os', 'Osso Grosso', 'Ossospesso', 'Kampfknochen', 'ふといホネ', '굵은뼈', '粗骨頭', 'Thick Club',],
		tags: ['power'],
		sprite: './src/assets/images/items/thick-club.png',
		price: 100000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`The characteristic bone of [POKEMON]Marowak[/POKEMON], although sometimes [POKEMON]Lucario[/POKEMON] borrows it. Increases [POWER]power[/POWER] by 50%.`, // inglés
			`El hueso característico de [POKEMON]Marowak[/POKEMON], aunque a veces [POKEMON]Lucario[/POKEMON] se lo pide prestado. Aumenta el [POWER]poder[/POWER] en un 50%.`, // español
			`L'os caractéristique de [POKEMON]Marowak[/POKEMON], bien que parfois [POKEMON]Lucario[/POKEMON] le lui emprunte. Augmente la [POWER]puissance[/POWER] de 50 %.`, // francés
			`O osso característico de [POKEMON]Marowak[/POKEMON], embora às vezes [POKEMON]Lucario[/POKEMON] o peça emprestado. Aumenta o [POWER]poder[/POWER] em 50%.`, // portugués
			`L'osso caratteristico di [POKEMON]Marowak[/POKEMON], anche se a volte [POKEMON]Lucario[/POKEMON] glielo prende in prestito. Aumenta il [POWER]potere[/POWER] del 50%.`, // italiano
			`Der charakteristische Knochen von [POKEMON]Marowak[/POKEMON], obwohl [POKEMON]Lucario[/POKEMON] ihn sich manchmal ausleiht. Erhöht die [POWER]Kraft[/POWER] um 50 %.`, // alemán
			`[POKEMON]ガラガラ[/POKEMON]の特徴的な骨だが、ときどき[POKEMON]ルカリオ[/POKEMON]が借りることがある。[POWER]パワー[/POWER]が50%増加する。`, // japonés
			`[POKEMON]텅구리[/POKEMON]의 특징적인 뼈로, 가끔 [POKEMON]루카리오[/POKEMON]가 빌려 가기도 합니다. [POWER]위력[/POWER]이 50% 증가합니다.`, // coreano
			`[POKEMON]嘎啦嘎啦[/POKEMON]的标志性骨头，不过有时[POKEMON]路卡利欧[/POKEMON]会借来使用。[POWER]攻击力[/POWER]提高50%。`, // chino
			`Charakterystyczna kość [POKEMON]Marowaka[/POKEMON], choć czasami [POKEMON]Lucario[/POKEMON] ją pożycza. Zwiększa [POWER]siłę[/POWER] o 50%.` // polaco
		],
		condition: {
			id: [11, 45]
		}
	},
	lightBall: {
		id: 'lightBall',
		name: ["Light Ball","Bola luminosa","Balle Lumière","Bola luminosa","Palla luminosa","Kugelblitz","ライトボール","전기구슬","電氣球", "Light Ball"],
		tags: ['power'],
		sprite: './src/assets/images/items/light-ball.png',
		price: 100000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases [POKEMON]Pikachu[/POKEMON] [POWER]power[/POWER] by 50%.`, // inglés
			`Aumenta el [POWER]poder[/POWER] de [POKEMON]Pikachu[/POKEMON] en un 50%.`, // español
			`Augmente la [POWER]puissance[/POWER] de [POKEMON]Pikachu[/POKEMON] de 50 %.`, // francés
			`Aumenta o [POWER]poder[/POWER] de [POKEMON]Pikachu[/POKEMON] em 50%.`, // portugués
			`Aumenta il [POWER]potere[/POWER] di [POKEMON]Pikachu[/POKEMON] del 50%.`, // italiano
			`Erhöht die [POWER]Kraft[/POWER] von [POKEMON]Pikachu[/POKEMON] um 50 %.`, // alemán
			`[POKEMON]ピカチュウ[/POKEMON]の[POWER]パワー[/POWER]が50%増加する。`, // japonés
			`[POKEMON]피카츄[/POKEMON]의 [POWER]위력[/POWER]이 50% 증가합니다.`, // coreano
			`使[POKEMON]皮卡丘[/POKEMON]的[POWER]攻击力[/POWER]提高50%。`, // chino
			`Zwiększa [POWER]siłę[/POWER] [POKEMON]Pikachu[/POKEMON] o 50%.` // polaco
		],
		condition: {
			id: [72]
		}
	},
	nanabBerry: { 
		id: 'nanabBerry',
		name: [
			"Nanab Berry",
			"Baya Nanab",
			"Baie Nanab",
			"Baya Nanab",
			"Bacca Nanab",
			"Nanabbeere",
			"ナナのみ",
			"나나열매",
			"蕉香果",
			"Nanab Berry"
		],
		tags: ['range', 'power'],
		sprite: './src/assets/images/items/nanab-berry.png',
		price: 100000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases [RANGE]range[/RANGE] by 30%, [POWER]power[/POWER] by 50%, and [SPEED]recharge time[/SPEED] by 20%. Can only be held by [POKEMON]primates[/POKEMON].`, // inglés
			`Aumenta el [RANGE]alcance[/RANGE] un 30%, el [POWER]poder[/POWER] un 50% y el [SPEED]tiempo de recarga[/SPEED] un 20%. Solo pueden equiparlo los [POKEMON]primates[/POKEMON].`, // español
			`Augmente la [RANGE]portée[/RANGE] de 30 %, la [POWER]puissance[/POWER] de 50 % et le [SPEED]temps de recharge[/SPEED] de 20 %. Ne peut être tenu que par les [POKEMON]primates[/POKEMON].`, // francés
			`Aumenta o [RANGE]alcance[/RANGE] em 30%, o [POWER]poder[/POWER] em 50% e o [SPEED]tempo de recarga[/SPEED] em 20%. Só pode ser segurado por [POKEMON]primatas[/POKEMON].`, // portugués
			`Aumenta la [RANGE]gittata[/RANGE] del 30%, la [POWER]potenza[/POWER] del 50% e il [SPEED]tempo di ricarica[/SPEED] del 20%. Può essere tenuto solo dai [POKEMON]primati[/POKEMON].`, // italiano
			`Erhöht die [RANGE]Reichweite[/RANGE] um 30 %, die [POWER]Stärke[/POWER] um 50 % und die [SPEED]Aufladezeit[/SPEED] um 20 %. Kann nur von [POKEMON]Primaten[/POKEMON] getragen werden.`, // alemán
			`[RANGE]射程[/RANGE]が30%、[POWER]威力[/POWER]が50%、[SPEED]リチャージ時間[/SPEED]が20%増加する。[POKEMON]霊長類のポケモン[/POKEMON]のみ持つことができる。`, // japonés
			`[RANGE]사거리[/RANGE]가 30%, [POWER]위력[/POWER]이 50%, [SPEED]재충전 시간[/SPEED]이 20% 증가한다. [POKEMON]영장류 포켓몬[/POKEMON]만 지닐 수 있다.`, // coreano
			`[RANGE]范围[/RANGE]提高30%，[POWER]威力[/POWER]提高50%，[SPEED]充能时间[/SPEED]增加20%。只有[POKEMON]灵长类宝可梦[/POKEMON]可以携带。`, // chino
			`Zwiększa [RANGE]zasięg[/RANGE] o 30%, [POWER]moc[/POWER] o 50% i [SPEED]czas ładowania[/SPEED] o 20%. Mogą go trzymać tylko [POKEMON]naczelne[/POKEMON].` // polaco
		],
		condition: {
			id: [8, 9, 152, 195, 253]
		}
	},
	bigRoot: {
		id: 'bigRoot',
		name: [
			'Big Root',
			'Raíz Grande',
			'Grosse Racine',
			'Raiz Grande',
			'Radice Grande',
			'Großwurzel',
			'おおきなねっこ',
			'큰뿌리',
			'大根莖',
			'Big Root',
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/big-root.png',
		price: 40000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Doubles restored [HEART]hearts[/HEART].`, // inglés
			`Duplica los [HEART]corazones[/HEART] restaurados.`, // español
			`Double les [HEART]cœurs[/HEART] restaurés.`, // francés
			`Duplica os [HEART]corações[/HEART] restaurados.`, // portugués
			`Raddoppia i [HEART]cuori[/HEART] ripristinati.`, // italiano
			`Verdoppelt wiederhergestellte [HEART]Herzen[/HEART].`, // alemán
			`回復する[HEART]ハート[/HEART]が2倍になる。`, // japonés
			`회복되는 [HEART]하트[/HEART]가 2배가 됩니다.`, // coreano
			`恢复的[HEART]心[/HEART]数量翻倍。`, // chino
			`Podwaja przywrócone [HEART]serca[/HEART].` // polaco
		],
		condition: {
			ability: ['heal', 'bitterBlade', 'takeHeart', 'seedFlare', 'soulHeartReactor']
		},
		restriction: {
			id: [70, 142, 173]
		}
	},
	sprayduck: {
		id: 'sprayduck',
		name: [
			"Sprayduck",
			"Psydugadera",
			"Kwakarrosoir",
			"Sprayduck",
			"Sprayduck",
			"Enton-Kanne",
			"コダックじょうろ",
			"고라파덕물뿌리개",
			"可达鸭喷壶",
			"Sprayduck"
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/sprayduck.png',
		price: 100000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Only the best [POKEMON]Psyduck[/POKEMON] species are capable of carrying a watering can of themselves. It causes their [PROJECTILE]projectiles[/PROJECTILE] to explode in an [SHAPE]area[/SHAPE].`, // inglés
			`Solo las mejores especies de [POKEMON]Psyduck[/POKEMON] son capaces de llevar una regadera de sí mismos. Hace que sus [PROJECTILE]proyectiles[/PROJECTILE] exploten en un [SHAPE]área[/SHAPE].`, // español
			`Seules les meilleures espèces de [POKEMON]Psykokwak[/POKEMON] sont capables de porter un arrosoir à leur effigie. Cela fait exploser leurs [PROJECTILE]projectiles[/PROJECTILE] dans une [SHAPE]zone[/SHAPE].`, // francés
			`Apenas as melhores espécies de [POKEMON]Psyduck[/POKEMON] são capazes de carregar um regador de si mesmas. Isso faz com que seus [PROJECTILE]projéteis[/PROJECTILE] explodam em uma [SHAPE]área[/SHAPE].`, // portugués
			`Solo le migliori specie di [POKEMON]Psyduck[/POKEMON] sono in grado di portare un annaffiatoio raffigurante loro stesse. Fa esplodere i loro [PROJECTILE]proiettili[/PROJECTILE] in un'[SHAPE]area[/SHAPE].`, // italiano
			`Nur die besten Arten von [POKEMON]Enton[/POKEMON] können eine Gießkanne mit ihrem eigenen Abbild tragen. Dadurch explodieren ihre [PROJECTILE]Projektile[/PROJECTILE] in einem [SHAPE]Bereich[/SHAPE].`, // alemán
			`最高の[POKEMON]コダック[/POKEMON]の種族だけが、自分自身をかたどったじょうろを持つことができる。それによって、[PROJECTILE]弾[/PROJECTILE]が[SHAPE]範囲[/SHAPE]内で爆発するようになる。`, // japonés
			`최고의 [POKEMON]고라파덕[/POKEMON] 종만이 자신의 모습을 본뜬 물뿌리개를 들 수 있습니다. 이로 인해 [PROJECTILE]투사체[/PROJECTILE]가 [SHAPE]범위[/SHAPE]에서 폭발합니다.`, // coreano
			`只有最优秀的[POKEMON]可达鸭[/POKEMON]种类才能携带一个以自己为造型的洒水壶。这会使它们的[PROJECTILE]投射物[/PROJECTILE]在[SHAPE]范围[/SHAPE]内爆炸。`, // chino
			`Tylko najlepsze gatunki [POKEMON]Psyducka[/POKEMON] są w stanie nosić konewkę przedstawiającą ich samych. Powoduje ona, że ich [PROJECTILE]pociski[/PROJECTILE] wybuchają na [SHAPE]obszarze[/SHAPE].` // polaco
		],
		condition: {
			id: [35]
		}
	},
	razorClaw: { 
		id: 'razorClaw',
		name: [
			"Razor Claw",
			"Garra Afilada",
			"Griffe Rasoir",
			"Garra Afiada",
			"Affilartigli",
			"Scharfklaue",
			"するどいツメ",
			"예리한손톱",
			"銳利之爪",
			"Razor Claw",
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/razor-claw.png',
		price: 100000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		megaStone: false,
		megaPos: null,
		description: [
			`[CRITICAL]Critical hits[/CRITICAL] [SLOW]slow[/SLOW] the target for 0.2 seconds. [POKEMON]Pokémon[/POKEMON] that apply any [STATUS]status effects[/STATUS] cannot hold it.`, // inglés
			`Los [CRITICAL]golpes críticos[/CRITICAL] [SLOW]ralentizan[/SLOW] al objetivo durante 0,2 segundos. Los [POKEMON]Pokémon[/POKEMON] que aplican cualquier [STATUS]efecto de estado[/STATUS] no pueden llevarlo.`, // español
			`Les [CRITICAL]coups critiques[/CRITICAL] [SLOW]ralentissent[/SLOW] la cible pendant 0,2 seconde. Les [POKEMON]Pokémon[/POKEMON] qui appliquent des [STATUS]altérations de statut[/STATUS] ne peuvent pas le tenir.`, // francés
			`Os [CRITICAL]acertos críticos[/CRITICAL] [SLOW]reduzem a velocidade[/SLOW] do alvo por 0,2 segundos. [POKEMON]Pokémon[/POKEMON] que aplicam qualquer [STATUS]efeito de estado[/STATUS] não podem segurá-lo.`, // portugués
			`I [CRITICAL]colpi critici[/CRITICAL] [SLOW]rallentano[/SLOW] il bersaglio per 0,2 secondi. I [POKEMON]Pokémon[/POKEMON] che applicano qualsiasi [STATUS]effetto di stato[/STATUS] non possono tenerlo.`, // italiano
			`[CRITICAL]Kritische Treffer[/CRITICAL] [SLOW]verlangsamen[/SLOW] das Ziel 0,2 Sekunden lang. [POKEMON]Pokémon[/POKEMON], die [STATUS]Statuseffekte[/STATUS] verursachen, können es nicht tragen.`, // alemán
			`[CRITICAL]急所に当たる[/CRITICAL]と、対象を0.2秒間[SLOW]遅く[/SLOW]する。いずれかの[STATUS]状態異常[/STATUS]を付与する[POKEMON]ポケモン[/POKEMON]は持つことができない。`, // japonés
			`[CRITICAL]급소에 맞으면[/CRITICAL] 대상의 속도가 0.2초 동안 [SLOW]느려집니다[/SLOW]. [STATUS]상태 이상[/STATUS]을 하나라도 부여하는 [POKEMON]포켓몬[/POKEMON]은 지닐 수 없습니다.`, // coreano
			`[CRITICAL]会心命中[/CRITICAL]时会使目标[SLOW]减速[/SLOW]0.2秒。能够施加任何[STATUS]状态异常[/STATUS]的[POKEMON]宝可梦[/POKEMON]无法携带。`, // chino
			`[CRITICAL]Trafienia krytyczne[/CRITICAL] [SLOW]spowalniają[/SLOW] cel na 0,2 sekundy. [POKEMON]Pokémony[/POKEMON], które nakładają dowolne [STATUS]efekty statusu[/STATUS], nie mogą go nosić.` // polaco
		],
		restriction: {
			ability: [
				'slow', 'slowSplash', 'slowRicochet', 'curseDoubleShot', 'curse', 'curseSplash', 'icicleSpear', 'icyWind', 'twineedleMega', 'spicySpray',
				'stunArea', 'stunMono', 'stunMonoNerf', 'static', 'sludgeBomb', 'twineedle', 'sacredFire', 'volcanicKaboom', 'emptyLight', 'toxic', 'precipiceBlades',
				'burn', 'flamethrower', 'burnSplash', 'magmaStorm', 'burnDoubleShot', 'flameWheel', 'drought', 'burnNerf', 'lavaPlume', 'fireLash', 'drumBeating', 'originPulse',
				'poison', 'poisonDoubleShot', 'direClaw', 'waterBubble', 'zapCannon', 'hyperDrill', 'shadowBall', 'boomburst', 'liquidVoice', 'triAttack', 'electroBall', 
				'burnRicochet', 'dazzlingGleam'
			],
			id: [19, 70, 83, 101, 111, 126, 404, 142, 144, 173, 178],
			attackType: 'aura'
		}
	},
	spellTag: { 
		id: 'spellTag',
		name: [
			'Spell Tag',
			'Hechizo',
			'Rune Sort',
			'Talismã de Feitiço',
			'Spettrotarga',
			'Bannsticker',
			'のろいのおふだ',
			'저주의부적',
			'詛咒之符',
			'Spell Tag',
		],
		tags: ['power'],
		sprite: './src/assets/images/items/spell-tag.png',
		price: 100000,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Deal 15% more damage for each [STATUS]status[/STATUS] ([BURN]Burn[/BURN], [STUN]Stun[/STUN], [SLOW]Slow[/SLOW], [POISON]Poison[/POISON]) the [ENEMY]enemy[/ENEMY] has, up to a maximum of 50%.`, // inglés
			`Inflige un 15% más de daño por cada [STATUS]estado[/STATUS] ([BURN]Quemadura[/BURN], [STUN]Aturdimiento[/STUN], [SLOW]Ralentización[/SLOW], [POISON]Envenenamiento[/POISON]) que tenga el [ENEMY]enemigo[/ENEMY], hasta un máximo del 50%.`, // español
			`Inflige 15 % de dégâts supplémentaires pour chaque [STATUS]altération de statut[/STATUS] ([BURN]Brûlure[/BURN], [STUN]Étourdissement[/STUN], [SLOW]Ralentissement[/SLOW], [POISON]Empoisonnement[/POISON]) dont souffre l'[ENEMY]ennemi[/ENEMY], jusqu'à un maximum de 50 %.`, // francés
			`Causa 15% a mais de dano para cada [STATUS]efeito de estado[/STATUS] ([BURN]Queimadura[/BURN], [STUN]Atordoamento[/STUN], [SLOW]Lentidão[/SLOW], [POISON]Envenenamento[/POISON]) que o [ENEMY]inimigo[/ENEMY] tenha, até um máximo de 50%.`, // portugués
			`Infligge il 15% di danni in più per ogni [STATUS]effetto di stato[/STATUS] ([BURN]Scottatura[/BURN], [STUN]Stordimento[/STUN], [SLOW]Rallentamento[/SLOW], [POISON]Avvelenamento[/POISON]) che affligge il [ENEMY]nemico[/ENEMY], fino a un massimo del 50%.`, // italiano
			`Verursacht 15 % mehr Schaden für jeden [STATUS]Statuseffekt[/STATUS] ([BURN]Verbrennung[/BURN], [STUN]Betäubung[/STUN], [SLOW]Verlangsamung[/SLOW], [POISON]Vergiftung[/POISON]), den der [ENEMY]Gegner[/ENEMY] hat, bis zu einem Maximum von 50 %.`, // alemán
			`[ENEMY]敵[/ENEMY]が受けている[STATUS]状態[/STATUS]（[BURN]やけど[/BURN]、[STUN]まひ[/STUN]、[SLOW]スロウ[/SLOW]、[POISON]どく[/POISON]）1つにつき、与えるダメージが15%増加する。最大50%。`, // japonés
			`[ENEMY]적[/ENEMY]이 가진 [STATUS]상태 이상[/STATUS]([BURN]화상[/BURN], [STUN]기절[/STUN], [SLOW]느려짐[/SLOW], [POISON]중독[/POISON]) 하나당 피해량이 15% 증가하며, 최대 50%까지 증가합니다.`, // coreano
			`[ENEMY]敌人[/ENEMY]拥有的每个[STATUS]状态[/STATUS]（[BURN]灼伤[/BURN]、[STUN]眩晕[/STUN]、[SLOW]减速[/SLOW]、[POISON]中毒[/POISON]）都会使造成的伤害提高15%，最多提高50%。`, // chino
			`Zadaje o 15% więcej obrażeń za każdy [STATUS]efekt statusu[/STATUS] ([BURN]Podpalenie[/BURN], [STUN]Ogłuszenie[/STUN], [SLOW]Spowolnienie[/SLOW], [POISON]Zatrucie[/POISON]) posiadany przez [ENEMY]wroga[/ENEMY], maksymalnie o 50%.` // polaco
		],
		restriction: {
			ability: [
				'slow', 'slowSplash', 'slowRicochet', 'icyWind', 'spicySpray', 'toxic',
				'stunArea', 'stunMono', 'stunMonoNerf', 'static', 'icicleSpear', 'sacredFire', 'volcanicKaboom', 'twineedleMega',
				'burn', 'flamethrower', 'burnSplash', 'magmaStorm', 'burnDoubleShot', 'flameWheel', 'drought', 'fireLash', 'sludgeBomb', 'twineedle', 'steamEruption',
				'poison', 'direClaw', 'poisonDoubleShot', 'waterBubble', 'zapCannon', 'lavaPlume', 'triAttack', 'electroBall', 'burnRicochet',
			],
			id: [19, 70, 83, 101, 111, 126, 404, 142, 144, 173],
			attackType: 'aura'
		}
	},
	sharpBeak: {
		id: 'sharpBeak',
		name: [
			'Sharp Beak',
			'Pico Afilado',
			'Bec Pointu',
			'Bico Afiado',
			'Becco Affilato',
			'Spitzer Schnabel',
			'するどいくちばし',
			'예리한부리',
			'銳利鳥嘴',
			'Sharp Beak',
		],
		tags: ['power'],
		sprite: './src/assets/images/items/sharp-beak.png',
		price: 100000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases damage dealt to nearby [ENEMY]enemies[/ENEMY] while the user is on [MOUNTAIN]mountain terrain[/MOUNTAIN]. The damage bonus depends on the user's [RANGE]range[/RANGE]: the higher their [RANGE]range[/RANGE] and the closer the [ENEMY]enemy[/ENEMY], the more damage they deal (max 50%).`, // inglés
			`Aumenta el daño infligido a los [ENEMY]enemigos[/ENEMY] cercanos si el usuario se encuentra en [MOUNTAIN]montaña[/MOUNTAIN]. El porcentaje de daño adicional depende del [RANGE]alcance[/RANGE] del usuario: cuanto mayor sea su [RANGE]alcance[/RANGE] y más cerca esté el [ENEMY]enemigo[/ENEMY], más daño inflige (máximo 50%).`, // español
			`Augmente les dégâts infligés aux [ENEMY]ennemis[/ENEMY] proches lorsque l'utilisateur se trouve en [MOUNTAIN]montagne[/MOUNTAIN]. Le bonus de dégâts dépend de la [RANGE]portée[/RANGE] de l'utilisateur : plus sa [RANGE]portée[/RANGE] est élevée et plus l'[ENEMY]ennemi[/ENEMY] est proche, plus les dégâts infligés sont importants (maximum 50 %).`, // francés
			`Aumenta o dano causado aos [ENEMY]inimigos[/ENEMY] próximos quando o utilizador está em [MOUNTAIN]terreno montanhoso[/MOUNTAIN]. O bônus de dano depende do [RANGE]alcance[/RANGE] do utilizador: quanto maior for o seu [RANGE]alcance[/RANGE] e mais próximo estiver o [ENEMY]inimigo[/ENEMY], mais dano causa (máximo de 50%).`, // portugués
			`Aumenta i danni inflitti ai [ENEMY]nemici[/ENEMY] vicini quando l'utilizzatore si trova su [MOUNTAIN]terreno montuoso[/MOUNTAIN]. Il bonus ai danni dipende dalla [RANGE]portata[/RANGE] dell'utilizzatore: maggiore è la sua [RANGE]portata[/RANGE] e più vicino è il [ENEMY]nemico[/ENEMY], maggiori sono i danni inflitti (massimo 50%).`, // italiano
			`Erhöht den Schaden gegen nahe [ENEMY]Gegner[/ENEMY], wenn sich der Anwender auf [MOUNTAIN]Berggelände[/MOUNTAIN] befindet. Der Schadensbonus hängt von der [RANGE]Reichweite[/RANGE] des Anwenders ab: Je höher seine [RANGE]Reichweite[/RANGE] und je näher der [ENEMY]Gegner[/ENEMY] ist, desto mehr Schaden wird verursacht (maximal 50 %).`, // alemán
			`使用者が[MOUNTAIN]山岳地形[/MOUNTAIN]にいると、近くの[ENEMY]敵[/ENEMY]に与えるダメージが増加する。追加ダメージの割合は使用者の[RANGE]射程[/RANGE]によって決まり、[RANGE]射程[/RANGE]が長く、[ENEMY]敵[/ENEMY]との距離が近いほど、与えるダメージが増加する（最大50%）。`, // japonés
			`사용자가 [MOUNTAIN]산악 지형[/MOUNTAIN]에 있으면 주변 [ENEMY]적[/ENEMY]에게 주는 피해가 증가한다. 추가 피해량은 사용자의 [RANGE]사거리[/RANGE]에 따라 달라지며, [RANGE]사거리[/RANGE]가 길고 [ENEMY]적[/ENEMY]과 가까울수록 더 큰 피해를 준다(최대 50%).`, // coreano
			`当使用者位于[MOUNTAIN]山地地形[/MOUNTAIN]时，对附近[ENEMY]敌人[/ENEMY]造成的伤害会增加。额外伤害比例取决于使用者的[RANGE]射程[/RANGE]： [RANGE]射程[/RANGE]越远，且与[ENEMY]敌人[/ENEMY]的距离越近，造成的伤害就越高（最高50%）。`, // chino
			`Zwiększa obrażenia zadawane pobliskim [ENEMY]wrogom[/ENEMY], gdy użytkownik znajduje się na [MOUNTAIN]terenie górskim[/MOUNTAIN]. Premia do obrażeń zależy od [RANGE]zasięgu[/RANGE] użytkownika: im większy jego [RANGE]zasięg[/RANGE] i im bliżej znajduje się [ENEMY]wróg[/ENEMY], tym większe obrażenia zadaje (maksymalnie 50%).` // polaco
		],
		condition: {
			tile: [4]
		},
		restriction: {
			id: [19, 70, 83, 101, 111, 126, 404, 142, 144, 162, 165, 170, 173, 181, 182, 235],
			attackType: 'aura',
			ability: ['uTurn', 'icyWind', 'dazzlingGleam', 'fireLash', 'precipiceBlades',]
		}
	},
	clawFossil: {
		id: 'clawFossil',
		name: [
		    "Claw Fossil",
		    "Fósil Garra",
		    "Fossile Griffe",
		    "Fóssil Garra",
		    "Fossilartiglio",
		    "Klauenfossil",
		    "ツメのカセキ",
		    "발톱화석",
		    "爪子化石",
		    "Claw Fossil",
		],
		tags: ['power'],
		sprite: './src/assets/images/items/claw.png',
		price: 250000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description:[
			`Increases [POWER]power[/POWER] by 10% for each [POKEMON]Fossil Pokémon[/POKEMON] on the [TEAM]team[/TEAM]. Contains DNA from [POKEMON]Armaldo[/POKEMON].`, // inglés
			`Aumenta el [POWER]poder[/POWER] un 10% por cada [POKEMON]Pokémon Fósil[/POKEMON] del [TEAM]equipo[/TEAM]. Contiene ADN de [POKEMON]Armaldo[/POKEMON].`, // español
			`Augmente la [POWER]puissance[/POWER] de 10 % pour chaque [POKEMON]Pokémon Fossile[/POKEMON] dans l'[TEAM]équipe[/TEAM]. Contient de l'ADN d'[POKEMON]Armaldo[/POKEMON].`, // francés
			`Aumenta o [POWER]poder[/POWER] em 10% por cada [POKEMON]Pokémon Fóssil[/POKEMON] da [TEAM]equipe[/TEAM]. Contém ADN do [POKEMON]Armaldo[/POKEMON].`, // portugués
			`Aumenta la [POWER]potenza[/POWER] del 10% per ogni [POKEMON]Pokémon Fossile[/POKEMON] nella [TEAM]squadra[/TEAM]. Contiene il DNA di [POKEMON]Armaldo[/POKEMON].`, // italiano
			`Erhöht die [POWER]Stärke[/POWER] um 10 % für jedes [POKEMON]Fossil-Pokémon[/POKEMON] im [TEAM]Team[/TEAM]. Enthält DNA von [POKEMON]Armaldo[/POKEMON].`, // alemán
			`[TEAM]チーム[/TEAM]の[POKEMON]化石ポケモン[/POKEMON]1匹につき、[POWER]威力[/POWER]が10%上昇する。[POKEMON]アーマルド[/POKEMON]のDNAを含む。`, // japonés
			`[TEAM]팀[/TEAM]에 있는 [POKEMON]화석 포켓몬[/POKEMON] 한 마리당 [POWER]위력[/POWER]이 10% 증가한다. [POKEMON]아말도[/POKEMON]의 DNA가 들어 있다.`, // coreano
			`[TEAM]队伍[/TEAM]中每有一只[POKEMON]化石宝可梦[/POKEMON]，[POWER]威力[/POWER]就提高10%。含有[POKEMON]太古盔甲[/POKEMON]的DNA。`, // chino
			`Zwiększa [POWER]moc[/POWER] o 10% za każdego [POKEMON]Pokémona Skamielinę[/POKEMON] w [TEAM]drużynie[/TEAM]. Zawiera DNA [POKEMON]Armaldo[/POKEMON].` // polaco
		],
		condition: {
			id: [63]
		}
	},
	sniperScope: {
		id: 'sniperScope',
		name: [
			'Sniper Scope',
			'Mira Telescópica',
			'Lunette de Visée',
			'Mira de Atirador',
			'Mirino Cecchino',
			'Scope-Linse',
			'スナイパースコープ',
			'초점렌즈',
			'狙擊瞄準鏡',
			'Sniper Scope'
		],
		tags: ['power'],
		sprite: './src/assets/images/items/scope-lens.png',
		price: 100000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Damage dealt by [PROJECTILE]projectiles[/PROJECTILE] is increased by 25% if the [ENEMY]enemy[/ENEMY] is farther than 150 [RANGE]range[/RANGE] away, and decreased by 25% otherwise.`, // inglés
			`El daño infligido por los [PROJECTILE]proyectiles[/PROJECTILE] aumenta un 25% si el [ENEMY]enemigo[/ENEMY] está a más de 150 de [RANGE]alcance[/RANGE], y se reduce un 25% en caso contrario.`, // español
			`Les dégâts infligés par les [PROJECTILE]projectiles[/PROJECTILE] augmentent de 25 % si l'[ENEMY]ennemi[/ENEMY] se trouve à plus de 150 de [RANGE]portée[/RANGE], et diminuent de 25 % dans le cas contraire.`, // francés
			`O dano causado pelos [PROJECTILE]projéteis[/PROJECTILE] aumenta em 25% se o [ENEMY]inimigo[/ENEMY] estiver a mais de 150 de [RANGE]alcance[/RANGE] e diminui em 25% caso contrário.`, // portugués
			`I danni inflitti dai [PROJECTILE]proiettili[/PROJECTILE] aumentano del 25% se il [ENEMY]nemico[/ENEMY] si trova a più di 150 di [RANGE]portata[/RANGE], e diminuiscono del 25% in caso contrario.`, // italiano
			`Der durch [PROJECTILE]Projektile[/PROJECTILE] verursachte Schaden erhöht sich um 25 %, wenn der [ENEMY]Gegner[/ENEMY] mehr als 150 [RANGE]Reichweite[/RANGE] entfernt ist, andernfalls verringert er sich um 25 %.`, // alemán
			`[ENEMY]敵[/ENEMY]が[RANGE]射程[/RANGE]150より遠くにいる場合、[PROJECTILE]弾[/PROJECTILE]のダメージが25%増加し、そうでない場合は25%減少する。`, // japonés
			`[ENEMY]적[/ENEMY]이 [RANGE]사거리[/RANGE] 150보다 멀리 있으면 [PROJECTILE]투사체[/PROJECTILE]의 피해량이 25% 증가하고, 그렇지 않으면 25% 감소한다.`, // coreano
			`如果[ENEMY]敌人[/ENEMY]距离超过150点[RANGE]射程[/RANGE]，[PROJECTILE]投射物[/PROJECTILE]造成的伤害提高25%；否则伤害降低25%。`, // chino
			`Obrażenia zadawane przez [PROJECTILE]pociski[/PROJECTILE] zwiększają się o 25%, jeśli [ENEMY]wróg[/ENEMY] znajduje się dalej niż 150 [RANGE]zasięgu[/RANGE], a w przeciwnym razie zmniejszają się o 25%.` // polaco
		],
		condition: { 
			attackType: 'single'
		},
		restriction: {
			id: [19, 70, 83, 101, 106, 111, 404, 142, 144, 162, 165, 170, 173, 235],
			attackType: 'aura',
			ability: [
				'uTurn', 'icyWind', 'dazzlingGleam', 'flamethrower', 'berserk', 'fireLash', 'precipiceBlades',
				'solarBeam', 'hydroCannon', 'zapCannon', 'hyperBeam', 'meteorBeam', 'iceBeam', 'steelBeam', 'steamEruption', 'soulHeartReactor', 'psybeam', 'signalBeam', 
				'cryogenicCannon', 'moongeistBeam',
				'boomburst', 'machBolt', 'liquidVoice', 'drumBeating', 'originPulse', 'charmedCharm', 'emptyLight'
			]
		}
	},
	loadedDice: { 
		id: 'loadedDice',
		name: [
			"Loaded Dice",
			"Dados Cargados",
			"Dé Pipé",
			"Dados viciados",
			"Dadi truccati",
			"Gezinkter Würfel",
			"ローデッドダイス",
			"속임수주사위",
			"作弊骰子",
			"Loaded Dice"
		],
		tags: ['power'],
		sprite: './src/assets/images/items/loaded-dice.png',
		price: 123456,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`[PROJECTILE]Projectiles[/PROJECTILE] no longer [RICOCHET]ricochet[/RICOCHET] and increases [POWER]power[/POWER] by 60% for each missed [RICOCHET]ricochet[/RICOCHET].`, // inglés
			`Los [PROJECTILE]proyectiles[/PROJECTILE] ya no [RICOCHET]rebotan[/RICOCHET] y aumentan el [POWER]poder[/POWER] un 60% por cada [RICOCHET]rebote[/RICOCHET] fallido.`, // español
			`Les [PROJECTILE]projectiles[/PROJECTILE] ne [RICOCHET]ricochent[/RICOCHET] plus et augmentent la [POWER]puissance[/POWER] de 60 % pour chaque [RICOCHET]ricochet[/RICOCHET] manqué.`, // francés
			`Os [PROJECTILE]projéteis[/PROJECTILE] deixam de [RICOCHET]ricochetear[/RICOCHET] e aumentam o [POWER]poder[/POWER] em 60% para cada [RICOCHET]ricochete[/RICOCHET] falho.`, // portugués
			`I [PROJECTILE]proiettili[/PROJECTILE] non [RICOCHET]rimbalzano[/RICOCHET] più e aumentano il [POWER]potere[/POWER] del 60% per ogni [RICOCHET]rimbalzo[/RICOCHET] mancato.`, // italiano
			`[PROJECTILE]Projektile[/PROJECTILE] [RICOCHET]prallen[/RICOCHET] nicht mehr ab und erhöhen die [POWER]Kraft[/POWER] für jeden fehlgeschlagenen [RICOCHET]Abpraller[/RICOCHET] um 60 %.`, // alemán
			`[PROJECTILE]弾[/PROJECTILE]が[RICOCHET]跳ね返らなくなり[/RICOCHET]、失敗した[RICOCHET]跳ね返り[/RICOCHET]1回につき[POWER]パワー[/POWER]が60%増加する。`, // japonés
			`[PROJECTILE]투사체[/PROJECTILE]가 더 이상 [RICOCHET]튕겨나가지 않으며[/RICOCHET], 실패한 [RICOCHET]튕김[/RICOCHET]마다 [POWER]위력[/POWER]이 60% 증가합니다.`, // coreano
			`[PROJECTILE]投射物[/PROJECTILE]不再[RICOCHET]反弹[/RICOCHET]，每次[RICOCHET]反弹[/RICOCHET]失败都会使[POWER]攻击力[/POWER]提高60%。`, // chino
			`[PROJECTILE]Pociski[/PROJECTILE] przestają [RICOCHET]rykoszetować[/RICOCHET] i zwiększają [POWER]siłę[/POWER] o 60% za każdy nieudany [RICOCHET]rykoszet[/RICOCHET].` // polaco
		],
		condition: {
			ricochet: true
		},
		restriction: {
			id: [70, 16, 142, 173]
		}
	},
	quickPowder: { 
		id: 'quickPowder',
		name: [
			'Quick Powder',
			'Polvo Veloz',
			'Poudre Vite',
			'Pó Rápido',
			'Velopolvere',
			'Flottstaub',
			'スピードパウダー',
			'스피드파우더',
			'速度粉末',
			'Quick Powder'
		],
		tags: ['speed'],
		sprite: './src/assets/images/items/quick-powder.png',
		price: 200000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Reduces [POWER]power[/POWER] by 50% and [SPEED]recharge time[/SPEED] by 25%, only [POKEMON]Ditto[/POKEMON] can use this.`, // inglés
			`Reduce el [POWER]poder[/POWER] en un 50% y el [SPEED]tiempo de recarga[/SPEED] en un 25%, solo [POKEMON]Ditto[/POKEMON] puede usarlo.`, // español
			`Réduit la [POWER]puissance[/POWER] de 50 % et le [SPEED]temps de recharge[/SPEED] de 25 %, seul [POKEMON]Métamorph[/POKEMON] peut l'utiliser.`, // francés
			`Reduz o [POWER]poder[/POWER] em 50% e o [SPEED]tempo de recarga[/SPEED] em 25%, apenas [POKEMON]Ditto[/POKEMON] pode usá-lo.`, // portugués
			`Riduce il [POWER]potere[/POWER] del 50% e il [SPEED]tempo di ricarica[/SPEED] del 25%, solo [POKEMON]Ditto[/POKEMON] può usarlo.`, // italiano
			`Verringert die [POWER]Kraft[/POWER] um 50 % und die [SPEED]Aufladezeit[/SPEED] um 25 %, nur [POKEMON]Ditto[/POKEMON] kann es verwenden.`, // alemán
			`[POWER]パワー[/POWER]が50%、[SPEED]再使用時間[/SPEED]が25%減少する。[POKEMON]メタモン[/POKEMON]のみが使用できる。`, // japonés
			`[POWER]위력[/POWER]이 50% 감소하고 [SPEED]재사용 대기시간[/SPEED]이 25% 감소합니다. [POKEMON]메타몽[/POKEMON]만 사용할 수 있습니다.`, // coreano
			`[POWER]攻击力[/POWER]降低50%，[SPEED]冷却时间[/SPEED]缩短25%，仅限[POKEMON]百变怪[/POKEMON]使用。`, // chino
			`Zmniejsza [POWER]siłę[/POWER] o 50% i [SPEED]czas odnowienia[/SPEED] o 25%, tylko [POKEMON]Ditto[/POKEMON] może tego używać.` // polaco
		],
		condition: {
			id: [70, 404]
		}
	},
	metalPowder: { 
		id: 'metalPowder',
		name: [
			'Metal Powder',
			'Polvo Metálico',
			'Poudre Métal',
			'Pó Metálico',
			'Metalpolvere',
			'Metallstaub',
			'メタルパウダー',
			'금속파우더',
			'金屬粉末',
			'Metal Powder'
		],
		tags: ['power'],
		sprite: './src/assets/images/items/metal-powder.png',
		price: 200000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases [POWER]power[/POWER] by 50% and [SPEED]recharge time[/SPEED] by 25%, only [POKEMON]Ditto[/POKEMON] can use this.`, // inglés
			`Aumenta el [POWER]poder[/POWER] en un 50% y el [SPEED]tiempo de recarga[/SPEED] en un 25%, solo [POKEMON]Ditto[/POKEMON] puede usarlo.`, // español
			`Augmente la [POWER]puissance[/POWER] de 50 % et le [SPEED]temps de recharge[/SPEED] de 25 %, seul [POKEMON]Métamorph[/POKEMON] peut l'utiliser.`, // francés
			`Aumenta o [POWER]poder[/POWER] em 50% e o [SPEED]tempo de recarga[/SPEED] em 25%, apenas [POKEMON]Ditto[/POKEMON] pode usá-lo.`, // portugués
			`Aumenta il [POWER]potere[/POWER] del 50% e il [SPEED]tempo di ricarica[/SPEED] del 25%, solo [POKEMON]Ditto[/POKEMON] può usarlo.`, // italiano
			`Erhöht die [POWER]Kraft[/POWER] um 50 % und die [SPEED]Aufladezeit[/SPEED] um 25 %, nur [POKEMON]Ditto[/POKEMON] kann es verwenden.`, // alemán
			`[POWER]パワー[/POWER]が50%、[SPEED]再使用時間[/SPEED]が25%増加する。[POKEMON]メタモン[/POKEMON]のみが使用できる。`, // japonés
			`[POWER]위력[/POWER]이 50% 증가하고 [SPEED]재사용 대기시간[/SPEED]이 25% 증가합니다. [POKEMON]메타몽[/POKEMON]만 사용할 수 있습니다.`, // coreano
			`[POWER]攻击力[/POWER]提高50%，[SPEED]冷却时间[/SPEED]延长25%，仅限[POKEMON]百变怪[/POKEMON]使用。`, // chino
			`Zwiększa [POWER]siłę[/POWER] o 50% i [SPEED]czas odnowienia[/SPEED] o 25%, tylko [POKEMON]Ditto[/POKEMON] może tego używać.` // polaco
		],
		condition: {
			id: [70, 404]
		}
	},
	hardStone: { 
		id: 'hardStone',
		name: [
			'Hard Stone',
			'Piedra Dura',
			'Pierre Dure',
			'Pedra Dura',
			'Pietradura',
			'Granitstein',
			'かたいいし',
			'딱딱한돌',
			'堅硬石頭',
			'Hard Stone'
		],
		tags: ['power'],
		sprite: './src/assets/images/items/hard-stone.png',
		price: 150000,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
		description: [
			`[POKEMON]Fossil Pokémon[/POKEMON] can use it to increase [POWER]power[/POWER] by 25%.`, // inglés
			`Los [POKEMON]Pokémon Fósiles[/POKEMON] pueden usarlo para aumentar el [POWER]poder[/POWER] un 25%.`, // español
			`Les [POKEMON]Pokémon Fossiles[/POKEMON] peuvent l'utiliser pour augmenter leur [POWER]puissance[/POWER] de 25 %.`, // francés
			`Os [POKEMON]Pokémon Fósseis[/POKEMON] podem usá-lo para aumentar o [POWER]poder[/POWER] em 25%.`, // portugués
			`I [POKEMON]Pokémon Fossili[/POKEMON] possono usarlo per aumentare la [POWER]potenza[/POWER] del 25%.`, // italiano
			`[POKEMON]Fossil-Pokémon[/POKEMON] können es verwenden, um ihre [POWER]Stärke[/POWER] um 25 % zu erhöhen.`, // alemán
			`[POKEMON]化石ポケモン[/POKEMON]はこれを使って[POWER]威力[/POWER]を25%増加させられる。`, // japonés
			`[POKEMON]화석 포켓몬[/POKEMON]은 이를 사용해 [POWER]위력[/POWER]을 25% 증가시킬 수 있다.`, // coreano
			`[POKEMON]化石宝可梦[/POKEMON]可以使用它来提高25%的[POWER]威力[/POWER]。`, // chino
			`[POKEMON]Pokémony Skamieliny[/POKEMON] mogą użyć tego przedmiotu, aby zwiększyć [POWER]moc[/POWER] o 25%.` // polaco
		],
		condition: {
			id: [58, 59, 63, 64, 65, 66, 94, 140, 136, 151, 247]
		}
	},
	domeFossil: {
		id: 'domeFossil',
		name: [
		    "Dome Fossil",
		    "Fósil Domo",
		    "Fossile Dôme",
		    "Fóssil Domo",
		    "Fossile Domo",
		    "Domfossil",
		    "とげのカセキ",
		    "껍질화석",
		    "圆顶化石",
			"Dome Fossil",
		],
		tags: ['critical'],
		sprite: './src/assets/images/items/dome.png',
		price: 250000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases [CRITICAL]critical[/CRITICAL] by 5% for each [POKEMON]Fossil Pokémon[/POKEMON] on the [TEAM]team[/TEAM]. Contains DNA from [POKEMON]Kabutops[/POKEMON].`, // inglés
			`Aumenta la [CRITICAL]probabilidad de crítico[/CRITICAL] un 5% por cada [POKEMON]Pokémon Fósil[/POKEMON] del [TEAM]equipo[/TEAM]. Contiene ADN de [POKEMON]Kabutops[/POKEMON].`, // español
			`Augmente le [CRITICAL]taux de coups critiques[/CRITICAL] de 5 % pour chaque [POKEMON]Pokémon Fossile[/POKEMON] dans l'[TEAM]équipe[/TEAM]. Contient de l'ADN de [POKEMON]Kabutops[/POKEMON].`, // francés
			`Aumenta a [CRITICAL]chance de crítico[/CRITICAL] em 5% para cada [POKEMON]Pokémon Fóssil[/POKEMON] da [TEAM]equipe[/TEAM]. Contém ADN de [POKEMON]Kabutops[/POKEMON].`, // portugués
			`Aumenta la [CRITICAL]probabilità di critico[/CRITICAL] del 5% per ogni [POKEMON]Pokémon Fossile[/POKEMON] nella [TEAM]squadra[/TEAM]. Contiene il DNA di [POKEMON]Kabutops[/POKEMON].`, // italiano
			`Erhöht die [CRITICAL]Volltrefferchance[/CRITICAL] um 5 % für jedes [POKEMON]Fossil-Pokémon[/POKEMON] im [TEAM]Team[/TEAM]. Enthält DNA von [POKEMON]Kabutops[/POKEMON].`, // alemán
			`[TEAM]チーム[/TEAM]の[POKEMON]化石ポケモン[/POKEMON]1匹につき、[CRITICAL]急所率[/CRITICAL]が5%上昇する。[POKEMON]カブトプス[/POKEMON]のDNAを含む。`, // japonés
			`[TEAM]팀[/TEAM]에 있는 [POKEMON]화석 포켓몬[/POKEMON] 한 마리당 [CRITICAL]급소 확률[/CRITICAL]이 5% 증가한다. [POKEMON]투구푸스[/POKEMON]의 DNA가 들어 있다.`, // coreano
			`[TEAM]队伍[/TEAM]中每有一只[POKEMON]化石宝可梦[/POKEMON]，[CRITICAL]会心率[/CRITICAL]就提高5%。含有[POKEMON]镰刀盔[/POKEMON]的DNA。`, // chino
			`Zwiększa [CRITICAL]szansę na cios krytyczny[/CRITICAL] o 5% za każdego [POKEMON]Pokémona Skamielinę[/POKEMON] w [TEAM]drużynie[/TEAM]. Zawiera DNA [POKEMON]Kabutopsa[/POKEMON].` // polaco
		],
		condition: {
			id: [59]
		}
	},
	starPiece: { 
		id: 'starPiece',
		name: [
			'Star Piece',
			'Fragmento Estrella',
			'Morceau d’Étoile',
			'Fragmento Estrela',
			'Pezzo Stella',
			'Sternenstück',
			'ほしのかけら',
			'별의조각',
			'星之碎片',
			'Star Piece'
		],
		tags: ['utility', 'range'],
		sprite: './src/assets/images/items/star-piece.png',
		price: 40000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			'Converts 4-direction attacks into 8-direction attacks.',
			'Convierte ataques de 4 direcciones en ataques en 8 direcciones.',
			'Transforme les attaques à 4 directions en attaques à 8 directions.',
			'Converte ataques de 4 direções em ataques de 8 direções.',
			'Converte gli attacchi a 4 direzioni in attacchi a 8 direzioni.',
			'Wandelt 4-Richtungs-Angriffe in 8-Richtungs-Angriffe um.',
			'4方向の攻撃を8方向の攻撃に変換します。',
			'4방향 공격을 8방향 공격으로 변환합니다.',
			'將 4 方向攻擊轉換為 8 方向攻擊。',
			'Zamienia ataki w 4 kierunkach na ataki w 8 kierunkach.',
		],
		condition: {
			rangeType: ['cross', 'xShape']
		},
		restriction: {
			id: [70, 142, 173]
		}
	},
	rockyHelmet: {
		id: 'rockyHelmet',
		name: [
			"Skull Fossil",
			"Fósil Cráneo",
			"Fossile Crâne",
			"Fóssil de Crânio",
			"Fossilcranio",
			"Kopffossil",
			"ずがいのカセキ",
			"두개의화석",
			"头盖化石",
			"Skamielina Czaszki"
		],
		tags: ['power'],
		sprite: './src/assets/images/items/skull.png',
		price: 250000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Doubles [POKEMON]Rampardos[/POKEMON]'s damage boost from 5% per missing [HEART]heart[/HEART] to 10% per missing [HEART]heart[/HEART].`, // inglés
			`Duplica la bonificación de daño de [POKEMON]Rampardos[/POKEMON], pasando del 5% al 10% por cada [HEART]corazón[/HEART] que falte.`, // español
			`Double le bonus de dégâts de [POKEMON]Charkos[/POKEMON], qui passe de 5 % à 10 % par [HEART]cœur[/HEART] manquant.`, // francés
			`Duplica o bônus de dano de [POKEMON]Rampardos[/POKEMON], passando de 5% para 10% por cada [HEART]coração[/HEART] em falta.`, // portugués
			`Raddoppia il bonus ai danni di [POKEMON]Rampardos[/POKEMON], passando dal 5% al 10% per ogni [HEART]cuore[/HEART] mancante.`, // italiano
			`Verdoppelt [POKEMON]Rameidons[/POKEMON] Schadensbonus von 5 % auf 10 % pro fehlendem [HEART]Herz[/HEART].`, // alemán
			`[POKEMON]ラムパルド[/POKEMON]のダメージボーナスが、失った[HEART]ハート[/HEART]1個につき5%から10%に倍増する。`, // japonés
			`[POKEMON]램펄드[/POKEMON]의 피해 보너스가 잃은 [HEART]하트[/HEART] 하나당 5%에서 10%로 두 배 증가한다.`, // coreano
			`[POKEMON]战槌龙[/POKEMON]的伤害加成翻倍，每缺少一颗[HEART]心心[/HEART]的加成从5%提高至10%。`, // chino
			`Podwaja premię do obrażeń [POKEMON]Rampardosa[/POKEMON] — z 5% do 10% za każde brakujące [HEART]serce[/HEART].` // polaco
		],
		condition: {
			id: [66],
		},
	},
	berryJuice: { 
		id: 'berryJuice',
		name: [
			"Berry Juice",
			"Jugo de Bayas",
			"Jus de Baie",
			"Suco de Baya",
			"Succo di Bacca",
			"Beerensaft",
			"ベリージュース",
			"나무열매쥬스",
			"树果汁",
			"Berry Juice",
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/berry-juice.png',
		price: 500000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`[SLOW]Slowing[/SLOW] is 25% stronger, only [POKEMON]Shuckle[/POKEMON] can hold it.`, // inglés
			`Los [SLOW]ralentizamientos[/SLOW] son un 25% más fuertes, solo [POKEMON]Shuckle[/POKEMON] puede llevarlo.`, // español
			`Les [SLOW]ralentissements[/SLOW] sont 25 % plus puissants, seul [POKEMON]Caratroc[/POKEMON] peut le tenir.`, // francés
			`Os [SLOW]efeitos de lentidão[/SLOW] são 25% mais fortes, apenas [POKEMON]Shuckle[/POKEMON] pode segurá-lo.`, // portugués
			`I [SLOW]rallentamenti[/SLOW] sono più potenti del 25%, solo [POKEMON]Shuckle[/POKEMON] può tenerlo.`, // italiano
			`[SLOW]Verlangsamungen[/SLOW] sind 25 % stärker, nur [POKEMON]Pottrott[/POKEMON] kann es tragen.`, // alemán
			`[SLOW]遅延[/SLOW]が25%強くなる。[POKEMON]ツボツボ[/POKEMON]のみが持てる。`, // japonés
			`[SLOW]느려짐[/SLOW]이 25% 더 강해지며, [POKEMON]단단지[/POKEMON]만 장착할 수 있습니다.`, // coreano
			`[SLOW]减速[/SLOW]效果增强25%，仅限[POKEMON]壶壶[/POKEMON]携带。`, // chino
			`[SLOW]Spowolnienie[/SLOW] jest o 25% silniejsze, tylko [POKEMON]Shuckle[/POKEMON] może to trzymać.` // polaco
		],
		condition: {
			id: [42]
		}
	},
	blueBandana: { 
		id: 'blueBandana',
		name: [
			"Blue Bandana",
			"Bandana azul",
			"Bandana Bleu",
			"Bandana azul",
			"Bandana blu",
			"Blauer Schal",
			"青いバンダナ",
			"파랑밴드",
			"藍色頭巾",
			"Blue Bandana"
		],
		tags: ['power'],
		sprite: './src/assets/images/items/blue.png',
		price: 120000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`The holder can no longer deal [CRITICAL]critical hits[/CRITICAL]. Increases [POWER]power[/POWER] by 1% for every 1% [CRITICAL]critical[/CRITICAL].`, // inglés
			`El portador ya no puede asestar [CRITICAL]golpes críticos[/CRITICAL]. Aumenta el [POWER]poder[/POWER] un 1% por cada 1% de [CRITICAL]probabilidad de crítico[/CRITICAL].`, // español
			`Le porteur ne peut plus infliger de [CRITICAL]coups critiques[/CRITICAL]. Augmente la [POWER]puissance[/POWER] de 1 % pour chaque 1 % de [CRITICAL]taux de coup critique[/CRITICAL].`, // francés
			`O portador deixa de poder causar [CRITICAL]golpes críticos[/CRITICAL]. Aumenta o [POWER]poder[/POWER] em 1% por cada 1% de [CRITICAL]chance de crítico[/CRITICAL].`, // portugués
			`Il portatore non può più infliggere [CRITICAL]colpi critici[/CRITICAL]. Aumenta la [POWER]potenza[/POWER] dell'1% per ogni 1% di [CRITICAL]probabilità di critico[/CRITICAL].`, // italiano
			`Der Träger kann keine [CRITICAL]Volltreffer[/CRITICAL] mehr landen. Erhöht die [POWER]Stärke[/POWER] um 1 % für jedes 1 % [CRITICAL]Volltrefferchance[/CRITICAL].`, // alemán
			`持ち主は[CRITICAL]急所に当てられなくなる[/CRITICAL]。[CRITICAL]急所率[/CRITICAL]が1%上がるごとに[POWER]威力[/POWER]が1%増加する。`, // japonés
			`소지자는 더 이상 [CRITICAL]급소 공격[/CRITICAL]을 할 수 없다. [CRITICAL]급소 확률[/CRITICAL]이 1% 증가할 때마다 [POWER]위력[/POWER]이 1% 증가한다.`, // coreano
			`持有者不再能造成[CRITICAL]会心一击[/CRITICAL]。[CRITICAL]会心率[/CRITICAL]每提高1%，[POWER]威力[/POWER]就提高1%。`, // chino
			`Posiadacz nie może już zadawać [CRITICAL]ciosów krytycznych[/CRITICAL]. Zwiększa [POWER]moc[/POWER] o 1% za każdy 1% [CRITICAL]szansy na cios krytyczny[/CRITICAL].` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 126, 404, 142, 144, 162, 170, 173],
			attackType: 'aura'
		}
	},
	adrenalineOrb: { 
		id: 'adrenalineOrb',
		name: [
			'Adrenaline Orb',
			'Nerviosfera',
			'Orbe Frousse',
			'Orbe de Adrenalina',
			'Fifasfera',
			'Zitterorb',
			'ビビリだま',
			'주눅구슬',
			'膽怯球',
			'Adrenaline Orb',
		],
		tags: ['speed'],
		sprite: './src/assets/images/items/adrenaline-orb.png',
		price: 120000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Reduces [SPEED]recharge time[/SPEED] by 2.5% for each missing [HEART]heart[/HEART].`, // inglés
			`Reduce el [SPEED]tiempo de recarga[/SPEED] un 2,5% por cada [HEART]corazón[/HEART] que falte.`, // español
			`Réduit le [SPEED]temps de recharge[/SPEED] de 2,5 % pour chaque [HEART]cœur[/HEART] manquant.`, // francés
			`Reduz o [SPEED]tempo de recarga[/SPEED] em 2,5% por cada [HEART]coração[/HEART] em falta.`, // portugués
			`Riduce il [SPEED]tempo di ricarica[/SPEED] del 2,5% per ogni [HEART]cuore[/HEART] mancante.`, // italiano
			`Verringert die [SPEED]Aufladezeit[/SPEED] um 2,5 % pro fehlendem [HEART]Herz[/HEART].`, // alemán
			`失った[HEART]ハート[/HEART]1個につき、[SPEED]再チャージ時間[/SPEED]が2.5%短縮される。`, // japonés
			`잃은 [HEART]하트[/HEART] 하나당 [SPEED]재충전 시간[/SPEED]이 2.5% 감소한다.`, // coreano
			`每缺少一颗[HEART]心心[/HEART]，[SPEED]充能时间[/SPEED]就缩短2.5%。`, // chino
			`Skraca [SPEED]czas odnowienia[/SPEED] o 2,5% za każde brakujące [HEART]serce[/HEART].` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173],
			orbital: true,
			attackType: ['aura', 'stream', 'orbital']
		},
	},
	zoomLens: {
		id: 'zoomLens',
		name: [
			'Zoom Lens',
			'Telescopio',
			'Lentille Zoom',
			'Lente de Zoom',
			'Zoomlente',
			'Zoomlinse',
			'フォーカスレンズ',
			'멀티렌즈',
			'變焦鏡片',
			'Zoom Lens'
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/zoom-lens.png',
		price: 200000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`The holder can attack one additional [ENEMY]enemy[/ENEMY], but [POWER]power[/POWER] is reduced by 50%.`, // inglés
			`El portador puede atacar a un [ENEMY]enemigo[/ENEMY] adicional, pero el [POWER]poder[/POWER] se reduce un 50%.`, // español
			`Le porteur peut attaquer un [ENEMY]ennemi[/ENEMY] supplémentaire, mais sa [POWER]puissance[/POWER] est réduite de 50 %.`, // francés
			`O portador pode atacar um [ENEMY]inimigo[/ENEMY] adicional, mas o [POWER]poder[/POWER] é reduzido em 50%.`, // portugués
			`Il portatore può attaccare un [ENEMY]nemico[/ENEMY] aggiuntivo, ma la [POWER]potenza[/POWER] si riduce del 50%.`, // italiano
			`Der Träger kann einen zusätzlichen [ENEMY]Gegner[/ENEMY] angreifen, aber die [POWER]Stärke[/POWER] wird um 50 % verringert.`, // alemán
			`持ち主は追加で1体の[ENEMY]敵[/ENEMY]を攻撃できるが、[POWER]威力[/POWER]が50%低下する。`, // japonés
			`지닌 포켓몬은 [ENEMY]적[/ENEMY] 하나를 추가로 공격할 수 있지만, [POWER]위력[/POWER]이 50% 감소한다.`, // coreano
			`持有者可以额外攻击1个[ENEMY]敌人[/ENEMY]，但[POWER]威力[/POWER]降低50%。`, // chino
			`Posiadacz może atakować o jednego [ENEMY]wroga[/ENEMY] więcej, ale jego [POWER]moc[/POWER] zostaje zmniejszona o 50%.` // polaco
		],
		restriction: {
			ability: [
				'flowerTrick', 'doubleShot', 'tripleShot', 'quadraShot', 'octaShot', 'curseDoubleShot', 'icyWind', 'spicySpray',
				'poisonDoubleShot', 'quadraShotSand', 'doubleShotSand', 'burnDoubleShot', 'bitterBlade', 'whiteRay', 'uTurn', 
				'boomburst', 'liquidVoice', 'drumBeating', 'originPulse', 'emptyLight', 'charmedCharm', 'ceaselessEdge',  'dazzlingGleam', 'fireLash',
			],
			orbital: true,
			id: [19, 70, 83, 101, 111, 404, 142, 144, 165, 173],
			attackType: ['aura', 'area', 'orbital', 'stream']
		}
	},
	metronome: {
		id: 'metronome',
		name: [
			'Metronome',
			'Metrónomo',
			'Métronome',
			'Metrônomo',
			'Plessimetro',
			'Metronom',
			'メトロノーム',
			'메트로놈',
			'節拍器',
			'Metronome'
		],
		tags: ['power'],
		sprite: './src/assets/images/items/metronome.png',
		price: 200000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`[RICOCHET]Ricochet[/RICOCHET] bounces deal 12.5% reduced damage per [RICOCHET]Ricochet[/RICOCHET] rather than 30%.`, // inglés
			`Los rebotes de [RICOCHET]Ricochet[/RICOCHET] infligen un 12.5% menos de daño por cada [RICOCHET]Ricochet[/RICOCHET] en lugar de un 30%.`, // español
			`Les rebonds de [RICOCHET]Ricochet[/RICOCHET] infligent 12.5 % de dégâts en moins par [RICOCHET]Ricochet[/RICOCHET] au lieu de 30 %.`, // francés
			`Os ricochetes de [RICOCHET]Ricochet[/RICOCHET] causam 12.5% menos de dano por cada [RICOCHET]Ricochet[/RICOCHET] em vez de 30%.`, // portugués
			`I rimbalzi di [RICOCHET]Ricochet[/RICOCHET] infliggono il 12.5% di danni in meno per ogni [RICOCHET]Ricochet[/RICOCHET] invece del 30%.`, // italiano
			`[RICOCHET]Ricochet[/RICOCHET]-Abpraller verursachen pro [RICOCHET]Ricochet[/RICOCHET] 12.5 % weniger Schaden statt 30 %.`, // alemán
			`[RICOCHET]リコシェ[/RICOCHET]による跳ね返りは、[RICOCHET]リコシェ[/RICOCHET]1回につきダメージが12.5%減少する（30%から変更）。`, // japonés
			`[RICOCHET]리코셰[/RICOCHET] 반사는 [RICOCHET]리코셰[/RICOCHET] 1회당 피해량이 30%가 아닌 12.5% 감소합니다.`, // coreano
			`[RICOCHET]弹射[/RICOCHET]每次弹射造成的伤害降低12.5%，而不是30%。`, // chino
			`Odbicia [RICOCHET]Ricochet[/RICOCHET] zadają o 12.5% mniej obrażeń za każde [RICOCHET]Ricochet[/RICOCHET] zamiast 30%.` // polaco
		],
		condition: {
			id: [63, 72, 2, 249, 250]
		},
		restriction: {
			id: [70, 173]
		}
	},
	strangeIdol: {
		id: 'strangeIdol',
		name: [
			'Strange Idol',
			'Ídolo Extraño',
			'Idole Étrange',
			'Ídolo Estranho',
			'Idolo Strano',
			'Skurriloskulptur',
			'ふしぎなオブジェ',
			'이상한장식품',
			'奇異神像',
			'Strange Idol'
		],
		tags: ['power'],
		sprite: './src/assets/images/items/strange-idol.png',
		price: 300000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Deals +50% damage, reduced by 1% for each [CURSE]cursed[/CURSE] [ENEMY]enemy[/ENEMY]. Can only be held by [CURSE]curse-based[/CURSE] [POKEMON]Pokémon[/POKEMON].`, // inglés
			`Inflige un 50% más de daño, reducido un 1% por cada [ENEMY]enemigo[/ENEMY] [CURSE]maldito[/CURSE]. Solo pueden llevarlo los [POKEMON]Pokémon[/POKEMON] basados en [CURSE]maldiciones[/CURSE].`, // español
			`Inflige 50 % de dégâts supplémentaires, réduits de 1 % pour chaque [ENEMY]ennemi[/ENEMY] [CURSE]maudit[/CURSE]. Ne peut être tenu que par les [POKEMON]Pokémon[/POKEMON] liés aux [CURSE]malédictions[/CURSE].`, // francés
			`Causa +50% de dano, reduzido em 1% por cada [ENEMY]inimigo[/ENEMY] [CURSE]amaldiçoado[/CURSE]. Só pode ser segurado por [POKEMON]Pokémon[/POKEMON] ligados a [CURSE]maldições[/CURSE].`, // portugués
			`Infligge il 50% di danni in più, ridotti dell'1% per ogni [ENEMY]nemico[/ENEMY] [CURSE]maledetto[/CURSE]. Può essere tenuto solo da [POKEMON]Pokémon[/POKEMON] basati sulle [CURSE]maledizioni[/CURSE].`, // italiano
			`Verursacht 50 % mehr Schaden, der sich für jeden [CURSE]verfluchten[/CURSE] [ENEMY]Gegner[/ENEMY] um 1 % verringert. Kann nur von [POKEMON]Pokémon[/POKEMON] getragen werden, die auf [CURSE]Flüchen[/CURSE] basieren.`, // alemán
			`与えるダメージが50%増加するが、[CURSE]呪い[/CURSE]状態の[ENEMY]敵[/ENEMY]1体につき1%減少する。[CURSE]呪いを基盤とする[/CURSE][POKEMON]ポケモン[/POKEMON]のみ持つことができる。`, // japonés
			`피해량이 50% 증가하지만, [CURSE]저주받은[/CURSE] [ENEMY]적[/ENEMY] 한 마리당 1%씩 감소한다. [CURSE]저주 기반[/CURSE] [POKEMON]포켓몬[/POKEMON]만 지닐 수 있다.`, // coreano
			`造成的伤害提高50%，但每有一只[CURSE]被诅咒[/CURSE]的[ENEMY]敌人[/ENEMY]，伤害就降低1%。只有以[CURSE]诅咒[/CURSE]为基础的[POKEMON]宝可梦[/POKEMON]才能携带。`, // chino
			`Zadaje o 50% więcej obrażeń, ale premia zmniejsza się o 1% za każdego [CURSE]przeklętego[/CURSE] [ENEMY]wroga[/ENEMY]. Może być trzymany tylko przez [POKEMON]Pokémony[/POKEMON] oparte na [CURSE]klątwach[/CURSE].` // polaco
		],
		condition: {
			ability: ['curse', 'willOWisp', 'curseDoubleShot', 'curseSplash'],
			id: [60]
		},
		restriction: {
			id: [70, 173]
		}
	},
	helixFossil: { 
		id: 'helixFossil',
		name: [
		    "Helix Fossil",
		    "Fósil Helix",
		    "Fossile Nautile",
		    "Fóssil Hélix",
		    "Fossile Helix",
		    "Helixfossil",
		    "かいのカセキ",
		    "조개화석",
		    "螺旋化石",
			"Helix Fossil"
		],
		tags: ['range'],
		sprite: './src/assets/images/items/helix.png',
		price: 250000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases [RANGE]range[/RANGE] by 10 for each [POKEMON]Fossil Pokémon[/POKEMON] on the [TEAM]team[/TEAM]. Contains DNA from [POKEMON]Omastar[/POKEMON].`, // inglés
			`Aumenta el [RANGE]alcance[/RANGE] en 10 por cada [POKEMON]Pokémon Fósil[/POKEMON] del [TEAM]equipo[/TEAM]. Contiene ADN de [POKEMON]Omastar[/POKEMON].`, // español
			`Augmente la [RANGE]portée[/RANGE] de 10 pour chaque [POKEMON]Pokémon Fossile[/POKEMON] dans l'[TEAM]équipe[/TEAM]. Contient de l'ADN d'[POKEMON]Amonistar[/POKEMON].`, // francés
			`Aumenta o [RANGE]alcance[/RANGE] em 10 por cada [POKEMON]Pokémon Fóssil[/POKEMON] da [TEAM]equipe[/TEAM]. Contém ADN do [POKEMON]Omastar[/POKEMON].`, // portugués
			`Aumenta la [RANGE]portata[/RANGE] di 10 per ogni [POKEMON]Pokémon Fossile[/POKEMON] nella [TEAM]squadra[/TEAM]. Contiene il DNA di [POKEMON]Omastar[/POKEMON].`, // italiano
			`Erhöht die [RANGE]Reichweite[/RANGE] um 10 für jedes [POKEMON]Fossil-Pokémon[/POKEMON] im [TEAM]Team[/TEAM]. Enthält DNA von [POKEMON]Amoroso[/POKEMON].`, // alemán
			`[TEAM]チーム[/TEAM]の[POKEMON]化石ポケモン[/POKEMON]1匹につき、[RANGE]射程[/RANGE]が10増加する。[POKEMON]オムスター[/POKEMON]のDNAを含む。`, // japonés
			`[TEAM]팀[/TEAM]에 있는 [POKEMON]화석 포켓몬[/POKEMON] 한 마리당 [RANGE]사거리[/RANGE]가 10 증가한다. [POKEMON]암스타[/POKEMON]의 DNA가 들어 있다.`, // coreano
			`[TEAM]队伍[/TEAM]中每有一只[POKEMON]化石宝可梦[/POKEMON]，[RANGE]射程[/RANGE]就增加10。含有[POKEMON]多刺菊石兽[/POKEMON]的DNA。`, // chino
			`Zwiększa [RANGE]zasięg[/RANGE] o 10 za każdego [POKEMON]Pokémona Skamielinę[/POKEMON] w [TEAM]drużynie[/TEAM]. Zawiera DNA [POKEMON]Omastara[/POKEMON].` // polaco
		],
		condition: {
			id: [58]
		}
	},
	spindaCocktail: { 
		id: 'spindaCocktail',
		name: [
			'Spinda Cocktail',
			'Cóctel de Spinda',
			'Cocktail Spinda',
			'Coquetel de Spinda',
			'Cocktail di Spinda',
			'Pandir-Cocktail',
			'パッチールカクテル',
			'얼루기칵테일',
			'晃晃斑雞尾酒',
			'Spinda Cocktail'
		],
		tags: ['range'],
		sprite: './src/assets/images/items/spinda-cocktail.png',
		price: 100000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases [RANGE]range[/RANGE] by 25% but [ADMIN]targets random enemies[/ADMIN].`, // inglés
			`Aumenta el [RANGE]alcance[/RANGE] un 25%, pero [ADMIN]selecciona enemigos al azar[/ADMIN].`, // español
			`Augmente la [RANGE]portée[/RANGE] de 25 %, mais [ADMIN]cible des ennemis au hasard[/ADMIN].`, // francés
			`Aumenta o [RANGE]alcance[/RANGE] em 25%, mas [ADMIN]tem como alvo inimigos aleatórios[/ADMIN].`, // portugués
			`Aumenta la [RANGE]portata[/RANGE] del 25%, ma [ADMIN]prende di mira nemici casuali[/ADMIN].`, // italiano
			`Erhöht die [RANGE]Reichweite[/RANGE] um 25 %, aber [ADMIN]visiert zufällige Gegner an[/ADMIN].`, // alemán
			`[RANGE]射程[/RANGE]が25%増加するが、[ADMIN]ランダムな敵を狙う[/ADMIN]。`, // japonés
			`[RANGE]사거리[/RANGE]가 25% 증가하지만 [ADMIN]무작위 적을 대상으로 한다[/ADMIN].`, // coreano
			`[RANGE]射程[/RANGE]增加25%，但会[ADMIN]随机选择敌人作为目标[/ADMIN]。`, // chino
			`Zwiększa [RANGE]zasięg[/RANGE] o 25%, ale [ADMIN]obiera za cel losowych wrogów[/ADMIN].` // polaco
		],
		restriction: {
			ability: [
				'doubleShot', 'tripleShot', 'quadraShot', 'octaShot', 'curseDoubleShot', 'seedFlare', 'spicySpray',
				'poisonDoubleShot', 'quadraShotSand', 'doubleShotSand', 'burnDoubleShot', 'bitterBlade', 'emptyLight',
				'boomburst', 'liquidVoice', 'drumBeating', 'originPulse', 'charmedCharm', 'icyWind', 'whiteRay', 'precipiceBlades'
			],
			attackType: ['area', 'bombardment'],
			orbital: true,
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173],
			attackType: 'aura'
		}
	},
	dragonFang: { 
		id: 'dragonFang',
		name: [
			"Dragon Fang",
			"Colmillo Dragón",
			"Croc Dragon",
			"Presa de Dragão",
			"Zanna del Drago",
			"Drachenzahn",
			"りゅうのキバ",
			"용의이빨",
			"龍之牙",
			"Dragon Fang"
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/dragon-fang.png',
		price: 300000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases the [PROJECTILE]projectile[/PROJECTILE] impact area by 200%. It's the baby tooth of [POKEMON]Druddigon[/POKEMON].`, // inglés
			`Aumenta el área de impacto del [PROJECTILE]proyectil[/PROJECTILE] un 200%. Es el diente de leche de [POKEMON]Druddigon[/POKEMON].`, // español
			`Augmente de 200 % la zone d'impact du [PROJECTILE]projectile[/PROJECTILE]. C'est la dent de lait de [POKEMON]Drakkarmin[/POKEMON].`, // francés
			`Aumenta a área de impacto do [PROJECTILE]projétil[/PROJECTILE] em 200%. É o dente de leite do [POKEMON]Druddigon[/POKEMON].`, // portugués
			`Aumenta del 200% l'area d'impatto del [PROJECTILE]proiettile[/PROJECTILE]. È il dente da latte di [POKEMON]Druddigon[/POKEMON].`, // italiano
			`Vergrößert den Einschlagsbereich des [PROJECTILE]Projektils[/PROJECTILE] um 200 %. Es ist der Milchzahn von [POKEMON]Sharfax[/POKEMON].`, // alemán
			`[PROJECTILE]弾[/PROJECTILE]の着弾範囲が200%拡大する。[POKEMON]クリムガン[/POKEMON]の乳歯。`, // japonés
			`[PROJECTILE]투사체[/PROJECTILE]의 충돌 범위가 200% 증가한다. [POKEMON]크리만[/POKEMON]의 젖니이다.`, // coreano
			`[PROJECTILE]投射物[/PROJECTILE]的命中范围扩大200%。这是[POKEMON]赤面龙[/POKEMON]的乳牙。`, // chino
			`Zwiększa obszar trafienia [PROJECTILE]pocisku[/PROJECTILE] o 200%. To mleczny ząb [POKEMON]Druddigona[/POKEMON].` // polaco
		],
		condition: {
			id: [17]
		}
	},
	ejectButton: { 
		id: 'ejectButton',
		name: [
			"Eject Button",
			"Botón de Expulsión",
			"Bouton Fuite",
			"Botão de Ejeção",
			"Pulsante di Espulsione",
			"Fluchtknopf",
			"イジェクトボタン",
			"탈출버튼",
			"逃脫按鈕",
			"Eject Button",
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/eject-button.png',
		price: 1,
		tier: 'common',
		isEquipable: true,
		isRetirable: false,
		description: [
			`An [ITEM]item[/ITEM] for the most restless [POKEMON]Abra[/POKEMON]. Halves the [ABILITY]teleportation[/ABILITY] cooldown.`, // inglés
			`Un [ITEM]objeto[/ITEM] para el [POKEMON]Abra[/POKEMON] más inquieto. Reduce a la mitad el tiempo de recarga del [ABILITY]teletransporte[/ABILITY].`, // español
			`Un [ITEM]objet[/ITEM] pour le [POKEMON]Abra[/POKEMON] le plus agité. Réduit de moitié le temps de recharge de la [ABILITY]téléportation[/ABILITY].`, // francés
			`Um [ITEM]item[/ITEM] para o [POKEMON]Abra[/POKEMON] mais inquieto. Reduz pela metade o tempo de recarga do [ABILITY]teletransporte[/ABILITY].`, // portugués
			`Uno [ITEM]strumento[/ITEM] per l'[POKEMON]Abra[/POKEMON] più irrequieto. Dimezza il tempo di ricarica della [ABILITY]teletrasporto[/ABILITY].`, // italiano
			`Ein [ITEM]Item[/ITEM] für das unruhigste [POKEMON]Abra[/POKEMON]. Halbiert die Abklingzeit der [ABILITY]Teleportation[/ABILITY].`, // alemán
			`落ち着きのない[POKEMON]ケーシィ[/POKEMON]にぴったりの[ITEM]アイテム[/ITEM]。[ABILITY]テレポート[/ABILITY]のクールダウンを半分にする。`, // japonés
			`가장 부산한 [POKEMON]캐이시[/POKEMON]를 위한 [ITEM]아이템[/ITEM]. [ABILITY]순간이동[/ABILITY]의 재사용 대기시간을 절반으로 줄인다.`, // coreano
			`专为最坐不住的[POKEMON]凯西[/POKEMON]准备的[ITEM]道具[/ITEM]。使[ABILITY]瞬间移动[/ABILITY]的冷却时间减半。`, // chino
			`[ITEM]Przedmiot[/ITEM] dla najbardziej niespokojnego [POKEMON]Abry[/POKEMON]. Skraca czas odnowienia [ABILITY]teleportacji[/ABILITY] o połowę.` // polaco
		],
		condition: {
			id: [68]
		}
	},
	nightmareCloth: {
		id: 'nightmareCloth',
		name: [
			"Nightmare Cloth",
			"Tela Pesadilla",
			"Tissu Cauchemar",
			"Tecido Pesadelo",
			"Tessuto Incubo",
			"Alptraumstoff",
			"ナイトメアクロス",
			"악몽의 천",
			"惡夢之布",
			'Nightmare Cloth'
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/nightmare-cloth.png',
		price: 500000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Allows [POKEMON]Gardevoir[/POKEMON] to spread [NIGHTMARE]nightmares[/NIGHTMARE].`, // inglés
			`Permite que [POKEMON]Gardevoir[/POKEMON] propague [NIGHTMARE]pesadillas[/NIGHTMARE].`, // español
			`Permet à [POKEMON]Gardevoir[/POKEMON] de répandre des [NIGHTMARE]cauchemars[/NIGHTMARE].`, // francés
			`Permite que [POKEMON]Gardevoir[/POKEMON] espalhe [NIGHTMARE]pesadelos[/NIGHTMARE].`, // portugués
			`Permette a [POKEMON]Gardevoir[/POKEMON] di diffondere [NIGHTMARE]incubi[/NIGHTMARE].`, // italiano
			`Ermöglicht es [POKEMON]Guardevoir[/POKEMON], [NIGHTMARE]Albträume[/NIGHTMARE] zu verbreiten.`, // alemán
			`[POKEMON]サーナイト[/POKEMON]が[NIGHTMARE]悪夢[/NIGHTMARE]を広められるようになる。`, // japonés
			`[POKEMON]가디안[/POKEMON]이 [NIGHTMARE]악몽[/NIGHTMARE]을 퍼뜨릴 수 있게 된다.`, // coreano
			`使[POKEMON]沙奈朵[/POKEMON]能够传播[NIGHTMARE]噩梦[/NIGHTMARE]。`, // chino
			`Pozwala [POKEMON]Gardevoir[/POKEMON] roznosić [NIGHTMARE]koszmary[/NIGHTMARE].` // polaco
		],
		condition: {
			id: [55]
		},
		restriction: {
			ability: ['psychoCutMega', 'psychoCut']
		}
	},
	poisonBarb: { 
		id: 'poisonBarb',
		name: [
			"Poison Barb",
			"Púa venenosa",
			"Pic Venin",
			"Espinho venenoso",
			"Aculeo velenoso",
			"Giftstich",
			"どくのトゲ",
			"독바늘",
			"毒刺",
			"Poison Barb"
		],
		tags: ['utility', 'speed'],
		sprite: './src/assets/images/items/poison-barb.png',
		price: 10000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`The holder reduces [SPEED]recharge time[/SPEED] by 20% and has a 50% chance to apply an additional [POISON]poison[/POISON] stack with each attack.`, // inglés
			`El portador reduce el [SPEED]tiempo de recarga[/SPEED] un 20% y tiene un 50% de probabilidad de aplicar una acumulación adicional de [POISON]veneno[/POISON] con cada ataque.`, // español
			`Le porteur réduit le [SPEED]temps de recharge[/SPEED] de 20 % et a 50 % de chances d'appliquer une couche supplémentaire de [POISON]poison[/POISON] à chaque attaque.`, // francés
			`O portador reduz o [SPEED]tempo de recarga[/SPEED] em 20% e tem 50% de chance de aplicar uma acumulação adicional de [POISON]veneno[/POISON] a cada ataque.`, // portugués
			`Il portatore riduce il [SPEED]tempo di ricarica[/SPEED] del 20% e ha il 50% di probabilità di applicare un accumulo aggiuntivo di [POISON]veleno[/POISON] a ogni attacco.`, // italiano
			`Der Träger verkürzt die [SPEED]Aufladezeit[/SPEED] um 20 % und hat bei jedem Angriff eine Chance von 50 %, eine zusätzliche [POISON]Gift[/POISON]-Stufe anzuwenden.`, // alemán
			`持ち主の[SPEED]再チャージ時間[/SPEED]が20%短縮され、攻撃するたびに50%の確率で[POISON]どく[/POISON]の蓄積を1段階追加する。`, // japonés
			`소지자의 [SPEED]재충전 시간[/SPEED]이 20% 감소하고, 공격할 때마다 50% 확률로 [POISON]독[/POISON] 중첩을 추가로 1회 부여한다.`, // coreano
			`持有者的[SPEED]充能时间[/SPEED]缩短20%，每次攻击还有50%的概率额外施加一层[POISON]中毒[/POISON]效果。`, // chino
			`Posiadacz skraca [SPEED]czas odnowienia[/SPEED] o 20% i ma 50% szans na nałożenie dodatkowego ładunku [POISON]trucizny[/POISON] przy każdym ataku.` // polaco
		],
		condition: {
			ability: ['poison', 'toxic', 'poisonDoubleShot', 'direClaw', 'twineedle', 'sludgeBomb', 'twineedleMega'],
			id: [40]
		},
		restriction: {
			id: [70, 173]
		}
	},
	silphScope: {
		id: 'silphScope',
		name: [
			'Silph Scope',
			'Visor Silph',
			'Scope Sylphe',
			'Silph Scope',
			'Scope Silph',
			'Silph Scope',
			'シルフスコープ',
			'실프스코프',
			'西爾佛斯可普',
			'Silph Scope',
		],
		tags: ['utility', 'range', 'power', 'sprite'],
		sprite: './src/assets/images/items/silph-scope.png',
		price: 200000,
		tier: 'common',
		isEquipable: true,
		isRetirable: false,
		description: [
			`Reveals [ENEMY]invisible enemies[/ENEMY]. If it is already capable of revealing them on its own, it gains +15 [RANGE]range[/RANGE], -25% [SPEED]recharge time[/SPEED], and +175 [POWER]power[/POWER].`, // inglés
			`Revela [ENEMY]enemigos invisibles[/ENEMY]. Si ya es capaz de revelarlos por sí solo, obtiene +15 de [RANGE]alcance[/RANGE], -25% de [SPEED]tiempo de recarga[/SPEED] y +175 de [POWER]poder[/POWER].`, // español
			`Révèle les [ENEMY]ennemis invisibles[/ENEMY]. S'il est déjà capable de les révéler par lui-même, il gagne +15 en [RANGE]portée[/RANGE], -25 % de [SPEED]temps de recharge[/SPEED] et +175 en [POWER]puissance[/POWER].`, // francés
			`Revela [ENEMY]inimigos invisíveis[/ENEMY]. Se já for capaz de revelá-los por conta própria, ganha +15 de [RANGE]alcance[/RANGE], -25% de [SPEED]tempo de recarga[/SPEED] e +175 de [POWER]poder[/POWER].`, // portugués
			`Rivela i [ENEMY]nemici invisibili[/ENEMY]. Se è già in grado di rivelarli autonomamente, ottiene +15 di [RANGE]portata[/RANGE], -25% di [SPEED]tempo di ricarica[/SPEED] e +175 di [POWER]potere[/POWER].`, // italiano
			`Enthüllt [ENEMY]unsichtbare Gegner[/ENEMY]. Wenn es sie bereits selbstständig enthüllen kann, erhält es +15 [RANGE]Reichweite[/RANGE], -25 % [SPEED]Aufladezeit[/SPEED] und +175 [POWER]Kraft[/POWER].`, // alemán
			`[ENEMY]見えない敵[/ENEMY]を見えるようにする。すでに自力で見えるようにできる場合、[RANGE]射程[/RANGE]+15、[SPEED]再使用時間[/SPEED]-25%、[POWER]パワー[/POWER]+175を得る。`, // japonés
			`[ENEMY]투명한 적[/ENEMY]을 드러냅니다. 이미 스스로 이들을 드러낼 수 있다면 [RANGE]사거리[/RANGE]+15, [SPEED]재사용 대기시간[/SPEED]-25%, [POWER]위력[/POWER]+175를 얻습니다.`, // coreano
			`使[ENEMY]隐形敌人[/ENEMY]显形。如果本身已经能够显形，则获得+[RANGE]射程[/RANGE]15、-[SPEED]冷却时间[/SPEED]25%和+[POWER]攻击力[/POWER]175。`, // chino
			`Ujawnia [ENEMY]niewidzialnych wrogów[/ENEMY]. Jeśli już potrafi ich ujawniać samodzielnie, zyskuje +15 do [RANGE]zasięgu[/RANGE], -25% [SPEED]czasu odnowienia[/SPEED] oraz +175 do [POWER]siły[/POWER].` // polaco
		],
		restriction: {
			ability: [
				//'doubleShot', 'tripleShot', 'quadraShot', 'octaShot', 'curseDoubleShot', 'poisonDoubleShot', 'quadraShotSand', 'doubleShotSand', 'burnDoubleShot',
				'solarBeam', 'bitterBlade', 'hydroCannon', 'zapCannon', 'hyperBeam', 'meteorBeam', 'boomburst', 'secretSword', 'liquidVoice', 'drumBeating', 'anchorShot',
				'originPulse', 'steelBeam', 'steamEruption', 'soulHeartReactor', 'charmedCharm', 'ceaselessEdge', 'psybeam', 'icyWind', 'emptyLight',
				'boomburst', 'liquidVoice', 'drumBeating', 'originPulse', 'emptyLight', 
			],
			attackType: ['area', 'bombardment', 'aura'],
			orbital: true,
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173],
		}
	},
	quickClaw: {
		id: 'quickClaw',
		name: [
			'Quick Claw',
			'Garra Rápida',
			'Vive Griffe',
			'Garra Rápida',
			'Artiglio Rapido',
			'Flinkklaue',
			'クイッククロウ',
			'선제공격손톱',
			'先制之爪',
			'Quick Claw',
		],
		tags: ['speed'],
		sprite: './src/assets/images/items/quick-claw.png',
		price: 75000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Reduces [POWER]power[/POWER] by 50% and [SPEED]recharge time[/SPEED] by 50%. The focus automatically targets the [ENEMY]fastest enemy[/ENEMY].`, // inglés
			`Reduce el [POWER]poder[/POWER] un 50% y el [SPEED]tiempo de recarga[/SPEED] un 50%. El foco apunta automáticamente al [ENEMY]enemigo más rápido[/ENEMY].`, // español
			`Réduit la [POWER]puissance[/POWER] de 50 % et le [SPEED]temps de recharge[/SPEED] de 50 %. Le focalisateur cible automatiquement l'[ENEMY]ennemi le plus rapide[/ENEMY].`, // francés
			`Reduz o [POWER]poder[/POWER] em 50% e o [SPEED]tempo de recarga[/SPEED] em 50%. O foco aponta automaticamente para o [ENEMY]inimigo mais rápido[/ENEMY].`, // portugués
			`Riduce la [POWER]potenza[/POWER] del 50% e il [SPEED]tempo di ricarica[/SPEED] del 50%. Il focus prende automaticamente di mira il [ENEMY]nemico più veloce[/ENEMY].`, // italiano
			`Verringert die [POWER]Stärke[/POWER] um 50 % und die [SPEED]Aufladezeit[/SPEED] um 50 %. Der Fokus visiert automatisch den [ENEMY]schnellsten Gegner[/ENEMY] an.`, // alemán
			`[POWER]威力[/POWER]が50%減少し、[SPEED]再チャージ時間[/SPEED]が50%短縮される。フォーカスは自動的に[ENEMY]最も速い敵[/ENEMY]を狙う。`, // japonés
			`[POWER]위력[/POWER]이 50% 감소하고 [SPEED]재충전 시간[/SPEED]이 50% 단축된다. 포커스는 자동으로 [ENEMY]가장 빠른 적[/ENEMY]을 대상으로 한다.`, // coreano
			`[POWER]威力[/POWER]降低50%，[SPEED]充能时间[/SPEED]缩短50%。聚焦器会自动瞄准[ENEMY]速度最快的敌人[/ENEMY]。`, // chino
			`Zmniejsza [POWER]moc[/POWER] o 50% i skraca [SPEED]czas odnowienia[/SPEED] o 50%. Fokus automatycznie namierza [ENEMY]najszybszego wroga[/ENEMY].` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173],
			orbital: true,
			attackType: 'aura'
		},
	},
	laggingTail: {
		id: 'laggingTail',
		name: [
			'Lagging Tail',   // Inglés
	        'Cola Plúmbea',   // Español
	        'Ralentiqueue',    // Francés
	        'Cauda Lenta',    // Portugués
	        'Rallentocoda',    // Italiano
	        'Schwerschweif',      // Alemán
	        'こうこうのしっぽ',  // Japonés (Kōkō no Shippo)
	        '느림보꼬리',      // Coreano (Neurimbo Kkori)
	        '后攻之尾',        // Chino (Hòugōng zhī Wěi)
	        'Lagging Tail'   // Polaco
		],
		tags: ['power'],
		sprite: './src/assets/images/items/lagging-tail.png',
		price: 200000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases [POWER]power[/POWER] by 50% and [SPEED]recharge time[/SPEED] by 50%.`, // inglés
			`Aumenta el [POWER]poder[/POWER] un 50% y el [SPEED]tiempo de recarga[/SPEED] un 50%.`, // español
			`Augmente la [POWER]puissance[/POWER] de 50 % et le [SPEED]temps de recharge[/SPEED] de 50 %.`, // francés
			`Aumenta o [POWER]poder[/POWER] em 50% e o [SPEED]tempo de recarga[/SPEED] em 50%.`, // portugués
			`Aumenta la [POWER]potenza[/POWER] del 50% e il [SPEED]tempo di ricarica[/SPEED] del 50%.`, // italiano
			`Erhöht die [POWER]Stärke[/POWER] um 50 % und die [SPEED]Aufladezeit[/SPEED] um 50 %.`, // alemán
			`[POWER]威力[/POWER]が50%上昇し、[SPEED]再チャージ時間[/SPEED]が50%増加する。`, // japonés
			`[POWER]위력[/POWER]이 50% 증가하고 [SPEED]재충전 시간[/SPEED]이 50% 증가한다.`, // coreano
			`[POWER]威力[/POWER]提高50%，[SPEED]充能时间[/SPEED]增加50%。`, // chino
			`Zwiększa [POWER]moc[/POWER] o 50% i wydłuża [SPEED]czas odnowienia[/SPEED] o 50%.` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173],
			orbital: true,
			attackType: 'aura'
		},
	},
	revelationAroma: { 
		id: 'revelationAroma',
		name: [
			"Revelation Aroma",
			"Aroma de la Revelación",
			"Arôme Révélateur",
			"Aroma da Revelação",
			"Aroma della Rivelazione",
			"Offenbarungsaroma",
			"リベレーションアロマ",
			"향기로운 꽃",
			"啟示之香",
			"Revelation Aroma",
		],
		tags: ['range'],
		sprite: './src/assets/images/items/flower-sweet.png',
		price: 100000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases [RANGE]range[/RANGE] by 25. Can only be held by [POKEMON]Sunflora[/POKEMON] and [POKEMON]Comfey[/POKEMON].`, // inglés
			`Aumenta el [RANGE]alcance[/RANGE] en 25. Solo pueden llevarlo [POKEMON]Sunflora[/POKEMON] y [POKEMON]Comfey[/POKEMON].`, // español
			`Augmente la [RANGE]portée[/RANGE] de 25. Ne peut être tenu que par [POKEMON]Héliatronc[/POKEMON] et [POKEMON]Guérilande[/POKEMON].`, // francés
			`Aumenta o [RANGE]alcance[/RANGE] em 25. Só pode ser segurado por [POKEMON]Sunflora[/POKEMON] e [POKEMON]Comfey[/POKEMON].`, // portugués
			`Aumenta la [RANGE]portata[/RANGE] di 25. Può essere tenuto solo da [POKEMON]Sunflora[/POKEMON] e [POKEMON]Comfey[/POKEMON].`, // italiano
			`Erhöht die [RANGE]Reichweite[/RANGE] um 25. Kann nur von [POKEMON]Sonnflora[/POKEMON] und [POKEMON]Curelei[/POKEMON] getragen werden.`, // alemán
			`[RANGE]射程[/RANGE]が25増加する。[POKEMON]キマワリ[/POKEMON]と[POKEMON]キュワワー[/POKEMON]のみ持つことができる。`, // japonés
			`[RANGE]사거리[/RANGE]가 25 증가한다. [POKEMON]해루미[/POKEMON]와 [POKEMON]큐아링[/POKEMON]만 지닐 수 있다.`, // coreano
			`[RANGE]射程[/RANGE]增加25。只有[POKEMON]向日花怪[/POKEMON]和[POKEMON]花疗环环[/POKEMON]可以携带。`, // chino
			`Zwiększa [RANGE]zasięg[/RANGE] o 25. Może być trzymany tylko przez [POKEMON]Sunflorę[/POKEMON] i [POKEMON]Comfeya[/POKEMON].` // polaco
		],
		condition: {
			id: [19, 83]
		}
	},
	falmeOrb: {
		id: 'falmeOrb',
		name: [
			'Flame Orb',
			'Llamasfera',
			'Orbe Flamme',
			'Orbe de Chama',
			'Fiammosfera',
			'Heiß-Orb',
			'かえんだま',
			'화염구슬',
			'火焰寶珠',
			'Flame Orb',
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/flame-orb.png',
		price: 120000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases damage dealt by [BURN]burn[/BURN] by 50%.`, // inglés
			`Aumenta un 50% el daño causado por [BURN]quemadura[/BURN].`, // español
			`Augmente de 50 % les dégâts infligés par la [BURN]brûlure[/BURN].`, // francés
			`Aumenta em 50% o dano causado pela [BURN]queimadura[/BURN].`, // portugués
			`Aumenta del 50% i danni inflitti dalla [BURN]scottatura[/BURN].`, // italiano
			`Erhöht den durch [BURN]Verbrennung[/BURN] verursachten Schaden um 50 %.`, // alemán
			`[BURN]やけど[/BURN]によるダメージが50%増加する。`, // japonés
			`[BURN]화상[/BURN]으로 인한 피해가 50% 증가한다.`, // coreano
			`[BURN]灼伤[/BURN]造成的伤害提高50%。`, // chino
			`Zwiększa obrażenia zadawane przez [BURN]podpalenie[/BURN] o 50%.` // polaco
		],
		condition: { 
			ability: [
				'burn', 'flamethrower', 'burnSplash', 'magmaStorm', 'burnDoubleShot', 'flameWheel', 'drought', 'willOWisp', 'burnNerf', 'lavaPlume', 'fireLash', 
				'triAttack', 'flameBody', 'precipiceBlades', 'steamEruption', 'sacredFire', 'volcanicKaboom', 'spicySpray', 'burnRicochet',
			]
		},
		restriction: {
			id: [70, 142, 173]
		}
	},
	badgeOfHonor: { 
		id: 'badgeOfHonor',
		name: [
			"Badge Of Honor",
			"Placa de Honor",
			"Badge Honorifique",
			"Distintivo de Honra",
			"Distintivo d'Onore",
			"Abzeichen der Ehre",
			"名誉のバッジ",
			"명예의 배지",
			"榮譽徽章",
			"Badge Of Honor"
		],
		tags: ['power'],
		sprite: './src/assets/images/items/honor-of-kalos.png',
		price: 250000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases [POWER]power[/POWER] by 1% for every 30 [STAR]stars[/STAR] acquired (max 30%).`, // inglés
			`Aumenta el [POWER]poder[/POWER] un 1% por cada 30 [STAR]estrellas[/STAR] obtenidas (máximo 30%).`, // español
			`Augmente la [POWER]puissance[/POWER] de 1 % tous les 30 [STAR]étoiles[/STAR] obtenues (maximum 30 %).`, // francés
			`Aumenta o [POWER]poder[/POWER] em 1% a cada 30 [STAR]estrelas[/STAR] obtidas (máximo de 30%).`, // portugués
			`Aumenta la [POWER]potenza[/POWER] dell'1% ogni 30 [STAR]stelle[/STAR] ottenute (massimo 30%).`, // italiano
			`Erhöht die [POWER]Stärke[/POWER] um 1 % pro 30 erhaltene [STAR]Sterne[/STAR] (maximal 30 %).`, // alemán
			`獲得した[STAR]スター[/STAR]30個ごとに[POWER]威力[/POWER]が1%増加する（最大30%）。`, // japonés
			`획득한 [STAR]별[/STAR] 30개마다 [POWER]위력[/POWER]이 1% 증가한다(최대 30%).`, // coreano
			`每获得30颗[STAR]星星[/STAR]，[POWER]威力[/POWER]就提高1%（最高30%）。`, // chino
			`Zwiększa [POWER]moc[/POWER] o 1% za każde zdobyte 30 [STAR]gwiazdek[/STAR] (maksymalnie 30%).` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173],
			attackType: 'aura'
		},
	},
	toxicOrb: { 
		id: 'toxicOrb',
		name: [
			'Toxic Orb',
			'Toxisfera',
			'Orbe Toxique',
			'Orbe Tóxico',
			'Tossicsfera',
			'Toxik-Orb',
			'どくどくだま',
			'맹독구슬',
			'劇毒寶珠',
			'Toxic Orb'
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/toxic-orb.png',
		price: 120000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Adds an extra [POISON]poison[/POISON] stack with each attack.`, // inglés
			`Añade una acumulación adicional de [POISON]veneno[/POISON] con cada ataque.`, // español
			`Ajoute un cumul supplémentaire de [POISON]poison[/POISON] à chaque attaque.`, // francés
			`Adiciona uma acumulação extra de [POISON]veneno[/POISON] a cada ataque.`, // portugués
			`Aggiunge un accumulo extra di [POISON]veleno[/POISON] a ogni attacco.`, // italiano
			`Verursacht mit jedem Angriff eine zusätzliche [POISON]Gift[/POISON]-Stufe.`, // alemán
			`攻撃するたびに[POISON]どく[/POISON]の蓄積を1段階追加する。`, // japonés
			`공격할 때마다 [POISON]독[/POISON] 중첩을 1회 추가한다.`, // coreano
			`每次攻击额外叠加一层[POISON]中毒[/POISON]效果。`, // chino
			`Przy każdym ataku nakłada dodatkowy ładunek [POISON]trucizny[/POISON].` // polaco
		],
		condition: {
			ability: ['poison', 'toxic', 'poisonDoubleShot', 'direClaw', 'twineedle', 'sludgeBomb', 'twineedleMega']
		},
		restriction: {
			id: [70]
		}
	},	
	shinyCharm: {
		id: 'shinyCharm',
		name: ["Shiny Charm","Amuleto iris","Charme Chroma","Amuleto Brilhante","Cromamuleto","Schillerpin","ひかるおまもり","빛나는부적","闪耀护符", "Shiny Charm"],
		tags: ['utility'],
		sprite: './src/assets/images/items/shiny-charm.png',
		price: 1000000000,
		tier: 'luxury',
		isEquipable: true,
		isRetirable: true,
		description: [
		    "Triples the chances of turning a Pokémon Shiny. Must be held by Smeargle.",
		    "Triplica las probabilidades de convertir un Pokémon en Shiny. Debe llevarlo Smeargle.",
		    "Triple les chances de rendre un Pokémon chromatique. Doit être tenu par Queulorior.",
		    "Triplica as chances de tornar um Pokémon Brilhante. Deve ser segurado por Smeargle.",
		    "Triplica le probabilità di rendere un Pokémon Cromatico. Deve essere tenuto da Smeargle.",
		    "Verdreifacht die Chance, ein Pokémon schillernd zu machen. Kann nur von Farbeagle getragen werden.",
		    "ポケモンが色違いになる確率が3倍になります。ムーランドが持っている必要があります。",
		    "포켓몬이 색이 다른 이로치가 될 확률이 3배가 됩니다. 루브도가 장착해야 합니다.",
		    "将宝可梦变为闪光的概率提高三倍。必须由奇鲁莉安携带。",
			"Potraja szansę na przemianę Pokémona w Shiny. Musi go nosić Smeargle.",
		],
		condition: {
			id: [84]
		}
	},
	bicycle: {
		id: 'bicycle',
		name: [
			"Segmental's Bicycle",
			"Bicicleta de Segmental",
			"Vélo de Segmental",
			"Bicicleta do Segmental",
			"Bicicletta di Segmental",
			"Segmentals Fahrrad",
			"自転車", 
			"자전거", 
			'的自行車',
			"Segmental's Bicycle",
		],
		tags: [],
		sprite: './src/assets/images/items/bicycle.png',
		price: 1000000000,
		tier: 'admin',
		isEquipable: true,
		isRetirable: true,
		description: [
			`[ADMIN]Ding Ding! Allows you to access the Wave Manager.[/ADMIN]`, // inglés
			`[ADMIN]¡Ding Ding! Permite acceder al Gestor de Oleadas.[/ADMIN]`, // español
			`[ADMIN]Ding Ding ! Permet d'accéder au Gestionnaire de Vagues.[/ADMIN]`, // francés
			`[ADMIN]Ding Ding! Permite acessar o Gerenciador de Ondas.[/ADMIN]`, // portugués
			`[ADMIN]Ding Ding! Permette di accedere al Gestore delle Ondate.[/ADMIN]`, // italiano
			`[ADMIN]Ding Ding! Ermöglicht den Zugriff auf den Wellen-Manager.[/ADMIN]`, // alemán
			`[ADMIN]ディンディン！ウェーブマネージャーにアクセスできる。[/ADMIN]`, // japonés
			`[ADMIN]딩딩! 웨이브 관리기에 접속할 수 있습니다.[/ADMIN]`, // coreano
			`[ADMIN]叮叮！可以访问波次管理器。[/ADMIN]`, // chino
			`[ADMIN]Ding Ding! Umożliwia dostęp do Menedżera Fal.[/ADMIN]` // polaco
		],
		condition: {
			attackType: 'single'
		},
		restriction: {
			id: [19, 70, 83, 101, 404, 142, 144, 173, 178, 82],
			ability: [
				'solarBeam', 'hydroCannon', 'zapCannon', 'hyperBeam', 'meteorBeam', 'anchorShot', 'iceBeam', 'steelBeam', 'steamEruption', 'machBolt',
				'soulHeartReactor', 'psybeam', 'icyWind', 'psychoCut', 'psychoCutMega', 'uTurn'

			],
			attackType: 'aura'
		}
	},
	condensedBlizzard: {
		id: 'condensedBlizzard',
		name: [
		  	"Condensed Blizzard",
		  	"Ventisca Condensada",
		  	"Blizzard Condensée",
		  	"Nevasca Condensada",
		  	"Bufera di Neve Concentrata",
		  	"Kondensierter Blizzard",
		  	"凝縮ブリザード",
		  	"응축된 블리자드",
		  	"凝缩暴风雪",
		  	"Skondensowana Zamieć"
		],
		tags: ['utility', 'range'],
		sprite: './src/assets/images/items/casteliacone.png',
		price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
		description: [
			`If held by [POKEMON]Cryogonal[/POKEMON], turns the [SHAPE]shape[/SHAPE] into a [SHAPE]circle[/SHAPE] and reduces its [RANGE]range[/RANGE] by 50%.`, // inglés
			`Si lo lleva [POKEMON]Cryogonal[/POKEMON], convierte la [SHAPE]forma[/SHAPE] en un [SHAPE]círculo[/SHAPE] y reduce su [RANGE]alcance[/RANGE] un 50%.`, // español
			`Si [POKEMON]Cryogonal[/POKEMON] le tient, transforme la [SHAPE]forme[/SHAPE] en un [SHAPE]cercle[/SHAPE] et réduit sa [RANGE]portée[/RANGE] de 50 %.`, // francés
			`Se for segurado por [POKEMON]Cryogonal[/POKEMON], transforma a [SHAPE]forma[/SHAPE] num [SHAPE]círculo[/SHAPE] e reduz o seu [RANGE]alcance[/RANGE] em 50%.`, // portugués
			`Se tenuto da [POKEMON]Cryogonal[/POKEMON], trasforma la [SHAPE]forma[/SHAPE] in un [SHAPE]cerchio[/SHAPE] e riduce la sua [RANGE]portata[/RANGE] del 50%.`, // italiano
			`Wird es von [POKEMON]Frigometri[/POKEMON] getragen, verwandelt es die [SHAPE]Form[/SHAPE] in einen [SHAPE]Kreis[/SHAPE] und verringert seine [RANGE]Reichweite[/RANGE] um 50 %.`, // alemán
			`[POKEMON]フリージオ[/POKEMON]が持つと、[SHAPE]形状[/SHAPE]が[SHAPE]円形[/SHAPE]になり、[RANGE]射程[/RANGE]が50%減少する。`, // japonés
			`[POKEMON]프리지오[/POKEMON]가 지니면 [SHAPE]형태[/SHAPE]가 [SHAPE]원형[/SHAPE]으로 바뀌고 [RANGE]사거리[/RANGE]가 50% 감소한다.`, // coreano
			`由[POKEMON]几何雪花[/POKEMON]携带时，会将[SHAPE]形状[/SHAPE]变为[SHAPE]圆形[/SHAPE]，并使其[RANGE]射程[/RANGE]缩短50%。`, // chino
			`Jeśli trzyma go [POKEMON]Cryogonal[/POKEMON], zmienia [SHAPE]kształt[/SHAPE] w [SHAPE]okrąg[/SHAPE] i zmniejsza jego [RANGE]zasięg[/RANGE] o 50%.` // polaco
		],
		condition: {
			id: [15]
		}
	},
	stretchySpring: {
		id: 'stretchySpring',
		name: [
		  	"Stretchy Spring",
		  	"Resorte elástico",
		  	"Ressort extensible",
		  	"Mola elástica",
		  	"Molla elastica",
		  	"Dehnfeder",
		  	"伸縮するバネ",
		  	"늘어나는 스프링",
		  	"伸縮彈簧",
		  	"Elastyczna sprężyna"
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/stretchy-spring.png',
		price: 30000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`[PROJECTILE]Projectiles[/PROJECTILE] [RICOCHET]ricochet[/RICOCHET] two additional times.`, // inglés
			`Los [PROJECTILE]proyectiles[/PROJECTILE] [RICOCHET]rebotan[/RICOCHET] dos veces más.`, // español
			`Les [PROJECTILE]projectiles[/PROJECTILE] [RICOCHET]rebondissent[/RICOCHET] deux fois supplémentaires.`, // francés
			`Os [PROJECTILE]projéteis[/PROJECTILE] [RICOCHET]ricocheteiam[/RICOCHET] mais duas vezes.`, // portugués
			`I [PROJECTILE]proiettili[/PROJECTILE] [RICOCHET]rimbalzano[/RICOCHET] altre due volte.`, // italiano
			`[PROJECTILE]Projektile[/PROJECTILE] [RICOCHET]prallen[/RICOCHET] zwei weitere Male ab.`, // alemán
			`[PROJECTILE]弾[/PROJECTILE]がさらに2回[RICOCHET]跳ね返る[/RICOCHET]。`, // japonés
			`[PROJECTILE]투사체[/PROJECTILE]가 추가로 두 번 더 [RICOCHET]튕긴다[/RICOCHET].`, // coreano
			`[PROJECTILE]投射物[/PROJECTILE]额外[RICOCHET]弹射[/RICOCHET]两次。`, // chino
			`[PROJECTILE]Pociski[/PROJECTILE] [RICOCHET]rykoszetują[/RICOCHET] dodatkowo dwa razy.` // polaco
		],
		condition: {
			ricochet: true
		},
		restriction: {
			id: [70, 16, 173]
		}
	},
	blackGlasses: {
		id: 'blackGlasses',
		name: [
		  	"Black Glasses",
		  	"Gafas de Sol",
		  	"Lunettes Noires",
		  	"Black Glasses",
		  	"Occhialineri",
		  	"Schattenbrille",
		  	"くろいメガネ",
		  	"검은안경",
		  	"黑色眼镜",
		  	"Black Glasses"
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/black-glasses.png',
		price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Doubles the bonus from [ABILITY]Moxie[/ABILITY].`, // inglés
			`Duplica la bonificación de [ABILITY]Autoestima[/ABILITY].`, // español
			`Double le bonus d'[ABILITY]Impudence[/ABILITY].`, // francés
			`Duplica o bônus de [ABILITY]Autoestima[/ABILITY].`, // portugués
			`Raddoppia il bonus di [ABILITY]Arroganza[/ABILITY].`, // italiano
			`Verdoppelt den Bonus von [ABILITY]Hochmut[/ABILITY].`, // alemán
			`[ABILITY]じしんかじょう[/ABILITY]のボーナスが2倍になる。`, // japonés
			`[ABILITY]자기과신[/ABILITY] 보너스가 두 배가 된다.`, // coreano
			`[ABILITY]自信过度[/ABILITY]的加成翻倍。`, // chino
			`Podwaja premię z [ABILITY]Samouwielbienie[/ABILITY].` // polaco
		],
		condition: {
			ability: ['moxie']
		},
		restriction: {
			id: [19, 70, 83, 101, 404, 142, 144, 173]
		},
	},
	ancientSword: {
		id: 'ancientSword',
		name: [
		  	"Ancient Sword",
		  	"Espada Antigua",
		  	"Épée Antique",
		  	"Espada Antiga",
		  	"Spada Antica",
		  	"Antikes Schwert",
		  	"古代の剣",
		  	"고대의 검",
		  	"古代之剑",
		  	"Starożytny Miecz"
		],
		tags: ['power', 'speed'],
		sprite: './src/assets/images/items/rusted-sword.png',
		price: 500000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`An item for [POKEMON]Aegislash Blade Forme[/POKEMON]. Increases [POWER]power[/POWER] and reduces [SPEED]recharge time[/SPEED] by 20%.`, // inglés
			`Un objeto para [POKEMON]Aegislash Forma Espada[/POKEMON]. Incrementa el [POWER]poder[/POWER] y reduce el [SPEED]tiempo de recarga[/SPEED] un 20%.`, // español
			`Un objet pour [POKEMON]Exagide Forme Lame[/POKEMON]. Augmente la [POWER]puissance[/POWER] et réduit le [SPEED]temps de recharge[/SPEED] de 20 %.`, // francés
			`Um item para [POKEMON]Aegislash Forma Lâmina[/POKEMON]. Aumenta o [POWER]poder[/POWER] e reduz o [SPEED]tempo de recarga[/SPEED] em 20%.`, // portugués
			`Uno strumento per [POKEMON]Aegislash Forma Spada[/POKEMON]. Aumenta la [POWER]potenza[/POWER] e riduce del 20% il [SPEED]tempo di ricarica[/SPEED].`, // italiano
			`Ein Item für [POKEMON]Durengard Klingenform[/POKEMON]. Erhöht die [POWER]Kraft[/POWER] und verringert die [SPEED]Aufladezeit[/SPEED] um 20 %.`, // alemán
			`[POKEMON]ギルガルド ブレードフォルム[/POKEMON]用のどうぐ。[POWER]威力[/POWER]が上がり、[SPEED]再使用時間[/SPEED]が20%短くなる。`, // japonés
			`[POKEMON]킬가르도 블레이드폼[/POKEMON]을 위한 도구입니다. [POWER]위력[/POWER]이 증가하고 [SPEED]재사용 대기시간[/SPEED]이 20% 감소합니다.`, // coreano
			`给[POKEMON]坚盾剑怪 刀剑形态[/POKEMON]使用的道具。提高[POWER]威力[/POWER]，并使[SPEED]冷却时间[/SPEED]缩短20%。`, // chino
			`Przedmiot dla [POKEMON]Aegislasha w Formie Miecza[/POKEMON]. Zwiększa [POWER]moc[/POWER] i skraca [SPEED]czas odnowienia[/SPEED] o 20%.` // polaco
		],
		condition: {
			key: ['aegislashSword', 'samurott', 'samurottHisui']
		}
	},
	ancientShield: {
		id: 'ancientShield',
		name: [
		  	"Ancient Shield",
		  	"Escudo Antiguo",
		  	"Bouclier Antique",
		  	"Escudo Antigo",
		  	"Scudo Antico",
		  	"Antiker Schild",
		  	"古代の盾",
		  	"고대의 방패",
		  	"古代之盾",
		  	"Starożytna Tarcza"
		],
		tags: [`power`, 'range'],
		sprite: './src/assets/images/items/rusted-shield.png',
		price: 500000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`An item for [POKEMON]Aegislash Shield Forme[/POKEMON]. Increases [POWER]power[/POWER] and [RANGE]range[/RANGE] by 20%.`, // inglés
			`Un objeto para [POKEMON]Aegislash Forma Escudo[/POKEMON]. Incrementa el [POWER]poder[/POWER] y el [RANGE]alcance[/RANGE] un 20%.`, // español
			`Un objet pour [POKEMON]Exagide Forme Bouclier[/POKEMON]. Augmente la [POWER]puissance[/POWER] et la [RANGE]portée[/RANGE] de 20 %.`, // francés
			`Um item para [POKEMON]Aegislash Forma Escudo[/POKEMON]. Aumenta o [POWER]poder[/POWER] e o [RANGE]alcance[/RANGE] em 20%.`, // portugués
			`Uno strumento per [POKEMON]Aegislash Forma Scudo[/POKEMON]. Aumenta la [POWER]potenza[/POWER] e la [RANGE]portata[/RANGE] del 20%.`, // italiano
			`Ein Item für [POKEMON]Durengard Schildform[/POKEMON]. Erhöht die [POWER]Kraft[/POWER] und die [RANGE]Reichweite[/RANGE] um 20 %.`, // alemán
			`[POKEMON]ギルガルド シールドフォルム[/POKEMON]用のどうぐ。[POWER]威力[/POWER]と[RANGE]範囲[/RANGE]が20%上昇する。`, // japonés
			`[POKEMON]킬가르도 실드폼[/POKEMON]을 위한 도구입니다. [POWER]위력[/POWER]과 [RANGE]범위[/RANGE]가 20% 증가합니다.`, // coreano
			`给[POKEMON]坚盾剑怪 盾牌形态[/POKEMON]使用的道具。提高[POWER]威力[/POWER]和[RANGE]范围[/RANGE]20%。`, // chino
			`Przedmiot dla [POKEMON]Aegislasha w Formie Tarczy[/POKEMON]. Zwiększa [POWER]moc[/POWER] i [RANGE]zasięg[/RANGE] o 20%.` // polaco
		],
		condition: {
			key: 'aegislash'
		}
	},
	wrestlingMask: {
		id: 'wrestlingMask',
		name: [
		  	"Wrestling Mask",
		  	"Máscara de Lucha Libre",
		  	"Masque de Lutte",
		  	"Máscara de Luta Livre",
		  	"Maschera da Wrestling",
		  	"Wrestlingmaske",
		  	"レスリングマスク",
		  	"레슬링 마스크",
		  	"摔跤面具",
		  	"Maska Zapaśnicza"
		],
		tags: ['speed'],
		sprite: './src/assets/images/items/professors-mask.png',
		price: 300000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Reduces [RANGE]range[/RANGE] by 75 and [SPEED]recharge time[/SPEED] by 35%. Nobody knows who is hiding behind this [ITEM]mask[/ITEM] (probably [POKEMON]Hawlucha[/POKEMON]).`, // inglés
			`Reduce el [RANGE]alcance[/RANGE] en 75 y el [SPEED]tiempo de recarga[/SPEED] en un 35%. Nadie sabe quién se esconde detrás de esta [ITEM]máscara[/ITEM] (probablemente [POKEMON]Hawlucha[/POKEMON]).`, // español
			`Réduit la [RANGE]portée[/RANGE] de 75 et le [SPEED]temps de recharge[/SPEED] de 35 %. Personne ne sait qui se cache derrière ce [ITEM]masque[/ITEM] (probablement [POKEMON]Brutalibré[/POKEMON]).`, // francés
			`Reduz o [RANGE]alcance[/RANGE] em 75 e o [SPEED]tempo de recarga[/SPEED] em 35%. Ninguém sabe quem se esconde por trás desta [ITEM]máscara[/ITEM] (provavelmente [POKEMON]Hawlucha[/POKEMON]).`, // portugués
			`Riduce la [RANGE]portata[/RANGE] di 75 e il [SPEED]tempo di ricarica[/SPEED] del 35%. Nessuno sa chi si nasconde dietro questa [ITEM]maschera[/ITEM] (probabilmente [POKEMON]Hawlucha[/POKEMON]).`, // italiano
			`Verringert die [RANGE]Reichweite[/RANGE] um 75 und die [SPEED]Aufladezeit[/SPEED] um 35 %. Niemand weiß, wer sich hinter dieser [ITEM]Maske[/ITEM] verbirgt (wahrscheinlich [POKEMON]Resladero[/POKEMON]).`, // alemán
			`[RANGE]射程[/RANGE]が75減少し、[SPEED]再チャージ時間[/SPEED]が35%短縮される。この[ITEM]仮面[/ITEM]の下に誰が隠れているのか、誰も知らない（おそらく[POKEMON]ルチャブル[/POKEMON]）。`, // japonés
			`[RANGE]사거리[/RANGE]가 75 감소하고 [SPEED]재충전 시간[/SPEED]이 35% 단축된다. 이 [ITEM]가면[/ITEM] 뒤에 누가 숨어 있는지 아무도 모른다(아마도 [POKEMON]루차불[/POKEMON]).`, // coreano
			`[RANGE]射程[/RANGE]减少75，[SPEED]充能时间[/SPEED]缩短35%。没人知道这张[ITEM]面具[/ITEM]后面藏着谁（可能是[POKEMON]摔角鹰人[/POKEMON]）。`, // chino
			`Zmniejsza [RANGE]zasięg[/RANGE] o 75 i skraca [SPEED]czas odnowienia[/SPEED] o 35%. Nikt nie wie, kto kryje się za tą [ITEM]maską[/ITEM] (prawdopodobnie [POKEMON]Hawlucha[/POKEMON]).` // polaco
		],
		condition: {
			id: [43]
		}
	},
	magmarizer: {
		id: 'magmarizer',
		name: [
		  	"Magmarizer",
		  	"Magmatizador",
		  	"Magmariseur",
		  	"Magmarizer",
		  	"Magmatore",
		  	"Magmaisierer",
		  	"マグマブースター",
		  	"마그마부스터",
		  	"熔岩增幅器",
		  	"Magmarizer"
		],
		tags: ['power'],
		sprite: './src/assets/images/items/magmarizer.png',
		price: 25000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Deals 30% extra damage to [BURN]burned[/BURN] [ENEMY]enemies[/ENEMY]. Only [BURN]burn[/BURN]-related [POKEMON]Pokémon[/POKEMON] can equip it.`, // inglés
			`Inflige un 30% más de daño a los [ENEMY]enemigos[/ENEMY] [BURN]quemados[/BURN]. Solo pueden equiparlo los [POKEMON]Pokémon[/POKEMON] relacionados con la [BURN]quemadura[/BURN].`, // español
			`Inflige 30 % de dégâts supplémentaires aux [ENEMY]ennemis[/ENEMY] [BURN]brûlés[/BURN]. Seuls les [POKEMON]Pokémon[/POKEMON] liés à la [BURN]brûlure[/BURN] peuvent l'équiper.`, // francés
			`Causa 30% de dano adicional a [ENEMY]inimigos[/ENEMY] [BURN]queimados[/BURN]. Apenas [POKEMON]Pokémon[/POKEMON] relacionados com a [BURN]queimadura[/BURN] podem equipá-lo.`, // portugués
			`Infligge il 30% di danni in più ai [ENEMY]nemici[/ENEMY] [BURN]scottati[/BURN]. Solo i [POKEMON]Pokémon[/POKEMON] legati alla [BURN]scottatura[/BURN] possono equipaggiarlo.`, // italiano
			`Verursacht 30 % mehr Schaden bei [BURN]verbrannten[/BURN] [ENEMY]Gegnern[/ENEMY]. Nur [POKEMON]Pokémon[/POKEMON], die mit [BURN]Verbrennungen[/BURN] in Verbindung stehen, können es ausrüsten.`, // alemán
			`[BURN]やけど[/BURN]状態の[ENEMY]敵[/ENEMY]に与えるダメージが30%増加する。[BURN]やけど[/BURN]に関連する[POKEMON]ポケモン[/POKEMON]のみ装備できる。`, // japonés
			`[BURN]화상[/BURN] 상태인 [ENEMY]적[/ENEMY]에게 30% 추가 피해를 준다. [BURN]화상[/BURN]과 관련된 [POKEMON]포켓몬[/POKEMON]만 장착할 수 있다.`, // coreano
			`对处于[BURN]灼伤[/BURN]状态的[ENEMY]敌人[/ENEMY]造成的伤害提高30%。只有与[BURN]灼伤[/BURN]相关的[POKEMON]宝可梦[/POKEMON]才能装备。`, // chino
			`Zadaje o 30% więcej obrażeń [ENEMY]wrogom[/ENEMY] objętym [BURN]podpaleniem[/BURN]. Mogą go wyposażyć tylko [POKEMON]Pokémony[/POKEMON] związane z [BURN]podpaleniem[/BURN].` // polaco
		],
		condition: { 
			ability: [
				'burn', 'flamethrower', 'burnSplash', 'magmaStorm', 'burnDoubleShot', 'flameWheel', 'drought', 'willOWisp', 'flashFire', 'triAttack', 'spicySpray',
				'lavaPlume', 'fireLash', 'steamEruption', 'precipiceBlades', 'sacredFire', 'volcanicKaboom', 'solarPower', 'burnRicochet',
			]
		},
		restriction: {
			id: [70, 173]
		}
	},
	inverter: {
		id: 'inverter',
		name: [
		  	"Inverter",
		  	"Inversor",
		  	"Onduleur",
		  	"Inversor",
		  	"Inverter",
		  	"Wechselrichter",
		  	"インバーター",
		  	"인버터",
		  	"逆变器",
		  	"Inwerter"
		],	
		tags: [],
		sprite: './src/assets/images/items/inverter.png',
		price: 500000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
		  	"[REVERSE]Inverts things.[/REVERSE]",
		  	"[REVERSE]Invierte cosas.[/REVERSE]",
		  	"[REVERSE]Inverse des choses.[/REVERSE]",
		  	"[REVERSE]Inverte coisas.[/REVERSE]",
		  	"[REVERSE]Inverte le cose.[/REVERSE]",
		  	"[REVERSE]Invertiert Dinge.[/REVERSE]",
		  	"[REVERSE]物事を反転させる。[/REVERSE]",
		  	"[REVERSE]것들을 뒤집는다.[/REVERSE]",
		  	"[REVERSE]反转事物。[/REVERSE]",
		  	"[REVERSE]Odwraca rzeczy.[/REVERSE]"
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173],
			attackType: 'aura'
		}
	},
	subwoofer: {
		id: 'subwoofer',
		name: [
		  	"Subwoofer",
		  	"Subwoofer",
		  	"Subwoofer",
		  	"Subwoofer",
		  	"Subwoofer",
		  	"Subwoofer",
		  	"サブウーファー",
		  	"서브우퍼",
		  	"低音炮",
		  	"Subwoofer"
		],
		tags: [],
		sprite: './src/assets/images/items/medal-box.png',
		price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: false,
		description: [
			`[ADMIN]Woof! Allows you to change the music of the selected route to another. [/ADMIN]`, // inglés
			`[ADMIN]¡Guau! Permite cambiar la música de la ruta seleccionada por otra. [/ADMIN]`, // español
			`[ADMIN]Ouaf ! Permet de changer la musique de la route sélectionnée pour une autre. [/ADMIN]`, // francés
			`[ADMIN]Au! Permite alterar a música da rota selecionada para outra. [/ADMIN]`, // portugués
			`[ADMIN]Bau! Permette di cambiare la musica della rotta selezionata con un'altra. [/ADMIN]`, // italiano
			`[ADMIN]Wuff! Ermöglicht es, die Musik der ausgewählten Route durch eine andere zu ersetzen. [/ADMIN]`, // alemán
			`[ADMIN]ワン！選択したルートのBGMを別のものに変更できる。[/ADMIN]`, // japonés
			`[ADMIN]멍! 선택한 루트의 음악을 다른 음악으로 변경할 수 있습니다. [/ADMIN]`, // coreano
			`[ADMIN]汪！可以将所选路线的音乐更换为其他音乐。[/ADMIN]`, // chino
			`[ADMIN]Hau! Pozwala zmienić muzykę wybranej trasy na inną. [/ADMIN]` // polaco
		],
		condition: {
			attackType: 'single'
		},
		restriction: {
			id: [70, 111, 142, 173, 404],
			attackType: 'aura'
		}
	},
	xAttack: {
		id: 'xAttack',
		name: [
		  	"X-Attack",
		  	"Ataque X",
		  	"Attaque +",
		  	"X-Attack",
		  	"Attacco X",
		  	"X-Angriff",
		  	"プラスパワー",
		  	"プラスパワー",
		  	"力量强化",
		  	"X Attack"
		],
		tags: ['power'],
		sprite: './src/assets/images/items/x-attack.png',
		price: 80000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases [POWER]power[/POWER] by 75.`, // inglés
			`Aumenta el [POWER]poder[/POWER] en 75.`, // español
			`Augmente la [POWER]puissance[/POWER] de 75.`, // francés
			`Aumenta o [POWER]poder[/POWER] em 75.`, // portugués
			`Aumenta la [POWER]potenza[/POWER] di 75.`, // italiano
			`Erhöht die [POWER]Kraft[/POWER] um 75.`, // alemán
			`[POWER]威力[/POWER]が75上がる。`, // japonés
			`[POWER]위력[/POWER]이 75 증가합니다.`, // coreano
			`[POWER]威力[/POWER]提高75。`, // chino
			`Zwiększa [POWER]moc[/POWER] o 75.` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173],
			attackType: 'aura'
		},
	},
	xSpeed: { 
		id: 'xSpeed',
		name: [
			`X Speed`, // inglés
			`Velocidad X`, // español
			`Vitesse +`, // francés
			`X Speed`, // portugués
			`Velocità X`, // italiano
			`X-Initiative`, // alemán
			`スピーダー`, // japonés
			`스피드업`, // coreano
			`速度强化`, // chino
			`Przyspieszenie X` // polaco
		],
		tags: ['speed'],
		sprite: './src/assets/images/items/x-speed.png',
		price: 9800,
		tier: 'legendary',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Reduces [SPEED]recharge time[/SPEED] by 20%.`, // inglés
			`Reduce el [SPEED]tiempo de recarga[/SPEED] un 20%.`, // español
			`Réduit le [SPEED]temps de recharge[/SPEED] de 20 %.`, // francés
			`Reduz o [SPEED]tempo de recarga[/SPEED] em 20%.`, // portugués
			`Riduce il [SPEED]tempo di ricarica[/SPEED] del 20%.`, // italiano
			`Reduziert die [SPEED]Aufladezeit[/SPEED] um 20 %.`, // alemán
			`[SPEED]再使用時間[/SPEED]が20%短くなる。`, // japonés
			`[SPEED]재사용 대기 시간[/SPEED]이 20% 감소합니다.`, // coreano
			`[SPEED]冷却时间[/SPEED]缩短20%。`, // chino
			`Skraca [SPEED]czas odnowienia[/SPEED] o 20%.` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173],
			orbital: true,
			attackType: 'aura'
		},
	},
	weaknessPolicy: {
		id: 'weaknessPolicy',
		name: [
		  	"Weakness Policy",
		  	"Seguro Debilidad",
		  	"Vulné-Assurance",
		  	"Apólice de Fraqueza",
		  	"Vulneropolizza",
		  	"Schwächenschutz",
		  	"じゃくてんほけん",
		  	"약점보험",
		  	"弱點保險",
		  	"Polisa Słabości"
		],
		tags: ['power'],
		sprite: './src/assets/images/items/weakness-policy.png',
		price: 150000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases [POWER]power[/POWER] by 150%, but [PROJECTILE]projectiles[/PROJECTILE] no longer [SHAPE]splash[/SHAPE].`, // inglés
			`Aumenta el [POWER]poder[/POWER] un 150%, pero los [PROJECTILE]proyectiles[/PROJECTILE] ya no causan [SHAPE]daño de área[/SHAPE].`, // español
			`Augmente la [POWER]puissance[/POWER] de 150 %, mais les [PROJECTILE]projectiles[/PROJECTILE] ne provoquent plus de [SHAPE]dégâts de zone[/SHAPE].`, // francés
			`Aumenta o [POWER]poder[/POWER] em 150%, mas os [PROJECTILE]projéteis[/PROJECTILE] deixam de causar [SHAPE]dano em área[/SHAPE].`, // portugués
			`Aumenta la [POWER]potenza[/POWER] del 150%, ma i [PROJECTILE]proiettili[/PROJECTILE] non infliggono più [SHAPE]danni ad SHAPE[/SHAPE].`, // italiano
			`Erhöht die [POWER]Stärke[/POWER] um 150 %, aber [PROJECTILE]Projektile[/PROJECTILE] verursachen keinen [SHAPE]Flächenschaden[/SHAPE] mehr.`, // alemán
			`[POWER]威力[/POWER]が150%上昇するが、[PROJECTILE]弾[/PROJECTILE]が[SHAPE]範囲ダメージ[/SHAPE]を与えなくなる。`, // japonés
			`[POWER]위력[/POWER]이 150% 증가하지만 [PROJECTILE]투사체[/PROJECTILE]가 더 이상 [SHAPE]범위 피해[/SHAPE]를 주지 않는다.`, // coreano
			`[POWER]威力[/POWER]提高150%，但[PROJECTILE]投射物[/PROJECTILE]不再造成[SHAPE]范围伤害[/SHAPE]。`, // chino
			`Zwiększa [POWER]moc[/POWER] o 150%, ale [PROJECTILE]pociski[/PROJECTILE] nie zadają już [SHAPE]obrażeń obszarowych[/SHAPE].` // polaco
		],
		condition: {
			ability: [
				'splash', 'slowSplash', 'synchronySplash', 'armorBreakSplash', 'burnSplash', 'magmaStorm', 'naturesJudgement',
				'armorCannon', 'hyperDrill', 'curseSplash', 'electroBall', 'pollenPuff', 'autotomize', 'auraSphere',
			]
		},
		restriction: {
			id: [70, 173]
		}
	},
	muscleBand: {
		id: 'muscleBand',
		name: [
		  	"Muscle Band",
		  	"Cinta Fuerte",
		  	"Bandeau Muscle",
		  	"Faixa Muscular",
		  	"Muscolbanda",
		  	"Muskelband",
		  	"ちからのハチマキ",
		  	"근육밴드",
		  	"力量头带",
		  	"Opaska Mięśniowa"
		],
		tags: ['power'],
		sprite: './src/assets/images/items/muscle-band.png',
		price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases [SPEED]recharge time[/SPEED] by 25%, but [PROJECTILE]splash projectiles[/PROJECTILE] deal full damage to nearby [ENEMY]enemies[/ENEMY].`, // inglés
			`Aumenta el [SPEED]tiempo de recarga[/SPEED] un 25%, pero los [PROJECTILE]proyectiles de área[/PROJECTILE] infligen todo el daño a los [ENEMY]enemigos[/ENEMY] cercanos.`, // español
			`Augmente le [SPEED]temps de recharge[/SPEED] de 25 %, mais les [PROJECTILE]projectiles à dégâts de zone[/PROJECTILE] infligent tous leurs dégâts aux [ENEMY]ennemis[/ENEMY] proches.`, // francés
			`Aumenta o [SPEED]tempo de recarga[/SPEED] em 25%, mas os [PROJECTILE]projéteis com dano em área[/PROJECTILE] causam dano total aos [ENEMY]inimigos[/ENEMY] próximos.`, // portugués
			`Aumenta il [SPEED]tempo di ricarica[/SPEED] del 25%, ma i [PROJECTILE]proiettili ad area[/PROJECTILE] infliggono danni pieni ai [ENEMY]nemici[/ENEMY] vicini.`, // italiano
			`Erhöht die [SPEED]Aufladezeit[/SPEED] um 25 %, aber [PROJECTILE]Projektile mit Flächenschaden[/PROJECTILE] verursachen bei nahen [ENEMY]Gegnern[/ENEMY] vollen Schaden.`, // alemán
			`[SPEED]再チャージ時間[/SPEED]が25%増加するが、[PROJECTILE]範囲攻撃の弾[/PROJECTILE]は近くの[ENEMY]敵[/ENEMY]にも通常どおりのダメージを与える。`, // japonés
			`[SPEED]재충전 시간[/SPEED]이 25% 증가하지만, [PROJECTILE]범위 공격 투사체[/PROJECTILE]는 주변 [ENEMY]적[/ENEMY]에게도 피해를 전부 준다.`, // coreano
			`[SPEED]充能时间[/SPEED]延长25%，但[PROJECTILE]范围伤害投射物[/PROJECTILE]会对附近的[ENEMY]敌人[/ENEMY]造成全额伤害。`, // chino
			`Wydłuża [SPEED]czas odnowienia[/SPEED] o 25%, ale [PROJECTILE]pociski obszarowe[/PROJECTILE] zadają pełne obrażenia pobliskim [ENEMY]wrogom[/ENEMY].` // polaco
		],
		condition: {
			ability: [
				'splash', 'slowSplash', 'synchronySplash', 'armorBreakSplash', 'burnSplash', 'magmaStorm', 'armorCannon', 'hyperDrill', 'naturesJudgement',
				'curseSplash', 'electroBall', 'pollenPuff', 'autotomize', 'auraSphere',
			]
		},
		restriction: {
			id: [70, 173]
		}
	},
	litCoal: {
		id: 'litCoal',
		name: [
		  	"Lit Coal",
		  	"Carbón Encendido",
		  	"Charbon Allumé",
		  	"Carvão Aceso",
		  	"Carbone Acceso",
		  	"Glühende Kohle",
		  	"燃えた石炭",
		  	"불붙은 석탄",
		  	"燃烧的煤炭",
		  	"Żarzący Węgiel"
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/charcoal.png',
		price: 10000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Each [PROJECTILE]projectile[/PROJECTILE] has a 10% chance to apply [BURN]burn[/BURN].`, // inglés
			`Cada [PROJECTILE]proyectil[/PROJECTILE] tiene un 10% de probabilidad de aplicar [BURN]quemadura[/BURN].`, // español
			`Chaque [PROJECTILE]projectile[/PROJECTILE] a 10 % de chances d'infliger une [BURN]brûlure[/BURN].`, // francés
			`Cada [PROJECTILE]projétil[/PROJECTILE] tem 10% de chance de causar [BURN]queimadura[/BURN].`, // portugués
			`Ogni [PROJECTILE]proiettile[/PROJECTILE] ha il 10% di probabilità di infliggere [BURN]scottatura[/BURN].`, // italiano
			`Jedes [PROJECTILE]Projektil[/PROJECTILE] hat eine Chance von 10 %, [BURN]Verbrennung[/BURN] zu verursachen.`, // alemán
			`各[PROJECTILE]弾[/PROJECTILE]は10%の確率で[BURN]やけど[/BURN]を与える。`, // japonés
			`각 [PROJECTILE]투사체[/PROJECTILE]는 10% 확률로 [BURN]화상[/BURN]을 부여한다.`, // coreano
			`每个[PROJECTILE]投射物[/PROJECTILE]都有10%的概率施加[BURN]灼伤[/BURN]。`, // chino
			`Każdy [PROJECTILE]pocisk[/PROJECTILE] ma 10% szans na nałożenie [BURN]podpalenia[/BURN].` // polaco
		],
		condition: {
			attackType: ['single', 'bombardment']
		},
		restriction: {
			ability: [
				'burn', 'flamethrower', 'burnSplash', 'magmaStorm', 'burnDoubleShot', 'flameWheel', 'drought', 'secretSword', 'lavaPlume', 'fireLash', 'seedFlare', 'ceaselessEdge',
				'doubleShot', 'tripleShot', 'quadraShot', 'octaShot', 'curseDoubleShot', 'poisonDoubleShot', 'quadraShotSand', 'doubleShotSand', 'bitterBlade', 'triAttack',
				'steamEruption', 'sacredFire', 'volcanicKaboom', 'icyWind', 'whiteRay', 'spicySpray', 'uTurn', 'moongeistBeam', 'machBolt',
				'solarBeam', 'hydroCannon', 'zapCannon', 'hyperBeam', 'meteorBeam', 'iceBeam', 'steelBeam', 'signalBeam', 'cryogenicCannon',
				'boomburst', 'liquidVoice', 'drumBeating', 'originPulse', 'emptyLight', 'soulHeartReactor', 'burnRicochet',
			],
			id: [19, 70, 83, 101, 404, 142, 144, 173],
			attackType: 'aura'
		}
	},
	magnet: {
		id: 'magnet',
		name: [
		  	"Magnet",
		  	"Imán",
		  	"Aimant",
		  	"Ímã",
		  	"Magnete",
		  	"Magnet",
		  	"じしゃく",
		  	"자석",
		  	"磁铁",
		  	"Magnes"
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/magnet.png',
		price: 25000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`[PROJECTILE]Projectiles[/PROJECTILE] [SLOW]slow[/SLOW] for 1 second while the target has [ARMOR]armor[/ARMOR].`, // inglés
			`Los [PROJECTILE]proyectiles[/PROJECTILE] [SLOW]ralentizan[/SLOW] durante 1 segundo mientras el objetivo tenga [ARMOR]armadura[/ARMOR].`, // español
			`Les [PROJECTILE]projectiles[/PROJECTILE] [SLOW]ralentissent[/SLOW] pendant 1 seconde tant que la cible possède de l'[ARMOR]armure[/ARMOR].`, // francés
			`Os [PROJECTILE]projéteis[/PROJECTILE] [SLOW]abrandam[/SLOW] durante 1 segundo enquanto o alvo tiver [ARMOR]armadura[/ARMOR].`, // portugués
			`I [PROJECTILE]proiettili[/PROJECTILE] [SLOW]rallentano[/SLOW] per 1 secondo finché il bersaglio ha [ARMOR]armatura[/ARMOR].`, // italiano
			`[PROJECTILE]Projektile[/PROJECTILE] [SLOW]verlangsamen[/SLOW] das Ziel 1 Sekunde lang, solange es [ARMOR]Rüstung[/ARMOR] hat.`, // alemán
			`[ARMOR]アーマー[/ARMOR]がある間、[PROJECTILE]弾[/PROJECTILE]は1秒間[SLOW]減速[/SLOW]させる。`, // japonés
			`대상에게 [ARMOR]방어력[/ARMOR]이 있는 동안 [PROJECTILE]투사체[/PROJECTILE]는 1초 동안 [SLOW]느려지게[/SLOW] 한다.`, // coreano
			`目标拥有[ARMOR]护甲[/ARMOR]时，[PROJECTILE]投射物[/PROJECTILE]会使其[SLOW]减速[/SLOW]1秒。`, // chino
			`[PROJECTILE]Pociski[/PROJECTILE] [SLOW]spowalniają[/SLOW] cel na 1 sekundę, gdy ma on [ARMOR]pancerz[/ARMOR].` // polaco
		],
		condition: {
			attackType: ['single', 'bombardment'],
			//id: [252],
		},
		restriction: {
			id: [19, 70, 83, 101, 404, 142, 144, 165, 173, 235, 111, 210, 211, 212],
			ability: [
				'machBolt', 
				'uTurn', 'icyWind', 'dazzlingGleam', 'flamethrower', 'berserk', 'fireLash', 'precipiceBlades',
				'solarBeam', 'hydroCannon', 'zapCannon', 'hyperBeam', 'meteorBeam', 'iceBeam', 'steelBeam', 'steamEruption', 'soulHeartReactor', 'psybeam', 'signalBeam', 'cryogenicCannon', 'moongeistBeam',
				'boomburst', 'liquidVoice', 'drumBeating', 'originPulse', 'emptyLight', 
			],
			attackType: 'aura'
		}
	},
	leftovers: {
		id: 'leftovers',
		name: [
			"Leftovers",
			"Restos",
			"Restes",
			"Sobras",
			"Avanzi",
			"Überreste",
			"たべのこし",
			"먹다남은음식",
			"吃剩的东西",
			"Resztki"
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/leftovers.png',
		price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Each [PROJECTILE]projectile[/PROJECTILE] has a 1% chance to restore one [HEART]heart[/HEART] (1 use per wave). Doesn't work with [RICOCHET]ricochet[/RICOCHET].`, // inglés
			`Cada [PROJECTILE]proyectil[/PROJECTILE] tiene un 1% de probabilidad de restaurar un [HEART]corazón[/HEART] (1 uso por oleada). No funciona con [RICOCHET]rebote[/RICOCHET].`, // español
			`Chaque [PROJECTILE]projectile[/PROJECTILE] a 1 % de chances de restaurer un [HEART]cœur[/HEART] (1 utilisation par vague). Ne fonctionne pas avec le [RICOCHET]ricochet[/RICOCHET].`, // francés
			`Cada [PROJECTILE]projétil[/PROJECTILE] tem 1% de chance de restaurar um [HEART]coração[/HEART] (1 uso por vaga). Não funciona com [RICOCHET]ricochete[/RICOCHET].`, // portugués
			`Ogni [PROJECTILE]proiettile[/PROJECTILE] ha l'1% di probabilità di ripristinare un [HEART]cuore[/HEART] (1 utilizzo per ondata). Non funziona con il [RICOCHET]rimbalzo[/RICOCHET].`, // italiano
			`Jedes [PROJECTILE]Projektil[/PROJECTILE] hat eine Chance von 1 %, ein [HEART]Herz[/HEART] wiederherzustellen (1 Anwendung pro Welle). Funktioniert nicht mit [RICOCHET]Abprallen[/RICOCHET].`, // alemán
			`各[PROJECTILE]弾[/PROJECTILE]は1%の確率で[HEART]ハート[/HEART]を1つ回復する（1ウェーブにつき1回）。[RICOCHET]跳ね返り[/RICOCHET]とは併用できない。`, // japonés
			`각 [PROJECTILE]투사체[/PROJECTILE]는 1% 확률로 [HEART]하트[/HEART]를 1개 회복한다(웨이브당 1회). [RICOCHET]튕김[/RICOCHET]과 함께 사용할 수 없다.`, // coreano
			`每个[PROJECTILE]投射物[/PROJECTILE]有1%的概率恢复1颗[HEART]心心[/HEART]（每波限用1次）。无法与[RICOCHET]弹射[/RICOCHET]效果同时使用。`, // chino
			`Każdy [PROJECTILE]pocisk[/PROJECTILE] ma 1% szans na przywrócenie jednego [HEART]serca[/HEART] (1 użycie na falę). Nie działa z efektem [RICOCHET]rykoszetu[/RICOCHET].` // polaco
		],
		condition: {
			attackType: ['single', 'bombardment'],
		},
		restriction: {
			ricochet: true,
			id: [19, 70, 83, 101, 111, 404, 63, 142, 144, 165, 173, 235],
			ability: [
				'uTurn', 'icyWind', 'dazzlingGleam', 'flamethrower', 'berserk', 'fireLash', 'precipiceBlades', 'machBolt',
				'solarBeam', 'hydroCannon', 'zapCannon', 'hyperBeam', 'meteorBeam', 'iceBeam', 'steelBeam', 'steamEruption', 'soulHeartReactor', 'psybeam', 'signalBeam', 'cryogenicCannon', 'moongeistBeam',
			]
		}
	},
	hikingKit: { 
		id: 'hikingKit',
		name: [
		  	"Hiking Kit",
		  	"Kit de Senderismo",
		  	"Kit de Randonnée",
		  	"Kit de Caminhada",
		  	"Kit da Escursione",
		  	"Wander-Set",
		  	"ハイキングキット",
		  	"하이킹 키트",
		  	"登山套裝",
		  	"Zestaw Turystyczny"
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/camping-gear.png',
		price: 15000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`[FIELD]Field[/FIELD] instead behaves as [MOUNTAIN]mountain[/MOUNTAIN].`, // inglés
			`El [FIELD]campo[/FIELD] se comporta en su lugar como [MOUNTAIN]montaña[/MOUNTAIN].`, // español
			`Le [FIELD]champ[/FIELD] se comporte à la place comme la [MOUNTAIN]montagne[/MOUNTAIN].`, // francés
			`O [FIELD]campo[/FIELD] passa a se comportar como [MOUNTAIN]montanha[/MOUNTAIN].`, // portugués
			`Il [FIELD]campo[/FIELD] si comporta invece come [MOUNTAIN]montagna[/MOUNTAIN].`, // italiano
			`Das [FIELD]Feld[/FIELD] verhält sich stattdessen wie ein [MOUNTAIN]Berg[/MOUNTAIN].`, // alemán
			`[FIELD]フィールド[/FIELD]が[MOUNTAIN]やま[/MOUNTAIN]として扱われるようになる。`, // japonés
			`[FIELD]필드[/FIELD]가 대신 [MOUNTAIN]산[/MOUNTAIN]으로 취급됩니다.`, // coreano
			`[FIELD]场地[/FIELD]改为视为[MOUNTAIN]山地[/MOUNTAIN]。`, // chino
			`[FIELD]Pole[/FIELD] zamiast tego zachowuje się jak [MOUNTAIN]góra[/MOUNTAIN].` // polaco
		],
		condition: {
			ability: ['vigilantFrisk', 'vigilant'],
			id: [61, 76]
		},
		restriction:{
			id: [70, 142, 173]
		}
	},
	assaultVest: {
		id: 'assaultVest',
		name: [
		    "Assault Vest",
		    "Chaleco Asalto",
		    "Veste de Combat",
		    "Colete Assalto",
		    "Giubbotto Assalto",
		    "Assault-Weste",
		    "とつげきチョッキ",
		    "돌격조끼",
		    "突击背心",
		    "Assault Vest",
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/assault-vest.png',
		price: 200000,
		tier: 'common',
		isEquipable: true,
		isRetirable: false,
		description: [
			`Allows [POKEMON]Fossil Pokémon[/POKEMON] to be placed on [GRASS]Grass[/GRASS].`, // inglés
			`Permite colocar [POKEMON]Pokémon Fósiles[/POKEMON] en [GRASS]hierba[/GRASS].`, // español
			`Permet de placer des [POKEMON]Pokémon Fossiles[/POKEMON] sur l'[GRASS]herbe[/GRASS].`, // francés
			`Permite que [POKEMON]Pokémon Fósseis[/POKEMON] sejam colocados na [GRASS]grama[/GRASS].`, // portugués
			`Permette di posizionare i [POKEMON]Pokémon Fossili[/POKEMON] sull'[GRASS]erba[/GRASS].`, // italiano
			`Ermöglicht es, [POKEMON]Fossil-Pokémon[/POKEMON] auf [GRASS]Gras[/GRASS] zu platzieren.`, // alemán
			`[POKEMON]化石ポケモン[/POKEMON]を[GRASS]くさ[/GRASS]に配置できるようになる。`, // japonés
			`[POKEMON]화석 포켓몬[/POKEMON]을 [GRASS]풀[/GRASS]에 배치할 수 있게 됩니다.`, // coreano
			`允许将[POKEMON]化石宝可梦[/POKEMON]放置在[GRASS]草地[/GRASS]上。`, // chino
			`Pozwala umieszczać [POKEMON]Pokémony Skamieniałości[/POKEMON] na [GRASS]trawie[/GRASS].` // polaco
		],
		condition: {
			id: [58, 59, 63, 64, 65, 66, 94, 140, 136, 151, 247]
		}
	},
	spindasSpecialDelivery: {
		id: 'spindasSpecialDelivery',
		name: [
		    "Spinda's Special Delivery",
		    "Entrega Especial Spinda",
		    "Livraison spéciale Spinda",
		    "Entrega especial Spinda",
		    "Consegna speciale Spinda",
		    "Pandirs Speziallieferung",
		    "スピンダの特別配達",
		    "스핀다의 특별 배달",
		    "晃晃斑的特别递送",
		    "Specjalna dostawa Spindy"
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/parcel.png',
		price: 300000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`[PROJECTILE]Projectiles[/PROJECTILE] have a 6% chance to apply a [STATUS]status effect[/STATUS] ([BURN]Burn[/BURN], [STUN]Stun[/STUN], [SLOW]Slow[/SLOW], [POISON]Poison[/POISON]). A memento from when [POKEMON]Spinda[/POKEMON] worked as a delivery. It didn't last long in the job.`, // inglés
			`Los [PROJECTILE]proyectiles[/PROJECTILE] tienen un 6% de probabilidad de aplicar un [STATUS]estado alterado[/STATUS] ([BURN]Quemadura[/BURN], [STUN]Aturdimiento[/STUN], [SLOW]Ralentización[/SLOW], [POISON]Veneno[/POISON]). Un recuerdo de cuando [POKEMON]Spinda[/POKEMON] trabajaba como repartidor, duró poco en el puesto.`, // español
			`Les [PROJECTILE]projectiles[/PROJECTILE] ont 6 % de chances d'infliger une [STATUS]altération de statut[/STATUS] ([BURN]Brûlure[/BURN], [STUN]Étourdissement[/STUN], [SLOW]Ralentissement[/SLOW], [POISON]Poison[/POISON]). Un souvenir de l'époque où [POKEMON]Spinda[/POKEMON] travaillait comme livreur ; il n'a pas fait long feu à ce poste.`, // francés
			`Os [PROJECTILE]projéteis[/PROJECTILE] têm 6% de chance de aplicar um [STATUS]efeito de estado[/STATUS] ([BURN]Queimadura[/BURN], [STUN]Atordoamento[/STUN], [SLOW]Lentidão[/SLOW], [POISON]Veneno[/POISON]). Uma lembrança da época em que [POKEMON]Spinda[/POKEMON] trabalhava como entregador; não durou muito no cargo.`, // portugués
			`I [PROJECTILE]proiettili[/PROJECTILE] hanno il 6% di probabilità di infliggere un [STATUS]effetto di stato[/STATUS] ([BURN]Scottatura[/BURN], [STUN]Stordimento[/STUN], [SLOW]Rallentamento[/SLOW], [POISON]Veleno[/POISON]). Un ricordo di quando [POKEMON]Spinda[/POKEMON] lavorava come fattorino; non è durato molto in quel lavoro.`, // italiano
			`[PROJECTILE]Projektile[/PROJECTILE] haben eine Chance von 6 %, einen [STATUS]Statuseffekt[/STATUS] zu verursachen ([BURN]Verbrennung[/BURN], [STUN]Betäubung[/STUN], [SLOW]Verlangsamung[/SLOW], [POISON]Vergiftung[/POISON]). Ein Erinnerungsstück aus der Zeit, als [POKEMON]Pandir[/POKEMON] als Lieferant arbeitete. Es hielt sich nicht lange in diesem Job.`, // alemán
			`[PROJECTILE]弾[/PROJECTILE]は6%の確率で[STATUS]状態異常[/STATUS]を与える（[BURN]やけど[/BURN]、[STUN]ひるみ[/STUN]、[SLOW]遅延[/SLOW]、[POISON]どく[/POISON]）。[POKEMON]パッチール[/POKEMON]が配達員として働いていた頃の思い出の品。仕事は長続きしなかった。`, // japonés
			`[PROJECTILE]투사체[/PROJECTILE]는 6% 확률로 [STATUS]상태 이상[/STATUS]을 부여한다([BURN]화상[/BURN], [STUN]기절[/STUN], [SLOW]느려짐[/SLOW], [POISON]독[/POISON]). [POKEMON]얼루기[/POKEMON]가 배달원으로 일하던 시절의 기념품이다. 그 일은 오래가지 못했다.`, // coreano
			`[PROJECTILE]投射物[/PROJECTILE]有6%的概率施加一种[STATUS]状态异常[/STATUS]（[BURN]灼伤[/BURN]、[STUN]眩晕[/STUN]、[SLOW]减速[/SLOW]、[POISON]中毒[/POISON]）。这是[POKEMON]晃晃斑[/POKEMON]当送货员时留下的纪念品，但它没干多久就离职了。`, // chino
			`[PROJECTILE]Pociski[/PROJECTILE] mają 6% szans na nałożenie [STATUS]efektu statusu[/STATUS] ([BURN]Podpalenie[/BURN], [STUN]Ogłuszenie[/STUN], [SLOW]Spowolnienie[/SLOW], [POISON]Trucizna[/POISON]). Pamiątka z czasów, gdy [POKEMON]Spinda[/POKEMON] pracował jako dostawca. Nie zagrzał długo miejsca na tym stanowisku.` // polaco
		],
		condition: {
			id: [53]
		}
	},
	bindingBand: {
		id: 'bindingBand',
		name: [
			"Binding Band",
			"Banda Atadura",
			"Bande Étreinte",
			"Binding Band",
			"Legafascia",
			"Klammerband",
			"しめつけバンド",
			"조임밴드",
			"紧绑束带",
			"Binding Band"
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/binding-band.png',
		price: 400000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Allows [SLOW]slowing[/SLOW] [ENEMY]enemies[/ENEMY] immune to [SLOW]slow[/SLOW], but increases its [SPEED]recharge time[/SPEED] by 1.5 seconds. It gets tangled in [POKEMON]Tangela[/POKEMON]'s curls.`, // inglés
			`Permite [SLOW]ralentizar[/SLOW] a los [ENEMY]enemigos[/ENEMY] inmunes a la [SLOW]ralentización[/SLOW], pero aumenta su [SPEED]tiempo de recarga[/SPEED] en 1,5 segundos. Se enreda con los rizos de [POKEMON]Tangela[/POKEMON].`, // español
			`Permet de [SLOW]ralentir[/SLOW] les [ENEMY]ennemis[/ENEMY] immunisés au [SLOW]ralentissement[/SLOW], mais augmente son [SPEED]temps de recharge[/SPEED] de 1,5 seconde. Il s'emmêle dans les boucles de [POKEMON]Tangela[/POKEMON].`, // francés
			`Permite [SLOW]abrandar[/SLOW] os [ENEMY]inimigos[/ENEMY] imunes à [SLOW]lentidão[/SLOW], mas aumenta o seu [SPEED]tempo de recarga[/SPEED] em 1,5 segundos. Enrola-se nos caracóis de [POKEMON]Tangela[/POKEMON].`, // portugués
			`Permette di [SLOW]rallentare[/SLOW] i [ENEMY]nemici[/ENEMY] immuni al [SLOW]rallentamento[/SLOW], ma aumenta il suo [SPEED]tempo di ricarica[/SPEED] di 1,5 secondi. Si impiglia nei riccioli di [POKEMON]Tangela[/POKEMON].`, // italiano
			`Ermöglicht es, [ENEMY]Gegner[/ENEMY] zu [SLOW]verlangsamen[/SLOW], die gegen [SLOW]Verlangsamung[/SLOW] immun sind, erhöht aber die [SPEED]Aufladezeit[/SPEED] um 1,5 Sekunden. Es verfängt sich in [POKEMON]Tangelas[/POKEMON] Locken.`, // alemán
			`[SLOW]減速[/SLOW]に耐性のある[ENEMY]敵[/ENEMY]も[SLOW]減速[/SLOW]させられるが、[SPEED]再チャージ時間[/SPEED]が1.5秒増加する。[POKEMON]モンジャラ[/POKEMON]の巻き毛に絡まる。`, // japonés
			`[SLOW]느려짐[/SLOW]에 면역인 [ENEMY]적[/ENEMY]도 [SLOW]느려지게[/SLOW] 할 수 있지만, [SPEED]재충전 시간[/SPEED]이 1.5초 증가한다. [POKEMON]덩쿠리[/POKEMON]의 곱슬 덩굴에 얽힌다.`, // coreano
			`可以使免疫[SLOW]减速[/SLOW]的[ENEMY]敌人[/ENEMY]也受到[SLOW]减速[/SLOW]效果，但自身的[SPEED]充能时间[/SPEED]增加1.5秒。它缠进了[POKEMON]蔓藤怪[/POKEMON]的卷须里。`, // chino
			`Pozwala [SLOW]spowalniać[/SLOW] [ENEMY]wrogów[/ENEMY] odpornych na [SLOW]spowolnienie[/SLOW], ale wydłuża [SPEED]czas odnowienia[/SPEED] o 1,5 sekundy. Zaplątuje się w loki [POKEMON]Tangeli[/POKEMON].` // polaco
		],
		condition: {
			id: [20]
		}
	},
	direHit: {
		id: 'direHit',
		name: [
		  	"Dire Hit",
		  	"Crítico X",
		  	"Muscle +",
		  	"Dire Hit",
		  	"Supercolpo",
		  	"Angriffplus",
		  	"クリティカット",
		  	"크리티컬커터",
		  	"要害攻击",
		  	"Dire Hit"
		],
		tags: ['critical'],
		sprite: './src/assets/images/items/dire-hit.png',
		price: 80000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases [CRITICAL]critical hit chance[/CRITICAL] by 25%.`, // inglés
			`Aumenta la [CRITICAL]probabilidad de golpe crítico[/CRITICAL] en un 25%.`, // español
			`Augmente les [CRITICAL]chances de coup critique[/CRITICAL] de 25 %.`, // francés
			`Aumenta a [CRITICAL]chance de acerto crítico[/CRITICAL] em 25%.`, // portugués
			`Aumenta la [CRITICAL]probabilità di colpo critico[/CRITICAL] del 25%.`, // italiano
			`Erhöht die [CRITICAL]Chance auf kritische Treffer[/CRITICAL] um 25 %.`, // alemán
			`[CRITICAL]急所率[/CRITICAL]が25%増加する。`, // japonés
			`[CRITICAL]급소율[/CRITICAL]이 25% 증가합니다.`, // coreano
			`[CRITICAL]暴击率[/CRITICAL]提高25%。`, // chino
			`Zwiększa [CRITICAL]szansę na trafienie krytyczne[/CRITICAL] o 25%.` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173],
			attackType: 'aura'
		}
	},
	clover: {
		id: 'clover',
		name: [
			"Clover",
			"Trébol",
			"Trèfle",
			"Trefle",
			"Trifoglio",
			"Klee",
			"クローバー",
			"클로버",
			"三叶草",
			"Clover"
		],
		tags: ['critical'],
		sprite: './src/assets/images/items/clover-sweet.png',
		price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases [CRITICAL]critical damage[/CRITICAL] by 50%.`, // inglés
			`Aumenta el [CRITICAL]daño crítico[/CRITICAL] en un 50%.`, // español
			`Augmente les [CRITICAL]dégâts critiques[/CRITICAL] de 50 %.`, // francés
			`Aumenta o [CRITICAL]dano crítico[/CRITICAL] em 50%.`, // portugués
			`Aumenta il [CRITICAL]danno critico[/CRITICAL] del 50%.`, // italiano
			`Erhöht den [CRITICAL]kritischen Schaden[/CRITICAL] um 50 %.`, // alemán
			`[CRITICAL]急所ダメージ[/CRITICAL]が50%増加する。`, // japonés
			`[CRITICAL]급소 피해[/CRITICAL]가 50% 증가합니다.`, // coreano
			`[CRITICAL]暴击伤害[/CRITICAL]提高50%。`, // chino
			`Zwiększa [CRITICAL]obrażenia krytyczne[/CRITICAL] o 50%.` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173],
			attackType: 'aura'
		}
	},
	sunflowerPetal: {
		id: 'sunflowerPetal',
		name: [
			"Sunflower Petal",
			"Pétalo de Girasol",
			"Pétale de Tournesol",
			"Pétala de Girassol",
			"Petalo di Girasole",
			"Sonnenblütenblatt",
			"ひまわりのはなびら",
			"해바라기 꽃잎",
			"向日葵花瓣",
			"Płatek Słonecznika"
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/petal-yellow.png',
		price: 300000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`The [ABILITY]Power Aura ability[/ABILITY] now grants an additional +15% [POWER]power[/POWER], but reduces the holder's [RANGE]range[/RANGE] by 40. Must be held by [POKEMON]Sunflora[/POKEMON].`, // inglés
			`La [ABILITY]habilidad Aura Poderosa[/ABILITY] ahora otorga un +15% adicional de [POWER]potencia[/POWER], pero reduce el [RANGE]alcance[/RANGE] del portador en 40. Debe ser equipada por [POKEMON]Sunflora[/POKEMON].`, // español
			`La [ABILITY]capacité Aura de Puissance[/ABILITY] confère désormais +15 % supplémentaires de [POWER]puissance[/POWER], mais réduit la [RANGE]portée[/RANGE] du porteur de 40. Doit être détenue par [POKEMON]Héliatronc[/POKEMON].`, // francés
			`A [ABILITY]habilidade Aura de Poder[/ABILITY] agora concede +15% adicional de [POWER]poder[/POWER], mas reduz o [RANGE]alcance[/RANGE] do portador em 40. Deve ser segurada por [POKEMON]Sunflora[/POKEMON].`, // portugués
			`L'[ABILITY]abilità Aureola Potere[/ABILITY] ora concede un ulteriore +15% alla [POWER]potenza[/POWER], ma riduce la [RANGE]portata[/RANGE] di chi la possiede di 40. Deve essere posseduta da [POKEMON]Sunflora[/POKEMON].`, // italiano
			`Die [ABILITY]Fähigkeit Kraftkoloss[/ABILITY] gewährt nun zusätzlich +15 % [POWER]Kraft[/POWER], verringert jedoch die [RANGE]Reichweite[/RANGE] des Trägers um 40. Muss von [POKEMON]Sonnflora[/POKEMON] getragen werden.`, // alemán
			`[ABILITY]パワーオーラ[/ABILITY]は、[POWER]威力[/POWER]をさらに15%増加させるが、所持者の[RANGE]射程[/RANGE]を40減少させるようになった。[POKEMON]キマワリ[/POKEMON]が持っている必要がある。`, // japonés
			`[ABILITY]파워 오라[/ABILITY] 특성은 이제 [POWER]위력[/POWER]을 추가로 15% 증가시키지만, 소지자의 [RANGE]사거리[/RANGE]를 40 감소시킵니다. [POKEMON]해루미[/POKEMON]가 가지고 있어야 합니다.`, // coreano
			`[ABILITY]力量光环[/ABILITY]特性现在额外使[POWER]威力[/POWER]提高15%，但使持有者的[RANGE]攻击范围[/RANGE]降低40。必须由[POKEMON]向日花怪[/POKEMON]持有。`, // chino
			`Zdolność [ABILITY]Aura Mocy[/ABILITY] zapewnia teraz dodatkowe +15% [POWER]mocy[/POWER], ale zmniejsza [RANGE]zasięg[/RANGE] posiadacza o 40. Musi być posiadana przez [POKEMON]Sunflora[/POKEMON].` // polaco
		],
		condition: {
			id: [19]
		}
	},
	cherryBlossom: {
		id: 'cherryBlossom',
		name: [
			"Cherry Blossom",
			"Flor de Cerezo",
			"Fleur de Cerisier",
			"Flor de Cerejeira",
			"Fiore di Ciliegio",
			"Kirschblüte",
			"さくらのはな",
			"벚꽃",
			"樱花",
			"Kwiat Wiśni"
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/petal-pink.png',
		price: 300000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`It fits [POKEMON]Cherrim[/POKEMON] perfectly and allows it to launch [PROJECTILE]projectiles[/PROJECTILE] at an additional [ENEMY]enemy[/ENEMY].`, // inglés
			`Le queda perfectamente a [POKEMON]Cherrim[/POKEMON] y le permite lanzar [PROJECTILE]proyectiles[/PROJECTILE] contra un [ENEMY]enemigo[/ENEMY] adicional.`, // español
			`Il convient parfaitement à [POKEMON]Ceriflor[/POKEMON] et lui permet de lancer des [PROJECTILE]projectiles[/PROJECTILE] sur un [ENEMY]ennemi[/ENEMY] supplémentaire.`, // francés
			`Encaixa perfeitamente em [POKEMON]Cherrim[/POKEMON] e permite que lance [PROJECTILE]projéteis[/PROJECTILE] contra um [ENEMY]inimigo[/ENEMY] adicional.`, // portugués
			`Si adatta perfettamente a [POKEMON]Cherrim[/POKEMON] e gli permette di lanciare [PROJECTILE]proiettili[/PROJECTILE] contro un [ENEMY]nemico[/ENEMY] aggiuntivo.`, // italiano
			`Passt perfekt zu [POKEMON]Kinoso[/POKEMON] und ermöglicht es ihm, [PROJECTILE]Projektile[/PROJECTILE] auf einen zusätzlichen [ENEMY]Gegner[/ENEMY] abzufeuern.`, // alemán
			`[POKEMON]チェリム[/POKEMON]にぴったり合い、追加の[ENEMY]敵[/ENEMY]に[PROJECTILE]弾[/PROJECTILE]を発射できるようになる。`, // japonés
			`[POKEMON]체리꼬[/POKEMON]에게 완벽하게 맞으며, 추가 [ENEMY]적[/ENEMY]에게 [PROJECTILE]투사체[/PROJECTILE]를 발사할 수 있게 합니다.`, // coreano
			`与[POKEMON]樱花儿[/POKEMON]完美契合，并使其能够向额外的[ENEMY]敌人[/ENEMY]发射[PROJECTILE]投射物[/PROJECTILE]。`, // chino
			`Idealnie pasuje do [POKEMON]Cherrim[/POKEMON] i pozwala mu wystrzeliwać [PROJECTILE]pociski[/PROJECTILE] w dodatkowego [ENEMY]wroga[/ENEMY].` // polaco
		],
		condition: {
			id: [75]
		}
	},
	focusBand: {
		id: 'focusBand',
		name: [
			"Focus Band",
			"Banda Focus",
			"Bandeau",
			"Banda Focus",
			"Bandana",
			"Fokus-Band",
			"きあいのハチマキ",
			"기합의머리띠",
			"气势头带",
			"Focus Band"
		],
		tags: ['power'],
		sprite: './src/assets/images/items/focus-band.png',
		price: 0,
		tier: 'legendary',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Each consecutive attack against the same target increases the damage dealt by 5%. Usable only by [POKEMON]Pokémon[/POKEMON] that fire [PROJECTILE]projectiles[/PROJECTILE].`, // inglés
			`Cada ataque consecutivo contra el mismo objetivo aumenta el daño infligido en un 5%. Solo pueden usarlo los [POKEMON]Pokémon[/POKEMON] que disparan [PROJECTILE]proyectiles[/PROJECTILE].`, // español
			`Chaque attaque consécutive contre la même cible augmente les dégâts infligés de 5 %. Utilisable uniquement par les [POKEMON]Pokémon[/POKEMON] qui tirent des [PROJECTILE]projectiles[/PROJECTILE].`, // francés
			`Cada ataque consecutivo contra o mesmo alvo aumenta o dano causado em 5%. Usável apenas por [POKEMON]Pokémon[/POKEMON] que disparam [PROJECTILE]projéteis[/PROJECTILE].`, // portugués
			`Ogni attacco consecutivo contro lo stesso bersaglio aumenta i danni inflitti del 5%. Utilizzabile solo dai [POKEMON]Pokémon[/POKEMON] che lanciano [PROJECTILE]proiettili[/PROJECTILE].`, // italiano
			`Jeder aufeinanderfolgende Angriff gegen dasselbe Ziel erhöht den verursachten Schaden um 5 %. Nur von [POKEMON]Pokémon[/POKEMON] verwendbar, die [PROJECTILE]Projektile[/PROJECTILE] abfeuern.`, // alemán
			`同じ対象への連続攻撃は、与えるダメージが5%ずつ増加する。[PROJECTILE]弾[/PROJECTILE]を発射する[POKEMON]ポケモン[/POKEMON]のみ使用できる。`, // japonés
			`같은 대상을 연속으로 공격할 때마다 주는 피해가 5% 증가합니다. [PROJECTILE]투사체[/PROJECTILE]를 발사하는 [POKEMON]포켓몬[/POKEMON]만 사용할 수 있습니다.`, // coreano
			`每次连续攻击同一目标，造成的伤害提高5%。仅限发射[PROJECTILE]投射物[/PROJECTILE]的[POKEMON]宝可梦[/POKEMON]使用。`, // chino
			`Każdy kolejny atak na ten sam cel zwiększa zadawane obrażenia o 5%. Mogą tego używać tylko [POKEMON]Pokémony[/POKEMON], które wystrzeliwują [PROJECTILE]pociski[/PROJECTILE].` // polaco
		],
		condition: {
			attackType: 'single'
		},
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173, 53],
			ability: [
				'solarBeam', 'hydroCannon', 'zapCannon', 'hyperBeam', 'meteorBeam', 'boomburst', 'secretSword', 'liquidVoice', 'drumBeating', 'anchorShot', 'iceBeam', 'machBolt',
				'originPulse', 'steelBeam', 'steamEruption', 'soulHeartReactor', 'charmedCharm', 'ceaselessEdge', 'psybeam', 'icyWind', 'psychoCutMega', 'psychoCut', 'emptyLight',
				'signalBeam', 'cryogenicCannon', 'dazzlingGleam',
			],
			attackType: 'aura'
		}
	},
	gimmighoul: {
		id: 'gimmighoul',
		name: [
		  	"Gimmighoul",
		  	"Gimmighoul",
		  	"Mordudor",
		  	"Gimmighoul",
		  	"Gimmighoul",
		  	"Gierspenst",
		  	"コレクレー",
		  	"모으령",
		  	"索财灵",
		  	"Gimmighoul"
		],
		tags: [],
		sprite: './src/assets/images/items/gimmighoul.png',
		price: 10000000000,
		tier: 'luxury',
		isEquipable: false,
		description: [
			`Unlocks [POKEMON]Gholdengo[/POKEMON].`, // inglés
			`Desbloquea a [POKEMON]Gholdengo[/POKEMON].`, // español
			`Débloque [POKEMON]Gromago[/POKEMON].`, // francés
			`Desbloqueia o [POKEMON]Gholdengo[/POKEMON].`, // portugués
			`Sblocca [POKEMON]Gholdengo[/POKEMON].`, // italiano
			`Schaltet [POKEMON]Gladimperio[/POKEMON] frei.`, // alemán
			`[POKEMON]サーフゴー[/POKEMON]を解禁する。`, // japonés
			`[POKEMON]타부자고[/POKEMON]를 해금합니다.`, // coreano
			`解锁[POKEMON]赛富豪[/POKEMON]。`, // chino
			`Odblokowuje [POKEMON]Gholdengo[/POKEMON].` // polaco
		],
	},
	alakazite: {
		id: 'alakazite',
		name: [
			"Alakazite",
			"Alakazita",
			"Alakazite",
			"Alakazite",
			"Alakazite",
			"Simsalanit",
			"アクアカザイト",
			"알라카자이트",
			"胡地石",
			"Alakazite"
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/alakazite.png',
		price: 100000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`You feel a bit smarter holding this thing... but that might just be the overflowing [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Te sientes un poco más inteligente al sostener esto... pero puede que solo sea por la Energía Infinita que rebosa.`, // español
			`Tu te sens un peu plus intelligent en tenant ça... mais c'est peut-être simplement à cause de l'Énergie Infinie qui déborde.`, // francés
			`Você se sente um pouco mais inteligente segurando isso... mas pode ser apenas por causa da Energia Infinita que transborda.`, // portugués
			`Ti senti un po' più intelligente tenendo in mano questa cosa... ma potrebbe essere solo a causa dell'Energia Infinita che trabocca.`, // italiano
			`Du fühlst dich beim Halten dieses Dings ein bisschen schlauer... aber das liegt vielleicht nur an der überströmenden Unendlichen Energie.`, // alemán
			`これを持っていると、少し頭がよくなった気がする……でも、あふれ出すインフィニティエネルギーのせいかもしれない。`, // japonés
			`이걸 들고 있으면 조금 더 똑똑해진 기분이 들어... 하지만 그저 넘쳐흐르는 인피니티 에너지 때문일지도 몰라.`, // coreano
			`拿着这个东西，你感觉自己好像聪明了一点……不过可能只是因为其中溢出的无限能量。`, // chino
			`Trzymając to, czujesz się trochę mądrzejszy... ale to może być tylko efekt przepełniającej je Nieskończonej Energii.` // polaco
		],
		condition: {
			key: 'alakazam'
		}
	},
	absolite: {
		id: 'absolite',
		name: [
			"Absolite",
			"Absolita",
			"Absolite",
			"Absolite",
			"Absolite",
			"Absolnit",
			"アブソルナイト",
			"앱솔라이트",
			"阿勃梭鲁石",
			"Absolite"
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/absolite.png',
		price: 100000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`A bit chilly to the touch, it feels rather graceful... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Está un poco fría al tacto y se siente bastante elegante... Está rebosando de Energía Infinita.`, // español
			`Un peu froid au toucher, il semble plutôt élégant... Il déborde d'Énergie Infinie.`, // francés
			`Um pouco frio ao toque, parece bastante elegante... Está transbordando de Energia Infinita.`, // portugués
			`Un po' freddo al tatto, sembra piuttosto elegante... È traboccante di Energia Infinita.`, // italiano
			`Etwas kühl bei Berührung, fühlt es sich recht elegant an... Es quillt über vor Unendlicher Energie.`, // alemán
			`触れると少しひんやりしていて、とても優雅な感じがする……インフィニティエネルギーがあふれている。`, // japonés
			`만져보면 조금 서늘하고 꽤 우아한 느낌이야... 인피니티 에너지가 넘쳐흐르고 있어.`, // coreano
			`摸起来有点凉，感觉相当优雅……里面充满了无限能量。`, // chino
			`W dotyku jest trochę chłodne i wydaje się dość eleganckie... Przepełnia je Nieskończona Energia.` // polaco
		],
		condition: {
			key: 'absol'
		}
	},
	sceptilite: {
		id: 'sceptilite',
		name: [
			"Sceptilite",
			"Sceptilita",
			"Sceptilite",
			"Sceptilite",
			"Sceptilite",
			"Gewaldronit",
			"ジュカインナイト",
			"쟈카인나이트",
			"蜥蜴王之石",
			"Sceptilite"
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/sceptilite.png',
		price: 100000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`A bit prickly, yet smooth somehow... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Un poco espinoso, pero de alguna manera suave... Está rebosando de Energía Infinita.`, // español
			`Un peu piquant, mais étonnamment lisse... Ça déborde d'Énergie Infinie.`, // francés
			`Um pouco espinhoso, mas de alguma forma macio... Está transbordando de Energia Infinita.`, // portugués
			`Un po' pungente, eppure in qualche modo liscio... È traboccante di Energia Infinita.`, // italiano
			`Etwas stachelig, aber irgendwie glatt... Es quillt über vor Unendlicher Energie.`, // alemán
			`少しトゲトゲしているのに、なぜか滑らか……インフィニティエネルギーがあふれている。`, // japonés
			`조금 까칠한데도 왠지 매끄러워... 인피니티 에너지가 넘쳐흐르고 있어.`, // coreano
			`摸起来有点扎手，却又莫名光滑……里面充满了无限能量。`, // chino
			`Trochę kłuje, a jednak jest w jakiś sposób gładkie... Przepełnia je Nieskończona Energia.` // polaco
		],
		condition: {
			key: 'sceptile'
		}
	},
	charizarditeX: {
		id: 'charizarditeX',
		name: [
			"Charizardite X",
			"Charizardita X",
			"Charizardite X",
			"Charizardite X",
			"Charizardite X",
			"Gluraknit X",
			"リザードナイトX",
			"리자몽나이트 X",
			"喷火龙之石X",
			"Charizardite X"
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/charizardite-x.png',
		price: 100000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Hot with a bit of a rough texture... It's overflowing with [MEGA]Infinity Energy[/MEGA]...`, // inglés
			`Caliente y con una textura un poco áspera... Está rebosando de Energía Infinita...`, // español
			`Chaud avec une texture un peu rugueuse... Il déborde d'Énergie Infinie...`, // francés
			`Quente e com uma textura um pouco áspera... Está transbordando de Energia Infinita...`, // portugués
			`Caldo e con una consistenza un po' ruvida... È traboccante di Energia Infinita...`, // italiano
			`Heiß und mit einer etwas rauen Textur... Es quillt über vor Unendlicher Energie...`, // alemán
			`熱くて、少しざらざらした手触り……インフィニティエネルギーがあふれている……`, // japonés
			`뜨겁고 약간 거친 질감이야... 인피니티 에너지가 넘쳐흐르고 있어...`, // coreano
			`很烫，摸起来有点粗糙……里面充满了无限能量……`, // chino
			`Gorące i trochę szorstkie w dotyku... Przepełnia je Nieskończona Energia...` // polaco
		],
		condition: {
			key: 'charizard'
		}
	},
	tinyMushroom: {
		id: 'tinyMushroom',
		name: [
			"Tiny Mushroom",
			"Miniseta",
			"Petit Champignon",
			"Mini Cogumelo",
			"Minifungo",
			"Minipilz",
			"ちいさなキノコ",
			"작은버섯",
			"小蘑菇",
			"Tiny Mushroom",
		],
		tags: [],
		sprite: './src/assets/images/items/tiny-mushroom.png',
		price: 0,
		tier: 'luxury',
		isEquipable: false,
		description: [
			'Grants [MONEY]$500,000[/MONEY] when obtained.',
			'Otorga [MONEY]$500.000[/MONEY] al ser obtenida.',
			'Donne [MONEY]500 000 $[/MONEY] lorsqu’il est obtenu.',
			'Concede [MONEY]$500.000[/MONEY] ao ser obtido.',
			'Concede [MONEY]500.000 $[/MONEY] quando ottenuto.',
			'Gewährt [MONEY]$500.000[/MONEY] beim Erhalten.',
			'入手時に[MONEY]500,000[/MONEY]ドルがもらえる。',
			'획득 시 [MONEY]500,000$[/MONEY]를 제공한다.',
			'获得时可获得[MONEY]500,000$[/MONEY]。',
			'Przyznaje [MONEY]500 000 $[/MONEY] po zdobyciu.'
		],
		amount: 500000
	},
	rareBone: {
		id: 'rareBone',
		name: [
			"Rare Bone",
			"Hueso Raro",
			"Os Rare",
			"Osso Raro",
			"Osso Raro",
			"Seltenknochen",
			"きちょうなホネ",
			"귀한뼈",
			"贵重骨头",
			"Rare Bone",
		],
		tags: [],
		sprite: './src/assets/images/items/rare-bone.png',
		price: 0,
		tier: 'luxury',
		isEquipable: false,
		description: [
			'Grants [MONEY]$2,500,000[/MONEY] when obtained.',
			'Otorga [MONEY]$2.500.000[/MONEY] al ser obtenida.',
			'Donne [MONEY]2 500 000 $[/MONEY] lorsqu’il est obtenu.',
			'Concede [MONEY]$2.500.000[/MONEY] ao ser obtido.',
			'Concede [MONEY]2.500.000 $[/MONEY] quando ottenuto.',
			'Gewährt [MONEY]$2.500.000[/MONEY] beim Erhalten.',
			'入手時に[MONEY]2,500,000[/MONEY]ドルがもらえる。',
			'획득 시 [MONEY]2,500,000$[/MONEY]를 제공한다.',
			'获得时可获得[MONEY]2,500,000$[/MONEY]。',
			'Przyznaje [MONEY]2 500 000 $[/MONEY]po zdobyciu.'
		],
		amount: 2500000
	},
	slowpokeTail: {
		id: 'slowpokeTail',
		name: [
			"Slowpoke Tail",
			"Cola Slowpoke",
			"Queue Ramoloss",
			"Cauda de Slowpoke",
			"Coda di Slowpoke",
			"Flegmonrute",
			"おいしいシッポ",
			"맛있는꼬리",
			"美味尾巴",
			"Slowpoke Tail"
		],
		tags: [],
		sprite: './src/assets/images/items/slowpoke-tail.png',
		price: 0,
		tier: 'luxury',
		isEquipable: false,
		description: [
			'Grants [MONEY]$50,000,000[/MONEY] when obtained.',
			'Otorga [MONEY]$50.000.000[/MONEY] al ser obtenida.',
			'Donne [MONEY]50 000 000 $[/MONEY] lorsqu’il est obtenu.',
			'Concede [MONEY]$50.000.000[/MONEY] ao ser obtido.',
			'Concede [MONEY]50.000.000 $[/MONEY] quando ottenuto.',
			'Gewährt [MONEY]$50.000.000[/MONEY] beim Erhalten.',
			'入手時に[MONEY]50,000,000[/MONEY]ドルがもらえる。',
			'획득 시 [MONEY]50,000,000$[/MONEY]를 제공한다.',
			'获得时可获得[MONEY]50,000,000$[/MONEY]。',
			'Przyznaje [MONEY]50 000 000 $[/MONEY] po zdobyciu.'
		],
		amount: 50000000
	},
	pearl: {
	    id: 'pearl',
	    name: [
	        "Pearl",
	        "Perla",
	        "Perle",
	        "Perla",
	        "Perla",
	        "Perle",
	        "しんじゅ",
	        "진주",
	        "珍珠",
	        "Pearl",
	    ],
		tags: [],
		sprite: './src/assets/images/items/pearl.png',
		price: 0,
		tier: 'luxury',
		isEquipable: false,
		description: [
			'Grants [MONEY]$250,000,000[/MONEY] when obtained.',
			'Otorga [MONEY]$250.000.000[/MONEY] al ser obtenida.',
			'Donne [MONEY]250 000 000 $[/MONEY] lorsqu’il est obtenu.',
			'Concede [MONEY]$250.000.000[/MONEY] ao ser obtido.',
			'Concede [MONEY]250.000.000 $[/MONEY] quando ottenuto.',
			'Gewährt [MONEY]$250.000.000[/MONEY] beim Erhalten.',
			'入手時に[MONEY]250,000,000[/MONEY]ドルがもらえる。',
			'획득 시 [MONEY]250,000,000$[/MONEY]를 제공한다.',
			'获得时可获得[MONEY]250,000,000$[/MONEY]。',
			'Przyznaje [MONEY]250 000 000 $[/MONEY] po zdobyciu.'
		],
		amount: 250000000
	},
	shoalShell: {
	    id: 'shoalShell',
	    name: [
	        "Shoal Shell",
	        "Concha Cardumen",
	        "Coquille Sel",
	        "Guscio Ondoso",
	        "Concha Cardume",
	        "Küstenmuschel",
	        "あじおのうろこ",
	        "여울조개껍질",
	        "浅滩海贝",
	        "Shoal Shell",
	    ],
	    tags: [],
	    sprite: './src/assets/images/items/shoal-shell.png',
		price: 0,
		tier: 'luxury',
		isEquipable: false,
		description: [
			'Grants [MONEY]$500,000,000[/MONEY] when obtained.',
			'Otorga [MONEY]$500.000.000[/MONEY] al ser obtenida.',
			'Donne [MONEY]500 000 000 $[/MONEY] lorsqu’il est obtenu.',
			'Concede [MONEY]$500.000.000[/MONEY] ao ser obtido.',
			'Concede [MONEY]500.000.000 $[/MONEY] quando ottenuto.',
			'Gewährt [MONEY]$500.000.000[/MONEY] beim Erhalten.',
			'入手時に[MONEY]500,000,000[/MONEY]ドルがもらえる。',
			'획득 시 [MONEY]500,000,000$[/MONEY]를 제공한다.',
			'获得时可获得[MONEY]500,000,000$[/MONEY]。',
			'Przyznaje [MONEY]500 000 000 $[/MONEY] po zdobyciu.'
		],
		amount: 500000000
	},
	diamond: {
	    id: 'diamond',
	    name: [
		  	'Diamond',
		  	'Diamante',
		  	'Diamant',
		  	'Diamante',
		  	'Diamante',
		  	'Diamant',
		  	'ダイヤモンド',
		  	'다이아몬드',
		  	'鑽石',
		  	'Diament'
		],
	    tags: [],
	    sprite: './src/assets/images/items/diamond.png',
		price: 0,
		tier: 'luxury',
		isEquipable: false,
		description: [
			'Grants [MONEY]$777,777,777[/MONEY] when obtained.',
			'Otorga [MONEY]$777.777.777[/MONEY] al ser obtenida.',
			'Donne [MONEY]777 777 777 $[/MONEY] lorsqu’il est obtenu.',
			'Concede [MONEY]$777.777.777[/MONEY] ao ser obtido.',
			'Concede [MONEY]777.777.777 $[/MONEY] quando ottenuto.',
			'Gewährt [MONEY]$777.777.777[/MONEY] beim Erhalten.',
			'入手時に[MONEY]777,777,777[/MONEY]ドルがもらえる。',
			'획득 시 [MONEY]777,777,777$[/MONEY]를 제공한다.',
			'获得时可获得[MONEY]777,777,777$[/MONEY]。',
			'Przyznaje [MONEY]777 777 777 $[/MONEY] po zdobyciu.'
		],
		amount: 777777777
	},
	nugget: {
	    id: 'nugget',
	    name: [
		  	'Nugget',
		  	'Pepita',
		  	'Pépite',
		  	'Pepita',
		  	'Pepita',
		  	'Nugget',
		  	'きんのたま',
		  	'금구슬',
		  	'金珠',
		  	'Samorodek'
		],
	    tags: [],
	    sprite: './src/assets/images/items/nugget.png',
		price: 0,
		tier: 'luxury',
		isEquipable: false,
		description: [
			'Grants [MONEY]$850,000,000[/MONEY] when obtained.',
			'Otorga [MONEY]$850.000.000[/MONEY] al ser obtenida.',
			'Donne [MONEY]850 000 000 $[/MONEY] lorsqu’il est obtenu.',
			'Concede [MONEY]$850.000.000[/MONEY] ao ser obtido.',
			'Concede [MONEY]850.000.000 $[/MONEY] quando ottenuto.',
			'Gewährt [MONEY]$850.000.000[/MONEY] beim Erhalten.',
			'入手時に[MONEY]850,000,000[/MONEY]ドルがもらえる。',
			'획득 시 [MONEY]850,000,000$[/MONEY] 제공한다.',
			'获得时可获得[MONEY]850,000,000$[/MONEY]。',
			'Przyznaje [MONEY]850 000 000 $[/MONEY] po zdobyciu.'
		],
		amount: 850000000
	},
	crown: {
	    id: 'crown',
	    name: [
		  	'Crown',
		  	'Corona',
		  	'Couronne',
		  	'Coroa',
		  	'Corona',
		  	'Krone',
		  	'おうかん',
		  	'왕관',
		  	'王冠',
		  	'Korona'
		],
	    tags: [],
	    sprite: './src/assets/images/items/crown.png',
		price: 0,
		tier: 'luxury',
		isEquipable: false,
		description: [
			'Grants [MONEY]$1,000,000,000[/MONEY] when obtained.',
			'Otorga [MONEY]$1.000.000.000[/MONEY] al ser obtenida.',
			'Donne [MONEY]1 000 000 000 $[/MONEY] lorsqu’il est obtenu.',
			'Concede [MONEY]$1.000.000.000[/MONEY] ao ser obtido.',
			'Concede [MONEY]1.000.000.000 $[/MONEY] quando ottenuto.',
			'Gewährt [MONEY]$1.000.000.000[/MONEY] beim Erhalten.',
			'入手時に[MONEY]1,000,000,000[/MONEY]ドルがもらえる。',
			'획득 시 [MONEY]1,000,000,000$[/MONEY] 제공한다.',
			'获得时可获得[MONEY]1,000,000,000$[/MONEY]。',
			'Przyznaje [MONEY]1 000 000 000 $[/MONEY] po zdobyciu.'
		],
		amount: 1000000000
	},
	smallBouquet: {
	    id: 'smallBouquet',
	    name: [
		  	`Small Bouquet`, // inglés
			`Pequeño Ramo`, // español
			`Petit Bouquet`, // francés
			`Pequeno Buquê`, // portugués
			`Piccolo Bouquet`, // italiano
			`Kleiner Blumenstrauß`, // alemán
			`小さな花束`, // japonés
			`작은 꽃다발`, // coreano
			`小花束`, // chino
			`Mały Bukiet` // polaco
		],
	    tags: [],
	    sprite: './src/assets/images/items/small-bouquet.png',
		price: 0,
		tier: 'luxury',
		isEquipable: false,
		description: [
			'Grants [MONEY]$1,200,000,000[/MONEY] when obtained.',
			'Otorga [MONEY]$1.200.000.000[/MONEY] al ser obtenida.',
			'Donne[MONEY] 1 200 000 000 $[/MONEY] lorsqu’il est obtenu.',
			'Concede [MONEY]$1.200.000.000[/MONEY] ao ser obtido.',
			'Concede [MONEY]1.200.000.000 $[/MONEY] quando ottenuto.',
			'Gewährt [MONEY]$1.200.000.000[/MONEY] beim Erhalten.',
			'入手時に[MONEY]1,200,000,000[/MONEY]ドルがもらえる。',
			'획득 시 [MONEY]1,200,000,000$[/MONEY] 제공한다.',
			'获得时可获得[MONEY]1,200,000,000$[/MONEY]。',
			'Przyznaje [MONEY]1 200 000 000 $[/MONEY] po zdobyciu.'
		],
		amount: 1200000000
	},
	ruby: {
	    id: 'ruby',
	    name: [
			`Ruby`, // inglés
			`Rubí`, // español
			`Rubis`, // francés
			`Rubi`, // portugués
			`Rubino`, // italiano
			`Rubin`, // alemán
			`ルビー`, // japonés
			`루비`, // coreano
			`红宝石`, // chino
			`Rubin` // polaco
		],
	    tags: [],
	    sprite: './src/assets/images/items/ruby.png',
		price: 0,
		tier: 'luxury',
		isEquipable: false,
		description: [
			'Grants [MONEY]$1,500,000,000[/MONEY] when obtained.',
			'Otorga [MONEY]$1.500.000.000[/MONEY] al ser obtenida.',
			'Donne [MONEY]1 500 000 000 $[/MONEY] lorsqu’il est obtenu.',
			'Concede [MONEY]$1.500.000.000[/MONEY] ao ser obtido.',
			'Concede [MONEY]1.500.000.000 $[/MONEY] quando ottenuto.',
			'Gewährt [MONEY]$1.500.000.000[/MONEY] beim Erhalten.',
			'入手時に[MONEY]1,500,000,000[/MONEY]ドルがもらえる。',
			'획득 시 [MONEY]1,500,000,000$[/MONEY] 제공한다.',
			'获得时可获得[MONEY]1,500,000,000$[/MONEY]。',
			'Przyznaje [MONEY]1 500 000 000 $[/MONEY] po zdobyciu.'
		],
		amount: 1500000000
	},
	flygonite: {
		id: 'flygonite',
		name: [
			'Flygonite',
		    'Flygonita',
		    'Libégonite',
		    'Flygonite',
		    'Flygonite',
		    'Libelldranit',
		    'フライゴンナイト',
		    '플라이곤나이트',
		    '沙漠蜻蜓之石',
		    'Flygonite'
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/flygonite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`You feel a bit of joy holding this thing... If only it were real. It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Sientes un poco de alegría al sostener esto... Ojalá fuera real. Está rebosando de Energía Infinita.`, // español
			`Tu ressens un peu de joie en tenant cette chose... Si seulement elle était réelle. Elle déborde d'Énergie Infinie.`, // francés
			`Você sente um pouco de alegria ao segurar isso... Se ao menos fosse real. Está transbordando de Energia Infinita.`, // portugués
			`Provi un po' di gioia tenendo questa cosa... Se solo fosse reale. È traboccante di Energia Infinita.`, // italiano
			`Du verspürst ein wenig Freude, während du dieses Ding hältst... Wenn es doch nur echt wäre. Es quillt über vor Unendlicher Energie.`, // alemán
			`これを持っていると、少し嬉しい気持ちになる……これが本物だったらいいのに。インフィニティエネルギーがあふれている。`, // japonés
			`이것을 들고 있으면 조금 기분이 좋아져... 이것이 진짜라면 좋을 텐데. 인피니티 에너지가 넘쳐흐르고 있어.`, // coreano
			`拿着这个东西时，你感到一丝喜悦……要是它是真的就好了。里面充满了无限能量。`, // chino
			`Czujesz odrobinę radości, trzymając to w dłoni... Gdyby tylko było prawdziwe. Przepełnia je Nieskończona Energia.` // polaco
		],
		condition: {
			key: 'flygon'
		}
	},
	barbaraclite: {
		id: 'barbaraclite',
		name: [
			'Barbaraclite',
		    'Barbaraclita',
		    'Golgopathite',
		    'Barbaraclite',
		    'Barbaraclite',
		    'Thanathoranit',
		    'ガメノデスナイト',
		    '거북손데스나이트',
		    '獨島殼王之石',
		    'Barbaraclite'
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/barbaraclite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Smells a little like salt, have to dust a bit of sand off of it... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Huele un poco a sal, hay que quitarle un poco de arena... Está rebosando de Energía Infinita.`, // español
			`Ça sent un peu le sel, il faut enlever un peu de sable... Ça déborde d'Énergie Infinie.`, // francés
			`Tem um leve cheiro de sal, é preciso tirar um pouco de areia... Está transbordando de Energia Infinita.`, // portugués
			`Odora un po' di sale, bisogna togliere un po' di sabbia... È traboccante di Energia Infinita.`, // italiano
			`Es riecht ein wenig nach Salz, man muss etwas Sand davon abwischen... Es quillt über vor Unendlicher Energie.`, // alemán
			`少し塩のような匂いがして、砂を少し払わないといけない……インフィニティエネルギーがあふれている。`, // japonés
			`약간 소금 냄새가 나고, 묻은 모래를 조금 털어내야 해... 인피니티 에너지가 넘쳐흐르고 있어.`, // coreano
			`闻起来有点像盐，还得把上面的沙子掸掉一些……里面充满了无限能量。`, // chino
			`Pachnie trochę solą, trzeba strzepnąć z niego trochę piasku... Przepełnia go Nieskończona Energia.` // polaco
		],
		condition: {
			key: 'barbaracle'
		}
	},
	ampharosite: {
		id: 'ampharosite',
		name: [
			'Ampharosite',
			'Ampharosita',
			'Pharampite',
			'Ampharosita',
			'Ampharosite',
			'Ampharosnit',
			'デンリュウナイト',
			'전룡나이트',
			'電龍進化石',
			'Ampharosyt'
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/ampharosite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`It's a bit warm and electric to the touch... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Está un poco caliente y se siente eléctrica al tacto... Está rebosando de Energía Infinita.`, // español
			`C'est un peu chaud et électrique au toucher... Ça déborde d'Énergie Infinie.`, // francés
			`Está um pouco quente e elétrica ao toque... Está transbordando de Energia Infinita.`, // portugués
			`È un po' caldo ed elettrico al tatto... È traboccante di Energia Infinita.`, // italiano
			`Es ist etwas warm und fühlt sich elektrisch an... Es quillt über vor Unendlicher Energie.`, // alemán
			`少し温かくて、触れると電気を感じる……インフィニティエネルギーがあふれている。`, // japonés
			`조금 따뜻하고 만지면 전기가 느껴져... 인피니티 에너지가 넘쳐흐르고 있어.`, // coreano
			`摸起来有点温暖，还有电流感……里面充满了无限能量。`, // chino
			`Jest trochę ciepłe i elektryczne w dotyku... Przepełnia je Nieskończona Energia.` // polaco
		],
		condition: {
			key: 'ampharos'
		}
	},
	pidgeotite: {
		id: 'pidgeotite',
		name: [
			"Pidgeotite",
			"Pidgeotita",
			"Pidgeotite",
			"Pidgeotite",
			"Pidgeotite",
			"Taubossnit",
			"ピジョットナイト",
			"피조트나이트",
			"大比鸟石",
			"Pidgeotite"
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/pidgeotite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`You feel rather grand while holding this orb... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Te sientes bastante majestuoso al sostener este orbe... Está rebosando de Energía Infinita.`, // español
			`Tu te sens plutôt majestueux en tenant cet orbe... Il déborde d'Énergie Infinie.`, // francés
			`Você se sente bastante grandioso ao segurar este orbe... Está transbordando de Energia Infinita.`, // portugués
			`Ti senti piuttosto maestoso mentre tieni questa sfera... È traboccante di Energia Infinita.`, // italiano
			`Du fühlst dich ziemlich erhaben, während du diese Kugel hältst... Sie quillt über vor Unendlicher Energie.`, // alemán
			`このオーブを持っていると、なんだかとても堂々とした気分になる……インフィニティエネルギーがあふれている。`, // japonés
			`이 오브를 들고 있으면 왠지 위엄이 느껴져... 인피니티 에너지가 넘쳐흐르고 있어.`, // coreano
			`拿着这个宝珠时，你感觉自己格外威严……里面充满了无限能量。`, // chino
			`Trzymając tę kulę, czujesz się niezwykle dostojnie... Przepełnia ją Nieskończona Energia.` // polaco
		],
		condition: {
			key: 'pidgeot'
		}
	},
	sablenite: {
		id: 'sablenite',
		name: [
			"Sablenite",
			"Sablenita",
			"Ténéfixite",
			"Sablenite",
			"Sablenite",
			"Zobirisnit",
			"ヤミラミナイト",
			"깜까미나이트",
			"勾魂眼石",
			"Sablenite"
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/sablenite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`You feel like you can't take your eyes off of this thing... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Sientes que no puedes apartar la mirada de esto... Está rebosando de Energía Infinita.`, // español
			`Tu as l'impression de ne pas pouvoir détacher les yeux de cette chose... Elle déborde d'Énergie Infinie.`, // francés
			`Você sente que não consegue tirar os olhos disso... Está transbordando de Energia Infinita.`, // portugués
			`Ti senti come se non riuscissi a distogliere lo sguardo da questa cosa... È traboccante di Energia Infinita.`, // italiano
			`Du hast das Gefühl, den Blick nicht von diesem Ding abwenden zu können... Es quillt über vor Unendlicher Energie.`, // alemán
			`これから目を離せないような気がする……インフィニティエネルギーがあふれている。`, // japonés
			`이것에서 눈을 뗄 수 없을 것 같아... 인피니티 에너지가 넘쳐흐르고 있어.`, // coreano
			`你感觉自己无法将视线从这个东西上移开……里面充满了无限能量。`, // chino
			`Masz wrażenie, że nie możesz oderwać wzroku od tego przedmiotu... Przepełnia go Nieskończona Energia.` // polaco
		],
		condition: {
			key: 'sableye'
		}
	},
	magmaStone: {
		id: 'magmaStone',
		name: [
			"Magma Stone",
			"Magma Stone",
			"Magma Stone",
			"Magma Stone",
			"Magma Stone",
			"Magma Stone",
			"ひでりのいし",
			"뜨거운바위",
			"熱岩",
			"Magma Stone",
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/magma-stone.png',
		price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases [BURN]burn[/BURN] duration to 20 seconds.`, // inglés
			`Aumenta la duración de [BURN]quemadura[/BURN] a 20 segundos.`, // español
			`Augmente la durée de la [BURN]brûlure[/BURN] à 20 secondes.`, // francés
			`Aumenta a duração da [BURN]queimadura[/BURN] para 20 segundos.`, // portugués
			`Aumenta la durata della [BURN]scottatura[/BURN] a 20 secondi.`, // italiano
			`Erhöht die Dauer der [BURN]Verbrennung[/BURN] auf 20 Sekunden.`, // alemán
			`[BURN]やけど[/BURN]の持続時間が20秒になる。`, // japonés
			`[BURN]화상[/BURN] 지속 시간이 20초로 증가한다.`, // coreano
			`[BURN]灼伤[/BURN]的持续时间延长至20秒。`, // chino
			`Wydłuża czas trwania efektu [BURN]podpalenia[/BURN] do 20 sekund.` // polaco
		],
		condition: { 
			ability: [
				'burn', 'flamethrower', 'burnSplash', 'magmaStorm', 'burnDoubleShot', 'flameWheel', 'drought', 'willOWisp', 'burnNerf', 'lavaPlume', 'fireLash', 
				'triAttack', 'flameBody', 'precipiceBlades', 'steamEruption', 'sacredFire', 'volcanicKaboom', 'spicySpray', 'burnRicochet',
			]
		},
		restriction: {
			id: [70, 173]
		}
	},
	jadeOrb: {
	    id: 'jadeOrb',
	    name: [
	        "Jade Orb",
	        "Esfera Jade",
	        "Orbe Jade",
	        "Jade-Orb",
	        "Sfera di Giada",
	        "Esfera de Jade",
	        "べにいろのたま",
	        "주옥",
	        "朱红色宝珠",
	        "Jadeitowa Kula"
	    ],
	    tags: ['utility'],
	    sprite: './src/assets/images/items/jade-orb.png',
		price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: false,
		description: [
			`Increases the number of [PROJECTILE]orbitals[/PROJECTILE] by 2.`, // inglés
			`Aumenta en 2 el número de [PROJECTILE]proyectiles orbitales[/PROJECTILE].`, // español
			`Augmente de 2 le nombre de [PROJECTILE]projectiles en orbite[/PROJECTILE].`, // francés
			`Aumenta em 2 o número de [PROJECTILE]projéteis orbitais[/PROJECTILE].`, // portugués
			`Aumenta di 2 il numero di [PROJECTILE]proiettili orbitanti[/PROJECTILE].`, // italiano
			`Erhöht die Anzahl der [PROJECTILE]Umlaufprojektile[/PROJECTILE] um 2.`, // alemán
			`[PROJECTILE]周回弾[/PROJECTILE]の数が2増加する。`, // japonés
			`[PROJECTILE]궤도 투사체[/PROJECTILE]의 수가 2 증가한다.`, // coreano
			`[PROJECTILE]环绕投射物[/PROJECTILE]的数量增加2。`, // chino
			`Zwiększa liczbę [PROJECTILE]pocisków orbitalnych[/PROJECTILE] o 2.` // polaco
		],
		condition: { 
			orbital: true
		},
		restriction: {
			id: [70, 173],
			ability: ['sacredFire']
		},
	},
	lustrousOrb: {
	    id: 'lustrousOrb',
	    name: [
	        "Lustrous Orb",
	        "Esfera Lustrosa",
	        "Orbe Perlé",
	        "Weiß-Orb",
	        "Splendosfera",
	        "Esfera Lustrosa",
	        "しらたま",
	        "ب빛나는구슬",
	        "白玉宝珠",
	        "Lśniąca Kula"
	    ],
	    tags: ['utility'],
	    sprite: './src/assets/images/items/lustrous-orb.png',
		price: 400000,
		tier: 'common',
		isEquipable: true,
		isRetirable: false,
		description: [
			`Doubles the speed of [PROJECTILE]orbitals[/PROJECTILE].`, // inglés
			`Duplica la velocidad de los [PROJECTILE]orbitales[/PROJECTILE].`, // español
			`Double la vitesse des [PROJECTILE]projectiles orbitaux[/PROJECTILE].`, // francés
			`Duplica a velocidade dos [PROJECTILE]projéteis orbitais[/PROJECTILE].`, // portugués
			`Raddoppia la velocità dei [PROJECTILE]proiettili orbitanti[/PROJECTILE].`, // italiano
			`Verdoppelt die Geschwindigkeit der [PROJECTILE]Umlaufprojektile[/PROJECTILE].`, // alemán
			`[PROJECTILE]周回弾[/PROJECTILE]の速度が2倍になる。`, // japonés
			`[PROJECTILE]궤도 투사체[/PROJECTILE]의 속도가 두 배가 된다.`, // coreano
			`[PROJECTILE]环绕投射物[/PROJECTILE]的速度翻倍。`, // chino
			`Podwaja prędkość [PROJECTILE]pocisków orbitalnych[/PROJECTILE].` // polaco
		],
		condition: { 
			orbital: true,
			id: [148]
		},
		restriction: {
			id: [70, 173],
			ability: ['sacredFire']
		},
	},
	blimpKeys: {
	    id: 'blimpKeys',
	    name: [
	        "Blimp Keys",
	        "Llaves del Dirigible",
	        "Clés du Dirigeable",
	        "Chaves do Dirigível",
	        "Chiavi del Dirigibile",
	        "Zeppelin-Schlüssel",
	        "ひこうせんのかぎ",
	        "비행선 열쇠",
	        "飛船鑰匙",
	        "Klucze do Sterowca"
	    ],
	    tags: ['utility'],
	    sprite: './src/assets/images/items/blimp-keys.png',
	    price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: false,
	    description: [
			`[POKEMON]Drifblim[/POKEMON] follow your cursor. Their position can be anchored or released with a right-click.`, // inglés
			`Los [POKEMON]Drifblim[/POKEMON] siguen el cursor. Puedes fijar o liberar su posición con el botón derecho del ratón.`, // español
			`Les [POKEMON]Grodrive[/POKEMON] suivent votre curseur. Leur position peut être fixée ou libérée avec un clic droit.`, // francés
			`Os [POKEMON]Drifblim[/POKEMON] seguem o cursor. A sua posição pode ser fixada ou libertada com o botão direito do rato.`, // portugués
			`I [POKEMON]Drifblim[/POKEMON] seguono il cursore. La loro posizione può essere bloccata o sbloccata con il tasto destro del mouse.`, // italiano
			`[POKEMON]Drifzepeli[/POKEMON] folgen deinem Cursor. Ihre Position kann mit einem Rechtsklick fixiert oder freigegeben werden.`, // alemán
			`[POKEMON]フワライド[/POKEMON]はカーソルに追従する。右クリックで位置を固定したり、解除したりできる。`, // japonés
			`[POKEMON]둥실라이드[/POKEMON]는 커서를 따라 움직인다. 마우스 오른쪽 버튼을 클릭하면 위치를 고정하거나 해제할 수 있다.`, // coreano
			`[POKEMON]随风球[/POKEMON]会跟随光标移动。右键点击可以固定或解除其位置。`, // chino
			`[POKEMON]Drifblim[/POKEMON] podążają za kursorem. Ich pozycję można zablokować lub zwolnić kliknięciem prawego przycisku myszy.` // polaco
		],
	    condition: { 
			id: [112]
		},
	},
	safetyGoggles: {
		id: 'safetyGoggles',
		name: [
			"Safety Goggles",
			"Gafas Protectoras",
			"Lunettes Filtre",
			"Óculos de Proteção",
			"Parascintille",
			"Schutzbrille",
			"ぼうじんゴーグル",
			"방진고글",
			"防尘护目镜",
			"Gogle Ochronne"
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/safety-goggles.png',
		price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Negates negative [WEATHER]weather[/WEATHER] effects.`, // inglés
			`Anula los efectos negativos del [WEATHER]clima[/WEATHER].`, // español
			`Annule les effets négatifs du [WEATHER]climat[/WEATHER].`, // francés
			`Anula os efeitos negativos do [WEATHER]clima[/WEATHER].`, // portugués
			`Annulla gli effetti negativi del [WEATHER]meteo[/WEATHER].`, // italiano
			`Hebt negative Auswirkungen des [WEATHER]Wetters[/WEATHER] auf.`, // alemán
			`[WEATHER]天候[/WEATHER]による悪影響を無効化する。`, // japonés
			`[WEATHER]날씨[/WEATHER]의 부정적인 효과를 무효화합니다.`, // coreano
			`抵消[WEATHER]天气[/WEATHER]的负面效果。`, // chino
			`Neutralizuje negatywne efekty [WEATHER]pogody[/WEATHER].` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 404, 142, 144, 111, 173],
			attackType: 'aura'
		},
	},
	crunchies: {
		id: 'crunchies',
		name: [
			"Crunchies",
			"Crujientes",
			"Croustillants",
			"Crocantes",
			"Scricchiolanti",
			"Knusperchen",
			"サクサクおかし",
			"바삭과자",
			"脆脆饼",
			"Chrupki"
		],
		tags: ['critical'],
		sprite: './src/assets/images/items/crunchies.png',
		price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
		description: [
			`[POKEMON]Sneasel[/POKEMON] favorite snack. Reduces [POWER]power[/POWER] by 40% and causes [CRITICAL]critical hits[/CRITICAL] to explode in an [SHAPE]area[/SHAPE], causing half damage to nearby [ENEMY]enemies[/ENEMY].`, // inglés
			`El aperitivo favorito de [POKEMON]Sneasel[/POKEMON]. Reduce el [POWER]poder[/POWER] en un 40% y hace que los [CRITICAL]golpes críticos[/CRITICAL] exploten en un [SHAPE]área[/SHAPE], causando la mitad del daño a los [ENEMY]enemigos[/ENEMY] cercanos.`, // español
			`Le snack préféré de [POKEMON]Farfuret[/POKEMON]. Réduit la [POWER]puissance[/POWER] de 40 % et fait exploser les [CRITICAL]coups critiques[/CRITICAL] dans une [SHAPE]zone[/SHAPE], infligeant la moitié des dégâts aux [ENEMY]ennemis[/ENEMY] proches.`, // francés
			`O lanche favorito de [POKEMON]Sneasel[/POKEMON]. Reduz o [POWER]poder[/POWER] em 40% e faz com que os [CRITICAL]acertos críticos[/CRITICAL] explodam em uma [SHAPE]área[/SHAPE], causando metade do dano aos [ENEMY]inimigos[/ENEMY] próximos.`, // portugués
			`Lo spuntino preferito di [POKEMON]Sneasel[/POKEMON]. Riduce il [POWER]potere[/POWER] del 40% e fa esplodere i [CRITICAL]colpi critici[/CRITICAL] in un'[SHAPE]area[/SHAPE], infliggendo metà dei danni agli [ENEMY]nemici[/ENEMY] vicini.`, // italiano
			`[POKEMON]Sniebels[/POKEMON] Lieblingssnack. Verringert die [POWER]Kraft[/POWER] um 40 % und lässt [CRITICAL]kritische Treffer[/CRITICAL] in einem [SHAPE]Bereich[/SHAPE] explodieren, wodurch nahe [ENEMY]Gegner[/ENEMY] halben Schaden erleiden.`, // alemán
			`[POKEMON]ニューラ[/POKEMON]の大好物。 [POWER]パワー[/POWER]が40%減少し、[CRITICAL]急所攻撃[/CRITICAL]が[SHAPE]範囲[/SHAPE]で爆発して、近くの[ENEMY]敵[/ENEMY]に半分のダメージを与えるようになる。`, // japonés
			`[POKEMON]포푸니[/POKEMON]가 가장 좋아하는 간식입니다. [POWER]위력[/POWER]이 40% 감소하고 [CRITICAL]급소 공격[/CRITICAL]이 [SHAPE]범위[/SHAPE]에서 폭발하여 주변 [ENEMY]적[/ENEMY]에게 절반의 피해를 줍니다.`, // coreano
			`[POKEMON]狃拉[/POKEMON]最喜欢的零食。使[POWER]攻击力[/POWER]降低40%，并使[CRITICAL]暴击[/CRITICAL]在[SHAPE]范围[/SHAPE]内爆炸，对附近的[ENEMY]敌人[/ENEMY]造成一半伤害。`, // chino
			`Ulubiona przekąska [POKEMON]Sneasela[/POKEMON]. Zmniejsza [POWER]siłę[/POWER] o 40% i sprawia, że [CRITICAL]trafienia krytyczne[/CRITICAL] wybuchają na [SHAPE]obszarze[/SHAPE], zadając pobliskim [ENEMY]wrogom[/ENEMY] połowę obrażeń.` // polaco
		],
		condition: { 
			id: [40] 
		},
	},
	ovalCharm: {
		id: 'ovalCharm',
		name: [
			"Oval Charm",
			"Amuleto Oval",
			"Charme Ovale",
			"Amuleto Oval",
			"Ovalamuleto",
			"Ovalpin",
			"まるいおまもり",
			"둥근부적",
			"圆形护符",
			"Owalny Talon"
		],
		tags: ['power'],
		sprite: './src/assets/images/items/oval-charm.png',
		price: 0,
		tier: 'legendary',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases [POWER]power[/POWER] by 12.5% for each missing [POKEMON]Pokémon[/POKEMON] in the [TEAM]team[/TEAM].`, // inglés
			`Aumenta el [POWER]poder[/POWER] en un 12,5% por cada [POKEMON]Pokémon[/POKEMON] que falte en el [TEAM]equipo[/TEAM].`, // español
			`Augmente la [POWER]puissance[/POWER] de 12,5 % pour chaque [POKEMON]Pokémon[/POKEMON] manquant dans l'[TEAM]équipe[/TEAM].`, // francés
			`Aumenta o [POWER]poder[/POWER] em 12,5% para cada [POKEMON]Pokémon[/POKEMON] ausente na [TEAM]equipe[/TEAM].`, // portugués
			`Aumenta il [POWER]potere[/POWER] del 12,5% per ogni [POKEMON]Pokémon[/POKEMON] mancante nella [TEAM]squadra[/TEAM].`, // italiano
			`Erhöht die [POWER]Kraft[/POWER] um 12,5 % für jedes fehlende [POKEMON]Pokémon[/POKEMON] im [TEAM]Team[/TEAM].`, // alemán
			`[TEAM]チーム[/TEAM]にいない[POKEMON]ポケモン[/POKEMON]1匹につき、[POWER]パワー[/POWER]が12.5%増加する。`, // japonés
			`[TEAM]팀[/TEAM]에 없는 [POKEMON]포켓몬[/POKEMON] 하나당 [POWER]위력[/POWER]이 12.5% 증가합니다.`, // coreano
			`[TEAM]队伍[/TEAM]中每缺少一只[POKEMON]宝可梦[/POKEMON]，[POWER]攻击力[/POWER]提高12.5%。`, // chino
			`Zwiększa [POWER]siłę[/POWER] o 12,5% za każdego brakującego [POKEMON]Pokémona[/POKEMON] w [TEAM]drużynie[/TEAM].` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173],
			attackType: 'aura'
		},
	},
	dampRock: {
		id: 'dampRock',
		name: [
			"Damp Rock",
			"Roca Lluvia",
			"Roche Humide",
			"Rocha Úmida",
			"Rocciaumida",
			"Nassbrocken",
			"しめったいわ",
			"축축한바위",
			"潮湿岩石",
			"Wilgotna Skała"
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/damp-rock.png',
		price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: false,
		description: [
			`Increases [SPEED]recharge time[/SPEED] by 100% and applies [RAIN]Rain[/RAIN]. Only for [WATER]water-terrain[/WATER] [POKEMON]Pokémon[/POKEMON].`, // inglés
			`Aumenta el [SPEED]tiempo de recarga[/SPEED] en un 100% y aplica [RAIN]Lluvia[/RAIN]. Solo para [POKEMON]Pokémon[/POKEMON] de [WATER]terreno de agua[/WATER].`, // español
			`Augmente le [SPEED]temps de recharge[/SPEED] de 100 % et applique [RAIN]Pluie[/RAIN]. Uniquement pour les [POKEMON]Pokémon[/POKEMON] de [WATER]terrain aquatique[/WATER].`, // francés
			`Aumenta o [SPEED]tempo de recarga[/SPEED] em 100% e aplica [RAIN]Chuva[/RAIN]. Apenas para [POKEMON]Pokémon[/POKEMON] de [WATER]terreno de água[/WATER].`, // portugués
			`Aumenta il [SPEED]tempo di ricarica[/SPEED] del 100% e applica [RAIN]Pioggia[/RAIN]. Solo per [POKEMON]Pokémon[/POKEMON] con [WATER]terreno acquatico[/WATER].`, // italiano
			`Erhöht die [SPEED]Aufladezeit[/SPEED] um 100 % und setzt [RAIN]Regen[/RAIN] ein. Nur für [POKEMON]Pokémon[/POKEMON] mit [WATER]Wasser-Terrain[/WATER].`, // alemán
			`[SPEED]再使用時間[/SPEED]が100%増加し、[RAIN]あめ[/RAIN]になる。[WATER]みずフィールド[/WATER]の[POKEMON]ポケモン[/POKEMON]専用。`, // japonés
			`[SPEED]재사용 대기시간[/SPEED]이 100% 증가하고 [RAIN]비[/RAIN]가 적용됩니다. [WATER]물 지형[/WATER] [POKEMON]포켓몬[/POKEMON] 전용입니다.`, // coreano
			`[SPEED]冷却时间[/SPEED]延长100%，并施加[RAIN]下雨[/RAIN]。仅限[WATER]水地形[/WATER]的[POKEMON]宝可梦[/POKEMON]使用。`, // chino
			`Zwiększa [SPEED]czas odnowienia[/SPEED] o 100% i wywołuje [RAIN]Deszcz[/RAIN]. Tylko dla [POKEMON]Pokémonów[/POKEMON] z [WATER]wodnym terenem[/WATER].` // polaco
		],
		condition: {
			tile: [3]
		},
		restriction: {
			ability: ['contrary'],
			id: [19, 70, 83, 101, 404, 142, 144, 173],
			attackType: ['aura', 'stream', 'orbital']
		},
	},
	smoothRock: {
		id: 'smoothRock',
		name: [
			"Smooth Rock",
			"Roca Suave",
			"Roche Lisse",
			"Rocha Lisa",
			"Liscioroccia",
			"Glattbrocken",
			"さらさらいわ",
			"부드러운바위",
			"光滑岩石",
			"Gładka Skała"
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/smooth-rock.png',
		price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: false,
		description: [
			`Increases [SPEED]recharge time[/SPEED] by 100% and applies [SANDSTORM]Sandstorm[/SANDSTORM]. Only for [FIELD]field-terrain[/FIELD] [POKEMON]Pokémon[/POKEMON].`, // inglés
			`Aumenta el [SPEED]tiempo de recarga[/SPEED] en un 100% y aplica [SANDSTORM]Tormenta de Arena[/SANDSTORM]. Solo para [POKEMON]Pokémon[/POKEMON] de [FIELD]terreno de campo[/FIELD].`, // español
			`Augmente le [SPEED]temps de recharge[/SPEED] de 100 % et applique [SANDSTORM]Tempête de Sable[/SANDSTORM]. Uniquement pour les [POKEMON]Pokémon[/POKEMON] de [FIELD]terrain de champ[/FIELD].`, // francés
			`Aumenta o [SPEED]tempo de recarga[/SPEED] em 100% e aplica [SANDSTORM]Tempestade de Areia[/SANDSTORM]. Apenas para [POKEMON]Pokémon[/POKEMON] de [FIELD]terreno de campo[/FIELD].`, // portugués
			`Aumenta il [SPEED]tempo di ricarica[/SPEED] del 100% e applica [SANDSTORM]Tempesta di Sabbia[/SANDSTORM]. Solo per [POKEMON]Pokémon[/POKEMON] con [FIELD]terreno campo[/FIELD].`, // italiano
			`Erhöht die [SPEED]Aufladezeit[/SPEED] um 100 % und setzt [SANDSTORM]Sandsturm[/SANDSTORM] ein. Nur für [POKEMON]Pokémon[/POKEMON] mit [FIELD]Feld-Terrain[/FIELD].`, // alemán
			`[SPEED]再使用時間[/SPEED]が100%増加し、[SANDSTORM]すなあらし[/SANDSTORM]になる。[FIELD]フィールド[/FIELD]の[POKEMON]ポケモン[/POKEMON]専用。`, // japonés
			`[SPEED]재사용 대기시간[/SPEED]이 100% 증가하고 [SANDSTORM]모래바람[/SANDSTORM]이 적용됩니다. [FIELD]필드 지형[/FIELD] [POKEMON]포켓몬[/POKEMON] 전용입니다.`, // coreano
			`[SPEED]冷却时间[/SPEED]延长100%，并施加[SANDSTORM]沙暴[/SANDSTORM]。仅限[FIELD]场地形[/FIELD]的[POKEMON]宝可梦[/POKEMON]使用。`, // chino
			`Zwiększa [SPEED]czas odnowienia[/SPEED] o 100% i wywołuje [SANDSTORM]Burzę Piaskową[/SANDSTORM]. Tylko dla [POKEMON]Pokémonów[/POKEMON] z [FIELD]terenem pola[/FIELD].` // polaco
		],
		condition: {
			tile: [1]
		},
		restriction: {
			ability: ['contrary'],
			id: [19, 70, 83, 101, 404, 142, 144, 111, 173],
			attackType: ['aura', 'stream', 'orbital']
		},
	},
	icyRock: {
		id: 'icyRock',
		name: [
			"Icy Rock",
			"Roca Gélida",
			"Roche Glace",
			"Rocha Gelada",
			"Rocciafredda",
			"Eisbrocken",
			"つめたいいわ",
			"차가운바위",
			"冰冷岩石",
			"Lodowata Skała"
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/icy-rock.png',
		price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: false,
		description: [
			`Increases [SPEED]recharge time[/SPEED] by 100% and applies [HAIL]Hail[/HAIL]. Only for [MOUNTAIN]mountain-terrain[/MOUNTAIN] [POKEMON]Pokémon[/POKEMON].`, // inglés
			`Aumenta el [SPEED]tiempo de recarga[/SPEED] en un 100% y aplica [HAIL]Granizo[/HAIL]. Solo para [POKEMON]Pokémon[/POKEMON] de [MOUNTAIN]terreno de montaña[/MOUNTAIN].`, // español
			`Augmente le [SPEED]temps de recharge[/SPEED] de 100 % et applique [HAIL]Grêle[/HAIL]. Uniquement pour les [POKEMON]Pokémon[/POKEMON] de [MOUNTAIN]terrain montagneux[/MOUNTAIN].`, // francés
			`Aumenta o [SPEED]tempo de recarga[/SPEED] em 100% e aplica [HAIL]Granizo[/HAIL]. Apenas para [POKEMON]Pokémon[/POKEMON] de [MOUNTAIN]terreno de montanha[/MOUNTAIN].`, // portugués
			`Aumenta il [SPEED]tempo di ricarica[/SPEED] del 100% e applica [HAIL]Grandine[/HAIL]. Solo per [POKEMON]Pokémon[/POKEMON] con [MOUNTAIN]terreno montano[/MOUNTAIN].`, // italiano
			`Erhöht die [SPEED]Aufladezeit[/SPEED] um 100 % und setzt [HAIL]Hagel[/HAIL] ein. Nur für [POKEMON]Pokémon[/POKEMON] mit [MOUNTAIN]Berg-Terrain[/MOUNTAIN].`, // alemán
			`[SPEED]再使用時間[/SPEED]が100%増加し、[HAIL]あられ[/HAIL]になる。[MOUNTAIN]やまフィールド[/MOUNTAIN]の[POKEMON]ポケモン[/POKEMON]専用。`, // japonés
			`[SPEED]재사용 대기시간[/SPEED]이 100% 증가하고 [HAIL]싸라기눈[/HAIL]이 적용됩니다. [MOUNTAIN]산 지형[/MOUNTAIN] [POKEMON]포켓몬[/POKEMON] 전용입니다.`, // coreano
			`[SPEED]冷却时间[/SPEED]延长100%，并施加[HAIL]冰雹[/HAIL]。仅限[MOUNTAIN]山地形[/MOUNTAIN]的[POKEMON]宝可梦[/POKEMON]使用。`, // chino
			`Zwiększa [SPEED]czas odnowienia[/SPEED] o 100% i wywołuje [HAIL]Grad[/HAIL]. Tylko dla [POKEMON]Pokémonów[/POKEMON] z [MOUNTAIN]górskim terenem[/MOUNTAIN].` // polaco
		],
		condition: {
			tile: [4]
		},
		restriction: {
			ability: ['contrary'],
			id: [19, 70, 83, 101, 404, 142, 144, 111, 173],
			attackType: ['aura', 'stream', 'orbital']
		},
	},
	heatRockWeather: {
		id: 'heatRockWeather',
		name: [
			"Heat Rock",
			"Roca Calor",
			"Roche Chaude",
			"Rocha de Calor",
			"Rocciacalda",
			"Heißbrocken",
			"あついいわ",
			"뜨거운바위",
			"炽热岩石",
			"Gorąca Skała"
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/heat-rock.png',
		price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: false,
		description:[
			`Increases [SPEED]recharge time[/SPEED] by 100% and applies [SUN]Harsh Sunlight[/SUN]. Only for [GRASS]grass-terrain[/GRASS] [POKEMON]Pokémon[/POKEMON].`, // inglés
			`Aumenta el [SPEED]tiempo de recarga[/SPEED] en un 100% y aplica [SUN]Sol Intenso[/SUN]. Solo para [POKEMON]Pokémon[/POKEMON] de [GRASS]terreno de hierba[/GRASS].`, // español
			`Augmente le [SPEED]temps de recharge[/SPEED] de 100 % et applique [SUN]Soleil Intense[/SUN]. Uniquement pour les [POKEMON]Pokémon[/POKEMON] de [GRASS]terrain herbeux[/GRASS].`, // francés
			`Aumenta o [SPEED]tempo de recarga[/SPEED] em 100% e aplica [SUN]Sol Intenso[/SUN]. Apenas para [POKEMON]Pokémon[/POKEMON] de [GRASS]terreno de grama[/GRASS].`, // portugués
			`Aumenta il [SPEED]tempo di ricarica[/SPEED] del 100% e applica [SUN]Sole Intenso[/SUN]. Solo per [POKEMON]Pokémon[/POKEMON] con [GRASS]terreno erba[/GRASS].`, // italiano
			`Erhöht die [SPEED]Aufladezeit[/SPEED] um 100 % und setzt [SUN]Starke Sonne[/SUN] ein. Nur für [POKEMON]Pokémon[/POKEMON] mit [GRASS]Gras-Terrain[/GRASS].`, // alemán
			`[SPEED]再使用時間[/SPEED]が100%増加し、[SUN]ひざしがつよい[/SUN]状態になる。[GRASS]くさフィールド[/GRASS]の[POKEMON]ポケモン[/POKEMON]専用。`, // japonés
			`[SPEED]재사용 대기시간[/SPEED]이 100% 증가하고 [SUN]강한 햇빛[/SUN]이 적용됩니다. [GRASS]풀 지형[/GRASS] [POKEMON]포켓몬[/POKEMON] 전용입니다.`, // coreano
			`[SPEED]冷却时间[/SPEED]延长100%，并施加[SUN]大晴天[/SUN]。仅限[GRASS]草地形[/GRASS]的[POKEMON]宝可梦[/POKEMON]使用。`, // chino
			`Zwiększa [SPEED]czas odnowienia[/SPEED] o 100% i wywołuje [SUN]Intensywne Słońce[/SUN]. Tylko dla [POKEMON]Pokémonów[/POKEMON] z [GRASS]trawiastym terenem[/GRASS].` // polaco
		],
		condition: {
			tile: [2]
		},
		restriction: {
			ability: ['contrary'],
			id: [19, 70, 83, 101, 404, 142, 144, 111, 173],
			attackType: ['aura', 'stream', 'orbital']
		},
	},
	sailFossil: {
		id: 'sailFossil',
		name: [
			"Sail Fossil",
			"Fósil Aleta",
			"Fossile Voile",
			"Fóssil de Vela",
			"Fossilvela",
			"Flossenfossil",
			"ヒレのカセキ",
			"지느러미화석",
			"鳍之化石",
			"Skamielina Płetwy"
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/sail.png',
		price: 300000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`If the holder fails to [STUN]stun[/STUN], it [SLOW]slows[/SLOW] the target for 0.5 seconds instead. Contains DNA from [POKEMON]Aurorus[/POKEMON].`, // inglés
			`Si el portador no consigue [STUN]aturdir[/STUN], [SLOW]ralentiza[/SLOW] al objetivo durante 0,5 segundos en su lugar. Contiene ADN de [POKEMON]Aurorus[/POKEMON].`, // español
			`Si le porteur ne parvient pas à [STUN]étourdir[/STUN], il [SLOW]ralentit[/SLOW] la cible pendant 0,5 seconde à la place. Contient de l'ADN de [POKEMON]Dragmara[/POKEMON].`, // francés
			`Se o portador não conseguir [STUN]atordoar[/STUN], em vez disso [SLOW]abranda[/SLOW] o alvo durante 0,5 segundos. Contém ADN de [POKEMON]Aurorus[/POKEMON].`, // portugués
			`Se il portatore non riesce a [STUN]stordire[/STUN], [SLOW]rallenta[/SLOW] il bersaglio per 0,5 secondi. Contiene il DNA di [POKEMON]Aurorus[/POKEMON].`, // italiano
			`Wenn der Träger das Ziel nicht [STUN]betäuben[/STUN] kann, [SLOW]verlangsamt[/SLOW] er es stattdessen 0,5 Sekunden lang. Enthält DNA von [POKEMON]Aurorus[/POKEMON].`, // alemán
			`持ち主が相手を[STUN]ひるませられなかった[/STUN]場合、代わりに0.5秒間[SLOW]遅くする[/SLOW]。 [POKEMON]アマルルガ[/POKEMON]のDNAを含む。`, // japonés
			`소지자가 대상을 [STUN]기절시키지 못하면[/STUN], 대신 0.5초 동안 [SLOW]느려지게[/SLOW] 한다. [POKEMON]아마루르가[/POKEMON]의 DNA가 들어 있다.`, // coreano
			`如果持有者未能使目标[STUN]陷入眩晕[/STUN]，则改为使目标[SLOW]减速[/SLOW]0.5秒。含有[POKEMON]冰雪巨龙[/POKEMON]的DNA。`, // chino
			`Jeśli posiadaczowi nie uda się [STUN]ogłuszyć[/STUN] celu, zamiast tego [SLOW]spowalnia[/SLOW] go na 0,5 sekundy. Zawiera DNA [POKEMON]Aurorusa[/POKEMON].` // polaco
		],
		condition: { 
			id: [136]
		},
	},
	maliciousArmor: {
		id: 'maliciousArmor',
		name: [
			"Malicious Armor",
			"Armadura Maliciosa",
			"Armure Rancunière",
			"Armadura Maliciosa",
			"Armatura Infausta",
			"Fluchrüstung",
			"ノロイノヨロイ",
			"저주받은갑옷",
			"咒术之铠",
			"Złowroga Zbroja"
		],
		tags: ['speed', 'utility'],
		sprite: './src/assets/images/items/malicious-armor.png',
		price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
		description: [
			`[PROJECTILE]Projectiles[/PROJECTILE] explode in an [SHAPE]area[/SHAPE], causing half damage to nearby [ENEMY]enemies[/ENEMY]. Reduces [SPEED]recharge time[/SPEED] by 0.02s for each missing [HEART]heart[/HEART]. Only [POKEMON]Ceruledge[/POKEMON] can pull it off.`, // inglés
			`Los [PROJECTILE]proyectiles[/PROJECTILE] explotan en un [SHAPE]área[/SHAPE], causando la mitad de daño a los [ENEMY]enemigos[/ENEMY] cercanos. Reduce el [SPEED]tiempo de recarga[/SPEED] en 0,02 s por cada [HEART]corazón[/HEART] que falte. Solo le queda bien a [POKEMON]Ceruledge[/POKEMON].`, // español
			`Les [PROJECTILE]projectiles[/PROJECTILE] explosent dans une [SHAPE]zone[/SHAPE], infligeant la moitié des dégâts aux [ENEMY]ennemis[/ENEMY] proches. Réduit le [SPEED]temps de recharge[/SPEED] de 0,02 s pour chaque [HEART]cœur[/HEART] manquant. Seul [POKEMON]Malvalame[/POKEMON] peut le porter avec style.`, // francés
			`Os [PROJECTILE]projéteis[/PROJECTILE] explodem numa [SHAPE]área[/SHAPE], causando metade do dano aos [ENEMY]inimigos[/ENEMY] próximos. Reduz o [SPEED]tempo de recarga[/SPEED] em 0,02 s por cada [HEART]coração[/HEART] em falta. Só fica bem em [POKEMON]Ceruledge[/POKEMON].`, // portugués
			`I [PROJECTILE]proiettili[/PROJECTILE] esplodono in un'[SHAPE]area[/SHAPE], infliggendo metà dei danni ai [ENEMY]nemici[/ENEMY] vicini. Riduce il [SPEED]tempo di ricarica[/SPEED] di 0,02 s per ogni [HEART]cuore[/HEART] mancante. Sta bene solo a [POKEMON]Ceruledge[/POKEMON].`, // italiano
			`[PROJECTILE]Projektile[/PROJECTILE] explodieren in einem [SHAPE]Bereich[/SHAPE] und verursachen bei nahen [ENEMY]Gegnern[/ENEMY] halben Schaden. Verkürzt die [SPEED]Aufladezeit[/SPEED] für jedes fehlende [HEART]Herz[/HEART] um 0,02 s. Steht nur [POKEMON]Azugladis[/POKEMON] wirklich gut.`, // alemán
			`[PROJECTILE]弾[/PROJECTILE]は[SHAPE]範囲[/SHAPE]内で爆発し、近くの[ENEMY]敵[/ENEMY]に半分のダメージを与える。失った[HEART]ハート[/HEART]1個につき、[SPEED]再チャージ時間[/SPEED]が0.02秒短縮される。[POKEMON]ソウブレイズ[/POKEMON]にしか似合わない。`, // japonés
			`[PROJECTILE]투사체[/PROJECTILE]는 [SHAPE]범위[/SHAPE] 안에서 폭발해 주변 [ENEMY]적[/ENEMY]에게 절반의 피해를 준다. 잃은 [HEART]하트[/HEART] 하나당 [SPEED]재충전 시간[/SPEED]이 0.02초 감소한다. [POKEMON]파라블레이즈[/POKEMON]에게만 잘 어울린다.`, // coreano
			`[PROJECTILE]投射物[/PROJECTILE]会在[SHAPE]范围[/SHAPE]内爆炸，对附近的[ENEMY]敌人[/ENEMY]造成一半伤害。每缺少一颗[HEART]心心[/HEART]，[SPEED]充能时间[/SPEED]就缩短0.02秒。只有[POKEMON]苍炎刃鬼[/POKEMON]戴起来才好看。`, // chino
			`[PROJECTILE]Pociski[/PROJECTILE] wybuchają na [SHAPE]obszarze[/SHAPE], zadając połowę obrażeń pobliskim [ENEMY]wrogom[/ENEMY]. Skraca [SPEED]czas odnowienia[/SPEED] o 0,02 s za każde brakujące [HEART]serce[/HEART]. Tylko [POKEMON]Ceruledge[/POKEMON] dobrze w nim wygląda.` // polaco
		],
		condition: {
			key: 'ceruledge'
		}
	},
	auspiciousArmor: {
		id: 'auspiciousArmor',
		name: [
			"Auspicious Armor",
			"Armadura Auspiciosa",
			"Armure de l'Aube",
			"Armadura Auspiciosa",
			"Armatura Benefica",
			"Glücksrüstung",
			"イワイノヨロイ",
			"축복받은갑옷",
			"庆祝之铠",
			"Pomyślna Zbroja"
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/auspicious-armor.png',
		price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Fires [PROJECTILE]projectiles[/PROJECTILE] at up to 2 [ENEMY]enemies[/ENEMY]. Has a 0.2% chance to restore 1 [HEART]heart[/HEART] (once per wave). Only [POKEMON]Armarouge[/POKEMON] can pull it off.`, // inglés
			`Dispara [PROJECTILE]proyectiles[/PROJECTILE] a un máximo de 2 [ENEMY]enemigos[/ENEMY]. Tiene un 0,2% de probabilidad de restaurar 1 [HEART]corazón[/HEART] (una vez por oleada). Solo le queda bien a [POKEMON]Armarouge[/POKEMON].`, // español
			`Tire des [PROJECTILE]projectiles[/PROJECTILE] sur jusqu'à 2 [ENEMY]ennemis[/ENEMY]. A 0,2 % de chances de restaurer 1 [HEART]cœur[/HEART] (une fois par vague). Seul [POKEMON]Carmadura[/POKEMON] peut le porter avec style.`, // francés
			`Dispara [PROJECTILE]projéteis[/PROJECTILE] contra até 2 [ENEMY]inimigos[/ENEMY]. Tem 0,2% de chance de restaurar 1 [HEART]coração[/HEART] (uma vez por vaga). Só fica bem em [POKEMON]Armarouge[/POKEMON].`, // portugués
			`Spara [PROJECTILE]proiettili[/PROJECTILE] contro fino a 2 [ENEMY]nemici[/ENEMY]. Ha lo 0,2% di probabilità di ripristinare 1 [HEART]cuore[/HEART] (una volta per ondata). Sta bene solo a [POKEMON]Armarouge[/POKEMON].`, // italiano
			`Feuert [PROJECTILE]Projektile[/PROJECTILE] auf bis zu 2 [ENEMY]Gegner[/ENEMY] ab. Hat eine Chance von 0,2 %, 1 [HEART]Herz[/HEART] wiederherzustellen (einmal pro Welle). Steht nur [POKEMON]Crimanzo[/POKEMON] wirklich gut.`, // alemán
			`最大2体の[ENEMY]敵[/ENEMY]に[PROJECTILE]弾[/PROJECTILE]を発射する。0.2%の確率で[HEART]ハート[/HEART]を1つ回復する（1ウェーブにつき1回）。[POKEMON]グレンアルマ[/POKEMON]にしか似合わない。`, // japonés
			`최대 2마리의 [ENEMY]적[/ENEMY]에게 [PROJECTILE]투사체[/PROJECTILE]를 발사한다. 0.2% 확률로 [HEART]하트[/HEART]를 1개 회복한다(웨이브당 1회). [POKEMON]카디나르마[/POKEMON]에게만 잘 어울린다.`, // coreano
			`向最多2只[ENEMY]敌人[/ENEMY]发射[PROJECTILE]投射物[/PROJECTILE]。有0.2%的概率恢复1颗[HEART]心心[/HEART]（每波仅触发一次）。只有[POKEMON]红莲铠骑[/POKEMON]戴起来才好看。`, // chino
			`Wystrzeliwuje [PROJECTILE]pociski[/PROJECTILE] w maksymalnie 2 [ENEMY]wrogów[/ENEMY]. Ma 0,2% szans na przywrócenie 1 [HEART]serca[/HEART] (raz na falę). Tylko [POKEMON]Armarouge[/POKEMON] dobrze w nim wygląda.` // polaco
		],
		condition: {
			key: 'armarouge'
		}
	},
	rockyHelmetSpikes: {
		id: 'rockyHelmetSpikes',
		name: [
			"Rocky Helmet",
			"Casco Dentado",
			"Casque Brut",
			"Capacete Rochoso",
			"Bitorzoloelmo",
			"Beulenhelm",
			"ゴツゴツメット",
			"울퉁불퉁멧",
			"凸凸头盔",
			"Ostrokrzewny Hełm"
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/rocky-helmet.png',
		price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
		description: [
			`[ABILITY]Spiky Shield[/ABILITY] and [ABILITY]Spikes[/ABILITY] deal damage every 0.25s.`, // inglés
			`[ABILITY]Barrera Espinosa[/ABILITY] y [ABILITY]Púas[/ABILITY] infligen daño cada 0,25 s.`, // español
			`[ABILITY]Pico-Défense[/ABILITY] et [ABILITY]Picots[/ABILITY] infligent des dégâts toutes les 0,25 s.`, // francés
			`[ABILITY]Escudo de Espinhos[/ABILITY] e [ABILITY]Espinhos[/ABILITY] causam dano a cada 0,25 s.`, // portugués
			`[ABILITY]Agoscudo[/ABILITY] e [ABILITY]Punte[/ABILITY] infliggono danni ogni 0,25 s.`, // italiano
			`[ABILITY]Nadelschutz[/ABILITY] und [ABILITY]Stacheln[/ABILITY] verursachen alle 0,25 s Schaden.`, // alemán
			`[ABILITY]ニードルガード[/ABILITY]と[ABILITY]まきびし[/ABILITY]は0.25秒ごとにダメージを与える。`, // japonés
			`[ABILITY]니들가드[/ABILITY]와 [ABILITY]압정뿌리기[/ABILITY]는 0.25초마다 피해를 준다.`, // coreano
			`[ABILITY]尖刺防守[/ABILITY]和[ABILITY]撒菱[/ABILITY]每0.25秒造成一次伤害。`, // chino
			`[ABILITY]Grototarcza[/ABILITY] i [ABILITY]Kolce[/ABILITY] zadają obrażenia co 0,25 s.` // polaco
		],
		condition: { 
			ability: ['spikes', 'spikyShield'] 
		},
		restriction: {
			id: [70, 173],
		}
	},
	terrainExtender: {
		id: 'terrainExtender',
		name: [
			"Terrain Extender",
			"Cubresuelos",
			"Extension Champ",
			"Extensor de Terreno",
			"Estensocampo",
			"Terrasorb",
			"グランドコート",
			"그라운드코트",
			"大地膜",
			"Wydłużacz Terenu"
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/terrain-extender.png',
		price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases the width of [PROJECTILE]beams[/PROJECTILE] by 50%.`, // inglés
			`Aumenta el ancho de los [PROJECTILE]haces[/PROJECTILE] un 50%.`, // español
			`Augmente la largeur des [PROJECTILE]rayons[/PROJECTILE] de 50 %.`, // francés
			`Aumenta a largura dos [PROJECTILE]feixes[/PROJECTILE] em 50%.`, // portugués
			`Aumenta la larghezza dei [PROJECTILE]raggi[/PROJECTILE] del 50%.`, // italiano
			`Erhöht die Breite der [PROJECTILE]Strahlen[/PROJECTILE] um 50 %.`, // alemán
			`[PROJECTILE]ビーム[/PROJECTILE]の幅が50%増加する。`, // japonés
			`[PROJECTILE]빔[/PROJECTILE]의 너비가 50% 증가한다.`, // coreano
			`[PROJECTILE]光束[/PROJECTILE]的宽度提高50%。`, // chino
			`Zwiększa szerokość [PROJECTILE]wiązek[/PROJECTILE] o 50%.` // polaco
		],
		condition: { 
			ability: [
				'solarBeam', 'hydroCannon', 'zapCannon', 'hyperBeam', 'meteorBeam', 'iceBeam', 'machBolt', 'steelBeam', 'steamEruption', 'soulHeartReactor', 'psybeam'
			] 
		},
		restriction: {
			id: [70, 173]
		}
	},
	lucarionite: {
		id: 'lucarionite',
		name: [
	        'Lucarionite',     // Inglés
	        'Lucarionita',     // Español
	        'Lucarionite',     // Francés
	        'Lucarionite',     // Portugués
	        'Lucarionite',     // Italiano
	        'Lucarionit',      // Alemán
	        'ルカリオナイト',      // Japonés (Rukario Naito)
	        '루카리오나이트',      // Coreano (Rukario Naiteu)
	        '路卡利歐進化石',     // Chino (Lùkǎlìōu Jìnhuàshí)
	        'Lucarionite'      // Polaco
	    ],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/lucarionite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`You feel strangely angry and motivated holding this orb... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Te sientes extrañamente enfadado y motivado al sostener este orbe... Está rebosando de Energía Infinita.`, // español
			`Tu te sens étrangement en colère et motivé en tenant cet orbe... Il déborde d'Énergie Infinie.`, // francés
			`Você se sente estranhamente irritado e motivado segurando este orbe... Está transbordando de Energia Infinita.`, // portugués
			`Ti senti stranamente arrabbiato e motivato tenendo in mano questa sfera... È traboccante di Energia Infinita.`, // italiano
			`Du fühlst dich seltsam wütend und motiviert, während du diese Kugel hältst... Sie quillt über vor Unendlicher Energie.`, // alemán
			`このオーブを持っていると、なぜか怒りとやる気が湧いてくる……インフィニティエネルギーがあふれている。`, // japonés
			`이 오브를 들고 있으면 이상하게 화가 나면서 의욕이 생겨... 인피니티 에너지가 넘쳐흐르고 있어.`, // coreano
			`拿着这个宝珠，你莫名感到愤怒和充满干劲……里面充满了无限能量。`, // chino
			`Trzymając tę kulę, czujesz się dziwnie zły i zmotywowany... Przepełnia ją Nieskończona Energia.` // polaco
		],
		condition: {
			key: 'lucario'
		}
	},
	charizarditeY: {
		id: 'charizarditeY',
		name: [
			"Charizardite Y",
			"Charizardita Y",
			"Charizardite Y",
			"Charizardite Y",
			"Charizardite Y",
			"Gluraknit Y",
			"リザードナイトY",
			"리자몽나이트 Y",
			"喷火龙之石Y",
			"Charizardite Y"
		],
		megaStone: true,
		megaPos: 1,
		tags: [],
		sprite: './src/assets/images/items/charizardite-y.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Ow, it's a little hot, careful... It's overflowing with [MEGA]Infinity Energy[/MEGA]...`, // inglés
			`Ay, está un poco caliente, cuidado... Está rebosando de Energía Infinita...`, // español
			`Aïe, c'est un peu chaud, attention... Il déborde d'Énergie Infinie...`, // francés
			`Ai, está um pouco quente, cuidado... Está transbordando de Energia Infinita...`, // portugués
			`Ahi, è un po' caldo, attento... È traboccante di Energia Infinita...`, // italiano
			`Aua, es ist ein bisschen heiß, Vorsicht... Es quillt über vor Unendlicher Energie...`, // alemán
			`いたた、ちょっと熱い、気をつけて……インフィニティエネルギーがあふれている……`, // japonés
			`앗, 조금 뜨거우니 조심해... 인피니티 에너지가 넘쳐흐르고 있어...`, // coreano
			`哎呀，有点烫，小心……里面充满了无限能量……`, // chino
			`Au, jest trochę gorące, uważaj... Przepełnia je Nieskończona Energia...` // polaco
		],
		condition: {
			key: 'charizard'
		}
	},
	scovillainSiracha: {
	    id: 'scovillainSiracha',
	    name: [
	        'Scovillain Sriracha',    // Inglés
	        'Scovillain Sriracha',    // Español
	        'Scovillain Sriracha',    // Francés (Mantiene el nombre base)
	        'Scovillain Sriracha',    // Portugués
	        'Scovillain Sriracha',    // Italiano
	        'Scovillain Sriracha',    // Alemán
	        'スコヴィラン シラチャ',     // Japonés (Sukoviran Shiracha)
	        '스코빌런 시라차',        // Coreano (Seukobilleon Siracha)
	        '狠辣椒 是拉差',         // Chino (Hěn Làjiāo Shìlāchā)
	        'Scovillain Sriracha'     // Polaco
	    ],
	    tags: ['utility'],
	    sprite: './src/assets/images/items/fire-export.png',
	    price: 1000000,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
	    description: [
			`Halves [POWER]power[/POWER] and lets the holder inflict [BURN]burn[/BURN] on [ENEMY]enemies[/ENEMY].`, // inglés
			`Reduce el [POWER]poder[/POWER] a la mitad y permite al portador causar [BURN]quemaduras[/BURN] a los [ENEMY]enemigos[/ENEMY].`, // español
			`Divise la [POWER]puissance[/POWER] par deux et permet au porteur d'infliger des [BURN]brûlures[/BURN] aux [ENEMY]ennemis[/ENEMY].`, // francés
			`Reduz o [POWER]poder[/POWER] para metade e permite ao portador causar [BURN]queimaduras[/BURN] aos [ENEMY]inimigos[/ENEMY].`, // portugués
			`Dimezza la [POWER]potenza[/POWER] e permette al portatore di infliggere [BURN]scottature[/BURN] ai [ENEMY]nemici[/ENEMY].`, // italiano
			`Halbiert die [POWER]Stärke[/POWER] und ermöglicht dem Träger, [ENEMY]Gegnern[/ENEMY] [BURN]Verbrennungen[/BURN] zuzufügen.`, // alemán
			`[POWER]威力[/POWER]が半減し、[ENEMY]敵[/ENEMY]に[BURN]やけど[/BURN]を負わせられるようになる。`, // japonés
			`[POWER]위력[/POWER]이 절반으로 감소하고 [ENEMY]적[/ENEMY]에게 [BURN]화상[/BURN]을 입힐 수 있게 된다.`, // coreano
			`[POWER]威力[/POWER]减半，并使持有者能够使[ENEMY]敌人[/ENEMY]陷入[BURN]灼伤[/BURN]状态。`, // chino
			`Zmniejsza [POWER]moc[/POWER] o połowę i pozwala posiadaczowi nakładać [BURN]podpalenie[/BURN] na [ENEMY]wrogów[/ENEMY].` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 126, 142, 144, 173],
			ability: [
				'burn', 'flamethrower', 'sacredFire', 'burnSplash', 'magmaStorm', 'flameWheel', 'willOWisp', 'drought', 'burnNerf', 'fireLash', 
				'lavaPlume', 'steamEruption', 'sacredFire', 'burnRicochet',
				'volcanicKaboom', 'icyWind',
			],
			attackType: ['area', 'aura'],
		},
	},
	sokudosPortfolio: {
	    id: 'sokudosPortfolio',
	    name: [
		    `Sokudo's Portfolio`,          // Inglés
		    'Portafolio de Sokudo',        // Español
		    'Portfolio de Sokudo',         // Francés
		    'Portfólio do Sokudo',         // Portugués
		    'Portfolio di Sokudo',         // Italiano
		    'Sokudos Portfolio',           // Alemán
		    'ソクドのポートフォリオ',          // Japonés
		    '소쿠도의 포트폴리오',             // Coreano
		    'Sokudo 的作品集',               // Chino
		    'Portfolio Sokudo'             // Polaco
		],
	    tags: [],
	    sprite: './src/assets/images/items/rotom-catalog.png',
	    price: 1000000000,
		tier: 'admin',
		isEquipable: true,
		isRetirable: true,
	   	description: [
		    '[ADMIN]Allows, whenever possible, changing the appearance of Pokémon to another evolutionary stage.[/ADMIN]', // Inglés
		    '[ADMIN]Permite, cuando sea posible, cambiar el aspecto de los Pokémon a otra etapa evolutiva.[/ADMIN]', // Español
		    '[ADMIN]Permet, lorsque cela est possible, de modifier l’apparence des Pokémon vers un autre stade évolutif.[/ADMIN]', // Francés
		    '[ADMIN]Permite, quando possível, alterar a aparência dos Pokémon para outro estágio evolutivo.[/ADMIN]', // Portugués
		    '[ADMIN]Permette, quando possibile, di cambiare l’aspetto dei Pokémon a un altro stadio evolutivo.[/ADMIN]', // Italiano
		    '[ADMIN]Ermöglicht es, wenn möglich, das Aussehen von Pokémon in eine andere Entwicklungsstufe zu ändern.[/ADMIN]', // Alemán
		    '[ADMIN]可能な場合、ポケモンの見た目を別の進化段階に変更できる。[/ADMIN]', // Japonés
		    '[ADMIN]가능한 경우 포켓몬의 외형을 다른 진화 단계로 변경할 수 있습니다.[/ADMIN]', // Coreano
		    '[ADMIN]在可能的情况下，可以将宝可梦的外观更改为其他进化阶段。[/ADMIN]', // Chino
		    '[ADMIN]Pozwala, gdy to możliwe, zmienić wygląd Pokémonów na inny etap ewolucji.[/ADMIN]' // Polaco
		],
	    condition: {
	    	key: 'smeargle'
	    },
	},
	mitsuesCocktail: {
		id: 'mitsuesCocktail',
		name: [
			"Mitsue's Cocktail",
			"Coctel de Mitsue",
			"Cocktail de Mitsue",
			"Coquetel de Mitsue",
			"Cocktail di Mitsue",
			"Mitsues Cocktail",
			"荊のカクテル",
			"가시의 칵테일",
			"荆棘鸡尾酒",
			"Koktajl Mitsue",
		],
		tags: [],
		sprite: './src/assets/images/items/mitsues_cocktail.png',
		price: 1000000000,
		tier: 'admin',
		isEquipable: true,
		isRetirable: false,
		description: [
			"[ADMIN]Allows Pokémon to return to their initial level.[/ADMIN]",     
			"[ADMIN]Permite devolver los Pokémon a su nivel inicial.[/ADMIN]",      
			"[ADMIN]Permet de ramener les Pokémon à leur niveau initial.[/ADMIN]",  
			"[ADMIN]Permite devolver os Pokémon ao seu nível inicial.[/ADMIN]",    
			"[ADMIN]Permette di riportare i Pokémon al loro livello iniziale.[/ADMIN]", 
			"[ADMIN]Ermöglicht es, Pokémon auf ihr Anfangslevel zurückzusetzen.[/ADMIN]",
			"[ADMIN]ポケモンを初期レベルに戻すことができる。[/ADMIN]",               
			"[ADMIN]포켓몬을 초기 레벨로 되돌릴 수 있다.[/ADMIN]",                  
			"[ADMIN]可使宝可梦恢复到初始等级。[/ADMIN]",                                                        
			"[ADMIN]Pozwala przywrócić Pokémony do ich początkowego poziomu.[/ADMIN]", 
		],
		condition: {
			key: 'maractus'
		},
	},
	revysBook: {
		id: 'revysBook',
		name: [
			"Revy's Book", // Inglés
		    'Libro de Revy', // Español
		    'Livre de Revy', // Francés
		    'Livro da Revy', // Portugués
		    'Libro di Revy', // Italiano
		    'Revys Buch', // Alemán
		    'レヴィの本', // Japonés
		    '레비의 책', // Coreano
		    '蕾薇之书', // Chino
		    'Księga Revy' // Polaco
		],
		tags: [],
		sprite: './src/assets/images/items/rule-book.png',
		price: 1000000000,
		tier: 'admin',
		isEquipable: true,
		isRetirable: true,
		description: [
			`[ADMIN]Unlocks the Wave Creator function for the Map.[/ADMIN]`, // inglés
			`[ADMIN]Desbloquea la función Creador de Oleadas en el Mapa.[/ADMIN]`, // español
			`[ADMIN]Débloque la fonction Créateur de Vagues sur la Carte.[/ADMIN]`, // francés
			`[ADMIN]Desbloqueia a função Criador de Ondas no Mapa.[/ADMIN]`, // portugués
			`[ADMIN]Sblocca la funzione Crea Ondate nella Mappa.[/ADMIN]`, // italiano
			`[ADMIN]Schaltet die Wellen-Ersteller-Funktion auf der Karte frei.[/ADMIN]`, // alemán
			`[ADMIN]マップのウェーブクリエイター機能を解放する。[/ADMIN]`, // japonés
			`[ADMIN]맵의 웨이브 생성기 기능을 잠금 해제합니다.[/ADMIN]`, // coreano
			`[ADMIN]解锁地图的波次创建器功能。[/ADMIN]`, // chino
			`[ADMIN]Odblokowuje funkcję Kreatora Fal na Mapie.[/ADMIN]` // polaco
		],
		condition: {
			id: [53]
		},
	},
	fullIncense: {
		id: 'fullIncense',
		name: [
		  	'Full Incense',
		  	'Incienso Lento',
		  	'Encens Plein',
		  	'Incenso Cheio',
		  	'Distramuleto',
		  	'Schwerschweifrauch',
		  	'まんぷくおこう',
		  	'만복향로',
		  	'飽腹薰香',
		  	'Pełne Kadzidło'
		],
		tags: ['power'],
		sprite: './src/assets/images/items/full.png',
		price: 0,
		tier: 'legendary',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases [POWER]power[/POWER] by 2.5 for each second elapsed during the wave.`, // inglés
			`Aumenta el [POWER]poder[/POWER] en 2,5 por cada segundo transcurrido durante la oleada.`, // español
			`Augmente la [POWER]puissance[/POWER] de 2,5 pour chaque seconde écoulée pendant la vague.`, // francés
			`Aumenta o [POWER]poder[/POWER] em 2,5 para cada segundo decorrido durante a onda.`, // portugués
			`Aumenta il [POWER]potere[/POWER] di 2,5 per ogni secondo trascorso durante l'ondata.`, // italiano
			`Erhöht die [POWER]Kraft[/POWER] um 2,5 für jede während der Welle verstrichene Sekunde.`, // alemán
			`ウェーブ中に経過した1秒ごとに[POWER]パワー[/POWER]が2.5増加する。`, // japonés
			`웨이브 동안 경과한 1초마다 [POWER]위력[/POWER]이 2.5 증가합니다.`, // coreano
			`在波次期间每经过1秒，[POWER]攻击力[/POWER]提高2.5。`, // chino
			`Zwiększa [POWER]siłę[/POWER] o 2,5 za każdą sekundę, która upłynęła podczas fali.` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 404, 142, 144, 111, 173],
			attackType: 'aura'
		},
	},
	eviolite: {
		id: 'eviolite',
		name: [
		  	'Eviolite',
		  	'Mineral Evolutivo',
		  	'Évoluroc',
		  	'Eviolite',
		  	'Evolcondensa',
		  	'Evolith',
		  	'しんかのきせき',
		  	'진화의휘석',
		  	'進化奇石',
		  	'Eviolite'
		],
		tags: ['power', 'range', 'speed'],
		sprite: './src/assets/images/items/eviolite.png',
		price: 0,
		tier: 'legendary',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases [POWER]power[/POWER] and [RANGE]range[/RANGE] by 20% and reduces [SPEED]recharge speed[/SPEED] by 20%. Only [POKEMON]Pokémon[/POKEMON] level 50 or lower can hold it.`, // inglés
			`Aumenta el [POWER]poder[/POWER] y el [RANGE]alcance[/RANGE] un 20% y reduce la [SPEED]velocidad de recarga[/SPEED] un 20%. Solo pueden llevarlo los [POKEMON]Pokémon[/POKEMON] de nivel 50 o inferior.`, // español
			`Augmente la [POWER]puissance[/POWER] et la [RANGE]portée[/RANGE] de 20 % et réduit la [SPEED]vitesse de recharge[/SPEED] de 20 %. Seuls les [POKEMON]Pokémon[/POKEMON] de niveau 50 ou inférieur peuvent le tenir.`, // francés
			`Aumenta o [POWER]poder[/POWER] e o [RANGE]alcance[/RANGE] em 20% e reduz a [SPEED]velocidade de recarga[/SPEED] em 20%. Apenas [POKEMON]Pokémon[/POKEMON] de nível 50 ou inferior podem segurá-lo.`, // portugués
			`Aumenta la [POWER]potenza[/POWER] e la [RANGE]portata[/RANGE] del 20% e riduce la [SPEED]velocità di ricarica[/SPEED] del 20%. Solo i [POKEMON]Pokémon[/POKEMON] di livello 50 o inferiore possono tenerlo.`, // italiano
			`Erhöht [POWER]Stärke[/POWER] und [RANGE]Reichweite[/RANGE] um 20 % und verringert die [SPEED]Aufladegeschwindigkeit[/SPEED] um 20 %. Nur [POKEMON]Pokémon[/POKEMON] auf Level 50 oder niedriger können es tragen.`, // alemán
			`[POWER]威力[/POWER]と[RANGE]射程[/RANGE]が20%上昇し、[SPEED]再チャージ速度[/SPEED]が20%低下する。レベル50以下の[POKEMON]ポケモン[/POKEMON]のみ持つことができる。`, // japonés
			`[POWER]위력[/POWER]과 [RANGE]사거리[/RANGE]가 20% 증가하고 [SPEED]재충전 속도[/SPEED]가 20% 감소한다. 레벨 50 이하의 [POKEMON]포켓몬[/POKEMON]만 지닐 수 있다.`, // coreano
			`[POWER]威力[/POWER]和[RANGE]射程[/RANGE]提高20%，[SPEED]充能速度[/SPEED]降低20%。只有等级不超过50级的[POKEMON]宝可梦[/POKEMON]才能携带。`, // chino
			`Zwiększa [POWER]moc[/POWER] i [RANGE]zasięg[/RANGE] o 20%, a także zmniejsza [SPEED]szybkość ładowania[/SPEED] o 20%. Mogą go trzymać tylko [POKEMON]Pokémony[/POKEMON] na poziomie 50 lub niższym.` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 142, 144, 107, 128, 134, 173],
			level: 50,
			attackType: 'aura'
		},
	},
	altarianite: {
		id: 'altarianite',
		name: [
		  	'Altarianite',
		  	'Altarianita',
		  	'Altarianite',
		  	'Altarianita',
		  	'Altarianite',
		  	'Altarianit',
		  	'チルタリスナイト',
		  	'파비코리나이트',
		  	'七夕青鳥進化石',
		  	'Altarianit'
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/altarianite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`You feel like you're floating whenever you touch this thing... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Sientes que estás flotando cada vez que tocas esto... Está rebosando de Energía Infinita.`, // español
			`Tu as l'impression de flotter chaque fois que tu touches cette chose... Elle déborde d'Énergie Infinie.`, // francés
			`Você sente como se estivesse flutuando sempre que toca nisso... Está transbordando de Energia Infinita.`, // portugués
			`Ti senti come se stessi fluttuando ogni volta che tocchi questa cosa... È traboccante di Energia Infinita.`, // italiano
			`Du hast das Gefühl zu schweben, wann immer du dieses Ding berührst... Es quillt über vor Unendlicher Energie.`, // alemán
			`これに触れるたびに、浮いているような感覚がする……インフィニティエネルギーがあふれている。`, // japonés
			`이것을 만질 때마다 떠 있는 듯한 기분이 들어... 인피니티 에너지가 넘쳐흐르고 있어.`, // coreano
			`每当触碰这个东西，你都会感觉自己仿佛漂浮起来……里面充满了无限能量。`, // chino
			`Za każdym razem, gdy dotykasz tego przedmiotu, masz wrażenie, że unosisz się w powietrzu... Przepełnia go Nieskończona Energia.` // polaco
		],
		condition: {
			key: 'altaria'
		}
	},
	sharpedonite: {
		id: 'sharpedonite',
		name: [
		  	'Sharpedonite',
		  	'Sharpedite',
		  	'Sharpedite',
		  	'Sharpedite',
		  	'Sharpedonite',
		  	'Sharpedonit',
		  	'サメハダナイト',
		  	'샤크니타이트',
		  	'巨牙鯊進化石',
		  	'Szarpedonit'
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/sharpedonite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`The orb itself feels like it wants to bolt away... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`El propio orbe parece querer salir disparado... Está rebosando de Energía Infinita.`, // español
			`L'orbe lui-même semble vouloir s'enfuir à toute vitesse... Il déborde d'Énergie Infinie.`, // francés
			`O próprio orbe parece querer sair disparado... Está transbordando de Energia Infinita.`, // portugués
			`La sfera stessa sembra voler scappare via... È traboccante di Energia Infinita.`, // italiano
			`Die Kugel selbst fühlt sich an, als wolle sie davonflitzen... Sie quillt über vor Unendlicher Energie.`, // alemán
			`このオーブ自体が、今にも逃げ出したがっているように感じる……インフィニティエネルギーがあふれている。`, // japonés
			`이 오브 자체가 도망치고 싶어 하는 것 같아... 인피니티 에너지가 넘쳐흐르고 있어.`, // coreano
			`这个宝珠本身感觉就像想要飞奔而去……里面充满了无限能量。`, // chino
			`Sama kula wydaje się, jakby chciała uciec... Przepełnia ją Nieskończona Energia.` // polaco
		],
		condition: {
			key: 'sharpedo'
		}
	},
	aerodactylite: {
		id: 'aerodactylite',
		name: [
			'Aerodactylite', // inglés
			'Aerodactylita', // español
			'Aéroptérite', // francés
			'Aerodactylite', // portugués
			'Aerodactylite', // italiano
			'Aerodactylit', // alemán
			'プテラナイト', // japonés
			'프테라나이트', // coreano
			'化石翼龙进化石', // chino
			'Aerodactylit' // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/aerodactylite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`You feel a bit of anger holding this thing, there are some rocks that refuse to come off... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Sientes un poco de rabia al sostener esto, hay algunas rocas que se niegan a desprenderse... Está rebosando de Energía Infinita.`, // español
			`Tu ressens un peu de colère en tenant cette chose, il y a quelques rochers qui refusent de se détacher... Elle déborde d'Énergie Infinie.`, // francés
			`Você sente um pouco de raiva ao segurar isso, há algumas pedras que se recusam a sair... Está transbordando de Energia Infinita.`, // portugués
			`Provi un po' di rabbia tenendo questa cosa, ci sono alcune rocce che non vogliono staccarsi... È traboccante di Energia Infinita.`, // italiano
			`Du verspürst ein wenig Wut, während du dieses Ding hältst, einige Steine lassen sich einfach nicht lösen... Es quillt über vor Unendlicher Energie.`, // alemán
			`これを持っていると少し怒りを感じる。どうしても取れない岩がいくつか付いている……インフィニティエネルギーがあふれている。`, // japonés
			`이것을 들고 있으면 조금 화가 나. 떨어지지 않는 돌이 몇 개 붙어 있어... 인피니티 에너지가 넘쳐흐르고 있어.`, // coreano
			`拿着这个东西时，你感到有些生气，还有一些石头怎么也弄不下来……里面充满了无限能量。`, // chino
			`Czujesz odrobinę złości, trzymając to w dłoni, niektóre kamienie nie chcą się oderwać... Przepełnia je Nieskończona Energia.` // polaco
		],
		condition: {
			key: 'aerodactyl'
		}
	},
	koffingJelly: {
	    id: 'koffingJelly',
	    name: [
		  	'Koffing Jelly',
		  	'Gelatina Koffing',
		  	'Gelée Koffing',
		  	'Geleia Koffing',
		  	'Gelatina Koffing',
		  	'Smogon-Gelee',
		  	'ドガースゼリー',
		  	'또가스젤리',
		  	'瓦斯彈果凍',
		  	'Galaretka Koffinga'
		],
	    tags: ['utility'],
	    sprite: './src/assets/images/items/poison-export.png',
	    price: 0,
		tier: 'legendary',
		isEquipable: true,
		isRetirable: true,
	    description: [
			`Increases [SPEED]recharge speed[/SPEED] by 1.1 seconds and lets the holder inflict [POISON]poison[/POISON] on [ENEMY]enemies[/ENEMY].`, // inglés
			`Aumenta la [SPEED]velocidad de recarga[/SPEED] en 1,1 segundos y permite al portador envenenar a los [ENEMY]enemigos[/ENEMY].`, // español
			`Augmente la [SPEED]vitesse de recharge[/SPEED] de 1,1 seconde et permet au porteur d'empoisonner les [ENEMY]ennemis[/ENEMY].`, // francés
			`Aumenta a [SPEED]velocidade de recarga[/SPEED] em 1,1 segundos e permite ao portador envenenar os [ENEMY]inimigos[/ENEMY].`, // portugués
			`Aumenta la [SPEED]velocità di ricarica[/SPEED] di 1,1 secondi e permette al portatore di avvelenare i [ENEMY]nemici[/ENEMY].`, // italiano
			`Erhöht die [SPEED]Aufladegeschwindigkeit[/SPEED] um 1,1 Sekunden und ermöglicht es dem Träger, [ENEMY]Gegner[/ENEMY] zu [POISON]vergiften[/POISON].`, // alemán
			`[SPEED]再チャージ速度[/SPEED]が1.1秒増加し、持ち主が[ENEMY]敵[/ENEMY]を[POISON]毒[/POISON]状態にできるようになる。`, // japonés
			`[SPEED]재충전 속도[/SPEED]가 1.1초 증가하고, 지닌 포켓몬이 [ENEMY]적[/ENEMY]에게 [POISON]독[/POISON]을 부여할 수 있게 된다.`, // coreano
			`[SPEED]充能速度[/SPEED]提高1.1秒，并使持有者能够对[ENEMY]敌人[/ENEMY]施加[POISON]中毒[/POISON]效果。`, // chino
			`Zwiększa [SPEED]szybkość ładowania[/SPEED] o 1,1 sekundy i pozwala posiadaczowi zatruwać [ENEMY]wrogów[/ENEMY].` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 126, 142, 144, 6, 14, 25, 122, 113, 95, 173, 141, 135, 121, 203, 227, 220, 230],
			ability: [
				'signalBeam', 'twineedle', 'icicleSpear', 'icyWind', 'cryogenicCannon', 'twineedleMega', 'flowerTrick',
				'uTurn', 'dazzlingGleam', 'flamethrower', 'berserk', 'fireLash', 'precipiceBlades',
				'solarBeam', 'hydroCannon', 'zapCannon', 'hyperBeam', 'meteorBeam', 'iceBeam', 'steelBeam', 'steamEruption', 'soulHeartReactor', 
				'psybeam', 'cryogenicCannon', 'moongeistBeam',
				'boomburst', 'machBolt', 'liquidVoice', 'drumBeating', 'originPulse', 'charmedCharm', 'emptyLight'
			],
			orbital: true,
			attackType: ['area', 'aura', 'stream'],
		},
	},
	luminousMoss: {
	    id: 'luminousMoss',
	    name: [
		  	'Luminous Moss',
		  	'Musgo Luminoso',
		  	'Mousse Lumineuse',
		  	'Musgo Luminoso',
		  	'Muschio Splendente',
		  	'Moosball',
		  	'ひかりごけ',
		  	'빛이끼',
		  	'發光苔蘚',
		  	'Świecący Mech'
		],
	    tags: ['range'],
	    sprite: './src/assets/images/items/luminous-moss.png',
	    price: 500000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
	    description: [
		  	`Increases [RANGE]range[/RANGE] by 25. Can only be held by [POKEMON]Pokémon[/POKEMON] with [ABILITY]Illuminate ability[/ABILITY].`, // inglés
			`Aumenta el [RANGE]alcance[/RANGE] en 25. Solo puede llevarlo un [POKEMON]Pokémon[/POKEMON] con la [ABILITY]habilidad Iluminación[/ABILITY].`, // español
			`Augmente la [RANGE]portée[/RANGE] de 25. Ne peut être tenu que par un [POKEMON]Pokémon[/POKEMON] doté de la [ABILITY]capacité Éclairage[/ABILITY].`, // francés
			`Aumenta o [RANGE]alcance[/RANGE] em 25. Só pode ser segurado por um [POKEMON]Pokémon[/POKEMON] com a [ABILITY]habilidade Iluminação[/ABILITY].`, // portugués
			`Aumenta la [RANGE]gittata[/RANGE] di 25. Può essere tenuto solo da un [POKEMON]Pokémon[/POKEMON] con l'[ABILITY]abilità Illuminazione[/ABILITY].`, // italiano
			`Erhöht die [RANGE]Reichweite[/RANGE] um 25. Kann nur von einem [POKEMON]Pokémon[/POKEMON] mit der [ABILITY]Fähigkeit Erleuchtung[/ABILITY] getragen werden.`, // alemán
			`[RANGE]射程[/RANGE]が25上がる。[ABILITY]特性「はっこう」[/ABILITY]を持つ[POKEMON]ポケモン[/POKEMON]だけが持てる。`, // japonés
			`[RANGE]사거리[/RANGE]가 25 증가합니다. [ABILITY]발광[/ABILITY] 특성을 가진 [POKEMON]포켓몬[/POKEMON]만 지닐 수 있습니다.`, // coreano
			`[RANGE]射程[/RANGE]提高25。只有拥有[ABILITY]发光[/ABILITY]特性的[POKEMON]宝可梦[/POKEMON]才能携带。`, // chino
			`Zwiększa [RANGE]zasięg[/RANGE] o 25. Może być trzymany tylko przez [POKEMON]Pokémona[/POKEMON] z [ABILITY]umiejętnością Iluminacja[/ABILITY].` // polaco
		],
		condition: {
			ability: ['illuminate', 'illuminateBuff'],
		},
		restriction: {
			id: [19, 70, 83, 101, 404, 142, 173],
		},
	},
	sootheBell: {
	    id: 'sootheBell',
	    name: [
		  	'Soothe Bell',
		  	'Campana Alivio',
		  	'Grelot Zen',
		  	'Sino de Alívio',
		  	'Calmanella',
		  	'Sanftglocke',
		  	'やすらぎのすず',
		  	'편안의방울',
		  	'安撫之鈴',
		  	'Dzwoneczek Ukojenia'
		],
	    tags: ['utility'],
	    sprite: './src/assets/images/items/soothe-bell.png',
	    price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
	    description: [
		  	`Increases the number of [PROJECTILE]waves[/PROJECTILE] fired by 2.`, // inglés
			`Aumenta en 2 el número de [PROJECTILE]ondas[/PROJECTILE] disparadas.`, // español
			`Augmente de 2 le nombre de [PROJECTILE]vagues[/PROJECTILE] tirées.`, // francés
			`Aumenta em 2 o número de [PROJECTILE]ondas[/PROJECTILE] disparadas.`, // portugués
			`Aumenta di 2 il numero di [PROJECTILE]ondate[/PROJECTILE] lanciate.`, // italiano
			`Erhöht die Anzahl der abgefeuerten [PROJECTILE]Wellen[/PROJECTILE] um 2.`, // alemán
			`放つ[PROJECTILE]波[/PROJECTILE]の数が2つ増える。`, // japonés
			`발사하는 [PROJECTILE]파동[/PROJECTILE]의 수가 2개 증가합니다.`, // coreano
			`发射的[PROJECTILE]波[/PROJECTILE]数量增加2道。`, // chino
			`Zwiększa liczbę wystrzeliwanych [PROJECTILE]fal[/PROJECTILE] o 2.` // polaco
		],
		condition: {
			ability: ['boomburst', 'liquidVoice', 'drumBeating', 'originPulse', 'charmedCharm', 'emptyLight']
		},
		restriction: {
			id: [19, 70, 83, 101, 404, 142, 144, 173]
		},
	},
	propCase: {
	    id: 'propCase',
	    name: [
		  	'Prop Case',
		  	'Neceser',
		  	'Boîte Parure',
		  	'Necessaire',
		  	'Portagadget',
		  	'Deko-Box',
		  	'こものケース',
		  	'굿즈케이스',
		  	'物品箱',
		  	'Kufer z Rekwizytami'
		],
	    tags: ['utility'],
	    sprite: './src/assets/images/items/prop-case.png',
	    price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
	    description: [
			`When healing, [HEART]hearts[/HEART] are lost instead of restored. At the end of the wave, the [HEART]hearts[/HEART] lost because of this [ITEM]item[/ITEM] are restored. This [ITEM]item[/ITEM] cannot kill you.`, // inglés
			`Al curar, se pierden [HEART]corazones[/HEART] en vez de recuperarlos. Al final de la oleada, se restauran los [HEART]corazones[/HEART] perdidos por este [ITEM]objeto[/ITEM]. Este [ITEM]objeto[/ITEM] no puede matarte.`, // español
			`Lors des soins, les [HEART]cœurs[/HEART] sont perdus au lieu d'être récupérés. À la fin de la vague, les [HEART]cœurs[/HEART] perdus à cause de cet [ITEM]objet[/ITEM] sont restaurés. Cet [ITEM]objet[/ITEM] ne peut pas vous tuer.`, // francés
			`Ao curar, perdem-se [HEART]corações[/HEART] em vez de os recuperar. No final da vaga, os [HEART]corações[/HEART] perdidos devido a este [ITEM]item[/ITEM] são restaurados. Este [ITEM]item[/ITEM] não te pode matar.`, // portugués
			`Quando si cura, si perdono [HEART]cuori[/HEART] invece di recuperarli. Alla fine dell'ondata, i [HEART]cuori[/HEART] persi a causa di questo [ITEM]strumento[/ITEM] vengono ripristinati. Questo [ITEM]strumento[/ITEM] non può ucciderti.`, // italiano
			`Beim Heilen gehen [HEART]Herzen[/HEART] verloren, anstatt wiederhergestellt zu werden. Am Ende der Welle werden die durch diesen [ITEM]Gegenstand[/ITEM] verlorenen [HEART]Herzen[/HEART] wiederhergestellt. Dieser [ITEM]Gegenstand[/ITEM] kann dich nicht töten.`, // alemán
			`回復すると、[HEART]ハート[/HEART]を回復する代わりに失う。ウェーブ終了時に、この[ITEM]どうぐ[/ITEM]によって失った[HEART]ハート[/HEART]が回復する。この[ITEM]どうぐ[/ITEM]で倒されることはない。`, // japonés
			`회복할 때 [HEART]하트[/HEART]를 회복하는 대신 잃는다. 웨이브가 끝나면 이 [ITEM]도구[/ITEM]로 잃은 [HEART]하트[/HEART]가 복구된다. 이 [ITEM]도구[/ITEM]로는 죽지 않는다.`, // coreano
			`治疗时不会恢复[HEART]心心[/HEART]，反而会失去它们。波次结束时，会恢复因这个[ITEM]道具[/ITEM]而失去的[HEART]心心[/HEART]。这个[ITEM]道具[/ITEM]不会致死。`, // chino
			`Podczas leczenia traci się [HEART]serca[/HEART] zamiast je odzyskiwać. Na koniec fali przywracane są [HEART]serca[/HEART] utracone przez ten [ITEM]przedmiot[/ITEM]. Ten [ITEM]przedmiot[/ITEM] nie może cię zabić.` // polaco
		],
		condition: {
			ability: ['heal', 'bitterBlade', 'takeHeart', 'seedFlare', 'soulHeartReactor'],
		},
		restriction: {
			id: [19, 70, 83, 101, 404, 142, 144, 173]
		},
	},
	boiledEgg: {
	    id: 'boiledEgg',
	    name: [
		  'Boiled Egg',
		  'Huevo Cocido',
		  'Œuf Dur',
		  'Ovo Cozido',
		  'Uovo Sodo',
		  'Hartgekochtes Ei',
		  'ゆでたまご',
		  '삶은알',
		  '水煮蛋',
		  'Jajko na Twardo'
		],
	    tags: ['utility'],
	    sprite: './src/assets/images/items/boiled-egg.png',
	    price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
	    description: [
			`Increases [POKEMON]Swanna[/POKEMON] maximum number of [PROJECTILE]feathers[/PROJECTILE] by 10.`, // inglés
			`Aumenta en 10 el número máximo de [PROJECTILE]plumas[/PROJECTILE] de [POKEMON]Swanna[/POKEMON].`, // español
			`Augmente de 10 le nombre maximal de [PROJECTILE]plumes[/PROJECTILE] de [POKEMON]Lakmécygne[/POKEMON].`, // francés
			`Aumenta em 10 o número máximo de [PROJECTILE]penas[/PROJECTILE] de [POKEMON]Swanna[/POKEMON].`, // portugués
			`Aumenta di 10 il numero massimo di [PROJECTILE]piume[/PROJECTILE] di [POKEMON]Swanna[/POKEMON].`, // italiano
			`Erhöht die maximale Anzahl an [PROJECTILE]Federn[/PROJECTILE] von [POKEMON]Swaroness[/POKEMON] um 10.`, // alemán
			`[POKEMON]スワンナ[/POKEMON]の[PROJECTILE]羽根[/PROJECTILE]の最大数が10増加する。`, // japonés
			`[POKEMON]스완나[/POKEMON]의 [PROJECTILE]깃털[/PROJECTILE] 최대 개수가 10 증가한다.`, // coreano
			`[POKEMON]舞天鹅[/POKEMON]的[PROJECTILE]羽毛[/PROJECTILE]最大数量增加10。`, // chino
			`Zwiększa maksymalną liczbę [PROJECTILE]piór[/PROJECTILE] [POKEMON]Swanny[/POKEMON] o 10.` // polaco
		],
		condition: {
			ability: ['featherDance']
		},
		restriction: {
			id: [19, 70, 83, 101, 404, 142, 144, 173]
		},
	},
	nectar: {
	    id: 'nectar',
	    name: ['Nectar', 'Néctar', 'Nectar', 'Néctar', 'Nettare', 'Nektar', 'はなのミツ', '꽃꿀', '花蜜', 'Nektar'],
	    tags: ['utility'],
	    sprite: './src/assets/images/items/nectar.png',
	    price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
	    description: [
			`Triples the [HONEY]Honey Gather[/HONEY] stacks received.`, // inglés
			`Triplica las acumulaciones de [HONEY]Recogemiel[/HONEY] recibidas.`, // español
			`Triple les cumuls de [HONEY]Cherche Miel[/HONEY] reçus.`, // francés
			`Triplica as acumulações de [HONEY]Coleta de Mel[/HONEY] recebidas.`, // portugués
			`Triplica gli accumuli di [HONEY]Mielincetta[/HONEY] ricevuti.`, // italiano
			`Verdreifacht die erhaltenen [HONEY]Honigmaul[/HONEY]-Stapel.`, // alemán
			`獲得する[HONEY]みつあつめ[/HONEY]の蓄積数が3倍になる。`, // japonés
			`획득하는 [HONEY]꿀모으기[/HONEY] 중첩이 3배가 된다.`, // coreano
			`获得的[HONEY]采蜜[/HONEY]层数变为3倍。`, // chino
			`Potraja liczbę otrzymywanych ładunków [HONEY]Zbierania Miodu[/HONEY].` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173],
			ability: ['honeyGather'],
			attackType: 'aura'
		},
	},
	salacBerry: {
	    id: 'salacBerry',
	    name: [
		  	'Salac Berry',
		  	'Baya Aslac',
		  	'Baie Sailak',
		  	'Baga Salac',
		  	'Baccasalak',
		  	'Lydzibeere',
		  	'カムラのみ',
		  	'캄라열매',
		  	'釋陀果',
		  	'Salac Berry',
		],
	    tags: ['speed'],
	    sprite: './src/assets/images/items/salac.png',
	    price: 250000,
		tier: 'legendary',
		isEquipable: true,
		isRetirable: true,
	    description: [
			`After losing a [HEART]heart[/HEART], reduces [SPEED]recharge time[/SPEED] by 50% for 15 seconds.`, // inglés
			`Tras perder un [HEART]corazón[/HEART], reduce el [SPEED]tiempo de recarga[/SPEED] un 50% durante 15 segundos.`, // español
			`Après avoir perdu un [HEART]cœur[/HEART], réduit le [SPEED]temps de recharge[/SPEED] de 50 % pendant 15 secondes.`, // francés
			`Após perder um [HEART]coração[/HEART], reduz o [SPEED]tempo de recarga[/SPEED] em 50% durante 15 segundos.`, // portugués
			`Dopo aver perso un [HEART]cuore[/HEART], riduce il [SPEED]tempo di ricarica[/SPEED] del 50% per 15 secondi.`, // italiano
			`Verringert nach dem Verlust eines [HEART]Herzens[/HEART] die [SPEED]Aufladezeit[/SPEED] für 15 Sekunden um 50 %.`, // alemán
			`[HEART]ハート[/HEART]を失うと、15秒間[SPEED]再チャージ時間[/SPEED]が50%短縮される。`, // japonés
			`[HEART]하트[/HEART]를 잃으면 15초 동안 [SPEED]재충전 시간[/SPEED]이 50% 감소한다.`, // coreano
			`失去一颗[HEART]心心[/HEART]后，[SPEED]充能时间[/SPEED]缩短50%，持续15秒。`, // chino
			`Po utracie [HEART]serca[/HEART] skraca [SPEED]czas odnowienia[/SPEED] o 50% na 15 sekund.` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173],
			attackType: ['aura', 'stream', 'orbital']
		},
	},
	liechiBerry: {
	    id: 'liechiBerry',
	    name: [
		  'Liechi Berry',
		  'Baya Lichi',
		  'Baie Lichii',
		  'Baga Liechi',
		  'Baccaliechi',
		  'Lydzibeere',
		  'チイラのみ',
		  '치리열매',
		  '枝荔果',
		  'Liechi Berry',
		],
	    tags: ['power'],
	    sprite: './src/assets/images/items/liechi.png',
	    price: 250000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
	    description: [
			`After losing a [HEART]heart[/HEART], increases [POWER]power[/POWER] by 200 for 15 seconds.`, // inglés
			`Tras perder un [HEART]corazón[/HEART], aumenta el [POWER]poder[/POWER] en 200 durante 15 segundos.`, // español
			`Après avoir perdu un [HEART]cœur[/HEART], augmente la [POWER]puissance[/POWER] de 200 pendant 15 secondes.`, // francés
			`Após perder um [HEART]coração[/HEART], aumenta o [POWER]poder[/POWER] em 200 durante 15 segundos.`, // portugués
			`Dopo aver perso un [HEART]cuore[/HEART], aumenta la [POWER]potenza[/POWER] di 200 per 15 secondi.`, // italiano
			`Erhöht die [POWER]Stärke[/POWER] nach dem Verlust eines [HEART]Herzens[/HEART] für 15 Sekunden um 200.`, // alemán
			`[HEART]ハート[/HEART]を失うと、15秒間[POWER]威力[/POWER]が200増加する。`, // japonés
			`[HEART]하트[/HEART]를 잃으면 15초 동안 [POWER]위력[/POWER]이 200 증가한다.`, // coreano
			`失去一颗[HEART]心心[/HEART]后，[POWER]威力[/POWER]提高200，持续15秒。`, // chino
			`Po utracie [HEART]serca[/HEART] zwiększa [POWER]moc[/POWER] o 200 na 15 sekund.` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173],
			attackType: 'aura'
		},
	},
	lansatBerry: {
	    id: 'lansatBerry',
	    name: [
		  'Lansat Berry',
		  'Baya Zonlan',
		  'Baie Lansat',
		  'Baga Lansat',
		  'Baccalangsa',
		  'Lansatbeere',
		  'サンのみ',
		  '랑사열매',
		  '蘭薩果',
		  'Lansat Berry',
		],
	    tags: ['critical'],
	    sprite: './src/assets/images/items/lansat.png',
	    price: 250000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
	    description: [
			`After losing a [HEART]heart[/HEART], increases [CRITICAL]critical hit chance[/CRITICAL] by 60% for 15 seconds.`, // inglés
			`Tras perder un [HEART]corazón[/HEART], aumenta la [CRITICAL]probabilidad de golpe crítico[/CRITICAL] un 60% durante 15 segundos.`, // español
			`Après avoir perdu un [HEART]cœur[/HEART], augmente les [CRITICAL]chances de coup critique[/CRITICAL] de 60 % pendant 15 secondes.`, // francés
			`Após perder um [HEART]coração[/HEART], aumenta a [CRITICAL]chance de crítico[/CRITICAL] em 60% durante 15 segundos.`, // portugués
			`Dopo aver perso un [HEART]cuore[/HEART], aumenta la [CRITICAL]probabilità di colpo critico[/CRITICAL] del 60% per 15 secondi.`, // italiano
			`Erhöht nach dem Verlust eines [HEART]Herzens[/HEART] die [CRITICAL]Volltrefferchance[/CRITICAL] für 15 Sekunden um 60 %.`, // alemán
			`[HEART]ハート[/HEART]を失うと、15秒間[CRITICAL]急所率[/CRITICAL]が60%上昇する。`, // japonés
			`[HEART]하트[/HEART]를 잃으면 15초 동안 [CRITICAL]급소 확률[/CRITICAL]이 60% 증가한다.`, // coreano
			`失去一颗[HEART]心心[/HEART]后，[CRITICAL]会心率[/CRITICAL]提高60%，持续15秒。`, // chino
			`Po utracie [HEART]serca[/HEART] zwiększa [CRITICAL]szansę na cios krytyczny[/CRITICAL] o 60% na 15 sekund.` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173],
			attackType: 'aura'
		},
	},
	starfBerry: {
	    id: 'starfBerry',
	    name: [
		  'Starf Berry',
		  'Baya Arabol',
		  'Baie Frista',
		  'Baga Starf',
		  'Baccambola',
		  'Krambobeere',
		  'サンのみ',
		  '스타열매',
		  '星桃果',
		  'Starf Berry'
		],
	    tags: ['range'],
	    sprite: './src/assets/images/items/starf.png',
	    price: 250000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
	    description: [
			`After losing a [HEART]heart[/HEART], increases [RANGE]range[/RANGE] by 80 for 15 seconds.`, // inglés
			`Tras perder un [HEART]corazón[/HEART], aumenta el [RANGE]alcance[/RANGE] en 80 durante 15 segundos.`, // español
			`Après avoir perdu un [HEART]cœur[/HEART], augmente la [RANGE]portée[/RANGE] de 80 pendant 15 secondes.`, // francés
			`Após perder um [HEART]coração[/HEART], aumenta o [RANGE]alcance[/RANGE] em 80 durante 15 segundos.`, // portugués
			`Dopo aver perso un [HEART]cuore[/HEART], aumenta la [RANGE]portata[/RANGE] di 80 per 15 secondi.`, // italiano
			`Erhöht nach dem Verlust eines [HEART]Herzens[/HEART] die [RANGE]Reichweite[/RANGE] für 15 Sekunden um 80.`, // alemán
			`[HEART]ハート[/HEART]を失うと、15秒間[RANGE]射程[/RANGE]が80増加する。`, // japonés
			`[HEART]하트[/HEART]를 잃으면 15초 동안 [RANGE]사거리[/RANGE]가 80 증가한다.`, // coreano
			`失去一颗[HEART]心心[/HEART]后，[RANGE]射程[/RANGE]增加80，持续15秒。`, // chino
			`Po utracie [HEART]serca[/HEART] zwiększa [RANGE]zasięg[/RANGE] o 80 na 15 sekund.` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173],
			attackType: 'aura'
		},
	},
	oddKeystone: {
	    id: 'oddKeystone',
	    name: [
		  'Odd Keystone',
		  'Piedra Espíritu',
		  'Clé de Voûte',
		  'Pedra da Chave',
		  'Roccianima',
		  'Spiritkern',
		  'かなめいし',
		  '쐐기돌',
		  '楔石',
		  'Dziwny Zwornik'
		],
	    tags: ['power'],
	    sprite: './src/assets/images/items/odd-keystone.png',
	    price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
	    description: [
			`Increases [POWER]power[/POWER] by 40. [PROJECTILE]Orbiting projectiles[/PROJECTILE] periodically lose [RANGE]range[/RANGE] and regain it when they hit a target. Only [POKEMON]Spiritomb[/POKEMON] can hold this.`, // inglés
			`Aumenta el [POWER]poder[/POWER] en 40. Los [PROJECTILE]proyectiles orbitales[/PROJECTILE] pierden [RANGE]alcance[/RANGE] periódicamente y lo recuperan al golpear un objetivo. Solo [POKEMON]Spiritomb[/POKEMON] puede llevarlo.`, // español
			`Augmente la [POWER]puissance[/POWER] de 40. Les [PROJECTILE]projectiles en orbite[/PROJECTILE] perdent périodiquement de la [RANGE]portée[/RANGE] et la récupèrent lorsqu'ils touchent une cible. Seul [POKEMON]Spiritomb[/POKEMON] peut le tenir.`, // francés
			`Aumenta o [POWER]poder[/POWER] em 40. Os [PROJECTILE]projéteis em órbita[/PROJECTILE] perdem [RANGE]alcance[/RANGE] periodicamente e recuperam-no ao atingir um alvo. Só o [POKEMON]Spiritomb[/POKEMON] pode segurá-lo.`, // portugués
			`Aumenta la [POWER]potenza[/POWER] di 40. I [PROJECTILE]proiettili orbitanti[/PROJECTILE] perdono periodicamente [RANGE]portata[/RANGE] e la recuperano quando colpiscono un bersaglio. Solo [POKEMON]Spiritomb[/POKEMON] può tenerlo.`, // italiano
			`Erhöht die [POWER]Stärke[/POWER] um 40. [PROJECTILE]Umlaufende Projektile[/PROJECTILE] verlieren regelmäßig [RANGE]Reichweite[/RANGE] und gewinnen sie zurück, wenn sie ein Ziel treffen. Nur [POKEMON]Kryppuk[/POKEMON] kann es tragen.`, // alemán
			`[POWER]威力[/POWER]が40増加する。[PROJECTILE]周回する弾[/PROJECTILE]は定期的に[RANGE]射程[/RANGE]を失い、標的に命中すると射程を取り戻す。[POKEMON]ミカルゲ[/POKEMON]のみ持つことができる。`, // japonés
			`[POWER]위력[/POWER]이 40 증가한다. [PROJECTILE]궤도를 도는 투사체[/PROJECTILE]는 주기적으로 [RANGE]사거리[/RANGE]를 잃고, 대상에게 적중하면 사거리를 회복한다. [POKEMON]화강돌[/POKEMON]만 지닐 수 있다.`, // coreano
			`[POWER]威力[/POWER]增加40。[PROJECTILE]环绕飞行的投射物[/PROJECTILE]会周期性地失去[RANGE]射程[/RANGE]，命中目标后恢复射程。只有[POKEMON]花岩怪[/POKEMON]可以携带。`, // chino
			`Zwiększa [POWER]moc[/POWER] o 40. [PROJECTILE]Pociski krążące wokół użytkownika[/PROJECTILE] okresowo tracą [RANGE]zasięg[/RANGE] i odzyskują go po trafieniu w cel. Tylko [POKEMON]Spiritomb[/POKEMON] może go trzymać.` // polaco
		],
		condition: {
			key: 'spiritomb'
		},
		restriction: {
			id: [19, 70, 83, 101, 404, 142, 144, 173]
		},
	},
	expertBelt: {
	    id: 'expertBelt',
	    name: [
		  'Expert Belt',
		  'Cinturón Experto',
		  'Ceinture Pro',
		  'Cinto Expert',
		  'Cintura Expert',
		  'Expertengurt',
		  'たつじんのおび',
		  '달인의띠',
		  '達人帶',
		  'Pas Eksperta'
		],
	    tags: ['power', 'critical'],
	    sprite: './src/assets/images/items/expert-belt.png',
	    price: 80000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
	    description: [
			`Increases [POWER]power[/POWER] by 50 and [CRITICAL]critical hit chance[/CRITICAL] by 10%.`, // inglés
			`Aumenta el [POWER]poder[/POWER] en 50 y la [CRITICAL]probabilidad de golpe crítico[/CRITICAL] en un 10%.`, // español
			`Augmente la [POWER]puissance[/POWER] de 50 et les [CRITICAL]chances de coup critique[/CRITICAL] de 10 %.`, // francés
			`Aumenta o [POWER]poder[/POWER] em 50 e a [CRITICAL]chance de acerto crítico[/CRITICAL] em 10%.`, // portugués
			`Aumenta il [POWER]potere[/POWER] di 50 e la [CRITICAL]probabilità di colpo critico[/CRITICAL] del 10%.`, // italiano
			`Erhöht die [POWER]Kraft[/POWER] um 50 und die [CRITICAL]Chance auf kritische Treffer[/CRITICAL] um 10 %.`, // alemán
			`[POWER]パワー[/POWER]が50増加し、[CRITICAL]急所率[/CRITICAL]が10%増加する。`, // japonés
			`[POWER]위력[/POWER]이 50 증가하고 [CRITICAL]급소율[/CRITICAL]이 10% 증가합니다.`, // coreano
			`[POWER]攻击力[/POWER]提高50，[CRITICAL]暴击率[/CRITICAL]提高10%。`, // chino
			`Zwiększa [POWER]siłę[/POWER] o 50 oraz [CRITICAL]szansę na trafienie krytyczne[/CRITICAL] o 10%.` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173],
			attackType: 'aura'
		},
	},
	brickMail: {
	    id: 'brickMail',
	    name: [
		  	'Brick Mail',
		  	'Correo Ladrillo',
		  	'Lettre Brique',
		  	'Correio Tijolo',
		  	'Messaggio Mattone',
		  	'Ziegelbrief',
		  	'レンガメール',
		  	'벽돌메일',
		  	'磚塊郵件',
		  	'List Cegła'
		],
	    tags: ['range'],
	    sprite: './src/assets/images/items/brick-mail.png',
	    price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
	    description: [
			`Increases [RANGE]range[/RANGE] by 8 for each [POKEMON]Pokémon[/POKEMON] standing on a [MOUNTAIN]mountain tile[/MOUNTAIN].`, // inglés
			`Aumenta el [RANGE]alcance[/RANGE] en 8 por cada [POKEMON]Pokémon[/POKEMON] situado sobre una casilla de [MOUNTAIN]montaña[/MOUNTAIN].`, // español
			`Augmente la [RANGE]portée[/RANGE] de 8 pour chaque [POKEMON]Pokémon[/POKEMON] placé sur une case de [MOUNTAIN]montagne[/MOUNTAIN].`, // francés
			`Aumenta o [RANGE]alcance[/RANGE] em 8 para cada [POKEMON]Pokémon[/POKEMON] posicionado em uma casa de [MOUNTAIN]montanha[/MOUNTAIN].`, // portugués
			`Aumenta la [RANGE]portata[/RANGE] di 8 per ogni [POKEMON]Pokémon[/POKEMON] posizionato su una casella di [MOUNTAIN]montagna[/MOUNTAIN].`, // italiano
			`Erhöht die [RANGE]Reichweite[/RANGE] um 8 für jedes [POKEMON]Pokémon[/POKEMON], das auf einem [MOUNTAIN]Bergfeld[/MOUNTAIN] steht.`, // alemán
			`[MOUNTAIN]やま[/MOUNTAIN]のマスにいる[POKEMON]ポケモン[/POKEMON]1匹につき、[RANGE]射程[/RANGE]が8増加する。`, // japonés
			`[MOUNTAIN]산[/MOUNTAIN] 타일에 있는 [POKEMON]포켓몬[/POKEMON] 하나당 [RANGE]사거리[/RANGE]가 8 증가합니다.`, // coreano
			`每有一只[POKEMON]宝可梦[/POKEMON]站在[MOUNTAIN]山地[/MOUNTAIN]地块上，[RANGE]射程[/RANGE]就提高8。`, // chino
			`Zwiększa [RANGE]zasięg[/RANGE] o 8 za każdego [POKEMON]Pokémona[/POKEMON] stojącego na polu [MOUNTAIN]górskim[/MOUNTAIN].` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173],
			attackType: 'aura'
		},
	},
	tropicalMail: {
	    id: 'tropicalMail',
	    name: [
		  	'Tropical Mail',
		  	'Correo Tropical',
		  	'Lettre Tropicale',
		  	'Correio Tropical',
		  	'Messaggio Tropicale',
		  	'Tropenbrief',
		  	'トロピカルメール',
		  	'트로피컬메일',
		  	'熱帶郵件',
		  	'List Tropikalny'
		],
	    tags: ['power'],
	    sprite: './src/assets/images/items/tropic-mail.png',
	    price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
	    description: [
			`Increases [POWER]power[/POWER] by 20 for each [POKEMON]Pokémon[/POKEMON] standing on a [GRASS]grass tile[/GRASS].`, // inglés
			`Aumenta el [POWER]poder[/POWER] en 20 por cada [POKEMON]Pokémon[/POKEMON] situado sobre una casilla de [GRASS]hierba[/GRASS].`, // español
			`Augmente la [POWER]puissance[/POWER] de 20 pour chaque [POKEMON]Pokémon[/POKEMON] placé sur une case d'[GRASS]herbe[/GRASS].`, // francés
			`Aumenta o [POWER]poder[/POWER] em 20 para cada [POKEMON]Pokémon[/POKEMON] posicionado em uma casa de [GRASS]grama[/GRASS].`, // portugués
			`Aumenta il [POWER]potere[/POWER] di 20 per ogni [POKEMON]Pokémon[/POKEMON] posizionato su una casella d'[GRASS]erba[/GRASS].`, // italiano
			`Erhöht die [POWER]Kraft[/POWER] um 20 für jedes [POKEMON]Pokémon[/POKEMON], das auf einem [GRASS]Grasfeld[/GRASS] steht.`, // alemán
			`[GRASS]くさ[/GRASS]のマスにいる[POKEMON]ポケモン[/POKEMON]1匹につき、[POWER]パワー[/POWER]が20増加する。`, // japonés
			`[GRASS]풀[/GRASS] 타일에 있는 [POKEMON]포켓몬[/POKEMON] 하나당 [POWER]위력[/POWER]이 20 증가합니다.`, // coreano
			`每有一只[POKEMON]宝可梦[/POKEMON]站在[GRASS]草地[/GRASS]地块上，[POWER]攻击力[/POWER]就提高20。`, // chino
			`Zwiększa [POWER]siłę[/POWER] o 20 za każdego [POKEMON]Pokémona[/POKEMON] stojącego na polu [GRASS]trawy[/GRASS].` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173],
			attackType: 'aura'
		},
	},
	waveMail: {
	    id: 'waveMail',
	    name: [
		  	'Wave Mail',
		  	'Correo Ola',
		  	'Lettre Vague',
		  	'Correio Onda',
		  	'Messaggio Onda',
		  	'Wellenbrief',
		  	'なみのりメール',
		  	'파도메일',
		  	'波紋郵件',
		  	'List Fali'
		],
	    tags: ['speed'],
	    sprite: './src/assets/images/items/wave-mail.png',
	    price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
	    description: [
			`Reduces [SPEED]recharge time[/SPEED] by 3% for each [POKEMON]Pokémon[/POKEMON] standing on a [WATER]water tile[/WATER].`, // inglés
			`Reduce el [SPEED]tiempo de recarga[/SPEED] un 3% por cada [POKEMON]Pokémon[/POKEMON] situado sobre una casilla de [WATER]agua[/WATER].`, // español
			`Réduit le [SPEED]temps de recharge[/SPEED] de 3 % pour chaque [POKEMON]Pokémon[/POKEMON] placé sur une case d'[WATER]eau[/WATER].`, // francés
			`Reduz o [SPEED]tempo de recarga[/SPEED] em 3% para cada [POKEMON]Pokémon[/POKEMON] posicionado em um quadrado de [WATER]água[/WATER].`, // portugués
			`Riduce il [SPEED]tempo di ricarica[/SPEED] del 3% per ogni [POKEMON]Pokémon[/POKEMON] posizionato su una casella d'[WATER]acqua[/WATER].`, // italiano
			`Verringert die [SPEED]Aufladezeit[/SPEED] um 3 % für jedes [POKEMON]Pokémon[/POKEMON], das auf einem [WATER]Wasserfeld[/WATER] steht.`, // alemán
			`[WATER]みず[/WATER]のマスにいる[POKEMON]ポケモン[/POKEMON]1匹につき、[SPEED]再使用時間[/SPEED]が3%短くなる。`, // japonés
			`[WATER]물[/WATER] 타일에 있는 [POKEMON]포켓몬[/POKEMON] 하나당 [SPEED]재사용 대기시간[/SPEED]이 3% 감소합니다.`, // coreano
			`每有一只[POKEMON]宝可梦[/POKEMON]站在[WATER]水[/WATER]地块上，[SPEED]冷却时间[/SPEED]就缩短3%。`, // chino
			`Zmniejsza [SPEED]czas odnowienia[/SPEED] o 3% za każdego [POKEMON]Pokémona[/POKEMON] stojącego na polu [WATER]wody[/WATER].` // polaco
		],
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173],
			attackType: ['aura', 'stream', 'orbital']
		},
	},
	prismScale: {
	    id: 'prismScale',
	    name: [
		  	'Prism Scale',
		  	'Escama Bella',
		  	`Bel'Écaille`,
		  	'Escama Bela',
		  	'Splendisquama',
		  	'Schönschuppe',
		  	'きれいなウロコ',
		  	'고운비늘',
		  	'美麗鱗片',
		  	'Lśniąca Łuska'
		],
	    tags: ['range'],
	    sprite: './src/assets/images/items/prism-scale.png',
	    price: 0,
		tier: 'legendary',
		isEquipable: true,
		isRetirable: true,
	    description: [
			`A scale that belongs to [POKEMON]Milotic[/POKEMON], gain 0.5 additional [RANGE]range[/RANGE] for each [RIBBON]Ribbon[/RIBBON] obtained.`, // inglés
			`Una escama que pertenece a [POKEMON]Milotic[/POKEMON]. Obtiene 0,5 de [RANGE]alcance[/RANGE] adicional por cada [RIBBON]Cinta[/RIBBON] obtenida.`, // español
			`Une écaille appartenant à [POKEMON]Milotic[/POKEMON]. Gagne 0,5 de [RANGE]portée[/RANGE] supplémentaire pour chaque [RIBBON]Ruban[/RIBBON] obtenu.`, // francés
			`Uma escama que pertence a [POKEMON]Milotic[/POKEMON]. Ganha 0,5 de [RANGE]alcance[/RANGE] adicional para cada [RIBBON]Fita[/RIBBON] obtida.`, // portugués
			`Una squama appartenente a [POKEMON]Milotic[/POKEMON]. Ottiene 0,5 di [RANGE]portata[/RANGE] aggiuntiva per ogni [RIBBON]Fiocco[/RIBBON] ottenuto.`, // italiano
			`Eine Schuppe, die [POKEMON]Milotic[/POKEMON] gehört. Erhält für jedes erhaltene [RIBBON]Band[/RIBBON] 0,5 zusätzliche [RANGE]Reichweite[/RANGE].`, // alemán
			`[POKEMON]ミロカロス[/POKEMON]のうろこ。獲得した[RIBBON]リボン[/RIBBON]1つにつき、[RANGE]射程[/RANGE]が0.5追加される。`, // japonés
			`[POKEMON]밀로틱[/POKEMON]의 비늘입니다. 획득한 [RIBBON]리본[/RIBBON] 하나당 [RANGE]사거리[/RANGE]가 0.5 증가합니다.`, // coreano
			`属于[POKEMON]美纳斯[/POKEMON]的鳞片。每获得一条[RIBBON]缎带[/RIBBON]，[RANGE]射程[/RANGE]额外增加0.5。`, // chino
			`Łuska należąca do [POKEMON]Milotic[/POKEMON]. Zyskuje 0,5 dodatkowego [RANGE]zasięgu[/RANGE] za każdą zdobytą [RIBBON]Wstążkę[/RIBBON].` // polaco
		],
		condition: {
			id: [159]
		},
	},
	metalCoat: {
	    id: 'metalCoat',
	    name: [
		  	`Heavy Stone`, // inglés
			`Piedra Pesada`, // español
			`Pierre Lourde`, // francés
			`Pedra Pesada`, // portugués
			`Pietra Pesante`, // italiano
			`Schwerer Stein`, // alemán
			`ヘビーストーン`, // japonés
			`헤비 스톤`, // coreano
			`重石`, // chino
			`Ciężki Kamień` // polaco
		],
	    tags: ['utility'],
	    sprite: './src/assets/images/items/heavy-stone.png',
	    price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
	    description: [
			`Doubles [POKEMON]Bronzong’s[/POKEMON] [STUN]stun[/STUN] duration.`, // inglés
			`Duplica la duración del [STUN]aturdimiento[/STUN] de [POKEMON]Bronzong[/POKEMON].`, // español
			`Double la durée de l'[STUN]étourdissement[/STUN] de [POKEMON]Bronzong[/POKEMON].`, // francés
			`Duplica a duração do [STUN]atordoamento[/STUN] de [POKEMON]Bronzong[/POKEMON].`, // portugués
			`Raddoppia la durata dello [STUN]stordimento[/STUN] di [POKEMON]Bronzong[/POKEMON].`, // italiano
			`Verdoppelt die Dauer der [STUN]Betäubung[/STUN] von [POKEMON]Bronzong[/POKEMON].`, // alemán
			`[POKEMON]ドータクン[/POKEMON]の[STUN]ひるみ[/STUN]の時間が2倍になる。`, // japonés
			`[POKEMON]동탁군[/POKEMON]의 [STUN]기절[/STUN] 지속시간이 2배가 됩니다.`, // coreano
			`使[POKEMON]青铜钟[/POKEMON]造成的[STUN]眩晕[/STUN]持续时间翻倍。`, // chino
			`Podwaja czas trwania [STUN]ogłuszenia[/STUN] [POKEMON]Bronzonga[/POKEMON].` // polaco
		],
		condition: {
			id: [155]
		},
	},
	metalCoatReal: {
	    id: 'metalCoatReal',
	    name: [
		  	'Metal Coat',
		  	'Revestimiento Metálico',
		  	'Peau Métal',
		  	'Revestimento Metálico',
		  	'Metalcoperta',
		  	'Metallmantel',
		  	'メタルコート',
		  	'금속코트',
		  	'金屬膜',
		  	'Metalowa Powłoka'
		],
	    tags: [],
	    sprite: './src/assets/images/items/metal-coat.png',
	    price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
	    description: [
			`Reduces [POWER]power[/POWER] by 250 and [SPEED]recharge time[/SPEED] by 0.25s. Its attacks that would deal 1000 damage or less multiply their damage by x1.5.`, // inglés
			`Reduce el [POWER]poder[/POWER] en 250 y el [SPEED]tiempo de recarga[/SPEED] en 0,25 s. Sus ataques que infligirían 1000 de daño o menos multiplican su daño por x1,5.`, // español
			`Réduit la [POWER]puissance[/POWER] de 250 et le [SPEED]temps de recharge[/SPEED] de 0,25 s. Ses attaques qui infligeraient 1000 dégâts ou moins multiplient leurs dégâts par x1,5.`, // francés
			`Reduz o [POWER]poder[/POWER] em 250 e o [SPEED]tempo de recarga[/SPEED] em 0,25 s. Seus ataques que causariam 1000 de dano ou menos multiplicam seu dano por x1,5.`, // portugués
			`Riduce la [POWER]potenza[/POWER] di 250 e il [SPEED]tempo di ricarica[/SPEED] di 0,25 s. I suoi attacchi che infliggerebbero 1000 danni o meno moltiplicano i loro danni per x1,5.`, // italiano
			`Reduziert die [POWER]Kraft[/POWER] um 250 und die [SPEED]Aufladezeit[/SPEED] um 0,25 s. Seine Angriffe, die 1000 Schaden oder weniger verursachen würden, multiplizieren ihren Schaden mit x1,5.`, // alemán
			`[POWER]パワー[/POWER]が250減少し、[SPEED]再使用時間[/SPEED]が0.25秒短縮される。1000ダメージ以下を与える攻撃は、ダメージがx1.5倍になる。`, // japonés
			`[POWER]위력[/POWER]이 250 감소하고 [SPEED]재사용 대기시간[/SPEED]이 0.25초 감소합니다. 1000 이하의 피해를 줄 공격은 피해량이 x1.5배가 됩니다.`, // coreano
			`[POWER]威力[/POWER]降低250，[SPEED]冷却时间[/SPEED]缩短0.25秒。原本会造成1000点或更少伤害的攻击，其伤害会变为x1.5。`, // chino
			`Zmniejsza [POWER]siłę[/POWER] o 250 i [SPEED]czas odnowienia[/SPEED] o 0,25 s. Jego ataki, które zadałyby 1000 obrażeń lub mniej, mnożą swoje obrażenia przez x1,5.` // polaco
		],
		condition: {
			key: ['scizor', 'megaScizor']
		},
	},
	powerHerb: {
	    id: 'powerHerb',
	    name: [
		  	'Power Herb', // inglés
			'Hierba Única', // español
			'Herbe Pouvoir', // francés
			'Erva de Poder', // portugués
			'Vigorerba', // italiano
			'Power-Kraut', // alemán
			'パワフルハーブ', // japonés
			'파워풀허브', // coreano
			'强力香草', // chino
			'Mocne Zioło' // polaco
		],
	    tags: ['utility'],
	    sprite: './src/assets/images/items/power-herb.png',
	    price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
	    description: [
		  	'Reduces the number of attacks between special attacks by 2.', // inglés
			'Reduce en 2 el número de ataques entre ataques especiales.', // español
			'Réduit de 2 le nombre d’attaques entre les attaques spéciales.', // francés
			'Reduz em 2 o número de ataques entre ataques especiais.', // portugués
			'Riduce di 2 il numero di attacchi tra gli attacchi speciali.', // italiano
			'Reduziert die Anzahl der Angriffe zwischen Spezialangriffen um 2.', // alemán
			'特殊攻撃の間に必要な攻撃回数を2回減らす。', // japonés
			'특수 공격 사이의 공격 횟수를 2회 줄인다.', // coreano
			'使特殊攻击之间所需的攻击次数减少2次。', // chino
			'Zmniejsza o 2 liczbę ataków między atakami specjalnymi.' // polaco
		],
		condition: {
			id: [143, 192, 223]
		},
	},
	roomService: {
		id: 'roomService',
		name: [
		  	'Room Service', // inglés
			'Servicio de Habitaciones', // español
			'Service de Chambre', // francés
			'Serviço de Quarto', // portugués
			'Servizio in Camera', // italiano
			'Zimmer-Service', // alemán
			'ルームサービス', // japonés
			'룸서비스', // coreano
			'客房服务', // chino
			'Obsługa Pokojowa' // polaco
		],	
		tags: ['power', 'utility'],
		sprite: './src/assets/images/items/room-service.png',
		price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
		description: [
			`When a [HEART]heart[/HEART] is restored, increases the [POWER]power[/POWER] of all [POKEMON]POKÉMON[/POKEMON] by 20.`, // inglés
			`Cuando se restaura un [HEART]corazón[/HEART], aumenta en 20 el [POWER]poder[/POWER] de todos los [POKEMON]POKÉMON[/POKEMON].`, // español
			`Lorsqu'un [HEART]cœur[/HEART] est restauré, augmente de 20 la [POWER]puissance[/POWER] de tous les [POKEMON]POKÉMON[/POKEMON].`, // francés
			`Quando um [HEART]coração[/HEART] é restaurado, aumenta em 20 o [POWER]poder[/POWER] de todos os [POKEMON]POKÉMON[/POKEMON].`, // portugués
			`Quando viene ripristinato un [HEART]cuore[/HEART], aumenta di 20 il [POWER]potere[/POWER] di tutti i [POKEMON]POKÉMON[/POKEMON].`, // italiano
			`Wenn ein [HEART]Herz[/HEART] wiederhergestellt wird, erhöht sich die [POWER]Kraft[/POWER] aller [POKEMON]POKÉMON[/POKEMON] um 20.`, // alemán
			`[HEART]ハート[/HEART]が回復すると、すべての[POKEMON]ポケモン[/POKEMON]の[POWER]パワー[/POWER]が20増加する。`, // japonés
			`[HEART]하트[/HEART]가 회복되면 모든 [POKEMON]포켓몬[/POKEMON]의 [POWER]위력[/POWER]이 20 증가합니다.`, // coreano
			`每恢复一个[HEART]心[/HEART]，所有[POKEMON]宝可梦[/POKEMON]的[POWER]攻击力[/POWER]提高20。`, // chino
			`Gdy [HEART]serce[/HEART] zostanie przywrócone, [POWER]siła[/POWER] wszystkich [POKEMON]Pokémonów[/POKEMON] wzrasta o 20.` // polaco
		],
		condition: {
			ability: [
				'heal', 'bitterBlade', 'takeHeart', 'seedFlare', 'soulHeartReactor', 
			],
			attackType: 'aura',
			ability: ['grassPlatform', 'icePlatform', 'mount', 'rest', 'grimNeigh']
		},
		restriction: {
			id: [70, 142]
		}
	},
	ridePager: {
		id: 'ridePager',
		name: [
		  	'Ride Pager', // inglés
			'Buscamontura', // español
			'Appel Monture', // francés
			'Chamador de Montaria', // portugués
			'Chiamamontura', // italiano
			'Reit-Pager', // alemán
			'ライドギア', // japonés
			'라이드기어', // coreano
			'骑行呼叫器', // chino
			'Ride Pager' // polaco
		],	
		tags: ['power', 'utility'],
		sprite: './src/assets/images/items/ride-pager.png',
		price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases the [POWER]power[/POWER] of the [POKEMON]Pokémon[/POKEMON] standing on top of it by 50.`, // inglés
			`Aumenta en 50 el [POWER]poder[/POWER] del [POKEMON]Pokémon[/POKEMON] que está encima.`, // español
			`Augmente de 50 la [POWER]puissance[/POWER] du [POKEMON]Pokémon[/POKEMON] qui se trouve dessus.`, // francés
			`Aumenta em 50 o [POWER]poder[/POWER] do [POKEMON]Pokémon[/POKEMON] que está sobre ele.`, // portugués
			`Aumenta di 50 il [POWER]potere[/POWER] del [POKEMON]Pokémon[/POKEMON] che vi sta sopra.`, // italiano
			`Erhöht die [POWER]Kraft[/POWER] des [POKEMON]Pokémon[/POKEMON], das darauf steht, um 50.`, // alemán
			`その上にいる[POKEMON]ポケモン[/POKEMON]の[POWER]パワー[/POWER]が50増加する。`, // japonés
			`그 위에 있는 [POKEMON]포켓몬[/POKEMON]의 [POWER]위력[/POWER]이 50 증가합니다.`, // coreano
			`使站在其上的[POKEMON]宝可梦[/POKEMON]的[POWER]攻击力[/POWER]提高50。`, // chino
			`Zwiększa o 50 [POWER]siłę[/POWER] [POKEMON]Pokémona[/POKEMON] stojącego na nim.` // polaco
		],
		condition: {
			ability: ['grassPlatform', 'icePlatform', 'mount', 'rest', 'grimNeigh']
		},
		restriction: {
			id: [70, 142, 173]
		}
	},
	wacanBerry: {
	    id: 'wacanBerry',
	    name: [
		  	'Wacan Berry', // inglés
			'Baya Wacan', // español
			'Baie Parma', // francés
			'Fruta Wacan', // portugués
			'Bacca Wacan', // italiano
			'Wacanbeere', // alemán
			'シュカのみ', // japonés
			'꼬시개열매', // coreano
			'腰木果', // chino
			'Wacan Berry',// polaco
		],
	    tags: ['utility'],
	    sprite: './src/assets/images/items/wacan.png',
	    price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
	    description: [
			`Increases damage dealt by [POKEMON]Pokémon[/POKEMON] within [RANGE]range[/RANGE] by 20%. Strictly for [POKEMON]Charjabug[/POKEMON].`, // inglés
			`Aumenta un 20% el daño infligido por los [POKEMON]Pokémon[/POKEMON] dentro del [RANGE]alcance[/RANGE]. Exclusivamente para [POKEMON]Charjabug[/POKEMON].`, // español
			`Augmente de 20 % les dégâts infligés par les [POKEMON]Pokémon[/POKEMON] à portée. Exclusivement pour [POKEMON]Charjabug[/POKEMON].`, // francés
			`Aumenta em 20% o dano causado pelos [POKEMON]Pokémon[/POKEMON] dentro do [RANGE]alcance[/RANGE]. Exclusivamente para [POKEMON]Charjabug[/POKEMON].`, // portugués
			`Aumenta del 20% i danni inflitti dai [POKEMON]Pokémon[/POKEMON] entro la [RANGE]portata[/RANGE]. Esclusivamente per [POKEMON]Charjabug[/POKEMON].`, // italiano
			`Erhöht den von [POKEMON]Pokémon[/POKEMON] innerhalb der [RANGE]Reichweite[/RANGE] verursachten Schaden um 20 %. Ausschließlich für [POKEMON]Charjabug[/POKEMON].`, // alemán
			`[RANGE]範囲[/RANGE]内の[POKEMON]ポケモン[/POKEMON]が与えるダメージが20%増加する。[POKEMON]デンヂムシ[/POKEMON]専用。`, // japonés
			`[RANGE]사거리[/RANGE] 내 [POKEMON]포켓몬[/POKEMON]이 주는 피해가 20% 증가합니다. [POKEMON]전지충이[/POKEMON] 전용입니다.`, // coreano
			`[RANGE]范围[/RANGE]内的[POKEMON]宝可梦[/POKEMON]造成的伤害提高20%。仅限[POKEMON]虫电宝[/POKEMON]使用。`, // chino
			`Zwiększa o 20% obrażenia zadawane przez [POKEMON]Pokémony[/POKEMON] znajdujące się w [RANGE]zasięgu[/RANGE]. Wyłącznie dla [POKEMON]Charjabuga[/POKEMON].` // polaco
		],
		condition: {
			key: 'charjabug',
		},
	},
	pokeSkates: { 
		id: 'pokeSkates',
		name: [
			'Poké Skates', // inglés
			'Poké Patines', // español
			'Poké Rollers', // francés
			'Poké Patins', // portugués
			'Poké Pattini', // italiano
			'Poké-Rollschuhe', // alemán
			'ポケスケーター', // japonés
			'포켓스케이터', // coreano
			'宝可滑板鞋', // chino
			'Poké Skates' // polaco
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/poke-skates.png',
		price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: false,
		description: [
			`Allows the holder to move [SHAKE]slightly[/SHAKE] by clicking on a nearby point.`, // inglés
			`Permite al portador moverse [SHAKE]ligeramente[/SHAKE] al hacer clic en un punto cercano.`, // español
			`Permet au porteur de se déplacer [SHAKE]légèrement[/SHAKE] en cliquant sur un point proche.`, // francés
			`Permite ao portador mover-se [SHAKE]ligeiramente[/SHAKE] ao clicar em um ponto próximo.`, // portugués
			`Permette a chi lo tiene di muoversi [SHAKE]leggermente[/SHAKE] facendo clic su un punto vicino.`, // italiano
			`Ermöglicht es dem Träger, sich durch Klicken auf einen nahegelegenen Punkt [SHAKE]leicht[/SHAKE] zu bewegen.`, // alemán
			`近くの地点をクリックすると、持っているポケモンが[SHAKE]少し[/SHAKE]移動できるようになる。`, // japonés
			`주변 지점을 클릭하면 지닌 포켓몬이 [SHAKE]약간[/SHAKE] 이동할 수 있게 됩니다.`, // coreano
			`点击附近的地点可以让持有者[SHAKE]稍微[/SHAKE]移动。`, // chino
			`Pozwala posiadaczowi [SHAKE]nieznacznie[/SHAKE] przemieszczać się poprzez kliknięcie pobliskiego punktu.` // polaco
		],
		restriction: {
			id: [70, 404, 142, 173, 242],
			ability: [
				'grassPlatform', 'icePlatform', 'mount', 'rest', 
			]
		},
	},
	berryPouch: { 
		id: 'berryPouch',
		name: [
			'Berry Pouch', // inglés
			'Bolsa de Bayas', // español
			'Sac à Baies', // francés
			'Bolsa de Frutas', // portugués
			'Sacchetto di Bacche', // italiano
			'Beerenbeutel', // alemán
			'きのみポーチ', // japonés
			'나무열매 주머니', // coreano
			'树果袋', // chino
			'Pokrowiec na jagody' // polaco
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/berry-pouch.png',
		price: 0,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
		description: [
			`When the [POKEMON]pokemon[/POKEMON] above this one consumes a [ITEM]Berry[/ITEM], this [POKEMON]pokemon[/POKEMON] also gains its benefits.`, // inglés
			`Cuando el [POKEMON]Pokémon[/POKEMON] que está encima de este consume una [ITEM]Baya[/ITEM], este [POKEMON]Pokémon[/POKEMON] también obtiene sus beneficios.`, // español
			`Lorsque le [POKEMON]Pokémon[/POKEMON] situé au-dessus de celui-ci consomme une [ITEM]Baie[/ITEM], ce [POKEMON]Pokémon[/POKEMON] bénéficie également de ses effets.`, // francés
			`Quando o [POKEMON]Pokémon[/POKEMON] acima deste consome uma [ITEM]Baga[/ITEM], este [POKEMON]Pokémon[/POKEMON] também recebe seus benefícios.`, // portugués
			`Quando il [POKEMON]Pokémon[/POKEMON] sopra di questo consuma una [ITEM]Bacca[/ITEM], anche questo [POKEMON]Pokémon[/POKEMON] ne ottiene i benefici.`, // italiano
			`Wenn das [POKEMON]Pokémon[/POKEMON] über diesem eine [ITEM]Beere[/ITEM] konsumiert, erhält auch dieses [POKEMON]Pokémon[/POKEMON] deren Vorteile.`, // alemán
			`この[POKEMON]ポケモン[/POKEMON]の上にいる[POKEMON]ポケモン[/POKEMON]が[ITEM]きのみ[/ITEM]を食べると、この[POKEMON]ポケモン[/POKEMON]もその効果を得る。`, // japonés
			`이 [POKEMON]포켓몬[/POKEMON] 위에 있는 [POKEMON]포켓몬[/POKEMON]이 [ITEM]나무열매[/ITEM]를 먹으면, 이 [POKEMON]포켓몬[/POKEMON]도 그 효과를 얻습니다.`, // coreano
			`当这个[POKEMON]宝可梦[/POKEMON]上方的[POKEMON]宝可梦[/POKEMON]食用[ITEM]树果[/ITEM]时，这个[POKEMON]宝可梦[/POKEMON]也会获得其效果。`, // chino
			`Gdy [POKEMON]Pokémon[/POKEMON] znajdujący się nad tym [POKEMON]Pokémonem[/POKEMON] zje [ITEM]Jagodę[/ITEM], ten [POKEMON]Pokémon[/POKEMON] również otrzymuje jej korzyści.` // polaco
		],
		condition: {
			ability: ['grassPlatform', 'icePlatform', 'mount', 'rest', 'grimNeigh']
		},
		restriction: {
			id: [70, 142, 173]
		}
	},
	thundersDrive: {
		id: 'thundersDrive',
		name: [
			`Thunder's Drive`, // inglés
			'Unidad de Thunder', // español
			'Lecteur de Thunder', // francés
			'Unidade de Thunder', // portugués
			'Unità di Thunder', // italiano
			'Thunders Laufwerk', // alemán
			'サンダーのドライブ', // japonés
			'썬더의 드라이브', // coreano
			'Thunder的存储器', // chino
			'Dysk Thunder' // polaco
		],
		tags: [],
		sprite: './src/assets/images/items/machine-part.png',
		price: 1000000000,
		tier: 'admin',
		isEquipable: true,
		isRetirable: true,
		description: [
			`[ADMIN]Unlocks advanced enemy stats in the compendium.[/ADMIN]`, // inglés
			`[ADMIN]Desbloquea las estadísticas avanzadas de los enemigos en el compendio.[/ADMIN]`, // español
			`[ADMIN]Débloque les statistiques avancées des ennemis dans le compendium.[/ADMIN]`, // francés
			`[ADMIN]Desbloqueia as estatísticas avançadas dos inimigos no compêndio.[/ADMIN]`, // portugués
			`[ADMIN]Sblocca le statistiche avanzate dei nemici nel compendio.[/ADMIN]`, // italiano
			`[ADMIN]Schaltet erweiterte Gegnerwerte im Kompendium frei.[/ADMIN]`, // alemán
			`[ADMIN]コンペンディウムで敵の詳細なステータスが解放される。[/ADMIN]`, // japonés
			`[ADMIN]도감에서 적의 고급 스탯을 잠금 해제합니다.[/ADMIN]`, // coreano
			`[ADMIN]在图鉴中解锁敌人的高级属性。[/ADMIN]`, // chino
			`[ADMIN]Odblokowuje zaawansowane statystyki wrogów w kompendium.[/ADMIN]` // polaco
		],
		condition: {
			id: [183]
		},
	},
	noxDex: {
		id: 'noxDex',
		name: [
			'Nox Dex', // inglés
			'Pokédex de Nox', // español
			'Pokédex de Nox', // francés
			'Pokédex do Nox', // portugués
			'Pokédex di Nox', // italiano
			'Nox’ Pokédex', // alemán
			'ノックスのポケモン図鑑', // japonés
			'녹스의 포켓몬도감', // coreano
			'诺克斯的宝可梦图鉴', // chino
			'Nox Dex' // polaco
		],
		tags: [],
		sprite: './src/assets/images/items/poke-radar.png',
		price: 1000000000,
		tier: 'admin',
		isEquipable: true,
		isRetirable: true,
		description: [
			`[ADMIN]Unlocks advanced pokémon stats in the compendium.[/ADMIN]`, // inglés
			`[ADMIN]Desbloquea las estadísticas avanzadas de los Pokémon en el compendio.[/ADMIN]`, // español
			`[ADMIN]Débloque les statistiques avancées des Pokémon dans le compendium.[/ADMIN]`, // francés
			`[ADMIN]Desbloqueia as estatísticas avançadas dos Pokémon no compêndio.[/ADMIN]`, // portugués
			`[ADMIN]Sblocca le statistiche avanzate dei Pokémon nel compendio.[/ADMIN]`, // italiano
			`[ADMIN]Schaltet erweiterte Pokémon-Werte im Kompendium frei.[/ADMIN]`, // alemán
			`[ADMIN]コンペンディウムでポケモンの詳細なステータスが解放される。[/ADMIN]`, // japonés
			`[ADMIN]도감에서 포켓몬의 고급 스탯을 잠금 해제합니다.[/ADMIN]`, // coreano
			`[ADMIN]在图鉴中解锁宝可梦的高级属性。[/ADMIN]`, // chino
			`[ADMIN]Odblokowuje zaawansowane statystyki Pokémonów w kompendium.[/ADMIN]` // polaco
		],
		condition: {
			key: 'missingNo'
		},
	},
	rosesItem: { 
		id: 'rosesItem',
		name: [
			'Wreath of Roses', // inglés
			'Corona de Rosas', // español
			'Couronne de Roses', // francés
			'Coroa de Rosas', // portugués
			'Corona di Rose', // italiano
			'Rosenkranz', // alemán
			'バラの花輪', // japonés
			'장미 화관', // coreano
			'玫瑰花环', // chino
			'Wianek z Róż' // polaco
		],
		tags: [],
		sprite: './src/assets/images/items/galarica-wreath.png',
		price: 1000000000,
		tier: 'admin',
		isEquipable: true,
		isRetirable: true,
		description: [
			`[ADMIN]Ouch! Lots of thorns on this thing... Unlocks two more speed options.[/ADMIN]`, // inglés
			`[ADMIN]¡Ay! Esta cosa tiene un montón de espinas... Desbloquea dos opciones de velocidad más.[/ADMIN]`, // español
			`[ADMIN]Aïe ! Il y a plein d'épines sur cette chose... Débloque deux options de vitesse supplémentaires.[/ADMIN]`, // francés
			`[ADMIN]Ai! Tem muitos espinhos nisso... Desbloqueia mais duas opções de velocidade.[/ADMIN]`, // portugués
			`[ADMIN]Ahi! Questa cosa è piena di spine... Sblocca altre due opzioni di velocità.[/ADMIN]`, // italiano
			`[ADMIN]Autsch! Dieses Ding hat jede Menge Dornen... Schaltet zwei weitere Geschwindigkeitsoptionen frei.[/ADMIN]`, // alemán
			`[ADMIN]痛っ！これ、トゲだらけだ……さらに2つの速度オプションを解放する。[/ADMIN]`, // japonés
			`[ADMIN]아야! 이거 가시가 잔뜩 달려 있어... 속도 옵션을 두 가지 더 잠금 해제합니다.[/ADMIN]`, // coreano
			`[ADMIN]哎哟！这东西上面全是刺……解锁两个额外的速度选项。[/ADMIN]`, // chino
			`[ADMIN]Auć! To coś jest całe pokryte kolcami... Odblokowuje dwie dodatkowe opcje prędkości.[/ADMIN]` // polaco
		],
		condition: {
			id: [130]
		}
	},
	luckyPunch: {
		id: 'luckyPunch',
		name: [
			`Lucky Punch`, // inglés
			`Puño Suerte`, // español
			`Poing Chanceux`, // francés
			`Soco Sortudo`, // portugués
			`Fortunpugno`, // italiano
			`Lucky Punch`, // alemán
			`ラッキーパンチ`, // japonés
			`럭키펀치`, // coreano
			`幸运拳`, // chino
			`Szczęśliwy Cios` // polaco
		],
		tags: ['range'],
		sprite: './src/assets/images/items/lucky-punch.png',
		price: 1000000000,
		tier: 'epic',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Increases [RANGE]range[/RANGE] by 10 when landing a [CRITICAL]critical hit[/CRITICAL], stacking up to 5 times. After 5 seconds without landing a [CRITICAL]critical hit[/CRITICAL], loses all stacks.`, // inglés
			`Aumenta el [RANGE]alcance[/RANGE] en 10 al ocasionar un [CRITICAL]golpe crítico[/CRITICAL], acumulable 5 veces. Tras pasar 5 segundos sin ocasionar un [CRITICAL]golpe crítico[/CRITICAL], pierde todas las acumulaciones.`, // español
			`Augmente la [RANGE]portée[/RANGE] de 10 lorsqu'il inflige un [CRITICAL]coup critique[/CRITICAL], cumulable jusqu'à 5 fois. Après 5 secondes sans infliger de [CRITICAL]coup critique[/CRITICAL], perd toutes les charges.`, // francés
			`Aumenta o [RANGE]alcance[/RANGE] em 10 ao causar um [CRITICAL]acerto crítico[/CRITICAL], acumulando até 5 vezes. Após 5 segundos sem causar um [CRITICAL]acerto crítico[/CRITICAL], perde todas as cargas.`, // portugués
			`Aumenta la [RANGE]portata[/RANGE] di 10 quando mette a segno un [CRITICAL]colpo critico[/CRITICAL], cumulabile fino a 5 volte. Dopo 5 secondi senza mettere a segno un [CRITICAL]colpo critico[/CRITICAL], perde tutte le cariche.`, // italiano
			`Erhöht die [RANGE]Reichweite[/RANGE] um 10, wenn ein [CRITICAL]Volltreffer[/CRITICAL] erzielt wird, bis zu 5-mal stapelbar. Nach 5 Sekunden ohne einen [CRITICAL]Volltreffer[/CRITICAL] verliert es alle Stapel.`, // alemán
			`[CRITICAL]急所[/CRITICAL]に当てると[RANGE]射程[/RANGE]が10増加し、最大5回まで累積する。[CRITICAL]急所[/CRITICAL]に当てずに5秒経過すると、すべての累積が失われる。`, // japonés
			`[CRITICAL]급소[/CRITICAL]에 적중시키면 [RANGE]사거리[/RANGE]가 10 증가하며, 최대 5회까지 중첩됩니다. [CRITICAL]급소[/CRITICAL]에 적중시키지 않고 5초가 지나면 모든 중첩을 잃습니다.`, // coreano
			`造成[CRITICAL]击中要害[/CRITICAL]时使[RANGE]攻击范围[/RANGE]增加10，最多叠加5次。5秒内未造成[CRITICAL]击中要害[/CRITICAL]后，失去所有层数。`, // chino
			`Zwiększa [RANGE]zasięg[/RANGE] o 10 po zadaniu [CRITICAL]trafienia krytycznego[/CRITICAL], kumulując się do 5 razy. Po 5 sekundach bez zadania [CRITICAL]trafienia krytycznego[/CRITICAL] traci wszystkie kumulacje.` // polaco
		],
		condition: {
			attackType: 'single'
		},
		restriction: {
			id: [19, 70, 83, 101, 111, 404, 142, 144, 173],
			orbital: true,
		}
	},
	tropicalPetal: {
		id: 'tropicalPetal',
		name: [
			`Tropical Petal`, // inglés
			`Pétalo Tropical`, // español
			`Pétale Tropical`, // francés
			`Pétala Tropical`, // portugués
			`Petalo Tropicale`, // italiano
			`Tropische Blüte`, // alemán
			`トロピカルペタル`, // japonés
			`트로피컬 페탈`, // coreano
			`热带花瓣`, // chino
			`Tropikalny Płatek` // polaco
		],
		tags: ['utility'],
		sprite: './src/assets/images/items/tropicalPetal.png',
		price: 500000,
		tier: 'common',
		isEquipable: true,
		isRetirable: true,
		description: [
			`The [ABILITY]Triage ability[/ABILITY] now grants an additional +10% [SPEED]recharge time[/SPEED], but reduces the holder's [RANGE]range[/RANGE] by 20. Must be held by [POKEMON]Comfey[/POKEMON].`, // inglés
			`La [ABILITY]habilidad Primer Auxilio[/ABILITY] ahora otorga un +10% adicional al [SPEED]tiempo de recarga[/SPEED], pero reduce el [RANGE]alcance[/RANGE] del portador en 20. Debe ser equipada por [POKEMON]Comfey[/POKEMON].`, // español
			`La [ABILITY]capacité Médecin[/ABILITY] confère désormais +10 % supplémentaires au [SPEED]temps de recharge[/SPEED], mais réduit la [RANGE]portée[/RANGE] du porteur de 20. Doit être détenue par [POKEMON]Guérilande[/POKEMON].`, // francés
			`A [ABILITY]habilidade Triagem[/ABILITY] agora concede +10% adicional ao [SPEED]tempo de recarga[/SPEED], mas reduz o [RANGE]alcance[/RANGE] do portador em 20. Deve ser segurada por [POKEMON]Comfey[/POKEMON].`, // portugués
			`L'[ABILITY]abilità Primacura[/ABILITY] ora concede un ulteriore +10% al [SPEED]tempo di ricarica[/SPEED], ma riduce la [RANGE]portata[/RANGE] di chi la possiede di 20. Deve essere posseduta da [POKEMON]Comfey[/POKEMON].`, // italiano
			`Die [ABILITY]Fähigkeit Heilwandel[/ABILITY] gewährt nun zusätzlich +10 % [SPEED]Aufladezeit[/SPEED], verringert jedoch die [RANGE]Reichweite[/RANGE] des Trägers um 20. Muss von [POKEMON]Comfey[/POKEMON] getragen werden.`, // alemán
			`[ABILITY]ヒーリングシフト[/ABILITY]は、[SPEED]再チャージ時間[/SPEED]をさらに10%増加させるが、所持者の[RANGE]射程[/RANGE]を20減少させるようになった。[POKEMON]キュワワー[/POKEMON]が持っている必要がある。`, // japonés
			`[ABILITY]트리아지[/ABILITY] 특성은 이제 [SPEED]재충전 시간[/SPEED]을 추가로 10% 증가시키지만, 소지자의 [RANGE]사거리[/RANGE]를 20 감소시킵니다. [POKEMON]큐아링[/POKEMON]이 가지고 있어야 합니다.`, // coreano
			`[ABILITY]先行治疗[/ABILITY]特性现在额外使[SPEED]重新充能时间[/SPEED]增加10%，但使持有者的[RANGE]攻击范围[/RANGE]降低20。必须由[POKEMON]花疗环环[/POKEMON]持有。`, // chino
			`Zdolność [ABILITY]Triage[/ABILITY] zapewnia teraz dodatkowe +10% do [SPEED]czasu odnowienia[/SPEED], ale zmniejsza [RANGE]zasięg[/RANGE] posiadacza o 20. Musi być posiadana przez [POKEMON]Comfey[/POKEMON].` // polaco
		],
		condition: {
			key: 'comfey'
		}
	},
	scovillainite: {
		id: 'scovillainite',
		name: [
			`Scovillainite`, // inglés
			`Scovillainita`, // español
			`Scovillainite`, // francés
			`Scovillainita`, // portugués
			`Scovillainite`, // italiano
			`Scovillainit`, // alemán
			`スコヴィランナイト`, // japonés
			`스코빌나이트`, // coreano
			`斯科维兰石`, // chino
			`Scovillainit`, // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/scovillainite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`It seems fine at first, but it seems to burn you whenever you're not paying too much attention, it's caught you off guard a few times... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Al principio parece estar bien, pero parece que te quema cuando no estás demasiado atento; te ha pillado desprevenido unas cuantas veces... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`Elle semble normale au début, mais elle semble te brûler dès que tu n'y prêtes pas assez attention, elle t'a pris au dépourvu plusieurs fois... Elle déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`Parece estar tudo bem no início, mas parece que te queima sempre que você não presta muita atenção; já te pegou de surpresa algumas vezes... Está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`Sembra a posto all'inizio, ma sembra bruciarti quando non presti abbastanza attenzione; ti ha colto di sorpresa diverse volte... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Zunächst scheint es in Ordnung zu sein, aber es scheint dich zu verbrennen, wenn du nicht genug aufpasst; es hat dich schon ein paar Mal überrascht... Es quillt über vor [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`最初は大丈夫そうだが、あまり注意していないと火傷させてくるようで、何度か不意を突かれた……。[MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`처음에는 괜찮아 보이지만, 너무 주의를 기울이지 않으면 화상을 입히는 것 같습니다. 몇 번이나 방심한 틈을 노렸습니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`一开始看起来没什么问题，但只要你稍不注意，它似乎就会灼伤你，已经让你猝不及防好几次了……它充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Na początku wydaje się w porządku, ale zdaje się parzyć cię, gdy nie zwracasz na nie większej uwagi; kilka razy już cię zaskoczyło... Przepełnia je [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'scovillain'
		}
	},
	cameruptite: {
		id: 'cameruptite',
		name: [
			`Cameruptite`, // inglés
			`Cameruptita`, // español
			`Caméruptite`, // francés
			`Cameruptita`, // portugués
			`Cameruptite`, // italiano
			`Cameruptit`, // alemán
			`バクーダナイト`, // japonés
			`폭타나이트`, // coreano
			`喷火驼石`, // chino
			`Cameruptite`, // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/cameruptite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`If left alone for too long, it might burn a hole in its container... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Si se deja demasiado tiempo sin vigilancia, podría hacer un agujero en su recipiente... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`Si elle est laissée trop longtemps sans surveillance, elle pourrait percer un trou dans son récipient... Elle déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`Se for deixada sozinha por muito tempo, pode queimar um buraco em seu recipiente... Está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`Se lasciata incustodita troppo a lungo, potrebbe bruciare un buco nel suo contenitore... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Wenn man es zu lange unbeaufsichtigt lässt, könnte es ein Loch in seinen Behälter brennen... Es quillt über vor [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`長時間放置すると、容器に穴を開けてしまうかもしれない……。[MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`너무 오랫동안 내버려 두면 용기에 구멍을 태워버릴지도 모릅니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`如果长时间放置不管，它可能会把容器烧出一个洞……它充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Jeśli pozostawisz to na zbyt długo, może wypalić dziurę w swoim pojemniku... Przepełnia je [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'camerupt'
		}
	},
	dragoninite: {
		id: 'dragoninite',
		name: [
			`Dragoninite`, // inglés
			`Dragoninita`, // español
			`Dracaurite`, // francés
			`Dragoninita`, // portugués
			`Dragoninite`, // italiano
			`Dragoranit`, // alemán
			`カイリューナイト`, // japonés
			`망나뇽나이트`, // coreano
			`快龙石`, // chino
			`Dragoninite`, // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/dragoninite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`You feel rather free and happy holding this thing... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Te sientes bastante libre y feliz al sostener esta cosa... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`Tu te sens plutôt libre et heureux en tenant cette chose... Elle déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`Você se sente bastante livre e feliz segurando esta coisa... Ela está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`Ti senti piuttosto libero e felice mentre tieni questa cosa... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Du fühlst dich ziemlich frei und glücklich, wenn du dieses Ding hältst... Es quillt über vor [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`これを持っていると、とても自由で幸せな気分になる……。[MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`이것을 들고 있으면 꽤 자유롭고 행복한 기분이 듭니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`拿着这东西，你感觉相当自由和快乐……它充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Trzymając to, czujesz się całkiem wolny i szczęśliwy... Przepełnia je [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'dragonite'
		}
	},
	metagrossite: {
		id: 'metagrossite',
		name: [
			`Metagrossite`, // inglés
			`Metagrossita`, // español
			`Métalossite`, // francés
			`Metagrossita`, // portugués
			`Metagrossite`, // italiano
			`Metagrossnit`, // alemán
			`メタグロスナイト`, // japonés
			`메타그로스나이트`, // coreano
			`巨金怪石`, // chino
			`Metagrossite`, // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/metagrossite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`An old friend lent this to you as a reward, he seemed to have an extra, what a nice guy... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Un viejo amigo te lo prestó como recompensa; parecía que tenía uno de sobra, qué buen tipo... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`Un vieil ami te l'a prêté en récompense ; il semblait en avoir un en trop, quel chic type... Il déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`Um velho amigo te emprestou isto como recompensa; parecia ter um sobrando, que cara legal... Está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`Un vecchio amico te l'ha prestato come ricompensa; sembrava averne uno in più, che bravo ragazzo... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Ein alter Freund hat dir dieses Ding als Belohnung geliehen; er schien eines übrig zu haben, was für ein netter Kerl... Es quillt über vor [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`昔からの友人がご褒美としてこれを貸してくれた。余っていたものがあったらしい。なんていいやつなんだ……。[MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`오랜 친구가 보상으로 이것을 빌려주었습니다. 하나 여분이 있었던 모양입니다. 정말 좋은 사람이네요... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`一位老朋友把这个借给你作为奖励，他似乎还有一个多余的，真是个好人……它充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Stary przyjaciel pożyczył ci to w nagrodę. Wyglądało na to, że miał jedno na zbyciu. Co za miły gość... Przepełnia je [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'metagross'
		}
	},
	glalitite: {
		id: 'glalitite',
		name: [
			`Glalitite`, // inglés
			`Glalita`, // español
			`Oniglalinite`, // francés
			`Glalitita`, // portugués
			`Glalitite`, // italiano
			`Firnontorit`, // alemán
			`オニゴーリナイト`, // japonés
			`얼음귀신나이트`, // coreano
			`冰鬼护石`, // chino
			`Glalitite`, // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/glalitite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Your jaw begins to hurt a little staring at this thing... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Te empieza a doler un poco la mandíbula de tanto mirar esta cosa... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`Ta mâchoire commence à te faire un peu mal à force de regarder cette chose... Elle déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`Seu maxilar começa a doer um pouco de tanto olhar para esta coisa... Está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`La mascella comincia a farti un po' male a forza di fissare questa cosa... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Dein Kiefer beginnt ein wenig zu schmerzen, wenn du dieses Ding anstarrst... Es quillt über vor [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`これを見つめていると、あごが少し痛くなってくる……。[MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`이것을 바라보고 있자니 턱이 조금 아프기 시작합니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`盯着这东西看，你的下巴开始有点疼了……它充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Od patrzenia na to zaczyna cię trochę boleć szczęka... Aż przepełnia je [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'glalie'
		}
	},
	froslassite: {
		id: 'froslassite',
		name: [
			`Froslassite`, // inglés
			`Froslassita`, // español
			`Momartikite`, // francés
			`Froslassita`, // portugués
			`Froslassite`, // italiano
			`Frosdedjeit`, // alemán
			`ユキメノコナイト`, // japonés
			`눈여아나이트`, // coreano
			`雪妖女石`, // chino
			`Froslassyt`, // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/froslassite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`You feel a little unsafe to turn your back on this thing... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Te sientes un poco inseguro al darle la espalda a esta cosa... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`Tu ne te sens pas très en sécurité à l'idée de tourner le dos à cette chose... Elle déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`Você não se sente muito seguro ao dar as costas para esta coisa... Ela está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`Non ti senti molto al sicuro a dare le spalle a questa cosa... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Du fühlst dich etwas unsicher dabei, diesem Ding den Rücken zuzuwenden... Es quillt über vor [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`これに背を向けるのは少し危険な気がする……。[MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`이것에게 등을 돌리기가 조금 불안하게 느껴집니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`你感觉背对着这东西有点不安全……它充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Nie czujesz się zbyt bezpiecznie, odwracając się do tego plecami... Przepełnia je [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'froslass'
		}
	},
	dragalgite: {
		id: 'dragalgite',
		name: [
			`Dragalgite`, // inglés
			`Dragalita`, // español
			`Kravarechite`, // francés
			`Dragalgita`, // portugués
			`Dragalgite`, // italiano
			`Tandrakiumit`, // alemán
			`ドラミドロナイト`, // japonés
			`드래캄나이트`, // coreano
			`毒藻龙石`, // chino
			`Dragalgeit`, // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/dragalgite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`It's necessary to carry this thing with thick gloves, it begins to sting if you hold it too long without them... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Es necesario llevar esta cosa con guantes gruesos; empieza a escocer si la sostienes demasiado tiempo sin ellos... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`Il est nécessaire de porter cette chose avec des gants épais, elle commence à brûler si tu la tiens trop longtemps sans eux... Elle déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`É necessário carregar esta coisa com luvas grossas; ela começa a arder se você a segurar por muito tempo sem elas... Está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`È necessario maneggiare questa cosa con guanti spessi; inizia a pizzicare se la tieni troppo a lungo senza... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Man muss dieses Ding mit dicken Handschuhen tragen; hält man es zu lange ohne sie fest, beginnt es zu brennen... Es quillt über vor [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`これは厚手の手袋をして持つ必要がある。手袋なしで長く持っていると、ヒリヒリしてくる……。[MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`이것은 두꺼운 장갑을 끼고 들어야 합니다. 장갑 없이 너무 오래 들고 있으면 따끔거리기 시작합니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`必须戴上厚手手套才能拿着这东西，徒手拿太久的话就会开始刺痛……它充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Trzeba nosić to w grubych rękawicach, bo trzymane zbyt długo bez nich zaczyna szczypać... Przepełnia je [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'dragalge'
		}
	},
	starminite: {
		id: 'starminite',
		name: [
			`Starmieite`, // inglés
			`Starmita`, // español
			`Starossite`, // francés
			`Starmieite`, // portugués
			`Starmieite`, // italiano
			`Starmieit`, // alemán
			`スターミナイト`, // japonés
			`아쿠스타나이트`, // coreano
			`宝石海星石`, // chino
			`Starmieite`, // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/starminite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`It feels rather wrong to look at this... Thing... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Se siente bastante mal mirar esta... cosa... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`Ça fait plutôt étrange de regarder cette... chose... Elle déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`Parece bastante errado olhar para esta... coisa... Ela está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`Sembra piuttosto sbagliato guardare questa... cosa... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Es fühlt sich ziemlich falsch an, dieses... Ding... anzusehen. Es quillt über vor [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`これを……この……何かを見ていると、ひどく間違っているような感じがする……。[MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`이... 것을 바라보고 있으면 뭔가 잘못된 기분이 듭니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`看着这个……东西……感觉相当不对劲……它充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Patrzenie na to... coś... wydaje się zdecydowanie niewłaściwe... Przepełnia je [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'starmie'
		}
	},
	garchompite: {
		id: 'garchompite',
		name: [
			`Garchompite`, // inglés
			`Garchompita`, // español
			`Carchacrokite`, // francés
			`Garchompita`, // portugués
			`Garchompite`, // italiano
			`Knakracknit`, // alemán
			`ガブリアスナイト`, // japonés
			`한카리아스나이트`, // coreano
			`烈咬陆鲨石`, // chino
			`Garchompite`, // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/garchompite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`It has a rather rough, grainy texture... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Tiene una textura bastante áspera y granulosa... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`Elle a une texture plutôt rugueuse et granuleuse... Elle déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`Tem uma textura bastante áspera e granulosa... Está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`Ha una consistenza piuttosto ruvida e granulosa... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Es hat eine ziemlich raue, körnige Textur... Es quillt über vor [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`かなりざらざらとした、粒のような手触りがする……。[MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`상당히 거칠고 알갱이 같은 질감이 느껴집니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`它的质感相当粗糙、颗粒分明……充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Ma dość szorstką, ziarnistą fakturę... Przepełnia je [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'garchomp'
		}
	},
	houndoominite: {
		id: 'houndoominite',
		name: [
			`Houndoominite`, // inglés
			`Houndoomita`, // español
			`Démolossite`, // francés
			`Houndoominita`, // portugués
			`Houndoomite`, // italiano
			`Hundemonit`, // alemán
			`ヘルガナイト`, // japonés
			`헬가나이트`, // coreano
			`黑鲁加石`, // chino
			`Houndoominite`, // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/houndoominite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`You swear the orb gets even hotter at night... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Jurarías que el orbe se vuelve aún más caliente por la noche... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`Tu jurerais que l'orbe devient encore plus chaud la nuit... Il déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`Você juraria que o orbe fica ainda mais quente à noite... Está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`Giureresti che l'orb diventi ancora più caldo di notte... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Du könntest schwören, dass die Kugel nachts noch heißer wird... Sie quillt über vor [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`夜になると、このオーブはさらに熱くなるような気がする……。[MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`밤이 되면 이 오브가 더욱 뜨거워지는 것 같습니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`你敢肯定这个球体在夜晚会变得更加炽热……它充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Przysiągłbyś, że nocą kula staje się jeszcze gorętsza... Przepełnia ją [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'houndoom'
		}
	},
	gyaradosite: {
		id: 'gyaradosite',
		name: [
			`Gyaradosite`, // inglés
			`Gyaradosita`, // español
			`Léviatorite`, // francés
			`Gyaradosita`, // portugués
			`Gyaradosite`, // italiano
			`Garadosnit`, // alemán
			`ギャラドスナイト`, // japonés
			`갸라도스나이트`, // coreano
			`暴鲤龙石`, // chino
			`Gyaradosite`, // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/gyaradosite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`You feel rather powerful holding this thing... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Te sientes bastante poderoso al sostener esta cosa... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`Tu te sens plutôt puissant en tenant cette chose... Elle déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`Você se sente bastante poderoso segurando esta coisa... Ela está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`Ti senti piuttosto potente mentre tieni questa cosa... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Du fühlst dich ziemlich mächtig, wenn du dieses Ding in der Hand hältst... Es quillt über vor [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`これを持っていると、かなり力が湧いてくる気がする……。[MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`이것을 들고 있으니 꽤 강력해진 기분이 듭니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`拿着这东西，你感觉自己充满了力量……它充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Trzymając to, czujesz się całkiem potężnie... Przepełnia je [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'gyarados'
		}
	},
	lopunnite: {
		id: 'lopunnite',
		name: [
			`Lopunnite`, // inglés
			`Lopunnita`, // español
			`Lockpinite`, // francés
			`Lopunnita`, // portugués
			`Lopunnite`, // italiano
			`Schlapornit`, // alemán
			`ミミロップナイト`, // japonés
			`이어롭나이트`, // coreano
			`长耳兔石`, // chino
			`Lopunnite`, // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/lopunnite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`You're imbued with an excited, fighting spirit... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Estás imbuido de un espíritu combativo y lleno de energía... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`Tu es imprégné d'un esprit combatif et exalté... Elle déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`Você está imbuído de um espírito de luta empolgado... Está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`Sei pervaso da un entusiasta spirito combattivo... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Du bist von einem aufgeregten Kampfgeist erfüllt... Es quillt über vor [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`高揚した闘志がみなぎってくる……。[MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`들뜬 투지가 온몸에 깃듭니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`你被一股激昂的斗志所充盈……它充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Przepełnia cię podekscytowany duch walki... Przepełnia je [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'lopunny'
		}
	},
	magearnite: {
		id: 'magearnite',
		name: [
			`Magearnite`, // inglés
			`Magearnita`, // español
			`Magearnite`, // francés
			`Magearnita`, // portugués
			`Magearnite`, // italiano
			`Magearnit`, // alemán
			`マギアナナイト`, // japonés
			`마기아나나이트`, // coreano
			`玛机雅娜石`, // chino
			`Magearnite`, // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/magearnite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`This thing was found in an attic somewhere, it's rather dusty... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Esta cosa fue encontrada en algún desván; está bastante cubierta de polvo... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`Cette chose a été trouvée dans un grenier quelconque, elle est plutôt poussiéreuse... Elle déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`Esta coisa foi encontrada em algum sótão, está bastante empoeirada... Está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`Questa cosa è stata trovata in qualche soffitta, è piuttosto impolverata... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Dieses Ding wurde irgendwo auf einem Dachboden gefunden und ist ziemlich staubig... Es quillt über vor [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`これはどこかの屋根裏で見つかったもので、かなりほこりっぽい……。[MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`이것은 어딘가의 다락방에서 발견된 것으로, 꽤 먼지가 쌓여 있습니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`这东西是在某个阁楼里找到的，上面落满了灰尘……它充满了[MEGA]无限能量[/MEGA]。`, // chino
			`To coś znaleziono gdzieś na strychu, jest całkiem zakurzone... Przepełnia je [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'magearna'
		}
	},
	heracronite: {
		id: 'heracronite',
		name: [
			`Heracronite`, // inglés
			`Heracrossita`, // español
			`Scarhinoïte`, // francés
			`Heracronita`, // portugués
			`Heracrossite`, // italiano
			`Skarabornit`, // alemán
			`ヘラクロスナイト`, // japonés
			`헤라크로스나이트`, // coreano
			`赫拉克罗斯石`, // chino
			`Heracronit`, // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/heracronite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`A little dirty at first, but it's rather smooth after you washed it... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Al principio estaba un poco sucia, pero está bastante lisa después de lavarla... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`Un peu sale au début, mais elle est plutôt lisse après l'avoir lavée... Elle déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`Um pouco suja no início, mas ficou bastante lisa depois de lavá-la... Está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`All'inizio era un po' sporca, ma è piuttosto liscia dopo averla lavata... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Anfangs etwas schmutzig, aber nach dem Waschen ist es ziemlich glatt... Es quillt über vor [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`最初は少し汚れていたが、洗ったらかなり滑らかになった……。[MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`처음에는 조금 더러웠지만, 씻고 나니 꽤 매끈합니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`一开始有点脏，但洗干净后相当光滑……它充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Na początku było trochę brudne, ale po umyciu jest całkiem gładkie... Przepełnia je [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'heracross'
		}
	},
	gardevoirite: {
		id: 'gardevoirite',
		name: [
			`Gardevoirite`, // inglés
			`Gardevoirita`, // español
			`Gardevoirite`, // francés
			`Gardevoirite`, // portugués
			`Gardevoirite`, // italiano
			`Guardevoirnit`, // alemán
			`サーナイトナイト`, // japonés
			`캥카나이트`, // coreano
			`沙奈朵进化石`, // chino
			`Gardevoirite` // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/gardevoirite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`You feel an odd mix of desperation and detachment holding this thing... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Sientes una extraña mezcla de desesperación y desapego al sostener esto... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`Tu ressens un étrange mélange de désespoir et de détachement en tenant cette chose... Elle déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`Você sente uma estranha mistura de desespero e desapego ao segurar isto... Está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`Provi uno strano misto di disperazione e distacco tenendo questa cosa... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Du fühlst eine seltsame Mischung aus Verzweiflung und Distanziertheit, wenn du dieses Ding hältst... Es quillt über vor [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`これを持っていると、奇妙な絶望感と無関心が入り混じった感覚になる……。[MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`이것을 들고 있으면 묘하게 절망감과 초연함이 뒤섞인 기분이 듭니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`拿着这东西，你会感到一种奇怪的绝望与超然交织的感觉……它充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Trzymając to, czujesz dziwną mieszankę desperacji i dystansu... Przepełnia to [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'gardevoir'
		}
	},
	beedrillite: {
		id: 'beedrillite',
		name: [
			`Beedrillite`, // inglés
			`Beedrillita`, // español
			`Dardargnite`, // francés
			`Beedrillita`, // portugués
			`Beedrillite`, // italiano
			`Bibornit`, // alemán
			`スピアナイト`, // japonés
			`독침붕나이트`, // coreano
			`大针蜂石`, // chino
			`Beedrillite`, // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/beedrillite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`You feel rather aggravated and quick holding this thing... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Te sientes bastante irritado y rápido al sostener esta cosa... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`Tu te sens plutôt irrité et rapide en tenant cette chose... Elle déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`Você se sente bastante irritado e ágil ao segurar esta coisa... Ela está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`Ti senti piuttosto irritato e veloce mentre tieni questa cosa... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Du fühlst dich ziemlich gereizt und schnell, wenn du dieses Ding hältst... Es quillt über vor [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`これを持っていると、かなり苛立ち、素早くなったような気がする……。[MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`이것을 들고 있으면 상당히 짜증이 나고 빨라진 기분이 듭니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`拿着这东西，你感觉相当烦躁而且行动迅速……它充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Trzymając to, czujesz się dość poirytowany i szybki... Przepełnia je [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'beedrill'
		}
	},
	scizorite: {
		id: 'scizorite',
		name: [
			`Scizorite`, // inglés
			`Scizorita`, // español
			`Cizayoxite`, // francés
			`Scizorita`, // portugués
			`Scizorite`, // italiano
			`Scheroxnit`, // alemán
			`ハッサムナイト`, // japonés
			`핫삼나이트`, // coreano
			`巨钳螳螂石`, // chino
			`Scizoryt`, // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/scizorite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`You feel stronger and faster holding this thing, as if you could cleave a cinder block in half with a dull knife... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Te sientes más fuerte y rápido al sostener esto, como si pudieras partir un bloque de hormigón por la mitad con un cuchillo sin filo... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`Tu te sens plus fort et plus rapide en tenant cette chose, comme si tu pouvais trancher un parpaing en deux avec un couteau émoussé... Elle déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`Você se sente mais forte e mais rápido segurando isto, como se pudesse partir um bloco de concreto ao meio com uma faca cega... Está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`Ti senti più forte e veloce tenendo questa cosa, come se potessi tagliare a metà un blocco di cemento con un coltello smussato... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Du fühlst dich stärker und schneller, wenn du dieses Ding hältst, als könntest du einen Betonblock mit einem stumpfen Messer in zwei Hälften spalten... Es quillt über vor [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`これを持っていると、まるで切れ味の悪いナイフでコンクリートブロックを真っ二つにできそうなくらい、力も速さも増したように感じる……。[MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`이것을 들고 있으면 마치 무딘 칼로 콘크리트 블록을 반으로 가를 수 있을 것처럼 더 강하고 빨라진 기분이 듭니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`拿着这东西，你感觉自己变得更强、更快，仿佛用一把钝刀都能将混凝土砖块劈成两半……它充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Trzymając to, czujesz się silniejszy i szybszy, jakbyś mógł rozciąć blok żużlowy na pół tępym nożem... Przepełnia to [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'scizor'
		}
	},
	galladite: {
		id: 'galladite',
		name: [
			`Galladite`, // inglés
			`Galladita`, // español
			`Gallamite`, // francés
			`Galladite`, // portugués
			`Galladite`, // italiano
			`Galagladinit`, // alemán
			`エルレイドナイト`, // japonés
			`엘레이드나이트`, // coreano
			`艾路雷朵进化石`, // chino
			`Galladite`, // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/galladite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`You feel a need for precision and decisiveness holding this thing... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Sientes una necesidad de precisión y determinación al sostener esta cosa... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`Tu ressens un besoin de précision et de détermination en tenant cette chose... Elle déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`Você sente uma necessidade de precisão e determinação ao segurar esta coisa... Está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`Tenendo questa cosa, senti il bisogno di precisione e determinazione... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Du verspürst beim Halten dieses Dings ein Bedürfnis nach Präzision und Entschlossenheit... Es quillt über vor [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`これを持っていると、正確さと決断力が必要だと感じる……。[MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`이것을 들고 있으면 정확성과 결단력이 필요하다는 느낌이 듭니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`拿着这东西，你会感到需要精准和果断……它充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Trzymając to, czujesz potrzebę precyzji i zdecydowania... Przepełnia je [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'gallade'
		}
	},
	aggronite: {
		id: 'aggronite',
		name: [
			`Aggronite`, // inglés
			`Aggronita`, // español
			`Galekingite`, // francés
			`Aggronita`, // portugués
			`Aggronite`, // italiano
			`Stollossnit`, // alemán
			`ボスゴドラナイト`, // japonés
			`보스로라나이트`, // coreano
			`波士可多拉石`, // chino
			`Aggronit`, // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/aggronite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`A perfectly smooth texture, and it seems rather heavier than the others... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Una textura perfectamente lisa, y parece bastante más pesada que las demás... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`Une texture parfaitement lisse, et elle semble plutôt plus lourde que les autres... Elle déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`Uma textura perfeitamente lisa, e parece ser bem mais pesada que as outras... Está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`Una consistenza perfettamente liscia, e sembra decisamente più pesante delle altre... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Eine vollkommen glatte Oberfläche, und es scheint deutlich schwerer als die anderen zu sein... Es quillt über vor [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`とてもなめらかな手触りで、ほかのものよりかなり重いようだ……。[MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`매우 매끄러운 질감이고, 다른 것들보다 꽤 무거운 것 같습니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`质地非常光滑，而且似乎比其他的要重得多……它充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Ma idealnie gładką fakturę i wydaje się znacznie cięższy od pozostałych... Przepełnia go [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'aggron'
		}
	},
	tyranitarite: {
		id: 'tyranitarite',
		name: [
			`Tyranitarite`, // inglés
			`Tyranitarita`, // español
			`Tyranocivite`, // francés
			`Tyranitarita`, // portugués
			`Tyranitarite`, // italiano
			`Despotarnit`, // alemán
			`バンギラスナイト`, // japonés
			`마기라스나이트`, // coreano
			`班基拉斯石`, // chino
			`Tyranitarite`, // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/tyranitarite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`A bit of a rough texture, a bit of sand stuck to it no matter how much you wash it... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Tiene una textura un poco áspera, con algo de arena pegada sin importar cuánto la laves... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`Une texture un peu rugueuse, avec un peu de sable collé dessus peu importe combien de fois tu la laves... Elle déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`Uma textura um pouco áspera, com um pouco de areia grudada, não importa quanto você a lave... Está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`Una consistenza un po' ruvida, con un po' di sabbia attaccata non importa quanto la lavi... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Eine etwas raue Oberfläche, an der trotz noch so häufigem Waschen etwas Sand haften bleibt... Es quillt über vor [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`少しざらざらした手触りで、どれだけ洗っても砂が少し付いたままになる……。[MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`조금 거친 질감이고, 아무리 씻어도 모래가 조금씩 붙어 있습니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`质地有些粗糙，无论怎么清洗，上面总会粘着一点沙子……它充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Ma trochę szorstką fakturę, a trochę piasku wciąż się do niej przykleja, niezależnie od tego, ile razy ją umyjesz... Przepełnia ją [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'tyranitar'
		}
	},
	excadrite: {
		id: 'excadrite',
		name: [
			`Excadrite`, // inglés
			`Excadrillita`, // español
			`Minotaupite`, // francés
			`Excadrite`, // portugués
			`Excadrillite`, // italiano
			`Stalobornit`, // alemán
			`ドリュウズナイト`, // japonés
			`몰드류나이트`, // coreano
			`龙头地鼠进化石`, // chino
			`Excadrite`, // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/excadrite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`You swear you sometimes hear a low-pitched whirring from this thing if you leave it on the ground... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Jurarías que a veces oyes un zumbido grave proveniente de esto si lo dejas en el suelo... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`Tu jurerais parfois entendre un bourdonnement grave provenant de cette chose si tu la laisses au sol... Elle déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`Você juraria que às vezes ouve um zumbido grave vindo disto se deixá-lo no chão... Está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`Giureresti che a volte senti un ronzio cupo provenire da questa cosa se la lasci a terra... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Du könntest schwören, dass du manchmal ein tiefes Brummen von diesem Ding hörst, wenn du es auf dem Boden liegen lässt... Es quillt über vor [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`これを地面に置いておくと、ときどき低い唸り音が聞こえる気がする……。[MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`이것을 바닥에 두면 가끔 낮은 웅웅거리는 소리가 들리는 것 같습니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`你敢肯定，如果把这东西放在地上，有时会听到它发出低沉的嗡嗡声……它充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Przysięgasz, że czasami słyszysz z tego przedmiotu niski, buczenie, gdy zostawisz go na ziemi... Przepełnia go [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'excadrill'
		}
	},
	chimechite: {
		id: 'chimechite',
		name: [
			`Chimechite`, // inglés
			`Chimechita`, // español
			`Archéomite`, // francés
			`Chimechite`, // portugués
			`Chimechite`, // italiano
			`Bronzongnit`, // alemán
			`ドータクンナイト`, // japonés
			`동탁나이트`, // coreano
			`青铜钟石`, // chino
			`Chimechite` // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/chimechite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`Upon shaking it, you can hear a pleasing, ethereal echo of chimes from within... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Al agitarla, se puede oír desde su interior un agradable y etéreo eco de campanillas... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`En la secouant, on peut entendre depuis l'intérieur un agréable écho éthéré de carillons... Elle déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`Ao agitá-la, é possível ouvir do seu interior um agradável e etéreo eco de sinos... Está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`Scuotendola, si può sentire dall'interno un piacevole ed etereo eco di campanelli... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Wenn man es schüttelt, hört man aus seinem Inneren ein angenehmes, ätherisches Glockenspiel... Es ist randvoll mit [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`振ると、中から心地よく幻想的な鈴の音が響いてくる... [MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`흔들어 보면 안에서 기분 좋고 신비로운 종소리가 울려 퍼집니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`摇晃它时，可以听到内部传来悦耳而空灵的铃声回响……其中充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Po potrząśnięciu można usłyszeć dochodzące ze środka przyjemne, eteryczne echo dzwonków... Przepełnia ją [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'chimecho'
		}
	},
	mawilite: {
		id: 'mawilite',
		name: [
			`Mawilite`, // inglés
			`Mawilita`, // español
			`Mysdibulite`, // francés
			`Mawilite`, // portugués
			`Mawilite`, // italiano
			`Flunkifernit`, // alemán
			`クチートナイト`, // japonés
			`입치트나이트`, // coreano
			`大嘴娃石`, // chino
			`Mawilit` // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/mawilite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`The orb seems rather discordant, as if it's pulling in two separate directions, like dogs running in different directions while on the same leash... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`El orbe parece bastante discordante, como si tirara en dos direcciones distintas, como dos perros corriendo en direcciones opuestas mientras están atados a la misma correa... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`L'orbe semble plutôt discordant, comme s'il tirait dans deux directions différentes, à l'image de chiens courant dans des directions opposées tout en étant attachés à la même laisse... Il déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`O orbe parece bastante dissonante, como se estivesse puxando em duas direções diferentes, como cães correndo em direções opostas enquanto estão presos à mesma coleira... Está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`La sfera sembra piuttosto discordante, come se tirasse in due direzioni diverse, come cani che corrono in direzioni opposte mentre sono legati allo stesso guinzaglio... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Die Kugel wirkt ziemlich disharmonisch, als würde sie in zwei verschiedene Richtungen ziehen, wie Hunde, die in entgegengesetzte Richtungen laufen und dabei an derselben Leine hängen... Sie ist randvoll mit [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`このオーブはかなり不協和な感じがする。まるで、同じリードにつながれた犬たちが別々の方向へ走っているかのように、二つの異なる方向へ引っ張られているようだ... [MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`이 오브는 꽤 불협화음처럼 느껴집니다. 마치 같은 목줄에 묶인 개들이 서로 다른 방향으로 달리듯, 두 방향으로 따로 끌어당기는 것 같습니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`这个宝珠似乎十分不和谐，仿佛正被拉向两个不同的方向，就像两只拴在同一根牵引绳上的狗分别朝不同方向奔跑……其中充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Kula wydaje się dość dysonansowa, jakby była ciągnięta w dwóch różnych kierunkach, niczym psy biegnące w przeciwne strony, a jednocześnie przypięte do tej samej smyczy... Przepełnia ją [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'mawile'
		}
	},
	skarmorite: {
		id: 'skarmorite',
		name: [
			`Skarmorite`, // inglés
			`Skarmoryta`, // español
			`Airmurite`, // francés
			`Skarmoryte`, // portugués
			`Skarmoryte`, // italiano
			`Panzaeronit`, // alemán
			`エアームドナイト`, // japonés
			`스왈로스나이트`, // coreano
			`盔甲鸟石`, // chino
			`Skarmoryt` // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/skarmorite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`The orb rolled from your counter once, tumbling to the ground and out of the door with a speed that made your ears ring... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`El orbe rodó una vez desde tu mostrador, cayó al suelo y salió por la puerta a una velocidad que te hizo zumbar los oídos... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`L'orbe a roulé une fois depuis ton comptoir, tombant au sol puis sortant par la porte à une vitesse qui a fait bourdonner tes oreilles... Il déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`O orbe rolou uma vez do seu balcão, caiu no chão e saiu pela porta a uma velocidade que fez seus ouvidos zumbirem... Está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`La sfera è rotolata una volta dal tuo bancone, cadendo a terra e uscendo dalla porta a una velocità tale da farti fischiare le orecchie... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Die Kugel rollte einmal von deiner Theke, fiel zu Boden und schoss mit einer Geschwindigkeit durch die Tür, die dir die Ohren klingeln ließ... Sie ist randvoll mit [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`そのオーブは一度カウンターから転がり落ち、地面に転がってそのままドアの外へ飛び出していった。その速さで耳鳴りがするほどだった... [MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`그 오브는 한 번 카운터에서 굴러 떨어져 바닥을 구른 뒤, 귀가 울릴 정도의 속도로 문밖으로 튀어나갔습니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`宝珠曾从你的柜台上滚落一次，翻滚到地上并以快得让你耳朵嗡嗡作响的速度冲出了门外……其中充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Kula raz stoczyła się z twojego blatu, spadła na ziemię i wypadła przez drzwi z prędkością, od której aż zadzwoniło ci w uszach... Przepełnia ją [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'skarmory'
		}
	},
	scraftinite: {
		id: 'scraftinite',
		name: [
			`Scraftinite`, // inglés
			`Scraftita`, // español
			`Baggaïdite`, // francés
			`Scraftite`, // portugués
			`Scraftite`, // italiano
			`Rabigatornit`, // alemán
			`ズルズキンナイト`, // japonés
			`곤율거니나이트`, // coreano
			`头巾混混石`, // chino
			`Scraftyt` // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/scraftinite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`You feel a bit suspicious of this thing, you make extra sure that it's secured in its case, even if it's just an orb... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Sientes cierta desconfianza hacia esta cosa, así que te aseguras especialmente de que esté bien guardada en su estuche, aunque no sea más que un orbe... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`Tu te méfies un peu de cette chose, alors tu t'assures qu'elle est bien rangée dans son étui, même si ce n'est qu'un orbe... Elle déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`Você desconfia um pouco dessa coisa, então se certifica de que ela esteja bem guardada em seu estojo, mesmo que seja apenas um orbe... Está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`Ti senti un po' diffidente nei confronti di questa cosa, quindi ti assicuri che sia ben riposta nella sua custodia, anche se è solo una sfera... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Du bist diesem Ding gegenüber etwas misstrauisch und stellst sicher, dass es sicher in seiner Hülle verstaut ist, auch wenn es nur eine Kugel ist... Es ist randvoll mit [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`このオーブには少し不信感を覚えるので、ただのオーブとはいえ、ケースの中にしっかり収納されていることを念入りに確認する... [MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`이 물건이 조금 수상하게 느껴져서, 그저 오브일 뿐인데도 케이스에 안전하게 보관되어 있는지 각별히 확인합니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`你对这个东西有些怀疑，因此即使它只是一颗宝珠，也会格外确认它是否安全地收在盒子里……其中充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Masz pewne podejrzenia co do tego przedmiotu, więc upewniasz się, że jest bezpiecznie schowany w etui, nawet jeśli to tylko kula... Przepełnia ją [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'scrafty'
		}
	},
	steelixite: {
		id: 'steelixite',
		name: [
			`Steelixite`, // inglés
			`Steelixita`, // español
			`Steelixite`, // francés
			`Steelixita`, // portugués
			`Steelixite`, // italiano
			`Stahlosnit`, // alemán
			`ハガネールナイト`, // japonés
			`강철톤나이트`, // coreano
			`大钢蛇石`, // chino
			`Steelixit` // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/steelixite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`It shimmers with a pale iridescence, yet it feels rather restless, unstoppable... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Brilla con una iridiscencia pálida, pero parece bastante inquieto, imparable... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`Il scintille d'une iridescence pâle, mais semble pourtant plutôt agité, impossible à arrêter... Il déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`Brilha com uma iridescência pálida, mas parece bastante inquieto, imparável... Está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`Brilla di una pallida iridescenza, eppure sembra piuttosto inquieto, inarrestabile... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Es schimmert in einem blassen Schillern, wirkt jedoch ziemlich unruhig und unaufhaltsam... Es ist randvoll mit [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`淡い虹色にきらめいているのに、どこか落ち着かず、止められないような感じがする... [MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`옅은 무지갯빛으로 반짝이지만, 어딘가 몹시 들떠 있고 멈출 수 없을 것 같습니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`它闪烁着淡淡的虹彩，却显得相当躁动、势不可挡……其中充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Mieni bladą opalizacją, a jednak wydaje się dość niespokojna i niepowstrzymana... Przepełnia ją [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'steelix'
		}
	},
	tatsugirinite: {
		id: 'tatsugirinite',
		name: [
			`Tatsugirinite`, // inglés
			`Tatsugirita`, // español
			`Nigirinite`, // francés
			`Tatsugirinite`, // portugués
			`Tatsugirinite`, // italiano
			`Nigirigitnit`, // alemán
			`シャリタツナイト`, // japonés
			`싸리용나이트`, // coreano
			`米立龙石`, // chino
			`Tatsugirinit` // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/tatsugirinite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`You feel more confident holding this thing, as if you could command something a hundred times larger than you... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Te sientes más seguro al sostener esta cosa, como si pudieras comandar algo cien veces más grande que tú... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`Tu te sens plus à l'aise en tenant cette chose, comme si tu pouvais commander quelque chose de cent fois plus grand que toi... Elle déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`Você se sente mais confiante segurando esta coisa, como se pudesse comandar algo cem vezes maior do que você... Está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`Ti senti più sicuro tenendo in mano questo oggetto, come se potessi comandare qualcosa cento volte più grande di te... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Du fühlst dich selbstbewusster, wenn du dieses Ding hältst, als könntest du etwas beherrschen, das hundertmal größer ist als du... Es ist randvoll mit [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`このオーブを持っていると、自分より100倍も大きな何かを操れるような気がして、より自信が湧いてくる... [MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`이것을 들고 있으면 자신보다 100배나 큰 무언가를 지배할 수 있을 것 같은 느낌이 들어 더욱 자신감이 생깁니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`拿着这个东西时，你感觉更加自信，仿佛能够驾驭某个比自己大一百倍的存在……其中充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Trzymając ten przedmiot, czujesz się pewniej, jakbyś mógł rozkazać czemuś sto razy większemu od siebie... Przepełnia go [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'tatsugiri'
		}
	},
	drampanite: {
		id: 'drampanite',
		name: [
			`Drampanite`, // inglés
			`Drampanita`, // español
			`Draïnite`, // francés
			`Drampanite`, // portugués
			`Drampanite`, // italiano
			`Sen-Longit`, // alemán
			`ジジーロンナイト`, // japonés
			`할비롱나이트`, // coreano
			`老翁龙石`, // chino
			`Drampanit` // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/drampanite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`It seems to echo the violence of the sky when dark and stormy, a faint rumbling in sync with the thunder outside... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`Parece hacerse eco de la violencia del cielo cuando está oscuro y tormentoso, un leve retumbo que acompasa los truenos del exterior... Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`Il semble faire écho à la violence du ciel lorsqu'il est sombre et orageux, un faible grondement en harmonie avec le tonnerre à l'extérieur... Il déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`Parece ecoar a violência do céu quando está escuro e tempestuoso, um leve estrondo em sintonia com os trovões lá fora... Está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`Sembra riecheggiare la violenza del cielo quando è oscuro e tempestoso, un debole rombo in sintonia con i tuoni all'esterno... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Es scheint die Gewalt des Himmels widerzuspiegeln, wenn er dunkel und stürmisch ist, ein leises Grollen im Einklang mit dem Donner draußen... Es ist randvoll mit [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`暗く嵐のような空の荒々しさを響かせているようで、外の雷と呼応するかすかな轟音が聞こえる... [MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`어둡고 폭풍우가 몰아치는 하늘의 격렬함을 메아리치는 듯하며, 바깥의 천둥과 맞물리는 희미한 울림이 들립니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`它似乎回荡着阴暗暴风雨天空的狂暴，伴随着与外面雷声同步的微弱轰鸣……其中充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Zdaje się odzwierciedlać gwałtowność ciemnego, burzowego nieba, wydając cichy pomruk zsynchronizowany z grzmotami na zewnątrz... Przepełnia ją [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'drampa'
		}
	},
	slowbronite: {
		id: 'slowbronite',
		name: [
			`Slowbronite`, // inglés
			`Slowbronita`, // español
			`Flagadossite`, // francés
			`Slowbronita`, // portugués
			`Slowbronite`, // italiano
			`Lahmusnit`, // alemán
			`ヤドランナイト`, // japonés
			`야도란나이트`, // coreano
			`呆壳兽石`, // chino
			`Slowbronit` // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/slowbronite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`It sometimes spins on its own when idle. Leave it uncased for too long and your storage might end up a mess... It's overflowing with [MEGA]Infinity Energy[/MEGA].`, // inglés
			`A veces gira por sí solo cuando está inactivo. Si lo dejas sin guardar durante demasiado tiempo, ¡tu almacén podría acabar hecho un desastre...! Está rebosante de [MEGA]Energía Infinita[/MEGA].`, // español
			`Il se met parfois à tourner tout seul lorsqu'il est inactif. Si tu le laisses trop longtemps sans étui, ton stockage risque de finir en désordre... Il déborde d'[MEGA]Énergie Infinie[/MEGA].`, // francés
			`Às vezes, ele gira sozinho quando está inativo. Se você o deixar sem proteção por muito tempo, seu armazenamento pode acabar uma bagunça... Está transbordando de [MEGA]Energia Infinita[/MEGA].`, // portugués
			`A volte gira da solo quando è inattivo. Se lo lasci senza custodia per troppo tempo, il tuo deposito potrebbe finire in un caos... È traboccante di [MEGA]Energia Infinita[/MEGA].`, // italiano
			`Manchmal dreht es sich von selbst, wenn es untätig ist. Lässt du es zu lange ohne Hülle liegen, könnte dein Lager am Ende völlig durcheinander sein... Es ist randvoll mit [MEGA]Unendlicher Energie[/MEGA].`, // alemán
			`何もしていないときに、ときどき勝手に回転する。長時間ケースに入れずにいると、保管場所がめちゃくちゃになってしまうかも... [MEGA]無限エネルギー[/MEGA]があふれている。`, // japonés
			`가끔 아무것도 하지 않을 때 스스로 빙글빙글 돕니다. 너무 오랫동안 케이스에 넣어 두지 않으면 보관 장소가 엉망이 될 수도 있습니다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐르고 있습니다.`, // coreano
			`它在闲置时有时会自行旋转。长时间不装入保护盒的话，你的储藏空间可能会变得一团糟……其中充满了[MEGA]无限能量[/MEGA]。`, // chino
			`Czasami obraca się samo, gdy jest bezczynne. Jeśli zbyt długo pozostawisz je bez etui, miejsce przechowywania może zamienić się w bałagan... Przepełnia je [MEGA]Nieskończona Energia[/MEGA].` // polaco
		],
		condition: {
			key: 'slowbro'
		}
	},
	gengarite: {
		id: 'gengarite',
		name: [
			`Gengarite`, // inglés
			`Gengarita`, // español
			`Ectoplasmite`, // francés
			`Gengarita`, // portugués
			`Gengarite`, // italiano
			`Gengarnit`, // alemán
			`ゲンガナイト`, // japonés
			`팬텀나이트`, // coreano
			`耿鬼石`, // chino
			`Gengarite` // polaco
		],
		megaStone: true,
		megaPos: 0,
		tags: [],
		sprite: './src/assets/images/items/gengarite.png',
		price: 500000000,
		tier: 'mega',
		isEquipable: true,
		isRetirable: true,
		description: [
			`It swirls with a dark energy you've seen fanatics search for endlessly, spending countless nights and resources just to find this thing. It's almost as if it let you find it... It's overflowing with [MEGA]INFINITY ENERGY[/MEGA].`, // inglés
			`Está envuelta en una energía oscura que has visto a fanáticos buscar sin descanso, dedicando incontables noches y recursos solo para encontrarla. Es casi como si hubiera permitido que la encontraras... ¡Está rebosante de [MEGA]ENERGÍA INFINITA[/MEGA]!`, // español
			`Elle tourbillonne d'une énergie sombre que tu as vu des fanatiques rechercher sans relâche, sacrifiant d'innombrables nuits et ressources pour la trouver. C'est presque comme si elle t'avait laissé la trouver... Elle déborde d'[MEGA]ÉNERGIE INFINIE[/MEGA] !`, // francés
			`Uma energia sombria gira à sua volta, a mesma que viste fanáticos procurar sem descanso, gastando inúmeras noites e recursos só para encontrar esta coisa. É quase como se ela tivesse deixado que a encontrasses... Está a transbordar de [MEGA]ENERGIA INFINITA[/MEGA]!`, // portugués
			`È avvolta da un'energia oscura che hai visto fanatici cercare instancabilmente, trascorrendo innumerevoli notti e spendendo ingenti risorse pur di trovarla. È quasi come se ti avesse permesso di trovarla... Trabocca di [MEGA]ENERGIA INFINITA[/MEGA]!`, // italiano
			`Sie wirbelt dunkle Energie auf, nach der du Fanatiker schon endlos hast suchen sehen, die unzählige Nächte und Ressourcen opfern, nur um dieses Ding zu finden. Es ist fast, als hätte sie sich von dir finden lassen... Sie ist voller [MEGA]UNENDLICHER ENERGIE[/MEGA]!`, // alemán
			`その石は、暗黒のエネルギーを渦巻かせている。狂信者たちがこの石を求めて、数え切れないほどの夜と資源を費やし、果てしなく探し続けていたのを見たことがある。まるで、石のほうから見つけられることを望んでいたかのようだ……。[MEGA]無限のエネルギー[/MEGA]があふれている！`, // japonés
			`어두운 에너지가 소용돌이치고 있다. 광신도들이 이 물건을 찾기 위해 수많은 밤과 자원을 쏟아부으며 끝없이 찾아다니는 모습을 본 적이 있다. 마치 이 물건이 스스로 발견되도록 허락한 것만 같다... [MEGA]무한 에너지[/MEGA]가 넘쳐흐른다!`, // coreano
			`它周围萦绕着一股黑暗能量，你曾见过狂热分子为了寻找这东西不惜耗费无数个夜晚和大量资源，始终不懈地追寻。它几乎就像是主动让你找到它一样……其中充斥着[MEGA]无限能量[/MEGA]！`, // chino
			`Spowija ją mroczna energia, której fanatycy poszukują bez końca, poświęcając niezliczone noce i ogromne zasoby, byle tylko znaleźć ten przedmiot. To niemal tak, jakby pozwoliła ci się odnaleźć... Przepełnia ją [MEGA]NIESKOŃCZONA ENERGIA[/MEGA]!` // polaco
		],
		condition: {
			key: 'gengar'
		}
	},
}


export const normalPool = [ 
	'protein', 'carbos', 'iron', 'zinc', 'lightClay', 'stickyBarb', 'litCoal', 'poisonBarb', 'shellBell', 'fertiliser', 'squirtBottle', 'hikingKit', 

	'lifeOrb', 'magmarizer', 'electirizer', 'magnet', 'wideLens', 'stretchySpring', 'bigRoot', 'starPiece', 'dampMulch', 'heavyDutyBoots', 'airBalloon',

	'quickClaw', 'direHit', 'expertBelt', 'xAttack', 'spindaCocktail', 'ringTarget', 'lightBall', 'thickClub', 'nanabBerry', 'sprayduck', 'revelationAroma', 

	'leek', 'heatRock', 'oldRod', 'sniperScope', 'sharpBeak', 'razorClaw', 'blueBandana', 'falmeOrb', 'toxicOrb', 'adrenalineOrb', 'choiceScarf', 

	'weaknessPolicy', 'softSand', 'silphScope','zoomLens', 'loadedDice', 'quickPowder', 'metalPowder', 'metronome', 'assaultVest', 'laggingTail', 'badgeOfHonor', 

	'helixFossil', 'liechiBerry', 'domeFossil', 'lansatBerry', 'clawFossil', 'starfBerry', 'rockyHelmet', 'strangeIdol', 'sailFossil', 'dragonFang', 'wrestlingMask',

	'shieldBreakerBullet', 'bindingBand', 'lustrousOrb', 'starCandy', 'cellBattery', 'ejectButton', 'ancientSword', 'ancientShield', 'inverter', 'luminousMoss', 'clefairyDoll', 

	'nightmareCloth', 'berryJuice', 'spindasSpecialDelivery', 'sunflowerPetal', 'cherryBlossom', 'tropicalPetal',   
	
	// // borrar
	// 'chimechite', 'mawilite', 'skarmorite', 'scraftinite', 'tatsugirinite', 'drampanite', 'slowbronite', 'steelixite',
	// 'metalCoatReal', 'leftovers', 'pidgeotite', 'clover', 'eviolite', 'spellTag', 'absolite', 'ridePager', 'ampharosite', 'scovillainSiracha', 'scovillainite', 
	// 'safetyGoggles', 'focusBand', 'magmaStone', 'cameruptite', 'powerHerb', 'muscleBand', 'icyRock', 'xSpeed',
	// 'condensedBlizzard', 'glalitite', 'subwoofer',  'waveMail', 'sharpedonite', 'boiledEgg', 'heartScale', 'jadeOrb', 'dragalgite', 'dampRock',
	// 'barbaraclite', 'tropicalMail', 'lucarionite', 'wacanBerry', 'ovalCharm', 'brickMail', 'starminite', 'twistedSpoon', 'alakazite', 'hardStone', 'altarianite', 
	// 'heatRockWeather', 'koffingJelly', 'rockyHelmetSpikes', 'blackGlasses', 'houndoominite', 'sootheBell',  'blimpKeys', 'fullIncense', 
	// 'metalCoat', 'aerodactylite', 'oddKeystone', 'lopunnite', 'auspiciousArmor', 'maliciousArmor', 'prismScale', 'roomService', 'sablenite', 
	// 'nectar', 'propCase', 'galladite', 'crunchies', 'salacBerry', 'berryPouch', 'beedrillite', 'metalCoatReal', 'scizorite', 'luckyPunch', 
	// 'terrainExtender', 'flygonite', 'smoothRock', 'tyranitarite', 'pokeSkates', 'excadrite', 'gardevoirite', 'gengarite',

	// //'dragoninite', 'heracronite', 'aggronite', 'magearnite', 'garchompite', 'gyaradosite', 'froslassite', 'metagrossite', 
]

export const luxuryPool = [
	'amuletCoin', 'charizarditeX', 'sceptilite', 'charizarditeY', 'shinyCharm', 'gimmighoul', 
]

export const adminPool = [
	'bicycle', 'mitsuesCocktail', 'sokudosPortfolio', 'thundersDrive', 'noxDex', 'rosesItem', 'revysBook', 
]

export const itemListData = [ 
	...normalPool,
	...luxuryPool,
	...adminPool
]

export const itemBackup = [...itemListData];

