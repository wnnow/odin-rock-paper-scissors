function getComputerChoice() {
  let rockPaperScissors = ["Rock", "Paper", "Scissors"];
  let randomResult = rockPaperScissors[Math.floor(Math.random() * 3)];
  return randomResult;
}
function getPlayerSelection() {
  let playerSelect = prompt("Rock Paper or Scissors?", "Rock");
  return playerSelect;
}

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
    return declarePlayerWinner;
  } else if (
    playerSelectionLowerCase === "rock" &&
    computerSelectionLowerCase === "paper"
  ) {
    return declareComputerWinner;
  } else if (
    playerSelectionLowerCase === "paper" &&
    computerSelectionLowerCase === "rock"
  ) {
    return declarePlayerWinner;
  } else if (
    playerSelectionLowerCase === "paper" &&
    computerSelectionLowerCase === "scissors"
  ) {
    return declareComputerWinner;
  } else if (
    playerSelectionLowerCase === "scissors" &&
    computerSelectionLowerCase === "rock"
  ) {
    return declareComputerWinner;
  } else if (
    playerSelectionLowerCase === "scissors" &&
    computerSelectionLowerCase === "paper"
  ) {
    return declarePlayerWinner;
  } else {
    return declareDraw;
  }
}

const rpsSelectBtns = document.querySelectorAll("#rpsSelectBtn");
rpsSelectBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    console.log(playRound(e.target.textContent, getComputerChoice()));
  })
);
