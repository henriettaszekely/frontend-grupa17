
// Aritmetic operators
console.log("Aritmetic operators");
console.log(10 + 2);
console.log(10 * 2);
console.log(10 / 2);
console.log(10 % 2);

var a = 10;
var b = 5;

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

var result = 11 + 24 + 56 + (100 - 5) / 2;
console.log(result);

// string concatenation
console.log('first' + 'Name');


// Comparison operators
console.log("Comparison operators");

// Equal
console.log("Equal: == and ===");
console.log("10 == 10 =>", 10 == 10);
console.log("10 === 10 =>", 10 === 10);
console.log("10 == '10' => ", 10 == '10');
console.log("10 === '10' =>", 10 === '10');

// Not equal
console.log("Equal: != and !==");
console.log("10 !=  10 =>", 10 != 10);
console.log("10 !== 10 =>", 10 !== 10);
console.log("10 != '10' => ", 10 != '10');
console.log("10 !== '10' => ", 10 !== '10');

// < > <= >=
console.log("11 > 10 =>", 11 > 10);
console.log("11 < 10 => ", 11 < 10);

console.log("10 >= 10 =>", 10 >= 10);
console.log("10 <= 10 =>", 10 <= 10);

// Logical operators
console.log("Logical operators");
var age = 25;

console.log("age =", age);
console.log("age > 11 =>", age > 11, "age < 15 =>", age < 15);
console.log("age > 11 && age < 15 =>", age > 11 && age < 15);

console.log("age > 11 || age < 15 =>", age > 11 || age < 15);

console.log("!age > 11 || age < 15 =>", !age > 11 || age < 15);

console.log("!(age > 11 || age < 15) =>", !(age > 11 || age < 15));

// Unary operators
console.log("Unary operators");

console.log(!false);    // returns true
console.log(!0);    // returns true
console.log(!"");    // returns true
console.log(!true);    // returns false
console.log(!-3);    // returns false
console.log(!"hello");    // returns false

// Increment postfix x++ / Decrement postfix x--
var x = 4;
console.log("x =", x);
x++;
console.log("Increment: ++", x);
x--;
console.log("Decrement: --", x);

var y = x++;    // y = 4 and  x = 5
console.log("y = x++ => ", y); // y is set to the value before incrementing and it adds 1 to x

// Be careful about resetting values when using postfix, a is set to the value before incrementing
var a = 5;     // a = 5
a = a++;       // a = 5

// Increment prefix x++ / Decrement prefix x--
var w = 4;    // w=4
z = ++w;     // z = 5 and  w = 5 => z is set to the value after incrementing and it adds 1 to w
console.log("w = ", w, "z = ", z);

var b = 5;    // b = 5
++b;
console.log("++b", b);

// typeof
console.log("typeof");

var name = "John";
var age = 25;
var nothing = null;
var array = [];
var obj = {};

console.log(typeof true);  // boolean

console.log(typeof name);  // string
console.log(typeof !name); // boolean

console.log(typeof age);  //number

console.log(typeof noVariable); // undefined
console.log(typeof nothing);  // object
console.log(typeof array);  //object
console.log(typeof obj);  //object


// Ternary operator -> condition ? exprIfTrue : exprIfFalse
console.log("Ternary operator: ");

10 > 5 ? console.log("10 > 5") : console.log("10 < 5");

var money = 15;
var price = 50;
var cost = price < money ? "cheap" : "expensive";
console.log(cost);