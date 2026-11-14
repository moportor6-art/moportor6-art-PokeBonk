import { Element } from './Element.js';
import { playSound } from '../file/audio.js';

export class SectionScene {
	constructor(width = 720, height = 624) {
		this.isOpen = false;
		this.width = width;
        this.height = height;

        this.container = document.createElement("div");
        this.container.className = "section-scene-container";
        this.container.style.width = `${this.width}px`;
        this.container.style.height = `${this.height}px`;
	}

	open() {
        if (!this.isOpen) {
            playSound('option', 'ui')
        	this.isOpen = true;
       		document.getElementById('screen').appendChild(this.container);
        } else this.close();
    }

    close() {
        this.isOpen = false;
        this.container.remove();
        playSound('close', 'ui');
    }
}