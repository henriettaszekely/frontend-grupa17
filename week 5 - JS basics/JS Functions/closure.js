// The scope chain is saved to the function object at the time of its creation.

// In other words, when an inner function is returned from an outer function, all the variables of the
// outer function are saved in the context of the inner function

function outer() {
    var b = 10;
    function inner() {

        var a = 20;
        console.log("a=" + a + " b=" + b);

        // uncomment to see closure effects
        a++;
        b++;
    }
    return inner;
}

var closure = outer();

var closure2 = outer();
