import { Window } from '../utils/Window.js';
import { Element } from '../utils/Element.js';
import { text } from '../file/text.js';
import { playSound } from '../file/audio.js';
import { Tooltip } from '../utils/Tooltip.js';

const STATS = {
	0: ['Wins', 'Partidas ganadas'],
	1: ['Enemies defeated', 'Enemigos derrotados'],
	2: ['Bosses defeated', 'Jefes derrotados'],
	3: ['Damage dealt', 'Daño causado'],
	4: ['Healing done', 'Curación realizada'],
	5: ['Money earned', 'Dinero obtenido'],
	6: ['Shinies found', 'Shinys encontrados'],
	7: ['Evolutions completed', 'Evoluciones realizadas'],
	8: ['Berries collected', 'Bayas recogidas'],
}

export class WindowProfile extends Window {
	constructor(component) {
	    super(640, 450); 
	    this.component = component;
	    this.tooltip = new Tooltip(this.component.lang);
	    this.render();
	}

	render = () => {
		const profileData = JSON.parse(window.localStorage.getItem("data")).profile; 

		this.container = new Element(this.content, { className: 'menu-profile-container' }).element;

		this.stats = new Element(this.container, { className: 'menu-profile-stats' }).element;
		this.stats.label = new Element(this.stats, { className: 'menu-profile-label' }).element;

		this.statsList = [];

		for (let i = 0; i < 9; i++) {
			this.statsList[i] = new Element(this.container, { className: 'menu-profile-stats-list' }).element;
			this.statsList[i].label = new Element(this.statsList[i], { className: 'menu-profile-stats-label' }).element;
			this.statsList[i].content = new Element(this.statsList[i], { className: 'menu-profile-stats-content' }).element;
		}

		this.achievements = new Element(this.container, { className: 'menu-profile-achievements' }).element;
		this.achievements.label = new Element(this.achievements, { className: 'menu-profile-label' }).element;

		this.achievementsContainer = new Element(this.container, { className: 'menu-profile-achievements-container' }).element;
		this.achievement = [];

		for (let i = 0; i < 76; i++) {
			this.achievement[i] = new Element(this.achievementsContainer, { className: 'menu-profile-achievement' }).element;
			this.achievement[i].style.backgroundImage = `url("${profileData.achievements[i].image}")`;
			this.tooltip.bindToAchievement(this.achievement[i], profileData.achievements[i]);
		}
		this.update();
  	}

  	update = () => {
  		const profileData = JSON.parse(window.localStorage.getItem("data")).profile; 
  		
  		this.tooltip.lang = this.component.lang;
  		this.title = text.menu.profile.title[this.component.lang];
  		this.header.innerHTML = this.title;

  		this.stats.label.innerHTML = text.menu.profile.stat.title[this.component.lang].toUpperCase();
  		for (let i = 0; i < 9; i++) {
  			this.statsList[i].label.innerHTML = STATS[i][this.component.lang].toUpperCase();
  			this.statsList[i].content.innerHTML = this.numberDot(profileData.stats[i]);
  		}

  		for (let i = 0; i < 76; i++) {
			this.achievement[i].style.filter = (profileData.achievements[i].status) ? 'brightness(1) drop-shadow(1px 1px 1px #222)' : 'brightness(0) drop-shadow(1px 1px 1px #222)';
		}

  		this.achievements.label.innerHTML = text.menu.profile.achievement.title[this.component.lang].toUpperCase();
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

