
exports.up = function(knex,Promise) {
  return knex.schema.createTable('bookings',table=>{
      table.increments();
      table.date('date').notNullable();
      table.string('remark').notNullable();
      table.timestamps(false,true);
  })
};

exports.down = function(knex,Promise) {
  return knex.schema.dropTable('bookings')
};
