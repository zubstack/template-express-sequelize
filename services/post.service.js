const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
const { initialPosts } = require('../utils/temp');

class PostService {
  constructor() {
    this.posts = initialPosts;
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
  async find() {
    return this.posts;
  }
  async findOne(id) {
    const searchedPost = this.posts.find((post) => post.id === id);
    if (!searchedPost) {
      throw boom.notFound('This post does not exists');
    }
    if (searchedPost.isPrivate) {
      throw boom.conflict('This post is private');
    }
    return searchedPost;
  }
  async update(id, body) {
    if (!Object.keys(body).length) {
      throw boom.badRequest('Missing data');
    }
    const index = this.posts.findIndex((post) => post.id === id);
    if (index === -1) {
      throw boom.notFound('This post does not exists');
    }
    if (this.posts[index].isPrivate) {
      throw boom.conflict('This post is private');
    }
    this.posts[index] = { ...this.posts[index], ...body };
    return id;
  }
  async delete(id) {
    const index = this.posts.findIndex((post) => post.id === id);
    if (index === -1) {
      throw boom.notFound('This post does not exists');
    }
    if (this.posts[index].isPrivate) {
      throw boom.conflict('This post is private');
    }
    this.posts.splice(index, 1);
    return id;
  }
}

module.exports = PostService;
