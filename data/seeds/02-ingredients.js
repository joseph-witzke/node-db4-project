exports.seed = function (knex, Promise) {
  return knex('ingredients').insert([
    { ingredient_name: 'flour' },
    { ingredient_name: 'water' },
    { ingredient_name: 'salt' },
    { ingredient_name: 'yeast' },
    { ingredient_name: 'bread' },
    { ingredient_name: 'butter' },
    { ingredient_name: 'cheese' },
  ]);
};
