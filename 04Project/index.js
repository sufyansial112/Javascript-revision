const randomNumber = parseInt(Math.random() * 100 + 1);

const submitBtn = document.querySelector("#submit-id");
const inputBar = document.querySelector("#input-id");
const previousGuess = document.querySelector("#pre-guess");
const remainingGuess = document.querySelector("#rem-guess");
const results = document.querySelector(".form-footer");
const message = document.querySelector("#message");
const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

const playGame = true;

if (playGame) {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(inputBar.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid Number");
  } else if (guess > 100) {
    alert("please enter a value less than 100");
  } else if (guess < 1) {
    alert("please enter a value greater than 1");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayMessage(`Game over. The guess was ${randomNumber}`);
      displayGuess(guess);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (randomNumber === guess) {
    displayMessage("You guessed it right. You won");
    endGame();
  } else if (randomNumber > guess) {
    displayMessage("your guess is too high");
  } else if (randomNumber < guess) {
    displayMessage("Your guess is too low");
  }
}
function displayGuess(guess) {
  inputBar.value = "";
  previousGuess.innerHTML += `${guess}  `;
  numGuess++;
  remainingGuess.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  //
}
function endGame(guess) {
  //
}
function startGame(guess) {
  //
}
