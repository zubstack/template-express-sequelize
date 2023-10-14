'use strict';

const { PersonSchema, PERSON_TABLE } = require('../models/persons.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(PERSON_TABLE, PersonSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(PERSON_TABLE);
  },
};
