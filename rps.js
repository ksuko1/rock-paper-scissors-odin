let humanScore = 0;
let computerScore = 0;

// Function to get computers choice
function getComputerChoice() {
    let randomNumber = Math.random();
        if (randomNumber <= 0.33){
        return "rock";
        } else if (randomNumber <= 0.66){
        return "paper";
        } else {
        return "scissors";
        }
}
// Function to get human choice with prompt
function getHumanChoice(){
    let choice = prompt("Please enter Rock, Paper or Scissors").toLowerCase();
    while (choice !== "rock" && choice !=="paper" && choice !=="scissors"){
        choice = prompt("bro, enter it correctly idiot").toLowerCase();
}
return choice;
}
// Function Play a single round
function playGame(){
function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log("You play:", humanChoice);
    console.log("Computer plays:", computerChoice);

    if(humanChoice === computerChoice){
        console.log("It's a draw, you both picked",humanChoice)
    } else if((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper")){
        console.log("You win!",humanChoice,"beats",computerChoice)
        humanScore++;
        console.log("You",humanScore);
        console.log("Opponent",computerScore)
    } else {
        console.log("You lose :(",humanChoice,"loses to",computerChoice);
        computerScore++;
        console.log("You",humanScore);
        console.log("Opponent",computerScore)
    }
}
    while(humanScore<5 && computerScore<5){
        playRound()
} if(humanScore==5){
    console.log("You win!!!");
} else if(computerScore){
    console.log("You lose :(");
}
}
playGame()
