// setup the variables for the different calculator buttons
const numbers = document.querySelectorAll('.btnNumber');
const clear = document.querySelector('.btnClear');
const neg = document.querySelector('.btnNegative');
const backspace = document.querySelector('.btnBackspace');
const operations = document.querySelectorAll('.btnOperation');
const decimal = document.querySelector('.btnDecimal');
const equal = document.querySelector('.btnEquals');
equal.disabled = true;

let currentDisplay = document.querySelector('.currentDisplay');
let outputDisplay = document.querySelector('.outputDisplay');
let decimalPressed = false;
let operationSelected = '';
let firstOperand = 0;
let secondOperand = 0;

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
    decimalPressed = false;
    equal.disable = false;
    operationSelected = ''
});

// **************

operations.forEach((operation) => {
    operation.addEventListener('click', () => {
        console.log(operation.textContent + ' pressed');
        operationSelected = operation.textContent;
        setOperation(operation.textContent);
    });
});

// **************

equal.addEventListener('click', () => {
    console.log('Equal button pressed');
    if(operationSelected == '÷' && secondOperand == 0){
        // poorly coded animation/transition to change to red to black if dividing by 0... need to improve
        currentDisplay.classList.remove('makeRed');
        currentDisplay.classList.remove('makeBlack');
        currentDisplay.classList.add('makeRed');
        alert('Can\'t divide by 0');
        currentDisplay.classList.add('makeBlack');
    }
});

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

function setOperation(operation){
    firstOperand = currentDisplay.textContent;
    currentDisplay.textContent = 0;
    equal.disabled = false;
    if(outputDisplay.textContent == 0){
        outputDisplay.textContent = firstOperand + ' ' + operation;
    } else {

    }
};
