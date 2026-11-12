import { achievements } from './achievements.js';

export const loadData = () => {
	const data = window.localStorage.getItem("data");
	if (!data) {
        let newData = {
            config: {
                scale: 1,
            	language: 0,
            	audio: {
            		master: 10,
					music: 10,
					ui: 10,
					effects: 10,
            	},
            },  
            save: {
                0: {},
                1: {},
                2: {}
            },
            profile: {
                stats: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 },
                achievements: achievements,
                points: 0,
                upgrades: { hp: 0, ap: 0, mp: 0, atk: 0, spa: 0, spe: 0, crt: 0, crtDmg: 0, gold: 0 }
            }
        };
        window.localStorage.setItem("data", JSON.stringify(newData));
        return newData;
    }
	return JSON.parse(data); 
}

export const saveData = (slot, name, player, map, floor, room, kecleonPool, delibirdPool, movePool, inventory, enemy) => {
    const data = JSON.parse(window.localStorage.getItem("data"));

    data.save[slot] = {
        name: name,
        player: player,
        map: map,
        floor: floor,
        room: room,
        kecleonPool: kecleonPool,
        delibirdPool: delibirdPool,
        movePool: movePool,
        inventory: inventory,
        enemy: enemy,
    };

    window.localStorage.setItem("data", JSON.stringify(data));
}

// export const updateDataStats = (indx, value) => {
//     const data = JSON.parse(window.localStorage.getItem("data")); 
//     data.profile.stats[indx] += value;
//     window.localStorage.setItem("data", JSON.stringify(data));
// }
