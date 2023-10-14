const express = require('express');
const UserService = require('../services/user.service');

const router = express.Router();
const service = new UserService();

router.get('/', async (request, response) => {
  response.json(await service.find());
});

router.get('/:id', async (request, response) => {
  const { id } = request.params;
  const searchedUser = await service.findOne(id);
  response.json(searchedUser);
});

router.post('/', async (request, response) => {
  const { body } = request;
  const newItem = await service.create(body);
  response.status(201).json({ message: 'created', newItem });
});

router.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const deletedId = await service.delete(id);
  response.status(201).json({ message: 'Deleted item with id: ' + deletedId });
});

router.patch('/:id', async (request, response) => {
  const { body } = request;
  const { id } = request.params;
  const updatedId = await service.update(id, body);
  response.status(201).json({ message: 'Updated item with id: ' + updatedId });
});

module.exports = router;
