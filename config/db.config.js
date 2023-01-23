'user strict';

const mysql = require('mysql');

//local mysql db connection
const dbConn = mysql.createConnection({
    host: 'sql571.main-hosting.eu',
    user: 'u304720237_derevo',
    password: 'D2r2v4@123',
    database: 'u304720237_derevo',
    multipleStatements: true
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;