"use strict";

let userInput = document.getElementById("user-input");

// to create random colors
function createRandomColors() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let color = "rgb(" + x + "," + y + "," + z + ")";
  return color;
}

function createGrid(rows, columns) {
  // Selecting the grid container element.
  let gridsContainer = document.querySelector(".grid-container");
  // Clearing all the existing div elements inside the gridContainer.
  gridsContainer.innerHTML = "";
  // Setting the display property of the grid container to 'grid'.
  gridsContainer.style.display = "grid";
  // Setting the grid-template-columns property to create the desired number of columns.
  gridsContainer.style.setProperty(
    "grid-template-columns",
    `repeat(${columns},1fr)`
  );
  // Setting the grid-template-rows property to create the desired number of rows.
  gridsContainer.style.setProperty("grid-template-rows", `repeat(${rows},1fr)`);
  // Creating and appending the div elements to the grid container based on the specified rows and columns.
  for (let i = 0; i < rows * columns; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    gridsContainer.appendChild(square);
    // to change background color on hover
    let changeColor = createRandomColors();
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = changeColor;
      square.classList.add("black-color");
    });
  }
}
// to create a grid layout onload
createGrid(16, 16);

// to update grid when user inputs a value
userInput.addEventListener("change", () => {
  if (userInput.value < 16 || userInput.value > 100) {
    alert("Please enter a value between 16 and 100.");
  } else {
    createGrid(userInput.value, userInput.value);
  }
});
