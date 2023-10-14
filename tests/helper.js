const pool = require('../libs/postgres.pool');

async function initializeUsersDatabase() {
  await pool.query(
    "CREATE TABLE users (id SERIAL, name VARCHAR(50) NOT NULL, role VARCHAR(10) NOT NULL DEFAULT 'customer', username VARCHAR(35) NOT NULL UNIQUE, email  VARCHAR(75) NOT NULL UNIQUE, password VARCHAR(25))",
  );
  await pool.query(
    "INSERT INTO users ( name,username,email,password) VALUES ('Peter Wilson','peter_wil','peter@gmail.com', 'peter123')",
  );
  await pool.query(
    "INSERT INTO users ( name,role,username,email,password) VALUES ('Maria Viltriado', 'admin','maria_vl','maria@gmail.com', 'mar123')",
  );
  // console.log('Initialized');
}

async function clearUsersDatabase() {
  await pool.query('DROP TABLE users');
  // console.log('Clear');
}

module.exports = { initializeUsersDatabase, clearUsersDatabase };
