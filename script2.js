// setup the variables for the different calculator buttons
const numbers = document.querySelectorAll('.btnNumber');
const clear = document.querySelector('.btnClear');
const neg = document.querySelector('.btnNegative');
const backspace = document.querySelector('.btnBackspace');
const operations = document.querySelectorAll('.btnOperation');
const decimal = document.querySelector('.btnDecimal');
const equal = document.querySelector('.btnEquals');

let currentDisplay = document.querySelector('.currentDisplay');
let outputDisplay = document.querySelector('.outputDisplay');
let decimalPressed = false;

// **************

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        addDigit(number.textContent);
    });
});

// **************

decimal.addEventListener('click', () => {
    decimalPressed = true;
    addDigit('.');
    decimal.disabled = true;
});

// **************

clear.addEventListener('click', () => {
    console.log('Clearing calc');
    currentDisplay.textContent = 0;
    outputDisplay.textContent = 0;
    decimal.disabled = false;
    equal.disable = false;
});

// operations.forEach((operation) => {
//     console.log(operation.textContent);
// })

// **************

function addDigit(num){
    // first digit and no decimal needed
    if(currentDisplay.textContent == 0 && decimalPressed == false){
        currentDisplay.textContent = num;
    }
    // first digit but number will be a decimal/float
    else if(currentDisplay.textContent == 0 && decimalPressed == true){
        currentDisplay.textContent = '0.';
    }
    // display already has digits
    else{
        currentDisplay.textContent = currentDisplay.textContent + num;
    }
}
