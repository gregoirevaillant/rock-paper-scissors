// Add a looping icon to the tab
//Get the element and count
let tabImage = document.querySelector("link[rel='icon']");
let imageCount = 0;

// The function to change the image
function changeImage() {
  imageCount++;
  if (imageCount === 3) imageCount = 0;
  tabImage.setAttribute("href", `./images/${imageCount}.ico`);
}

// Create the interval to change the image
setInterval(() => {
  changeImage();
}, 1000);

let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

let roundInformation = document.querySelector("#roundInfo");

let computerScoreContent = document.querySelector("#scoreComputer");
let playerScoreContent = document.querySelector("#scorePlayer");

// Check for an event on every buttons to launch the round
let buttons = document.querySelectorAll(".buttonPlayer");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let playerSelection = button.id;
    let computerSelection = getComputerChoice();
    if (!isGameOver(playerScore, computerScore))
      playGame(playerSelection, computerSelection);
  });
});

// Generate the computer choice for the playround function
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

// Check the winner of the round, add to score
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    roundWinner = "tie";
  } else if (
    (playerSelection == "ROCK" && computerSelection == "PAPER") ||
    (playerSelection == "PAPER" && computerSelection == "SCISSORS") ||
    (playerSelection == "SCISSORS" && computerSelection == "ROCK")
  ) {
    roundWinner = "computer";
    computerScore++;
  } else if (
    (playerSelection == "SCISSORS" && computerSelection == "PAPER") ||
    (playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
    (playerSelection == "PAPER" && computerSelection == "ROCK")
  ) {
    roundWinner = "player";
    playerScore++;
  }
}

// Update the score of the visually and for the isGameOver function
function updateScore() {
  if (roundWinner === "tie") roundInformation.textContent = "Its a tie!";
  else if (roundWinner === "computer")
    roundInformation.textContent = "You lost!";
  else if (roundWinner === "player") roundInformation.textContent = "You won!";
  computerScoreContent.textContent = computerScore;
  playerScoreContent.textContent = playerScore;
}

// Display the final result when the game is over
function finalResult() {
  if (playerScore === 5) {
    roundInformation.textContent = `You won the game with a score of ${playerScore}!`;
  } else {
    roundInformation.textContent = `You lost the game with a score of ${playerScore}!`;
  }
}

// Play the game when a button is clicked
function playGame(playerSelection, computerSelection) {
  playRound(playerSelection, computerSelection);
  updateScore();
  if (isGameOver(playerScore, computerScore)) finalResult();
}

// Check if computer or player get a score of 5
function isGameOver(playerScore, computerScore) {
  if (playerScore === 5 || computerScore === 5) return true;
  else return false;
}

// Create a button to reset the game after the winner is announced
let resetButton = document.querySelector("#RESET");

// Listen for a click on the reset button and call restGame function
resetButton.addEventListener("click", () => {
  resetGame();
});

// Put all counter to 0 and text to neutral
function resetGame() {
  computerScore = 0;
  playerScore = 0;
  computerScoreContent.textContent = computerScore;
  playerScoreContent.textContent = playerScore;
  roundInformation.textContent = "";
  roundWinner = "";
}
