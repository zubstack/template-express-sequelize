const express = require('express');
const { initialPosts } = require('../utils/temp');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(initialPosts);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const searchedPost = initialPosts.find((post) => post.id === parseInt(id));
  if (!searchedPost) {
    return res.status(404).json({ message: 'Not found' });
  }
  res.json(searchedPost);
});

router.post('/', (req, res) => {
  const { body } = req;
  body.id = initialPosts.length + 1;
  body.author = faker.person.fullName();
  initialPosts.push(body);
  res.status(201).json({ message: 'created', body });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const index = initialPosts.findIndex((post) => post.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ message: 'Not found' });
  }
  initialPosts.splice(index, 1);
  res.status(201).json({ message: 'Deleted item with id: ' + id });
});

router.patch('/:id', (req, res) => {
  const { body } = req;
  const { id } = req.params;
  if (!Object.keys(body).length) {
    return res.status(401).json({ message: 'Bad request' });
  }
  const index = initialPosts.findIndex((post) => post.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ message: 'Not found' });
  }
  initialPosts[index] = { ...initialPosts[index], ...body };

  res.status(201).json({ message: 'Updated item with id: ' + id });
});

module.exports = router;
