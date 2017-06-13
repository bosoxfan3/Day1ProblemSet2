function RockPaperScissors(userChoice) {
    let computerChoice = 1 + Math.floor((Math.random()*3));
    if (typeof userChoice !== 'number') {
        console.error('Please enter a number');
    }
    if (userChoice < 1 || userChoice > 3) {
        console.error('Please enter a 1, 2, or 3');
    }
    //Rock = 1, Paper = 2, Scissors = 3
    if (userChoice === computerChoice) {
        return "The result is a tie!";
    }
    else if (userChoice === 1) {
        if (computerChoice === 3) {
        return "User wins with rock";
        }
        else {
            return "Computer wins with paper";
        }
    }
    else if (userChoice === 2) {
        if (computerChoice === 1) {
            return "User wins with paper";
        }
        else {
            return "Computer wins with scissors";
        }
    } 
}