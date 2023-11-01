const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector(".results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `${BMI}`;
  }
  const overWeight = document.querySelector(".over-weight");
  const normalRange = document.querySelector(".normal-range");
  const underWeight = document.querySelector(".under-weight");
  if (results.innerHTML <= 19) {
    underWeight.innerHTML = "You are underweight";
  } else if (results.innerHTML > 19 && results.innerHTML < 25) {
    normalRange.innerHTML = "You are in a normal range";
  } else if (results.innerHTML >= 25) {
    overWeight.innerHTML = "You are over weight";
  }
});
