'use strict';

const { CategorySchema, CATEGORY_TABLE } = require('../models/category.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface
      .createTable(CATEGORY_TABLE, CategorySchema)
      .then(() => {
        queryInterface.bulkInsert(CATEGORY_TABLE, [
          { id: 1, name: 'programming' },
          { id: 2, name: 'algorithms' },
          { id: 3, name: 'design' },
        ]);
      });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CATEGORY_TABLE);
  },
};
