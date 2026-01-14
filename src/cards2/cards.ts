import { Deck } from "./types";

const ranks = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

const suits = [
  "diamonds",
  "clubs",
  "hearts",
  "spades"
] as const;

export const deckFactory = () => {
  const deck: Deck = [];

  for (const suit of suits) {
    deck.push(
      ...ranks.map(rank => {
        return {
          rank,
          suits: suit
        }
      })
    )
  }

  return deck;
}

export const shuffleDeck = (deck: Deck): Deck => {
  const pile1: Deck = [...deck]
  const pile2: Deck = []

  while (pile1.length > 0) {
    const card = pile1.shift();
    if (card) {
      pile2.unshift(card)
    }

  }

  return pile2;
}


// Expects the deck to be fully shuffled once I run that func:
const myDeck = deckFactory();
const shuffled = shuffleDeck(myDeck);

console.log("Original deck:", myDeck.map(c => `${c.rank} of ${c.suits}`));
console.log("Shuffled deck:", shuffled.map(c => `${c.rank} of ${c.suits}`));
