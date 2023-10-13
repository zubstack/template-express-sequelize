const pool = require('../libs/postgres.pool');

async function initializePersonsDatabase() {
  await pool.query(
    'CREATE TABLE persons (id SERIAL,                                         name VARCHAR(50) NOT NULL,birth_date DATE,phone VARCHAR(15) NOT NULL UNIQUE)',
  );
  await pool.query(
    "INSERT INTO persons (name, birth_date, phone) VALUES ('Peter Wilson', '1990-07-15', '0711-020361')",
  );
  await pool.query(
    "INSERT INTO persons (name, birth_date, phone) VALUES ('Maria Viltriado', '1999-07-15', '0611-020761')",
  );
  console.log('Initialized');
}

async function clearPersonDatabase() {
  await pool.query('DROP TABLE persons');
  console.log('Clear');
}

module.exports = { initializePersonsDatabase, clearPersonDatabase };
