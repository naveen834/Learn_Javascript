// createElement('element)
// createTextNode('text content')
// element.appendChild(childElement)

// insertBefore('element','location')

const result = document.querySelector('#result');
const first = result.nextElementSibling;
console.log(first);
// create empty element

const bodyDiv = document.createElement('div');
// create text node
const text = document.createTextNode('a simple body div');
bodyDiv.appendChild(text);
// document.body.appendChild(bodyDiv);
document.body.insertBefore(bodyDiv, result);
// result element
const headings = document.createElement('h2');
const headingText = document.createTextNode('a dynamic heading text');
headings.appendChild(headingText);
// headings.classList.add('blue');
// result.appendChild(headings);
document.body.insertBefore(headings, first);
console.log(result.children);

const smallHeading = document.createElement('h6');
const smallText = document.createTextNode('a dynamic heading text');
smallHeading.classList.add('red');
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading, bodyDiv);

// prepend/innerText
const heading = document.createElement('h5');
heading.innerText = 'i am a dynamic heading using innerText';
document.body.prepend(heading);

// remove/removeChild
const result2 = document.querySelector('#result');
// result.remove();   ---> Removes dynamic element
result.removeChild(result.querySelector(`h1`)); //removes child whose type is given above

// innerHTML/textContent
const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');
console.log(list.textContent);
console.log(list.innerHTML);

const ul = document.createElement('ul');
ul.innerHTML = `<li class="item">list item</li>`;
document.body.appendChild(ul);

// CSS
div.classList.add('red');

// select element -- addEventListener() -- what event, what to do
const btn = document.querySelector('button');
var clickCount = 0;
btn.addEventListener('click', function () {
  clickCount++;
  if (clickCount % 2 === 1) {
    div.classList.add('blue');
    btn.classList.add('btn-blue');
    console.log('click');
  } else if (clickCount % 2 === 0) {
    div.classList.remove('blue');
    btn.classList.remove('btn-blue');
  }
});

// click - fires after full action occurs
// mousedown - button is pressed/released
// mouseenter/mouseleave - moved onto/out -/of an element --kind of hover effect
btn.addEventListener('mousedown', function () {
  console.log('down');
});
btn.addEventListener('mouseup', function () {
  console.log('up');
});
headings.addEventListener('mouseenter', function () {
  headings.classList.remove('blue');
  headings.classList.add('red');
});
headings.addEventListener('mouseleave', function (e) {
  e.preventDefault();
  headings.classList.add('blue');
});

// keypress - when key is pressed
// keydown/keyup - when key is down/released
const nameInput = document.getElementById('formik');
// nameInput.addEventListener('keypress', function () {
//   console.log('Keypress');
// });  //works as you press key again & again
// nameInput.addEventListener('keydown', function () {
//   console.log('Keydown');
// });  //works until key remains pressed
nameInput.addEventListener('keyup', function () {
  console.log(nameInput.value);
}); //logs value of each key pressed until now

/* event object arg. --> info about triggered event...event.type,event.currentTarget,this keyword, prevent Default behaviour */
// currentTarget --> always refers to the element to which the event handler has been attached to
// target --> identifies the element on which the event occured
const btns = document.querySelectorAll('.btns');
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    // e.currentTarget.style.color = 'green';
    e.target.style.color = 'green';
  });
});

// allows select dynamic elements
// event propogation - order the events, event bubbling -->
// clicked event then bubbles up -- default
// event capturing - fires at the root and fires until reaches //target
const container = document.querySelector('.container');
const list2 = document.querySelector('.list-items');
function showBubbling(e) {
  console.log('current target', e.currentTarget);
  console.log('target', e.target);
  // if (e.target.classList.contains('link')) {
  //   console.log('you clicked link');
  //}
}
function stopPropagation(e) {
  console.log('you clicked on list');
  e.stopPropagation();
}

list2.addEventListener('click', showBubbling, { capture: true });
container.addEventListener('click', showBubbling, { capture: true });
// window.addEventListener('click', showBubbling, { capture: true });

const container2 = document.querySelector('.container2');
const btns5 = document.querySelector('.btn');
// const heading5 = document.querySelector('.heading');

function sayHello() {
  console.log('hello There');
}

btns5.addEventListener('click', function () {
  const element = container2.innerHTML;
  container2.innerHTML = `<h1 class="heading">i'm sitting inside container</h1>`;
  // container2.appendChild(element);
});
container2.addEventListener('click', function (e) {
  if (event.target.classList.contains('heading')) {
    console.log('hello There');
  }
});

// heading5.addEventListener('click', sayHello);

// prevent default
// how to get a value
const form = document.getElementById('form');
const name5 = document.getElementById('name');
const password = document.getElementById('password');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('form submitted');
  console.log(name5.value);
  console.log(password.value);
});
// Web Storage API - provided by browser storage
// session storage,local storage
// setItem, getItem, removeItem, clear
localStorage.setItem('name', 'john');
localStorage.setItem('password', 'blaallaa');
sessionStorage.setItem('name', 'john');

const name56 = localStorage.getItem('name');
console.log(name56);
localStorage.removeItem('name');
const anotherName = localStorage.getItem('name');
console.log(anotherName);
localStorage.clear();

// JSON.stringify(), JSON.parse()

const friends = ['john', 'fred', 'annie'];
localStorage.setItem('friends', JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem('friends'));
console.log(values);

let fruits;
if (localStorage.getItem('fruits')) {
  fruits.JSON.parse(localStorage.getItem('fruits'));
} else {
  fruits = [];
}
console.log(fruits);
fruits.push('apple');
fruits.push('orange');
localStorage.setItem('fruits', JSON.stringify(fruits));
