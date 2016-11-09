
module.exports = function( app ) {
  app.get( '/produtos', function( request, response ) {
    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO( connection );

    produtosDAO.lista( function( error, resultados ) {
      response.format({
        html: function() {
          response.render( 'produtos/lista', { lista: resultados } );
        },
        json: function() {
          response.json( resultados );
        }
      });
    });

    connection.end();
  });

  app.get( '/produtos/form' , function( request, response ) {
    response.render( 'produtos/form' );
  });

  app.post( '/produtos', function( request, response ) {
    var produto = request.body;
    console.log( produto );

    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO( connection );

    produtosDAO.salva( produto, function( errros, resultados ){
      response.redirect( '/produtos' );
    });
  });

};
