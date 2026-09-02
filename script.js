const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return options[Math.floor(Math.random(3) * 3)];
}

let humanScore = 0;
let computerScore = 0;

const results = document.querySelector('.results');
const runningScores = document.querySelector('.running-scores');

function displayScores() {
   runningScores.textContent = `Your score: ${humanScore}; Computer's score: ${computerScore}`;
}
displayScores();

let btns = document.querySelectorAll('button');
btns.forEach((el) => el.addEventListener('click',
    (e) => playRound(e.target.textContent.toLowerCase())
))

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

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
    let p = document.createElement('p');
    p.textContent = msg;
    results.appendChild(p);

    displayScores();
    if (humanScore == 5 || computerScore === 5) {
        displayFinalAndReset();
    }
}

function displayFinalAndReset() {

    let msg;
    if (humanScore === 5) {
        msg = '  -  WINNER!!!!';
    } else {
        msg = '  -  Bummer :(';
    }
    txt = document.createTextNode(msg);
    runningScores.appendChild(txt);

    humanScore = 0;
    computerScore = 0;

    document.querySelectorAll('.results>p').forEach(
        p => p.parentElement.removeChild(p));

}

