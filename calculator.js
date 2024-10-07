"use strict";

///Creating a calculator

// a) Understanding the problem
// -what operations will it take?
//      it will perform arithmatic oprations only such as -+*/%
// -What will user have to do be getting his problem solved?
//      user will input first number and then operator then second number

// b) Breaking the problem into sub-problem
//     -creating a function that will hold the calc functionc
//     -giving the function three parameters
//     -performing oprations on the arguments passed
//     -returning the final result
//     -loggin it to the console

//The solution

/* const calculator = (num1, opp, num2) => {
  if (opp == "+") {
    return num1 + num2;
  } else if (opp == "-") {
    return num1 - num2;
  } else if (opp == "*") {
    return num1 * num2;
  } else if (opp == "/") {
    return num1 / num2;
  } else if (opp == "%") {
    return num1 % num2;
  } else {
    return `Invalid Parameter !!!!`;
  }
};

const result = calculator(122, "%", 13);

console.log(result); */
/* 
//Numbers
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eifht");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");


//Displaying elemnts
one.addEventListener("click", function () {
  content.textContent = 1;
});
two.addEventListener("click", function () {
  content.textContent = 2;
}); */

const buttons = document.querySelectorAll(".btns");
const content = document.querySelector(".content");

//operators
const plus = document.getElementById("plus");
const subtract = document.getElementById("subtract");
const multiple = document.getElementById("multiple");
const divide = document.getElementById("divide");
const percentage = document.getElementById("percentage");
const root = document.getElementById("root");
const dot = document.getElementById("dot");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");

content.textContent = 0;
let currentInput, firstNumber, operations, secondNumber;
const innit = () => {
  currentInput = "";
  firstNumber = null;
  operations = null;
  secondNumber = null;
};

innit();

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (!isNaN(value) || value === ".") {
      currentInput += value;
      content.textContent = currentInput;
    }
  });
});

// operations
const operators = (opp) => {
  if (currentInput !== "") {
    firstNumber = currentInput;
    operations = opp;
    currentInput = "";
  }
};

plus.addEventListener("click", () => operators("+"));
subtract.addEventListener("click", () => operators("-"));
multiple.addEventListener("click", () => operators("*"));
percentage.addEventListener("click", () => operators("%"));
root.addEventListener("click", () => operators("²"));
clear.addEventListener("click", () => {
  content.textContent = 0;
  innit();
});
equal.addEventListener("click", () => {
  if (firstNumber !== null && operations && currentInput !== "") {
    // currentInput = `${firstNumber} ${operations} ${secondNumber}`;
    secondNumber = currentInput;

    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    let result;

    switch (operations) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        result = firstNumber / secondNumber;
        break;
      case "✓":
        result = Math.sqrt(firstNumber);
        break;
      case "%":
        result = firstNumber % secondNumber;
        break;
      case "default":
        result = "Error";
        break;
    }
    content.textContent = result;

    innit();
  }
});
