// Create a query selector for all buttons
const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operators');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const backspaceButton = document.querySelector('.backspace');

// Display
const mainDisplay = document.querySelector('.lower');

let displayArray = [];
let number1 = 0;
let number2 = 0;

// Give event listener to all buttons
numberButtons.forEach(function(button) {


    button.addEventListener("click", function() {
        
        // Display button content and assign to a number
        displayArray.push(button.dataset.value);
        number = Number(displayArray.join(''));
        mainDisplay.innerHTML = number;

        // Change color on click
        button.classList.add("clicked");
        setTimeout(function(){
            button.classList.remove("clicked");
        }, 200);
    });
});

operatorButtons.forEach(function(button){
    button.addEventListener("click", function(){
        // Change color on click
        button.classList.add("clicked");
        setTimeout(function(){
            button.classList.remove("clicked");
        }, 200);
    });

});

// Clear button;
clearButton.addEventListener("click",function(){
    mainDisplay.innerHTML = 0;
    displayArray = [];
})

backspaceButton.addEventListener("click", function() {
    mainDisplay.innerHTML -= buttonValue;
})

// Create function for operations
