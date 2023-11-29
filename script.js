// Create a query selector for all buttons
const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operators');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const backspaceButton = document.querySelector('.backspace');

const addButton = document.querySelector('.add');
const subtractButton = document.querySelector('.subtract');
const multiplyButton = document.querySelector('.multiply');
const divideButton = document.querySelector('.divide');

// Display
const mainDisplay = document.querySelector('.lower');
const upperDisplay = document.querySelector('.upper');
let numberArray = [];
let displayArray = [];
let num1 = 0;
let num2 = 0;
let result = 0;
let operator = '';


// Give event listener to all buttons
numberButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        clickAnimation(button);
        displayContent(button);
    });
});


// Operators
operatorButtons.forEach(function(button){
    button.addEventListener("click", function(){

        // Include operator character
        operator = button.dataset.value;
        numberArray.push(operator);
        displayArray = numberArray.join('');
        upperDisplay.innerHTML = displayArray;

        // on click of an operator, switch nums and get new num1
        num2 = num1;
        num1 = 0;
        numberArray = [];
        mainDisplay.innerHTML = num1;

        // Change color on click
        clickAnimation(button);
    });
});

// equals button
equalsButton.addEventListener("click", function(){
    clickAnimation(equalsButton);
    operate();
});

// Clear button;
clearButton.addEventListener("click",function(){
    mainDisplay.innerHTML = 0;
    upperDisplay.innerHTML = '';
    displayArray = [];
    numberArray = [];
    num1 = 0;
    num2 = 0;
    result = 0;
    clickAnimation(clearButton);
});

// Backspace button
backspaceButton.addEventListener("click", function() {
    clickAnimation(backspaceButton);
    numberArray.splice(numberArray.length - 1,1);
    num1 = Number(numberArray.join(''));
    mainDisplay.innerHTML = num1;
});

function displayContent(button){

    // On every click, push number array with number value of button, and display as number
    numberArray.push(button.dataset.value);
    num1 = Number(numberArray.join(''));
    mainDisplay.innerHTML = num1;
}

function clickAnimation (button){
    button.classList.add("clicked");
    setTimeout(function(){
        button.classList.remove("clicked");
    }, 200);
}

function operate(){
    switch (operator) {
        case '+':
            result = add(num2, num1);
            break;
        case '-':
            result = subtract(num2, num1);
            break;
        case 'x':
            result = multiply(num2, num1);
            break;
        case '÷':
            result = divide(num2, num1);
            break;
        default:
            result = num1;
    }

    mainDisplay.innerHTML = result;
    upperDisplay.innerHTML = '';

    // reset values
    num1 = 0;
    num2 = 0;
    numberArray = [];
    displayArray = [];
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}
