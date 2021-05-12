const Turn = require('./turn');


class Round {
  constructor(deck) {
    this.incorrectGuesses = []
    this.turns = 0
    this.deck = deck
    this.currentCard = deck.cards[0]



  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);
    this.turns++;

    this.deck.cards.shift();
    // console.log('index 0', this.deck.cards[0])
    this.currentCard = this.deck.cards[0]
    // console.log('currentCard', this.currentCard)
    return this.currentCard


    // return this.currentCard

  }


  // takeTurn:  evaluates guesses, gives feedback, and stores ids of incorrect guesses
  //
  // The next card becomes current card
  // Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
  // Feedback is returned regarding whether the guess is incorrect or correct


calculatePercentCorrect() {
  //this will need some math where we take the number of this.turns and the guesses

}

endRound() {

  return `**Round over!** You answered ${this.calculatePercentCorrect}% of the questions correctly!`
}


}



module.exports = Round;



// Round

// Your Round class will be the object that takes in responses and records these guesses (as well as if they are correct or incorrect). The currentCard should be the first Card in the Deck (the array of Cards) at the start of the Round
//

// Your Round class should meet the following requirements:

// returnCurrentCard: method that returns the current card being played

// takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses
//

// When a guess is made, a new Turn instance is created.

// The turns count is updated, regardless of whether the guess is correct or incorrect

// The next card becomes current card

// Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses

// Feedback is returned regarding whether the guess is incorrect or correct

// calculatePercentCorrect: method that calculates and returns the percentage of correct guesses

// endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
