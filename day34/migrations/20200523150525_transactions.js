
exports.up = function(knex) {
  return knex.schema.createTable('transactions',table=>{
      table.increments();
      table.integer('balance');
      table.date('trans_date');
      table.integer('card_id').unsigned();
        table.foreign('card_id').references('credit_cards.id')
      table.timestamps(false,true)
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('transactions')
};
