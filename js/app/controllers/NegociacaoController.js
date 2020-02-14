class NegociacaoController {
  constructor() {

    let $ = document.querySelector.bind(document);
    this.inputData = $('#data');
    this.inputQuantidade = $('#quantidade');
    this.inputValor = $('#valor');
    this.listaNegociacoes = new ListaNegociacoes();

  }

  adiciona(event) {

    event.preventDefault();
    this.listaNegociacoes.adiociona(this.criaNegociacao());
    this.limpaFormulario();

    console.log(this.listaNegociacoes.negociacoes);

  }

  limpaFormulario() {
    this.inputData.value = '';
    this.inputQuantidade.value = 1;
    this.inputValor.value = 0;

    this.inputData.focus();
  }

  criaNegociacao() {
    let data = DateHelper.textoPData(this.inputData.value);
    return new Negociacao(
      data,
      this.inputQuantidade.value,
      this.inputValor.value
    );
  }

}