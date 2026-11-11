import { Element } from '../../utils/Element.js';
import { text } from '../../file/text.js';
import { playSound } from '../../file/audio.js';

export class PanelScene {
	constructor(main) {
		this.main = main;
		this.lang = main.lang;
		this.moveSelected;
		this.panelButtonAble;
		this.render();
	}

	render() {
		this.container = new Element(this.main.scene, { className: 'panel-container' }).element;

		this.moveContainer = new Element(this.container, { className: 'panel-move-container' }).element;
		
		this.moves = [];
		for (let i = 0; i < 8; i++) {
			this.moves[i] = new Element(this.moveContainer, { className: 'panel-move-empty stroke', text: text.moves.empty[this.lang] }).element;	
		}

		this.main.player.moves.forEach((move, i) => {
			this.moves[i].className = 'panel-move stroke'
			this.moves[i].innerHTML = move.name[this.lang];
			this.moves[i].addEventListener('mouseover', () => { 
				playSound('hover0', 'ui');
				this.moves.forEach(move => { if (move.className == 'panel-move-selected stroke') move.className = 'panel-move stroke' });
				this.moves[i].className = 'panel-move-selected stroke';
				this.displayMove(this.main.player.moves[i])
			})
			this.moves[i].addEventListener('click', () => { 
				this.main.player.useMove(this.main.player.moves[i]);
			})
		})
		this.moves[0].className = 'panel-move-selected stroke';

		this.moveInfoContainer = new Element(this.container, { className: 'panel-move-info-container' }).element;
		this.moveInfoName = new Element(this.moveInfoContainer, { className: 'panel-move-info-name' }).element;
		this.moveInfoCost = new Element(this.moveInfoContainer, { className: 'panel-move-info-cost' }).element;
		this.moveInfoCostIcon = new Element(this.moveInfoContainer, { className: 'panel-move-info-cost-icon' }).element;
		this.moveInfoUses = new Element(this.moveInfoContainer, { className: 'panel-move-info-uses' }).element;
		this.moveInfoDescription = new Element(this.moveInfoContainer, { className: 'panel-move-info-description stroke' }).element;
		
		this.mainButton = new Element(this.container, { className: 'panel-main-button stroke', text: text.battle.endTurn[this.lang] }).element;
		this.mainButton.addEventListener('click', () => this.handlePanelButton());
		this.mainButton.addEventListener('mouseenter', () => playSound('hover0', 'ui'));
		this.displayMove(this.main.player.moves[0]);
	}

	displayMove(move) {
		this.moveSelected = move;
		this.moveInfoName.innerHTML = move.name[this.lang];
		this.moveInfoCost.innerHTML = move.cost.value;
		this.displayMoveCost(move);
		this.displayMoveUses(move);
		this.displayMoveDescription(move);
	}

	updateMove() {
		this.displayMoveCost(this.moveSelected);
		this.displayMoveUses(this.moveSelected);
		this.displayMoveDescription(this.moveSelected);
	}

	displayMoveCost(move) {
		if (move.cost.type == 'ap') {
			this.moveInfoCost.style.color = 'var(--ap)';
			this.moveInfoCostIcon.style.backgroundImage = 'url("./assets/images/icons/ap.png")';
		} else  {
			this.moveInfoCost.style.color = 'var(--mp)';
			this.moveInfoCostIcon.style.backgroundImage = 'url("./assets/images/icons/mp.png")';
		}
	}

	displayMoveUses(move) {
		if (move.uses) {
			this.moveInfoUses.innerHTML = `${text.battle.usesPerTurn[this.lang]}: ${move.uses[0]}/${move.uses[1]}`;
		} else {
			this.moveInfoUses.innerHTML = `${text.battle.cooldown[this.lang]}: ${move.cd[0]}/${move.cd[1]} ${text.battle.turns[this.lang]}`;
		}
	}

	displayMoveDescription(move) {
		if (!move.power && !move.heal) this.moveInfoDescription.innerHTML = move.description[this.lang];
		else if (move.power) {
			this.moveInfoDescription.innerHTML = text.battle.deal[this.lang];

			let damage = 0;
			Object.entries(move.power).forEach((value) => {
				if (value[0] == 'hp') damage += Math.floor(this.main.player.hp[1] * value[1]);
				else damage += (this.main.player.stats[value[0]] + this.main.player.boost[value[0]]) * value[1];
			})
			if (damage < 0) damage = 0;
			this.moveInfoDescription.innerHTML += `<span class="${move.color}"> ${Math.ceil(damage)} </span>`;

			this.moveInfoDescription.innerHTML += ` ${move.description[this.lang]}`
		} else if (move.heal) {
			this.moveInfoDescription.innerHTML = text.battle.heal[this.lang];

			let heal = 0;
			Object.entries(move.heal).forEach((value) => {
				if (value[0] == 'hp') heal += Math.floor(this.main.player.hp[1] * value[1]);
				else heal += (this.main.player.stats[value[0]] + this.main.player.boost[value[0]]) * value[1];
			})

			this.moveInfoDescription.innerHTML += `<span class="${move.color}"> ${Math.ceil(heal)} </span>`;
			this.moveInfoDescription.innerHTML += ` ${move.description[this.lang]}`
		}
	}

	handlePanelButton() {
		if (!this.panelButtonAble) return;
		playSound('endTurn', 'ui');
		if (this.main.battle.active) {
			this.main.battle.endTurn();
		} else {
			playSound('step', 'effect');
			this.main.nextRoom();
		}
	}
}

