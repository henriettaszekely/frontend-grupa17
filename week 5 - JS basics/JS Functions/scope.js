// This code contains errors, because some of the variables can't be accessed, because of scoping
// run the code and see in the console where are problems
// after you understand the problem comment those lines in order to be able to execute the rest of the code

// Scope determines the accessibility (visibility) of variables.
var global = 'global';

function understandScope() {
    var local = 'local';
    console.log("in functions can access local variables: ", local);
    console.log("in functions can access global variables: ", global);
}

console.log("outside the function can access global variables: ", global);
console.log("outside the function can't acces local variables: ", local);

understandScope();



function outer(x, y) {
    var outerVariable = "outer variable";

    console.log("in outer function can access global variables: ", global);
    console.log("Can access parameters x & y:", x, y);

    function inner(z) {
        var innerVariable = "inner variable";

        console.log("Sum of outer function parameters -> x + y = ", x + y);
        console.log("Can access own parameter z", z);
        console.log("Can access: ", global, " & ", outerVariable, " & ", innerVariable);
    };

    inner(3);

    console.log("Can't access inner function's variables: ", innerVariable);
    console.log("Can't access inner function's parameter: ", z);

};

outer(1, 2);