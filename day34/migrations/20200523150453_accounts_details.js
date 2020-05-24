
exports.up = function(knex) {
  return knex.schema.createTable('accounts',table=>{
      table.increments();
      table.string('name');
      table.boolean('gender');
    table.timestamps(false,true)
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('accounts')
};
