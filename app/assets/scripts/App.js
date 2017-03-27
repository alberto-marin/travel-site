// require is from node.js
var $ = require('jquery');
//var Person = require('./modules/Person');
import Person from './modules/Person';

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes $0 in taxes.");
  }
}
//alert("451116");
// console.log(Person.exampleProperty);
// Person.exampleFunction();

var john = new Person('John Doe', 'red');
john.greet();

var jane = new Adult('Jane Smith', 'blue');
jane.greet();
jane.payTaxes();

$('h1').remove();