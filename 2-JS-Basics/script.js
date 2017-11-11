///////////////////////////////////////////////////////////
// LECTURE: VARIABLES
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

///////////////////////////////////////////////////////////
// LECTURE: VARIABLES 2
/*
var name = 'John';
var age = 26;

//console.log(name + age); // Se va a convertir a un string concatenando nombre y age
//console.log(age + age); // Sigue siendo un number

var job, isMarried;

//console.log(job); // Undefined

job = 'teacher';
isMarried = false;
console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

age = 'thirty six';
job = 'driver';
console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is the last name?');
console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);
*/

///////////////////////////////////////////////////////////
// LECTURE: OPERATORS
/*
var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
// ageJohn = ageMark = 26;
// ageJohn = 26;

ageJohn++; // ageJohn = ageJohn + 1;
ageMark *= 2; // ageMark = ageMark * 2;

console.log(ageJohn);
console.log(ageMark);
*/

///////////////////////////////////////////////////////////
// LECTURE: if / else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if(isMarried === 'yes') {
  console.log(name + ' is married!');
} else {
  console.log(name + ' will hopefully marry soon :)');
}

isMarried = false;

if(isMarried) {
  console.log('YES!');
} else {
  console.log('NO!');
}

if(isMarried) {
  console.log('YES!');
}

//Diferences between == and ===
if (23 == '23') {
  console.log('Equals with ==');
}

if (23 === '23') {
  console.log('Equals with ===');
}
*/

///////////////////////////////////////////////////////////
// LECTURE: boolean logic and switch
/*
var age = 20;

if(age < 20) {
  console.log('John is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log('John is a young man.');
} else {
  console.log('John is a man.');
}

var job = prompt('What does John do?');

switch (job) {
  case 'teacher':
    console.log('John teaches kids');
    break;
  case 'driver':
    console.log('John drives a cab in Lisbon.');
    break;
  case 'cop':
    console.log('John helps fight crime.');
    break;
  default:
    console.log('John does something else.');
}
*/

///////////////////////////////////////////////////////////
// CODING CHALLENGE 1 (ver coding_challenge_1.png)
/*
var heightJohn = 192; 
var ageJohn = 26;

var heightMike = 165; 
var ageMike = 29;

var heightMary = 180; 
var ageMary = 45;

var scoreJohn = heightJohn + 5 * ageJohn;
var scoreMike = heightMike + 5 * ageMike;
var scoreMary = heightMary + 5 * ageMary;

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John wins with score: ' + scoreJohn);  
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike wins with score: ' + scoreMike);
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary wins with score: ' + scoreMary);
} else {
  console.log('It\'s a draw.');
}
*/


///////////////////////////////////////////////////////////
// LECTURE: Functions

/*
function calculateAge(yearOfBirth) {
  var age = 2017 - yearOfBirth;
  return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
console.log(ageJohn);

function yearsUntilRetirement(name, yearOfBirth) {
  var age = calculateAge(yearOfBirth);
  var retirement = 65 - age;
  if (retirement >= 0) {
    console.log(name + ' retires in '+ retirement + ' years.');
  }
  else {
    console.log(name + ' is already retired.');
  }
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
*/

///////////////////////////////////////////////////////////
// LECTURE: Statements and expressions
/*
// Function Statements
function someFunction(par) {
  // code
}

// Function Expression
var someFun = function (par) {
  // code
}

// Expressions
3 + 4;
var x = 3;

// Statements
if (x === 5) {
  // do something
}
*/

///////////////////////////////////////////////////////////
// LECTURE: Arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);
console.log(names[1]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

if (john.indexOf('teacher') === -1){
  console.log('John is not a teacher');
}
*/

///////////////////////////////////////////////////////////
// LECTURE: Objects
/*
var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false
};

console.log(john);
console.log(john.lastName);
console.log(john['lastName']);

var job = 'job';
console.log(john[job]);

john.lastName = 'Miller';
john['job'] = 'programmer';
console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane.job = 'retired';
jane['isMarried'] = true;
console.log(jane);
*/

///////////////////////////////////////////////////////////
// LECTURE: Objects and methods

// v1.0
/*
var john = {
  name: "John",
  lastName: "Smith",
  yearOfBirth: 1990,
  job: "teacher",
  isMarried: false,
  family: ["Jane", "Mark", "Bob"],
  calculateAge: function() {
    // Es una function expression, es lo mismo que: var calculateAge = function(yearOfBirth) {...}
    return 2017 - this.yearOfBirth;
  }
};

console.log(john);
console.log(john.family[2]); // Number 2 of family array
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;
console.log(john);
*/

// v2.0
/*
var john = {
  name: "John",
  lastName: "Smith",
  yearOfBirth: 1990,
  job: "teacher",
  isMarried: false,
  family: ["Jane", "Mark", "Bob"],
  calculateAge: function() {
    this.age = 2017 - this.yearOfBirth;
  }
};

john.calculateAge();
console.log(john);
*/

///////////////////////////////////////////////////////////
// LECTURE: Loops
/*
for (let i = 0; i < 10; i++) {
  console.log(i);
}
*/

/*
0, true, print 0, update i to 1
1, true, print 1, update i to 2
.
.
9, true, print 9, update i to 10
10, FALSE, end loop!
*/

//var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

/*
// for loops
// Normal use case
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// Reverse use case
for (let i = names.length-1; i >= 0; i--) {
  console.log(names[i]);
}
*/

// while loops
/*
var i = 0;
while(i < names.length) {
  console.log(names[i]);
  i++;
}

for (let i = 0; i <= 5; i++) { // Los numeros 4 y 5 no se mostrarian
  console.log(i);
  if (i === 3) {
    break;
  }
}

for (let i = 0; i <= 5; i++) { // Se pintarian todos los numeros salvo el 3.
  if (i === 3) {
    continue;
  }
  console.log(i);
}
*/

///////////////////////////////////////////////////////////
// LECTURE: Coding Challenge 2
/*
function age(yearOfBirth) {
  return new Date().getFullYear() - yearOfBirth;
}

function isFullAge(age, i) {
  if (age < 18) {
    console.log('Person ' + (i+1) + ' IS NOT full age, has age ' + age); 
    return false;  
  } else {
    console.log('Person ' + (i+1) + ' IS full age or older, has age ' + age); 
    return true;
  }
}

function printFullAge(birthYears) {
  let fullAges = [];
  for (let i = 0; i <birthYears.length; i++) {
    fullAges.push(isFullAge(age(birthYears[i]), i));
  }
  return fullAges;
}

var full_1 = printFullAge([1970, 1980, 1990, 1999, 2000]);
console.log(full_1);

var full_2 = printFullAge([2001, 1985, 1994, 2014, 1973]);
console.log(full_2);
*/