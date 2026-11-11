import { Element } from '../utils/Element.js';
import { Utility } from '../utils/Utility.js';
import { KeyController } from '../utils/KeyController.js';
import { Tooltip } from '../utils/Tooltip.js';
import { UI } from './UI.js';
import { Game } from './Game.js';

// SCENES
import { BoxScene } from './scenes/BoxScene.js';
import { InventoryScene } from './scenes/InventoryScene.js';
import { MapScene } from './scenes/MapScene.js';
import { PokemonScene } from './scenes/PokemonScene.js';
import { ShopScene } from './scenes/ShopScene.js';
import { MenuScene } from './scenes/MenuScene.js';
import { ChallengeScene } from './scenes/ChallengeScene.js';
import { ProfileScene } from './scenes/ProfileScene.js';
import { DefeatScene } from './scenes/DefeatScene.js';
import { NewGameScene } from './scenes/NewGameScene.js';
import { TutorialScene } from './scenes/TutorialScene.js';
import { FinalScene } from './scenes/FinalScene.js';
import { DraftScene } from './scenes/DraftScene.js';
import { EditorScene } from './scenes/EditorScene.js';
import { DexScene } from './scenes/DexScene.js';

// CORE
import { Player } from './core/Player.js';
import { Team } from './core/Team.js';
import { Box } from './core/Box.js';
import { Area } from './core/Area.js';
import { Shop } from './core/Shop.js';

// CONTROLLERS
import { ItemController } from './controller/ItemController.js';
import { applyUITheme, getUIThemeName } from './controller/ThemeController.js';
import { TeamManager } from './core/TeamManager.js';
// wave controller

// DATA
import { pokemonData, allPokemon } from './data/pokemonData.js';
import { Pokemon } from './component/Pokemon.js';
import { saveData } from '../file/data.js';

export class Main {
	constructor(data) {
		this.lang = JSON.parse(window.localStorage.getItem("data")).config.language; 
		this.showDamage = JSON.parse(window.localStorage.getItem("data")).config.showDamage ?? 1; 

		this.autoReset = JSON.parse(window.localStorage.getItem("data")).config.autoReset ?? 0; 
		this.autoStop = JSON.parse(window.localStorage.getItem("data")).config.autoStop ?? 0; 
		this.autoStopBoss = JSON.parse(window.localStorage.getItem("data")).config.autoStopBoss ?? 0; 
		this.displayHealth = JSON.parse(window.localStorage.getItem("data")).config.displayHealth ?? 0; 
		this.mapEffects = JSON.parse(window.localStorage.getItem("data")).config.mapEffects ?? 1; 
		document.documentElement.classList.toggle('disable-shop-background-animation', this.mapEffects === 0);
		this.indicatorField = JSON.parse(window.localStorage.getItem("data")).config.indicatorField ?? 0; 
		this.indicatorShape = JSON.parse(window.localStorage.getItem("data")).config.indicatorShape ?? 0; 
		this.durationCC = JSON.parse(window.localStorage.getItem("data")).config.durationCC ?? 0; 
		this.fastTarget = JSON.parse(window.localStorage.getItem("data")).config.fastTarget ?? 0; 
		this.uiTheme = JSON.parse(window.localStorage.getItem("data")).config.uiTheme ?? 0; 
		this.font = JSON.parse(window.localStorage.getItem("data")).config.font ?? 0;
		this.particles = JSON.parse(window.localStorage.getItem("data")).config.particles ?? 1; 
		this.disableTagColors = Number(JSON.parse(window.localStorage.getItem("data")).config.disableTagColors ?? 0);
		document.body.classList.toggle('disable-tag-colors', this.disableTagColors);

		const config = JSON.parse(window.localStorage.getItem('data'))?.config ?? {};
		const savedOpacity = config.effectOpacity ?? config;

		this.effectOpacity = {
		    projectiles: Number(savedOpacity.projectiles ?? 100),
		    areas: Number(savedOpacity.areas ?? 100),
		    beams: Number(savedOpacity.beams ?? 100),
		    waves: Number(savedOpacity.waves ?? 100),
		    auras: Number(savedOpacity.auras ?? 50),
		    bombardment: Number(savedOpacity.bombardment ?? 100),
		    special: Number(savedOpacity.special ?? 100)
		};

		if (JSON.parse(window.localStorage.getItem("data")).config.font == null) {
		    const data = JSON.parse(window.localStorage.getItem("data"));
		    data.config.font = this.font;
		    window.localStorage.setItem("data", JSON.stringify(data));
		}
		// this.slowRefreshFix = JSON.parse(window.localStorage.getItem("data")).config.slowRefreshFix ?? 0; 
		this.mute = JSON.parse(window.localStorage.getItem("data")).config.mute ?? { 0: false, 1: false, 2: false, 3: false, 4: false };

		this.data = data;

		// SCENES
		this.scene = new Element(document.getElementById("screen"), { id: 'game-scene' }).element;
		this.UI = new UI(this);
		this.game = new Game(this);
		this.boxScene = new BoxScene(this);
		this.inventoryScene = new InventoryScene(this);
		this.mapScene = new MapScene(this);
		this.challengeScene = new ChallengeScene(this);
		this.pokemonScene = new PokemonScene(this);
		this.shopScene = new ShopScene(this);
		this.profileScene = new ProfileScene(this);
		this.menuScene = new MenuScene(this);
		this.defeatScene = new DefeatScene(this);
		this.newGameScene = new NewGameScene(this);
		this.tutorialScene = new TutorialScene(this);
		this.finalScene = new FinalScene(this);
		this.draftScene = new DraftScene(this);
		this.editorScene = new EditorScene(this);
		this.dexScene = new DexScene(this);

		// CORE
		this.player = new Player(this, data.player);
		this.team = new Team(this, data.team);
		this.box = new Box(this, data.box);
		this.area = new Area(this, data.area);
		this.shop = new Shop(this, data.shop);
		this.teamManager = new TeamManager(this, data.teamManager);

		// CONTROLLER
		this.itemController = new ItemController(this);

		// MISC
		this.utility = new Utility();
		this.tooltip = new Tooltip(this);
		this.keys = new KeyController(this);

		this.area.checkWeather();
		this.checkUpdates();
		this.checkOldEvolution();
		this.checkLostSecretPokemon();
		this.checkShinyCount();
		this.recalculateTotalPokemonLevel();

		this.load();

		this.sections = [
			this.boxScene,
			this.inventoryScene,
			this.mapScene,
			this.challengeScene,
			this.shopScene,
			this.profileScene,
			this.menuScene,
			this.editorScene,
			this.dexScene
		]
	}

	load() {
		this.UI.update();
		this.game.load();
		if (this.data.new) this.newGameScene.open();
		if (this.data.autoReset == undefined) this.data.autoReset = 0;
		if (this.data.autoStop == undefined) this.data.autoStop = 0;
		if (this.data.autoStopBoss == undefined) this.data.autoStopBoss = 0;
		if (this.data.displayHealth == undefined) this.data.displayHealth = 0;
		if (this.data.mapEffects == undefined) this.data.mapEffects = 0;
		if (this.data.mute == undefined) this.data.mute = { 0: false, 1: false, 2: false, 3: false, 4: false };
		if (this.data.indicatorField == undefined) this.data.indicatorField = 0;
		if (this.data.indicatorShape == undefined) this.data.indicatorShape = 0;
		if (this.data.durationCC == undefined) this.data.durationCC = 0;
		if (this.data.fastTarget == undefined) this.data.fastTarget = 0;

		applyUITheme(getUIThemeName(this.uiTheme));
		this.menuScene.applyFont();
		
		setInterval(() => {
		    this.player.stats.timePlayed++;   
		}, 60000);
	}

	checkUpdates() {
		if (this.player.update == undefined || this.player.update < 1) {		
			//this.player.health = [...this.player.health, 14, 14, 14];
			//this.player.records = [...this.player.records, 0, 0, 0];
			//this.area.routeWaves = [...this.area.routeWaves, 1, 1, 1];
			this.player.stats.defeatedSpecies = new Set([]);
		}	
		this.player.update = 3;			
	}

	checkOldEvolution() {
		// TODOS LOS POKÉMON EVOLUCIONADOS
		let pokes = [...this.box.pokemon, ...this.team.pokemon];
		pokes.forEach(poke => {
			if (poke.id === 8 && poke.lvl > 70 && poke.specie.evolution) {
				poke.updateSpecie(poke.specie.evolution.pokemon);
			}
			if (poke.id === 51 && poke.lvl > 60 && poke.specie.evolution) {
				poke.updateSpecie(poke.specie.evolution.pokemon);
			}
			if (poke.id === 54 && poke.lvl > 60 && poke.specie.evolution) {
				poke.updateSpecie(poke.specie.evolution.pokemon);
			}
			if (poke.id === 77 && poke.lvl > 70 && poke.specie.evolution) {
				poke.updateSpecie(poke.specie.evolution.pokemon);
			}
		})
	}

	checkLostSecretPokemon() {
		let pokes = [...this.box.pokemon, ...this.team.pokemon];

		if (!pokes.some(poke => poke.id === 86) && this.player.secrets.greavard) this.box.addPokemon(new Pokemon(pokemonData['houndstone'], 100, null, this));
		if (!pokes.some(poke => poke.id === 85) && this.player.secrets.cacnea) this.box.addPokemon(new Pokemon(pokemonData['cacturne'], 100, null, this));
		if (!pokes.some(poke => poke.id === 137) && this.player.secrets.sandygast) this.box.addPokemon(new Pokemon(pokemonData['palossand'], 100, null, this));
		if (!pokes.some(poke => poke.id === 141) && this.player.secrets.ducklett) this.box.addPokemon(new Pokemon(pokemonData['swanna'], 100, null, this));
		if (!pokes.some(poke => poke.id === 89) && this.player.secrets.chatot) this.box.addPokemon(new Pokemon(pokemonData['chatot'], 100, null, this));
		if (!pokes.some(poke => poke.id === 88) && this.player.secrets.luvdisc) this.box.addPokemon(new Pokemon(pokemonData['luvdisc'], 100, null, this));
		if (!pokes.some(poke => poke.id === 87) && this.player.secrets.stakataka) this.box.addPokemon(new Pokemon(pokemonData['stakataka'], 100, null, this));
		if (!pokes.some(poke => poke.id === 102) && this.player.secrets.gholdengo) this.box.addPokemon(new Pokemon(pokemonData['gholdengo'], 100, null, this));
		if (!pokes.some(poke => poke.id === 404) && this.player.secrets.missingNo) this.box.addPokemon(new Pokemon(pokemonData['missingNo'], 100, null, this));
		if (!pokes.some(poke => poke.id === 125) && this.player.secrets.shedinja) this.box.addPokemon(new Pokemon(pokemonData['shedinja'], 100, null, this));
		if (!pokes.some(poke => poke.id === 104) && this.player.secrets.manaphy) this.box.addPokemon(new Pokemon(pokemonData['manaphy'], 100, null, this));
		if (!pokes.some(poke => poke.id === 103) && this.player.secrets.phione) this.box.addPokemon(new Pokemon(pokemonData['phione'], 100, null, this));
		if (!pokes.some(poke => poke.id === 154) && this.player.secrets.spiritomb) this.box.addPokemon(new Pokemon(pokemonData['spiritomb'], 100, null, this));
		if (!pokes.some(poke => poke.id === 155) && this.player.secrets.bronzor) this.box.addPokemon(new Pokemon(pokemonData['bronzor'], 100, null, this));
		if (!pokes.some(poke => poke.id === 150) && this.player.secrets.minior) this.box.addPokemon(new Pokemon(pokemonData['minior'], 100, null, this));
		if (!pokes.some(poke => poke.id === 166) && this.player.secrets.corsolaGalar) this.box.addPokemon(new Pokemon(pokemonData['corsolaGalar'], 100, null, this));
		if (!pokes.some(poke => poke.id === 165) && this.player.secrets.keldeo) this.box.addPokemon(new Pokemon(pokemonData['keldeo'], 100, null, this));
		if (!pokes.some(poke => poke.id === 172) && this.player.secrets.victini) this.box.addPokemon(new Pokemon(pokemonData['victini'], 100, null, this));
		if (!pokes.some(poke => poke.id === 173) && this.player.secrets.mew) this.box.addPokemon(new Pokemon(pokemonData['mew'], 100, null, this));
		if (!pokes.some(poke => poke.id === 174) && this.player.secrets.marshadow) this.box.addPokemon(new Pokemon(pokemonData['marshadow'], 100, null, this));
		if (!pokes.some(poke => poke.id === 177) && this.player.secrets.farfetchdGalar) this.box.addPokemon(new Pokemon(pokemonData['farfetchdGalar'], 100, null, this));
		if (!pokes.some(poke => poke.id === 180) && this.player.secrets.dhelmise) this.box.addPokemon(new Pokemon(pokemonData['dhelmise'], 100, null, this));
		if (!pokes.some(poke => poke.id === 196) && this.player.secrets.sneaselHisui) this.box.addPokemon(new Pokemon(pokemonData['sneaselHisui'], 100, null, this));
		if (!pokes.some(poke => poke.id === 235) && this.player.secrets.samurottHisui) this.box.addPokemon(new Pokemon(pokemonData['samurottHisui'], 100, null, this));
		if (!pokes.some(poke => poke.id === 251) && this.player.secrets.sandshrewAlola) this.box.addPokemon(new Pokemon(pokemonData['sandshrewAlola'], 100, null, this));

		if (!pokes.some(poke => poke.specie.key === 'shaymin') && this.player.secrets.shaymin) this.box.addPokemon(new Pokemon(pokemonData['shaymin'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'celebi') && this.player.secrets.celebi) this.box.addPokemon(new Pokemon(pokemonData['celebi'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'lunala') && this.player.secrets.lunala) this.box.addPokemon(new Pokemon(pokemonData['lunala'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'zapdos') && this.player.secrets.zapdos) this.box.addPokemon(new Pokemon(pokemonData['zapdos'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'moltres') && this.player.secrets.moltres) this.box.addPokemon(new Pokemon(pokemonData['moltres'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'articuno') && this.player.secrets.articuno) this.box.addPokemon(new Pokemon(pokemonData['articuno'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'regirock') && this.player.secrets.regirock) this.box.addPokemon(new Pokemon(pokemonData['regirock'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'groudon') && this.player.secrets.groudon) this.box.addPokemon(new Pokemon(pokemonData['groudon'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'hooh') && this.player.secrets.hooh) this.box.addPokemon(new Pokemon(pokemonData['hooh'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'registeel') && this.player.secrets.registeel) this.box.addPokemon(new Pokemon(pokemonData['registeel'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'regice') && this.player.secrets.regice) this.box.addPokemon(new Pokemon(pokemonData['regice'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'regigigas') && this.player.secrets.regigigas) this.box.addPokemon(new Pokemon(pokemonData['regigigas'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'kyogre') && this.player.secrets.kyogre) this.box.addPokemon(new Pokemon(pokemonData['kyogre'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'thundurus') && this.player.secrets.thundurus) this.box.addPokemon(new Pokemon(pokemonData['thundurus'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'tapuFini') && this.player.secrets.tapuFini) this.box.addPokemon(new Pokemon(pokemonData['tapuFini'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'nihilego') && this.player.secrets.nihilego) this.box.addPokemon(new Pokemon(pokemonData['nihilego'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'tapuKoko') && this.player.secrets.tapuKoko) this.box.addPokemon(new Pokemon(pokemonData['tapuKoko'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'tapuBulu') && this.player.secrets.tapuBulu) this.box.addPokemon(new Pokemon(pokemonData['tapuBulu'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'tapuLele') && this.player.secrets.tapuLele) this.box.addPokemon(new Pokemon(pokemonData['tapuLele'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'keldeo') && this.player.secrets.keldeo) this.box.addPokemon(new Pokemon(pokemonData['keldeo'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'heatran') && this.player.secrets.heatran) this.box.addPokemon(new Pokemon(pokemonData['heatran'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'landorus') && this.player.secrets.landorus) this.box.addPokemon(new Pokemon(pokemonData['landorus'], 100, null, this));

		if (!pokes.some(poke => poke.specie.key === 'volcanion') && this.player.secrets.volcanion) this.box.addPokemon(new Pokemon(pokemonData['volcanion'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'pheromosa') && this.player.secrets.pheromosa) this.box.addPokemon(new Pokemon(pokemonData['pheromosa'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'cobalion') && this.player.secrets.cobalion) this.box.addPokemon(new Pokemon(pokemonData['cobalion'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'stakataka') && this.player.secrets.stakataka) this.box.addPokemon(new Pokemon(pokemonData['stakataka'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'tornadus') && this.player.secrets.tornadus) this.box.addPokemon(new Pokemon(pokemonData['tornadus'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'magearna') && this.player.secrets.magearna) this.box.addPokemon(new Pokemon(pokemonData['magearna'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'diancie') && this.player.secrets.diancie) this.box.addPokemon(new Pokemon(pokemonData['diancie'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'terrakion') && this.player.secrets.terrakion) this.box.addPokemon(new Pokemon(pokemonData['terrakion'], 100, null, this));
		if (!pokes.some(poke => poke.specie.key === 'virizion') && this.player.secrets.virizion) this.box.addPokemon(new Pokemon(pokemonData['virizion'], 100, null, this));
	}

	checkShinyCount() {
		const pokes = [...this.box.pokemon, ...this.team.pokemon];
		const shinyCount = pokes.filter(pokemon => pokemon.isShiny).length;

		this.player.stats.pokemonOwned = pokes.length;
		this.player.shinyAmount = shinyCount;
	}

	recalculateTotalPokemonLevel() {
		const pokes = [...this.box.pokemon, ...this.team.pokemon];
		const totalPokemonLevel = pokes.reduce((total, pokemon) => total + pokemon.lvl, 0);

		if (this.player.stats.totalPokemonLevel === totalPokemonLevel) return;

		this.player.stats.totalPokemonLevel = totalPokemonLevel;
	}


	// checkLostChallengePokemon() {
	// 	let pokes = [...this.box.pokemon, ...this.team.pokemon];

	// 	Object.entries(this.player.rewards[1]).forEach(ent => {
	// 		if (ent[1]) {
	// 			switch (ent[0]) {
	// 				case 0:
	// 					if (!pokes.some(poke => poke.id === 93)) this.box.addPokemon(new Pokemon(pokemonData['wingull'], 1, null, this));
	// 					break;
	// 				case 1:
	// 					break;
	// 			}
	// 		}
	// 	})
	// }

	updateLanguage() {
		this.UI.update();
	}

	isSectionOpen() {
		let isOpen = false;
		this.sections.forEach(section => {
			if (section.isOpen) isOpen = true;
		})
		return isOpen;
	}
}

function resize() {
	const BASE_WIDTH  = 1238;
	const BASE_HEIGHT = 674;

  	const scale = Math.min(
    	window.innerWidth / BASE_WIDTH,
    	window.innerHeight / BASE_HEIGHT
  	);

  	const root = document.getElementById("screen-root");
  	root.style.transform =
    `scale(${scale})`;
}

window.addEventListener("resize", resize);
resize();
