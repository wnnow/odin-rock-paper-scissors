let humanScore = 0;
let computerScore = 0;
let totalRound = 5;
let round = 0;
function getComputerChoice() {
  // random number 0-2 (total 3) each of number represent rock or paper or scissors
  let randomNum = Math.floor(Math.random() * 3);
  let result;
  switch (randomNum) {
    case 0:
      result = "rock";
      break;
    case 1:
      result = "paper";
      break;
    case 2:
      result = "scissors";
      break;
    default:
      result = null;
  }
  return result;
}

function getHumanChoice() {
  const humanChoicePrompt = prompt("Rock, Paper or Scissors?", "Rock");
  //lower case user prompt string incase of user prompt upper case string such as "ROCK" or "rOCk"
  const humanChoiceLowerCase = humanChoicePrompt.toLowerCase();
  return humanChoiceLowerCase;
}

function playRound() {
  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice();
  console.log("You chose:", humanChoice);
  console.log("Computer chose:", computerChoice);
  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      console.log("Draw");
    }
    if (computerChoice === "paper") {
      console.log("You lose this round!");
      computerScore++;
    }
    if (computerChoice === "scissors") {
      console.log("You win this round!");
      humanScore++;
    }
  }
  if (humanChoice === "paper") {
    if (computerChoice === "paper") {
      console.log("Draw");
    }
    if (computerChoice === "scissors") {
      console.log("You lose this round!");
      computerScore++;
    }
    if (computerChoice === "rock") {
      console.log("You win this round!");
      humanScore++;
    }
  }
  if (humanChoice === "scissors") {
    if (computerChoice === "scissors") {
      console.log("Draw");
    }
    if (computerChoice === "rock") {
      console.log("You lose this round!");
      computerScore++;
    }
    if (computerChoice === "paper") {
      console.log("You win this round!");
      humanScore++;
    }
  }
  console.log(`Round:${round}/${totalRound}`);
  console.log(`Your score: ${humanScore}`);
  console.log(`Computer score: ${computerScore}`);
}
