const express = require('express');
const postsRouter = require('../routes/posts.router');
const categoriesRouter = require('../routes/categories.router');
const personsRouter = require('../routes/persons.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/posts', postsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/persons', personsRouter);
}

module.exports = routerApi;
