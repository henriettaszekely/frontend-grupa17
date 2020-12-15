const BASE_URL = "https://api.chucknorris.io/jokes/";

const categoriesUrl = BASE_URL + "categories";

const categoryJokeUrl = BASE_URL + "random?category=";

function parseResponse(response) {
    if (response.status === 200) {
        return response.json();
    } else {
        throw new Error("ERROR!");
        //throw 'ERROR!';
    }
}

function showJoke(joke) {
    console.log(joke.value);
}

function getFirstCategory(categories) {
    // Promise nou si rezolvat
    return Promise.resolve(categories[0]);
}

function getJokeFromCategory(category) {
    // fetch(categoryJokeUrl + categories[0], { method: "GET" })
    //     .then(parseResponse)
    //     .then(showJoke);
    return fetch(categoryJokeUrl + category, { method: "GET" });

    // console.log(categories)
}

function displayError(error) {
    console.log(error.message);
    //console.log(error);
}

fetch(categoriesUrl, { method: "GET" })
    .then(parseResponse)
    .then(getFirstCategory)
    .then(getJokeFromCategory)
    .then(parseResponse)
    .then(showJoke)
    .catch(displayError);
