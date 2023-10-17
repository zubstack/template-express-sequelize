const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { Post } = models;

class PostService {
  constructor() {}

  async find() {
    const data = await Post.findAll({
      include: ['category'],
    });
    return data;
  }
  async findOne(id) {
    const data = await Post.findByPk(id);
    if (!data) {
      throw boom.notFound('This Post does not exist');
    }
    return data;
  }

  async create(body) {
    if (!Object.keys(body).length) {
      throw boom.badRequest('Missing data');
    }
    await Post.create(body);
    return body;
  }

  async delete(id) {
    const Post = await this.findOne(id);
    await Post.destroy();
    return id;
  }

  async update(id, body) {
    if (!Object.keys(body).length) {
      throw boom.badRequest('Missing data');
    }
    const [response] = await Post.update(body, {
      where: {
        id: id,
      },
    });
    if (!response) {
      throw boom.notFound('This Post does not exist');
    }
    return id;
  }
}

module.exports = PostService;
