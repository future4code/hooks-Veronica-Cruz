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
// se o usuário digitar -10, o console vai dar erro.

//c) haverá erro no console sim, pois o  "if" é uma condicional e precisaria ter o 
// "else" para se caso o número não fosse maior que zero.

//Exercícios de Escrita de Código:

//Exercício 1

/* const idadeDoUsuario = Number(prompt("Escreva aqui qual é a sua idade?"))

if (idadeDoUsuario >18) {
    console.log("Você pode dirigir")
} 
else (idadeDoUsuario <18)  {
    console.log("Você não pode dirigir")
} */

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

/* const turnoAluno= prompt("Qual o turno do seu curso? Digite M(Manhã), V(Verspertino/Tarde) ou N(Noturno)")

switch (turnoAluno.toUpperCase()) {
case 'M':
console.log("Bom dia")
break
case 'V':
console.log("Boa Tarde")
break
case 'N':
console.log("Boa Noite")
} */

//Exercício 4

const generoFilme = prompt("Qual o gênero do filme?")
const ingresso = Number(prompt("Qual o valor do ingresso?"))
const amigo = prompt("Vai assistir ao filme com um amigo? Sim ou Não")
const genero = "fantasia"
const valorIngresso = 15


if (generoFilme === "fantasia") {

} else if(valorIngresso < 15) {

} else if (amigo.toUpperCase === "Sim"){
    console.log("Bom filme")
} else if (amigo.toUpperCase === "Não"){
    console.log("Escolha outro filme :(")
}
