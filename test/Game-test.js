const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const prototypeQuestions = require('../src/data');

describe('Game', function() {
  let game;
  let deck;
  let cards;
  let turn;
  let round;
  beforeEach(() => {
     game = new Game();
     deck = new Deck();
     cards = new Card();
     turn = new Turn();
     round = new Round();
    // card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    // card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    // card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    // deck = new Deck([card1, card2, card3]);

    // round = new Round(deck, card1);
    // turn = new Turn();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function')
  });

it('should instantiate a Game', function() {
  expect(game).to.be.an.instanceof(Game);
});

it('should be able to instantiante a Round class', () => {
  expect(game.currentRound).to.deep.equal(null)
  game.start()
  expect(game.currentRound).to.be.an.instanceOf(Round)

});

it('should be able to instantiante a Card class', () => {
  game.start()
  expect(cards).to.be.an.instanceOf(Card)

});

it('should be able to instantiante a Deck class', () => {
  game.start()
  expect(deck).to.be.an.instanceOf(Deck)

});



});
