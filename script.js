const mainWrapper = document.querySelector(".main_wrapper");
const gridContainer = document.querySelector(".grid_container");

let gridCount = 16;

function initializeGrid() {
  gridContainer.innerHTML = "";
  for (let i = 0; i < gridCount * gridCount; i++) {
    const grid = document.createElement("div");
    grid.style["flex"] = `0 1 ${
      gridContainer.parentElement.clientWidth / gridCount
    }px`;
    grid.style.height = `${
      gridContainer.parentElement.clientHeight / gridCount
    }px`;
    grid.style.backgroundColor = "red";

    grid.addEventListener("mouseenter", () => {
      grid.style.backgroundColor = "black";
    });
    gridContainer.appendChild(grid);
  }
}
initializeGrid();

const btnReset = document.querySelector(".reset");
const btnEnterSize = document.querySelector(".enter_size");

btnReset.addEventListener("click", () => initializeGrid());

btnEnterSize.addEventListener("click", () => {
  let input = Number(prompt("Enter number of squares per side..."));
  console.log(input);

  // check if input is valid
  while (Number.isNaN(input) || input * input > 100) {
    input = Number(prompt("Enter a number"));
    console.log(input);
  }
  gridCount = input;
  initializeGrid();
});
