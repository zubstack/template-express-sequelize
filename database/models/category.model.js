const { Model, DataTypes } = require('sequelize');

const CATEGORY_TABLE = 'categories';
const CategorySchema = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

class Category extends Model {
  static associate(models) {
    this.hasMany(models.Post, {
      as: 'posts',
      foreignKey: 'categoryId',
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: false,
    };
  }
}

module.exports = { CategorySchema, CATEGORY_TABLE, Category };
