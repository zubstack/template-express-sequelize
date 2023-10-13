const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');
const logger = require('../utils/logger');

class PersonService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (error) => logger.error(error));
  }

  async find() {
    const response = await this.pool.query('SELECT * FROM persons');
    return response.rows;
  }
  async findOne(id) {
    const { rows } = await this.pool.query(
      `SELECT * FROM persons WHERE id = ${id}`,
    );
    if (!Object.keys(rows).length) {
      throw boom.notFound('This person does not exist');
    }
    return rows;
  }

  async create(body) {
    if (!Object.keys(body).length) {
      throw boom.badRequest('Missing data');
    }
    const query = `INSERT INTO persons (name, birth_date, phone)
    VALUES ('${body.name}', '${body.birth_date}', '${body.phone}');`;
    await this.pool.query(query);
    return body;
  }

  async delete(id) {
    const [item] = await this.findOne(id);
    await this.pool.query(`DELETE FROM persons WHERE id = ${item.id}`);
    return id;
  }

  async update(id, body) {
    if (!Object.keys(body).length) {
      throw boom.badRequest('Missing data');
    }
    const [item] = await this.findOne(id);
    const query = [];
    for (const key in body) {
      const element = body[key];
      query.push(`${key} = '${element}'`);
    }
    await this.pool.query(
      `UPDATE persons SET ${query.join(', ')} WHERE id = ${item.id}`,
    );
    return id;
  }
}

module.exports = PersonService;
