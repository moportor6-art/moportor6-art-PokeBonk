import { text } from '../../file/text.js';

export class Smeargle {
	constructor(main) {
		this.main = main;
		this.lang = main.lang;
		this.isOpen = false;
		this.moves = [];
	}

	setMoves() {
		const copy = [...this.main.movePool];
		  	for (let i = copy.length - 1; i > 0; i--) {
		    	const j = Math.floor(Math.random() * (i + 1));
		    	[copy[i], copy[j]] = [copy[j], copy[i]];
		  	}
		this.moves = copy.slice(0, 4);
	}

	learnMove(pos) {
		let move = this.moves[pos];

		this.main.player.learnMove(move);
		//quitar de la pool
		const index = this.main.movePool.findIndex(mv => mv.name[0] === move.name[0]);
		if (index !== -1) this.main.movePool.splice(index, 1); 

		this.main.eventScene.smeargleMove.forEach(move => move.className = 'event-smeargle-move-picked');
		this.main.chatScene.newMessage(`${text.event.smeargle.learnMove[this.lang]} <span class="green">${move.name[this.lang]}</span>.<br>`);
		this.main.chatScene.newMessage(text.event.smeargle.pick[this.lang]);
		this.main.panelButtonController(true);
	}

	displayMoves() {
		this.moves.forEach((move, i) => {
			this.main.eventScene.smeargleMoveName[i].innerHTML = move.name[this.lang].toUpperCase();
		})
	}

	open() {
		this.isOpen = true;
		this.main.panelButtonController(false);
		this.main.ubication = 'smeargle';

		this.main.eventScene.smeargleMove.forEach(move => move.className = 'event-smeargle-move');

		this.setMoves();
			
		this.main.eventScene.container.style.display = 'block';
		this.main.eventScene.smeargleContainer.style.display = 'block';

		this.main.chatScene.cleanMessages();
		this.main.chatScene.newMessage(text.event.smeargle.announce[this.lang]);
		this.main.chatScene.newMessage(text.event.smeargle.welcome[this.lang]);
		this.main.chatScene.newMessage(text.event.smeargle.selection[this.lang]);
		this.displayMoves();

		this.main.panelScene.mainButton.innerHTML = text.event.continue[this.lang];	
	}

	close() {
		this.isOpen = false;
		this.main.eventScene.container.style.display = 'none';
		this.main.eventScene.smeargleContainer.style.display = 'none';
	}
}