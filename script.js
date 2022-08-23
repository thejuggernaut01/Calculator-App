"use strict";

let equal_pressed = 0;
let finalAnswer = document.querySelector(".input-input");
// All buttons except from Clear and Delete
let buttons = document.querySelectorAll(".button");

// refer input, equal, clear, and delete
let input = document.getElementById("input");
let equal = document.querySelector(".equal-operator");
let clear = document.querySelector(".clear");
let erase = document.querySelector(".erase");

// Dark/Light Mode
const darkMode = document.querySelector(".dark--mode");

window.onload = () => {
  input.value = "";
};

// Access each class using forEach
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (equal_pressed === 1) {
      input.value = "";
      equal_pressed = 0;
    }
    // display value of each button
    input.value += button.value;
  });
});

// Solve the user's input when clicked on equal sign
equal.addEventListener("click", function () {
  equal_pressed = 1;
  let inp_val = input.value;

  try {
    // Evaluate user's input
    let solution = eval(inp_val);

    // console.log(advanceCalc(input.value));
    // True for integers
    if (Number.isInteger(solution)) {
      // input.value = solution;
      // finalAnswer.textContent = solution;
      finalAnswer.value = solution;
    } else {
      // input.value = solution.toFixed(2);
      // finalAnswer.textContent = solution.toFixed(1);
      finalAnswer.value = solution.toFixed(2);
    }
    console.log(solution);
  } catch (err) {
    // input.value = "Invalid Input";
    finalAnswer.value = "Invalid Input";
  }
});

clear.addEventListener("click", function () {
  // Clear both input value and final answer
  input.value = "";
  // finalAnswer.textContent = "";
  finalAnswer.value = "";
});

erase.addEventListener("click", () => {
  // Delete the input value
  //   input.value = input.value.slice(0, input.value.length - 1);
  input.value = input.value.substring(0, input.value.length - 1);

  // Delete the final answer after input value === ""
  if (input.value === "") {
    finalAnswer.value = finalAnswer.value.substring(
      0,
      finalAnswer.value.length - 1
    );
  }
});

// Functions for performing sine, cosine, and tangent computations
const inputSine = function () {
  let sinValue = Number.parseFloat(input.value);
  finalAnswer.value = Math.sin(sinValue * (Math.PI / 180)).toFixed(10);
  input.value = "";
  return;
};

const inputCosine = function () {
  let cosValue = Number.parseFloat(input.value);
  finalAnswer.value = Math.cos(cosValue * (Math.PI / 180)).toFixed(10);
  input.value = "";
  return;
};
const inputTangent = function () {
  let tanValue = Number.parseFloat(input.value);
  finalAnswer.value = Math.cos(tanValue * (Math.PI / 180)).toFixed(10);
  input.value = "";
  return;
};

// Function for %
const percent = function () {
  let percentValue = Number.parseFloat(input.value);
  finalAnswer.value = percentValue / 100;
};

// Function for powers
const power = function () {
  let powValue = Number.parseFloat(input.value);
  finalAnswer.value = Math.pow(powValue, 2);
};
const power1 = function () {
  let powValue = parseFloat(input.value);
  finalAnswer.value = Math.pow(powValue, -1).toFixed(10);
};

document.querySelector(".keys--container").addEventListener("click", (e) => {
  let value = e.target.value;
  switch (value) {
    case "sin":
      inputSine();
      break;
    case "cos":
      inputCosine();
      break;
    case "tan":
      inputTangent();
      break;
    case "%":
      percent();
      break;
    case "pow1":
      power();
      break;
    case "pow2":
      power1();
      break;
  }
});

darkMode.addEventListener("click", function (e) {
  // console.log(e.target);
  if (e.target) {
    document.querySelector(".container").style.background = "black";
    document.querySelector(".calc-bar").style.background = "black";
    document.querySelector(".input-screen").style.background = "black";
    document.querySelector(".input-input").style.background = "black";
    document.querySelector(".input-input").style.color = "white";

    document.getElementById("input").style.background = "black";
    document.querySelector(".keys--container").style.background = "black";
    document.querySelector(".keys--container").style.border = "1px solid black";
    document.querySelector(".fa-solid").style.color = "white";

    document.querySelectorAll(".keys").forEach((key) => {
      key.style.color = "white";
      key.style.background = "black";
    });
    document.querySelectorAll(".keys.operator1").forEach((operator) => {
      operator.style.background = "orange";
    });
    document.querySelector(".keys.equal-operator").style.background =
      "rgb(97, 228, 97)";
    document.querySelector(".keys.clear").style.background =
      "rgb(255, 227, 227)";
    document.querySelector(".keys.clear").style.color = "red";
  }
});

darkMode.addEventListener("dblclick", function (e) {
  if (e.target) {
    document.querySelector(".container").style.background = "";
    document.querySelector(".calc-bar").style.background = "";
    document.querySelector(".input-screen").style.background = "";
    document.querySelector(".input-input").style.background = "";
    document.querySelector(".input-input").style.color = "";
    document.getElementById("input").style.background = "";
    document.querySelector(".keys--container").style.background = "";
    document.querySelector(".keys--container").style.border = "";
    document.querySelector(".fa-solid").style.color = "";
    document.querySelectorAll(".keys").forEach((key) => {
      key.style.color = "";
      key.style.background = "";
    });
    document.querySelectorAll(".keys.operator1").forEach((operator) => {
      operator.style.background = "";
    });
    document.querySelector(".keys.equal-operator").style.background = "";
    document.querySelector(".keys.clear").style.background = "";
    document.querySelector(".keys.clear").style.color = "";
  }
});
