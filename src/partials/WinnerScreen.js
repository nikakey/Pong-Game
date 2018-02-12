import { SVG_NS } from '../settings';

export default class WinnerScreen {

    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.enabled = false;
        this.wasShown = false;
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

        if(this.enabled == false) {
            return false;
        }
        
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
        name.setAttributeNS(null, 'fill', '#ffffff');
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
        keyName.setAttributeNS(null, 'y', height / 2 + 100);
        keyName.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        keyName.setAttributeNS(null, 'font-size', 30);
        keyName.setAttributeNS(null, 'fill', '#ffffff');
        keyName.textContent = 'Shift';


        svg.appendChild(rect);
        svg.appendChild(text);
        svg.appendChild(name);
        svg.appendChild(nextStep);
        svg.appendChild(keyName);

        return true;
        
    }


}