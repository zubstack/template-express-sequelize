const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'lobato',
  password: 'loto123',
  database: 'blog_database',
});

module.exports = pool;
