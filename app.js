const express = require('express');
require('express-async-errors');
const cors = require('cors');
const morgan = require('morgan');
const routerApi = require('./routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  unknownEndpoint,
} = require('./middlewares/error.handler.js');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (request, response) => {
  response.send('<h1>Welcome to Blog API</h1>');
});
routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(unknownEndpoint);
app.use(errorHandler);

module.exports = app;
