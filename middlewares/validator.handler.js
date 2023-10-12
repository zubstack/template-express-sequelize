/* eslint-disable no-unused-vars */
const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (request, response, next) => {
    const data = request[property];
    const { error } = schema.validate(data);
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}

module.exports = validatorHandler;

// Este validator checa cualquier dato y lo compara segun el schema apropiado
