const Turn = require('./turn');


class Round {
  constructor(deck, currentCard) {
    this.incorrectGuesses = []
    this.turns = 0
    this.deck = deck
    // this.currentCard = deck.cards[0]
    this.currentCard = currentCard
  }

  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.turns]
    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);
    this.currentCard = this.deck.cards[this.turns]
    this.turns++;
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id)
      return turn.giveFeedback();
    } else {
      return turn.giveFeedback();
    }

  }


  calculatePercentCorrect() {
    let percentageCorrect = 100 - Math.ceil((this.incorrectGuesses.length / this.turns) * 100)
    return percentageCorrect
  }

  endRound() {

    return `**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }

}


module.exports = Round;
