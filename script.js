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


//add an event listener to each button; call comparison function on click and change screen accrodingly

var rock_btn = document.getElementById("rock_btn");
rock_btn.addEventListener("click", function(){
    //if statements here and screen changes
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