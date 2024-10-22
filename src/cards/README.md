## Time complexity for a Deck of Cards

```
        popACard pops a card from the deck.
        The time complexity of this function is O(1) because it always pops the last element of the array.

[ 7 ♣ ]

        sortDeck sorts the deck in ascending order.
        The time complexity of this function is O(n log n) because it uses the built-in sort method.

[ A ♣ ] [ A ♥ ] [ A ♠ ] [ A ♦ ] [ 2 ♦ ] [ 2 ♣ ] [ 2 ♥ ] [ 2 ♠ ] [ 3 ♠ ] [ 3 ♦ ] [ 3 ♥ ] [ 3 ♣ ] [ 4 ♥ ]
[ 4 ♠ ] [ 4 ♦ ] [ 4 ♣ ] [ 5 ♣ ] [ 5 ♦ ] [ 5 ♠ ] [ 5 ♥ ] [ 6 ♥ ] [ 6 ♦ ] [ 6 ♠ ] [ 6 ♣ ] [ 7 ♠ ] [ 7 ♦ ]
[ 7 ♥ ] [ 7 ♣ ] [ 8 ♠ ] [ 8 ♥ ] [ 8 ♣ ] [ 8 ♦ ] [ 9 ♥ ] [ 9 ♣ ] [ 9 ♠ ] [ 9 ♦ ] [ 10 ♦ ] [ 10 ♠ ] [ 10 ♣ ]
[ 10 ♥ ] [ J ♣ ] [ J ♠ ] [ J ♦ ] [ J ♥ ] [ Q ♣ ] [ Q ♥ ] [ Q ♦ ] [ Q ♠ ] [ K ♠ ] [ K ♦ ] [ K ♣ ] [ K ♥ ]

        sortBySuit sorts the deck by suit.
        The time complexity of this function is O(n) because it uses the built-in sort method.

[ J ♣ ] [ 5 ♣ ] [ 2 ♣ ] [ Q ♣ ] [ A ♣ ] [ 9 ♣ ] [ K ♣ ] [ 3 ♣ ] [ 6 ♣ ] [ 10 ♣ ] [ 4 ♣ ] [ 8 ♣ ] [ 7 ♣ ]
[ 10 ♦ ] [ 6 ♦ ] [ 2 ♦ ] [ J ♦ ] [ 3 ♦ ] [ 4 ♦ ] [ A ♦ ] [ K ♦ ] [ 9 ♦ ] [ 5 ♦ ] [ 7 ♦ ] [ 8 ♦ ] [ Q ♦ ]
[ 6 ♥ ] [ 4 ♥ ] [ 9 ♥ ] [ A ♥ ] [ 8 ♥ ] [ 2 ♥ ] [ 3 ♥ ] [ J ♥ ] [ K ♥ ] [ 10 ♥ ] [ 5 ♥ ] [ Q ♥ ] [ 7 ♥ ]
[ K ♠ ] [ J ♠ ] [ 4 ♠ ] [ 3 ♠ ] [ 8 ♠ ] [ 6 ♠ ] [ A ♠ ] [ 9 ♠ ] [ 10 ♠ ] [ 5 ♠ ] [ 7 ♠ ] [ 2 ♠ ] [ Q ♠ ]

        sortBySuitAndValue sorts the deck by suit and value.
        The time complexity of this function is O(n) because it uses the built-in sort method.

[ A ♣ ] [ 2 ♣ ] [ 3 ♣ ] [ 4 ♣ ] [ 5 ♣ ] [ 6 ♣ ] [ 7 ♣ ] [ 8 ♣ ] [ 9 ♣ ] [ 10 ♣ ] [ J ♣ ] [ Q ♣ ] [ K ♣ ]
[ A ♦ ] [ 2 ♦ ] [ 3 ♦ ] [ 4 ♦ ] [ 5 ♦ ] [ 6 ♦ ] [ 7 ♦ ] [ 8 ♦ ] [ 9 ♦ ] [ 10 ♦ ] [ J ♦ ] [ Q ♦ ] [ K ♦ ]
[ A ♥ ] [ 2 ♥ ] [ 3 ♥ ] [ 4 ♥ ] [ 5 ♥ ] [ 6 ♥ ] [ 7 ♥ ] [ 8 ♥ ] [ 9 ♥ ] [ 10 ♥ ] [ J ♥ ] [ Q ♥ ] [ K ♥ ]
[ A ♠ ] [ 2 ♠ ] [ 3 ♠ ] [ 4 ♠ ] [ 5 ♠ ] [ 6 ♠ ] [ 7 ♠ ] [ 8 ♠ ] [ 9 ♠ ] [ 10 ♠ ] [ J ♠ ] [ Q ♠ ] [ K ♠ ]
```
