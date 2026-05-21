const { Pool } = require('pg');


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'sistema_estoque',
    password: 'root',
    port: 5432
});

module.exports = pool;