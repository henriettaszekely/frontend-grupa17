
function greetPerson(name) {
    // inner function
    function greet(greeting) {
        // logs inner functions argument + outer functions argument
        console.log(greeting + ' ' + name);
    }
    return greet; // returns the function
};

// closure #1
var greetAna = greetPerson('Ana');
greetAna('Hello'); // => Hello Ana
greetAna('Bye'); // => Bye Ana

// closure #2
var greetBen = greetPerson('Ben');
greetBen('Hello'); // => Hello Ben