const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'climed01',
    port: 5432, // default PostgreSQL port
});

pool.connect((err) => {
    if (err) throw err;
    console.log("Connected to the database!");
});

module.exports = pool;