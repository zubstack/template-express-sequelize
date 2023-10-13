const { config } = require('../config/config');

module.exports = {
  development: {
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    host: config.dbHost,
    dialect: 'postgres',
  },
  test: {
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbTest,
    host: config.dbHost,
    dialect: 'postgres',
  },
  production: {
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    host: config.dbHost,
    dialect: 'postgres',
  },
};
