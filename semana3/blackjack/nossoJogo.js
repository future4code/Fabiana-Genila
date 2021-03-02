/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log('Bem vindo ao jogo de Blackjack!')

let blackjack = confirm('Quer iniciar uma nova rodada?')

if(blackjack) { //se o usuário clicar OK

   const cartaUsuario1 = comprarCarta() //cada jogador (usuário e computador) recebendo 2 cartas
   const cartaUsuario2 = comprarCarta()
   const cartaComputador1 = comprarCarta()
   const cartaComputador2 = comprarCarta()

   const pontosUsuario = cartaUsuario1.valor + cartaUsuario2.valor //pontução é a soma dos valores das cartas do jogador
   const pontosComputador = cartaComputador1.valor + cartaComputador2.valor //pontuação é a soma dos calores das cartas do computador

      console.log('Suas cartas: ', cartaUsuario1.texto + cartaUsuario2.texto + pontosUsuario) //mostra as cartas do usuário e a pontuação
      console.log('Cartas do computador: ' + cartaComputador1.texto + cartaComputador2.texto + pontosComputador)  //mostra as cartas do computador e a pontuação
   
   if(pontosUsuario > pontosComputador){ //se os pontos do usuários forem maiores que o do computador
      console.log('Sua pontuação: ' + pontosUsuario) 
      console.log('Pontuação do computador: ' + pontosComputador)  
      console.log('O USUÁRIO GANHOU!!')

   } else if(pontosUsuario < pontosComputador) { //se os pontos do usuários forem menores que o do computador
      console.log('Sua pontuação: ' + pontosUsuario) 
      console.log('Pontuação do computador: ' + pontosComputador)       
      console.log('O USUÁRIO PERDEU!!')

   } else if(pontosUsuario === pontosComputador) { //se os pontos do usuários forem iguais aos do computador
      console.log('Sua pontuação: ' + pontosUsuario) 
      console.log('Pontuação do computador: ' + pontosComputador)  
      console.log('EMPATOU!!')
   }

} else {
   console.log('O jogo acabou') // se o usuário clicar "cancelar"
}
