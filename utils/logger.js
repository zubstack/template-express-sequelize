/* eslint-disable no-console */
const logger = {
  info: (...params) => {
    if (process.env.NODE_ENV !== 'test') {
      console.log(...params);
    }
  },
  error: (...params) => {
    if (process.env.NODE_ENV !== 'test') {
      console.error(...params);
    }
  },
};
module.exports = logger;
