let tabImage = document.querySelector("link[rel='icon']");
let imageCount = 0;

function changeImage() {
  imageCount++;
  if (imageCount === 3) imageCount = 0;
  tabImage.setAttribute("href", `./images/${imageCount}.ico`);
}

setInterval(() => {
  changeImage();
}, 1000);

let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

let buttons = document.querySelectorAll(".buttonPlayer");
let resetButton = document.querySelector("#RESET");

let roundInformation = document.querySelector("#roundInfo");

let computerScoreContent = document.querySelector("#scoreComputer");
let playerScoreContent = document.querySelector("#scorePlayer");

let playerSelection;
let computerSelection;

resetButton.addEventListener("click", () => {
  resetGame();
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerSelection = button.id;
    computerSelection = getComputerChoice();
    if (!isGameOver(playerScore, computerScore))
      playGame(playerSelection, computerSelection);
  });
});

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

function updateScore() {
  if (roundWinner === "tie") roundInformation.textContent = "Its a tie!";
  else if (roundWinner === "computer")
    roundInformation.textContent = "You lost!";
  else if (roundWinner === "player") roundInformation.textContent = "You won!";
  computerScoreContent.textContent = computerScore;
  playerScoreContent.textContent = playerScore;
}

function finalResult() {
  if (playerScore === 5) {
    roundInformation.textContent = `You won the game with a score of ${playerScore}!`;
  } else {
    roundInformation.textContent = `You lost the game with a score of ${playerScore}!`;
  }
}

function playGame(playerSelection, computerSelection) {
  playRound(playerSelection, computerSelection);
  updateScore();
  if (isGameOver(playerScore, computerScore)) finalResult();
}

function isGameOver(playerScore, computerScore) {
  if (playerScore === 5 || computerScore === 5) return true;
  else return false;
}

function resetGame() {
  computerScore = 0;
  playerScore = 0;
  computerScoreContent.textContent = computerScore;
  playerScoreContent.textContent = playerScore;
  roundInformation.textContent = "";
  roundWinner = "";
}
