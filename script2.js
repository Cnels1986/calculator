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

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        addDigit(number.textContent);
    });
});

decimal.addEventListener('click', () => {
    disableDecimal();
    addDigit('.');
});

clear.addEventListener('click', () => {
    currentDisplay.textContent = 0;
    outputDisplay.textContent = 0;
    enableDecimal();
    equal.disabled = false;
    operationSelected = ''
});

operations.forEach((operation) => {
    operation.addEventListener('click', () => {
        console.log(operation.textContent + ' pressed');
        if(operationSelected != ''){
            changeOperation(operation.textContent);
        } else{
            operationSelected = operation.textContent;
            setOperation(operation.textContent);
        };
    });
});

equal.addEventListener('click', () => {
    operate();
});

backspace.addEventListener('click', () => {
    removeDigit(currentDisplay.textContent);
});

function removeDigit(num){
    if(num == '0'){
        console.log('nothing to remove');
        return;
    } else{
        let digit = num.slice(-1);
        // enables decimal button if its being removed from display
        console.log('removing ' + digit);
        if(digit == '.'){
            enableDecimal();
        }
        currentDisplay.textContent = num.slice(0,-1);
        if(currentDisplay.textContent == ''){
            currentDisplay.textContent = 0;
        }
    }
}

function addDigit(num){
    // first digit and no decimal needed
    if(currentDisplay.textContent == '0' && decimalPressed == false){
        currentDisplay.textContent = num;
    }
    // first digit but number will be a decimal/float
    else if(currentDisplay.textContent == '0' && decimalPressed == true){
        currentDisplay.textContent = '0.';
    }
    // display already has digits
    else{
        currentDisplay.textContent = currentDisplay.textContent + num;
    }
}

function setOperation(operation){
    // adds a 0 at end of number if decimal was pressed and nothing else added
    if(currentDisplay.textContent.slice(-1) == '.') {    addDigit(0);    }
    firstOperand = currentDisplay.textContent;
    currentDisplay.textContent = 0;
    enableDecimal();
    // decimal.disabled = false;
    equal.disabled = false;
    outputDisplay.textContent = firstOperand + ' ' + operation;
};

function changeOperation(operation){
    outputDisplay.textContent = outputDisplay.textContent.slice(0,-2) + ' ' + operation;
    operationSelected = operation;
};

function disableDecimal(){
    decimal.disabled = true;
    decimalPressed = true;
}

function enableDecimal(){
    decimal.disabled = false;
    decimalPressed = false;
}

function operate(){
    if(currentDisplay.textContent.slice(-1) == '.') {    addDigit(0);    }
    secondOperand = currentDisplay.textContent;
    // prevents dividing by 0
    if(operationSelected == '÷' && secondOperand == 0){
        currentDisplay.classList.remove('makeRed');
        currentDisplay.classList.remove('makeBlack');
        currentDisplay.classList.add('makeRed');
        alert('Can\'t divide by 0');
        console.log('DIVIDING BY 0!!!');
        currentDisplay.classList.add('makeBlack');
    } else{
        outputDisplay.textContent = outputDisplay.textContent + ' ' + secondOperand + ' = ';
        console.log('first operand = ' + firstOperand);
        console.log('operation = ' + operationSelected);
        console.log('second operand = ' + secondOperand);
        switch(operationSelected) {
            case '+':
                console.log('addition');
                currentDisplay.textContent = Number(firstOperand) + Number(secondOperand);
                break;
            case '-':
                currentDisplay.textContent = Number(firstOperand) - Number(secondOperand);
                console.log('subtraction');
                break;
            case 'x':
                currentDisplay.textContent = Number(firstOperand) * Number(secondOperand);
                console.log('multiplication');
                break;
            case '÷':
                currentDisplay.textContent = Number(firstOperand) / Number(secondOperand);
                console.log('division');
                break;
            default:
                console.log('operation failed');
                break;
        }
    }
}
