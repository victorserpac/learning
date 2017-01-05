module.exports = function( app ) {
  app.get( '/pagamentos', function( req, res ) {
    res.end( 'OK.' );
  });

  app.delete( '/pagamentos/pagamento/:id', function( req, res ) {
    var pagamento = {};
    var id = req.params.id;

    pagamento.id = id;
    pagamento.status = 'CANCELADO';

    var connection = app.persistencia.connectionFactory();
    var pagamentoDao = new app.persistencia.PagamentoDao( connection );

    pagamentoDao.atualiza( pagamento, function( erro ) {
      if ( erro ) {
        res.status( 500 ).send( erro );
      }

      console.log( 'Pagamento cancelado' );
      res.status( 204 ).send( pagamento );
    });
  });


  app.put( '/pagamentos/pagamento/:id', function( req, res ) {
    var pagamento = {};
    var id = req.params.id;

    pagamento.id = id;
    pagamento.status = 'CONFIRMADO';

    var connection = app.persistencia.connectionFactory();
    var pagamentoDao = new app.persistencia.PagamentoDao( connection );

    pagamentoDao.atualiza( pagamento, function( erro ) {
      if ( erro ) {
        res.status( 500 ).send( erro );
      }

      res.send( pagamento );
    });
  });

  app.post( '/pagamentos/pagamento', function( req, res ) {

    req.assert( 'forma_de_pagamento', 'Forma de pagamento é obrigatório' ).notEmpty();
    req.assert( 'valor', 'Valor é obrigatório e deve ser um decimal' ).notEmpty().isFloat();

    var erros = req.validationErrors();

    if ( erros ) {
      console.log( 'Erros de validação encontrados' );
      res.status( 500 ).send( erros );
      return;
    }

    var pagamento = req.body;
    console.log( 'Processando uma requisicao de um novo pagamento' );

    pagamento.status = 'CRIADO';
    pagamento.data = new Date();

    var connection = app.persistencia.connectionFactory();
    var pagamentoDao = new app.persistencia.PagamentoDao( connection );

    pagamentoDao.salva( pagamento, function( erro, resultado ){
      if ( erro ) {
        console.log( 'Erro ao inserir no banco' + erro );
        res.status( 400 ).send( erro );
      } else {
        pagamento.id = resultado.insertId;
        console.log( 'pagamento criado' );

        res.location( 'pagamentos/pagamento/' + pagamento.id );

        var response = {
          dados_do_pagamento: pagamento,
          links: [
            {
              href: 'http://localhost:3000/pagamentos/pagamento/' + pagamento.id,
              rel: 'confirmar',
              method: 'PUT'
            },
            {
              href: 'http://localhost:3000/pagamentos/pagamento/' + pagamento.id,
              rel: 'cancelar',
              method: 'DELETE'
            }
          ]
        };

        res.status( 201 ).json( response );
      }
    });
  });
};
