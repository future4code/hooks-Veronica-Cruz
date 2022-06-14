//Exercícios de Interpretação de Lógica:

//Exercício 1

//a) O código pede ao usuário para inserir um número e impõe uma condição:
//se ele for divisível por 2, dar como resposta no console que "passou no teste"
//se ele não for divisível por 2, dar resposta que ele "não passou no teste"

//b) números divisíveis por 2

//c) números que não são divisíveis por 2

//Exercício 2

//a) serve para definir o preço da fruta escolhida. o código diz que irá imprimir no console o preço da fruta
//escolhida pelo usuário. se não for nenhuma das frutas declaradas no código será o valor de R$5,00

//b) o console imprimirá "O preço da fruta maçã é R$2.25"

//c) o console iria imprimir o preço do defalut, pois seria como se pêra não estivesse incluso na condicional.

//Exercício 3

//a) o código está pedindo para o usuário digitar um número

//b) se o usuário digitar 10, o console vai imprimir "Esse número passou no teste"
// se o usuário digitar -10, o console vai dar erro, pois não tem condicional caso
//o número seja menor que zero.


//c) haverá erro no console sim, pois o  "if" é uma condicional e precisaria ter o 
// "else" para se caso o número não fosse maior que zero.

//Exercícios de Escrita de Código:

//Exercício 1

// const idadeDoUsuario = Number(prompt("Escreva aqui qual é a sua idade?"))

// if (idadeDoUsuario >18) {
//     console.log("Você pode dirigir")
// } 
// else if (idadeDoUsuario < 18)  {
//     console.log("Você não pode dirigir")
// }

//Exercício 2

/* const turnoAluno = prompt("Você estuda em qual turno? Digite M(Manhã), V(Verspertino/Tarde) ou N(Noturno)")

if(turnoAluno.toUpperCase() === "M") {
    console.log("Bom dia")
} else if (turnoAluno.toUpperCase() === "V") {
    console.log("Boa Tarde")
} else if(turnoAluno.toUpperCase() === "N") {
    console.log("Boa noite")
} */

//Exercício 3

// const turnoAluno= prompt("Qual o turno do seu curso? Digite M(Manhã), V(Verspertino/Tarde) ou N(Noturno)")

// switch (turnoAluno.toUpperCase()) {
// case 'M':
// console.log("Bom dia")
// break
// case 'V':
// console.log("Boa Tarde")
// break
// case 'N':
// console.log("Boa Noite")
// }

//Exercício 4

// const generoFilme = prompt("Qual o gênero do filme?")
// const ingresso = Number(prompt("Qual o valor do ingresso?"))

// if (generoFilme === "fantasia" && ingresso < 15) {
//    console.log ("Bom Filme!")
// } else {
//     console.log ("Escolha outro filme :(")
// }

//DESAFIOS:

//exercício 1

// const generoFilme = prompt("Qual o gênero do filme?")
// const ingresso = Number(prompt("Qual o valor do ingresso?"))
// const lanchinho = prompt("Qual lanchinho você vai querer para acompanhar seu filme?")

// if (generoFilme === "fantasia" && ingresso < 15) {
//    console.log ("Bom Filme!", "Aproveite seu", lanchinho)
// } else {
//     console.log ("Escolha outro filme :(")
// }

//exercicio 2

const infoUsuario = (valor) => {
    //pegar informações do usuário
 const nome = prompt("Digite seu nome completo").toUpperCase()
 const tipoDeJogo = prompt("Qual será o tipo de jogo? Digite IN para Jogo Internacional ou DO para Jogo Doméstico").toUpperCase()
 const etapaDoJogo = prompt("Em qual etapa? Digite SF para Semi-Final, DT para Decisão de Terceiro Lugar ou FI para Final").toUpperCase()
 const categoria = Number(prompt("Qual a categoria? Digite as opções 1, 2, 3 ou 4"))
 const quantidadeDeIngressos = Number(prompt("Qual a quantidade de ingressos?"))

console.log('Nome do Cliente:',nome)
console.log('Internacional ou Doméstico:', tipoDeJogo)
console.log('Etapa Do Jogo:',etapaDoJogo)
console.log('Categoria:',categoria)
console.log('Quantidade de Ingressos:',quantidadeDeIngressos)

    //tabela de preços
 const tabelaDePrecosSF = {
    SFCat1 : 1350,
    SFCat2 : 880,
    SFCat3 : 550,
    SFCat4 : 220
 }

 const tabelaDePrecosDT = {
    DTCat1 : 660,
    DTCat2 : 440,
    DTCat3 : 330,
    DTCat4 : 170
 }

 const tabelaDePrecosFI = {
    FICat1 : 1980,
    FICat2 : 1320,
    FICat3 : 880,
    FICat4 : 330
 }

 
    //condicional para imprimir no console as informações do usuário e o valor total 

    const condicionalTotal = () => {
        if (etapaDoJogo === 'SF'.toUpperCase() && categoria === 1) {
            console.log('Valor do Ingresso:',tabelaDePrecosSF.SFCat1,'Total:',tabelaDePrecosSF.SFCat1 * quantidadeDeIngressos)
         } else if (etapaDoJogo === 'SF'.toUpperCase() && categoria === 2) {
            console.log('Valor do Ingresso:',tabelaDePrecosSF.SFCat2,'Total:',tabelaDePrecosSF.SFCat2 * quantidadeDeIngressos)
         }else if (etapaDoJogo === 'SF'.toUpperCase() && categoria === 3) {
            console.log('Valor do Ingresso:',tabelaDePrecosSF.SFCat3,'Total:',tabelaDePrecosSF.SFCat3 * quantidadeDeIngressos)
        }else if (etapaDoJogo === 'SF'.toUpperCase() && categoria === 4) {
            console.log('Valor do Ingresso:',tabelaDePrecosSF.SFCat4,'Total:',tabelaDePrecosSF.SFCat4 * quantidadeDeIngressos)
        }else if (etapaDoJogo === 'DT'.toUpperCase() && categoria === 1 ) {
            console.log('Valor do Ingresso:',tabelaDePrecosDT.DTCat1,'Total:',tabelaDePrecosDT.DTCat1 * quantidadeDeIngressos)
        }else if (etapaDoJogo === 'DT'.toUpperCase() && categoria === 2) {
            console.log('Valor do Ingresso:',tabelaDePrecosDT.DTCat2,'Total:',tabelaDePrecosDT.DTCat2 * quantidadeDeIngressos)
        }else if (etapaDoJogo === 'DT'.toUpperCase() && categoria === 3) {
            console.log('Valor do Ingresso:',tabelaDePrecosDT.DTCat3,'Total:',tabelaDePrecosDT.DTCat3 * quantidadeDeIngressos)
        }else if (etapaDoJogo === 'DT'.toUpperCase() && categoria === 4) {
            console.log('Valor do Ingresso:',tabelaDePrecosDT.DTCat4,'Total:',tabelaDePrecosDT.DTCat4 * quantidadeDeIngressos)
        }else if (etapaDoJogo === 'FI'.toUpperCase() && categoria === 1) {
            console.log('Valor do Ingresso:',tabelaDePrecosFI.FICat1,'Total:',tabelaDePrecosFI.FICat1 * quantidadeDeIngressos)
        }else if (etapaDoJogo === 'FI'.toUpperCase() && categoria === 2) {
            console.log('Valor do Ingresso:',tabelaDePrecosFI.FICat2,'Total:',tabelaDePrecosFI.FICat2 * quantidadeDeIngressos)
        }else if (etapaDoJogo === 'FI'.toUpperCase() && categoria === 3) {
            console.log('Valor do Ingresso:',tabelaDePrecosFI.FICat3,'Total:',tabelaDePrecosFI.FICat3 * quantidadeDeIngressos)
        }else if (etapaDoJogo === 'FI'.toUpperCase() && categoria === 4) {
            console.log('Valor do Ingresso:',tabelaDePrecosFI.FICat4,'Total:',tabelaDePrecosFI.FICat4 * quantidadeDeIngressos)
        }
    } 
    return condicionalTotal()

}

infoUsuario()
 




