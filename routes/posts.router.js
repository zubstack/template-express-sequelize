const express = require('express');
const PostService = require('../services/post.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createPostSchema,
  updatePostSchema,
} = require('../schemas/post.schema');

const router = express.Router();
const service = new PostService();

router.get('/', async (req, res) => {
  res.json(await service.find());
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const searchedPost = await service.findOne(id);
    res.json(searchedPost);
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  validatorHandler(createPostSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body } = req;
      const newItem = await service.create(body);
      res.status(201).json({ message: 'created', newItem });
    } catch (error) {
      next(error);
    }
  },
);

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedId = await service.delete(id);
    res.status(201).json({ message: 'Deleted item with id: ' + deletedId });
  } catch (error) {
    next(error);
  }
});

router.patch(
  '/:id',
  validatorHandler(updatePostSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body } = req;
      const { id } = req.params;
      const updatedId = await service.update(id, body);
      res.status(201).json({ message: 'Updated item with id: ' + updatedId });
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
