import { SVG_NS } from '../settings';

export default class Ball {
    
    constructor(radius, boardWidth, boardHeight) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = 1;

        this.ballSpeed = 8; 

        this.ping = new Audio('public/sounds/pong-03.wav'); // Add sound when the ball hits a paddle

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

        this.vx = this.direction * (this.ballSpeed - Math.abs(this.vy));
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
            this.vx = -this.vx;
        }
    }

    paddleCollision(player1, player2) {
        if(this.vx > 0) {
            let paddle = player2.coordinates(player2.x, player2.y, player2.width, player2.height);
            let [leftX, rightX, topY, bottomY] = paddle;
            if((this.x + this.radius >= leftX) 
                && (this.x + this.radius <= rightX) 
                && (this.y >= topY) && (this.y <= bottomY)
            ) 
            {
                this.vx = -this.vx;
                this.ping.play();
            }

        }
        else {
            let paddle = player1.coordinates(player1.x, player1.y, player1.width, player1.height);
            let [leftX, rightX, topY, bottomY] = paddle;
            if((this.x - this.radius <= rightX) 
                && (this.x - this.radius >= leftX)
                && (this.y >= topY) && (this.y <= bottomY)
            )
            {
                this.vx = -this.vx;
                this.ping.play();
            }
        }
    }

    goal(player, level) {
        player.score++;
        if(player.player === 'player1') {
            level.score1++;
        }
        else {
            level.score2++;
        }
        this.reset();
    }

    /**
     * Render SVG Ball Image
     */

    render(svg, player1, player2, pause, level) {
        
        // Stop the ball from render when pause is active

        if(!pause) {
            this.x += this.vx;
            this.y += this.vy;

            this.wallCollision();
            this.paddleCollision(player1, player2);
        }
        //Draw the ball
        
        let ball = document.createElementNS(SVG_NS, 'circle');
        
        ball.setAttributeNS(null, 'fill', '#ff1a1a');
        ball.setAttributeNS(null, 'r', this.radius);
        ball.setAttributeNS(null, 'cx', this.x);
        ball.setAttributeNS(null, 'cy', this.y);

        svg.appendChild(ball);

        const rightGoal = this.x + this.radius >= this.boardWidth;
        const leftGoal = this.x - this.radius <= 0;

        if(rightGoal) {
            this.goal(player1, level);
            this.direction = 1;
        }
        else if(leftGoal) {
            this.goal(player2, level);
            this.direction = -1;
        }
    }

  }