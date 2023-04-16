const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'john',
  password: 'Jmjsc0510427$',
  database: 'journal'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

module.exports = connection;
