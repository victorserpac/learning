module.exports = function( app ) {
  var api = app.api.auth;

  app.get( '/autenticar', api.autentica );
  app.get( '/*', api.verificaToken );
};
