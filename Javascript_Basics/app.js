// document.write('hello world');
// alert('hello world);
// console.log('hello world');

document.write('hello world'); //document.write(name:'john'); ---> error[object object]
// alert('hello people');
console.log({ name: 'john' });

// Variables = contains digits, letter, underscore
// must start with letter, $, or _
// no keyword, no starting with number, is caseSensitive
let Name = 'Naveen kumar';
let address, zip, state;
address = '101 main street';
zip = '233222';
state = 'Haryana';
console.log(Name);
console.log(address);
console.log(zip);
console.log(state);
console.log(Name, address, zip, state);

// using var = function scope, let/const = block scope
var value = 'some value';
const lastName = 'Chauhan'; //value doesn't change once assigned

//  '' or ""
const name = 'divya';
const name2 = "john's courses are the best";

// String Concatenation - combine string values
//'' -- backticks easier option
const name3 = 'naveen';
const lastName1 = 'shake and bake';
console.log('Hello there your full name is:' + name3 + lastName1);

const website = 'google';
const url = 'https://www.' + website + '.com';
console.log(url);

// Numbers (Loosely Typed = don't declare type)
let number = -34.04;
console.log(number); //number are blue in javascript console, while strings are black

//  +=, -=, /=, *=, ++, --, %(modulus operator returns remainder)
number += 4;
number += 4;
number += 4;
number += 4;
number += 4;
number += 4;
number += 4;
console.log(number);

// Implicit type conversion
let number2 = '10';
let number3 = '23';
const result2 = number2 + number3;
console.log(result2); //string concatenation happen and this happens even when only one of them is string but,
const result3 = number2 % number3; //sub, mul, division, mod happens the way they do happen
console.log(result3); //shit happens remember it

/* Data Types - 7 total
Primitive - String, Number, boolean, Null, Undefined, Symbol(ES6),
Object - Arrays, Functions, Objects, typeof(operator{typeof variable/value}) */
const text = 'some text';
const number123 = 45;
let value123 = true;
const null123 = null; //returns Object
let name123; //Undefined
console.log(
  typeof text,
  typeof number123,
  typeof value123,
  typeof null123,
  typeof name123
);

// Arrays - [], 0 index based
const enemy = ['john', 'fred', 'annie', 'suzy', 45, undefined, null];
enemy[0] = 'anna';
console.log(enemy[0]);

// function -- declare,inovke
/* params(multiple), placeholders, local vars, arguments, use vars/value, undefined, return */
const suzy = 'Suzy';
function hello(Name, SecondName) {
  // logic
  console.log(SecondName);
  console.log('hello world ' + Name);
}

hello(); //if no parameters are passed, undefined is returned
hello('Bob');
hello(4);
hello(suzy, 'Bob');

const wallHeight = 80;
// return -- default --> undefined
function calculate(value) {
  // const newValue = value * 2.54;
  console.log('the value in cm is: ' + value * 2.54 + 'cm');
  return value * 2.54;
  console.log('hello'); //ignores this code
}
const height = calculate(wallHeight);

const width = calculate(100); //const without initialization throws error

const dimensions = [width, height];
console.log(dimensions);

function addValues(num1, num2) {
  return num1 + num2;
}
// can omit function name if assiging it to a different function
const addnum = function (num1, num2) {
  return num1 + num2;
};
// `const thirdValue = addnum(2, 4);
const values = [dimensions, addnum(3, 4)];
console.log(values);

// diff - hoisting,use - arrow func, libraries
