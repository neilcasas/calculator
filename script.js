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
let num1 = 0;
let num2 = 0;
let result = 0;
let temp = 0;
let operator = null;

// Give event listener to all buttons
numberButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        clickAnimation(button);
        appendNumArray(button);
        // reset temp on key press 
        temp = 0;
    });
});
 
// Operators
operatorButtons.forEach(function(button){
    button.addEventListener("click", function(){

        // allow continuous computing and reset temp
        if (temp !=0) {
            num2 = temp;
            temp = 0;
        }

        // if num 2 is empty, switch values with num1
        if (num2 === 0) 
            num2 = num1;
        
        // else if both numbers are present, operate and then display in upper 
        else if (num1 !==0 && num2 !==0){
            operate();
            num2 = result;
        } 
        // Update operator character and display
        operator = button.dataset.value;
        upperDisplay.innerHTML = `${num2} ${operator}`;  
        num1 = 0;
        numberArray = [];
        mainDisplay.innerHTML = 0;

        // Change color on click
        clickAnimation(button);
    });
});

// Invoke operate function on equals9/
equalsButton.addEventListener("click", function(){
    clickAnimation(equalsButton);
    operate();
    
    // Display and reset upper display
    mainDisplay.innerHTML = result;
    upperDisplay.innerHTML = '';
    
    resetValues();
});

// Clear button
clearButton.addEventListener("click",function(){
    mainDisplay.innerHTML = 0;
    upperDisplay.innerHTML = '';
    resetValues();
    clickAnimation(clearButton);
});

// Backspace button
backspaceButton.addEventListener("click", function() {
    clickAnimation(backspaceButton);
    
    // Remove one character from the last index and display
    numberArray.splice(numberArray.length - 1,1);
    num1 = Number(numberArray.join(''));
    mainDisplay.innerHTML = num1;
});

// On every click, push number array with number value of button, and display as number
function appendNumArray(button){
    numberArray.push(button.dataset.value);
    num1 = Number(numberArray.join(''));
    mainDisplay.innerHTML = num1;
}

// Add an animation on click
function clickAnimation (button){
    button.classList.add("clicked");
    setTimeout(function(){
        button.classList.remove("clicked");
    }, 200);
}

function operate(){
    switch (operator) {
        // Different cases depending on operators
        case '+':
            result = add(num2, num1);
            break;
        case '-':
            result = subtract(num2, num1);
            break;

        // Compute only int values
        case '*':
            result = multiply(num2, num1);
            break;
        case '/':
            result = divide(num2, num1);
            break;
        default:
            result = num1;
    }
}

function resetValues(){
    numberArray = [];
    num1 = 0;
    num2 = 0;

    // Continue computing by saving the previous result in temp, and resetting result
    temp = result;
    result = 0;
}

// Functions for arithmetic operators
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2){
    return Math.trunc(num1 * num2);
}

function divide(num1, num2){
    if(num2 === 0) 
        return "error";
    else
        return Math.trunc(num1 / num2);
}

// Adding keyboard input
document.addEventListener("keydown", function(event) {
    const key = event.key;

    // Check if the key is a number or decimal point
    if (!isNaN(key)) {
        const keyButton = document.querySelector(`.numbers[data-value="${key}"]`);
        if (keyButton) {
            clickAnimation(keyButton);
            appendNumArray(keyButton);
            temp = 0;
        }
    } else if (['+', '-', '*', '/'].includes(key)) {
        const keyButton = document.querySelector(`.operators[data-value="${key}"]`);
        if (keyButton) {
            // allow continuous computing and reset temp
            if (temp !=0) {
                num2 = temp;
                temp = 0;
            }
            // if num 2 is empty, switch values with num1
            if (num2 === 0) 
                num2 = num1;
            
            // else if both numbers are present, operate and then display in upper 
            else if (num1 !==0 && num2 !==0){
                operate();
                num2 = result;
            } 
            // Update operator character and display
            operator = keyButton.dataset.value;
            upperDisplay.innerHTML = `${num2} ${operator}`;  
            num1 = 0;
            numberArray = [];
            mainDisplay.innerHTML = 0;
        }
        clickAnimation(keyButton);
    } else if (key === 'Enter') {
        // Trigger equals button
        clickAnimation(equalsButton);
        operate();
        mainDisplay.innerHTML = result;
        upperDisplay.innerHTML = '';
        resetValues();
    } else if (key === 'Backspace') {
        // Trigger backspace button
        clickAnimation(backspaceButton);
        numberArray.splice(numberArray.length - 1, 1);
        num1 = Number(numberArray.join(''));
        mainDisplay.innerHTML = num1;
        }
    });
