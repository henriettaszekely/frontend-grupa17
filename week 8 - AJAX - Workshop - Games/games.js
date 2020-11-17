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


function getFormData() {
    var inputsList = document.querySelectorAll("#createGameForm .form-control");

    var formData = {};

    for (input of inputsList) {
        formData[input.name] = input.value;
    }

    console.log(formData);
    return formData;
}


function createGame() {

    var gameData = getFormData();
    var formatedData = new URLSearchParams(gameData);

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formatedData
    }).then(handleResponse)
        .then(displayGame)
}


function handleResponse(response) {
    if (response.status === 404 || response.status === 400) {
        throw Error("Game not found!");
    } else if (response.status === 500) {
        throw Error("Something went wrong!Plese try again!");
    } else if (response.status === 200) {

        // get the Content-Type header
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

    document.getElementById("gamesContainer").prepend(gameCard);

}

// fetches an HTML file and inserts it to a destination elemnet
function includeHTML(destinationElement) {
    const link = destinationElement.dataset.content;

    return fetch(link)
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

function displayModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
}

function hideModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

window.addEventListener("load", function () {
    var modalSection = document.getElementById("modal");
    includeHTML(modalSection).then(() => {
        var closeButtons = document.getElementsByClassName("close");

        for (button of closeButtons) {
            console.log(button);
            button.onclick = hideModal;
        }

        var saveButton = document.getElementById("saveButton");
        saveButton.onclick = createGame;

    });

    var createButton = document.getElementById("createButton");
    createButton.onclick = displayModal;

    getGames();
});

