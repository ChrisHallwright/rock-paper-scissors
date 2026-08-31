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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);