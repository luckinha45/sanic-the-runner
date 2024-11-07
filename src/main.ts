import { kctx } from "./kaplayCtx";
import * as scenes from './scenes';

kctx.loadSprite('sprt_platforms', 'graphics/platforms.png');
kctx.loadSprite('sprt_chemical-bg', 'graphics/chemical-bg.png');

// spread sprites
kctx.loadSprite('sprt_sonic', 'graphics/sonic.png', {
	sliceX: 8,
	sliceY: 3,
	anims: {
		run: {from: 0, to: 7, loop: true, speed: 30},
		jump: {from: 8, to: 15, loop: true, speed: 100},
		idle: {from: 16, to: 20, loop: true, speed: 10},
	},
});

kctx.loadSprite('sprt_ring', 'graphics/ring.png', {
	sliceX: 16,
	sliceY: 1,
	anims: {
		spin: {from: 0, to: 15, loop: true, speed: 30},
	},
});

kctx.loadSprite('sprt_motobug', 'graphics/motobug.png', {
	sliceX: 5,
	sliceY: 1,
	anims: {
		run: {from: 0, to: 4, loop: true, speed: 8},
	},
});

kctx.loadFont('mania', 'fonts/mania.ttf');

kctx.loadSound('snd_destroy', 'sounds/Destroy.wav');
kctx.loadSound('snd_hurt', 'sounds/Hurt.wav');
kctx.loadSound('snd_hyper-ring', 'sounds/HyperRing.wav');
kctx.loadSound('snd_ring', 'sounds/Ring.wav');
kctx.loadSound('snd_jump', 'sounds/Jump.wav');
kctx.loadSound('snd_city', 'sounds/City.mp3');
kctx.loadSound('snd_soundtrack', 'sounds/Soundtrack.wav');

// seta variaveis iniciais
if (!kctx.getData('best-scores')) kctx.setData('best-scores', []);
kctx.setGravity(3100);

kctx.scene('main-menu', scenes.mainMenu);
kctx.scene('game', scenes.Game);
kctx.scene('gameover', () => {});

kctx.go('main-menu');
 


