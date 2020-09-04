"use strict";

const createBoxRef = document.querySelector('[data-action="render"]');
const deleteBoxRef = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector("#boxes");

// function getRandomColor() {
//   const getRandomNumber = () => parseInt(Math.random() * 255);
//   const r = getRandomNumber();
//   const g = getRandomNumber();
//   const b = getRandomNumber();
//   const rgb = `${r},${g},${b}`;
//   return rgb;
// }

function createBox() {
  let box = boxes.childElementCount;
  function getRandomColor() {
    const getRandomNumber = () => parseInt(Math.random() * 255);
    const r = getRandomNumber();
    const g = getRandomNumber();
    const b = getRandomNumber();
    const rgb = `${r},${g},${b}`;
    return rgb;
  }
  const div = document.createElement("div");
  div.style.width = `${30 + box * 10}px`;
  div.style.height = `${30 + box * 10}px`;
  div.style.backgroundColor = `rgb(${getRandomColor()})`;
  boxes.appendChild(div);
}

function createBoxes(amount) {
  let box = boxes.childElementCount;
  const allBoxes = [];
  for (box; box < amount; box += 1) {
    createBox();
    allBoxes.push(box);
  }
}

function destroyBoxes() {
  while (boxes.hasChildNodes()) {
    boxes.removeChild(boxes.lastChild);
  }
}
deleteBoxRef.addEventListener("click", () => {
  destroyBoxes();
});

createBoxRef.addEventListener("click", () => {
  createBoxes(document.querySelector("#controls").firstElementChild.value);
});
