angular.module( 'alurapic' )
  .factory( 'tokenInterceptor', function( $window ) {
    var interceptor = {};

    interceptor.response = function( response ) {
      var token = response.headers( 'x-access-token' );
      if( token ) {
        $window.sessionStorage.token = token;
        console.log( 'Token armazenado no navegador' );
      }
      return response;
    };

    interceptor.request = function( config ) {
      config.headers = config.headers || {};

      if ( $window.sessionStorage.token ) {
        config.headers[ 'x-access-token' ] = $window.sessionStorage.token;
        console.log('Adicionando token no header da requisição');
      }

      return config;
    };

    return interceptor;
  });
