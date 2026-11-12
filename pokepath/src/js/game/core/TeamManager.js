import { playSound } from '../../file/audio.js';
import { Tower } from '../component/Tower.js';
import { saveData } from '../../file/data.js';
import { routeData } from '../data/routeData.js';

export class TeamManager {
	constructor(main, data) {
		this.main = main;

		this.teamA = Array.isArray(data['teamA']) ? data['teamA'] : [];
		this.teamB = Array.isArray(data['teamB']) ? data['teamB'] : [];
		this.teamC = Array.isArray(data['teamC']) ? data['teamC'] : [];
		this.teamD = Array.isArray(data['teamD']) ? data['teamD'] : [];
		this.teamE = Array.isArray(data['teamE']) ? data['teamE'] : [];

		this.teams = [this.teamA, this.teamB, this.teamC, this.teamD, this.teamE];
		this.teams = ['A','B','C','D','E'].map(letter => {
		    let arr = data[`team${letter}`] || [];
		    while (arr.length < Object.keys(routeData).length) arr.push([]);
		    return arr;
		});

		this.teamChallenge = this.normalizeChallengeTeams(data['teamChallenge']);
		this.teamDraft = this.normalizeChallengeTeams(data['teamDraft']);
		[this.teamA, this.teamB, this.teamC, this.teamD, this.teamE] = this.teams;
	}

	createEmptyRouteTeams() {
		const routeCount = Object.keys(routeData).length;
		return Array.from({ length: 5 }, () => Array.from({ length: routeCount }, () => []));
	}

	normalizeChallengeTeams(savedTeams) {
		const routeCount = Object.keys(routeData).length;
		const routeNumber = this.main?.area?.routeNumber ?? 0;
		const normalized = this.createEmptyRouteTeams();
		if (!Array.isArray(savedTeams)) return normalized;

		for (let slot = 0; slot < 5; slot++) {
			const slotData = savedTeams[slot];
			if (!Array.isArray(slotData)) continue;

			const isRouteAware = slotData.length === 0 || slotData.every(team => Array.isArray(team));
			if (isRouteAware) {
				for (let route = 0; route < routeCount; route++) {
					if (Array.isArray(slotData[route])) normalized[slot][route] = slotData[route];
				}
			} else {
				normalized[slot][routeNumber] = slotData;
			}
		}

		return normalized;
	}

	getChallengeStore(challengeRules = this.main.area.inChallenge) {
		return challengeRules?.draft ? this.teamDraft : this.teamChallenge;
	}

	getChallengeTeam(slot, challengeRules = this.main.area.inChallenge, routeNumber = this.main.area.routeNumber) {
		const store = this.getChallengeStore(challengeRules);
		if (!Array.isArray(store?.[slot])) store[slot] = Array.from({ length: Object.keys(routeData).length }, () => []);
		if (!Array.isArray(store[slot][routeNumber])) store[slot][routeNumber] = [];
		return store[slot][routeNumber];
	}

	clearDraftTeams() {
		this.teamDraft = this.createEmptyRouteTeams();
	}

	getSaveData() {
		return {
			teamA: this.teamA,
			teamB: this.teamB,
			teamC: this.teamC,
			teamD: this.teamD,
			teamE: this.teamE,
			teamChallenge: this.teamChallenge,
			teamDraft: this.teamDraft,
		}
	}

	captureTeamDamage() {
		const damageByPokemonId = new Map();
		this.main.team.pokemon.forEach(pokemon => {
			damageByPokemonId.set(pokemon.id, {
				damageDealt: pokemon.damageDealt || 0,
				trueDamageDealt: pokemon.trueDamageDealt || 0
			});
		});
		return damageByPokemonId;
	}

	restoreTeamDamage(pokemon, damageByPokemonId) {
		const previousDamage = damageByPokemonId.get(pokemon.id);
		if (!previousDamage) return;

		pokemon.damageDealt = previousDamage.damageDealt;
		pokemon.trueDamageDealt = previousDamage.trueDamageDealt;
	}

	importTeam(slot, challenge = false) {
		if (this.main.area.heavyMetal) {
			playSound('cancel', 'ui')
			return;
		}
		const challengeRules = challenge ? this.main.area.inChallenge : false;

		let savedList = (!challenge)
	        ? (this.teams[slot] && this.teams[slot][this.main.area.routeNumber]) ? this.teams[slot][this.main.area.routeNumber] : []
	        : this.getChallengeTeam(slot, challengeRules);

	    if (challengeRules && typeof challengeRules.slotLimit === 'number') {
	        savedList = savedList.slice(0, challengeRules.slotLimit);
	    }

	    // if (!savedList || savedList.length === 0) {
	    //     this.main.area.checkWeather();
	    //     this.main.UI.update();
	    //     playSound('option', 'ui');
	    //     if (this.main.game.deployingUnit != undefined) this.main.game.cancelDeployUnit();
	    //     if (this.main.UI.fastScene.isOpen) this.main.UI.fastScene.close();
	    //     return;
	    // }

	    // const damageCarryover = this.captureTeamDamage();

	    if (
			!Array.isArray(savedList) ||
			savedList.length === 0 ||
			!savedList.some(entry =>
				entry &&
				typeof entry === 'object' &&
				!Array.isArray(entry) &&
				entry.id != null
			)
		) {
			this.main.area.checkWeather();
			this.main.UI.update();
			playSound('option', 'ui');

			if (this.main.game.deployingUnit != undefined) {
				this.main.game.cancelDeployUnit();
			}

			if (this.main.UI.fastScene.isOpen) {
				this.main.UI.fastScene.close();
			}

			return;
		}

		const validSavedList = savedList.filter(entry =>
			entry &&
			typeof entry === 'object' &&
			!Array.isArray(entry) &&
			entry.id != null
		);

		if (validSavedList.length === 0) {
			return;
		}

		savedList = validSavedList;

		const damageCarryover = this.captureTeamDamage();

	    this.main.area.placementTiles.forEach(tile => {
	        if (tile.passenger) {
	            const p = tile.passenger;
	            p.isDeployed = false;
	            p.isPassenger = false;
	            p.carriedBy = null;
	            p.tilePosition = -1;
	            tile.passenger = false;
	        }
	        if (tile.tower) {
	            const b = tile.tower;
	            b.isDeployed = false;
	            b.isPassenger = false;
	            b.carriedBy = null;
	            b.tilePosition = -1;
	            tile.tower = false;
	        }
	    });

	    this.main.area.towers.length = 0;

	    while (this.main.team.pokemon.length > 0) {
	        const poke = this.main.team.pokemon[0];
	        poke.isDeployed = false;
	        poke.isPassenger = false;
	        poke.carriedBy = null;
	        poke.tilePosition = -1;
	        this.main.box.addPokemon(poke);
	        this.main.team.removePokemon(poke);
	    }

	    this.main.UI.tilesCountNum = [0, 0, 0, 0];

	    for (const entry of savedList) {
	        const boxIndex = this.main.box.pokemon.findIndex(p => p.id === entry.id);
	        if (boxIndex === -1) continue; // no está en la caja: skip
	        this.main.team.addPokemon(this.main.box.pokemon[boxIndex]);
	        const newPoke = this.main.team.pokemon[this.main.team.pokemon.length - 1];
	        this.main.box.removePokemon(this.main.box.pokemon[boxIndex]);
	        newPoke.isPassenger = entry.isPassenger || false;

	        // restaurar / retirar items
	        newPoke.retireItem();
	        // if (!challenge) {
	        //     if (entry.item != null) {
	        //         const itemIdx = this.main.player.items.findIndex(it => it.id === entry.item.id);
	        //         if (itemIdx !== -1) newPoke.equipItem(this.main.player.items[itemIdx]);
	        //     }
	        // } else {
	        //     if (!challengeRules?.noItems && entry.item != null){ 
	        //     	if (entry.item != null) {
		    //             const itemIdx = this.main.player.items.findIndex(it => it.id === entry.item.id);
		    //             if (itemIdx !== -1) newPoke.equipItem(this.main.player.items[itemIdx]);
	        //     	}
	        //     }
	        // }
	        const itemId = this.getEntryItemId(entry);
			const itemsAllowed = !(challenge && challengeRules?.noItems);
			if (itemId != null && itemsAllowed) {
				const item = this.main.player.items.find(it => it.id === itemId);
				if (item) newPoke.equipItem(item);
			}

	        if (entry.form) newPoke.updateSpecie(entry.form);
	        newPoke.ensureMegaStone();
	        if (
	            newPoke.item &&
	            !this.main.itemController.canEquip(newPoke.item, newPoke)
	        ) {
	            newPoke.retireItem();
	        }
	        this.restoreTeamDamage(newPoke, damageCarryover);
	    }

	    for (let i = 0; i < savedList.length; i++) {
	        const entry = savedList[i];
	        if (entry.tilePosition == -1) continue;
	        if (entry.isPassenger) continue;

	        const tile = this.main.area.placementTiles[entry.tilePosition];
	        if (!tile) continue;

	        const teamIndex = this.main.team.pokemon.findIndex(p => p.id === entry.id);
	        if (teamIndex === -1) continue;
	        const poke = this.main.team.pokemon[teamIndex];

	        if (tile.tower) continue;

	        let deployTower = true;

	        if (this.main?.area?.inChallenge?.noItems === true) {
	        	if (!poke.tiles.includes(tile.land)) deployTower = false;
	        }
	        
	        if (deployTower) {
	        	const towerObj = new Tower(this.main, tile.position.x, tile.position.y, this.main.game.ctx, poke, tile);
		        this.main.area.towers.push(towerObj);
		        tile.tower = poke;
		        poke.isDeployed = true;
		        poke.isPassenger = false;
		        poke.carriedBy = null;
		        poke.tilePosition = entry.tilePosition;
		        if (poke.item?.id === 'pokeSkates' && entry.skatesOffset) towerObj.restoreSkatesOffset(entry.skatesOffset);

		        if (poke.attackType === 'bombardment' && entry.bombardZone) {
		            towerObj.bombardZone = { x: entry.bombardZone.x, y: entry.bombardZone.y, radius: entry.bombardZone.radius };
		            towerObj.bombardShells = [];
		            towerObj.bombardCooldown = 0;
		        }

		        this.main.UI.tilesCountNum[tile.land - 1] = (this.main.UI.tilesCountNum[tile.land - 1] || 0) + 1;

		        if (poke.ability.id === 'heavyMetal' && !this.main.area.heavyMetal) {
					if (this.main.area.waveActive) {
						playSound('bell', 'effect')
				
						const heavyMetalStunDuration = (poke?.item?.id === 'metalCoat') ? 4 : 2;
						this.main.area.heavyMetal = true;
						this.main.area.enemies.forEach(enemy => {
				       		if (!enemy.dying) enemy.applyStatusEffect({ type: 'stun', duration: heavyMetalStunDuration });
				    	});
					}
				}
	        }
	    }

	    for (let i = 0; i < savedList.length; i++) {
	        const entry = savedList[i];
	        if (!entry.isPassenger) continue;
	        if (entry.tilePosition == -1) continue;

	        const tile = this.main.area.placementTiles[entry.tilePosition];
	        if (!tile) continue;

	        const teamIndex = this.main.team.pokemon.findIndex(p => p.id === entry.id);
	        if (teamIndex === -1) continue;
	        const poke = this.main.team.pokemon[teamIndex];

	        const base = tile.tower;
	        if (!base || (base.ability?.id !== 'grassPlatform' && base.ability?.id !== 'mount' && base.ability?.id !== 'grimNeigh' && base.ability?.id !== 'icePlatform' && base.ability?.id !== 'rest')) {
	            poke.isDeployed = false;
	            poke.isPassenger = false;
	            poke.carriedBy = null;
	            poke.tilePosition = -1;
	            continue;
	        }

	        if (tile.passenger) continue;

	        const passengerTower = new Tower(this.main, tile.position.x, tile.position.y, this.main.game.ctx, poke, tile);
	        passengerTower.isPassenger = true;
	        passengerTower.carriedBy = base.ability.id;
	        passengerTower.castformTransform();
	        this.main.area.towers.push(passengerTower);
	        tile.passenger = poke;

	        if (poke.attackType === 'bombardment' && entry.bombardZone) {
	            passengerTower.bombardZone = { x: entry.bombardZone.x, y: entry.bombardZone.y, radius: entry.bombardZone.radius };
	            passengerTower.bombardShells = [];
	            passengerTower.bombardCooldown = 0;
	        }

	        if (passengerTower.ability.id === 'heavyMetal' && !this.main.area.heavyMetal) {
				if (this.main.area.waveActive) {
					playSound('bell', 'effect')
					const heavyMetalStunDuration = (passengerTower?.pokemon?.item?.id === 'metalCoat') ? 4 : 2;
				
					this.main.area.heavyMetal = true;
					this.main.area.enemies.forEach(enemy => {
				       	if (!enemy.dying) enemy.applyStatusEffect({ type: 'stun', duration: heavyMetalStunDuration });
				    });
				}
			}

	        this.main.area.towers.forEach(tower => {
	    		if (tower.pokemon.id == tile.tower.id) tower.isMounted = true;
	    	});

	        poke.isDeployed = true;
	        poke.isPassenger = true;
	        poke.carriedBy = base;
	        poke.tilePosition = entry.tilePosition;
	        if (poke.item?.id === 'pokeSkates' && entry.skatesOffset) passengerTower.restoreSkatesOffset(entry.skatesOffset);

	        if (poke.carriedBy.ability.id === 'icePlatform') this.main.UI.tilesCountNum[2] = (this.main.UI.tilesCountNum[2] || 0) + 1;
	        else if (poke.carriedBy.ability.id === 'grassPlatform') this.main.UI.tilesCountNum[1] = (this.main.UI.tilesCountNum[1] || 0) + 1;
	        else this.main.UI.tilesCountNum[tile.land - 1] = (this.main.UI.tilesCountNum[tile.land - 1] || 0) + 1;
	    }

	    this.main.area.recalculateAuras();
	    this.main.area.checkWeather();
	    this.main.UI.update();
	    playSound('option', 'ui');

	    if (this.main.game.deployingUnit != undefined) this.main.game.cancelDeployUnit();
	    if (this.main.UI.fastScene.isOpen) this.main.UI.fastScene.close();
	    this.main.UI.update();
	}

	// saveTeam(slot, challenge = false) {	
	// 	playSound('option', 'ui');

	// 	if (!challenge) {
	// 		this.teams[slot][this.main.area.routeNumber] = [];

	// 		this.main.team.pokemon.forEach(pokemon => {
	// 			const tower = this.main.area.towers.find(t => t.pokemon === pokemon);
	// 			const bombardZone = (pokemon.attackType === 'bombardment' && tower?.bombardZone)
	// 				? { x: tower.bombardZone.x, y: tower.bombardZone.y, radius: tower.bombardZone.radius }
	// 				: undefined;

	// 			this.teams[slot][this.main.area.routeNumber].push({
	// 				id: pokemon.id,
	// 				specieKey: pokemon.specie?.key,
	// 				savedName: pokemon.name,
	// 				tilePosition: pokemon.tilePosition,
	// 				item: pokemon.item,
    // 				isPassenger: pokemon.isPassenger || false,
    // 				form: pokemon.form || undefined,
    // 				bombardZone
	// 			})
	// 		})
	// 	} else {
	// 		const targetTeam = this.getChallengeTeam(slot);
	// 		targetTeam.length = 0;

	// 		this.main.team.pokemon.forEach(pokemon => {
	// 			const tower = this.main.area.towers.find(t => t.pokemon === pokemon);
	// 			const bombardZone = (pokemon.attackType === 'bombardment' && tower?.bombardZone)
	// 				? { x: tower.bombardZone.x, y: tower.bombardZone.y, radius: tower.bombardZone.radius }
	// 				: undefined;

	// 			targetTeam.push({
	// 				id: pokemon.id,
	// 				specieKey: pokemon.specie?.key,
	// 				savedName: pokemon.name,
	// 				tilePosition: pokemon.tilePosition,
	// 				item: pokemon.item,
    // 				isPassenger: pokemon.isPassenger || false,
    // 				form: pokemon.form || undefined,
    // 				bombardZone
	// 			})
	// 		})
	// 	}

	// 	this.main.UI.update();
	// 	if (challenge || !this.main.area.waveActive || !this.main.area.isCustom) saveData(this.main.player, this.main.team, this.main.box, this.main.area, this.main.shop, this.main.teamManager);
	// }

	saveTeam(slot, challenge = false) {
		playSound('option', 'ui');

		const snapshot = this.serializeTeam();
		const routeNumber = this.main.area.routeNumber;

		if (!challenge) {
			this.teams[slot][routeNumber] = snapshot;
		} else {
			this.getChallengeTeam(slot); // asegura que existe la estructura
			this.getChallengeStore()[slot][routeNumber] = snapshot;
		}

		this.main.UI.update();
		if (challenge || !this.main.area.waveActive || !this.main.area.isCustom) {
			try {
				saveData(this.main.player, this.main.team, this.main.box, this.main.area, this.main.shop, this.main.teamManager);
			} catch (err) {
				console.error('saveData falló al guardar el equipo:', err);
			}
		}
	}

	getEntryItemId(entry) {
		return typeof entry?.item === 'string' ? entry.item : (entry?.item?.id ?? null);
	}

	serializeTeam() {
		return this.main.team.pokemon.map(pokemon => {
			const tower = this.main.area.towers.find(t => t.pokemon === pokemon);
			const bombardZone = (pokemon.attackType === 'bombardment' && tower?.bombardZone)
				? { x: tower.bombardZone.x, y: tower.bombardZone.y, radius: tower.bombardZone.radius }
				: undefined;
			const skatesOffset = pokemon.item?.id === 'pokeSkates' ? tower?.getSkatesOffset() : undefined;

			return {
				id: pokemon.id,
				specieKey: pokemon.specie?.key,
				savedName: pokemon.name,
				tilePosition: pokemon.tilePosition,
				item: pokemon.item?.id ?? null,
				isPassenger: pokemon.isPassenger || false,
				form: pokemon.form || undefined,
				bombardZone,
				...(skatesOffset ? { skatesOffset } : {})
			};
		});
	}
}
