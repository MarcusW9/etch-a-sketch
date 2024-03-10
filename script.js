const gridContainer = document.querySelector("#grid-container")
const resetBtn = document.querySelector("#reset-btn")


numberOfSquares = 16

// Could separate concerns better? 
const generateGrid = (numberOfSquares) => {
        for (let i = 0; i < numberOfSquares; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        column.id = `column${i}`;
        gridContainer.appendChild(column);

        for (let j = 0; j < numberOfSquares; j++) {
            let letter = String.fromCharCode(65+j);
            const square = document.createElement("div");
            square.classList.add("square");
            square.id = `square${letter}${i}`;
            square.addEventListener("mouseover", () => {square.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`})
            column.appendChild(square);
        }
    }
}

const randomRGB = () => {
    return Math.floor(Math.random() * 256)
}

generateGrid(numberOfSquares)

const clearGrid = () => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }
}

const setNumberOfSquares = () => {
    numberOfSquares = prompt("How many squares per side?")
    if (numberOfSquares > 100) {
            numberOfSquares = prompt("Maximum of 100, try again")
        }
    clearGrid()
    generateGrid(numberOfSquares)
}

resetBtn.addEventListener("click", setNumberOfSquares)
