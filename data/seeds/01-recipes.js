exports.seed = function (knex, Promise) {
  return knex('recipes').insert([
    { recipe_name: 'Artisan Bread' },
    { recipe_name: 'Grilled Cheese' },
  ]);
};
