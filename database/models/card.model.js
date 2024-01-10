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
    type: DataTypes.STRING,
    allowNull: false,
  },
  answer: {
    type: DataTypes.STRING,
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
      underscored: true,
    };
  }
}

module.exports = { CardSchema, CARD_TABLE, Card };
