$( document ).ready(function() {
    //console.log( "ready!" );

//global variables
  let wins = 0;
  let losses = 0;
  let numberToGuess;
  let playerTotal = 0;
  let value;

  
function reset (){
    $(".crystal").each(function(){
        numberToGuess = Math.floor(Math.random() * 11 + 1);
        //console.log(value);
        {
            $(this).attr({
                "data-random":numberToGuess
            });
        }
        //reset player score
        playerTotal = 0;

        //update total score
        $("#totalScore").text(playerTotal);

        //update random number to guess
        $("#randomNumber").text(numberToGuess);
    })
    


}
reset()


//game start
function gameStart(){
    $(".crystal").click(function(){
       value = Math.floor(Math.random() * 11 + 1);
       $(this).attr({
           
       })
    })
    console.log(value);
}
gameStart()


function winLoss(){
    if (playerTotal === numberToGuess){

        //dsiplay win overlay
        winOn();
        
        //update wins total
        wins++;

        //update wins display
        $("#wins").text("Wins:" + wins);

        //reset game
        reset();

    } else if (playerTotal > numberToGuess) {

        //display lose overlay
        loseOn();

        //update losses total
        losses++;

        //update losses display
        $("#losses").text("Losses:" + losses);

        //reset game
        reset();
    }

    }
    winLoss()

    function winOn(){
        $("#win-overlay").style.display = "block";
    }

    function winOff(){
        $("#win-overlay").style.display = "none";
    }

    function loseOn(){
        $("#lose-overlay").style.display = "block";
    }

    function loseOff(){
        $("#lose-overlay").style.display = "none";
    }



































//don't lose these!    
});