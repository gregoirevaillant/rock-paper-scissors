let playerScoreCount = 0;
let computerScoreCount = 0;
let gameOn = true;
let playerSelection;
let computerSelection;
let playerChoice;

let playerButtonRock = document.querySelector("#ROCK");
let playerButtonPaper = document.querySelector("#PAPER");
let playerButtonScissors = document.querySelector("#SCISSORS");

let buttons = document.querySelectorAll(".playerChoice");

let isChoiceMade = false;

let playerScore = document.querySelector("#scorePlayer");
let computerScore = document.querySelector("#scoreComputer");

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

    playerChoice = prompt("What is your choice? ");
    return playerChoice;

}

function getWinnerRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection == computerSelection) {
        result = "It's a tie!";
        console.log(result)
    } else if (
        playerSelection == "ROCK" && computerSelection == "PAPER" ||
        playerSelection == "PAPER" && computerSelection == "SCISSORS" ||
        playerSelection == "SCISSORS" && computerSelection == "ROCK"
    ) {
        result = "You lose!";
        console.log(result)
        computerScoreCount++;
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER" ||
        playerSelection == "ROCK" && computerSelection == "SCISSORS" ||
        playerSelection == "PAPER" && computerSelection == "ROCK"
    ) {
        result = "You win!";
        console.log(result)
        playerScoreCount++;
    }
}

function playRound() {
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    playerSelection = getPlayerChoice();
    console.log(playerSelection)

    getWinnerRound(playerSelection, computerSelection);
    playerScore.textContent = playerScoreCount;
    computerScore.textContent = computerScoreCount;


}

playRound();


// function game() {
//     while (gameOn) {
//         playerSelection = getPlayerChoice();
//         computerSelection = getComputerChoice();
//         playRound(playerSelection, computerSelection);
//         console.log(`score player: ${playerScore}`);
//         console.log(`score computer: ${computerScore}`);
//         if (playerScore === 5) {
//             gameOn = false;
//             console.log("You won the BO5")
//         } else if (computerScore === 5) {
//             gameOn = false;
//             console.log("You lost the BO5")
//         }
//     }
// }

// game();

