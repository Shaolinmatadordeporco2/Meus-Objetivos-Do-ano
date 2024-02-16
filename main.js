const botoes = document.querySelectorAll('botao');
for(let i=0;i <botoes.length;i++){ botoes[i].onclick = function() {

for(let j=0;j<botoes.length;j++) { botoes[j].classList.remove('ativo');
}
botoes[i].classList.add('ativo');
}
}

tecla.onclick = function(){
  tecla.classList.add('ativa');
   };
tecla.onkeydown = function(){
  tecla.classList.add('ativa');
}
tecla.onkeyup = function(){
  tecla.classList.remove('ativa');
}
console.log(contador);