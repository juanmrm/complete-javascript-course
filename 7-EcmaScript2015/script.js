// LECTURE: let and const

// ES5
/*
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller'; // Error porque no se puede cambiar la constante
console.log(name6);
*/

/*
// ES5
function driversLicence5(passedTest) {
  if (passedTest) {
    console.log(firstName); // Hosting -> mostrara undefined
    var firstName = 'John'; // var is function-scope
    var yearOfBirth = 1990;    
  }

  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence5(true);

// ES6
function driversLicence6(passedTest) {

  // console.log(firstName); // No podemos usarla antes de que sea declarada.
  let firstName;
  const yearOfBirth = 1990;

  if (passedTest) {
    firstName = 'John'; // Con let y const son block-scope    
  }

  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence6(true);

// Pintara 0, 1, 2, 3, 4, 5
var i = 23;
for (var i = 0; i < 5; i++){
  console.log(i);
}
console.log(i);

// Pintara 0, 1, 2, 3, 4, 23
let j = 23;
for (let j = 0; j < 5; j++){
  console.log(j);
}
console.log(j);
*/

// LECTURE: Blocks and IIFEs

// ES6
/*
{
  const a = 1; // Block-scoped
  let b = 2; // Block-scoped
  var c = 3; // Function-scoped
}
// console.log(a + b);
console.log(c);

// ES5
(function() {
  var c = 3;
})()
*/
// console.log(c);

// LECTURE: Strings
/*
let firstName = 'John';
let lastName = 'Smith';

const yearOfBirth = 1990;

function calcAge(year) {
  return new Date().getFullYear() - year;
}

// ES5
console.log('This is '+ firstName + ' ' + lastName + '. He was born in ' + 
            yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes('oh'));
console.log(`${firstName } `.repeat(5));
*/

// LECTURE: Arrow functions
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
  return new Date().getFullYear() - el;
});
console.log(ages5);

// ES6
let ages6 = years.map(el => new Date().getFullYear() - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${new Date().getUTCFullYear() - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);