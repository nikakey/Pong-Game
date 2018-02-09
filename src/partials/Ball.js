import { SVG_NS } from '../settings';

export default class Ball {
    
    constructor(radius, boardWidth, boardHeight) {
      this.radius = radius;
      this.boardWidth = boardWidth;
      this.boardHeight = boardHeight;
      this.direction = 1;
    }

    /**
     * Render SVG Images
     */

    render(svg, player1, player2) {
        
        let ball = document.createElementNS(SVG_NS, 'circle');
        
        ball.setAttributeNS(null, 'fill', '#ff1a1a');
        ball.setAttributeNS(null, 'r', this.radius);
        ball.setAttributeNS(null, 'cx', this.boardWidth / 2);
        ball.setAttributeNS(null, 'cy', this.boardHeight / 2);

        svg.appendChild(ball);
    }

    reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;
      }

  }