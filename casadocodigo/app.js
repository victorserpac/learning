var express = require( 'express' );
var app = express();

app.set( 'view engine', 'ejs' );

app.get( '/produtos', function( request, response ) {
  console.log( 'Listando' );
  response.render( 'produtos/lista' );
});

app.listen( 3000, function(){
  console.log( 'Servidor rodando' );
});
