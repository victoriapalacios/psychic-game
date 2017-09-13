// I need the computer to make a choice
// I need the user to make a choice
// If user choice is wrong, add it to letters guessed
// If user choice is wrong, deduct one from guesses left
// If usser looses, add one to losses
// If user wins or looses, restart game
// If user chose is right, add to wins

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 10;
var allGuesses=[];
var i=0;

// Below is how computer chooses random letter
var computerGuess = letters [Math.floor(Math.random()*letters.length)];
console.log(computerGuess);

// Below function records the key user is pressing
document.onkeyup = function() {
  var userGuess = String.fromCharCode(event.keyCode).
    toLowerCase();
    console.log(userGuess);

  // Below code addes letters to "letters guessed" string - not sure why tho
  var key = event.key;
    allGuesses[i]=key;
    i++;

  // Below code is what happens when user guesses correct or not
  if (key=="a"||key=="b"||key=="c"||key=="d"||key=="e"||key=="f"||key=="g"||key=="h"||key=="i"||key=="j"||key=="k"||key=="l"||key=="m"||key=="n"||key=="o"||key=="p"||key=="q"||key=="r"||key=="s"||key=="t"||key=="u"||key=="v"||key=="w"||key=="x"||key=="y"||key=="z"){
    // When user guesses incorrectly, it subtracts one from guesses.
    if (key!=computerGuess) {
      guesses--;
    }
    // When user guesses correctly, one is added to wins.
    else {
      wins++;
      restartGame();
    }

    // When user guesses reaches zero, one is added to losses.
    if (guesses === 0) {
      losses++;
      restartGame();
    }
  }

  // Below function is what happens when the game restarts. Guesses is set to 10 and a new random letter is choosen by computer. This function is outside the big function above because we reuse it in maore than once in the if / else statement.
  function restartGame(){
      guesses = 10;

      computerGuess = letters[Math.floor(Math.random()*letters.length)];
          //reset Guesses
          allGuesses=[];
          i=0;
          console.log(computerGuess);
    }

  // Below code renders dynamic html.
  var html = "<h1>The Psychic Game</h1>" +
  "<h2>Press any key to guess a letter</h2>" +
  "<h4>Wins<br>" + wins + "</h4>" +
  "<h4>Losses<br>" + losses + "</h4>" +
  "<p>Guesses Left<br>" + guesses + "</p>" +
  "<p>Letters Guessed<br>" + allGuesses + "</p>"

    document.querySelector('#game').innerHTML = html;
}
