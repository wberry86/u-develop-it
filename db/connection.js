const mysql = require("mysql2");

const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "SammyLyla3328",
      database: "election",
    });



    module.exports = db;