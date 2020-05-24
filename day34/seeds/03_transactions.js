
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('transactions').del()
    .then(function () {
      // Inserts seed entries
      return knex('transactions').insert([
        {id: 1, balance: 5400, trans_date: '2020-5-24',card_id:1},
        {id: 2, balance: 2400, trans_date: '2020-5-24',card_id:1},
        {id: 3, balance: 300, trans_date: '2020-5-24',card_id:2},
        {id: 4, balance: 23400, trans_date: '2020-5-24',card_id:2},
        {id: 5, balance: 10000, trans_date: '2020-5-24',card_id:3},
        {id: 6, balance: 9000, trans_date: '2020-5-24',card_id:3},
        {id: 7, balance: 100, trans_date: '2020-5-24',card_id:4},
        {id: 8, balance: 3800, trans_date: '2020-5-24',card_id:4},

      ]);
    });
};
