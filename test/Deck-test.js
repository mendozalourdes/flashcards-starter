const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Deck', function () {
  let deck;
  let card;

  beforeEach(() => {
    deck = new Deck();
    card = new Card() 
   });

});
