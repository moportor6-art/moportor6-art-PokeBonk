import { text } from '../../file/text.js';
import { playSound } from '../../file/audio.js';
import * as calc from '../pokemon/moveCalculator.js';

export class Enemy {
	constructor(main, pokemon) {
		this.main = main;
		this.lang = main.lang;
		this.pokemon = pokemon;

		this.isEnemy = true;

		if (pokemon.isShiny !== undefined && pokemon.isShiny !== null) {
		  	this.isShiny = pokemon.isShiny;
		} else {
		  	if (Math.floor(Math.random() * 100) === 1) {
		    	this.main.player.statsData[6] += 1;
		    	this.isShiny = true;
		  	} else this.isShiny = false;	
		}
		if (this.isShiny) playSound('shiny', 'effect');

		this.name = pokemon.name.toUpperCase();
		this.image = (this.isShiny) ? pokemon.shiny : pokemon.image;
		this.stats = pokemon.stats;
		this.hp = [pokemon.stats.hp, pokemon.stats.hp];
		this.boost = {
			atk: 0,
			spa: 0,
			spe: 0,
			res: 0,
			crt: 0,
			crtDmg: 0
		};
		this.status = {};
		this.gold = (this.isShiny) ? (pokemon.gold * 3) : pokemon.gold;

		const randomBonus = Math.floor(Math.random() * 3) + 2; 
		if (this.isShiny) this.points = (pokemon.points * 5) + (randomBonus * 2);
		else this.points = pokemon.points + randomBonus;
		
		this.actions = pokemon.actions;
	}

	getSaveData() {
		this.pokemon.isShiny = this.isShiny;
		return this.pokemon;
	}

	getHealed(value) {
		playSound('potion', 'effect');
		this.main.chatScene.newMessage(`<span class="red">${this.name}</span> <span class="hp">+${value} ${text.stats.short.hp[this.main.lang].toUpperCase()}</span>.<br>`);
		this.changeHp(value);
		this.main.battleScene.showDamage('enemy', value, 'heal');

		this.main.battleScene.enemySpriteImg.classList.add("healing");
		this.main.battleScene.enemySpriteImg.addEventListener("animationend", () => {
		    this.main.battleScene.enemySpriteImg.classList.remove("healing");
		}, { once: true });	
	}

	getDamaged(value) {
		if (value > 0)playSound('effective', 'effect');
		else playSound('noEffective', 'effect');
		this.main.chatScene.newMessage(`<span class="red">${this.name}</span> <span class="hp">-${value} ${text.stats.short.hp[this.main.lang].toUpperCase()}</span>.<br>`);
		this.changeHp(-value);	
		this.main.player.statsData[3] += value;


		this.main.battleScene.enemySpriteImg.classList.add("hit-enemy");
		this.main.battleScene.enemySpriteImg.addEventListener("animationend", () => {
		    this.main.battleScene.enemySpriteImg.classList.remove("hit-enemy");
		}, { once: true });
	}

	changeHp(value) {
		this.hp[0] += value;
		if (this.hp[0] > this.hp[1]) this.hp[0] = this.hp[1];
		else if (this.hp[0] <= 0) {
			this.faint();
			this.main.battle.endBattle(true);
		}
		const percent = (this.hp[0] / this.hp[1]) * 100;
   	 	this.main.battleScene[`enemyHealthBar`].style.width = `${percent}%`;
	}

	faint() {
		this.hp[0] = 0;
		this.restoreStatus();
		playSound('faint', 'effect');

	    this.main.battleScene.enemySpriteImg.classList.add('enemy-death');
	}

	useMove(move) {
		if (this.hp[0] <= 0 || this.main.player.hp[0] <= 0 || !this.main.battle.active) return;
		let gc = false
		let damage = 0;
		let elude = false;

		if (this.main.player.status.elusion && move.eludible) {
			let tryElude = Math.floor(Math.random() * 100) + 1;
			if (tryElude < 15) elude = true;
		}

		if (move.type != 'status' && !elude) gc = calc.criticalCalculator(this);

		if (gc) this.main.chatScene.newMessage(
			`<span class="red">${this.name}</span> ${text.battle.uses[this.lang]} <span class="yellow">${move.name[this.lang].toUpperCase()}</span> ${text.battle.crt[this.lang]}.<br>`
		);
		else this.main.chatScene.newMessage(
			`<span class="red">${this.name}</span> ${text.battle.uses[this.lang]} <span class="yellow">${move.name[this.lang].toUpperCase()}</span>.<br>`
		);

		if (elude) return this.main.player.eludeMove();

		if (move.type != 'status') {
			damage = calc.damageCalculator(move, this, this.main.player, gc);
			this.main.player.getDamaged(damage);
			if (gc) this.main.battleScene.showDamage('player', `${damage}!`, 'crit');
			else this.main.battleScene.showDamage('player', damage, 'damage');
		}

		if (move.type == 'status') playSound('buff', 'effect');

		if (move.heal) this.getHealed(calc.healCalculator(move, this));
		if (move.effect) calc.moveEffect(move.effect, this, this.main.player, damage);
		if (move.status) calc.moveStatus(move.status, this, this.main.player);

		if (this.status['erosion']) {
			this.damageErosion();
			if (this.hp[0] <= 0) return;
			this.reduceErosion();
		}
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
       				this.main.battleScene.showBoost('enemy', stat);
       				this.main.chatScene.newMessage(`<span class="red">${this.name}</span> <span class="${stat}">+${buff}% ${text.stats.short[stat][this.lang].toUpperCase()}</span>.<br>`);
       			} else { 
       				this.main.battleScene.showDebuff('enemy', stat);
       				this.main.chatScene.newMessage(`<span class="red">${this.name}</span> <span class="${stat}">${buff}% ${text.stats.short[stat][this.lang].toUpperCase()}</span>.<br>`);
       			}
       		} else {
       			if (buff > 0)  {
       				this.main.battleScene.showBoost('enemy', stat);
       				this.main.chatScene.newMessage(`<span class="red">${this.name}</span> <span class="${stat}">+${buff} ${text.stats.short[stat][this.lang].toUpperCase()}</span>.<br>`);
       			} else  {
       				this.main.battleScene.showDebuff('enemy', stat);
       				this.main.chatScene.newMessage(`<span class="red">${this.name}</span> <span class="${stat}">${buff} ${text.stats.short[stat][this.lang].toUpperCase()}</span>.<br>`);
       			}
       		}

       		if (buff > 0) {
       			this.main.battleScene.enemySpriteImg.classList.add("buff");
				this.main.battleScene.enemySpriteImg.addEventListener("animationend", () => {
				    this.main.battleScene.enemySpriteImg.classList.remove("buff");
				}, { once: true });
       		} else {
       			this.main.battleScene.enemySpriteImg.classList.add("debuff");
				this.main.battleScene.enemySpriteImg.addEventListener("animationend", () => {
				    this.main.battleScene.enemySpriteImg.classList.remove("debuff");
				}, { once: true });
       		}
    	});
	}

	/* STATUS */
	restoreStatus = () => {
		this.status = {}
		this.main.battleScene.updateStatus();
	}

	reduceStatus() {
		if (this.status['elusion']) this.loseElusion();
		if (this.status['poison'] && !this.main.player.passives['purpleNectar']) this.reducePoison();
		if (this.status['burn']) this.reduceBurn();
	}

	applyCharge = (value) => {
		if (!this.main.battle.active) return;

		this.status['charge'] = (this.status['charge'] || 0) + value;
		this.main.chatScene.newMessage(`<span class="red">${this.name}</span> <span class="spa">+${value} ${text.status.charge[0][this.lang]}</span>.<br>`);
		this.main.battleScene.showStatus('enemy', `+${value} ${text.status.charge[0][this.lang]}`, 'charge');
		this.main.battleScene.updateStatus();

		this.main.battleScene.enemySpriteImg.classList.add("charge-animg");
		this.main.battleScene.enemySpriteImg.addEventListener("animationend", () => {
		    this.main.battleScene.enemySpriteImg.classList.remove("charge-animg");
		}, { once: true });	
	}

	loseCharges = (discharge = false) => {
		this.main.chatScene.newMessage(`<span class="red">${this.name}</span> ${text.status.charge[1][this.lang]}.<br>`);
		delete this.status['charge'];
		this.main.battleScene.updateStatus();
	}

	applyElusion = (value) => {
		if (!this.main.battle.active) return;

		this.status['elusion'] = (this.status['elusion'] || 0) + value;
		this.main.chatScene.newMessage(`<span class="red">${this.name}</span> ${text.status.elusion[1][this.lang]}.<br>`);
		this.main.battleScene.showStatus('enemy', `+${value} ${text.status.elusion[0][this.lang]}`, 'elusion');
		
		this.main.battleScene.updateStatus();
		this.main.battleScene.enemySpriteImg.classList.add("dodge");
		this.main.battleScene.enemySpriteImg.addEventListener("animationend", () => {
			this.main.battleScene.enemySpriteImg.classList.remove("dodge");
		}, { once: true });
	}

	eludeMove() {
		playSound('dodge', 'effect')
		this.main.battleScene.showStatus('enemy', text.status.elusion[0][this.lang], 'elusion');
		this.main.chatScene.newMessage(`<span class="red">${this.name}</span> ${text.status.elusion[2][this.lang]}.<br>`);

		this.main.battleScene.enemySpriteImg.classList.add("dodge");
		this.main.battleScene.enemySpriteImg.addEventListener("animationend", () => {
			this.main.battleScene.enemySpriteImg.classList.remove("dodge");
		}, { once: true });
	}

	loseElusion() {
		this.status['elusion']--;
		if (this.status['elusion'] == 0) {
			this.main.chatScene.newMessage(`<span class="red">${this.name}</span> ${text.status.elusion[3][this.lang]}.<br>`);
			delete this.status['elusion'];
		}
		this.main.battleScene.updateStatus();
	}

	applyPoison = (value) => {
		if (!this.main.battle.active) return;
		let total = value;
		if (this.main.player.passives['redNectar']) total += 3;

		this.status['poison'] = (this.status['poison'] || 0) + total;
		

		this.main.chatScene.newMessage(`<span class="red">${this.name}</span> <span class="poi">+${total} ${text.status.poison[0][this.lang]}</span>.<br>`);
		this.main.battleScene.showStatus('enemy', `+${total} ${text.status.poison[0][this.lang]}`, 'poison');
		this.main.battleScene.updateStatus();

		if (this.status['poison'] >= 100) this.main.player.achievementsData[71] = true;

		this.main.battleScene.enemySpriteImg.classList.add("poison-enemy");
		this.main.battleScene.enemySpriteImg.addEventListener("animationend", () => {
			this.main.battleScene.enemySpriteImg.classList.remove("poison-enemy");
		}, { once: true });
	}

	damagePoison() {
		playSound('poison', 'effect');

		let poisonDamage = this.status['poison'];
		this.main.chatScene.newMessage(`
			<span class="red">${this.name.toUpperCase()}</span> <span class="hp">-${poisonDamage} ${text.stats.short.hp[this.main.lang].toUpperCase()}</span> 
			<span class="poi">(${text.status.poison[0][this.lang]})</span>.<br>
		`);

		this.main.battleScene.showDamage('enemy', poisonDamage, 'poison');
		this.changeHp(-poisonDamage);

		this.main.battleScene.enemySpriteImg.classList.add("poison-enemy");
		this.main.battleScene.enemySpriteImg.addEventListener("animationend", () => {
			this.main.battleScene.enemySpriteImg.classList.remove("poison-enemy");
		}, { once: true });
	}

	reducePoison() {
		let reduced = Math.ceil(this.status['poison'] / 2);
		this.status['poison'] -= reduced;
		this.main.chatScene.newMessage(`<span class="red">${this.name}</span> ${text.status.poison[1][this.lang]}<span class="poi"> ${reduced}</span>.<br>`);
		if (this.status['poison'] == 0) delete this.status['poison'];
		this.main.battleScene.updateStatus();
	}

	retireAllPoison() {
		this.status['poison'] = 0;
		this.main.chatScene.newMessage(`<span class="red">${this.name}</span> ${text.status.poison[2][this.lang]}.<br>`);
		delete this.status['poison'];
		this.main.battleScene.updateStatus();
	}

	applyErosion = (value) => {
		if (!this.main.battle.active) return;
		this.status['erosion'] = (this.status['erosion'] || 0) + value;

		this.main.chatScene.newMessage(`<span class="red">${this.name}</span> <span class="ero">+${value} ${text.status.erosion[0][this.lang]}</span>.<br>`);
		this.main.battleScene.showStatus('enemy', `+${value} ${text.status.erosion[0][this.lang]}`, 'erosion');
		this.main.battleScene.updateStatus();
	}

	damageErosion() {
		let erosionDamage = this.status['erosion'] * 3;
		this.main.chatScene.newMessage(`
			<span class="red">${this.name.toUpperCase()}</span> <span class="hp">-${erosionDamage} ${text.stats.short.hp[this.main.lang].toUpperCase()}</span> 
			<span class="ero">(${text.status.erosion[0][this.lang]})</span>.<br>
		`);

		this.main.battleScene.showDamage('enemy', erosionDamage, 'erosion');
		this.changeHp(-erosionDamage);
	}

	reduceErosion() {
		this.status['erosion'] -= 1;
		this.main.chatScene.newMessage(`<span class="red">${this.name}</span> ${text.status.erosion[1][this.lang]}<span class="ero"> -1</span>.<br>`);
		if (this.status['erosion'] == 0) delete this.status['erosion'];
		this.main.battleScene.updateStatus();
	}

	applyBurn = (value) => {
		if (!this.main.battle.active) return;
		this.status['burn'] = (this.status['burn'] || 0) + value;

		this.main.chatScene.newMessage(`<span class="red">${this.name}</span> <span class="bur">+${value} ${text.status.burn[0][this.lang]}</span>.<br>`);
		this.main.battleScene.showStatus('enemy', `+${value} ${text.status.burn[0][this.lang]}`, 'burn');
		this.main.battleScene.updateStatus();

		this.main.battleScene.enemySpriteImg.classList.add("poison-enemy");
		this.main.battleScene.enemySpriteImg.addEventListener("animationend", () => {
			this.main.battleScene.enemySpriteImg.classList.remove("poison-enemy");
		}, { once: true });
	}

	damageBurn() {
		playSound('burn', 'effect');
		let burnDamage 
		if (this.pokemon.isBoss || this.pokemon.isFinalBoss) burnDamage = Math.floor(this.hp[1] * 0.02);
		else burnDamage = Math.floor(this.hp[1] * 0.05);
		this.main.chatScene.newMessage(`
			<span class="red">${this.name.toUpperCase()}</span> <span class="hp">-${burnDamage} ${text.stats.short.hp[this.main.lang].toUpperCase()}</span> 
			<span class="bur">(${text.status.burn[0][this.lang]})</span>.<br>
		`);
		this.main.battleScene.showDamage('enemy', burnDamage, 'burn');
		this.changeHp(-burnDamage);

		this.main.battleScene.enemySpriteImg.classList.add("poison-enemy");
		this.main.battleScene.enemySpriteImg.addEventListener("animationend", () => {
			this.main.battleScene.enemySpriteImg.classList.remove("poison-enemy");
		}, { once: true });
	}

	reduceBurn() {
		this.status['burn'] -= 1;
		this.main.chatScene.newMessage(`<span class="red">${this.name}</span> ${text.status.burn[1][this.lang]}<span class="bur"> 1</span>.<br>`);
		if (this.status['burn'] == 0) delete this.status['burn'];
		this.main.battleScene.updateStatus();
	}

	applyRestoration = (value) => {
		if (!this.main.battle.active) return;
		this.status['restoration'] = (this.status['restoration'] || 0) + value;

		this.main.chatScene.newMessage(`<span class="red">${this.name}</span> <span class="hea">+${value} ${text.status.restoration[0][this.lang]}</span>.<br>`);
		this.main.battleScene.showStatus('enemy', `+${value} ${text.status.restoration[0][this.lang]}`, 'restoration');
		this.main.battleScene.updateStatus();

		this.main.battleScene.enemySpriteImg.classList.add("healing");
		this.main.battleScene.enemySpriteImg.addEventListener("animationend", () => {
		    this.main.battleScene.enemySpriteImg.classList.remove("healing");
		}, { once: true });	
	}

	healRestoration() {
		let restore = this.status['restoration'] * 3;
		this.main.chatScene.newMessage(`
			<span class="red">${this.name.toUpperCase()}</span> <span class="hp">+${restore} ${text.stats.short.hp[this.main.lang].toUpperCase()}</span> 
			<span class="hea">(${text.status.restoration[0][this.lang]})</span>.<br>
		`);
		playSound('potion', 'effect');
		this.main.battleScene.showDamage('enemy', restore, 'heal');
		this.changeHp(restore);

		this.main.battleScene.enemySpriteImg.classList.add("healing");
		this.main.battleScene.enemySpriteImg.addEventListener("animationend", () => {
		    this.main.battleScene.enemySpriteImg.classList.remove("healing");
		}, { once: true });	
	}

	reduceRestoration() {
		this.status['restoration'] -= 1;
		this.main.chatScene.newMessage(`<span class="red">${this.name}</span> ${text.status.restoration[1][this.lang]}<span class="hea"> 1</span>.<br>`);
		if (this.status['restoration'] == 0) delete this.status['restoration'];
		this.main.battleScene.updateStatus();
	}

	applyFear = (value) => {
		if (!this.main.battle.active) return;
		this.status['fear'] = (this.status['fear'] || 0) + value;

		this.main.chatScene.newMessage(`<span class="red">${this.name}</span> <span class="fea">+${value} ${text.status.fear[0][this.lang]}</span>.<br>`);
		this.main.battleScene.showStatus('enemy', `+${value} ${text.status.fear[0][this.lang]}`, 'fear');
		this.main.battleScene.updateStatus();

		// TEST ANIMATION
		this.main.battleScene.enemySpriteImg.classList.add("poison-enemy");
		this.main.battleScene.enemySpriteImg.addEventListener("animationend", () => {
			this.main.battleScene.enemySpriteImg.classList.remove("poison-enemy");
		}, { once: true });
	}

	applyFrailty = (value) => {
		if (!this.main.battle.active) return;
		this.status['frailty'] = (this.status['frailty'] || 0) + value;

		this.main.chatScene.newMessage(`<span class="red">${this.name}</span> <span class="fra">+${value} ${text.status.frailty[0][this.lang]}</span>.<br>`);
		this.main.battleScene.showStatus('enemy', `+${value} ${text.status.frailty[0][this.lang]}`, 'frailty');
		this.main.battleScene.updateStatus();

		// TEST ANIMATION
		this.main.battleScene.enemySpriteImg.classList.add("poison-enemy");
		this.main.battleScene.enemySpriteImg.addEventListener("animationend", () => {
			this.main.battleScene.enemySpriteImg.classList.remove("poison-enemy");
		}, { once: true });
	}

	damageFrailty() {
		let frailtyDamage = this.status['frailty'];
		this.main.chatScene.newMessage(`
			<span class="red">${this.name.toUpperCase()}</span> <span class="hp">-${frailtyDamage} ${text.stats.short.hp[this.main.lang].toUpperCase()}</span> 
			<span class="fra">(${text.status.frailty[0][this.lang]})</span>.<br>
		`);
		this.main.battleScene.showDamage('enemy', frailtyDamage, 'frailty');
		this.changeHp(-frailtyDamage);

		// TEST ANIMATION
		this.main.battleScene.enemySpriteImg.classList.add("poison-enemy");
		this.main.battleScene.enemySpriteImg.addEventListener("animationend", () => {
			this.main.battleScene.enemySpriteImg.classList.remove("poison-enemy");
		}, { once: true });
	}

}