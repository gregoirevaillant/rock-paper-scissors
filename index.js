function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    let computerChoice
    if (number == 1)
        return computerChoice = "rock";
    else if (number == 2)
        return computerChoice = "paper";
    else
        return computerChoice = "scissors";
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    let result;
    if (playerSelection == computerSelection)
        result = "It's a draw!";
    else if (playerSelection == "rock" && computerSelection == "paper")
        result = "You lose!";
    else if (playerSelection == "paper" && computerSelection == "rock")
        result = "You win!";
    else if (playerSelection == "paper" && computerSelection == "scissors")
        result = "You lose!";
    else if (playerSelection == "scissors" && computerSelection == "paper")
        result = "You win!";
    else if (playerSelection == "rock" && computerSelection == "scissors")
        result = "You win!";
    else if (playerSelection == "scissors" && computerSelection == "rock")
        result = "You lose!";
    return result;
}

console.log(playRound(playerSelection, computerSelection));
