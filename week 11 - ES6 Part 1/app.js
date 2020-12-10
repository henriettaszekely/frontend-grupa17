// console.log("hello")

function varTest() {
    var x = 1;
    if (true) {
        var x = 2; //same var!
        console.log(x); // 2
    }
    console.log(x); // 2
}
// varTest();

function letTest() {
    let x = 1;
    if (true) {
        let x = 2; // different
        console.log(x); // 2
    }
    console.log(x); // 1
}
// letTest();


const PI = 3.1416;
// PI = 3.141593; // err
// PI = 3.141594; // err

const OBJ = { 'foo': 'bar' };
// OBJ = { 'foo': 'bar2' }; //err   pt ca incercam sa modificam intreg obiectul, nu doar valoarea
OBJ.foo = 'bar2'; // works
// console.log(OBJ);


// const sum = function(x, y) {
//     return x + y;
//     }


// arrow function
// const sum = (x, y) => {
//      return x + y; }

// daca am o singura instructiune si aceea valoare se returneaza se poate scrie asa altfel nu are nevoie de 
// cuvantul return
const sum = (x, y) => x + y;
// console.log(sum(2,2));



// const double = function(x) {
//     return 2*x;
// }

// const double = (x) => { 
//     return 2*x; }

// cand avem un singur parametru se poate pune x fara paranteze
const double = x => {
    return 2 * x;
}

console.log(double(3));


const numbers = [1, 2, 3, 4, 5];
const evens = [];

// numbers.forEach(function(nr) {
//     if (nr % 2 == 0) {
//          evens.push(nr); }
// });

// arrow function
numbers.forEach(nr => {
    if (nr % 2 == 0) {
        evens.push(nr);
    }
});
console.log(evens);

// modul in care se scria inainte de ECMA6
// function Timer() {
//     var that = this;
//     that.value = 0;
//     setInterval(function incr() {
//         that.value++;
//     }, 1000);
// }

// function Timer() {
//     // debugger
//     this.value = 0;
//     window.setInterval(function incr() {
//         // functia de setInterval o sa aiba this tot timpul pe window, la fel si alte functii de tip webApi-s 
//         // de exemplu alert, setTimer, console
//         console.log(this.value)
//         this.value++;
//         console.log(this.value);
//     }, 1000);
//     // se executa in MINIM 1000 milisecunde...daca nu mai e nimic de procesat in fix 1000 ms(vezi video what a hell is for loop)
// }
// arrow function - particularitate this nu se modifica. in cazul acesta cel din interior e si cel din 
// exterior..in cazul acesta this e de tip Timer
function Timer() {
    this.value = 0;
    setInterval(() => {
        console.log(this)
        this.value++;
        console.log(this.value);
    }, 1000);
}


// let timer1 = new Timer(); 
// Timer();

// const getNumberDetails = function(x) {
//     return {
//         'even': x % 2 == 0 ? true : false
//     }
// };


// are nevoie de paranteze la obiect pt ca returnam un obiect..mergea fara paranteze daca returnam o 
// valoare (vezi curs ECMA6 slide 21 )
const getNumberDetails = (x) => ({
    'even': x % 2 == 0 ? true : false
})
// din acest motiv are nevoie de  paranteze
// const getNumberDetails = (x) => {
//     return {
//     'even': x % 2 == 0 ? true : false
//     }
// }
console.log(getNumberDetails(3));

// // arrow function  trebe sa fie pe primul rand 
// const sum2 = (x, y)
// => { return x + y; }
// console.log(sum2(2,3));

const sum3 = (x, y) =>
    x + y;
console.log(sum3(2, 3));

// template literals
var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`
console.log(message);



// ecmascript6
// var x = 0, y = 0
// obj = { x, y }

// ecmascript5
var x = 0, y = 0;
obj = { x: x, y: y };
console.log(obj);