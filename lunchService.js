const Pool = require('pg').Pool;
require('dotenv').config();
// Get Postgres entry information from dot dot dot dot .. rebooot : dot env
const USER = process.env.PGUSER;
const PASSWORD = process.env.PGPASSWORD;

const conopts = {
    user: USER,
    password: PASSWORD,
    host: 'localhost',
    database: 'loppuprojekti',
    port: 5432
};

const pool = new Pool(conopts);

const getPeople = (cb) => {
    pool.query('SELECT * from lounas ORDER BY name ASC', (err, results) => {
        if (err) throw err;
        console.dir(results);
        cb(results.rows);
    })
}

const getPerson = (id, cb) => {
    pool.query('SELECT * FROM lounas WHERE id=$1', [id], (err, results) => {
        if (err) throw err;
        console.dir(results.rows);
        cb(results.rows);
    })
}

module.exports = { getPeople, getPerson }
