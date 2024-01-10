const express = require('express');
const CardService = require('../services/card.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createCardSchema,
  getCardSchema,
  updateCardSchema,
} = require('../schemas/card.schema');

const router = express.Router();
const service = new CardService();

router.get('/', async (request, response) => {
  response.status(200).json(await service.find());
});

router.get(
  '/:id',
  validatorHandler(getCardSchema, 'params'),
  async (request, response) => {
    const { id } = request.params;
    const searchedCard = await service.findById(id);
    response.status(200).json({ card: searchedCard });
  },
);

router.post(
  '/',
  validatorHandler(createCardSchema, 'body'),
  async (request, response) => {
    const { body } = request;
    await service.create(body);
    response.status(201).json({ message: 'created' });
  },
);

router.delete(
  '/:id',
  validatorHandler(getCardSchema, 'params'),
  async (request, response) => {
    const { id } = request.params;
    await service.destroy(id);
    response.status(201).json({ message: 'destroyed' });
  },
);

router.patch(
  '/:id',
  validatorHandler(getCardSchema, 'params'),
  validatorHandler(updateCardSchema, 'body'),
  async (request, response) => {
    const { body } = request;
    const { id } = request.params;
    await service.update(id, body);
    response.status(201).json({ message: 'updated' });
  },
);

module.exports = router;
