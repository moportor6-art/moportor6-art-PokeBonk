import { pokemonData, pokemonDataById } from '../data/pokemonData.js';
import { projectileData } from '../data/projectileData.js';
import { playSound } from '../../file/audio.js';

export class Pokemon {
	constructor(
		specie, lvl, targetMode, main, adn = undefined, favorite = false, item = null, alias = undefined, isShiny = false, 
		hideShiny = false, isMega = false, isReset = false, skin = null, extra = false, acquisitionDate = Date.now(), stadistics = {}, hasCustomSkin = false, unownForm = undefined
	) {
		this.main = main;

		this.specie = specie;
		this.lvl = lvl;
		this.cost;

		this.id = this.specie.id;
		this.adn = adn;
		this.tilePosition = -1;
		this.favorite = favorite;
		this.isShiny = isShiny;
		this.isMega = isMega;
		this.isReset = isReset;
		this.acquisitionDate = acquisitionDate;
		this.stadistics = stadistics;

		this.skin = skin;
		this.hasCustomSkin = hasCustomSkin;
		this.extra = extra;

		this.sprite = (this.skin == null || this.isMega) ? specie.sprite : this.skin;
		if (this.specie?.key === 'unown') this.sprite = JSON.parse(JSON.stringify(this.sprite));

		this.name = specie.name;
		this.alias = alias;
		this.unownForm = unownForm;
		this.ability = specie.ability;
		this.tiles = specie.tiles;
		this.projectile = specie.projectile;
		if (this.hasCustomSkin) this.setCustomSkin();
		this.rangeType = specie.rangeType;
		this.attackType = specie.attackType;

		this.speed = Math.floor(this.specie.speed.base + (this.specie.speed.scale * lvl));
		this.power = Math.floor(this.specie.power.base + (this.specie.power.scale * lvl));
		this.range = Math.floor(this.specie.range.base + (this.specie.range.scale * lvl));

		if (item) {
			const indx = this.main.player.items.findIndex(i => i.id === item.id);
			if (indx !== -1) {
				this.item = this.main.player.items[indx];
				if (this.ability.id != 'magician') this.item.equipedBy = this.id;
			}
		}

		//HABILIDADES

		this.ricochet = this.specie.ricochet ?? 0;
		this.orbital = this.specie.orbital ?? 0;
		this.streamAngle = this.specie.streamAngle ?? 0;
		this.bombardmentArea = this.specie.bombardmentArea ?? 0;
		this.bombardmentSplash = this.specie.bombardmentSplash ?? 0;

		this.innerRange = this.specie.range.inner;
		this.critical = this.specie.critical.base + (this.specie.critical.scale * lvl);
		this.setCost();

		this.isDeployed = false;
		this.inGroup = false;
		
		this.damageDealt = 0;
		this.trueDamageDealt = 0;

		if (targetMode == undefined) {
			if (this.attackType == 'area') this.targetMode = 'area';
			if (this.attackType == 'bombardment') this.targetMode = 'bombardment';
			// else if (
			// 	this.ability.id == 'quadraShot' || this.ability.id == 'tripleShot' || this.ability.id == 'doubleShot' || 
			// 	this.ability.id == 'curseDoubleShot' || this.ability.id == 'cradily' || this.ability.id == 'poisonDoubleShot' || 
			// 	this.ability.id == 'armorBreakDoubleShot' || this.ability.id == 'octaShot'
			// ) this.targetMode = 'available';
			else if (this.attackType == 'aura') this.targetMode = 'aura';
			else if (this.ability.id == 'scrappy' || this.ability.id == 'frisk' || this.ability.id == 'vigilantFrisk' || this.ability.id == 'moongeistBeam' || this.ability.id == 'grimNeigh') this.targetMode = 'invisible';
			else if (this.ability.id == 'burn') this.targetMode = 'notBurned';
			else if (this.ability.id == 'spinda') this.targetMode = 'random';
			else if (this.ability.id == 'curse' || this.ability.id == 'curseDoubleShot') this.targetMode = 'curseable';
			else if (this.ability.id == 'willOWisp') this.targetMode = 'cursed';
			else this.targetMode = 'first';
		} else this.targetMode = targetMode;
		//if (this.ability.id == 'poisonDoubleShot') this.targetMode = 'available';
		if (this.attackType == 'area') this.targetMode = 'area';
		if (this.attackType == 'aura') this.targetMode = 'aura';
		if (this.attackType == 'bombardment') this.targetMode = 'bombardment';
		
		if (
			this.item?.id == 'inverter' && 
			this.specie.key == 'malamar'
		) {
			this.innerRange = 150;
			this.range = 300;
			this.rangeType = 'donut';
		}

		this.form = (this.specie.form) ? this.specie.key : false;
		this.baseSprite = JSON.parse(JSON.stringify(this.sprite));
		this.hideShiny = hideShiny;

		if (this.specie?.key === 'unown') this.updateUnownSprite();

		if (this.isShiny) {
			if (!this.hideShiny) this.setShiny();
			this.main.player.shinyAmount++;
		}
	}

	getOriginalData() {
	    if (this.specie?.key) {
	        return {
	            specieKey: this.specie.key,
	            lvl: this.lvl,
	            targetMode: this.targetMode,
	            adn: this.adn,
	            favorite: this.favorite,
	            item: this.item,
	            alias: this.alias,
	            isShiny: this.isShiny,
	            hideShiny: this.hideShiny,
	            isMega: this.isMega,
	            isReset: this.isReset,
	            skin: this.skin,
	            extra: this.extra,
	            acquisitionDate: this.acquisitionDate,
	            stadistics: this.stadistics,
	            hasCustomSkin: this.hasCustomSkin,
	            unownForm: this.unownForm,
	        };
	    } else {
	        return {
	            specie: this.specie,
	            lvl: this.lvl,
	            targetMode: this.targetMode,
	            adn: this.adn,
	            favorite: this.favorite,
	            item: this.item,
	            alias: this.alias,
	            isShiny: this.isShiny,
	            hideShiny: this.hideShiny,
	            isMega: this.isMega,
	            isReset: this.isReset,
	            skin: this.skin,
	            extra: this.extra,
	            acquisitionDate: this.acquisitionDate,
	            stadistics: this.stadistics,
	            hasCustomSkin: this.hasCustomSkin,
	            unownForm: this.unownForm,
	        };
	    }
	}

	static fromOriginalData(data, main) {
	    let specie = null;

	    if (data.specieKey) {
	        // guardado nuevo
	        specie = pokemonData[data.specieKey];
	        if (!specie) {
	            //console.warn('specieKey no encontrada:', data.specieKey);
	            // no rompemos: fallback a data.specie si viene (por si existiera)
	            if (data.specie) specie = data.specie;
	        }
	    } else if (data.specie) {
	        // guardado antiguo: intentamos mapear al pokemonData canonical
	        const mapped = findSpecieInCatalog(data.specie);
	        if (mapped) {
	            specie = mapped;
	        } else {
	            // no hemos encontrado match claro: mantenemos el objeto antiguo para no perder datos
	            //console.warn('No se pudo mapear specie antigua a pokemonData; dejando el objeto antiguo. Datos:', data.specie.name?.[0] ?? data.specie);
	            specie = data.specie;
	        }
	    }

	    return new Pokemon(
	        specie,
	        data.lvl,
	        data.targetMode,
	        main,
	        data.adn,
	        data.favorite,
	        data.item,
	        data.alias,
	        data.isShiny,
	        data.hideShiny,
	        data.isMega,
	        data.isReset,
	        data.skin,
	        data.extra,
	        data.acquisitionDate ?? Date.now(),
	        data.stadistics,
	        data.hasCustomSkin ?? false,
	        data.unownForm
	    );
	}

	changeTargetMode(mode) {
		this.targetMode = mode;
		if (this.isDeployed) {
            const tower = this.main.area.towers.find(t => t.pokemon === this);
            if (tower) tower.targetMode = mode;       
        }
	}

	levelUp() {
        this.lvl++;
        if (this.lvl >= this.specie.evolution?.level && this.id != 95) {
        	if (this.id != 76) this.updateSpecie(this.specie.evolution.pokemon);
        	else {
        		if (this.main.utility.isBetweenHours(8, 18)) this.updateSpecie('lycanrocDay');
        		else this.updateSpecie('lycanrocNight');
        	}

        	if (this.id === 124 && !this.isReset) {
        		this.main.UI.getSecret('shedinja');
        	}
        }

        if (this.lvl >= this.specie.evolution?.level && this.id == 95 && (this.item?.id == 'inverter' || this.isReset)) {
        	this.updateSpecie(this.specie.evolution.pokemon);
        }

        this.updateStats();
        this.setCost();

		if (this.lvl > this.main.player.stats.highestPokemonLevel) this.main.player.stats.highestPokemonLevel = this.lvl;
		if (!this.isReset) this.main.player.stats.totalPokemonLevel++;

		this.form = (this.specie.form) ? this.specie.key : false;
		if (this.id == 70 && this.adn != undefined) this.transformADN();

        if (this.isDeployed) {
            const tower = this.main.area.towers.find(t => t.pokemon === this);
            if (tower) {
            	tower.updateStatsFromPokemon();
            	if (this.id == 61) {
		            if (tower.tile.land == 2) tower.updateTowerSprite(tower.pokemon.sprite.imageGrass, tower.pokemon.sprite.framesGrass, tower.pokemon.specie.projectileGrass);
		            else if (tower.tile.land == 3) tower.updateTowerSprite(tower.pokemon.sprite.imageWater, tower.pokemon.sprite.framesWater, tower.pokemon.specie.projectileWater);
		            else if (tower.tile.land == 4) tower.updateTowerSprite(tower.pokemon.sprite.imageMountain, tower.pokemon.sprite.framesMountain, tower.pokemon.specie.projectileMountain);      
		        } 
                if (typeof this.main.area.recalculateAuras === 'function') {
                    this.main.area.recalculateAuras();
                }
            }
        }  

        // if (this.lvl == 100) this.main.player.unlockAchievement(2);

        if (this.lvl > 50 && this.item?.id === 'eviolite' && this.main?.area?.inChallenge?.lvlCap !== 50) this.retireItem();
        if (this.item?.id === 'wacanBerry' && this.specie.key !== 'charjabug') this.retireItem();
    }

	setCost() {
		if (this.specie.costScale === 'low') {
			this.cost = Math.min(100000, Math.ceil(27 * Math.pow(1.12, this.lvl)) - 11);
		} else if (this.specie.costScale === 'mid') {
			this.cost = Math.min(100000, Math.ceil(35 * Math.pow(1.12, this.lvl)) + ((this.lvl-1) * 5));
		} else if (this.specie.costScale === 'high') {
			this.cost = Math.min(100000, Math.ceil(51 * Math.pow(1.12, this.lvl)) + (this.lvl * 3) - 1);		
		} else if (this.specie.costScale === 'veryHigh') {
			this.cost = Math.min(150000, Math.ceil(51 * Math.pow(1.12, this.lvl)) + (this.lvl * 3) - 1);		
		}

		if (this.isReset) this.cost = 0;
	}

	checkCost(num) {
		if (this.isReset) return 0;
		let cost = 0;

		for (let i = 0; i < num; i++) {
			if (this.specie.costScale === 'low') {
				cost += Math.min(100000, Math.ceil(27 * Math.pow(1.12, this.lvl+i)) - 11);
			} else if (this.specie.costScale === 'mid') {
				cost += Math.min(100000, Math.ceil(35 * Math.pow(1.12, this.lvl+i)) + (((this.lvl+i)-1) * 5));
			} else if (this.specie.costScale === 'high') {
				cost += Math.min(100000, Math.ceil(51 * Math.pow(1.12, this.lvl+i)) + ((this.lvl+i) * 3) - 1);		
			} else if (this.specie.costScale === 'veryHigh') {
				cost += Math.min(150000, Math.ceil(51 * Math.pow(1.12, this.lvl+i)) + ((this.lvl+i) * 3) - 1);		
			}
		}
		
		return cost;
	}

	updateStats() {
		let level = this.lvl;
		if (typeof this.main?.area?.inChallenge.lvlCap === 'number') level = this.main.area.inChallenge.lvlCap;

		this.speed = Math.floor(this.specie.speed.base + (this.specie.speed.scale * level));
		this.power = Math.floor(this.specie.power.base + (this.specie.power.scale * level));
		this.range = Math.floor(this.specie.range.base + (this.specie.range.scale * level));
		this.critical = this.specie.critical.base + (this.specie.critical.scale * level);
	}

	// updateStats() {
	// 	let level = this.lvl;
	// 	if (typeof this.main?.area?.inChallenge.lvlCap === 'number') level = this.main.area.inChallenge.lvlCap;

	// 	this.speed = Math.floor(this.specie.speed.base + (this.specie.speed.scale * level));
	// 	this.power = Math.floor(this.specie.power.base + (this.specie.power.scale * level));
	// 	this.range = Math.floor(this.specie.range.base + (this.specie.range.scale * level));
	// 	this.critical = this.specie.critical.base + (this.specie.critical.scale * level);

	// 	// ---> aplicar overrides de debug si existen (no destruyen el valor base, simplemente lo reemplazan)
	// 	if (this.debugOverrides) {
	// 		if (this.debugOverrides.power !== undefined && !Number.isNaN(this.debugOverrides.power)) {
	// 			this.power = Math.round(this.debugOverrides.power);
	// 		}
	// 		if (this.debugOverrides.speed !== undefined && !Number.isNaN(this.debugOverrides.speed)) {
	// 			this.speed = Math.round(this.debugOverrides.speed);
	// 		}
	// 		if (this.debugOverrides.critical !== undefined && !Number.isNaN(this.debugOverrides.critical)) {
	// 			this.critical = Math.round(this.debugOverrides.critical * 10) / 10;
	// 		}
	// 		if (this.debugOverrides.range !== undefined && !Number.isNaN(this.debugOverrides.range)) {
	// 			this.range = this.debugOverrides.range;
	// 		}
	// 	}
	// }

	setStatsLevel(level = 50) { // BORRAR y cambiar por lo de arriba 
		this.speed = Math.floor(this.specie.speed.base + (this.specie.speed.scale * level));
		this.power = Math.floor(this.specie.power.base + (this.specie.power.scale * level));
		this.range = Math.floor(this.specie.range.base + (this.specie.range.scale * level));
		this.critical = this.specie.critical.base + (this.specie.critical.scale * level);
	}

	updateSpecie(specieName) {
		if (specieName === undefined) return;
		const newSpecie = pokemonData[specieName];
		this.specie = newSpecie;

		this.ricochet = newSpecie?.ricochet ?? 0;
		this.orbital = newSpecie?.orbital ?? 0;
		this.streamAngle = newSpecie?.streamAngle ?? 0;
		
		this.bombardmentArea = newSpecie?.bombardmentArea ?? 0;
		this.bombardmentSplash = newSpecie?.bombardmentSplash ?? 0;

		this.sprite = JSON.parse(JSON.stringify(newSpecie.sprite));
    
		this.name = newSpecie.name;
		this.ability = newSpecie.ability;
		this.tiles = newSpecie.tiles;
		this.projectile = newSpecie.projectile;
		this.rangeType = newSpecie.rangeType;
		this.attackType = newSpecie.attackType;
		if (this.attackType === 'area') {
		    this.changeTargetMode('area');
		} else if (this.attackType === 'single' && this.targetMode === 'area') {
		    this.changeTargetMode('first');
		}

		this.form = (this.specie.form) ? this.specie.key : false;

		this.updateStats(); 
		this.setCost();

		if (this.item && !this.item?.megaStone && this.main?.itemController && !this.main.itemController.canEquip(this.item, this)) this.retireItem();
		if (this.isShiny) this.setShiny();
		if (this.hasCustomSkin) this.setCustomSkin();
		if (this.main.boxScene.isOpen) this.main.boxScene.update();
		if (this.main.area.map.id === 35) this.main.area.updateChessPieces();
		if (this.isDeployed) {
   		 	const tower = this.main.area.towers.find(t => t.pokemon === this);

		    if (tower) {

		        tower.updateStatsFromPokemon();

		        tower.attackCooldown = tower.speed;

		        if (tower.pulse) {
		            tower.pulse.active = false;
		        }

		        tower.orbital = this.orbital;

		        if (this.attackType === 'orbital') {
		            tower.spawnOrbitales();
		        } else {
		            tower.projectiles = [];
		        }

		        if (typeof this.main.area.recalculateAuras === 'function') {
		            this.main.area.recalculateAuras();
		        }
		    }
		}
	}

	transformADN(targetModeOld = 'first') {
		if (this.adn?.base) this.adn = pokemonData[this.adn.base];

		if (['aura', 'invisible', 'area', 'curseable', 'bombardment'].includes(targetModeOld)) targetModeOld = 'first';
		this.sprite = JSON.parse(JSON.stringify(this.adn.sprite));
		if (this.adn.id == 70 && this.isShiny) this.setShiny();
		if (this.hasCustomSkin) this.setCustomSkin();

		this.ability = this.adn.ability;
		this.tiles = this.adn.tiles;
		this.projectile = this.adn.projectile;
		this.rangeType = this.adn.rangeType;
		this.attackType = this.adn.attackType;

		let level = this.lvl;
		if (typeof this.main?.area?.inChallenge.lvlCap === 'number') level = this.main.area.inChallenge.lvlCap;

		this.speed = Math.floor(this.adn.speed.base + (this.adn.speed.scale * level));
		this.power = Math.floor(this.adn.power.base + (this.adn.power.scale * level));
		this.range = Math.floor(this.adn.range.base + (this.adn.range.scale * level));

		//HABILIDADES
		this.ricochet = this.adn.ricochet ?? 0;
		this.orbital = this.adn.orbital ?? 0;
		this.streamAngle = this.adn.streamAngle ?? 0;
		this.bombardmentArea = this.adn.bombardmentArea ?? 0;
		this.bombardmentSplash = this.adn.bombardmentSplash ?? 0;

		this.innerRange = this.adn.range.inner;
		this.critical = this.adn.critical.base + (this.adn.critical.scale * level);

		this.damageDealt = 0;
		this.trueDamageDealt = 0;

		if (this.attackType == 'area') this.targetMode = 'area';
		if (this.attackType == 'bombardment') this.targetMode = 'bombardment';
		// else if (
		// 	this.ability.id == 'quadraShot' || this.ability.id == 'tripleShot' || this.ability.id == 'doubleShot' || 
		// 	this.ability.id == 'curseDoubleShot' || this.ability.id == 'cradily' || this.ability.id == 'octaShot'
		// ) this.targetMode = 'available';
		else if (this.attackType == 'aura') this.targetMode = 'aura';
		else if (['illuminate', 'illuminateBuff', 'frisk', 'vigilantFrisk', 'moongeistBeam', 'grimNeigh', 'scrappy'].includes(this.ability.id)) this.targetMode = 'invisible';
		else if (this.ability.id == 'burn') this.targetMode = 'notBurned';
		else if (this.ability.id == 'spinda') this.targetMode = 'random';
		else if (this.ability.id == 'curse') this.targetMode = 'curseable';
		else this.targetMode = targetModeOld;
	}

	equipItem(item) {
	    if (item?.equipedBy != undefined && this.main.game.stopped) {
	        playSound('pop0', 'ui');
	        return;
	    }

		this.ensureMegaStone();

	    // comprobar si el objeto puede equiparse en la forma base ntes de retirar la megapiedra.
	    if (this.isMega && this.item?.megaStone && !item?.megaStone) {
	        const baseSpecie = this.baseSpecie ??  pokemonData[this.specie?.base];

	        if (baseSpecie && this.main?.itemController) {
	            // Crear una representación temporal del mon en su forma normal, sin modificar el Pokémon real.
	            const basePokemon = Object.create(this);

	            Object.assign(basePokemon, {
	                specie: baseSpecie,
	                ability: baseSpecie.ability,
	                tiles: baseSpecie.tiles,
	                projectile: baseSpecie.projectile,
	                rangeType: baseSpecie.rangeType,
	                attackType: baseSpecie.attackType,
	                form: baseSpecie.form ? baseSpecie.key : false,
	                isMega: false,
	                item: null
	            });

	            if (!this.main.itemController.canEquip(item, basePokemon)) {
	                playSound('pop0', 'ui');
	                return this.retireItem();
	            }
	        }
	    }

	    this.retireItem();

		if (item?.equipedBy != undefined && this.ability.id != 'magician') {
			const pokes = [...this.main.team.pokemon, ...this.main.box.pokemon];
			const pokeWhitItem = pokes.find(poke => poke.id == item.equipedBy);
			if (
				pokeWhitItem.isDeployed && 
				[
					'silphScope', 'airBalloon', 'heavyDutyBoots', 'dampMulch', 'assaultVest', 'twistedSpoon', 
					'subwoofer', 'mitsuesCocktail', 'blimpKeys', 'pokeSkates'
				].includes(item?.id)
			) {
				playSound('pop0', 'ui')
				return;
			}
			pokeWhitItem.retireItem();
		}
		playSound('equip', 'ui');
		this.item = item;
		
		if (this.ability.id != 'magician') this.item.equipedBy = this.id;

		if (item.id == 'strangeIdol' && this.specie.key === 'corsola' && !this.main.player.secrets.corsolaGalar) {
			this.main.player.secrets.corsolaGalar = true;
			this.main.UI.getSecret('corsolaGalar');
		}

		if (item.id == 'poisonBarb' && this.specie.key === 'weavile' && !this.main.player.secrets.sneaselHisui) {
			this.main.player.secrets.sneaselHisui = true;
			this.main.UI.getSecret('sneaselHisui');
		}

		if (item.id == 'icyRock' && this.specie.key === 'sandslash' && !this.main.player.secrets.sandshrewAlola) {
			this.main.player.secrets.sandshrewAlola = true;
			this.main.UI.getSecret('sandshrewAlola');
		}

		if (item.id == 'ancientSword' && this.specie.key === 'samurott' && !this.main.player.secrets.samurottHisui) {
			this.main.player.secrets.samurottHisui = true;
			this.main.UI.getSecret('samurottHisui');
		}

		if (item.id == 'inverter' && this.lvl >= 30 && this.id == 95 && this.specie.evolution) {
			this.updateSpecie(this.specie.evolution.pokemon);
		}

		if (
			this.isDeployed && 
			this.item.id == 'silphScope' && 
			(this.ability.id !== 'scrappy' && this.ability.id !== 'frisk' && this.ability.id !== 'moongeistBeam' && this.ability.id !== 'grimNeigh' && this.ability.id !== 'vigilantFrisk' && this.ability.id !== 'illuminate' && this.ability.id !== 'illuminateBuff')
		) {
			const index = this.main.area.towers.findIndex((tower) => tower.pokemon == this);
			this.main.area.towers[index].revealInvisible = true;
		}

		if (
			this.item.id == 'inverter' && 
			this.specie.key == 'malamar'
		) {
			this.innerRange = 150;
			this.range = 300;
			this.rangeType = 'donut';
		}

		if (
			this.isDeployed && 
			['dampRock', 'smoothRock', 'icyRock', 'heatRockWeather', 'charizarditeY', 'roomService'].includes(this.item.id)
		) {
			this.main.area.checkWeather()
		}

		if (
			this.isDeployed && 
			this.specie?.orbital > 0
		) {
			this.main.area.towers.forEach(t => { 
				if (t.pokemon == this) t.spawnOrbitales();
			});
		}

		if (item?.megaStone) this.addMegaStone(item?.megaPos);
		if (this.item?.id == 'silphScope') this.targetMode = 'invisible';
		this.main.UI.update();
		if (this.lvl > 50 && this.item?.id === 'eviolite' && this.main?.area?.inChallenge?.lvlCap !== 50) this.retireItem();
	}

	retireItem() {
		if (this.item != null) {
			let oldItemID = this.item.id;

			if (this.ability.id != 'magician') this.item.equipedBy = undefined;

			if (
				this.isDeployed && 
				this.item.id == 'silphScope' && 
				(this.ability.id !== 'scrappy' && this.ability.id !== 'frisk' && this.ability.id !== 'moongeistBeam' && this.ability.id !== 'grimNeigh' && this.ability.id !== 'vigilantFrisk' && this.ability.id !== 'illuminate' && this.ability.id !== 'illuminateBuff')
			) {
				const index = this.main.area.towers.findIndex((tower) => tower.pokemon == this);
				this.main.area.towers[index].revealInvisible = false;
			}

			if (
				this.item.id == 'inverter' && 
				this.specie.key == 'malamar'
			) {
				this.innerRange = 0;
				this.range = Math.floor(this.specie.range.base + (this.specie.range.scale * this.lvl));
				this.rangeType = 'circle';
			}

			if (
				this.isDeployed && 
				this.item.id == 'boiledEgg' 
			) {
				const index = this.main.area.towers.findIndex((tower) => tower.pokemon == this);
				if (this.main.area.towers[index].feathers > 20) this.main.area.towers[index].feathers = 20;
			}

			if (this.isMega) this.removeMegaStone();
			if (this.item.id === 'silphScope') {
				this.targetMode = 'first';
				if (['frisk', 'vigilantFrisk', 'moongeistBeam', 'grimNeigh'].includes(this.ability.id)) this.targetMode = 'invisible';
			}
			if (this.item.id === 'ringTarget' || this.id == 53) this.targetMode = 'random';
			this.item = null;

			if (['roomService', 'dampRock', 'smoothRock', 'icyRock', 'heatRockWeather'].includes(oldItemID)) {
				this.main.area.checkWeather();
			}

			this.main.UI.update();
		}
	}
 
	addMegaStone(pos) {
		if (this.specie.mega == undefined) return this.retireItem();
		if (this.main.player.megaInTeam) this.findMega();
		this.baseSpecie = this.specie;
		this.isMega = true;
		this.main.player.megaInTeam = true;

		this.updateSpecie(this.specie.mega[pos]);
		
		if (this.isDeployed) {
            const tower = this.main.area.towers.find(t => t.pokemon === this);

            if (tower) {
            	if (tower.pokemon.id == 16) tower.ricochet = 2;
            	if (tower.pokemon.id == 138) tower.abilityField = 'corrosionMega';
            	tower.updateStatsFromPokemon();
                if (typeof this.main.area.recalculateAuras === 'function') {
                    this.main.area.recalculateAuras();
                }
                if (tower.pokemon.id == 245) this.main.area.checkWeather();
            }
            
            if (this.attackType === 'bombardment') tower.rerollBombardZone();
        } 

        this.main.area.checkWeather();
	}

	removeMegaStone() {
		this.isMega = false;
		this.main.player.megaInTeam = false;
		this.updateSpecie(this.specie.base);

		if (this.isDeployed) {
            const tower = this.main.area.towers.find(t => t.pokemon === this);
            if (tower) {
            	if (tower.pokemon.id == 16) tower.ricochet = 0;
            	if (tower.pokemon.id == 138) tower.abilityField = false;
            	if (tower.pokemon.id == 11 && tower.tile.land === 4) {
            		const index = this.main.area.towers.findIndex(tower => tower.pokemon === this);
            		if (index !== -1) {
						this.main.area.towers[index].tile.tower = false;
						this.main.area.towers.splice(index, 1);
						this.isDeployed = false;
						this.tilePosition = -1;
					}
            	}

            	tower.updateStatsFromPokemon();
            	if (tower?.pokemon?.id == 145 || tower?.pokemon?.id == 245 || tower?.pokemon?.id == 0) this.main.area.checkWeather();
                if (typeof this.main.area.recalculateAuras === 'function') {
                    this.main.area.recalculateAuras();
                }

                if (this.attackType === 'bombardment') tower.rerollBombardZone();
            }
        } 
	}

	ensureMegaStone() {
		const baseSpecie = pokemonData[this.specie?.base];
		const isMegaForm = baseSpecie?.mega?.includes(this.specie?.key) ?? false;
		if (!this.isMega && !isMegaForm) return true;

		const hasMatchingMegaStone =
			this.item?.megaStone === true &&
			baseSpecie?.mega?.[this.item.megaPos] === this.specie.key;

		if (hasMatchingMegaStone) {
			this.isMega = true;
			this.baseSpecie = baseSpecie;
			this.main.player.megaInTeam = true;
			return true;
		}

		this.removeMegaStone();
		if (this.item?.megaStone) this.retireItem();

		return false;
	}

	findMega() {
		let pokemon = [...this.main.team.pokemon, ...this.main.box.pokemon];
		pokemon.forEach(poke => {
			poke.ensureMegaStone();
			if (poke.isMega) poke.retireItem();
		})
	}

	toggleShiny() {
		this.hideShiny =! this.hideShiny;
		this.setShiny();
	}

	setShiny() {
		if (this.id == 70 && this.adn?.id != 70) return;
	    const replacePath = (p) => {
	        if (typeof p !== 'string') return p;

	        if (this.hideShiny) {
	            // shiny → normal
	            return p.replace(/\/shiny\//g, '/normal/');
	        } else {
	            // normal → shiny
	            return p.replace(/\/normal\//g, '/shiny/');
	        }
	    };

	    for (const key in this.sprite) {
	        if (!Object.prototype.hasOwnProperty.call(this.sprite, key)) continue;
	        if (typeof this.sprite[key] === 'string') {
	            this.sprite[key] = replacePath(this.sprite[key]);
	        }
	    }

	    if (this.isDeployed) {
	        const tower = this.main.area.towers.find(t => t.pokemon === this);
	        if (tower) {
	            tower.updateStatsFromPokemon();

	            if (this.id == 61) {
	                if (tower.tile.land == 2 || (tower.tile.land == 1 && tower.pokemon?.item?.id == 'fertiliser'))
	                    tower.updateTowerSprite(this.sprite.imageGrass, this.sprite.framesGrass, this.specie.projectileGrass);
	                else if (tower.tile.land == 3 || (tower.tile.land == 1 && tower.pokemon?.item?.id == 'squirtBottle'))
	                    tower.updateTowerSprite(this.sprite.imageWater, this.sprite.framesWater, this.specie.projectileWater);
	                else if (tower.tile.land == 4 || (tower.tile.land == 1 && tower.pokemon?.item?.id == 'hikingKit'))
	                    tower.updateTowerSprite(this.sprite.imageMountain, this.sprite.framesMountain, this.specie.projectileMountain);
	            }

	            if (typeof this.main.area.recalculateAuras === 'function') {
	                this.main.area.recalculateAuras();
	            }
	        }
	    }
	}

	setCustomSkin() {
		//if (this.isMega) return;

		const replacePath = (p) => {
			if (typeof p !== 'string') return p;
			return p.replace(/\/(?:skin\/)*(normal|shiny)\//, '/skin/$1/');
		};

		for (const key in this.sprite) {
			if (!Object.prototype.hasOwnProperty.call(this.sprite, key)) continue;
			if (typeof this.sprite[key] === 'string') this.sprite[key] = replacePath(this.sprite[key]);
		}

		// if (this.id === 249) this.projectile = projectileData['mantyke'];

		if (this.isDeployed) {
			const tower = this.main.area.towers.find(t => t.pokemon === this);

			if (tower) {
				tower.updateStatsFromPokemon();

				if (this.id == 61) {
					if (tower.tile.land == 2 || (tower.tile.land == 1 && tower.pokemon?.item?.id == 'fertiliser')) {
						tower.updateTowerSprite(this.sprite.imageGrass, this.sprite.framesGrass, this.specie.projectileGrass);
					} else if (tower.tile.land == 3 || (tower.tile.land == 1 && tower.pokemon?.item?.id == 'squirtBottle')) {
						tower.updateTowerSprite(this.sprite.imageWater, this.sprite.framesWater, this.specie.projectileWater);
					} else if (tower.tile.land == 4 || (tower.tile.land == 1 && tower.pokemon?.item?.id == 'hikingKit')) {
						tower.updateTowerSprite(this.sprite.imageMountain, this.sprite.framesMountain, this.specie.projectileMountain);
					}
				}

				if (typeof this.main.area.recalculateAuras === 'function') {
					this.main.area.recalculateAuras();
				}
			}
		}
	}

	removeCustomSkin() {
		const replacePath = (p) => {
			if (typeof p !== 'string') return p;
			return p.replace(/\/(?:skin\/)+(normal|shiny)\//, '/$1/');
		};

		for (const key in this.sprite) {
			if (!Object.prototype.hasOwnProperty.call(this.sprite, key)) continue;
			if (typeof this.sprite[key] === 'string') this.sprite[key] = replacePath(this.sprite[key]);
		}

		if (this.id === 249) this.projectile = this.specie.projectile;

		if (this.isDeployed) {
			const tower = this.main.area.towers.find(t => t.pokemon === this);

			if (tower) {
				tower.updateStatsFromPokemon();

				if (this.id == 61) {
					if (tower.tile.land == 2 || (tower.tile.land == 1 && tower.pokemon?.item?.id == 'fertiliser')) {
						tower.updateTowerSprite(this.sprite.imageGrass, this.sprite.framesGrass, this.specie.projectileGrass);
					} else if (tower.tile.land == 3 || (tower.tile.land == 1 && tower.pokemon?.item?.id == 'squirtBottle')) {
						tower.updateTowerSprite(this.sprite.imageWater, this.sprite.framesWater, this.specie.projectileWater);
					} else if (tower.tile.land == 4 || (tower.tile.land == 1 && tower.pokemon?.item?.id == 'hikingKit')) {
						tower.updateTowerSprite(this.sprite.imageMountain, this.sprite.framesMountain, this.specie.projectileMountain);
					}
				}

				if (typeof this.main.area.recalculateAuras === 'function') {
					this.main.area.recalculateAuras();
				}
			}
		}
	}

	toggleCustomSkin() {
	    if (this.hasCustomSkin) {
	        this.removeCustomSkin();
	        this.hasCustomSkin = false;
	    } else {
	        this.hasCustomSkin = true;
	        this.setCustomSkin();
	    }
	}

	updateUnownSprite(alias = this.alias) {
	    if (this.specie?.key !== 'unown') return;

	    const aliasLetter = String(alias ?? '').trim().toUpperCase();
	    const defaultLetter = String(this.main.player?.unownLetter || 'A').trim().toUpperCase();
	    if (/^[A-Z!?]$/.test(aliasLetter)) this.unownForm = aliasLetter;
	    if (!/^[A-Z!?]$/.test(this.unownForm ?? '')) {
	        this.unownForm = /^[A-Z!?]$/.test(defaultLetter) ? defaultLetter : 'A';
	    }
	    const letter = this.unownForm;

	    if (!/^[A-Z!?]$/.test(letter)) return;
	    this.sprite = JSON.parse(JSON.stringify(this.baseSprite));

	    const form = letter === '!'
	        ? 'exclamation'
	        : letter === '?'
	            ? 'question'
	            : letter.toLowerCase();

	    const updateSprite = sprite => {
	        if (!sprite) return;

	        if (typeof sprite.base === 'string') {
	            sprite.base = sprite.base.replace(
	                /unown-[a-z!?]+(?=\.png$)/i,
	                `unown-${form}`
	            );
	        }

	        if (typeof sprite.image === 'string') {
	            sprite.image = sprite.image.replace(
	                /unown-[a-z!?]+(?=-idle\.png$)/i,
	                `unown-${form}`
	            );
	        }
	    };

	    updateSprite(this.sprite);

	    if (this.isShiny && !this.hideShiny) {
	        for (const key in this.sprite) {
	            if (Object.prototype.hasOwnProperty.call(this.sprite, key) && typeof this.sprite[key] === 'string') {
	                this.sprite[key] = this.sprite[key].replace(/\/normal\//g, '/shiny/');
	            }
	        }
	    }

	    if (this.isDeployed) {
	        const tower = this.main.area.towers.find(t => t.pokemon === this);
	        if (tower) tower.updateTowerSprite();
	    }
	}

	resetPokemon() {
		const oldTarget = this.targetMode;
		
		this.isReset = true;

		this.lvl = 1;
		let newSpecie = undefined
		Object.entries(pokemonData).forEach((entries) => {
			if (entries[1].id === this.id && newSpecie === undefined) newSpecie = entries[1].key;
		})
		this.updateSpecie(newSpecie);
		if (this.id == 70) this.transformADN(oldTarget);
		if (!this.main.itemController.canEquip(this.item, this)) this.retireItem();
	}

}

function arraysEqual(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) return false;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

export function findSpecieInCatalog(oldSpecie) {
    if (!oldSpecie) return null;

    for (const key in pokemonData) {
        const s = pokemonData[key];
        if (oldSpecie.sprite && s.sprite) {
            if (oldSpecie.sprite.base && s.sprite.base && oldSpecie.sprite.base === s.sprite.base) return s;
            if (oldSpecie.sprite.image && s.sprite.image && oldSpecie.sprite.image === s.sprite.image) return s;
        }
    }

    const oldName0 = (oldSpecie.name && oldSpecie.name[0]) ? String(oldSpecie.name[0]).toLowerCase() : null;
    if (oldName0) {
        for (const key in pokemonData) {
            const s = pokemonData[key];
            const sName0 = (s.name && s.name[0]) ? String(s.name[0]).toLowerCase() : null;
            if (sName0 && sName0 === oldName0) return s;
        }
    }

    let best = null;
    let bestScore = 0;
    for (const key in pokemonData) {
        const s = pokemonData[key];
        let score = 0;

        if (oldSpecie.id !== undefined && s.id !== undefined && oldSpecie.id === s.id) score += 1; 
        if (oldSpecie.rangeType && s.rangeType && oldSpecie.rangeType === s.rangeType) score += 2;
        if (oldSpecie.attackType && s.attackType && oldSpecie.attackType === s.attackType) score += 2;
        if (oldSpecie.projectileSound && s.projectileSound && oldSpecie.projectileSound === s.projectileSound) score += 1;
        if (oldSpecie.costScale && s.costScale && oldSpecie.costScale === s.costScale) score += 1;

        if (Array.isArray(oldSpecie.tiles) && Array.isArray(s.tiles) && arraysEqual(oldSpecie.tiles, s.tiles)) score += 2;

        if (oldSpecie.speed?.base !== undefined && s.speed?.base !== undefined) {
            if (oldSpecie.speed.base === s.speed.base) score += 1;
            else if (Math.abs(oldSpecie.speed.base - s.speed.base) < 50) score += 0.5; 
        }
        if (oldSpecie.power?.base !== undefined && s.power?.base !== undefined) {
            if (oldSpecie.power.base === s.power.base) score += 1;
            else if (Math.abs(oldSpecie.power.base - s.power.base) < 5) score += 0.5;
        }

        if (oldSpecie.ability?.id && s.ability?.id && oldSpecie.ability.id === s.ability.id) score += 2;

        if (score > bestScore) {
            bestScore = score;
            best = s;
        }
    }

    if (bestScore >= 4) return best;
    return null;
}