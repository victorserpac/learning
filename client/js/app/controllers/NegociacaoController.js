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

    let helper = new DateHelper();  

    let negociacao = new Negociacao(
      helper.textoParaData( this._inputData.value ),
      this._inputQuantidade.value,
      this._inputValor.value
    );

    console.log( negociacao );


    console.log( helper.dataParaTexto( negociacao.date ) );
    // adicionar a negociacao em uma lista
  }

}
