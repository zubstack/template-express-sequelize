const { Pool } = require('pg');

const database =
  process.env.NODE_ENV !== 'test' ? 'blog_database' : 'test_blogdb';

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'lobato',
  password: 'loto123',
  database: database,
});

module.exports = pool;
