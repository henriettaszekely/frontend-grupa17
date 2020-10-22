// Reference vs value

var original = 6;

// primitive types (number, string, boolean, null, undefined) are passed by value
var copy = original;

original = 5;

console.log('original: ', original); // original: 5
console.log('copy: ', copy); // copy: 6 


var customerOriginal = {
    name: 'John',
    total: 55.6
};

// objects, arrays, functions are passed by reference
var customerCopy = customerOriginal;

console.log("Customer Original", customerOriginal);
console.log("Customer copy", customerCopy);

customerCopy.name = "Alex";
customerCopy.age = 25;

//changes will affect both objects
console.log("Customer Original", customerOriginal);
console.log("Customer copy", customerCopy);


// Functions - passing parameters by value vs by reference

function sum(a, b) {
    console.log('sum', a + b);
    a = 0;
    console.log(a); // 0
};

var a = 2, b = 3;

sum(a, b); // 5, 0
console.log(a); // 2 - a didn't change in the function, because it was passed by value


function fullName(nameObj) {
    console.log(nameObj.first + ' ' + nameObj.last);
    nameObj.last = 'Batman';
    console.log(nameObj.last); // 'Batman'
};

var name = {
    first: 'Bruce',
    last: 'Wayne'
};

fullName(name); // 'Bruce Wayne', 'Batman'
console.log(name.last); // 'Batman' - name.last changed in the function, because objects are passed by reference