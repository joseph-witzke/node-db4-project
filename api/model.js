const db = require('../data/db-config');

function getAll() {
  return db('recipes');
}

module.exports = { getAll };
