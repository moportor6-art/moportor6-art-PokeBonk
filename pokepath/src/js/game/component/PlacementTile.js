export class PlacementTile {
	constructor(main, x, y, ctx, land, id) {
		this.main = main;

		this.land = land;
		this.position = { x, y };
		this.size = 24;
		this.center = { x: this.position.x + 12, y: this.position.y + 12 };
		this.color = 'rgba(255, 255, 255, 0.5)';
		this.tower = false;
		this.passenger = false;

		this.ctx = ctx;
		this.id = id;
	}

	draw() {
		const towerObj = (this.main?.area?.towers || []).find(t => t.pokemon === this.tower);

	    if (this.tower?.item?.id === 'pokeSkates' || this.tower?.ability?.id == 'unburden' || towerObj?.isMagnetized ||
	    	this.tower?.ability?.id == 'nocturnal' || this.tower?.ability?.id == 'meteorBeam' || this.tower?.ability?.id == 'genesisAura' ||
	    	this.tower?.ability?.id == 'aerialAce' || this.tower?.ability?.id == 'stalwart'
	    ) {
		    try {
		        this.ctx.save();
		        this.ctx.globalAlpha = 0.5;

		        //const towerObj = (this.main?.area?.towers || []).find(t => t.pokemon === this.tower);

		        if (towerObj && towerObj.loaded && towerObj.sprite) {

		            const frameIndex = towerObj.frames?.current ?? 0;
		            const dirIndex   = towerObj.frames?.direction ?? 0;

		            const w = towerObj.width;
		            const h = towerObj.height;

		            const frameX = frameIndex * w;
		            const frameY = dirIndex * h;

		            const dx = this.center.x - w / 2;
		            const dy = this.center.y - h / 2;

		            this.ctx.drawImage(
		                towerObj.sprite,
		                frameX, frameY, w, h,
		                dx, dy, w, h
		            );
		        } else if (this.tower?.sprite?.image) {
		            const img = new Image();
		            img.src = this.tower.sprite.image;

		            if (img.complete) {
		                const w = img.naturalWidth;
		                const h = img.naturalHeight;

		                const dx = this.center.x - w / 2;
		                const dy = this.center.y - h / 2;

		                const frameWidth = this.sprite.width / this.frameCount;
						const frameHeight = this.sprite.height / this.frameRows; 

						const frameX = this.currentFrame * frameWidth;
						const frameY = 0;

						ctx.drawImage(
						    this.sprite,
						    frameX, frameY,
						    frameWidth, frameHeight,
						    this.x, this.y,
						    frameWidth, frameHeight
						);
		            }
		        }
		    } catch(e) { 

		    } finally {
		        this.ctx.restore();
		    }
		}

	    if (this.main.game.deployingUnit) {
	        if (!this.canPlacePokemonHere(this.main.game.deployingUnit)) {
	            this.color = 'rgba(255, 50, 50, 0.5)';
	        } else if (this.tower) {
	            this.color = 'rgba(150, 150, 150, 0.5)';
	        }
	        this.ctx.fillStyle = this.color;
	        this.ctx.fillRect(this.position.x, this.position.y, this.size, this.size);

	        this.ctx.strokeStyle = '#333';
	        this.ctx.lineWidth = 1;
	        this.ctx.strokeRect(this.position.x, this.position.y, this.size, this.size);	
	    } else if (this.main.UI.tileTerrainHover != null) {
	        if (
	        	this.main.UI.tileTerrainHover === this.land ||
	        	(this.tower?.ability?.id === 'grassPlatform' && this.main.UI.tileTerrainHover === 2) ||
	        	(this.tower?.ability?.id === 'icePlatform' && this.main.UI.tileTerrainHover === 3) 
	        ) {
	            this.ctx.fillStyle = this.color;
	            this.ctx.fillRect(this.position.x, this.position.y, this.size, this.size);

	            this.ctx.strokeStyle = '#333';
	            this.ctx.lineWidth = 1;
	            this.ctx.strokeRect(this.position.x, this.position.y, this.size, this.size);	
	        }
	    }
	}

	update(mouse) {
	    this.draw();

	    let isMouseOver =
	        mouse.x > this.position.x && 
	        mouse.x < this.position.x + this.size &&
	        mouse.y > this.position.y && 
	        mouse.y < this.position.y + this.size;

	    // if (!isMouseOver && this.tower?.item?.id === 'pokeSkates') {
	    //     const baseTowerObj = this.main.area.towers.find(t => t.pokemon === this.tower);
	    //     if (baseTowerObj) {
	    //         const dx = mouse.x - baseTowerObj.center.x;
	    //         const dy = mouse.y - baseTowerObj.center.y;
	    //         if (Math.hypot(dx, dy) <= 70) isMouseOver = true; // mismo radio que usas para el clic
	    //     }
	    // }

	    if (!isMouseOver && this.land === 1 && (this.tower?.item?.id === 'pokeSkates' || this.passenger?.item?.id === 'pokeSkates')) {
		    const skatePokes = [this.tower, this.passenger].filter(p => p?.item?.id === 'pokeSkates');

		    for (const poke of skatePokes) {
		        const towerObj = this.main.area.towers.find(t => t.pokemon === poke);
		        if (!towerObj) continue;

		        const dx = mouse.x - towerObj.center.x;
		        const dy = mouse.y - towerObj.center.y;
		        if (Math.hypot(dx, dy) <= 70) { isMouseOver = true; break; }
		    }
		}

	    if (!isMouseOver) {
	        this.color = 'rgba(255, 255, 255, 0.5)';
	        return;
	    }

	    if (this.main.game.deployingUnit) {
	        if (!this.canPlacePokemonHere(this.main.game.deployingUnit) || (this.tower && !((this.tower?.ability?.id === "grassPlatform" || this.tower?.ability?.id === "mount" || this.tower?.ability?.id === "grimNeigh" || this.tower?.ability?.id === "icePlatform" || this.tower?.ability?.id === "rest") && !this.tower.passenger))) return;
	        this.color = 'white';
	        const pokemon = this.main.game.deployingUnit;
	        this.drawRange(this.computeEffectiveRange(pokemon), pokemon.rangeType, pokemon.innerRange, pokemon.ability, pokemon?.item);
	    } 
	    
	    else if (this.tower) {
		        if (this.tower.ability.id == 'unburden' || this.tower.ability.id == 'stalwart' || this.tower.ability.id == 'aerialAce' || this.tower?.ability?.id == 'nocturnal' || this.tower?.ability?.id == 'meteorBeam' || this.tower?.ability?.id == 'genesisAura' || this.main.area.towers.find(t => t.pokemon === this.tower)?.isMagnetized) {
			        const baseTowerObj = this.main.area.towers.find(t => t.pokemon === this.tower);
			        const baseCenter = baseTowerObj?.center ?? this.center;
			        this.drawRange(this.computeEffectiveRange(this.tower, baseCenter), this.tower.rangeType, this.tower.innerRange, this.tower.ability, this.tower?.item, false, baseCenter);
			    }  else {
			    const towerOverride = (this.tower?.item?.id === 'pokeSkates')
			        ? this.main.area.towers.find(t => t.pokemon === this.tower)?.center ?? null
			        : null;

			    this.drawRange(this.computeEffectiveRange(this.tower), this.tower.rangeType, this.tower.innerRange, this.tower.ability, this.tower?.item, false, towerOverride);

			    if (this.passenger) {
			        const passengerOverride = (this.passenger?.item?.id === 'pokeSkates')
			            ? this.main.area.towers.find(t => t.pokemon === this.passenger)?.center ?? null
			            : null;

			        this.drawRange(
			            this.computeEffectiveRange(this.passenger),
			            this.passenger.rangeType,
			            this.passenger.innerRange,
			            this.passenger.ability,
			            this.passenger?.item,
			            true,
			            passengerOverride
			        );
			    }
			}     
		}
	}

	canPlacePokemonHere(pokemon) {
		if (!pokemon) return false;

		if (this.tower && this.tower.ability?.id === 'mount') {
			if (pokemon?.id == 115) return true;
			return false;
		}

		if (this.tower && this.tower.ability?.id === 'grimNeigh') {
			if (pokemon?.id == 185) return true;
			return false;
		}

		if (this.tower && this.tower.ability?.id === 'rest') {
			return true;
		}

		if (this.tower && this.tower.ability?.id === 'grassPlatform') {
			if (pokemon.tiles && (pokemon.tiles.includes(1) || pokemon.tiles.includes(2))) return true;
			if (pokemon?.item?.id === 'heavyDutyBoots' || pokemon?.item?.id === 'assaultVest') return true;
			if (pokemon?.item?.id === 'dampMulch') return true;
			return false;
		}

		if (this.tower && this.tower.ability?.id === 'icePlatform') {
			if (pokemon.tiles && (pokemon.tiles.includes(1) || pokemon.tiles.includes(3))) return true;
			if (pokemon?.item?.id === 'squirtBottle') return true;
			if (pokemon?.item?.id === 'dampMulch') return true;
			return false;
		}

		if (pokemon.tiles && pokemon.tiles.includes(this.land)) return true;
		if (pokemon?.item?.id == 'airBalloon' && this.land == 4) return true;
		if (pokemon?.item?.id == 'heavyDutyBoots' && this.land == 2) return true;
		if (pokemon?.item?.id == 'assaultVest' && this.land == 2) return true;
		if (pokemon?.item?.id == 'dampMulch' && this.land == 1) return true;
		if (pokemon?.item?.id == 'subwoofer' && this.land == 3 && pokemon.id == 76) return true;
		if (pokemon?.item?.id == 'mitsuesCocktail' && this.land == 3) return true;

		return false;
	}

	computeEffectiveRange(entity, centerOverride = null) {
	    if (!entity) return 0;

	    // si entity ya es una Tower desplegada (o es el Pokémon de una tile con Tower real detrás),
	    // su .range YA incluye terreno/objetos/illuminate vía Tower.recalculatePower — se usa tal cual.
	    const realTower = this.main.area.towers.includes(entity)
	        ? entity
	        : this.main.area.towers.find(t => t.pokemon === entity);

	    if (
	    	realTower &&
	    	!['illuminateBuff', 'illuminate', 'powerAura', 'triage', 'criticalAura'].includes(realTower?.ability?.id)
	    ) return realTower.range;


	    // sin Tower real (Pokémon en mano antes de colocarlo, deployingUnit): reconstruimos el range desde cero
	    const cx = (centerOverride && typeof centerOverride.x === 'number') ? centerOverride.x : this.center.x;
	    const cy = (centerOverride && typeof centerOverride.y === 'number') ? centerOverride.y : this.center.y;

	    const ability = entity.ability;
	    const item = entity.item ?? entity.pokemon?.item ?? null;

	    const illuminateBonus = this.main.area.towers.some(t =>
	        t.ability?.id === 'illuminate' && (ability?.id !== 'illuminate') &&
	        Math.hypot(t.center.x - cx, t.center.y - cy) <= ((t.pokemon?.item?.id === "luminousMoss") ? t.range + 25 : t.range)
	    ) ? 15 : 0;

	    const illuminateBuffBonus = this.main.area.towers.some(t =>
	        t.ability?.id === 'illuminateBuff' && (ability?.id !== 'illuminateBuff') &&
	        Math.hypot(t.center.x - cx, t.center.y - cy) <= ((t.pokemon?.item?.id === "luminousMoss") ? t.range + 25 : t.range)
	    ) ? 25 : 0;

	    let effectiveRange = entity.range + illuminateBonus + illuminateBuffBonus;

	    if ((this.land === 4 || (this.land === 1 && item?.id == 'hikingKit')) && (ability.id === 'vigilant' || ability.id === 'vigilantFrisk' || ability.id === 'castform')) effectiveRange *= 2;
	    if ((this.land === 4) && (ability.id === 'noGuard')) effectiveRange *= 10;
	    if ([3,4,5,10,21,22,23,24,42,43,44,45].includes(this.main.area.routeNumber) && (ability.id === 'doubleShotSand' || ability.id === 'quadraShotSand')) effectiveRange *= 2;
	    if (item?.id == 'spindaCocktail') {
	        effectiveRange *= (ability.id === 'simple') ? 2.1875 : 1.25;
	    }
	    if (item?.id == 'zinc') {
	        effectiveRange *= (ability.id === 'simple') ? 1.925 : 1.25;
	    }

	    if (ability.id === 'sandVeil' && ['sandstorm', 'sandAvalanche'].includes(this.main.area.weather)) effectiveRange += (effectiveRange * 0.15);
	    if (ability.id === 'auroraVeil' && ['hail'].includes(this.main.area.weather)) effectiveRange += 40;
	    if (ability.id === 'slowStart' && this.slowStartTimer >= 60000) effectiveRange += effectiveRange;
	    if (ability.id === 'berserkMega') effectiveRange += (effectiveRange * this.main.area.hitsReceived * 0.2);

	    if (item?.id == 'starCandy') effectiveRange += Math.min(140, this.main.player.stars * 0.035);
	    if (item?.id == 'prismScale') effectiveRange += this.main.player.ribbons * 0.5;
	    if (item?.id == 'oldRod') effectiveRange += 75;
	    if (item?.id == 'noxDex') effectiveRange += 11;

	    if (item?.id == 'luckyPunch' && entity?.isDeployed) effectiveRange += (10 * entity?.luckyPunchStack);
	    if (item?.id == 'wrestlingMask') effectiveRange -= 75;
	    if (item?.id == 'silphScope' && (['illuminate', 'illuminateBuff', 'frisk', 'vigilantFrisk', 'moongeistBeam', 'grimNeigh'].includes(ability.id))) effectiveRange += 15;
	    if (item?.id == 'ancientShield') effectiveRange *= 1.2;
	    if (item?.id == 'nanabBerry') {
	     	effectiveRange *= (this.main.area.unnerve) ? 1.33 : 1.3;
	 	}
	    if (item?.id == 'eviolite') effectiveRange *= 1.2;
	    if (item?.id == 'helixFossil') effectiveRange += this.main.player.fossilInTeam * 10;
	    if (item?.id == 'revelationAroma' || item?.id == 'luminousMoss') effectiveRange += 25;
	    if (item?.id == 'sunflowerPetal') effectiveRange -= 40;
	    if (item?.id == 'tropicalPetal') effectiveRange -= 20;
	    if (item?.id == 'condensedBlizzard') effectiveRange /= 2;
	    if (item?.id == 'brickMail') {
	        effectiveRange += (ability.id === 'simple') ? 14 * this.main.UI.tilesCountNum[3] : 8 * this.main.UI.tilesCountNum[3];
	    }
	    
	    if ([165, 175, 176, 233].includes(entity?.id) && this.main.area.sacredSword) effectiveRange += (effectiveRange * 0.2);

	    return effectiveRange;
	}

	drawRange(range, rangeType, innerRange, ability, item = null, color = false, centerOverride = null) {
	    this.ctx.save();

	    const cx = (centerOverride && typeof centerOverride.x === 'number') ? centerOverride.x : this.center.x;
	    const cy = (centerOverride && typeof centerOverride.y === 'number') ? centerOverride.y : this.center.y;

	    this.ctx.fillStyle = 'rgba(0, 0, 255, 0.2)';
	    this.ctx.strokeStyle = 'rgba(0, 0, 255, 0.4)';

	    if (color) {
	        switch(ability.id) {
	            case 'burn':
	            case 'burnNerf':
	            case 'burnSplash':
	            case 'willOWisp':
	            case 'drought':
	            case 'lavaPlume':
	            case 'fireLash':
	            case 'flameWheel':

	                this.ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
	                this.ctx.strokeStyle = 'rgba(255, 0, 0, 0.4)';
	            break;
	            case 'poison':
	            case 'poisonDoubleShot':
	                this.ctx.fillStyle = 'rgba(0, 255, 0, 0.2)';
	                this.ctx.strokeStyle = 'rgba(0, 255, 0, 0.4)';
	            break;
	            case 'nightmare':
	                this.ctx.fillStyle = 'rgba(160, 60, 200, 0.2)';
	                this.ctx.strokeStyle = 'rgba(160, 60, 200, 0.4)';
	            break;
	            case 'curse':
	            case 'magicBounce':
	            case 'curseDoubleShot':
	                this.ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
	                this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
	            break;
	            case 'stun':
	            case 'stunMono':
	            case 'stunMonoNerf':
	            case 'stunArea':
	            case 'static':
	                this.ctx.fillStyle = 'rgba(255, 215, 0, 0.2)';
	                this.ctx.strokeStyle = 'rgba(255, 215, 0, 0.4)';
	            break;
	            case 'slow':
	            case 'slowSplash':
	            case 'cradily':
	                this.ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
	                this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
	            break;
	        	case 'genesisAura':
	            case 'powerAura':
	            case 'triage':
	            case 'criticalAura':
	            case 'illuminate':
	                this.ctx.fillStyle = 'rgba(100, 180, 255, 0.2)';
	                this.ctx.strokeStyle = 'rgba(100, 180, 255, 0.4)';
	            break;
	            default:
	                this.ctx.fillStyle = 'rgba(0, 0, 200, 0.2)';
	                this.ctx.strokeStyle = 'rgba(0, 0, 200, 0.4)';
	            break;
	        }
	    }

	    let drawRangeValue = range;
		let valueSmall = 24;
	    let valueBig = 48;

	    if (item?.id == 'wideLens') {
	        valueSmall *= 2;
			valueBig *= 2;
	    }
	    if (this.main.area.victoryStar) {
	        valueSmall *= 1.5;
			valueBig *= 1.5;
	    }

	    switch (rangeType) {
	        case 'circle':
	            this.ctx.beginPath();
	            this.ctx.arc(cx, cy, drawRangeValue, 0, Math.PI * 2);
	            this.ctx.fill();
	            this.ctx.stroke();
	            break;
	        case 'donut':
	            this.ctx.beginPath();
	            this.ctx.arc(cx, cy, drawRangeValue, 0, Math.PI * 2);
	            this.ctx.arc(cx, cy, innerRange, 0, Math.PI * 2, true);
	            this.ctx.fill('evenodd');

	            this.ctx.beginPath();
	            this.ctx.arc(cx, cy, drawRangeValue, 0, Math.PI * 2);
	            this.ctx.stroke();

	            this.ctx.beginPath();
	            this.ctx.arc(cx, cy, innerRange, 0, Math.PI * 2);
	            this.ctx.stroke();
	            break;
	        case 'cross':
	            this.ctx.beginPath();
	            
	            if (item?.id == 'starPiece') {
	                this.ctx.rect(cx - valueSmall, cy - drawRangeValue, valueBig, drawRangeValue * 2);
	                this.ctx.rect(cx - drawRangeValue, cy - valueSmall, drawRangeValue * 2, valueBig);

	                this.ctx.translate(cx, cy);
	                this.ctx.rotate(Math.PI / 4);

	                this.ctx.rect(-valueSmall, -drawRangeValue, valueBig, drawRangeValue * 2);
	                this.ctx.rect(-drawRangeValue, -valueSmall, drawRangeValue * 2, valueBig);
	            } else {
	                this.ctx.rect(cx - valueSmall, cy - drawRangeValue, valueBig, drawRangeValue * 2);
	                this.ctx.rect(cx - drawRangeValue, cy - valueSmall, drawRangeValue * 2, valueBig);
	            }
	            this.ctx.fill();
	            this.ctx.stroke();
	            break;
	        case 'horizontalLine':
	            this.ctx.beginPath();
	            this.ctx.rect(cx - drawRangeValue, cy - valueSmall, drawRangeValue * 2, valueBig);
	            this.ctx.fill();
	            this.ctx.stroke();
	            break;
	        case 'verticalLine':
	            this.ctx.beginPath();
	            this.ctx.rect(cx - valueSmall, cy - drawRangeValue, valueBig, drawRangeValue * 2);
	            this.ctx.fill();
	            this.ctx.stroke();
	            break;
	        case 'vShape':
	        	const r = drawRangeValue;

			    this.ctx.beginPath();

			    this.ctx.moveTo(cx, cy - r * 0.06); // antes era (cx, cy)
			    this.ctx.lineTo(cx - r * 0.7, cy - r * 0.65);
			    this.ctx.lineTo(cx, cy + r);
			    this.ctx.lineTo(cx + r * 0.7, cy - r * 0.65);

			    this.ctx.closePath();
			    this.ctx.fill();
			    this.ctx.stroke();
			    break;
	        case 'xShape':
	            this.ctx.save();
	            this.ctx.beginPath();
	            if (item?.id == 'condensedBlizzard') {
	                this.ctx.arc(cx, cy, drawRangeValue, 0, Math.PI * 2);
	            } else if (item?.id == 'starPiece') {
	                this.ctx.rect(cx - valueSmall, cy - drawRangeValue, valueBig, drawRangeValue * 2);
	                this.ctx.rect(cx - drawRangeValue, cy - valueSmall, drawRangeValue * 2, valueBig);

	                this.ctx.translate(cx, cy);
	                this.ctx.rotate(Math.PI / 4);

	                this.ctx.rect(-valueSmall, -drawRangeValue, valueBig, drawRangeValue * 2);
	                this.ctx.rect(-drawRangeValue, -valueSmall, drawRangeValue * 2, valueBig);
	            }  else {
	                this.ctx.translate(cx, cy);
	                this.ctx.rotate(Math.PI / 4);
	                this.ctx.rect(-valueSmall, -drawRangeValue, valueBig, drawRangeValue * 2);
	                this.ctx.rect(-drawRangeValue, -valueSmall, drawRangeValue * 2, valueBig);
	            }
	            this.ctx.fill();
	            this.ctx.stroke();
	            break;
	        case 'star':
	        	 	this.ctx.save();
	            	this.ctx.beginPath();
	        		this.ctx.rect(cx - valueSmall, cy - drawRangeValue, valueBig, drawRangeValue * 2);
	                this.ctx.rect(cx - drawRangeValue, cy - valueSmall, drawRangeValue * 2, valueBig);

	                this.ctx.translate(cx, cy);
	                this.ctx.rotate(Math.PI / 4);

	                this.ctx.rect(-valueSmall, -drawRangeValue, valueBig, drawRangeValue * 2);
	                this.ctx.rect(-drawRangeValue, -valueSmall, drawRangeValue * 2, valueBig);
	                this.ctx.fill();
	            	this.ctx.stroke();
			    break;
	    }

	    this.ctx.restore();
	}
}