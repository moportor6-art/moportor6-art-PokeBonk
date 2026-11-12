import { Element } from '../../utils/Element.js';
import { text } from '../../file/text.js';
import { playSound } from '../../file/audio.js';

export class EventScene {
	constructor(main) {
		this.main = main;
		this.lang = main.lang;
		this.render();
	}

	render() {
		this.container = new Element(this.main.scene, { className: 'event-container' }).element;
		this.background = new Element(this.container, { className: 'event-background' }).element;
		this.background.style.backgroundImage = `url("${this.main.map.background}")`;

		// KECLEON
		this.kecleonContainer = new Element(this.container, { className: 'event-kecleon-container' }).element;
		this.kecleonSprite = new Element(this.kecleonContainer, { className: 'event-kecleon-sprite' }).element;

		this.kecleonItemContainer = new Element(this.kecleonContainer, { className: 'event-kecleon-item-container' }).element;
		this.kecleonItem = [];
		this.kecleonItemSprite = [];
		this.kecleonItemPrice = [];

		for (let i = 0; i < 8; i++) {
			this.kecleonItem[i] = new Element(this.kecleonItemContainer, { className: 'event-kecleon-item' }).element;
			this.kecleonItemSprite[i] = new Element(this.kecleonItem[i], { className: 'event-kecleon-item-sprite' }).element;
			this.kecleonItemPrice[i] = new Element(this.kecleonItem[i], { className: 'event-kecleon-item-price stroke' }).element;

			this.kecleonItemPrice[i].addEventListener('click', () => {
				this.main.kecleon.buyItem(i);
			})
			this.kecleonItemPrice[i].addEventListener('mouseenter', () => { playSound('hover0', 'ui') })
		}

		// DELIBIRD
		this.delibirdContainer = new Element(this.container, { className: 'event-delibird-container' }).element;
		this.delibirdSprite = new Element(this.delibirdContainer, { className: 'event-delibird-sprite' }).element;

		this.delibirdItemContainer = new Element(this.delibirdContainer, { className: 'event-delibird-item-container' }).element;
		this.delibirdItem = [];
		this.delibirdItemSprite = [];
		this.delibirdItemPick = [];

		for (let i = 0; i < 3; i++) {
			this.delibirdItem[i] = new Element(this.delibirdItemContainer, { className: 'event-delibird-item' }).element;
			this.delibirdItemSprite[i] = new Element(this.delibirdItem[i], { className: 'event-delibird-item-sprite' }).element;
			this.delibirdItemPick[i] = new Element(this.delibirdItem[i], { className: 'event-delibird-item-pick stroke', text: 'PICK' }).element;

			this.delibirdItemPick[i].addEventListener('click', () => {
				this.main.delibird.getItem(i);
			})
			this.delibirdItemPick[i].addEventListener('mouseenter', () => { playSound('hover0', 'ui') })
		}

		this.delibirdItem[3] = new Element(this.delibirdItemContainer, { className: 'event-delibird-item' }).element;
		this.delibirdItemSprite[3] = new Element(this.delibirdItem[3], { className: 'event-delibird-item-sprite' }).element;
		this.delibirdItemPick[3] = new Element(this.delibirdItem[3], { className: 'event-delibird-item-pick stroke', text: 'PICK' }).element;

		this.delibirdItemPick[3].addEventListener('click', () => {
			this.main.delibird.getPotion();
		})
		this.delibirdItemPick[3].addEventListener('mouseenter', () => { playSound('hover0', 'ui') })

		this.delibirdItem[4] = new Element(this.delibirdItemContainer, { className: 'event-delibird-item' }).element;
		this.delibirdItemSprite[4] = new Element(this.delibirdItem[4], { className: 'event-delibird-item-sprite' }).element;
		this.delibirdItemPick[4] = new Element(this.delibirdItem[4], { className: 'event-delibird-item-pick stroke', text: 'PICK' }).element;

		this.delibirdItemPick[4].addEventListener('click', () => {
			this.main.delibird.getRelic();
		})
		this.delibirdItemPick[4].addEventListener('mouseenter', () => { playSound('hover0', 'ui') })

		// SMEARGLE
		this.smeargleContainer = new Element(this.container, { className: 'event-smeargle-container' }).element;
		this.smeargleSprite = new Element(this.smeargleContainer, { className: 'event-smeargle-sprite' }).element;

		this.smeargleMoveContainer = new Element(this.smeargleContainer, { className: 'event-smeargle-move-container' }).element;
		this.smeargleMove = [];
		this.smeargleMoveName = [];

		for (let i = 0; i < 4; i++) {
			this.smeargleMove[i] = new Element(this.smeargleMoveContainer, { className: 'event-smeargle-move' }).element;
			this.smeargleMoveName[i] = new Element(this.smeargleMove[i], { className: 'event-smeargle-move-name stroke' }).element;

			this.smeargleMove[i].addEventListener('click', () => {
				this.main.smeargle.learnMove(i);
			})

			this.smeargleMove[i].addEventListener('mouseover', () => {
				this.main.panelScene.displayMove(this.main.smeargle.moves[i]);
				playSound('hover0', 'ui');
			})
		}

		// DITTO
		this.dittoContainer = new Element(this.container, { className: 'event-ditto-container' }).element;
		this.dittoSprite = new Element(this.dittoContainer, { className: 'event-ditto-sprite' }).element;

		this.dittoMoveContainer = new Element(this.dittoContainer, { className: 'event-ditto-move-container' }).element;
		this.dittoMove = [];
		this.dittoMoveName = [];

		for (let i = 0; i < 2; i++) {
			this.dittoMove[i] = new Element(this.dittoMoveContainer, { className: 'event-ditto-move' }).element;
			this.dittoMoveName[i] = new Element(this.dittoMove[i], { className: 'event-ditto-move-name stroke' }).element;

			this.dittoMove[i].addEventListener('click', () => {
				this.main.ditto.upgradeMove(i);
			})

			this.dittoMove[i].addEventListener('mouseover', () => {
				this.main.panelScene.displayMove(this.main.ditto.moves[i]);
				playSound('hover0', 'ui');
			})
		}

		// VOLTORB
		this.voltorbContainer = new Element(this.container, { className: 'event-voltorb-container' }).element;
		this.voltorbSprite = new Element(this.voltorbContainer, { className: 'event-voltorb-sprite' }).element;

		this.voltorbBallContainer = new Element(this.voltorbContainer, { className: 'event-kecleon-item-container' }).element;
		this.voltorbBall = [];
		this.voltorbBallSprite = [];
		this.voltorbBallPick = [];

		for (let i = 0; i < 3; i++) {
			this.voltorbBall[i] = new Element(this.voltorbBallContainer, { className: 'event-delibird-item' }).element;
			this.voltorbBallSprite[i] = new Element(this.voltorbBall[i], { className: 'event-delibird-item-sprite' }).element;
			this.voltorbBallPick[i] = new Element(this.voltorbBall[i], { className: 'event-delibird-item-pick stroke', text: 'PICK' }).element;

			this.voltorbBallPick[i].addEventListener('click', () => {
				this.main.voltorb.getBall(i);
			})
			this.voltorbBallPick[i].addEventListener('mouseenter', () => { playSound('hover0', 'ui') })
		}

		// CHANSEY
		this.chanseyContainer = new Element(this.container, { className: 'event-chansey-container' }).element;
		this.chanseySprite = new Element(this.chanseyContainer, { className: 'event-chansey-sprite' }).element;

		this.chanseyOptionContainer = new Element(this.chanseyContainer, { className: 'event-chansey-option-container' }).element;
		this.chanseyOption = [];
		this.chanseyName = [];
		this.chanseyDesciption = [];

		for (let i = 0; i < 4; i++) {
			this.chanseyOption[i] = new Element(this.chanseyOptionContainer, { className: 'event-chansey-option stroke' }).element;
			this.chanseyName[i] = new Element(this.chanseyOption[i], { className: 'event-chansey-option-name', text: text.event.chansey.option[i].name[this.lang] }).element;
			this.chanseyDesciption[i] = new Element(this.chanseyOption[i], { className: 'event-chansey-option-description', text: text.event.chansey.option[i].description[this.lang] }).element;

			this.chanseyOption[i].addEventListener('click', () => {
				this.main.chansey.pickOption(i);
			})
			this.chanseyOption[i].addEventListener('mouseenter', () => {
				playSound('hover0', 'ui');
			})
			
		}

	}

}

