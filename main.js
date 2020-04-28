// Author:           Scott Alton
// Filename:         main.js
// Last Modified:    April 25, 2020

// DOM Elements
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const resultsWindow = document.querySelector(".results");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");

let playerScoreTotal = 0;
let computerScoreTotal = 0;
let roundWinner;
let gameWinner;
const pointsToWinGame = 5;
let playerSelection = "";
let computerSelection = "";

function playGame() {
  while (playerScoreTotal < pointsToWinGame) {
    playerScore.textContent = playerScoreTotal;
    computerScore.textContent = computerScoreTotal;

    rock.addEventListener("click", () => {
      playerSelection = "rock";
      roundWinner = playRound(playerSelection, computerPlay());
    });

    paper.addEventListener("click", () => {
      playerSelection = "paper";
      roundWinner = playRound(playerSelection, computerPlay());
    });

    scissors.addEventListener("click", () => {
      playerSelection = "scissors";
      roundWinner = playRound(playerSelection, computerPlay());
    });

    // Declare a winner of the round, using the playRound function

    // Increment scoreboard based on winner
    if (roundWinner == "player") {
      playerScoreTotal++;
    }

    if (roundWinner == "computer") {
      computerScoreTotal++;
      // If neither the player of the computer are established as winners due to a tie game, or invalid input provided by the user, decrement/redo that round
    }
    console.log(winner);
  }
}
// randomNumber Function - provide a random integer up to the assigned limit
function random(limit) {
  let randomNumber = Math.floor(Math.random() * limit) + 1;

  // Return the random number as an integer
  return randomNumber;
}

// computerPlay Function - generate a random computer selection using the randomNumber function
function computerPlay() {
  // Variable Declarations
  let computerSelection;
  let randomNumber = random(3);

  // Conditional statements to assign random number to one 3 choices
  // Computer picks rock
  if (randomNumber === 1) {
    computerSelection = "rock";

    // Computer picks paper
  } else if (randomNumber === 2) {
    computerSelection = "paper";

    // Computer picks scissors
  } else {
    computerSelection = "scissors";
  }

  // Return computer's random selection to then be compared again user's selection
  return computerSelection;
}

// playRound Function - prompt the user to pick between rock, paper, or scissors, then call the computerPlay function and compare the results to declare a winner
function playRound(playerSelection, computerSelection) {
  // Variable Declarations
  let winner;
  let result;

  // Convert both selections to lowercase for logical comparison
  playerSelection = playerSelection.toLowerCase();
  // computerSelection = computerSelection.toLowerCase();

  // Check for a tie/draw game
  if (playerSelection === computerSelection) {
    winner = "tie";

    // Check for cases where the player wins
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    winner = "player";

    // Check for cases where the computer wins
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    winner = "computer";

    // If none of these conditions are met, the user must have entered text that does not correspond to a valid choice (ENTER FUTURE VALIDATION FUNCTION HERE!)
  } else {
    winner = "invalid";
    resultsWindow.textContent =
      "Your input was not valid. Please try again with a choice of rock, paper, or scissors - nothing else!";
  }

  // Format player and computer selections for output in results string
  playerSelection = capitalize(playerSelection);
  computerSelection = capitalize(computerSelection);
  // Output if player wins
  if (winner === "player") {
    resultsWindow.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
    playerScoreTotal++;
    playerScore.textContent = playerScoreTotal;
    // Output if computer wins
  } else if (winner === "computer") {
    resultsWindow.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
    computerScoreTotal++;
    computerScore.textContent = computerScoreTotal;
    // Output if it's a tie game
  } else {
    resultsWindow.textContent = `It's a tie - you both chose ${playerSelection}.`;
  }

  // Return winner declaraction
  return winner;
}

// capitalize Function - used to format a given word to propercase
function capitalize(word) {
  // Variable declarations
  let firstLetter;
  let restOfWord;
  let properCaseWord;

  // Convert all letters to lowercase
  word = word.toLowerCase();
  // Slice all but first character, which are now lowercase
  restOfWord = word.slice(1, word.length);
  // Take the first character of the word and convert it to uppercase
  firstLetter = word.charAt(0);
  firstLetter = firstLetter.toUpperCase();
  // Put first letter back together with the remaining characters of the word
  properCaseWord = firstLetter + restOfWord;

  // Return the word now in propercase string format
  return properCaseWord;
}

playGame();
