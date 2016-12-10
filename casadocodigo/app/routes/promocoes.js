module.exports = function(app) {
  app.get( '/promocoes/form', function( req, res ) {
    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO( connection );

    produtosDAO.lista( function( error, resultados ) {
      res.render( 'promocoes/form', { lista:resultados } );
    });
    connection.end();

  });

  app.post( '/promocoes', function( req, res ) {
    var promocoes = req.body;
    console.log( promocoes );
    res.redirect( 'promocoes/form' );
  });
};
