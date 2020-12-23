1. npm i -g knex
2. knex migrate:make create_user_and_todos_tables
3. knex seed:make 01_users
4. knex seed:make 02_todos
5. knex migrate:roolback
6. knex migrate:latest
7. knex seed:run
