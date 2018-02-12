import { SVG_NS } from '../settings';

export default class OpenScreen {

    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;

        this.enabled = true;
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
    } //constructor ends here

    render(svg, width, height) {

        if(this.enabled == false) {
            return false;
        }
        
        let rect = document.createElementNS(SVG_NS, 'rect');
        
        rect.setAttributeNS(null, 'fill', '#353535');
        rect.setAttributeNS(null, 'width', width);
        rect.setAttributeNS(null, 'height', height);

        let header = document.createElementNS(SVG_NS, 'text');

        header.setAttributeNS(null, 'x', 190);
        header.setAttributeNS(null, 'y', 50);
        header.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        header.setAttributeNS(null, 'font-size', 50);
        header.setAttributeNS(null, 'fill', '#ffffff');
        header.textContent = 'Instructions';
        
        let headPlayer1 = document.createElementNS(SVG_NS, 'text');

        headPlayer1.setAttributeNS(null, 'x', 80);
        headPlayer1.setAttributeNS(null, 'y', 110);
        headPlayer1.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        headPlayer1.setAttributeNS(null, 'font-size', 30);
        headPlayer1.setAttributeNS(null, 'fill', '#ff1a1a');
        headPlayer1.textContent = 'Player 1';

        let headPlayer2 = document.createElementNS(SVG_NS, 'text');

        headPlayer2.setAttributeNS(null, 'x', 530);
        headPlayer2.setAttributeNS(null, 'y', 110);
        headPlayer2.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        headPlayer2.setAttributeNS(null, 'font-size', 30);
        headPlayer2.setAttributeNS(null, 'fill', '#ff1a1a');
        headPlayer2.textContent = 'Player 2';

        let text1 = document.createElementNS(SVG_NS, 'text');
        
        text1.setAttributeNS(null, 'x', 150);
        text1.setAttributeNS(null, 'y', 150);
        text1.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        text1.setAttributeNS(null, 'font-size', 20);
        text1.setAttributeNS(null, 'fill', '#ffffff');
        text1.textContent = 'To control the puddle, please press';

        let text2 = document.createElementNS(SVG_NS, 'text');
        
        text2.setAttributeNS(null, 'x', 120);
        text2.setAttributeNS(null, 'y', 200);
        text2.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        text2.setAttributeNS(null, 'font-size', 30);
        text2.setAttributeNS(null, 'fill', '#ffa31a');
        text2.textContent = 'a';

        let text3 = document.createElementNS(SVG_NS, 'text');
        
        text3.setAttributeNS(null, 'x', 120);
        text3.setAttributeNS(null, 'y', 240);
        text3.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        text3.setAttributeNS(null, 'font-size', 30);
        text3.setAttributeNS(null, 'fill', '#ffa31a');
        text3.textContent = 'z';

        let text4 = document.createElementNS(SVG_NS, 'text');
        
        text4.setAttributeNS(null, 'x', 530);
        text4.setAttributeNS(null, 'y', 200);
        text4.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        text4.setAttributeNS(null, 'font-size', 30);
        text4.setAttributeNS(null, 'fill', '#ffa31a');
        text4.textContent = 'Up Arrow';

        let text5 = document.createElementNS(SVG_NS, 'text');
        
        text5.setAttributeNS(null, 'x', 510);
        text5.setAttributeNS(null, 'y', 240);
        text5.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        text5.setAttributeNS(null, 'font-size', 30);
        text5.setAttributeNS(null, 'fill', '#ffa31a');
        text5.textContent = 'Down Arrow';

        let text6 = document.createElementNS(SVG_NS, 'text');
        
        text6.setAttributeNS(null, 'x', 180);
        text6.setAttributeNS(null, 'y', 310);
        text6.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        text6.setAttributeNS(null, 'font-size', 20);
        text6.setAttributeNS(null, 'fill', '#ffffff');
        text6.textContent = 'To start the game, please press';

        let text7 = document.createElementNS(SVG_NS, 'text');
        
        text7.setAttributeNS(null, 'x', 340);
        text7.setAttributeNS(null, 'y', 350);
        text7.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        text7.setAttributeNS(null, 'font-size', 30);
        text7.setAttributeNS(null, 'fill', '#ffa31a');
        text7.textContent = 'Shift';


        svg.appendChild(rect);
        svg.appendChild(header);
        svg.appendChild(headPlayer1);
        svg.appendChild(headPlayer2);
        svg.appendChild(text1);
        svg.appendChild(text2);
        svg.appendChild(text3);
        svg.appendChild(text4);
        svg.appendChild(text5);
        svg.appendChild(text6);
        svg.appendChild(text7);

        return true;
        
    }

}
