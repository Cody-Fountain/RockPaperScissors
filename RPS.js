let tieGame;
let notValid;
let computerWin;
let playerWin;
let tie;
let pScore = 0;
let cScore = 0;

function compRandom() {
pickRandom = Math.floor(Math.random() * 4) + 1;
    if (pickRandom === 1) {
        return "rock";
    }
    else if (pickRandom === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound() {
    text = prompt("Please select: Rock, Paper, Scissors");
    playerChoice = text.toLowerCase();
    computerChoice = compRandom();

    let playerWin = playerChoice + " beats " + computerChoice + ", Player wins this round!";
    let computerWin = computerChoice + " beats " + playerChoice + ", Computer wins this round!";
    let tieGame = "It's a tie, next round";
    let notValid = "Please enter a valid choice: Rock, Paper, Scissors";
    let results;

    if (playerChoice === computerChoice) {
        results = tieGame;
        return results;
    }
    else if (computerChoice === "paper" && playerChoice === "rock") {
        results = computerWin
        cScore++;
        return results;
    }
    else if (computerChoice === "scissors" && playerChoice === "paper") {
        results = computerWin
        cScore++;
        return results;
    }
    else if (computerChoice === "rock" && playerChoice === "scissors") {
        results = computerWin
        cScore++;
        return results;
    }
    else if (playerChoice === "scissors" && computerChoice === "paper") {
        results = playerWin;
        pScore++;
        return results;
    }
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        results = playerWin;
        pScore++;
        return results;
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        results = playerWin;
        pScore++;
        return results;
    }
    else {
        results = notValid;
        return results;
    } 
}

function playGame() {
    let cWin = 'Sorry! The Computer wins this best of 5';
    let pWin = 'Congrats! You win this best of 5';
    let tWin = "Oh wow! It's tie game in this best of 5";
    let gameOver = "That concludes this series. See you next time!";
    let results = "Player score: " + pScore + " | Computer score: " + cScore;


    for(i=1; i<6; i++) {
        alert("Round: " + i);
        playRound();
    }
    if (pScore === cScore) {
        alert(results);
        alert(tWin);
    }
    else if (pScore < cScore) {
        alert(results);
        alert(cWin);
    }
    else if ( pScore > cScore) {
        alert(results);
        alert(pWin);
    }
    alert(gameOver);
}
playGame();