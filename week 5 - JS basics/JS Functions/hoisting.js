/* 
    Hoisting is JavaScript's default behavior of moving declarations to the top.
    In JavaScript, a variable can be declared after it has been used.
    In other words; a variable can be used before it has been declared.
*/

console.log("Before value assignment: ", newVariable); // undefined - because only the declaration (var newVariable) was hoisted to the top, not the initialization (newVariable = "New value") 

var newVariable = "New value";

console.log("After value assignment:", newVariable); // "New value"

// function declaration - works because function declarations are hoisted to the top
alert(boo());

function boo() {
    return 5;
}

// function expression 
console.log(foo());

// TypeError: foo is not a function - because foo function wasn't defined yet
// only the declaration (var foo) was hoisted to the top, not the function expression 

var foo = function () {
    return 5;
};