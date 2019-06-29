var eplTeams = ["arsenal", "villa", "bournemouth", "brighton", "burnley", "chelsea", "palace",
 "everton", "leicester", "liverpool", "city", "united", "newcastle",
"norwich", "sheffield", "southampton", "tottenham", "watford", "westham ", "wolves"];
var letterBank = ("abcdefghijklmnopqrstuvwxyz").split("");
var currentWord = "";
var underScores = [];


var lettersInCurrentWord = [];
  
var alreadyGuessed = [];
var winCounter = 0
var numberOfGuesses = 7



// if (letterGuessed === lettersInCurrentWord) {
//   // replace appropriate underScores with letterGuessed and subtract 1 from numberOfGuesses
// }else (letterGuessed !== lettersInCurrentWord) {
  // put letterGuessed in alreadyGuessed[] and subtract 1 from numberOfGuesses
//}

function intializeVariables(){
  currentWord = eplTeams[Math.floor(Math.random() * eplTeams.legth)];
  numberOfGuesses = 7;
  
  for (i = 0; i < currentWord.length; i++); {
    underScores[i] = "_";
  }
  lettersInCurrentWord = currentWord.split("");
  //console.log(currentWord);
}
function repaintDOM () {
  var underScoresElement = document.getElementById("underScores");
  var guessesRemainingElement = document.getElementById("guessesRemaining");
  var alreadyGuessedElement = document.getElementById("alreadyGuessed");
  var winsElement = document.getElementById("wins");
  underScoresElement.textContent = "Current Word: " + underScores.join(" ");
  guessesRemainingElement.textContent = "Guesses Remaining: " + numberOfGuesses;
  alreadyGuessedElement.textContent = "Already Guessed: " + alreadyGuessed + letterBank[alreadyGuessed];
  winsElement.textContent = "Wins: " + winCounter;
}  
function startGame() {
  // initialize variables

  // create my underscores
  // repaint the dom

  document.onkeyup = keyClicked
}
function keyClicked(event) {
  console.log("you clicked " + event.key);
  
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