const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();



// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});



// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'SammyLyla3328',
        database: 'election'
    },
    console.log('Connected to the election daatabase')
);
/*
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
  });


// get a single candidate


db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
    if (err) {
        console.log(err);
    }
    console.log(row);
});



// delete a candidate
db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});

*/

// create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
                VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});