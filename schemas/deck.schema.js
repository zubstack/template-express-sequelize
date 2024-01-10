const Joi = require('joi');

const id = Joi.number();
const topic = Joi.string().max(25);

const createDeckSchema = Joi.object({
  topic: topic.required(),
});

const updateDeckSchema = Joi.object({
  topic: topic,
});

const getDeckSchema = Joi.object({
  id: id.required(),
});

module.exports = { createDeckSchema, getDeckSchema, updateDeckSchema };
