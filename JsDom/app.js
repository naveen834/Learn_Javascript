// DOM -- Similar to css

// Select element/group of elements i want to modify
document.body.style.backgroundColor = 'rgba(10,10,100,0.8)';
document.body.style.color = 'pink';
// asign to a variable
const btn = document.getElementById('btn');
// returns a node object or a node list, which is an arraylike object
btn.style.backgroundColor = 'black';
btn.style.color = 'red';
// also works this way
document.querySelector('element');

// console.log(window);--->global window object
// window object = browser api
// document
// console.dir(document) --> tells all properties for our node

// getElementsByTagName('tagname');
// node-list = array-like object
// index, length property but not array methods
const headings = document.getElementsByTagName('h2');
headings[0].style.color = 'red';
// console.log(headings.length);

const items = document.getElementsByTagName('li');
const Items = [...items];
Items.forEach(function (item) {
  item.style.color = 'rgb(0, 204, 102)';
}); //does not work with items but works with Items

// getElementsByClassName('classname');
// querySelector('any css'); - selects single
// querySelectorAll('any css'); - selects all

const result = document.querySelector('ul');
result.style.background = 'green';
// returns array
const result2 = document.querySelectorAll('ul li');
result2[0].style.color = 'purple';
result2.forEach(function (item) {
  item.style.fontSize = '1.5rem';
});
const lastItem = document.querySelector('li:nth-last-child(2)');
lastItem.style.color = 'blue';
// ChildNodes - returns all childNodes including whitespace
// chidlren, firstChild, lastChild
const children = result.children;
console.log(children);

// parentElement
const headings2 = document.querySelector('h2');
const parent = headings2.parentElement;
parent.style.color = 'black';
parent.style.background = 'White';

// previousElementSibling, nextELementSibling
const secondEl = lastItem.previousElementSibling;

// nodeValue
// textContent
const item = document.querySelector('h1');
const value2 = item.childNodes[0].nodeValue;
const easyValue = item.textContent;
console.log(easyValue);

// getAttribute/setAttribute
const classVal = item.getAttribute('class');
secondEl.setAttribute('id', 'first');
secondEl.textContent = 'i have a background';
secondEl.style.background = 'pink';

// className/classList[add/remove]
result.classList.add('btn');
