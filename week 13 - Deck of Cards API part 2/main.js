// console.log("Hi")

class Player {
    constructor(name) {
        this.name = name;
    }

    set cards(cardList) {
        this._cards = cardList
    }

    get cards() {
        return this._cards;
    }

    drawCards() {
        let cardsContainer = document.createElement("div");
        for (let i = 0; i < this._cards.length; i++) {
            let cardImg = document.createElement("img");
            cardImg.src = this._cards[i].image;
            cardsContainer.append(cardImg);
        }

        document.body.append(cardsContainer);
    }
}

window.addEventListener("DOMContentLoaded", () => {

    let nameButton = document.getElementById("submitButton");

    nameButton.addEventListener("click", () => {

        let playerName = document.getElementById("playerName").value;
        let currentPlayer = new Player(playerName);
        console.log(currentPlayer);
        doRequest(currentPlayer);
    });

    let baseURL = "http://deckofcardsapi.com/";

    let newDeckURL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";


    let deckID = ""

    function doRequest(player) {
        fetch(newDeckURL, { method: "GET" })
            .then(response => response.json())
            .then(parsedResponse => {
                console.log(parsedResponse);
                let deckID = parsedResponse.deck_id;
                console.log(deckID);
                return Promise.resolve(deckID);
            })
            .then(deckID => {
                let drawCardURL = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`;
                console.log(drawCardURL);
                return fetch(drawCardURL);
            })
            .then(response => response.json())
            .then(parsedResponse => {
                console.log(parsedResponse);
                let deckID = parsedResponse.deck_id;
                let drawCards = parsedResponse.cards;
                player.cards = drawCards;
                let addToPileURL = `https://deckofcardsapi.com/api/deck/${deckID}/pile/${player.name}/add/?cards=${[drawCards[0].code]},${[drawCards[1].code]}`
                return fetch(addToPileURL);

            })
            .then(response => response.json())
            .then(parsedResponse => {
                if (parsedResponse.piles[player.name]) {
                    player.drawCards();
                }
            });
    };

});

