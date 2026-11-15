import { GameScene } from '../../utils/GameScene.js';
import { Element } from '../../utils/Element.js';
import { text } from '../../file/text.js';
import { playSound, playMusic } from '../../file/audio.js';

export class DraftScene extends GameScene {
	constructor(main) {
		super(400, 200); 
		this.main = main;
		this.round = 0;
		this.roundMax = 10;

		this.pool;
		this.picks = [];
		this.header.removeChild(this.closeButton);
		this.render();
	}

	render() {
		this.title.innerHTML = text.challenge.draft.title[this.main.lang].toUpperCase();

		this.roundLabel = new Element(this.container, { className: 'tutorial-scene-title stroke' }).element;
		this.pokemonContainer = new Element(this.container, { className: 'draft-scene-pokemon-container' }).element;
		this.pokemon = []

		this.dataButtonContainer = new Element(this.container, { className: 'draft-scene-data-button-container stroke' }).element;
		this.dataButton = [];

		for (let i = 0; i < 3; i++) {
			this.pokemon[i] = new Element(this.pokemonContainer, { className: 'draft-scene-pokemon stroke' }).element;
			this.pokemon[i].label = new Element(this.pokemon[i], { className: 'draft-scene-pokemon-label stroke' }).element;
			this.pokemon[i].addEventListener('click', () => { this.selectPick(i) });
			this.pokemon[i].addEventListener('mouseenter', () => { playSound('hover1', 'ui') });

			this.dataButton[i] = new Element(this.dataButtonContainer, { className: 'draft-scene-pokemon-data stroke' }).element;
			this.dataButton[i].addEventListener('click', () => { this.main.pokemonScene.open(this.currentPicks[i], null, null, true) });
			this.dataButton[i].addEventListener('mouseenter', () => { playSound('hover3', 'ui') });
		}

		this.rerollButtonContainer = new Element(this.container, { className: 'draft-scene-reroll-container stroke' }).element;
		this.rerollButton = new Element(this.rerollButtonContainer, { className: 'draft-scene-reroll-button stroke' }).element;
		this.rerollButton.addEventListener('click', () => { 
			if (this.canReroll) this.reroll(); 
		});
		this.rerollButton.addEventListener('mouseenter', () => { 
			if (this.canReroll) playSound('hover1', 'ui'); 
		});

		this.restartButton = new Element(this.rerollButtonContainer, { className: 'draft-scene-restart-button stroke' }).element;
		this.restartButton.addEventListener('click', () => {
			this.restart();
		});
		this.restartButton.addEventListener('mouseenter', () => {
			playSound('hover1', 'ui');
		});
	}

	update() {
		this.roundLabel.innerHTML = `${text.challenge.draft.round[this.main.lang].toUpperCase()} ${this.round+1}/${this.roundMax}`;
		this.dataButton.forEach(btn => btn.innerHTML = text.ui.info[this.main.lang].toUpperCase());
		
		this.rerollButton.innerHTML = text.ui.reroll ? text.ui.reroll[this.main.lang].toUpperCase() : "REROLL";
		this.restartButton.innerHTML = text.ui.restart ? text.ui.restart[this.main.lang].toUpperCase() : "RESTART";

		if (this.canReroll) {
			this.rerollButton.classList.remove('disabled');
		} else {
			this.rerollButton.classList.add('disabled');
		}

		this.generatePicks();
	}

	reroll() {
		playSound('select', 'ui');
		this.canReroll = false; 
		this.rerollButton.classList.add('disabled');
		this.generatePicks();
	}

	restart() {
		this.main.boxScene.removeAllButton();

		this.round = 0;
		this.canReroll = true;
		this.picks = [];
		this.pool = [...this.main.team.pokemon, ...this.main.box.pokemon];

		this.update();
	}

	generatePicks() {
	    if (!this.pool || this.pool.length === 0) return;

	    for (let i = this.pool.length - 1; i > 0; i--) {
	        const j = Math.floor(Math.random() * (i + 1));
	        [this.pool[i], this.pool[j]] = [this.pool[j], this.pool[i]];
	    }

	    const routeId = this.main.area?.map?.id;
	    const requiresTile3 = [10, 11, 12, 13, 14, 15].includes(routeId);
	    const requiresTile4 = [21, 26].includes(routeId);
	    const requiresStun = routeId == 16;
	    const requiresHeal = routeId == 17;
	    const requiresPoison = routeId == 8;
	    const requiresCurse = [21, 26].includes(routeId);
	    const requiresSun = [22, 23, 24].includes(routeId);

	    const healAbilities = ['heal', 'bitterBlade', 'takeHeart'];
	    const stunAbilities = ['stunArea', 'stunMono', 'stunMonoNerf', 'static', 'zapCannon'];
	    const poisonAbilities = ['poison', 'poisonDoubleShot'];
	    const curseAbilities = ['curse', 'curseDoubleShot'];
	    const sunAbilities = ['solarBeam', 'chlorophyll', 'drySkin', 'cloudNine'];

	    let guaranteedPick = null;

	    if (this.round === 0) {
	        const guaranteedIds = [36, 4, 3, 92, 163];
	        guaranteedPick = this.pool.find(p => guaranteedIds.includes(p.id)) || null;
	    }

	    const remainingPool = guaranteedPick
	        ? this.pool.filter(p => p !== guaranteedPick)
	        : [...this.pool];

	    let picks = [];

	    const addPick = pick => {
	        if (pick && !picks.includes(pick)) {
	            picks.push(pick);
	        }
	    };

	    if (requiresCurse && [1, 2, 3, 5].includes(this.round)) {
	        const cursePick = remainingPool.find(p => curseAbilities.includes(p.ability.id)) || null;
	        addPick(guaranteedPick);
	        addPick(cursePick);
	    }

	    if (requiresSun && [1, 3, 5].includes(this.round)) {
	        const sunPick = remainingPool.find(p => sunAbilities.includes(p.ability.id)) || null;
	        addPick(guaranteedPick);
	        addPick(sunPick);
	    }

	    if (requiresTile3) {
	        const tile3Pick = remainingPool.find(p => Array.isArray(p.tiles) && p.tiles.includes(3)) || null;
	        addPick(guaranteedPick);
	        addPick(tile3Pick);

	    } else if (requiresTile4) {
	        const tile4Pick = remainingPool.find(p => Array.isArray(p.tiles) && p.tiles.includes(4)) || null;
	        addPick(guaranteedPick);
	        addPick(tile4Pick);

	    } else if (requiresHeal && this.round < 3) {
	        const healPick = remainingPool.find(p => healAbilities.includes(p.ability.id)) || null;
	        addPick(guaranteedPick);
	        addPick(healPick);

	    } else if (requiresStun && this.round < 3) {
	        const stunPick = remainingPool.find(p => stunAbilities.includes(p.ability.id)) || null;
	        addPick(guaranteedPick);
	        addPick(stunPick);

	    } else if (requiresPoison && this.round < 3) {
	        const poisonPick = remainingPool.find(p => poisonAbilities.includes(p.ability.id)) || null;
	        addPick(guaranteedPick);
	        addPick(poisonPick);

	    } else if (picks.length === 0) {
	        addPick(guaranteedPick);
	        remainingPool.slice(0, 2).forEach(addPick);
	    }

	    const used = new Set(picks);
	    const others = remainingPool.filter(p => !used.has(p));

	    while (picks.length < 3 && others.length > 0) {
	        const pick = others.shift();

	        if (!picks.includes(pick)) {
	            picks.push(pick);
	        }
	    }

	    this.currentPicks = picks.slice(0, 3);

	    for (let i = 0; i < this.pokemon.length; i++) {
	        if (this.currentPicks[i]) {
	            this.pokemon[i].style.backgroundImage =
	                `url("${this.currentPicks[i].sprite.base}")`;

	            this.pokemon[i].label.innerHTML =
	                this.currentPicks[i].alias !== undefined
	                    ? this.currentPicks[i].alias.toUpperCase()
	                    : this.currentPicks[i].name[this.main.lang].toUpperCase();
	        } else {
	            this.pokemon[i].style.backgroundImage = '';
	            this.pokemon[i].label.innerHTML = '';
	        }
	    }

	    if (!this.canReroll) {
	        const currentPicksIDs = this.currentPicks
	            .filter(p => p?.specie)
	            .map(p => p.specie.id);

	        const freeRerollIDs = [18, 84, 105];

	        const freeReroll = currentPicksIDs.some(id => freeRerollIDs.includes(id));

	        if (freeReroll) {
	            playSound('bronzor1', 'effect');
	            this.canReroll = true;
	            this.rerollButton.classList.remove('disabled');
	        }
	    }
	}

	selectPick(i) {
		playSound('select', 'ui');
		const pickedPokemon = this.currentPicks[i];
		if (!pickedPokemon) return;

		this.main.team.addPokemon(pickedPokemon);
		this.main.box.removePokemon(pickedPokemon);
		this.main.UI.update();
		const indexInPool = this.pool.indexOf(pickedPokemon);
		if (indexInPool !== -1) this.pool.splice(indexInPool, 1);

		this.round++;
		this.canReroll = true;

		if (this.round === this.roundMax) this.close();
		else this.update();
	}

	open() {
		super.open();
		this.round = 0;
		this.canReroll = true; 
		this.roundMax = (typeof this.main.area.inChallenge.slotLimit == 'number') ? this.main.area.inChallenge.slotLimit : 10;
		this.pool = [...this.main.team.pokemon, ...this.main.box.pokemon];
		this.picks = [];
		this.update();
	}

	close() {
		super.close();
	}
}