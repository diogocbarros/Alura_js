class NegociacaoController {
  constructor() {

    let $ = document.querySelector.bind(document);
    this.inputData = $('#data');
    this.inputQuantidade = $('#quantidade');
    this.inputValor = $('#valor');

  }

  adiciona(event) {

    event.preventDefault();
    // Converto Data na Mascara aceita pela funcao new Date()
    let dtCampo = this.inputData.value.split('-');
    let dtConv = new Date(dtCampo[0], dtCampo[1] - 1, dtCampo[2])

    const negociacao = new Negociacao(
      dtConv,
      this.inputQuantidade.value,
      this.inputValor.value
    );

    console.log(negociacao);

  }
}