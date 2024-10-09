// create the container to hold the divs

const container = document.getElementById("container");

// createa  btn
const sizeBtn = document.getElementById("btn");
let gridSize = 16;
// add event listener to btn
sizeBtn.addEventListener("click", () => {
  gridSize = prompt("What size do you want? ");
  newGrid(gridSize);
});

// create 16x16 grid in the container

///////____________________________
// create a function that recreates a new grid with different size
function newGrid(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    // create a new gridItem every time the loop iterates
    const gridItem = document.createElement("div");
    // adding a class to style each item
    gridItem.classList.add("grid-item");
    // adding each grid item to the container
    container.appendChild(gridItem);
    // add event Listener to each grid item
    gridItem.addEventListener("mouseenter", () => {
      gridItem.classList.add("color-change");
    });
  }
}

// create a function to remove the divs
function removeDivs() {
  gridItem.forEach((grid) => {
    grid.remove();
  });
}
////////____________________________

for (let i = 0; i < gridSize * gridSize; i++) {
  // create a new gridItem every time the loop iterates
  const gridItem = document.createElement("div");
  // adding a class to style each item
  gridItem.classList.add("grid-item");
  // adding each grid item to the container
  container.appendChild(gridItem);
  // add event Listener to each grid item
  gridItem.addEventListener("mouseenter", () => {
    gridItem.classList.add("color-change");
  });
}
