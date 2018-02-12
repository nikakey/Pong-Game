import { SVG_NS } from '../settings';

export default class FinalWinner {

    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.enabled = false;

    }//constructor ends here

    render(svg, width, height, winner) {

        if(this.enabled == false) {
            return false;
        }
        
        let rect = document.createElementNS(SVG_NS, 'rect');
        
        rect.setAttributeNS(null, 'fill', '#353535');
        rect.setAttributeNS(null, 'width', width);
        rect.setAttributeNS(null, 'height', height);

        let text = document.createElementNS(SVG_NS, 'text');

        text.setAttributeNS(null, 'x', 40);
        text.setAttributeNS(null, 'y', height / 2 - 70);
        text.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        text.setAttributeNS(null, 'font-size', 60);
        text.setAttributeNS(null, 'fill', '#ffffff');
        text.textContent = 'The final winner is';

        let name = document.createElementNS(SVG_NS, 'text');
        
        name.setAttributeNS(null, 'x', width / 2 - 100);
        name.setAttributeNS(null, 'y', height / 2);
        name.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        name.setAttributeNS(null, 'font-size', 40);
        name.setAttributeNS(null, 'fill', '#ffffff');
        name.textContent = winner;

        let congrats = document.createElementNS(SVG_NS, 'text');
        
        congrats.setAttributeNS(null, 'x', 90);
        congrats.setAttributeNS(null, 'y', height / 2 + 100);
        congrats.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        congrats.setAttributeNS(null, 'font-size', 50);
        congrats.setAttributeNS(null, 'fill', '#ffffff');
        congrats.textContent = 'Congratulations!!!';


        svg.appendChild(rect);
        svg.appendChild(text);
        svg.appendChild(name);
        svg.appendChild(congrats);

        return true;
        
    }


}