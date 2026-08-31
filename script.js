const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return options[Math.floor(Math.random(3) * 3)];
}

console.log(getComputerChoice());