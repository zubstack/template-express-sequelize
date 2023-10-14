const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { Category } = models;

class CategoryService {
  constructor() {}

  async find() {
    const data = await Category.findAll();
    return data;
  }
  async findOne(id) {
    const data = await Category.findByPk(id);
    if (!data) {
      throw boom.notFound('This category does not exist');
    }
    return data;
  }
}

module.exports = CategoryService;
