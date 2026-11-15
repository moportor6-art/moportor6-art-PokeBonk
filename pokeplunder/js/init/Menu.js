import { Init } from './Init.js';
import { Element } from '../utils/Element.js';
import { text } from '../file/text.js';
import { playSound, playMusic } from '../file/audio.js';
import { WindowNewGame } from './WindowNewGame.js';
import { WindowUpgrades } from './WindowUpgrades.js';
import { WindowSettings } from './WindowSettings.js';
import { WindowProfile } from './WindowProfile.js';
import { WindowCredits } from './WindowCredits.js';
import { Main } from '../game/Main.js';

const BUTTON = ['settings', 'upgrades', 'profile', 'credits', 'exit'];
const ICON = ['1', '2', '3']
const SUBTITLE_PUNS = [
    [
        'Try <a href="https://khydra98.itch.io/pokemon-lithic-veil" target="_blank" class="link-red">Pokémon Lithic Veil</a> too!',
        'Balanced™',
        'Crits are always against you',
        "Now featuring more unfair bosses!",
        "Delibird stole all your loot",
        "Just one more run!",
        "Give a Thunder Stone to Pikachu!",
        "Kecleon’s kinda broke",
        "Smeargle shows you its worst moves",
        "Chansey just wants to help",
        "Struggling to progress? Try other characters!",
        "Make sure to spend your points!"
    ],
    [
        '¡Prueba también <a href="https://khydra98.itch.io/pokemon-lithic-veil" target="_blank" class="link-red">Pokémon Lithic Veil</a>!',
        'Balanceado™',
        'Los críticos siempre van contra ti',
        "¡Ahora con más jefes injustos!",
        "Delibird se ha llevado todos tus objetos",
        "¡Solo una partida más!",
        "Dale una Piedra Trueno a Pikachu!",
        "Kecleon anda medio tieso",
        'Smeargle te enseña sus peores movimientos',
        "Chansey solo quiere ayudar",
        "¿Te cuesta avanzar? ¡Prueba otros personajes!",
        "¡No olvides gastar tus puntos!"
    ]
]

export class Menu {
    constructor(data) {
        this.data = data;
        this.lang = data.config.language;

        this.newGame = new WindowNewGame(this);
        this.upgrades = new WindowUpgrades(this);
        this.settings = new WindowSettings(this);
        this.profile = new WindowProfile(this);
        this.credits = new WindowCredits(this);

        this.render();
    }

    render = () => {
        this.scene = new Element(document.getElementById("screen"), { className: 'menu-scene' }).element;
        this.title = new Element(this.scene, { className: 'menu-title', text: 'PokéPlunder' }).element;
        this.subtitle = new Element(this.scene, { className: 'menu-subtitle' }).element;
        this.version = new Element(this.scene, { className: 'menu-version', text: 'v 1.1.6' }).element;

        this.saveSlot = [];
        this.saveContainer = new Element(this.scene, { className: 'menu-save-container' }).element;

        for (let i = 0; i < 3; i++)  this.saveSlot[i] = new Element(this.saveContainer, { className: 'menu-save-slot' }).element;

        this.button = {};
        this.buttonContainer = new Element(this.scene, { className: 'menu-button-container' }).element;

        BUTTON.forEach(label => {
            this.button[label] = new Element(this.buttonContainer, { className: 'menu-button' }).element;
            this.button[label].addEventListener('click', () => this.buttonHandler(label));
            this.button[label].addEventListener('mouseenter', () => {playSound('key0','ui')});
        })

        this.update();
    }

    update = (newData = null) => {
        playMusic('menuMusic');
        if (newData) {
            this.data = newData;
            this.lang = newData.config.language;
        }

        this.subtitle.innerHTML = SUBTITLE_PUNS[this.lang][Math.floor(Math.random() * SUBTITLE_PUNS[this.lang].length)];

        this.button['settings'].innerText = '⚙';
        this.button['upgrades'].innerText = '✚';
        this.button['profile'].innerText = '🟊';
        this.button['credits'].innerText = '🖹';
        this.button['exit'].innerText = '⨯';

        this.saveSlot.forEach((slot, indx) => {
            slot.replaceChildren(); 

            if (this.data.save[indx].name != undefined) {
                this.drawLoadedSave(slot, indx);

                slot.replaceWith(slot.cloneNode(true));
                let newSlot = this.saveContainer.children[indx];
                this.saveSlot[indx] = newSlot;
                newSlot.addEventListener('click', () => {
                    this.startGame(this.data.save[indx], indx);
                });
                 newSlot.addEventListener('mouseenter', () => {playSound('click1','ui')});
            } else {
                this.drawNewSave(slot, indx);

                slot.replaceWith(slot.cloneNode(true));
                let newSlot = this.saveContainer.children[indx];
                this.saveSlot[indx] = newSlot;
                newSlot.addEventListener('click', () => {
                    this.newGame.open(indx, this.lang);
                });
                newSlot.addEventListener('mouseenter', () => {playSound('click1','ui')});
            }
        });
    }

    buttonHandler(label) {
        switch(label) {
            case 'settings':
                this.settings.open();
                break;
            case 'upgrades':
                this.upgrades.open();
                break;
            case 'profile':
                this.profile.open();
                break;
            case 'credits':
                this.credits.open();
                break;
            case 'exit':
                window.location.reload();
                break;
        }
    }

    drawNewSave = (saveSlot, indx) => {
        saveSlot.name = new Element(saveSlot, { className: 'menu-save-name', text: text.menu.newGame[this.lang] }).element;
        saveSlot.icon = new Element(saveSlot, { className: 'menu-save-icon', text: ICON[indx] }).element;
    }

    drawLoadedSave = (saveSlot, indx) => {
        let slotData = this.data.save[indx];
        saveSlot.className = 'menu-save-slot-load';
        saveSlot.gradient = new Element(saveSlot, { className: 'menu-save-gradient-load' }).element;
        saveSlot.name = new Element(saveSlot, { className: 'menu-save-name-load', text: slotData.name }).element;
        saveSlot.map = new Element(saveSlot, { className: 'menu-save-map-load', text: slotData.map.name[this.lang] }).element;
        saveSlot.room = new Element(saveSlot, { className: 'menu-save-room-load', text: `${text.general.room[this.lang]} ${slotData.room + 1}` }).element;
        saveSlot.icon = new Element(saveSlot, { className: 'menu-save-icon-load', image: slotData.player.image }).element;
        saveSlot.style.backgroundImage = `url(${slotData.map.background})`;
    }

    startGame = (save, indx) => {
        const lang = JSON.parse(window.localStorage.getItem("data")).config.language.text;

        this.destroy();
        playSound('start', 'ui');
        setTimeout(() => {
            playMusic(save.map.music);
            new Main(this.data, save, indx);
        }, 1000); 
    }

    destroy = () => {
        this.saveSlot.forEach((saveSlot, indx) => {
            let newSlotHandler = () => this.newGame.open(indx);
            let loadSlotHandler = () => this.startGame(this.data.save[indx]);

            let clone = saveSlot.cloneNode(true);
            saveSlot.parentNode.replaceChild(clone, saveSlot);
        });

        Object.keys(this.button).forEach(label => {
            let btn = this.button[label];
            if (btn) {
                let clone = btn.cloneNode(true);
                btn.parentNode.replaceChild(clone, btn);
            }
        });

        if (this.newGame && typeof this.newGame.destroy === "function") {
            this.newGame.destroy();
        }

        if (this.scene && this.scene.parentNode) {
            this.scene.remove();
        }

        this.saveSlot = null;
        this.button = null;
        this.scene = null;
        this.title = null;
        this.subtitle = null;
        this.version = null;
        this.saveContainer = null;
        this.buttonContainer = null;
    };
}

