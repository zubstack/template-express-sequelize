/* eslint-disable no-unused-vars */

const logger = require('../utils/logger');

function logErrors(error, request, response, next) {
  logger.info(error);
  next(error);
}

function boomErrorHandler(error, request, response, next) {
  if (error.isBoom) {
    const { output } = error;
    return response.status(output.statusCode).json(output.payload);
  }
  next(error);
}

function errorHandler(error, request, response, next) {
  response.status(500).json({
    message: error.message,
    stack: error.stack,
  });
}

module.exports = { logErrors, errorHandler, boomErrorHandler };
