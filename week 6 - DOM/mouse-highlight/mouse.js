
var boldItems;

// get the strong elements
function getBoldItems() {
    boldItems = document.getElementsByTagName('strong');
};

function highlight() {
    // write the code that highlights the bold items
    for (var i = 0; i < boldItems.length; i++) {
        boldItems[i].style.backgroundColor = "green";
        boldItems[i].style.color = "white";
    }
};

function removeHighlight() {
    // wirte the code that resets the color
    for (var i = 0; i < boldItems.length; i++) {
        boldItems[i].style.color = "black";
        boldItems[i].style.backgroundColor = "white";
    }
}

function addHighlightClass() {
    var paragraph = document.getElementsByTagName('p')[0];
    paragraph.classList.add("highlight");
}

function removeHighlightClass() {
    var paragraph = document.getElementsByTagName('p')[0];
    paragraph.classList.remove("highlight");
}

window.addEventListener("load", function () {
    // after the DOM is loaded and get the bold items
    getBoldItems();

    //add the event listener for mouse enter and mouse leave events
    var hover = document.getElementById("hover");
    var hoverClass = document.getElementsByClassName("info");

    hover.addEventListener("mouseenter", addHighlightClass);
    hoverClass[0].addEventListener("mouseleave", removeHighlightClass);
});