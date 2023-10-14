const express = require('express');
const postsRouter = require('../routes/posts.router');
const categoriesRouter = require('../routes/categories.router');
const usersRouter = require('../routes/users.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/posts', postsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
