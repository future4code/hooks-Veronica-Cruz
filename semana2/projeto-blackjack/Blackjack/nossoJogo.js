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


let confirm = true

if(confirm) {
   console.log("Bem vindo(a) ao Jogo BlackJack!")
} else {
   console.log("O jogo acabou!")
}
let carta1Usuario = comprarCarta()
let carta2Usuario = comprarCarta()
let carta1Pc = comprarCarta()
let carta2Pc = comprarCarta()
let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
let pontuacaoPc = carta1Pc.valor + carta2Pc.valor



if(carta1Pc > carta1Usuario) {
   const compra1 = comprarCarta
   console.log(cartas.texto) 
   console.log(cartas.valor) 
}
else(carta1Usuario > carta1Pc) {
   const compra2 = comprarCarta
   console.log(cartas.texto) 
   console.log(cartas.valor) 
}

if(carta2Pc > carta2Usuario) {
   const compra3 = comprarCarta
   console.log(cartas.texto) 
   console.log(cartas.valor) 
}
else(carta2Usuario > carta2Pc) {
   const compra4 = comprarCarta
   console.log(cartas.texto) 
   console.log(cartas.valor) 

}

