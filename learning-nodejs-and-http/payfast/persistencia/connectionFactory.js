var mysql = require( 'mysql' );

var connectMySQL = function() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'payfast'
  });
};

// Wrapper
module.exports = function() {
  return connectMySQL;
};
