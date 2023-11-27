// Create a query selector for all buttons
const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operators');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const backspaceButton = document.querySelector('.backspace');

// Display
const mainDisplay = document.querySelector('.lower');

// Give event listener to all buttons
numberButtons.forEach(function(button) {

    // Display button content
    button.addEventListener("click", function() {
        const buttonValue = button.textContent;
        mainDisplay.innerHTML = buttonValue;
    });
});
// Clear button;
clearButton.addEventListener("click",function(){
    mainDisplay.innerHTML = 0;
})