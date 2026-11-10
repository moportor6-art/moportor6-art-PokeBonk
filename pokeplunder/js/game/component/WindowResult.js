import { Window } from '../../utils/Window.js';
import { Element } from '../../utils/Element.js';
import { text } from '../../file/text.js';
import { playSound } from '../../file/audio.js';

const STATS = {
	0: ['Result', 'Resultado'],
	1: ['Enemies defeated', 'Enemigos derrotados'],
	2: ['Bosses defeated', 'Jefes derrotados'],
	3: ['Damage dealt', 'Daño causado'],
	4: ['Healing done', 'Curación realizada'],
	5: ['Money earned', 'Dinero obtenido'],
	6: ['Shinies found', 'Shinys encontrados'],
	7: ['Evolutions completed', 'Evoluciones realizadas'],
	8: ['Berries collected', 'Bayas recogidas'],
}

export class WindowResult extends Window {
	constructor(main) {
	    super(640, 450); 
	    this.main = main;
	    this.win = false;
	    this.render();
	}

	render = () => {
		this.container = new Element(this.content, { className: 'menu-profile-container' }).element;

		this.stats = new Element(this.container, { className: 'menu-profile-stats' }).element;
		this.stats.label = new Element(this.stats, { className: 'menu-profile-label' }).element;

		this.statsList = [];

		for (let i = 0; i < 9; i++) {
			this.statsList[i] = new Element(this.container, { className: 'menu-profile-stats-list' }).element;
			this.statsList[i].label = new Element(this.statsList[i], { className: 'menu-profile-stats-label' }).element;
			this.statsList[i].content = new Element(this.statsList[i], { className: 'menu-profile-stats-content' }).element;
		}

		this.points = new Element(this.container, { className: 'menu-credits-developer' }).element;
		this.points.style.paddingTop = '5px'
		this.points.label = new Element(this.points, { className: 'menu-credits-label' }).element;
		this.points.content = new Element(this.points, { className: 'menu-credits-content' }).element;

		this.achievements = new Element(this.container, { className: 'menu-profile-achievements' }).element;
		this.achievements.label = new Element(this.achievements, { className: 'menu-profile-label' }).element;

		this.achievementsContainer = new Element(this.container, { className: 'menu-profile-achievements-result-window-container' }).element;
		this.achievement = [];
  	}

  	update = () => {
  		const data = JSON.parse(window.localStorage.getItem("data"));

  		this.header.innerHTML = text.general.gameOver[this.main.lang]; 
  		this.stats.label.innerHTML = text.menu.profile.stat.title[this.main.lang].toUpperCase();
  		
  		for (let i = 0; i < 9; i++) {
  			this.statsList[i].label.innerHTML = STATS[i][this.main.lang].toUpperCase();
  			if (i != 0) {
  				this.statsList[i].content.innerHTML = this.numberDot(this.main.player.statsData[i]);
  				data.profile.stats[i] += this.main.player.statsData[i];
  			}
  		}
  		if (this.win) data.profile.stats[0]++;

  		this.points.label.innerHTML = text.menu.upgrades.points[this.main.lang].toUpperCase();
  		this.points.content.innerHTML = `<span style="color: var(--red)">${this.numberDot(this.main.player.points)}</span>`;

  		this.statsList[0].content.innerHTML = (this.win) ? text.general.win[this.main.lang].toUpperCase() : text.general.lose[this.main.lang].toUpperCase();
  		this.achievements.label.innerHTML = text.menu.profile.achievement.unlocked[this.main.lang].toUpperCase();
  		
  		const profileAchievements = data.profile.achievements; 
		const playerAchievements = this.main.player.achievementsData;
		let unlockedAchievements = [];

		Object.entries(playerAchievements).forEach(achievement => {
			const n = Number(achievement[0]);
			let result = achievement[1];
			if ((n == 73 || n == 74) && result >= 10) result = true;

			if (n < 9 && !profileAchievements[n].status) {
				profileAchievements[n].progress = profileAchievements[n].progress.filter(
				 	pokemon => !result.includes(pokemon)
				);
				if (profileAchievements[n].progress.length == 0) {
					profileAchievements[n].status = true;
					unlockedAchievements.push(n);
				}
			} else if (!profileAchievements[n].status && (result === true)) {
				profileAchievements[n].status = true;
				unlockedAchievements.push(n);
			}
		})

		if (!profileAchievements[75].status) {
			let allCorrect = true;
			for (let i = 0; i < 75; i++) {
				if (!profileAchievements[i].status) allCorrect = false
			}
			if (allCorrect) {
				profileAchievements[75].status = true;
				unlockedAchievements.push(75);
			}
		}
		
		unlockedAchievements.forEach((ach, i) => {
			this.achievement[i] = new Element(this.achievementsContainer, { className: 'menu-profile-achievement' }).element;
			this.achievement[i].style.backgroundImage = `url("${data.profile.achievements[ach].image}")`;
			this.achievement[i].style.filter = `brightness(1) drop-shadow(1px 1px 1px #222)`;
			this.main.tooltip.bindToAchievement(this.achievement[i], data.profile.achievements[ach]);
		})

		data.profile.achievements = profileAchievements;
		data.profile.points += this.main.player.points;
		data.save[this.main.slot] = {};
		window.localStorage.setItem("data", JSON.stringify(data));
  	}

	// achievementsCheck() {
	// 	const data = JSON.parse(window.localStorage.getItem("data"))
	// 	const profileAchievements = data.profile.achievements; 
	// 	const playerAchievements = this.main.player.achievementsData;
	// 	let unlockedAchievements = [];

	// 	Object.entries(playerAchievements).forEach(achievement => {
	// 		const n = Number(achievement[0]);
	// 		let result = achievement[1];
	// 		if ((n == 73 || n == 74) && result >= 10) result = true;

	// 		if (n < 9) {
	// 			profileAchievements[n].progress = profileAchievements[n].progress.filter(
	// 			 	pokemon => !result.includes(pokemon)
	// 			);
	// 			if (profileAchievements[n].progress.length == 0) {
	// 				profileAchievements[n].status = true;
	// 				unlockedAchievements.push(n);
	// 			}
	// 		} else if (!profileAchievements[n].status && (result === true)) {
	// 			profileAchievements[n].status = true;
	// 			unlockedAchievements.push(n);
	// 		}
	// 	})

	// 	if (!profileAchievements[75].status) {
	// 		let allCorrect = true;
	// 		for (let i = 0; i < 75; i++) {
	// 			if (!profileAchievements[i].status) allCorrect = false
	// 		}
	// 		if (allCorrect) {
	// 			profileAchievements[75].status = true;
	// 			unlockedAchievements.push(75);
	// 		}
	// 	}
		
	// 	unlockedAchievements.forEach((ach, i) => {
	// 		this.achievement[i] = new Element(this.achievementsContainer, { className: 'menu-profile-achievement' }).element;
	// 		this.achievement[i].style.backgroundImage = `url("${data.profile.achievements[ach].image}")`;
	// 		this.main.tooltip.bindToAchievement(this.achievement[i], data.profile.achievements[ach]);
	// 	})

	// 	data.profile.achievements = profileAchievements;
	// 	data.profile.points += this.main.player.points;
	// 	data.save[this.main.slot] = {};
	// 	window.localStorage.setItem("data", JSON.stringify(data));
	// }

  	open(win) {
  		playSound('results', 'ui');
  		this.win = win;
	    super.open(); 
	    this.update();
  	}

	close() {
		playSound('close', 'ui');
		this.main.exitToMenu();
	    super.close(); 
  	}

  	numberDot(num) {
	  	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}
}

