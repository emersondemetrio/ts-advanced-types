export type Suit = 'hearts' | 'diamonds' | 'clubs' | 'spades'

export type Card = {
  suit: Suit
  value: number
}

export type Deck = Array<Card>;
export const Suits: Suit[] = ['hearts', 'diamonds', 'clubs', 'spades'];

export const suitSymbols: Record<Suit, string> = {
  hearts: '♥',
  diamonds: '♦',
  clubs: '♣',
  spades: '♠',
};

const formatValue = (value: number): string => {
  switch (value) {
    case 1:
      return 'A';
    case 11:
      return 'J';
    case 12:
      return 'Q';
    case 13:
      return 'K';
    default:
      return value.toString();
  }
};

export const prettyPrintCard = (card: Card): string => {
  const value = formatValue(card.value);
  const suit = suitSymbols[card.suit];
  return `[ ${value.padEnd(2)} ${suit} ]`; // Ensure value is 2 characters wide
};

export const prettyPrint = (deck: Deck) => {


  // Split deck into chunks of 13 and print each line
  for (let i = 0; i < deck.length; i += 13) {
    const chunk = deck.slice(i, i + 13);
    console.log(
      chunk
        .map(card => prettyPrintCard(card))
        .join(' ')
    );
  }
}