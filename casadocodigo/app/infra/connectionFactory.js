var mysql = require( 'mysql' );

var connectMySQL = function() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'casadocodigo'
  });
};

// Wrapper
module.exports = function() {
  return connectMySQL;
};

exports.connect = connectMySQL;
