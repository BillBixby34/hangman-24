//List pals in array
const listOfPals = ["lamball", "anubis", "verdash", "cremis", "direhowl" ,"mau"]
//hiddenPalImage will be the image
let hiddenPalImage = document.getElementById("image");
//possibly use prompts to store value
let userGuess = "";
//will store user selections
let userGuessArray = [];
//randomWord will be the word chosen from listOfPals
let randomWord = "";
//randomLetter will be the randomWord seperated into an array by letter
let randomLetter = [];
//blankArray will have dashes until letters revealed
let blankArray =[];
//blanks will hold the number of blanks per randomLetter length
let blanks = 0;
var blankArrayText = document.getElementById("blank-space");


let guesses = 7;
let wins = 0;
let losses = 0;




 //function to set image to div
function setImage(image){
  let img = document.createElement("IMG");
      img.src = "images/"+image;
      hiddenPalImage.appendChild(img);
  }

//game start function
function gameStart(){
  guesses = 7;
  //will choose word from listOfPals
  randomWord = listOfPals[Math.floor(Math.random() * listOfPals.length)]
  //split randomWord into an array
  randomLetter = randomWord.split("");
  //set blanks equal to length of randomLetter array
  blanks = randomLetter.length;
  //reset blankArray and userGuesses array
  blankArray = [];
  userGuessArray = [];
  for (let i = 0; i < blanks; i++) {
    blankArray.push(" _ ");
  }
  console.log("The blankArray looks like " + blankArray)
  //set blankArray to html
  blankArrayText.innerHTML = blankArray.join(" ");
  //clear user-guesses array
  document.getElementById("user-guesses").innerHTML = userGuessArray.join(" ");
  //guesses to html
  document.getElementById("guesses").innerHTML = guesses;
}




//test the gameStart function
//gameStart();

//choose pal at index of array??

//gameplay function
function gamePlay(letter){

  //this will update if the letter is there

  let chosenLetter = false;
  for (let i = 0; i < blanks; i++) {
    //CHECK IF WORKS
    if (randomLetter[i] === letter) {

      chosenLetter = true;
    };
  }
      if(chosenLetter){
        //loop will go through array to find each instance of the letter
        for (let j = 0; j < blanks; j++) {

          if ( randomLetter[j] === letter){
            blankArray[j] = letter;
            console.log(blankArray[j] + " is now placed")
            console.log("The word is now " + blankArray);
          };
          
        }
      }
    
    else{
      userGuessArray.push(letter);
      guesses--;

    }
  
  };//function gamePlay 

  
  //update score function
  function updateScore(){
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guesses").innerHTML = guesses;
    document.getElementById("user-guesses").innerHTML = userGuessArray;
  }


   // score game function
   function scoreGame(){
    updateScore();
    console.log(blankArray + " and " + randomLetter + " look similar...")
    if (blankArray === randomLetter) {
      wins++;
      alert("You win");
      setImage(randomWord);
      console.log("The image should be " + randomWord);
      gameStart();

    } else if(guesses = 0){
      losses++;
      alert("game over");
      gameStart();
    }
   }
  
   gameStart();

document.onkeyup = function(event) {
//want to add space bar to start game***
    //read user iputs
    userGuess = event.key.toLowerCase();
    console.log(userGuess + " was pressed");
    gamePlay(userGuess);
    scoreGame();

  
};
  

