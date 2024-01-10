'use strict';

const { CardSchema, CARD_TABLE } = require('../models/card.model');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(CARD_TABLE, {
      ...CardSchema,
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
    await queryInterface.dropTable(CARD_TABLE);
  },
};
