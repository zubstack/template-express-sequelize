const app = require('./app');
const sequelize = require('./libs/sequelize');
const logger = require('./utils/logger');

const PORT = process.env.NODE_ENV !== 'test' ? 4000 : 4001;

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    logger.info('Connection has been established successfully.');
  } catch (error) {
    logger.error('Unable to connect to the database:', error);
  }
};

(async () => {
  await connectDb();
  app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
})();
