const {Client} = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });

client.connect();

const getPeople = (cb) => {
    client.query('SELECT * from lounas', (err, results) => {
        if (err) throw err;
        console.dir(results);
        cb(results.rows);
    })
}

// tätä funktiota ei käytetä
const getRestaurants = (cb) => {
    client.query('SELECT * from lounas ORDER BY restaurant, time ', (err, results) => {
        if (err) throw err;
        console.dir(results);
        cb(results.rows);
    })
}

const getPerson = (id, cb) => {
    client.query('SELECT * FROM lounas WHERE id=$1', [id], (err, results) => {
        if (err) throw err;
        console.dir(results.rows);
        cb(results.rows);
    })
}

const insertPost = (newperson, cb) => {
    const { name, restaurant, time } = newperson;
    client.query('INSERT INTO lounas (name, restaurant, time) VALUES ($1, $2, $3)', [name, restaurant, time], (err, results) => {
        if (err) throw err;
        console.dir(results);
        cb(results.rowCount);
    })
}

const deletePost = (id, cb) => {
    client.query('DELETE FROM lounas WHERE id=$1', [id], (err, results) => {
        if (err) throw err;
        console.dir(results);
        cb(results.rowCount);
    })
}

const deleteAll = (cb) => {
    client.query('DELETE FROM lounas', (err, results) => {
        if (err) throw err;
        console.dir(results);
        cb(results.rowCount);
    })
}

const updatePost = (post, id, cb) => {
    const { name, restaurant, time } = post;
    client.query('UPDATE lounas SET name=$1, restaurant=$2, time=$3 WHERE id=$4', [name, restaurant, time, id], (err, results) => {
        if (err) throw err;
        console.dir(results);
        cb(results.rowCount);
    })
}

module.exports = { getPeople, getRestaurants, getPerson, insertPost, deletePost, deleteAll, updatePost }
