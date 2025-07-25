// get reference from html file
const btns = document.querySelectorAll(".btn");
const playerScores = document.querySelector("#player");
const computerScores = document.querySelector("#computer");
const playerScoreContainer = document.querySelector(".player__container");
const computerScoreContainer = document.querySelector(".computer__container");
const result = document.querySelector(".result");
const resultContainer = document.querySelector(".result__container");
const reset = document.querySelector(".btn__restart");

reset.addEventListener("click", () => {
  location.reload();
});

btns.forEach((btn) => btn.addEventListener("click", startGame));

function startGame(e) {
  const humanSelection = getHumanChoice(e.target.name);
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}

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
function getHumanChoice(choice) {
  return choice;
}

// store the players score
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const human = humanChoice.toLowerCase();
  const computer = computerChoice;
  if (human === computer) {
    // display result
    result.textContent = `It's a tie! ${human} ties with ${computer}`;
  } else if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    humanScore += 1;
    // display player score
    playerScores.textContent = humanScore.toString();
    playerScoreContainer.appendChild(playerScores);
    // display result
    result.textContent = `You win! ${human} beats ${computer}`;
  } else {
    computerScore += 1;
    // display computer score
    computerScores.textContent = computerScore.toString();
    computerScoreContainer.appendChild(computerScores);
    // display result
    result.textContent = `You lose! ${computer} beats ${human}`;
  }
  resultContainer.appendChild(result);
  playGame();
}

// function to stop after one of each player reach 5 points score
function playGame() {
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore === computerScore) {
      result.textContent = `It's a tie!`;
    } else {
      const winner = `${humanScore > computerScore ? "Player" : "Computer"}`;
      result.textContent = `${winner} win the game!`;
      resultContainer.appendChild(result);
    }
    btns.forEach((btn) => btn.removeEventListener("click", startGame));
    reset.classList.remove("hide");
    reset.classList.add("show");
  }
}

// calling the playRound until one of the player reach 5 score and declares a winner

// function playGame() {
//   let counter = true;
//   while (counter) {
//     playRound(humanSelection, computerSelection);

//     if (humanScore === 5 || computerScore === 5) {
//       counter = false;
//     }
//   }

//   console.log("Final Score");
//   console.log(`Human score: ${humanScore}`);
//   console.log(`Computer score: ${computerScore}`);

//   if (humanScore > computerScore) {
//     console.log("You won the game");
//   } else if (humanScore < computerScore) {
//     console.log("You lose the game");
//   } else {
//     console.log("It's a tie");
//   }
// }

// playGame();
