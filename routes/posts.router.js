const express = require('express');
const PostService = require('../services/post.service');

const router = express.Router();
const service = new PostService();

router.get('/', (req, res) => {
  res.json(service.find());
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const searchedPost = service.findOne(id);
  if (!searchedPost) {
    return res.status(404).json({ message: 'Not found' });
  }
  res.json(searchedPost);
});

router.post('/', (req, res) => {
  const { body } = req;
  if (!Object.keys(body).length) {
    return res.status(401).json({ message: 'Bad request' });
  }
  const newItem = service.create(body);
  res.status(201).json({ message: 'created', newItem });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const deletedId = service.delete(id);
  if (!deletedId) {
    return res.status(404).json({ message: 'Not found' });
  }
  res.status(201).json({ message: 'Deleted item with id: ' + deletedId });
});

router.patch('/:id', (req, res) => {
  const { body } = req;
  const { id } = req.params;
  if (!Object.keys(body).length) {
    return res.status(401).json({ message: 'Bad request' });
  }
  const updatedId = service.update(id, body);
  if (!updatedId) {
    return res.status(404).json({ message: 'Not found' });
  }

  res.status(201).json({ message: 'Updated item with id: ' + id });
});

module.exports = router;
