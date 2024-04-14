//List pals in array
const listOfPals = ["lamball", "anubis", "verdash", "cremis", "direhowl" ,"mau"]
//hiddenPalImage will be the image
let hiddenPalImage;
//possibly use prompts to store value
let userGuess = "";
//will store user selections
let userGuessArray = [];
//randomWord will be the word chosen from listOfPals
let randomWord = [];
//randomLetter will be the randomWord seperated into an array by letter
let randomLetter;
//blankArray will have dashes until letters revealed
let blankArray =[];
//blanks will hold the number of blanks per randomLetter length
let blanks = 0;
let blankArrayText = document.getElementById("blank-space");


let guesses = 7;
let wins = 0;
let losses = 0;
//game start function
function gameStart(){
  //will choose word from listOfPals
  randomWord = listOfPals[Math.floor(Math.random() * listOfPals.length)]
  randomLetter = randomWord.split("");
  console.log("The word looks like " + randomLetter);
  console.log(randomWord)//works
  blanks = randomLetter.length;
  for (let i = 0; i < randomWord.length; i++) {
    blankArray.push(" _ ");
    //blankArray.join() doesn't clear commas
    //try another for loop??
    console.log(blankArray);

  }
  //set blankArray to html
  blankArrayText.textContent = blankArray;
}

//test the gameStart function
gameStart();
console.log("The blankArray looks like " + blankArray)
//choose pal at index of array??

//chosen pal will have each letter as a new array



document.onkeyup = function(event) {

    //read user iputs
    let userGuess = event.key;
    // Alerts the key the user pressed (userGuess).
    alert("You chose " + userGuess);
    userGuessArray.push(userGuess);
    console.log("The user has guessed " + userGuessArray)
    // argument for matching variables
    //will use index of to see if userguess is in array
    if (randomLetter.indexOf(userGuess) >= 0) {
    //loop through the length of the word/array to

      for (let i = 0; i < randomWord.length; i++) {
        if(randomWord[i] === userGuess){
          console.log(randomWord[i])//works
         blankArray[i] = userGuess;
         console.log("the blank is " + blankArray[i])
        
          console.log("The blank array is now " + blankArray);
        }
        
      }
    }
    else{
      console.log(randomWord + " does not have " + userGuess);
      guesses--;
      console.log("You now have " + guesses + " guesses left");
    }

  
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

