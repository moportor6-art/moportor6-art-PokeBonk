export const weatherData = {
	rain: {
		name: [
		  	"Rain",
		  	"Lluvia",
		  	"Pluie",
		  	"Chuva",
		  	"Pioggia",
		  	"Regen",
		  	"あめ",
		  	"비",
		  	"雨",
		  	"Deszcz"
		],
		description: [
			"Increases damage dealt by units in water by 20%.",
		  	"Aumenta el daño causado por las unidades situadas en agua un 20%.",
		  	"Augmente les dégâts infligés par les unités dans l'eau de 20%.",
		  	"Aumenta o dano causado por unidades na água em 20%.",
		  	"Aumenta i danni inflitti dalle unità situate in acqua del 20%.",
		  	"Erhöht den von Einheiten im Wasser verursachten Schaden um 20%.",
		  	"水中にいるユニットの与えるダメージが20%増加する。",
		  	"물 속에 있는 유닛의 가하는 피해가 20% 증가합니다.",
		  	"水中单位造成的伤害提高20%。",
		  	"Zwiększa obrażenia zadawane przez jednostki znajdujące się w wodzie o 20%.",
		],
		sprite: './src/assets/images/icons/rain.png',
	},
	heavyRain: {
	    name: [
	        "Heavy Rain",
	        "Diluvio",
	        "Pluie Diluvienne",
	        "Chuva Pesada",
	        "Pioggia Torrenziale",
	        "Starkregen",
	        "おおあめ",
	        "폭우",
	        "大雨",
	        "Ulewa"
	    ],
	    description: [
	        "Reduces damage dealt by units in water by 50%.",
	        "Reduce el daño causado por las unidades situadas en agua un 50%.",
	        "Réduit les dégâts infligés par les unités dans l'eau de 50%.",
	        "Reduz o dano causado por unidades na água em 50%.",
	        "Riduce i danni inflitti dalle unità situate in acqua del 50%.",
	        "Reduziert den von Einheiten im Wasser verursachten Schaden um 50%.",
	        "水中にいるユニットの与えるダメージが50%減少する。",
	        "물 속에 있는 유닛의 가하는 피해가 50% 감소합니다.",
	        "水中单位造成的伤害降低50%。",
	        "Zmniejsza obrażenia zadawane przez jednostki znajdujące się w wodzie o 50%."
	    ],
	    sprite: './src/assets/images/icons/heavyRain.png',
	},
	thunderStorm: {
	    name: [
			`Thunder Storm`, // inglés
			`Tormenta Eléctrica`, // español
			`Tempête Électrique`, // francés
			`Tempestade Elétrica`, // portugués
			`Tempesta Elettrica`, // italiano
			`Gewittersturm`, // alemán
			`かみなりあらし`, // japonés
			`번개폭풍`, // coreano
			`雷暴风暴`, // chino
			`Burza Elektryczna` // polaco
	    ],
	    description: [
	        "Increases damage dealt by units in water by 25%.",
		  	"Aumenta el daño causado por las unidades situadas en agua un 25%.",
		  	"Augmente les dégâts infligés par les unités dans l'eau de 25%.",
		  	"Aumenta o dano causado por unidades na água em 25%.",
		  	"Aumenta i danni inflitti dalle unità situate in acqua del 25%.",
		  	"Erhöht den von Einheiten im Wasser verursachten Schaden um 25%.",
		  	"水中にいるユニットの与えるダメージが25%増加する。",
		  	"물 속에 있는 유닛의 가하는 피해가 25% 증가합니다.",
		  	"水中单位造成的伤害提高25%。",
		  	"Zwiększa obrażenia zadawane przez jednostki znajdujące się w wodzie o 25%.",
	    ],
	    sprite: './src/assets/images/icons/thunderStorm.png',
	},
	harshSunlight: {
		name: [
			"Harsh Sunlight",
			"Sol Intenso",
			"Soleil",
			"Luz Solar Intensa",
			"Luce Solare Intensa",
			"Gleißendes Sonnenlicht",
			"ひでり",
			"햇살이 강한",
			"烈日",
			"Intensywne światło słoneczne"
		],
		description: [
			"Reduces the recharge speed of units on grass by 15%.",
			"Reduce la velocidad de recarga de las unidades situadas en hierba un 15%.",
			"Réduit la vitesse de recharge des unités situées sur l’herbe de 15 %.",
			"Reduz a velocidade de recarga das unidades situadas na grama em 15%.",
			"Riduce la velocità di ricarica delle unità posizionate sull’erba del 15%.",
			"Reduziert die Wiederaufladegeschwindigkeit von Einheiten auf Gras um 15 %.",
			"草むらにいるユニットのリチャージ速度を15％減少させる。",
			"풀밭에 있는 유닛의 재사용 속도를 15% 감소시킵니다.",
			"将草地上的单位充能速度降低15%。",
			"Zmniejsza prędkość odnowienia jednostek na trawie o 15%."
		],
		sprite: './src/assets/images/icons/harshSunlight.png',
	},
	extremelyHarshSunlight: {
		name: [
			"Extremely Harsh Sunlight",
			"Sol abrasador",
			"Rayons de soleil extrêmes",
			"Luz Solar Extrema",
			"Luce Solare Estrema",
			"Extremes Sonnenlicht",
			"てっていひでり",
			"극심한 햇빛",
			"烈日照耀",
			"Skrajnie intensywne światło słoneczne"
		],
		description: [
			"Increases the recharge speed of units on grass by 200%.",
			"Aumenta la velocidad de recarga de las unidades situadas en hierba un 200%.",
			"Augmente la vitesse de recharge des unités situées sur l’herbe de 200 %.",
			"Aumenta a velocidade de recarga das unidades situadas na grama em 200%.",
			"Aumenta la velocità di ricarica delle unità posizionate sull’erba del 200%.",
			"Erhöht die Wiederaufladegeschwindigkeit von Einheiten auf Gras um 200 %.",
			"草むらにいるユニットのリチャージ速度を200％増加させる。",
			"풀밭에 있는 유닛의 재사용 속도를 200% 증가시킵니다.",
			"将草地上的单位充能速度提高200%。",
			"Zwiększa prędkość odnowienia jednostek na trawie o 200%."
			],
		sprite: './src/assets/images/icons/extremelyHarshSunlight.png',
	},
	hail: {
		id: "hail",
		name: [
			"Hail",
			"Granizo",
			"Grêle",
			"Granizo",
			"Grandine",
			"Hagel",
			"あられ",
			"싸라기눈",
			"冰雹",
			"Grad"
		],
		description: [
			"Increases critical damage dealt by units by 25%.",
			"Aumenta el daño crítico causado por las unidades en un 25%.",
			"Augmente les dégâts critiques infligés par les unités de 25 %.",
			"Aumenta o dano crítico causado pelas unidades em 25%.",
			"Aumenta i danni critici inflitti dalle unità del 25%.",
			"Erhöht den von Einheiten verursachten kritischen Schaden um 25 %.",
			"ユニットの与えるクリティカルダメージが25%増加する。",
			"유닛의 치명타 피해가 25% 증가합니다.",
			"单位造成的暴击伤害提高25%。",
			"Zwiększa obrażenia krytyczne zadawane przez jednostki o 25%."
		],
		sprite: './src/assets/images/icons/hail.png',
	},
	sandstorm: {
		id: "sandstorm",
		name: [
			"Sandstorm",
			"Tormenta arena",
			"Tempête de Sable",
			"Tempestade de Areia",
			"Terrempesta",
			"Sandsturm",
			"すなあらし",
			"모래바람",
			"沙暴",
			"Burza Piaskowa"
		],
		description: [
	        "Enemies without armor take 0.3% max HP damage every second.",
	        "Los enemigos sin armadura reciben daño cada segundo igual al 0.3% de su vida máxima.",
	        "Les ennemis sans armure subissent chaque seconde des dégâts égaux à 0,3 % de leurs PV max.",
	        "Inimigos sem armadura recebem dano a cada segundo igual a 0,3% de sua vida máxima.",
	        "I nemici senza armatura subiscono ogni secondo danni pari allo 0,3% dei loro PS massimi.",
	        "Feinde ohne Rüstung erleiden jede Sekunde Schaden in Höhe von 0,3 % ihrer maximalen KP.",
	        "装甲のない敵は毎秒、最大HPの0.3%のダメージを受ける。",
	        "방어력이 없는 적은 매초 최대 HP의 0.3%만큼 피해를 입습니다.",
	        "无护甲的敌人每秒受到相当于其最大生命值 0.3% 的伤害。",
	        "Wrogowie bez pancerza otrzymują co sekundę obrażenia równe 0,3% ich maksymalnego PŻ."
	    ],
		sprite: './src/assets/images/icons/sandstorm.png',
	},
	sandAvalanche: {
	    name: [
			`Sand avalanche`, // inglés
			`Tormenta Eléctrica`, // español
			`Tempête Électrique`, // francés
			`Tempestade Elétrica`, // portugués
			`Tempesta Elettrica`, // italiano
			`Gewittersturm`, // alemán
			`かみなりあらし`, // japonés
			`번개폭풍`, // coreano
			`雷暴风暴`, // chino
			`Burza Elektryczna` // polaco
	    ],
	    description: [
	        "Enemies without armor take 0.5% max HP damage every second.",
	        "Los enemigos sin armadura reciben daño cada segundo igual al 0.5% de su vida máxima.",
	        "Les ennemis sans armure subissent chaque seconde des dégâts égaux à 0,5 % de leurs PV max.",
	        "Inimigos sem armadura recebem dano a cada segundo igual a 0,5% de sua vida máxima.",
	        "I nemici senza armatura subiscono ogni secondo danni pari allo 0,5% dei loro PS massimi.",
	        "Feinde ohne Rüstung erleiden jede Sekunde Schaden in Höhe von 0,5 % ihrer maximalen KP.",
	        "装甲のない敵は毎秒、最大HPの0.5%のダメージを受ける。",
	        "방어력이 없는 적은 매초 최대 HP의 0.5%만큼 피해를 입습니다.",
	        "无护甲的敌人每秒受到相当于其最大生命值 0.5% 的伤害。",
	        "Wrogowie bez pancerza otrzymują co sekundę obrażenia równe 0,5% ich maksymalnego PŻ."
	    ],
	    sprite: './src/assets/images/icons/sandAvalanche.png',
	},
	strongWinds: {
	    name:[
			`Strong Winds`, // inglés
			`Turbulencias`, // español
			`Vents Forts`, // francés
			`Ventos Fortes`, // portugués
			`Venti Forti`, // italiano
			`Starker Wind`, // alemán
			`らんきりゅう`, // japonés
			`강풍`, // coreano
			`乱流`, // chino
			`Silne Wiatry` // polaco
		],
	    description: [
			`Enemies moves 10% slower.`, // inglés
			`Los enemigos se mueven un 10% más despacio.`, // español
			`Les ennemis se déplacent 10 % plus lentement.`, // francés
			`Os inimigos movem-se 10% mais devagar.`, // portugués
			`I nemici si muovono il 10% più lentamente.`, // italiano
			`Gegner bewegen sich 10 % langsamer.`, // alemán
			`敵の移動速度が10%下がる。`, // japonés
			`적의 이동 속도가 10% 감소합니다.`, // coreano
			`敌人的移动速度降低10%。`, // chino
			`Wrogowie poruszają się o 10% wolniej.` // polaco
		],
	    sprite: './src/assets/images/icons/strongWinds.png',
	},
	fog: {
		id: "fog",
		name: [
			'Fog', // inglés
			'Niebla', // español
			'Brouillard', // francés
			'Névoa', // portugués
			'Nebbia', // italiano
			'Nebel', // alemán
			'きり', // japonés
			'안개', // coreano
			'浓雾', // chino
			'Mgła' // polaco
		],
		description: [
	       	'Enemies become invisible when they start their path.', // inglés
			'Los enemigos obtienen invisibilidad al iniciar su recorrido.', // español
			'Les ennemis deviennent invisibles lorsqu’ils commencent leur parcours.', // francés
			'Os inimigos ficam invisíveis ao iniciarem o seu percurso.', // portugués
			'I nemici diventano invisibili quando iniziano il loro percorso.', // italiano
			'Gegner werden unsichtbar, sobald sie ihren Weg beginnen.', // alemán
			'敵は進路を開始すると透明になる。', // japonés
			'적은 경로를 시작할 때 투명해진다.', // coreano
			'敌人开始行进时会获得隐形状态。', // chino
			'Wrogowie stają się niewidzialni, gdy rozpoczynają swoją trasę.' // polaco
	    ],
		sprite: './src/assets/images/icons/fog.png',	
	},
	starryNight: {
		name: [
		  	`Starry Night`, // inglés
			`Noche Estrellada`, // español
			`Nuit Étoilée`, // francés
			`Noite Estrelada`, // portugués
			`Notte Stellata`, // italiano
			`Sternennacht`, // alemán
			`星月夜`, // japonés
			`별밤`, // coreano
			`繁星之夜`, // chino
			`Gwiaździsta Noc` // polaco
		],
		description: [
			`Increases all towers power by 1 for every 50 stars.`, // inglés
			`Aumenta el poder de todas las torres en 1 por cada 50 estrellas.`, // español
			`Augmente la puissance de toutes les tours de 1 pour chaque tranche de 50 étoiles.`, // francés
			`Aumenta o poder de todas as torres em 1 a cada 50 estrelas.`, // portugués
			`Aumenta la potenza di tutte le torri di 1 ogni 50 stelle.`, // italiano
			`Erhöht die Kraft aller Türme um 1 für jeweils 50 Sterne.`, // alemán
			`50個の星ごとに、すべてのタワーの威力が1上昇する。`, // japonés
			`별 50개마다 모든 타워의 위력이 1 증가합니다.`, // coreano
			`每获得50颗星，所有塔的威力提高1。`, // chino
			`Zwiększa moc wszystkich wież o 1 za każde 50 gwiazd.` // polaco
		],
		sprite: './src/assets/images/icons/starry.png',
	},
}