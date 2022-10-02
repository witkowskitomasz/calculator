const backspace = document.querySelector('.backspace');
const clear = document.querySelector('.clear');
const percent = document.querySelector('.percent');
const division = document.querySelector('.division');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const multiplication = document.querySelector('.multiplication');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const subtraction = document.querySelector('.subtraction');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const adding = document.querySelector('.adding');   
const positiveNegative = document.querySelector('.positiveNegative');
const zero = document.querySelector('.zero');
const comma = document.querySelector('.comma');
const equals = document.querySelector('.equals');

const display = document.querySelector('.result');

let resultBox = [];
let number = [];

display.textContent = 0;

// Function to make a number 

const addNumber = (num) => {
    number.push(num);
    display.textContent = number.join('');
}

// Function to erase single number

const eraseBtn = () => {
    if (number.length > 1) {
    number.pop();
    display.textContent = number.join('');    
    } else {
        number = [];
        display.textContent = 0;
    }
    
}

//Function to erase All 2.0

const eraseAllBtn = () => {
    number = [];
    resultBox = [];
    display.textContent = 0;
}

//- + function

const posNeg = () => {
    if (number[0] == '-') {
        number.shift();
        display.textContent = number.join('');
    } else {
        number.unshift('-');
        display.textContent = number.join('');
    }
}

// Adding function

const addingFunction = () => {
    resultBox.push(number.join(''));
    resultBox.push('+');
    number = [];
    display.textContent = '+';
}

// multiplication function

const multiplicationFunction = () => {
    resultBox.push(number.join(''));
    resultBox.push('*');
    number = [];
    display.textContent = '*';
}

// percent function

const percentFunction = () => {
    resultBox.push(number.join(''));
    resultBox.push('%');
    number = [];
    display.textContent = '%';
}

// subtraction function

const subtractionFunction = () => {
    resultBox.push(number.join(''));
    resultBox.push('-');
    number = [];
    display.textContent = '-';
}

// division function

const divisionFunction = () => {
    resultBox.push(number.join(''));
    resultBox.push('/');
    number = [];
    display.textContent = '/';
}

// Equals function

const equalsFunction = () => {
    resultBox.push(number.join(''));
    const infNumber = resultBox.join('');
    const result = eval(infNumber);
    display.textContent = result;
}

one.addEventListener('click', addNumber.bind(null, 1));
two.addEventListener('click', addNumber.bind(null, 2));
three.addEventListener('click', addNumber.bind(null, 3));
four.addEventListener('click', addNumber.bind(null, 4));
five.addEventListener('click', addNumber.bind(null, 5));
six.addEventListener('click', addNumber.bind(null, 6));
seven.addEventListener('click', addNumber.bind(null, 7));
eight.addEventListener('click', addNumber.bind(null, 8));
nine.addEventListener('click', addNumber.bind(null, 9));
zero.addEventListener('click', addNumber.bind(null, 0));

backspace.addEventListener('click', eraseBtn);
clear.addEventListener('click', eraseAllBtn);
positiveNegative.addEventListener('click', posNeg);

adding.addEventListener('click', addingFunction);
multiplication.addEventListener('click', multiplicationFunction);
percent.addEventListener('click', percentFunction);
subtraction.addEventListener('click', subtractionFunction);
division.addEventListener('click', divisionFunction);
equals.addEventListener('click', equalsFunction);
