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

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});