exports.up = function (knex) {
  return knex.schema
    .createTable('recipes', (table) => {
      table.increments('recipe_id');
      table.string('recipe_name', 127).notNullable().unique();
      table.timestamp('date-created').defaultTo(knex.fn.now());
    })
    .createTable('ingredients', (table) => {
      table.increments('ingredient_id');
      table.string('ingredient_name', 127);
    })
    .createTable('steps', (table) => {
      table.increments('step_id');
      table.integer('step_number');
      table.string('step-instructions');
      table
        .integer('recipe_id')
        .unsigned()

        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT');
    })
    .createTable('step-ingredients', (table) => {
      table.increments('step_ingredient_id');
      table.float('quantity');
      table
        .integer('step_id')
        .unsigned()

        .references('step_id')
        .inTable('steps')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT');
      table
        .integer('ingredient_id')
        .unsigned()

        .references('ingredient_id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('step-ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
