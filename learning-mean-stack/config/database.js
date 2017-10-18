module.exports = function( uri ) {

  var mongoose = require( 'mongoose' );

  mongoose.connect( 'mongodb://' + uri );

  mongoose.connection.on( 'connected', function() {
    console.log('Conectado ao MongoDB');
  });

  mongoose.connection.on( 'error', function(erro) {
    console.log('Erro na conexão ' + erro);
  });

  mongoose.connection.on( 'disconnected', function() {
    console.log( 'Desconectado do MongoDB' );
  });

  process.on( 'SIGINT', function(){
    mongoose.connection.close(function(){
      console.log('Conexão fechado pelo termino da aplicação');
      process.exit(0);
    });
  });

};
