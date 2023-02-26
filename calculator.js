var calculator;

//declaring the buttons
const operatorButtons = document.querySelectorAll(".operator");
const numberButtons = document.querySelectorAll(".number");
const cButton = document.getElementById("cButton");
const equalsButton = document.getElementById("equalsButton");
const backButton = document.getElementById("backspace");

var currentNumber = 0;

var heldNumber = 0;

var currentOperator = "none";

const currentNumberDisplay = document.querySelector("#display");

function appendNumber(number) {
  console.log(number + " clicked");
  if (currentNumber === 0) {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
  currentNumberDisplay.innerHTML = currentNumber;
}

function reset() {
  currentNumber = 0;
  if (currentOperator == "none") {
    currentNumberDisplay.innerHTML = 0;
  } else {
    currentNumberDisplay.innerHTML = currentOperator;
  }
}

function operate(operator) {
  heldNumber = currentNumber;
  currentOperator = operator;
  reset();
}

function add(x,y) {
  return parseInt(x) + parseInt(y);
}

function subtract(x,y) {
  return x - y;
}

function multiply(x,y) {
  return x * y;
}

function divide(x,y) {
  return x / y;
}

function calculate() {
  let result;
  if (currentOperator == "+") {
    result = add(currentNumber, heldNumber);
  } else if (currentOperator == "-") {
    result = subtract(heldNumber, currentNumber);
  } else if (currentOperator == "x") {
    result = multiply(currentNumber, heldNumber);
  } else if (currentOperator == "÷") {
    result = divide(heldNumber, currentNumber);
  } else {
    result = currentNumber;
  }
  currentOperator = "none";
  console.log(result);
  currentNumberDisplay.innerHTML = result;
  currentNumber = result;
}

//Click events
///for all number buttons
numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.value))
);

///for the operator buttons
operatorButtons.forEach((button) =>
  button.addEventListener("click", () => { operate(button.value); })
);

///for the c button
cButton.addEventListener("click", () => {
  heldNumber = 0;
  reset();
});

///for the = button
equalsButton.addEventListener("click", () => {
  calculate();
});

// for the <= button
backButton.addEventListener("click", () => {
  removeDigit();
})
