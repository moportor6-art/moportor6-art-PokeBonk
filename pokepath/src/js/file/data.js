import { eggListData } from '../game/data/pokemonData.js';
// import { achievementData } from '../game/data/achievementData.js';
import { achievementReworkData } from '../game/data/achievementReworkData.js';
import { generatePlayerSecret } from '../utils/Redeem.js';

export const loadData = () => {
    const data = window.localStorage.getItem("data");
    if (!data) {
        let newData = {
            config: {
                scale: 1,
                language: 0,
                audio: {
                    master: 12,
                    music: 12,
                    ui: 8,
                    effects: 8,
                },
                mute: {
                    0: false,
                    1: false,
                    2: false,
                },
                showDamage: true,
                autoReset: 0,
                autoStop: 0,
                autoStopBoss: 0,
                displayHealth: 0,
                mapEffects: 1,
                particles: 1
                //slowRefreshFix: 0
            },  
            save: {
                new: true,
                player: {
                    name: 'Player',
                    update: 3,
                    portrait: 0,
                    gold: 50,
                    health: [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14],
                    records: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    stars: 0,
                    ribbons: 0,
                    extraGold: 0,
                    teamSlots: 6,
                    // achievements: achievementData,
                    achievementsRework: achievementReworkData,
                    achievementProgress: {
                        delibirdCount: 0,
                        evolutionCount: 1,
                        heartRestore: 0,
                        stolenGold: 0,
                        count: 0
                    },
                    stats: {
                        pokemonOwned: 1,
                        highestPokemonLevel: 1,
                        totalPokemonLevel: 1,
                        totalGold: 50,
                        wavesCompleted: 0,
                        highestHit: 0,
                        defeatedEnemies: 0,
                        defeatedSpecies: new Set(),
                        appliedStuns: 0,
                        appliedSlows: 0,
                        appliedBurns: 0,
                        appliedPoisons: 0,
                        appliedCurses: 0,
                        resets: 0,
                        timePlayed: 0,
                        maxGoldPerWave: [0, null],
                        maxGoldPerTime: [0, null],
                    },
                    items: [],
                    secrets: { cacnea: false, greavard: false, stakataka: false, chatot: false },
                    secretMaps: {},
                    redeem: {
                        playerSecret: generatePlayerSecret(),
                        usedRewards: [],
                    },
                },
                team: [],
                box: [],
                area: {
                    routeNumber: 0,
                    routeWaves: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
                },
                shop: {
                    eggPrice: 10,
                    eggList: eggListData,
                },
                teamManager: [[], [], [], [], [], [], [], [], [], [], [], []],
            }
        };
        window.localStorage.setItem("data", JSON.stringify(newData));
        return newData;
    }
    return JSON.parse(data); 
}

export const saveData = (player, team, box, area, shop, teamManager) => {
    const data = JSON.parse(window.localStorage.getItem("data"));
    data.save = {
        new: false,
        player: player.getSaveData(),
        team: team.pokemon.map(pkmn => pkmn.getOriginalData()),
        box: box.pokemon.map(pkmn => pkmn.getOriginalData()),
        area: area.getSaveData(),
        shop: shop.getSaveData(),
        teamManager: teamManager.getSaveData(),
    };

    window.localStorage.setItem("data", JSON.stringify(data));
}