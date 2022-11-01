const userName = prompt("what is your name?");
console.log("welcome" + " " + userName + " " + "to ZURI guessing game");

var points = 0;
var maxStage = 10;

function range() {
  for (let i = 2; i <= 10; i++) {
    let guessNum = parseInt(prompt(`choose a number between  (1-${i})`))
    let comGuess = Math.floor((Math.random()) * i) + 1
    if (comGuess === guessNum) {
      console.log(`Congratulation Up to Stage ${i}`);
    }
    else if ((guessNum < 1) || (guessNum > i++)) {
      console.log("invalid input try again");
      return range()
    }
    else if (isNaN(guessNum)) {
      console.log("Only numbers are allowed");
      return range()
    }
    else {
      console.log(`you failed the answer is ${comGuess}`)
      console.log(`your score is ${i - 2}`)
      break;
    }
  }

}
range();
