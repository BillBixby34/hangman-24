//List pals in array
const listOfPals = ["lamball", "anubis", "verdash", "cremis", "direhowl" ,"mau"]
//hiddenPalImage will be the image
let hiddenPalImage;

let userGuess;
//randomWord will be the word chosen from listOfPals
let randomWord = [];
//randomLetter will be the randomWord seperated into an array by letter
let randomLetter;
//blankArray will have dashes until letters revealed
let blankArray =[];
let guesses = 7;
let wins = 0;
let losses = 0;
//game start function
function gameStart(){
  //will choose word from listOfPals
  let hiddenPal = listOfPals[Math.floor(Math.random() * listOfPals.length)]
  console.log("the pal is a " + hiddenPal);//works

  randomWord = hiddenPal.split('');
  console.log(randomWord)//works
  for (let i = 0; i < randomWord.length; i++) {
    blankArray.push(" _ ");
    //blankArray.join() doesn't clear commas
    //try another for loop??
    console.log(blankArray);
  }
  
}

//test the gameStart function
gameStart();
console.log("The blankArray looks like " + blankArray)
//choose pal at index of array??

//chosen pal will have each letter as a new array

//read user iputs

document.onkeyup = function(event) {

    // Determines which key was pressed
    let userGuess = event.key;

    // Alerts the key the user pressed (userGuess).
    alert("You chose " + userGuess);
    //userGuess = userGuess.toString();
    console.log("the user guess is " + userGuess);
    console.log("the current random word is " + randomWord);
};
    //If userGuess is also in randomLetter, will reveal letter in blankArray
    // if (userGuess === randomLetter) {
    //   //blankArray '-' should be replaced by randomLetter
    //   blankArray[i] === randomLetter;
    //   console.log("The blank array looks like " + blankArray)
    // } else {
    //    //if userGuess is not in randomLetter, guesses--;
    //   guesses--;
    //   console.log("You have " + guesses + " guesses left")
    //   //guesses should decrease on html
    // }
    //If blankArray === randomLetter, wins++;
   

    //if guesses = 0, losses++;

    //
//logic of comparing user input to hidden name

