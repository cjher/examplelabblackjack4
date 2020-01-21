//
// Blackjack Game
//
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

function createDeck() {
    let deck = []; // creates empty deck
    // Loop to create the deck
    for (let suitIndex = 0; suitIndex < suits.length; suitIndex ++) {
        for (let valueIndex = 0; valueIndex < values.length; valueIndex ++) {
            deck.push( values[valueIndex] + ' of ' + suits[suitIndex] );
        }
    }
    return deck;
}

// Function draws next card from the deck.
function getNextCard() {
    return deck.shift(); // Array shift method grabs the first item in the array and moves the remaining                                 
}                        // items up in the array

let deck = createDeck(); // Calls create deck function to set up new deck.
for ( let i = 0; i < deck.length; i++ ) {
    console.log(deck[i]);
}

let playerCards = [ getNextCard(), getNextCard() ]; // Draw cards from the deck

console.log("Welcome to Blackjack!");
console.log("You are dealt: ");
console.log("  " + playerCards[0]);
console.log("  " + playerCards[1]);


