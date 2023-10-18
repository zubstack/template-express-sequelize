const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { Order } = models;

class OrderService {
  constructor() {}

  async find() {
    const data = await Order.findAll();
    return data;
  }
  async findOne(id) {
    const data = await Order.findByPk(id);
    if (!data) {
      throw boom.notFound('This order does not exist');
    }
    return data;
  }

  async create(body) {
    if (!Object.keys(body).length) {
      throw boom.badRequest('Missing data');
    }
    await Order.create(body);
    return body;
  }
}

module.exports = OrderService;
