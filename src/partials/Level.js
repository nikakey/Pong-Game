export default class Level {
    
    constructor(ballSpeed) {
        this.ballSpeed = ballSpeed;
        this.score1 = 0;
        this.score2 = 0;
    } //constructor ends here

    // Return the winner of the level:
    // 0 - no winner
    // 1 - player 1 is the winner
    // 2 - player 2 is the winner

    getWinner(){
        if (this.score1 === 10 )
        {return 1;}
        if (this.score2 === 10)
        {    return 2;}
        return 0;
    }

}