$(function() {
  //global variables
  let wins = 0;
  let losses = 0;
  let numberToGuess;
  let playerTotal = 0;

  function reset() {
    //generate number to guess
    numberToGuess = Math.floor(Math.random() * 101 + 19);
    console.log(numberToGuess);
  }
})