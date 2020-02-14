class NegociacaoView {

  constructor(elemento) {
    this._elemento = elemento;
  }

  template(model) {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            <th>VOLUME</th>
          </tr>
        </thead>

        <tbody>
        </tbody>
          ${model.negociacoes.map( n => {
            return `
            <tr>
              <td>${DateHelper.dataPTexto(n.data)}</td>
              <td>${n.quantidade}</td>
              <td>${n.valor}</td>
              <td>${n.volume}</td>
            </tr>`
          } ).join('')}
        <tfoot>
        </tfoot>
      </table>
    `
  }

  update(model) {
    this._elemento.innerHTML = this.template(model);
  }
}