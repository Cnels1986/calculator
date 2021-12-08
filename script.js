// 1 = addition
// 2 = subtraction
// 3 = multiplication
// 4 = division
let num1;
let num2;
let operation = 0;          //0 will not be an operation
let negative = false;       //will track if number should be negative


const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.value == 'equal'){
            console.log('equal');
        } else if(button.value === 'add'){
            console.log('addition');
        } else if(button.value === 'subtract'){
            console.log('subtract');
        } else if(button.value === 'multiply'){
            console.log('multiply');
        } else if(button.value === 'divide'){
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
            if(num1 == undefined){
                num1 = button.value;
                console.log('num1: ' + num1);
            } else{
                num2 = button.value;
                console.log('num2: ' + num2);
            }
        };
    });
});

function reset(){
    num1 = undefined;
    num2 = undefined;
    operation = 0;
    negative = false;
    // clear display
}
