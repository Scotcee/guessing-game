
// const userName = prompt("what is your name?");
// console.log("welcome" + " " + userName + " " + "to zuri guessing game");







let points = 0;
let levels = 1;
let maxStage = 10;


// let rangeFunction = function range() {
  

  for (let i = 2; i <= 10;
    i++
  ) {
    let comGuess = Math.floor(Math.random()
      * i) + 1
    let guessNum = parseInt(prompt(`choose a number between 1- 
 ${i} ?`));




    return range;
    };


let range = function (comAnswer, yourAnswer)
{
  let guessNum = yourAnswer;
  let comGuess = comAnswer ;
    if (comGuess === guessNum)
    {
      console.log ("Congratulation! Up to Stage 2")
    }
      
    else if (guessNum < 1 || guessNum > i ) {
      console.log ("invalid input try again")
      return restart
    }
    
    else if (yourAnswer !== comAnswer){
      console.log ("you failed")
      return restart
    }
    else {
      console.log ("the end")
      
    }

  }

let restart = function range (){
  for (let i = 2; i <= 2;
    i++
  ) {
    let comGuess = Math.floor(Math.random()
      * i) + 1
    let guessNum = parseInt(prompt(`choose a number between 1- 
 ${i} ?`));
    // return guessNum;
  
   
    }
}
  // };
// var gameLogic = function () {
//   if (comGuess == guessNum) {

//       console.log("Congratulation! Up to Stage 2");
//       // return askNum();
//     }
//     else if (guessNum == !NaN) {
//       console.log("this is not a number!")
//     }
//     else if (guessNum > comGuess) {
//       console.log("try a smaller number..")
//     }
//     else {
//       console.log("Failed Try Again");
      
// }

// }



