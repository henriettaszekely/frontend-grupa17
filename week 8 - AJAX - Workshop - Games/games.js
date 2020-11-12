const baseUrl = 'https://games-world.herokuapp.com/games';

function getGames() {
    showLoader();
    fetch(baseUrl, { method: 'GET' })
        .then(handleResponse)
        .then(function (parsedResponse) {
            parsedResponse.forEach(displayGame);
        })
        .catch(displayError)
        .finally(hideLoader);
}

function deleteGame(id) {
    fetch(baseUrl + "/" + id, { method: 'DELETE' })
        .then(handleResponse)
        .then(function (parsedResponse) {
            console.log(parsedResponse);
        });
}


function handleResponse(response) {
    if (response.status === 404 || response.status === 400) {
        throw Error("Game not found!");
    } else if (response.status === 500) {
        throw Error("Something went wrong!Plese try again!");
    } else if (response.status === 200) {
        var contentType = response.headers.get('Content-Type');
        if (contentType.includes('text/html')) {
            return response.text();
        } else {
            return response.json();
        }
    }
}

function displayError(message) {
    let container = document.getElementById("gamesContainer");
    container.innerText = message;
}

function displayGame(game) {
    let gameCard = document.createElement("div");
    gameCard.classList.add("game-card");

    let gameImage = document.createElement("img");
    gameImage.src = game.imageUrl;

    let gameInfo = document.createElement("div");
    gameInfo.classList.add("game-info");
    // gameInfo.innerHTML = "<h3>" + game.title + "</h3>" + "<p>" + game.description + "</p>";
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

    gameInfo.innerHTML = `
        <h3>${game.title}</h3>
        <p>${game.description}</p>
    `;

    var deleteButton = document.createElement('button');
    deleteButton.classList.add("far", "fa-trash-alt", "delete-button");

    deleteButton.addEventListener('click', function (event) {
        // delete the game from the server
        deleteGame(game._id);

        // remove the element from the HTML
        event.target.parentElement.remove();
    });
    gameCard.append(gameImage, gameInfo, deleteButton);

    document.getElementById("gamesContainer").appendChild(gameCard);

}

// fetches an HTML file and inserts it to a destination elemnet
function includeHTML(destinationElement) {
    const link = destinationElement.dataset.content;

    fetch(link)
        .then(function (response) {
            return response.text();
        })
        .then(function (html) {
            destinationElement.innerHTML = html;
        });
}

function showLoader() {
    var loader = document.getElementById('appLoader');
    loader.style.display = 'block';
}

function hideLoader() {
    var loader = document.getElementById("appLoader");
    loader.style.display = 'none';
}

window.addEventListener("load", function () {
    getGames();
});

