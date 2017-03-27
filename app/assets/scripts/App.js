var $ = require('jquery');
var Person = require('./modules/Person');

// console.log(Person.exampleProperty);
// Person.exampleFunction();

var john = new Person('John Doe', 'red');
john.greet();
var jane = new Person('Jane Smith', 'green');
jane.greet();

$('h1').remove();
