'use strict';

/**
 * Buttons for numbers: 0,1,2,...,9
 */
const button0 = document.querySelector('.button0');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');
const button5 = document.querySelector('.button5');
const button6 = document.querySelector('.button6');
const button7 = document.querySelector('.button7');
const button8 = document.querySelector('.button8');
const button9 = document.querySelector('.button9');

/**
 * Buttons for operations: +, -, x, /
 */
const buttonplus = document.querySelector('.buttonplus');
const buttonminus = document.querySelector('.buttonminus');
const buttonmult = document.querySelector('.buttonmult');
const buttondiv = document.querySelector('.buttondiv');

/**
 * Button for erase content of output and reset operators.
 */
const buttonac = document.querySelector('.buttonac');

/**
 * Button for performing the operation.
 */
const buttonequals = document.querySelector('.buttonequals');

var value_a = undefined;
var value_b = undefined;
let operation = undefined;

button2.addEventListener('click', function () {
    if (value_a == undefined) {
        value_a = String(2);
        document.getElementById('result').innerText = String(value_a);
    } else if (value_a != undefined && operation == undefined && value_b == undefined) {
        value_a = String(value_a) + String(2);
        document.getElementById('result').innerText = String(value_a);
    } else if (value_a != undefined && operation != undefined && value_b == undefined) {
        value_b = String(2);
        document.getElementById('result').innerHTML = String(value_a) + String(operation) + String(value_b);
    } else if (value_a != undefined && operation != undefined && value_b != undefined) {
        value_b = String(value_b) + String(2);
        document.getElementById('result').innerHTML = String(value_a) + String(operation) + String(value_b);
    }
});

button3.addEventListener('click', function () {
    if (value_a == undefined) {
        value_a = String(3);
        document.getElementById('result').innerText = String(value_a);
    } else if (value_a != undefined && operation == undefined && value_b == undefined) {
        value_a = String(value_a) + String(3);
        document.getElementById('result').innerText = String(value_a);
    } else if (value_a != undefined && operation != undefined && value_b == undefined) {
        value_b = String(3);
        document.getElementById('result').innerHTML = String(value_a) + String(operation) + String(value_b);
    } else if (value_a != undefined && operation != undefined && value_b != undefined) {
        value_b = String(value_b) + String(3);
        document.getElementById('result').innerHTML = String(value_a) + String(operation) + String(value_b);
    }
});

/**
 * Define the symbols that represent the four possible operations:
 * +, -, x, /
 */
buttonplus.addEventListener('click', function () {
    operation = "+";
    document.getElementById('result').innerHTML = value_a + " " + operation;
});
buttonminus.addEventListener('click', function () {
    operation = "-";
});
buttonmult.addEventListener('click', function () {
    operation = "x";
});
buttondiv.addEventListener('click', function () {
    operation = "/";
});

/**
 * Perform the operation between the two values and output result.
 */
buttonequals.addEventListener('click', function () {
    if (operation == "+")
        document.getElementById('result').innerHTML = Number(value_a) + Number(value_b);

    if (operation == "-")
        document.getElementById('result').innerHTML = Number(value_a) - Number(value_b);

    if (operation == "x")
        document.getElementById('result').innerHTML = Number(value_a) * Number(value_b);

    if (operation == "/")
        document.getElementById('result').innerHTML = Number(value_a) / Number(value_b);
});

/**
 * Erase output for recomputation.
 */
buttonac.addEventListener('click', function () {
    operation = null;
    value_a = undefined;
    value_b = undefined;
    document.getElementById('result').innerHTML = null;
});