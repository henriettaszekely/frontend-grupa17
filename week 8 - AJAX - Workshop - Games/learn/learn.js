
// Simple fetch
const url = "https://jsonplaceholder.typicode.com/posts/1";

fetch(url)
    .then(function (response) {
        // Always gets a response, unless there is network error
        // It never throws an error for 4xx or 5xx response 😟
    }).catch(function (error) {
        // Only network error comes here
    });


// No error handeling

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonResponse) {
        // do whatever you want with the JSON response
    });


// Error handeling

fetch(url)
    .then(function (response) {
        if (response.status >= 200 && response.status <= 299) {
            return response.json();
        } else {
            throw Error(response.statusText);
        }
    })
    .then(function (jsonResponse) {
        // do whatever you want with the JSON response
    }).catch(function (error) {
        // Handle the error
        console.log(error);
    });


// arrow functions -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

let traditionalFunction = function (a) {
    return a + 100;
};

let arrowFunction = (a) => a + 10;
// let arrowFunction(a) => { a + 10 };
// let arrowFunction(a) => { return a + 10 };

// 1. remove 'function' keyword
// 2. add arrow =>
// remove { } and return -> only for one line statement


let traditionalFunction2 = function (a, b) {
    let calc = a + b * 2;
    return calc;
};

let arrowFunction2 = (a, b) => {
    let calc = a + b * 2;
    return calc;
};

// objects - Dot notation vs Bracket notation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors

const person = {
    name: 'Jhon',
    age: 30,
    role: 'developer',
    sayHello: () => console.log(`Hello ${this.name}`)
}

console.log(person.name);
person.sayHello();

console.log(person['name']);
person['sayHello']();


// for (... in ...) -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

const object = { a: 1, b: 2, c: 3 };

for (const key in object) {
    console.log(`${key}: ${object[key]}`);
}

// for (... of ...) -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

const array = ['a', 'b', 'c'];

for (const element of array) {
    console.log(element);
}

// HTML data-* attribute - https://www.w3schools.com/tags/att_data-.asp