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

beforeEach(() => {

  card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

  deck = new Deck([card1, card2, card3]);

  round = new Round(deck);
});

it('should be a function', function() {
  expect(Round).to.be.a('function')
});

it('should instantiate a Round', function() {
    expect(round).to.be.an.instanceof(Round);
});

it('should have a deck', function() {
  expect(deck.cards).to.be.an('array')
})

it('should store cards in a deck', function() {
  expect(deck.cards).to.deep.equal([card1, card2, card3])
})

it('should should have a current card', function() {
  expect(round.currentCard).to.equal(deck.card1)
})



});
