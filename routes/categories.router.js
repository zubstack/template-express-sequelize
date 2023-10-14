const express = require('express');
const CategoryService = require('../services/category.service');

const router = express.Router();
const service = new CategoryService();

router.get('/', async (request, response) => {
  response.json(await service.find());
});

router.get('/:id', async (request, response) => {
  const { id } = request.params;
  const searchedPost = await service.findOne(id);
  response.json(searchedPost);
});

module.exports = router;
