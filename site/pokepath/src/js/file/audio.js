function loadSounds(paths, options = {}) {
	const sounds = {};
	for (const [key, path] of Object.entries(paths)) {
		const audio = new Audio(path);
		if (options.loop) audio.loop = true;
		sounds[key] = audio;
	}
	return sounds;
}

export const soundUi = loadSounds({
	close: './td/sonidos/back.ogg',
	open: './td/sonidos/select.ogg',
	hover1: './td/sonidos/hover.ogg',
	hover2: './td/sonidos/hover.ogg',
	hover3: './td/sonidos/hover.ogg',
	option: './td/sonidos/click.ogg',
	button1: './td/sonidos/click.ogg',
	button2: './td/sonidos/click.ogg',
	key0: './td/sonidos/click.ogg',
	key1: './td/sonidos/click.ogg',
	click1: './td/sonidos/click.ogg',
	select: './td/sonidos/select.ogg',
	obtain: './td/sonidos/chest.ogg',
	step: './src/assets/sounds/ui/step.wav',
	equip: './td/sonidos/confirm.ogg',
	unequip: './td/sonidos/back.ogg',
	pop0: './td/sonidos/error.ogg',
	purchase: './td/sonidos/buy.ogg',
	end: './src/assets/sounds/ui/end.wav',

	click0: './td/sonidos/click.ogg',
	start: './td/sonidos/confirm.ogg',
	results: './td/sonidos/levelup.ogg',
});

export const soundEffect = loadSounds({


	hit2: './src/assets/sounds/effect/hit2.wav',
	hit3: './src/assets/sounds/effect/hit3.wav',
	chatot: './src/assets/sounds/effect/chatot.wav',

	teleport: './td/sonidos/rift.ogg',
	aegislashChange: './src/assets/sounds/effect/aegislashChange.wav',
	ding: './td/sonidos/xp.ogg',
	shiny: './td/sonidos/shiny.ogg',

	dog1: './src/assets/sounds/effect/dog1.wav',
	dog2: './src/assets/sounds/effect/dog2.wav',
	dog3: './src/assets/sounds/effect/dog3.wav',
	dog4: './src/assets/sounds/effect/dog4.wav',


	regenerator: './td/sonidos/heal.ogg',
	invi: './src/assets/sounds/effect/invi.wav',
	earthquake: './td/sonidos/quake.ogg',
	paralyzed: './src/assets/sounds/effect/paralyzed.wav',

	bell: './td/sonidos/toll.ogg',
	bronzor1: './src/assets/sounds/effect/bronzor1.wav',
	bronzor2: './src/assets/sounds/effect/bronzor2.wav',
	chimecho: './src/assets/sounds/effect/chimecho.wav',
	rillaboom: './src/assets/sounds/effect/rillaboom.wav',
	kyogre: './src/assets/sounds/effect/kyogre.wav',
	explosion: './td/sonidos/burst1.ogg',
	pull: './src/assets/sounds/effect/pull.wav',
	shadowTag:  './src/assets/sounds/effect/shadowTag.wav',

	dance: './src/assets/sounds/effect/dance.wav',
	door:  './src/assets/sounds/effect/door.wav',

});

export const soundMusic = loadSounds({
	intro: './td/musica/village.ogg',
	route1: './td/musica/village.ogg',
	route2: './td/musica/village.ogg',
	route3: './td/musica/village.ogg',
	route4: './td/musica/forest.ogg',
	route5: './td/musica/forest.ogg',
	route6: './td/musica/forest.ogg',
	route7: './td/musica/cave.ogg',
	route8: './td/musica/cave.ogg',
	route9: './td/musica/cave.ogg',
	route10: './td/musica/village.ogg',
	route11: './td/musica/forest.ogg',
	route12: './td/musica/cave.ogg',
	route13: './td/musica/rift.ogg',
	route14: './td/musica/rift.ogg',
	route15: './td/musica/rift.ogg',
	route16: './td/musica/rift.ogg',
	route17: './td/musica/forest.ogg',
	route18: './td/musica/forest.ogg',
	route19: './td/musica/forest.ogg',
	route20: './td/musica/forest.ogg',
	route21: './td/musica/volcano.ogg',
	route22: './td/musica/volcano.ogg',
	route23: './td/musica/cave.ogg',
	route24: './td/musica/cave.ogg',
	route25: './td/musica/cave.ogg',
	route26: './td/musica/volcano.ogg',
	route27: './td/musica/judgment.ogg',
	route28: './td/musica/judgment.ogg',
	route29: './td/musica/cave.ogg',
	route30: './td/musica/judgment.ogg',
	route31: './td/musica/judgment.ogg',
	route32: './td/musica/judgment.ogg',

	route33: './td/musica/rift.ogg',
	route34: './td/musica/rift.ogg',
	route35: './td/musica/rift.ogg',
	route36: './td/musica/rift.ogg',
	route37: './td/musica/volcano.ogg',
	route38: './td/musica/volcano.ogg',
	route39: './td/musica/volcano.ogg',
	route40: './td/musica/volcano.ogg',
	halloween: './td/musica/halloween.ogg',
}, { loop: true });

const soundBanks = {
	ui: soundUi,
	effect: soundEffect,
	music: soundMusic
};

export function playSound(sound, origin) {
	const s = soundBanks[origin]?.[sound];
	if (!s) return;

	s.pause();
	s.currentTime = 0;
	s.play().catch(() => {});
}

export function setVolume() {
	const audio = JSON.parse(window.localStorage.getItem("data")).config.audio;

	const master = audio.master * 0.05;
	const volUi = audio.ui * 0.05 * master;
	const volMusic = audio.music * 0.05 * master;
	const volEffect = audio.effects * 0.05 * master;

	Object.keys(soundUi).forEach((key) => soundUi[key].volume = volUi);
	Object.keys(soundMusic).forEach((key) => soundMusic[key].volume = volMusic);
	Object.keys(soundEffect).forEach((key) => soundEffect[key].volume = volEffect);
}

let currentMusic = null;
let fadeOutInterval = null;
let fadeInInterval = null;

export function playMusic(trackName) {
	const newTrack = soundMusic[trackName];
	if (!newTrack) return;

	if (currentMusic === newTrack) return;

	newTrack.loop = true;
	newTrack.volume = 0;

	if (currentMusic) {
		clearInterval(fadeOutInterval);
		fadeOutInterval = setInterval(() => {
			if (currentMusic.volume > 0.01) {
				currentMusic.volume -= 0.01;
			} else {
				currentMusic.pause();
				currentMusic.currentTime = 0;
				clearInterval(fadeOutInterval);
				startNewTrack(newTrack);
			}
		}, 30);
	} else {
		startNewTrack(newTrack);
	}
}

function startNewTrack(track) {
	const audio = JSON.parse(window.localStorage.getItem("data")).config.audio;
	const master = audio.master * 0.05;
	const music = audio.music * 0.05;
	const targetVolume = master * music;

	track.play();
	currentMusic = track;

	clearInterval(fadeInInterval);
	let vol = 0;
	fadeInInterval = setInterval(() => {
		if (vol < targetVolume) {
			vol += 0.02;
			track.volume = Math.min(vol, targetVolume);
		} else {
			clearInterval(fadeInInterval);
			track.volume = targetVolume;
		}
	}, 50);
}

export function crySound(pokemonNumber) {
	const audio = JSON.parse(window.localStorage.getItem("data")).config.audio;
	let num =  String(pokemonNumber).padStart(3, '0');

	let cry = new Audio(`./src/assets/sounds/cries/${num}.wav`);

	const master = audio.master * 0.05;
	const effects = audio.effects * 0.05;

	cry.volume = master * effects * 0.5;
	cry.play();
}	
