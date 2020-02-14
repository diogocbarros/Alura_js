class ListaNegociacoes {
  constructor() {
    this._negociacoes = [];
  };

  adiociona(negociacao) {
    return this._negociacoes.push(negociacao);
  }

  get negociacoes() {
    return this._negociacoes;
  }
}