'use strict';

const { EbookSchema, EBOOK_TABLE } = require('../models/ebook.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(EBOOK_TABLE, EbookSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(EBOOK_TABLE);
  },
};
