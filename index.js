let playerScore = 0;
let computerScore = 0;
let gameOn = true;
let playerSelection;
let computerSelection;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}

function getPlayerChoice() {
    let choice = prompt("Rock, Paper, Scissors?");
    choice = choice.toUpperCase();
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection == computerSelection) {
        result = "It's a tie!";
    } else if (
        playerSelection == "ROCK" && computerSelection == "PAPER" ||
        playerSelection == "PAPER" && computerSelection == "SCISSORS" ||
        playerSelection == "SCISSORS" && computerSelection == "ROCK"
    ) {
        result = "You lose!";
        computerScore++;
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER" ||
        playerSelection == "ROCK" && computerSelection == "SCISSORS" ||
        playerSelection == "PAPER" && computerSelection == "ROCK"
    ) {
        result = "You win!";
        playerScore++;
    }
    console.log(result)
}

function game() {
    while (gameOn) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(`score player: ${playerScore}`);
        console.log(`score computer: ${computerScore}`);
        if (playerScore === 5) {
            gameOn = false;
            console.log("You won the BO5")
        } else if (computerScore === 5) {
            gameOn = false;
            console.log("You lost the BO5")
        }
    }
}

game();

