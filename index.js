const userName = prompt("what is your name?");
console.log("welcome" + " " + userName + " " + "to zuri guessing game");
restart = function restart() {
  var points = 0;
  var levels = 1;
  var maxStage = 10;
  var guessNum = parseInt(prompt(`choose a number between (1-${levels + 1})`));
  var comGuess = parseInt(Math.floor((Math.random())));


  range = function range() {
    for (let i = 2; i <= 10; i++)
      guessGame = function guessGame() {
        comGuess = (((comGuess * i) + 1))
        if (comGuess === guessNum) {
          console.log("Congratulation Up to Stage 2")
          return restart();
        }
        else if ((guessNum < 1) || (guessNum > i)) {
          console.log("invalid input try again")
          return restart();
        }
        else if (isNaN(guessNum)) {
          console.log("Only numbers are allowed")
          return restart();
        }

        else {
          console.log("you failed")
          return guessNum;
        }
      }

  }

}
restart()
range();
guessGame();
