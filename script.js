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

getComputerChoice();

// create a function named getHumanChoice
function getHumanChoice() {
  // write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs
  // use the prompt method to get the user's input and store it in humanChoice, make the value case-insensitive with toLowerCase method
  let humanChoice = prompt("choose rock, paper, or scissors").toLowerCase();
  // use the value of humanChoice as a return
  return humanChoice;
}

console.log(getHumanChoice());
