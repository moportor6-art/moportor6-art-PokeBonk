import { saveData } from '../file/data.js';
import { playSound } from '../file/audio.js';

const stakatakaSequence = ["5", "6", "7", "5"];
let stakatakaPosition = 0;

export class KeyController {
	constructor(main) {
		this.main = main;
		this.keyHandler = this.keyHandler.bind(this);

		this.mouseDown = false;

    	window.addEventListener('mousedown', () => this.mouseDown = true);
    	window.addEventListener('mouseup', () => this.mouseDown = false);

		this.listen();
	}

	listen() {
		window.addEventListener('keydown', this.keyHandler);
	}

	keyHandler(e) {
		if (!this.lastKeyPress) this.lastKeyPress = {};

		const now = performance.now();
		const last = this.lastKeyPress[e.key];

		const isDoublePress = last && now - last < 300;

		this.lastKeyPress[e.key] = now;

		const keyMap = {
			'en': { profile: 'q', box: 'e', shop: 's', map: 'w', damageDealt: 'z', leftA: 'a', rightD: 'd', leftArrow: 'ArrowLeft', rightArrow: 'ArrowRight'},
			'fr': { profile: 'a', box: 'e', shop: 's', map: 'z', damageDealt: 'w', leftA: 'q', rightD: 'd', leftArrow: 'ArrowLeft', rightArrow: 'ArrowRight'}
		};

		const isTypingTarget = (el) => {
	        if (!el) return false;
	        const tag = el.tagName;
	        if (tag === 'INPUT' || tag === 'TEXTAREA') return true;
	        if (el.isContentEditable) return true;
	        if (el.closest && el.closest('[contenteditable="true"]')) return true;
	        return false;
	    };

		const langKeys = (this.main.lang == 2) ? keyMap['fr'] : keyMap['en'];

		const scenes = {
			newPokemon: this.main.shopScene.displayPokemon,
			pokemon: this.main.pokemonScene,
			//profile: this.main.profileScene,
			//box: this.main.boxScene,
			//inventory: this.main.inventoryScene,
			//menu: this.main.menuScene,
			//shop: this.main.shopScene,
			//map: this.main.mapScene,
			//challenge: this.main.challengeScene,
			damageDealt: this.main.UI.damageDealtDisplay,
			draft: this.main.draftScene
		};

		const sections = {
			profile: this.main.profileScene,
			box: this.main.boxScene,
			inventory: this.main.inventoryScene,
			menu: this.main.menuScene,
			shop: this.main.shopScene,
			map: this.main.mapScene,
			challenge: this.main.challengeScene,
			editor: this.main.editorScene,
			dex: this.main.dexScene,
		};
		
		const allScenes = Object.values(scenes);
		const anySceneOpen = (except = null) =>
			allScenes.some(s => s.isOpen && s !== except);

		const allSections = Object.values(sections);
		const anySectionOpen = (except = null) =>
			allSections.some(s => s.isOpen && s !== except);

		const gameLocked = () =>
			this.main.defeatScene.isOpen || this.main.newGameScene.isOpen || this.main.tutorialScene.isOpen || this.main.draftScene.isOpen ||this.main.finalScene.isOpen;

		const gameplayLocked = () => gameLocked() || this.main.game.deployingUnit;

		if (e.ctrlKey && /^[1-5]$/.test(e.key)) {
		    e.preventDefault(); 
		    if (gameLocked() || anySceneOpen() || anySectionOpen()) return;

		    const i = parseInt(e.key) - 1;
		    this.main.UI.saveTeamButtonHandle(i);
		    return;
		}

		if (e.altKey && /^[0-9]$/.test(e.key)) {
		    e.preventDefault(); 
		    if (gameLocked() || anySceneOpen() || anySectionOpen()) return;

		    const i = (e.key != 0) ? parseInt(e.key) - 1 : 9;
		    if (this.main.team.pokemon[i]) {
		    	if (this.main?.team?.pokemon[i]?.attackType === "bombardment") {
		    		if (this.main.game.stopped) return playSound('pop0', 'ui');

			        const tower = this.main.area.towers.find(t => t.pokemon === this.main.team.pokemon[i]);
			        if (!tower) return playSound('pop0', 'ui');

			        tower.awaitingBombardZone = true;
			        playSound('select', 'ui'); 
			        return;
		    	}
		    }
		    return;
		}

		if (/^[0-9]$/.test(e.key) && isDoublePress) {
		    e.preventDefault();

		    if (
		        gameLocked() ||
		        this.main.tutorialScene.isOpen ||
		        anySceneOpen() ||
		        anySectionOpen() ||
		        this.mouseDown ||
		        this.main.area.heavyMetal ||
		        this.main.boxScene.isDragging ||
		        this.main.inventoryScene.isDragging ||
		        this.main.UI.isDragging ||
		        this.main.game.stopped
		    ) return;

		    const i = e.key === "0" ? 9 : parseInt(e.key) - 1;
		    const pokemon = this.main.team.pokemon[i];

		    if (!pokemon) return;

		    const tower = this.main.area.towers.find(t => t.pokemon === pokemon);

		    if (tower) {
		        this.main.game.deployingUnit = pokemon;
				this.main.game.retireUnit();
		    }

		    return;
		}

		switch (e.key) {
			case 'Escape':
				if (gameLocked() || this.mouseDown || this.main.boxScene.isDragging || this.main.inventoryScene.isDragging || this.main.UI.isDragging) return;
				if (this.main.game.deployingUnit) return  this.main.game.cancelDeployUnit();
				if (this.main.boxScene.nameChange.isOpen) return this.main.boxScene.nameChange.close();
				if (this.main.pokemonScene.nameChange.isOpen) return this.main.pokemonScene.nameChange.close();
				if (this.main.menuScene.deleteScene.isOpen) return this.main.menuScene.deleteScene.close();
				if (this.main.menuScene.importScene.isOpen) return this.main.menuScene.importScene.close();
				if (this.main.menuScene.exportScene.isOpen) return this.main.menuScene.exportScene.close();
				if (this.main.profileScene.deleteRecord.isOpen) return this.main.profileScene.deleteRecord.close();
				const sceneOpen = allScenes.find(s => s.isOpen);
				const sectionOpen = allSections.find(s => s.isOpen);
				if (sceneOpen) sceneOpen.close();
				else if (sectionOpen) sectionOpen.close();
				else this.main.menuScene.open();
				break;
				
			case 'x':
				if (isTypingTarget(e.target)) return;
				this.main.game.toggleRanges();
				break;

			case langKeys.leftA:
			case langKeys.leftArrow:
				if (this.main.pokemonScene.isOpen && !this.main.pokemonScene.nameChange.isOpen) this.main.pokemonScene.changePokemon(-1);
				break;
			case langKeys.rightD:
			case langKeys.rightArrow:
				if (this.main.pokemonScene.isOpen && !this.main.pokemonScene.nameChange.isOpen) this.main.pokemonScene.changePokemon(1);
				break;


			case langKeys.damageDealt:
				if (isTypingTarget(e.target)) return;
				this.main.UI.damageDealtSwitch();
				break;

			case langKeys.profile:
				if (gameplayLocked() || this.mouseDown || this.main.boxScene.isDragging || this.main.inventoryScene.isDragging || this.main.UI.isDragging) return;
				if (isTypingTarget(e.target) || anySceneOpen() || this.mouseDown) return;
				sections.profile.open();
				break;

			case langKeys.box:
				if (gameplayLocked() || this.mouseDown || this.main.boxScene.isDragging || this.main.inventoryScene.isDragging || this.main.UI.isDragging) return;
				if (isTypingTarget(e.target) || anySceneOpen() || this.mouseDown) return;
				sections.box.open();
				break;

			case langKeys.shop:
				if (gameplayLocked() || this.mouseDown || this.main.boxScene.isDragging || this.main.inventoryScene.isDragging || this.main.UI.isDragging) return;
				if (isTypingTarget(e.target) || gameplayLocked() || anySceneOpen()) return;
				sections.shop.open();
				break;

			case langKeys.map:
				if (gameplayLocked() || this.mouseDown || this.main.boxScene.isDragging || this.main.inventoryScene.isDragging || this.main.UI.isDragging) return;
				if (isTypingTarget(e.target) || gameplayLocked() || anySceneOpen()) return;
				sections.map.open();
				break;

			case 'Enter':
			case ' ':
				if (e.key === 'Enter' && this.main.boxScene.isOpen) {
					if (this.main.boxScene.nameChange.isOpen) return;
					if (this.main.boxScene.handleSinglePokemonEnter()) e.preventDefault();
					return;
				}
				if (gameLocked() || anySceneOpen() || anySectionOpen() || this.mouseDown) return;
				if (!this.main.area.waveActive && !this.main.game.deployingUnit) this.main.area.newWave();
				else if (this.main.area.waveActive && !this.main.game.deployingUnit) this.main.game.switchPause();
				break;

			case 'Shift':
				if (gameLocked()) return;
				this.main.game.toggleSpeed();
				break;

			case 'F11':
				e.preventDefault();
				window.electronAPI.toggleFullscreen();
				break;

			case 'F1':
				e.preventDefault(); 
		    	if (
		    		gameLocked() || this.main.tutorialScene.isOpen || anySceneOpen() || anySectionOpen() || this.main.area.heavyMetal || 
		    		this.mouseDown  || this.main.boxScene.isDragging || this.main.inventoryScene.isDragging || this.main.UI.isDragging
		    	) return;
		    	this.main.UI.importTeamButtonHandle(0);
				break;
			case 'F2':
				e.preventDefault(); 
				if (
		    		gameLocked() || this.main.tutorialScene.isOpen || anySceneOpen() || anySectionOpen() || this.main.area.heavyMetal || 
		    		this.mouseDown  || this.main.boxScene.isDragging || this.main.inventoryScene.isDragging || this.main.UI.isDragging
		    	) return;
		    	this.main.UI.importTeamButtonHandle(1);
				break;
			case 'F3':
				e.preventDefault(); 
				if (
		    		gameLocked() || this.main.tutorialScene.isOpen || anySceneOpen() || anySectionOpen() || this.main.area.heavyMetal || 
		    		this.mouseDown  || this.main.boxScene.isDragging || this.main.inventoryScene.isDragging || this.main.UI.isDragging
		    	) return;
		    	this.main.UI.importTeamButtonHandle(2);
				break;
			case 'F4':
				e.preventDefault();
				if (
		    		gameLocked() || this.main.tutorialScene.isOpen || anySceneOpen() || anySectionOpen() || this.main.area.heavyMetal || 
		    		this.mouseDown  || this.main.boxScene.isDragging || this.main.inventoryScene.isDragging || this.main.UI.isDragging
		    	) return;
		    	this.main.UI.importTeamButtonHandle(3);
				break;
			case 'F5':
				e.preventDefault(); 
				if (
		    		gameLocked() || this.main.tutorialScene.isOpen || anySceneOpen() || anySectionOpen() || this.main.area.heavyMetal || 
		    		this.mouseDown  || this.main.boxScene.isDragging || this.main.inventoryScene.isDragging || this.main.UI.isDragging
		    	) return;
		    	this.main.UI.importTeamButtonHandle(4);
				break;

			default:
				if (/^[1-9]$/.test(e.key)) {
					if (
						gameLocked() ||
						this.main.tutorialScene.isOpen ||
						anySceneOpen() ||
						anySectionOpen() ||
						this.mouseDown ||
						this.main.area.heavyMetal ||
						this.main.boxScene.isDragging ||
						this.main.inventoryScene.isDragging ||
						this.main.UI.isDragging
					) return;

					const i = parseInt(e.key) - 1;
					const pokemon = this.main.team.pokemon[i];
					if (!pokemon) return;

					if (this.main.game.stopped) {
						if (pokemon.ability?.id !== 'timeWarp') {
							return playSound('pop0', 'ui');
						}

						if (
							this.main.game.deployingUnit &&
							this.main.game.deployingUnit !== pokemon
						) {
							return playSound('pop0', 'ui');
						}

						if (this.main.game.deployingUnit === pokemon) {
							this.main.game.cancelDeployUnit();

							if (this.main.game._timeWarpHoverHandler) {
								window.removeEventListener(
									'pointermove',
									this.main.game._timeWarpHoverHandler
								);
								this.main.game._timeWarpHoverHandler = null;
							}

							this.main.game.mouse.x = undefined;
							this.main.game.mouse.y = undefined;
							this.main.game.lastTime = 0;
							this.main.game.animate(performance.now());
							return;
						}

						this.main.game.tryDeployUnit(i, false);

						if (
							this.main.game.deployingUnit === pokemon &&
							this.main.game.stopped
						) {
							if (this.main.game._timeWarpHoverHandler) {
								window.removeEventListener(
									'pointermove',
									this.main.game._timeWarpHoverHandler
								);
							}

							this.main.game._timeWarpHoverHandler = (ev) => {
								if (
									!this.main.game.stopped ||
									this.main.game.deployingUnit !== pokemon
								) {
									window.removeEventListener(
										'pointermove',
										this.main.game._timeWarpHoverHandler
									);
									this.main.game._timeWarpHoverHandler = null;
									return;
								}

								const canvas = this.main.game.canvas;
								const rect = canvas.getBoundingClientRect();

								if (
									ev.clientX >= rect.left &&
									ev.clientX <= rect.right &&
									ev.clientY >= rect.top &&
									ev.clientY <= rect.bottom
								) {
									const scaleX = canvas.width / rect.width;
									const scaleY = canvas.height / rect.height;

									this.main.game.mouse.x =
										(ev.clientX - rect.left) * scaleX;

									this.main.game.mouse.y =
										(ev.clientY - rect.top) * scaleY;

									this.main.game.activeTile =
										this.main.area.placementTiles.find(tile =>
											this.main.game.mouse.x > tile.position.x &&
											this.main.game.mouse.x < tile.position.x + tile.size &&
											this.main.game.mouse.y > tile.position.y &&
											this.main.game.mouse.y < tile.position.y + tile.size
										) || null;

									this.main.area.placementTiles.forEach(tile => {
										tile.update(this.main.game.mouse);
									});

									this.main.game.lastTime = 0;
									this.main.game.animate(performance.now());
								}
							};

							window.addEventListener(
								'pointermove',
								this.main.game._timeWarpHoverHandler
							);

							this.main.area.placementTiles.forEach(tile => {
								tile.update(this.main.game.mouse);
							});

							this.main.game.lastTime = 0;
							this.main.game.animate(performance.now());
						}

						return;
					}

					if (this.main.game.deployingUnit) {
						if (this.main.game.deployingUnit === pokemon) {
							this.main.game.cancelDeployUnit();
						}
						return;
					}

					this.main.game.tryDeployUnit(i);
				} else if (e.key === "0") {
					if (
						gameLocked() ||
						this.main.tutorialScene.isOpen ||
						anySceneOpen() ||
						anySectionOpen() ||
						this.mouseDown ||
						this.main.area.heavyMetal ||
						this.main.boxScene.isDragging ||
						this.main.inventoryScene.isDragging ||
						this.main.UI.isDragging
					) return;

					if (this.main.team.pokemon.length !== 10) return;

					const pokemon = this.main.team.pokemon[9];
					if (!pokemon) return;

					if (this.main.game.stopped) {
						if (pokemon.ability?.id !== 'timeWarp') {
							return playSound('pop0', 'ui');
						}

						if (
							this.main.game.deployingUnit &&
							this.main.game.deployingUnit !== pokemon
						) {
							return playSound('pop0', 'ui');
						}

						if (this.main.game.deployingUnit === pokemon) {
							this.main.game.cancelDeployUnit();

							this.main.game.mouse.x = undefined;
							this.main.game.mouse.y = undefined;

							this.main.game.lastTime = 0;
							this.main.game.animate(performance.now());
							return;
						}

						this.main.game.tryDeployUnit(9, false);

						if (this.main.game.deployingUnit === pokemon) {
							this.main.area.placementTiles.forEach(tile => {
								tile.update(this.main.game.mouse);
							});

							this.main.game.lastTime = 0;
							this.main.game.animate(performance.now());
						}

						return;
					}

					if (this.main.game.deployingUnit) {
						if (this.main.game.deployingUnit === pokemon) {
							this.main.game.cancelDeployUnit();
						}
						return;
					}

					this.main.game.tryDeployUnit(9);
				}
			break;
		}

		// if (
		// 	this.main.area.routeNumber == 8 && 
		// 	!this.main.player.secrets.stakataka &&
		// 	!this.main.area.inChallenge 
		// ) {
		// 	const key = event.key;
		//     if (key === stakatakaSequence[stakatakaPosition]) {
		//         stakatakaPosition++;
		//         if (stakatakaPosition === stakatakaSequence.length) {
		//         	stakatakaPosition = 0; 
		//         	this.main.player.secrets.stakataka = true;
		// 			this.main.UI.getSecret('stakataka');
		//         }
		//     } else {
		//         stakatakaPosition = 0; 
		//     }
		// }
	}

	remove() {
		window.removeEventListener('keydown', this.keyHandler);
	}
}
