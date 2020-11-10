const baseUrl = 'https://games-world.herokuapp.com/games';

function getGames() {
    fetch(baseUrl, { method: 'GET' })
        .then(function (response) {
            if (response.status === 404) {
                displayError("Game not found!");
            } else if (response.status === 500) {
                displayError("Something went wrong!Plese try again!");
            } else if (response.status === 200) {
                return response.json();
            }
        }).then(function (parsedResponse) {
            parsedResponse.forEach(function (item) {
                displayGame(item);
            });
        });
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

    gameCard.append(gameImage, gameInfo);

    document.getElementById("gamesContainer").appendChild(gameCard);

}

window.addEventListener("load", function () {
    getGames();
});

