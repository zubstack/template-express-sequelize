const express = require('express');
const routerApi = require('./routes');
const logger = require('./utils/logger');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler.js');

const app = express();
const port = 4000;

app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  logger.info('Server is running at port: ' + port);
});
