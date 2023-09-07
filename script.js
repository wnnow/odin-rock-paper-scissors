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
  if (playerSelection === null) return "You have to choose something.";

  let playerSelectionLowerCase = playerSelection.toLowerCase();
  let computerSelectionLowerCase = computerSelection.toLowerCase();

  if (
    playerSelectionLowerCase !== "rock" &&
    playerSelectionLowerCase !== "paper" &&
    playerSelectionLowerCase !== "scissors"
  ) {
    return "Maybe you spell it wrong.";
  }

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

function game() {
  console.log(playRound(getPlayerSelection(), getComputerChoice()));
  console.log(playRound(getPlayerSelection(), getComputerChoice()));
  console.log(playRound(getPlayerSelection(), getComputerChoice()));
  console.log(playRound(getPlayerSelection(), getComputerChoice()));
  console.log(playRound(getPlayerSelection(), getComputerChoice()));
}
