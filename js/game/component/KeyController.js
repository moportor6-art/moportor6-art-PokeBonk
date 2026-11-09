export class KeyController {
	constructor(main) {
		this.main = main;
		this.keyHandler = this.keyHandler.bind(this);
		this.listen();
	}

	listen() {
		window.addEventListener('keydown', this.keyHandler);
	}

	keyHandler(e) {
		if (e.key == ' ') this.main.panelScene.handlePanelButton();
		if (
			!this.main.battle.active ||
			!this.main.battle.playing
		) return;

		switch(e.key) {
			case '1': this.main.player.useMove(this.main.player.moves[0]); break;
			case '2': this.main.player.useMove(this.main.player.moves[1]); break;
			case '3': this.main.player.useMove(this.main.player.moves[2]); break;
			case '4': this.main.player.useMove(this.main.player.moves[3]); break;
			case '5':
				if (this.main.player.moves[4]) this.main.player.useMove(this.main.player.moves[4]);
				break;
			case '6':
				if (this.main.player.moves[5]) this.main.player.useMove(this.main.player.moves[5]);
				break;
			case '7':
				if (this.main.player.moves[6]) this.main.player.useMove(this.main.player.moves[6]);
				break;
			case '8':
				if (this.main.player.moves[7]) this.main.player.useMove(this.main.player.moves[7]);
				break;
		}
	}

	remove() {
		window.removeEventListener('keydown', this.keyHandler);
	}
}
