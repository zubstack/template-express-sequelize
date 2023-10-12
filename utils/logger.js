/* eslint-disable no-console */
const logger = {
  info: (...params) => {
    console.log(...params);
  },
  error: (...params) => {
    console.error(...params);
  },
};
module.exports = logger;
