import { SVG_NS } from '../settings';
import Screen from './Screen';

export default class WinnerScreen extends Screen {

    constructor(x, y, size) {
        
        super(x,y,size);

        this.enabled = false; // True - show the screen; False - don't show the screen
        this.wasShown = false; // True - screen was shown; False screen was not shown
        
        //Listen to Shift to open the next screen

        document.addEventListener('keydown', event => {
            if(event.shiftKey) {
                this.enabled = false;
            }
        });

        this.keyState = {};

        document.addEventListener('keydown', event => {
            this.keyState[event.key || event.which] = true;
        }, true);

        document.addEventListener('keyup', event => {
            this.keyState[event.key || event.which] = false;
        }, true);

    }//constructor ends here

    render(svg, width, height, currentLevelNum, winnerName) {

        if(this.enabled === false) {
            return false; // Don't show the screen
        } 

        // Draw the screen content
        
        let rect = document.createElementNS(SVG_NS, 'rect');
        
        rect.setAttributeNS(null, 'fill', '#353535');
        rect.setAttributeNS(null, 'width', width);
        rect.setAttributeNS(null, 'height', height);

        let text = document.createElementNS(SVG_NS, 'text');

        text.setAttributeNS(null, 'x', 80);
        text.setAttributeNS(null, 'y', height / 2 - 70);
        text.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        text.setAttributeNS(null, 'font-size', 70);
        text.setAttributeNS(null, 'fill', '#ffffff');
        text.textContent = 'Level ' + (currentLevelNum) + ' winner';

        let name = document.createElementNS(SVG_NS, 'text');
        
        name.setAttributeNS(null, 'x', width / 2 - 100);
        name.setAttributeNS(null, 'y', height / 2);
        name.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        name.setAttributeNS(null, 'font-size', 40);
        name.setAttributeNS(null, 'fill', '#ff1a1a');
        name.textContent = winnerName;

        let nextStep = document.createElementNS(SVG_NS, 'text');
        
        nextStep.setAttributeNS(null, 'x', 160);
        nextStep.setAttributeNS(null, 'y', height / 2 + 50);
        nextStep.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        nextStep.setAttributeNS(null, 'font-size', 20);
        nextStep.setAttributeNS(null, 'fill', '#ffffff');
        nextStep.textContent = 'To start the next level, please press';

        let keyName = document.createElementNS(SVG_NS, 'text');
        
        keyName.setAttributeNS(null, 'x', width / 2 - 50);
        keyName.setAttributeNS(null, 'y', height / 2 + 90);
        keyName.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        keyName.setAttributeNS(null, 'font-size', 30);
        keyName.setAttributeNS(null, 'fill', '#ffa31a');
        keyName.textContent = 'Shift';


        svg.appendChild(rect);
        svg.appendChild(text);
        svg.appendChild(name);
        svg.appendChild(nextStep);
        svg.appendChild(keyName);

        return true; // Show the screen
        
    }


}