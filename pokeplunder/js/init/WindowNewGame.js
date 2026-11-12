import { Window } from '../utils/Window.js';
import { Element } from '../utils/Element.js';
import { Input } from '../utils/Input.js';
import { text } from '../file/text.js';
import { playerData } from '../game/pokemon/playerData.js';
import { enemyData } from '../game/pokemon/enemyData.js';
import { mapData } from '../game/world/mapData.js';
import { itemData, kecleonData, delibirdData } from '../game/item/itemData.js';
import { ballData } from '../game/item/ballData.js';
import { playSound } from '../file/audio.js';

const POKEMON = ['pikachu', 'cubone', 'scyther', 'marill', 'sneasel', 'taillow', 'cacnea', 'croagunk', 'riolu', 'shuckle', 'sableye', 'mawile'];

export class WindowNewGame extends Window {
	constructor(component) {
	    super(640, 450); 
	    this.component = component;
	    this.dataSlot;
	    this.pokemon = {
	    	index: 0,
	    	selected: POKEMON[0]
	    };
	    this.render();
	}

	render = () => {
		this.nameLabel = new Element(this.content, { className: 'menu-new-game-name-label' }).element;
		this.nameValue = new Input(this.content, "text", {
			className: "menu-new-game-name-value",
			maxlength: 10,
		});

		this.playerContainer = new Element(this.content, { className: 'menu-new-game-player-container' }).element;
		this.playerSlot = [];
		POKEMON.forEach((pokemon, i) => {
			this.playerSlot[i] = new Element(this.playerContainer, { className: 'menu-new-game-player-slot', image: playerData[pokemon].portrait }).element;
			this.playerSlot[i].addEventListener('click', () => { 
				playSound('option', 'ui');
				this.selectPokemon(i) 
			})
			this.playerSlot[i].addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
			if (i > 8) this.playerSlot[i].innerText = 'BETA';
		})

		this.startButton = new Element(this.content, { className: 'menu-new-game-start-button' }).element;
		this.startButton.addEventListener('click', () => { this.createProfile() } )
		this.startButton.addEventListener('mouseenter', () => { playSound('hover0', 'ui') } )
		this.update();
  	}

  	update = () => {
  		this.title = text.menu.newGame[this.lang];
  		this.header.innerHTML = this.title;
  		this.nameLabel.innerHTML = text.menu.name[this.lang];
  		this.startButton.innerHTML = text.menu.start[this.lang];
  		this.nameValue.value.value = null;
  		this.nameValue.value.placeholder = this.pokemon.selected;
  	}

  	selectPokemon = (pos) => {
  		this.playerSlot.forEach(slot => {
  			slot.className = 'menu-new-game-player-slot';
  		})

  		this.pokemon.index = pos;

  		this.playerSlot[this.pokemon.index].className = 'menu-new-game-player-slot-selected';
  		this.pokemon.selected = POKEMON[this.pokemon.index];
  		this.nameValue.value.placeholder = this.pokemon.selected;	
  	}

  	open(indx) {
  		playSound('key1', 'ui');
	    super.open(); 
	    this.dataSlot = indx;
	    this.lang = this.component.lang;
	    this.selectPokemon(this.pokemon.index)

	    this.update();
  	}

  	createProfile() {
  		let profileName = this.pokemon.selected;
  		if (this.nameValue.value.value.trim() != '') profileName = this.nameValue.value.value;

  		const data = JSON.parse(window.localStorage.getItem("data"));

  		let player = structuredClone(playerData[this.pokemon.selected]);
  		let map = structuredClone(mapData[0]);
  		let enemy = structuredClone(enemyData[map.enemyPool[Math.floor(Math.random() * map.enemyPool.length)]]);
  		let kecleonPool = structuredClone(kecleonData);
  		let delibirdPool = structuredClone(delibirdData);
  		let movePool = structuredClone(player.movesPool);

  		// UPGRADES
  		const upgrades = JSON.parse(window.localStorage.getItem("data")).profile.upgrades; 
  		player.stats['hp'] += (upgrades['hp'] * 5);
  		player.stats['ap'] += (upgrades['ap']);
  		player.stats['mp'] += (upgrades['mp']);
  		player.stats['atk'] += (upgrades['atk'] * 2);
  		player.stats['spa'] += (upgrades['spa'] * 2);
  		player.stats['spe'] += (upgrades['spe'] * 2);
  		player.stats['crt'] += (upgrades['crt']);
  		player.stats['crtDmg'] += (upgrades['crtDmg'] * 2);
  		player.gold = 80 + (upgrades.gold * 5);

  		//DATA
  		player.name = profileName.toUpperCase();
  		data.save[this.dataSlot] = {
  			name: profileName,
  			player: player,
  			map: map,
  			floor: 0,
  			room: 0,
  			kecleonPool: kecleonPool,
			delibirdPool: delibirdPool,
  			movePool: movePool,
  			inventory: {
  				pokeball: ballData['pokeball'],
  				items: []
  			},
  			enemy: enemy,		
  		}

  		window.localStorage.setItem("data", JSON.stringify(data));
  		this.component.update(data);
  		playSound('select', 'ui')
  		super.close(); 
  	}



	close() {
  		playSound('close', 'ui');
	    super.close(); 
  	}
}