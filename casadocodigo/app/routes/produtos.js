
module.exports = function( app ) {

  app.get( '/produtos', function( request, response ) {
    var connection = app.infra.connectionFactory();
    var produtosBanco = new app.infra.ProdutosDAO( connection );

    produtosBanco.lista( function( error, resultados ) {
      response.render( 'produtos/lista', {
        lista: resultados
      });
    });

    connection.end();
  });

  app.get( 'produtos/remove', function() {

  });

};
