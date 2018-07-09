const mongo = require('think-model-mysql');

module.exports = {
  handle: mongo,
  database: 'mini-program',
  encoding: 'utf8mb4',
  host: '127.0.0.1',
  port: '27017',
  dateStrings: true
};
