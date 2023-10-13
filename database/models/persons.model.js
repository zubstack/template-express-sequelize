const { Model, DataTypes } = require('sequelize');

const PERSON_TABLE = 'persons';
const PersonSchema = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  birthDate: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'birth_date',
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
};

class Person extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: PERSON_TABLE,
      modelName: 'Person',
      timestamps: false,
    };
  }
}

module.exports = { PersonSchema, PERSON_TABLE, Person };
