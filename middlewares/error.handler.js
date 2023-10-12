/* eslint-disable no-unused-vars */

const logger = require('../utils/logger');

function logErrors(error, req, res, next) {
  logger.info(error);
  next(error);
}

function boomErrorHandler(error, req, res, next) {
  if (error.isBoom) {
    const { output } = error;
    return res.status(output.statusCode).json(output.payload);
  }
  next(error);
}

function errorHandler(error, req, res, next) {
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
}

module.exports = { logErrors, errorHandler, boomErrorHandler };
