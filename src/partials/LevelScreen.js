import { SVG_NS } from '../settings';
import Screen from './Screen';

export default class LevelScreen extends Screen {

    constructor(x, y, size) {
        super(x,y,size);

        this.startTime = new Date().getTime(); //Current date and time for the countdown

    }//constructor ends here

    /**
     * Show the screen function
     */
    
    show(){
        this.startTime = new Date().getTime();
    }

    render(svg, width, height, currentLevelNum) {
        
        // Get quantity of seconds that past from start of screen showing

        let seconds = Math.floor(((new Date().getTime() - this.startTime) / 1000)); 
        
        if(seconds > 5) {
            return false; // Show screen only 5 seconds
        }

        // Draw the screen content
        
        let levelRect = document.createElementNS(SVG_NS, 'rect');
        
        levelRect.setAttributeNS(null, 'fill', '#353535');
        levelRect.setAttributeNS(null, 'width', width);
        levelRect.setAttributeNS(null, 'height', height);

        let levelText = document.createElementNS(SVG_NS, 'text');

        levelText.setAttributeNS(null, 'x', width / 2 - 150);
        levelText.setAttributeNS(null, 'y', height / 2 - 70);
        levelText.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        levelText.setAttributeNS(null, 'font-size', 70);
        levelText.setAttributeNS(null, 'fill', '#ffffff');
        levelText.textContent = 'Level ' + currentLevelNum;

        let levelAbstract = document.createElementNS(SVG_NS, 'text');
        
        levelAbstract.setAttributeNS(null, 'x', width / 2 - 135);
        levelAbstract.setAttributeNS(null, 'y', height / 2 - 20);
        levelAbstract.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        levelAbstract.setAttributeNS(null, 'font-size', 20);
        levelAbstract.setAttributeNS(null, 'fill', '#ffffff');
        levelAbstract.textContent = 'The game will start in';

        let Countdown = document.createElementNS(SVG_NS, 'text');
        
        Countdown.setAttributeNS(null, 'x', width / 2 - 25);
        Countdown.setAttributeNS(null, 'y', height / 2 + 80);
        Countdown.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        Countdown.setAttributeNS(null, 'font-size', 70);
        Countdown.setAttributeNS(null, 'fill', '#ff1a1a');
        let count = 5;

        //Countdown

        for(let i = 1; i <= 5; i++) {
            if(seconds < i){
                break;
            }
            count = count - 1;
        }
        Countdown.textContent = count;

        svg.appendChild(levelRect);
        svg.appendChild(levelText);
        svg.appendChild(levelAbstract);
        svg.appendChild(Countdown);

        return true;
    }


}