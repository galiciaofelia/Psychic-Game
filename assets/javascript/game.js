




var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x","y","z"];


// Variables for wins, losses
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

//computer chooses a random letter:
var computerChoice = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];

   // When the user presses a key, it will run the following function...
document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === computerChoice){
        wins++;
        alert("You won!");
        //Need to reset guessesLeft to 9
        guessesLeft =  9;
        //Reset to fresh start guessesSoFar
        guessesSoFar = [];

    }

    else{
        if(guessesSoFar.indexOf(userGuess) === -1) {
            guessesSoFar.push(userGuess);
            guessesLeft--;       
        }
    }

    if(guessesLeft === 0){
        losses++;
        alert("You lost!");
        //I need to reset guessesLeft to 9
        guessesLeft = 9;
        //Reset to fresh start guessesSoFar
        guessesSoFar = [];

    }

    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "losses: " + losses;
    document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
    document.getElementById("guessesSoFar").innerHTML = "Guesses so far: " + guessesSoFar;

}
