import { text } from '../../file/text.js';
import { playSound } from '../../file/audio.js';
import { itemData } from '../item/itemData.js';

export class Delibird {
	constructor(main) {
		this.main = main;
		this.lang = main.lang;
		this.isOpen = false;
		this.items = [];
		this.potion;
		this.relic;
	}

	setItems() {
		const copy = [...this.main.delibirdPool];
		for (let i = copy.length - 1; i > 0; i--) {
		   	const j = Math.floor(Math.random() * (i + 1));
		   	[copy[i], copy[j]] = [copy[j], copy[i]];
	  	}
		this.items = copy.slice(0, 3);
	}

	setPotion() {
		let n = Math.floor(Math.random()*100);
		if (n < 1) this.potion = itemData['maxPotion']
		else if (n < 5) this.potion = itemData['hyperPotion']
		else if (n < 15) this.potion = itemData['superPotion']
		else this.potion = itemData['potion']
	}

	setRelic() {
		let n = Math.floor(Math.random()*100);
		if (n < 1) this.relic = itemData['relicGold']
		else if (n < 10) this.relic = itemData['relicSilver']
		else this.relic = itemData['relicCopper']
	}

	getItem(pos) {
		let item = this.items[pos];
		this.main.inventory.obtainItem(item);
		playSound('pop1', 'ui')
		//quitar de la pool
		const index = this.main.delibirdPool.findIndex(it => it.id === item.id);
		if (index !== -1) this.main.delibirdPool.splice(index, 1); 

		this.main.eventScene.delibirdItem.forEach((item, i) => {
			this.main.eventScene.delibirdItem[i].style.pointerEvents = 'none';
			this.main.eventScene.delibirdItem[i].style.filter = 'brightness(0.6)';
		});
		this.main.eventScene.delibirdItemPick.forEach(item => item.style.pointerEvents = 'none');
		this.main.chatScene.newMessage(`${text.event.delibird.getItem[this.lang]} <span class="green">${item.name[this.lang]}</span>.<br>`);
		this.main.chatScene.newMessage(text.event.delibird.pick[this.lang]);
		this.main.panelButtonController(true);
		this.main.player.statsData[8] += 1;
		(this.main.player.achievementsData[74] == undefined) ? this.main.player.achievementsData[74] = 1 : this.main.player.achievementsData[74] += 1;
	}

	getPotion() {
		playSound('heal', 'ui');
		let heal = Math.ceil((this.main.player.hp[1] * this.potion.value) / 100);
		this.main.player.getHealed(heal);

		this.main.eventScene.delibirdItem.forEach((item, i) => {
			this.main.eventScene.delibirdItem[i].style.pointerEvents = 'none';
			this.main.eventScene.delibirdItem[i].style.filter = 'brightness(0.6)';
		});
		this.main.eventScene.delibirdItemPick.forEach(item => item.style.pointerEvents = 'none');

		this.main.chatScene.newMessage(text.event.delibird.pick[this.lang]);
		this.main.panelButtonController(true);
	}

	getRelic() {
		playSound('purchase', 'ui');
		let goldGain = Math.floor(Math.random() * (this.relic.value[1] - this.relic.value[0] + 1)) + this.relic.value[0];
		this.main.player.changeGold(goldGain);
		this.main.statusScene.updateStatus();

		this.main.eventScene.delibirdItem.forEach((item, i) => {
			this.main.eventScene.delibirdItem[i].style.pointerEvents = 'none';
			this.main.eventScene.delibirdItem[i].style.filter = 'brightness(0.6)';
		});
		this.main.eventScene.delibirdItemPick.forEach(item => item.style.pointerEvents = 'none');

		this.main.chatScene.newMessage(text.event.delibird.pick[this.lang]);
		this.main.panelButtonController(true);
	}

	displayItems() {
		this.items.forEach((item, i) => {
			this.main.eventScene.delibirdItem[i].style.pointerEvents = 'all';
			this.main.eventScene.delibirdItem[i].style.filter = 'none';

			this.main.eventScene.delibirdItem[i].classList.add(`tier-${item.tier}`);
			this.main.eventScene.delibirdItemSprite[i].style.backgroundImage = `url("${item.image}")`;

			this.main.eventScene.delibirdItemPick[i].innerHTML = `PICK`;

            this.main.tooltip.bindToElement(this.main.eventScene.delibirdItemSprite[i], item);
		})

		// POTION
		this.main.eventScene.delibirdItem[3].style.pointerEvents = 'all';
		this.main.eventScene.delibirdItem[3].style.filter = 'none';
		this.main.eventScene.delibirdItem[3].classList.add(`tier-${this.potion.tier}`);
		this.main.eventScene.delibirdItemSprite[3].style.backgroundImage = `url("${this.potion.image}")`;
		this.main.eventScene.delibirdItemPick[3].innerHTML = `PICK`;
		this.main.tooltip.bindToElement(this.main.eventScene.delibirdItemSprite[3], this.potion);

		// Relic
		this.main.eventScene.delibirdItem[4].style.pointerEvents = 'all';
		this.main.eventScene.delibirdItem[4].style.filter = 'none';
		this.main.eventScene.delibirdItem[4].classList.add(`tier-${this.relic.tier}`);
		this.main.eventScene.delibirdItemSprite[4].style.backgroundImage = `url("${this.relic.image}")`;
		this.main.eventScene.delibirdItemPick[4].innerHTML = `PICK`;
		this.main.tooltip.bindToElement(this.main.eventScene.delibirdItemSprite[4], this.relic);
	}

	open() {
		this.isOpen = true;
		this.main.panelButtonController(false);
		this.main.ubication = 'delibird';

		this.main.eventScene.delibirdItem.forEach(item => item.className = 'event-delibird-item');
		this.main.eventScene.delibirdItemPick.forEach(item => item.style.pointerEvents = 'all');
		this.setItems();
		this.setPotion();
		this.setRelic()
			
		this.main.eventScene.container.style.display = 'block';
		this.main.eventScene.delibirdContainer.style.display = 'block';

		this.main.chatScene.cleanMessages();
		this.main.chatScene.newMessage(text.event.delibird.announce[this.lang]);
		this.main.chatScene.newMessage(text.event.delibird.welcome[this.lang]);
		this.main.chatScene.newMessage(text.event.delibird.selection[this.lang]);
		this.displayItems();

		this.main.panelScene.mainButton.innerHTML = text.event.continue[this.lang];	
		this.checkInventory();
	}

	checkInventory() {
		if (this.main.inventory.items.length >= this.main.inventory.slots) {
			this.main.chatScene.newMessage(`${text.general.inventoryFull[this.lang]}<br>`);
			this.main.eventScene.delibirdItem.forEach((item, i) => {
				this.main.eventScene.delibirdItem[i].style.pointerEvents = 'none';
				this.main.eventScene.delibirdItem[i].style.filter = 'brightness(0.6)';
			});
			this.main.eventScene.delibirdItemPick.forEach(item => item.style.pointerEvents = 'none');
			this.main.panelButtonController(true);
		}
	}

	close() {
		this.isOpen = false;
		this.main.eventScene.container.style.display = 'none';
		this.main.eventScene.delibirdContainer.style.display = 'none';
	}
}