var mysql = require( 'mysql' );

function createDBConnectcion() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'casadocodigo'
  });
}

// Wrapper
module.exports = function() {
  return createDBConnectcion;
};
