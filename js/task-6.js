"use strict";

const inputRef = document.querySelector("#validation-input");

const validationHandler = () => {
  if (inputRef.value.length === +inputRef.attributes["data-length"].value) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
};

inputRef.addEventListener("blur", validationHandler);
