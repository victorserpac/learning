var http = require( 'http' );

http.createServer( function( request, response ) {

  if ( request.url == '/produtos' ) {
    response.end( '<html><body>Listando os produtos da loja</body></html>' );
  } else {
    response.end( '<html><body>Home da casa do código</body></html>' );
  }

}).listen( 3000, 'localhost' );

console.log( 'Servidor está rodando' );
