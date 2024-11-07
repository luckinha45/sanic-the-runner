import {kctx} from "../kaplayCtx";
import * as entities from "../entities";

export default function mainMenu() {
	
	// bg: 1920x1080
	const bgPieceWidth = 1920*2;
	const bgPieces = [
		kctx.add([kctx.sprite('sprt_chemical-bg'), kctx.pos(0, 0), kctx.scale(2), kctx.opacity(1), kctx.area()]),
		kctx.add([kctx.sprite('sprt_chemical-bg'), kctx.pos(bgPieceWidth), kctx.scale(2), kctx.opacity(1), kctx.area()])
	];

	

	// plat: 1280x160
	const platWidth = 1280;
	const platforms = [
		kctx.add([kctx.sprite('sprt_platforms'), kctx.pos(0, 760), kctx.scale(2), kctx.area()]),
		kctx.add([kctx.sprite('sprt_platforms'), kctx.pos(platWidth, 760), kctx.scale(2), kctx.area()]),
	];

	// collision under sonic
	kctx.add([
		kctx.rect(200, 10),
		kctx.opacity(0),
		kctx.area(),
		kctx.body({isStatic: true}),
		kctx.pos(100, 955)
	]);

	kctx.add([
		kctx.text('Sanic the Runner', {font: 'mania', size: 100}),
		kctx.pos(kctx.center().x, kctx.center().y - 300),
		kctx.anchor('center')
	]);

	kctx.add([
		kctx.text('Press SPACE to Jump into the Game!', {font: 'mania', size: 50}),
		kctx.pos(kctx.center().x, kctx.center().y - 200),
		kctx.anchor('center')
	]);

	/* const sonic = */ new entities.Sonic(kctx.vec2(200, 860), 'idle');
	// const mb = entities.Motobug.Spawn(kctx.vec2(-300, 0));

	kctx.onUpdate(() => {
		// -sonic.gameObj.pos.y / 10 - 50

		// moving bg
		if (bgPieces[1].pos.x <= 0) {
			bgPieces[0].moveTo(bgPieces[1].pos.x + bgPieceWidth, 0);
			bgPieces.push(bgPieces.shift());			
		}
		bgPieces[0].move(0, 0);
		bgPieces[1].moveTo(bgPieces[0].pos.x + bgPieceWidth, 0);

		// moving platforms
		if (platforms[1].pos.x <= 0) {
			platforms[0].moveTo(platforms[1].pos.x + platWidth, 760);
			platforms.push(platforms.shift());			
		}
		platforms[0].move(0, 0);
		platforms[1].moveTo(platforms[0].pos.x + platWidth, 760);
	})
}