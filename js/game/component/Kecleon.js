import { text } from '../../file/text.js';
import { itemData }  from '../item/itemData.js';
import { playSound } from '../../file/audio.js';

export class Kecleon {
	constructor(main) {
		this.main = main;
		this.lang = main.lang;
		this.items = [];
	}

	setItems() {
		const copy = [...this.main.kecleonPool];
		  	for (let i = copy.length - 1; i > 0; i--) {
		    	const j = Math.floor(Math.random() * (i + 1));
		    	[copy[i], copy[j]] = [copy[j], copy[i]];
		  	}
		this.items = copy.slice(0, 8);
		this.items.forEach(item => {
			item.price = Math.floor(item.price + (item.price * ((Math.random() -0.5) * 0.15)))
		})
	}

	setDiscount() {
		let n = Math.floor(Math.random() * 8);
		this.items[n].price = Math.floor(this.items[n].price / 1.3);

		this.main.chatScene.newMessage(`${text.event.kecleon.sale[this.lang]} <span class="green">${this.items[n].name[this.lang]}</span>.<br>`);
	}

	buyItem(pos) {
		let item = this.items[pos];

		if (this.main.inventory.items.length >= this.main.inventory.items.slots) return;
		if (this.main.player.gold < item.price) return;
		
		this.main.player.changeGold(-item.price);
		this.main.chatScene.newMessage(`${text.event.kecleon.buyItem[this.lang]} <span class="green">${item.name[this.lang]}</span>.<br>`);
		this.main.inventory.obtainItem(item);

		//quitar de la pool
		const index = this.main.kecleonPool.findIndex(it => it.id === item.id);
		if (index !== -1) this.main.kecleonPool.splice(index, 1); 

		this.main.eventScene.kecleonItem[pos].style.pointerEvents = 'none';
		this.main.eventScene.kecleonItem[pos].style.filter = 'brightness(0.6)';

		(this.main.player.achievementsData[73] == undefined) ? this.main.player.achievementsData[73] = 1 : this.main.player.achievementsData[73] += 1;

		playSound('purchase', 'ui');
		this.checkInventory();
	}

	displayItems() {
		this.items.forEach((item, i) => {
			this.main.eventScene.kecleonItem[i].style.pointerEvents = 'all';
			this.main.eventScene.kecleonItem[i].style.filter = 'none';

			this.main.eventScene.kecleonItem[i].classList.add(`tier-${item.tier}`);
			this.main.eventScene.kecleonItemSprite[i].style.backgroundImage = `url("${item.image}")`;
			this.main.eventScene.kecleonItemPrice[i].innerHTML = `$${item.price}`;

			this.main.tooltip.bindToElement(this.main.eventScene.kecleonItemSprite[i], item);
		})
	}

	open() {
		this.main.panelButtonController(true);
		this.isOpen = true;
		this.main.ubication = 'kecleon';

		this.main.eventScene.kecleonItem.forEach(item => item.className = 'event-kecleon-item');
		this.setItems();
			
		this.main.eventScene.container.style.display = 'block';
		this.main.eventScene.kecleonContainer.style.display = 'block';

		this.main.chatScene.cleanMessages();
		this.main.chatScene.newMessage(text.event.kecleon.announce[this.lang]);
		this.main.chatScene.newMessage(text.event.kecleon.welcome[this.lang]);
		
		this.setDiscount();
		this.displayItems();
		this.checkInventory();

		this.main.panelScene.mainButton.innerHTML = text.event.continue[this.lang];	
	}

	checkInventory() {
		if (this.main.inventory.items.length >= this.main.inventory.slots) {
			this.main.chatScene.newMessage(`${text.general.inventoryFull[this.lang]}<br>`);
			this.main.eventScene.kecleonItem.forEach((item) => {
				item.style.pointerEvents = 'none';
				item.style.filter = 'brightness(0.6)';
				//item.className = 'event-kecleon-item-sold';
			})
		}
	}

	close() {
		this.isOpen = false;
		this.main.eventScene.container.style.display = 'none';
		this.main.eventScene.kecleonContainer.style.display = 'none';
	}


}