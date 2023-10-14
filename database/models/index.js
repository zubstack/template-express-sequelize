const { User, UserSchema } = require('./user.model');
const { Post, PostSchema } = require('./post.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Post.init(PostSchema, Post.config(sequelize));
}

module.exports = setupModels;
