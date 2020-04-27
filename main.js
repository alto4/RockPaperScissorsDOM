// Author:           Scott Alton
// Filename:         main.js
// Last Modified:    April 25, 2020


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resultsWindow = document.querySelector('.results');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

let playerScoreTotal = 0;;
let computerScoreTotal = 0;

playerScore.textContent = playerScoreTotal;
computerScore.textContent = computerScoreTotal;

rock.addEventListener('click', () => {
    playerSelection = 'rock';;
    playRound(playerSelection, computerPlay());
});

paper.addEventListener('click', () => {
    playerSelection = 'paper';
    playRound(playerSelection, computerPlay());
});

scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    playRound(playerSelection, computerPlay());
});
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
        computerSelection = 'rock';

        // Computer picks paper    
    } else if (randomNumber === 2) {
        computerSelection = 'paper';

        // Computer picks scissors
    } else {
        computerSelection = 'scissors';
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
        winner = 'tie';

        // Check for cases where the player wins
    } else if (((playerSelection === 'rock') && (computerSelection === 'scissors')) || ((playerSelection === 'scissors') && (computerSelection === 'paper')) || ((playerSelection === 'paper') && (computerSelection === 'rock'))) {
        winner = 'player';
        playerScoreTotal++;

        // Check for cases where the computer wins
    } else if (((computerSelection === 'rock') && (playerSelection === 'scissors')) || ((computerSelection === 'scissors') && (playerSelection === 'paper')) || ((computerSelection === 'paper') && (playerSelection === 'rock'))) {
        winner = 'computer';
        computerScoreTotal++;

        // If none of these conditions are met, the user must have entered text that does not correspond to a valid choice (ENTER FUTURE VALIDATION FUNCTION HERE!)
    } else {
        winner = 'invalid';
        resultsWindow.textContent = "Your input was not valid. Please try again with a choice of rock, paper, or scissors - nothing else!";
    }

    // Format player and computer selections for output in results string
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);
    // Output if player wins
    if (winner === 'player') {
        resultsWindow.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;

        // Output if computer wins
    } else if (winner === 'computer') {
        resultsWindow.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;

        // Output if it's a tie game
    } else {
        resultsWindow.textContent = `It's a tie - you both chose ${playerSelection}. Let's redo that round to declare a winner.`;
    }

    // Return winner declaraction
    return winner;
}

// // game Function - uses previous functions to play 5 rounds and then declare a winner based on the results of all 5 rounds
// function game() {

//     // Variable Declarations
//     const numberOfRounds = 5;
//     let playerScore = 0;
//     let computerScore = 0;
//     let playerSelection;

//     let winner;
//     // Welcome user to the game
//     console.log("Welcome to ConsoleRPS. Please select a choice between rock, paper, or scissors to play against the computer. The best score out of 5 rounds wins!");

//     // Initialize a loop to repeat for 5 rounds per game
//     // Prompt user to enter a selection
//     playerSelection = prompt('Rock, Paper, or Scissors?');
//     // Generate a computer selection using the corresponding computerPlay function
//     const computerSelection = computerPlay();

//     // Declare a winner of the round, using the playRound function
//     winner = playRound(playerSelection, computerSelection);

//     // Increment scoreboard based on winner
//     if (winner === 'player') {
//         playerScore++;
//     } else if (winner === 'computer') {
//         computerScore++;
//         // If neither the player of the computer are established as winners due to a tie game, or invalid input provided by the user, decrement/redo that round
//     } else if (winner === 'tie' || winner === 'invalid') {
//         round--;
//     }


//     // After all rounds are completed, display final scores and delcare a winner
//     console.log(`The results are in. You won ${playerScore} rounds and the computer won ${computerScore} rounds.`);

//     // If the player won more rounds, declare them the overall winner
//     if (playerScore > computerScore) {
//         console.log('You are the overall winner of the game! Congratulations!');

//         // Otherwise, if the computer won more rounds, declare the computer as the winner
//     } else if (playerScore < computerScore) {
//         console.log('You lost to the computer. Better luck next time!');

//         // In the event that numberOfRounds is ever modified to an even number and both players win the same number of rounds
//     } else {
//         console.log('Wow, you and the computer both won the same number of rounds. Please play another game to declare a definitive winner.');
//     }

//     // Exit message
//     console.log('Thank you for playing ConsoleRPS - we hope you enjoyed the game.');

// }



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