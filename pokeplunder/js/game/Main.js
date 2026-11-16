import { loadData } from '../file/data.js';
import { Menu } from '../init/Menu.js';
import { playMusic } from '../file/audio.js';

import { Element } from '../utils/Element.js';
import { Tooltip } from '../utils/Tooltip.js';
import { Player } from './core/Player.js';
import { Enemy } from './core/Enemy.js';
import { Inventory } from './core/Inventory.js';

import { Kecleon } from './component/Kecleon.js';
import { Delibird } from './component/Delibird.js';
import { Smeargle } from './component/Smeargle.js';
import { Ditto } from './component/Ditto.js';
import { Voltorb } from './component/Voltorb.js';
import { Chansey } from './component/Chansey.js';
import { Battle } from './component/Battle.js';
import { WindowResult } from './component/WindowResult.js';
import { KeyController } from './component/KeyController.js';

import { InfoScene } from './scene/InfoScene.js';
import { StatusScene } from './scene/StatusScene.js';
import { BattleScene } from './scene/BattleScene.js';
import { PanelScene } from './scene/PanelScene.js';
import { ChatScene } from './scene/ChatScene.js';
import { EventScene } from './scene/EventScene.js';

import { mapData } from './world/mapData.js';
import { enemyData } from './pokemon/enemyData.js';

export class Main {
	constructor(data, save, slot) {
		this.lang = JSON.parse(window.localStorage.getItem("data")).config.language; 
		this.save = save;
		this.slot = slot;

		this.map = save.map;
		this.floor = save.floor;
		this.room = save.room;

		this.kecleonPool = save.kecleonPool;
		this.delibirdPool = save.delibirdPool;
		this.movePool = save.movePool;

		// CORE
		this.player = new Player(this, save.player);
		this.enemy = new Enemy(this, save.enemy);
		this.inventory = new Inventory(this, save.inventory);

		// COMPONENT
		this.tooltip = new Tooltip(this.lang);
		this.battle = new Battle(this);
		this.result = new WindowResult(this);
		this.keys = new KeyController(this);

		// EVENT
		this.delibird = new Delibird(this);
		this.kecleon = new Kecleon(this);
		this.smeargle = new Smeargle(this);
		this.ditto = new Ditto(this);
		this.chansey = new Chansey(this);
		this.voltorb = new Voltorb(this);

		// SCENES
		this.scene = new Element(document.getElementById("screen"), { id: 'game-scene' }).element;
		this.sceneTransition = new Element(document.getElementById("screen"), { id: 'game-scene-transition' }).element;
		this.infoScene = new InfoScene(this);
		this.battleScene = new BattleScene(this);
		this.statusScene = new StatusScene(this);
		this.panelScene = new PanelScene(this);
		this.chatScene = new ChatScene(this);
		this.eventScene = new EventScene(this);

		this.loadGame();
	}

	loadGame() {
		switch(this.map.rooms[this.room]) {
			case 'enemy':
			case 'boss':
				this.battle.startBattle();	
				break;
			case 'kecleon': 
				this.kecleon.open();
				break;
			case 'delibird': 
				this.delibird.open();
				break;
			case 'smeargle': 
				this.smeargle.open();
				break;
			case 'ditto': 
				this.ditto.open();
				break;
			case 'voltorb': 
				this.voltorb.open();
				break;
			case 'chansey': 
				this.chansey.open();
				break;
		}
	}

	nextRoom() {
		this.panelButtonController(false);
		this.sceneTransition.style.animation = "none";
	    this.sceneTransition.offsetHeight;
	    this.sceneTransition.style.animation = "sceneTransition 1.2s forwards";

		setTimeout(() => {
			[this.delibird, this.kecleon, this.smeargle, this.chansey, this.voltorb, this.ditto].forEach(evt => {
				if (evt.isOpen) evt.close();
			})

			this.room++;
			if (this.room >= this.map.rooms.length) this.nextFloor();
			this.loadRoom();
		}, 600)
	}

	nextFloor() {
		this.room = 0;
		this.floor++;
		this.map = structuredClone(mapData[this.floor]);
		this.battleScene.container.style.backgroundImage = `url("${this.map.background}")`;
		this.player.changeHp(999);
		playMusic(this.map.music);
	}

	loadRoom() {
		this.infoScene.update();
		switch(this.map.rooms[this.room]) {
			case 'enemy':
				const enemySelect = this.map.enemyPool[Math.floor(Math.random() * this.map.enemyPool.length)];
				//const enemyShiny = (Math.floor(Math.random() * 100) == 1) ? true : false;
				this.enemy = new Enemy(this, structuredClone(enemyData[enemySelect]));
				this.battle.startBattle();	
				break;
			case 'boss':
				const bossSelect = this.map.bossPool[Math.floor(Math.random() * this.map.bossPool.length)];
				//const bossShiny = (Math.floor(Math.random() * 100) == 1) ? true : false;
				this.enemy = new Enemy(this, structuredClone(enemyData[bossSelect])); 
				this.battle.startBattle();	
				break;
			case 'smeargle': 
				this.smeargle.open();
				break;
			case 'kecleon': 
				this.kecleon.open();
				break;
			case 'delibird': 
				this.delibird.open();
				break;
			case 'ditto': 
				this.ditto.open();
				break;
			case 'chansey': 
				this.chansey.open();
				break;
			case 'voltorb': 
				this.voltorb.open();
				break;
		}
	}

	panelButtonController(bool) {
		if (bool) {
			this.panelScene.panelButtonAble = true;
			this.panelScene.mainButton.className = 'panel-main-button stroke';
		} else {
			this.panelScene.panelButtonAble = false;
			this.panelScene.mainButton.className = 'panel-main-button-unable stroke';
		}
	}

	exitToMenu() {
	    [this.delibird, this.kecleon, this.smeargle, this.chansey, this.voltorb, this.ditto]
	        .forEach(evt => {
	            if (evt.isOpen) evt.close();
	        });

	    if (this.scene) {
	        this.scene.remove(); 
	    }
	    if (this.sceneTransition) {
	        this.sceneTransition.remove();
	    }

	    this.player = null;
	    this.enemy = null;
	    this.inventory = null;
	    this.tooltip = null;
	    this.battle = null;
	    this.delibird = null;
	    this.kecleon = null;
	    this.smeargle = null;
	    this.ditto = null;
	    this.chansey = null;
	    this.voltorb = null;
	    this.infoScene = null;
	    this.battleScene = null;
	    this.statusScene = null;
	    this.panelScene = null;
	    this.chatScene = null;
	    this.eventScene = null;
  		
  		if (this.keys) {
			this.keys.remove();
			this.keys = null;
		}

	    setTimeout(() => {
            new Menu(loadData());
        }, 1000); 
	    
	}
}

function resize() {
	const BASE_WIDTH  = 800;
	const BASE_HEIGHT = 576;

  	const scale = Math.min(
    	window.innerWidth / BASE_WIDTH,
    	window.innerHeight / BASE_HEIGHT
  	);

  	const root = document.getElementById("screen-root");
  	root.style.transform =
    `scale(${scale})`;
}

window.addEventListener("resize", resize);
resize();