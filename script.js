// get computer choice randomly
function getComputerChoice() {
  //generate a random integer from 1 to 3
  const randInt = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  //convert random integer into rock, paper, or scissors
  let choice = "";
  if (randInt === 1) {
    choice = "rock";
  } else if (randInt === 2) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  return choice;
}

// get human choice
function getHumanChoice() {
  result = prompt("Choose Your Weapon, Rock, Paper, or Scissors");
  return result;
}
