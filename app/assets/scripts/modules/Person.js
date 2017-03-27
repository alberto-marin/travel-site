function Person(fullName, favColor) {
  this.name = fullName;
  this.FavoriteColor = favColor;
  this.greet = function() {
    console.log('Hello, my name is ' + this.name + ' and my favorite color is ' + this.FavoriteColor + '.');
  }
}
module.exports = Person;
// console.log("HEllo from Person.js")
//
// exports.exampleProperty = "Super magical example value.";
// exports.exampleFunction = function(){
//   alert("this is an example.")
// };
