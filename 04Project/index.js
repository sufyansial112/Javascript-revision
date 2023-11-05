const form = document.querySelector(".guess-form");
const inputBar = document.querySelector(".input-bar");
const submitBtn = document.querySelector(".submit-btn");
const PreGuess = document.querySelector("#pre-guess");
const remGuess = document.querySelector("#rem-guess");
const message = document.querySelector("#message");

const randomNUmber = parseInt(Math.random() * 100 + 1);
console.log(randomNUmber);

const p = document.createElement("p");

const prevGuess = [];
const numGuess = 1;
const playGame = true;

if (playGame) {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(inputBar.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please Enter a valid Number");
  } else if (guess < 1) {
    alert("please enter a  number between 1 and 100");
  } else if (guess > 100) {
    alert("please enter a  number between 1 and 100");
  } else {
    prevGuess.push(guess);
    if (guess === 11) {
      displayGuess(guess);
      displayMessage(`the random number was ${randomNUmber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNUmber) {
    message.innerHTML = "You guessed it right";
    endGame();
  } else if (guess < randomNUmber) {
    message.innerHTML = "the guess is too low";
  } else if (guess > randomNUmber) {
    message.innerHTML = "the guess is too high";
  }
}
function displayGuess(guess) {
  //
}
function displayMessage(messages) {
  //
}
function endGame() {
  //
}
function startGame() {
  //
}
