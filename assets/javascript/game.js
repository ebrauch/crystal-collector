$ (document).ready (function() {


//global variables
let numberToGuess;
let playerTotal = 0;
let wins = 0;
let losses = 0;

//generate number to guess
numberToGuess = Math.floor(Math.random() * 101 + 19);
//console.log(numberToGuess);
playerTotal = 0;
//update total score
$("#totalScore").text(playerTotal);
//update random number to guess
$("#randomNumber").text(numberToGuess);



function winloss() {
    if (playerTotal === numberToGuess) {
        
    }
}
})