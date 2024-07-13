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
function getHumanChoice(){
    let choice = prompt("Please enter Rock, Paper or Scissors");
}
