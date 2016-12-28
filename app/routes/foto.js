module.exports = function( app ) {

  app.get( '/v1/fotos', function( req, res ){

    var fotos = [
      { _id: 1, titulo: 'Leão', url: 'asd' },
      { _id: 2, titulo: 'Leão 2', url: 'asdf' }
    ];

    res.json( fotos );
  });

};
