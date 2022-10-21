
// const userName = prompt("what is your name?");
// console.log("welcome" + " " + userName + " " + "to zuri guessing game");


console.log(askNum());


function askNum() {


  return range();
}

let points = 0;
let levels = 1;
let maxStage = 10;


function range() {
  for (let i = 2; i <= 2;
    i++
  ) {
    let comGuess = Math.floor(Math.random()
      * i) + 1
    let guessNum = parseInt(prompt(`choose a number between 1- ${i} ?`));
    if (comGuess == guessNum) {

      console.log("Congratulation! Up to Stage 2");
      break;
      // return askNum();
    }
    else if (guessNum == !NaN) {
      console.log("this is not a number!")
    }
    else if (guessNum > comGuess) {
      console.log("try a smaller number..")
    }
    else {
      console.log("Failed Try Again");

    }
  };
}




