import { Element } from '../../utils/Element.js';
import { text } from '../../file/text.js';
import { playSound } from '../../file/audio.js';

export class StatusScene {
	constructor(main) {
		this.main = main;
		this.lang = main.lang;
		this.render();
	}

	render() {
		this.container = new Element(this.main.scene, { className: 'status-container' }).element;

		this.statsContainer = new Element(this.container, { className: 'status-stats-container' }).element;
		this.stats = []

		Object.keys(this.main.player.stats).forEach((key) => {
		    this.stats[key] = new Element(this.statsContainer, { className: 'status-stat' }).element;
		    this.stats[key].icon = new Element(this.stats[key], { className: 'status-stat-icon' }).element;
		    this.stats[key].label = new Element(this.stats[key], { className: 'status-stat-label', text: text.stats[key][this.lang] }).element;
		    this.stats[key].value = new Element(this.stats[key], { className: 'status-stat-value' }).element;
		});

		this.inventoryContainer = new Element(this.container, { className: 'status-inventory-container' }).element;

		this.inventoryPokeballContainer = new Element(this.inventoryContainer, { className: 'status-inventory-pokeball-container' }).element;
		this.inventoryPokeballIcon = new Element(this.inventoryPokeballContainer, { className: 'status-inventory-pokeball-icon' }).element;
		this.inventoryPokeballName = new Element(this.inventoryPokeballContainer, { className: 'status-inventory-pokeball-name stroke' }).element;
		//this.inventoryPokeballInfo = new Element(this.inventoryPokeballContainer, { className: 'status-inventory-pokeball-info stroke', text: '?' }).element;

		this.inventorySlotContainer = new Element(this.inventoryContainer, { className: 'status-inventory-slot-container' }).element;
		this.inventorySlot = [];
		this.inventorySlotSprite = [];

		for (let i = 0; i < 24; i++) {
			this.inventorySlot[i] = new Element(this.inventorySlotContainer, { className: 'status-inventory-slot' }).element;
			this.inventorySlotSprite[i] = new Element(this.inventorySlot[i], { className: 'status-inventory-slot-sprite' }).element;
		}

		this.updateStatus();
		this.updateInventory();
		this.updateBall();
	}

	updateStatus() {
		Object.entries(this.main.player.stats).forEach(([key, value]) => {
		    this.stats[key].icon.style.backgroundImage = `url("./assets/images/icons/${key}.png")`;
		    this.stats[key].value.innerText = value + this.main.player.boost[key];
		    if (key == 'crt' || key === 'crtDmg' || key === 'res') this.stats[key].value.innerText += '%';

		    if (key == 'crt' && (value + this.main.player.boost[key] >= 100)) {
		    	this.stats[key].value.innerText = '100%';
		    	this.stats[key].value.style.color = `var(--red)`;
		    } else if (key == 'res' && (value + this.main.player.boost[key] >= 50))	{
		    	this.stats[key].value.innerText = '50%';
		    	this.stats[key].value.style.color = `var(--red)`;
		    } else this.stats[key].value.style.color = `var(--black)`;
		    
		});

		this.stats['hp'].value.innerText = `${this.main.player.hp[0]}/${this.main.player.hp[1]}`;
		this.stats['ap'].value.innerText = `${this.main.player.ap[0]}/${this.main.player.ap[1]}`;
		this.stats['mp'].value.innerText = `${this.main.player.mp[0]}/${this.main.player.mp[1]}`;
	}

	updateInventory() {
		this.main.inventory.items.forEach((item, i) => {
			this.inventorySlot[i].classList.add(`tier-${item.tier}`);
			this.inventorySlotSprite[i].style.backgroundImage = `url("${item.image}")`;
			this.main.tooltip.bindToElement(this.inventorySlot[i], item);
		})
	}

	updateBall() {
		this.inventoryPokeballIcon.style.backgroundImage = `url("${this.main.inventory.pokeball.image}")`
		this.inventoryPokeballName.innerText = this.main.inventory.pokeball.name[this.lang];

		this.inventorySlot.forEach((slot, indx) => {
			if (indx >= this.main.inventory.slots) {
				slot.style.filter = `brightness(0.7)`
			} else {
				slot.style.filter = `brightness(1)`
			}
		})
	}
}

