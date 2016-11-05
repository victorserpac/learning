
module.exports = function( app ) {

  app.get( '/produtos', function( request, response ) {

    var connection = app.infra.connectionFactory();

    connection.query( 'select * from livros', function( error, result ) {
      response.render( 'produtos/lista', {
        lista: result
      });
    });

    connection.end();

  });

};
