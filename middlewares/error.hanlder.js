/* eslint-disable no-unused-vars */
function logErrors(error, req, res, next) {
  console.log(error);
  next(error);
}

function errorHandler(error, req, res, next) {
  if (error.message === 'Not found') {
    return res.status(404).json({ message: error.message });
  }
  if (error.message === 'Bad request') {
    return res.status(401).json({ message: error.message });
  }
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
}

module.exports = { logErrors, errorHandler };
