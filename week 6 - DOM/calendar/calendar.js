var select, title, list;  // global variables


window.addEventListener("load", function () {

    select = document.getElementById("month");
    title = document.getElementsByTagName("h1")[0];
    list = document.querySelector('ul');

    // default calendar
    populateCalendar(31, 'January');

    // adding functionality to select chenf event
    select.onchange = function () {
        var selectedMonth = select.value;  // save the select's value
        var numberOfDays;

        // determinate the number of days based on the selected month
        if (selectedMonth === "February") {
            numberOfDays = 28;
        } else if (selectedMonth === "April" || selectedMonth === "June" || selectedMonth === "September" || selectedMonth === "November") {
            numberOfDays = 30;
        } else {
            numberOfDays = 31;
        }

        populateCalendar(numberOfDays, selectedMonth);

    };

});


function populateCalendar(days, month) {
    // reset the content of the list, the ul element
    list.innerHTML = "";

    title.innerText = month; // se the title

    // for each day create a list item and add it to the list
    for (var i = 1; i <= days; i++) {
        var listItem = document.createElement("li");
        listItem.classList.add("day");
        listItem.innerText = i;
        list.appendChild(listItem);
    }

}

