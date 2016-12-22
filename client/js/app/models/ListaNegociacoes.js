class ListaNegociacoes {

  constructor() {
    this._negociacoes = [];
  }

  get negociacoes() {
    return [].concat( this._negociacoes );
  }

  get volumeTotal() {
    return this._negociacoes.reduce( ( total, n ) => total + n.volum, 0.0 );
  }

  adiciona( negociacao ) {
    this._negociacoes.push( negociacao );
  }


  esvazia() {
    this._negociacoes = [];
  }
}
