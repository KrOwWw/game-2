const bricks = document.querySelectorAll(".brick");
const cells = document.querySelectorAll(".cell");

const brickFifteenKg = document.querySelector("#fifteen-kg")
const cellFirstRows = document.querySelectorAll(".first-row")

const check = document.querySelector(".check")

let dragItem = null;
let isDragging = true;

bricks.forEach((brick) => {
    brick.addEventListener("dragstart", dragStart);
    brick.addEventListener("dragend", dragEnd);
});

cells.forEach((cell) => {
    cell.addEventListener("dragover", dragOver);
    cell.addEventListener("drop", dragDrop);
});

check.addEventListener("click", () => {
  cellFirstRows.forEach((cellFirstRow) => {
    if(cellFirstRow.classList.contains("fifteen-kg")){
      console.log("Перевес")
    } else {
      console.log("Недовес")
    }
  })
})

function dragStart() {
  dragItem = this;
  cells.forEach((cell) => {
    cell.style.boxShadow = "0 0 10px #6f85ff";
  });
}

function dragEnd() {
  dragItem = null;
  cells.forEach((cell) => {
    cell.style.boxShadow = "none";
  });
}

function dragOver(e) {
  e.preventDefault();
}
function dragDrop() {
  this.append(dragItem);
}
