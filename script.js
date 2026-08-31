const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return options[Math.floor(Math.random(3) * 3)];
}

function getHumanChoice() {
    let choice = prompt('Enter your choice');
    return choice.toLowerCase();
}

console.log(getHumanChoice());