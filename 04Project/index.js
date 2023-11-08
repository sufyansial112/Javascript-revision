let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submitBtn = document.querySelector("#submit-id");
const inputBar = document.querySelector("#input-id");
const previousGuess = document.querySelector("#pre-guess");
const remainingGuess = document.querySelector("#rem-guess");
const results = document.querySelector(".form-footer");
const message = document.querySelector("#message1");
const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

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
  } else if (guess > 3) {
    alert("please enter a value less than 100");
  } else if (guess < 1) {
    alert("please enter a value greater than 1");
  } else {
    prevGuess.push(guess);
    if (numGuess === 3) {
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
  message1.innerHTML = `${message}`;
}
function endGame() {
  inputBar.value = "";
  inputBar.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id= 'newGames'> click to play again </h2>`;
  results.appendChild(p);
  submitBtn.setAttribute("disabled", "");
  playGame = false;
  startGame();
}
function startGame() {
  inputBar.value = "";

  const newGame1 = document.querySelector("#newGames");
  newGame1.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);

    prevGuess = [];
    numGuess = 1;
    inputBar.removeAttribute("disabled", "");
    submitBtn.removeAttribute("disabled", "");
    remainingGuess.innerHTML = `${11 - numGuess}`;
    results.removeChild(p);
    playGame = true;
  });
}
