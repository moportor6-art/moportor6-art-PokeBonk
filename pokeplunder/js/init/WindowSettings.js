import { Window } from '../utils/Window.js';
import { Element } from '../utils/Element.js';
import { text } from '../file/text.js';
import { playSound, setVolume } from '../file/audio.js';

const OPTION = {
 	language: ['English', 'Español'],
 	audio: Array.from({ length: 21 }, (_, i) => (i * 5).toString()),
}


const audioKeys = ['master', 'music', 'ui', 'effects'];

export class WindowSettings extends Window {
	constructor(component) {
	    super(640, 450); 
	    this.component = component;
	    this.render();
	}

	getConfig() {
        return JSON.parse(window.localStorage.getItem("data")).config;
    }

	saveConfig(newConfig) {
        let data = JSON.parse(window.localStorage.getItem("data"));
        data.config = newConfig;
        window.localStorage.setItem("data", JSON.stringify(data));
    }

	render = () => {
		this.container = new Element(this.content, { className: 'menu-settings-container' }).element;

		this.general = new Element(this.container, { className: 'menu-settings-general' }).element;
		this.general.label = new Element(this.general, { className: 'menu-settings-label', text: 'GENERAL' }).element;

		this.generalRow = [];

		for (let i = 0; i < 1; i++) {
			this.generalRow[i] = new Element(this.container, { className: 'menu-settings-row' }).element;
			this.generalRow[i].label = new Element(this.generalRow[i], { className: 'menu-settings-label' }).element;
			this.generalRow[i].prev = new Element(this.generalRow[i], { className: 'menu-settings-arrow', text: '<' }).element;
			this.generalRow[i].value = new Element(this.generalRow[i], { className: 'menu-settings-value' }).element;
			this.generalRow[i].next = new Element(this.generalRow[i], { className: 'menu-settings-arrow', text: '>' }).element;

			this.generalRow[i].prev.addEventListener('click', () => {this.updateLanguage(-1)})
			this.generalRow[i].next.addEventListener('click', () => {this.updateLanguage(1)})
			this.generalRow[i].prev.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
			this.generalRow[i].next.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
		}	

		this.audio = new Element(this.container, { className: 'menu-settings-audio' }).element;
		this.audio.label = new Element(this.audio, { className: 'menu-settings-label', text: 'AUDIO' }).element;

		this.audioRow = [];
		

		for (let i = 0; i < 4; i++) {
			this.audioRow[i] = new Element(this.container, { className: 'menu-settings-row' }).element;
			this.audioRow[i].label = new Element(this.audioRow[i], { className: 'menu-settings-label' }).element;
			this.audioRow[i].prev = new Element(this.audioRow[i], { className: 'menu-settings-arrow', text: '<' }).element;
			this.audioRow[i].value = new Element(this.audioRow[i], { className: 'menu-settings-value' }).element;
			this.audioRow[i].next = new Element(this.audioRow[i], { className: 'menu-settings-arrow', text: '>' }).element;

			this.audioRow[i].prev.addEventListener('click', () => {this.updateAudio(audioKeys[i], -1)})
			this.audioRow[i].next.addEventListener('click', () => {this.updateAudio(audioKeys[i], 1)})
			this.audioRow[i].prev.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
			this.audioRow[i].next.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
		}

		this.update();
  	}

  	update = () => {
  		this.title = text.menu.settings.title[this.component.lang];
  		this.header.innerHTML = this.title;

  		this.generalRow[0].label.innerHTML = text.menu.settings.language[this.component.lang].toUpperCase();
  		this.generalRow[0].value.innerHTML = OPTION.language[this.component.lang].toUpperCase();

  		for (let i = 0; i < 4; i++) {
  			this.audioRow[i].label.innerHTML = text.menu.settings.audio[i][this.component.lang].toUpperCase();
  			this.audioRow[i].value.innerHTML = OPTION.audio[this.getConfig().audio[audioKeys[i]]]
  		}
  	}

  	updateLanguage = (dir) => {
  		let lang = this.component.lang += dir;
  		if (lang == 2) lang = 0;
  		else if (lang < 0 ) lang = 1;
  		this.component.lang = lang;

		this.update();
		this.component.update();

		let config = this.getConfig();
        config.language = lang;
        this.saveConfig(config);
        playSound('option', 'ui');
  	}

  	updateAudio = (key, dir) => {
  		let value = this.getConfig().audio[key] += dir;
       	if (value < 0) value = 0;
  		else if (value > 20 ) value = 20;

        let config = this.getConfig();
        config.audio[key] = value;
        this.saveConfig(config);
        this.update();
        setVolume();
        playSound('option', 'ui');
    };

  	open() {
  		playSound('key1', 'ui');
	    super.open(); 
	    this.update();
  	}

	close() {
  		playSound('close', 'ui');
	    super.close(); 
  	}
}