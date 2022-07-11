
console.log("Bem vindo(a) ao Jogo BlackJack!")
let novoJogo = confirm("Quer iniciar uma nova rodada?")

if (novoJogo) {
   console.log("Iniciou uma nova rodada!")
   
   //variáveis criadas para mostrar as cartas do usuário e do pc
   let carta1Usuario = comprarCarta()
   let carta2Usuario = comprarCarta()
   let carta1Pc = comprarCarta()
   let carta2Pc = comprarCarta()

   //soma das cartas do usuário e do pc
   let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
   let pontuacaoPc = carta1Pc.valor + carta2Pc.valor

   //para mostrar as cartas e pontuação de cada um (usuário e pc)
   // fora da condição, para mostrar sempre as cartas dos dois

   console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto}  - pontuação ${pontuacaoUsuario}`)
   console.log(`Computador - cartas:  ${carta1Pc.texto} ${carta2Pc.texto}  - pontuação ${pontuacaoPc}`)

   //condição para comparar a pontuação do usuário com a do computador e dizer quem ganhou!
   if (pontuacaoUsuario > pontuacaoPc) {
      console.log("O usuário ganhou!")
      
     }
   else if (pontuacaoPc > pontuacaoUsuario) {
      console.log("O computador ganhou!")
       
   }else if (pontuacaoUsuario === pontuacaoPc){
      console.log("O jogo empatou!")
   }
  
} else {
   console.log("O jogo acabou!")
}







