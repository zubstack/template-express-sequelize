const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { Deck } = models;

class DeckService {
  constructor() {}
  async find() {
    const data = await Deck.findAll();
    return data;
  }
  async findById(id) {
    const data = await Deck.findByPk(id);
    if (!data) {
      throw boom.notFound('This deck does not exist');
    }
    return data;
  }
  async create(body) {
    if (!Object.keys(body).length) {
      throw boom.badRequest('Missing data');
    }
    await Deck.create(body);
    return body;
  }
  async destroy(id) {
    const item = await this.findById(id);
    await item.destroy({ force: true });
    return;
  }
  async update(id, body) {
    if (!Object.keys(body).length) {
      throw boom.badRequest('Missing data');
    }
    const [response] = await Deck.update(body, {
      where: {
        id: id,
      },
    });
    if (!response) {
      throw boom.notFound('This Deck does not exist');
    }
    return;
  }
}

module.exports = DeckService;
