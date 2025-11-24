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

function getPlayerChoice() {
  const playerChoicePrompt = prompt("Rock, Paper or Scissors?", "Rock");
  //lower case user prompt string incase of user prompt upper case string such as "ROCK" or "rOCk"
  const playerChoiceLowerCase = playerChoicePrompt.toLowerCase();
  return playerChoiceLowerCase;
}
