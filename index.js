let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let computerChoice
    if (choice == 1)
        return computerChoice = "ROCK";
    else if (choice == 2)
        return computerChoice = "PAPER";
    else
        return computerChoice = "SCISSORS";
}

function getPlayerChoice() {
    let choice = prompt("Rock, Paper, Scissors?");
    choice = choice.toUpperCase();
    return choice;
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection == computerSelection)
        result = "It's a draw!";
    else if (
        playerSelection == "ROCK" && computerSelection == "PAPER" ||
        playerSelection == "PAPER" && computerSelection == "SCISSORS" ||
        playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        result = "You lose!";
        computerScore++;
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER" ||
        playerSelection == "ROCK" && computerSelection == "SCISSORS" ||
        playerSelection == "PAPER" && computerSelection == "ROCK") {
        result = "You win!";
        playerScore++;
    }
    return result;
}

console.log(playRound(playerSelection, computerSelection));
console.log(playerScore);
console.log(computerScore);
