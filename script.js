const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return options[Math.floor(Math.random(3) * 3)];
}

function getHumanChoice() {
    let choice = prompt('Enter your choice');
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let msg;
    if (humanChoice === 'rock' && computerChoice == 'paper'
        || humanChoice === 'paper' && computerChoice == 'scissors'
        || humanChoice === 'scissors' && computerChoice == 'rock') {
        computerScore += 1;
        msg = `You lose! ${computerChoice} beats ${humanChoice}`;
    } else if (computerChoice === 'rock' && humanChoice == 'paper'
        || computerChoice === 'paper' && humanChoice == 'scissors'
        || computerChoice === 'scissors' && humanChoice == 'rock') {
        humanScore += 1;
        msg = `You WIN!! ${humanChoice} beats ${computerChoice}`;
    } else {
        msg = `Draw - computer also chose ${computerChoice}`;
    }
    console.log(msg);
}

function playGame() {
    let humanSelection;
    let computerSelection;
    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log(`Your score: ${humanScore}; Computer's score: ${computerScore}`);
    let msg;
    if (humanScore > computerScore) {
        msg = 'WINNER!!!!';
    } else if (computerScore > humanScore) {
        msg = 'Bummer :(';
    } else {
        msg = "ho hum...";
    }
    console.log(msg);
}

playGame();
