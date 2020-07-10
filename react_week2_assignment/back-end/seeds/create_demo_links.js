
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('links').del()
    .then(function () {
      // Inserts seed entries
      return knex('links').insert([
        {id: 1, name: 'demo' ,url:'a.com',tags:'abc'},
        {id: 2, name: 'demo2',url:'b.com',tags:'lemon'},
        {id: 3, name: 'demo3',url:'c.com',tags:'pie'}
      ]);
    });
};
