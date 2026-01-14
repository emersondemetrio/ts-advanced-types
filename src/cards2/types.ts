// Step 1: Build the initial deck of cards
// ranks: A,1,2,3,4,5,6,7,8,9,J,Q,K
// suits: diamonds, clubs, hearts, spades

export type Card = {
  rank: string;
  suits: "diamonds" | "clubs" | "hearts" | "spades";
};

export type Deck = Card[];
