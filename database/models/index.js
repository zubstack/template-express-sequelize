const { Post, PostSchema } = require('./post.model');
const { Category, CategorySchema } = require('./category.model');

function setupModels(sequelize) {
  Post.init(PostSchema, Post.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));

  Post.associate(sequelize.models);
  Category.associate(sequelize.models);
}

module.exports = setupModels;
