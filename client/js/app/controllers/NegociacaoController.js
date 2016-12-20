class NegociacaoController {

  add(event){
    event.preventDefault();

    let $ = document.querySelector.bind( document ); // Keep association with document

    let inputData       = $( '#data' );
    let inputQuantidade = $( '#quantidade' );
    let inputValor      = $( '#valor' );

    console.log( inputData.value );
    console.log( inputQuantidade.value );
    console.log( inputValor.value );
  }

}
