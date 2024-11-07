import {AnchorComp, AreaComp, BodyComp, GameObj, OffScreenComp, PosComp, ScaleComp, SpriteComp, Vec2} from "kaplay";
import {kctx} from "../kaplayCtx";

export default class Motobug {
	public gameObj: GameObj<SpriteComp | AreaComp | ScaleComp | AnchorComp | PosComp | OffScreenComp | BodyComp>;
	// public destroyed: boolean = false;

	constructor(speed: Vec2) {
		this.gameObj = kctx.add([
			'enemy',
			kctx.sprite('sprt_motobug', {anim: 'run'}),
			kctx.area({shape: new kctx.Rect(kctx.vec2(-5, 0), 32, 27)}),
			kctx.scale(4),
			kctx.anchor('center'),
			kctx.pos(2100 , 892),
			kctx.offscreen({destroy: true, distance: -300}),
			kctx.body({gravityScale: 0})
		])

		this.gameObj.vel = speed;
	}

	public static Spawn(speed: Vec2) {
		return new Motobug(speed);
	}
}