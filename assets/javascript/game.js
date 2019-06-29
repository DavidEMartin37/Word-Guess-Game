var eplTeams = ["arsenal", "villa", "bournemouth", "brighton", "burnley", "chelsea", "palace",
 "everton", "leicester", "liverpool", "city", "united", "newcastle",
"norwich", "sheffield", "southampton", "tottenham", "watford", "westham ", "wolves"];
var letterBank = ("abcdefghijklmnopqrstuvwxyz").split("");
var currentWord = eplTeams[Math.floor(Math.random() * eplTeams.length)];
var underScores = [];
var currentMessage = "";
var keyPressed = "";
  
var alreadyGuessed = [];
var winCounter = 0;
var numberOfGuesses = 8;



// if (letterGuessed === lettersInCurrentWord) {
//   // replace appropriate underScores with letterGuessed and subtract 1 from numberOfGuesses
// }else (letterGuessed !== lettersInCurrentWord) {
  // put letterGuessed in alreadyGuessed[] and subtract 1 from numberOfGuesses
//}

function intializeVariables() {
  alreadyGuessed = [];
  numberOfGuesses = 8;
  currentWord = eplTeams[Math.floor(Math.random() * eplTeams.length)];
  makeUnderScores();
}
function makeUnderScores() {
  underScores = [];
  for (i = 0; i < currentWord.length; i++) {
    underScores.push("_");
   
  }
}
 

function wordCheck() {
  var letterMatch = false;
  for (i = 0; i < currentWord.length; i++) {
    if(currentWord[i] === keyPressed) {
      underScores[i] = keyPressed;
      letterMatch = true;
     for(j = 0; j < underScores.length; j++) {
       if(underScores[j] === 0) {

       };
      
     }
  }
  }
  if(!letterMatch) {
    numberOfGuesses--;
  }
}
function numberOfGuessesCheck() {
  if(numberOfGuesses <= 0) {
    intializeVariables();
    currentMessage = "Game Over ... Press Key to Start";
    repaintDOM();
  }
}
function keyClicked(event) {
 // console.log("you clicked " + event.key);
  keyPressed = event.key;
  if (alreadyGuessed.indexOf(keyPressed) === -1) {
    currentMessage = "Already Guessed " + keyPressed;
    alreadyGuessed.push(keyPressed);
    wordCheck();
    numberOfGuessesCheck();
    repaintDOM();
  }else {
    currentMessage = "Try Another Letter";
    repaintDOM();
  }
} 
function repaintDOM () {
  var underScoresElement = document.getElementById("underScores");
  var guessesRemainingElement = document.getElementById("guessesRemaining");
  var alreadyGuessedElement = document.getElementById("alreadyGuessed");
  var winsElement = document.getElementById("wins");
  var userMessageElement = document.getElementById("userMessage");
  underScoresElement.textContent = "Current Word: " + underScores.join(" ");
  guessesRemainingElement.textContent = "Guesses Remaining: " + numberOfGuesses;
  alreadyGuessedElement.textContent = "Already Guessed: " + alreadyGuessed;
  winsElement.textContent = "Wins: " + winCounter;
  userMessageElement.textContent = currentMessage;
}  
function setEventListeners() {
  document.onkeyup = keyClicked;
}
function startGame() {
  // initialize variables

  // create my underscores
  // repaint the dom

  
  intializeVariables();
  setEventListeners();
  repaintDOM();
}

   

startGame();

// for (var j = 0; j < remainingLetters; i++) {
//       if (lettersInCurrentWord[j] === letterGuessed) {
//       letterGuessed = true;
//       }
//     }
//     if (letterGuessed === true) {
//       for (var k = 0; k < lettersInCurrentWord; i++) {
//         if (currentWord[k] === letterGuessed)
//       }
//     }

//     document.getElementById("guesses-remaining") = numberOfGuesses(--);
//     document.getElementById("wins") = wins(++);
//     document.getElementById("already-guessed") = alreadyGuessed.toUpperCase.join(" ");