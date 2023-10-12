const { faker } = require('@faker-js/faker');
const { initialPosts } = require('../utils/temp');

class PostService {
  constructor() {
    this.posts = initialPosts;
  }
  create(body) {
    body.id = this.posts.length + 1;
    body.author = faker.person.fullName();
    this.posts.push(body);
    return body;
  }
  find() {
    return this.posts;
  }
  findOne(id) {
    const searchedPost = this.posts.find((post) => post.id === parseInt(id));
    return searchedPost;
  }
  update(id, body) {
    const index = this.posts.findIndex((post) => post.id === parseInt(id));
    if (index === -1) {
      return null;
    }
    this.posts[index] = { ...this.posts[index], ...body };
    return id;
  }
  delete(id) {
    const index = this.posts.findIndex((post) => post.id === parseInt(id));
    if (index === -1) {
      return null;
    }
    this.posts.splice(index, 1);
    return id;
  }
}

module.exports = PostService;
