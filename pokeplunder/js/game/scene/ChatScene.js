import { Element } from '../../utils/Element.js';

export class ChatScene {
	constructor(main) {
		this.main = main;
		this.lang = main.lang;
		this.render();
	}

	render() {
		this.container = new Element(this.main.scene, { className: 'chat-container' }).element;

		this.chat = new Element(this.container, { className: 'chat-box' }).element;
	}

	newMessage(msg) {
		this.chat.innerHTML += msg;
		this.chat.scrollTop = 100000;
	}

	cleanMessages() {
		this.chat.innerHTML = "";
	}
}

