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

    let negociacao = new Negociacao(
      DateHelper.textoParaData( this._inputData.value ),
      this._inputQuantidade.value,
      this._inputValor.value
    );

    console.log( negociacao );


    console.log( DateHelper.dataParaTexto( negociacao.date ) );
    // adicionar a negociacao em uma lista
  }

}
