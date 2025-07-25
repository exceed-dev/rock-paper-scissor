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
    humanScore += 1;
  } else {
    console.log(`You lose!`);
    console.log(`${computer} beats ${human}`);
    computerScore += 1;
  }
  console.log(`Player score: ${humanScore}; Computer score: ${computerScore} `);
}

// calling the playRound until one of the player reach 5 score and declares a winner

function playGame() {
  let counter = true;
  while (counter) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    if (humanScore === 5 || computerScore === 5) {
      counter = false;
    }
  }

  console.log("Final Score");
  console.log(`Human score: ${humanScore}`);
  console.log(`Computer score: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("You won the game");
  } else if (humanScore < computerScore) {
    console.log("You lose the game");
  } else {
    console.log("It's a tie");
  }
}

playGame();
