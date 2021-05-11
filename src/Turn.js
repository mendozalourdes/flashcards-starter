class Turn {
  constructor(guess, card) {
    this.guess = guess
    this.card = card
  }

  returnGuess() {
    return this.guess
  }

  returnCard() {
    return this.card
  }

  evaluateGuess() {
    if (this.guess !== this.card.correctAnswer) {
      return false
    }
    return true
  }


  giveFeedback() {
    if (this.evaluateGuess() === true) {
      return "You got it!"
    }
    return "Sorry, that was wrong."
  }



}


module.exports = Turn;
