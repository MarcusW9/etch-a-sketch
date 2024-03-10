const gridContainer = document.querySelector("#grid-container")
const resetBtn = document.querySelector("#reset-btn")


numberOfSquares = 16

// const colorSquare = (el) => {
//     el.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
// }


// -- The code below satisfies the randomisation of colors on first interactions and then the darkening of this on subsequent -- 
// const colorSquare = (el) => {
//     if (!el.classList.contains("colored")) {
//     el.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
//     el.classList.add("colored")
//     } else {
//     const currentColor = el.style.backgroundColor;
//     [r, g, b] = currentColor.match(/\d+/g)
//     el.style.backgroundColor = `rgb(${r - (256/10)}, ${g - (256/10)}, ${b - (256/10)})`
//     }
// }

// -- This one omits the logic about darkening and just randomises on hover but its more satisfying so I prefer it
const colorSquare = (el) => {
    el.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
}

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
            square.addEventListener("mouseover", (event) => {colorSquare(event.target)})
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
