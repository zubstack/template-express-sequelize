const Joi = require('joi');

const id = Joi.string().uuid();
const title = Joi.string().max(100);
const content = Joi.string().max(500);
const author = Joi.string().max(25);
const location = Joi.string().max(25);
const image = Joi.string().uri().max(500);
const categoryId = Joi.number().integer().min(0).max(9);
const isPrivate = Joi.boolean();

const createPostSchema = Joi.object({
  title: title.required(),
  content: content.required(),
  location: location.required(),
  image: image.required(),
  categoryId: categoryId.required(),
  author: author.required(),
  isPrivate: isPrivate,
});

const updatePostSchema = Joi.object({
  title: title,
  content: content,
  location: location,
  image: image,
  categoryId: categoryId,
  isPrivate: isPrivate,
  author: author,
});

const getPostSchema = Joi.object({
  id: id.required(),
});

module.exports = { updatePostSchema, createPostSchema, getPostSchema };
