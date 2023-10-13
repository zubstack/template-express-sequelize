const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
const { initialPosts } = require('../utils/temp');
const pool = require('../libs/postgres.pool');
const logger = require('../utils/logger');

class PostService {
  constructor() {
    this.posts = initialPosts;
    this.pool = pool;
    this.pool.on('error', (error) => logger.error(error));
  }

  async find() {
    const response = await this.pool.query('SELECT * FROM persons');
    return response.rows;
    // return this.posts;
  }
  async findOne(id) {
    const searchedPost = this.posts.find((post) => post.id === id);
    if (!searchedPost) {
      throw boom.notFound('This post does not exist');
    }
    if (searchedPost.isPrivate) {
      throw boom.conflict('This post is private');
    }
    return searchedPost;
  }

  async create(body) {
    const newItem = {
      id: faker.string.uuid(),
      ...body,
    };
    if (!Object.keys(body).length) {
      throw boom.badRequest('Missing data');
    }
    this.posts.push(newItem);
    return newItem;
  }

  async delete(id) {
    const index = this.posts.findIndex((post) => post.id === id);
    if (index === -1) {
      throw boom.notFound('This post does not exist');
    }
    if (this.posts[index].isPrivate) {
      throw boom.conflict('This post is private');
    }
    this.posts.splice(index, 1);
    return id;
  }

  async update(id, body) {
    if (!Object.keys(body).length) {
      throw boom.badRequest('Missing data');
    }
    const index = this.posts.findIndex((post) => post.id === id);
    if (index === -1) {
      throw boom.notFound('This post does not exist');
    }
    if (this.posts[index].isPrivate) {
      throw boom.conflict('This post is private');
    }
    this.posts[index] = { ...this.posts[index], ...body };
    return id;
  }
}

module.exports = PostService;
