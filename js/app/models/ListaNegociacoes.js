class ListaNegociacoes {
  constructor() {
    this._negociacoes = [];
  };

  adiociona(negociacao) {
    return this._negociacoes.push(negociacao);
  }

  get negociacoes() {
    return [].concat(this._negociacoes);
  }
}