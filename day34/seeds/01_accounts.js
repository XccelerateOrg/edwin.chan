
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('accounts').del()
    .then(function () {
      // Inserts seed entries
      return knex('accounts').insert([
        {id: 1, name: 'Peter',gender:true},
        {id: 2, name: 'Charlie',gender:true},
      ]);
    });
};
