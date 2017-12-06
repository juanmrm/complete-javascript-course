/////////////////////////////////////////////////
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


/////////////////////////////////////////////////
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


/////////////////////////////////////////////////
// LECTURE: Arrow functions
/*
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
*/


/////////////////////////////////////////////////
// LECTURE: Arrow functions 2
/*
// ES5
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    var self = this; // Workaround porque dentro de la callback function, this no sera el contexto 
                     // que esperabamos, sera el contexto global window
    document.querySelector('.green').addEventListener('click', function() {
      var str = 'This is box number ' + self.position + ' and it is ' + self.color;
      alert(str);
    })
  }
}
//box5.clickMe();

// ES6
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    document.querySelector('.green').addEventListener('click', () => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}
box6.clickMe();
*/

// const box66 = {
//   color: 'green',
//   position: 1,
//   clickMe: () => { // Si hacemos esto el this va a ser el global window y tampoco funcionaria.
//     document.querySelector('.green').addEventListener('click', () => {
//       var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//       alert(str);
//     });
//   }
// }
// box66.clickMe();

/*
function Person(name) {
  this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {
  
  var arr = friends.map(function(el) {
     return this.name + ' is friends with ' + el; 
  });
  
  console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function(friends) {
  var arr = friends.map(el => `${this.name} is friends with ${el}`);  
  console.log(arr);
}
new Person('Mike').myFriends6(friends);
*/


/////////////////////////////////////////////////
// LECTURE: Desctructuring
/*
// ES5
var john = ['John', 26];
// var name = john[0];
// var age = john[1];

// ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
  firsName: 'John',
  lastName: 'Smith'
};

const {firsName, lastName} = obj;
console.log(firsName);
console.log(lastName);

const {firsName: a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeAndRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, retirement] = calcAgeAndRetirement(1990);
console.log(age2);
console.log(retirement);
*/

/////////////////////////////////////////////////
// LECTURE: Arrays
/*
const boxes = document.querySelectorAll('.box');

// ES5
var boxesArray5 = Array.prototype.slice.call(boxes); // Hack para transformar nodeList a array
boxesArray5.forEach(function(cur) {
  cur.style.backgroundColor = 'dodgerblue';
});

// ES6
const boxesArray6 = Array.from(boxes);
boxesArray6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// ES5
for (let i = 0; i < boxesArray5.length; i++) {
  if (boxesArray5[i].className === 'box blue') { // Nos saltamos el segundo elemento que ya es azul
    continue;
  }
  boxesArray5[i].textContent = 'I changed to blue!';
}

for (const cur of boxesArray6) {
  if (cur.className.includes('blue')) { // Usamos tb includes, nuevo metodo de string en ES6
    continue;
  }
  cur.textContent = 'I changed to blue!';    
}

// ES5
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function(cur) {
  return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/

/////////////////////////////////////////////////
// LECTURE: Spread Operator
/*
function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages); // Llama a la funcion pasandole el array como argumento
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages); // Expande los elementos del array
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
// Cambiar el color del texto de todos estos elementos
const allNodes = [h, ...boxes];
Array.from(allNodes).forEach(cur => cur.style.color = 'purple');
*/

/////////////////////////////////////////////////
// LECTURE: Rest parameters
/*
// ES5
function isFullAge5() {
  console.log(arguments); // Variable especial a la que tenemos acceso en todas las funciones.
  var argsArr = Array.prototype.slice.call(arguments); // Transformamos a array.
  argsArr.forEach(function(cur) {
    console.log((2016 - cur) >= 18);
  })
}
// isFullAge5(1990, 1999, 1968);
// isFullAge5(1990, 1999, 1968, 2016, 1987);

// ES6
function isFullAge6(...years) { // Transforma los argumentos en un array
  years.forEach(cur => console.log((2016 - cur) >= 18));
}
isFullAge6(1990, 1999, 1968, 2016, 1987);
*/
/*
// ES5
function isFullAge5(limit) {
  var argsArr = Array.prototype.slice.call(arguments, 1); // Transformamos a array, excluyendo el primer argumento
  argsArr.forEach(function(cur) {
    console.log((2016 - cur) >= limit);
  })
}
//isFullAge5(16, 1990, 1999, 1968);

// ES6
function isFullAge6(limit, ...years) { // Transforma los argumentos en un array
  years.forEach(cur => console.log((2016 - cur) >= limit));
}
isFullAge6(16, 1990, 1999, 1968, 2016, 1987);
*/


/////////////////////////////////////////////////
// LECTURE: Default parameters

// ES5
/*
function SmithPerson(firsName, yearOfBirth, lastName, nationality) {

  lastName = lastName === undefined ? 'Smith' : lastName;
  nationality = nationality === undefined ? 'american' : nationality;

  this.firsName = firsName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson('John', 1990); // LLamamos con 2 argumentos y asignara a undefined el resto de parametros
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
*/

// ES6
function SmithPerson(firsName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
  this.firsName = firsName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson('John', 1990); // LLamamos con 2 argumentos y asignara a undefined el resto de parametros
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');