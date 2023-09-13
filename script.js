function getComputerChoice() {
  let rockPaperScissors = ["Rock", "Paper", "Scissors"];
  let randomResult = rockPaperScissors[Math.floor(Math.random() * 3)];
  return randomResult;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  let playerSelectionLowerCase = playerSelection.toLowerCase();
  let computerSelectionLowerCase = computerSelection.toLowerCase();
  let declarePlayerWinner = `You Win! ${playerSelection} beat ${computerSelection}`;
  let declareComputerWinner = `You Lose! ${computerSelection} beat ${playerSelection}`;
  let declareDraw = `Draw!`;

  if (
    playerSelectionLowerCase === "rock" &&
    computerSelectionLowerCase === "scissors"
  ) {
    playerScore += 1;
    return declarePlayerWinner;
  } else if (
    playerSelectionLowerCase === "rock" &&
    computerSelectionLowerCase === "paper"
  ) {
    computerScore += 1;
    return declareComputerWinner;
  } else if (
    playerSelectionLowerCase === "paper" &&
    computerSelectionLowerCase === "rock"
  ) {
    playerScore += 1;
    return declarePlayerWinner;
  } else if (
    playerSelectionLowerCase === "paper" &&
    computerSelectionLowerCase === "scissors"
  ) {
    computerScore += 1;
    return declareComputerWinner;
  } else if (
    playerSelectionLowerCase === "scissors" &&
    computerSelectionLowerCase === "rock"
  ) {
    computerScore += 1;
    return declareComputerWinner;
  } else if (
    playerSelectionLowerCase === "scissors" &&
    computerSelectionLowerCase === "paper"
  ) {
    playerScore += 1;
    return declarePlayerWinner;
  } else {
    return declareDraw;
  }
}

function updateScore() {
  const playerScoreDom = document.querySelector(".player-score");
  const computerScoreDom = document.querySelector(".computer-score");
  playerScoreDom.textContent = `${playerScore}`;
  computerScoreDom.textContent = `${computerScore}`;
}

const rpsSelectBtns = document.querySelectorAll("#rpsSelectBtn");

const annouceMessage = document.querySelector(".announce-message");

function checkWinner() {
  if (computerScore === 5) {
    annouceMessage.textContent = "Computer win this game!";
  } else if (playerScore === 5) {
    annouceMessage.textContent = "You WIN!";
  } else return;
}

rpsSelectBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    if (playerScore === 5 || computerScore === 5) return;

    annouceMessage.textContent = `${playRound(
      e.target.textContent,
      getComputerChoice()
    )}`;
    updateScore();
    checkWinner();
  })
);
