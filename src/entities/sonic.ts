import {AnchorComp, AreaComp, BodyComp, GameObj, PosComp, ScaleComp, SpriteComp, Vec2} from "kaplay";
import { kctx } from "../kaplayCtx";
import { setGameOver, setGameSpeed } from "../globals";

export default class Sonic {
	public gameObj: GameObj<SpriteComp | ScaleComp | AreaComp | AnchorComp | PosComp | BodyComp>;
	private jmpForce: number = 1700;

	constructor(pos: Vec2, anim: string) {
		this.gameObj = kctx.add([
			kctx.sprite('sprt_sonic', {anim: anim}),
			kctx.scale(4),
			kctx.area(),
			kctx.anchor('center'),
			kctx.pos(pos),
			kctx.body({jumpForce: this.jmpForce})
		]);

		
		
		this.gameObj.onAnimStart((anim) => {
			if (anim === 'jump') {
				this.gameObj.area.shape = new kctx.Rect(kctx.vec2(0, 0), 30, 30);
			}
			else if (anim === 'run') {
				this.gameObj.area.shape = new kctx.Rect(kctx.vec2(0, 0), 30, 48);
			}
		});

		this.SetControls();
		this.SetEvents();

		this.gameObj.onCollide('enemy', (enemy, col) => {
			if (col.isBottom()) {
				kctx.play('snd_destroy', {volume: 0.5});
				kctx.play('snd_hyper-ring', {volume: 0.5});
				kctx.destroy(enemy);
			}
			else {
				kctx.play('snd_hurt', {volume: 0.5});
				setGameSpeed(0);
				setGameOver();

				kctx.get('enemy').forEach((enemy) => {
					enemy.stop();
					enemy.vel = enemy.vel.scale(0); 
				});
			}
		})
	}

	public SetControls() {
		kctx.onButtonPress('jump', () => {
			// if (this.gameObj.isGrounded()) {
			if (this.gameObj.getCurAnim().name !== 'jump') {
				kctx.play('snd_jump', {volume: 0.5});
				this.gameObj.play('jump');
				this.gameObj.jump();
			}
		});
		kctx.onButtonRelease('jump', () => {
			if (this.gameObj.getCurAnim().name === 'jump') {
				if (this.gameObj.vel.y < 0) {
					this.gameObj.vel = this.gameObj.vel.scale(0.2);
				}
			}
		})
	}

	public SetEvents() {
		this.gameObj.onGround(() => {
			if (this.gameObj.getCurAnim().name !== 'idle') {
				// MUDA CENA
				if (kctx.getSceneName() === 'main-menu') {
					kctx.go('game');
				}
				else {
					this.gameObj.play('run');
				}
			}
		});
	}
}
