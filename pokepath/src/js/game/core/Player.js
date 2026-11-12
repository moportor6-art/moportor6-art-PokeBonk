import { itemData } from '../data/itemData.js';
import { routeData } from '../data/routeData.js';
import { derivePlayerCode, generatePlayerSecret } from '../../utils/Redeem.js';
import { achievementReworkData } from '../data/achievementReworkData.js';

export class Player {
	constructor(main, playerData) {
		this.main = main;
		this.lang = main.lang;

		this.update = playerData.update ?? undefined;
		this.name = playerData.name;
		this.portrait = playerData.portrait;
		this.gold = playerData.gold;
		this.health = playerData.health;
		this.records = playerData.records;
		this.stars = playerData.stars;
		this.ribbons = playerData.ribbons ?? 0;
		this.teamSlots = playerData.teamSlots;
		this.extraGold = playerData.extraGold;

		this.unownState = playerData.unownState ?? 0;
		this.unownLetter = playerData.unownLetter ?? '';
		// this.achievements = playerData.achievements;
		this.achievementProgress = playerData.achievementProgress;
		this.achievementsRework = playerData.achievementsRework ?? achievementReworkData;
		this.achievementsReworkProgress = playerData.achievementsReworkProgress ?? 0;

		this.stats = playerData.stats;
		// this.stats.defeatedSpecies = new Set(
		//     Array.isArray(playerData.stats.defeatedSpecies)
		//         ? playerData.stats.defeatedSpecies
		//         : []
		// );

		if (this.stats.maxGoldPerWave == undefined) this.stats.maxGoldPerWave = [0, null];
		if (this.stats.maxGoldPerTime == undefined) this.stats.maxGoldPerTime = [0, null];
		this.enemyDefeatedAmount = playerData.enemyDefeatedAmount ?? 0;
		this.enemyStats = playerData.enemyStats ?? {};

		this.challenges = playerData.challenges ?? {
			lvlCap: {},
			slotLimit: {},
			toughEnemies: {},
			draft: {},
			noItems: {},
			mirror: {},
		}

		this.sortedBox = playerData.sortedBox ?? 0;
		this.sortedInventory = playerData.sortedInventory ?? 0;
		this.fossilInTeam = playerData.fossilInTeam ?? 0;
		this.pastInTeam = playerData.pastInTeam ?? 0;
		this.futureInTeam = playerData.futureInTeam ?? 0;
		this.megaInTeam = playerData.megaInTeam ?? false;
		this.itemAmount = 0;
		this.shinyAmount = 0;
		this.hasBike = false;
		this.hasRose = false;
		this.hasSubwoofer = false;
		this.hasCocktail = false;
		this.hasSkinator = false;
		this.hasEditable = false;
		this.hasNox = false;
		this.hasThunder = false;
		this.mirageIslandDiscovered = playerData.mirageIslandDiscovered ?? false;

		this.items = playerData.items ?? [];
		this.favoriteItems = playerData.favoriteItems ?? {};
		this.updateItems();

		this.secrets = playerData.secrets ?? {
			cacnea: false,
			greavard: false,
			stakataka: false,
			luvdisc: false,
			chatot: false,
			sandygast: false,
			ducklett: false,
		}

		this.secretMaps = playerData.secretMaps ?? {};
		this.secretItems = playerData.secretItems ?? {};

		this.redeem = playerData.redeem ?? {};
		if (typeof this.redeem.playerSecret !== 'string' || this.redeem.playerSecret.length === 0) {
			this.redeem.playerSecret = generatePlayerSecret();
			this.persistRedeemData();
		}
		if (!Array.isArray(this.redeem.usedRewards)) this.redeem.usedRewards = [];
		this.redeemPlayerCodeCache = null;

		this.rewards = playerData.rewards ?? {};

		for (let i = 0; i <= 8; i++) {
		    if (!(i in this.rewards)) {
		        this.rewards[i] = {};
		    }
		}

		this.forceStarCount();
		this.forceRibbonCount();
		
		while (this.health.length < Object.keys(routeData).length) this.health.push(14);
		while (this.records.length < Object.keys(routeData).length) this.records.push(0);
		if (this.fossilInTeam < 0) this.fossilInTeam = 0;
		if (this.pastInTeam < 0) this.pastInTeam = 0;
		if (this.futureInTeam < 0) this.futureInTeam = 0;

		this.health = this.health.map(h => h === null ? 14 : h);
	}

	getSaveData() {
		return {
			update: this.update,
			name: this.name,
			portrait: this.portrait,
			gold: this.gold,
			health: this.health,
			records: this.records,
			ribbons: this.ribbons,
			stars: this.stars,
			teamSlots: this.teamSlots,
			extraGold: this.extraGold,
			achievementProgress: this.achievementProgress,
			achievementsRework: this.achievementsRework,
			achievementsReworkProgress: this.achievementsReworkProgress,
			mirageIslandDiscovered: this.mirageIslandDiscovered,
			stats: {
	            ...this.stats,
	        },
	        challenges: this.challenges,
	        sortedBox: this.sortedBox,
	        sortedInventory: this.sortedInventory,
	        fossilInTeam: this.fossilInTeam,
	        pastInTeam: this.pastInTeam,
			futureInTeam: this.futureInTeam,
	        megaInTeam: this.megaInTeam,
	        items: this.items,
	        favoriteItems: this.favoriteItems,
	        secrets: this.secrets,
	        secretMaps: this.secretMaps,
	        secretItems: this.secretItems,
	        redeem: this.redeem,
	        rewards: this.rewards,
	        enemyStats: this.enemyStats,
	        enemyDefeatedAmount: this.enemyDefeatedAmount,
	        unownState: this.unownState,
	        unownLetter: this.unownLetter
		};
	}

	persistRedeemData() {
		const dataRaw = window.localStorage.getItem("data");
		if (!dataRaw) return;

		const data = JSON.parse(dataRaw);
		if (!data.save || !data.save.player) return;
		data.save.player.redeem = this.redeem;
		window.localStorage.setItem("data", JSON.stringify(data));
	}

	async getPlayerCode() {
		if (this.redeemPlayerCodeCache) return this.redeemPlayerCodeCache;
		const playerCode = await derivePlayerCode(this.redeem.playerSecret);
		if (!playerCode) return null;
		this.redeemPlayerCodeCache = playerCode;
		return playerCode;
	}

	hasRedeemedReward(rewardId) {
		if (!rewardId) return false;
		return this.redeem.usedRewards.some((usedRewardId) => usedRewardId === rewardId);
	}

	markRewardAsRedeemed(rewardId) {
		if (!rewardId || this.hasRedeemedReward(rewardId)) return;
		this.redeem.usedRewards.push(rewardId);
		this.persistRedeemData();
	}

	getDamaged(amount) {
		if (!this.main.area.waveActive) return;
		if (this.main.area.sturdy && !this.main.area.sturdyUsed) {
			this.main.area.sturdyUsed = true;
			amount--;
		}

		if (this.main.area.iceBody && !this.main.area.iceBodyActivated) this.main.area.iceBodyActivated = true;

		this.health[this.main.area.map.id] -= amount;
		this.main.UI.updatePlayer();
		if (this.health[this.main.area.map.id] <= 0) {
			this.health[this.main.area.map.id] = 0;

			this.main.area.towers.forEach(t => {
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
			})
			
			if (this.main.area.inChallenge) {
				this.main.defeatScene.open(true);
			} else this.main.defeatScene.open();	
		} else {
			this.main.area.towers.forEach(t => {
				let berryField = null;

				if (t?.pokemon?.ability?.id == 'slowStart') t.slowStartTimer += 20000;

				if (amount > 0) {
					if (t?.pokemon?.item?.id === 'salacBerry') {
			            t.salacBerryTimer = (this.main.area.harvest) ? 36000 : 18000;
			            berryField = 'salacBerryTimer';
			        } else if (t?.pokemon?.item?.id === 'liechiBerry') {
			            t.liechiBerryTimer = (this.main.area.harvest) ? 36000 : 18000;
			            berryField = 'liechiBerryTimer';
			        } else if (t?.pokemon?.item?.id === 'lansatBerry') {
			            t.lansatBerryTimer = (this.main.area.harvest) ? 36000 : 18000;
			            berryField = 'lansatBerryTimer';
			        } else if (t?.pokemon?.item?.id === 'starfBerry') {
			            t.starfBerryTimer = (this.main.area.harvest) ? 36000 : 18000;
			            berryField = 'starfBerryTimer';
			        }

					if (berryField && t.isPassenger) {
			            const baseTower = this.main.area.towers.find(bt => bt.tile === t.tile && !bt.isPassenger);
			            if (baseTower?.pokemon?.item?.id === 'berryPouch') {
			                baseTower[berryField] = t[berryField];
			            }
			        }
				}
			})
		}
	}

	getHealed(amount) {
		this.health[this.main.area.map.id] += amount;
		if (this.health[this.main.area.map.id] > 14) this.health[this.main.area.map.id] = 14;
		this.main.UI.updatePlayer();
	}

	changeGold(amount) {
		if (this.main.area.isCustom && amount > 0) return;
		this.gold += amount;
		if (amount > 0) this.stats.totalGold += amount;
		
		//if (this.gold >= 1000000) this.unlockAchievement(3);
		//if (this.gold >= 999999999999) this.gold = 999999999999;
		// if (this.main.pokemonScene.isOpen) this.main.pokemonScene.update();
		// if (this.main.shopScene.isOpen) this.main.shopScene.update();

		this.main.UI.playerGold.innerText = `$${this.main.utility.formatGold(this.gold, this.main.lang)}`;
	}

	obtainStar() {
		this.stars++;
		if (this.stars == 40 || this.stars == 160 || this.stars == 320 || this.stars == 540) this.unlockTeamSlot();
		if (this.stars % 25 == 0) this.extraGold += 1;
		if (this.stars % 100 == 0) this.extraGold += 2;
		if (this.stars % 300 == 0) this.extraGold += 3;
		if (this.stars % 400 == 0) this.extraGold += 4;
		if (this.stars % 450 == 0) this.extraGold += 5;
		if (this.stars % 800 == 0) this.extraGold += 10;
		if (this.stars % 850 == 0) this.extraGold += 20;
		if (this.stars % 875 == 0) this.extraGold += 20;
	}

	unlockTeamSlot() {
		this.teamSlots++;
		this.main.UI.updatePokemon();
	}

	unlockAchievement(pos) {	
		if (!this.achievementsRework[pos].status) {
			this.extraGold += 2;
			this.achievementsRework[pos].status = true;
			this.achievementsReworkProgress++;

			if (this.main.profileScene.isOpen) this.main.profileScene.update();
		}
	}

	forceStarCount() {
		let totalStars = 0;
		this.records.forEach(num => { totalStars += num; })
		
		if (this.stars != totalStars) this.stars = totalStars;
		if (this.stars >= 40 && this.teamSlots < 7) this.teamSlots++;
		if (this.stars >= 160 && this.teamSlots < 8) this.teamSlots++;
		if (this.stars >= 320 && this.teamSlots < 9) this.teamSlots++;
		if (this.stars >= 540 && this.teamSlots < 10) this.teamSlots++;
		
		// if (this.stars >= 900) this.unlockAchievement(4);
		// if (this.stars == 1200) this.unlockAchievement(5);
	}

	forceRibbonCount() {
		Object.keys(this.challenges).forEach(key => {
			for (let rtIndex = 0; rtIndex < 12; rtIndex++) {
				if (this.challenges[key][rtIndex]?.length > 1) {
					if (this.challenges[key][rtIndex][0] == null) {
						this.obtainRibbon(key, rtIndex, 0);
					}
				}
			}
		})
	}

	updateItems() {
	    const seenIds = new Set();
	   
	    this.items = this.items.filter(item => {
	    	if (["dragoninite", "metagrossite", "froslassite", "garchompite", "gyaradosite", "magearnite", "heracronite", "aggronite"].includes(item.id)) return;
	        if (seenIds.has(item.id)) return false;
	        seenIds.add(item.id);
	        return true; 
	    });

	    this.items.forEach(item => {
	        const data = itemData[item.id];
	        if (!data) return; 
	        item.name = data.name;
	        item.description = data.description;
	        item.sprite = data.sprite;
	        item.tags = data.tags;
	        item.condition = data.condition;
	        item.restriction = data.restriction;
	        item.tier = data.tier;
	        item.isEquipable = data.isEquipable;
	        item.isRetirable = data.isRetirable;
	        item.isMega = data.isMega;
	        item.megaStone = data.megaStone;
	        item.megaPos = data.megaPos;

	        this.itemAmount++;

	        if (item.id === 'bicycle') this.hasBike = true;
	        if (item.id === 'rosesItem') this.hasRose = true;
	        if (item.id === 'subwoofer') this.hasSubwoofer = true;
	        if (item.id === 'mitsuesCocktail') this.hasCocktail = true;
	        if (item.id === 'sokudosPortfolio') this.hasSkinator = true;
	        if (item.id === 'revysBook') this.hasEditable = true;
	        if (item.id === 'noxDex') this.hasNox = true;
			if (item.id === 'thundersDrive') this.hasThunder = true;
	        
	    });
	}

	obtainItem(item) {
		this.items.push(item);
	}

	hasItem(id) {
	    if (!id) return false;
	    return this.items.some(item => item.id === id);
	}

	obtainRibbon(challengeKey, routeNumber, ribbonIndex = 0) {
		if (!challengeKey || typeof routeNumber === 'undefined' || routeNumber === null) return;

		if (!this.challenges) this.challenges = {};
		if (!this.challenges[challengeKey]) this.challenges[challengeKey] = {};

		if (!Array.isArray(this.challenges[challengeKey][routeNumber])) {
			this.challenges[challengeKey][routeNumber] = [];
		}

		for (let i = 0; i <= ribbonIndex; i++) {
			if (!this.challenges[challengeKey][routeNumber][i]) {
				this.challenges[challengeKey][routeNumber][i] = true;
				this.ribbons++;
			}
		}
	}

	hasRibbon(challengeKey, routeNumber, ribbonIndex = 0) {
		if (!this.challenges) return false;
		if (!this.challenges[challengeKey]) return false;
		if (!this.challenges[challengeKey][routeNumber]) return false;
		return !!this.challenges[challengeKey][routeNumber][ribbonIndex];
	}

	obtainChallengeRibbonsFromObject(challengeObject, routeNumber) {
		if (!challengeObject || typeof challengeObject !== 'object') return;

		const optionsMap = {
			lvlCap: [false, 75, 50],
			slotLimit: [false, 8, 6],
			toughEnemies: [false, 25, 50],
			draft: [false, true],
			noItems: [false, true],
			permadeath: [false, true],
			mirror: [false, true],
		};

		const CHALLENGES_LIST = ['lvlCap', 'slotLimit', 'toughEnemies', 'draft', 'noItems', 'permadeath', 'mirror'];

		CHALLENGES_LIST.forEach((key, i) => {
			const val = challengeObject[key];

			if (val === false || typeof val === 'undefined' || val === null) return;

			if (key === 'draft' || key === 'noItems' || key === 'permadeath' || key === 'mirror') {
				if (val === true) {
					this.obtainRibbon(key, routeNumber, 0);
				}
				return;
			}

			const opts = optionsMap[key];
			if (!opts) return;

			for (let idx = 1; idx < opts.length; idx++) {
				if (val === opts[idx]) {
					const ribbonIndex = idx - 1;
					this.obtainRibbon(key, routeNumber, ribbonIndex);
				}
			}
		});
	}

	swapItems(fromIndex, toIndex) {
	    if (
	        fromIndex < 0 ||
	        toIndex < 0 ||
	        fromIndex >= this.items.length ||
	        toIndex >= this.items.length ||
	        fromIndex === toIndex
	    ) return;

	    [this.items[fromIndex], this.items[toIndex]] =
	    [this.items[toIndex], this.items[fromIndex]];
	}

	toggleFavoriteItem(pokemonKey, itemId) {
	    if (!this.favoriteItems[pokemonKey]) {
	        this.favoriteItems[pokemonKey] = [];
	    }

	    const favs = this.favoriteItems[pokemonKey];
	    const index = favs.indexOf(itemId);

	    if (index === -1) favs.push(itemId);
	    else favs.splice(index, 1);
	}

	isFavoriteItem(pokemonId, itemId) {
	    return !!this.favoriteItems[pokemonId]?.includes(itemId);
	}

	recordEnemyDamage(enemyId, damage) {
		if (!enemyId || !Number.isFinite(damage)) return;

		this.enemyStats[enemyId].damage += damage;
	}

	recordEnemyDefeated(enemyId) {
		if (!enemyId) return;
		if (this.enemyStats[enemyId].defeated === 0) this.enemyDefeatedAmount++;
		this.enemyStats[enemyId].defeated++;
	}

	recordEnemyEscaped(enemyId) {
		if (!enemyId) return;
		this.enemyStats[enemyId].escaped++;
	}
}
