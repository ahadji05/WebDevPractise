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
 * Buttons for operations: +, -, x, /, =
 */
const buttonplus = document.querySelector('.buttonplus');
const buttonminus = document.querySelector('.buttonminus');
const buttonmult = document.querySelector('.buttonmult');
const buttondiv = document.querySelector('.buttondiv');
const buttonequals = document.querySelector('.buttonequals');

/**
 * Button for erase content of output and reset operators.
 */
const buttonac = document.querySelector('.buttonac');

var value_a = undefined;
var value_b = undefined;
var operation = undefined;

function erase_input() {
    value_a = undefined;
    value_b = undefined;
    operation = undefined;
}

function do_operation() {
    switch (operation) {
        case "+":
            return Number(value_a) + Number(value_b);
        case "-":
            return Number(value_a) - Number(value_b);
        case "x":
            return Number(value_a) * Number(value_b);
        case "/":
            return Number(value_a) / Number(value_b);
    }
}

function button_number(my_value) {
    var text = '';
    if (value_a == undefined) {
        value_a = my_value;
        text = String(value_a);
    } else if (value_a != undefined && operation == undefined) {
        value_a = String(value_a) + String(my_value);
        text = String(value_a);
    } else if (value_a != undefined && operation != undefined && value_b == undefined) {
        value_b = my_value;
        text = String(value_b);
    } else if (value_a != undefined && operation != undefined && value_b != undefined) {
        value_b = String(value_b) + String(my_value);
        text = String(value_b);
    }
    return text;
}

button0.addEventListener('click', function () {
    document.getElementById('result').innerText = String(button_number(0));
});

button1.addEventListener('click', function () {
    document.getElementById('result').innerText = String(button_number(1));
});

button2.addEventListener('click', function () {
    document.getElementById('result').innerText = String(button_number(2));
});

button3.addEventListener('click', function () {
    document.getElementById('result').innerText = String(button_number(3));
});

button4.addEventListener('click', function () {
    document.getElementById('result').innerText = String(button_number(4));
});

button5.addEventListener('click', function () {
    document.getElementById('result').innerText = String(button_number(5));
});

button6.addEventListener('click', function () {
    document.getElementById('result').innerText = String(button_number(6));
});

button7.addEventListener('click', function () {
    document.getElementById('result').innerText = String(button_number(7));
});

button8.addEventListener('click', function () {
    document.getElementById('result').innerText = String(button_number(8));
});

button9.addEventListener('click', function () {
    document.getElementById('result').innerText = String(button_number(9));
});

/**
 * The result of operation is always returned to valua_b, whereas value_b is reset to undefined,
 * so that operation can receive new entries to re-apply over the existing result.
 */
function do_operation_and_update_screen() {
    if (value_a != undefined && value_b != undefined) {
        value_a = do_operation();
        document.getElementById('result').innerHTML = String(value_a);
        value_b = undefined;
    }
}


/**
 * Program buttons: +,-,x,/ and =
 */
buttonplus.addEventListener('click', function () {
    do_operation_and_update_screen();
    if (value_a != undefined)
        operation = "+";
});

buttonminus.addEventListener('click', function () {
    do_operation_and_update_screen();
    if (value_a != undefined) operation = "-";
});

buttonmult.addEventListener('click', function () {
    do_operation_and_update_screen();
    if (value_a != undefined) operation = "x";
});

buttondiv.addEventListener('click', function () {
    do_operation_and_update_screen();
    if (value_a != undefined) operation = "/";
});

buttonequals.addEventListener('click', function () {
    do_operation_and_update_screen();
});

/**
 * Erase content to restart calculator.
 */
buttonac.addEventListener('click', function () {
    erase_input();
    document.getElementById('result').innerHTML = null;
});