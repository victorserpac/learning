var stores = [ 'negociacoes' ];
var versions = 4;
var dbName = 'learningAdvancedJS';

class ConnectionFactory {

  constructor() {
    throw new Error( 'Não é possível criar instâncias de ConnectionFactory' );
  }

  static getConnection() {
    return new Promise( (resolve, reject ) => {

      let openRequest = window.indexedDB.open( dbName, 4 );

      openRequest.onupgradeneeded = e => {

      };

      openRequest.onsuccess = e => {

      };

      openRequest.onerror = e => {

      };
    });
  }
}
