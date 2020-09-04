"use strict";

const decrementButRef = document.querySelector(".button-decrement");
const incrementButRef = document.querySelector(".button-increment");
const value = document.querySelector("#value");

const subtract = (a, b) => a - b;
const add = (a, b) => a + b;
let currentValue = 0;

decrementButRef.addEventListener("click", () => {
  value.textContent = subtract(currentValue, 1);
  currentValue -= 1;
});

incrementButRef.addEventListener("click", () => {
  value.textContent = add(currentValue, 1);
  currentValue += 1;
});

// let counterValue = Number(document.getElementById("value").textContent);
// const decrement = document.querySelector('[data-action="decrement"]');
// const increment = document.querySelector('[data-action="increment"]');

// decrement.addEventListener("click", function () {
//   counterValue -= 1;
//   document.getElementById("value").innerHTML = counterValue;
// });
// increment.addEventListener("click", function () {
//   counterValue += 1;
//   document.getElementById("value").innerHTML = counterValue;
// });
