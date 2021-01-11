// console.log("Hi");

let baseURL = "http://deckofcardsapi.com/";

let newDeckURL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";


let deckID = ""
let playerName = "Liviu";

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
        fetch(drawCardURL);
    })
    .then(response => response.json())
    .then(parsedResponse => {
        console.log(parsedResponse);
        let deckID = parsedResponse.deck_id;
        let drawCards = parsedResponse.cards;
        let addToPileURL = `https://deckofcardsapi.com/api/deck/${deckID}/pile/${playerName}/add/?cards=${[drawCards[0].code]},${[drawCards[1].code]}`
        return fetch(addToPileURL);

    })
    .then(response => response.json())
    .then(parsedResponse => {
        console.log(parsedResponse);
    });
;