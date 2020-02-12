class DateHelper {

  constructor() {
    throw new Error('DateHelper nao pode ser instanciada!');
  }
  
  static dataPTexto(data) {
    return data.getDate()
      + '/' + (data.getMonth() + 1)
      + '/' + data.getFullYear();
  }

  static textoPData(texto) {
    return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
  }

}