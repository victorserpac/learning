
module.exports = function( app ) {

  app.get( '/produtos', function( request, response ) {

    var connection = app.infra.connectionFactory();
    var produtosBanco = app.infra.produtosBanco;

    produtosBanco.lista( connection, function( error, resultados ) {
      response.render( 'produtos/lista', {
        lista: resultados
      });
    });

    connection.end();

  });

};
