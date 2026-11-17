import { Pokemon } from '../component/Pokemon.js'; 

export class Box {
	constructor(main, boxData) {
		this.main = main;

		boxData = boxData.filter(pkmn => pkmn.specie || pkmn.specieKey);

		this.pokemon = boxData.map(data => Pokemon.fromOriginalData(data, this.main));

        const seenIds = new Set(this.main.team.pokemon.map(p => p.id)); 
        this.pokemon = this.pokemon.filter(p => {
            if (seenIds.has(p.id)) return false; 
            seenIds.add(p.id); 
            return true;
        });

		this.pokemon.forEach(pokemon => pokemon.inGroup = false);
	}

	addPokemon(pokemon) {
		if (this.main.area.heavyMetal) return;
		this.pokemon.push(pokemon);
	}

	removePokemon(pokemon) {
		if (this.main.area.heavyMetal) return;
		const index = this.pokemon.indexOf(pokemon);
		this.pokemon.splice(index, 1);
	}
}