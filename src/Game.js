const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./Round');
const Turn = require('./Turn');
const Deck = require('./Deck');
const Card = require('./Card');

class Game {
  constructor() {
    this.currentRound = null;
  }

    start() {
      // let cards = new Card(this.id, question, answers, correctAnswer)
      let cards = new Card()
      let deck  = new Deck(cards)
      this.currentRound = new Round(deck);

// this.printMessage(deck, this.currentRound);
// this.printQuestion(this.currentRound);
//       start: method that starts everything
// Creates Cards
// Puts Cards in a Deck
// Creates a new Round using the Deck
// invokes printMessage to display the message in the CLI
// invokes printQuestion to kick off our helper functions that allow interaction via the CLI

    }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }


}

module.exports = Game;

//
// Your Game class should meet these other requirements:
// Should keep track of the currentRound
