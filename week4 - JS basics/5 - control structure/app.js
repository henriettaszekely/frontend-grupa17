// if
var isMen = true;
if (isMen) {
  console.log('is a male');
} else {
  console.log('is a female');
}

// switch
var numberOfDay = new Date().getDay();

switch (numberOfDay) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
};

console.log(numberOfDay, day);

// while

var count = 0;
document.write("Starting while loop <br>");

while (count < 10) {
  document.write("Current Count : " + count + "<br>");
  count++;
};

document.write("While loop stopped!");

// for
for (var index = 0; index < 10; index = index + 1) {
  console.log(index)
};

var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i;
for (i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}

document.write(text);