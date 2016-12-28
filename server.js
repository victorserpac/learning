var http = require('http');

http.createServer(function( req, res ) {
  res.end( 'foo' );
}).listen( 3000, function() {
  console.log( 'neh' );
});
