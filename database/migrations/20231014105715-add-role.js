'use strict';

const { PersonSchema, PERSON_TABLE } = require('../models/persons.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(PERSON_TABLE, 'role', PersonSchema.role);
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(PERSON_TABLE, 'role');
  },
};
