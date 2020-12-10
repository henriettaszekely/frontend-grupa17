function sum(a, b) {

   console.log(arguments);
    //return a + b;
    //return arguments[0] + arguments[1];
    let total = 0;
    for(let i=0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
  
  //console.log( sum(1, 2, 3, 4, 5) );

  function sumAll(...numbers) { // args is the name for the array
    let sum = 0;
    //console.log('numbers',numbers);
    console.log('arguments',arguments);
  
    for (let number of numbers) sum += number;
  
    return sum;
  }
  
  //console.log( sumAll(1) ); // 1
  //console.log( sumAll(1, 2) ); // 3
  //console.log( sumAll(1, 2, 3) ); // 6
  function showName(firstName, lastName, ...titles) {
    console.log( 'firstName', firstName, 'lastName', lastName ); // Julius Caesar
  
    // the rest go into titles array
    // i.e. titles = ["Consul", "Imperator"]
    console.log( titles[0] ); // Consul
    console.log( titles[1] ); // Imperator
    console.log( titles[2] ); // Egypt
    console.log( titles.length ); // 3
  }
  
 // showName("Julius", "Caesar", "Consul", "Imperator", "Ruler of Egypt");

  function f() {
    console.log('this inside function', this);
    let showArg = (a, b, c) => {
        console.log(a);
        console.log(b);
        console.log(c);

        console.log(arguments[0]);
        console.log(arguments[1]);
        console.log(arguments[2]);
        console.log('this inside arrow function', this);

    }

    showArg("firstArrowParam", "second", "third");
  }
  
  //new f(1); // 1

  //console.log( Math.max(1000.5, 0.3, 5, 1, 30) );

  let arr = [3, 5, 1];

  //console.log( Math.max(arr) );
  //console.log( Math.max(...arr) );
  //console.log( Math.max(arr[0], arr[1], arr[2]));

  let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

//console.log( Math.max(...arr1, ...arr2) ); 
//console.log(Math.max(arr1[0], arr1[1], arr1[2],arr1[3], arr2[0], arr2[1], arr2[2],arr2[3]))
//console.log( Math.max(1, ...arr1, 2, ...arr2, 25) );
// arguments inside Math.max: 1, 1, -2, 3, 4, 2, 8, 3, -8, 1, 25

let arr3 = [3, 5, 1];
let arr4 = [8, 9, 15];

let merged = [0, ...arr3, 2, ...arr4];

//console.log(merged);

let str = "Hello";

//console.log( ...str );

let arrOriginal = [1, 2, 3];
let arrCopyAddress = arrOriginal;
let arrCopy = [0,...arrOriginal, 5, 6]; // spread the array into a list of parameters
                        // then put the result into a new array

// do the arrays have the same contents?
console.log(JSON.stringify(arrOriginal) === JSON.stringify(arrCopy)); // true

// are the arrays equal?
console.log("arrOriginal === arrCopy", arrOriginal === arrCopy); // false (not same reference)

//  are the arrays equal?
console.log("arrOriginal === arrCopyAddress", arrOriginal === arrCopyAddress); // true (not same reference)

// modifying our initial array does not modify the copy:
arrOriginal.push(4);
arrCopyAddress.push(5);
console.log('arrOriginal', arrOriginal); // 1, 2, 3, 4
console.log("arrCopyAddress" ,arrCopyAddress); // 1, 2, 3, 4
console.log("arrCopy", arrCopy); 