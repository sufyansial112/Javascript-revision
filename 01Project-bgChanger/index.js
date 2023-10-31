const button = document.querySelectorAll(".button");
const body = document.querySelector("body");
const box = document.querySelector(".box");

button.forEach((btn) => {
  // const newli = document.createElement("button");
  // newli.id = "pink";
  // console.log(newli);

  // box.appendChild(newli);
  // console.log(box.children);

  console.log(btn);
  btn.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "black") {
      body.style.backgroundColor = "black";
    } else if (e.target.id === "brown") {
      body.style.backgroundColor = "brown";
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
