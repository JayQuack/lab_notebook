// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

let userInput = document.querySelector("#userInput1");
let copy = document.querySelector("#copy");
let output = document.querySelector("#output1");

// add an event listener on the target element

copy.addEventListener("click", handleClick);

// callback function to handle event

function handleClick(event) {
  output.textContent = userInput.value;
}

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

let userInput2 = document.querySelector("#userInput2");

// add an event listener on the target element

userInput2.addEventListener("input", handleInput);
let element = document.createElement("div");
let section = document.querySelector("#inputEventExample");
element.setAttribute("class", "output2");
section.append(element);

// callback function to handle event

function handleInput(event) {
  element.textContent = userInput2.value;
}
