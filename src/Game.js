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
      let cards = prototypeQuestions.map(card => new Card (card.id, card.question, card.answers, card.correctAnswer));
      let deck  = new Deck(cards)
      this.currentRound = new Round(deck);
      this.printMessage(deck, this.currentRound);
      this.printQuestion(this.currentRound);

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
