class NegociacaoController{
   
   constructor() {      
      let $ = document.querySelector.bind(document);
      let inputData = $('#data');
      let inputQtde = $('#quantidade');
      let inputVlr  = $('#valor');
   }

   adiciona(event){

      event.preventDefault();
      
      console.log(inputData);
      console.log(inputQtde);
      console.log(inputVlr);
      
   }
}