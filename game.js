console.log("Rock, paper and scissors");

let humanScore = 0;
let computerScore = 0;

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
    
}

console.log(getComputerChoice());
console.log(getHumanChoice());