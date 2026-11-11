import { text } from '../../file/text.js';
import { saveData } from '../../file/data.js';
import * as calc from '../pokemon/moveCalculator.js';

export class Battle {
	constructor(main) {
		this.main = main;
		this.lang = main.lang;
		this.turn;
		this.active;
		this.playing;

		this.magnetAble = true;
		this.focusBand = true;
		this.weaknessPolicy = true;
		this.focusSash = true;
	}

	startBattle() {
		saveData(
			this.main.slot, 
			this.main.player.name,
			this.main.player.getSaveData(),
			this.main.map,
			this.main.floor,
			this.main.room,
			this.main.kecleonPool,
			this.main.delibirdPool,
			this.main.movePool,
			this.main.inventory.getSaveData(),
			this.main.enemy.getSaveData(),	
		)

		this.main.panelButtonController(true);
		this.main.infoScene.settings.style.pointerEvents = 'all';
		this.main.battleScene.update();

		this.main.panelScene.mainButton.innerHTML = text.battle.endTurn[this.lang];	
		this.main.chatScene.cleanMessages();
		this.main.chatScene.newMessage(`${text.battle.wildPokemon[0][this.lang]} <span class="red">${this.main.enemy.name.toUpperCase()}</span> ${text.battle.wildPokemon[1][this.lang]}<br>`);
		this.turn = 0;
		this.active = true;
		this.playing = true;
		this.startTurn();

		// items passives
		this.weaknessPolicy = true;
		this.focusBand = true;
		if (this.main.player.passives['balloon']) this.main.player.applyElusion(1);
		//if (this.main.player.passives['leftovers']) this.main.player.getHealed(Math.ceil(this.main.player.hp[1] * 0.12));
		if (this.main.player.passives['moomooMilk']) this.main.player.applyRestoration(3);
		if (this.main.player.passives['electirizer']) this.main.player.changeAP(4, true);
		if (this.main.player.passives['thickClub']) this.main.enemy.applyErosion(3);
		if (this.main.player.passives['softSand']) this.main.enemy.applyFrailty(2);
		if (this.main.player.passives['charcoal']) this.main.enemy.applyBurn(3);
		

		const percent = (this.main.player.hp[0] / this.main.player.hp[1]) * 100;
   	 	this.main.battleScene[`playerHealthBar`].style.width = `${percent}%`;
	}

	startTurn() {
		if (!this.active) return
		this.turn++;
		this.main.chatScene.newMessage(`<span class="yellow">[${text.battle.turn[this.lang].toUpperCase()} ${this.turn}]</span><br>`);	

		// items passives
		this.focusSash = true;
		this.magnetAble = true;
		if (this.main.player.passives['thunderStone']) this.main.player.applyCharge(1);
		if (this.main.player.passives['freshWater']) this.main.player.applyWet(1);
		if (this.main.player.passives['blackSludge'] && this.main.enemy.status['poison']) this.main.player.getHealed(3);
		if (this.main.player.passives['leftovers']) this.main.player.getHealed(Math.ceil(this.main.player.hp[1] * 0.03));
		if (this.turn == 3 && this.main.player.passives['whippedDream']) this.main.player.getHealed(25);
		if (this.turn % 2 == 0 && this.main.player.passives['starSweet']) this.main.player.changeAP(1, true);
		if (this.turn < 6 && this.main.player.passives['metalCoat']) this.main.player.applyBoost({res: [2]});
		if (this.main.player.passives['stick']) {
			const stat = [{atk: [6]}, {spa: [6]}, {spe: [6]}]
			const statSelected = stat[Math.floor(Math.random() * stat.length)];
			this.main.player.applyBoost(statSelected);
		}
		if (this.main.player.passives['destinyKnot'] && this.main.player.mp[0] < this.main.player.mp[1]) {
			this.main.player.changeMP(1, true);
			this.main.player.updateMoves();
		}
		if (this.main.player.passives['xAttack']) this.main.player.applyBoost({atk: [10]});
		if (this.main.player.passives['xSpecial']) this.main.player.applyBoost({spa: [10]});
		if (this.main.player.passives['xSpeed']) this.main.player.applyBoost({spe: [10]});

		// status
		if (this.main.player.status['toxicOrb']) this.main.enemy.applyPoison(3);
		if (this.main.player.status['restoration']) this.main.player.healRestoration();
		if (this.main.player.status['poison']) this.main.player.damagePoison();
		if (this.main.player.status['burn']) this.main.player.damageBurn();

		// UI
		this.main.statusScene.updateStatus();
		this.main.player.reduceStatus();
		this.main.player.updateMoves();
		this.main.panelButtonController(true);
		this.main.infoScene.settings.style.pointerEvents = 'all';
		this.playing = true;
	}

	endTurn() {
		this.main.infoScene.settings.style.pointerEvents = 'none';
		this.main.panelButtonController(false);
		this.playing = false;
		this.main.player.restoreTurn();

		this.enemyTurn();
	}

	async enemyTurn() {
		if (this.main.enemy.status['restoration']) this.main.enemy.healRestoration();
		if (this.main.enemy.status['poison']) this.main.enemy.damagePoison();
		if (this.main.enemy.status['burn']) this.main.enemy.damageBurn();
	
		if (this.main.enemy.hp[0] > 0) {
			this.main.enemy.reduceStatus();

			const actionsPosition = (this.turn - 1) % this.main.enemy.actions.length;
			const actions = this.main.enemy.actions[actionsPosition];

			for (let i = 0; i < actions.length; i++) {
				await new Promise(resolve => setTimeout(resolve, 1000));

				if (this.main.player.hp[0] <= 0 && this.active) {
					return this.endBattle(false);
				} else if (this.main.enemy.hp[0] <= 0 && this.active) {
					return this.endBattle(true);
				} else this.main.enemy.useMove(actions[i])
			}

			await new Promise(resolve => setTimeout(resolve, 1000));

			this.startTurn();
		}
	}

	endBattle(win) {
		this.active = false;
		this.main.player.restoreBattle();
		this.main.chatScene.newMessage(`<span class="yellow">[${text.battle.endBattle[this.lang].toUpperCase()}]</span><br>`);

		if (win) {
			this.main.panelButtonController(true);
			this.main.infoScene.settings.style.pointerEvents = 'all';
			this.main.chatScene.newMessage(`<span class="red">${this.main.enemy.name.toUpperCase()}</span> ${text.battle.defeated[this.lang]}.<br>`);
			// gold
			const variation = 0.9 + Math.random() * 0.2;
    		let gold = Math.round(this.main.enemy.gold * variation);
    		if (this.main.player.passives['amuletCoin']) gold += Math.round(gold * 0.25);
    		this.main.player.changeGold(gold);
    		this.main.player.earnPoints(this.main.enemy.points);
    		if (this.main.player.passives['sootheBell']) {
				const stat = ['atk', 'spa', 'spe'];
				const statSelected = stat[Math.floor(Math.random() * stat.length)];
				this.main.player.stats[statSelected] += 3;
				this.main.statusScene.updateStatus();
				this.main.chatScene.newMessage(`<span class="green">${this.main.player.name.toUpperCase()}</span> <span class="${statSelected}">+3 ${text.stats[statSelected][this.main.lang]}</span>.<br>`);
			}

			this.main.panelScene.mainButton.innerHTML = text.event.continue[this.lang];
			this.main.player.statsData[1] += 1;
			if (this.main.enemy.pokemon.isBoss || this.main.enemy.pokemon.isFinalBoss) {
				this.main.player.statsData[2] += 1;
				this.achievmentDefeatBoss(this.main.enemy.pokemon.name);
			} else this.achievmentDefeatEnemy(this.main.enemy.pokemon.name, this.main.floor);

			if (this.main.enemy.pokemon.isFinalBoss) {
				this.achievmentWinGame(this.main.player.specie)
				this.main.result.open(true);
			}
		} else {
			this.main.chatScene.newMessage(`<span class="green">${this.main.player.name.toUpperCase()}</span> ${text.battle.defeated[this.lang]}.<br>`);		
			this.main.result.open(false);
		}
	}

	achievmentWinGame(playerSpecie) {
		if (['pikachu', 'raichu'].includes(playerSpecie)) this.main.player.achievementsData[52] = true;
		if (['cubone', 'marowak'].includes(playerSpecie)) this.main.player.achievementsData[53] = true;
		if (['scyther', 'scizor'].includes(playerSpecie)) this.main.player.achievementsData[54] = true;
		if (['marill', 'azumarill'].includes(playerSpecie)) this.main.player.achievementsData[55] = true;
		if (['sneasel', 'weavile'].includes(playerSpecie)) this.main.player.achievementsData[56] = true;
		if (['taillow', 'swellow'].includes(playerSpecie)) this.main.player.achievementsData[57] = true;
		if (['cacnea', 'cacturne'].includes(playerSpecie)) this.main.player.achievementsData[58] = true;
		if (['croagunk', 'toxicroak'].includes(playerSpecie)) this.main.player.achievementsData[59] = true;
		if (['riolu', 'lucario'].includes(playerSpecie)) this.main.player.achievementsData[60] = true;
	}

	achievmentDefeatEnemy(enemySpecie, area) {
		if (this.main.player.achievementsData[area] == undefined) this.main.player.achievementsData[area] = [enemySpecie];
		else if (!this.main.player.achievementsData[area].includes(enemySpecie)) this.main.player.achievementsData[area].push(enemySpecie);
	}

	achievmentDefeatBoss(bossSpecie) {
		if (bossSpecie == 'pinsir') this.main.player.achievementsData[9] = true;
		if (bossSpecie == 'heracross') this.main.player.achievementsData[10] = true;
		if (bossSpecie == 'vespiquen') this.main.player.achievementsData[11] = true;
		if (bossSpecie == 'beedrill') this.main.player.achievementsData[12] = true;
		if (bossSpecie == 'butterfree') this.main.player.achievementsData[13] = true;
		if (bossSpecie == 'drapion') this.main.player.achievementsData[14] = true;
		if (bossSpecie == 'muk') this.main.player.achievementsData[15] = true;
		if (bossSpecie == 'swalot') this.main.player.achievementsData[16] = true;
		if (bossSpecie == 'vileplume') this.main.player.achievementsData[17] = true;
		if (bossSpecie == 'onix') this.main.player.achievementsData[18] = true;
		if (bossSpecie == 'ursaring') this.main.player.achievementsData[19] = true;
		if (bossSpecie == 'sudowoodo') this.main.player.achievementsData[20] = true;
		if (bossSpecie == 'skarmory') this.main.player.achievementsData[21] = true;
		if (bossSpecie == 'venusaur') this.main.player.achievementsData[22] = true;
		if (bossSpecie == 'meganium') this.main.player.achievementsData[23] = true;
		if (bossSpecie == 'sceptile') this.main.player.achievementsData[24] = true;
		if (bossSpecie == 'torterra') this.main.player.achievementsData[25] = true;
		if (bossSpecie == 'blastoise') this.main.player.achievementsData[26] = true;
		if (bossSpecie == 'feraligatr') this.main.player.achievementsData[27] = true;
		if (bossSpecie == 'swampert') this.main.player.achievementsData[28] = true;
		if (bossSpecie == 'empoleon') this.main.player.achievementsData[29] = true;
		if (bossSpecie == 'charizard') this.main.player.achievementsData[30] = true;
		if (bossSpecie == 'typhlosion') this.main.player.achievementsData[31] = true;
		if (bossSpecie == 'blaziken') this.main.player.achievementsData[32] = true;
		if (bossSpecie == 'infernape') this.main.player.achievementsData[33] = true;
		if (bossSpecie == 'entei') this.main.player.achievementsData[34] = true;
		if (bossSpecie == 'suicune') this.main.player.achievementsData[35] = true;
		if (bossSpecie == 'raikou') this.main.player.achievementsData[36] = true;
		if (bossSpecie == 'articuno') this.main.player.achievementsData[37] = true;
		if (bossSpecie == 'zapdos') this.main.player.achievementsData[38] = true;
		if (bossSpecie == 'moltres') this.main.player.achievementsData[39] = true;
		if (bossSpecie == 'hooh') this.main.player.achievementsData[40] = true;
		if (bossSpecie == 'lugia') this.main.player.achievementsData[41] = true;
		if (bossSpecie == 'groudon') this.main.player.achievementsData[42] = true;
		if (bossSpecie == 'kyogre') this.main.player.achievementsData[43] = true;
		if (bossSpecie == 'dialga') this.main.player.achievementsData[44] = true;
		if (bossSpecie == 'palkia') this.main.player.achievementsData[45] = true;
		if (bossSpecie == 'mewtwo') this.main.player.achievementsData[46] = true;
		if (bossSpecie == 'deoxys') this.main.player.achievementsData[47] = true;
		if (bossSpecie == 'darkrai') this.main.player.achievementsData[48] = true;
		if (bossSpecie == 'giratina') this.main.player.achievementsData[49] = true;
		if (bossSpecie == 'rayquaza') this.main.player.achievementsData[50] = true;
		if (bossSpecie == 'arceus') this.main.player.achievementsData[51] = true;
	}
}

