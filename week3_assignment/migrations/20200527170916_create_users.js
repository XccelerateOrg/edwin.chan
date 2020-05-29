
exports.up = function(knex) {
  return knex.schema.createTable('users',table=>{
      table.increments().primary()
      table.string('name').notNullable();
      table.string('password').notNullable();
      table.timestamps(false,false);
  })
};

exports.down = function(knex) {
  return knex.dropTable('user');
};
