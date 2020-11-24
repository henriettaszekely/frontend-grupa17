// console.log("Hello");

function User(options) {
    this.name = options.name || "";
    this.age = options.age;
    this.height = options.height;
    this.weight = options.weight;
    this.sayHi = function () {
        console.log("Hi");
    }
};


var john = new User({
    name: "John Doe",
    age: 25,
    height: 170,
    weight: 70
});

john.doSomething = function () {
    console.log("Do something");
}

john.doSomething();

john.sayHi();

User.prototype.sayHiTo = function (name) {
    console.log("Hi " + name);
}
User.prototype.calculateBMI = function () {
    // intentionally incorrect expression
    return this.height / this.weight;
}

console.log(john.calculateBMI());

User.prototype.calculateBMI = function () {
    var heightInMeters = this.height / 100;
    return this.weight / (heightInMeters * heightInMeters);
}

console.log(john.calculateBMI());

john.sayHiTo("Vladimir");

var mary = new User({
    name: "Mary Anne",
    age: 35,
    height: 160,
    weight: 50
});


mary.sayHiTo("Vladimir from Mary");

console.log(mary.calculateBMI());

console.log(User.prototype.isPrototypeOf(john));


User.prototype.age = 70;

console.log(mary.age);

User.prototype.address = "Romania";

console.log(mary.address)

console.log(mary.toString());

User.prototype.toString = function () {
    return this.name + " " + this.age;
}

console.log(mary.toString());