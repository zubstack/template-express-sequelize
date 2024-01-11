require('dotenv').config();

const database =
  process.env.NODE_ENV !== 'test'
    ? process.env.DB_NAME
    : process.env.DB_NAME_TEST;

const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: database,
  testing: process.env.NODE_ENV === 'test',
};

module.exports = { config };
