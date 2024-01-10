const { Card, CardSchema } = require('./card.model');
const { Deck, DeckSchema } = require('./deck.model');

function setupModels(sequelize) {
  Card.init(CardSchema, Card.config(sequelize));
  Deck.init(DeckSchema, Deck.config(sequelize));

  Card.associate(sequelize.models);
  Deck.associate(sequelize.models);
}

module.exports = setupModels;
