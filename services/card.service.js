const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { Card } = models;

class CardService {
  constructor() {}

  async find() {
    const data = await Card.findAll({});
    return data;
  }
  async findById(id) {
    const data = await Card.findByPk(id);
    if (!data) {
      throw boom.notFound('This Card does not exist');
    }
    return data;
  }

  async create(body) {
    if (!Object.keys(body).length) {
      throw boom.badRequest('Missing data');
    }
    await Card.create(body);
    return body;
  }

  async destroy(id) {
    const Card = await this.findById(id);
    await Card.destroy();
    return;
  }

  async update(id, body) {
    if (!Object.keys(body).length) {
      throw boom.badRequest('Missing data');
    }
    const [response] = await Card.update(body, {
      where: {
        id: id,
      },
    });
    if (!response) {
      throw boom.notFound('This Card does not exist');
    }
    return;
  }
}

module.exports = CardService;
