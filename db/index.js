const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', (err, results) => {
  if (err) throw err;
  console.log(`Solution is ${results[0].solution}`)
})

module.exports = connection;