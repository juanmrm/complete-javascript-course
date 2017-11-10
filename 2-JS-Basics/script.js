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