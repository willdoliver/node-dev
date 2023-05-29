require('dotenv').config()

const { Model } = require('objection');
const Knex = require('knex')

// Start Knex connection
const knex = Knex({
    client: 'mysql2',
    connection: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB,
    },
    insecureAuth : true
})

Model.knex(knex);

module.exports = knex;
