// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
let colors = document.querySelectorAll(".color");
let selectedColor = document.querySelector("#current-color");


colors.forEach((color) => {
  color.addEventListener("click", () => {
    selectedColor.style.backgroundColor = event.target.style.backgroundColor;
  });
});


let cells = document.querySelectorAll(".cell");


cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    event.target.style.backgroundColor = selectedColor.style.backgroundColor;
  });
});