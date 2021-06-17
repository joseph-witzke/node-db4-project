const db = require('../data/db-config');

function getAll() {
  return db('recipes');
}

function getById(recipe_id) {
  return db('recipes').where({ recipe_id }).first();
}

function insert(recipe) {
  return db('recipes')
    .insert(recipe)
    .then(([recipe_id]) => {
      return getById(recipe_id);
    });
}

module.exports = { getAll, getById, insert };
