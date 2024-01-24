const mainWrapper = document.querySelector(".main_wrapper");
const gridContainer = document.querySelector(".grid_container");

let gridPerSize = 64;

function initializeGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  const gridParent = document.createElement("div");
  for (let i = 0; i < gridPerSize ** 2; i++) {
    // Create a grid and size
    const grid = document.createElement("div");
    gridParent.style.setProperty("--grid-size", `${400 / gridPerSize}px`);
    grid.classList.add("grid_child");
    gridParent.classList.add("grid_parent");
    gridParent.appendChild(grid);
  }
  gridContainer.appendChild(gridParent);
  const grids = gridContainer.querySelectorAll("div");
  console.log(grids);
}
initializeGrid();

gridContainer.addEventListener("mouseover", (event) => {
  const grid = event.target;
  grid.classList.add("grid_child_active");
});

function resetGrid() {
  let grids = gridContainer.querySelectorAll("div");
  grids.forEach((grid) => {
    grid.classList.remove("grid_child_active");
  });
}

const btnReset = document.querySelector(".reset");
const btnEnterSize = document.querySelector(".enter_size");

btnReset.addEventListener("click", () => resetGrid());

btnEnterSize.addEventListener("click", () => {
  let input = prompt("Enter number of squares per side...");
  if (input === null) {
    return;
  }

  // check if input is valid
  while (Number.isNaN(input) || input > 100 || input === 0) {
    input = Number(prompt("Enter a number"));
    console.log(input);
  }
  gridPerSize = input;
  console.log("gridpersize", gridPerSize);
  initializeGrid();
});
