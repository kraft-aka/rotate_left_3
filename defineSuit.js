// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

function defineSuit(card) {
  const cards = {
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts",
    "♣": "clubs",
  };
  return cards[card[card.length - 1]];
}
