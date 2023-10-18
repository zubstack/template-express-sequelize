const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { Ebook } = models;

class EbookService {
  constructor() {}

  async find() {
    const data = await Ebook.findAll();
    return data;
  }
  async findOne(id) {
    const data = await Ebook.findByPk(id);
    if (!data) {
      throw boom.notFound('This ebook does not exist');
    }
    return data;
  }

  async create(body) {
    if (!Object.keys(body).length) {
      throw boom.badRequest('Missing data');
    }
    await Ebook.create(body);
    return body;
  }
}

module.exports = EbookService;
