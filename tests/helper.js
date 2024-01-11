const sequelize = require('../libs/sequelize');
const { models } = require('../libs/sequelize');
const { Deck, Card } = models;

async function syncAndSeed() {
  await sequelize.sync({ force: true });
  const decks = [
    {
      topic: 'ultimates',
    },
  ];
  const cards = [
    {
      question: 'Mordekaiser',
      answer: "Realm of Death",
      deck_id: 1,
    },
    {
      question: 'Garen',
      answer: 'Demacian Justice',
      deck_id: 1,
    },
  ];
  const [ultimates] = await Promise.all(decks.map((deck) => Deck.create(deck)));
  const [foo, bar] = await Promise.all(cards.map((card) => Card.create(card)));

  return {
    decks: {
      ultimates,
    },
    cards: { foo, bar },
  };
}

module.exports = { syncAndSeed };
