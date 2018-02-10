import { SVG_NS } from '../settings';

export default class Pausescreen {

    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;

    

    }//constructor ends here

    render(svg, pause) {
        
        let pauseText = document.createElementNS(SVG_NS, 'text');

        pauseText.setAttributeNS(null, 'x', this.x);
        pauseText.setAttributeNS(null, 'y', this.y);
        pauseText.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        pauseText.setAttributeNS(null, 'font-size', this.size);
        pauseText.setAttributeNS(null, 'fill', '#ffffff');
        pauseText.textContent = pause;

        let pauseAbstract = document.createElementNS(SVG_NS, 'text');
        
        pauseAbstract.setAttributeNS(null, 'x', this.x);
        pauseAbstract.setAttributeNS(null, 'y', this.y);
        pauseAbstract.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        pauseAbstract.setAttributeNS(null, 'font-size', this.size);
        pauseAbstract.setAttributeNS(null, 'fill', '#ffffff');
        pauseAbstract.textContent = pause;

        svg.appendChild(pauseText);
        svg.appendChild(pauseAbstract);
    }


}