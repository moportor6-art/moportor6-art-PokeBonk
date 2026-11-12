import { Element } from '../../utils/Element.js';
import { statusData } from '../pokemon/statusData.js';

export class BattleScene {
	constructor(main) {
		this.main = main;
		this.lang = main.lang;
		this.render();
	}

	render() {
		this.container = new Element(this.main.scene, { className: 'battle-container' }).element;
		this.container.style.backgroundImage = `url("${this.main.map.background}")`;
		
		['player', 'enemy'].forEach(battler =>  {
			this[`${battler}InfoContainer`] = new Element(this.container, { className: `battle-info-container battle-info-container-${battler}` }).element;

			this[`${battler}Name`] = new Element(this[`${battler}InfoContainer`], { className: `battle-name` }).element;

			this[`${battler}HealthBarContainer`] = new Element(this[`${battler}InfoContainer`], { className: `battle-health-bar-container` }).element;
			this[`${battler}HealthBar`] = new Element(this[`${battler}HealthBarContainer`], { className: 'battle-health-bar' }).element;
			this[`${battler}StatusContainer`] = new Element(this[`${battler}InfoContainer`], { className: 'battle-status-container' }).element;
			this[`${battler}Status`] = {}

			this[`${battler}Sprite`] = new Element(this.container, { className: `battle-${battler}-sprite` }).element;
		})
        this.update();
	}

	update() {
		this.enemyName.innerText = this.main.enemy.name;
		this.playerName.innerText = this.main.player.name;

		// Player sprite
		if (!this.playerSpriteImg) {
			this.playerSpriteImg = document.createElement('img');
			this.playerSpriteImg.className = 'battle-sprite';
			this.playerSprite.appendChild(this.playerSpriteImg);
		}
		this.playerSpriteImg.src = this.main.player.image;

		// Enemy sprite
		if (!this.enemySpriteImg) {
			this.enemySpriteImg = document.createElement('img');
			this.enemySpriteImg.className = 'battle-sprite';
			this.enemySprite.appendChild(this.enemySpriteImg);
		}
		this.enemySpriteImg.src = this.main.enemy.image;
		this.enemySpriteImg.classList.remove('enemy-death'); 

		this[`enemyHealthBar`].style.width = "100%";
		this[`enemyHealthBar`].style.transition = "none";
		this[`enemyHealthBar`].offsetHeight; 
		this[`enemyHealthBar`].style.width = "100%";
		this[`enemyHealthBar`].style.transition = '0.2s';

		this.updateStatus();
	}

	updateStatus() {
		Object.entries(this.main.player.status).forEach(([type, value]) => {
			if (this.playerStatus[type]) {
				this.playerStatus[type].innerText = value;
			} else {		
				this.playerStatus[type] = new Element(this.playerStatusContainer, { 
					className: `battle-status stroke`, 
					image: statusData[type].image, 
					text: value 
				}).element;
			}
		});

		Object.keys(this.playerStatus).forEach(type => {
			if (!(type in this.main.player.status)) {
				this.playerStatus[type].remove(); 
				delete this.playerStatus[type];  
			}
		});

		Object.entries(this.main.enemy.status).forEach(([type, value]) => {
			if (this.enemyStatus[type]) {
				this.enemyStatus[type].innerText = value;
			} else {
				this.enemyStatus[type] = new Element(this.enemyStatusContainer, { 
					className: `battle-status stroke`, 
					image: statusData[type].image, 
					text: value 
				}).element;
			}
		});

		Object.keys(this.enemyStatus).forEach(type => {
			if (!(type in this.main.enemy.status)) {
				this.enemyStatus[type].remove();
				delete this.enemyStatus[type];
			}
		});
	}

	showDamage(battler, value, type = 'damage') {
	    const dmgText = document.createElement('div');
	    dmgText.className = `damage-text ${type} stroke`;
	    dmgText.innerText = type === 'heal' ? `+${this.numberDot(value)}` : `-${this.numberDot(value)}`;

	    const sprite = this[`${battler}Sprite`];

	    const baseX = sprite.clientWidth / 2;
	    let baseY = 0; 

	    if (type == 'burn') baseY = sprite.clientHeight * 0.2; 
	    else if (type == 'poison') baseY = sprite.clientHeight * 0.3;
	    else if (type == 'erosion') baseY = sprite.clientHeight * 0.4;
	    else if (type == 'frailty') baseY = sprite.clientHeight * 0.5;

	    const offsetX = (Math.random() * 60) - 30; 
	    const offsetY = (Math.random() * 10) - 5;  

	    dmgText.style.left = `${baseX + offsetX}px`;
	    dmgText.style.top = `${baseY + offsetY}px`;

	    sprite.appendChild(dmgText);

	    dmgText.offsetHeight;
	    dmgText.classList.add('show');

	    setTimeout(() => dmgText.remove(), 2000);
	}

	showStatus(battler, value, type) {
	    const statusText = document.createElement('div');
	    statusText.className = `damage-text ${type} stroke`;
	    statusText.innerHTML = value;

	    const sprite = this[`${battler}Sprite`];

	    const baseY = (type == 'ap' || type == 'mp') ? sprite.clientHeight * 0.3 : sprite.clientHeight * 0.5; 
  		

	    statusText.style.left = `50%`;
	    statusText.style.top = `${baseY}px`;

	    sprite.appendChild(statusText);

	    statusText.offsetHeight;
	    statusText.classList.add('show');

	    setTimeout(() => statusText.remove(), 2000);
	}

	showBoost(battler, stat, debuff = false) {
	    const boostImage = document.createElement('div');
	    boostImage.className = `boost-icon ${stat}`;

	    const icons = {
	        atk: "url('./assets/images/icons/atk.png')",
	        spa: "url('./assets/images/icons/spa.png')",
	        spe: "url('./assets/images/icons/spe.png')",
	        res: "url('./assets/images/icons/res.png')",
	        crt: "url('./assets/images/icons/crt.png')",
	        crtDmg: "url('./assets/images/icons/crtDmg.png')"
	    };

	    if (icons[stat]) {
	        boostImage.style.backgroundImage = icons[stat];
	    }

	    const sprite = this[`${battler}Sprite`];

	    const baseX = sprite.clientWidth / 2;
	    const baseY = sprite.clientHeight - 40;

	    const offsetX = (Math.random() * 40) - 20;
	    boostImage.style.left = `${baseX + offsetX}px`;
	    boostImage.style.top = `${baseY}px`;

	    const waveNum = Math.floor(Math.random() * 4) + 1;
	    boostImage.classList.add(`wave${waveNum}`);

	    const statOrder = ['atk', 'spa', 'spe', 'crt', 'res', 'crtDmg'];
	    const delay = statOrder.indexOf(stat) * 100; 

	    setTimeout(() => {
	        boostImage.classList.add('show');
	        sprite.appendChild(boostImage);

	        setTimeout(() => boostImage.remove(), 2500);
	    }, delay);
	}

	showDebuff(battler, stat) {
	    const debuffIcon = document.createElement('div');
	    debuffIcon.className = `debuff-icon ${stat} shake`; // clase shake usa @keyframes debuffShake

	    const icons = {
	        atk: "url('./assets/images/icons/atk.png')",
	        spa: "url('./assets/images/icons/spa.png')",
	        spe: "url('./assets/images/icons/spe.png')",
	        res: "url('./assets/images/icons/res.png')",
	        crt: "url('./assets/images/icons/crt.png')",
	        crtDmg: "url('./assets/images/icons/crtDmg.png')"
	    };

	    if (icons[stat]) debuffIcon.style.backgroundImage = icons[stat];

	    const sprite = this[`${battler}Sprite`];

	    const baseX = sprite.clientWidth / 2;
	    const baseY = sprite.clientHeight / 4; // un poco arriba del centro

	    const offsetX = (Math.random() * 40) - 20;
	    const offsetY = (Math.random() * 20) - 10;

	    debuffIcon.style.left = `${baseX + offsetX}px`;
	    debuffIcon.style.top  = `${baseY + offsetY}px`;

	    // retraso por stat para no solaparse
	    const statOrder = ['atk', 'spa', 'spe', 'res', 'crt', 'crtDmg'];
	    const delay = statOrder.indexOf(stat) * 300;

	    setTimeout(() => {
	        sprite.appendChild(debuffIcon);
	        debuffIcon.offsetHeight; // forzar reflow
	        debuffIcon.classList.add('show');

	        setTimeout(() => debuffIcon.remove(), 2500);
	    }, delay);
	}

	numberDot(num) {
	  	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}
}

