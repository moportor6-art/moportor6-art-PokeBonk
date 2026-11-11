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
	key0: './assets/audio/ui/key0.wav',
	key1: './assets/audio/ui/key1.wav',
	click0: './assets/audio/ui/click0.wav',
	click1: './assets/audio/ui/click1.wav',
	close: './assets/audio/ui/close.wav',
	option: './assets/audio/ui/option.wav',	
	hover0: './assets/audio/ui/hover0.wav',
	hover1: './assets/audio/ui/hover1.wav',
	hover2: './assets/audio/ui/hover2.wav',
	hover4: './assets/audio/ui/hover4.wav',
	pop0: './assets/audio/ui/pop0.wav',
	pop1: './assets/audio/ui/pop1.wav',
	select: './assets/audio/ui/select.wav',
	start: './assets/audio/ui/start.wav',
	endTurn: './assets/audio/ui/endTurn.wav',
	purchase: './assets/audio/ui/purchase.wav',
	heal: './assets/audio/ui/heal.wav',
	equip: './assets/audio/ui/equip.wav',
	unequip: './assets/audio/ui/unequip.wav',
	obtain: './assets/audio/ui/obtain.wav',
	results: './assets/audio/ui/results.wav',
});

export const soundEffect = loadSounds({
	potion: './assets/audio/effect/potion.wav',
	effective: './assets/audio/effect/effective.wav',
	superEffective: './assets/audio/effect/superEffective.wav',
	noEffective: './assets/audio/effect/noEffective.wav',
	faint: './assets/audio/effect/faint.wav',
	shiny: './assets/audio/effect/shiny.wav',
	step: './assets/audio/effect/step.wav',
	buff: './assets/audio/effect/buff.wav',
	debuff: './assets/audio/effect/debuff.wav',
	poison: './assets/audio/effect/poison.wav',
	burn: './assets/audio/effect/burn.wav',
	dodge: './assets/audio/effect/dodge.wav',
	evolve: './assets/audio/effect/evolve.wav',
});

export const soundMusic = loadSounds({
	menuMusic: './assets/audio/music/menuMusic.mp3',
	battle1: './assets/audio/music/1.mp3',
	battle2: './assets/audio/music/2.mp3',
	battle3: './assets/audio/music/3.mp3',
	battle4: './assets/audio/music/4.mp3',
	battle5: './assets/audio/music/5.mp3',
	battle6: './assets/audio/music/6.mp3',
	battle7: './assets/audio/music/7.mp3',
	battle8: './assets/audio/music/8.mp3',
	battle9: './assets/audio/music/9.mp3',
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

	let cry = new Audio(`./assets/audio/cries/${num}.wav`);

	const master = audio.master * 0.05;
	const effects = audio.effects * 0.05;

	cry.volume = master * effects * 0.5;
	cry.play();
}	
