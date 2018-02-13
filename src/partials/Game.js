import { SVG_NS, KEYS } from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
import Pausescreen from './Pausescreen'
import Level from './Level';
import LevelScreen from './LevelScreen';
import WinnerScreen from './WinnerScreen';
import FinalWinner from './FinalWinner';
import OpenScreen from './OpenScreen';

export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
		this.gameElement = document.getElementById(this.element);

		this.board = new Board(this.width, this.height);

		this.ball = new Ball(8, this.width, this.height);
		
		this.paddleWidth = 8;
		this.paddleHeight = 56;
		this.boardGap = 10;
		
		this.player1 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.boardGap,
			((this.height - this.paddleHeight) / 2),
			KEYS.a,
			KEYS.z,
			'player1'
		);
		
		this.player2 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			(this.width - this.boardGap - this.paddleWidth),
			((this.height - this.paddleHeight) / 2),
			KEYS.up,
			KEYS.down,
			'player2'
		);

		document.addEventListener('keydown', event => {
			switch(event.key) {
				case KEYS.spaceBar:
					this.pause = !this.pause;
					break;
            }
		});
		
		this.score1 = new Score(this.width / 2 - 50, 30, 30);
		this.score2 = new Score(this.width / 2 + 30, 30, 30);

		this.pauseContent = new Pausescreen();

		// Change the speed of the ball by 2 (from 8 to 12) on each level

		this.levels = [];
		for(let i = 1; i < 4; i++){
			if(i !== 3){
				this.levels.push(new Level(i * 2 + 6));
			}
			else {
				this.levels.push(new Level(i * 2 + 6));
			}
		}

		this.currentLevel = 0;

		this.winnerScreen = new WinnerScreen();

		this.levelScreen = new LevelScreen();

		this.finalWinner = new FinalWinner();

		this.gameWinner = 0;

		this.openScreen = new OpenScreen();
	
	} // constructor ends here

	/** 
	 * Render SVG Images
	 */

	render() {
		
		this.gameElement.innerHTML = '';
		
		let svg = document.createElementNS(SVG_NS, 'svg');
		
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);

		this.gameElement.appendChild(svg);

		if(this.openScreen.render(svg, this.width, this.height) === true) {
			return;
		} // Stop rendering everything else when the open screen is shown

		
		if(this.finalWinner.render(svg, this.width, this.height, this.gameWinner) === true) {
			return;
		} // Stop rendering everything else when the final screen is shown, the end of the game
		
		
/**
 * Counting the winner score and change the level
 */

		let winner = 'none';
		let winnerNum = this.levels[this.currentLevel].getWinner();
		if(winnerNum > 0) {
			if(this.currentLevel === 2) { // There are only 3 levels, so the game winner is defined here
				this.finalWinner.enabled = true;
				let p1 = 0; // Quantity of wins of the player 1
				let p2 = 0; // Quantity of wins of the player 2
				for(let i = 0; i <= 2; i++) {
					if(this.levels[i].getWinner() === 1) {
						p1++;
					}
					else {
						p2++;
					}
				}
				if(p1 > p2) {
					this.gameWinner = this.player1.player;
				}
				else {
					this.gameWinner = this.player2.player;
				}
				return; // Exit the function to show Final Winner screen
			}
			if (this.winnerScreen.wasShown === false) {
				this.winnerScreen.enabled = true;
			}
			if (winnerNum === 1) {
				winner = this.player1.player;
			}
			if (winnerNum === 2) {
				winner = this.player2.player;
			}
		
			if (this.winnerScreen.enabled === false){ // Show the level screen only after the level winner Screen is closed
				this.levelScreen.show();
				this.currentLevel++;
				this.player1.score = 0;
				this.player2.score = 0;
			}
			
		}

		if(this.winnerScreen.render(svg, this.width, this.height, this.currentLevel+1, winner) === true) {
			this.winnerScreen.wasShown = true;
			return;
		}
		else {
			this.winnerScreen.wasShown = false;
		}
		
		if(this.levelScreen.render(svg, this.width, this.height, this.currentLevel + 1) === true) {
			return;
		}
		
		this.ball.ballSpeed = this.levels[this.currentLevel].ballSpeed;
		
		this.board.render(svg);

		this.player1.render(svg, this.pause);
		this.player2.render(svg, this.pause);

		this.ball.render(svg, this.player1, this.player2, this.pause, this.levels[this.currentLevel]);

		this.score1.render(svg, this.player1.score);
		this.score2.render(svg, this.player2.score);

		if(this.pause) {
			this.pauseContent.render(svg, this.width, this.height);
			return;
		}
	}

}