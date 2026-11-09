import { text } from '../../file/text.js';
import * as calc from '../pokemon/moveCalculator.js';
import { playSound } from '../../file/audio.js';

export class Player {
	constructor(main, playerData) {
		this.main = main;
		this.lang = main.lang;

		this.specie = playerData.specie;
		this.name = playerData.name;
		this.image = playerData.image;
		this.gold = playerData.gold ?? 80; 
		this.stats = playerData.stats;
		this.moves = playerData.moves;
		this.hp = playerData.hp ?? [this.stats.hp, this.stats.hp];
		this.ap = [this.stats.ap, this.stats.ap];
		this.mp = [this.stats.mp, this.stats.mp];
		this.boost = {
			atk: 0,
			spa: 0,
			spe: 0,
			res: 0,
			crt: 0,
			crtDmg: 0
		};
		
		this.status = {};
		this.passives = playerData.passives ?? {};

		this.statsData = playerData.statsData ?? { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 };
		this.achievementsData = playerData.achievementsData ?? {};
		this.points = playerData.points ?? 0;
	}

	getSaveData() {
		return {
			name: this.name,
			specie: this.specie,
			image: this.image,
			gold: this.gold,
			stats: this.stats,
			moves: this.moves,
			hp: this.hp,
			passives: this.passives,
			statsData: this.statsData,
			achievementsData: this.achievementsData,
			points: this.points
		};
	}

	getDamaged(value) {
		if (value > 0) playSound('effective', 'effect');
		else playSound('noEffective', 'effect');
		this.main.chatScene.newMessage(`<span class="green">${this.name.toUpperCase()}</span> <span class="hp">-${value} ${text.stats.short.hp[this.main.lang].toUpperCase()}</span>.<br>`);
		this.changeHp(-value);	

		this.main.battleScene.playerSpriteImg.classList.add("hit-player");
		this.main.battleScene.playerSpriteImg.addEventListener("animationend", () => {
		    this.main.battleScene.playerSpriteImg.classList.remove("hit-player");
		}, { once: true });
	}

	getHealed(value, stat = false) {
		playSound('potion', 'effect');
		this.main.chatScene.newMessage(`<span class="green">${this.name.toUpperCase()}</span> <span class="hp">+${value} ${text.stats.short.hp[this.main.lang].toUpperCase()}</span>.<br>`);
		this.changeHp(value);	
		this.main.battleScene.showDamage('player', value, 'heal');
		if (stat) this.main.player.statsData[4] += value;

		this.main.battleScene.playerSpriteImg.classList.add("healing");
		this.main.battleScene.playerSpriteImg.addEventListener("animationend", () => {
			this.main.battleScene.playerSpriteImg.classList.remove("healing");
		}, { once: true });
	}

	changeHp(value) {
		this.hp[0] += value;
		if (this.hp[0] > this.hp[1]) this.hp[0] = this.hp[1];
		else if (this.hp[0] <= 0) {
			this.hp[0] = 0;
			if (this.passives['focusBand'] && this.main.battle.focusBand) {
				this.main.battle.focusBand = false;
				this.main.chatScene.newMessage(`${text.items.focusBand[this.main.lang]}.<br>`);
				this.main.chatScene.newMessage(`<span class="green">${this.name.toUpperCase()}</span> <span class="hp">+1 ${text.stats.short.hp[this.main.lang].toUpperCase()}</span>.<br>`);
				this.hp[0] = 1;
			}
		}

		if ((this.hp[0] < (this.hp[1]/3)) && this.passives['weaknessPolicy'] && this.main.battle.weaknessPolicy) {
			this.main.battle.weaknessPolicy = false;
			this.mp[0] = this.mp[1];
			this.main.statusScene.stats['mp'].value.innerText = `${this.mp[0]}/${this.mp[1]}`;
			this.main.chatScene.newMessage(`${text.items.weaknessPolicy[this.main.lang]}.<br>`);
		}

		if (this.hp[0] == 0) this.main.battle.endBattle(false);

		const percent = (this.hp[0] / this.hp[1]) * 100;
   	 	this.main.battleScene[`playerHealthBar`].style.width = `${percent}%`;
   	 	this.main.statusScene.updateStatus();
	}

	changeGold(value) {
		this.gold += value;
		this.main.infoScene.gold.innerText = `$${this.gold}`;
		if (value > 0) {
			this.statsData[5] += value;
			this.main.chatScene.newMessage(`${text.general.goldEarn[this.lang]} <span class="yellow">$${value}</span>.<br>`);
		} else {
			this.main.chatScene.newMessage(`${text.general.goldSpent[this.lang]} <span class="yellow">$${Math.abs(value)}</span>.<br>`);
		}
		if (this.gold >= 999) this.achievementsData[72] = true;
	}

	earnPoints(value) {
		this.points += value;
	}

	learnMove(move) {
		playSound('obtain', 'ui');
		this.moves.push(move);
		let pos = this.moves.length - 1;

		this.main.panelScene.moves[pos].className = 'panel-move stroke'
		this.main.panelScene.moves[pos].innerHTML = move.name[this.lang];
		this.main.panelScene.moves[pos].addEventListener('mouseover', () => { 
			this.main.panelScene.moves.forEach(move => { if (move.className == 'panel-move-selected stroke') move.className = 'panel-move stroke' });
			this.main.panelScene.moves[pos].className = 'panel-move-selected stroke';
			this.main.panelScene.displayMove(this.moves[pos]);
		})
		this.main.panelScene.moves[pos].addEventListener('click', () => { 
			this.useMove(this.moves[pos]);
		})
	}

	upgradeMove(move) {
		playSound('obtain', 'ui');
		const unlearnMove = this.moves.find((mv) => mv.id == move.id)
		const indx = this.moves.indexOf(unlearnMove);
		this.moves[indx] = move;

		this.main.panelScene.moves[indx].innerHTML = move.name[this.lang];
	}

	useMove(move) {
		if (!move.able || !this.main.battle.active || !this.main.battle.playing) return;
		let gc = false
		let damage = 0;
		let elude = false;

		if (this.main.enemy.status.elusion && move.eludible) {
			let tryElude = Math.floor(Math.random() * 100) + 1;
			if (tryElude < 15) elude = true;
		}

		if (move.type != 'status' && !elude && !this.passives['gracidea']) gc = calc.criticalCalculator(this);

		if (gc) this.main.chatScene.newMessage(
			`<span class="green">${this.name}</span> ${text.battle.uses[this.lang]} <span class="yellow">${move.name[this.lang].toUpperCase()}</span> ${text.battle.crt[this.lang]}.<br>`
		);
		else this.main.chatScene.newMessage(
			`<span class="green">${this.name}</span> ${text.battle.uses[this.lang]} <span class="yellow">${move.name[this.lang].toUpperCase()}</span>.<br>`
		);
		
		if (move.cost.type == 'ap') this.changeAP(-move.cost.value) 
		else {
			this.changeMP(-move.cost.value);
			if (this.passives['magnet'] && this.main.battle.magnetAble) {
				this.main.battle.magnetAble = false;
				this.changeAP(1, true);
			}
		}

		if (gc && this.passives['clover']) {
			this.getHealed(5, true);
		}

		if (move.uses) move.uses[0]--;
		if (move.cd) move.cd[0] = move.cd[1];

		if (elude) {
			this.main.panelScene.displayMove(move);
			this.updateMoves();
			return this.main.enemy.eludeMove();
		}

		if (move.type != 'status') {
			damage = calc.damageCalculator(move, this, this.main.enemy, gc);
			if (this.main.battle.turn == 1 && this.passives['magmarizer']) damage = Math.ceil(damage * 1.2);
			if (this.main.battle.focusSash && this.passives['focusSash']) {
				this.main.battle.focusSash = false;
				damage = Math.ceil(damage * 1.5);
			}

			this.main.enemy.getDamaged(damage);
			if (gc) this.main.battleScene.showDamage('enemy', `${damage}!`, 'crit');
			else this.main.battleScene.showDamage('enemy', damage, 'damage');

			if (damage >= 500) this.achievementsData[70] = true;
		}
		
		if (move.type == 'status') playSound('buff', 'effect');

		if (this.passives['shellBell'] && damage > 0) {
			this.getHealed(Math.ceil(damage * 0.05), true);
		}

		if (this.passives['goldTeeth']) if (damage > 0) this.changeGold(Math.ceil(damage / 50));

		if (move.heal) this.getHealed(calc.healCalculator(move, this), true);
		if (move.effect) calc.moveEffect(move.effect, this, this.main.enemy, damage, gc);
		if (move.status) calc.moveStatus(move.status, this, this.main.enemy);

		if (this.status['erosion']) {
			this.damageErosion();
			this.reduceErosion();
			if (this.hp[0] <= 0) return this.main.battle.endBattle(false);
		}

		this.main.panelScene.displayMove(move);
		this.updateMoves();
	}

	changeAP(value, msg = false) {
		this.ap[0] += value;
		if (this.ap[0] < 0) this.ap[0] = 0; //test
		this.main.statusScene.stats['ap'].value.innerText = `${this.ap[0]}/${this.ap[1]}`;
		if (msg) {
			if (value > 0) {
				this.main.chatScene.newMessage(`<span class="green">${this.name}</span> <span class="ap">+${value} ${text.stats.ap[this.lang]}</span>.<br>`);
				this.main.battleScene.showStatus('player', `+${value} ${text.stats.ap[this.lang]}`, 'ap');
			}
			else {
				this.main.chatScene.newMessage(`<span class="green">${this.name}</span> <span class="ap">${value} ${text.stats.ap[this.lang]}</span>.<br>`);
				this.main.battleScene.showStatus('player', `${value} ${text.stats.ap[this.lang]}`, 'ap');
			}
		}
		this.updateMoves(); //test
	}

	changeMP(value, msg = false) {
		this.mp[0] += value;
		if (this.mp[0] < 0) this.mp[0] = 0; //test
		this.main.statusScene.stats['mp'].value.innerText = `${this.mp[0]}/${this.mp[1]}`;
		if (msg) {
			if (value > 0) {
				this.main.chatScene.newMessage(`<span class="green">${this.name}</span> <span class="mp">+${value} ${text.stats.mp[this.lang]}</span>.<br>`);
				this.main.battleScene.showStatus('player', `+${value} ${text.stats.mp[this.lang]}`, 'mp');
			}
			else {
				this.main.chatScene.newMessage(`<span class="green">${this.name}</span> <span class="mp">${value} ${text.stats.mp[this.lang]}</span>.<br>`);
				this.main.battleScene.showStatus('player', `${value} ${text.stats.mp[this.lang]}`, 'mp');
			}
		}
		this.updateMoves(); //test
	}

	updateMoves() {
		this.moves.forEach((move, i) => {
			if (
				(move.cost.type == 'ap' && this.ap[0] < move.cost.value) ||
				(move.cost.type == 'mp' && this.mp[0] < move.cost.value) ||
				(move.cost.type == 'mp' && this.mp[0] < move.cost.value) ||
				(move.cd != undefined && move.cd[0] != 0) || 
				(move.uses && move.uses[0] == 0)
			) {
				move.able = false;
				this.main.panelScene.moves[i].style.opacity = 0.5;
			} else {
				move.able = true;
				this.main.panelScene.moves[i].style.opacity = 1;
			}
		})
	}

	reduceMovesCD() {
		this.moves.forEach(move => {
			if (move.cd != undefined && move.cd[0] != 0) move.cd[0]--;
		})
		this.updateMoves();
	}

	restoreMovesUses() {
		this.moves.forEach(move => {
			if (move.uses) move.uses[0] = move.uses[1];
		})
		this.updateMoves();
	}

	restoreMoves() {
		this.moves.forEach(move => {
			if (move.cd != undefined && move.cd[0] != 0) move.cd[0] = 0;
			if (move.uses) move.uses[0] = move.uses[1];
		})

		this.updateMoves();
	}

	restoreTurn() {
		this.ap[0] = this.ap[1];
		this.reduceMovesCD();
		this.restoreMovesUses();

		this.main.statusScene.stats['ap'].value.innerText = `${this.ap[0]}/${this.ap[1]}`;
	}

	restoreBattle() {
		this.ap[0] = this.ap[1];
		this.mp[0] = this.mp[1];

		this.restoreBoost();
		this.restoreMoves();
		this.restoreStatus();

		this.main.statusScene.stats['ap'].value.innerText = `${this.ap[0]}/${this.ap[1]}`;
		this.main.statusScene.stats['mp'].value.innerText = `${this.mp[0]}/${this.mp[1]}`;
	}

	applyBoost = (boost, percent = false) => {
	    Object.entries(boost).forEach(([stat, value]) => {
	    	let buff = value[Math.floor(Math.random() * value.length)]
	    	if (percent) {
	    		buff = Math.ceil(this.stats[stat] * buff)
	    	} 
       		this.boost[stat] += buff;
       		if (['res', 'crt', 'crtDmg'].includes(stat)) {
       			if (buff > 0) {
       				this.main.battleScene.showBoost('player', stat);
       				this.main.chatScene.newMessage(`<span class="green">${this.name}</span> <span class="${stat}">+${buff}% ${text.stats.short[stat][this.lang].toUpperCase()}</span>.<br>`);
       			} else {
       				this.main.battleScene.showDebuff('player', stat);
       				this.main.chatScene.newMessage(`<span class="red">${this.name}</span> <span class="${stat}">${buff}% ${text.stats.short[stat][this.lang].toUpperCase()}</span>.<br>`);
       			}
       		} else {
       			if (buff > 0) {
       				this.main.battleScene.showBoost('player', stat);
       				this.main.chatScene.newMessage(`<span class="green">${this.name}</span> <span class="${stat}">+${buff} ${text.stats.short[stat][this.lang].toUpperCase()}</span>.<br>`);
       			} else {
       				this.main.battleScene.showDebuff('player', stat);
       			 	this.main.chatScene.newMessage(`<span class="red">${this.name}</span> <span class="${stat}">${buff} ${text.stats.short[stat][this.lang].toUpperCase()}</span>.<br>`);
       			}
       		}

       		if (buff > 0) {
       			this.main.battleScene.playerSpriteImg.classList.add("buff");
				this.main.battleScene.playerSpriteImg.addEventListener("animationend", () => {
				    this.main.battleScene.playerSpriteImg.classList.remove("buff");
				}, { once: true });
       		} else {
       			this.main.battleScene.playerSpriteImg.classList.add("debuff");
				this.main.battleScene.playerSpriteImg.addEventListener("animationend", () => {
				    this.main.battleScene.playerSpriteImg.classList.remove("debuff");
				}, { once: true });
       		}
    	});

    	this.main.statusScene.updateStatus();
    	this.main.panelScene.updateMove();
	}

	restoreBoost = () => {
		this.boost = {
			atk: 0,
			spa: 0,
			spe: 0,
			res: 0,
			crt: 0,
			crtDmg: 0
		};
		this.main.statusScene.updateStatus();
	}

	restoreStatus = () => {
		this.status = {}
		this.main.battleScene.updateStatus();
	}

	/* STATUS */
	reduceStatus() {
		if (this.status['elusion']) this.loseElusion();
		if (this.status['poison']) this.reducePoison();
		if (this.status['burn']) this.reduceBurn();
		if (this.status['restoration']) this.reduceRestoration();
	}

	applyCharge = (value) => {
		if (!this.main.battle.active) return;

		this.status['charge'] = (this.status['charge'] || 0) + value;
		this.main.chatScene.newMessage(`<span class="green">${this.name}</span> <span class="spa">+${value} ${text.status.charge[0][this.lang]}</span>.<br>`);
		this.main.battleScene.showStatus('player', `+${value} ${text.status.charge[0][this.lang]}`, 'charge');

		if (this.status['charge'] >= 10) {
			this.loseCharges();
			this.changeAP(3, true);
		}
		this.main.battleScene.updateStatus();

		this.main.battleScene.playerSpriteImg.classList.add("charge-anim");
		this.main.battleScene.playerSpriteImg.addEventListener("animationend", () => {
			this.main.battleScene.playerSpriteImg.classList.remove("charge-anim");
		}, { once: true });
	}

	loseCharges = (discharge = false) => {
		this.main.chatScene.newMessage(`<span class="green">${this.name}</span> ${text.status.charge[1][this.lang]}.<br>`);
		delete this.status['charge'];
		this.main.battleScene.updateStatus();
	}

	applyWet = (value) => {
		if (!this.main.battle.active) return;

		this.status['wet'] = (this.status['wet'] || 0) + value;
		this.main.chatScene.newMessage(`<span class="green">${this.name}</span> <span class="wet">+${value} ${text.status.wet[0][this.lang]}</span>.<br>`);
		this.main.battleScene.showStatus('player', `+${value} ${text.status.wet[0][this.lang]}`, 'wet');

		if (this.status['wet'] >= 10) {
			this.loseWet();
			this.changeMP(1, true);
		}
		this.main.battleScene.updateStatus();

		this.main.battleScene.playerSpriteImg.classList.add("wet-anim");
		this.main.battleScene.playerSpriteImg.addEventListener("animationend", () => {
			this.main.battleScene.playerSpriteImg.classList.remove("wet-anim");
		}, { once: true });
	}

	loseWet = (discharge = false) => {
		this.main.chatScene.newMessage(`<span class="green">${this.name}</span> ${text.status.wet[1][this.lang]}.<br>`);
		delete this.status['wet'];
		this.main.battleScene.updateStatus();
	}

	applyElusion = (value) => {
		if (!this.main.battle.active) return;

		this.status['elusion'] = (this.status['elusion'] || 0) + value;
		this.main.chatScene.newMessage(`<span class="green">${this.name}</span> ${text.status.elusion[1][this.lang]}.<br>`);
		this.main.battleScene.showStatus('player', `+${value} ${text.status.elusion[0][this.lang]}`, 'elusion');

		this.main.battleScene.updateStatus();
		this.main.battleScene.playerSpriteImg.classList.add("dodge");
		this.main.battleScene.playerSpriteImg.addEventListener("animationend", () => {
			this.main.battleScene.playerSpriteImg.classList.remove("dodge");
		}, { once: true });
	}

	eludeMove() {
		playSound('dodge', 'effect')
		this.main.battleScene.showStatus('player', text.status.elusion[0][this.lang], 'elusion');
		this.main.chatScene.newMessage(`<span class="green">${this.name}</span> ${text.status.elusion[2][this.lang]}.<br>`);
		
		this.main.battleScene.playerSpriteImg.classList.add("dodge");
		this.main.battleScene.playerSpriteImg.addEventListener("animationend", () => {
			this.main.battleScene.playerSpriteImg.classList.remove("dodge");
		}, { once: true });
	}

	loseElusion() {
		this.status['elusion']--;
		if (this.status['elusion'] == 0) {
			this.main.chatScene.newMessage(`<span class="green">${this.name}</span> ${text.status.elusion[3][this.lang]}.<br>`);
			delete this.status['elusion'];
		}
		this.main.battleScene.updateStatus();
	}

	applyPoison = (value) => {
		if (!this.main.battle.active) return;
		this.status['poison'] = (this.status['poison'] || 0) + value;

		this.main.chatScene.newMessage(`<span class="green">${this.name}</span> <span class="poi">+${value} ${text.status.poison[0][this.lang]}</span>.<br>`);
		this.main.battleScene.showStatus('player', `+${value} ${text.status.poison[0][this.lang]}`, 'poison');
		this.main.battleScene.updateStatus();

		this.main.battleScene.playerSpriteImg.classList.add("poison-player");
		this.main.battleScene.playerSpriteImg.addEventListener("animationend", () => {
			this.main.battleScene.playerSpriteImg.classList.remove("poison-player");
		}, { once: true });
	}

	damagePoison() {
		playSound('poison', 'effect');
		let poisonDamage = this.status['poison'];
		this.main.chatScene.newMessage(`
			<span class="green">${this.name.toUpperCase()}</span> <span class="hp">-${poisonDamage} ${text.stats.short.hp[this.main.lang].toUpperCase()}</span> 
			<span class="poi">(${text.status.poison[0][this.lang]})</span>.<br>
		`);
		this.main.battleScene.showDamage('player', poisonDamage, 'poison');
		this.changeHp(-poisonDamage);

		this.main.battleScene.playerSpriteImg.classList.add("poison-player");
		this.main.battleScene.playerSpriteImg.addEventListener("animationend", () => {
			this.main.battleScene.playerSpriteImg.classList.remove("poison-player");
		}, { once: true });
	}

	reducePoison() {
		let reduced = Math.ceil(this.status['poison'] / 2);
		this.status['poison'] -= reduced;
		this.main.chatScene.newMessage(`<span class="green">${this.name}</span> ${text.status.poison[1][this.lang]}<span class="poi"> ${reduced}</span>.<br>`);
		if (this.status['poison'] == 0) delete this.status['poison'];
		this.main.battleScene.updateStatus();
	}

	retireAllPoison() {
		this.status['poison'] = 0;
		this.main.chatScene.newMessage(`<span class="green">${this.name}</span> ${text.status.poison[2][this.lang]}.<br>`);
		delete this.status['poison'];
		this.main.battleScene.updateStatus();
	}

	applyErosion = (value) => {
		if (!this.main.battle.active) return;
		this.status['erosion'] = (this.status['erosion'] || 0) + value;

		this.main.chatScene.newMessage(`<span class="green">${this.name}</span> <span class="ero">+${value} ${text.status.erosion[0][this.lang]}</span>.<br>`);
		this.main.battleScene.showStatus('player', `+${value} ${text.status.erosion[0][this.lang]}`, 'erosion');
		this.main.battleScene.updateStatus();

		//TEST ANIMATION
		this.main.battleScene.playerSpriteImg.classList.add("poison-player");
		this.main.battleScene.playerSpriteImg.addEventListener("animationend", () => {
			this.main.battleScene.playerSpriteImg.classList.remove("poison-player");
		}, { once: true });
	}

	damageErosion() {
		let erosionDamage = this.status['erosion'] * 3;
		this.main.chatScene.newMessage(`
			<span class="green">${this.name.toUpperCase()}</span> <span class="hp">-${erosionDamage} ${text.stats.short.hp[this.main.lang].toUpperCase()}</span> 
			<span class="ero">(${text.status.erosion[0][this.lang]})</span>.<br>
		`);
		this.main.battleScene.showDamage('player', erosionDamage, 'erosion');
		this.changeHp(-erosionDamage);

		//TEST ANIMATION
		this.main.battleScene.playerSpriteImg.classList.add("poison-player");
		this.main.battleScene.playerSpriteImg.addEventListener("animationend", () => {
			this.main.battleScene.playerSpriteImg.classList.remove("poison-player");
		}, { once: true });
	}

	reduceErosion() {
		this.status['erosion'] -= 1;
		this.main.chatScene.newMessage(`<span class="green">${this.name}</span> ${text.status.erosion[1][this.lang]}<span class="ero"> -1</span>.<br>`);
		if (this.status['erosion'] == 0) delete this.status['erosion'];
		this.main.battleScene.updateStatus();
	}

	applyBurn = (value) => {
		if (!this.main.battle.active) return;
		this.status['burn'] = (this.status['burn'] || 0) + value;

		this.main.chatScene.newMessage(`<span class="green">${this.name}</span> <span class="bur">+${value} ${text.status.burn[0][this.lang]}</span>.<br>`);
		this.main.battleScene.showStatus('player', `+${value} ${text.status.burn[0][this.lang]}`, 'burn');
		this.main.battleScene.updateStatus();

		this.main.battleScene.playerSpriteImg.classList.add("poison-player");
		this.main.battleScene.playerSpriteImg.addEventListener("animationend", () => {
			this.main.battleScene.playerSpriteImg.classList.remove("poison-player");
		}, { once: true });
	}

	damageBurn() {
		playSound('burn', 'effect');
		let burnDamage = Math.floor(this.hp[1] * 0.05);
		this.main.chatScene.newMessage(`
			<span class="green">${this.name.toUpperCase()}</span> <span class="hp">-${burnDamage} ${text.stats.short.hp[this.main.lang].toUpperCase()}</span> 
			<span class="bur">(${text.status.burn[0][this.lang]})</span>.<br>
		`);
		this.main.battleScene.showDamage('player', burnDamage, 'burn');
		this.changeHp(-burnDamage);

		this.main.battleScene.playerSpriteImg.classList.add("poison-player");
		this.main.battleScene.playerSpriteImg.addEventListener("animationend", () => {
			this.main.battleScene.playerSpriteImg.classList.remove("poison-player");
		}, { once: true });
	}

	reduceBurn() {
		this.status['burn'] -= 1;
		this.main.chatScene.newMessage(`<span class="green">${this.name}</span> ${text.status.burn[1][this.lang]}<span class="bur"> 1</span>.<br>`);
		if (this.status['burn'] == 0) delete this.status['burn'];
		this.main.battleScene.updateStatus();
	}

	applyRestoration = (value) => {
		if (!this.main.battle.active) return;
		this.status['restoration'] = (this.status['restoration'] || 0) + value;

		this.main.chatScene.newMessage(`<span class="green">${this.name}</span> <span class="hea">+${value} ${text.status.restoration[0][this.lang]}</span>.<br>`);
		this.main.battleScene.showStatus('player', `+${value} ${text.status.restoration[0][this.lang]}`, 'restoration');
		this.main.battleScene.updateStatus();

		this.main.battleScene.playerSpriteImg.classList.add("healing");
		this.main.battleScene.playerSpriteImg.addEventListener("animationend", () => {
			this.main.battleScene.playerSpriteImg.classList.remove("healing");
		}, { once: true });
	}

	healRestoration() {
		let restore = this.status['restoration'] * 3
		this.main.chatScene.newMessage(`
			<span class="green">${this.name.toUpperCase()}</span> <span class="hp">+${restore} ${text.stats.short.hp[this.main.lang].toUpperCase()}</span> 
			<span class="hea">(${text.status.restoration[0][this.lang]})</span>.<br>
		`);
		playSound('potion', 'effect');
		this.main.battleScene.showDamage('player', restore, 'heal');
		this.main.player.statsData[4] += restore;
		this.changeHp(restore);

		this.main.battleScene.playerSpriteImg.classList.add("healing");
		this.main.battleScene.playerSpriteImg.addEventListener("animationend", () => {
			this.main.battleScene.playerSpriteImg.classList.remove("healing");
		}, { once: true });
	}

	reduceRestoration() {
		this.status['restoration'] -= 1;
		this.main.chatScene.newMessage(`<span class="green">${this.name}</span> ${text.status.restoration[1][this.lang]}<span class="hea"> 1</span>.<br>`);
		if (this.status['restoration'] == 0) delete this.status['restoration'];
		this.main.battleScene.updateStatus();
	}

	applyFear = (value) => {
		if (!this.main.battle.active) return;
		this.status['fear'] = (this.status['fear'] || 0) + value;

		this.main.chatScene.newMessage(`<span class="green">${this.name}</span> <span class="fea">+${value} ${text.status.fear[0][this.lang]}</span>.<br>`);
		this.main.battleScene.showStatus('player', `+${value} ${text.status.fear[0][this.lang]}`, 'fear');
		this.main.battleScene.updateStatus();

		//TEST ANIMATION
		this.main.battleScene.playerSpriteImg.classList.add("poison-player");
		this.main.battleScene.playerSpriteImg.addEventListener("animationend", () => {
			this.main.battleScene.playerSpriteImg.classList.remove("poison-player");
		}, { once: true });
	}

	applyFrailty = (value) => {
		if (!this.main.battle.active) return;
		this.status['frailty'] = (this.status['frailty'] || 0) + value;

		this.main.chatScene.newMessage(`<span class="green">${this.name}</span> <span class="fra">+${value} ${text.status.frailty[0][this.lang]}</span>.<br>`);
		this.main.battleScene.showStatus('player', `+${value} ${text.status.frailty[0][this.lang]}`, 'frailty');
		this.main.battleScene.updateStatus();

		//TEST ANIMATION
		this.main.battleScene.playerSpriteImg.classList.add("poison-player");
		this.main.battleScene.playerSpriteImg.addEventListener("animationend", () => {
			this.main.battleScene.playerSpriteImg.classList.remove("poison-player");
		}, { once: true });
	}

	damageFrailty() {
		let frailtyDamage = this.status['frailty'];
		this.main.chatScene.newMessage(`
			<span class="green">${this.name.toUpperCase()}</span> <span class="hp">-${frailtyDamage} ${text.stats.short.hp[this.main.lang].toUpperCase()}</span> 
			<span class="fra">(${text.status.frailty[0][this.lang]})</span>.<br>
		`);
		this.main.battleScene.showDamage('player', frailtyDamage, 'frailty');
		this.changeHp(-frailtyDamage);

		//TEST ANIMATION
		this.main.battleScene.playerSpriteImg.classList.add("poison-player");
		this.main.battleScene.playerSpriteImg.addEventListener("animationend", () => {
			this.main.battleScene.playerSpriteImg.classList.remove("poison-player");
		}, { once: true });
	}

	evolve() {
		this.stats.ap += 1;
		this.ap[0] += 1;
		this.ap[1] += 1;
		this.hp[0] = this.hp[1];

		this.statsData[7] += 1;
		playSound('evolve', 'effect');

		this.main.chatScene.newMessage(`${text.evolution[0][this.main.lang]}<br>`)
		this.main.chatScene.newMessage(`<span class="green">${this.name}</span>  ${text.evolution[1][this.main.lang]}`)
		switch(this.specie) {
			case 'pikachu':
				this.specie = 'raichu';
				this.image = './assets/images/pokemon/player/raichu.png';
				this.achievementsData[61] = true;
				if (this.name.toUpperCase() == 'PIKACHU') this.name = 'RAICHU';
				break;
			case 'cubone':
				this.specie = 'marowak';
				this.image = './assets/images/pokemon/player/marowak.png';
				this.achievementsData[62] = true;
				if (this.name.toUpperCase() == 'CUBONE') this.name = 'MAROWAK';
				break;
			case 'scyther':
				this.specie = 'scizor';
				this.image = './assets/images/pokemon/player/scizor.png';
				this.achievementsData[63] = true;
				if (this.name.toUpperCase() == 'SCYTHER') this.name = 'SCIZOR';
				break;
			case 'marill':
				this.specie = 'azumarill';
				this.image = './assets/images/pokemon/player/azumarill.png';
				this.achievementsData[64] = true;
				if (this.name.toUpperCase() == 'MARILL') this.name = 'AZUMARILL';
				break;
			case 'sneasel':
				this.specie = 'weavile';
				this.image = './assets/images/pokemon/player/weavile.png';
				this.achievementsData[65] = true;
				if (this.name.toUpperCase() == 'SNEASEL') this.name = 'WEAVILE';
				break;
			case 'taillow':
				this.specie = 'swellow';
				this.image = './assets/images/pokemon/player/swellow.png';
				this.achievementsData[66] = true;
				if (this.name.toUpperCase() == 'TAILLOW') this.name = 'SWELLOW';
				break;
			case 'cacnea':
				this.specie = 'cacturne';
				this.image = './assets/images/pokemon/player/cacturne.png';
				this.achievementsData[67] = true;
				if (this.name.toUpperCase() == 'CACNEA') this.name = 'CACTURNE';
				break;
			case 'croagunk':
				this.specie = 'toxicroak';
				this.image = './assets/images/pokemon/player/toxicroak.png';
				this.achievementsData[68] = true;
				if (this.name.toUpperCase() == 'CROAGUNK') this.name = 'TOXICROAK';
				break;
			case 'riolu':
				this.specie = 'lucario';
				this.image = './assets/images/pokemon/player/lucario.png';
				this.achievementsData[69] = true;
				if (this.name.toUpperCase() == 'RIOLU') this.name = 'LUCARIO';
				break;
		}
		this.main.chatScene.newMessage(`<span class="yellow">${this.specie.toUpperCase()}</span>!<br>`);
		this.main.chatScene.newMessage(`<span class="green">${this.name}</span> ${text.evolution[2][this.main.lang]}.<br>`);
		this.main.chatScene.newMessage(`<span class="green">${this.name}</span> ${text.evolution[3][this.main.lang]}.<br>`);
		this.main.infoScene.update();
		this.main.statusScene.updateStatus();
	}

	jawLock(stat, buff) {
		this.stats[stat] += buff;
		this.main.statusScene.updateStatus();
		this.main.chatScene.newMessage(`<span class="green">${this.name}</span> <span class="${stat}">+${buff} ${text.stats.short[stat][this.lang].toUpperCase()}</span>.<br>`);
	}
} 