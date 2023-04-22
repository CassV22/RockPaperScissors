//definition of all relevant variables
const rock = 1;
const paper = 2;
const scissors = 3;
// let n = Math.random();
// let computerChoice = Math.floor(n*3) + 1 ; 
let computerChoice;
let changeFeedback = document.getElementById("feedback_text");
let roundNum = document.getElementById("roundNum");

let computerScore = 0;
let changeComputerScore = document.getElementById("computer_score");

let playerScore = 0;
let changePlayerScore = document.getElementById("player_score");


let buttons = document.querySelectorAll("button");

let count = 1;

buttons.forEach(button => button.addEventListener("click", function(){
    //gets the id of the button that was clicked
    let playerChoice = this.getAttribute('id');
    // debugger 
    computerPlay();
    if (playerChoice == "rock_btn") {
        playRock(computerChoice);
        console.log("Rock function called.");
    } else if (playerChoice == "paper_btn") {
        playPaper(computerChoice);
        console.log("Paper function called.");
    } else if (playerChoice == "scissors_btn") {
        playScissor(computerChoice);
        console.log("Scissors function called.");
    }
    
   
    console.log(computerScore);
    console.log(playerScore);
    //while playerScore and computerScore are less than 6, add to count and change roundNum.innerHTML to count
    //stop function at this point
    
 }));

function computerPlay() {
    let n = Math.random();
    computerChoice = Math.floor(n*3) + 1 ; 
    console.log(computerChoice);
    return computerChoice;
}


//add point according to who won
function playRock(computerChoice) {
    if (computerChoice == 1) {
        changeFeedback.innerHTML = "It's a tie. No points awarded.";        
    } else if (computerChoice == 2) {        
        changeFeedback.innerHTML = "You lose. Paper covers rock.";  
        computerScore += 1;
        changeComputerScore.innerHTML = computerScore.toString();
    } else if (computerChoice == 3) {
        changeFeedback.innerHTML = "You win! Rock beats scissors.";
        playerScore += 1;
        changePlayerScore.innerHTML = playerScore.toString();
    }
}

function playPaper(computerChoice) {
    if (computerChoice == 1) {
        changeFeedback.innerHTML = "You win! Paper covers rock.";
        return playerScore += 1;
    } else if (computerChoice == 2) {
        changeFeedback.innerHTML =  "It's a tie. No points awarded.";            
    } else if (computerChoice == 3) {
        changeFeedback.innerHTML = "You lose. Scissors cuts paper.";
        return computerScore += 1;
    }
}

function playScissor(computerChoice) {
    if (computerChoice == 1) {
        changeFeedback.innerHTML = "You lose. Rock beats scissors." ;  
        return computerScore += 1;      
    } else if (computerChoice == 2) {
        changeFeedback.innerHTML = "You win! Scissors cuts paper.";  
        return playerScore += 1;        
    } else if (computerChoice == 3) {
        changeFeedback.innerHTML = "It's a tie. No points awarded.";
    }
}



// //function for computer response when user chooses rock
// var rock_btn = document.getElementById("rock_btn");
// rock_btn.addEventListener("click", function(){
        
//     //comparison to determines who won
//     if (computerChoice == 1) {
//         changeFeedback.innerHTML = "It's a tie. No points awarded.";        
//     } else if (computerChoice == 2) {
//         changeFeedback.innerHTML = "You lose. Paper covers rock.";  
//     } else {
//         changeFeedback.innerHTML = "You win! Rock beats scissors.";
//     }

// });

// //function for computer response when user chooses paper
// var paper_btn = document.getElementById("paper_btn");
// paper_btn.addEventListener("click", function(){
        
//     //comparison to determines who won
//     if (computerChoice == 1) {
//         changeFeedback.innerHTML = "It's a tie. No points awarded.";        
//     } else if (computerChoice == 2) {
//         changeFeedback.innerHTML = "You lose. Paper covers rock.";  
//     } else {
//         changeFeedback.innerHTML = "You win! Rock beats scissors.";
//     }

// });

// //function for computer response when user chooses scissors
// var scissors_btn = document.getElementById("scissors_btn");
// scissors_btn.addEventListener("click", function(){
        
//     //comparison to determines who won
//     if (computerChoice == 1) {
//         changeFeedback.innerHTML = "It's a tie. No points awarded.";        
//     } else if (computerChoice == 2) {
//         changeFeedback.innerHTML = "You lose. Paper covers rock.";  
//     } else {
//         changeFeedback.innerHTML = "You win! Rock beats scissors.";
//     }

// });