// we have an array with the name and surname
let arr = ["Ilya", "Kantor"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

// Cod Echivalent
// let firstName = arr[0];
// let surname = arr[1];

// console.log(firstName); // Ilya
// console.log(surname);  // Kantor

// console.log(arr);

//let [firstNameOne, surnameTwo] = "Ilya2 Kantor2".split(' ');

let arr2 = "Ilya2 Kantor2".split(' ');
let firstNameOne = arr2[0];
let surnameTwo = arr2[1];

// console.log("arr2: " + arr2);
// console.log(firstNameOne);
// console.log(surnameTwo);

// second element is not needed

let [firstNameCaesar, , titleCaesar] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];


// Cod Echivalent
// let arr3 = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// let firstNameCaesar = arr3[0];
// let titleCaesar = arr3[2];

// console.log(firstNameCaesar);
// console.log(titleCaesar); // Consul

let user = {};

[, user.surname] = "Ilya Kantor".split(' ');

// console.log(user.name);
// console.log(user.surname); // Ilya

let guest = "Jane";
let admin = "Pete";

// Swap values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];


// Cod echivalent
// let arr4 = [admin, guest];

// [guest, admin] = arr4;

// COD ECHIVALENT
// let auxiliar;
// auxiliar = guest;
// guest = admin;
// admin = auxiliar;

//console.log(`${guest} ${admin}`); // Pete Jane (successfully swapped!)

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// console.log(name1); // Julius
// console.log(name2); // Caesar


// COD ECHIVALENT
// let arr5 = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// let name1 = arr5[0];
// let name2 = arr5[1];

// let rest = [];
// for (let i = 2; i < arr5.length; i++) {
//     rest.push(arr5[i]);
// }

// console.log(name1); // Julius
// console.log(name2); // Caesar

// Note that type of `rest` is Array.
// console.log(rest[0]); // Consul
// console.log(rest[1]); // of the Roman Republic
// console.log(rest.length); // 2

// default values
//let [nameDefault = "Guest", surnameDefault = "Anonymous"] = ["Julius"];


// COD ECHIVALENT
// let arr7 = [];

// let nameDefault = arr7[0];

// if (typeof arr7[0] === "undefined") {
//     nameDefault = "Guest";
// }

// COD ECHIVALENT II
// let arr7 = ["Julius"];

// let nameDefault = arr7[0] || "Guest";



// console.log(nameDefault);    // Julius (from array)
//console.log(surnameDefault); // Anonymous (default used)

// runs only prompt for surname

// let [complexName = prompt('name?'), complexSurname = prompt('surname?')] = ["Julius", "Caesar"];


// // COD ECHIVALENT
// // let arr8 = ["Julius", "Caesar"];
// // let complexName = arr8[0] || prompt('name?');
// // let complexSurname = arr8[1] || prompt('surname?');

// console.log(complexName);    // Julius (from array)
// console.log(complexSurname); // whatever prompt gets

// we pass object to function

let options2 = {
    title: "My menu",
    items: ["Item1", "Item2"]
};


showMenu(options2);

// ...and it immediately expands it to variables
function showMenu({ title = "Untitled", width = 200, height = 100, items = [] }) {
    // title, items – taken from options,
    // width, height – defaults used
    console.log("Arguments: ", arguments);
    console.log("Options object: ", options2);
    console.log("Variables: ", `${title} ${width} ${height}`); // My Menu 200 100
    console.log("Items: ", items); // Item1, Item2
}





