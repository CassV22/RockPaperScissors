//definition of all relevant variables
const rock = 1;
const paper = 2;
const scissors = 3;
let n = Math.random();
let computerChoice = Math.floor(n*3) + 1 ; 
let changeFeedback = document.getElementById("feedback_text");
let roundNum = document.getElementById("roundNum");
let computerScore = document.getElementById("computer_score");
let playerScore = document.getElementById("player_score");
let buttons = document.querySelectorAll("button");

let count = 1;
buttons.forEach(button => button.addEventListener("click", function(){
    let playerChoice = this.getAttribute('id');
    
    if (playerChoice == "rock_btn") {
        playRock();
        console.log("Rock function called.");
    } else if (playerChoice == "paper_btn") {
        playPaper();
        console.log("Paper function called.");
    } else if (playerChoice == "scissors_btn") {
        playScissor();
        console.log("Scissors function called.");
    }
    
    console.log(computerChoice);
 }));




//add point according to who won
function playRock(computerChoice) {
    if (computerChoice == 1) {
        changeFeedback.innerHTML = "It's a tie. No points awarded.";        
    } else if (computerChoice == 2) {
        computerScore += 1;
        changeFeedback.innerHTML = "You lose. Paper covers rock.";  
    } else {
        changeFeedback.innerHTML = "You win! Rock beats scissors.";
    }
}

function playPaper(computerChoice) {
    if (computerChoice == 1) {
        changeFeedback.innerHTML = "You win! Paper covers rock.";
    } else if (computerChoice == 2) {
        changeFeedback.innerHTML =  "It's a tie. No points awarded.";            
    } else {
        changeFeedback.innerHTML = "You lose. Scissors cuts paper.";
    }
}

function playScissor(computerChoice) {
    if (computerChoice == 1) {
        changeFeedback.innerHTML = "You lose. Rock beats scissors." ;        
    } else if (computerChoice == 2) {
        changeFeedback.innerHTML = "You win! Scissors cuts paper.";  
        computerScore += 1;
    } else {
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