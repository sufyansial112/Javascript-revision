const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

button.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "green") {
      body.style.backgroundColor = "green";
    } else if (e.target.id === "black") {
      body.style.backgroundColor = "black";
    }
  });
});
