
exports.up = function(knex) {
  return knex.schema.createTable('credit_cards',table=>{
    table.increments();
    table.string('card_number');
    table.integer('user_id').unsigned()
    table.foreign('user_id').references('accounts.id')
    table.timestamps(false,true)
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('credit_cards')
};
