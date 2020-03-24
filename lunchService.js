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

const insertPost = (newperson, cb) => {
    const { id, name, restaurant, time } = newperson;
    pool.query('INSERT INTO lounas (id, name, restaurant, time) VALUES ($1, $2, $3, $4)', [id, name, restaurant, time], (err, results) => {
        if (err) throw err;
        console.dir(results);
        cb(results.rowCount);
    })
}

const deletePost = (id, cb) => {
    pool.query('DELETE FROM lounas WHERE id=$1', [id], (err, results) => {
        if (err) throw err;
        console.dir(results);
        cb(results.rowCount);
    })
}

const updatePost = (post, id, cb) => {
    const { name, restaurant, time } = post;
    pool.query('UPDATE lounas SET name=$1, restaurant=$2, time=$3 WHERE id=$4', [name, restaurant, time, id], (err, results) => {
        if (err) throw err;
        console.dir(results);
        cb(results.rowCount);
    })
}

module.exports = { getPeople, getPerson, insertPost, deletePost, updatePost }
