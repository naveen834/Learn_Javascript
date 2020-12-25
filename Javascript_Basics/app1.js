// Arrays and for loops

const names = ['anna', 'suzy', 'bob'];
const lastName = 'shakeandbake';
let newArray = [];
// for loop
for (let i = 0; i < names.length; i++) {
  newArray.push(`${names[i]}  ${lastName}`);
}
console.log(newArray);

// Functions, return, if, arrays, for loops
const gas = [20, 40, 100];
const food = [10, 40, 50];
function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total > 100) {
    console.log('Careful with Spending');
    return total;
  }
  return total;
}
console.log({ foodTotal: calculateTotal(food), gasTotal: calculateTotal(gas) });

// Reference vs value
// primitive Data Types
/* 1> Strings, Number, Symbol, Boolean, Undefined, Null, Arrays, Functions, Objects =object, typeof
2> When assigning primitive data type value to a variable, any changes are made directly to that variable, without affecting original values.
3> When assigning non-primitive data type value to a variable, which is done by reference, so any changes will affect all references */

let number = 1;
let number2 = number;
number2 = 7;
console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);

let person = { name: 'john' };
let person2 = person;
person2.name = 'susy';
console.log(`the first name ${person.name}`);
console.log(`the second name ${person2.name}`);

/* Null and undefined --> "no value"
  undefined - "JavaScript can't find a value"
  null - "developer sets the value" */
// variable without value  -- example of undefined
// missing function arguments  -- example of undefined
// missing object properties -- example of undefined
const number123 = 20 + undefined; //if null would be have been used , it evaluates to 20; --> null=0
console.log(number123);
// truthy and falsy
// "", '', ``, 0, -0, NaN, false, null, undefined
const text = 'john'; //evaluates else, if text = ''
if (text) {
  console.log(`hey the value truthy`);
} else {
  console.log(`hey the value falsy`);
}
// unary operator -- typeof
let tect = 'some text';
console.log(typeof text); //operand
// binary operator - assignement
let number3 = 3;
let number4 = 2 + 5;
// ternary operator ---> condition ? (runs if true) : (runs if false)

const value = 2 > 1;
value ? console.log(`value is true`) : console.log(`value is false`);

// Global vs Local Scope
// any variable outside code block {} is said to be in Global Scope
// can be access anywhere in the program
// Gotchas : name collisions, modify by mistake
let naam = 'bobo';
function calculate() {
  // some other code...
  console.log(naam);
  naam = 'orange';
  function inner() {
    naam = 'violet';
    console.log(`this is from inner function: ${naam}`);
  }
  inner();
}
calculate();
if (true) {
  console.log(naam);
  naam = 'pants';
}
console.log(`my name is ${naam}`);

// Local Scope
// can not be access from outside code
// if - NOT VAR
function calculateTotal() {
  const name = 'Jordan';
  becomesGlobal = 'global variable';
}
calculateTotal();
console.log(`my name is ${naam} becomesGlobal`);

// Variable Lookup
// {} - code block
const globalNumber = 5;
function add(num1, num2) {
  const result = num1 + num2 + globalNumber;
  function multiply() {
    const globalNumber = 100;
    const mul = result * globalNumber;
    console.log(mul);
  }
  multiply();
  return result;
}
console.log(add(3, 4));

// Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens
// Functions are first class objects - stored in a variable(expression), passed as an argument to another function, return from the function(closure)
// Higher Order Functions - accepts another function as an argument or returns another function as a result
// Callback Function - passed to a another function as an argument and executed inside that function
// function greetMorning(name) {
//   const myName = 'John';
//   console.log(`Good Morning: ${name}, my name is: ${myName}`);
// }
// function greetAfternoon(name) {
//   const myName = 'John';
//   console.log(`Good Afternoon: ${name}, my name is: ${myName}`);
// }
function morning(name) {
  return `Good Morning ${name.toUpperCase()}`;
}
function afternoon(name) {
  return `Good Afternoon ${name.repeat(3)}`;
}
function greet(name, burrito) {
  // burrito();
  const myName = 'John';
  console.log(`${burrito(name)}, my name is: ${myName}`);
  // burrito();
}
greet('bobo', morning);
greet('peter', afternoon);

// Powerful Arrays Methods
// forEach, map, filter, find, reduce
// Iterate over array - no for loop required
// Accept CALLBACK function as an argument, calls Callback against each item in a array, Reference Item in the Callback Parameter
const people = [0, 1, , 2, 3, 4];
// for Each --> does not return new array
const people3 = [
  { name: 'bob', age: 20, position: 'developer', id: 1, salary: 2000 },
  { name: 'peter', age: 25, position: 'designer', id: 2, salary: 3000 },
  { name: 'suzy', age: 30, position: 'the boss', id: 3, salary: 10000 },
];
// function Showperson(person) {
//   console.log(person.position.toUpperCase());
// }
// people3.forEach(Showperson);
people3.forEach(function (item) {
  console.log(item.name.toUpperCase());
});

// map --> does return a new array, does not change size of original array, uses values from original array when making new one

const ages = people3.map(function (person) {
  return person.age + 20;
});
const newPeople = people3.map(function (person) {
  return { firstName: person.name.toUpperCase(), oldAge: person.age + 20 };
});
const names3 = people3.map(function (person) {
  return `<h1>${person.name}</h1>`;
});
console.log(ages);
console.log(newPeople);
document.body.innerHTML = names3.join('');

// Filter --> does return new array, can manipulate size of new array, return based on condition
const youngPeople = people3.filter(function (person) {
  return person.age <= 25;
});
const developers = people3.filter(function (person) {
  return person.position === 'developer';
});
console.log(youngPeople);
console.log(developers);

// find --> returns single instance - (object), return first match, if no match undefined, great for getting unique value

const person3 = people3.find(function (person) {
  return person.id === 3;
});
console.log(person);
const person4 = people3.filter(function (person) {
  return person.id === 3;
});
console.log(person4);

// reduce --> iterates, callback function, reduces to a single value - number, array, object,
// 1st parameter ('acc') - total of all calculations
// 2nd parameter ('curr') - current iteration/value
const total3 = people3.reduce(function (acc, currItem) {
  console.log(`total ${acc}`);
  console.log(`current money: ${currItem.salary}`);
  acc += currItem.salary;
  return acc;
}, 100);

// Math --> Standard built-in objects -always available

// const number101 = 4.56789;
// const result = Math.sqrt(number101); //ceil,floor,PI
const result = Math.min(4, 5, 6, 7, 8, 9); //max
const number101 = Math.ceil(Math.random() * 10);
console.log(number101);
console.log(result);

// Date

const date = new Date();
console.log(date);
