import { Element } from '../../utils/Element.js';
import { text } from '../../file/text.js';
import { playSound } from '../../file/audio.js';

export class InfoScene {
	constructor(main) {
		this.main = main;
		this.lang = main.lang;
		this.render();
	}

	render() {
		this.container = new Element(this.main.scene, { className: 'info-container' }).element;

		this.name = new Element(this.container, { className: 'info-name stroke' }).element;
		this.gold = new Element(this.container, { className: 'info-gold stroke' }).element;

		this.settings = new Element(this.container, { className: 'info-settings stroke', text: '⚙' }).element;
		this.settings.addEventListener('click', () => { 
			playSound('key1', 'ui');
			this.main.exitToMenu() 
		})
		this.settings.addEventListener('mouseenter', () => { playSound('hover1', 'ui') });
		this.zone = new Element(this.container, { className: 'info-zone stroke' }).element;

		this.update();
	}

	update() {
		this.name.innerText = this.main.player.name;
		this.gold.innerText = `$${this.numberDot(this.main.player.gold)}`;
		this.zone.innerText = `${text.general.room[this.lang]} ${this.main.room + 1}/${this.main.map.rooms.length} - ${this.main.map.name[this.lang]}/9`;
	}

	numberDot(num) {
	  	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}
}

