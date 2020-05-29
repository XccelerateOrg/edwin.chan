
exports.up = function(knex) {
  return knex.schema.createTable('data',table=>{
    table.increments().primary();
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('id').inTable('users');
    table.string('text_data');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('data')
};
