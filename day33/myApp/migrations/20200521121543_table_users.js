
exports.up = function(knex,Promise) {
    return knex.schema.createTable('users',(table)=>{
      table.increments();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('password');
      table.boolean('active').defaultTo(false).notNullable();
      table.timestamps(false,true)
    })
  };
  
  exports.down = function(knex,Promise) {
    return knex.schema.dropTable('users')
  };
  