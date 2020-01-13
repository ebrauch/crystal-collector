$( document ).ready(function() {
    //console.log( "ready!" );

    //global variables
    const reset = init;
    let wins = 0;
    let losses = 0;
    let numberToGuess;
    let playerTotal;

    init();

    function generateNumberToGuess() {
        return Math.floor(Math.random() * 101 + 19);
    }

    function generateCrystalValue() {
        return Math.floor(Math.random() * 11 + 1);
    }

    
    function init() {
        // initialize playerTotal and numberToGuess
        playerTotal = 0;
        numberToGuess = generateNumberToGuess();
        
        // update DOM
        $("#totalScore").text(playerTotal);
        $("#randomNumber").text(numberToGuess);

        $(".crystal").each((_index, crystal) => {
            // declare crystal's value outside click handler, so it's the same value each time
            const value = generateCrystalValue();
        
            // remove any existing click handlers
            $(crystal).off("click");

            // add new click handler
            $(crystal).on("click", (event) => {
                event.preventDefault(); // this prevents the browser from "jumping" to the top of the page when a `crystal` is clicked
                updateScore(value);
            });
        });
    }

    function updateScore(crystalValue) {
        playerTotal += crystalValue;

        if (playerTotal === numberToGuess) {
            handleWin();
        } else if (playerTotal > numberToGuess) {
            handleLoss();
        }

        $("#totalScore").text(playerTotal);
    }

    function handleWin() {
        wins++;
        $("#wins").text(`Wins: ${wins}`);
        reset();
    }

    function handleLoss() {
        losses++;
        $("#losses").text(`Losses: ${losses}`);
        reset();
    }
});