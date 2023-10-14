const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class PersonService {
  constructor() {}

  async find() {
    const data = await models.Person.findAll();
    return data;
  }
  async findOne(id) {
    const data = await models.Person.findByPk(id);
    if (!data) {
      throw boom.notFound('This person does not exist');
    }
    return data;
  }

  async create(body) {
    if (!Object.keys(body).length) {
      throw boom.badRequest('Missing data');
    }
    await models.Person.create(body);
    return body;
  }

  async delete(id) {
    const person = await this.findOne(id);
    await person.destroy();
    return id;
  }

  async update(id, body) {
    if (!Object.keys(body).length) {
      throw boom.badRequest('Missing data');
    }
    const [response] = await models.Person.update(body, {
      where: {
        id: id,
      },
    });
    if (!response) {
      throw boom.notFound('This person does not exist');
    }
    return id;
  }
}

module.exports = PersonService;
