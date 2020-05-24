
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('credit_cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('credit_cards').insert([
        {id: 1, card_number: '4539294963202537',user_id:1},
        {id: 2, card_number: '4024007199284505',user_id:1},
        {id: 3, card_number: '2720990416746706',user_id:2},
        {id: 4, card_number: '6380342959442057',user_id:2}
      ]);
    });
};
