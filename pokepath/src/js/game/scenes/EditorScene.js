import { SectionScene } from '../../utils/SectionScene.js';
import { Element } from '../../utils/Element.js';
import { text } from '../../file/text.js';
import { playSound } from '../../file/audio.js';

import { routeData } from '../data/routeData.js';
import { enemyData } from '../data/enemyData.js';

const BOUNS_OPTIONS = ['hearts', 'health', 'armor'];

export class EditorScene extends SectionScene {
	constructor(main) {
	    super();
	    this.main = main;

	    this.render();
	    this.availableMapIDs = [0];

	    this.mapPosition = 0;
	    this.mapId = 0;
	    this.wave = [];
	    this.enemySelected = 'delibird'

	    this.hearts = 14;
	    this.health = 0;
	    this.armor = 0;   
	}

	render() {
		this.betaTag = new Element(this.container, { className: 'editor-map-beta-tag stroke', text: 'WAVE CREATOR BETA' }).element;
		this.disclaimer = new Element(this.container, { className: 'editor-map-disclaimer stroke', text: `${text.editable.disclaimer[this.main.lang].toUpperCase()}` }).element;

		this.mapSelector = new Element(this.container, { className: 'editor-map-selector' }).element;
		this.mapSelectorLeft = new Element(this.mapSelector, { className: 'editor-map-selector-left stroke', text: '<' }).element;
		this.mapSelectorRight = new Element(this.mapSelector, { className: 'editor-map-selector-right stroke', text: '>' }).element;

		this.mapSelectorLeft.addEventListener('click', () => { this.changeMap(-1) })
		this.mapSelectorRight.addEventListener('click', () => { this.changeMap(1) })
		this.mapSelectorLeft.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
		this.mapSelectorRight.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })

		this.waveTimeLine = new Element(this.container, { className: 'editor-wave-time-line' }).element;

		this.waveTimeLineSlots = [];

		this.enemyContainer = new Element(this.container, { className: 'editor-enemy-container' }).element;
		this.enemies = []

		this.waveCode = new Element(this.container, { className: 'editor-map-wave-code' }).element;

		this.importCode = document.createElement('input');
		this.importCode.className = 'editor-map-import-code';
		this.importCode.type = 'text';
		this.container.appendChild(this.importCode);

		this.copyButton = new Element(this.container, {
			className: 'editor-map-copy-button stroke',
		}).element;

		this.loadButton = new Element(this.container, {
			className: 'editor-map-load-button stroke',
		}).element;

		this.copyButton.addEventListener('click', () => { this.copyCode(); });
		this.loadButton.addEventListener('click', () => { this.decodeWave(this.importCode.value); });

		this.copyButton.addEventListener('mouseenter', () => { playSound('hover1', 'ui'); });
		this.loadButton.addEventListener('mouseenter', () => { playSound('hover1', 'ui'); });

		this.importButton = new Element(this.container, { className: 'editor-map-import-button' }).element;
		this.startButton = new Element(this.container, { className: 'editor-map-start-button' }).element;

		this.pause = new Element(this.container, { className: 'editor-wave-pause stroke', text: 'PAUSE' }).element;
		this.pause.addEventListener('click', () => { this.addPause() });
		this.pause.addEventListener('mouseenter', () => { playSound('hover1', 'ui') });

		this.playButton = new Element(this.container, { className: 'editor-wave-play-button stroke' }).element;
		this.playButton.addEventListener('click', () => { this.play() });

		this.bonusContainer = new Element(this.container, { className: 'editor-wave-bonus-container' }).element;
		this.bonusOptions = {}

		BOUNS_OPTIONS.forEach(opt => {
			this.bonusOptions[opt] = new Element(this.bonusContainer, { className: 'editor-wave-bonus-option-row stroke' }).element;
			this.bonusOptions[opt].label = new Element(this.bonusOptions[opt], { className: 'editor-wave-bonus-option-label', text: `${text.editable[opt][this.main.lang].toUpperCase()}` }).element;
			this.bonusOptions[opt].left = new Element(this.bonusOptions[opt], { className: 'editor-wave-bonus-option-left', text: '<' }).element;
			this.bonusOptions[opt].value = new Element(this.bonusOptions[opt], { className: 'editor-wave-bonus-option-value' }).element;
			this.bonusOptions[opt].right = new Element(this.bonusOptions[opt], { className: 'editor-wave-bonus-option-right', text: '>' }).element;

			this.bonusOptions[opt].left.addEventListener('click', () => { this.changeOption(opt, -1) })
			this.bonusOptions[opt].right.addEventListener('click', () => { this.changeOption(opt, 1) })
			this.bonusOptions[opt].left.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
			this.bonusOptions[opt].right.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
		})

		this.renderEnemies();
	}

	renderEnemies() {
    	Object.values(enemyData).forEach((value, i) => {
    		if (value.id != 'wishiwashiSolo' && value.id != 'mew' && value.id != 'spinda' && value.id != 'superSpinda' && value.id != 'calyrex') {
    			this.enemies[i] = new Element(this.enemyContainer, { className: 'editor-enemy', image: value.sprite.base }).element;
    			this.enemies[i].addEventListener('click', () => { this.addEnemyToWave(value.id) });
    			this.enemies[i].addEventListener('mouseenter', () => { 
    				playSound('hover1', 'ui');
    				this.displayEnemyInfo(value.id);
    			})
    		}			
    	})
    }	

    updateOptions() {
    	this.bonusOptions['hearts'].value.innerText = `${this.hearts}`;
    	this.bonusOptions['health'].value.innerText = `+${this.health}%`;
    	this.bonusOptions['armor'].value.innerText = `+${this.armor}%`;

    	this.displayEnemyInfo(this.enemySelected);
    }

    changeOption(opt, value) {
    	playSound('option', 'ui');

    	switch(opt) {
    		case 'hearts':
    			this.hearts += value;
    			this.hearts = Math.max(1, Math.min(14, this.hearts));
    			break;
    		case 'health':
    			this.health += (value * 5);
    			this.health = Math.max(0, Math.min(200, this.health));
    			break;
    		case 'armor':
    			this.armor += (value * 5);
    			this.armor = Math.max(0, Math.min(200, this.armor));
    			break;
    	}

    	this.updateOptions();
    	this.updateCode();
    }

    updateMap() {
    	this.mapSelector.style.backgroundImage = `url("${routeData[this.mapId].background}")`;
    }

    setAvailableMapIDs() {
    	let mapIDs = [];
    	Object.values(routeData).forEach(route => {
    		if (route?.isSecret) {
    			switch (route.id) {
    				case 20:
    					if (this.main.player.secrets['manaphy']) mapIDs.push(route.id);
    				break;
    				case 30:
    					if (this.main.player.secrets['mew']) mapIDs.push(route.id);
    				break;
    				case 31:
    					if (this.main.player.secrets['victini']) mapIDs.push(route.id);
    				break;
    				case 32:
    					if (this.main.player.secrets['marshadow']) mapIDs.push(route.id);
    				break;
    				case 33:
    					if (this.main.player.secrets['farfetchdGalar']) mapIDs.push(route.id);
    				break;
    			}
    		} else {
    			if (this.main.player.stars >= route.unlock) mapIDs.push(route.id)
    		}
    	})
    	return mapIDs;
    }

    changeMap(dir) {
    	playSound('option', 'ui');

    	this.mapPosition += dir;

    	if (this.mapPosition === this.availableMapIDs.length) this.mapPosition = 0
    	else if (this.mapPosition === -1) this.mapPosition = this.availableMapIDs.length - 1;
    	
    	this.mapId = this.availableMapIDs[this.mapPosition];

    	this.updateMap();
    	this.updateCode();
    }

    addEnemyToWave(enemy) {
		playSound('option', 'ui');

		const last = this.wave[this.wave.length - 1];

		if (last && last.enemy === enemy) {
			last.amount++;
		} else {
			this.wave.push({
				enemy: enemy,
				amount: 1
			});
		}

		this.updateWaveTimeLine();
		this.updateCode();
	}

    addPause() {
    	playSound('option', 'ui')

    	const last = this.wave[this.wave.length - 1];

    	if (last && last.enemy === null) {
			last.amount++;
		} else {
			this.wave.push({
	    		enemy: null,
	    		amount: 1
	    	})
		}
    	
    	this.updateWaveTimeLine();
    	this.updateCode();
    }

	updateWaveTimeLine() {
    this.waveTimeLine.innerHTML = '';
    this.waveTimeLineSlots = [];

    this.wave.forEach((elm, i) => {
        this.waveTimeLineSlots[i] = new Element(this.waveTimeLine, {
            className: 'editor-wave-time-line-slot'
        }).element;

        const slot = this.waveTimeLineSlots[i];

        slot.moveLeft = new Element(slot, {
            className: 'editor-wave-time-line-slot-move-left stroke',
            text: '<'
        }).element;

        slot.sprite = new Element(slot, {
            className: 'editor-wave-time-line-slot-sprite'
        }).element;

        slot.amount = new Element(slot, {
            className: 'editor-wave-time-line-slot-amount stroke'
        }).element;

        slot.moveRight = new Element(slot, {
            className: 'editor-wave-time-line-slot-move-right stroke',
            text: '>'
        }).element;

        slot.more = new Element(slot, {
            className: 'editor-wave-time-line-slot-more stroke',
            text: '+'
        }).element;

        slot.less = new Element(slot, {
            className: 'editor-wave-time-line-slot-less stroke',
            text: '-'
        }).element;

        if (elm.enemy != null) {
            slot.sprite.style.backgroundImage =
                `url("${enemyData[elm.enemy].sprite.base}")`;
        } else {
            slot.sprite.innerText = 'PAUSE';
        }

        slot.amount.innerText = `x${elm.amount}`;

        // Desactivar visualmente los botones que no tienen movimiento posible.
        const isFirst = i === 0;
        const isLast = i === this.wave.length - 1;

        slot.moveLeft.style.opacity = isFirst ? '0.35' : '1';
        slot.moveLeft.style.pointerEvents = isFirst ? 'none' : 'auto';

        slot.moveRight.style.opacity = isLast ? '0.35' : '1';
        slot.moveRight.style.pointerEvents = isLast ? 'none' : 'auto';

        // Mover la posición a izquierda o derecha.
        slot.moveLeft.addEventListener('click', () => {
            this.moveWavePosition(i, -1);
        });

        slot.moveRight.addEventListener('click', () => {
            this.moveWavePosition(i, 1);
        });

        slot.moveLeft.addEventListener('mouseenter', () => {
            playSound('hover1', 'ui');
        });

        slot.moveRight.addEventListener('mouseenter', () => {
            playSound('hover1', 'ui');
        });

        // Añadir enemigos.
        slot.more.addEventListener('mousedown', (event) => {
            if (event.button !== 0) return;
            this.startHold(() => this.moreAmount(i));
        });

        // Reducir enemigos.
        slot.less.addEventListener('mousedown', (event) => {
            if (event.button !== 0) return;
            this.startHold(() => this.lessAmount(i));
        });

        ['mouseup', 'mouseleave'].forEach(event => {
            slot.more.addEventListener(event, () => {
                this.stopHold();
            });

            slot.less.addEventListener(event, () => {
                this.stopHold();
            });
        });
    });
}

moveWavePosition(pos, dir) {
    const newPos = pos + dir;

    // No permitir mover una posición fuera de la timeline.
    if (newPos < 0 || newPos >= this.wave.length) return;

    playSound('option', 'ui');

    // Intercambiar las posiciones.
    [this.wave[pos], this.wave[newPos]] = [
        this.wave[newPos],
        this.wave[pos]
    ];

    this.updateWaveTimeLine();
    this.updateCode();
}

    moreAmount(pos) {
		if (!this.wave[pos]) {
			this.stopHold();
			return;
		}

		playSound('hover2', 'ui');
		this.wave[pos].amount++;
		// Rebuild the timeline so indices and visuals always stay in sync
		this.updateWaveTimeLine();
		this.updateCode();
	}

	lessAmount(pos) {
		if (!this.wave[pos]) {
			this.stopHold();
			return;
		}

		playSound('hover2', 'ui');
		this.wave[pos].amount--;

		if (this.wave[pos].amount <= 0) {
			this.stopHold();
			this.wave.splice(pos, 1);
		}

		// Always rebuild — splice shifts indices so stale closures would target wrong slots
		this.updateWaveTimeLine();
		this.updateCode();
	}

	open() {
		if (this.main.area.inChallenge) return;
		if (this.main.game.stopped) return playSound('pop0', 'ui');
		if (this.isOpen) return this.close();
		
		this.main.sections.forEach(section => {
			if (section.isOpen && section != this) section.close();
		})
		
		super.open();
		this.availableMapIDs = this.setAvailableMapIDs();
		this.updateMap();
		this.updateOptions();
		this.displayEnemyInfo(this.enemySelected);
		this.main.game.cancelDeployUnit();
		this.updateCode();

		this.copyButton.innerHTML = text.editable.copy[this.main.lang].toUpperCase();
		this.loadButton.innerHTML = text.editable.load[this.main.lang].toUpperCase();
		this.playButton.innerHTML = text.editable.test[this.main.lang].toUpperCase();

		if (this.main.UI.fastScene.isOpen) this.main.UI.fastScene.close();
	}

	close() {
		super.close();
		this.main.UI.update();
		this.main.UI.displayEnemyInfo(this.main.area.waves[this.main.area.waveNumber].preview[0], 0);
	}

	buildWave() {
		const createdWave = [];
		const seenIds = new Set();
		const mons = [];

		Object.values(this.wave).forEach(value => {
			// Track by id string to avoid duplicates in the preview
			if (value.enemy != null && !seenIds.has(value.enemy)) {
				seenIds.add(value.enemy);
				mons.push(enemyData[value.enemy]);
			}

			for (let i = 0; i < value.amount; i++) {
				createdWave.push(value.enemy == null ? null : enemyData[value.enemy]);
			}
		});

		return { preview: mons, wave: createdWave };
	}

	buildMap() {
		const wave = this.buildWave();
		var map = structuredClone(routeData[this.mapId]);

		map.id = 99;
		map.order = 99;
		map.pos = -1;
		map.name = ['Custom', 'Custom', 'Custom', 'Custom', 'Custom', 'Custom', 'Custom', 'Custom', 'Custom', 'Custom'];
		map.waves = { 1: wave };
		map.mapid = 99;
		this.main.player.health[99] = this.hearts;
		
		routeData[99] = map;
	}

	play() {
		const hasEnemies = this.wave.some(slot => slot.enemy != null);

		if (!hasEnemies) {
			playSound('pop0', 'ui');
			return;
		}

		const customData = {
			hearts: this.hearts,
	    	health: this.health,
	    	armor: this.armor
		}

		const map = this.buildMap();
		this.main.area.loadArea(99, 1, false, false, true, customData);
		this.main.UI.update();
		this.main.UI.displayEnemyInfo(this.main.area.waves[this.main.area.waveNumber].preview[0], 0);
		this.main.area.checkWeather();
		this.close();
	}

	startHold(callback) {
		callback();

		this.holdTimeout = setTimeout(() => {
			this.holdInterval = setInterval(() => {
				callback();
			}, 60);
		}, 300);
	}

	stopHold() {
		clearTimeout(this.holdTimeout);
		clearInterval(this.holdInterval);
	}

	displayEnemyInfo(id) {
		this.enemySelected = id;
		const enemy = enemyData[id];

		this.main.UI.mapWavePokemonContainer.innerHTML = "";
		this.main.UI.mapWavePokemon[0] = new Element(this.main.UI.mapWavePokemonContainer, { className: 'ui-map-wave-pokemon', image: enemy.sprite.base }).element;

		let hp = Math.floor(enemy.hp * (1 + this.health * 0.01));
		let armor = Math.floor(enemy.armor * (1 + this.armor * 0.01));
		let gold = 0;

		this.main.UI.infoName.innerHTML = enemy.name[this.main.lang].toUpperCase(); 
		this.main.UI.infoHealth.innerHTML = `${text.ui.health[this.main.lang].toUpperCase()} <span class="pos-right">${hp}</span>`;
		this.main.UI.infoArmor.innerHTML =`${text.ui.armor[this.main.lang].toUpperCase()} <span class="pos-right">${armor || 0}</span>`;
		this.main.UI.infoSpeed.innerHTML =`${text.ui.speed[this.main.lang].toUpperCase()} <span class="pos-right">${enemy.speed}</span>`;
		this.main.UI.infoPower.innerHTML = `${text.ui.power[this.main.lang].toUpperCase()} <span class="pos-right">${enemy.power}</span>`;
		this.main.UI.infoRegen.innerHTML = `${text.ui.regen[this.main.lang].toUpperCase()} <span class="pos-right">${enemy.regeneration}/s</span>`;
		this.main.UI.infoStun.innerHTML = `${text.ui.stun[this.main.lang].toUpperCase()}`;
		this.main.UI.infoSlow.innerHTML = `${text.ui.slow[this.main.lang].toUpperCase()}`;
		this.main.UI.infoBurn.innerHTML = `${text.ui.burn[this.main.lang].toUpperCase()}`;
		this.main.UI.infoPoison.innerHTML = `${text.ui.poison[this.main.lang].toUpperCase()}`;
		this.main.UI.infoInvisible.innerHTML = `${text.ui.invisible[this.main.lang].toUpperCase()} <span class="pos-right">${(enemy.invisible) ? text.ui.yes[this.main.lang].toUpperCase() : text.ui.no[this.main.lang].toUpperCase()}</span>`;
		this.main.UI.infoGold.innerHTML = `${text.ui.gold[this.main.lang].toUpperCase()} <span class="pos-right">$${gold}</span>`;

		if ([6,7,8].includes(this.main.lang)) {
			this.main.UI.infoStatContainer.style.lineHeight = '10px'
		} else {
			this.main.UI.infoStatContainer.style.lineHeight = 'revert-layer'
		}

		if (enemy.passive != undefined) {
			this.main.UI.infoPassive.style.display = 'block';
			this.main.UI.infoPassive.name.innerHTML = enemy.passive.name[this.main.lang].toUpperCase();
			this.main.UI.infoPassive.description.innerHTML = enemy.passive.description[this.main.lang].toUpperCase();
		} else {
			this.main.UI.infoPassive.style.display = 'none';
		}
		
		this.main.UI.infoStun.innerHTML += (enemy.canStun) ? `<span class="pos-right">${text.ui.vulnerable[this.main.lang].toUpperCase()}</span>` : `<span class="pos-right">${text.ui.resistant[this.main.lang].toUpperCase()}</span>`
		this.main.UI.infoSlow.innerHTML += (enemy.canSlow) ? `<span class="pos-right">${text.ui.vulnerable[this.main.lang].toUpperCase()}</span>` : `<span class="pos-right">${text.ui.resistant[this.main.lang].toUpperCase()}</span>`
		this.main.UI.infoBurn.innerHTML += (enemy.canBurn) ? `<span class="pos-right">${text.ui.vulnerable[this.main.lang].toUpperCase()}</span>` : `<span class="pos-right">${text.ui.resistant[this.main.lang].toUpperCase()}</span>`
		this.main.UI.infoPoison.innerHTML += (enemy.canPoison) ? `<span class="pos-right">${text.ui.vulnerable[this.main.lang].toUpperCase()}</span>` : `<span class="pos-right">${text.ui.resistant[this.main.lang].toUpperCase()}</span>`
	}

	encodeWave() {
		const data = {
			mapId: this.mapId,
			hearts: this.hearts,
			health: this.health,
			armor: this.armor,
			wave: this.wave
		};

		return btoa(JSON.stringify(data));
	}

	updateCode() {
		this.importCode.value = this.encodeWave();
	}

	copyCode() {
		navigator.clipboard.writeText(this.importCode.value);
		playSound('option', 'ui');
	}

	decodeWave(code) {
		try {
			const data = JSON.parse(atob(code));

			this.mapId = data.mapId ?? 0;
			this.hearts = data.hearts ?? 14;
			this.health = data.health ?? 0;
			this.armor = data.armor ?? 0;
			this.wave = data.wave ?? [];

			this.updateMap();
			this.updateOptions();
			this.updateWaveTimeLine();
			this.updateCode();

			playSound('option', 'ui');
			return true;

		} catch (err) {
			return playSound('pop0', 'ui');
		}
	}
}