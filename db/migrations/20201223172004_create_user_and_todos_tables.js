
exports.up = function(knex) {
  return knex.schema.createTable('users',(table)=>{
      table.increments();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());

     
  })
  .createTable('todos',(table)=>{
      table.increments();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.boolean('completed').notNullable().defaultTo(false);
      table.string('title').notNullable();
      table.integer('user_id').references('id').inTable('users');
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('todos').dropTable('users');
};
