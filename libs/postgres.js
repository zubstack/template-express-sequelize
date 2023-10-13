const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'lobato',
    password: 'loto123',
    database: 'blog_database',
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
