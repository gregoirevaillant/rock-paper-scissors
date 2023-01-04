let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

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

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    roundWinner = "tie";
    console.log(playerSelection);
    console.log(computerSelection);
  } else if (
    (playerSelection == "ROCK" && computerSelection == "PAPER") ||
    (playerSelection == "PAPER" && computerSelection == "SCISSORS") ||
    (playerSelection == "SCISSORS" && computerSelection == "ROCK")
  ) {
    roundWinner = "computer";
    computerScore++;
    console.log(playerSelection);
    console.log(computerSelection);
  } else if (
    (playerSelection == "SCISSORS" && computerSelection == "PAPER") ||
    (playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
    (playerSelection == "PAPER" && computerSelection == "ROCK")
  ) {
    roundWinner = "player";
    playerScore++;
    console.log(playerSelection);
    console.log(computerSelection);
  }
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

let rockButton = document.querySelector("#ROCK");
let paperButton = document.querySelector("#PAPER");
let scissorsButton = document.querySelector("#SCISSORS");

let roundInformation = document.querySelector("#roundInfo");

let computerScoreContent = document.querySelector("#scoreComputer");
let playerScoreContent = document.querySelector("#scorePlayer");

let playerSelection = "ROCK";
let computerSelection = getComputerChoice();

rockButton.addEventListener("click", () => handleClick("ROCK"));
paperButton.addEventListener("click", () => handleClick("PAPER"));
scissorsButton.addEventListener("click", () => handleClick("SCISSORS"));

function handleClick(playerSelection) {
  if (isGameOver()) alert("Fin du jeu");
  return playerSelection;
}

function updateScore() {
  if (roundWinner === "tie") roundInformation.textContent = "Its a tie!";
  else if (roundWinner === "computer")
    roundInformation.textContent = "You lost!";
  else if (roundWinner === "player") roundInformation.textContent = "You won!";

  computerScoreContent.textContent = computerScore;
  playerScoreContent.textContent = playerScore;
}

playRound(playerSelection, computerSelection);
updateScore();
