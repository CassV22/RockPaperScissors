//definition of all relevant variables
const rock = 1;
const paper = 2;
const scissors = 3;
let n = Math.random();
let computerChoice = Math.floor(n*3) + 1 ; 

//to change screen based on win, lose, tie
var screen = document.getElementById("game_screen");
//to change response based on win, lose, tie
var feedback = document.getElementById("response");
//to hide buttons when response screen appears
let buttons = document.querySelectorAll(".choice_btn");


//function for computer response when user chooses rock
var rock_btn = document.getElementById("rock_btn");
rock_btn.addEventListener("click", function(){
    //hides choice buttons when response screen is displayed   
    for (i=0; i<buttons.length; i++){
        buttons[i].style.display = "none";
    }
    
    //comparison to determines who won
    if (computerChoice == 1) {
        screen.src = 'images/tie.png';
        feedback.innerHTML = "It's a tie. Reload the page and try again.";        
    } else if (computerChoice == 2) {
        screen.src = 'images/loser.gif';
        feedback.innerHTML = "You lose. Paper covers rock.";  
    } else {
        screen.src = 'images/winner.gif';
        feedback.innerHTML = "You win! Rock beats scissors.";
    }

});

//function for computer response when user chooses paper
var paper_btn = document.getElementById("paper_btn");
paper_btn.addEventListener("click", function(){
    //hides choice buttons when response screen is displayed   
    for (i=0; i<buttons.length; i++){
        buttons[i].style.display = "none";
    }
    
    //comparison to determines who won
    if (computerChoice == 1) {
        screen.src = 'images/tie.png';
        feedback.innerHTML = "It's a tie. Reload the page and try again.";        
    } else if (computerChoice == 2) {
        screen.src = 'images/loser.gif';
        feedback.innerHTML = "You lose. Paper covers rock.";  
    } else {
        screen.src = 'images/winner.gif';
        feedback.innerHTML = "You win! Rock beats scissors.";
    }

});

//function for computer response when user chooses scissors
var scissors_btn = document.getElementById("scissors_btn");
scissors_btn.addEventListener("click", function(){
    //hides choice buttons when response screen is displayed    
    for (i=0; i<buttons.length; i++){
        buttons[i].style.display = "none";
    }
    
    //comparison to determines who won
    if (computerChoice == 1) {
        screen.src = 'images/tie.png';
        feedback.innerHTML = "It's a tie. Reload the page and try again.";        
    } else if (computerChoice == 2) {
        screen.src = 'images/loser.gif';
        feedback.innerHTML = "You lose. Paper covers rock.";  
    } else {
        screen.src = 'images/winner.gif';
        feedback.innerHTML = "You win! Rock beats scissors.";
    }

});