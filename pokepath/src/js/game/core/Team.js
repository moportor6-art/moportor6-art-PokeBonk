import { Pokemon } from '../component/Pokemon.js'; 
import { pokemonData } from '../data/pokemonData.js';

export class Team {
	constructor(main, teamData) {
		this.main = main;
		
		teamData = teamData.filter(pkmn => pkmn.specie || pkmn.specieKey);

		this.pokemon = teamData.map(data => Pokemon.fromOriginalData(data, this.main));

		const seenIds = new Set();
	    this.pokemon = this.pokemon.filter(p => {
	        if (seenIds.has(p.id)) return false; 
	        seenIds.add(p.id);
	        return true;
	    });

	    this.pokemon.forEach(pokemon => {
	        pokemon.inGroup = true;
	        if (pokemon.adn != undefined) {
	        	const oldTarget = pokemon.targetMode;
	        	pokemon.transformADN(oldTarget);
	        }
	    });
	}

	addPokemon(pokemon) {
		if (this.main.area.heavyMetal) return;
		pokemon.ensureMegaStone();
		pokemon.inGroup = true;
		pokemon.damageDealt = 0;
		pokemon.trueDamageDealt = 0;
		pokemon.tilePosition = -1;
		if ([58, 59, 63, 64, 65, 66, 94, 140, 136, 151, 247].includes(pokemon.specie.id)) this.main.player.fossilInTeam++;
		if ([179, 239].includes(pokemon.specie.id)) this.main.player.pastInTeam++;
		if ([178, 238].includes(pokemon.specie.id)) this.main.player.futureInTeam++;

		if (pokemon.id == 70) {
			pokemon.adn = (this.pokemon.length > 0) ? this.pokemon[0].specie : pokemonData['ditto'];
			if ([58, 59, 63, 64, 65, 66, 94, 140, 136, 151, 247].includes(pokemon.adn.id)) this.main.player.fossilInTeam++;
			if ([179, 239].includes(pokemon.adn.id)) this.main.player.pastInTeam++;
			if ([178, 238].includes(pokemon.adn.id)) this.main.player.futureInTeam++;
			pokemon.adnPosition = 0;
			const oldTarget = pokemon.targetMode;
			pokemon.transformADN(oldTarget);
		}

		this.pokemon.push(pokemon);
		if (this.main.UI.fastScene.isOpen) this.main.UI.fastScene.close();
	}

	removePokemon(pokemon) {
		if (this.main.area.heavyMetal) return;
		pokemon.ensureMegaStone();
		const index = this.pokemon.indexOf(pokemon);
		pokemon.inGroup = false;
		pokemon.damageDealt = 0;
		pokemon.trueDamageDealt = 0;
		pokemon.tilePosition = -1;
		if ([58, 59, 63, 64, 65, 66, 94, 140, 136, 151, 247].includes(pokemon.specie.id)) this.main.player.fossilInTeam--;
		if ([179, 239].includes(pokemon.specie.id)) this.main.player.pastInTeam--;
		if ([178, 238].includes(pokemon.specie.id)) this.main.player.futureInTeam--;
		if (pokemon.id == 70) {
			if ([58, 59, 63, 64, 65, 66, 94, 140, 136, 151, 247].includes(pokemon.adn.id)) this.main.player.fossilInTeam--;
			if ([179, 239].includes(pokemon.adn.id)) this.main.player.pastInTeam--;
			if ([178, 238].includes(pokemon.adn.id)) this.main.player.futureInTeam--;
			pokemon.adn = pokemonData['ditto'];
			pokemon.adnPosition = 0;
			const oldTarget = pokemon.targetMode;
			pokemon.transformADN(oldTarget);
		}
		
		this.pokemon.splice(index, 1);
	}
}