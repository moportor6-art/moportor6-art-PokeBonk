import { text } from '../../file/text.js';
import { voltorbData } from '../item/ballData.js';
import { playSound } from '../../file/audio.js';

export class Voltorb {
	constructor(main) {
		this.main = main;
		this.lang = main.lang;
		this.balls = [];
		this.isOpen = false;
	}

	setBalls() {
		let tier = this.main.inventory.pokeball.tier;

		const copy = [...voltorbData[tier]];
		for (let i = copy.length - 1; i > 0; i--) {
		   	const j = Math.floor(Math.random() * (i + 1));
		   	[copy[i], copy[j]] = [copy[j], copy[i]];
		}
		this.balls = copy.slice(0, 3);
	}

	getBall(pos) {
		let ball = this.balls[pos];
		this.main.inventory.obtainBall(ball);

		this.main.eventScene.voltorbBall.forEach((item, i) => {
			this.main.eventScene.voltorbBall[i].style.pointerEvents = 'none';
			this.main.eventScene.voltorbBall[i].style.filter = 'brightness(0.6)';
		});
		this.main.eventScene.voltorbBallPick.forEach(item => item.style.pointerEvents = 'none');
		
		this.main.chatScene.newMessage(text.event.voltorb.pick[this.lang]);
		this.main.panelButtonController(true);
		playSound('obtain', 'ui')
	}

	displayBalls() {
		this.balls.forEach((ball, i) => {
			this.main.eventScene.voltorbBall[i].style.pointerEvents = 'all';
			this.main.eventScene.voltorbBall[i].style.filter = 'none';

			this.main.eventScene.voltorbBall[i].classList.add(`tier-${ball.tier-1}`);
			this.main.eventScene.voltorbBallSprite[i].style.backgroundImage = `url("${ball.image}")`;
			this.main.eventScene.voltorbBallPick[i].innerHTML = `PICK`;

            this.main.tooltip.bindToElement(this.main.eventScene.voltorbBallSprite[i], ball);
		})
	}

	open() {
		this.isOpen = true;
		this.main.panelButtonController(false);
		this.main.ubication = 'voltorb';

		this.main.eventScene.voltorbBall.forEach(ball => ball.className = 'event-delibird-item');
		this.main.eventScene.voltorbBallPick.forEach(item => item.style.pointerEvents = 'all');
		this.setBalls();

		this.main.eventScene.container.style.display = 'block';
		this.main.eventScene.voltorbContainer.style.display = 'block';

		this.main.chatScene.cleanMessages();
		this.main.chatScene.newMessage(text.event.voltorb.announce[this.lang]);
		this.main.chatScene.newMessage(text.event.voltorb.welcome[this.lang]);
		this.main.chatScene.newMessage(text.event.voltorb.selection[this.lang]);
		this.displayBalls();

		this.main.panelScene.mainButton.innerHTML = text.event.continue[this.lang];	
	}

	close() {
		this.isOpen = false;
		this.main.eventScene.container.style.display = 'none';
		this.main.eventScene.voltorbContainer.style.display = 'none';
	}
}