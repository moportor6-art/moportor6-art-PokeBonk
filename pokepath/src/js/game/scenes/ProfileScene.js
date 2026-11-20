import { GameScene } from '../../utils/GameScene.js';
import { SectionScene } from '../../utils/SectionScene.js';

import { Element } from '../../utils/Element.js';
import { Input } from '../../utils/Input.js';
import { text } from '../../file/text.js';
import { playSound } from '../../file/audio.js';

import { allPokemon } from '../data/pokemonData.js';
import { achievementReworkData } from '../data/achievementReworkData.js';

export class ProfileScene extends SectionScene {
	constructor(main) {
		super();
		this.main = main;
		this.render();

		this.deleteRecord = new DeleteRecord(this.main);
	}

	render() {
		this.playerContainer = new Element(this.container, { className: 'profile-player-container' }).element;

		this.portrait = new Element(this.playerContainer, { className: 'profile-scene-portrait' }).element;
		this.portrait.addEventListener('click', () => this.togglePortraitPicker());

		this.avatarPicker = new Element(this.playerContainer, { className: 'profile-scene-avatar-picker' }).element;
		this.avatarOptions = [];
		for (let portrait = 0; portrait <= 79; portrait++) {
			const option = new Element(this.avatarPicker, {
				className: 'profile-scene-avatar-option'
			}).element;
			option.style.backgroundImage = `url("./src/assets/images/portraits/${portrait}.png")`;
			option.addEventListener('click', () => this.selectPortrait(portrait));
			option.addEventListener('mouseenter', () => { playSound('hover1', 'ui') });
			this.avatarOptions.push(option);
		}

		this.avatarPrev = new Element(this.playerContainer, { className: 'profile-scene-avatar-arrow-prev stroke', text: '<' }).element;
		this.avatarNext = new Element(this.playerContainer, { className: 'profile-scene-avatar-arrow-next stroke', text: '>' }).element;
		this.avatarPrev.addEventListener('click', () => { this.changePortrait(-1) });
		this.avatarNext.addEventListener('click', () => { this.changePortrait(1) });
		this.avatarPrev.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
		this.avatarNext.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })

		this.name = new Input(
			this.playerContainer, 
			"text", 
			{ 
				className: "profile-scene-name stroke", 
				maxlength: 11, 
				cb: () => { this.changeName() } 
			}
		);

		this.achievementsContainer = new Element(this.container, { className: 'profile-scene-achievements-container' }).element;
		this.achievement = [];
		
		for (let i = 0; i < 39; i++) {
			this.achievement[i] = new Element(this.achievementsContainer, { className: 'profile-scene-achievement' }).element;
		}

		const achievementOrder = Array.from({ length: 39 }, (_, i) => i);

		const index38 = achievementOrder.indexOf(38);
		const index21 = achievementOrder.indexOf(21);

		achievementOrder.splice(index38, 1);
		achievementOrder.splice(index21, 0, 38);

		achievementOrder.forEach(i => {
			this.achievementsContainer.appendChild(this.achievement[i]);
		});

		this.statsContainer = new Element(this.container, { className: 'profile-stats-container' }).element;
		this.stats = [];

		for (let i = 0; i < 21; i++) {
			this.stats[i] = new Element(this.statsContainer, { className: 'profile-stat stroke' }).element;
		 	this.stats[i].label = new Element(this.stats[i], { className: 'profile-stat-label' }).element;
		 	this.stats[i].value = new Element(this.stats[i], { className: 'profile-stat-value' }).element;
		}

		this.stats[19].value.addEventListener('click', () => {this.deleteRecord.open(19)})
		this.stats[20].value.addEventListener('click', () => {this.deleteRecord.open(20)})

		this.achievement[7].addEventListener('click', () => {
			if (
				!this.main.player.secrets.luvdisc &&
				//!this.main.area.waveActive &&
				!this.main.area.inChallenge 
			) {
				this.main.player.secrets.luvdisc = true;
				this.main.UI.getSecret('luvdisc');
			}
		})

		this.achievement[19].addEventListener('click', () => {
			if (
				!this.main.player.secrets.luvdisc &&
				!this.main.area.inChallenge 
			) {
				this.main.player.secrets.luvdisc = true;
				this.main.UI.getSecret('luvdisc');
			}
		})
	}

	update() {
		this.name.value.placeholder = this.main.player.name;
		this.portrait.style.backgroundImage = `url("./src/assets/images/portraits/${this.main.player.portrait}.png")`;
		this.updatePortraitOptions();

		this.achievement.forEach((achievement, i) => {
			this.achievement[i].style.backgroundImage = `url("${achievementReworkData[i].image}")`;
			this.achievement[i].style.filter = (this.main.player.achievementsRework[i].status) ? 'drop-shadow(2px 2px black) brightness(1)' : 'drop-shadow(1px 1px black) grayscale(1) brightness(0.5)';
			this.main.tooltip.bindTo(this.achievement[i], achievementReworkData[i], 'item');
		})

		for (let i = 0; i < 21; i++) {
		 	this.stats[i].label.innerText = text.profile.stats[i][this.main.lang].toUpperCase();
		}

		this.stats[0].value.innerText = this.main.utility.minutsToTime(this.main.player.stats.timePlayed);
		this.stats[1].value.innerText = `${this.main.utility.numberDot(Math.min(4000, this.main.player.stars), this.main.lang)}/${this.main.utility.numberDot(4000, this.main.lang)}`;
		this.stats[2].value.innerText = `${this.main.player.stats.pokemonOwned}/${allPokemon.length-1}`;
		this.stats[3].value.innerText = `${this.main.player.shinyAmount}/${allPokemon.length-1}`;
		this.stats[4].value.innerText = `${this.main.player.stats.highestPokemonLevel}/100`;
		this.stats[5].value.innerText = `${this.main.utility.numberDot(Math.min((parseInt(this.main.player.stats.pokemonOwned)*100),this.main.player.stats.totalPokemonLevel), this.main.lang)}/${this.main.utility.numberDot(((allPokemon.length-1)*100), this.main.lang)}`;
		this.stats[6].value.innerText = `$${this.main.utility.numberDot(this.main.player.stats.totalGold, this.main.lang)}`;
		this.stats[7].value.innerText = `${this.main.player.itemAmount}/177`;
		this.stats[8].value.innerText = `${this.main.utility.numberDot(this.main.player.stats.wavesCompleted, this.main.lang)}`;
		this.stats[9].value.innerText = `${this.main.utility.numberDot(this.main.player.stats.highestHit, this.main.lang)}`;
		this.stats[10].value.innerText = `${this.main.utility.numberDot(this.main.player.stats.defeatedEnemies, this.main.lang)}`;
		this.stats[11].value.innerText = `${this.main.utility.numberDot(Math.min(345, this.main.player.enemyDefeatedAmount))}/345`;
		this.stats[12].value.innerText = `${this.main.utility.numberDot(this.main.player.stats.appliedStuns, this.main.lang)}`;
		this.stats[13].value.innerText = `${this.main.utility.numberDot(this.main.player.stats.appliedSlows, this.main.lang)}`;
		this.stats[14].value.innerText = `${this.main.utility.numberDot(this.main.player.stats.appliedBurns, this.main.lang)}`;
		this.stats[15].value.innerText = `${this.main.utility.numberDot(this.main.player.stats.appliedPoisons, this.main.lang)}`;
		this.stats[16].value.innerText = `${this.main.utility.numberDot(this.main.player.stats.appliedCurses, this.main.lang)}`;
		this.stats[17].value.innerText = `${this.main.utility.numberDot(this.main.player.stats.resets, this.main.lang)}`;
		this.stats[18].value.innerText = `$${this.main.utility.numberDot(this.main.player.achievementProgress.stolenGold, this.main.lang)}`;
		this.stats[19].value.innerText = (this.main.player.stats.maxGoldPerWave[1] == null) ? `$0` : 
			`(${this.main.player.stats.maxGoldPerWave[1]}) $${this.main.utility.numberDot(this.main.player.stats.maxGoldPerWave[0], this.main.lang)}`
		this.stats[20].value.innerText = (this.main.player.stats.maxGoldPerTime[1] == null) ? `$0/s` : 
			`(${this.main.player.stats.maxGoldPerTime[1]}) $${this.main.utility.numberDot(this.main.player.stats.maxGoldPerTime[0], this.main.lang)}/s`
	}

	changePortrait(dir) {
		let pos = this.main.player.portrait;
		pos += dir;

		if (pos < 0) pos = 79;
		else if (pos > 79) pos = 0

		this.main.player.portrait = pos;	

		this.update();
		this.main.UI.updatePlayer();
		playSound('option', 'ui');
	}

	togglePortraitPicker() {
		this.avatarPicker.classList.toggle('is-open');
	}

	updatePortraitOptions() {
		this.avatarOptions.forEach((option, portrait) => {
			const selected = portrait === this.main.player.portrait;
			option.classList.toggle('is-selected', selected);
		});
	}

	selectPortrait(portrait) {
		this.main.player.portrait = portrait;
		this.update();
		this.main.UI.updatePlayer();
		this.avatarPicker.classList.remove('is-open');
		this.saveProfile();
		playSound('option', 'ui');
	}

	changeName() {
		this.main.player.name = this.name.value.value;
		this.main.UI.updatePlayer();
	}

	saveProfile() {
		const data = JSON.parse(window.localStorage.getItem("data"));
        data.save.player.name = this.main.player.name;
        data.save.player.portrait = this.main.player.portrait;
        window.localStorage.setItem("data", JSON.stringify(data));
	}

	open() {
		if (this.main.game.stopped) return playSound('pop0', 'ui');
		if (this.isOpen) return this.close();
		
		this.main.sections.forEach(section => {
			if (section.isOpen && section != this) return section.close();
		})

		super.open();
		this.update();
		this.main.UI.section['profile'].classList.add('is-selected');
		this.main.game.cancelDeployUnit()
	}

	close() {
		super.close();
		this.avatarPicker.classList.remove('is-open');
		this.main.tooltip.hide();
		this.main.UI.section['profile'].classList.remove('is-selected');
		this.saveProfile();
	}
}

export class DeleteRecord extends GameScene {
	constructor(main) {
		super(400, 130);
		this.main = main;
		this.stat;

		this.header.removeChild(this.closeButton);
		this.render();
	}

	render() {
		this.prompt = new Element(this.container, { className: 'defeat-scene-prompt' }).element;
		
		this.yesButton = new Element(this.container, { className: 'delete-scene-yes-button' }).element;
		this.noButton = new Element(this.container, { className: 'delete-scene-no-button' }).element;

		this.yesButton.addEventListener('mouseenter', () => { playSound('hover2', 'ui') })
		this.noButton.addEventListener('mouseenter', () => { playSound('hover2', 'ui') })

		this.noButton.addEventListener('click', () => this.close());
		this.yesButton.addEventListener('click', () => {
			if (this.stat == 19) this.main.player.stats.maxGoldPerWave =  [0, null];
			if (this.stat == 20) this.main.player.stats.maxGoldPerTime =  [0, null];
			
			this.main.profileScene.update();
			this.close();
		})
	}

	update() {
		this.title.innerHTML = text.profile.stats[this.stat][this.main.lang].toUpperCase();
		this.prompt.innerHTML = text.profile.delete[this.main.lang].toUpperCase();;
		this.yesButton.innerText = text.menu.data.delete[this.main.lang].toUpperCase();
		this.noButton.innerText = text.menu.data.cancel[this.main.lang].toUpperCase();
	}

	open(i) {
		super.open();
		this.stat = i;
		this.update();
	}
}
