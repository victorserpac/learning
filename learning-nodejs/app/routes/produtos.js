
module.exports = function( app ) {
  app.get( '/produtos', function( request, response, next ) {
    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO( connection );

    produtosDAO.lista( function( error, resultados ) {
      if ( error ) {
        return next( error );
      }

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
    response.render( 'produtos/form', { errosValidacao: {}, produto: {} } );
  });

  app.post( '/produtos', function( request, response ) {

    var produto = request.body;

    request.assert( 'titulo', 'Titulo é obrigatório' ).notEmpty();
    request.assert( 'preco', 'Formato inválido' ).isFloat();
    request.assert( 'descricao', 'Descrição é obrigatório' ).notEmpty();

    var erros = request.validationErrors();

    if ( erros ) {
      response.format({
        html: function() {
          response.status( 400 ).render( 'produtos/form', { errosValidacao: erros, produto: produto } );
        },
        json: function() {
          response.status( 400 ).json( erros );
        }
      });
      return;
    }

    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO( connection );

    produtosDAO.salva( produto, function( errros, resultados ){
      response.redirect( '/produtos' );
    });
  });

};
