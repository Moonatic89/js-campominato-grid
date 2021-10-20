
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


createGrid(difficulty);


function createGrid(divider) {

    let swapSize;
    let cellNumbers;
    if (divider == 1) {
        swapSize = "grid_cell timesTen";
        cellNumbers = 100;
    } else if (divider == 2) {
        swapSize = "grid_cell timesNine";
        cellNumbers = 91;
    } else if (divider == 3) {
        swapSize = "grid_cell timesSeven";
        cellNumbers = 49;
    }

    for (let i = 0; i < cellNumbers; i++) {


        const cell = document.createElement("div");

        cell.className = swapSize;
        cell.innerHTML = (i + 1);
        cellParent.append(cell);

        cell.addEventListener("click", function () {
            if (this.classList.contains("azure")) {
                this.classList.remove("azure");
            } else {
                this.classList.add("azure");
            }
        });
    }
}

/*
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
*/


