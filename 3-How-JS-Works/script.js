///////////////////////////////////////
// Lecture: Hoisting

// Functions
/*
calculateAge(1965); // Funciona por el hoisting. Estamos en Global Execution Object y la definicion de la funcion se ha almacenado
                    // la fase de creacion Variable Object(VO), por lo que en la fase de ejecucion la tenmos disponible.

function calculateAge(year) { 
    console.log(new Date().getFullYear() - year);
}

// retirement(1956); // NO va a funcionar porque lo que tenemos es una function expression que no se almacena en VO

var retirement = function(year) {
    console.log(65 - (new Date().getFullYear() - year));
}

// Variables
console.log(age); // En este punto Javascript sabe que va a existir una variable age, pero su valor no esta definido todavia
                  // por eso nos retorna valor => undefined
var age = 23; // Almacenado en VO del Global Execution Object

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}

foo();
console.log(age);
*/


///////////////////////////////////////
// Lecture: Scoping

// First scoping example
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// Example to show the differece between execution stack and scope chain
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second(); // Por el hoisting la podemos invocar antes de definirla

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    // console.log(c); // No puedo acceder a la variable c, esta fuera de este scope
    console.log(a+d); // A estas 2 variables si que podria acceder, d esta en mi scope y a esta en Global Execution Context.
}
*/

///////////////////////////////////////
// Lecture: The this keyword

/*
console.log(this); // Este es el Window Object

calculateAge(1985);

function calculateAge(year) {
    console.log(new Date().getFullYear() - year);
    console.log(this); // De nuevo es el Window Object, al fin y al cabo se podría decir que es el Objeto llamador
}
*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this); // En este caso es el john object el objeto llamador
        console.log(new Date().getFullYear() - this.yearOfBirth);

        /*
        function innerFunction() {
            console.log(this); // De nuevo es el Window Object, porque viene de una Regular Function Call (es la regla general)
        }
        innerFunction();
        */
    }
};

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
}

mike.calculateAge = john.calculateAge; // Estamos "Robando" funcionalidad del otro objeto
mike.calculateAge();





