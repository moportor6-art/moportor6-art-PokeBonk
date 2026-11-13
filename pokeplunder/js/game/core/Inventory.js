import { moveUpgradeData } from '../pokemon/moveUpgradeData.js';
import { text } from '../../file/text.js';
import { playSound } from '../../file/audio.js';

export class Inventory {
	constructor(main, inventoryData) {
		this.main = main;
		this.pokeball = inventoryData.pokeball;
		this.items = inventoryData.items;
		this.slots = inventoryData.slots ?? 8;
	}

	getSaveData() {
		return {
			pokeball: this.pokeball,
			items: this.items,
			slots: this.slots
		};
	}

	obtainItem(item) {
		playSound('equip', 'ui')
		this.items.push(item);
		if (item.stats) {
			Object.entries(item.stats).forEach((entry) => {
				let stat = entry[0];
				let value = entry[1];
				this.main.player.stats[stat] += value;

				if (stat == 'hp') {
					this.main.player.hp[0] += value;
					this.main.player.hp[1] += value;
				}
				if (stat == 'ap') {
					this.main.player.ap[0] += value;
					this.main.player.ap[1] += value;
				}
				if (stat == 'mp') {
					this.main.player.mp[0] += value;
					this.main.player.mp[1] += value;
				}
			})
		}
		if (item.effect == 'fashionCase') this.main.player.changeHp(999);
		if (item.effect == 'relicCopper') this.main.player.changeGold(100);
		if (item.effect == 'relicSilver') this.main.player.changeGold(200);
		if (item.effect == 'relicGold') this.main.player.changeGold(300);

		if (item.effect == 'thunderStone' && this.main.player.specie == 'pikachu') this.main.player.evolve();
		if (item.effect == 'thickClub' && this.main.player.specie == 'cubone') this.main.player.evolve();
		if (item.effect == 'metalCoat' && this.main.player.specie == 'scyther') this.main.player.evolve();
		if (item.effect == 'freshWater' && this.main.player.specie == 'marill') this.main.player.evolve();
		if (item.effect == 'razorClaw' && this.main.player.specie == 'sneasel') this.main.player.evolve();
		if (item.effect == 'blackSludge' && this.main.player.specie == 'croagunk') this.main.player.evolve();
		if (item.effect == 'sootheBell' && this.main.player.specie == 'riolu') this.main.player.evolve();
		if (item.effect == 'softSand' && this.main.player.specie == 'cacnea') this.main.player.evolve();
		if (item.effect == 'silverWing') {
			const movesID = structuredClone(this.main.player.moves.filter((move) => move.upgrade == false))
			for (let i = movesID.length - 1; i > 0; i--) {
			    const j = Math.floor(Math.random() * (i + 1));
			    [movesID[i], movesID[j]] = [movesID[j], movesID[i]];
			}

			const moveUpgrade = structuredClone(moveUpgradeData[movesID[0].id]);
			this.main.player.upgradeMove(moveUpgrade);
			this.main.chatScene.newMessage(`${text.items.silverWing[this.main.lang]} <span class="yellow">${moveUpgrade.name[this.main.lang]}</span><br>`)

			if (this.main.player.specie == 'taillow') this.main.player.evolve();
		}

		if (item.passive) this.main.player.passives[item.passive] = true;

		this.main.statusScene.updateInventory();
		this.main.statusScene.updateStatus();
		
		const percent = (this.main.player.hp[0] / this.main.player.hp[1]) * 100;
   	 	this.main.battleScene[`playerHealthBar`].style.width = `${percent}%`;
	}

	obtainBall(ball) {
		this.slots += 4;
		this.pokeball = ball;
		if (ball.stats) {
			Object.entries(ball.stats).forEach((entry) => {
				let stat = entry[0];
				let value = entry[1];
				this.main.player.stats[stat] += value;

				if (stat == 'hp') {
					this.main.player.hp[0] += value;
					this.main.player.hp[1] += value;
				}
				if (stat == 'ap') {
					this.main.player.ap[0] += value;
					this.main.player.ap[1] += value;
				}
				if (stat == 'mp') {
					this.main.player.mp[0] += value;
					this.main.player.mp[1] += value;
				}
			})
		}
		this.main.statusScene.updateBall();
		this.main.statusScene.updateStatus();
		
		const percent = (this.main.player.hp[0] / this.main.player.hp[1]) * 100;
   	 	this.main.battleScene[`playerHealthBar`].style.width = `${percent}%`;
	}
}