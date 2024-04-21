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
  guesses = 7;
  //will choose word from listOfPals
  randomWord = listOfPals[Math.floor(Math.random() * listOfPals.length)]
  //split randomWord into an array
  randomLetter = randomWord.split("");
  //set blanks equal to length of randomLetter array
  // blanks = randomLetter.length;
  for (let i = 0; i < randomWord.length; i++) {
    blankArray.push(" _ ");
    console.log(blankArray);

  }
  //set blankArray to html
  blankArrayText.textContent = blankArray.join(" ");
}

//update score function
function updateScore(){
  document.getElementById("wins").innerHTML( wins);
  document.getElementById("losses").innerHTML(losses);
  document.getElementById("guesses").innerHTML(guesses);
 }

//function to set image to div
function setImage(image){
let img = document.createElement("IMG");
    img.src = "images/"+image;
    document.getElementById('image').appendChild(img);
}
//test the gameStart function
gameStart();
console.log("The blankArray looks like " + blankArray)
//choose pal at index of array??

//check if game is over
function scoreGame(){
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("guesses").innerHTML = guesses;
  if (guesses = 0) {
    alert ("game over");
    losses++;
    //update html to show loss
    //updateScore();
    gameStart();
    //if player has guessed the word
  } else if (blankArray === randomLetter){
    alert("You win!");
    wins++;
    setImage(randomWord);
    //update html to show win
   // updateScore();
    gameStart();

  }
};
   //update score function
   

document.onkeyup = function(event) {
//want to add space bar to start game***
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
        if(userGuess === randomWord[i]){
          console.log(randomWord[i])//works
         blankArray[i] = userGuess;
          //set blankArray to html
        blankArrayText.textContent = blankArray.join(" ");
         console.log("the blank is " + blankArray[i])
        
          console.log("The blank array is now " + blankArray);
          scoreGame();
        }
        
      }
    }
    else if(randomLetter.indexOf(userGuess) < 0){
      console.log(randomWord + " does not have " + userGuess);
      guesses--;
      
      console.log("You now have " + guesses + " guesses left");
      scoreGame();
    }

  
};
  
    //If blankArray === randomLetter, wins++;
   

    //if guesses = 0, losses++;

    //
//logic of comparing user input to hidden name

