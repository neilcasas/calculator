// Create a query selector for all buttons
const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operators');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const backspaceButton = document.querySelector('.backspace');

// Display
const mainDisplay = document.querySelector('.lower');
const upperDisplay = document.querySelector('.upper');
et numberArray = []
l;
let tempNum = 0;
let num1 = 0;
let num2 = 0;


// Give event listener to all buttons
numberButtons.forEach(function(button) {


    button.addEventListener("click", function() {
        
        // Display button content and assign to a number
        numberArray.push(button.dataset.value);
        tempNum = Number(numberArray.join(''));
        mainDisplay.innerHTML = tempNum;

        // Change color on click
        button.classList.add("clicked");
        setTimeout(function(){
            button.classList.remove("clicked");
        }, 200);
    });
});

// Operators
operatorButtons.forEach(function(button){
    button.addEventListener("click", function(){
        // once clicked, move it up with the sign
        num2 = tempNum;
        tempNum = 0;
        upperDisplay.innerHTML = num2;
        mainDisplay.innerHTML = tempNum;
        numberArray = [];

        
        // Change color on click
        button.classList.add("clicked");
        setTimeout(function(){
            button.classList.remove("clicked");
        }, 200);

    });

});

// equals button
equalsButton.addEventListener("click", function(){
    num1 += num2;
    mainDisplay.innerHTML = num1;
})

// Clear button;
clearButton.addEventListener("click",function(){
    mainDisplay.innerHTML = 0;
    numberArray = [];
})

// Backspace button
backspaceButton.addEventListener("click", function() {
    numberArray.splice(numberArray.length - 1, 1);
    tempNum = Number(numberArray.join(''));
    mainDisplay.innerHTML = tempNum;
})

// Create function for operations
function add(x, y){
    return x + y;
}

/*

*/