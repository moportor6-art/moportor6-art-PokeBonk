import { SectionScene } from '../../utils/SectionScene.js';
import { Element } from '../../utils/Element.js';
import { text } from '../../file/text.js';
import { playSound } from '../../file/audio.js';
import { Input } from '../../utils/Input.js';

const TIER_ORDER = {
	common: 0,
	luxury: 1,
	rare: 2,
	epic: 3,
	legendary: 4,
	mega: 5,
	admin: 6
};

const SORT = [
	'default',
	'acquisitionUp',
	'acquisitionDown',
	'alphabeticalUp',
	'alphabeticalDown',
	'tierUp',
	'tierDown',
];

const TAB_CONTENT = ['allTab', 'powerTab', 'speedTab', 'rangeTab', 'criticalTab', 'utilityTab'];

export class InventoryScene extends SectionScene {
	constructor(main) {
		super();
		this.main = main;

		this.slotTotal = 180;
		this.itemArray = [];
		this.itemSelected = null;

		this.pokemonArray = [];
		this.pokemonSelected = null;
		this.tabSelected = 0;
		this.sorted = 0;
		this.size = [42, 47, 53, 60, 38];
		this.sizePosition = 0;

		this.render();
	}

	render() {
		this.search = new Input(
		    this.container,
		    "text",
		    {
		        className: "inventory-scene-search",
		        maxlength: 20,
		        cb: () => {
		            this.searchByName();
		            this.update();
		        }
		    }
		);

		this.collectionStats = new Element(this.container, { className: 'box-scene-collection-stats' }).element;
		this.itemStats = new Element(this.collectionStats, { className: 'box-scene-collection-stat stroke' }).element;

		this.tabContainer = new Element(this.container, { className: 'box-scene-tab-container stroke' }).element;
		this.tabs = [];

		for (let i = 0; i < TAB_CONTENT.length; i++) {
			this.tabs[i] = new Element(this.tabContainer, { className: 'box-scene-tab' }).element;

			this.tabs[i].addEventListener('click', () => {
				this.applyTabEffect(i);
			});

			this.tabs[i].addEventListener('mouseenter', () => {
				playSound('hover1', 'ui');
			});
		}

		this.teamContainer = new Element(this.container, { className: 'inventory-scene-team-container' }).element;
		this.teamSlot = [];

		for (let i = 0; i < 10; i++) {
			this.teamSlot[i] = new Element(
				this.teamContainer,
				{ className: 'inventory-scene-team-slot' }
			).element;

			this.teamSlot[i].addEventListener('mouseenter', () => {
				playSound('hover1', 'ui');
			});

			this.teamSlot[i].addEventListener('click', () => {
				this.selectTeamPokemon(i);
			});
		}

		this.itemContainer = new Element(this.container, { className: 'inventory-scene-item-container' }).element;
		this.itemSlot = [];

		for (let i = 0; i < this.slotTotal; i++) {
			this.itemSlot[i] = new Element(this.itemContainer, { className: 'inventory-scene-item-slot' }).element;
			this.itemSlot[i].pokemon = new Element(this.itemSlot[i], { className: 'inventory-scene-item-slot-pokemon' }).element;
			this.itemSlot[i].addEventListener('mouseenter', () => { playSound('hover1', 'ui') })

			this.itemSlot[i].addEventListener('click', () => {
				this.selectItem(i);
				playSound('option', 'ui')
			})
		}

		this.itemSelectedContainer = new Element(this.container, { className: 'inventory-scene-item-selected-container' }).element;
		this.itemSelectedName = new Element(this.itemSelectedContainer, { className: 'inventory-scene-item-name stroke' }).element;
		this.itemSelectedDescription = new Element(this.itemSelectedContainer, { className: 'inventory-scene-item-description stroke' }).element;

		this.sortContainer = new Element(this.container, { className: 'box-scene-sort-container stroke' }).element;

		this.sortArrowLeft = new Element(this.sortContainer, { className: 'box-scene-sort-arrow', text: '<' }).element;
		this.sortValue = new Element(this.sortContainer, { className: 'box-scene-sort-value' }).element;
		this.sortArrowRight = new Element(this.sortContainer, { className: 'box-scene-sort-arrow', text: '>' }).element;

		this.sortArrowLeft.addEventListener('click', () => { this.changeSort(-1) })
		this.sortArrowRight.addEventListener('click', () => { this.changeSort(1) })
		
		this.sortArrowLeft.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
		this.sortArrowRight.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
		//this.pokemonContainer = new Element(this.container, { className: 'inventory-scene-pokemon-container' }).element;

		this.viewButton = new Element(this.container, { className: 'box-scene-view-button' }).element;
		this.viewButton.addEventListener('click', () => this.changeView());
		this.setupItemDragAndDrop();
	}

	update() {
		this.displayItems();
		this.showItemData();
		this.displayTeamPokemon();
		this.updateSort();
		this.updateCollectionStats();

		this.tabs.forEach((tab, i) => {
			tab.innerHTML = text.inventory[TAB_CONTENT[i]][this.main.lang].toUpperCase();
			(i === this.tabSelected)
				? tab.classList.add('is-active')
				: tab.classList.remove('is-active');
		});
	}

	updateCollectionStats() {
		this.itemStats.innerText = `ITEMS: ${this.main.player.itemAmount}/177`;
	}

	searchByName() {
	    const searchValue = this.search.value.value
	        .toLowerCase()
	        .trim();

	    const items = this.main.itemController.getItems();

	    this.searchItems = items.filter(item => {
	        if (!item) return false;

	        // Buscar "mega" muestra todas las Megapiedras
	        if (searchValue === 'mega') {
	            return item.megaStone === true;
	        }

	        if (!item.name) return false;

	        const itemName = Array.isArray(item.name)
	            ? (item.name[this.main.lang] ?? item.name[0] ?? '')
	            : item.name;

	        return itemName
	            .toLowerCase()
	            .startsWith(searchValue);
	    });

	    this.itemArray = this.searchItems;
	}

	applyTabEffect(tab) {
		if (this.tabSelected === tab) return;

		this.tabSelected = tab;
		playSound('option', 'ui');
		this.update();
	}

	updateSort() {
		this.sortContainer.style.display = 'flex';

		const sort = SORT[this.sorted] ?? SORT[0];

		const labels = {
			default: text.box.default[this.main.lang],

			alphabeticalUp: `↑ ${text.box.alphabetical[this.main.lang]}`,
			alphabeticalDown: `↓ ${text.box.alphabetical[this.main.lang]}`,

			acquisitionUp: `↑ ${text.inventory.acquisition[this.main.lang]}`,
			acquisitionDown: `↓ ${text.inventory.acquisition[this.main.lang]}`,

			tierUp: `↑ ${text.inventory.tier[this.main.lang]}`,
			tierDown: `↓ ${text.inventory.tier[this.main.lang]}`,
		};

		this.sortValue.innerHTML = (labels[sort] ?? labels.default).toUpperCase();
	}

	changeSort(direction) {
		this.sorted = (
			this.sorted + direction + SORT.length
		) % SORT.length;

		this.main.player.sortedInventory = this.sorted;
		playSound('option', 'ui');
		this.update();
	}


	displayItems() {
		const items = this.searchItems ?? this.main.itemController.getItems();
		const pokemon = this.main.itemController.getAllPokemon();

		let filteredItems = items.filter(item => {
			if (!item) return false;
			if (!this.filterTab(item)) return false;

			if (this.pokemonSelected) {
				const available = this.main.itemController.getAvailablePokemon(item);

				if (!available.some(
					pokemon => pokemon?.id === this.pokemonSelected.id
				)) {
					return false;
				}
			}

			return true;
		});

		filteredItems = this.sortItems(filteredItems);

		for (let i = 0; i < this.slotTotal; i++) {
			const slot = this.itemSlot[i];

			slot.style.backgroundImage = '';
			slot.style.backgroundColor = '';
			slot.style.borderColor = '';
			slot.style.opacity = '';
			slot.style.filter = '';
			slot.style.pointerEvents = 'none';
			slot.pokemon.style.backgroundImage = '';
			slot.classList.remove('is-selected');

			slot.dataset.index = i;
		}

		filteredItems.forEach((item, i) => {
			const slot = this.itemSlot[i];

			if (!slot) return;

			slot.style.pointerEvents = 'auto';

			const tierColor = this.main.utility.colorTier(item.tier);
			const darkColor = this.main.utility.darkenColor(tierColor, 0.25);

			slot.style.backgroundImage = `
				url("${item.sprite}"),
				linear-gradient(
					135deg,
					${tierColor},
					${darkColor}
				)
			`;

			slot.style.backgroundSize = '75% 75%, auto';
			slot.style.backgroundPosition = 'center, center';
			slot.style.backgroundRepeat = 'no-repeat, no-repeat';

			if (this.itemSelected && this.itemSelected.id === item.id) {
				slot.classList.add('is-selected');
			}

			if (typeof item.equipedBy === 'number') {
				const poke = pokemon.find(
					pokemon => pokemon.id === item.equipedBy
				);

				if (poke) {
					slot.pokemon.style.backgroundImage =
						`url("${poke.sprite.base}")`;
				}
			}
		});

		this.itemArray = filteredItems;
	}

	selectItem(slot) {
	    this.itemSelected = this.itemArray[slot];
	    this.showItemData();
	    this.displayItems(); 
	    //this.displayPokemon();
	}

	showItemData() {
		const lang = this.main.lang;

		if (this.itemSelected == null) {
			this.itemSelectedName.innerHTML = text.inventory.noItem[lang].toUpperCase();
			this.itemSelectedDescription.innerHTML = text.inventory.noItemDescription[lang];
			return;
		} 

		// if (['mega'].includes(this.itemSelected.tier)) {
		// 	this.itemSelectedName.style.color = 'var(--black)';
		// 	this.itemSelectedName.style.textShadow = '0px 0px';
		// } else {
		// 	this.itemSelectedName.style.color = 'var(--white)';
		// 	this.itemSelectedName.style.textShadow = '1px 1px black';
		// }
       		
       	if (this.itemSelected.name.length <= lang) lang = 0; 

		this.itemSelectedName.innerHTML = this.itemSelected.name[lang].toUpperCase();
		this.itemSelectedDescription.innerHTML = this.main.utility.parseText(this.itemSelected.description[lang]);

       	this.itemSelectedName.style.backgroundColor = this.main.utility.colorTier(this.itemSelected.tier);
		this.itemSelectedContainer.style.borderColor = this.main.utility.colorTier(this.itemSelected.tier);
	}

	displayTeamPokemon() {
		this.teamSlot.forEach((slot, i) => {
			const pokemon = this.main.team.pokemon[i];

			slot.style.backgroundImage = '';
			slot.style.filter = '';
			slot.style.opacity = '';
			slot.style.cursor = 'default';
			slot.classList.remove('is-selected');

			if (!pokemon) return;

			slot.style.backgroundImage = `url("${pokemon.sprite.base}")`;
			slot.style.cursor = 'pointer';

			if (this.pokemonSelected?.id === pokemon.id) {
				slot.classList.add('is-selected');
			} else if (this.pokemonSelected) {
				slot.style.filter = 'brightness(0.55)';
				slot.style.opacity = '0.7';
			}
		});
	}

	selectTeamPokemon(i) {
		const pokemon = this.main.team.pokemon[i];

		if (!pokemon) return;

		if (this.pokemonSelected?.id === pokemon.id) {
			this.pokemonSelected = null;
		} else {
			this.pokemonSelected = pokemon;
		}

		playSound('option', 'ui');

		this.displayItems();
		this.displayTeamPokemon();
	}

	// displayPokemon() {
	//   	if (!this.itemSelected) return;

	//   	const available = this.main.itemController.getAvailablePokemon(this.itemSelected);

	//   	//this.pokemonContainer.innerHTML = '';
	//   	this.pokemonArray = [];

	//   	const blockedItems = [
	// 		'silphScope',
	// 		'airBalloon',
	// 		'heavyDutyBoots',
	// 		'dampMulch',
	// 		'assaultVest',
	// 		'twistedSpoon',
	// 		'ejectButton',
	// 		'subwoofer',
	// 		'mitsuesCocktail',
	// 		'jadeOrb', 
	// 		'lustrousOrb',
	// 		'dampRock', 'smoothRock', 'icyRock', 'heatRockWeather', 'charizarditeY',
	// 		'blimpKeys', 'pokeSkates'
	// 	];

	//   	available.forEach((pokemon, i) => {
	// 		const el = new Element(this.pokemonContainer, {
	// 			className: 'inventory-scene-pokemon',
	// 			image: pokemon.sprite.base
	// 		}).element;

	// 		const isBlocked =
	// 			pokemon.isDeployed &&
	// 			blockedItems.includes(pokemon?.item?.id);

	// 		if (isBlocked) {
	// 			el.style.pointerEvents = 'none';
	// 			el.style.filter = 'grayscale(100%)'
	// 			el.style.opacity = '0.7';
	// 			el.style.cursor = 'not-allowed';
	// 			el.classList.add('inventory-scene-pokemon-locked');
	// 		} else {
	// 			el.addEventListener('click', () => {
	// 				this.main.itemController.equip(this.itemSelected, pokemon);
	// 				this.update();
	// 			});

	// 			el.addEventListener('contextmenu', (e) => {
	// 				e.preventDefault();
	// 				this.main.pokemonScene.open(pokemon, i, available);
	// 				this.update();
	// 			});
	// 		}

	// 		el.addEventListener('mouseenter', () => playSound('hover1', 'ui'));
	// 		this.pokemonArray.push(el);
	// 	});
	// }

	open() {
		if (this.main.area.inChallenge.noItems) return;
		if (this.main.game.stopped) return playSound('pop0', 'ui');
		if (this.isOpen) return this.close();
		
		this.main.sections.forEach(section => {
			if (section.isOpen && section != this) section.close();
		})

		super.open();
		this.pokemonSelected = null;
		this.search.value.value = "";
		this.searchItems = this.main.itemController.getItems();
		this.sorted = this.main.player.sortedInventory;
		this.update();
		this.main.UI.section['inventory'].classList.add('is-selected');
		this.main.game.cancelDeployUnit()
		if (this.main.player.items.length > 0 && this.itemSelected == null) this.selectItem(0);
		if (this.main.UI.fastScene.isOpen) this.main.UI.fastScene.close();
	}

	close() {
		super.close();
		this.main.UI.section['inventory'].classList.remove('is-selected');
	}

	setupItemDragAndDrop() {
	    if (this._dragSetup) return;
	    this._dragSetup = true;
	    this.isDragging = false;

	    const THRESHOLD = 6;

	    let draggedIndex = null;
	    let clone = null;
	    let activePointerId = null;
	    let originSlot = null;
	    let startX = 0;
	    let startY = 0;
	    let availableSet = null;
	    let dragHasMoved = false; 

	    const blockedItems = [
			'silphScope',
			'airBalloon',
			'heavyDutyBoots',
			'dampMulch',
			'assaultVest',
			'twistedSpoon',
			'ejectButton',
			'subwoofer',
			'mitsuesCocktail',
			'blimpKeys', 'pokeSkates'
		];

	    const clearDrag = () => {
	        if (clone && typeof clone.remove === 'function') { clone.remove(); clone = null; }
	        if (originSlot) {
	            originSlot.classList.remove('is-dragging', 'drag-over');
	            try { if (activePointerId != null) originSlot.releasePointerCapture(activePointerId); } catch (e) {}
	            originSlot = null;
	        }
	        draggedIndex = null;
	        activePointerId = null;
	        availableSet = null;
	        dragHasMoved = false;
	        this.isDragging = false;

	        document.body.classList.remove('is-dragging', 'is-dragging-start');

	        document.querySelectorAll('.ui-pokemon').forEach(el => {
	            el.classList.remove('drag-over', 'can-equip', 'cannot-equip');
	        });

	        window.removeEventListener('pointermove', onPointerMove);
			window.removeEventListener('pointerup', onPointerUp);
			window.removeEventListener('pointercancel', onPointerCancel);
	        document.querySelectorAll('.inventory-scene-item-slot.is-dragging').forEach(el => el.classList.remove('is-dragging'));
	    };

	    const setClonePos = (clientX, clientY) => {
	        if (!clone) return;
	        clone.style.left = `${clientX - clone.offsetWidth / 2}px`;
	        clone.style.top = `${clientY - clone.offsetHeight / 2}px`;
	    };

	    const markUISlots = () => {
	        try {
	            if (!this.main || !this.main.UI || !Array.isArray(this.main.UI.pokemon)) return;
	            this.main.UI.pokemon.forEach((uiSlot, i) => {
	                uiSlot.classList.remove('can-equip', 'cannot-equip');
	                const teamPokemon = this.main.team.pokemon?.[i];
	                if (!teamPokemon) {
	                    uiSlot.classList.add('cannot-equip');
	                    return;
	                }
	                const isBlocked = teamPokemon?.isDeployed && blockedItems.includes(teamPokemon?.item?.id);
	                const allowed = availableSet ? availableSet.has(teamPokemon.id) : false;
	                if (allowed && !isBlocked) uiSlot.classList.add('can-equip');
	                else uiSlot.classList.add('cannot-equip');
	            });
	        } catch (err) { }
	    };

	    const onPointerMove = (e) => {
	        if (!clone) return;

	        if (!dragHasMoved) {
	            dragHasMoved = true;
	            document.body.classList.remove('is-dragging-start');
	            document.body.classList.add('is-dragging');
	        }

	        setClonePos(e.clientX, e.clientY);

	        clone.style.display = 'none';
	        const target = document.elementFromPoint(e.clientX, e.clientY);
	        clone.style.display = 'block';

	        document.querySelectorAll('.ui-pokemon').forEach(el => el.classList.remove('drag-over'));
	        const uiSlot = target?.closest('.ui-pokemon');
	        if (uiSlot) uiSlot.classList.add('drag-over');

	        markUISlots();

	        try { if (this.main?.game) this.main.game.animate(performance.now()); } catch (err) {}
	    };

	    const onPointerUp = (e) => {
	        window.removeEventListener('pointermove', onPointerMove);
	        window.removeEventListener('pointerup', onPointerUp);

	        if (clone) clone.remove();

	        const targetEl = document.elementFromPoint(e.clientX, e.clientY);
	        const inventorySlot = targetEl?.closest('.inventory-scene-item-slot');
	        const uiSlot = targetEl?.closest('.ui-pokemon');

	        const item = this.itemArray?.[draggedIndex];

			if (inventorySlot && draggedIndex != null && item) {
				const targetIndex = parseInt(inventorySlot.dataset.index);
				const targetItem = this.itemArray?.[targetIndex];

				if (
					!Number.isNaN(targetIndex) &&
					targetIndex !== draggedIndex &&
					targetItem
				) {
					const fromIndex = this.main.player.items.findIndex(
						playerItem => playerItem?.id === item.id
					);

					const toIndex = this.main.player.items.findIndex(
						playerItem => playerItem?.id === targetItem.id
					);

					if (fromIndex !== -1 && toIndex !== -1) {
						this.main.player.swapItems(fromIndex, toIndex);

						if (this.itemSelected) {
							const selectedId = this.itemSelected.id;

							this.itemSelected =
								this.main.player.items.find(
									item => item.id === selectedId
								) ?? null;
						}

						playSound('click1', 'ui');
						this.update();
					}
				}

				clearDrag();
				return;
			}

	        if (uiSlot && draggedIndex != null && item) {
	            const toIndex = parseInt(uiSlot.dataset.index);
	            const targetPokemon = this.main.team.pokemon?.[toIndex];

	            const available = this.main.itemController.getAvailablePokemon(item) || [];
	            const allowed = available.some(p => p?.id === targetPokemon?.id);

	            const isBlocked = targetPokemon?.isDeployed && blockedItems.includes(targetPokemon?.item?.id);

	            if (!targetPokemon || !allowed || isBlocked) {
	                playSound('pop0', 'ui');
	                clearDrag();
	                return;
	            }

	            try {
	                this.main.itemController.equip(item, targetPokemon);
	                playSound('click1', 'ui');

	                this.update();
	                if (this.main.UI) this.main.UI.updatePokemon();
	                if (this.main.boxScene && this.main.boxScene.isOpen) this.main.boxScene.update();
	                // try { if (!this.main.area.isCustom) saveData(this.main.player, this.main.team, this.main.box, this.main.area, this.main.shop, this.main.teamManager); } catch (err) {}
	            } catch (err) {
	                playSound('pop0', 'ui');
	            }

	            clearDrag();
	            return;
	        }

	        clearDrag();
	    };


	    const startDragActual = (ev, index, slot) => {
	        if (!this.itemArray || !this.itemArray[index]) { clearDrag(); return; }
	        const item = this.itemArray[index];
	        draggedIndex = index;
	        originSlot = slot;

	        try {
	            const availableList = this.main.itemController.getAvailablePokemon(item) || [];
	            availableSet = new Set(availableList.map(p => p?.id).filter(id => id != null));
	        } catch (err) {
	            availableSet = null;
	        }

	        clone = document.createElement('div');
	        clone.className = 'inventory-drag-clone';
	        clone.style.position = 'fixed';          
	        clone.style.zIndex = '100000';
	        clone.style.pointerEvents = 'none';
	        clone.style.width = '44px';
	        clone.style.height = '44px';
	        clone.style.transform = 'scale(1.05)';
	        clone.style.filter = `drop-shadow(4px 4px 1px #222)`;
	        clone.style.cursor = 'grabbing';
	        clone.style.backgroundImage = `url("${item.sprite}")`;
	        clone.style.backgroundSize = 'contain';
	        clone.style.backgroundRepeat = 'no-repeat';
	        clone.style.backgroundPosition = 'center';
	        document.body.appendChild(clone);
	        setClonePos(ev.clientX, ev.clientY);

	        originSlot.classList.add('is-dragging');
	        this.isDragging = true;

	        document.body.classList.add('is-dragging-start');

	        try {
	            originSlot.setPointerCapture(ev.pointerId);
	            activePointerId = ev.pointerId;
	        } catch (err) {
	            activePointerId = null;
	        }

	        window.addEventListener('pointermove', onPointerMove);
	        window.addEventListener('pointerup', onPointerUp);
	        window.addEventListener('pointercancel', onPointerCancel);
			originSlot.addEventListener('lostpointercapture', onPointerCancel);

	        markUISlots();
	    };

	    const onPointerCancel = () => {
		    window.removeEventListener('pointermove', onPointerMove);
		    window.removeEventListener('pointerup', onPointerUp);
		    window.removeEventListener('pointercancel', onPointerCancel);
		    clearDrag();
		};

	    const onPointerDownCandidate = function(e) {
	        if (!e.isPrimary) return;
	        if (e.target.closest('.inventory-scene-item-slot-pokemon')) return;

	        const slot = this;
	        const index = parseInt(slot.dataset.index);

	        startX = e.clientX;
	        startY = e.clientY;

	        const onMoveCheck = (ev) => {
	            const dx = ev.clientX - startX;
	            const dy = ev.clientY - startY;
	            if (Math.hypot(dx, dy) > THRESHOLD) {
	                window.removeEventListener('pointermove', onMoveCheck);
	                window.removeEventListener('pointerup', onCancel);
	                startDragActual(ev, index, slot);
	            }
	        };

	        const onCancel = () => {
	            window.removeEventListener('pointermove', onMoveCheck);
	            window.removeEventListener('pointerup', onCancel);
	        };

	        e.preventDefault();
	        window.addEventListener('pointermove', onMoveCheck);
	        window.addEventListener('pointerup', onCancel);
	    };

	    for (let i = 0; i < this.itemSlot.length; i++) {
		    const slot = this.itemSlot[i];
		    if (!slot) continue;
		    if (slot._invDragSetup) continue;
		    slot._invDragSetup = true;

		    slot.dataset.index = i;
		    slot.style.touchAction = 'none';

		    slot.draggable = false;

		    slot.addEventListener('pointerdown', onPointerDownCandidate);
		    slot.addEventListener('dragstart', (e) => e.preventDefault());
		}
	}

	getItemName(item) {
		let name = item?.name;
		if (Array.isArray(name)) name = name[this.main.lang] ?? name[0] ?? '';
			
		return String(name ?? '')
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.toLowerCase();
	}

	getItemAcquisitionIndex(item) {
		const items = this.main.player?.items ?? [];

		const index = items.findIndex(playerItem =>
			playerItem === item ||
			playerItem?.id === item?.id
		);

		return index === -1 ? Number.MAX_SAFE_INTEGER : index;
	}

	getItemTierValue(item) {
		const tier = item?.tier;
		if (typeof tier === 'number') return tier;
		const key = String(tier ?? '').toLowerCase();
		if (TIER_ORDER[key] !== undefined) return TIER_ORDER[key];
		const numeric = Number(tier);
		if (!Number.isNaN(numeric)) return numeric;
		return Number.MAX_SAFE_INTEGER;
	}

	getItemTabs(item) {
		const tabKey = TAB_CONTENT[this.tabSelected]
			.replace('Tab', '')
			.toLowerCase();


		if (typeof item?.[tabKey] === 'boolean') return item[tabKey] ? [tabKey] : [];

		const raw =
			item?.tabs ??
			item?.tab ??
			item?.categories ??
			item?.category ??
			item?.tags ??
			item?.filter;

		if (raw instanceof Set) return [...raw].map(value => String(value).toLowerCase());
		if (Array.isArray(raw)) return raw.map(value => String(value).toLowerCase());

		if (typeof raw === 'string') {
			return raw
				.split(/[,;|]+/)
				.map(value => value.trim().toLowerCase())
				.filter(Boolean);
		}

		if (raw && typeof raw === 'object') {
			return Object.entries(raw)
				.filter(([, value]) => value === true || value === 1)
				.map(([key]) => key.toLowerCase());
		}

		return [];
	}

	filterTab(item) {
		if (this.tabSelected === 0) return true;

		const tabKey = TAB_CONTENT[this.tabSelected]
			.replace('Tab', '')
			.toLowerCase();

		return Array.isArray(item?.tags) && item.tags.some(tag => String(tag).toLowerCase() === tabKey);
	}

	sortItems(items) {
		const sort = SORT[this.sorted] ?? SORT[0];
		if (sort === 'default') return [...items];
		const sortedItems = [...items];

		sortedItems.sort((a, b) => {
			switch (sort) {
				case 'acquisitionUp':
					return (this.getItemAcquisitionIndex(b) - this.getItemAcquisitionIndex(a));

				case 'acquisitionDown':
					return (this.getItemAcquisitionIndex(a) - this.getItemAcquisitionIndex(b));

				case 'alphabeticalUp':
					return this.getItemName(a).localeCompare(
						this.getItemName(b),
						undefined,
						{
							numeric: true,
							sensitivity: 'base'
						}
					);

				case 'alphabeticalDown':
					return this.getItemName(b).localeCompare(
						this.getItemName(a),
						undefined,
						{
							numeric: true,
							sensitivity: 'base'
						}
					);

				case 'tierUp':
					return (this.getItemTierValue(b) - this.getItemTierValue(a));

				case 'tierDown':
					return (this.getItemTierValue(a) - this.getItemTierValue(b));

				default:
					return 0;
			}
		});

		return sortedItems;
	}

	changeView() {
		this.sizePosition++;
		playSound('option', 'ui');
		if (this.sizePosition > 4) this.sizePosition = 0;
		this.itemSlot.forEach(slot => {
			slot.style.width = `${this.size[this.sizePosition]}px`;
			slot.style.height = `${this.size[this.sizePosition]}px`;
		}) 
	}
}
