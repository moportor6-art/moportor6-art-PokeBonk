import { Blackscreen } from './Blackscreen.js';
import { Element } from './Element.js';
import { playSound } from '../file/audio.js';

export class Window {
    constructor(width, height, title = "") {
        this.isOpen = false;
        this.title = title;
        this.width = width;
        this.height = height;
        
        this.window = document.createElement("div");
        this.window.className = "window";
        this.window.style.width = `${width}px`;
        this.window.style.height = `${height}px`;

        this.header = new Element(this.window, { className: 'window-header', text: title }).element;
        this.content = new Element(this.window, { className: 'window-content' }).element;
        this.closeButton = new Element(this.window, { className: 'window-close stroke', text: '⨯' }).element;
        this.closeButton.addEventListener("click", () => this.close());
        this.closeButton.addEventListener("mouseenter", () => {playSound('hover0', 'ui');});
    }

    open() {
        if (!this.isOpen) {
            this.isOpen = true;
            this.blackscreen = new Blackscreen(this.window);
            document.getElementById("screen-root").appendChild(this.window);
        }
    }

    close() {
        this.blackscreen.destroy();
        this.isOpen = false;
        this.window.remove();
    }
}
