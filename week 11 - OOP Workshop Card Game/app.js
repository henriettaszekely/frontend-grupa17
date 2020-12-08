// let card = {
// 	suit: 'clubs',
// 	rank: '2',
// 	value: 2,
// };
// console.log(card);

class Card {
	constructor(suit, rank, value) {
		this.suit = suit;
		this.rank = rank;
		this.value = value;
	}
	paint() {
		return '<div class="card card-' + this.suit + ' card-' + this.rank + '"><span><span></div>';
	}
}

class Deck {
	constructor() {
		this.cards = [];
	}

	createDeck() {
		let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
		let ranks = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];
		let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

		for (let i = 0; i < suits.length; i++) {
			for (let j = 0; j < ranks.length; j++) {
				this.cards.push(new Card(suits[i], ranks[j], values[j]));
			}
		}
	}
	shuffleDeck() {
		const shuffledDeck = [];
		const unshuffledDeck = this.cards;
		while (unshuffledDeck.length) {
			var index = Math.floor(Math.random() * unshuffledDeck.length);
			shuffledDeck.push(unshuffledDeck.splice(index, 1)[0]);
		}
		this.cards = shuffledDeck;
	}
}

class Player {
	constructor(name) {
		this.playerName = name;
		this.playerCards = [];
	}
	calculateTotal() {
		var total = 0;
		for (var i = 0; i < this.playerCards.length; i++) {
			total += this.playerCards[i].value;
		}
		return total;
	}
	paintCards() {
		let allCards = '';
		for (let i = 0; i < this.playerCards.length; i++) {
			allCards += this.playerCards[i].paint();
		}
		return allCards;
	}
}

class Board {
	constructor() {
		this.cardsInMiddle = [];
		this.players = [];
	}
	start(playerOneName, playerTwoName) {
		this.players.push(new Player(playerOneName));
		this.players.push(new Player(playerTwoName));

		let d = new Deck();
		d.createDeck();
		d.shuffleDeck();

		this.players[0].playerCards = d.cards.slice(0, 26);
		this.players[1].playerCards = d.cards.slice(26, 52);
	}
}

let awesomeCard = new Card('an awesome Suit', 'Joker', 100);
//             constructor(       suit      ,  rank  , value )
console.log(awesomeCard);

// create a new deck instance named "d"
const d = new Deck();
// notice since our Deck class' constructor has no arguments, we do  // not need to pass anything into Deck()
d.createDeck(); // calling our function to fill our array
console.log(d.cards); // logging our cards array [this.cards]

let gameBoard = new Board();
gameBoard.start('Mario', 'Luigi');
console.log(gameBoard.players);

console.log(gameBoard.players[0].playerName, gameBoard.players[0].calculateTotal());
console.log(gameBoard.players[1].playerName, gameBoard.players[1].calculateTotal());

var container = document.createElement('div');
container.innerHTML = gameBoard.players[0].paintCards();
document.body.appendChild(container);
