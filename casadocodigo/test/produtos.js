var express = require( '../config/express.js' )();
var request = require( 'supertest' )( express );

describe( '#ProdutosController', function() {
  it( '#listagem json', function( done ) {

    request.get( '/produtos' )
      .set( 'Accept', 'application/json' )
      .expect( 'Content-Type', /json/ )
      .expect( 200, done );
  });
});



// produtoController
  // lista json
  //
  // cadastro aceita json
  //
  // cadastro aceita urlencoded
