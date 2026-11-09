import { text } from '../../file/text.js';
import { playSound } from '../../file/audio.js';

export class Chansey {
	constructor(main) {
		this.main = main;
		this.lang = main.lang;
		this.isOpen = false;
	}

	pickOption(pos) {
		this.main.eventScene.chanseyOption.forEach(option => option.className = 'event-chansey-option-selected stroke');
		this.main.panelButtonController(true);
		this.main.chatScene.newMessage(text.event.chansey.pick[this.lang]);
		switch(pos) {
			case 0:
				playSound('heal', 'ui');
				this.main.player.getHealed(Math.ceil(this.main.player.hp[1]));
				break;
			case 1:
				playSound('select', 'ui');
				let hpGain = Math.floor(Math.random() * 10) + 11;
				this.main.player.hp[1] += hpGain;
				this.main.player.hp[0] += hpGain;
				this.main.statusScene.updateStatus();
				this.main.chatScene.newMessage(`${text.event.chansey.hpMax[this.lang]} ${hpGain}. <br>`);
				break;
			case 2:
				playSound('purchase', 'ui');
				let goldGain = Math.floor(Math.random() * 25) + 26;
				this.main.player.changeGold(goldGain);
				this.main.statusScene.updateStatus();
				break;
			case 3:
				playSound('pop1', 'ui')
				const berry = this.main.delibirdPool[Math.floor(Math.random() * this.main.delibirdPool.length)];
				const index = this.main.delibirdPool.findIndex(it => it.id === berry.id);
				if (index !== -1) this.main.delibirdPool.splice(index, 1); 

				this.main.inventory.obtainItem(berry);
				this.main.player.statsData[8] += 1;
				(this.main.player.achievementsData[74] == undefined) ? this.main.player.achievementsData[74] = 1 : this.main.player.achievementsData[74] += 1;
				break;
		}
	}

	open() {
		this.main.panelButtonController(true);
		this.isOpen = true;
		this.main.ubication = 'chansey';
			
		this.main.eventScene.chanseyOption.forEach(option => option.className = 'event-chansey-option stroke');

		this.main.eventScene.container.style.display = 'block';
		this.main.eventScene.chanseyContainer.style.display = 'block';

		this.main.chatScene.cleanMessages();
		this.main.chatScene.newMessage(text.event.chansey.announce[this.lang]);
		this.main.chatScene.newMessage(text.event.chansey.welcome[this.lang]);
		this.main.chatScene.newMessage(text.event.chansey.selection[this.lang]);

		this.main.panelScene.mainButton.innerHTML = text.event.continue[this.lang];	
		this.checkInventory();
	}

	checkInventory() {
		if (this.main.inventory.items.length >= this.main.inventory.slots) {
			this.main.chatScene.newMessage(`${text.general.inventoryFull[this.lang]}<br>`);
			this.main.eventScene.chanseyOption[3].className = 'event-chansey-option-selected stroke'
		}
	}

	close() {
		this.isOpen = false;
		this.main.eventScene.container.style.display = 'none';
		this.main.eventScene.chanseyContainer.style.display = 'none';
	}
}