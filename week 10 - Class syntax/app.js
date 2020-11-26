/* La fel ca la clasa:
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
*/

class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this.lastName = lastName;
    }

    //metoda statica:
    static defaultFullName() {
        return "John Doe";
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    get firstName() {
        return this._firstName;
    }

    sayHiTo(name) {
        console.log(this.firstName + " says hi to " + name + "!");
    }

    //GETTER
    get fullName() {
        return this.computeFullName();
    }

    computeFullName() {
        return this.firstName + " " + this.lastName;
    }

    //SETTER
    set fullName(name) {
        var words = name.toString().split(' ');
        this.firstName = words[0] || '';
        this.lastName = words[1] || '';
    }
}

/* Identic cu sintaxa din clasa:
Person.prototype.sayHiTo = function (name) {
    console.log("Cu prototype: " + this.firstName + " says hi to " + name + "!");
}
*/

const p = new Person("Damian", "Ceomag");

console.log(p);

p.sayHiTo("John");

//afisare get
console.log(p.fullName);

//afisare/apelare set
p.fullName = 'Nelu Barosanu';

console.log(p.fullName);

//apelare metoda statica
console.log(Person.defaultFullName());


class Animal {
    constructor(name) {
        this.name = name;
        console.log("constructor from Animal");
    }
    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Dog extends Animal {
    constructor(name, address) {
        super(name);
        this.address = address;
    }

    speak() {
        super.speak();
        console.log(this.name + ' barks from ' + this.address + '.');
    }
}

var d = new Dog('Mitzie', 'Romania');

d.speak();
