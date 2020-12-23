
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: ' Reddy',email:'ram.node@gmail.com'},
        {id: 2, name: 'Sindhu menoon',email:'Sindhumenoon@gmail.com'}
        
      ]);
    });
};
