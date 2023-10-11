const postsRouter = require('../routes/posts.router');
const categoriesRouter = require('../routes/categories.router');

function routerApi(app) {
  app.use('/posts', postsRouter);
  app.use('/categories', categoriesRouter);
}

module.exports = routerApi;
