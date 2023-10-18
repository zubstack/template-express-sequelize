const { Model, DataTypes } = require('sequelize');

const EBOOK_TABLE = 'ebooks';
const EbookSchema = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  author: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  genre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

class Ebook extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: EBOOK_TABLE,
      modelName: 'Ebook',
      timestamps: false,
    };
  }
}

module.exports = { EbookSchema, EBOOK_TABLE, Ebook };
