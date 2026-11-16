import { SectionScene } from '../../utils/SectionScene.js';
import { Element } from '../../utils/Element.js';
import { Input } from '../../utils/Input.js';
import { text } from '../../file/text.js';
import { playSound } from '../../file/audio.js';

import { pokemonData, allPokemon } from '../data/pokemonData.js';
import { enemyData } from '../data/enemyData.js';
import { tutorials, secretPokemon } from '../data/tutorialData.js';

const POKEMON_SORT = [
	'default',
	'acquisitionUp',
	'acquisitionDown',
	'alphabeticalUp',
	'alphabeticalDown',
	'powerUp',
	'powerDown',
	'speedUp',
	'speedDown',
	'criticalUp',
	'criticalDown',
	'rangeUp',
	'rangeDown',
];

const ENEMY_SORT = [
	'default',
	'defeatedUp',
	'defeatedDown',
	'alphabeticalUp',
	'alphabeticalDown',
	'elite',
	'boss',
	'healthUp',
	'healthDown',
	'armorUp',
	'armorDown',
	'speedUp',
	'speedDown',
	'powerUp',
	'powerDown',
	'regenerationUp',
	'regenerationDown',
	'invisible',
];

export class DexScene extends SectionScene {
	constructor(main) {
		super();
		this.main = main;

		this.mode = 'tutorials';
		this.selected = null;

		this.tabs = [];
		this.entries = [];

		this.sortedTower = 0; 
		this.sortedEnemy = 0; 
		this.pokemonStatRanks = new Map();

		this.render();
	}

	render() {
		this.tabContainer = new Element(this.container, {
			className: 'dex-scene-tabs stroke'
		}).element;

		this.tabs[0] = new Element(this.tabContainer, {
			className: 'dex-scene-tab',
			text: text.files.tutorials[this.main.lang].toUpperCase()
		}).element;

		this.tabs[1] = new Element(this.tabContainer, {
			className: 'dex-scene-tab',
			text: text.files.towers[this.main.lang].toUpperCase()
		}).element;

		this.tabs[2] = new Element(this.tabContainer, {
			className: 'dex-scene-tab',
			text: text.files.enemies[this.main.lang].toUpperCase()
		}).element;

		this.tabs[0].addEventListener('click', () => {
			this.changeMode('tutorials');
		});

		this.tabs[1].addEventListener('click', () => {
			this.changeMode('pokemon');
		});

		this.tabs[2].addEventListener('click', () => {
			this.changeMode('enemies');
		});

		this.list = new Element(this.container, {
			className: 'dex-scene-list'
		}).element;

		this.search = new Input(
		    this.container,
		    "text",
		    {
		        className: "dex-scene-search",
		        maxlength: 20,
		        cb: () => {
		            if (this.isUnownConversationOpen()) return;
		            this.update();
		        }
		    }
		);

		this.search.value.addEventListener('keydown', event => {
		    if (event.key !== 'Enter' || !this.isUnownConversationOpen()) return;

		    event.preventDefault();
		    event.stopPropagation();

		    this.handleUnownInput();
		});

		this.sortContainer = new Element(this.container, { className: 'dex-scene-sort-container stroke' }).element;

		this.sortArrowLeft = new Element(this.sortContainer, { className: 'dex-scene-sort-arrow', text: '<' }).element;
		this.sortValue = new Element(this.sortContainer, { className: 'dex-scene-sort-value' }).element;
		this.sortArrowRight = new Element(this.sortContainer, { className: 'dex-scene-sort-arrow', text: '>' }).element;

		this.sortArrowLeft.addEventListener('click', () => { this.changeSort(-1) })
		this.sortArrowRight.addEventListener('click', () => { this.changeSort(1) })
		
		this.sortArrowLeft.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
		this.sortArrowRight.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })

		this.update();
	}

	changeMode(mode) {
		if (this.mode === mode) return;

		playSound('option', 'ui');

		this.mode = mode;
		this.selected = null;

		this.update();
	}

	update() {
		this.tabs.forEach((tab, i) => {
			if (
				(i === 0 && this.mode === 'tutorials') ||
				(i === 1 && this.mode === 'pokemon') ||
				(i === 2 && this.mode === 'enemies')
			) {
				tab.classList.add('active');
			} else {
				tab.classList.remove('active');
			}
		});

		this.updateSort();

		if (this.mode === 'tutorials') {
			this.list.style.bottom = '0px';
			this.search.value.style.display = 'none';
			this.sortContainer.style.display = 'none';
		} else {
			this.list.style.bottom = '40px';
			this.search.value.style.display = '';
			this.sortContainer.style.display = '';
		}

		this.list.innerHTML = '';
		this.entries = [];

		if (this.mode === 'tutorials') {
			this.renderTutorials();
		} else if (this.mode === 'pokemon') {
			this.renderPokemon();
		} else {
			this.renderEnemies();
		}
	}

	updateSort() {
		if (this.mode === 'tutorials') {
			this.sortContainer.style.display = 'none';
			return;
		}

		this.sortContainer.style.display = 'flex';

		if (this.mode === 'pokemon') {
			const sort = POKEMON_SORT[this.sortedTower];

			const labels = {
				default: text.box.default[this.main.lang],

				alphabeticalUp: `↑ ${text.box.alphabetical[this.main.lang]}`,
				alphabeticalDown: `↓ ${text.box.alphabetical[this.main.lang]}`,

				levelUp: `↑ ${text.box.level[this.main.lang]}`,
				levelDown: `↓ ${text.box.level[this.main.lang]}`,

				abilityUp: `↑ ${text.box.ability[this.main.lang]}`,
				abilityDown: `↓ ${text.box.ability[this.main.lang]}`,

				powerUp: `↑ ${text.box.power[this.main.lang]}`,
				powerDown: `↓ ${text.box.power[this.main.lang]}`,

				speedUp: `↑ ${text.box.speed[this.main.lang]}`,
				speedDown: `↓ ${text.box.speed[this.main.lang]}`,

				criticalUp: `↑ ${text.box.critical[this.main.lang]}`,
				criticalDown: `↓ ${text.box.critical[this.main.lang]}`,

				rangeUp: `↑ ${text.box.range[this.main.lang]}`,
				rangeDown: `↓ ${text.box.range[this.main.lang]}`,

				acquisitionUp: `↑ ${text.box.acquisition[this.main.lang]}`,
				acquisitionDown: `↓ ${text.box.acquisition[this.main.lang]}`
			};

			this.sortValue.innerHTML = labels[sort].toUpperCase();
		} else {
			const sort = ENEMY_SORT[this.sortedEnemy];

			const labels = {
				default: text.box.default[this.main.lang],

				elite: text.enemy.sort.elite[this.main.lang],
				boss: text.enemy.sort.boss[this.main.lang],

				alphabeticalUp: `↑ ${text.box.alphabetical[this.main.lang]}`,
				alphabeticalDown: `↓ ${text.box.alphabetical[this.main.lang]}`,

				healthUp: `↑ ${text.ui.health[this.main.lang]}`,
				healthDown: `↓ ${text.ui.health[this.main.lang]}`,

				armorUp: `↑ ${text.ui.armor[this.main.lang]}`,
				armorDown: `↓ ${text.ui.armor[this.main.lang]}`,

				speedUp: `↑ ${text.ui.speed[this.main.lang]}`,
				speedDown: `↓ ${text.ui.speed[this.main.lang]}`,

				powerUp: `↑ ${text.ui.power[this.main.lang]}`,
				powerDown: `↓ ${text.ui.power[this.main.lang]}`,

				regenerationUp: `↑ ${text.enemy.sort.regeneration[this.main.lang]}`,
				regenerationDown: `↓ ${text.enemy.sort.regeneration[this.main.lang]}`,

				invisible: `${text.ui.invisible[this.main.lang]}`,

				defeatedUp: `↑ ${text.enemy.sort.defeated[this.main.lang]}`,
				defeatedDown: `↓ ${text.enemy.sort.defeated[this.main.lang]}`
			};

			this.sortValue.innerHTML = labels[sort].toUpperCase();
		}
	}

	renderTutorials() {
		for (let i = 0; i < tutorials.length; i++) {
			const tutorial = tutorials[i];

			const entry = this.createEntry(
				{ name: tutorial.title },
				i,
				'tutorial',
				true
			);

			entry.tutorial = tutorial;
			this.entries.push(entry);
		}
	}

	renderEnemies() {
		let enemyList = [];

		Object.values(enemyData).forEach((enemy, i) => {
			if (!enemy) return;

			if (
				enemy.id === 'superCaterpie' ||
				enemy.id === 'wishiwashiSolo'
			) {
				return;
			}

			enemyList.push({
				data: enemy,
				discovered: this.isEnemyDefeated(enemy),
				defaultIndex: i
			});
		});

		const searchValue = this.getSearchValue();

		if (searchValue) {
			enemyList = enemyList.filter(enemyEntry => {
				const enemy = enemyEntry.data;

				const name =
					enemy?.name?.[this.main.lang]?.toLowerCase() || '';

				const id =
					enemy?.id?.toLowerCase() || '';

				return (
					name.includes(searchValue) ||
					id.includes(searchValue)
				);
			});
		}

		this.sortEnemyList(enemyList);

		enemyList.forEach((enemyDataEntry, i) => {
			const entry = this.createEntry(
				enemyDataEntry.data,
				i,
				'enemy',
				enemyDataEntry.discovered
			);

			this.entries.push(entry);
		});
	}

	createEntry(data, index, type, discovered = false) {
		const entry = new Element(this.list, {
			className: 'dex-scene-entry stroke'
		}).element;

		entry.data = data;
		entry.index = index;
		entry.type = type;
		entry.expanded = false;
		entry.discovered = discovered;

		if (!discovered) {
			entry.classList.add('locked');
		}

		if (type !== 'tutorial') {
			entry.sprite = new Element(entry, {
				className: 'dex-scene-entry-sprite'
			}).element;

			const sprite = data.sprite?.base
				|| data.specie?.sprite?.base;

			if (sprite) entry.sprite.style.backgroundImage = `url("${sprite}")`;
			

			let levelText = '???';

			if (type === 'pokemon') {
				levelText = discovered && data.lvl != null
					? `Lv. ${data.lvl}`
					: '???';
			} else if (discovered) {
				levelText = text.ui.registered[this.main.lang].toUpperCase();
			}

			entry.level = new Element(entry, {
				className: 'dex-scene-entry-level',
				text: levelText
			}).element;
		}

		entry.name = new Element(entry, {
			className: 'dex-scene-entry-name',
			text: this.getName(data)
		}).element;

		entry.addEventListener('click', () => {
			playSound('click1', 'ui');
			this.toggleEntry(entry);
		});

		entry.addEventListener('mouseenter', () => {
			playSound('hover1', 'ui');
		});

		return entry;
	}


	toggleEntry(entry) {
		if (this.selected && this.selected !== entry) {
			this.closeEntry(this.selected);
		}

		if (entry.expanded) {
			this.closeEntry(entry);
		} else {
			this.openEntry(entry);
		}
	}

	openEntry(entry) {
		entry.expanded = true;
		entry.classList.add('expanded');
		this.selected = entry;
		if (this.isUnownEntry(entry)) this.search.value.value = '';

		entry.dataContainer = new Element(entry, { className: 'dex-scene-entry-data' }).element;

		if (entry.type === 'pokemon') {
			this.renderPokemonData(entry, entry.dataContainer);
		} else if (entry.type === 'enemy') {
			this.renderEnemyData(entry, entry.dataContainer);
		} else if (entry.type === 'tutorial') {
			this.renderTutorialData(entry, entry.dataContainer);
		}


		requestAnimationFrame(() => {
			const targetScroll = entry.offsetTop - (this.list.clientHeight - entry.offsetHeight) / 2;
			const maxScroll = this.list.scrollHeight - this.list.clientHeight;
			this.list.scrollTop = Math.max(0, Math.min(targetScroll, maxScroll));
		});
	}
	closeEntry(entry) {
		entry.expanded = false;
		entry.classList.remove('expanded');

		if (entry.dataContainer) {
			entry.dataContainer.remove();
			entry.dataContainer = null;
		}

		if (this.selected === entry) {
			this.selected = null;
		}
	}

	getSearchValue() {
		return this.search.value.value
			.toLowerCase()
			.trim();
	}

	renderPokemon() {
		const pokes = [
			...(this.main.box?.pokemon || []),
			...(this.main.team?.pokemon || [])
		];

		const ownedPokemon = new Map();

		pokes.forEach(pokemon => {
			if (pokemon?.id != null) {
				ownedPokemon.set(pokemon.id, pokemon);
			}
		});

		let pokemonList = [];

		for (let i = 0; i < allPokemon.length; i++) {
		    const specieKey = allPokemon[i];
		    const basePokemon = pokemonData[specieKey];

		    if (!basePokemon) continue;

		    const owned = ownedPokemon.get(basePokemon.id);

		    const isUnown = specieKey === 'unown' || basePokemon.key === 'unown';
		    const showUnownByFont = isUnown && !owned && this.main.font === 4;

		    
		    if (isUnown && !owned && !showUnownByFont) continue;

		    pokemonList.push({
		        data: owned || basePokemon,
		        basePokemon,
		        discovered: owned != null || showUnownByFont,
		        owned: owned != null,
		        unownShownByFont: showUnownByFont,
		        defaultIndex: i
		    });
		}

		const searchValue = this.getSearchValue();

		if (searchValue) {
			pokemonList = pokemonList.filter(pokemonEntry => {
				const pokemon = pokemonEntry.data;

				const name =
					pokemon?.name?.[this.main.lang]
						?.toLowerCase()
						.replace(/^m-/, '') || '';

				const ability =
					pokemon?.ability?.name?.[this.main.lang]
						?.toLowerCase() || '';

				const alias =
					pokemon?.alias?.toLowerCase() || '';

				return (
					name.includes(searchValue) ||
					ability.includes(searchValue) ||
					alias.includes(searchValue)
				);
			});
		}

		this.sortPokemonList(pokemonList);

		pokemonList.forEach((pokemonDataEntry, i) => {
			const entry = this.createEntry(
				pokemonDataEntry.data,
				i,
				'pokemon',
				pokemonDataEntry.discovered
			);

			entry.basePokemon = pokemonDataEntry.basePokemon;
			entry.owned = pokemonDataEntry.owned;
			entry.unownShownByFont = pokemonDataEntry.unownShownByFont;

			this.entries.push(entry);
		});
	}

	renderPokemonData(entry, container) {
		const pokemon = entry.data;
		const ranks = this.pokemonStatRanks.get(pokemon.id) ?? {};

		const isUnown = entry.basePokemon?.key === 'unown' || pokemon.specie?.key === 'unown' || pokemon.key === 'unown';

		if (isUnown && entry.unownShownByFont && !entry.owned) {
			this.renderUnownDialogue(container);
			return;
		}

		if (secretPokemon.includes(pokemon.key) && pokemon.acquisitionDate === undefined) {
			this.addDescription(
			    container,
			    text.hints[pokemon.key].title[this.main.lang] || '',
			    text.hints[pokemon.key].text[this.main.lang] || ''
			);
			return;
		}


		const power = typeof pokemon.power === 'number' ? pokemon.power : pokemon.power?.base ?? '-';

		const speed = typeof pokemon.speed === 'number'
			? `${(pokemon.speed / 1000).toFixed(2)}s`
			: pokemon.speed?.base != null
				? `${(pokemon.speed.base / 1000).toFixed(2)}s`
				: '-';

		const critical = typeof pokemon.critical === 'number'
			? `${pokemon.critical.toFixed(1)}%`
			: pokemon.critical?.base != null
				? `${pokemon.critical.base.toFixed(1)}%`
				: '-';

		const range = typeof pokemon.range === 'number' ? pokemon.range : pokemon.range?.base ?? '-';

		this.addDataRow(container, text.pokemon.power[this.main.lang].toUpperCase(), power);
		this.addDataRow(container, text.pokemon.speed[this.main.lang].toUpperCase(), speed);
		this.addDataRow(container, text.pokemon.critical[this.main.lang].toUpperCase(), critical);
		this.addDataRow(container, text.pokemon.range[this.main.lang].toUpperCase(), range);

		this.addDataRow(
			container,
			text.pokemon.rangeType[this.main.lang].toUpperCase(),
			this.getPokemonRangeType(pokemon).toUpperCase()
		);

		this.addDataRow(
			container,
			text.pokemon.terrain[this.main.lang].toUpperCase(),
			this.getPokemonTerrain(pokemon)
		);

		if (this.main.player.hasNox && pokemon.acquisitionDate) {
			const stats = this.getPokemonStats(pokemon);
			this.addDataRow(container, text.pokemon.stadistics.damage[this.main.lang].toUpperCase(), this.main.utility.numberDot(Math.floor(stats.damage), this.main.lang), true, ranks.damage);
			this.addDataRow(container, text.pokemon.stadistics.highestHit[this.main.lang].toUpperCase(), this.main.utility.numberDot(Math.floor(stats.highestHit), this.main.lang), true, ranks.highestHit);
			this.addDataRow(container, text.pokemon.stadistics.deployed[this.main.lang].toUpperCase(), this.main.utility.numberDot(stats.deployed, this.main.lang), true, ranks.deployed);
			this.addDataRow(container, text.pokemon.stadistics.active[this.main.lang].toUpperCase(), this.main.utility.minutsToTime(Math.floor(stats.active / 60)), true, ranks.active);
			this.addDataRow(container, text.pokemon.stadistics.waves[this.main.lang].toUpperCase(), this.main.utility.numberDot(stats.waves, this.main.lang), true, ranks.waves);
			this.addDataRow(container, text.pokemon.stadistics.defeated[this.main.lang].toUpperCase(), this.main.utility.numberDot(stats.defeated, this.main.lang), true, ranks.defeated);
			this.addDataRow(container, text.pokemon.stadistics.bosses[this.main.lang].toUpperCase(), this.main.utility.numberDot(stats.bosses, this.main.lang), true, ranks.bosses);
			this.addDataRow(container, text.pokemon.stadistics.challenges[this.main.lang].toUpperCase(), this.main.utility.numberDot(stats.challenges, this.main.lang), true, ranks.challenges);
		}

		if (isUnown && !this.main.player.secrets.unown) {
			this.renderUnownDialogue(container);
		} else if (pokemon.ability) {
			this.addDescription(
				container,
				pokemon.ability.name?.[this.main.lang] || '',
				pokemon.ability.description?.[this.main.lang] || ''
			);
		}
	}

	renderEnemyData(entry, container) {
		const enemy = entry.data;

		this.addDataRow(container, text.ui.health[this.main.lang].toUpperCase(), this.main.utility.numberDot(enemy.hp ?? 0, this.main.lang) );
		this.addDataRow(container, text.ui.armor[this.main.lang].toUpperCase(), this.main.utility.numberDot(enemy.armor ?? 0, this.main.lang));
		this.addDataRow(container, text.ui.speed[this.main.lang].toUpperCase(), enemy.speed ?? 0);
		this.addDataRow(container, text.ui.power[this.main.lang].toUpperCase(), enemy.power ?? 0);
		this.addDataRow(container, text.enemy.sort.regeneration[this.main.lang].toUpperCase(), `${this.main.utility.numberDot(enemy.regeneration ?? 0, this.main.lang) ?? 0}/s`);
		this.addDataRow(container, text.ui.stun[this.main.lang].toUpperCase(), this.getYesNo(enemy.canStun));
		this.addDataRow(container, text.ui.slow[this.main.lang].toUpperCase(), this.getYesNo(enemy.canSlow));
		this.addDataRow(container, text.ui.burn[this.main.lang].toUpperCase(), this.getYesNo(enemy.canBurn));
		this.addDataRow(container, text.ui.poison[this.main.lang].toUpperCase(), this.getYesNo(enemy.canPoison));
		this.addDataRow(container, text.ui.invisible[this.main.lang].toUpperCase(), this.getYesNo(enemy.invisible));

		if (this.main.player.hasThunder) {
			const stats = this.getEnemyStats(enemy);

			this.addDataRow(container, text.enemy.stadistics.damage[this.main.lang].toUpperCase(), this.main.utility.numberDot(Math.floor(stats.damage), this.main.lang), true);
			this.addDataRow(container, text.enemy.stadistics.defeated[this.main.lang].toUpperCase(), this.main.utility.numberDot(stats.defeated, this.main.lang), true);
			this.addDataRow(container, text.enemy.stadistics.escaped[this.main.lang].toUpperCase(), this.main.utility.numberDot(stats.escaped, this.main.lang), true);
		}

		if (enemy.passive) {
			this.addDescription(
			    container,
			    enemy.passive.name?.[this.main.lang] || '',
			    enemy.passive.description?.[this.main.lang] || ''
			);
		}
	}

	renderTutorialData(entry, container) {
	    const tutorial = entry.tutorial;

	    const createImage = () => {
	        if (!tutorial.image) return;

	        const position = tutorial.imagePosition === 'bottom' ? 'bottom' : 'top';

	        const image = new Element(container, {  className: `dex-scene-tutorial-image-${position}` }).element;
	        image.style.backgroundImage = `url("${tutorial.image}")`;

	        if (tutorial.key === 'secrets' && !this.main.player.secrets.tyrunt) {
	        	image.addEventListener('click', () => { 
	        		if (!this.main.player.secrets.tyrunt) {
	        			this.main.player.secrets.tyrunt = true;
						this.main.UI.getSecret('tyrunt');
	        		}
	        	});
	        }
	    };

	    const createText = () => {
	        const textElement = new Element(container, {
	            className: 'dex-scene-tutorial-text'
	        }).element;

	        textElement.innerHTML = this.main.utility.parseText(
	            tutorial.text[this.main.lang] || ''
	        );
	    };

	    if (tutorial.imagePosition === 'bottom') {
	        createText();
	        createImage();
	    } else {
	        createImage();
	        createText();
	    }
	}

	addDataRow(container, label, value, extra = false, rank = null) {
		const row = new Element(container, {
			className: `dex-scene-entry-data-row${extra ? ' extra-stat' : ''}`
		}).element;

		if (rank === 1) row.classList.add('rank-gold');
		else if (rank === 2) row.classList.add('rank-silver');
		else if (rank === 3) row.classList.add('rank-bronze');

		new Element(row, {
			className: 'dex-scene-entry-data-label',
			text: String(label).toUpperCase()
		});

		new Element(row, {
			className: 'dex-scene-entry-data-value',
			text: value != null ? String(value) : '-'
		});

		return row;
	}

	addDescription(container, name, description) {
	    if (!name && !description) return;

	    const descriptionContainer = new Element(container, {
	        className: 'dex-scene-entry-description'
	    }).element;

	    new Element(descriptionContainer, {
	        className: 'dex-scene-entry-description-name',
	        text: name
	    });

	    const descriptionText = new Element(descriptionContainer, {
	        className: 'dex-scene-entry-description-text'
	    }).element;

	    descriptionText.innerHTML = this.main.utility.parseText(description);

	    return descriptionContainer;
	}

	isPokemonOwned(specie) {
		if (!specie) return false;

		const pokemon = [
			...(this.main.team?.pokemon || []),
			...(this.main.box?.pokemon || [])
		];

		return pokemon.some(pokemon => {
			if (!pokemon) return false;

			if (
				pokemon.specieKey != null &&
				specie.key != null &&
				pokemon.specieKey === specie.key
			) {
				return true;
			}

			if (
				pokemon.specie?.key != null &&
				specie.key != null &&
				pokemon.specie.key === specie.key
			) {
				return true;
			}

			if (
				pokemon.specie?.id != null &&
				specie.id != null &&
				pokemon.specie.id === specie.id
			) {
				return true;
			}

			return false;
		});
	}

	getName(data) {
		if (Array.isArray(data?.name)) {
			return data.name[this.main.lang]?.toUpperCase() || '???';
		}

		if (data?.name) {
			return String(data.name).toUpperCase();
		}

		if (Array.isArray(data?.specie?.name)) {
			return data.specie.name[this.main.lang]?.toUpperCase() || '???';
		}

		if (data?.specie?.name) {
			return String(data.specie.name).toUpperCase();
		}

		if (data?.id) {
			return String(data.id).toUpperCase();
		}

		if (data?.specie?.id) {
			return String(data.specie.id).toUpperCase();
		}

		return '???';
	}

	getYesNo(value) {
		return value
			? text.ui.yes[this.main.lang].toUpperCase()
			: text.ui.no[this.main.lang].toUpperCase()
	}

	getPokemonRangeType(pokemon) {
		if (!pokemon?.rangeType) return '-';
		return text.pokemon[pokemon.rangeType][this.main.lang] || pokemon.rangeType;
	}

	getPokemonTarget(pokemon) {
		if (!pokemon?.targetMode) return '-';
		return text.ui?.targetModes?.[pokemon.targetMode]?.[this.main.lang] || pokemon.targetMode;
	}

	getPokemonTerrain(pokemon) {
		if (!pokemon?.tiles) return '-';

		const terrainNames = {
			1: ['FIELD', 'CAMPO', 'CHAMP', 'CAMPO', 'CAMPO', 'FELD', '野原', '들판', '野原', 'POLE'],
			2: ['GRASS', 'HIERBA', 'HERBE', 'GRAMA', 'ERBA', 'GRAS', '草', '풀', '草', 'TRAWA'],
			3: ['WATER', 'AGUA', 'EAU', 'ÁGUA', 'ACQUA', 'WASSER', '水', '물', '水', 'WODA'],
			4: ['MOUNTAIN', 'MONTAÑA', 'MONTAGNE', 'MONTANHA', 'MONTAGNA', 'BERG', '山', '산', '山', 'GÓRY'],
			5: ['ALL', 'TODO', 'TOUT', 'TUDO', 'TUTTO', 'ALLE', 'すべて', '모두', '全部', 'WSZYSTKIE']
		};

		return pokemon.tiles.map(tile => {
			const value = terrainNames[tile]
			if (!value) return tile;

			return value[this.main.lang === 1 ? 1 : 0];
		}).join(', ');
	}

	open() {
		if (this.main.game?.stopped) return playSound('pop0', 'ui');
		if (this.isOpen) return this.close();

		this.sortedPokemon = 0;
		this.sortedEnemies = 0;

		this.tabs[0].innerText = text.files.tutorials[this.main.lang].toUpperCase();
		this.tabs[1].innerText = text.files.towers[this.main.lang].toUpperCase();
		this.tabs[2].innerText = text.files.enemies[this.main.lang].toUpperCase();

		this.main.sections.forEach(section => {
			if (section.isOpen && section != this) section.close();
		});

		super.open();

		this.selected = null;
		this.buildPokemonStatRanks();
		this.update();

		if (this.main.game?.deployingUnit != undefined) {
			this.main.game.cancelDeployUnit();
		}

		if (this.main.UI.fastScene.isOpen) {
			this.main.UI.fastScene.close();
		}
	}

	isEnemyDefeated(enemy) {
		return (this.main.player.enemyStats?.[enemy.id]?.defeated ?? 0) > 0;
	}

	getPokemonStats(pokemon) {
		return {
			defeated: pokemon.stadistics['defeated'] ?? 0,
			damage: pokemon.stadistics['damage'] ?? 0,
			highestHit: pokemon.stadistics['highestHit'] ?? 0,
			deployed: pokemon.stadistics['deployed'] ?? 0,
			active: pokemon.stadistics['active'] ?? 0,
			waves: pokemon.stadistics['waves'] ?? 0,
			bosses: pokemon.stadistics['bosses'] ?? 0,
			challenges: pokemon.stadistics['challenges'] ?? 0
		};
	}

	getEnemyStats(enemy) {
		const stats = this.main.player.enemyStats?.[enemy.id];

		return {
			defeated: stats?.defeated ?? 0,
			escaped: stats?.escaped ?? 0,
			damage: stats?.damage ?? 0
		};
	}

	changeSort(value) {
		if (this.mode === 'pokemon') {
			this.sortedTower += value;

			if (this.sortedTower >= POKEMON_SORT.length) {
				this.sortedTower = 0;
			} else if (this.sortedTower < 0) {
				this.sortedTower = POKEMON_SORT.length - 1;
			}
		} else if (this.mode === 'enemies') {
			this.sortedEnemy += value;

			if (this.sortedEnemy >= ENEMY_SORT.length) {
				this.sortedEnemy = 0;
			} else if (this.sortedEnemy < 0) {
				this.sortedEnemy = ENEMY_SORT.length - 1;
			}
		}

		this.update();
		playSound('option', 'ui');
	}


	sortPokemonList(list) {
		const sort = POKEMON_SORT[this.sortedTower];

		if (sort === 'default') {
			list.sort((a, b) => a.defaultIndex - b.defaultIndex);
			return;
		}

		const getNumber = value => {
			if (typeof value === 'number') return value;
			if (typeof value?.base === 'number') return value.base;
			return 0;
		};

		const getName = pokemon =>
			pokemon?.name?.[this.main.lang]
			|| pokemon?.specie?.name?.[this.main.lang]
			|| '';

		switch (sort) {
			case 'alphabeticalUp':
				list.sort((a, b) =>
					getName(a.data).localeCompare(getName(b.data))
				);
				break;

			case 'alphabeticalDown':
				list.sort((a, b) =>
					getName(b.data).localeCompare(getName(a.data))
				);
				break;

			case 'powerUp':
				list.sort((a, b) =>
					getNumber(b.data.power) - getNumber(a.data.power)
				);
				break;

			case 'powerDown':
				list.sort((a, b) =>
					getNumber(a.data.power) - getNumber(b.data.power)
				);
				break;

			case 'speedUp':
				list.sort((a, b) =>
					getNumber(a.data.speed) - getNumber(b.data.speed)
				);
				break;

			case 'speedDown':
				list.sort((a, b) =>
					getNumber(b.data.speed) - getNumber(a.data.speed)
				);
				break;

			case 'criticalUp':
				list.sort((a, b) =>
					getNumber(b.data.critical) - getNumber(a.data.critical)
				);
				break;

			case 'criticalDown':
				list.sort((a, b) =>
					getNumber(a.data.critical) - getNumber(b.data.critical)
				);
				break;

			case 'rangeUp':
				list.sort((a, b) =>
					getNumber(b.data.range) - getNumber(a.data.range)
				);
				break;

			case 'rangeDown':
				list.sort((a, b) =>
					getNumber(a.data.range) - getNumber(b.data.range)
				);
				break;

			case 'acquisitionUp':
				list.sort((a, b) =>
					getNumber(a.data.acquisitionDate) -
					getNumber(b.data.acquisitionDate)
				);
				break;

			case 'acquisitionDown':
				list.sort((a, b) =>
					getNumber(b.data.acquisitionDate) -
					getNumber(a.data.acquisitionDate)
				);
				break;
		}
	}

	sortEnemyList(list) {
		const sort = ENEMY_SORT[this.sortedEnemy];

		if (sort === 'default') {
			list.sort((a, b) => a.defaultIndex - b.defaultIndex);
			return;
		}

		const getNumber = value =>
			typeof value === 'number' ? value : 0;

		switch (sort) {
			case 'elite':
				list.sort((a, b) =>
					Number(b.data.isElite) - Number(a.data.isElite)
				);
				break;

			case 'boss':
				list.sort((a, b) =>
					Number(b.data.isBoss) - Number(a.data.isBoss)
				);
				break;

			case 'alphabeticalUp':
				list.sort((a, b) => {
					const nameA = a.data?.name?.[this.main.lang] ?? '';
					const nameB = b.data?.name?.[this.main.lang] ?? '';

					return nameA.localeCompare(nameB);
				});
				break;

			case 'alphabeticalDown':
				list.sort((a, b) => {
					const nameA = a.data?.name?.[this.main.lang] ?? '';
					const nameB = b.data?.name?.[this.main.lang] ?? '';

					return nameB.localeCompare(nameA);
				});
				break;

			case 'healthUp':
				list.sort((a, b) =>
					getNumber(b.data.hp) - getNumber(a.data.hp)
				);
				break;

			case 'healthDown':
				list.sort((a, b) =>
					getNumber(a.data.hp) - getNumber(b.data.hp)
				);
				break;

			case 'armorUp':
				list.sort((a, b) =>
					getNumber(b.data.armor) - getNumber(a.data.armor)
				);
				break;

			case 'armorDown':
				list.sort((a, b) =>
					getNumber(a.data.armor) - getNumber(b.data.armor)
				);
				break;

			case 'speedUp':
				list.sort((a, b) =>
					getNumber(b.data.speed) - getNumber(a.data.speed)
				);
				break;

			case 'speedDown':
				list.sort((a, b) =>
					getNumber(a.data.speed) - getNumber(b.data.speed)
				);
				break;

			case 'powerUp':
				list.sort((a, b) =>
					getNumber(b.data.power) - getNumber(a.data.power)
				);
				break;

			case 'powerDown':
				list.sort((a, b) =>
					getNumber(a.data.power) - getNumber(b.data.power)
				);
				break;

			case 'regenerationUp':
				list.sort((a, b) =>
					getNumber(b.data.regeneration) -
					getNumber(a.data.regeneration)
				);
				break;

			case 'regenerationDown':
				list.sort((a, b) =>
					getNumber(a.data.regeneration) -
					getNumber(b.data.regeneration)
				);
				break;

			case 'invisible':
				list.sort((a, b) =>
					Number(b.data.invisible) -
					Number(a.data.invisible)
				);
				break;

			case 'defeatedUp':
				list.sort((a, b) => {
					const defeatedA = this.main.player.enemyStats?.[a.data.id]?.defeated ?? 0;
					const defeatedB = this.main.player.enemyStats?.[b.data.id]?.defeated ?? 0;
					return defeatedB - defeatedA;
				});
				break;

			case 'defeatedDown':
				list.sort((a, b) => {
					const defeatedA = this.main.player.enemyStats?.[a.data.id]?.defeated ?? 0;
					const defeatedB = this.main.player.enemyStats?.[b.data.id]?.defeated ?? 0;
					return defeatedA - defeatedB;
				});
				break;
		}
	}

	close() {
		if (this.main.game?.deployingUnit != undefined) {
			this.main.game.cancelDeployUnit();
		}

		super.close();
	}

	getPokemonEntries() {
		const pokes = [
			...(this.main.box?.pokemon || []),
			...(this.main.team?.pokemon || [])
		];

		const ownedPokemon = new Map();

		pokes.forEach(pokemon => {
			if (pokemon?.id != null) {
				ownedPokemon.set(pokemon.id, pokemon);
			}
		});

		const result = [];

		for (let i = 0; i < allPokemon.length; i++) {
			const specieKey = allPokemon[i];
			const basePokemon = pokemonData[specieKey];

			if (!basePokemon) continue;

			const owned = ownedPokemon.get(basePokemon.id);

			result.push({
				data: owned || basePokemon,
				basePokemon,
				discovered: owned != null,
				defaultIndex: i
			});
		}

		return result;
	}

	sortPokemonEntries(entries) {
		const sort = POKEMON_SORT[this.sortedPokemon];

		if (sort === 'default') {
			entries.sort((a, b) => a.defaultIndex - b.defaultIndex);
			return;
		}

		const getNumber = value => {
			if (typeof value === 'number') {
				return value;
			}

			if (typeof value === 'string') {
				const number = parseFloat(value.replace('%', ''));
				return Number.isNaN(number) ? 0 : number;
			}

			if (typeof value?.base === 'number') {
				return value.base;
			}

			if (typeof value?.value === 'number') {
				return value.value;
			}

			return 0;
		};

		const getName = pokemon => {
			return (
				pokemon?.name?.[this.main.lang] ||
				pokemon?.specie?.name?.[this.main.lang] ||
				''
			);
		};

		switch (sort) {
			case 'alphabetical':
				entries.sort((a, b) =>
					getName(a.data).localeCompare(getName(b.data))
				);
				break;

			case 'level':
				entries.sort((a, b) =>
					getNumber(b.data.lvl) - getNumber(a.data.lvl)
				);
				break;

			case 'ability':
				entries.sort((a, b) => {
					const nameA = a.data?.ability?.name?.[this.main.lang] ?? '';
					const nameB = b.data?.ability?.name?.[this.main.lang] ?? '';
					return nameA.localeCompare(nameB);
				});
				break;

			case 'power':
				entries.sort((a, b) =>
					getNumber(b.data.power) - getNumber(a.data.power)
				);
				break;

			case 'speed':
				entries.sort((a, b) =>
					getNumber(a.data.speed) - getNumber(b.data.speed)
				);
				break;

			case 'critical':
				entries.sort((a, b) =>
					getNumber(b.data.critical) - getNumber(a.data.critical)
				);
				break;

			case 'range':
				entries.sort((a, b) =>
					getNumber(b.data.range) - getNumber(a.data.range)
				);
				break;

			case 'acquisition':
				entries.sort((a, b) =>
					getNumber(b.data.acquisitionDate) -
					getNumber(a.data.acquisitionDate)
				);
				break;
		}
	}

	buildPokemonStatRanks() {
		const stats = [
			'damage',
			'highestHit',
			'deployed',
			'active',
			'waves',
			'defeated',
			'bosses',
			'challenges'
		];

		const pokemonEntries = this.getPokemonEntries().filter(entry => entry.discovered && entry.data?.acquisitionDate !== undefined);

		const ranks = new Map();

		for (const stat of stats) {
			const sorted = pokemonEntries
				.map(({ data }) => ({
					id: data.id,
					value: data.stadistics?.[stat] ?? 0
				}))
				.sort((a, b) => b.value - a.value);

			sorted.slice(0, 3).forEach((pokemon, i) => {
				if (!ranks.has(pokemon.id)) ranks.set(pokemon.id, {});
				ranks.get(pokemon.id)[stat] = i + 1;
			});
		}

		this.pokemonStatRanks = ranks;
	}

	renderUnownDialogue(container) {
		const state = Math.max(0, Math.floor(Number(this.main.player.unownState) || 0));

		const states = Object.keys(UNOWN_DIALOGUE)
			.map(Number)
			.filter(Number.isFinite)
			.sort((a, b) => a - b);

		const dialogueState = UNOWN_DIALOGUE[state] ? state : states.filter(s => s <= state).at(-1) ?? states[0];
		const translations = UNOWN_DIALOGUE[dialogueState];
		const dialogue = translations?.[this.main.lang] ?? translations?.[0] ?? '';

		this.addDescription(container, 'UNOWN', dialogue.toLowerCase());
	}

	isUnownEntry(entry) {
	    return entry?.type === 'pokemon' && (
	        entry.basePokemon?.key === 'unown' ||
	        entry.data?.key === 'unown' ||
	        entry.data?.specie?.key === 'unown'
	    );
	}

	isUnownConversationOpen() {
	    return (
	        this.mode === 'pokemon' &&
	        this.selected?.expanded === true &&
	        this.isUnownEntry(this.selected)
	    );
	}

	handleUnownInput() {
	    if (!this.isUnownConversationOpen()) return;

	    const input = this.search.value;
	    const answer = input.value.trim();

	    if (!answer) return;

	    const player = this.main.player;
	    const state = Math.max(0, Math.floor(Number(player.unownState) || 0));

	    const normalize = value => String(value)
	        .trim()
	        .toLocaleLowerCase()
	        .normalize('NFD')
	        .replace(/[\u0300-\u036f]/g, '');

	    let advanced = false;

	    if (state === 0) {
	        const yesAnswers = [
	            ['yes'],
	            ['sí', 'si'],
	            ['oui'],
	            ['sim'],
	            ['sì', 'si'],
	            ['ja'],
	            ['はい', 'yes'],
	            ['네', '예', 'yes'],
	            ['是', '是的', 'yes'],
	            ['tak']
	        ];

	        const acceptedAnswers = yesAnswers[this.main.lang] ?? yesAnswers[0];

	        if (acceptedAnswers.some(value => normalize(value) === normalize(answer))) {
	            player.unownState = 1;
	            advanced = true;
	            playSound('select', 'ui');
	        }
	    } else if (state === 1) {
	        // Pregunta 2: nombre del jugador.
	        if (normalize(player.name) === normalize(answer)) {
	            player.unownState = 2;
	            advanced = true;
	            playSound('select', 'ui');
	        }
	    } else if (state === 2) {
	        // Pregunta 3: número de formas de Unown.
	        if (answer === '28') {
	            player.unownState = 3;
	            advanced = true;
	            playSound('select', 'ui');
	        }
	    } else if (state === 3) {
	        // Pregunta 4: elegir una letra o uno de los dos símbolos.
	        if (/^[a-z!?]$/i.test(answer)) {
	            player.unownLetter = answer.toUpperCase();
	            player.unownState = 4;
	            advanced = true;
	            playSound('select', 'ui');
	        }
	    } else if (state === 4) {
	        // Pregunta 5: significado de la forma elegida.
	        const letter = String(player.unownLetter ?? '').toUpperCase();
	        const expectedAnswer = UNOWN_MEANINGS[letter];

	        if (expectedAnswer && normalize(answer) === normalize(expectedAnswer)) {
	            player.unownState = 5;
	            advanced = true;
	            playSound('select', 'ui');
	            this.main.player.secrets.unown = true;
				this.main.UI.getSecret('unown');
	        }
	    } if (state >= 5) {
		    input.value = '';
		    return;
		}

	    input.value = '';

	    if (advanced && this.selected?.dataContainer) {
	        this.selected.dataContainer.innerHTML = '';

	        this.renderPokemonData(
	            this.selected,
	            this.selected.dataContainer
	        );
	    }
	}
}

const UNOWN_DIALOGUE = {
	0: [
		'Can you read me?',
		'Puedes leerme?',
		'Peux tu me lire ?',
		'Consegues ler me?',
		'Riesci a leggermi?',
		'Kannst du mich lesen?',
		'Can you read me?',
		'Can you read me?',
		'Can you read me?',
		'Czy potrafisz mnie przeczytac?'
	],
	1: [
		`I am Unown, who are you?`, // inglés
		`Yo soy Unown, quien eres tu?`, // español
		`Je suis Zarbi, qui es tu ?`, // francés
		`Eu sou o Unown, quem es tu?`, // portugués
		`Sono Unown, chi sei tu?`, // italiano
		`Ich bin Icognito, wer bist du?`, // alemán
		`I am Unown, who are you?`, // inglés
		`I am Unown, who are you?`, // inglés
		`I am Unown, who are you?`, // inglés
		`Jestem Unown, a ty kim jestes?` // polaco
	],
	2: [
		`How many forms do I have?`, // inglés
		`Cuántas formas tengo?`, // español
		`Combien de formes ai je ?`, // francés
		`Quantas formas tenho?`, // portugués
		`Quante forme ho?`, // italiano
		`Wie viele Formen habe ich?`, // alemán
		`How many forms do I have?`, // japonés
		`How many forms do I have?`, // coreano
		`How many forms do I have?`, // chino
		`Ile mam form?` // polaco
	],
	3: [
		`Which one is your favorite?`, // inglés
		`Cual es tu favorita?`, // español
		`Laquelle preferes tu ?`, // francés
		`Qual e a tua favorita?`, // portugués
		`Qual e la tua preferita?`, // italiano
		`Welche ist dein Favorit?`, // alemán
		`Which one is your favorite?`, // japonés
		`Which one is your favorite?`, // coreano
		`Which one is your favorite?`, // chino
		`Ktora jest twoja ulubiona?` // polaco
	],
	4: [
		`What is my meaning?`, // inglés
		`Cual es mi significado?`, // español
		`Quelle est ma signification ?`, // francés
		`Qual e o meu significado?`, // portugués
		`Qual e il mio significato?`, // italiano
		`Was ist meine Bedeutung?`, // alemán
		`What is my meaning?`, // japonés
		`What is my meaning?`, // coreano
		`What is my meaning?`, // chino
		`Jakie jest moje znaczenie?` // polaco
	],
	5: [
	    `Correct!`,
	    `¡Correcto!`,
	    `Correct !`,
	    `Correto!`,
	    `Corretto!`,
	    `Richtig!`,
	    `Correct!`,
	    `Correct!`,
	    `Correct!`,
	    `Dobrze!`
	]
};

const UNOWN_MEANINGS = {
    A: 'Anger',
    B: 'Bear',
    C: 'Chase',
    D: 'Direct',
    E: 'Engage',
    F: 'Find',
    G: 'Give',
    H: 'Help',
    I: 'Increase',
    J: 'Join',
    K: 'Keep',
    L: 'Laugh',
    M: 'Make',
    N: 'Nuzzle',
    O: 'Observe',
    P: 'Perform',
    Q: 'Quicken',
    R: 'Reassure',
    S: 'Search',
    T: 'Tell',
    U: 'Undo',
    V: 'Vanish',
    W: 'Want',
    X: 'XXXXX',
    Y: 'Yield',
    Z: 'Zoom',
    '!': '!!!!!',
    '?': '?????'
};