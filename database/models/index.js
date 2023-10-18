const { User, UserSchema } = require('./user.model');
const { Post, PostSchema } = require('./post.model');
const { Category, CategorySchema } = require('./category.model');
const { Ebook, EbookSchema } = require('./ebook.model');
const { Order, OrderSchema } = require('./order.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Post.init(PostSchema, Post.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Ebook.init(EbookSchema, Ebook.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));

  Post.associate(sequelize.models);
  Category.associate(sequelize.models);
}

module.exports = setupModels;
