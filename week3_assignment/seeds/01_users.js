
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id:1, name: '123', password:'123'},
        {id:2, name: 'me', password:'me'},
        {id:3, name: 'he', password:'he'},
        {id:4, name: 'a', password:'a'}
      ]);
    });
};
