// Make functions for each function the calculator must have
// Print numbers to the display when pressed

const display = document.getElementById('display')
const btns = document.querySelectorAll('.number');
const equals = document.getElementById('equal')
const add = document.getElementById('plus')
const clearBtn = document.getElementById('c')
const minusBtn = document.getElementById('minus')
const timesBtn = document.getElementById('times')
const divideBtn = document.getElementById('divide')
var workingValue = undefined;
let firstArg = undefined;
let secondArg = undefined;

btns.forEach(item => {
    item.addEventListener('click', button => {
        display.textContent += item.textContent
        workingValue = display.textContent;
        console.log(workingValue)
    })
})

// Create a function plus that takes display as input, clears display,
// takes display as input again, detects when = is pressed, and prints an output

function plus() {
    display.textContent = '';
    firstArg = workingValue;
    equals.addEventListener('click', function() {
        secondArg = display.textContent;
        display.textContent = '';
        display.textContent = (parseInt(firstArg) + parseInt(secondArg));
        console.log(firstArg, secondArg)
        firstArg = display.textContent;
        secondArg = 0
        workingValue = display.textContent;
        this.removeEventListener('click', arguments.callee)
    })
}

function minus() {
    display.textContent = '';
    firstArg = workingValue;
    equals.addEventListener('click',function() {
        secondArg = display.textContent; 
        display.textContent = '';
        display.textContent = (parseInt(firstArg) - parseInt(secondArg));
        firstArg = display.textContent;
        secondArg = 0;
        workingValue = display.textContent;
        this.removeEventListener('click', arguments.callee)
    })
}

function times() {
    display.textContent = '';
    firstArg = workingValue;
    equals.addEventListener('click',function() {
        secondArg = display.textContent; 
        display.textContent = '';
        display.textContent = (parseInt(firstArg) * parseInt(secondArg));
        firstArg = display.textContent;
        secondArg = 0;
        workingValue = display.textContent;
        this.removeEventListener('click', arguments.callee)
    })
}

function divide() {
    display.textContent = '';
    firstArg = workingValue;
    equals.addEventListener('click',function() {
        secondArg = display.textContent; 
        display.textContent = '';
        display.textContent = (parseInt(firstArg) / parseInt(secondArg));
        firstArg = display.textContent;
        secondArg = 0;
        workingValue = display.textContent;
        this.removeEventListener('click', arguments.callee)
    })
}


function clear() {
    display.textContent = ''
    workingValue = 0
}

add.addEventListener('click', plus)
minusBtn.addEventListener('click', minus)
timesBtn.addEventListener('click', times)
divideBtn.addEventListener('click', divide)
clearBtn.addEventListener('click', clear)