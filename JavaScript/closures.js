

let score = 0;

function creatGame() {

    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }
    
    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }
    
    function getScore() {
        return score;
    }

    return {increaseScore, decreaseScore, getScore};

}

let game = creatGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The Final score is ${game.getScore()}pts`);