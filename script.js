function getComputerChoice() {
  let rockPaperScissors = ["rock", "paper", "scissors"];
  let randomResult = rockPaperScissors[Math.floor(Math.random() * 3)];
  return randomResult;
}
