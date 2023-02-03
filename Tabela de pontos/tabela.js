var Mari= {
  nome:'Mari',
  vitorias:0,
  empates:0,
  derrotas:0,
  pontos:0
};

var Visitant={
  nome:'Visitant',
  vitorias:0,
  empates:0,
  derrotas:0,
  pontos:0
}
var elementotabela=document.getElementById('tabelaJogadores')
ExibirnaTela()
function ExibirnaTela(){
  elementotabela.innerHTML=`
      <tr>
          <td>${Mari.nome}</td>
          <td>${Mari.vitorias}</td>
          <td>${Mari.empates}</td>
          <td>${Mari.derrotas}</td>
          <td>${Mari.pontos}</td>
          <td><button onClick="adicionarVitoria(Mari)">Vitória</button></td>
          <td><button onClick="adicionarEmpate(Mari)">Empate</button></td>
          <td><button onClick="adicionarDerrota(Mari)">Derrota</button></td>
      </tr>
  `+`
      <tr>
          <td>${Visitant.nome}</td>
          <td>${Visitant.vitorias}</td>
          <td>${Visitant.empates}</td>
          <td>${Visitant.derrotas}</td>
          <td>${Visitant.pontos}</td>
          <td><button onClick="adicionarVitoria(Visitant)">Vitória</button></td>
          <td><button onClick="adicionarEmpate(Visitant)">Empate</button></td>
          <td><button onClick="adicionarDerrota(Visitant)">Derrota</button></td>
      </tr>
  `; ;
  
}
function adicionarVitoria(jogador){
  jogador.vitorias++
  jogador.pontos+=3
  ExibirnaTela();
}
function adicionarEmpate(jogador){
  jogador.empate++
  jogador.pontos++
  ExibirnaTela();
}
function adicionarDerrota(jogador){
  jogador.derrota++
  jogador.pontos-=2
  ExibirnaTela();
}
