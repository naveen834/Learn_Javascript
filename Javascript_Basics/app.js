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
// can omit function name if assiging it to a different function, function expression
const addnum = function (num1, num2) {
  return num1 + num2;
};
// `const thirdValue = addnum(2, 4);
const values = [dimensions, addnum(3, 4)];
console.log(values);

// diff - hoisting,use - arrow func, libraries
const multiply = (num1, num2) => num1 * num2;

// Objects - key/value pairs, dot notation

const person = {
  name: 'Naveen',
  lastName: 'Chauhan',
  age: 36,
  education: false,
  married: true,
  siblings: ['vineeta', 'rajpal', 'divya'],
  greeting() {
    console.log('Hello my name is ' + person.name);
  },
};

person.greeting();
person.name = 'Momo';
console.log(person.name);

// Conditional Statements >, <, >=, <=, ==, ===, !=, !===
const value121 = 2 > 1; //becomes boolean because 2>1 is boolean
const value122 = 2 < 1;
if (value122) {
  console.log(typeof value121);
} else {
  console.log('hello ' + typeof value122);
}
// == -> checks value whereas === -> checks value and type
const num1 = 6; //type number
const num2 = '6'; //type string
const result123 = num1 === num2;
const result1233 = num1 !== num2;
if (result123) {
  //result = false run if or run else
  console.log('num1 not same as num2');
} else if (result1233) {
  console.log('num1 not same as num2 but eval thru else if state');
}

// Switch statements
const dice = 2;
switch (dice) {
  case 1:
    console.log('hello');
    break;
  case 2:
    console.log('world');
    break;
  case 3:
    console.log('hello world');
    break; //break stop dice case evaluation, otherwise code keeps on running
  default:
    console.log('Roll Dice');
}

// Loops -- run block of code repeatedly
// while -- condition first, code block second
let amount = 5;
while (amount > 0) {
  console.log('I have ' + amount + " dollars and I'm going");
  amount--;
}
// do while -- code block first, condition second
let money = 0;
do {
  console.log('You have ' + money + ' dollars');
  money++;
} while (money < 5);

// for -- run block of code repeatedly
let i;
for (i = 0; i < 4; i++) {
  console.log('and the number is: ' + i);
}
for (let number = 3; number > 0; number--) {
  console.log('and the number is: ' + number);
}

// String properties and methods--- wrapper string object
// javascript string methods -- google them
let text121 = ' Peter Jordan';
let result = text.length;
console.log(result);
console.log(text121.toLowerCase());
console.log(text121.toUpperCase());
console.log(text121.charAt(0));
console.log(text121.charAt(text121.length - 1));
console.log(text121.indexOf('p')); //case-sensitive but if character is not present in string returns -1
console.log(text121);
console.log(text121.trim()); //trims whitespace before string starts
console.log(text121.startsWith('Peter'));
console.log(text121.trim().toLowerCase().startsWith('peter'));
console.log(text121.slice(0, 3));
console.log(text121.slice(-3));

// Template Literals - ES6+
// backtick characters '' - above tab (left from one)
// Interpolation ${} - insert expression(value)
const name12345 = 'Naveen';
const age = 25;
const value12345 = `Hey it's ${name12345} and he is ${age} years old. And here is some maths ${
  4 + 4
}`;
console.log(value12345);

// Arrays Properties and Methods
let names = ['john', 'bobo', 'barry', 'fred', 1, 2, 3];
console.log(`length of array is ${names[names.length - 1]}`);
const lastNames = ['pepper', 'onion', 'banana'];
const allNames = names.concat(lastNames);
console.log(allNames);
// reverse -- method
console.log(allNames.reverse());

// unshift ,shift, push, pop
allNames.unshift('susy');
allNames.unshift('Anna');
console.log(allNames);
allNames.shift();
console.log(allNames);
allNames.push('avocado');
console.log(allNames);
allNames.pop();
allNames.pop();
// allNames.pop();
// allNames.pop();
// allNames.pop();
// allNames.pop();
// allNames.pop();
console.log(allNames);

// splice -- mutates original array
const specifiedNames = allNames.splice(0, 3);
console.log(specifiedNames);
console.log(allNames);
