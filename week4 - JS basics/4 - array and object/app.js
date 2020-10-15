// array
var emptyArray = [];
var name = ['John', 'Doe', "Maria"];
var name2 = new Array('Jane', 'Done');

var listOfNumbers = [1, 3, 56, 89, 34, 10, 45];

console.log("listOfNumber:", listOfNumbers);
console.log("Firt item of array:", listOfNumbers[0]);
console.log("Length of the array:", listOfNumbers.length);
console.log("Last item of the array:", listOfNumbers[listOfNumbers.length - 1]);

var age = 25;
var isMen = true;
var list = [name, age, isMen, 10, 9, 8, 7];

// object
var emptyObject = {};
var newObject = new Object({});
console.log(emptyObject, newObject);

var personName = {
  firstName: 'John',
  lastName: 'Doe'
};

console.log(personName);
console.log(personName.firstName);
console.log(personName.lastName);

var student = {
  name: personName,
  age: 28,
  isMen: true,
  grades: [10, 9, 9.5],
  media: function () {
    return (this.grades[0] + this.grades[1] + this.grades[2]) / this.grades.length
  }
};

console.log("student: ", student);
console.log("student name: ", student.name);
console.log("student media: ", student.media());


