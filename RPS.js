const normalize = prompt("Choose: Rock, Paper, or Scissors")
const playerSelection = normalize.toLowerCase();
// console.log(normalize);
const computerSelection = getComputerChoice();

function getComputerChoice() {
    // randomly returns Rock, Paper, or Scissors (the random function and can initialize 3 variables to spit out a random number that correlates to a choice
    selection = Math.floor(Math.random() * 3) + 1;
        if (selection === 1) {
            selection = "rock";
        } else if (selection === 2) {
            selection = "paper";
        } else {
            selection = "scissors";
        }
    // console.log(selection);
    return selection;
}

function playRound(playerSelection, computerSelection) {
    let playerWin = "Nice! ";
    let computerWin = "Sorry! ";
    let tieGame = "You both tied! Try again.";

    if (playerSelection === computerSelection) {
        return tieGame;
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return computerWin += "Paper beats rock, you lose.";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return playerWin += "Rock beats scissors, you win.";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return playerWin += "Paper beats rock, you win.";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return computerWin += "Scissors beats paper, you lose.";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return computerWin += "Rock beats scissors, you lose.";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return playerWin += "Scissors beat paper, you win.";
    }
    else {
        return "please enter a valid choice"
    } 
}

// console.log(playRound(playerSelection, computerSelection));

//   function game() {
    // call playRound function within this function
    // function plays 5 games

    // function keeps score
    // function reports the winner or loser at the end
    // use console.log to display results in console 
// }

    // game();