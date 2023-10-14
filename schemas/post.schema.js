const Joi = require('joi');

const id = Joi.number();
const title = Joi.string().max(100);
const author = Joi.string().max(25);
const content = Joi.string().max(500);
const image = Joi.string().uri().max(500);
const categoryId = Joi.number().integer().min(0).max(9);

const createPostSchema = Joi.object({
  title: title.required(),
  content: content.required(),
  image: image.required(),
  categoryId: categoryId.required(),
  author: author.required(),
});

const updatePostSchema = Joi.object({
  title: title,
  content: content,
  image: image,
  categoryId: categoryId,
  author: author,
});

const getPostSchema = Joi.object({
  id: id.required(),
});

module.exports = { updatePostSchema, createPostSchema, getPostSchema };
