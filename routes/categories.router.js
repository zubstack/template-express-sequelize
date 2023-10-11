const express = require('express');
const { categories } = require('../utils/temp');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(categories);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const searchedCategory = categories.find(
    (category) => category.id === parseInt(id),
  );
  res.json(searchedCategory);
});

module.exports = router;
