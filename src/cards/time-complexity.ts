import { Suits, Suit, Card, Deck, prettyPrint, prettyPrintCard } from "./types.ts"

const createOfSuit = (suit: Suit, length = 13): Array<Card> => {
    return Array.from({ length }, (_, i) => ({ suit, value: i + 1 }));
};

const createDeck = (): Deck => Suits.flatMap(suit => createOfSuit(suit));

const shuffle = (deck: Deck): Deck => {
    const copy = [...deck]
    return copy.sort(() => Math.random() - 0.5)
}

const randomDeck: Deck = shuffle(createDeck())

// Time complexity of popACard: O(1)
const popACard = (deck: Deck) => {
    const copy = [...deck]
    console.log(`
        popACard pops a card from the deck.
        The time complexity of this function is O(1) because it always pops the last element of the array.
        `)
    const card = copy.pop()
    if (card) {
        console.log(prettyPrintCard(card))
    } else {
        console.log('No more cards in the deck.')
    }
}


popACard(randomDeck)

const sortDeck = (deck: Deck): Deck => {
    const copy = [...deck]
    console.log(`
        sortDeck sorts the deck in ascending order.
        The time complexity of this function is O(n log n) because it uses the built-in sort method.
        `)
    return copy.sort((a, b) => a.value - b.value)
}

const r = sortDeck(randomDeck)
prettyPrint(r)

const sortBySuit = (deck: Deck): Deck => {
    const copy = [...deck]
    console.log(`
        sortBySuit sorts the deck by suit.
        The time complexity of this function is O(n) because it uses the built-in sort method.
        `)
    return copy.sort((a, b) => a.suit.localeCompare(b.suit))
}

const s = sortBySuit(randomDeck)
prettyPrint(s)


const sortBySuitAndValue = (deck: Deck): Deck => {
    const copy = [...deck]
    console.log(`
        sortBySuitAndValue sorts the deck by suit and value.
        The time complexity of this function is O(n) because it uses the built-in sort method.
        `)
    return copy.sort((a, b) => {
        if (a.suit === b.suit) {
            return a.value - b.value
        }
        return a.suit.localeCompare(b.suit)
    })
}

const d = sortBySuitAndValue(randomDeck)
prettyPrint(d)