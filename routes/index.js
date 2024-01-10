const express = require('express');
const cardsRouter = require('../routes/cards.router');
const decksRouter = require('../routes/decks.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/cards', cardsRouter);
  router.use('/decks', decksRouter);
}
module.exports = routerApi;
