// console.log("Hello");

var user = {
    name: "John Doe",
    age: 25,
    height: 170,
    weight: 70,
    "date of birth": 1992,

    sayHi: function () {
        console.log("Hi");
    },
    sayHiTo: function (name) {
        console.log("Hi " + name);
    },
    calculateBMI: function () {
        return this.height / this.weight;
    }
}
// afisare metode:
user.sayHi();

user.sayHiTo("Damian");

var userBMI = user.calculateBMI();
console.log(userBMI);

//dot notation:
console.log(user.name);

//bracket notation:
console.log(user["height"]);

//dynamic:
var prop = "age";
console.log(user[prop]);

//afisare proprietati cu spatiu:
console.log(user["date of birth"]);

var method = "sayHi";
user[method]();

console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

var userEntries = Object.entries(user);

for (i = 0; i < userEntries.length; i++) {
    console.log(userEntries[i][0] + ": " + userEntries[i][1]);
}

// factory function
function createNewUser(options) {
    // debugger;
    var user = {};
    user.name = options.name || "";
    user.age = options.age;
    user.height = options.height;
    user.weight = options.weight;
    user.sayHi = function () {
        console.log("Hi from " + this.name);
    }
    return user;
}
var user1 = createNewUser({
    name: "John Doe",
    age: 25,
    height: 170,
    weight: 70
});

console.log(user1.name);
user1.sayHi();
console.log(user1);


// constructor function
function User(options) {
    this.name = options.name || "";
    this.age = options.age;
    this.height = options.height;
    this.weight = options.weight;
    this.sayHi = function () {
        console.log("Hi");
    }
}
var user2 = new User({
    name: "Mary Jane",
    age: 30,
    height: 160,
    weight: 60
});

console.log(user2.name);
console.log(user2);