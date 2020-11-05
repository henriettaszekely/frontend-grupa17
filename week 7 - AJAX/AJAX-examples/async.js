console.log("Hello There!");

setTimeout(function () {
    console.log("Hello from set timeout!");
}, 1000);

console.log("Hello again!");

var timeOutId = setTimeout(function () {
    console.log("Second timeout!");
}, 1000);

console.log(timeOutId);

clearTimeout(timeOutId);

