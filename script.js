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

// store the players score

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const human = humanChoice.toLowerCase();
  const computer = computerChoice;
  if (human === computer) {
    console.log(`It's a tie!`);
    console.log(`${human} ties with ${computer}`);
  } else if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    console.log(`You won!`);
    console.log(`${human} beats ${computer}`);
  } else {
    console.log(`You lose!`);
    console.log(`${computer} beats ${human}`);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
