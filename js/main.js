const bricks = document.querySelectorAll(".brick__line");
const cells = document.querySelectorAll(".cell");

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

