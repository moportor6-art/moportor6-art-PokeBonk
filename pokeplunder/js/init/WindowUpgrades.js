import { Window } from '../utils/Window.js';
import { Element } from '../utils/Element.js';
import { text } from '../file/text.js';
import { playSound } from '../file/audio.js';

const STATS = ['hp', 'ap', 'mp', 'atk', 'spa', 'spe', 'crt', 'crtDmg', 'gold']
const UPGRADE_VALUES = [5, 1, 1, 2, 2, 2, 1, 2, 5];
const UPGRADE_MAX = [10, 2, 2, 5, 5, 5, 5, 5, 10];
const UPGRADE_COST = [15, 1000, 500, 25, 25, 25, 40, 20, 10];
const UPGRADE_SCALE = [3, 2, 1, 2, 2, 2, 3, 3, 1];

export class WindowUpgrades extends Window {
	constructor(component) {
	    super(640, 450); 
	    this.component = component;
	    this.render();
	}

	render = () => {
		this.container = new Element(this.content, { className: 'menu-credits-container' }).element;

		this.points = new Element(this.container, { className: 'menu-credits-developer' }).element;
		this.points.label = new Element(this.points, { className: 'menu-credits-label' }).element;
		this.points.content = new Element(this.points, { className: 'menu-credits-content' }).element;

		this.boxContainer = new Element(this.container, { className: 'menu-upgrades-box-container' }).element;
		this.box = []

		STATS.forEach((stat, i) => {
			this.box[stat] = new Element(this.boxContainer, { className: 'menu-upgrades-box' }).element;
			this.box[stat].name = new Element(this.box[stat], { className: 'menu-upgrades-box-name' }).element;
			this.box[stat].upgrade = new Element(this.box[stat], { className: 'menu-upgrades-box-upgrade' }).element;
			this.box[stat].cost = new Element(this.box[stat], { className: 'menu-upgrades-box-cost' }).element;
			this.box[stat].less = new Element(this.box[stat], { className: 'menu-upgrades-box-less', text: '-' }).element;
			this.box[stat].more = new Element(this.box[stat], { className: 'menu-upgrades-box-more', text: '+' }).element;

			this.box[stat].less.addEventListener('click', () => { this.downgrade(stat, i) })
			this.box[stat].more.addEventListener('click', () => { this.upgrade(stat, i) })
			this.box[stat].less.addEventListener('mouseenter', () => { playSound('key0', 'ui') });
			this.box[stat].more.addEventListener('mouseenter', () => { playSound('key0', 'ui') });
		})
  	}

  	update = () => {
  		const profileData = JSON.parse(window.localStorage.getItem("data")).profile; 

  		this.title = text.menu.upgrades.title[this.component.lang];
  		this.header.innerHTML = this.title;

  		this.points.label.innerHTML = text.menu.upgrades.points[this.component.lang].toUpperCase();
  		this.points.content.innerHTML = `<span style="color: var(--red)">${profileData.points}</span>`;

  		STATS.forEach((stat, i) => {
			this.box[stat].name.innerText = text.menu.upgrades[stat][this.component.lang].toUpperCase();
			this.box[stat].upgrade.innerText = `${profileData.upgrades[stat] * UPGRADE_VALUES[i]}`;
			if (profileData.upgrades[stat] === UPGRADE_MAX[i]) this.box[stat].cost.innerHTML = 'MAX';
			else this.box[stat].cost.innerHTML = `${this.numberDot(Math.floor(UPGRADE_COST[i] + (profileData.upgrades[stat] * UPGRADE_COST[i] * UPGRADE_SCALE[i])))} ${text.menu.upgrades.points[this.component.lang]}`;
		})
  	}

  	upgrade = (stat, i) => {
  		let data = JSON.parse(window.localStorage.getItem("data"));
  		const price = Math.floor(UPGRADE_COST[i] + (data.profile.upgrades[stat] * UPGRADE_COST[i] * UPGRADE_SCALE[i]))
  		if (data.profile.upgrades[stat] === UPGRADE_MAX[i] || price > data.profile.points) return playSound('pop0', 'ui');
  		playSound('purchase', 'ui')
  		data.profile.points -= price;

  		data.profile.upgrades[stat] += 1;
  		window.localStorage.setItem("data", JSON.stringify(data));
  		this.update();
  	}

  	downgrade = (stat, i) => {
  		let data = JSON.parse(window.localStorage.getItem("data"));
  		const price = Math.floor(UPGRADE_COST[i] + ((data.profile.upgrades[stat]-1) * UPGRADE_COST[i] * UPGRADE_SCALE[i]))
  		
  		if (data.profile.upgrades[stat] === 0) return playSound('pop0', 'ui');
  		playSound('purchase', 'ui')
  		data.profile.points += price;

  		data.profile.upgrades[stat] -= 1;
  		window.localStorage.setItem("data", JSON.stringify(data));
  		this.update();
  	}

  	open() {
  		playSound('key1', 'ui'); 
	    super.open(); 
	    this.update(); 
  	}

	close() {
		playSound('close', 'ui');
	    super.close(); 
  	}

  	numberDot(num) {
	  	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}
}

/*

PS 5 10 15 20 25 30 35 40 45 50
PA 1 2
PM 1 2

Atk 2 4 6 8 10
AtE 2 4 6 8 10
Vel 2 4 6 8 10

Crt 1 2 3 4 5
CrD 2 4 6 8 10
Oro 10 20 30 40 50 

*/