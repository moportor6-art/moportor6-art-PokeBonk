import { Element } from '../utils/Element.js';
import { Menu } from './Menu.js';
import { text } from '../file/text.js';
import { playSound, setVolume } from '../file/audio.js';

export class Init {
	constructor(data) {
	    this.data = data;
	    this.handleClick = this.handleClick.bind(this);
    	this.lang = data.config.language;
    	this.render();
	}

	handleClick() {
		this.scene.removeEventListener("click", this.handleClick);
	    this.scene.innerHTML = ''; 
	    this.createLoadingBar();
	    playSound('start', 'ui');
	    fetch("./assets/assets.json")
	    .then(res => res.json())
	    .then(assets => {
	        this.preloadAssets(assets, () => {       	
	            this.scene.remove();
	        	new Menu(this.data); 
	        });
	    });
	}

	render = () => {
	    this.scene = new Element(document.getElementById("screen"), { className: 'init-scene' }).element;
	    new Element(this.scene, { className: 'init-title', text: 'PokéPlunder' });
	    new Element(this.scene, { className: 'init-prompt', text: `${text.menu.prompt[this.lang]}` });

	    setVolume();

	    this.scene.addEventListener("click", this.handleClick);
	}

	createLoadingBar() {
		const loading = ['LOADING', 'CARGANDO']

		this.scene.style.cursor = `url("./assets/images/misc/cursor-loading.png") 0 0, auto`;
	    this.loadingText = new Element(this.scene, { className: 'loading-text', text: loading[this.lang] }).element;
	    this.loadingBarBackground = new Element(this.scene, { className: 'loading-bar-bg' }).element;
	    this.loadingBar = new Element(this.loadingBarBackground, { className: 'loading-bar' }).element;
	}

	preloadAssets(assets, onComplete) {
	    let loaded = 0;
	    const total = assets.images.length + assets.audios.length;

	    const checkLoaded = () => {
	      	loaded++;
	      	const percent = Math.floor((loaded / total) * 100);
	      	this.loadingBar.style.width = `${percent}%`;

	      	if (loaded === total) {
	        	onComplete();
	      	}
	    }
	    assets.images.forEach(src => {
	        const img = new Image();
	        img.src = src;
	        img.onload = checkLoaded;
	        img.onerror = checkLoaded; 
	    });

	    assets.audios.forEach(src => {
	        const audio = new Audio();
	        audio.src = src;
	        audio.oncanplaythrough = checkLoaded;
	        audio.onerror = checkLoaded;
	    });
	}
}

