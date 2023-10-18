const express = require('express');
const EbookService = require('../services/ebook.service');

const router = express.Router();
const service = new EbookService();

router.get('/', async (request, response) => {
  response.json(await service.find());
});

router.get('/:id', async (request, response) => {
  const { id } = request.params;
  response.json(await service.findOne(id));
});

router.post('/', async (request, response) => {
  const { body } = request;
  const newItem = await service.create(body);
  response.status(201).json({ message: 'created', newItem });
});
module.exports = router;
