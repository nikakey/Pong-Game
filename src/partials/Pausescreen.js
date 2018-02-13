import { SVG_NS } from '../settings';

export default class Pausescreen {

    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;

    }//constructor ends here

    render(svg, width, height) {

        // Draw puse screen content
        
        let pauseRect = document.createElementNS(SVG_NS, 'rect');
        
        pauseRect.setAttributeNS(null, 'fill', '#353535');
        pauseRect.setAttributeNS(null, 'opacity', '.5');
        pauseRect.setAttributeNS(null, 'width', width);
        pauseRect.setAttributeNS(null, 'height', height);

        let pauseText = document.createElementNS(SVG_NS, 'text');

        pauseText.setAttributeNS(null, 'x', width / 2 - 125);
        pauseText.setAttributeNS(null, 'y', height / 2 - 70);
        pauseText.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        pauseText.setAttributeNS(null, 'font-size', 70);
        pauseText.setAttributeNS(null, 'fill', '#ff1a1a');
        pauseText.textContent = 'Pause';

        let pauseAbstract = document.createElementNS(SVG_NS, 'text');
        
        pauseAbstract.setAttributeNS(null, 'x', 165);
        pauseAbstract.setAttributeNS(null, 'y', height / 2);
        pauseAbstract.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        pauseAbstract.setAttributeNS(null, 'font-size', 20);
        pauseAbstract.setAttributeNS(null, 'fill', '#ffffff');
        pauseAbstract.textContent = 'To continue the game, please press';

        let pauseSpacebar = document.createElementNS(SVG_NS, 'text');
        
        pauseSpacebar.setAttributeNS(null, 'x', width / 2 - 85);
        pauseSpacebar.setAttributeNS(null, 'y', height / 2 + 40);
        pauseSpacebar.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        pauseSpacebar.setAttributeNS(null, 'font-size', 30);
        pauseSpacebar.setAttributeNS(null, 'fill', '#ffa31a');
        pauseSpacebar.textContent = 'spacebar';

        svg.appendChild(pauseRect);
        svg.appendChild(pauseText);
        svg.appendChild(pauseAbstract);
        svg.appendChild(pauseSpacebar);
    }


}