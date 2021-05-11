const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let card;
  let turn;

  beforeEach(() => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('pug', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function')
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  })

  it('should store a store guess value and Card object', function() {

    expect(turn.guess).to.equal('pug')
    expect(turn.card).to.equal(card)
  })

  it('should return a guess', function() {
    turn.returnGuess();
    expect(turn.returnGuess()).to.equal('pug')
  })

  it('should return a card object', function() {
    turn.returnCard();
    expect(turn.returnCard()).to.equal(card)
  })

  it('should delclare if user guess maches correct answer or not', function() {
    // const card = new Card('sea otter')

    turn.evaluateGuess()
    expect(turn.evaluateGuess()).to.equal(false);
  })

  it('should give affirmative or negative feedback depending on guess', function() {
    turn.giveFeedback()

    expect(turn.giveFeedback()).to.equal("Sorry, that was wrong.")

  })

});
