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
// console.log(c);