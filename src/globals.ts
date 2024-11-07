export interface BestScore {
	name: string;
	score: number;
}

export let gameSpeed = 0;
export function setGameSpeed(speed: number) {
	gameSpeed = speed;
}

export let gameOver = false;
export function setGameOver() {
	gameOver = true;
}
