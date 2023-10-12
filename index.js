const app = require('./app');
const logger = require('./utils/logger');

const port = process.env.NODE_ENV !== 'test' ? 4001 : 4000;
// const port = 4000;

app.listen(port, () => {
  logger.info('Server is running at port: ' + port);
});
