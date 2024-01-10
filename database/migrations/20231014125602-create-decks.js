'use strict';

const { DeckSchema, DECK_TABLE } = require('../models/deck.model');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(DECK_TABLE, {
      ...DeckSchema,
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(DECK_TABLE);
  },
};
