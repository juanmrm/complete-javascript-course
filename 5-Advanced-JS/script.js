/*
var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

/////////////////////////////////////////////////////////
// Function Constructor
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

// Funcion que metemos en el prototipo
Person.prototype.calculateAge = function (params) {
  console.log(new Date().getFullYear() - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher'); // Instanciacion
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

/////////////////////////////////////////////////////////
// Object.create
var personProto = {
  calculateAge: function() {
    console.log(new Date().getFullYear() - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
  name: { value: 'Jane' },
  yearOfBirth:  { value: 1969 },
  job: { value: 'designer' }
});
*/


/*
/////////////////////////////////////////////////////////
// Primitives vs objects

// Primitives
var a = 23;
var b = a; // El valor de b es el mismo que el de a, pero se crea una nueva copia
a = 46; // solo cambiaremos el valor de a
console.log(a);
console.log(b);


// Objects
var obj1 = {
  name: 'John',
  age: 26
};

var obj2 = obj1; // No se crea una nueva copia, sino que estamos apuntando las 2 variables a la misma posicion en memoria.
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj); // Estamos pasando como primer argumento una primitiva, asi que se generara una copia
                  // y como segundo un objecto (es un puntero, una referencia en memoria)
console.log(age);
console.log(obj.city);
*/

/////////////////////////////////////////////////////////
// Lecture: Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) { // Le estamos pasando una funcion como argumento. Este patron es realmente potente
  var arrRes = [];
  for (let i = 0; i < arr.length; i++) { // Aplicamos la funcion a cada elemento del array.
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return new Date().getFullYear() - el;
}

function fullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81 ) {
    return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }  
}

var ages = arrayCalc(years, calculateAge); // Estamos pasando una function (callback function), porque va a ser llamada despues.
console.log(ages);

var fullAges = arrayCalc(ages, fullAge);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
*/

/////////////////////////////////////////////////////////
// Lecture: Functions returning functions
/*
function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX design is?');
    }
  } else if (job === 'teacher') {
    return function (name) {
      console.log('What subject do you teach, ' + name + '?'); 
    }
  } else {
    return function(name) {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('John');
designerQuestion('Jane');

interviewQuestion('teacher')('Mark'); // Parece extraño, pero funciona porque es evaluado de izquierda a derecha.
*/

/*
//////////////////////////////////////////
// Lecture: IIFE Inmediately Invoked Function Expression
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();

// IIFE
(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);
*/

/*
//////////////////////////////////////
// Lecture: Closures
function retirement(retirementAge) {
  var a = ' years left until retirement.';
  return function (yearOfBirth) {
    var age = new Date().getFullYear() - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990); // Es lo mismo que retirement(66)(1990);
retirementGermany(1990);
retirementIceland(1990);

function interviewQuestion(job) {
  return function (name) { // Podemos usar el parametro job que esta outer de nuestra function por las closures
    if (job === 'designer') {
      console.log(name + ', can you please explain what UX design is?');
    } else if (job === 'teacher') {
      console.log('What subject do you teach, ' + name + '?');
    } else {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

interviewQuestion('teacher')('John');
*/


///////////////////////////////////////
// Lecture: Bind, call and apply
var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m a ' 
                  + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
    } else if (style === 'friendly') {
      console.log('Hey! What\'s up? I\'m a ' 
      + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' +  timeOfDay + '.');
    }
  }
}

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
}

john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon');
// No va a funcionar porque en la funcion presentation no estamos esperando recibir un array de argumentos.
//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');



var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) { // Le estamos pasando una funcion como argumento. Este patron es realmente potente
  var arrRes = [];
  for (let i = 0; i < arr.length; i++) { // Aplicamos la funcion a cada elemento del array.
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return new Date().getFullYear() - el;
}

function fullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
// Estamos pasando una copia de la funcion fullAge pero con valores preestablecidos -> muy potente
var fullJapan = arrayCalc(ages, fullAge.bind(this, 20)); 
console.log(ages);
console.log(fullJapan);



