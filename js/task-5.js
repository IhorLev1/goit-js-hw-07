"use strict";

const inputRef = document.querySelector("#name-input");
const nameLabelRef = document.querySelector(".header-js > span");

inputRef.addEventListener("input", (event) => {
  if (inputRef === "") {
    nameLabelRef.textContent = "незнакомец";
  } else {
    nameLabelRef.textContent = event.target.value;
  }
});
