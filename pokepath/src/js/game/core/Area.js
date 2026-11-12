import { routeData } from '../data/routeData.js';
import { PlacementTile } from '../component/PlacementTile.js';
import { Element } from '../../utils/Element.js';
import { Enemy } from '../component/Enemy.js';
import { text } from '../../file/text.js'
import { saveData } from '../../file/data.js';
import { playMusic, playSound } from '../../file/audio.js';
import { enemyData as e } from '../data/enemyData.js';
import { LinkBeam, SpikeZone } from '../component/Tower.js';

import { pokemonData } from '../data/pokemonData.js';
import { Piece } from '../component/Piece.js';

export class Area {
	constructor(main, areaData) {
		this.main = main;
		this.map;
		this.weather = false;
		this.weatherBy;
		this.imposedWeather = false;
		this.enemyWeather = false;
		this.isCustom = false;
		this.customData = {}
		this.addTiles = [0, 0, 0, 0];

		this.autoWave = false;
		this.repeat = false;
		this.mirrorWM = false;

		this.routeNumber = areaData.routeNumber;
		this.routeWaves = areaData.routeWaves;

		this.waveNumber;
		this.waveActive;

		this.enemies = [];
		this.waves = [];
		this.waypoints = [];
		this.placementTiles = [];
		this.placementTile2D = [];
		this.towers = [];
		this.chessPieces = [];
		this.linkBeams = [];
		this.spikeZones = [];

		this.hitsReceived = 0;
		this.defeatedEnemiesWave = 0;
		this.defeatedEnemiesWaveByUB = 0;
		this.totalDamageDealt = 0;
		this.totalTrueDamageDealt = 0;
		this.shellBellWaveUsed = false;
		this.sturdyUsed = false;
		this.iceBodyActivated = false;
		this.clefairyDollUsed = false;
		this.leftoversWaveUsed = false;
		this.heartScale = 0;
		this.roomService = 0;

		this.healUsed = {};
		this.moxieUsers = {};
		this.speedBoostUsers = {};
		this.focusEnergyUsers = {};
		this.bulkUpUsers = {};
		this.meteorMashUsers = {};

		this.usedBell = false;
		this.extraBell = false;
		this.honeyGather = 0;
		this.rivalryAmount = 0;
		this.pendingHeal = 0;
		this.anchorShot = false;
		this.shellSmashActive = false;

		this.magmaStorm = false;
		this.hugePower = false;
		this.unnerve = false;
		this.harvest = false;
		this.cloudNine = false;
		this.pixilate = false;
		this.victoryStar = false;
		this.swordsDance = false;
		this.sacredSword = false;
		this.heartOfSteel = false;
		this.solarPower = false;

		this.helpingHand = 0;
		this.heavyMetal = false;
		this.anchorShot = false;
		this.iceBody = false;
		this.sturdy = false;

		this.activePieces = 0;
		
		this.inChallenge = false;
		this.music;

		this.loadArea(areaData.routeNumber);
		this.goldWave = 0;

		this.waveStartTime = null;
    	this.waveElapsedTime = 0;
    	this.stallTriggeredForDeath = new Set();

    	while (this.routeWaves.length < Object.keys(routeData).length) this.routeWaves.push(1);
	}

	getSaveData() {
		return {
			routeNumber: this.routeNumber,
			routeWaves: this.routeWaves,
		};
	}

	checkWeather() {
		const previousWeather = this.weather;

		this.addTiles = [0, 0, 0, 0];
		this.cloudNine = false;
		this.pixilate = false;
		this.victoryStar = false;
		this.unnerve = false;
		this.hugePower = false;
		this.magmaStorm = false;
		this.harvest = false;
		this.swordsDance = false;
		this.sacredSword = false;
		this.heartOfSteel = false;
		this.solarPower = false;
		this.iceBody = false;
		this.sturdy = false;
		this.helpingHand = 0;
		this.rivalryAmount = 0;
		this.roomServiceActive = false;
		this.prepareThunderStorm = null;
		this.prepareSandAvalanche = null;

		this.towers.forEach(t => { 
			if (t.ability.id == 'cloudNine') this.cloudNine = true; 
			if (t.ability.id == 'pixilate') this.pixilate = t; 
			if (t.ability.id == 'helpingHand') this.helpingHand++; 
			if (t.ability.id == 'victoryStar') this.victoryStar = true; 
			if (t.ability.id == 'swordsDance') this.swordsDance = true; 
			if (t.ability.id == 'sacredSword') this.sacredSword = true; 
			if (t.ability.id == 'heartOfSteel') this.heartOfSteel = true; 
			if (t.ability.id == 'solarPower') this.solarPower = true; 
			if (t.ability.id == 'unnerve') this.unnerve = true;
			if (t.ability.id == 'hugePower') this.hugePower = true;
			if (t.ability.id == 'sturdy') this.sturdy = true;
			if (t.ability.id == 'iceBody') this.iceBody = true;
			if (t.ability.id == 'harvest') this.harvest = true;
			if (t.ability.id == 'magmaStorm') this.magmaStorm = t;
			if (t?.pokemon?.item?.id == 'roomService') this.roomServiceActive = true;
			if (['rivalryPower', 'rivalrySpeed'].includes(t.ability.id)) this.rivalryAmount++;

			if (!t.isPassenger) {
				if (t.ability.id == 'grassPlatform') this.addTiles[1]++;
				if (t.ability.id == 'icePlatform') this.addTiles[2]++;
			}
		});

		this.weather = (this.imposedWeather) ? this.map.weather : false;
		this.weather = (this.enemyWeather) ? this.enemyWeather : this.weather;
		this.weatherBy = null;

		this.towers.forEach(t => { 
			if ((t.ability.id == 'drizzle' || t.ability.id == 'berserkMega' || t.pokemon?.item?.id == 'dampRock') && !this.imposedWeather) this.weather = 'rain';
			if ((['sandStream', 'sandStreamMegaTyranitar', 'sandStreamTyranitar'].includes(t.ability.id) || t.pokemon?.item?.id == 'smoothRock') && !this.imposedWeather) {
				this.weather = 'sandstorm';
				this.weatherBy = t.pokemon;
			}
			if ((t.ability.id == 'snowWarning' || t.pokemon?.item?.id == 'icyRock') && !this.imposedWeather) this.weather = 'hail';
			if ((t.pokemon?.item?.id == 'heatRockWeather' || t.ability.id == 'drought' || t.ability.id == 'burnNerf') && !this.imposedWeather) this.weather = 'harshSunlight';
			if (t.ability.id == 'wildboltStorm') this.prepareThunderStorm = t.pokemon;  
			if (t.ability.id == 'sandsearStorm') this.prepareSandAvalanche = t.pokemon;  
			if (t.ability.id == 'bleakwindStorm' && !this.imposedWeather) this.weather = 'strongWinds'
		});

		if (['rain', 'heavyRain'].includes(this.weather) && this.prepareThunderStorm != null) {
			this.weather = 'thunderStorm';
			this.weatherBy = this.prepareThunderStorm;
		}

		if (['sandstorm'].includes(this.weather) && this.prepareSandAvalanche != null) {
			this.weather = 'sandAvalanche';
			this.weatherBy = this.prepareSandAvalanche;
		}

		if (this.weather && this.pixilate) {
			this.weather = 'starryNight';
			this.weatherBy = this.pixilate;
		}
		this.main.UI.displayWeather();

		if (previousWeather !== this.weather) this.towers.forEach(t => t.updateOrbitalSpeed?.());

		if (this.map.id === 35) this.updateChessPieces()
	}

	getWindFactorAt(x, y, dx) {
	    if (!Array.isArray(this.windTiles2D) || this.windTiles2D.length === 0) return 1;
	    if (!dx) return 1;

	    const col = Math.floor(x / 24);
	    const row = Math.floor(y / 24);

	    const tileRow = this.windTiles2D[row];
	    if (!tileRow) return 1;
	    const tileValue = tileRow[col];
	    if (tileValue !== 8) return 1;

	    return dx > 0 ? 2 : 0.6;
	}

	getSlowFactorAt(x, y) {
	    if (!Array.isArray(this.slowTiles2D) || this.slowTiles2D.length === 0) return 1;

	    const col = Math.floor(x / 24);
	    const row = Math.floor(y / 24);

	    const tileRow = this.slowTiles2D[row];
	    if (!tileRow) return 1;
	    const tileValue = tileRow[col];
	    if (tileValue !== 7) return 1;
	    return 0.3
	}

	getSpikeZoneSlowFactorAt(x, y) {
	    if (!Array.isArray(this.spikeZones) || this.spikeZones.length === 0) return 1;

	    let factor = 1;
	    for (const sz of this.spikeZones) {
	        if (!sz || !sz.active || !sz.slow) continue;

	        const dx = x - sz.x;
	        const dy = y - sz.y;
	        if (Math.hypot(dx, dy) > sz.radius) continue;

	        const szFactor = sz.slowFactor ?? 0.5;
	        if (szFactor < factor) factor = szFactor;
	    }
	    return factor;
	}

	loadArea(routeNumber, wave, keepTowers = false, challenge = false, custom = false, customData = {}) {
		this.repeat = false;
		this.mirrorWM = false;
		this.isCustom = custom;
		this.customData = customData;
		this.main.UI.waveSelectorBlock.style.background = 'revert-layer';
		this.main.UI.waveSelectorBlock.style.boxShadow = 'revert-layer';
		this.main.UI.waveSelectorMirror.style.background = 'revert-layer';
		this.main.UI.waveSelectorMirror.style.boxShadow = 'revert-layer';
		this.weather = false;
		this.imposedWeather = false;
		this.enemyWeather = false;
		this.autoWave = false;
		this.usedBell = false;
		this.extraBell = false;
		this.heavyMetal = false;
		this.honeyGather = 0;
		this.rivalryAmount = 0;
		this.pendingHeal = 0;
		this.anchorShot = false;
		this.activePieces = 0;
		this.addTiles = [0, 0, 0, 0];

		this.main.UI.autoWave.style.background = 'revert-layer';

		if (challenge) {
			this.inChallenge = challenge;
		} else this.inChallenge = false;
		
		if (!keepTowers) {
			this.main.UI.tilesCountNum = [0, 0, 0, 0];
			const teamCopy = [...this.main.team.pokemon];

			for (const pokemon of teamCopy) {
				if (pokemon.isDeployed) {
					pokemon.isDeployed = false;
					pokemon.tilePosition = -1;
					// retirar torre
					const index = this.main.area.towers.findIndex(tower => tower.pokemon === pokemon);
					if (index !== -1) {
						this.main.area.towers[index].tile.tower = false;
						this.main.area.towers.splice(index, 1);
					}
				}
			}
		}
			
		if (wave != undefined) this.routeWaves[routeNumber] = wave;

		this.routeNumber = routeNumber;
		this.map = routeData[routeNumber];
		this.waveNumber = this.routeWaves[routeNumber];
		this.waveActive = false;

		if (this.waveNumber === null) this.waveNumber = 1;

		if (this.map?.weather) {
			this.imposedWeather = true;
			this.weather = this.map.weather;
		}
		
		if (!keepTowers) {
			this.placementTiles = [];
			this.placementTile2D = [];
			this.windTiles2D = [];
			this.slowTiles2D = [];

			this.waves = this.map.waves;
			this.waypoints = this.map.waypoints;

			const tileColumns = this.map.xl ? 60 : this.map.xlh ? 90 : 30;

			this.main.game.resizeCanvas(!!this.map.xl, !!this.map.xlv, !!this.map.xlh);

			for (let i = 0; i < this.map.placementTile.length; i += tileColumns) {
			    this.placementTile2D.push(this.map.placementTile.slice(i, i + tileColumns))
			}

			if (Array.isArray(this.map.windTiles)) {
			    for (let i = 0; i < this.map.windTiles.length; i += tileColumns) {
			        this.windTiles2D.push(this.map.windTiles.slice(i, i + tileColumns))
			    }
			}

			if (Array.isArray(this.map.slowTiles)) {
			    for (let i = 0; i < this.map.slowTiles.length; i += tileColumns) {
			        this.slowTiles2D.push(this.map.slowTiles.slice(i, i + tileColumns))
			    }
			}

			let counter = 0;
			this.placementTile2D.forEach((row, y) => {
			    row.forEach((symbol, x) => {
			        if (symbol !== 0) {
			            this.placementTiles.push(
			            	new PlacementTile(this.main, x * 24, y * 24, this.main.game.ctx, symbol, counter)
			            )
			            counter++;
			        }
			    })
			})

			this.chessPieces = [];

			if (Array.isArray(this.map.chessTiles)) {
			    const chessPiecesData = {
			        h: pokemonData['kingdra'],
			        q: pokemonData['vespiquen'],
			        b: pokemonData['bisharp'],
			        k: pokemonData['kingambit'],
			        p: pokemonData['pawniard'],
			        t: pokemonData['stakataka']
			    };

			    const chessTile2D = [];

			    for (let i = 0; i < this.map.chessTiles.length; i += tileColumns) {
			        chessTile2D.push(this.map.chessTiles.slice(i, i + tileColumns));
			    }

			    chessTile2D.forEach((row, y) => {
			        row.forEach((symbol, x) => {

			            if (typeof symbol !== 'string') return;

			            const pieceType = symbol.charAt(0);

			            const pokemon = chessPiecesData[pieceType];

			            if (!pokemon) return;

			            const chessTile = {
			                id: `chess-${x}-${y}`,
			                land: 1,
			                position: {
			                    x: x * 24,
			                    y: y * 24
			                },
			                size: 24,
			                center: {
			                    x: x * 24 + 12,
			                    y: y * 24 + 12
			                },
			                tower: false,
			                passenger: false
			            };

			            const piece = new Piece(
			                this.main,
			                x * 24,
			                y * 24,
			                this.main.game.ctx,
			                pokemon,
			                chessTile
			            );

			            piece.chessType = symbol;

			            this.chessPieces.push(piece);
			        });
			    });
			}
		}
		
		this.enemies = [];
		this.main.game.canvasBackground.src = this.map.background;
		if (this.map.id == 29 && this.main.player.secrets.klefki) this.main.game.canvasBackground.src = './src/assets/images/maps/8-1bis.png';
		if (this.map.id == 39 && this.main.player.secretItems.beedrillite) this.main.game.canvasBackground.src = './src/assets/images/maps/9-2bis.png';
		if (this.map.id == 6 && this.main.player.secretItems.gengarite) this.main.game.canvasBackground.src = './src/assets/images/maps/3-1bis.png';

		if (this.map.effect != null) {
			this.main.game.canvasEffect.src = this.map.effect;
			this.main.game.effectEnabled = true;
		} else {
			this.main.game.effectEnabled = false;
		}

		this.hitsReceived = 0;
		this.defeatedEnemiesWave = 0;
		this.defeatedEnemiesWaveByUB = 0;
		this.totalDamageDealt = 0;
		this.totalTrueDamageDealt = 0;
		this.shellBellWaveUsed = false;
		this.sturdyUsed = false;
		this.iceBodyActivated = false;
		this.clefairyDollUsed = false;
		this.leftoversWaveUsed = false;
		this.heartScale = 0;
		this.roomService = 0;
		this.healUsed = {};
		this.moxieUsers = {};
		this.speedBoostUsers = {};
		this.focusEnergyUsers = {};
		this.bulkUpUsers = {};
		this.meteorMashUsers = {};
		this.main.UI.refreshDamageDealt(true);
		if (this.main.area === this) this.checkWeather();
		this.music = this.map.music;

		playMusic(this.music.song);
	}

	newWave() {
		if (this.main.area.waveActive) return;
		this.goldWave = 0;
		this.main.UI.waveIncomeState.waveEarned = 0;
		this.usedBell = false;
		this.extraBell = false;
		this.heavyMetal = false;
		this.honeyGather = 0;
		this.pendingHeal = 0;
		this.anchorShot = false;

		playSound('select', 'ui');
		
		this.hitsReceived = 0;
		this.defeatedEnemiesWave = 0;
		this.defeatedEnemiesWaveByUB = 0;
		this.totalDamageDealt = 0;
		this.totalTrueDamageDealt = 0;
		this.shellBellWaveUsed = false;
		this.sturdyUsed = false;
		this.iceBodyActivated = false;
		this.clefairyDollUsed = false;
		this.leftoversWaveUsed = false;
		this.heartScale = 0;
		this.roomService = 0;
		this.shellSmashActive = false;
		this.healUsed = {};
		this.moxieUsers = {};
		this.speedBoostUsers = {};
		this.focusEnergyUsers = {};
		this.bulkUpUsers = {};
		this.meteorMashUsers = {};
		
		this.main.UI.refreshDamageDealt();

		this.waveStartTime = performance.now();
    	this.waveElapsedTime = 0;

		this.waveActive = true;
		this.stallTriggeredForDeath.clear();

		this.spawnEnemies();
		this.main.UI.update();

		if (this.map.id == 29 && this.waveNumber === 100) this.main.player.getHealed(14);
 		if (this.map.id == 35) this.updateChessPieces();
 		
		this.towers.forEach(t => { 
			t.incenseBuff = 0;
			t.incenseTimer = 0;
			t.slowStartTimer = 0;
			t.lightningRodCharge = 0;
			t.shiftGearSpeed = 0;
			t.bulkUpStop = false;
			t.bulkUpTimer = 0;
			t.bulkUpPower = 0;
			t.meteorMashCount = 0;
			t.laundryStacks = 0;

			t.luckyPunchStack = 0;
       		t.luckyPunchTimer = 0;

			if (t.ability?.id == 'shellSmash' && this.main.player.health[this.routeNumber] > 1) {
				playSound('hit2', 'effect');
				this.shellSmashActive = true;
				this.main.player.getDamaged(1);
				this.hitsReceived++;
			}

			if (t.ability?.id == 'shiftGear') {
				t.shiftGearSpeed = 0;
				t.projectiles.forEach(proj => {
	                proj.angularSpeed = 0;
	            })
			}

			if (t.ability?.id == 'gluttony') {
				this.towers.forEach(t => {
					let berryField = null;

			        if (t?.pokemon?.item?.id === 'salacBerry') {
			            t.salacBerryTimer = (this.harvest) ? 36000 : 18000;
			            berryField = 'salacBerryTimer';
			        } else if (t?.pokemon?.item?.id === 'liechiBerry') {
			            t.liechiBerryTimer = (this.harvest) ? 36000 : 18000;
			            berryField = 'liechiBerryTimer';
			        } else if (t?.pokemon?.item?.id === 'lansatBerry') {
			            t.lansatBerryTimer = (this.harvest) ? 36000 : 18000;
			            berryField = 'lansatBerryTimer';
			        } else if (t?.pokemon?.item?.id === 'starfBerry') {
			            t.starfBerryTimer = (this.harvest) ? 36000 : 18000;
			            berryField = 'starfBerryTimer';
			        }

					if (berryField && t.isPassenger) {
			            const baseTower = this.towers.find(bt => bt.tile === t.tile && !bt.isPassenger);
			            if (baseTower?.pokemon?.item?.id === 'berryPouch') {
			                baseTower[berryField] = t[berryField];
			            }
			        }
				})
			}

			if (t.ability?.id == 'featherDance') {
				t.feathers = (t.pokemon?.item?.id == 'boiledEgg') ? 30 : 20;
			}

			if (t.ability?.id == 'bulletPunch') {
				t.bulletPunchCharges = 10;
			}

			if (t.ability?.id == 'bulletPunchMega') {
				t.bulletPunchCharges = 5;
			}
		});

		if (this.inChallenge) this.main.game.chrono.start();
		if (this.main.mapScene.isOpen) this.main.mapScene.update();
		if (this.main.editorScene.isOpen) this.main.editorScene.close();
	}

	triggerStall(deadEnemy) {
	    if (!deadEnemy || this.stallTriggeredForDeath.has(deadEnemy)) return;

	    const stall = this.enemies.find(enemy =>
	        enemy !== deadEnemy &&
	        !enemy.dying &&
	        enemy.hp > 0 &&
	        enemy.passive?.id === 'stall' &&
	        !enemy.passiveActivated
	    );

	    if (!stall) return;

	    this.stallTriggeredForDeath.add(deadEnemy);

	    stall.position.x = deadEnemy.position.x;
	    stall.position.y = deadEnemy.position.y;

	    stall.center.x = deadEnemy.center.x;
	    stall.center.y = deadEnemy.center.y;

	    stall.waypoints = deadEnemy.waypoints.slice();
	    stall.waypointIndex = deadEnemy.waypointIndex;

	    stall.hasEnteredCanvas = deadEnemy.hasEnteredCanvas;
	    stall.distanceTraveled = deadEnemy.distanceTraveled;

	    stall.frames.direction = deadEnemy.frames.direction;

	    stall.passiveActivated = true;

	    stall.hasEnteredCanvas =
	        stall.hasEnteredCanvas || deadEnemy.hasEnteredCanvas;

	    if (!this.main.mute[1]) {
	        playSound('teleport', 'effect');
	    }
	}

	endWave() {
		this.heavyMetal = false;
		this.anchorShot = false;
		const hadEnemyWeather = Boolean(this.enemyWeather);
		this.enemyWeather = false;
		this.imposedWeather = Boolean(this.map?.weather);
		if (!this.map?.weather || hadEnemyWeather || this.towers.some(tower => tower.ability?.id === 'pixilate')) {
			this.checkWeather();
		}

		if (this.main.player.health[this.routeNumber] <= 0) return;

		if (this.waveStartTime !== null) {
		    this.waveElapsedTime = (performance.now() - this.waveStartTime) / 1000;
		    this.waveStartTime = null;
		}

		this.main.player.stats.wavesCompleted++;
		let bonusGold = Math.floor((5 * (this.routeNumber + 1) * this.waveNumber + Math.pow(this.waveNumber, 1.4))/2);
		if (this.main.player.stars > 150) bonusGold = Math.floor(bonusGold * (this.main.player.stars / 150));

		if (this.main.player.records[this.routeNumber] < this.waveNumber && !this.map.isSecret) {
			this.main.player.records[this.routeNumber] = Math.min(100, this.waveNumber);
			
			if (this.main.player.stars > 50) {
				this.main.player.changeGold(bonusGold);
				this.goldWave += bonusGold;
			}
			this.main.player.obtainStar();
		}

		this.towers.forEach(t => { 
			t.incenseBuff = 0;
			t.incenseTimer = 0;
			t.slowStartTimer = 0;
			t.lightningRodCharge = 0;
			t.bulkUpStop = false;
			t.bulkUpTimer = 0;
			t.bulkUpPower = 0;
			t.meteorMashCount = 0;
			t.healUsed = false;
			t.laundryStacks = 0;
			
			t.pokemon.stadistics['waves'] = (t.pokemon.stadistics['waves'] ?? 0) + 1;
			if (t.ability.id == 'triage' && Math.random() < 0.05) {
				this.main.player.getHealed(1);
			}
			if (t.ability?.id == 'shiftGear') {
				const maxProj = t.projectiles.length;
				t.shiftGearSpeed = 0;
				t.projectiles.forEach((proj, i) => {
	                proj.angularSpeed = 0;
	                proj.angle = (i * Math.PI * 2) / maxProj;
	            })
			}

			if (t.pokemon.specie.key === 'megaSharpedo' && t.pokemon.extra) t.pokemon.recoverTarget = t.pokemon.targetMode;

			if (t.pokemon.recoverItem) {
				this.main.itemController.equip(t.pokemon.recoverItem, t.pokemon);
				if (t.pokemon.item.id === 'quickClaw') {
		      		t.pokemon.changeTargetMode('faster');
		      	} else if (t.pokemon.item.id === 'spindaCocktail') {
		      		t.pokemon.changeTargetMode('random');
		      	}  
		      	t.pokemon.recoverItem = null;
			}
		});

		if (this.pendingHeal > 0) {
			playSound('hit3', 'effect');
			this.main.player.getHealed(this.pendingHeal);
		    // this.main.player.achievementProgress.heartRestore += 1;
			this.pendingHeal = 0;
		}

		this.main.player.changeGold(bonusGold);
		this.goldWave += bonusGold;
		if (this.goldWave > this.main.player.stats.maxGoldPerWave[0]) {
			this.main.player.stats.maxGoldPerWave[0] = this.goldWave;
			this.main.player.stats.maxGoldPerWave[1] = this.getRouteTag(this.map.order, this.waveNumber);
		}

		let goldPerSecond = this.waveElapsedTime > 0 ? Math.round((this.goldWave / this.waveElapsedTime) * 100) / 100 : 0;
		if (goldPerSecond > this.main.player.stats.maxGoldPerTime[0]) {
			this.main.player.stats.maxGoldPerTime[0] = goldPerSecond;
			this.main.player.stats.maxGoldPerTime[1] = this.getRouteTag(this.map.order, this.waveNumber);
		}

		this.goldWave = 0;

		this.waveActive = false;
		// if (this.main.player.health[this.routeNumber] === 1) this.main.player.unlockAchievement(12);

		if (this.isCustom) return this.main.defeatScene.open(true);

		if (this.waveNumber < 100 && !this.map.isSecret) {
			if (!this.repeat) this.waveNumber++;
			if (!this.repeat) this.routeWaves[this.routeNumber]++;
			this.main.UI.update();
			this.main.UI.revertUI();

			saveData(this.main.player, this.main.team, this.main.box, this.main.area, this.main.shop, this.main.teamManager);

			const msg = new Element(this.main.scene, {
				className: 'wave-completed',
				text: text.map.waveCompleted[this.main.lang].toUpperCase()
			}).element;

			msg.style.opacity = 0;
			setTimeout(() => {
				msg.style.opacity = 1;
			}, 0);

			setTimeout(() => {
				msg.style.opacity = 0;
				setTimeout(() => msg.remove(), 500);
			}, 1500);

			playSound('end', 'ui');
			this.main.UI.displayEnemyInfo(this.waves[this.waveNumber].preview[0], 0);

			const futureWave = this.waves[((this.waveNumber - 1) % 100) + 1].preview;
			const invisibles = [
				e.ditto, e.kecleon, e.absol, e.lunala, e.froslass, e.mimikyu, e.huntail, e.octillery,
				e.zorua, e.zoroark, e.mimeJr, e.mrMime, e.scraggy, e.scrafty, e.nickit, e.thievul, e.sableye, 
				e.marshadow, e.mew, e.duskull, e.dusclops, e.dusknoir, e.spectrier
			];

			if (this.autoWave && this.main.autoStop && futureWave.some(poke => invisibles.includes(poke))) {
				this.switchAutoWave();
			}

			if (this.autoWave && this.main.autoStopBoss && this.waveNumber == 100) {
				this.switchAutoWave();
			}

			if (this.autoWave && this.main.autoStopBoss && this.waveNumber == 50 && this.map.id >= 12) {
				this.switchAutoWave();
			}

			if (this.autoWave) return this.newWave();

			if (this.main.mapScene.isOpen) this.main.mapScene.update();
			if (this.main.shopScene.isOpen) this.main.shopScene.update();
		} else {
			this.towers.forEach(t => { t.pokemon.stadistics['bosses'] = (t.pokemon.stadistics['bosses'] ?? 0) + 1 });
			if (!this.repeat) this.main.finalScene.open();
			else {
				this.main.UI.update();
				this.main.UI.revertUI();
				saveData(this.main.player, this.main.team, this.main.box, this.main.area, this.main.shop, this.main.teamManager);
					const msg = new Element(this.main.scene, {
					className: 'wave-completed',
					text: text.map.waveCompleted[this.main.lang].toUpperCase()
				}).element;

				msg.style.opacity = 0;
				setTimeout(() => {
					msg.style.opacity = 1;
				}, 0);

				setTimeout(() => {
					msg.style.opacity = 0;
					setTimeout(() => msg.remove(), 500);
				}, 1500);

				playSound('end', 'ui');
				this.main.UI.displayEnemyInfo(this.waves[this.waveNumber].preview[0], 0);
				if (this.autoWave) return this.newWave();
			}
		}	
	}

	switchAutoWave() {
		this.autoWave = !this.autoWave;
		if (this.autoWave) {
			this.main.UI.autoWave.style.background = 'var(--autoWave2)';
			if (!this.waveActive) this.newWave();
		} else {
			this.main.UI.autoWave.style.background = 'revert-layer';
		}
	}

	spawnEnemies() {
		let falseWaveNumber = ((this.waveNumber - 1) % 100) + 1;;

		const wave = this.waves[falseWaveNumber].wave;
		let waveOffset = (this.inChallenge.mirror || this.mirrorWM) ? this.map.offsetMirror : this.map.offset;

		wave.forEach((enemy, i) => {
			if (['snivy', 'servine', 'serperior'].includes(enemy?.id)) waveOffset = (!this.inChallenge.mirror && !this.mirrorWM) ? this.map.offsetMirror : this.map.offset;

			const xOffset = (i + 1) * waveOffset.x;
			const yOffset = (i + 1) * waveOffset.y;
			const waypointEnemy = this.selectWaypoints(enemy);

			if (enemy) {
				this.enemies.push(
					new Enemy(
						waypointEnemy[0].x - xOffset,
						waypointEnemy[0].y - yOffset,
						enemy,
						waypointEnemy,
						this.main,
						this.main.game.ctx,
					)
				)
			}
		})
	}

	selectWaypoints(enemy) {
		let waypoints;

		if (enemy?.id === 'spinda') {
			waypoints = (this.inChallenge.mirror || this.mirrorWM) ? this.map.spindaWaypointsMirror : this.map.spindaWaypoints;
		} else if (enemy?.id === 'superSpinda') {
			waypoints = (this.inChallenge.mirror || this.mirrorWM) ? this.map.superSpindaWaypointsMirror : this.map.superSpindaWaypoints;
		} else if (['snivy', 'servine', 'serperior'].includes(enemy?.id)) {
			waypoints = (this.inChallenge.mirror || this.mirrorWM) ? this.map.waypoints : this.map.waypointsMirror;
		} else {
			waypoints = (this.inChallenge.mirror || this.mirrorWM) ? this.map.waypointsMirror : this.waypoints;
		}
		
		if (this.waveNumber === 100 && this.map.id === 21) return waypoints[0];
		if (this.waveNumber === 100 && this.map.id === 40) return waypoints[1];
		if (this.waveNumber === 100 && this.map.id === 44) return waypoints[1];

		return waypoints[Math.floor(Math.random() * waypoints.length)];
	}

	recalculateAuras() {
	    // Reinicia poder base
	    this.towers.forEach(t => {
	        t.power = t.basePower;
	        t.projectile.power = t.basePower;
	        t.auraBuffActive = false;
	    });

	    // Reaplica auras activas
	    this.towers.forEach(auraTower => {
	        if (!auraTower.ability || auraTower.ability.id !== 'powerAura') return;
	        const auraRange = auraTower.range;

	        this.towers.forEach(tower => {
	            if (tower === auraTower) return;
	            const dx = tower.center.x - auraTower.center.x;
	            const dy = tower.center.y - auraTower.center.y;
	            const distance = Math.hypot(dx, dy);

	            if (distance <= auraRange) {
	                tower.auraBuffActive = true;
	                tower.power = Math.ceil(tower.basePower * 1.2);
	                tower.projectile.power = tower.power;
	            }
	        });
	    });

	    if (this.map.id == 20 && !this.main.player.secrets.phione && this.towers.length == 2) {
	    	if (
	    		[104, 70].includes(this.towers[0].pokemon.id) &&
	    		[104, 70].includes(this.towers[1].pokemon.id)
	    	) {
	    		this.main.player.secrets.phione = true;
	    		this.main.UI.getSecret('phione');
	    	}
	    }
	}

	rebuildPlusMinusLinks(maxSearchRange = 2000) {
	    this.linkBeams = this.linkBeams || [];
	    this.linkBeams = this.linkBeams.filter(lb => lb && lb.type && lb.type !== 'plusminus');

	    const plus = [];
	    const minus = [];

	    for (const t of this.towers) {
	        if (!t || !t.ability) continue;
	        if (t.ability.id === 'plus') plus.push(t);
	        else if (t.ability.id === 'minus') minus.push(t);
	    }

	    for (const p of plus) {
	        for (const m of minus) {
	            if (p === m) continue;

	            const dx = m.center.x - p.center.x;
	            const dy = m.center.y - p.center.y;
	            const d = Math.hypot(dx, dy);
	            if (d > maxSearchRange) continue;

	            const a = p.pokemon?.tilePosition ?? p.tile?.id ?? Math.random();
	            const b = m.pokemon?.tilePosition ?? m.tile?.id ?? Math.random();
	            const pairKey = (a < b) ? `${a}-${b}` : `${b}-${a}`;

	            const exists = this.linkBeams.some(lb => lb && lb.pairKey === pairKey);
	            if (exists) continue;

	            const lb = new LinkBeam(p, m, { width: 10, hitCooldown: 900, maxRange: 2000, color: (p.pokemon?.specie?.color || '#ff6600') });

	            lb.type = 'plusminus';
	            lb.pairKey = pairKey;

	            this.linkBeams.push(lb);
	        }
	    }
	}

	updateLinkBeams(delta) {
	    if (!this.linkBeams || this.linkBeams.length === 0) return;

	    for (let i = this.linkBeams.length - 1; i >= 0; i--) {
	        const lb = this.linkBeams[i];
	        if (!lb) { this.linkBeams.splice(i, 1); continue; }

	        if (!this.towers.includes(lb.fromTower) || !this.towers.includes(lb.toTower)) {
	            this.linkBeams.splice(i, 1);
	            continue;
	        }

	        const fp = lb.fromTower?.pokemon?.tilePosition;
	        const tp = lb.toTower?.pokemon?.tilePosition;
	        if (fp === undefined || tp === undefined || fp === -1 || tp === -1) {
	            this.linkBeams.splice(i, 1);
	            continue;
	        }

	        if (typeof lb.update === 'function') lb.update(delta);
	        if (typeof lb.draw === 'function') lb.draw();

	        if (!lb.active) {
	            this.linkBeams.splice(i, 1);
	        }
	    }
	}

	createSpikeZone(position, tower, options = {}) {
	    this.spikeZones = this.spikeZones || [];

	    const radius = options.radius ?? 40;
	    const dedupDistance = options.dedupDistance ?? Math.max(24, radius * 0.5);
	    const dedupTime = options.dedupTime ?? 250;

	    const now = Date.now();

	    for (const sz of this.spikeZones) {
	        if (!sz) continue;

	        if (!sz.active) continue;

	        const life = now - sz.createdAt;
	        const remaining = sz.duration - life;
	        if (remaining <= sz.duration * 0.1) continue;

	        const sameTower = (sz.tower === tower);

	        const dx = sz.x - position.x;
	        const dy = sz.y - position.y;
	        const dist = Math.hypot(dx, dy);

	        if (dist <= dedupDistance && (sameTower || life <= dedupTime)) {
	            return sz;
	        }
	    }

	    const spike = new SpikeZone(position, tower, options);
	    this.spikeZones.push(spike);
	    return spike;
	}

	updateSpikeZones(delta) {
	    if (!this.spikeZones || this.spikeZones.length === 0) return;

	    const ctx = this.main && this.main.game ? this.main.game.ctx : (this.spikeZones[0] && this.spikeZones[0].ctx);

	    for (let i = this.spikeZones.length - 1; i >= 0; i--) {
	        const sz = this.spikeZones[i];
	        if (!sz) { this.spikeZones.splice(i, 1); continue; }

	        if (typeof sz.update === 'function') sz.update(delta);
	        if (typeof sz.draw === 'function') {
	            if (!sz.ctx && ctx) sz.ctx = ctx;
	            sz.draw();
	        }

	        if (!sz.active) {
	            this.spikeZones.splice(i, 1);
	        }
	    }
	}

	getRouteTag(route, wave) {
		if ([20, 30, 31, 33, 35].includes(route)) return "???";
		if (route > 20) route -= 1;
		if (route > 29) route -= 4;
		if (route > 30) route -= 1;
	  	const r1 = Math.floor(route / 4) + 1;
	  	const r2 = (route % 4) + 1;
	  	return `R${r1}-${r2} W${wave}`;
	}

	changeWave(i) {
		if (this.waveActive) return playSound('pop0', 'ui');
		playSound('option', 'ui');

		let nextWave = this.waveNumber + i;
		if (nextWave <= 0) nextWave = 100;
		else if (nextWave >= 101) nextWave = 1;

		this.waveStartTime = null;
		this.goldWave = 0;

		this.towers.forEach(t => { 
			t.incenseBuff = 0;
			t.incenseTimer = 0;
			t.lightningRodCharge = 0;
			t.shiftGearSpeed = 0;
			t.bulkUpStop = false;
			t.bulkUpTimer = 0;
			t.bulkUpPower = 0;
			t.meteorMashCount = 0;
			t.healUsed = false;
			t.laundryStacks = 0;
		});

		this.waveNumber = nextWave;
		this.routeWaves[this.routeNumber] = nextWave;
		this.main.UI.update();
		this.main.UI.revertUI();
		this.waveActive = false;
		this.enemies = [];

		this.main.UI.displayEnemyInfo(this.waves[this.waveNumber].preview[0], 0);

		this.hitsReceived = 0;
		this.defeatedEnemiesWave = 0;
		this.defeatedEnemiesWaveByUB = 0;
		this.totalDamageDealt = 0;
		this.totalTrueDamageDealt = 0;
		this.shellBellWaveUsed = false;
		this.sturdyUsed = false;
		this.iceBodyActivated = false;
		this.clefairyDollUsed = false;
		this.leftoversWaveUsed = false;
		this.heartScale = 0;
		this.roomService = 0;
		this.healUsed = {};
		this.moxieUsers = {};
		this.speedBoostUsers = {};
		this.focusEnergyUsers = {};
		this.bulkUpUsers = {};
		this.meteorMashUsers = {};

		this.main.UI.update();
	}

	useBell() {
		if (this.waveNumber === 100) {
			playSound('bronzor1', 'effect');
			if (this.waveActive) {
				this.enemies.forEach(enemy => {
		       		if (!enemy.dying) {
		       			enemy.passiveCharges = 0;
		       			enemy.baseSpeed += 0.3;
			       		enemy.speed += 0.3;
		       		}
		    	});
			}
		} else if (!this.usedBell) {
			if (
				(this.inChallenge?.lvlCap || this.inChallenge?.toughEnemies || this.inChallenge?.slotLimit || this.inChallenge?.noItems) && 
				!this.extraBell
			) {
				this.extraBell = true;
			} else {
				this.usedBell = true;
				this.main.UI.secretBronzor.style.pointerEvents = 'none';
			}
		
			playSound('bell', 'effect');
			
			let stunDuration = (this.inChallenge) ? 2 : 1;
			stunDuration += this.waveNumber * 0.04;

			if (this.waveActive) {
				this.enemies.forEach(enemy => {
		       		if (!enemy.dying) enemy.applyStatusEffect({ type: 'stun', duration: stunDuration });
		    	});
			}
		}
	}

	updateChessPieces() {
		setTimeout(() => {
			this.chessPieces.forEach(piece => piece.setActive(false));

			const rules = {
				kingdra: {
					17: ['h1', 'h2'],
					23: ['h1'],
					14: ['h1'],
					26: ['h1'],
					16: ['h2']
				},

				vespiquen: {
					10: ['q1'],
					13: ['q1']
				},

				pawniard: {
					19: ['p4'],
					23: ['p6'],
					25: ['p6', 'p7']
				},

				bisharp: {
					0: ['b1'],
					8: ['b1'],
					18: ['b1'],
					21: ['b1'],
					9: ['b2'],
					14: ['b2'],
					26: ['b1', 'b2'],
					30: ['b1'],
					2: ['b1', 'b2']
				},

				kingambit: {
					24: ['k1'],
					25: ['k1'],
				},

				stakataka: {
					8: ['t1'],
					9: ['t1'],
					5: ['t2'],
					14: ['t2'],
					19: ['t2'],
					21: ['t2'],
					23: ['t2'],
					24: ['t2'],
					25: ['t2'],
					26: ['t2'],
					10: ['t1', 't2']
				}
			};

			const allowedPieces = new Set();

			this.towers.forEach(tower => {
				const specie = (tower.pokemon?.specie?.key == 'ditto') ? tower.pokemon?.adn?.key :  tower.pokemon?.specie?.key;
				const tileId = tower.tile?.id;

				if (!specie || tileId == null || !rules[specie]) return;

				const pieces = rules[specie][tileId];
				if (!pieces) return;

				pieces.forEach(piece => allowedPieces.add(piece));
			});

			this.activePieces = 0;

			this.chessPieces.forEach(piece => {
				if (allowedPieces.has(piece.chessType)) {
					piece.setActive(true);
					this.activePieces++;
				}
			});

		}, 50);
	}
}