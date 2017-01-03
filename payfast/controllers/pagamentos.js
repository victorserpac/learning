module.exports = function( app ) {
  app.get( '/pagamentos', function( req, res ) {
    res.end( 'OK.' );
  });

  app.post( '/pagamentos/pagamento', function( req, res ) {
    var pagamento = req.body;
    console.log( 'Processando uma requisicao de um novo pagamento' );

    pagamento.status = 'CRIADO';
    pagamento.data = new Date();

    var connection = app.persistencia.connectionFactory();
    var pagamentoDao = new app.persistencia.PagamentoDao( connection );
    // console.log( pagamentoDao );
    pagamentoDao.salva( pagamento, function( erro, resultado ){
      console.log( 'pagamento criado' );
    //
      res.json( pagamento );
    });
  });
};
