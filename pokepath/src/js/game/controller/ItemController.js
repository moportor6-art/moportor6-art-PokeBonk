export class ItemController {
    constructor(main) {
        this.main = main;
    }

    getItems() {
        return this.main.player.items;
    }

    getAllPokemon() {
        return [...this.main.team.pokemon, ...this.main.box.pokemon];
    }

    hasItem(id) {
        return this.main.player.items.some(item => item.id === id);
    }

    getItemPosition(id) {
        if (!id) return -1;
        return this.getItems().findIndex(item => item.id === id);
    }

    getAvailablePokemon(item) {
        if (!item) return [];
        return this.getAllPokemon().filter(pokemon =>
            this.canEquip(item, pokemon)
        );
    }

    equip(item, pokemon) {
        if (!this.canEquip(item, pokemon)) return false;
        pokemon.equipItem(item);
        return true;
    }

    isEquipped(item) {
        return typeof item?.equipedBy === 'number';
    }

    canEquip(item, pokemon) {
        if (!pokemon) return false;
        if (item?.megaStone && pokemon.isMega) {
            return pokemon.baseSpecie?.mega?.[item.megaPos] === pokemon.specie.key;
        }

        const handlers = {
            key: (value) =>
                value.includes(pokemon.specie.key),

            id: (value) =>
                value.includes(pokemon.id),

            ability: (value) =>
                value.includes(pokemon.ability.id),

            ricochet: (value) =>
                pokemon.ricochet > 0,

            orbital: (value) =>
                pokemon.orbital > 0,

            tile: (value) =>
                value.some(t => pokemon.tiles.includes(t)),

            attackType: (value) =>
                value.includes(pokemon.attackType),

            rangeType: (value) =>
                value.includes(pokemon.rangeType),

            level: (value) =>
                this.main?.area?.inChallenge?.lvlCap == 50
                ? false
                : this.main?.area?.inChallenge?.lvlCap == 75
                    ? true
                    : value < pokemon.lvl
        };

        if (item?.restriction) {
            const hasForbiddenTrait = Object.entries(item.restriction).some(([key, value]) => {
                return handlers[key]?.(value, pokemon);
            });
            if (hasForbiddenTrait) return false;
        }

        if (item?.condition) {
            const meetsRequirement = Object.entries(item.condition).some(([key, value]) => {
                return handlers[key]?.(value, pokemon);
            });
            if (!meetsRequirement) return false;
        }

        return true;
    }
}
