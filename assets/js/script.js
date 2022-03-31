let splashScreen = document.getElementsByClassName('splash')[0];
let startCount = document.getElementsByClassName('count')[0];

let info = document.getElementById('info');
let modal = document.getElementById('modal-info');
let tutup = document.getElementsByClassName('close')[0];
let out = document.getElementById('back');

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const calculatorScreen = document.querySelector('.calculator-screen');
const equals = document.querySelector('.equals');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.all-clear');
const deleteExisting = document.querySelector('.delete');
const decimal = document.querySelector('.decimal');
const percentage = document.querySelector('.percentage');

// menu utama
startCount.addEventListener('click', () => {
    splashScreen.style.top = '-120vh';
    splashScreen.style.transition = '.75s';
});

info.onclick = function() {
    modal.style.display ='block';
}

tutup.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
            modal.style.display ='none';
        }
}

back.addEventListener('click', () => {
    if (confirm("Anda yakin ingin kembali ke halaman menu?")) {
        splashScreen.style.top = '0';
        splashScreen.style.transition = '.75s';
        clearAll();
        updateScreen(currentNumber);
    };
});
// end menu utama

// calculator
// update screen
const updateScreen = (number) => {
    calculatorScreen.value = number;
}
// end update screen

// equal
equals.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
});
// equal

// input numbers
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});
// end input numbers

// input operators
operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        inputOperator(event.target.value);
    });
});

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
}
// end input operators

// count
const calculate = () => {
    let result = '';
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            return;
    }
    currentNumber = result;
    calculationOperator = '';
}
// end count

// all clear
clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
});

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}
// end all clear

// delete
deleteExisting.addEventListener('click', (event) => {
    deleteClosest(event.target.value);
    updateScreen(currentNumber);
});

const deleteClosest = () => {
    currentNumber = currentNumber.toString().slice(0, -1);
}
// end delete

// input decimal
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
}
// end input decimal

// input percentage
percentage.addEventListener('click', (event) => {
    inputPercentage(event.target.value);
    updateScreen(currentNumber);
});

inputPercentage = (persen) => {
    if(currentNumber.includes('%')){
        return;
    }
    currentNumber += persen;
}
// end percentage
// end calculator
