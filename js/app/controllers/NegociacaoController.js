class NegociacaoController {
  constructor() {

    let $ = document.querySelector.bind(document);
    this.inputData = $('#data');
    this.inputQuantidade = $('#quantidade');
    this.inputValor = $('#valor');
    this.listaNegociacoes = new ListaNegociacao();

  }

  adiciona(event) {

    event.preventDefault();

    let data = DateHelper.textoPData(this.inputData.value);
    const negociacao = new Negociacao(
      data,
      this.inputQuantidade.value,
      this.inputValor.value
    );
    
    
  }
}