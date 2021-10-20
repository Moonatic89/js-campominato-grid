
/*
The user choose a difficulty level between 1 and 3.

The software creates a squared grid with a range of cells based on the difficulty levels:
 - 1 -> 1..100
 - 2 -> 1..81
 - 3 -> 1..49

In every cell there is an incresing number.

When the user clicks on a cell it turns azure.
*/

const difficulty = parseInt(prompt("Choose a difficulty lever between 1 and 3"));
const cellParent = document.querySelector(".row");

createGrid(getRandomNumberByDifficulty(difficulty));


function createGrid(cellNumbers) {

    for (let i = 0; i < cellNumbers; i++) {
        const cell = document.createElement("div");
        cell.className = "grid_cell";
        cell.innerHTML = (i + 1);
        cellParent.append(cell);
        cell.addEventListener("click", function () {
            this.className += " green";
        });
    }
    // TODO - add event listener to cell 

}

function getRandomNumberByDifficulty(difficultyToRange) {

    if (difficultyToRange == 1) {
        //1..100
        return (Math.floor(Math.random() * 100) + 1);
    } else if (difficultyToRange == 2) {
        //1..81
        return (Math.floor(Math.random() * 81) + 1);
    } else if (difficultyToRange == 3) {
        //1..49
        return (Math.floor(Math.random() * 49) + 1);
    } else {
        alert("Invalid number. Please try again.")
    }

}

function colorSwitch() {
    console.log(i);
}


