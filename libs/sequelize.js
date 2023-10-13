/* eslint-disable no-console */
const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../database/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: console.log,
});

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;

// NOTE: {logging: true} to visualize our request translated to SQL
