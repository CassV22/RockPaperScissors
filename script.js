//definition of all relevant variables
const rock = 1;
const paper = 2;
const scissors = 3;

let computerChoice;
let changeFeedback = document.getElementById("feedback_text");

let round = 1;
let roundNum = document.getElementById("roundNum");

let computerScore = 0;
let changeComputerScore = document.getElementById("computer_score");

let playerScore = 0;
let changePlayerScore = document.getElementById("player_score");


let buttons = document.querySelectorAll("button");


//event listener added to each button; on click the id of the button is captured and the appropriate function is called
buttons.forEach(button => button.addEventListener("click", function(){   
    //gets the id of the button that was clicked
    let playerChoice = this.getAttribute('id');
     
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
    
    //changes round number
    round +=1;
    roundNum.innerHTML = round.toString();
       
    //stop function at this point
    if (playerScore == 5 || computerScore == 5) {

        buttons.forEach(button => button.disabled = true);
        
        if (playerScore > computerScore) {
          changeFeedback.innerHTML = "Congratulations winner!";
        } else{
          changeFeedback.innerHTML = "You lost. Better luck next time.";
        }
    } 
    
 }));

//function that represents the computer's move
function computerPlay() {
    let n = Math.random();
    computerChoice = Math.floor(n*3) + 1 ; 
    console.log(computerChoice);
    return computerChoice;
}


//function when player chooses rock button; point is added and feedback text is changed accordingly
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

//function when player chooses paper button; point is added and feedback text is changed accordingly
function playPaper(computerChoice) {
    if (computerChoice == 1) {
        changeFeedback.innerHTML = "You win! Paper covers rock.";
        playerScore += 1;
        changePlayerScore.innerHTML = playerScore.toString();
    } else if (computerChoice == 2) {
        changeFeedback.innerHTML =  "It's a tie. No points awarded.";            
    } else if (computerChoice == 3) {
        changeFeedback.innerHTML = "You lose. Scissors cuts paper.";
        computerScore += 1;
        changeComputerScore.innerHTML = computerScore.toString();
    }
}

//function when player chooses scissors button; point is added and feedback text is changed accordingly
function playScissor(computerChoice) {
    if (computerChoice == 1) {
        changeFeedback.innerHTML = "You lose. Rock beats scissors." ;  
        computerScore += 1;   
        changeComputerScore.innerHTML = computerScore.toString();   
    } else if (computerChoice == 2) {
        changeFeedback.innerHTML = "You win! Scissors cuts paper.";  
        playerScore += 1;      
        changePlayerScore.innerHTML = playerScore.toString();  
    } else if (computerChoice == 3) {
        changeFeedback.innerHTML = "It's a tie. No points awarded.";
    }
}


