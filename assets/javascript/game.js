$(function() {
  //global variables
  let wins = 0;
  let losses = 0;
  let numberToGuess;
  let playerTotal = 0;

  function reset() {
    //generate number to guess
    numberToGuess = Math.floor(Math.random() * 101 + 19);
    //console.log(numberToGuess);
    //generate new values for crystals
    for (var i = 0; i < crystal.length; i++) {
      crystal[i].attr("crystalValue", Math.floor(Math.random() * 11 + 1));
    }
    //reset player score
    playerTotal = 0;
    //update total score
    $("#totalScore").text(playerTotal);
    //update random number to guess
    $("#randomNumber").text(numberToGuess);
  }

  function winloss() {
    if (playerTotal === numberToGuess) {
      //display win overlay
      document.getElementById("win-overlay").style.display = "block";
      //update wins total
      wins++;
      //update wins display
      $("#wins").text("Wins:" + wins);
      //reset game
      reset();
    } else if (playerTotal > numberToGuess) {
      document.getElementById("lose-overlay").style.display = "block";
      losses++;
      $("#losses").text("Losses:" + losses);
      reset();
    }
  }

  function winOn() {
    document.getElementById("win-overlay").style.display  = "block";
  }

  function winOff() {
    document.getElementById("win-overlay").style.display = "none";
  } 

  function loseOn() {
    document.getElementById("lose-overlay").style.display  = "block";
  }

  function loseOff() {
    document.getElementById("lose-overlay").style.display = "none";
  }



  function gameStart() {
    crystal = document.getElementsByClassName("btn");
    for (var i = 0; i < crystal.length; i++) {
      crystal[i].attr("crystalValue", Math.floor(Math.random() * 11 + 1));
      crystal[i].on("click", event);
    }
  }
});
