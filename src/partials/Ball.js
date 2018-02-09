import { SVG_NS, KEYS } from '../settings';

export default class Ball {
    
    constructor(radius, boardWidth, boardHeight) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = 1;

        this.reset();
        
    } //constructor ends here

    reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;
        
        //Generates a random number betweeen -5 and 5 that isn't 0
        this.vy = 0;
        while(this.vy === 0) {
            this.vy = Math.floor(Math.random() * 10 - 5);
        }

        // A number between -5 and 5, based on this.vy
        // Guarantees that if vy is large, vx is small (and vice versa)
        this.vx = this.direction * (6 - Math.abs(this.vy));
    }

    wallCollision() {
        const hitLeft = this.x - this.radius <= 0;
        const hitRight = this.x + this.radius >= this.boardWidth;
        const hitTop = this.y - this.radius <= 0;
        const hitBottom = this.y + this.radius >= this.boardHeight;

        if(hitTop || hitBottom) {
            this.vy = -this.vy;
        }
        else if(hitLeft || hitRight) {
            //this.reset();
            this.vx = -this.vx;
        }
    }

    /**
     * Render SVG Ball Image
     */

    render(svg, player1, player2) {
        
        this.x += this.vx;
        this.y += this.vy;
        
        this.wallCollision();
        
        //Draw the ball
        
        let ball = document.createElementNS(SVG_NS, 'circle');
        
        ball.setAttributeNS(null, 'fill', '#ff1a1a');
        ball.setAttributeNS(null, 'r', this.radius);
        ball.setAttributeNS(null, 'cx', this.x);
        ball.setAttributeNS(null, 'cy', this.y);

        svg.appendChild(ball);
    }

  }