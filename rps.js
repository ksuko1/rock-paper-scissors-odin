// Create a new function named getComputerChoice.
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
console.log(getComputerChoice())
// // Test that your function returns what you expect using 
// console.log or the browser developer tools before advancing 
// to the next step.
