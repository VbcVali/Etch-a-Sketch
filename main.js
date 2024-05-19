const container = document.querySelector(".container");
const grid = document.querySelector(".grid");
const reset = document.querySelector(".reset");

function newGrid(gridS) {
    const cellSize = 100 / gridS;
    for (let i = 0; i < gridS * gridS; i++) {
        let div = document.createElement("div");
        div.classList.add("square");
        container.appendChild(div);
        div.style.flex = `1 0 ${cellSize}%`;
    };
    
};

grid.addEventListener("click", () => {
    let gridSize = prompt("Grid size ? ");
    gridSize = parseInt(gridSize);

    if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
        alert("Please enter a valid number.")
        gridSize = 16;
    }
    newGrid(gridSize);
});

reset.addEventListener("click", () => {
    container.innerHTML = "";
});

container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("square")) {
        e.target.style.backgroundColor = "black";
    };
});