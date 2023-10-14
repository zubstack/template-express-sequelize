const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { User } = models;

class UserService {
  constructor() {}

  async find() {
    const data = await User.findAll();
    return data;
  }
  async findOne(id) {
    const data = await User.findByPk(id);
    if (!data) {
      throw boom.notFound('This user does not exist');
    }
    return data;
  }

  async create(body) {
    if (!Object.keys(body).length) {
      throw boom.badRequest('Missing data');
    }
    await User.create(body);
    return body;
  }

  async delete(id) {
    const User = await this.findOne(id);
    await User.destroy();
    return id;
  }

  async update(id, body) {
    if (!Object.keys(body).length) {
      throw boom.badRequest('Missing data');
    }
    const [response] = await User.update(body, {
      where: {
        id: id,
      },
    });
    if (!response) {
      throw boom.notFound('This user does not exist');
    }
    return id;
  }
}

module.exports = UserService;
