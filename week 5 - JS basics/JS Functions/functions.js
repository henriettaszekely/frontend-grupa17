// doesn't return anything
function myFirstFunction() {
    alert("OMG! You wrote a function!");
};

// returns a value, which can be stored in a variable
function mySecondFunction(a, b) {
    console.log(a + b);
    return a + b;
    console.log(a, b); // code after return keyword is not executed
};

// function expression
var myFunction = function (a) {
    return a + a;
};

var result = myFirstFunction(); //undefined, doesn't return anything, just displays the alert
var result2 = mySecondFunction(2, 4); // 6 and logs to console
var result3 = myFunction(5); // 10