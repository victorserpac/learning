class NegociacaoDao {

  constructor( connection ) {
    this._connection = connection;
    this._store = 'negociacoes';
  }

  adiciona( negociacao ) {
    return new Promise( ( resolve, reject ) => {

      let request = this._connection
        .transaction( [ this._store ], 'readwrite' )
        .objectStore( this._store )
        .add( negociacao );

      request.onsuccess = e => {
        resolve( );
      };

      request.onerror = e => {
        console.log( e.target.error );
        reject( 'não foi possível adicionar a negociação' );
      };

    });
  }

  listaTodos() {
    return new Promise( ( resolve, reject ) => {

      let cursor = this._connection
        .transaction( [ this._store ], 'readwrite' )
        .objectStore( this._store )
        .openCursor();

      let negociacoes = [];

      cursor.onsuccess = event => {
        let atual = event.target.result;

        if ( atual ) {
          let dado = atual.value;

          negociacoes.push( new Negociacao( dado._date, dado._amount, dado._value ) );

          atual.continue();

        } else {

          resolve( negociacoes );

        }
      };

      cursor.onerror = event => {
        console.log( event.target.error.name );
        reject( 'Não foi possivel listar as negociações' );
      };
    });
  }
}
