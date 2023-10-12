const express = require('express');
const PostService = require('../services/post.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createPostSchema,
  updatePostSchema,
  getPostSchema,
} = require('../schemas/post.schema');

const router = express.Router();
const service = new PostService();

router.get('/', async (request, response) => {
  response.json(await service.find());
});

router.get(
  '/:id',
  validatorHandler(getPostSchema, 'params'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const searchedPost = await service.findOne(id);
      response.json(searchedPost);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  validatorHandler(createPostSchema, 'body'),
  async (request, response, next) => {
    try {
      const { body } = request;
      const newItem = await service.create(body);
      response.status(201).json({ message: 'created', newItem });
    } catch (error) {
      next(error);
    }
  },
);

router.delete(
  '/:id',
  validatorHandler(getPostSchema, 'params'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const deletedId = await service.delete(id);
      response
        .status(201)
        .json({ message: 'Deleted item with id: ' + deletedId });
    } catch (error) {
      next(error);
    }
  },
);

router.patch(
  '/:id',
  validatorHandler(getPostSchema, 'params'),
  validatorHandler(updatePostSchema, 'body'),
  async (request, response, next) => {
    try {
      const { body } = request;
      const { id } = request.params;
      const updatedId = await service.update(id, body);
      response
        .status(201)
        .json({ message: 'Updated item with id: ' + updatedId });
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
