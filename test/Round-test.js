const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', function() {
  let round;
  let deck;
  let card1;
  let card2;
  let card3;
  let turn;

  beforeEach(() => {

    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);
    turn = new Turn();
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function')
  });

  it('should instantiate a Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a deck', function() {
    expect(deck.cards).to.be.an('array')
    expect(round.deck).to.equal(deck)
  })

  it('should start with no incorrect guesses', function() {
    expect(round.incorrectGuesses).to.be.an('array')
    expect(round.incorrectGuesses).to.deep.equal([])
  })

  it('should start with zero turns', function() {
    expect(round.turns).to.equal(0)
  })

  it('should store cards in a deck', function() {
    // console.log(deck.cards[0])

    expect(deck.cards).to.deep.equal([card1, card2, card3])
  })

  it('should should have a current card', function() {
    expect(round.currentCard).to.equal(deck.cards[0])
  })

  it('should return the current card', function() {
    round.returnCurrentCard();
    // console.log(round.deck.card1)

    expect(round.returnCurrentCard()).to.equal(round.currentCard)
  })


  //
  it('should add a count to turn each time a turn is taken', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    expect(round.turns).to.equal(2)
  })

  it('should instantiate a new Turn', function() {
    round.takeTurn('sea otter');
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should let the second card in the deck become the current card', function() {

    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    expect(round.currentCard).to.equal(deck.cards[0])
  });



  // it('should add cards to incorrectGuesses array if guess not correct ', function() {
  //
  //   expect(round.incorrectGuesses).to.deep.equal([])
  // })









});
