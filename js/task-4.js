"use strict";

const decrementButRef = document.querySelector(".button-decrement");
const incrementButRef = document.querySelector(".button-increment");
const value = document.querySelector("#value");

const subtract = (a, b) => a - b;
const add = (a, b) => a + b;

decrementButRef.addEventListener("click", () => {
  value.textContent = subtract(+value.textContent, 1);
});

incrementButRef.addEventListener("click", () => {
  value.textContent = add(+value.textContent, 1);
});
