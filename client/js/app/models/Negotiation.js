class Negotiation {

  constructor( date, amount, value ) {
    this._date = date;
    this._amount = amount;
    this._value = value;
  }

  getVolum() {
    return this._amount * this._value;
  }

  getDate() {
    return this._date;
  }

  getAmount() {
    return this._amount;
  }

  getValue() {
    return this._value;
  }

}
