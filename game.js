console.log("Rock, paper and scissors");

let humanScore = 0;
let computerScore = 0;

playGame();

function getComputerChoice() {
    let randomNumber = Math.random();
    let choice = "Scissors";
    if(randomNumber <= 0.33) {
        choice = "Rock";
    }
    else if(randomNumber <= 0.66) {
        choice = "Paper";
    }

    return choice;
}

function getHumanChoice() {
    return prompt("Enter your choice");
}

function playRound(computerChoice, humanChoice) {
    if(computerChoice == 'Rock') {
        if(humanChoice == "Scissors") {
            printLose(computerChoice, humanChoice);
        }
        else if(humanChoice == 'Paper') {
            printWin(computerChoice, humanChoice);
        }
        else {
            printDraw();
        }
    }
    else if(computerChoice == 'Scissors') {
        if(humanChoice == 'Paper') {
            printLose(computerChoice, humanChoice);
        }
        else if(humanChoice == 'Rock'){
            printWin(computerChoice, humanChoice);
        }
        else {
            printDraw();
        }
    }
    else {
        if(humanChoice == 'Rock') {
            printLose(computerChoice, humanChoice);
        }
        else if(humanChoice == 'Scissors') {
            printWin(computerChoice, humanChoice);
        }
        else {
            printDraw();
        }
    }
}


function printWin(computerChoice, humanChoice) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    ++humanScore;
}

function printLose(computerChoice, humanChoice) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    ++computerScore;
}

function printDraw() {
    console.log("It's a draw");
}


function playGame() {



    for (round = 1; round <= 5; round++) {

        console.log(`Round ${round}`);

        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        console.log(computerChoice);
        console.log(humanChoice);

        playRound(computerChoice, humanChoice);
    }

    if(humanScore > computerScore) {
        console.log("Congratulations! You won the match");
    }

    else if(humanScore < computerScore) {
        console.log("Better luck next time");
    }

    else {
        console.log("It's a draw");
    }

}