const { faker } = require('@faker-js/faker');
const { initialPosts } = require('../utils/temp');

class PostService {
  constructor() {
    this.posts = initialPosts;
  }
  async create(body) {
    const newItem = {
      id: faker.string.uuid(),
      author: faker.person.fullName(),
      ...body,
    };
    if (!Object.keys(body).length) {
      throw new Error('Bad request');
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
      throw new Error('Not found');
    }
    return searchedPost;
  }
  async update(id, body) {
    if (!Object.keys(body).length) {
      throw new Error('Bad request');
    }
    const index = this.posts.findIndex((post) => post.id === id);
    if (index === -1) {
      throw new Error('Not found');
    }
    this.posts[index] = { ...this.posts[index], ...body };
    return id;
  }
  async delete(id) {
    const index = this.posts.findIndex((post) => post.id === id);
    if (index === -1) {
      throw new Error('Not found');
    }
    this.posts.splice(index, 1);
    return id;
  }
}

module.exports = PostService;
