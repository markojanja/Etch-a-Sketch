"use strict";

const etcher = document.querySelector(".etcher");
const slider = document.getElementById("slider");
const colorPicker = document.querySelector("#colorPicker");

//initial grid
createGrid();
draw();
//set the value for the cols and rows for the grid
slider.addEventListener("input", function (e) {
  etcher.innerHTML = "";
  let size = e.target.value;
  createGrid(size);
  draw();
});

//create div add class box
//set 16x16 grid of boxes and append them to the etcher
function createGrid(size = 16) {
  let gridSize = size ** 2;
  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    etcher.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    etcher.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    etcher.appendChild(div);
  }
}

let color = "rgb(0,0,0)";
//inital state of mouse button pressed
let mouse = false;
//on mouse click change state to true
document.body.addEventListener("mousedown", () => (mouse = true));
//on mouse realese set mouse state to false
document.body.addEventListener("mouseup", () => (mouse = false));

const ereaseBtn = document.querySelector(".erease-btn");

//set the color to white when erease btn is clicked
ereaseBtn.onclick = () => (color = "#ffffff");

//change background of the box div on mouse click
function draw() {
  // colorPicker.addEventListener("change", changeColor, false);
  colorPicker.addEventListener("change", (e) => (color = e.target.value));
  const box = document.querySelectorAll(".box");

  box.forEach((b) => {
    b.addEventListener("mouseover", function (e) {
      if (e.type === "mouseover" && mouse) {
        e.target.style.background = `${color}`;
      }
    });
    b.addEventListener("mousedown", function (e) {
      e.preventDefault(); //prevernt mouse grab effect
      e.target.style.background = `${color}`;
    });
  });
}

const resetBtn = document.querySelector(".reset-btn");

//resets the grid , the slider, color and colorPicker
resetBtn.addEventListener("click", () => {
  etcher.innerHTML = "";
  slider.value = 16;
  color = "#000000";
  colorPicker.value = color;
  createGrid();
  draw();
});

//get random color
const randomColorBtn = document.querySelector(".random-btn");

randomColorBtn.addEventListener("click", function () {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  color = `rgb(${r}, ${g}, ${b})`;
  draw();
  
});
