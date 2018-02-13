import {SVG_NS} from '../settings';

export default class Score {

    constructor(x, y, size) {
      this.x = x;
      this.y = y;
      this.size = size;
    }//constructor ends here

    render(svg, score) {

        // Draw the scores
        
        let text = document.createElementNS(SVG_NS, 'text');

        text.setAttributeNS(null, 'x', this.x);
        text.setAttributeNS(null, 'y', this.y);
        text.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        text.setAttributeNS(null, 'font-size', this.size);
        text.setAttributeNS(null, 'fill', '#ffffff');
        text.textContent = score;

        svg.appendChild(text);
    }


}