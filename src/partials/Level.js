export default class Level {
    
    constructor(ballSpeed) {
        this.ballSpeed = ballSpeed;
        this.score1 = 0;
        this.score2 = 0;
    }

    isFinished(){
        if (this.score1 == 10 )
        {return 1;}
        if (this.score2 == 10)
        {    return 2;}
        return 0;
    }

}