const { Model, DataTypes } = require('sequelize');
const { DECK_TABLE } = require('./deck.model');

const CARD_TABLE = 'cards';
const CardSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  question: {
    type: DataTypes.CHAR(1000),
    allowNull: false,
  },
  answer: {
    type: DataTypes.CHAR(1000),
    allowNull: false,
  },
  domain: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  deck_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    references: {
      model: DECK_TABLE,
      key: 'id',
    },
  },
};

class Card extends Model {
  static associate(models) {
    this.belongsTo(models.Deck, { as: 'deck' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CARD_TABLE,
      modelName: 'Card',
    };
  }
}

module.exports = { CardSchema, CARD_TABLE, Card };
