const container = document.querySelector(".container");
const grid = document.querySelector(".grid");
const reset = document.querySelector(".reset");

let color = "brown";
const erase = document.querySelector(".erase");
erase.addEventListener("click", () => {
    color = "white";
});

const random = document.querySelector(".random");
random.addEventListener("click", () => {
    let colors = ["red", "blue", "green", "brown", "yellow", "pink", "black", "grey", "turquoise"];
    color = colors[Math.floor(Math.random() * colors.length)];
})

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
    container.innerHTML = "";
    let gridSize = prompt("Grid size ? ");
    gridSize = parseInt(gridSize);

    if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
        alert("Please enter a valid number.")
        gridSize = 16;
    }

    else {
        newGrid(gridSize);
    }
});

reset.addEventListener("click", () => {
    container.innerHTML = "";
});

container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("square")) {
        e.target.style.backgroundColor = color;
    };
});