function adicionarFilme() {
  
  var filme=document.getElementById('filme').value
  
  var listaFilmes=document.getElementById('listaFilmes')
  elementolistaFilmes=elementolistaFilmes.innerHTML= elementolistaFilmes.innerHTML + '<img src='+ filme + '>'
  
 document.getElementById('filmes').value=''

  
}
