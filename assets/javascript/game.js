var eplTeams = ["arsenal", "villa", "bournemouth", "brighton", "burnley", "chelsea", "palace",
 "everton", "leicester", "liverpool", "city", "united", "newcastle",
"norwich", "sheffield", "southampton", "tottenham", "watford", "westham ", "wolves"];
var letterGuessed = ("abcdefghijklmnopqrstuvwxyz").split("");
var currentWord = eplTeams[Math.floor(Math.random() * eplTeams.legth)];
var blankSpots = [];
for (i = 0; i < eplTeams.length; i++); {
  blankSpots[i] = "_";
}
var remainingLetters = currentWord.length;
var lettersInCurrentWord = currentWord.split("");
var alreadyGuessed = [];
var wins = 0
var numberOfGuesses = 7
while (remainingLetters > numberOfGuesses) {
  document(blankSpots.join(" "));
}
if (letterGuessed === lettersInCurrentWord) {
  // replace appropriate blankSpot with letterGuessed and subtract 1 from numberOfGuesses
}else (letterGuessed !== lettersInCurrentWord) {
  // put letterGuessed in alreadyGuessed[] and subtract 1 from numberOfGuesses
}
function startGame() {
  document.onkeyup(letterGuessed)
}