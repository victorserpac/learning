module.exports = function( app ) {

  app.get( '/v1/grupos', function( req, res ){

    var fotos = [
      { _id: 1, nome: 'esporte' },
      { _id: 2, nome: 'lugares' },
      { _id: 3, nome: 'animais' }
    ];

    res.json( fotos );
  });

};
