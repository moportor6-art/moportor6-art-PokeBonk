import { Element } from '../utils/Element.js';
import { text } from '../file/text.js';
import { playSound, setVolume } from '../file/audio.js';
import { Main } from './Main.js';

export class Init {
    constructor(data) {
        this.data = data;
        this.lang = data.config.language;

        this.render();
        //new Main(this.data.save); 
    }

    render = async () => {
        const font = this.data.config.font || 'PressStart2P';

        document.body.style.fontFamily = `"${font}", sans-serif`;
        await document.fonts.load(`10px "${font}"`);

        this.scene = new Element(document.getElementById("screen"), { className: 'init-scene' }).element;

        setVolume();
        this.createLoadingBar();
        playSound('start', 'ui');

        fetch("./src/assets/assets.json")
            .then(res => res.json())
            .then(assets => {
                this.preloadAssets(assets, () => {
                    this.scene.remove();
                    new Main(this.data.save);
                });
            });
    }

    createLoadingBar() {
        this.titleText = new Element(this.scene, {
            className: 'loading-title stroke',
            text: 'POKÉPATH'
        }).element;
         this.titleText = new Element(this.scene, {
            className: 'loading-subtitle stroke',
            text: 'TOWER DEFENSE'
        }).element;

        this.loadingText = new Element(this.scene, {
            className: 'loading-text stroke',
            text: text.ui.loading[this.lang].toUpperCase()
        }).element;

        this.loadingBarBackground = new Element(this.scene, {
            className: 'loading-bar-bg'
        }).element;

        this.loadingBar = new Element(this.loadingBarBackground, {
            className: 'loading-bar'
        }).element;

        this.punText = new Element(this.scene, {
            className: 'loading-pun stroke'
        }).element;

        this.currentPun = -1;
        this.changePun();

        this.punInterval = setInterval(() => {
            this.changePun();
        }, 3000);
    }

    changePun() {
        if (!this.puns?.length || !this.punText) return;

        let index;

        do {
            index = Math.floor(Math.random() * this.puns.length);
        } while (index === this.currentPun && this.puns.length > 1);

        this.currentPun = index;
        this.punText.textContent = this.puns[index][this.lang];
    }

    preloadAssets(assets, onComplete) {
        const images = Array.isArray(assets.images) ? assets.images : [];
        const sounds = Array.isArray(assets.sounds) ? assets.sounds : [];

        const total = images.length + sounds.length;

        if (total === 0) {
            this.loadingBar.style.width = '100%';
            onComplete();
            return;
        }

        let loaded = 0;
        let completed = false;

        const finish = () => {
            if (completed) return;
            completed = true;

            this.loadingBar.style.width = '100%';

            clearInterval(this.punInterval);

            setTimeout(() => {
                onComplete();
            }, 50);
        };

        const checkLoaded = () => {
            loaded++;

            const percent = Math.min(
                100,
                Math.floor((loaded / total) * 100)
            );

            this.loadingBar.style.width = `${percent}%`;

            if (loaded >= total) {
                finish();
            }
        };

        const loadImage = (src) => {
            const img = new Image();
            let done = false;

            const complete = () => {
                if (done) return;
                done = true;

                img.onload = null;
                img.onerror = null;

                checkLoaded();
            };

            img.onload = complete;
            img.onerror = complete;

            img.src = src;

            setTimeout(complete, 10000);
        };

        const loadSound = (src) => {
            const audio = new Audio();
            let done = false;

            const complete = () => {
                if (done) return;
                done = true;

                audio.oncanplaythrough = null;
                audio.onloadeddata = null;
                audio.onerror = null;
                audio.onabort = null;

                checkLoaded();
            };

            audio.preload = 'auto';
            audio.oncanplaythrough = complete;
            audio.onloadeddata = complete;
            audio.onerror = complete;
            audio.onabort = complete;

            audio.src = src;
            audio.load();

            setTimeout(complete, 10000);
        };

        images.forEach(loadImage);
        sounds.forEach(loadSound);
    }

    puns = [
        [
            `Psyduck is trying to understand the code...`, // inglés
            `Psyduck está intentando entender el código...`, // español
            `Psykokwak essaie de comprendre le code...`, // francés
            `Psyduck está tentando entender o código...`, // portugués
            `Psyduck sta cercando di capire il codice...`, // italiano
            `Enton versucht, den Code zu verstehen...`, // alemán
            `コダックはコードを理解しようとしている...`, // japonés
            `고라파덕이 코드를 이해하려고 하고 있습니다...`, // coreano
            `可达鸭正在尝试理解代码……`, // chino
            `Psyduck próbuje zrozumieć kod...` // polaco
        ],
        [
            `Gengar is hiding its Mega Stone...`, // inglés
            `Gengar está escondiendo su megapiedra...`, // español
            `Ectoplasma cache sa Méga-Gemme...`, // francés
            `Gengar está escondendo sua Mega Pedra...`, // portugués
            `Gengar sta nascondendo la sua Megapietra...`, // italiano
            `Gengar versteckt seinen Mega-Stein...`, // alemán
            `ゲンガーはメガストーンを隠している...`, // japonés
            `팬텀이 메가스톤을 숨기고 있습니다...`, // coreano
            `耿鬼正在藏起它的超级石……`, // chino
            `Gengar ukrywa swój Mega Kamień...` // polaco
        ],
        [
            `Smeargle is finishing drawing the sprites...`, // inglés
            `Smeargle está terminando de dibujar los sprites...`, // español
            `Queulorior termine de dessiner les sprites...`, // francés
            `Smeargle está terminando de desenhar os sprites...`, // portugués
            `Smeargle sta finendo di disegnare gli sprite...`, // italiano
            `Farbeagle ist dabei, die Sprites fertig zu zeichnen...`, // alemán
            `ドーブルはスプライトを描き終えようとしている...`, // japonés
            `루브도가 스프라이트를 마저 그리고 있습니다...`, // coreano
            `图图犬正在完成精灵图的绘制……`, // chino
            `Smeargle kończy rysować sprite'y...` // polaco
        ],
        [
            `Spinda is thinking about who to attack...`, // inglés
            `Spinda está pensando a quién atacar...`, // español
            `Spinda réfléchit à qui attaquer...`, // francés
            `Spinda está pensando em quem atacar...`, // portugués
            `Spinda sta pensando a chi attaccare...`, // italiano
            `Pandir überlegt, wen es angreifen soll...`, // alemán
            `パッチールは誰を攻撃するか考えている...`, // japonés
            `얼루기가 누구를 공격할지 생각하고 있습니다...`, // coreano
            `晃晃斑正在思考要攻击谁……`, // chino
            `Spinda zastanawia się, kogo zaatakować...` // polaco
        ],
        [
            `Ditto is trying to turn into a file...`, // inglés
            `Ditto está intentando convertirse en un archivo...`, // español
            `Métamorph essaie de se transformer en fichier...`, // francés
            `Ditto está tentando se transformar em um arquivo...`, // portugués
            `Ditto sta cercando di trasformarsi in un file...`, // italiano
            `Ditto versucht, sich in eine Datei zu verwandeln...`, // alemán
            `メタモンはファイルに変身しようとしている...`, // japonés
            `메타몽이 파일로 변신하려고 하고 있습니다...`, // coreano
            `百变怪正在尝试变成一个文件……`, // chino
            `Ditto próbuje zmienić się w plik...` // polaco
        ],
        [
            `Ditto accidentally turned into a bug...`, // inglés
            `Ditto se ha convertido accidentalmente en un error...`, // español
            `Métamorph s'est accidentellement transformé en erreur...`, // francés
            `Ditto se transformou acidentalmente em um erro...`, // portugués
            `Ditto si è trasformato accidentalmente in un errore...`, // italiano
            `Ditto hat sich versehentlich in einen Fehler verwandelt...`, // alemán
            `メタモンはうっかりエラーに変身してしまった...`, // japonés
            `메타몽이 실수로 오류로 변신해 버렸습니다...`, // coreano
            `百变怪不小心变成了一个错误……`, // chino
            `Ditto przypadkiem zmienił się w błąd...` // polaco
        ],
        [
            `Porygon is fixing a few bugs...`, // inglés
            `Porygon está arreglando unos cuantos bugs...`, // español
            `Porygon corrige quelques bugs...`, // francés
            `Porygon está corrigindo alguns bugs...`, // portugués
            `Porygon sta sistemando alcuni bug...`, // italiano
            `Porygon behebt ein paar Bugs...`, // alemán
            `ポリゴンはいくつかのバグを修正している...`, // japonés
            `폴리곤이 몇 가지 버그를 수정하고 있습니다...`, // coreano
            `多边兽正在修复一些漏洞……`, // chino
            `Porygon naprawia kilka błędów...` // polaco
        ],
        [
            `Metagross is calculating how much time is left...`, // inglés
            `Metagross está calculando cuánto falta para terminar...`, // español
            `Métalosse calcule le temps restant...`, // francés
            `Metagross está calculando quanto tempo falta para terminar...`, // portugués
            `Metagross sta calcolando quanto manca alla fine...`, // italiano
            `Metagross berechnet, wie viel Zeit noch übrig ist...`, // alemán
            `メタグロスはあとどれくらいかかるか計算している...`, // japonés
            `메타그로스가 끝날 때까지 얼마나 남았는지 계산하고 있습니다...`, // coreano
            `巨金怪正在计算还剩多少时间……`, // chino
            `Metagross oblicza, ile zostało do zakończenia...` // polaco
        ],
        [
            `Bidoof is trying not to break anything...`, // inglés
            `Bidoof está intentando no romper nada...`, // español
            `Keunotor essaie de ne rien casser...`, // francés
            `Bidoof está tentando não quebrar nada...`, // portugués
            `Bidoof sta cercando di non rompere nulla...`, // italiano
            `Bidiza versucht, nichts kaputt zu machen...`, // alemán
            `ビッパは何も壊さないようにしている...`, // japonés
            `비버니가 아무것도 부수지 않으려고 하고 있습니다...`, // coreano
            `大牙狸正在努力不弄坏任何东西……`, // chino
            `Bidoof stara się niczego nie zepsuć...` // polaco
        ],
        [
            `Inteleon misses version 1.3...`, // inglés
            `Inteleon echa de menos la versión 1.3...`, // español
            `Lézargus regrette la version 1.3...`, // francés
            `Inteleon sente falta da versão 1.3...`, // portugués
            `Inteleon rimpiange la versione 1.3...`, // italiano
            `Intelleon vermisst Version 1.3...`, // alemán
            `インテレオンはバージョン1.3を懐かしんでいる...`, // japonés
            `인텔리레온은 버전 1.3이 그립습니다...`, // coreano
            `千面避役想念1.3版本……`, // chino
            `Inteleon tęskni za wersją 1.3...` // polaco
        ],
        [
            `Inteleon misses version 1.3...`, // inglés
            `Inteleon echa de menos la versión 1.3...`, // español
            `Lézargus regrette la version 1.3...`, // francés
            `Inteleon sente falta da versão 1.3...`, // portugués
            `Inteleon rimpiange la versione 1.3...`, // italiano
            `Intelleon vermisst Version 1.3...`, // alemán
            `インテレオンはバージョン1.3を懐かしんでいる...`, // japonés
            `인텔리레온은 버전 1.3이 그립습니다...`, // coreano
            `千面避役想念1.3版本……`, // chino
            `Inteleon tęskni za wersją 1.3...` // polaco
        ],
        [
            `Pyukumuku is waiting for its rework...`, // inglés
            `Pyukumuku está esperando su rework...`, // español
            `Concombaffe attend sa refonte...`, // francés
            `Pyukumuku está esperando seu rework...`, // portugués
            `Pyukumuku sta aspettando il suo rework...`, // italiano
            `Gufa wartet auf sein Rework...`, // alemán
            `ナマコブシはリワークを待っている...`, // japonés
            `Pyukumuku는 리워크를 기다리고 있습니다...`, // coreano
            `拳海参正在等待重做……`, // chino
            `Pyukumuku czeka na swój rework...` // polaco
        ],
        [
            `Chatot is adjusting the volume...`, // inglés
            `Chatot está ajustando el volumen...`, // español
            `Pijako ajuste le volume...`, // francés
            `Chatot está ajustando o volume...`, // portugués
            `Chatot sta regolando il volume...`, // italiano
            `Plaudagei passt die Lautstärke an...`, // alemán
            `ペラップは音量を調整している...`, // japonés
            `페라페가 볼륨을 조절하고 있습니다...`, // coreano
            `聒噪鸟正在调整音量……`, // chino
            `Chatter czeka na regulację głośności...` // polaco
        ],
        [
            `Durant is hiding from Heatmor...`, // inglés
            `Durant se está escondiendo de Heatmor...`, // español
            `Fermite se cache de Aflamanoir...`, // francés
            `Durant está se escondendo de Heatmor...`, // portugués
            `Durant si sta nascondendo da Heatmor...`, // italiano
            `Fermicula versteckt sich vor Furnifraß...`, // alemán
            `アイアントはクイタランから隠れている...`, // japonés
            `아이앤트가 앤티골에게서 숨고 있습니다...`, // coreano
            `铁蚁正在躲避熔蚁兽……`, // chino
            `Durant ukrywa się przed Heatmorem...` // polaco
        ],
        [
            `Bronzor doesn't understand how to obtain itself either...`, // inglés
            `Bronzor tampoco entiende cómo se obtiene...`, // español
            `Archéomire ne comprend pas non plus comment l'obtenir...`, // francés
            `Bronzor também não entende como obtê-lo...`, // portugués
            `Bronzor non capisce nemmeno come si ottiene...`, // italiano
            `Bronzel versteht ebenfalls nicht, wie man es erhält...`, // alemán
            `ドーミラーも自分の入手方法が理解できていない...`, // japonés
            `동미러도 자신의 입수 방법을 이해하지 못하고 있습니다...`, // coreano
            `青铜镜也不明白自己的获取方式……`, // chino
            `Bronzor również nie rozumie, jak go zdobyć...` // polaco
        ],
        [
            `Unown is waiting for your response...`, // inglés
            `Unown espera tu respuesta...`, // español
            `Zarbi attend ta réponse...`, // francés
            `Unown está à espera da tua resposta...`, // portugués
            `Unown aspetta la tua risposta...`, // italiano
            `Icognito wartet auf deine Antwort...`, // alemán
            `アンノーンはあなたの返事を待っている…`, // japonés
            `안농이 네 대답을 기다리고 있다...`, // coreano
            `未知图腾正在等待你的回答……`, // chino
            `Unown czeka na twoją odpowiedź...` // polaco
        ]
        // [
        //     `Malamar wrote this...`, // inglés
        //     `Malamar ha escrito esto...`, // español
        //     `Sepiatroce a écrit ceci...`, // francés
        //     `Malamar escreveu isto...`, // portugués
        //     `Malamar ha scritto questo...`, // italiano
        //     `Calamanero hat dies geschrieben...`, // alemán
        //     `カラマネロはこれを書いた...`, // japonés
        //     `칼라마네로가 이것을 썼습니다...`, // coreano
        //     `乌贼王写下了这些……`, // chino
        //     `Malamar napisał to...` // polaco
        // ]
    ];
}

