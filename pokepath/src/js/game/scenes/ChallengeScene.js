import { GameScene } from '../../utils/GameScene.js';
import { SectionScene } from '../../utils/SectionScene.js';
import { Element } from '../../utils/Element.js';
import { text } from '../../file/text.js';
import { routeData } from '../data/routeData.js';
import { saveData } from '../../file/data.js';
import { playSound } from '../../file/audio.js';
import { itemData } from '../data/itemData.js';
import { pokemonData } from '../data/pokemonData.js';
import { Pokemon } from '../component/Pokemon.js';

const CHALLENGES_LIST = ['lvlCap', 'slotLimit', 'toughEnemies', 'draft', 'noItems', 'permadeath', 'mirror'];
const CHALLENGES_OPTION = {
	lvlCap: [false, 75, 50],
	slotLimit: [false, 8, 6],
	toughEnemies: [false, 25, 50],
	draft: [false, true],
	noItems: [false, true],
	permadeath: [false, true],
	mirror: [false, true],
}

export class ChallengeScene extends SectionScene {
	constructor(main) {
		super();
		this.main = main;

		this.challengeSelected = 0;
		this.challengesIndex = [0, 0, 0, 0, 0, 0, 0];

		this.challenges = {
			lvlCap: false,
			slotLimit: false,
			toughEnemies: false,
			draft: false,
			noItems: false,
			permadeath: false,
			mirror: false
		};
		this.ribbonsMap = 0;

		this.render();
		this.rewardChallengeScene = new RewardChallengeScene(this.main, this);
	}

	render() {
		this.routeName = new Element(this.container, { className: 'challenge-scene-route-name stroke' }).element;

		this.challengeRow = [];
		this.ribbonContainer = [];
		this.ribbons = [[], [], [], [], [], [], []];
		this.challengeListContainer = new Element(this.container, { className: 'challenge-scene-list-container stroke' }).element;

		CHALLENGES_LIST.forEach((label, i) => {
			this.challengeRow[i] = new Element(this.challengeListContainer, { className: 'challenge-scene-list-row' }).element;
			this.challengeRow[i].label = new Element(this.challengeRow[i], { className: 'challenge-scene-list-row-label' }).element;
			this.challengeRow[i].result = new Element(this.challengeRow[i], { className: 'challenge-scene-list-row-result' }).element;
			
			this.ribbonContainer[i] = new Element(this.challengeRow[i], { className: 'challenge-scene-list-row-ribbon-container' }).element;

			const maxJ = (i <= 2) ? 2 : 1;

			for (let j = 0; j < maxJ; j++) {
				this.ribbons[i][j] = new Element(this.ribbonContainer[i], { className: 'challenge-scene-list-row-ribbon' }).element;
			}

			this.challengeRow[i].addEventListener('mouseenter', () => this.selectChallenge(i));
			this.challengeRow[i].addEventListener('click', () => this.addChallenge(i));
		});

		this.challengeInfoContainer = new Element(this.container, { className: 'challenge-scene-info-container stroke' }).element;
		this.challengeInfoTitle = new Element(this.challengeInfoContainer, { className: 'challenge-scene-info-title' }).element;
		this.challengeInfoText = new Element(this.challengeInfoContainer, { className: 'challenge-scene-info-text' }).element;

		this.challengeStartButton = new Element(this.container, { className: 'challenge-scene-start-button stroke' }).element;
		this.challengeStartButton.addEventListener('click', () => { this.startChallenge(); });
	}

	update() {
		this.routeName.innerHTML = `${this.main.area.map.name[this.main.lang].toUpperCase()} (${this.main.challengeScene.ribbonsMap}/10)`;
		this.challengeStartButton.innerHTML = text.challenge.start[this.main.lang].toUpperCase();

		Object.keys(this.challenges).forEach((challengeKey, i) => {
			const key = challengeKey;
			const val = this.challenges[key];

			this.challengeRow[i].label.innerHTML =
				text.challenge[key].title[this.main.lang].toUpperCase();

			let formatted;

			if (val === false) {
				formatted = text.challenge.off[this.main.lang].toUpperCase();
			} else {
				switch (key) {
					case 'lvlCap':
						formatted = `${text.challenge.lvlCap.level[this.main.lang].toUpperCase()} ${val}`;
						break;

					case 'slotLimit':
						formatted = `${val} ${text.challenge.slotLimit.slots[this.main.lang].toUpperCase()}`;
						break;

					case 'toughEnemies':
						formatted = `+${val}%`;
						break;
						
					default:
						formatted = text.challenge.on[this.main.lang].toUpperCase();
						break;
				}
			}

			this.challengeRow[i].result.innerHTML = formatted;

			this.challengeRow[i].result.style.color =
				(val === false) ? `var(--red)` : `var(--green)`;
		});

		const selectedKey = CHALLENGES_LIST[this.challengeSelected];
		if (selectedKey && text.challenge[selectedKey] && text.challenge[selectedKey].description) {
			this.challengeInfoTitle.innerHTML = text.challenge[selectedKey].title[this.main.lang].toUpperCase();
			this.challengeInfoText.innerHTML = text.challenge[selectedKey].description[this.main.lang].toUpperCase();
			if ([0, 4].includes(this.challengeSelected)) this.challengeInfoText.innerHTML += 
				`<br><span class="challenge-warning">${text.challenge.warning[this.main.lang].toUpperCase()}</span>`;
			if ([3].includes(this.challengeSelected)) this.challengeInfoText.innerHTML += 
				`<br><span class="challenge-debuff">${text.challenge.bossDebuff[this.main.lang].toUpperCase()}</span>`;
		} else {
			this.challengeInfoTitle.innerHTML = "";
			this.challengeInfoText.innerHTML = '';
		}

		const hasActiveChallenge = Object.values(this.challenges).some(v => v !== false);

		if (!hasActiveChallenge) {
			this.challengeStartButton.style.filter = 'brightness(0.8)';
			this.challengeStartButton.style.pointerEvents = 'none';
		} else {
			this.challengeStartButton.style.color = `var(--white)`;
			this.challengeStartButton.style.filter = 'revert-layer';
			this.challengeStartButton.style.pointerEvents = 'revert-layer';
		}

		if (this.main.area.inChallenge) {
			this.challengeStartButton.innerHTML = text.challenge.surrender[this.main.lang].toUpperCase();
			this.challengeStartButton.style.filter = 'revert-layer';
			this.challengeStartButton.style.pointerEvents = 'revert-layer';
		}
	}

	selectChallenge(i) {
		playSound('hover1', 'ui');
		this.challengeSelected = i;
		this.update();
	}

	addChallenge(i) {
		if (this.main.area.inChallenge) {
			playSound('pop0', 'ui');
			return;
		}

		playSound('option', 'ui');

		const key = CHALLENGES_LIST[i];
		if (!key) return;

		this.challengesIndex[i] = (this.challengesIndex[i] + 1) % CHALLENGES_OPTION[key].length;
		this.challenges[key] = CHALLENGES_OPTION[key][this.challengesIndex[i]];

		this.update();
	}

	startChallenge() {
		if (this.main.area.inChallenge) return this.surrender();

		this.main.area.repeat = false;
		this.main.UI.waveSelectorBlock.style.background = 'revert-layer';

		this.main.boxScene.removeAllItems();
		this.main.boxScene.removeAllButton();

		if (typeof this.challenges.lvlCap === 'number' && this.challenges.lvlCap > 0) {
			const capLevel = this.challenges.lvlCap;
			const pokemon = [...this.main.team.pokemon, ...this.main.box.pokemon];
			pokemon.forEach(poke => poke.setStatsLevel(capLevel))
		}

		this.main.game.chrono.restart();
		this.main.UI.chrono.innerHTML = '00:00:00.00';

		this.main.area.loadArea(this.main.area.routeNumber, 1, false, this.challenges);
		this.main.UI.update();
		this.main.player.getHealed(14);
		if (this.challenges.draft) this.main.teamManager.clearDraftTeams();
		if (this.challenges.draft) this.main.draftScene.open();
		if (!this.main.area.isCustom) saveData(this.main.player, this.main.team, this.main.box, this.main.area, this.main.shop, this.main.teamManager);

		this.main.UI.displayEnemyInfo(this.main.area.waves[this.main.area.waveNumber].preview[0], 0);
		this.main.area.checkWeather();
		this.close();
		playSound('step', 'ui');
	}

	surrender() {
		playSound('results', 'ui');
		this.cancelChallenge();
		this.close();
	}

	cancelChallenge() {
		this.main.game.chrono.stop();
		this.main.area.inChallenge = false;

		const pokemon = [...this.main.team.pokemon, ...this.main.box.pokemon];
		pokemon.forEach(poke => poke.updateStats());

		this.main.boxScene.removeAllItems();
		this.main.boxScene.removeAllButton();

		this.main.area.checkWeather();
		this.main.UI.update();

		this.main.game.cancelDeployUnit();
	}

	open() {
		if (
			this.main.area.isCustom ||
			this.main.player.stars < 540 ||
			this.main.player.records[this.main.area.map.id] < 100 ||			
			(this.main.team.pokemon.length + this.main.box.pokemon.length) < 30
		) return;

		if (this.main.game.stopped) return playSound('pop0', 'ui');
		if (this.isOpen) return this.close();
		this.main.sections.forEach(section => {
			if (section.isOpen && section != this) section.close();
		})

		super.open();
		this.selectChallenge(0);
		this.displayRibbon();
		this.rewardChallengeScene.update();
		this.main.game.cancelDeployUnit();
		this.main.UI.section['challenge'].classList.add('is-selected');

		this.routeName.innerHTML = `${this.main.area.map.name[this.main.lang].toUpperCase()} (${this.main.challengeScene.ribbonsMap}/10)`;
		if (this.main.UI.fastScene.isOpen) this.main.UI.fastScene.close();
	}

	close() {
		super.close();
		this.main.UI.section['challenge'].classList.remove('is-selected');
		this.main.tooltip.hide();
	}

	displayRibbon() {
		this.ribbonsMap = 0;

		CHALLENGES_LIST.forEach((label, i) => {
			const route = this.main.area.routeNumber;

			const challengeData =
				this.main.player.challenges[label] &&
				this.main.player.challenges[label][route]
					? this.main.player.challenges[label][route]
					: [];

			const maxJ = (i <= 2) ? 2 : 1;

			for (let j = 0; j < maxJ; j++) {
				this.ribbons[i][j].style.filter = `brightness(0.5) grayscale(100%)`;

				if (challengeData[j]) {
					this.ribbons[i][j].style.filter = `none`;
					this.ribbonsMap++;
				}
			}
		});
	}
}

class RewardChallengeScene {
	constructor(main, parent) {
		this.main = main;
		this.parent = parent;

		this.scene;
		this.position;

		this.rewards = [];
		this.prices = [2, 3, 5, 1];

		this.render();
	}

	render() {
		this.window = document.createElement('div');
		this.window.className = 'reward-scene-window stroke';

		this.container = new Element(this.window, { className: 'reward-scene-container' }).element;
		this.parent.container.appendChild(this.window);

		this.slotContainer = new Element(this.container, { className: 'reward-scene-slot-container' }).element;
		this.slot = [];
		for (let i = 0; i < 4; i++) {
			const slotEl = new Element(this.slotContainer, { className: 'reward-scene-item' }).element;
			slotEl.claimButton = new Element(slotEl, { className: 'reward-scene-claim' }).element;

			slotEl.addEventListener('mouseenter', () => { playSound('hover3', 'ui') });

			// use the element reference (slotEl) so closure doesn't capture loop index
			slotEl.addEventListener('click', () => {
				// rewardIndex will be assigned in update(); guard if not yet set
				if (typeof slotEl.rewardIndex !== 'number') return;

				if (slotEl.rewardType === 'pokemon') {
					this.claimPokemon(slotEl.rewardIndex, slotEl.rewardData);
				} else {
					this.claimItem(slotEl.rewardIndex, slotEl.rewardData);
				}
			});

			this.slot[i] = slotEl;
		}
	}

	update() {
		this.rewards = this.main.area.map.challengeReward || [];

		const entries = this.rewards.map((reward, i) => ({
			reward,
			price: this.prices[i],
			index: i
		}));

		entries.sort((a, b) => a.price - b.price);

		for (let visualIndex = 0; visualIndex < entries.length; visualIndex++) {
			const { reward, price, index } = entries[visualIndex];
			const slot = this.slot[visualIndex];

			// store logical index and price on the slot for click handlers and checks
			slot.rewardIndex = index;
			slot.rewardPrice = price;

			slot.claimButton.innerText =
				text.challenge.claim[this.main.lang].toUpperCase();

			if (index === 1) {
				slot.style.backgroundImage = `url("./src/assets/images/icons/egg.png")`;

				slot.rewardType = 'pokemon';
				slot.rewardData = pokemonData[reward];

				this.main.tooltip.bindTo(
					slot,
					{ name: text.shop.eggName, description: text.challenge.egg },
					'item'
				);
			} else {
				slot.style.backgroundImage = `url("${itemData[reward].sprite}")`;
				slot.rewardType = 'item';
				slot.rewardData = itemData[reward];
				this.main.tooltip.bindTo(slot, itemData[reward], 'item');
			}

			const claimed = this.main.player.rewards[index][this.main.area.routeNumber];

			const hasItem =
				itemData[reward]?.isEquipable &&
				this.main.player.items.some(item => item?.id === reward);

			const hasPokemon =
				pokemonData[reward] &&
				[
					...this.main.team.pokemon,
					...this.main.box.pokemon
				].some(pokemon => pokemon?.specie?.id === pokemonData[reward].id);

			const canReclaimChangedItem =
				itemData[reward]?.isEquipable &&
				!hasItem;

			const canReclaimPokemon =
				pokemonData[reward] &&
				!hasPokemon;

			const canReclaim = canReclaimChangedItem || canReclaimPokemon;

			if (this.main.challengeScene.ribbonsMap < price) {
				slot.claimButton.innerHTML = `${price}<img class="reward-scene-claim-ribbon" src="./src/assets/images/icons/ribbon1.png" />`;
				slot.style.filter = 'brightness(0.6)';
				slot.style.pointerEvents = 'all';
			} else if (hasItem || hasPokemon || (claimed && !canReclaim)) {
				slot.claimButton.innerHTML =
					text.challenge.claimed[this.main.lang].toUpperCase();
				slot.style.filter = 'brightness(0.6)';
				slot.style.pointerEvents = 'none';
			} else {
				slot.style.filter = 'revert-layer';
				slot.style.pointerEvents = 'all';
			}
		}
	}

	claimPokemon(rewardIndex, pokemon) {
		const price = this.prices[rewardIndex];

		const claimed =
			this.main.player.rewards[rewardIndex][this.main.area.routeNumber];

		const canReclaimEgg =
			pokemon &&
			![
				...this.main.team.pokemon,
				...this.main.box.pokemon
			].some(poke => poke?.specie?.id === pokemon.id);

		if (
			this.main.challengeScene.ribbonsMap < price ||
			(claimed && !canReclaimEgg)
		) return;

		playSound('purchase', 'ui');

		if (
			this.main.team.pokemon.length < this.main.player.teamSlots &&
			typeof this.main.area.inChallenge.slotLimit != 'number'
		) {
			this.main.team.addPokemon(new Pokemon(pokemon, 1, null, this.main));
			this.main.shopScene.displayPokemon.open(this.main.team.pokemon.at(-1));
		} else {
			this.main.box.addPokemon(new Pokemon(pokemon, 1, null, this.main));
			this.main.shopScene.displayPokemon.open(this.main.box.pokemon.at(-1));
		}

		this.main.player.stats.pokemonOwned++;
		this.main.player.stats.totalPokemonLevel++;

		this.main.player.rewards[rewardIndex][this.main.area.routeNumber] = true;

		if (!this.main.area.isCustom) saveData(
			this.main.player,
			this.main.team,
			this.main.box,
			this.main.area,
			this.main.shop,
			this.main.teamManager
		);

		this.main.tooltip.hide();
		this.main.UI.update();
		this.update();
	}

	claimItem(rewardIndex, item) {
		const price = this.prices[rewardIndex];

		const claimed =
			this.main.player.rewards[rewardIndex][this.main.area.routeNumber];

		const hasItem =
			item?.isEquipable &&
			this.main.player.items?.some(ownedItem => ownedItem?.id === item.id);

		const canReclaimChangedItem =
			item?.isEquipable &&
			!hasItem;

		if (
			this.main.challengeScene.ribbonsMap < price ||
			hasItem ||
			(claimed && !canReclaimChangedItem)
		) return;

		playSound('purchase', 'ui');

		this.main.player.rewards[rewardIndex][this.main.area.routeNumber] = true;

		if (item.isEquipable) {
			this.main.player.obtainItem(item);
			this.main.player.itemAmount++;
		}

		if (item?.amount > 0) {
			this.main.player.changeGold(item.amount);
		}

		if (!this.main.area.isCustom) saveData(
			this.main.player,
			this.main.team,
			this.main.box,
			this.main.area,
			this.main.shop,
			this.main.teamManager
		);

		if (item.id == 'subwoofer') this.main.player.hasSubwoofer = true;

		this.main.tooltip.hide();
		this.main.UI.update();
		this.update();
	}
}
