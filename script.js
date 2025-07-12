// create a function named getComputerChoice
function getComputerChoice() {
  // write the code that getComputerChoice will randomy return one of the following string values: "rock", "paper", or "scissors".
  // use the Math.random method to create 3 numbers between 1 and 3 and then store them in a randomNumber variable.
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  // console.log(randomNumber);
  // use conditional statements to make computer choice and then store the value in a computerChoice variable.
  let computerChoice = "";
  // use randomNumber variable as a condition
  // if randomNumber equal to 1 then write string "rock"
  // if else randomNumber equal to 2 then write string "paper"
  // else write string "scissors"
  if (randomNumber === 1) {
    computerChoice += "rock";
  } else if (randomNumber === 2) {
    computerChoice += "paper";
  } else {
    computerChoice += "scrissors";
  }

  // console.log(computerChoice);
  // use the value of computerChoice as a return
  return computerChoice;
}

// create a function named getHumanChoice
function getHumanChoice() {
  // write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs
  // use the prompt method to get the user's input and store it in humanChoice, make the value case-insensitive with toLowerCase method
  let humanChoice = prompt("choose rock, paper, or scissors").toLowerCase();
  // use the value of humanChoice as a return
  return humanChoice;
}

function playGame() {
  // create two variables named humanScore and computeScore in the global scope to keep track of the players score
  // initialize those variables with the value of 0
  let humanScore = 0;
  let computerScore = 0;
  // create a function named playRound
  // define two parameters for playRound: humanChoice and computerChoice. use these two parameters to take the human and computer choices as arguments
  function playRound(humanChoice, computerChoice) {
    // create a conditional statement to determine the winner between human vs computer
    // if humanChoice equal with computerChoice then the result is a draw
    // if humanChoice is rock and computerChoice is scissors, or humanChoice is paper and computerChoice is rock, or humanChoice is scissors and computerChoice is paper, then the result is human wins, human get one score
    // otherwise, the computer wins, computer get one score
    if (humanChoice == computerChoice) {
      console.log("the game tie");
    } else if (
      (humanChoice == "rock" && computerChoice == "scissors") ||
      (humanChoice == "scissors" && computerChoice == "paper") ||
      (humanChoice == "paper" && computerChoice == "rock")
    ) {
      console.log(`You win Horeeee!!! ${humanChoice} beats ${computerChoice}`);
      humanScore += 1;
    } else {
      console.log(
        `You lose Hooooooo!!! ${computerChoice} beats ${humanChoice}`
      );
      computerScore += 1;
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log(
    `Human score: ${humanScore} and computer score: ${computerScore}`
  );
}

playGame();
