
const userName = prompt("what is your name?");
console.log("welcome" + " " + userName + " " + "to zuri guessing game");

let points = 0;
let levels = 1;
let maxStage = 10;
let guessNum = parseInt(prompt("choose a number between 1-" + (levels + 1)));
let comGuess = parseInt(Math.floor((Math.random())));


range = function range() {
  for (let i = 2; i <= 2; i++)
    guessGame = function guessGame() {
      comGuess = (((comGuess * i) + 1))
      if (comGuess === guessNum) {
        console.log("Congratulation Up to Stage 2")
      }
      else if ((guessNum < 1) || (guessNum > i) || (guessNum != Nan)) {
        console.log("invalid input try again")
        return guessNum;
      }
      else {
        console.log("you failed")
        return guessNum;
      }

    }

}
range();
guessGame();





