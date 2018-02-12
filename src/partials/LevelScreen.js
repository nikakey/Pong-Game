import { SVG_NS } from '../settings';

export default class LevelScreen {

    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.startTime = new Date().getTime();

    }//constructor ends here

    show(){
        this.startTime = new Date().getTime();
    }

    render(svg, width, height, currentLevelNum) {
        
        let seconds = Math.floor(((new Date().getTime() - this.startTime) / 1000));

        if(seconds > 5) {
            return false;
        }
        
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