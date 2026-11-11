import { GameScene } from '../../utils/GameScene.js';
import { Element } from '../../utils/Element.js';
import { text } from '../../file/text.js';
import { playSound } from '../../file/audio.js';
import { Input } from '../../utils/Input.js';
import { saveData } from '../../file/data.js';

export class ChangePokemonName extends GameScene {
	constructor(main) {
		super(400, 130);
		this.main = main;
		
		this.pokemon;
		this.header.removeChild(this.closeButton);
		this.render();
	}

	render() {
		this.title.innerHTML = text.changeName.title[this.main.lang].toUpperCase();

		this.name = new Input(
			this.container, 
			"text", 
			{ 
				className: "name-change-name stroke", 
				maxlength: 10, 
			}
		);
		
		this.acceptButton = new Element(this.container, { className: 'name-change-accept-button stroke' }).element;
		this.acceptButton.addEventListener('mouseenter', () => { playSound('hover2', 'ui') })

		this.acceptButton.addEventListener('click', () => {
			if (this.name.value.value.trim() !== "") this.pokemon.alias = this.name.value.value;
			if (this.pokemon.specie?.key === 'unown') this.pokemon.updateUnownSprite();
			if (this.main.pokemonScene.isOpen) this.main.pokemonScene.update();
			this.main.UI.update();
			this.saveNameChange();
			this.close();
		})

		this.restoreButton = new Element(this.container, { className: 'name-change-restore-button stroke' }).element;
		this.restoreButton.addEventListener('mouseenter', () => { playSound('hover2', 'ui') })

		this.restoreButton.addEventListener('click', () => {
			this.pokemon.alias = undefined;
			if (this.pokemon.specie?.key === 'unown') this.pokemon.updateUnownSprite();
			if (this.main.pokemonScene.isOpen) this.main.pokemonScene.update();
			this.main.UI.update();
			this.saveNameChange();
			this.close();
		})

		this.background.addEventListener('click', (e) => { if (e.target == this.background) this.close() })
	}

	update() {
		this.name.value.placeholder = this.pokemon.alias ?? this.pokemon.name[this.main.lang].toUpperCase();
		this.acceptButton.innerText = text.changeName.rename[this.main.lang].toUpperCase();
		this.restoreButton.innerText = text.changeName.restore[this.main.lang].toUpperCase();
	}

	open(pokemon) {
		super.open();
		this.name.value.value = "";
		this.pokemon = pokemon;

		this.name.value.style.borderColor = this.main.utility.darkenColor(this.pokemon.specie.color, 0.4);
		this.window.style.borderColor = this.main.utility.darkenColor(this.pokemon.specie.color, 0.4);
		this.header.style.backgroundColor = this.main.utility.darkenColor(this.pokemon.specie.color, 0.4);
		this.acceptButton.style.background = this.main.utility.darkenColor(this.pokemon.specie.color, 0.4);
		this.restoreButton.style.background = this.main.utility.darkenColor(this.pokemon.specie.color, 0.4);

		this.update();
	}

	saveNameChange() {
		if (this.main.area.isCustom) return;
		saveData(this.main.player, this.main.team, this.main.box, this.main.area, this.main.shop, this.main.teamManager);
	}
}
