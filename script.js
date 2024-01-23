const mainWrapper = document.querySelector(".main_wrapper");
const gridContainer = document.querySelector(".grid_container");

let gridPerSize = 2;
let gridCount;
let gridTotalCount = gridPerSize ** 2;

function initializeGrid() {
  resetGrid();
  gridCount = gridPerSize ** 2;
  console.log("grid count", gridCount);
  const gridCountDifference =
    gridTotalCount === gridCount
      ? gridPerSize ** 2
      : gridCount - gridTotalCount;
  // while (gridContainer.firstChild) {
  //   gridContainer.removeChild(gridContainer.firstChild);
  // }
  for (let i = 0; i < gridCountDifference; i++) {
    // Create a grid and size
    const grid = document.createElement("div");
    gridContainer.style.setProperty(
      "--grid-size",
      gridContainer.parentElement.clientHeight / gridPerSize + "px"
    );
    grid.classList.add("grid_child");
    gridContainer.appendChild(grid);
  }
  const grids = gridContainer.querySelectorAll("div");
  gridTotalCount = Array.from(grids).length;
  console.log("grid total count", gridTotalCount);
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
