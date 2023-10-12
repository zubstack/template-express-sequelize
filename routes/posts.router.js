const express = require('express');
const { initialPosts } = require('../utils/temp');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(initialPosts);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const searchedPost = initialPosts.find((post) => post.id === parseInt(id));
  res.json(searchedPost);
});

router.post('/', (req, res) => {
  const { body } = req;
  body.id = initialPosts.length + 1;
  initialPosts.push(body);
  res.send(body);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = initialPosts.findIndex((post) => post.id === parseInt(id));
  initialPosts.splice(index, 1);
  res.json('Deleted item with id: ' + id);
});

router.patch('/:id', (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const index = initialPosts.findIndex((post) => post.id === parseInt(id));
  initialPosts[index] = { ...initialPosts[index], ...body };

  res.json('Updated item with id: ' + id);
});

module.exports = router;
