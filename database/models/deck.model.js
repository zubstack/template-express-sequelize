const { Model, DataTypes } = require('sequelize');

const DECK_TABLE = 'decks';
const DeckSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  topic: {
    type: DataTypes.STRING(300),
    allowNull: false,
    unique: true,
  },
};

class Deck extends Model {
  static associate(models) {
    this.hasMany(models.Card, {
      as: 'cards',
      foreignKey: 'deck_id',
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: DECK_TABLE,
      modelName: 'Deck',
      underscored: true,
    };
  }
}

module.exports = { DeckSchema, DECK_TABLE, Deck };
