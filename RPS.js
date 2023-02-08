const playerSelection = prompt("Choose: Rock, Paper, or Scissors");
const computerSelection = getComputerChoice();

function getComputerChoice() {
    // randomly returns Rock, Paper, or Scissors (the random function and can initialize 3 variables to spit out a random number that correlates to a choice
    selection = Math.floor(Math.random() * 3) + 1;
        if (selection === 1) {
            selection = "Rock";
        } else if (selection === 2) {
            selection = "Paper";
        } else {
            selection = "Scissors";
        }
    // console.log(selection);
    return selection;
}

function playRound(playerSelection, computerSelection) {

  }
   
  console.log(playRound(playerSelection, computerSelection));

//   function game() {
//     // call playRound function within this function
//     // function plays 5 games
//     for (let i = 0; i < 5; i++) {
//         // your code here!
//      }
//     // function keeps score
//     // function reports the winner or loser at the end
//     // use console.log to display results in console 
//   }
