class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind( document ); // Keep association with document

    this._inputData       = $( '#data' );
    this._inputQuantidade = $( '#quantidade' );
    this._inputValor      = $( '#valor' );

  }

  add( event ) {
    event.preventDefault();

    // Spread operator
    let data = new Date(...
      this._inputData.value
        .split( '-' )
        .map( ( item, indice ) => item - indice % 2 )
    );

    let negociacao = new Negociacao(
      data,
      this._inputQuantidade.value,
      this._inputValor.value
    );

    console.log( negociacao );
    // adicionar a negociacao em uma lista
  }

}
