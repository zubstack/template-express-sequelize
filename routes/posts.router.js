const express = require('express');
const PostService = require('../services/post.service');

const router = express.Router();
const service = new PostService();

router.get('/', async (req, res) => {
  res.json(await service.find());
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const searchedPost = await service.findOne(id);
    res.json(searchedPost);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { body } = req;
    const newItem = await service.create(body);
    res.status(201).json({ message: 'created', newItem });
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedId = await service.delete(id);
    res.status(201).json({ message: 'Deleted item with id: ' + deletedId });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params;
    const updatedId = await service.update(id, body);
    res.status(201).json({ message: 'Updated item with id: ' + updatedId });
  } catch (error) {
    return res.status(error.code).json({ message: error.message });
  }
});

module.exports = router;
