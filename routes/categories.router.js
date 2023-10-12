const express = require('express');
const { categories } = require('../utils/temp');

const router = express.Router();

router.get('/', (request, response) => {
  response.json(categories);
});

router.get('/:id', (request, response) => {
  const { id } = request.params;
  const searchedCategory = categories.find(
    (category) => category.id === parseInt(id),
  );
  response.json(searchedCategory);
});

module.exports = router;
