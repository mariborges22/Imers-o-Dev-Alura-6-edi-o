var numerosecreto= parseInt(Math.random()*1001)
while(chute!=numerosecreto){
  var chute=prompt('Digite um número de 1 a 1000')
}
if (chute==numerosecreto){

alert('Parabéns! Você acertou');
}
else if (chute>numerosecreto){
    alert('Err..tente novamente! O número é menor')
}
else if (chute<numerosecreto){
    alert('Err...tente novamente! O número é maior')
}
