// array which contains the initial books
var books = [{
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    isRead: false
},
{
    title: 'You Don’t Know JS',
    author: 'Kyle Simpson',
    isRead: true
},
{
    title: 'JavaScript for Kids: A Playful Introduction to Programming',
    author: 'Nick Morgan',
    isRead: true
}
];

window.addEventListener('load', function () {
    // get the section with 'bookList' id
    var bookListSection = document.getElementById('bookList');

    // create a list element
    var bookList = document.createElement('ul');

    // append the created element to the bookList element
    bookListSection.appendChild(bookList);

    // call the displayBook() function for every book in the books array
    for (var i = 0; i < books.length; i++) {
        displayBook(books[i], bookList);
    }

    // get the button with 'addNewBook' id
    var addNewBookButton = document.getElementById('addNewBook');

    // add a click event
    addNewBookButton.onclick = function () {

        // get the values from the title and author inputs
        var bookTitle = document.getElementsByName('title')[0].value;
        var bookAuthor = document.getElementsByName('author')[0].value;

        // create an new book object with the values that we get from the inputs
        var newBook = {
            title: bookTitle,
            author: bookAuthor,
            isRead: false
        };

        // add the new book in the list
        books.push(newBook);

        // call the displayBook() function with the newBook object as argument
        displayBook(newBook, bookList);

    };

});

function displayBook(book, list) {
    // create a list item element
    var listItem = document.createElement('li');

    // create p element for author
    var bookAuthor = document.createElement('p');
    // create p element for title
    var bookTitle = document.createElement('p');

    // create an input
    var checkbox = document.createElement('input');
    // set the input type attribute to checkbox
    checkbox.setAttribute('type', 'checkbox');
    // set the checked attribute based on the books isRead property
    checkbox.checked = book.isRead;

    // create the lable for the checkbox
    var label = document.createElement('label');
    label.innerText = "Already read";

    bookTitle.innerHTML = "Title: " + book.title;
    bookAuthor.innerHTML = 'Author: ' + book.author;

    // append the book title, author, the checkbox and the lable to the list item
    listItem.append(bookTitle, bookAuthor, checkbox, label);

    // append the list item to the list
    list.appendChild(listItem);
}