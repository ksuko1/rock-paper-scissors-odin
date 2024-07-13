// returns rock paper or scissors depending on Math.random
function getComputerChoice() {
    let randomNumber = Math.random()
        if (randomNumber <= 0.33){
        return "rock";
        } else if (randomNumber <= 0.66){
        return "paper";
        } else {
        return "scissors";
        }
}
// prompts player to correctly enter rock paper or scissors
function getHumanChoice(){
    let choice = prompt("Please enter Rock, Paper or Scissors").toLowerCase();
    while (choice !== "rock" && choice !=="paper" && choice !=="scissors"){
        choice = prompt("bro, enter it correctly idiot").toLowerCase();
}
    return choice;
}
console.log(getHumanChoice());
