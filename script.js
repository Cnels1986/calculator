// 1 = addition
// 2 = subtraction
// 3 = multiplication
// 4 = division
let num1;
let num2;
let operation = 0;          //0 will not be an operation
let negative = false;       //will track if number should be negative
let decimal = false;
let total = 0;              //value that will be displayed
// ??? use a string for the 2nd display that will store num and operators


const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // use a switch statement maybe
        if(button.value == 'equal'){
            console.log('equal');
        } else if(button.value === 'add'){
            operation = 1;
            console.log('addition');
        } else if(button.value === 'subtract'){
            console.log('subtract');
            operation = 2;
        } else if(button.value === 'multiply'){
            operation = 3;
            console.log('multiply');
        } else if(button.value === 'divide'){
            operation = 4;
            console.log('divide');
        } else if(button.value === 'backspace'){
            console.log('backspace');
        } else if(button.value === 'negative'){
            console.log('negative');
        } else if(button.value === 'clear'){
            reset();
            console.log("Calculator reset");
        } else if(button.value === 'decimal'){
            console.log('decimal');
        } else{
            // will need to determine if multiple digits are being entered
            if(num1 == undefined){
                num1 = button.value;
                console.log('num1: ' + num1);
            } else if (operation != 0){
                // an operation button has been selected, move to second number
                num2 = button.value;
                console.log('num2: ' + num2);
            } else {

            }
        };
    });
});

function reset(){
    num1 = undefined;
    num2 = undefined;
    operation = 0;
    negative = false;
    decimal = false;
    total = 0;
    // clear display
}

function addDigit(num, digit){
    if(num == undefined && decimal == true){
        let temp = '0.' + digit;
        return parseFloat(temp);
    } else if(decimal == true){
        console.log('adding dec');
        let temp = num.toString();
        return parseFloat(temp + '.' + digit);
    } else{
        return (num*10) + digit;
    }
}
