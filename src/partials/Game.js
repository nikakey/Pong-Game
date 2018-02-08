import { SVG_NS, KEYS } from '../settings';
import Board from './Board';
import Paddle from './Paddle';

export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
		this.gameElement = document.getElementById(this.element);
		// Other code goes here...
		this.board = new Board(this.width, this.height);

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
			KEYS.z
		);
		
		this.player2 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			(this.width - this.boardGap - this.paddleWidth),
			((this.height - this.paddleHeight) / 2),
			KEYS.up,
			KEYS.down
		);

	}

	render() {
		// More code goes here...
		this.gameElement.innerHTML = '';
		
		let svg = document.createElementNS(SVG_NS, 'svg');
		
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		
		this.board.render(svg);

		this.player1.render(svg);
		this.player2.render(svg);

		this.gameElement.appendChild(svg);
	}

}