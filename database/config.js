const { config } = require('../config/config');
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = (database) =>
  `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${database}`;

module.exports = {
  development: {
    url: URI(config.dbName),
    dialect: 'postgres',
  },
  test: {
    url: URI(config.dbTesting),
    dialect: 'postgres',
  },
  production: {
    url: URI,
    dialect: 'postgres',
  },
};
