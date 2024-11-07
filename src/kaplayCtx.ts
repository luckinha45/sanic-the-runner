import kaplay from "kaplay";

export const kctx = kaplay({
	width: 1920,
	height: 1080,
	letterbox: true,
	background: [100,0,200],
	debugKey: 'd',
	buttons: {
		jump: {
			keyboard: ["space"],
		}
	},
});

