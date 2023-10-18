const { Model, DataTypes, Sequelize } = require('sequelize');

const ORDER_TABLE = 'orders';
const OrderSchema = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
};

class Order extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamps: false,
    };
  }
}

module.exports = { OrderSchema, ORDER_TABLE, Order };
