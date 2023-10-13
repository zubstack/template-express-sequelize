const boom = require('@hapi/boom');
const sequelize = require('../libs/sequelize');

class PersonService {
  constructor() {}

  async find() {
    const [data] = await sequelize.query('SELECT * FROM persons');
    return data;
  }
  async findOne(id) {
    const [data] = await sequelize.query(
      `SELECT * FROM persons WHERE id = ${id}`,
    );
    if (!Object.keys(data).length) {
      throw boom.notFound('This person does not exist');
    }
    return data;
  }

  async create(body) {
    if (!Object.keys(body).length) {
      throw boom.badRequest('Missing data');
    }
    const query = `INSERT INTO persons (name, birth_date, phone)
    VALUES ('${body.name}', '${body.birth_date}', '${body.phone}');`;
    await sequelize.query(query);
    return body;
  }

  async delete(id) {
    const [item] = await this.findOne(id);
    await sequelize.query(`DELETE FROM persons WHERE id = ${item.id}`);
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
    await sequelize.query(
      `UPDATE persons SET ${query.join(', ')} WHERE id = ${item.id}`,
    );
    return id;
  }
}

module.exports = PersonService;
