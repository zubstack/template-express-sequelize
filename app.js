const express = require('express');
const routerApi = require('./routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  unknownEndpoint,
} = require('./middlewares/error.handler.js');
const requestLogger = require('./middlewares/logger.request');

const app = express();

app.use(express.json());
app.use(requestLogger);

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(unknownEndpoint);
app.use(errorHandler);

module.exports = app;
