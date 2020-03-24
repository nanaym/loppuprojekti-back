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

// const getRestaurants = (cb) => {
//     pool.query('SELECT * from lounas ORDER BY restaurant ASC', (err, results) => {
//         if (err) throw err;
//         console.dir(results);
//         cb(results.rows);
//     })
// }

// const getPerson = (id, cb) => {
//     pool.query('SELECT * FROM lounas WHERE id=$1', [id], (err, results) => {
//         if (err) throw err;
//         console.dir(results.rows);
//         cb(results.rows);
//     })
// }

// const insertPerson = (newperson, cb) => {
//     const { name, restaurant, time } = newperson;
//     pool.query('INSERT INTO lounas (name, restaurant, time) VALUES ($1, $2, $3)', [name, restaurant, time], (err, results) => {
//         if (err) throw err;
//         console.dir(results);
//         cb(results.rowCount);
//     })
// }

// const updatePerson = (post, id, cb) => {
//     const { name, restaurant, time } = post;
//     pool.query('UPDATE lounas SET name=$1, restaurant=$2, time=$3 WHERE id=$4', [name, restaurant, time, id], (err, results) => {
//         if (err) throw err;
//         console.dir(results);
//         cb(results.rowCount);
//     })
// }

// const deletePerson = (id, cb) => {
//     pool.query('DELETE FROM lounas WHERE id=$1', [id], (err, results) => {
//         if (err) throw err;
//         console.dir(results);
//         cb(results.rowCount);
//     })
// }


module.exports = { getRestaurants, getPerson, insertPerson, deletePerson, updatePerson }