import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
var features = $('.feature-item');
var testimonials = $('.testimonial');
var stickyHeader = new StickyHeader();
var modal = new Modal();

new RevealOnScroll(features, '85%');
new RevealOnScroll(testimonials, '60%');

// // require is from node.js
// var $ = require('jquery');
// //var Person = require('./modules/Person');
// import Person from './modules/Person';
//
// class Adult extends Person {
//   payTaxes() {
//     console.log(this.name + " now owes $0 in taxes.");
//   }
// }
// //alert("451116");
// // console.log(Person.exampleProperty);
// // Person.exampleFunction();
//
// var john = new Person('John Doe', 'red');
// john.greet();
//
// var jane = new Adult('Jane Smith', 'blue');
// jane.greet();
// jane.payTaxes();
//
// $('h1').remove();
