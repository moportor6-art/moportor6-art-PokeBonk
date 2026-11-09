import { Window } from '../utils/Window.js';
import { Element } from '../utils/Element.js';
import { text } from '../file/text.js';
import { playSound } from '../file/audio.js';

const CREDITS = {
	developer: {
		label: ['Developer', 'Desarrollador'],
		content: '<a href="https://x.com/khydra98" target="_blank" class="link-red">KHYDRA</a>'
	},
	testers: {
		label: ['Testers', 'Testers'],
		content: '<a href="https://x.com/cuarzomyr" target="_blank" class="link-red">KHYTRAYER</a> & SINGA'
	},
	assets: {
		title: ['Assets', 'Recursos'],
		label: {
			0: ['Sprites', 'Sprites'],
			1: ['Items', 'Objetos'],
			2: ['Background', 'Fondos'],
			3: ['Portrait', 'Retratos'],
			4: ['Cursor', 'Cursor'],
		},
		content: {
			0: '<a href="https://pokemondb.net/sprites" target="_blank" class="link-red">POKÉMON DATABASE</a>',
			1: '<a href="https://msikma.github.io/pokesprite/overview/inventory.html" target="_blank" class="link-red">MSIKMA</a>',
			2: '<a href="https://www.deviantart.com/princess-phoenix" target="_blank" class="link-red">PRINCESS PHOENIX</a>',
			3: '<a href="https://sprites.pmdcollab.org/" target="_blank" class="link-red">PMD COLLAB</a>',
			4: ' <a href="https://kenney-assets.itch.io/cursor-pack" target="_blank" class="link-red">KENNEY</a>',
		}
	},
	disclaimer: [
		`
		This is a non-profit fangame created by a single person, and it is not affiliated with, sponsored by, or approved by Nintendo, Game Freak, or The Pokémon Company. <br><br>
		All characters, items, sprites, music, and other materials related to Pokémon are the property of their respective owners: © Nintendo, Game Freak, Creatures Inc.`,
		`
		Este es un juego fangame sin fines de lucro creado por una sola persona, y no está afiliado, patrocinado ni aprobado por Nintendo, Game Freak o The Pokémon Company. <br><br> 
		Todos los personajes, objetos, sprites, música y demás materiales relacionados con Pokémon son propiedad de sus respectivos dueños: © Nintendo, Game Freak, Creatures Inc.
		`
	],
}

export class WindowCredits extends Window {
	constructor(component) {
	    super(640, 450); 
	    this.component = component;
	    this.render();
	}

	render = () => {
		this.container = new Element(this.content, { className: 'menu-credits-container' }).element;

		this.developer = new Element(this.container, { className: 'menu-credits-developer' }).element;
		this.developer.label = new Element(this.developer, { className: 'menu-credits-label' }).element;
		this.developer.content = new Element(this.developer, { className: 'menu-credits-content' }).element;
		this.developer.content.innerHTML = CREDITS.developer.content;

		this.testers = new Element(this.container, { className: 'menu-credits-testers' }).element;
		this.testers.label = new Element(this.testers, { className: 'menu-credits-label' }).element;
		this.testers.content = new Element(this.testers, { className: 'menu-credits-content' }).element;
		this.testers.content.innerHTML = CREDITS.testers.content;

		this.assets = new Element(this.container, { className: 'menu-credits-assets' }).element;
		this.assets.label = new Element(this.assets, { className: 'menu-credits-label' }).element;

		this.assetsList = [];

		for (let i = 0; i < 5; i++) {
			this.assetsList[i] = new Element(this.container, { className: 'menu-credits-asset-list' }).element;
			this.assetsList[i].label = new Element(this.assetsList[i], { className: 'menu-credits-asset-list-label' }).element;
			this.assetsList[i].content = new Element(this.assetsList[i], { className: 'menu-credits-asset-list-content' }).element;
			this.assetsList[i].content.innerHTML = CREDITS.assets.content[i];
		}

		this.disclaimer = new Element(this.container, { className: 'menu-credits-disclaimer' }).element;

		this.update();
  	}

  	update = () => {
  		this.title = text.menu.credits.title[this.component.lang];
  		this.header.innerHTML = this.title;

  		this.developer.label.innerHTML = CREDITS.developer.label[this.component.lang].toUpperCase();
  		this.testers.label.innerHTML = CREDITS.testers.label[this.component.lang].toUpperCase();

  		this.assets.label.innerHTML = CREDITS.assets.title[this.component.lang].toUpperCase();
  		for (let i = 0; i < 5; i++) this.assetsList[i].label.innerHTML = CREDITS.assets.label[i][this.component.lang].toUpperCase();

  		this.disclaimer.innerHTML = CREDITS.disclaimer[this.component.lang]
  	}

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