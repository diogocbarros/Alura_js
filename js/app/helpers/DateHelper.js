class DateHelper{
   datapTexto(data){
      return data.getDate()
      + '/' + (data.getMonth() + 1)
      + '/' + data.getFullYear();
   }
   textopData(texto){
      return new Date(...texto.split('-').map((item,indice) => item - indice %2));
   }

}