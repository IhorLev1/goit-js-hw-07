"use strict";

const fontSizeControlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

const changeOfSize = (event) => {
  textRef.style.fontSize = `${event.target.valueAsNumber}px`;
};
fontSizeControlRef.addEventListener("change", changeOfSize);
