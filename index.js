var Word = require("./word.js");
var inquirer = require("inquirer");
var wordBank = [
  "yankees",
  "orioles",
  "astros",
  "royals",
  "angels",
  "mariners",
  "mets",
  "nationals",
  "cubs",
  "phillies",
  "dodgers",
  "giants"
];

function playGame(randomWord, wins, losses) {
  console.log(
    "Welcome to the Baseball Team guess game! You currently have " +
      wins +
      " wins and " +
      losses +
      " losses"
  );
  var gameWord = new Word(randomWord);
  gameWord.createLetters();
  gameWord.displayWord();
  askForLetter();

  function askForLetter() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Please guess a letter",
          name: "userGuess"
        }
      ])
      .then(function(answer) {
        gameWord.checkUserGuess(answer.userGuess);

        if (!gameWord.checkWin() && !gameWord.checkLoss()) {
          askForLetter();
        } else {
          if (gameWord.checkWin()) {
            console.log("Congrats! You won!!");
            wins++;
          } else {
            losses++;
          }

          continuePrompt();
        }
      });
  }

  function continuePrompt() {
    inquirer
      .prompt([
        {
          type: "confirm",
          message: "Would you like to play again?",
          name: "continue"
        }
      ])
      .then(function(answers) {
        if (answers.continue) {
          playGame(
            wordBank[Math.floor(Math.random() * wordBank.length)],
            wins,
            losses
          );
        }
      });
  }
}

playGame(wordBank[Math.floor(Math.random() * wordBank.length)], 0, 0);
