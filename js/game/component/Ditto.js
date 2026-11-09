import { text } from '../../file/text.js';
import { moveUpgradeData } from '../pokemon/moveUpgradeData.js';

export class Ditto {
	constructor(main) {
		this.main = main;
		this.lang = main.lang;
		this.moves = [];
	}

	setMoves() {
		let movesID = structuredClone(this.main.player.moves.filter((move) => move.upgrade == false))
		for (let i = movesID.length - 1; i > 0; i--) {
		    const j = Math.floor(Math.random() * (i + 1));
		    [movesID[i], movesID[j]] = [movesID[j], movesID[i]];
		}
		movesID = [movesID[0].id, movesID[1].id];

		this.moves = [structuredClone(moveUpgradeData[movesID[0]]), structuredClone(moveUpgradeData[movesID[1]])]
	}

	upgradeMove(pos) {
		let move = this.moves[pos];

		this.main.player.upgradeMove(move);

		this.main.eventScene.dittoMove.forEach(move => move.className = 'event-ditto-move-picked');
		this.main.chatScene.newMessage(`${text.event.ditto.upgradeMove[this.lang]} <span class="green">${move.name[this.lang]}</span>.<br>`);
		this.main.chatScene.newMessage(text.event.ditto.pick[this.lang]);
		this.main.panelButtonController(true);
	}

	displayMoves() {
		this.moves.forEach((move, i) => {
		 	this.main.eventScene.dittoMoveName[i].innerHTML = move.name[this.lang].toUpperCase();
		})
	}

	open() {
		this.isOpen = true;
		this.main.panelButtonController(false);
		this.main.ubication = 'ditto';

		this.main.eventScene.dittoMove.forEach(move => move.className = 'event-ditto-move');

		this.setMoves();
			
		this.main.eventScene.container.style.display = 'block';
		this.main.eventScene.dittoContainer.style.display = 'block';

		this.main.chatScene.cleanMessages();
		this.main.chatScene.newMessage(text.event.ditto.announce[this.lang]);
		this.main.chatScene.newMessage(text.event.ditto.welcome[this.lang]);
		this.main.chatScene.newMessage(text.event.ditto.selection[this.lang]);
		this.displayMoves();

		this.main.panelScene.mainButton.innerHTML = text.event.continue[this.lang];	
	}

	close() {
		this.isOpen = false;
		this.main.eventScene.container.style.display = 'none';
		this.main.eventScene.dittoContainer.style.display = 'none';
	}


}